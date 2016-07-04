!function(t){function n(e){if(r[e])return r[e].exports;var u=r[e]={i:e,l:!1,exports:{}};return t[e].call(u.exports,u,u.exports,n),u.l=!0,u.exports}var r={};return n.m=t,n.c=r,n.i=function(t){return t},n.d=function(exports,t,n){Object.defineProperty(exports,t,{configurable:!1,enumerable:!0,get:n})},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=63)}([/*!******************************************!*\
  !*** ../~/ramda/src/internal/_curry2.js ***!
  \******************************************/
function(t,exports,n){var r=n(/*! ./_curry1 */1),e=n(/*! ./_isPlaceholder */4);t.exports=function(t){return function n(u,o){switch(arguments.length){case 0:return n;case 1:return e(u)?n:r(function(n){return t(u,n)});default:return e(u)&&e(o)?n:e(u)?r(function(n){return t(n,o)}):e(o)?r(function(n){return t(u,n)}):t(u,o)}}}},/*!******************************************!*\
  !*** ../~/ramda/src/internal/_curry1.js ***!
  \******************************************/
function(t,exports,n){var r=n(/*! ./_isPlaceholder */4);t.exports=function(t){return function n(e){return 0===arguments.length||r(e)?n:t.apply(this,arguments)}}},/*!*****************************************!*\
  !*** ../~/ramda/src/internal/_slice.js ***!
  \*****************************************/
function(t,exports){t.exports=function n(t,r,e){switch(arguments.length){case 1:return n(t,0,t.length);case 2:return n(t,r,t.length);default:for(var u=[],o=0,i=Math.max(0,Math.min(t.length,e)-r);o<i;)u[o]=t[r+o],o+=1;return u}}},/*!*****************************************!*\
  !*** ../~/ramda/src/internal/_arity.js ***!
  \*****************************************/
function(t,exports){t.exports=function(t,n){switch(t){case 0:return function(){return n.apply(this,arguments)};case 1:return function(t){return n.apply(this,arguments)};case 2:return function(t,r){return n.apply(this,arguments)};case 3:return function(t,r,e){return n.apply(this,arguments)};case 4:return function(t,r,e,u){return n.apply(this,arguments)};case 5:return function(t,r,e,u,o){return n.apply(this,arguments)};case 6:return function(t,r,e,u,o,i){return n.apply(this,arguments)};case 7:return function(t,r,e,u,o,i,c){return n.apply(this,arguments)};case 8:return function(t,r,e,u,o,i,c,f){return n.apply(this,arguments)};case 9:return function(t,r,e,u,o,i,c,f,a){return n.apply(this,arguments)};case 10:return function(t,r,e,u,o,i,c,f,a,s){return n.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}},/*!*************************************************!*\
  !*** ../~/ramda/src/internal/_isPlaceholder.js ***!
  \*************************************************/
function(t,exports){t.exports=function(t){return null!=t&&"object"==typeof t&&t["@@functional/placeholder"]===!0}},/*!******************************!*\
  !*** ../~/ramda/src/keys.js ***!
  \******************************/
function(t,exports,n){var r=n(/*! ./internal/_curry1 */1),e=n(/*! ./internal/_has */7),u=n(/*! ./internal/_isArguments */38);t.exports=function(){var t=!{toString:null}.propertyIsEnumerable("toString"),n=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],o=function(){"use strict";return arguments.propertyIsEnumerable("length")}(),i=function(t,n){for(var r=0;r<t.length;){if(t[r]===n)return!0;r+=1}return!1};return r("function"!=typeof Object.keys||o?function(r){if(Object(r)!==r)return[];var c,f,a=[],s=o&&u(r);for(c in r)!e(c,r)||s&&"length"===c||(a[a.length]=c);if(t)for(f=n.length-1;f>=0;)c=n[f],e(c,r)&&!i(a,c)&&(a[a.length]=c),f-=1;return a}:function(t){return Object(t)!==t?[]:Object.keys(t)})}()},/*!********************************!*\
  !*** ../~/ramda/src/curryN.js ***!
  \********************************/
function(t,exports,n){var r=n(/*! ./internal/_arity */3),e=n(/*! ./internal/_curry1 */1),u=n(/*! ./internal/_curry2 */0),o=n(/*! ./internal/_curryN */33);t.exports=u(function(t,n){return 1===t?e(n):r(t,o(t,[],n))})},/*!***************************************!*\
  !*** ../~/ramda/src/internal/_has.js ***!
  \***************************************/
function(t,exports){t.exports=function(t,n){return Object.prototype.hasOwnProperty.call(n,t)}},/*!*******************************************!*\
  !*** ../~/ramda/src/internal/_isArray.js ***!
  \*******************************************/
function(t,exports){t.exports=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)}},/*!******************************************!*\
  !*** ../~/ramda/src/internal/_reduce.js ***!
  \******************************************/
function(t,exports,n){var r=n(/*! ./_xwrap */47),e=n(/*! ../bind */22),u=n(/*! ../isArrayLike */49);t.exports=function(){function t(t,n,r){for(var e=0,u=r.length;e<u;){if(n=t["@@transducer/step"](n,r[e]),n&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}e+=1}return t["@@transducer/result"](n)}function n(t,n,r){for(var e=r.next();!e.done;){if(n=t["@@transducer/step"](n,e.value),n&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}e=r.next()}return t["@@transducer/result"](n)}function o(t,n,r){return t["@@transducer/result"](r.reduce(e(t["@@transducer/step"],t),n))}var i="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";return function(e,c,f){if("function"==typeof e&&(e=r(e)),u(f))return t(e,c,f);if("function"==typeof f.reduce)return o(e,c,f);if(null!=f[i])return n(e,c,f[i]());if("function"==typeof f.next)return n(e,c,f);throw new TypeError("reduce: list must be array or iterable")}}()},/*!*********************************!*\
  !*** ../~/ramda/src/invoker.js ***!
  \*********************************/
function(t,exports,n){var r=n(/*! ./internal/_curry2 */0),e=n(/*! ./internal/_slice */2),u=n(/*! ./curryN */6),o=n(/*! ./is */48),i=n(/*! ./toString */61);t.exports=r(function(t,n){return u(t+1,function(){var r=arguments[t];if(null!=r&&o(Function,r[n]))return r[n].apply(r,e(arguments,0,t));throw new TypeError(i(r)+' does not have a method named "'+n+'"')})})},/*!*********************!*\
  !*** ./functors.ts ***!
  \*********************/
function(t,exports,n){"use strict";var r=n(/*! ./lib */12);n.d(exports,"a",function(){return e}),n.d(exports,"b",function(){return u});var e=function(){function t(t){this.__value=t}return t.of=function(n){return new t(n)},Object.defineProperty(t.prototype,"value",{get:function(){return this.__value},enumerable:!0,configurable:!0}),t.prototype.exists=function(){return n.i(r.a)(this.value)},t.prototype.map=function(n){return this.exists()?t.of(n(this.value)):t.of(null)},t}(),u=function(){function t(t){this.__value=t}return t.of=function(n){return new t(function(){return n})},Object.defineProperty(t.prototype,"value",{get:function(){return this.__value},enumerable:!0,configurable:!0}),t.prototype.map=function(e){return new t(n.i(r.b)(e,this.value))},t}()},/*!****************!*\
  !*** ./lib.ts ***!
  \****************/
function(t,exports,n){"use strict";var r=n(/*! ./functors */11);n.d(exports,"a",function(){return s}),n.d(exports,"e",function(){return e}),n.d(exports,"h",function(){return $}),n.d(exports,"b",function(){return o}),n.d(exports,"g",function(){return i}),n.d(exports,"d",function(){return c}),n.d(exports,"f",function(){return p}),n.d(exports,"i",function(){return a}),n.d(exports,"c",function(){return u});var e=(n(/*! ramda/src/map */51),n(/*! ramda/src/concat */24)),u=n(/*! ramda/src/prop */55),o=n(/*! ramda/src/compose */23),i=(n(/*! ramda/src/join */50),n(/*! ramda/src/reverse */20),n(/*! ramda/src/split */59)),c=n(/*! ramda/src/match */52),f=(n(/*! ramda/src/add */21),n(/*! ramda/src/curry */13)),a=n(/*! ramda/src/head */28),s=function(t){return null!=t},p=(f(function(t,n,r){return t.exists()?n(r.value):t}),new r.b(function(){return window})),$=function(t){return new r.b(function(){return document.querySelectorAll(t)})}},/*!*******************************!*\
  !*** ../~/ramda/src/curry.js ***!
  \*******************************/
function(t,exports,n){var r=n(/*! ./internal/_curry1 */1),e=n(/*! ./curryN */6);t.exports=r(function(t){return e(t.length,t)})},/*!**************************************************!*\
  !*** ../~/ramda/src/internal/_checkForMethod.js ***!
  \**************************************************/
function(t,exports,n){var r=n(/*! ./_isArray */8),e=n(/*! ./_slice */2);t.exports=function(t,n){return function(){var u=arguments.length;if(0===u)return n();var o=arguments[u-1];return r(o)||"function"!=typeof o[t]?n.apply(this,arguments):o[t].apply(o,e(arguments,0,u-1))}}},/*!******************************************!*\
  !*** ../~/ramda/src/internal/_curry3.js ***!
  \******************************************/
function(t,exports,n){var r=n(/*! ./_curry1 */1),e=n(/*! ./_curry2 */0),u=n(/*! ./_isPlaceholder */4);t.exports=function(t){return function n(o,i,c){switch(arguments.length){case 0:return n;case 1:return u(o)?n:e(function(n,r){return t(o,n,r)});case 2:return u(o)&&u(i)?n:u(o)?e(function(n,r){return t(n,i,r)}):u(i)?e(function(n,r){return t(o,n,r)}):r(function(n){return t(o,i,n)});default:return u(o)&&u(i)&&u(c)?n:u(o)&&u(i)?e(function(n,r){return t(n,r,c)}):u(o)&&u(c)?e(function(n,r){return t(n,i,r)}):u(i)&&u(c)?e(function(n,r){return t(o,n,r)}):u(o)?r(function(n){return t(n,i,c)}):u(i)?r(function(n){return t(o,n,c)}):u(c)?r(function(n){return t(o,i,n)}):t(o,i,c)}}}},/*!************************************************!*\
  !*** ../~/ramda/src/internal/_dispatchable.js ***!
  \************************************************/
function(t,exports,n){var r=n(/*! ./_isArray */8),e=n(/*! ./_isTransformer */40),u=n(/*! ./_slice */2);t.exports=function(t,n,o){return function(){var i=arguments.length;if(0===i)return o();var c=arguments[i-1];if(!r(c)){var f=u(arguments,0,i-1);if("function"==typeof c[t])return c[t].apply(c,f);if(e(c)){var a=n.apply(null,f);return a(c)}}return o.apply(this,arguments)}}},/*!********************************************!*\
  !*** ../~/ramda/src/internal/_isString.js ***!
  \********************************************/
function(t,exports){t.exports=function(t){return"[object String]"===Object.prototype.toString.call(t)}},/*!***************************************!*\
  !*** ../~/ramda/src/internal/_map.js ***!
  \***************************************/
function(t,exports){t.exports=function(t,n){for(var r=0,e=n.length,u=Array(e);r<e;)u[r]=t(n[r]),r+=1;return u}},/*!******************************************!*\
  !*** ../~/ramda/src/internal/_xfBase.js ***!
  \******************************************/
function(t,exports){t.exports={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}}},/*!*********************************!*\
  !*** ../~/ramda/src/reverse.js ***!
  \*********************************/
