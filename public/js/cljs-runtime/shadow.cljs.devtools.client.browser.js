goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21841 = arguments.length;
var i__5727__auto___21842 = (0);
while(true){
if((i__5727__auto___21842 < len__5726__auto___21841)){
args__5732__auto__.push((arguments[i__5727__auto___21842]));

var G__21843 = (i__5727__auto___21842 + (1));
i__5727__auto___21842 = G__21843;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21250){
var G__21251 = cljs.core.first(seq21250);
var seq21250__$1 = cljs.core.next(seq21250);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21251,seq21250__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21259 = cljs.core.seq(sources);
var chunk__21260 = null;
var count__21261 = (0);
var i__21262 = (0);
while(true){
if((i__21262 < count__21261)){
var map__21275 = chunk__21260.cljs$core$IIndexed$_nth$arity$2(null,i__21262);
var map__21275__$1 = cljs.core.__destructure_map(map__21275);
var src = map__21275__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21275__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21275__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21275__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21275__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21276){var e_21853 = e21276;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21853);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21853.message)].join('')));
}

var G__21854 = seq__21259;
var G__21855 = chunk__21260;
var G__21856 = count__21261;
var G__21857 = (i__21262 + (1));
seq__21259 = G__21854;
chunk__21260 = G__21855;
count__21261 = G__21856;
i__21262 = G__21857;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21259);
if(temp__5804__auto__){
var seq__21259__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21259__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21259__$1);
var G__21861 = cljs.core.chunk_rest(seq__21259__$1);
var G__21862 = c__5525__auto__;
var G__21863 = cljs.core.count(c__5525__auto__);
var G__21864 = (0);
seq__21259 = G__21861;
chunk__21260 = G__21862;
count__21261 = G__21863;
i__21262 = G__21864;
continue;
} else {
var map__21277 = cljs.core.first(seq__21259__$1);
var map__21277__$1 = cljs.core.__destructure_map(map__21277);
var src = map__21277__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21277__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21277__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21277__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21277__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21278){var e_21869 = e21278;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21869);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21869.message)].join('')));
}

var G__21870 = cljs.core.next(seq__21259__$1);
var G__21871 = null;
var G__21872 = (0);
var G__21873 = (0);
seq__21259 = G__21870;
chunk__21260 = G__21871;
count__21261 = G__21872;
i__21262 = G__21873;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21289 = cljs.core.seq(js_requires);
var chunk__21290 = null;
var count__21291 = (0);
var i__21292 = (0);
while(true){
if((i__21292 < count__21291)){
var js_ns = chunk__21290.cljs$core$IIndexed$_nth$arity$2(null,i__21292);
var require_str_21877 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21877);


var G__21878 = seq__21289;
var G__21879 = chunk__21290;
var G__21880 = count__21291;
var G__21881 = (i__21292 + (1));
seq__21289 = G__21878;
chunk__21290 = G__21879;
count__21291 = G__21880;
i__21292 = G__21881;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21289);
if(temp__5804__auto__){
var seq__21289__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21289__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21289__$1);
var G__21882 = cljs.core.chunk_rest(seq__21289__$1);
var G__21883 = c__5525__auto__;
var G__21884 = cljs.core.count(c__5525__auto__);
var G__21885 = (0);
seq__21289 = G__21882;
chunk__21290 = G__21883;
count__21291 = G__21884;
i__21292 = G__21885;
continue;
} else {
var js_ns = cljs.core.first(seq__21289__$1);
var require_str_21886 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21886);


