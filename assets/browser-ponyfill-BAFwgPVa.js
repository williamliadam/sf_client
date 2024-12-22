import{c as R,g as z}from"./index-DNwte0iJ.js";function $(w,d){for(var b=0;b<d.length;b++){const y=d[b];if(typeof y!="string"&&!Array.isArray(y)){for(const h in y)if(h!=="default"&&!(h in w)){const p=Object.getOwnPropertyDescriptor(y,h);p&&Object.defineProperty(w,h,p.get?p:{enumerable:!0,get:()=>y[h]})}}}return Object.freeze(Object.defineProperty(w,Symbol.toStringTag,{value:"Module"}))}var A={exports:{}},U;function X(){return U||(U=1,function(w,d){var b=typeof globalThis<"u"&&globalThis||typeof self<"u"&&self||typeof R<"u"&&R,y=function(){function p(){this.fetch=!1,this.DOMException=b.DOMException}return p.prototype=b,new p}();(function(p){(function(u){var a=typeof p<"u"&&p||typeof self<"u"&&self||typeof a<"u"&&a,f={searchParams:"URLSearchParams"in a,iterable:"Symbol"in a&&"iterator"in Symbol,blob:"FileReader"in a&&"Blob"in a&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in a,arrayBuffer:"ArrayBuffer"in a};function S(e){return e&&DataView.prototype.isPrototypeOf(e)}if(f.arrayBuffer)var F=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],I=ArrayBuffer.isView||function(e){return e&&F.indexOf(Object.prototype.toString.call(e))>-1};function v(e){if(typeof e!="string"&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||e==="")throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function E(e){return typeof e!="string"&&(e=String(e)),e}function T(e){var t={next:function(){var r=e.shift();return{done:r===void 0,value:r}}};return f.iterable&&(t[Symbol.iterator]=function(){return t}),t}function s(e){this.map={},e instanceof s?e.forEach(function(t,r){this.append(r,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}s.prototype.append=function(e,t){e=v(e),t=E(t);var r=this.map[e];this.map[e]=r?r+", "+t:t},s.prototype.delete=function(e){delete this.map[v(e)]},s.prototype.get=function(e){return e=v(e),this.has(e)?this.map[e]:null},s.prototype.has=function(e){return this.map.hasOwnProperty(v(e))},s.prototype.set=function(e,t){this.map[v(e)]=E(t)},s.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},s.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),T(e)},s.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),T(e)},s.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),T(e)},f.iterable&&(s.prototype[Symbol.iterator]=s.prototype.entries);function B(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function P(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function M(e){var t=new FileReader,r=P(t);return t.readAsArrayBuffer(e),r}function q(e){var t=new FileReader,r=P(t);return t.readAsText(e),r}function H(e){for(var t=new Uint8Array(e),r=new Array(t.length),n=0;n<t.length;n++)r[n]=String.fromCharCode(t[n]);return r.join("")}function D(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function x(){return this.bodyUsed=!1,this._initBody=function(e){this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?typeof e=="string"?this._bodyText=e:f.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:f.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:f.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():f.arrayBuffer&&f.blob&&S(e)?(this._bodyArrayBuffer=D(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):f.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||I(e))?this._bodyArrayBuffer=D(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||(typeof e=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):f.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},f.blob&&(this.blob=function(){var e=B(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=B(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(M)}),this.text=function(){var e=B(this);if(e)return e;if(this._bodyBlob)return q(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(H(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},f.formData&&(this.formData=function(){return this.text().then(k)}),this.json=function(){return this.text().then(JSON.parse)},this}var L=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function C(e){var t=e.toUpperCase();return L.indexOf(t)>-1?t:e}function m(e,t){if(!(this instanceof m))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t=t||{};var r=t.body;if(e instanceof m){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new s(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!r&&e._bodyInit!=null&&(r=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new s(t.headers)),this.method=C(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&r)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(r),(this.method==="GET"||this.method==="HEAD")&&(t.cache==="no-store"||t.cache==="no-cache")){var n=/([?&])_=[^&]*/;if(n.test(this.url))this.url=this.url.replace(n,"$1_="+new Date().getTime());else{var i=/\?/;this.url+=(i.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}m.prototype.clone=function(){return new m(this,{body:this._bodyInit})};function k(e){var t=new FormData;return e.trim().split("&").forEach(function(r){if(r){var n=r.split("="),i=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(i),decodeURIComponent(o))}}),t}function N(e){var t=new s,r=e.replace(/\r?\n[\t ]+/g," ");return r.split("\r").map(function(n){return n.indexOf(`
`)===0?n.substr(1,n.length):n}).forEach(function(n){var i=n.split(":"),o=i.shift().trim();if(o){var _=i.join(":").trim();t.append(o,_)}}),t}x.call(m.prototype);function c(e,t){if(!(this instanceof c))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t||(t={}),this.type="default",this.status=t.status===void 0?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText=t.statusText===void 0?"":""+t.statusText,this.headers=new s(t.headers),this.url=t.url||"",this._initBody(e)}x.call(c.prototype),c.prototype.clone=function(){return new c(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new s(this.headers),url:this.url})},c.error=function(){var e=new c(null,{status:0,statusText:""});return e.type="error",e};var G=[301,302,303,307,308];c.redirect=function(e,t){if(G.indexOf(t)===-1)throw new RangeError("Invalid status code");return new c(null,{status:t,headers:{location:e}})},u.DOMException=a.DOMException;try{new u.DOMException}catch{u.DOMException=function(t,r){this.message=t,this.name=r;var n=Error(t);this.stack=n.stack},u.DOMException.prototype=Object.create(Error.prototype),u.DOMException.prototype.constructor=u.DOMException}function O(e,t){return new Promise(function(r,n){var i=new m(e,t);if(i.signal&&i.signal.aborted)return n(new u.DOMException("Aborted","AbortError"));var o=new XMLHttpRequest;function _(){o.abort()}o.onload=function(){var l={status:o.status,statusText:o.statusText,headers:N(o.getAllResponseHeaders()||"")};l.url="responseURL"in o?o.responseURL:l.headers.get("X-Request-URL");var g="response"in o?o.response:o.responseText;setTimeout(function(){r(new c(g,l))},0)},o.onerror=function(){setTimeout(function(){n(new TypeError("Network request failed"))},0)},o.ontimeout=function(){setTimeout(function(){n(new TypeError("Network request failed"))},0)},o.onabort=function(){setTimeout(function(){n(new u.DOMException("Aborted","AbortError"))},0)};function V(l){try{return l===""&&a.location.href?a.location.href:l}catch{return l}}o.open(i.method,V(i.url),!0),i.credentials==="include"?o.withCredentials=!0:i.credentials==="omit"&&(o.withCredentials=!1),"responseType"in o&&(f.blob?o.responseType="blob":f.arrayBuffer&&i.headers.get("Content-Type")&&i.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(o.responseType="arraybuffer")),t&&typeof t.headers=="object"&&!(t.headers instanceof s)?Object.getOwnPropertyNames(t.headers).forEach(function(l){o.setRequestHeader(l,E(t.headers[l]))}):i.headers.forEach(function(l,g){o.setRequestHeader(g,l)}),i.signal&&(i.signal.addEventListener("abort",_),o.onreadystatechange=function(){o.readyState===4&&i.signal.removeEventListener("abort",_)}),o.send(typeof i._bodyInit>"u"?null:i._bodyInit)})}return O.polyfill=!0,a.fetch||(a.fetch=O,a.Headers=s,a.Request=m,a.Response=c),u.Headers=s,u.Request=m,u.Response=c,u.fetch=O,u})({})})(y),y.fetch.ponyfill=!0,delete y.fetch.polyfill;var h=b.fetch?b:y;d=h.fetch,d.default=h.fetch,d.fetch=h.fetch,d.Headers=h.Headers,d.Request=h.Request,d.Response=h.Response,w.exports=d}(A,A.exports)),A.exports}var j=X();const J=z(j),Q=$({__proto__:null,default:J},[j]);export{Q as b};
