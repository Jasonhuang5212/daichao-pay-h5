(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bdf8359"],{"225e":function(t,e,a){t.exports=a.p+"img/icon_apply_process_y.2bbb2f46.png"},"3a20":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"default-page detail-page page"},[t.isShowHeader?a("header",[a("van-nav-bar",{attrs:{title:"Person loan offers",fixed:"","left-arrow":"",placeholder:""},on:{"click-left":t.onClickLeft}})],1):t._e(),a("van-skeleton",{attrs:{title:"",avatar:"",loading:t.skeletonLoading,row:3}}),a("section",{directives:[{name:"show",rawName:"v-show",value:!t.skeletonLoading,expression:"!skeletonLoading"}],staticClass:"page-body"},[a("div",{staticClass:"detail-card-box"},[a("div",{staticClass:"product-preview-item flex"},[a("div",{staticClass:"item-hd"},[a("img",{attrs:{src:t.detail.product_picture_url_qiniu}})]),a("div",{staticClass:"item-bd flex-1"},[a("p",{staticClass:"title"},[t._v(t._s(t.detail.product_name))]),a("p",{staticClass:"desc"},[t._v(t._s(t.detail.product_title))])])]),a("div",{staticClass:"product-detail-card"},[a("div",{staticClass:"flex bottom-line"},[a("div",{staticClass:"card-item flex-1"},[a("van-icon",{attrs:{name:"balance-o"}}),a("p",{staticClass:"title"},[t._v(t._s(t.detail.amount_low+" - "+t.detail.amount_high))]),a("p",{staticClass:"desc"},[t._v("Amount")])],1),a("div",{staticClass:"card-item flex-1"},[a("van-icon",{attrs:{name:"underway-o"}}),a("p",{staticClass:"title"},[t._v(t._s(t.detail.divide_period_min+"-"+t.detail.divide_period_max))]),a("p",{staticClass:"desc"},[t._v("Tenure(Months)")])],1)]),a("div",{staticClass:"flex"},[a("div",{staticClass:"card-item flex-1"},[a("van-icon",{attrs:{name:"discount"}}),a("p",{staticClass:"title"},[t._v(t._s(t.detail.daily_rate))]),a("p",{staticClass:"desc"},[t._v("Interest Rate(Per Daily)")])],1),a("div",{staticClass:"card-item flex-1"},[a("van-icon",{attrs:{name:"bill-o"}}),a("p",{staticClass:"title"},[t._v(t._s(t.detail.pro_fee||0))]),a("p",{staticClass:"desc"},[t._v("Processing Fee")])],1)])])]),a("div",{staticClass:"panel"},[t._m(0),a("div",{staticClass:"panel-bd term-card"},[a("div",{staticClass:"term-item flex"},[t._m(1),a("div",{staticClass:"flex-1"},[a("p",[t._v(t._s(t.detail.apply_condition))])])]),a("div",{staticClass:"term-item flex"},[t._m(2),a("div",{staticClass:"flex-1"},[a("p",[t._v(t._s(t.detail.apply_doc))])])])])]),t._m(3)]),a("footer",{staticClass:"page-footer"},[a("van-button",{staticClass:"vip-btn",attrs:{type:"primary",block:""},on:{click:t.toGooglePay}},[t._v("Apply Nor")])],1)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-hd"},[a("div",{staticClass:"heading-item"},[a("p",{staticClass:"title"},[t._v("Load Terms")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("label",{staticClass:"term-label"},[a("span",[t._v("Eligibility Criteria:")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("label",{staticClass:"term-label"},[a("span",[t._v("Apply Requirements:")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"panel"},[s("div",{staticClass:"panel-hd"},[s("div",{staticClass:"heading-item"},[s("p",{staticClass:"title"},[t._v("How to Apply")])])]),s("div",{staticClass:"panel-bd apply-process-card"},[s("div",{staticClass:"apply-process-item"},[s("img",{attrs:{src:a("225e")}})])])])}],l=a("c4c8"),c=a("273d"),n={name:"detail",data:function(){return{skeletonLoading:!0,detail:{},id:this.$route.params.id}},mounted:function(){this.id?Object(c["g"])(this.id):this.id=Object(c["c"])(),this.getProductDetailById()},computed:{isShowHeader:function(){var t=this.$route,e=t.meta;return e.showHeader}},methods:{getProductDetailById:function(){var t=this;Object(l["a"])(this.id).then((function(e){t.detail=e.data,t.skeletonLoading=!1}))},onClickLeft:function(){this.$router.go(-1)},toGooglePay:function(){var t=this.detail.jump_url;try{var e=(new Date).getTime();jsApi.requireAsync("openbrowser",e,JSON.stringify({reqId:e,openUrl:t}))}catch(a){location.href=t}}}},r=n,d=(a("6ecf"),a("2877")),o=Object(d["a"])(r,s,i,!1,null,"903dcdea",null);e["default"]=o.exports},"6ecf":function(t,e,a){"use strict";var s=a("940a"),i=a.n(s);i.a},"940a":function(t,e,a){},c4c8:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return l}));var s=a("b775");function i(t){return Object(s["a"])({url:"/products",method:"get",params:{page:t}})}function l(t){return Object(s["a"])({url:"/product/"+t,method:"get"})}}}]);
//# sourceMappingURL=chunk-1bdf8359.842e8dec.js.map