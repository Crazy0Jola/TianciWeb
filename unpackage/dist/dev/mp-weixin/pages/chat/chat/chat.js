(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/chat/chat/chat"],{

/***/ 59:
/*!*********************************************************************!*\
  !*** E:/天赐/TianciWeb/main.js?{"page":"pages%2Fchat%2Fchat%2Fchat"} ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _chat = _interopRequireDefault(__webpack_require__(/*! ./pages/chat/chat/chat.nvue */ 60));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_chat.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 60:
/*!*************************************************!*\
  !*** E:/天赐/TianciWeb/pages/chat/chat/chat.nvue ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_nvue_vue_type_template_id_5b9d412e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chat.nvue?vue&type=template&id=5b9d412e& */ 61);
/* harmony import */ var _chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.nvue?vue&type=script&lang=js& */ 63);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.nvue?vue&type=style&index=0&lang=css& */ 65);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 19);






/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _chat_nvue_vue_type_template_id_5b9d412e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _chat_nvue_vue_type_template_id_5b9d412e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "天赐/TianciWeb/pages/chat/chat/chat.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 61:
/*!********************************************************************************!*\
  !*** E:/天赐/TianciWeb/pages/chat/chat/chat.nvue?vue&type=template&id=5b9d412e& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_5b9d412e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.nvue?vue&type=template&id=5b9d412e& */ 62);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_5b9d412e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_template_id_5b9d412e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 62:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/天赐/TianciWeb/pages/chat/chat/chat.nvue?vue&type=template&id=5b9d412e& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (!_vm._isMounted) {
    _vm.e0 = function($event) {
      _vm.mode = "text"
    }

    _vm.e1 = function($event) {
      _vm.KeyboardHeight = 0
    }
  }
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 63:
/*!**************************************************************************!*\
  !*** E:/天赐/TianciWeb/pages/chat/chat/chat.nvue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.nvue?vue&type=script&lang=js& */ 64);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 64:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/天赐/TianciWeb/pages/chat/chat/chat.nvue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;














































































































































