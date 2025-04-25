(ns main.pages.home.view
  (:require [main.utils.main :refer [decode-token]]
            [reagent.core :as r]))

(defn get-user-info []
  (let [token (.getItem js/localStorage "token")
        decoded (decode-token token)]
    decoded))

(defn dropdown []
  (let [open? (r/atom false)
        user (get-user-info)]
    [:div.relative
     [:button.bg-blue-500.text-white.px-4.py-2.rounded
      {:on-click #(swap! open? not)}
      "Usuário"]

     (when @open?
       [:div.absolute.right-0.mt-2.w-48.bg-white.shadow-lg.rounded
        [:div.px-4.py-2.text-gray-700 "Email: " (:email user)]
        [:div.px-4.py-2.text-gray-700 "Tipo: " (:userType user)]
        [:button.bg-red-500.text-white.px-4.py-2.rounded.mt-2
         {:on-click #(println "Logout")}
         "Sair"]])]))

(defn home []
  [:div
   [:h1
    {:class "p-4"}
    "testando"]])