var G__21887 = cljs.core.next(seq__21289__$1);
var G__21888 = null;
var G__21889 = (0);
var G__21890 = (0);
seq__21289 = G__21887;
chunk__21290 = G__21888;
count__21291 = G__21889;
i__21292 = G__21890;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21305){
var map__21306 = p__21305;
var map__21306__$1 = cljs.core.__destructure_map(map__21306);
var msg = map__21306__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21306__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21306__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21308(s__21309){
return (new cljs.core.LazySeq(null,(function (){
var s__21309__$1 = s__21309;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21309__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21318 = cljs.core.first(xs__6360__auto__);
var map__21318__$1 = cljs.core.__destructure_map(map__21318);
var src = map__21318__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21318__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21318__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__21309__$1,map__21318,map__21318__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21306,map__21306__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21308_$_iter__21310(s__21311){
return (new cljs.core.LazySeq(null,((function (s__21309__$1,map__21318,map__21318__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21306,map__21306__$1,msg,info,reload_info){
return (function (){
var s__21311__$1 = s__21311;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21311__$1);
if(temp__5804__auto____$1){
var s__21311__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21311__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21311__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21313 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21312 = (0);
while(true){
if((i__21312 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__21312);
cljs.core.chunk_append(b__21313,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21895 = (i__21312 + (1));
i__21312 = G__21895;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21313),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21308_$_iter__21310(cljs.core.chunk_rest(s__21311__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21313),null);
}
} else {
var warning = cljs.core.first(s__21311__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21308_$_iter__21310(cljs.core.rest(s__21311__$2)));
}
} else {
return null;
}
break;
}
});})(s__21309__$1,map__21318,map__21318__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21306,map__21306__$1,msg,info,reload_info))
,null,null));
});})(s__21309__$1,map__21318,map__21318__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21306,map__21306__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21308(cljs.core.rest(s__21309__$1)));
} else {
var G__21900 = cljs.core.rest(s__21309__$1);
s__21309__$1 = G__21900;
continue;
}
} else {
var G__21901 = cljs.core.rest(s__21309__$1);
s__21309__$1 = G__21901;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21321_21902 = cljs.core.seq(warnings);
var chunk__21322_21903 = null;
var count__21323_21904 = (0);
var i__21324_21905 = (0);
while(true){
if((i__21324_21905 < count__21323_21904)){
var map__21331_21906 = chunk__21322_21903.cljs$core$IIndexed$_nth$arity$2(null,i__21324_21905);
var map__21331_21907__$1 = cljs.core.__destructure_map(map__21331_21906);
var w_21908 = map__21331_21907__$1;
var msg_21909__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21331_21907__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21331_21907__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21331_21907__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21331_21907__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21912)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21910),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21911),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21909__$1)].join(''));


var G__21913 = seq__21321_21902;
var G__21914 = chunk__21322_21903;
var G__21915 = count__21323_21904;
var G__21916 = (i__21324_21905 + (1));
seq__21321_21902 = G__21913;
chunk__21322_21903 = G__21914;
count__21323_21904 = G__21915;
i__21324_21905 = G__21916;
continue;
} else {
var temp__5804__auto___21917 = cljs.core.seq(seq__21321_21902);
if(temp__5804__auto___21917){
var seq__21321_21918__$1 = temp__5804__auto___21917;
if(cljs.core.chunked_seq_QMARK_(seq__21321_21918__$1)){
var c__5525__auto___21919 = cljs.core.chunk_first(seq__21321_21918__$1);
var G__21920 = cljs.core.chunk_rest(seq__21321_21918__$1);
var G__21921 = c__5525__auto___21919;
var G__21922 = cljs.core.count(c__5525__auto___21919);
var G__21923 = (0);
seq__21321_21902 = G__21920;
chunk__21322_21903 = G__21921;
count__21323_21904 = G__21922;
i__21324_21905 = G__21923;
continue;
} else {
var map__21333_21924 = cljs.core.first(seq__21321_21918__$1);
var map__21333_21925__$1 = cljs.core.__destructure_map(map__21333_21924);
var w_21926 = map__21333_21925__$1;
var msg_21927__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21333_21925__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21333_21925__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21333_21925__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21333_21925__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21930)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21928),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21929),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21927__$1)].join(''));


var G__21934 = cljs.core.next(seq__21321_21918__$1);
var G__21935 = null;
var G__21936 = (0);
var G__21937 = (0);
seq__21321_21902 = G__21934;
chunk__21322_21903 = G__21935;
count__21323_21904 = G__21936;
i__21324_21905 = G__21937;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21304_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21304_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21346 = node_uri;
G__21346.setQuery(null);

G__21346.setPath(new$);

