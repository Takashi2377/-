import{_ as p,o as t,c as n,b as s,n as r,h as c,F as d,j as u,t as o}from"./index-Ce5A-XYZ.js";const k={props:["pages"],methods:{emitPages(g){this.$emit("emit-pages",g)}}},m={"aria-label":"Page navigation example",class:"d-flex justify-content-center text-dark"},h={class:"pagination"},v=s("span",{"aria-hidden":"true"},"«",-1),f=[v],P={key:0,class:"page-link"},x=["onClick"],b=s("span",{"aria-hidden":"true"},"»",-1),C=[b];function y(g,i,e,B,j,l){return t(),n("nav",m,[s("ul",h,[s("li",{class:r(["page-item",{disabled:e.pages.current_page===1}])},[s("a",{class:"page-link","aria-label":"Previous",onClick:i[0]||(i[0]=c(a=>l.emitPages(e.pages.current_page-1),["prevent"]))},f)],2),(t(!0),n(d,null,u(e.pages.total_pages,(a,_)=>(t(),n("li",{key:_,class:r(["page-item",{active:a===e.pages.current_page}])},[a===e.pages.current_page?(t(),n("span",P,o(a),1)):(t(),n("a",{key:1,class:"page-link",onClick:c(F=>l.emitPages(a),["prevent"])},o(a),9,x))],2))),128)),s("li",{class:r(["page-item",{disabled:e.pages.current_page===e.pages.total_pages}])},[s("a",{class:"page-link","aria-label":"Next",onClick:i[1]||(i[1]=c(a=>l.emitPages(e.pages.current_page+1),["prevent"]))},C)],2)])])}const w=p(k,[["render",y]]);export{w as P};