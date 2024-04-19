import{proxyCustomElement,HTMLElement,createEvent,h,Fragment}from"@stencil/core/internal/client";import{i as isRtl}from"./page-align.js";import{s as sizeImage}from"./media.js";import{d as defineCustomElement$4}from"./sc-format-number2.js";import{d as defineCustomElement$3}from"./sc-icon2.js";import{d as defineCustomElement$2}from"./sc-line-item2.js";import{d as defineCustomElement$1}from"./sc-quantity-select2.js";const scProductLineItemCss=":host {\n  display: block;\n  font-family: var(--sc-font-sans);\n}\n\n.item {\n  box-sizing: border-box;\n  margin: 0px;\n  min-width: 0px;\n  display: flex;\n  gap: 18px;\n  justify-content: space-between;\n  align-items: stretch;\n  width: 100%;\n  border-bottom: none;\n}\n.item--has-image {\n  align-items: center;\n  container-type: inline-size;\n}\n@container (max-width: 290px) {\n  .item--has-image .item__image {\n    display: none;\n  }\n}\n.item__scratch-price {\n  opacity: 0.75;\n  font-size: 90%;\n  text-decoration: line-through;\n}\n\n.item__text {\n  box-sizing: border-box;\n  margin: 0px;\n  min-width: 0px;\n  display: flex;\n  gap: 6px;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex: 1 1 0%;\n}\n\n.item__text-details {\n  display: grid;\n}\n\n.item__title {\n  box-sizing: border-box;\n  min-width: 0px;\n  margin: 0;\n  color: var(--sc-line-item-title-color, var(--sc-input-label-color));\n  font-size: var(--sc-font-size-medium);\n  font-weight: var(--sc-font-weight-semibold);\n  line-height: var(--sc-line-height-dense);\n  cursor: pointer;\n  display: -webkit-box;\n  display: -moz-box;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  -moz-box-lines: 3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.item__variant {\n  box-sizing: border-box;\n  min-width: 0px;\n  margin: 0;\n  color: var(--sc-input-label-color);\n  font-weight: var(--sc-font-weight-semibold);\n  font-size: var(--sc-font-size-small);\n  line-height: var(--sc-line-height-dense);\n  cursor: pointer;\n  display: -webkit-box;\n  display: -moz-box;\n  -webkit-box-orient: vertical;\n  -moz-box-orient: vertical;\n  -webkit-line-clamp: 3;\n  -moz-box-lines: 3;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.item__suffix {\n  flex: 1;\n  box-sizing: border-box;\n  margin: 0px;\n  min-width: 0px;\n  display: flex;\n  flex-direction: column;\n  -webkit-box-pack: start;\n  justify-content: space-between;\n  align-items: flex-end;\n  min-width: 100px;\n  margin-left: auto;\n  align-self: center;\n}\n\n.product-line-item__removable .item__suffix {\n  align-self: flex-start;\n}\n\n.product-line-item__editable .item__suffix {\n  align-self: flex-start;\n}\n\n.item__price {\n  text-align: right;\n  max-width: 100%;\n}\n\n.item__description {\n  color: var(--sc-price-label-color, var(--sc-input-help-text-color));\n  font-size: var(--sc-price-label-font-size, var(--sc-input-help-text-font-size-medium));\n  line-height: var(--sc-line-height-dense);\n}\n\n.item__image {\n  width: var(--sc-product-line-item-image-size, 4em);\n  height: var(--sc-product-line-item-image-size, 4em);\n  object-fit: cover;\n  border-radius: 4px;\n  border: solid 1px var(--sc-input-border-color, var(--sc-input-border));\n  display: block;\n  box-shadow: var(--sc-input-box-shadow);\n  align-self: flex-start;\n}\n\n.product__description {\n  display: flex;\n  gap: 0.5em;\n  align-items: center;\n}\n\n.price {\n  font-size: var(--sc-font-size-medium);\n  font-weight: var(--sc-font-weight-semibold);\n  color: var(--sc-input-label-color);\n  line-height: var(--sc-line-height-dense);\n}\n\n.price__description {\n  font-size: var(--sc-font-size-small);\n  line-height: var(--sc-line-height-dense);\n  color: var(--sc-input-label-color);\n  opacity: 0.75;\n}\n\n.item__remove {\n  cursor: pointer;\n  color: var(--sc-color-gray-400);\n  margin-bottom: var(--sc-spacing-small);\n}\n\n.actions__divider {\n  opacity: 0.25;\n  margin: 0 0.2em;\n}\n\n.item--is-rtl.price {\n  text-align: right;\n}\n.item--is-rtl .item__price {\n  text-align: left;\n}\n\n.base {\n  display: grid;\n  gap: var(--sc-spacing-x-small);\n}\n\n.fee__description {\n  opacity: 0.75;\n}",ScProductLineItem=proxyCustomElement(class extends HTMLElement{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.scUpdateQuantity=createEvent(this,"scUpdateQuantity",3),this.scRemove=createEvent(this,"scRemove",3),this.imageUrl=void 0,this.imageTitle=void 0,this.imageAlt=void 0,this.name=void 0,this.priceName=void 0,this.variantLabel="",this.quantity=void 0,this.amount=void 0,this.fees=void 0,this.setupFeeTrialEnabled=!0,this.scratchAmount=void 0,this.currency=void 0,this.interval=void 0,this.trialDurationDays=void 0,this.removable=void 0,this.editable=!0,this.max=100,this.sku=""}renderPriceAndInterval(){const e=(this.fees||[]).find((e=>"setup"===e.fee_type));return this.trialDurationDays?h("div",{class:"item__price",part:"price"},h("div",{class:"price",part:"price__amount"},e&&!this.setupFeeTrialEnabled?h(Fragment,null,null==e?void 0:e.description," ",h("sc-format-number",{part:"price__amount",type:"currency",currency:this.currency,value:e.amount})):wp.i18n.sprintf(wp.i18n._n("%d day free","%d days free",this.trialDurationDays,"surecart"),this.trialDurationDays)),h("div",{class:"price__description",part:"price__description"},
/** translators: 30 days free, Then $99 per month. */
wp.i18n.__("Then","surecart")," ",!!this.scratchAmount&&this.scratchAmount>this.amount&&h(Fragment,null,h("sc-format-number",{class:"item__scratch-price",part:"price__scratch",type:"currency",currency:this.currency,value:this.scratchAmount})," "),h("sc-format-number",{part:"price__amount",type:"currency",currency:this.currency,value:this.amount})," ",!!this.interval&&this.interval,!!e&&!this.setupFeeTrialEnabled&&wp.i18n.sprintf(wp.i18n._n("starting in %d day","starting in %d days",this.trialDurationDays,"surecart"),this.trialDurationDays))):h("div",{class:"item__price",part:"price"},h("div",{class:"price",part:"price__amount"},!!this.scratchAmount&&this.scratchAmount!==this.amount&&h(Fragment,null,h("sc-format-number",{class:"item__scratch-price",type:"currency",currency:this.currency,value:this.scratchAmount})," "),h("sc-format-number",{type:"currency",currency:this.currency,value:this.amount})),!!this.interval&&h("div",{class:"price__description",part:"price__description"},this.interval))}render(){return h("div",{class:"base",part:"base"},h("div",{part:"product-line-item",class:{item:!0,"item--has-image":!!this.imageUrl,"item--is-rtl":isRtl(),"product-line-item__editable":this.editable,"product-line-item__removable":this.removable}},!!this.imageUrl&&h("img",{part:"image",src:sizeImage(this.imageUrl,130),class:"item__image",alt:this.imageAlt,...this.imageTitle?{title:this.imageTitle}:{}}),h("div",{class:"item__text",part:"text"},h("div",{class:"item__text-details"},h("div",{class:"item__title",part:"title"},h("slot",{name:"title"},this.name)),h("div",{class:"item__description item__price-variant",part:"description"},h("div",null,this.variantLabel),h("div",null,this.priceName),!!this.sku&&h("div",null,wp.i18n.__("SKU:","surecart")," ",this.sku)),!this.editable&&this.quantity>1&&h("span",{class:"item__description",part:"static-quantity"},wp.i18n.__("Qty:","surecart")," ",this.quantity)),this.editable&&h("sc-quantity-select",{max:this.max||1/0,exportparts:"base:quantity, minus:quantity__minus, minus-icon:quantity__minus-icon, plus:quantity__plus, plus-icon:quantity__plus-icon, input:quantity__input",clickEl:this.el,quantity:this.quantity,size:"small",onScChange:e=>e.detail&&this.scUpdateQuantity.emit(e.detail),"aria-label":wp.i18n.sprintf(wp.i18n.__("Change Quantity - %s %s","surecart"),this.name,this.priceName)})),h("div",{class:"item__suffix",part:"suffix"},this.removable?h("sc-icon",{exportparts:"base:remove-icon__base",class:"item__remove",name:"x",onClick:()=>this.scRemove.emit(),onKeyDown:e=>{"Enter"===e.key&&this.scRemove.emit()},tabindex:"0","aria-label":wp.i18n.sprintf(wp.i18n.__("Remove Item - %s %s","surecart"),this.name,this.priceName)}):h("div",null),this.renderPriceAndInterval())),(this.fees||[]).map((e=>this.trialDurationDays&&!this.setupFeeTrialEnabled&&"setup"===e.fee_type?null:h("sc-line-item",{exportparts:"price-description:line-item__price-description"},h("sc-format-number",{slot:"price-description",type:"currency",value:null==e?void 0:e.amount,currency:this.currency||"usd"}),h("span",{slot:"price-description",class:"fee__description"},null==e?void 0:e.description)))))}get el(){return this}static get style(){return scProductLineItemCss}},[1,"sc-product-line-item",{imageUrl:[1,"image-url"],imageTitle:[1,"image-title"],imageAlt:[1,"image-alt"],name:[1],priceName:[1,"price-name"],variantLabel:[1,"variant-label"],quantity:[2],amount:[2],fees:[16],setupFeeTrialEnabled:[4,"setup-fee-trial-enabled"],scratchAmount:[2,"scratch-amount"],currency:[1],interval:[1],trialDurationDays:[2,"trial-duration-days"],removable:[4],editable:[4],max:[2],sku:[1]}]);function defineCustomElement(){"undefined"!=typeof customElements&&["sc-product-line-item","sc-format-number","sc-icon","sc-line-item","sc-quantity-select"].forEach((e=>{switch(e){case"sc-product-line-item":customElements.get(e)||customElements.define(e,ScProductLineItem);break;case"sc-format-number":customElements.get(e)||defineCustomElement$4();break;case"sc-icon":customElements.get(e)||defineCustomElement$3();break;case"sc-line-item":customElements.get(e)||defineCustomElement$2();break;case"sc-quantity-select":customElements.get(e)||defineCustomElement$1()}}))}export{ScProductLineItem as S,defineCustomElement as d};