import{a as w,t as W,b as j}from"../chunks/disclose-version.BKOvA3N-.js";import"../chunks/legacy.DnE8Za2H.js";import{p as q,f as z,t as A,a as D,s,b as r,c as a,n as E,r as e,m as o,g as p}from"../chunks/runtime.DQRGs21t.js";import{s as i}from"../chunks/store.D815wy9a.js";import{i as G}from"../chunks/lifecycle.B5IPCkrv.js";import{B as H,a as I,r as m}from"../chunks/Randoms.svelte.CeJnECro.js";var J=W('<!> <div class="center"><!></div> <div class="center-vertical"><p> </p> <p> </p> <p> </p> <p> </p> <p> </p></div>',1);function X(y,B){q(B,!1);let _=o([]),c=o([]),f=o([]),x=o([]),$=o([]);function C(t){s(_,m.MataRandom(t,!0)),s(c,m.CryptoRandom(t,!0)),s(f,m.WindowCryptoRandom(t,!0)),s(x,m.TimeRandom(t,!0)),s($,m.FisherYatesRandom(t))}G();var h=J(),R=z(h);H(R);var l=r(R,2),Y=a(l);I(Y,{onclick:()=>C(45),children:(t,K)=>{E();var T=j("로또 번호 생성");w(t,T)},$$slots:{default:!0}}),e(l);var V=r(l,2),n=a(V),g=a(n);e(n);var v=r(n,2),k=a(v);e(v);var d=r(v,2),F=a(d);e(d);var u=r(d,2),M=a(u);e(u);var b=r(u,2),P=a(b);e(b),e(V),A(()=>{i(g,`로또1 : ${p(_)??""}`),i(k,`로또2 : ${p(c)??""}`),i(F,`로또3 : ${p(f)??""}`),i(M,`로또4 : ${p(x)??""}`),i(P,`로또5 : ${p($)??""}`)}),w(y,h),D()}export{X as component};
