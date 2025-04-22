goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__20499__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__20499 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20500__i = 0, G__20500__a = new Array(arguments.length -  0);
while (G__20500__i < G__20500__a.length) {G__20500__a[G__20500__i] = arguments[G__20500__i + 0]; ++G__20500__i;}
  args = new cljs.core.IndexedSeq(G__20500__a,0,null);
} 
return G__20499__delegate.call(this,args);};
G__20499.cljs$lang$maxFixedArity = 0;
G__20499.cljs$lang$applyTo = (function (arglist__20501){
var args = cljs.core.seq(arglist__20501);
return G__20499__delegate(args);
});
G__20499.cljs$core$IFn$_invoke$arity$variadic = G__20499__delegate;
return G__20499;
})()
);

(o.error = (function() { 
var G__20502__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__20502 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20503__i = 0, G__20503__a = new Array(arguments.length -  0);
while (G__20503__i < G__20503__a.length) {G__20503__a[G__20503__i] = arguments[G__20503__i + 0]; ++G__20503__i;}
  args = new cljs.core.IndexedSeq(G__20503__a,0,null);
} 
return G__20502__delegate.call(this,args);};
G__20502.cljs$lang$maxFixedArity = 0;
G__20502.cljs$lang$applyTo = (function (arglist__20504){
var args = cljs.core.seq(arglist__20504);
return G__20502__delegate(args);
});
G__20502.cljs$core$IFn$_invoke$arity$variadic = G__20502__delegate;
return G__20502;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
