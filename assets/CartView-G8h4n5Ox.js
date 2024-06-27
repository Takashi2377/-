import{_ as x,a as g,m as L,r,o as d,c as i,d as a,b as e,F as w,j as E,l as m,t as p,k as b,v as h,w as v,q as U,e as f,n as _}from"./index-Ce5A-XYZ.js";import{u as T}from"./toastMessage-wMQCNsu2.js";import{c as y}from"./cartStore-W1ygjZH6.js";import"./sweetalert2.all-OUxAfGEE.js";var q={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"yuetin-hexschool",BASE_URL:"/BeyeFendi/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:B,VITE_PATH:F}=q,I={data(){return{products:[],product:{},status:{loadingItem:""},form:{user:{name:"",email:"",tel:"",address:""},message:""},isLoading:!1,coupon_code:"",router:this.$router,refsForm:this.$refs.form}},methods:{...g(T,["pushMessage"]),...g(y,["deleteAllCarts","removeCartItem","updateCart","addCouponCode","getCart","createOrder"]),getProducts(){const s=`${B}/api/${F}/products`;this.isLoading=!0,this.$http.get(s).then(o=>{this.products=o.data.products,this.isLoading=!1}).catch(o=>{this.isLoading=!1,this.pushMessage({style:"danger",title:"取得產品資訊失敗",content:o.response.data.message})})}},computed:{...L(y,["carts","final_total","total","isLoadingP"])},watch:{isLoadingP(){this.isLoading=this.isLoadingP}},created(){this.getProducts(),this.getCart()}},S={key:0,class:"container"},P={class:"row"},A={class:"col-md-8 offset-md-2 mt-4"},M={key:0,class:"text-end"},R={key:1,class:"text-end"},N=e("button",{class:"btn btn-outline-danger",type:"button",disabled:""}," 清空購物車 ",-1),D=[N],$={class:"table align-middle mt-2"},z=e("thead",null,[e("tr",null,[e("th"),e("th",{class:"w-25"},"圖片"),e("th",{style:{width:"10rem"},class:"text-center"},"品名"),e("th",{class:"text-center",style:{width:"10rem"}},"數量"),e("th",{class:"text-end"},"單價")])],-1),O=["disabled","onClick"],j=e("i",{class:"bi bi-x"},null,-1),H=[j],G={class:"text-center"},J={key:0,class:"text-success"},K={class:"input-group my-3 bg-light rounded"},Q={class:"input-group-prepend"},W=["disabled","onClick","onBlur"],X=e("i",{class:"bi bi-dash-lg"},null,-1),Y=[X],Z=["onUpdate:modelValue"],ee={class:"input-group-append"},te=["onClick","onBlur"],se=e("i",{class:"bi bi-plus-lg"},null,-1),oe=[se],le={class:"text-end"},ne={key:0,class:"text-success"},ae={colspan:"5",class:"text-end"},de={key:0},ie={colspan:"5",class:"text-end text-success"},re={class:"col-md-4 offset-md-6"},ce={class:"input-group mb-3 input-group-sm"},ue=e("div",{class:"row"},[e("hr",{class:"col-md-10 offset-md-1 mt-3"})],-1),me={class:"my-4 row justify-content-center"},pe={class:"mb-3"},_e=e("label",{for:"email",class:"form-label"},"*Email",-1),be={class:"mb-3"},he=e("label",{for:"name",class:"form-label"},"*收件人姓名",-1),fe={class:"mb-3"},ge=e("label",{for:"tel",class:"form-label"},"*收件人電話",-1),ve={class:"mb-3"},ye=e("label",{for:"address",class:"form-label"},"*收件人地址",-1),ke={class:"mb-3"},Ve=e("label",{for:"message",class:"form-label"},"備註 (選填)",-1),Ce=e("div",{class:"text-end"},[e("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1),xe={key:1,class:"container"},Le={class:"d-flex flex-column align-items-center non-cart"},we=e("i",{class:"bi bi-cart2 text-black-50"},null,-1),Ee=e("h5",{class:"my-3 text-black-50"},"您的購物車中目前沒有商品...",-1);function Ue(s,o,Te,qe,l,Be){const k=r("VueLoading"),c=r("VeeField"),u=r("ErrorMessage"),V=r("VeeForm"),C=r("RouterLink");return s.carts.length?(d(),i("div",S,[a(k,{active:l.isLoading,"z-index":1060},null,8,["active"]),e("div",P,[e("div",A,[s.carts.length>=1?(d(),i("div",M,[e("button",{class:"btn btn-outline-danger",type:"button",onClick:o[0]||(o[0]=(...t)=>s.deleteAllCarts&&s.deleteAllCarts(...t))}," 清空購物車 ")])):(d(),i("div",R,D)),e("table",$,[z,e("tbody",null,[s.carts?(d(!0),i(w,{key:0},E(s.carts,t=>(d(),i("tr",{key:t.id},[e("td",null,[e("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:l.status.loadingItem===t.id,onClick:n=>s.removeCartItem(t.id)},H,8,O)]),e("td",null,[e("div",{style:U([{height:"6rem","min-width":"6rem","background-size":"cover","background-position":"center"},{backgroundImage:`url(${t.product.imageUrl})`}]),class:"object-fit-cover"},null,4)]),e("td",G,[f(p(t.product.title)+" ",1),t.coupon?(d(),i("div",J,"已套用優惠券")):m("",!0)]),e("td",null,[e("div",K,[e("div",Q,[e("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon1",disabled:t.qty===1,onClick:n=>t.qty--,onBlur:n=>s.updateCart(t)},Y,40,W)]),b(e("input",{type:"text",class:"form-control border-0 text-center my-auto shadow-none bg-light",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1","onUpdate:modelValue":n=>t.qty=n,disabled:""},null,8,Z),[[h,t.qty,void 0,{number:!0}]]),e("div",ee,[e("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon2",onClick:n=>t.qty++,onBlur:n=>s.updateCart(t)},oe,40,te)])])]),e("td",le,[s.final_total!==s.total?(d(),i("small",ne,"折扣價：")):m("",!0),f(" $ "+p(s.$filters.currency(t.final_total)),1)])]))),128)):m("",!0)]),e("tfoot",null,[e("tr",null,[e("td",ae,"總計 : NT$ "+p(s.$filters.currency(s.total)),1)]),s.final_total!==s.total?(d(),i("tr",de,[e("td",ie,"折扣價 : NT$ "+p(s.$filters.currency(s.final_total)),1)])):m("",!0)])])]),e("div",re,[e("div",ce,[b(e("input",{type:"text",class:"form-control","onUpdate:modelValue":o[1]||(o[1]=t=>l.coupon_code=t),placeholder:"輸入優惠碼 'FB777' ，即享線上首購優惠77折"},null,512),[[h,l.coupon_code]]),e("button",{class:"btn btn-outline-secondary",type:"button",onClick:o[2]||(o[2]=t=>s.addCouponCode(l.coupon_code))}," 套用優惠碼 ")])])]),ue,e("div",me,[a(V,{ref:"form",class:"col-md-6",onSubmit:o[8]||(o[8]=t=>s.createOrder(l.form,l.router,l.refsForm))},{default:v(({errors:t})=>[e("div",pe,[_e,a(c,{id:"email",name:"email",type:"email",class:_(["form-control",{"is-invalid":t.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:l.form.user.email,"onUpdate:modelValue":o[3]||(o[3]=n=>l.form.user.email=n)},null,8,["class","modelValue"]),a(u,{name:"email",class:"invalid-feedback"})]),e("div",be,[he,a(c,{id:"name",name:"姓名",type:"text",class:_(["form-control",{"is-invalid":t.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:l.form.user.name,"onUpdate:modelValue":o[4]||(o[4]=n=>l.form.user.name=n)},null,8,["class","modelValue"]),a(u,{name:"姓名",class:"invalid-feedback"})]),e("div",fe,[ge,a(c,{id:"tel",name:"電話",type:"tel",class:_(["form-control",{"is-invalid":t.電話}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:l.form.user.tel,"onUpdate:modelValue":o[5]||(o[5]=n=>l.form.user.tel=n)},null,8,["class","modelValue"]),a(u,{name:"電話",class:"invalid-feedback"})]),e("div",ve,[ye,a(c,{id:"address",name:"地址",type:"text",class:_(["form-control",{"is-invalid":t.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:l.form.user.address,"onUpdate:modelValue":o[6]||(o[6]=n=>l.form.user.address=n)},null,8,["class","modelValue"]),a(u,{name:"地址",class:"invalid-feedback"})]),e("div",ke,[Ve,b(e("textarea",{name:"",id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":o[7]||(o[7]=n=>l.form.message=n)},null,512),[[h,l.form.message]])]),Ce]),_:1},512)])])):(d(),i("div",xe,[e("div",Le,[we,Ee,a(C,{type:"button",class:"btn btn-secondary my-3 px-5 py-2",to:"/products"},{default:v(()=>[f(" 前往購物 ")]),_:1})])]))}const Ae=x(I,[["render",Ue]]);export{Ae as default};