function(t,exports,n){var r=n(/*! ./internal/_curry1 */1),e=n(/*! ./internal/_isString */17),u=n(/*! ./internal/_slice */2);t.exports=r(function(t){return e(t)?t.split("").reverse().join(""):u(t).reverse()})},/*!*****************************!*\
  !*** ../~/ramda/src/add.js ***!
  \*****************************/
function(t,exports,n){var r=n(/*! ./internal/_curry2 */0);t.exports=r(function(t,n){return Number(t)+Number(n)})},/*!******************************!*\
  !*** ../~/ramda/src/bind.js ***!
  \******************************/
function(t,exports,n){var r=n(/*! ./internal/_arity */3),e=n(/*! ./internal/_curry2 */0);t.exports=e(function(t,n){return r(t.length,function(){return t.apply(n,arguments)})})},/*!*********************************!*\
  !*** ../~/ramda/src/compose.js ***!
  \*********************************/
function(t,exports,n){var r=n(/*! ./pipe */54),e=n(/*! ./reverse */20);t.exports=function(){if(0===arguments.length)throw new Error("compose requires at least one argument");return r.apply(this,e(arguments))}},/*!********************************!*\
  !*** ../~/ramda/src/concat.js ***!
  \********************************/
function(t,exports,n){var r=n(/*! ./flip */27),e=n(/*! ./invoker */10);t.exports=r(e(1,"concat"))},/*!********************************!*\
  !*** ../~/ramda/src/equals.js ***!
  \********************************/
