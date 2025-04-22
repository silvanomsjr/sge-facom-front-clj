goog.provide('main.core');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
if((typeof main !== 'undefined') && (typeof main.core !== 'undefined') && (typeof main.core.current_page !== 'undefined')){
} else {
main.core.current_page = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof main !== 'undefined') && (typeof main.core !== 'undefined') && (typeof main.core.root !== 'undefined')){
} else {
main.core.root = module$node_modules$react_dom$client.createRoot(document.getElementById("app"));
}
main.core.not_found = (function main$core$not_found(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"nada encontrado"], null)], null);
});
main.core.routes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"view","view",1247994814),main.pages.home.view.home], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/login",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"view","view",1247994814),main.pages.login.view.login], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/cadastro",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"cadastro","cadastro",1342479704),new cljs.core.Keyword(null,"view","view",1247994814),main.pages.cadastro.view.cadastro], null)], null)], null);
main.core.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(main.core.routes);
main.core.logged_in = (function main$core$logged_in(){
var token = localStorage.getItem("token");
if(cljs.core.truth_(token)){
return true;
} else {
return false;
}
});
main.core.on_navigate = (function main$core$on_navigate(new_match){
var logged_QMARK_ = main.core.logged_in();
var page = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_match,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
if((((!(logged_QMARK_))) && (cljs.core.not((function (){var fexpr__12800 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"login","login",55217519),null,new cljs.core.Keyword(null,"cadastro","cadastro",1342479704),null], null), null);
return (fexpr__12800.cljs$core$IFn$_invoke$arity$1 ? fexpr__12800.cljs$core$IFn$_invoke$arity$1(page) : fexpr__12800.call(null,page));
})())))){
return reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"login","login",55217519));
} else {
if(((logged_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"login","login",55217519))))){
return reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return cljs.core.reset_BANG_(main.core.current_page,new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));

}
}
});
main.core.app = (function main$core$app(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),((main.core.logged_in())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home","home",-74557309))], null),"home"], null)," | ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"login","login",55217519))], null),"login"], null)], null):null),(cljs.core.truth_(cljs.core.deref(main.core.current_page))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(main.core.current_page)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.not_found], null))], null);
});
});
main.core.init = (function main$core$init(){
reitit.frontend.easy.start_BANG_(main.core.router,main.core.on_navigate,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),false], null));

return main.core.root.render(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.core.app], null)));
});
main.core.reload_BANG_ = (function main$core$reload_BANG_(){
return main.core.init();
});

//# sourceMappingURL=main.core.js.map
