import{proxyCustomElement,HTMLElement,h,Host}from"@stencil/core/internal/client";import{g as getProcessorByType}from"./getters5.js";import{f as formBusy}from"./getters3.js";import{d as defineCustomElement$7}from"./sc-alert2.js";import{d as defineCustomElement$6}from"./sc-block-ui2.js";import{d as defineCustomElement$5}from"./sc-divider2.js";import{d as defineCustomElement$4}from"./sc-icon2.js";import{d as defineCustomElement$3}from"./sc-spinner2.js";import{d as defineCustomElement$2}from"./sc-stripe-payment-request2.js";const scExpressPaymentCss="sc-express-payment{display:block}",ScExpressPayment$1=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.processor=void 0,this.dividerText=void 0,this.debug=void 0,this.hasPaymentOptions=void 0}onPaymentRequestLoaded(){this.hasPaymentOptions=!0}renderStripePaymentRequest(){const{processor_data:e}=getProcessorByType("stripe")||{};return h("sc-stripe-payment-request",{debug:this.debug,stripeAccountId:null==e?void 0:e.account_id,publishableKey:null==e?void 0:e.publishable_key})}render(){return h(Host,{class:{"is-empty":!this.hasPaymentOptions&&!this.debug}},this.renderStripePaymentRequest(),(this.hasPaymentOptions||this.debug)&&h("sc-divider",{style:{"--spacing":"calc(var(--sc-form-row-spacing)/2)"}},this.dividerText),!!formBusy()&&h("sc-block-ui",null))}static get style(){return scExpressPaymentCss}},[0,"sc-express-payment",{processor:[1],dividerText:[1,"divider-text"],debug:[4],hasPaymentOptions:[1028,"has-payment-options"]},[[0,"scPaymentRequestLoaded","onPaymentRequestLoaded"]]]);function defineCustomElement$1(){"undefined"!=typeof customElements&&["sc-express-payment","sc-alert","sc-block-ui","sc-divider","sc-icon","sc-spinner","sc-stripe-payment-request"].forEach((e=>{switch(e){case"sc-express-payment":customElements.get(e)||customElements.define(e,ScExpressPayment$1);break;case"sc-alert":customElements.get(e)||defineCustomElement$7();break;case"sc-block-ui":customElements.get(e)||defineCustomElement$6();break;case"sc-divider":customElements.get(e)||defineCustomElement$5();break;case"sc-icon":customElements.get(e)||defineCustomElement$4();break;case"sc-spinner":customElements.get(e)||defineCustomElement$3();break;case"sc-stripe-payment-request":customElements.get(e)||defineCustomElement$2()}}))}const ScExpressPayment=ScExpressPayment$1,defineCustomElement=defineCustomElement$1;export{ScExpressPayment,defineCustomElement};