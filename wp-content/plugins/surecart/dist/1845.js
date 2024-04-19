"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[1845],{7032:function(t,e,n){function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"polite",e=document.createElement("div");e.id="a11y-speak-".concat(t),e.className="a11y-speak-region",e.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),e.setAttribute("aria-live",t),e.setAttribute("aria-relevant","additions text"),e.setAttribute("aria-atomic","true");var n=document,i=n.body;return i&&i.appendChild(e),e}n.d(e,{s:function(){return s}});var r,o="";function s(t,e){!function(){for(var t=document.getElementsByClassName("a11y-speak-region"),e=document.getElementById("a11y-speak-intro-text"),n=0;n<t.length;n++)t[n].textContent="";e&&e.setAttribute("hidden","hidden")}(),t=function(t){return t=t.replace(/<[^<>]+>/g," "),o===t&&(t+=" "),o=t,t}(t);var n=document.getElementById("a11y-speak-intro-text"),i=document.getElementById("a11y-speak-assertive"),r=document.getElementById("a11y-speak-polite");i&&"assertive"===e?i.textContent=t:r&&(r.textContent=t),n&&n.removeAttribute("hidden")}r=function(){var t=document.getElementById("a11y-speak-intro-text"),e=document.getElementById("a11y-speak-assertive"),n=document.getElementById("a11y-speak-polite");null===t&&function(){var t=document.createElement("p");t.id="a11y-speak-intro-text",t.className="a11y-speak-intro-text",t.textContent=wp.i18n.__("Notifications"),t.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),t.setAttribute("hidden","hidden");var e=document.body;e&&e.appendChild(t)}(),null===e&&i("assertive"),null===n&&i("polite")},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",r):r())},2134:function(t,e,n){function i(){return"rtl"===document.dir}n.d(e,{i:function(){return i}})},1845:function(t,e,n){n.r(e),n.d(e,{sc_dropdown:function(){return bt},sc_menu:function(){return xt},sc_menu_item:function(){return wt}});var i=n(5671),r=n(3144),o=n(9062),s=n(5987),a=n(1002),c=n(4942),l=n(5861),u=n(1284),f=n.n(u),d=n(8860),h=n(7032),p=n(2134),m=["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"],v=["mainAxis","crossAxis","limiter"],g=["apply"];function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){(0,c.Z)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function x(t){return t.split("-")[0]}function w(t){return t.split("-")[1]}function k(t){return["top","bottom"].includes(x(t))?"x":"y"}function _(t){return"y"===t?"height":"width"}function A(t,e,n){var i,r=t.reference,o=t.floating,s=r.x+r.width/2-o.width/2,a=r.y+r.height/2-o.height/2,c=k(e),l=_(c),u=r[l]/2-o[l]/2,f="x"===c;switch(x(e)){case"top":i={x:s,y:r.y-o.height};break;case"bottom":i={x:s,y:r.y+r.height};break;case"right":i={x:r.x+r.width,y:a};break;case"left":i={x:r.x-o.width,y:a};break;default:i={x:r.x,y:r.y}}switch(w(e)){case"start":i[c]-=u*(n&&f?-1:1);break;case"end":i[c]+=u*(n&&f?-1:1)}return i}var C=function(){var t=(0,l.Z)(f().mark((function t(e,n,i){var r,o,s,l,u,d,h,p,m,v,g,y,x,w,k,_,C,E,O,R,L,P,D,S;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i.placement,o=void 0===r?"bottom":r,s=i.strategy,l=void 0===s?"absolute":s,u=i.middleware,d=void 0===u?[]:u,h=i.platform,t.next=3,null==h.isRTL?void 0:h.isRTL(n);case 3:return p=t.sent,t.next=6,h.getElementRects({reference:e,floating:n,strategy:l});case 6:m=t.sent,v=A(m,o,p),g=v.x,y=v.y,x=o,w={},k=0;case 11:if(!(k<d.length)){t.next=43;break}return _=d[k],C=_.name,E=_.fn,t.next=15,E({x:g,y:y,initialPlacement:o,placement:x,strategy:l,middlewareData:w,rects:m,platform:h,elements:{reference:e,floating:n}});case 15:if(O=t.sent,R=O.x,L=O.y,P=O.data,D=O.reset,g=null!=R?R:g,y=null!=L?L:y,w=b(b({},w),{},(0,c.Z)({},C,b(b({},w[C]),P))),!D){t.next=40;break}if("object"!==(0,a.Z)(D)){t.next=38;break}if(D.placement&&(x=D.placement),!D.rects){t.next=35;break}if(!0!==D.rects){t.next=33;break}return t.next=30,h.getElementRects({reference:e,floating:n,strategy:l});case 30:t.t0=t.sent,t.next=34;break;case 33:t.t0=D.rects;case 34:m=t.t0;case 35:S=A(m,x,p),g=S.x,y=S.y;case 38:return k=-1,t.abrupt("continue",40);case 40:k++,t.next=11;break;case 43:return t.abrupt("return",{x:g,y:y,placement:x,strategy:l,middlewareData:w});case 44:case"end":return t.stop()}}),t)})));return function(_x,e,n){return t.apply(this,arguments)}}();function E(t){return"number"!=typeof t?function(t){return b({top:0,right:0,bottom:0,left:0},t)}(t):{top:t,right:t,bottom:t,left:t}}function O(t){return b(b({},t),{},{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}function R(t,e){return L.apply(this,arguments)}function L(){return L=(0,l.Z)(f().mark((function t(e,n){var i,r,o,s,a,c,l,u,d,h,p,m,v,g,y,x,w,k,_,A,C,R;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return void 0===n&&(n={}),r=e.x,o=e.y,s=e.platform,a=e.rects,c=e.elements,l=e.strategy,d=(u=n).boundary,h=void 0===d?"clippingAncestors":d,p=u.rootBoundary,m=void 0===p?"viewport":p,v=u.elementContext,g=void 0===v?"floating":v,y=u.altBoundary,x=void 0!==y&&y,w=u.padding,k=E(void 0===w?0:w),_="floating"===g?"reference":"floating",A=c[x?_:g],t.t0=O,t.t1=s,t.next=10,null==s.isElement?void 0:s.isElement(A);case 10:if(t.t2=i=t.sent,null==t.t2){t.next=15;break}t.t3=i,t.next=16;break;case 15:t.t3=!0;case 16:if(!t.t3){t.next=20;break}t.t4=A,t.next=26;break;case 20:if(t.t5=A.contextElement,t.t5){t.next=25;break}return t.next=24,null==s.getDocumentElement?void 0:s.getDocumentElement(c.floating);case 24:t.t5=t.sent;case 25:t.t4=t.t5;case 26:return t.t6=t.t4,t.t7=h,t.t8=m,t.t9=l,t.t10={element:t.t6,boundary:t.t7,rootBoundary:t.t8,strategy:t.t9},t.next=33,t.t1.getClippingRect.call(t.t1,t.t10);case 33:if(t.t11=t.sent,C=(0,t.t0)(t.t11),t.t12=O,!s.convertOffsetParentRelativeRectToViewportRelativeRect){t.next=49;break}return t.t14=s,t.t15="floating"===g?b(b({},a.floating),{},{x:r,y:o}):a.reference,t.next=41,null==s.getOffsetParent?void 0:s.getOffsetParent(c.floating);case 41:return t.t16=t.sent,t.t17=l,t.t18={rect:t.t15,offsetParent:t.t16,strategy:t.t17},t.next=46,t.t14.convertOffsetParentRelativeRectToViewportRelativeRect.call(t.t14,t.t18);case 46:t.t13=t.sent,t.next=50;break;case 49:t.t13=a[g];case 50:return t.t19=t.t13,R=(0,t.t12)(t.t19),t.abrupt("return",{top:C.top-R.top+k.top,bottom:R.bottom-C.bottom+k.bottom,left:C.left-R.left+k.left,right:R.right-C.right+k.right});case 53:case"end":return t.stop()}}),t)}))),L.apply(this,arguments)}var P=Math.min,D=Math.max;function S(t,e,n){return D(t,P(e,n))}var Z={left:"right",right:"left",bottom:"top",top:"bottom"};function T(t){return t.replace(/left|right|bottom|top/g,(function(t){return Z[t]}))}function H(t,e,n){void 0===n&&(n=!1);var i=w(t),r=k(t),o=_(r),s="x"===r?i===(n?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[o]>e.floating[o]&&(s=T(s)),{main:s,cross:T(s)}}var I={start:"end",end:"start"};function j(t){return t.replace(/start|end/g,(function(t){return I[t]}))}function B(t){var e=T(t);return[j(t),e,j(e)]}function W(t,e){return F.apply(this,arguments)}function F(){return F=(0,l.Z)(f().mark((function t(e,n){var i,r,o,s,a,c,l,u,d,h,p,m,v,g;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.placement,r=e.platform,o=e.elements,t.next=3,null==r.isRTL?void 0:r.isRTL(o.floating);case 3:return s=t.sent,a=x(i),c=w(i),l="x"===k(i),u=["left","top"].includes(a)?-1:1,d=s&&l?-1:1,h="function"==typeof n?n(e):n,p="number"==typeof h?{mainAxis:h,crossAxis:0,alignmentAxis:null}:b({mainAxis:0,crossAxis:0,alignmentAxis:null},h),m=p.mainAxis,v=p.crossAxis,g=p.alignmentAxis,c&&"number"==typeof g&&(v="end"===c?-1*g:g),t.abrupt("return",l?{x:v*d,y:m*u}:{x:m*u,y:v*d});case 13:case"end":return t.stop()}}),t)}))),F.apply(this,arguments)}var z=function(t){return void 0===t&&(t={}),{name:"shift",options:t,fn:function(e){return(0,l.Z)(f().mark((function n(){var i,r,o,a,l,u,d,h,p,m,g,y,w,_,A,C,E,O,L,P,D,Z,T,H,I;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.x,o=e.y,a=e.placement,u=(l=t).mainAxis,d=void 0===u||u,h=l.crossAxis,p=void 0!==h&&h,m=l.limiter,g=void 0===m?{fn:function(t){return{x:t.x,y:t.y}}}:m,y=(0,s.Z)(l,v),w={x:r,y:o},n.next=5,R(e,y);case 5:return _=n.sent,A=k(x(a)),C="x"===A?"y":"x",E=w[A],O=w[C],d&&(L="y"===A?"bottom":"right",P=E+_["y"===A?"top":"left"],D=E-_[L],E=S(P,E,D)),p&&(Z="y"===C?"bottom":"right",T=O+_["y"===C?"top":"left"],H=O-_[Z],O=S(T,O,H)),I=g.fn(b(b({},e),{},(i={},(0,c.Z)(i,A,E),(0,c.Z)(i,C,O),i))),n.abrupt("return",b(b({},I),{},{data:{x:I.x-r,y:I.y-o}}));case 14:case"end":return n.stop()}}),n)})))()}}},M=function(t){return void 0===t&&(t={}),{name:"size",options:t,fn:function(e){return(0,l.Z)(f().mark((function n(){var i,r,o,a,c,l,u,d,h,p,m,v,y,k,_,A,C,E,O;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e.placement,r=e.rects,o=e.platform,a=e.elements,l=(c=t).apply,u=(0,s.Z)(c,g),n.next=4,R(e,u);case 4:if(d=n.sent,h=x(i),p=w(i),"top"!==h&&"bottom"!==h){n.next=26;break}return m=h,n.t0=p,n.next=12,null==o.isRTL?void 0:o.isRTL(a.floating);case 12:if(!n.sent){n.next=16;break}n.t1="start",n.next=17;break;case 16:n.t1="end";case 17:if(n.t2=n.t1,n.t0!==n.t2){n.next=22;break}n.t3="left",n.next=23;break;case 22:n.t3="right";case 23:v=n.t3,n.next=28;break;case 26:v=h,m="end"===p?"top":"bottom";case 28:return y=D(d.left,0),k=D(d.right,0),_=D(d.top,0),A=D(d.bottom,0),C={availableHeight:r.floating.height-(["left","right"].includes(i)?2*(0!==_||0!==A?_+A:D(d.top,d.bottom)):d[m]),availableWidth:r.floating.width-(["top","bottom"].includes(i)?2*(0!==y||0!==k?y+k:D(d.left,d.right)):d[v])},n.next=35,o.getDimensions(a.floating);case 35:return E=n.sent,null==l||l(b(b({},e),C)),n.next=39,o.getDimensions(a.floating);case 39:if(O=n.sent,E.width===O.width&&E.height===O.height){n.next=42;break}return n.abrupt("return",{reset:{rects:!0}});case 42:return n.abrupt("return",{});case 43:case"end":return n.stop()}}),n)})))()}}};function N(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function V(t){if(null==t)return window;if(!N(t)){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function K(t){return V(t).getComputedStyle(t)}function q(t){return N(t)?"":t?(t.nodeName||"").toLowerCase():""}function U(){var t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((function(t){return t.brand+"/"+t.version})).join(" "):navigator.userAgent}function X(t){return t instanceof V(t).HTMLElement}function Y(t){return t instanceof V(t).Element}function G(t){return"undefined"!=typeof ShadowRoot&&(t instanceof V(t).ShadowRoot||t instanceof ShadowRoot)}function J(t){var e=K(t),n=e.overflow,i=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+i)}function Q(t){return["table","td","th"].includes(q(t))}function $(t){var e=/firefox/i.test(U()),n=K(t);return"none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||["transform","perspective"].includes(n.willChange)||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter}function tt(){return!/^((?!chrome|android).)*safari/i.test(U())}var et=Math.min,nt=Math.max,it=Math.round;function rt(t,e,n){var i,r,o,s;void 0===e&&(e=!1),void 0===n&&(n=!1);var a=t.getBoundingClientRect(),c=1,l=1;e&&X(t)&&(c=t.offsetWidth>0&&it(a.width)/t.offsetWidth||1,l=t.offsetHeight>0&&it(a.height)/t.offsetHeight||1);var u=Y(t)?V(t):window,f=!tt()&&n,d=(a.left+(f&&null!=(i=null==(r=u.visualViewport)?void 0:r.offsetLeft)?i:0))/c,h=(a.top+(f&&null!=(o=null==(s=u.visualViewport)?void 0:s.offsetTop)?o:0))/l,p=a.width/c,m=a.height/l;return{width:p,height:m,top:h,right:d+p,bottom:h+m,left:d,x:d,y:h}}function ot(t){return(e=t,(e instanceof V(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function st(t){return Y(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function at(t){return rt(ot(t)).left+st(t).scrollLeft}function ct(t,e,n){var i=X(e),r=ot(e),o=rt(t,i&&function(t){var e=rt(t);return it(e.width)!==t.offsetWidth||it(e.height)!==t.offsetHeight}(e),"fixed"===n),s={scrollLeft:0,scrollTop:0},a={x:0,y:0};if(i||!i&&"fixed"!==n)if(("body"!==q(e)||J(r))&&(s=st(e)),X(e)){var c=rt(e,!0);a.x=c.x+e.clientLeft,a.y=c.y+e.clientTop}else r&&(a.x=at(r));return{x:o.left+s.scrollLeft-a.x,y:o.top+s.scrollTop-a.y,width:o.width,height:o.height}}function lt(t){return"html"===q(t)?t:t.assignedSlot||t.parentNode||(G(t)?t.host:null)||ot(t)}function ut(t){return X(t)&&"fixed"!==getComputedStyle(t).position?t.offsetParent:null}function ft(t){for(var e=V(t),n=ut(t);n&&Q(n)&&"static"===getComputedStyle(n).position;)n=ut(n);return n&&("html"===q(n)||"body"===q(n)&&"static"===getComputedStyle(n).position&&!$(n))?e:n||function(t){var e=lt(t);for(G(e)&&(e=e.host);X(e)&&!["html","body"].includes(q(e));){if($(e))return e;e=e.parentNode}return null}(t)||e}function dt(t){if(X(t))return{width:t.offsetWidth,height:t.offsetHeight};var e=rt(t);return{width:e.width,height:e.height}}function ht(t){var e=lt(t);return["html","body","#document"].includes(q(e))?t.ownerDocument.body:X(e)&&J(e)?e:ht(e)}function pt(t,e){var n;void 0===e&&(e=[]);var i=ht(t),r=i===(null==(n=t.ownerDocument)?void 0:n.body),o=V(i),s=r?[o].concat(o.visualViewport||[],J(i)?i:[]):i,a=e.concat(s);return r?a:a.concat(pt(s))}function mt(t,e,n){return"viewport"===e?O(function(t,e){var n=V(t),i=ot(t),r=n.visualViewport,o=i.clientWidth,s=i.clientHeight,a=0,c=0;if(r){o=r.width,s=r.height;var l=tt();(l||!l&&"fixed"===e)&&(a=r.offsetLeft,c=r.offsetTop)}return{width:o,height:s,x:a,y:c}}(t,n)):Y(e)?function(t,e){var n=rt(t,!1,"fixed"===e),i=n.top+t.clientTop,r=n.left+t.clientLeft;return{top:i,left:r,x:r,y:i,right:r+t.clientWidth,bottom:i+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}(e,n):O(function(t){var e,n=ot(t),i=st(t),r=null==(e=t.ownerDocument)?void 0:e.body,o=nt(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),s=nt(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),a=-i.scrollLeft+at(t),c=-i.scrollTop;return"rtl"===K(r||n).direction&&(a+=nt(n.clientWidth,r?r.clientWidth:0)-o),{width:o,height:s,x:a,y:c}}(ot(t)))}var vt={getClippingRect:function(t){var e=t.element,n=t.boundary,i=t.rootBoundary,r=t.strategy,s="clippingAncestors"===n?function(t){var e=pt(t),n=["absolute","fixed"].includes(K(t).position)&&X(t)?ft(t):t;return Y(n)?e.filter((function(t){return Y(t)&&function(t,e){var n=null==e||null==e.getRootNode?void 0:e.getRootNode();if(null!=t&&t.contains(e))return!0;if(n&&G(n)){var i=e;do{if(i&&t===i)return!0;i=i.parentNode||i.host}while(i)}return!1}(t,n)&&"body"!==q(t)})):[]}(e):[].concat(n),a=[].concat((0,o.Z)(s),[i]),c=a[0],l=a.reduce((function(t,n){var i=mt(e,n,r);return t.top=nt(i.top,t.top),t.right=et(i.right,t.right),t.bottom=et(i.bottom,t.bottom),t.left=nt(i.left,t.left),t}),mt(e,c,r));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){var e=t.rect,n=t.offsetParent,i=t.strategy,r=X(n),o=ot(n);if(n===o)return e;var s={scrollLeft:0,scrollTop:0},a={x:0,y:0};if((r||!r&&"fixed"!==i)&&(("body"!==q(n)||J(o))&&(s=st(n)),X(n))){var c=rt(n,!0);a.x=c.x+n.clientLeft,a.y=c.y+n.clientTop}return b(b({},e),{},{x:e.x-s.scrollLeft+a.x,y:e.y-s.scrollTop+a.y})},isElement:Y,getDimensions:dt,getOffsetParent:ft,getDocumentElement:ot,getElementRects:function(t){var e=t.reference,n=t.floating,i=t.strategy;return{reference:ct(e,ft(n),i),floating:b(b({},dt(n)),{},{x:0,y:0})}},getClientRects:function(t){return Array.from(t.getClientRects())},isRTL:function(t){return"rtl"===K(t).direction}},gt=0,yt="",bt=function(){function t(e){(0,i.Z)(this,t),(0,d.r)(this,e),this.scShow=(0,d.c)(this,"scShow",7),this.scHide=(0,d.c)(this,"scHide",7),this.clickEl=void 0,this.disabled=void 0,this.open=!1,this.position=void 0,this.placement="bottom-start",this.distance=10,this.skidding=0,this.hoist=!1,this.closeOnSelect=!0,this.isVisible=void 0}return(0,r.Z)(t,[{key:"handleOpenChange",value:function(){this.open?this.show():this.hide()}},{key:"handleOutsideClick",value:function(t){var e=this;t.composedPath().some((function(t){return t===e.el}))||(this.open=!1)}},{key:"startPositioner",value:function(){this.stopPositioner(),this.updatePositioner(),this.positionerCleanup=function(t,e,n,i){void 0===i&&(i={});var r=i,s=r.ancestorScroll,a=void 0===s||s,c=r.ancestorResize,l=void 0===c||c,u=r.elementResize,f=void 0===u||u,d=r.animationFrame,h=void 0!==d&&d,p=!1,m=a&&!h,v=l&&!h,g=m||v?[].concat((0,o.Z)(Y(t)?pt(t):[]),(0,o.Z)(pt(e))):[];g.forEach((function(t){m&&t.addEventListener("scroll",n,{passive:!0}),v&&t.addEventListener("resize",n)}));var y,b=null;f&&(b=new ResizeObserver(n),Y(t)&&!h&&b.observe(t),b.observe(e));var x=h?rt(t):null;return h&&function e(){if(!p){var i=rt(t);!x||i.x===x.x&&i.y===x.y&&i.width===x.width&&i.height===x.height||n(),x=i,y=requestAnimationFrame(e)}}(),function(){var t;p=!0,g.forEach((function(t){m&&t.removeEventListener("scroll",n),v&&t.removeEventListener("resize",n)})),null==(t=b)||t.disconnect(),b=null,h&&cancelAnimationFrame(y)}}(this.trigger,this.positioner,this.updatePositioner.bind(this))}},{key:"updatePositioner",value:function(){var t,e,n=this;this.open&&this.trigger&&this.positioner&&function(t,e,n){return C(t,e,b({platform:vt},n))}(this.trigger,this.positioner,{placement:this.placement,middleware:[(e={mainAxis:this.distance,crossAxis:this.skidding},void 0===e&&(e=0),{name:"offset",options:e,fn:function(t){return(0,l.Z)(f().mark((function n(){var i,r,o;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t.x,r=t.y,n.next=3,W(t,e);case 3:return o=n.sent,n.abrupt("return",{x:i+o.x,y:r+o.y,data:o});case 5:case"end":return n.stop()}}),n)})))()}}),(void 0===t&&(t={}),{name:"flip",options:t,fn:function(e){return(0,l.Z)(f().mark((function n(){var i,r,a,c,l,u,d,h,p,v,g,y,b,w,k,_,A,C,E,O,L,P,D,S,Z,I,j,W,F,z,M,N,V,K,q;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.placement,a=e.middlewareData,c=e.rects,l=e.initialPlacement,u=e.platform,d=e.elements,p=(h=t).mainAxis,v=void 0===p||p,g=h.crossAxis,y=void 0===g||g,b=h.fallbackPlacements,w=h.fallbackStrategy,k=void 0===w?"bestFit":w,_=h.flipAlignment,A=void 0===_||_,C=(0,s.Z)(h,m),E=x(r),O=E===l,L=b||(O||!A?[T(l)]:B(l)),P=[l].concat((0,o.Z)(L)),n.next=8,R(e,C);case 8:if(D=n.sent,S=[],Z=(null==(i=a.flip)?void 0:i.overflows)||[],v&&S.push(D[E]),!y){n.next=23;break}return n.t0=H,n.t1=r,n.t2=c,n.next=18,null==u.isRTL?void 0:u.isRTL(d.floating);case 18:n.t3=n.sent,I=(0,n.t0)(n.t1,n.t2,n.t3),j=I.main,W=I.cross,S.push(D[j],D[W]);case 23:if(Z=[].concat((0,o.Z)(Z),[{placement:r,overflows:S}]),S.every((function(t){return t<=0}))){n.next=40;break}if(M=(null!=(F=null==(z=a.flip)?void 0:z.index)?F:0)+1,!(N=P[M])){n.next=29;break}return n.abrupt("return",{data:{index:M,overflows:Z},reset:{placement:N}});case 29:V="bottom",n.t4=k,n.next="bestFit"===n.t4?33:"initialPlacement"===n.t4?36:38;break;case 33:return q=null==(K=Z.map((function(t){return[t,t.overflows.filter((function(t){return t>0})).reduce((function(t,e){return t+e}),0)]})).sort((function(t,e){return t[1]-e[1]}))[0])?void 0:K[0].placement,q&&(V=q),n.abrupt("break",38);case 36:return V=l,n.abrupt("break",38);case 38:if(r===V){n.next=40;break}return n.abrupt("return",{reset:{placement:V}});case 40:return n.abrupt("return",{});case 41:case"end":return n.stop()}}),n)})))()}}),z(),M({apply:function(t){var e=t.availableWidth,i=t.availableHeight;Object.assign(n.panel.style,{maxWidth:"".concat(e,"px"),maxHeight:"".concat(i,"px")})},padding:8})],strategy:this.hoist?"fixed":"absolute"}).then((function(t){var e=t.x,i=t.y,r=t.placement;n.positioner.setAttribute("data-placement",r),Object.assign(n.positioner.style,{position:n.hoist?"fixed":"absolute",left:"".concat(e,"px"),top:"".concat(i,"px"),right:"auto"})}))}},{key:"stopPositioner",value:function(){this.positionerCleanup&&(this.positionerCleanup(),this.positionerCleanup=void 0,this.positioner.removeAttribute("data-placement"))}},{key:"show",value:function(){(0,h.s)(wp.i18n.__("Menu Selection Dropdown opened. Press Up/Down arrow to toggle between menu items.","surecart"),"assertive"),this.scShow.emit(),this.isVisible||(this.isVisible=!0,this.open=!0,this.startPositioner(),this.panel.focus())}},{key:"hide",value:function(){(0,h.s)(wp.i18n.__("Menu Selection Dropdown closed.","surecart"),"assertive"),this.scHide.emit(),this.isVisible&&(this.stopPositioner(),this.isVisible=!1,this.open=!1,this.el.shadowRoot.querySelector('slot[name="trigger"]').assignedElements({flatten:!0})[0].focus())}},{key:"handleClick",value:function(t){this.closeOnSelect&&t.composedPath().some((function(t){return t.classList&&t.classList.contains("menu-item")}))&&(this.open=!1)}},{key:"componentWillLoad",value:function(){var t=this;document.addEventListener("mousedown",(function(e){return t.handleOutsideClick(e)}))}},{key:"getMenu",value:function(){return this.el.shadowRoot.querySelector("slot").assignedNodes().find((function(t){return"sc-menu"===t.nodeName}))}},{key:"getItems",value:function(){return(0,o.Z)(this.el.querySelectorAll("sc-menu-item"))}},{key:"handleHide",value:function(){this.open=!1,gt=0,this.trigger.focus()}},{key:"handleKeyDown",value:function(t){var e=this.getItems();if("Tab"!==t.key){if(["ArrowDown","ArrowUp"].includes(t.key)){if(t.preventDefault(),t.stopImmediatePropagation(),this.open||(this.open=!0),"ArrowDown"===t.key)return"up"==yt&&(gt+=2),gt>e.length-1&&(gt=0),e[gt].setFocus(),yt="down",void gt++;if("ArrowUp"===t.key)return"down"==yt&&(gt-=2),gt<0&&(gt=e.length-1),e[gt].setFocus(),yt="up",void gt--}"Escape"!==t.key?("Enter"===t.key&&(this.open?this.handleHide():(t.stopImmediatePropagation(),t.preventDefault(),this.open=!0)),!t.ctrlKey&&t.metaKey):this.open&&this.handleHide()}else this.open&&this.handleHide()}},{key:"render",value:function(){var t=this;return(0,d.h)("div",{part:"base",class:{dropdown:!0,"dropdown--open":this.open,"dropdown--disabled":this.disabled}},(0,d.h)("span",{part:"trigger",class:"dropdown__trigger",ref:function(e){return t.trigger=e},onClick:function(){t.disabled||(t.open?t.hide():setTimeout((function(){t.show()}),0))},"aria-expanded":this.open?"true":"false","aria-haspopup":"true"},(0,d.h)("slot",{name:"trigger"})),(0,d.h)("div",{class:"dropdown__positioner",ref:function(e){return t.positioner=e}},(0,d.h)("div",{part:"panel",class:{dropdown__panel:!0,"position--top-left":"top-left"===this.position,"position--top-right":"top-right"===this.position,"position--bottom-left":"bottom-left"===this.position,"position--bottom-right":"bottom-right"===this.position},"aria-orientation":"vertical",tabindex:"-1",onClick:function(e){return t.handleClick(e)},ref:function(e){return t.panel=e}},(0,d.h)("slot",null))))}},{key:"el",get:function(){return(0,d.a)(this)}}],[{key:"watchers",get:function(){return{open:["handleOpenChange"]}}}]),t}();bt.style=":host{display:inline-block;--panel-height:75vh;--panel-width:11rem}.dropdown{position:relative}.dropdown.dropdown--open .dropdown__positioner{visibility:visible;opacity:1;transform:scale(1)}.dropdown__trigger{display:block;cursor:pointer;border-width:0;outline:none;background-color:unset}.dropdown--disabled,.dropdown--disabled .dropdown__trigger{cursor:not-allowed}.dropdown__positioner{position:absolute;right:0;width:100%;z-index:var(--sc-z-index-dropdown);opacity:0;visibility:hidden;transform:scale(0.9);min-width:var(--panel-width)}.dropdown__panel{transform-origin:top left;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);max-height:var(--panel-height);font-family:var(--sc-font-sans);font-size:var(--sc-font-size-medium);font-weight:var(--sc-font-weight-normal);color:var(--color);background-color:var(--sc-panel-background-color);border:solid 1px var(--sc-panel-border-color);border-radius:var(--sc-border-radius-medium);box-shadow:var(--sc-shadow-large);overflow:auto;overscroll-behavior:none;transition:var(--sc-transition-fast) opacity, var(--sc-transition-fast) transform;z-index:5}";var xt=function(){function t(e){(0,i.Z)(this,t),(0,d.r)(this,e),this.scSelect=(0,d.c)(this,"scSelect",7),this.items=[],this.ariaLabel=void 0}var e;return(0,r.Z)(t,[{key:"handleClick",value:function(t){var e=t.target.closest("sc-menu-item");e&&!e.disabled&&this.scSelect.emit({item:e})}},{key:"handleKeyDown",value:function(t){if("Enter"===t.key){var e=this.getCurrentItem();t.preventDefault(),e&&this.scSelect.emit({item:e}),(0,h.s)(wp.i18n.sprintf(wp.i18n.__("Menu %s selected","surecart"),e.textContent),"assertive")}if(" "===t.key&&t.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(t.key)){var n=this.getCurrentItem(),i=n?this.items.indexOf(n):0;if(this.items.length)return t.preventDefault(),"ArrowDown"===t.key?i++:"ArrowUp"===t.key?i--:"Home"===t.key?i=0:"End"===t.key&&(i=this.items.length-1),i<0&&(i=0),i>this.items.length-1&&(i=this.items.length-1),void this.setCurrentItem(this.items[i])}}},{key:"getCurrentItem",value:function(){return this.items.find((function(t){return"0"===t.getAttribute("tabindex")}))}},{key:"setCurrentItem",value:(e=(0,l.Z)(f().mark((function t(e){var n;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.disabled?this.items[0]:e,this.items.forEach((function(t){t.setAttribute("tabindex",t===n?"0":"-1")}));case 2:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})},{key:"syncItems",value:function(){var t=this.el.shadowRoot.querySelector("slot").assignedElements({flatten:!0});this.items=t.filter((function(t){return"sc-menu-item"===t.nodeName}))}},{key:"handleSlotChange",value:function(){this.syncItems()}},{key:"render",value:function(){var t=this;return(0,d.h)("div",{part:"base",class:"menu",tabindex:"0",onKeyDown:function(e){return t.handleKeyDown(e)}},(0,d.h)("slot",{onSlotchange:function(){return t.handleSlotChange()}}))}},{key:"el",get:function(){return(0,d.a)(this)}}]),t}();xt.style=":host{display:block}.menu{padding:var(--sc-spacing-x-small) 0}.menu:focus{outline:none}::slotted(sc-input){margin-top:-var(--sc-spacing-x-small)}::slotted(sc-divider){--spacing:var(--sc-spacing-x-small)}";var wt=function(){function t(e){(0,i.Z)(this,t),(0,d.r)(this,e),this.hasFocus=!1,this.href=void 0,this.target=void 0,this.checked=!1,this.value="",this.disabled=!1}var e,n;return(0,r.Z)(t,[{key:"setFocus",value:(n=(0,l.Z)(f().mark((function t(e){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.menuItem.focus(e);case 1:case"end":return t.stop()}}),t,this)}))),function(t){return n.apply(this,arguments)})},{key:"setBlur",value:(e=(0,l.Z)(f().mark((function t(){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.menuItem.blur();case 1:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"handleBlur",value:function(){this.hasFocus=!1}},{key:"handleFocus",value:function(){this.hasFocus=!0}},{key:"render",value:function(){var t=this,e=this.href?"a":"div";return(0,d.h)(e,{ref:function(e){return t.menuItem=e},part:"base",class:{"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--focused":this.hasFocus,"menu-item--is-rtl":(0,p.i)()},href:this.href,role:"menuitem","aria-disabled":this.disabled?"true":"false","aria-checked":this.checked?"true":"false",tabindex:this.disabled?void 0:"0",onFocus:function(){return t.handleFocus()},onBlur:function(){return t.handleBlur()},onMouseEnter:function(){return t.handleFocus()},onMouseLeave:function(){return t.handleBlur()},onKeyDown:function(e){" "!==e.key&&"Spacebar"!==e.key&&"Enter"!==e.key||t.menuItem.click()},"aria-label":this.el.innerText,target:this.target},(0,d.h)("span",{part:"checked-icon",class:"menu-item__check"},(0,d.h)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-check",viewBox:"0 0 16 16"},(0,d.h)("path",{d:"M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"}))),(0,d.h)("span",{part:"prefix",class:"menu-item__prefix"},(0,d.h)("slot",{name:"prefix"})),(0,d.h)("span",{part:"label",class:"menu-item__label"},(0,d.h)("slot",null)),(0,d.h)("span",{part:"suffix",class:"menu-item__suffix"},(0,d.h)("slot",{name:"suffix"})))}},{key:"el",get:function(){return(0,d.a)(this)}}]),t}();wt.style=":host{display:block}.menu-item{position:relative;display:flex;align-items:stretch;font-family:var(--sc-font-sans);font-size:var(--sc-font-size-medium);font-weight:var(--sc-font-weight-normal);line-height:var(--sc-menu-item-line-height, var(--sc-line-height-normal));letter-spacing:var(--sc-letter-spacing-normal);text-align:left;color:var(--sc-menu-item-color, var(--sc-color-gray-700));padding:var(--sc-spacing-xx-small) var(--sc-spacing-x-large);transition:var(--sc-input-transition, var(--sc-transition-medium)) fill, var(--sc-input-transition, var(--sc-transition-medium)) background-color;user-select:none;white-space:var(--sc-menu-item-white-space, nowrap);cursor:pointer;text-decoration:none}.menu-item.menu-item--focused:not(.menu-item--disabled){outline:none;background-color:var(--sc-menu-item-background-focused, var(--sc-color-primary-500));color:var(--sc-color-white)}.menu-item.menu-item--disabled{outline:none;color:var(--sc-color-gray-400);cursor:not-allowed}.menu-item .menu-item__label{flex:1 1 auto}.menu-item .menu-item__prefix{flex:0 0 auto;display:flex;align-items:center}.menu-item .menu-item__prefix ::slotted(*){display:inline-flex;margin-right:var(--sc-spacing-small)}.menu-item .menu-item__suffix{flex:0 0 auto;display:flex;align-items:center}.menu-item .menu-item__suffix ::slotted(*){margin-left:var(--sc-spacing-x-small);text-align:right}.menu-item .menu-item__check{display:flex;position:absolute;left:0.5em;top:0.6em;visibility:hidden;align-items:center;font-size:inherit}.menu-item--checked .menu-item__check{visibility:visible}.menu-item--is-rtl.menu-item{text-align:right}.menu-item--is-rtl.menu-item .menu-item__check{left:auto;right:0.5em}"},4942:function(t,e,n){function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{Z:function(){return i}})},5987:function(t,e,n){n.d(e,{Z:function(){return r}});var i=n(3366);function r(t,e){if(null==t)return{};var n,r,o=(0,i.Z)(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)n=s[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}},3366:function(t,e,n){function i(t,e){if(null==t)return{};var n,i,r={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}n.d(e,{Z:function(){return i}})}}]);