(ns main.utils.main
  (:require [goog.crypt.base64 :as b64]
            [clojure.string :as string]))

(defn decode-token [token]
  (->
   (.parse js/JSON
           (->
            (string/split token #"\.")
            second
            b64/decodeString))
   (js->clj :keywordize-keys true)))
