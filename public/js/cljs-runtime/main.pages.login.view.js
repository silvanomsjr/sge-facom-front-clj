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
if((typeof main !== 'undefined') && (typeof main.pages !== 'undefined') && (typeof main.pages.login !== 'undefined') && (typeof main.pages.login.view !== 'undefined') && (typeof main.pages.login.view.erro_modal_aberto_QMARK_ !== 'undefined')){
} else {
main.pages.login.view.erro_modal_aberto_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if((typeof main !== 'undefined') && (typeof main.pages !== 'undefined') && (typeof main.pages.login !== 'undefined') && (typeof main.pages.login.view !== 'undefined') && (typeof main.pages.login.view.login_error_req !== 'undefined')){
} else {
main.pages.login.view.login_error_req = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof main !== 'undefined') && (typeof main.pages !== 'undefined') && (typeof main.pages.login !== 'undefined') && (typeof main.pages.login.view !== 'undefined') && (typeof main.pages.login.view.loading_QMARK_ !== 'undefined')){
} else {
main.pages.login.view.loading_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
main.pages.login.view.tem_erro_QMARK_ = (function main$pages$login$view$tem_erro_QMARK_(campo){
return cljs.core.some((function (p1__13207_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(p1__13207_SHARP_),campo);
}),cljs.core.deref(main.pages.login.view.login_errors));
});
main.pages.login.view.req_to_api = (function main$pages$login$view$req_to_api(on_success,on_error){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic([main.utils.main.API_URL,"/users/login"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),cljs.core.deref(main.pages.login.view.usuario),new cljs.core.Keyword(null,"password","password",417022471),cljs.core.deref(main.pages.login.view.senha)], null))),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),on_success,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),on_error,new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)], 0));
});
main.pages.login.view.efetua_login = (function main$pages$login$view$efetua_login(){
var errors = (function (){var G__13208 = cljs.core.PersistentVector.EMPTY;
var G__13208__$1 = ((clojure.string.blank_QMARK_(cljs.core.deref(main.pages.login.view.usuario)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13208,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"usuario","usuario",-1332303918)], null)):G__13208);
if(clojure.string.blank_QMARK_(cljs.core.deref(main.pages.login.view.senha))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__13208__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"senha","senha",1788313207)], null));
} else {
return G__13208__$1;
}
})();
if(cljs.core.seq(errors)){
return cljs.core.reset_BANG_(main.pages.login.view.login_errors,errors);
} else {
cljs.core.reset_BANG_(main.pages.login.view.loading_QMARK_,true);

cljs.core.reset_BANG_(main.pages.login.view.login_errors,cljs.core.PersistentVector.EMPTY);

return main.pages.login.view.req_to_api((function (p__13209){
var map__13210 = p__13209;
var map__13210__$1 = cljs.core.__destructure_map(map__13210);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13210__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
if(cljs.core.truth_(token)){
localStorage.setItem("token",token);

reitit.frontend.easy.replace_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"home","home",-74557309));
} else {
cljs.core.reset_BANG_(main.pages.login.view.login_errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"login-failed","login-failed",2044700486)], null)], null));
}

return cljs.core.reset_BANG_(main.pages.login.view.loading_QMARK_,false);
}),(function (error){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Erro no login: ",error], 0));

cljs.core.reset_BANG_(main.pages.login.view.login_error_req,error);

cljs.core.reset_BANG_(main.pages.login.view.erro_modal_aberto_QMARK_,true);

cljs.core.reset_BANG_(main.pages.login.view.login_errors,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"login-failed","login-failed",2044700486)], null)], null));

return cljs.core.reset_BANG_(main.pages.login.view.loading_QMARK_,false);
}));
}
});
main.pages.login.view.logo = (function main$pages$login$view$logo(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex justify-center items-center gap-2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"/images/ufu_logo_small.png",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"35px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"font-bold text-2xl text-[#1c2256]"], null),"SGE FACOM"], null)], null);
});
main.pages.login.view.loading_spinner = (function main$pages$login$view$loading_spinner(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fixed inset-0 flex items-center justify-center bg-white/70 z-[999999]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"], null)], null)], null);
});
main.pages.login.view.erro_modal = (function main$pages$login$view$erro_modal(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cljs.core.deref(main.pages.login.view.erro_modal_aberto_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"fixed top-0 right-0 left-0 z-10000000000000 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden bg-black/30"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative p-4 w-full max-w-2xl max-h-full"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative bg-white rounded-lg shadow-sm dark:bg-gray-700"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200 dark:border-gray-600"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl font-semibold text-gray-900 dark:text-white"], null),"Ocorreu um erro!"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(main.pages.login.view.erro_modal_aberto_QMARK_,false);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-3 h-3",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 14 14",new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),"true"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"currentColor",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2",new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"round",new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),"round",new cljs.core.Keyword(null,"d","d",1972142424),"M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.sr-only","span.sr-only",2081743235),"Fechar Modal"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full flex items-center justify-center p-4 md:p-5 space-y-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-base leading-relaxed text-gray-500 dark:text-gray-400"], null),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(main.pages.login.view.login_error_req)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(main.pages.login.view.erro_modal_aberto_QMARK_,false);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"], null),"Fechar"], null)], null)], null)], null)], null):null)], null);
});
main.pages.login.view.login = (function main$pages$login$view$login(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.pages.login.view.erro_modal], null),(cljs.core.truth_(cljs.core.deref(main.pages.login.view.loading_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.pages.login.view.loading_spinner], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full h-screen flex justify-center items-center"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-[40%] p-8 flex flex-col shadow-2xl rounded-sm border-gray-200 border-1 gap-2"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.pages.login.view.logo], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Usu\u00E1rio",new cljs.core.Keyword(null,"class","class",-2030961996),"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13211_SHARP_){
return cljs.core.reset_BANG_(main.pages.login.view.usuario,p1__13211_SHARP_.target.value);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(main.pages.login.view.usuario),new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-red-600 text-sm ",(cljs.core.truth_(main.pages.login.view.tem_erro_QMARK_(new cljs.core.Keyword(null,"usuario","usuario",-1332303918)))?"visible":"invisible")].join('')], null),"Usu\u00E1rio \u00E9 obrigat\u00F3rio"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Senha",new cljs.core.Keyword(null,"class","class",-2030961996),"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(main.pages.login.view.senha),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__13212_SHARP_){
return cljs.core.reset_BANG_(main.pages.login.view.senha,p1__13212_SHARP_.target.value);
}),new cljs.core.Keyword(null,"required","required",1807647006),true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["text-red-600 text-sm ",(cljs.core.truth_(main.pages.login.view.tem_erro_QMARK_(new cljs.core.Keyword(null,"senha","senha",1788313207)))?"visible":"invisible")].join('')], null),"Senha \u00E9 obrigat\u00F3ria"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),main.pages.login.view.efetua_login,new cljs.core.Keyword(null,"class","class",-2030961996),"w-full px-3 py-2 bg-[#1c2256] text-white cursor-pointer rounded hover:brightness-140 transition-all duration-200"], null),"Entrar"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full flex items-center justify-center"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),reitit.frontend.easy.href.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cadastro","cadastro",1342479704))], null),"Fazer cadastro"], null)], null)], null)], null)], null);
});

//# sourceMappingURL=main.pages.login.view.js.map
