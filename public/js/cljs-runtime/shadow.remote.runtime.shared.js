goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13630){
var map__13631 = p__13630;
var map__13631__$1 = cljs.core.__destructure_map(map__13631);
var runtime = map__13631__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13631__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14016 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14016)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13659 = runtime;
var G__13660 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14016);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13659,G__13660) : shadow.remote.runtime.shared.process.call(null,G__13659,G__13660));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13697,res){
var map__13698 = p__13697;
var map__13698__$1 = cljs.core.__destructure_map(map__13698);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13698__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13698__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13702 = res;
var G__13702__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13702,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13702);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13702__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13702__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13714 = arguments.length;
switch (G__13714) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13748,msg,handlers,timeout_after_ms){
var map__13749 = p__13748;
var map__13749__$1 = cljs.core.__destructure_map(map__13749);
var runtime = map__13749__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13749__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14037 = arguments.length;
var i__5727__auto___14038 = (0);
while(true){
if((i__5727__auto___14038 < len__5726__auto___14037)){
args__5732__auto__.push((arguments[i__5727__auto___14038]));

var G__14039 = (i__5727__auto___14038 + (1));
i__5727__auto___14038 = G__14039;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__13765,ev,args){
var map__13767 = p__13765;
var map__13767__$1 = cljs.core.__destructure_map(map__13767);
var runtime = map__13767__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13767__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__13768 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13771 = null;
var count__13772 = (0);
var i__13773 = (0);
while(true){
if((i__13773 < count__13772)){
var ext = chunk__13771.cljs$core$IIndexed$_nth$arity$2(null,i__13773);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14048 = seq__13768;
var G__14049 = chunk__13771;
var G__14050 = count__13772;
var G__14051 = (i__13773 + (1));
seq__13768 = G__14048;
chunk__13771 = G__14049;
count__13772 = G__14050;
i__13773 = G__14051;
continue;
} else {
var G__14052 = seq__13768;
var G__14053 = chunk__13771;
var G__14054 = count__13772;
var G__14055 = (i__13773 + (1));
seq__13768 = G__14052;
chunk__13771 = G__14053;
count__13772 = G__14054;
i__13773 = G__14055;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13768);
if(temp__5804__auto__){
var seq__13768__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13768__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13768__$1);
var G__14064 = cljs.core.chunk_rest(seq__13768__$1);
var G__14065 = c__5525__auto__;
var G__14066 = cljs.core.count(c__5525__auto__);
var G__14067 = (0);
seq__13768 = G__14064;
chunk__13771 = G__14065;
count__13772 = G__14066;
i__13773 = G__14067;
continue;
} else {
var ext = cljs.core.first(seq__13768__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14068 = cljs.core.next(seq__13768__$1);
var G__14069 = null;
var G__14070 = (0);
var G__14071 = (0);
seq__13768 = G__14068;
chunk__13771 = G__14069;
count__13772 = G__14070;
i__13773 = G__14071;
continue;
} else {
var G__14072 = cljs.core.next(seq__13768__$1);
var G__14073 = null;
var G__14074 = (0);
var G__14075 = (0);
seq__13768 = G__14072;
chunk__13771 = G__14073;
count__13772 = G__14074;
i__13773 = G__14075;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq13752){
var G__13753 = cljs.core.first(seq13752);
var seq13752__$1 = cljs.core.next(seq13752);
var G__13754 = cljs.core.first(seq13752__$1);
var seq13752__$2 = cljs.core.next(seq13752__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13753,G__13754,seq13752__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__13796,p__13798){
var map__13799 = p__13796;
var map__13799__$1 = cljs.core.__destructure_map(map__13799);
var runtime = map__13799__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13799__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13800 = p__13798;
var map__13800__$1 = cljs.core.__destructure_map(map__13800);
var msg = map__13800__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13800__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__13814 = cljs.core.deref(state_ref);
var map__13814__$1 = cljs.core.__destructure_map(map__13814);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13814__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13814__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__13833,msg){
var map__13834 = p__13833;
var map__13834__$1 = cljs.core.__destructure_map(map__13834);
var runtime = map__13834__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13834__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__13844,key,p__13845){
var map__13846 = p__13844;
var map__13846__$1 = cljs.core.__destructure_map(map__13846);
var state = map__13846__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13846__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__13847 = p__13845;
var map__13847__$1 = cljs.core.__destructure_map(map__13847);
var spec = map__13847__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13847__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13847__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__13851,key,spec){
var map__13852 = p__13851;
var map__13852__$1 = cljs.core.__destructure_map(map__13852);
var runtime = map__13852__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13852__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___14116 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___14116 == null)){
} else {
var on_welcome_14117 = temp__5808__auto___14116;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14117.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14117.cljs$core$IFn$_invoke$arity$0() : on_welcome_14117.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__13854_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__13854_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__13855_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__13855_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__13856_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__13856_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__13857_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__13857_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__13858_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__13858_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__13865,key){
var map__13866 = p__13865;
var map__13866__$1 = cljs.core.__destructure_map(map__13866);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13866__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__13870,msg){
var map__13873 = p__13870;
var map__13873__$1 = cljs.core.__destructure_map(map__13873);
var runtime = map__13873__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13873__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__13896,p__13897){
var map__13898 = p__13896;
var map__13898__$1 = cljs.core.__destructure_map(map__13898);
var runtime = map__13898__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13898__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13899 = p__13897;
var map__13899__$1 = cljs.core.__destructure_map(map__13899);
var msg = map__13899__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13899__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13899__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__13934 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13936 = null;
var count__13937 = (0);
var i__13938 = (0);
while(true){
if((i__13938 < count__13937)){
var map__13973 = chunk__13936.cljs$core$IIndexed$_nth$arity$2(null,i__13938);
var map__13973__$1 = cljs.core.__destructure_map(map__13973);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13973__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14156 = seq__13934;
var G__14157 = chunk__13936;
var G__14158 = count__13937;
var G__14159 = (i__13938 + (1));
seq__13934 = G__14156;
chunk__13936 = G__14157;
count__13937 = G__14158;
i__13938 = G__14159;
continue;
} else {
var G__14160 = seq__13934;
var G__14161 = chunk__13936;
var G__14162 = count__13937;
var G__14163 = (i__13938 + (1));
seq__13934 = G__14160;
chunk__13936 = G__14161;
count__13937 = G__14162;
i__13938 = G__14163;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13934);
if(temp__5804__auto__){
var seq__13934__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13934__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13934__$1);
var G__14166 = cljs.core.chunk_rest(seq__13934__$1);
var G__14167 = c__5525__auto__;
var G__14168 = cljs.core.count(c__5525__auto__);
var G__14169 = (0);
seq__13934 = G__14166;
chunk__13936 = G__14167;
count__13937 = G__14168;
i__13938 = G__14169;
continue;
} else {
var map__13986 = cljs.core.first(seq__13934__$1);
var map__13986__$1 = cljs.core.__destructure_map(map__13986);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13986__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14173 = cljs.core.next(seq__13934__$1);
var G__14174 = null;
var G__14175 = (0);
var G__14176 = (0);
seq__13934 = G__14173;
chunk__13936 = G__14174;
count__13937 = G__14175;
i__13938 = G__14176;
continue;
} else {
var G__14177 = cljs.core.next(seq__13934__$1);
var G__14178 = null;
var G__14179 = (0);
var G__14180 = (0);
seq__13934 = G__14177;
chunk__13936 = G__14178;
count__13937 = G__14179;
i__13938 = G__14180;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