var _vuex = __webpack_require__(/*! vuex */ 21);function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var freeNavBar = function freeNavBar() {return __webpack_require__.e(/*! import() | components/free-ui/free-nav-bar */ "components/free-ui/free-nav-bar").then(__webpack_require__.bind(null, /*! @/components/free-ui/free-nav-bar.vue */ 220));};var freeIconButton = function freeIconButton() {return __webpack_require__.e(/*! import() | components/free-ui/free-icon-button */ "components/free-ui/free-icon-button").then(__webpack_require__.bind(null, /*! @/components/free-ui/free-icon-button.vue */ 254));};var freeChatItem = function freeChatItem() {return Promise.all(/*! import() | components/free-ui/free-chat-item */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/free-ui/free-chat-item")]).then(__webpack_require__.bind(null, /*! @/components/free-ui/free-chat-item.vue */ 259));};var freePopup = function freePopup() {return __webpack_require__.e(/*! import() | components/free-ui/free-popup */ "components/free-ui/free-popup").then(__webpack_require__.bind(null, /*! @/components/free-ui/free-popup.vue */ 232));};var freeMainButton = function freeMainButton() {return __webpack_require__.e(/*! import() | components/free-ui/free-main-button */ "components/free-ui/free-main-button").then(__webpack_require__.bind(null, /*! @/components/free-ui/free-main-button.vue */ 266));};
var _this;
var JIM = getApp().globalData.JIM;var _default =
{
  components: {
    freeNavBar: freeNavBar,
    freeIconButton: freeIconButton,
    freeChatItem: freeChatItem,
    freePopup: freePopup,
    freeMainButton: freeMainButton },

  data: function data() {
    return {
      // 模式 text输入文字，emoticon表情，action操作，audio音频
      mode: "text",
      tempurl: "",
      username: "",
      nickname: "",
      avator: "/static/images/userpic.jpg",
      myUsername: "",
      myAvator: "/static/images/userpic.jpg",
      // 扩展菜单列表
      actionList: [
      [{
        name: "相册",
        icon: "/static/images/extends/pic.png",
        event: "uploadImage" },
      {
        name: "拍摄",
        icon: "/static/images/extends/video.png",
        event: "uploadVideo" },
      {
        name: "收藏",
        icon: "/static/images/extends/shoucan.png",
        event: "" },
      {
        name: "名片",
        icon: "/static/images/extends/man.png",
        event: "" },
      {
        name: "语音通话",
        icon: "/static/images/extends/phone.png",
        event: "" },
      {
        name: "位置",
        icon: "/static/images/extends/path.png",
        event: "" }]],


      emoticonList: [],
      // 键盘高度
      KeyboardHeight: 0,
      menus: [{
        name: "复制",
        event: '' },
      {
        name: "删除",
        event: '' },
      {
        name: "撤回",
        event: 'removeChatItem' }],

      navBarHeight: 0,
      list: [],
      // 当前操作的气泡索引
      propIndex: -1,
      // 输入文字
      text: "",

      // 音频录制状态
      isRecording: false,
      RecordingStartY: 0,
      // 取消录音
      unRecord: false };

  },
  onLoad: function onLoad(e) {
    uni.$on("get_chat_msg", function () {
      console.log("===================有新消息来啦=====================");
      var msg = uni.getStorageSync(_this.username);
      _this.list = msg;
      var pageToBottomTimer = setTimeout(function () {
        _this.pageToBottom();
        clearTimeout(pageToBottomTimer);
      }, 200);
    });
    var pageToBottomTimer = setTimeout(function () {
      _this.pageToBottom();
      clearTimeout(pageToBottomTimer);
    }, 500);
    _this = this;
    _this.username = e.username;
    _this.nickname = e.nickname;
    _this.myUsername = uni.getStorageSync('setUserData').username;
  },
  onUnload: function onUnload() {
    console.log("=================onUnload==================");
    uni.$off("get_chat_msg");
  },
  onShow: function onShow() {
    console.log("chat__________________onSHow");
    // var imagepath=_this.image_cache("https://img.jiguang.cn/im-portal/0.0.1/assets/img/jverify-flow-banner-new.png","a");
    // var p = plus.io.convertLocalFileSystemURL(imagepath);  
    // console.log(p)
    var msg = uni.getStorageSync(_this.username);
    JIM.resetUnreadCount({
      'username': _this.username });

    if (msg) {
      _this.list = msg;
      // var pageToBottomTimer = setTimeout(()=>{
      // 	_this.pageToBottom()
      // 	clearTimeout(pageToBottomTimer)
      // },500)
    } else {
      console.log("hhhhhhhhhhhh");
      var now = new Date();
      var past = new Date(new Date() - 86400000 * 7);

      var now_year = now.getFullYear();
      var now_month = now.getMonth() + 1;
      var now_day = now.getDate();
      var now_hour = now.getHours();
      var now_minutes = now.getMinutes();
      var now_seconds = now.getSeconds();

      if (now_month < 10) {
        now_month = "0" + now_month;
      }
      if (now_day < 10) {
        now_day = "0" + now_day;
      }
      if (now_hour < 10) {
        now_hour = "0" + now_hour;
      }
      if (now_minutes < 10) {
        now_minutes = "0" + now_minutes;
      }
      if (now_seconds < 10) {
        now_seconds = "0" + now_seconds;
      }
      var now_date = now_year + "-" + now_month + "-" + now_day + "%20" + now_hour + ":" + now_minutes + ":" + now_seconds;

      var past_yaer = past.getFullYear();
      var past_month = past.getMonth() + 1;
      var past_day = past.getDate();
      var past_hour = past.getHours();
      var past_minutes = past.getMinutes();
      var past_seconds = past.getSeconds();
      if (past_month < 10) {
        past_month = "0" + past_month;
      }
      if (past_day < 10) {
        past_day = "0" + past_day;
      }
      if (past_hour < 10) {
        past_hour = "0" + past_hour;
      }
      if (past_minutes < 10) {
        past_minutes = "0" + past_minutes;
      }
      if (past_seconds < 10) {
        past_seconds = "0" + past_seconds;
      }
      var past_date = past_yaer + "-" + past_month + "-" + past_day + "%20" + past_hour + ":" + past_minutes + ":" + past_seconds;

      uni.showLoading({
        "title": "正在获取聊天记录..." });

      uni.request({
        url: 'https://report.im.jpush.cn/v2/users/' + _this.username +
        '/messages?count=1000&begin_time=' + past_date + '&end_time=' + now_date,
        header: {
          "Authorization": 'Basic MDk5NzA4NzZmMzNlODg0YTM2MjQzMzVjOmU4ZTg3M2U2MDI0NTMxNWE3MGVkZTRiMg==' },

        success: function success(res) {
          var msg = res.data.messages;
          // msg.forEach(function(item){
          // 	if(item.msg_type=="image"){
          // 		JIM.getResource({'media_id' :item.msg_body.media_id}).onSuccess(function(data){
          // 			item.msg_body.media_id = data.url;
          // 			console.log('success:' + JSON.stringify(data));
          // 		}).onFail(function(data){
          // 			console.log('error:' + JSON.stringify(data));
          // 		});
          // 	}	
          // })

          _this.$data.list = msg;

          _this.$data.list.map(function (elem, index) {
            if (elem.msg_type != "text") {
              _this.setPic(elem.msg_body.media_id, index);
            }
          });
          uni.setStorageSync(_this.username, _this.$data.list);
          _this.pageToBottom();
          uni.hideLoading();

        } });

    }
    // var phone=[];
    // phone.push("18952158867");
    // phone.push("18012018031");
    // uni.request({
    // 	url: 'http://117.83.152.39:8081/interconnect/appUser/getUserPhotoByPhone',
    // 	header: {
    // 		"token": '06874c8b7be14969abac9a18935b18b8',
    // 		"Content-Type":"application/json"
    // 	},
    // 	method:"POST",
    // 	data:{
    // 		// phones:JSON.stringify(phone)
    // 	},
    // 	success(res) {
    // 		console.log(res)
    // 	}
    // })
  },
  mounted: function mounted() {var _this2 = this;



    this.navBarHeight = statusBarHeight + uni.upx2px(90);

    // 监听键盘高度变化
    uni.onKeyboardHeightChange(function (res) {
      if (_this2.mode !== 'action' && _this2.mode !== 'emoticon') {
        _this2.KeyboardHeight = res.height;
      }
      if (_this2.KeyboardHeight > 0) {
        _this2.pageToBottom();
      }
    });


    // 注册发送音频事件
    this.regSendVoiceEvent(function (url) {
      if (!_this2.unRecord) {
        _this2.send('audio', url, {
          time: _this2.RecordTime });

      }
    });
  },
  computed: _objectSpread({},
  (0, _vuex.mapState)({
    RECORD: function RECORD(state) {return state.audio.RECORD;},
    RecordTime: function RecordTime(state) {return state.audio.RecordTime;} }), {

    // 获取蒙版的位置
    maskBottom: function maskBottom() {
      return this.KeyboardHeight + uni.upx2px(105);
    },
    // 动态获取菜单高度
    getMenusHeight: function getMenusHeight() {
      var H = 100;
      return this.menus.length * H;
    },
    // 获取菜单的样式
    getMenusStyle: function getMenusStyle() {
      return "height: ".concat(this.getMenusHeight, "rpx;");
    },
    // 判断是否操作本人信息
    isdoSelf: function isdoSelf() {
      var target_id = _this.propIndex > -1 ? _this.list[_this.propIndex].target_id : 0;
      return target_id !== _this.myUsername;
    },
    // 获取操作菜单
    menusList: function menusList() {var _this3 = this;
      return this.menus.filter(function (v) {
        if (v.name === '撤回' && !_this3.isdoSelf) {
          return false;
        } else {
          return true;
        }
      });
    },
    // 聊天区域bottom
    chatBodyBottom: function chatBodyBottom() {
      return "bottom:".concat(uni.upx2px(105) + this.KeyboardHeight, "px;top:").concat(this.navBarHeight, "px;");
    },
    // 获取操作或者表情列表
    emoticonOrActionList: function emoticonOrActionList() {
      return this.mode === 'emoticon' || this.mode === 'action' ? this[this.mode + 'List'] : [];
    },
    // 所有信息的图片地址
    imageList: function imageList() {
      var arr = [];
      this.list.forEach(function (item) {
        if (item.type === 'emoticon' || item.type === 'image') {
          arr.push(item.data);
        }
      });
      return arr;
    } }),

  watch: {
    mode: function mode(newValue, oldValue) {
      if (newValue !== 'action' && newValue !== 'emoticon') {
        this.$refs.action.hide();
      }
      if (newValue !== 'text') {
        uni.hideKeyboard();
      }
    } },

  created: function created() {
    // 初始化
    this.__init();
  },
  onBackPress: function onBackPress(options) {
    console.log(options);
    console.log(JSON.stringify(options));
    if (options.from === 'backbutton' || options.from === 'navigateBack') {
      console.log("hhhh");
      uni.switchTab({
        url: "../../tabbar/index/index" });

      return true;
    }
  },
  methods: _objectSpread({},
  (0, _vuex.mapMutations)(['regSendVoiceEvent']), {
    __init: function __init() {
      var total = 20;
      var page = Math.ceil(total / 8);
      var arr = [];
      for (var i = 0; i < page; i++) {
        var start = i * 8;
        arr[i] = [];
        for (var j = 0; j < 8; j++) {
          var no = start + j;
          if (no + 1 > total) {
            continue;
          }
          arr[i].push({
            name: "表情" + no,
            icon: "/static/images/emoticon/5497/" + no + '.gif',
            event: "sendEmoticon" });

        }
      }
      this.emoticonList = arr;
    },
    setPic: function setPic(media_id, index) {
      JIM.getResource({ 'media_id': media_id }).onSuccess(function (data) {
        uni.downloadFile({
          url: data.url,
          success: function success(res) {
            if (res.statusCode === 200) {
              uni.saveFile({
                tempFilePath: res.tempFilePath,
                success: function success(res) {
                  var savedFilePath = plus.io.convertLocalFileSystemURL(res.savedFilePath);
                  _this.$data.list[index].msg_body.media_id = savedFilePath;
                  uni.setStorageSync(_this.username, _this.$data.list);
                } });

            }
          } });

      }).onFail(function (data) {
        uni.showToast({
          "title": getCodeMsg(data.code),
          "position": bottom });

      });
    },
    // 打开扩展菜单或者表情包
    openActionOrEmoticon: function openActionOrEmoticon() {var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'action';
      this.mode = mode;
      this.$refs.action.show();

      uni.hideKeyboard();
      this.KeyboardHeight = uni.upx2px(580);
    },
    // 发送
    send: function send(type) {var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _that = this;
      var text = this.text;
      var latest_msg;
      if (type == "image" || type == "audio" || type == "video") {
        uni.saveFile({
          tempFilePath: data,
          success: function success(res) {
            data = plus.io.convertLocalFileSystemURL(res.savedFilePath);
            console.log(data);
          } });

      }
      console.log(type + "=====" + data);
      switch (type) {
        case 'text':
          latest_msg = text;
          JIM.sendSingleMsg({
            'target_username': _this.username,
            'content': text,
            "extras": {
              'isremove': false } }).

          onSuccess(function (data) {
            var obj = {
              "from_id": _this.myUsername,
              "create_time": new Date().getTime(),
              "msg_type": type,
              "target_id": _this.username,
              "msg_id": data.msg_id,
              "msg_body": {
                "extras": { 'isremove': false },
                "text": text } };


            _this.list.push(obj);

            // 发送文字成功，清空输入框
            if (type === 'text') {
              _that.text = '';
            }
            // 置于底部
            var pageToBottomTimer = setTimeout(function () {
              _this.pageToBottom();
              clearTimeout(pageToBottomTimer);
            }, 200);

            JIM.updateConversation({
              'username': _this.username,
              'extras': { 'latest_msg': latest_msg } });


            uni.setStorageSync(_this.username, _this.list);

          }).onFail(function (data) {
            uni.showToast({
              "title": getCodeMsg(data.code),
              "position": bottom });

            //data.code 返回码
            //data.message 描述
          });
          break;

        case 'image':
          uni.showLoading({
            "title": "图片资源较大，发送中请稍候..." });

          latest_msg = "[图片]";
          JIM.sendSinglePic({
            'target_username': _this.username,
            'image': data, //设置图片参数
            "extras": {
              'isremove': false } }).

          onSuccess(function (res, msg) {
            console.log(JSON.stringify(msg) + "===================");
            var obj = {
              "from_id": _this.myUsername,
              "create_time": new Date().getTime(),
              "msg_type": type,
              "target_id": _this.username,
              "msg_id": res.msg_id,
              "msg_body": {
                "media_id": data,
                "extras": {
                  'isremove': false } },


              "my": true,
              "data": data };

            _this.list.push(obj);
            uni.hideLoading();
            // 置于底部
            var pageToBottomTimer = setTimeout(function () {
              _this.pageToBottom();
              clearTimeout(pageToBottomTimer);
            }, 200);

            JIM.updateConversation({
              'username': _this.username,
              'extras': { 'latest_msg': latest_msg } });


            uni.setStorageSync(_this.username, _this.list);
          }).onFail(function (data) {
            uni.showToast({
              "title": getCodeMsg(data.code),
              "position": bottom });

          });
          break;

        case 'audio':
          if (options.time <= 2) {
            uni.showToast({
              title: "说话时间太短啦",
              icon: "none" });

            break;
          }
          latest_msg = "[语音]";
          JIM.sendSingleFile({
            'target_username': _this.username,
            'file': data, //设置图片参数
            'extras': {
              'isremove': false,
              'time': options.time,
              'isAudio': true } }).

          onSuccess(function (res, msg) {
            console.log(JSON.stringify(msg) + "===================");
            var obj = {
              "from_id": _this.myUsername,
              "create_time": new Date().getTime(),
              "msg_type": "file",
              "target_id": _this.username,
              "msg_id": res.msg_id,
              "msg_body": {
                "media_id": data,
                "extras": {
                  'isremove': false,
                  'time': options.time,
                  'isAudio': true } },


              "my": true,
              "data": data };

            _this.list.push(obj);

            // 置于底部
            var pageToBottomTimer = setTimeout(function () {
              _this.pageToBottom();
              clearTimeout(pageToBottomTimer);
            }, 200);

            JIM.updateConversation({
              'username': _this.username,
              'extras': { 'latest_msg': latest_msg } });


            uni.setStorageSync(_this.username, _this.list);
          }).onFail(function (data) {
            uni.showToast({
              "title": getCodeMsg(data.code),
              "position": bottom });

          });
          break;

        case 'emoticon':
          latest_msg = "[表情]";
          JIM.sendSingleMsg({
            'target_username': _this.username,
            'content': '[表情]',
            'extras': {
              "emotion": data,
              "isEmotion": true,
              "isremove": false } }).

          onSuccess(function (res) {
            var obj = {
              "from_id": _this.myUsername,
              "create_time": new Date().getTime(),
              "msg_type": "text",
              "target_id": _this.username,
              "msg_body": {
                "text": "[表情]",
                'extras': {
                  "emotion": data,
                  "isEmotion": true,
                  "isremove": false } },


              "my": true,
              "data": data };


            _this.list.push(obj);

            // 置于底部
            var pageToBottomTimer = setTimeout(function () {
              _this.pageToBottom();
              clearTimeout(pageToBottomTimer);
            }, 200);

            JIM.updateConversation({
              'username': _this.username,
              'extras': { 'latest_msg': latest_msg } });


            uni.setStorageSync(_this.username, _this.list);

          }).onFail(function (data) {
            uni.showToast({
              "title": getCodeMsg(data.code),
              "position": bottom });

          });

          break;


        case 'video':
          uni.showLoading({
            "title": "视频资源较大，发送中请稍候..." });

          latest_msg = "[短视频]";

          JIM.sendSingleVedio({
            'target_username': _this.username,
            'file': data, //设置图片参数
            "extras": {
              "video": "mp4",
              'isremove': false,
              "isVideo": true } }).

          onSuccess(function (res, msg) {
            console.log(JSON.stringify(msg) + "===================");
            var obj = {
              "from_id": _this.myUsername,
              "create_time": msg.content.create_time,
              "msg_type": "file",
              "target_id": _this.username,
              "msg_id": res.msg_id,
              "msg_body": {
                "media_id": data,
                "extras": {
                  "video": "mp4",
                  'isremove': false,
                  "isVideo": true } },


              "my": true,
              "data": data };

            _this.list.push(obj);

            uni.hideLoading();

            // 置于底部
            var pageToBottomTimer = setTimeout(function () {
              _this.pageToBottom();
              clearTimeout(pageToBottomTimer);
            }, 200);

            JIM.updateConversation({
              'username': _this.username,
              'extras': { 'latest_msg': latest_msg } });


            uni.setStorageSync(_this.username, _this.list);
          }).onFail(function (data) {
            uni.showToast({
              "title": getCodeMsg(data.code),
              "position": "bottom" });

          });
          break;}


    },
    // 回到底部
    pageToBottom: function pageToBottom() {
      _this = this;










    },
    // 长按消息气泡
    long: function long(_ref) {var x = _ref.x,y = _ref.y,index = _ref.index;
      // 初始化 索引
      this.propIndex = index;
      // 显示扩展菜单
      this.$refs.extend.show(x, y);
    },
    // 操作菜单方法分发
    clickEvent: function clickEvent(event) {
      switch (event) {
        case 'removeChatItem': // 撤回消息
          // 拿到当前被操作的信息
          if (this.propIndex > -1) {
            this.list[this.propIndex].msg_body.extras.isremove = true;
          }
          break;
        default:
          break;}

      // 关闭菜单
      this.$refs.extend.hide();
    },
    // 扩展菜单
    actionEvent: function actionEvent(e) {var _this4 = this;
      switch (e.event) {
        case 'uploadImage': // 选择相册
          uni.chooseImage({
            count: 9,
            sizeType: ['compressed'],
            success: function success(res) {
              // 发送到服务器
              // 渲染到页面
              res.tempFilePaths.forEach(function (item) {
                _this4.send('image', item);
              });
            } });

          break;
        case 'uploadVideo': // 发送短视频
          uni.chooseVideo({
            maxDuration: 10,
            success: function success(res) {
              if (res.duration > 11) {
                uni.showToast({
                  "title": "请选择10s以内的短视频！" });

                return;
              }
              console.log(res);
              _this4.send('video', res.tempFilePath);

              // 渲染页面
              // 发送到服务端（获取视频封面，返回url）
              // 修改本地的发送状态
            } });

          break;
        case 'sendEmoticon': // 发送表情包
          this.send('emoticon', e.icon);
          break;}

    },
    // 点击页面
    clickPage: function clickPage() {
      this.mode = '';
    },
    // 预览图片
    previewImage: function previewImage(url) {
      var reUrl = plus.io.convertAbsoluteFileSystem(url);
      uni.previewImage({
        current: reUrl,
        urls: [reUrl],
        indicator: "default" });

    },
    // 切换音频录制和文本输入
    changeVoiceOrText: function changeVoiceOrText() {
      this.mode = this.mode !== 'audio' ? 'audio' : 'text';
    },
    // 录音相关
    // 录音开始
    voiceTouchStart: function voiceTouchStart(e) {
      // 初始化
      this.isRecording = true;
      this.RecordingStartY = e.changedTouches[0].screenY;
      this.unRecord = false;
      // 开始录音
      this.RECORD.start({
        format: "mp3" });

    },
    // 录音结束
    voiceTouchEnd: function voiceTouchEnd() {
      this.isRecording = false;
      // 停止录音
      this.RECORD.stop();
    },
    // 录音被打断
    voiceTouchCancel: function voiceTouchCancel() {
      this.isRecording = false;
      this.unRecord = true;
      // 停止录音
      this.RECORD.stop();
    },
    voiceTouchMove: function voiceTouchMove(e) {
      var Y = Math.abs(e.changedTouches[0].screenY - this.RecordingStartY);
      this.unRecord = Y >= 50;
    },
    // 打开聊天信息设置
    openChatSet: function openChatSet() {
      uni.navigateTo({
        url: '../chat-set/chat-set' });

    } }) };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 65:
/*!**********************************************************************************!*\
  !*** E:/天赐/TianciWeb/pages/chat/chat/chat.nvue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./chat.nvue?vue&type=style&index=0&lang=css& */ 66);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_chat_nvue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 66:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/天赐/TianciWeb/pages/chat/chat/chat.nvue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[59,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/chat/chat/chat.js.map