(ns main.pages.home.view
  (:require [main.utils.main :refer [decode-token]]))

(defn get-user-type []
  (let [token (.getItem js/localStorage "token")
        decoded (decode-token token)]
    (println "dec: " (:userType decoded))
    (:userType decoded)))

(defn home []
  [:<>
   [:span
    (get-user-type)]
   [:div
    [:h1
     {:class "p-4"}
     "testando"]]])