return G__21346;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21352){
var map__21353 = p__21352;
var map__21353__$1 = cljs.core.__destructure_map(map__21353);
var msg = map__21353__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21353__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21353__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21354 = cljs.core.seq(updates);
var chunk__21356 = null;
var count__21357 = (0);
var i__21358 = (0);
while(true){
if((i__21358 < count__21357)){
var path = chunk__21356.cljs$core$IIndexed$_nth$arity$2(null,i__21358);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21569_21941 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21573_21942 = null;
var count__21574_21943 = (0);
var i__21575_21944 = (0);
while(true){
if((i__21575_21944 < count__21574_21943)){
var node_21945 = chunk__21573_21942.cljs$core$IIndexed$_nth$arity$2(null,i__21575_21944);
if(cljs.core.not(node_21945.shadow$old)){
var path_match_21946 = shadow.cljs.devtools.client.browser.match_paths(node_21945.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21946)){
var new_link_21947 = (function (){var G__21630 = node_21945.cloneNode(true);
G__21630.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21946),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21630;
})();
(node_21945.shadow$old = true);

(new_link_21947.onload = ((function (seq__21569_21941,chunk__21573_21942,count__21574_21943,i__21575_21944,seq__21354,chunk__21356,count__21357,i__21358,new_link_21947,path_match_21946,node_21945,path,map__21353,map__21353__$1,msg,updates,reload_info){
return (function (e){
var seq__21640_21949 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21642_21950 = null;
var count__21643_21951 = (0);
var i__21644_21952 = (0);
while(true){
if((i__21644_21952 < count__21643_21951)){
var map__21649_21953 = chunk__21642_21950.cljs$core$IIndexed$_nth$arity$2(null,i__21644_21952);
var map__21649_21954__$1 = cljs.core.__destructure_map(map__21649_21953);
var task_21955 = map__21649_21954__$1;
var fn_str_21956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649_21954__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21649_21954__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21959 = goog.getObjectByName(fn_str_21956,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21957)].join(''));

(fn_obj_21959.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21959.cljs$core$IFn$_invoke$arity$2(path,new_link_21947) : fn_obj_21959.call(null,path,new_link_21947));


var G__21960 = seq__21640_21949;
var G__21961 = chunk__21642_21950;
var G__21962 = count__21643_21951;
var G__21963 = (i__21644_21952 + (1));
seq__21640_21949 = G__21960;
chunk__21642_21950 = G__21961;
count__21643_21951 = G__21962;
i__21644_21952 = G__21963;
continue;
} else {
var temp__5804__auto___21964 = cljs.core.seq(seq__21640_21949);
if(temp__5804__auto___21964){
var seq__21640_21965__$1 = temp__5804__auto___21964;
if(cljs.core.chunked_seq_QMARK_(seq__21640_21965__$1)){
var c__5525__auto___21966 = cljs.core.chunk_first(seq__21640_21965__$1);
var G__21967 = cljs.core.chunk_rest(seq__21640_21965__$1);
var G__21968 = c__5525__auto___21966;
var G__21969 = cljs.core.count(c__5525__auto___21966);
var G__21970 = (0);
seq__21640_21949 = G__21967;
chunk__21642_21950 = G__21968;
count__21643_21951 = G__21969;
i__21644_21952 = G__21970;
continue;
} else {
var map__21651_21971 = cljs.core.first(seq__21640_21965__$1);
var map__21651_21972__$1 = cljs.core.__destructure_map(map__21651_21971);
var task_21973 = map__21651_21972__$1;
var fn_str_21974 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21651_21972__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21651_21972__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21976 = goog.getObjectByName(fn_str_21974,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21975)].join(''));

(fn_obj_21976.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21976.cljs$core$IFn$_invoke$arity$2(path,new_link_21947) : fn_obj_21976.call(null,path,new_link_21947));


var G__21977 = cljs.core.next(seq__21640_21965__$1);
var G__21978 = null;
var G__21979 = (0);
var G__21980 = (0);
seq__21640_21949 = G__21977;
chunk__21642_21950 = G__21978;
count__21643_21951 = G__21979;
i__21644_21952 = G__21980;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21945);
});})(seq__21569_21941,chunk__21573_21942,count__21574_21943,i__21575_21944,seq__21354,chunk__21356,count__21357,i__21358,new_link_21947,path_match_21946,node_21945,path,map__21353,map__21353__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21946], 0));

goog.dom.insertSiblingAfter(new_link_21947,node_21945);


var G__21981 = seq__21569_21941;
var G__21982 = chunk__21573_21942;
var G__21983 = count__21574_21943;
var G__21984 = (i__21575_21944 + (1));
seq__21569_21941 = G__21981;
chunk__21573_21942 = G__21982;
count__21574_21943 = G__21983;
i__21575_21944 = G__21984;
continue;
} else {
var G__21985 = seq__21569_21941;
var G__21986 = chunk__21573_21942;
var G__21987 = count__21574_21943;
var G__21988 = (i__21575_21944 + (1));
seq__21569_21941 = G__21985;
chunk__21573_21942 = G__21986;
count__21574_21943 = G__21987;
i__21575_21944 = G__21988;
continue;
}
} else {
var G__21989 = seq__21569_21941;
var G__21990 = chunk__21573_21942;
var G__21991 = count__21574_21943;
var G__21992 = (i__21575_21944 + (1));
seq__21569_21941 = G__21989;
chunk__21573_21942 = G__21990;
count__21574_21943 = G__21991;
i__21575_21944 = G__21992;
continue;
}
} else {
var temp__5804__auto___21993 = cljs.core.seq(seq__21569_21941);
if(temp__5804__auto___21993){
var seq__21569_21994__$1 = temp__5804__auto___21993;
if(cljs.core.chunked_seq_QMARK_(seq__21569_21994__$1)){
var c__5525__auto___21995 = cljs.core.chunk_first(seq__21569_21994__$1);
var G__21996 = cljs.core.chunk_rest(seq__21569_21994__$1);
var G__21997 = c__5525__auto___21995;
var G__21998 = cljs.core.count(c__5525__auto___21995);
var G__21999 = (0);
seq__21569_21941 = G__21996;
chunk__21573_21942 = G__21997;
count__21574_21943 = G__21998;
i__21575_21944 = G__21999;
continue;
} else {
var node_22001 = cljs.core.first(seq__21569_21994__$1);
if(cljs.core.not(node_22001.shadow$old)){
var path_match_22002 = shadow.cljs.devtools.client.browser.match_paths(node_22001.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22002)){
var new_link_22003 = (function (){var G__21660 = node_22001.cloneNode(true);
G__21660.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22002),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21660;
})();
(node_22001.shadow$old = true);

(new_link_22003.onload = ((function (seq__21569_21941,chunk__21573_21942,count__21574_21943,i__21575_21944,seq__21354,chunk__21356,count__21357,i__21358,new_link_22003,path_match_22002,node_22001,seq__21569_21994__$1,temp__5804__auto___21993,path,map__21353,map__21353__$1,msg,updates,reload_info){
return (function (e){
var seq__21661_22005 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21663_22006 = null;
var count__21664_22007 = (0);
var i__21665_22008 = (0);
while(true){
if((i__21665_22008 < count__21664_22007)){
var map__21688_22009 = chunk__21663_22006.cljs$core$IIndexed$_nth$arity$2(null,i__21665_22008);
var map__21688_22010__$1 = cljs.core.__destructure_map(map__21688_22009);
var task_22011 = map__21688_22010__$1;
var fn_str_22012 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21688_22010__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21688_22010__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22014 = goog.getObjectByName(fn_str_22012,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22013)].join(''));

(fn_obj_22014.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22014.cljs$core$IFn$_invoke$arity$2(path,new_link_22003) : fn_obj_22014.call(null,path,new_link_22003));


var G__22015 = seq__21661_22005;
var G__22016 = chunk__21663_22006;
var G__22017 = count__21664_22007;
var G__22018 = (i__21665_22008 + (1));
seq__21661_22005 = G__22015;
chunk__21663_22006 = G__22016;
count__21664_22007 = G__22017;
i__21665_22008 = G__22018;
continue;
} else {
var temp__5804__auto___22019__$1 = cljs.core.seq(seq__21661_22005);
if(temp__5804__auto___22019__$1){
var seq__21661_22020__$1 = temp__5804__auto___22019__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21661_22020__$1)){
var c__5525__auto___22021 = cljs.core.chunk_first(seq__21661_22020__$1);
var G__22022 = cljs.core.chunk_rest(seq__21661_22020__$1);
var G__22023 = c__5525__auto___22021;
var G__22024 = cljs.core.count(c__5525__auto___22021);
var G__22025 = (0);
seq__21661_22005 = G__22022;
chunk__21663_22006 = G__22023;
count__21664_22007 = G__22024;
i__21665_22008 = G__22025;
continue;
} else {
var map__21694_22026 = cljs.core.first(seq__21661_22020__$1);
var map__21694_22027__$1 = cljs.core.__destructure_map(map__21694_22026);
var task_22028 = map__21694_22027__$1;
var fn_str_22029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21694_22027__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21694_22027__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22031 = goog.getObjectByName(fn_str_22029,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22030)].join(''));

(fn_obj_22031.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22031.cljs$core$IFn$_invoke$arity$2(path,new_link_22003) : fn_obj_22031.call(null,path,new_link_22003));


var G__22032 = cljs.core.next(seq__21661_22020__$1);
var G__22033 = null;
var G__22034 = (0);
var G__22035 = (0);
seq__21661_22005 = G__22032;
chunk__21663_22006 = G__22033;
count__21664_22007 = G__22034;
i__21665_22008 = G__22035;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22001);
});})(seq__21569_21941,chunk__21573_21942,count__21574_21943,i__21575_21944,seq__21354,chunk__21356,count__21357,i__21358,new_link_22003,path_match_22002,node_22001,seq__21569_21994__$1,temp__5804__auto___21993,path,map__21353,map__21353__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22002], 0));

goog.dom.insertSiblingAfter(new_link_22003,node_22001);


var G__22036 = cljs.core.next(seq__21569_21994__$1);
var G__22037 = null;
var G__22038 = (0);
var G__22039 = (0);
seq__21569_21941 = G__22036;
chunk__21573_21942 = G__22037;
count__21574_21943 = G__22038;
i__21575_21944 = G__22039;
continue;
} else {
var G__22040 = cljs.core.next(seq__21569_21994__$1);
var G__22041 = null;
var G__22042 = (0);
var G__22043 = (0);
seq__21569_21941 = G__22040;
chunk__21573_21942 = G__22041;
count__21574_21943 = G__22042;
i__21575_21944 = G__22043;
continue;
}
} else {
var G__22044 = cljs.core.next(seq__21569_21994__$1);
var G__22045 = null;
var G__22046 = (0);
var G__22047 = (0);
seq__21569_21941 = G__22044;
chunk__21573_21942 = G__22045;
count__21574_21943 = G__22046;
i__21575_21944 = G__22047;
continue;
}
}
} else {
}
}
break;
}


