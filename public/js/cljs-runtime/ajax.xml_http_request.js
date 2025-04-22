goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__12794 = e.target.readyState;
var fexpr__12793 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__12793.cljs$core$IFn$_invoke$arity$1 ? fexpr__12793.cljs$core$IFn$_invoke$arity$1(G__12794) : fexpr__12793.call(null,G__12794));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__12803,handler){
var map__12804 = p__12803;
var map__12804__$1 = cljs.core.__destructure_map(map__12804);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12804__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12804__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12804__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12804__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12804__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__12804__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12804__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__12801_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__12801_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___12850 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___12850)){
var response_type_12851 = temp__5804__auto___12850;
(this$__$1.responseType = cljs.core.name(response_type_12851));
} else {
}

var seq__12809_12852 = cljs.core.seq(headers);
var chunk__12810_12853 = null;
var count__12811_12854 = (0);
var i__12812_12855 = (0);
while(true){
if((i__12812_12855 < count__12811_12854)){
var vec__12828_12856 = chunk__12810_12853.cljs$core$IIndexed$_nth$arity$2(null,i__12812_12855);
var k_12857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12828_12856,(0),null);
var v_12858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12828_12856,(1),null);
this$__$1.setRequestHeader(k_12857,v_12858);


var G__12859 = seq__12809_12852;
var G__12860 = chunk__12810_12853;
var G__12861 = count__12811_12854;
var G__12862 = (i__12812_12855 + (1));
seq__12809_12852 = G__12859;
chunk__12810_12853 = G__12860;
count__12811_12854 = G__12861;
i__12812_12855 = G__12862;
continue;
} else {
var temp__5804__auto___12863 = cljs.core.seq(seq__12809_12852);
if(temp__5804__auto___12863){
var seq__12809_12864__$1 = temp__5804__auto___12863;
if(cljs.core.chunked_seq_QMARK_(seq__12809_12864__$1)){
var c__5525__auto___12865 = cljs.core.chunk_first(seq__12809_12864__$1);
var G__12867 = cljs.core.chunk_rest(seq__12809_12864__$1);
var G__12868 = c__5525__auto___12865;
var G__12869 = cljs.core.count(c__5525__auto___12865);
var G__12870 = (0);
seq__12809_12852 = G__12867;
chunk__12810_12853 = G__12868;
count__12811_12854 = G__12869;
i__12812_12855 = G__12870;
continue;
} else {
var vec__12833_12871 = cljs.core.first(seq__12809_12864__$1);
var k_12872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12833_12871,(0),null);
var v_12873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12833_12871,(1),null);
this$__$1.setRequestHeader(k_12872,v_12873);


var G__12874 = cljs.core.next(seq__12809_12864__$1);
var G__12875 = null;
var G__12876 = (0);
var G__12877 = (0);
seq__12809_12852 = G__12874;
chunk__12810_12853 = G__12875;
count__12811_12854 = G__12876;
i__12812_12855 = G__12877;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5002__auto__ = body;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
