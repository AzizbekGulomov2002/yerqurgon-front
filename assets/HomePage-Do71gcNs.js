import{p as P,r as b,j as r,c as $t,a as V,b as Ct,u as R,x as ct,Q as Ht,I as Mt,d as ut,i as _e,_ as Lt,A as It,w as Dt,e as Rt,f as Bt,g as qt,z as At,m as Wt,L as Se,J as Ft,h as Qt,$ as Ut,T as Gt,k as Yt,F as Xt,l as Oe,n as Kt,o as ve,C as Re,B,q as Zt,s as Jt,t as Vt,G as en,v as tn,y as nn,D as rn,P as an,R as on,E as sn,H as ee}from"./index-TTKrRBsV.js";import{p as ue}from"./index-DNWE43hh.js";import{R as F,C as D}from"./row-Bxwr5CQq.js";const ln=P.div``,cn=["xxl","xl","lg","md","sm","xs"],un="xs",dn=b.createContext({prefixes:{},breakpoints:cn,minBreakpoint:un});function fn(t,e){const{prefixes:n}=b.useContext(dn);return t||n[e]||e}const M=b.forwardRef(({bsPrefix:t,fluid:e=!1,as:n="div",className:i,...a},c)=>{const s=fn(t,"container"),o=typeof e=="string"?`-${e}`:"-fluid";return r.jsx(n,{ref:c,...a,className:$t(i,e?`${s}${o}`:s)})});M.displayName="Container";var x={},Te={},Q={},U={},dt="Expected a function",Be=NaN,pn="[object Symbol]",hn=/^\s+|\s+$/g,mn=/^[-+]0x[0-9a-f]+$/i,gn=/^0b[01]+$/i,vn=/^0o[0-7]+$/i,xn=parseInt,yn=typeof V=="object"&&V&&V.Object===Object&&V,bn=typeof self=="object"&&self&&self.Object===Object&&self,jn=yn||bn||Function("return this")(),wn=Object.prototype,_n=wn.toString,Sn=Math.max,En=Math.min,xe=function(){return jn.Date.now()};function kn(t,e,n){var i,a,c,s,o,l,u=0,d=!1,f=!1,v=!0;if(typeof t!="function")throw new TypeError(dt);e=qe(e)||0,le(n)&&(d=!!n.leading,f="maxWait"in n,c=f?Sn(qe(n.maxWait)||0,e):c,v="trailing"in n?!!n.trailing:v);function j(h){var E=i,L=a;return i=a=void 0,u=h,s=t.apply(L,E),s}function _(h){return u=h,o=setTimeout(w,e),d?j(h):s}function k(h){var E=h-l,L=h-u,W=e-E;return f?En(W,c-L):W}function S(h){var E=h-l,L=h-u;return l===void 0||E>=e||E<0||f&&L>=c}function w(){var h=xe();if(S(h))return y(h);o=setTimeout(w,k(h))}function y(h){return o=void 0,v&&i?j(h):(i=a=void 0,s)}function O(){o!==void 0&&clearTimeout(o),u=0,i=l=a=o=void 0}function z(){return o===void 0?s:y(xe())}function $(){var h=xe(),E=S(h);if(i=arguments,a=this,l=h,E){if(o===void 0)return _(l);if(f)return o=setTimeout(w,e),j(l)}return o===void 0&&(o=setTimeout(w,e)),s}return $.cancel=O,$.flush=z,$}function On(t,e,n){var i=!0,a=!0;if(typeof t!="function")throw new TypeError(dt);return le(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),kn(t,e,{leading:i,maxWait:e,trailing:a})}function le(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Tn(t){return!!t&&typeof t=="object"}function Nn(t){return typeof t=="symbol"||Tn(t)&&_n.call(t)==pn}function qe(t){if(typeof t=="number")return t;if(Nn(t))return Be;if(le(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=le(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(hn,"");var n=gn.test(t);return n||vn.test(t)?xn(t.slice(2),n?2:8):mn.test(t)?Be:+t}var zn=On,G={};Object.defineProperty(G,"__esModule",{value:!0});G.addPassiveEventListener=function(e,n,i){var a=i.name;a||(a=n,console.warn("Listener must be a named function.")),se.has(n)||se.set(n,new Set);var c=se.get(n);if(!c.has(a)){var s=function(){var o=!1;try{var l=Object.defineProperty({},"passive",{get:function(){o=!0}});window.addEventListener("test",null,l)}catch{}return o}();e.addEventListener(n,i,s?{passive:!0}:!1),c.add(a)}};G.removePassiveEventListener=function(e,n,i){e.removeEventListener(n,i),se.get(n).delete(i.name||n)};var se=new Map;Object.defineProperty(U,"__esModule",{value:!0});var Pn=zn,$n=Hn(Pn),Cn=G;function Hn(t){return t&&t.__esModule?t:{default:t}}var Mn=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,$n.default)(e,n)},m={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,n){if(e){var i=Mn(function(a){m.scrollHandler(e)},n);m.scrollSpyContainers.push(e),(0,Cn.addPassiveEventListener)(e,"scroll",i)}},isMounted:function(e){return m.scrollSpyContainers.indexOf(e)!==-1},currentPositionX:function(e){if(e===document){var n=window.pageYOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:i?document.documentElement.scrollLeft:document.body.scrollLeft}else return e.scrollLeft},currentPositionY:function(e){if(e===document){var n=window.pageXOffset!==void 0,i=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:i?document.documentElement.scrollTop:document.body.scrollTop}else return e.scrollTop},scrollHandler:function(e){var n=m.scrollSpyContainers[m.scrollSpyContainers.indexOf(e)].spyCallbacks||[];n.forEach(function(i){return i(m.currentPositionX(e),m.currentPositionY(e))})},addStateHandler:function(e){m.spySetState.push(e)},addSpyHandler:function(e,n){var i=m.scrollSpyContainers[m.scrollSpyContainers.indexOf(n)];i.spyCallbacks||(i.spyCallbacks=[]),i.spyCallbacks.push(e),e(m.currentPositionX(n),m.currentPositionY(n))},updateStates:function(){m.spySetState.forEach(function(e){return e()})},unmount:function(e,n){m.scrollSpyContainers.forEach(function(i){return i.spyCallbacks&&i.spyCallbacks.length&&i.spyCallbacks.indexOf(n)>-1&&i.spyCallbacks.splice(i.spyCallbacks.indexOf(n),1)}),m.spySetState&&m.spySetState.length&&m.spySetState.indexOf(e)>-1&&m.spySetState.splice(m.spySetState.indexOf(e),1),document.removeEventListener("scroll",m.scrollHandler)},update:function(){return m.scrollSpyContainers.forEach(function(e){return m.scrollHandler(e)})}};U.default=m;var q={},Y={};Object.defineProperty(Y,"__esModule",{value:!0});var Ln=function(e,n){var i=e.indexOf("#")===0?e.substring(1):e,a=i?"#"+i:"",c=window&&window.location,s=a?c.pathname+c.search+a:c.pathname+c.search;n?history.pushState(history.state,"",s):history.replaceState(history.state,"",s)},In=function(){return window.location.hash.replace(/^#/,"")},Dn=function(e){return function(n){return e.contains?e!=n&&e.contains(n):!!(e.compareDocumentPosition(n)&16)}},Rn=function(e){return getComputedStyle(e).position!=="static"},ye=function(e,n){for(var i=e.offsetTop,a=e.offsetParent;a&&!n(a);)i+=a.offsetTop,a=a.offsetParent;return{offsetTop:i,offsetParent:a}},Bn=function(e,n,i){if(i)return e===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(e).position!=="static"?n.offsetLeft:n.offsetLeft-e.offsetLeft;if(e===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(Rn(e)){if(n.offsetParent!==e){var a=function(d){return d===e||d===document},c=ye(n,a),s=c.offsetTop,o=c.offsetParent;if(o!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return s}return n.offsetTop}if(n.offsetParent===e.offsetParent)return n.offsetTop-e.offsetTop;var l=function(d){return d===document};return ye(n,l).offsetTop-ye(e,l).offsetTop};Y.default={updateHash:Ln,getHash:In,filterElementInContainer:Dn,scrollOffset:Bn};var de={},Ne={};Object.defineProperty(Ne,"__esModule",{value:!0});Ne.default={defaultEasing:function(e){return e<.5?Math.pow(e*2,2)/2:1-Math.pow((1-e)*2,2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:-1+(4-2*e)*e},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}};var ze={};Object.defineProperty(ze,"__esModule",{value:!0});var qn=G,An=["mousedown","mousewheel","touchmove","keydown"];ze.default={subscribe:function(e){return typeof document<"u"&&An.forEach(function(n){return(0,qn.addPassiveEventListener)(document,n,e)})}};var X={};Object.defineProperty(X,"__esModule",{value:!0});var Ee={registered:{},scrollEvent:{register:function(e,n){Ee.registered[e]=n},remove:function(e){Ee.registered[e]=null}}};X.default=Ee;Object.defineProperty(de,"__esModule",{value:!0});var Wn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Fn=Y;fe(Fn);var Qn=Ne,Ae=fe(Qn),Un=ze,Gn=fe(Un),Yn=X,T=fe(Yn);function fe(t){return t&&t.__esModule?t:{default:t}}var ft=function(e){return Ae.default[e.smooth]||Ae.default.defaultEasing},Xn=function(e){return typeof e=="function"?e:function(){return e}},Kn=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},ke=function(){return Kn()||function(t,e,n){window.setTimeout(t,n||1e3/60,new Date().getTime())}}(),pt=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},ht=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var i=window.pageXOffset!==void 0,a=(document.compatMode||"")==="CSS1Compat";return i?window.pageXOffset:a?document.documentElement.scrollLeft:document.body.scrollLeft},mt=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var i=window.pageXOffset!==void 0,a=(document.compatMode||"")==="CSS1Compat";return i?window.pageYOffset:a?document.documentElement.scrollTop:document.body.scrollTop},Zn=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var i=document.body,a=document.documentElement;return Math.max(i.scrollWidth,i.offsetWidth,a.clientWidth,a.scrollWidth,a.offsetWidth)},Jn=function(e){var n=e.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var i=document.body,a=document.documentElement;return Math.max(i.scrollHeight,i.offsetHeight,a.clientHeight,a.scrollHeight,a.offsetHeight)},Vn=function t(e,n,i){var a=n.data;if(!n.ignoreCancelEvents&&a.cancel){T.default.registered.end&&T.default.registered.end(a.to,a.target,a.currentPositionY);return}if(a.delta=Math.round(a.targetPosition-a.startPosition),a.start===null&&(a.start=i),a.progress=i-a.start,a.percent=a.progress>=a.duration?1:e(a.progress/a.duration),a.currentPosition=a.startPosition+Math.ceil(a.delta*a.percent),a.containerElement&&a.containerElement!==document&&a.containerElement!==document.body?n.horizontal?a.containerElement.scrollLeft=a.currentPosition:a.containerElement.scrollTop=a.currentPosition:n.horizontal?window.scrollTo(a.currentPosition,0):window.scrollTo(0,a.currentPosition),a.percent<1){var c=t.bind(null,e,n);ke.call(window,c);return}T.default.registered.end&&T.default.registered.end(a.to,a.target,a.currentPosition)},Pe=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},K=function(e,n,i,a){n.data=n.data||pt(),window.clearTimeout(n.data.delayTimeout);var c=function(){n.data.cancel=!0};if(Gn.default.subscribe(c),Pe(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?ht(n):mt(n),n.data.targetPosition=n.absolute?e:e+n.data.startPosition,n.data.startPosition===n.data.targetPosition){T.default.registered.end&&T.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=Xn(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=i,n.data.target=a;var s=ft(n),o=Vn.bind(null,s,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){T.default.registered.begin&&T.default.registered.begin(n.data.to,n.data.target),ke.call(window,o)},n.delay);return}T.default.registered.begin&&T.default.registered.begin(n.data.to,n.data.target),ke.call(window,o)},pe=function(e){return e=Wn({},e),e.data=e.data||pt(),e.absolute=!0,e},er=function(e){K(0,pe(e))},tr=function(e,n){K(e,pe(n))},nr=function(e){e=pe(e),Pe(e),K(e.horizontal?Zn(e):Jn(e),e)},rr=function(e,n){n=pe(n),Pe(n);var i=n.horizontal?ht(n):mt(n);K(e+i,n)};de.default={animateTopScroll:K,getAnimationType:ft,scrollToTop:er,scrollToBottom:nr,scrollTo:tr,scrollMore:rr};Object.defineProperty(q,"__esModule",{value:!0});var ir=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ar=Y,or=$e(ar),sr=de,lr=$e(sr),cr=X,te=$e(cr);function $e(t){return t&&t.__esModule?t:{default:t}}var ne={},We=void 0;q.default={unmount:function(){ne={}},register:function(e,n){ne[e]=n},unregister:function(e){delete ne[e]},get:function(e){return ne[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return We=e},getActiveLink:function(){return We},scrollTo:function(e,n){var i=this.get(e);if(!i){console.warn("target Element not found");return}n=ir({},n,{absolute:!1});var a=n.containerId,c=n.container,s=void 0;a?s=document.getElementById(a):c&&c.nodeType?s=c:s=document,n.absolute=!0;var o=n.horizontal,l=or.default.scrollOffset(s,i,o)+(n.offset||0);if(!n.smooth){te.default.registered.begin&&te.default.registered.begin(e,i),s===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):s.scrollTop=l,te.default.registered.end&&te.default.registered.end(e,i);return}lr.default.animateTopScroll(l,n,e,i)}};var he={};Object.defineProperty(he,"__esModule",{value:!0});var ur=Y,be=dr(ur);function dr(t){return t&&t.__esModule?t:{default:t}}var fr={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,n){this.containers[e]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,n=this.getHash();n?window.setTimeout(function(){e.scrollTo(n,!0),e.initialized=!0},10):this.initialized=!0},scrollTo:function(e,n){var i=this.scroller,a=i.get(e);if(a&&(n||e!==i.getActiveLink())){var c=this.containers[e]||document;i.scrollTo(e,{container:c})}},getHash:function(){return be.default.getHash()},changeHash:function(e,n){this.isInitialized()&&be.default.getHash()!==e&&be.default.updateHash(e,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};he.default=fr;Object.defineProperty(Q,"__esModule",{value:!0});var re=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},pr=function(){function t(e,n){for(var i=0;i<n.length;i++){var a=n[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),hr=b,Fe=Z(hr),mr=U,ie=Z(mr),gr=q,vr=Z(gr),xr=ue,p=Z(xr),yr=he,C=Z(yr);function Z(t){return t&&t.__esModule?t:{default:t}}function br(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function jr(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function wr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Qe={to:p.default.string.isRequired,containerId:p.default.string,container:p.default.object,activeClass:p.default.string,activeStyle:p.default.object,spy:p.default.bool,horizontal:p.default.bool,smooth:p.default.oneOfType([p.default.bool,p.default.string]),offset:p.default.number,delay:p.default.number,isDynamic:p.default.bool,onClick:p.default.func,duration:p.default.oneOfType([p.default.number,p.default.func]),absolute:p.default.bool,onSetActive:p.default.func,onSetInactive:p.default.func,ignoreCancelEvents:p.default.bool,hashSpy:p.default.bool,saveHashHistory:p.default.bool,spyThrottle:p.default.number};Q.default=function(t,e){var n=e||vr.default,i=function(c){wr(s,c);function s(o){br(this,s);var l=jr(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,o));return a.call(l),l.state={active:!1},l}return pr(s,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,u=this.props.container;return l&&!u?document.getElementById(l):u&&u.nodeType?u:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();ie.default.isMounted(l)||ie.default.mount(l,this.props.spyThrottle),this.props.hashSpy&&(C.default.isMounted()||C.default.mount(n),C.default.mapContainer(this.props.to,l)),ie.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){ie.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var u={};this.state&&this.state.active?u=re({},this.props.style,this.props.activeStyle):u=re({},this.props.style);var d=re({},this.props);for(var f in Qe)d.hasOwnProperty(f)&&delete d[f];return d.className=l,d.style=u,d.onClick=this.handleClick,Fe.default.createElement(t,d)}}]),s}(Fe.default.PureComponent),a=function(){var s=this;this.scrollTo=function(o,l){n.scrollTo(o,re({},s.state,l))},this.handleClick=function(o){s.props.onClick&&s.props.onClick(o),o.stopPropagation&&o.stopPropagation(),o.preventDefault&&o.preventDefault(),s.scrollTo(s.props.to,s.props)},this.spyHandler=function(o,l){var u=s.getScrollSpyContainer();if(!(C.default.isMounted()&&!C.default.isInitialized())){var d=s.props.horizontal,f=s.props.to,v=null,j=void 0,_=void 0;if(d){var k=0,S=0,w=0;if(u.getBoundingClientRect){var y=u.getBoundingClientRect();w=y.left}if(!v||s.props.isDynamic){if(v=n.get(f),!v)return;var O=v.getBoundingClientRect();k=O.left-w+o,S=k+O.width}var z=o-s.props.offset;j=z>=Math.floor(k)&&z<Math.floor(S),_=z<Math.floor(k)||z>=Math.floor(S)}else{var $=0,h=0,E=0;if(u.getBoundingClientRect){var L=u.getBoundingClientRect();E=L.top}if(!v||s.props.isDynamic){if(v=n.get(f),!v)return;var W=v.getBoundingClientRect();$=W.top-E+l,h=$+W.height}var J=l-s.props.offset;j=J>=Math.floor($)&&J<Math.floor(h),_=J<Math.floor($)||J>=Math.floor(h)}var Le=n.getActiveLink();if(_){if(f===Le&&n.setActiveLink(void 0),s.props.hashSpy&&C.default.getHash()===f){var Ie=s.props.saveHashHistory,zt=Ie===void 0?!1:Ie;C.default.changeHash("",zt)}s.props.spy&&s.state.active&&(s.setState({active:!1}),s.props.onSetInactive&&s.props.onSetInactive(f,v))}if(j&&(Le!==f||s.state.active===!1)){n.setActiveLink(f);var De=s.props.saveHashHistory,Pt=De===void 0?!1:De;s.props.hashSpy&&C.default.changeHash(f,Pt),s.props.spy&&(s.setState({active:!0}),s.props.onSetActive&&s.props.onSetActive(f,v))}}}};return i.propTypes=Qe,i.defaultProps={offset:0},i};Object.defineProperty(Te,"__esModule",{value:!0});var _r=b,Ue=gt(_r),Sr=Q,Er=gt(Sr);function gt(t){return t&&t.__esModule?t:{default:t}}function kr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ge(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Or(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Tr=function(t){Or(e,t);function e(){var n,i,a,c;kr(this,e);for(var s=arguments.length,o=Array(s),l=0;l<s;l++)o[l]=arguments[l];return c=(i=(a=Ge(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(o))),a),a.render=function(){return Ue.default.createElement("a",a.props,a.props.children)},i),Ge(a,c)}return e}(Ue.default.Component);Te.default=(0,Er.default)(Tr);var Ce={};Object.defineProperty(Ce,"__esModule",{value:!0});var Nr=function(){function t(e,n){for(var i=0;i<n.length;i++){var a=n[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),zr=b,Ye=vt(zr),Pr=Q,$r=vt(Pr);function vt(t){return t&&t.__esModule?t:{default:t}}function Cr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Hr(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Mr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Lr=function(t){Mr(e,t);function e(){return Cr(this,e),Hr(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return Nr(e,[{key:"render",value:function(){return Ye.default.createElement("button",this.props,this.props.children)}}]),e}(Ye.default.Component);Ce.default=(0,$r.default)(Lr);var He={},me={};Object.defineProperty(me,"__esModule",{value:!0});var Ir=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Dr=function(){function t(e,n){for(var i=0;i<n.length;i++){var a=n[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),Rr=b,Xe=ge(Rr),Br=Ct;ge(Br);var qr=q,Ke=ge(qr),Ar=ue,Ze=ge(Ar);function ge(t){return t&&t.__esModule?t:{default:t}}function Wr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Fr(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Qr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}me.default=function(t){var e=function(n){Qr(i,n);function i(a){Wr(this,i);var c=Fr(this,(i.__proto__||Object.getPrototypeOf(i)).call(this,a));return c.childBindings={domNode:null},c}return Dr(i,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(c){this.props.name!==c.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;Ke.default.unregister(this.props.name)}},{key:"registerElems",value:function(c){Ke.default.register(c,this.childBindings.domNode)}},{key:"render",value:function(){return Xe.default.createElement(t,Ir({},this.props,{parentBindings:this.childBindings}))}}]),i}(Xe.default.Component);return e.propTypes={name:Ze.default.string,id:Ze.default.string},e};Object.defineProperty(He,"__esModule",{value:!0});var Je=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ur=function(){function t(e,n){for(var i=0;i<n.length;i++){var a=n[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),Gr=b,Ve=Me(Gr),Yr=me,Xr=Me(Yr),Kr=ue,et=Me(Kr);function Me(t){return t&&t.__esModule?t:{default:t}}function Zr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Jr(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function Vr(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var xt=function(t){Vr(e,t);function e(){return Zr(this,e),Jr(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return Ur(e,[{key:"render",value:function(){var i=this,a=Je({},this.props);return delete a.name,a.parentBindings&&delete a.parentBindings,Ve.default.createElement("div",Je({},a,{ref:function(s){i.props.parentBindings.domNode=s}}),this.props.children)}}]),e}(Ve.default.Component);xt.propTypes={name:et.default.string,id:et.default.string};He.default=(0,Xr.default)(xt);var je=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},tt=function(){function t(e,n){for(var i=0;i<n.length;i++){var a=n[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();function nt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function rt(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function it(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var ae=b,I=U,we=q,g=ue,H=he,at={to:g.string.isRequired,containerId:g.string,container:g.object,activeClass:g.string,spy:g.bool,smooth:g.oneOfType([g.bool,g.string]),offset:g.number,delay:g.number,isDynamic:g.bool,onClick:g.func,duration:g.oneOfType([g.number,g.func]),absolute:g.bool,onSetActive:g.func,onSetInactive:g.func,ignoreCancelEvents:g.bool,hashSpy:g.bool,spyThrottle:g.number},ei={Scroll:function(e,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var i=n||we,a=function(s){it(o,s);function o(l){nt(this,o);var u=rt(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,l));return c.call(u),u.state={active:!1},u}return tt(o,[{key:"getScrollSpyContainer",value:function(){var u=this.props.containerId,d=this.props.container;return u?document.getElementById(u):d&&d.nodeType?d:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var u=this.getScrollSpyContainer();I.isMounted(u)||I.mount(u,this.props.spyThrottle),this.props.hashSpy&&(H.isMounted()||H.mount(i),H.mapContainer(this.props.to,u)),this.props.spy&&I.addStateHandler(this.stateHandler),I.addSpyHandler(this.spyHandler,u),this.setState({container:u})}}},{key:"componentWillUnmount",value:function(){I.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var u="";this.state&&this.state.active?u=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():u=this.props.className;var d=je({},this.props);for(var f in at)d.hasOwnProperty(f)&&delete d[f];return d.className=u,d.onClick=this.handleClick,ae.createElement(e,d)}}]),o}(ae.Component),c=function(){var o=this;this.scrollTo=function(l,u){i.scrollTo(l,je({},o.state,u))},this.handleClick=function(l){o.props.onClick&&o.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),o.scrollTo(o.props.to,o.props)},this.stateHandler=function(){i.getActiveLink()!==o.props.to&&(o.state!==null&&o.state.active&&o.props.onSetInactive&&o.props.onSetInactive(),o.setState({active:!1}))},this.spyHandler=function(l){var u=o.getScrollSpyContainer();if(!(H.isMounted()&&!H.isInitialized())){var d=o.props.to,f=null,v=0,j=0,_=0;if(u.getBoundingClientRect){var k=u.getBoundingClientRect();_=k.top}if(!f||o.props.isDynamic){if(f=i.get(d),!f)return;var S=f.getBoundingClientRect();v=S.top-_+l,j=v+S.height}var w=l-o.props.offset,y=w>=Math.floor(v)&&w<Math.floor(j),O=w<Math.floor(v)||w>=Math.floor(j),z=i.getActiveLink();if(O)return d===z&&i.setActiveLink(void 0),o.props.hashSpy&&H.getHash()===d&&H.changeHash(),o.props.spy&&o.state.active&&(o.setState({active:!1}),o.props.onSetInactive&&o.props.onSetInactive()),I.updateStates();if(y&&z!==d)return i.setActiveLink(d),o.props.hashSpy&&H.changeHash(d),o.props.spy&&(o.setState({active:!0}),o.props.onSetActive&&o.props.onSetActive(d)),I.updateStates()}}};return a.propTypes=at,a.defaultProps={offset:0},a},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(i){it(a,i);function a(c){nt(this,a);var s=rt(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,c));return s.childBindings={domNode:null},s}return tt(a,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(s){this.props.name!==s.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;we.unregister(this.props.name)}},{key:"registerElems",value:function(s){we.register(s,this.childBindings.domNode)}},{key:"render",value:function(){return ae.createElement(e,je({},this.props,{parentBindings:this.childBindings}))}}]),a}(ae.Component);return n.propTypes={name:g.string,id:g.string},n}},ti=ei;Object.defineProperty(x,"__esModule",{value:!0});x.Helpers=x.ScrollElement=x.ScrollLink=x.animateScroll=x.scrollSpy=x.Events=x.scroller=A=x.Element=x.Button=ce=x.Link=void 0;var ni=Te,yt=N(ni),ri=Ce,bt=N(ri),ii=He,jt=N(ii),ai=q,wt=N(ai),oi=X,_t=N(oi),si=U,St=N(si),li=de,Et=N(li),ci=Q,kt=N(ci),ui=me,Ot=N(ui),di=ti,Tt=N(di);function N(t){return t&&t.__esModule?t:{default:t}}var ce=x.Link=yt.default;x.Button=bt.default;var A=x.Element=jt.default;x.scroller=wt.default;x.Events=_t.default;x.scrollSpy=St.default;x.animateScroll=Et.default;x.ScrollLink=kt.default;x.ScrollElement=Ot.default;x.Helpers=Tt.default;x.default={Link:yt.default,Button:bt.default,Element:jt.default,scroller:wt.default,Events:_t.default,scrollSpy:St.default,animateScroll:Et.default,ScrollLink:kt.default,ScrollElement:Ot.default,Helpers:Tt.default};const fi=P(A)`
  padding: 80px 0;
  .title {
    color: var(--Neutral-D_Grey, #4d4d4d);
    text-align: center;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 44px; /* 122.222% */
    margin-bottom: 15px;
  }

  .desc {
    color: var(--Neutral-Grey, #717171);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .cards {
    padding-top: 50px;
    padding-bottom: 20px;
    .my-card {
      height: 100%;
      padding: 24px;
      border-radius: 8px;
      background: var(--Neutral-White, #fff);
      box-shadow: 0px 2px 4px 0px rgba(171, 190, 209, 0.2);

      .img-box {
        color: ${t=>t.theme.colors.primaryColor};
      }

      .card-title {
        color: var(--Neutral-D_Grey, #4d4d4d);
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 36px; /* 128.571% */
        margin-top: 15px;
        margin-bottom: 20px;
      }

      .info-data {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          display: flex;
          .icon {
            width: 10px;
            margin-right: 25px;
            svg {
              color: #717171;
            }
          }
          .text {
            color: var(--Neutral-Grey, #717171);
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px; /* 142.857% */
          }
        }
      }
    }
  }

  @media (max-width: 576px) {
    padding: 50px 0;
    .title {
      font-size: 28px;
      line-height: 36px; /* 122.222% */
    }
    .desc {
      font-size: 12px;
      line-height: 18px;
    }

    .cards {
      padding-top: 30px;
      padding-bottom: 10px;

      .my-card {
        padding: 16px;

        .card-title {
          font-size: 16px;
          line-height: 28px;
        }

        .card-desc {
          font-size: 10px;
          line-height: 18px;
        }

        .info-data {
          li {
            .icon {
              width: 20px;
              margin-right: 10px;
            }
            .text {
              font-size: 10px;
              line-height: 18px;
            }
          }
        }
      }
    }
  }
`,pi=()=>{const{t}=R(),e=[{name:t("Omborxona"),icon:r.jsx(ct,{size:40}),info:[{text:t("Omborga keltiriladigan mahsulotlar hisobi")},{text:t("Qarzga, Naqtga import qilish jarayonlari hisobi")},{text:t("Ta'minotchilar orqali omborlar balansini tahlil qilish")}]},{name:t("Savdo"),icon:r.jsx(Ht,{size:40}),info:[{text:t("Mijozlar bilan qarz yoki naqt tranzaksiyada savdo qilish")},{text:t("Qarzdor mijozlarni tahlil qilib borish")},{text:t("Haridorlar uchun kvitansiya chiqarish")}]},{name:t("Moliya"),icon:r.jsx(Mt,{size:40}),info:[{text:t("Barcha turdagi chiqimlarni kiritib borish")},{text:t("Naqt, Karta va boshqa turdagi to'lov usullari bilan ishlash")},{text:t("Kerakli hisobotlarni excel formatda integratsiya qilish")}]},{name:t("Statistika"),icon:r.jsx(ut,{size:40}),info:[{text:t("Savdo jarayonlarini vaqtbay kuzatib borish")},{text:t("Ombordagi mahsulotlar jarayonlarini kuzatib borish")},{text:t("Mahsulot, qarzdorlik qoldiqlarini tahlil qilish")}]}];return r.jsx(fi,{name:"suggestions",style:{overflow:"hidden"},children:r.jsx(r.Fragment,{children:r.jsxs(M,{children:[r.jsx("div",{className:"title",children:t("Bizning takliflar")}),r.jsx("div",{className:"desc",children:t("Qaysi yo'nalishlarni avtomatlashtiramiz:")}),r.jsx(F,{gutter:[20,20],className:"cards",children:e.map(n=>r.jsx(D,{xs:24,md:6,children:r.jsxs("div",{className:"my-card",children:[r.jsx("div",{className:"img-box",children:n.icon}),r.jsx("div",{className:"card-title",children:n.name}),r.jsx("ul",{className:"info-data",children:n.info.map(i=>r.jsxs("li",{children:[r.jsx("div",{className:"icon",children:r.jsx(_e,{})}),r.jsx("div",{className:"text",children:i.text})]}))})]})}))})]})})})},hi=P(A)`
  padding: 80px 0;
  background-color: #f5f7fa;
  .title {
    color: var(--Neutral-D_Grey, #4d4d4d);
    text-align: center;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 44px; /* 122.222% */
    margin-bottom: 15px;
  }

  .desc {
    color: var(--Neutral-Grey, #717171);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .cards {
    padding-top: 50px;
    padding-bottom: 20px;

    .my-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;

      padding: 24px;
      border-radius: 8px;
      background: var(--Neutral-White, #fff);
      box-shadow: 0px 2px 4px 0px rgba(171, 190, 209, 0.2);

      .img-box {
        color: ${t=>t.theme.colors.primaryColor};
      }

      .card-title {
        color: var(--Neutral-D_Grey, #4d4d4d);
        text-align: center;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 36px; /* 128.571% */
        margin: 10px 0;
      }

      .card-desc {
        color: var(--Neutral-Grey, #717171);
        text-align: center;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
      }
    }
  }

  @media (max-width: 576px) {
    padding: 50px 0;
    .title {
      font-size: 28px;
      line-height: 36px; /* 122.222% */
    }
    .desc {
      font-size: 12px;
      line-height: 18px;
    }

    .cards {
      padding-top: 30px;
      padding-bottom: 10px;

      .my-card {
        padding: 16px;

        .card-title {
          font-size: 16px;
          line-height: 28px;
        }

        .card-desc {
          font-size: 10px;
          line-height: 18px;
        }
      }
    }
  }
`,mi=()=>{const{t}=R(),e=[{name:t("Qurilish mollari"),icon:r.jsx(Lt,{size:40})},{name:t("Xozmak"),icon:r.jsx(It,{size:40})},{name:t("Aksessuar"),icon:r.jsx(Dt,{size:40})},{name:t("Maishiy texnika"),icon:r.jsx(Rt,{size:40})},{name:t("Santexnika"),icon:r.jsx(Bt,{size:40})},{name:t("Kiyim-kechak"),icon:r.jsx(qt,{size:40})},{name:t("Kanstovar"),icon:r.jsx(At,{size:40})},{name:t("Elektronika"),icon:r.jsx(Wt,{size:40})}];return r.jsx(hi,{name:"industries",style:{overflow:"hidden"},children:r.jsx(r.Fragment,{children:r.jsxs(M,{children:[r.jsx("div",{className:"title",children:t("Qo'llab quvvatlaydigan sohalar")}),r.jsx("div",{className:"desc",children:t("Smart tizim qaysi sohalarga mos keladi ?")}),r.jsx(F,{gutter:[20,20],className:"cards",children:e.map(n=>r.jsx(D,{xs:12,md:6,children:r.jsxs("div",{className:"my-card",children:[r.jsx("div",{className:"img-box",children:n.icon}),r.jsx("div",{className:"card-title",children:n.name})]})}))})]})})})},gi=P(A)`
  padding-top: 50px;
  padding-bottom: 30px;
  .box {
    .title {
      color: #181433;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: 24px;
      margin-bottom: 24px;
    }
    .commit {
      color: #757095;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px; /* 175% */
      letter-spacing: -0.32px;
    }
    .contact-box {
      display: flex;
      align-items: center;
      margin-top: 25px;
      svg {
        margin-right: 15px;
        color: ${t=>t.theme.colors.primaryColor};
      }
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        margin-bottom: 10px;
        a,
        .phone {
          color: #181433;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 24px; /* 150% */
          svg {
            color: ${t=>t.theme.colors.primaryColor};
          }
        }
        .active {
          font-weight: bold;
          text-decoration: none;
        }
      }
    }
  }

  .footer-border {
    background-color: #e5e5ea;
    height: 1px;
    margin: 30px 0;
  }

  .text {
    color: #181433;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 162.5% */
    letter-spacing: -0.32px;
  }

  @media (max-width: 576px) {
    .box {
      .title {
        font-size: 16px;
        line-height: 24px;
        margin-bottom: 20px;
      }
      .commit {
        font-size: 12px;
        line-height: 28px; /* 175% */
      }
      .contact-box {
        margin-top: 20px;
        svg {
          margin-right: 15px;
          color: ${t=>t.theme.colors.primaryColor};
        }
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
          margin-bottom: 10px;
          a,
          .phone {
            color: #181433;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px; /* 150% */
            svg {
              color: ${t=>t.theme.colors.primaryColor};
            }
          }
          .active {
            font-weight: bold;
            text-decoration: none;
          }
        }
      }
    }

    .footer-border {
      background-color: #e5e5ea;
      height: 1px;
      margin: 30px 0;
    }

    .text {
      color: #181433;
      text-align: center;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px; /* 162.5% */
      letter-spacing: -0.32px;
    }
  }
`,vi=()=>{const{t}=R(),e=[{name:t("Bosh sahifa"),target:"home"},{name:t("Sohalar"),target:"industries"},{name:t("Takliflar"),target:"suggestions"},{name:t("Narxlar"),target:"prices"}];return r.jsx(gi,{name:"contacts",style:{overflow:"hidden"},children:r.jsx(r.Fragment,{children:r.jsxs(M,{children:[r.jsxs(F,{gutter:[30,30],children:[r.jsx(D,{xs:24,md:8,children:r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"title",children:r.jsx("img",{onClick:()=>scroll.scrollToTop(),className:"desctop-logo",src:Se,style:{width:"150px",cursor:"pointer"},alt:""})}),r.jsx("div",{className:"commit",children:t("Smart tizim - aqlli tizim platformasi.")}),r.jsxs("div",{className:"contact-box",children:[r.jsx("a",{href:"https://www.instagram.com/smarttizim1",target:"_blank",children:r.jsx(Ft,{size:25})}),r.jsx("a",{href:"https://www.facebook.com/profile.php?id=61563322245109",target:"_blank",children:r.jsx(Qt,{size:25})}),r.jsx("a",{href:"https://youtube.com/@smart-tizim",target:"_blank",children:r.jsx(Ut,{size:25})}),r.jsx("a",{href:"https://t.me/smarttizim",target:"_blank",children:r.jsx(Gt,{size:25})})]})]})}),r.jsx(D,{xs:24,md:8,children:r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"title",children:t("Menyu")}),r.jsx("ul",{children:e.map((n,i)=>r.jsx("li",{children:r.jsx(ce,{activeClass:"active",to:n.target,spy:!0,smooth:!0,hashSpy:!0,duration:100,delay:100,isDynamic:!0,ignoreCancelEvents:!1,spyThrottle:500,children:n.name})},i))})]})}),r.jsx(D,{xs:24,md:8,children:r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"title",children:t("Kontaktlar")}),r.jsxs("ul",{children:[r.jsx("li",{children:r.jsxs("div",{className:"phone",children:[r.jsx(Yt,{size:25})," ",r.jsx("span",{children:"+998 77 300 28 29"})]})}),r.jsx("li",{children:r.jsxs("div",{className:"phone",children:[r.jsx(Xt,{size:25})," ",r.jsx("span",{children:"smarttizim@gmail.com"})]})})]})]})})]}),r.jsx("div",{className:"footer-border"}),r.jsxs("div",{className:"text",children:["Copyright @ SMART TIZIM ",new Date().getFullYear(),"."," ",t("Barcha huquqlar himoyalangan.")]})]})})})},Nt="25px",ot="45px",oe="5px",xi="0.3s",st="45deg",lt=parseInt(Nt)/2,yi=P.a`
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`,bi=P(yi)`
  width: ${ot};
  height: ${Nt};
  position: relative;
  display: block;
  cursor: pointer;

  .burger {
    display: block;
    background: ${t=>t.theme.colors.primaryColor};
    width: ${ot};
    height: ${oe};
    position: absolute;
    left: 0;
    border-radius: ${parseInt(oe)/2}px;
    transition: all ${xi};

    &.part-1 {
      top: 0;
    }
    &.part-2 {
      top: 50%;
      transform: translateY(-50%);
    }
    &.part-3 {
      top: 100%;
      transform: translateY(-100%);
    }
  }

  &:hover,
  &:focus {
    .part-1 {
      transform: translateY(${parseInt(oe)/2*-1}px);
    }
    .part-3 {
      transform: translateY(${parseInt(oe)/2}px);
    }
  }

  &.active {
    .part-1 {
      transform: translateY(${lt}px) rotate(${st});
    }
    .part-2 {
      opacity: 0;
    }
    .part-3 {
      transform: translateY(-${lt}px) rotate(-${st});
    }
  }
`,ji=({menu_show:t,toggleMenu:e})=>r.jsxs(bi,{onClick:e,className:t?"active":"",id:"burger-icon",href:"#",children:[r.jsx("span",{className:"burger part-1"}),r.jsx("span",{className:"burger part-2"}),r.jsx("span",{className:"burger part-3"})]}),wi=P.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-shadow: 1px 1px 5px #efefef;
  background-color: white;

  .desctop-navbar {
    z-index: 100;
    .content {
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo-box {
        display: flex;
        align-items: center;
        color: ${t=>t.theme.colors.primaryColor};
        font-weight: bold;
      }
      ul {
        display: flex;
        align-items: center;
        list-style: none;
        margin: 0;
        padding: 0;
        li {
          margin: 0 25px;
          a {
            color: var(--Text-Gray-900, #18191f);
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px; /* 150% */
            cursor: pointer;
            position: relative;

            &::after,
            &::before {
              content: "";
              position: absolute;
              left: 0;
              right: 0;
              bottom: -5px;
              height: 2px;
              background-color: ${t=>t.theme.colors.primaryColor};
              transform: scaleX(0);
              transform-origin: 50%;
              transition: transform 0.3s;
            }
            &:hover {
              &::before {
                transform-origin: 0% 50%;
                transform: scaleX(1);
              }
              &::after {
                transform-origin: 100% 50%;
                transform: scaleX(1);
              }
            }
          }
          .active {
            text-decoration: none;
            font-weight: bold;
            color: ${t=>t.theme.colors.primaryColor};
            /* &::before {
              transform-origin: 0% 50%;
              transform: scaleX(1);
            }
            &::after {
              transform-origin: 100% 50%;
              transform: scaleX(1);
            } */
          }
        }
      }
      .right-box {
        button {
          border-radius: 5px;
          padding: 10px;
        }
      }
    }
  }

  .mobile-navbar {
    display: none;
  }

  .left-menu {
    display: none;
  }

  @media (max-width: 576px) {
    .desctop-navbar {
      display: none;
    }

    .mobile-navbar {
      display: block;
      .content-box {
        height: 85px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .right {
      }
    }

    .left-menu {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      position: absolute;
      left: 0;
      transition: 0.2s all linear;
      height: calc(100vh - 100px);
      background-color: #f5f7fa;

      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        list-style: none;
        margin: 0;
        padding: 0;
        li {
          margin: 15px 0;
          a {
            color: var(--Text-Gray-900, #18191f);
            font-size: 22px;
            font-weight: 500;
            line-height: 24px; /* 150% */
            cursor: pointer;
            position: relative;

            &::after,
            &::before {
              content: "";
              position: absolute;
              left: 0;
              right: 0;
              bottom: -5px;
              height: 2px;
              background-color: ${t=>t.theme.colors.primaryColor};
              transform: scaleX(0);
              transform-origin: 50%;
              transition: transform 0.3s;
            }
          }
          .active {
            text-decoration: none;
            font-weight: bold;
            color: ${t=>t.theme.colors.primaryColor};
          }
        }
      }
    }

    .left-menu.close {
      left: -100%;
    }
  }
`,_i=()=>{const{t}=R(),e=Oe(),{lang:n,setLang:i}=Kt(),[a,c]=b.useState(!1),s=()=>c(!a),{i18n:o}=R(),[l,u]=b.useState(o.language),d=(y="en")=>{u(y),i(y),o.changeLanguage(y)},f=[{name:t("Bosh sahifa"),target:"home"},{name:t("Sohalar"),target:"industries"},{name:t("Takliflar"),target:"suggestions"},{name:t("Narxlar"),target:"prices"}],[v,j]=b.useState(135),[_,k]=b.useState({width:window.innerWidth,height:window.innerHeight});b.useEffect(()=>{const y=()=>{k({width:Number(window.innerWidth),height:Number(window.innerHeight)})};return window.addEventListener("resize",y),()=>{window.removeEventListener("resize",y)}},[]),b.useEffect(()=>{_.width>1440||_.width<1440&&_.width>576,j(-100)},[_]);const S=b.useRef(null),w=y=>{lang_open===!0&&S.current&&!S.current.contains(y.target)&&setLangOpen(!1)};return b.useEffect(()=>(document.addEventListener("click",w,!0),()=>{document.removeEventListener("click",w,!0)})),r.jsxs(wi,{children:[r.jsx("div",{className:"desctop-navbar",children:r.jsx(M,{children:r.jsxs("div",{className:"content",children:[r.jsx("div",{className:"logo-box",children:r.jsx("a",{href:"#home",children:r.jsx("img",{onClick:()=>scroll.scrollToTop(),className:"desctop-logo",src:Se,style:{width:"150px",cursor:"pointer"},alt:""})})}),r.jsx("ul",{children:f.map((y,O)=>r.jsx("li",{children:r.jsx(ce,{activeClass:"active",to:y.target,spy:!0,smooth:!0,hashSpy:!0,offset:v,duration:100,delay:100,isDynamic:!0,ignoreCancelEvents:!1,spyThrottle:500,children:y.name})},O))}),r.jsx("div",{className:"right-box",children:r.jsxs(ve,{gap:"large",children:[r.jsx(Re,{style:{width:50},allowClear:!1,showSearch:!1,value:l,onChange:d,options:[{value:"uz",label:"UZ"},{value:"ru",label:"RU"},{value:"en",label:"EN"}]}),r.jsxs(ve,{gap:"middle",children:[r.jsx(B,{className:"sign-in",onClick:()=>e("/auth/sign-in"),children:t("Kirish")}),r.jsx(B,{type:"primary",className:"sign-up",onClick:()=>e("/auth/sign-up"),children:t("Ro'yxatdan o'tish")})]})]})})]})})}),r.jsx("div",{className:"mobile-navbar",children:r.jsx(M,{children:r.jsxs("div",{className:"content-box",children:[r.jsx("div",{className:"logo-box",children:r.jsx("img",{onClick:()=>scroll.scrollToTop(),className:"desctop-logo",src:Se,style:{width:"150px",cursor:"pointer"},alt:""})}),r.jsx("div",{className:"right",children:r.jsxs(ve,{gap:"middle",align:"center",children:[r.jsx(Re,{size:"large",defaultValue:"lucy",style:{width:50},allowClear:!1,showSearch:!1,options:[{value:"jack",label:"UZ"},{value:"lucy",label:"RU"},{value:"Yiminghe",label:"EN"}]}),r.jsx(ji,{toggleMenu:s,menu_show:a})]})})]})})}),r.jsx("div",{className:`left-menu  ${a?"open":"close"}`,children:r.jsxs("ul",{children:[f.map((y,O)=>r.jsx("li",{children:r.jsx(ce,{activeClass:"active",to:y.target,spy:!0,smooth:!0,hashSpy:!0,offset:v,duration:100,delay:100,isDynamic:!0,ignoreCancelEvents:!1,spyThrottle:500,onClick:()=>s(),children:y.name})},O)),r.jsx("li",{children:r.jsx(B,{className:"sign-in",size:"large",onClick:()=>e("/auth/sign-in"),children:t("Kirish")})}),r.jsx("li",{children:r.jsx(B,{type:"primary",size:"large",className:"sign-up",onClick:()=>e("/auth/sign-up"),children:t("Ro'yxatdan o'tish")})})]})})]})},Si="/assets/bg-B4UkCeMD.png",Ei=P(A)`
  background-image: url(${Si});
  background-position: center bottom;
  background-size: contain;
  background-repeat: no-repeat;
  .main {
    margin-top: 100px;
    .left {
      height: calc(100vh - 100px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 250px;
      .title {
        color: var(--Neutral-D_Grey, #4d4d4d);
        text-align: center;
        font-size: 40px;
        font-style: normal;
        font-weight: 600;
        line-height: 57px; /* 118.75% */
        span {
          color: ${t=>t.theme.colors.primaryColor};
        }
      }
      .description {
        color: var(--Neutral-Grey, #717171);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
        margin-top: 16px;
      }
      button {
        margin-top: 20px;
        border-radius: 10px;
      }
    }
  }

  @media (max-width: 576px) {
    background-image: inherit;
    .main {
      margin-top: 85px;

      .left {
        height: calc(100vh - 85px);
        padding: 0;
        .title {
          font-size: 32px;
          font-weight: 600;
          line-height: 47px; /* 118.75% */
        }
        .description {
          font-size: 14px;
          font-weight: 400;
          line-height: 24px; /* 150% */
          margin-top: 10px;
        }
        button {
          margin-top: 15px;
          border-radius: 10px;
        }
      }
    }
  }
`,ki=()=>{const{t}=R(),e=Oe();return r.jsxs(Ei,{name:"home",style:{overflow:"hidden"},children:[r.jsx(_i,{}),r.jsx(M,{children:r.jsx("div",{className:"main",children:r.jsx(F,{gullter:[20,20],children:r.jsx(D,{xs:24,md:24,children:r.jsxs("div",{className:"left",children:[r.jsx("h1",{className:"title",dangerouslySetInnerHTML:{__html:t("<span> Smart tizim</span> - biznesning savdo, moliya, omborxona ishlarini avtomatlashtirish tizimi")}}),r.jsx("p",{className:"description",children:t("Biz bilan biznesingizni oson boshqaring.")}),r.jsx("div",{children:r.jsx(B,{icon:r.jsx(Zt,{}),type:"primary",size:"large",onClick:()=>e("/auth/sign-up"),children:t("Ro'yxatdan o'tish")})})]})})})})})]})},Oi=P(A)`
  padding: 80px 0;
  background-color: #f5f7fa;
  .title {
    color: var(--Neutral-D_Grey, #4d4d4d);
    text-align: center;
    font-size: 36px;
    font-style: normal;
    font-weight: 600;
    line-height: 44px; /* 122.222% */
    margin-bottom: 15px;
  }

  .desc {
    color: var(--Neutral-Grey, #717171);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .cards {
    padding-top: 50px;
    padding-bottom: 20px;
    .my-card {
      height: 100%;
      padding: 24px;
      border-radius: 8px;
      background: var(--Neutral-White, #fff);

      .img-box {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${t=>t.theme.colors.primaryColor};
      }

      .card-title {
        color: var(--Neutral-D_Grey, #4d4d4d);
        font-size: 20px;
        font-style: normal;
        text-align: center;
        font-weight: 700;
        line-height: 36px; /* 128.571% */
        margin-top: 15px;
        margin-bottom: 20px;
      }

      .info-data {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
          display: flex;
          align-items: center;
          margin: 5px 0;
          .icon {
            margin-right: 10px;
            svg {
              color: #717171;
            }
          }
          .text {
            color: var(--Neutral-Grey, #717171);
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px; /* 142.857% */
            margin-right: 15px;
            font-weight: bold;
          }
          .count {
            color: ${t=>t.theme.colors.primaryColor};
            font-weight: bold;
          }
        }
      }

      .btn-box {
        margin-top: 25px;
        /* display: flex;
        align-items: center;
        justify-content: center; */
      }
    }
  }

  @media (max-width: 576px) {
    padding: 50px 0;
    .title {
      font-size: 28px;
      line-height: 36px; /* 122.222% */
    }
    .desc {
      font-size: 12px;
      line-height: 18px;
    }

    .cards {
      padding-top: 30px;
      padding-bottom: 10px;

      .my-card {
        padding: 16px;

        .card-title {
          font-size: 16px;
          line-height: 28px;
        }

        .card-desc {
          font-size: 10px;
          line-height: 18px;
        }

        .info-data {
          li {
            .icon {
              width: 20px;
              margin-right: 10px;
            }
            .text {
              font-size: 10px;
              line-height: 18px;
            }
          }
        }
      }
    }
  }
`,Ti=()=>{const{t}=R(),e=Oe(),n=[{name:"Basic",icon:r.jsx(rn,{size:40}),info:{statistics:r.jsx(an,{style:{color:"red"}}),storages:1,clients:50,suppliers:50,workers:10,day:10,price:{monthly:"99.000",yearly:"1.000.000"}}},{name:"Premium",icon:r.jsx(on,{size:40}),info:{statistics:r.jsx(_e,{style:{color:"green"}}),storages:2,clients:100,suppliers:100,workers:10,day:10,price:{monthly:"199.000",yearly:"2.000.000"}}},{name:"Gold",icon:r.jsx(sn,{size:40}),info:{statistics:r.jsx(_e,{style:{color:"green"}}),storages:r.jsx(ee,{}),clients:r.jsx(ee,{}),suppliers:r.jsx(ee,{}),workers:r.jsx(ee,{}),day:10,price:{monthly:"299.000",yearly:"3.000.000"}}}];return r.jsx(Oi,{name:"prices",style:{overflow:"hidden"},children:r.jsx(r.Fragment,{children:r.jsxs(M,{children:[r.jsx("div",{className:"title",children:t("Narxlar")}),r.jsx("div",{className:"desc",children:t("Gold tarifni 10 kun bepul sinab ko'ring !")}),r.jsx(F,{gutter:[20,20],className:"cards",children:n.map(i=>{var a,c,s,o;return r.jsx(D,{xs:24,md:8,children:r.jsxs("div",{className:"my-card",children:[r.jsx("div",{className:"img-box",children:i.icon}),r.jsx("div",{className:"card-title",children:i.name}),r.jsxs("ul",{className:"info-data",children:[r.jsxs("li",{children:[r.jsx("div",{className:"icon",children:r.jsx(ut,{size:25})}),r.jsxs("div",{className:"text",children:[t("Statistika"),":"]}),r.jsx("div",{className:"count",children:i.info.statistics})]}),r.jsxs("li",{children:[r.jsx("div",{className:"icon",children:r.jsx(ct,{size:25})}),r.jsxs("div",{className:"text",children:[t("Omborxona soni"),":"]}),r.jsx("div",{className:"count",children:i.info.storages})]}),r.jsxs("li",{children:[r.jsx("div",{className:"icon",children:r.jsx(Jt,{size:25})}),r.jsxs("div",{className:"text",children:[t("Mijozlar soni"),":"]}),r.jsx("div",{className:"count",children:i.info.clients})]}),r.jsxs("li",{children:[r.jsx("div",{className:"icon",children:r.jsx(Vt,{size:25})}),r.jsxs("div",{className:"text",children:[t("Ta'minotchilar soni"),":"]}),r.jsx("div",{className:"count",children:i.info.suppliers})]}),r.jsxs("li",{children:[r.jsx("div",{className:"icon",children:r.jsx(en,{size:25})}),r.jsxs("div",{className:"text",children:[t("Ishchilar soni"),":"]}),r.jsx("div",{className:"count",children:i.info.workers})]}),r.jsxs("li",{children:[r.jsx("div",{className:"icon",children:r.jsx(tn,{size:25})}),r.jsxs("div",{className:"text",children:[t("Narxi (Oylik)"),":"]}),r.jsxs("div",{className:"count",children:[(c=(a=i==null?void 0:i.info)==null?void 0:a.price)==null?void 0:c.monthly," ",t("so'm")]})]}),r.jsxs("li",{children:[r.jsx("div",{className:"icon",children:r.jsx(nn,{size:25})}),r.jsxs("div",{className:"text",children:[t("Narxi (Yillik)"),":"]}),r.jsxs("div",{className:"count",children:[(o=(s=i==null?void 0:i.info)==null?void 0:s.price)==null?void 0:o.yearly," ",t("so'm")]})]})]}),r.jsx("div",{className:"btn-box",children:r.jsx(B,{type:"primary",onClick:()=>e("/auth/sign-up"),children:t("Sinab ko'rish")})})]})})})})]})})})},$i=()=>r.jsxs(ln,{children:[r.jsx(ki,{}),r.jsx(mi,{}),r.jsx(pi,{}),r.jsx(Ti,{}),r.jsx(vi,{})]});export{$i as default};
