import{g as It}from"../chunks/getSupabase.92680f2a.js";import"../chunks/index.da8f1b77.js";import{r as yt}from"../chunks/index.d7eb2526.js";import{S as Bt,b as Dt,a as St,B as gt,a4 as bt,p as d,x as I,c as k,D as z,q as g,u as b,y,l as u,d as E,E as V,v as p,f as m,L as f,F as A,X as zt,a6 as vt,k as $,h as v,j as Vt,G as P,z as At,A as Pt}from"../chunks/index.64e18256.js";import{g as Tt}from"../chunks/navigation.4022d6cb.js";import{A as Ft}from"../chunks/Alert.2730a5fa.js";import{B as J}from"../chunks/Button.ec37116f.js";import{I as ht}from"../chunks/Input.9b0282a1.js";import{s as Ot}from"../chunks/db.a1cf1a92.js";const jt=async a=>{const{session:t}=await It(a);if(t)throw yt(303,"/");return{session:t}},ee=Object.freeze(Object.defineProperty({__proto__:null,load:jt},Symbol.toStringTag,{value:"Module"}));function wt(a){let t,e;return t=new Ft({props:{type:"error",$$slots:{default:[Gt]},$$scope:{ctx:a}}}),t.$on("close",a[6]),{c(){z(t.$$.fragment)},l(n){V(t.$$.fragment,n)},m(n,o){A(t,n,o),e=!0},p(n,o){const r={};o&260&&(r.$$scope={dirty:o,ctx:n}),t.$set(r)},i(n){e||($(t.$$.fragment,n),e=!0)},o(n){v(t.$$.fragment,n),e=!1},d(n){P(t,n)}}}function Gt(a){let t=a[2].message+"",e;return{c(){e=I(t)},l(n){e=y(n,t)},m(n,o){m(n,e,o)},p(n,o){o&4&&t!==(t=n[2].message+"")&&At(e,t)},d(n){n&&u(e)}}}function Ht(a){let t;return{c(){t=I("Signup")},l(e){t=y(e,"Signup")},m(e,n){m(e,t,n)},d(e){e&&u(t)}}}function qt(a){let t;return{c(){t=I("Google")},l(e){t=y(e,"Google")},m(e,n){m(e,t,n)},d(e){e&&u(t)}}}function Ct(a){let t;return{c(){t=I("Facebook")},l(e){t=y(e,"Facebook")},m(e,n){m(e,t,n)},d(e){e&&u(t)}}}function Mt(a){let t;return{c(){t=I("Twitter")},l(e){t=y(e,"Twitter")},m(e,n){m(e,t,n)},d(e){e&&u(t)}}}function Nt(a){let t;return{c(){t=I("Already registered?")},l(e){t=y(e,"Already registered?")},m(e,n){m(e,t,n)},d(e){e&&u(t)}}}function Ut(a){let t;return{c(){t=I("Help")},l(e){t=y(e,"Help")},m(e,n){m(e,t,n)},d(e){e&&u(t)}}}function Lt(a){let t,e,n,o,r,c,K,Q,h,tt,C,et,B,at,U,w,T,ot,F,lt,O,rt,L,j,G,ut,H,st,M,R,q,X,it,ft,nt,ct,$t;function kt(s){a[4](s)}let mt={id:"email",label:"E-mail"};a[0]!==void 0&&(mt.value=a[0]),c=new ht({props:mt}),gt.push(()=>bt(c,"value",kt,a[0]));function Et(s){a[5](s)}let _t={type:"password",id:"password",label:"Password"};a[1]!==void 0&&(_t.value=a[1]),h=new ht({props:_t}),gt.push(()=>bt(h,"value",Et,a[1]));let i=a[2]&&wt(a);return B=new J({props:{endIcon:"arrow_forward",block:!0,type:"submit",$$slots:{default:[Ht]},$$scope:{ctx:a}}}),B.$on("click",a[7]),T=new J({props:{outline:!0,size:"small",type:"button",$$slots:{default:[qt]},$$scope:{ctx:a}}}),F=new J({props:{outline:!0,size:"small",type:"button",$$slots:{default:[Ct]},$$scope:{ctx:a}}}),O=new J({props:{outline:!0,size:"small",type:"button",$$slots:{default:[Mt]},$$scope:{ctx:a}}}),G=new J({props:{startIcon:"login",ghost:!0,size:"tiny",link:"/login",$$slots:{default:[Nt]},$$scope:{ctx:a}}}),H=new J({props:{startIcon:"contact_support",class:"float-right",ghost:!0,size:"tiny",$$slots:{default:[Ut]},$$scope:{ctx:a}}}),{c(){t=d("h1"),e=I("PhotosBro"),n=k(),o=d("div"),r=d("form"),z(c.$$.fragment),Q=k(),z(h.$$.fragment),C=k(),i&&i.c(),et=k(),z(B.$$.fragment),at=k(),U=d("div"),w=d("div"),z(T.$$.fragment),ot=k(),z(F.$$.fragment),lt=k(),z(O.$$.fragment),rt=k(),L=d("div"),j=d("div"),z(G.$$.fragment),ut=k(),z(H.$$.fragment),st=k(),M=d("div"),R=d("div"),q=d("button"),X=d("span"),it=I("arrow_back"),ft=I(`
			Back to photosbro.com`),this.h()},l(s){t=g(s,"H1",{class:!0});var l=b(t);e=y(l,"PhotosBro"),l.forEach(u),n=E(s),o=g(s,"DIV",{class:!0});var D=b(o);r=g(D,"FORM",{class:!0});var _=b(r);V(c.$$.fragment,_),Q=E(_),V(h.$$.fragment,_),C=E(_),i&&i.l(_),et=E(_),V(B.$$.fragment,_),_.forEach(u),at=E(D),U=g(D,"DIV",{class:!0});var W=b(U);w=g(W,"DIV",{class:!0});var S=b(w);V(T.$$.fragment,S),ot=E(S),V(F.$$.fragment,S),lt=E(S),V(O.$$.fragment,S),S.forEach(u),W.forEach(u),rt=E(D),L=g(D,"DIV",{class:!0});var Y=b(L);j=g(Y,"DIV",{class:!0});var N=b(j);V(G.$$.fragment,N),ut=E(N),V(H.$$.fragment,N),N.forEach(u),Y.forEach(u),D.forEach(u),st=E(s),M=g(s,"DIV",{class:!0});var Z=b(M);R=g(Z,"DIV",{class:!0});var x=b(R);q=g(x,"BUTTON",{class:!0,type:!0});var pt=b(q);X=g(pt,"SPAN",{class:!0});var dt=b(X);it=y(dt,"arrow_back"),dt.forEach(u),ft=y(pt,`
			Back to photosbro.com`),pt.forEach(u),x.forEach(u),Z.forEach(u),this.h()},h(){p(t,"class","font-bold text-center text-2xl mb-5"),p(r,"class","px-5 py-7 flex flex-col gap-4"),p(w,"class","grid grid-cols-3 gap-1"),p(U,"class","p-5"),p(j,"class","text-center sm:text-left blackspace-nowrap px-4"),p(L,"class","py-5"),p(o,"class","bg-black shadow w-full rounded-lg divide-y divide-gray-200"),p(X,"class","material-symbols-outlined text-sm"),p(q,"class","btn btn-ghost btn-sm gap-2 text-xs"),p(q,"type","button"),p(R,"class","text-center sm:text-left blackspace-nowrap"),p(M,"class","py-5")},m(s,l){m(s,t,l),f(t,e),m(s,n,l),m(s,o,l),f(o,r),A(c,r,null),f(r,Q),A(h,r,null),f(r,C),i&&i.m(r,null),f(r,et),A(B,r,null),f(o,at),f(o,U),f(U,w),A(T,w,null),f(w,ot),A(F,w,null),f(w,lt),A(O,w,null),f(o,rt),f(o,L),f(L,j),A(G,j,null),f(j,ut),A(H,j,null),m(s,st,l),m(s,M,l),f(M,R),f(R,q),f(q,X),f(X,it),f(q,ft),nt=!0,ct||($t=zt(r,"submit",a[3]),ct=!0)},p(s,[l]){const D={};!K&&l&1&&(K=!0,D.value=s[0],vt(()=>K=!1)),c.$set(D);const _={};!tt&&l&2&&(tt=!0,_.value=s[1],vt(()=>tt=!1)),h.$set(_),s[2]?i?(i.p(s,l),l&4&&$(i,1)):(i=wt(s),i.c(),$(i,1),i.m(r,et)):i&&(Pt(),v(i,1,1,()=>{i=null}),Vt());const W={};l&256&&(W.$$scope={dirty:l,ctx:s}),B.$set(W);const S={};l&256&&(S.$$scope={dirty:l,ctx:s}),T.$set(S);const Y={};l&256&&(Y.$$scope={dirty:l,ctx:s}),F.$set(Y);const N={};l&256&&(N.$$scope={dirty:l,ctx:s}),O.$set(N);const Z={};l&256&&(Z.$$scope={dirty:l,ctx:s}),G.$set(Z);const x={};l&256&&(x.$$scope={dirty:l,ctx:s}),H.$set(x)},i(s){nt||($(c.$$.fragment,s),$(h.$$.fragment,s),$(i),$(B.$$.fragment,s),$(T.$$.fragment,s),$(F.$$.fragment,s),$(O.$$.fragment,s),$(G.$$.fragment,s),$(H.$$.fragment,s),nt=!0)},o(s){v(c.$$.fragment,s),v(h.$$.fragment,s),v(i),v(B.$$.fragment,s),v(T.$$.fragment,s),v(F.$$.fragment,s),v(O.$$.fragment,s),v(G.$$.fragment,s),v(H.$$.fragment,s),nt=!1},d(s){s&&u(t),s&&u(n),s&&u(o),P(c),P(h),i&&i.d(),P(B),P(T),P(F),P(O),P(G),P(H),s&&u(st),s&&u(M),ct=!1,$t()}}}function Rt(a,t,e){let n="",o="",r;async function c(){e(2,{error:r}=await Ot.auth.signUp({email:n,password:o}),r),r||Tt("/")}function K(C){n=C,e(0,n)}function Q(C){o=C,e(1,o)}return[n,o,r,c,K,Q,()=>e(2,r=null),()=>c()]}class se extends Bt{constructor(t){super(),Dt(this,t,Rt,Lt,St,{})}}export{se as component,ee as universal};
