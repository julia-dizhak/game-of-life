(this["webpackJsonpgame-of-life"]=this["webpackJsonpgame-of-life"]||[]).push([[0],{10:function(e,t,n){e.exports=n(22)},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n(2),i=n(3),u=n(1);function l(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return Math.random()<.3},a=[],r=0;r<e;r++){a[r]=[];for(var c=0;c<t;c++)a[r][c]=n()}return a}var E=function(e,t,n){var a=e.length,r=e[0].length;return[[1,0],[-1,0],[0,1],[0,-1],[-1,-1],[-1,1],[1,1],[1,-1]].reduce((function(c,o){var i=t+o[0],u=n+o[1];return i>=0&&i<a&&u>=0&&u<r&&e[i][u]?c+1:c}),0)},N=function(e){for(var t=JSON.parse(JSON.stringify(e)),n=t.length,a=t[0].length,r=0;r<n;r++)for(var c=0;c<a;c++){var o=E(e,r,c);!!e[r][c]?(o<2||o>3)&&(t[r][c]=!1):3===o&&(t[r][c]=!0)}return t},s={BOOTSTRAP_APP:"BOOTSTRAP_APP",INIT_NEW_GENERATION:"INIT_NEW_GENERATION",HANDLE_NEXT_GENERATION:"HANDLE_NEXT_GENERATION",HANDLE_RUN:"HANDLE_RUN",HANDLE_STOP:"HANDLE_STOP"},O={gridState:[],rows:20,cols:20,generation:0,isRunning:!1,speed:500};var d="undefined"===typeof window?null:window,f=d&&d.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.b,g=Object(i.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0,n=l(20,20);switch(t.type){case s.BOOTSTRAP_APP:return Object(u.a)(Object(u.a)({},e),{},{gridState:n});case s.INIT_NEW_GENERATION:return Object(u.a)(Object(u.a)({},e),{},{generation:0,gridState:n});case s.HANDLE_NEXT_GENERATION:var a=e.generation,r=e.gridState,c=r,o=N(c);return Object(u.a)(Object(u.a)({},e),{},{generation:a+1,gridState:o});case s.HANDLE_RUN:return Object(u.a)(Object(u.a)({},e),{},{isRunning:!0});case s.HANDLE_STOP:return Object(u.a)(Object(u.a)({},e),{},{isRunning:!1})}return e}),f()),_=function(e){var t=e.className;return r.a.createElement("div",{className:t})},m=function(e){for(var t=e.gridState,n=[],a=t.length,c=t[0].length,o=0;o<a;o++){for(var i=[],u=0;u<c;u++)i.push(r.a.createElement(_,{key:"".concat(o,",").concat(u),className:"col ".concat(t[o][u]?"alive":"dead")}));n.push(r.a.createElement("div",{key:"".concat(o),className:"row"},i))}return r.a.createElement("div",{className:"grid"},n)};n(21);var v=Object(o.b)((function(e){return{hello:e.hello}}))((function(){var e=Object(o.e)((function(e){return{gridState:e.gridState,generation:e.generation,isRunning:e.isRunning,speed:e.speed}}),o.c),t=e.gridState,n=e.generation,c=e.isRunning,i=e.speed,u=Object(o.d)();return Object(a.useEffect)((function(){u({type:s.BOOTSTRAP_APP})}),[]),Object(a.useEffect)((function(){var e;return c&&(e=setInterval((function(){u({type:s.HANDLE_NEXT_GENERATION})}),i)),c||clearInterval(e),function(){return clearInterval(e)}}),[c,i]),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Conway's Game of Life"),t.length>0?r.a.createElement(m,{gridState:t}):null,r.a.createElement("div",{className:"generation"},r.a.createElement("p",null,"Generation: ".concat(n))),r.a.createElement("div",{className:"controls"},r.a.createElement("div",{className:"upper-controls"},function(e){return e?r.a.createElement("button",{type:"button",onClick:function(){return u({type:s.HANDLE_STOP})}},"Stop"):r.a.createElement("button",{type:"button",onClick:function(){return u({type:s.HANDLE_RUN})}},"Start")}(c)),r.a.createElement("div",{className:"bottom-controls"},r.a.createElement("button",{type:"button",disabled:c,onClick:function(){return u({type:s.HANDLE_NEXT_GENERATION})}},"Next generation in one step"),r.a.createElement("button",{type:"button",disabled:c,onClick:function(){return u({type:s.INIT_NEW_GENERATION})}},"Init new generation"))))}));Object(c.render)(r.a.createElement(o.a,{store:g},r.a.createElement(v,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.dbd39c2e.chunk.js.map