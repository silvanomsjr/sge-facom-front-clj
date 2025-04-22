goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18461){
var map__18463 = p__18461;
var map__18463__$1 = cljs.core.__destructure_map(map__18463);
var m = map__18463__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18463__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18463__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18480_18834 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18481_18835 = null;
var count__18482_18836 = (0);
var i__18483_18837 = (0);
while(true){
if((i__18483_18837 < count__18482_18836)){
var f_18838 = chunk__18481_18835.cljs$core$IIndexed$_nth$arity$2(null,i__18483_18837);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18838], 0));


var G__18839 = seq__18480_18834;
var G__18840 = chunk__18481_18835;
var G__18841 = count__18482_18836;
var G__18842 = (i__18483_18837 + (1));
seq__18480_18834 = G__18839;
chunk__18481_18835 = G__18840;
count__18482_18836 = G__18841;
i__18483_18837 = G__18842;
continue;
} else {
var temp__5804__auto___18844 = cljs.core.seq(seq__18480_18834);
if(temp__5804__auto___18844){
var seq__18480_18845__$1 = temp__5804__auto___18844;
if(cljs.core.chunked_seq_QMARK_(seq__18480_18845__$1)){
var c__5525__auto___18846 = cljs.core.chunk_first(seq__18480_18845__$1);
var G__18847 = cljs.core.chunk_rest(seq__18480_18845__$1);
var G__18848 = c__5525__auto___18846;
var G__18849 = cljs.core.count(c__5525__auto___18846);
var G__18850 = (0);
seq__18480_18834 = G__18847;
chunk__18481_18835 = G__18848;
count__18482_18836 = G__18849;
i__18483_18837 = G__18850;
continue;
} else {
var f_18851 = cljs.core.first(seq__18480_18845__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18851], 0));


var G__18852 = cljs.core.next(seq__18480_18845__$1);
var G__18853 = null;
var G__18854 = (0);
var G__18855 = (0);
seq__18480_18834 = G__18852;
chunk__18481_18835 = G__18853;
count__18482_18836 = G__18854;
i__18483_18837 = G__18855;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18858 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18858], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18858)))?cljs.core.second(arglists_18858):arglists_18858)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18520_18861 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18521_18862 = null;
var count__18522_18863 = (0);
var i__18523_18864 = (0);
while(true){
if((i__18523_18864 < count__18522_18863)){
var vec__18536_18865 = chunk__18521_18862.cljs$core$IIndexed$_nth$arity$2(null,i__18523_18864);
var name_18866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18536_18865,(0),null);
var map__18539_18867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18536_18865,(1),null);
var map__18539_18868__$1 = cljs.core.__destructure_map(map__18539_18867);
var doc_18869 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18539_18868__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18870 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18539_18868__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18866], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18870], 0));

if(cljs.core.truth_(doc_18869)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18869], 0));
} else {
}


var G__18875 = seq__18520_18861;
var G__18876 = chunk__18521_18862;
var G__18877 = count__18522_18863;
var G__18878 = (i__18523_18864 + (1));
seq__18520_18861 = G__18875;
chunk__18521_18862 = G__18876;
count__18522_18863 = G__18877;
i__18523_18864 = G__18878;
continue;
} else {
var temp__5804__auto___18881 = cljs.core.seq(seq__18520_18861);
if(temp__5804__auto___18881){
var seq__18520_18882__$1 = temp__5804__auto___18881;
if(cljs.core.chunked_seq_QMARK_(seq__18520_18882__$1)){
var c__5525__auto___18883 = cljs.core.chunk_first(seq__18520_18882__$1);
var G__18884 = cljs.core.chunk_rest(seq__18520_18882__$1);
var G__18885 = c__5525__auto___18883;
var G__18886 = cljs.core.count(c__5525__auto___18883);
var G__18887 = (0);
seq__18520_18861 = G__18884;
chunk__18521_18862 = G__18885;
count__18522_18863 = G__18886;
i__18523_18864 = G__18887;
continue;
} else {
var vec__18542_18889 = cljs.core.first(seq__18520_18882__$1);
var name_18890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18542_18889,(0),null);
var map__18545_18891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18542_18889,(1),null);
var map__18545_18892__$1 = cljs.core.__destructure_map(map__18545_18891);
var doc_18893 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18545_18892__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18894 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18545_18892__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18890], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18894], 0));

if(cljs.core.truth_(doc_18893)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18893], 0));
} else {
}


var G__18896 = cljs.core.next(seq__18520_18882__$1);
var G__18897 = null;
var G__18898 = (0);
var G__18899 = (0);
seq__18520_18861 = G__18896;
chunk__18521_18862 = G__18897;
count__18522_18863 = G__18898;
i__18523_18864 = G__18899;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18548 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18549 = null;
var count__18550 = (0);
var i__18551 = (0);
while(true){
if((i__18551 < count__18550)){
var role = chunk__18549.cljs$core$IIndexed$_nth$arity$2(null,i__18551);
var temp__5804__auto___18908__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18908__$1)){
var spec_18913 = temp__5804__auto___18908__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18913)], 0));
} else {
}