function(t,exports,n){var r=n(/*! ./internal/_curry2 */0),e=n(/*! ./internal/_equals */34);t.exports=r(function(t,n){return e(t,n,[],[])})},/*!********************************!*\
  !*** ../~/ramda/src/filter.js ***!
  \********************************/
function(t,exports,n){var r=n(/*! ./internal/_curry2 */0),e=n(/*! ./internal/_dispatchable */16),u=n(/*! ./internal/_filter */35),o=n(/*! ./internal/_isObject */39),i=n(/*! ./internal/_reduce */9),c=n(/*! ./internal/_xfilter */45),f=n(/*! ./keys */5);t.exports=r(e("filter",c,function(t,n){return o(n)?i(function(r,e){return t(n[e])&&(r[e]=n[e]),r},{},f(n)):u(t,n)}))},/*!******************************!*\
  !*** ../~/ramda/src/flip.js ***!
  \******************************/
function(t,exports,n){var r=n(/*! ./internal/_curry1 */1),e=n(/*! ./internal/_slice */2),u=n(/*! ./curry */13);t.exports=r(function(t){return u(function(n,r){var u=e(arguments);return u[0]=r,u[1]=n,t.apply(this,u)})})},/*!******************************!*\
  !*** ../~/ramda/src/head.js ***!
  \******************************/
