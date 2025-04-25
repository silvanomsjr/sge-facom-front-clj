(ns main.pages.login.view
  (:require
   [clojure.string :as str]
   [reitit.frontend.easy :as rfe]
   [reagent.core :as r]
   [ajax.core :refer [POST]]))

(defonce usuario (r/atom ""))

(defonce senha (r/atom ""))

(defonce login_errors (r/atom []))

(defn req-to-api [on_success on_error]
  (POST "http://localhost:3000/users/login"
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
      (req-to-api
       (fn [{:keys [token]}]
         (if token
           (do
             (.setItem js/localStorage "token" token)
             (rfe/replace-state :home))
           (reset! login_errors [{:error :login-failed}])))
       (fn [error]
         (println "Erro no login: " error)
         (reset! login_errors [{:error :login-failed}]))))))

(defn logo []
  [:div
   {:class "flex justify-center items-center gap-2"}
   [:img
    {:src "/images/ufu_logo_small.png"
     :style {:width "35px"}}]
   [:span
    {:class "font-bold text-2xl text-[#1c2256]"}
    "SGE FACOM"]])

(defn login []
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
    [:input
     {:placeholder "Senha"
      :class "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      :type "password"
      :value @senha
      :on-change #(reset! senha (-> % .-target .-value))
      :required true}]
    [:button
     {:on-click efetua-login
      :class "w-full px-3 py-2 bg-[#1c2256] text-white cursor-pointer rounded hover:brightness-140 transition-all duration-200"}
     "Entrar"]
    [:a {:href (rfe/href :cadastro)} "Cadastro"]]])
