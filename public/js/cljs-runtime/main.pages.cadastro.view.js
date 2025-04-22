goog.provide('main.pages.cadastro.view');
if((typeof main !== 'undefined') && (typeof main.pages !== 'undefined') && (typeof main.pages.cadastro !== 'undefined') && (typeof main.pages.cadastro.view !== 'undefined') && (typeof main.pages.cadastro.view.usuario !== 'undefined')){
} else {
main.pages.cadastro.view.usuario = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if((typeof main !== 'undefined') && (typeof main.pages !== 'undefined') && (typeof main.pages.cadastro !== 'undefined') && (typeof main.pages.cadastro.view !== 'undefined') && (typeof main.pages.cadastro.view.senha !== 'undefined')){
} else {
main.pages.cadastro.view.senha = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if((typeof main !== 'undefined') && (typeof main.pages !== 'undefined') && (typeof main.pages.cadastro !== 'undefined') && (typeof main.pages.cadastro.view !== 'undefined') && (typeof main.pages.cadastro.view.login_errors !== 'undefined')){
} else {
main.pages.cadastro.view.login_errors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
main.pages.cadastro.view.efetua_login = (function main$pages$cadastro$view$efetua_login(){
var errors = (function (){var G__12814 = cljs.core.PersistentVector.EMPTY;
var G__12814__$1 = ((clojure.string.blank_QMARK_(cljs.core.deref(main.pages.cadastro.view.usuario)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__12814,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"usuario","usuario",-1332303918)], null)):G__12814);
if(clojure.string.blank_QMARK_(cljs.core.deref(main.pages.cadastro.view.senha))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__12814__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"senha","senha",1788313207)], null));
} else {
return G__12814__$1;
}
})();
if(cljs.core.seq(errors)){
return cljs.core.reset_BANG_(main.pages.cadastro.view.login_errors,errors);
} else {
localStorage.setItem("usuario",cljs.core.deref(main.pages.cadastro.view.usuario));

return localStorage.setItem("senha",cljs.core.deref(main.pages.cadastro.view.senha));
}
});
main.pages.cadastro.view.logo = (function main$pages$cadastro$view$logo(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-center items-center gap-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/ufu_logo_small.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"35px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-bold text-2xl text-[#1c2256]"], null),"SGE FACOM"], null)], null);
});
main.pages.cadastro.view.cadastro = (function main$pages$cadastro$view$cadastro(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full h-screen flex justify-center items-center"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-[40%] p-8 flex flex-col shadow-2xl rounded-sm border-gray-200 border-1 gap-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.pages.cadastro.view.logo], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Usu\u00E1rio",new cljs.core.Keyword(null,"class","class",-2030961996),"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12815_SHARP_){
return cljs.core.reset_BANG_(main.pages.cadastro.view.usuario,p1__12815_SHARP_.target.value);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(main.pages.cadastro.view.usuario),new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Senha",new cljs.core.Keyword(null,"class","class",-2030961996),"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(main.pages.cadastro.view.senha),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12816_SHARP_){
return cljs.core.reset_BANG_(main.pages.cadastro.view.senha,p1__12816_SHARP_.target.value);
}),new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),main.pages.cadastro.view.efetua_login,new cljs.core.Keyword(null,"class","class",-2030961996),"w-full px-3 py-2 bg-[#1c2256] text-white cursor-pointer rounded hover:brightness-140 transition-all duration-200"], null),"CADASTRAR"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home","home",-74557309))], null),"home"], null)], null)], null);
});

//# sourceMappingURL=main.pages.cadastro.view.js.map
