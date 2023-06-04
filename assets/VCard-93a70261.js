import{m as y,b as f,c as b,e as A,t as V,V as g,d as q,f as w,g as G,N as H,O as Q,P as U,h as $,i as J,a as K,j as W,R as X,l as Y,n as Z,o as ee,p as ae,q as te,Q as ne,S as de,T as ie,r as se,k as le,z as ce,U as re,s as ue}from"./VAvatar-06c60677.js";import{l as C,G as ve,m as n,p as P,I as u,z as oe,B as me,c as h,x as ke,D as ge}from"./index-1670b525.js";const ye=C()({name:"VCardActions",props:y(),setup(e,i){let{slots:t}=i;return ve({VBtn:{variant:"text"}}),f(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),fe=b("v-card-subtitle"),be=b("v-card-title"),Ce=P({appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:String,title:String,...y(),...A()},"VCardItem"),pe=C()({name:"VCardItem",props:Ce(),setup(e,i){let{slots:t}=i;return f(()=>{var l;const a=!!(e.prependAvatar||e.prependIcon),v=!!(a||t.prepend),s=!!(e.appendAvatar||e.appendIcon),o=!!(s||t.append),m=!!(e.title||t.title),k=!!(e.subtitle||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[v&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(g,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},t.prepend):a&&n(V,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),n("div",{class:"v-card-item__content"},[m&&n(be,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),k&&n(fe,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(l=t.default)==null?void 0:l.call(t)]),o&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(g,{key:"append-defaults",disabled:!s,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},t.append):s&&n(V,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Ie=b("v-card-text"),Ve=P({appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:Boolean,default:!0},subtitle:String,text:String,title:String,...q(),...y(),...A(),...w(),...G(),...H(),...Q(),...U(),...$(),...J(),...K(),...oe(),...W({variant:"elevated"})},"VCard"),Pe=C()({name:"VCard",directives:{Ripple:X},props:Ve(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:v}=me(e),{borderClasses:s}=Y(e),{colorClasses:o,colorStyles:m,variantClasses:k}=Z(e),{densityClasses:l}=ee(e),{dimensionStyles:d}=ae(e),{elevationClasses:S}=te(e),{loaderClasses:x}=ne(e),{locationStyles:T}=de(e),{positionClasses:B}=ie(e),{roundedClasses:D}=se(e),c=le(e,t),L=h(()=>e.link!==!1&&c.isLink.value),r=h(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return f(()=>{const _=L.value?"a":e.tag,R=!!(a.title||e.title),z=!!(a.subtitle||e.subtitle),E=R||z,F=!!(a.append||e.appendAvatar||e.appendIcon),M=!!(a.prepend||e.prependAvatar||e.prependIcon),N=!!(a.image||e.image),O=E||M||F,j=!!(a.text||e.text);return ke(n(_,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},v.value,s.value,o.value,l.value,S.value,x.value,B.value,D.value,k.value,e.class],style:[m.value,d.value,T.value,e.style],href:c.href.value,onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var p;return[N&&n("div",{key:"image",class:"v-card__image"},[a.image?n(g,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ce,{key:"image-img",cover:!0,src:e.image},null)]),n(re,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),O&&n(pe,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),j&&n(Ie,{key:"text"},{default:()=>{var I;return[((I=a.text)==null?void 0:I.call(a))??e.text]}}),(p=a.default)==null?void 0:p.call(a),a.actions&&n(ye,null,{default:a.actions}),ue(r.value,"v-card")]}}),[[ge("ripple"),r.value&&e.ripple]])}),{}}});export{be as V,Ie as a,Pe as b,ye as c};
