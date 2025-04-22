goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14330 = (function (f,blockable,meta14331){
this.f = f;
this.blockable = blockable;
this.meta14331 = meta14331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14332,meta14331__$1){
var self__ = this;
var _14332__$1 = this;
return (new cljs.core.async.t_cljs$core$async14330(self__.f,self__.blockable,meta14331__$1));
}));

(cljs.core.async.t_cljs$core$async14330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14332){
var self__ = this;
var _14332__$1 = this;
return self__.meta14331;
}));

(cljs.core.async.t_cljs$core$async14330.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14330.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14330.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14330.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14330.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14331","meta14331",-1404079490,null)], null);
}));

(cljs.core.async.t_cljs$core$async14330.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14330.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14330");

(cljs.core.async.t_cljs$core$async14330.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14330");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14330.
 */
cljs.core.async.__GT_t_cljs$core$async14330 = (function cljs$core$async$__GT_t_cljs$core$async14330(f,blockable,meta14331){
return (new cljs.core.async.t_cljs$core$async14330(f,blockable,meta14331));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14319 = arguments.length;
switch (G__14319) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14330(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14384 = arguments.length;
switch (G__14384) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14403 = arguments.length;
switch (G__14403) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14436 = arguments.length;
switch (G__14436) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17943 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17943) : fn1.call(null,val_17943));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17943) : fn1.call(null,val_17943));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14472 = arguments.length;
switch (G__14472) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___17946 = n;
var x_17947 = (0);
while(true){
if((x_17947 < n__5593__auto___17946)){
(a[x_17947] = x_17947);

var G__17948 = (x_17947 + (1));
x_17947 = G__17948;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14492 = (function (flag,meta14493){
this.flag = flag;
this.meta14493 = meta14493;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14494,meta14493__$1){
var self__ = this;
var _14494__$1 = this;
return (new cljs.core.async.t_cljs$core$async14492(self__.flag,meta14493__$1));
}));

(cljs.core.async.t_cljs$core$async14492.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14494){
var self__ = this;
var _14494__$1 = this;
return self__.meta14493;
}));

(cljs.core.async.t_cljs$core$async14492.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14492.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14492.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14492.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14492.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14493","meta14493",595087094,null)], null);
}));

(cljs.core.async.t_cljs$core$async14492.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14492.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14492");

(cljs.core.async.t_cljs$core$async14492.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14492");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14492.
 */
cljs.core.async.__GT_t_cljs$core$async14492 = (function cljs$core$async$__GT_t_cljs$core$async14492(flag,meta14493){
return (new cljs.core.async.t_cljs$core$async14492(flag,meta14493));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14492(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14506 = (function (flag,cb,meta14507){
this.flag = flag;
this.cb = cb;
this.meta14507 = meta14507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14508,meta14507__$1){
var self__ = this;
var _14508__$1 = this;
return (new cljs.core.async.t_cljs$core$async14506(self__.flag,self__.cb,meta14507__$1));
}));

(cljs.core.async.t_cljs$core$async14506.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14508){
var self__ = this;
var _14508__$1 = this;
return self__.meta14507;
}));

(cljs.core.async.t_cljs$core$async14506.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14506.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14506.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14506.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14506.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14507","meta14507",-708852072,null)], null);
}));

