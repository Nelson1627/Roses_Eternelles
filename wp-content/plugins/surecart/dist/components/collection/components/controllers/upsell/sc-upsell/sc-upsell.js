import{Host,h}from"@stencil/core";import{state}from"@store/upsell";import{isBusy}from"@store/upsell/getters";import{preview,trackOffer}from"@store/upsell/mutations";import{__}from"@wordpress/i18n";export class ScUpsell{componentWillLoad(){trackOffer(),preview()}render(){var s,t,e,o,i,l,n,r,a;const c=null===(s=state.checkout)||void 0===s?void 0:s.manual_payment_method;return h(Host,null,h("slot",null),isBusy()&&h("sc-block-ui",{style:{"z-index":"30","--sc-block-ui-position":"fixed"}}),h("sc-dialog",{open:"complete"===state.loading,style:{"--body-spacing":"var(--sc-spacing-xxx-large)"},noHeader:!0,onScRequestClose:s=>s.preventDefault()},h("div",{class:"confirm__icon"},h("div",{class:"confirm__icon-container"},h("sc-icon",{name:"check"}))),h("sc-dashboard-module",{heading:(null===(e=null===(t=null==state?void 0:state.text)||void 0===t?void 0:t.success)||void 0===e?void 0:e.title)||__("Thank you!","surecart"),style:{"--sc-dashboard-module-spacing":"var(--sc-spacing-x-large)",textAlign:"center"}},h("span",{slot:"description"},(null===(i=null===(o=null==state?void 0:state.text)||void 0===o?void 0:o.success)||void 0===i?void 0:i.description)||__("Your purchase was successful. A receipt is on its way to your inbox.","surecart")),!!(null==c?void 0:c.name)&&!!(null==c?void 0:c.instructions)&&h("sc-alert",{type:"info",open:!0,style:{"text-align":"left"}},h("span",{slot:"title"},null==c?void 0:c.name),null==c?void 0:c.instructions.split("\n").map((s=>h("p",null,s)))),h("sc-button",{href:null===(n=null===(l=null===window||void 0===window?void 0:window.scData)||void 0===l?void 0:l.pages)||void 0===n?void 0:n.dashboard,size:"large",type:"primary",autofocus:!0},(null===(a=null===(r=null==state?void 0:state.text)||void 0===r?void 0:r.success)||void 0===a?void 0:a.button)||__("Continue","surecart"),h("sc-icon",{name:"arrow-right",slot:"suffix"})))))}static get is(){return"sc-upsell"}static get encapsulation(){return"shadow"}static get originalStyleUrls(){return{$:["sc-upsell.scss"]}}static get styleUrls(){return{$:["sc-upsell.css"]}}}