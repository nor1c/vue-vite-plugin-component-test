(function(e,t){typeof exports=="object"&&typeof module<"u"?module.exports=t(require("vue")):typeof define=="function"&&define.amd?define(["vue"],t):(e=typeof globalThis<"u"?globalThis:e||self,e.MyInput=t(e.Vue))})(this,function(e){"use strict";const t=["type","placeholder"],p={__name:"MyInput",props:{type:{type:String,default:"text"},placeholder:{type:String,default:""}},setup(n){return(i,o)=>(e.openBlock(),e.createElementBlock("input",{type:n.type,placeholder:n.placeholder},null,8,t))}};return{install:n=>{n.component("my-input",p)}}});
