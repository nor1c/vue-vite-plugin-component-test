(function(e,t){typeof exports=="object"&&typeof module<"u"?module.exports=t(require("vue")):typeof define=="function"&&define.amd?define(["vue"],t):(e=typeof globalThis<"u"?globalThis:e||self,e.MyInput=t(e.Vue))})(this,function(e){"use strict";const t=["type","placeholder"],o={__name:"MyInput",props:{type:{type:String,default:"text"},plceholder:{type:String,default:""}},setup(n){return(p,i)=>(e.openBlock(),e.createElementBlock("input",{type:n.type,placeholder:p.placeholder},null,8,t))}};return{install:(n,p)=>{n.component("my-input",o)}}});
