(ns main.pages.cadastro.view
  (:require
   [clojure.string :as str]
   [reitit.frontend.easy :as rfe]
   [reagent.core :as r]))

(defonce usuario (r/atom ""))

(defonce senha (r/atom ""))

(defonce login_errors (r/atom []))

(defn efetua-login []
  (let [errors (cond-> []
                 (str/blank? @usuario) (conj {:error :usuario})
                 (str/blank? @senha) (conj {:error :senha}))]
    (if (seq errors)
      (reset! login_errors errors)
      (do
        (.setItem js/localStorage "usuario" @usuario)
        (.setItem js/localStorage "senha" @senha)))))

(defn logo []
  [:div
   {:class "flex justify-center items-center gap-2"}
   [:img
    {:src "/images/ufu_logo_small.png"
     :style {:width "35px"}}]
   [:span
    {:class "font-bold text-2xl text-[#1c2256]"}
    "SGE FACOM"]])

(defn cadastro []
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
     "CADASTRAR"]
    [:a {:href (rfe/href :home)} "home"]]])
