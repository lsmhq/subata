import{$ as e,B as t,C as n,E as r,F as i,I as a,K as o,L as s,M as c,N as l,P as u,U as d,V as f,W as p,_t as m,at as h,ct as g,ht as _,k as v,lt as y,nt as b,ot as x,pt as S,q as C,rt as w,st as ee,tt as T,vt as E,z as D}from"./app-CL9tOfsh.js";import{t as O}from"./plugin-vue_export-helper-BDNMzG2s.js";import{A as k,B as A,Bt as j,C as M,E as N,G as te,Gt as ne,H as re,K as P,Kt as F,N as ie,O as ae,P as oe,Pt as se,R as I,Rt as ce,Ut as L,Vt as R,Wt as z,Z as B,b as V,ct as le,et as H,f as ue,it as U,j as de,jt as W,k as fe,lt as pe,m as G,n as me,o as he,ot as ge,p as _e,q as K,rt as q,st as J,t as ve,tt as Y,ut as ye,v as X,x as Z}from"./ConfigProvider-C-stquh6.js";import{i as be,n as xe,r as Se,s as Ce}from"./light-DIfqJh4I.js";var we=/\s/;function Te(e){for(var t=e.length;t--&&we.test(e.charAt(t)););return t}var Q=/^\s+/;function Ee(e){return e&&e.slice(0,Te(e)+1).replace(Q,``)}var De=NaN,Oe=/^[-+]0x[0-9a-f]+$/i,ke=/^0b[01]+$/i,Ae=/^0o[0-7]+$/i,je=parseInt;function Me(e){if(typeof e==`number`)return e;if(se(e))return De;if(W(e)){var t=typeof e.valueOf==`function`?e.valueOf():e;e=W(t)?t+``:t}if(typeof e!=`string`)return e===0?e:+e;e=Ee(e);var n=ke.test(e);return n||Ae.test(e)?je(e.slice(2),n?2:8):Oe.test(e)?De:+e}var Ne=function(){return ce.Date.now()},Pe=`Expected a function`,Fe=Math.max,Ie=Math.min;function Le(e,t,n){var r,i,a,o,s,c,l=0,u=!1,d=!1,f=!0;if(typeof e!=`function`)throw TypeError(Pe);t=Me(t)||0,W(n)&&(u=!!n.leading,d=`maxWait`in n,a=d?Fe(Me(n.maxWait)||0,t):a,f=`trailing`in n?!!n.trailing:f);function p(t){var n=r,a=i;return r=i=void 0,l=t,o=e.apply(a,n),o}function m(e){return l=e,s=setTimeout(_,t),u?p(e):o}function h(e){var n=e-c,r=e-l,i=t-n;return d?Ie(i,a-r):i}function g(e){var n=e-c,r=e-l;return c===void 0||n>=t||n<0||d&&r>=a}function _(){var e=Ne();if(g(e))return v(e);s=setTimeout(_,h(e))}function v(e){return s=void 0,f&&r?p(e):(r=i=void 0,o)}function y(){s!==void 0&&clearTimeout(s),l=0,r=c=i=s=void 0}function b(){return s===void 0?o:v(Ne())}function x(){var e=Ne(),n=g(e);if(r=arguments,i=this,c=e,n){if(s===void 0)return m(c);if(d)return clearTimeout(s),s=setTimeout(_,t),p(c)}return s===void 0&&(s=setTimeout(_,t)),o}return x.cancel=y,x.flush=b,x}var Re=`Expected a function`;function ze(e,t,n){var r=!0,i=!0;if(typeof e!=`function`)throw TypeError(Re);return W(n)&&(r=`leading`in n?!!n.leading:r,i=`trailing`in n?!!n.trailing:i),Le(e,t,{leading:r,maxWait:t,trailing:i})}var Be=V(`.v-x-scroll`,{overflow:`auto`,scrollbarWidth:`none`},[V(`&::-webkit-scrollbar`,{width:0,height:0})]),Ve=f({name:`XScroll`,props:{disabled:Boolean,onScroll:Function},setup(){let e=S(null);function t(e){e.currentTarget.offsetWidth<e.currentTarget.scrollWidth&&e.deltaY!==0&&(e.currentTarget.scrollLeft+=e.deltaY+e.deltaX,e.preventDefault())}let n=ge();return Be.mount({id:`vueuc/x-scroll`,head:!0,anchorMetaName:Z,ssr:n}),Object.assign({selfRef:e,handleWheel:t},{scrollTo(...t){var n;(n=e.value)==null||n.scrollTo(...t)}})},render(){return d(`div`,{ref:`selfRef`,onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:`v-x-scroll`},this.$slots)}}),He=G(`error`,()=>(()=>{let e=H(`550229f72e94547c`);return e[0]||=u(`svg`,{viewBox:`0 0 48 48`,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`},[u(`g`,{stroke:`none`,"stroke-width":`1`,"fill-rule":`evenodd`},[u(`g`,{"fill-rule":`nonzero`},[u(`path`,{d:`M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z`})])])],-1)})()),Ue=G(`info`,()=>(()=>{let e=H(`1d7d3032c5ab60`);return e[0]||=u(`svg`,{viewBox:`0 0 28 28`,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`},[u(`g`,{stroke:`none`,"stroke-width":`1`,"fill-rule":`evenodd`},[u(`g`,{"fill-rule":`nonzero`},[u(`path`,{d:`M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z`})])])],-1)})()),We=G(`success`,()=>(()=>{let e=H(`2d4548faff86b4af`);return e[0]||=u(`svg`,{viewBox:`0 0 48 48`,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`},[u(`g`,{stroke:`none`,"stroke-width":`1`,"fill-rule":`evenodd`},[u(`g`,{"fill-rule":`nonzero`},[u(`path`,{d:`M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z`})])])],-1)})()),Ge=G(`warning`,()=>(()=>{let e=H(`eb9505c3181fdf04`);return e[0]||=u(`svg`,{viewBox:`0 0 24 24`,version:`1.1`,xmlns:`http://www.w3.org/2000/svg`},[u(`g`,{stroke:`none`,"stroke-width":`1`,"fill-rule":`evenodd`},[u(`g`,{"fill-rule":`nonzero`},[u(`path`,{d:`M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z`})])])],-1)})());function Ke(e){let{lineHeight:t,borderRadius:n,fontWeightStrong:r,baseColor:i,dividerColor:a,actionColor:o,textColor1:s,textColor2:c,closeColorHover:l,closeColorPressed:u,closeIconColor:d,closeIconColorHover:f,closeIconColorPressed:p,infoColor:m,successColor:h,warningColor:g,errorColor:_,fontSize:v}=e;return{...Ce,fontSize:v,lineHeight:t,titleFontWeight:r,borderRadius:n,border:`1px solid ${a}`,color:o,titleTextColor:s,iconColor:c,contentTextColor:c,closeBorderRadius:n,closeColorHover:l,closeColorPressed:u,closeIconColor:d,closeIconColorHover:f,closeIconColorPressed:p,borderInfo:`1px solid ${K(i,P(m,{alpha:.25}))}`,colorInfo:K(i,P(m,{alpha:.08})),titleTextColorInfo:s,iconColorInfo:m,contentTextColorInfo:c,closeColorHoverInfo:l,closeColorPressedInfo:u,closeIconColorInfo:d,closeIconColorHoverInfo:f,closeIconColorPressedInfo:p,borderSuccess:`1px solid ${K(i,P(h,{alpha:.25}))}`,colorSuccess:K(i,P(h,{alpha:.08})),titleTextColorSuccess:s,iconColorSuccess:h,contentTextColorSuccess:c,closeColorHoverSuccess:l,closeColorPressedSuccess:u,closeIconColorSuccess:d,closeIconColorHoverSuccess:f,closeIconColorPressedSuccess:p,borderWarning:`1px solid ${K(i,P(g,{alpha:.33}))}`,colorWarning:K(i,P(g,{alpha:.08})),titleTextColorWarning:s,iconColorWarning:g,contentTextColorWarning:c,closeColorHoverWarning:l,closeColorPressedWarning:u,closeIconColorWarning:d,closeIconColorHoverWarning:f,closeIconColorPressedWarning:p,borderError:`1px solid ${K(i,P(_,{alpha:.25}))}`,colorError:K(i,P(_,{alpha:.08})),titleTextColorError:s,iconColorError:_,contentTextColorError:c,closeColorHoverError:l,closeColorPressedError:u,closeIconColorError:d,closeIconColorHoverError:f,closeIconColorPressedError:p}}var qe={name:`Alert`,common:te,self:Ke},{cubicBezierEaseInOut:$,cubicBezierEaseOut:Je,cubicBezierEaseIn:Ye}=J;function Xe({overflow:e=`hidden`,duration:t=`.3s`,originalTransition:n=``,leavingDelay:r=`0s`,foldPadding:i=!1,enterToProps:a=void 0,leaveToProps:o=void 0,reverse:s=!1}={}){let c=s?`leave`:`enter`,l=s?`enter`:`leave`;return[j(`&.fade-in-height-expand-transition-${l}-from,
 &.fade-in-height-expand-transition-${c}-to`,{...a,opacity:1}),j(`&.fade-in-height-expand-transition-${l}-to,
 &.fade-in-height-expand-transition-${c}-from`,{...o,opacity:0,marginTop:`0 !important`,marginBottom:`0 !important`,paddingTop:i?`0 !important`:void 0,paddingBottom:i?`0 !important`:void 0}),j(`&.fade-in-height-expand-transition-${l}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${$} ${r},
 opacity ${t} ${Je} ${r},
 margin-top ${t} ${$} ${r},
 margin-bottom ${t} ${$} ${r},
 padding-top ${t} ${$} ${r},
 padding-bottom ${t} ${$} ${r}
 ${n?`,${n}`:``}
 `),j(`&.fade-in-height-expand-transition-${c}-active`,`
 overflow: ${e};
 transition:
 max-height ${t} ${$},
 opacity ${t} ${Ye},
 margin-top ${t} ${$},
 margin-bottom ${t} ${$},
 padding-top ${t} ${$},
 padding-bottom ${t} ${$}
 ${n?`,${n}`:``}
 `)]}var Ze=R(`alert`,`
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`,[L(`border`,`
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `),z(`closable`,[R(`alert-body`,[L(`title`,`
 padding-right: 24px;
 `)])]),L(`icon`,{color:`var(--n-icon-color)`}),R(`alert-body`,{padding:`var(--n-padding)`},[L(`title`,{color:`var(--n-title-text-color)`}),L(`content`,{color:`var(--n-content-text-color)`})]),Xe({originalTransition:`transform .3s var(--n-bezier)`,enterToProps:{transform:`scale(1)`},leaveToProps:{transform:`scale(0.9)`}}),L(`icon`,`
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
 `),L(`close`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `),z(`show-icon`,[R(`alert-body`,{paddingLeft:`calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))`})]),z(`right-adjust`,[R(`alert-body`,{paddingRight:`calc(var(--n-close-size) + var(--n-padding) + 2px)`})]),R(`alert-body`,`
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `,[L(`title`,`
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `,[j(`& +`,[L(`content`,{marginTop:`9px`})])]),L(`content`,{transition:`color .3s var(--n-bezier)`,fontSize:`var(--n-font-size)`})]),L(`icon`,{transition:`color .3s var(--n-bezier)`})]),Qe={...A.props,title:String,showIcon:{type:Boolean,default:!0},type:{type:String,default:`default`},bordered:{type:Boolean,default:!0},closable:Boolean,onClose:Function,onAfterLeave:Function,onAfterHide:Function},$e=f({name:`Alert`,inheritAttrs:!1,props:Qe,slots:Object,setup(e){let{mergedClsPrefixRef:t,mergedBorderedRef:n,inlineThemeDisabled:r,mergedRtlRef:i}=le(e),a=A(`Alert`,`-alert`,Ze,qe,e,t),o=M(`Alert`,i,t),s=l(()=>{let{common:{cubicBezierEaseInOut:t},self:n}=a.value,{fontSize:r,borderRadius:i,titleFontWeight:o,lineHeight:s,iconSize:c,iconMargin:l,iconMarginRtl:u,closeIconSize:d,closeBorderRadius:f,closeSize:p,closeMargin:m,closeMarginRtl:h,padding:g}=n,{type:_}=e,{left:v,right:y}=B(l);return{"--n-bezier":t,"--n-color":n[F(`color`,_)],"--n-close-icon-size":d,"--n-close-border-radius":f,"--n-close-color-hover":n[F(`closeColorHover`,_)],"--n-close-color-pressed":n[F(`closeColorPressed`,_)],"--n-close-icon-color":n[F(`closeIconColor`,_)],"--n-close-icon-color-hover":n[F(`closeIconColorHover`,_)],"--n-close-icon-color-pressed":n[F(`closeIconColorPressed`,_)],"--n-icon-color":n[F(`iconColor`,_)],"--n-border":n[F(`border`,_)],"--n-title-text-color":n[F(`titleTextColor`,_)],"--n-content-text-color":n[F(`contentTextColor`,_)],"--n-line-height":s,"--n-border-radius":i,"--n-font-size":r,"--n-title-font-weight":o,"--n-icon-size":c,"--n-icon-margin":l,"--n-icon-margin-rtl":u,"--n-close-size":p,"--n-close-margin":m,"--n-close-margin-rtl":h,"--n-padding":g,"--n-icon-margin-left":v,"--n-icon-margin-right":y}}),c=r?re(`alert`,l(()=>e.type[0]),s,e):void 0,u=S(!0),d=()=>{let{onAfterLeave:t,onAfterHide:n}=e;t&&t(),n&&n()};return{rtlEnabled:o,mergedClsPrefix:t,mergedBordered:n,visible:u,handleCloseClick:()=>{Promise.resolve(e.onClose?.()).then(e=>{e!==!1&&(u.value=!1)})},handleAfterLeave:()=>{d()},mergedTheme:a,cssVars:r?void 0:s,themeClass:c?.themeClass,onRender:c?.onRender}},render(){return this.onRender?.(),T(),i(ue,{onAfterLeave:this.handleAfterLeave},{default:()=>{let{mergedClsPrefix:e,$slots:t}=this,n={class:[`${e}-alert`,this.themeClass,this.closable&&`${e}-alert--closable`,this.showIcon&&`${e}-alert--show-icon`,!this.title&&this.closable&&`${e}-alert--right-adjust`,this.rtlEnabled&&`${e}-alert--rtl`],style:this.cssVars,role:`alert`};return this.visible?(T(),s(`div`,o({key:1},o(this.$attrs,n)),[U(()=>this.closable&&(T(),i(_e,{clsPrefix:e,class:Y(`${e}-alert__close`),onClick:this.handleCloseClick},null,8,[`clsPrefix`,`class`,`onClick`]))),U(()=>this.bordered&&(T(),s(`div`,{class:Y(`${e}-alert__border`)},null,2))),U(()=>this.showIcon&&(T(),s(`div`,{class:Y(`${e}-alert__icon`),"aria-hidden":`true`},[U(()=>N(t.icon,()=>[(T(),i(I,{clsPrefix:e},{default:()=>{switch(this.type){case`success`:return T(),i(We,{key:3});case`info`:return T(),i(Ue,{key:4});case`warning`:return T(),i(Ge,{key:5});case`error`:return T(),i(He,{key:6});default:return null}}},1032,[`clsPrefix`]))]))],2))),u(`div`,{class:Y([`${e}-alert-body`,this.mergedBordered&&`${e}-alert-body--bordered`])},[U(()=>ae(t.header,t=>{let n=t||this.title;return n?(T(),s(`div`,{key:2,class:Y(`${e}-alert-body__title`)},[U(()=>n)],2)):null})),U(()=>t.default&&(T(),s(`div`,{class:Y(`${e}-alert-body__content`)},[U(()=>t.default())],2)))],2)],16)):null}},1032,[`onAfterLeave`])}}),et=f({name:`ChevronLeft`,render(){return(()=>{let e=H(`dfe229c2639b2082`);return e[0]||=u(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[u(`path`,{d:`M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z`,fill:`currentColor`})],-1)})()}}),tt=f({name:`ChevronRight`,render(){return(()=>{let e=H(`6ab04425f4fcb756`);return e[0]||=u(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},[u(`path`,{d:`M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`,fill:`currentColor`})],-1)})()}});function nt(e,t=[],n){let r={};return Object.getOwnPropertyNames(e).forEach(n=>{t.includes(n)||(r[n]=e[n])}),Object.assign(r,n)}var rt=pe(`n-tabs`),it={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:`if`},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},at=f({__TAB_PANE__:!0,name:`TabPane`,alias:[`TabPanel`],props:it,slots:Object,setup(e){let t=p(rt,null);return t||ye(`tab-pane`,"`n-tab-pane` must be placed inside `n-tabs`."),{style:t.paneStyleRef,class:t.paneClassRef,mergedClsPrefix:t.mergedClsPrefixRef}},render(){return T(),s(`div`,{class:Y([`${this.mergedClsPrefix}-tab-pane`,this.class]),style:m(this.style)},[U(()=>this.$slots.default?.())],6)}}),ot=[`data-name`,`data-disabled`],st={internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean,...nt(it,[`displayDirective`])},ct=f({__TAB__:!0,inheritAttrs:!1,name:`Tab`,props:st,setup(e){let{mergedClsPrefixRef:t,valueRef:n,typeRef:r,closableRef:i,tabStyleRef:a,addTabStyleRef:o,tabClassRef:s,addTabClassRef:c,tabChangeIdRef:u,onBeforeLeaveRef:d,triggerRef:f,handleAdd:m,activateTab:h,handleClose:g}=p(rt);return{trigger:f,mergedClosable:l(()=>{if(e.internalAddable)return!1;let{closable:t}=e;return t===void 0?i.value:t}),style:a,addStyle:o,tabClass:s,addTabClass:c,clsPrefix:t,value:n,type:r,handleClose(t){t.stopPropagation(),!e.disabled&&g(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){m();return}let{name:t}=e,r=++u.id;if(t!==n.value){let{value:i}=d;i?Promise.resolve(i(e.name,n.value)).then(e=>{e&&u.id===r&&h(t)}):h(t)}}}},render(){let{internalAddable:e,clsPrefix:t,name:n,disabled:r,label:a,tab:c,value:l,mergedClosable:d,trigger:f,$slots:{default:p}}=this,m=a??c;return T(),s(`div`,{class:Y(`${t}-tabs-tab-wrapper`)},[this.internalLeftPadded?(T(),s(`div`,{key:0,class:Y(`${t}-tabs-tab-pad`)},null,2)):U(()=>null),(T(),s(`div`,o({key:n,"data-name":n,"data-disabled":r?!0:void 0},o({class:[`${t}-tabs-tab`,l===n&&`${t}-tabs-tab--active`,r&&`${t}-tabs-tab--disabled`,d&&`${t}-tabs-tab--closable`,e&&`${t}-tabs-tab--addable`,e?this.addTabClass:this.tabClass],onClick:f===`click`?this.activateTab:void 0,onMouseenter:f===`hover`?this.activateTab:void 0,style:e?this.addStyle:this.style},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),[u(`span`,{class:Y(`${t}-tabs-tab__label`)},[e?(T(),s(v,{key:0},[u(`div`,{class:Y(`${t}-tabs-tab__height-placeholder`)},`\xA0`,2),(T(),i(I,{clsPrefix:t},{default:()=>(T(),i(Se))},1032,[`clsPrefix`]))],64)):(T(),s(v,{key:1},[p?(T(),s(v,{key:0},[U(()=>p())],64)):(T(),s(v,{key:1},[typeof m==`object`?(T(),s(v,{key:0},[U(()=>m)],64)):(T(),s(v,{key:1},[U(()=>he(m??n))],64))],64))],64))],2),d&&this.type===`card`?(T(),i(_e,{key:0,clsPrefix:t,class:Y(`${t}-tabs-tab__close`),onClick:this.handleClose,disabled:r},null,8,[`clsPrefix`,`class`,`onClick`,`disabled`])):U(()=>null)],16,ot))],2)}}),lt=R(`tabs`,`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[j(`&.transition-disabled`,[R(`tabs-tab`,`
 transition: none !important;
 `),R(`tabs-nav-scroll-content`,`
 transition: none !important;
 `),R(`tabs-tab-pad`,`
 transition: none !important;
 `)]),z(`segment-type`,[R(`tabs-rail`,[j(`&.transition-disabled`,[R(`tabs-capsule`,`
 transition: none;
 `)])])]),z(`top`,[R(`tab-pane`,`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),z(`left`,[R(`tab-pane`,`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),z(`left, right`,`
 flex-direction: row;
 `,[R(`tabs-bar`,`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),R(`tabs-tab`,`
 padding: var(--n-tab-padding-vertical); 
 `)]),z(`right`,`
 flex-direction: row-reverse;
 `,[R(`tab-pane`,`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),R(`tabs-bar`,`
 left: 0;
 `)]),z(`bottom`,`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[R(`tab-pane`,`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),R(`tabs-bar`,`
 top: 0;
 `)]),R(`tabs-rail`,`
 position: relative;
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[R(`tabs-capsule`,`
 border-radius: var(--n-tab-border-radius);
 position: absolute;
 left: 0;
 top: 0;
 pointer-events: none;
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 transition: transform 0.3s var(--n-bezier);
 `),R(`tabs-tab-wrapper`,`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[R(`tabs-tab`,`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[z(`active`,`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 `),j(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])])]),z(`flex`,[R(`tabs-nav`,`
 width: 100%;
 position: relative;
 `,[R(`tabs-wrapper`,`
 width: 100%;
 `,[R(`tabs-tab`,`
 margin-right: 0;
 `)])])]),R(`tabs-nav`,`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[L(`prefix, suffix`,`
 display: flex;
 align-items: center;
 `),L(`prefix`,`padding-right: 16px;`),L(`suffix`,`padding-left: 16px;`)]),z(`top, bottom`,[j(`>`,[R(`tabs-nav`,[R(`tabs-nav-scroll-wrapper`,[j(`&::before`,`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),j(`&::after`,`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),z(`shadow-start`,[j(`&::before`,`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),z(`shadow-end`,[j(`&::after`,`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),z(`left, right`,[R(`tabs-nav-scroll-content`,`
 flex-direction: column;
 `),j(`>`,[R(`tabs-nav`,[R(`tabs-nav-scroll-wrapper`,[j(`&::before`,`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),j(`&::after`,`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),z(`shadow-start`,[j(`&::before`,`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),z(`shadow-end`,[j(`&::after`,`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])])])]),R(`tabs-nav-scroll-wrapper`,`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[R(`tabs-nav-y-scroll`,`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[j(`&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb`,`
 width: 0;
 height: 0;
 display: none;
 `)]),j(`&::before, &::after`,`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `),j(`&.transition-disabled`,[j(`&::before, &::after`,`
 transition: none;
 `)])]),R(`tabs-nav-scroll-content`,`
 display: flex;
 position: relative;
 min-width: 100%;
 min-height: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),R(`tabs-wrapper`,`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),R(`tabs-tab-wrapper`,`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),R(`tabs-tab`,`
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
 `,[z(`disabled`,{cursor:`not-allowed`}),L(`close`,`
 margin-inline-start: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),L(`label`,`
 display: flex;
 align-items: center;
 z-index: 1;
 `)]),R(`tabs-bar`,`
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
 `,[j(`&.transition-disabled`,`
 transition: none;
 `),z(`disabled`,`
 background-color: var(--n-tab-text-color-disabled)
 `)]),R(`tabs-pane-wrapper`,`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),R(`tab-pane`,`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[j(`&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active`,`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),j(`&.next-transition-leave-active, &.prev-transition-leave-active`,`
 position: absolute;
 `),j(`&.next-transition-enter-from, &.prev-transition-leave-to`,`
 transform: translateX(32px);
 opacity: 0;
 `),j(`&.next-transition-leave-to, &.prev-transition-enter-from`,`
 transform: translateX(-32px);
 opacity: 0;
 `),j(`&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to`,`
 transform: translateX(0);
 opacity: 1;
 `)]),R(`tabs-tab-pad`,`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),z(`line-type, bar-type`,[R(`tabs-tab`,`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[j(`&:hover`,{color:`var(--n-tab-text-color-hover)`}),z(`active`,`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),z(`disabled`,{color:`var(--n-tab-text-color-disabled)`})])]),R(`tabs-nav`,[L(`prefix, suffix`,`
 border-color: var(--n-tab-border-color);
 `),R(`tabs-nav-scroll-content`,`
 border-color: var(--n-tab-border-color);
 `),z(`line-type`,[z(`top`,[L(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),R(`tabs-nav-scroll-content`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),R(`tabs-bar`,`
 bottom: -1px;
 `)]),z(`left`,[L(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),R(`tabs-nav-scroll-content`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),R(`tabs-bar`,`
 right: -1px;
 `)]),z(`right`,[L(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),R(`tabs-nav-scroll-content`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),R(`tabs-bar`,`
 left: -1px;
 `)]),z(`bottom`,[L(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),R(`tabs-nav-scroll-content`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),R(`tabs-bar`,`
 top: -1px;
 `)]),L(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),R(`tabs-nav-scroll-content`,`
 transition: border-color .3s var(--n-bezier);
 `),R(`tabs-bar`,`
 border-radius: 0;
 `)]),z(`card-type`,[L(`prefix, suffix`,`
 transition: border-color .3s var(--n-bezier);
 `),R(`tabs-pad`,`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 `),R(`tabs-tab-pad`,`
 transition: border-color .3s var(--n-bezier);
 `),R(`tabs-tab`,`
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
 `,[z(`addable`,`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 justify-content: center;
 `,[L(`height-placeholder`,`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),ne(`disabled`,[j(`&:hover`,`
 color: var(--n-tab-text-color-hover);
 `)])]),z(`closable`,`padding-inline-end: 8px;`),z(`active`,`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),z(`disabled`,`color: var(--n-tab-text-color-disabled);`)])]),z(`left, right`,`
 flex-direction: column; 
 `,[L(`prefix, suffix`,`
 padding: var(--n-tab-padding-vertical);
 `),R(`tabs-wrapper`,`
 flex-direction: column;
 `),R(`tabs-tab-wrapper`,`
 flex-direction: column;
 `,[R(`tabs-tab-pad`,`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])]),z(`top`,[z(`card-type`,[R(`tabs-scroll-padding`,`border-bottom: 1px solid var(--n-tab-border-color);`),L(`prefix, suffix`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),R(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[z(`active`,`
 border-bottom: 1px solid #0000;
 `)]),R(`tabs-tab-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),R(`tabs-pad`,`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),z(`left`,[z(`card-type`,[R(`tabs-scroll-padding`,`border-right: 1px solid var(--n-tab-border-color);`),L(`prefix, suffix`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),R(`tabs-tab`,`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[z(`active`,`
 border-right: 1px solid #0000;
 `)]),R(`tabs-tab-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `),R(`tabs-pad`,`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),z(`right`,[z(`card-type`,[R(`tabs-scroll-padding`,`border-left: 1px solid var(--n-tab-border-color);`),L(`prefix, suffix`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),R(`tabs-tab`,`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[z(`active`,`
 border-left: 1px solid #0000;
 `)]),R(`tabs-tab-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `),R(`tabs-pad`,`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),z(`bottom`,[z(`card-type`,[R(`tabs-scroll-padding`,`border-top: 1px solid var(--n-tab-border-color);`),L(`prefix, suffix`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),R(`tabs-tab`,`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[z(`active`,`
 border-top: 1px solid #0000;
 `)]),R(`tabs-tab-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `),R(`tabs-pad`,`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])]),R(`tabs-scroll-button`,[z(`start`,`
 padding-left: 10px;
 padding-right: 6px;
 `),z(`end`,`
 padding-right: 10px;
 padding-left: 6px;
 `),z(`up`,`
 padding-bottom: 10px;
 `),z(`down`,`
 padding-top: 10px;
 `)])]),ut=f({name:`TabsButton`,props:{type:{type:String,default:`next`},mergedClsPrefix:{type:String,required:!0},vertical:Boolean,disabled:Boolean,rtl:Boolean,theme:Object,themeOverrides:Object,onClick:Function},setup(e){return{handleClick:()=>{e.disabled||e.onClick?.(e.type)}}},render(){let{mergedClsPrefix:e,disabled:t,type:n,vertical:r,rtl:a,theme:o,themeOverrides:s,handleClick:c}=this,l=n===`next`,u=r?l:a?!l:l;return T(),i(me,{text:!0,disabled:t,size:`small`,theme:o,themeOverrides:s,onClick:c,class:Y([`${e}-tabs-scroll-button`,!r&&n===`prev`&&`${e}-tabs-scroll-button--start`,!r&&n===`next`&&`${e}-tabs-scroll-button--end`,r&&n===`prev`&&`${e}-tabs-scroll-button--up`,r&&n===`next`&&`${e}-tabs-scroll-button--down`])},{icon:()=>(T(),i(I,{clsPrefix:e,style:m(r?{transform:`rotate(90deg)`}:void 0)},{default:()=>u?(T(),i(tt,{key:1})):(T(),i(et,{key:2}))},1032,[`clsPrefix`,`style`]))},1032,[`disabled`,`theme`,`themeOverrides`,`onClick`,`class`])}}),dt=ze,ft={...A.props,value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:`click`},type:{type:String,default:`bar`},closable:Boolean,justifyContent:String,size:String,placement:{type:String,default:`top`},tabStyle:[String,Object],tabClass:String,addTabStyle:[String,Object],addTabClass:String,barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array],showScrollButton:Boolean,centerActiveTab:Boolean},pt=f({name:`Tabs`,props:ft,slots:Object,setup(t,{slots:n}){let{mergedClsPrefixRef:r,inlineThemeDisabled:i,mergedComponentPropsRef:a,mergedRtlRef:o}=le(t),s=M(`Tabs`,o,r),c=l(()=>{let{placement:e}=t;return e===`start`?s?.value?`right`:`left`:e===`end`?s?.value?`left`:`right`:e}),u=A(`Tabs`,`-tabs`,lt,xe,t,r),d=S(null),f=S(null),p=S(null),m=S(null),h=S(null),g=S(null),v=S(null),y=S(!0),w=S(!0),T=de(t,[`labelSize`,`size`]),E=l(()=>T.value?T.value:a?.value?.Tabs?.size||`medium`),D=de(t,[`activeName`,`value`]),O=S(D.value??t.defaultValue??(n.default?fe(n.default())[0]?.props?.name:null)),j=ie(D,O),N={id:0},te=l(()=>{if(t.justifyContent&&t.type!==`card`)return{display:`flex`,justifyContent:t.justifyContent}});x(j,()=>{N.id=0,I(),C(()=>{L()})});function ne(){let{value:e}=j;return e===null?null:d.value?.querySelector(`[data-name="${e}"]`)}function P(e){if(t.type===`card`)return;let{value:n}=p;if(!n)return;let i=n.style.opacity===`0`;if(e){let a=`${r.value}-tabs-bar--disabled`,{barWidth:o}=t,s=c.value;if(e.dataset.disabled===`true`?n.classList.add(a):n.classList.remove(a),[`top`,`bottom`].includes(s)){if(se([`top`,`maxHeight`,`height`]),typeof o==`number`&&e.offsetWidth>=o){let t=Math.floor((e.offsetWidth-o)/2)+e.offsetLeft;n.style.left=`${t}px`,n.style.maxWidth=`${o}px`}else n.style.left=`${e.offsetLeft}px`,n.style.maxWidth=`${e.offsetWidth}px`;n.style.width=`8192px`,i&&(n.style.transition=`none`),n.offsetWidth,i&&(n.style.transition=``,n.style.opacity=`1`)}else{if(se([`left`,`maxWidth`,`width`]),typeof o==`number`&&e.offsetHeight>=o){let t=Math.floor((e.offsetHeight-o)/2)+e.offsetTop;n.style.top=`${t}px`,n.style.maxHeight=`${o}px`}else n.style.top=`${e.offsetTop}px`,n.style.maxHeight=`${e.offsetHeight}px`;n.style.height=`8192px`,i&&(n.style.transition=`none`),n.offsetHeight,i&&(n.style.transition=``,n.style.opacity=`1`)}}}function ae(){if(t.type===`card`)return;let{value:e}=p;e&&(e.style.opacity=`0`)}function se(e){let{value:t}=p;if(t)for(let n of e)t.style[n]=``}function I(){if(t.type===`card`)return;let e=ne();e?P(e):ae()}function ce(e,t,n,r){let i=e.getBoundingClientRect(),a=t.getBoundingClientRect(),o=n?`left`:`top`,s=n?`right`:`bottom`,c=0;r?c=(a[o]+a[s])/2-(i[o]+i[s])/2:a[o]<i[o]?c=a[o]-i[o]:a[s]>i[s]&&(c=a[s]-i[s]),c!==0&&e.scrollBy({[o]:c,behavior:`smooth`})}function L(){let e=[`top`,`bottom`].includes(c.value),n=ne();if(n){if(e){let r=g.value?.$el;if(!r)return;ce(r,n,e,t.centerActiveTab)}else{let{value:r}=v;if(!r)return;ce(r,n,e,t.centerActiveTab)}}}let R=S(null),z=0,V=null;function H(e){let t=R.value;if(t){z=e.getBoundingClientRect().height;let n=`${z}px`,r=()=>{t.style.height=n,t.style.maxHeight=n};V?(r(),V(),V=null):V=r}}function ue(e){let t=R.value;if(t){let n=e.getBoundingClientRect().height,r=()=>{document.body.offsetHeight,t.style.maxHeight=`${n}px`,t.style.height=`${Math.max(z,n)}px`};V?(V(),V=null,r()):V=r}}function U(){let e=R.value;if(e){e.style.maxHeight=``,e.style.height=``;let{paneWrapperStyle:n}=t;if(typeof n==`string`)e.style.cssText=n;else if(n){let{maxHeight:t,height:r}=n;t!==void 0&&(e.style.maxHeight=t),r!==void 0&&(e.style.height=r)}}}let W={value:[]},pe=S(`next`);function G(e){let t=j.value,n=`next`;for(let r of W.value){if(r===t)break;if(r===e){n=`prev`;break}}pe.value=n,me(e)}function me(e){let{onActiveNameChange:n,onUpdateValue:r,"onUpdate:value":i}=t;n&&k(n,e),r&&k(r,e),i&&k(i,e),O.value=e}function he(e){let{onClose:n}=t;n&&k(n,e)}function ge(e){if([`top`,`bottom`].includes(c.value)){let{value:t}=g;if(!t)return;let n=t.$el;if(!n)return;let r=n.offsetWidth,i=!!s?.value,a=e===`next`?r:-r;n.scrollBy({left:i?-a:a,behavior:`smooth`})}else{let{value:t}=v;if(!t)return;let n=t.offsetHeight,r=e===`next`?t.scrollTop+n:t.scrollTop-n;t.scrollTo({top:r,left:0,behavior:`smooth`})}}let _e=!0;function K(){let{value:e}=p;if(!e)return;_e&&=!1;let t=`transition-disabled`;e.classList.add(t),I(),e.classList.remove(t)}let q=S(null);function J({transitionDisabled:e}){let t=d.value;if(!t)return;e&&t.classList.add(`transition-disabled`);let n=ne();n&&q.value&&(q.value.style.width=`${n.offsetWidth}px`,q.value.style.height=`${n.offsetHeight}px`,q.value.style.transform=`translate(${n.offsetLeft}px, ${n.offsetTop}px)`,e&&q.value.offsetWidth),e&&t.classList.remove(`transition-disabled`)}x([j],()=>{t.type===`segment`&&C(()=>{J({transitionDisabled:!1})})}),e(()=>{t.type===`segment`&&J({transitionDisabled:!0})});let ve=0;function Y(e){if(e.contentRect.width===0&&e.contentRect.height===0||ve===e.contentRect.width)return;ve=e.contentRect.width;let{type:n}=t;(n===`line`||n===`bar`)&&(_e||t.justifyContent?.startsWith(`space`))&&K(),n!==`segment`&&Q(Te())}let ye=dt(Y,64);function X(){let{type:e}=t;e===`line`||e===`bar`?K():e===`segment`&&J({transitionDisabled:!0})}x([()=>t.justifyContent,()=>t.size],()=>{C(()=>{(t.type===`line`||t.type===`bar`)&&K()})}),x([c,()=>s?.value],()=>{C(()=>{X(),Q(Te(),{instantly:!0})})}),x(()=>t.type,()=>{C(()=>{let e=f.value;e&&(e.classList.add(`transition-disabled`),X(),e.offsetWidth,e.classList.remove(`transition-disabled`))})});let Z=S(!1);function be(e){let{target:t,contentRect:{width:n,height:r}}=e,i=t.parentElement.parentElement.offsetWidth,a=t.parentElement.parentElement.offsetHeight,o=c.value;if(!Z.value)o===`top`||o===`bottom`?i<n&&(Z.value=!0):a<r&&(Z.value=!0);else{let{value:e}=h;if(!e)return;o===`top`||o===`bottom`?i-n>e.$el.offsetWidth&&(Z.value=!1):a-r>e.$el.offsetHeight&&(Z.value=!1)}Q(g.value?.$el||null)}let Se=dt(be,64);function Ce(){let{onAdd:e}=t;e&&e()}let we=S(!1);function Te(){let e=c.value;return(e===`top`||e===`bottom`?g.value?.$el:v.value)||null}function Q(e,t={instantly:!1}){if(!e)return;let n=t.instantly?m.value:null;n&&n.classList.add(`transition-disabled`);let r=c.value;if(r===`top`||r===`bottom`){let{scrollLeft:t,scrollWidth:n,offsetWidth:r}=e,i=Math.abs(t);y.value=i<=1,w.value=i+r>=n-1,we.value=r<n-1}else{let{scrollTop:t,scrollHeight:n,offsetHeight:r}=e;y.value=t<=1,w.value=t+r>=n-1,we.value=r<n-1}n&&(n.offsetWidth,n.classList.remove(`transition-disabled`))}let Ee=dt(e=>{Q(e.target)},64);b(rt,{triggerRef:_(t,`trigger`),tabStyleRef:_(t,`tabStyle`),tabClassRef:_(t,`tabClass`),addTabStyleRef:_(t,`addTabStyle`),addTabClassRef:_(t,`addTabClass`),paneClassRef:_(t,`paneClass`),paneStyleRef:_(t,`paneStyle`),mergedClsPrefixRef:r,typeRef:_(t,`type`),closableRef:_(t,`closable`),valueRef:j,tabChangeIdRef:N,onBeforeLeaveRef:_(t,`onBeforeLeave`),activateTab:G,handleClose:he,handleAdd:Ce}),oe(()=>{I(),L()}),ee(()=>{let{value:e}=m;if(!e)return;let{value:t}=r,n=`${t}-tabs-nav-scroll-wrapper--shadow-start`,i=`${t}-tabs-nav-scroll-wrapper--shadow-end`;y.value?e.classList.remove(n):e.classList.add(n),w.value?e.classList.remove(i):e.classList.add(i)});let De={syncBarPosition:()=>{I()},scrollToCurrentTab:()=>{L()}},Oe=()=>{J({transitionDisabled:!0})},ke=l(()=>{let{value:e}=E,{type:n}=t,r=`${e}${{card:`Card`,bar:`Bar`,line:`Line`,segment:`Segment`}[n]}`,{self:{barColor:i,closeIconColor:a,closeIconColorHover:o,closeIconColorPressed:s,tabColor:c,tabBorderColor:l,paneTextColor:d,tabFontWeight:f,tabBorderRadius:p,tabFontWeightActive:m,colorSegment:h,fontWeightStrong:g,tabColorSegment:_,closeSize:v,closeIconSize:y,closeColorHover:b,closeColorPressed:x,closeBorderRadius:S,[F(`panePadding`,e)]:C,[F(`tabPadding`,r)]:w,[F(`tabPaddingVertical`,r)]:ee,[F(`tabGap`,r)]:T,[F(`tabGap`,`${r}Vertical`)]:D,[F(`tabTextColor`,n)]:O,[F(`tabTextColorActive`,n)]:k,[F(`tabTextColorHover`,n)]:A,[F(`tabTextColorDisabled`,n)]:j,[F(`tabFontSize`,e)]:M},common:{cubicBezierEaseInOut:N}}=u.value;return{"--n-bezier":N,"--n-color-segment":h,"--n-bar-color":i,"--n-tab-font-size":M,"--n-tab-text-color":O,"--n-tab-text-color-active":k,"--n-tab-text-color-disabled":j,"--n-tab-text-color-hover":A,"--n-pane-text-color":d,"--n-tab-border-color":l,"--n-tab-border-radius":p,"--n-close-size":v,"--n-close-icon-size":y,"--n-close-color-hover":b,"--n-close-color-pressed":x,"--n-close-border-radius":S,"--n-close-icon-color":a,"--n-close-icon-color-hover":o,"--n-close-icon-color-pressed":s,"--n-tab-color":c,"--n-tab-font-weight":f,"--n-tab-font-weight-active":m,"--n-tab-padding":w,"--n-tab-padding-vertical":ee,"--n-tab-gap":T,"--n-tab-gap-vertical":D,"--n-pane-padding-left":B(C,`left`),"--n-pane-padding-right":B(C,`right`),"--n-pane-padding-top":B(C,`top`),"--n-pane-padding-bottom":B(C,`bottom`),"--n-font-weight-strong":g,"--n-tab-color-segment":_}}),Ae=i?re(`tabs`,l(()=>`${E.value[0]}${t.type[0]}`),ke,t):void 0;return{mergedClsPrefix:r,mergedValue:j,renderedNames:new Set,segmentCapsuleElRef:q,tabsPaneWrapperRef:R,tabsElRef:d,selfElRef:f,barElRef:p,addTabInstRef:h,xScrollInstRef:g,scrollWrapperElRef:m,addTabFixed:Z,tabWrapperStyle:te,handleNavResize:ye,mergedSize:E,handleScroll:Ee,handleTabsResize:Se,cssVars:i?void 0:ke,themeClass:Ae?.themeClass,animationDirection:pe,renderNameListRef:W,yScrollElRef:v,handleSegmentResize:Oe,onAnimationBeforeLeave:H,onAnimationEnter:ue,onAnimationAfterEnter:U,onRender:Ae?.onRender,startReachedRef:y,endReachedRef:w,isOverflow:we,handleButtonClick:ge,mergedTheme:u,rtlEnabled:s,mergedPlacement:c,...De}},render(){let{mergedClsPrefix:e,type:t,mergedPlacement:n,addTabFixed:r,addable:a,mergedSize:c,renderNameListRef:l,onRender:d,paneWrapperClass:f,paneWrapperStyle:p,startReachedRef:h,endReachedRef:g,isOverflow:_,showScrollButton:y,handleButtonClick:b,mergedTheme:x,rtlEnabled:S,$slots:{default:C,prefix:w,suffix:ee}}=this;d?.();let E=C?fe(C()).filter(e=>e.type.__TAB_PANE__===!0):[],D=C?fe(C()).filter(e=>e.type.__TAB__===!0):[],O=!D.length,k=t===`card`,A=t===`segment`,j=!k&&!A&&this.justifyContent;l.value=[];let M=()=>{let t=(T(),s(`div`,{style:m(this.tabWrapperStyle),class:Y(`${e}-tabs-wrapper`)},[j?U(()=>null):(T(),s(`div`,{key:1,class:Y(`${e}-tabs-scroll-padding`),style:m(n===`top`||n===`bottom`?{width:`${this.tabsPadding}px`}:{height:`${this.tabsPadding}px`})},null,6)),O?(T(),s(v,{key:2},[U(()=>E.map((e,t)=>(l.value.push(e.props.name),_t((T(),i(ct,o(e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0&&(!j||j===`center`||j===`start`||j===`end`)}),q(e.children?{default:e.children.tab}:void 0),1040,[`internalLeftPadded`]))))))],64)):(T(),s(v,{key:3},[U(()=>D.map((e,t)=>(l.value.push(e.props.name),_t(t!==0&&!j?gt(e):e))))],64)),!r&&a&&k?(T(),s(v,{key:4},[U(()=>ht(a,(O?E.length:D.length)!==0))],64)):U(()=>null),j?U(()=>null):(T(),s(`div`,{key:7,class:Y(`${e}-tabs-scroll-padding`),style:m({width:`${this.tabsPadding}px`})},null,6)),k?U(()=>null):(T(),s(`div`,{key:9,ref:`barElRef`,class:Y(`${e}-tabs-bar`)},null,2))],6));return T(),s(`div`,{ref:`tabsElRef`,class:Y(`${e}-tabs-nav-scroll-content`)},[k&&a?(T(),i(X,{key:0,onResize:this.handleTabsResize},{default:()=>t},1032,[`onResize`])):(T(),s(v,{key:1},[U(()=>t)],64)),k?(T(),s(`div`,{key:2,class:Y(`${e}-tabs-pad`)},null,2)):U(()=>null)],2)},N=A?`top`:n;return T(),s(`div`,{ref:`selfElRef`,class:Y([`${e}-tabs`,this.themeClass,`${e}-tabs--${t}-type`,`${e}-tabs--${c}-size`,j&&`${e}-tabs--flex`,`${e}-tabs--${N}`,S&&`${e}-tabs--rtl`]),style:m(this.cssVars)},[u(`div`,{class:Y([`${e}-tabs-nav--${t}-type`,`${e}-tabs-nav--${N}`,`${e}-tabs-nav`])},[U(()=>ae(w,t=>t&&(T(),s(`div`,{class:Y(`${e}-tabs-nav__prefix`)},[U(()=>t)],2)))),A?(T(),i(X,{key:0,onResize:this.handleSegmentResize},{default:()=>(T(),s(`div`,{class:Y(`${e}-tabs-rail`),ref:`tabsElRef`},[u(`div`,{class:Y(`${e}-tabs-capsule`),ref:`segmentCapsuleElRef`},[u(`div`,{class:Y(`${e}-tabs-wrapper`)},[u(`div`,{class:Y(`${e}-tabs-tab`)},null,2)],2)],2),O?(T(),s(v,{key:0},[U(()=>E.map((e,t)=>(l.value.push(e.props.name),T(),i(ct,o(e.props,{internalCreatedByPane:!0,internalLeftPadded:t!==0}),q(e.children?{default:e.children.tab}:void 0),1040,[`internalLeftPadded`]))))],64)):(T(),s(v,{key:1},[U(()=>D.map((e,t)=>(l.value.push(e.props.name),t===0?e:gt(e))))],64))],2))},1032,[`onResize`])):(T(),s(v,{key:1},[U(()=>y&&_&&(T(),i(ut,{mergedClsPrefix:e,type:`prev`,vertical:N===`left`||N===`right`,disabled:h,rtl:!!S,theme:x.peers.Button,themeOverrides:x.peerOverrides.Button,onClick:b},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`]))),(T(),i(X,{onResize:this.handleNavResize},{default:()=>(T(),s(`div`,{class:Y(`${e}-tabs-nav-scroll-wrapper`),ref:`scrollWrapperElRef`},[[`top`,`bottom`].includes(N)?(T(),i(Ve,{key:0,ref:`xScrollInstRef`,onScroll:this.handleScroll},{default:M},1032,[`onScroll`])):(T(),s(`div`,{key:1,class:Y(`${e}-tabs-nav-y-scroll`),onScroll:this.handleScroll,ref:`yScrollElRef`},[U(()=>M())],42,[`onScroll`]))],2))},1032,[`onResize`])),U(()=>y&&_&&(T(),i(ut,{mergedClsPrefix:e,type:`next`,vertical:N===`left`||N===`right`,disabled:g,rtl:!!S,theme:x.peers.Button,themeOverrides:x.peerOverrides.Button,onClick:b},null,8,[`mergedClsPrefix`,`vertical`,`disabled`,`rtl`,`theme`,`themeOverrides`,`onClick`])))],64)),r&&a&&k?(T(),s(v,{key:2},[U(()=>ht(a,!0))],64)):U(()=>null),U(()=>ae(ee,t=>t&&(T(),s(`div`,{class:Y(`${e}-tabs-nav__suffix`)},[U(()=>t)],2))))],2),U(()=>O&&(this.animated&&(N===`top`||N===`bottom`)?(T(),s(`div`,{key:1,ref:`tabsPaneWrapperRef`,style:m(p),class:Y([`${e}-tabs-pane-wrapper`,f])},[U(()=>mt(E,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection))],6)):mt(E,this.mergedValue,this.renderedNames)))],6)}});function mt(e,t,a,o,s,c,l){let u=[];return e.forEach(e=>{let{name:n,displayDirective:i,"display-directive":o}=e.props,s=e=>i===e||o===e,c=t===n;if(e.key!==void 0&&(e.key=n),c||s(`show`)||s(`show:lazy`)&&a.has(n)){a.has(n)||a.add(n);let t=!s(`if`);u.push(t?y(e,[[r,c]]):e)}}),l?(T(),i(n,{name:`${l}-transition`,onBeforeLeave:o,onEnter:s,onAfterEnter:c},{default:()=>u},1032,[`name`,`onBeforeLeave`,`onEnter`,`onAfterEnter`])):u}function ht(e,t){return T(),i(ct,{ref:`addTabInstRef`,key:`__addable`,name:`__addable`,internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:t,disabled:typeof e==`object`&&e.disabled},null,8,[`internalLeftPadded`,`disabled`])}function gt(e){let t=c(e);return t.props?t.props.internalLeftPadded=!0:t.props={internalLeftPadded:!0},t}function _t(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes(`internalLeftPadded`)||e.dynamicProps.push(`internalLeftPadded`):e.dynamicProps=[`internalLeftPadded`],e}var vt=JSON.parse(`[{"q":"Zafaria is home to what cultures?","a":"Gorillas, Zebras, Lions"},{"q":"Which of these locations is not in Wizard City?","a":"Digmore Station"},{"q":"What book does Professor Drake send you to the library to check out?","a":"Book on the Wumpus"},{"q":"What is the title of the book that is floating around the Wizard City Library?","a":"Basic Wizarding & Proper Care of Familiars"},{"q":"How many worlds of The Spiral are unlocked as of May 21st, 2014?","a":"12"},{"q":"Why are the Gobblers so afraid to go home?","a":"Witches"},{"q":"Merle Ambrose is originally from which world?","a":"Avalon"},{"q":"Who sells Valentine's Day items in Wizard City?","a":"Valentina Heartsong"},{"q":"Who is the Registrar of Pigswick Academy?","a":"Mrs. Dowager"},{"q":"Who guards the entrance to Unicorn Way?","a":"Private Stillson"},{"q":"What's the name of the balance tree?","a":"Niles"},{"q":"What can be used to diminish the Nirini's powers in Krokotopia?","a":"Flame Gems"},{"q":"Why are the pixies and faeries on Unicorn Way evil?","a":"Rattlebones corrupted them."},{"q":"Which below are NOT a type of Oni in MooShu?","a":"Ruby"},{"q":"Who prophesizes this? \\"The mirror will break, The horn will call, From the shadows I strike , And the skies will fall...\\"","a":"Morganthe"},{"q":"Who is the Nameless Knight?","a":"Sir Malory"},{"q":"What color is the door inside the boys dormroom?","a":"Red"},{"q":"What is the shape of the pink piece in potion motion?","a":"Heart"},{"q":"Which one of these are not a symbol on the battle sigil?","a":"Wand"},{"q":"What did Prospector Zeke lose track of in MooShu?","a":"Blue Oysters"},{"q":"Which is the only school left standing in Dragonspyre?","a":"Fire"},{"q":"What is Professor Falmea's favorite food?","a":"Pasta Arrabiata"},{"q":"What hand does Lady Oriel hold her wand in?","a":"Trick question, she has a sword."},{"q":"What determines the colors of the manders in Krok?","a":"Where they come from and their school of focus."},{"q":"What school is the spell Dark Nova","a":"Shadow"},{"q":"How long do you have to wait to join a new match after fleeing in PVP?","a":"5 minutes"},{"q":"Who is in the top level of the Tower of the Helephant?","a":"Lyon Lorestriker"},{"q":"What type of rank 8 spell is granted to Death students at level 58?","a":"Damage + DoT"},{"q":"Which of these are not a lore spell?","a":"Fire Dragon"},{"q":"An unmodified Sun Serpent does what?","a":"900   1000 Fire Damage + 300 Fire Damage to entire team"},{"q":"Which of these is NOT a Zafaria Anchor Stone?","a":"Rasik Anchor Stone"},{"q":"Who is the Bear King of Grizzleheim?","a":"Valgard Goldenblade"},{"q":"What is the name of the secret society in Krokotopia","a":"Order of the Fang"},{"q":"What is unique about Falmea's Classroom?","a":"There are scorch marks on the ceiling"},{"q":"In Grizzleheim, the Ravens want to bring about:","a":"The Everwinter, to cover the world in ice:"},{"q":"What is the name of the new dance added with Khrysalis?","a":"The bee dance"},{"q":"What is the name of the book stolen from the Royal Museum?","a":"The Krokonomicon"},{"q":"Which Aztecan ponders the Great Questions of Life?","a":"Philosoraptor"},{"q":"What does the Time Ribbon Protect against?","a":"Time Flux"},{"q":"What school is the Gurtok Demon focused on?","a":"Balance"},{"q":"Shaka Zebu is known best as:","a":"The Greatest Living Zebra Warrior"},{"q":"Who is Bill Tanner's sister?","a":"Sarah Tanner"},{"q":"What is the shape on the weather vanes in the Shopping District?","a":"Half moon/moon"},{"q":"What book was Anna Flameright accused of stealing?","a":"Advanced Flameology"},{"q":"What level must you be to wear Dragonspyre crafted clothing?","a":"33"},{"q":"What did Abigail Dolittle accuse Wadsworth of stealing?","a":"Genuine Imitation Golden Ruby"},{"q":"What was the name of the powerful Grendel Shaman who sealed the runic doors?","a":"Thulinn"},{"q":"Who Is NOT a member of the Council of Light?","a":"Cyrus Drake"},{"q":"Sir Edward Halley is the Spiral's most famous:","a":"Aztecosaurologist"},{"q":"Who is the King of the Burrowers?","a":"Pyat MourningSword"},{"q":"Which Queen is mentioned in the Marleybone book \\"The Golden Age\\"?","a":"Ellen"},{"q":"How many portal summoning candles are in the Burial Mound?","a":"Three"},{"q":"Kirby Longspear was once a student of which school of magic?","a":"Death"},{"q":"The Swordsman Destreza was killed by:","a":"A Gorgon"},{"q":"Arthur Wethersfield is A:..","a":"Dog"},{"q":"What course did Herold Digmoore study?","a":"Ancient Myths for Parliament"},{"q":"What is flying around in Regent's Square?","a":"Newspapers"},{"q":"What time of day is it always in Marleybone?","a":"Night"},{"q":"What two names are on the Statues in the Marleybone cathedral?","a":"Saint Bernard and Saint Hubert"},{"q":"What event is Abigail Doolittle sending out invitations for?","a":"Policeman's Ball"},{"q":"What sort of beverage is served in Air Dales Hideaway?","a":"Root Beer"},{"q":"What is a very common last name of the cats in Marleybone?","a":"O'Leary"},{"q":"Who is not an officer you'll find around Marleybone?","a":"Officer Digmore"},{"q":"What style of artifacts are in the Royal Museum?","a":"Krokotopian"},{"q":"What initials were on the doctor's glove?","a":"XX"},{"q":"Who is the dangerous criminal that is locked up, but escapes from Newgate Prison?","a":"Meowiarty"},{"q":"What color are the Marleybone mailboxes?","a":"Red"},{"q":"Which of these folks can you find in the Royal Museum?","a":"Clancy Pembroke"},{"q":"Which is not a street in Regent's Square?","a":"Fleabitten Ave"},{"q":"What is Sgt. Major Talbot's full name?","a":"Sylvester Quimby Talbot III"},{"q":"What time does the clock always read in Marleybone?","a":"1:55"},{"q":"Which symbol is not on the stained glass window in Regent's Square?","a":"A Tennis Ball"},{"q":"What transports you from place to place in Marleybone?","a":"Hot Air Balloons"},{"q":"What did Prospector Zeke lose in Marleybone?","a":"The Stray Cats"},{"q":"Who is the Emperor of Mooshu's Royal Guard?","a":"Noboru Akitame"},{"q":"In what world would you find the Spider Temple","a":"Zafaria"},{"q":"Where is the only pure fire in the Spiral found?","a":"Wizard City"},{"q":"King Neza is Zenzen Seven Star's:?","a":"Grandfather"},{"q":"What was Ponce de Gibbon looking for in Azteca?","a":"The Water of Life"},{"q":"In Reagent's Square, the Professor is standing in front of a:","a":"Telegraph Box"},{"q":"Hrundle Fjord is part of what section of Grizzleheim?","a":"Wintertusk"},{"q":"King Axaya Knifemoon needs what to unify the people around him?","a":"The Badge of Leadership"},{"q":"Which villain terrorizes the fair maidens of Marleybone?","a":"Jaques the Scatcher"},{"q":"Who gives you permission to ride the boat to the Krokosphinx?","a":"Sergent Major Talbot"},{"q":"Who is the only person who knows how to enter the Tomb of Storms?","a":"Hetch Al'Dim"},{"q":"Who was ordered to guard the Sword of Kings?","a":"The Knights of the Silver Rose"},{"q":"Who did Falynn Greensleeves fall in love with?","a":"Sir Malick de Logres"},{"q":"Who was the greatest Aquilan Gladiator of all time?","a":"Dimachaerus"},{"q":"Who haunts the Night Warrens?","a":"Nosferabbit"},{"q":"Who tells you how to get to Aquila?","a":"Harold Argleston"},{"q":"Who takes you across the River of Souls?","a":"Charon"},{"q":"Thaddeus Price is the Pigswick Academy Professor of what school?","a":"Tempest"},{"q":"Who asks you to find Khrysanthemums?","a":"Eloise Merryweather"},{"q":"What is used to travel to the Isle of Arachnis?","a":"Ice Archway"},{"q":"Who makes the harpsicord for Shelus?","a":"Gretta Darkkettle"},{"q":"Morganthe got the Horned Crown from the Spriggan:","a":"Gisela"},{"q":"Sumner Fieldgold twice asks you to recover what for him?","a":"Shrubberies"},{"q":"Who needs the healing potion from Master Yip?","a":"Binh Hoa"},{"q":"Who is Haraku Yip's apprentice?","a":"Binh Hoa"},{"q":"Who taunts you with: \\"Prepare to be broken, kid!\\"","a":"Clanker"},{"q":"What badge do you earn by defeating 100 Samoorai?","a":"Yojimbo"},{"q":"Who thinks you are there to take their precious feathers?","a":"Takeda Kanryu"},{"q":"The Swallows of Caliburn migrate to Avalon from where each year?","a":"Zafaria and Marleybone"},{"q":"Who tells you: \\"A shield is just as much a weapon as the sword.\\"","a":"Mavra Flamewing"},{"q":"Who tells you to speak these words only unto your mentor: \\"Meena Korio Jajuka!\\"","a":"Priya the Dryad"},{"q":"Who tries to raise a Gorgon Army?","a":"Phorcys"},{"q":"Who taunts you with: \\"Wizard, you will know the meaning of the word pain after we battle!\\"","a":"Aiuchi"},{"q":"What special plant was Barley developing in his Garden?","a":"Cultivated Woodsmen"},{"q":"Who helps Morganthe find the Horn of Huracan?","a":"Belloq"},{"q":"Who taunts: Why I oughta knock you to the moon, you pesky little creep!","a":"Mugsy"},{"q":"What does Silenus name you once you've defeated Hades?","a":"Glorious Golden Archon"},{"q":"In Azteca, Morganthe enlisted the help of the:","a":"The Black Sun Necromancers"},{"q":"Where has Pharenor been imprisoned?","a":"Skythorn Tower"},{"q":"Who grants the first Shadow Magic spell?","a":"Sophia DarkSide"},{"q":"Mortis can teach you this.","a":"Tranquilize"},{"q":"What term best fits Sun Magic Spells?","a":"Enchantment"},{"q":"What type of spells are Ice, Fire, and Storm?","a":"Elemental"},{"q":"Who can teach you the Life Shield Spell?","a":"Sabrina Greenstar"},{"q":"Mildred Farseer teaches you what kind of spell?","a":"Dispels"},{"q":"What term best fits Star Magic Spells?","a":"Auras"},{"q":"Who teaches you balance magic?","a":"Alhazred"},{"q":"What isn't a shadow magic spell?","a":"Ebon Ribbons"},{"q":"Which spell can't be cast while polymorphed as a Gobbler?","a":"Pie in the sky"},{"q":"If you can cast Storm Trap, Wild Bolt, Catalan, and the Tempest spell, what are you polymorphed as?","a":"Ptera"},{"q":"How many pips does it cost to cast Stormzilla?","a":"5"},{"q":"Which spell would not be very effective when going for the elixir vitae Badge?","a":"Entangle"},{"q":"Cassie the Ponycorn teaches this kind of spell:","a":"Prism"},{"q":"What level of spell does Enya Firemoon Teach?","a":"80"},{"q":"If you're a storm wizard with 4 power pips and 3 regular pips, how powerful would your supercharge charm be?","a":"110%"},{"q":"How many pips does it cost to cast Dr. Von's Monster?","a":"9"},{"q":"What does Forsaken Banshee do?","a":"375 damage plus a hex trap"},{"q":"Which Fire spell both damages and heals over time?","a":"Power Link"},{"q":"Ether Shield protects against what?","a":"Life and Death attacks"},{"q":"Tish'Mah specializes in spells that mostly affect these:","a":"Minions"},{"q":"Historian Gonzago is on a stage, who isn't in the audience?","a":"Giafra"},{"q":"Historian Gonzago sends you on a \\"Paper Chase,\\" who do you talk to during that quest?","a":"Magdalena"},{"q":"How many Mechanical Birds do you collect in Sivella?","a":"5"},{"q":"The Mooshu Tower in Sivella is a replica of what?","a":"Tower of Serenity"},{"q":"What are Albus and Carbo?","a":"Armada Commanders"},{"q":"What color of Windstone do you find in Marco Pollo's Tomb?","a":"Blue"},{"q":"What kind of disguise do you wear in Sivella?","a":"Clockwork"},{"q":"What shows Steed you're part of the Resistence?","a":"Amulet"},{"q":"What type of boat do you use to get from the docks to Sivella?","a":"Gondola"},{"q":"What type of item does Prospector Zeke want you to find in Valencia?","a":"Birds"},{"q":"What's the name of a librarian in Sivella?","a":"Grassi"},{"q":"Where do you find the Tomb of Marco Pollo?","a":"Granchia"},{"q":"Which one isn't a Scholar by name?","a":"Caresini"},{"q":"Which world doesn't have a pillar in Sivella?","a":"Monquista"},{"q":"Who do you find in the Lecture Hall of Sivella?","a":"Ridolfo"},{"q":"Who does Steed send you to speak to in Sivella?","a":"Thaddeus"},{"q":"Who reads the inscription on Marleybone's Tower?","a":"Ratbeard"},{"q":"Why does Steed want you to attack Armada Ships?","a":"Make a Disguise"},{"q":"You need a good eye to save these in Granchia...","a":"Art Objects"},{"q":"You won't find this kind of Armada Troop in Sivella!","a":"Battle Angel"},{"q":"Who is the Fire School professor?","a":"Dalia Falmea"},{"q":"What school does Malorn Ashthorn think is the best?","a":"Death"},{"q":"What is the name of the bridge in front of the Cave to Nightside?","a":"Rainbow Bridge"},{"q":"What does every Rotting Fodder in the Dark Caves carry with them?","a":"A spade"},{"q":"Who is the Wizard City mill foreman?","a":"Sohomer Sunblade"},{"q":"What is Diego's full name?","a":"Diego Santiago Quariquez Ramirez the Third"},{"q":"What is something that the Gobblers are NOT stockpiling in Colossus Way?","a":"Broccoli"},{"q":"Where is Sabrina Greenstar?","a":"Fairegrounds"},{"q":"Who sang the Dragons, Tritons and Giants into existance?","a":"Bartleby"},{"q":"What are the school colors of Balance?","a":"Tan and Maroon"},{"q":"What are the main colors for the Myth School?","a":"Blue and Gold"},{"q":"What school is all about Creativity?","a":"Storm"},{"q":"What is the gemstone for Balance?","a":"Citrine"},{"q":"Who resides in the Hedge Maze?","a":"Lady Oriel"},{"q":"Who taught Life Magic before Moolinda Wu?","a":"Sylvia Drake"},{"q":"Who is the Princess of the Seraphs?","a":"Lady Oriel"},{"q":"What is the name of the school newspaper? Boris Tallstaff knows...","a":"Ravenwood Bulletin"},{"q":"What is the name of the grandfather tree?","a":"Bartleby"},{"q":"What is Mindy's last name (she's on Colossus Blvd)?","a":"Pixiecrown"},{"q":"What is the name of the Ice Tree in Ravenwood?","a":"Kelvin"},{"q":"What does Lethu Blunthoof says about Ghostmanes?","a":"You never can tell with them!"},{"q":"Sir Reginal Baxby's cousin is:","a":"Mondli Greenhoof"},{"q":"Baobab is governed by:","a":"A Council of three councilors."},{"q":"Who is the missing prince?","a":"Tiziri Silvertusk"},{"q":"Umlilo Sunchaser hired who as a local guide?","a":"Msizi Redband"},{"q":"Inyanga calls Umlio a:","a":"Fire feather"},{"q":"The Fire Lion Ravagers are led by:","a":"Nergal the Burned Lion"},{"q":"Unathi Nightrunner is:","a":"A councilor of Baobab."},{"q":"Who is not one of the Zebu Kings:","a":"Zaffe Zoffer"},{"q":"Rasik Pridefall is:","a":"An Olyphant from Stone Town."},{"q":"Esop Thornpaw gives you a magic:","a":"Djembe Drum"},{"q":"The Inzinzebu Bandits are harassing the good merchants in:","a":"Baobab Market"},{"q":"Vir Goodheart is an assistant to:","a":"Rasik Pridefall"},{"q":"Belloq is first found in:","a":"The Sook"},{"q":"Zebu Blackstripes legendary blade was called:","a":"The Sword of the Duelist"},{"q":"Jambo means:","a":"Hello."},{"q":"Zebu Blackstripes legendary blade was forged:","a":"In the halls of Valencia"},{"q":"Koyate Ghostmane accuses the player of:","a":"Being a thief"},{"q":"Who are Hannibal Onetusk's brother and co-pilot?","a":"Mago and Sobaka"},{"q":"Zamunda's great assassin is known as:","a":"Karl the Jackal"}]`),yt=`
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
`,bt={name:`Quiz`,components:{NAlert:$e,NButton:me,NConfigProvider:ve,NInput:be,NTabPane:at,NTabs:pt},data(){return{tab:`bank`,keyword:``,open:new Set,randomItem:null,copied:!1,dark:!1,questions:vt}},computed:{filtered(){let e=this.keyword.trim().toLowerCase();return e?this.questions.filter(t=>t.q.toLowerCase().includes(e)||t.a.toLowerCase().includes(e)):this.questions},scriptText(){let e={};return this.questions.forEach(t=>{e[t.q]=t.a}),yt.replace(`__QUESTIONS__`,JSON.stringify(e))}},methods:{toggle(e){let t=new Set(this.open);t.has(e)?t.delete(e):t.add(e),this.open=t},randomOne(){if(!this.questions.length)return;let e=this.questions[Math.floor(Math.random()*this.questions.length)];this.randomItem=e,this.keyword=``,this.tab=`bank`},async copyScript(){let e=this.scriptText;try{await navigator.clipboard.writeText(e),this.copied=!0}catch{let t=document.createElement(`textarea`);t.value=e,t.style.position=`fixed`,t.style.opacity=`0`,document.body.appendChild(t),t.select();try{document.execCommand(`copy`),this.copied=!0}catch{this.copied=!1}document.body.removeChild(t)}this.copied&&setTimeout(()=>{this.copied=!1},2e3)}},mounted(){typeof document<`u`&&(this._observer=new MutationObserver(()=>{this.dark=document.documentElement.classList.contains(`dark`)}),this._observer.observe(document.documentElement,{attributes:!0}))},unmounted(){this._observer&&this._observer.disconnect()}},xt={class:`quiz`},St={class:`toolbar`},Ct={key:0,class:`random-box`},wt={class:`random-q`},Tt={class:`random-a`},Et={class:`q-list`},Dt=[`onClick`],Ot={class:`q-head`},kt={class:`q-index`},At={class:`q-text`},jt={class:`q-more`},Mt={key:0,class:`q-answer`},Nt={key:1,class:`empty`},Pt={class:`script-tip`},Ft={class:`code-box`},It={class:`guide`};function Lt(e,n,r,o,c,l){let d=h(`n-input`),f=h(`n-button`),p=h(`n-alert`),m=h(`n-tab-pane`),_=h(`n-tabs`),y=h(`n-config-provider`);return T(),i(y,{theme:c.dark?e.darkTheme:null},{default:g(()=>[u(`div`,xt,[t(_,{value:c.tab,"onUpdate:value":n[1]||=e=>c.tab=e,type:`line`,animated:``},{default:g(()=>[t(m,{name:`bank`,tab:`题库对照`},{default:g(()=>[u(`div`,St,[t(d,{value:c.keyword,"onUpdate:value":n[0]||=e=>c.keyword=e,clearable:``,placeholder:`输入关键词搜索（题目或答案）`,style:{width:`360px`},size:`small`},null,8,[`value`]),t(f,{size:`small`,tertiary:``,onClick:l.randomOne},{default:g(()=>[...n[2]||=[D(`随机一题`,-1)]]),_:1},8,[`onClick`])]),c.randomItem?(T(),s(`div`,Ct,[t(p,{type:`info`,"show-icon":!1},{default:g(()=>[u(`div`,wt,E(c.randomItem.q),1),u(`div`,Tt,`答案：`+E(c.randomItem.a),1)]),_:1})])):a(``,!0),u(`div`,Et,[(T(!0),s(v,null,w(l.filtered,(e,t)=>(T(),s(`div`,{key:e.q,class:`q-item`,onClick:e=>l.toggle(t)},[u(`div`,Ot,[u(`span`,kt,E(t+1),1),u(`span`,At,E(e.q),1),u(`span`,jt,E(c.open.has(t)?`收起`:`答案`),1)]),c.open.has(t)?(T(),s(`div`,Mt,`答案：`+E(e.a),1)):a(``,!0)],8,Dt))),128))]),l.filtered.length===0?(T(),s(`div`,Nt,`没有匹配的题目`)):a(``,!0)]),_:1}),t(m,{name:`script`,tab:`油猴脚本`},{default:g(()=>[u(`div`,Pt,[n[3]||=u(`span`,null,`把下面的脚本装进油猴（Tampermonkey）后，打开官方答题页面会自动漂浮显示答案与进度。脚本已内置全部题目，可离线使用。`,-1),t(f,{type:`primary`,size:`small`,onClick:l.copyScript},{default:g(()=>[D(E(c.copied?`已复制`:`一键复制脚本`),1)]),_:1},8,[`onClick`])]),u(`pre`,Ft,[u(`code`,null,E(l.scriptText),1)])]),_:1}),t(m,{name:`guide`,tab:`安装教程`},{default:g(()=>[u(`div`,It,[n[5]||=u(`h4`,null,`如何安装油猴脚本（浏览器）`,-1),n[6]||=u(`ol`,null,[u(`li`,null,[D(`打开浏览器扩展商店安装 `),u(`b`,null,`Tampermonkey`),D(`（Chrome/Edge 均支持，安装后浏览器右上角会出现油猴图标）。`)]),u(`li`,null,[D(`点击油猴图标 → `),u(`b`,null,`添加新脚本`),D(`，进入脚本编辑页。`)]),u(`li`,null,[D(`把"油猴脚本"标签页里的代码`),u(`b`,null,`全部复制并粘贴`),D(`进编辑页，覆盖默认内容。`)]),u(`li`,null,[D(`按 `),u(`b`,null,`Ctrl + S`),D(` 保存，脚本即生效。`)]),u(`li`,null,[D(`登录 `),u(`b`,null,`www.wizard101.com`),D(`，点 `),u(`b`,null,`Play`),D(` 进入答题入口，开始任意一条问答（Trivia）。`)]),u(`li`,null,[D(`页面右下角会显示`),u(`b`,null,`答案浮层`),D(`；在结算页会显示各条问答的`),u(`b`,null,`完成/未完成`),D(`列表，点击可直接跳转。`)])],-1),t(p,{type:`warning`,"show-icon":!1},{default:g(()=>[...n[4]||=[D(` 提示：官方答题为英文题目，答案以官方判定为准；本页题库仅为参考整理，脚本仅在官方答题页面运行。 `,-1)]]),_:1})])]),_:1})]),_:1},8,[`value`])])]),_:1},8,[`theme`])}var Rt=O(bt,[[`render`,Lt],[`__scopeId`,`data-v-5855637b`]]);export{Rt as default};