(cljs.core.async.t_cljs$core$async14506.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14506");

(cljs.core.async.t_cljs$core$async14506.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14506");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14506.
 */
cljs.core.async.__GT_t_cljs$core$async14506 = (function cljs$core$async$__GT_t_cljs$core$async14506(flag,cb,meta14507){
return (new cljs.core.async.t_cljs$core$async14506(flag,cb,meta14507));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14506(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14537_SHARP_){
var G__14550 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14537_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14550) : fret.call(null,G__14550));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14538_SHARP_){
var G__14551 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14538_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14551) : fret.call(null,G__14551));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17959 = (i + (1));
i = G__17959;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17964 = arguments.length;
var i__5727__auto___17965 = (0);
while(true){
if((i__5727__auto___17965 < len__5726__auto___17964)){
args__5732__auto__.push((arguments[i__5727__auto___17965]));

var G__17967 = (i__5727__auto___17965 + (1));
i__5727__auto___17965 = G__17967;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14567){
var map__14568 = p__14567;
var map__14568__$1 = cljs.core.__destructure_map(map__14568);
var opts = map__14568__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14559){
var G__14560 = cljs.core.first(seq14559);
var seq14559__$1 = cljs.core.next(seq14559);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14560,seq14559__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14592 = arguments.length;
switch (G__14592) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14202__auto___17974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14203__auto__ = (function (){var switch__13357__auto__ = (function (state_14633){
var state_val_14634 = (state_14633[(1)]);
if((state_val_14634 === (7))){
var inst_14629 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14639_17980 = state_14633__$1;
(statearr_14639_17980[(2)] = inst_14629);

(statearr_14639_17980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (1))){
var state_14633__$1 = state_14633;
var statearr_14649_17981 = state_14633__$1;
(statearr_14649_17981[(2)] = null);

(statearr_14649_17981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (4))){
var inst_14610 = (state_14633[(7)]);
var inst_14610__$1 = (state_14633[(2)]);
var inst_14613 = (inst_14610__$1 == null);
var state_14633__$1 = (function (){var statearr_14651 = state_14633;
(statearr_14651[(7)] = inst_14610__$1);

return statearr_14651;
})();
if(cljs.core.truth_(inst_14613)){
var statearr_14652_17991 = state_14633__$1;
(statearr_14652_17991[(1)] = (5));

} else {
var statearr_14653_17992 = state_14633__$1;
(statearr_14653_17992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (13))){
var state_14633__$1 = state_14633;
var statearr_14659_17997 = state_14633__$1;
(statearr_14659_17997[(2)] = null);

(statearr_14659_17997[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (6))){
var inst_14610 = (state_14633[(7)]);
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14633__$1,(11),to,inst_14610);
} else {
if((state_val_14634 === (3))){
var inst_14631 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14633__$1,inst_14631);
} else {
if((state_val_14634 === (12))){
var state_14633__$1 = state_14633;
var statearr_14664_18005 = state_14633__$1;
(statearr_14664_18005[(2)] = null);

(statearr_14664_18005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (2))){
var state_14633__$1 = state_14633;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14633__$1,(4),from);
} else {
if((state_val_14634 === (11))){
var inst_14622 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
if(cljs.core.truth_(inst_14622)){
var statearr_14669_18006 = state_14633__$1;
(statearr_14669_18006[(1)] = (12));

} else {
var statearr_14670_18007 = state_14633__$1;
(statearr_14670_18007[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (9))){
var state_14633__$1 = state_14633;
var statearr_14672_18008 = state_14633__$1;
(statearr_14672_18008[(2)] = null);

(statearr_14672_18008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (5))){
var state_14633__$1 = state_14633;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14673_18009 = state_14633__$1;
(statearr_14673_18009[(1)] = (8));

} else {
var statearr_14674_18022 = state_14633__$1;
(statearr_14674_18022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (14))){
var inst_14627 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14675_18023 = state_14633__$1;
(statearr_14675_18023[(2)] = inst_14627);

(statearr_14675_18023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (10))){
var inst_14619 = (state_14633[(2)]);
var state_14633__$1 = state_14633;
var statearr_14676_18024 = state_14633__$1;
(statearr_14676_18024[(2)] = inst_14619);

(statearr_14676_18024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14634 === (8))){
var inst_14616 = cljs.core.async.close_BANG_(to);
var state_14633__$1 = state_14633;
var statearr_14679_18025 = state_14633__$1;
(statearr_14679_18025[(2)] = inst_14616);

(statearr_14679_18025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13358__auto__ = null;
var cljs$core$async$state_machine__13358__auto____0 = (function (){
var statearr_14688 = [null,null,null,null,null,null,null,null];
(statearr_14688[(0)] = cljs$core$async$state_machine__13358__auto__);

(statearr_14688[(1)] = (1));

return statearr_14688;
});
var cljs$core$async$state_machine__13358__auto____1 = (function (state_14633){
while(true){
var ret_value__13359__auto__ = (function (){try{while(true){
var result__13360__auto__ = switch__13357__auto__(state_14633);
if(cljs.core.keyword_identical_QMARK_(result__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13360__auto__;
}
break;
}
}catch (e14689){var ex__13361__auto__ = e14689;
var statearr_14690_18026 = state_14633;
(statearr_14690_18026[(2)] = ex__13361__auto__);


if(cljs.core.seq((state_14633[(4)]))){
var statearr_14694_18027 = state_14633;
(statearr_14694_18027[(1)] = cljs.core.first((state_14633[(4)])));

} else {
throw ex__13361__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18029 = state_14633;
state_14633 = G__18029;
continue;
} else {
return ret_value__13359__auto__;
}
break;
}
});
cljs$core$async$state_machine__13358__auto__ = function(state_14633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13358__auto____1.call(this,state_14633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13358__auto____0;
cljs$core$async$state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13358__auto____1;
return cljs$core$async$state_machine__13358__auto__;
})()
})();
var state__14204__auto__ = (function (){var statearr_14697 = f__14203__auto__();
(statearr_14697[(6)] = c__14202__auto___17974);

return statearr_14697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14204__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14721){
var vec__14723 = p__14721;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14723,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14723,(1),null);
var job = vec__14723;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14202__auto___18031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14203__auto__ = (function (){var switch__13357__auto__ = (function (state_14734){
var state_val_14735 = (state_14734[(1)]);
if((state_val_14735 === (1))){
var state_14734__$1 = state_14734;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14734__$1,(2),res,v);
} else {
if((state_val_14735 === (2))){
var inst_14731 = (state_14734[(2)]);
var inst_14732 = cljs.core.async.close_BANG_(res);
var state_14734__$1 = (function (){var statearr_14745 = state_14734;
(statearr_14745[(7)] = inst_14731);

return statearr_14745;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14734__$1,inst_14732);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____0 = (function (){
var statearr_14747 = [null,null,null,null,null,null,null,null];
(statearr_14747[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__);

(statearr_14747[(1)] = (1));

return statearr_14747;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____1 = (function (state_14734){
while(true){
var ret_value__13359__auto__ = (function (){try{while(true){
var result__13360__auto__ = switch__13357__auto__(state_14734);
if(cljs.core.keyword_identical_QMARK_(result__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13360__auto__;
}
break;
}
}catch (e14748){var ex__13361__auto__ = e14748;
var statearr_14749_18035 = state_14734;
(statearr_14749_18035[(2)] = ex__13361__auto__);


if(cljs.core.seq((state_14734[(4)]))){
var statearr_14750_18037 = state_14734;
(statearr_14750_18037[(1)] = cljs.core.first((state_14734[(4)])));

} else {
throw ex__13361__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18038 = state_14734;
state_14734 = G__18038;
continue;
} else {
return ret_value__13359__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__ = function(state_14734){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____1.call(this,state_14734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__;
})()
})();
var state__14204__auto__ = (function (){var statearr_14751 = f__14203__auto__();
(statearr_14751[(6)] = c__14202__auto___18031);

return statearr_14751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14204__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14756){
var vec__14757 = p__14756;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14757,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14757,(1),null);
var job = vec__14757;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___18039 = n;
var __18040 = (0);
while(true){
if((__18040 < n__5593__auto___18039)){
var G__14762_18041 = type;
var G__14762_18042__$1 = (((G__14762_18041 instanceof cljs.core.Keyword))?G__14762_18041.fqn:null);
switch (G__14762_18042__$1) {
case "compute":
var c__14202__auto___18044 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18040,c__14202__auto___18044,G__14762_18041,G__14762_18042__$1,n__5593__auto___18039,jobs,results,process__$1,async){
return (function (){
var f__14203__auto__ = (function (){var switch__13357__auto__ = ((function (__18040,c__14202__auto___18044,G__14762_18041,G__14762_18042__$1,n__5593__auto___18039,jobs,results,process__$1,async){
return (function (state_14775){
var state_val_14776 = (state_14775[(1)]);
if((state_val_14776 === (1))){
var state_14775__$1 = state_14775;
var statearr_14778_18045 = state_14775__$1;
(statearr_14778_18045[(2)] = null);

(statearr_14778_18045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14776 === (2))){
var state_14775__$1 = state_14775;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14775__$1,(4),jobs);
} else {
if((state_val_14776 === (3))){
var inst_14773 = (state_14775[(2)]);
var state_14775__$1 = state_14775;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14775__$1,inst_14773);
} else {
if((state_val_14776 === (4))){
var inst_14765 = (state_14775[(2)]);
var inst_14766 = process__$1(inst_14765);
var state_14775__$1 = state_14775;
if(cljs.core.truth_(inst_14766)){
var statearr_14784_18049 = state_14775__$1;
(statearr_14784_18049[(1)] = (5));

} else {
var statearr_14785_18050 = state_14775__$1;
(statearr_14785_18050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14776 === (5))){
var state_14775__$1 = state_14775;
var statearr_14786_18051 = state_14775__$1;
(statearr_14786_18051[(2)] = null);

(statearr_14786_18051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14776 === (6))){
var state_14775__$1 = state_14775;
var statearr_14787_18054 = state_14775__$1;
(statearr_14787_18054[(2)] = null);

(statearr_14787_18054[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14776 === (7))){
var inst_14771 = (state_14775[(2)]);
var state_14775__$1 = state_14775;
var statearr_14789_18055 = state_14775__$1;
(statearr_14789_18055[(2)] = inst_14771);

(statearr_14789_18055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18040,c__14202__auto___18044,G__14762_18041,G__14762_18042__$1,n__5593__auto___18039,jobs,results,process__$1,async))
;
return ((function (__18040,switch__13357__auto__,c__14202__auto___18044,G__14762_18041,G__14762_18042__$1,n__5593__auto___18039,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____0 = (function (){
var statearr_14791 = [null,null,null,null,null,null,null];
(statearr_14791[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__);

(statearr_14791[(1)] = (1));

return statearr_14791;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____1 = (function (state_14775){
while(true){
var ret_value__13359__auto__ = (function (){try{while(true){
var result__13360__auto__ = switch__13357__auto__(state_14775);
if(cljs.core.keyword_identical_QMARK_(result__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13360__auto__;
}
break;
}
}catch (e14792){var ex__13361__auto__ = e14792;
var statearr_14793_18062 = state_14775;
(statearr_14793_18062[(2)] = ex__13361__auto__);


if(cljs.core.seq((state_14775[(4)]))){
var statearr_14797_18063 = state_14775;
(statearr_14797_18063[(1)] = cljs.core.first((state_14775[(4)])));

} else {
throw ex__13361__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18064 = state_14775;
state_14775 = G__18064;
continue;
} else {
return ret_value__13359__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__ = function(state_14775){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____1.call(this,state_14775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__;
})()
;})(__18040,switch__13357__auto__,c__14202__auto___18044,G__14762_18041,G__14762_18042__$1,n__5593__auto___18039,jobs,results,process__$1,async))
})();
var state__14204__auto__ = (function (){var statearr_14798 = f__14203__auto__();
(statearr_14798[(6)] = c__14202__auto___18044);

return statearr_14798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14204__auto__);
});})(__18040,c__14202__auto___18044,G__14762_18041,G__14762_18042__$1,n__5593__auto___18039,jobs,results,process__$1,async))
);


break;
case "async":
var c__14202__auto___18072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18040,c__14202__auto___18072,G__14762_18041,G__14762_18042__$1,n__5593__auto___18039,jobs,results,process__$1,async){
return (function (){
var f__14203__auto__ = (function (){var switch__13357__auto__ = ((function (__18040,c__14202__auto___18072,G__14762_18041,G__14762_18042__$1,n__5593__auto___18039,jobs,results,process__$1,async){
return (function (state_14811){
var state_val_14812 = (state_14811[(1)]);
if((state_val_14812 === (1))){
var state_14811__$1 = state_14811;
var statearr_14813_18076 = state_14811__$1;
(statearr_14813_18076[(2)] = null);

(statearr_14813_18076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14812 === (2))){
var state_14811__$1 = state_14811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14811__$1,(4),jobs);
} else {
if((state_val_14812 === (3))){
var inst_14809 = (state_14811[(2)]);
var state_14811__$1 = state_14811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14811__$1,inst_14809);
} else {
if((state_val_14812 === (4))){
var inst_14801 = (state_14811[(2)]);
var inst_14802 = async(inst_14801);
var state_14811__$1 = state_14811;
if(cljs.core.truth_(inst_14802)){
var statearr_14815_18081 = state_14811__$1;
(statearr_14815_18081[(1)] = (5));

} else {
var statearr_14816_18082 = state_14811__$1;
(statearr_14816_18082[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14812 === (5))){
var state_14811__$1 = state_14811;
var statearr_14817_18083 = state_14811__$1;
(statearr_14817_18083[(2)] = null);

(statearr_14817_18083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14812 === (6))){
var state_14811__$1 = state_14811;
var statearr_14818_18085 = state_14811__$1;
(statearr_14818_18085[(2)] = null);

(statearr_14818_18085[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14812 === (7))){
var inst_14807 = (state_14811[(2)]);
var state_14811__$1 = state_14811;
var statearr_14819_18089 = state_14811__$1;
(statearr_14819_18089[(2)] = inst_14807);

(statearr_14819_18089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18040,c__14202__auto___18072,G__14762_18041,G__14762_18042__$1,n__5593__auto___18039,jobs,results,process__$1,async))
;
return ((function (__18040,switch__13357__auto__,c__14202__auto___18072,G__14762_18041,G__14762_18042__$1,n__5593__auto___18039,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____0 = (function (){
var statearr_14821 = [null,null,null,null,null,null,null];
(statearr_14821[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__);

(statearr_14821[(1)] = (1));

return statearr_14821;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____1 = (function (state_14811){
while(true){
var ret_value__13359__auto__ = (function (){try{while(true){
var result__13360__auto__ = switch__13357__auto__(state_14811);
if(cljs.core.keyword_identical_QMARK_(result__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13360__auto__;
}
break;
}
}catch (e14822){var ex__13361__auto__ = e14822;
var statearr_14823_18093 = state_14811;
(statearr_14823_18093[(2)] = ex__13361__auto__);


if(cljs.core.seq((state_14811[(4)]))){
var statearr_14824_18094 = state_14811;
(statearr_14824_18094[(1)] = cljs.core.first((state_14811[(4)])));

} else {
throw ex__13361__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18095 = state_14811;
state_14811 = G__18095;
continue;
} else {
return ret_value__13359__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__ = function(state_14811){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____1.call(this,state_14811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__;
})()
;})(__18040,switch__13357__auto__,c__14202__auto___18072,G__14762_18041,G__14762_18042__$1,n__5593__auto___18039,jobs,results,process__$1,async))
})();
var state__14204__auto__ = (function (){var statearr_14829 = f__14203__auto__();
(statearr_14829[(6)] = c__14202__auto___18072);

return statearr_14829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14204__auto__);
});})(__18040,c__14202__auto___18072,G__14762_18041,G__14762_18042__$1,n__5593__auto___18039,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14762_18042__$1)].join('')));

}

var G__18101 = (__18040 + (1));
__18040 = G__18101;
continue;
} else {
}
break;
}

var c__14202__auto___18102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14203__auto__ = (function (){var switch__13357__auto__ = (function (state_14855){
var state_val_14856 = (state_14855[(1)]);
if((state_val_14856 === (7))){
var inst_14851 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
var statearr_14860_18105 = state_14855__$1;
(statearr_14860_18105[(2)] = inst_14851);

(statearr_14860_18105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (1))){
var state_14855__$1 = state_14855;
var statearr_14864_18107 = state_14855__$1;
(statearr_14864_18107[(2)] = null);

(statearr_14864_18107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (4))){
var inst_14835 = (state_14855[(7)]);
var inst_14835__$1 = (state_14855[(2)]);
var inst_14836 = (inst_14835__$1 == null);
var state_14855__$1 = (function (){var statearr_14866 = state_14855;
(statearr_14866[(7)] = inst_14835__$1);

return statearr_14866;
})();
if(cljs.core.truth_(inst_14836)){
var statearr_14867_18110 = state_14855__$1;
(statearr_14867_18110[(1)] = (5));

} else {
var statearr_14868_18111 = state_14855__$1;
(statearr_14868_18111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (6))){
var inst_14835 = (state_14855[(7)]);
var inst_14840 = (state_14855[(8)]);
var inst_14840__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14842 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14843 = [inst_14835,inst_14840__$1];
var inst_14844 = (new cljs.core.PersistentVector(null,2,(5),inst_14842,inst_14843,null));
var state_14855__$1 = (function (){var statearr_14870 = state_14855;
(statearr_14870[(8)] = inst_14840__$1);

return statearr_14870;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14855__$1,(8),jobs,inst_14844);
} else {
if((state_val_14856 === (3))){
var inst_14853 = (state_14855[(2)]);
var state_14855__$1 = state_14855;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14855__$1,inst_14853);
} else {
if((state_val_14856 === (2))){
var state_14855__$1 = state_14855;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14855__$1,(4),from);
} else {
if((state_val_14856 === (9))){
var inst_14848 = (state_14855[(2)]);
var state_14855__$1 = (function (){var statearr_14873 = state_14855;
(statearr_14873[(9)] = inst_14848);

return statearr_14873;
})();
var statearr_14874_18117 = state_14855__$1;
(statearr_14874_18117[(2)] = null);

(statearr_14874_18117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (5))){
var inst_14838 = cljs.core.async.close_BANG_(jobs);
var state_14855__$1 = state_14855;
var statearr_14875_18118 = state_14855__$1;
(statearr_14875_18118[(2)] = inst_14838);

(statearr_14875_18118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14856 === (8))){
var inst_14840 = (state_14855[(8)]);
var inst_14846 = (state_14855[(2)]);
var state_14855__$1 = (function (){var statearr_14877 = state_14855;
(statearr_14877[(10)] = inst_14846);

return statearr_14877;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14855__$1,(9),results,inst_14840);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____0 = (function (){
var statearr_14878 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14878[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__);

(statearr_14878[(1)] = (1));

return statearr_14878;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____1 = (function (state_14855){
while(true){
var ret_value__13359__auto__ = (function (){try{while(true){
var result__13360__auto__ = switch__13357__auto__(state_14855);
if(cljs.core.keyword_identical_QMARK_(result__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13360__auto__;
}
break;
}
}catch (e14879){var ex__13361__auto__ = e14879;
var statearr_14884_18119 = state_14855;
(statearr_14884_18119[(2)] = ex__13361__auto__);


if(cljs.core.seq((state_14855[(4)]))){
var statearr_14885_18120 = state_14855;
(statearr_14885_18120[(1)] = cljs.core.first((state_14855[(4)])));

} else {
throw ex__13361__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18124 = state_14855;
state_14855 = G__18124;
continue;
} else {
return ret_value__13359__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__ = function(state_14855){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____1.call(this,state_14855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__;
})()
})();
var state__14204__auto__ = (function (){var statearr_14889 = f__14203__auto__();
(statearr_14889[(6)] = c__14202__auto___18102);

return statearr_14889;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14204__auto__);
}));


var c__14202__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14203__auto__ = (function (){var switch__13357__auto__ = (function (state_14931){
var state_val_14932 = (state_14931[(1)]);
if((state_val_14932 === (7))){
var inst_14927 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
var statearr_14935_18128 = state_14931__$1;
(statearr_14935_18128[(2)] = inst_14927);

(statearr_14935_18128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (20))){
var state_14931__$1 = state_14931;
var statearr_14936_18133 = state_14931__$1;
(statearr_14936_18133[(2)] = null);

(statearr_14936_18133[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (1))){
var state_14931__$1 = state_14931;
var statearr_14941_18134 = state_14931__$1;
(statearr_14941_18134[(2)] = null);

(statearr_14941_18134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (4))){
var inst_14893 = (state_14931[(7)]);
var inst_14893__$1 = (state_14931[(2)]);
var inst_14894 = (inst_14893__$1 == null);
var state_14931__$1 = (function (){var statearr_14943 = state_14931;
(statearr_14943[(7)] = inst_14893__$1);

return statearr_14943;
})();
if(cljs.core.truth_(inst_14894)){
var statearr_14944_18135 = state_14931__$1;
(statearr_14944_18135[(1)] = (5));

} else {
var statearr_14945_18139 = state_14931__$1;
(statearr_14945_18139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (15))){
var inst_14907 = (state_14931[(8)]);
var state_14931__$1 = state_14931;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14931__$1,(18),to,inst_14907);
} else {
if((state_val_14932 === (21))){
var inst_14921 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
var statearr_14948_18140 = state_14931__$1;
(statearr_14948_18140[(2)] = inst_14921);

(statearr_14948_18140[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (13))){
var inst_14924 = (state_14931[(2)]);
var state_14931__$1 = (function (){var statearr_14949 = state_14931;
(statearr_14949[(9)] = inst_14924);

return statearr_14949;
})();
var statearr_14950_18141 = state_14931__$1;
(statearr_14950_18141[(2)] = null);

(statearr_14950_18141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (6))){
var inst_14893 = (state_14931[(7)]);
var state_14931__$1 = state_14931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14931__$1,(11),inst_14893);
} else {
if((state_val_14932 === (17))){
var inst_14916 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
if(cljs.core.truth_(inst_14916)){
var statearr_14953_18142 = state_14931__$1;
(statearr_14953_18142[(1)] = (19));

} else {
var statearr_14954_18143 = state_14931__$1;
(statearr_14954_18143[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (3))){
var inst_14929 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14931__$1,inst_14929);
} else {
if((state_val_14932 === (12))){
var inst_14904 = (state_14931[(10)]);
var state_14931__$1 = state_14931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14931__$1,(14),inst_14904);
} else {
if((state_val_14932 === (2))){
var state_14931__$1 = state_14931;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14931__$1,(4),results);
} else {
if((state_val_14932 === (19))){
var state_14931__$1 = state_14931;
var statearr_14956_18150 = state_14931__$1;
(statearr_14956_18150[(2)] = null);

(statearr_14956_18150[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (11))){
var inst_14904 = (state_14931[(2)]);
var state_14931__$1 = (function (){var statearr_14958 = state_14931;
(statearr_14958[(10)] = inst_14904);

return statearr_14958;
})();
var statearr_14959_18153 = state_14931__$1;
(statearr_14959_18153[(2)] = null);

(statearr_14959_18153[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (9))){
var state_14931__$1 = state_14931;
var statearr_14960_18157 = state_14931__$1;
(statearr_14960_18157[(2)] = null);

(statearr_14960_18157[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (5))){
var state_14931__$1 = state_14931;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14963_18158 = state_14931__$1;
(statearr_14963_18158[(1)] = (8));

} else {
var statearr_14964_18159 = state_14931__$1;
(statearr_14964_18159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (14))){
var inst_14907 = (state_14931[(8)]);
var inst_14909 = (state_14931[(11)]);
var inst_14907__$1 = (state_14931[(2)]);
var inst_14908 = (inst_14907__$1 == null);
var inst_14909__$1 = cljs.core.not(inst_14908);
var state_14931__$1 = (function (){var statearr_14969 = state_14931;
(statearr_14969[(8)] = inst_14907__$1);

(statearr_14969[(11)] = inst_14909__$1);

return statearr_14969;
})();
if(inst_14909__$1){
var statearr_14970_18160 = state_14931__$1;
(statearr_14970_18160[(1)] = (15));

} else {
var statearr_14971_18161 = state_14931__$1;
(statearr_14971_18161[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (16))){
var inst_14909 = (state_14931[(11)]);
var state_14931__$1 = state_14931;
var statearr_14977_18165 = state_14931__$1;
(statearr_14977_18165[(2)] = inst_14909);

(statearr_14977_18165[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (10))){
var inst_14901 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
var statearr_14979_18166 = state_14931__$1;
(statearr_14979_18166[(2)] = inst_14901);

(statearr_14979_18166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (18))){
var inst_14913 = (state_14931[(2)]);
var state_14931__$1 = state_14931;
var statearr_14985_18170 = state_14931__$1;
(statearr_14985_18170[(2)] = inst_14913);

(statearr_14985_18170[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14932 === (8))){
var inst_14898 = cljs.core.async.close_BANG_(to);
var state_14931__$1 = state_14931;
var statearr_14987_18174 = state_14931__$1;
(statearr_14987_18174[(2)] = inst_14898);

(statearr_14987_18174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____0 = (function (){
var statearr_14988 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14988[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__);

(statearr_14988[(1)] = (1));

return statearr_14988;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____1 = (function (state_14931){
while(true){
var ret_value__13359__auto__ = (function (){try{while(true){
var result__13360__auto__ = switch__13357__auto__(state_14931);
if(cljs.core.keyword_identical_QMARK_(result__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13360__auto__;
}
break;
}
}catch (e14989){var ex__13361__auto__ = e14989;
var statearr_14990_18175 = state_14931;
(statearr_14990_18175[(2)] = ex__13361__auto__);


if(cljs.core.seq((state_14931[(4)]))){
var statearr_14992_18176 = state_14931;
(statearr_14992_18176[(1)] = cljs.core.first((state_14931[(4)])));

} else {
throw ex__13361__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18177 = state_14931;
state_14931 = G__18177;
continue;
} else {
return ret_value__13359__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__ = function(state_14931){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____1.call(this,state_14931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13358__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13358__auto__;
})()
})();
var state__14204__auto__ = (function (){var statearr_14994 = f__14203__auto__();
(statearr_14994[(6)] = c__14202__auto__);

return statearr_14994;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14204__auto__);
}));

return c__14202__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15007 = arguments.length;
switch (G__15007) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15024 = arguments.length;
switch (G__15024) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15037 = arguments.length;
switch (G__15037) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14202__auto___18188 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14203__auto__ = (function (){var switch__13357__auto__ = (function (state_15074){
var state_val_15075 = (state_15074[(1)]);
if((state_val_15075 === (7))){
var inst_15068 = (state_15074[(2)]);
var state_15074__$1 = state_15074;
var statearr_15079_18189 = state_15074__$1;
(statearr_15079_18189[(2)] = inst_15068);

(statearr_15079_18189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15075 === (1))){
var state_15074__$1 = state_15074;
var statearr_15082_18190 = state_15074__$1;
(statearr_15082_18190[(2)] = null);

(statearr_15082_18190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15075 === (4))){
var inst_15047 = (state_15074[(7)]);
var inst_15047__$1 = (state_15074[(2)]);
var inst_15048 = (inst_15047__$1 == null);
var state_15074__$1 = (function (){var statearr_15089 = state_15074;
(statearr_15089[(7)] = inst_15047__$1);

return statearr_15089;
})();
if(cljs.core.truth_(inst_15048)){
var statearr_15091_18195 = state_15074__$1;
(statearr_15091_18195[(1)] = (5));

} else {
var statearr_15092_18196 = state_15074__$1;
(statearr_15092_18196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15075 === (13))){
var state_15074__$1 = state_15074;
var statearr_15093_18197 = state_15074__$1;
(statearr_15093_18197[(2)] = null);

(statearr_15093_18197[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15075 === (6))){
var inst_15047 = (state_15074[(7)]);
var inst_15054 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15047) : p.call(null,inst_15047));
var state_15074__$1 = state_15074;
if(cljs.core.truth_(inst_15054)){
var statearr_15097_18200 = state_15074__$1;
(statearr_15097_18200[(1)] = (9));

} else {
var statearr_15103_18201 = state_15074__$1;
(statearr_15103_18201[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15075 === (3))){
var inst_15070 = (state_15074[(2)]);
var state_15074__$1 = state_15074;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15074__$1,inst_15070);
} else {
if((state_val_15075 === (12))){
var state_15074__$1 = state_15074;
var statearr_15107_18205 = state_15074__$1;
(statearr_15107_18205[(2)] = null);

(statearr_15107_18205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15075 === (2))){
var state_15074__$1 = state_15074;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15074__$1,(4),ch);
} else {
if((state_val_15075 === (11))){
var inst_15047 = (state_15074[(7)]);
var inst_15059 = (state_15074[(2)]);
var state_15074__$1 = state_15074;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15074__$1,(8),inst_15059,inst_15047);
} else {
if((state_val_15075 === (9))){
var state_15074__$1 = state_15074;
var statearr_15112_18206 = state_15074__$1;
(statearr_15112_18206[(2)] = tc);

(statearr_15112_18206[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15075 === (5))){
var inst_15050 = cljs.core.async.close_BANG_(tc);
var inst_15052 = cljs.core.async.close_BANG_(fc);
var state_15074__$1 = (function (){var statearr_15115 = state_15074;
(statearr_15115[(8)] = inst_15050);

return statearr_15115;
})();
var statearr_15116_18207 = state_15074__$1;
(statearr_15116_18207[(2)] = inst_15052);

(statearr_15116_18207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15075 === (14))){
var inst_15066 = (state_15074[(2)]);
var state_15074__$1 = state_15074;
var statearr_15117_18208 = state_15074__$1;
(statearr_15117_18208[(2)] = inst_15066);

(statearr_15117_18208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15075 === (10))){
var state_15074__$1 = state_15074;
var statearr_15121_18209 = state_15074__$1;
(statearr_15121_18209[(2)] = fc);

(statearr_15121_18209[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15075 === (8))){
var inst_15061 = (state_15074[(2)]);
var state_15074__$1 = state_15074;
if(cljs.core.truth_(inst_15061)){
var statearr_15124_18210 = state_15074__$1;
(statearr_15124_18210[(1)] = (12));

} else {
var statearr_15125_18212 = state_15074__$1;
(statearr_15125_18212[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13358__auto__ = null;
var cljs$core$async$state_machine__13358__auto____0 = (function (){
var statearr_15128 = [null,null,null,null,null,null,null,null,null];
(statearr_15128[(0)] = cljs$core$async$state_machine__13358__auto__);

(statearr_15128[(1)] = (1));

return statearr_15128;
});
var cljs$core$async$state_machine__13358__auto____1 = (function (state_15074){
while(true){
var ret_value__13359__auto__ = (function (){try{while(true){
var result__13360__auto__ = switch__13357__auto__(state_15074);
if(cljs.core.keyword_identical_QMARK_(result__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13360__auto__;
}
break;
}
}catch (e15132){var ex__13361__auto__ = e15132;
var statearr_15135_18213 = state_15074;
(statearr_15135_18213[(2)] = ex__13361__auto__);


if(cljs.core.seq((state_15074[(4)]))){
var statearr_15137_18214 = state_15074;
(statearr_15137_18214[(1)] = cljs.core.first((state_15074[(4)])));

} else {
throw ex__13361__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18215 = state_15074;
state_15074 = G__18215;
continue;
} else {
return ret_value__13359__auto__;
}
break;
}
});
cljs$core$async$state_machine__13358__auto__ = function(state_15074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13358__auto____1.call(this,state_15074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13358__auto____0;
cljs$core$async$state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13358__auto____1;
return cljs$core$async$state_machine__13358__auto__;
})()
})();
var state__14204__auto__ = (function (){var statearr_15148 = f__14203__auto__();
(statearr_15148[(6)] = c__14202__auto___18188);

return statearr_15148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14204__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14202__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14203__auto__ = (function (){var switch__13357__auto__ = (function (state_15196){
var state_val_15197 = (state_15196[(1)]);
if((state_val_15197 === (7))){
var inst_15183 = (state_15196[(2)]);
var state_15196__$1 = state_15196;
var statearr_15220_18219 = state_15196__$1;
(statearr_15220_18219[(2)] = inst_15183);

(statearr_15220_18219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15197 === (1))){
var inst_15160 = init;
var inst_15162 = inst_15160;
var state_15196__$1 = (function (){var statearr_15232 = state_15196;
(statearr_15232[(7)] = inst_15162);

return statearr_15232;
})();
var statearr_15234_18222 = state_15196__$1;
(statearr_15234_18222[(2)] = null);

(statearr_15234_18222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15197 === (4))){
var inst_15165 = (state_15196[(8)]);
var inst_15165__$1 = (state_15196[(2)]);
var inst_15166 = (inst_15165__$1 == null);
var state_15196__$1 = (function (){var statearr_15245 = state_15196;
(statearr_15245[(8)] = inst_15165__$1);

return statearr_15245;
})();
if(cljs.core.truth_(inst_15166)){
var statearr_15249_18225 = state_15196__$1;
(statearr_15249_18225[(1)] = (5));

} else {
var statearr_15255_18226 = state_15196__$1;
(statearr_15255_18226[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15197 === (6))){
var inst_15173 = (state_15196[(9)]);
var inst_15165 = (state_15196[(8)]);
var inst_15162 = (state_15196[(7)]);
var inst_15173__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15162,inst_15165) : f.call(null,inst_15162,inst_15165));
var inst_15174 = cljs.core.reduced_QMARK_(inst_15173__$1);
var state_15196__$1 = (function (){var statearr_15265 = state_15196;
(statearr_15265[(9)] = inst_15173__$1);

return statearr_15265;
})();
if(inst_15174){
var statearr_15271_18227 = state_15196__$1;
(statearr_15271_18227[(1)] = (8));

} else {
var statearr_15272_18228 = state_15196__$1;
(statearr_15272_18228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15197 === (3))){
var inst_15188 = (state_15196[(2)]);
var state_15196__$1 = state_15196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15196__$1,inst_15188);
} else {
if((state_val_15197 === (2))){
var state_15196__$1 = state_15196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15196__$1,(4),ch);
} else {
if((state_val_15197 === (9))){
var inst_15173 = (state_15196[(9)]);
var inst_15162 = inst_15173;
var state_15196__$1 = (function (){var statearr_15280 = state_15196;
(statearr_15280[(7)] = inst_15162);

return statearr_15280;
})();
var statearr_15281_18233 = state_15196__$1;
(statearr_15281_18233[(2)] = null);

(statearr_15281_18233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15197 === (5))){
var inst_15162 = (state_15196[(7)]);
var state_15196__$1 = state_15196;
var statearr_15286_18234 = state_15196__$1;
(statearr_15286_18234[(2)] = inst_15162);

(statearr_15286_18234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15197 === (10))){
var inst_15181 = (state_15196[(2)]);
var state_15196__$1 = state_15196;
var statearr_15292_18239 = state_15196__$1;
(statearr_15292_18239[(2)] = inst_15181);

(statearr_15292_18239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15197 === (8))){
var inst_15173 = (state_15196[(9)]);
var inst_15177 = cljs.core.deref(inst_15173);
var state_15196__$1 = state_15196;
var statearr_15296_18240 = state_15196__$1;
(statearr_15296_18240[(2)] = inst_15177);

(statearr_15296_18240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13358__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13358__auto____0 = (function (){
var statearr_15310 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15310[(0)] = cljs$core$async$reduce_$_state_machine__13358__auto__);

(statearr_15310[(1)] = (1));

return statearr_15310;
});
var cljs$core$async$reduce_$_state_machine__13358__auto____1 = (function (state_15196){
while(true){
var ret_value__13359__auto__ = (function (){try{while(true){
var result__13360__auto__ = switch__13357__auto__(state_15196);
if(cljs.core.keyword_identical_QMARK_(result__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13360__auto__;
}
break;
}
}catch (e15316){var ex__13361__auto__ = e15316;
var statearr_15319_18244 = state_15196;
(statearr_15319_18244[(2)] = ex__13361__auto__);


if(cljs.core.seq((state_15196[(4)]))){
var statearr_15324_18245 = state_15196;
(statearr_15324_18245[(1)] = cljs.core.first((state_15196[(4)])));

} else {
throw ex__13361__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18246 = state_15196;
state_15196 = G__18246;
continue;
} else {
return ret_value__13359__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13358__auto__ = function(state_15196){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13358__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13358__auto____1.call(this,state_15196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13358__auto____0;
cljs$core$async$reduce_$_state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13358__auto____1;
return cljs$core$async$reduce_$_state_machine__13358__auto__;
})()
})();
var state__14204__auto__ = (function (){var statearr_15336 = f__14203__auto__();
(statearr_15336[(6)] = c__14202__auto__);

return statearr_15336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14204__auto__);
}));

return c__14202__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14202__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14203__auto__ = (function (){var switch__13357__auto__ = (function (state_15350){
var state_val_15351 = (state_15350[(1)]);
if((state_val_15351 === (1))){
var inst_15344 = cljs.core.async.reduce(f__$1,init,ch);
var state_15350__$1 = state_15350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15350__$1,(2),inst_15344);
} else {
if((state_val_15351 === (2))){
var inst_15346 = (state_15350[(2)]);
var inst_15348 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15346) : f__$1.call(null,inst_15346));
var state_15350__$1 = state_15350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15350__$1,inst_15348);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13358__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13358__auto____0 = (function (){
var statearr_15363 = [null,null,null,null,null,null,null];
(statearr_15363[(0)] = cljs$core$async$transduce_$_state_machine__13358__auto__);

(statearr_15363[(1)] = (1));

return statearr_15363;
});
var cljs$core$async$transduce_$_state_machine__13358__auto____1 = (function (state_15350){
while(true){
var ret_value__13359__auto__ = (function (){try{while(true){
var result__13360__auto__ = switch__13357__auto__(state_15350);
if(cljs.core.keyword_identical_QMARK_(result__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13360__auto__;
}
break;
}
}catch (e15366){var ex__13361__auto__ = e15366;
var statearr_15367_18254 = state_15350;
(statearr_15367_18254[(2)] = ex__13361__auto__);


if(cljs.core.seq((state_15350[(4)]))){
var statearr_15369_18255 = state_15350;
(statearr_15369_18255[(1)] = cljs.core.first((state_15350[(4)])));

} else {
throw ex__13361__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18256 = state_15350;
state_15350 = G__18256;
continue;
} else {
return ret_value__13359__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13358__auto__ = function(state_15350){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13358__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13358__auto____1.call(this,state_15350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13358__auto____0;
cljs$core$async$transduce_$_state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13358__auto____1;
return cljs$core$async$transduce_$_state_machine__13358__auto__;
})()
})();
var state__14204__auto__ = (function (){var statearr_15376 = f__14203__auto__();
(statearr_15376[(6)] = c__14202__auto__);

return statearr_15376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14204__auto__);
}));

return c__14202__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15394 = arguments.length;
switch (G__15394) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14202__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14203__auto__ = (function (){var switch__13357__auto__ = (function (state_15455){
var state_val_15456 = (state_15455[(1)]);
if((state_val_15456 === (7))){
var inst_15429 = (state_15455[(2)]);
var state_15455__$1 = state_15455;
var statearr_15469_18261 = state_15455__$1;
(statearr_15469_18261[(2)] = inst_15429);

(statearr_15469_18261[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (1))){
var inst_15417 = cljs.core.seq(coll);
var inst_15419 = inst_15417;
var state_15455__$1 = (function (){var statearr_15473 = state_15455;
(statearr_15473[(7)] = inst_15419);

return statearr_15473;
})();
var statearr_15474_18262 = state_15455__$1;
(statearr_15474_18262[(2)] = null);

(statearr_15474_18262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (4))){
var inst_15419 = (state_15455[(7)]);
var inst_15427 = cljs.core.first(inst_15419);
var state_15455__$1 = state_15455;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15455__$1,(7),ch,inst_15427);
} else {
if((state_val_15456 === (13))){
var inst_15444 = (state_15455[(2)]);
var state_15455__$1 = state_15455;
var statearr_15481_18263 = state_15455__$1;
(statearr_15481_18263[(2)] = inst_15444);

(statearr_15481_18263[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (6))){
var inst_15432 = (state_15455[(2)]);
var state_15455__$1 = state_15455;
if(cljs.core.truth_(inst_15432)){
var statearr_15486_18267 = state_15455__$1;
(statearr_15486_18267[(1)] = (8));

} else {
var statearr_15487_18271 = state_15455__$1;
(statearr_15487_18271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (3))){
var inst_15448 = (state_15455[(2)]);
var state_15455__$1 = state_15455;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15455__$1,inst_15448);
} else {
if((state_val_15456 === (12))){
var state_15455__$1 = state_15455;
var statearr_15491_18278 = state_15455__$1;
(statearr_15491_18278[(2)] = null);

(statearr_15491_18278[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (2))){
var inst_15419 = (state_15455[(7)]);
var state_15455__$1 = state_15455;
if(cljs.core.truth_(inst_15419)){
var statearr_15493_18285 = state_15455__$1;
(statearr_15493_18285[(1)] = (4));

} else {
var statearr_15497_18289 = state_15455__$1;
(statearr_15497_18289[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (11))){
var inst_15441 = cljs.core.async.close_BANG_(ch);
var state_15455__$1 = state_15455;
var statearr_15498_18293 = state_15455__$1;
(statearr_15498_18293[(2)] = inst_15441);

(statearr_15498_18293[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (9))){
var state_15455__$1 = state_15455;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15504_18303 = state_15455__$1;
(statearr_15504_18303[(1)] = (11));

} else {
var statearr_15506_18308 = state_15455__$1;
(statearr_15506_18308[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (5))){
var inst_15419 = (state_15455[(7)]);
var state_15455__$1 = state_15455;
var statearr_15517_18309 = state_15455__$1;
(statearr_15517_18309[(2)] = inst_15419);

(statearr_15517_18309[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (10))){
var inst_15446 = (state_15455[(2)]);
var state_15455__$1 = state_15455;
var statearr_15519_18310 = state_15455__$1;
(statearr_15519_18310[(2)] = inst_15446);

(statearr_15519_18310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15456 === (8))){
var inst_15419 = (state_15455[(7)]);
var inst_15435 = cljs.core.next(inst_15419);
var inst_15419__$1 = inst_15435;
var state_15455__$1 = (function (){var statearr_15522 = state_15455;
(statearr_15522[(7)] = inst_15419__$1);

return statearr_15522;
})();
var statearr_15524_18314 = state_15455__$1;
(statearr_15524_18314[(2)] = null);

(statearr_15524_18314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13358__auto__ = null;
var cljs$core$async$state_machine__13358__auto____0 = (function (){
var statearr_15528 = [null,null,null,null,null,null,null,null];
(statearr_15528[(0)] = cljs$core$async$state_machine__13358__auto__);

(statearr_15528[(1)] = (1));

return statearr_15528;
});
var cljs$core$async$state_machine__13358__auto____1 = (function (state_15455){
while(true){
var ret_value__13359__auto__ = (function (){try{while(true){
var result__13360__auto__ = switch__13357__auto__(state_15455);
if(cljs.core.keyword_identical_QMARK_(result__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13360__auto__;
}
break;
}
}catch (e15529){var ex__13361__auto__ = e15529;
var statearr_15532_18324 = state_15455;
(statearr_15532_18324[(2)] = ex__13361__auto__);


if(cljs.core.seq((state_15455[(4)]))){
var statearr_15534_18325 = state_15455;
(statearr_15534_18325[(1)] = cljs.core.first((state_15455[(4)])));

} else {
throw ex__13361__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18326 = state_15455;
state_15455 = G__18326;
continue;
} else {
return ret_value__13359__auto__;
}
break;
}
});
cljs$core$async$state_machine__13358__auto__ = function(state_15455){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13358__auto____1.call(this,state_15455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13358__auto____0;
cljs$core$async$state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13358__auto____1;
return cljs$core$async$state_machine__13358__auto__;
})()
})();
var state__14204__auto__ = (function (){var statearr_15539 = f__14203__auto__();
(statearr_15539[(6)] = c__14202__auto__);

return statearr_15539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14204__auto__);
}));

return c__14202__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15556 = arguments.length;
switch (G__15556) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18343 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18343(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18346 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18346(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18347 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18347(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18350 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18350(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15618 = (function (ch,cs,meta15619){
this.ch = ch;
this.cs = cs;
this.meta15619 = meta15619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15620,meta15619__$1){
var self__ = this;
var _15620__$1 = this;
return (new cljs.core.async.t_cljs$core$async15618(self__.ch,self__.cs,meta15619__$1));
}));

(cljs.core.async.t_cljs$core$async15618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15620){
var self__ = this;
var _15620__$1 = this;
return self__.meta15619;
}));

(cljs.core.async.t_cljs$core$async15618.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15618.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15618.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15618.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15618.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15618.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15618.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15619","meta15619",185375677,null)], null);
}));

(cljs.core.async.t_cljs$core$async15618.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15618");

(cljs.core.async.t_cljs$core$async15618.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15618");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15618.
 */
cljs.core.async.__GT_t_cljs$core$async15618 = (function cljs$core$async$__GT_t_cljs$core$async15618(ch,cs,meta15619){
return (new cljs.core.async.t_cljs$core$async15618(ch,cs,meta15619));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15618(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14202__auto___18355 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14203__auto__ = (function (){var switch__13357__auto__ = (function (state_15825){
var state_val_15830 = (state_15825[(1)]);
if((state_val_15830 === (7))){
var inst_15813 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
var statearr_15846_18356 = state_15825__$1;
(statearr_15846_18356[(2)] = inst_15813);

(statearr_15846_18356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (20))){
var inst_15693 = (state_15825[(7)]);
var inst_15707 = cljs.core.first(inst_15693);
var inst_15708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15707,(0),null);
var inst_15709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15707,(1),null);
var state_15825__$1 = (function (){var statearr_15854 = state_15825;
(statearr_15854[(8)] = inst_15708);

return statearr_15854;
})();
if(cljs.core.truth_(inst_15709)){
var statearr_15857_18357 = state_15825__$1;
(statearr_15857_18357[(1)] = (22));

} else {
var statearr_15863_18358 = state_15825__$1;
(statearr_15863_18358[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (27))){
var inst_15752 = (state_15825[(9)]);
var inst_15655 = (state_15825[(10)]);
var inst_15743 = (state_15825[(11)]);
var inst_15745 = (state_15825[(12)]);
var inst_15752__$1 = cljs.core._nth(inst_15743,inst_15745);
var inst_15755 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15752__$1,inst_15655,done);
var state_15825__$1 = (function (){var statearr_15876 = state_15825;
(statearr_15876[(9)] = inst_15752__$1);

return statearr_15876;
})();
if(cljs.core.truth_(inst_15755)){
var statearr_15882_18367 = state_15825__$1;
(statearr_15882_18367[(1)] = (30));

} else {
var statearr_15884_18368 = state_15825__$1;
(statearr_15884_18368[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (1))){
var state_15825__$1 = state_15825;
var statearr_15899_18370 = state_15825__$1;
(statearr_15899_18370[(2)] = null);

(statearr_15899_18370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (24))){
var inst_15693 = (state_15825[(7)]);
var inst_15715 = (state_15825[(2)]);
var inst_15717 = cljs.core.next(inst_15693);
var inst_15664 = inst_15717;
var inst_15665 = null;
var inst_15666 = (0);
var inst_15667 = (0);
var state_15825__$1 = (function (){var statearr_15915 = state_15825;
(statearr_15915[(13)] = inst_15715);

(statearr_15915[(14)] = inst_15664);

(statearr_15915[(15)] = inst_15667);

(statearr_15915[(16)] = inst_15665);

(statearr_15915[(17)] = inst_15666);

return statearr_15915;
})();
var statearr_15925_18376 = state_15825__$1;
(statearr_15925_18376[(2)] = null);

(statearr_15925_18376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (39))){
var state_15825__$1 = state_15825;
var statearr_15948_18377 = state_15825__$1;
(statearr_15948_18377[(2)] = null);

(statearr_15948_18377[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (4))){
var inst_15655 = (state_15825[(10)]);
var inst_15655__$1 = (state_15825[(2)]);
var inst_15656 = (inst_15655__$1 == null);
var state_15825__$1 = (function (){var statearr_15960 = state_15825;
(statearr_15960[(10)] = inst_15655__$1);

return statearr_15960;
})();
if(cljs.core.truth_(inst_15656)){
var statearr_15969_18381 = state_15825__$1;
(statearr_15969_18381[(1)] = (5));

} else {
var statearr_15972_18382 = state_15825__$1;
(statearr_15972_18382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (15))){
var inst_15664 = (state_15825[(14)]);
var inst_15667 = (state_15825[(15)]);
var inst_15665 = (state_15825[(16)]);
var inst_15666 = (state_15825[(17)]);
var inst_15687 = (state_15825[(2)]);
var inst_15689 = (inst_15667 + (1));
var tmp15935 = inst_15664;
var tmp15936 = inst_15665;
var tmp15937 = inst_15666;
var inst_15664__$1 = tmp15935;
var inst_15665__$1 = tmp15936;
var inst_15666__$1 = tmp15937;
var inst_15667__$1 = inst_15689;
var state_15825__$1 = (function (){var statearr_15995 = state_15825;
(statearr_15995[(14)] = inst_15664__$1);

(statearr_15995[(15)] = inst_15667__$1);

(statearr_15995[(16)] = inst_15665__$1);

(statearr_15995[(17)] = inst_15666__$1);

(statearr_15995[(18)] = inst_15687);

return statearr_15995;
})();
var statearr_15999_18395 = state_15825__$1;
(statearr_15999_18395[(2)] = null);

(statearr_15999_18395[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (21))){
var inst_15721 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
var statearr_16005_18397 = state_15825__$1;
(statearr_16005_18397[(2)] = inst_15721);

(statearr_16005_18397[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (31))){
var inst_15752 = (state_15825[(9)]);
var inst_15758 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15752);
var state_15825__$1 = state_15825;
var statearr_16013_18402 = state_15825__$1;
(statearr_16013_18402[(2)] = inst_15758);

(statearr_16013_18402[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (32))){
var inst_15742 = (state_15825[(19)]);
var inst_15743 = (state_15825[(11)]);
var inst_15744 = (state_15825[(20)]);
var inst_15745 = (state_15825[(12)]);
var inst_15760 = (state_15825[(2)]);
var inst_15763 = (inst_15745 + (1));
var tmp16000 = inst_15742;
var tmp16001 = inst_15743;
var tmp16002 = inst_15744;
var inst_15742__$1 = tmp16000;
var inst_15743__$1 = tmp16001;
var inst_15744__$1 = tmp16002;
var inst_15745__$1 = inst_15763;
var state_15825__$1 = (function (){var statearr_16026 = state_15825;
(statearr_16026[(19)] = inst_15742__$1);

(statearr_16026[(11)] = inst_15743__$1);

(statearr_16026[(20)] = inst_15744__$1);

(statearr_16026[(12)] = inst_15745__$1);

(statearr_16026[(21)] = inst_15760);

return statearr_16026;
})();
var statearr_16027_18407 = state_15825__$1;
(statearr_16027_18407[(2)] = null);

(statearr_16027_18407[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (40))){
var inst_15779 = (state_15825[(22)]);
var inst_15784 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15779);
var state_15825__$1 = state_15825;
var statearr_16029_18408 = state_15825__$1;
(statearr_16029_18408[(2)] = inst_15784);

(statearr_16029_18408[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (33))){
var inst_15768 = (state_15825[(23)]);
var inst_15772 = cljs.core.chunked_seq_QMARK_(inst_15768);
var state_15825__$1 = state_15825;
if(inst_15772){
var statearr_16040_18410 = state_15825__$1;
(statearr_16040_18410[(1)] = (36));

} else {
var statearr_16041_18412 = state_15825__$1;
(statearr_16041_18412[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (13))){
var inst_15678 = (state_15825[(24)]);
var inst_15684 = cljs.core.async.close_BANG_(inst_15678);
var state_15825__$1 = state_15825;
var statearr_16044_18416 = state_15825__$1;
(statearr_16044_18416[(2)] = inst_15684);

(statearr_16044_18416[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (22))){
var inst_15708 = (state_15825[(8)]);
var inst_15712 = cljs.core.async.close_BANG_(inst_15708);
var state_15825__$1 = state_15825;
var statearr_16052_18417 = state_15825__$1;
(statearr_16052_18417[(2)] = inst_15712);

(statearr_16052_18417[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (36))){
var inst_15768 = (state_15825[(23)]);
var inst_15774 = cljs.core.chunk_first(inst_15768);
var inst_15775 = cljs.core.chunk_rest(inst_15768);
var inst_15776 = cljs.core.count(inst_15774);
var inst_15742 = inst_15775;
var inst_15743 = inst_15774;
var inst_15744 = inst_15776;
var inst_15745 = (0);
var state_15825__$1 = (function (){var statearr_16060 = state_15825;
(statearr_16060[(19)] = inst_15742);

(statearr_16060[(11)] = inst_15743);

(statearr_16060[(20)] = inst_15744);

(statearr_16060[(12)] = inst_15745);

return statearr_16060;
})();
var statearr_16062_18430 = state_15825__$1;
(statearr_16062_18430[(2)] = null);

(statearr_16062_18430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (41))){
var inst_15768 = (state_15825[(23)]);
var inst_15786 = (state_15825[(2)]);
var inst_15787 = cljs.core.next(inst_15768);
var inst_15742 = inst_15787;
var inst_15743 = null;
var inst_15744 = (0);
var inst_15745 = (0);
var state_15825__$1 = (function (){var statearr_16072 = state_15825;
(statearr_16072[(19)] = inst_15742);

(statearr_16072[(11)] = inst_15743);

(statearr_16072[(25)] = inst_15786);

(statearr_16072[(20)] = inst_15744);

(statearr_16072[(12)] = inst_15745);

return statearr_16072;
})();
var statearr_16073_18432 = state_15825__$1;
(statearr_16073_18432[(2)] = null);

(statearr_16073_18432[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (43))){
var state_15825__$1 = state_15825;
var statearr_16077_18433 = state_15825__$1;
(statearr_16077_18433[(2)] = null);

(statearr_16077_18433[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (29))){
var inst_15795 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
var statearr_16081_18434 = state_15825__$1;
(statearr_16081_18434[(2)] = inst_15795);

(statearr_16081_18434[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (44))){
var inst_15805 = (state_15825[(2)]);
var state_15825__$1 = (function (){var statearr_16085 = state_15825;
(statearr_16085[(26)] = inst_15805);

return statearr_16085;
})();
var statearr_16086_18435 = state_15825__$1;
(statearr_16086_18435[(2)] = null);

(statearr_16086_18435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (6))){
var inst_15732 = (state_15825[(27)]);
var inst_15731 = cljs.core.deref(cs);
var inst_15732__$1 = cljs.core.keys(inst_15731);
var inst_15733 = cljs.core.count(inst_15732__$1);
var inst_15734 = cljs.core.reset_BANG_(dctr,inst_15733);
var inst_15739 = cljs.core.seq(inst_15732__$1);
var inst_15742 = inst_15739;
var inst_15743 = null;
var inst_15744 = (0);
var inst_15745 = (0);
var state_15825__$1 = (function (){var statearr_16097 = state_15825;
(statearr_16097[(19)] = inst_15742);

(statearr_16097[(11)] = inst_15743);

(statearr_16097[(28)] = inst_15734);

(statearr_16097[(27)] = inst_15732__$1);

(statearr_16097[(20)] = inst_15744);

(statearr_16097[(12)] = inst_15745);

return statearr_16097;
})();
var statearr_16098_18436 = state_15825__$1;
(statearr_16098_18436[(2)] = null);

(statearr_16098_18436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (28))){
var inst_15742 = (state_15825[(19)]);
var inst_15768 = (state_15825[(23)]);
var inst_15768__$1 = cljs.core.seq(inst_15742);
var state_15825__$1 = (function (){var statearr_16105 = state_15825;
(statearr_16105[(23)] = inst_15768__$1);

return statearr_16105;
})();
if(inst_15768__$1){
var statearr_16107_18437 = state_15825__$1;
(statearr_16107_18437[(1)] = (33));

} else {
var statearr_16113_18438 = state_15825__$1;
(statearr_16113_18438[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (25))){
var inst_15744 = (state_15825[(20)]);
var inst_15745 = (state_15825[(12)]);
var inst_15748 = (inst_15745 < inst_15744);
var inst_15750 = inst_15748;
var state_15825__$1 = state_15825;
if(cljs.core.truth_(inst_15750)){
var statearr_16116_18439 = state_15825__$1;
(statearr_16116_18439[(1)] = (27));

} else {
var statearr_16117_18440 = state_15825__$1;
(statearr_16117_18440[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (34))){
var state_15825__$1 = state_15825;
var statearr_16122_18441 = state_15825__$1;
(statearr_16122_18441[(2)] = null);

(statearr_16122_18441[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (17))){
var state_15825__$1 = state_15825;
var statearr_16125_18443 = state_15825__$1;
(statearr_16125_18443[(2)] = null);

(statearr_16125_18443[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (3))){
var inst_15815 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15825__$1,inst_15815);
} else {
if((state_val_15830 === (12))){
var inst_15726 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
var statearr_16130_18445 = state_15825__$1;
(statearr_16130_18445[(2)] = inst_15726);

(statearr_16130_18445[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (2))){
var state_15825__$1 = state_15825;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15825__$1,(4),ch);
} else {
if((state_val_15830 === (23))){
var state_15825__$1 = state_15825;
var statearr_16134_18446 = state_15825__$1;
(statearr_16134_18446[(2)] = null);

(statearr_16134_18446[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (35))){
var inst_15793 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
var statearr_16137_18447 = state_15825__$1;
(statearr_16137_18447[(2)] = inst_15793);

(statearr_16137_18447[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (19))){
var inst_15693 = (state_15825[(7)]);
var inst_15698 = cljs.core.chunk_first(inst_15693);
var inst_15699 = cljs.core.chunk_rest(inst_15693);
var inst_15701 = cljs.core.count(inst_15698);
var inst_15664 = inst_15699;
var inst_15665 = inst_15698;
var inst_15666 = inst_15701;
var inst_15667 = (0);
var state_15825__$1 = (function (){var statearr_16150 = state_15825;
(statearr_16150[(14)] = inst_15664);

(statearr_16150[(15)] = inst_15667);

(statearr_16150[(16)] = inst_15665);

(statearr_16150[(17)] = inst_15666);

return statearr_16150;
})();
var statearr_16151_18449 = state_15825__$1;
(statearr_16151_18449[(2)] = null);

(statearr_16151_18449[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (11))){
var inst_15664 = (state_15825[(14)]);
var inst_15693 = (state_15825[(7)]);
var inst_15693__$1 = cljs.core.seq(inst_15664);
var state_15825__$1 = (function (){var statearr_16156 = state_15825;
(statearr_16156[(7)] = inst_15693__$1);

return statearr_16156;
})();
if(inst_15693__$1){
var statearr_16157_18451 = state_15825__$1;
(statearr_16157_18451[(1)] = (16));

} else {
var statearr_16158_18455 = state_15825__$1;
(statearr_16158_18455[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (9))){
var inst_15728 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
var statearr_16165_18456 = state_15825__$1;
(statearr_16165_18456[(2)] = inst_15728);

(statearr_16165_18456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (5))){
var inst_15662 = cljs.core.deref(cs);
var inst_15663 = cljs.core.seq(inst_15662);
var inst_15664 = inst_15663;
var inst_15665 = null;
var inst_15666 = (0);
var inst_15667 = (0);
var state_15825__$1 = (function (){var statearr_16168 = state_15825;
(statearr_16168[(14)] = inst_15664);

(statearr_16168[(15)] = inst_15667);

(statearr_16168[(16)] = inst_15665);

(statearr_16168[(17)] = inst_15666);

return statearr_16168;
})();
var statearr_16172_18457 = state_15825__$1;
(statearr_16172_18457[(2)] = null);

(statearr_16172_18457[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (14))){
var state_15825__$1 = state_15825;
var statearr_16175_18459 = state_15825__$1;
(statearr_16175_18459[(2)] = null);

(statearr_16175_18459[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (45))){
var inst_15801 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
var statearr_16177_18460 = state_15825__$1;
(statearr_16177_18460[(2)] = inst_15801);

(statearr_16177_18460[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (26))){
var inst_15732 = (state_15825[(27)]);
var inst_15797 = (state_15825[(2)]);
var inst_15798 = cljs.core.seq(inst_15732);
var state_15825__$1 = (function (){var statearr_16180 = state_15825;
(statearr_16180[(29)] = inst_15797);

return statearr_16180;
})();
if(inst_15798){
var statearr_16183_18464 = state_15825__$1;
(statearr_16183_18464[(1)] = (42));

} else {
var statearr_16185_18465 = state_15825__$1;
(statearr_16185_18465[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (16))){
var inst_15693 = (state_15825[(7)]);
var inst_15695 = cljs.core.chunked_seq_QMARK_(inst_15693);
var state_15825__$1 = state_15825;
if(inst_15695){
var statearr_16187_18469 = state_15825__$1;
(statearr_16187_18469[(1)] = (19));

} else {
var statearr_16192_18470 = state_15825__$1;
(statearr_16192_18470[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (38))){
var inst_15790 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
var statearr_16197_18471 = state_15825__$1;
(statearr_16197_18471[(2)] = inst_15790);

(statearr_16197_18471[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (30))){
var state_15825__$1 = state_15825;
var statearr_16198_18475 = state_15825__$1;
(statearr_16198_18475[(2)] = null);

(statearr_16198_18475[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (10))){
var inst_15667 = (state_15825[(15)]);
var inst_15665 = (state_15825[(16)]);
var inst_15677 = cljs.core._nth(inst_15665,inst_15667);
var inst_15678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15677,(0),null);
var inst_15679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15677,(1),null);
var state_15825__$1 = (function (){var statearr_16211 = state_15825;
(statearr_16211[(24)] = inst_15678);

return statearr_16211;
})();
if(cljs.core.truth_(inst_15679)){
var statearr_16212_18484 = state_15825__$1;
(statearr_16212_18484[(1)] = (13));

} else {
var statearr_16220_18485 = state_15825__$1;
(statearr_16220_18485[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (18))){
var inst_15724 = (state_15825[(2)]);
var state_15825__$1 = state_15825;
var statearr_16222_18493 = state_15825__$1;
(statearr_16222_18493[(2)] = inst_15724);

(statearr_16222_18493[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (42))){
var state_15825__$1 = state_15825;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15825__$1,(45),dchan);
} else {
if((state_val_15830 === (37))){
var inst_15655 = (state_15825[(10)]);
var inst_15768 = (state_15825[(23)]);
var inst_15779 = (state_15825[(22)]);
var inst_15779__$1 = cljs.core.first(inst_15768);
var inst_15781 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15779__$1,inst_15655,done);
var state_15825__$1 = (function (){var statearr_16230 = state_15825;
(statearr_16230[(22)] = inst_15779__$1);

return statearr_16230;
})();
if(cljs.core.truth_(inst_15781)){
var statearr_16233_18498 = state_15825__$1;
(statearr_16233_18498[(1)] = (39));

} else {
var statearr_16234_18499 = state_15825__$1;
(statearr_16234_18499[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15830 === (8))){
var inst_15667 = (state_15825[(15)]);
var inst_15666 = (state_15825[(17)]);
var inst_15670 = (inst_15667 < inst_15666);
var inst_15671 = inst_15670;
var state_15825__$1 = state_15825;
if(cljs.core.truth_(inst_15671)){
var statearr_16235_18500 = state_15825__$1;
(statearr_16235_18500[(1)] = (10));

} else {
var statearr_16236_18501 = state_15825__$1;
(statearr_16236_18501[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13358__auto__ = null;
var cljs$core$async$mult_$_state_machine__13358__auto____0 = (function (){
var statearr_16241 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16241[(0)] = cljs$core$async$mult_$_state_machine__13358__auto__);

(statearr_16241[(1)] = (1));

return statearr_16241;
});
var cljs$core$async$mult_$_state_machine__13358__auto____1 = (function (state_15825){
while(true){
var ret_value__13359__auto__ = (function (){try{while(true){
var result__13360__auto__ = switch__13357__auto__(state_15825);
if(cljs.core.keyword_identical_QMARK_(result__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13360__auto__;
}
break;
}
}catch (e16247){var ex__13361__auto__ = e16247;
var statearr_16252_18504 = state_15825;
(statearr_16252_18504[(2)] = ex__13361__auto__);


if(cljs.core.seq((state_15825[(4)]))){
var statearr_16254_18505 = state_15825;
(statearr_16254_18505[(1)] = cljs.core.first((state_15825[(4)])));

} else {
throw ex__13361__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18507 = state_15825;
state_15825 = G__18507;
continue;
} else {
return ret_value__13359__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13358__auto__ = function(state_15825){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13358__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13358__auto____1.call(this,state_15825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13358__auto____0;
cljs$core$async$mult_$_state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13358__auto____1;
return cljs$core$async$mult_$_state_machine__13358__auto__;
})()
})();
var state__14204__auto__ = (function (){var statearr_16256 = f__14203__auto__();
(statearr_16256[(6)] = c__14202__auto___18355);

return statearr_16256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14204__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16259 = arguments.length;
switch (G__16259) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18528 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18528(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18535 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18535(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18541 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18541(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18547 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18547(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18553 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18553(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18557 = arguments.length;
var i__5727__auto___18558 = (0);
while(true){
if((i__5727__auto___18558 < len__5726__auto___18557)){
args__5732__auto__.push((arguments[i__5727__auto___18558]));

var G__18559 = (i__5727__auto___18558 + (1));
i__5727__auto___18558 = G__18559;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16302){
var map__16303 = p__16302;
var map__16303__$1 = cljs.core.__destructure_map(map__16303);
var opts = map__16303__$1;
var statearr_16304_18571 = state;
(statearr_16304_18571[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16306_18573 = state;
(statearr_16306_18573[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16307_18578 = state;
(statearr_16307_18578[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16291){
var G__16292 = cljs.core.first(seq16291);
var seq16291__$1 = cljs.core.next(seq16291);
var G__16293 = cljs.core.first(seq16291__$1);
var seq16291__$2 = cljs.core.next(seq16291__$1);
var G__16294 = cljs.core.first(seq16291__$2);
var seq16291__$3 = cljs.core.next(seq16291__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16292,G__16293,G__16294,seq16291__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16329 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16330){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16330 = meta16330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16331,meta16330__$1){
var self__ = this;
var _16331__$1 = this;
return (new cljs.core.async.t_cljs$core$async16329(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16330__$1));
}));

(cljs.core.async.t_cljs$core$async16329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16331){
var self__ = this;
var _16331__$1 = this;
return self__.meta16330;
}));

(cljs.core.async.t_cljs$core$async16329.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16329.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16329.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16329.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16329.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16329.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16329.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16329.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16330","meta16330",-1785199118,null)], null);
}));

(cljs.core.async.t_cljs$core$async16329.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16329");

(cljs.core.async.t_cljs$core$async16329.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16329");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16329.
 */
cljs.core.async.__GT_t_cljs$core$async16329 = (function cljs$core$async$__GT_t_cljs$core$async16329(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16330){
return (new cljs.core.async.t_cljs$core$async16329(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16330));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16329(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14202__auto___18656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14203__auto__ = (function (){var switch__13357__auto__ = (function (state_16432){
var state_val_16433 = (state_16432[(1)]);
if((state_val_16433 === (7))){
var inst_16385 = (state_16432[(2)]);
var state_16432__$1 = state_16432;
if(cljs.core.truth_(inst_16385)){
var statearr_16436_18661 = state_16432__$1;
(statearr_16436_18661[(1)] = (8));

} else {
var statearr_16438_18666 = state_16432__$1;
(statearr_16438_18666[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (20))){
var inst_16375 = (state_16432[(7)]);
var state_16432__$1 = state_16432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16432__$1,(23),out,inst_16375);
} else {
if((state_val_16433 === (1))){
var inst_16353 = calc_state();
var inst_16355 = cljs.core.__destructure_map(inst_16353);
var inst_16356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16355,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16355,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16355,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16359 = inst_16353;
var state_16432__$1 = (function (){var statearr_16444 = state_16432;
(statearr_16444[(8)] = inst_16359);

(statearr_16444[(9)] = inst_16357);

(statearr_16444[(10)] = inst_16358);

(statearr_16444[(11)] = inst_16356);

return statearr_16444;
})();
var statearr_16445_18695 = state_16432__$1;
(statearr_16445_18695[(2)] = null);

(statearr_16445_18695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (24))){
var inst_16362 = (state_16432[(12)]);
var inst_16359 = inst_16362;
var state_16432__$1 = (function (){var statearr_16447 = state_16432;
(statearr_16447[(8)] = inst_16359);

return statearr_16447;
})();
var statearr_16455_18701 = state_16432__$1;
(statearr_16455_18701[(2)] = null);

(statearr_16455_18701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (4))){
var inst_16375 = (state_16432[(7)]);
var inst_16378 = (state_16432[(13)]);
var inst_16374 = (state_16432[(2)]);
var inst_16375__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16374,(0),null);
var inst_16377 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16374,(1),null);
var inst_16378__$1 = (inst_16375__$1 == null);
var state_16432__$1 = (function (){var statearr_16462 = state_16432;
(statearr_16462[(14)] = inst_16377);

(statearr_16462[(7)] = inst_16375__$1);

(statearr_16462[(13)] = inst_16378__$1);

return statearr_16462;
})();
if(cljs.core.truth_(inst_16378__$1)){
var statearr_16466_18705 = state_16432__$1;
(statearr_16466_18705[(1)] = (5));

} else {
var statearr_16470_18706 = state_16432__$1;
(statearr_16470_18706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (15))){
var inst_16364 = (state_16432[(15)]);
var inst_16400 = (state_16432[(16)]);
var inst_16400__$1 = cljs.core.empty_QMARK_(inst_16364);
var state_16432__$1 = (function (){var statearr_16474 = state_16432;
(statearr_16474[(16)] = inst_16400__$1);

return statearr_16474;
})();
if(inst_16400__$1){
var statearr_16475_18722 = state_16432__$1;
(statearr_16475_18722[(1)] = (17));

} else {
var statearr_16476_18723 = state_16432__$1;
(statearr_16476_18723[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (21))){
var inst_16362 = (state_16432[(12)]);
var inst_16359 = inst_16362;
var state_16432__$1 = (function (){var statearr_16477 = state_16432;
(statearr_16477[(8)] = inst_16359);

return statearr_16477;
})();
var statearr_16478_18730 = state_16432__$1;
(statearr_16478_18730[(2)] = null);

(statearr_16478_18730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (13))){
var inst_16392 = (state_16432[(2)]);
var inst_16393 = calc_state();
var inst_16359 = inst_16393;
var state_16432__$1 = (function (){var statearr_16479 = state_16432;
(statearr_16479[(8)] = inst_16359);

(statearr_16479[(17)] = inst_16392);

return statearr_16479;
})();
var statearr_16480_18740 = state_16432__$1;
(statearr_16480_18740[(2)] = null);

(statearr_16480_18740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (22))){
var inst_16420 = (state_16432[(2)]);
var state_16432__$1 = state_16432;
var statearr_16489_18748 = state_16432__$1;
(statearr_16489_18748[(2)] = inst_16420);

(statearr_16489_18748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (6))){
var inst_16377 = (state_16432[(14)]);
var inst_16383 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16377,change);
var state_16432__$1 = state_16432;
var statearr_16494_18749 = state_16432__$1;
(statearr_16494_18749[(2)] = inst_16383);

(statearr_16494_18749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (25))){
var state_16432__$1 = state_16432;
var statearr_16495_18750 = state_16432__$1;
(statearr_16495_18750[(2)] = null);

(statearr_16495_18750[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (17))){
var inst_16377 = (state_16432[(14)]);
var inst_16366 = (state_16432[(18)]);
var inst_16402 = (inst_16366.cljs$core$IFn$_invoke$arity$1 ? inst_16366.cljs$core$IFn$_invoke$arity$1(inst_16377) : inst_16366.call(null,inst_16377));
var inst_16403 = cljs.core.not(inst_16402);
var state_16432__$1 = state_16432;
var statearr_16496_18752 = state_16432__$1;
(statearr_16496_18752[(2)] = inst_16403);

(statearr_16496_18752[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (3))){
var inst_16425 = (state_16432[(2)]);
var state_16432__$1 = state_16432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16432__$1,inst_16425);
} else {
if((state_val_16433 === (12))){
var state_16432__$1 = state_16432;
var statearr_16500_18760 = state_16432__$1;
(statearr_16500_18760[(2)] = null);

(statearr_16500_18760[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (2))){
var inst_16359 = (state_16432[(8)]);
var inst_16362 = (state_16432[(12)]);
var inst_16362__$1 = cljs.core.__destructure_map(inst_16359);
var inst_16364 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16362__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16366 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16362__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16368 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16362__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16432__$1 = (function (){var statearr_16504 = state_16432;
(statearr_16504[(18)] = inst_16366);

(statearr_16504[(12)] = inst_16362__$1);

(statearr_16504[(15)] = inst_16364);

return statearr_16504;
})();
return cljs.core.async.ioc_alts_BANG_(state_16432__$1,(4),inst_16368);
} else {
if((state_val_16433 === (23))){
var inst_16411 = (state_16432[(2)]);
var state_16432__$1 = state_16432;
if(cljs.core.truth_(inst_16411)){
var statearr_16505_18769 = state_16432__$1;
(statearr_16505_18769[(1)] = (24));

} else {
var statearr_16506_18770 = state_16432__$1;
(statearr_16506_18770[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (19))){
var inst_16406 = (state_16432[(2)]);
var state_16432__$1 = state_16432;
var statearr_16507_18776 = state_16432__$1;
(statearr_16507_18776[(2)] = inst_16406);

(statearr_16507_18776[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (11))){
var inst_16377 = (state_16432[(14)]);
var inst_16389 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16377);
var state_16432__$1 = state_16432;
var statearr_16508_18789 = state_16432__$1;
(statearr_16508_18789[(2)] = inst_16389);

(statearr_16508_18789[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (9))){
var inst_16377 = (state_16432[(14)]);
var inst_16396 = (state_16432[(19)]);
var inst_16364 = (state_16432[(15)]);
var inst_16396__$1 = (inst_16364.cljs$core$IFn$_invoke$arity$1 ? inst_16364.cljs$core$IFn$_invoke$arity$1(inst_16377) : inst_16364.call(null,inst_16377));
var state_16432__$1 = (function (){var statearr_16516 = state_16432;
(statearr_16516[(19)] = inst_16396__$1);

return statearr_16516;
})();
if(cljs.core.truth_(inst_16396__$1)){
var statearr_16517_18801 = state_16432__$1;
(statearr_16517_18801[(1)] = (14));

} else {
var statearr_16518_18803 = state_16432__$1;
(statearr_16518_18803[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (5))){
var inst_16378 = (state_16432[(13)]);
var state_16432__$1 = state_16432;
var statearr_16519_18804 = state_16432__$1;
(statearr_16519_18804[(2)] = inst_16378);

(statearr_16519_18804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (14))){
var inst_16396 = (state_16432[(19)]);
var state_16432__$1 = state_16432;
var statearr_16523_18810 = state_16432__$1;
(statearr_16523_18810[(2)] = inst_16396);

(statearr_16523_18810[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (26))){
var inst_16416 = (state_16432[(2)]);
var state_16432__$1 = state_16432;
var statearr_16525_18814 = state_16432__$1;
(statearr_16525_18814[(2)] = inst_16416);

(statearr_16525_18814[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (16))){
var inst_16408 = (state_16432[(2)]);
var state_16432__$1 = state_16432;
if(cljs.core.truth_(inst_16408)){
var statearr_16527_18821 = state_16432__$1;
(statearr_16527_18821[(1)] = (20));

} else {
var statearr_16528_18822 = state_16432__$1;
(statearr_16528_18822[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (10))){
var inst_16422 = (state_16432[(2)]);
var state_16432__$1 = state_16432;
var statearr_16529_18823 = state_16432__$1;
(statearr_16529_18823[(2)] = inst_16422);

(statearr_16529_18823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (18))){
var inst_16400 = (state_16432[(16)]);
var state_16432__$1 = state_16432;
var statearr_16532_18827 = state_16432__$1;
(statearr_16532_18827[(2)] = inst_16400);

(statearr_16532_18827[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16433 === (8))){
var inst_16375 = (state_16432[(7)]);
var inst_16387 = (inst_16375 == null);
var state_16432__$1 = state_16432;
if(cljs.core.truth_(inst_16387)){
var statearr_16533_18832 = state_16432__$1;
(statearr_16533_18832[(1)] = (11));

} else {
var statearr_16534_18833 = state_16432__$1;
(statearr_16534_18833[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13358__auto__ = null;
var cljs$core$async$mix_$_state_machine__13358__auto____0 = (function (){
var statearr_16541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16541[(0)] = cljs$core$async$mix_$_state_machine__13358__auto__);

(statearr_16541[(1)] = (1));

return statearr_16541;
});
var cljs$core$async$mix_$_state_machine__13358__auto____1 = (function (state_16432){
while(true){
var ret_value__13359__auto__ = (function (){try{while(true){
var result__13360__auto__ = switch__13357__auto__(state_16432);
if(cljs.core.keyword_identical_QMARK_(result__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13360__auto__;
}
break;
}
}catch (e16542){var ex__13361__auto__ = e16542;
var statearr_16543_18856 = state_16432;
(statearr_16543_18856[(2)] = ex__13361__auto__);


if(cljs.core.seq((state_16432[(4)]))){
var statearr_16546_18859 = state_16432;
(statearr_16546_18859[(1)] = cljs.core.first((state_16432[(4)])));

} else {
throw ex__13361__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18860 = state_16432;
state_16432 = G__18860;
continue;
} else {
return ret_value__13359__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13358__auto__ = function(state_16432){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13358__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13358__auto____1.call(this,state_16432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13358__auto____0;
cljs$core$async$mix_$_state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13358__auto____1;
return cljs$core$async$mix_$_state_machine__13358__auto__;
})()
})();
var state__14204__auto__ = (function (){var statearr_16549 = f__14203__auto__();
(statearr_16549[(6)] = c__14202__auto___18656);

return statearr_16549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14204__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18880 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18880(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18907 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18907(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18939 = (function() {
var G__18940 = null;
var G__18940__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18940__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18940 = function(p,v){
switch(arguments.length){
case 1:
return G__18940__1.call(this,p);
case 2:
return G__18940__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18940.cljs$core$IFn$_invoke$arity$1 = G__18940__1;
G__18940.cljs$core$IFn$_invoke$arity$2 = G__18940__2;
return G__18940;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16601 = arguments.length;
switch (G__16601) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18939(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18939(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16619 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16620){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16620 = meta16620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16621,meta16620__$1){
var self__ = this;
var _16621__$1 = this;
return (new cljs.core.async.t_cljs$core$async16619(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16620__$1));
}));

(cljs.core.async.t_cljs$core$async16619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16621){
var self__ = this;
var _16621__$1 = this;
return self__.meta16620;
}));

(cljs.core.async.t_cljs$core$async16619.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16619.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16619.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16619.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16619.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16619.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16619.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16619.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16620","meta16620",-1397000574,null)], null);
}));

(cljs.core.async.t_cljs$core$async16619.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16619.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16619");

(cljs.core.async.t_cljs$core$async16619.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16619");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16619.
 */
cljs.core.async.__GT_t_cljs$core$async16619 = (function cljs$core$async$__GT_t_cljs$core$async16619(ch,topic_fn,buf_fn,mults,ensure_mult,meta16620){
return (new cljs.core.async.t_cljs$core$async16619(ch,topic_fn,buf_fn,mults,ensure_mult,meta16620));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16612 = arguments.length;
switch (G__16612) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16605_SHARP_){
if(cljs.core.truth_((p1__16605_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16605_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16605_SHARP_.call(null,topic)))){
return p1__16605_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16605_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16619(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14202__auto___18988 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14203__auto__ = (function (){var switch__13357__auto__ = (function (state_16713){
var state_val_16714 = (state_16713[(1)]);
if((state_val_16714 === (7))){
var inst_16709 = (state_16713[(2)]);
var state_16713__$1 = state_16713;
var statearr_16719_18990 = state_16713__$1;
(statearr_16719_18990[(2)] = inst_16709);

(statearr_16719_18990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (20))){
var state_16713__$1 = state_16713;
var statearr_16720_18992 = state_16713__$1;
(statearr_16720_18992[(2)] = null);

(statearr_16720_18992[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (1))){
var state_16713__$1 = state_16713;
var statearr_16724_18993 = state_16713__$1;
(statearr_16724_18993[(2)] = null);

(statearr_16724_18993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (24))){
var inst_16691 = (state_16713[(7)]);
var inst_16701 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16691);
var state_16713__$1 = state_16713;
var statearr_16726_18994 = state_16713__$1;
(statearr_16726_18994[(2)] = inst_16701);

(statearr_16726_18994[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (4))){
var inst_16639 = (state_16713[(8)]);
var inst_16639__$1 = (state_16713[(2)]);
var inst_16640 = (inst_16639__$1 == null);
var state_16713__$1 = (function (){var statearr_16727 = state_16713;
(statearr_16727[(8)] = inst_16639__$1);

return statearr_16727;
})();
if(cljs.core.truth_(inst_16640)){
var statearr_16732_19001 = state_16713__$1;
(statearr_16732_19001[(1)] = (5));

} else {
var statearr_16734_19002 = state_16713__$1;
(statearr_16734_19002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (15))){
var inst_16685 = (state_16713[(2)]);
var state_16713__$1 = state_16713;
var statearr_16739_19003 = state_16713__$1;
(statearr_16739_19003[(2)] = inst_16685);

(statearr_16739_19003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (21))){
var inst_16706 = (state_16713[(2)]);
var state_16713__$1 = (function (){var statearr_16742 = state_16713;
(statearr_16742[(9)] = inst_16706);

return statearr_16742;
})();
var statearr_16743_19006 = state_16713__$1;
(statearr_16743_19006[(2)] = null);

(statearr_16743_19006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (13))){
var inst_16666 = (state_16713[(10)]);
var inst_16668 = cljs.core.chunked_seq_QMARK_(inst_16666);
var state_16713__$1 = state_16713;
if(inst_16668){
var statearr_16744_19007 = state_16713__$1;
(statearr_16744_19007[(1)] = (16));

} else {
var statearr_16745_19008 = state_16713__$1;
(statearr_16745_19008[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (22))){
var inst_16698 = (state_16713[(2)]);
var state_16713__$1 = state_16713;
if(cljs.core.truth_(inst_16698)){
var statearr_16747_19009 = state_16713__$1;
(statearr_16747_19009[(1)] = (23));

} else {
var statearr_16749_19010 = state_16713__$1;
(statearr_16749_19010[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (6))){
var inst_16693 = (state_16713[(11)]);
var inst_16691 = (state_16713[(7)]);
var inst_16639 = (state_16713[(8)]);
var inst_16691__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16639) : topic_fn.call(null,inst_16639));
var inst_16692 = cljs.core.deref(mults);
var inst_16693__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16692,inst_16691__$1);
var state_16713__$1 = (function (){var statearr_16752 = state_16713;
(statearr_16752[(11)] = inst_16693__$1);

(statearr_16752[(7)] = inst_16691__$1);

return statearr_16752;
})();
if(cljs.core.truth_(inst_16693__$1)){
var statearr_16753_19015 = state_16713__$1;
(statearr_16753_19015[(1)] = (19));

} else {
var statearr_16754_19016 = state_16713__$1;
(statearr_16754_19016[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (25))){
var inst_16703 = (state_16713[(2)]);
var state_16713__$1 = state_16713;
var statearr_16756_19018 = state_16713__$1;
(statearr_16756_19018[(2)] = inst_16703);

(statearr_16756_19018[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (17))){
var inst_16666 = (state_16713[(10)]);
var inst_16675 = cljs.core.first(inst_16666);
var inst_16677 = cljs.core.async.muxch_STAR_(inst_16675);
var inst_16678 = cljs.core.async.close_BANG_(inst_16677);
var inst_16679 = cljs.core.next(inst_16666);
var inst_16652 = inst_16679;
var inst_16653 = null;
var inst_16654 = (0);
var inst_16655 = (0);
var state_16713__$1 = (function (){var statearr_16758 = state_16713;
(statearr_16758[(12)] = inst_16653);

(statearr_16758[(13)] = inst_16654);

(statearr_16758[(14)] = inst_16652);

(statearr_16758[(15)] = inst_16678);

(statearr_16758[(16)] = inst_16655);

return statearr_16758;
})();
var statearr_16762_19022 = state_16713__$1;
(statearr_16762_19022[(2)] = null);

(statearr_16762_19022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (3))){
var inst_16711 = (state_16713[(2)]);
var state_16713__$1 = state_16713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16713__$1,inst_16711);
} else {
if((state_val_16714 === (12))){
var inst_16687 = (state_16713[(2)]);
var state_16713__$1 = state_16713;
var statearr_16763_19023 = state_16713__$1;
(statearr_16763_19023[(2)] = inst_16687);

(statearr_16763_19023[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (2))){
var state_16713__$1 = state_16713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16713__$1,(4),ch);
} else {
if((state_val_16714 === (23))){
var state_16713__$1 = state_16713;
var statearr_16765_19024 = state_16713__$1;
(statearr_16765_19024[(2)] = null);

(statearr_16765_19024[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (19))){
var inst_16693 = (state_16713[(11)]);
var inst_16639 = (state_16713[(8)]);
var inst_16696 = cljs.core.async.muxch_STAR_(inst_16693);
var state_16713__$1 = state_16713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16713__$1,(22),inst_16696,inst_16639);
} else {
if((state_val_16714 === (11))){
var inst_16666 = (state_16713[(10)]);
var inst_16652 = (state_16713[(14)]);
var inst_16666__$1 = cljs.core.seq(inst_16652);
var state_16713__$1 = (function (){var statearr_16768 = state_16713;
(statearr_16768[(10)] = inst_16666__$1);

return statearr_16768;
})();
if(inst_16666__$1){
var statearr_16769_19027 = state_16713__$1;
(statearr_16769_19027[(1)] = (13));

} else {
var statearr_16771_19032 = state_16713__$1;
(statearr_16771_19032[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (9))){
var inst_16689 = (state_16713[(2)]);
var state_16713__$1 = state_16713;
var statearr_16773_19033 = state_16713__$1;
(statearr_16773_19033[(2)] = inst_16689);

(statearr_16773_19033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (5))){
var inst_16649 = cljs.core.deref(mults);
var inst_16650 = cljs.core.vals(inst_16649);
var inst_16651 = cljs.core.seq(inst_16650);
var inst_16652 = inst_16651;
var inst_16653 = null;
var inst_16654 = (0);
var inst_16655 = (0);
var state_16713__$1 = (function (){var statearr_16777 = state_16713;
(statearr_16777[(12)] = inst_16653);

(statearr_16777[(13)] = inst_16654);

(statearr_16777[(14)] = inst_16652);

(statearr_16777[(16)] = inst_16655);

return statearr_16777;
})();
var statearr_16778_19034 = state_16713__$1;
(statearr_16778_19034[(2)] = null);

(statearr_16778_19034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (14))){
var state_16713__$1 = state_16713;
var statearr_16782_19035 = state_16713__$1;
(statearr_16782_19035[(2)] = null);

(statearr_16782_19035[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (16))){
var inst_16666 = (state_16713[(10)]);
var inst_16670 = cljs.core.chunk_first(inst_16666);
var inst_16671 = cljs.core.chunk_rest(inst_16666);
var inst_16672 = cljs.core.count(inst_16670);
var inst_16652 = inst_16671;
var inst_16653 = inst_16670;
var inst_16654 = inst_16672;
var inst_16655 = (0);
var state_16713__$1 = (function (){var statearr_16786 = state_16713;
(statearr_16786[(12)] = inst_16653);

(statearr_16786[(13)] = inst_16654);

(statearr_16786[(14)] = inst_16652);

(statearr_16786[(16)] = inst_16655);

return statearr_16786;
})();
var statearr_16787_19038 = state_16713__$1;
(statearr_16787_19038[(2)] = null);

(statearr_16787_19038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (10))){
var inst_16653 = (state_16713[(12)]);
var inst_16654 = (state_16713[(13)]);
var inst_16652 = (state_16713[(14)]);
var inst_16655 = (state_16713[(16)]);
var inst_16660 = cljs.core._nth(inst_16653,inst_16655);
var inst_16661 = cljs.core.async.muxch_STAR_(inst_16660);
var inst_16662 = cljs.core.async.close_BANG_(inst_16661);
var inst_16663 = (inst_16655 + (1));
var tmp16779 = inst_16653;
var tmp16780 = inst_16654;
var tmp16781 = inst_16652;
var inst_16652__$1 = tmp16781;
var inst_16653__$1 = tmp16779;
var inst_16654__$1 = tmp16780;
var inst_16655__$1 = inst_16663;
var state_16713__$1 = (function (){var statearr_16789 = state_16713;
(statearr_16789[(12)] = inst_16653__$1);

(statearr_16789[(13)] = inst_16654__$1);

(statearr_16789[(14)] = inst_16652__$1);

(statearr_16789[(17)] = inst_16662);

(statearr_16789[(16)] = inst_16655__$1);

return statearr_16789;
})();
var statearr_16790_19039 = state_16713__$1;
(statearr_16790_19039[(2)] = null);

(statearr_16790_19039[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (18))){
var inst_16682 = (state_16713[(2)]);
var state_16713__$1 = state_16713;
var statearr_16791_19040 = state_16713__$1;
(statearr_16791_19040[(2)] = inst_16682);

(statearr_16791_19040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16714 === (8))){
var inst_16654 = (state_16713[(13)]);
var inst_16655 = (state_16713[(16)]);
var inst_16657 = (inst_16655 < inst_16654);
var inst_16658 = inst_16657;
var state_16713__$1 = state_16713;
if(cljs.core.truth_(inst_16658)){
var statearr_16793_19045 = state_16713__$1;
(statearr_16793_19045[(1)] = (10));

} else {
var statearr_16794_19046 = state_16713__$1;
(statearr_16794_19046[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13358__auto__ = null;
var cljs$core$async$state_machine__13358__auto____0 = (function (){
var statearr_16800 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16800[(0)] = cljs$core$async$state_machine__13358__auto__);

(statearr_16800[(1)] = (1));

return statearr_16800;
});
var cljs$core$async$state_machine__13358__auto____1 = (function (state_16713){
while(true){
var ret_value__13359__auto__ = (function (){try{while(true){
var result__13360__auto__ = switch__13357__auto__(state_16713);
if(cljs.core.keyword_identical_QMARK_(result__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13360__auto__;
}
break;
}
}catch (e16801){var ex__13361__auto__ = e16801;
var statearr_16802_19055 = state_16713;
(statearr_16802_19055[(2)] = ex__13361__auto__);


if(cljs.core.seq((state_16713[(4)]))){
var statearr_16804_19056 = state_16713;
(statearr_16804_19056[(1)] = cljs.core.first((state_16713[(4)])));

} else {
throw ex__13361__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19058 = state_16713;
state_16713 = G__19058;
continue;
} else {
return ret_value__13359__auto__;
}
break;
}
});
cljs$core$async$state_machine__13358__auto__ = function(state_16713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13358__auto____1.call(this,state_16713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13358__auto____0;
cljs$core$async$state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13358__auto____1;
return cljs$core$async$state_machine__13358__auto__;
})()
})();
var state__14204__auto__ = (function (){var statearr_16808 = f__14203__auto__();
(statearr_16808[(6)] = c__14202__auto___18988);

return statearr_16808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14204__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16810 = arguments.length;
switch (G__16810) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16816 = arguments.length;
switch (G__16816) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16822 = arguments.length;
switch (G__16822) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14202__auto___19070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14203__auto__ = (function (){var switch__13357__auto__ = (function (state_16873){
var state_val_16874 = (state_16873[(1)]);
if((state_val_16874 === (7))){
var state_16873__$1 = state_16873;
var statearr_16875_19074 = state_16873__$1;
(statearr_16875_19074[(2)] = null);

(statearr_16875_19074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16874 === (1))){
var state_16873__$1 = state_16873;
var statearr_16876_19075 = state_16873__$1;
(statearr_16876_19075[(2)] = null);

(statearr_16876_19075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16874 === (4))){
var inst_16826 = (state_16873[(7)]);
var inst_16827 = (state_16873[(8)]);
var inst_16831 = (inst_16827 < inst_16826);
var state_16873__$1 = state_16873;
if(cljs.core.truth_(inst_16831)){
var statearr_16880_19076 = state_16873__$1;
(statearr_16880_19076[(1)] = (6));

} else {
var statearr_16881_19077 = state_16873__$1;
(statearr_16881_19077[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16874 === (15))){
var inst_16856 = (state_16873[(9)]);
var inst_16862 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16856);
var state_16873__$1 = state_16873;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16873__$1,(17),out,inst_16862);
} else {
if((state_val_16874 === (13))){
var inst_16856 = (state_16873[(9)]);
var inst_16856__$1 = (state_16873[(2)]);
var inst_16858 = cljs.core.some(cljs.core.nil_QMARK_,inst_16856__$1);
var state_16873__$1 = (function (){var statearr_16885 = state_16873;
(statearr_16885[(9)] = inst_16856__$1);

return statearr_16885;
})();
if(cljs.core.truth_(inst_16858)){
var statearr_16886_19086 = state_16873__$1;
(statearr_16886_19086[(1)] = (14));

} else {
var statearr_16887_19087 = state_16873__$1;
(statearr_16887_19087[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16874 === (6))){
var state_16873__$1 = state_16873;
var statearr_16888_19091 = state_16873__$1;
(statearr_16888_19091[(2)] = null);

(statearr_16888_19091[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16874 === (17))){
var inst_16864 = (state_16873[(2)]);
var state_16873__$1 = (function (){var statearr_16900 = state_16873;
(statearr_16900[(10)] = inst_16864);

return statearr_16900;
})();
var statearr_16901_19092 = state_16873__$1;
(statearr_16901_19092[(2)] = null);

(statearr_16901_19092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16874 === (3))){
var inst_16869 = (state_16873[(2)]);
var state_16873__$1 = state_16873;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16873__$1,inst_16869);
} else {
if((state_val_16874 === (12))){
var _ = (function (){var statearr_16903 = state_16873;
(statearr_16903[(4)] = cljs.core.rest((state_16873[(4)])));

return statearr_16903;
})();
var state_16873__$1 = state_16873;
var ex16899 = (state_16873__$1[(2)]);
var statearr_16905_19097 = state_16873__$1;
(statearr_16905_19097[(5)] = ex16899);


if((ex16899 instanceof Object)){
var statearr_16910_19098 = state_16873__$1;
(statearr_16910_19098[(1)] = (11));

(statearr_16910_19098[(5)] = null);

} else {
throw ex16899;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16874 === (2))){
var inst_16825 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16826 = cnt;
var inst_16827 = (0);
var state_16873__$1 = (function (){var statearr_16916 = state_16873;
(statearr_16916[(11)] = inst_16825);

(statearr_16916[(7)] = inst_16826);

(statearr_16916[(8)] = inst_16827);

return statearr_16916;
})();
var statearr_16917_19099 = state_16873__$1;
(statearr_16917_19099[(2)] = null);

(statearr_16917_19099[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16874 === (11))){
var inst_16834 = (state_16873[(2)]);
var inst_16835 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16873__$1 = (function (){var statearr_16918 = state_16873;
(statearr_16918[(12)] = inst_16834);

return statearr_16918;
})();
var statearr_16920_19100 = state_16873__$1;
(statearr_16920_19100[(2)] = inst_16835);

(statearr_16920_19100[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16874 === (9))){
var inst_16827 = (state_16873[(8)]);
var _ = (function (){var statearr_16921 = state_16873;
(statearr_16921[(4)] = cljs.core.cons((12),(state_16873[(4)])));

return statearr_16921;
})();
var inst_16841 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16827) : chs__$1.call(null,inst_16827));
var inst_16842 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16827) : done.call(null,inst_16827));
var inst_16843 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16841,inst_16842);
var ___$1 = (function (){var statearr_16922 = state_16873;
(statearr_16922[(4)] = cljs.core.rest((state_16873[(4)])));

return statearr_16922;
})();
var state_16873__$1 = state_16873;
var statearr_16923_19101 = state_16873__$1;
(statearr_16923_19101[(2)] = inst_16843);

(statearr_16923_19101[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16874 === (5))){
var inst_16853 = (state_16873[(2)]);
var state_16873__$1 = (function (){var statearr_16939 = state_16873;
(statearr_16939[(13)] = inst_16853);

return statearr_16939;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16873__$1,(13),dchan);
} else {
if((state_val_16874 === (14))){
var inst_16860 = cljs.core.async.close_BANG_(out);
var state_16873__$1 = state_16873;
var statearr_16949_19102 = state_16873__$1;
(statearr_16949_19102[(2)] = inst_16860);

(statearr_16949_19102[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16874 === (16))){
var inst_16867 = (state_16873[(2)]);
var state_16873__$1 = state_16873;
var statearr_16950_19103 = state_16873__$1;
(statearr_16950_19103[(2)] = inst_16867);

(statearr_16950_19103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16874 === (10))){
var inst_16827 = (state_16873[(8)]);
var inst_16846 = (state_16873[(2)]);
var inst_16847 = (inst_16827 + (1));
var inst_16827__$1 = inst_16847;
var state_16873__$1 = (function (){var statearr_16951 = state_16873;
(statearr_16951[(14)] = inst_16846);

(statearr_16951[(8)] = inst_16827__$1);

return statearr_16951;
})();
var statearr_16952_19108 = state_16873__$1;
(statearr_16952_19108[(2)] = null);

(statearr_16952_19108[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16874 === (8))){
var inst_16851 = (state_16873[(2)]);
var state_16873__$1 = state_16873;
var statearr_16959_19110 = state_16873__$1;
(statearr_16959_19110[(2)] = inst_16851);

(statearr_16959_19110[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13358__auto__ = null;
var cljs$core$async$state_machine__13358__auto____0 = (function (){
var statearr_16970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16970[(0)] = cljs$core$async$state_machine__13358__auto__);

(statearr_16970[(1)] = (1));

return statearr_16970;
});
var cljs$core$async$state_machine__13358__auto____1 = (function (state_16873){
while(true){
var ret_value__13359__auto__ = (function (){try{while(true){
var result__13360__auto__ = switch__13357__auto__(state_16873);
if(cljs.core.keyword_identical_QMARK_(result__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13360__auto__;
}
break;
}
}catch (e16979){var ex__13361__auto__ = e16979;
var statearr_16980_19114 = state_16873;
(statearr_16980_19114[(2)] = ex__13361__auto__);


if(cljs.core.seq((state_16873[(4)]))){
var statearr_16981_19115 = state_16873;
(statearr_16981_19115[(1)] = cljs.core.first((state_16873[(4)])));

} else {
throw ex__13361__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19120 = state_16873;
state_16873 = G__19120;
continue;
} else {
return ret_value__13359__auto__;
}
break;
}
});
cljs$core$async$state_machine__13358__auto__ = function(state_16873){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13358__auto____1.call(this,state_16873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13358__auto____0;
cljs$core$async$state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13358__auto____1;
return cljs$core$async$state_machine__13358__auto__;
})()
})();
var state__14204__auto__ = (function (){var statearr_16982 = f__14203__auto__();
(statearr_16982[(6)] = c__14202__auto___19070);

return statearr_16982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14204__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16991 = arguments.length;
switch (G__16991) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14202__auto___19125 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14203__auto__ = (function (){var switch__13357__auto__ = (function (state_17029){
var state_val_17030 = (state_17029[(1)]);
if((state_val_17030 === (7))){
var inst_17007 = (state_17029[(7)]);
var inst_17006 = (state_17029[(8)]);
var inst_17006__$1 = (state_17029[(2)]);
var inst_17007__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17006__$1,(0),null);
var inst_17008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17006__$1,(1),null);
var inst_17009 = (inst_17007__$1 == null);
var state_17029__$1 = (function (){var statearr_17038 = state_17029;
(statearr_17038[(7)] = inst_17007__$1);

(statearr_17038[(8)] = inst_17006__$1);

(statearr_17038[(9)] = inst_17008);

return statearr_17038;
})();
if(cljs.core.truth_(inst_17009)){
var statearr_17039_19126 = state_17029__$1;
(statearr_17039_19126[(1)] = (8));

} else {
var statearr_17040_19127 = state_17029__$1;
(statearr_17040_19127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (1))){
var inst_16993 = cljs.core.vec(chs);
var inst_16994 = inst_16993;
var state_17029__$1 = (function (){var statearr_17043 = state_17029;
(statearr_17043[(10)] = inst_16994);

return statearr_17043;
})();
var statearr_17044_19131 = state_17029__$1;
(statearr_17044_19131[(2)] = null);

(statearr_17044_19131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (4))){
var inst_16994 = (state_17029[(10)]);
var state_17029__$1 = state_17029;
return cljs.core.async.ioc_alts_BANG_(state_17029__$1,(7),inst_16994);
} else {
if((state_val_17030 === (6))){
var inst_17023 = (state_17029[(2)]);
var state_17029__$1 = state_17029;
var statearr_17045_19132 = state_17029__$1;
(statearr_17045_19132[(2)] = inst_17023);

(statearr_17045_19132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (3))){
var inst_17025 = (state_17029[(2)]);
var state_17029__$1 = state_17029;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17029__$1,inst_17025);
} else {
if((state_val_17030 === (2))){
var inst_16994 = (state_17029[(10)]);
var inst_16996 = cljs.core.count(inst_16994);
var inst_16997 = (inst_16996 > (0));
var state_17029__$1 = state_17029;
if(cljs.core.truth_(inst_16997)){
var statearr_17047_19142 = state_17029__$1;
(statearr_17047_19142[(1)] = (4));

} else {
var statearr_17048_19144 = state_17029__$1;
(statearr_17048_19144[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (11))){
var inst_16994 = (state_17029[(10)]);
var inst_17016 = (state_17029[(2)]);
var tmp17046 = inst_16994;
var inst_16994__$1 = tmp17046;
var state_17029__$1 = (function (){var statearr_17049 = state_17029;
(statearr_17049[(11)] = inst_17016);

(statearr_17049[(10)] = inst_16994__$1);

return statearr_17049;
})();
var statearr_17050_19145 = state_17029__$1;
(statearr_17050_19145[(2)] = null);

(statearr_17050_19145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (9))){
var inst_17007 = (state_17029[(7)]);
var state_17029__$1 = state_17029;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17029__$1,(11),out,inst_17007);
} else {
if((state_val_17030 === (5))){
var inst_17021 = cljs.core.async.close_BANG_(out);
var state_17029__$1 = state_17029;
var statearr_17052_19147 = state_17029__$1;
(statearr_17052_19147[(2)] = inst_17021);

(statearr_17052_19147[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (10))){
var inst_17019 = (state_17029[(2)]);
var state_17029__$1 = state_17029;
var statearr_17053_19148 = state_17029__$1;
(statearr_17053_19148[(2)] = inst_17019);

(statearr_17053_19148[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17030 === (8))){
var inst_17007 = (state_17029[(7)]);
var inst_17006 = (state_17029[(8)]);
var inst_17008 = (state_17029[(9)]);
var inst_16994 = (state_17029[(10)]);
var inst_17011 = (function (){var cs = inst_16994;
var vec__16999 = inst_17006;
var v = inst_17007;
var c = inst_17008;
return (function (p1__16988_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16988_SHARP_);
});
})();
var inst_17012 = cljs.core.filterv(inst_17011,inst_16994);
var inst_16994__$1 = inst_17012;
var state_17029__$1 = (function (){var statearr_17054 = state_17029;
(statearr_17054[(10)] = inst_16994__$1);

return statearr_17054;
})();
var statearr_17055_19155 = state_17029__$1;
(statearr_17055_19155[(2)] = null);

(statearr_17055_19155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13358__auto__ = null;
var cljs$core$async$state_machine__13358__auto____0 = (function (){
var statearr_17064 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17064[(0)] = cljs$core$async$state_machine__13358__auto__);

(statearr_17064[(1)] = (1));

return statearr_17064;
});
var cljs$core$async$state_machine__13358__auto____1 = (function (state_17029){
while(true){
var ret_value__13359__auto__ = (function (){try{while(true){
var result__13360__auto__ = switch__13357__auto__(state_17029);
if(cljs.core.keyword_identical_QMARK_(result__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13360__auto__;
}
break;
}
}catch (e17068){var ex__13361__auto__ = e17068;
var statearr_17069_19158 = state_17029;
(statearr_17069_19158[(2)] = ex__13361__auto__);


if(cljs.core.seq((state_17029[(4)]))){
var statearr_17070_19159 = state_17029;
(statearr_17070_19159[(1)] = cljs.core.first((state_17029[(4)])));

} else {
throw ex__13361__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19164 = state_17029;
state_17029 = G__19164;
continue;
} else {
return ret_value__13359__auto__;
}
break;
}
});
cljs$core$async$state_machine__13358__auto__ = function(state_17029){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13358__auto____1.call(this,state_17029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13358__auto____0;
cljs$core$async$state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13358__auto____1;
return cljs$core$async$state_machine__13358__auto__;
})()
})();
var state__14204__auto__ = (function (){var statearr_17074 = f__14203__auto__();
(statearr_17074[(6)] = c__14202__auto___19125);

return statearr_17074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14204__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17078 = arguments.length;
switch (G__17078) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14202__auto___19176 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14203__auto__ = (function (){var switch__13357__auto__ = (function (state_17114){
var state_val_17116 = (state_17114[(1)]);
if((state_val_17116 === (7))){
var inst_17087 = (state_17114[(7)]);
var inst_17087__$1 = (state_17114[(2)]);
var inst_17093 = (inst_17087__$1 == null);
var inst_17094 = cljs.core.not(inst_17093);
var state_17114__$1 = (function (){var statearr_17121 = state_17114;
(statearr_17121[(7)] = inst_17087__$1);

return statearr_17121;
})();
if(inst_17094){
var statearr_17122_19186 = state_17114__$1;
(statearr_17122_19186[(1)] = (8));

} else {
var statearr_17123_19190 = state_17114__$1;
(statearr_17123_19190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17116 === (1))){
var inst_17082 = (0);
var state_17114__$1 = (function (){var statearr_17124 = state_17114;
(statearr_17124[(8)] = inst_17082);

return statearr_17124;
})();
var statearr_17125_19192 = state_17114__$1;
(statearr_17125_19192[(2)] = null);

(statearr_17125_19192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17116 === (4))){
var state_17114__$1 = state_17114;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17114__$1,(7),ch);
} else {
if((state_val_17116 === (6))){
var inst_17108 = (state_17114[(2)]);
var state_17114__$1 = state_17114;
var statearr_17126_19193 = state_17114__$1;
(statearr_17126_19193[(2)] = inst_17108);

(statearr_17126_19193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17116 === (3))){
var inst_17110 = (state_17114[(2)]);
var inst_17111 = cljs.core.async.close_BANG_(out);
var state_17114__$1 = (function (){var statearr_17128 = state_17114;
(statearr_17128[(9)] = inst_17110);

return statearr_17128;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17114__$1,inst_17111);
} else {
if((state_val_17116 === (2))){
var inst_17082 = (state_17114[(8)]);
var inst_17084 = (inst_17082 < n);
var state_17114__$1 = state_17114;
if(cljs.core.truth_(inst_17084)){
var statearr_17129_19201 = state_17114__$1;
(statearr_17129_19201[(1)] = (4));

} else {
var statearr_17130_19202 = state_17114__$1;
(statearr_17130_19202[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17116 === (11))){
var inst_17082 = (state_17114[(8)]);
var inst_17098 = (state_17114[(2)]);
var inst_17099 = (inst_17082 + (1));
var inst_17082__$1 = inst_17099;
var state_17114__$1 = (function (){var statearr_17132 = state_17114;
(statearr_17132[(10)] = inst_17098);

(statearr_17132[(8)] = inst_17082__$1);

return statearr_17132;
})();
var statearr_17133_19203 = state_17114__$1;
(statearr_17133_19203[(2)] = null);

(statearr_17133_19203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17116 === (9))){
var state_17114__$1 = state_17114;
var statearr_17135_19205 = state_17114__$1;
(statearr_17135_19205[(2)] = null);

(statearr_17135_19205[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17116 === (5))){
var state_17114__$1 = state_17114;
var statearr_17136_19209 = state_17114__$1;
(statearr_17136_19209[(2)] = null);

(statearr_17136_19209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17116 === (10))){
var inst_17103 = (state_17114[(2)]);
var state_17114__$1 = state_17114;
var statearr_17137_19214 = state_17114__$1;
(statearr_17137_19214[(2)] = inst_17103);

(statearr_17137_19214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17116 === (8))){
var inst_17087 = (state_17114[(7)]);
var state_17114__$1 = state_17114;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17114__$1,(11),out,inst_17087);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13358__auto__ = null;
var cljs$core$async$state_machine__13358__auto____0 = (function (){
var statearr_17143 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17143[(0)] = cljs$core$async$state_machine__13358__auto__);

(statearr_17143[(1)] = (1));

return statearr_17143;
});
var cljs$core$async$state_machine__13358__auto____1 = (function (state_17114){
while(true){
var ret_value__13359__auto__ = (function (){try{while(true){
var result__13360__auto__ = switch__13357__auto__(state_17114);
if(cljs.core.keyword_identical_QMARK_(result__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13360__auto__;
}
break;
}
}catch (e17144){var ex__13361__auto__ = e17144;
var statearr_17145_19219 = state_17114;
(statearr_17145_19219[(2)] = ex__13361__auto__);


if(cljs.core.seq((state_17114[(4)]))){
var statearr_17147_19220 = state_17114;
(statearr_17147_19220[(1)] = cljs.core.first((state_17114[(4)])));

} else {
throw ex__13361__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19222 = state_17114;
state_17114 = G__19222;
continue;
} else {
return ret_value__13359__auto__;
}
break;
}
});
cljs$core$async$state_machine__13358__auto__ = function(state_17114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13358__auto____1.call(this,state_17114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13358__auto____0;
cljs$core$async$state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13358__auto____1;
return cljs$core$async$state_machine__13358__auto__;
})()
})();
var state__14204__auto__ = (function (){var statearr_17148 = f__14203__auto__();
(statearr_17148[(6)] = c__14202__auto___19176);

return statearr_17148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14204__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17160 = (function (f,ch,meta17152,_,fn1,meta17161){
this.f = f;
this.ch = ch;
this.meta17152 = meta17152;
this._ = _;
this.fn1 = fn1;
this.meta17161 = meta17161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17162,meta17161__$1){
var self__ = this;
var _17162__$1 = this;
return (new cljs.core.async.t_cljs$core$async17160(self__.f,self__.ch,self__.meta17152,self__._,self__.fn1,meta17161__$1));
}));

(cljs.core.async.t_cljs$core$async17160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17162){
var self__ = this;
var _17162__$1 = this;
return self__.meta17161;
}));

(cljs.core.async.t_cljs$core$async17160.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17160.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17160.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17160.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17150_SHARP_){
var G__17166 = (((p1__17150_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17150_SHARP_) : self__.f.call(null,p1__17150_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17166) : f1.call(null,G__17166));
});
}));

(cljs.core.async.t_cljs$core$async17160.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17152","meta17152",1412503215,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17151","cljs.core.async/t_cljs$core$async17151",576334019,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17161","meta17161",-752878163,null)], null);
}));

(cljs.core.async.t_cljs$core$async17160.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17160.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17160");

(cljs.core.async.t_cljs$core$async17160.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17160");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17160.
 */
cljs.core.async.__GT_t_cljs$core$async17160 = (function cljs$core$async$__GT_t_cljs$core$async17160(f,ch,meta17152,_,fn1,meta17161){
return (new cljs.core.async.t_cljs$core$async17160(f,ch,meta17152,_,fn1,meta17161));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17151 = (function (f,ch,meta17152){
this.f = f;
this.ch = ch;
this.meta17152 = meta17152;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17153,meta17152__$1){
var self__ = this;
var _17153__$1 = this;
return (new cljs.core.async.t_cljs$core$async17151(self__.f,self__.ch,meta17152__$1));
}));

(cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17153){
var self__ = this;
var _17153__$1 = this;
return self__.meta17152;
}));

(cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17160(self__.f,self__.ch,self__.meta17152,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17171 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17171) : self__.f.call(null,G__17171));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17151.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17151.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17152","meta17152",1412503215,null)], null);
}));

(cljs.core.async.t_cljs$core$async17151.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17151.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17151");

(cljs.core.async.t_cljs$core$async17151.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17151");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17151.
 */
cljs.core.async.__GT_t_cljs$core$async17151 = (function cljs$core$async$__GT_t_cljs$core$async17151(f,ch,meta17152){
return (new cljs.core.async.t_cljs$core$async17151(f,ch,meta17152));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17151(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17173 = (function (f,ch,meta17174){
this.f = f;
this.ch = ch;
this.meta17174 = meta17174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17175,meta17174__$1){
var self__ = this;
var _17175__$1 = this;
return (new cljs.core.async.t_cljs$core$async17173(self__.f,self__.ch,meta17174__$1));
}));

(cljs.core.async.t_cljs$core$async17173.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17175){
var self__ = this;
var _17175__$1 = this;
return self__.meta17174;
}));

(cljs.core.async.t_cljs$core$async17173.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17173.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17173.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17173.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17173.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17173.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17173.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17174","meta17174",-1156571469,null)], null);
}));

(cljs.core.async.t_cljs$core$async17173.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17173");

(cljs.core.async.t_cljs$core$async17173.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17173");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17173.
 */
cljs.core.async.__GT_t_cljs$core$async17173 = (function cljs$core$async$__GT_t_cljs$core$async17173(f,ch,meta17174){
return (new cljs.core.async.t_cljs$core$async17173(f,ch,meta17174));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17173(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17181 = (function (p,ch,meta17182){
this.p = p;
this.ch = ch;
this.meta17182 = meta17182;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17183,meta17182__$1){
var self__ = this;
var _17183__$1 = this;
return (new cljs.core.async.t_cljs$core$async17181(self__.p,self__.ch,meta17182__$1));
}));

(cljs.core.async.t_cljs$core$async17181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17183){
var self__ = this;
var _17183__$1 = this;
return self__.meta17182;
}));

(cljs.core.async.t_cljs$core$async17181.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17181.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17181.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17181.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17181.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17181.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17181.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17181.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17182","meta17182",753566289,null)], null);
}));

(cljs.core.async.t_cljs$core$async17181.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17181.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17181");

(cljs.core.async.t_cljs$core$async17181.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17181");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17181.
 */
cljs.core.async.__GT_t_cljs$core$async17181 = (function cljs$core$async$__GT_t_cljs$core$async17181(p,ch,meta17182){
return (new cljs.core.async.t_cljs$core$async17181(p,ch,meta17182));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17181(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17213 = arguments.length;
switch (G__17213) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14202__auto___19252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14203__auto__ = (function (){var switch__13357__auto__ = (function (state_17244){
var state_val_17245 = (state_17244[(1)]);
if((state_val_17245 === (7))){
var inst_17240 = (state_17244[(2)]);
var state_17244__$1 = state_17244;
var statearr_17256_19254 = state_17244__$1;
(statearr_17256_19254[(2)] = inst_17240);

(statearr_17256_19254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17245 === (1))){
var state_17244__$1 = state_17244;
var statearr_17257_19256 = state_17244__$1;
(statearr_17257_19256[(2)] = null);

(statearr_17257_19256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17245 === (4))){
var inst_17223 = (state_17244[(7)]);
var inst_17223__$1 = (state_17244[(2)]);
var inst_17224 = (inst_17223__$1 == null);
var state_17244__$1 = (function (){var statearr_17263 = state_17244;
(statearr_17263[(7)] = inst_17223__$1);

return statearr_17263;
})();
if(cljs.core.truth_(inst_17224)){
var statearr_17264_19258 = state_17244__$1;
(statearr_17264_19258[(1)] = (5));

} else {
var statearr_17265_19260 = state_17244__$1;
(statearr_17265_19260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17245 === (6))){
var inst_17223 = (state_17244[(7)]);
var inst_17231 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17223) : p.call(null,inst_17223));
var state_17244__$1 = state_17244;
if(cljs.core.truth_(inst_17231)){
var statearr_17266_19262 = state_17244__$1;
(statearr_17266_19262[(1)] = (8));

} else {
var statearr_17267_19264 = state_17244__$1;
(statearr_17267_19264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17245 === (3))){
var inst_17242 = (state_17244[(2)]);
var state_17244__$1 = state_17244;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17244__$1,inst_17242);
} else {
if((state_val_17245 === (2))){
var state_17244__$1 = state_17244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17244__$1,(4),ch);
} else {
if((state_val_17245 === (11))){
var inst_17234 = (state_17244[(2)]);
var state_17244__$1 = state_17244;
var statearr_17268_19270 = state_17244__$1;
(statearr_17268_19270[(2)] = inst_17234);

(statearr_17268_19270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17245 === (9))){
var state_17244__$1 = state_17244;
var statearr_17271_19274 = state_17244__$1;
(statearr_17271_19274[(2)] = null);

(statearr_17271_19274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17245 === (5))){
var inst_17229 = cljs.core.async.close_BANG_(out);
var state_17244__$1 = state_17244;
var statearr_17272_19275 = state_17244__$1;
(statearr_17272_19275[(2)] = inst_17229);

(statearr_17272_19275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17245 === (10))){
var inst_17237 = (state_17244[(2)]);
var state_17244__$1 = (function (){var statearr_17273 = state_17244;
(statearr_17273[(8)] = inst_17237);

return statearr_17273;
})();
var statearr_17274_19276 = state_17244__$1;
(statearr_17274_19276[(2)] = null);

(statearr_17274_19276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17245 === (8))){
var inst_17223 = (state_17244[(7)]);
var state_17244__$1 = state_17244;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17244__$1,(11),out,inst_17223);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13358__auto__ = null;
var cljs$core$async$state_machine__13358__auto____0 = (function (){
var statearr_17275 = [null,null,null,null,null,null,null,null,null];
(statearr_17275[(0)] = cljs$core$async$state_machine__13358__auto__);

(statearr_17275[(1)] = (1));

return statearr_17275;
});
var cljs$core$async$state_machine__13358__auto____1 = (function (state_17244){
while(true){
var ret_value__13359__auto__ = (function (){try{while(true){
var result__13360__auto__ = switch__13357__auto__(state_17244);
if(cljs.core.keyword_identical_QMARK_(result__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13360__auto__;
}
break;
}
}catch (e17276){var ex__13361__auto__ = e17276;
var statearr_17277_19279 = state_17244;
(statearr_17277_19279[(2)] = ex__13361__auto__);


if(cljs.core.seq((state_17244[(4)]))){
var statearr_17278_19280 = state_17244;
(statearr_17278_19280[(1)] = cljs.core.first((state_17244[(4)])));

} else {
throw ex__13361__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19283 = state_17244;
state_17244 = G__19283;
continue;
} else {
return ret_value__13359__auto__;
}
break;
}
});
cljs$core$async$state_machine__13358__auto__ = function(state_17244){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13358__auto____1.call(this,state_17244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13358__auto____0;
cljs$core$async$state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13358__auto____1;
return cljs$core$async$state_machine__13358__auto__;
})()
})();
var state__14204__auto__ = (function (){var statearr_17282 = f__14203__auto__();
(statearr_17282[(6)] = c__14202__auto___19252);

return statearr_17282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14204__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17285 = arguments.length;
switch (G__17285) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14202__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14203__auto__ = (function (){var switch__13357__auto__ = (function (state_17350){
var state_val_17351 = (state_17350[(1)]);
if((state_val_17351 === (7))){
var inst_17345 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
var statearr_17359_19289 = state_17350__$1;
(statearr_17359_19289[(2)] = inst_17345);

(statearr_17359_19289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (20))){
var inst_17313 = (state_17350[(7)]);
var inst_17326 = (state_17350[(2)]);
var inst_17327 = cljs.core.next(inst_17313);
var inst_17299 = inst_17327;
var inst_17300 = null;
var inst_17301 = (0);
var inst_17302 = (0);
var state_17350__$1 = (function (){var statearr_17371 = state_17350;
(statearr_17371[(8)] = inst_17300);

(statearr_17371[(9)] = inst_17302);

(statearr_17371[(10)] = inst_17326);

(statearr_17371[(11)] = inst_17301);

(statearr_17371[(12)] = inst_17299);

return statearr_17371;
})();
var statearr_17372_19291 = state_17350__$1;
(statearr_17372_19291[(2)] = null);

(statearr_17372_19291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (1))){
var state_17350__$1 = state_17350;
var statearr_17375_19292 = state_17350__$1;
(statearr_17375_19292[(2)] = null);

(statearr_17375_19292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (4))){
var inst_17288 = (state_17350[(13)]);
var inst_17288__$1 = (state_17350[(2)]);
var inst_17289 = (inst_17288__$1 == null);
var state_17350__$1 = (function (){var statearr_17376 = state_17350;
(statearr_17376[(13)] = inst_17288__$1);

return statearr_17376;
})();
if(cljs.core.truth_(inst_17289)){
var statearr_17378_19295 = state_17350__$1;
(statearr_17378_19295[(1)] = (5));

} else {
var statearr_17380_19296 = state_17350__$1;
(statearr_17380_19296[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (15))){
var state_17350__$1 = state_17350;
var statearr_17385_19299 = state_17350__$1;
(statearr_17385_19299[(2)] = null);

(statearr_17385_19299[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (21))){
var state_17350__$1 = state_17350;
var statearr_17388_19300 = state_17350__$1;
(statearr_17388_19300[(2)] = null);

(statearr_17388_19300[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (13))){
var inst_17300 = (state_17350[(8)]);
var inst_17302 = (state_17350[(9)]);
var inst_17301 = (state_17350[(11)]);
var inst_17299 = (state_17350[(12)]);
var inst_17309 = (state_17350[(2)]);
var inst_17310 = (inst_17302 + (1));
var tmp17382 = inst_17300;
var tmp17383 = inst_17301;
var tmp17384 = inst_17299;
var inst_17299__$1 = tmp17384;
var inst_17300__$1 = tmp17382;
var inst_17301__$1 = tmp17383;
var inst_17302__$1 = inst_17310;
var state_17350__$1 = (function (){var statearr_17389 = state_17350;
(statearr_17389[(8)] = inst_17300__$1);

(statearr_17389[(9)] = inst_17302__$1);

(statearr_17389[(14)] = inst_17309);

(statearr_17389[(11)] = inst_17301__$1);

(statearr_17389[(12)] = inst_17299__$1);

return statearr_17389;
})();
var statearr_17390_19305 = state_17350__$1;
(statearr_17390_19305[(2)] = null);

(statearr_17390_19305[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (22))){
var state_17350__$1 = state_17350;
var statearr_17391_19307 = state_17350__$1;
(statearr_17391_19307[(2)] = null);

(statearr_17391_19307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (6))){
var inst_17288 = (state_17350[(13)]);
var inst_17297 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17288) : f.call(null,inst_17288));
var inst_17298 = cljs.core.seq(inst_17297);
var inst_17299 = inst_17298;
var inst_17300 = null;
var inst_17301 = (0);
var inst_17302 = (0);
var state_17350__$1 = (function (){var statearr_17392 = state_17350;
(statearr_17392[(8)] = inst_17300);

(statearr_17392[(9)] = inst_17302);

(statearr_17392[(11)] = inst_17301);

(statearr_17392[(12)] = inst_17299);

return statearr_17392;
})();
var statearr_17393_19314 = state_17350__$1;
(statearr_17393_19314[(2)] = null);

(statearr_17393_19314[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (17))){
var inst_17313 = (state_17350[(7)]);
var inst_17318 = cljs.core.chunk_first(inst_17313);
var inst_17320 = cljs.core.chunk_rest(inst_17313);
var inst_17321 = cljs.core.count(inst_17318);
var inst_17299 = inst_17320;
var inst_17300 = inst_17318;
var inst_17301 = inst_17321;
var inst_17302 = (0);
var state_17350__$1 = (function (){var statearr_17397 = state_17350;
(statearr_17397[(8)] = inst_17300);

(statearr_17397[(9)] = inst_17302);

(statearr_17397[(11)] = inst_17301);

(statearr_17397[(12)] = inst_17299);

return statearr_17397;
})();
var statearr_17398_19318 = state_17350__$1;
(statearr_17398_19318[(2)] = null);

(statearr_17398_19318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (3))){
var inst_17347 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17350__$1,inst_17347);
} else {
if((state_val_17351 === (12))){
var inst_17335 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
var statearr_17400_19322 = state_17350__$1;
(statearr_17400_19322[(2)] = inst_17335);

(statearr_17400_19322[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (2))){
var state_17350__$1 = state_17350;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17350__$1,(4),in$);
} else {
if((state_val_17351 === (23))){
var inst_17343 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
var statearr_17401_19325 = state_17350__$1;
(statearr_17401_19325[(2)] = inst_17343);

(statearr_17401_19325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (19))){
var inst_17330 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
var statearr_17402_19327 = state_17350__$1;
(statearr_17402_19327[(2)] = inst_17330);

(statearr_17402_19327[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (11))){
var inst_17299 = (state_17350[(12)]);
var inst_17313 = (state_17350[(7)]);
var inst_17313__$1 = cljs.core.seq(inst_17299);
var state_17350__$1 = (function (){var statearr_17406 = state_17350;
(statearr_17406[(7)] = inst_17313__$1);

return statearr_17406;
})();
if(inst_17313__$1){
var statearr_17410_19332 = state_17350__$1;
(statearr_17410_19332[(1)] = (14));

} else {
var statearr_17412_19333 = state_17350__$1;
(statearr_17412_19333[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (9))){
var inst_17337 = (state_17350[(2)]);
var inst_17338 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17350__$1 = (function (){var statearr_17418 = state_17350;
(statearr_17418[(15)] = inst_17337);

return statearr_17418;
})();
if(cljs.core.truth_(inst_17338)){
var statearr_17419_19334 = state_17350__$1;
(statearr_17419_19334[(1)] = (21));

} else {
var statearr_17420_19335 = state_17350__$1;
(statearr_17420_19335[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (5))){
var inst_17291 = cljs.core.async.close_BANG_(out);
var state_17350__$1 = state_17350;
var statearr_17423_19336 = state_17350__$1;
(statearr_17423_19336[(2)] = inst_17291);

(statearr_17423_19336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (14))){
var inst_17313 = (state_17350[(7)]);
var inst_17315 = cljs.core.chunked_seq_QMARK_(inst_17313);
var state_17350__$1 = state_17350;
if(inst_17315){
var statearr_17424_19340 = state_17350__$1;
(statearr_17424_19340[(1)] = (17));

} else {
var statearr_17425_19343 = state_17350__$1;
(statearr_17425_19343[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (16))){
var inst_17333 = (state_17350[(2)]);
var state_17350__$1 = state_17350;
var statearr_17430_19344 = state_17350__$1;
(statearr_17430_19344[(2)] = inst_17333);

(statearr_17430_19344[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17351 === (10))){
var inst_17300 = (state_17350[(8)]);
var inst_17302 = (state_17350[(9)]);
var inst_17307 = cljs.core._nth(inst_17300,inst_17302);
var state_17350__$1 = state_17350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17350__$1,(13),out,inst_17307);
} else {
if((state_val_17351 === (18))){
var inst_17313 = (state_17350[(7)]);
var inst_17324 = cljs.core.first(inst_17313);
var state_17350__$1 = state_17350;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17350__$1,(20),out,inst_17324);
} else {
if((state_val_17351 === (8))){
var inst_17302 = (state_17350[(9)]);
var inst_17301 = (state_17350[(11)]);
var inst_17304 = (inst_17302 < inst_17301);
var inst_17305 = inst_17304;
var state_17350__$1 = state_17350;
if(cljs.core.truth_(inst_17305)){
var statearr_17431_19346 = state_17350__$1;
(statearr_17431_19346[(1)] = (10));

} else {
var statearr_17432_19348 = state_17350__$1;
(statearr_17432_19348[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13358__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13358__auto____0 = (function (){
var statearr_17436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17436[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13358__auto__);

(statearr_17436[(1)] = (1));

return statearr_17436;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13358__auto____1 = (function (state_17350){
while(true){
var ret_value__13359__auto__ = (function (){try{while(true){
var result__13360__auto__ = switch__13357__auto__(state_17350);
if(cljs.core.keyword_identical_QMARK_(result__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13360__auto__;
}
break;
}
}catch (e17449){var ex__13361__auto__ = e17449;
var statearr_17450_19352 = state_17350;
(statearr_17450_19352[(2)] = ex__13361__auto__);


if(cljs.core.seq((state_17350[(4)]))){
var statearr_17451_19353 = state_17350;
(statearr_17451_19353[(1)] = cljs.core.first((state_17350[(4)])));

} else {
throw ex__13361__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19354 = state_17350;
state_17350 = G__19354;
continue;
} else {
return ret_value__13359__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13358__auto__ = function(state_17350){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13358__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13358__auto____1.call(this,state_17350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13358__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13358__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13358__auto__;
})()
})();
var state__14204__auto__ = (function (){var statearr_17452 = f__14203__auto__();
(statearr_17452[(6)] = c__14202__auto__);

return statearr_17452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14204__auto__);
}));

return c__14202__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17455 = arguments.length;
switch (G__17455) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17469 = arguments.length;
switch (G__17469) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17479 = arguments.length;
switch (G__17479) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14202__auto___19423 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14203__auto__ = (function (){var switch__13357__auto__ = (function (state_17509){
var state_val_17510 = (state_17509[(1)]);
if((state_val_17510 === (7))){
var inst_17504 = (state_17509[(2)]);
var state_17509__$1 = state_17509;
var statearr_17514_19429 = state_17509__$1;
(statearr_17514_19429[(2)] = inst_17504);

(statearr_17514_19429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17510 === (1))){
var inst_17485 = null;
var state_17509__$1 = (function (){var statearr_17517 = state_17509;
(statearr_17517[(7)] = inst_17485);

return statearr_17517;
})();
var statearr_17518_19434 = state_17509__$1;
(statearr_17518_19434[(2)] = null);

(statearr_17518_19434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17510 === (4))){
var inst_17489 = (state_17509[(8)]);
var inst_17489__$1 = (state_17509[(2)]);
var inst_17490 = (inst_17489__$1 == null);
var inst_17491 = cljs.core.not(inst_17490);
var state_17509__$1 = (function (){var statearr_17520 = state_17509;
(statearr_17520[(8)] = inst_17489__$1);

return statearr_17520;
})();
if(inst_17491){
var statearr_17521_19438 = state_17509__$1;
(statearr_17521_19438[(1)] = (5));

} else {
var statearr_17522_19439 = state_17509__$1;
(statearr_17522_19439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17510 === (6))){
var state_17509__$1 = state_17509;
var statearr_17530_19442 = state_17509__$1;
(statearr_17530_19442[(2)] = null);

(statearr_17530_19442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17510 === (3))){
var inst_17506 = (state_17509[(2)]);
var inst_17507 = cljs.core.async.close_BANG_(out);
var state_17509__$1 = (function (){var statearr_17531 = state_17509;
(statearr_17531[(9)] = inst_17506);

return statearr_17531;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17509__$1,inst_17507);
} else {
if((state_val_17510 === (2))){
var state_17509__$1 = state_17509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17509__$1,(4),ch);
} else {
if((state_val_17510 === (11))){
var inst_17489 = (state_17509[(8)]);
var inst_17498 = (state_17509[(2)]);
var inst_17485 = inst_17489;
var state_17509__$1 = (function (){var statearr_17533 = state_17509;
(statearr_17533[(10)] = inst_17498);

(statearr_17533[(7)] = inst_17485);

return statearr_17533;
})();
var statearr_17538_19449 = state_17509__$1;
(statearr_17538_19449[(2)] = null);

(statearr_17538_19449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17510 === (9))){
var inst_17489 = (state_17509[(8)]);
var state_17509__$1 = state_17509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17509__$1,(11),out,inst_17489);
} else {
if((state_val_17510 === (5))){
var inst_17489 = (state_17509[(8)]);
var inst_17485 = (state_17509[(7)]);
var inst_17493 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17489,inst_17485);
var state_17509__$1 = state_17509;
if(inst_17493){
var statearr_17557_19450 = state_17509__$1;
(statearr_17557_19450[(1)] = (8));

} else {
var statearr_17558_19451 = state_17509__$1;
(statearr_17558_19451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17510 === (10))){
var inst_17501 = (state_17509[(2)]);
var state_17509__$1 = state_17509;
var statearr_17561_19452 = state_17509__$1;
(statearr_17561_19452[(2)] = inst_17501);

(statearr_17561_19452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17510 === (8))){
var inst_17485 = (state_17509[(7)]);
var tmp17549 = inst_17485;
var inst_17485__$1 = tmp17549;
var state_17509__$1 = (function (){var statearr_17562 = state_17509;
(statearr_17562[(7)] = inst_17485__$1);

return statearr_17562;
})();
var statearr_17565_19453 = state_17509__$1;
(statearr_17565_19453[(2)] = null);

(statearr_17565_19453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13358__auto__ = null;
var cljs$core$async$state_machine__13358__auto____0 = (function (){
var statearr_17570 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17570[(0)] = cljs$core$async$state_machine__13358__auto__);

(statearr_17570[(1)] = (1));

return statearr_17570;
});
var cljs$core$async$state_machine__13358__auto____1 = (function (state_17509){
while(true){
var ret_value__13359__auto__ = (function (){try{while(true){
var result__13360__auto__ = switch__13357__auto__(state_17509);
if(cljs.core.keyword_identical_QMARK_(result__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13360__auto__;
}
break;
}
}catch (e17581){var ex__13361__auto__ = e17581;
var statearr_17582_19454 = state_17509;
(statearr_17582_19454[(2)] = ex__13361__auto__);


if(cljs.core.seq((state_17509[(4)]))){
var statearr_17583_19455 = state_17509;
(statearr_17583_19455[(1)] = cljs.core.first((state_17509[(4)])));

} else {
throw ex__13361__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19457 = state_17509;
state_17509 = G__19457;
continue;
} else {
return ret_value__13359__auto__;
}
break;
}
});
cljs$core$async$state_machine__13358__auto__ = function(state_17509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13358__auto____1.call(this,state_17509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13358__auto____0;
cljs$core$async$state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13358__auto____1;
return cljs$core$async$state_machine__13358__auto__;
})()
})();
var state__14204__auto__ = (function (){var statearr_17586 = f__14203__auto__();
(statearr_17586[(6)] = c__14202__auto___19423);

return statearr_17586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14204__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17595 = arguments.length;
switch (G__17595) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14202__auto___19463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14203__auto__ = (function (){var switch__13357__auto__ = (function (state_17647){
var state_val_17648 = (state_17647[(1)]);
if((state_val_17648 === (7))){
var inst_17642 = (state_17647[(2)]);
var state_17647__$1 = state_17647;
var statearr_17665_19464 = state_17647__$1;
(statearr_17665_19464[(2)] = inst_17642);

(statearr_17665_19464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17648 === (1))){
var inst_17607 = (new Array(n));
var inst_17608 = inst_17607;
var inst_17609 = (0);
var state_17647__$1 = (function (){var statearr_17668 = state_17647;
(statearr_17668[(7)] = inst_17609);

(statearr_17668[(8)] = inst_17608);

return statearr_17668;
})();
var statearr_17669_19472 = state_17647__$1;
(statearr_17669_19472[(2)] = null);

(statearr_17669_19472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17648 === (4))){
var inst_17612 = (state_17647[(9)]);
var inst_17612__$1 = (state_17647[(2)]);
var inst_17613 = (inst_17612__$1 == null);
var inst_17614 = cljs.core.not(inst_17613);
var state_17647__$1 = (function (){var statearr_17670 = state_17647;
(statearr_17670[(9)] = inst_17612__$1);

return statearr_17670;
})();
if(inst_17614){
var statearr_17671_19473 = state_17647__$1;
(statearr_17671_19473[(1)] = (5));

} else {
var statearr_17672_19474 = state_17647__$1;
(statearr_17672_19474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17648 === (15))){
var inst_17636 = (state_17647[(2)]);
var state_17647__$1 = state_17647;
var statearr_17675_19479 = state_17647__$1;
(statearr_17675_19479[(2)] = inst_17636);

(statearr_17675_19479[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17648 === (13))){
var state_17647__$1 = state_17647;
var statearr_17676_19484 = state_17647__$1;
(statearr_17676_19484[(2)] = null);

(statearr_17676_19484[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17648 === (6))){
var inst_17609 = (state_17647[(7)]);
var inst_17632 = (inst_17609 > (0));
var state_17647__$1 = state_17647;
if(cljs.core.truth_(inst_17632)){
var statearr_17678_19489 = state_17647__$1;
(statearr_17678_19489[(1)] = (12));

} else {
var statearr_17679_19490 = state_17647__$1;
(statearr_17679_19490[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17648 === (3))){
var inst_17644 = (state_17647[(2)]);
var state_17647__$1 = state_17647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17647__$1,inst_17644);
} else {
if((state_val_17648 === (12))){
var inst_17608 = (state_17647[(8)]);
var inst_17634 = cljs.core.vec(inst_17608);
var state_17647__$1 = state_17647;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17647__$1,(15),out,inst_17634);
} else {
if((state_val_17648 === (2))){
var state_17647__$1 = state_17647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17647__$1,(4),ch);
} else {
if((state_val_17648 === (11))){
var inst_17626 = (state_17647[(2)]);
var inst_17627 = (new Array(n));
var inst_17608 = inst_17627;
var inst_17609 = (0);
var state_17647__$1 = (function (){var statearr_17689 = state_17647;
(statearr_17689[(10)] = inst_17626);

(statearr_17689[(7)] = inst_17609);

(statearr_17689[(8)] = inst_17608);

return statearr_17689;
})();
var statearr_17690_19492 = state_17647__$1;
(statearr_17690_19492[(2)] = null);

(statearr_17690_19492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17648 === (9))){
var inst_17608 = (state_17647[(8)]);
var inst_17624 = cljs.core.vec(inst_17608);
var state_17647__$1 = state_17647;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17647__$1,(11),out,inst_17624);
} else {
if((state_val_17648 === (5))){
var inst_17612 = (state_17647[(9)]);
var inst_17619 = (state_17647[(11)]);
var inst_17609 = (state_17647[(7)]);
var inst_17608 = (state_17647[(8)]);
var inst_17616 = (inst_17608[inst_17609] = inst_17612);
var inst_17619__$1 = (inst_17609 + (1));
var inst_17620 = (inst_17619__$1 < n);
var state_17647__$1 = (function (){var statearr_17691 = state_17647;
(statearr_17691[(11)] = inst_17619__$1);

(statearr_17691[(12)] = inst_17616);

return statearr_17691;
})();
if(cljs.core.truth_(inst_17620)){
var statearr_17693_19505 = state_17647__$1;
(statearr_17693_19505[(1)] = (8));

} else {
var statearr_17694_19506 = state_17647__$1;
(statearr_17694_19506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17648 === (14))){
var inst_17639 = (state_17647[(2)]);
var inst_17640 = cljs.core.async.close_BANG_(out);
var state_17647__$1 = (function (){var statearr_17698 = state_17647;
(statearr_17698[(13)] = inst_17639);

return statearr_17698;
})();
var statearr_17699_19511 = state_17647__$1;
(statearr_17699_19511[(2)] = inst_17640);

(statearr_17699_19511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17648 === (10))){
var inst_17630 = (state_17647[(2)]);
var state_17647__$1 = state_17647;
var statearr_17700_19512 = state_17647__$1;
(statearr_17700_19512[(2)] = inst_17630);

(statearr_17700_19512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17648 === (8))){
var inst_17619 = (state_17647[(11)]);
var inst_17608 = (state_17647[(8)]);
var tmp17697 = inst_17608;
var inst_17608__$1 = tmp17697;
var inst_17609 = inst_17619;
var state_17647__$1 = (function (){var statearr_17701 = state_17647;
(statearr_17701[(7)] = inst_17609);

(statearr_17701[(8)] = inst_17608__$1);

return statearr_17701;
})();
var statearr_17702_19513 = state_17647__$1;
(statearr_17702_19513[(2)] = null);

(statearr_17702_19513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13358__auto__ = null;
var cljs$core$async$state_machine__13358__auto____0 = (function (){
var statearr_17708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17708[(0)] = cljs$core$async$state_machine__13358__auto__);

(statearr_17708[(1)] = (1));

return statearr_17708;
});
var cljs$core$async$state_machine__13358__auto____1 = (function (state_17647){
while(true){
var ret_value__13359__auto__ = (function (){try{while(true){
var result__13360__auto__ = switch__13357__auto__(state_17647);
if(cljs.core.keyword_identical_QMARK_(result__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13360__auto__;
}
break;
}
}catch (e17716){var ex__13361__auto__ = e17716;
var statearr_17719_19514 = state_17647;
(statearr_17719_19514[(2)] = ex__13361__auto__);


if(cljs.core.seq((state_17647[(4)]))){
var statearr_17720_19519 = state_17647;
(statearr_17720_19519[(1)] = cljs.core.first((state_17647[(4)])));

} else {
throw ex__13361__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19520 = state_17647;
state_17647 = G__19520;
continue;
} else {
return ret_value__13359__auto__;
}
break;
}
});
cljs$core$async$state_machine__13358__auto__ = function(state_17647){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13358__auto____1.call(this,state_17647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13358__auto____0;
cljs$core$async$state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13358__auto____1;
return cljs$core$async$state_machine__13358__auto__;
})()
})();
var state__14204__auto__ = (function (){var statearr_17727 = f__14203__auto__();
(statearr_17727[(6)] = c__14202__auto___19463);

return statearr_17727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14204__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17730 = arguments.length;
switch (G__17730) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14202__auto___19530 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14203__auto__ = (function (){var switch__13357__auto__ = (function (state_17782){
var state_val_17783 = (state_17782[(1)]);
if((state_val_17783 === (7))){
var inst_17776 = (state_17782[(2)]);
var state_17782__$1 = state_17782;
var statearr_17784_19533 = state_17782__$1;
(statearr_17784_19533[(2)] = inst_17776);

(statearr_17784_19533[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (1))){
var inst_17732 = [];
var inst_17733 = inst_17732;
var inst_17734 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17782__$1 = (function (){var statearr_17785 = state_17782;
(statearr_17785[(7)] = inst_17734);

(statearr_17785[(8)] = inst_17733);

return statearr_17785;
})();
var statearr_17786_19534 = state_17782__$1;
(statearr_17786_19534[(2)] = null);

(statearr_17786_19534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (4))){
var inst_17737 = (state_17782[(9)]);
var inst_17737__$1 = (state_17782[(2)]);
var inst_17738 = (inst_17737__$1 == null);
var inst_17739 = cljs.core.not(inst_17738);
var state_17782__$1 = (function (){var statearr_17791 = state_17782;
(statearr_17791[(9)] = inst_17737__$1);

return statearr_17791;
})();
if(inst_17739){
var statearr_17792_19537 = state_17782__$1;
(statearr_17792_19537[(1)] = (5));

} else {
var statearr_17793_19538 = state_17782__$1;
(statearr_17793_19538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (15))){
var inst_17733 = (state_17782[(8)]);
var inst_17768 = cljs.core.vec(inst_17733);
var state_17782__$1 = state_17782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17782__$1,(18),out,inst_17768);
} else {
if((state_val_17783 === (13))){
var inst_17763 = (state_17782[(2)]);
var state_17782__$1 = state_17782;
var statearr_17800_19543 = state_17782__$1;
(statearr_17800_19543[(2)] = inst_17763);

(statearr_17800_19543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (6))){
var inst_17733 = (state_17782[(8)]);
var inst_17765 = inst_17733.length;
var inst_17766 = (inst_17765 > (0));
var state_17782__$1 = state_17782;
if(cljs.core.truth_(inst_17766)){
var statearr_17808_19544 = state_17782__$1;
(statearr_17808_19544[(1)] = (15));

} else {
var statearr_17809_19545 = state_17782__$1;
(statearr_17809_19545[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (17))){
var inst_17773 = (state_17782[(2)]);
var inst_17774 = cljs.core.async.close_BANG_(out);
var state_17782__$1 = (function (){var statearr_17810 = state_17782;
(statearr_17810[(10)] = inst_17773);

return statearr_17810;
})();
var statearr_17811_19548 = state_17782__$1;
(statearr_17811_19548[(2)] = inst_17774);

(statearr_17811_19548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (3))){
var inst_17778 = (state_17782[(2)]);
var state_17782__$1 = state_17782;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17782__$1,inst_17778);
} else {
if((state_val_17783 === (12))){
var inst_17733 = (state_17782[(8)]);
var inst_17752 = cljs.core.vec(inst_17733);
var state_17782__$1 = state_17782;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17782__$1,(14),out,inst_17752);
} else {
if((state_val_17783 === (2))){
var state_17782__$1 = state_17782;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17782__$1,(4),ch);
} else {
if((state_val_17783 === (11))){
var inst_17741 = (state_17782[(11)]);
var inst_17737 = (state_17782[(9)]);
var inst_17733 = (state_17782[(8)]);
var inst_17749 = inst_17733.push(inst_17737);
var tmp17812 = inst_17733;
var inst_17733__$1 = tmp17812;
var inst_17734 = inst_17741;
var state_17782__$1 = (function (){var statearr_17822 = state_17782;
(statearr_17822[(7)] = inst_17734);

(statearr_17822[(8)] = inst_17733__$1);

(statearr_17822[(12)] = inst_17749);

return statearr_17822;
})();
var statearr_17823_19554 = state_17782__$1;
(statearr_17823_19554[(2)] = null);

(statearr_17823_19554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (9))){
var inst_17734 = (state_17782[(7)]);
var inst_17745 = cljs.core.keyword_identical_QMARK_(inst_17734,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17782__$1 = state_17782;
var statearr_17828_19558 = state_17782__$1;
(statearr_17828_19558[(2)] = inst_17745);

(statearr_17828_19558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (5))){
var inst_17734 = (state_17782[(7)]);
var inst_17741 = (state_17782[(11)]);
var inst_17742 = (state_17782[(13)]);
var inst_17737 = (state_17782[(9)]);
var inst_17741__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17737) : f.call(null,inst_17737));
var inst_17742__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17741__$1,inst_17734);
var state_17782__$1 = (function (){var statearr_17838 = state_17782;
(statearr_17838[(11)] = inst_17741__$1);

(statearr_17838[(13)] = inst_17742__$1);

return statearr_17838;
})();
if(inst_17742__$1){
var statearr_17839_19562 = state_17782__$1;
(statearr_17839_19562[(1)] = (8));

} else {
var statearr_17840_19563 = state_17782__$1;
(statearr_17840_19563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (14))){
var inst_17741 = (state_17782[(11)]);
var inst_17737 = (state_17782[(9)]);
var inst_17754 = (state_17782[(2)]);
var inst_17757 = [];
var inst_17758 = inst_17757.push(inst_17737);
var inst_17733 = inst_17757;
var inst_17734 = inst_17741;
var state_17782__$1 = (function (){var statearr_17841 = state_17782;
(statearr_17841[(7)] = inst_17734);

(statearr_17841[(14)] = inst_17758);

(statearr_17841[(15)] = inst_17754);

(statearr_17841[(8)] = inst_17733);

return statearr_17841;
})();
var statearr_17851_19564 = state_17782__$1;
(statearr_17851_19564[(2)] = null);

(statearr_17851_19564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (16))){
var state_17782__$1 = state_17782;
var statearr_17855_19565 = state_17782__$1;
(statearr_17855_19565[(2)] = null);

(statearr_17855_19565[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (10))){
var inst_17747 = (state_17782[(2)]);
var state_17782__$1 = state_17782;
if(cljs.core.truth_(inst_17747)){
var statearr_17856_19569 = state_17782__$1;
(statearr_17856_19569[(1)] = (11));

} else {
var statearr_17857_19570 = state_17782__$1;
(statearr_17857_19570[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (18))){
var inst_17770 = (state_17782[(2)]);
var state_17782__$1 = state_17782;
var statearr_17864_19572 = state_17782__$1;
(statearr_17864_19572[(2)] = inst_17770);

(statearr_17864_19572[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17783 === (8))){
var inst_17742 = (state_17782[(13)]);
var state_17782__$1 = state_17782;
var statearr_17865_19573 = state_17782__$1;
(statearr_17865_19573[(2)] = inst_17742);

(statearr_17865_19573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13358__auto__ = null;
var cljs$core$async$state_machine__13358__auto____0 = (function (){
var statearr_17866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17866[(0)] = cljs$core$async$state_machine__13358__auto__);

(statearr_17866[(1)] = (1));

return statearr_17866;
});
var cljs$core$async$state_machine__13358__auto____1 = (function (state_17782){
while(true){
var ret_value__13359__auto__ = (function (){try{while(true){
var result__13360__auto__ = switch__13357__auto__(state_17782);
if(cljs.core.keyword_identical_QMARK_(result__13360__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13360__auto__;
}
break;
}
}catch (e17867){var ex__13361__auto__ = e17867;
var statearr_17868_19577 = state_17782;
(statearr_17868_19577[(2)] = ex__13361__auto__);


if(cljs.core.seq((state_17782[(4)]))){
var statearr_17872_19578 = state_17782;
(statearr_17872_19578[(1)] = cljs.core.first((state_17782[(4)])));

} else {
throw ex__13361__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13359__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19579 = state_17782;
state_17782 = G__19579;
continue;
} else {
return ret_value__13359__auto__;
}
break;
}
});
cljs$core$async$state_machine__13358__auto__ = function(state_17782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13358__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13358__auto____1.call(this,state_17782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13358__auto____0;
cljs$core$async$state_machine__13358__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13358__auto____1;
return cljs$core$async$state_machine__13358__auto__;
})()
})();
var state__14204__auto__ = (function (){var statearr_17876 = f__14203__auto__();
(statearr_17876[(6)] = c__14202__auto___19530);

return statearr_17876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14204__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
