(ns main.components.header
  (:require ["react-icons/md" :as md]
            [reagent.core :as r]
            [main.utils.main :refer [decode-token]]
            [reitit.frontend.easy :as rfe]))

(defn get-user-info []
  (let [token (.getItem js/localStorage "token")
        decoded (decode-token token)]
    decoded))

(defonce dropdown-open? (r/atom false))

(defn dropdown []
  (let [user (get-user-info)]
    [:div.relative
     [:button.bg-blue-500.text-white.px-4.py-2.rounded
      {:on-click #(swap! dropdown-open? not)}
      "Usuário"]

     (when @dropdown-open?
       [:div.absolute.right-0.mt-2.w-48.bg-white.shadow-lg.rounded
        [:div.px-4.py-2.text-gray-700 "Email: " (:email user)]
        [:div.px-4.py-2.text-gray-700 "Tipo: " (:userType user)]
        [:button.bg-red-500.text-white.px-4.py-2.rounded.mt-2
         {:on-click #(println "Logout")}
         "Sair"]])]))

(defn logout []
  (.removeItem js/localStorage "token")
  (rfe/replace-state :home))

(defn header []
  [:header {:class "bg-[#071D41] p-4"}
   [:div {:class "flex items-center justify-between"}
    [:div {:class "text-white text-xl font-bold"}
     "SGE - FACOM"]
    [:nav
     [:ul {:class "flex space-x-4 justify-center items-center"}
      [:li [:a {:href "#" :class "text-white hover:text-gray-300"} "Home"]]
      [:li [:a {:href "#" :class "text-white hover:text-gray-300"} "Solicitações"]]
      [:li [dropdown]]
      [:li [:button {:onClick logout :class "text-white hover:text-gray-300"} [md/MdExitToApp]]]]]]])
