(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"+RwD":function(n,l){n.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col-md-6<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component-list</span> <span class="token attr-name">ng-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>vm.components<span class="token punctuation">"</span></span> <span class="token attr-name">min-components</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>component</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>form-control<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Enter text<span class="token punctuation">"</span></span> <span class="token attr-name">ng-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>model<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>component-list</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',example:'<div class="row">\n    <div class="col-md-6">\n        <component-list ng-model="vm.components" min-components="1">\n            <component>\n                <input type="text" class="form-control" placeholder="Enter text" ng-model="model">\n            </component>\n        </component-list>\n    </div>\n</div>'}},"/w20":function(n,l,a){"use strict";a.r(l);var t=a("CcnG"),e=a("T/2f"),s=a("YZ8U"),p=a("mrSG"),o=a("AVdU"),u=a("yHOM"),c=a("W9B5"),i=function(n){function l(){var l=n.call(this,a("KlwE"))||this;return l.playground=Object(c.a)({html:l.snippets.raw.componentListHtml,htmlAttributes:{"ng-controller":"ComponentListDemoCtrl as vm"},js:[l.snippets.raw.componentListJs]}),l}return Object(p.__extends)(l,n),Object(p.__decorate)([Object(u.a)("ComponentsComponentListNg1Component")],l)}(o.a),d={category:s.b.resolveCategoryData(s.a.Components,"Component List")},m=function(){return function(n,l){l.registerResolver(n)}}(),r=a("WmtN"),k=a("HRZI"),g=a("pMnS"),b=a("GBPT"),f=a("rYg0"),h=a("Cr8N"),v=a("f5YR"),y=a("r1ng"),C=a("COk8"),w=a("9hoY"),x=a("+gXg"),D=a("rpQh"),N=a("2RDK"),L=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function O(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"uxd-component-list-wrapper",[],null,null,null,null,null)),t["\u0275did"](1,999424,null,0,h.a,[t.ElementRef,t.Injector],null,null),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](3,0,null,null,0,"hr",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](5,0,null,null,7,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["The "])),(n()(),t["\u0275eld"](7,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["component-list"])),(n()(),t["\u0275ted"](-1,null,[" directive allows you to add or remove instances of the same component. \nIt should be given an "])),(n()(),t["\u0275eld"](10,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["ng-model"])),(n()(),t["\u0275ted"](-1,null,[" containing an array. If the array has any items components will initially be created for those values.\nThis array will be updated when a new field is added or when a component changes its model."])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](14,0,null,null,16,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["You should provide the html for the component you want to duplicate in a "])),(n()(),t["\u0275eld"](16,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["component"])),(n()(),t["\u0275ted"](-1,null,[" tag inside the "])),(n()(),t["\u0275eld"](19,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["component-list"])),(n()(),t["\u0275ted"](-1,null,[" directive. \nEach component will have a property called "])),(n()(),t["\u0275eld"](22,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["model"])),(n()(),t["\u0275ted"](-1,null,[" available in its scope. \nYour component should update this property which will update the "])),(n()(),t["\u0275eld"](25,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["ng-model"])),(n()(),t["\u0275ted"](-1,null,[" on the "])),(n()(),t["\u0275eld"](28,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["component-list"])),(n()(),t["\u0275ted"](-1,null,["."])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](32,0,null,null,18,"ux-tabset",[],[[2,"tabs-left",null],[2,"tabs-right",null]],null,null,k.B,k.l)),t["\u0275prd"](512,null,v.ke,v.ke,[]),t["\u0275did"](34,5423104,null,1,v.ie,[v.ke],{minimal:[0,"minimal"]},null),t["\u0275qud"](603979776,1,{tabs:1}),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](37,0,null,0,5,"ux-tab",[["heading","HTML"]],null,null,null,k.A,k.k)),t["\u0275did"](38,180224,[[1,4]],0,v.ce,[v.ke],{heading:[0,"heading"]},null),(n()(),t["\u0275ted"](-1,0,["\n        "])),(n()(),t["\u0275eld"](40,0,null,0,1,"uxd-snippet",[["language","html"]],null,null,null,y.b,y.a)),t["\u0275did"](41,114688,null,0,C.a,[],{language:[0,"language"],content:[1,"content"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](44,0,null,0,5,"ux-tab",[["heading","JavaScript"]],null,null,null,k.A,k.k)),t["\u0275did"](45,180224,[[1,4]],0,v.ce,[v.ke],{heading:[0,"heading"]},null),(n()(),t["\u0275ted"](-1,0,["\n        "])),(n()(),t["\u0275eld"](47,0,null,0,1,"uxd-snippet",[["language","javascript"]],null,null,null,y.b,y.a)),t["\u0275did"](48,114688,null,0,C.a,[],{language:[0,"language"],content:[1,"content"]},null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275ted"](-1,0,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](52,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Use the following attributes to customize the behavior of the component:"])),(n()(),t["\u0275ted"](-1,null,["\n\n"])),(n()(),t["\u0275eld"](55,0,null,null,26,"uxd-api-properties",[],null,null,null,w.b,w.a)),t["\u0275did"](56,49152,null,0,x.a,[],null,null),(n()(),t["\u0275ted"](-1,0,["\n    "])),(n()(),t["\u0275eld"](58,0,null,0,23,"tbody",[],null,null,null,null,null)),(n()(),t["\u0275eld"](59,0,null,null,5,"tr",[["binding","variable"],["defaultValue","0"],["name","min-components"],["type","number"],["uxd-api-property",""]],null,null,null,D.b,D.a)),t["\u0275did"](60,49152,null,0,N.a,[],{name:[0,"name"],type:[1,"type"],defaultValue:[2,"defaultValue"],binding:[3,"binding"]},null),(n()(),t["\u0275ted"](-1,0,["\n      Specifies the minimum number of components that will be displayed. If no values have been set for \n      these components in the "])),(n()(),t["\u0275eld"](62,0,null,0,1,"code",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["ng-model"])),(n()(),t["\u0275ted"](-1,0,[" then the default value they will be given is null.\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](66,0,null,null,2,"tr",[["binding","variable"],["name","max-components"],["type","number"],["uxd-api-property",""]],null,null,null,D.b,D.a)),t["\u0275did"](67,49152,null,0,N.a,[],{name:[0,"name"],type:[1,"type"],binding:[2,"binding"]},null),(n()(),t["\u0275ted"](-1,0,["\n      Specifies the maximum number of components that will be displayed. The add button will be disabled \n      when the limit has been reached. By default there is no limit.\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](70,0,null,null,2,"tr",[["binding","literal"],["defaultValue","Add a field"],["name","button-text"],["type","string"],["uxd-api-property",""]],null,null,null,D.b,D.a)),t["\u0275did"](71,49152,null,0,N.a,[],{name:[0,"name"],type:[1,"type"],defaultValue:[2,"defaultValue"],binding:[3,"binding"]},null),(n()(),t["\u0275ted"](-1,0,["\n      Specifies the text to be displayed beside the add button.\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](74,0,null,null,2,"tr",[["binding","variable"],["name","on-add"],["type","function"],["uxd-api-property",""]],null,null,null,D.b,D.a)),t["\u0275did"](75,49152,null,0,N.a,[],{name:[0,"name"],type:[1,"type"],binding:[2,"binding"]},null),(n()(),t["\u0275ted"](-1,0,["\n      If specified the function will be called when a new item is being added to the list.\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](78,0,null,null,2,"tr",[["binding","variable"],["name","on-remove"],["type","function"],["uxd-api-property",""]],null,null,null,D.b,D.a)),t["\u0275did"](79,49152,null,0,N.a,[],{name:[0,"name"],type:[1,"type"],binding:[2,"binding"]},null),(n()(),t["\u0275ted"](-1,0,["\n      If specified the function will be called when an item is being removed from the list.\n    "])),(n()(),t["\u0275ted"](-1,null,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n"]))],function(n,l){var a=l.component;n(l,1,0),n(l,34,0,!1),n(l,38,0,"HTML"),n(l,41,0,"html",a.snippets.compiled.componentListHtml),n(l,45,0,"JavaScript"),n(l,48,0,"javascript",a.snippets.compiled.componentListJs),n(l,60,0,"min-components","number","0","variable"),n(l,67,0,"max-components","number","variable"),n(l,71,0,"button-text","string","Add a field","literal"),n(l,75,0,"on-add","function","variable"),n(l,79,0,"on-remove","function","variable")},function(n,l){n(l,32,0,"left"===t["\u0275nov"](l,34).stacked,"right"===t["\u0275nov"](l,34).stacked)})}function E(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"uxd-component-list-ng1",[],null,null,null,O,L)),t["\u0275did"](1,49152,null,0,i,[],null,null)],null,null)}var M=t["\u0275ccf"]("uxd-component-list-ng1",i,E,{},{},[]),T=a("Ip0R"),j=a("dWZg"),R=a("lLAP"),U=a("x4zH"),A=a("gIcY"),I=a("Fzqc"),Z=a("qAlS"),F=a("eDkP"),_=a("M2Lx"),S=a("qina"),Y=a("zCE2"),H=a("4c35"),V=a("ZYCi"),q=a("FLOw"),z=a("XtaT");a.d(l,"ComponentsListModuleNgFactory",function(){return B});var B=t["\u0275cmf"](m,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,k.q,k.a,g.a,b.a,f.a,M]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,T.NgLocalization,T.NgLocaleLocalization,[t.LOCALE_ID,[2,T["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,j.a,j.a,[]),t["\u0275mpd"](4608,R.i,R.i,[j.a]),t["\u0275mpd"](4608,R.h,R.h,[R.i,t.NgZone,T.DOCUMENT]),t["\u0275mpd"](136192,R.c,R.b,[[3,R.c],T.DOCUMENT]),t["\u0275mpd"](5120,R.l,R.k,[[3,R.l],[2,R.j],T.DOCUMENT]),t["\u0275mpd"](5120,R.g,R.e,[[3,R.g],t.NgZone,j.a]),t["\u0275mpd"](5120,v.C,v.p,[[3,v.C],[2,v.q]]),t["\u0275mpd"](4608,v.c,v.c,[[2,v.a]]),t["\u0275mpd"](4608,v.I,v.I,[]),t["\u0275mpd"](5120,v.Nb,v.gb,[[3,v.Nb]]),t["\u0275mpd"](4608,v.Ob,v.Ob,[R.g,v.c,v.Nb,[2,v.a],t.RendererFactory2]),t["\u0275mpd"](4608,v.gc,v.gc,[t.RendererFactory2]),t["\u0275mpd"](5120,"flotDataService",U.b,["$injector"]),t["\u0275mpd"](5120,"lineDataService",U.c,["$injector"]),t["\u0275mpd"](4608,A.p,A.p,[]),t["\u0275mpd"](4608,A.c,A.c,[]),t["\u0275mpd"](4608,v.Zc,v.Zc,[]),t["\u0275mpd"](6144,I.b,null,[T.DOCUMENT]),t["\u0275mpd"](4608,I.c,I.c,[[2,I.b]]),t["\u0275mpd"](5120,Z.c,Z.a,[[3,Z.c],t.NgZone,j.a]),t["\u0275mpd"](5120,Z.f,Z.e,[[3,Z.f],j.a,t.NgZone]),t["\u0275mpd"](4608,F.f,F.f,[Z.c,Z.f,t.NgZone,T.DOCUMENT]),t["\u0275mpd"](5120,F.b,F.g,[[3,F.b],T.DOCUMENT]),t["\u0275mpd"](4608,F.e,F.e,[Z.f,T.DOCUMENT]),t["\u0275mpd"](5120,F.c,F.j,[[3,F.c],T.DOCUMENT]),t["\u0275mpd"](4608,F.a,F.a,[F.f,F.b,t.ComponentFactoryResolver,F.e,F.c,t.ApplicationRef,t.Injector,t.NgZone,T.DOCUMENT]),t["\u0275mpd"](5120,F.h,F.i,[F.a]),t["\u0275mpd"](4608,_.b,_.b,[]),t["\u0275mpd"](4608,v.Be,v.Be,[]),t["\u0275mpd"](1073742336,T.CommonModule,T.CommonModule,[]),t["\u0275mpd"](1073742336,j.b,j.b,[]),t["\u0275mpd"](1073742336,R.a,R.a,[]),t["\u0275mpd"](1073742336,v.D,v.D,[]),t["\u0275mpd"](1073742336,v.b,v.b,[]),t["\u0275mpd"](1073742336,U.a,U.a,[]),t["\u0275mpd"](1073742336,v.je,v.je,[]),t["\u0275mpd"](1073742336,A.n,A.n,[]),t["\u0275mpd"](1073742336,A.d,A.d,[]),t["\u0275mpd"](1073742336,v.Kb,v.Kb,[]),t["\u0275mpd"](1073742336,A.l,A.l,[]),t["\u0275mpd"](1073742336,v.i,v.i,[]),t["\u0275mpd"](1073742336,S.a,S.a,[]),t["\u0275mpd"](1073742336,Y.a,Y.a,[]),t["\u0275mpd"](1073742336,v.fb,v.fb,[]),t["\u0275mpd"](1073742336,v.Yc,v.Yc,[]),t["\u0275mpd"](1073742336,I.a,I.a,[]),t["\u0275mpd"](1073742336,H.c,H.c,[]),t["\u0275mpd"](1073742336,Z.b,Z.b,[]),t["\u0275mpd"](1073742336,F.d,F.d,[]),t["\u0275mpd"](1073742336,_.c,_.c,[]),t["\u0275mpd"](1073742336,v.y,v.y,[]),t["\u0275mpd"](1073742336,v.Ae,v.Ae,[]),t["\u0275mpd"](1073742336,v.cd,v.cd,[]),t["\u0275mpd"](1073742336,V.p,V.p,[[2,V.v],[2,V.m]]),t["\u0275mpd"](1073742336,v.wd,v.wd,[]),t["\u0275mpd"](1073742336,q.a,q.a,[]),t["\u0275mpd"](1073742336,z.a,z.a,[]),t["\u0275mpd"](1073742336,m,m,[t.ComponentFactoryResolver,s.b]),t["\u0275mpd"](1024,V.k,function(){return[[{path:"**",component:e.a,data:d}]]},[])])})},"8UEA":function(n,l){n.exports={snippet:'angular<span class="token punctuation">.</span><span class="token function">module</span><span class="token punctuation">(</span><span class="token string">\'app\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">controller</span><span class="token punctuation">(</span><span class="token string">\'ComponentListDemoCtrl\'</span><span class="token punctuation">,</span> ComponentListDemoCtrl<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">ComponentListDemoCtrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n\n    vm<span class="token punctuation">.</span>components <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n',example:"angular.module('app').controller('ComponentListDemoCtrl', ComponentListDemoCtrl);\n\nfunction ComponentListDemoCtrl() {\n    var vm = this;\n\n    vm.components = [];\n}\n"}},KlwE:function(n,l,a){var t={"./component-list.html":"+RwD","./component-list.js":"8UEA"};function e(n){var l=s(n);return a(l)}function s(n){var l=t[n];if(!(l+1)){var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}return l}e.keys=function(){return Object.keys(t)},e.resolve=s,n.exports=e,e.id="KlwE"}}]);