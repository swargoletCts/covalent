(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{rxbK:function(e,n,t){"use strict";t.r(n);var c=t("ofXK"),r=t("/OM5"),s=t("tyNb"),i=t("fXoL"),o=t("MJ5V"),a=t("7RBA"),m=t("AzUz");function l(e,n){if(1&e&&(i.Yb(0,"span"),i.Qc(1),i.Xb()),2&e){const e=i.kc(3).$implicit;i.Fb(1),i.Sc("Min length value: ",e.minLength,"")}}function u(e,n){if(1&e&&(i.Yb(0,"span"),i.Qc(1),i.Xb()),2&e){const e=i.kc(3).$implicit;i.Fb(1),i.Sc("Max length value: ",e.minLength,"")}}function f(e,n){if(1&e&&(i.Yb(0,"span"),i.Qc(1,"\n            "),i.Oc(2,l,2,1,"span",3),i.Qc(3,"\n            "),i.Oc(4,u,2,1,"span",3),i.Qc(5,"\n          "),i.Xb()),2&e){const e=i.kc().control;i.Fb(2),i.qc("ngIf",e.hasError("minlength")),i.Fb(2),i.qc("ngIf",e.hasError("maxlength"))}}function p(e,n){if(1&e&&(i.Qc(0,"\n          "),i.Oc(1,f,6,2,"span",3),i.Qc(2,"\n      ")),2&e){const e=n.control;i.Fb(1),i.qc("ngIf",e.touched||!e.pristine)}}function b(e,n){if(1&e&&(i.Qc(0,"\n      "),i.Oc(1,p,3,1,"ng-template",2),i.Qc(2,"\n    ")),2&e){const e=n.$implicit;i.Fb(1),i.qc("tdDynamicFormsError",e.name)}}let d=(()=>{class e{constructor(){this.textElements=[{name:"input",hint:"this is an input hint",type:r.b.Input,required:!1,flex:50},{name:"required-input",label:"Input Label",type:r.b.Input,required:!0,flex:50},{name:"text-length",label:"Text Length",type:r.b.Input,minLength:4,maxLength:12,flex:50},{name:"text",type:r.c.Text,required:!1,default:"Default",flex:50,disabled:!0},{name:"textarea",hint:"this is a textarea hint",type:r.b.Textarea,required:!1},{name:"required-password",label:"Password Label",type:r.b.Password,required:!0}]}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i.Nb({type:e,selectors:[["dynamic-forms-demo-basic"]],decls:4,vars:2,consts:[[3,"elements"],["ngFor","",3,"ngForOf"],[3,"tdDynamicFormsError"],[4,"ngIf"]],template:function(e,n){1&e&&(i.Yb(0,"td-dynamic-forms",0),i.Qc(1,"\n    "),i.Oc(2,b,3,1,"ng-template",1),i.Qc(3,"\n  "),i.Xb()),2&e&&(i.qc("elements",n.textElements),i.Fb(2),i.qc("ngForOf",n.textElements))},directives:[a.a,c.s,m.c,c.t],styles:[""]}),e})();const h=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=i.Nb({type:e,selectors:[["dynamic-forms-demo"]],decls:2,vars:1,consts:[[3,"demoId"]],template:function(e,n){1&e&&(i.Yb(0,"demo-component",0),i.Ub(1,"dynamic-forms-demo-basic"),i.Xb()),2&e&&i.qc("demoId","dynamic-forms-demo-basic")},directives:[o.a,d],styles:[""]}),e})()}];let y=(()=>{class e{}return e.\u0275mod=i.Rb({type:e}),e.\u0275inj=i.Qb({factory:function(n){return new(n||e)},imports:[[s.f.forChild(h)],s.f]}),e})();var g=t("Krbs");t.d(n,"DynamicFormsDemoModule",(function(){return x}));let x=(()=>{class e{}return e.\u0275mod=i.Rb({type:e}),e.\u0275inj=i.Qb({factory:function(n){return new(n||e)},imports:[[g.a,y,r.a,c.c]]}),e})()}}]);