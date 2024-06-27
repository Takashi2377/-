import{_ as f,o as l,c as i,b as e,k as u,v as r,z as L,t as _,a as k,r as b,d as C,F as x,j as $}from"./index-Ce5A-XYZ.js";import{u as w}from"./toastMessage-wMQCNsu2.js";import{m as D,D as V}from"./DelProductModalComponent-MK_JUN1S.js";const T={props:{coupon:Object,isNew:Boolean},data(){return{tempCoupon:{},due_date:""}},emits:["update-coupon"],watch:{coupon(){this.tempCoupon=this.coupon;const s=new Date(this.tempCoupon.due_date*1e3).toISOString().split("T");[this.due_date]=s},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mixins:[D]},N={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},U={class:"modal-dialog",role:"document"},E={class:"modal-content"},I={class:"modal-header"},P={class:"modal-title",id:"exampleModalLabel"},S={key:0},B={key:1},A=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),O={class:"modal-body"},R={class:"mb-3"},j=e("label",{for:"title"},"標題",-1),F={class:"mb-3"},z=e("label",{for:"coupon_code"},"優惠碼",-1),H={class:"mb-3"},q=e("label",{for:"due_date"},"到期日",-1),G={class:"mb-3"},J=e("label",{for:"price"},"折扣百分比",-1),K={class:"mb-3"},Q={class:"form-check"},W=e("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),X={class:"modal-footer"},Y=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," 關閉 ",-1);function Z(s,o,d,c,t,p){return l(),i("div",N,[e("div",U,[e("div",E,[e("div",I,[e("h5",P,[d.isNew?(l(),i("span",S,"新增優惠卷")):(l(),i("span",B,"編輯優惠卷"))]),A]),e("div",O,[e("div",R,[j,u(e("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":o[0]||(o[0]=n=>t.tempCoupon.title=n),placeholder:"請輸入標題"},null,512),[[r,t.tempCoupon.title]])]),e("div",F,[z,u(e("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":o[1]||(o[1]=n=>t.tempCoupon.code=n),placeholder:"請輸入優惠碼"},null,512),[[r,t.tempCoupon.code]])]),e("div",H,[q,u(e("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":o[2]||(o[2]=n=>t.due_date=n)},null,512),[[r,t.due_date]])]),e("div",G,[J,u(e("input",{type:"number",class:"form-control",id:"price",min:"0",oninput:"if(value<1)value=1;if(value>99)value=99","onUpdate:modelValue":o[3]||(o[3]=n=>t.tempCoupon.percent=n),placeholder:"請輸入折扣百分比"},null,512),[[r,t.tempCoupon.percent,void 0,{number:!0}]])]),e("div",K,[e("div",Q,[u(e("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":o[4]||(o[4]=n=>t.tempCoupon.is_enabled=n),id:"is_enabled"},null,512),[[L,t.tempCoupon.is_enabled]]),W])])]),e("div",X,[Y,e("button",{type:"button",class:"btn btn-primary",onClick:o[5]||(o[5]=n=>s.$emit("update-coupon",t.tempCoupon))},_(d.isNew?"新增優惠卷":"更新優惠券"),1)])])])],512)}const ee=f(T,[["render",Z]]);var oe={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"yuetin-hexschool",BASE_URL:"/BeyeFendi/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:m,VITE_PATH:h}=oe,te={components:{CouponModalComponent:ee,DelProductModalComponent:V},props:{config:Object},data(){return{coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isLoading:!1,isNew:!1}},methods:{...k(w,["pushMessage"]),openCouponModal(s,o){this.isNew=s,this.isNew?this.tempCoupon={due_date:new Date().getTime()/1e3,is_enabled:0}:this.tempCoupon={...o},this.$refs.couponModal.openModal()},openDelCouponModal(s){this.tempCoupon={...s},this.$refs.delModal.openModal()},getCoupons(){this.isLoading=!0;const s=`${m}/api/${h}/admin/coupons`;this.$http.get(s,this.tempProduct).then(o=>{this.coupons=o.data.coupons,this.isLoading=!1}).catch(o=>{this.isLoading=!1,this.pushMessage({style:"success",title:"取得優惠券",content:o.response.data.message})})},updateCoupon(s){this.isLoading=!0;let o=`${m}/api/${h}/admin/coupon`,d="post",c=s;this.isNew||(o=`${m}/api/${h}/admin/coupon/${this.tempCoupon.id}`,d="put",c=this.tempCoupon),this.$http[d](o,{data:c}).then(t=>{this.isLoading=!1,this.pushMessage({style:"success",title:"新增優惠券",content:t.data.message}),this.getCoupons(),this.$refs.couponModal.hideModal()}).catch(t=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"新增優惠券",content:t.response.data.message})})},delCoupon(){const s=`${m}/api/${h}/admin/coupon/${this.tempCoupon.id}`;this.isLoading=!0,this.$http.delete(s).then(o=>{this.isLoading=!1,this.pushMessage({style:"success",title:"刪除優惠券",content:o.data.message}),this.$refs.delModal.hideModal(),this.getCoupons()}).catch(o=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"刪除優惠券",content:o.response.data.message})})}},created(){this.getCoupons()}},se={class:"text-end mt-4"},ne={class:"table mt-4"},le=e("thead",null,[e("tr",null,[e("th",null,"名稱"),e("th",null,"折扣百分比"),e("th",null,"到期日"),e("th",null,"是否啟用"),e("th",null,"編輯")])],-1),ie={key:0,class:"text-success"},de={key:1,class:"text-muted"},ae={class:"btn-group"},pe=["onClick"],ue=["onClick"];function ce(s,o,d,c,t,p){const n=b("VueLoading"),g=b("CouponModalComponent"),v=b("DelProductModalComponent");return l(),i("div",null,[C(n,{active:t.isLoading,"z-index":1060},null,8,["active"]),e("div",se,[e("button",{class:"btn btn-primary",type:"button",onClick:o[0]||(o[0]=a=>p.openCouponModal(!0))}," 建立新的優惠券 ")]),e("table",ne,[le,e("tbody",null,[(l(!0),i(x,null,$(t.coupons,(a,M)=>(l(),i("tr",{key:M},[e("td",null,_(a.title),1),e("td",null,_(a.percent)+"%",1),e("td",null,_(s.$filters.date(a.due_date)),1),e("td",null,[a.is_enabled===1?(l(),i("span",ie,"啟用")):(l(),i("span",de,"未啟用"))]),e("td",null,[e("div",ae,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:y=>p.openCouponModal(!1,a)}," 編輯 ",8,pe),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:y=>p.openDelCouponModal(a)}," 刪除 ",8,ue)])])]))),128))])]),C(g,{coupon:t.tempCoupon,"is-new":t.isNew,ref:"couponModal",onUpdateCoupon:p.updateCoupon},null,8,["coupon","is-new","onUpdateCoupon"]),C(v,{item:t.tempCoupon,ref:"delModal",onDelItem:p.delCoupon},null,8,["item","onDelItem"])])}const _e=f(te,[["render",ce]]);export{_e as default};
