!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),o=function(e){return e&&e.__esModule?e:{default:e}}(t(1));var u=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),(n=n||{}).source=n.source||".",this.options=n}return r(e,[{key:"log",value:function(){return new o.default({source:this.options.source}).exec()}}]),e}();n.default=u},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),o=t(2);var u=function(){function e(n){if(function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),!(n=n||{}).source)throw new Exception("source is required.");this.options=n}return r(e,[{key:"exec",value:function(){var e=function(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){return function r(o,u){try{var i=n[o](u),c=i.value}catch(e){return void t(e)}if(!i.done)return Promise.resolve(c).then(function(e){r("next",e)},function(e){r("throw",e)});e(c)}("next")})}}(regeneratorRuntime.mark(function e(){var n,t,r,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=["--xml"],this.options.limit&&(n+=["-l",this.options.limit.toString()]),e.next=4,(0,o.spawn)("log",n);case 4:if(t=e.sent,r=t.stdout,!(u=t.stderr)){e.next=9;break}throw new Exception(u);case 9:return e.abrupt("return",r);case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}();n.default=u},function(e,n){e.exports=require("child-process-async")}]);