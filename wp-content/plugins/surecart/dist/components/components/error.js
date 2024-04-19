import{b as setProduct,s as state}from"./watchers.js";import{t as toggleCart}from"./mutations2.js";import{a as addCheckoutLineItem}from"./mutations4.js";import{a as addQueryArgs}from"./add-query-args.js";const submitCartForm=async e=>{var t,o,d,i,a,r;const l=state[e];if(l&&(null===(t=l.selectedPrice)||void 0===t?void 0:t.id)&&(!(null===(o=l.selectedPrice)||void 0===o?void 0:o.ad_hoc)||null!==l.adHocAmount&&void 0!==l.adHocAmount))try{setProduct(e,{busy:!0}),await addCheckoutLineItem({price:null===(d=l.selectedPrice)||void 0===d?void 0:d.id,quantity:Math.max((null===(i=l.selectedPrice)||void 0===i?void 0:i.ad_hoc)?1:l.quantity,1),...(null===(a=l.selectedPrice)||void 0===a?void 0:a.ad_hoc)?{ad_hoc_amount:l.adHocAmount}:{},variant:null===(r=l.selectedVariant)||void 0===r?void 0:r.id}),toggleCart(!0),setProduct(e,{dialog:null})}catch(e){throw console.error(e),state.error=e,e}finally{setProduct(e,{busy:!1})}},getProductBuyLink=(e,t,o={})=>{var d,i,a,r,l,s,c;const n=state[e];if(n&&(null===(d=n.selectedPrice)||void 0===d?void 0:d.id)&&(!(null===(i=n.selectedPrice)||void 0===i?void 0:i.ad_hoc)||n.adHocAmount))return addQueryArgs(t,{line_items:[{price:null===(a=n.selectedPrice)||void 0===a?void 0:a.id,quantity:Math.max((null===(r=n.selectedPrice)||void 0===r?void 0:r.ad_hoc)?1:n.quantity,1),...(null===(l=n.selectedPrice)||void 0===l?void 0:l.ad_hoc)?{ad_hoc_amount:n.adHocAmount}:{},...(null===(s=n.selectedVariant)||void 0===s?void 0:s.id)?{variant:null===(c=n.selectedVariant)||void 0===c?void 0:c.id}:{}}],...o})},getAdditionalErrorMessages=e=>((null==e?void 0:e.additional_errors)||[]).map((e=>e.message)),getTopLevelError=e=>{var t;return"checkout.invalid"===(null==e?void 0:e.code)&&(null===(t=getAdditionalErrorMessages(e))||void 0===t?void 0:t.length)?"":null==e?void 0:e.message};export{getTopLevelError as a,getAdditionalErrorMessages as b,getProductBuyLink as g,submitCartForm as s};