var G__22048 = seq__21354;
var G__22049 = chunk__21356;
var G__22050 = count__21357;
var G__22051 = (i__21358 + (1));
seq__21354 = G__22048;
chunk__21356 = G__22049;
count__21357 = G__22050;
i__21358 = G__22051;
continue;
} else {
var G__22052 = seq__21354;
var G__22053 = chunk__21356;
var G__22054 = count__21357;
var G__22055 = (i__21358 + (1));
seq__21354 = G__22052;
chunk__21356 = G__22053;
count__21357 = G__22054;
i__21358 = G__22055;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21354);
if(temp__5804__auto__){
var seq__21354__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21354__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21354__$1);
var G__22056 = cljs.core.chunk_rest(seq__21354__$1);
var G__22057 = c__5525__auto__;
var G__22058 = cljs.core.count(c__5525__auto__);
var G__22059 = (0);
seq__21354 = G__22056;
chunk__21356 = G__22057;
count__21357 = G__22058;
i__21358 = G__22059;
continue;
} else {
var path = cljs.core.first(seq__21354__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21695_22060 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21699_22061 = null;
var count__21700_22062 = (0);
var i__21701_22063 = (0);
while(true){
if((i__21701_22063 < count__21700_22062)){
var node_22064 = chunk__21699_22061.cljs$core$IIndexed$_nth$arity$2(null,i__21701_22063);
if(cljs.core.not(node_22064.shadow$old)){
var path_match_22065 = shadow.cljs.devtools.client.browser.match_paths(node_22064.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22065)){
var new_link_22066 = (function (){var G__21746 = node_22064.cloneNode(true);
G__21746.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22065),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21746;
})();
(node_22064.shadow$old = true);

(new_link_22066.onload = ((function (seq__21695_22060,chunk__21699_22061,count__21700_22062,i__21701_22063,seq__21354,chunk__21356,count__21357,i__21358,new_link_22066,path_match_22065,node_22064,path,seq__21354__$1,temp__5804__auto__,map__21353,map__21353__$1,msg,updates,reload_info){
return (function (e){
var seq__21747_22067 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21749_22068 = null;
var count__21750_22069 = (0);
var i__21751_22070 = (0);
while(true){
if((i__21751_22070 < count__21750_22069)){
var map__21763_22071 = chunk__21749_22068.cljs$core$IIndexed$_nth$arity$2(null,i__21751_22070);
var map__21763_22072__$1 = cljs.core.__destructure_map(map__21763_22071);
var task_22073 = map__21763_22072__$1;
var fn_str_22074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21763_22072__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21763_22072__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22076 = goog.getObjectByName(fn_str_22074,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22075)].join(''));

(fn_obj_22076.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22076.cljs$core$IFn$_invoke$arity$2(path,new_link_22066) : fn_obj_22076.call(null,path,new_link_22066));


var G__22077 = seq__21747_22067;
var G__22078 = chunk__21749_22068;
var G__22079 = count__21750_22069;
var G__22080 = (i__21751_22070 + (1));
seq__21747_22067 = G__22077;
chunk__21749_22068 = G__22078;
count__21750_22069 = G__22079;
i__21751_22070 = G__22080;
continue;
} else {
var temp__5804__auto___22081__$1 = cljs.core.seq(seq__21747_22067);
if(temp__5804__auto___22081__$1){
var seq__21747_22082__$1 = temp__5804__auto___22081__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21747_22082__$1)){
var c__5525__auto___22083 = cljs.core.chunk_first(seq__21747_22082__$1);
var G__22084 = cljs.core.chunk_rest(seq__21747_22082__$1);
var G__22085 = c__5525__auto___22083;
var G__22086 = cljs.core.count(c__5525__auto___22083);
var G__22087 = (0);
seq__21747_22067 = G__22084;
chunk__21749_22068 = G__22085;
count__21750_22069 = G__22086;
i__21751_22070 = G__22087;
continue;
} else {
var map__21766_22088 = cljs.core.first(seq__21747_22082__$1);
var map__21766_22089__$1 = cljs.core.__destructure_map(map__21766_22088);
var task_22090 = map__21766_22089__$1;
var fn_str_22091 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21766_22089__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22092 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21766_22089__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22093 = goog.getObjectByName(fn_str_22091,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22092)].join(''));

(fn_obj_22093.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22093.cljs$core$IFn$_invoke$arity$2(path,new_link_22066) : fn_obj_22093.call(null,path,new_link_22066));


var G__22094 = cljs.core.next(seq__21747_22082__$1);
var G__22095 = null;
var G__22096 = (0);
var G__22097 = (0);
seq__21747_22067 = G__22094;
chunk__21749_22068 = G__22095;
count__21750_22069 = G__22096;
i__21751_22070 = G__22097;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22064);
});})(seq__21695_22060,chunk__21699_22061,count__21700_22062,i__21701_22063,seq__21354,chunk__21356,count__21357,i__21358,new_link_22066,path_match_22065,node_22064,path,seq__21354__$1,temp__5804__auto__,map__21353,map__21353__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22065], 0));

goog.dom.insertSiblingAfter(new_link_22066,node_22064);


var G__22098 = seq__21695_22060;
var G__22099 = chunk__21699_22061;
var G__22100 = count__21700_22062;
var G__22101 = (i__21701_22063 + (1));
seq__21695_22060 = G__22098;
chunk__21699_22061 = G__22099;
count__21700_22062 = G__22100;
i__21701_22063 = G__22101;
continue;
} else {
var G__22102 = seq__21695_22060;
var G__22103 = chunk__21699_22061;
var G__22104 = count__21700_22062;
var G__22105 = (i__21701_22063 + (1));
seq__21695_22060 = G__22102;
chunk__21699_22061 = G__22103;
count__21700_22062 = G__22104;
i__21701_22063 = G__22105;
continue;
}
} else {
var G__22106 = seq__21695_22060;
var G__22107 = chunk__21699_22061;
var G__22108 = count__21700_22062;
var G__22109 = (i__21701_22063 + (1));
seq__21695_22060 = G__22106;
chunk__21699_22061 = G__22107;
count__21700_22062 = G__22108;
i__21701_22063 = G__22109;
continue;
}
} else {
var temp__5804__auto___22110__$1 = cljs.core.seq(seq__21695_22060);
if(temp__5804__auto___22110__$1){
var seq__21695_22111__$1 = temp__5804__auto___22110__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21695_22111__$1)){
var c__5525__auto___22112 = cljs.core.chunk_first(seq__21695_22111__$1);
var G__22113 = cljs.core.chunk_rest(seq__21695_22111__$1);
var G__22114 = c__5525__auto___22112;
var G__22115 = cljs.core.count(c__5525__auto___22112);
var G__22116 = (0);
seq__21695_22060 = G__22113;
chunk__21699_22061 = G__22114;
count__21700_22062 = G__22115;
i__21701_22063 = G__22116;
continue;
} else {
var node_22117 = cljs.core.first(seq__21695_22111__$1);
if(cljs.core.not(node_22117.shadow$old)){
var path_match_22118 = shadow.cljs.devtools.client.browser.match_paths(node_22117.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22118)){
var new_link_22119 = (function (){var G__21767 = node_22117.cloneNode(true);
G__21767.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22118),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21767;
})();
(node_22117.shadow$old = true);

(new_link_22119.onload = ((function (seq__21695_22060,chunk__21699_22061,count__21700_22062,i__21701_22063,seq__21354,chunk__21356,count__21357,i__21358,new_link_22119,path_match_22118,node_22117,seq__21695_22111__$1,temp__5804__auto___22110__$1,path,seq__21354__$1,temp__5804__auto__,map__21353,map__21353__$1,msg,updates,reload_info){
return (function (e){
var seq__21769_22120 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21771_22121 = null;
var count__21772_22122 = (0);
var i__21773_22123 = (0);
while(true){
if((i__21773_22123 < count__21772_22122)){
var map__21780_22124 = chunk__21771_22121.cljs$core$IIndexed$_nth$arity$2(null,i__21773_22123);
var map__21780_22125__$1 = cljs.core.__destructure_map(map__21780_22124);
var task_22126 = map__21780_22125__$1;
var fn_str_22127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21780_22125__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21780_22125__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22129 = goog.getObjectByName(fn_str_22127,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22128)].join(''));

(fn_obj_22129.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22129.cljs$core$IFn$_invoke$arity$2(path,new_link_22119) : fn_obj_22129.call(null,path,new_link_22119));


var G__22130 = seq__21769_22120;
var G__22131 = chunk__21771_22121;
var G__22132 = count__21772_22122;
var G__22133 = (i__21773_22123 + (1));
seq__21769_22120 = G__22130;
chunk__21771_22121 = G__22131;
count__21772_22122 = G__22132;
i__21773_22123 = G__22133;
continue;
} else {
var temp__5804__auto___22134__$2 = cljs.core.seq(seq__21769_22120);
if(temp__5804__auto___22134__$2){
var seq__21769_22135__$1 = temp__5804__auto___22134__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21769_22135__$1)){
var c__5525__auto___22136 = cljs.core.chunk_first(seq__21769_22135__$1);
var G__22137 = cljs.core.chunk_rest(seq__21769_22135__$1);
var G__22138 = c__5525__auto___22136;
var G__22139 = cljs.core.count(c__5525__auto___22136);
var G__22140 = (0);
seq__21769_22120 = G__22137;
chunk__21771_22121 = G__22138;
count__21772_22122 = G__22139;
i__21773_22123 = G__22140;
continue;
} else {
var map__21781_22141 = cljs.core.first(seq__21769_22135__$1);
var map__21781_22142__$1 = cljs.core.__destructure_map(map__21781_22141);
var task_22143 = map__21781_22142__$1;
var fn_str_22144 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21781_22142__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21781_22142__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22146 = goog.getObjectByName(fn_str_22144,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22145)].join(''));

(fn_obj_22146.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22146.cljs$core$IFn$_invoke$arity$2(path,new_link_22119) : fn_obj_22146.call(null,path,new_link_22119));


var G__22147 = cljs.core.next(seq__21769_22135__$1);
var G__22148 = null;
var G__22149 = (0);
var G__22150 = (0);
seq__21769_22120 = G__22147;
chunk__21771_22121 = G__22148;
count__21772_22122 = G__22149;
i__21773_22123 = G__22150;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22117);
});})(seq__21695_22060,chunk__21699_22061,count__21700_22062,i__21701_22063,seq__21354,chunk__21356,count__21357,i__21358,new_link_22119,path_match_22118,node_22117,seq__21695_22111__$1,temp__5804__auto___22110__$1,path,seq__21354__$1,temp__5804__auto__,map__21353,map__21353__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22118], 0));

