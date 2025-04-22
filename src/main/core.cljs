(ns main.core
  (:require
   ["react-dom/client" :refer [createRoot]]
   [reagent.core :as r]
   [reitit.frontend :as rf]
   [reitit.frontend.easy :as rfe]
   [main.pages.home.view :refer [home]]
   [main.pages.login.view :refer [login]]
   [main.pages.cadastro.view :refer [cadastro]]))

(defonce current-page (r/atom nil))
(defonce root (createRoot (.getElementById js/document "app")))

(defn not-found []
  [:div [:h1 "nada encontrado"]])

(def routes
  [["/"      {:name :home :view home}]
   ["/login" {:name :login :view login}]
   ["/cadastro" {:name :cadastro :view cadastro}]])

(def router (rf/router routes))

(defn logged-in []
  (let [token (.getItem js/localStorage "token")]
    (if token
      true
      false)))

(defn on-navigate [new-match]
  (let [logged? (logged-in)
        page (get-in new-match [:data :name])]
    (cond
      (and (not logged?) (not  (#{:login :cadastro} page)))
      (rfe/replace-state :login)
      (and logged? (= page :login))
      (rfe/replace-state :home)
      :else
      (reset! current-page (:view (:data new-match))))))

(defn app []
  (fn []
    [:div
     (when (logged-in)
       [:nav
        [:a {:href (rfe/href :home)} "home"]
        " | "
        [:a {:href (rfe/href :login)} "login"]])

     (if @current-page
       [@current-page]
       [not-found])]))

(defn init []
  (rfe/start!
   router
   on-navigate
   {:use-fragment false})
  (.render root (r/as-element [app])))

(defn ^:dev/after-load reload! []
  (init))
