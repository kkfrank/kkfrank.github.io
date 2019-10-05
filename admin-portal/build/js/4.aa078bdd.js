/*! Copyright by luoziwo.cn */
webpackJsonp([4],{769:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,u,s,c,f=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),d=n(3),p=o(d),A=n(177),m=n(8),b=o(m),g=n(779),h=o(g),y=n(774),C=o(y),x=n(773),E=o(x),k=n(807),v=n(772);n(808);var B=(i=(0,A.connect)(function(e){return{order:e.orderDetail,loadingError:e.loadingError}},function(e){return{setErrorMsgFunc:function(t){e((0,v.setErrorMsg)(t))},clearErrorMsgFunc:function(){e((0,v.clearErrorMsg)())},getDetailFunc:function(t){e((0,k.getDetail)(t))},clearDetailFunc:function(){e((0,k.clearDetail)())}}}))((c=s=function(e){function t(e){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return l(t,e),f(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.getDetailFunc({orderNo:e})}},{key:"componentWillUnmount",value:function(){this.props.clearDetailFunc()}},{key:"render",value:function(){var e=this,t=this.props.order.order,n=this.props.loadingError,o=n.isLoading,r=n.errorMsg;return p.default.createElement("div",null,p.default.createElement("h1",null,"订单详情"),r&&p.default.createElement(E.default,{onOk:function(){return e.props.clearErrorMsgFunc()},onCancel:function(){return e.props.clearErrorMsgFunc()},title:"对话框",visible:!!r},p.default.createElement("p",null,r)),o&&p.default.createElement(C.default,null),p.default.createElement("div",{className:"g12 p0 pb20"},p.default.createElement("label",{className:"left"},"订单号:"),p.default.createElement("div",{className:"g8 p0"},p.default.createElement("input",{defaultValue:t.orderNo,key:t.orderNo,readOnly:!0}))),p.default.createElement("div",{className:"g12 p0 pb20"},p.default.createElement("label",{className:"left"},"创建时间:"),p.default.createElement("div",{className:"g8 p0"},p.default.createElement("input",{defaultValue:t.createTime,readOnly:!0,key:t.createTime}))),p.default.createElement("div",{className:"g12 p0 pb20"},p.default.createElement("label",{className:"left"},"收件人:"),p.default.createElement("div",{className:"g8 p0"},p.default.createElement("input",{defaultValue:t.receiverName,readOnly:!0,key:t.receiverName}))),p.default.createElement("div",{className:"g12 p0 pb20"},p.default.createElement("label",{className:"left"},"订单状态:"),p.default.createElement("div",{className:"g8 p0"},p.default.createElement("input",{defaultValue:t.statusDesc,readOnly:!0,key:t.statusDesc}))),p.default.createElement("div",{className:"g12 p0 pb20"},p.default.createElement("label",{className:"left"},"支付方式:"),p.default.createElement("div",{className:"g8 p0"},p.default.createElement("input",{defaultValue:t.paymentTypeDesc,readOnly:!0,key:t.paymentTypeDesc}))),p.default.createElement("div",{className:"g12 p0 pb20"},p.default.createElement("label",{className:"left"},"支付金额:"),p.default.createElement("div",{className:"g8 p0"},p.default.createElement("input",{defaultValue:"￥"+t.payment,readOnly:!0,key:t.payment}))),p.default.createElement(h.default,{tableHeaders:["商品图片","商品信息","单价","数量","合计"]},t.orderItemVoList&&t.orderItemVoList.map(function(e){return p.default.createElement("tr",{key:e.productId},p.default.createElement("td",null,p.default.createElement("img",{src:t.imageHost+e.productImage})),p.default.createElement("td",null,e.productName),p.default.createElement("td",null,e.currentUnitPrice),p.default.createElement("td",null,e.quantity),p.default.createElement("td",null,e.totalPrice))})))}}]),t}(d.Component),s.propTypes={setErrorMsgFunc:b.default.func,clearErrorMsgFunc:b.default.func,getDetailFunc:b.default.func,clearDetailFunc:b.default.func,order:b.default.object,loadingError:b.default.object},u=c))||u;t.default=B},772:function(e,t,n){"use strict";function o(){return{type:i.SHOW_LOADING}}function r(){return{type:i.HIDE_LOADING}}function a(e){return{type:i.SET_ERROR_MESSAGE,message:e}}function l(){return{type:i.CLAER_ERROR_MESSAGE}}Object.defineProperty(t,"__esModule",{value:!0}),t.showLoading=o,t.hideLoading=r,t.setErrorMsg=a,t.clearErrorMsg=l;var i=n(294)},773:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(3),u=function(e){return e&&e.__esModule?e:{default:e}}(i);n(777);var s=function(e){function t(e){o(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={confirmLoading:!1},n.onOk=n.onOk.bind(n),n.onCancel=n.onCancel.bind(n),n.handleKeyDown=n.handleKeyDown.bind(n),n}return a(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this;this.modalContentRef.focus(),this.maskRef.onclick=function(){e.onCancel()}}},{key:"handleKeyDown",value:function(e){console.log("keydown"),27===e.keyCode&&this.onCancel()}},{key:"onOk",value:function(){if(!this.props.confirmLoading){var e=this.props.onOk;"function"==typeof e&&e()}}},{key:"onCancel",value:function(){var e=this.props.onCancel;"function"==typeof e&&e()}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,o=t.children,r=this.props,a=r.visible,l=r.confirmLoading;return n=n||"提示",u.default.createElement("div",{className:"modal-box "+(a?"":"hide")},u.default.createElement("div",{className:"modal-mask",ref:function(t){return e.maskRef=t}}),u.default.createElement("div",{className:"modal-content",ref:function(t){return e.modalContentRef=t},tabIndex:"0",onKeyDown:this.handleKeyDown},u.default.createElement("div",{className:"modal-header"},n,u.default.createElement("i",{onClick:this.onCancel,className:"right"},"x")),u.default.createElement("div",{className:"modal-body"},o),u.default.createElement("div",{className:"modal-footer"},u.default.createElement("button",{onClick:this.onCancel,className:"btn default mr10"},"取消"),u.default.createElement("button",{onClick:this.onOk,className:"btn "+(l?"disabled":"")},"确定"))))}}]),t}(i.Component);t.default=s},774:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=n(3),u=function(e){return e&&e.__esModule?e:{default:e}}(i);n(775);var s=function(e){function t(e){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),l(t,[{key:"render",value:function(){return u.default.createElement("div",{className:"loading-container "+(this.props.isFull?"is-full":"")},u.default.createElement("div",{className:"loading-mask"}),u.default.createElement("div",{className:"loading-box"},u.default.createElement("span",null),u.default.createElement("span",null),u.default.createElement("span",null),u.default.createElement("span",null)))}}]),t}(i.Component);t.default=s},775:function(e,t,n){var o=n(776);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;n(762)(o,r);o.locals&&(e.exports=o.locals)},776:function(e,t,n){t=e.exports=n(761)(!0),t.push([e.i,".loading-container{position:fixed;left:260px;top:60px;right:0;bottom:0;z-index:9999}.loading-container.is-full,.loading-mask{left:0;top:0;right:0;bottom:0}.loading-mask{position:absolute;background-color:hsla(0,0%,100%,.7)}.loading-box{position:absolute;left:50%;top:50%;display:inline-block;width:22px;height:22px;-webkit-animation:autoRotate 1.2s infinite linear;animation:autoRotate 1.2s infinite linear;-webkit-transform-origin:50% 50%;transform-origin:50% 50%}.loading-box span{position:absolute;width:10px;height:10px;border-radius:50%;background-color:#1890ff}.loading-box span:first-child{left:0;top:0}.loading-box span:nth-child(2){left:12px;top:0;opacity:.9}.loading-box span:nth-child(3){left:0;top:12px;opacity:.6}.loading-box span:nth-child(4){left:12px;top:12px;opacity:.3}@-webkit-keyframes autoRotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes autoRotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}","",{version:3,sources:["/Users/wuyirong/self/kkfrank.github.io/admin-portal/src/components/Loading/Loading.scss"],names:[],mappings:"AAAA,mBACE,eACA,WACA,SACA,QACA,SACA,YAAa,CANf,AAYG,yCAJC,OACA,MACA,QACA,QAAS,CAUZ,AATE,cAGD,kBACA,AAIA,mCAAsC,CACvC,aAEC,kBACA,SACA,QACA,qBACA,WACA,YACA,kDAAA,0CACA,iCAAA,wBAAyB,CAR3B,kBAUI,kBACA,WACA,YACA,kBACA,wBAAyB,CAd7B,8BAgBM,OACA,KAAM,CAjBZ,+BAoBM,UACA,MACA,UAAW,CAtBjB,+BAyBM,OACA,SACA,UAAW,CA3BjB,+BA8BM,UACA,SACA,UAAW,CACZ,8BAKH,GACE,+BAAA,sBAAuB,CAEzB,GACE,gCAAA,uBAAyB,CAAA,CATxB,sBAKH,GACE,+BAAA,sBAAuB,CAEzB,GACE,gCAAA,uBAAyB,CAAA,CAAA",file:"Loading.scss",sourcesContent:[".loading-container{\n  position: fixed;\n  left: 260px;\n  top: 60px;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n  &.is-full{\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n  }\n}\n.loading-mask{\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255,255,255,.7);\n}\n.loading-box{\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  display: inline-block;\n  width: 22px;\n  height: 22px;\n  animation: autoRotate 1.2s infinite linear;\n  transform-origin: 50% 50%;\n  span{\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background-color: #1890ff;\n    &:nth-child(1){\n      left: 0;\n      top: 0;\n    }\n    &:nth-child(2){\n      left: 12px;\n      top: 0;\n      opacity: .9;\n    }\n    &:nth-child(3){\n      left: 0;\n      top: 12px;\n      opacity: .6;\n    }\n    &:nth-child(4){\n      left: 12px;\n      top: 12px;\n      opacity: .3;\n    }\n  }\n}\n\n@keyframes autoRotate{\n  0%{\n    transform: rotate(0deg);\n  }\n  100%{\n    transform: rotate(360deg);\n  }\n}"],sourceRoot:""}])},777:function(e,t,n){var o=n(778);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;n(762)(o,r);o.locals&&(e.exports=o.locals)},778:function(e,t,n){t=e.exports=n(761)(!0),t.push([e.i,".modal-box{position:fixed;z-index:9999}.modal-box .modal-mask{position:fixed;top:0;right:0;bottom:0;left:0;height:100%;background-color:rgba(0,0,0,.45)}.modal-box .modal-content{position:fixed;left:50%;top:50%;min-width:280px;max-width:500px;background-color:#fff;border-radius:4px;-webkit-box-shadow:0 4px 12px rgba(0,0,0,.15);box-shadow:0 4px 12px rgba(0,0,0,.15);margin-top:-100px;-webkit-transform:translate(-50%);transform:translate(-50%);outline:0}.modal-box .modal-header{padding:16px 24px;border-bottom:1px solid #e8e8e8}.modal-box .modal-header i{cursor:pointer;position:absolute;right:0;top:0;padding:10px 18px;font-size:20px}.modal-box .modal-body{padding:24px}.modal-box .modal-footer{padding:10px 16px;text-align:right}","",{version:3,sources:["/Users/wuyirong/self/kkfrank.github.io/admin-portal/src/components/Modal/Index.scss"],names:[],mappings:"AAAA,WACE,eACA,YAAa,CAFf,uBAII,eACA,MACA,QACA,SACA,OACA,YACA,gCAAkC,CAVtC,0BAaI,eACA,SACA,QACA,gBACA,gBACA,sBACA,kBACA,8CAAA,sCACA,kBACA,kCAAA,0BACA,SAAU,CAvBd,yBA0BI,kBACA,+BAAgC,CA3BpC,2BA6BM,eACA,kBACA,QACA,MACA,kBACA,cAAe,CAlCrB,uBAsCI,YAAa,CAtCjB,yBAyCI,kBACA,gBAAiB,CAClB",file:"Index.scss",sourcesContent:[".modal-box{\n  position: fixed;\n  z-index: 9999;\n  .modal-mask{\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    height: 100%;\n    background-color: rgba(0,0,0,0.45);\n  }\n  .modal-content{\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    min-width: 280px;\n    max-width: 500px;\n    background-color: #fff;\n    border-radius: 4px;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n    margin-top: -100px;\n    transform: translate(-50%);\n    outline: 0;\n  }\n  .modal-header{\n    padding: 16px 24px;\n    border-bottom: 1px solid #e8e8e8;\n    i{\n      cursor: pointer;\n      position: absolute;\n      right: 0;\n      top: 0;\n      padding: 10px 18px;\n      font-size: 20px;\n    }\n  }\n  .modal-body{\n    padding: 24px;\n  }\n  .modal-footer{\n    padding: 10px 16px;\n    text-align: right;\n  }\n}"],sourceRoot:""}])},779:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(3),s=function(e){return e&&e.__esModule?e:{default:e}}(u);n(780);var c=function(e){function t(e){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return a(t,e),i(t,[{key:"render",value:function(){var e=this.props.tableHeaders.map(function(e,t){return"object"===(void 0===e?"undefined":l(e))?s.default.createElement("th",{key:t,width:e.width,className:e.class},e.name):"string"==typeof e?s.default.createElement("th",{key:t},e):void 0}),t=this.props.children;return this.props.isLoading||t&&0!==t.length||(t=s.default.createElement("tr",null,s.default.createElement("td",{colSpan:this.props.tableHeaders.length},"没有找到相应的结果"))),s.default.createElement("div",null,s.default.createElement("table",null,s.default.createElement("thead",null,s.default.createElement("tr",null,e)),s.default.createElement("tbody",null,t)))}}]),t}(u.Component);t.default=c},780:function(e,t,n){var o=n(781);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;n(762)(o,r);o.locals&&(e.exports=o.locals)},781:function(e,t,n){t=e.exports=n(761)(!0),t.push([e.i,"table{width:100%;background-color:#fff;font-size:14px;text-align:center}table thead{background-color:#fafafa}table td,table th{padding:8px;border-bottom:1px solid #ebedf0;word-break:break-all}table th{white-space:nowrap}table tr:hover,table tr:nth-child(2n){background:rgba(60,90,100,.04)}","",{version:3,sources:["/Users/wuyirong/self/kkfrank.github.io/admin-portal/src/components/Table/Index.scss"],names:[],mappings:"AAAA,MAEE,WAEA,sBACA,eACA,iBAAkB,CANpB,YAQI,wBAAyB,CAR7B,kBAWI,YAEA,gCACA,oBAAqB,CAdzB,SAiBI,kBAAmB,CAjBvB,sCAoBI,8BAAgC,CACjC",file:"Index.scss",sourcesContent:["table{\n  //table-layout: fixed;\n  width: 100%;\n  //border: 1px solid #e8e8e8;\n  background-color: #fff;\n  font-size: 14px;\n  text-align: center;\n  thead{\n    background-color: #fafafa;\n  }\n  th, td{\n    padding: 8px;\n    //border-color: #e8e8e8;\n    border-bottom: 1px solid #ebedf0;\n    word-break: break-all;\n  }\n  th{\n    white-space: nowrap;\n  }\n  tr:hover, tr:nth-child(even){\n    background: rgba(60,90,100,0.04);\n  }\n}"],sourceRoot:""}])},807:function(e,t,n){"use strict";function o(e){return function(t,n){t((0,u.showLoading)()),l.default.get("/manage/order/detail.do",e).then(function(e){t({type:i.GET_ORDER_DETAIL_SUCCESS,order:e.data}),t((0,u.hideLoading)())}).catch(function(e){t((0,u.setErrorMsg)(e.message))})}}function r(){return function(e,t){e({type:i.CLEAR_ORDER_DETAIL})}}Object.defineProperty(t,"__esModule",{value:!0}),t.getDetail=o,t.clearDetail=r;var a=n(293),l=function(e){return e&&e.__esModule?e:{default:e}}(a),i=n(303),u=n(772)},808:function(e,t,n){var o=n(809);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;n(762)(o,r);o.locals&&(e.exports=o.locals)},809:function(e,t,n){t=e.exports=n(761)(!0),t.push([e.i,"img{width:80px;height:80px}","",{version:3,sources:["/Users/wuyirong/self/kkfrank.github.io/admin-portal/src/pages/Order/Detail.scss"],names:[],mappings:"AAAA,IACE,WACA,WAAY,CACb",file:"Detail.scss",sourcesContent:["img{\n  width: 80px;\n  height: 80px;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=4.aa078bdd.js.map