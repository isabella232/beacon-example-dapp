(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{ouVF:function(t,n,i){"use strict";i.r(n),i.d(n,"ion_back_button",(function(){return r}));var o=i("xLjI"),a=i("AfW+"),e=i("Dl6n");const r=class{constructor(t){Object(o.k)(this,t),this.mode=Object(o.e)(this),this.disabled=!1,this.type="button",this.onClick=async t=>{const n=this.el.closest("ion-nav");return t.preventDefault(),n&&await n.canGoBack()?n.pop({skipIfBusy:!0}):Object(e.d)(this.defaultHref,t,"back")}}get backButtonIcon(){const t=this.icon;return null!=t?t:"ios"===this.mode?a.b.get("backButtonIcon","chevron-back"):a.b.get("backButtonIcon","arrow-back-sharp")}get backButtonText(){const t="ios"===this.mode?"Back":null;return null!=this.text?this.text:a.b.get("backButtonText",t)}get hasIconOnly(){return this.backButtonIcon&&!this.backButtonText}get rippleType(){return this.hasIconOnly?"unbounded":"bounded"}render(){const{color:t,defaultHref:n,disabled:i,type:a,mode:r,hasIconOnly:s,backButtonIcon:c,backButtonText:d}=this,g=void 0!==n;return Object(o.i)(o.a,{onClick:this.onClick,class:Object.assign(Object.assign({},Object(e.a)(t)),{[r]:!0,button:!0,"back-button-disabled":i,"back-button-has-icon-only":s,"ion-activatable":!0,"ion-focusable":!0,"show-back-button":g})},Object(o.i)("button",{type:a,disabled:i,class:"button-native",part:"button"},Object(o.i)("span",{class:"button-inner"},c&&Object(o.i)("ion-icon",{icon:c,lazy:!1,part:"icon"}),d&&Object(o.i)("span",{class:"button-text",part:"text"},d)),"md"===r&&Object(o.i)("ion-ripple-effect",{type:this.rippleType})))}get el(){return Object(o.f)(this)}static get style(){return":host{--background:transparent;--color-focused:var(--color);--color-hover:var(--color);--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color,opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.show-back-button){display:block}:host(.back-button-disabled){cursor:default;opacity:.5;pointer-events:none}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}ion-icon{padding-left:var(--icon-padding-start);padding-right:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);margin-left:var(--icon-margin-start);margin-right:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-icon{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);margin-left:unset;margin-right:unset;-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end)}}@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}@media (any-hover:hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-base)}}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-base)}:host-context(ion-toolbar:not(.ion-color)):not(.ion-color){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--border-radius:4px;--color:var(--ion-color-primary,#3880ff);--icon-margin-end:-5px;--icon-margin-start:-4px;--icon-font-size:1.85em;--min-height:32px;font-size:17px}.button-native{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:visible;z-index:99}:host(.activated) .button-native{opacity:.4}@media (any-hover:hover){:host(:hover){--opacity:.6}}:host(.ion-color.ion-focused) .button-native{background:rgba(var(--ion-color-base-rgb),.1)}"}}}}]);