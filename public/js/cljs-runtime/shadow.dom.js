goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_14863 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_14863(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_14869 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_14869(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__13450 = coll;
var G__13451 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__13450,G__13451) : shadow.dom.lazy_native_coll_seq.call(null,G__13450,G__13451));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__13471 = arguments.length;
switch (G__13471) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__13479 = arguments.length;
switch (G__13479) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__13487 = arguments.length;
switch (G__13487) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__13497 = arguments.length;
switch (G__13497) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__13508 = arguments.length;
switch (G__13508) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__13515 = arguments.length;
switch (G__13515) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e13516){if((e13516 instanceof Object)){
var e = e13516;
return console.log("didnt support attachEvent",el,e);
} else {
throw e13516;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__13525 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__13526 = null;
var count__13527 = (0);
var i__13528 = (0);
while(true){
if((i__13528 < count__13527)){
var el = chunk__13526.cljs$core$IIndexed$_nth$arity$2(null,i__13528);
var handler_14962__$1 = ((function (seq__13525,chunk__13526,count__13527,i__13528,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__13525,chunk__13526,count__13527,i__13528,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_14962__$1);


var G__14965 = seq__13525;
var G__14966 = chunk__13526;
var G__14967 = count__13527;
var G__14968 = (i__13528 + (1));
seq__13525 = G__14965;
chunk__13526 = G__14966;
count__13527 = G__14967;
i__13528 = G__14968;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13525);
if(temp__5804__auto__){
var seq__13525__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13525__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13525__$1);
var G__14972 = cljs.core.chunk_rest(seq__13525__$1);
var G__14973 = c__5525__auto__;
var G__14974 = cljs.core.count(c__5525__auto__);
var G__14975 = (0);
seq__13525 = G__14972;
chunk__13526 = G__14973;
count__13527 = G__14974;
i__13528 = G__14975;
continue;
} else {
var el = cljs.core.first(seq__13525__$1);
var handler_14976__$1 = ((function (seq__13525,chunk__13526,count__13527,i__13528,el,seq__13525__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__13525,chunk__13526,count__13527,i__13528,el,seq__13525__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_14976__$1);


var G__14981 = cljs.core.next(seq__13525__$1);
var G__14982 = null;
var G__14983 = (0);
var G__14984 = (0);
seq__13525 = G__14981;
chunk__13526 = G__14982;
count__13527 = G__14983;
i__13528 = G__14984;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__13548 = arguments.length;
switch (G__13548) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__13556 = cljs.core.seq(events);
var chunk__13557 = null;
var count__13558 = (0);
var i__13559 = (0);
while(true){
if((i__13559 < count__13558)){
var vec__13568 = chunk__13557.cljs$core$IIndexed$_nth$arity$2(null,i__13559);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13568,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13568,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__14998 = seq__13556;
var G__14999 = chunk__13557;
var G__15000 = count__13558;
var G__15001 = (i__13559 + (1));
seq__13556 = G__14998;
chunk__13557 = G__14999;
count__13558 = G__15000;
i__13559 = G__15001;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13556);
if(temp__5804__auto__){
var seq__13556__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13556__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13556__$1);
var G__15003 = cljs.core.chunk_rest(seq__13556__$1);
var G__15004 = c__5525__auto__;
var G__15005 = cljs.core.count(c__5525__auto__);
var G__15006 = (0);
seq__13556 = G__15003;
chunk__13557 = G__15004;
count__13558 = G__15005;
i__13559 = G__15006;
continue;
} else {
var vec__13572 = cljs.core.first(seq__13556__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13572,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13572,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15008 = cljs.core.next(seq__13556__$1);
var G__15009 = null;
var G__15010 = (0);
var G__15011 = (0);
seq__13556 = G__15008;
chunk__13557 = G__15009;
count__13558 = G__15010;
i__13559 = G__15011;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__13580 = cljs.core.seq(styles);
var chunk__13581 = null;
var count__13582 = (0);
var i__13583 = (0);
while(true){
if((i__13583 < count__13582)){
var vec__13591 = chunk__13581.cljs$core$IIndexed$_nth$arity$2(null,i__13583);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13591,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13591,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15014 = seq__13580;
var G__15015 = chunk__13581;
var G__15016 = count__13582;
var G__15017 = (i__13583 + (1));
seq__13580 = G__15014;
chunk__13581 = G__15015;
count__13582 = G__15016;
i__13583 = G__15017;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13580);
if(temp__5804__auto__){
var seq__13580__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13580__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13580__$1);
var G__15020 = cljs.core.chunk_rest(seq__13580__$1);
var G__15021 = c__5525__auto__;
var G__15022 = cljs.core.count(c__5525__auto__);
var G__15023 = (0);
seq__13580 = G__15020;
chunk__13581 = G__15021;
count__13582 = G__15022;
i__13583 = G__15023;
continue;
} else {
var vec__13595 = cljs.core.first(seq__13580__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13595,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13595,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15027 = cljs.core.next(seq__13580__$1);
var G__15028 = null;
var G__15029 = (0);
var G__15030 = (0);
seq__13580 = G__15027;
chunk__13581 = G__15028;
count__13582 = G__15029;
i__13583 = G__15030;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__13600_15031 = key;
var G__13600_15032__$1 = (((G__13600_15031 instanceof cljs.core.Keyword))?G__13600_15031.fqn:null);
switch (G__13600_15032__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_15038 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_15038,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_15038,"aria-");
}
})())){
el.setAttribute(ks_15038,value);
} else {
(el[ks_15038] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__13634){
var map__13635 = p__13634;
var map__13635__$1 = cljs.core.__destructure_map(map__13635);
var props = map__13635__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13635__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__13636 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13636,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13636,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13636,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__13639 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__13639,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__13639;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__13649 = arguments.length;
switch (G__13649) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__13670){
var vec__13675 = p__13670;
var seq__13676 = cljs.core.seq(vec__13675);
var first__13677 = cljs.core.first(seq__13676);
var seq__13676__$1 = cljs.core.next(seq__13676);
var nn = first__13677;
var first__13677__$1 = cljs.core.first(seq__13676__$1);
var seq__13676__$2 = cljs.core.next(seq__13676__$1);
var np = first__13677__$1;
var nc = seq__13676__$2;
var node = vec__13675;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13689 = nn;
var G__13690 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__13689,G__13690) : create_fn.call(null,G__13689,G__13690));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13695 = nn;
var G__13696 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__13695,G__13696) : create_fn.call(null,G__13695,G__13696));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__13699 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13699,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13699,(1),null);
var seq__13703_15138 = cljs.core.seq(node_children);
var chunk__13704_15139 = null;
var count__13705_15140 = (0);
var i__13706_15141 = (0);
while(true){
if((i__13706_15141 < count__13705_15140)){
var child_struct_15142 = chunk__13704_15139.cljs$core$IIndexed$_nth$arity$2(null,i__13706_15141);
var children_15143 = shadow.dom.dom_node(child_struct_15142);
if(cljs.core.seq_QMARK_(children_15143)){
var seq__13755_15144 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15143));
var chunk__13757_15145 = null;
var count__13758_15146 = (0);
var i__13759_15147 = (0);
while(true){
if((i__13759_15147 < count__13758_15146)){
var child_15149 = chunk__13757_15145.cljs$core$IIndexed$_nth$arity$2(null,i__13759_15147);
if(cljs.core.truth_(child_15149)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15149);


var G__15150 = seq__13755_15144;
var G__15151 = chunk__13757_15145;
var G__15152 = count__13758_15146;
var G__15153 = (i__13759_15147 + (1));
seq__13755_15144 = G__15150;
chunk__13757_15145 = G__15151;
count__13758_15146 = G__15152;
i__13759_15147 = G__15153;
continue;
} else {
var G__15154 = seq__13755_15144;
var G__15155 = chunk__13757_15145;
var G__15156 = count__13758_15146;
var G__15157 = (i__13759_15147 + (1));
seq__13755_15144 = G__15154;
chunk__13757_15145 = G__15155;
count__13758_15146 = G__15156;
i__13759_15147 = G__15157;
continue;
}
} else {
var temp__5804__auto___15158 = cljs.core.seq(seq__13755_15144);
if(temp__5804__auto___15158){
var seq__13755_15159__$1 = temp__5804__auto___15158;
if(cljs.core.chunked_seq_QMARK_(seq__13755_15159__$1)){
var c__5525__auto___15161 = cljs.core.chunk_first(seq__13755_15159__$1);
var G__15167 = cljs.core.chunk_rest(seq__13755_15159__$1);
var G__15168 = c__5525__auto___15161;
var G__15169 = cljs.core.count(c__5525__auto___15161);
var G__15170 = (0);
seq__13755_15144 = G__15167;
chunk__13757_15145 = G__15168;
count__13758_15146 = G__15169;
i__13759_15147 = G__15170;
continue;
} else {
var child_15175 = cljs.core.first(seq__13755_15159__$1);
if(cljs.core.truth_(child_15175)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15175);


var G__15185 = cljs.core.next(seq__13755_15159__$1);
var G__15186 = null;
var G__15187 = (0);
var G__15189 = (0);
seq__13755_15144 = G__15185;
chunk__13757_15145 = G__15186;
count__13758_15146 = G__15187;
i__13759_15147 = G__15189;
continue;
} else {
var G__15192 = cljs.core.next(seq__13755_15159__$1);
var G__15193 = null;
var G__15194 = (0);
var G__15195 = (0);
seq__13755_15144 = G__15192;
chunk__13757_15145 = G__15193;
count__13758_15146 = G__15194;
i__13759_15147 = G__15195;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15143);
}


var G__15198 = seq__13703_15138;
var G__15199 = chunk__13704_15139;
var G__15200 = count__13705_15140;
var G__15201 = (i__13706_15141 + (1));
seq__13703_15138 = G__15198;
chunk__13704_15139 = G__15199;
count__13705_15140 = G__15200;
i__13706_15141 = G__15201;
continue;
} else {
var temp__5804__auto___15204 = cljs.core.seq(seq__13703_15138);
if(temp__5804__auto___15204){
var seq__13703_15205__$1 = temp__5804__auto___15204;
if(cljs.core.chunked_seq_QMARK_(seq__13703_15205__$1)){
var c__5525__auto___15207 = cljs.core.chunk_first(seq__13703_15205__$1);
var G__15208 = cljs.core.chunk_rest(seq__13703_15205__$1);
var G__15209 = c__5525__auto___15207;
var G__15210 = cljs.core.count(c__5525__auto___15207);
var G__15211 = (0);
seq__13703_15138 = G__15208;
chunk__13704_15139 = G__15209;
count__13705_15140 = G__15210;
i__13706_15141 = G__15211;
continue;
} else {
var child_struct_15212 = cljs.core.first(seq__13703_15205__$1);
var children_15213 = shadow.dom.dom_node(child_struct_15212);
if(cljs.core.seq_QMARK_(children_15213)){
var seq__13779_15215 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15213));
var chunk__13781_15216 = null;
var count__13782_15217 = (0);
var i__13783_15218 = (0);
while(true){
if((i__13783_15218 < count__13782_15217)){
var child_15219 = chunk__13781_15216.cljs$core$IIndexed$_nth$arity$2(null,i__13783_15218);
if(cljs.core.truth_(child_15219)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15219);


var G__15221 = seq__13779_15215;
var G__15222 = chunk__13781_15216;
var G__15223 = count__13782_15217;
var G__15224 = (i__13783_15218 + (1));
seq__13779_15215 = G__15221;
chunk__13781_15216 = G__15222;
count__13782_15217 = G__15223;
i__13783_15218 = G__15224;
continue;
} else {
var G__15228 = seq__13779_15215;
var G__15229 = chunk__13781_15216;
var G__15230 = count__13782_15217;
var G__15231 = (i__13783_15218 + (1));
seq__13779_15215 = G__15228;
chunk__13781_15216 = G__15229;
count__13782_15217 = G__15230;
i__13783_15218 = G__15231;
continue;
}
} else {
var temp__5804__auto___15233__$1 = cljs.core.seq(seq__13779_15215);
if(temp__5804__auto___15233__$1){
var seq__13779_15235__$1 = temp__5804__auto___15233__$1;
if(cljs.core.chunked_seq_QMARK_(seq__13779_15235__$1)){
var c__5525__auto___15238 = cljs.core.chunk_first(seq__13779_15235__$1);
var G__15240 = cljs.core.chunk_rest(seq__13779_15235__$1);
var G__15241 = c__5525__auto___15238;
var G__15242 = cljs.core.count(c__5525__auto___15238);
var G__15243 = (0);
seq__13779_15215 = G__15240;
chunk__13781_15216 = G__15241;
count__13782_15217 = G__15242;
i__13783_15218 = G__15243;
continue;
} else {
var child_15246 = cljs.core.first(seq__13779_15235__$1);
if(cljs.core.truth_(child_15246)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15246);


var G__15250 = cljs.core.next(seq__13779_15235__$1);
var G__15251 = null;
var G__15252 = (0);
var G__15253 = (0);
seq__13779_15215 = G__15250;
chunk__13781_15216 = G__15251;
count__13782_15217 = G__15252;
i__13783_15218 = G__15253;
continue;
} else {
var G__15256 = cljs.core.next(seq__13779_15235__$1);
var G__15257 = null;
var G__15258 = (0);
var G__15259 = (0);
seq__13779_15215 = G__15256;
chunk__13781_15216 = G__15257;
count__13782_15217 = G__15258;
i__13783_15218 = G__15259;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15213);
}


var G__15260 = cljs.core.next(seq__13703_15205__$1);
var G__15261 = null;
var G__15262 = (0);
var G__15263 = (0);
seq__13703_15138 = G__15260;
chunk__13704_15139 = G__15261;
count__13705_15140 = G__15262;
i__13706_15141 = G__15263;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__13805 = cljs.core.seq(node);
var chunk__13806 = null;
var count__13807 = (0);
var i__13808 = (0);
while(true){
if((i__13808 < count__13807)){
var n = chunk__13806.cljs$core$IIndexed$_nth$arity$2(null,i__13808);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15301 = seq__13805;
var G__15302 = chunk__13806;
var G__15303 = count__13807;
var G__15304 = (i__13808 + (1));
seq__13805 = G__15301;
chunk__13806 = G__15302;
count__13807 = G__15303;
i__13808 = G__15304;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13805);
if(temp__5804__auto__){
var seq__13805__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13805__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__13805__$1);
var G__15306 = cljs.core.chunk_rest(seq__13805__$1);
var G__15307 = c__5525__auto__;
var G__15308 = cljs.core.count(c__5525__auto__);
var G__15309 = (0);
seq__13805 = G__15306;
chunk__13806 = G__15307;
count__13807 = G__15308;
i__13808 = G__15309;
continue;
} else {
var n = cljs.core.first(seq__13805__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15312 = cljs.core.next(seq__13805__$1);
var G__15313 = null;
var G__15314 = (0);
var G__15315 = (0);
seq__13805 = G__15312;
chunk__13806 = G__15313;
count__13807 = G__15314;
i__13808 = G__15315;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__13840 = arguments.length;
switch (G__13840) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__13850 = arguments.length;
switch (G__13850) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__13864 = arguments.length;
switch (G__13864) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___15370 = arguments.length;
var i__5727__auto___15372 = (0);
while(true){
if((i__5727__auto___15372 < len__5726__auto___15370)){
args__5732__auto__.push((arguments[i__5727__auto___15372]));

var G__15375 = (i__5727__auto___15372 + (1));
i__5727__auto___15372 = G__15375;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__13930_15378 = cljs.core.seq(nodes);
var chunk__13931_15379 = null;
var count__13932_15380 = (0);
var i__13933_15381 = (0);
while(true){
if((i__13933_15381 < count__13932_15380)){
var node_15382 = chunk__13931_15379.cljs$core$IIndexed$_nth$arity$2(null,i__13933_15381);
fragment.appendChild(shadow.dom._to_dom(node_15382));


var G__15385 = seq__13930_15378;
var G__15386 = chunk__13931_15379;
var G__15387 = count__13932_15380;
var G__15388 = (i__13933_15381 + (1));
seq__13930_15378 = G__15385;
chunk__13931_15379 = G__15386;
count__13932_15380 = G__15387;
i__13933_15381 = G__15388;
continue;
} else {
var temp__5804__auto___15390 = cljs.core.seq(seq__13930_15378);
if(temp__5804__auto___15390){
var seq__13930_15392__$1 = temp__5804__auto___15390;
if(cljs.core.chunked_seq_QMARK_(seq__13930_15392__$1)){
var c__5525__auto___15393 = cljs.core.chunk_first(seq__13930_15392__$1);
var G__15396 = cljs.core.chunk_rest(seq__13930_15392__$1);
var G__15397 = c__5525__auto___15393;
var G__15398 = cljs.core.count(c__5525__auto___15393);
var G__15399 = (0);
seq__13930_15378 = G__15396;
chunk__13931_15379 = G__15397;
count__13932_15380 = G__15398;
i__13933_15381 = G__15399;
continue;
} else {
var node_15400 = cljs.core.first(seq__13930_15392__$1);
fragment.appendChild(shadow.dom._to_dom(node_15400));


var G__15403 = cljs.core.next(seq__13930_15392__$1);
var G__15404 = null;
var G__15405 = (0);
var G__15406 = (0);
seq__13930_15378 = G__15403;
chunk__13931_15379 = G__15404;
count__13932_15380 = G__15405;
i__13933_15381 = G__15406;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq13913){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq13913));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__13982_15409 = cljs.core.seq(scripts);
var chunk__13983_15410 = null;
var count__13984_15411 = (0);
var i__13985_15412 = (0);
while(true){
if((i__13985_15412 < count__13984_15411)){
var vec__14005_15415 = chunk__13983_15410.cljs$core$IIndexed$_nth$arity$2(null,i__13985_15412);
var script_tag_15416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14005_15415,(0),null);
var script_body_15418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14005_15415,(1),null);
eval(script_body_15418);


var G__15423 = seq__13982_15409;
var G__15424 = chunk__13983_15410;
var G__15425 = count__13984_15411;
var G__15426 = (i__13985_15412 + (1));
seq__13982_15409 = G__15423;
chunk__13983_15410 = G__15424;
count__13984_15411 = G__15425;
i__13985_15412 = G__15426;
continue;
} else {
var temp__5804__auto___15434 = cljs.core.seq(seq__13982_15409);
if(temp__5804__auto___15434){
var seq__13982_15440__$1 = temp__5804__auto___15434;
if(cljs.core.chunked_seq_QMARK_(seq__13982_15440__$1)){
var c__5525__auto___15450 = cljs.core.chunk_first(seq__13982_15440__$1);
var G__15451 = cljs.core.chunk_rest(seq__13982_15440__$1);
var G__15452 = c__5525__auto___15450;
var G__15453 = cljs.core.count(c__5525__auto___15450);
var G__15454 = (0);
seq__13982_15409 = G__15451;
chunk__13983_15410 = G__15452;
count__13984_15411 = G__15453;
i__13985_15412 = G__15454;
continue;
} else {
var vec__14013_15458 = cljs.core.first(seq__13982_15440__$1);
var script_tag_15459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14013_15458,(0),null);
var script_body_15460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14013_15458,(1),null);
eval(script_body_15460);


var G__15464 = cljs.core.next(seq__13982_15440__$1);
var G__15465 = null;
var G__15466 = (0);
var G__15467 = (0);
seq__13982_15409 = G__15464;
chunk__13983_15410 = G__15465;
count__13984_15411 = G__15466;
i__13985_15412 = G__15467;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__14019){
var vec__14020 = p__14019;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14020,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14020,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__14035 = arguments.length;
switch (G__14035) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__14085 = cljs.core.seq(style_keys);
var chunk__14086 = null;
var count__14087 = (0);
var i__14088 = (0);
while(true){
if((i__14088 < count__14087)){
var it = chunk__14086.cljs$core$IIndexed$_nth$arity$2(null,i__14088);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15500 = seq__14085;
var G__15501 = chunk__14086;
var G__15502 = count__14087;
var G__15503 = (i__14088 + (1));
seq__14085 = G__15500;
chunk__14086 = G__15501;
count__14087 = G__15502;
i__14088 = G__15503;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14085);
if(temp__5804__auto__){
var seq__14085__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14085__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14085__$1);
var G__15508 = cljs.core.chunk_rest(seq__14085__$1);
var G__15509 = c__5525__auto__;
var G__15510 = cljs.core.count(c__5525__auto__);
var G__15511 = (0);
seq__14085 = G__15508;
chunk__14086 = G__15509;
count__14087 = G__15510;
i__14088 = G__15511;
continue;
} else {
var it = cljs.core.first(seq__14085__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15513 = cljs.core.next(seq__14085__$1);
var G__15514 = null;
var G__15515 = (0);
var G__15516 = (0);
seq__14085 = G__15513;
chunk__14086 = G__15514;
count__14087 = G__15515;
i__14088 = G__15516;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k14106,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__14137 = k14106;
var G__14137__$1 = (((G__14137 instanceof cljs.core.Keyword))?G__14137.fqn:null);
switch (G__14137__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14106,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__14142){
var vec__14143 = p__14142;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14143,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14143,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14105){
var self__ = this;
var G__14105__$1 = this;
return (new cljs.core.RecordIter((0),G__14105__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14107,other14108){
var self__ = this;
var this14107__$1 = this;
return (((!((other14108 == null)))) && ((((this14107__$1.constructor === other14108.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14107__$1.x,other14108.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14107__$1.y,other14108.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14107__$1.__extmap,other14108.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k14106){
var self__ = this;
var this__5307__auto____$1 = this;
var G__14193 = k14106;
var G__14193__$1 = (((G__14193 instanceof cljs.core.Keyword))?G__14193.fqn:null);
switch (G__14193__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14106);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__14105){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__14195 = cljs.core.keyword_identical_QMARK_;
var expr__14196 = k__5309__auto__;
if(cljs.core.truth_((pred__14195.cljs$core$IFn$_invoke$arity$2 ? pred__14195.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__14196) : pred__14195.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__14196)))){
return (new shadow.dom.Coordinate(G__14105,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14195.cljs$core$IFn$_invoke$arity$2 ? pred__14195.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__14196) : pred__14195.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__14196)))){
return (new shadow.dom.Coordinate(self__.x,G__14105,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__14105),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__14105){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__14105,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__14126){
var extmap__5342__auto__ = (function (){var G__14230 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14126,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__14126)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14230);
} else {
return G__14230;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__14126),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__14126),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k14273,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__14290 = k14273;
var G__14290__$1 = (((G__14290 instanceof cljs.core.Keyword))?G__14290.fqn:null);
switch (G__14290__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14273,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__14296){
var vec__14297 = p__14296;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14297,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14297,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14272){
var self__ = this;
var G__14272__$1 = this;
return (new cljs.core.RecordIter((0),G__14272__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14274,other14275){
var self__ = this;
var this14274__$1 = this;
return (((!((other14275 == null)))) && ((((this14274__$1.constructor === other14275.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14274__$1.w,other14275.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14274__$1.h,other14275.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14274__$1.__extmap,other14275.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k14273){
var self__ = this;
var this__5307__auto____$1 = this;
var G__14340 = k14273;
var G__14340__$1 = (((G__14340 instanceof cljs.core.Keyword))?G__14340.fqn:null);
switch (G__14340__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14273);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__14272){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__14346 = cljs.core.keyword_identical_QMARK_;
var expr__14347 = k__5309__auto__;
if(cljs.core.truth_((pred__14346.cljs$core$IFn$_invoke$arity$2 ? pred__14346.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__14347) : pred__14346.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__14347)))){
return (new shadow.dom.Size(G__14272,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14346.cljs$core$IFn$_invoke$arity$2 ? pred__14346.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__14347) : pred__14346.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__14347)))){
return (new shadow.dom.Size(self__.w,G__14272,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__14272),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__14272){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__14272,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__14277){
var extmap__5342__auto__ = (function (){var G__14382 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14277,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__14277)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14382);
} else {
return G__14382;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__14277),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__14277),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__15648 = (i + (1));
var G__15649 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__15648;
ret = G__15649;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14423){
var vec__14424 = p__14423;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14424,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14424,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__14477 = arguments.length;
switch (G__14477) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__15740 = ps;
var G__15741 = (i + (1));
el__$1 = G__15740;
i = G__15741;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__14509 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14509,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14509,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14509,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__14515_15807 = cljs.core.seq(props);
var chunk__14516_15809 = null;
var count__14517_15810 = (0);
var i__14518_15811 = (0);
while(true){
if((i__14518_15811 < count__14517_15810)){
var vec__14547_15818 = chunk__14516_15809.cljs$core$IIndexed$_nth$arity$2(null,i__14518_15811);
var k_15819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14547_15818,(0),null);
var v_15820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14547_15818,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_15819);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15819),v_15820);


var G__15826 = seq__14515_15807;
var G__15827 = chunk__14516_15809;
var G__15828 = count__14517_15810;
var G__15829 = (i__14518_15811 + (1));
seq__14515_15807 = G__15826;
chunk__14516_15809 = G__15827;
count__14517_15810 = G__15828;
i__14518_15811 = G__15829;
continue;
} else {
var temp__5804__auto___15831 = cljs.core.seq(seq__14515_15807);
if(temp__5804__auto___15831){
var seq__14515_15832__$1 = temp__5804__auto___15831;
if(cljs.core.chunked_seq_QMARK_(seq__14515_15832__$1)){
var c__5525__auto___15833 = cljs.core.chunk_first(seq__14515_15832__$1);
var G__15834 = cljs.core.chunk_rest(seq__14515_15832__$1);
var G__15835 = c__5525__auto___15833;
var G__15836 = cljs.core.count(c__5525__auto___15833);
var G__15837 = (0);
seq__14515_15807 = G__15834;
chunk__14516_15809 = G__15835;
count__14517_15810 = G__15836;
i__14518_15811 = G__15837;
continue;
} else {
var vec__14556_15838 = cljs.core.first(seq__14515_15832__$1);
var k_15839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14556_15838,(0),null);
var v_15840 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14556_15838,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_15839);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15839),v_15840);


var G__15847 = cljs.core.next(seq__14515_15832__$1);
var G__15848 = null;
var G__15849 = (0);
var G__15850 = (0);
seq__14515_15807 = G__15847;
chunk__14516_15809 = G__15848;
count__14517_15810 = G__15849;
i__14518_15811 = G__15850;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__14579 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14579,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14579,(1),null);
var seq__14583_15858 = cljs.core.seq(node_children);
var chunk__14585_15859 = null;
var count__14586_15860 = (0);
var i__14587_15861 = (0);
while(true){
if((i__14587_15861 < count__14586_15860)){
var child_struct_15865 = chunk__14585_15859.cljs$core$IIndexed$_nth$arity$2(null,i__14587_15861);
if((!((child_struct_15865 == null)))){
if(typeof child_struct_15865 === 'string'){
var text_15866 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15866),child_struct_15865].join(''));
} else {
var children_15869 = shadow.dom.svg_node(child_struct_15865);
if(cljs.core.seq_QMARK_(children_15869)){
var seq__14680_15872 = cljs.core.seq(children_15869);
var chunk__14682_15873 = null;
var count__14683_15874 = (0);
var i__14684_15875 = (0);
while(true){
if((i__14684_15875 < count__14683_15874)){
var child_15881 = chunk__14682_15873.cljs$core$IIndexed$_nth$arity$2(null,i__14684_15875);
if(cljs.core.truth_(child_15881)){
node.appendChild(child_15881);


var G__15885 = seq__14680_15872;
var G__15886 = chunk__14682_15873;
var G__15887 = count__14683_15874;
var G__15888 = (i__14684_15875 + (1));
seq__14680_15872 = G__15885;
chunk__14682_15873 = G__15886;
count__14683_15874 = G__15887;
i__14684_15875 = G__15888;
continue;
} else {
var G__15893 = seq__14680_15872;
var G__15894 = chunk__14682_15873;
var G__15895 = count__14683_15874;
var G__15896 = (i__14684_15875 + (1));
seq__14680_15872 = G__15893;
chunk__14682_15873 = G__15894;
count__14683_15874 = G__15895;
i__14684_15875 = G__15896;
continue;
}
} else {
var temp__5804__auto___15900 = cljs.core.seq(seq__14680_15872);
if(temp__5804__auto___15900){
var seq__14680_15903__$1 = temp__5804__auto___15900;
if(cljs.core.chunked_seq_QMARK_(seq__14680_15903__$1)){
var c__5525__auto___15906 = cljs.core.chunk_first(seq__14680_15903__$1);
var G__15908 = cljs.core.chunk_rest(seq__14680_15903__$1);
var G__15909 = c__5525__auto___15906;
var G__15910 = cljs.core.count(c__5525__auto___15906);
var G__15911 = (0);
seq__14680_15872 = G__15908;
chunk__14682_15873 = G__15909;
count__14683_15874 = G__15910;
i__14684_15875 = G__15911;
continue;
} else {
var child_15914 = cljs.core.first(seq__14680_15903__$1);
if(cljs.core.truth_(child_15914)){
node.appendChild(child_15914);


var G__15917 = cljs.core.next(seq__14680_15903__$1);
var G__15918 = null;
var G__15919 = (0);
var G__15920 = (0);
seq__14680_15872 = G__15917;
chunk__14682_15873 = G__15918;
count__14683_15874 = G__15919;
i__14684_15875 = G__15920;
continue;
} else {
var G__15921 = cljs.core.next(seq__14680_15903__$1);
var G__15922 = null;
var G__15923 = (0);
var G__15924 = (0);
seq__14680_15872 = G__15921;
chunk__14682_15873 = G__15922;
count__14683_15874 = G__15923;
i__14684_15875 = G__15924;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15869);
}
}


var G__15926 = seq__14583_15858;
var G__15927 = chunk__14585_15859;
var G__15928 = count__14586_15860;
var G__15929 = (i__14587_15861 + (1));
seq__14583_15858 = G__15926;
chunk__14585_15859 = G__15927;
count__14586_15860 = G__15928;
i__14587_15861 = G__15929;
continue;
} else {
var G__15931 = seq__14583_15858;
var G__15932 = chunk__14585_15859;
var G__15933 = count__14586_15860;
var G__15934 = (i__14587_15861 + (1));
seq__14583_15858 = G__15931;
chunk__14585_15859 = G__15932;
count__14586_15860 = G__15933;
i__14587_15861 = G__15934;
continue;
}
} else {
var temp__5804__auto___15938 = cljs.core.seq(seq__14583_15858);
if(temp__5804__auto___15938){
var seq__14583_15939__$1 = temp__5804__auto___15938;
if(cljs.core.chunked_seq_QMARK_(seq__14583_15939__$1)){
var c__5525__auto___15940 = cljs.core.chunk_first(seq__14583_15939__$1);
var G__15941 = cljs.core.chunk_rest(seq__14583_15939__$1);
var G__15942 = c__5525__auto___15940;
var G__15943 = cljs.core.count(c__5525__auto___15940);
var G__15944 = (0);
seq__14583_15858 = G__15941;
chunk__14585_15859 = G__15942;
count__14586_15860 = G__15943;
i__14587_15861 = G__15944;
continue;
} else {
var child_struct_15945 = cljs.core.first(seq__14583_15939__$1);
if((!((child_struct_15945 == null)))){
if(typeof child_struct_15945 === 'string'){
var text_15947 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_15947),child_struct_15945].join(''));
} else {
var children_15949 = shadow.dom.svg_node(child_struct_15945);
if(cljs.core.seq_QMARK_(children_15949)){
var seq__14738_15951 = cljs.core.seq(children_15949);
var chunk__14740_15952 = null;
var count__14741_15954 = (0);
var i__14742_15955 = (0);
while(true){
if((i__14742_15955 < count__14741_15954)){
var child_15956 = chunk__14740_15952.cljs$core$IIndexed$_nth$arity$2(null,i__14742_15955);
if(cljs.core.truth_(child_15956)){
node.appendChild(child_15956);


var G__15959 = seq__14738_15951;
var G__15961 = chunk__14740_15952;
var G__15962 = count__14741_15954;
var G__15963 = (i__14742_15955 + (1));
seq__14738_15951 = G__15959;
chunk__14740_15952 = G__15961;
count__14741_15954 = G__15962;
i__14742_15955 = G__15963;
continue;
} else {
var G__15964 = seq__14738_15951;
var G__15965 = chunk__14740_15952;
var G__15966 = count__14741_15954;
var G__15967 = (i__14742_15955 + (1));
seq__14738_15951 = G__15964;
chunk__14740_15952 = G__15965;
count__14741_15954 = G__15966;
i__14742_15955 = G__15967;
continue;
}
} else {
var temp__5804__auto___15970__$1 = cljs.core.seq(seq__14738_15951);
if(temp__5804__auto___15970__$1){
var seq__14738_15971__$1 = temp__5804__auto___15970__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14738_15971__$1)){
var c__5525__auto___15973 = cljs.core.chunk_first(seq__14738_15971__$1);
var G__15974 = cljs.core.chunk_rest(seq__14738_15971__$1);
var G__15975 = c__5525__auto___15973;
var G__15976 = cljs.core.count(c__5525__auto___15973);
var G__15977 = (0);
seq__14738_15951 = G__15974;
chunk__14740_15952 = G__15975;
count__14741_15954 = G__15976;
i__14742_15955 = G__15977;
continue;
} else {
var child_15978 = cljs.core.first(seq__14738_15971__$1);
if(cljs.core.truth_(child_15978)){
node.appendChild(child_15978);


var G__15979 = cljs.core.next(seq__14738_15971__$1);
var G__15980 = null;
var G__15981 = (0);
var G__15982 = (0);
seq__14738_15951 = G__15979;
chunk__14740_15952 = G__15980;
count__14741_15954 = G__15981;
i__14742_15955 = G__15982;
continue;
} else {
var G__15983 = cljs.core.next(seq__14738_15971__$1);
var G__15984 = null;
var G__15985 = (0);
var G__15986 = (0);
seq__14738_15951 = G__15983;
chunk__14740_15952 = G__15984;
count__14741_15954 = G__15985;
i__14742_15955 = G__15986;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_15949);
}
}


var G__15987 = cljs.core.next(seq__14583_15939__$1);
var G__15988 = null;
var G__15989 = (0);
var G__15990 = (0);
seq__14583_15858 = G__15987;
chunk__14585_15859 = G__15988;
count__14586_15860 = G__15989;
i__14587_15861 = G__15990;
continue;
} else {
var G__15991 = cljs.core.next(seq__14583_15939__$1);
var G__15992 = null;
var G__15993 = (0);
var G__15994 = (0);
seq__14583_15858 = G__15991;
chunk__14585_15859 = G__15992;
count__14586_15860 = G__15993;
i__14587_15861 = G__15994;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16012 = arguments.length;
var i__5727__auto___16014 = (0);
while(true){
if((i__5727__auto___16014 < len__5726__auto___16012)){
args__5732__auto__.push((arguments[i__5727__auto___16014]));

var G__16016 = (i__5727__auto___16014 + (1));
i__5727__auto___16014 = G__16016;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq14795){
var G__14796 = cljs.core.first(seq14795);
var seq14795__$1 = cljs.core.next(seq14795);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14796,seq14795__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
