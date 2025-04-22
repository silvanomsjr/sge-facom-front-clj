goog.provide('main.pages.home.view');
main.pages.home.view.get_user_type = (function main$pages$home$view$get_user_type(){
var token = localStorage.getItem("token");
var decoded = main.utils.main.decode_token(token);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dec: ",new cljs.core.Keyword(null,"userType","userType",-921386817).cljs$core$IFn$_invoke$arity$1(decoded)], 0));

return new cljs.core.Keyword(null,"userType","userType",-921386817).cljs$core$IFn$_invoke$arity$1(decoded);
});
main.pages.home.view.home = (function main$pages$home$view$home(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),main.pages.home.view.get_user_type()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-4"], null),"testando"], null)], null)], null);
});

//# sourceMappingURL=main.pages.home.view.js.map
