(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home~manager-article~message~user-info"],{"28a5":function(e,t,n){"use strict";var r=n("aae3"),o=n("cb7c"),i=n("ebd6"),a=n("0390"),s=n("9def"),f=n("5f1b"),p=n("520a"),l=n("79e5"),u=Math.min,c=[].push,d="split",h="length",m="lastIndex",v=4294967295,g=!l(function(){RegExp(v,"y")});n("214f")("split",2,function(e,t,n,l){var b;return b="c"=="abbc"[d](/(b)*/)[1]||4!="test"[d](/(?:)/,-1)[h]||2!="ab"[d](/(?:ab)*/)[h]||4!="."[d](/(.?)(.?)/)[h]||"."[d](/()()/)[h]>1||""[d](/.?/)[h]?function(e,t){var o=String(this);if(void 0===e&&0===t)return[];if(!r(e))return n.call(o,e,t);var i,a,s,f=[],l=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,d=void 0===t?v:t>>>0,g=new RegExp(e.source,l+"g");while(i=p.call(g,o)){if(a=g[m],a>u&&(f.push(o.slice(u,i.index)),i[h]>1&&i.index<o[h]&&c.apply(f,i.slice(1)),s=i[0][h],u=a,f[h]>=d))break;g[m]===i.index&&g[m]++}return u===o[h]?!s&&g.test("")||f.push(""):f.push(o.slice(u)),f[h]>d?f.slice(0,d):f}:"0"[d](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,r){var o=e(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,o,r):b.call(String(o),n,r)},function(e,t){var r=l(b,e,this,t,b!==n);if(r.done)return r.value;var p=o(e),c=String(this),d=i(p,RegExp),h=p.unicode,m=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(g?"y":"g"),w=new d(g?p:"^(?:"+p.source+")",m),y=void 0===t?v:t>>>0;if(0===y)return[];if(0===c.length)return null===f(w,c)?[c]:[];var x=0,E=0,O=[];while(E<c.length){w.lastIndex=g?E:0;var L,T=f(w,g?c:c.slice(E));if(null===T||(L=u(s(w.lastIndex+(g?0:E)),c.length))===x)E=a(c,E,h);else{if(O.push(c.slice(x,E)),O.length===y)return O;for(var C=1;C<=T.length-1;C++)if(O.push(T[C]),O.length===y)return O;E=x=L}}return O.push(c.slice(x)),O}]})},aae3:function(e,t,n){var r=n("d3f4"),o=n("2d95"),i=n("2b4c")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==o(e))}},d2e4:function(e,t,n){(function(t){
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.15.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function(t,n){e.exports=n()})(0,function(){"use strict";for(var e="undefined"!==typeof window&&"undefined"!==typeof document,n=["Edge","Trident","Firefox"],r=0,o=0;o<n.length;o+=1)if(e&&navigator.userAgent.indexOf(n[o])>=0){r=1;break}function i(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}function a(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},r))}}var s=e&&window.Promise,f=s?i:a;function p(e){var t={};return e&&"[object Function]"===t.toString.call(e)}function l(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView,r=n.getComputedStyle(e,null);return t?r[t]:r}function u(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function c(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=l(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/(auto|scroll|overlay)/.test(n+o+r)?e:c(u(e))}var d=e&&!(!window.MSInputMethodContext||!document.documentMode),h=e&&/MSIE 10/.test(navigator.userAgent);function m(e){return 11===e?d:10===e?h:d||h}function v(e){if(!e)return document.documentElement;var t=m(10)?document.body:null,n=e.offsetParent||null;while(n===t&&e.nextElementSibling)n=(e=e.nextElementSibling).offsetParent;var r=n&&n.nodeName;return r&&"BODY"!==r&&"HTML"!==r?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===l(n,"position")?v(n):n:e?e.ownerDocument.documentElement:document.documentElement}function g(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||v(e.firstElementChild)===e)}function b(e){return null!==e.parentNode?b(e.parentNode):e}function w(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,r=n?e:t,o=n?t:e,i=document.createRange();i.setStart(r,0),i.setEnd(o,0);var a=i.commonAncestorContainer;if(e!==a&&t!==a||r.contains(o))return g(a)?a:v(a);var s=b(e);return s.host?w(s.host,t):w(e,b(t).host)}function y(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",r=e.nodeName;if("BODY"===r||"HTML"===r){var o=e.ownerDocument.documentElement,i=e.ownerDocument.scrollingElement||o;return i[n]}return e[n]}function x(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=y(t,"top"),o=y(t,"left"),i=n?-1:1;return e.top+=r*i,e.bottom+=r*i,e.left+=o*i,e.right+=o*i,e}function E(e,t){var n="x"===t?"Left":"Top",r="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+r+"Width"],10)}function O(e,t,n,r){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],m(10)?parseInt(n["offset"+e])+parseInt(r["margin"+("Height"===e?"Top":"Left")])+parseInt(r["margin"+("Height"===e?"Bottom":"Right")]):0)}function L(e){var t=e.body,n=e.documentElement,r=m(10)&&getComputedStyle(n);return{height:O("Height",t,n,r),width:O("Width",t,n,r)}}var T=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},C=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),M=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function N(e){return D({},e,{right:e.left+e.width,bottom:e.top+e.height})}function F(e){var t={};try{if(m(10)){t=e.getBoundingClientRect();var n=y(e,"top"),r=y(e,"left");t.top+=n,t.left+=r,t.bottom+=n,t.right+=r}else t=e.getBoundingClientRect()}catch(c){}var o={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?L(e.ownerDocument):{},a=i.width||e.clientWidth||o.right-o.left,s=i.height||e.clientHeight||o.bottom-o.top,f=e.offsetWidth-a,p=e.offsetHeight-s;if(f||p){var u=l(e);f-=E(u,"x"),p-=E(u,"y"),o.width-=f,o.height-=p}return N(o)}function k(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=m(10),o="HTML"===t.nodeName,i=F(e),a=F(t),s=c(e),f=l(t),p=parseFloat(f.borderTopWidth,10),u=parseFloat(f.borderLeftWidth,10);n&&o&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));var d=N({top:i.top-a.top-p,left:i.left-a.left-u,width:i.width,height:i.height});if(d.marginTop=0,d.marginLeft=0,!r&&o){var h=parseFloat(f.marginTop,10),v=parseFloat(f.marginLeft,10);d.top-=p-h,d.bottom-=p-h,d.left-=u-v,d.right-=u-v,d.marginTop=h,d.marginLeft=v}return(r&&!n?t.contains(s):t===s&&"BODY"!==s.nodeName)&&(d=x(d,t)),d}function S(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,r=k(e,n),o=Math.max(n.clientWidth,window.innerWidth||0),i=Math.max(n.clientHeight,window.innerHeight||0),a=t?0:y(n),s=t?0:y(n,"left"),f={top:a-r.top+r.marginTop,left:s-r.left+r.marginLeft,width:o,height:i};return N(f)}function W(e){var t=e.nodeName;if("BODY"===t||"HTML"===t)return!1;if("fixed"===l(e,"position"))return!0;var n=u(e);return!!n&&W(n)}function H(e){if(!e||!e.parentElement||m())return document.documentElement;var t=e.parentElement;while(t&&"none"===l(t,"transform"))t=t.parentElement;return t||document.documentElement}function B(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},a=o?H(e):w(e,t);if("viewport"===r)i=S(a,o);else{var s=void 0;"scrollParent"===r?(s=c(u(t)),"BODY"===s.nodeName&&(s=e.ownerDocument.documentElement)):s="window"===r?e.ownerDocument.documentElement:r;var f=k(s,a,o);if("HTML"!==s.nodeName||W(a))i=f;else{var p=L(e.ownerDocument),l=p.height,d=p.width;i.top+=f.top-f.marginTop,i.bottom=l+f.top,i.left+=f.left-f.marginLeft,i.right=d+f.left}}n=n||0;var h="number"===typeof n;return i.left+=h?n:n.left||0,i.top+=h?n:n.top||0,i.right-=h?n:n.right||0,i.bottom-=h?n:n.bottom||0,i}function P(e){var t=e.width,n=e.height;return t*n}function A(e,t,n,r,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var a=B(n,r,i,o),s={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},f=Object.keys(s).map(function(e){return D({key:e},s[e],{area:P(s[e])})}).sort(function(e,t){return t.area-e.area}),p=f.filter(function(e){var t=e.width,r=e.height;return t>=n.clientWidth&&r>=n.clientHeight}),l=p.length>0?p[0].key:f[0].key,u=e.split("-")[1];return l+(u?"-"+u:"")}function I(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=r?H(t):w(t,n);return k(n,o,r)}function R(e){var t=e.ownerDocument.defaultView,n=t.getComputedStyle(e),r=parseFloat(n.marginTop||0)+parseFloat(n.marginBottom||0),o=parseFloat(n.marginLeft||0)+parseFloat(n.marginRight||0),i={width:e.offsetWidth+o,height:e.offsetHeight+r};return i}function j(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function U(e,t,n){n=n.split("-")[0];var r=R(e),o={width:r.width,height:r.height},i=-1!==["right","left"].indexOf(n),a=i?"top":"left",s=i?"left":"top",f=i?"height":"width",p=i?"width":"height";return o[a]=t[a]+t[f]/2-r[f]/2,o[s]=n===s?t[s]-r[p]:t[j(s)],o}function Y(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function V(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var r=Y(e,function(e){return e[t]===n});return e.indexOf(r)}function q(e,t,n){var r=void 0===n?e:e.slice(0,V(e,"name",n));return r.forEach(function(e){e["function"]&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e["function"]||e.fn;e.enabled&&p(n)&&(t.offsets.popper=N(t.offsets.popper),t.offsets.reference=N(t.offsets.reference),t=n(t,e))}),t}function K(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=I(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=A(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=U(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=q(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function z(e,t){return e.some(function(e){var n=e.name,r=e.enabled;return r&&n===t})}function G(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),r=0;r<t.length;r++){var o=t[r],i=o?""+o+n:e;if("undefined"!==typeof document.body.style[i])return i}return null}function J(){return this.state.isDestroyed=!0,z(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[G("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function _(e){var t=e.ownerDocument;return t?t.defaultView:window}function X(e,t,n,r){var o="BODY"===e.nodeName,i=o?e.ownerDocument.defaultView:e;i.addEventListener(t,n,{passive:!0}),o||X(c(i.parentNode),t,n,r),r.push(i)}function Q(e,t,n,r){n.updateBound=r,_(e).addEventListener("resize",n.updateBound,{passive:!0});var o=c(e);return X(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function Z(){this.state.eventsEnabled||(this.state=Q(this.reference,this.options,this.state,this.scheduleUpdate))}function $(e,t){return _(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function ee(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=$(this.reference,this.state))}function te(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function ne(e,t){Object.keys(t).forEach(function(n){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&te(t[n])&&(r="px"),e.style[n]=t[n]+r})}function re(e,t){Object.keys(t).forEach(function(n){var r=t[n];!1!==r?e.setAttribute(n,t[n]):e.removeAttribute(n)})}function oe(e){return ne(e.instance.popper,e.styles),re(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&ne(e.arrowElement,e.arrowStyles),e}function ie(e,t,n,r,o){var i=I(o,t,e,n.positionFixed),a=A(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",a),ne(t,{position:n.positionFixed?"fixed":"absolute"}),n}function ae(e,t){var n=e.offsets,r=n.popper,o=n.reference,i=Math.round,a=Math.floor,s=function(e){return e},f=i(o.width),p=i(r.width),l=-1!==["left","right"].indexOf(e.placement),u=-1!==e.placement.indexOf("-"),c=f%2===p%2,d=f%2===1&&p%2===1,h=t?l||u||c?i:a:s,m=t?i:s;return{left:h(d&&!u&&t?r.left-1:r.left),top:m(r.top),bottom:m(r.bottom),right:h(r.right)}}var se=e&&/Firefox/i.test(navigator.userAgent);function fe(e,t){var n=t.x,r=t.y,o=e.offsets.popper,i=Y(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var a=void 0!==i?i:t.gpuAcceleration,s=v(e.instance.popper),f=F(s),p={position:o.position},l=ae(e,window.devicePixelRatio<2||!se),u="bottom"===n?"top":"bottom",c="right"===r?"left":"right",d=G("transform"),h=void 0,m=void 0;if(m="bottom"===u?"HTML"===s.nodeName?-s.clientHeight+l.bottom:-f.height+l.bottom:l.top,h="right"===c?"HTML"===s.nodeName?-s.clientWidth+l.right:-f.width+l.right:l.left,a&&d)p[d]="translate3d("+h+"px, "+m+"px, 0)",p[u]=0,p[c]=0,p.willChange="transform";else{var g="bottom"===u?-1:1,b="right"===c?-1:1;p[u]=m*g,p[c]=h*b,p.willChange=u+", "+c}var w={"x-placement":e.placement};return e.attributes=D({},w,e.attributes),e.styles=D({},p,e.styles),e.arrowStyles=D({},e.offsets.arrow,e.arrowStyles),e}function pe(e,t,n){var r=Y(e,function(e){var n=e.name;return n===t}),o=!!r&&e.some(function(e){return e.name===n&&e.enabled&&e.order<r.order});if(!o){var i="`"+t+"`",a="`"+n+"`";console.warn(a+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return o}function le(e,t){var n;if(!pe(e.instance.modifiers,"arrow","keepTogether"))return e;var r=t.element;if("string"===typeof r){if(r=e.instance.popper.querySelector(r),!r)return e}else if(!e.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var o=e.placement.split("-")[0],i=e.offsets,a=i.popper,s=i.reference,f=-1!==["left","right"].indexOf(o),p=f?"height":"width",u=f?"Top":"Left",c=u.toLowerCase(),d=f?"left":"top",h=f?"bottom":"right",m=R(r)[p];s[h]-m<a[c]&&(e.offsets.popper[c]-=a[c]-(s[h]-m)),s[c]+m>a[h]&&(e.offsets.popper[c]+=s[c]+m-a[h]),e.offsets.popper=N(e.offsets.popper);var v=s[c]+s[p]/2-m/2,g=l(e.instance.popper),b=parseFloat(g["margin"+u],10),w=parseFloat(g["border"+u+"Width"],10),y=v-e.offsets.popper[c]-b-w;return y=Math.max(Math.min(a[p]-m,y),0),e.arrowElement=r,e.offsets.arrow=(n={},M(n,c,Math.round(y)),M(n,d,""),n),e}function ue(e){return"end"===e?"start":"start"===e?"end":e}var ce=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],de=ce.slice(3);function he(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=de.indexOf(e),r=de.slice(n+1).concat(de.slice(0,n));return t?r.reverse():r}var me={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function ve(e,t){if(z(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=B(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),r=e.placement.split("-")[0],o=j(r),i=e.placement.split("-")[1]||"",a=[];switch(t.behavior){case me.FLIP:a=[r,o];break;case me.CLOCKWISE:a=he(r);break;case me.COUNTERCLOCKWISE:a=he(r,!0);break;default:a=t.behavior}return a.forEach(function(s,f){if(r!==s||a.length===f+1)return e;r=e.placement.split("-")[0],o=j(r);var p=e.offsets.popper,l=e.offsets.reference,u=Math.floor,c="left"===r&&u(p.right)>u(l.left)||"right"===r&&u(p.left)<u(l.right)||"top"===r&&u(p.bottom)>u(l.top)||"bottom"===r&&u(p.top)<u(l.bottom),d=u(p.left)<u(n.left),h=u(p.right)>u(n.right),m=u(p.top)<u(n.top),v=u(p.bottom)>u(n.bottom),g="left"===r&&d||"right"===r&&h||"top"===r&&m||"bottom"===r&&v,b=-1!==["top","bottom"].indexOf(r),w=!!t.flipVariations&&(b&&"start"===i&&d||b&&"end"===i&&h||!b&&"start"===i&&m||!b&&"end"===i&&v),y=!!t.flipVariationsByContent&&(b&&"start"===i&&h||b&&"end"===i&&d||!b&&"start"===i&&v||!b&&"end"===i&&m),x=w||y;(c||g||x)&&(e.flipped=!0,(c||g)&&(r=a[f+1]),x&&(i=ue(i)),e.placement=r+(i?"-"+i:""),e.offsets.popper=D({},e.offsets.popper,U(e.instance.popper,e.offsets.reference,e.placement)),e=q(e.instance.modifiers,e,"flip"))}),e}function ge(e){var t=e.offsets,n=t.popper,r=t.reference,o=e.placement.split("-")[0],i=Math.floor,a=-1!==["top","bottom"].indexOf(o),s=a?"right":"bottom",f=a?"left":"top",p=a?"width":"height";return n[s]<i(r[f])&&(e.offsets.popper[f]=i(r[f])-n[p]),n[f]>i(r[s])&&(e.offsets.popper[f]=i(r[s])),e}function be(e,t,n,r){var o=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+o[1],a=o[2];if(!i)return e;if(0===a.indexOf("%")){var s=void 0;switch(a){case"%p":s=n;break;case"%":case"%r":default:s=r}var f=N(s);return f[t]/100*i}if("vh"===a||"vw"===a){var p=void 0;return p="vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0),p/100*i}return i}function we(e,t,n,r){var o=[0,0],i=-1!==["right","left"].indexOf(r),a=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=a.indexOf(Y(a,function(e){return-1!==e.search(/,|\s/)}));a[s]&&-1===a[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var f=/\s*,\s*|\s+/,p=-1!==s?[a.slice(0,s).concat([a[s].split(f)[0]]),[a[s].split(f)[1]].concat(a.slice(s+1))]:[a];return p=p.map(function(e,r){var o=(1===r?!i:i)?"height":"width",a=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,a=!0,e):a?(e[e.length-1]+=t,a=!1,e):e.concat(t)},[]).map(function(e){return be(e,o,t,n)})}),p.forEach(function(e,t){e.forEach(function(n,r){te(n)&&(o[t]+=n*("-"===e[r-1]?-1:1))})}),o}function ye(e,t){var n=t.offset,r=e.placement,o=e.offsets,i=o.popper,a=o.reference,s=r.split("-")[0],f=void 0;return f=te(+n)?[+n,0]:we(n,i,a,s),"left"===s?(i.top+=f[0],i.left-=f[1]):"right"===s?(i.top+=f[0],i.left+=f[1]):"top"===s?(i.left+=f[0],i.top-=f[1]):"bottom"===s&&(i.left+=f[0],i.top+=f[1]),e.popper=i,e}function xe(e,t){var n=t.boundariesElement||v(e.instance.popper);e.instance.reference===n&&(n=v(n));var r=G("transform"),o=e.instance.popper.style,i=o.top,a=o.left,s=o[r];o.top="",o.left="",o[r]="";var f=B(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);o.top=i,o.left=a,o[r]=s,t.boundaries=f;var p=t.priority,l=e.offsets.popper,u={primary:function(e){var n=l[e];return l[e]<f[e]&&!t.escapeWithReference&&(n=Math.max(l[e],f[e])),M({},e,n)},secondary:function(e){var n="right"===e?"left":"top",r=l[n];return l[e]>f[e]&&!t.escapeWithReference&&(r=Math.min(l[n],f[e]-("right"===e?l.width:l.height))),M({},n,r)}};return p.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";l=D({},l,u[t](e))}),e.offsets.popper=l,e}function Ee(e){var t=e.placement,n=t.split("-")[0],r=t.split("-")[1];if(r){var o=e.offsets,i=o.reference,a=o.popper,s=-1!==["bottom","top"].indexOf(n),f=s?"left":"top",p=s?"width":"height",l={start:M({},f,i[f]),end:M({},f,i[f]+i[p]-a[p])};e.offsets.popper=D({},a,l[r])}return e}function Oe(e){if(!pe(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=Y(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}function Le(e){var t=e.placement,n=t.split("-")[0],r=e.offsets,o=r.popper,i=r.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return o[a?"left":"top"]=i[n]-(s?o[a?"width":"height"]:0),e.placement=j(t),e.offsets.popper=N(o),e}var Te={shift:{order:100,enabled:!0,fn:Ee},offset:{order:200,enabled:!0,fn:ye,offset:0},preventOverflow:{order:300,enabled:!0,fn:xe,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:ge},arrow:{order:500,enabled:!0,fn:le,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:ve,behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:Le},hide:{order:800,enabled:!0,fn:Oe},computeStyle:{order:850,enabled:!0,fn:fe,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:oe,onLoad:ie,gpuAcceleration:void 0}},Ce={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:Te},Me=function(){function e(t,n){var r=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};T(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=f(this.update.bind(this)),this.options=D({},e.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(D({},e.Defaults.modifiers,o.modifiers)).forEach(function(t){r.options.modifiers[t]=D({},e.Defaults.modifiers[t]||{},o.modifiers?o.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return D({name:e},r.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&p(e.onLoad)&&e.onLoad(r.reference,r.popper,r.options,e,r.state)}),this.update();var i=this.options.eventsEnabled;i&&this.enableEventListeners(),this.state.eventsEnabled=i}return C(e,[{key:"update",value:function(){return K.call(this)}},{key:"destroy",value:function(){return J.call(this)}},{key:"enableEventListeners",value:function(){return Z.call(this)}},{key:"disableEventListeners",value:function(){return ee.call(this)}}]),e}();return Me.Utils=("undefined"!==typeof window?window:t).PopperUtils,Me.placements=ce,Me.Defaults=Ce,Me})}).call(this,n("c8ba"))}}]);