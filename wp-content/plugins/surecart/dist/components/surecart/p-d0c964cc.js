import{m as i}from"./p-7ef0f71c.js";import{t as o}from"./p-67d61723.js";window.addEventListener("scSearched",(function(i){var o;if(!(null===window||void 0===window?void 0:window.fbq))return;const n=i.detail;window.fbq("track","Search",{search_string:n.searchString,content_ids:n.searchResultIds,...(null===(o=null==n?void 0:n.searchCollections)||void 0===o?void 0:o.length)?{content_category:n.searchCollections.join(",")}:{}})})),window.addEventListener("scProductViewed",(function(o){var n,d,l,e,t,c;if(!(null===window||void 0===window?void 0:window.fbq))return;const v=o.detail;window.fbq("track","ViewContent",{content_ids:[v.id],content_category:null===(d=null===(n=null==v?void 0:v.product_collections)||void 0===n?void 0:n.data)||void 0===d?void 0:d.map((i=>i.name)).join(", "),content_name:(null==v?void 0:v.name)+((null===(l=null==v?void 0:v.variant_options)||void 0===l?void 0:l.length)?` - ${null==v?void 0:v.variant_options.join(" / ")}`:""),content_type:"product",contents:[{id:v.id,quantity:1}],currency:null===(e=null==v?void 0:v.price)||void 0===e?void 0:e.currency,value:i((null===(t=v.price)||void 0===t?void 0:t.amount)||0,(null===(c=v.price)||void 0===c?void 0:c.currency)||"USD")})})),window.addEventListener("scSearched",(i=>{var n;o("search",{search_term:null===(n=i.detail)||void 0===n?void 0:n.searchString})})),window.addEventListener("scProductViewed",(n=>{var d,l,e,t,c,v,u,r,a,s,m,_;const p=n.detail;o("view_item",{value:i((null===(d=p.price)||void 0===d?void 0:d.amount)||0,(null===(l=p.price)||void 0===l?void 0:l.currency)||"USD"),currency:null===(e=p.price)||void 0===e?void 0:e.currency,items:[{item_id:null==p?void 0:p.id,item_name:null==p?void 0:p.name,currency:null===(t=null==p?void 0:p.price)||void 0===t?void 0:t.currency,discount:(null==p?void 0:p.discount_amount)?i(null==p?void 0:p.discount_amount,null===(c=null==p?void 0:p.price)||void 0===c?void 0:c.currency):0,price:i(null===(v=null==p?void 0:p.price)||void 0===v?void 0:v.amount,null===(u=null==p?void 0:p.price)||void 0===u?void 0:u.currency),quantity:(null==p?void 0:p.quantity)||1,...(null===(r=null==p?void 0:p.variant_options)||void 0===r?void 0:r.length)?{item_variant:null==p?void 0:p.variant_options.map((i=>i.name)).join(" / ")}:{},...(null===(s=null===(a=null==p?void 0:p.product_collections)||void 0===a?void 0:a.data)||void 0===s?void 0:s.length)?{item_category:null===(_=null===(m=null==p?void 0:p.product_collections)||void 0===m?void 0:m.data)||void 0===_?void 0:_.map((i=>i.name)).join(", ")}:{}}]})})),window.addEventListener("scProductsViewed",(i=>{var n;const d=i.detail;o("view_item_list",{...(null==d?void 0:d.collectionId)?{item_list_id:d.collectionId}:{},item_list_name:d.pageTitle,items:null===(n=null==d?void 0:d.products)||void 0===n?void 0:n.map((i=>{var o,n,l,e;return{item_id:null==i?void 0:i.id,item_name:null==i?void 0:i.name,...(null===(n=null===(o=null==i?void 0:i.product_collections)||void 0===o?void 0:o.data)||void 0===n?void 0:n.length)?{item_category:null===(e=null===(l=null==i?void 0:i.product_collections)||void 0===l?void 0:l.data)||void 0===e?void 0:e.map((i=>i.name)).join(", ")}:{},...(null==d?void 0:d.collectionId)?{item_list_id:d.collectionId}:{},item_list_name:d.pageTitle}}))})}));