goog.provide('main.pages.login.view');
if((typeof main !== 'undefined') && (typeof main.pages !== 'undefined') && (typeof main.pages.login !== 'undefined') && (typeof main.pages.login.view !== 'undefined') && (typeof main.pages.login.view.usuario !== 'undefined')){
} else {
main.pages.login.view.usuario = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if((typeof main !== 'undefined') && (typeof main.pages !== 'undefined') && (typeof main.pages.login !== 'undefined') && (typeof main.pages.login.view !== 'undefined') && (typeof main.pages.login.view.senha !== 'undefined')){
} else {
main.pages.login.view.senha = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
}
if((typeof main !== 'undefined') && (typeof main.pages !== 'undefined') && (typeof main.pages.login !== 'undefined') && (typeof main.pages.login.view !== 'undefined') && (typeof main.pages.login.view.login_errors !== 'undefined')){
} else {
main.pages.login.view.login_errors = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
main.pages.login.view.req_to_api = (function main$pages$login$view$req_to_api(on_success,on_error){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Que isso: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.deref(main.pages.login.view.usuario),new cljs.core.Keyword(null,"password","password",417022471),cljs.core.deref(main.pages.login.view.senha)], null))))], 0));

return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic("http://localhost:3000/users/login",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.deref(main.pages.login.view.usuario),new cljs.core.Keyword(null,"password","password",417022471),cljs.core.deref(main.pages.login.view.senha)], null))),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),on_success,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),on_error,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)], 0));
});
main.pages.login.view.efetua_login = (function main$pages$login$view$efetua_login(){
var errors = (function (){var G__12855 = cljs.core.PersistentVector.EMPTY;
var G__12855__$1 = ((clojure.string.blank_QMARK_(cljs.core.deref(main.pages.login.view.usuario)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__12855,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"usuario","usuario",-1332303918)], null)):G__12855);
if(clojure.string.blank_QMARK_(cljs.core.deref(main.pages.login.view.senha))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__12855__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"senha","senha",1788313207)], null));
} else {
return G__12855__$1;
}
})();
if(cljs.core.seq(errors)){
return cljs.core.reset_BANG_(main.pages.login.view.login_errors,errors);
} else {
return main.pages.login.view.req_to_api((function (p__12856){
var map__12857 = p__12856;
var map__12857__$1 = cljs.core.__destructure_map(map__12857);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12857__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
if(cljs.core.truth_(token)){
localStorage.setItem("token",token);

return reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return cljs.core.reset_BANG_(main.pages.login.view.login_errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"login-failed","login-failed",2044700486)], null)], null));
}
}),(function (error){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Erro no login: ",error], 0));

return cljs.core.reset_BANG_(main.pages.login.view.login_errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"login-failed","login-failed",2044700486)], null)], null));
}));
}
});
main.pages.login.view.logo = (function main$pages$login$view$logo(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-center items-center gap-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/ufu_logo_small.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"35px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-bold text-2xl text-[#1c2256]"], null),"SGE FACOM"], null)], null);
});
main.pages.login.view.login = (function main$pages$login$view$login(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full h-screen flex justify-center items-center"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-[40%] p-8 flex flex-col shadow-2xl rounded-sm border-gray-200 border-1 gap-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.pages.login.view.logo], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Usu\u00E1rio",new cljs.core.Keyword(null,"class","class",-2030961996),"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12858_SHARP_){
return cljs.core.reset_BANG_(main.pages.login.view.usuario,p1__12858_SHARP_.target.value);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(main.pages.login.view.usuario),new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Senha",new cljs.core.Keyword(null,"class","class",-2030961996),"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(main.pages.login.view.senha),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12859_SHARP_){
return cljs.core.reset_BANG_(main.pages.login.view.senha,p1__12859_SHARP_.target.value);
}),new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),main.pages.login.view.efetua_login,new cljs.core.Keyword(null,"class","class",-2030961996),"w-full px-3 py-2 bg-[#1c2256] text-white cursor-pointer rounded hover:brightness-140 transition-all duration-200"], null),"Entrar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cadastro","cadastro",1342479704))], null),"Cadastro"], null)], null)], null);
});

//# sourceMappingURL=main.pages.login.view.js.map
