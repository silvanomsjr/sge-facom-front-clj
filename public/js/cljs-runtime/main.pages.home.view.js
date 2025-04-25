goog.provide('main.pages.home.view');
main.pages.home.view.get_user_info = (function main$pages$home$view$get_user_info(){
var token = localStorage.getItem("token");
var decoded = main.utils.main.decode_token(token);
return decoded;
});
main.pages.home.view.dropdown = (function main$pages$home$view$dropdown(){
var open_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var user = main.pages.home.view.get_user_info();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative","div.relative",430334058),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.bg-blue-500.text-white.px-4.py-2.rounded","button.bg-blue-500.text-white.px-4.py-2.rounded",562541006),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_QMARK_,cljs.core.not);
})], null),"Usu\u00E1rio"], null),(cljs.core.truth_(cljs.core.deref(open_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.right-0.mt-2.w-48.bg-white.shadow-lg.rounded","div.absolute.right-0.mt-2.w-48.bg-white.shadow-lg.rounded",-964476762),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-4.py-2.text-gray-700","div.px-4.py-2.text-gray-700",-460972765),"Email: ",new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(user)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-4.py-2.text-gray-700","div.px-4.py-2.text-gray-700",-460972765),"Tipo: ",new cljs.core.Keyword(null,"userType","userType",-921386817).cljs$core$IFn$_invoke$arity$1(user)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.bg-red-500.text-white.px-4.py-2.rounded.mt-2","button.bg-red-500.text-white.px-4.py-2.rounded.mt-2",-1968199232),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Logout"], 0));
})], null),"Sair"], null)], null):null)], null);
});
main.pages.home.view.home = (function main$pages$home$view$home(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"p-4"], null),"testando"], null)], null);
});

//# sourceMappingURL=main.pages.home.view.js.map
