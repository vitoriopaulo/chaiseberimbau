/*! For license information please see 63df00f008c4e2802b0fd4c9bbe3cd368e834ee8-17e4d6b0d7c5425a092b.js.LICENSE.txt */
(self.webpackChunk_freecodecamp_client=self.webpackChunk_freecodecamp_client||[]).push([[9034],{66280:function(e){e.exports=function(){"use strict";var e=function(e,t,n,a){return(e/=a/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t},t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},n=function(){function n(){return window.scrollY||window.pageYOffset}function a(e){return e.getBoundingClientRect().top+i}function o(e){p||(p=e),y=u(E=e-p,i,f,h),window.scrollTo(0,y),E<h?requestAnimationFrame(o):l()}function l(){window.scrollTo(0,i+f),c&&m&&(c.setAttribute("tabindex","-1"),c.focus()),"function"==typeof v&&v(),p=!1}function r(l){var r=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];switch(h=r.duration||1e3,d=r.offset||0,v=r.callback,u=r.easing||e,m=r.a11y||!1,i=n(),void 0===l?"undefined":t(l)){case"number":c=void 0,m=!1,s=i+l;break;case"object":s=a(c=l);break;case"string":c=document.querySelector(l),s=a(c)}switch(f=s-i+d,t(r.duration)){case"number":h=r.duration;break;case"function":h=r.duration(f)}requestAnimationFrame(o)}var c=void 0,i=void 0,s=void 0,d=void 0,u=void 0,m=void 0,f=void 0,h=void 0,p=void 0,E=void 0,y=void 0,v=void 0;return r};return n()}()},85071:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=n(66280),r=(a=l)&&a.__esModule?a:{default:a},c=n(40110),i=n(71862),s=n(78180);var d={offset:0,scrollDuration:400,keepLastAnchorHash:!1};t.default=new function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.addListeners=function(){window.addEventListener("scroll",t.scrollHandler,!1),window.addEventListener("hashchange",t.handleHashChange)},this.removeListeners=function(){window.removeEventListener("scroll",t.scrollHandler,!1),window.removeEventListener("hashchange",t.handleHashChange)},this.configure=function(e){t.config=o({},d,e)},this.goToTop=function(){0!==(0,i.getScrollTop)()&&(t.forcedHash=!0,window.scroll(0,0))},this.addAnchor=function(e,n){0===Object.keys(t.anchors).length&&t.addListeners(),t.forceHashUpdate(),t.anchors[e]=n},this.removeAnchor=function(e){delete t.anchors[e],0===Object.keys(t.anchors).length&&t.removeListeners()},this.handleScroll=function(){var e=t.config,n=e.offset,a=e.keepLastAnchorHash,o=(0,i.getBestAnchorGivenScrollLocation)(t.anchors,n);o&&(0,s.getHash)()!==o?(t.forcedHash=!0,(0,s.updateHash)(o,!1)):o||a||(0,s.removeHash)()},this.handleHashChange=function(e){t.forcedHash?t.forcedHash=!1:t.goToSection((0,s.getHash)())},this.goToSection=function(e){var n=t.anchors[e];n?(0,r.default)(n,{duration:t.config.scrollDuration,offset:t.config.offset}):(n=document.getElementById(e))&&(0,r.default)(n,{duration:0,offset:t.config.offset})},this.anchors={},this.forcedHash=!1,this.config=d,this.scrollHandler=(0,c.debounce)(this.handleScroll,100),this.forceHashUpdate=(0,c.debounce)(this.handleHashChange,1)}},48754:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(72047),l=s(o),r=s(n(94685)),c=s(n(23108)),i=s(n(85071));function s(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.id=e.id||e.children.ref,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidMount",value:function(){var e=r.default.findDOMNode(this.refs[Object.keys(this.refs)[0]]);i.default.addAnchor(this.id,e)}},{key:"componentWillUnmount",value:function(){i.default.removeAnchor(this.id)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.id;return l.default.cloneElement(t,{ref:t.ref||n})}}]),t}(o.Component);d.propTypes={children:c.default.node,id:c.default.string},t.default=d},61820:function(e,t,n){"use strict";t.Ay=t.PY=t.fE=void 0;var a=n(78180);Object.defineProperty(t,"PY",{enumerable:!0,get:function(){return a.updateHash}});var o=n(48754);Object.defineProperty(t,"Ay",{enumerable:!0,get:function(){return r(o).default}});var l=r(n(85071));function r(e){return e&&e.__esModule?e:{default:e}}l.default.goToTop,t.fE=l.default.configure},40110:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=arguments;t.debounce=function(e,t,a){var o=void 0;return function(){var l=void 0,r=n,c=a&&!o;clearTimeout(o),o=setTimeout((function(){o=null,a||e.apply(l,r)}),t),c&&e.apply(l,r)}}},78180:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getHash=function(){return decodeURI(window.location.hash.slice(1))},t.updateHash=function(e,t){t?window.location.hash=e:window.location.replace("#"+e)},t.removeHash=function(){history.replaceState("",document.title,window.location.pathname+window.location.search)}},71862:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=t.getScrollTop=function(){return document.body.scrollTop||document.documentElement.scrollTop},a=t.getElementOffset=function(e){var t=n(),a=e.getBoundingClientRect(),o=a.top,l=a.bottom;return{top:Math.floor(o+t),bottom:Math.floor(l+t)}},o=t.doesElementContainScrollTop=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=n(),l=a(e).top+t;return o>=l&&o<l+e.offsetHeight},l=t.checkLocationRelevance=function(e,t){var n=a(e),o=n.top,l=n.bottom,r=a(t),c=r.top,i=r.bottom;return o===c?l===i?e<t:i<l:c>o},r=t.checkElementRelevance=function(e,t){return!!e.contains(t)||!(t.contains(e)||!l(e,t))};t.getBestAnchorGivenScrollLocation=function(e,t){var n=void 0,a=void 0;return Object.keys(e).forEach((function(l){var c=e[l];o(c,t)&&(a&&!r(a,c)||(a=c,n=l))})),n}},70051:function(e,t,n){"use strict";var a=n(72047);function o(){return a.createElement("svg",{viewBox:"0 0 100 100",width:"25px"},a.createElement("polygon",{points:"-6.04047,17.1511 81.8903,58.1985 -3.90024,104.196",style:{stroke:"var(--primary-color)",fill:"var(--primary-color)",strokeWidth:"1px"},transform:"matrix(0.999729, 0.023281, -0.023281, 0.999729, 7.39321, -10.0425)"}))}o.displayName="Caret",t.A=o},16469:function(e,t,n){"use strict";var a=n(72047),o=n(41903);function l(e){const{t:t}=(0,o.Bd)(),{hushScreenReaderText:n=!1,...l}=e;return a.createElement(a.Fragment,null,a.createElement("svg",Object.assign({},n&&{"aria-hidden":!0},!n&&{"aria-label":t("icons.passed")},{height:"15",viewBox:"0 0 200 200",width:"15",xmlns:"http://www.w3.org/2000/svg"},l),a.createElement("g",{"aria-hidden":"true"},a.createElement("title",null,t("icons.passed")),a.createElement("circle",{cx:"100",cy:"99",fill:"var(--primary-color)",r:"95",stroke:"var(--primary-color)",strokeDasharray:"null"}),a.createElement("rect",{fill:"var(--primary-background)",height:"30",stroke:"var(--primary-background)",strokeDasharray:"null",transform:"rotate(-45, 120, 106.321)",width:"128.85878",x:"55.57059",y:"91.32089"}),a.createElement("rect",{fill:"var(--primary-background)",height:"30",stroke:"var(--primary-background)",strokeDasharray:"null",transform:"rotate(45, 66.75, 123.75)",width:"80.66548",x:"26.41726",y:"108.75"}))))}l.displayName="GreenPass",t.A=l},13056:function(e,t,n){"use strict";n.d(t,{A:function(){return O}});n(94814);var a=n(72047),o=n(16729),l=n(61820),r=n(86340),c=n(12835),i=n(92013),s=n(60805),d=n(80807),u=n(31011),m=n(92033),f=n(20348),h=n(59346),p=n(41903),E=n(97829),y=n.p+"static/donation-bear-animation-339b48babe2a401b4192edb881d6baaa.svg",v=n.p+"static/supporter-bear-e0a35f40fb0f8d5c70a63f40f953d726.svg",g=n(20741),b=n(45752);const w=()=>{const{t:e}=(0,p.Bd)();return a.createElement("img",{alt:e("donate.flying-bear"),id:"supporter-bear",src:v})};function k(e){let{recentlyClaimedBlock:t,showHeaderAndFooter:n,donationAttempted:o,showForm:l}=e;const{t:r}=(0,p.Bd)();return!n||o||l?null:a.createElement(i.fI,{className:"text-center"},a.createElement(i.fv,{sm:10,smOffset:1,xs:12},null!==t&&a.createElement(a.Fragment,null,a.createElement("b",null,r("donate.nicely-done",{block:r("intro:"+t.superBlock+".blocks."+t.block+".title")})),a.createElement(i.hK,{size:"xs"})),a.createElement(i.aF.Header,{showCloseButton:!1,borderless:!0},r("donate.modal-benefits-title"))))}function A(e){let{donationAttempted:t,closeDonationModal:n}=e;const{t:o}=(0,p.Bd)();return a.createElement(i.fI,null,a.createElement(i.fv,{sm:4,smOffset:4,xs:8,xsOffset:2},a.createElement("button",{className:"close-button",type:"button",onClick:n},o(t?"buttons.close":"buttons.ask-later"))))}const F=e=>{let{setShowForm:t}=e;const{t:n}=(0,p.Bd)();return a.createElement(i.fI,{className:"donate-btn-group"},a.createElement(i.fv,{xs:12},a.createElement(b.pQ,null),a.createElement(i.hK,{size:"xs"}),a.createElement("button",{className:"text-center confirm-donation-btn donate-btn-group",type:"submit",onClick:()=>{(0,h.A)({event:"donation_related",action:"Modal Become Supporter Click"}),t(!0)}},n("donate.become-supporter")),a.createElement(i.hK,{size:"m"})))},x=e=>{let{secondsRemaining:t}=e;const{t:n}=(0,p.Bd)();return a.createElement(a.Fragment,null,a.createElement("div",{style:{opacity:0,position:"absolute"}},a.createElement("p",null,n("donate.animation-description")),a.createElement("span",{"aria-live":"polite"},n("donate.animation-countdown",{secondsRemaining:t}))),a.createElement("div",{className:"donation-animation-container","aria-hidden":"true"},a.createElement("div",{className:"donation-animation-bullet-points"},a.createElement("p",{className:"donation-animation-bullet-1"},n("donate.become-supporter")),a.createElement("p",{className:"donation-animation-bullet-2"},n("donate.remove-distractions")),a.createElement("p",{className:"donation-animation-bullet-3"},n("donate.reach-goals-faster")),a.createElement("p",{className:"donation-animation-bullet-4"},n("donate.help-millions-learn"))),a.createElement("img",{key:Date.now(),alt:"",src:y,id:"donation-animation","data-playwright-test-label":"donation-animation"})))},B=e=>{let{recentlyClaimedBlock:t,showHeaderAndFooter:n,closeDonationModal:o,donationAttempted:l,showForm:r,setShowHeaderAndFooter:c,handleProcessing:s,setShowForm:d}=e;return a.createElement("div",{className:"no-delay-fade-in"},a.createElement("div",{className:"donation-icon-container"},a.createElement(w,null)),a.createElement(k,{recentlyClaimedBlock:t,showHeaderAndFooter:n,donationAttempted:l,showForm:r}),a.createElement(i.hK,{size:"xs"}),r?a.createElement(g.A,{setShowHeaderAndFooter:c,handleProcessing:s,paymentContext:E.Qv.Modal,isMinimalForm:!0}):a.createElement(F,{setShowForm:d}),(n||l)&&a.createElement(A,{closeDonationModal:o,donationAttempted:l}))};function C(e){let{closeDonationModal:t,recentlyClaimedBlock:n,setCanClose:o}=e;const[l,r]=(0,a.useState)(!1),[c,s]=(0,a.useState)(!0),[d,u]=(0,a.useState)(!0),[m,f]=(0,a.useState)(!1),[h,p]=(0,a.useState)(20);return(0,a.useEffect)((()=>{const e=setInterval((()=>{p((t=>t>0?t-1:(u(!1),clearInterval(e),0)))}),1e3);return()=>clearInterval(e)}),[]),(0,a.useEffect)((()=>{0===h&&o(!0)}),[h,o]),a.createElement(i.aF.Body,{borderless:!0,alignment:"start"},a.createElement("div",{"aria-live":"polite",className:"donation-modal"},d?a.createElement(x,{secondsRemaining:h}):a.createElement(B,{recentlyClaimedBlock:n,showHeaderAndFooter:c,closeDonationModal:t,donationAttempted:l,showForm:m,setShowHeaderAndFooter:s,handleProcessing:()=>{r(!0)},setShowForm:f})))}C.displayName="DonationModalBody",F.displayName="DonationModalBenefits";var H=C;const S=(0,c.Mz)(u.ds,u.U0,((e,t)=>({show:e,recentlyClaimedBlock:t})));function _(e){let{show:t,closeDonationModal:n,location:o,recentlyClaimedBlock:r}=e;const[c,d]=(0,a.useState)(!1),u=(0,s.iT)("a11y-donation-modal").on;(0,a.useEffect)((()=>{t&&((0,f.R)("donation"),(0,h.A)({event:"pageview",pagePath:"/donation-modal"}),(0,h.A)({event:"donation_view",action:"Displayed "+(null!==r?"Block":"Progress")+" Donation Modal"}))}),[t,r]);return a.createElement(i.aF,{size:"large",onClose:()=>{(0,m.e)(o)&&(0,l.PY)("claim-cert-block"),u&&c&&n()},open:t},a.createElement(H,{closeDonationModal:n,recentlyClaimedBlock:r,setCanClose:d}))}_.displayName="DonateModal";var O=(0,o.Ng)(S,(e=>(0,r.zH)({closeDonationModal:d.og},e)))(_)},45752:function(e,t,n){"use strict";n.d(t,{Is:function(){return d},ah:function(){return v},d8:function(){return u},no:function(){return h},oI:function(){return E},ow:function(){return f},pQ:function(){return g},pc:function(){return y}});n(94814);var a=n(72047),o=n(41903),l=n(60805),r=n(92013),c=n(70051),i=n(16469);const s=a.createElement(a.Fragment,null,a.createElement("code",null,"Free Code Camp, Inc."),a.createElement("br",null),a.createElement("code",null,"3905 Hedgcoxe Rd"),a.createElement("br",null),a.createElement("code",null,"PO Box 250352"),a.createElement("br",null),a.createElement("code",null,"Plano, TX 75025")),d=()=>{const{t:e}=(0,o.Bd)();return a.createElement(a.Fragment,null,a.createElement("h1",{"data-playwright-test-label":"main-head",id:"content-start"},e("donate.help-more")),a.createElement(r.hK,{size:"m"}),a.createElement("p",{"data-playwright-test-label":"donate-text-1"},e("donate.efficiency")),a.createElement("p",{"data-playwright-test-label":"donate-text-2"},e("donate.why-donate-1")),a.createElement("p",{"data-playwright-test-label":"donate-text-3"},e("donate.why-donate-2")))},u=e=>{let{askForDonation:t,thankContributon:n}=e;const{t:l}=(0,o.Bd)();return a.createElement(a.Fragment,null,a.createElement("h1",{"data-playwright-test-label":"main-head"},l("donate.thank-you")),(t||n)&&a.createElement(a.Fragment,null,a.createElement(r.hK,{size:"m"}),a.createElement("p",null,l("donate.crucial-contribution"))),t&&a.createElement(m,null))},m=()=>{const{t:e}=(0,o.Bd)();return a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement(o.x6,{i18nKey:"donate.if-support-further"},a.createElement("a",{href:e("links:donate.one-time-external-url")},"placeholder"),a.createElement("a",{href:e("links:donate.mail-check-url")},"placeholder"),a.createElement("a",{href:e("links:donate.other-ways-url")},"placeholder"))))},f=()=>{const{t:e}=(0,o.Bd)(),t=[{Q:e("donate.get-help"),A:a.createElement("p",null,e("donate.forward-receipt"))},{Q:e("donate.how-transparent"),A:a.createElement(a.Fragment,null,a.createElement("p",null,e("donate.very-transparent")),a.createElement("p",null,a.createElement(o.x6,{i18nKey:"donate.download-irs"},a.createElement("a",{href:e("links:donate.download-irs-url")},"placeholder"))),a.createElement("p",null,a.createElement(o.x6,{i18nKey:"donate.download-990"},a.createElement("a",{href:e("links:donate.download-990-url")},"placeholder"))))},{Q:e("donate.how-efficient"),A:a.createElement(a.Fragment,null,a.createElement("p",null,e("donate.fcc-budget")),a.createElement("p",null,e("donate.help-millions")))},{Q:e("donate.how-one-time"),A:a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement(o.x6,{i18nKey:"donate.one-time"},a.createElement("a",{href:e("links:donate.one-time-url")},"placeholder"))),a.createElement("p",null,e("donate.wire-transfer")))},{Q:e("donate.does-crypto"),A:a.createElement(a.Fragment,null,a.createElement("p",null,e("donate.yes-cryptocurrency")))},{Q:e("donate.can-check"),A:a.createElement(a.Fragment,null,a.createElement("p",null,e("donate.yes-check")),a.createElement("p",null,s))},{Q:e("donate.how-matching-gift"),A:a.createElement(a.Fragment,null,a.createElement("p",null,e("donate.employers-vary")),a.createElement("p",null,e("donate.some-volunteer")),a.createElement("p",null,e("donate.help-matching-gift")))},{Q:e("donate.how-endowment"),A:a.createElement("p",null,e("donate.endowment"))},{Q:e("donate.how-legacy"),A:a.createElement(a.Fragment,null,a.createElement("p",null,e("donate.we-honored")),a.createElement("blockquote",null,a.createElement("p",null,e("donate.legacy-gift-message"))),a.createElement("p",null,e("donate.thank-wikimedia")),a.createElement("p",null,e("donate.legacy-gift-questions")))},{Q:e("donate.how-stock"),A:a.createElement("p",null,e("donate.welcome-stock"))},{Q:e("donate.how-update"),A:a.createElement("p",null,e("donate.forward-receipt"))},{Q:e("donate.anything-else"),A:a.createElement(a.Fragment,null,a.createElement("p",null,e("donate.other-support")))}];return a.createElement(a.Fragment,null,a.createElement("h2",{"data-playwright-test-label":"faq-head"},e("donate.faq")),a.createElement(r.hK,{size:"xs"}),t.map(((e,t)=>((e,t,n)=>{const[o,l]=(0,a.useState)(!1);return a.createElement("div",{className:"faq-item "+(o?"open":""),key:n},a.createElement("button",{className:"map-title",onClick:()=>l(!o),"aria-expanded":o,"aria-controls":"donate-faq-content-"+n},a.createElement(c.A,null),a.createElement("h3",null,e)),o&&a.createElement("div",{className:"map-challenges-ul",id:"donate-faq-content-"+n},t))})(e.Q,e.A,t))))},h=e=>{let{isSupportersPage:t}=e;const{t:n}=(0,o.Bd)();return a.createElement(a.Fragment,null,a.createElement("h2",null,n(t?"donate.exclusive-features":"donate.support-benefits-title")),a.createElement(p,null))},p=()=>{const{t:e}=(0,o.Bd)();return a.createElement("ul",null,a.createElement("li",null,e("donate.support-benefits-1")),a.createElement("li",null,e("donate.support-benefits-2")),a.createElement("li",null,e("donate.support-benefits-3")),a.createElement("li",null,a.createElement(o.x6,{i18nKey:"donate.support-benefits-4"},a.createElement("a",{href:"https://discord.gg/KVUmVXA",target:"_blank",rel:"noopener noreferrer"},"placeholder"),a.createElement("code",null,"placeholder"))),a.createElement("li",null,e("donate.support-benefits-5")))},E=e=>{let{isSupportersPage:t}=e;const{t:n}=(0,o.Bd)();return a.createElement(a.Fragment,null,a.createElement("h2",null,n(t?"donate.your-donation-helps-followings":"donate.current-initiatives-title")),a.createElement("ul",null,a.createElement("li",null,n("donate.current-initiatives-1")),a.createElement("li",null,n("donate.current-initiatives-2")),a.createElement("li",null,n("donate.current-initiatives-3")),a.createElement("li",null,n("donate.current-initiatives-4"))))},y=()=>{const{t:e}=(0,o.Bd)();return a.createElement(a.Fragment,null,a.createElement("h2",null,e("donate.community-achivements-title")),a.createElement("ul",null,a.createElement("li",null,a.createElement(o.x6,{i18nKey:"donate.community-achivements-1"},a.createElement("b",null,"placeholder"))),a.createElement("li",null,a.createElement(o.x6,{i18nKey:"donate.community-achivements-2"},a.createElement("b",null,"placeholder"))),a.createElement("li",null,a.createElement(o.x6,{i18nKey:"donate.community-achivements-3"},a.createElement("b",null,"placeholder"))),a.createElement("li",null,a.createElement(o.x6,{i18nKey:"donate.community-achivements-4"},a.createElement("b",null,"placeholder")))))},v=e=>{let{isDonating:t}=e;const{t:n}=(0,o.Bd)();return a.createElement(a.Fragment,null,a.createElement(r.hK,{size:"l"}),a.createElement("p",null,n("donate.as-you-see")),t?null:a.createElement("p",null,n("donate.get-benefits")))},g=()=>{const{t:e}=(0,o.Bd)(),t=(0,l.iT)("a11y-donation-modal").on;return a.createElement("ul",t&&{tabIndex:-1},a.createElement("li",null,a.createElement(i.A,{"aria-hidden":!0}),e("donate.help-us-more-certifications")),a.createElement("li",null,a.createElement(i.A,{"aria-hidden":!0}),e("donate.remove-donation-popups")),a.createElement("li",null,a.createElement(i.A,{"aria-hidden":!0}),e("donate.help-millions-learn")))}}}]);
//# sourceMappingURL=63df00f008c4e2802b0fd4c9bbe3cd368e834ee8-17e4d6b0d7c5425a092b.js.map