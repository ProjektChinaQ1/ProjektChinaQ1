import{m as c,w as v,b as d}from"./VAvatar-06c60677.js";import{p as m,z as h,l as u,B as g,w as C,c as V,b as i,m as b}from"./index-1670b525.js";const f=m({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...c(),...h()},"VDivider"),y=u()({name:"VDivider",props:f(),setup(e,a){let{attrs:t}=a;const{themeClasses:o}=g(e),{textColorClasses:s,textColorStyles:l}=v(C(e,"color")),n=V(()=>{const r={};return e.length&&(r[e.vertical?"maxHeight":"maxWidth"]=i(e.length)),e.thickness&&(r[e.vertical?"borderRightWidth":"borderTopWidth"]=i(e.thickness)),r});return d(()=>b("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},o.value,s.value,e.class],style:[n.value,l.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{y as V};