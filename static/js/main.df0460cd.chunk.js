(this["webpackJsonpteamvoy-3-final"]=this["webpackJsonpteamvoy-3-final"]||[]).push([[0],{37:function(n,e,t){"use strict";t.r(e);var r,a,i,c,o,s,l,d,u,p,b=t(2),m=t(0),j=t(10),h=t.n(j),f=t(4),x=t(11),g=t(9),O=t(5),v={fetchUrl:"https://pokeapi.co/api/v2/pokemon/?limit=12",itemCollection:[],isDescriptionActive:!1,currentPokemonId:null,currentCategory:null,isAskedForDownload:!1},y="MAKE_DESCRIPTION_ACTIVE",w="SET_CURRENT_POKEMON_ID",k="UPDATE_COLLECTION",C="CURRENT_CATEGORY",A="UPDATE_URL",N="DOWNLOAD_ITEMS",D=function(n){return{type:k,payload:n}},E=function(n){return{type:A,payload:n}},U=Object(x.b)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y:return Object(O.a)(Object(O.a)({},n),{},{isDescriptionActive:!0});case w:return Object(O.a)(Object(O.a)({},n),{},{currentPokemonId:e.payload});case k:return Object(O.a)(Object(O.a)({},n),{},{itemCollection:[].concat(Object(g.a)(n.itemCollection),Object(g.a)(e.payload))});case C:return Object(O.a)(Object(O.a)({},n),{},{currentCategory:e.payload});case A:return Object(O.a)(Object(O.a)({},n),{},{fetchUrl:e.payload});case N:return Object(O.a)(Object(O.a)({},n),{},{isAskedForDownload:!n.isAskedForDownload});default:return n}})),T=t(16),P=t.n(T),I=t(19),_=t(3),R=t(1),S=_.b.main(r||(r=Object(b.a)(["\n    outline: 2px dashed dodgerblue;\n    \n    width: 100%;\n    margin-right: auto;\n    margin-left: auto;\n    padding: 0 15px;\n    \n    @media (min-width:576px) {\n      max-width: 540px;\n      padding: 0;\n    }\n    \n    @media (min-width:768px) {\n      max-width: 720px;\n    }\n    \n    @media (min-width:1300px) {\n      max-width: 1024px;\n    }\n"]))),z=function(n){var e=n.children;return Object(R.jsx)(S,{children:e})},F=_.b.div(a||(a=Object(b.a)(["\n  border: 2px solid grey;\n  text-align: center;\n  width: 80%;\n  margin: 0 0 20px auto;\n  \n  h1 {\n    font-weight: 400;\n    padding: 5px 0;\n  }\n"]))),L=function(n){var e=n.title;return Object(R.jsx)(F,{children:Object(R.jsx)("h1",{children:e})})},M=t(13),J=_.b.div(i||(i=Object(b.a)(["\n  margin-bottom: 20px;\n  \n  .filter-list {\n    list-style-type: none;\n  }\n  \n  .filter-item {\n    display: inline-block;\n    padding: 5px 15px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n    margin-right: 4px;\n    background: transparent;\n    transition: 300ms ease-out;\n    color: #000;\n    cursor: pointer;\n    \n    &.active {\n      background-color: deepskyblue;\n    }\n    \n    &:hover {\n      background: steelblue;\n      color: #fff;\n    }\n  }\n"]))),K=Object(M.a)((function(n){return n.itemCollection}),(function(n){var e=n.reduce((function(n,e,t){for(var r=0;r<e.types.length;r++)n.push(e.types[r].type.name);return n}),[]);return Object(g.a)(new Set(e))})),W=function(){var n=Object(f.b)(),e=Object(f.c)(K),t=Object(f.c)((function(n){return n.currentCategory})),r=function(e){n({type:C,payload:e})},a="\n    filter-item \n    ".concat("all"===t?"active":"","\n    ").concat(null===t?"active":"","\n  ");return Object(R.jsx)(J,{children:Object(R.jsxs)("ul",{className:"filter-list",children:[Object(R.jsx)("li",{onClick:function(){return r("all")},className:a,children:"All"}),e.map((function(n){var e="\n            filter-item\n            ".concat(t===n?"active":"","\n          ");return Object(R.jsx)("li",{onClick:function(){return r(n)},className:e,children:n},n)}))]})})},B=t(23),G=_.b.div(c||(c=Object(b.a)(["\n  outline: 2px dashed magenta;\n\n  min-height: 180px; \n  height: fit-content;\n  padding: 10px;\n  \n  &.is-hidden {\n    display: none;\n  }\n \n  .avatar {\n    height: auto;\n    width: 100%;\n    max-width: 100%;\n    margin-bottom: 0.8rem;\n    max-height: 180px;\n  }\n  \n  .name {\n    text-align: center;\n    font-weight: 700;\n    text-transform: capitalize;\n    font-size: 1rem;\n    margin-bottom: 5px;\n  }\n"]))),V=_.b.div(o||(o=Object(b.a)(["\n  .tag-element {\n      display: inline-block;\n      font-style: normal;\n      padding: 5px 15px;\n      border-radius: 5px;\n      border: 1px solid red;\n      margin-right: 4px;\n      \n      filter: brightness(1);\n      transition: filter 300ms ease-out;\n      \n      &:hover {\n        filter: brightness(1.1);\n      }\n      \n      &:last-child {\n        margin-right: 0;\n      }\n  }\n"]))),Y=function(n){var e=n.tags;return Object(R.jsx)(V,{children:e.map((function(n){var e=n.type.name;return Object(R.jsx)("i",{className:"tag-element",children:e.charAt(0).toUpperCase()+e.slice(1)},n.slot)}))})},q=function(n){var e=n.pokemon,t=Object(f.b)(),r=Object(f.c)((function(n){return n.isDescriptionActive})),a=Object(f.c)((function(n){return n.currentCategory})),i=Object(m.useState)(""),c=Object(B.a)(i,2),o=c[0],s=c[1];Object(m.useEffect)((function(){e&&(e.types.reduce((function(n,e){var t=e.type.name.toString();switch(a){case null:case"all":case t:n.push(!0);break;default:n.push(!1)}return n}),[]).some((function(n){return!0===n}))?s(""):s("is-hidden"))}),[a]);var l=e.name,d=void 0===l?"-":l,u=e.id;d=d.charAt(0).toUpperCase()+d.slice(1);var p=function(){var n;t((n=e.id,{type:w,payload:n})),!1===r&&t(function(n){return{type:y,payload:n}}())};return Object(R.jsxs)(G,{className:o,onClick:function(){return p()},children:[Object(R.jsx)("img",{className:"avatar",src:"https://pokeres.bastionbot.org/images/pokemon/".concat(u,".png"),alt:""}),Object(R.jsx)("h2",{className:"name",children:d}),Object(R.jsx)(Y,{tags:e.types})]})},H=_.b.button(s||(s=Object(b.a)(["\n  width: 100%;\n  height: 40px;\n  background: dodgerblue;\n  border-radius: 5px;\n  border: 0;\n  outline: 0;\n  color: #fff;\n  font-size: 1.2rem;\n  font-weight: 700;\n  cursor: pointer;\n  \n  @media (min-width:576px) {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n  }\n"]))),Q=function(){var n=Object(f.b)();return Object(R.jsx)(H,{onClick:function(){return n({type:N,payload:e});var e},children:"Load More"})},X=_.b.div(l||(l=Object(b.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 20px;\n  padding-bottom: 60px;\n  \n  outline: 2px solid gold;\n    \n  @media (min-width:576px) {\n    position: relative;\n  }\n  \n  @media (min-width:1300px) {\n    width: 650px;\n  }\n"]))),Z=function(){var n=Object(f.c)((function(n){return n.itemCollection}));return Object(R.jsxs)(X,{children:[n.map((function(n,e){return Object(R.jsx)(q,{pokemon:n},e)})),Object(R.jsx)(Q,{})]})},$=function(n){var e=n.param,t=n.value;return Object(R.jsxs)("div",{className:"node",children:[Object(R.jsx)("div",{className:"first-node",children:e}),Object(R.jsx)("div",{className:"last-node",children:t})]})},nn=_.b.div(d||(d=Object(b.a)(["\n  border: 2px solid gray;\n\n  position: sticky;\n  top: 20px;\n  margin-top: 200px;\n  margin-left: 20px;\n  \n  height: fit-content;\n  max-width: 360px;\n  padding: 1rem;\n  \n  @media (min-width:1300px) {\n    width: 380px;\n  }\n  \n  .avatar {\n    height: auto;\n    max-width: 100%;\n    margin-bottom: 0.8rem;\n  }\n"]))),en=_.b.h2(u||(u=Object(b.a)(["\n  text-align: center;\n"]))),tn=_.b.div(p||(p=Object(b.a)(["\n  text-align: center;\n  font-size: 0.8rem;\n  line-height: 1.4rem;\n    \n  .node {\n    display: grid;\n    flex-flow:row wrap;\n    grid-template-columns: 2fr 1fr;\n    border: 1px solid #000;\n    border-bottom: none;\n    \n    &:last-child {\n    border-bottom: 1px solid #000;\n    }\n    \n    .first-node {\n      border-right: 1px solid #000;\n    }\n  }\n"])));function rn(n){var e=n.replace("special","SP");return e=(e=e.replace(/-/g," ")).length<3?e.toUpperCase():e.charAt(0).toUpperCase()+e.slice(1)}var an,cn=Object(M.a)((function(n){return n.itemCollection}),(function(n){return n.currentPokemonId}),(function(n,e){var t=n.filter((function(n){return n.id===e}));if(t.length<1)return{id:1,name:"000",weight:"000",stats:[{name:"attack",value:"000"},{name:"defense",value:"000"},{name:"hp",value:"000"},{name:"specialAttack",value:"000"},{name:"specialDefense",value:"000"},{name:"speed",value:"000"}],moves:"000"};var r,a=t[0],i=a.id,c=a.name,o=a.weight,s=a.stats;return{id:i,name:c,weight:o,stats:(r=s,r.map((function(n){return{name:rn(n.stat.name),value:n.base_stat}}))),moves:t[0].moves.length}})),on=function(){var n=Object(f.c)(cn),e=n.name.charAt(0).toUpperCase()+n.name.slice(1),t="#".concat(("00"+n.id).slice(-3));return Object(R.jsxs)(nn,{children:[Object(R.jsx)("img",{className:"avatar",src:"https://pokeres.bastionbot.org/images/pokemon/".concat(n.id,".png"),alt:""}),Object(R.jsx)(en,{children:"".concat(e," ").concat(t)}),Object(R.jsxs)(tn,{children:[Object(R.jsx)($,{param:"Type",value:"Fire"}),n.stats.map((function(n){var e=n.name,t=n.value;return Object(R.jsx)($,{param:e,value:t},e)})),Object(R.jsx)($,{param:"Weight",value:n.weight}),Object(R.jsx)($,{param:"Total moves",value:n.moves})]})]})},sn=_.b.div(an||(an=Object(b.a)(["\n  display: flex;\n"])));var ln,dn=function(){var n=Object(f.b)(),e=Object(f.c)((function(n){return n.fetchUrl})),t=Object(f.c)((function(n){return n.isDescriptionActive})),r=Object(f.c)((function(n){return n.isAskedForDownload}));return Object(m.useEffect)((function(){!function(n,e){function t(){return(t=Object(I.a)(P.a.mark((function n(t){var r,a,i,c;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=function(n){for(var e=[],t=0;t<n.length;t++){var r=n[t].url;e.push(fetch(r))}return Promise.all(e).then((function(n){return Promise.all(n.map((function(n){return n.json()})))}))},i=function(n){return fetch(n).then((function(n){return n.json()})).then((function(n){return e(E(n.next)),n.results}))},n.next=4,i(t);case 4:return r=n.sent,n.next=7,c(r);case 7:a=n.sent,e(D(a));case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(n){t.apply(this,arguments)}(n)}(e,n)}),[r]),Object(R.jsxs)(z,{children:[Object(R.jsx)(L,{title:"Pokedex"}),Object(R.jsx)(W,{}),Object(R.jsxs)(sn,{children:[Object(R.jsx)(Z,{}),t&&Object(R.jsx)(on,{})]})]})},un=Object(_.a)(ln||(ln=Object(b.a)(["\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n  font-family: 'Roboto', sans-serif;\n}\n"])));h.a.render(Object(R.jsxs)(f.a,{store:U,children:[Object(R.jsx)(un,{}),Object(R.jsx)(dn,{})]}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.df0460cd.chunk.js.map