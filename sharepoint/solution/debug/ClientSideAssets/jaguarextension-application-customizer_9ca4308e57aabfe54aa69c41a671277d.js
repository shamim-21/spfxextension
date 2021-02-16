define("de039fee-e585-408d-b370-da81ce327b18_0.1.2",["JaguarextensionApplicationCustomizerStrings","@microsoft/sp-application-base","@microsoft/sp-lodash-subset","@microsoft/sp-core-library","@microsoft/decorators"],function(e,t,o,n,r){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s="685k")}({"685k":function(e,t,o){"use strict";o.r(t);var n=o("wxtz"),r=o("UWqr"),i=o("GPet"),a=o("E+Cm");o("cyMT");var l,s={app:"app_d78a8b28",top:"top_d78a8b28",logo:"logo_d78a8b28",bottom:"bottom_d78a8b28"},c=o("Pk8u"),u=(l=function(e,t){return(l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)},function(e,t){function o(){this.constructor=e}l(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}),p=function(e,t,o,n){var r,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(i<3?r(a):i>3?r(t,o,a):r(t,o))||a);return i>3&&a&&Object.defineProperty(t,o,a),a},f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),t.prototype.onInit=function(){return r.Log.info("JaguarextensionApplicationCustomizer","Initialized "+a.Title),this.context.placeholderProvider.changedEvent.add(this,this._renderPlaceHolders),Promise.resolve()},t.prototype._renderPlaceHolders=function(){if(console.log("JaguarextensionApplicationCustomizer._renderPlaceHolders()"),console.log("Available placeholders: ",this.context.placeholderProvider.placeholderNames.map(function(e){return i.PlaceholderName[e]}).join(",")),!this._topPlaceholder){if(this._topPlaceholder=this.context.placeholderProvider.tryCreateContent(i.PlaceholderName.Top,{onDispose:this._onDispose}),!this._topPlaceholder)return void console.error("The expected placeholdere (Top) was not found");if(this.properties){var e=this.properties.Top;e||(e="(Top property was not defined)");var t=this.properties.Logo;t||console.error("Logo URL was not defined"),this._topPlaceholder.domElement&&(this._topPlaceholder.domElement.innerHTML='\n          <div class = "'+s.app+'">\n          <div class= "'+s.top+'">\n          <div class="'+s.logo+'"><a href= "'+this.context.pageContext.web.absoluteUrl+'"> \n          <img src="'+Object(c.escape)(t)+'" alt="'+Object(c.escape)(e)+'"/></a><h1>'+Object(c.escape)(e)+"</h1> </div>\n         \n          </div>\n          </div>")}}if(!this._bottomPlaceholder){if(this._bottomPlaceholder=this.context.placeholderProvider.tryCreateContent(i.PlaceholderName.Bottom,{onDispose:this._onDispose}),!this._bottomPlaceholder)return void console.error("The expected placeholdere (Bottom) was not found");if(this.properties){var o=this.properties.Bottom;o||(o="(Bottom property was not defined)"),this._bottomPlaceholder.domElement&&(this._bottomPlaceholder.domElement.innerHTML='\n          <div class = "'+s.app+'">\n          <div class= "'+s.bottom+'">\n          <i class="ms-Icon ms-Tcon--Info" aria-hidden="true"></i> '+Object(c.escape)(o)+"\n          </div>\n        </div>")}}},t.prototype._onDispose=function(){console.log("[HelloWorldApplicationCustomizer._onDispose] Disposed custom top and bottom part")},p([n.override],t.prototype,"onInit",null),t}(i.BaseApplicationCustomizer);t.default=f},"E+Cm":function(t,o){t.exports=e},GPet:function(e,o){e.exports=t},JPst:function(e,t,o){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=function(e,t){var o=e[1]||"",n=e[3];if(!n)return o;if(t&&"function"==typeof btoa){var r=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=n.sources.map(function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"});return[o].concat(i).concat([r]).join("\n")}var a;return[o].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];null!=i&&(n[i]=!0)}for(r=0;r<e.length;r++){var a=e[r];null!=a[0]&&n[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),t.push(a))}},t}},M1bq:function(e,t,o){(e.exports=o("JPst")(!1)).push([e.i,'.app_d78a8b28 .top_d78a8b28{height:80px;text-align:left;line-height:.5;font-weight:700;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:left;-ms-flex-align:left;align-items:left;-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left;background-color:"[theme:themePrimary, default: #0078d4]";color:"[theme:white, default: #ffffff]"}.app_d78a8b28 .top_d78a8b28 .logo_d78a8b28{max-width:100px}.app_d78a8b28 .top_d78a8b28 .logo_d78a8b28 IMG{max-width:100%;height:80px}.app_d78a8b28 .top_d78a8b28 h1{position:absolute;top:10px;left:120px}.app_d78a8b28 .bottom_d78a8b28{height:40px;text-align:center;line-height:2.5;font-weight:700;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:left;-ms-flex-align:left;align-items:left;-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left;background-color:"[theme:themePrimary, default: #0078d4]";color:"[theme:white, default: #ffffff]"}',""])},Pk8u:function(e,t){e.exports=o},UWqr:function(e,t){e.exports=n},cyMT:function(e,t,o){var n=o("M1bq"),r=o("ruv1");"string"==typeof n&&(n=[[e.i,n]]);for(var i=0;i<n.length;i++)r.loadStyles(n[i][1],!0);n.locals&&(e.exports=n.locals)},ruv1:function(e,t,o){"use strict";(function(e){var o=this&&this.__assign||function(){return(o=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"==typeof window?e:window,r=n&&n.CSPSettings&&n.CSPSettings.nonce,i=function(){var e=n.__themeState__||{theme:void 0,lastStyleElement:void 0,registeredStyles:[]};e.runState||(e=o({},e,{perf:{count:0,duration:0},runState:{flushTimer:0,mode:0,buffer:[]}}));e.registeredThemableStyles||(e=o({},e,{registeredThemableStyles:[]}));return n.__themeState__=e,e}(),a=/[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g,l=function(){return"undefined"!=typeof performance&&performance.now?performance.now():Date.now()};function s(e){var t=l();e();var o=l();i.perf.duration+=o-t}function c(){s(function(){var e=i.runState.buffer.slice();i.runState.buffer=[];var t=[].concat.apply([],e);t.length>0&&u(t)})}function u(e,t){i.loadStyles?i.loadStyles(d(e).styleString,e):function(e){if("undefined"==typeof document)return;var t=document.getElementsByTagName("head")[0],o=document.createElement("style"),n=d(e),a=n.styleString,l=n.themable;o.setAttribute("data-load-themed-styles","true"),o.type="text/css",r&&o.setAttribute("nonce",r);o.appendChild(document.createTextNode(a)),i.perf.count++,t.appendChild(o);var s=document.createEvent("HTMLEvents");s.initEvent("styleinsert",!0,!1),s.args={newStyle:o},document.dispatchEvent(s);var c={styleElement:o,themableStyle:e};l?i.registeredThemableStyles.push(c):i.registeredStyles.push(c)}(e)}function p(e){void 0===e&&(e=3),3!==e&&2!==e||(f(i.registeredStyles),i.registeredStyles=[]),3!==e&&1!==e||(f(i.registeredThemableStyles),i.registeredThemableStyles=[])}function f(e){e.forEach(function(e){var t=e&&e.styleElement;t&&t.parentElement&&t.parentElement.removeChild(t)})}function d(e){var t=i.theme,o=!1;return{styleString:(e||[]).map(function(e){var n=e.theme;if(n){o=!0;var r=t?t[n]:void 0,i=e.defaultValue||"inherit";return t&&!r&&console,r||i}return e.rawString}).join(""),themable:o}}function h(e){var t=[];if(e){for(var o=0,n=void 0;n=a.exec(e);){var r=n.index;r>o&&t.push({rawString:e.substring(o,r)}),t.push({theme:n[1],defaultValue:n[2]}),o=a.lastIndex}t.push({rawString:e.substring(o)})}return t}t.loadStyles=function(e,t){void 0===t&&(t=!1),s(function(){var o=Array.isArray(e)?e:h(e),n=i.runState,r=n.mode,a=n.buffer,l=n.flushTimer;t||1===r?(a.push(o),l||(i.runState.flushTimer=setTimeout(function(){i.runState.flushTimer=0,c()},0))):u(o)})},t.configureLoadStyles=function(e){i.loadStyles=e},t.configureRunMode=function(e){i.runState.mode=e},t.flush=c,t.loadTheme=function(e){i.theme=e,function(){if(i.theme){for(var e=[],t=0,o=i.registeredThemableStyles;t<o.length;t++){var n=o[t];e.push(n.themableStyle)}e.length>0&&(p(1),u([].concat.apply([],e)))}}()},t.clearStyles=p,t.detokenize=function(e){return e&&(e=d(h(e)).styleString),e},t.splitStyles=h}).call(this,o("yLpj"))},wxtz:function(e,t){e.exports=r},yLpj:function(e,t){var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"==typeof window&&(o=window)}e.exports=o}})});