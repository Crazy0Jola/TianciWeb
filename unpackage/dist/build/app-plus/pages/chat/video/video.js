!function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=173)}({0:function(t,e,r){"use strict";function o(t,e,r,o,n,i,a,s,p,u){var d,c="function"==typeof t?t.options:t;if(p&&(c.components=Object.assign(p,c.components||{})),u&&((u.beforeCreate||(u.beforeCreate=[])).unshift(function(){this[u.__module]=this}),(c.mixins||(c.mixins=[])).push(u)),e&&(c.render=e,c.staticRenderFns=r,c._compiled=!0),o&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},c._ssrRegister=d):n&&(d=s?function(){n.call(this,this.$root.$options.shadowRoot)}:n),d)if(c.functional){c._injectStyles=d;var l=c.render;c.render=function(t,e){return d.call(e),l(t,e)}}else{var g=c.beforeCreate;c.beforeCreate=g?[].concat(g,d):[d]}return{exports:t,options:c}}r.d(e,"a",function(){return o})},1:function(t,e,r){"use strict";var o;Object.defineProperty(e,"__esModule",{value:!0}),e.weexPlus=e.default=void 0,o="function"==typeof getUni?getUni:function(){var t=function(t){return"function"==typeof t},e=/^\$|^on|^create|Sync$|Manager$|^pause/,r=["os","getCurrentSubNVue","getSubNVueById","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],o=function(t){return!(e.test(t)&&"createBLEConnection"!==t||~r.indexOf(t))},i=function(e){return function(){for(var r=arguments.length,o=Array(r>1?r-1:0),n=1;n<r;n++)o[n-1]=arguments[n];var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t(i.success)||t(i.fail)||t(i.complete)?e.apply(void 0,[i].concat(o)):new Promise(function(t,r){e.apply(void 0,[Object.assign({},i,{success:t,fail:r})].concat(o)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(r){return e.resolve(t()).then(function(){return r})},function(r){return e.resolve(t()).then(function(){throw r})})}}).then(function(t){return[null,t]}).catch(function(t){return[t]})}},a=[],s=void 0;function p(t){a.forEach(function(e){return e({origin:s,data:t})})}var u=n.webview.currentWebview().id,d=new BroadcastChannel("UNI-APP-SUBNVUE");function c(t){t.$processed=!0;var e=n.webview.currentWebview().id===t.id,r="uniNView"===t.__uniapp_origin_type&&t.__uniapp_origin_id,o=t.id;if(t.postMessage=function(t){r?d.postMessage({data:t,to:e?r:o}):b({type:"UniAppSubNVue",data:t})},t.onMessage=function(t){a.push(t)},t.__uniapp_mask_id){s=t.__uniapp_host;var i=t.__uniapp_mask,p=n.webview.getWebviewById(t.__uniapp_mask_id);p=p.parent()||p;var u=t.show,c=t.hide,l=t.close,g=function(){p.setStyle({mask:"none"})};t.show=function(){p.setStyle({mask:i});for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];return u.apply(t,r)},t.hide=function(){g();for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];return c.apply(t,r)},t.close=function(){g();for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];return l.apply(t,r)}}}function l(t){var e=n.webview.getWebviewById(t);return e&&!e.$processed&&c(e),e}d.onmessage=function(t){t.data.to===u&&p(t.data.data)};var g=weex.requireModule("plus"),f=weex.requireModule("globalEvent"),h=0,m={},x="__uniapp__service";f.addEventListener("plusMessage",function(t){"UniAppJsApi"===t.data.type?v(t.data.id,t.data.data):"UniAppSubNVue"===t.data.type?p(t.data.data,t.data.options):"onNavigationBarButtonTap"===t.data.type?"function"==typeof S&&S(t.data.data):"onNavigationBarSearchInputChanged"===t.data.type?"function"==typeof w&&w(t.data.data):"onNavigationBarSearchInputConfirmed"===t.data.type?"function"==typeof T&&T(t.data.data):"onNavigationBarSearchInputClicked"===t.data.type&&"function"==typeof R&&R(t.data.data)});var v=function(t,e){var r=m[t];r?(r(e),r.keepAlive||delete m[t]):console.error("callback["+t+"] is undefined")},y=function(e){var r,o,n=e.id,i=e.type,a=e.params;m[n]=(o=function(e){t(r)?r(e):r&&(~e.errMsg.indexOf(":ok")?t(r.success)&&r.success(e):~e.errMsg.indexOf(":fail")&&t(r.fail)&&r.fail(e),t(r.complete)&&r.complete(e))},(t(r=a)||r&&t(r.callback))&&(o.keepAlive=!0),o),g.postMessage({id:n,type:i,params:a},x)};function b(t){g.postMessage(t,x)}var _=function(t){return function(e){y({id:h++,type:t,params:e})}},S=void 0,w=void 0,T=void 0,R=void 0;function k(t){S=t}function L(t){w=t}function C(t){T=t}function B(t){R=t}function D(t){return weex.requireModule(t)}var N=weex.requireModule("dom"),I=weex.requireModule("globalEvent"),j=[];function O(t){"function"==typeof t&&(this.isUniAppReady?t():j.push(t))}I.addEventListener("plusMessage",function(t){"UniAppReady"===t.data.type&&(O.isUniAppReady=!0,j.length&&(j.forEach(function(t){return t()}),j=[]))});var E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q=weex.requireModule("stream"),P="GET",$=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/x-www-form-urlencoded";return"object"===(void 0===t?"undefined":E(t))?"POST"===e.toUpperCase()&&"application/json"===r.toLowerCase()?JSON.stringify(t):Object.keys(t).map(function(e){return encodeURIComponent(e)+"="+encodeURIComponent(t[e])}).join("&"):t},A=weex.requireModule("plusstorage"),M="__TYPE",U=weex.requireModule("clipboard"),V=function(){if("function"==typeof getUniEmitter)return getUniEmitter;var t={$on:function(){console.warn("uni.$on failed")},$off:function(){console.warn("uni.$off failed")},$once:function(){console.warn("uni.$once failed")},$emit:function(){console.warn("uni.$emit failed")}};return function(){return t}}();function W(t,e,r){return t[e].apply(t,r)}var H=Object.freeze({loadFontFace:function(e){var r=e.family,o=e.source,n=(e.desc,e.success),i=(e.fail,e.complete);N.addRule("fontFace",{fontFamily:r,src:o.replace(/"/g,"'")});var a={errMsg:"loadFontFace:ok",status:"loaded"};t(n)&&n(a),t(i)&&i(a)},ready:O,request:function(e){var r=e.url,o=e.data,n=e.header,i=e.method,a=void 0===i?"GET":i,s=e.dataType,p=void 0===s?"json":s,u=(e.responseType,e.success),d=e.fail,c=e.complete,l=!1,g=!1,f={};if(n)for(var h in n)g||"content-type"!==h.toLowerCase()?f[h]=n[h]:(g=!0,f["Content-Type"]=n[h]);return a===P&&o&&(r=r+(~r.indexOf("?")?"&"===r.substr(-1)||"?"===r.substr(-1)?"":"&":"?")+$(o)),q.fetch({url:r,method:a,headers:f,type:"json"===p?"json":"text",body:a!==P?$(o,a,f["Content-Type"]):""},function(e){var r=e.status,o=(e.ok,e.statusText,e.data),n=e.headers,i={};!r||-1===r||l?(i.errMsg="request:fail",t(d)&&d(i)):(i.data=o,i.statusCode=r,i.header=n,t(u)&&u(i)),t(c)&&c(i)}),{abort:function(){l=!0}}},getStorage:function(e){var r=e.key,o=(e.data,e.success),n=e.fail,i=e.complete;A.getItem(r+M,function(e){if("success"===e.result){var a=e.data;A.getItem(r,function(e){if("success"===e.result){var r=e.data;a&&r?("String"!==a&&(r=JSON.parse(r)),t(o)&&o({errMsg:"getStorage:ok",data:r})):(e.errMsg="setStorage:fail",t(n)&&n(e))}else e.errMsg="setStorage:fail",t(n)&&n(e);t(i)&&i(e)})}else e.errMsg="setStorage:fail",t(n)&&n(e),t(i)&&i(e)})},setStorage:function(e){var r=e.key,o=e.data,n=e.success,i=e.fail,a=e.complete,s="String";"object"===(void 0===o?"undefined":E(o))&&(s="Object",o=JSON.stringify(o)),A.setItem(r,o,function(e){"success"===e.result?A.setItem(r+M,s,function(e){"success"===e.result?t(n)&&n({errMsg:"setStorage:ok"}):(e.errMsg="setStorage:fail",t(i)&&i(e))}):(e.errMsg="setStorage:fail",t(i)&&i(e)),t(a)&&a(e)})},removeStorage:function(e){var r=e.key,o=(e.data,e.success),n=e.fail,i=e.complete;A.removeItem(r,function(e){"success"===e.result?t(o)&&o({errMsg:"removeStorage:ok"}):(e.errMsg="removeStorage:fail",t(n)&&n(e)),t(i)&&i(e)}),A.removeItem(r+M)},clearStorage:function(t){t.key,t.data,t.success,t.fail,t.complete},getClipboardData:function(e){var r=e.success,o=(e.fail,e.complete);U.getString(function(e){var n={errMsg:"getClipboardData:ok",data:e.data};t(r)&&r(n),t(o)&&o(n)})},setClipboardData:function(e){var r=e.data,o=e.success,n=(e.fail,e.complete),i={errMsg:"setClipboardData:ok"};U.setString(r),t(o)&&o(i),t(n)&&n(i)},onSubNVueMessage:p,getSubNVueById:l,getCurrentSubNVue:function(){return l(n.webview.currentWebview().id)},$on:function(){return W(V(),"$on",[].concat(Array.prototype.slice.call(arguments)))},$off:function(){return W(V(),"$off",[].concat(Array.prototype.slice.call(arguments)))},$once:function(){return W(V(),"$once",[].concat(Array.prototype.slice.call(arguments)))},$emit:function(){return W(V(),"$emit",[].concat(Array.prototype.slice.call(arguments)))}}),F={os:{nvue:!0}},z={};return"undefined"!=typeof Proxy?z=new Proxy({},{get:function(t,e){if("os"===e)return{nvue:!0};if("postMessage"===e)return b;if("requireNativePlugin"===e)return D;if("onNavigationBarButtonTap"===e)return k;if("onNavigationBarSearchInputChanged"===e)return L;if("onNavigationBarSearchInputConfirmed"===e)return C;if("onNavigationBarSearchInputClicked"===e)return B;var r=H[e];return r||(r=_(e)),o(e)?i(r):r}}):(Object.keys(F).forEach(function(t){z[t]=F[t]}),z.postMessage=b,z.requireNativePlugin=D,z.onNavigationBarButtonTap=k,z.onNavigationBarSearchInputChanged=L,z.onNavigationBarSearchInputConfirmed=C,z.onNavigationBarSearchInputClicked=B,Object.keys({uploadFile:!0,downloadFile:!0,chooseImage:!0,previewImage:!0,getImageInfo:!0,saveImageToPhotosAlbum:!0,chooseVideo:!0,saveVideoToPhotosAlbum:!0,saveFile:!0,getSavedFileList:!0,getSavedFileInfo:!0,removeSavedFile:!0,openDocument:!0,setStorage:!0,getStorage:!0,getStorageInfo:!0,removeStorage:!0,clearStorage:!0,getLocation:!0,chooseLocation:!0,openLocation:!0,getSystemInfo:!0,getNetworkType:!0,makePhoneCall:!0,scanCode:!0,setScreenBrightness:!0,getScreenBrightness:!0,setKeepScreenOn:!0,vibrateLong:!0,vibrateShort:!0,addPhoneContact:!0,showToast:!0,showLoading:!0,hideToast:!0,hideLoading:!0,showModal:!0,showActionSheet:!0,setNavigationBarTitle:!0,setNavigationBarColor:!0,navigateTo:!0,redirectTo:!0,reLaunch:!0,switchTab:!0,navigateBack:!0,getProvider:!0,login:!0,getUserInfo:!0,share:!0,requestPayment:!0,subscribePush:!0,unsubscribePush:!0,onPush:!0,offPush:!0}).forEach(function(t){var e=H[t];e||(e=_(t)),o(t)?z[t]=i(e):z[t]=e})),z};var n=new WeexPlus(weex);e.weexPlus=n;var i=o(weex,n,BroadcastChannel);e.default=i},117:function(t,e,r){"use strict";var o=r(118),n=r.n(o);e.default=n.a},118:function(t,e,r){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{url:"",windowHeight:500}},onLoad:function(e){if(""===e.url)return this.back(),t.showToast({title:"非法视频",icon:"none"});this.url=e.url,console.log(r(e.url," at pages\\chat\\video\\video.nvue:28"));var o=t.getSystemInfoSync();this.windowHeight=o.windowHeight},methods:{back:function(){t.navigateBack({delta:1})}}};e.default=o}).call(this,r(1).default,r(14).default)},13:function(t,e,r){"use strict";r.r(e),e.default={appid:"__UNI__B7D51E8"}},138:function(t,e,r){"use strict";var o=function(){var t=this.$createElement,e=this._self._c||t;return e("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,enableBackToTop:!0,bubble:"true"}},[e("view",{staticClass:["position-relative"]},[e("u-video",{staticStyle:{width:"750rpx"},style:"height:"+this.windowHeight+"px;",attrs:{src:this.url,controls:"",autoPlay:""},on:{ended:this.back}}),e("view",{staticClass:["position-absolute","rounded","flex","align-center","justify-center"],staticStyle:{width:"80rpx",height:"80rpx",left:"20rpx",top:"50rpx",backgroundColor:"rgba(255,255,255,0.3)"},on:{click:this.back}},[e("u-text",{staticClass:["iconfont","text-white","font-lg"]},[this._v("")])])],1)])},n=[];r.d(e,"b",function(){return o}),r.d(e,"c",function(){return n}),r.d(e,"a",function(){})},14:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];var o=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(e){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var r=function(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}(t).toUpperCase();t="NUMBER"===r||"BOOLEAN"===r?"---BEGIN:"+r+"---"+t+"---END:"+r+"---":String(t)}return t}),n="";if(o.length>1){var i=o.pop();n=o.join("---COMMA---"),0===i.indexOf(" at ")?n+=i:n+="---COMMA---"+i}else n=o[0];return n}},173:function(t,e,r){"use strict";r.r(e);r(23),r(27);var o=r(80);o.default.mpType="page",o.default.route="pages/chat/video/video",o.default.el="#root",new Vue(o.default)},2:function(t,e){t.exports={iconfont:{fontFamily:"iconfont"},view:{fontSize:"28rpx",lineHeight:1.8,color:"#0E151D"},text:{fontSize:"28rpx",lineHeight:1.8,color:"#0E151D"},"w-100":{width:"750rpx"},row:{marginRight:"-20rpx",marginLeft:"-20rpx",flexWrap:"wrap",flexDirection:"row"},"col-1":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"62.5rpx"},"col-2":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"125rpx"},"col-3":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"187.5rpx"},"col-4":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"250rpx"},"col-5":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"312.5rpx"},"col-6":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"375rpx"},"col-7":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"437.5rpx"},"col-8":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"500rpx"},"col-9":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"562.5rpx"},"col-10":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"625rpx"},"col-11":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"687.5rpx"},"col-12":{position:"relative",paddingRight:"20rpx",paddingLeft:"20rpx",width:"750rpx"},"col-offset-12":{marginLeft:"750rpx"},"col-offset-11":{marginLeft:"687.5rpx"},"col-offset-10":{marginLeft:"625rpx"},"col-offset-9":{marginLeft:"562.5rpx"},"col-offset-8":{marginLeft:"500rpx"},"col-offset-7":{marginLeft:"437.5rpx"},"col-offset-6":{marginLeft:"375rpx"},"col-offset-5":{marginLeft:"312.5rpx"},"col-offset-4":{marginLeft:"250rpx"},"col-offset-3":{marginLeft:"187.5rpx"},"col-offset-2":{marginLeft:"125rpx"},"col-offset-1":{marginLeft:"62.5rpx"},"col-offset-0":{marginLeft:0},flex:{flexDirection:"row"},"flex-row":{flexDirection:"row"},"flex-column":{flexDirection:"column"},"flex-row-reverse":{flexDirection:"row-reverse"},"flex-column-reverse":{flexDirection:"column-reverse"},"flex-wrap":{flexWrap:"wrap"},"flex-nowrap":{flexWrap:"nowrap"},"justify-start":{justifyContent:"flex-start"},"justify-end":{justifyContent:"flex-end"},"justify-between":{justifyContent:"space-between"},"justify-center":{justifyContent:"center"},"align-center":{alignItems:"center"},"align-stretch":{alignItems:"stretch"},"align-start":{alignItems:"flex-start"},"align-end":{alignItems:"flex-end"},"flex-1":{flex:1},"flex-2":{flex:2},"flex-3":{flex:3},"flex-4":{flex:4},"flex-5":{flex:5},container:{paddingRight:"20rpx",paddingLeft:"20rpx"},"m-0":{marginTop:0,marginRight:0,marginBottom:0,marginLeft:0},"m-1":{marginTop:"10rpx",marginRight:"10rpx",marginBottom:"10rpx",marginLeft:"10rpx"},"m-2":{marginTop:"20rpx",marginRight:"20rpx",marginBottom:"20rpx",marginLeft:"20rpx"},"m-3":{marginTop:"30rpx",marginRight:"30rpx",marginBottom:"30rpx",marginLeft:"30rpx"},"m-4":{marginTop:"40rpx",marginRight:"40rpx",marginBottom:"40rpx",marginLeft:"40rpx"},"m-5":{marginTop:"50rpx",marginRight:"50rpx",marginBottom:"50rpx",marginLeft:"50rpx"},"mt-0":{marginTop:0},"mt-1":{marginTop:"10rpx"},"mt-2":{marginTop:"20rpx"},"mt-3":{marginTop:"30rpx"},"mt-4":{marginTop:"40rpx"},"mt-5":{marginTop:"50rpx"},"mb-0":{marginBottom:0},"mb-1":{marginBottom:"10rpx"},"mb-2":{marginBottom:"20rpx"},"mb-3":{marginBottom:"30rpx"},"mb-4":{marginBottom:"40rpx"},"mb-5":{marginBottom:"50rpx"},"ml-0":{marginLeft:0},"ml-1":{marginLeft:"10rpx"},"ml-2":{marginLeft:"20rpx"},"ml-3":{marginLeft:"30rpx"},"ml-4":{marginLeft:"40rpx"},"ml-5":{marginLeft:"50rpx"},"mr-0":{marginRight:0},"mr-1":{marginRight:"10rpx"},"mr-2":{marginRight:"20rpx"},"mr-3":{marginRight:"30rpx"},"mr-4":{marginRight:"40rpx"},"mr-5":{marginRight:"50rpx"},"my-0":{marginTop:0,marginBottom:0},"my-1":{marginTop:"10rpx",marginBottom:"10rpx"},"my-2":{marginTop:"20rpx",marginBottom:"20rpx"},"my-3":{marginTop:"30rpx",marginBottom:"30rpx"},"my-4":{marginTop:"40rpx",marginBottom:"40rpx"},"my-5":{marginTop:"50rpx",marginBottom:"50rpx"},"mx-0":{marginLeft:0,marginRight:0},"mx-1":{marginLeft:"10rpx",marginRight:"10rpx"},"mx-2":{marginLeft:"20rpx",marginRight:"20rpx"},"mx-3":{marginLeft:"30rpx",marginRight:"30rpx"},"mx-4":{marginLeft:"40rpx",marginRight:"40rpx"},"mx-5":{marginLeft:"50rpx",marginRight:"50rpx"},"p-0":{paddingTop:0,paddingRight:0,paddingBottom:0,paddingLeft:0},p:{paddingTop:"5rpx",paddingRight:"5rpx",paddingBottom:"5rpx",paddingLeft:"5rpx"},"p-1":{paddingTop:"10rpx",paddingRight:"10rpx",paddingBottom:"10rpx",paddingLeft:"10rpx"},"p-2":{paddingTop:"20rpx",paddingRight:"20rpx",paddingBottom:"20rpx",paddingLeft:"20rpx"},"p-3":{paddingTop:"30rpx",paddingRight:"30rpx",paddingBottom:"30rpx",paddingLeft:"30rpx"},"p-4":{paddingTop:"40rpx",paddingRight:"40rpx",paddingBottom:"40rpx",paddingLeft:"40rpx"},"p-5":{paddingTop:"50rpx",paddingRight:"50rpx",paddingBottom:"50rpx",paddingLeft:"50rpx"},"pt-0":{paddingTop:0},pt:{paddingTop:"5rpx"},"pt-1":{paddingTop:"10rpx"},"pt-2":{paddingTop:"20rpx"},"pt-3":{paddingTop:"30rpx"},"pt-4":{paddingTop:"40rpx"},"pt-5":{paddingTop:"50rpx"},"pb-0":{paddingBottom:0},"pb-1":{paddingBottom:"10rpx"},pb:{paddingBottom:"5rpx"},"pb-2":{paddingBottom:"20rpx"},"pb-3":{paddingBottom:"30rpx"},"pb-4":{paddingBottom:"40rpx"},"pb-5":{paddingBottom:"50rpx"},"pl-0":{paddingLeft:0},pl:{paddingLeft:"5rpx"},"pl-1":{paddingLeft:"10rpx"},"pl-2":{paddingLeft:"20rpx"},"pl-3":{paddingLeft:"30rpx"},"pl-4":{paddingLeft:"40rpx"},"pl-5":{paddingLeft:"50rpx"},"pr-0":{paddingRight:0},pr:{paddingRight:"5rpx"},"pr-1":{paddingRight:"10rpx"},"pr-2":{paddingRight:"20rpx"},"pr-3":{paddingRight:"30rpx"},"pr-4":{paddingRight:"40rpx"},"pr-5":{paddingRight:"50rpx"},"py-0":{paddingTop:0,paddingBottom:0},py:{paddingTop:"5rpx",paddingBottom:"5rpx"},"py-1":{paddingTop:"10rpx",paddingBottom:"10rpx"},"py-2":{paddingTop:"20rpx",paddingBottom:"20rpx"},"py-3":{paddingTop:"30rpx",paddingBottom:"30rpx"},"py-4":{paddingTop:"40rpx",paddingBottom:"40rpx"},"py-5":{paddingTop:"50rpx",paddingBottom:"50rpx"},"px-0":{paddingLeft:0,paddingRight:0},"px-1":{paddingLeft:"10rpx",paddingRight:"10rpx"},px:{paddingLeft:"5rpx",paddingRight:"5rpx"},"px-2":{paddingLeft:"20rpx",paddingRight:"20rpx"},"px-3":{paddingLeft:"30rpx",paddingRight:"30rpx"},"px-4":{paddingLeft:"40rpx",paddingRight:"40rpx"},"px-5":{paddingLeft:"50rpx",paddingRight:"50rpx"},"font-small":{fontSize:"20rpx"},"font-sm":{fontSize:"25rpx"},font:{fontSize:"30rpx"},"font-md":{fontSize:"35rpx"},"font-lg":{fontSize:"40rpx"},h1:{fontSize:"80rpx",lineHeight:1.8},h2:{fontSize:"60rpx",lineHeight:1.8},h3:{fontSize:"45rpx",lineHeight:1.8},h4:{fontSize:"32rpx",lineHeight:1.8},h5:{fontSize:"30rpx",lineHeight:1.8},h6:{fontSize:"28rpx",lineHeight:1.8},"text-through":{textDecoration:"line-through"},"text-left":{textAlign:"left"},"text-right":{textAlign:"right"},"text-center":{textAlign:"center"},"text-ellipsis":{lines:1,textOverflow:"ellipsis"},"font-weight-light":{fontWeight:"300"},"font-weight-lighter":{fontWeight:"100"},"font-weight-normal":{fontWeight:"400"},"font-weight-bold":{fontWeight:"700"},"font-weight-bolder":{fontWeight:"bold"},"font-italic":{fontStyle:"italic"},"text-sq":{color:"rgb(93,120,255)"},"text-qy":{color:"rgb(50,205,50)"},"text-tcb":{color:"rgb(243,154,24)"},"text-ws":{color:"rgb(205,133,63)"},"text-zb":{color:"rgb(255,182,193)"},"text-ys":{color:"rgb(77,77,77)"},"text-wy":{color:"rgb(255,192,203)"},"text-sy":{color:"rgb(30,144,255)"},"text-jj":{color:"rgb(212,35,122)"},"text-qyfw":{color:"rgb(244,234,42)"},"text-zwfw":{color:"rgb(19,34,122)"},"text-shfw":{color:"rgb(250,128,114)"},"text-bm":{color:"rgb(31,203,184)"},"text-ls":{color:"rgb(191,191,191)"},"text-hy":{color:"rgb(173,216,230)"},"text-xz":{color:"rgb(44,44,44)"},"text-yq":{color:"rgb(216,30,6)"},"text-gray":{color:"#aaaaaa"},"text-white":{color:"#ffffff"},"text-red":{color:"rgb(216,30,6)"},"text-primary":{color:"#007bff"},"text-hover-primary":{color:"#0056b3"},"text-secondary":{color:"#6c757d"},"text-hover-secondary":{color:"#494f54"},"text-success":{color:"#28a745"},"text-hover-success":{color:"#19692c"},"text-info":{color:"#17a2b8"},"text-hover-info":{color:"#0f6674"},"text-warning":{color:"#ffc107"},"text-hover-warning":{color:"#ba8b00"},"text-danger":{color:"#dc3545"},"text-hover-danger":{color:"#a71d2a"},"text-light":{color:"#f8f9fa"},"text-hover-light":{color:"#cbd3da"},"text-dark":{color:"#343a40"},"text-hover-dark":{color:"#121416"},"text-body":{color:"#212529"},"text-muted":{color:"#6c757d"},"text-light-muted":{color:"#A9A5A0"},"text-light-black":{color:"rgba(0,0,0,0.5)"},"text-light-white":{color:"rgba(255,255,255,0.5)"},"bg-primary":{backgroundColor:"#007bff"},"bg-hover-primary":{"backgroundColor:hover":"#0062cc"},"bg-secondary":{backgroundColor:"#6c757d"},"bg-hover-secondary":{"backgroundColor:hover":"#545b62"},"bg-success":{backgroundColor:"#28a745"},"bg-hover-success":{backgroundColor:"#1e7e34"},"bg-info":{backgroundColor:"#17a2b8"},"bg-hover-info":{backgroundColor:"#117a8b"},"bg-warning":{backgroundColor:"#ffc107"},"bg-hover-warning":{backgroundColor:"#d39e00"},"bg-danger":{backgroundColor:"#dc3545"},"bg-hover-danger":{backgroundColor:"#bd2130"},"bg-nav":{backgroundColor:"#EDEDED"},"bg-light":{backgroundColor:"#f8f9fa"},"bg-hover-light":{backgroundColor:"#dae0e5"},"bg-dark":{backgroundColor:"#343a40"},"bg-hover-dark":{backgroundColor:"#1d2124"},"bg-white":{backgroundColor:"#ffffff"},"bg-transparent":{backgroundColor:"rgba(0,0,0,0)"},border:{borderWidth:"1rpx",borderStyle:"solid",borderColor:"#dee2e6"},"border-top":{borderTopWidth:"1rpx",borderTopStyle:"solid",borderTopColor:"#dee2e6"},"border-right":{borderRightWidth:"1rpx",borderRightStyle:"solid",borderRightColor:"#dee2e6"},"border-bottom":{borderBottomWidth:"1rpx",borderBottomStyle:"solid",borderBottomColor:"#dee2e6"},"border-left":{borderLeftWidth:"1rpx",borderLeftStyle:"solid",borderLeftColor:"#dee2e6"},"border-0":{borderWidth:0},"border-top-0":{borderTopWidth:0},"border-right-0":{borderRightWidth:0},"border-bottom-0":{borderBottomWidth:0},"border-left-0":{borderLeftWidth:0},"border-primary":{borderColor:"#007bff"},"border-secondary":{borderColor:"#6c757d"},"border-light-secondary":{borderColor:"#E9E8E5"},"border-success":{borderColor:"#28a745"},"border-info":{borderColor:"#17a2b8"},"border-warning":{borderColor:"#ffc107"},"border-danger":{borderColor:"#dc3545"},"border-light":{borderColor:"#f8f9fa"},"border-dark":{borderColor:"#343a40"},"border-white":{borderColor:"#FFFFFF"},rounded:{borderRadius:"8rpx"},"rounded-top":{borderTopLeftRadius:"8rpx",borderTopRightRadius:"8rpx"},"rounded-right":{borderTopRightRadius:"8rpx",borderBottomRightRadius:"8rpx"},"rounded-bottom":{borderBottomRightRadius:"8rpx",borderBottomLeftRadius:"8rpx"},"rounded-left":{borderTopLeftRadius:"8rpx",borderBottomLeftRadius:"8rpx"},"rounded-circle":{borderRadius:"100rpx"},"rounded-0":{borderRadius:0},"overflow-hidden":{overflow:"hidden"},"position-relative":{position:"relative"},"position-absolute":{position:"absolute"},"position-fixed":{position:"fixed"},"fixed-top":{position:"fixed",top:0,right:0,left:0,zIndex:1030},"fixed-bottom":{position:"fixed",right:0,bottom:0,left:0,zIndex:1030},"top-0":{top:0},"left-0":{left:0},"right-0":{right:0},"bottom-0":{bottom:0},page:{backgroundColor:"#EDEDED",flex:1},"main-bg-color":{backgroundColor:"#3578E5"},"main-text-color":{color:"#3578E5"},"border-main":{borderColor:"#08C060"},"bg-chat-item":{backgroundColor:"#6BEE68"},"text-chat-item":{color:"#6BEE68"}}},23:function(t,e,r){"use strict";(function(t,e){function o(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function p(t,e,r){return e&&s(t.prototype,e),r&&s(t,r),t}var u=r(24).version,d="__DC_STAT_UUID",c="__DC_UUID_VALUE";function l(){var r="";if("n"===h()){try{r=t.runtime.getDCloudId()}catch(t){r=""}return r}try{r=e.getStorageSync(d)}catch(t){r=c}if(!r){r=Date.now()+""+Math.floor(1e7*Math.random());try{e.setStorageSync(d,r)}catch(t){e.setStorageSync(d,c)}}return r}var g,f=function(){return parseInt((new Date).getTime()/1e3)},h=function(){return"n"},m=function(){var t="";return"wx"!==h()&&"qq"!==h()||e.canIUse("getAccountInfoSync")&&(t=e.getAccountInfoSync().miniProgram.appId||""),t},x=function(){return"n"===h()?t.runtime.version:""},v=function(){var e="";return"n"===h()&&(e=t.runtime.channel),e},y=0,b=0,_=function(){return y=f(),"n"===h()&&e.setStorageSync("__page__residence__time",f()),y},S=0,w=0,T=function(){var t=(new Date).getTime();return S=t,w=0,t},R=function(){var t=(new Date).getTime();return w=t,t},k=function(t){var e=0;return 0!==S&&(e=w-S),e=(e=parseInt(e/1e3))<1?1:e,"app"===t?{residenceTime:e,overtime:e>300}:"page"===t?{residenceTime:e,overtime:e>1800}:{residenceTime:e}},L=function(t){var e=getCurrentPages(),r=e[e.length-1].$vm,o=t._query,n=o&&"{}"!==JSON.stringify(o)?"?"+JSON.stringify(o):"";return t._query="","bd"===h()?r.$mp&&r.$mp.page.is+n:r.$scope&&r.$scope.route+n||r.$mp&&r.$mp.page.route+n},C=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},B=r(25).default,D=r(13).default||r(13),N=e.getSystemInfoSync(),I=function(){function r(){a(this,r),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:l(),ut:h(),mpn:m(),ak:D.appid,usv:u,v:x(),ch:v(),cn:"",pn:"",ct:"",t:f(),tt:"",p:"android"===N.platform?"a":"i",brand:N.brand||"",md:N.model,sv:N.system.replace(/(Android|iOS)\s/,""),mpsdk:N.SDKVersion||"",mpv:N.version||"",lang:N.language,pr:N.pixelRatio,ww:N.windowWidth,wh:N.windowHeight,sw:N.screenWidth,sh:N.screenHeight}}return p(r,[{key:"_applicationShow",value:function(){if(this.__licationHide){if(R(),k("app").overtime){var t={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(t)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,R();var r=k();T();var o=L(this);this._sendHideRequest({urlref:o,urlref_ts:r.residenceTime},e)}},{key:"_pageShow",value:function(){var t,e,r=L(this),o=(t=getCurrentPages(),e=t[t.length-1].$vm,"bd"===h()?e.$mp&&e.$mp.page.is:e.$scope&&e.$scope.route||e.$mp&&e.$mp.page.route);if(this._navigationBarTitle.config=B&&B.pages[o]&&B.pages[o].titleNView&&B.pages[o].titleNView.titleText||B&&B.pages[o]&&B.pages[o].navigationBarTitleText||"",this.__licationShow)return T(),this.__licationShow=!1,void(this._lastPageRoute=r);if(R(),this._lastPageRoute=r,k("page").overtime){var n={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(n)}T()}},{key:"_pageHide",value:function(){if(!this.__licationHide){R();var t=k("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var r,o,n=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+n||"",this.statData.t=f(),this.statData.sc=function(t){var r=h(),o="";return t||("wx"===r&&(o=e.getLaunchOptionsSync().scene),o)}(t.scene),this.statData.fvts=(r=e.getStorageSync("First__Visit__Time"),o=0,r?o=r:(o=f(),e.setStorageSync("First__Visit__Time",o),e.removeStorageSync("Last__Visit__Time")),o),this.statData.lvts=function(){var t=e.getStorageSync("Last__Visit__Time"),r=0;return r=t||"",e.setStorageSync("Last__Visit__Time",f()),r}(),this.statData.tvc=function(){var t=e.getStorageSync("Total__Visit__Count"),r=1;return t&&(r=t,r++),e.setStorageSync("Total__Visit__Count",r),r}(),"n"===h()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,r=t.urlref,o=t.urlref_ts;this._navigationBarTitle.lt="11";var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:r,urlref_ts:o,ch:this.statData.ch,usv:this.statData.usv,t:f(),p:this.statData.p};this.request(n)}},{key:"_sendHideRequest",value:function(t,e){var r=t.urlref,o=t.urlref_ts,n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:r,urlref_ts:o,ch:this.statData.ch,usv:this.statData.usv,t:f(),p:this.statData.p};this.request(n,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,r=void 0===e?"":e,o=t.value,n=void 0===o?"":o,i=this._lastPageRoute,a={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:i,ch:this.statData.ch,e_n:r,e_v:"object"==typeof n?JSON.stringify(n):n.toString(),usv:this.statData.usv,t:f(),p:this.statData.p};this.request(a)}},{key:"getNetworkInfo",value:function(){var t=this;e.getNetworkType({success:function(e){t.statData.net=e.networkType,t.getLocation()}})}},{key:"getProperty",value:function(){var e=this;t.runtime.getProperty(t.runtime.appid,function(t){e.statData.v=t.version||"",e.getNetworkInfo()})}},{key:"getLocation",value:function(){var t=this;D.getLocation?e.getLocation({type:"wgs84",geocode:!0,success:function(e){e.address&&(t.statData.cn=e.address.country,t.statData.pn=e.address.province,t.statData.ct=e.address.city),t.statData.lat=e.latitude,t.statData.lng=e.longitude,t.request(t.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(t,r){var o=this,n=f(),i=this._navigationBarTitle;t.ttn=i.page,t.ttpj=i.config,t.ttc=i.report;var a=this._reportingRequestData;if("n"===h()&&(a=e.getStorageSync("__UNI__STAT__DATA")||{}),a[t.lt]||(a[t.lt]=[]),a[t.lt].push(t),"n"===h()&&e.setStorageSync("__UNI__STAT__DATA",a),b=f(),"n"===h()&&(y=e.getStorageSync("__page__residence__time")),!(b-y<10)||r){var s=this._reportingRequestData;"n"===h()&&(s=e.getStorageSync("__UNI__STAT__DATA")),_();var p=[],d=[],c=[],l=function(t){s[t].forEach(function(e){var r=function(t){var e="";for(var r in t)e+=r+"="+t[r]+"&";return e.substr(0,e.length-1)}(e);0===t?p.push(r):3===t?c.push(r):d.push(r)})};for(var g in s)l(g);p.push.apply(p,d.concat(c));var m={usv:u,t:n,requests:JSON.stringify(p)};this._reportingRequestData={},"n"===h()&&e.removeStorageSync("__UNI__STAT__DATA"),"h5"!==t.ut?"n"!==h()||"a"!==this.statData.p?this._sendRequest(m):setTimeout(function(){o._sendRequest(m)},200):this.imageRequest(m)}}},{key:"_sendRequest",value:function(t){var r=this;e.request({url:"https://tongji.dcloud.io/uni/stat",method:"POST",data:t,success:function(){},fail:function(e){++r._retry<3&&setTimeout(function(){r._sendRequest(t)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,r=function(t){var e=Object.keys(t).sort(),r={},o="";for(var n in e)r[e[n]]=t[e[n]],o+=e[n]+"="+t[e[n]]+"&";return{sign:"",options:o.substr(0,o.length-1)}}(function(t){var e={};for(var r in t)e[r]=encodeURIComponent(t[r]);return e}(t)).options;e.src="https://tongji.dcloud.io/uni/stat.gif?"+r}},{key:"sendEvent",value:function(t,e){var r,o;(o=e,(r=t)?"string"!=typeof r?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),1):r.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),1):"string"!=typeof o&&"object"!=typeof o?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),1):"string"==typeof o&&o.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),1):"title"===r&&"string"!=typeof o?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),1):void 0:(console.error("uni.report 缺少 [eventName] 参数"),1))||("title"!==t?this._sendEventRequest({key:t,value:"object"==typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),r}(),j=function(t){function r(){var t;return a(this,r),(t=o(this,n(r).call(this))).instance=null,"function"==typeof e.addInterceptor&&(t.addInterceptorInit(),t.interceptLogin(),t.interceptShare(!0),t.interceptRequestPayment()),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(r,I),p(r,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new r),this.instance}}]),p(r,[{key:"addInterceptorInit",value:function(){var t=this;e.addInterceptor("setNavigationBarTitle",{invoke:function(e){t._navigationBarTitle.page=e.title}})}},{key:"interceptLogin",value:function(){var t=this;e.addInterceptor("login",{complete:function(){t._login()}})}},{key:"interceptShare",value:function(t){var r=this;t?e.addInterceptor("share",{success:function(){r._share()},fail:function(){r._share()}}):r._share()}},{key:"interceptRequestPayment",value:function(){var t=this;e.addInterceptor("requestPayment",{success:function(){t._payment("pay_success")},fail:function(){t._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,_(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var r=getCurrentPages();e.$scope=r[r.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,C(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,C(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:f(),p:this.statData.p};this.request(r)}}]),r}().getInstance(),O=!1,E={onLaunch:function(t){j.report(t,this)},onReady:function(){j.ready(this)},onLoad:function(t){if(j.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return j.interceptShare(!1),e.call(this,t)}}},onShow:function(){O=!1,j.show(this)},onHide:function(){O=!0,j.hide(this)},onUnload:function(){O?O=!1:j.hide(this)},onError:function(t){j.error(t)}};((g=r(26)).default||g).mixin(E),e.report=function(t,e){j.sendEvent(t,e)}}).call(this,r(1).weexPlus,r(1).default)},24:function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-25120200103005",_inBundle:!1,_integrity:"sha512-nYoIrRV2e5o/vzr6foSdWi3Rl2p0GuO+LPY3JctyY6uTKgPnuH99d7aL/QQdJ1SacQjBWO+QGK1qankN7oyrWw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25120200103005.tgz",_shasum:"a77a63481f36474f3e86686868051219d1bb12df",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"6be187a3dfe15f95dd6146d9fec08e1f81100987",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-25120200103005"}},25:function(t,e,r){"use strict";r.r(e),e.default={pages:{},globalStyle:{}}},26:function(t,e){t.exports=Vue},27:function(t,e,r){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(r(28).default,Vue.prototype.__$appStyle__)},28:function(t,e,r){"use strict";r.r(e);var o=r(2),n=r.n(o);for(var i in o)"default"!==i&&function(t){r.d(e,t,function(){return o[t]})}(i);e.default=n.a},80:function(t,e,r){"use strict";var o=r(138),n=r(117),i=r(0);var a=Object(i.a)(n.default,o.b,o.c,!1,null,null,"41dda8b2",!1,o.a,void 0);(function(t){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style)}).call(a),e.default=a.exports}});