function(t,exports,n){var r=n(/*! ./nth */53);t.exports=r(0)},/*!***********************************!*\
  !*** ../~/ramda/src/identical.js ***!
  \***********************************/
function(t,exports,n){var r=n(/*! ./internal/_curry2 */0);t.exports=r(function(t,n){return t===n?0!==t||1/t===1/n:t!==t&&n!==n})},/*!*****************************************************!*\
  !*** ../~/ramda/src/internal/_arrayFromIterator.js ***!
  \*****************************************************/
function(t,exports){t.exports=function(t){for(var n,r=[];!(n=t.next()).done;)r.push(n.value);return r}},/*!**********************************************!*\
  !*** ../~/ramda/src/internal/_complement.js ***!
  \**********************************************/
function(t,exports){t.exports=function(t){return function(){return!t.apply(this,arguments)}}},/*!********************************************!*\
  !*** ../~/ramda/src/internal/_contains.js ***!
  \********************************************/
function(t,exports,n){var r=n(/*! ./_indexOf */37);t.exports=function(t,n){return r(n,t,0)>=0}},/*!******************************************!*\
  !*** ../~/ramda/src/internal/_curryN.js ***!
  \******************************************/
function(t,exports,n){var r=n(/*! ./_arity */3),e=n(/*! ./_isPlaceholder */4);t.exports=function u(t,n,o){return function(){for(var i=[],c=0,f=t,a=0;a<n.length||c<arguments.length;){var s;a<n.length&&(!e(n[a])||c>=arguments.length)?s=n[a]:(s=arguments[c],c+=1),i[a]=s,e(s)||(f-=1),a+=1}return f<=0?o.apply(this,i):r(f,u(t,i,o))}}},/*!******************************************!*\
  !*** ../~/ramda/src/internal/_equals.js ***!
  \******************************************/
