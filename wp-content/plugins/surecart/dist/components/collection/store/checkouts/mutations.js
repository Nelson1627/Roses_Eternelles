import store from"./store";import{state as checkoutState}from"@store/checkout";import{addQueryArgs,removeQueryArgs}from"@wordpress/url";export const getCheckout=(t,e)=>{var o;return(null===(o=store.state[e])||void 0===o?void 0:o[t])||{}};export const setCheckout=(t,e)=>{const o=(null==t?void 0:t.live_mode)?"live":"test";store.set(o,{...store.state[o],[e]:t}),checkoutState.formId===e&&checkoutState.mode===o&&(checkoutState.checkout=t),"url"===checkoutState.persist&&(null==t?void 0:t.id)&&window.history.replaceState({},document.title,addQueryArgs(window.location.href,{checkout_id:null==t?void 0:t.id}))};export const clearCheckout=(t,e)=>{const{[t]:o,...r}=store.state[e];return window.history.replaceState({},document.title,removeQueryArgs(window.location.href,"redirect_status","coupon","line_items","confirm_checkout_id","checkout_id")),store.set(e,r)};