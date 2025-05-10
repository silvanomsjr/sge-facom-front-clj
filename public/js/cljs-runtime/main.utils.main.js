goog.provide('main.utils.main');
main.utils.main.API_URL = "http://3.138.123.158";
main.utils.main.base64url__GT_base64 = (function main$utils$main$base64url__GT_base64(s){
return (function (p1__13084_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13084_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.mod(((4) - cljs.core.mod(cljs.core.count(p1__13084_SHARP_),(4))),(4)),"=")))].join('');
})(clojure.string.replace(clojure.string.replace(s,"-","+"),"_","/"));
});
main.utils.main.decode_token = (function main$utils$main$decode_token(token){
var payload_str = goog.crypt.base64.decodeString(main.utils.main.base64url__GT_base64(cljs.core.second(clojure.string.split.cljs$core$IFn$_invoke$arity$2(token,/\./))));
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(payload_str),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
});

//# sourceMappingURL=main.utils.main.js.map
