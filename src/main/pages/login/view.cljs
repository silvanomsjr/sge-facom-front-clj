(ns main.pages.login.view
  (:require
   [clojure.string :as str]
   [reitit.frontend.easy :as rfe]
   [reagent.core :as r]
   [main.utils.main :refer [API_URL]]
   [ajax.core :refer [POST]]))

(defonce usuario (r/atom ""))

(defonce senha (r/atom ""))

(defonce login_errors (r/atom []))

(defonce erro-modal-aberto? (r/atom false))

(defonce login_error_req (r/atom nil))

(defonce loading? (r/atom false))

(defn tem-erro? [campo]
  (some #(= (:error %) campo) @login_errors))

(defn req-to-api [on_success on_error]
  (POST (str API_URL "/users/login")
    {:body (.stringify js/JSON (clj->js {:email @usuario :password @senha}))
     :headers {"Content-Type" "application/json"}
     :handler on_success
     :error-handler on_error
     :response-format :json
     :keywords? true}))

(defn efetua-login []
  (let [errors (cond-> []
                 (str/blank? @usuario) (conj {:error :usuario})
                 (str/blank? @senha) (conj {:error :senha}))]
    (if (seq errors)
      (reset! login_errors errors)
      (do
        (reset! loading? true)
        (reset! login_errors [])
        (req-to-api
         (fn [{:keys [token]}]
           (if token
             (do
               (.setItem js/localStorage "token" token)
               (rfe/replace-state :home))
             (reset! login_errors [{:error :login-failed}]))
           (reset! loading? false))
         (fn [error]
           (println "Erro no login: " error)
           (reset! login_error_req error)
           (reset! erro-modal-aberto? true)
           (reset! login_errors [{:error :login-failed}])
           (reset! loading? false)))))))

(defn logo []
  [:div
   {:class "flex justify-center items-center gap-2"}
   [:img
    {:src "/images/ufu_logo_small.png"
     :style {:width "35px"}}]
   [:span
    {:class "font-bold text-2xl text-[#1c2256]"}
    "SGE FACOM"]])

(defn loading-spinner []
  [:div {:class "fixed inset-0 flex items-center justify-center bg-white/70 z-[999999]"}
   [:div {:class "animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"}]])

(defn erro-modal []
  [:div
   (when @erro-modal-aberto?
     [:div {:class "fixed top-0 right-0 left-0 z-10000000000000 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden bg-black/30"}
      [:div {:class "relative p-4 w-full max-w-2xl max-h-full"}
       [:div {:class "relative bg-white rounded-lg shadow-sm dark:bg-gray-700"}
        [:div {:class "flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200 dark:border-gray-600"}
         [:h3 {:class "text-xl font-semibold text-gray-900 dark:text-white"}
          "Ocorreu um erro!"]
         [:button {:on-click #(reset! erro-modal-aberto? false)
                   :class "text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"}
          [:svg {:class "w-3 h-3" :fill "none" :viewBox "0 0 14 14" :xmlns "http://www.w3.org/2000/svg" :aria-hidden "true"}
           [:path {:stroke "currentColor" :stroke-width "2" :stroke-linecap "round" :stroke-linejoin "round" :d "M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"}]]
          [:span.sr-only "Fechar Modal"]]]

        ;; Modal body
        [:div {:class "w-full flex items-center justify-center p-4 md:p-5 space-y-4"}
         [:p {:class "text-base leading-relaxed text-gray-500 dark:text-gray-400"}
          (-> @login_error_req
              :response
              :error)]]
        ;; Modal footer
        [:div {:class "flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"}
         [:button {:on-click #(reset! erro-modal-aberto? false)
                   :class "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"}
          "Fechar"]]]]])])

(defn login []
  [:<>
   [erro-modal]
   (when @loading?
     [loading-spinner])
   [:div
    {:class "w-full h-screen flex justify-center items-center"}
    [:div
     {:class "w-[40%] p-8 flex flex-col shadow-2xl rounded-sm border-gray-200 border-1 gap-2"}
     [:div
      {:class "w-full"}
      [logo]]
     [:input
      {:placeholder "Usuário"
       :class "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       :type "text"
       :on-change #(reset! usuario (-> % .-target .-value))
       :value @usuario
       :required true}]
     [:p {:class (str "text-red-600 text-sm " (if (tem-erro? :usuario) "visible" "invisible"))} "Usuário é obrigatório"]
     [:input
      {:placeholder "Senha"
       :class "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       :type "password"
       :value @senha
       :on-change #(reset! senha (-> % .-target .-value))
       :required true}]
     [:p {:class (str "text-red-600 text-sm " (if (tem-erro? :senha) "visible" "invisible"))} "Senha é obrigatória"]
     [:button
      {:on-click efetua-login
       :class "w-full px-3 py-2 bg-[#1c2256] text-white cursor-pointer rounded hover:brightness-140 transition-all duration-200"}
      "Entrar"]
     [:div
      {:class "w-full flex items-center justify-center"}
      [:a {:href (rfe/href :cadastro)} "Fazer cadastro"]]]]])
