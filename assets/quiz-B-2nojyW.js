import{$ as e,A as t,C as n,D as r,F as i,G as a,H as o,L as s,M as c,N as l,P as u,R as d,V as f,W as p,Z as m,at as h,dt as g,et as _,gt as v,ht as y,it as b,j as x,ot as S,pt as C,rt as w,st as T,tt as E,w as D,z as O}from"./app-CuKyqbJ0.js";import{t as k}from"./plugin-vue_export-helper-BDNMzG2s.js";import{G as A,H as j,J as M,L as N,W as P,X as F,Y as ee,_ as te,c as I,f as ne,i as re,l as L,m as R,q as z,s as B}from"./light-HRGXzirH.js";import{B as V,D as ie,E as H,I as U,K as ae,M as oe,O as W,R as se,U as G,W as K,X as ce,Y as le,d as ue,et as de,f as q,g as J,i as fe,j as pe,k as me,n as Y,q as X,t as he,u as ge,v as _e,w as ve,x as ye,y as Z}from"./ConfigProvider-CnssJFHh.js";import{a as be,n as xe}from"./light-Cecn3Zks.js";import{n as Se,t as Ce}from"./Add-BQl_g_f0.js";var we=/\s/;function Te(e){for(var t=e.length;t--&&we.test(e.charAt(t)););return t}var Q=/^\s+/;function Ee(e){return e&&e.slice(0,Te(e)+1).replace(Q,``)}var De=NaN,Oe=/^[-+]0x[0-9a-f]+$/i,ke=/^0b[01]+$/i,Ae=/^0o[0-7]+$/i,je=parseInt;function Me(e){if(typeof e==`number`)return e;if(de(e))return De;if(N(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=N(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=Ee(e);var n=ke.test(e);return n||Ae.test(e)?je(e.slice(2),n?2:8):Oe.test(e)?De:+e}var Ne=function(){return j.Date.now()},Pe=`Expected a function`,Fe=Math.max,Ie=Math.min;function Le(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,f=!0;if(typeof e!=`function`)throw TypeError(Pe);t=Me(t)||0,N(n)&&(u=!!n.leading,d=`maxWait`in n,a=d?Fe(Me(n.maxWait)||0,t):a,f=`trailing`in n?!!n.trailing:f);function p(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n),o}function m(e){return l=e,s=setTimeout(_,t),u?p(e):o}function h(e){var n=e-c,r=e-l,i=t-n;return d?Ie(i,a-r):i}function g(e){var n=e-c,r=e-l;return c===void 0||n>=t||n<0||d&&r>=a}function _(){var e=Ne();if(g(e))return v(e);s=setTimeout(_,h(e))}function v(e){return s=void 0,f&&r?p(e):(r=i=void 0,o)}function y(){s!==void 0&&clearTimeout(s),l=0,r=c=i=s=void 0}function b(){return s===void 0?o:v(Ne())}function x(){var e=Ne(),n=g(e);if(r=arguments,i=this,c=e,n){if(s===void 0)return m(c);if(d)return clearTimeout(s),s=setTimeout(_,t),p(c)}return s===void 0&&(s=setTimeout(_,t)),o}return x.cancel=y,x.flush=b,x}var Re=`Expected a function`;function ze(e,t,n){var r=!0,i=!0;if(typeof e!=`function`)throw TypeError(Re);return N(n)&&(r=`leading`in n?!!n.leading:r,i=`trailing`in n?!!n.trailing:i),Le(e,t,{leading:r,maxWait:t,trailing:i})}var Be=_e(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[_e(`&::-webkit-scrollbar`,{width:0,height:0})]),Ve=O({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=g(null);function t(e){e.currentTarget.offsetWidth<e.currentTarget.scrollWidth&&e.deltaY!==0&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=ne();return Be.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:Z,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return f(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),He=q(`error`,()=>(()=>{let e=G(`550229f72e94547c`);return e[0]||=c(`svg`,{viewBox:`0 0 48 48`,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`},[c(`g`,{stroke:`none`,"stroke-width":`1`,"fill-rule":`evenodd`},[c(`g`,{"fill-rule":`nonzero`},[c(`path`,{d:`M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z`})])])],-1)})()),Ue=q(`info`,()=>(()=>{let e=G(`1d7d3032c5ab60`);return e[0]||=c(`svg`,{viewBox:`0 0 28 28`,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`},[c(`g`,{stroke:`none`,"stroke-width":`1`,"fill-rule":`evenodd`},[c(`g`,{"fill-rule":`nonzero`},[c(`path`,{d:`M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z`})])])],-1)})()),We=q(`success`,()=>(()=>{let e=G(`2d4548faff86b4af`);return e[0]||=c(`svg`,{viewBox:`0 0 48 48`,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`},[c(`g`,{stroke:`none`,"stroke-width":`1`,"fill-rule":`evenodd`},[c(`g`,{"fill-rule":`nonzero`},[c(`path`,{d:`M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z`})])])],-1)})()),Ge=q(`warning`,()=>(()=>{let e=G(`eb9505c3181fdf04`);return e[0]||=c(`svg`,{viewBox:`0 0 24 24`,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`},[c(`g`,{stroke:`none`,"stroke-width":`1`,"fill-rule":`evenodd`},[c(`g`,{"fill-rule":`nonzero`},[c(`path`,{d:`M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z`})])])],-1)})());function Ke(e){let{lineHeight:t,borderRadius:n,fontWeightStrong:r,baseColor:i,dividerColor:a,actionColor:o,textColor1:s,textColor2:c,closeColorHover:l,closeColorPressed:u,closeIconColor:d,closeIconColorHover:f,closeIconColorPressed:p,infoColor:m,successColor:h,warningColor:g,errorColor:_,fontSize:v}=e;return{...be,fontSize:v,lineHeight:t,titleFontWeight:r,borderRadius:n,border:`1px solid ${a}`,color:o,titleTextColor:s,iconColor:c,contentTextColor:c,closeBorderRadius:n,closeColorHover:l,closeColorPressed:u,closeIconColor:d,closeIconColorHover:f,closeIconColorPressed:p,borderInfo:`1px solid ${L(i,I(m,{alpha:.25}))}`,colorInfo:L(i,I(m,{alpha:.08})),titleTextColorInfo:s,iconColorInfo:m,contentTextColorInfo:c,closeColorHoverInfo:l,closeColorPressedInfo:u,closeIconColorInfo:d,closeIconColorHoverInfo:f,closeIconColorPressedInfo:p,borderSuccess:`1px solid ${L(i,I(h,{alpha:.25}))}`,colorSuccess:L(i,I(h,{alpha:.08})),titleTextColorSuccess:s,iconColorSuccess:h,contentTextColorSuccess:c,closeColorHoverSuccess:l,closeColorPressedSuccess:u,closeIconColorSuccess:d,closeIconColorHoverSuccess:f,closeIconColorPressedSuccess:p,borderWarning:`1px solid ${L(i,I(g,{alpha:.33}))}`,colorWarning:L(i,I(g,{alpha:.08})),titleTextColorWarning:s,iconColorWarning:g,contentTextColorWarning:c,closeColorHoverWarning:l,closeColorPressedWarning:u,closeIconColorWarning:d,closeIconColorHoverWarning:f,closeIconColorPressedWarning:p,borderError:`1px solid ${L(i,I(_,{alpha:.25}))}`,colorError:L(i,I(_,{alpha:.08})),titleTextColorError:s,iconColorError:_,contentTextColorError:c,closeColorHoverError:l,closeColorPressedError:u,closeIconColorError:d,closeIconColorHoverError:f,closeIconColorPressedError:p}}var qe={name:`Alert`,common:B,self:Ke},{cubicBezierEaseInOut:$,cubicBezierEaseOut:Je,cubicBezierEaseIn:Ye}=R;function Xe({overflow:e=`hidden`,duration:t=`.3s`,originalTransition:n=``,leavingDelay:r=`0s`,foldPadding:i=!1,enterToProps:a=void 0,leaveToProps:o=void 0,reverse:s=!1}={}){let c=s?`leave`:`enter`,l=s?`enter`:`leave`;return[P(`&.fade-in-height-expand-transition-${l}-from,
 &.fade-in-height-expand-transition-${c}-to`,{...a,opacity:1}),P(`&.fade-in-height-expand-transition-${l}-to,
 &.fade-in-height-expand-transition-${c}-from`,{...o,opacity:0,marginTop:`0 !important`,marginBottom:`0 !important`,paddingTop:i?`0 !important`:void 0,paddingBottom:i?`0 !important`:void 0}),P(`&.fade-in-height-expand-transition-${l}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${$} ${r},
 opacity ${t} ${Je} ${r},
 margin-top ${t} ${$} ${r},
 margin-bottom ${t} ${$} ${r},
 padding-top ${t} ${$} ${r},
 padding-bottom ${t} ${$} ${r}
 ${n?`,${n}`:``}
 `),P(`&.fade-in-height-expand-transition-${c}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${$},
 opacity ${t} ${Ye},
 margin-top ${t} ${$},
 margin-bottom ${t} ${$},
 padding-top ${t} ${$},
 padding-bottom ${t} ${$}
 ${n?`,${n}`:``}
 `)]}var Ze=A(`alert`,`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[z(`border`,`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),M(`closable`,[A(`alert-body`,[z(`title`,`
 padding-right: 24px;
 `)])]),z(`icon`,{color:`var(--n-icon-color)`}),A(`alert-body`,{padding:`var(--n-padding)`},[z(`title`,{color:`var(--n-title-text-color)`}),z(`content`,{color:`var(--n-content-text-color)`})]),Xe({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),z(`icon`,`
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `),z(`close`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),M(`show-icon`,[A(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),M(`right-adjust`,[A(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),A(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[z(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[P(`& +`,[z(`content`,{marginTop:`9px`})])]),z(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),z(`icon`,{transition:`color .3s var(--n-bezier)`})]),Qe={...re.props,title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function},$e=O({name:`Alert`,inheritAttrs:!1,props:Qe,slots:Object,setup(e){let{mergedClsPrefixRef:t,mergedBorderedRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=le(e),a=re(`Alert`,`-alert`,Ze,qe,e,t),o=ye(`Alert`,i,t),s=x(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=a.value,{fontSize:r,borderRadius:i,titleFontWeight:o,lineHeight:s,iconSize:c,iconMargin:l,iconMarginRtl:u,closeIconSize:d,closeBorderRadius:f,closeSize:p,closeMargin:m,closeMarginRtl:h,padding:g}=n,{type:_}=e,{left:v,right:y}=V(l);return{"--n-bezier":t,"--n-color":n[F(`color`,_)],"--n-close-icon-size":d,"--n-close-border-radius":f,"--n-close-color-hover":n[F(`closeColorHover`,_)],"--n-close-color-pressed":n[F(`closeColorPressed`,_)],"--n-close-icon-color":n[F(`closeIconColor`,_)],"--n-close-icon-color-hover":n[F(`closeIconColorHover`,_)],"--n-close-icon-color-pressed":n[F(`closeIconColorPressed`,_)],"--n-icon-color":n[F(`iconColor`,_)],"--n-border":n[F(`border`,_)],"--n-title-text-color":n[F(`titleTextColor`,_)],"--n-content-text-color":n[F(`contentTextColor`,_)],"--n-line-height":s,"--n-border-radius":i,"--n-font-size":r,"--n-title-font-weight":o,"--n-icon-size":c,"--n-icon-margin":l,"--n-icon-margin-rtl":u,"--n-close-size":p,"--n-close-margin":m,"--n-close-margin-rtl":h,"--n-padding":g,"--n-icon-margin-left":v,"--n-icon-margin-right":y}}),c=r?se(`alert`,x(()=>e.type[0]),s,e):void 0,l=g(!0),u=()=>{let{onAfterLeave:t,onAfterHide:n}=e;t&&t(),n&&n()};return{rtlEnabled:o,mergedClsPrefix:t,mergedBordered:n,visible:l,handleCloseClick:()=>{Promise.resolve(e.onClose?.()).then(e=>{e!==!1&&(l.value=!1)})},handleAfterLeave:()=>{u()},mergedTheme:a,cssVars:r?void 0:s,themeClass:c?.themeClass,onRender:c?.onRender}},render(){return this.onRender?.(),e(),l(ge,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:t,$slots:n}=this,r={class:[`${t}-alert`,this.themeClass,this.closable&&`${t}-alert--closable`,this.showIcon&&`${t}-alert--show-icon`,!this.title&&this.closable&&`${t}-alert--right-adjust`,this.rtlEnabled&&`${t}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?(e(),i(`div`,p({key:1},p(this.$attrs,r)),[X(()=>this.closable&&(e(),l(ue,{clsPrefix:t,class:K(`${t}-alert__close`),onClick:this.handleCloseClick},null,8,[`clsPrefix`,`class`,`onClick`]))),X(()=>this.bordered&&(e(),i(`div`,{class:K(`${t}-alert__border`)},null,2))),X(()=>this.showIcon&&(e(),i(`div`,{class:K(`${t}-alert__icon`),"aria-hidden":`true`},[X(()=>ve(n.icon,()=>[(e(),l(U,{clsPrefix:t},{default:()=>{switch(this.type){case`success`:return e(),l(We,{key:3});case`info`:return e(),l(Ue,{key:4});case`warning`:return e(),l(Ge,{key:5});case`error`:return e(),l(He,{key:6});default:return null}}},1032,[`clsPrefix`]))]))],2))),c(`div`,{class:K([`${t}-alert-body`,this.mergedBordered&&`${t}-alert-body--bordered`])},[X(()=>H(n.header,n=>{let r=n||this.title;return r?(e(),i(`div`,{key:2,class:K(`${t}-alert-body__title`)},[X(()=>r)],2)):null})),X(()=>n.default&&(e(),i(`div`,{class:K(`${t}-alert-body__content`)},[X(()=>n.default())],2)))],2)],16)):null}},1032,[`onAfterLeave`])}}),et=O({name:`ChevronLeft`,render(){return(()=>{let e=G(`dfe229c2639b2082`);return e[0]||=c(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[c(`path`,{d:`M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z`,fill:`currentColor`})],-1)})()}}),tt=O({name:`ChevronRight`,render(){return(()=>{let e=G(`6ab04425f4fcb756`);return e[0]||=c(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[c(`path`,{d:`M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`,fill:`currentColor`})],-1)})()}});function nt(e,t=[],n){let r={};return Object.getOwnPropertyNames(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),Object.assign(r,n)}var rt=te(`n-tabs`),it={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},at=O({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:it,slots:Object,setup(e){let t=o(rt,null);return t||ce(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return e(),i(`div`,{class:K([`${this.mergedClsPrefix}-tab-pane`,this.class]),style:y(this.style)},[X(()=>this.$slots.default?.())],6)}}),ot=[`data-name`,`data-disabled`],st={internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean,...nt(it,[`displayDirective`])},ct=O({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:st,setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:s,tabClassRef:c,addTabClassRef:l,tabChangeIdRef:u,onBeforeLeaveRef:d,triggerRef:f,handleAdd:p,activateTab:m,handleClose:h}=o(rt);return{trigger:f,mergedClosable:x(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:s,tabClass:c,addTabClass:l,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&h(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){p();return}let{name:t}=e,r=++u.id;if(t!==n.value){let{value:i}=d;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&u.id===r&&m(t)}):m(t)}}}},render(){let{internalAddable:t,clsPrefix:n,name:a,disabled:o,label:s,tab:u,value:d,mergedClosable:f,trigger:m,$slots:{default:h}}=this,g=s??u;return e(),i(`div`,{class:K(`${n}-tabs-tab-wrapper`)},[this.internalLeftPadded?(e(),i(`div`,{key:0,class:K(`${n}-tabs-tab-pad`)},null,2)):X(()=>null),(e(),i(`div`,p({key:a,"data-name":a,"data-disabled":o?!0:void 0},p({class:[`${n}-tabs-tab`,d===a&&`${n}-tabs-tab--active`,o&&`${n}-tabs-tab--disabled`,f&&`${n}-tabs-tab--closable`,t&&`${n}-tabs-tab--addable`,t?this.addTabClass:this.tabClass],onClick:m===`click`?this.activateTab:void 0,onMouseenter:m===`hover`?this.activateTab:void 0,style:t?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),[c(`span`,{class:K(`${n}-tabs-tab__label`)},[t?(e(),i(r,{key:0},[c(`div`,{class:K(`${n}-tabs-tab__height-placeholder`)},`\xA0`,2),(e(),l(U,{clsPrefix:n},{default:()=>(e(),l(Ce))},1032,[`clsPrefix`]))],64)):(e(),i(r,{key:1},[h?(e(),i(r,{key:0},[X(()=>h())],64)):(e(),i(r,{key:1},[typeof g==`object`?(e(),i(r,{key:0},[X(()=>g)],64)):(e(),i(r,{key:1},[X(()=>fe(g??a))],64))],64))],64))],2),f&&this.type===`card`?(e(),l(ue,{key:0,clsPrefix:n,class:K(`${n}-tabs-tab__close`),onClick:this.handleClose,disabled:o},null,8,[`clsPrefix`,`class`,`onClick`,`disabled`])):X(()=>null)],16,ot))],2)}}),lt=A(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[P(`&.transition-disabled`,[A(`tabs-tab`,`
 transition: none !important;
 `),A(`tabs-nav-scroll-content`,`
 transition: none !important;
 `),A(`tabs-tab-pad`,`
 transition: none !important;
 `)]),M(`segment-type`,[A(`tabs-rail`,[P(`&.transition-disabled`,[A(`tabs-capsule`,`
 transition: none;
 `)])])]),M(`top`,[A(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),M(`left`,[A(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),M(`left, right`,`
 flex-direction: row;
 `,[A(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),A(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),M(`right`,`
 flex-direction: row-reverse;
 `,[A(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),A(`tabs-bar`,`
 left: 0;
 `)]),M(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[A(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),A(`tabs-bar`,`
 top: 0;
 `)]),A(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[A(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 left: 0;
 top: 0;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),A(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[A(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[M(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),P(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),M(`flex`,[A(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[A(`tabs-wrapper`,`
 width: 100%;
 `,[A(`tabs-tab`,`
 margin-right: 0;
 `)])])]),A(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[z(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),z(`prefix`,`padding-right: 16px;`),z(`suffix`,`padding-left: 16px;`)]),M(`top, bottom`,[P(`>`,[A(`tabs-nav`,[A(`tabs-nav-scroll-wrapper`,[P(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),P(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),M(`shadow-start`,[P(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),M(`shadow-end`,[P(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),M(`left, right`,[A(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),P(`>`,[A(`tabs-nav`,[A(`tabs-nav-scroll-wrapper`,[P(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),P(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),M(`shadow-start`,[P(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),M(`shadow-end`,[P(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),A(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[A(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[P(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),P(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `),P(`&.transition-disabled`,[P(`&::before, &::after`,`
 transition: none;
 `)])]),A(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),A(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),A(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),A(`tabs-tab`,`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[M(`disabled`,{cursor:`not-allowed`}),z(`close`,`
 margin-inline-start: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),z(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),A(`tabs-bar`,`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[P(`&.transition-disabled`,`
 transition: none;
 `),M(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),A(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),A(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[P(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),P(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),P(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),P(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),P(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),A(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),M(`line-type, bar-type`,[A(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[P(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),M(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),M(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),A(`tabs-nav`,[z(`prefix, suffix`,`
 border-color: var(--n-tab-border-color);
 `),A(`tabs-nav-scroll-content`,`
 border-color: var(--n-tab-border-color);
 `),M(`line-type`,[M(`top`,[z(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),A(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),A(`tabs-bar`,`
 bottom: -1px;
 `)]),M(`left`,[z(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),A(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),A(`tabs-bar`,`
 right: -1px;
 `)]),M(`right`,[z(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),A(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),A(`tabs-bar`,`
 left: -1px;
 `)]),M(`bottom`,[z(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),A(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),A(`tabs-bar`,`
 top: -1px;
 `)]),z(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),A(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),A(`tabs-bar`,`
 border-radius: 0;
 `)]),M(`card-type`,[z(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),A(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),A(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),A(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[M(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[z(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),ee(`disabled`,[P(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),M(`closable`,`padding-inline-end: 8px;`),M(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),M(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),M(`left, right`,`
 flex-direction: column; 
 `,[z(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),A(`tabs-wrapper`,`
 flex-direction: column;
 `),A(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[A(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),M(`top`,[M(`card-type`,[A(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),z(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),A(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[M(`active`,`
 border-bottom: 1px solid #0000;
 `)]),A(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),A(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),M(`left`,[M(`card-type`,[A(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),z(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),A(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[M(`active`,`
 border-right: 1px solid #0000;
 `)]),A(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),A(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),M(`right`,[M(`card-type`,[A(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),z(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),A(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[M(`active`,`
 border-left: 1px solid #0000;
 `)]),A(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),A(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),M(`bottom`,[M(`card-type`,[A(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),z(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),A(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[M(`active`,`
 border-top: 1px solid #0000;
 `)]),A(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),A(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])]),A(`tabs-scroll-button`,[M(`start`,`
 padding-left: 10px;
 padding-right: 6px;
 `),M(`end`,`
 padding-right: 10px;
 padding-left: 6px;
 `),M(`up`,`
 padding-bottom: 10px;
 `),M(`down`,`
 padding-top: 10px;
 `)])]),ut=O({name:`TabsButton`,props:{type:{type:String,default:`next`},mergedClsPrefix:{type:String,required:!0},vertical:Boolean,disabled:Boolean,rtl:Boolean,theme:Object,themeOverrides:Object,onClick:Function},setup(e){return{handleClick:()=>{e.disabled||e.onClick?.(e.type)}}},render(){let{mergedClsPrefix:t,disabled:n,type:r,vertical:i,rtl:a,theme:o,themeOverrides:s,handleClick:c}=this,u=r===`next`,d=i?u:a?!u:u;return e(),l(Y,{text:!0,disabled:n,size:`small`,theme:o,themeOverrides:s,onClick:c,class:K([`${t}-tabs-scroll-button`,!i&&r===`prev`&&`${t}-tabs-scroll-button--start`,!i&&r===`next`&&`${t}-tabs-scroll-button--end`,i&&r===`prev`&&`${t}-tabs-scroll-button--up`,i&&r===`next`&&`${t}-tabs-scroll-button--down`])},{icon:()=>(e(),l(U,{clsPrefix:t,style:y(i?{transform:`rotate(90deg)`}:void 0)},{default:()=>d?(e(),l(tt,{key:1})):(e(),l(et,{key:2}))},1032,[`clsPrefix`,`style`]))},1032,[`disabled`,`theme`,`themeOverrides`,`onClick`,`class`])}}),dt=ze,ft={...re.props,value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array],showScrollButton:Boolean,centerActiveTab:Boolean},pt=O({name:`Tabs`,props:ft,slots:Object,setup(e,{slots:t}){let{mergedClsPrefixRef:n,inlineThemeDisabled:r,mergedComponentPropsRef:i,mergedRtlRef:o}=le(e),s=ye(`Tabs`,o,n),c=x(()=>{let{placement:t}=e;return t===`start`?s?.value?`right`:`left`:t===`end`?s?.value?`left`:`right`:t}),l=re(`Tabs`,`-tabs`,lt,xe,e,n),u=g(null),d=g(null),f=g(null),p=g(null),v=g(null),y=g(null),S=g(null),w=g(!0),T=g(!0),E=me(e,[`labelSize`,`size`]),D=x(()=>E.value?E.value:i?.value?.Tabs?.size||`medium`),O=me(e,[`activeName`,`value`]),k=g(O.value??e.defaultValue??(t.default?ie(t.default())[0]?.props?.name:null)),A=pe(O,k),j={id:0},M=x(()=>{if(e.justifyContent&&e.type!==`card`)return{display:`flex`,justifyContent:e.justifyContent}});b(A,()=>{j.id=0,I(),a(()=>{L()})});function N(){let{value:e}=A;return e===null?null:u.value?.querySelector(`[data-name="${e}"]`)}function P(t){if(e.type===`card`)return;let{value:r}=f;if(!r)return;let i=r.style.opacity===`0`;if(t){let a=`${n.value}-tabs-bar--disabled`,{barWidth:o}=e,s=c.value;if(t.dataset.disabled===`true`?r.classList.add(a):r.classList.remove(a),[`top`,`bottom`].includes(s)){if(te([`top`,`maxHeight`,`height`]),typeof o==`number`&&t.offsetWidth>=o){let e=Math.floor((t.offsetWidth-o)/2)+t.offsetLeft;r.style.left=`${e}px`,r.style.maxWidth=`${o}px`}else r.style.left=`${t.offsetLeft}px`,r.style.maxWidth=`${t.offsetWidth}px`;r.style.width=`8192px`,i&&(r.style.transition=`none`),r.offsetWidth,i&&(r.style.transition=``,r.style.opacity=`1`)}else{if(te([`left`,`maxWidth`,`width`]),typeof o==`number`&&t.offsetHeight>=o){let e=Math.floor((t.offsetHeight-o)/2)+t.offsetTop;r.style.top=`${e}px`,r.style.maxHeight=`${o}px`}else r.style.top=`${t.offsetTop}px`,r.style.maxHeight=`${t.offsetHeight}px`;r.style.height=`8192px`,i&&(r.style.transition=`none`),r.offsetHeight,i&&(r.style.transition=``,r.style.opacity=`1`)}}}function ee(){if(e.type===`card`)return;let{value:t}=f;t&&(t.style.opacity=`0`)}function te(e){let{value:t}=f;if(t)for(let n of e)t.style[n]=``}function I(){if(e.type===`card`)return;let t=N();t?P(t):ee()}function ne(e,t,n,r){let i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),o=n?`left`:`top`,s=n?`right`:`bottom`,c=0;r?c=(a[o]+a[s])/2-(i[o]+i[s])/2:a[o]<i[o]?c=a[o]-i[o]:a[s]>i[s]&&(c=a[s]-i[s]),c!==0&&e.scrollBy({[o]:c,behavior:`smooth`})}function L(){let t=[`top`,`bottom`].includes(c.value),n=N();if(n){if(t){let r=y.value?.$el;if(!r)return;ne(r,n,t,e.centerActiveTab)}else{let{value:r}=S;if(!r)return;ne(r,n,t,e.centerActiveTab)}}}let R=g(null),z=0,B=null;function H(e){let t=R.value;if(t){z=e.getBoundingClientRect().height;let n=`${z}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};B?(r(),B(),B=null):B=r}}function U(e){let t=R.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(z,n)}px`};B?(B(),B=null,r()):B=r}}function ae(){let t=R.value;if(t){t.style.maxHeight=``,t.style.height=``;let{paneWrapperStyle:n}=e;if(typeof n==`string`)t.style.cssText=n;else if(n){let{maxHeight:e,height:r}=n;e!==void 0&&(t.style.maxHeight=e),r!==void 0&&(t.style.height=r)}}}let G={value:[]},K=g(`next`);function ce(e){let t=A.value,n=`next`;for(let r of G.value){if(r===t)break;if(r===e){n=`prev`;break}}K.value=n,ue(e)}function ue(t){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=e;n&&W(n,t),r&&W(r,t),i&&W(i,t),k.value=t}function de(t){let{onClose:n}=e;n&&W(n,t)}function q(e){if([`top`,`bottom`].includes(c.value)){let{value:t}=y;if(!t)return;let n=t.$el;if(!n)return;let r=n.offsetWidth,i=!!s?.value,a=e===`next`?r:-r;n.scrollBy({left:i?-a:a,behavior:`smooth`})}else{let{value:t}=S;if(!t)return;let n=t.offsetHeight,r=e===`next`?t.scrollTop+n:t.scrollTop-n;t.scrollTo({top:r,left:0,behavior:`smooth`})}}let J=!0;function fe(){let{value:e}=f;if(!e)return;J&&=!1;let t=`transition-disabled`;e.classList.add(t),I(),e.classList.remove(t)}let Y=g(null);function X({transitionDisabled:e}){let t=u.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=N();n&&Y.value&&(Y.value.style.width=`${n.offsetWidth}px`,Y.value.style.height=`${n.offsetHeight}px`,Y.value.style.transform=`translate(${n.offsetLeft}px, ${n.offsetTop}px)`,e&&Y.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}b([A],()=>{e.type===`segment`&&a(()=>{X({transitionDisabled:!1})})}),m(()=>{e.type===`segment`&&X({transitionDisabled:!0})});let he=0;function ge(t){if(t.contentRect.width===0&&t.contentRect.height===0||he===t.contentRect.width)return;he=t.contentRect.width;let{type:n}=e;(n===`line`||n===`bar`)&&(J||e.justifyContent?.startsWith(`space`))&&fe(),n!==`segment`&&Q(Te())}let _e=dt(ge,64);function ve(){let{type:t}=e;t===`line`||t===`bar`?fe():t===`segment`&&X({transitionDisabled:!0})}b([()=>e.justifyContent,()=>e.size],()=>{a(()=>{(e.type===`line`||e.type===`bar`)&&fe()})}),b([c,()=>s?.value],()=>{a(()=>{ve(),Q(Te(),{instantly:!0})})}),b(()=>e.type,()=>{a(()=>{let e=d.value;e&&(e.classList.add(`transition-disabled`),ve(),e.offsetWidth,e.classList.remove(`transition-disabled`))})});let Z=g(!1);function be(e){let{target:t,contentRect:{width:n,height:r}}=e,i=t.parentElement.parentElement.offsetWidth,a=t.parentElement.parentElement.offsetHeight,o=c.value;if(!Z.value)o===`top`||o===`bottom`?i<n&&(Z.value=!0):a<r&&(Z.value=!0);else{let{value:e}=v;if(!e)return;o===`top`||o===`bottom`?i-n>e.$el.offsetWidth&&(Z.value=!1):a-r>e.$el.offsetHeight&&(Z.value=!1)}Q(y.value?.$el||null)}let Se=dt(be,64);function Ce(){let{onAdd:t}=e;t&&t()}let we=g(!1);function Te(){let e=c.value;return(e===`top`||e===`bottom`?y.value?.$el:S.value)||null}function Q(e,t={instantly:!1}){if(!e)return;let n=t.instantly?p.value:null;n&&n.classList.add(`transition-disabled`);let r=c.value;if(r===`top`||r===`bottom`){let{scrollLeft:t,scrollWidth:n,offsetWidth:r}=e,i=Math.abs(t);w.value=i<=1,T.value=i+r>=n-1,we.value=r<n-1}else{let{scrollTop:t,scrollHeight:n,offsetHeight:r}=e;w.value=t<=1,T.value=t+r>=n-1,we.value=r<n-1}n&&(n.offsetWidth,n.classList.remove(`transition-disabled`))}let Ee=dt(e=>{Q(e.target)},64);_(rt,{triggerRef:C(e,`trigger`),tabStyleRef:C(e,`tabStyle`),tabClassRef:C(e,`tabClass`),addTabStyleRef:C(e,`addTabStyle`),addTabClassRef:C(e,`addTabClass`),paneClassRef:C(e,`paneClass`),paneStyleRef:C(e,`paneStyle`),mergedClsPrefixRef:n,typeRef:C(e,`type`),closableRef:C(e,`closable`),valueRef:A,tabChangeIdRef:j,onBeforeLeaveRef:C(e,`onBeforeLeave`),activateTab:ce,handleClose:de,handleAdd:Ce}),oe(()=>{I(),L()}),h(()=>{let{value:e}=p;if(!e)return;let{value:t}=n,r=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;w.value?e.classList.remove(r):e.classList.add(r),T.value?e.classList.remove(i):e.classList.add(i)});let De={syncBarPosition:()=>{I()},scrollToCurrentTab:()=>{L()}},Oe=()=>{X({transitionDisabled:!0})},ke=x(()=>{let{value:t}=D,{type:n}=e,r=`${t}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:a,closeIconColorHover:o,closeIconColorPressed:s,tabColor:c,tabBorderColor:u,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:_,closeSize:v,closeIconSize:y,closeColorHover:b,closeColorPressed:x,closeBorderRadius:S,[F(`panePadding`,t)]:C,[F(`tabPadding`,r)]:w,[F(`tabPaddingVertical`,r)]:T,[F(`tabGap`,r)]:E,[F(`tabGap`,`${r}Vertical`)]:O,[F(`tabTextColor`,n)]:k,[F(`tabTextColorActive`,n)]:A,[F(`tabTextColorHover`,n)]:j,[F(`tabTextColorDisabled`,n)]:M,[F(`tabFontSize`,t)]:N},common:{cubicBezierEaseInOut:P}}=l.value;return{"--n-bezier":P,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":N,"--n-tab-text-color":k,"--n-tab-text-color-active":A,"--n-tab-text-color-disabled":M,"--n-tab-text-color-hover":j,"--n-pane-text-color":d,"--n-tab-border-color":u,"--n-tab-border-radius":p,"--n-close-size":v,"--n-close-icon-size":y,"--n-close-color-hover":b,"--n-close-color-pressed":x,"--n-close-border-radius":S,"--n-close-icon-color":a,"--n-close-icon-color-hover":o,"--n-close-icon-color-pressed":s,"--n-tab-color":c,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":w,"--n-tab-padding-vertical":T,"--n-tab-gap":E,"--n-tab-gap-vertical":O,"--n-pane-padding-left":V(C,`left`),"--n-pane-padding-right":V(C,`right`),"--n-pane-padding-top":V(C,`top`),"--n-pane-padding-bottom":V(C,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":_}}),Ae=r?se(`tabs`,x(()=>`${D.value[0]}${e.type[0]}`),ke,e):void 0;return{mergedClsPrefix:n,mergedValue:A,renderedNames:new Set,segmentCapsuleElRef:Y,tabsPaneWrapperRef:R,tabsElRef:u,selfElRef:d,barElRef:f,addTabInstRef:v,xScrollInstRef:y,scrollWrapperElRef:p,addTabFixed:Z,tabWrapperStyle:M,handleNavResize:_e,mergedSize:D,handleScroll:Ee,handleTabsResize:Se,cssVars:r?void 0:ke,themeClass:Ae?.themeClass,animationDirection:K,renderNameListRef:G,yScrollElRef:S,handleSegmentResize:Oe,onAnimationBeforeLeave:H,onAnimationEnter:U,onAnimationAfterEnter:ae,onRender:Ae?.onRender,startReachedRef:w,endReachedRef:T,isOverflow:we,handleButtonClick:q,mergedTheme:l,rtlEnabled:s,mergedPlacement:c,...De}},render(){let{mergedClsPrefix:t,type:n,mergedPlacement:a,addTabFixed:o,addable:s,mergedSize:u,renderNameListRef:d,onRender:f,paneWrapperClass:m,paneWrapperStyle:h,startReachedRef:g,endReachedRef:_,isOverflow:v,showScrollButton:b,handleButtonClick:x,mergedTheme:S,rtlEnabled:C,$slots:{default:w,prefix:T,suffix:E}}=this;f?.();let D=w?ie(w()).filter(e=>e.type.__TAB_PANE__===!0):[],O=w?ie(w()).filter(e=>e.type.__TAB__===!0):[],k=!O.length,A=n===`card`,j=n===`segment`,M=!A&&!j&&this.justifyContent;d.value=[];let N=()=>{let n=(e(),i(`div`,{style:y(this.tabWrapperStyle),class:K(`${t}-tabs-wrapper`)},[M?X(()=>null):(e(),i(`div`,{key:1,class:K(`${t}-tabs-scroll-padding`),style:y(a===`top`||a===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`})},null,6)),k?(e(),i(r,{key:2},[X(()=>D.map((t,n)=>(d.value.push(t.props.name),_t((e(),l(ct,p(t.props,{internalCreatedByPane:!0,internalLeftPadded:n!==0&&(!M||M===`center`||M===`start`||M===`end`)}),ae(t.children?{default:t.children.tab}:void 0),1040,[`internalLeftPadded`]))))))],64)):(e(),i(r,{key:3},[X(()=>O.map((e,t)=>(d.value.push(e.props.name),_t(t!==0&&!M?gt(e):e))))],64)),!o&&s&&A?(e(),i(r,{key:4},[X(()=>ht(s,(k?D.length:O.length)!==0))],64)):X(()=>null),M?X(()=>null):(e(),i(`div`,{key:7,class:K(`${t}-tabs-scroll-padding`),style:y({width:`${this.tabsPadding}px`})},null,6)),A?X(()=>null):(e(),i(`div`,{key:9,ref:`barElRef`,class:K(`${t}-tabs-bar`)},null,2))],6));return e(),i(`div`,{ref:`tabsElRef`,class:K(`${t}-tabs-nav-scroll-content`)},[A&&s?(e(),l(J,{key:0,onResize:this.handleTabsResize},{default:()=>n},1032,[`onResize`])):(e(),i(r,{key:1},[X(()=>n)],64)),A?(e(),i(`div`,{key:2,class:K(`${t}-tabs-pad`)},null,2)):X(()=>null)],2)},P=j?`top`:a;return e(),i(`div`,{ref:`selfElRef`,class:K([`${t}-tabs`,this.themeClass,`${t}-tabs--${n}-type`,`${t}-tabs--${u}-size`,M&&`${t}-tabs--flex`,`${t}-tabs--${P}`,C&&`${t}-tabs--rtl`]),style:y(this.cssVars)},[c(`div`,{class:K([`${t}-tabs-nav--${n}-type`,`${t}-tabs-nav--${P}`,`${t}-tabs-nav`])},[X(()=>H(T,n=>n&&(e(),i(`div`,{class:K(`${t}-tabs-nav__prefix`)},[X(()=>n)],2)))),j?(e(),l(J,{key:0,onResize:this.handleSegmentResize},{default:()=>(e(),i(`div`,{class:K(`${t}-tabs-rail`),ref:`tabsElRef`},[c(`div`,{class:K(`${t}-tabs-capsule`),ref:`segmentCapsuleElRef`},[c(`div`,{class:K(`${t}-tabs-wrapper`)},[c(`div`,{class:K(`${t}-tabs-tab`)},null,2)],2)],2),k?(e(),i(r,{key:0},[X(()=>D.map((t,n)=>(d.value.push(t.props.name),e(),l(ct,p(t.props,{internalCreatedByPane:!0,internalLeftPadded:n!==0}),ae(t.children?{default:t.children.tab}:void 0),1040,[`internalLeftPadded`]))))],64)):(e(),i(r,{key:1},[X(()=>O.map((e,t)=>(d.value.push(e.props.name),t===0?e:gt(e))))],64))],2))},1032,[`onResize`])):(e(),i(r,{key:1},[X(()=>b&&v&&(e(),l(ut,{mergedClsPrefix:t,type:`prev`,vertical:P===`left`||P===`right`,disabled:g,rtl:!!C,theme:S.peers.Button,themeOverrides:S.peerOverrides.Button,onClick:x},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`]))),(e(),l(J,{onResize:this.handleNavResize},{default:()=>(e(),i(`div`,{class:K(`${t}-tabs-nav-scroll-wrapper`),ref:`scrollWrapperElRef`},[[`top`,`bottom`].includes(P)?(e(),l(Ve,{key:0,ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:N},1032,[`onScroll`])):(e(),i(`div`,{key:1,class:K(`${t}-tabs-nav-y-scroll`),onScroll:this.handleScroll,ref:`yScrollElRef`},[X(()=>N())],42,[`onScroll`]))],2))},1032,[`onResize`])),X(()=>b&&v&&(e(),l(ut,{mergedClsPrefix:t,type:`next`,vertical:P===`left`||P===`right`,disabled:_,rtl:!!C,theme:S.peers.Button,themeOverrides:S.peerOverrides.Button,onClick:x},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`])))],64)),o&&s&&A?(e(),i(r,{key:2},[X(()=>ht(s,!0))],64)):X(()=>null),X(()=>H(E,n=>n&&(e(),i(`div`,{class:K(`${t}-tabs-nav__suffix`)},[X(()=>n)],2))))],2),X(()=>k&&(this.animated&&(P===`top`||P===`bottom`)?(e(),i(`div`,{key:1,ref:`tabsPaneWrapperRef`,style:y(h),class:K([`${t}-tabs-pane-wrapper`,m])},[X(()=>mt(D,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection))],6)):mt(D,this.mergedValue,this.renderedNames)))],6)}});function mt(t,r,i,a,o,s,c){let u=[];return t.forEach(e=>{let{name:t,displayDirective:n,"display-directive":a}=e.props,o=e=>n===e||a===e,s=r===t;if(e.key!==void 0&&(e.key=t),s||o(`show`)||o(`show:lazy`)&&i.has(t)){i.has(t)||i.add(t);let n=!o(`if`);u.push(n?T(e,[[D,s]]):e)}}),c?(e(),l(n,{name:`${c}-transition`,onBeforeLeave:a,onEnter:o,onAfterEnter:s},{default:()=>u},1032,[`name`,`onBeforeLeave`,`onEnter`,`onAfterEnter`])):u}function ht(t,n){return e(),l(ct,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:n,disabled:typeof t==`object`&&t.disabled},null,8,[`internalLeftPadded`,`disabled`])}function gt(e){let n=t(e);return n.props?n.props.internalLeftPadded=!0:n.props={internalLeftPadded:!0},n}function _t(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var vt=JSON.parse(`[{"q":"Zafaria is home to what cultures?","a":"Gorillas, Zebras, Lions"},{"q":"Which of these locations is not in Wizard City?","a":"Digmore Station"},{"q":"What book does Professor Drake send you to the library to check out?","a":"Book on the Wumpus"},{"q":"What is the title of the book that is floating around the Wizard City Library?","a":"Basic Wizarding & Proper Care of Familiars"},{"q":"How many worlds of The Spiral are unlocked as of May 21st, 2014?","a":"12"},{"q":"Why are the Gobblers so afraid to go home?","a":"Witches"},{"q":"Merle Ambrose is originally from which world?","a":"Avalon"},{"q":"Who sells Valentine's Day items in Wizard City?","a":"Valentina Heartsong"},{"q":"Who is the Registrar of Pigswick Academy?","a":"Mrs. Dowager"},{"q":"Who guards the entrance to Unicorn Way?","a":"Private Stillson"},{"q":"What's the name of the balance tree?","a":"Niles"},{"q":"What can be used to diminish the Nirini's powers in Krokotopia?","a":"Flame Gems"},{"q":"Why are the pixies and faeries on Unicorn Way evil?","a":"Rattlebones corrupted them."},{"q":"Which below are NOT a type of Oni in MooShu?","a":"Ruby"},{"q":"Who prophesizes this? \\"The mirror will break, The horn will call, From the shadows I strike , And the skies will fall...\\"","a":"Morganthe"},{"q":"Who is the Nameless Knight?","a":"Sir Malory"},{"q":"What color is the door inside the boys dormroom?","a":"Red"},{"q":"What is the shape of the pink piece in potion motion?","a":"Heart"},{"q":"Which one of these are not a symbol on the battle sigil?","a":"Wand"},{"q":"What did Prospector Zeke lose track of in MooShu?","a":"Blue Oysters"},{"q":"Which is the only school left standing in Dragonspyre?","a":"Fire"},{"q":"What is Professor Falmea's favorite food?","a":"Pasta Arrabiata"},{"q":"What hand does Lady Oriel hold her wand in?","a":"Trick question, she has a sword."},{"q":"What determines the colors of the manders in Krok?","a":"Where they come from and their school of focus."},{"q":"What school is the spell Dark Nova","a":"Shadow"},{"q":"How long do you have to wait to join a new match after fleeing in PVP?","a":"5 minutes"},{"q":"Who is in the top level of the Tower of the Helephant?","a":"Lyon Lorestriker"},{"q":"What type of rank 8 spell is granted to Death students at level 58?","a":"Damage + DoT"},{"q":"Which of these are not a lore spell?","a":"Fire Dragon"},{"q":"An unmodified Sun Serpent does what?","a":"900   1000 Fire Damage + 300 Fire Damage to entire team"},{"q":"Which of these is NOT a Zafaria Anchor Stone?","a":"Rasik Anchor Stone"},{"q":"Who is the Bear King of Grizzleheim?","a":"Valgard Goldenblade"},{"q":"What is the name of the secret society in Krokotopia","a":"Order of the Fang"},{"q":"What is unique about Falmea's Classroom?","a":"There are scorch marks on the ceiling"},{"q":"In Grizzleheim, the Ravens want to bring about:","a":"The Everwinter, to cover the world in ice:"},{"q":"What is the name of the new dance added with Khrysalis?","a":"The bee dance"},{"q":"What is the name of the book stolen from the Royal Museum?","a":"The Krokonomicon"},{"q":"Which Aztecan ponders the Great Questions of Life?","a":"Philosoraptor"},{"q":"What does the Time Ribbon Protect against?","a":"Time Flux"},{"q":"What school is the Gurtok Demon focused on?","a":"Balance"},{"q":"Shaka Zebu is known best as:","a":"The Greatest Living Zebra Warrior"},{"q":"Who is Bill Tanner's sister?","a":"Sarah Tanner"},{"q":"What is the shape on the weather vanes in the Shopping District?","a":"Half moon/moon"},{"q":"What book was Anna Flameright accused of stealing?","a":"Advanced Flameology"},{"q":"What level must you be to wear Dragonspyre crafted clothing?","a":"33"},{"q":"What did Abigail Dolittle accuse Wadsworth of stealing?","a":"Genuine Imitation Golden Ruby"},{"q":"What was the name of the powerful Grendel Shaman who sealed the runic doors?","a":"Thulinn"},{"q":"Who Is NOT a member of the Council of Light?","a":"Cyrus Drake"},{"q":"Sir Edward Halley is the Spiral's most famous:","a":"Aztecosaurologist"},{"q":"Who is the King of the Burrowers?","a":"Pyat MourningSword"},{"q":"Which Queen is mentioned in the Marleybone book \\"The Golden Age\\"?","a":"Ellen"},{"q":"How many portal summoning candles are in the Burial Mound?","a":"Three"},{"q":"Kirby Longspear was once a student of which school of magic?","a":"Death"},{"q":"The Swordsman Destreza was killed by:","a":"A Gorgon"},{"q":"Arthur Wethersfield is A:..","a":"Dog"},{"q":"What course did Herold Digmoore study?","a":"Ancient Myths for Parliament"},{"q":"What is flying around in Regent's Square?","a":"Newspapers"},{"q":"What time of day is it always in Marleybone?","a":"Night"},{"q":"What two names are on the Statues in the Marleybone cathedral?","a":"Saint Bernard and Saint Hubert"},{"q":"What event is Abigail Doolittle sending out invitations for?","a":"Policeman's Ball"},{"q":"What sort of beverage is served in Air Dales Hideaway?","a":"Root Beer"},{"q":"What is a very common last name of the cats in Marleybone?","a":"O'Leary"},{"q":"Who is not an officer you'll find around Marleybone?","a":"Officer Digmore"},{"q":"What style of artifacts are in the Royal Museum?","a":"Krokotopian"},{"q":"What initials were on the doctor's glove?","a":"XX"},{"q":"Who is the dangerous criminal that is locked up, but escapes from Newgate Prison?","a":"Meowiarty"},{"q":"What color are the Marleybone mailboxes?","a":"Red"},{"q":"Which of these folks can you find in the Royal Museum?","a":"Clancy Pembroke"},{"q":"Which is not a street in Regent's Square?","a":"Fleabitten Ave"},{"q":"What is Sgt. Major Talbot's full name?","a":"Sylvester Quimby Talbot III"},{"q":"What time does the clock always read in Marleybone?","a":"1:55"},{"q":"Which symbol is not on the stained glass window in Regent's Square?","a":"A Tennis Ball"},{"q":"What transports you from place to place in Marleybone?","a":"Hot Air Balloons"},{"q":"What did Prospector Zeke lose in Marleybone?","a":"The Stray Cats"},{"q":"Who is the Emperor of Mooshu's Royal Guard?","a":"Noboru Akitame"},{"q":"In what world would you find the Spider Temple","a":"Zafaria"},{"q":"Where is the only pure fire in the Spiral found?","a":"Wizard City"},{"q":"King Neza is Zenzen Seven Star's:?","a":"Grandfather"},{"q":"What was Ponce de Gibbon looking for in Azteca?","a":"The Water of Life"},{"q":"In Reagent's Square, the Professor is standing in front of a:","a":"Telegraph Box"},{"q":"Hrundle Fjord is part of what section of Grizzleheim?","a":"Wintertusk"},{"q":"King Axaya Knifemoon needs what to unify the people around him?","a":"The Badge of Leadership"},{"q":"Which villain terrorizes the fair maidens of Marleybone?","a":"Jaques the Scatcher"},{"q":"Who gives you permission to ride the boat to the Krokosphinx?","a":"Sergent Major Talbot"},{"q":"Who is the only person who knows how to enter the Tomb of Storms?","a":"Hetch Al'Dim"},{"q":"Who was ordered to guard the Sword of Kings?","a":"The Knights of the Silver Rose"},{"q":"Who did Falynn Greensleeves fall in love with?","a":"Sir Malick de Logres"},{"q":"Who was the greatest Aquilan Gladiator of all time?","a":"Dimachaerus"},{"q":"Who haunts the Night Warrens?","a":"Nosferabbit"},{"q":"Who tells you how to get to Aquila?","a":"Harold Argleston"},{"q":"Who takes you across the River of Souls?","a":"Charon"},{"q":"Thaddeus Price is the Pigswick Academy Professor of what school?","a":"Tempest"},{"q":"Who asks you to find Khrysanthemums?","a":"Eloise Merryweather"},{"q":"What is used to travel to the Isle of Arachnis?","a":"Ice Archway"},{"q":"Who makes the harpsicord for Shelus?","a":"Gretta Darkkettle"},{"q":"Morganthe got the Horned Crown from the Spriggan:","a":"Gisela"},{"q":"Sumner Fieldgold twice asks you to recover what for him?","a":"Shrubberies"},{"q":"Who needs the healing potion from Master Yip?","a":"Binh Hoa"},{"q":"Who is Haraku Yip's apprentice?","a":"Binh Hoa"},{"q":"Who taunts you with: \\"Prepare to be broken, kid!\\"","a":"Clanker"},{"q":"What badge do you earn by defeating 100 Samoorai?","a":"Yojimbo"},{"q":"Who thinks you are there to take their precious feathers?","a":"Takeda Kanryu"},{"q":"The Swallows of Caliburn migrate to Avalon from where each year?","a":"Zafaria and Marleybone"},{"q":"Who tells you: \\"A shield is just as much a weapon as the sword.\\"","a":"Mavra Flamewing"},{"q":"Who tells you to speak these words only unto your mentor: \\"Meena Korio Jajuka!\\"","a":"Priya the Dryad"},{"q":"Who tries to raise a Gorgon Army?","a":"Phorcys"},{"q":"Who taunts you with: \\"Wizard, you will know the meaning of the word pain after we battle!\\"","a":"Aiuchi"},{"q":"What special plant was Barley developing in his Garden?","a":"Cultivated Woodsmen"},{"q":"Who helps Morganthe find the Horn of Huracan?","a":"Belloq"},{"q":"Who taunts: Why I oughta knock you to the moon, you pesky little creep!","a":"Mugsy"},{"q":"What does Silenus name you once you've defeated Hades?","a":"Glorious Golden Archon"},{"q":"In Azteca, Morganthe enlisted the help of the:","a":"The Black Sun Necromancers"},{"q":"Where has Pharenor been imprisoned?","a":"Skythorn Tower"},{"q":"Who grants the first Shadow Magic spell?","a":"Sophia DarkSide"},{"q":"Mortis can teach you this.","a":"Tranquilize"},{"q":"What term best fits Sun Magic Spells?","a":"Enchantment"},{"q":"What type of spells are Ice, Fire, and Storm?","a":"Elemental"},{"q":"Who can teach you the Life Shield Spell?","a":"Sabrina Greenstar"},{"q":"Mildred Farseer teaches you what kind of spell?","a":"Dispels"},{"q":"What term best fits Star Magic Spells?","a":"Auras"},{"q":"Who teaches you balance magic?","a":"Alhazred"},{"q":"What isn't a shadow magic spell?","a":"Ebon Ribbons"},{"q":"Which spell can't be cast while polymorphed as a Gobbler?","a":"Pie in the sky"},{"q":"If you can cast Storm Trap, Wild Bolt, Catalan, and the Tempest spell, what are you polymorphed as?","a":"Ptera"},{"q":"How many pips does it cost to cast Stormzilla?","a":"5"},{"q":"Which spell would not be very effective when going for the elixir vitae Badge?","a":"Entangle"},{"q":"Cassie the Ponycorn teaches this kind of spell:","a":"Prism"},{"q":"What level of spell does Enya Firemoon Teach?","a":"80"},{"q":"If you're a storm wizard with 4 power pips and 3 regular pips, how powerful would your supercharge charm be?","a":"110%"},{"q":"How many pips does it cost to cast Dr. Von's Monster?","a":"9"},{"q":"What does Forsaken Banshee do?","a":"375 damage plus a hex trap"},{"q":"Which Fire spell both damages and heals over time?","a":"Power Link"},{"q":"Ether Shield protects against what?","a":"Life and Death attacks"},{"q":"Tish'Mah specializes in spells that mostly affect these:","a":"Minions"},{"q":"Historian Gonzago is on a stage, who isn't in the audience?","a":"Giafra"},{"q":"Historian Gonzago sends you on a \\"Paper Chase,\\" who do you talk to during that quest?","a":"Magdalena"},{"q":"How many Mechanical Birds do you collect in Sivella?","a":"5"},{"q":"The Mooshu Tower in Sivella is a replica of what?","a":"Tower of Serenity"},{"q":"What are Albus and Carbo?","a":"Armada Commanders"},{"q":"What color of Windstone do you find in Marco Pollo's Tomb?","a":"Blue"},{"q":"What kind of disguise do you wear in Sivella?","a":"Clockwork"},{"q":"What shows Steed you're part of the Resistence?","a":"Amulet"},{"q":"What type of boat do you use to get from the docks to Sivella?","a":"Gondola"},{"q":"What type of item does Prospector Zeke want you to find in Valencia?","a":"Birds"},{"q":"What's the name of a librarian in Sivella?","a":"Grassi"},{"q":"Where do you find the Tomb of Marco Pollo?","a":"Granchia"},{"q":"Which one isn't a Scholar by name?","a":"Caresini"},{"q":"Which world doesn't have a pillar in Sivella?","a":"Monquista"},{"q":"Who do you find in the Lecture Hall of Sivella?","a":"Ridolfo"},{"q":"Who does Steed send you to speak to in Sivella?","a":"Thaddeus"},{"q":"Who reads the inscription on Marleybone's Tower?","a":"Ratbeard"},{"q":"Why does Steed want you to attack Armada Ships?","a":"Make a Disguise"},{"q":"You need a good eye to save these in Granchia...","a":"Art Objects"},{"q":"You won't find this kind of Armada Troop in Sivella!","a":"Battle Angel"},{"q":"Who is the Fire School professor?","a":"Dalia Falmea"},{"q":"What school does Malorn Ashthorn think is the best?","a":"Death"},{"q":"What is the name of the bridge in front of the Cave to Nightside?","a":"Rainbow Bridge"},{"q":"What does every Rotting Fodder in the Dark Caves carry with them?","a":"A spade"},{"q":"Who is the Wizard City mill foreman?","a":"Sohomer Sunblade"},{"q":"What is Diego's full name?","a":"Diego Santiago Quariquez Ramirez the Third"},{"q":"What is something that the Gobblers are NOT stockpiling in Colossus Way?","a":"Broccoli"},{"q":"Where is Sabrina Greenstar?","a":"Fairegrounds"},{"q":"Who sang the Dragons, Tritons and Giants into existance?","a":"Bartleby"},{"q":"What are the school colors of Balance?","a":"Tan and Maroon"},{"q":"What are the main colors for the Myth School?","a":"Blue and Gold"},{"q":"What school is all about Creativity?","a":"Storm"},{"q":"What is the gemstone for Balance?","a":"Citrine"},{"q":"Who resides in the Hedge Maze?","a":"Lady Oriel"},{"q":"Who taught Life Magic before Moolinda Wu?","a":"Sylvia Drake"},{"q":"Who is the Princess of the Seraphs?","a":"Lady Oriel"},{"q":"What is the name of the school newspaper? Boris Tallstaff knows...","a":"Ravenwood Bulletin"},{"q":"What is the name of the grandfather tree?","a":"Bartleby"},{"q":"What is Mindy's last name (she's on Colossus Blvd)?","a":"Pixiecrown"},{"q":"What is the name of the Ice Tree in Ravenwood?","a":"Kelvin"},{"q":"What does Lethu Blunthoof says about Ghostmanes?","a":"You never can tell with them!"},{"q":"Sir Reginal Baxby's cousin is:","a":"Mondli Greenhoof"},{"q":"Baobab is governed by:","a":"A Council of three councilors."},{"q":"Who is the missing prince?","a":"Tiziri Silvertusk"},{"q":"Umlilo Sunchaser hired who as a local guide?","a":"Msizi Redband"},{"q":"Inyanga calls Umlio a:","a":"Fire feather"},{"q":"The Fire Lion Ravagers are led by:","a":"Nergal the Burned Lion"},{"q":"Unathi Nightrunner is:","a":"A councilor of Baobab."},{"q":"Who is not one of the Zebu Kings:","a":"Zaffe Zoffer"},{"q":"Rasik Pridefall is:","a":"An Olyphant from Stone Town."},{"q":"Esop Thornpaw gives you a magic:","a":"Djembe Drum"},{"q":"The Inzinzebu Bandits are harassing the good merchants in:","a":"Baobab Market"},{"q":"Vir Goodheart is an assistant to:","a":"Rasik Pridefall"},{"q":"Belloq is first found in:","a":"The Sook"},{"q":"Zebu Blackstripes legendary blade was called:","a":"The Sword of the Duelist"},{"q":"Jambo means:","a":"Hello."},{"q":"Zebu Blackstripes legendary blade was forged:","a":"In the halls of Valencia"},{"q":"Koyate Ghostmane accuses the player of:","a":"Being a thief"},{"q":"Who are Hannibal Onetusk's brother and co-pilot?","a":"Mago and Sobaka"},{"q":"Zamunda's great assassin is known as:","a":"Karl the Jackal"}]`),yt=`
// ==UserScript==
// @name         Wizard101 皇冠答题助手
// @namespace    subata
// @version      1.0.0
// @description  在 Wizard101 答题页面显示答案并跟踪完成进度
// @match        https://www.wizard101.com/quiz/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

var questAddress = [
    'wizard101-magical-trivia',
    'wizard101-adventuring-trivia',
    'wizard101-conjuring-trivia',
    'wizard101-marleybone-trivia',
    'wizard101-mystical-trivia',
    'wizard101-spellbinding-trivia',
    'wizard101-spells-trivia',
    'pirate101-valencia-trivia',
    'wizard101-wizard-city-trivia',
    'wizard101-zafaria-trivia'
];

var QUESTIONS = __QUESTIONS__;
var basePath = 'https://www.wizard101.com/quiz/trivia/game/';

var STYLE_PANEL = 'display:flex;flex-direction:column;width:280px;padding:20px 0;position:fixed;text-align:center;bottom:20%;right:1%;background:rgb(57 57 57 / 85%);z-index:1000;border-radius:10px;color:#fff;user-select:none;overflow:hidden;';
var STYLE_H = 'height:30px;line-height:20px;font-size:21px;color:#fff;font-weight:normal;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding:0 30px;';
var STYLE_BTN = 'width:100%;position:relative;height:24px;line-height:24px;text-align:center;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding:0 15px;box-sizing:border-box;';

var container = null;
var answerPanel = null;

var userName = '' + (function(){
    var el = document.getElementById('userNameOverflow');
    return el ? el.innerText : '';
})() || 'guest';

function getKey(){ return userName + '_quiz'; }
function loadDone(){
    try {
        var v = JSON.parse(localStorage.getItem(getKey()));
        return Object.prototype.toString.call(v) === '[object Array]' ? v : [];
    } catch (e) { return []; }
}
function saveDone(list){
    try { localStorage.setItem(getKey(), JSON.stringify(list)); } catch (e) {}
}

function main(){
    var quiz = document.getElementsByClassName('quizQuestion');
    var btnSub = document.getElementsByClassName('kiaccountsbuttongreen');
    var href = 'https://www.wizard101.com/game/earn-crowns';
    var isResult = (quiz.length === 0 && btnSub.length > 0 && btnSub[0].innerText === 'TAKE ANOTHER QUIZ!') || window.location.href === href;
    var isSummary = window.location.href.indexOf(basePath) === 0 && btnSub.length === 0 && quiz.length === 0;

    if (isResult || isSummary) {
        checkFinished();
        buildNav();
    } else if (document.getElementById('nextQuestion')) {
        showAnswer();
    }
}

function checkFinished(){
    var done = loadDone();
    var slug = (window.location.href.split('/')).pop();
    if (questAddress.indexOf(slug) >= 0 && done.indexOf(slug) < 0) { done.push(slug); }
    if (done.length >= 10) { done = []; }
    saveDone(done);
}

function buildNav(){
    cleanup();
    var done = loadDone();
    container = document.createElement('div');
    container.style.cssText = STYLE_PANEL;

    var title = document.createElement('div');
    title.style.cssText = STYLE_H;
    title.innerText = 'Wizard101 答题进度';
    container.appendChild(title);

    var noTitle = document.createElement('div');
    noTitle.style.cssText = STYLE_H;
    noTitle.style.color = '#00ceff';
    noTitle.innerText = '未完成';
    container.appendChild(noTitle);

    questAddress.forEach(function(slug, i){
        var btn = document.createElement('div');
        btn.style.cssText = STYLE_BTN;
        btn.innerText = (i + 1) + '. ' + slug;
        btn.onclick = function(){ window.location.href = basePath + slug; };
        btn.onmouseenter = function(){ btn.style.transform = 'scale(1.04)'; btn.style.background = '#000'; };
        btn.onmouseleave = function(){ btn.style.transform = 'scale(1)'; btn.style.background = 'none'; };
        container.appendChild(btn);
    });

    var doneTitle = document.createElement('div');
    doneTitle.style.cssText = STYLE_H;
    doneTitle.style.color = '#00ff6c';
    doneTitle.innerText = '已完成';
    container.appendChild(doneTitle);

    done.forEach(function(slug, i){
        var btn = document.createElement('div');
        btn.style.cssText = STYLE_BTN;
        btn.style.color = '#ffe200';
        btn.style.textDecoration = 'line-through';
        btn.innerText = (i + 1) + '. ' + slug;
        container.appendChild(btn);
    });

    document.body.appendChild(container);
}

function showAnswer(){
    cleanup();
    var quiz = document.getElementsByClassName('quizQuestion');
    var q = quiz.length > 0 ? quiz[0].innerText.trim() : '';
    var a = QUESTIONS[q] || '未找到';

    answerPanel = document.createElement('div');
    answerPanel.style.cssText = STYLE_PANEL;
    answerPanel.style.bottom = '5%';

    var label = document.createElement('div');
    label.style.cssText = STYLE_H;
    label.style.fontSize = '24px';
    label.innerText = '答案:';

    var text = document.createElement('div');
    text.style.cssText = STYLE_H;
    text.style.fontSize = '20px';
    text.innerText = a;

    answerPanel.appendChild(label);
    answerPanel.appendChild(text);
    document.body.appendChild(answerPanel);
}

function cleanup(){
    if (container) { container.remove(); container = null; }
    if (answerPanel) { answerPanel.remove(); answerPanel = null; }
}

function run(){
    var isMobile = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i.test(navigator.userAgent || '');
    setTimeout(main, isMobile ? 1500 : 500);
}
run();
`,bt={name:`Quiz`,components:{NAlert:$e,NButton:Y,NConfigProvider:he,NInput:Se,NTabPane:at,NTabs:pt},data(){return{tab:`bank`,keyword:``,open:new Set,randomItem:null,copied:!1,dark:!1,questions:vt}},computed:{filtered(){let e=this.keyword.trim().toLowerCase();return e?this.questions.filter(t=>t.q.toLowerCase().includes(e)||t.a.toLowerCase().includes(e)):this.questions},scriptText(){let e={};return this.questions.forEach(t=>{e[t.q]=t.a}),yt.replace(`__QUESTIONS__`,JSON.stringify(e))}},methods:{toggle(e){let t=new Set(this.open);t.has(e)?t.delete(e):t.add(e),this.open=t},randomOne(){if(!this.questions.length)return;let e=this.questions[Math.floor(Math.random()*this.questions.length)];this.randomItem=e,this.keyword=``,this.tab=`bank`},async copyScript(){let e=this.scriptText;try{await navigator.clipboard.writeText(e),this.copied=!0}catch{let t=document.createElement(`textarea`);t.value=e,t.style.position=`fixed`,t.style.opacity=`0`,document.body.appendChild(t),t.select();try{document.execCommand(`copy`),this.copied=!0}catch{this.copied=!1}document.body.removeChild(t)}this.copied&&setTimeout(()=>{this.copied=!1},2e3)}},mounted(){typeof document<`u`&&(this._observer=new MutationObserver(()=>{this.dark=document.documentElement.classList.contains(`dark`)}),this._observer.observe(document.documentElement,{attributes:!0}))},unmounted(){this._observer&&this._observer.disconnect()}},xt={class:`quiz`},St={class:`toolbar`},Ct={key:0,class:`random-box`},wt={class:`random-q`},Tt={class:`random-a`},Et={class:`q-list`},Dt=[`onClick`],Ot={class:`q-head`},kt={class:`q-index`},At={class:`q-text`},jt={class:`q-more`},Mt={key:0,class:`q-answer`},Nt={key:1,class:`empty`},Pt={class:`script-tip`},Ft={class:`code-box`},It={class:`guide`};function Lt(t,n,a,o,f,p){let m=w(`n-input`),h=w(`n-button`),g=w(`n-alert`),_=w(`n-tab-pane`),y=w(`n-tabs`),b=w(`n-config-provider`);return e(),l(b,{theme:f.dark?t.darkTheme:null},{default:S(()=>[c(`div`,xt,[d(y,{value:f.tab,"onUpdate:value":n[1]||=e=>f.tab=e,type:`line`,animated:``},{default:S(()=>[d(_,{name:`bank`,tab:`题库对照`},{default:S(()=>[c(`div`,St,[d(m,{value:f.keyword,"onUpdate:value":n[0]||=e=>f.keyword=e,clearable:``,placeholder:`输入关键词搜索（题目或答案）`,style:{width:`360px`},size:`small`},null,8,[`value`]),d(h,{size:`small`,tertiary:``,onClick:p.randomOne},{default:S(()=>[...n[2]||=[s(`随机一题`,-1)]]),_:1},8,[`onClick`])]),f.randomItem?(e(),i(`div`,Ct,[d(g,{type:`info`,"show-icon":!1},{default:S(()=>[c(`div`,wt,v(f.randomItem.q),1),c(`div`,Tt,`答案：`+v(f.randomItem.a),1)]),_:1})])):u(``,!0),c(`div`,Et,[(e(!0),i(r,null,E(p.filtered,(t,n)=>(e(),i(`div`,{key:t.q,class:`q-item`,onClick:e=>p.toggle(n)},[c(`div`,Ot,[c(`span`,kt,v(n+1),1),c(`span`,At,v(t.q),1),c(`span`,jt,v(f.open.has(n)?`收起`:`答案`),1)]),f.open.has(n)?(e(),i(`div`,Mt,`答案：`+v(t.a),1)):u(``,!0)],8,Dt))),128))]),p.filtered.length===0?(e(),i(`div`,Nt,`没有匹配的题目`)):u(``,!0)]),_:1}),d(_,{name:`script`,tab:`油猴脚本`},{default:S(()=>[c(`div`,Pt,[n[3]||=c(`span`,null,`把下面的脚本装进油猴（Tampermonkey）后，打开官方答题页面会自动漂浮显示答案与进度。脚本已内置全部题目，可离线使用。`,-1),d(h,{type:`primary`,size:`small`,onClick:p.copyScript},{default:S(()=>[s(v(f.copied?`已复制`:`一键复制脚本`),1)]),_:1},8,[`onClick`])]),c(`pre`,Ft,[c(`code`,null,v(p.scriptText),1)])]),_:1}),d(_,{name:`guide`,tab:`安装教程`},{default:S(()=>[c(`div`,It,[n[5]||=c(`h4`,null,`如何安装油猴脚本（浏览器）`,-1),n[6]||=c(`ol`,null,[c(`li`,null,[s(`打开浏览器扩展商店安装 `),c(`b`,null,`Tampermonkey`),s(`（Chrome/Edge 均支持，安装后浏览器右上角会出现油猴图标）。`)]),c(`li`,null,[s(`点击油猴图标 → `),c(`b`,null,`添加新脚本`),s(`，进入脚本编辑页。`)]),c(`li`,null,[s(`把"油猴脚本"标签页里的代码`),c(`b`,null,`全部复制并粘贴`),s(`进编辑页，覆盖默认内容。`)]),c(`li`,null,[s(`按 `),c(`b`,null,`Ctrl + S`),s(` 保存，脚本即生效。`)]),c(`li`,null,[s(`登录 `),c(`b`,null,`www.wizard101.com`),s(`，点 `),c(`b`,null,`Play`),s(` 进入答题入口，开始任意一条问答（Trivia）。`)]),c(`li`,null,[s(`页面右下角会显示`),c(`b`,null,`答案浮层`),s(`；在结算页会显示各条问答的`),c(`b`,null,`完成/未完成`),s(`列表，点击可直接跳转。`)])],-1),d(g,{type:`warning`,"show-icon":!1},{default:S(()=>[...n[4]||=[s(` 提示：官方答题为英文题目，答案以官方判定为准；本页题库仅为参考整理，脚本仅在官方答题页面运行。 `,-1)]]),_:1})])]),_:1})]),_:1},8,[`value`])])]),_:1},8,[`theme`])}var Rt=k(bt,[[`render`,Lt],[`__scopeId`,`data-v-5855637b`]]);export{Rt as default};