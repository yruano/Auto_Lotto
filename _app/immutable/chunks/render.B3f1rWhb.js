import{$ as M,a0 as O,a1 as A,l as P,K as Y,B as V,a2 as T,a3 as $,a4 as j,P as B,a5 as E,w as g,v as D,k as C,x as v,J as q,a6 as z,a7 as J,E as K,o as W,a8 as F,a9 as G,z as Q,p as U,j as b,a as X,V as Z}from"./runtime.DpqnJoK0.js";import{b as x}from"./disclose-version.OL5QUGLZ.js";const k=new Set,S=new Set;function sa(a){for(var r=0;r<a.length;r++)k.add(a[r]);for(var n of S)n(a)}function m(a){var R;var r=this,n=r.ownerDocument,_=a.type,i=((R=a.composedPath)==null?void 0:R.call(a))||[],e=i[0]||a.target,d=0,h=a.__root;if(h){var u=i.indexOf(h);if(u!==-1&&(r===document||r===window)){a.__root=r;return}var l=i.indexOf(r);if(l===-1)return;u<=l&&(d=u)}if(e=i[d]||a.target,e!==r){M(a,"currentTarget",{configurable:!0,get(){return e||n}});var w=Y,o=V;O(null),A(null);try{for(var t,s=[];e!==null;){var f=e.assignedSlot||e.parentNode||e.host||null;try{var c=e["__"+_];if(c!==void 0&&!e.disabled)if(P(c)){var[L,...H]=c;L.apply(e,[a,...H])}else c.call(e,a)}catch(y){t?s.push(y):t=y}if(a.cancelBubble||f===r||f===null)break;e=f}if(t){for(let y of s)queueMicrotask(()=>{throw y});throw t}}finally{a.__root=r,delete a.currentTarget,O(w),A(o)}}}const aa=["touchstart","touchmove"];function ra(a){return aa.includes(a)}function oa(a,r){var n=r==null?"":typeof r=="object"?r+"":r;n!==(a.__t??(a.__t=a.nodeValue))&&(a.__t=n,a.nodeValue=n==null?"":n+"")}function ea(a,r){return I(a,r)}function ia(a,r){T(),r.intro=r.intro??!1;const n=r.target,_=b,i=v;try{for(var e=$(n);e&&(e.nodeType!==8||e.data!==j);)e=B(e);if(!e)throw E;g(!0),D(e),C();const d=I(a,{...r,anchor:e});if(v===null||v.nodeType!==8||v.data!==q)throw z(),E;return g(!1),d}catch(d){if(d===E)return r.recover===!1&&J(),T(),K(n),g(!1),ea(a,r);throw d}finally{g(_),D(i)}}const p=new Map;function I(a,{target:r,anchor:n,props:_={},events:i,context:e,intro:d=!0}){T();var h=new Set,u=o=>{for(var t=0;t<o.length;t++){var s=o[t];if(!h.has(s)){h.add(s);var f=ra(s);r.addEventListener(s,m,{passive:f});var c=p.get(s);c===void 0?(document.addEventListener(s,m,{passive:f}),p.set(s,1)):p.set(s,c+1)}}};u(W(k)),S.add(u);var l=void 0,w=F(()=>{var o=n??r.appendChild(G());return Q(()=>{if(e){U({});var t=Z;t.c=e}i&&(_.$$events=i),b&&x(o,null),l=a(o,_)||{},b&&(V.nodes_end=v),e&&X()}),()=>{var f;for(var t of h){r.removeEventListener(t,m);var s=p.get(t);--s===0?(document.removeEventListener(t,m),p.delete(t)):p.set(t,s)}S.delete(u),N.delete(l),o!==n&&((f=o.parentNode)==null||f.removeChild(o))}});return N.set(l,w),l}let N=new WeakMap;function fa(a){const r=N.get(a);r&&r()}export{sa as d,ia as h,ea as m,oa as s,fa as u};