function(t,exports,n){var r=n(/*! ./_arrayFromIterator */30),e=n(/*! ./_functionName */36),u=n(/*! ./_has */7),o=n(/*! ../identical */29),i=n(/*! ../keys */5),c=n(/*! ../type */62);t.exports=function f(t,n,a,s){if(o(t,n))return!0;if(c(t)!==c(n))return!1;if(null==t||null==n)return!1;if("function"==typeof t.equals||"function"==typeof n.equals)return"function"==typeof t.equals&&t.equals(n)&&"function"==typeof n.equals&&n.equals(t);switch(c(t)){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===e(t.constructor))return t===n;break;case"Boolean":case"Number":case"String":if(typeof t!=typeof n||!o(t.valueOf(),n.valueOf()))return!1;break;case"Date":if(!o(t.valueOf(),n.valueOf()))return!1;break;case"Error":return t.name===n.name&&t.message===n.message;case"RegExp":if(t.source!==n.source||t.global!==n.global||t.ignoreCase!==n.ignoreCase||t.multiline!==n.multiline||t.sticky!==n.sticky||t.unicode!==n.unicode)return!1;break;case"Map":case"Set":if(!f(r(t.entries()),r(n.entries()),a,s))return!1;break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":break;case"ArrayBuffer":break;default:return!1}var p=i(t);if(p.length!==i(n).length)return!1;for(var l=a.length-1;l>=0;){if(a[l]===t)return s[l]===n;l-=1}for(a.push(t),s.push(n),l=p.length-1;l>=0;){var h=p[l];if(!u(h,n)||!f(n[h],t[h],a,s))return!1;l-=1}return a.pop(),s.pop(),!0}},/*!******************************************!*\
  !*** ../~/ramda/src/internal/_filter.js ***!
  \******************************************/
function(t,exports){t.exports=function(t,n){for(var r=0,e=n.length,u=[];r<e;)t(n[r])&&(u[u.length]=n[r]),r+=1;return u}},/*!************************************************!*\
  !*** ../~/ramda/src/internal/_functionName.js ***!
  \************************************************/
function(t,exports){t.exports=function(t){var n=String(t).match(/^function (\w*)/);return null==n?"":n[1]}},/*!*******************************************!*\
  !*** ../~/ramda/src/internal/_indexOf.js ***!
  \*******************************************/
function(t,exports,n){var r=n(/*! ../equals */25);t.exports=function(t,n,e){var u,o;if("function"==typeof t.indexOf)switch(typeof n){case"number":if(0===n){for(u=1/n;e<t.length;){if(o=t[e],0===o&&1/o===u)return e;e+=1}return-1}if(n!==n){for(;e<t.length;){if(o=t[e],"number"==typeof o&&o!==o)return e;e+=1}return-1}return t.indexOf(n,e);case"string":case"boolean":case"function":case"undefined":return t.indexOf(n,e);case"object":if(null===n)return t.indexOf(n,e)}for(;e<t.length;){if(r(t[e],n))return e;e+=1}return-1}},/*!***********************************************!*\
  !*** ../~/ramda/src/internal/_isArguments.js ***!
  \***********************************************/
function(t,exports,n){var r=n(/*! ./_has */7);t.exports=function(){var t=Object.prototype.toString;return"[object Arguments]"===t.call(arguments)?function(n){return"[object Arguments]"===t.call(n)}:function(t){return r("callee",t)}}()},/*!********************************************!*\
  !*** ../~/ramda/src/internal/_isObject.js ***!
  \********************************************/
function(t,exports){t.exports=function(t){return"[object Object]"===Object.prototype.toString.call(t)}},/*!*************************************************!*\
  !*** ../~/ramda/src/internal/_isTransformer.js ***!
  \*************************************************/
function(t,exports){t.exports=function(t){return"function"==typeof t["@@transducer/step"]}},/*!****************************************!*\
  !*** ../~/ramda/src/internal/_pipe.js ***!
  \****************************************/
function(t,exports){t.exports=function(t,n){return function(){return n.call(this,t.apply(this,arguments))}}},/*!*****************************************!*\
  !*** ../~/ramda/src/internal/_quote.js ***!
  \*****************************************/
function(t,exports){t.exports=function(t){var n=t.replace(/\\/g,"\\\\").replace(/[\b]/g,"\\b").replace(/\f/g,"\\f").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return'"'+n.replace(/"/g,'\\"')+'"'}},/*!***********************************************!*\
  !*** ../~/ramda/src/internal/_toISOString.js ***!
  \***********************************************/
function(t,exports){t.exports=function(){var t=function(t){return(t<10?"0":"")+t};return"function"==typeof Date.prototype.toISOString?function(t){return t.toISOString()}:function(n){return n.getUTCFullYear()+"-"+t(n.getUTCMonth()+1)+"-"+t(n.getUTCDate())+"T"+t(n.getUTCHours())+":"+t(n.getUTCMinutes())+":"+t(n.getUTCSeconds())+"."+(n.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"}}()},/*!********************************************!*\
  !*** ../~/ramda/src/internal/_toString.js ***!
  \********************************************/
function(t,exports,n){var r=n(/*! ./_contains */32),e=n(/*! ./_map */18),u=n(/*! ./_quote */42),o=n(/*! ./_toISOString */43),i=n(/*! ../keys */5),c=n(/*! ../reject */57);t.exports=function f(t,n){var a=function(e){var u=n.concat([t]);return r(e,u)?"<Circular>":f(e,u)},s=function(t,n){return e(function(n){return u(n)+": "+a(t[n])},n.slice().sort())};switch(Object.prototype.toString.call(t)){case"[object Arguments]":return"(function() { return arguments; }("+e(a,t).join(", ")+"))";case"[object Array]":return"["+e(a,t).concat(s(t,c(function(t){return/^\d+$/.test(t)},i(t)))).join(", ")+"]";case"[object Boolean]":return"object"==typeof t?"new Boolean("+a(t.valueOf())+")":t.toString();case"[object Date]":return"new Date("+(isNaN(t.valueOf())?a(NaN):u(o(t)))+")";case"[object Null]":return"null";case"[object Number]":return"object"==typeof t?"new Number("+a(t.valueOf())+")":1/t===-(1/0)?"-0":t.toString(10);case"[object String]":return"object"==typeof t?"new String("+a(t.valueOf())+")":u(t);case"[object Undefined]":return"undefined";default:if("function"==typeof t.toString){var p=t.toString();if("[object Object]"!==p)return p}return"{"+s(t,i(t)).join(", ")+"}"}}},/*!*******************************************!*\
  !*** ../~/ramda/src/internal/_xfilter.js ***!
  \*******************************************/
function(t,exports,n){var r=n(/*! ./_curry2 */0),e=n(/*! ./_xfBase */19);t.exports=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=e.init,t.prototype["@@transducer/result"]=e.result,t.prototype["@@transducer/step"]=function(t,n){return this.f(n)?this.xf["@@transducer/step"](t,n):t},r(function(n,r){return new t(n,r)})}()},/*!****************************************!*\
  !*** ../~/ramda/src/internal/_xmap.js ***!
  \****************************************/
function(t,exports,n){var r=n(/*! ./_curry2 */0),e=n(/*! ./_xfBase */19);t.exports=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=e.init,t.prototype["@@transducer/result"]=e.result,t.prototype["@@transducer/step"]=function(t,n){return this.xf["@@transducer/step"](t,this.f(n))},r(function(n,r){return new t(n,r)})}()},/*!*****************************************!*\
  !*** ../~/ramda/src/internal/_xwrap.js ***!
  \*****************************************/
function(t,exports){t.exports=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,n){return this.f(t,n)},function(n){return new t(n)}}()},/*!****************************!*\
  !*** ../~/ramda/src/is.js ***!
  \****************************/
function(t,exports,n){var r=n(/*! ./internal/_curry2 */0);t.exports=r(function(t,n){return null!=n&&n.constructor===t||n instanceof t})},/*!*************************************!*\
  !*** ../~/ramda/src/isArrayLike.js ***!
  \*************************************/
function(t,exports,n){var r=n(/*! ./internal/_curry1 */1),e=n(/*! ./internal/_isArray */8);t.exports=r(function(t){return!!e(t)||!!t&&("object"==typeof t&&(!(t instanceof String)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))})},/*!******************************!*\
  !*** ../~/ramda/src/join.js ***!
  \******************************/
function(t,exports,n){var r=n(/*! ./invoker */10);t.exports=r(1,"join")},/*!*****************************!*\
  !*** ../~/ramda/src/map.js ***!
  \*****************************/
function(t,exports,n){var r=n(/*! ./internal/_curry2 */0),e=n(/*! ./internal/_dispatchable */16),u=n(/*! ./internal/_map */18),o=n(/*! ./internal/_reduce */9),i=n(/*! ./internal/_xmap */46),c=n(/*! ./curryN */6),f=n(/*! ./keys */5);t.exports=r(e("map",i,function(t,n){switch(Object.prototype.toString.call(n)){case"[object Function]":return c(n.length,function(){return t.call(this,n.apply(this,arguments))});case"[object Object]":return o(function(r,e){return r[e]=t(n[e]),r},{},f(n));default:return u(t,n)}}))},/*!*******************************!*\
  !*** ../~/ramda/src/match.js ***!
  \*******************************/
function(t,exports,n){var r=n(/*! ./internal/_curry2 */0);t.exports=r(function(t,n){return n.match(t)||[]})},/*!*****************************!*\
  !*** ../~/ramda/src/nth.js ***!
  \*****************************/
function(t,exports,n){var r=n(/*! ./internal/_curry2 */0),e=n(/*! ./internal/_isString */17);t.exports=r(function(t,n){var r=t<0?n.length+t:t;return e(n)?n.charAt(r):n[r]})},/*!******************************!*\
  !*** ../~/ramda/src/pipe.js ***!
  \******************************/
function(t,exports,n){var r=n(/*! ./internal/_arity */3),e=n(/*! ./internal/_pipe */41),u=n(/*! ./reduce */56),o=n(/*! ./tail */60);t.exports=function(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return r(arguments[0].length,u(e,arguments[0],o(arguments)))}},/*!******************************!*\
  !*** ../~/ramda/src/prop.js ***!
  \******************************/
function(t,exports,n){var r=n(/*! ./internal/_curry2 */0);t.exports=r(function(t,n){return n[t]})},/*!********************************!*\
  !*** ../~/ramda/src/reduce.js ***!
  \********************************/
function(t,exports,n){var r=n(/*! ./internal/_curry3 */15),e=n(/*! ./internal/_reduce */9);t.exports=r(e)},/*!********************************!*\
  !*** ../~/ramda/src/reject.js ***!
  \********************************/
function(t,exports,n){var r=n(/*! ./internal/_complement */31),e=n(/*! ./internal/_curry2 */0),u=n(/*! ./filter */26);t.exports=e(function(t,n){return u(r(t),n)})},/*!*******************************!*\
  !*** ../~/ramda/src/slice.js ***!
  \*******************************/
function(t,exports,n){var r=n(/*! ./internal/_checkForMethod */14),e=n(/*! ./internal/_curry3 */15);t.exports=e(r("slice",function(t,n,r){return Array.prototype.slice.call(r,t,n)}))},/*!*******************************!*\
  !*** ../~/ramda/src/split.js ***!
  \*******************************/
function(t,exports,n){var r=n(/*! ./invoker */10);t.exports=r(1,"split")},/*!******************************!*\
  !*** ../~/ramda/src/tail.js ***!
  \******************************/
function(t,exports,n){var r=n(/*! ./internal/_checkForMethod */14),e=n(/*! ./slice */58);t.exports=r("tail",e(1,1/0))},/*!**********************************!*\
  !*** ../~/ramda/src/toString.js ***!
  \**********************************/
function(t,exports,n){var r=n(/*! ./internal/_curry1 */1),e=n(/*! ./internal/_toString */44);t.exports=r(function(t){return e(t,[])})},/*!******************************!*\
  !*** ../~/ramda/src/type.js ***!
  \******************************/
function(t,exports,n){var r=n(/*! ./internal/_curry1 */1);t.exports=r(function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)})},/*!******************!*\
  !*** ./index.ts ***!
  \******************/
function(t,exports,n){"use strict";var r=n(/*! ./lib */12),e=n(/*! ./functors */11),u=e.a.of({name:"Dinah",age:14}).map(n.i(r.c)("derp")),o=(e.a.of("Malkovich Malkovich").map(n.i(r.d)(/a/gi)),e.a.of("away").map(function(t){return n.i(r.e)("Bombs ",t)})),i=r.f.map(function(t){return t.innerWidth}),c=r.f.map(n.i(r.c)("location")).map(n.i(r.c)("href")).map(n.i(r.g)("/")),f=n.i(r.h)("#fp").map(r.i).map(function(t){return t.innerText});console.log(u.value,o.value,i.value(),c.value(),f.value())}]);