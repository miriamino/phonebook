(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},37:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),o=t.n(u),c=t(4),l=t(2),i=function(e){var n=e.value,t=e.onChange;return r.a.createElement("form",null,r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t})))},m=function(e){var n=e.onSubmit,t=e.nameValue,a=e.numberValue,u=e.nameChange,o=e.numberChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:u})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:o})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))))},f=function(e){var n=e.person,t=e.removePerson;return r.a.createElement(r.a.Fragment,null,n.name," ",n.number," ",r.a.createElement("button",{onClick:function(){return t(n)}},"delete"),r.a.createElement("br",null))},s=function(e){var n=e.persons,t=e.filterValue,a=e.removePerson;return r.a.createElement(r.a.Fragment,null,n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return r.a.createElement(f,{key:e.id,person:e,removePerson:a})})))},d=function(e){var n=e.message,t=e.className;return null===n?null:r.a.createElement("div",{className:t},n)},b=t(3),h=t.n(b),p="/api/persons",v=function(){return h.a.get(p).then((function(e){return e.data}))},E=function(e){return h.a.post(p,e).then((function(e){return e.data}))},g=function(e){return h.a.delete("".concat(p,"/").concat(e))},j=function(e,n){return h.a.put("".concat(p,"/").concat(e),n).then((function(e){return e.data}))},O=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],o=Object(a.useState)(""),f=Object(l.a)(o,2),b=f[0],h=f[1],p=Object(a.useState)(""),O=Object(l.a)(p,2),w=O[0],C=O[1],S=Object(a.useState)(""),k=Object(l.a)(S,2),V=k[0],y=k[1],N=Object(a.useState)(null),P=Object(l.a)(N,2),T=P[0],F=P[1],D=Object(a.useState)(""),I=Object(l.a)(D,2),J=I[0],L=I[1];Object(a.useEffect)((function(){v().then((function(e){u(e)}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(d,{message:T,className:J}),r.a.createElement(i,{value:V,onChange:function(e){y(e.target.value)}}),r.a.createElement("h2",null,"add a new"),r.a.createElement(m,{onSubmit:function(e){if(e.preventDefault(),t.map((function(e){return e.name})).includes(b)){if(window.confirm('"'.concat(b,'" is already added to phonebook, replace old number with a new one?'))){var n=t.find((function(e){return e.name===b})),a=Object(c.a)(Object(c.a)({},n),{},{number:w});j(n.id,a).then((function(e){u(t.map((function(t){return t.id!==n.id?t:e}))),h(""),C(""),F('Number of "'.concat(b,'" replaced')),L("notification"),setTimeout((function(){F(null)}),5e3)})).catch((function(e){F(e.response.data.error),L("error"),setTimeout((function(){F(null)}),5e3)}))}}else E({name:b,number:w}).then((function(e){u(t.concat(e)),h(""),C(""),F('Added "'.concat(b,'"')),L("notification"),setTimeout((function(){F(null)}),5e3)})).catch((function(e){F(e.response.data.error),L("error"),setTimeout((function(){F(null)}),5e3)}))},nameValue:b,numberValue:w,nameChange:function(e){h(e.target.value)},numberChange:function(e){C(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(s,{persons:t,filterValue:V,removePerson:function(e){window.confirm("Delete ".concat(e.name,"?"))&&g(e.id).then((function(){return u(t.filter((function(n){return n.id!==e.id})))})).catch((function(n){F('Information of "'.concat(e.name,'" has already been removed from server')),L("error"),setTimeout((function(){F(null)}),5e3),u(t.filter((function(n){return n.name!==e.name})))}))}}))};t(37);o.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3f6dee77.chunk.js.map