"use strict";(self.webpackChunkreact_onemap=self.webpackChunkreact_onemap||[]).push([[213],{7298:function(e,r,o){var t=o(4395),a=o(9344),n=o(4864),i=o(184);r.Z=function(e){var r=e.children,o=(0,n.rV)().collapsed?a.E:a.R;return(0,i.jsx)(t.Z,{color:"default",position:"fixed",sx:{width:{lg:"calc(100% - ".concat(o,"px)")},marginLeft:{lg:o}},children:r})}},4784:function(e,r,o){var t=o(4663),a=o(3400),n=o(890),i=o(8008),s=o(4864),l=o(184);r.Z=function(e){var r=e.children,o=e.title,c=(0,s.rV)().toggleDrawer;return(0,l.jsxs)(t.Z,{sx:{px:{xs:3,sm:6}},children:[(0,l.jsx)(a.Z,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:c,sx:{display:{lg:"none"},marginRight:2},children:(0,l.jsx)(i.Z,{})}),(0,l.jsx)(n.Z,{variant:"h2",component:"h1",sx:{flexGrow:1},children:o}),r]})}},3213:function(e,r,o){o.r(r),o.d(r,{default:function(){return P}});var t=o(4942),a=o(3366),n=o(7462),i=o(2791),s=o(8182),l=o(767),c=o(3701),d=o(4036),u=o(1046),v=o(5159);function h(e){return(0,v.Z)("MuiFab",e)}var f=(0,o(208).Z)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge","info","error","warning","success"]),m=o(7630),p=o(184),g=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],b=(0,m.ZP)(c.Z,{name:"MuiFab",slot:"Root",overridesResolver:function(e,r){var o=e.ownerState;return[r.root,r[o.variant],r["size".concat((0,d.Z)(o.size))],"inherit"===o.color&&r.colorInherit,r[(0,d.Z)(o.size)],r[o.color]]}})((function(e){var r,o=e.theme,a=e.ownerState;return(0,n.Z)({},o.typography.button,(r={minHeight:36,transition:o.transitions.create(["background-color","box-shadow","border-color"],{duration:o.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:o.shadows[6],"&:active":{boxShadow:o.shadows[12]},color:o.palette.getContrastText(o.palette.grey[300]),backgroundColor:o.palette.grey[300],"&:hover":{backgroundColor:o.palette.grey.A100,"@media (hover: none)":{backgroundColor:o.palette.grey[300]},textDecoration:"none"}},(0,t.Z)(r,"&.".concat(f.focusVisible),{boxShadow:o.shadows[6]}),(0,t.Z)(r,"&.".concat(f.disabled),{color:o.palette.action.disabled,boxShadow:o.shadows[0],backgroundColor:o.palette.action.disabledBackground}),r),"small"===a.size&&{width:40,height:40},"medium"===a.size&&{width:48,height:48},"extended"===a.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===a.variant&&"small"===a.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===a.variant&&"medium"===a.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===a.color&&{color:"inherit"})}),(function(e){var r=e.theme,o=e.ownerState;return(0,n.Z)({},"inherit"!==o.color&&"default"!==o.color&&null!=r.palette[o.color]&&{color:r.palette[o.color].contrastText,backgroundColor:r.palette[o.color].main,"&:hover":{backgroundColor:r.palette[o.color].dark,"@media (hover: none)":{backgroundColor:r.palette[o.color].main}}})})),Z=i.forwardRef((function(e,r){var o=(0,u.Z)({props:e,name:"MuiFab"}),t=o.children,i=o.className,c=o.color,v=void 0===c?"default":c,f=o.component,m=void 0===f?"button":f,Z=o.disabled,x=void 0!==Z&&Z,w=o.disableFocusRipple,z=void 0!==w&&w,R=o.focusVisibleClassName,j=o.size,k=void 0===j?"large":j,S=o.variant,y=void 0===S?"circular":S,M=(0,a.Z)(o,g),C=(0,n.Z)({},o,{color:v,component:m,disabled:x,disableFocusRipple:z,size:k,variant:y}),N=function(e){var r=e.color,o=e.variant,t=e.classes,a=e.size,n={root:["root",o,"size".concat((0,d.Z)(a)),"inherit"===r?"colorInherit":r]};return(0,l.Z)(n,h,t)}(C);return(0,p.jsx)(b,(0,n.Z)({className:(0,s.Z)(N.root,i),component:m,disabled:x,focusRipple:!z,focusVisibleClassName:(0,s.Z)(N.focusVisible,R),ownerState:C,ref:r},M,{children:t}))})),x=o(1889),w=o(4554),z=o(3044),R=o(890),j=o(7608),k=o(501),S=o(3168),y=o(5572),M=o(5761),C=o(7298),N=o(4784),P=function(){var e=(0,y.aC)(),r=e.isLoggingOut,o=e.logout,t=e.userInfo,a=(0,M.Ds)(),n=(0,S.$)().t;return(0,p.jsxs)(i.Fragment,{children:[(0,p.jsx)(C.Z,{children:(0,p.jsx)(N.Z,{children:(0,p.jsx)(Z,{"aria-label":"logout",color:"secondary",disabled:r,onClick:function(){o().catch((function(){return a.error(n("common.errors.unexpected.subTitle"))}))},children:(0,p.jsx)(j.Z,{})})})}),(0,p.jsx)(x.ZP,{container:!0,spacing:12,children:(0,p.jsx)(x.ZP,{item:!0,xs:18,md:12,marginTop:3,children:(0,p.jsxs)(w.Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",mb:6},children:[(0,p.jsx)(z.Z,{sx:{bgcolor:"background.paper",mb:3,height:160,width:160},children:(0,p.jsx)(k.Z,{sx:{fontSize:120}})}),(0,p.jsx)(R.Z,{component:"div",variant:"h4",children:"".concat(null===t||void 0===t?void 0:t.firstName," ").concat(null===t||void 0===t?void 0:t.lastName)}),(0,p.jsx)(R.Z,{variant:"body2",children:null===t||void 0===t?void 0:t.role})]})})})]})}},9344:function(e,r,o){o.d(r,{E:function(){return t},R:function(){return a}});var t=104,a=280},7608:function(e,r,o){var t=o(5318);r.Z=void 0;var a=t(o(5649)),n=o(184),i=(0,a.default)((0,n.jsx)("path",{d:"M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"ExitToApp");r.Z=i},8008:function(e,r,o){var t=o(5318);r.Z=void 0;var a=t(o(5649)),n=o(184),i=(0,a.default)((0,n.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");r.Z=i},501:function(e,r,o){var t=o(5318);r.Z=void 0;var a=t(o(5649)),n=o(184),i=(0,a.default)((0,n.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");r.Z=i},3044:function(e,r,o){o.d(r,{Z:function(){return x}});var t=o(9439),a=o(3366),n=o(7462),i=o(2791),s=o(8182),l=o(767),c=o(7630),d=o(1046),u=o(9201),v=o(184),h=(0,u.Z)((0,v.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),f=o(5159);function m(e){return(0,f.Z)("MuiAvatar",e)}(0,o(208).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var p=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,r){var o=e.ownerState;return[r.root,r[o.variant],o.colorDefault&&r.colorDefault]}})((function(e){var r=e.theme,o=e.ownerState;return(0,n.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===o.variant&&{borderRadius:r.shape.borderRadius},"square"===o.variant&&{borderRadius:0},o.colorDefault&&{color:r.palette.background.default,backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]})})),b=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,r){return r.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),Z=(0,c.ZP)(h,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,r){return r.fallback}})({width:"75%",height:"75%"});var x=i.forwardRef((function(e,r){var o=(0,d.Z)({props:e,name:"MuiAvatar"}),c=o.alt,u=o.children,h=o.className,f=o.component,x=void 0===f?"div":f,w=o.imgProps,z=o.sizes,R=o.src,j=o.srcSet,k=o.variant,S=void 0===k?"circular":k,y=(0,a.Z)(o,p),M=null,C=function(e){var r=e.crossOrigin,o=e.referrerPolicy,a=e.src,n=e.srcSet,s=i.useState(!1),l=(0,t.Z)(s,2),c=l[0],d=l[1];return i.useEffect((function(){if(a||n){d(!1);var e=!0,t=new Image;return t.onload=function(){e&&d("loaded")},t.onerror=function(){e&&d("error")},t.crossOrigin=r,t.referrerPolicy=o,t.src=a,n&&(t.srcset=n),function(){e=!1}}}),[r,o,a,n]),c}((0,n.Z)({},w,{src:R,srcSet:j})),N=R||j,P=N&&"error"!==C,F=(0,n.Z)({},o,{colorDefault:!P,component:x,variant:S}),D=function(e){var r=e.classes,o={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,l.Z)(o,m,r)}(F);return M=P?(0,v.jsx)(b,(0,n.Z)({alt:c,src:R,srcSet:j,sizes:z,ownerState:F,className:D.img},w)):null!=u?u:N&&c?c[0]:(0,v.jsx)(Z,{className:D.fallback}),(0,v.jsx)(g,(0,n.Z)({as:x,ownerState:F,className:(0,s.Z)(D.root,h),ref:r},y,{children:M}))}))},4663:function(e,r,o){o.d(r,{Z:function(){return p}});var t=o(4942),a=o(3366),n=o(7462),i=o(2791),s=o(8182),l=o(767),c=o(1046),d=o(7630),u=o(5159);function v(e){return(0,u.Z)("MuiToolbar",e)}(0,o(208).Z)("MuiToolbar",["root","gutters","regular","dense"]);var h=o(184),f=["className","component","disableGutters","variant"],m=(0,d.ZP)("div",{name:"MuiToolbar",slot:"Root",overridesResolver:function(e,r){var o=e.ownerState;return[r.root,!o.disableGutters&&r.gutters,r[o.variant]]}})((function(e){var r=e.theme,o=e.ownerState;return(0,n.Z)({position:"relative",display:"flex",alignItems:"center"},!o.disableGutters&&(0,t.Z)({paddingLeft:r.spacing(2),paddingRight:r.spacing(2)},r.breakpoints.up("sm"),{paddingLeft:r.spacing(3),paddingRight:r.spacing(3)}),"dense"===o.variant&&{minHeight:48})}),(function(e){var r=e.theme;return"regular"===e.ownerState.variant&&r.mixins.toolbar})),p=i.forwardRef((function(e,r){var o=(0,c.Z)({props:e,name:"MuiToolbar"}),t=o.className,i=o.component,d=void 0===i?"div":i,u=o.disableGutters,p=void 0!==u&&u,g=o.variant,b=void 0===g?"regular":g,Z=(0,a.Z)(o,f),x=(0,n.Z)({},o,{component:d,disableGutters:p,variant:b}),w=function(e){var r=e.classes,o={root:["root",!e.disableGutters&&"gutters",e.variant]};return(0,l.Z)(o,v,r)}(x);return(0,h.jsx)(m,(0,n.Z)({as:d,className:(0,s.Z)(w.root,t),ref:r,ownerState:x},Z))}))}}]);
//# sourceMappingURL=213.6b9eba63.chunk.js.map