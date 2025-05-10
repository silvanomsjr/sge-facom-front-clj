(ns main.utils.main
  (:require [goog.crypt.base64 :as b64]
            [clojure.string :as string]))
(def API_URL "http://3.138.123.158")

(defn base64url->base64 [s]
  (-> s
      (string/replace "-" "+")
      (string/replace "_" "/")
      (#(str % (apply str (repeat (mod (- 4 (mod (count %) 4)) 4) "="))))))

(defn decode-token [token]
  (let [payload-str (-> token
                        (string/split #"\.")
                        second
                        base64url->base64
                        b64/decodeString)]
    (-> (.parse js/JSON payload-str)
        (js->clj :keywordize-keys true))))
