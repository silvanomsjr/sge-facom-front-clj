goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20484,p__20485){
var map__20486 = p__20484;
var map__20486__$1 = cljs.core.__destructure_map(map__20486);
var svc = map__20486__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20486__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20486__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20486__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20487 = p__20485;
var map__20487__$1 = cljs.core.__destructure_map(map__20487);
var msg = map__20487__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20487__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20487__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20487__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20487__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20492,p__20493){
var map__20494 = p__20492;
var map__20494__$1 = cljs.core.__destructure_map(map__20494);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20494__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20495 = p__20493;
var map__20495__$1 = cljs.core.__destructure_map(map__20495);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20495__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20505,p__20506){
var map__20509 = p__20505;
var map__20509__$1 = cljs.core.__destructure_map(map__20509);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20509__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20509__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20510 = p__20506;
var map__20510__$1 = cljs.core.__destructure_map(map__20510);
var msg = map__20510__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20510__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20514,tid){
var map__20515 = p__20514;
var map__20515__$1 = cljs.core.__destructure_map(map__20515);
var svc = map__20515__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20515__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20524 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20525 = null;
var count__20526 = (0);
var i__20527 = (0);
while(true){
if((i__20527 < count__20526)){
var vec__20538 = chunk__20525.cljs$core$IIndexed$_nth$arity$2(null,i__20527);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20538,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20538,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20578 = seq__20524;
var G__20579 = chunk__20525;
var G__20580 = count__20526;
var G__20581 = (i__20527 + (1));
seq__20524 = G__20578;
chunk__20525 = G__20579;
count__20526 = G__20580;
i__20527 = G__20581;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20524);
if(temp__5804__auto__){
var seq__20524__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20524__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20524__$1);
var G__20586 = cljs.core.chunk_rest(seq__20524__$1);
var G__20587 = c__5525__auto__;
var G__20588 = cljs.core.count(c__5525__auto__);
var G__20589 = (0);
seq__20524 = G__20586;
chunk__20525 = G__20587;
count__20526 = G__20588;
i__20527 = G__20589;
continue;
} else {
var vec__20542 = cljs.core.first(seq__20524__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20542,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20542,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20595 = cljs.core.next(seq__20524__$1);
var G__20596 = null;
var G__20597 = (0);
var G__20598 = (0);
seq__20524 = G__20595;
chunk__20525 = G__20596;
count__20526 = G__20597;
i__20527 = G__20598;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20516_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20516_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20517_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20517_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20518_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20518_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20519_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20519_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20552){
var map__20553 = p__20552;
var map__20553__$1 = cljs.core.__destructure_map(map__20553);
var svc = map__20553__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20553__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20553__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