var G__18914 = seq__18548;
var G__18915 = chunk__18549;
var G__18916 = count__18550;
var G__18917 = (i__18551 + (1));
seq__18548 = G__18914;
chunk__18549 = G__18915;
count__18550 = G__18916;
i__18551 = G__18917;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18548);
if(temp__5804__auto____$1){
var seq__18548__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18548__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18548__$1);
var G__18927 = cljs.core.chunk_rest(seq__18548__$1);
var G__18928 = c__5525__auto__;
var G__18929 = cljs.core.count(c__5525__auto__);
var G__18930 = (0);
seq__18548 = G__18927;
chunk__18549 = G__18928;
count__18550 = G__18929;
i__18551 = G__18930;
continue;
} else {
var role = cljs.core.first(seq__18548__$1);
var temp__5804__auto___18933__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___18933__$2)){
var spec_18934 = temp__5804__auto___18933__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_18934)], 0));
} else {
}


var G__18935 = cljs.core.next(seq__18548__$1);
var G__18936 = null;
var G__18937 = (0);
var G__18938 = (0);
seq__18548 = G__18935;
chunk__18549 = G__18936;
count__18550 = G__18937;
i__18551 = G__18938;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18592 = datafied_throwable;
var map__18592__$1 = cljs.core.__destructure_map(map__18592);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18592__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18592__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18592__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18593 = cljs.core.last(via);
var map__18593__$1 = cljs.core.__destructure_map(map__18593);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18593__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18593__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18593__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18594 = data;
var map__18594__$1 = cljs.core.__destructure_map(map__18594);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18594__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18594__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18594__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18595 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18595__$1 = cljs.core.__destructure_map(map__18595);
var top_data = map__18595__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18595__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18613 = phase;
var G__18613__$1 = (((G__18613 instanceof cljs.core.Keyword))?G__18613.fqn:null);
switch (G__18613__$1) {
case "read-source":
var map__18618 = data;
var map__18618__$1 = cljs.core.__destructure_map(map__18618);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18618__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18618__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18623 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18623__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18623,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18623);
var G__18623__$2 = (cljs.core.truth_((function (){var fexpr__18627 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18627.cljs$core$IFn$_invoke$arity$1 ? fexpr__18627.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18627.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18623__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18623__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18623__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18623__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18628 = top_data;
var G__18628__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18628,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18628);
var G__18628__$2 = (cljs.core.truth_((function (){var fexpr__18629 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18629.cljs$core$IFn$_invoke$arity$1 ? fexpr__18629.cljs$core$IFn$_invoke$arity$1(source) : fexpr__18629.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18628__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18628__$1);
var G__18628__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18628__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18628__$2);
var G__18628__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18628__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18628__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18628__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18628__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18640 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18640,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18640,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18640,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18640,(3),null);
var G__18655 = top_data;
var G__18655__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18655,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18655);
var G__18655__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18655__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18655__$1);
var G__18655__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18655__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18655__$2);
var G__18655__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18655__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18655__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18655__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18655__$4;
}

break;
case "execution":
var vec__18681 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18681,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18681,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18681,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18681,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18585_SHARP_){
var or__5002__auto__ = (p1__18585_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__18694 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__18694.cljs$core$IFn$_invoke$arity$1 ? fexpr__18694.cljs$core$IFn$_invoke$arity$1(p1__18585_SHARP_) : fexpr__18694.call(null,p1__18585_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__18696 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18696__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18696,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18696);
var G__18696__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18696__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18696__$1);
var G__18696__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18696__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18696__$2);
var G__18696__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18696__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18696__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18696__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18696__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18613__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18737){
var map__18738 = p__18737;
var map__18738__$1 = cljs.core.__destructure_map(map__18738);
var triage_data = map__18738__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18738__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18738__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18738__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18738__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18738__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18738__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18738__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18738__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18753 = phase;
var G__18753__$1 = (((G__18753 instanceof cljs.core.Keyword))?G__18753.fqn:null);
switch (G__18753__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__18756 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__18757 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18758 = loc;
var G__18759 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18761_18996 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18762_18997 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18763_18998 = true;
var _STAR_print_fn_STAR__temp_val__18764_18999 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18763_18998);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18764_18999);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18725_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18725_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18762_18997);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18761_18996);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18756,G__18757,G__18758,G__18759) : format.call(null,G__18756,G__18757,G__18758,G__18759));

break;
case "macroexpansion":
var G__18771 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__18772 = cause_type;
var G__18773 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18774 = loc;
var G__18775 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18771,G__18772,G__18773,G__18774,G__18775) : format.call(null,G__18771,G__18772,G__18773,G__18774,G__18775));

break;
case "compile-syntax-check":
var G__18777 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__18778 = cause_type;
var G__18779 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18780 = loc;
var G__18781 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18777,G__18778,G__18779,G__18780,G__18781) : format.call(null,G__18777,G__18778,G__18779,G__18780,G__18781));

break;
case "compilation":
var G__18782 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__18783 = cause_type;
var G__18784 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18785 = loc;
var G__18786 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18782,G__18783,G__18784,G__18785,G__18786) : format.call(null,G__18782,G__18783,G__18784,G__18785,G__18786));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__18790 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__18791 = symbol;
var G__18792 = loc;
var G__18793 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18794_19011 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18795_19012 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18796_19013 = true;
var _STAR_print_fn_STAR__temp_val__18797_19014 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18796_19013);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18797_19014);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18731_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__18731_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18795_19012);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18794_19011);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__18790,G__18791,G__18792,G__18793) : format.call(null,G__18790,G__18791,G__18792,G__18793));
} else {
var G__18805 = "Execution error%s at %s(%s).\n%s\n";
var G__18806 = cause_type;
var G__18807 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__18808 = loc;
var G__18809 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__18805,G__18806,G__18807,G__18808,G__18809) : format.call(null,G__18805,G__18806,G__18807,G__18808,G__18809));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18753__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
