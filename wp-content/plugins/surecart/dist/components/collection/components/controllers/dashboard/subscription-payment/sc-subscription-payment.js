import{h,Fragment}from"@stencil/core";import{__}from"@wordpress/i18n";import{addQueryArgs}from"@wordpress/url";import apiFetch from"../../../../functions/fetch";export class ScSubscriptionPayment{constructor(){this.subscriptionId=void 0,this.backUrl=void 0,this.successUrl=void 0,this.subscription=void 0,this.paymentMethods=[],this.customerIds=[],this.loading=void 0,this.busy=void 0,this.error=void 0}componentWillLoad(){this.fetchItems()}async fetchItems(){try{this.loading=!0,await Promise.all([this.fetchSubscription(),this.fetchPaymentMethods()])}catch(t){console.error(t),this.error=(null==t?void 0:t.message)||__("Something went wrong","surecart")}finally{this.loading=!1}}async fetchSubscription(){this.subscriptionId&&(this.subscription=await apiFetch({path:addQueryArgs(`/surecart/v1/subscriptions/${this.subscriptionId}`,{expand:["price","price.product","current_period","product"]})}))}async fetchPaymentMethods(){var t;this.paymentMethods=await apiFetch({path:addQueryArgs("/surecart/v1/payment_methods",{expand:["card","customer","billing_agreement","paypal_account","payment_instrument","bank_account"],customer_ids:this.customerIds,reusable:!0,...null!==(null===(t=this.subscription)||void 0===t?void 0:t.live_mode)?{live_mode:this.subscription.live_mode}:{}})})}async handleSubmit(t){var e;const{method:s}=await t.target.getFormJson();try{this.error="",this.busy=!0,await apiFetch({path:`/surecart/v1/subscriptions/${null===(e=this.subscription)||void 0===e?void 0:e.id}`,method:"PATCH",data:{payment_method:s}}),this.successUrl?window.location.assign(this.successUrl):this.busy=!1}catch(t){this.error=(null==t?void 0:t.message)||__("Something went wrong","surecart"),this.busy=!1}}renderLoading(){return h(Fragment,null,h("sc-choice",{name:"loading",disabled:!0},h("sc-skeleton",{style:{width:"60px",display:"inline-block"}}),h("sc-skeleton",{style:{width:"80px",display:"inline-block"},slot:"price"}),h("sc-skeleton",{style:{width:"120px",display:"inline-block"},slot:"description"})),h("sc-button",{type:"primary",full:!0,submit:!0,loading:!0,busy:!0}),!!this.backUrl&&h("sc-button",{href:this.backUrl,full:!0,loading:!0,busy:!0}))}renderContent(){if(this.loading)return this.renderLoading();const t=this.paymentMethods.filter((t=>{var e;return(null==t?void 0:t.live_mode)===(null===(e=this.subscription)||void 0===e?void 0:e.live_mode)}));return(null==t?void 0:t.length)?h(Fragment,null,h("sc-choices",null,h("div",null,(this.paymentMethods||[]).map((t=>{var e,s;return(null==t?void 0:t.live_mode)!==(null===(e=null==this?void 0:this.subscription)||void 0===e?void 0:e.live_mode)?null:h("sc-choice",{checked:(null===(s=this.subscription)||void 0===s?void 0:s.payment_method)===(null==t?void 0:t.id),name:"method",value:null==t?void 0:t.id},h("sc-payment-method",{paymentMethod:t,full:!0}))})))),h("sc-button",{type:"primary",full:!0,submit:!0,loading:this.loading||this.busy,disabled:this.loading||this.busy},__("Update","surecart")),!!this.backUrl&&h("sc-button",{href:this.backUrl,full:!0,loading:this.loading||this.busy,disabled:this.loading||this.busy},__("Go Back","surecart"))):h(Fragment,null,h("sc-empty",{icon:"credit-card"},__("You have no saved payment methods.","surecart")),!!this.backUrl&&h("sc-button",{href:this.backUrl,full:!0},__("Go Back","surecart")))}render(){return h("sc-dashboard-module",{heading:__("Select a payment method","surecart"),class:"subscription-payment",error:this.error},h("sc-form",{onScFormSubmit:t=>this.handleSubmit(t)},h("sc-card",null,this.renderContent())),this.busy&&h("sc-block-ui",null))}static get is(){return"sc-subscription-payment"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-subscription-payment.scss"]}}static get styleUrls(){return{$:["sc-subscription-payment.css"]}}static get properties(){return{subscriptionId:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"subscription-id",reflect:!1},backUrl:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"back-url",reflect:!1},successUrl:{type:"string",mutable:!1,complexType:{original:"string",resolved:"string",references:{}},required:!1,optional:!1,docs:{tags:[],text:""},attribute:"success-url",reflect:!1},subscription:{type:"unknown",mutable:!0,complexType:{original:"Subscription",resolved:"Subscription",references:{Subscription:{location:"import",path:"../../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:""}},paymentMethods:{type:"unknown",mutable:!1,complexType:{original:"Array<PaymentMethod>",resolved:"PaymentMethod[]",references:{Array:{location:"global"},PaymentMethod:{location:"import",path:"../../../../types"}}},required:!1,optional:!1,docs:{tags:[],text:""},defaultValue:"[]"},customerIds:{type:"unknown",mutable:!1,complexType:{original:"Array<string>",resolved:"string[]",references:{Array:{location:"global"}}},required:!1,optional:!1,docs:{tags:[],text:""},defaultValue:"[]"}}}static get states(){return{loading:{},busy:{},error:{}}}}