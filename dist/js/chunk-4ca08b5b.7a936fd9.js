(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ca08b5b"],{"225e":function(t,e,a){t.exports=a.p+"img/icon_apply_process_y.2bbb2f46.png"},3544:function(t,e,a){},"3a20":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"default-page detail-page page"},[t.isShowHeader?a("header",[a("van-nav-bar",{attrs:{title:"Person loan offers",fixed:"","left-arrow":"",placeholder:""},on:{"click-left":t.onClickLeft}})],1):t._e(),a("section",{staticClass:"page-body"},[a("div",{staticClass:"detail-card-box"},[a("div",{staticClass:"product-preview-item flex"},[a("div",{staticClass:"item-hd"},[a("img",{attrs:{src:"/imgs/product/"+t.detail.id+".webp"}})]),a("div",{staticClass:"item-bd flex-1"},[a("p",{staticClass:"title"},[t._v(t._s(t.detail.product_name))]),a("p",{staticClass:"desc"},[t._v(t._s(t.detail.product_title))])])]),a("div",{staticClass:"product-detail-card"},[a("div",{staticClass:"flex bottom-line"},[a("div",{staticClass:"card-item flex-1"},[a("van-icon",{attrs:{name:"balance-o"}}),a("p",{staticClass:"title"},[t._v(t._s(t.detail.amount_low+" - "+t.detail.amount_high))]),a("p",{staticClass:"desc"},[t._v("Amount")])],1),a("div",{staticClass:"card-item flex-1"},[a("van-icon",{attrs:{name:"underway-o"}}),a("p",{staticClass:"title"},[t._v(t._s(t.detail.divide_period_min+"-"+t.detail.divide_period_max))]),a("p",{staticClass:"desc"},[t._v("Tenure(Months)")])],1)]),a("div",{staticClass:"flex"},[a("div",{staticClass:"card-item flex-1"},[a("van-icon",{attrs:{name:"discount"}}),a("p",{staticClass:"title"},[t._v(t._s(t.detail.daily_rate))]),a("p",{staticClass:"desc"},[t._v("Interest Rate(Per Daily)")])],1),a("div",{staticClass:"card-item flex-1"},[a("van-icon",{attrs:{name:"bill-o"}}),a("p",{staticClass:"title"},[t._v(t._s(t.detail.pro_fee||0))]),a("p",{staticClass:"desc"},[t._v("Processing Fee")])],1)])])]),a("div",{staticClass:"panel"},[t._m(0),a("div",{staticClass:"panel-bd term-card"},[a("div",{staticClass:"term-item flex"},[t._m(1),a("div",{staticClass:"flex-1"},[a("p",[t._v(t._s(t.detail.apply_condition))])])]),a("div",{staticClass:"term-item flex"},[t._m(2),a("div",{staticClass:"flex-1"},[a("p",[t._v(t._s(t.detail.apply_doc))])])])])]),t._m(3)]),a("footer",{staticClass:"page-footer"},[a("van-button",{staticClass:"vip-btn",attrs:{type:"primary",block:""},on:{click:t.toGooglePay}},[t._v("Apply Nor")])],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"panel-hd"},[a("div",{staticClass:"heading-item"},[a("p",{staticClass:"title"},[t._v("Load Terms")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("label",{staticClass:"term-label"},[a("span",[t._v("Eligibility Criteria:")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("label",{staticClass:"term-label"},[a("span",[t._v("Apply Requirements:")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"panel"},[i("div",{staticClass:"panel-hd"},[i("div",{staticClass:"heading-item"},[i("p",{staticClass:"title"},[t._v("How to Apply")])])]),i("div",{staticClass:"panel-bd apply-process-card"},[i("div",{staticClass:"apply-process-item"},[i("img",{attrs:{src:a("225e")}})])])])}],l=(a("4de4"),a("b0ea")),c=a("273d"),d={name:"detail",data:function(){return{detail:{},id:this.$route.params.id}},created:function(){this.id?Object(c["g"])(this.id):this.id=Object(c["c"])(),this.getProductDetailById()},computed:{isShowHeader:function(){var t=this.$route,e=t.meta;return e.showHeader}},methods:{getProductDetailById:function(){var t=this.id,e=l["a"].data.filter((function(e){return t===e.id}));this.detail=e[0]},onClickLeft:function(){this.$router.go(-1)},toGooglePay:function(){var t=this.detail.jump_url;try{var e=(new Date).getTime();jsApi.requireAsync("openbrowser",e,JSON.stringify({reqId:e,openUrl:t}))}catch(a){location.href=t}}}},n=d,o=(a("decd"),a("2877")),r=Object(o["a"])(n,i,s,!1,null,"1b86f742",null);e["default"]=r.exports},b0ea:function(t,e,a){"use strict";e["a"]={data:[{id:1,pass_number:1100,apply_condition:"1. Indian Resident. 2. Above the age of 21 years.",apply_doc:"Source of a monthly income.",success_rate:100,jump_url:"https://play.google.com/store/apps/details?id=com.whizdm.moneyview.loans",divide_period_max:60,divide_period_min:3,divide_period:[""],amount_high:"500000rs",amount_low:"10000rs",loan_release_time:"3600",product_picture_url_qiniu:"",product_name:"Money View",product_title:"Instant Personal Loan App",daily_rate:"0.09%",turn:null,pro_fee:"4%",status:2,can_see:0,is_recommend:2,update_at:"1970-01-01 08:00:00"},{id:2,pass_number:1e3,apply_condition:" 1. Indian Resident. 2. User age limit: 22-55 years old.",apply_doc:"Source of a monthly income.",success_rate:100,jump_url:"https://play.google.com/store/apps/details?id=com.instamoney.cashnow",divide_period_max:12,divide_period_min:3,divide_period:[""],amount_high:"20000rs",amount_low:"2000rs",loan_release_time:"3600",product_picture_url_qiniu:"",product_name:"Cash Now",product_title:"Cash Now is a mobile financial platform",daily_rate:"0.09%",turn:null,pro_fee:"0",status:2,can_see:0,is_recommend:2,update_at:"1970-01-01 08:00:00"}],meta:{status_code:200,code:200,message:"success",pagination:{total:4,count:4,per_page:20,current_page:1,total_pages:1,links:[]}}}},decd:function(t,e,a){"use strict";var i=a("3544"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-4ca08b5b.7a936fd9.js.map