webpackJsonp([0],[,,function(t,e){t.exports=function(t,e,n,i,r){var a,s=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(a=t,s=t.default);var c="function"==typeof s?s.options:s;e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns),i&&(c._scopeId=i);var u;if(r?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},c._ssrRegister=u):n&&(u=n),u){var l=c.functional,d=l?c.render:c.beforeCreate;l?c.render=function(t,e){return u.call(e),d(t,e)}:c.beforeCreate=d?[].concat(d,u):[u]}return{esModule:a,exports:s,options:c}}},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var a=i(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([a]).join("\n")}return[n].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=n(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(i[a]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},,function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=l[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(a(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var s=[],r=0;r<n.parts.length;r++)s.push(a(n.parts[r]));l[n.id]={id:n.id,refs:1,parts:s}}}}function r(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function a(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(p)return m;i.parentNode.removeChild(i)}if(h){var a=v++;i=f||(f=r()),e=s.bind(null,i,a,!1),n=s.bind(null,i,a,!0)}else i=r(),e=o.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function s(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=_(e,r);else{var a=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(a,s[e]):t.appendChild(a)}}function o(t,e){var n=e.css,i=e.media,r=e.sourceMap;if(i&&t.setAttribute("media",i),r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var u=n(214),l={},d=c&&(document.head||document.getElementsByTagName("head")[0]),f=null,v=0,p=!1,m=function(){},h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){p=n;var r=u(t,e);return i(r),function(e){for(var n=[],a=0;a<r.length;a++){var s=r[a],o=l[s.id];o.refs--,n.push(o)}e?(r=u(t,e),i(r)):r=[];for(var a=0;a<n.length;a++){var o=n[a];if(0===o.refs){for(var c=0;c<o.parts.length;c++)o.parts[c]();delete l[o.id]}}}};var _=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.GO_NEXT="GO_NEXT",e.GO_PREV="GO_PREV",e.ANSWER="ANSWER",e.GO_FIRST="GO_FIRST",e.LOAD_QUESTIONS="LOAD_QUESTIONS",e.TEST_STARTED="TEST_STARTED",e.TEST_ENDED="TEST_ENDED",e.LOAD_WEBCAM_EVENT="LOAD_WEBCAM_EVENT"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var i=n(2)(n(159),n(203),null,null,null);t.exports=i.exports},,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(11),a=i(r),s=n(10),o=i(s),c=n(4),u=i(c),l=n(188),d=i(l),f=n(190),v=(i(f),n(193)),p=i(v),m=n(194),h=i(m),_=n(192),g=i(_),b=n(191),w=i(b),C=n(189),y=i(C),x=n(157),E=i(x);n(178),a.default.use(u.default),a.default.use(o.default);var T=new o.default({mode:"history",routes:[{path:"/",component:h.default},{path:"/intro",component:h.default},{path:"/calibration",component:g.default},{path:"/test",component:p.default},{path:"/result",component:w.default},{path:"/admin",component:y.default}]});new a.default({el:"#app",components:{App:d.default,Test:p.default},router:T,store:new u.default.Store(E.default),render:function(t){return t("app")}}),a.default.filter("two_digits",function(t){return t.toString().length<=1?"0"+t.toString():t.toString()})},,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={current:function(t){return t.questions[t.currentIndex]},currentIndex:function(t){return t.currentIndex},currentAnswer:function(t){return t.questions[t.currentIndex].answer},isLast:function(t){return t.currentIndex+1===t.questions.length},isFirst:function(t){return 0===t.currentIndex},allAnswered:function(t){return t.questions.every(function(t){return null!=t.answer})},totalCount:function(t){return t.questions.length},correctCount:function(t){return 3},unansweredCount:function(t){return t.questions.filter(function(t){return null==t.answer}).length},answeredCount:function(t){return t.questions.filter(function(t){return null!=t.answer}).length},correctlyAnsweredCount:function(t){return t.questions.filter(function(t){return t.answer==t.correctAnswer}).length},testDuration:function(t){var e=Math.trunc(t.timeEnded-t.timeStarted)/1e3;return console.log(e),{minutes:Math.trunc(e/60)%60,seconds:Math.trunc(e%60)}},webcamEvents:function(t){return t.webcamEvents},numberOfTimesFaceWasKeptOffCamera:function(t){return t.webcamEvents.filter(function(t){return"NOFACE"==t.type}).length},numberOfTimesMoreThanOneFaceAppeared:function(t){return t.webcamEvents.filter(function(t){return"MULTIFACE"==t.type}).length}}},function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(e,"__esModule",{value:!0});var r,a=n(6),s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(a),o=n(156),c=function(t){return t&&t.__esModule?t:{default:t}}(o),u={currentIndex:0,correctAnswer:null,questions:[],timeStarted:null,timeEnded:null,webcamEvents:[]},l=(r={},i(r,s.GO_NEXT,function(t){t.currentIndex++}),i(r,s.GO_PREV,function(t){t.currentIndex--}),i(r,s.ANSWER,function(t,e){t.questions[t.currentIndex].answer=e}),i(r,s.GO_FIRST,function(t){t.currentIndex=0}),i(r,s.TEST_STARTED,function(t){t.timeStarted=new Date}),i(r,s.TEST_ENDED,function(t){t.timeEnded=new Date}),i(r,s.LOAD_QUESTIONS,function(t,e){t.questions=[],e.forEach(function(e){t.currentIndex=0,e.answer=null,t.questions.push(e)})}),i(r,s.LOAD_WEBCAM_EVENT,function(t,e){t.webcamEvents.push(e)}),r);e.default={namespaced:!0,state:u,getters:c.default,mutations:l}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){var t=this;this.now=this.timespan,window.setInterval(function(){t.now=0!==t.now?t.now-1:t.now,0===t.now&&t.$emit("action","timeout")},1e3)},props:["timespan"],data:function(){return{now:null}},computed:{seconds:function(){return 0!==this.now?this.now%60:0},minutes:function(){return 0!==this.now?Math.trunc(this.now/60)%60:0}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={mounted:function(){var t=this;t.initializeCamera(t),t.initializeTracker(t)},data:function(){return{now:null,lastTimeSeen:(new Date).getTime(),tracker:null,video:null}},methods:{initializeCamera:function(t){t.video=document.getElementById("userWebcam"),navigator.getMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia,navigator.getMedia({video:!0,audio:!1},function(e){if(navigator.mozGetUserMedia)t.video.mozSrcObject=e;else{var n=window.URL||window.webkitURL;t.video.src=n.createObjectURL(e)}t.video.play()},function(t){console.log("An error occured! "+t)})},initializeTracker:function(t){console.log("Initialize worker"),t.trackingWorker=new Worker("/javascripts/tracking.js"),t.attachOnFrameEventListener(),setInterval(t.takePhoto,200)},takePhoto:function(){var t=this,e=document.createElement("canvas");e&&(e.width=t.video.width,e.height=t.video.height);var n=e?e.getContext("2d"):null;if(n&&t.video.src){n.drawImage(t.video,0,0,t.video.width,t.video.height);var i=n.getImageData(0,0,t.video.width,t.video.height).data;t.trackingWorker.postMessage({data:i,width:t.video.width,height:t.video.height})}},attachOnFrameEventListener:function(){var t=this;t.trackingWorker.onmessage=function(e){var n=e.data,i={};i.eventTime=(new Date).toLocaleString(),0===n.data.length||n.data.length>1?1e3-((new Date).getTime()-t.lastTimeSeen)<=0&&(i.numberOfFacesFound=n.data.length,0===n.data.length?i.type="NOFACE":i.type="MULTIFACE",t.$parent.$emit("webcamEvent",i),t.lastTimeSeen=(new Date).getTime()):(t.lastTimeSeen=(new Date).getTime(),i.type="OK",t.$parent.$emit("webcamEvent",i))}}},destroyed:function(){console.log("Webcam destroyed"),this.trackingWorker.terminate(),console.log("Tracking worker terminated")},computed:{seconds:function(){return 0!==this.now?this.now%60:0}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(4);e.default={mounted:function(){},data:function(){return{}},computed:{durationText:function(){var t=this.$store.getters.testDuration,e="";return t.minutes>0&&(e+=t.minutes+" m "),t.seconds>0&&(e+=t.seconds+" s"),e},scoreText:function(){return Math.floor(this.$store.getters.correctlyAnsweredCount/this.$store.getters.totalCount*100)+"%"},correctlyAnsweredText:function(){return this.$store.getters.correctlyAnsweredCount},leftUnansweredText:function(){return this.$store.getters.unansweredCount},wrongText:function(){return this.$store.getters.totalCount-this.$store.getters.correctlyAnsweredCount-this.$store.getters.unansweredCount}},methods:{isPassed:function(){return 3===this.$store.getters.correctlyAnsweredCount&&!this.fraudDetected()},outcomeText:function(){return this.isPassed()?"Passed":"Failed"},fraudDetected:function(){return this.isFaceKeptOffReason()||this.isMoreThanOneFaceAppeared()},isFaceKeptOffReason:function(){return this.$store.getters.numberOfTimesFaceWasKeptOffCamera>5},isMoreThanOneFaceAppeared:function(){return this.$store.getters.numberOfTimesMoreThanOneFaceAppeared>1}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(132),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default={mounted:function(){var t=this;$("#calibrationProgressBar");this.$on("webcamEvent",function(e){"OK"===e.type?t.isInCamera=!0:"NOFACE"===e.type&&(t.isInCamera=!1)})},data:function(){return{isInCamera:!0,currentProgress:0,calibrationDone:!1}},computed:{},components:{Webcam:r.default},methods:{goToTest:function(t){this.$router.push("test")}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},a=n(187),s=i(a),o=n(132),c=i(o),u=n(196),l=i(u),d=n(195),f=i(d),v=n(6),p=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(v),m=n(8),h=i(m),_=n(4);e.default={mounted:function(){var t=this,e=this;this.$store.commit(p.TEST_STARTED),h.default.get("/questions").then(function(n){t.$store.commit(p.LOAD_QUESTIONS,n.data.questions),$("#camera-status").stick_in_parent(),t.$on("webcamEvent",function(t){this.$store.commit(p.LOAD_WEBCAM_EVENT,t),"OK"===t.type?e.isInCamera=!0:"NOFACE"===t.type&&(e.isInCamera=!1)})}).catch(function(t){console.error("Error",t)})},data:function(){return{mode:"question",isInCamera:!0}},computed:r({},(0,_.mapGetters)(["totalCount"])),components:{Countdown:s.default,question:f.default,review:l.default,Webcam:c.default},methods:{changeView:function(t){"review"===t?this.mode="review":"question"===t?this.mode="question":"timeout"!==t&&"endtest"!==t||(this.$store.commit(p.TEST_ENDED),this.$router.push("/result"))}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{faces:null}},mounted:function(){function t(){function t(){null===o&&(o={locateFile:function(){return"javascripts/BRFv4_JS_trial.js.mem"}},initializeBRF(o)),o.sdkReady?e():setTimeout(t,100)}function e(){r.width=i.videoWidth,r.height=i.videoHeight,s=new o.Rectangle(0,0,r.width,r.height),a=new o.BRFManager,a.init(s,s,"com.tastenkunst.brfv4.js.examples.minimal.webcam"),a.setNumFacesToTrack(2),setInterval(n,200)}function n(){var t=r.getContext("2d");t.drawImage(i,0,0,s.width,s.height),a.update(t.getImageData(0,0,s.width,s.height).data);var e=a.getFaces();console.log(e.filter(function(t){return t.state===o.BRFState.FACE_TRACKING}).length),document.querySelector("#faces").innerHTML=e.filter(function(t){return t.state===o.BRFState.FACE_TRACKING}).length}var i=document.getElementById("_webcam"),r=document.createElement("canvas"),a=null,s=null,o=null;!function(){function e(e){function n(){0===i.videoWidth?setTimeout(n,100):t()}i.srcObject=e,i.play(),n()}window.navigator.mediaDevices.getUserMedia({video:{width:640,height:480,frameRate:30}}).then(e).catch(function(){alert("No camera available.")})}()}window.onload=t}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},r=n(4),a=n(6),s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(a);e.default={data:function(){return{answer:""}},computed:i({},(0,r.mapGetters)(["totalCount","current","currentIndex","currentAnswer","isLast","allAnswered"])),mounted:function(){this.answer=this.$store.getters.currentAnswer},methods:{radioLabel:function(t){return"radio-"+t},nextDisabled:function(){return null===this.answer||this.$store.getters.isLast},prevDisabled:function(){return this.$store.getters.isFirst},prev:function(){this.$store.commit(s.GO_PREV),this.answer=this.$store.getters.currentAnswer},next:function(){this.$store.commit(s.GO_NEXT),this.answer=this.$store.getters.currentAnswer},review:function(){this.$emit("action","review")},changeSelection:function(){this.$store.commit(s.ANSWER,this.answer)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},r=n(4),a=n(6);!function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);e.default=t}(a);e.default={computed:i({},(0,r.mapGetters)(["totalCount","unansweredCount","answeredCount"])),methods:{showQuestions:function(){this.$emit("action","question")},endTest:function(){this.$emit("action","endtest")}}}},,,,function(t,e,n){e=t.exports=n(3)(void 0),e.push([t.i,".passed{background-color:#006400}.failed{background-color:darkred}",""])},function(t,e,n){e=t.exports=n(3)(void 0),e.push([t.i,".camera-status-hidden{display:none}.topbar{display:block;padding-top:10px;z-index:999;background-color:#fff}.blink{-webkit-animation:blinker 3s cubic-bezier(.5,0,1,1.5) infinite alternate;animation:blinker 3s cubic-bezier(.5,0,1,1.5) infinite alternate}.aaa{visibility:hidden;position:absolute}@media (min-width:600px){.aaa{visibility:visible;display:block;position:relative}}.fast-blink{-webkit-animation:blinker .5s cubic-bezier(.5,0,1,1) infinite alternate;animation:blinker .5s cubic-bezier(.5,0,1,1) infinite alternate}@-webkit-keyframes blinker{0%{opacity:1}to{opacity:0}}@keyframes blinker{0%{opacity:1}to{opacity:0}}",""])},function(t,e,n){e=t.exports=n(3)(void 0),e.push([t.i,"",""])},function(t,e,n){e=t.exports=n(3)(void 0),e.push([t.i,".camera-status-hidden{display:none}.topbar{display:block;padding-top:10px;z-index:999;background-color:#fff}.blink{-webkit-animation:blinker 3s cubic-bezier(.5,0,1,1.5) infinite alternate;animation:blinker 3s cubic-bezier(.5,0,1,1.5) infinite alternate}.fast-blink{-webkit-animation:blinker .5s cubic-bezier(.5,0,1,1) infinite alternate;animation:blinker .5s cubic-bezier(.5,0,1,1) infinite alternate}@-webkit-keyframes blinker{0%{opacity:1}to{opacity:0}}@keyframes blinker{0%{opacity:1}to{opacity:0}}",""])},function(t,e,n){e=t.exports=n(3)(void 0),e.push([t.i,"",""])},function(t,e,n){e=t.exports=n(3)(void 0),e.push([t.i,".button-right{margin-right:0;float:right}",""])},function(t,e,n){"use strict";t.exports=n(9).polyfill()},function(t,e){},,,,,,,,function(t,e,n){function i(t){n(179)}var r=n(2)(n(158),n(202),i,null,null);t.exports=r.exports},function(t,e,n){var i=n(2)(n(160),n(200),null,null,null);t.exports=i.exports},function(t,e,n){var i=n(2)(n(161),n(197),null,null,null);t.exports=i.exports},function(t,e,n){var i=n(2)(n(162),n(199),null,null,null);t.exports=i.exports},function(t,e,n){function i(t){n(208)}var r=n(2)(n(163),n(198),i,null,null);t.exports=r.exports},function(t,e,n){function i(t){n(211)}var r=n(2)(n(164),n(205),i,null,null);t.exports=r.exports},function(t,e,n){function i(t){n(209)}var r=n(2)(n(165),n(201),i,null,null);t.exports=r.exports},function(t,e,n){function i(t){n(210)}var r=n(2)(n(166),n(204),i,null,null);t.exports=r.exports},function(t,e,n){function i(t){n(213)}var r=n(2)(n(167),n(207),i,null,null);t.exports=r.exports},function(t,e,n){function i(t){n(212)}var r=n(2)(n(168),n(206),i,null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Countdown",{attrs:{timespan:"600"}}),t._v(" "),n("h2",{staticClass:"heading-large"},[t._v("Admin")])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("header",{staticClass:"transaction-header",class:[t.isPassed()?"passed":"failed"],staticStyle:{"margin-bottom":"50px"}},[n("h1",{staticClass:"transaction-header__title"},[t._v("Test complete")]),t._v(" "),n("p",{staticClass:"transaction-header__next-step"},[t._v("Please review your results")]),t._v(" "),n("table",{staticClass:"c-transaction-details c-transaction-details--four"},[n("tbody",[t._m(0),t._v(" "),n("tr",{staticClass:"c-transaction-details__item"},[n("th",{staticClass:"c-transaction-details__key"},[t._v("Outcome")]),t._v(" "),n("td",{staticClass:"c-transaction-details__value"},[t._v(t._s(t.outcomeText()))])]),t._v(" "),n("tr",{staticClass:"c-transaction-details__item"},[n("th",{staticClass:"c-transaction-details__key"},[t._v("Score")]),t._v(" "),n("td",{staticClass:"c-transaction-details__value"},[t._v(t._s(t.scoreText))])]),t._v(" "),n("tr",{staticClass:"c-transaction-details__item c-transaction-details__item--last"},[n("th",{staticClass:"c-transaction-details__key"},[t._v("Test duration")]),t._v(" "),n("td",{staticClass:"c-transaction-details__value"},[t._v(t._s(t.durationText))])])])])]),t._v(" "),n("div",{staticClass:"grid-row",attrs:{align:"center"}},[n("div",{staticClass:"column-one-third"},[n("div",{staticClass:"data"},[n("span",{staticClass:"data-item bold-xxlarge"},[t._v(t._s(t.correctlyAnsweredText))]),t._v(" "),n("span",{staticClass:"data-item bold-xsmall"},[t._v("Correct answers")])])]),t._v(" "),n("div",{staticClass:"column-one-third"},[n("div",{staticClass:"data"},[n("span",{staticClass:"data-item bold-xxlarge"},[t._v(t._s(t.leftUnansweredText))]),t._v(" "),n("span",{staticClass:"data-item bold-xsmall"},[t._v("Left unanswered")])])]),t._v(" "),n("div",{staticClass:"column-one-third"},[n("div",{staticClass:"data"},[n("span",{staticClass:"data-item bold-xxlarge"},[t._v(t._s(t.wrongText))]),t._v(" "),n("span",{staticClass:"data-item bold-xsmall"},[t._v("Wrong answers")])])])]),t._v(" "),t.fraudDetected()?n("div",[n("div",{staticClass:"message--failure"},[n("h3",{staticClass:"message__heading",staticStyle:{margin:"0"}},[t._v("Cheat markers detected")]),t._v(" "),t.isMoreThanOneFaceAppeared()?n("p",[t._v("More than one face detected in the camera viewport")]):t._e(),t._v(" "),t.isFaceKeptOffReason()?n("p",[t._v("Face kept off camera viewport for too long")]):t._e()])]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticClass:"c-transaction-details__item c-transaction-details__item--first"},[n("th",{staticClass:"c-transaction-details__key"},[t._v("Person")]),t._v(" "),n("td",{staticClass:"c-transaction-details__value"},[t._v("John Smith")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"heading-large"},[t._v("Test at home")]),t._v(" "),n("p",[n("router-link",{attrs:{to:"/intro"}},[n("a",{staticClass:"button button-start",attrs:{href:"#",role:"button"}},[t._v("Continue to testing zone")])])],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("router-view")},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"topbar",attrs:{id:"camera-status"}},[n("div",{staticClass:"grid-row"},[n("div",{staticClass:"column-one-third"},[n("div",{class:[t.isInCamera?"":"camera-status-hidden","badge--success"]},[n("i",{staticClass:"fa fa-video-camera blink"}),t._v("  Head position correct\n\t\t\t\t")]),t._v(" "),n("div",{class:[t.isInCamera?"camera-status-hidden":"","badge--alert fast-blink"]},[n("i",{staticClass:"fa fa-video-camera"}),t._v("  Your face is off the camera\n\t\t\t\t")])]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"column-one-third"},[n("Countdown",{attrs:{timespan:"300"},on:{action:function(e){t.changeView(e)}}})],1)])]),t._v(" "),n("div",{staticClass:"grid-row"},[n("div",{staticClass:"column-one-third aaa",staticStyle:{"min-width":"300px","padding-right":"10px"}},[n("Webcam",{staticStyle:{"margin-top":"40px"}})],1),t._v(" "),n("div",{staticClass:"column-two-thirds"},[t.totalCount>0&&"question"==t.mode?n("question",{on:{action:function(e){t.changeView(e)}}}):t._e(),t._v(" "),"review"==t.mode?n("review",{on:{action:function(e){t.changeView(e)}}}):t._e()],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"column-one-third"},[n("p")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("span",{staticStyle:{"font-weight":"bold"}},[t._v("Remaining time:")]),t._v(" "),n("span",{staticStyle:{display:"inline-block",width:"60px"}},[t._v(t._s(t._f("two_digits")(t.minutes))+":"+t._s(t._f("two_digits")(t.seconds)))])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("video",{attrs:{id:"userWebcam",width:"300",height:"255",preload:"",autoplay:"",loop:"",muted:""}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"heading-large"},[t._v("Take your theory test")]),t._v(" "),n("div",{staticClass:"text"},[t._v("\n\t\tIn this test you will be asked 3 questions. You will have 5 minutes to answer.\n\t\tYou will see the result of the test at the end.\n\t")]),t._v(" "),t._m(0),t._v(" "),n("p",[t._v("Before you start, you need to set up your camera.")]),t._v(" "),n("video",{attrs:{id:"_webcam"}}),t._v(" "),n("p",[n("router-link",{attrs:{to:"/calibration"}},[n("a",{staticClass:"button",attrs:{href:"#",role:"button"}},[t._v("Continue")])])],1),t._v(" "),n("div",{attrs:{id:"faces"}})])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message"},[n("p",[t._v("To attend, make sure that your camera is switched on")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",{staticClass:"heading-large"},[t._v("Camera calibration")]),t._v(" "),n("div",{staticClass:"topbar",attrs:{id:"camera-status"}},[n("div",{staticClass:"grid-row"},[n("div",{staticClass:"column-one-third"},[n("div",{class:[t.isInCamera?"":"camera-status-hidden","badge--success"]},[n("i",{staticClass:"fa fa-video-camera blink"}),t._v("  Head position correct\n\t\t\t\t")]),t._v(" "),n("div",{class:[t.isInCamera?"camera-status-hidden":"","badge--alert fast-blink"]},[n("i",{staticClass:"fa fa-video-camera"}),t._v("  Your face is off the camera\n\t\t\t\t")])])])]),t._v(" "),t._m(0),t._v(" "),n("div",[n("Webcam")],1),t._v(" "),n("div",{staticStyle:{"padding-top":"15px",width:"320px"}},[n("p",[n("button",{staticClass:"button",attrs:{role:"button"},on:{click:t.goToTest}},[t._v("Continue")])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message--important"},[n("p",[t._v('Please adjust yourself in front of your camera and click "Continue".')])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"heading-large"},[t._v("Review your test")]),t._v(" "),n("table",[n("caption",{staticClass:"heading-small"},[t._v("Summary")]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("Total number of questions")]),t._v(" "),n("td",[t._v(t._s(t.totalCount))])]),t._v(" "),n("tr",[n("td",[t._v("Number of complete questions")]),t._v(" "),n("td",[t._v(t._s(t.answeredCount))])]),t._v(" "),n("tr",[n("td",[t._v("Number of incomplete questions")]),t._v(" "),n("td",[t._v(t._s(t.unansweredCount))])])])]),t._v(" "),n("div",{staticStyle:{"margin-top":"20px"}},[n("input",{staticClass:"button",attrs:{type:"button",value:"Back"},on:{click:function(e){t.showQuestions()}}}),t._v(" "),n("input",{staticClass:"button button-right",attrs:{type:"button",value:"End"},on:{click:function(e){t.endTest()}}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticClass:"heading-large"},[n("span",{staticClass:"heading-secondary"},[t._v("Question "+t._s(t.currentIndex+1)+" of "+t._s(t.totalCount))]),t._v(t._s(t.current.text)+"\n\t")]),t._v(" "),n("form",{attrs:{id:"questionForm"}},[n("div",{staticClass:"form-group"},[n("fieldset",[n("legend",{staticClass:"visually-hidden"},[t._v(t._s(t.current.text))]),t._v(" "),t._l(t.current.answers,function(e,i){return n("div",{staticClass:"multiple-choice"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.answer,expression:"answer"}],attrs:{id:t.radioLabel(i),type:"radio",name:"radio-group"},domProps:{value:i,checked:t._q(t.answer,i)},on:{change:function(e){t.changeSelection()},__c:function(e){t.answer=i}}}),t._v(" "),n("label",{attrs:{for:t.radioLabel(i)}},[t._v(t._s(e.text))])])})],2)]),t._v(" "),n("div",{staticClass:"navigation-buttons"},[t.prevDisabled()?t._e():n("input",{staticClass:"button",attrs:{type:"button",value:"Previous"},on:{click:function(e){t.prev()}}}),t._v(" "),n("input",{staticClass:"button",staticStyle:{"background-color":"dodgerblue"},attrs:{type:"button",value:"Review"},on:{click:function(e){t.review()}}}),t._v(" "),t.isLast?t._e():n("input",{staticClass:"button button-right",attrs:{type:"button",disabled:t.nextDisabled(),value:"Next"},on:{click:function(e){t.next()}}})])])])},staticRenderFns:[]}},function(t,e,n){var i=n(172);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(5)("3ad50caa",i,!0)},function(t,e,n){var i=n(173);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(5)("76c895f6",i,!0)},function(t,e,n){var i=n(174);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(5)("5f047ed3",i,!0)},function(t,e,n){var i=n(175);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(5)("637c9324",i,!0)},function(t,e,n){var i=n(176);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(5)("7b07cb7e",i,!0)},function(t,e,n){var i=n(177);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(5)("9341fee0",i,!0)},function(t,e){t.exports=function(t,e){for(var n=[],i={},r=0;r<e.length;r++){var a=e[r],s=a[0],o=a[1],c=a[2],u=a[3],l={id:t+":"+r,css:o,media:c,sourceMap:u};i[s]?i[s].parts.push(l):n.push(i[s]={id:s,parts:[l]})}return n}},,function(t,e,n){t.exports=n(134)}],[216]);