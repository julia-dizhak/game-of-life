(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{11:function(e,t,n){e.exports=n(25)},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n(1),i=n(3),u=n(2);function l(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return Math.random()<.3},a=[],r=0;r<e;r++){a[r]=[];for(var c=0;c<t;c++)a[r][c]=n()}return a}var s=function(e,t,n){var a=e.length,r=e[0].length;return[[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]].reduce((function(c,o){var i=t+o[0],u=n+o[1];return i>=0&&i<a&&u>=0&&u<r&&e[i][u]?c+1:c}),0)},d=function(e){for(var t=e.slice(),n=e.length,a=e[0].length,r=0;r<n;r++)for(var c=0;c<a;c++){var o=s(e,r,c);!!e[r][c]?(o<2||o>3)&&(t[r][c]=!1):3==o&&(t[r][c]=!0)}return t},E={gridState:[],rows:20,cols:20,generation:0,isRunning:!1,speed:500};var f="undefined"===typeof window?null:window,g=f&&f.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.b,m=Object(i.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,n=l(20,20);switch(t.type){case"BOOTSTRAP_APP":return Object(u.a)(Object(u.a)({},e),{},{gridState:n});case"INIT_NEW_GENERATION":return Object(u.a)(Object(u.a)({},e),{},{generation:0,gridState:n});case"HANDLE_NEXT_GENERATION":var a=e.generation,r=e.gridState,c=r,o=d(c);return Object(u.a)(Object(u.a)({},e),{},{generation:a+1,gridState:o})}return e}),g()),b=n(8),N=n.n(b),O=function(e){var t=e.className;return r.a.createElement("div",{className:t})},v=function(e){for(var t=e.gridState,n=[],a=t.length,c=t[0].length,o=0;o<a;o++){for(var i=[],u=0;u<c;u++)i.push(r.a.createElement(O,{key:N()()+"".concat(a,",").concat(c),className:"col ".concat(t[o][u]?"alive":"dead")}));n.push(r.a.createElement("div",{key:N()()+"".concat(a),className:"row"},i))}return r.a.createElement("div",{className:"grid"},n)};n(24);var p=Object(o.b)((function(e){return{hello:e.hello}}))((function(e){var t=Object(o.d)((function(e){return e.gridState})),n=Object(o.d)((function(e){return e.isRunning})),c=Object(o.d)((function(e){return e.generation})),i=Object(o.c)();return Object(a.useEffect)((function(){i({type:"BOOTSTRAP_APP"})}),[]),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Conway's Game of Life"),t.length>0?r.a.createElement(v,{gridState:t}):null,r.a.createElement("div",{className:"controls"},r.a.createElement("p",null,"Generation: ".concat(c)),r.a.createElement("button",{type:"button"},"stop"),r.a.createElement("button",{type:"button"},"start"),r.a.createElement("button",{type:"button",disabled:n,onClick:function(){return i({type:"HANDLE_NEXT_GENERATION"})}},"Next generation in one step"),r.a.createElement("button",{type:"button",disabled:n,onClick:function(){return i({type:"INIT_NEW_GENERATION"})}},"Init new generation")))}));Object(c.render)(r.a.createElement(o.a,{store:m},r.a.createElement(p,null)),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.28d9dbcf.chunk.js.map