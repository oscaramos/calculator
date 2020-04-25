(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(4),r=a.n(i),l=(a(13),a(1)),o=a(2),c=a(6),u=a(5),h=a(7),v=function(e){var t=e.isNumeric,a=e.isOperator,s=e.value,i=Object(h.a)(e,["isNumeric","isOperator","value"]);return a?n.a.createElement("div",Object.assign({className:"key operator-key"},i),n.a.createElement("span",null,s)):t?n.a.createElement("div",Object.assign({className:"key numeric-key"},i),n.a.createElement("span",null,s)):n.a.createElement("div",null)},m=function(){function e(){Object(l.a)(this,e),this.state={lastvalue:"",left:"",right:"",op:null,op_symbol:"",MAXDIG:8,err:!1}}return Object(o.a)(e,[{key:"getScreen",value:function(){var e=this.state,t=e.right,a=e.op,s=e.op_symbol,n=e.left,i=e.lastvalue,r="";return e.err?r+="ERR":(i&&(r+=i),n&&(r+=n),null!=a&&(r+=s),t&&(r+=t)),r}},{key:"dig",value:function(e){var t=this.state,a=t.op,s=t.right,n=t.left,i=t.lastvalue;if(this.toLastValue()&&(a&&(this.state.left=i),this.state.lastvalue=null),this.toLeft()){var r=n+e.toString();r.length<=this.state.MAXDIG&&(this.state.left=r)}else{var l=s+e.toString();l.length<=this.state.MAXDIG&&(this.state.right=l)}return this}},{key:"dot",value:function(){return this.dig(".")}},{key:"num",value:function(e){var t=this;return e.toString().split().forEach((function(e){return t.dig(e)})),this}},{key:"equal",value:function(){var e=this.state,t=e.left,a=e.right,s=e.op;if(s){var n=s(Number.parseFloat(t),Number.parseFloat(a));n=Math.round(1e3*n)/1e3,this.state.lastvalue=n.toString(),this.state.lastvalue.length>this.state.MAXDIG&&(this.state.err=!0)}return this.state.left="",this.state.op=null,this.state.op_symbol="",this.state.right="",this}},{key:"plus",value:function(){return this.state.op=function(e,t){return e+t},this.state.op_symbol="+",this}},{key:"minus",value:function(){return this.state.op=function(e,t){return e-t},this.state.op_symbol="-",this}},{key:"mult",value:function(){return this.state.op=function(e,t){return e*t},this.state.op_symbol="*",this}},{key:"divi",value:function(){return this.state.op=function(e,t){return Math.floor(e/t)},this.state.op_symbol="/",this}},{key:"AC",value:function(){return this.state.lastvalue=null,this.state.left="",this.state.right="",this.state.op=null,this.state.op_symbol="",this.state.err=!1,this}},{key:"C",value:function(){return this.toLastValue()&&(this.state.lastvalue=""),this.toLeft()?this.state.left="":this.state.right="",this}},{key:"sign",value:function(){var e=this.state,t=e.left,a=e.right,s=e.lastvalue;return this.toLastValue()?this.state.lastvalue=-s:this.toLeft()?this.state.left=-t:this.state.right=-a,this}},{key:"del",value:function(){var e=this.state,t=e.left,a=e.right,s=e.lastvalue;return this.toLastValue()?this.state.lastvalue=s.slice(0,-1):this.toLeft()?this.state.left=t.slice(0,-1):this.state.right=a.slice(0,-1),this}},{key:"toLeft",value:function(){return null===this.state.op}},{key:"toLastValue",value:function(){return this.state.lastvalue}}]),e}(),f=(a(14),function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onPressKey=function(e){return function(){var t=s.state.calculator;/\d/.exec(e)&&t.dig(parseInt(e)),"+"===e&&t.plus(),"-"===e&&t.minus(),"x"===e&&t.mult(),"/"===e&&t.divi(),"="===e&&t.equal(),"AC"===e&&t.AC(),"C"===e&&t.C(),"+/-"===e&&t.sign(),"."===e&&t.dot(),"\u232b"===e&&t.del(),s.setState({screen:t.getScreen()})}},s.state={calculator:new m,screen:0},s}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.screen;return n.a.createElement("div",{className:"App"},n.a.createElement("div",{className:"calculator"},n.a.createElement("div",{className:"screen"},n.a.createElement("div",{className:"screen"},n.a.createElement("div",{className:"screen-text"},e))),n.a.createElement("div",{className:"keys"},n.a.createElement("div",{className:"operations"},n.a.createElement(v,{isNumeric:!0,value:"AC",onClick:this.onPressKey("AC")}),n.a.createElement(v,{isNumeric:!0,value:"C",onClick:this.onPressKey("C")}),n.a.createElement(v,{isNumeric:!0,value:"\u232b",onClick:this.onPressKey("\u232b")})),n.a.createElement("div",{className:"numeric"},n.a.createElement(v,{isNumeric:!0,value:"7",onClick:this.onPressKey("7")}),n.a.createElement(v,{isNumeric:!0,value:"8",onClick:this.onPressKey("8")}),n.a.createElement(v,{isNumeric:!0,value:"9",onClick:this.onPressKey("9")}),n.a.createElement(v,{isNumeric:!0,value:"4",onClick:this.onPressKey("4")}),n.a.createElement(v,{isNumeric:!0,value:"5",onClick:this.onPressKey("5")}),n.a.createElement(v,{isNumeric:!0,value:"6",onClick:this.onPressKey("6")}),n.a.createElement(v,{isNumeric:!0,value:"1",onClick:this.onPressKey("1")}),n.a.createElement(v,{isNumeric:!0,value:"2",onClick:this.onPressKey("2")}),n.a.createElement(v,{isNumeric:!0,value:"3",onClick:this.onPressKey("3")}),n.a.createElement(v,{isNumeric:!0,value:"+/-",onClick:this.onPressKey("+/-")}),n.a.createElement(v,{isNumeric:!0,value:"0",onClick:this.onPressKey("0")}),n.a.createElement(v,{isNumeric:!0,value:".",onClick:this.onPressKey(".")})),n.a.createElement("div",{className:"operators"},n.a.createElement(v,{isOperator:!0,value:"/",onClick:this.onPressKey("/")}),n.a.createElement(v,{isOperator:!0,value:"x",onClick:this.onPressKey("x")}),n.a.createElement(v,{isOperator:!0,value:"-",onClick:this.onPressKey("-")}),n.a.createElement(v,{isOperator:!0,value:"+",onClick:this.onPressKey("+")}),n.a.createElement(v,{isOperator:!0,value:"=",onClick:this.onPressKey("=")})))))}}]),a}(n.a.Component)),p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/calculator",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/calculator","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var s=a.headers.get("content-type");404===a.status||null!=s&&-1===s.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):d(t,e)}))}}()},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.06bbead3.chunk.js.map