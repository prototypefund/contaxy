(this["webpackJsonpcontaxy-opyrator-extension"]=this["webpackJsonpcontaxy-opyrator-extension"]||[]).push([[0],{32:function(e,t,n){"use strict";(function(e){var a=n(0),o=n(55),c=n(54),i=n(34),r=(n(46),n(10));t.a=function(){var t=Object(a.useRef)("");return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)(i.a,{variant:"h1",children:"Deploy your Opyrator!"}),Object(r.jsx)(i.a,{children:"Upload an Opyrator file and deploy it via Contaxy!"}),Object(r.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(r.jsx)(c.a,{label:"File key",variant:"filled",inputRef:t}),Object(r.jsx)(o.a,{variant:"contained",onClick:function(){var n="".concat(window.location.pathname.split("/ui/")[0],"/deploy"),a=new e.FormData;a.append("filekey",t.current.value),e.fetch(n,{method:"POST",body:a}).then((function(e){return console.log(e)}))},children:"Submit"})]})]})})}}).call(this,n(45))},44:function(e,t,n){},46:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(8),i=n.n(c),r=(n(44),n(32)),l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,89)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),o(e),c(e),i(e)}))},s=n(10);i.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(r.a,{})}),document.getElementById("root")),l()}},[[53,1,2]]]);
//# sourceMappingURL=main.c33ab2e2.chunk.js.map