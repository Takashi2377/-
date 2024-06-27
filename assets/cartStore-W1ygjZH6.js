import{s as g,f as i}from"./index-Ce5A-XYZ.js";import{S as d}from"./sweetalert2.all-OUxAfGEE.js";import{u as c}from"./toastMessage-wMQCNsu2.js";var f={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"yuetin-hexschool",BASE_URL:"/BeyeFendi/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:n,VITE_PATH:r}=f,L=g("cartStore",{state:()=>({carts:[],final_total:0,total:0,isLoadingP:!1,orderP:{user:{}}}),actions:{getCart(){this.isLoadingP=!0,i.get(`${n}/api/${r}/cart`).then(t=>{this.carts=t.data.data.carts,this.final_total=t.data.data.final_total,this.total=t.data.data.total,this.isLoadingP=!1})},addToCart(t,s){const a={product_id:t,qty:s};i.post(`${n}/api/${r}/cart`,{data:a}).then(e=>{this.getCart(),d.fire("成功加入購物車!")})},deleteAllCarts(){const{pushMessage:t}=c(),s=`${n}/api/${r}/carts`;d.fire({title:"你確定嗎?",text:"購物車清空後無法復原",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"確定清空!",cancelButtonText:"再想一下..."}).then(a=>{a.isConfirmed&&(this.isLoadingP=!0,i.delete(s).then(e=>{this.getCart(),this.isLoadingP=!1}).catch(e=>{this.isLoadingP=!1,t({style:"danger",title:"清除購物車",content:e.response.data.message})}),d.fire({title:"Clear!",text:"購物車空空如也",icon:"success"}))})},removeCartItem(t){const{pushMessage:s}=c(),a=`${n}/api/${r}/cart/${t}`;this.isLoadingP=!0,i.delete(a).then(e=>{s({style:"success",title:"移除購物車品項",content:e.data.message}),this.isLoadingP=!1,this.getCart()}).catch(e=>{this.isLoadingP=!1,s({style:"danger",title:"移除購物車品項",content:e})})},updateCart(t){const{pushMessage:s}=c();this.isLoadingP=!0;const a=`${n}/api/${r}/cart/${t.id}`,e={product_id:t.product_id,qty:t.qty};i.put(a,{data:e}).then(o=>{s({style:"success",title:"更新購物車",content:o.data.message}),this.isLoadingP=!1,this.getCart()}).catch(o=>{this.isLoadingP=!1,s({style:"danger",title:"更新購物車",content:o.response.data.message})})},addCouponCode(t){const{pushMessage:s}=c(),a=`${n}/api/${r}/coupon`,e={code:t};this.isLoadingP=!0,i.post(a,{data:e}).then(o=>{s({style:"success",title:"加入優惠券",content:o.data.message}),this.getCart(),this.isLoadingP=!1}).catch(o=>{this.isLoadingP=!1,s({style:"danger",title:"優惠碼加入失敗",content:o.response.data.message})})},createOrder(t,s,a){const{pushMessage:e}=c();d.fire({title:"確定送出訂單?",text:"即將進入付款頁面",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"前往付款",cancelButtonText:"再去逛逛"}).then(o=>{if(o.isConfirmed){this.isLoadingP=!0;const h=`${n}/api/${r}/order`,u=t;i.post(h,{data:u}).then(l=>{s.push(`checkout/${l.data.orderId}`),a.resetForm(),this.isLoadingP=!1}).catch(l=>{this.isLoadingP=!1,e({style:"danger",title:"建立訂單",content:l.response})})}})},getOrder(t){const{pushMessage:s}=c(),a=`${n}/api/${r}/order/${t}`;this.isLoadingP=!0,i.get(a).then(e=>{this.orderP=e.data.order,this.isLoadingP=!1}).catch(e=>{this.isLoadingP=!1,s({style:"danger",title:"取得訂單失敗",content:e.response.data.message})})},payOrder(t){const{pushMessage:s}=c(),a=`${n}/api/${r}/pay/${t}`;d.fire({title:"確認付款?",text:"請再次確認訂單及收件人資料無誤",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"確認付款",cancelButtonText:"先等等"}).then(e=>{e.isConfirmed&&(this.isLoadingP=!0,i.post(a).then(()=>{this.isLoadingP=!1,this.getOrder(t),this.getCart()}).catch(o=>{this.isLoadingP=!1,s({style:"danger",title:"付款失敗",content:o.response.data.message})}))})}}});export{L as c};
