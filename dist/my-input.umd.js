(function(e,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(e=typeof globalThis<"u"?globalThis:e||self,t(e.MyInput={},e.Vue))})(this,function(e,t){"use strict";const o=["type","placeholder"],i={__name:"MyInput",props:{type:{type:String,default:"text"},plceholder:{type:String,default:""}},setup(n){return(u,d)=>(t.openBlock(),t.createElementBlock("input",{type:n.type,placeholder:u.placeholder},null,8,o))}},l={install:n=>{n.component("my-input",i)}},p={install:n=>{var u;(u=l.install)==null||u.call(l,n)}};e.MyInput=i,e.MyInputPlugin=l,e.default=p,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
