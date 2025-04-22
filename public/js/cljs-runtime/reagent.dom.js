goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__22237 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22238 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22238);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )),container,(function (){
var _STAR_always_update_STAR__orig_val__22240 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__22241 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__22241);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null, ));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22240);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__22237);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__22251 = arguments.length;
switch (G__22251) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template._STAR_current_default_compiler_STAR_);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__22253 = ((cljs.core.map_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiler","compiler",-267926731).cljs$core$IFn$_invoke$arity$1(callback_or_compiler),new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null):((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template._STAR_current_default_compiler_STAR_,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,null], null)
));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22253,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22253,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null, )):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__22265_22300 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__22266_22301 = null;
var count__22267_22302 = (0);
var i__22268_22303 = (0);
while(true){
if((i__22268_22303 < count__22267_22302)){
var vec__22281_22304 = chunk__22266_22301.cljs$core$IIndexed$_nth$arity$2(null, i__22268_22303);
var container_22305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22281_22304,(0),null);
var comp_22306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22281_22304,(1),null);
reagent.dom.re_render_component(comp_22306,container_22305);


var G__22308 = seq__22265_22300;
var G__22309 = chunk__22266_22301;
var G__22310 = count__22267_22302;
var G__22311 = (i__22268_22303 + (1));
seq__22265_22300 = G__22308;
chunk__22266_22301 = G__22309;
count__22267_22302 = G__22310;
i__22268_22303 = G__22311;
continue;
} else {
var temp__5804__auto___22312 = cljs.core.seq(seq__22265_22300);
if(temp__5804__auto___22312){
var seq__22265_22314__$1 = temp__5804__auto___22312;
if(cljs.core.chunked_seq_QMARK_(seq__22265_22314__$1)){
var c__5525__auto___22315 = cljs.core.chunk_first(seq__22265_22314__$1);
var G__22316 = cljs.core.chunk_rest(seq__22265_22314__$1);
var G__22317 = c__5525__auto___22315;
var G__22318 = cljs.core.count(c__5525__auto___22315);
var G__22319 = (0);
seq__22265_22300 = G__22316;
chunk__22266_22301 = G__22317;
count__22267_22302 = G__22318;
i__22268_22303 = G__22319;
continue;
} else {
var vec__22288_22320 = cljs.core.first(seq__22265_22314__$1);
var container_22321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22288_22320,(0),null);
var comp_22322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22288_22320,(1),null);
reagent.dom.re_render_component(comp_22322,container_22321);


var G__22323 = cljs.core.next(seq__22265_22314__$1);
var G__22324 = null;
var G__22325 = (0);
var G__22326 = (0);
seq__22265_22300 = G__22323;
chunk__22266_22301 = G__22324;
count__22267_22302 = G__22325;
i__22268_22303 = G__22326;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
