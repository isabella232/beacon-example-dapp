(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"48AM":function(t,e){var r=function t(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""},n=1,s=7,o=4,i=1e3,a=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,u=/@import[^;]*;/gim,c=/^@[^\s]*keyframes/,l=/\s+/g;function p(t,e,r){t.lastIndex=0;var n=e.substring(r).match(t);if(n){var s=r+n.index;return{start:s,end:s+n[0].length}}return null}var f=/\bvar\(/,h=/\B--[\w-]+\s*:/,v=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,d=/^[\t ]+\n/gm;function m(t,e,r){var n=function t(e,r){var n=p(f,e,r);if(!n)return null;var s=function t(e,r){for(var n=0,s=r;s<e.length;s++){var o=e[s];if("("===o)n++;else if(")"===o&&--n<=0)return s+1}return s}(e,n.start),o=e.substring(n.end,s-1).split(","),i=o[0],a=o.slice(1);return{start:n.start,end:s,propName:i.trim(),fallback:a.length>0?a.join(",").trim():void 0}}(t,r);if(!n)return e.push(t.substring(r,t.length)),t.length;var s=n.propName,o=null!=n.fallback?b(n.fallback):void 0;return e.push(t.substring(r,n.start),(function(t){return function t(e,r,n){return e[r]?e[r]:n?g(n,e):""}(t,s,o)})),n.end}function g(t,e){for(var r="",n=0;n<t.length;n++){var s=t[n];r+="string"==typeof s?s:s(e)}return r}function y(t,e){for(var r=!1,n=!1,s=e;s<t.length;s++){var o=t[s];if(r)n&&'"'===o&&(r=!1),n||"'"!==o||(r=!1);else if('"'===o)r=!0,n=!0;else if("'"===o)r=!0,n=!1;else{if(";"===o)return s+1;if("}"===o)return s}}return s}function b(t){var e=0;t=function t(e){for(var r="",n=0;;){var s=p(h,e,n),o=s?s.start:e.length;if(r+=e.substring(n,o),!s)break;n=y(e,o)}return r}(t=t.replace(v,"")).replace(d,"");for(var r=[];e<t.length;)e=m(t,r,e);return r}function S(t){var e={};t.forEach((function(t){t.declarations.forEach((function(t){e[t.prop]=t.value}))}));for(var r={},n=Object.entries(e),s=function(t){var e=!1;if(n.forEach((function(t){var n=t[0],s=g(t[1],r);s!==r[n]&&(r[n]=s,e=!0)})),!e)return"break"},o=0;o<10&&"break"!==s();o++);return r}function w(t,e){if(void 0===e&&(e=0),!t.rules)return[];var r=[];return t.rules.filter((function(t){return t.type===n})).forEach((function(t){var n=function t(e){for(var r,n=[];r=x.exec(e.trim());){var s=M(r[2]),o=s.value,i=s.important;n.push({prop:r[1].trim(),value:b(o),important:i})}return n}(t.cssText);n.length>0&&t.parsedSelector.split(",").forEach((function(t){t=t.trim(),r.push({selector:t,declarations:n,specificity:1,nu:e})})),e++})),r}var x=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gm;function M(t){var e=(t=t.replace(/\s+/gim," ").trim()).endsWith("!important");return e&&(t=t.substr(0,t.length-"!important".length).trim()),{value:t,important:e}}function E(t){var e=[];return t.forEach((function(t){e.push.apply(e,t.selectors)})),e}function C(t){var e=function t(e){return function t(e,r){var a=r.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=a.trim(),e.parent){var u=e.previous?e.previous.end:e.parent.start;a=(a=(a=function t(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){for(var t=arguments[1],e=6-t.length;e--;)t="0"+t;return"\\"+t}))}(a=r.substring(u,e.start-1))).replace(l," ")).substring(a.lastIndexOf(";")+1);var p=e.parsedSelector=e.selector=a.trim();e.atRule=0===p.indexOf("@"),e.atRule?0===p.indexOf("@media")?e.type=o:p.match(c)&&(e.type=s,e.keyframesName=e.selector.split(l).pop()):0===p.indexOf("--")?e.type=i:e.type=n}var f=e.rules;if(f)for(var h=0,v=f.length,d=void 0;h<v&&(d=f[h]);h++)t(d,r);return e}(function t(e){var n=new r;n.start=0,n.end=e.length;for(var s=n,o=0,i=e.length;o<i;o++)if("{"===e[o]){s.rules||(s.rules=[]);var a=s,u=a.rules[a.rules.length-1]||null;(s=new r).start=o+1,s.parent=a,s.previous=u,a.rules.push(s)}else"}"===e[o]&&(s.end=o+1,s=s.parent||n);return n}(e=function t(e){return e.replace(a,"").replace(u,"")}(e)),e)}(t),p=b(t);return{original:t,template:p,selectors:w(e),usesCssVars:p.length>1}}function k(t,e){if(t.some((function(t){return t.styleEl===e})))return!1;var r=C(e.textContent);return r.styleEl=e,t.push(r),!0}function I(t){var e=S(E(t));t.forEach((function(t){t.usesCssVars&&(t.styleEl.textContent=g(t.template,e))}))}function O(t,e,r){return function t(e,r,n){return e.replace(new RegExp(r,"g"),n)}(t,"\\."+e,"."+r)}function A(t,e){return Array.from(t.querySelectorAll("style:not([data-styles]):not([data-no-shim])")).map((function(t){return k(e,t)})).some(Boolean)}function T(t,e,r){var n=r.href;return fetch(n).then((function(t){return t.text()})).then((function(s){if(function t(e){return e.indexOf("var(")>-1||j.test(e)}(s)&&r.parentNode){(function t(e){return N.lastIndex=0,N.test(e)})(s)&&(s=function t(e,r){var n=r.replace(/[^/]*$/,"");return e.replace(N,(function(t,e){var r=n+e;return t.replace(e,r)}))}(s,n));var o=t.createElement("style");o.setAttribute("data-styles",""),o.textContent=s,k(e,o),r.parentNode.insertBefore(o,r),r.remove()}})).catch((function(t){console.error(t)}))}var j=/[\s;{]--[-a-zA-Z0-9]+\s*:/m,N=/url[\s]*\([\s]*['"]?(?!(?:https?|data)\:|\/)([^\'\"\)]*)[\s]*['"]?\)[\s]*/gim,_=function(){function t(t,e){this.win=t,this.doc=e,this.count=0,this.hostStyleMap=new WeakMap,this.hostScopeMap=new WeakMap,this.globalScopes=[],this.scopesMap=new Map,this.didInit=!1}return t.prototype.initShim=function(){var t=this;return this.didInit?Promise.resolve():(this.didInit=!0,new Promise((function(e){t.win.requestAnimationFrame((function(){!function t(e,r){new MutationObserver((function(){A(e,r)&&I(r)})).observe(document.head,{childList:!0})}(t.doc,t.globalScopes),function t(e,r){return A(e,r),function t(e,r){for(var n=[],s=e.querySelectorAll('link[rel="stylesheet"][href]:not([data-no-shim])'),o=0;o<s.length;o++)n.push(T(e,r,s[o]));return Promise.all(n)}(e,r)}(t.doc,t.globalScopes).then((function(){return e()}))}))})))},t.prototype.addLink=function(t){var e=this;return T(this.doc,this.globalScopes,t).then((function(){e.updateGlobal()}))},t.prototype.addGlobalStyle=function(t){k(this.globalScopes,t)&&this.updateGlobal()},t.prototype.createHostStyle=function(t,e,r,n){if(this.hostScopeMap.has(t))throw new Error("host style already created");var s=this.registerHostTemplate(r,e,n),o=this.doc.createElement("style");return o.setAttribute("data-no-shim",""),s.usesCssVars?n?(o["s-sc"]=e=s.scopeId+"-"+this.count,o.textContent="/*needs update*/",this.hostStyleMap.set(t,o),this.hostScopeMap.set(t,function t(e,r){var n=e.template.map((function(t){return"string"==typeof t?O(t,e.scopeId,r):t})),s=e.selectors.map((function(t){return Object.assign(Object.assign({},t),{selector:O(t.selector,e.scopeId,r)})}));return Object.assign(Object.assign({},e),{template:n,selectors:s,scopeId:r})}(s,e)),this.count++):(s.styleEl=o,s.usesCssVars||(o.textContent=g(s.template,{})),this.globalScopes.push(s),this.updateGlobal(),this.hostScopeMap.set(t,s)):o.textContent=r,o},t.prototype.removeHost=function(t){var e=this.hostStyleMap.get(t);e&&e.remove(),this.hostStyleMap.delete(t),this.hostScopeMap.delete(t)},t.prototype.updateHost=function(t){var e=this.hostScopeMap.get(t);if(e&&e.usesCssVars&&e.isScoped){var r=this.hostStyleMap.get(t);if(r){var n=S(function t(e,r,n){var s=[],o=function t(e,r){for(var n=[];r;){var s=e.get(r);s&&n.push(s),r=r.parentElement}return n}(r,e);return n.forEach((function(t){return s.push(t)})),o.forEach((function(t){return s.push(t)})),function t(e){return e.sort((function(t,e){return t.specificity===e.specificity?t.nu-e.nu:t.specificity-e.specificity})),e}(E(s).filter((function(t){return function t(e,r){return":root"===r||"html"===r||e.matches(r)}(e,t.selector)})))}(t,this.hostScopeMap,this.globalScopes));r.textContent=g(e.template,n)}}},t.prototype.updateGlobal=function(){I(this.globalScopes)},t.prototype.registerHostTemplate=function(t,e,r){var n=this.scopesMap.get(e);return n||((n=C(t)).scopeId=e,n.isScoped=r,this.scopesMap.set(e,n)),n},t}(),G=window;!G.__stencil_cssshim&&function t(){return!(G.CSS&&G.CSS.supports&&G.CSS.supports("color","var(--c)"))}()&&(G.__stencil_cssshim=new _(G,document))}}]);