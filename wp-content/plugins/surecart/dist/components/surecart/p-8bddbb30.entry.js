import{r as i,h as o,H as r}from"./p-cc7ce8c7.js";import{s as d}from"./p-e8f915c0.js";import{a as n,b as l}from"./p-cc11b0a3.js";import"./p-25433d0f.js";import"./p-d0c964cc.js";import"./p-7ef0f71c.js";import"./p-67d61723.js";import"./p-f70181c4.js";import"./p-c06b2e12.js";import"./p-09484d0e.js";import"./p-a1feb3df.js";const t=":host{display:block}";const v=class{constructor(o){i(this,o);this.prices=undefined;this.saleText=undefined;this.productId=undefined}renderRange(){var i,r,n,l;if(((r=(i=d[this.productId])===null||i===void 0?void 0:i.prices)===null||r===void 0?void 0:r.length)===1){return this.renderPrice((n=d[this.productId])===null||n===void 0?void 0:n.prices[0])}return o("sc-price-range",{prices:(l=d[this.productId])===null||l===void 0?void 0:l.prices})}renderVariantPrice(i){var o,r;const n=(r=(o=d[this.productId])===null||o===void 0?void 0:o.variants)===null||r===void 0?void 0:r.find((o=>(o===null||o===void 0?void 0:o.id)===(i===null||i===void 0?void 0:i.id)));return this.renderPrice(d[this.productId].selectedPrice,n===null||n===void 0?void 0:n.amount)}renderPrice(i,r){var d;const t=(d=r!==null&&r!==void 0?r:i===null||i===void 0?void 0:i.amount)!==null&&d!==void 0?d:0;const v=n(t);const s=l(i===null||i===void 0?void 0:i.scratch_amount);return o("sc-price",{currency:i===null||i===void 0?void 0:i.currency,amount:v,scratchAmount:s,saleText:this.saleText,adHoc:i===null||i===void 0?void 0:i.ad_hoc,trialDurationDays:i===null||i===void 0?void 0:i.trial_duration_days,setupFeeAmount:(i===null||i===void 0?void 0:i.setup_fee_enabled)?i===null||i===void 0?void 0:i.setup_fee_amount:null,setupFeeName:(i===null||i===void 0?void 0:i.setup_fee_enabled)?i===null||i===void 0?void 0:i.setup_fee_name:null,recurringPeriodCount:i===null||i===void 0?void 0:i.recurring_period_count,recurringInterval:i===null||i===void 0?void 0:i.recurring_interval,recurringIntervalCount:i===null||i===void 0?void 0:i.recurring_interval_count})}render(){return o(r,{role:"paragraph"},(()=>{var i,r,n,l,t;if((i=d[this.productId])===null||i===void 0?void 0:i.selectedVariant){return this.renderVariantPrice((r=d[this.productId])===null||r===void 0?void 0:r.selectedVariant)}if((n=d[this.productId])===null||n===void 0?void 0:n.selectedPrice){return this.renderPrice(d[this.productId].selectedPrice)}if((t=(l=d[this.productId])===null||l===void 0?void 0:l.prices)===null||t===void 0?void 0:t.length){return this.renderRange()}return o("slot",null)})())}};v.style=t;export{v as sc_product_price};
//# sourceMappingURL=p-8bddbb30.entry.js.map