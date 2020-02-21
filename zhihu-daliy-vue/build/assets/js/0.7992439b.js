/*! Copyright by frank */
webpackJsonp([0],Array(66).concat([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(98),o=n(79);for(var r in o)["default","default"].indexOf(r)<0&&function(t){n.d(e,t,function(){return o[t]})}(r);var a=n(2),l=Object(a.a)(o.default,i.a,i.b,!1,null,null,null);e.default=l.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(110),o=n(87);for(var r in o)["default","default"].indexOf(r)<0&&function(t){n.d(e,t,function(){return o[t]})}(r);n(112);var a=n(2),l=Object(a.a)(o.default,i.a,i.b,!1,null,null,null);e.default=l.exports},,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(71),o=n.n(i);for(var r in i)["default","default"].indexOf(r)<0&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["title"]}},function(t,e,n){var i=n(78);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(65).default)("4f78d425",i,!0,{})},function(t,e,n){"use strict";var i;Object.defineProperty(e,"__esModule",{value:!0}),e.formatDate=function(t){var e=t.getFullYear(),n=t.getMonth()+1,i=t.getDate();n<10&&(n="0"+n);i<10&&(i="0"+i);return e+n+i},e.formatDate2=function(t){var e=t.getFullYear(),n=t.getMonth()+1,i=t.getDate(),o=t.getHours(),r=t.getMinutes();n<10&&(n="0"+n);i<10&&(i="0"+i);o<10&&(o="0"+o);r<10&&(r="0"+r);return e+"-"+n+"-"+i+" "+o+":"+r},e.parseDate=function(t){if(!/^(\d){8}$/.test(t))throw"invalid date";var e=t.substr(0,4),n=t.substr(4,2)-1,i=t.substr(6,2);return new Date(e,n,i)},e.addDays=function(t,e){var n=t.getTime(),i=new Date(n+24*e*60*60*1e3),o=new Date;return o.setTime(i.getTime()),o},e.listenScrollBottom=function(t){i=function(){var e=document.documentElement.scrollTop||document.body.scrollTop;0!==e&&e+document.documentElement.clientHeight===document.documentElement.scrollHeight&&t()},window.addEventListener("scroll",i)},e.removeListenScrollBottom=function(){window.removeEventListener("scroll",i)},e.addTouchEvent=function(t,e){t.addEventListener("touchstart",function(t){o=a=t.touches[0].pageX,r=l=t.touches[0].pageY}),t.addEventListener("touchmove",function(t){var n=t.touches[0].pageX,i=t.touches[0].pageY,o=n-a,r=i-l;if(a=n,l=i,!(o<=2&&r<=2)){var s=o<0?"left":"right",u=r<0?"bottom":"top";e({type:"touchmove",directionX:s,directionY:u,changedX:o,changedY:r})}}),t.addEventListener("touchend",function(t){var n=t.changedTouches[0].pageX,i=t.changedTouches[0].pageY,a=n-o,l=i-r;if(!(Math.abs(a)<5&&Math.abs(l)<5)){var s=a<0?"left":"right",u=l<0?"bottom":"top";e({type:"touchend",directionX:s,directionY:u,changedX:a,changedY:l})}})};var o=void 0,r=void 0,a=0,l=0},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(75),o=n(70);for(var r in o)["default","default"].indexOf(r)<0&&function(t){n.d(e,t,function(){return o[t]})}(r);n(77);var a=n(2),l=Object(a.a)(o.default,i.a,i.b,!1,null,null,null);e.default=l.exports},function(t,e,n){"use strict";var i=n(76);n.d(e,"a",function(){return i.a}),n.d(e,"b",function(){return i.b})},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[t._t("left"),t._v(" "),n("h1",{directives:[{name:"show",rawName:"v-show",value:null!=t.title,expression:"title!=null"}],staticClass:"navbar-title"},[t._v(t._s(t.title))]),t._v(" "),t._t("right")],2)},o=[]},function(t,e,n){"use strict";var i=n(72);n.n(i).a},function(t,e,n){(t.exports=n(64)(void 0)).push([t.i,".navbar{position:fixed;top:0;left:0;width:100%;align-items:center;height:50px;line-height:50px;background-color:#00a2ea;color:#fff;z-index:1}.navbar-title{font-size:17px;font-weight:400;text-align:center}.navbar-left{float:left;display:inline-block;width:50px;text-align:center;cursor:pointer}.navbar-left:hover{background-color:#0589c3}.navbar-right{float:right}.navbar-right span{margin-right:22px}.navbar-right-detail{float:right;flex:3;text-align:right}",""])},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(80),o=n.n(i);for(var r in i)["default","default"].indexOf(r)<0&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=l(n(74)),o=l(n(100)),r=l(n(105)),a=n(73);function l(t){return t&&t.__esModule?t:{default:t}}e.default={created:function(){var t=this;this.newsList.length>0||this.$store.dispatch({type:"getHomeLatest"}).then(function(){t.$store.dispatch({type:"getBeforeNews"})}).catch(function(t){console.log("errrrrr",t)})},mounted:function(){var t=this;document.documentElement.scrollTop=this.scrollTop,(0,a.listenScrollBottom)(function(){console.log("to bttom"),t.$store.dispatch({type:"getBeforeNews"})})},destroyed:function(){(0,a.removeListenScrollBottom)()},methods:{},components:{TopHeader:i.default,Slider:o.default,NewsList:r.default},computed:{scrollTop:function(){return this.$store.state.home.scrollTop},newsList:function(){return this.$store.state.home.storyList},sliderList:function(){return this.$store.state.home.topStoryList}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(82),o=n.n(i);for(var r in i)["default","default"].indexOf(r)<0&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(73);e.default={props:["list","defaultActive"],data:function(){return{active:this.defaultActive}},mounted:function(){var t=this;(0,i.addTouchEvent)(document.querySelector(".slider-box"),function(e){if("touchend"===e.type)if("left"===e.directionX){if(t.active===t.list.length-1)return;t.active=t.active+1}else if("right"===e.directionX){if(0===t.active)return;t.active=t.active-1}})},computed:{leftPostion:function(){return-100*this.active+"%"}},methods:{jumpTo:function(t){this.active=t}}}},function(t,e,n){var i=n(104);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(65).default)("7b2810d8",i,!0,{})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(85),o=n.n(i);for(var r in i)["default","default"].indexOf(r)<0&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["list"]}},function(t,e,n){var i=n(109);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(65).default)("72cfb5d4",i,!0,{})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(88),o=n.n(i);for(var r in i)["default","default"].indexOf(r)<0&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o=function(t){return t&&t.__esModule?t:{default:t}}(n(74)),r=n(5);e.default={computed:i({storyId:function(){return this.$route.params.id}},(0,r.mapState)({body:function(t){return t.newsDetail.body},title:function(t){return t.newsDetail.title},image:function(t){return t.newsDetail.image},imageSource:function(t){return t.newsDetail.imageSource},extra:function(t){return t.newsDetail.extra}})),beforeRouteEnter:function(t,e,n){var i=document.documentElement.scrollTop;n(function(t){"/"===e.path&&t.$store.commit("setNewsListScrollTop",i)})},beforeRouteLeave:function(t,e,n){document.documentElement.scrollTop,t.path;n(function(t){})},methods:{goBack:function(){this.$store.commit("clearNewsDetail"),this.$router.back()}},created:function(){var t=this.$route.params.id,e=this.$store.state.newsDetail,n=e.body,i=e.scrollTop;n?document.documentElement.scrollTop=i:(document.documentElement.scrollTop=0,this.$store.dispatch({type:"getNewsDetail",id:t}),this.$store.dispatch({type:"getNewsExtra",id:t}))},mounted:function(){},destroyed:function(){},components:{TopHeader:o.default}}},function(t,e,n){var i=n(113);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(65).default)("e9bb2db0",i,!0,{})},,,,,,,,,function(t,e,n){"use strict";var i=n(99);n.d(e,"a",function(){return i.a}),n.d(e,"b",function(){return i.b})},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("TopHeader",{attrs:{title:"知乎日报(建议小屏查看)"}},[e("div",{staticClass:"navbar-right",attrs:{slot:"right"},slot:"right"})]),this._v(" "),e("div",{staticClass:"main"},[e("Slider",{attrs:{list:this.sliderList,defaultActive:0}}),this._v(" "),e("NewsList",{attrs:{list:this.newsList}})],1)],1)},o=[]},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(101),o=n(81);for(var r in o)["default","default"].indexOf(r)<0&&function(t){n.d(e,t,function(){return o[t]})}(r);n(103);var a=n(2),l=Object(a.a)(o.default,i.a,i.b,!1,null,null,null);e.default=l.exports},function(t,e,n){"use strict";var i=n(102);n.d(e,"a",function(){return i.a}),n.d(e,"b",function(){return i.b})},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"slider-box"},[n("div",{staticClass:"slider-inner",style:{width:t.list.length+"00%",left:t.leftPostion}},t._l(t.list,function(e){return n("router-link",{key:e.id,staticClass:"slider-link",style:{backgroundImage:"url("+e.image+")"},attrs:{to:"/details/"+e.id}},[n("div",{staticClass:"detail-overlay"}),t._v(" "),n("h3",[t._v(t._s(e.title))])])})),t._v(" "),n("ul",{staticClass:"slider-nums"},t._l(t.list.length,function(e){return n("li",{class:{on:t.active===e-1},on:{click:function(n){t.jumpTo(e-1)}}})}))])},o=[]},function(t,e,n){"use strict";var i=n(83);n.n(i).a},function(t,e,n){(t.exports=n(64)(void 0)).push([t.i,".slider-box{position:relative;width:100%;height:300px;overflow:hidden;margin-top:50px}.slider-box .slider-inner{position:absolute;height:100%}.slider-box img{height:300px;width:100%}.slider-inner .slider-link{display:flex;justify-content:center;position:relative;float:left;width:20%;height:100%;background-size:100% 100%}.slider-link div{width:100%;height:100%}.slider-link h3{position:absolute;bottom:26px;color:#fff;padding:0 20px}.slider-nums{position:absolute;bottom:10px;right:50%;transform:translate(50%)}.slider-nums li{width:8px;height:8px;border-radius:50%;background-color:#aaa;float:left;list-style:none;margin:0 4px}.slider-nums li.on{background-color:#fff}",""])},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(106),o=n(84);for(var r in o)["default","default"].indexOf(r)<0&&function(t){n.d(e,t,function(){return o[t]})}(r);n(108);var a=n(2),l=Object(a.a)(o.default,i.a,i.b,!1,null,null,null);e.default=l.exports},function(t,e,n){"use strict";var i=n(107);n.d(e,"a",function(){return i.a}),n.d(e,"b",function(){return i.b})},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"list-box"},t._l(t.list,function(e,i){return n("div",[n("h3",{staticClass:"list-title"},[t._v("\n\t\t\t"+t._s(0===i?"":e.date)+"\n\t\t")]),t._v(" "),n("ul",t._l(e.stories,function(e){return n("li",[n("router-link",{attrs:{to:"/details/"+e.id}},[n("span",[t._v(t._s(e.title))]),t._v(" "),e.images?n("img",{attrs:{src:e.images[0]}}):t._e()])],1)}))])}))},o=[]},function(t,e,n){"use strict";var i=n(86);n.n(i).a},function(t,e,n){(t.exports=n(64)(void 0)).push([t.i,"a{text-decoration:none;color:#000}.list-box{background-color:#eee}.list-box .list-title{display:flex;height:40px;line-height:40px;padding-left:20px;align-items:center;font-weight:400;color:#333;font-size:16px}.list-box .list-title img{width:24px;height:24px;vertical-align:middle;border-radius:50%;margin-left:10px}.list-box ul{display:flex;flex-direction:column}.list-box li{display:flex;padding:10px;background-color:#fff;margin:8px}.list-box li a{display:flex;flex:1}.list-box span{flex:1;padding-right:10px}.list-box ul img{width:80px;height:80px}",""])},function(t,e,n){"use strict";var i=n(111);n.d(e,"a",function(){return i.a}),n.d(e,"b",function(){return i.b})},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("TopHeader",{staticClass:"detail-header header"},[n("span",{staticClass:"navbar-left",attrs:{slot:"left"},on:{click:t.goBack},slot:"left"},[n("i",{staticClass:"fa fa-chevron-left"})]),t._v(" "),n("div",{staticClass:"navbar-right-detail",attrs:{slot:"right"},slot:"right"},[n("router-link",{attrs:{to:"/details/"+t.storyId+"/comments"}},[n("i",{staticClass:"fa fa-comment-o"}),t._v(" "),n("span",{staticClass:"ml-6"},[t._v(t._s(t.extra.commentCount))])]),t._v(" "),n("div",{staticClass:"func-btn"},[n("i",{staticClass:"fa fa-thumbs-o-up"}),t._v(" "),n("span",[t._v(t._s(t.extra.popularityCount))])])],1)]),t._v(" "),n("div",{staticClass:"detial-box"},[n("div",{staticClass:"detail-img-box"},[n("img",{attrs:{src:t.image,alt:"picture"}}),t._v(" "),n("div",{staticClass:"detail-overlay"}),t._v(" "),n("h2",[t._v(t._s(t.title))]),t._v(" "),n("span",[t._v(t._s(t.imageSource))])]),t._v(" "),n("div",{staticClass:"detail-content-box",domProps:{innerHTML:t._s(t.body)}})])],1)},o=[]},function(t,e,n){"use strict";var i=n(89);n.n(i).a},function(t,e,n){(t.exports=n(64)(void 0)).push([t.i,'.detail-header.header .func-btn,.detail-header.header a{float:left;display:inline-block;min-width:50px;padding:0 16px;text-align:center;height:100%;cursor:pointer;color:#fff}.detail-header.header .func-btn:hover,.detail-header.header a:hover{background-color:#0589c3}.detail-header.header .func-btn .fa,.detail-header.header a .fa{color:#fff}.detail-header.header .func-btn .fa-comment-o,.detail-header.header .func-btn .fa-thumbs-o-up,.detail-header.header a .fa-comment-o,.detail-header.header a .fa-thumbs-o-up{font-size:19px;font-weight:700}.detail-header.header .func-btn span,.detail-header.header a span{font-size:12px;margin-top:-2px;display:inline-block;vertical-align:top;margin-left:4px}.detail-box{margin-top:50px}.detail-img-box{position:relative;height:370px;width:100%}.detail-img-box:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.05);border-radius:inherit;pointer-events:none}.detail-img-box h2{position:absolute;color:#fff;bottom:50px;padding:0 20px;font-size:22px;font-weight:500}.detail-img-box span{position:absolute;right:20px;bottom:14px;color:#eee;font-size:12px}.detail-img-box img{width:100%;height:100%}.detail-img-box .detail-overlay{background-image:linear-gradient(0,#416d7a,rgba(65,109,122,.9),rgba(65,109,122,0));width:100%;height:50%;position:absolute;left:0;bottom:0}.detail-content-box{background-color:#fff;padding:18px 18px 30px}.detail-content-box .answer .meta{padding:20px 0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.detail-content-box .answer .meta span{vertical-align:middle}.detail-content-box .avatar{height:28px;width:28px;margin-right:6px;border-radius:50%;display:inline-block}.detail-content-box .content blockquote,.detail-content-box .content hr,.detail-content-box .content p{margin-bottom:20px}.detail-content-box blockquote{border-left:2px solid #63bbe2;padding-left:8px}.detail-content-box a{color:#01a3ea}.detail-content-box .heading{color:#999;margin-bottom:6px}.detail-content-box .heading-content{color:#333}.detail-content-box .view-more{width:100%;height:44px;border-radius:22px;background:#03a9f4;font-size:14px;text-align:center;line-height:44px;display:block;font-weight:600;color:#fff;margin-bottom:20px}.detail-content-box .view-more a{color:#fff}.detail-content-box .question-title{font-size:1.2em}.detail-content-box .content-image{width:100%}.navbar-icon .ml-6{margin-left:6px}',""])}]));