import{a as p,t as d}from"../chunks/disclose-version.OL5QUGLZ.js";import{i as H}from"../chunks/legacy.DjtWIdVr.js";import{p as I,f as J,a as K,s as b,c as e,m as F,r,b as o,t as g,g as s,d as x}from"../chunks/runtime.DpqnJoK0.js";import{d as L,s as y}from"../chunks/render.B3f1rWhb.js";import{e as k,r as h,i as C}from"../chunks/Randoms.svelte.BRA-mny7.js";import{s as R}from"../chunks/Style.B1OwYypn.js";var N=(w,v)=>v(9),O=d('<span class="number-circle"> </span>'),P=d('<span class="number-circle"> </span>'),Q=d('<span class="number-circle"> </span>'),S=d('<div class="center"><button class="button">연금 복권 번호 생성</button></div> <div class="pension-vertical"><p class="menutext">연금 복권1: <!></p> <p class="menutext">연금 복권2: <!></p> <p class="menutext">연금 복권3: <!></p></div>',1);function ta(w,v){I(v,!1);let V=F([]),$=F([]),B=F([]);const D=["#FFD700","#FF6347","#7FFFD4","#87CEFA","#FF69B4","#98FB98"];function M(t){b(V,h.MataRandom(t,0,!1)),b($,h.CryptoRandom(t,0,!1)),b(B,h.WindowCryptoRandom(t,0,!1))}function m(t){return D[t%D.length]}H();var q=S(),_=J(q),W=e(_);W.__click=[N,M],r(_);var A=o(_,2),u=e(A),j=o(e(u));k(j,1,()=>s(V),C,(t,n,l)=>{var a=O();const c=x(()=>`background-color: ${m(l)??""}`);var i=e(a,!0);r(a),g(()=>{R(a,"style",s(c)),y(i,s(n))}),p(t,a)}),r(u);var f=o(u,2),z=o(e(f));k(z,1,()=>s($),C,(t,n,l)=>{var a=P();const c=x(()=>`background-color: ${m(l)??""}`);var i=e(a,!0);r(a),g(()=>{R(a,"style",s(c)),y(i,s(n))}),p(t,a)}),r(f);var E=o(f,2),G=o(e(E));k(G,1,()=>s(B),C,(t,n,l)=>{var a=Q();const c=x(()=>`background-color: ${m(l)??""}`);var i=e(a,!0);r(a),g(()=>{R(a,"style",s(c)),y(i,s(n))}),p(t,a)}),r(E),r(A),p(w,q),K()}L(["click"]);export{ta as component};
