/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms3d-csstransitions-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};


/*! skrollr 0.6.12 (2013-09-17) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
(function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,M(),at=this,r=r||{},ft=r.constants||{},r.easing)for(var n in r.easing)j[n]=r.easing[n];ht=r.edgeStrategy||"set",st={beforerender:r.beforerender,render:r.render},ct=r.forceHeight!==!1,ct&&(zt=r.scale||1),ut=r.mobileDeceleration||A,mt=r.smoothScrolling!==!1,gt=r.smoothScrollingDuration||E,dt={targetTop:at.getScrollTop()},Gt=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Gt?(lt=t.getElementById("skrollr-body"),lt&&ot(),W(),xt(o,[y,S],[T])):xt(o,[y,b],[T]),at.refresh(),bt(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==Lt||e!==It)&&(Lt=t,It=e,Bt=!0)});var i=R();return function l(){Z(),Tt=i(l)}(),at}var o,a,i=e.skrollr={get:function(){return at},init:function(e){return at||new n(e)},VERSION:"0.6.12"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",p="touchcancel",m="touchend",g="skrollable",d=g+"-before",v=g+"-between",h=g+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",w="linear",k=1e3,A=.004,E=200,x="start",F="end",C="center",D="bottom",H="___skrollable_id",V=/^\s+|\s+$/g,z=/^data(?:-(_\w+))?(?:-?(-?\d+))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,O=/\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,P=/^([a-z\-]+)\[(\w+)\]$/,q=/-([a-z])/g,I=function(e,t){return t.toUpperCase()},L=/[\-+]?[\d]*\.?[\d]+/g,B=/\{\?\}/g,_=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,G=/[a-z\-]+-gradient/g,N="",$="",M=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if(N=n.match(e)||+n==n&&t[n].match(e))break;if(!N)return N=$="",r;N=N[0],"-"===N.slice(0,1)?($=N,N={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[N]):$="-"+N.toLowerCase()+"-"}},R=function(){var t=e.requestAnimationFrame||e[N.toLowerCase()+"RequestAnimationFrame"],r=Dt();return(Gt||!t)&&(t=function(t){var n=Dt()-r,o=s.max(0,1e3/60-n);return e.setTimeout(function(){r=Dt(),t()},o)}),t},U=function(){var t=e.cancelAnimationFrame||e[N.toLowerCase()+"CancelAnimationFrame"];return(Gt||!t)&&(t=function(t){return e.clearTimeout(t)}),t},j={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,it=[],_t=0,e=t.getElementsByTagName("*")):e=[].concat(e),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=mt,f=ht;if(i.attributes){for(var u=0,p=i.attributes.length;p>u;u++){var m=i.attributes[u];if("data-anchor-target"!==m.name)if("data-smooth-scrolling"!==m.name)if("data-edge-strategy"!==m.name){var d=m.name.match(z);if(null!==d){var v=d[1];v=v&&ft[v.substr(1)]||0;var h=(0|d[2])+v,y=d[3],T=d[4]||y,b={offset:h,props:m.value,element:i};s.push(b),y&&y!==x&&y!==F?(b.mode="relative",b.anchors=[y,T]):(b.mode="absolute",y===F?b.isEnd=!0:(b.frame=h*zt,delete b.offset))}}else f=m.value;else c="off"!==m.value;else if(l=t.querySelector(m.value),null===l)throw'Unable to find anchor target "'+m.value+'"'}if(s.length){var S,w,k;!a&&H in i?(k=i[H],S=it[k].styleAttr,w=it[k].classAttr):(k=i[H]=_t++,S=i.style.cssText,w=Et(i)),it[k]={element:i,styleAttr:S,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f},xt(i,[g],[])}}}for(kt(),n=0,o=e.length;o>n;n++){var A=it[e[n][H]];A!==r&&(J(A),Q(A))}return at},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===C&&(i-=n/2),r===D?i+=l:r===C&&(i+=l/2),i+=at.getScrollTop(),0|i+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=Dt(),o=at.getScrollTop();return pt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||k,startTime:n,endTime:n+(t.duration||k),easing:j[t.easing||w],done:t.done},pt.topDiff||(pt.done&&pt.done.call(at,!1),pt=r),at},n.prototype.stopAnimateTo=function(){pt&&pt.done&&pt.done.call(at,!0),pt=r},n.prototype.isAnimatingTo=function(){return!!pt},n.prototype.setScrollTop=function(t,r){return r===!0&&(Pt=t,vt=!0),Gt?Nt=s.min(s.max(t,0),Vt):e.scrollTo(0,t),at},n.prototype.getScrollTop=function(){return Gt?Nt:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.on=function(e,t){return st[e]=t,at},n.prototype.off=function(e){return delete st[e],at},n.prototype.destroy=function(){var e=U();e(Tt),wt(),xt(o,[T],[y,b,S]);for(var t=0,n=it.length;n>t;t++)nt(it[t].element);o.style.overflow=a.style.overflow="auto",o.style.height=a.style.height="auto",lt&&i.setStyle(lt,"transform","none"),at=r,lt=r,st=r,ct=r,Vt=0,zt=1,ft=r,ut=r,Ot="down",Pt=-1,It=0,Lt=0,Bt=!1,pt=r,mt=r,gt=r,dt=r,vt=r,_t=0,ht=r,Gt=!1,Nt=0,yt=r};var W=function(){var t,n,i,l,c,g,d,v,h,y,T;bt(o,[f,u,p,m].join(" "),function(e){e.preventDefault();var o=e.changedTouches[0];switch(l=o.clientY,c=o.clientX,h=e.timeStamp,e.type){case f:t&&t.blur(),at.stopAnimateTo(),t=e.target,n=g=l,i=c,v=h;break;case u:d=l-g,T=h-y,at.setScrollTop(Nt-d,!0),g=l,y=h;break;default:case p:case m:var a=n-l,b=i-c,S=b*b+a*a;if(49>S)return t.focus(),t.click(),r;t=r;var w=d/T;w=s.max(s.min(w,3),-3);var k=s.abs(w/ut),A=w*k+.5*ut*k*k,E=at.getScrollTop()-A,x=0;E>Vt?(x=(Vt-E)/A,E=Vt):0>E&&(x=-E/A,E=0),k*=1-x,at.animateTo(E,{easing:"outCubic",duration:k})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},Y=function(){var e,t,r,n,o,a,i,l,c;for(l=0,c=it.length;c>l;l++)for(e=it[l],t=e.element,r=e.anchorTarget,n=e.keyFrames,o=0,a=n.length;a>o;o++)i=n[o],"relative"===i.mode&&(nt(t),i.frame=at.relativeToAbsolute(r,i.anchors[0],i.anchors[1])-i.offset,nt(t,!0)),ct&&!i.isEnd&&i.frame>Vt&&(Vt=i.frame);for(Vt=s.max(Vt,At()),l=0,c=it.length;c>l;l++){for(e=it[l],n=e.keyFrames,o=0,a=n.length;a>o;o++)i=n[o],i.isEnd&&(i.frame=Vt-i.offset);e.keyFrames.sort(Ht)}},X=function(e,t){for(var r=0,n=it.length;n>r;r++){var o,a,s=it[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,p=u[0].frame,m=u[u.length-1].frame,y=p>f,T=f>m,b=u[y?0:u.length-1];if(y||T){if(y&&-1===s.edge||T&&1===s.edge)continue;switch(xt(c,[y?d:h],[d,v,h]),s.edge=y?-1:1,s.edgeStrategy){case"reset":nt(c);continue;case"ease":f=b.frame;break;default:case"set":var S=b.props;for(o in S)l.call(S,o)&&(a=rt(S[o].value),i.setStyle(c,o,a));continue}}else 0!==s.edge&&(xt(c,[g,v],[d,h]),s.edge=0);for(var w=0,k=u.length-1;k>w;w++)if(f>=u[w].frame&&u[w+1].frame>=f){var A=u[w],E=u[w+1];for(o in A.props)if(l.call(A.props,o)){var x=(f-A.frame)/(E.frame-A.frame);x=A.props[o].easing(x),a=tt(A.props[o].value,E.props[o].value,x),a=rt(a),i.setStyle(c,o,a)}break}}},Z=function(){Bt&&(Bt=!1,kt());var e,t,n=at.getScrollTop(),o=Dt();if(pt)o>=pt.endTime?(n=pt.targetTop,e=pt.done,pt=r):(t=pt.easing((o-pt.startTime)/pt.duration),n=0|pt.startTop+t*pt.topDiff),at.setScrollTop(n,!0);else if(!Gt){var a=dt.targetTop-n;a&&(dt={startTop:Pt,topDiff:n-Pt,targetTop:n,startTime:qt,endTime:qt+gt}),dt.endTime>=o&&(t=j.sqrt((o-dt.startTime)/gt),n=0|dt.startTop+t*dt.topDiff)}if(Gt&&lt&&i.setStyle(lt,"transform","translate(0, "+-Nt+"px) "+yt),vt||Pt!==n){Ot=n>=Pt?"down":"up",vt=!1;var l={curTop:n,lastTop:Pt,maxTop:Vt,direction:Ot},s=st.beforerender&&st.beforerender.call(at,l);s!==!1&&(X(n,at.getScrollTop()),Pt=n,st.render&&st.render.call(at,l)),e&&e.call(at,!1)}qt=o},J=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=O.exec(l.props));)a=i[1],o=i[2],n=a.match(P),null!==n?(a=n[1],n=n[2]):n=w,o=o.indexOf("!")?K(o):[o.slice(1)],s[a]={value:o,easing:j[n]};l.props=s}},K=function(e){var t=[];return _.lastIndex=0,e=e.replace(_,function(e){return e.replace(L,function(e){return 100*(e/255)+"%"})}),$&&(G.lastIndex=0,e=e.replace(G,function(e){return $+e})),e=e.replace(L,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},Q=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)et(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)et(e.keyFrames[t],n)},et=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},tt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},rt=function(e){var t=1;return B.lastIndex=0,e[0].replace(B,function(){return e[t++]})},nt=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=it[n[H]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,xt(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=Et(n),n.style.cssText=r.styleAttr,xt(n,r.classAttr)))},ot=function(){yt="translateZ(0)",i.setStyle(lt,"transform",yt);var e=c(lt),t=e.getPropertyValue("transform"),r=e.getPropertyValue($+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(yt="")};i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(q,I).replace("-",""),"zIndex"===t)n[t]=""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{N&&(n[N+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var at,it,lt,st,ct,ft,ut,pt,mt,gt,dt,vt,ht,yt,Tt,bt=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),$t.push({element:t,name:a,listener:n})},St=i.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},wt=function(){for(var e,t=0,r=$t.length;r>t;t++)e=$t[t],St(e.element,e.name,e.listener);$t=[]},kt=function(){var e=at.getScrollTop();Vt=0,ct&&!Gt&&(a.style.height="auto"),Y(),ct&&!Gt&&(a.style.height=Vt+o.clientHeight+"px"),Gt?at.setScrollTop(s.min(at.getScrollTop(),Vt)):at.setScrollTop(e,!0),vt=!0},At=function(){var e=lt&&lt.offsetHeight||0,t=s.max(e,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight);return t-o.clientHeight},Et=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},xt=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=Ct(i).replace(Ct(o[l])," ");i=Ft(i);for(var c=0,f=n.length;f>c;c++)-1===Ct(i).indexOf(Ct(n[c]))&&(i+=" "+n[c]);t[a]=Ft(i)},Ft=function(e){return e.replace(V,"")},Ct=function(e){return" "+e+" "},Dt=Date.now||function(){return+new Date},Ht=function(e,t){return e.frame-t.frame},Vt=0,zt=1,Ot="down",Pt=-1,qt=Dt(),It=0,Lt=0,Bt=!1,_t=0,Gt=!1,Nt=0,$t=[]})(window,document);


/*! skrollr-menu 0.1.5 (2013-07-13) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr-menu | Free to use under terms of MIT license */
(function(t,e){"use strict";var n=500,r="sqrt",o="data-menu-top",u="data-menu-offset",a=e.skrollr,i=e.history,c=!!i.pushState,l=function(e){return"A"===e.tagName?e:e===t?!1:l(e.parentNode)},s=function(t){if(1===(t.which||t.button)){var e=l(t.target);e&&f(e)&&t.preventDefault()}},f=function(e,n){var r=e.getAttribute("href");if(!/^#/.test(r))return!1;var a,l=e.getAttribute(o);if(null!==l)a=+l;else{var s=t.getElementById(r.substr(1));if(!s)return!1;a=v.relativeToAbsolute(s,"top","top");var f=s.getAttribute(u);null!==f&&(a+=+f)}return c&&!n&&i.pushState({top:a},"",r),m&&!n?v.animateTo(a,{duration:h(v.getScrollTop(),a),easing:d}):p(function(){v.setScrollTop(a)}),!0},p=function(t){e.setTimeout(t,1)};a.menu={},a.menu.init=function(o,u){v=o,u=u||{},d=u.easing||r,m=u.animate!==!1,h=u.duration||n,"number"==typeof h&&(h=function(t){return function(){return t}}(h)),a.addEvent(t,"click",s),c&&e.addEventListener("popstate",function(t){var e=t.state||{},n=e.top||0;p(function(){v.setScrollTop(n)})},!1)};var v,d,h,m;p(function(){if(e.location.hash&&(e.scrollTo(0,0),t.querySelector)){var n=t.querySelector('a[href="'+e.location.hash+'"]');n&&f(n,!0)}})})(document,window);

/*
 * cond - v0.1 - 6/10/2009
 * http://benalman.com/projects/jquery-cond-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Licensed under the MIT license
 * http://benalman.com/about/license/
 * 
 * Based on suggestions and sample code by Stephen Band and DBJDBJ in the
 * jquery-dev Google group: http://bit.ly/jqba1
 */
(function($){$.fn.cond=function(){var e,a=arguments,b=0,f,d,c;while(!f&&b<a.length){f=a[b++];d=a[b++];f=$.isFunction(f)?f.call(this):f;c=!d?f:f?d.call(this,f):e}return c!==e?c:this}})(jQuery);

/**
 * jquery.slitslider.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */

;( function( $, window, undefined ) {
	
	'use strict';

	/*
	* debouncedresize: special jQuery event that happens once after a window resize
	*
	* latest version and complete README available on Github:
	* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
	*
	* Copyright 2011 @louis_remi
	* Licensed under the MIT license.
	*/
	var $event = $.event,
	$special,
	resizeTimeout;

	$special = $event.special.debouncedresize = {
		setup: function() {
			$( this ).on( "resize", $special.handler );
		},
		teardown: function() {
			$( this ).off( "resize", $special.handler );
		},
		handler: function( event, execAsap ) {
			// Save the context
			var context = this,
				args = arguments,
				dispatch = function() {
					// set correct event type
					event.type = "debouncedresize";
					$event.dispatch.apply( context, args );
				};

			if ( resizeTimeout ) {
				clearTimeout( resizeTimeout );
			}

			execAsap ?
				dispatch() :
				resizeTimeout = setTimeout( dispatch, $special.threshold );
		},
		threshold: 20
	};

	// global
	var $window = $( window ),
		$document = $( document ),
		Modernizr = window.Modernizr;

	$.Slitslider = function( options, element ) {
		
		this.$elWrapper = $( element );
		this._init( options );
		
	};

	$.Slitslider.defaults = {
		// transitions speed
		speed : 800,
		// if true the item's slices will also animate the opacity value
		optOpacity : false,
		// amount (%) to translate both slices - adjust as necessary
		translateFactor : 230,
		// maximum possible angle
		maxAngle : 25,
		// maximum possible scale
		maxScale : 2,
		// slideshow on / off
		autoplay : false,
		// keyboard navigation
		keyboard : true,
		// time between transitions
		interval : 4000,
		// callbacks
		onBeforeChange : function( slide, idx ) { return false; },
		onAfterChange : function( slide, idx ) { return false; }
	};

	$.Slitslider.prototype = {

		_init : function( options ) {
			
			// options
			this.options = $.extend( true, {}, $.Slitslider.defaults, options );

			// https://github.com/twitter/bootstrap/issues/2870
			this.transEndEventNames = {
				'WebkitTransition' : 'webkitTransitionEnd',
				'MozTransition' : 'transitionend',
				'OTransition' : 'oTransitionEnd',
				'msTransition' : 'MSTransitionEnd',
				'transition' : 'transitionend'
			};
			this.transEndEventName = this.transEndEventNames[ Modernizr.prefixed( 'transition' ) ];
			// suport for css 3d transforms and css transitions
			this.support = Modernizr.csstransitions && Modernizr.csstransforms3d;
			// the slider
			this.$el = this.$elWrapper.children( '.sl-slider' );
			// the slides
			this.$slides = this.$el.children( '.sl-slide' ).hide();
			// total slides
			this.slidesCount = this.$slides.length;
			// current slide
			this.current = 0;
			// control if it's animating
			this.isAnimating = false;
			// get container size
			this._getSize();
			// layout
			this._layout();
			// load some events
			this._loadEvents();
			// slideshow
			if( this.options.autoplay ) {
			
				this._startSlideshow();
			
			}

		},
		// gets the current container width & height
		_getSize : function() {

			this.size = {
				width : this.$elWrapper.outerWidth( true ),
				height : this.$elWrapper.outerHeight( true )
			};

		},
		_layout : function() {
			
			this.$slideWrapper = $( '<div class="sl-slides-wrapper" />' );
			
			// wrap the slides
			this.$slides.wrapAll( this.$slideWrapper ).each( function( i ) {
				
				var $slide = $( this ),
					// vertical || horizontal
					orientation = $slide.data( 'orientation' );
					
				$slide.addClass( 'sl-slide-' + orientation )
					  .children()
					  .wrapAll( '<div class="sl-content-wrapper" />' )
					  .wrapAll( '<div class="sl-content" />' );
			
			} );
			
			// set the right size of the slider/slides for the current window size
			this._setSize();
			// show first slide
			this.$slides.eq( this.current ).show();
			
		},
		_navigate : function( dir, pos ) {
			
			if( this.isAnimating || this.slidesCount < 2 ) {
			
				return false;
			
			}

			this.isAnimating = true;

			var self = this,
				$currentSlide = this.$slides.eq( this.current );

			// if position is passed
			if( pos !== undefined ) {

				this.current = pos;

			}
			// if not check the boundaries
			else if( dir === 'next' ) {

				this.current = this.current < this.slidesCount - 1 ? ++this.current : 0;

			}
			else if( dir === 'prev' ) {

				this.current = this.current > 0 ? --this.current : this.slidesCount - 1;

			}

			this.options.onBeforeChange( $currentSlide, this.current );
			
			// next slide to be shown
			var $nextSlide = this.$slides.eq( this.current ),
				// the slide we want to cut and animate
				$movingSlide = ( dir === 'next' ) ? $currentSlide : $nextSlide,
				
				// the following are the data attrs set for each slide
				configData = $movingSlide.data(),
				config = {};
			
			config.orientation = configData.orientation || 'horizontal',
			config.slice1angle = configData.slice1Rotation || 0,
			config.slice1scale = configData.slice1Scale || 1,
			config.slice2angle = configData.slice2Rotation || 0,
			config.slice2scale = configData.slice2Scale || 1;
				
			this._validateValues( config );
			
			var cssStyle = config.orientation === 'horizontal' ? {
					marginTop : -this.size.height / 2
				} : {
					marginLeft : -this.size.width / 2
				},
				// default slide's slices style
				resetStyle = {
					'transform' : 'translate(0%,0%) rotate(0deg) scale(1)',
					opacity : 1 
				},
				// slice1 style
				slice1Style	= config.orientation === 'horizontal' ? {
					'transform' : 'translateY(-' + this.options.translateFactor + '%) rotate(' + config.slice1angle + 'deg) scale(' + config.slice1scale + ')'
				} : {
					'transform' : 'translateX(-' + this.options.translateFactor + '%) rotate(' + config.slice1angle + 'deg) scale(' + config.slice1scale + ')'
				},
				// slice2 style
				slice2Style	= config.orientation === 'horizontal' ? {
					'transform' : 'translateY(' + this.options.translateFactor + '%) rotate(' + config.slice2angle + 'deg) scale(' + config.slice2scale + ')'
				} : {
					'transform' : 'translateX(' + this.options.translateFactor + '%) rotate(' + config.slice2angle + 'deg) scale(' + config.slice2scale + ')'
				};
			
			if( this.options.optOpacity ) {
			
				slice1Style.opacity = 0;
				slice2Style.opacity = 0;
			
			}
			
			// we are adding the classes sl-trans-elems and sl-trans-back-elems to the slide that is either coming "next"
			// or going "prev" according to the direction.
			// the idea is to make it more interesting by giving some animations to the respective slide's elements
			//( dir === 'next' ) ? $nextSlide.addClass( 'sl-trans-elems' ) : $currentSlide.addClass( 'sl-trans-back-elems' );
			
			$currentSlide.removeClass( 'sl-trans-elems' );

			var transitionProp = {
				'transition' : 'all ' + this.options.speed + 'ms ease-in-out'
			};

			// add the 2 slices and animate them
			$movingSlide.css( 'z-index', this.slidesCount )
						.find( 'div.sl-content-wrapper' )
						.wrap( $( '<div class="sl-content-slice" />' ).css( transitionProp ) )
						.parent()
						.cond(
							dir === 'prev', 
							function() {
							
								var slice = this;
								this.css( slice1Style );
								setTimeout( function() {
									
									slice.css( resetStyle );

								}, 50 );
										 
							}, 
							function() {
								
								var slice = this;
								setTimeout( function() {
									
									slice.css( slice1Style );

								}, 50 );
						
							}
						)
						.clone()
						.appendTo( $movingSlide )
						.cond(
							dir === 'prev', 
							function() {
								
								var slice = this;
								this.css( slice2Style );
								setTimeout( function() {

									$currentSlide.addClass( 'sl-trans-back-elems' );

									if( self.support ) {

										slice.css( resetStyle ).on( self.transEndEventName, function() {

											self._onEndNavigate( slice, $currentSlide, dir );

										} );

									}
									else {

										self._onEndNavigate( slice, $currentSlide, dir );

									}

								}, 50 );
						
							},
							function() {
								
								var slice = this;
								setTimeout( function() {

									$nextSlide.addClass( 'sl-trans-elems' );
									
									if( self.support ) {

										slice.css( slice2Style ).on( self.transEndEventName, function() {

											self._onEndNavigate( slice, $currentSlide, dir );

										} );

									}
									else {

										self._onEndNavigate( slice, $currentSlide, dir );

									}

								}, 50 );
								
							}
						)
						.find( 'div.sl-content-wrapper' )
						.css( cssStyle );
			
			$nextSlide.show();
			
		},
		_validateValues : function( config ) {
			
			// OK, so we are restricting the angles and scale values here.
			// This is to avoid the slices wrong sides to be shown.
			// you can adjust these values as you wish but make sure you also ajust the
			// paddings of the slides and also the options.translateFactor value and scale data attrs
			if( config.slice1angle > this.options.maxAngle || config.slice1angle < -this.options.maxAngle ) {
				
				config.slice1angle = this.options.maxAngle;
			
			}
			if( config.slice2angle > this.options.maxAngle  || config.slice2angle < -this.options.maxAngle ) {
				
				config.slice2angle = this.options.maxAngle;
			
			}
			if( config.slice1scale > this.options.maxScale || config.slice1scale <= 0 ) {
			
				config.slice1scale = this.options.maxScale;
			
			}
			if( config.slice2scale > this.options.maxScale || config.slice2scale <= 0 ) {
				
				config.slice2scale = this.options.maxScale;
			
			}
			if( config.orientation !== 'vertical' && config.orientation !== 'horizontal' ) {
			
				config.orientation = 'horizontal'
			
			}
			
		},
		_onEndNavigate : function( $slice, $oldSlide, dir ) {
			
			// reset previous slide's style after next slide is shown
			var $slide = $slice.parent(),
				removeClasses = 'sl-trans-elems sl-trans-back-elems';
			
			// remove second slide's slice
			$slice.remove();
			// unwrap..
			$slide.css( 'z-index', 1 )
				  .find( 'div.sl-content-wrapper' )
				  .unwrap();
			
			// hide previous current slide
			$oldSlide.hide().removeClass( removeClasses );
			$slide.removeClass( removeClasses );
			// now we can navigate again..
			this.isAnimating = false;
			this.options.onAfterChange( $slide, this.current );
			
		},
		_setSize : function() {
		
			// the slider and content wrappers will have the window's width and height
			var cssStyle = {
				width : this.size.width,
				height : this.size.height
			};
			
			this.$el.css( cssStyle ).find( 'div.sl-content-wrapper' ).css( cssStyle );
		
		},
		_loadEvents : function() {
			
			var self = this;
			
			$window.on( 'debouncedresize.slitslider', function( event ) {
				
				// update size values
				self._getSize();
				// set the sizes again
				self._setSize();
				
			} );

			if ( this.options.keyboard ) {
				
				$document.on( 'keydown.slitslider', function(e) {

					var keyCode = e.keyCode || e.which,
						arrow = {
							left: 37,
							up: 38,
							right: 39,
							down: 40
						};

					switch (keyCode) {
						
						case arrow.left :

							self._stopSlideshow();
							self._navigate( 'prev' );
							break;
						
						case arrow.right :
							
							self._stopSlideshow();
							self._navigate( 'next' );
							break;

					}

				} );

			}
		
		},
		_startSlideshow: function() {

			var self = this;

			this.slideshow = setTimeout( function() {

				self._navigate( 'next' );

				if ( self.options.autoplay ) {

					self._startSlideshow();

				}

			}, this.options.interval );

		},
		_stopSlideshow: function() {

			if ( this.options.autoplay ) {

				clearTimeout( this.slideshow );
				this.isPlaying = false;
				this.options.autoplay = false;

			}

		},
		_destroy : function( callback ) {
			
			this.$el.off( '.slitslider' ).removeData( 'slitslider' );
			$window.off( '.slitslider' );
			$document.off( '.slitslider' );
			this.$slides.each( function( i ) {

				var $slide = $( this ),
					$content = $slide.find( 'div.sl-content' ).children();

				$content.appendTo( $slide );
				$slide.children( 'div.sl-content-wrapper' ).remove();

			} );
			this.$slides.unwrap( this.$slideWrapper ).hide();
			this.$slides.eq( 0 ).show();
			if( callback ) {

				callback.call();

			}

		},
		// public methos: adds more slides to the slider
		add : function( $slides, callback ) {

			this.$slides = this.$slides.add( $slides );

			var self = this;
			
			
			$slides.each( function( i ) {

				var $slide = $( this ),
					// vertical || horizontal
					orientation = $slide.data( 'orientation' );

				$slide.hide().addClass( 'sl-slide-' + orientation )
					  .children()
					  .wrapAll( '<div class="sl-content-wrapper" />' )
					  .wrapAll( '<div class="sl-content" />' )
					  .end()
					  .appendTo( self.$el.find( 'div.sl-slides-wrapper' ) );

			} );

			this._setSize();

			this.slidesCount = this.$slides.length;
			
			if ( callback ) {

				callback.call( $items );

			}

		},
		// public method: shows next slide
		next : function() {

			this._stopSlideshow();
			this._navigate( 'next' );

		},
		// public method: shows previous slide
		previous : function() {

			this._stopSlideshow();
			this._navigate( 'prev' );

		},
		// public method: goes to a specific slide
		jump : function( pos ) {

			pos -= 1;

			if( pos === this.current || pos >= this.slidesCount || pos < 0 ) {

				return false;

			}

			this._stopSlideshow();
			this._navigate( pos > this.current ? 'next' : 'prev', pos );

		},
		// public method: starts the slideshow
		// any call to next(), previous() or jump() will stop the slideshow
		play : function() {

			if( !this.isPlaying ) {

				this.isPlaying = true;

				this._navigate( 'next' );
				this.options.autoplay = true;
				this._startSlideshow();

			}

		},
		// public method: pauses the slideshow
		pause : function() {

			if( this.isPlaying ) {

				this._stopSlideshow();

			}

		},
		// public method: check if isAnimating is true
		isActive : function() {

			return this.isAnimating;

		},
		// publicc methos: destroys the slicebox instance
		destroy : function( callback ) {

			this._destroy( callback );
		
		}

	};
	
	var logError = function( message ) {

		if ( window.console ) {

			window.console.error( message );
		
		}

	};
	
	$.fn.slitslider = function( options ) {

		var self = $.data( this, 'slitslider' );
		
		if ( typeof options === 'string' ) {
			
			var args = Array.prototype.slice.call( arguments, 1 );
			
			this.each(function() {
			
				if ( !self ) {

					logError( "cannot call methods on slitslider prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				
				}
				
				if ( !$.isFunction( self[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for slitslider self" );
					return;
				
				}
				
				self[ options ].apply( self, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
				
				if ( self ) {

					self._init();
				
				}
				else {

					self = $.data( this, 'slitslider', new $.Slitslider( options, this ) );
				
				}

			});
		
		}
		
		return self;
		
	};
	
} )( jQuery, window );

/*
 * jQuery FlexSlider v2.1
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
 ;(function(d){d.flexslider=function(i,k){var a=d(i),c=d.extend({},d.flexslider.defaults,k),e=c.namespace,p="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,t=p?"touchend":"click",l="vertical"===c.direction,m=c.reverse,h=0<c.itemWidth,r="fade"===c.animation,s=""!==c.asNavFor,f={};d.data(i,"flexslider",a);f={init:function(){a.animating=!1;a.currentSlide=c.startAt;a.animatingTo=a.currentSlide;a.atEnd=0===a.currentSlide||a.currentSlide===a.last;a.containerSelector=c.selector.substr(0,
 c.selector.search(" "));a.slides=d(c.selector,a);a.container=d(a.containerSelector,a);a.count=a.slides.length;a.syncExists=0<d(c.sync).length;"slide"===c.animation&&(c.animation="swing");a.prop=l?"top":"marginLeft";a.args={};a.manualPause=!1;var b=a,g;if(g=!c.video)if(g=!r)if(g=c.useCSS)a:{g=document.createElement("div");var n=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],e;for(e in n)if(void 0!==g.style[n[e]]){a.pfx=n[e].replace("Perspective","").toLowerCase();
 a.prop="-"+a.pfx+"-transform";g=!0;break a}g=!1}b.transitions=g;""!==c.controlsContainer&&(a.controlsContainer=0<d(c.controlsContainer).length&&d(c.controlsContainer));""!==c.manualControls&&(a.manualControls=0<d(c.manualControls).length&&d(c.manualControls));c.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));a.doMath();s&&f.asNav.setup();a.setup("init");c.controlNav&&f.controlNav.setup();c.directionNav&&f.directionNav.setup();c.keyboard&&
 (1===d(a.containerSelector).length||c.multipleKeyboard)&&d(document).bind("keyup",function(b){b=b.keyCode;if(!a.animating&&(39===b||37===b))b=39===b?a.getTarget("next"):37===b?a.getTarget("prev"):!1,a.flexAnimate(b,c.pauseOnAction)});c.mousewheel&&a.bind("mousewheel",function(b,g){b.preventDefault();var d=0>g?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(d,c.pauseOnAction)});c.pausePlay&&f.pausePlay.setup();c.slideshow&&(c.pauseOnHover&&a.hover(function(){!a.manualPlay&&!a.manualPause&&a.pause()},
 function(){!a.manualPause&&!a.manualPlay&&a.play()}),0<c.initDelay?setTimeout(a.play,c.initDelay):a.play());p&&c.touch&&f.touch();(!r||r&&c.smoothHeight)&&d(window).bind("resize focus",f.resize);setTimeout(function(){c.start(a)},200)},asNav:{setup:function(){a.asNav=!0;a.animatingTo=Math.floor(a.currentSlide/a.move);a.currentItem=a.currentSlide;a.slides.removeClass(e+"active-slide").eq(a.currentItem).addClass(e+"active-slide");a.slides.click(function(b){b.preventDefault();var b=d(this),g=b.index();
 !d(c.asNavFor).data("flexslider").animating&&!b.hasClass("active")&&(a.direction=a.currentItem<g?"next":"prev",a.flexAnimate(g,c.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){a.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var b=1,g;a.controlNavScaffold=d('<ol class="'+e+"control-nav "+e+("thumbnails"===c.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<a.pagingCount)for(var n=0;n<a.pagingCount;n++)g="thumbnails"===c.controlNav?
 '<img src="'+a.slides.eq(n).attr("data-thumb")+'"/>':"<a>"+b+"</a>",a.controlNavScaffold.append("<li>"+g+"</li>"),b++;a.controlsContainer?d(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold);f.controlNav.set();f.controlNav.active();a.controlNavScaffold.delegate("a, img",t,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(a.direction=g>a.currentSlide?"next":"prev",a.flexAnimate(g,c.pauseOnAction))});p&&a.controlNavScaffold.delegate("a",
 "click touchstart",function(a){a.preventDefault()})},setupManual:function(){a.controlNav=a.manualControls;f.controlNav.active();a.controlNav.live(t,function(b){b.preventDefault();var b=d(this),g=a.controlNav.index(b);b.hasClass(e+"active")||(g>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(g,c.pauseOnAction))});p&&a.controlNav.live("click touchstart",function(a){a.preventDefault()})},set:function(){a.controlNav=d("."+e+"control-nav li "+("thumbnails"===c.controlNav?"img":"a"),
 a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(e+"active").eq(a.animatingTo).addClass(e+"active")},update:function(b,c){1<a.pagingCount&&"add"===b?a.controlNavScaffold.append(d("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(c).closest("li").remove();f.controlNav.set();1<a.pagingCount&&a.pagingCount!==a.controlNav.length?a.update(c,b):f.controlNav.active()}},directionNav:{setup:function(){var b=d('<ul class="'+
 e+'direction-nav"><li><a class="'+e+'prev" href="#">'+c.prevText+'</a></li><li><a class="'+e+'next" href="#">'+c.nextText+"</a></li></ul>");a.controlsContainer?(d(a.controlsContainer).append(b),a.directionNav=d("."+e+"direction-nav li a",a.controlsContainer)):(a.append(b),a.directionNav=d("."+e+"direction-nav li a",a));f.directionNav.update();a.directionNav.bind(t,function(b){b.preventDefault();b=d(this).hasClass(e+"next")?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(b,c.pauseOnAction)});
 p&&a.directionNav.bind("click touchstart",function(a){a.preventDefault()})},update:function(){var b=e+"disabled";1===a.pagingCount?a.directionNav.addClass(b):c.animationLoop?a.directionNav.removeClass(b):0===a.animatingTo?a.directionNav.removeClass(b).filter("."+e+"prev").addClass(b):a.animatingTo===a.last?a.directionNav.removeClass(b).filter("."+e+"next").addClass(b):a.directionNav.removeClass(b)}},pausePlay:{setup:function(){var b=d('<div class="'+e+'pauseplay"><a></a></div>');a.controlsContainer?
 (a.controlsContainer.append(b),a.pausePlay=d("."+e+"pauseplay a",a.controlsContainer)):(a.append(b),a.pausePlay=d("."+e+"pauseplay a",a));f.pausePlay.update(c.slideshow?e+"pause":e+"play");a.pausePlay.bind(t,function(b){b.preventDefault();d(this).hasClass(e+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())});p&&a.pausePlay.bind("click touchstart",function(a){a.preventDefault()})},update:function(b){"play"===b?a.pausePlay.removeClass(e+"pause").addClass(e+
 "play").text(c.playText):a.pausePlay.removeClass(e+"play").addClass(e+"pause").text(c.pauseText)}},touch:function(){function b(b){j=l?d-b.touches[0].pageY:d-b.touches[0].pageX;p=l?Math.abs(j)<Math.abs(b.touches[0].pageX-e):Math.abs(j)<Math.abs(b.touches[0].pageY-e);if(!p||500<Number(new Date)-k)b.preventDefault(),!r&&a.transitions&&(c.animationLoop||(j/=0===a.currentSlide&&0>j||a.currentSlide===a.last&&0<j?Math.abs(j)/q+2:1),a.setProps(f+j,"setTouch"))}function g(){i.removeEventListener("touchmove",
 b,!1);if(a.animatingTo===a.currentSlide&&!p&&null!==j){var h=m?-j:j,l=0<h?a.getTarget("next"):a.getTarget("prev");a.canAdvance(l)&&(550>Number(new Date)-k&&50<Math.abs(h)||Math.abs(h)>q/2)?a.flexAnimate(l,c.pauseOnAction):r||a.flexAnimate(a.currentSlide,c.pauseOnAction,!0)}i.removeEventListener("touchend",g,!1);f=j=e=d=null}var d,e,f,q,j,k,p=!1;i.addEventListener("touchstart",function(j){a.animating?j.preventDefault():1===j.touches.length&&(a.pause(),q=l?a.h:a.w,k=Number(new Date),f=h&&m&&a.animatingTo===
 a.last?0:h&&m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:h&&a.currentSlide===a.last?a.limit:h?(a.itemW+c.itemMargin)*a.move*a.currentSlide:m?(a.last-a.currentSlide+a.cloneOffset)*q:(a.currentSlide+a.cloneOffset)*q,d=l?j.touches[0].pageY:j.touches[0].pageX,e=l?j.touches[0].pageX:j.touches[0].pageY,i.addEventListener("touchmove",b,!1),i.addEventListener("touchend",g,!1))},!1)},resize:function(){!a.animating&&a.is(":visible")&&(h||a.doMath(),r?f.smoothHeight():h?(a.slides.width(a.computedW),
 a.update(a.pagingCount),a.setProps()):l?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(c.smoothHeight&&f.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal")))},smoothHeight:function(b){if(!l||r){var c=r?a:a.viewport;b?c.animate({height:a.slides.eq(a.animatingTo).height()},b):c.height(a.slides.eq(a.animatingTo).height())}},sync:function(b){var g=d(c.sync).data("flexslider"),e=a.animatingTo;switch(b){case "animate":g.flexAnimate(e,c.pauseOnAction,!1,!0);break;case "play":!g.playing&&
 !g.asNav&&g.play();break;case "pause":g.pause()}}};a.flexAnimate=function(b,g,n,i,k){s&&1===a.pagingCount&&(a.direction=a.currentItem<b?"next":"prev");if(!a.animating&&(a.canAdvance(b,k)||n)&&a.is(":visible")){if(s&&i)if(n=d(c.asNavFor).data("flexslider"),a.atEnd=0===b||b===a.count-1,n.flexAnimate(b,!0,!1,!0,k),a.direction=a.currentItem<b?"next":"prev",n.direction=a.direction,Math.ceil((b+1)/a.visible)-1!==a.currentSlide&&0!==b)a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+
 "active-slide"),b=Math.floor(b/a.visible);else return a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;a.animating=!0;a.animatingTo=b;c.before(a);g&&a.pause();a.syncExists&&!k&&f.sync("animate");c.controlNav&&f.controlNav.active();h||a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide");a.atEnd=0===b||b===a.last;c.directionNav&&f.directionNav.update();b===a.last&&(c.end(a),c.animationLoop||a.pause());if(r)p?(a.slides.eq(a.currentSlide).css({opacity:0,
 zIndex:1}),a.slides.eq(b).css({opacity:1,zIndex:2}),a.slides.unbind("webkitTransitionEnd transitionend"),a.slides.eq(a.currentSlide).bind("webkitTransitionEnd transitionend",function(){c.after(a)}),a.animating=!1,a.currentSlide=a.animatingTo):(a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed,c.easing),a.slides.eq(b).fadeIn(c.animationSpeed,c.easing,a.wrapup));else{var q=l?a.slides.filter(":first").height():a.computedW;h?(b=c.itemWidth>a.w?2*c.itemMargin:c.itemMargin,b=(a.itemW+b)*a.move*a.animatingTo,
 b=b>a.limit&&1!==a.visible?a.limit:b):b=0===a.currentSlide&&b===a.count-1&&c.animationLoop&&"next"!==a.direction?m?(a.count+a.cloneOffset)*q:0:a.currentSlide===a.last&&0===b&&c.animationLoop&&"prev"!==a.direction?m?0:(a.count+1)*q:m?(a.count-1-b+a.cloneOffset)*q:(b+a.cloneOffset)*q;a.setProps(b,"",c.animationSpeed);if(a.transitions){if(!c.animationLoop||!a.atEnd)a.animating=!1,a.currentSlide=a.animatingTo;a.container.unbind("webkitTransitionEnd transitionend");a.container.bind("webkitTransitionEnd transitionend",
 function(){a.wrapup(q)})}else a.container.animate(a.args,c.animationSpeed,c.easing,function(){a.wrapup(q)})}c.smoothHeight&&f.smoothHeight(c.animationSpeed)}};a.wrapup=function(b){!r&&!h&&(0===a.currentSlide&&a.animatingTo===a.last&&c.animationLoop?a.setProps(b,"jumpEnd"):a.currentSlide===a.last&&(0===a.animatingTo&&c.animationLoop)&&a.setProps(b,"jumpStart"));a.animating=!1;a.currentSlide=a.animatingTo;c.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=
 function(){clearInterval(a.animatedSlides);a.playing=!1;c.pausePlay&&f.pausePlay.update("play");a.syncExists&&f.sync("pause")};a.play=function(){a.animatedSlides=setInterval(a.animateSlides,c.slideshowSpeed);a.playing=!0;c.pausePlay&&f.pausePlay.update("pause");a.syncExists&&f.sync("play")};a.canAdvance=function(b,g){var d=s?a.pagingCount-1:a.last;return g?!0:s&&a.currentItem===a.count-1&&0===b&&"prev"===a.direction?!0:s&&0===a.currentItem&&b===a.pagingCount-1&&"next"!==a.direction?!1:b===a.currentSlide&&
 !s?!1:c.animationLoop?!0:a.atEnd&&0===a.currentSlide&&b===d&&"next"!==a.direction?!1:a.atEnd&&a.currentSlide===d&&0===b&&"next"===a.direction?!1:!0};a.getTarget=function(b){a.direction=b;return"next"===b?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1};a.setProps=function(b,g,d){var e,f=b?b:(a.itemW+c.itemMargin)*a.move*a.animatingTo;e=-1*function(){if(h)return"setTouch"===g?b:m&&a.animatingTo===a.last?0:m?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:a.animatingTo===
 a.last?a.limit:f;switch(g){case "setTotal":return m?(a.count-1-a.currentSlide+a.cloneOffset)*b:(a.currentSlide+a.cloneOffset)*b;case "setTouch":return b;case "jumpEnd":return m?b:a.count*b;case "jumpStart":return m?a.count*b:b;default:return b}}()+"px";a.transitions&&(e=l?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",d=void 0!==d?d/1E3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",d));a.args[a.prop]=e;(a.transitions||void 0===d)&&a.container.css(a.args)};a.setup=function(b){if(r)a.slides.css({width:"100%",
 "float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(p?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+c.animationSpeed/1E3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed,c.easing)),c.smoothHeight&&f.smoothHeight();else{var g,n;"init"===b&&(a.viewport=d('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),a.cloneCount=0,a.cloneOffset=
 0,m&&(n=d.makeArray(a.slides).reverse(),a.slides=d(n),a.container.empty().append(a.slides)));c.animationLoop&&!h&&(a.cloneCount=2,a.cloneOffset=1,"init"!==b&&a.container.find(".clone").remove(),a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));a.newSlides=d(c.selector,a);g=m?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset;l&&!h?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position","absolute").width("100%"),
 setTimeout(function(){a.newSlides.css({display:"block"});a.doMath();a.viewport.height(a.h);a.setProps(g*a.h,"init")},"init"===b?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(g*a.computedW,"init"),setTimeout(function(){a.doMath();a.newSlides.css({width:a.computedW,"float":"left",display:"block"});c.smoothHeight&&f.smoothHeight()},"init"===b?100:0))}h||a.slides.removeClass(e+"active-slide").eq(a.currentSlide).addClass(e+"active-slide")};a.doMath=function(){var b=a.slides.first(),
 d=c.itemMargin,e=c.minItems,f=c.maxItems;a.w=a.width();a.h=b.height();a.boxPadding=b.outerWidth()-b.width();h?(a.itemT=c.itemWidth+d,a.minW=e?e*a.itemT:a.w,a.maxW=f?f*a.itemT:a.w,a.itemW=a.minW>a.w?(a.w-d*e)/e:a.maxW<a.w?(a.w-d*f)/f:c.itemWidth>a.w?a.w:c.itemWidth,a.visible=Math.floor(a.w/(a.itemW+d)),a.move=0<c.move&&c.move<a.visible?c.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:c.itemWidth>a.w?(a.itemW+2*d)*a.count-a.w-
 d:(a.itemW+d)*a.count-a.w-d):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1);a.computedW=a.itemW-a.boxPadding};a.update=function(b,d){a.doMath();h||(b<a.currentSlide?a.currentSlide+=1:b<=a.currentSlide&&0!==b&&(a.currentSlide-=1),a.animatingTo=a.currentSlide);if(c.controlNav&&!a.manualControls)if("add"===d&&!h||a.pagingCount>a.controlNav.length)f.controlNav.update("add");else if("remove"===d&&!h||a.pagingCount<a.controlNav.length)h&&a.currentSlide>a.last&&(a.currentSlide-=1,a.animatingTo-=1),
 f.controlNav.update("remove",a.last);c.directionNav&&f.directionNav.update()};a.addSlide=function(b,e){var f=d(b);a.count+=1;a.last=a.count-1;l&&m?void 0!==e?a.slides.eq(a.count-e).after(f):a.container.prepend(f):void 0!==e?a.slides.eq(e).before(f):a.container.append(f);a.update(e,"add");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.added(a)};a.removeSlide=function(b){var e=isNaN(b)?a.slides.index(d(b)):b;a.count-=1;a.last=a.count-1;isNaN(b)?d(b,a.slides).remove():l&&m?a.slides.eq(a.last).remove():
 a.slides.eq(b).remove();a.doMath();a.update(e,"remove");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.removed(a)};f.init()};d.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7E3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",
 keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};d.fn.flexslider=function(i){void 0===i&&(i={});if("object"===typeof i)return this.each(function(){var a=d(this),c=a.find(i.selector?i.selector:".slides > li");1===c.length?(c.fadeIn(400),
 i.start&&i.start(a)):void 0==a.data("flexslider")&&new d.flexslider(this,i)});var k=d(this).data("flexslider");switch(i){case "play":k.play();break;case "pause":k.pause();break;case "next":k.flexAnimate(k.getTarget("next"),!0);break;case "prev":case "previous":k.flexAnimate(k.getTarget("prev"),!0);break;default:"number"===typeof i&&k.flexAnimate(i,!0)}}})(jQuery);


/**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);


/**
 * jquery.hoverdir.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
;( function( $, window, undefined ) {
	
	'use strict';

	$.HoverDir = function( options, element ) {
		
		this.$el = $( element );
		this._init( options );

	};

	// the options
	$.HoverDir.defaults = {
		speed : 300,
		easing : 'ease',
		hoverDelay : 0,
		inverse : false
	};

	$.HoverDir.prototype = {

		_init : function( options ) {
			
			// options
			this.options = $.extend( true, {}, $.HoverDir.defaults, options );
			// transition properties
			this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing;
			// support for CSS transitions
			this.support = Modernizr.csstransitions;
			// load the events
			this._loadEvents();

		},
		_loadEvents : function() {

			var self = this;
			
			this.$el.on( 'mouseenter.hoverdir, mouseleave.hoverdir', function( event ) {
				
				var $el = $( this ),
					$hoverElem = $el.find( 'div' ),
					direction = self._getDir( $el, { x : event.pageX, y : event.pageY } ),
					styleCSS = self._getStyle( direction );
				
				if( event.type === 'mouseenter' ) {
					
					$hoverElem.hide().css( styleCSS.from );
					clearTimeout( self.tmhover );

					self.tmhover = setTimeout( function() {
						
						$hoverElem.show( 0, function() {
							
							var $el = $( this );
							if( self.support ) {
								$el.css( 'transition', self.transitionProp );
							}
							self._applyAnimation( $el, styleCSS.to, self.options.speed );

						} );
						
					
					}, self.options.hoverDelay );
					
				}
				else {
				
					if( self.support ) {
						$hoverElem.css( 'transition', self.transitionProp );
					}
					clearTimeout( self.tmhover );
					self._applyAnimation( $hoverElem, styleCSS.from, self.options.speed );
					
				}
					
			} );

		},
		// credits : http://stackoverflow.com/a/3647634
		_getDir : function( $el, coordinates ) {
			
			// the width and height of the current div
			var w = $el.width(),
				h = $el.height(),

				// calculate the x and y to get an angle to the center of the div from that x and y.
				// gets the x value relative to the center of the DIV and "normalize" it
				x = ( coordinates.x - $el.offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
				y = ( coordinates.y - $el.offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),
			
				// the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);
				// first calculate the angle of the point,
				// add 180 deg to get rid of the negative values
				// divide by 90 to get the quadrant
				// add 3 and do a modulo by 4  to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
				direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 ) % 4;
			
			return direction;
			
		},
		_getStyle : function( direction ) {
			
			var fromStyle, toStyle,
				slideFromTop = { left : '0px', top : '-100%' },
				slideFromBottom = { left : '0px', top : '100%' },
				slideFromLeft = { left : '-100%', top : '0px' },
				slideFromRight = { left : '100%', top : '0px' },
				slideTop = { top : '0px' },
				slideLeft = { left : '0px' };
			
			switch( direction ) {
				case 0:
					// from top
					fromStyle = !this.options.inverse ? slideFromTop : slideFromBottom;
					toStyle = slideTop;
					break;
				case 1:
					// from right
					fromStyle = !this.options.inverse ? slideFromRight : slideFromLeft;
					toStyle = slideLeft;
					break;
				case 2:
					// from bottom
					fromStyle = !this.options.inverse ? slideFromBottom : slideFromTop;
					toStyle = slideTop;
					break;
				case 3:
					// from left
					fromStyle = !this.options.inverse ? slideFromLeft : slideFromRight;
					toStyle = slideLeft;
					break;
			};
			
			return { from : fromStyle, to : toStyle };
					
		},
		// apply a transition or fallback to jquery animate based on Modernizr.csstransitions support
		_applyAnimation : function( el, styleCSS, speed ) {

			$.fn.applyStyle = this.support ? $.fn.css : $.fn.animate;
			el.stop().applyStyle( styleCSS, $.extend( true, [], { duration : speed + 'ms' } ) );

		},

	};
	
	var logError = function( message ) {

		if ( window.console ) {

			window.console.error( message );
		
		}

	};
	
	$.fn.hoverdir = function( options ) {

		var instance = $.data( this, 'hoverdir' );
		
		if ( typeof options === 'string' ) {
			
			var args = Array.prototype.slice.call( arguments, 1 );
			
			this.each(function() {
			
				if ( !instance ) {

					logError( "cannot call methods on hoverdir prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				
				}
				
				if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for hoverdir instance" );
					return;
				
				}
				
				instance[ options ].apply( instance, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
				
				if ( instance ) {

					instance._init();
				
				}
				else {

					instance = $.data( this, 'hoverdir', new $.HoverDir( options, this ) );
				
				}

			});
		
		}
		
		return instance;
		
	};
	
} )( jQuery, window );
