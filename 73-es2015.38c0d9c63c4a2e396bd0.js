(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{Iymp:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_segment",(function(){return a})),n.d(e,"ion_segment_button",(function(){return l}));var o=n("54nT"),i=(n("AfW+"),n("aiEM")),r=n("Dl6n");const a=class{constructor(t){Object(o.k)(this,t),this.didInit=!1,this.activated=!1,this.disabled=!1,this.scrollable=!1,this.onClick=t=>{const e=t.target,n=this.checked;this.value=e.value,n&&this.scrollable&&this.checkButton(n,e),this.checked=e},this.ionChange=Object(o.e)(this,"ionChange",7),this.ionStyle=Object(o.e)(this,"ionStyle",7)}valueChanged(t){this.didInit&&this.ionChange.emit({value:t})}disabledChanged(){this.gestureChanged();const t=this.getButtons();for(const e of t)e.disabled=this.disabled}gestureChanged(){this.gesture&&!this.scrollable&&this.gesture.enable(!this.disabled)}connectedCallback(){this.emitStyle()}componentWillLoad(){this.emitStyle()}async componentDidLoad(){this.setCheckedClasses(),this.gesture=(await Promise.resolve().then(n.bind(null,"AzGJ"))).createGesture({el:this.el,gestureName:"segment",gesturePriority:100,threshold:0,passive:!1,onStart:t=>this.onStart(t),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.gesture.enable(!this.scrollable),this.gestureChanged(),this.disabled&&this.disabledChanged(),this.didInit=!0}onStart(t){this.activate(t)}onMove(t){this.setNextIndex(t)}onEnd(t){this.setActivated(!1);const e=this.setNextIndex(t,!0);t.event.preventDefault(),t.event.stopImmediatePropagation(),e&&this.addRipple(t)}getButtons(){return Array.from(this.el.querySelectorAll("ion-segment-button"))}addRipple(t){const e=this.getButtons().find(t=>t.value===this.value).shadowRoot.querySelector("ion-ripple-effect");if(!e)return;const{x:n,y:o}=Object(i.j)(t.event);e.addRipple(n,o).then(t=>t())}setActivated(t){this.getButtons().forEach(e=>{t?e.classList.add("segment-button-activated"):e.classList.remove("segment-button-activated")}),this.activated=t}activate(t){const e=t.event.target,n=this.getButtons().find(t=>t.value===this.value);"ION-SEGMENT-BUTTON"===e.tagName&&(n||(this.value=e.value),this.value===e.value&&this.setActivated(!0))}getIndicator(t){return t.shadowRoot&&t.shadowRoot.querySelector(".segment-button-indicator")}checkButton(t,e){const n=this.getIndicator(t),i=this.getIndicator(e);if(null===n||null===i)return;const r=n.getBoundingClientRect(),a=i.getBoundingClientRect(),s=r.width/a.width,l=`translate3d(${r.left-a.left}px, 0, 0) scaleX(${s})`;Object(o.l)(()=>{i.classList.remove("segment-button-indicator-animated"),i.style.setProperty("transform",l),i.getBoundingClientRect(),i.classList.add("segment-button-indicator-animated"),i.style.setProperty("transform","")}),this.value=e.value,this.setCheckedClasses()}setCheckedClasses(){const t=this.getButtons(),e=t.findIndex(t=>t.value===this.value)+1;this.checked=t.find(t=>t.value===this.value);for(const n of t)n.classList.remove("segment-button-after-checked");e<t.length&&t[e].classList.add("segment-button-after-checked")}setNextIndex(t,e=!1){const n="rtl"===document.dir,o=this.activated,i=this.getButtons(),r=i.findIndex(t=>t.value===this.value),a=i[r];let s,l;if(-1===r)return;const c=a.getBoundingClientRect(),d=c.left,g=c.width,h=t.currentX,b=c.y,u=document.elementFromPoint(h,b);if(o&&!e){if(n?h>d+g:h<d){const t=r-1;t>=0&&(l=t)}else if((n?h<d:h>d+g)&&o&&!e){const t=r+1;t<i.length&&(l=t)}void 0===l||i[l].disabled||(s=i[l])}if(!o&&e&&(s=u),null!=s){if("ION-SEGMENT"===s.tagName)return!1;a!==s&&this.checkButton(a,s)}return!0}emitStyle(){this.ionStyle.emit({segment:!0})}render(){const t=Object(o.d)(this);return Object(o.i)(o.a,{onClick:this.onClick,class:Object.assign(Object.assign({},Object(r.a)(this.color)),{[t]:!0,"in-toolbar":Object(r.c)("ion-toolbar",this.el),"in-toolbar-color":Object(r.c)("ion-toolbar[color]",this.el),"segment-activated":this.activated,"segment-disabled":this.disabled,"segment-scrollable":this.scrollable})},Object(o.i)("slot",null))}get el(){return Object(o.f)(this)}static get watchers(){return{value:["valueChanged"],disabled:["disabledChanged"]}}static get style(){return":host{--ripple-color:currentColor;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:stretch;align-items:stretch;-ms-flex-pack:center;justify-content:center;width:100%;background:var(--background);font-family:var(--ion-font-family,inherit);text-align:center;contain:paint}:host(.segment-scrollable){-ms-flex-pack:start;justify-content:start;width:auto;overflow-x:scroll}:host(.segment-scrollable::-webkit-scrollbar){display:none}:host{--background:rgba(var(--ion-text-color-rgb,0,0,0),0.065);border-radius:8px;overflow:hidden;z-index:0}:host(.ion-color){background:rgba(var(--ion-color-base-rgb),.065)}:host(.in-toolbar){margin-left:auto;margin-right:auto;margin-top:0;margin-bottom:0;width:auto}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-toolbar){margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}:host(.in-toolbar:not(.ion-color)){background:var(--ion-toolbar-segment-background,var(--background))}:host(.in-toolbar-color:not(.ion-color)){background:rgba(var(--ion-color-contrast-rgb),.11)}"}};let s=0;const l=class{constructor(t){Object(o.k)(this,t),this.segmentEl=null,this.checked=!1,this.disabled=!1,this.layout="icon-top",this.type="button",this.value="ion-sb-"+s++,this.updateState=()=>{this.segmentEl&&(this.checked=this.segmentEl.value===this.value)}}connectedCallback(){const t=this.segmentEl=this.el.closest("ion-segment");t&&(this.updateState(),t.addEventListener("ionChange",this.updateState))}disconnectedCallback(){const t=this.segmentEl;t&&(t.removeEventListener("ionChange",this.updateState),this.segmentEl=null)}get hasLabel(){return!!this.el.querySelector("ion-label")}get hasIcon(){return!!this.el.querySelector("ion-icon")}render(){const{checked:t,type:e,disabled:n,hasIcon:i,hasLabel:a,layout:s}=this,l=Object(o.d)(this);return Object(o.i)(o.a,{"aria-disabled":n?"true":null,class:{[l]:!0,"in-toolbar":Object(r.c)("ion-toolbar",this.el),"in-toolbar-color":Object(r.c)("ion-toolbar[color]",this.el),"in-segment":Object(r.c)("ion-segment",this.el),"in-segment-color":Object(r.c)("ion-segment[color]",this.el),"segment-button-has-label":a,"segment-button-has-icon":i,"segment-button-has-label-only":a&&!i,"segment-button-has-icon-only":i&&!a,"segment-button-disabled":n,"segment-button-checked":t,[`segment-button-layout-${s}`]:!0,"ion-activatable":!0,"ion-activatable-instant":!0,"ion-focusable":!0}},Object(o.i)("button",{type:e,"aria-pressed":t?"true":null,class:"button-native",disabled:n},Object(o.i)("span",{class:"button-inner"},Object(o.i)("slot",null)),"md"===l&&Object(o.i)("ion-ripple-effect",null)),Object(o.i)("div",{part:"indicator",class:{"segment-button-indicator":!0,"segment-button-indicator-animated":!0}},Object(o.i)("div",{part:"indicator-background",class:"segment-button-indicator-background"})))}get el(){return Object(o.f)(this)}static get style(){return':host{--color:initial;--color-hover:var(--color);--color-checked:var(--color);--color-disabled:var(--color);--padding-start:0;--padding-end:0;border-radius:var(--border-radius);-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-direction:column;flex-direction:column;background:var(--background);color:var(--color);text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native,:host{display:-ms-flexbox;display:flex;height:auto}.button-native{border-radius:0;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-webkit-transform:translateZ(0);transform:translateZ(0);position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;min-width:inherit;max-width:inherit;min-height:inherit;max-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:none;outline:none;background:transparent;contain:content;cursor:pointer;overflow:hidden;z-index:2}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native:after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:inherit;flex-flow:inherit;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}:host(.segment-button-checked){background:var(--background-checked);color:var(--color-checked)}:host(.segment-button-disabled){cursor:default;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native:after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover:hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native:after{background:var(--background-hover);opacity:var(--background-hover-opacity)}:host(.segment-button-checked:hover) .button-native{color:var(--color-checked)}}::slotted(ion-icon){-ms-flex-negative:0;flex-shrink:0;-ms-flex-order:-1;order:-1;pointer-events:none}::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;line-height:22px;text-overflow:ellipsis;white-space:nowrap;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:none}:host(.segment-button-layout-icon-top) .button-native{-ms-flex-direction:column;flex-direction:column}:host(.segment-button-layout-icon-start) .button-native{-ms-flex-direction:row;flex-direction:row}:host(.segment-button-layout-icon-end) .button-native{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.segment-button-layout-icon-bottom) .button-native{-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.segment-button-layout-icon-hide) ::slotted(ion-icon),:host(.segment-button-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color,var(--color-checked))}.segment-button-indicator{-webkit-transform-origin:left;transform-origin:left;position:absolute;opacity:0;-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform,opacity}.segment-button-indicator-background{width:100%;height:var(--indicator-height);-webkit-transform:var(--indicator-transform);transform:var(--indicator-transform);-webkit-box-shadow:var(--indicator-box-shadow);box-shadow:var(--indicator-box-shadow)}.segment-button-indicator-animated{-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-checked) .segment-button-indicator{opacity:1}@media (prefers-reduced-motion:reduce){.segment-button-indicator-background{-webkit-transform:none;transform:none}.segment-button-indicator-animated{-webkit-transition:none;transition:none}}:host{--background:none;--background-checked:none;--background-hover:none;--background-hover-opacity:0;--background-focused:none;--background-focused-opacity:0;--border-radius:7px;--border-width:1px;--border-color:rgba(var(--ion-text-color-rgb,0,0,0),0.12);--border-style:solid;--indicator-box-shadow:0 0 5px rgba(0,0,0,0.16);--indicator-color:var(--ion-color-step-350,var(--ion-background-color,#fff));--indicator-height:100%;--indicator-transition:transform 260ms cubic-bezier(0.4,0,0.2,1);--indicator-transform:none;--transition:100ms all linear;--padding-top:0;--padding-end:13px;--padding-bottom:0;--padding-start:13px;margin-top:2px;margin-bottom:2px;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-direction:row;flex-direction:row;min-width:70px;min-height:28px;-webkit-transform:translateZ(0);transform:translateZ(0);font-size:13px;font-weight:450;line-height:37px}:host:before{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;-webkit-transition:opacity .16s ease-in-out;transition:opacity .16s ease-in-out;-webkit-transition-delay:.1s;transition-delay:.1s;border-left:var(--border-width) var(--border-style) var(--border-color);content:"";opacity:1;will-change:opacity}:host(:first-of-type):before{border-left-color:transparent}:host(.segment-button-disabled){opacity:.3}::slotted(ion-icon){font-size:24px}:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:2px;margin-right:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.segment-button-layout-icon-start) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:0;margin-inline-end:0}}:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:0;margin-right:2px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.segment-button-layout-icon-end) ::slotted(ion-label){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:2px;margin-inline-end:2px}}.segment-button-indicator{padding-left:2px;padding-right:2px;left:0;right:0;top:0;bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.segment-button-indicator{padding-left:unset;padding-right:unset;-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:2px;padding-inline-end:2px}}.segment-button-indicator-background{border-radius:7px;background:var(--indicator-color);-webkit-transition:var(--indicator-transition);transition:var(--indicator-transition)}:host(.segment-button-after-checked):before,:host(.segment-button-checked):before{opacity:0}:host(.segment-button-checked){z-index:-1}:host(.segment-button-activated){--indicator-transform:scale(0.95)}:host(.ion-focused) .button-native{opacity:.7}@media (any-hover:hover){:host(:hover) .button-native{opacity:.5}:host(.segment-button-checked:hover) .button-native{opacity:1}}:host(.in-segment-color){background:none;color:var(--ion-text-color,#000)}:host(.in-segment-color) .segment-button-indicator-background{background:var(--ion-color-step-350,var(--ion-background-color,#fff))}@media (any-hover:hover){:host(.in-segment-color.segment-button-checked:hover) .button-native,:host(.in-segment-color:hover) .button-native{color:var(--ion-text-color,#000)}}:host(.in-toolbar:not(.in-segment-color)){--background-checked:var(--ion-toolbar-segment-background-checked,none);--color:var(--ion-toolbar-segment-color,var(--ion-toolbar-color),initial);--color-checked:var(--ion-toolbar-segment-color-checked,var(--ion-toolbar-color),initial);--indicator-color:var(--ion-toolbar-segment-indicator-color,var(--ion-color-step-350,var(--ion-background-color,#fff)))}:host(.in-toolbar-color) .segment-button-indicator-background{background:#fff}:host(.in-toolbar-color:not(.in-segment-color)) .button-native{color:var(--ion-color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color)) .button-native{color:var(--ion-color-base)}@media (any-hover:hover){:host(.in-toolbar-color:not(.in-segment-color):hover) .button-native{color:var(--ion-color-contrast)}:host(.in-toolbar-color.segment-button-checked:not(.in-segment-color):hover) .button-native{color:var(--ion-color-base)}}'}}}}]);