goog.dom.insertSiblingAfter(new_link_22119,node_22117);


var G__22151 = cljs.core.next(seq__21695_22111__$1);
var G__22152 = null;
var G__22153 = (0);
var G__22154 = (0);
seq__21695_22060 = G__22151;
chunk__21699_22061 = G__22152;
count__21700_22062 = G__22153;
i__21701_22063 = G__22154;
continue;
} else {
var G__22155 = cljs.core.next(seq__21695_22111__$1);
var G__22156 = null;
var G__22157 = (0);
var G__22158 = (0);
seq__21695_22060 = G__22155;
chunk__21699_22061 = G__22156;
count__21700_22062 = G__22157;
i__21701_22063 = G__22158;
continue;
}
} else {
var G__22159 = cljs.core.next(seq__21695_22111__$1);
var G__22160 = null;
var G__22161 = (0);
var G__22162 = (0);
seq__21695_22060 = G__22159;
chunk__21699_22061 = G__22160;
count__21700_22062 = G__22161;
i__21701_22063 = G__22162;
continue;
}
}
} else {
}
}
break;
}


var G__22163 = cljs.core.next(seq__21354__$1);
var G__22164 = null;
var G__22165 = (0);
var G__22166 = (0);
seq__21354 = G__22163;
chunk__21356 = G__22164;
count__21357 = G__22165;
i__21358 = G__22166;
continue;
} else {
var G__22167 = cljs.core.next(seq__21354__$1);
var G__22168 = null;
var G__22169 = (0);
var G__22170 = (0);
seq__21354 = G__22167;
chunk__21356 = G__22168;
count__21357 = G__22169;
i__21358 = G__22170;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21793 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21793) : success.call(null,G__21793));
}catch (e21792){var e = e21792;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21794,success,fail){
var map__21795 = p__21794;
var map__21795__$1 = cljs.core.__destructure_map(map__21795);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21795__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21797 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21797) : success.call(null,G__21797));
}catch (e21796){var e = e21796;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21798,done,error){
var map__21801 = p__21798;
var map__21801__$1 = cljs.core.__destructure_map(map__21801);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21801__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21802,done,error){
var map__21804 = p__21802;
var map__21804__$1 = cljs.core.__destructure_map(map__21804);
var msg = map__21804__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21804__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21804__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21804__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21806){
var map__21807 = p__21806;
var map__21807__$1 = cljs.core.__destructure_map(map__21807);
var src = map__21807__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21807__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21813 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21813) : done.call(null,G__21813));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21816){
var map__21817 = p__21816;
var map__21817__$1 = cljs.core.__destructure_map(map__21817);
var msg__$1 = map__21817__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21817__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21818){var ex = e21818;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21820){
var map__21821 = p__21820;
var map__21821__$1 = cljs.core.__destructure_map(map__21821);
var env = map__21821__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21821__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21828){
var map__21829 = p__21828;
var map__21829__$1 = cljs.core.__destructure_map(map__21829);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21829__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21829__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21831){
var map__21833 = p__21831;
var map__21833__$1 = cljs.core.__destructure_map(map__21833);
var svc = map__21833__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21833__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
