/*! Copyright by frank */
webpackJsonp([0],[,,,,,,,,,,,,function(e,t,n){"use strict";function r(){return{type:l.SHOW_LOADING}}function o(){return{type:l.HIDE_LOADING}}function a(e){return{type:l.SET_ERROR_MSG,errorMsg:e}}function u(){return{type:l.CLEAR_ERROR_MSG}}Object.defineProperty(t,"__esModule",{value:!0}),t.showLoading=r,t.hideLoading=o,t.setErrorMsg=a,t.clearErrorMsg=u;var l=n(23)},,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.SHOW_LOADING="SHOW_LOADING",t.HIDE_LOADING="HIDE_LOADING",t.SET_ERROR_MSG="SET_ERROR_MSG",t.CLEAR_ERROR_MSG="CLEAR_ERROR_MSG"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.GET_LATEST_NEWS="GET_LATEST_NEWS",t.GET_BEFORE_NEWS="GET_BEFORE_NEWS",t.SAVE_SCROLLTOP="SAVE_SCROLLTOP"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.GET_NEWS_DETAIL="GET_NEWS_DETAIL"},,,function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(l);n(67);var c=function(e){function t(e){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),u(t,[{key:"render",value:function(){return i.default.createElement("div",{className:"loading-container "+(this.props.isFull?"is-full":"")},i.default.createElement("div",{className:"loading-mask"}),i.default.createElement("div",{className:"loading-box"},i.default.createElement("span",null),i.default.createElement("span",null),i.default.createElement("span",null),i.default.createElement("span",null)))}}]),t}(l.Component);t.default=c},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),c=function(e){return e&&e.__esModule?e:{default:e}}(i);n(68);var s=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={confirmLoading:!1},n.onOk=n.onOk.bind(n),n.onCancel=n.onCancel.bind(n),n.handleKeyDown=n.handleKeyDown.bind(n),n}return a(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this;this.modalContentRef.focus(),this.maskRef.onclick=function(){e.onCancel()}}},{key:"handleKeyDown",value:function(e){27===e.keyCode&&this.onCancel()}},{key:"onOk",value:function(){if(!this.props.confirmLoading){var e=this.props.onOk;"function"==typeof e&&e()}}},{key:"onCancel",value:function(){var e=this.props.onCancel;"function"==typeof e&&e()}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,r=t.children,o=this.props,a=o.visible,l=o.confirmLoading;return console.log("hhhhhhh",n,r,void 0===r?"undefined":u(r)),n=n||"提示",c.default.createElement("div",{className:"modal-box "+(a?"":"hide")},c.default.createElement("div",{className:"modal-mask",ref:function(t){return e.maskRef=t}}),c.default.createElement("div",{className:"modal-content",ref:function(t){return e.modalContentRef=t},tabIndex:"0",onKeyDown:this.handleKeyDown},c.default.createElement("div",{className:"modal-header"},n,c.default.createElement("i",{onClick:this.onCancel,className:"right"},"x")),c.default.createElement("div",{className:"modal-body"},r),c.default.createElement("div",{className:"modal-footer"},c.default.createElement("button",{onClick:this.onCancel,className:"btn default mr10"},"取消"),c.default.createElement("button",{onClick:this.onOk,className:"btn "+(l?"disabled":"")},"确定"))))}}]),t}(i.Component);t.default=s},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(31),o=function(e){return e&&e.__esModule?e:{default:e}}(r),a="";a="https://cors-anywhere.herokuapp.com/https://news-at.zhihu.com/api/4",t.default={post:function(e,t,n){return new Promise(function(t,n){(0,o.default)(a+e,{method:"POST"}).then(function(e){return t(e.json())}).catch(function(e){n({message:e})})})},get:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new Promise(function(t,n){(0,o.default)(a+e,{method:"GET"}).then(function(e){return t(e.json())}).catch(function(e){return n({message:e})})})}}},,function(e,t,n){"use strict";function r(e){var t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate();return n<10&&(n="0"+n),r<10&&(r="0"+r),t+n+r}function o(e){if(!/^(\d){8}$/.test(e))throw"invalid date";var t=e.substr(0,4),n=e.substr(4,2)-1,r=e.substr(6,2);return new Date(t,n,r)}function a(e,t){var n=e.getTime(),r=new Date(n+24*t*60*60*1e3),o=new Date;return o.setTime(r.getTime()),o}function u(e){i=function(){var t=document.documentElement.scrollTop||document.body.scrollTop;0!==t&&t+document.documentElement.clientHeight===document.documentElement.scrollHeight&&e()},window.addEventListener("scroll",i)}function l(){window.removeEventListener("scroll",i)}Object.defineProperty(t,"__esModule",{value:!0}),t.formatDate=r,t.parseDate=o,t.addDays=a,t.listenScrollBottom=u,t.removeListenScrollBottom=l;var i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var o=n(0),a=r(o),u=n(18),l=r(u),i=n(10),c=n(54),s=r(c),f=n(59),d=r(f);n(81),l.default.render(a.default.createElement(i.Provider,{store:s.default},a.default.createElement(d.default,null)),document.getElementById("app"))},,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=(r(o),n(11)),u=n(22),l=r(u),i=n(55),c=r(i),s=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.compose,f=(0,a.createStore)(c.default,s((0,a.applyMiddleware)(l.default)));t.default=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(11),a=n(56),u=r(a),l=n(57),i=r(l),c=n(58),s=r(c);t.default=(0,o.combineReducers)({loadingError:u.default,newsList:i.default,newsDetail:s.default})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(23),a={loading:!1,errorMsg:""};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1];switch(t.type){case o.SHOW_LOADING:return r({},e,{loading:!0,errorMsg:""});case o.HIDE_LOADING:return r({},e,{loading:!1});case o.SET_ERROR_MSG:return r({},e,{loading:!1,errorMsg:t.errorMsg});case o.CLEAR_ERROR_MSG:return r({},e,{errorMsg:""});default:return e}}},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){return e.map(function(e){return a({},e,{date:t})})}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=n(24),l={nowDate:null,scrollTop:0,topStoryList:[],storyList:[]};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments[1];switch(t.type){case u.GET_LATEST_NEWS:return a({},e,{nowDate:t.data.date,topStoryList:t.data.top_stories,storyList:[].concat(r(e.storyList),r(o(t.data.stories,t.data.date)))});case u.GET_BEFORE_NEWS:return a({},e,{nowDate:t.data.date,storyList:[].concat(r(e.storyList),r(o(t.data.stories,t.data.date)))});case u.SAVE_SCROLLTOP:return a({},e,{scrollTop:t.value});default:return e}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n(25),a={body:"",title:"",image:"",imageSource:""};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments[1];switch(t.type){case o.GET_NEWS_DETAIL:return r({},e,{body:t.data.body,title:t.data.title,image:t.data.image,imageSource:t.data.image_source});default:return e}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=r(o),u=n(6),l=n(64),i=r(l),c=n(74),s=r(c);t.default=function(){return a.default.createElement(u.HashRouter,null,a.default.createElement("div",null,a.default.createElement(u.Route,{exact:!0,path:"/",component:s.default}),a.default.createElement(u.Route,{path:"/details/:id",component:i.default})))}},,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,i,c,s,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(0),p=r(d),m=n(10),y=(n(6),n(1)),v=r(y),h=n(28),E=r(h),b=n(29),_=r(b),g=n(69),O=r(g),w=n(71),j=n(12);n(73);var S=(l=(0,m.connect)(function(e){return{newsDetail:e.newsDetail,loadingError:e.loadingError}},function(e){return{getNewsDetailFunc:function(t){e((0,w.getNewsDetail)(t))},clearErrorMsgFunc:function(){e((0,j.clearErrorMsg)())}}}))((s=c=function(e){function t(e){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return u(t,e),f(t,[{key:"componentDidMount",value:function(){document.documentElement.scrollTop=0;var e=this.props.match.params.id;this.props.getNewsDetailFunc(e)}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.loadingError,n=t.loading,r=t.errorMsg,o=this.props.newsDetail,a=o.title,u=o.body,l=o.image,i=o.imageSource;return p.default.createElement("div",{className:"detail-box"},r&&p.default.createElement(_.default,{onOk:function(){return e.props.clearErrorMsgFunc()},onCancel:function(){return e.props.clearErrorMsgFunc()},title:"对话框",visible:!!r},p.default.createElement("p",null,r)),n&&p.default.createElement(E.default,null),p.default.createElement("div",{className:"detail-img-box"},p.default.createElement("img",{src:l}),p.default.createElement("div",{className:"detail-overlay"}),p.default.createElement("h2",null,a),p.default.createElement("span",null,i)),p.default.createElement("div",{dangerouslySetInnerHTML:{__html:u},className:"detail-content-box"}),p.default.createElement(O.default,{goBack:this.props.history.goBack}))}}]),t}(d.Component),c.propTypes={newsDetail:v.default.object,loadingError:v.default.object,getNewsDetailFunc:v.default.func,clearErrorMsgFunc:v.default.func},i=s))||i;t.default=S},,,function(e,t){},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,i,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),f=r(s),d=n(6),p=n(1);r(p);n(70);var m=(i=l=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){return f.default.createElement("div",{className:"footer"},f.default.createElement(d.Link,{to:"/"},f.default.createElement("span",null,"<")),f.default.createElement("div",null))}}]),t}(s.Component),l.propTypes={},i);t.default=m},function(e,t){},function(e,t,n){"use strict";function r(e){return function(t,n){t((0,u.showLoading)()),a.default.get("/news/"+e).then(function(e){t({type:l.GET_NEWS_DETAIL,data:e}),t((0,u.hideLoading)())}).catch(function(e){t((0,u.setErrorMsg)(e.message))})}}Object.defineProperty(t,"__esModule",{value:!0}),t.getNewsDetail=r;var o=n(30),a=function(e){return e&&e.__esModule?e:{default:e}}(o),u=n(12),l=n(25)},,function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,i,c,s,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=n(0),p=r(d),m=n(10),y=(n(6),n(1)),v=r(y),h=n(28),E=r(h),b=n(29),_=r(b),g=n(75),O=r(g),w=n(77),j=r(w),S=n(79),T=n(12),M=n(32);n(80);var L=(l=(0,m.connect)(function(e){return{newsList:e.newsList,loadingError:e.loadingError}},function(e){return{getLatestNewsFunc:function(){return e((0,S.getLatestNews)())},getBeforeNewsFunc:function(){e((0,S.getBeforeNews)())},saveScrollTopFunc:function(t){e((0,S.saveScrollTop)(t))},clearErrorMsgFunc:function(){e((0,T.clearErrorMsg)())}}}))((s=c=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.jumpDetail=n.jumpDetail.bind(n),n.addEvent=n.addEvent.bind(n),n}return u(t,e),f(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.newsList,n=t.storyList,r=t.scrollTop;if(console.log("list componentDidMount",n,r),this.addEvent(),n.length>0)return void(document.documentElement.scrollTop=r);this.props.getLatestNewsFunc().then(function(){e.props.getBeforeNewsFunc()})}},{key:"addEvent",value:function(){(0,M.listenScrollBottom)(this.props.getBeforeNewsFunc)}},{key:"jumpDetail",value:function(e){var t=document.documentElement.scrollTop||document.body.scrollTop;this.props.saveScrollTopFunc(t),this.props.history.push("/details/"+e)}},{key:"toTitleDate",value:function(e){var t=(0,M.parseDate)(e);return(t.getFullYear()===(new Date).getFullYear()?"":t.getFullYear()+" 年")+" "+(t.getMonth()+1)+" 月 "+t.getDate()+" 日"}},{key:"componentWillUnmount",value:function(){console.log("list componentWillUnmount"),(0,M.removeListenScrollBottom)()}},{key:"render",value:function(){var e=this,t=this.props.loadingError,n=t.loading,r=t.errorMsg,o=this.props.newsList,a=o.topStoryList,u=o.storyList;return p.default.createElement("div",{className:"news-list-container"},r&&p.default.createElement(_.default,{onOk:function(){return e.props.clearErrorMsgFunc()},onCancel:function(){return e.props.clearErrorMsgFunc()},title:"对话框",visible:!!r},p.default.createElement("p",null,r)),n&&p.default.createElement(E.default,null),p.default.createElement(O.default,null),a&&a.length>0&&p.default.createElement(j.default,{topStoryList:a}),p.default.createElement("div",{className:"news-list-box"},(u||[]).map(function(t,n,r){return p.default.createElement("div",{className:"news-item",key:t.id},0!==n&&t.date!==r[n-1].date&&p.default.createElement("h3",{className:"timeline"},e.toTitleDate(t.date)),p.default.createElement("div",{className:"item-link",onClick:function(){return e.jumpDetail(t.id)}},p.default.createElement("img",{src:t.images[0]}),p.default.createElement("div",{className:"title"},t.title),p.default.createElement("div",{className:"hint"},t.hint)))})))}}]),t}(d.Component),c.propTypes={newsList:v.default.object,loadingError:v.default.object,getLatestNewsFunc:v.default.func,clearErrorMsgFunc:v.default.func},i=s))||i;t.default=L},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,i,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),f=r(s),d=(n(6),n(1));r(d);n(76);var p=(i=l=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),c(t,[{key:"render",value:function(){var e=new Date,t=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];return f.default.createElement("div",{className:"header"},f.default.createElement("div",{className:"time"},f.default.createElement("div",{className:"fw700"},e.getDate()),f.default.createElement("div",null,t[e.getMonth()])),f.default.createElement("h1",null,"知乎日报"))}}]),t}(s.Component),l.propTypes={},i);t.default=p},function(e,t){},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l,i,c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(0),f=r(s),d=n(6),p=n(1),m=r(p);n(78);var y=(i=l=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.jumpTo=n.jumpTo.bind(n),n.state={timerId:null,activeIndex:0},n}return u(t,e),c(t,[{key:"componentDidMount",value:function(){this.addIntervalEvent()}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timerId)}},{key:"addIntervalEvent",value:function(){var e=this,t=this.props.topStoryList.length;this.state.timerId=setInterval(function(){console.log("linbbboooooooo"),e.setState({activeIndex:(e.state.activeIndex+1)%t})},3200)}},{key:"jumpTo",value:function(e){clearInterval(this.state.timerId),this.setState({activeIndex:e}),this.addIntervalEvent()}},{key:"render",value:function(){var e=this,t=this.props.topStoryList,n=this.state.activeIndex,r={transform:"translateX("+-100*n+"%)"};return f.default.createElement("div",{className:"top-stories-box"},f.default.createElement("div",{className:"slider-box"},f.default.createElement("div",{className:"slider-inner",style:r},t.map(function(e){return f.default.createElement(d.Link,{to:"details/"+e.id,key:e.id,className:"slider-item"},f.default.createElement("img",{src:e.image}),f.default.createElement("div",{className:"content"},f.default.createElement("h3",null,e.title),f.default.createElement("span",null,e.hint)))})),f.default.createElement("ul",{className:"slider-nums"},t.map(function(t,r){return f.default.createElement("li",{onClick:function(){e.jumpTo(r)},key:t.id,className:n===r?"on":""})}))))}}]),t}(s.Component),l.propTypes={topStoryList:m.default.array},i);t.default=y},function(e,t){},function(e,t,n){"use strict";function r(){return function(e,t){return e((0,i.showLoading)()),l.default.get("/news/latest").then(function(t){e({type:c.GET_LATEST_NEWS,data:t}),e((0,i.hideLoading)())}).catch(function(t){e((0,i.setErrorMsg)(t.message.toString()))})}}function o(){return function(e,t){if(!t().loadingError.loading){e((0,i.showLoading)());var n=t().newsList.nowDate||(0,s.formatDate)(new Date);l.default.get("/news/before/"+n).then(function(t){e({type:c.GET_BEFORE_NEWS,data:t}),e((0,i.hideLoading)())}).catch(function(t){e((0,i.setErrorMsg)(t.message.toString()))})}}}function a(e){return{type:c.SAVE_SCROLLTOP,value:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getLatestNews=r,t.getBeforeNews=o,t.saveScrollTop=a;var u=n(30),l=function(e){return e&&e.__esModule?e:{default:e}}(u),i=n(12),c=n(24),s=n(32)},function(e,t){},function(e,t){}],[33]);
//# sourceMappingURL=app.3bc0f9d0.js.map