import{g as O}from"../chunks/getSupabase.92680f2a.js";import"../chunks/index.da8f1b77.js";import{S as F,b as V,a as L,H as k,p as j,D as h,c as v,q,u as x,E as b,d as y,l as w,v as C,f as z,L as p,F as S,I as A,J as G,K as J,k as d,h as _,G as D,o as K}from"../chunks/index.64e18256.js";import{H as P,M as Q,F as T}from"../chunks/MessagesQueue.f21a34e9.js";import{s as B}from"../chunks/db.a1cf1a92.js";import{i as N}from"../chunks/navigation.4022d6cb.js";import"../chunks/singletons.8f6ce276.js";import"../chunks/Button.ec37116f.js";const R=async r=>{const{session:t}=await O(r);return{session:t}},oe=Object.freeze(Object.defineProperty({__proto__:null,load:R},Symbol.toStringTag,{value:"Module"}));class U extends F{constructor(t){super(),V(this,t,null,null,L,{})}}function W(r){let t,n,o,m,s,i,E,H,u,I,f,c;o=new P({}),i=new U({});const M=r[1].default,a=k(M,r,r[0],null);return u=new Q({}),f=new T({}),{c(){t=j("div"),n=j("div"),h(o.$$.fragment),m=v(),s=j("div"),h(i.$$.fragment),E=v(),a&&a.c(),H=v(),h(u.$$.fragment),I=v(),h(f.$$.fragment),this.h()},l(e){t=q(e,"DIV",{class:!0});var l=x(t);n=q(l,"DIV",{class:!0});var g=x(n);b(o.$$.fragment,g),m=y(g),s=q(g,"DIV",{class:!0});var $=x(s);b(i.$$.fragment,$),E=y($),a&&a.l($),H=y($),b(u.$$.fragment,$),$.forEach(w),g.forEach(w),I=y(l),b(f.$$.fragment,l),l.forEach(w),this.h()},h(){C(s,"class","h-full w-full flex flex-col justify-center sm:pt-4 pb-4"),C(n,"class","w-full flex-1"),C(t,"class","min-h-screen flex flex-col")},m(e,l){z(e,t,l),p(t,n),S(o,n,null),p(n,m),p(n,s),S(i,s,null),p(s,E),a&&a.m(s,null),p(s,H),S(u,s,null),p(t,I),S(f,t,null),c=!0},p(e,[l]){a&&a.p&&(!c||l&1)&&A(a,M,e,e[0],c?J(M,e[0],l,null):G(e[0]),null)},i(e){c||(d(o.$$.fragment,e),d(i.$$.fragment,e),d(a,e),d(u.$$.fragment,e),d(f.$$.fragment,e),c=!0)},o(e){_(o.$$.fragment,e),_(i.$$.fragment,e),_(a,e),_(u.$$.fragment,e),_(f.$$.fragment,e),c=!1},d(e){e&&w(t),D(o),D(i),a&&a.d(e),D(u),D(f)}}}function X(r,t,n){let{$$slots:o={},$$scope:m}=t;return K(()=>{const{data:{subscription:s}}=B.auth.onAuthStateChange(()=>{N("supabase:auth")});return()=>{s.unsubscribe()}}),r.$$set=s=>{"$$scope"in s&&n(0,m=s.$$scope)},[m,o]}class le extends F{constructor(t){super(),V(this,t,X,W,L,{})}}export{le as component,oe as universal};
