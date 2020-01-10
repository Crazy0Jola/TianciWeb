"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 106);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(plus, uni) {var _package = __webpack_require__(/*! ../package.json */ 3);function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 4).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 5).default || __webpack_require__(/*! uni-stat-config */ 5);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stat).call(this));
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["weexPlus"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),
/* 2 */
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.weexPlus = exports.default = void 0;function initUni() {

  var isFn = function isFn(v) {
    return typeof v === 'function';
  };

  var handlePromise = function handlePromise(promise) {
    return promise.then(function (data) {
      return [null, data];
    }).catch(function (err) {
      return [err];
    });
  };

  var REGEX = /^\$|^on|^create|Sync$|Manager$|^pause/;
  var API_NORMAL_LIST = ['os', 'getCurrentSubNVue', 'getSubNVueById', 'stopRecord', 'stopVoice',
  'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading',
  'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket',
  'pageScrollTo', 'drawCanvas'];


  var shouldPromise = function shouldPromise(name) {
    if (REGEX.test(name) && name !== 'createBLEConnection') {
      return false;
    }
    if (~API_NORMAL_LIST.indexOf(name)) {
      return false;
    }
    return true;
  };

  var promisify = function promisify(api) {
    return function () {
      for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
        return api.apply(undefined, [options].concat(params));
      }
      return handlePromise(new Promise(function (resolve, reject) {
        api.apply(undefined, [Object.assign({}, options, {
          success: resolve,
          fail: reject })].
        concat(params));
        /* eslint-disable no-extend-native */
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(function (value) {
            return promise.resolve(callback()).then(function () {
              return value;
            });
          }, function (reason) {
            return promise.resolve(callback()).then(function () {
              throw reason;
            });
          });
        };
      }));
    };
  };

  var onMessageCallbacks = [];

  var origin = void 0;

  function onSubNVueMessage(data) {
    onMessageCallbacks.forEach(function (callback) {
      return callback({
        origin: origin,
        data: data });

    });
  }

  var webviewId = weexPlus.webview.currentWebview().id;

  var channel = new BroadcastChannel('UNI-APP-SUBNVUE');
  channel.onmessage = function (event) {
    if (event.data.to === webviewId) {
      onSubNVueMessage(event.data.data);
    }
  };

  function wrapper(webview) {
    webview.$processed = true;

    var currentWebviewId = weexPlus.webview.currentWebview().id;
    var isPopupNVue = currentWebviewId === webview.id;

    var hostNVueId = webview.__uniapp_origin_type === 'uniNView' && webview.__uniapp_origin_id;
    var popupNVueId = webview.id;

    webview.postMessage = function (data) {
      if (hostNVueId) {
        channel.postMessage({
          data: data,
          to: isPopupNVue ? hostNVueId : popupNVueId });

      } else {
        postMessage({
          type: 'UniAppSubNVue',
          data: data });

      }
    };
    webview.onMessage = function (callback) {
      onMessageCallbacks.push(callback);
    };

    if (!webview.__uniapp_mask_id) {
      return;
    }
    origin = webview.__uniapp_host;

    var maskColor = webview.__uniapp_mask;

    var maskWebview = weexPlus.webview.getWebviewById(webview.__uniapp_mask_id);
    maskWebview = maskWebview.parent() || maskWebview; //再次检测父
    var oldShow = webview.show;
    var oldHide = webview.hide;
    var oldClose = webview.close;

    var showMask = function showMask() {
      maskWebview.setStyle({
        mask: maskColor });

    };
    var closeMask = function closeMask() {
      maskWebview.setStyle({
        mask: 'none' });

    };
    webview.show = function () {
      showMask();

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return oldShow.apply(webview, args);
    };
    webview.hide = function () {
      closeMask();

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return oldHide.apply(webview, args);
    };
    webview.close = function () {
      closeMask();

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return oldClose.apply(webview, args);
    };
  }

  function getSubNVueById(id) {
    var webview = weexPlus.webview.getWebviewById(id);
    if (webview && !webview.$processed) {
      wrapper(webview);
    }
    return webview;
  }

  function getCurrentSubNVue() {
    return getSubNVueById(weexPlus.webview.currentWebview().id);
  }

  var plus = weex.requireModule('plus');
  var globalEvent = weex.requireModule('globalEvent');

  var id = 0;
  var callbacks = {};

  var UNIAPP_SERVICE_NVUE_ID = '__uniapp__service';

  globalEvent.addEventListener('plusMessage', function (e) {
    if (e.data.type === 'UniAppJsApi') {
      invoke(e.data.id, e.data.data);
    } else if (e.data.type === 'UniAppSubNVue') {
      onSubNVueMessage(e.data.data, e.data.options);
    } else if (e.data.type === 'onNavigationBarButtonTap') {
      if (typeof onNavigationBarButtonTapCallback === 'function') {
        onNavigationBarButtonTapCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputChanged') {
      if (typeof onNavigationBarSearchInputChangedCallback === 'function') {
        onNavigationBarSearchInputChangedCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputConfirmed') {
      if (typeof onNavigationBarSearchInputConfirmedCallback === 'function') {
        onNavigationBarSearchInputConfirmedCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputClicked') {
      if (typeof onNavigationBarSearchInputClickedCallback === 'function') {
        onNavigationBarSearchInputClickedCallback(e.data.data);
      }
    }
  });

  var createCallback = function createCallback(args, type) {
    var callback = function callback(res) {
      if (isFn(args)) {
        args(res);
      } else if (args) {
        if (~res.errMsg.indexOf(':ok')) {
          isFn(args.success) && args.success(res);
        } else if (~res.errMsg.indexOf(':fail')) {
          isFn(args.fail) && args.fail(res);
        }
        isFn(args.complete) && args.complete(res);
      }
    };
    if (isFn(args) || args && isFn(args.callback)) {
      callback.keepAlive = true;
    }
    return callback;
  };

  var invoke = function invoke(callbackId, data) {
    var callback = callbacks[callbackId];
    if (callback) {
      callback(data);
      if (!callback.keepAlive) {
        delete callbacks[callbackId];
      }
    } else {
      console.error('callback[' + callbackId + '] is undefined');
    }
  };

  var publish = function publish(_ref) {
    var id = _ref.id,
    type = _ref.type,
    params = _ref.params;

    callbacks[id] = createCallback(params, type);
    plus.postMessage({
      id: id,
      type: type,
      params: params },
    UNIAPP_SERVICE_NVUE_ID);
  };

  function postMessage(data) {
    plus.postMessage(data, UNIAPP_SERVICE_NVUE_ID);
  }

  var createPublish = function createPublish(name) {
    return function (args) {
      publish({
        id: id++,
        type: name,
        params: args });

    };
  };

  var onNavigationBarButtonTapCallback = void 0;
  var onNavigationBarSearchInputChangedCallback = void 0;
  var onNavigationBarSearchInputConfirmedCallback = void 0;
  var onNavigationBarSearchInputClickedCallback = void 0;

  function onNavigationBarButtonTap(callback) {
    onNavigationBarButtonTapCallback = callback;
  }

  function onNavigationBarSearchInputChanged(callback) {
    onNavigationBarSearchInputChangedCallback = callback;
  }

  function onNavigationBarSearchInputConfirmed(callback) {
    onNavigationBarSearchInputConfirmedCallback = callback;
  }

  function onNavigationBarSearchInputClicked(callback) {
    onNavigationBarSearchInputClickedCallback = callback;
  }

  function requireNativePlugin(pluginName) {
    return weex.requireModule(pluginName);
  }

  var dom = weex.requireModule('dom');

  function loadFontFace(_ref) {
    var family = _ref.family,
    source = _ref.source,
    desc = _ref.desc,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    dom.addRule('fontFace', {
      fontFamily: family,
      src: source.replace(/"/g, '\'') });

    var res = {
      errMsg: 'loadFontFace:ok',
      status: 'loaded' };

    isFn(success) && success(res);
    isFn(complete) && complete(res);
  }

  var globalEvent$1 = weex.requireModule('globalEvent');

  var callbacks$1 = [];

  globalEvent$1.addEventListener('plusMessage', function (e) {
    if (e.data.type === 'UniAppReady') {
      ready.isUniAppReady = true;
      if (callbacks$1.length) {
        callbacks$1.forEach(function (callback) {
          return callback();
        });
        callbacks$1 = [];
      }
    }
  });

  function ready(callback) {
    if (typeof callback === 'function') {
      if (this.isUniAppReady) {
        callback();
      } else {
        callbacks$1.push(callback);
      }
    }
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ?
    "symbol" : typeof obj;
  };

  var stream = weex.requireModule('stream');

  // let requestTaskId = 0

  var METHOD_GET = 'GET';
  var METHOD_POST = 'POST';
  var CONTENT_TYPE_JSON = 'application/json';
  var CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded';

  var serialize = function serialize(data) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : METHOD_GET;
    var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONTENT_TYPE_FORM;

    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      if (method.toUpperCase() === METHOD_POST && contentType.toLowerCase() === CONTENT_TYPE_JSON) {
        return JSON.stringify(data);
      } else {
        return Object.keys(data).map(function (key) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
        }).join('&');
      }
    }
    return data;
  };

  function request(_ref) {
    var url = _ref.url,
    data = _ref.data,
    header = _ref.header,
    _ref$method = _ref.method,
    method = _ref$method === undefined ? 'GET' : _ref$method,
    _ref$dataType = _ref.dataType,
    dataType = _ref$dataType === undefined ? 'json' : _ref$dataType,
    responseType = _ref.responseType,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    // requestTaskId++
    var aborted = false;

    var hasContentType = false;
    var headers = {};
    if (header) {
      for (var name in header) {
        if (!hasContentType && name.toLowerCase() === 'content-type') {
          hasContentType = true;
          headers['Content-Type'] = header[name];
        } else {
          headers[name] = header[name];
        }
      }
    }
    if (method === METHOD_GET && data) {
      url = url + (~url.indexOf('?') ? url.substr(-1) === '&' || url.substr(-1) === '?' ? '' : '&' : '?') +
      serialize(data);
    }
    stream.fetch({
      url: url,
      method: method,
      headers: headers,
      type: dataType === 'json' ? 'json' : 'text',
      body: method !== METHOD_GET ? serialize(data, method, headers['Content-Type']) : '' },
    function (_ref2) {
      var status = _ref2.status,
      ok = _ref2.ok,
      statusText = _ref2.statusText,
      data = _ref2.data,
      headers = _ref2.headers;

      var ret = {};
      if (!status || status === -1 || aborted) {
        ret.errMsg = 'request:fail';
        isFn(fail) && fail(ret);
      } else {
        ret.data = data;
        ret.statusCode = status;
        ret.header = headers;
        isFn(success) && success(ret);
      }
      isFn(complete) && complete(ret);
    });
    return {
      abort: function abort() {
        aborted = true;
      } };

  }

  var storage = weex.requireModule('plusstorage');
  var UNIAPP_STORAGE_DATA_TYPE = '__TYPE';

  function getStorage(_ref) {
    var key = _ref.key,
    data = _ref.data,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    storage.getItem(key + UNIAPP_STORAGE_DATA_TYPE, function (ret) {
      if (ret.result === 'success') {
        var dataType = ret.data;
        storage.getItem(key, function (res) {
          if (res.result === 'success') {
            var result = res.data;
            if (dataType && result) {
              if (dataType !== 'String') {
                result = JSON.parse(result);
              }
              isFn(success) && success({
                errMsg: 'getStorage:ok',
                data: result });

            } else {
              res.errMsg = 'setStorage:fail';
              isFn(fail) && fail(res);
            }
          } else {
            res.errMsg = 'setStorage:fail';
            isFn(fail) && fail(res);
          }
          isFn(complete) && complete(res);
        });
      } else {
        ret.errMsg = 'setStorage:fail';
        isFn(fail) && fail(ret);
        isFn(complete) && complete(ret);
      }
    });
  }

  function setStorage(_ref2) {
    var key = _ref2.key,
    data = _ref2.data,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;

    var dataType = 'String';
    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      dataType = 'Object';
      data = JSON.stringify(data);
    }
    storage.setItem(key, data, function (res) {
      if (res.result === 'success') {
        storage.setItem(key + UNIAPP_STORAGE_DATA_TYPE, dataType, function (ret) {
          if (ret.result === 'success') {
            isFn(success) && success({
              errMsg: 'setStorage:ok' });

          } else {
            ret.errMsg = 'setStorage:fail';
            isFn(fail) && fail(ret);
          }
        });
      } else {
        res.errMsg = 'setStorage:fail';
        isFn(fail) && fail(res);
      }
      isFn(complete) && complete(res);
    });
  }

  function removeStorage(_ref3) {
    var key = _ref3.key,
    data = _ref3.data,
    success = _ref3.success,
    fail = _ref3.fail,
    complete = _ref3.complete;

    storage.removeItem(key, function (res) {
      if (res.result === 'success') {
        isFn(success) && success({
          errMsg: 'removeStorage:ok' });

      } else {
        res.errMsg = 'removeStorage:fail';
        isFn(fail) && fail(res);
      }
      isFn(complete) && complete(res);
    });
    storage.removeItem(key + UNIAPP_STORAGE_DATA_TYPE);
  }

  function clearStorage(_ref4) {
    var key = _ref4.key,
    data = _ref4.data,
    success = _ref4.success,
    fail = _ref4.fail,
    complete = _ref4.complete;
  }

  var clipboard = weex.requireModule('clipboard');

  function getClipboardData(_ref) {
    var success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    clipboard.getString(function (_ref2) {
      var data = _ref2.data;

      var res = {
        errMsg: 'getClipboardData:ok',
        data: data };

      isFn(success) && success(res);
      isFn(complete) && complete(res);
    });
  }

  function setClipboardData(_ref3) {
    var data = _ref3.data,
    success = _ref3.success,
    fail = _ref3.fail,
    complete = _ref3.complete;

    var res = {
      errMsg: 'setClipboardData:ok' };

    clipboard.setString(data);
    isFn(success) && success(res);
    isFn(complete) && complete(res);
  }

  var getEmitter = function () {
    if (typeof getUniEmitter === 'function') {
      /* eslint-disable no-undef */
      return getUniEmitter;
    }
    var Emitter = {
      $on: function $on() {
        console.warn('uni.$on failed');
      },
      $off: function $off() {
        console.warn('uni.$off failed');
      },
      $once: function $once() {
        console.warn('uni.$once failed');
      },
      $emit: function $emit() {
        console.warn('uni.$emit failed');
      } };

    return function getUniEmitter() {
      return Emitter;
    };
  }();

  function apply(ctx, method, args) {
    return ctx[method].apply(ctx, args);
  }

  function $on() {
    return apply(getEmitter(), '$on', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $off() {
    return apply(getEmitter(), '$off', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $once() {
    return apply(getEmitter(), '$once', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $emit() {
    return apply(getEmitter(), '$emit', [].concat(Array.prototype.slice.call(arguments)));
  }



  var api = /*#__PURE__*/Object.freeze({
    loadFontFace: loadFontFace,
    ready: ready,
    request: request,
    getStorage: getStorage,
    setStorage: setStorage,
    removeStorage: removeStorage,
    clearStorage: clearStorage,
    getClipboardData: getClipboardData,
    setClipboardData: setClipboardData,
    onSubNVueMessage: onSubNVueMessage,
    getSubNVueById: getSubNVueById,
    getCurrentSubNVue: getCurrentSubNVue,
    $on: $on,
    $off: $off,
    $once: $once,
    $emit: $emit });



  var wx = {
    uploadFile: true,
    downloadFile: true,
    chooseImage: true,
    previewImage: true,
    getImageInfo: true,
    saveImageToPhotosAlbum: true,
    chooseVideo: true,
    saveVideoToPhotosAlbum: true,
    saveFile: true,
    getSavedFileList: true,
    getSavedFileInfo: true,
    removeSavedFile: true,
    openDocument: true,
    setStorage: true,
    getStorage: true,
    getStorageInfo: true,
    removeStorage: true,
    clearStorage: true,
    getLocation: true,
    chooseLocation: true,
    openLocation: true,
    getSystemInfo: true,
    getNetworkType: true,
    makePhoneCall: true,
    scanCode: true,
    setScreenBrightness: true,
    getScreenBrightness: true,
    setKeepScreenOn: true,
    vibrateLong: true,
    vibrateShort: true,
    addPhoneContact: true,
    showToast: true,
    showLoading: true,
    hideToast: true,
    hideLoading: true,
    showModal: true,
    showActionSheet: true,
    setNavigationBarTitle: true,
    setNavigationBarColor: true,
    navigateTo: true,
    redirectTo: true,
    reLaunch: true,
    switchTab: true,
    navigateBack: true,
    getProvider: true,
    login: true,
    getUserInfo: true,
    share: true,
    requestPayment: true,
    subscribePush: true,
    unsubscribePush: true,
    onPush: true,
    offPush: true };


  var baseUni = {
    os: {
      nvue: true } };



  var uni = {};

  if (typeof Proxy !== 'undefined') {
    uni = new Proxy({}, {
      get: function get(target, name) {
        if (name === 'os') {
          return {
            nvue: true };

        }
        if (name === 'postMessage') {
          return postMessage;
        }
        if (name === 'requireNativePlugin') {
          return requireNativePlugin;
        }
        if (name === 'onNavigationBarButtonTap') {
          return onNavigationBarButtonTap;
        }
        if (name === 'onNavigationBarSearchInputChanged') {
          return onNavigationBarSearchInputChanged;
        }
        if (name === 'onNavigationBarSearchInputConfirmed') {
          return onNavigationBarSearchInputConfirmed;
        }
        if (name === 'onNavigationBarSearchInputClicked') {
          return onNavigationBarSearchInputClicked;
        }
        var method = api[name];
        if (!method) {
          method = createPublish(name);
        }
        if (shouldPromise(name)) {
          return promisify(method);
        }
        return method;
      } });

  } else {
    Object.keys(baseUni).forEach(function (key) {
      uni[key] = baseUni[key];
    });

    uni.postMessage = postMessage;

    uni.requireNativePlugin = requireNativePlugin;

    uni.onNavigationBarButtonTap = onNavigationBarButtonTap;

    uni.onNavigationBarSearchInputChanged = onNavigationBarSearchInputChanged;

    uni.onNavigationBarSearchInputConfirmed = onNavigationBarSearchInputConfirmed;

    uni.onNavigationBarSearchInputClicked = onNavigationBarSearchInputClicked;

    Object.keys(wx).forEach(function (name) {
      var method = api[name];
      if (!method) {
        method = createPublish(name);
      }
      if (shouldPromise(name)) {
        uni[name] = promisify(method);
      } else {
        uni[name] = method;
      }
    });
  }
  return uni;
}

var createUni;

if (typeof getUni === 'function') {
  createUni = getUni;
} else {
  createUni = initUni;
}
var weexPlus = new WeexPlus(weex);exports.weexPlus = weexPlus;var _default =
createUni(weex, weexPlus, BroadcastChannel);exports.default = _default;

/***/ }),
/* 3 */
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@alpha","_id":"@dcloudio/uni-stat@2.0.0-alpha-25120200103005","_inBundle":false,"_integrity":"sha512-nYoIrRV2e5o/vzr6foSdWi3Rl2p0GuO+LPY3JctyY6uTKgPnuH99d7aL/QQdJ1SacQjBWO+QGK1qankN7oyrWw==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@alpha","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"alpha","saveSpec":null,"fetchSpec":"alpha"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25120200103005.tgz","_shasum":"a77a63481f36474f3e86686868051219d1bb12df","_spec":"@dcloudio/uni-stat@alpha","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"6be187a3dfe15f95dd6146d9fec08e1f81100987","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-alpha-25120200103005"};

/***/ }),
/* 4 */
/*!***************************************************!*\
  !*** E:/天赐/TianciWeb/pages.json?{"type":"style"} ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{},"globalStyle":{}});

/***/ }),
/* 5 */
/*!**************************************************!*\
  !*** E:/天赐/TianciWeb/pages.json?{"type":"stat"} ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__B7D51E8"});

/***/ }),
/* 6 */
/*!***************************************************!*\
  !*** E:/天赐/TianciWeb/main.js?{"type":"appStyle"} ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 7).default,Vue.prototype.__$appStyle__)


/***/ }),
/* 7 */
/*!***************************************************************!*\
  !*** E:/天赐/TianciWeb/App.vue?vue&type=style&index=0&lang=css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 8);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/天赐/TianciWeb/App.vue?vue&type=style&index=0&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "view": {
    "fontSize": "28rpx",
    "lineHeight": 1.8,
    "color": "#0E151D"
  },
  "text": {
    "fontSize": "28rpx",
    "lineHeight": 1.8,
    "color": "#0E151D"
  },
  "w-100": {
    "width": "750rpx"
  },
  "row": {
    "marginRight": "-20rpx",
    "marginLeft": "-20rpx",
    "flexWrap": "wrap",
    "flexDirection": "row"
  },
  "col-1": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "62.5rpx"
  },
  "col-2": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "125rpx"
  },
  "col-3": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "187.5rpx"
  },
  "col-4": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "250rpx"
  },
  "col-5": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "312.5rpx"
  },
  "col-6": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "375rpx"
  },
  "col-7": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "437.5rpx"
  },
  "col-8": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "500rpx"
  },
  "col-9": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "562.5rpx"
  },
  "col-10": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "625rpx"
  },
  "col-11": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "687.5rpx"
  },
  "col-12": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "750rpx"
  },
  "col-offset-12": {
    "marginLeft": "750rpx"
  },
  "col-offset-11": {
    "marginLeft": "687.5rpx"
  },
  "col-offset-10": {
    "marginLeft": "625rpx"
  },
  "col-offset-9": {
    "marginLeft": "562.5rpx"
  },
  "col-offset-8": {
    "marginLeft": "500rpx"
  },
  "col-offset-7": {
    "marginLeft": "437.5rpx"
  },
  "col-offset-6": {
    "marginLeft": "375rpx"
  },
  "col-offset-5": {
    "marginLeft": "312.5rpx"
  },
  "col-offset-4": {
    "marginLeft": "250rpx"
  },
  "col-offset-3": {
    "marginLeft": "187.5rpx"
  },
  "col-offset-2": {
    "marginLeft": "125rpx"
  },
  "col-offset-1": {
    "marginLeft": "62.5rpx"
  },
  "col-offset-0": {
    "marginLeft": 0
  },
  "flex": {
    "flexDirection": "row"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-column": {
    "flexDirection": "column"
  },
  "flex-row-reverse": {
    "flexDirection": "row-reverse"
  },
  "flex-column-reverse": {
    "flexDirection": "column-reverse"
  },
  "flex-wrap": {
    "flexWrap": "wrap"
  },
  "flex-nowrap": {
    "flexWrap": "nowrap"
  },
  "justify-start": {
    "justifyContent": "flex-start"
  },
  "justify-end": {
    "justifyContent": "flex-end"
  },
  "justify-between": {
    "justifyContent": "space-between"
  },
  "justify-center": {
    "justifyContent": "center"
  },
  "align-center": {
    "alignItems": "center"
  },
  "align-stretch": {
    "alignItems": "stretch"
  },
  "align-start": {
    "alignItems": "flex-start"
  },
  "align-end": {
    "alignItems": "flex-end"
  },
  "flex-1": {
    "flex": 1
  },
  "flex-2": {
    "flex": 2
  },
  "flex-3": {
    "flex": 3
  },
  "flex-4": {
    "flex": 4
  },
  "flex-5": {
    "flex": 5
  },
  "container": {
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx"
  },
  "m-0": {
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0
  },
  "m-1": {
    "marginTop": "10rpx",
    "marginRight": "10rpx",
    "marginBottom": "10rpx",
    "marginLeft": "10rpx"
  },
  "m-2": {
    "marginTop": "20rpx",
    "marginRight": "20rpx",
    "marginBottom": "20rpx",
    "marginLeft": "20rpx"
  },
  "m-3": {
    "marginTop": "30rpx",
    "marginRight": "30rpx",
    "marginBottom": "30rpx",
    "marginLeft": "30rpx"
  },
  "m-4": {
    "marginTop": "40rpx",
    "marginRight": "40rpx",
    "marginBottom": "40rpx",
    "marginLeft": "40rpx"
  },
  "m-5": {
    "marginTop": "50rpx",
    "marginRight": "50rpx",
    "marginBottom": "50rpx",
    "marginLeft": "50rpx"
  },
  "mt-0": {
    "marginTop": 0
  },
  "mt-1": {
    "marginTop": "10rpx"
  },
  "mt-2": {
    "marginTop": "20rpx"
  },
  "mt-3": {
    "marginTop": "30rpx"
  },
  "mt-4": {
    "marginTop": "40rpx"
  },
  "mt-5": {
    "marginTop": "50rpx"
  },
  "mb-0": {
    "marginBottom": 0
  },
  "mb-1": {
    "marginBottom": "10rpx"
  },
  "mb-2": {
    "marginBottom": "20rpx"
  },
  "mb-3": {
    "marginBottom": "30rpx"
  },
  "mb-4": {
    "marginBottom": "40rpx"
  },
  "mb-5": {
    "marginBottom": "50rpx"
  },
  "ml-0": {
    "marginLeft": 0
  },
  "ml-1": {
    "marginLeft": "10rpx"
  },
  "ml-2": {
    "marginLeft": "20rpx"
  },
  "ml-3": {
    "marginLeft": "30rpx"
  },
  "ml-4": {
    "marginLeft": "40rpx"
  },
  "ml-5": {
    "marginLeft": "50rpx"
  },
  "mr-0": {
    "marginRight": 0
  },
  "mr-1": {
    "marginRight": "10rpx"
  },
  "mr-2": {
    "marginRight": "20rpx"
  },
  "mr-3": {
    "marginRight": "30rpx"
  },
  "mr-4": {
    "marginRight": "40rpx"
  },
  "mr-5": {
    "marginRight": "50rpx"
  },
  "my-0": {
    "marginTop": 0,
    "marginBottom": 0
  },
  "my-1": {
    "marginTop": "10rpx",
    "marginBottom": "10rpx"
  },
  "my-2": {
    "marginTop": "20rpx",
    "marginBottom": "20rpx"
  },
  "my-3": {
    "marginTop": "30rpx",
    "marginBottom": "30rpx"
  },
  "my-4": {
    "marginTop": "40rpx",
    "marginBottom": "40rpx"
  },
  "my-5": {
    "marginTop": "50rpx",
    "marginBottom": "50rpx"
  },
  "mx-0": {
    "marginLeft": 0,
    "marginRight": 0
  },
  "mx-1": {
    "marginLeft": "10rpx",
    "marginRight": "10rpx"
  },
  "mx-2": {
    "marginLeft": "20rpx",
    "marginRight": "20rpx"
  },
  "mx-3": {
    "marginLeft": "30rpx",
    "marginRight": "30rpx"
  },
  "mx-4": {
    "marginLeft": "40rpx",
    "marginRight": "40rpx"
  },
  "mx-5": {
    "marginLeft": "50rpx",
    "marginRight": "50rpx"
  },
  "p-0": {
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "p": {
    "paddingTop": "5rpx",
    "paddingRight": "5rpx",
    "paddingBottom": "5rpx",
    "paddingLeft": "5rpx"
  },
  "p-1": {
    "paddingTop": "10rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "10rpx"
  },
  "p-2": {
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx"
  },
  "p-3": {
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx"
  },
  "p-4": {
    "paddingTop": "40rpx",
    "paddingRight": "40rpx",
    "paddingBottom": "40rpx",
    "paddingLeft": "40rpx"
  },
  "p-5": {
    "paddingTop": "50rpx",
    "paddingRight": "50rpx",
    "paddingBottom": "50rpx",
    "paddingLeft": "50rpx"
  },
  "pt-0": {
    "paddingTop": 0
  },
  "pt": {
    "paddingTop": "5rpx"
  },
  "pt-1": {
    "paddingTop": "10rpx"
  },
  "pt-2": {
    "paddingTop": "20rpx"
  },
  "pt-3": {
    "paddingTop": "30rpx"
  },
  "pt-4": {
    "paddingTop": "40rpx"
  },
  "pt-5": {
    "paddingTop": "50rpx"
  },
  "pb-0": {
    "paddingBottom": 0
  },
  "pb-1": {
    "paddingBottom": "10rpx"
  },
  "pb": {
    "paddingBottom": "5rpx"
  },
  "pb-2": {
    "paddingBottom": "20rpx"
  },
  "pb-3": {
    "paddingBottom": "30rpx"
  },
  "pb-4": {
    "paddingBottom": "40rpx"
  },
  "pb-5": {
    "paddingBottom": "50rpx"
  },
  "pl-0": {
    "paddingLeft": 0
  },
  "pl": {
    "paddingLeft": "5rpx"
  },
  "pl-1": {
    "paddingLeft": "10rpx"
  },
  "pl-2": {
    "paddingLeft": "20rpx"
  },
  "pl-3": {
    "paddingLeft": "30rpx"
  },
  "pl-4": {
    "paddingLeft": "40rpx"
  },
  "pl-5": {
    "paddingLeft": "50rpx"
  },
  "pr-0": {
    "paddingRight": 0
  },
  "pr": {
    "paddingRight": "5rpx"
  },
  "pr-1": {
    "paddingRight": "10rpx"
  },
  "pr-2": {
    "paddingRight": "20rpx"
  },
  "pr-3": {
    "paddingRight": "30rpx"
  },
  "pr-4": {
    "paddingRight": "40rpx"
  },
  "pr-5": {
    "paddingRight": "50rpx"
  },
  "py-0": {
    "paddingTop": 0,
    "paddingBottom": 0
  },
  "py": {
    "paddingTop": "5rpx",
    "paddingBottom": "5rpx"
  },
  "py-1": {
    "paddingTop": "10rpx",
    "paddingBottom": "10rpx"
  },
  "py-2": {
    "paddingTop": "20rpx",
    "paddingBottom": "20rpx"
  },
  "py-3": {
    "paddingTop": "30rpx",
    "paddingBottom": "30rpx"
  },
  "py-4": {
    "paddingTop": "40rpx",
    "paddingBottom": "40rpx"
  },
  "py-5": {
    "paddingTop": "50rpx",
    "paddingBottom": "50rpx"
  },
  "px-0": {
    "paddingLeft": 0,
    "paddingRight": 0
  },
  "px-1": {
    "paddingLeft": "10rpx",
    "paddingRight": "10rpx"
  },
  "px": {
    "paddingLeft": "5rpx",
    "paddingRight": "5rpx"
  },
  "px-2": {
    "paddingLeft": "20rpx",
    "paddingRight": "20rpx"
  },
  "px-3": {
    "paddingLeft": "30rpx",
    "paddingRight": "30rpx"
  },
  "px-4": {
    "paddingLeft": "40rpx",
    "paddingRight": "40rpx"
  },
  "px-5": {
    "paddingLeft": "50rpx",
    "paddingRight": "50rpx"
  },
  "font-small": {
    "fontSize": "20rpx"
  },
  "font-sm": {
    "fontSize": "25rpx"
  },
  "font": {
    "fontSize": "30rpx"
  },
  "font-md": {
    "fontSize": "35rpx"
  },
  "font-lg": {
    "fontSize": "40rpx"
  },
  "h1": {
    "fontSize": "80rpx",
    "lineHeight": 1.8
  },
  "h2": {
    "fontSize": "60rpx",
    "lineHeight": 1.8
  },
  "h3": {
    "fontSize": "45rpx",
    "lineHeight": 1.8
  },
  "h4": {
    "fontSize": "32rpx",
    "lineHeight": 1.8
  },
  "h5": {
    "fontSize": "30rpx",
    "lineHeight": 1.8
  },
  "h6": {
    "fontSize": "28rpx",
    "lineHeight": 1.8
  },
  "text-through": {
    "textDecoration": "line-through"
  },
  "text-left": {
    "textAlign": "left"
  },
  "text-right": {
    "textAlign": "right"
  },
  "text-center": {
    "textAlign": "center"
  },
  "text-ellipsis": {
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "font-weight-light": {
    "fontWeight": "300"
  },
  "font-weight-lighter": {
    "fontWeight": "100"
  },
  "font-weight-normal": {
    "fontWeight": "400"
  },
  "font-weight-bold": {
    "fontWeight": "700"
  },
  "font-weight-bolder": {
    "fontWeight": "bold"
  },
  "font-italic": {
    "fontStyle": "italic"
  },
  "text-sq": {
    "color": "rgb(93,120,255)"
  },
  "text-qy": {
    "color": "rgb(50,205,50)"
  },
  "text-tcb": {
    "color": "rgb(243,154,24)"
  },
  "text-ws": {
    "color": "rgb(205,133,63)"
  },
  "text-zb": {
    "color": "rgb(255,182,193)"
  },
  "text-ys": {
    "color": "rgb(77,77,77)"
  },
  "text-wy": {
    "color": "rgb(255,192,203)"
  },
  "text-sy": {
    "color": "rgb(30,144,255)"
  },
  "text-jj": {
    "color": "rgb(212,35,122)"
  },
  "text-qyfw": {
    "color": "rgb(244,234,42)"
  },
  "text-zwfw": {
    "color": "rgb(19,34,122)"
  },
  "text-shfw": {
    "color": "rgb(250,128,114)"
  },
  "text-bm": {
    "color": "rgb(31,203,184)"
  },
  "text-ls": {
    "color": "rgb(191,191,191)"
  },
  "text-hy": {
    "color": "rgb(173,216,230)"
  },
  "text-xz": {
    "color": "rgb(44,44,44)"
  },
  "text-yq": {
    "color": "rgb(216,30,6)"
  },
  "text-gray": {
    "color": "#aaaaaa"
  },
  "text-white": {
    "color": "#ffffff"
  },
  "text-red": {
    "color": "rgb(216,30,6)"
  },
  "text-primary": {
    "color": "#007bff"
  },
  "text-hover-primary": {
    "color": "#0056b3"
  },
  "text-secondary": {
    "color": "#6c757d"
  },
  "text-hover-secondary": {
    "color": "#494f54"
  },
  "text-success": {
    "color": "#28a745"
  },
  "text-hover-success": {
    "color": "#19692c"
  },
  "text-info": {
    "color": "#17a2b8"
  },
  "text-hover-info": {
    "color": "#0f6674"
  },
  "text-warning": {
    "color": "#ffc107"
  },
  "text-hover-warning": {
    "color": "#ba8b00"
  },
  "text-danger": {
    "color": "#dc3545"
  },
  "text-hover-danger": {
    "color": "#a71d2a"
  },
  "text-light": {
    "color": "#f8f9fa"
  },
  "text-hover-light": {
    "color": "#cbd3da"
  },
  "text-dark": {
    "color": "#343a40"
  },
  "text-hover-dark": {
    "color": "#121416"
  },
  "text-body": {
    "color": "#212529"
  },
  "text-muted": {
    "color": "#6c757d"
  },
  "text-light-muted": {
    "color": "#A9A5A0"
  },
  "text-light-black": {
    "color": "rgba(0,0,0,0.5)"
  },
  "text-light-white": {
    "color": "rgba(255,255,255,0.5)"
  },
  "bg-primary": {
    "backgroundColor": "#007bff"
  },
  "bg-hover-primary": {
    "backgroundColor:hover": "#0062cc"
  },
  "bg-secondary": {
    "backgroundColor": "#6c757d"
  },
  "bg-hover-secondary": {
    "backgroundColor:hover": "#545b62"
  },
  "bg-success": {
    "backgroundColor": "#28a745"
  },
  "bg-hover-success": {
    "backgroundColor": "#1e7e34"
  },
  "bg-info": {
    "backgroundColor": "#17a2b8"
  },
  "bg-hover-info": {
    "backgroundColor": "#117a8b"
  },
  "bg-warning": {
    "backgroundColor": "#ffc107"
  },
  "bg-hover-warning": {
    "backgroundColor": "#d39e00"
  },
  "bg-danger": {
    "backgroundColor": "#dc3545"
  },
  "bg-hover-danger": {
    "backgroundColor": "#bd2130"
  },
  "bg-nav": {
    "backgroundColor": "#EDEDED"
  },
  "bg-light": {
    "backgroundColor": "#f8f9fa"
  },
  "bg-hover-light": {
    "backgroundColor": "#dae0e5"
  },
  "bg-dark": {
    "backgroundColor": "#343a40"
  },
  "bg-hover-dark": {
    "backgroundColor": "#1d2124"
  },
  "bg-white": {
    "backgroundColor": "#ffffff"
  },
  "bg-transparent": {
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "border": {
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#dee2e6"
  },
  "border-top": {
    "borderTopWidth": "1rpx",
    "borderTopStyle": "solid",
    "borderTopColor": "#dee2e6"
  },
  "border-right": {
    "borderRightWidth": "1rpx",
    "borderRightStyle": "solid",
    "borderRightColor": "#dee2e6"
  },
  "border-bottom": {
    "borderBottomWidth": "1rpx",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#dee2e6"
  },
  "border-left": {
    "borderLeftWidth": "1rpx",
    "borderLeftStyle": "solid",
    "borderLeftColor": "#dee2e6"
  },
  "border-0": {
    "borderWidth": 0
  },
  "border-top-0": {
    "borderTopWidth": 0
  },
  "border-right-0": {
    "borderRightWidth": 0
  },
  "border-bottom-0": {
    "borderBottomWidth": 0
  },
  "border-left-0": {
    "borderLeftWidth": 0
  },
  "border-primary": {
    "borderColor": "#007bff"
  },
  "border-secondary": {
    "borderColor": "#6c757d"
  },
  "border-light-secondary": {
    "borderColor": "#E9E8E5"
  },
  "border-success": {
    "borderColor": "#28a745"
  },
  "border-info": {
    "borderColor": "#17a2b8"
  },
  "border-warning": {
    "borderColor": "#ffc107"
  },
  "border-danger": {
    "borderColor": "#dc3545"
  },
  "border-light": {
    "borderColor": "#f8f9fa"
  },
  "border-dark": {
    "borderColor": "#343a40"
  },
  "border-white": {
    "borderColor": "#FFFFFF"
  },
  "rounded": {
    "borderRadius": "8rpx"
  },
  "rounded-top": {
    "borderTopLeftRadius": "8rpx",
    "borderTopRightRadius": "8rpx"
  },
  "rounded-right": {
    "borderTopRightRadius": "8rpx",
    "borderBottomRightRadius": "8rpx"
  },
  "rounded-bottom": {
    "borderBottomRightRadius": "8rpx",
    "borderBottomLeftRadius": "8rpx"
  },
  "rounded-left": {
    "borderTopLeftRadius": "8rpx",
    "borderBottomLeftRadius": "8rpx"
  },
  "rounded-circle": {
    "borderRadius": "100rpx"
  },
  "rounded-0": {
    "borderRadius": 0
  },
  "overflow-hidden": {
    "overflow": "hidden"
  },
  "position-relative": {
    "position": "relative"
  },
  "position-absolute": {
    "position": "absolute"
  },
  "position-fixed": {
    "position": "fixed"
  },
  "fixed-top": {
    "position": "fixed",
    "top": 0,
    "right": 0,
    "left": 0,
    "zIndex": 1030
  },
  "fixed-bottom": {
    "position": "fixed",
    "right": 0,
    "bottom": 0,
    "left": 0,
    "zIndex": 1030
  },
  "top-0": {
    "top": 0
  },
  "left-0": {
    "left": 0
  },
  "right-0": {
    "right": 0
  },
  "bottom-0": {
    "bottom": 0
  },
  "page": {
    "backgroundColor": "#EDEDED",
    "flex": 1
  },
  "main-bg-color": {
    "backgroundColor": "#3578E5"
  },
  "main-text-color": {
    "color": "#3578E5"
  },
  "border-main": {
    "borderColor": "#08C060"
  },
  "bg-chat-item": {
    "backgroundColor": "#6BEE68"
  },
  "text-chat-item": {
    "color": "#6BEE68"
  }
}

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/*!***********************************************************!*\
  !*** E:/天赐/TianciWeb/components/free-ui/free-nav-bar.vue ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _free_nav_bar_vue_vue_type_template_id_5d654fc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./free-nav-bar.vue?vue&type=template&id=5d654fc4& */ 15);
/* harmony import */ var _free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./free-nav-bar.vue?vue&type=script&lang=js& */ 17);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 24);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      
}

/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _free_nav_bar_vue_vue_type_template_id_5d654fc4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _free_nav_bar_vue_vue_type_template_id_5d654fc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "76611ad2",
  false,
  _free_nav_bar_vue_vue_type_template_id_5d654fc4___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "天赐/TianciWeb/components/free-ui/free-nav-bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 15 */
/*!******************************************************************************************!*\
  !*** E:/天赐/TianciWeb/components/free-ui/free-nav-bar.vue?vue&type=template&id=5d654fc4& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_nav_bar_vue_vue_type_template_id_5d654fc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./free-nav-bar.vue?vue&type=template&id=5d654fc4& */ 16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_nav_bar_vue_vue_type_template_id_5d654fc4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_nav_bar_vue_vue_type_template_id_5d654fc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_nav_bar_vue_vue_type_template_id_5d654fc4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_nav_bar_vue_vue_type_template_id_5d654fc4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 16 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/天赐/TianciWeb/components/free-ui/free-nav-bar.vue?vue&type=template&id=5d654fc4& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    [
      _c("view", { class: _vm.getClass }, [
        _c("view", { style: "height:" + _vm.statusBarHeight + "px" }),
        _vm.showNav
          ? _c(
              "view",
              {
                staticClass: [
                  "w-100",
                  "flex",
                  "align-center",
                  "justify-between"
                ],
                staticStyle: { height: "90rpx" }
              },
              [
                _c(
                  "view",
                  { staticClass: ["flex", "align-center"] },
                  [
                    _vm.showBack
                      ? _c("free-icon-button", {
                          attrs: { icon: "\ue645" },
                          on: { click: _vm.back }
                        })
                      : _vm._e(),
                    _vm.title
                      ? _c("u-text", { staticClass: ["font-md", "ml-3"] }, [
                          _vm._v(_vm._s(_vm.getTitle))
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm.showRight
                  ? _c(
                      "view",
                      { staticClass: ["flex", "align-center"] },
                      [
                        _vm._t("right", [
                          _c("free-icon-button", {
                            attrs: { icon: "\ue636" },
                            on: { click: _vm.openExtend }
                          })
                        ])
                      ],
                      2
                    )
                  : _vm._e()
              ]
            )
          : _vm._e()
      ]),
      _vm.fixed ? _c("view", { style: _vm.fixedStyle }) : _vm._e(),
      _vm.showRight
        ? _c(
            "free-popup",
            {
              ref: "extend",
              attrs: {
                bodyWidth: 320,
                bodyHeight: 205,
                bodyBgColor: "bg-dark",
                transformOrigin: "right top"
              }
            },
            [
              _c(
                "view",
                {
                  staticClass: ["flex", "flex-column"],
                  staticStyle: { width: "320rpx", height: "205rpx" }
                },
                _vm._l(_vm.menus, function(item, index) {
                  return _c(
                    "view",
                    {
                      key: index,
                      staticClass: ["flex-1", "flex", "align-center"],
                      on: {
                        click: function($event) {
                          _vm.clickEvent(item.event)
                        }
                      }
                    },
                    [
                      _c(
                        "u-text",
                        {
                          staticClass: [
                            "iconfont",
                            "pl-3",
                            "pr-2",
                            "font-md",
                            "text-white"
                          ]
                        },
                        [_vm._v(_vm._s(item.icon))]
                      ),
                      _c("u-text", { staticClass: ["font-md", "text-white"] }, [
                        _vm._v(_vm._s(item.name))
                      ])
                    ]
                  )
                }),
                0
              )
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 17 */
/*!************************************************************************************!*\
  !*** E:/天赐/TianciWeb/components/free-ui/free-nav-bar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./free-nav-bar.vue?vue&type=script&lang=js& */ 18);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 18 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/天赐/TianciWeb/components/free-ui/free-nav-bar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(plus, uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
















































var _freeIconButton = _interopRequireDefault(__webpack_require__(/*! ./free-icon-button.vue */ 19));
var _freePopup = _interopRequireDefault(__webpack_require__(/*! ./free-popup.vue */ 25));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _this;var _default = { props: { showBack: { type: Boolean, default: false }, showNav: { type: Boolean, default: true }, title: { type: [String, Boolean], default: false }, fixed: { type: Boolean, default: true }, noreadnum: { type: Number, default: 0 }, bgColor: { type: String, default: "bg-nav" }, showRight: { type: Boolean, default: true } }, components: { freeIconButton: _freeIconButton.default, freePopup: _freePopup.default }, data: function data() {return { statusBarHeight: 0, navBarHeight: 0, menus: [{ name: "发起群聊", event: "createGroup", icon: "\uE600" }, { name: "添加关注",
        event: "follow",
        icon: "\uE6A5" }] };



  },
  mounted: function mounted() {
    _this = this;

    this.statusBarHeight = plus.navigator.getStatusbarHeight();

    this.navBarHeight = this.statusBarHeight + uni.upx2px(90);
  },
  computed: {
    fixedStyle: function fixedStyle() {
      return "height:".concat(this.navBarHeight, "px");
    },
    getTitle: function getTitle() {
      var noreadnum = this.noreadnum > 0 ? '(' + this.noreadnum + ')' : '';
      return this.title;
    },
    getClass: function getClass() {
      var fixed = this.fixed ? 'fixed-top' : '';
      return "".concat(fixed, " ").concat(this.bgColor);
    } },

  methods: {
    openExtend: function openExtend() {
      this.$refs.extend.show(uni.upx2px(415), uni.upx2px(150));
    },
    clickEvent: function clickEvent(e) {
      switch (e) {
        case 'createGroup':
          _this.$refs.extend.hide();
          uni.navigateTo({
            url: '/pages/group/addGroup/addGroup' });

          break;
        case 'follow':
          _this.$refs.extend.hide();
          uni.navigateTo({
            url: '/pages/friend/addFriend/addFriend' });

          break;}

    },
    // 返回
    back: function back() {
      uni.navigateBack({
        delta: 1 });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["weexPlus"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),
/* 19 */
/*!***************************************************************!*\
  !*** E:/天赐/TianciWeb/components/free-ui/free-icon-button.vue ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _free_icon_button_vue_vue_type_template_id_7f5c65bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./free-icon-button.vue?vue&type=template&id=7f5c65bb& */ 20);
/* harmony import */ var _free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./free-icon-button.vue?vue&type=script&lang=js& */ 22);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 24);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      
}

/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _free_icon_button_vue_vue_type_template_id_7f5c65bb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _free_icon_button_vue_vue_type_template_id_7f5c65bb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "56ea9bb4",
  false,
  _free_icon_button_vue_vue_type_template_id_7f5c65bb___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "天赐/TianciWeb/components/free-ui/free-icon-button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 20 */
/*!**********************************************************************************************!*\
  !*** E:/天赐/TianciWeb/components/free-ui/free-icon-button.vue?vue&type=template&id=7f5c65bb& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_icon_button_vue_vue_type_template_id_7f5c65bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./free-icon-button.vue?vue&type=template&id=7f5c65bb& */ 21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_icon_button_vue_vue_type_template_id_7f5c65bb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_icon_button_vue_vue_type_template_id_7f5c65bb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_icon_button_vue_vue_type_template_id_7f5c65bb___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_icon_button_vue_vue_type_template_id_7f5c65bb___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 21 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/天赐/TianciWeb/components/free-ui/free-icon-button.vue?vue&type=template&id=7f5c65bb& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["flex", "align-center", "justify-center"],
      staticStyle: { height: "90rpx", width: "90rpx" },
      on: {
        click: function($event) {
          _vm.$emit("click")
        }
      }
    },
    [
      _c(
        "u-text",
        { staticClass: ["iconfont", "font-lg"], class: _vm.iconClass },
        [_vm._v(_vm._s(_vm.icon))]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 22 */
/*!****************************************************************************************!*\
  !*** E:/天赐/TianciWeb/components/free-ui/free-icon-button.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./free-icon-button.vue?vue&type=script&lang=js& */ 23);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 23 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/天赐/TianciWeb/components/free-ui/free-icon-button.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
var _default =
{
  props: {
    icon: {
      type: String,
      default: '' },

    iconClass: {
      type: String,
      default: '' } } };exports.default = _default;

/***/ }),
/* 24 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    options.components = Object.assign(components, options.components || {})
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 25 */
/*!*********************************************************!*\
  !*** E:/天赐/TianciWeb/components/free-ui/free-popup.vue ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _free_popup_vue_vue_type_template_id_dee53bbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./free-popup.vue?vue&type=template&id=dee53bbe&scoped=true& */ 26);
/* harmony import */ var _free_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./free-popup.vue?vue&type=script&lang=js& */ 28);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _free_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _free_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 24);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./free-popup.vue?vue&type=style&index=0&id=dee53bbe&scoped=true&lang=css& */ 31).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./free-popup.vue?vue&type=style&index=0&id=dee53bbe&scoped=true&lang=css& */ 31).default)
            }

}

/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _free_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _free_popup_vue_vue_type_template_id_dee53bbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _free_popup_vue_vue_type_template_id_dee53bbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "dee53bbe",
  "6495c6da",
  false,
  _free_popup_vue_vue_type_template_id_dee53bbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "天赐/TianciWeb/components/free-ui/free-popup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 26 */
/*!****************************************************************************************************!*\
  !*** E:/天赐/TianciWeb/components/free-ui/free-popup.vue?vue&type=template&id=dee53bbe&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_popup_vue_vue_type_template_id_dee53bbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./free-popup.vue?vue&type=template&id=dee53bbe&scoped=true& */ 27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_popup_vue_vue_type_template_id_dee53bbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_popup_vue_vue_type_template_id_dee53bbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_popup_vue_vue_type_template_id_dee53bbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_popup_vue_vue_type_template_id_dee53bbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 27 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/天赐/TianciWeb/components/free-ui/free-popup.vue?vue&type=template&id=dee53bbe&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.status
    ? _c("div", { staticStyle: { zIndex: "9999", overflow: "hidden" } }, [
        _vm.mask
          ? _c("div", {
              staticClass: [
                "position-fixed",
                "top-0",
                "left-0",
                "right-0",
                "bottom-0"
              ],
              style: _vm.getMaskColor,
              on: { click: _vm.hide }
            })
          : _vm._e(),
        _c(
          "div",
          {
            ref: "popup",
            staticClass: ["position-fixed", "free-animated"],
            class: _vm.getBodyClass,
            style: _vm.getBodyStyle
          },
          [_vm._t("default")],
          2
        )
      ])
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 28 */
/*!**********************************************************************************!*\
  !*** E:/天赐/TianciWeb/components/free-ui/free-popup.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./free-popup.vue?vue&type=script&lang=js& */ 29);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 29 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/天赐/TianciWeb/components/free-ui/free-popup.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, __f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//


var animation = weex.requireModule('animation');var _default =

{
  props: {
    // 是否开启蒙版颜色
    maskColor: {
      type: Boolean,
      default: false },

    // 是否开启蒙版
    mask: {
      type: Boolean,
      default: true },

    // 是否居中
    center: {
      type: Boolean,
      default: false },

    // 是否处于底部
    bottom: {
      type: Boolean,
      default: false },

    // 弹出层内容宽度
    bodyWidth: {
      type: Number,
      default: 0 },

    // 弹出层内容高度
    bodyHeight: {
      type: Number,
      default: 0 },

    bodyBgColor: {
      type: String,
      default: "bg-white" },

    transformOrigin: {
      type: String,
      default: "left top" },

    // tabbar高度
    tabbarHeight: {
      type: Number,
      default: 0 } },


  data: function data() {
    return {
      status: false,
      x: -1,
      y: 1,
      maxX: 0,
      maxY: 0 };

  },
  mounted: function mounted() {
    try {
      var res = uni.getSystemInfoSync();
      this.maxX = res.windowWidth - uni.upx2px(this.bodyWidth);
      this.maxY = res.windowHeight - uni.upx2px(this.bodyHeight) - uni.upx2px(this.tabbarHeight);
    } catch (e) {
      // error
    }
  },
  computed: {
    getMaskColor: function getMaskColor() {
      var i = this.maskColor ? 0.5 : 0;
      return "background-color: rgba(0,0,0,".concat(i, ");");
    },
    getBodyClass: function getBodyClass() {
      if (this.center) {
        return 'left-0 right-0 bottom-0 top-0 flex align-center justify-center';
      }
      var bottom = this.bottom ? 'left-0 right-0 bottom-0' : 'rounded border';
      return "".concat(this.bodyBgColor, " ").concat(bottom);
    },
    getBodyStyle: function getBodyStyle() {
      var left = this.x > -1 ? "left:".concat(this.x, "px;") : '';
      var top = this.y > -1 ? "top:".concat(this.y, "px;") : '';
      return left + top;
    } },

  methods: {
    show: function show() {var _this = this;var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      if (this.status) {
        return;
      }
      this.x = x > this.maxX ? this.maxX : x;
      this.y = y > this.maxY ? this.maxY : y;
      this.status = true;

      this.$nextTick(function () {
        animation.transition(_this.$refs.popup, {
          styles: {
            transform: 'scale(1,1)',
            transformOrigin: _this.transformOrigin,
            opacity: 1 },

          duration: 100, //ms
          timingFunction: 'ease' },
        function () {
          console.log(__f__('动画执行结束', " at components\\free-ui\\free-popup.vue:118"));
        });
      });


    },
    hide: function hide() {var _this2 = this;
      this.$emit('hide');

      animation.transition(this.$refs.popup, {
        styles: {
          transform: 'scale(0,0)',
          transformOrigin: this.transformOrigin,
          opacity: 0 },

        duration: 100, //ms
        timingFunction: 'ease' },
      function () {
        _this2.status = false;
        console.log(__f__('动画执行结束', " at components\\free-ui\\free-popup.vue:137"));
      });




    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 30)["default"]))

/***/ }),
/* 30 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v);

    if (type.toLowerCase() === '[object object]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  return msg;
}

/***/ }),
/* 31 */
/*!******************************************************************************************************************!*\
  !*** E:/天赐/TianciWeb/components/free-ui/free-popup.vue?vue&type=style&index=0&id=dee53bbe&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_popup_vue_vue_type_style_index_0_id_dee53bbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./free-popup.vue?vue&type=style&index=0&id=dee53bbe&scoped=true&lang=css& */ 32);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_popup_vue_vue_type_style_index_0_id_dee53bbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_popup_vue_vue_type_style_index_0_id_dee53bbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_popup_vue_vue_type_style_index_0_id_dee53bbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_popup_vue_vue_type_style_index_0_id_dee53bbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_popup_vue_vue_type_style_index_0_id_dee53bbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 32 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/天赐/TianciWeb/components/free-ui/free-popup.vue?vue&type=style&index=0&id=dee53bbe&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "free-animated": {
    "transform": "scale(0,0)",
    "opacity": 0
  }
}

/***/ }),
/* 33 */
/*!*************************************************************!*\
  !*** E:/天赐/TianciWeb/components/free-ui/free-list-item.vue ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _free_list_item_vue_vue_type_template_id_6975ced7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./free-list-item.vue?vue&type=template&id=6975ced7& */ 34);
/* harmony import */ var _free_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./free-list-item.vue?vue&type=script&lang=js& */ 36);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _free_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _free_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 24);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      
}

/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _free_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _free_list_item_vue_vue_type_template_id_6975ced7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _free_list_item_vue_vue_type_template_id_6975ced7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "f649a1e0",
  false,
  _free_list_item_vue_vue_type_template_id_6975ced7___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "天赐/TianciWeb/components/free-ui/free-list-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 34 */
/*!********************************************************************************************!*\
  !*** E:/天赐/TianciWeb/components/free-ui/free-list-item.vue?vue&type=template&id=6975ced7& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_list_item_vue_vue_type_template_id_6975ced7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./free-list-item.vue?vue&type=template&id=6975ced7& */ 35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_list_item_vue_vue_type_template_id_6975ced7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_list_item_vue_vue_type_template_id_6975ced7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_list_item_vue_vue_type_template_id_6975ced7___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_list_item_vue_vue_type_template_id_6975ced7___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 35 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/天赐/TianciWeb/components/free-ui/free-list-item.vue?vue&type=template&id=6975ced7& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["bg-white", "flex", "align-stretch"],
      on: {
        click: function($event) {
          _vm.$emit("click")
        }
      }
    },
    [
      _vm.showLeftIcon
        ? _c(
            "view",
            {
              staticClass: [
                "flex",
                "align-center",
                "justify-center",
                "py-2",
                "pl-3"
              ]
            },
            [
              _vm._t("icon"),
              _vm.cover
                ? _c("u-image", {
                    style: _vm.coverStyle,
                    attrs: { src: _vm.cover, mode: "aspectFill" },
                    on: {
                      longpress: function($event) {
                        _vm.$emit("imgClick")
                      }
                    }
                  })
                : _vm._e()
            ],
            2
          )
        : _vm._e(),
      _c(
        "view",
        {
          staticClass: [
            "flex-1",
            "flex",
            "align-center",
            "",
            "justify-between",
            "pr-3",
            "py-3",
            "pl-3"
          ],
          class: _vm.border ? "border-bottom" : ""
        },
        [
          _vm._t("default", [
            _c("u-text", { staticClass: ["font-md", "text-dark"] }, [
              _vm._v(_vm._s(_vm.title))
            ])
          ]),
          _vm.showRight
            ? _c(
                "view",
                { staticClass: ["flex", "align-center"] },
                [
                  _vm._t("right"),
                  _vm.showRightIcon
                    ? _c(
                        "u-text",
                        {
                          staticClass: [
                            "iconfont",
                            "text-light-muted",
                            "font-md"
                          ]
                        },
                        [_vm._v("")]
                      )
                    : _vm._e()
                ],
                2
              )
            : _vm._e()
        ],
        2
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 36 */
/*!**************************************************************************************!*\
  !*** E:/天赐/TianciWeb/components/free-ui/free-list-item.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./free-list-item.vue?vue&type=script&lang=js& */ 37);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 37 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/天赐/TianciWeb/components/free-ui/free-list-item.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  props: {
    // 是否开启下边线
    border: {
      type: Boolean,
      default: true },

    // 封面
    cover: {
      type: String,
      default: "" },

    // 封面大小
    coverSize: {
      type: [String, Number],
      default: 75 },

    // 标题
    title: {
      type: String,
      default: "" },

    // 显示右边
    showRight: {
      type: Boolean,
      default: false },

    // 显示左边图标
    showLeftIcon: {
      type: Boolean,
      default: true },

    // 是否显示箭头
    showRightIcon: {
      type: Boolean,
      default: true } },


  computed: {
    coverStyle: function coverStyle() {
      return "width: ".concat(this.coverSize, "rpx;height: ").concat(this.coverSize, "rpx;");
    } } };exports.default = _default;

/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/*!*******************************************!*\
  !*** E:/天赐/TianciWeb/js_sdk/ErrorCode.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = getCodeMsg;function getCodeMsg(code) {
  var error_code = {
    880001: "未知错误码",
    880002: "参数不合法",
    880003: "非法内容格式",
    880004: "非法内容格式",
    880005: "文件不存在",
    880006: "注册之前先退出",
    880007: "被限制注册",
    880008: "msg_id 非法",
    880101: "appkey 不存在",
    880102: "签名错误",
    880103: "用户不存在",
    880104: "密码错误",
    880106: "签名过期",
    880107: "已经是登录状态",
    880109: "重复登录操作",
    880110: "多通道错误，更新sdk版本",
    880111: "用户被禁用",
    880203: "目标用户不存在",
    880204: "目标群组不存在",
    880205: "用户不在群组",
    880206: "消息大小超过限制",
    880207: "用户被对方拉黑",
    880208: "消息包含敏感词汇",
    880209: "发送速度超过限制",
    880210: "文件大小超过限制",
    880212: "禁言中",
    880402: "没有创建群组的权限",
    880403: "群数量到达上限",
    880404: "群名字超过长度限制，创建失败",
    880405: "群描述长度超过限制",
    880602: "目标为空",
    880604: "没权限添加群成员",
    880606: "成员列表中有用户没有被添加到群组的权限",
    880607: "该成员已在群聊中",
    880608: "数量超过限制",
    880609: "成员列表中存在成员的群组数量超过限制",
    880610: "用户已经在群里面",
    880611: "群类型不支持该操作",
    880612: "已经处理",
    880614: "无权限操作",
    880704: "用户没有删除群成员的权限",
    880705: "成员列表中存在成员用户没权限删除",
    880903: "成员列表中有成员不能被添加，添加失败",
    880904: "重复添加",
    881101: "该成员已处于免打扰状态",
    881102: "该成员不处于免打扰状态",
    881105: "该群组已处于免打扰状态",
    881106: "该群组不处于免打扰状态",
    881107: "已经设置免打扰",
    881108: "没有设置免打扰",
    881203: "已经设置了屏蔽",
    881204: "群未设置屏蔽",
    881302: "已经是好友",
    881303: "非好友关系",
    881304: "非法备注",
    881305: "添加好友失败：邀请事件无效",
    881401: "超出撤回时间",
    881402: "请求撤回方不是消息发送方",
    881403: "消息不存在",
    881404: "已经撤回",
    881501: "用户不在聊天室",
    881502: "用户被禁止发消息",
    881503: "聊天室不存在",
    881504: "消息长度超出限制",
    881507: "用户已经在聊天室",
    881508: "超过聊天室人数限制",
    881509: "消息格式错误",
    881602: "目标用户未登录",
    881604: "消息长度超出限制",
    881701: "用户不是群管理员",
    882001: "系统内部错误",
    882002: "视操作而定",
    882003: "参数不合法",
    882004: "无效授权",
    882005: "系统繁忙，稍后重试" };

  return error_code[code];
}

/***/ }),
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */
/*!***************************************************************!*\
  !*** E:/天赐/TianciWeb/components/free-ui/free-main-button.vue ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _free_main_button_vue_vue_type_template_id_e807570a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./free-main-button.vue?vue&type=template&id=e807570a& */ 71);
/* harmony import */ var _free_main_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./free-main-button.vue?vue&type=script&lang=js& */ 73);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _free_main_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _free_main_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 24);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      
}

/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _free_main_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _free_main_button_vue_vue_type_template_id_e807570a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _free_main_button_vue_vue_type_template_id_e807570a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "638a8a74",
  false,
  _free_main_button_vue_vue_type_template_id_e807570a___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "天赐/TianciWeb/components/free-ui/free-main-button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 71 */
/*!**********************************************************************************************!*\
  !*** E:/天赐/TianciWeb/components/free-ui/free-main-button.vue?vue&type=template&id=e807570a& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_main_button_vue_vue_type_template_id_e807570a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./free-main-button.vue?vue&type=template&id=e807570a& */ 72);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_main_button_vue_vue_type_template_id_e807570a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_main_button_vue_vue_type_template_id_e807570a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_main_button_vue_vue_type_template_id_e807570a___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_main_button_vue_vue_type_template_id_e807570a___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 72 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/天赐/TianciWeb/components/free-ui/free-main-button.vue?vue&type=template&id=e807570a& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["rounded", "mr-2", "px-2", "py-1"],
      class: _vm.disabled ? "bg-light border" : "main-bg-color",
      on: { click: _vm.clickEvent }
    },
    [
      _c(
        "u-text",
        {
          staticClass: ["font"],
          class: _vm.disabled ? "text-light-muted" : "text-white"
        },
        [_vm._v(_vm._s(_vm.name))]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 73 */
/*!****************************************************************************************!*\
  !*** E:/天赐/TianciWeb/components/free-ui/free-main-button.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_main_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./free-main-button.vue?vue&type=script&lang=js& */ 74);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_main_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_main_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_main_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_main_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_free_main_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 74 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/天赐/TianciWeb/components/free-ui/free-main-button.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
var _default =
{
  props: {
    name: {
      type: String,
      default: "" },

    disabled: {
      type: Boolean,
      default: false } },


  methods: {
    clickEvent: function clickEvent() {
      if (!this.disabled) {
        this.$emit('click');
      }
    } } };exports.default = _default;

/***/ }),
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */
/*!***************************************************!*\
  !*** E:/天赐/TianciWeb/js_sdk/chineseConversion.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.initial = initial;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var pinyin = function () {
  var Pinyin = function Pinyin(ops) {
    this.initialize(ops);
  },

  options = {
    checkPolyphone: false,
    charcase: 'default' };



  Pinyin.fn = Pinyin.prototype = {
    init: function init(ops) {
      this.options = extend(options, ops);
    },

    initialize: function initialize(ops) {var _this$polyphone;
      this.init(ops);
      this.char_dict =
      "YDYQSXMWZSSXJBYMGCCZQPSSQBYCDSCDQLDYLYBSSJGYZZJJFKCCLZDHWDWZJLJPFYYNWJJTMYHZWZHFLZPPQHGSCYYYNJQYXXGJHHSDSJNKKTMOMLCRXYPSNQSECCQZGGLLYJLMYZZSECYKYYHQWJSSGGYXYZYJWWKDJHYCHMYXJTLXJYQBYXZLDWRDJRWYSRLDZJPCBZJJBRCFTLECZSTZFXXZHTRQHYBDLYCZSSYMMRFMYQZPWWJJYFCRWFDFZQPYDDWYXKYJAWJFFXYPSFTZYHHYZYSWCJYXSCLCXXWZZXNBGNNXBXLZSZSBSGPYSYZDHMDZBQBZCWDZZYYTZHBTSYYBZGNTNXQYWQSKBPHHLXGYBFMJEBJHHGQTJCYSXSTKZHLYCKGLYSMZXYALMELDCCXGZYRJXSDLTYZCQKCNNJWHJTZZCQLJSTSTBNXBTYXCEQXGKWJYFLZQLYHYXSPSFXLMPBYSXXXYDJCZYLLLSJXFHJXPJBTFFYABYXBHZZBJYZLWLCZGGBTSSMDTJZXPTHYQTGLJSCQFZKJZJQNLZWLSLHDZBWJNCJZYZSQQYCQYRZCJJWYBRTWPYFTWEXCSKDZCTBZHYZZYYJXZCFFZZMJYXXSDZZOTTBZLQWFCKSZSXFYRLNYJMBDTHJXSQQCCSBXYYTSYFBXDZTGBCNSLCYZZPSAZYZZSCJCSHZQYDXLBPJLLMQXTYDZXSQJTZPXLCGLQTZWJBHCTSYJSFXYEJJTLBGXSXJMYJQQPFZASYJNTYDJXKJCDJSZCBARTDCLYJQMWNQNCLLLKBYBZZSYHQQLTWLCCXTXLLZNTYLNEWYZYXCZXXGRKRMTCNDNJTSYYSSDQDGHSDBJGHRWRQLYBGLXHLGTGXBQJDZPYJSJYJCTMRNYMGRZJCZGJMZMGXMPRYXKJNYMSGMZJYMKMFXMLDTGFBHCJHKYLPFMDXLQJJSMTQGZSJLQDLDGJYCALCMZCSDJLLNXDJFFFFJCZFMZFFPFKHKGDPSXKTACJDHHZDDCRRCFQYJKQCCWJDXHWJLYLLZGCFCQDSMLZPBJJPLSBCJGGDCKKDEZSQCCKJGCGKDJTJDLZYCXKLQSCGJCLTFPCQCZGWPJDQYZJJBYJHSJDZWGFSJGZKQCCZLLPSPKJGQJHZZLJPLGJGJJTHJJYJZCZMLZLYQBGJWMLJKXZDZNJQSYZMLJLLJKYWXMKJLHSKJGBMCLYYMKXJQLBMLLKMDXXKWYXYSLMLPSJQQJQXYXFJTJDXMXXLLCXQBSYJBGWYMBGGBCYXPJYGPEPFGDJGBHBNSQJYZJKJKHXQFGQZKFHYGKHDKLLSDJQXPQYKYBNQSXQNSZSWHBSXWHXWBZZXDMNSJBSBKBBZKLYLXGWXDRWYQZMYWSJQLCJXXJXKJEQXSCYETLZHLYYYSDZPAQYZCMTLSHTZCFYZYXYLJSDCJQAGYSLCQLYYYSHMRQQKLDXZSCSSSYDYCJYSFSJBFRSSZQSBXXPXJYSDRCKGJLGDKZJZBDKTCSYQPYHSTCLDJDHMXMCGXYZHJDDTMHLTXZXYLYMOHYJCLTYFBQQXPFBDFHHTKSQHZYYWCNXXCRWHOWGYJLEGWDQCWGFJYCSNTMYTOLBYGWQWESJPWNMLRYDZSZTXYQPZGCWXHNGPYXSHMYQJXZTDPPBFYHZHTJYFDZWKGKZBLDNTSXHQEEGZZYLZMMZYJZGXZXKHKSTXNXXWYLYAPSTHXDWHZYMPXAGKYDXBHNHXKDPJNMYHYLPMGOCSLNZHKXXLPZZLBMLSFBHHGYGYYGGBHSCYAQTYWLXTZQCEZYDQDQMMHTKLLSZHLSJZWFYHQSWSCWLQAZYNYTLSXTHAZNKZZSZZLAXXZWWCTGQQTDDYZTCCHYQZFLXPSLZYGPZSZNGLNDQTBDLXGTCTAJDKYWNSYZLJHHZZCWNYYZYWMHYCHHYXHJKZWSXHZYXLYSKQYSPSLYZWMYPPKBYGLKZHTYXAXQSYSHXASMCHKDSCRSWJPWXSGZJLWWSCHSJHSQNHCSEGNDAQTBAALZZMSSTDQJCJKTSCJAXPLGGXHHGXXZCXPDMMHLDGTYBYSJMXHMRCPXXJZCKZXSHMLQXXTTHXWZFKHCCZDYTCJYXQHLXDHYPJQXYLSYYDZOZJNYXQEZYSQYAYXWYPDGXDDXSPPYZNDLTWRHXYDXZZJHTCXMCZLHPYYYYMHZLLHNXMYLLLMDCPPXHMXDKYCYRDLTXJCHHZZXZLCCLYLNZSHZJZZLNNRLWHYQSNJHXYNTTTKYJPYCHHYEGKCTTWLGQRLGGTGTYGYHPYHYLQYQGCWYQKPYYYTTTTLHYHLLTYTTSPLKYZXGZWGPYDSSZZDQXSKCQNMJJZZBXYQMJRTFFBTKHZKBXLJJKDXJTLBWFZPPTKQTZTGPDGNTPJYFALQMKGXBDCLZFHZCLLLLADPMXDJHLCCLGYHDZFGYDDGCYYFGYDXKSSEBDHYKDKDKHNAXXYBPBYYHXZQGAFFQYJXDMLJCSQZLLPCHBSXGJYNDYBYQSPZWJLZKSDDTACTBXZDYZYPJZQSJNKKTKNJDJGYYPGTLFYQKASDNTCYHBLWDZHBBYDWJRYGKZYHEYYFJMSDTYFZJJHGCXPLXHLDWXXJKYTCYKSSSMTWCTTQZLPBSZDZWZXGZAGYKTYWXLHLSPBCLLOQMMZSSLCMBJCSZZKYDCZJGQQDSMCYTZQQLWZQZXSSFPTTFQMDDZDSHDTDWFHTDYZJYQJQKYPBDJYYXTLJHDRQXXXHAYDHRJLKLYTWHLLRLLRCXYLBWSRSZZSYMKZZHHKYHXKSMDSYDYCJPBZBSQLFCXXXNXKXWYWSDZYQOGGQMMYHCDZTTFJYYBGSTTTYBYKJDHKYXBELHTYPJQNFXFDYKZHQKZBYJTZBXHFDXKDASWTAWAJLDYJSFHBLDNNTNQJTJNCHXFJSRFWHZFMDRYJYJWZPDJKZYJYMPCYZNYNXFBYTFYFWYGDBNZZZDNYTXZEMMQBSQEHXFZMBMFLZZSRXYMJGSXWZJSPRYDJSJGXHJJGLJJYNZZJXHGXKYMLPYYYCXYTWQZSWHWLYRJLPXSLSXMFSWWKLCTNXNYNPSJSZHDZEPTXMYYWXYYSYWLXJQZQXZDCLEEELMCPJPCLWBXSQHFWWTFFJTNQJHJQDXHWLBYZNFJLALKYYJLDXHHYCSTYYWNRJYXYWTRMDRQHWQCMFJDYZMHMYYXJWMYZQZXTLMRSPWWCHAQBXYGZYPXYYRRCLMPYMGKSJSZYSRMYJSNXTPLNBAPPYPYLXYYZKYNLDZYJZCZNNLMZHHARQMPGWQTZMXXMLLHGDZXYHXKYXYCJMFFYYHJFSBSSQLXXNDYCANNMTCJCYPRRNYTYQNYYMBMSXNDLYLYSLJRLXYSXQMLLYZLZJJJKYZZCSFBZXXMSTBJGNXYZHLXNMCWSCYZYFZLXBRNNNYLBNRTGZQYSATSWRYHYJZMZDHZGZDWYBSSCSKXSYHYTXXGCQGXZZSHYXJSCRHMKKBXCZJYJYMKQHZJFNBHMQHYSNJNZYBKNQMCLGQHWLZNZSWXKHLJHYYBQLBFCDSXDLDSPFZPSKJYZWZXZDDXJSMMEGJSCSSMGCLXXKYYYLNYPWWWGYDKZJGGGZGGSYCKNJWNJPCXBJJTQTJWDSSPJXZXNZXUMELPXFSXTLLXCLJXJJLJZXCTPSWXLYDHLYQRWHSYCSQYYBYAYWJJJQFWQCQQCJQGXALDBZZYJGKGXPLTZYFXJLTPADKYQHPMATLCPDCKBMTXYBHKLENXDLEEGQDYMSAWHZMLJTWYGXLYQZLJEEYYBQQFFNLYXRDSCTGJGXYYNKLLYQKCCTLHJLQMKKZGCYYGLLLJDZGYDHZWXPYSJBZKDZGYZZHYWYFQYTYZSZYEZZLYMHJJHTSMQWYZLKYYWZCSRKQYTLTDXWCTYJKLWSQZWBDCQYNCJSRSZJLKCDCDTLZZZACQQZZDDXYPLXZBQJYLZLLLQDDZQJYJYJZYXNYYYNYJXKXDAZWYRDLJYYYRJLXLLDYXJCYWYWNQCCLDDNYYYNYCKCZHXXCCLGZQJGKWPPCQQJYSBZZXYJSQPXJPZBSBDSFNSFPZXHDWZTDWPPTFLZZBZDMYYPQJRSDZSQZSQXBDGCPZSWDWCSQZGMDHZXMWWFYBPDGPHTMJTHZSMMBGZMBZJCFZWFZBBZMQCFMBDMCJXLGPNJBBXGYHYYJGPTZGZMQBQTCGYXJXLWZKYDPDYMGCFTPFXYZTZXDZXTGKMTYBBCLBJASKYTSSQYYMSZXFJEWLXLLSZBQJJJAKLYLXLYCCTSXMCWFKKKBSXLLLLJYXTYLTJYYTDPJHNHNNKBYQNFQYYZBYYESSESSGDYHFHWTCJBSDZZTFDMXHCNJZYMQWSRYJDZJQPDQBBSTJGGFBKJBXTGQHNGWJXJGDLLTHZHHYYYYYYSXWTYYYCCBDBPYPZYCCZYJPZYWCBDLFWZCWJDXXHYHLHWZZXJTCZLCDPXUJCZZZLYXJJTXPHFXWPYWXZPTDZZBDZCYHJHMLXBQXSBYLRDTGJRRCTTTHYTCZWMXFYTWWZCWJWXJYWCSKYBZSCCTZQNHXNWXXKHKFHTSWOCCJYBCMPZZYKBNNZPBZHHZDLSYDDYTYFJPXYNGFXBYQXCBHXCPSXTYZDMKYSNXSXLHKMZXLYHDHKWHXXSSKQYHHCJYXGLHZXCSNHEKDTGZXQYPKDHEXTYKCNYMYYYPKQYYYKXZLTHJQTBYQHXBMYHSQCKWWYLLHCYYLNNEQXQWMCFBDCCMLJGGXDQKTLXKGNQCDGZJWYJJLYHHQTTTNWCHMXCXWHWSZJYDJCCDBQCDGDNYXZTHCQRXCBHZTQCBXWGQWYYBXHMBYMYQTYEXMQKYAQYRGYZSLFYKKQHYSSQYSHJGJCNXKZYCXSBXYXHYYLSTYCXQTHYSMGSCPMMGCCCCCMTZTASMGQZJHKLOSQYLSWTMXSYQKDZLJQQYPLSYCZTCQQPBBQJZCLPKHQZYYXXDTDDTSJCXFFLLCHQXMJLWCJCXTSPYCXNDTJSHJWXDQQJSKXYAMYLSJHMLALYKXCYYDMNMDQMXMCZNNCYBZKKYFLMCHCMLHXRCJJHSYLNMTJZGZGYWJXSRXCWJGJQHQZDQJDCJJZKJKGDZQGJJYJYLXZXXCDQHHHEYTMHLFSBDJSYYSHFYSTCZQLPBDRFRZTZYKYWHSZYQKWDQZRKMSYNBCRXQBJYFAZPZZEDZCJYWBCJWHYJBQSZYWRYSZPTDKZPFPBNZTKLQYHBBZPNPPTYZZYBQNYDCPJMMCYCQMCYFZZDCMNLFPBPLNGQJTBTTNJZPZBBZNJKLJQYLNBZQHKSJZNGGQSZZKYXSHPZSNBCGZKDDZQANZHJKDRTLZLSWJLJZLYWTJNDJZJHXYAYNCBGTZCSSQMNJPJYTYSWXZFKWJQTKHTZPLBHSNJZSYZBWZZZZLSYLSBJHDWWQPSLMMFBJDWAQYZTCJTBNNWZXQXCDSLQGDSDPDZHJTQQPSWLYYJZLGYXYZLCTCBJTKTYCZJTQKBSJLGMGZDMCSGPYNJZYQYYKNXRPWSZXMTNCSZZYXYBYHYZAXYWQCJTLLCKJJTJHGDXDXYQYZZBYWDLWQCGLZGJGQRQZCZSSBCRPCSKYDZNXJSQGXSSJMYDNSTZTPBDLTKZWXQWQTZEXNQCZGWEZKSSBYBRTSSSLCCGBPSZQSZLCCGLLLZXHZQTHCZMQGYZQZNMCOCSZJMMZSQPJYGQLJYJPPLDXRGZYXCCSXHSHGTZNLZWZKJCXTCFCJXLBMQBCZZWPQDNHXLJCTHYZLGYLNLSZZPCXDSCQQHJQKSXZPBAJYEMSMJTZDXLCJYRYYNWJBNGZZTMJXLTBSLYRZPYLSSCNXPHLLHYLLQQZQLXYMRSYCXZLMMCZLTZSDWTJJLLNZGGQXPFSKYGYGHBFZPDKMWGHCXMSGDXJMCJZDYCABXJDLNBCDQYGSKYDQTXDJJYXMSZQAZDZFSLQXYJSJZYLBTXXWXQQZBJZUFBBLYLWDSLJHXJYZJWTDJCZFQZQZZDZSXZZQLZCDZFJHYSPYMPQZMLPPLFFXJJNZZYLSJEYQZFPFZKSYWJJJHRDJZZXTXXGLGHYDXCSKYSWMMZCWYBAZBJKSHFHJCXMHFQHYXXYZFTSJYZFXYXPZLCHMZMBXHZZSXYFYMNCWDABAZLXKTCSHHXKXJJZJSTHYGXSXYYHHHJWXKZXSSBZZWHHHCWTZZZPJXSNXQQJGZYZYWLLCWXZFXXYXYHXMKYYSWSQMNLNAYCYSPMJKHWCQHYLAJJMZXHMMCNZHBHXCLXTJPLTXYJHDYYLTTXFSZHYXXSJBJYAYRSMXYPLCKDUYHLXRLNLLSTYZYYQYGYHHSCCSMZCTZQXKYQFPYYRPFFLKQUNTSZLLZMWWTCQQYZWTLLMLMPWMBZSSTZRBPDDTLQJJBXZCSRZQQYGWCSXFWZLXCCRSZDZMCYGGDZQSGTJSWLJMYMMZYHFBJDGYXCCPSHXNZCSBSJYJGJMPPWAFFYFNXHYZXZYLREMZGZCYZSSZDLLJCSQFNXZKPTXZGXJJGFMYYYSNBTYLBNLHPFZDCYFBMGQRRSSSZXYSGTZRNYDZZCDGPJAFJFZKNZBLCZSZPSGCYCJSZLMLRSZBZZLDLSLLYSXSQZQLYXZLSKKBRXBRBZCYCXZZZEEYFGKLZLYYHGZSGZLFJHGTGWKRAAJYZKZQTSSHJJXDCYZUYJLZYRZDQQHGJZXSSZBYKJPBFRTJXLLFQWJHYLQTYMBLPZDXTZYGBDHZZRBGXHWNJTJXLKSCFSMWLSDQYSJTXKZSCFWJLBXFTZLLJZLLQBLSQMQQCGCZFPBPHZCZJLPYYGGDTGWDCFCZQYYYQYSSCLXZSKLZZZGFFCQNWGLHQYZJJCZLQZZYJPJZZBPDCCMHJGXDQDGDLZQMFGPSYTSDYFWWDJZJYSXYYCZCYHZWPBYKXRYLYBHKJKSFXTZJMMCKHLLTNYYMSYXYZPYJQYCSYCWMTJJKQYRHLLQXPSGTLYYCLJSCPXJYZFNMLRGJJTYZBXYZMSJYJHHFZQMSYXRSZCWTLRTQZSSTKXGQKGSPTGCZNJSJCQCXHMXGGZTQYDJKZDLBZSXJLHYQGGGTHQSZPYHJHHGYYGKGGCWJZZYLCZLXQSFTGZSLLLMLJSKCTBLLZZSZMMNYTPZSXQHJCJYQXYZXZQZCPSHKZZYSXCDFGMWQRLLQXRFZTLYSTCTMJCXJJXHJNXTNRZTZFQYHQGLLGCXSZSJDJLJCYDSJTLNYXHSZXCGJZYQPYLFHDJSBPCCZHJJJQZJQDYBSSLLCMYTTMQTBHJQNNYGKYRQYQMZGCJKPDCGMYZHQLLSLLCLMHOLZGDYYFZSLJCQZLYLZQJESHNYLLJXGJXLYSYYYXNBZLJSSZCQQCJYLLZLTJYLLZLLBNYLGQCHXYYXOXCXQKYJXXXYKLXSXXYQXCYKQXQCSGYXXYQXYGYTQOHXHXPYXXXULCYEYCHZZCBWQBBWJQZSCSZSSLZYLKDESJZWMYMCYTSDSXXSCJPQQSQYLYYZYCMDJDZYWCBTJSYDJKCYDDJLBDJJSODZYSYXQQYXDHHGQQYQHDYXWGMMMAJDYBBBPPBCMUUPLJZSMTXERXJMHQNUTPJDCBSSMSSSTKJTSSMMTRCPLZSZMLQDSDMJMQPNQDXCFYNBFSDQXYXHYAYKQYDDLQYYYSSZBYDSLNTFQTZQPZMCHDHCZCWFDXTMYQSPHQYYXSRGJCWTJTZZQMGWJJTJHTQJBBHWZPXXHYQFXXQYWYYHYSCDYDHHQMNMTMWCPBSZPPZZGLMZFOLLCFWHMMSJZTTDHZZYFFYTZZGZYSKYJXQYJZQBHMBZZLYGHGFMSHPZFZSNCLPBQSNJXZSLXXFPMTYJYGBXLLDLXPZJYZJYHHZCYWHJYLSJEXFSZZYWXKZJLUYDTMLYMQJPWXYHXSKTQJEZRPXXZHHMHWQPWQLYJJQJJZSZCPHJLCHHNXJLQWZJHBMZYXBDHHYPZLHLHLGFWLCHYYTLHJXCJMSCPXSTKPNHQXSRTYXXTESYJCTLSSLSTDLLLWWYHDHRJZSFGXTSYCZYNYHTDHWJSLHTZDQDJZXXQHGYLTZPHCSQFCLNJTCLZPFSTPDYNYLGMJLLYCQHYSSHCHYLHQYQTMZYPBYWRFQYKQSYSLZDQJMPXYYSSRHZJNYWTQDFZBWWTWWRXCWHGYHXMKMYYYQMSMZHNGCEPMLQQMTCWCTMMPXJPJJHFXYYZSXZHTYBMSTSYJTTQQQYYLHYNPYQZLCYZHZWSMYLKFJXLWGXYPJYTYSYXYMZCKTTWLKSMZSYLMPWLZWXWQZSSAQSYXYRHSSNTSRAPXCPWCMGDXHXZDZYFJHGZTTSBJHGYZSZYSMYCLLLXBTYXHBBZJKSSDMALXHYCFYGMQYPJYCQXJLLLJGSLZGQLYCJCCZOTYXMTMTTLLWTGPXYMZMKLPSZZZXHKQYSXCTYJZYHXSHYXZKXLZWPSQPYHJWPJPWXQQYLXSDHMRSLZZYZWTTCYXYSZZSHBSCCSTPLWSSCJCHNLCGCHSSPHYLHFHHXJSXYLLNYLSZDHZXYLSXLWZYKCLDYAXZCMDDYSPJTQJZLNWQPSSSWCTSTSZLBLNXSMNYYMJQBQHRZWTYYDCHQLXKPZWBGQYBKFCMZWPZLLYYLSZYDWHXPSBCMLJBSCGBHXLQHYRLJXYSWXWXZSLDFHLSLYNJLZYFLYJYCDRJLFSYZFSLLCQYQFGJYHYXZLYLMSTDJCYHBZLLNWLXXYGYYHSMGDHXXHHLZZJZXCZZZCYQZFNGWPYLCPKPYYPMCLQKDGXZGGWQBDXZZKZFBXXLZXJTPJPTTBYTSZZDWSLCHZHSLTYXHQLHYXXXYYZYSWTXZKHLXZXZPYHGCHKCFSYHUTJRLXFJXPTZTWHPLYXFCRHXSHXKYXXYHZQDXQWULHYHMJTBFLKHTXCWHJFWJCFPQRYQXCYYYQYGRPYWSGSUNGWCHKZDXYFLXXHJJBYZWTSXXNCYJJYMSWZJQRMHXZWFQSYLZJZGBHYNSLBGTTCSYBYXXWXYHXYYXNSQYXMQYWRGYQLXBBZLJSYLPSYTJZYHYZAWLRORJMKSCZJXXXYXCHDYXRYXXJDTSQFXLYLTSFFYXLMTYJMJUYYYXLTZCSXQZQHZXLYYXZHDNBRXXXJCTYHLBRLMBRLLAXKYLLLJLYXXLYCRYLCJTGJCMTLZLLCYZZPZPCYAWHJJFYBDYYZSMPCKZDQYQPBPCJPDCYZMDPBCYYDYCNNPLMTMLRMFMMGWYZBSJGYGSMZQQQZTXMKQWGXLLPJGZBQCDJJJFPKJKCXBLJMSWMDTQJXLDLPPBXCWRCQFBFQJCZAHZGMYKPHYYHZYKNDKZMBPJYXPXYHLFPNYYGXJDBKXNXHJMZJXSTRSTLDXSKZYSYBZXJLXYSLBZYSLHXJPFXPQNBYLLJQKYGZMCYZZYMCCSLCLHZFWFWYXZMWSXTYNXJHPYYMCYSPMHYSMYDYSHQYZCHMJJMZCAAGCFJBBHPLYZYLXXSDJGXDHKXXTXXNBHRMLYJSLTXMRHNLXQJXYZLLYSWQGDLBJHDCGJYQYCMHWFMJYBMBYJYJWYMDPWHXQLDYGPDFXXBCGJSPCKRSSYZJMSLBZZJFLJJJLGXZGYXYXLSZQYXBEXYXHGCXBPLDYHWETTWWCJMBTXCHXYQXLLXFLYXLLJLSSFWDPZSMYJCLMWYTCZPCHQEKCQBWLCQYDPLQPPQZQFJQDJHYMMCXTXDRMJWRHXCJZYLQXDYYNHYYHRSLSRSYWWZJYMTLTLLGTQCJZYABTCKZCJYCCQLJZQXALMZYHYWLWDXZXQDLLQSHGPJFJLJHJABCQZDJGTKHSSTCYJLPSWZLXZXRWGLDLZRLZXTGSLLLLZLYXXWGDZYGBDPHZPBRLWSXQBPFDWOFMWHLYPCBJCCLDMBZPBZZLCYQXLDOMZBLZWPDWYYGDSTTHCSQSCCRSSSYSLFYBFNTYJSZDFNDPDHDZZMBBLSLCMYFFGTJJQWFTMTPJWFNLBZCMMJTGBDZLQLPYFHYYMJYLSDCHDZJWJCCTLJCLDTLJJCPDDSQDSSZYBNDBJLGGJZXSXNLYCYBJXQYCBYLZCFZPPGKCXZDZFZTJJFJSJXZBNZYJQTTYJYHTYCZHYMDJXTTMPXSPLZCDWSLSHXYPZGTFMLCJTYCBPMGDKWYCYZCDSZZYHFLYCTYGWHKJYYLSJCXGYWJCBLLCSNDDBTZBSCLYZCZZSSQDLLMQYYHFSLQLLXFTYHABXGWNYWYYPLLSDLDLLBJCYXJZMLHLJDXYYQYTDLLLBUGBFDFBBQJZZMDPJHGCLGMJJPGAEHHBWCQXAXHHHZCHXYPHJAXHLPHJPGPZJQCQZGJJZZUZDMQYYBZZPHYHYBWHAZYJHYKFGDPFQSDLZMLJXKXGALXZDAGLMDGXMWZQYXXDXXPFDMMSSYMPFMDMMKXKSYZYSHDZKXSYSMMZZZMSYDNZZCZXFPLSTMZDNMXCKJMZTYYMZMZZMSXHHDCZJEMXXKLJSTLWLSQLYJZLLZJSSDPPMHNLZJCZYHMXXHGZCJMDHXTKGRMXFWMCGMWKDTKSXQMMMFZZYDKMSCLCMPCGMHSPXQPZDSSLCXKYXTWLWJYAHZJGZQMCSNXYYMMPMLKJXMHLMLQMXCTKZMJQYSZJSYSZHSYJZJCDAJZYBSDQJZGWZQQXFKDMSDJLFWEHKZQKJPEYPZYSZCDWYJFFMZZYLTTDZZEFMZLBNPPLPLPEPSZALLTYLKCKQZKGENQLWAGYXYDPXLHSXQQWQCQXQCLHYXXMLYCCWLYMQYSKGCHLCJNSZKPYZKCQZQLJPDMDZHLASXLBYDWQLWDNBQCRYDDZTJYBKBWSZDXDTNPJDTCTQDFXQQMGNXECLTTBKPWSLCTYQLPWYZZKLPYGZCQQPLLKCCYLPQMZCZQCLJSLQZDJXLDDHPZQDLJJXZQDXYZQKZLJCYQDYJPPYPQYKJYRMPCBYMCXKLLZLLFQPYLLLMBSGLCYSSLRSYSQTMXYXZQZFDZUYSYZTFFMZZSMZQHZSSCCMLYXWTPZGXZJGZGSJSGKDDHTQGGZLLBJDZLCBCHYXYZHZFYWXYZYMSDBZZYJGTSMTFXQYXQSTDGSLNXDLRYZZLRYYLXQHTXSRTZNGZXBNQQZFMYKMZJBZYMKBPNLYZPBLMCNQYZZZSJZHJCTZKHYZZJRDYZHNPXGLFZTLKGJTCTSSYLLGZRZBBQZZKLPKLCZYSSUYXBJFPNJZZXCDWXZYJXZZDJJKGGRSRJKMSMZJLSJYWQSKYHQJSXPJZZZLSNSHRNYPZTWCHKLPSRZLZXYJQXQKYSJYCZTLQZYBBYBWZPQDWWYZCYTJCJXCKCWDKKZXSGKDZXWWYYJQYYTCYTDLLXWKCZKKLCCLZCQQDZLQLCSFQCHQHSFSMQZZLNBJJZBSJHTSZDYSJQJPDLZCDCWJKJZZLPYCGMZWDJJBSJQZSYZYHHXJPBJYDSSXDZNCGLQMBTSFSBPDZDLZNFGFJGFSMPXJQLMBLGQCYYXBQKDJJQYRFKZTJDHCZKLBSDZCFJTPLLJGXHYXZCSSZZXSTJYGKGCKGYOQXJPLZPBPGTGYJZGHZQZZLBJLSQFZGKQQJZGYCZBZQTLDXRJXBSXXPZXHYZYCLWDXJJHXMFDZPFZHQHQMQGKSLYHTYCGFRZGNQXCLPDLBZCSCZQLLJBLHBZCYPZZPPDYMZZSGYHCKCPZJGSLJLNSCDSLDLXBMSTLDDFJMKDJDHZLZXLSZQPQPGJLLYBDSZGQLBZLSLKYYHZTTNTJYQTZZPSZQZTLLJTYYLLQLLQYZQLBDZLSLYYZYMDFSZSNHLXZNCZQZPBWSKRFBSYZMTHBLGJPMCZZLSTLXSHTCSYZLZBLFEQHLXFLCJLYLJQCBZLZJHHSSTBRMHXZHJZCLXFNBGXGTQJCZTMSFZKJMSSNXLJKBHSJXNTNLZDNTLMSJXGZJYJCZXYJYJWRWWQNZTNFJSZPZSHZJFYRDJSFSZJZBJFZQZZHZLXFYSBZQLZSGYFTZDCSZXZJBQMSZKJRHYJZCKMJKHCHGTXKXQGLXPXFXTRTYLXJXHDTSJXHJZJXZWZLCQSBTXWXGXTXXHXFTSDKFJHZYJFJXRZSDLLLTQSQQZQWZXSYQTWGWBZCGZLLYZBCLMQQTZHZXZXLJFRMYZFLXYSQXXJKXRMQDZDMMYYBSQBHGZMWFWXGMXLZPYYTGZYCCDXYZXYWGSYJYZNBHPZJSQSYXSXRTFYZGRHZTXSZZTHCBFCLSYXZLZQMZLMPLMXZJXSFLBYZMYQHXJSXRXSQZZZSSLYFRCZJRCRXHHZXQYDYHXSJJHZCXZBTYNSYSXJBQLPXZQPYMLXZKYXLXCJLCYSXXZZLXDLLLJJYHZXGYJWKJRWYHCPSGNRZLFZWFZZNSXGXFLZSXZZZBFCSYJDBRJKRDHHGXJLJJTGXJXXSTJTJXLYXQFCSGSWMSBCTLQZZWLZZKXJMLTMJYHSDDBXGZHDLBMYJFRZFSGCLYJBPMLYSMSXLSZJQQHJZFXGFQFQBPXZGYYQXGZTCQWYLTLGWSGWHRLFSFGZJMGMGBGTJFSYZZGZYZAFLSSPMLPFLCWBJZCLJJMZLPJJLYMQDMYYYFBGYGYZMLYZDXQYXRQQQHSYYYQXYLJTYXFSFSLLGNQCYHYCWFHCCCFXPYLYPLLZYXXXXXKQHHXSHJZCFZSCZJXCPZWHHHHHAPYLQALPQAFYHXDYLUKMZQGGGDDESRNNZLTZGCHYPPYSQJJHCLLJTOLNJPZLJLHYMHEYDYDSQYCDDHGZUNDZCLZYZLLZNTNYZGSLHSLPJJBDGWXPCDUTJCKLKCLWKLLCASSTKZZDNQNTTLYYZSSYSSZZRYLJQKCQDHHCRXRZYDGRGCWCGZQFFFPPJFZYNAKRGYWYQPQXXFKJTSZZXSWZDDFBBXTBGTZKZNPZZPZXZPJSZBMQHKCYXYLDKLJNYPKYGHGDZJXXEAHPNZKZTZCMXCXMMJXNKSZQNMNLWBWWXJKYHCPSTMCSQTZJYXTPCTPDTNNPGLLLZSJLSPBLPLQHDTNJNLYYRSZFFJFQWDPHZDWMRZCCLODAXNSSNYZRESTYJWJYJDBCFXNMWTTBYLWSTSZGYBLJPXGLBOCLHPCBJLTMXZLJYLZXCLTPNCLCKXTPZJSWCYXSFYSZDKNTLBYJCYJLLSTGQCBXRYZXBXKLYLHZLQZLNZCXWJZLJZJNCJHXMNZZGJZZXTZJXYCYYCXXJYYXJJXSSSJSTSSTTPPGQTCSXWZDCSYFPTFBFHFBBLZJCLZZDBXGCXLQPXKFZFLSYLTUWBMQJHSZBMDDBCYSCCLDXYCDDQLYJJWMQLLCSGLJJSYFPYYCCYLTJANTJJPWYCMMGQYYSXDXQMZHSZXPFTWWZQSWQRFKJLZJQQYFBRXJHHFWJJZYQAZMYFRHCYYBYQWLPEXCCZSTYRLTTDMQLYKMBBGMYYJPRKZNPBSXYXBHYZDJDNGHPMFSGMWFZMFQMMBCMZZCJJLCNUXYQLMLRYGQZCYXZLWJGCJCGGMCJNFYZZJHYCPRRCMTZQZXHFQGTJXCCJEAQCRJYHPLQLSZDJRBCQHQDYRHYLYXJSYMHZYDWLDFRYHBPYDTSSCNWBXGLPZMLZZTQSSCPJMXXYCSJYTYCGHYCJWYRXXLFEMWJNMKLLSWTXHYYYNCMMCWJDQDJZGLLJWJRKHPZGGFLCCSCZMCBLTBHBQJXQDSPDJZZGKGLFQYWBZYZJLTSTDHQHCTCBCHFLQMPWDSHYYTQWCNZZJTLBYMBPDYYYXSQKXWYYFLXXNCWCXYPMAELYKKJMZZZBRXYYQJFLJPFHHHYTZZXSGQQMHSPGDZQWBWPJHZJDYSCQWZKTXXSQLZYYMYSDZGRXCKKUJLWPYSYSCSYZLRMLQSYLJXBCXTLWDQZPCYCYKPPPNSXFYZJJRCEMHSZMSXLXGLRWGCSTLRSXBZGBZGZTCPLUJLSLYLYMTXMTZPALZXPXJTJWTCYYZLBLXBZLQMYLXPGHDSLSSDMXMBDZZSXWHAMLCZCPJMCNHJYSNSYGCHSKQMZZQDLLKABLWJXSFMOCDXJRRLYQZKJMYBYQLYHETFJZFRFKSRYXFJTWDSXXSYSQJYSLYXWJHSNLXYYXHBHAWHHJZXWMYLJCSSLKYDZTXBZSYFDXGXZJKHSXXYBSSXDPYNZWRPTQZCZENYGCXQFJYKJBZMLJCMQQXUOXSLYXXLYLLJDZBTYMHPFSTTQQWLHOKYBLZZALZXQLHZWRRQHLSTMYPYXJJXMQSJFNBXYXYJXXYQYLTHYLQYFMLKLJTMLLHSZWKZHLJMLHLJKLJSTLQXYLMBHHLNLZXQJHXCFXXLHYHJJGBYZZKBXSCQDJQDSUJZYYHZHHMGSXCSYMXFEBCQWWRBPYYJQTYZCYQYQQZYHMWFFHGZFRJFCDPXNTQYZPDYKHJLFRZXPPXZDBBGZQSTLGDGYLCQMLCHHMFYWLZYXKJLYPQHSYWMQQGQZMLZJNSQXJQSYJYCBEHSXFSZPXZWFLLBCYYJDYTDTHWZSFJMQQYJLMQXXLLDTTKHHYBFPWTYYSQQWNQWLGWDEBZWCMYGCULKJXTMXMYJSXHYBRWFYMWFRXYQMXYSZTZZTFYKMLDHQDXWYYNLCRYJBLPSXCXYWLSPRRJWXHQYPHTYDNXHHMMYWYTZCSQMTSSCCDALWZTCPQPYJLLQZYJSWXMZZMMYLMXCLMXCZMXMZSQTZPPQQBLPGXQZHFLJJHYTJSRXWZXSCCDLXTYJDCQJXSLQYCLZXLZZXMXQRJMHRHZJBHMFLJLMLCLQNLDXZLLLPYPSYJYSXCQQDCMQJZZXHNPNXZMEKMXHYKYQLXSXTXJYYHWDCWDZHQYYBGYBCYSCFGPSJNZDYZZJZXRZRQJJYMCANYRJTLDPPYZBSTJKXXZYPFDWFGZZRPYMTNGXZQBYXNBUFNQKRJQZMJEGRZGYCLKXZDSKKNSXKCLJSPJYYZLQQJYBZSSQLLLKJXTBKTYLCCDDBLSPPFYLGYDTZJYQGGKQTTFZXBDKTYYHYBBFYTYYBCLPDYTGDHRYRNJSPTCSNYJQHKLLLZSLYDXXWBCJQSPXBPJZJCJDZFFXXBRMLAZHCSNDLBJDSZBLPRZTSWSBXBCLLXXLZDJZSJPYLYXXYFTFFFBHJJXGBYXJPMMMPSSJZJMTLYZJXSWXTYLEDQPJMYGQZJGDJLQJWJQLLSJGJGYGMSCLJJXDTYGJQJQJCJZCJGDZZSXQGSJGGCXHQXSNQLZZBXHSGZXCXYLJXYXYYDFQQJHJFXDHCTXJYRXYSQTJXYEFYYSSYYJXNCYZXFXMSYSZXYYSCHSHXZZZGZZZGFJDLTYLNPZGYJYZYYQZPBXQBDZTZCZYXXYHHSQXSHDHGQHJHGYWSZTMZMLHYXGEBTYLZKQWYTJZRCLEKYSTDBCYKQQSAYXCJXWWGSBHJYZYDHCSJKQCXSWXFLTYNYZPZCCZJQTZWJQDZZZQZLJJXLSBHPYXXPSXSHHEZTXFPTLQYZZXHYTXNCFZYYHXGNXMYWXTZSJPTHHGYMXMXQZXTSBCZYJYXXTYYZYPCQLMMSZMJZZLLZXGXZAAJZYXJMZXWDXZSXZDZXLEYJJZQBHZWZZZQTZPSXZTDSXJJJZNYAZPHXYYSRNQDTHZHYYKYJHDZXZLSWCLYBZYECWCYCRYLCXNHZYDZYDYJDFRJJHTRSQTXYXJRJHOJYNXELXSFSFJZGHPZSXZSZDZCQZBYYKLSGSJHCZSHDGQGXYZGXCHXZJWYQWGYHKSSEQZZNDZFKWYSSTCLZSTSYMCDHJXXYWEYXCZAYDMPXMDSXYBSQMJMZJMTZQLPJYQZCGQHXJHHLXXHLHDLDJQCLDWBSXFZZYYSCHTYTYYBHECXHYKGJPXHHYZJFXHWHBDZFYZBCAPNPGNYDMSXHMMMMAMYNBYJTMPXYYMCTHJBZYFCGTYHWPHFTWZZEZSBZEGPFMTSKFTYCMHFLLHGPZJXZJGZJYXZSBBQSCZZLZCCSTPGXMJSFTCCZJZDJXCYBZLFCJSYZFGSZLYBCWZZBYZDZYPSWYJZXZBDSYUXLZZBZFYGCZXBZHZFTPBGZGEJBSTGKDMFHYZZJHZLLZZGJQZLSFDJSSCBZGPDLFZFZSZYZYZSYGCXSNXXCHCZXTZZLJFZGQSQYXZJQDCCZTQCDXZJYQJQCHXZTDLGSCXZSYQJQTZWLQDQZTQCHQQJZYEZZZPBWKDJFCJPZTYPQYQTTYNLMBDKTJZPQZQZZFPZSBNJLGYJDXJDZZKZGQKXDLPZJTCJDQBXDJQJSTCKNXBXZMSLYJCQMTJQWWCJQNJNLLLHJCWQTBZQYDZCZPZZDZYDDCYZZZCCJTTJFZDPRRTZTJDCQTQZDTJNPLZBCLLCTZSXKJZQZPZLBZRBTJDCXFCZDBCCJJLTQQPLDCGZDBBZJCQDCJWYNLLZYZCCDWLLXWZLXRXNTQQCZXKQLSGDFQTDDGLRLAJJTKUYMKQLLTZYTDYYCZGJWYXDXFRSKSTQTENQMRKQZHHQKDLDAZFKYPBGGPZREBZZYKZZSPEGJXGYKQZZZSLYSYYYZWFQZYLZZLZHWCHKYPQGNPGBLPLRRJYXCCSYYHSFZFYBZYYTGZXYLXCZWXXZJZBLFFLGSKHYJZEYJHLPLLLLCZGXDRZELRHGKLZZYHZLYQSZZJZQLJZFLNBHGWLCZCFJYSPYXZLZLXGCCPZBLLCYBBBBUBBCBPCRNNZCZYRBFSRLDCGQYYQXYGMQZWTZYTYJXYFWTEHZZJYWLCCNTZYJJZDEDPZDZTSYQJHDYMBJNYJZLXTSSTPHNDJXXBYXQTZQDDTJTDYYTGWSCSZQFLSHLGLBCZPHDLYZJYCKWTYTYLBNYTSDSYCCTYSZYYEBHEXHQDTWNYGYCLXTSZYSTQMYGZAZCCSZZDSLZCLZRQXYYELJSBYMXSXZTEMBBLLYYLLYTDQYSHYMRQWKFKBFXNXSBYCHXBWJYHTQBPBSBWDZYLKGZSKYHXQZJXHXJXGNLJKZLYYCDXLFYFGHLJGJYBXQLYBXQPQGZTZPLNCYPXDJYQYDYMRBESJYYHKXXSTMXRCZZYWXYQYBMCLLYZHQYZWQXDBXBZWZMSLPDMYSKFMZKLZCYQYCZLQXFZZYDQZPZYGYJYZMZXDZFYFYTTQTZHGSPCZMLCCYTZXJCYTJMKSLPZHYSNZLLYTPZCTZZCKTXDHXXTQCYFKSMQCCYYAZHTJPCYLZLYJBJXTPNYLJYYNRXSYLMMNXJSMYBCSYSYLZYLXJJQYLDZLPQBFZZBLFNDXQKCZFYWHGQMRDSXYCYTXNQQJZYYPFZXDYZFPRXEJDGYQBXRCNFYYQPGHYJDYZXGRHTKYLNWDZNTSMPKLBTHBPYSZBZTJZSZZJTYYXZPHSSZZBZCZPTQFZMYFLYPYBBJQXZMXXDJMTSYSKKBJZXHJCKLPSMKYJZCXTMLJYXRZZQSLXXQPYZXMKYXXXJCLJPRMYYGADYSKQLSNDHYZKQXZYZTCGHZTLMLWZYBWSYCTBHJHJFCWZTXWYTKZLXQSHLYJZJXTMPLPYCGLTBZZTLZJCYJGDTCLKLPLLQPJMZPAPXYZLKKTKDZCZZBNZDYDYQZJYJGMCTXLTGXSZLMLHBGLKFWNWZHDXUHLFMKYSLGXDTWWFRJEJZTZHYDXYKSHWFZCQSHKTMQQHTZHYMJDJSKHXZJZBZZXYMPAGQMSTPXLSKLZYNWRTSQLSZBPSPSGZWYHTLKSSSWHZZLYYTNXJGMJSZSUFWNLSOZTXGXLSAMMLBWLDSZYLAKQCQCTMYCFJBSLXCLZZCLXXKSBZQCLHJPSQPLSXXCKSLNHPSFQQYTXYJZLQLDXZQJZDYYDJNZPTUZDSKJFSLJHYLZSQZLBTXYDGTQFDBYAZXDZHZJNHHQBYKNXJJQCZMLLJZKSPLDYCLBBLXKLELXJLBQYCXJXGCNLCQPLZLZYJTZLJGYZDZPLTQCSXFDMNYCXGBTJDCZNBGBQYQJWGKFHTNPYQZQGBKPBBYZMTJDYTBLSQMPSXTBNPDXKLEMYYCJYNZCTLDYKZZXDDXHQSHDGMZSJYCCTAYRZLPYLTLKXSLZCGGEXCLFXLKJRTLQJAQZNCMBYDKKCXGLCZJZXJHPTDJJMZQYKQSECQZDSHHADMLZFMMZBGNTJNNLGBYJBRBTMLBYJDZXLCJLPLDLPCQDHLXZLYCBLCXZZJADJLNZMMSSSMYBHBSQKBHRSXXJMXSDZNZPXLGBRHWGGFCXGMSKLLTSJYYCQLTSKYWYYHYWXBXQYWPYWYKQLSQPTNTKHQCWDQKTWPXXHCPTHTWUMSSYHBWCRWXHJMKMZNGWTMLKFGHKJYLSYYCXWHYECLQHKQHTTQKHFZLDXQWYZYYDESBPKYRZPJFYYZJCEQDZZDLATZBBFJLLCXDLMJSSXEGYGSJQXCWBXSSZPDYZCXDNYXPPZYDLYJCZPLTXLSXYZYRXCYYYDYLWWNZSAHJSYQYHGYWWAXTJZDAXYSRLTDPSSYYFNEJDXYZHLXLLLZQZSJNYQYQQXYJGHZGZCYJCHZLYCDSHWSHJZYJXCLLNXZJJYYXNFXMWFPYLCYLLABWDDHWDXJMCXZTZPMLQZHSFHZYNZTLLDYWLSLXHYMMYLMBWWKYXYADTXYLLDJPYBPWUXJMWMLLSAFDLLYFLBHHHBQQLTZJCQJLDJTFFKMMMBYTHYGDCQRDDWRQJXNBYSNWZDBYYTBJHPYBYTTJXAAHGQDQTMYSTQXKBTZPKJLZRBEQQSSMJJBDJOTGTBXPGBKTLHQXJJJCTHXQDWJLWRFWQGWSHCKRYSWGFTGYGBXSDWDWRFHWYTJJXXXJYZYSLPYYYPAYXHYDQKXSHXYXGSKQHYWFDDDPPLCJLQQEEWXKSYYKDYPLTJTHKJLTCYYHHJTTPLTZZCDLTHQKZXQYSTEEYWYYZYXXYYSTTJKLLPZMCYHQGXYHSRMBXPLLNQYDQHXSXXWGDQBSHYLLPJJJTHYJKYPPTHYYKTYEZYENMDSHLCRPQFDGFXZPSFTLJXXJBSWYYSKSFLXLPPLBBBLBSFXFYZBSJSSYLPBBFFFFSSCJDSTZSXZRYYSYFFSYZYZBJTBCTSBSDHRTJJBYTCXYJEYLXCBNEBJDSYXYKGSJZBXBYTFZWGENYHHTHZHHXFWGCSTBGXKLSXYWMTMBYXJSTZSCDYQRCYTWXZFHMYMCXLZNSDJTTTXRYCFYJSBSDYERXJLJXBBDEYNJGHXGCKGSCYMBLXJMSZNSKGXFBNBPTHFJAAFXYXFPXMYPQDTZCXZZPXRSYWZDLYBBKTYQPQJPZYPZJZNJPZJLZZFYSBTTSLMPTZRTDXQSJEHBZYLZDHLJSQMLHTXTJECXSLZZSPKTLZKQQYFSYGYWPCPQFHQHYTQXZKRSGTTSQCZLPTXCDYYZXSQZSLXLZMYCPCQBZYXHBSXLZDLTCDXTYLZJYYZPZYZLTXJSJXHLPMYTXCQRBLZSSFJZZTNJYTXMYJHLHPPLCYXQJQQKZZSCPZKSWALQSBLCCZJSXGWWWYGYKTJBBZTDKHXHKGTGPBKQYSLPXPJCKBMLLXDZSTBKLGGQKQLSBKKTFXRMDKBFTPZFRTBBRFERQGXYJPZSSTLBZTPSZQZSJDHLJQLZBPMSMMSXLQQNHKNBLRDDNXXDHDDJCYYGYLXGZLXSYGMQQGKHBPMXYXLYTQWLWGCPBMQXCYZYDRJBHTDJYHQSHTMJSBYPLWHLZFFNYPMHXXHPLTBQPFBJWQDBYGPNZTPFZJGSDDTQSHZEAWZZYLLTYYBWJKXXGHLFKXDJTMSZSQYNZGGSWQSPHTLSSKMCLZXYSZQZXNCJDQGZDLFNYKLJCJLLZLMZZNHYDSSHTHZZLZZBBHQZWWYCRZHLYQQJBEYFXXXWHSRXWQHWPSLMSSKZTTYGYQQWRSLALHMJTQJSMXQBJJZJXZYZKXBYQXBJXSHZTSFJLXMXZXFGHKZSZGGYLCLSARJYHSLLLMZXELGLXYDJYTLFBHBPNLYZFBBHPTGJKWETZHKJJXZXXGLLJLSTGSHJJYQLQZFKCGNNDJSSZFDBCTWWSEQFHQJBSAQTGYPQLBXBMMYWXGSLZHGLZGQYFLZBYFZJFRYSFMBYZHQGFWZSYFYJJPHZBYYZFFWODGRLMFTWLBZGYCQXCDJYGZYYYYTYTYDWEGAZYHXJLZYYHLRMGRXXZCLHNELJJTJTPWJYBJJBXJJTJTEEKHWSLJPLPSFYZPQQBDLQJJTYYQLYZKDKSQJYYQZLDQTGJQYZJSUCMRYQTHTEJMFCTYHYPKMHYZWJDQFHYYXWSHCTXRLJHQXHCCYYYJLTKTTYTMXGTCJTZAYYOCZLYLBSZYWJYTSJYHBYSHFJLYGJXXTMZYYLTXXYPZLXYJZYZYYPNHMYMDYYLBLHLSYYQQLLNJJYMSOYQBZGDLYXYLCQYXTSZEGXHZGLHWBLJHEYXTWQMAKBPQCGYSHHEGQCMWYYWLJYJHYYZLLJJYLHZYHMGSLJLJXCJJYCLYCJPCPZJZJMMYLCQLNQLJQJSXYJMLSZLJQLYCMMHCFMMFPQQMFYLQMCFFQMMMMHMZNFHHJGTTHHKHSLNCHHYQDXTMMQDCYZYXYQMYQYLTDCYYYZAZZCYMZYDLZFFFMMYCQZWZZMABTBYZTDMNZZGGDFTYPCGQYTTSSFFWFDTZQSSYSTWXJHXYTSXXYLBYQHWWKXHZXWZNNZZJZJJQJCCCHYYXBZXZCYZTLLCQXYNJYCYYCYNZZQYYYEWYCZDCJYCCHYJLBTZYYCQWMPWPYMLGKDLDLGKQQBGYCHJXY";
      this.full_dict = {
        "a": "\u554A\u963F\u9515",
        "ai": "\u57C3\u6328\u54CE\u5509\u54C0\u7691\u764C\u853C\u77EE\u827E\u788D\u7231\u9698\u8BF6\u6371\u55F3\u55CC\u5AD2\u7477\u66A7\u7839\u953F\u972D",
        "an": "\u978D\u6C28\u5B89\u4FFA\u6309\u6697\u5CB8\u80FA\u6848\u8C19\u57EF\u63DE\u72B4\u5EB5\u6849\u94F5\u9E4C\u9878\u9EEF",
        "ang": "\u80AE\u6602\u76CE",
        "ao": "\u51F9\u6556\u71AC\u7FF1\u8884\u50B2\u5965\u61CA\u6FB3\u5773\u62D7\u55F7\u5662\u5C99\u5ED2\u9068\u5AAA\u9A9C\u8071\u87AF\u93CA\u9CCC\u93D6",
        "ba": "\u82AD\u634C\u6252\u53ED\u5427\u7B06\u516B\u75A4\u5DF4\u62D4\u8DCB\u9776\u628A\u8019\u575D\u9738\u7F62\u7238\u8307\u83DD\u8406\u636D\u5C9C\u705E\u6777\u94AF\u7C91\u9C85\u9B43",
        "bai": "\u767D\u67CF\u767E\u6446\u4F70\u8D25\u62DC\u7A17\u859C\u63B0\u97B4",
        "ban": "\u6591\u73ED\u642C\u6273\u822C\u9881\u677F\u7248\u626E\u62CC\u4F34\u74E3\u534A\u529E\u7ECA\u962A\u5742\u8C73\u94A3\u7622\u764D\u8228",
        "bang": "\u90A6\u5E2E\u6886\u699C\u8180\u7ED1\u68D2\u78C5\u868C\u9551\u508D\u8C24\u84A1\u8783",
        "bao": "\u82DE\u80DE\u5305\u8912\u96F9\u4FDD\u5821\u9971\u5B9D\u62B1\u62A5\u66B4\u8C79\u9C8D\u7206\u52F9\u8446\u5B80\u5B62\u7172\u9E28\u8913\u8DB5\u9F85",
        "bo": "\u5265\u8584\u73BB\u83E0\u64AD\u62E8\u94B5\u6CE2\u535A\u52C3\u640F\u94C2\u7B94\u4F2F\u5E1B\u8236\u8116\u818A\u6E24\u6CCA\u9A73\u4EB3\u8543\u5575\u997D\u6A97\u64D8\u7934\u94B9\u9E41\u7C38\u8DDB",
        "bei": "\u676F\u7891\u60B2\u5351\u5317\u8F88\u80CC\u8D1D\u94A1\u500D\u72C8\u5907\u60EB\u7119\u88AB\u5B5B\u9642\u90B6\u57E4\u84D3\u5457\u602B\u6096\u789A\u9E4E\u8919\u943E",
        "ben": "\u5954\u82EF\u672C\u7B28\u755A\u574C\u951B",
        "beng": "\u5D29\u7EF7\u752D\u6CF5\u8E66\u8FF8\u552A\u5623\u750F",
        "bi": "\u903C\u9F3B\u6BD4\u9119\u7B14\u5F7C\u78A7\u84D6\u853D\u6BD5\u6BD9\u6BD6\u5E01\u5E87\u75F9\u95ED\u655D\u5F0A\u5FC5\u8F9F\u58C1\u81C2\u907F\u965B\u5315\u4EF3\u4FFE\u8298\u835C\u8378\u5421\u54D4\u72F4\u5EB3\u610E\u6ED7\u6FDE\u5F3C\u59A3\u5A62\u5B16\u74A7\u8D32\u7540\u94CB\u79D5\u88E8\u7B5A\u7B85\u7BE6\u822D\u895E\u8DF8\u9AC0",
        "bian": "\u97AD\u8FB9\u7F16\u8D2C\u6241\u4FBF\u53D8\u535E\u8FA8\u8FA9\u8FAB\u904D\u533E\u5F01\u82C4\u5FED\u6C74\u7F0F\u7178\u782D\u78A5\u7A39\u7A86\u8759\u7B3E\u9CCA",
        "biao": "\u6807\u5F6A\u8198\u8868\u5A4A\u9AA0\u98D1\u98D9\u98DA\u706C\u9556\u9573\u762D\u88F1\u9CD4",
        "bie": "\u9CD6\u618B\u522B\u762A\u8E69\u9CD8",
        "bin": "\u5F6C\u658C\u6FD2\u6EE8\u5BBE\u6448\u50A7\u6D5C\u7F24\u73A2\u6BA1\u8191\u9554\u9ACC\u9B13",
        "bing": "\u5175\u51B0\u67C4\u4E19\u79C9\u997C\u70B3\u75C5\u5E76\u7980\u90B4\u6452\u7EE0\u678B\u69DF\u71F9",
        "bu": "\u6355\u535C\u54FA\u8865\u57E0\u4E0D\u5E03\u6B65\u7C3F\u90E8\u6016\u62CA\u535F\u900B\u74FF\u6661\u949A\u91AD",
        "ca": "\u64E6\u5693\u7924",
        "cai": "\u731C\u88C1\u6750\u624D\u8D22\u776C\u8E29\u91C7\u5F69\u83DC\u8521",
        "can": "\u9910\u53C2\u8695\u6B8B\u60ED\u60E8\u707F\u9A96\u74A8\u7CB2\u9EEA",
        "cang": "\u82CD\u8231\u4ED3\u6CA7\u85CF\u4F27",
        "cao": "\u64CD\u7CD9\u69FD\u66F9\u8349\u8279\u5608\u6F15\u87AC\u825A",
        "ce": "\u5395\u7B56\u4FA7\u518C\u6D4B\u5202\u5E3B\u607B",
        "ceng": "\u5C42\u8E6D\u564C",
        "cha": "\u63D2\u53C9\u832C\u8336\u67E5\u78B4\u643D\u5BDF\u5C94\u5DEE\u8BE7\u7339\u9987\u6C4A\u59F9\u6748\u6942\u69CE\u6AAB\u9497\u9538\u9572\u8869",
        "chai": "\u62C6\u67F4\u8C7A\u4FAA\u8308\u7625\u867F\u9F87",
        "chan": "\u6400\u63BA\u8749\u998B\u8C17\u7F20\u94F2\u4EA7\u9610\u98A4\u5181\u8C04\u8C36\u8487\u5EDB\u5FCF\u6F7A\u6FB6\u5B71\u7FBC\u5A75\u5B17\u9AA3\u89C7\u7985\u9561\u88E3\u87FE\u8E94",
        "chang": "\u660C\u7316\u573A\u5C1D\u5E38\u957F\u507F\u80A0\u5382\u655E\u7545\u5531\u5021\u4F25\u9B2F\u82CC\u83D6\u5F9C\u6005\u60DD\u960A\u5A3C\u5AE6\u6636\u6C05\u9CB3",
        "chao": "\u8D85\u6284\u949E\u671D\u5632\u6F6E\u5DE2\u5435\u7092\u600A\u7EC9\u6641\u8016",
        "che": "\u8F66\u626F\u64A4\u63A3\u5F7B\u6F88\u577C\u5C6E\u7817",
        "chen": "\u90F4\u81E3\u8FB0\u5C18\u6668\u5FF1\u6C89\u9648\u8D81\u886C\u79F0\u8C0C\u62BB\u55D4\u5BB8\u741B\u6987\u809C\u80C2\u789C\u9F80",
        "cheng": "\u6491\u57CE\u6A59\u6210\u5448\u4E58\u7A0B\u60E9\u6F84\u8BDA\u627F\u901E\u9A8B\u79E4\u57D5\u5D4A\u5FB5\u6D48\u67A8\u67FD\u6A18\u665F\u584D\u77A0\u94D6\u88CE\u86CF\u9172",
        "chi": "\u5403\u75F4\u6301\u5319\u6C60\u8FDF\u5F1B\u9A70\u803B\u9F7F\u4F88\u5C3A\u8D64\u7FC5\u65A5\u70BD\u50BA\u5880\u82AA\u830C\u640B\u53F1\u54E7\u557B\u55E4\u5F73\u996C\u6CB2\u5AB8\u6555\u80DD\u7719\u7735\u9E31\u761B\u892B\u86A9\u87AD\u7B1E\u7BEA\u8C49\u8E05\u8E1F\u9B51",
        "chong": "\u5145\u51B2\u866B\u5D07\u5BA0\u833A\u5FE1\u61A7\u94F3\u825F",
        "chou": "\u62BD\u916C\u7574\u8E0C\u7A20\u6101\u7B79\u4EC7\u7EF8\u7785\u4E11\u4FE6\u5733\u5E31\u60C6\u6EB4\u59AF\u7633\u96E0\u9C8B",
        "chu": "\u81ED\u521D\u51FA\u6A71\u53A8\u8E87\u9504\u96CF\u6EC1\u9664\u695A\u7840\u50A8\u77D7\u6410\u89E6\u5904\u4E8D\u520D\u61B7\u7ECC\u6775\u696E\u6A17\u870D\u8E70\u9EDC",
        "chuan": "\u63E3\u5DDD\u7A7F\u693D\u4F20\u8239\u5598\u4E32\u63BE\u821B\u60F4\u9044\u5DDB\u6C1A\u948F\u9569\u8221",
        "chuang": "\u75AE\u7A97\u5E62\u5E8A\u95EF\u521B\u6006",
        "chui": "\u5439\u708A\u6376\u9524\u5782\u9672\u68F0\u69CC",
        "chun": "\u6625\u693F\u9187\u5507\u6DF3\u7EAF\u8822\u4FC3\u83BC\u6C8C\u80AB\u6710\u9E51\u877D",
        "chuo": "\u6233\u7EF0\u851F\u8FB6\u8F8D\u955E\u8E14\u9F8A",
        "ci": "\u75B5\u8328\u78C1\u96CC\u8F9E\u6148\u74F7\u8BCD\u6B64\u523A\u8D50\u6B21\u8360\u5472\u5D6F\u9E5A\u8785\u7CCD\u8D91",
        "cong": "\u806A\u8471\u56F1\u5306\u4ECE\u4E1B\u506C\u82C1\u6DD9\u9AA2\u742E\u7481\u679E",
        "cu": "\u51D1\u7C97\u918B\u7C07\u731D\u6B82\u8E59",
        "cuan": "\u8E7F\u7BE1\u7A9C\u6C46\u64BA\u6615\u7228",
        "cui": "\u6467\u5D14\u50AC\u8106\u7601\u7CB9\u6DEC\u7FE0\u8403\u60B4\u7480\u69B1\u96B9",
        "cun": "\u6751\u5B58\u5BF8\u78CB\u5FD6\u76B4",
        "cuo": "\u64AE\u6413\u63AA\u632B\u9519\u539D\u811E\u9509\u77EC\u75E4\u9E7E\u8E49\u8E9C",
        "da": "\u642D\u8FBE\u7B54\u7629\u6253\u5927\u8037\u54D2\u55D2\u601B\u59B2\u75B8\u8921\u7B2A\u977C\u9791",
        "dai": "\u5446\u6B79\u50A3\u6234\u5E26\u6B86\u4EE3\u8D37\u888B\u5F85\u902E\u6020\u57ED\u7519\u5454\u5CB1\u8FE8\u902F\u9A80\u7ED0\u73B3\u9EDB",
        "dan": "\u803D\u62C5\u4E39\u5355\u90F8\u63B8\u80C6\u65E6\u6C2E\u4F46\u60EE\u6DE1\u8BDE\u5F39\u86CB\u4EBB\u510B\u5369\u840F\u5556\u6FB9\u6A90\u6B9A\u8D55\u7708\u7605\u8043\u7BAA",
        "dang": "\u5F53\u6321\u515A\u8361\u6863\u8C20\u51FC\u83EA\u5B95\u7800\u94DB\u88C6",
        "dao": "\u5200\u6363\u8E48\u5012\u5C9B\u7977\u5BFC\u5230\u7A3B\u60BC\u9053\u76D7\u53E8\u5541\u5FC9\u6D2E\u6C18\u7118\u5FD1\u7E9B",
        "de": "\u5FB7\u5F97\u7684\u951D",
        "deng": "\u8E6C\u706F\u767B\u7B49\u77AA\u51F3\u9093\u5654\u5D9D\u6225\u78F4\u956B\u7C26",
        "di": "\u5824\u4F4E\u6EF4\u8FEA\u654C\u7B1B\u72C4\u6DA4\u7FDF\u5AE1\u62B5\u5E95\u5730\u8482\u7B2C\u5E1D\u5F1F\u9012\u7F14\u6C10\u7C74\u8BCB\u8C1B\u90B8\u577B\u839C\u837B\u5600\u5A23\u67E2\u68E3\u89CC\u7825\u78B2\u7747\u955D\u7F9D\u9AB6",
        "dian": "\u98A0\u6382\u6EC7\u7898\u70B9\u5178\u975B\u57AB\u7535\u4F43\u7538\u5E97\u60E6\u5960\u6DC0\u6BBF\u4E36\u963D\u576B\u57DD\u5DC5\u73B7\u765C\u766B\u7C1F\u8E2E",
        "diao": "\u7889\u53FC\u96D5\u51CB\u5201\u6389\u540A\u9493\u8C03\u8F7A\u94DE\u8729\u7C9C\u8C82",
        "die": "\u8DCC\u7239\u789F\u8776\u8FED\u8C0D\u53E0\u4F5A\u57A4\u581E\u63F2\u558B\u6E2B\u8F76\u7252\u74DE\u8936\u800B\u8E40\u9CBD\u9CCE",
        "ding": "\u4E01\u76EF\u53EE\u9489\u9876\u9F0E\u952D\u5B9A\u8BA2\u4E22\u4EC3\u5576\u738E\u815A\u7887\u753A\u94E4\u7594\u8035\u914A",
        "dong": "\u4E1C\u51AC\u8463\u61C2\u52A8\u680B\u4F97\u606B\u51BB\u6D1E\u578C\u549A\u5CBD\u5CD2\u5902\u6C21\u80E8\u80F4\u7850\u9E2B",
        "dou": "\u515C\u6296\u6597\u9661\u8C46\u9017\u75D8\u8538\u94AD\u7AA6\u7AAC\u86AA\u7BFC\u9161",
        "du": "\u90FD\u7763\u6BD2\u728A\u72EC\u8BFB\u5835\u7779\u8D4C\u675C\u9540\u809A\u5EA6\u6E21\u5992\u828F\u561F\u6E0E\u691F\u6A50\u724D\u8839\u7B03\u9AD1\u9EE9",
        "duan": "\u7AEF\u77ED\u953B\u6BB5\u65AD\u7F0E\u5F56\u6934\u7145\u7C16",
        "dui": "\u5806\u5151\u961F\u5BF9\u603C\u619D\u7893",
        "dun": "\u58A9\u5428\u8E72\u6566\u987F\u56E4\u949D\u76FE\u9041\u7096\u7818\u7905\u76F9\u9566\u8DB8",
        "duo": "\u6387\u54C6\u591A\u593A\u579B\u8EB2\u6735\u8DFA\u8235\u5241\u60F0\u5815\u5484\u54DA\u7F0D\u67C1\u94CE\u88F0\u8E31",
        "e": "\u86FE\u5CE8\u9E45\u4FC4\u989D\u8BB9\u5A25\u6076\u5384\u627C\u904F\u9102\u997F\u5669\u8C14\u57A9\u57AD\u82CA\u83AA\u843C\u5443\u6115\u5C59\u5A40\u8F6D\u66F7\u816D\u786A\u9507\u9537\u9E57\u989A\u9CC4",
        "en": "\u6069\u84BD\u6441\u5514\u55EF",
        "er": "\u800C\u513F\u8033\u5C14\u9975\u6D31\u4E8C\u8D30\u8FE9\u73E5\u94D2\u9E38\u9C95",
        "fa": "\u53D1\u7F5A\u7B4F\u4F10\u4E4F\u9600\u6CD5\u73D0\u57A1\u781D",
        "fan": "\u85E9\u5E06\u756A\u7FFB\u6A0A\u77FE\u9492\u7E41\u51E1\u70E6\u53CD\u8FD4\u8303\u8D29\u72AF\u996D\u6CDB\u8629\u5E61\u72AD\u68B5\u6535\u71D4\u7548\u8E6F",
        "fang": "\u574A\u82B3\u65B9\u80AA\u623F\u9632\u59A8\u4EFF\u8BBF\u7EBA\u653E\u531A\u90A1\u5F77\u94AB\u822B\u9C82",
        "fei": "\u83F2\u975E\u5561\u98DE\u80A5\u532A\u8BFD\u5420\u80BA\u5E9F\u6CB8\u8D39\u82BE\u72D2\u60B1\u6DDD\u5983\u7ECB\u7EEF\u69A7\u8153\u6590\u6249\u7953\u7829\u9544\u75F1\u871A\u7BDA\u7FE1\u970F\u9CB1",
        "fen": "\u82AC\u915A\u5429\u6C1B\u5206\u7EB7\u575F\u711A\u6C7E\u7C89\u594B\u4EFD\u5FFF\u6124\u7CAA\u507E\u7035\u68FC\u610D\u9CBC\u9F22",
        "feng": "\u4E30\u5C01\u67AB\u8702\u5CF0\u950B\u98CE\u75AF\u70FD\u9022\u51AF\u7F1D\u8BBD\u5949\u51E4\u4FF8\u9146\u8451\u6CA3\u781C",
        "fu": "\u4F5B\u5426\u592B\u6577\u80A4\u5B75\u6276\u62C2\u8F90\u5E45\u6C1F\u7B26\u4F0F\u4FD8\u670D\u6D6E\u6DAA\u798F\u88B1\u5F17\u752B\u629A\u8F85\u4FEF\u91DC\u65A7\u812F\u8151\u5E9C\u8150\u8D74\u526F\u8986\u8D4B\u590D\u5085\u4ED8\u961C\u7236\u8179\u8D1F\u5BCC\u8BA3\u9644\u5987\u7F1A\u5490\u5310\u51EB\u90DB\u8299\u82FB\u832F\u83A9\u83D4\u544B\u5E5E\u6ECF\u8274\u5B5A\u9A78\u7EC2\u6874\u8D59\u9EFB\u9EFC\u7F58\u7A03\u99A5\u864D\u86A8\u8709\u8760\u876E\u9EB8\u8DBA\u8DD7\u9CC6",
        "ga": "\u5676\u560E\u86E4\u5C2C\u5477\u5C15\u5C1C\u65EE\u9486",
        "gai": "\u8BE5\u6539\u6982\u9499\u76D6\u6E89\u4E10\u9654\u5793\u6224\u8D45\u80F2",
        "gan": "\u5E72\u7518\u6746\u67D1\u7AFF\u809D\u8D76\u611F\u79C6\u6562\u8D63\u5769\u82F7\u5C34\u64C0\u6CD4\u6DE6\u6F89\u7EC0\u6A44\u65F0\u77F8\u75B3\u9150",
        "gang": "\u5188\u521A\u94A2\u7F38\u809B\u7EB2\u5C97\u6E2F\u6206\u7F61\u9883\u7B7B",
        "gong": "\u6760\u5DE5\u653B\u529F\u606D\u9F9A\u4F9B\u8EAC\u516C\u5BAB\u5F13\u5DE9\u6C5E\u62F1\u8D21\u5171\u857B\u5EFE\u54A3\u73D9\u80B1\u86A3\u86E9\u89E5",
        "gao": "\u7BD9\u768B\u9AD8\u818F\u7F94\u7CD5\u641E\u9550\u7A3F\u544A\u777E\u8BF0\u90DC\u84BF\u85C1\u7F1F\u69D4\u69C1\u6772\u9506",
        "ge": "\u54E5\u6B4C\u6401\u6208\u9E3D\u80F3\u7599\u5272\u9769\u845B\u683C\u9601\u9694\u94EC\u4E2A\u5404\u9B32\u4EE1\u54FF\u5865\u55DD\u7EA5\u643F\u8188\u784C\u94EA\u9549\u88BC\u988C\u867C\u8238\u9ABC\u9AC2",
        "gei": "\u7ED9",
        "gen": "\u6839\u8DDF\u4E98\u831B\u54CF\u826E",
        "geng": "\u8015\u66F4\u5E9A\u7FB9\u57C2\u803F\u6897\u54FD\u8D53\u9CA0",
        "gou": "\u94A9\u52FE\u6C9F\u82DF\u72D7\u57A2\u6784\u8D2D\u591F\u4F5D\u8BDF\u5CA3\u9058\u5ABE\u7F11\u89CF\u5F40\u9E32\u7B31\u7BDD\u97B2",
        "gu": "\u8F9C\u83C7\u5495\u7B8D\u4F30\u6CBD\u5B64\u59D1\u9F13\u53E4\u86CA\u9AA8\u8C37\u80A1\u6545\u987E\u56FA\u96C7\u560F\u8BC2\u83F0\u54CC\u5D2E\u6C69\u688F\u8F71\u726F\u727F\u80CD\u81CC\u6BC2\u77BD\u7F5F\u94B4\u9522\u74E0\u9E2A\u9E44\u75FC\u86C4\u9164\u89DA\u9CB4\u9AB0\u9E58",
        "gua": "\u522E\u74DC\u5250\u5BE1\u6302\u8902\u5366\u8BD6\u5471\u681D\u9E39",
        "guai": "\u4E56\u62D0\u602A\u54D9",
        "guan": "\u68FA\u5173\u5B98\u51A0\u89C2\u7BA1\u9986\u7F50\u60EF\u704C\u8D2F\u500C\u839E\u63BC\u6DAB\u76E5\u9E73\u9CCF",
        "guang": "\u5149\u5E7F\u901B\u72B7\u6844\u80F1\u7592",
        "gui": "\u7470\u89C4\u572D\u7845\u5F52\u9F9F\u95FA\u8F68\u9B3C\u8BE1\u7678\u6842\u67DC\u8DEA\u8D35\u523D\u5326\u523F\u5E8B\u5B84\u59AB\u6867\u7085\u6677\u7688\u7C0B\u9C91\u9CDC",
        "gun": "\u8F8A\u6EDA\u68CD\u4E28\u886E\u7EF2\u78D9\u9CA7",
        "guo": "\u9505\u90ED\u56FD\u679C\u88F9\u8FC7\u9998\u8803\u57DA\u63B4\u5459\u56D7\u5E3C\u5D1E\u7313\u6901\u8662\u951E\u8052\u872E\u873E\u8748",
        "ha": "\u54C8",
        "hai": "\u9AB8\u5B69\u6D77\u6C26\u4EA5\u5BB3\u9A87\u54B4\u55E8\u988F\u91A2",
        "han": "\u9163\u61A8\u90AF\u97E9\u542B\u6DB5\u5BD2\u51FD\u558A\u7F55\u7FF0\u64BC\u634D\u65F1\u61BE\u608D\u710A\u6C57\u6C49\u9097\u83E1\u6496\u961A\u701A\u6657\u7113\u9894\u86B6\u9F3E",
        "hen": "\u592F\u75D5\u5F88\u72E0\u6068",
        "hang": "\u676D\u822A\u6C86\u7ED7\u73E9\u6841",
        "hao": "\u58D5\u568E\u8C6A\u6BEB\u90DD\u597D\u8017\u53F7\u6D69\u8585\u55E5\u5686\u6FE0\u704F\u660A\u7693\u98A2\u869D",
        "he": "\u5475\u559D\u8377\u83CF\u6838\u79BE\u548C\u4F55\u5408\u76D2\u8C89\u9602\u6CB3\u6DB8\u8D6B\u8910\u9E64\u8D3A\u8BC3\u52BE\u58D1\u85FF\u55D1\u55EC\u9616\u76CD\u86B5\u7FEE",
        "hei": "\u563F\u9ED1",
        "heng": "\u54FC\u4EA8\u6A2A\u8861\u6052\u8A07\u8605",
        "hong": "\u8F70\u54C4\u70D8\u8679\u9E3F\u6D2A\u5B8F\u5F18\u7EA2\u9EC9\u8BA7\u836D\u85A8\u95F3\u6CD3",
        "hou": "\u5589\u4FAF\u7334\u543C\u539A\u5019\u540E\u5820\u5F8C\u9005\u760A\u7BCC\u7CC7\u9C8E\u9ABA",
        "hu": "\u547C\u4E4E\u5FFD\u745A\u58F6\u846B\u80E1\u8774\u72D0\u7CCA\u6E56\u5F27\u864E\u552C\u62A4\u4E92\u6CAA\u6237\u51B1\u553F\u56EB\u5CB5\u7322\u6019\u60DA\u6D52\u6EF9\u7425\u69F2\u8F77\u89F3\u70C0\u7173\u623D\u6248\u795C\u9E55\u9E71\u7B0F\u9190\u659B",
        "hua": "\u82B1\u54D7\u534E\u733E\u6ED1\u753B\u5212\u5316\u8BDD\u5290\u6D4D\u9A85\u6866\u94E7\u7A1E",
        "huai": "\u69D0\u5F8A\u6000\u6DEE\u574F\u8FD8\u8E1D",
        "huan": "\u6B22\u73AF\u6853\u7F13\u6362\u60A3\u5524\u75EA\u8C62\u7115\u6DA3\u5BA6\u5E7B\u90C7\u5942\u57B8\u64D0\u571C\u6D39\u6D63\u6F36\u5BF0\u902D\u7F33\u953E\u9CA9\u9B1F",
        "huang": "\u8352\u614C\u9EC4\u78FA\u8757\u7C27\u7687\u51F0\u60F6\u714C\u6643\u5E4C\u604D\u8C0E\u968D\u5FA8\u6E5F\u6F62\u9051\u749C\u8093\u7640\u87E5\u7BC1\u9CC7",
        "hui": "\u7070\u6325\u8F89\u5FBD\u6062\u86D4\u56DE\u6BC1\u6094\u6167\u5349\u60E0\u6666\u8D3F\u79FD\u4F1A\u70E9\u6C47\u8BB3\u8BF2\u7ED8\u8BD9\u8334\u835F\u8559\u54D5\u5599\u96B3\u6D04\u5F57\u7F0B\u73F2\u6656\u605A\u867A\u87EA\u9EBE",
        "hun": "\u8364\u660F\u5A5A\u9B42\u6D51\u6DF7\u8BE8\u9984\u960D\u6EB7\u7F17",
        "huo": "\u8C41\u6D3B\u4F19\u706B\u83B7\u6216\u60D1\u970D\u8D27\u7978\u6509\u56AF\u5925\u94AC\u952A\u956C\u8020\u8816",
        "ji": "\u51FB\u573E\u57FA\u673A\u7578\u7A3D\u79EF\u7B95\u808C\u9965\u8FF9\u6FC0\u8BA5\u9E21\u59EC\u7EE9\u7F09\u5409\u6781\u68D8\u8F91\u7C4D\u96C6\u53CA\u6025\u75BE\u6C72\u5373\u5AC9\u7EA7\u6324\u51E0\u810A\u5DF1\u84DF\u6280\u5180\u5B63\u4F0E\u796D\u5242\u60B8\u6D4E\u5BC4\u5BC2\u8BA1\u8BB0\u65E2\u5FCC\u9645\u5993\u7EE7\u7EAA\u5C45\u4E0C\u4E69\u525E\u4F76\u4F74\u8114\u58BC\u82A8\u82B0\u8401\u84BA\u857A\u638E\u53FD\u54AD\u54DC\u5527\u5C8C\u5D74\u6D0E\u5F50\u5C50\u9AA5\u757F\u7391\u696B\u6B9B\u621F\u6222\u8D4D\u89CA\u7284\u9F51\u77F6\u7F81\u5D47\u7A37\u7620\u7635\u866E\u7B08\u7B04\u66A8\u8DFB\u8DFD\u9701\u9C9A\u9CAB\u9AFB\u9E82",
        "jia": "\u5609\u67B7\u5939\u4F73\u5BB6\u52A0\u835A\u988A\u8D3E\u7532\u94BE\u5047\u7A3C\u4EF7\u67B6\u9A7E\u5AC1\u4F3D\u90CF\u62EE\u5CAC\u6D43\u8FE6\u73C8\u621B\u80DB\u605D\u94D7\u9553\u75C2\u86F1\u7B33\u8888\u8DCF",
        "jian": "\u6B7C\u76D1\u575A\u5C16\u7B3A\u95F4\u714E\u517C\u80A9\u8270\u5978\u7F04\u8327\u68C0\u67EC\u78B1\u7877\u62E3\u6361\u7B80\u4FED\u526A\u51CF\u8350\u69DB\u9274\u8DF5\u8D31\u89C1\u952E\u7BAD\u4EF6\u5065\u8230\u5251\u996F\u6E10\u6E85\u6DA7\u5EFA\u50ED\u8C0F\u8C2B\u83C5\u84B9\u641B\u56DD\u6E54\u8E47\u8B07\u7F23\u67A7\u67D9\u6957\u620B\u622C\u726E\u728D\u6BFD\u8171\u7751\u950F\u9E63\u88E5\u7B15\u7BB4\u7FE6\u8DBC\u8E3A\u9CA3\u97AF",
        "jiang": "\u50F5\u59DC\u5C06\u6D46\u6C5F\u7586\u848B\u6868\u5956\u8BB2\u5320\u9171\u964D\u8333\u6D1A\u7EDB\u7F30\u729F\u7913\u8029\u7CE8\u8C47",
        "jiao": "\u8549\u6912\u7901\u7126\u80F6\u4EA4\u90CA\u6D47\u9A84\u5A07\u56BC\u6405\u94F0\u77EB\u4FA5\u811A\u72E1\u89D2\u997A\u7F34\u7EDE\u527F\u6559\u9175\u8F7F\u8F83\u53EB\u4F7C\u50EC\u832D\u6322\u564D\u5CE4\u5FBC\u59E3\u7E9F\u656B\u768E\u9E6A\u86DF\u91AE\u8DE4\u9C9B",
        "jie": "\u7A96\u63ED\u63A5\u7686\u79F8\u8857\u9636\u622A\u52AB\u8282\u6854\u6770\u6377\u776B\u7AED\u6D01\u7ED3\u89E3\u59D0\u6212\u85C9\u82A5\u754C\u501F\u4ECB\u75A5\u8BEB\u5C4A\u5048\u8BA6\u8BD8\u5588\u55DF\u736C\u5A55\u5B51\u6840\u7352\u78A3\u9534\u7596\u88B7\u9889\u86A7\u7FAF\u9C92\u9AB1\u9AEB",
        "jin": "\u5DFE\u7B4B\u65A4\u91D1\u4ECA\u6D25\u895F\u7D27\u9526\u4EC5\u8C28\u8FDB\u9773\u664B\u7981\u8FD1\u70EC\u6D78\u5C3D\u537A\u8369\u5807\u5664\u9991\u5ED1\u5997\u7F19\u747E\u69FF\u8D46\u89D0\u9485\u9513\u887F\u77DC",
        "jing": "\u52B2\u8346\u5162\u830E\u775B\u6676\u9CB8\u4EAC\u60CA\u7CBE\u7CB3\u7ECF\u4E95\u8B66\u666F\u9888\u9759\u5883\u656C\u955C\u5F84\u75C9\u9756\u7ADF\u7ADE\u51C0\u522D\u5106\u9631\u83C1\u734D\u61AC\u6CFE\u8FF3\u5F2A\u5A67\u80BC\u80EB\u8148\u65CC",
        "jiong": "\u70AF\u7A98\u5182\u8FE5\u6243",
        "jiu": "\u63EA\u7A76\u7EA0\u7396\u97ED\u4E45\u7078\u4E5D\u9152\u53A9\u6551\u65E7\u81FC\u8205\u548E\u5C31\u759A\u50E6\u557E\u9604\u67E9\u6855\u9E6B\u8D73\u9B0F",
        "ju": "\u97A0\u62D8\u72D9\u75BD\u9A79\u83CA\u5C40\u5480\u77E9\u4E3E\u6CAE\u805A\u62D2\u636E\u5DE8\u5177\u8DDD\u8E1E\u952F\u4FF1\u53E5\u60E7\u70AC\u5267\u5028\u8BB5\u82E3\u82F4\u8392\u63AC\u907D\u5C66\u741A\u67B8\u6910\u6998\u6989\u6A58\u728B\u98D3\u949C\u9514\u7AAD\u88FE\u8D84\u91B5\u8E3D\u9F83\u96CE\u97AB",
        "juan": "\u6350\u9E43\u5A1F\u5026\u7737\u5377\u7EE2\u9104\u72F7\u6D93\u684A\u8832\u9529\u954C\u96BD",
        "jue": "\u6485\u652B\u6289\u6398\u5014\u7235\u89C9\u51B3\u8BC0\u7EDD\u53A5\u5282\u8C32\u77CD\u8568\u5658\u5D1B\u7357\u5B53\u73CF\u6877\u6A5B\u721D\u9562\u8E76\u89D6",
        "jun": "\u5747\u83CC\u94A7\u519B\u541B\u5CFB\u4FCA\u7AE3\u6D5A\u90E1\u9A8F\u6343\u72FB\u76B2\u7B60\u9E87",
        "ka": "\u5580\u5496\u5361\u4F67\u5494\u80E9",
        "ke": "\u54AF\u5777\u82DB\u67EF\u68F5\u78D5\u9897\u79D1\u58F3\u54B3\u53EF\u6E34\u514B\u523B\u5BA2\u8BFE\u5CA2\u606A\u6E98\u9A92\u7F02\u73C2\u8F72\u6C2A\u778C\u94B6\u75B4\u7AA0\u874C\u9AC1",
        "kai": "\u5F00\u63E9\u6977\u51EF\u6168\u5240\u57B2\u8488\u5FFE\u607A\u94E0\u950E",
        "kan": "\u520A\u582A\u52D8\u574E\u780D\u770B\u4F83\u51F5\u83B0\u83B6\u6221\u9F9B\u77B0",
        "kang": "\u5EB7\u6177\u7CE0\u625B\u6297\u4EA2\u7095\u5751\u4F09\u95F6\u94AA",
        "kao": "\u8003\u62F7\u70E4\u9760\u5C3B\u6832\u7292\u94D0",
        "ken": "\u80AF\u5543\u57A6\u6073\u57A0\u88C9\u9880",
        "keng": "\u542D\u5FD0\u94FF",
        "kong": "\u7A7A\u6050\u5B54\u63A7\u5025\u5D06\u7B9C",
        "kou": "\u62A0\u53E3\u6263\u5BC7\u82A4\u853B\u53E9\u770D\u7B58",
        "ku": "\u67AF\u54ED\u7A9F\u82E6\u9177\u5E93\u88E4\u5233\u5800\u55BE\u7ED4\u9AB7",
        "kua": "\u5938\u57AE\u630E\u8DE8\u80EF\u4F89",
        "kuai": "\u5757\u7B77\u4FA9\u5FEB\u84AF\u90D0\u8489\u72EF\u810D",
        "kuan": "\u5BBD\u6B3E\u9ACB",
        "kuang": "\u5321\u7B50\u72C2\u6846\u77FF\u7736\u65F7\u51B5\u8BD3\u8BF3\u909D\u5739\u593C\u54D0\u7EA9\u8D36",
        "kui": "\u4E8F\u76D4\u5CBF\u7AA5\u8475\u594E\u9B41\u5080\u9988\u6127\u6E83\u9997\u532E\u5914\u9697\u63C6\u55B9\u559F\u609D\u6126\u9615\u9035\u668C\u777D\u8069\u8770\u7BD1\u81FE\u8DEC",
        "kun": "\u5764\u6606\u6346\u56F0\u6083\u9603\u7428\u951F\u918C\u9CB2\u9AE1",
        "kuo": "\u62EC\u6269\u5ED3\u9614\u86DE",
        "la": "\u5783\u62C9\u5587\u8721\u814A\u8FA3\u5566\u524C\u647A\u908B\u65EF\u782C\u760C",
        "lai": "\u83B1\u6765\u8D56\u5D03\u5F95\u6D9E\u6FD1\u8D49\u7750\u94FC\u765E\u7C41",
        "lan": "\u84DD\u5A6A\u680F\u62E6\u7BEE\u9611\u5170\u6F9C\u8C30\u63FD\u89C8\u61D2\u7F06\u70C2\u6EE5\u5549\u5C9A\u61D4\u6F24\u6984\u6593\u7F71\u9567\u8934",
        "lang": "\u7405\u6994\u72FC\u5ECA\u90CE\u6717\u6D6A\u83A8\u8497\u5577\u9606\u9512\u7A02\u8782",
        "lao": "\u635E\u52B3\u7262\u8001\u4F6C\u59E5\u916A\u70D9\u6D9D\u5520\u5D02\u6833\u94D1\u94F9\u75E8\u91AA",
        "le": "\u52D2\u4E50\u808B\u4EC2\u53FB\u561E\u6CD0\u9CD3",
        "lei": "\u96F7\u956D\u857E\u78CA\u7D2F\u5121\u5792\u64C2\u7C7B\u6CEA\u7FB8\u8BD4\u837D\u54A7\u6F2F\u5AD8\u7F27\u6A91\u8012\u9179",
        "ling": "\u68F1\u51B7\u62CE\u73B2\u83F1\u96F6\u9F84\u94C3\u4F36\u7F9A\u51CC\u7075\u9675\u5CAD\u9886\u53E6\u4EE4\u9143\u5844\u82D3\u5464\u56F9\u6CE0\u7EEB\u67C3\u68C2\u74F4\u8046\u86C9\u7FCE\u9CAE",
        "leng": "\u695E\u6123",
        "li": "\u5398\u68A8\u7281\u9ECE\u7BF1\u72F8\u79BB\u6F13\u7406\u674E\u91CC\u9CA4\u793C\u8389\u8354\u540F\u6817\u4E3D\u5389\u52B1\u783E\u5386\u5229\u5088\u4F8B\u4FD0\u75E2\u7ACB\u7C92\u6CA5\u96B6\u529B\u7483\u54E9\u4FEA\u4FDA\u90E6\u575C\u82C8\u8385\u84E0\u85DC\u6369\u5456\u5533\u55B1\u7301\u6EA7\u6FA7\u9026\u5A0C\u5AE0\u9A8A\u7F21\u73DE\u67A5\u680E\u8F79\u623E\u783A\u8A48\u7F79\u9502\u9E42\u75A0\u75AC\u86CE\u870A\u8821\u7B20\u7BE5\u7C9D\u91B4\u8DDE\u96F3\u9CA1\u9CE2\u9EE7",
        "lian": "\u4FE9\u8054\u83B2\u8FDE\u9570\u5EC9\u601C\u6D9F\u5E18\u655B\u8138\u94FE\u604B\u70BC\u7EC3\u631B\u8539\u5941\u6F4B\u6FC2\u5A08\u740F\u695D\u6B93\u81C1\u81A6\u88E2\u880A\u9CA2",
        "liang": "\u7CAE\u51C9\u6881\u7CB1\u826F\u4E24\u8F86\u91CF\u667E\u4EAE\u8C05\u589A\u690B\u8E09\u9753\u9B49",
        "liao": "\u64A9\u804A\u50DA\u7597\u71CE\u5BE5\u8FBD\u6F66\u4E86\u6482\u9563\u5ED6\u6599\u84FC\u5C25\u5639\u7360\u5BEE\u7F2D\u948C\u9E69\u8022",
        "lie": "\u5217\u88C2\u70C8\u52A3\u730E\u51BD\u57D2\u6D0C\u8D94\u8E90\u9B23",
        "lin": "\u7433\u6797\u78F7\u9716\u4E34\u90BB\u9CDE\u6DCB\u51DB\u8D41\u541D\u853A\u5D99\u5EEA\u9074\u6AA9\u8F9A\u77B5\u7CBC\u8E8F\u9E9F",
        "liu": "\u6E9C\u7409\u69B4\u786B\u998F\u7559\u5218\u7624\u6D41\u67F3\u516D\u62A1\u507B\u848C\u6CD6\u6D4F\u905B\u9A9D\u7EFA\u65D2\u7198\u950D\u954F\u9E68\u938F",
        "long": "\u9F99\u804B\u5499\u7B3C\u7ABF\u9686\u5784\u62E2\u9647\u5F04\u5785\u830F\u6CF7\u73D1\u680A\u80E7\u783B\u7643",
        "lou": "\u697C\u5A04\u6402\u7BD3\u6F0F\u964B\u55BD\u5D5D\u9542\u7618\u8027\u877C\u9AC5",
        "lu": "\u82A6\u5362\u9885\u5E90\u7089\u63B3\u5364\u864F\u9C81\u9E93\u788C\u9732\u8DEF\u8D42\u9E7F\u6F5E\u7984\u5F55\u9646\u622E\u5786\u6445\u64B8\u565C\u6CF8\u6E0C\u6F09\u7490\u680C\u6A79\u8F73\u8F82\u8F98\u6C07\u80EA\u9565\u9E2C\u9E6D\u7C0F\u823B\u9C88",
        "lv": "\u9A74\u5415\u94DD\u4FA3\u65C5\u5C65\u5C61\u7F15\u8651\u6C2F\u5F8B\u7387\u6EE4\u7EFF\u634B\u95FE\u6988\u8182\u7A06\u891B",
        "luan": "\u5CE6\u5B6A\u6EE6\u5375\u4E71\u683E\u9E3E\u92AE",
        "lue": "\u63A0\u7565\u950A",
        "lun": "\u8F6E\u4F26\u4ED1\u6CA6\u7EB6\u8BBA\u56F5",
        "luo": "\u841D\u87BA\u7F57\u903B\u9523\u7BA9\u9AA1\u88F8\u843D\u6D1B\u9A86\u7EDC\u502E\u8366\u645E\u7321\u6CFA\u6924\u8136\u9559\u7630\u96D2",
        "ma": "\u5988\u9EBB\u739B\u7801\u8682\u9A6C\u9A82\u561B\u5417\u551B\u72B8\u5B37\u6769\u9EBD",
        "mai": "\u57CB\u4E70\u9EA6\u5356\u8FC8\u8109\u52A2\u836C\u54AA\u973E",
        "man": "\u7792\u9992\u86EE\u6EE1\u8513\u66FC\u6162\u6F2B\u8C29\u5881\u5E54\u7F26\u71B3\u9558\u989F\u87A8\u9CD7\u9794",
        "mang": "\u8292\u832B\u76F2\u5FD9\u83BD\u9099\u6F2D\u6726\u786D\u87D2",
        "meng": "\u6C13\u840C\u8499\u6AAC\u76DF\u9530\u731B\u68A6\u5B5F\u52D0\u750D\u77A2\u61F5\u791E\u867B\u8722\u8813\u824B\u8268\u9EFE",
        "miao": "\u732B\u82D7\u63CF\u7784\u85D0\u79D2\u6E3A\u5E99\u5999\u55B5\u9088\u7F08\u7F2A\u676A\u6DFC\u7707\u9E4B\u8731",
        "mao": "\u8305\u951A\u6BDB\u77DB\u94C6\u536F\u8302\u5192\u5E3D\u8C8C\u8D38\u4F94\u88A4\u52D6\u8306\u5CC1\u7441\u6634\u7266\u8004\u65C4\u61CB\u7780\u86D1\u8765\u87CA\u9AE6",
        "me": "\u4E48",
        "mei": "\u73AB\u679A\u6885\u9176\u9709\u7164\u6CA1\u7709\u5A92\u9541\u6BCF\u7F8E\u6627\u5BD0\u59B9\u5A9A\u5776\u8393\u5D4B\u7338\u6D7C\u6E44\u6963\u9545\u9E5B\u8882\u9B45",
        "men": "\u95E8\u95F7\u4EEC\u626A\u739F\u7116\u61D1\u9494",
        "mi": "\u772F\u919A\u9761\u7CDC\u8FF7\u8C1C\u5F25\u7C73\u79D8\u89C5\u6CCC\u871C\u5BC6\u5E42\u8288\u5196\u8C27\u863C\u5627\u7315\u736F\u6C68\u5B93\u5F2D\u8112\u6549\u7CF8\u7E3B\u9E8B",
        "mian": "\u68C9\u7720\u7EF5\u5195\u514D\u52C9\u5A29\u7F05\u9762\u6C94\u6E4E\u817C\u7704",
        "mie": "\u8511\u706D\u54A9\u881B\u7BFE",
        "min": "\u6C11\u62BF\u76BF\u654F\u60AF\u95FD\u82E0\u5CB7\u95F5\u6CEF\u73C9",
        "ming": "\u660E\u879F\u9E23\u94ED\u540D\u547D\u51A5\u8317\u6E9F\u669D\u7791\u9169",
        "miu": "\u8C2C",
        "mo": "\u6478\u6479\u8611\u6A21\u819C\u78E8\u6469\u9B54\u62B9\u672B\u83AB\u58A8\u9ED8\u6CAB\u6F20\u5BDE\u964C\u8C1F\u8309\u84E6\u998D\u5AEB\u9546\u79E3\u763C\u8031\u87C6\u8C8A\u8C98",
        "mou": "\u8C0B\u725F\u67D0\u53B6\u54DE\u5A7A\u7738\u936A",
        "mu": "\u62C7\u7261\u4EA9\u59C6\u6BCD\u5893\u66AE\u5E55\u52DF\u6155\u6728\u76EE\u7766\u7267\u7A46\u4EEB\u82DC\u5452\u6C90\u6BEA\u94BC",
        "na": "\u62FF\u54EA\u5450\u94A0\u90A3\u5A1C\u7EB3\u5185\u637A\u80AD\u954E\u8872\u7BAC",
        "nai": "\u6C16\u4E43\u5976\u8010\u5948\u9F10\u827F\u8418\u67F0",
        "nan": "\u5357\u7537\u96BE\u56CA\u5583\u56E1\u6960\u8169\u877B\u8D67",
        "nao": "\u6320\u8111\u607C\u95F9\u5B6C\u57B4\u7331\u7459\u7847\u94D9\u86F2",
        "ne": "\u6DD6\u5462\u8BB7",
        "nei": "\u9981",
        "nen": "\u5AE9\u80FD\u6798\u6041",
        "ni": "\u59AE\u9713\u502A\u6CE5\u5C3C\u62DF\u4F60\u533F\u817B\u9006\u6EBA\u4F32\u576D\u730A\u6029\u6EE0\u6635\u65CE\u7962\u615D\u7768\u94CC\u9CB5",
        "nian": "\u852B\u62C8\u5E74\u78BE\u64B5\u637B\u5FF5\u5EFF\u8F87\u9ECF\u9C87\u9CB6",
        "niang": "\u5A18\u917F",
        "niao": "\u9E1F\u5C3F\u8311\u5B32\u8132\u8885",
        "nie": "\u634F\u8042\u5B7D\u556E\u954A\u954D\u6D85\u4E5C\u9667\u8616\u55EB\u8080\u989E\u81EC\u8E51",
        "nin": "\u60A8\u67E0",
        "ning": "\u72DE\u51DD\u5B81\u62E7\u6CDE\u4F5E\u84E5\u549B\u752F\u804D",
        "niu": "\u725B\u626D\u94AE\u7EBD\u72C3\u5FF8\u599E\u86B4",
        "nong": "\u8113\u6D53\u519C\u4FAC",
        "nu": "\u5974\u52AA\u6012\u5476\u5E11\u5F29\u80EC\u5B65\u9A7D",
        "nv": "\u5973\u6067\u9495\u8844",
        "nuan": "\u6696",
        "nuenue": "\u8650",
        "nue": "\u759F\u8C11",
        "nuo": "\u632A\u61E6\u7CEF\u8BFA\u50A9\u6426\u558F\u9518",
        "ou": "\u54E6\u6B27\u9E25\u6BB4\u85D5\u5455\u5076\u6CA4\u6004\u74EF\u8026",
        "pa": "\u556A\u8DB4\u722C\u5E15\u6015\u7436\u8469\u7B62",
        "pai": "\u62CD\u6392\u724C\u5F98\u6E43\u6D3E\u4FF3\u848E",
        "pan": "\u6500\u6F58\u76D8\u78D0\u76FC\u7554\u5224\u53DB\u723F\u6CEE\u88A2\u897B\u87E0\u8E52",
        "pang": "\u4E53\u5E9E\u65C1\u802A\u80D6\u6EC2\u9004",
        "pao": "\u629B\u5486\u5228\u70AE\u888D\u8DD1\u6CE1\u530F\u72CD\u5E96\u812C\u75B1",
        "pei": "\u5478\u80DA\u57F9\u88F4\u8D54\u966A\u914D\u4F69\u6C9B\u638A\u8F94\u5E14\u6DE0\u65C6\u952B\u9185\u9708",
        "pen": "\u55B7\u76C6\u6E53",
        "peng": "\u7830\u62A8\u70F9\u6F8E\u5F6D\u84EC\u68DA\u787C\u7BF7\u81A8\u670B\u9E4F\u6367\u78B0\u576F\u580B\u562D\u6026\u87DB",
        "pi": "\u7812\u9739\u6279\u62AB\u5288\u7435\u6BD7\u5564\u813E\u75B2\u76AE\u5339\u75DE\u50FB\u5C41\u8B6C\u4E15\u9674\u90B3\u90EB\u572E\u9F19\u64D7\u567C\u5E80\u5AB2\u7EB0\u6787\u7513\u7765\u7F74\u94CD\u75E6\u7656\u758B\u868D\u8C94",
        "pian": "\u7BC7\u504F\u7247\u9A97\u8C1D\u9A88\u728F\u80FC\u890A\u7FE9\u8E41",
        "piao": "\u98D8\u6F02\u74E2\u7968\u527D\u560C\u5AD6\u7F25\u6B8D\u779F\u87B5",
        "pie": "\u6487\u77A5\u4E3F\u82E4\u6C15",
        "pin": "\u62FC\u9891\u8D2B\u54C1\u8058\u62DA\u59D8\u5AD4\u6980\u725D\u98A6",
        "ping": "\u4E52\u576A\u82F9\u840D\u5E73\u51ED\u74F6\u8BC4\u5C4F\u4FDC\u5A09\u67B0\u9C86",
        "po": "\u5761\u6CFC\u9887\u5A46\u7834\u9B44\u8FEB\u7C95\u53F5\u9131\u6EA5\u73C0\u948B\u94B7\u76A4\u7B38",
        "pou": "\u5256\u88D2\u8E23",
        "pu": "\u6251\u94FA\u4EC6\u8386\u8461\u83E9\u84B2\u57D4\u6734\u5703\u666E\u6D66\u8C31\u66DD\u7011\u530D\u5657\u6FEE\u749E\u6C06\u9564\u9568\u8E7C",
        "qi": "\u671F\u6B3A\u6816\u621A\u59BB\u4E03\u51C4\u6F06\u67D2\u6C8F\u5176\u68CB\u5947\u6B67\u7566\u5D0E\u8110\u9F50\u65D7\u7948\u7941\u9A91\u8D77\u5C82\u4E5E\u4F01\u542F\u5951\u780C\u5668\u6C14\u8FC4\u5F03\u6C7D\u6CE3\u8BAB\u4E9F\u4E93\u573B\u8291\u840B\u847A\u5601\u5C7A\u5C90\u6C54\u6DC7\u9A90\u7EEE\u742A\u7426\u675E\u6864\u69ED\u6B39\u797A\u61A9\u789B\u86F4\u871E\u7DA6\u7DAE\u8DBF\u8E4A\u9CCD\u9E92",
        "qia": "\u6390\u6070\u6D3D\u845C",
        "qian": "\u7275\u6266\u948E\u94C5\u5343\u8FC1\u7B7E\u4EDF\u8C26\u4E7E\u9ED4\u94B1\u94B3\u524D\u6F5C\u9063\u6D45\u8C34\u5811\u5D4C\u6B20\u6B49\u4F65\u9621\u828A\u82A1\u8368\u63AE\u5C8D\u60AD\u614A\u9A9E\u6434\u8930\u7F31\u6920\u80B7\u6106\u94A4\u8654\u7B9D",
        "qiang": "\u67AA\u545B\u8154\u7F8C\u5899\u8537\u5F3A\u62A2\u5AF1\u6A2F\u6217\u709D\u9516\u9535\u956A\u8941\u8723\u7F9F\u8DEB\u8DC4",
        "qiao": "\u6A47\u9539\u6572\u6084\u6865\u77A7\u4E54\u4FA8\u5DE7\u9798\u64AC\u7FD8\u5CED\u4FCF\u7A8D\u5281\u8BEE\u8C2F\u835E\u6100\u6194\u7F32\u6A35\u6BF3\u7857\u8DF7\u9792",
        "qie": "\u5207\u8304\u4E14\u602F\u7A83\u90C4\u553C\u60EC\u59BE\u6308\u9532\u7BA7",
        "qin": "\u94A6\u4FB5\u4EB2\u79E6\u7434\u52E4\u82B9\u64D2\u79BD\u5BDD\u6C81\u82A9\u84C1\u8572\u63FF\u5423\u55EA\u5659\u6EB1\u6A8E\u8793\u887E",
        "qing": "\u9752\u8F7B\u6C22\u503E\u537F\u6E05\u64CE\u6674\u6C30\u60C5\u9877\u8BF7\u5E86\u5029\u82D8\u570A\u6AA0\u78EC\u873B\u7F44\u7B90\u8B26\u9CAD\u9EE5",
        "qiong": "\u743C\u7A77\u909B\u8315\u7A79\u7B47\u928E",
        "qiu": "\u79CB\u4E18\u90B1\u7403\u6C42\u56DA\u914B\u6CC5\u4FC5\u6C3D\u5DEF\u827D\u72B0\u6E6B\u9011\u9052\u6978\u8D47\u9E20\u866C\u86AF\u8764\u88D8\u7CD7\u9CC5\u9F3D",
        "qu": "\u8D8B\u533A\u86C6\u66F2\u8EAF\u5C48\u9A71\u6E20\u53D6\u5A36\u9F8B\u8DA3\u53BB\u8BCE\u52AC\u8556\u8627\u5C96\u8862\u9612\u74A9\u89D1\u6C0D\u795B\u78F2\u766F\u86D0\u883C\u9EB4\u77BF\u9EE2",
        "quan": "\u5708\u98A7\u6743\u919B\u6CC9\u5168\u75CA\u62F3\u72AC\u5238\u529D\u8BE0\u8343\u737E\u609B\u7EFB\u8F81\u754E\u94E8\u8737\u7B4C\u9B08",
        "que": "\u7F3A\u7094\u7638\u5374\u9E4A\u69B7\u786E\u96C0\u9619\u60AB",
        "qun": "\u88D9\u7FA4\u9021",
        "ran": "\u7136\u71C3\u5189\u67D3\u82D2\u9AEF",
        "rang": "\u74E4\u58E4\u6518\u56B7\u8BA9\u79B3\u7A70",
        "rao": "\u9976\u6270\u7ED5\u835B\u5A06\u6861",
        "ruo": "\u60F9\u82E5\u5F31",
        "re": "\u70ED\u504C",
        "ren": "\u58EC\u4EC1\u4EBA\u5FCD\u97E7\u4EFB\u8BA4\u5203\u598A\u7EAB\u4EDE\u834F\u845A\u996A\u8F6B\u7A14\u887D",
        "reng": "\u6254\u4ECD",
        "ri": "\u65E5",
        "rong": "\u620E\u8338\u84C9\u8363\u878D\u7194\u6EB6\u5BB9\u7ED2\u5197\u5D58\u72E8\u7F1B\u6995\u877E",
        "rou": "\u63C9\u67D4\u8089\u7CC5\u8E42\u97A3",
        "ru": "\u8339\u8815\u5112\u5B7A\u5982\u8FB1\u4E73\u6C5D\u5165\u8925\u84D0\u85B7\u5685\u6D33\u6EBD\u6FE1\u94F7\u8966\u98A5",
        "ruan": "\u8F6F\u962E\u670A",
        "rui": "\u854A\u745E\u9510\u82AE\u8564\u777F\u868B",
        "run": "\u95F0\u6DA6",
        "sa": "\u6492\u6D12\u8428\u5345\u4EE8\u6332\u98D2",
        "sai": "\u816E\u9CC3\u585E\u8D5B\u567B",
        "san": "\u4E09\u53C1\u4F1E\u6563\u5F61\u9993\u6C35\u6BF5\u7CC1\u9730",
        "sang": "\u6851\u55D3\u4E27\u6421\u78C9\u98A1",
        "sao": "\u6414\u9A9A\u626B\u5AC2\u57FD\u81CA\u7619\u9CCB",
        "se": "\u745F\u8272\u6DA9\u556C\u94E9\u94EF\u7A51",
        "sen": "\u68EE",
        "seng": "\u50E7",
        "sha": "\u838E\u7802\u6740\u5239\u6C99\u7EB1\u50BB\u5565\u715E\u810E\u6B43\u75E7\u88DF\u970E\u9CA8",
        "shai": "\u7B5B\u6652\u917E",
        "shan": "\u73CA\u82EB\u6749\u5C71\u5220\u717D\u886B\u95EA\u9655\u64C5\u8D61\u81B3\u5584\u6C55\u6247\u7F2E\u5261\u8BAA\u912F\u57CF\u829F\u6F78\u59D7\u9A9F\u81BB\u9490\u759D\u87EE\u8222\u8DDA\u9CDD",
        "shang": "\u5892\u4F24\u5546\u8D4F\u664C\u4E0A\u5C1A\u88F3\u57A7\u7EF1\u6B87\u71B5\u89DE",
        "shao": "\u68A2\u634E\u7A0D\u70E7\u828D\u52FA\u97F6\u5C11\u54E8\u90B5\u7ECD\u52AD\u82D5\u6F72\u86F8\u7B24\u7B72\u8244",
        "she": "\u5962\u8D4A\u86C7\u820C\u820D\u8D66\u6444\u5C04\u6151\u6D89\u793E\u8BBE\u538D\u4F58\u731E\u7572\u9E9D",
        "shen": "\u7837\u7533\u547B\u4F38\u8EAB\u6DF1\u5A20\u7EC5\u795E\u6C88\u5BA1\u5A76\u751A\u80BE\u614E\u6E17\u8BDC\u8C02\u5432\u54C2\u6E16\u6939\u77E7\u8703",
        "sheng": "\u58F0\u751F\u7525\u7272\u5347\u7EF3\u7701\u76DB\u5269\u80DC\u5723\u4E1E\u6E11\u5AB5\u771A\u7B19",
        "shi": "\u5E08\u5931\u72EE\u65BD\u6E7F\u8BD7\u5C38\u8671\u5341\u77F3\u62FE\u65F6\u4EC0\u98DF\u8680\u5B9E\u8BC6\u53F2\u77E2\u4F7F\u5C4E\u9A76\u59CB\u5F0F\u793A\u58EB\u4E16\u67FF\u4E8B\u62ED\u8A93\u901D\u52BF\u662F\u55DC\u566C\u9002\u4ED5\u4F8D\u91CA\u9970\u6C0F\u5E02\u6043\u5BA4\u89C6\u8BD5\u8C25\u57D8\u83B3\u84CD\u5F11\u5511\u9963\u8F7C\u8006\u8D33\u70BB\u793B\u94C8\u94CA\u87AB\u8210\u7B6E\u8C55\u9CA5\u9CBA",
        "shou": "\u6536\u624B\u9996\u5B88\u5BFF\u6388\u552E\u53D7\u7626\u517D\u624C\u72E9\u7EF6\u824F",
        "shu": "\u852C\u67A2\u68B3\u6B8A\u6292\u8F93\u53D4\u8212\u6DD1\u758F\u4E66\u8D4E\u5B70\u719F\u85AF\u6691\u66D9\u7F72\u8700\u9ECD\u9F20\u5C5E\u672F\u8FF0\u6811\u675F\u620D\u7AD6\u5885\u5EB6\u6570\u6F31\u6055\u500F\u587E\u83FD\u5FC4\u6CAD\u6D91\u6F8D\u59DD\u7EBE\u6BF9\u8167\u6BB3\u956F\u79EB\u9E6C",
        "shua": "\u5237\u800D\u5530\u6DAE",
        "shuai": "\u6454\u8870\u7529\u5E05\u87C0",
        "shuan": "\u6813\u62F4\u95E9",
        "shuang": "\u971C\u53CC\u723D\u5B40",
        "shui": "\u8C01\u6C34\u7761\u7A0E",
        "shun": "\u542E\u77AC\u987A\u821C\u6042",
        "shuo": "\u8BF4\u7855\u6714\u70C1\u84B4\u6420\u55CD\u6FEF\u5981\u69CA\u94C4",
        "si": "\u65AF\u6495\u5636\u601D\u79C1\u53F8\u4E1D\u6B7B\u8086\u5BFA\u55E3\u56DB\u4F3A\u4F3C\u9972\u5DF3\u53AE\u4FDF\u5155\u83E5\u549D\u6C5C\u6CD7\u6F8C\u59D2\u9A77\u7F0C\u7940\u7960\u9536\u9E36\u801C\u86F3\u7B25",
        "song": "\u677E\u8038\u6002\u9882\u9001\u5B8B\u8BBC\u8BF5\u51C7\u83D8\u5D27\u5D69\u5FEA\u609A\u6DDE\u7AE6",
        "sou": "\u641C\u8258\u64DE\u55FD\u53DF\u55D6\u55FE\u998A\u6EB2\u98D5\u778D\u953C\u878B",
        "su": "\u82CF\u9165\u4FD7\u7D20\u901F\u7C9F\u50F3\u5851\u6EAF\u5BBF\u8BC9\u8083\u5919\u8C21\u850C\u55C9\u612B\u7C0C\u89EB\u7A23",
        "suan": "\u9178\u849C\u7B97",
        "sui": "\u867D\u968B\u968F\u7EE5\u9AD3\u788E\u5C81\u7A57\u9042\u96A7\u795F\u84D1\u51AB\u8C07\u6FC9\u9083\u71E7\u772D\u7762",
        "sun": "\u5B59\u635F\u7B0B\u836A\u72F2\u98E7\u69AB\u8DE3\u96BC",
        "suo": "\u68AD\u5506\u7F29\u7410\u7D22\u9501\u6240\u5522\u55E6\u5A11\u686B\u7743\u7FA7",
        "ta": "\u584C\u4ED6\u5B83\u5979\u5854\u736D\u631E\u8E4B\u8E0F\u95FC\u6EBB\u9062\u69BB\u6C93",
        "tai": "\u80CE\u82D4\u62AC\u53F0\u6CF0\u915E\u592A\u6001\u6C70\u90B0\u85B9\u80BD\u70B1\u949B\u8DC6\u9C90",
        "tan": "\u574D\u644A\u8D2A\u762B\u6EE9\u575B\u6A80\u75F0\u6F6D\u8C2D\u8C08\u5766\u6BEF\u8892\u78B3\u63A2\u53F9\u70AD\u90EF\u8548\u6619\u94BD\u952C\u8983",
        "tang": "\u6C64\u5858\u642A\u5802\u68E0\u819B\u5510\u7CD6\u50A5\u9967\u6E8F\u746D\u94F4\u9557\u8025\u8797\u87B3\u7FB0\u91A3",
        "thang": "\u5018\u8EBA\u6DCC",
        "theng": "\u8D9F\u70EB",
        "tao": "\u638F\u6D9B\u6ED4\u7EE6\u8404\u6843\u9003\u6DD8\u9676\u8BA8\u5957\u6311\u9F17\u5555\u97EC\u9955",
        "te": "\u7279",
        "teng": "\u85E4\u817E\u75BC\u8A8A\u6ED5",
        "ti": "\u68AF\u5254\u8E22\u9511\u63D0\u9898\u8E44\u557C\u4F53\u66FF\u568F\u60D5\u6D95\u5243\u5C49\u8351\u608C\u9016\u7EE8\u7F07\u9E48\u88FC\u918D",
        "tian": "\u5929\u6DFB\u586B\u7530\u751C\u606C\u8214\u8146\u63AD\u5FDD\u9617\u6B84\u754B\u94BF\u86BA",
        "tiao": "\u6761\u8FE2\u773A\u8DF3\u4F7B\u7967\u94EB\u7A95\u9F86\u9CA6",
        "tie": "\u8D34\u94C1\u5E16\u841C\u992E",
        "ting": "\u5385\u542C\u70C3\u6C40\u5EF7\u505C\u4EAD\u5EAD\u633A\u8247\u839B\u8476\u5A77\u6883\u8713\u9706",
        "tong": "\u901A\u6850\u916E\u77B3\u540C\u94DC\u5F64\u7AE5\u6876\u6345\u7B52\u7EDF\u75DB\u4F5F\u50EE\u4EDD\u833C\u55F5\u6078\u6F7C\u783C",
        "tou": "\u5077\u6295\u5934\u900F\u4EA0",
        "tu": "\u51F8\u79C3\u7A81\u56FE\u5F92\u9014\u6D82\u5C60\u571F\u5410\u5154\u580D\u837C\u83DF\u948D\u9174",
        "tuan": "\u6E4D\u56E2\u7583",
        "tui": "\u63A8\u9893\u817F\u8715\u892A\u9000\u5FD2\u717A",
        "tun": "\u541E\u5C6F\u81C0\u9968\u66BE\u8C5A\u7A80",
        "tuo": "\u62D6\u6258\u8131\u9E35\u9640\u9A6E\u9A7C\u692D\u59A5\u62D3\u553E\u4E47\u4F57\u5768\u5EB9\u6CB1\u67DD\u7823\u7BA8\u8204\u8DCE\u9F0D",
        "wa": "\u6316\u54C7\u86D9\u6D3C\u5A03\u74E6\u889C\u4F64\u5A32\u817D",
        "wai": "\u6B6A\u5916",
        "wan": "\u8C4C\u5F2F\u6E7E\u73A9\u987D\u4E38\u70F7\u5B8C\u7897\u633D\u665A\u7696\u60CB\u5B9B\u5A49\u4E07\u8155\u525C\u8284\u82CB\u83C0\u7EA8\u7EFE\u742C\u8118\u7579\u873F\u7BA2",
        "wang": "\u6C6A\u738B\u4EA1\u6789\u7F51\u5F80\u65FA\u671B\u5FD8\u5984\u7F54\u5C22\u60D8\u8F8B\u9B4D",
        "wei": "\u5A01\u5DCD\u5FAE\u5371\u97E6\u8FDD\u6845\u56F4\u552F\u60DF\u4E3A\u6F4D\u7EF4\u82C7\u840E\u59D4\u4F1F\u4F2A\u5C3E\u7EAC\u672A\u851A\u5473\u754F\u80C3\u5582\u9B4F\u4F4D\u6E2D\u8C13\u5C09\u6170\u536B\u502D\u504E\u8BFF\u9688\u8473\u8587\u5E0F\u5E37\u5D34\u5D6C\u7325\u732C\u95F1\u6CA9\u6D27\u6DA0\u9036\u5A13\u73AE\u97EA\u8ECE\u709C\u7168\u71A8\u75FF\u8249\u9C94",
        "wen": "\u761F\u6E29\u868A\u6587\u95FB\u7EB9\u543B\u7A33\u7D0A\u95EE\u520E\u6120\u960C\u6C76\u74BA\u97EB\u6B81\u96EF",
        "weng": "\u55E1\u7FC1\u74EE\u84CA\u8579",
        "wo": "\u631D\u8717\u6DA1\u7A9D\u6211\u65A1\u5367\u63E1\u6C83\u83B4\u5E44\u6E25\u674C\u809F\u9F8C",
        "wu": "\u5DEB\u545C\u94A8\u4E4C\u6C61\u8BEC\u5C4B\u65E0\u829C\u68A7\u543E\u5434\u6BCB\u6B66\u4E94\u6342\u5348\u821E\u4F0D\u4FAE\u575E\u620A\u96FE\u6664\u7269\u52FF\u52A1\u609F\u8BEF\u5140\u4EF5\u9622\u90AC\u572C\u82B4\u5E91\u6003\u5FE4\u6D6F\u5BE4\u8FD5\u59A9\u9A9B\u727E\u7110\u9E49\u9E5C\u8708\u92C8\u9F2F",
        "xi": "\u6614\u7199\u6790\u897F\u7852\u77FD\u6670\u563B\u5438\u9521\u727A\u7A00\u606F\u5E0C\u6089\u819D\u5915\u60DC\u7184\u70EF\u6EAA\u6C50\u7280\u6A84\u88AD\u5E2D\u4E60\u5AB3\u559C\u94E3\u6D17\u7CFB\u9699\u620F\u7EC6\u50D6\u516E\u96B0\u90D7\u831C\u8478\u84F0\u595A\u550F\u5F99\u9969\u960B\u6D60\u6DC5\u5C63\u5B09\u73BA\u6A28\u66E6\u89CB\u6B37\u71B9\u798A\u79A7\u94B8\u7699\u7A78\u8725\u87CB\u823E\u7FB2\u7C9E\u7FD5\u91AF\u9F37",
        "xia": "\u778E\u867E\u5323\u971E\u8F96\u6687\u5CE1\u4FA0\u72ED\u4E0B\u53A6\u590F\u5413\u6380\u846D\u55C4\u72CE\u9050\u7455\u7856\u7615\u7F45\u9EE0",
        "xian": "\u9528\u5148\u4ED9\u9C9C\u7EA4\u54B8\u8D24\u8854\u8237\u95F2\u6D8E\u5F26\u5ACC\u663E\u9669\u73B0\u732E\u53BF\u817A\u9985\u7FA1\u5BAA\u9677\u9650\u7EBF\u51BC\u85D3\u5C98\u7303\u66B9\u5A34\u6C19\u7946\u9E47\u75EB\u86AC\u7B45\u7C7C\u9170\u8DF9",
        "xiang": "\u76F8\u53A2\u9576\u9999\u7BB1\u8944\u6E58\u4E61\u7FD4\u7965\u8BE6\u60F3\u54CD\u4EAB\u9879\u5DF7\u6A61\u50CF\u5411\u8C61\u8297\u8459\u9977\u5EA0\u9AA7\u7F03\u87D3\u9C9E\u98E8",
        "xiao": "\u8427\u785D\u9704\u524A\u54EE\u56A3\u9500\u6D88\u5BB5\u6DC6\u6653\u5C0F\u5B5D\u6821\u8096\u5578\u7B11\u6548\u54D3\u54BB\u5D24\u6F47\u900D\u9A81\u7EE1\u67AD\u67B5\u7B71\u7BAB\u9B48",
        "xie": "\u6954\u4E9B\u6B47\u874E\u978B\u534F\u631F\u643A\u90AA\u659C\u80C1\u8C10\u5199\u68B0\u5378\u87F9\u61C8\u6CC4\u6CFB\u8C22\u5C51\u5055\u4EB5\u52F0\u71EE\u85A4\u64B7\u5EE8\u7023\u9082\u7EC1\u7F2C\u69AD\u698D\u6B59\u8E9E",
        "xin": "\u85AA\u82AF\u950C\u6B23\u8F9B\u65B0\u5FFB\u5FC3\u4FE1\u8845\u56DF\u99A8\u8398\u6B46\u94FD\u946B",
        "xing": "\u661F\u8165\u7329\u60FA\u5174\u5211\u578B\u5F62\u90A2\u884C\u9192\u5E78\u674F\u6027\u59D3\u9649\u8347\u8365\u64E4\u60BB\u784E",
        "xiong": "\u5144\u51F6\u80F8\u5308\u6C79\u96C4\u718A\u828E",
        "xiu": "\u4F11\u4FEE\u7F9E\u673D\u55C5\u9508\u79C0\u8896\u7EE3\u83A0\u5CAB\u9990\u5EA5\u9E3A\u8C85\u9AF9",
        "xu": "\u589F\u620C\u9700\u865A\u5618\u987B\u5F90\u8BB8\u84C4\u9157\u53D9\u65ED\u5E8F\u755C\u6064\u7D6E\u5A7F\u7EEA\u7EED\u8BB4\u8BE9\u5729\u84FF\u6035\u6D2B\u6E86\u987C\u6829\u7166\u7809\u76F1\u80E5\u7CC8\u9191",
        "xuan": "\u8F69\u55A7\u5BA3\u60AC\u65CB\u7384\u9009\u7663\u7729\u7EDA\u5107\u8C16\u8431\u63CE\u9994\u6CEB\u6D35\u6E32\u6F29\u7487\u6966\u6684\u70AB\u714A\u78B9\u94C9\u955F\u75C3",
        "xue": "\u9774\u859B\u5B66\u7A74\u96EA\u8840\u5671\u6CF6\u9CD5",
        "xun": "\u52CB\u718F\u5FAA\u65EC\u8BE2\u5BFB\u9A6F\u5DE1\u6B89\u6C5B\u8BAD\u8BAF\u900A\u8FC5\u5DFD\u57D9\u8340\u85B0\u5CCB\u5F87\u6D54\u66DB\u7AA8\u91BA\u9C9F",
        "ya": "\u538B\u62BC\u9E26\u9E2D\u5440\u4E2B\u82BD\u7259\u869C\u5D16\u8859\u6DAF\u96C5\u54D1\u4E9A\u8BB6\u4F22\u63E0\u5416\u5C88\u8FD3\u5A05\u740A\u6860\u6C29\u7811\u775A\u75D6",
        "yan": "\u7109\u54BD\u9609\u70DF\u6DF9\u76D0\u4E25\u7814\u8712\u5CA9\u5EF6\u8A00\u989C\u960E\u708E\u6CBF\u5944\u63A9\u773C\u884D\u6F14\u8273\u5830\u71D5\u538C\u781A\u96C1\u5501\u5F66\u7130\u5BB4\u8C1A\u9A8C\u53A3\u9765\u8D5D\u4FE8\u5043\u5156\u8BA0\u8C33\u90FE\u9122\u82AB\u83F8\u5D26\u6079\u95EB\u960F\u6D07\u6E6E\u6EDF\u598D\u5AE3\u7430\u664F\u80ED\u814C\u7131\u7F68\u7B75\u917D\u9B47\u990D\u9F39",
        "yang": "\u6B83\u592E\u9E2F\u79E7\u6768\u626C\u4F6F\u75A1\u7F8A\u6D0B\u9633\u6C27\u4EF0\u75D2\u517B\u6837\u6F3E\u5F89\u600F\u6CF1\u7080\u70CA\u6059\u86D8\u9785",
        "yao": "\u9080\u8170\u5996\u7476\u6447\u5C27\u9065\u7A91\u8C23\u59DA\u54AC\u8200\u836F\u8981\u8000\u592D\u723B\u5406\u5D3E\u5FAD\u7039\u5E7A\u73E7\u6773\u66DC\u80B4\u9E5E\u7A88\u7E47\u9CD0",
        "ye": "\u6930\u564E\u8036\u7237\u91CE\u51B6\u4E5F\u9875\u6396\u4E1A\u53F6\u66F3\u814B\u591C\u6DB2\u8C12\u90BA\u63F6\u9980\u6654\u70E8\u94D8",
        "yi": "\u4E00\u58F9\u533B\u63D6\u94F1\u4F9D\u4F0A\u8863\u9890\u5937\u9057\u79FB\u4EEA\u80F0\u7591\u6C82\u5B9C\u59E8\u5F5D\u6905\u8681\u501A\u5DF2\u4E59\u77E3\u4EE5\u827A\u6291\u6613\u9091\u5C79\u4EBF\u5F79\u81C6\u9038\u8084\u75AB\u4EA6\u88D4\u610F\u6BC5\u5FC6\u4E49\u76CA\u6EA2\u8BE3\u8BAE\u8C0A\u8BD1\u5F02\u7FFC\u7FCC\u7ECE\u5208\u5293\u4F7E\u8BD2\u572A\u572F\u57F8\u61FF\u82E1\u858F\u5F08\u5955\u6339\u5F0B\u5453\u54A6\u54BF\u566B\u5CC4\u5DB7\u7317\u9974\u603F\u6021\u6092\u6F2A\u8FE4\u9A7F\u7F22\u6BAA\u8D3B\u65D6\u71A0\u9487\u9552\u9571\u75CD\u7617\u7654\u7FCA\u8864\u8734\u8223\u7FBF\u7FF3\u914F\u9EDF",
        "yin": "\u8335\u836B\u56E0\u6BB7\u97F3\u9634\u59FB\u541F\u94F6\u6DEB\u5BC5\u996E\u5C39\u5F15\u9690\u5370\u80E4\u911E\u5819\u831A\u5591\u72FA\u5924\u6C24\u94DF\u763E\u8693\u972A\u9F88",
        "ying": "\u82F1\u6A31\u5A74\u9E70\u5E94\u7F28\u83B9\u8424\u8425\u8367\u8747\u8FCE\u8D62\u76C8\u5F71\u9896\u786C\u6620\u5B34\u90E2\u8314\u83BA\u8426\u6484\u5624\u81BA\u6EE2\u6F46\u701B\u745B\u748E\u6979\u9E66\u763F\u988D\u7F42",
        "yo": "\u54DF\u5537",
        "yong": "\u62E5\u4F63\u81C3\u75C8\u5EB8\u96CD\u8E0A\u86F9\u548F\u6CF3\u6D8C\u6C38\u607F\u52C7\u7528\u4FD1\u58C5\u5889\u6175\u9095\u955B\u752C\u9CD9\u9954",
        "you": "\u5E7D\u4F18\u60A0\u5FE7\u5C24\u7531\u90AE\u94C0\u72B9\u6CB9\u6E38\u9149\u6709\u53CB\u53F3\u4F51\u91C9\u8BF1\u53C8\u5E7C\u5363\u6538\u4F91\u83B8\u5466\u56FF\u5BA5\u67DA\u7337\u7256\u94D5\u75A3\u8763\u9C7F\u9EDD\u9F2C",
        "yu": "\u8FC2\u6DE4\u4E8E\u76C2\u6986\u865E\u611A\u8206\u4F59\u4FDE\u903E\u9C7C\u6109\u6E1D\u6E14\u9685\u4E88\u5A31\u96E8\u4E0E\u5C7F\u79B9\u5B87\u8BED\u7FBD\u7389\u57DF\u828B\u90C1\u5401\u9047\u55BB\u5CEA\u5FA1\u6108\u6B32\u72F1\u80B2\u8A89\u6D74\u5BD3\u88D5\u9884\u8C6B\u9A6D\u79BA\u6BD3\u4F1B\u4FE3\u8C00\u8C15\u8438\u84E3\u63C4\u5581\u5704\u5709\u5D5B\u72F3\u996B\u5EBE\u9608\u59AA\u59A4\u7EA1\u745C\u6631\u89CE\u8174\u6B24\u65BC\u715C\u71E0\u807F\u94B0\u9E46\u7610\u7600\u7AB3\u8753\u7AFD\u8201\u96E9\u9F89",
        "yuan": "\u9E33\u6E0A\u51A4\u5143\u57A3\u8881\u539F\u63F4\u8F95\u56ED\u5458\u5706\u733F\u6E90\u7F18\u8FDC\u82D1\u613F\u6028\u9662\u586C\u6C85\u5A9B\u7457\u6A7C\u7230\u7722\u9E22\u8788\u9F0B",
        "yue": "\u66F0\u7EA6\u8D8A\u8DC3\u94A5\u5CB3\u7CA4\u6708\u60A6\u9605\u9FA0\u6A3E\u5216\u94BA",
        "yun": "\u8018\u4E91\u90E7\u5300\u9668\u5141\u8FD0\u8574\u915D\u6655\u97F5\u5B55\u90D3\u82B8\u72C1\u607D\u7EAD\u6B92\u6600\u6C32",
        "za": "\u531D\u7838\u6742\u62F6\u5482",
        "zai": "\u683D\u54C9\u707E\u5BB0\u8F7D\u518D\u5728\u54B1\u5D3D\u753E",
        "zan": "\u6512\u6682\u8D5E\u74D2\u661D\u7C2A\u7CCC\u8DB1\u933E",
        "zang": "\u8D43\u810F\u846C\u5958\u6215\u81E7",
        "zao": "\u906D\u7CDF\u51FF\u85FB\u67A3\u65E9\u6FA1\u86A4\u8E81\u566A\u9020\u7682\u7076\u71E5\u5523\u7F2B",
        "ze": "\u8D23\u62E9\u5219\u6CFD\u4EC4\u8D5C\u5567\u8FEE\u6603\u7B2E\u7BA6\u8234",
        "zei": "\u8D3C",
        "zen": "\u600E\u8C2E",
        "zeng": "\u589E\u618E\u66FE\u8D60\u7F2F\u7511\u7F7E\u9503",
        "zha": "\u624E\u55B3\u6E23\u672D\u8F67\u94E1\u95F8\u7728\u6805\u69A8\u548B\u4E4D\u70B8\u8BC8\u63F8\u5412\u54A4\u54F3\u600D\u781F\u75C4\u86B1\u9F44",
        "zhai": "\u6458\u658B\u5B85\u7A84\u503A\u5BE8\u7826",
        "zhan": "\u77BB\u6BE1\u8A79\u7C98\u6CBE\u76CF\u65A9\u8F97\u5D2D\u5C55\u8638\u6808\u5360\u6218\u7AD9\u6E5B\u7EFD\u8C35\u640C\u65C3",
        "zhang": "\u6A1F\u7AE0\u5F70\u6F33\u5F20\u638C\u6DA8\u6756\u4E08\u5E10\u8D26\u4ED7\u80C0\u7634\u969C\u4EC9\u9123\u5E5B\u5D82\u7350\u5ADC\u748B\u87D1",
        "zhao": "\u62DB\u662D\u627E\u6CBC\u8D75\u7167\u7F69\u5146\u8087\u53EC\u722A\u8BCF\u68F9\u948A\u7B0A",
        "zhe": "\u906E\u6298\u54F2\u86F0\u8F99\u8005\u9517\u8517\u8FD9\u6D59\u8C2A\u966C\u67D8\u8F84\u78D4\u9E67\u891A\u8707\u8D6D",
        "zhen": "\u73CD\u659F\u771F\u7504\u7827\u81FB\u8D1E\u9488\u4FA6\u6795\u75B9\u8BCA\u9707\u632F\u9547\u9635\u7F1C\u6862\u699B\u8F78\u8D48\u80D7\u6715\u796F\u755B\u9E29",
        "zheng": "\u84B8\u6323\u7741\u5F81\u72F0\u4E89\u6014\u6574\u62EF\u6B63\u653F\u5E27\u75C7\u90D1\u8BC1\u8BE4\u5CE5\u94B2\u94EE\u7B5D",
        "zhi": "\u829D\u679D\u652F\u5431\u8718\u77E5\u80A2\u8102\u6C41\u4E4B\u7EC7\u804C\u76F4\u690D\u6B96\u6267\u503C\u4F84\u5740\u6307\u6B62\u8DBE\u53EA\u65E8\u7EB8\u5FD7\u631A\u63B7\u81F3\u81F4\u7F6E\u5E1C\u5CD9\u5236\u667A\u79E9\u7A1A\u8D28\u7099\u75D4\u6EDE\u6CBB\u7A92\u536E\u965F\u90C5\u57F4\u82B7\u646D\u5E19\u5FEE\u5F58\u54AB\u9A98\u6809\u67B3\u6800\u684E\u8F75\u8F7E\u6534\u8D3D\u81A3\u7949\u7957\u9EF9\u96C9\u9E37\u75E3\u86ED\u7D77\u916F\u8DD6\u8E2C\u8E2F\u8C78\u89EF",
        "zhong": "\u4E2D\u76C5\u5FE0\u949F\u8877\u7EC8\u79CD\u80BF\u91CD\u4EF2\u4F17\u51A2\u953A\u87BD\u8202\u822F\u8E35",
        "zhou": "\u821F\u5468\u5DDE\u6D32\u8BCC\u7CA5\u8F74\u8098\u5E1A\u5492\u76B1\u5B99\u663C\u9AA4\u5544\u7740\u501C\u8BF9\u836E\u9B3B\u7EA3\u80C4\u78A1\u7C40\u8233\u914E\u9CB7",
        "zhu": "\u73E0\u682A\u86DB\u6731\u732A\u8BF8\u8BDB\u9010\u7AF9\u70DB\u716E\u62C4\u77A9\u5631\u4E3B\u8457\u67F1\u52A9\u86C0\u8D2E\u94F8\u7B51\u4F4F\u6CE8\u795D\u9A7B\u4F2B\u4F8F\u90BE\u82CE\u8331\u6D19\u6E1A\u6F74\u9A7A\u677C\u69E0\u6A65\u70B7\u94E2\u75B0\u7603\u86B0\u7AFA\u7BB8\u7FE5\u8E85\u9E88",
        "zhua": "\u6293",
        "zhuai": "\u62FD",
        "zhuan": "\u4E13\u7816\u8F6C\u64B0\u8D5A\u7BC6\u629F\u556D\u989B",
        "zhuang": "\u6869\u5E84\u88C5\u5986\u649E\u58EE\u72B6\u4E2C",
        "zhui": "\u690E\u9525\u8FFD\u8D58\u5760\u7F00\u8411\u9A93\u7F12",
        "zhun": "\u8C06\u51C6",
        "zhuo": "\u6349\u62D9\u5353\u684C\u7422\u8301\u914C\u707C\u6D4A\u502C\u8BFC\u5EF4\u855E\u64E2\u555C\u6D5E\u6DBF\u6753\u712F\u799A\u65AB",
        "zi": "\u5179\u54A8\u8D44\u59FF\u6ECB\u6DC4\u5B5C\u7D2B\u4ED4\u7C7D\u6ED3\u5B50\u81EA\u6E0D\u5B57\u8C18\u5D6B\u59CA\u5B73\u7F01\u6893\u8F8E\u8D40\u6063\u7726\u9531\u79ED\u8014\u7B2B\u7CA2\u89DC\u8A3E\u9CBB\u9AED",
        "zong": "\u9B03\u68D5\u8E2A\u5B97\u7EFC\u603B\u7EB5\u8159\u7CBD",
        "zou": "\u90B9\u8D70\u594F\u63CD\u9139\u9CB0",
        "zu": "\u79DF\u8DB3\u5352\u65CF\u7956\u8BC5\u963B\u7EC4\u4FCE\u83F9\u5550\u5F82\u9A75\u8E74",
        "zuan": "\u94BB\u7E82\u6525\u7F35",
        "zui": "\u5634\u9189\u6700\u7F6A",
        "zun": "\u5C0A\u9075\u6499\u6A3D\u9CDF",
        "zuo": "\u6628\u5DE6\u4F50\u67DE\u505A\u4F5C\u5750\u5EA7\u961D\u963C\u80D9\u795A\u9162",
        "cou": "\u85AE\u6971\u8F8F\u8160",
        "nang": "\u652E\u54DD\u56D4\u9995\u66E9",
        "o": "\u5594",
        "dia": "\u55F2",
        "chuai": "\u562C\u81AA\u8E39",
        "cen": "\u5C91\u6D94",
        "diu": "\u94E5",
        "nou": "\u8028",
        "fou": "\u7F36",
        "bia": "\u9ADF" };

      this.polyphone = (_this$polyphone = {
        "19969": "DZ",
        "19975": "WM",
        "19988": "QJ",
        "20048": "YL",
        "20056": "SC",
        "20060": "NM",
        "20094": "QG",
        "20127": "QJ",
        "20167": "QC",
        "20193": "YG",
        "20250": "KH",
        "20256": "ZC",
        "20282": "SC",
        "20285": "QJG",
        "20291": "TD",
        "20314": "YD",
        "20340": "NE",
        "20375": "TD",
        "20389": "YJ",
        "20391": "CZ",
        "20415": "PB",
        "20446": "YS",
        "20447": "SQ",
        "20504": "TC",
        "20608": "KG",
        "20854": "QJ",
        "20857": "ZC",
        "20911": "PF" }, _defineProperty(_this$polyphone, "20504",
      "TC"), _defineProperty(_this$polyphone, "20608",
      "KG"), _defineProperty(_this$polyphone, "20854",
      "QJ"), _defineProperty(_this$polyphone, "20857",
      "ZC"), _defineProperty(_this$polyphone, "20911",
      "PF"), _defineProperty(_this$polyphone,
      "20985", "AW"), _defineProperty(_this$polyphone,
      "21032", "PB"), _defineProperty(_this$polyphone,
      "21048", "XQ"), _defineProperty(_this$polyphone,
      "21049", "SC"), _defineProperty(_this$polyphone,
      "21089", "YS"), _defineProperty(_this$polyphone,
      "21119", "JC"), _defineProperty(_this$polyphone,
      "21242", "SB"), _defineProperty(_this$polyphone,
      "21273", "SC"), _defineProperty(_this$polyphone,
      "21305", "YP"), _defineProperty(_this$polyphone,
      "21306", "QO"), _defineProperty(_this$polyphone,
      "21330", "ZC"), _defineProperty(_this$polyphone,
      "21333", "SDC"), _defineProperty(_this$polyphone,
      "21345", "QK"), _defineProperty(_this$polyphone,
      "21378", "CA"), _defineProperty(_this$polyphone,
      "21397", "SC"), _defineProperty(_this$polyphone,
      "21414", "XS"), _defineProperty(_this$polyphone,
      "21442", "SC"), _defineProperty(_this$polyphone,
      "21477", "JG"), _defineProperty(_this$polyphone,
      "21480", "TD"), _defineProperty(_this$polyphone,
      "21484", "ZS"), _defineProperty(_this$polyphone,
      "21494", "YX"), _defineProperty(_this$polyphone,
      "21505", "YX"), _defineProperty(_this$polyphone,
      "21512", "HG"), _defineProperty(_this$polyphone,
      "21523", "XH"), _defineProperty(_this$polyphone,
      "21537", "PB"), _defineProperty(_this$polyphone,
      "21542", "PF"), _defineProperty(_this$polyphone,
      "21549", "KH"), _defineProperty(_this$polyphone,
      "21571", "E"), _defineProperty(_this$polyphone,
      "21574", "DA"), _defineProperty(_this$polyphone,
      "21588", "TD"), _defineProperty(_this$polyphone,
      "21589", "O"), _defineProperty(_this$polyphone,
      "21618", "ZC"), _defineProperty(_this$polyphone,
      "21621", "KHA"), _defineProperty(_this$polyphone,
      "21632", "ZJ"), _defineProperty(_this$polyphone,
      "21654", "KG"), _defineProperty(_this$polyphone,
      "21679", "LKG"), _defineProperty(_this$polyphone,
      "21683", "KH"), _defineProperty(_this$polyphone,
      "21710", "A"), _defineProperty(_this$polyphone,
      "21719", "YH"), _defineProperty(_this$polyphone,
      "21734", "WOE"), _defineProperty(_this$polyphone,
      "21769", "A"), _defineProperty(_this$polyphone,
      "21780", "WN"), _defineProperty(_this$polyphone,
      "21804", "XH"), _defineProperty(_this$polyphone,
      "21834", "A"), _defineProperty(_this$polyphone,
      "21899", "ZD"), _defineProperty(_this$polyphone,
      "21903", "RN"), _defineProperty(_this$polyphone,
      "21908", "WO"), _defineProperty(_this$polyphone,
      "21939", "ZC"), _defineProperty(_this$polyphone,
      "21956", "SA"), _defineProperty(_this$polyphone,
      "21964", "YA"), _defineProperty(_this$polyphone,
      "21970", "TD"), _defineProperty(_this$polyphone,
      "22003", "A"), _defineProperty(_this$polyphone,
      "22031", "JG"), _defineProperty(_this$polyphone,
      "22040", "XS"), _defineProperty(_this$polyphone,
      "22060", "ZC"), _defineProperty(_this$polyphone,
      "22066", "ZC"), _defineProperty(_this$polyphone,
      "22079", "MH"), _defineProperty(_this$polyphone,
      "22129", "XJ"), _defineProperty(_this$polyphone,
      "22179", "XA"), _defineProperty(_this$polyphone,
      "22237", "NJ"), _defineProperty(_this$polyphone,
      "22244", "TD"), _defineProperty(_this$polyphone,
      "22280", "JQ"), _defineProperty(_this$polyphone,
      "22300", "YH"), _defineProperty(_this$polyphone,
      "22313", "XW"), _defineProperty(_this$polyphone,
      "22331", "YQ"), _defineProperty(_this$polyphone,
      "22343", "YJ"), _defineProperty(_this$polyphone,
      "22351", "PH"), _defineProperty(_this$polyphone,
      "22395", "DC"), _defineProperty(_this$polyphone,
      "22412", "TD"), _defineProperty(_this$polyphone,
      "22484", "PB"), _defineProperty(_this$polyphone,
      "22500", "PB"), _defineProperty(_this$polyphone,
      "22534", "ZD"), _defineProperty(_this$polyphone,
      "22549", "DH"), _defineProperty(_this$polyphone,
      "22561", "PB"), _defineProperty(_this$polyphone,
      "22612", "TD"), _defineProperty(_this$polyphone,
      "22771", "KQ"), _defineProperty(_this$polyphone,
      "22831", "HB"), _defineProperty(_this$polyphone,
      "22841", "JG"), _defineProperty(_this$polyphone,
      "22855", "QJ"), _defineProperty(_this$polyphone,
      "22865", "XQ"), _defineProperty(_this$polyphone,
      "23013", "ML"), _defineProperty(_this$polyphone,
      "23081", "WM"), _defineProperty(_this$polyphone,
      "23487", "SX"), _defineProperty(_this$polyphone,
      "23558", "QJ"), _defineProperty(_this$polyphone,
      "23561", "YW"), _defineProperty(_this$polyphone,
      "23586", "YW"), _defineProperty(_this$polyphone,
      "23614", "YW"), _defineProperty(_this$polyphone,
      "23615", "SN"), _defineProperty(_this$polyphone,
      "23631", "PB"), _defineProperty(_this$polyphone,
      "23646", "ZS"), _defineProperty(_this$polyphone,
      "23663", "ZT"), _defineProperty(_this$polyphone,
      "23673", "YG"), _defineProperty(_this$polyphone,
      "23762", "TD"), _defineProperty(_this$polyphone,
      "23769", "ZS"), _defineProperty(_this$polyphone,
      "23780", "QJ"), _defineProperty(_this$polyphone,
      "23884", "QK"), _defineProperty(_this$polyphone,
      "24055", "XH"), _defineProperty(_this$polyphone,
      "24113", "DC"), _defineProperty(_this$polyphone,
      "24162", "ZC"), _defineProperty(_this$polyphone,
      "24191", "GA"), _defineProperty(_this$polyphone,
      "24273", "QJ"), _defineProperty(_this$polyphone,
      "24324", "NL"), _defineProperty(_this$polyphone,
      "24377", "TD"), _defineProperty(_this$polyphone,
      "24378", "QJ"), _defineProperty(_this$polyphone,
      "24439", "PF"), _defineProperty(_this$polyphone,
      "24554", "ZS"), _defineProperty(_this$polyphone,
      "24683", "TD"), _defineProperty(_this$polyphone,
      "24694", "WE"), _defineProperty(_this$polyphone,
      "24733", "LK"), _defineProperty(_this$polyphone,
      "24925", "TN"), _defineProperty(_this$polyphone,
      "25094", "ZG"), _defineProperty(_this$polyphone,
      "25100", "XQ"), _defineProperty(_this$polyphone,
      "25103", "XH"), _defineProperty(_this$polyphone,
      "25153", "PB"), _defineProperty(_this$polyphone,
      "25170", "PB"), _defineProperty(_this$polyphone,
      "25179", "KG"), _defineProperty(_this$polyphone,
      "25203", "PB"), _defineProperty(_this$polyphone,
      "25240", "ZS"), _defineProperty(_this$polyphone,
      "25282", "FB"), _defineProperty(_this$polyphone,
      "25303", "NA"), _defineProperty(_this$polyphone,
      "25324", "KG"), _defineProperty(_this$polyphone,
      "25341", "ZY"), _defineProperty(_this$polyphone,
      "25373", "WZ"), _defineProperty(_this$polyphone,
      "25375", "XJ"), _defineProperty(_this$polyphone,
      "25384", "A"), _defineProperty(_this$polyphone,
      "25457", "A"), _defineProperty(_this$polyphone,
      "25528", "SD"), _defineProperty(_this$polyphone,
      "25530", "SC"), _defineProperty(_this$polyphone,
      "25552", "TD"), _defineProperty(_this$polyphone,
      "25774", "ZC"), _defineProperty(_this$polyphone,
      "25874", "ZC"), _defineProperty(_this$polyphone,
      "26044", "YW"), _defineProperty(_this$polyphone,
      "26080", "WM"), _defineProperty(_this$polyphone,
      "26292", "PB"), _defineProperty(_this$polyphone,
      "26333", "PB"), _defineProperty(_this$polyphone,
      "26355", "ZY"), _defineProperty(_this$polyphone,
      "26366", "CZ"), _defineProperty(_this$polyphone,
      "26397", "ZC"), _defineProperty(_this$polyphone,
      "26399", "QJ"), _defineProperty(_this$polyphone,
      "26415", "ZS"), _defineProperty(_this$polyphone,
      "26451", "SB"), _defineProperty(_this$polyphone,
      "26526", "ZC"), _defineProperty(_this$polyphone,
      "26552", "JG"), _defineProperty(_this$polyphone,
      "26561", "TD"), _defineProperty(_this$polyphone,
      "26588", "JG"), _defineProperty(_this$polyphone,
      "26597", "CZ"), _defineProperty(_this$polyphone,
      "26629", "ZS"), _defineProperty(_this$polyphone,
      "26638", "YL"), _defineProperty(_this$polyphone,
      "26646", "XQ"), _defineProperty(_this$polyphone,
      "26653", "KG"), _defineProperty(_this$polyphone,
      "26657", "XJ"), _defineProperty(_this$polyphone,
      "26727", "HG"), _defineProperty(_this$polyphone,
      "26894", "ZC"), _defineProperty(_this$polyphone,
      "26937", "ZS"), _defineProperty(_this$polyphone,
      "26946", "ZC"), _defineProperty(_this$polyphone,
      "26999", "KJ"), _defineProperty(_this$polyphone,
      "27099", "KJ"), _defineProperty(_this$polyphone,
      "27449", "YQ"), _defineProperty(_this$polyphone,
      "27481", "XS"), _defineProperty(_this$polyphone,
      "27542", "ZS"), _defineProperty(_this$polyphone,
      "27663", "ZS"), _defineProperty(_this$polyphone,
      "27748", "TS"), _defineProperty(_this$polyphone,
      "27784", "SC"), _defineProperty(_this$polyphone,
      "27788", "ZD"), _defineProperty(_this$polyphone,
      "27795", "TD"), _defineProperty(_this$polyphone,
      "27812", "O"), _defineProperty(_this$polyphone,
      "27850", "PB"), _defineProperty(_this$polyphone,
      "27852", "MB"), _defineProperty(_this$polyphone,
      "27895", "SL"), _defineProperty(_this$polyphone,
      "27898", "PL"), _defineProperty(_this$polyphone,
      "27973", "QJ"), _defineProperty(_this$polyphone,
      "27981", "KH"), _defineProperty(_this$polyphone,
      "27986", "HX"), _defineProperty(_this$polyphone,
      "27994", "XJ"), _defineProperty(_this$polyphone,
      "28044", "YC"), _defineProperty(_this$polyphone,
      "28065", "WG"), _defineProperty(_this$polyphone,
      "28177", "SM"), _defineProperty(_this$polyphone,
      "28267", "QJ"), _defineProperty(_this$polyphone,
      "28291", "KH"), _defineProperty(_this$polyphone,
      "28337", "ZQ"), _defineProperty(_this$polyphone,
      "28463", "TL"), _defineProperty(_this$polyphone,
      "28548", "DC"), _defineProperty(_this$polyphone,
      "28601", "TD"), _defineProperty(_this$polyphone,
      "28689", "PB"), _defineProperty(_this$polyphone,
      "28805", "JG"), _defineProperty(_this$polyphone,
      "28820", "QG"), _defineProperty(_this$polyphone,
      "28846", "PB"), _defineProperty(_this$polyphone,
      "28952", "TD"), _defineProperty(_this$polyphone,
      "28975", "ZC"), _defineProperty(_this$polyphone,
      "29100", "A"), _defineProperty(_this$polyphone,
      "29325", "QJ"), _defineProperty(_this$polyphone,
      "29575", "SL"), _defineProperty(_this$polyphone,
      "29602", "FB"), _defineProperty(_this$polyphone,
      "30010", "TD"), _defineProperty(_this$polyphone,
      "30044", "CX"), _defineProperty(_this$polyphone,
      "30058", "PF"), _defineProperty(_this$polyphone,
      "30091", "YSP"), _defineProperty(_this$polyphone,
      "30111", "YN"), _defineProperty(_this$polyphone,
      "30229", "XJ"), _defineProperty(_this$polyphone,
      "30427", "SC"), _defineProperty(_this$polyphone,
      "30465", "SX"), _defineProperty(_this$polyphone,
      "30631", "YQ"), _defineProperty(_this$polyphone,
      "30655", "QJ"), _defineProperty(_this$polyphone,
      "30684", "QJG"), _defineProperty(_this$polyphone,
      "30707", "SD"), _defineProperty(_this$polyphone,
      "30729", "XH"), _defineProperty(_this$polyphone,
      "30796", "LG"), _defineProperty(_this$polyphone,
      "30917", "PB"), _defineProperty(_this$polyphone,
      "31074", "NM"), _defineProperty(_this$polyphone,
      "31085", "JZ"), _defineProperty(_this$polyphone,
      "31109", "SC"), _defineProperty(_this$polyphone,
      "31181", "ZC"), _defineProperty(_this$polyphone,
      "31192", "MLB"), _defineProperty(_this$polyphone,
      "31293", "JQ"), _defineProperty(_this$polyphone,
      "31400", "YX"), _defineProperty(_this$polyphone,
      "31584", "YJ"), _defineProperty(_this$polyphone,
      "31896", "ZN"), _defineProperty(_this$polyphone,
      "31909", "ZY"), _defineProperty(_this$polyphone,
      "31995", "XJ"), _defineProperty(_this$polyphone,
      "32321", "PF"), _defineProperty(_this$polyphone,
      "32327", "ZY"), _defineProperty(_this$polyphone,
      "32418", "HG"), _defineProperty(_this$polyphone,
      "32420", "XQ"), _defineProperty(_this$polyphone,
      "32421", "HG"), _defineProperty(_this$polyphone,
      "32438", "LG"), _defineProperty(_this$polyphone,
      "32473", "GJ"), _defineProperty(_this$polyphone,
      "32488", "TD"), _defineProperty(_this$polyphone,
      "32521", "QJ"), _defineProperty(_this$polyphone,
      "32527", "PB"), _defineProperty(_this$polyphone,
      "32562", "ZSQ"), _defineProperty(_this$polyphone,
      "32564", "JZ"), _defineProperty(_this$polyphone,
      "32735", "ZD"), _defineProperty(_this$polyphone,
      "32793", "PB"), _defineProperty(_this$polyphone,
      "33071", "PF"), _defineProperty(_this$polyphone,
      "33098", "XL"), _defineProperty(_this$polyphone,
      "33100", "YA"), _defineProperty(_this$polyphone,
      "33152", "PB"), _defineProperty(_this$polyphone,
      "33261", "CX"), _defineProperty(_this$polyphone,
      "33324", "BP"), _defineProperty(_this$polyphone,
      "33333", "TD"), _defineProperty(_this$polyphone,
      "33406", "YA"), _defineProperty(_this$polyphone,
      "33426", "WM"), _defineProperty(_this$polyphone,
      "33432", "PB"), _defineProperty(_this$polyphone,
      "33445", "JG"), _defineProperty(_this$polyphone,
      "33486", "ZN"), _defineProperty(_this$polyphone,
      "33493", "TS"), _defineProperty(_this$polyphone,
      "33507", "QJ"), _defineProperty(_this$polyphone,
      "33540", "QJ"), _defineProperty(_this$polyphone,
      "33544", "ZC"), _defineProperty(_this$polyphone,
      "33564", "XQ"), _defineProperty(_this$polyphone,
      "33617", "YT"), _defineProperty(_this$polyphone,
      "33632", "QJ"), _defineProperty(_this$polyphone,
      "33636", "XH"), _defineProperty(_this$polyphone,
      "33637", "YX"), _defineProperty(_this$polyphone,
      "33694", "WG"), _defineProperty(_this$polyphone,
      "33705", "PF"), _defineProperty(_this$polyphone,
      "33728", "YW"), _defineProperty(_this$polyphone,
      "33882", "SR"), _defineProperty(_this$polyphone,
      "34067", "WM"), _defineProperty(_this$polyphone,
      "34074", "YW"), _defineProperty(_this$polyphone,
      "34121", "QJ"), _defineProperty(_this$polyphone,
      "34255", "ZC"), _defineProperty(_this$polyphone,
      "34259", "XL"), _defineProperty(_this$polyphone,
      "34425", "JH"), _defineProperty(_this$polyphone,
      "34430", "XH"), _defineProperty(_this$polyphone,
      "34485", "KH"), _defineProperty(_this$polyphone,
      "34503", "YS"), _defineProperty(_this$polyphone,
      "34532", "HG"), _defineProperty(_this$polyphone,
      "34552", "XS"), _defineProperty(_this$polyphone,
      "34558", "YE"), _defineProperty(_this$polyphone,
      "34593", "ZL"), _defineProperty(_this$polyphone,
      "34660", "YQ"), _defineProperty(_this$polyphone,
      "34892", "XH"), _defineProperty(_this$polyphone,
      "34928", "SC"), _defineProperty(_this$polyphone,
      "34999", "QJ"), _defineProperty(_this$polyphone,
      "35048", "PB"), _defineProperty(_this$polyphone,
      "35059", "SC"), _defineProperty(_this$polyphone,
      "35098", "ZC"), _defineProperty(_this$polyphone,
      "35203", "TQ"), _defineProperty(_this$polyphone,
      "35265", "JX"), _defineProperty(_this$polyphone,
      "35299", "JX"), _defineProperty(_this$polyphone,
      "35782", "SZ"), _defineProperty(_this$polyphone,
      "35828", "YS"), _defineProperty(_this$polyphone,
      "35830", "E"), _defineProperty(_this$polyphone,
      "35843", "TD"), _defineProperty(_this$polyphone,
      "35895", "YG"), _defineProperty(_this$polyphone,
      "35977", "MH"), _defineProperty(_this$polyphone,
      "36158", "JG"), _defineProperty(_this$polyphone,
      "36228", "QJ"), _defineProperty(_this$polyphone,
      "36426", "XQ"), _defineProperty(_this$polyphone,
      "36466", "DC"), _defineProperty(_this$polyphone,
      "36710", "JC"), _defineProperty(_this$polyphone,
      "36711", "ZYG"), _defineProperty(_this$polyphone,
      "36767", "PB"), _defineProperty(_this$polyphone,
      "36866", "SK"), _defineProperty(_this$polyphone,
      "36951", "YW"), _defineProperty(_this$polyphone,
      "37034", "YX"), _defineProperty(_this$polyphone,
      "37063", "XH"), _defineProperty(_this$polyphone,
      "37218", "ZC"), _defineProperty(_this$polyphone,
      "37325", "ZC"), _defineProperty(_this$polyphone,
      "38063", "PB"), _defineProperty(_this$polyphone,
      "38079", "TD"), _defineProperty(_this$polyphone,
      "38085", "QY"), _defineProperty(_this$polyphone,
      "38107", "DC"), _defineProperty(_this$polyphone,
      "38116", "TD"), _defineProperty(_this$polyphone,
      "38123", "YD"), _defineProperty(_this$polyphone,
      "38224", "HG"), _defineProperty(_this$polyphone,
      "38241", "XTC"), _defineProperty(_this$polyphone,
      "38271", "ZC"), _defineProperty(_this$polyphone,
      "38415", "YE"), _defineProperty(_this$polyphone,
      "38426", "KH"), _defineProperty(_this$polyphone,
      "38461", "YD"), _defineProperty(_this$polyphone,
      "38463", "AE"), _defineProperty(_this$polyphone,
      "38466", "PB"), _defineProperty(_this$polyphone,
      "38477", "XJ"), _defineProperty(_this$polyphone,
      "38518", "YT"), _defineProperty(_this$polyphone,
      "38551", "WK"), _defineProperty(_this$polyphone,
      "38585", "ZC"), _defineProperty(_this$polyphone,
      "38704", "XS"), _defineProperty(_this$polyphone,
      "38739", "LJ"), _defineProperty(_this$polyphone,
      "38761", "GJ"), _defineProperty(_this$polyphone,
      "38808", "SQ"), _defineProperty(_this$polyphone,
      "39048", "JG"), _defineProperty(_this$polyphone,
      "39049", "XJ"), _defineProperty(_this$polyphone,
      "39052", "HG"), _defineProperty(_this$polyphone,
      "39076", "CZ"), _defineProperty(_this$polyphone,
      "39271", "XT"), _defineProperty(_this$polyphone,
      "39534", "TD"), _defineProperty(_this$polyphone,
      "39552", "TD"), _defineProperty(_this$polyphone,
      "39584", "PB"), _defineProperty(_this$polyphone,
      "39647", "SB"), _defineProperty(_this$polyphone,
      "39730", "LG"), _defineProperty(_this$polyphone,
      "39748", "TPB"), _defineProperty(_this$polyphone,
      "40109", "ZQ"), _defineProperty(_this$polyphone,
      "40479", "ND"), _defineProperty(_this$polyphone,
      "40516", "HG"), _defineProperty(_this$polyphone,
      "40536", "HG"), _defineProperty(_this$polyphone,
      "40583", "QJ"), _defineProperty(_this$polyphone,
      "40765", "YQ"), _defineProperty(_this$polyphone,
      "40784", "QJ"), _defineProperty(_this$polyphone,
      "40840", "YK"), _defineProperty(_this$polyphone,
      "40863", "QJG"), _this$polyphone);

    },

    // æå–æ‹¼éŸ³, è¿”å›žé¦–å­—æ¯å¤§å†™å½¢å¼
    getFullChars: function getFullChars(str) {
      var result = '',
      name;
      var reg = new RegExp('[a-zA-Z0-9\- ]');
      for (var i = 0, len = str.length; i < len; i++) {
        var ch = str.substr(i, 1),
        unicode = ch.charCodeAt(0);
        if (unicode > 40869 || unicode < 19968) {
          result += ch;
        } else {
          name = this._getFullChar(ch);
          if (name !== false) {
            result += name;
          }
        }
      }
      return result;
    },

    // æå–é¦–å­—æ¯ï¼Œè¿”å›žå¤§å†™å½¢å¼
    getCamelChars: function getCamelChars(str) {
      if (typeof str !== 'string')
      throw new Error(-1, "å‡½æ•°getFisrtéœ€è¦å­—ç¬¦ä¸²ç±»åž‹å‚æ•°!");
      var chars = []; //ä¿å­˜ä¸­é—´ç»“æžœçš„æ•°ç»„
      for (var i = 0, len = str.length; i < len; i++) {
        //èŽ·å¾—unicodeç 
        var ch = str.charAt(i);
        //æ£€æŸ¥è¯¥unicodeç æ˜¯å¦åœ¨å¤„ç†èŒƒå›´ä¹‹å†…,åœ¨åˆ™è¿”å›žè¯¥ç å¯¹æ˜ æ±‰å­—çš„æ‹¼éŸ³é¦–å­—æ¯,ä¸åœ¨åˆ™è°ƒç”¨å…¶å®ƒå‡½æ•°å¤„ç†
        chars.push(this._getChar(ch));
      }
      //å¤„ç†arrResult,è¿”å›žæ‰€æœ‰å¯èƒ½çš„æ‹¼éŸ³é¦–å­—æ¯ä¸²æ•°ç»„
      return this._getResult(chars);
    },


    // æå–æ‹¼éŸ³
    _getFullChar: function _getFullChar(str) {
      for (var key in this.full_dict) {
        if (-1 !== this.full_dict[key].indexOf(str)) {
          return this._capitalize(key);
          break;
        }
      }
      return false;
    },

    // é¦–å­—æ¯å¤§å†™
    _capitalize: function _capitalize(str) {
      if (str.length > 0) {
        var first = str.substr(0, 1).toUpperCase();
        var spare = str.substr(1, str.length);
        return first + spare;
      }
    },

    _getChar: function _getChar(ch) {
      var unicode = ch.charCodeAt(0);
      //å¦‚æžœä¸åœ¨æ±‰å­—å¤„ç†èŒƒå›´ä¹‹å†…,è¿”å›žåŽŸå­—ç¬¦,ä¹Ÿå¯ä»¥è°ƒç”¨è‡ªå·±çš„å¤„ç†å‡½æ•°
      if (unicode > 40869 || unicode < 19968)
      return ch; //dealWithOthers(ch);
      //æ£€æŸ¥æ˜¯å¦æ˜¯å¤šéŸ³å­—,æ˜¯æŒ‰å¤šéŸ³å­—å¤„ç†,ä¸æ˜¯å°±ç›´æŽ¥åœ¨strChineseFirstPYå­—ç¬¦ä¸²ä¸­æ‰¾å¯¹åº”çš„é¦–å­—æ¯
      if (!this.options.checkPolyphone)
      return this.char_dict.charAt(unicode - 19968);
      return this.polyphone[unicode] ? this.polyphone[unicode] : this.char_dict.charAt(
      unicode - 19968);
    },

    _getResult: function _getResult(chars) {
      if (!this.options.checkPolyphone)
      return chars.join('');
      var result = [''];
      for (var i = 0, len = chars.length; i < len; i++) {
        var str = chars[i],
        strlen = str.length;
        if (strlen == 1) {
          for (var j = 0; j < result.length; j++) {
            result[k] += str;
          }
        } else {
          var swap1 = result.slice(0);
          result = [];
          for (var j = 0; j < strlen; j++) {
            //å¤åˆ¶ä¸€ä¸ªç›¸åŒçš„arrRslt
            var swap2 = swap1.slice(0);
            //æŠŠå½“å‰å­—ç¬¦str[k]æ·»åŠ åˆ°æ¯ä¸ªå…ƒç´ æœ«å°¾
            for (var k = 0; k < swap2.length; k++) {
              swap2[k] += str.charAt(j);
            }
            //æŠŠå¤åˆ¶å¹¶ä¿®æ”¹åŽçš„æ•°ç»„è¿žæŽ¥åˆ°arrRsltä¸Š
            result = result.concat(swap2);
          }
        }
      }
      return result;
    } };



  var extend = function extend(dst, src) {
    for (var property in src) {
      dst[property] = src[property];
    }
    return dst;
  };

  return new Pinyin(arguments);
}();


function initial(str) {
  var res = pinyin.getCamelChars(str);
  return res.charAt(0);
}

/***/ }),
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */
/*!******************************************************************************!*\
  !*** E:/天赐/TianciWeb/main.js?{"page":"pages%2Fgroup%2FaddGroup%2FaddGroup"} ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 6);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_group_addGroup_addGroup_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/group/addGroup/addGroup.nvue?mpType=page */ 107);

        
        
        
        _pages_group_addGroup_addGroup_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_group_addGroup_addGroup_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/group/addGroup/addGroup'
        _pages_group_addGroup_addGroup_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_group_addGroup_addGroup_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),
/* 107 */
/*!**********************************************************************!*\
  !*** E:/天赐/TianciWeb/pages/group/addGroup/addGroup.nvue?mpType=page ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addGroup_nvue_vue_type_template_id_fc308412_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addGroup.nvue?vue&type=template&id=fc308412&mpType=page */ 108);
/* harmony import */ var _addGroup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addGroup.nvue?vue&type=script&lang=js&mpType=page */ 110);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _addGroup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _addGroup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 24);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./addGroup.nvue?vue&type=style&index=0&lang=css&mpType=page */ 112).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./addGroup.nvue?vue&type=style&index=0&lang=css&mpType=page */ 112).default)
            }

}

/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _addGroup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _addGroup_nvue_vue_type_template_id_fc308412_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _addGroup_nvue_vue_type_template_id_fc308412_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "9afb8bf6",
  false,
  _addGroup_nvue_vue_type_template_id_fc308412_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "天赐/TianciWeb/pages/group/addGroup/addGroup.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 108 */
/*!****************************************************************************************************!*\
  !*** E:/天赐/TianciWeb/pages/group/addGroup/addGroup.nvue?vue&type=template&id=fc308412&mpType=page ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addGroup_nvue_vue_type_template_id_fc308412_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./addGroup.nvue?vue&type=template&id=fc308412&mpType=page */ 109);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addGroup_nvue_vue_type_template_id_fc308412_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addGroup_nvue_vue_type_template_id_fc308412_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addGroup_nvue_vue_type_template_id_fc308412_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addGroup_nvue_vue_type_template_id_fc308412_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 109 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/天赐/TianciWeb/pages/group/addGroup/addGroup.nvue?vue&type=template&id=fc308412&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: { scrollY: true, enableBackToTop: true, bubble: "true" }
    },
    [
      _c(
        "view",
        [
          _c(
            "free-nav-bar",
            {
              attrs: {
                title: _vm.isAdd ? "选择联系人" : "发起群聊",
                showBack: true,
                showRight: true
              }
            },
            [
              _c("free-main-button", {
                attrs: {
                  slot: "right",
                  name: "确定 (" + _vm.selectCount + ")"
                },
                on: { click: _vm.addGroup },
                slot: "right"
              })
            ],
            1
          ),
          !_vm.isAdd
            ? _c(
                "view",
                { staticClass: ["flex"], staticStyle: { height: "100rpx" } },
                [
                  _c(
                    "view",
                    {
                      staticClass: [
                        "flex-1",
                        "pl-2",
                        "text-center",
                        "justify-center"
                      ]
                    },
                    [
                      _c("u-text", { staticClass: ["font-md"] }, [
                        _vm._v("群聊名称")
                      ])
                    ]
                  ),
                  _c(
                    "view",
                    { staticClass: ["flex-3", "p-1", "justify-center"] },
                    [
                      _c("u-input", {
                        staticClass: ["font-md"],
                        attrs: {
                          focus: true,
                          placeholder: "请输入群聊名称",
                          value: _vm.gname
                        },
                        on: {
                          input: function($event) {
                            _vm.gname = $event.detail.value
                          }
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            : _vm._e(),
          _c(
            "scroll-view",
            {
              style: "height:" + _vm.scrollHeight + "px;",
              attrs: { scrollY: "true", scrollIntoView: _vm.scrollInto }
            },
            _vm._l(_vm.list, function(item, index) {
              return _c(
                "view",
                { key: index, attrs: { id: "item-" + item.letter } },
                [
                  item.data.length
                    ? _c(
                        "view",
                        {
                          staticClass: [
                            "py-2",
                            "px-3",
                            "border-bottom",
                            "bg-light"
                          ]
                        },
                        [
                          _c(
                            "u-text",
                            { staticClass: ["font-md", "text-dark"] },
                            [_vm._v(_vm._s(item.letter))]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._l(item.data, function(item2, index2) {
                    return _c(
                      "free-list-item",
                      {
                        key: index2,
                        attrs: {
                          title: item2.name,
                          cover: item2.photo
                            ? item2.photo
                            : "/static/images/userpic.jpg",
                          showRightIcon: false,
                          showRight: true
                        },
                        on: {
                          click: function($event) {
                            _vm.selectItem(item2)
                          }
                        }
                      },
                      [
                        _c(
                          "view",
                          {
                            staticClass: [
                              "border",
                              "rounded-circle",
                              "flex",
                              "align-center",
                              "justify-center",
                              "mr-4"
                            ],
                            staticStyle: { width: "40rpx", height: "40rpx" },
                            attrs: { slot: "right" },
                            slot: "right"
                          },
                          [
                            item2.checked
                              ? _c("view", {
                                  staticClass: [
                                    "main-bg-color",
                                    "rounded-circle"
                                  ],
                                  staticStyle: {
                                    width: "30rpx",
                                    height: "30rpx"
                                  }
                                })
                              : _vm._e()
                          ]
                        )
                      ]
                    )
                  })
                ],
                2
              )
            }),
            0
          ),
          _c(
            "view",
            {
              staticClass: [
                "position-fixed",
                "right-0",
                "bottom-0",
                "bg-light",
                "flex",
                "flex-column"
              ],
              staticStyle: { width: "50rpx" },
              style: "top:" + _vm.top + "px;",
              on: {
                touchstart: _vm.touchstart,
                touchmove: _vm.touchmove,
                touchend: _vm.touchend
              }
            },
            _vm._l(_vm.list, function(item, index) {
              return _c(
                "view",
                {
                  key: index,
                  staticClass: [
                    "flex-1",
                    "flex",
                    "align-center",
                    "justify-center"
                  ]
                },
                [
                  _c("u-text", { staticClass: ["font-sm", "text-muted"] }, [
                    _vm._v(_vm._s(item.letter))
                  ])
                ]
              )
            }),
            0
          ),
          _vm.current
            ? _c(
                "view",
                {
                  staticClass: [
                    "position-fixed",
                    "rounded-circle",
                    "bg-light",
                    "border",
                    "flex",
                    "align-center",
                    "justify-center"
                  ],
                  staticStyle: {
                    width: "150rpx",
                    height: "150rpx",
                    left: "300rpx"
                  },
                  style: "top:" + _vm.modalTop + "px;"
                },
                [
                  _c("u-text", { staticClass: ["font-lg"] }, [
                    _vm._v(_vm._s(_vm.current))
                  ])
                ]
              )
            : _vm._e()
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 110 */
/*!**********************************************************************************************!*\
  !*** E:/天赐/TianciWeb/pages/group/addGroup/addGroup.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addGroup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./addGroup.nvue?vue&type=script&lang=js&mpType=page */ 111);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addGroup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addGroup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addGroup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addGroup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addGroup_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 111 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/天赐/TianciWeb/pages/group/addGroup/addGroup.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, __f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





































































var _freeNavBar = _interopRequireDefault(__webpack_require__(/*! @/components/free-ui/free-nav-bar.vue */ 14));
var _freeListItem = _interopRequireDefault(__webpack_require__(/*! @/components/free-ui/free-list-item.vue */ 33));
var _freeMainButton = _interopRequireDefault(__webpack_require__(/*! @/components/free-ui/free-main-button.vue */ 70));
var _ErrorCode = _interopRequireDefault(__webpack_require__(/*! @/js_sdk/ErrorCode.js */ 63));
var _chineseConversion = __webpack_require__(/*! @/js_sdk/chineseConversion.js */ 86);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//引入汉字转拼音
var JIM = getApp().globalData.JIM;var SERVER_API = getApp().globalData.SERVER_API;var _this;var _default = { components: { freeNavBar: _freeNavBar.default, freeListItem: _freeListItem.default, freeMainButton: _freeMainButton.default }, data: function data() {return { gid: '', gname: '', list: [], top: 0, scrollHeight: 0, scrollInto: '', current: '', selectList: [], isAdd: false, //增加成员
      isNull: false };}, mounted: function mounted() {// 监听键盘高度变化
    uni.onKeyboardHeightChange(function (res) {});}, onShow: function onShow() {console.log(__f__(_this.isNull, " at pages\\group\\addGroup\\addGroup.nvue:108"));_this.list = [];for (var i = 0; i < 26; i++) {var obj = { letter: String.fromCharCode(65 + i), data: [] };_this.list.push(obj);}uni.request({ url: SERVER_API + "appUser/contact", header: { "token": uni.getStorageSync("setUserData").token }, method: "POST", success: function success(res) {var result = res.data.result;var len = result.length;if (len == 0) {_this.isNull = true;} else {_this.isNull = false;}for (var i = 0; i < len; i++) {var letter = (0, _chineseConversion.initial)(result[i].name);var index = letter.charCodeAt() - 65;_this.list[index].data.push(result[i]);}} });}, onLoad: function onLoad(e) {_this = this;if (e.gid) {_this.gid = e.gid;_this.gname = e.gname;_this.isAdd = true;}
    var res = uni.getSystemInfoSync();
    this.top = res.statusBarHeight + uni.upx2px(90);
    this.scrollHeight = res.windowHeight - this.top - uni.upx2px(100);
  },
  computed: {
    modalTop: function modalTop() {
      return (this.scrollHeight - uni.upx2px(150)) / 2;
    },
    // 每个索引的高度
    itemHeight: function itemHeight() {
      var count = this.list.length;
      if (count < 1) {
        return 0;
      }
      return this.scrollHeight / count;
    },
    // 选中数量
    selectCount: function selectCount() {
      return this.selectList.length;
    } },

  methods: {
    addGroup: function addGroup() {
      if (!_this.isAdd) {
        if (this.gname == "") {
          uni.showToast({
            "title": "请输入群聊名称",
            "icon": "none" });

          return;
        }
        if (this.selectList.length < 2) {
          uni.showToast({
            "title": "请至少选择两位好友",
            "icon": "none" });

          return;
        }
      } else {
        if (this.selectList.length < 1) {
          uni.showToast({
            "title": "请至少选择一位好友",
            "icon": "none" });

          return;
        }
      }

      this.selectList = this.selectList.map(function (res) {
        return {
          username: res.token };

      });
      if (_this.isAdd) {
        console.log(__f__(JSON.stringify(_this.selectList), " at pages\\group\\addGroup\\addGroup.nvue:202"));
        JIM.addGroupMembers({
          'gid': _this.gid,
          'member_usernames': _this.selectList }).
        onSuccess(function (data) {
          uni.showToast({
            "title": "邀请成功",
            "position": "bottom" });

          uni.navigateTo({
            url: "../groupChat/groupChat?gid=" + _this.gid + "&gname=" + _this.gname });


        }).onFail(function (data) {
          uni.showToast({
            "title": (0, _ErrorCode.default)(data.code),
            "position": "bottom" });

          uni.redirectTo({
            url: "../addGroup/addGroup?gid=".concat(_this.gid, "&gname=").concat(_this.gname) });

        });
      } else {
        JIM.createGroup({
          'group_name': _this.gname }).
        onSuccess(function (data) {
          _this.gid = data.gid;
          JIM.addGroupMembers({
            'gid': data.gid,
            'member_usernames': _this.selectList }).
          onSuccess(function (data) {
            uni.navigateTo({
              url: "../groupChat/groupChat?gid=" + _this.gid + "&gname=" + _this.gname });


          }).onFail(function (data) {
            uni.showToast({
              "title": (0, _ErrorCode.default)(data.code),
              "position": "bottom" });

          });
        }).onFail(function (data) {
          uni.showToast({
            "title": (0, _ErrorCode.default)(data.code),
            "position": "bottom" });

        });
      }
    },
    touchstart: function touchstart(e) {
      this.changeScrollInto(e);
    },
    touchmove: function touchmove(e) {
      this.changeScrollInto(e);
    },
    touchend: function touchend(e) {
      this.current = '';
    },
    // 联动
    changeScrollInto: function changeScrollInto(e) {
      var Y = e.touches[0].pageY;



      var index = Math.floor(Y / this.itemHeight);
      var item = this.list[index];
      if (item) {
        this.scrollInto = 'item-' + item.letter;
        this.current = item.letter;
      }
    },
    // 选中/取消选中
    selectItem: function selectItem(item) {
      item.checked = !item.checked;
      if (item.checked) {// 选中
        this.selectList.push(item);
      } else {// 取消选中
        var index = this.selectList.findIndex(function (v) {return v === item;});
        if (index > -1) {
          this.selectList.splice(index, 1);
        }
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 30)["default"]))

/***/ }),
/* 112 */
/*!******************************************************************************************************!*\
  !*** E:/天赐/TianciWeb/pages/group/addGroup/addGroup.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addGroup_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./addGroup.nvue?vue&type=style&index=0&lang=css&mpType=page */ 113);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addGroup_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addGroup_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addGroup_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addGroup_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_addGroup_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 113 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/天赐/TianciWeb/pages/group/addGroup/addGroup.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "noConversation": {
    "width": "750rpx",
    "marginTop": "100rpx"
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC9pbmRleC5qcz85MjFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3VuaS1hcHAtcGx1cy1udnVlLXY4L2Rpc3QvaW5kZXguanM/OTkyYSIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9wYWdlcy5qc29uPzE2YzkiLCJ3ZWJwYWNrOi8vL0U6L+Wkqei1kC9UaWFuY2lXZWIvcGFnZXMuanNvbj81MjFhIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL21haW4uanM/OGUwZCIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9BcHAudnVlPzZiYjciLCJ3ZWJwYWNrOi8vL0U6L+Wkqei1kC9UaWFuY2lXZWIvQXBwLnZ1ZT8yODRjIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLW5hdi1iYXIudnVlP2E3NGYiLCJ3ZWJwYWNrOi8vL0U6L+Wkqei1kC9UaWFuY2lXZWIvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtbmF2LWJhci52dWU/OTllZSIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1uYXYtYmFyLnZ1ZT8xMWVjIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLW5hdi1iYXIudnVlPzcwZTIiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLW5hdi1iYXIudnVlIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWljb24tYnV0dG9uLnZ1ZT83YWI2Iiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWljb24tYnV0dG9uLnZ1ZT9jNmFjIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWljb24tYnV0dG9uLnZ1ZT9jZDY3Iiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWljb24tYnV0dG9uLnZ1ZT8xYmQyIiwidW5pLWFwcDovLy9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1pY29uLWJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzP2YwYzUiLCJ3ZWJwYWNrOi8vL0U6L+Wkqei1kC9UaWFuY2lXZWIvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtcG9wdXAudnVlP2IwZGEiLCJ3ZWJwYWNrOi8vL0U6L+Wkqei1kC9UaWFuY2lXZWIvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtcG9wdXAudnVlPzk2OWQiLCJ3ZWJwYWNrOi8vL0U6L+Wkqei1kC9UaWFuY2lXZWIvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtcG9wdXAudnVlP2MyY2QiLCJ3ZWJwYWNrOi8vL0U6L+Wkqei1kC9UaWFuY2lXZWIvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtcG9wdXAudnVlP2RiMGYiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLXBvcHVwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9saWIvZm9ybWF0LWxvZy5qcz8wZGU5Iiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLXBvcHVwLnZ1ZT9lYzE1Iiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLXBvcHVwLnZ1ZT9iZjE1Iiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWxpc3QtaXRlbS52dWU/ODgzOCIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1saXN0LWl0ZW0udnVlPzdkNmIiLCJ3ZWJwYWNrOi8vL0U6L+Wkqei1kC9UaWFuY2lXZWIvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtbGlzdC1pdGVtLnZ1ZT9lZjYxIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWxpc3QtaXRlbS52dWU/Y2Q4MyIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtbGlzdC1pdGVtLnZ1ZSIsInVuaS1hcHA6Ly8vanNfc2RrL0Vycm9yQ29kZS5qcyIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1tYWluLWJ1dHRvbi52dWU/NzM4ZSIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1tYWluLWJ1dHRvbi52dWU/MWE5ZSIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1tYWluLWJ1dHRvbi52dWU/OWIzZCIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1tYWluLWJ1dHRvbi52dWU/ZDQwMCIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtbWFpbi1idXR0b24udnVlIiwidW5pLWFwcDovLy9qc19zZGsvY2hpbmVzZUNvbnZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vL0U6L+Wkqei1kC9UaWFuY2lXZWIvbWFpbi5qcz81YzJlIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL3BhZ2VzL2dyb3VwL2FkZEdyb3VwL2FkZEdyb3VwLm52dWU/NzE0MiIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9wYWdlcy9ncm91cC9hZGRHcm91cC9hZGRHcm91cC5udnVlPzdmNDMiLCJ3ZWJwYWNrOi8vL0U6L+Wkqei1kC9UaWFuY2lXZWIvcGFnZXMvZ3JvdXAvYWRkR3JvdXAvYWRkR3JvdXAubnZ1ZT9kZWVjIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL3BhZ2VzL2dyb3VwL2FkZEdyb3VwL2FkZEdyb3VwLm52dWU/MzYxNCIsInVuaS1hcHA6Ly8vcGFnZXMvZ3JvdXAvYWRkR3JvdXAvYWRkR3JvdXAubnZ1ZSIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9wYWdlcy9ncm91cC9hZGRHcm91cC9hZGRHcm91cC5udnVlPzk5NGEiLCJ3ZWJwYWNrOi8vL0U6L+Wkqei1kC9UaWFuY2lXZWIvcGFnZXMvZ3JvdXAvYWRkR3JvdXAvYWRkR3JvdXAubnZ1ZT81MGU0Il0sIm5hbWVzIjpbIlNUQVRfVkVSU0lPTiIsInZlcnNpb24iLCJTVEFUX1VSTCIsIlNUQVRfSDVfVVJMIiwiUEFHRV9QVkVSX1RJTUUiLCJBUFBfUFZFUl9USU1FIiwiT1BFUkFUSU5HX1RJTUUiLCJVVUlEX0tFWSIsIlVVSURfVkFMVUUiLCJnZXRVdWlkIiwidXVpZCIsImdldFBsYXRmb3JtTmFtZSIsInBsdXMiLCJydW50aW1lIiwiZ2V0RENsb3VkSWQiLCJlIiwidW5pIiwiZ2V0U3RvcmFnZVN5bmMiLCJEYXRlIiwibm93IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0U3RvcmFnZVN5bmMiLCJnZXRTZ2luIiwic3RhdERhdGEiLCJhcnIiLCJPYmplY3QiLCJrZXlzIiwic29ydEFyciIsInNvcnQiLCJzZ2luIiwic2dpblN0ciIsImkiLCJzaWduIiwib3B0aW9ucyIsInN1YnN0ciIsImxlbmd0aCIsImdldFNwbGljaW5nIiwiZGF0YSIsInN0ciIsImdldFRpbWUiLCJwYXJzZUludCIsInBsYXRmb3JtTGlzdCIsInByb2Nlc3MiLCJnZXRQYWNrTmFtZSIsInBhY2tOYW1lIiwiY2FuSVVzZSIsImdldEFjY291bnRJbmZvU3luYyIsIm1pbmlQcm9ncmFtIiwiYXBwSWQiLCJnZXRWZXJzaW9uIiwiZ2V0Q2hhbm5lbCIsInBsYXRmb3JtTmFtZSIsImNoYW5uZWwiLCJnZXRTY2VuZSIsInNjZW5lIiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSIsIkxhc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJnZXRGaXJzdFZpc2l0VGltZSIsInRpbWVTdG9yZ2UiLCJ0aW1lIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJnZXRMYXN0VmlzaXRUaW1lIiwiUEFHRV9SRVNJREVOQ0VfVElNRSIsIkZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJzZXRQYWdlUmVzaWRlbmNlVGltZSIsImdldFBhZ2VSZXNpZGVuY2VUaW1lIiwiVE9UQUxfX1ZJU0lUX19DT1VOVCIsImdldFRvdGFsVmlzaXRDb3VudCIsImNvdW50IiwiR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyIsInByb3AiLCJlbmNvZGVVUklDb21wb25lbnQiLCJTZXRfX0ZpcnN0X19UaW1lIiwiU2V0X19MYXN0X19UaW1lIiwiZ2V0Rmlyc3RUaW1lIiwiZ2V0TGFzdFRpbWUiLCJnZXRSZXNpZGVuY2VUaW1lIiwidHlwZSIsInJlc2lkZW5jZVRpbWUiLCJvdmVydGltZSIsImdldFJvdXRlIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwYWdlIiwiX3NlbGYiLCIkdm0iLCIkbXAiLCJpcyIsIiRzY29wZSIsInJvdXRlIiwiZ2V0UGFnZVJvdXRlIiwic2VsZiIsInF1ZXJ5IiwiX3F1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFBhZ2VUeXBlcyIsIm1wVHlwZSIsIiRvcHRpb25zIiwiY2FsaWJyYXRpb24iLCJldmVudE5hbWUiLCJjb25zb2xlIiwiZXJyb3IiLCJQYWdlc0pzb24iLCJyZXF1aXJlIiwiZGVmYXVsdCIsInN0YXRDb25maWciLCJyZXN1bHRPcHRpb25zIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJVdGlsIiwiX3JldHJ5IiwiX3BsYXRmb3JtIiwiX25hdmlnYXRpb25CYXJUaXRsZSIsImNvbmZpZyIsInJlcG9ydCIsImx0IiwiX29wZXJhdGluZ1RpbWUiLCJfcmVwb3J0aW5nUmVxdWVzdERhdGEiLCJfX3ByZXZlbnRfdHJpZ2dlcmluZyIsIl9fbGljYXRpb25IaWRlIiwiX19saWNhdGlvblNob3ciLCJfbGFzdFBhZ2VSb3V0ZSIsInV0IiwibXBuIiwiYWsiLCJhcHBpZCIsInVzdiIsInYiLCJjaCIsImNuIiwicG4iLCJjdCIsInQiLCJ0dCIsInAiLCJwbGF0Zm9ybSIsImJyYW5kIiwibWQiLCJtb2RlbCIsInN2Iiwic3lzdGVtIiwicmVwbGFjZSIsIm1wc2RrIiwiU0RLVmVyc2lvbiIsIm1wdiIsImxhbmciLCJsYW5ndWFnZSIsInByIiwicGl4ZWxSYXRpbyIsInd3Iiwid2luZG93V2lkdGgiLCJ3aCIsIndpbmRvd0hlaWdodCIsInN3Iiwic2NyZWVuV2lkdGgiLCJzaCIsInNjcmVlbkhlaWdodCIsInBhdGgiLCJzYyIsIl9zZW5kUmVwb3J0UmVxdWVzdCIsIl9zZW5kSGlkZVJlcXVlc3QiLCJ1cmxyZWYiLCJ1cmxyZWZfdHMiLCJyb3V0ZXBhdGgiLCJ0aXRsZU5WaWV3IiwidGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIl9zZW5kUGFnZVJlcXVlc3QiLCJ1cmwiLCJfc2VuZEV2ZW50UmVxdWVzdCIsImtleSIsImZ2dHMiLCJsdnRzIiwidHZjIiwiZ2V0UHJvcGVydHkiLCJnZXROZXR3b3JrSW5mbyIsIm9wdCIsInJlcXVlc3QiLCJ2YWx1ZSIsImVfbiIsImVfdiIsInRvU3RyaW5nIiwiZ2V0TmV0d29ya1R5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwibmV0IiwibmV0d29ya1R5cGUiLCJnZXRMb2NhdGlvbiIsIndndGluZm8iLCJnZW9jb2RlIiwiYWRkcmVzcyIsImNvdW50cnkiLCJwcm92aW5jZSIsImNpdHkiLCJsYXQiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsInRpdGxlIiwidHRuIiwidHRwaiIsInR0YyIsInJlcXVlc3REYXRhIiwicHVzaCIsInVuaVN0YXREYXRhIiwiZmlyc3RBcnIiLCJjb250ZW50QXJyIiwibGFzdEFyciIsInJkIiwiZm9yRWFjaCIsImVsbSIsIm5ld0RhdGEiLCJvcHRpb25zRGF0YSIsInJlcXVlc3RzIiwiaW1hZ2VSZXF1ZXN0Iiwic2V0VGltZW91dCIsIl9zZW5kUmVxdWVzdCIsIm1ldGhvZCIsImZhaWwiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiU3RhdCIsImluc3RhbmNlIiwiYWRkSW50ZXJjZXB0b3IiLCJhZGRJbnRlcmNlcHRvckluaXQiLCJpbnRlcmNlcHRMb2dpbiIsImludGVyY2VwdFNoYXJlIiwiaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQiLCJpbnZva2UiLCJhcmdzIiwiY29tcGxldGUiLCJfbG9naW4iLCJfc2hhcmUiLCJfcGF5bWVudCIsIl9wYWdlU2hvdyIsIl9hcHBsaWNhdGlvblNob3ciLCJfcGFnZUhpZGUiLCJfYXBwbGljYXRpb25IaWRlIiwiZW0iLCJpbmZvIiwiZW1WYWwiLCJtZXNzYWdlIiwic3RhY2siLCJzdGF0IiwiZ2V0SW5zdGFuY2UiLCJpc0hpZGUiLCJsaWZlY3ljbGUiLCJvbkxhdW5jaCIsIm9uUmVhZHkiLCJyZWFkeSIsIm9uTG9hZCIsImxvYWQiLCJvblNoYXJlQXBwTWVzc2FnZSIsIm9sZFNoYXJlQXBwTWVzc2FnZSIsImNhbGwiLCJvblNob3ciLCJzaG93Iiwib25IaWRlIiwiaGlkZSIsIm9uVW5sb2FkIiwib25FcnJvciIsIm1haW4iLCJpbml0VW5pIiwiaXNGbiIsImhhbmRsZVByb21pc2UiLCJwcm9taXNlIiwidGhlbiIsImNhdGNoIiwiZXJyIiwiUkVHRVgiLCJBUElfTk9STUFMX0xJU1QiLCJzaG91bGRQcm9taXNlIiwibmFtZSIsInRlc3QiLCJpbmRleE9mIiwicHJvbWlzaWZ5IiwiYXBpIiwiX2xlbiIsImFyZ3VtZW50cyIsInBhcmFtcyIsIkFycmF5IiwiX2tleSIsInVuZGVmaW5lZCIsImFwcGx5IiwiY29uY2F0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJmaW5hbGx5IiwiY2FsbGJhY2siLCJjb25zdHJ1Y3RvciIsInJlYXNvbiIsIm9uTWVzc2FnZUNhbGxiYWNrcyIsIm9yaWdpbiIsIm9uU3ViTlZ1ZU1lc3NhZ2UiLCJ3ZWJ2aWV3SWQiLCJ3ZWV4UGx1cyIsIndlYnZpZXciLCJjdXJyZW50V2VidmlldyIsImlkIiwiQnJvYWRjYXN0Q2hhbm5lbCIsIm9ubWVzc2FnZSIsImV2ZW50IiwidG8iLCJ3cmFwcGVyIiwiJHByb2Nlc3NlZCIsImN1cnJlbnRXZWJ2aWV3SWQiLCJpc1BvcHVwTlZ1ZSIsImhvc3ROVnVlSWQiLCJfX3VuaWFwcF9vcmlnaW5fdHlwZSIsIl9fdW5pYXBwX29yaWdpbl9pZCIsInBvcHVwTlZ1ZUlkIiwicG9zdE1lc3NhZ2UiLCJvbk1lc3NhZ2UiLCJfX3VuaWFwcF9tYXNrX2lkIiwiX191bmlhcHBfaG9zdCIsIm1hc2tDb2xvciIsIl9fdW5pYXBwX21hc2siLCJtYXNrV2VidmlldyIsImdldFdlYnZpZXdCeUlkIiwicGFyZW50Iiwib2xkU2hvdyIsIm9sZEhpZGUiLCJvbGRDbG9zZSIsImNsb3NlIiwic2hvd01hc2siLCJzZXRTdHlsZSIsIm1hc2siLCJjbG9zZU1hc2siLCJfbGVuMiIsIl9rZXkyIiwiX2xlbjMiLCJfa2V5MyIsImdldFN1Yk5WdWVCeUlkIiwiZ2V0Q3VycmVudFN1Yk5WdWUiLCJ3ZWV4IiwicmVxdWlyZU1vZHVsZSIsImdsb2JhbEV2ZW50IiwiY2FsbGJhY2tzIiwiVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrIiwiY3JlYXRlQ2FsbGJhY2siLCJyZXMiLCJlcnJNc2ciLCJrZWVwQWxpdmUiLCJjYWxsYmFja0lkIiwicHVibGlzaCIsIl9yZWYiLCJjcmVhdGVQdWJsaXNoIiwib25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQiLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQiLCJyZXF1aXJlTmF0aXZlUGx1Z2luIiwicGx1Z2luTmFtZSIsImRvbSIsImxvYWRGb250RmFjZSIsImZhbWlseSIsInNvdXJjZSIsImRlc2MiLCJhZGRSdWxlIiwiZm9udEZhbWlseSIsInN0YXR1cyIsImdsb2JhbEV2ZW50JDEiLCJjYWxsYmFja3MkMSIsImlzVW5pQXBwUmVhZHkiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvYmoiLCJzdHJlYW0iLCJNRVRIT0RfR0VUIiwiTUVUSE9EX1BPU1QiLCJDT05URU5UX1RZUEVfSlNPTiIsIkNPTlRFTlRfVFlQRV9GT1JNIiwic2VyaWFsaXplIiwiY29udGVudFR5cGUiLCJ0b1VwcGVyQ2FzZSIsInRvTG93ZXJDYXNlIiwibWFwIiwiam9pbiIsImhlYWRlciIsIl9yZWYkbWV0aG9kIiwiX3JlZiRkYXRhVHlwZSIsImRhdGFUeXBlIiwicmVzcG9uc2VUeXBlIiwiYWJvcnRlZCIsImhhc0NvbnRlbnRUeXBlIiwiaGVhZGVycyIsImZldGNoIiwiYm9keSIsIl9yZWYyIiwib2siLCJzdGF0dXNUZXh0IiwicmV0Iiwic3RhdHVzQ29kZSIsImFib3J0Iiwic3RvcmFnZSIsIlVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSIsImdldFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2UiLCJzZXRTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZVN0b3JhZ2UiLCJfcmVmMyIsInJlbW92ZUl0ZW0iLCJjbGVhclN0b3JhZ2UiLCJfcmVmNCIsImNsaXBib2FyZCIsImdldENsaXBib2FyZERhdGEiLCJnZXRTdHJpbmciLCJzZXRDbGlwYm9hcmREYXRhIiwic2V0U3RyaW5nIiwiZ2V0RW1pdHRlciIsImdldFVuaUVtaXR0ZXIiLCJFbWl0dGVyIiwiJG9uIiwid2FybiIsIiRvZmYiLCIkb25jZSIsIiRlbWl0IiwiY3R4Iiwic2xpY2UiLCJmcmVlemUiLCJ3eCIsInVwbG9hZEZpbGUiLCJkb3dubG9hZEZpbGUiLCJjaG9vc2VJbWFnZSIsInByZXZpZXdJbWFnZSIsImdldEltYWdlSW5mbyIsInNhdmVJbWFnZVRvUGhvdG9zQWxidW0iLCJjaG9vc2VWaWRlbyIsInNhdmVWaWRlb1RvUGhvdG9zQWxidW0iLCJzYXZlRmlsZSIsImdldFNhdmVkRmlsZUxpc3QiLCJnZXRTYXZlZEZpbGVJbmZvIiwicmVtb3ZlU2F2ZWRGaWxlIiwib3BlbkRvY3VtZW50IiwiZ2V0U3RvcmFnZUluZm8iLCJjaG9vc2VMb2NhdGlvbiIsIm9wZW5Mb2NhdGlvbiIsImdldFN5c3RlbUluZm8iLCJtYWtlUGhvbmVDYWxsIiwic2NhbkNvZGUiLCJzZXRTY3JlZW5CcmlnaHRuZXNzIiwiZ2V0U2NyZWVuQnJpZ2h0bmVzcyIsInNldEtlZXBTY3JlZW5PbiIsInZpYnJhdGVMb25nIiwidmlicmF0ZVNob3J0IiwiYWRkUGhvbmVDb250YWN0Iiwic2hvd1RvYXN0Iiwic2hvd0xvYWRpbmciLCJoaWRlVG9hc3QiLCJoaWRlTG9hZGluZyIsInNob3dNb2RhbCIsInNob3dBY3Rpb25TaGVldCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInNldE5hdmlnYXRpb25CYXJDb2xvciIsIm5hdmlnYXRlVG8iLCJyZWRpcmVjdFRvIiwicmVMYXVuY2giLCJzd2l0Y2hUYWIiLCJuYXZpZ2F0ZUJhY2siLCJnZXRQcm92aWRlciIsImxvZ2luIiwiZ2V0VXNlckluZm8iLCJzaGFyZSIsInJlcXVlc3RQYXltZW50Iiwic3Vic2NyaWJlUHVzaCIsInVuc3Vic2NyaWJlUHVzaCIsIm9uUHVzaCIsIm9mZlB1c2giLCJiYXNlVW5pIiwib3MiLCJudnVlIiwiUHJveHkiLCJnZXQiLCJ0YXJnZXQiLCJjcmVhdGVVbmkiLCJnZXRVbmkiLCJXZWV4UGx1cyIsInR5cG9mIiwicyIsInN1YnN0cmluZyIsImZvcm1hdExvZyIsIm1zZ3MiLCJ2VHlwZSIsIlN0cmluZyIsIm1zZyIsImxhc3RNc2ciLCJwb3AiLCJnZXRDb2RlTXNnIiwiY29kZSIsImVycm9yX2NvZGUiLCJwaW55aW4iLCJQaW55aW4iLCJvcHMiLCJpbml0aWFsaXplIiwiY2hlY2tQb2x5cGhvbmUiLCJjaGFyY2FzZSIsImZuIiwiaW5pdCIsImV4dGVuZCIsImNoYXJfZGljdCIsImZ1bGxfZGljdCIsInBvbHlwaG9uZSIsImdldEZ1bGxDaGFycyIsInJlZyIsIlJlZ0V4cCIsImxlbiIsInVuaWNvZGUiLCJjaGFyQ29kZUF0IiwiX2dldEZ1bGxDaGFyIiwiZ2V0Q2FtZWxDaGFycyIsIkVycm9yIiwiY2hhcnMiLCJjaGFyQXQiLCJfZ2V0Q2hhciIsIl9nZXRSZXN1bHQiLCJfY2FwaXRhbGl6ZSIsImZpcnN0Iiwic3BhcmUiLCJzdHJsZW4iLCJqIiwiayIsInN3YXAxIiwic3dhcDIiLCJkc3QiLCJwcm9wZXJ0eSIsImluaXRpYWwiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9E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QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7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SUF2RFY7QUF3REMsYUF4REQsRUF3RFUsSUF4RFY7QUF5REMsYUF6REQsRUF5RFUsSUF6RFY7QUEwREMsYUExREQsRUEwRFUsSUExRFY7QUEyREMsYUEzREQsRUEyRFUsSUEzRFY7QUE0REMsYUE1REQsRUE0RFUsSUE1RFY7QUE2REMsYUE3REQsRUE2RFUsR0E3RFY7QUE4REMsYUE5REQsRUE4RFUsSUE5RFY7QUErREMsYUEvREQsRUErRFUsSUEvRFY7QUFnRUMsYUFoRUQsRUFnRVUsR0FoRVY7QUFpRUMsYUFqRUQsRUFpRVUsSUFqRVY7QUFrRUMsYUFsRUQsRUFrRVUsS0FsRVY7QUFtRUMsYUFuRUQsRUFtRVUsSUFuRVY7QUFvRUMsYUFwRUQsRUFvRVUsSUFwRVY7QUFxRUMsYUFyRUQsRUFxRVUsS0FyRVY7QUFzRUMsYUF0RUQsRUFzRVUsSUF0RVY7QUF1RUMsYUF2RUQsRUF1RVUsR0F2RVY7QUF3RUMsYUF4RUQsRUF3RVUsSUF4RVY7QUF5RUMsYUF6RUQsRUF5RVUsS0F6RVY7QUEwRUMsYUExRUQsRUEwRVUsR0ExRVY7QUEyRUMsYUEzRUQsRUEyRVUsSUEzRVY7QUE0RUMsYUE1RUQsRUE0RVUsSUE1RVY7QUE2RUMsYUE3RUQsRUE2RVUsR0E3RVY7QUE4RUMsYUE5RUQsRUE4RVUsSUE5RVY7QUErRUMsYUEvRUQsRUErRVUsSUEvRVY7QUFnRkMsYUFoRkQsRUFnRlUsSUFoRlY7QUFpRkMsYUFqRkQsRUFpRlUsSUFqRlY7QUFrRkMsYUFsRkQsRUFrRlUsSUFsRlY7QUFtRkMsYUFuRkQsRUFtRlUsSUFuRlY7QUFvRkMsYUFwRkQsRUFvRlUsSUFwRlY7QUFxRkMsYUFyRkQsRUFxRlUsR0FyRlY7QUFzRkMsYUF0RkQsRUFzRlUsSUF0RlY7QUF1RkMsYUF2RkQsRUF1RlUsSUF2RlY7QUF3RkMsYUF4RkQsRUF3RlUsSUF4RlY7QUF5RkMsYUF6RkQsRUF5RlUsSUF6RlY7QUEwRkMsYUExRkQsRUEwRlUsSUExRlY7QUEyRkMsYUEzRkQsRUEyRlUsSUEzRlY7QUE0RkMsYUE1RkQsRUE0RlUsSUE1RlY7QUE2RkMsYUE3RkQsRUE2RlUsSUE3RlY7QUE4RkMsYUE5RkQsRUE4RlUsSUE5RlY7QUErRkMsYUEvRkQsRUErRlUsSUEvRlY7QUFnR0MsYUFoR0QsRUFnR1UsSUFoR1Y7QUFpR0MsYUFqR0QsRUFpR1UsSUFqR1Y7QUFrR0MsYUFsR0QsRUFrR1UsSUFsR1Y7QUFtR0MsYUFuR0QsRUFtR1UsSUFuR1Y7QUFvR0MsYUFwR0QsRUFvR1UsSUFwR1Y7QUFxR0MsYUFyR0QsRUFxR1UsSUFyR1Y7QUFzR0MsYUF0R0QsRUFzR1UsSUF0R1Y7QUF1R0MsYUF2R0QsRUF1R1UsSUF2R1Y7QUF3R0MsYUF4R0QsRUF3R1UsSUF4R1Y7QUF5R0MsYUF6R0QsRUF5R1UsSUF6R1Y7QUEwR0MsYUExR0QsRUEwR1UsSUExR1Y7QUEyR0MsYUEzR0QsRUEyR1UsSUEzR1Y7QUE0R0MsYUE1R0QsRUE0R1UsSUE1R1Y7QUE2R0MsYUE3R0QsRUE2R1UsSUE3R1Y7QUE4R0MsYUE5R0QsRUE4R1UsSUE5R1Y7QUErR0MsYUEvR0QsRUErR1UsSUEvR1Y7QUFnSEMsYUFoSEQsRUFnSFUsSUFoSFY7QUFpSEMsYUFqSEQsRUFpSFUsSUFqSFY7QUFrSEMsYUFsSEQsRUFrSFUsSUFsSFY7QUFtSEMsYUFuSEQsRUFtSFUsSUFuSFY7QUFvSEMsYUFwSEQsRUFvSFUsSUFwSFY7QUFxSEMsYUFySEQsRUFxSFUsSUFySFY7QUFzSEMsYUF0SEQsRUFzSFUsSUF0SFY7QUF1SEMsYUF2SEQsRUF1SFUsSUF2SFY7QUF3SEMsYUF4SEQsRUF3SFUsSUF4SFY7QUF5SEMsYUF6SEQsRUF5SFUsSUF6SFY7QUEwSEMsYUExSEQsRUEwSFUsSUExSFY7QUEySEMsYUEzSEQsRUEySFUsSUEzSFY7QUE0SEMsYUE1SEQsRUE0SFUsSUE1SFY7QUE2SEMsYUE3SEQsRUE2SFUsSUE3SFY7QUE4SEMsYUE5SEQsRUE4SFUsSUE5SFY7QUErSEMsYUEvSEQsRUErSFUsSUEvSFY7QUFnSUMsYUFoSUQsRUFnSVUsSUFoSVY7QUFpSUMsYUFqSUQsRUFpSVUsSUFqSVY7QUFrSUMsYUFsSUQsRUFrSVUsSUFsSVY7QUFtSUMsYUFuSUQsRUFtSVUsSUFuSVY7QUFvSUMsYUFwSUQsRUFvSVUsSUFwSVY7QUFxSUMsYUFySUQsRUFxSVUsSUFySVY7QUFzSUMsYUF0SUQsRUFzSVUsSUF0SVY7QUF1SUMsYUF2SUQsRUF1SVUsSUF2SVY7QUF3SUMsYUF4SUQsRUF3SVUsSUF4SVY7QUF5SUMsYUF6SUQsRUF5SVUsSUF6SVY7QUEwSUMsYUExSUQsRUEwSVUsSUExSVY7QUEySUMsYUEzSUQsRUEySVUsSUEzSVY7QUE0SUMsYUE1SUQsRUE0SVUsSUE1SVY7QUE2SUMsYUE3SUQsRUE2SVUsSUE3SVY7QUE4SUMsYUE5SUQsRUE4SVUsSUE5SVY7QUErSUMsYUEvSUQsRUErSVUsSUEvSVY7QUFnSkMsYUFoSkQsRUFnSlUsSUFoSlY7QUFpSkMsYUFqSkQsRUFpSlUsSUFqSlY7QUFrSkMsYUFsSkQsRUFrSlUsSUFsSlY7QUFtSkMsYUFuSkQsRUFtSlUsSUFuSlY7QUFvSkMsYUFwSkQsRUFvSlUsSUFwSlY7QUFxSkMsYUFySkQsRUFxSlUsSUFySlY7QUFzSkMsYUF0SkQsRUFzSlUsSUF0SlY7QUF1SkMsYUF2SkQsRUF1SlUsSUF2SlY7QUF3SkMsYUF4SkQsRUF3SlUsSUF4SlY7QUF5SkMsYUF6SkQsRUF5SlUsSUF6SlY7QUEwSkMsYUExSkQsRUEwSlUsSUExSlY7QUEySkMsYUEzSkQsRUEySlUsSUEzSlY7QUE0SkMsYUE1SkQsRUE0SlUsSUE1SlY7QUE2SkMsYUE3SkQsRUE2SlUsSUE3SlY7QUE4SkMsYUE5SkQsRUE4SlUsR0E5SlY7QUErSkMsYUEvSkQsRUErSlUsR0EvSlY7QUFnS0MsYUFoS0QsRUFnS1UsSUFoS1Y7QUFpS0MsYUFqS0QsRUFpS1UsSUFqS1Y7QUFrS0MsYUFsS0QsRUFrS1UsSUFsS1Y7QUFtS0MsYUFuS0QsRUFtS1UsSUFuS1Y7QUFvS0MsYUFwS0QsRUFvS1UsSUFwS1Y7QUFxS0MsYUFyS0QsRUFxS1UsSUFyS1Y7QUFzS0MsYUF0S0QsRUFzS1UsSUF0S1Y7QUF1S0MsYUF2S0QsRUF1S1UsSUF2S1Y7QUF3S0MsYUF4S0QsRUF3S1UsSUF4S1Y7QUF5S0MsYUF6S0QsRUF5S1UsSUF6S1Y7QUEwS0MsYUExS0QsRUEwS1UsSUExS1Y7QUEyS0MsYUEzS0QsRUEyS1UsSUEzS1Y7QUE0S0MsYUE1S0QsRUE0S1UsSUE1S1Y7QUE2S0MsYUE3S0QsRUE2S1UsSUE3S1Y7QUE4S0MsYUE5S0QsRUE4S1UsSUE5S1Y7QUErS0MsYUEvS0QsRUErS1UsSUEvS1Y7QUFnTEMsYUFoTEQsRUFnTFUsSUFoTFY7QUFpTEMsYUFqTEQsRUFpTFUsSUFqTFY7QUFrTEMsYUFsTEQsRUFrTFUsSUFsTFY7QUFtTEMsYUFuTEQsRUFtTFUsSUFuTFY7QUFvTEMsYUFwTEQsRUFvTFUsSUFwTFY7QUFxTEMsYUFyTEQsRUFxTFUsSUFyTFY7QUFzTEMsYUF0TEQsRUFzTFUsSUF0TFY7QUF1TEMsYUF2TEQsRUF1TFUsSUF2TFY7QUF3TEMsYUF4TEQsRUF3TFUsSUF4TFY7QUF5TEMsYUF6TEQsRUF5TFUsSUF6TFY7QUEwTEMsYUExTEQsRUEwTFUsSUExTFY7QUEyTEMsYUEzTEQsRUEyTFUsSUEzTFY7QUE0TEMsYUE1TEQsRUE0TFUsSUE1TFY7QUE2TEMsYUE3TEQsRUE2TFUsSUE3TFY7QUE4TEMsYUE5TEQsRUE4TFUsSUE5TFY7QUErTEMsYUEvTEQsRUErTFUsSUEvTFY7QUFnTUMsYUFoTUQsRUFnTVUsSUFoTVY7QUFpTUMsYUFqTUQsRUFpTVUsSUFqTVY7QUFrTUMsYUFsTUQsRUFrTVUsSUFsTVY7QUFtTUMsYUFuTUQsRUFtTVUsSUFuTVY7QUFvTUMsYUFwTUQsRUFvTVUsSUFwTVY7QUFxTUMsYUFyTUQsRUFxTVUsSUFyTVY7QUFzTUMsYUF0TUQsRUFzTVUsSUF0TVY7QUF1TUMsYUF2TUQsRUF1TVUsR0F2TVY7QUF3TUMsYUF4TUQsRUF3TVUsSUF4TVY7QUF5TUMsYUF6TUQsRUF5TVUsSUF6TVY7QUEwTUMsYUExTUQsRUEwTVUsSUExTVY7QUEyTUMsYUEzTUQsRUEyTVUsSUEzTVY7QUE0TUMsYUE1TUQsRUE0TVUsSUE1TVY7QUE2TUMsYUE3TUQsRUE2TVUsSUE3TVY7QUE4TUMsYUE5TUQsRUE4TVUsSUE5TVY7QUErTUMsYUEvTUQsRUErTVUsSUEvTVY7QUFnTkMsYUFoTkQsRUFnTlUsSUFoTlY7QUFpTkMsYUFqTkQsRUFpTlUsSUFqTlY7QUFrTkMsYUFsTkQsRUFrTlUsSUFsTlY7QUFtTkMsYUFuTkQsRUFtTlUsSUFuTlY7QUFvTkMsYUFwTkQsRUFvTlUsSUFwTlY7QUFxTkMsYUFyTkQsRUFxTlUsSUFyTlY7QUFzTkMsYUF0TkQsRUFzTlUsSUF0TlY7QUF1TkMsYUF2TkQsRUF1TlUsSUF2TlY7QUF3TkMsYUF4TkQsRUF3TlUsSUF4TlY7QUF5TkMsYUF6TkQsRUF5TlUsSUF6TlY7QUEwTkMsYUExTkQsRUEwTlUsSUExTlY7QUEyTkMsYUEzTkQsRUEyTlUsSUEzTlY7QUE0TkMsYUE1TkQsRUE0TlUsSUE1TlY7QUE2TkMsYUE3TkQsRUE2TlUsSUE3TlY7QUE4TkMsYUE5TkQsRUE4TlUsSUE5TlY7QUErTkMsYUEvTkQsRUErTlUsR0EvTlY7QUFnT0MsYUFoT0QsRUFnT1UsSUFoT1Y7QUFpT0MsYUFqT0QsRUFpT1UsSUFqT1Y7QUFrT0MsYUFsT0QsRUFrT1UsSUFsT1Y7QUFtT0MsYUFuT0QsRUFtT1UsSUFuT1Y7QUFvT0MsYUFwT0QsRUFvT1UsSUFwT1Y7QUFxT0MsYUFyT0QsRUFxT1UsSUFyT1Y7QUFzT0MsYUF0T0QsRUFzT1UsS0F0T1Y7QUF1T0MsYUF2T0QsRUF1T1UsSUF2T1Y7QUF3T0MsYUF4T0QsRUF3T1UsSUF4T1Y7QUF5T0MsYUF6T0QsRUF5T1UsSUF6T1Y7QUEwT0MsYUExT0QsRUEwT1UsSUExT1Y7QUEyT0MsYUEzT0QsRUEyT1UsSUEzT1Y7QUE0T0MsYUE1T0QsRUE0T1UsSUE1T1Y7QUE2T0MsYUE3T0QsRUE2T1UsS0E3T1Y7QUE4T0MsYUE5T0QsRUE4T1UsSUE5T1Y7QUErT0MsYUEvT0QsRUErT1UsSUEvT1Y7QUFnUEMsYUFoUEQsRUFnUFUsSUFoUFY7QUFpUEMsYUFqUEQsRUFpUFUsSUFqUFY7QUFrUEMsYUFsUEQsRUFrUFUsSUFsUFY7QUFtUEMsYUFuUEQsRUFtUFUsSUFuUFY7QUFvUEMsYUFwUEQsRUFvUFUsSUFwUFY7QUFxUEMsYUFyUEQsRUFxUFUsSUFyUFY7QUFzUEMsYUF0UEQsRUFzUFUsS0F0UFY7QUF1UEMsYUF2UEQsRUF1UFUsSUF2UFY7QUF3UEMsYUF4UEQsRUF3UFUsSUF4UFY7QUF5UEMsYUF6UEQsRUF5UFUsSUF6UFY7QUEwUEMsYUExUEQsRUEwUFUsSUExUFY7QUEyUEMsYUEzUEQsRUEyUFUsSUEzUFY7QUE0UEMsYUE1UEQsRUE0UFUsSUE1UFY7QUE2UEMsYUE3UEQsRUE2UFUsSUE3UFY7QUE4UEMsYUE5UEQsRUE4UFUsSUE5UFY7QUErUEMsYUEvUEQsRUErUFUsSUEvUFY7QUFnUUMsYUFoUUQsRUFnUVUsSUFoUVY7QUFpUUMsYUFqUUQsRUFpUVUsSUFqUVY7QUFrUUMsYUFsUUQsRUFrUVUsSUFsUVY7QUFtUUMsYUFuUUQsRUFtUVUsSUFuUVY7QUFvUUMsYUFwUUQsRUFvUVUsSUFwUVY7QUFxUUMsYUFyUUQsRUFxUVUsSUFyUVY7QUFzUUMsYUF0UUQsRUFzUVUsSUF0UVY7QUF1UUMsYUF2UUQsRUF1UVUsS0F2UVY7QUF3UUMsYUF4UUQsRUF3UVUsSUF4UVY7QUF5UUMsYUF6UUQsRUF5UVUsSUF6UVY7QUEwUUMsYUExUUQsRUEwUVUsSUExUVY7QUEyUUMsYUEzUUQsRUEyUVUsSUEzUVY7QUE0UUMsYUE1UUQsRUE0UVUsSUE1UVY7QUE2UUMsYUE3UUQsRUE2UVUsSUE3UVY7QUE4UUMsYUE5UUQsRUE4UVUsSUE5UVY7QUErUUMsYUEvUUQsRUErUVUsSUEvUVY7QUFnUkMsYUFoUkQsRUFnUlUsSUFoUlY7QUFpUkMsYUFqUkQsRUFpUlUsSUFqUlY7QUFrUkMsYUFsUkQsRUFrUlUsSUFsUlY7QUFtUkMsYUFuUkQsRUFtUlUsSUFuUlY7QUFvUkMsYUFwUkQsRUFvUlUsSUFwUlY7QUFxUkMsYUFyUkQsRUFxUlUsSUFyUlY7QUFzUkMsYUF0UkQsRUFzUlUsSUF0UlY7QUF1UkMsYUF2UkQsRUF1UlUsSUF2UlY7QUF3UkMsYUF4UkQsRUF3UlUsSUF4UlY7QUF5UkMsYUF6UkQsRUF5UlUsSUF6UlY7QUEwUkMsYUExUkQsRUEwUlUsSUExUlY7QUEyUkMsYUEzUkQsRUEyUlUsSUEzUlY7QUE0UkMsYUE1UkQsRUE0UlUsSUE1UlY7QUE2UkMsYUE3UkQsRUE2UlUsSUE3UlY7QUE4UkMsYUE5UkQsRUE4UlUsSUE5UlY7QUErUkMsYUEvUkQsRUErUlUsSUEvUlY7QUFnU0MsYUFoU0QsRUFnU1UsSUFoU1Y7QUFpU0MsYUFqU0QsRUFpU1UsSUFqU1Y7QUFrU0MsYUFsU0QsRUFrU1UsSUFsU1Y7QUFtU0MsYUFuU0QsRUFtU1UsSUFuU1Y7QUFvU0MsYUFwU0QsRUFvU1UsSUFwU1Y7QUFxU0MsYUFyU0QsRUFxU1UsSUFyU1Y7QUFzU0MsYUF0U0QsRUFzU1UsSUF0U1Y7QUF1U0MsYUF2U0QsRUF1U1UsSUF2U1Y7QUF3U0MsYUF4U0QsRUF3U1UsSUF4U1Y7QUF5U0MsYUF6U0QsRUF5U1UsSUF6U1Y7QUEwU0MsYUExU0QsRUEwU1UsSUExU1Y7QUEyU0MsYUEzU0QsRUEyU1UsSUEzU1Y7QUE0U0MsYUE1U0QsRUE0U1UsSUE1U1Y7QUE2U0MsYUE3U0QsRUE2U1UsSUE3U1Y7QUE4U0MsYUE5U0QsRUE4U1UsSUE5U1Y7QUErU0MsYUEvU0QsRUErU1UsSUEvU1Y7QUFnVEMsYUFoVEQsRUFnVFUsSUFoVFY7QUFpVEMsYUFqVEQsRUFpVFUsSUFqVFY7QUFrVEMsYUFsVEQsRUFrVFUsSUFsVFY7QUFtVEMsYUFuVEQsRUFtVFUsSUFuVFY7QUFvVEMsYUFwVEQsRUFvVFUsSUFwVFY7QUFxVEMsYUFyVEQsRUFxVFUsSUFyVFY7QUFzVEMsYUF0VEQsRUFzVFUsSUF0VFY7QUF1VEMsYUF2VEQsRUF1VFUsSUF2VFY7QUF3VEMsYUF4VEQsRUF3VFUsSUF4VFY7QUF5VEMsYUF6VEQsRUF5VFUsSUF6VFY7QUEwVEMsYUExVEQsRUEwVFUsSUExVFY7QUEyVEMsYUEzVEQsRUEyVFUsSUEzVFY7QUE0VEMsYUE1VEQsRUE0VFUsSUE1VFY7QUE2VEMsYUE3VEQsRUE2VFUsR0E3VFY7QUE4VEMsYUE5VEQsRUE4VFUsSUE5VFY7QUErVEMsYUEvVEQsRUErVFUsSUEvVFY7QUFnVUMsYUFoVUQsRUFnVVUsSUFoVVY7QUFpVUMsYUFqVUQsRUFpVVUsSUFqVVY7QUFrVUMsYUFsVUQsRUFrVVUsSUFsVVY7QUFtVUMsYUFuVUQsRUFtVVUsSUFuVVY7QUFvVUMsYUFwVUQsRUFvVVUsSUFwVVY7QUFxVUMsYUFyVUQsRUFxVVUsSUFyVVY7QUFzVUMsYUF0VUQsRUFzVVUsS0F0VVY7QUF1VUMsYUF2VUQsRUF1VVUsSUF2VVY7QUF3VUMsYUF4VUQsRUF3VVUsSUF4VVY7QUF5VUMsYUF6VUQsRUF5VVUsSUF6VVY7QUEwVUMsYUExVUQsRUEwVVUsSUExVVY7QUEyVUMsYUEzVUQsRUEyVVUsSUEzVVY7QUE0VUMsYUE1VUQsRUE0VVUsSUE1VVY7QUE2VUMsYUE3VUQsRUE2VVUsSUE3VVY7QUE4VUMsYUE5VUQsRUE4VVUsSUE5VVY7QUErVUMsYUEvVUQsRUErVVUsSUEvVVY7QUFnVkMsYUFoVkQsRUFnVlUsSUFoVlY7QUFpVkMsYUFqVkQsRUFpVlUsSUFqVlY7QUFrVkMsYUFsVkQsRUFrVlUsSUFsVlY7QUFtVkMsYUFuVkQsRUFtVlUsSUFuVlY7QUFvVkMsYUFwVkQsRUFvVlUsSUFwVlY7QUFxVkMsYUFyVkQsRUFxVlUsS0FyVlY7QUFzVkMsYUF0VkQsRUFzVlUsSUF0VlY7QUF1VkMsYUF2VkQsRUF1VlUsSUF2VlY7QUF3VkMsYUF4VkQsRUF3VlUsSUF4VlY7QUF5VkMsYUF6VkQsRUF5VlUsSUF6VlY7QUEwVkMsYUExVkQsRUEwVlUsSUExVlY7QUEyVkMsYUEzVkQsRUEyVlUsSUEzVlY7QUE0VkMsYUE1VkQsRUE0VlUsSUE1VlY7QUE2VkMsYUE3VkQsRUE2VlUsSUE3VlY7QUE4VkMsYUE5VkQsRUE4VlUsSUE5VlY7QUErVkMsYUEvVkQsRUErVlUsSUEvVlY7QUFnV0MsYUFoV0QsRUFnV1UsSUFoV1Y7QUFpV0MsYUFqV0QsRUFpV1UsSUFqV1Y7QUFrV0MsYUFsV0QsRUFrV1UsSUFsV1Y7QUFtV0MsYUFuV0QsRUFtV1Us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Q0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBbkhBLEVBekZBLEU7Ozs7Ozs7Ozs7OztBQy9FQTtBQUFBO0FBQUE7QUFBQTtBQUFvdkIsQ0FBZ0IsOHVCQUFHLEVBQUMsQzs7Ozs7Ozs7OztBQ0F4d0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoicGFnZXMvZ3JvdXAvYWRkR3JvdXAvYWRkR3JvdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTA2KTtcbiIsImltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xyXG5cclxuY29uc3QgU1RBVF9WRVJTSU9OID0gdmVyc2lvbjtcclxuY29uc3QgU1RBVF9VUkwgPSAnaHR0cHM6Ly90b25namkuZGNsb3VkLmlvL3VuaS9zdGF0JztcclxuY29uc3QgU1RBVF9INV9VUkwgPSAnaHR0cHM6Ly90b25namkuZGNsb3VkLmlvL3VuaS9zdGF0LmdpZic7IFxyXG5jb25zdCBQQUdFX1BWRVJfVElNRSA9IDE4MDA7XHJcbmNvbnN0IEFQUF9QVkVSX1RJTUUgPSAzMDA7XHJcbmNvbnN0IE9QRVJBVElOR19USU1FID0gMTA7XHJcblxyXG5jb25zdCBVVUlEX0tFWSA9ICdfX0RDX1NUQVRfVVVJRCc7XHJcbmNvbnN0IFVVSURfVkFMVUUgPSAnX19EQ19VVUlEX1ZBTFVFJztcclxuXHJcbmZ1bmN0aW9uIGdldFV1aWQoKSB7XHJcbiAgbGV0IHV1aWQgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdXVpZCA9IHBsdXMucnVudGltZS5nZXREQ2xvdWRJZCgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB1dWlkID0gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXVpZFxyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIHV1aWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoVVVJRF9LRVkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHV1aWQgPSBVVUlEX1ZBTFVFO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF1dWlkKSB7XHJcbiAgICB1dWlkID0gRGF0ZS5ub3coKSArICcnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWU3KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhVVUlEX0tFWSwgdXVpZCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhVVUlEX0tFWSwgVVVJRF9WQUxVRSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB1dWlkO1xyXG59XHJcblxyXG5jb25zdCBnZXRTZ2luID0gKHN0YXREYXRhKSA9PiB7XHJcbiAgbGV0IGFyciA9IE9iamVjdC5rZXlzKHN0YXREYXRhKTtcclxuICBsZXQgc29ydEFyciA9IGFyci5zb3J0KCk7XHJcbiAgbGV0IHNnaW4gPSB7fTtcclxuICBsZXQgc2dpblN0ciA9ICcnO1xyXG4gIGZvciAodmFyIGkgaW4gc29ydEFycikge1xyXG4gICAgc2dpbltzb3J0QXJyW2ldXSA9IHN0YXREYXRhW3NvcnRBcnJbaV1dO1xyXG4gICAgc2dpblN0ciArPSBzb3J0QXJyW2ldICsgJz0nICsgc3RhdERhdGFbc29ydEFycltpXV0gKyAnJic7XHJcbiAgfVxyXG4gIC8vIGNvbnN0IG9wdGlvbnMgPSBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgLy8gc2dpblN0ciA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSkgKyAnJmtleT0nICsgU1RBVF9LRVk7XHJcbiAgLy8gY29uc3Qgc2kgPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JykudXBkYXRlKHNnaW5TdHIpLmRpZ2VzdCgnaGV4Jyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNpZ246ICcnLFxyXG4gICAgb3B0aW9uczogc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKVxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBnZXRTcGxpY2luZyA9IChkYXRhKSA9PiB7XHJcbiAgbGV0IHN0ciA9ICcnO1xyXG4gIGZvciAodmFyIGkgaW4gZGF0YSkge1xyXG4gICAgc3RyICs9IGkgKyAnPScgKyBkYXRhW2ldICsgJyYnO1xyXG4gIH1cclxuICByZXR1cm4gc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoIC0gMSlcclxufTtcclxuXHJcbmNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHBhcnNlSW50KG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQbGF0Zm9ybU5hbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1MaXN0ID0ge1xyXG4gICAgJ2FwcC1wbHVzJzogJ24nLFxyXG4gICAgJ2g1JzogJ2g1JyxcclxuICAgICdtcC13ZWl4aW4nOiAnd3gnLFxyXG4gICAgJ21wLWFsaXBheSc6ICdhbGknLFxyXG4gICAgJ21wLWJhaWR1JzogJ2JkJyxcclxuICAgICdtcC10b3V0aWFvJzogJ3R0JyxcclxuICAgICdtcC1xcSc6ICdxcSdcclxuICB9O1xyXG4gIHJldHVybiBwbGF0Zm9ybUxpc3RbcHJvY2Vzcy5lbnYuVlVFX0FQUF9QTEFURk9STV07XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWNrTmFtZSA9ICgpID0+IHtcclxuICBsZXQgcGFja05hbWUgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICd3eCcgfHwgZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdxcScpIHtcclxuICAgIC8vIOWFvOWuueW+ruS/oeWwj+eoi+W6j+S9jueJiOacrOWfuuehgOW6k1xyXG4gICAgaWYodW5pLmNhbklVc2UoJ2dldEFjY291bnRJbmZvU3luYycpKXtcclxuICAgICAgcGFja05hbWUgPSB1bmkuZ2V0QWNjb3VudEluZm9TeW5jKCkubWluaVByb2dyYW0uYXBwSWQgfHwgJyc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwYWNrTmFtZVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VmVyc2lvbiA9ICgpID0+IHtcclxuICByZXR1cm4gZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyA/IHBsdXMucnVudGltZS52ZXJzaW9uIDogJyc7XHJcbn07XHJcblxyXG5jb25zdCBnZXRDaGFubmVsID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTmFtZSA9IGdldFBsYXRmb3JtTmFtZSgpO1xyXG4gIGxldCBjaGFubmVsID0gJyc7XHJcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ24nKSB7XHJcbiAgICBjaGFubmVsID0gcGx1cy5ydW50aW1lLmNoYW5uZWw7XHJcbiAgfVxyXG4gIHJldHVybiBjaGFubmVsO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2NlbmUgPSAob3B0aW9ucykgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTmFtZSA9IGdldFBsYXRmb3JtTmFtZSgpO1xyXG4gIGxldCBzY2VuZSA9ICcnO1xyXG4gIGlmIChvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxuICB9XHJcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ3d4Jykge1xyXG4gICAgc2NlbmUgPSB1bmkuZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKS5zY2VuZTtcclxuICB9XHJcbiAgcmV0dXJuIHNjZW5lO1xyXG59O1xyXG5jb25zdCBGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSA9ICdGaXJzdF9fVmlzaXRfX1RpbWUnO1xyXG5jb25zdCBMYXN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0xhc3RfX1Zpc2l0X19UaW1lJztcclxuXHJcbmNvbnN0IGdldEZpcnN0VmlzaXRUaW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICB1bmkuc2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVksIHRpbWUpO1xyXG4gICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIH1cclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcbmNvbnN0IGdldExhc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICBsZXQgdGltZSA9IDA7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIHRpbWUgPSB0aW1lU3RvcmdlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aW1lID0gJyc7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZLCBnZXRUaW1lKCkpO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IFBBR0VfUkVTSURFTkNFX1RJTUUgPSAnX19wYWdlX19yZXNpZGVuY2VfX3RpbWUnO1xyXG5sZXQgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcbmxldCBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSAwO1xyXG5cclxuXHJcbmNvbnN0IHNldFBhZ2VSZXNpZGVuY2VUaW1lID0gKCkgPT4ge1xyXG4gIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhQQUdFX1JFU0lERU5DRV9USU1FLCBnZXRUaW1lKCkpO1xyXG4gIH1cclxuICByZXR1cm4gRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gZ2V0VGltZSgpO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gdW5pLmdldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUpO1xyXG4gIH1cclxuICByZXR1cm4gTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIC0gRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZVxyXG59O1xyXG5jb25zdCBUT1RBTF9fVklTSVRfX0NPVU5UID0gJ1RvdGFsX19WaXNpdF9fQ291bnQnO1xyXG5jb25zdCBnZXRUb3RhbFZpc2l0Q291bnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5UKTtcclxuICBsZXQgY291bnQgPSAxO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICBjb3VudCA9IHRpbWVTdG9yZ2U7XHJcbiAgICBjb3VudCsrO1xyXG4gIH1cclxuICB1bmkuc2V0U3RvcmFnZVN5bmMoVE9UQUxfX1ZJU0lUX19DT1VOVCwgY291bnQpO1xyXG4gIHJldHVybiBjb3VudDtcclxufTtcclxuXHJcbmNvbnN0IEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMgPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgZGF0YSA9IHt9O1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3RhdERhdGEpIHtcclxuICAgIGRhdGFbcHJvcF0gPSBlbmNvZGVVUklDb21wb25lbnQoc3RhdERhdGFbcHJvcF0pO1xyXG4gIH1cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmxldCBTZXRfX0ZpcnN0X19UaW1lID0gMDtcclxubGV0IFNldF9fTGFzdF9fVGltZSA9IDA7XHJcblxyXG5jb25zdCBnZXRGaXJzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0ZpcnN0X19UaW1lID0gdGltZTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSAwO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldExhc3RUaW1lID0gKCkgPT4ge1xyXG4gIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgU2V0X19MYXN0X19UaW1lID0gdGltZTtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBnZXRSZXNpZGVuY2VUaW1lID0gKHR5cGUpID0+IHtcclxuICBsZXQgcmVzaWRlbmNlVGltZSA9IDA7XHJcbiAgaWYgKFNldF9fRmlyc3RfX1RpbWUgIT09IDApIHtcclxuICAgIHJlc2lkZW5jZVRpbWUgPSBTZXRfX0xhc3RfX1RpbWUgLSBTZXRfX0ZpcnN0X19UaW1lO1xyXG4gIH1cclxuXHJcbiAgcmVzaWRlbmNlVGltZSA9IHBhcnNlSW50KHJlc2lkZW5jZVRpbWUgLyAxMDAwKTtcclxuICByZXNpZGVuY2VUaW1lID0gcmVzaWRlbmNlVGltZSA8IDEgPyAxIDogcmVzaWRlbmNlVGltZTtcclxuICBpZiAodHlwZSA9PT0gJ2FwcCcpIHtcclxuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBBUFBfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG4gIGlmICh0eXBlID09PSAncGFnZScpIHtcclxuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBQQUdFX1BWRVJfVElNRSA/IHRydWUgOiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc2lkZW5jZVRpbWUsXHJcbiAgICAgIG92ZXJ0aW1lXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc2lkZW5jZVRpbWVcclxuICB9O1xyXG5cclxufTtcclxuXHJcbmNvbnN0IGdldFJvdXRlID0gKCkgPT4ge1xyXG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgbGV0IF9zZWxmID0gcGFnZS4kdm07XHJcblxyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlKSB8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUm91dGUgPSAoc2VsZikgPT4ge1xyXG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgbGV0IF9zZWxmID0gcGFnZS4kdm07XHJcbiAgbGV0IHF1ZXJ5ID0gc2VsZi5fcXVlcnk7XHJcbiAgbGV0IHN0ciA9IHF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSA6ICcnO1xyXG4gIC8vIGNsZWFyXHJcbiAgc2VsZi5fcXVlcnkgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdiZCcpIHtcclxuICAgIHJldHVybiBfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2UuaXMgKyBzdHI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoX3NlbGYuJHNjb3BlICYmIF9zZWxmLiRzY29wZS5yb3V0ZSArIHN0ciApfHwgKF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5yb3V0ZSArIHN0cik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVR5cGVzID0gKHNlbGYpID0+IHtcclxuICBpZiAoc2VsZi5tcFR5cGUgPT09ICdwYWdlJyB8fCAoc2VsZi4kbXAgJiYgc2VsZi4kbXAubXBUeXBlID09PSAncGFnZScpIHx8IHNlbGYuJG9wdGlvbnMubXBUeXBlID09PSAncGFnZScpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5jb25zdCBjYWxpYnJhdGlvbiA9IChldmVudE5hbWUsIG9wdGlvbnMpID0+IHtcclxuICAvLyAgbG9naW4g44CBIHNoYXJlIOOAgXBheV9zdWNjZXNzIOOAgXBheV9mYWlsIOOAgXJlZ2lzdGVyIOOAgXRpdGxlXHJcbiAgaWYoIWV2ZW50TmFtZSl7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IOe8uuWwkSBbZXZlbnROYW1lXSDlj4LmlbBgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgZXZlbnROYW1lICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDnsbvlnotgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmIChldmVudE5hbWUubGVuZ3RoID4gMjU1KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbb3B0aW9uc10g5Y+C5pWw57G75Z6L6ZSZ6K+vLOWPquiDveS4uiBTdHJpbmcg5oiWIE9iamVjdCDnsbvlnotgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnICYmIG9wdGlvbnMubGVuZ3RoID4gMjU1KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDplb/luqbkuI3og73lpKfkuo4gMjU1YCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKGV2ZW50TmFtZSA9PT0gJ3RpdGxlJyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ3VuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw5Li6IHRpdGxlIOaXtu+8jFtvcHRpb25zXSDlj4LmlbDlj6rog73kuLogU3RyaW5nIOexu+WeiycpO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBQYWdlc0pzb24gPSByZXF1aXJlKCd1bmktcGFnZXM/e1widHlwZVwiOlwic3R5bGVcIn0nKS5kZWZhdWx0O1xyXG5jb25zdCBzdGF0Q29uZmlnID0gcmVxdWlyZSgndW5pLXN0YXQtY29uZmlnJykuZGVmYXVsdCB8fCByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKTtcclxuXHJcbmNvbnN0IHJlc3VsdE9wdGlvbnMgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHJcbmNsYXNzIFV0aWwge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zZWxmID0gJyc7XHJcbiAgICB0aGlzLl9yZXRyeSA9IDA7XHJcbiAgICB0aGlzLl9wbGF0Zm9ybSA9ICcnO1xyXG4gICAgdGhpcy5fcXVlcnkgPSB7fTtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZSA9IHtcclxuICAgICAgY29uZmlnOiAnJyxcclxuICAgICAgcGFnZTogJycsXHJcbiAgICAgIHJlcG9ydDogJycsXHJcbiAgICAgIGx0OiAnJ1xyXG4gICAgfTtcclxuICAgIHRoaXMuX29wZXJhdGluZ1RpbWUgPSAwO1xyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7XHJcbiAgICAgICcxJzogW10sXHJcbiAgICAgICcxMSc6IFtdXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fX3ByZXZlbnRfdHJpZ2dlcmluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSBmYWxzZTtcclxuICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSAnJztcclxuICAgIHRoaXMuc3RhdERhdGEgPSB7XHJcbiAgICAgIHV1aWQ6IGdldFV1aWQoKSxcclxuICAgICAgdXQ6IGdldFBsYXRmb3JtTmFtZSgpLFxyXG4gICAgICBtcG46IGdldFBhY2tOYW1lKCksXHJcbiAgICAgIGFrOiBzdGF0Q29uZmlnLmFwcGlkLFxyXG4gICAgICB1c3Y6IFNUQVRfVkVSU0lPTixcclxuICAgICAgdjogZ2V0VmVyc2lvbigpLFxyXG4gICAgICBjaDogZ2V0Q2hhbm5lbCgpLFxyXG4gICAgICBjbjogJycsXHJcbiAgICAgIHBuOiAnJyxcclxuICAgICAgY3Q6ICcnLFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHR0OiAnJyxcclxuICAgICAgcDogcmVzdWx0T3B0aW9ucy5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnID8gJ2EnIDogJ2knLFxyXG4gICAgICBicmFuZDogcmVzdWx0T3B0aW9ucy5icmFuZCB8fCAnJyxcclxuICAgICAgbWQ6IHJlc3VsdE9wdGlvbnMubW9kZWwsXHJcbiAgICAgIHN2OiByZXN1bHRPcHRpb25zLnN5c3RlbS5yZXBsYWNlKC8oQW5kcm9pZHxpT1MpXFxzLywgJycpLFxyXG4gICAgICBtcHNkazogcmVzdWx0T3B0aW9ucy5TREtWZXJzaW9uIHx8ICcnLFxyXG4gICAgICBtcHY6IHJlc3VsdE9wdGlvbnMudmVyc2lvbiB8fCAnJyxcclxuICAgICAgbGFuZzogcmVzdWx0T3B0aW9ucy5sYW5ndWFnZSxcclxuICAgICAgcHI6IHJlc3VsdE9wdGlvbnMucGl4ZWxSYXRpbyxcclxuICAgICAgd3c6IHJlc3VsdE9wdGlvbnMud2luZG93V2lkdGgsXHJcbiAgICAgIHdoOiByZXN1bHRPcHRpb25zLndpbmRvd0hlaWdodCxcclxuICAgICAgc3c6IHJlc3VsdE9wdGlvbnMuc2NyZWVuV2lkdGgsXHJcbiAgICAgIHNoOiByZXN1bHRPcHRpb25zLnNjcmVlbkhlaWdodFxyXG4gICAgfTtcclxuXHJcbiAgfVxyXG5cclxuICBfYXBwbGljYXRpb25TaG93KCkge1xyXG4gICAgaWYgKHRoaXMuX19saWNhdGlvbkhpZGUpIHtcclxuICAgICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ2FwcCcpO1xyXG4gICAgICBpZiAodGltZS5vdmVydGltZSkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICAgIHNjZW5lOiB0aGlzLnN0YXREYXRhLnNjXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfYXBwbGljYXRpb25IaWRlKHNlbGYsIHR5cGUpIHtcclxuXHJcbiAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gdHJ1ZTtcclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgpO1xyXG4gICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgICBjb25zdCByb3V0ZSA9IGdldFBhZ2VSb3V0ZSh0aGlzKTtcclxuICAgIHRoaXMuX3NlbmRIaWRlUmVxdWVzdCh7XHJcbiAgICAgIHVybHJlZjogcm91dGUsXHJcbiAgICAgIHVybHJlZl90czogdGltZS5yZXNpZGVuY2VUaW1lXHJcbiAgICB9LCB0eXBlKTtcclxuICB9XHJcblxyXG4gIF9wYWdlU2hvdygpIHtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgY29uc3Qgcm91dGVwYXRoID0gZ2V0Um91dGUoKTtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5jb25maWcgPSBQYWdlc0pzb24gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0udGl0bGVOVmlldyAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3LnRpdGxlVGV4dCB8fFxyXG4gICAgICBQYWdlc0pzb24gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0ubmF2aWdhdGlvbkJhclRpdGxlVGV4dCB8fCAnJztcclxuXHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uU2hvdykge1xyXG4gICAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygn6L+Z5pivIG9uTGF1Y2gg5LmL5ZCO5omn6KGM55qE56ys5LiA5qyhIHBhZ2VTaG93IO+8jOS4uuS4i+asoeiusOW9leaXtumXtOWBmuWHhuWkhycpO1xyXG4gICAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9IHJvdXRlO1xyXG4gICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ3BhZ2UnKTtcclxuICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIHBhdGg6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICB9XHJcblxyXG4gIF9wYWdlSGlkZSgpIHtcclxuICAgIGlmICghdGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgICB0aGlzLl9zZW5kUGFnZVJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWY6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZSA9IHtcclxuICAgICAgICBjb25maWc6ICcnLFxyXG4gICAgICAgIHBhZ2U6ICcnLFxyXG4gICAgICAgIHJlcG9ydDogJycsXHJcbiAgICAgICAgbHQ6ICcnXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9sb2dpbigpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXk6ICdsb2dpbidcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgX3NoYXJlKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ3NoYXJlJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIF9wYXltZW50KGtleSkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleVxyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIF9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKSB7XHJcblxyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzEnO1xyXG4gICAgbGV0IHF1ZXJ5ID0gb3B0aW9ucy5xdWVyeSAmJiBKU09OLnN0cmluZ2lmeShvcHRpb25zLnF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpIDogJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLmx0ID0gJzEnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS51cmwgPSAob3B0aW9ucy5wYXRoICsgcXVlcnkpIHx8ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50ID0gZ2V0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5zYyA9IGdldFNjZW5lKG9wdGlvbnMuc2NlbmUpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5mdnRzID0gZ2V0Rmlyc3RWaXNpdFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEubHZ0cyA9IGdldExhc3RWaXNpdFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEudHZjID0gZ2V0VG90YWxWaXNpdENvdW50KCk7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB0aGlzLmdldFByb3BlcnR5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdldE5ldHdvcmtJbmZvKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2VuZFBhZ2VSZXF1ZXN0KG9wdCkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJsLFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90c1xyXG4gICAgfSA9IG9wdDtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5sdCA9ICcxMSc7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcxMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHR0OiB0aGlzLnN0YXREYXRhLnR0LFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90cyxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgX3NlbmRIaWRlUmVxdWVzdChvcHQsIHR5cGUpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMycsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90cyxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMsIHR5cGUpO1xyXG4gIH1cclxuICBfc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICBrZXkgPSAnJyxcclxuICAgIHZhbHVlID0gXCJcIlxyXG4gIH0gPSB7fSkge1xyXG4gICAgY29uc3Qgcm91dGUgPSB0aGlzLl9sYXN0UGFnZVJvdXRlO1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMjEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJsOiByb3V0ZSxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIGVfbjoga2V5LFxyXG4gICAgICBlX3Y6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWUudG9TdHJpbmcoKSxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBnZXROZXR3b3JrSW5mbygpIHtcclxuICAgIHVuaS5nZXROZXR3b3JrVHlwZSh7XHJcbiAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXREYXRhLm5ldCA9IHJlc3VsdC5uZXR3b3JrVHlwZTtcclxuICAgICAgICB0aGlzLmdldExvY2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvcGVydHkoKSB7XHJcbiAgICBwbHVzLnJ1bnRpbWUuZ2V0UHJvcGVydHkocGx1cy5ydW50aW1lLmFwcGlkLCAod2d0aW5mbykgPT4ge1xyXG4gICAgICB0aGlzLnN0YXREYXRhLnYgPSB3Z3RpbmZvLnZlcnNpb24gfHwgJyc7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TG9jYXRpb24oKSB7XHJcbiAgICBpZiAoc3RhdENvbmZpZy5nZXRMb2NhdGlvbikge1xyXG4gICAgICB1bmkuZ2V0TG9jYXRpb24oe1xyXG4gICAgICAgIHR5cGU6ICd3Z3M4NCcsXHJcbiAgICAgICAgZ2VvY29kZTogdHJ1ZSxcclxuICAgICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LmFkZHJlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jbiA9IHJlc3VsdC5hZGRyZXNzLmNvdW50cnk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEucG4gPSByZXN1bHQuYWRkcmVzcy5wcm92aW5jZTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jdCA9IHJlc3VsdC5hZGRyZXNzLmNpdHk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSByZXN1bHQubGF0aXR1ZGU7XHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IHJlc3VsdC5sb25naXR1ZGU7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QodGhpcy5zdGF0RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEubGF0ID0gMDtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sbmcgPSAwO1xyXG4gICAgICB0aGlzLnJlcXVlc3QodGhpcy5zdGF0RGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0KGRhdGEsIHR5cGUpIHtcclxuICAgIGxldCB0aW1lID0gZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGU7XHJcbiAgICBkYXRhLnR0biA9IHRpdGxlLnBhZ2U7XHJcbiAgICBkYXRhLnR0cGogPSB0aXRsZS5jb25maWc7XHJcbiAgICBkYXRhLnR0YyA9IHRpdGxlLnJlcG9ydDtcclxuXHJcbiAgICBsZXQgcmVxdWVzdERhdGEgPSB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpIHx8IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXF1ZXN0RGF0YVtkYXRhLmx0XSkge1xyXG4gICAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XSA9IFtdO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdERhdGFbZGF0YS5sdF0ucHVzaChkYXRhKTtcclxuXHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJywgcmVxdWVzdERhdGEpO1xyXG4gICAgfVxyXG4gICAgaWYgKGdldFBhZ2VSZXNpZGVuY2VUaW1lKCkgPCBPUEVSQVRJTkdfVElNRSAmJiAhdHlwZSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCB1bmlTdGF0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pU3RhdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XHJcbiAgICB9XHJcbiAgICAvLyDml7bpl7TotoXov4fvvIzph43mlrDojrflj5bml7bpl7TmiLNcclxuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBsZXQgZmlyc3RBcnIgPSBbXTtcclxuICAgIGxldCBjb250ZW50QXJyID0gW107XHJcbiAgICBsZXQgbGFzdEFyciA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgaW4gdW5pU3RhdERhdGEpIHtcclxuICAgICAgY29uc3QgcmQgPSB1bmlTdGF0RGF0YVtpXTtcclxuICAgICAgcmQuZm9yRWFjaCgoZWxtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IGdldFNwbGljaW5nKGVsbSk7XHJcbiAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgIGZpcnN0QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSAzKSB7XHJcbiAgICAgICAgICBsYXN0QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnRlbnRBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcnN0QXJyLnB1c2goLi4uY29udGVudEFyciwgLi4ubGFzdEFycik7XHJcbiAgICBsZXQgb3B0aW9uc0RhdGEgPSB7XHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLCAvL+e7n+iuoSBTREsg54mI5pys5Y+3XHJcbiAgICAgIHQ6IHRpbWUsIC8v5Y+R6YCB6K+35rGC5pe255qE5pe26Ze05oiuXHJcbiAgICAgIHJlcXVlc3RzOiBKU09OLnN0cmluZ2lmeShmaXJzdEFyciksXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhID0ge307XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEudXQgPT09ICdoNScpIHtcclxuICAgICAgdGhpcy5pbWFnZVJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyAmJiB0aGlzLnN0YXREYXRhLnAgPT09ICdhJykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gIH1cclxuICBfc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpIHtcclxuICAgIHVuaS5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBTVEFUX1VSTCxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIC8vIGhlYWRlcjoge1xyXG4gICAgICAvLyAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLy8g6buY6K6k5YC8XHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIGRhdGE6IG9wdGlvbnNEYXRhLFxyXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnc3RhdCByZXF1ZXN0IHN1Y2Nlc3MnKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKCsrdGhpcy5fcmV0cnkgPCAzKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogaDUg6K+35rGCXHJcbiAgICovXHJcbiAgaW1hZ2VSZXF1ZXN0KGRhdGEpIHtcclxuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbGV0IG9wdGlvbnMgPSBnZXRTZ2luKEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMoZGF0YSkpLm9wdGlvbnM7XHJcbiAgICBpbWFnZS5zcmMgPSBTVEFUX0g1X1VSTCArICc/JyArIG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBzZW5kRXZlbnQoa2V5LCB2YWx1ZSkge1xyXG4gICAgLy8g5qCh6aqMIHR5cGUg5Y+C5pWwXHJcbiAgICBpZiAoY2FsaWJyYXRpb24oa2V5LCB2YWx1ZSkpIHJldHVyblxyXG5cclxuICAgIGlmIChrZXkgPT09ICd0aXRsZScpIHtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLnJlcG9ydCA9IHZhbHVlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXksXHJcbiAgICAgIHZhbHVlOiB0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlXHJcbiAgICB9LCAxKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBTdGF0IGV4dGVuZHMgVXRpbCB7XHJcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU3RhdCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgLy8g5rOo5YaM5oum5oiq5ZmoXHJcbiAgICBpZiAodHlwZW9mIHVuaS5hZGRJbnRlcmNlcHRvciA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICB0aGlzLmFkZEludGVyY2VwdG9ySW5pdCgpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdExvZ2luKCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0U2hhcmUodHJ1ZSk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEludGVyY2VwdG9ySW5pdCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignc2V0TmF2aWdhdGlvbkJhclRpdGxlJywge1xyXG4gICAgICBpbnZva2UoYXJncykge1xyXG4gICAgICAgIHNlbGYuX25hdmlnYXRpb25CYXJUaXRsZS5wYWdlID0gYXJncy50aXRsZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRMb2dpbigpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignbG9naW4nLCB7XHJcbiAgICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgIHNlbGYuX2xvZ2luKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0U2hhcmUodHlwZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKCF0eXBlKSB7XHJcbiAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzaGFyZScsIHtcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3JlcXVlc3RQYXltZW50Jywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3BheW1lbnQoJ3BheV9zdWNjZXNzJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X2ZhaWwnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXBvcnQob3B0aW9ucywgc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygncmVwb3J0IGluaXQnKTtcclxuICAgIC8vIH1cclxuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gdHJ1ZTtcclxuICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgbG9hZChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICBpZiAoIXNlbGYuJHNjb3BlICYmICFzZWxmLiRtcCkge1xyXG4gICAgICBjb25zdCBwYWdlID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgIHNlbGYuJHNjb3BlID0gcGFnZVtwYWdlLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIHRoaXMuX3F1ZXJ5ID0gb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNob3coc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgICAgdGhpcy5fcGFnZVNob3coc2VsZik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblNob3coc2VsZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWFkeShzZWxmKSB7XHJcbiAgICAvLyB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgLy8gICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIC8vIH1cclxuICB9XHJcbiAgaGlkZShzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlSGlkZShzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uSGlkZShzZWxmLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcbiAgZXJyb3IoZW0pIHtcclxuICAgIGlmICh0aGlzLl9wbGF0Zm9ybSA9PT0gJ2RldnRvb2xzJykge1xyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ+W9k+WJjei/kOihjOeOr+Wig+S4uuW8gOWPkeiAheW3peWFt++8jOS4jeS4iuaKpeaVsOaNruOAgicpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBlbVZhbCA9ICcnO1xyXG4gICAgaWYgKCFlbS5tZXNzYWdlKSB7XHJcbiAgICAgIGVtVmFsID0gSlNPTi5zdHJpbmdpZnkoZW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZW1WYWwgPSBlbS5zdGFjaztcclxuICAgIH1cclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzMxJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICBtcHNkazogdGhpcy5zdGF0RGF0YS5tcHNkayxcclxuICAgICAgbXB2OiB0aGlzLnN0YXREYXRhLm1wdixcclxuICAgICAgdjogdGhpcy5zdGF0RGF0YS52LFxyXG4gICAgICBlbTogZW1WYWwsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3RhdCA9IFN0YXQuZ2V0SW5zdGFuY2UoKTtcclxubGV0IGlzSGlkZSA9IGZhbHNlO1xyXG5jb25zdCBsaWZlY3ljbGUgPSB7XHJcbiAgb25MYXVuY2gob3B0aW9ucykge1xyXG4gICAgc3RhdC5yZXBvcnQob3B0aW9ucywgdGhpcyk7XHJcbiAgfSxcclxuICBvblJlYWR5KCkge1xyXG4gICAgc3RhdC5yZWFkeSh0aGlzKTtcclxuICB9LFxyXG4gIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICBzdGF0LmxvYWQob3B0aW9ucywgdGhpcyk7XHJcbiAgICAvLyDph43lhpnliIbkuqvvvIzojrflj5bliIbkuqvkuIrmiqXkuovku7ZcclxuICAgIGlmICh0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZSkge1xyXG4gICAgICBsZXQgb2xkU2hhcmVBcHBNZXNzYWdlID0gdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2U7XHJcbiAgICAgIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICAgIHN0YXQuaW50ZXJjZXB0U2hhcmUoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBvbGRTaGFyZUFwcE1lc3NhZ2UuY2FsbCh0aGlzLCBvcHRpb25zKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25TaG93KCkge1xyXG4gICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICBzdGF0LnNob3codGhpcyk7XHJcbiAgfSxcclxuICBvbkhpZGUoKSB7XHJcbiAgICBpc0hpZGUgPSB0cnVlO1xyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICBpZiAoaXNIaWRlKSB7XHJcbiAgICAgIGlzSGlkZSA9IGZhbHNlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHN0YXQuaGlkZSh0aGlzKTtcclxuICB9LFxyXG4gIG9uRXJyb3IoZSkge1xyXG4gICAgc3RhdC5lcnJvcihlKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgdW5pLnJlcG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMpIHt9O1xyXG4gIH1lbHNle1xyXG4gICAgY29uc3QgVnVlID0gcmVxdWlyZSgndnVlJyk7XHJcbiAgICAoVnVlLmRlZmF1bHQgfHwgVnVlKS5taXhpbihsaWZlY3ljbGUpO1xyXG4gICAgdW5pLnJlcG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMpIHtcclxuICAgICAgc3RhdC5zZW5kRXZlbnQodHlwZSwgb3B0aW9ucyk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxubWFpbigpO1xyXG4iLCJmdW5jdGlvbiBpbml0VW5pKCkge1xyXG5cclxuICAgIHZhciBpc0ZuID0gZnVuY3Rpb24gaXNGbih2KSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2ID09PSAnZnVuY3Rpb24nO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaGFuZGxlUHJvbWlzZSA9IGZ1bmN0aW9uIGhhbmRsZVByb21pc2UocHJvbWlzZSkge1xyXG4gICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gW251bGwsIGRhdGFdO1xyXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgICByZXR1cm4gW2Vycl07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBSRUdFWCA9IC9eXFwkfF5vbnxeY3JlYXRlfFN5bmMkfE1hbmFnZXIkfF5wYXVzZS87XHJcbiAgICB2YXIgQVBJX05PUk1BTF9MSVNUID0gWydvcycsICdnZXRDdXJyZW50U3ViTlZ1ZScsICdnZXRTdWJOVnVlQnlJZCcsICdzdG9wUmVjb3JkJywgJ3N0b3BWb2ljZScsXHJcbiAgICAgICAgJ3N0b3BCYWNrZ3JvdW5kQXVkaW8nLCAnc3RvcFB1bGxEb3duUmVmcmVzaCcsICdoaWRlS2V5Ym9hcmQnLCAnaGlkZVRvYXN0JywgJ2hpZGVMb2FkaW5nJyxcclxuICAgICAgICAnc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nJywgJ2hpZGVOYXZpZ2F0aW9uQmFyTG9hZGluZycsICdjYW5JVXNlJywgJ25hdmlnYXRlQmFjaycsICdjbG9zZVNvY2tldCcsXHJcbiAgICAgICAgJ3BhZ2VTY3JvbGxUbycsICdkcmF3Q2FudmFzJ1xyXG4gICAgXTtcclxuXHJcbiAgICB2YXIgc2hvdWxkUHJvbWlzZSA9IGZ1bmN0aW9uIHNob3VsZFByb21pc2UobmFtZSkge1xyXG4gICAgICAgIGlmIChSRUdFWC50ZXN0KG5hbWUpICYmIG5hbWUgIT09ICdjcmVhdGVCTEVDb25uZWN0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh+QVBJX05PUk1BTF9MSVNULmluZGV4T2YobmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHByb21pc2lmeSA9IGZ1bmN0aW9uIHByb21pc2lmeShhcGkpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNGbihvcHRpb25zLnN1Y2Nlc3MpIHx8IGlzRm4ob3B0aW9ucy5mYWlsKSB8fCBpc0ZuKG9wdGlvbnMuY29tcGxldGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpLmFwcGx5KHVuZGVmaW5lZCwgW29wdGlvbnNdLmNvbmNhdChwYXJhbXMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlUHJvbWlzZShuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgICAgIGFwaS5hcHBseSh1bmRlZmluZWQsIFtPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsOiByZWplY3RcclxuICAgICAgICAgICAgICAgIH0pXS5jb25jYXQocGFyYW1zKSk7XHJcbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1leHRlbmQtbmF0aXZlICovXHJcbiAgICAgICAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5ID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlbihmdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyByZWFzb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvbk1lc3NhZ2VDYWxsYmFja3MgPSBbXTtcclxuXHJcbiAgICB2YXIgb3JpZ2luID0gdm9pZCAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uU3ViTlZ1ZU1lc3NhZ2UoZGF0YSkge1xyXG4gICAgICAgIG9uTWVzc2FnZUNhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICBvcmlnaW46IG9yaWdpbixcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHdlYnZpZXdJZCA9IHdlZXhQbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKS5pZDtcclxuXHJcbiAgICB2YXIgY2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKCdVTkktQVBQLVNVQk5WVUUnKTtcclxuICAgIGNoYW5uZWwub25tZXNzYWdlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQuZGF0YS50byA9PT0gd2Vidmlld0lkKSB7XHJcbiAgICAgICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2UoZXZlbnQuZGF0YS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHdyYXBwZXIod2Vidmlldykge1xyXG4gICAgICAgIHdlYnZpZXcuJHByb2Nlc3NlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHZhciBjdXJyZW50V2Vidmlld0lkID0gd2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkO1xyXG4gICAgICAgIHZhciBpc1BvcHVwTlZ1ZSA9IGN1cnJlbnRXZWJ2aWV3SWQgPT09IHdlYnZpZXcuaWQ7XHJcblxyXG4gICAgICAgIHZhciBob3N0TlZ1ZUlkID0gd2Vidmlldy5fX3VuaWFwcF9vcmlnaW5fdHlwZSA9PT0gJ3VuaU5WaWV3JyAmJiB3ZWJ2aWV3Ll9fdW5pYXBwX29yaWdpbl9pZDtcclxuICAgICAgICB2YXIgcG9wdXBOVnVlSWQgPSB3ZWJ2aWV3LmlkO1xyXG5cclxuICAgICAgICB3ZWJ2aWV3LnBvc3RNZXNzYWdlID0gZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoaG9zdE5WdWVJZCkge1xyXG4gICAgICAgICAgICAgICAgY2hhbm5lbC5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB0bzogaXNQb3B1cE5WdWUgPyBob3N0TlZ1ZUlkIDogcG9wdXBOVnVlSWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdVbmlBcHBTdWJOVnVlJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5vbk1lc3NhZ2UgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBvbk1lc3NhZ2VDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKCF3ZWJ2aWV3Ll9fdW5pYXBwX21hc2tfaWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvcmlnaW4gPSB3ZWJ2aWV3Ll9fdW5pYXBwX2hvc3Q7XHJcblxyXG4gICAgICAgIHZhciBtYXNrQ29sb3IgPSB3ZWJ2aWV3Ll9fdW5pYXBwX21hc2s7XHJcblxyXG4gICAgICAgIHZhciBtYXNrV2VidmlldyA9IHdlZXhQbHVzLndlYnZpZXcuZ2V0V2Vidmlld0J5SWQod2Vidmlldy5fX3VuaWFwcF9tYXNrX2lkKTtcclxuICAgICAgICBtYXNrV2VidmlldyA9IG1hc2tXZWJ2aWV3LnBhcmVudCgpIHx8IG1hc2tXZWJ2aWV3Oy8v5YaN5qyh5qOA5rWL54i2XHJcbiAgICAgICAgdmFyIG9sZFNob3cgPSB3ZWJ2aWV3LnNob3c7XHJcbiAgICAgICAgdmFyIG9sZEhpZGUgPSB3ZWJ2aWV3LmhpZGU7XHJcbiAgICAgICAgdmFyIG9sZENsb3NlID0gd2Vidmlldy5jbG9zZTtcclxuXHJcbiAgICAgICAgdmFyIHNob3dNYXNrID0gZnVuY3Rpb24gc2hvd01hc2soKSB7XHJcbiAgICAgICAgICAgIG1hc2tXZWJ2aWV3LnNldFN0eWxlKHtcclxuICAgICAgICAgICAgICAgIG1hc2s6IG1hc2tDb2xvclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciBjbG9zZU1hc2sgPSBmdW5jdGlvbiBjbG9zZU1hc2soKSB7XHJcbiAgICAgICAgICAgIG1hc2tXZWJ2aWV3LnNldFN0eWxlKHtcclxuICAgICAgICAgICAgICAgIG1hc2s6ICdub25lJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuc2hvdyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBzaG93TWFzaygpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRTaG93LmFwcGx5KHdlYnZpZXcsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5oaWRlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTWFzaygpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZEhpZGUuYXBwbHkod2VidmlldywgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LmNsb3NlID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNsb3NlTWFzaygpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjMpLCBfa2V5MyA9IDA7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcclxuICAgICAgICAgICAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZENsb3NlLmFwcGx5KHdlYnZpZXcsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3ViTlZ1ZUJ5SWQoaWQpIHtcclxuICAgICAgICB2YXIgd2VidmlldyA9IHdlZXhQbHVzLndlYnZpZXcuZ2V0V2Vidmlld0J5SWQoaWQpO1xyXG4gICAgICAgIGlmICh3ZWJ2aWV3ICYmICF3ZWJ2aWV3LiRwcm9jZXNzZWQpIHtcclxuICAgICAgICAgICAgd3JhcHBlcih3ZWJ2aWV3KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHdlYnZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudFN1Yk5WdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldFN1Yk5WdWVCeUlkKHdlZXhQbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKS5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHBsdXMgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3BsdXMnKTtcclxuICAgIHZhciBnbG9iYWxFdmVudCA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZ2xvYmFsRXZlbnQnKTtcclxuXHJcbiAgICB2YXIgaWQgPSAwO1xyXG4gICAgdmFyIGNhbGxiYWNrcyA9IHt9O1xyXG5cclxuICAgIHZhciBVTklBUFBfU0VSVklDRV9OVlVFX0lEID0gJ19fdW5pYXBwX19zZXJ2aWNlJztcclxuXHJcbiAgICBnbG9iYWxFdmVudC5hZGRFdmVudExpc3RlbmVyKCdwbHVzTWVzc2FnZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS5kYXRhLnR5cGUgPT09ICdVbmlBcHBKc0FwaScpIHtcclxuICAgICAgICAgICAgaW52b2tlKGUuZGF0YS5pZCwgZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdVbmlBcHBTdWJOVnVlJykge1xyXG4gICAgICAgICAgICBvblN1Yk5WdWVNZXNzYWdlKGUuZGF0YS5kYXRhLCBlLmRhdGEub3B0aW9ucyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2soZS5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIGNyZWF0ZUNhbGxiYWNrID0gZnVuY3Rpb24gY3JlYXRlQ2FsbGJhY2soYXJncywgdHlwZSkge1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIGNhbGxiYWNrKHJlcykge1xyXG4gICAgICAgICAgICBpZiAoaXNGbihhcmdzKSkge1xyXG4gICAgICAgICAgICAgICAgYXJncyhyZXMpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgIGlmICh+cmVzLmVyck1zZy5pbmRleE9mKCc6b2snKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRm4oYXJncy5zdWNjZXNzKSAmJiBhcmdzLnN1Y2Nlc3MocmVzKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAofnJlcy5lcnJNc2cuaW5kZXhPZignOmZhaWwnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRm4oYXJncy5mYWlsKSAmJiBhcmdzLmZhaWwocmVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlzRm4oYXJncy5jb21wbGV0ZSkgJiYgYXJncy5jb21wbGV0ZShyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAoaXNGbihhcmdzKSB8fCBhcmdzICYmIGlzRm4oYXJncy5jYWxsYmFjaykpIHtcclxuICAgICAgICAgICAgY2FsbGJhY2sua2VlcEFsaXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgaW52b2tlID0gZnVuY3Rpb24gaW52b2tlKGNhbGxiYWNrSWQsIGRhdGEpIHtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBjYWxsYmFja3NbY2FsbGJhY2tJZF07XHJcbiAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEpO1xyXG4gICAgICAgICAgICBpZiAoIWNhbGxiYWNrLmtlZXBBbGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIGNhbGxiYWNrc1tjYWxsYmFja0lkXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbGxiYWNrWycgKyBjYWxsYmFja0lkICsgJ10gaXMgdW5kZWZpbmVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcHVibGlzaCA9IGZ1bmN0aW9uIHB1Ymxpc2goX3JlZikge1xyXG4gICAgICAgIHZhciBpZCA9IF9yZWYuaWQsXHJcbiAgICAgICAgICAgIHR5cGUgPSBfcmVmLnR5cGUsXHJcbiAgICAgICAgICAgIHBhcmFtcyA9IF9yZWYucGFyYW1zO1xyXG5cclxuICAgICAgICBjYWxsYmFja3NbaWRdID0gY3JlYXRlQ2FsbGJhY2socGFyYW1zLCB0eXBlKTtcclxuICAgICAgICBwbHVzLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgICAgIH0sIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBwb3N0TWVzc2FnZShkYXRhKSB7XHJcbiAgICAgICAgcGx1cy5wb3N0TWVzc2FnZShkYXRhLCBVTklBUFBfU0VSVklDRV9OVlVFX0lEKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY3JlYXRlUHVibGlzaCA9IGZ1bmN0aW9uIGNyZWF0ZVB1Ymxpc2gobmFtZSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihhcmdzKSB7XHJcbiAgICAgICAgICAgIHB1Ymxpc2goe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkKyssXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgcGFyYW1zOiBhcmdzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayA9IHZvaWQgMDtcclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID0gdm9pZCAwO1xyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID0gdm9pZCAwO1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlcXVpcmVOYXRpdmVQbHVnaW4ocGx1Z2luTmFtZSkge1xyXG4gICAgICAgIHJldHVybiB3ZWV4LnJlcXVpcmVNb2R1bGUocGx1Z2luTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGRvbSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZG9tJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gbG9hZEZvbnRGYWNlKF9yZWYpIHtcclxuICAgICAgICB2YXIgZmFtaWx5ID0gX3JlZi5mYW1pbHksXHJcbiAgICAgICAgICAgIHNvdXJjZSA9IF9yZWYuc291cmNlLFxyXG4gICAgICAgICAgICBkZXNjID0gX3JlZi5kZXNjLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIGRvbS5hZGRSdWxlKCdmb250RmFjZScsIHtcclxuICAgICAgICAgICAgZm9udEZhbWlseTogZmFtaWx5LFxyXG4gICAgICAgICAgICBzcmM6IHNvdXJjZS5yZXBsYWNlKC9cIi9nLCAnXFwnJylcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICBlcnJNc2c6ICdsb2FkRm9udEZhY2U6b2snLFxyXG4gICAgICAgICAgICBzdGF0dXM6ICdsb2FkZWQnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcclxuICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBnbG9iYWxFdmVudCQxID0gd2VleC5yZXF1aXJlTW9kdWxlKCdnbG9iYWxFdmVudCcpO1xyXG5cclxuICAgIHZhciBjYWxsYmFja3MkMSA9IFtdO1xyXG5cclxuICAgIGdsb2JhbEV2ZW50JDEuYWRkRXZlbnRMaXN0ZW5lcigncGx1c01lc3NhZ2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwUmVhZHknKSB7XHJcbiAgICAgICAgICAgIHJlYWR5LmlzVW5pQXBwUmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2tzJDEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMS5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyQxID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiByZWFkeShjYWxsYmFjaykge1xyXG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNVbmlBcHBSZWFkeSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyQxLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbihvYmopIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIG9iajtcclxuICAgIH0gOiBmdW5jdGlvbihvYmopIHtcclxuICAgICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgP1xyXG4gICAgICAgICAgICBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIHN0cmVhbSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnc3RyZWFtJyk7XHJcblxyXG4gICAgLy8gbGV0IHJlcXVlc3RUYXNrSWQgPSAwXHJcblxyXG4gICAgdmFyIE1FVEhPRF9HRVQgPSAnR0VUJztcclxuICAgIHZhciBNRVRIT0RfUE9TVCA9ICdQT1NUJztcclxuICAgIHZhciBDT05URU5UX1RZUEVfSlNPTiA9ICdhcHBsaWNhdGlvbi9qc29uJztcclxuICAgIHZhciBDT05URU5UX1RZUEVfRk9STSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnO1xyXG5cclxuICAgIHZhciBzZXJpYWxpemUgPSBmdW5jdGlvbiBzZXJpYWxpemUoZGF0YSkge1xyXG4gICAgICAgIHZhciBtZXRob2QgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IE1FVEhPRF9HRVQ7XHJcbiAgICAgICAgdmFyIGNvbnRlbnRUeXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBDT05URU5UX1RZUEVfRk9STTtcclxuXHJcbiAgICAgICAgaWYgKCh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGF0YSkpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBpZiAobWV0aG9kLnRvVXBwZXJDYXNlKCkgPT09IE1FVEhPRF9QT1NUICYmIGNvbnRlbnRUeXBlLnRvTG93ZXJDYXNlKCkgPT09IENPTlRFTlRfVFlQRV9KU09OKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoZGF0YSkubWFwKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChkYXRhW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfSkuam9pbignJicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiByZXF1ZXN0KF9yZWYpIHtcclxuICAgICAgICB2YXIgdXJsID0gX3JlZi51cmwsXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmLmRhdGEsXHJcbiAgICAgICAgICAgIGhlYWRlciA9IF9yZWYuaGVhZGVyLFxyXG4gICAgICAgICAgICBfcmVmJG1ldGhvZCA9IF9yZWYubWV0aG9kLFxyXG4gICAgICAgICAgICBtZXRob2QgPSBfcmVmJG1ldGhvZCA9PT0gdW5kZWZpbmVkID8gJ0dFVCcgOiBfcmVmJG1ldGhvZCxcclxuICAgICAgICAgICAgX3JlZiRkYXRhVHlwZSA9IF9yZWYuZGF0YVR5cGUsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlID0gX3JlZiRkYXRhVHlwZSA9PT0gdW5kZWZpbmVkID8gJ2pzb24nIDogX3JlZiRkYXRhVHlwZSxcclxuICAgICAgICAgICAgcmVzcG9uc2VUeXBlID0gX3JlZi5yZXNwb25zZVR5cGUsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgLy8gcmVxdWVzdFRhc2tJZCsrXHJcbiAgICAgICAgdmFyIGFib3J0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdmFyIGhhc0NvbnRlbnRUeXBlID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGhlYWRlcnMgPSB7fTtcclxuICAgICAgICBpZiAoaGVhZGVyKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIG5hbWUgaW4gaGVhZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhc0NvbnRlbnRUeXBlICYmIG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBoYXNDb250ZW50VHlwZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSBoZWFkZXJbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbbmFtZV0gPSBoZWFkZXJbbmFtZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gTUVUSE9EX0dFVCAmJiBkYXRhKSB7XHJcbiAgICAgICAgICAgIHVybCA9IHVybCArICh+dXJsLmluZGV4T2YoJz8nKSA/IHVybC5zdWJzdHIoLTEpID09PSAnJicgfHwgdXJsLnN1YnN0cigtMSkgPT09ICc/JyA/ICcnIDogJyYnIDogJz8nKSArXHJcbiAgICAgICAgICAgICAgICBzZXJpYWxpemUoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0cmVhbS5mZXRjaCh7XHJcbiAgICAgICAgICAgIHVybDogdXJsLFxyXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgICAgICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgICAgICAgICAgdHlwZTogZGF0YVR5cGUgPT09ICdqc29uJyA/ICdqc29uJyA6ICd0ZXh0JyxcclxuICAgICAgICAgICAgYm9keTogbWV0aG9kICE9PSBNRVRIT0RfR0VUID8gc2VyaWFsaXplKGRhdGEsIG1ldGhvZCwgaGVhZGVyc1snQ29udGVudC1UeXBlJ10pIDogJydcclxuICAgICAgICB9LCBmdW5jdGlvbihfcmVmMikge1xyXG4gICAgICAgICAgICB2YXIgc3RhdHVzID0gX3JlZjIuc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgb2sgPSBfcmVmMi5vayxcclxuICAgICAgICAgICAgICAgIHN0YXR1c1RleHQgPSBfcmVmMi5zdGF0dXNUZXh0LFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IF9yZWYyLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzID0gX3JlZjIuaGVhZGVycztcclxuXHJcbiAgICAgICAgICAgIHZhciByZXQgPSB7fTtcclxuICAgICAgICAgICAgaWYgKCFzdGF0dXMgfHwgc3RhdHVzID09PSAtMSB8fCBhYm9ydGVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZXJyTXNnID0gJ3JlcXVlc3Q6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldC5kYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIHJldC5zdGF0dXNDb2RlID0gc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgcmV0LmhlYWRlciA9IGhlYWRlcnM7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGFib3J0OiBmdW5jdGlvbiBhYm9ydCgpIHtcclxuICAgICAgICAgICAgICAgIGFib3J0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgc3RvcmFnZSA9IHdlZXgucmVxdWlyZU1vZHVsZSgncGx1c3N0b3JhZ2UnKTtcclxuICAgIHZhciBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUgPSAnX19UWVBFJztcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdG9yYWdlKF9yZWYpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZi5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgc3RvcmFnZS5nZXRJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSwgZnVuY3Rpb24ocmV0KSB7XHJcbiAgICAgICAgICAgIGlmIChyZXQucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkYXRhVHlwZSA9IHJldC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5nZXRJdGVtKGtleSwgZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhVHlwZSAmJiByZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhVHlwZSAhPT0gJ1N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBKU09OLnBhcnNlKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ2dldFN0b3JhZ2U6b2snLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXQpO1xyXG4gICAgICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldFN0b3JhZ2UoX3JlZjIpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZjIua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZjIuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYyLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYyLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICB2YXIgZGF0YVR5cGUgPSAnU3RyaW5nJztcclxuICAgICAgICBpZiAoKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRhKSkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGRhdGFUeXBlID0gJ09iamVjdCc7XHJcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKGtleSwgZGF0YSwgZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2Uuc2V0SXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUsIGRhdGFUeXBlLCBmdW5jdGlvbihyZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmV0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdzZXRTdG9yYWdlOm9rJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW1vdmVTdG9yYWdlKF9yZWYzKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYzLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYzLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMy5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjMuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMy5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKGtleSwgZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAncmVtb3ZlU3RvcmFnZTpvaydcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdyZW1vdmVTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhclN0b3JhZ2UoX3JlZjQpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZjQua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZjQuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWY0LnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmNC5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWY0LmNvbXBsZXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjbGlwYm9hcmQgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2NsaXBib2FyZCcpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldENsaXBib2FyZERhdGEoX3JlZikge1xyXG4gICAgICAgIHZhciBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIGNsaXBib2FyZC5nZXRTdHJpbmcoZnVuY3Rpb24oX3JlZjIpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBfcmVmMi5kYXRhO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgICAgIGVyck1zZzogJ2dldENsaXBib2FyZERhdGE6b2snLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRDbGlwYm9hcmREYXRhKF9yZWYzKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBfcmVmMy5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjMuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYzLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjMuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgIGVyck1zZzogJ3NldENsaXBib2FyZERhdGE6b2snXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjbGlwYm9hcmQuc2V0U3RyaW5nKGRhdGEpO1xyXG4gICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdldEVtaXR0ZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGdldFVuaUVtaXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cclxuICAgICAgICAgICAgcmV0dXJuIGdldFVuaUVtaXR0ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBFbWl0dGVyID0ge1xyXG4gICAgICAgICAgICAkb246IGZ1bmN0aW9uICRvbigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRvbiBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJG9mZjogZnVuY3Rpb24gJG9mZigpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRvZmYgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRvbmNlOiBmdW5jdGlvbiAkb25jZSgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRvbmNlIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkZW1pdDogZnVuY3Rpb24gJGVtaXQoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kZW1pdCBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIGdldFVuaUVtaXR0ZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBFbWl0dGVyO1xyXG4gICAgICAgIH07XHJcbiAgICB9KCk7XHJcblxyXG4gICAgZnVuY3Rpb24gYXBwbHkoY3R4LCBtZXRob2QsIGFyZ3MpIHtcclxuICAgICAgICByZXR1cm4gY3R4W21ldGhvZF0uYXBwbHkoY3R4LCBhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvbicsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJG9mZigpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9mZicsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJG9uY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvbmNlJywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkZW1pdCgpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJGVtaXQnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgdmFyIGFwaSA9IC8qI19fUFVSRV9fKi8gT2JqZWN0LmZyZWV6ZSh7XHJcbiAgICAgICAgbG9hZEZvbnRGYWNlOiBsb2FkRm9udEZhY2UsXHJcbiAgICAgICAgcmVhZHk6IHJlYWR5LFxyXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgZ2V0U3RvcmFnZTogZ2V0U3RvcmFnZSxcclxuICAgICAgICBzZXRTdG9yYWdlOiBzZXRTdG9yYWdlLFxyXG4gICAgICAgIHJlbW92ZVN0b3JhZ2U6IHJlbW92ZVN0b3JhZ2UsXHJcbiAgICAgICAgY2xlYXJTdG9yYWdlOiBjbGVhclN0b3JhZ2UsXHJcbiAgICAgICAgZ2V0Q2xpcGJvYXJkRGF0YTogZ2V0Q2xpcGJvYXJkRGF0YSxcclxuICAgICAgICBzZXRDbGlwYm9hcmREYXRhOiBzZXRDbGlwYm9hcmREYXRhLFxyXG4gICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2U6IG9uU3ViTlZ1ZU1lc3NhZ2UsXHJcbiAgICAgICAgZ2V0U3ViTlZ1ZUJ5SWQ6IGdldFN1Yk5WdWVCeUlkLFxyXG4gICAgICAgIGdldEN1cnJlbnRTdWJOVnVlOiBnZXRDdXJyZW50U3ViTlZ1ZSxcclxuICAgICAgICAkb246ICRvbixcclxuICAgICAgICAkb2ZmOiAkb2ZmLFxyXG4gICAgICAgICRvbmNlOiAkb25jZSxcclxuICAgICAgICAkZW1pdDogJGVtaXRcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICB2YXIgd3ggPSB7XHJcbiAgICAgICAgdXBsb2FkRmlsZTogdHJ1ZSxcclxuICAgICAgICBkb3dubG9hZEZpbGU6IHRydWUsXHJcbiAgICAgICAgY2hvb3NlSW1hZ2U6IHRydWUsXHJcbiAgICAgICAgcHJldmlld0ltYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldEltYWdlSW5mbzogdHJ1ZSxcclxuICAgICAgICBzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtOiB0cnVlLFxyXG4gICAgICAgIGNob29zZVZpZGVvOiB0cnVlLFxyXG4gICAgICAgIHNhdmVWaWRlb1RvUGhvdG9zQWxidW06IHRydWUsXHJcbiAgICAgICAgc2F2ZUZpbGU6IHRydWUsXHJcbiAgICAgICAgZ2V0U2F2ZWRGaWxlTGlzdDogdHJ1ZSxcclxuICAgICAgICBnZXRTYXZlZEZpbGVJbmZvOiB0cnVlLFxyXG4gICAgICAgIHJlbW92ZVNhdmVkRmlsZTogdHJ1ZSxcclxuICAgICAgICBvcGVuRG9jdW1lbnQ6IHRydWUsXHJcbiAgICAgICAgc2V0U3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldFN0b3JhZ2VJbmZvOiB0cnVlLFxyXG4gICAgICAgIHJlbW92ZVN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgY2xlYXJTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldExvY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgIGNob29zZUxvY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgIG9wZW5Mb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBnZXRTeXN0ZW1JbmZvOiB0cnVlLFxyXG4gICAgICAgIGdldE5ldHdvcmtUeXBlOiB0cnVlLFxyXG4gICAgICAgIG1ha2VQaG9uZUNhbGw6IHRydWUsXHJcbiAgICAgICAgc2NhbkNvZGU6IHRydWUsXHJcbiAgICAgICAgc2V0U2NyZWVuQnJpZ2h0bmVzczogdHJ1ZSxcclxuICAgICAgICBnZXRTY3JlZW5CcmlnaHRuZXNzOiB0cnVlLFxyXG4gICAgICAgIHNldEtlZXBTY3JlZW5PbjogdHJ1ZSxcclxuICAgICAgICB2aWJyYXRlTG9uZzogdHJ1ZSxcclxuICAgICAgICB2aWJyYXRlU2hvcnQ6IHRydWUsXHJcbiAgICAgICAgYWRkUGhvbmVDb250YWN0OiB0cnVlLFxyXG4gICAgICAgIHNob3dUb2FzdDogdHJ1ZSxcclxuICAgICAgICBzaG93TG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBoaWRlVG9hc3Q6IHRydWUsXHJcbiAgICAgICAgaGlkZUxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgc2hvd01vZGFsOiB0cnVlLFxyXG4gICAgICAgIHNob3dBY3Rpb25TaGVldDogdHJ1ZSxcclxuICAgICAgICBzZXROYXZpZ2F0aW9uQmFyVGl0bGU6IHRydWUsXHJcbiAgICAgICAgc2V0TmF2aWdhdGlvbkJhckNvbG9yOiB0cnVlLFxyXG4gICAgICAgIG5hdmlnYXRlVG86IHRydWUsXHJcbiAgICAgICAgcmVkaXJlY3RUbzogdHJ1ZSxcclxuICAgICAgICByZUxhdW5jaDogdHJ1ZSxcclxuICAgICAgICBzd2l0Y2hUYWI6IHRydWUsXHJcbiAgICAgICAgbmF2aWdhdGVCYWNrOiB0cnVlLFxyXG4gICAgICAgIGdldFByb3ZpZGVyOiB0cnVlLFxyXG4gICAgICAgIGxvZ2luOiB0cnVlLFxyXG4gICAgICAgIGdldFVzZXJJbmZvOiB0cnVlLFxyXG4gICAgICAgIHNoYXJlOiB0cnVlLFxyXG4gICAgICAgIHJlcXVlc3RQYXltZW50OiB0cnVlLFxyXG4gICAgICAgIHN1YnNjcmliZVB1c2g6IHRydWUsXHJcbiAgICAgICAgdW5zdWJzY3JpYmVQdXNoOiB0cnVlLFxyXG4gICAgICAgIG9uUHVzaDogdHJ1ZSxcclxuICAgICAgICBvZmZQdXNoOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBiYXNlVW5pID0ge1xyXG4gICAgICAgIG9zOiB7XHJcbiAgICAgICAgICAgIG52dWU6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciB1bmkgPSB7fTtcclxuXHJcbiAgICBpZiAodHlwZW9mIFByb3h5ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHVuaSA9IG5ldyBQcm94eSh7fSwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCh0YXJnZXQsIG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnZ1ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3Bvc3RNZXNzYWdlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3N0TWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAncmVxdWlyZU5hdGl2ZVBsdWdpbicpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWlyZU5hdGl2ZVBsdWdpbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGFwaVtuYW1lXTtcclxuICAgICAgICAgICAgICAgIGlmICghbWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gY3JlYXRlUHVibGlzaChuYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChzaG91bGRQcm9taXNlKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2lmeShtZXRob2QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGhvZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhiYXNlVW5pKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xyXG4gICAgICAgICAgICB1bmlba2V5XSA9IGJhc2VVbmlba2V5XTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdW5pLnBvc3RNZXNzYWdlID0gcG9zdE1lc3NhZ2U7XHJcblxyXG4gICAgICAgIHVuaS5yZXF1aXJlTmF0aXZlUGx1Z2luID0gcmVxdWlyZU5hdGl2ZVBsdWdpbjtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCA9IG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcDtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZDtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQ7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQ7XHJcblxyXG4gICAgICAgIE9iamVjdC5rZXlzKHd4KS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGFwaVtuYW1lXTtcclxuICAgICAgICAgICAgaWYgKCFtZXRob2QpIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IGNyZWF0ZVB1Ymxpc2gobmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNob3VsZFByb21pc2UobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShtZXRob2QpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdW5pW25hbWVdID0gbWV0aG9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5pO1xyXG59XHJcblxyXG52YXIgY3JlYXRlVW5pO1xyXG5cclxuaWYgKHR5cGVvZiBnZXRVbmkgPT09ICdmdW5jdGlvbicpIHtcclxuICAgIGNyZWF0ZVVuaSA9IGdldFVuaTtcclxufSBlbHNlIHtcclxuICAgIGNyZWF0ZVVuaSA9IGluaXRVbmk7XHJcbn1cclxudmFyIHdlZXhQbHVzID0gbmV3IFdlZXhQbHVzKHdlZXgpO1xyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVVbmkod2VleCwgd2VleFBsdXMsIEJyb2FkY2FzdENoYW5uZWwpO1xyXG5leHBvcnQge1xyXG4gICAgd2VleFBsdXNcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1wicGFnZXNcIjp7fSxcImdsb2JhbFN0eWxlXCI6e319IiwiZXhwb3J0IGRlZmF1bHQge1wiYXBwaWRcIjpcIl9fVU5JX19CN0Q1MUU4XCJ9IiwiVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImljb25mb250XCI6IHtcbiAgICBcImZvbnRGYW1pbHlcIjogXCJpY29uZm9udFwiXG4gIH0sXG4gIFwidmlld1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEuOCxcbiAgICBcImNvbG9yXCI6IFwiIzBFMTUxRFwiXG4gIH0sXG4gIFwidGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEuOCxcbiAgICBcImNvbG9yXCI6IFwiIzBFMTUxRFwiXG4gIH0sXG4gIFwidy0xMDBcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIlxuICB9LFxuICBcInJvd1wiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIi0yMHJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIi0yMHJweFwiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJjb2wtMVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCI2Mi41cnB4XCJcbiAgfSxcbiAgXCJjb2wtMlwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMjVycHhcIlxuICB9LFxuICBcImNvbC0zXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjE4Ny41cnB4XCJcbiAgfSxcbiAgXCJjb2wtNFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCIyNTBycHhcIlxuICB9LFxuICBcImNvbC01XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjMxMi41cnB4XCJcbiAgfSxcbiAgXCJjb2wtNlwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCIzNzVycHhcIlxuICB9LFxuICBcImNvbC03XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjQzNy41cnB4XCJcbiAgfSxcbiAgXCJjb2wtOFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCI1MDBycHhcIlxuICB9LFxuICBcImNvbC05XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjU2Mi41cnB4XCJcbiAgfSxcbiAgXCJjb2wtMTBcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIixcbiAgICBcIndpZHRoXCI6IFwiNjI1cnB4XCJcbiAgfSxcbiAgXCJjb2wtMTFcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIixcbiAgICBcIndpZHRoXCI6IFwiNjg3LjVycHhcIlxuICB9LFxuICBcImNvbC0xMlwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIlxuICB9LFxuICBcImNvbC1vZmZzZXQtMTJcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjc1MHJweFwiXG4gIH0sXG4gIFwiY29sLW9mZnNldC0xMVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNjg3LjVycHhcIlxuICB9LFxuICBcImNvbC1vZmZzZXQtMTBcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjYyNXJweFwiXG4gIH0sXG4gIFwiY29sLW9mZnNldC05XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1NjIuNXJweFwiXG4gIH0sXG4gIFwiY29sLW9mZnNldC04XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1MDBycHhcIlxuICB9LFxuICBcImNvbC1vZmZzZXQtN1wiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDM3LjVycHhcIlxuICB9LFxuICBcImNvbC1vZmZzZXQtNlwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzc1cnB4XCJcbiAgfSxcbiAgXCJjb2wtb2Zmc2V0LTVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMxMi41cnB4XCJcbiAgfSxcbiAgXCJjb2wtb2Zmc2V0LTRcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjI1MHJweFwiXG4gIH0sXG4gIFwiY29sLW9mZnNldC0zXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxODcuNXJweFwiXG4gIH0sXG4gIFwiY29sLW9mZnNldC0yXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMjVycHhcIlxuICB9LFxuICBcImNvbC1vZmZzZXQtMVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNjIuNXJweFwiXG4gIH0sXG4gIFwiY29sLW9mZnNldC0wXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogMFxuICB9LFxuICBcImZsZXhcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiZmxleC1yb3dcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiZmxleC1jb2x1bW5cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiZmxleC1yb3ctcmV2ZXJzZVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93LXJldmVyc2VcIlxuICB9LFxuICBcImZsZXgtY29sdW1uLXJldmVyc2VcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtbi1yZXZlcnNlXCJcbiAgfSxcbiAgXCJmbGV4LXdyYXBcIjoge1xuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCJmbGV4LW5vd3JhcFwiOiB7XG4gICAgXCJmbGV4V3JhcFwiOiBcIm5vd3JhcFwiXG4gIH0sXG4gIFwianVzdGlmeS1zdGFydFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIlxuICB9LFxuICBcImp1c3RpZnktZW5kXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcImp1c3RpZnktYmV0d2VlblwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICB9LFxuICBcImp1c3RpZnktY2VudGVyXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJhbGlnbi1jZW50ZXJcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiYWxpZ24tc3RyZXRjaFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwic3RyZXRjaFwiXG4gIH0sXG4gIFwiYWxpZ24tc3RhcnRcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIlxuICB9LFxuICBcImFsaWduLWVuZFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcImZsZXgtMVwiOiB7XG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCJmbGV4LTJcIjoge1xuICAgIFwiZmxleFwiOiAyXG4gIH0sXG4gIFwiZmxleC0zXCI6IHtcbiAgICBcImZsZXhcIjogM1xuICB9LFxuICBcImZsZXgtNFwiOiB7XG4gICAgXCJmbGV4XCI6IDRcbiAgfSxcbiAgXCJmbGV4LTVcIjoge1xuICAgIFwiZmxleFwiOiA1XG4gIH0sXG4gIFwiY29udGFpbmVyXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtLTBcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDAsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDBcbiAgfSxcbiAgXCJtLTFcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwcnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm0tMlwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjBycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibS0zXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjMwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJtLTRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwcnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm0tNVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1MHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNTBycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibXQtMFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogMFxuICB9LFxuICBcIm10LTFcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm10LTJcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm10LTNcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm10LTRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm10LTVcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBycHhcIlxuICB9LFxuICBcIm1iLTBcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IDBcbiAgfSxcbiAgXCJtYi0xXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJtYi0yXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtYi0zXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJtYi00XCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJtYi01XCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJtbC0wXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogMFxuICB9LFxuICBcIm1sLTFcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJtbC0yXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibWwtM1wiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm1sLTRcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJtbC01XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibXItMFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiAwXG4gIH0sXG4gIFwibXItMVwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJtci0yXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm1yLTNcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibXItNFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJtci01XCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcIm15LTBcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMFxuICB9LFxuICBcIm15LTFcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJteS0yXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibXktM1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm15LTRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJteS01XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjUwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibXgtMFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IDAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAwXG4gIH0sXG4gIFwibXgtMVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm14LTJcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJteC0zXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibXgtNFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm14LTVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjUwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJwLTBcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwXG4gIH0sXG4gIFwicFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNXJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNXJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjVycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNXJweFwiXG4gIH0sXG4gIFwicC0xXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicC0yXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicC0zXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicC00XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0MHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI0MHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicC01XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicHQtMFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IDBcbiAgfSxcbiAgXCJwdFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNXJweFwiXG4gIH0sXG4gIFwicHQtMVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBycHhcIlxuICB9LFxuICBcInB0LTJcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJwdC0zXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicHQtNFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNDBycHhcIlxuICB9LFxuICBcInB0LTVcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJwYi0wXCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMFxuICB9LFxuICBcInBiLTFcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJwYlwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNXJweFwiXG4gIH0sXG4gIFwicGItMlwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBycHhcIlxuICB9LFxuICBcInBiLTNcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJwYi00XCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicGItNVwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNTBycHhcIlxuICB9LFxuICBcInBsLTBcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogMFxuICB9LFxuICBcInBsXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNXJweFwiXG4gIH0sXG4gIFwicGwtMVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJwbC0yXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcInBsLTNcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicGwtNFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJwbC01XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcInByLTBcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDBcbiAgfSxcbiAgXCJwclwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJwci0xXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJwci0yXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJwci0zXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJwci00XCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJwci01XCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJweS0wXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMFxuICB9LFxuICBcInB5XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNXJweFwiXG4gIH0sXG4gIFwicHktMVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicHktMlwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicHktM1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicHktNFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNDBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicHktNVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicHgtMFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDBcbiAgfSxcbiAgXCJweC0xXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJweFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjVycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjVycHhcIlxuICB9LFxuICBcInB4LTJcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcInB4LTNcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcInB4LTRcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcInB4LTVcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcImZvbnQtc21hbGxcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwiZm9udC1zbVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI1cnB4XCJcbiAgfSxcbiAgXCJmb250XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzBycHhcIlxuICB9LFxuICBcImZvbnQtbWRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzNXJweFwiXG4gIH0sXG4gIFwiZm9udC1sZ1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJoMVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjgwcnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEuOFxuICB9LFxuICBcImgyXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNjBycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMS44XG4gIH0sXG4gIFwiaDNcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0NXJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxLjhcbiAgfSxcbiAgXCJoNFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMycnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEuOFxuICB9LFxuICBcImg1XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzBycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMS44XG4gIH0sXG4gIFwiaDZcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyOHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxLjhcbiAgfSxcbiAgXCJ0ZXh0LXRocm91Z2hcIjoge1xuICAgIFwidGV4dERlY29yYXRpb25cIjogXCJsaW5lLXRocm91Z2hcIlxuICB9LFxuICBcInRleHQtbGVmdFwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJsZWZ0XCJcbiAgfSxcbiAgXCJ0ZXh0LXJpZ2h0XCI6IHtcbiAgICBcInRleHRBbGlnblwiOiBcInJpZ2h0XCJcbiAgfSxcbiAgXCJ0ZXh0LWNlbnRlclwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInRleHQtZWxsaXBzaXNcIjoge1xuICAgIFwibGluZXNcIjogMSxcbiAgICBcInRleHRPdmVyZmxvd1wiOiBcImVsbGlwc2lzXCJcbiAgfSxcbiAgXCJmb250LXdlaWdodC1saWdodFwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiMzAwXCJcbiAgfSxcbiAgXCJmb250LXdlaWdodC1saWdodGVyXCI6IHtcbiAgICBcImZvbnRXZWlnaHRcIjogXCIxMDBcIlxuICB9LFxuICBcImZvbnQtd2VpZ2h0LW5vcm1hbFwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNDAwXCJcbiAgfSxcbiAgXCJmb250LXdlaWdodC1ib2xkXCI6IHtcbiAgICBcImZvbnRXZWlnaHRcIjogXCI3MDBcIlxuICB9LFxuICBcImZvbnQtd2VpZ2h0LWJvbGRlclwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiXG4gIH0sXG4gIFwiZm9udC1pdGFsaWNcIjoge1xuICAgIFwiZm9udFN0eWxlXCI6IFwiaXRhbGljXCJcbiAgfSxcbiAgXCJ0ZXh0LXNxXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDkzLDEyMCwyNTUpXCJcbiAgfSxcbiAgXCJ0ZXh0LXF5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDUwLDIwNSw1MClcIlxuICB9LFxuICBcInRleHQtdGNiXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI0MywxNTQsMjQpXCJcbiAgfSxcbiAgXCJ0ZXh0LXdzXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDIwNSwxMzMsNjMpXCJcbiAgfSxcbiAgXCJ0ZXh0LXpiXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI1NSwxODIsMTkzKVwiXG4gIH0sXG4gIFwidGV4dC15c1wiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYig3Nyw3Nyw3NylcIlxuICB9LFxuICBcInRleHQtd3lcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoMjU1LDE5MiwyMDMpXCJcbiAgfSxcbiAgXCJ0ZXh0LXN5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDMwLDE0NCwyNTUpXCJcbiAgfSxcbiAgXCJ0ZXh0LWpqXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDIxMiwzNSwxMjIpXCJcbiAgfSxcbiAgXCJ0ZXh0LXF5ZndcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoMjQ0LDIzNCw0MilcIlxuICB9LFxuICBcInRleHQtendmd1wiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYigxOSwzNCwxMjIpXCJcbiAgfSxcbiAgXCJ0ZXh0LXNoZndcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoMjUwLDEyOCwxMTQpXCJcbiAgfSxcbiAgXCJ0ZXh0LWJtXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDMxLDIwMywxODQpXCJcbiAgfSxcbiAgXCJ0ZXh0LWxzXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDE5MSwxOTEsMTkxKVwiXG4gIH0sXG4gIFwidGV4dC1oeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYigxNzMsMjE2LDIzMClcIlxuICB9LFxuICBcInRleHQteHpcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoNDQsNDQsNDQpXCJcbiAgfSxcbiAgXCJ0ZXh0LXlxXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDIxNiwzMCw2KVwiXG4gIH0sXG4gIFwidGV4dC1ncmF5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2FhYWFhYVwiXG4gIH0sXG4gIFwidGV4dC13aGl0ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInRleHQtcmVkXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDIxNiwzMCw2KVwiXG4gIH0sXG4gIFwidGV4dC1wcmltYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwN2JmZlwiXG4gIH0sXG4gIFwidGV4dC1ob3Zlci1wcmltYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwNTZiM1wiXG4gIH0sXG4gIFwidGV4dC1zZWNvbmRhcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJ0ZXh0LWhvdmVyLXNlY29uZGFyeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM0OTRmNTRcIlxuICB9LFxuICBcInRleHQtc3VjY2Vzc1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMyOGE3NDVcIlxuICB9LFxuICBcInRleHQtaG92ZXItc3VjY2Vzc1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMxOTY5MmNcIlxuICB9LFxuICBcInRleHQtaW5mb1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMxN2EyYjhcIlxuICB9LFxuICBcInRleHQtaG92ZXItaW5mb1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwZjY2NzRcIlxuICB9LFxuICBcInRleHQtd2FybmluZ1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcInRleHQtaG92ZXItd2FybmluZ1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNiYThiMDBcIlxuICB9LFxuICBcInRleHQtZGFuZ2VyXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2RjMzU0NVwiXG4gIH0sXG4gIFwidGV4dC1ob3Zlci1kYW5nZXJcIjoge1xuICAgIFwiY29sb3JcIjogXCIjYTcxZDJhXCJcbiAgfSxcbiAgXCJ0ZXh0LWxpZ2h0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2Y4ZjlmYVwiXG4gIH0sXG4gIFwidGV4dC1ob3Zlci1saWdodFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNjYmQzZGFcIlxuICB9LFxuICBcInRleHQtZGFya1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMzNDNhNDBcIlxuICB9LFxuICBcInRleHQtaG92ZXItZGFya1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMxMjE0MTZcIlxuICB9LFxuICBcInRleHQtYm9keVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMyMTI1MjlcIlxuICB9LFxuICBcInRleHQtbXV0ZWRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJ0ZXh0LWxpZ2h0LW11dGVkXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0E5QTVBMFwiXG4gIH0sXG4gIFwidGV4dC1saWdodC1ibGFja1wiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC41KVwiXG4gIH0sXG4gIFwidGV4dC1saWdodC13aGl0ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiXG4gIH0sXG4gIFwiYmctcHJpbWFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA3YmZmXCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1wcmltYXJ5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvcjpob3ZlclwiOiBcIiMwMDYyY2NcIlxuICB9LFxuICBcImJnLXNlY29uZGFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1zZWNvbmRhcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yOmhvdmVyXCI6IFwiIzU0NWI2MlwiXG4gIH0sXG4gIFwiYmctc3VjY2Vzc1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMjhhNzQ1XCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1zdWNjZXNzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMxZTdlMzRcIlxuICB9LFxuICBcImJnLWluZm9cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzE3YTJiOFwiXG4gIH0sXG4gIFwiYmctaG92ZXItaW5mb1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMTE3YThiXCJcbiAgfSxcbiAgXCJiZy13YXJuaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcImJnLWhvdmVyLXdhcm5pbmdcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2QzOWUwMFwiXG4gIH0sXG4gIFwiYmctZGFuZ2VyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNkYzM1NDVcIlxuICB9LFxuICBcImJnLWhvdmVyLWRhbmdlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjYmQyMTMwXCJcbiAgfSxcbiAgXCJiZy1uYXZcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0VERURFRFwiXG4gIH0sXG4gIFwiYmctbGlnaHRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Y4ZjlmYVwiXG4gIH0sXG4gIFwiYmctaG92ZXItbGlnaHRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2RhZTBlNVwiXG4gIH0sXG4gIFwiYmctZGFya1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMzQzYTQwXCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1kYXJrXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMxZDIxMjRcIlxuICB9LFxuICBcImJnLXdoaXRlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImJnLXRyYW5zcGFyZW50XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIlxuICB9LFxuICBcImJvcmRlclwiOiB7XG4gICAgXCJib3JkZXJXaWR0aFwiOiBcIjFycHhcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2RlZTJlNlwiXG4gIH0sXG4gIFwiYm9yZGVyLXRvcFwiOiB7XG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjFycHhcIixcbiAgICBcImJvcmRlclRvcFN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2RlZTJlNlwiXG4gIH0sXG4gIFwiYm9yZGVyLXJpZ2h0XCI6IHtcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCIxcnB4XCIsXG4gICAgXCJib3JkZXJSaWdodFN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjZGVlMmU2XCJcbiAgfSxcbiAgXCJib3JkZXItYm90dG9tXCI6IHtcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMXJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZGVlMmU2XCJcbiAgfSxcbiAgXCJib3JkZXItbGVmdFwiOiB7XG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCIxcnB4XCIsXG4gICAgXCJib3JkZXJMZWZ0U3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI2RlZTJlNlwiXG4gIH0sXG4gIFwiYm9yZGVyLTBcIjoge1xuICAgIFwiYm9yZGVyV2lkdGhcIjogMFxuICB9LFxuICBcImJvcmRlci10b3AtMFwiOiB7XG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiAwXG4gIH0sXG4gIFwiYm9yZGVyLXJpZ2h0LTBcIjoge1xuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiAwXG4gIH0sXG4gIFwiYm9yZGVyLWJvdHRvbS0wXCI6IHtcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IDBcbiAgfSxcbiAgXCJib3JkZXItbGVmdC0wXCI6IHtcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiAwXG4gIH0sXG4gIFwiYm9yZGVyLXByaW1hcnlcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMDA3YmZmXCJcbiAgfSxcbiAgXCJib3JkZXItc2Vjb25kYXJ5XCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzZjNzU3ZFwiXG4gIH0sXG4gIFwiYm9yZGVyLWxpZ2h0LXNlY29uZGFyeVwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNFOUU4RTVcIlxuICB9LFxuICBcImJvcmRlci1zdWNjZXNzXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzI4YTc0NVwiXG4gIH0sXG4gIFwiYm9yZGVyLWluZm9cIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMTdhMmI4XCJcbiAgfSxcbiAgXCJib3JkZXItd2FybmluZ1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcImJvcmRlci1kYW5nZXJcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZGMzNTQ1XCJcbiAgfSxcbiAgXCJib3JkZXItbGlnaHRcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZjhmOWZhXCJcbiAgfSxcbiAgXCJib3JkZXItZGFya1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMzNDNhNDBcIlxuICB9LFxuICBcImJvcmRlci13aGl0ZVwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNGRkZGRkZcIlxuICB9LFxuICBcInJvdW5kZWRcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiOHJweFwiXG4gIH0sXG4gIFwicm91bmRlZC10b3BcIjoge1xuICAgIFwiYm9yZGVyVG9wTGVmdFJhZGl1c1wiOiBcIjhycHhcIixcbiAgICBcImJvcmRlclRvcFJpZ2h0UmFkaXVzXCI6IFwiOHJweFwiXG4gIH0sXG4gIFwicm91bmRlZC1yaWdodFwiOiB7XG4gICAgXCJib3JkZXJUb3BSaWdodFJhZGl1c1wiOiBcIjhycHhcIixcbiAgICBcImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzXCI6IFwiOHJweFwiXG4gIH0sXG4gIFwicm91bmRlZC1ib3R0b21cIjoge1xuICAgIFwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcIjogXCI4cnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzXCI6IFwiOHJweFwiXG4gIH0sXG4gIFwicm91bmRlZC1sZWZ0XCI6IHtcbiAgICBcImJvcmRlclRvcExlZnRSYWRpdXNcIjogXCI4cnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzXCI6IFwiOHJweFwiXG4gIH0sXG4gIFwicm91bmRlZC1jaXJjbGVcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTAwcnB4XCJcbiAgfSxcbiAgXCJyb3VuZGVkLTBcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDBcbiAgfSxcbiAgXCJvdmVyZmxvdy1oaWRkZW5cIjoge1xuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIlxuICB9LFxuICBcInBvc2l0aW9uLXJlbGF0aXZlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIlxuICB9LFxuICBcInBvc2l0aW9uLWFic29sdXRlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIlxuICB9LFxuICBcInBvc2l0aW9uLWZpeGVkXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIlxuICB9LFxuICBcImZpeGVkLXRvcFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJ6SW5kZXhcIjogMTAzMFxuICB9LFxuICBcImZpeGVkLWJvdHRvbVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJ6SW5kZXhcIjogMTAzMFxuICB9LFxuICBcInRvcC0wXCI6IHtcbiAgICBcInRvcFwiOiAwXG4gIH0sXG4gIFwibGVmdC0wXCI6IHtcbiAgICBcImxlZnRcIjogMFxuICB9LFxuICBcInJpZ2h0LTBcIjoge1xuICAgIFwicmlnaHRcIjogMFxuICB9LFxuICBcImJvdHRvbS0wXCI6IHtcbiAgICBcImJvdHRvbVwiOiAwXG4gIH0sXG4gIFwicGFnZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRURFREVEXCIsXG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCJtYWluLWJnLWNvbG9yXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMzNTc4RTVcIlxuICB9LFxuICBcIm1haW4tdGV4dC1jb2xvclwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMzNTc4RTVcIlxuICB9LFxuICBcImJvcmRlci1tYWluXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzA4QzA2MFwiXG4gIH0sXG4gIFwiYmctY2hhdC1pdGVtXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM2QkVFNjhcIlxuICB9LFxuICBcInRleHQtY2hhdC1pdGVtXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzZCRUU2OFwiXG4gIH1cbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2ZyZWUtbmF2LWJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWQ2NTRmYzQmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mcmVlLW5hdi1iYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mcmVlLW5hdi1iYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjc2NjExYWQyXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIuWkqei1kC9UaWFuY2lXZWIvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtbmF2LWJhci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJlZS1uYXYtYmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZDY1NGZjNCZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidmlld1wiLFxuICAgIFtcbiAgICAgIF9jKFwidmlld1wiLCB7IGNsYXNzOiBfdm0uZ2V0Q2xhc3MgfSwgW1xuICAgICAgICBfYyhcInZpZXdcIiwgeyBzdHlsZTogXCJoZWlnaHQ6XCIgKyBfdm0uc3RhdHVzQmFySGVpZ2h0ICsgXCJweFwiIH0pLFxuICAgICAgICBfdm0uc2hvd05hdlxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgIFwidy0xMDBcIixcbiAgICAgICAgICAgICAgICAgIFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgXCJhbGlnbi1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIFwianVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCI5MHJweFwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJmbGV4XCIsIFwiYWxpZ24tY2VudGVyXCJdIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5zaG93QmFja1xuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJmcmVlLWljb24tYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcXHVlNjQ1XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5iYWNrIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJmb250LW1kXCIsIFwibWwtM1wiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmdldFRpdGxlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5zaG93UmlnaHRcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiZmxleFwiLCBcImFsaWduLWNlbnRlclwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdChcInJpZ2h0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmcmVlLWljb24tYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlxcdWU2MzZcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub3BlbkV4dGVuZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKSxcbiAgICAgIF92bS5maXhlZCA/IF9jKFwidmlld1wiLCB7IHN0eWxlOiBfdm0uZml4ZWRTdHlsZSB9KSA6IF92bS5fZSgpLFxuICAgICAgX3ZtLnNob3dSaWdodFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJmcmVlLXBvcHVwXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJleHRlbmRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBib2R5V2lkdGg6IDMyMCxcbiAgICAgICAgICAgICAgICBib2R5SGVpZ2h0OiAyMDUsXG4gICAgICAgICAgICAgICAgYm9keUJnQ29sb3I6IFwiYmctZGFya1wiLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCJyaWdodCB0b3BcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiZmxleFwiLCBcImZsZXgtY29sdW1uXCJdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMzIwcnB4XCIsIGhlaWdodDogXCIyMDVycHhcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLm1lbnVzLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImZsZXgtMVwiLCBcImZsZXhcIiwgXCJhbGlnbi1jZW50ZXJcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNsaWNrRXZlbnQoaXRlbS5ldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uZm9udFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGwtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1tZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLmljb24pKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImZvbnQtbWRcIiwgXCJ0ZXh0LXdoaXRlXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJlZS1uYXYtYmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZyZWUtbmF2LWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXc+XHJcblx0XHQ8dmlldyA6Y2xhc3M9XCJnZXRDbGFzc1wiPlxyXG5cdFx0XHQ8IS0tIOeKtuaAgeagjyAtLT5cclxuXHRcdFx0PHZpZXcgOnN0eWxlPVwiJ2hlaWdodDonK3N0YXR1c0JhckhlaWdodCsncHgnXCI+PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOWvvOiIqiAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ3LTEwMCBmbGV4IGFsaWduLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIiB2LWlmPVwic2hvd05hdlwiIHN0eWxlPVwiaGVpZ2h0OiA5MHJweDtcIj5cclxuXHRcdFx0XHQ8IS0tIOW3pui+uSAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyXCI+XHJcblx0XHRcdFx0XHQ8IS0tIOi/lOWbnuaMiemSriAtLT5cclxuXHRcdFx0XHRcdDxmcmVlLWljb24tYnV0dG9uIHYtaWY9XCJzaG93QmFja1wiIEBjbGljaz1cImJhY2tcIlxyXG5cdFx0XHRcdFx0Omljb249XCInXFx1ZTY0NSdcIj48L2ZyZWUtaWNvbi1idXR0b24+XHJcblx0XHRcdFx0XHQ8IS0tIOagh+mimCAtLT5cclxuXHRcdFx0XHRcdDx0ZXh0IHYtaWY9XCJ0aXRsZVwiIGNsYXNzPVwiZm9udC1tZCBtbC0zXCI+e3tnZXRUaXRsZX19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIOWPs+i+uSAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyXCIgdi1pZj1cInNob3dSaWdodFwiPlxyXG5cdFx0XHRcdFx0PHNsb3QgbmFtZT1cInJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdDwhLS0gPGZyZWUtaWNvbi1idXR0b24gQGNsaWNrPVwic2VhcmNoXCIgXHJcblx0XHRcdFx0XHRcdDppY29uPVwiJ1xcdWU2MDcnXCI+PC9mcmVlLWljb24tYnV0dG9uPiAtLT5cclxuXHRcdFx0XHRcdFx0PGZyZWUtaWNvbi1idXR0b24gQGNsaWNrPVwib3BlbkV4dGVuZFwiXHJcblx0XHRcdFx0XHRcdDppY29uPVwiJ1xcdWU2MzYnXCI+PC9mcmVlLWljb24tYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9zbG90PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSDljaDkvY0gLS0+XHJcblx0XHQ8dmlldyB2LWlmPVwiZml4ZWRcIiA6c3R5bGU9XCJmaXhlZFN0eWxlXCI+PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8IS0tIOaJqeWxleiPnOWNlSAtLT5cclxuXHRcdDxmcmVlLXBvcHVwIHYtaWY9XCJzaG93UmlnaHRcIiByZWY9XCJleHRlbmRcIiA6Ym9keVdpZHRoPVwiMzIwXCIgOmJvZHlIZWlnaHQ9XCIyMDVcIlxyXG5cdFx0Ym9keUJnQ29sb3I9XCJiZy1kYXJrXCIgdHJhbnNmb3JtT3JpZ2luPVwicmlnaHQgdG9wXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBmbGV4LWNvbHVtblwiIFxyXG5cdFx0XHRzdHlsZT1cIndpZHRoOiAzMjBycHg7aGVpZ2h0OiAyMDVycHg7XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4LTEgZmxleCBhbGlnbi1jZW50ZXJcIiBcclxuXHRcdFx0XHR2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBtZW51c1wiXHJcblx0XHRcdFx0OmtleT1cImluZGV4XCJcclxuXHRcdFx0XHRAY2xpY2s9XCJjbGlja0V2ZW50KGl0ZW0uZXZlbnQpXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250IHBsLTMgcHItMiBmb250LW1kIHRleHQtd2hpdGVcIj57e2l0ZW0uaWNvbn19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJmb250LW1kIHRleHQtd2hpdGVcIj57e2l0ZW0ubmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC9mcmVlLXBvcHVwPlxyXG5cdFx0XHJcblx0XHRcclxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxyXG5cdGltcG9ydCBmcmVlSWNvbkJ1dHRvbiBmcm9tIFwiLi9mcmVlLWljb24tYnV0dG9uLnZ1ZVwiXHJcblx0aW1wb3J0IGZyZWVQb3B1cCBmcm9tIFwiLi9mcmVlLXBvcHVwLnZ1ZVwiXHJcblx0dmFyIF90aGlzO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHNob3dCYWNrOntcclxuXHRcdFx0XHR0eXBlOkJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDpmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93TmF2OntcclxuXHRcdFx0XHR0eXBlOkJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDp0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdHRpdGxlOiB7XHJcblx0XHRcdFx0dHlwZTogW1N0cmluZyxCb29sZWFuXSxcclxuXHRcdFx0XHRkZWZhdWx0OmZhbHNlIFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmaXhlZDp7XHJcblx0XHRcdFx0dHlwZTpCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6dHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRub3JlYWRudW06e1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6MFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRiZ0NvbG9yOntcclxuXHRcdFx0XHR0eXBlOlN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OlwiYmctbmF2XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd1JpZ2h0OntcclxuXHRcdFx0XHR0eXBlOkJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDp0cnVlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wb25lbnRzOntcclxuXHRcdFx0ZnJlZUljb25CdXR0b24sXHJcblx0XHRcdGZyZWVQb3B1cFxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzQmFySGVpZ2h0OjAsXHJcblx0XHRcdFx0bmF2QmFySGVpZ2h0OjAsXHJcblx0XHRcdFx0bWVudXM6W1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOlwi5Y+R6LW3576k6IGKXCIsXHJcblx0XHRcdFx0XHRcdGV2ZW50OlwiY3JlYXRlR3JvdXBcIixcclxuXHRcdFx0XHRcdFx0aWNvbjpcIlxcdWU2MDBcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTpcIua3u+WKoOWFs+azqFwiLFxyXG5cdFx0XHRcdFx0XHRldmVudDpcImZvbGxvd1wiLFxyXG5cdFx0XHRcdFx0XHRpY29uOlwiXFx1ZTZhNVwiXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdF90aGlzID0gdGhpcztcclxuXHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTLU5WVUVcclxuXHRcdFx0dGhpcy5zdGF0dXNCYXJIZWlnaHQgPSBwbHVzLm5hdmlnYXRvci5nZXRTdGF0dXNiYXJIZWlnaHQoKVxyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0dGhpcy5uYXZCYXJIZWlnaHQgPSB0aGlzLnN0YXR1c0JhckhlaWdodCArIHVuaS51cHgycHgoOTApXHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0Zml4ZWRTdHlsZSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gYGhlaWdodDoke3RoaXMubmF2QmFySGVpZ2h0fXB4YFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRUaXRsZSgpe1xyXG5cdFx0XHRcdGxldCBub3JlYWRudW0gPSB0aGlzLm5vcmVhZG51bSA+IDAgPyAnKCcrdGhpcy5ub3JlYWRudW0rJyknIDogJydcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy50aXRsZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRDbGFzcygpe1xyXG5cdFx0XHRcdGxldCBmaXhlZCA9IHRoaXMuZml4ZWQ/J2ZpeGVkLXRvcCc6JydcclxuXHRcdFx0XHRyZXR1cm4gYCR7Zml4ZWR9ICR7dGhpcy5iZ0NvbG9yfWAgXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdG9wZW5FeHRlbmQoKSB7XHJcblx0XHRcdFx0dGhpcy4kcmVmcy5leHRlbmQuc2hvdyh1bmkudXB4MnB4KDQxNSksdW5pLnVweDJweCgxNTApKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbGlja0V2ZW50KGUpe1xyXG5cdFx0XHRcdHN3aXRjaCAoZSl7XHJcblx0XHRcdFx0XHRjYXNlICdjcmVhdGVHcm91cCc6XHJcblx0XHRcdFx0XHRcdF90aGlzLiRyZWZzLmV4dGVuZC5oaWRlKClcclxuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdHVybDonL3BhZ2VzL2dyb3VwL2FkZEdyb3VwL2FkZEdyb3VwJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2ZvbGxvdyc6XHJcblx0XHRcdFx0XHRcdF90aGlzLiRyZWZzLmV4dGVuZC5oaWRlKClcclxuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdHVybDonL3BhZ2VzL2ZyaWVuZC9hZGRGcmllbmQvYWRkRnJpZW5kJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOi/lOWbnlxyXG5cdFx0XHRiYWNrKCl7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdFx0XHRkZWx0YTogMVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9mcmVlLWljb24tYnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZjVjNjViYiZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ZyZWUtaWNvbi1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mcmVlLWljb24tYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIFxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI1NmVhOWJiNFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCLlpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWljb24tYnV0dG9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLnJlY3ljbGUuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mcmVlLWljb24tYnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZjVjNjViYiZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidmlld1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBbXCJmbGV4XCIsIFwiYWxpZ24tY2VudGVyXCIsIFwianVzdGlmeS1jZW50ZXJcIl0sXG4gICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiOTBycHhcIiwgd2lkdGg6IFwiOTBycHhcIiB9LFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS4kZW1pdChcImNsaWNrXCIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJpY29uZm9udFwiLCBcImZvbnQtbGdcIl0sIGNsYXNzOiBfdm0uaWNvbkNsYXNzIH0sXG4gICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5pY29uKSldXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZyZWUtaWNvbi1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJlZS1pY29uLWJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIFxyXG4gQGNsaWNrPVwiJGVtaXQoJ2NsaWNrJylcIlxyXG5cdHN0eWxlPVwiaGVpZ2h0OiA5MHJweDt3aWR0aDogOTBycHg7XCI+XHJcblx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250IGZvbnQtbGdcIiA6Y2xhc3M9XCJpY29uQ2xhc3NcIj57e2ljb259fTwvdGV4dD5cclxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdGljb246IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0aWNvbkNsYXNzOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUsIC8qIHZ1ZS1jbGkgb25seSAqL1xuICBjb21wb25lbnRzLCAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIHJlbmRlcmpzIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICBpZiAoY29tcG9uZW50cykge1xuICAgIG9wdGlvbnMuY29tcG9uZW50cyA9IE9iamVjdC5hc3NpZ24oY29tcG9uZW50cywgb3B0aW9ucy5jb21wb25lbnRzIHx8IHt9KVxuICB9XG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuICBpZiAocmVuZGVyanMpIHtcbiAgICAocmVuZGVyanMuYmVmb3JlQ3JlYXRlIHx8IChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgPSBbXSkpLnVuc2hpZnQoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzW3JlbmRlcmpzLl9fbW9kdWxlXSA9IHRoaXNcbiAgICB9KTtcbiAgICAob3B0aW9ucy5taXhpbnMgfHwgKG9wdGlvbnMubWl4aW5zID0gW10pKS5wdXNoKHJlbmRlcmpzKVxuICB9XG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2ZyZWUtcG9wdXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRlZTUzYmJlJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZnJlZS1wb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2ZyZWUtcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vZnJlZS1wb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kZWU1M2JiZSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vZnJlZS1wb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kZWU1M2JiZSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJkZWU1M2JiZVwiLFxuICBcIjY0OTVjNmRhXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIuWkqei1kC9UaWFuY2lXZWIvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtcG9wdXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGUucmVjeWNsZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZyZWUtcG9wdXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRlZTUzYmJlJnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLnN0YXR1c1xuICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyB6SW5kZXg6IFwiOTk5OVwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiB9IH0sIFtcbiAgICAgICAgX3ZtLm1hc2tcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgICAgICBcInBvc2l0aW9uLWZpeGVkXCIsXG4gICAgICAgICAgICAgICAgXCJ0b3AtMFwiLFxuICAgICAgICAgICAgICAgIFwibGVmdC0wXCIsXG4gICAgICAgICAgICAgICAgXCJyaWdodC0wXCIsXG4gICAgICAgICAgICAgICAgXCJib3R0b20tMFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0eWxlOiBfdm0uZ2V0TWFza0NvbG9yLFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmhpZGUgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlZjogXCJwb3B1cFwiLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInBvc2l0aW9uLWZpeGVkXCIsIFwiZnJlZS1hbmltYXRlZFwiXSxcbiAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Qm9keUNsYXNzLFxuICAgICAgICAgICAgc3R5bGU6IF92bS5nZXRCb2R5U3R5bGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAgICAgICAyXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mcmVlLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZyZWUtcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDxkaXYgc3R5bGU9XCJ6LWluZGV4Ojk5OTk7b3ZlcmZsb3c6aGlkZGVuO1wiIHYtaWY9XCJzdGF0dXNcIj5cclxuXHRcdDwhLS0g6JKZ54mIIC0tPlxyXG5cdFx0PGRpdiB2LWlmPVwibWFza1wiIGNsYXNzPVwicG9zaXRpb24tZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTAgYm90dG9tLTBcIlxyXG5cdFx0OnN0eWxlPVwiZ2V0TWFza0NvbG9yXCIgQGNsaWNrPVwiaGlkZVwiPjwvZGl2PlxyXG5cdFx0PCEtLSDlvLnlh7rmoYblhoXlrrkgLS0+XHJcblx0XHQ8ZGl2IHJlZj1cInBvcHVwXCIgY2xhc3M9XCJwb3NpdGlvbi1maXhlZCBmcmVlLWFuaW1hdGVkXCIgOmNsYXNzPVwiZ2V0Qm9keUNsYXNzXCIgOnN0eWxlPVwiZ2V0Qm9keVN0eWxlXCI+XHJcblx0XHRcdDxzbG90Pjwvc2xvdD5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHQvLyAjaWZkZWYgQVBQLVBMVVMtTlZVRVxyXG5cdGNvbnN0IGFuaW1hdGlvbiA9IHdlZXgucmVxdWlyZU1vZHVsZSgnYW5pbWF0aW9uJylcclxuXHQvLyAjZW5kaWZcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHQvLyDmmK/lkKblvIDlkK/okpnniYjpopzoibJcclxuXHRcdFx0bWFza0NvbG9yOiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmK/lkKblvIDlkK/okpnniYhcclxuXHRcdFx0bWFzazp7XHJcblx0XHRcdFx0dHlwZTpCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6dHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmK/lkKblsYXkuK1cclxuXHRcdFx0Y2VudGVyOntcclxuXHRcdFx0XHR0eXBlOkJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDpmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmK/lkKblpITkuo7lupXpg6hcclxuXHRcdFx0Ym90dG9tOntcclxuXHRcdFx0XHR0eXBlOkJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDpmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlvLnlh7rlsYLlhoXlrrnlrr3luqZcclxuXHRcdFx0Ym9keVdpZHRoOntcclxuXHRcdFx0XHR0eXBlOk51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OjBcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5by55Ye65bGC5YaF5a656auY5bqmXHJcblx0XHRcdGJvZHlIZWlnaHQ6e1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6MFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRib2R5QmdDb2xvcjp7XHJcblx0XHRcdFx0dHlwZTpTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDpcImJnLXdoaXRlXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0dHJhbnNmb3JtT3JpZ2luOntcclxuXHRcdFx0XHR0eXBlOlN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OlwibGVmdCB0b3BcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyB0YWJiYXLpq5jluqZcclxuXHRcdFx0dGFiYmFySGVpZ2h0OntcclxuXHRcdFx0XHR0eXBlOk51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OjBcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzOiBmYWxzZSxcclxuXHRcdFx0XHR4Oi0xLFxyXG5cdFx0XHRcdHk6MSxcclxuXHRcdFx0XHRtYXhYOjAsXHJcblx0XHRcdFx0bWF4WTowXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHQgICAgY29uc3QgcmVzID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblx0XHRcdFx0dGhpcy5tYXhYID0gcmVzLndpbmRvd1dpZHRoIC0gdW5pLnVweDJweCh0aGlzLmJvZHlXaWR0aClcclxuXHRcdFx0XHR0aGlzLm1heFkgPSByZXMud2luZG93SGVpZ2h0IC0gdW5pLnVweDJweCh0aGlzLmJvZHlIZWlnaHQpIC0gdW5pLnVweDJweCh0aGlzLnRhYmJhckhlaWdodClcclxuXHRcdFx0fSBjYXRjaCAoZSkge1xyXG5cdFx0XHQgICAgLy8gZXJyb3JcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdGdldE1hc2tDb2xvcigpIHtcclxuXHRcdFx0XHRsZXQgaSA9IHRoaXMubWFza0NvbG9yID8gMC41IDogMFxyXG5cdFx0XHRcdHJldHVybiBgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwke2l9KTtgIFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRCb2R5Q2xhc3MoKXtcclxuXHRcdFx0XHRpZih0aGlzLmNlbnRlcil7XHJcblx0XHRcdFx0XHRyZXR1cm4gJ2xlZnQtMCByaWdodC0wIGJvdHRvbS0wIHRvcC0wIGZsZXggYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgYm90dG9tID0gdGhpcy5ib3R0b20gPyAnbGVmdC0wIHJpZ2h0LTAgYm90dG9tLTAnIDogJ3JvdW5kZWQgYm9yZGVyJ1xyXG5cdFx0XHRcdHJldHVybiBgJHt0aGlzLmJvZHlCZ0NvbG9yfSAke2JvdHRvbX1gXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldEJvZHlTdHlsZSgpe1xyXG5cdFx0XHRcdGxldCBsZWZ0ID0gdGhpcy54ID4gLTEgPyBgbGVmdDoke3RoaXMueH1weDtgIDogJydcclxuXHRcdFx0XHRsZXQgdG9wID0gdGhpcy55ID4gLTEgPyBgdG9wOiR7dGhpcy55fXB4O2AgOiAnJ1xyXG5cdFx0XHRcdHJldHVybiBsZWZ0ICsgdG9wXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOntcclxuXHRcdFx0c2hvdyh4ID0gLTEgLHkgPSAtMSl7XHJcblx0XHRcdFx0aWYgKHRoaXMuc3RhdHVzKSB7XHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMueCA9ICh4ID4gdGhpcy5tYXhYKSA/IHRoaXMubWF4WCA6IHhcclxuXHRcdFx0XHR0aGlzLnkgPSAoeSA+IHRoaXMubWF4WSkgPyB0aGlzLm1heFkgOiB5XHJcblx0XHRcdFx0dGhpcy5zdGF0dXMgPSB0cnVlXHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTLU5WVUVcclxuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKT0+e1xyXG5cdFx0XHRcdFx0YW5pbWF0aW9uLnRyYW5zaXRpb24odGhpcy4kcmVmcy5wb3B1cCwge1xyXG5cdFx0XHRcdFx0ICAgIHN0eWxlczoge1xyXG5cdFx0XHRcdFx0ICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgxLDEpJyxcclxuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm1PcmlnaW46dGhpcy50cmFuc2Zvcm1PcmlnaW4sXHJcblx0XHRcdFx0XHRcdFx0b3BhY2l0eToxXHJcblx0XHRcdFx0XHQgICAgfSxcclxuXHRcdFx0XHRcdCAgICBkdXJhdGlvbjogMTAwLCAvL21zXHJcblx0XHRcdFx0XHQgICAgdGltaW5nRnVuY3Rpb246ICdlYXNlJyxcclxuXHRcdFx0XHRcdCAgICB9LCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHQgICAgICAgY29uc29sZS5sb2coJ+WKqOeUu+aJp+ihjOe7k+adnycpO1xyXG5cdFx0XHRcdFx0ICAgIH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0aGlkZSgpe1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2hpZGUnKVxyXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVUy1OVlVFXHJcblx0XHRcdFx0YW5pbWF0aW9uLnRyYW5zaXRpb24odGhpcy4kcmVmcy5wb3B1cCwge1xyXG5cdFx0XHRcdHN0eWxlczoge1xyXG5cdFx0XHRcdFx0dHJhbnNmb3JtOiAnc2NhbGUoMCwwKScsXHJcblx0XHRcdFx0XHR0cmFuc2Zvcm1PcmlnaW46dGhpcy50cmFuc2Zvcm1PcmlnaW4sXHJcblx0XHRcdFx0XHRvcGFjaXR5OjBcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGR1cmF0aW9uOiAxMDAsIC8vbXNcclxuXHRcdFx0XHR0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnLFxyXG5cdFx0XHRcdH0sICgpPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5zdGF0dXMgPSBmYWxzZVxyXG5cdFx0XHRcdCAgIGNvbnNvbGUubG9nKCfliqjnlLvmiafooYznu5PmnZ8nKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdC8vICNpZm5kZWYgQVBQLVBMVVMtTlZVRVxyXG5cdFx0XHRcdHRoaXMuc3RhdHVzID0gZmFsc2VcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxyXG5cdC5mcmVlLWFuaW1hdGVke1xyXG5cdFx0LyogI2lmZGVmIEFQUC1QTFVTLU5WVUUgKi9cclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoMCwwKTtcclxuXHRcdG9wYWNpdHk6IDA7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHR9XG48L3N0eWxlPlxuIiwiZnVuY3Rpb24gdHlwb2YgKHYpIHtcclxuICB2YXIgcyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxyXG4gIHJldHVybiBzLnN1YnN0cmluZyg4LCBzLmxlbmd0aCAtIDEpXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdExvZyAoKSB7XHJcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldXHJcbiAgfVxyXG5cclxuICB2YXIgbXNncyA9IGFyZ3MubWFwKGZ1bmN0aW9uICh2KSB7XHJcbiAgICB2YXIgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2KVxyXG5cclxuICAgIGlmICh0eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdbb2JqZWN0IG9iamVjdF0nKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdiA9ICctLS1CRUdJTjpKU09OLS0tJyArIEpTT04uc3RyaW5naWZ5KHYpICsgJy0tLUVORDpKU09OLS0tJ1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgdiA9ICdbb2JqZWN0IG9iamVjdF0nXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh2ID09PSBudWxsKSB7XHJcbiAgICAgICAgdiA9ICctLS1OVUxMLS0tJ1xyXG4gICAgICB9IGVsc2UgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHYgPSAnLS0tVU5ERUZJTkVELS0tJ1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciB2VHlwZSA9IHR5cG9mKHYpLnRvVXBwZXJDYXNlKClcclxuXHJcbiAgICAgICAgaWYgKHZUeXBlID09PSAnTlVNQkVSJyB8fCB2VHlwZSA9PT0gJ0JPT0xFQU4nKSB7XHJcbiAgICAgICAgICB2ID0gJy0tLUJFR0lOOicgKyB2VHlwZSArICctLS0nICsgdiArICctLS1FTkQ6JyArIHZUeXBlICsgJy0tLSdcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdiA9IFN0cmluZyh2KVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2XHJcbiAgfSlcclxuICB2YXIgbXNnID0gJydcclxuXHJcbiAgaWYgKG1zZ3MubGVuZ3RoID4gMSkge1xyXG4gICAgdmFyIGxhc3RNc2cgPSBtc2dzLnBvcCgpXHJcbiAgICBtc2cgPSBtc2dzLmpvaW4oJy0tLUNPTU1BLS0tJylcclxuXHJcbiAgICBpZiAobGFzdE1zZy5pbmRleE9mKCcgYXQgJykgPT09IDApIHtcclxuICAgICAgbXNnICs9IGxhc3RNc2dcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1zZyArPSAnLS0tQ09NTUEtLS0nICsgbGFzdE1zZ1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBtc2cgPSBtc2dzWzBdXHJcbiAgfVxyXG5cclxuICByZXR1cm4gbXNnXHJcbn1cclxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mcmVlLXBvcHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWRlZTUzYmJlJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZyZWUtcG9wdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGVlNTNiYmUmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJmcmVlLWFuaW1hdGVkXCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBcInNjYWxlKDAsMClcIixcbiAgICBcIm9wYWNpdHlcIjogMFxuICB9XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9mcmVlLWxpc3QtaXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njk3NWNlZDcmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mcmVlLWxpc3QtaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2ZyZWUtbGlzdC1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIFxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCJmNjQ5YTFlMFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCLlpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWxpc3QtaXRlbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJlZS1saXN0LWl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY5NzVjZWQ3JlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2aWV3XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFtcImJnLXdoaXRlXCIsIFwiZmxleFwiLCBcImFsaWduLXN0cmV0Y2hcIl0sXG4gICAgICBvbjoge1xuICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLiRlbWl0KFwiY2xpY2tcIilcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX3ZtLnNob3dMZWZ0SWNvblxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXG4gICAgICAgICAgICAgICAgXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgXCJhbGlnbi1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICBcImp1c3RpZnktY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgXCJweS0yXCIsXG4gICAgICAgICAgICAgICAgXCJwbC0zXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl90KFwiaWNvblwiKSxcbiAgICAgICAgICAgICAgX3ZtLmNvdmVyXG4gICAgICAgICAgICAgICAgPyBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZTogX3ZtLmNvdmVyU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogX3ZtLmNvdmVyLCBtb2RlOiBcImFzcGVjdEZpbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGxvbmdwcmVzczogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJpbWdDbGlja1wiKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF9jKFxuICAgICAgICBcInZpZXdcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXG4gICAgICAgICAgICBcImZsZXgtMVwiLFxuICAgICAgICAgICAgXCJmbGV4XCIsXG4gICAgICAgICAgICBcImFsaWduLWNlbnRlclwiLFxuICAgICAgICAgICAgXCJcIixcbiAgICAgICAgICAgIFwianVzdGlmeS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICBcInByLTNcIixcbiAgICAgICAgICAgIFwicHktM1wiLFxuICAgICAgICAgICAgXCJwbC0zXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIGNsYXNzOiBfdm0uYm9yZGVyID8gXCJib3JkZXItYm90dG9tXCIgOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3QoXCJkZWZhdWx0XCIsIFtcbiAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImZvbnQtbWRcIiwgXCJ0ZXh0LWRhcmtcIl0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5zaG93UmlnaHRcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiZmxleFwiLCBcImFsaWduLWNlbnRlclwiXSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdChcInJpZ2h0XCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnNob3dSaWdodEljb25cbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uZm9udFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1saWdodC1tdXRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1tZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi7piFXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJlZS1saXN0LWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJlZS1saXN0LWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiYmctd2hpdGUgZmxleCBhbGlnbi1zdHJldGNoXCJcclxuXHRAY2xpY2s9XCIkZW1pdCgnY2xpY2snKVwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0yIHBsLTNcIlxyXG5cdFx0di1pZj1cInNob3dMZWZ0SWNvblwiPlxyXG5cdFx0XHQ8c2xvdCBuYW1lPVwiaWNvblwiPjwvc2xvdD5cclxuXHRcdFx0PGltYWdlIEBsb25ncHJlc3M9XCIkZW1pdCgnaW1nQ2xpY2snKVwiIDpzcmM9XCJjb3ZlclwiIHYtaWY9XCJjb3ZlclwiXHJcblx0XHRcdG1vZGU9XCJhc3BlY3RGaWxsXCIgOnN0eWxlPVwiY292ZXJTdHlsZVwiPjwvaW1hZ2U+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cImZsZXgtMSBmbGV4IGFsaWduLWNlbnRlciAganVzdGlmeS1iZXR3ZWVuIHByLTMgcHktMyBwbC0zXCIgOmNsYXNzPVwiYm9yZGVyID8gJ2JvcmRlci1ib3R0b20nIDogJydcIj5cclxuXHRcdFx0PHNsb3Q+XHJcblx0XHRcdFx0PHRleHQgY2xhc3M9XCJmb250LW1kIHRleHQtZGFya1wiPnt7dGl0bGV9fTwvdGV4dD5cclxuXHRcdFx0PC9zbG90PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyXCIgdi1pZj1cInNob3dSaWdodFwiPlxyXG5cdFx0XHRcdDxzbG90IG5hbWU9XCJyaWdodFwiPjwvc2xvdD5cclxuXHRcdFx0XHQ8IS0tIOWPs+eureWktCAtLT5cclxuXHRcdFx0XHQ8dGV4dCB2LWlmPVwic2hvd1JpZ2h0SWNvblwiIGNsYXNzPVwiaWNvbmZvbnQgdGV4dC1saWdodC1tdXRlZCBmb250LW1kXCI+JiN4ZTYwNTs8L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdC8vIOaYr+WQpuW8gOWQr+S4i+i+uee6v1xyXG5cdFx0XHRib3JkZXI6e1xyXG5cdFx0XHRcdHR5cGU6Qm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OnRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5bCB6Z2iXHJcblx0XHRcdGNvdmVyOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IFwiXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5bCB6Z2i5aSn5bCPXHJcblx0XHRcdGNvdmVyU2l6ZTp7XHJcblx0XHRcdFx0dHlwZTogW1N0cmluZyxOdW1iZXJdLFxyXG5cdFx0XHRcdGRlZmF1bHQ6NzVcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5qCH6aKYXHJcblx0XHRcdHRpdGxlOntcclxuXHRcdFx0XHR0eXBlOlN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OlwiXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5pi+56S65Y+z6L65XHJcblx0XHRcdHNob3dSaWdodDp7XHJcblx0XHRcdFx0dHlwZTpCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5pi+56S65bem6L655Zu+5qCHXHJcblx0XHRcdHNob3dMZWZ0SWNvbjp7XHJcblx0XHRcdFx0dHlwZTpCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6dHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmK/lkKbmmL7npLrnrq3lpLRcclxuXHRcdFx0c2hvd1JpZ2h0SWNvbjp7XHJcblx0XHRcdFx0dHlwZTpCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6dHJ1ZVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0Y292ZXJTdHlsZSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gYHdpZHRoOiAke3RoaXMuY292ZXJTaXplfXJweDtoZWlnaHQ6ICR7dGhpcy5jb3ZlclNpemV9cnB4O2BcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPlxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRDb2RlTXNnKGNvZGUpe1xyXG5cdHZhciBlcnJvcl9jb2RlPXtcclxuXHRcdDg4MDAwMTpcIuacquefpemUmeivr+eggVwiLFxyXG5cdFx0ODgwMDAyOlwi5Y+C5pWw5LiN5ZCI5rOVXCIsXHJcblx0XHQ4ODAwMDM6XCLpnZ7ms5XlhoXlrrnmoLzlvI9cIixcclxuXHRcdDg4MDAwNDpcIumdnuazleWGheWuueagvOW8j1wiLFxyXG5cdFx0ODgwMDA1Olwi5paH5Lu25LiN5a2Y5ZyoXCIsXHJcblx0XHQ4ODAwMDY6XCLms6jlhozkuYvliY3lhYjpgIDlh7pcIixcclxuXHRcdDg4MDAwNzpcIuiiq+mZkOWItuazqOWGjFwiLFxyXG5cdFx0ODgwMDA4OlwibXNnX2lkIOmdnuazlVwiLFxyXG5cdFx0ODgwMTAxOlwiYXBwa2V5IOS4jeWtmOWcqFwiLFxyXG5cdFx0ODgwMTAyOlwi562+5ZCN6ZSZ6K+vXCIsXHJcblx0XHQ4ODAxMDM6XCLnlKjmiLfkuI3lrZjlnKhcIixcclxuXHRcdDg4MDEwNDpcIuWvhueggemUmeivr1wiLFxyXG5cdFx0ODgwMTA2Olwi562+5ZCN6L+H5pyfXCIsXHJcblx0XHQ4ODAxMDc6XCLlt7Lnu4/mmK/nmbvlvZXnirbmgIFcIixcclxuXHRcdDg4MDEwOTpcIumHjeWkjeeZu+W9leaTjeS9nFwiLFxyXG5cdFx0ODgwMTEwOlwi5aSa6YCa6YGT6ZSZ6K+v77yM5pu05pawc2Rr54mI5pysXCIsXHJcblx0XHQ4ODAxMTE6XCLnlKjmiLfooqvnpoHnlKhcIixcclxuXHRcdDg4MDIwMzpcIuebruagh+eUqOaIt+S4jeWtmOWcqFwiLFxyXG5cdFx0ODgwMjA0Olwi55uu5qCH576k57uE5LiN5a2Y5ZyoXCIsXHJcblx0XHQ4ODAyMDU6XCLnlKjmiLfkuI3lnKjnvqTnu4RcIixcclxuXHRcdDg4MDIwNjpcIua2iOaBr+Wkp+Wwj+i2hei/h+mZkOWItlwiLFxyXG5cdFx0ODgwMjA3Olwi55So5oi36KKr5a+55pa55ouJ6buRXCIsXHJcblx0XHQ4ODAyMDg6XCLmtojmga/ljIXlkKvmlY/mhJ/or43msYdcIixcclxuXHRcdDg4MDIwOTpcIuWPkemAgemAn+W6pui2hei/h+mZkOWItlwiLFxyXG5cdFx0ODgwMjEwOlwi5paH5Lu25aSn5bCP6LaF6L+H6ZmQ5Yi2XCIsXHJcblx0XHQ4ODAyMTI6XCLnpoHoqIDkuK1cIixcclxuXHRcdDg4MDQwMjpcIuayoeacieWIm+W7uue+pOe7hOeahOadg+mZkFwiLFxyXG5cdFx0ODgwNDAzOlwi576k5pWw6YeP5Yiw6L6+5LiK6ZmQXCIsXHJcblx0XHQ4ODA0MDQ6XCLnvqTlkI3lrZfotoXov4fplb/luqbpmZDliLbvvIzliJvlu7rlpLHotKVcIixcclxuXHRcdDg4MDQwNTpcIue+pOaPj+i/sOmVv+W6pui2hei/h+mZkOWItlwiLFxyXG5cdFx0ODgwNjAyOlwi55uu5qCH5Li656m6XCIsXHJcblx0XHQ4ODA2MDQ6XCLmsqHmnYPpmZDmt7vliqDnvqTmiJDlkZhcIixcclxuXHRcdDg4MDYwNjpcIuaIkOWRmOWIl+ihqOS4reacieeUqOaIt+ayoeacieiiq+a3u+WKoOWIsOe+pOe7hOeahOadg+mZkFwiLFxyXG5cdFx0ODgwNjA3Olwi6K+l5oiQ5ZGY5bey5Zyo576k6IGK5LitXCIsXHJcblx0XHQ4ODA2MDg6XCLmlbDph4/otoXov4fpmZDliLZcIixcclxuXHRcdDg4MDYwOTpcIuaIkOWRmOWIl+ihqOS4reWtmOWcqOaIkOWRmOeahOe+pOe7hOaVsOmHj+i2hei/h+mZkOWItlwiLFxyXG5cdFx0ODgwNjEwOlwi55So5oi35bey57uP5Zyo576k6YeM6Z2iXCIsXHJcblx0XHQ4ODA2MTE6XCLnvqTnsbvlnovkuI3mlK/mjIHor6Xmk43kvZxcIixcclxuXHRcdDg4MDYxMjpcIuW3sue7j+WkhOeQhlwiLFxyXG5cdFx0ODgwNjE0Olwi5peg5p2D6ZmQ5pON5L2cXCIsXHJcblx0XHQ4ODA3MDQ6XCLnlKjmiLfmsqHmnInliKDpmaTnvqTmiJDlkZjnmoTmnYPpmZBcIixcclxuXHRcdDg4MDcwNTpcIuaIkOWRmOWIl+ihqOS4reWtmOWcqOaIkOWRmOeUqOaIt+ayoeadg+mZkOWIoOmZpFwiLFxyXG5cdFx0ODgwOTAzOlwi5oiQ5ZGY5YiX6KGo5Lit5pyJ5oiQ5ZGY5LiN6IO96KKr5re75Yqg77yM5re75Yqg5aSx6LSlXCIsXHJcblx0XHQ4ODA5MDQ6XCLph43lpI3mt7vliqBcIixcclxuXHRcdDg4MTEwMTpcIuivpeaIkOWRmOW3suWkhOS6juWFjeaJk+aJsOeKtuaAgVwiLFxyXG5cdFx0ODgxMTAyOlwi6K+l5oiQ5ZGY5LiN5aSE5LqO5YWN5omT5omw54q25oCBXCIsXHJcblx0XHQ4ODExMDU6XCLor6XnvqTnu4Tlt7LlpITkuo7lhY3miZPmibDnirbmgIFcIixcclxuXHRcdDg4MTEwNjpcIuivpee+pOe7hOS4jeWkhOS6juWFjeaJk+aJsOeKtuaAgVwiLFxyXG5cdFx0ODgxMTA3Olwi5bey57uP6K6+572u5YWN5omT5omwXCIsXHJcblx0XHQ4ODExMDg6XCLmsqHmnInorr7nva7lhY3miZPmibBcIixcclxuXHRcdDg4MTIwMzpcIuW3sue7j+iuvue9ruS6huWxj+iUvVwiLFxyXG5cdFx0ODgxMjA0Olwi576k5pyq6K6+572u5bGP6JS9XCIsXHJcblx0XHQ4ODEzMDI6XCLlt7Lnu4/mmK/lpb3lj4tcIixcclxuXHRcdDg4MTMwMzpcIumdnuWlveWPi+WFs+ezu1wiLFxyXG5cdFx0ODgxMzA0Olwi6Z2e5rOV5aSH5rOoXCIsXHJcblx0XHQ4ODEzMDU6XCLmt7vliqDlpb3lj4vlpLHotKXvvJrpgoDor7fkuovku7bml6DmlYhcIixcclxuXHRcdDg4MTQwMTpcIui2heWHuuaSpOWbnuaXtumXtFwiLFxyXG5cdFx0ODgxNDAyOlwi6K+35rGC5pKk5Zue5pa55LiN5piv5raI5oGv5Y+R6YCB5pa5XCIsXHJcblx0XHQ4ODE0MDM6XCLmtojmga/kuI3lrZjlnKhcIixcclxuXHRcdDg4MTQwNDpcIuW3sue7j+aSpOWbnlwiLFxyXG5cdFx0ODgxNTAxOlwi55So5oi35LiN5Zyo6IGK5aSp5a6kXCIsXHJcblx0XHQ4ODE1MDI6XCLnlKjmiLfooqvnpoHmraLlj5Hmtojmga9cIixcclxuXHRcdDg4MTUwMzpcIuiBiuWkqeWupOS4jeWtmOWcqFwiLFxyXG5cdFx0ODgxNTA0Olwi5raI5oGv6ZW/5bqm6LaF5Ye66ZmQ5Yi2XCIsXHJcblx0XHQ4ODE1MDc6XCLnlKjmiLflt7Lnu4/lnKjogYrlpKnlrqRcIixcclxuXHRcdDg4MTUwODpcIui2hei/h+iBiuWkqeWupOS6uuaVsOmZkOWItlwiLFxyXG5cdFx0ODgxNTA5Olwi5raI5oGv5qC85byP6ZSZ6K+vXCIsXHJcblx0XHQ4ODE2MDI6XCLnm67moIfnlKjmiLfmnKrnmbvlvZVcIixcclxuXHRcdDg4MTYwNDpcIua2iOaBr+mVv+W6pui2heWHuumZkOWItlwiLFxyXG5cdFx0ODgxNzAxOlwi55So5oi35LiN5piv576k566h55CG5ZGYXCIsXHJcblx0XHQ4ODIwMDE6XCLns7vnu5/lhoXpg6jplJnor69cIixcclxuXHRcdDg4MjAwMjpcIuinhuaTjeS9nOiAjOWumlwiLFxyXG5cdFx0ODgyMDAzOlwi5Y+C5pWw5LiN5ZCI5rOVXCIsXHJcblx0XHQ4ODIwMDQ6XCLml6DmlYjmjojmnYNcIixcclxuXHRcdDg4MjAwNTpcIuezu+e7n+e5geW/me+8jOeojeWQjumHjeivlVwiXHJcblx0fVxyXG5cdHJldHVybiBlcnJvcl9jb2RlW2NvZGVdO1xyXG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9mcmVlLW1haW4tYnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lODA3NTcwYSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ZyZWUtbWFpbi1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mcmVlLW1haW4tYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIFxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI2MzhhOGE3NFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCLlpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLW1haW4tYnV0dG9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLnJlY3ljbGUuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mcmVlLW1haW4tYnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lODA3NTcwYSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidmlld1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBbXCJyb3VuZGVkXCIsIFwibXItMlwiLCBcInB4LTJcIiwgXCJweS0xXCJdLFxuICAgICAgY2xhc3M6IF92bS5kaXNhYmxlZCA/IFwiYmctbGlnaHQgYm9yZGVyXCIgOiBcIm1haW4tYmctY29sb3JcIixcbiAgICAgIG9uOiB7IGNsaWNrOiBfdm0uY2xpY2tFdmVudCB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJmb250XCJdLFxuICAgICAgICAgIGNsYXNzOiBfdm0uZGlzYWJsZWQgPyBcInRleHQtbGlnaHQtbXV0ZWRcIiA6IFwidGV4dC13aGl0ZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5uYW1lKSldXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZyZWUtbWFpbi1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJlZS1tYWluLWJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJyb3VuZGVkIG1yLTIgcHgtMiBweS0xXCJcclxuXHRAY2xpY2s9XCJjbGlja0V2ZW50XCJcclxuXHQ6Y2xhc3M9XCJkaXNhYmxlZCA/ICdiZy1saWdodCBib3JkZXInIDogJ21haW4tYmctY29sb3InXCI+XHJcblx0XHQ8dGV4dCBjbGFzcz1cImZvbnRcIlxyXG5cdFx0OmNsYXNzPVwiZGlzYWJsZWQgPyAndGV4dC1saWdodC1tdXRlZCc6J3RleHQtd2hpdGUnXCI+e3tuYW1lfX08L3RleHQ+XHJcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRuYW1lOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IFwiXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0ZGlzYWJsZWQ6e1xyXG5cdFx0XHRcdHR5cGU6Qm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OmZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGNsaWNrRXZlbnQoKSB7XHJcblx0XHRcdFx0aWYoIXRoaXMuZGlzYWJsZWQpe1xyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnY2xpY2snKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cbiIsInZhciBwaW55aW4gPSAoZnVuY3Rpb24oKSB7XHJcblx0dmFyIFBpbnlpbiA9IGZ1bmN0aW9uKG9wcykge1xyXG5cdFx0XHR0aGlzLmluaXRpYWxpemUob3BzKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0b3B0aW9ucyA9IHtcclxuXHRcdFx0Y2hlY2tQb2x5cGhvbmU6IGZhbHNlLFxyXG5cdFx0XHRjaGFyY2FzZTogJ2RlZmF1bHQnXHJcblx0XHR9O1xyXG5cclxuXHJcblx0UGlueWluLmZuID0gUGlueWluLnByb3RvdHlwZSA9IHtcclxuXHRcdGluaXQ6IGZ1bmN0aW9uKG9wcykge1xyXG5cdFx0XHR0aGlzLm9wdGlvbnMgPSBleHRlbmQob3B0aW9ucywgb3BzKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0aW5pdGlhbGl6ZTogZnVuY3Rpb24ob3BzKSB7XHJcblx0XHRcdHRoaXMuaW5pdChvcHMpO1xyXG5cdFx0XHR0aGlzLmNoYXJfZGljdCA9XHJcblx0XHRcdFx0XCJZRFlRU1hNV1pTU1hKQllNR0NDWlFQU1NRQllDRFNDRFFMRFlMWUJTU0pHWVpaSkpGS0NDTFpESFdEV1pKTEpQRllZTldKSlRNWUhaV1pIRkxaUFBRSEdTQ1lZWU5KUVlYWEdKSEhTRFNKTktLVE1PTUxDUlhZUFNOUVNFQ0NRWkdHTExZSkxNWVpaU0VDWUtZWUhRV0pTU0dHWVhZWllKV1dLREpIWUNITVlYSlRMWEpZUUJZWFpMRFdSREpSV1lTUkxEWkpQQ0JaSkpCUkNGVExFQ1pTVFpGWFhaSFRSUUhZQkRMWUNaU1NZTU1SRk1ZUVpQV1dKSllGQ1JXRkRGWlFQWUREV1lYS1lKQVdKRkZYWVBTRlRaWUhIWVpZU1dDSllYU0NMQ1hYV1paWE5CR05OWEJYTFpTWlNCU0dQWVNZWkRITURaQlFCWkNXRFpaWVlUWkhCVFNZWUJaR05UTlhRWVdRU0tCUEhITFhHWUJGTUpFQkpISEdRVEpDWVNYU1RLWkhMWUNLR0xZU01aWFlBTE1FTERDQ1hHWllSSlhTRExUWVpDUUtDTk5KV0hKVFpaQ1FMSlNUU1RCTlhCVFlYQ0VRWEdLV0pZRkxaUUxZSFlYU1BTRlhMTVBCWVNYWFhZREpDWllMTExTSlhGSEpYUEpCVEZGWUFCWVhCSFpaQkpZWkxXTENaR0dCVFNTTURUSlpYUFRIWVFUR0xKU0NRRlpLSlpKUU5MWldMU0xIRFpCV0pOQ0paWVpTUVFZQ1FZUlpDSkpXWUJSVFdQWUZUV0VYQ1NLRFpDVEJaSFlaWllZSlhaQ0ZGWlpNSllYWFNEWlpPVFRCWkxRV0ZDS1NaU1hGWVJMTllKTUJEVEhKWFNRUUNDU0JYWVlUU1lGQlhEWlRHQkNOU0xDWVpaUFNBWllaWlNDSkNTSFpRWURYTEJQSkxMTVFYVFlEWlhTUUpUWlBYTENHTFFUWldKQkhDVFNZSlNGWFlFSkpUTEJHWFNYSk1ZSlFRUEZaQVNZSk5UWURKWEtKQ0RKU1pDQkFSVERDTFlKUU1XTlFOQ0xMTEtCWUJaWlNZSFFRTFRXTENDWFRYTExaTlRZTE5FV1laWVhDWlhYR1JLUk1UQ05ETkpUU1lZU1NEUURHSFNEQkpHSFJXUlFMWUJHTFhITEdUR1hCUUpEWlBZSlNKWUpDVE1STllNR1JaSkNaR0pNWk1HWE1QUllYS0pOWU1TR01aSllNS01GWE1MRFRHRkJIQ0pIS1lMUEZNRFhMUUpKU01UUUdaU0pMUURMREdKWUNBTENNWkNTREpMTE5YREpGRkZGSkNaRk1aRkZQRktIS0dEUFNYS1RBQ0pESEhaRERDUlJDRlFZSktRQ0NXSkRYSFdKTFlMTFpHQ0ZDUURTTUxaUEJKSlBMU0JDSkdHRENLS0RFWlNRQ0NLSkdDR0tESlRKRExaWUNYS0xRU0NHSkNMVEZQQ1FDWkdXUEpEUVlaSkpCWUpIU0pEWldHRlNKR1pLUUNDWkxMUFNQS0pHUUpIWlpMSlBMR0pHSkpUSEpKWUpaQ1pNTFpMWVFCR0pXTUxKS1haRFpOSlFTWVpNTEpMTEpLWVdYTUtKTEhTS0pHQk1DTFlZTUtYSlFMQk1MTEtNRFhYS1dZWFlTTE1MUFNKUVFKUVhZWEZKVEpEWE1YWExMQ1hRQlNZSkJHV1lNQkdHQkNZWFBKWUdQRVBGR0RKR0JIQk5TUUpZWkpLSktIWFFGR1FaS0ZIWUdLSERLTExTREpRWFBRWUtZQk5RU1hRTlNaU1dIQlNYV0hYV0JaWlhETU5TSkJTQktCQlpLTFlMWEdXWERSV1lRWk1ZV1NKUUxDSlhYSlhLSkVRWFNDWUVUTFpITFlZWVNEWlBBUVlaQ01UTFNIVFpDRllaWVhZTEpTRENKUUFHWVNMQ1FMWVlZU0hNUlFRS0xEWFpTQ1NTU1lEWUNKWVNGU0pCRlJTU1pRU0JYWFBYSllTRFJDS0dKTEdES1pKWkJES1RDU1lRUFlIU1RDTERKREhNWE1DR1hZWkhKRERUTUhMVFhaWFlMWU1PSFlKQ0xUWUZCUVFYUEZCREZISFRLU1FIWllZV0NOWFhDUldIT1dHWUpMRUdXRFFDV0dGSllDU05UTVlUT0xCWUdXUVdFU0pQV05NTFJZRFpTWlRYWVFQWkdDV1hITkdQWVhTSE1ZUUpYWlREUFBCRllIWkhUSllGRFpXS0dLWkJMRE5UU1hIUUVFR1paWUxaTU1aWUpaR1haWEtIS1NUWE5YWFdZTFlBUFNUSFhEV0haWU1QWEFHS1lEWEJITkhYS0RQSk5NWUhZTFBNR09DU0xOWkhLWFhMUFpaTEJNTFNGQkhIR1lHWVlHR0JIU0NZQVFUWVdMWFRaUUNFWllEUURRTU1IVEtMTFNaSExTSlpXRllIUVNXU0NXTFFBWllOWVRMU1hUSEFaTktaWlNaWkxBWFhaV1dDVEdRUVRERFlaVENDSFlRWkZMWFBTTFpZR1BaU1pOR0xORFFUQkRMWEdUQ1RBSkRLWVdOU1laTEpISFpaQ1dOWVlaWVdNSFlDSEhZWEhKS1pXU1hIWllYTFlTS1FZU1BTTFlaV01ZUFBLQllHTEtaSFRZWEFYUVNZU0hYQVNNQ0hLRFNDUlNXSlBXWFNHWkpMV1dTQ0hTSkhTUU5IQ1NFR05EQVFUQkFBTFpaTVNTVERRSkNKS1RTQ0pBWFBMR0dYSEhHWFhaQ1hQRE1NSExER1RZQllTSk1YSE1SQ1BYWEpaQ0taWFNITUxRWFhUVEhYV1pGS0hDQ1pEWVRDSllYUUhMWERIWVBKUVhZTFNZWURaT1pKTllYUUVaWVNRWUFZWFdZUERHWEREWFNQUFlaTkRMVFdSSFhZRFhaWkpIVENYTUNaTEhQWVlZWU1IWkxMSE5YTVlMTExNRENQUFhITVhES1lDWVJETFRYSkNISFpaWFpMQ0NMWUxOWlNIWkpaWkxOTlJMV0hZUVNOSkhYWU5UVFRLWUpQWUNISFlFR0tDVFRXTEdRUkxHR1RHVFlHWUhQWUhZTFFZUUdDV1lRS1BZWVlUVFRUTEhZSExMVFlUVFNQTEtZWlhHWldHUFlEU1NaWkRRWFNLQ1FOTUpKWlpCWFlRTUpSVEZGQlRLSFpLQlhMSkpLRFhKVExCV0ZaUFBUS1FUWlRHUERHTlRQSllGQUxRTUtHWEJEQ0xaRkhaQ0xMTExBRFBNWERKSExDQ0xHWUhEWkZHWURER0NZWUZHWURYS1NTRUJESFlLREtES0hOQVhYWUJQQllZSFhaUUdBRkZRWUpYRE1MSkNTUVpMTFBDSEJTWEdKWU5EWUJZUVNQWldKTFpLU0REVEFDVEJYWkRZWllQSlpRU0pOS0tUS05KREpHWVlQR1RMRllRS0FTRE5UQ1lIQkxXRFpIQkJZRFdKUllHS1pZSEVZWUZKTVNEVFlGWkpKSEdDWFBMWEhMRFdYWEpLWVRDWUtTU1NNVFdDVFRRWkxQQlNaRFpXWlhHWkFHWUtUWVdYTEhMU1BCQ0xMT1FNTVpTU0xDTUJKQ1NaWktZRENaSkdRUURTTUNZVFpRUUxXWlFaWFNTRlBUVEZRTUREWkRTSERURFdGSFREWVpKWVFKUUtZUEJESllZWFRMSkhEUlFYWFhIQVlESFJKTEtMWVRXSExMUkxMUkNYWUxCV1NSU1paU1lNS1paSEhLWUhYS1NNRFNZRFlDSlBCWkJTUUxGQ1hYWE5YS1hXWVdTRFpZUU9HR1FNTVlIQ0RaVFRGSllZQkdTVFRUWUJZS0pESEtZWEJFTEhUWVBKUU5GWEZEWUtaSFFLWkJZSlRaQlhIRkRYS0RBU1dUQVdBSkxEWUpTRkhCTEROTlROUUpUSk5DSFhGSlNSRldIWkZNRFJZSllKV1pQREpLWllKWU1QQ1laTllOWEZCWVRGWUZXWUdEQk5aWlpETllUWFpFTU1RQlNRRUhYRlpNQk1GTFpaU1JYWU1KR1NYV1pKU1BSWURKU0pHWEhKSkdMSkpZTlpaSlhIR1hLWU1MUFlZWUNYWVRXUVpTV0hXTFlSSkxQWFNMU1hNRlNXV0tMQ1ROWE5ZTlBTSlNaSERaRVBUWE1ZWVdYWVlTWVdMWEpRWlFYWkRDTEVFRUxNQ1BKUENMV0JYU1FIRldXVEZGSlROUUpISlFEWEhXTEJZWk5GSkxBTEtZWUpMRFhISFlDU1RZWVdOUkpZWFlXVFJNRFJRSFdRQ01GSkRZWk1ITVlZWEpXTVlaUVpYVExNUlNQV1dDSEFRQlhZR1pZUFhZWVJSQ0xNUFlNR0tTSlNaWVNSTVlKU05YVFBMTkJBUFBZUFlMWFlZWktZTkxEWllKWkNaTk5MTVpISEFSUU1QR1dRVFpNWFhNTExIR0RaWFlIWEtZWFlDSk1GRllZSEpGU0JTU1FMWFhORFlDQU5OTVRDSkNZUFJSTllUWVFOWVlNQk1TWE5ETFlMWVNMSlJMWFlTWFFNTExZWkxaSkpKS1laWkNTRkJaWFhNU1RCSkdOWFlaSExYTk1DV1NDWVpZRlpMWEJSTk5OWUxCTlJUR1pRWVNBVFNXUllIWUpaTVpESFpHWkRXWUJTU0NTS1hTWUhZVFhYR0NRR1haWlNIWVhKU0NSSE1LS0JYQ1pKWUpZTUtRSFpKRk5CSE1RSFlTTkpOWllCS05RTUNMR1FIV0xaTlpTV1hLSExKSFlZQlFMQkZDRFNYRExEU1BGWlBTS0pZWldaWFpERFhKU01NRUdKU0NTU01HQ0xYWEtZWVlMTllQV1dXR1lES1pKR0dHWkdHU1lDS05KV05KUENYQkpKVFFUSldEU1NQSlhaWE5aWFVNRUxQWEZTWFRMTFhDTEpYSkpMSlpYQ1RQU1dYTFlESExZUVJXSFNZQ1NRWVlCWUFZV0pKSlFGV1FDUVFDSlFHWEFMREJaWllKR0tHWFBMVFpZRlhKTFRQQURLWVFIUE1BVExDUERDS0JNVFhZQkhLTEVOWERMRUVHUURZTVNBV0haTUxKVFdZR1hMWVFaTEpFRVlZQlFRRkZOTFlYUkRTQ1RHSkdYWVlOS0xMWVFLQ0NUTEhKTFFNS0taR0NZWUdMTExKRFpHWURIWldYUFlTSkJaS0RaR1laWkhZV1lGUVlUWVpTWllFWlpMWU1ISkpIVFNNUVdZWkxLWVlXWkNTUktRWVRMVERYV0NUWUpLTFdTUVpXQkRDUVlOQ0pTUlNaSkxLQ0RDRFRMWlpaQUNRUVpaRERYWVBMWFpCUUpZTFpMTExRRERaUUpZSllKWllYTllZWU5ZSlhLWERBWldZUkRMSllZWVJKTFhMTERZWEpDWVdZV05RQ0NMREROWVlZTllDS0NaSFhYQ0NMR1pRSkdLV1BQQ1FRSllTQlpaWFlKU1FQWEpQWkJTQkRTRk5TRlBaWEhEV1pURFdQUFRGTFpaQlpETVlZUFFKUlNEWlNRWlNRWEJER0NQWlNXRFdDU1FaR01ESFpYTVdXRllCUERHUEhUTUpUSFpTTU1CR1pNQlpKQ0ZaV0ZaQkJaTVFDRk1CRE1DSlhMR1BOSkJCWEdZSFlZSkdQVFpHWk1RQlFUQ0dZWEpYTFdaS1lEUERZTUdDRlRQRlhZWlRaWERaWFRHS01UWUJCQ0xCSkFTS1lUU1NRWVlNU1pYRkpFV0xYTExTWkJRSkpKQUtMWUxYTFlDQ1RTWE1DV0ZLS0tCU1hMTExMSllYVFlMVEpZWVREUEpITkhOTktCWVFORlFZWVpCWVlFU1NFU1NHRFlIRkhXVENKQlNEWlpURkRNWEhDTkpaWU1RV1NSWUpEWkpRUERRQkJTVEpHR0ZCS0pCWFRHUUhOR1dKWEpHRExMVEhaSEhZWVlZWVlTWFdUWVlZQ0NCREJQWVBaWUNDWllKUFpZV0NCRExGV1pDV0pEWFhIWUhMSFdaWlhKVENaTENEUFhVSkNaWlpMWVhKSlRYUEhGWFdQWVdYWlBURFpaQkRaQ1lISkhNTFhCUVhTQllMUkRUR0pSUkNUVFRIWVRDWldNWEZZVFdXWkNXSldYSllXQ1NLWUJaU0NDVFpRTkhYTldYWEtIS0ZIVFNXT0NDSllCQ01QWlpZS0JOTlpQQlpISFpETFNZRERZVFlGSlBYWU5HRlhCWVFYQ0JIWENQU1hUWVpETUtZU05YU1hMSEtNWlhMWUhESEtXSFhYU1NLUVlISENKWVhHTEhaWENTTkhFS0RUR1pYUVlQS0RIRVhUWUtDTllNWVlZUEtRWVlZS1haTFRISlFUQllRSFhCTVlIU1FDS1dXWUxMSENZWUxOTkVRWFFXTUNGQkRDQ01MSkdHWERRS1RMWEtHTlFDREdaSldZSkpMWUhIUVRUVE5XQ0hNWENYV0hXU1pKWURKQ0NEQlFDREdETllYWlRIQ1FSWENCSFpUUUNCWFdHUVdZWUJYSE1CWU1ZUVRZRVhNUUtZQVFZUkdZWlNMRllLS1FIWVNTUVlTSEpHSkNOWEtaWUNYU0JYWVhIWVlMU1RZQ1hRVEhZU01HU0NQTU1HQ0NDQ0NNVFpUQVNNR1FaSkhLTE9TUVlMU1dUTVhTWVFLRFpMSlFRWVBMU1lDWlRDUVFQQkJRSlpDTFBLSFFaWVlYWERURERUU0pDWEZGTExDSFFYTUpMV0NKQ1hUU1BZQ1hORFRKU0hKV1hEUVFKU0tYWUFNWUxTSkhNTEFMWUtYQ1lZRE1OTURRTVhNQ1pOTkNZQlpLS1lGTE1DSENNTEhYUkNKSkhTWUxOTVRKWkdaR1lXSlhTUlhDV0pHSlFIUVpEUUpEQ0pKWktKS0dEWlFHSkpZSllMWFpYWENEUUhISEVZVE1ITEZTQkRKU1lZU0hGWVNUQ1pRTFBCRFJGUlpUWllLWVdIU1pZUUtXRFFaUktNU1lOQkNSWFFCSllGQVpQWlpFRFpDSllXQkNKV0hZSkJRU1pZV1JZU1pQVERLWlBGUEJOWlRLTFFZSEJCWlBOUFBUWVpaWUJRTllEQ1BKTU1DWUNRTUNZRlpaRENNTkxGUEJQTE5HUUpUQlRUTkpaUFpCQlpOSktMSlFZTE5CWlFIS1NKWk5HR1FTWlpLWVhTSFBaU05CQ0daS0REWlFBTlpISktEUlRMWkxTV0pMSlpMWVdUSk5ESlpKSFhZQVlOQ0JHVFpDU1NRTU5KUEpZVFlTV1haRktXSlFUS0hUWlBMQkhTTkpaU1laQldaWlpaTFNZTFNCSkhEV1dRUFNMTU1GQkpEV0FRWVpUQ0pUQk5OV1pYUVhDRFNMUUdEU0RQRFpISlRRUVBTV0xZWUpaTEdZWFlaTENUQ0JKVEtUWUNaSlRRS0JTSkxHTUdaRE1DU0dQWU5KWllRWVlLTlhSUFdTWlhNVE5DU1paWVhZQllIWVpBWFlXUUNKVExMQ0tKSlRKSEdEWERYWVFZWlpCWVdETFdRQ0dMWkdKR1FSUVpDWlNTQkNSUENTS1lEWk5YSlNRR1hTU0pNWUROU1RaVFBCRExUS1pXWFFXUVRaRVhOUUNaR1dFWktTU0JZQlJUU1NTTENDR0JQU1pRU1pMQ0NHTExMWlhIWlFUSENaTVFHWVpRWk5NQ09DU1pKTU1aU1FQSllHUUxKWUpQUExEWFJHWllYQ0NTWEhTSEdUWk5MWldaS0pDWFRDRkNKWExCTVFCQ1paV1BRRE5IWExKQ1RIWVpMR1lMTkxTWlpQQ1hEU0NRUUhKUUtTWFpQQkFKWUVNU01KVFpEWExDSllSWVlOV0pCTkdaWlRNSlhMVEJTTFlSWlBZTFNTQ05YUEhMTEhZTExRUVpRTFhZTVJTWUNYWkxNTUNaTFRaU0RXVEpKTExOWkdHUVhQRlNLWUdZR0hCRlpQREtNV0dIQ1hNU0dEWEpNQ0paRFlDQUJYSkRMTkJDRFFZR1NLWURRVFhESkpZWE1TWlFBWkRaRlNMUVhZSlNKWllMQlRYWFdYUVFaQkpaVUZCQkxZTFdEU0xKSFhKWVpKV1RESkNaRlFaUVpaRFpTWFpaUUxaQ0RaRkpIWVNQWU1QUVpNTFBQTEZGWEpKTlpaWUxTSkVZUVpGUEZaS1NZV0pKSkhSREpaWlhUWFhHTEdIWURYQ1NLWVNXTU1aQ1dZQkFaQkpLU0hGSEpDWE1IRlFIWVhYWVpGVFNKWVpGWFlYUFpMQ0hNWk1CWEhaWlNYWUZZTU5DV0RBQkFaTFhLVENTSEhYS1hKSlpKU1RIWUdYU1hZWUhISEpXWEtaWFNTQlpaV0hISENXVFpaWlBKWFNOWFFRSkdaWVpZV0xMQ1dYWkZYWFlYWUhYTUtZWVNXU1FNTkxOQVlDWVNQTUpLSFdDUUhZTEFKSk1aWEhNTUNOWkhCSFhDTFhUSlBMVFhZSkhEWVlMVFRYRlNaSFlYWFNKQkpZQVlSU01YWVBMQ0tEVVlITFhSTE5MTFNUWVpZWVFZR1lISFNDQ1NNWkNUWlFYS1lRRlBZWVJQRkZMS1FVTlRTWkxMWk1XV1RDUVFZWldUTExNTE1QV01CWlNTVFpSQlBERFRMUUpKQlhaQ1NSWlFRWUdXQ1NYRldaTFhDQ1JTWkRaTUNZR0dEWlFTR1RKU1dMSk1ZTU1aWUhGQkpER1lYQ0NQU0hYTlpDU0JTSllKR0pNUFBXQUZGWUZOWEhZWlhaWUxSRU1aR1pDWVpTU1pETExKQ1NRRk5YWktQVFhaR1hKSkdGTVlZWVNOQlRZTEJOTEhQRlpEQ1lGQk1HUVJSU1NTWlhZU0dUWlJOWURaWkNER1BKQUZKRlpLTlpCTENaU1pQU0dDWUNKU1pMTUxSU1pCWlpMRExTTExZU1hTUVpRTFlYWkxTS0tCUlhCUkJaQ1lDWFpaWkVFWUZHS0xaTFlZSEdaU0daTEZKSEdUR1dLUkFBSllaS1pRVFNTSEpKWERDWVpVWUpMWllSWkRRUUhHSlpYU1NaQllLSlBCRlJUSlhMTEZRV0pIWUxRVFlNQkxQWkRYVFpZR0JESFpaUkJHWEhXTkpUSlhMS1NDRlNNV0xTRFFZU0pUWEtaU0NGV0pMQlhGVFpMTEpaTExRQkxTUU1RUUNHQ1pGUEJQSFpDWkpMUFlZR0dEVEdXRENGQ1pRWVlZUVlTU0NMWFpTS0xaWlpHRkZDUU5XR0xIUVlaSkpDWkxRWlpZSlBKWlpCUERDQ01ISkdYRFFER0RMWlFNRkdQU1lUU0RZRldXREpaSllTWFlZQ1pDWUhaV1BCWUtYUllMWUJIS0pLU0ZYVFpKTU1DS0hMTFROWVlNU1lYWVpQWUpRWUNTWUNXTVRKSktRWVJITExRWFBTR1RMWVlDTEpTQ1BYSllaRk5NTFJHSkpUWVpCWFlaTVNKWUpISEZaUU1TWVhSU1pDV1RMUlRRWlNTVEtYR1FLR1NQVEdDWk5KU0pDUUNYSE1YR0daVFFZREpLWkRMQlpTWEpMSFlRR0dHVEhRU1pQWUhKSEhHWVlHS0dHQ1dKWlpZTENaTFhRU0ZUR1pTTExMTUxKU0tDVEJMTFpaU1pNTU5ZVFBaU1hRSEpDSllRWFlaWFpRWkNQU0hLWlpZU1hDREZHTVdRUkxMUVhSRlpUTFlTVENUTUpDWEpKWEhKTlhUTlJaVFpGUVlIUUdMTEdDWFNaU0pESkxKQ1lEU0pUTE5ZWEhTWlhDR0paWVFQWUxGSERKU0JQQ0NaSEpKSlFaSlFEWUJTU0xMQ01ZVFRNUVRCSEpRTk5ZR0tZUlFZUU1aR0NKS1BEQ0dNWVpIUUxMU0xMQ0xNSE9MWkdEWVlGWlNMSkNRWkxZTFpRSkVTSE5ZTExKWEdKWExZU1lZWVhOQlpMSlNTWkNRUUNKWUxMWkxUSllMTFpMTEJOWUxHUUNIWFlZWE9YQ1hRS1lKWFhYWUtMWFNYWFlRWENZS1FYUUNTR1lYWFlRWFlHWVRRT0hYSFhQWVhYWFVMQ1lFWUNIWlpDQldRQkJXSlFaU0NTWlNTTFpZTEtERVNKWldNWU1DWVRTRFNYWFNDSlBRUVNRWUxZWVpZQ01ESkRaWVdDQlRKU1lESktDWURESkxCREpKU09EWllTWVhRUVlYREhIR1FRWVFIRFlYV0dNTU1BSkRZQkJCUFBCQ01VVVBMSlpTTVRYRVJYSk1IUU5VVFBKRENCU1NNU1NTVEtKVFNTTU1UUkNQTFpTWk1MUURTRE1KTVFQTlFEWENGWU5CRlNEUVhZWEhZQVlLUVlERExRWVlZU1NaQllEU0xOVEZRVFpRUFpNQ0hESENaQ1dGRFhUTVlRU1BIUVlZWFNSR0pDV1RKVFpaUU1HV0pKVEpIVFFKQkJIV1pQWFhIWVFGWFhRWVdZWUhZU0NEWURISFFNTk1UTVdDUEJTWlBQWlpHTE1aRk9MTENGV0hNTVNKWlRUREhaWllGRllUWlpHWllTS1lKWFFZSlpRQkhNQlpaTFlHSEdGTVNIUFpGWlNOQ0xQQlFTTkpYWlNMWFhGUE1UWUpZR0JYTExETFhQWkpZWkpZSEhaQ1lXSEpZTFNKRVhGU1paWVdYS1pKTFVZRFRNTFlNUUpQV1hZSFhTS1RRSkVaUlBYWFpISE1IV1FQV1FMWUpKUUpKWlNaQ1BISkxDSEhOWEpMUVdaSkhCTVpZWEJESEhZUFpMSExITEdGV0xDSFlZVExISlhDSk1TQ1BYU1RLUE5IUVhTUlRZWFhURVNZSkNUTFNTTFNURExMTFdXWUhESFJKWlNGR1hUU1lDWllOWUhUREhXSlNMSFRaRFFESlpYWFFIR1lMVFpQSENTUUZDTE5KVENMWlBGU1RQRFlOWUxHTUpMTFlDUUhZU1NIQ0hZTEhRWVFUTVpZUEJZV1JGUVlLUVNZU0xaRFFKTVBYWVlTU1JIWkpOWVdUUURGWkJXV1RXV1JYQ1dIR1lIWE1LTVlZWVFNU01aSE5HQ0VQTUxRUU1UQ1dDVE1NUFhKUEpKSEZYWVlaU1haSFRZQk1TVFNZSlRUUVFRWVlMSFlOUFlRWkxDWVpIWldTTVlMS0ZKWExXR1hZUEpZVFlTWVhZTVpDS1RUV0xLU01aU1lMTVBXTFpXWFdRWlNTQVFTWVhZUkhTU05UU1JBUFhDUFdDTUdEWEhYWkRaWUZKSEdaVFRTQkpIR1laU1pZU01ZQ0xMTFhCVFlYSEJCWkpLU1NETUFMWEhZQ0ZZR01RWVBKWUNRWEpMTExKR1NMWkdRTFlDSkNDWk9UWVhNVE1UVExMV1RHUFhZTVpNS0xQU1paWlhIS1FZU1hDVFlKWllIWFNIWVhaS1hMWldQU1FQWUhKV1BKUFdYUVFZTFhTREhNUlNMWlpZWldUVENZWFlTWlpTSEJTQ0NTVFBMV1NTQ0pDSE5MQ0dDSFNTUEhZTEhGSEhYSlNYWUxMTllMU1pESFpYWUxTWExXWllLQ0xEWUFYWkNNRERZU1BKVFFKWkxOV1FQU1NTV0NUU1RTWkxCTE5YU01OWVlNSlFCUUhSWldUWVlEQ0hRTFhLUFpXQkdRWUJLRkNNWldQWkxMWVlMU1pZRFdIWFBTQkNNTEpCU0NHQkhYTFFIWVJMSlhZU1dYV1haU0xERkhMU0xZTkpMWllGTFlKWUNEUkpMRlNZWkZTTExDUVlRRkdKWUhZWFpMWUxNU1RESkNZSEJaTExOV0xYWFlHWVlIU01HREhYWEhITFpaSlpYQ1paWkNZUVpGTkdXUFlMQ1BLUFlZUE1DTFFLREdYWkdHV1FCRFhaWktaRkJYWExaWEpUUEpQVFRCWVRTWlpEV1NMQ0haSFNMVFlYSFFMSFlYWFhZWVpZU1dUWFpLSExYWlhaUFlIR0NIS0NGU1lIVVRKUkxYRkpYUFRaVFdIUExZWEZDUkhYU0hYS1lYWFlIWlFEWFFXVUxIWUhNSlRCRkxLSFRYQ1dISkZXSkNGUFFSWVFYQ1lZWVFZR1JQWVdTR1NVTkdXQ0hLWkRYWUZMWFhISkpCWVpXVFNYWE5DWUpKWU1TV1pKUVJNSFhaV0ZRU1lMWkpaR0JIWU5TTEJHVFRDU1lCWVhYV1hZSFhZWVhOU1FZWE1RWVdSR1lRTFhCQlpMSlNZTFBTWVRKWllIWVpBV0xST1JKTUtTQ1pKWFhYWVhDSERZWFJZWFhKRFRTUUZYTFlMVFNGRllYTE1UWUpNSlVZWVlYTFRaQ1NYUVpRSFpYTFlZWFpIRE5CUlhYWEpDVFlITEJSTE1CUkxMQVhLWUxMTEpMWVhYTFlDUllMQ0pUR0pDTVRMWkxMQ1laWlBaUENZQVdISkpGWUJEWVlaU01QQ0taRFFZUVBCUENKUERDWVpNRFBCQ1lZRFlDTk5QTE1UTUxSTUZNTUdXWVpCU0pHWUdTTVpRUVFaVFhNS1FXR1hMTFBKR1pCUUNESkpKRlBLSktDWEJMSk1TV01EVFFKWExETFBQQlhDV1JDUUZCRlFKQ1pBSFpHTVlLUEhZWUhaWUtOREtaTUJQSllYUFhZSExGUE5ZWUdYSkRCS1hOWEhKTVpKWFNUUlNUTERYU0taWVNZQlpYSkxYWVNMQlpZU0xIWEpQRlhQUU5CWUxMSlFLWUdaTUNZWlpZTUNDU0xDTEhaRldGV1lYWk1XU1hUWU5YSkhQWVlNQ1lTUE1IWVNNWURZU0hRWVpDSE1KSk1aQ0FBR0NGSkJCSFBMWVpZTFhYU0RKR1hESEtYWFRYWE5CSFJNTFlKU0xUWE1SSE5MWFFKWFlaTExZU1dRR0RMQkpIRENHSllRWUNNSFdGTUpZQk1CWUpZSldZTURQV0hYUUxEWUdQREZYWEJDR0pTUENLUlNTWVpKTVNMQlpaSkZMSkpKTEdYWkdZWFlYTFNaUVlYQkVYWVhIR0NYQlBMRFlIV0VUVFdXQ0pNQlRYQ0hYWVFYTExYRkxZWExMSkxTU0ZXRFBaU01ZSkNMTVdZVENaUENIUUVLQ1FCV0xDUVlEUExRUFBRWlFGSlFESkhZTU1DWFRYRFJNSldSSFhDSlpZTFFYRFlZTkhZWUhSU0xTUlNZV1daSllNVExUTExHVFFDSlpZQUJUQ0taQ0pZQ0NRTEpaUVhBTE1aWUhZV0xXRFhaWFFETExRU0hHUEpGSkxKSEpBQkNRWkRKR1RLSFNTVENZSkxQU1daTFhaWFJXR0xETFpSTFpYVEdTTExMTFpMWVhYV0dEWllHQkRQSFpQQlJMV1NYUUJQRkRXT0ZNV0hMWVBDQkpDQ0xETUJaUEJaWkxDWVFYTERPTVpCTFpXUERXWVlHRFNUVEhDU1FTQ0NSU1NTWVNMRllCRk5UWUpTWkRGTkRQREhEWlpNQkJMU0xDTVlGRkdUSkpRV0ZUTVRQSldGTkxCWkNNTUpUR0JEWkxRTFBZRkhZWU1KWUxTRENIRFpKV0pDQ1RMSkNMRFRMSkpDUEREU1FEU1NaWUJOREJKTEdHSlpYU1hOTFlDWUJKWFFZQ0JZTFpDRlpQUEdLQ1haRFpGWlRKSkZKU0pYWkJOWllKUVRUWUpZSFRZQ1pIWU1ESlhUVE1QWFNQTFpDRFdTTFNIWFlQWkdURk1MQ0pUWUNCUE1HREtXWUNZWkNEU1paWUhGTFlDVFlHV0hLSllZTFNKQ1hHWVdKQ0JMTENTTkREQlRaQlNDTFlaQ1paU1NRRExMTVFZWUhGU0xRTExYRlRZSEFCWEdXTllXWVlQTExTRExETExCSkNZWEpaTUxITEpEWFlZUVlURExMTEJVR0JGREZCQlFKWlpNRFBKSEdDTEdNSkpQR0FFSEhCV0NRWEFYSEhIWkNIWFlQSEpBWEhMUEhKUEdQWkpRQ1FaR0pKWlpVWkRNUVlZQlpaUEhZSFlCV0hBWllKSFlLRkdEUEZRU0RMWk1MSlhLWEdBTFhaREFHTE1ER1hNV1pRWVhYRFhYUEZETU1TU1lNUEZNRE1NS1hLU1laWVNIRFpLWFNZU01NWlpaTVNZRE5aWkNaWEZQTFNUTVpETk1YQ0tKTVpUWVlNWk1aWk1TWEhIRENaSkVNWFhLTEpTVExXTFNRTFlKWkxMWkpTU0RQUE1ITkxaSkNaWUhNWFhIR1pDSk1ESFhUS0dSTVhGV01DR01XS0RUS1NYUU1NTUZaWllES01TQ0xDTVBDR01IU1BYUVBaRFNTTENYS1lYVFdMV0pZQUhaSkdaUU1DU05YWVlNTVBNTEtKWE1ITE1MUU1YQ1RLWk1KUVlTWkpTWVNaSFNZSlpKQ0RBSlpZQlNEUUpaR1daUVFYRktETVNESkxGV0VIS1pRS0pQRVlQWllTWkNEV1lKRkZNWlpZTFRURFpaRUZNWkxCTlBQTFBMUEVQU1pBTExUWUxLQ0tRWktHRU5RTFdBR1lYWURQWExIU1hRUVdRQ1FYUUNMSFlYWE1MWUNDV0xZTVFZU0tHQ0hMQ0pOU1pLUFlaS0NRWlFMSlBETURaSExBU1hMQllEV1FMV0ROQlFDUllERFpUSllCS0JXU1pEWERUTlBKRFRDVFFERlhRUU1HTlhFQ0xUVEJLUFdTTENUWVFMUFdZWlpLTFBZR1pDUVFQTExLQ0NZTFBRTVpDWlFDTEpTTFFaREpYTERESFBaUURMSkpYWlFEWFlaUUtaTEpDWVFEWUpQUFlQUVlLSllSTVBDQllNQ1hLTExaTExGUVBZTExMTUJTR0xDWVNTTFJTWVNRVE1YWVhaUVpGRFpVWVNZWlRGRk1aWlNNWlFIWlNTQ0NNTFlYV1RQWkdYWkpHWkdTSlNHS0RESFRRR0daTExCSkRaTENCQ0hZWFlaSFpGWVdYWVpZTVNEQlpaWUpHVFNNVEZYUVlYUVNUREdTTE5YRExSWVpaTFJZWUxYUUhUWFNSVFpOR1pYQk5RUVpGTVlLTVpKQlpZTUtCUE5MWVpQQkxNQ05RWVpaWlNKWkhKQ1RaS0hZWlpKUkRZWkhOUFhHTEZaVExLR0pUQ1RTU1lMTEdaUlpCQlFaWktMUEtMQ1pZU1NVWVhCSkZQTkpaWlhDRFdYWllKWFpaREpKS0dHUlNSSktNU01aSkxTSllXUVNLWUhRSlNYUEpaWlpMU05TSFJOWVBaVFdDSEtMUFNSWkxaWFlKUVhRS1lTSllDWlRMUVpZQkJZQldaUFFEV1dZWkNZVEpDSlhDS0NXREtLWlhTR0tEWlhXV1lZSlFZWVRDWVRETExYV0tDWktLTENDTFpDUVFEWkxRTENTRlFDSFFIU0ZTTVFaWkxOQkpKWkJTSkhUU1pEWVNKUUpQRExaQ0RDV0pLSlpaTFBZQ0dNWldESkpCU0pRWlNZWllISFhKUEJKWURTU1hEWk5DR0xRTUJUU0ZTQlBEWkRMWk5GR0ZKR0ZTTVBYSlFMTUJMR1FDWVlYQlFLREpKUVlSRktaVEpESENaS0xCU0RaQ0ZKVFBMTEpHWEhZWFpDU1NaWlhTVEpZR0tHQ0tHWU9RWEpQTFpQQlBHVEdZSlpHSFpRWlpMQkpMU1FGWkdLUVFKWkdZQ1pCWlFUTERYUkpYQlNYWFBaWEhZWllDTFdEWEpKSFhNRkRaUEZaSFFIUU1RR0tTTFlIVFlDR0ZSWkdOUVhDTFBETEJaQ1NDWlFMTEpCTEhCWkNZUFpaUFBEWU1aWlNHWUhDS0NQWkpHU0xKTE5TQ0RTTERMWEJNU1RMRERGSk1LREpESFpMWlhMU1pRUFFQR0pMTFlCRFNaR1FMQlpMU0xLWVlIWlRUTlRKWVFUWlpQU1pRWlRMTEpUWVlMTFFMTFFZWlFMQkRaTFNMWVlaWU1ERlNaU05ITFhaTkNaUVpQQldTS1JGQlNZWk1USEJMR0pQTUNaWkxTVExYU0hUQ1NZWkxaQkxGRVFITFhGTENKTFlMSlFDQlpMWkpISFNTVEJSTUhYWkhKWkNMWEZOQkdYR1RRSkNaVE1TRlpLSk1TU05YTEpLQkhTSlhOVE5MWkROVExNU0pYR1pKWUpDWlhZSllKV1JXV1FOWlRORkpTWlBaU0haSkZZUkRKU0ZTWkpaQkpGWlFaWkhaTFhGWVNCWlFMWlNHWUZUWkRDU1pYWkpCUU1TWktKUkhZSlpDS01KS0hDSEdUWEtYUUdMWFBYRlhUUlRZTFhKWEhEVFNKWEhKWkpYWldaTENRU0JUWFdYR1hUWFhIWEZUU0RLRkpIWllKRkpYUlpTRExMTFRRU1FRWlFXWlhTWVFUV0dXQlpDR1pMTFlaQkNMTVFRVFpIWlhaWExKRlJNWVpGTFhZU1FYWEpLWFJNUURaRE1NWVlCU1FCSEdaTVdGV1hHTVhMWlBZWVRHWllDQ0RYWVpYWVdHU1lKWVpOQkhQWkpTUVNZWFNYUlRGWVpHUkhaVFhTWlpUSENCRkNMU1lYWkxaUU1aTE1QTE1YWkpYU0ZMQllaTVlRSFhKU1hSWFNRWlpaU1NMWUZSQ1pKUkNSWEhIWlhRWURZSFhTSkpIWkNYWkJUWU5TWVNYSkJRTFBYWlFQWU1MWFpLWVhMWENKTENZU1hYWlpMWERMTExKSllIWlhHWUpXS0pSV1lIQ1BTR05SWkxGWldGWlpOU1hHWEZMWlNYWlpaQkZDU1lKREJSSktSREhIR1hKTEpKVEdYSlhYU1RKVEpYTFlYUUZDU0dTV01TQkNUTFFaWldMWlpLWEpNTFRNSllIU0REQlhHWkhETEJNWUpGUlpGU0dDTFlKQlBNTFlTTVNYTFNaSlFRSEpaRlhHRlFGUUJQWFpHWVlRWEdaVENRV1lMVExHV1NHV0hSTEZTRkdaSk1HTUdCR1RKRlNZWlpHWllaQUZMU1NQTUxQRkxDV0JKWkNMSkpNWkxQSkpMWU1RRE1ZWVlGQkdZR1laTUxZWkRYUVlYUlFRUUhTWVlZUVhZTEpUWVhGU0ZTTExHTlFDWUhZQ1dGSENDQ0ZYUFlMWVBMTFpZWFhYWFhLUUhIWFNISlpDRlpTQ1pKWENQWldISEhISEFQWUxRQUxQUUFGWUhYRFlMVUtNWlFHR0dEREVTUk5OWkxUWkdDSFlQUFlTUUpKSENMTEpUT0xOSlBaTEpMSFlNSEVZRFlEU1FZQ0RESEdaVU5EWkNMWllaTExaTlROWVpHU0xIU0xQSkpCREdXWFBDRFVUSkNLTEtDTFdLTExDQVNTVEtaWkROUU5UVExZWVpTU1lTU1paUllMSlFLQ1FESEhDUlhSWllER1JHQ1dDR1pRRkZGUFBKRlpZTkFLUkdZV1lRUFFYWEZLSlRTWlpYU1daRERGQkJYVEJHVFpLWk5QWlpQWlhaUEpTWkJNUUhLQ1lYWUxES0xKTllQS1lHSEdEWkpYWEVBSFBOWktaVFpDTVhDWE1NSlhOS1NaUU5NTkxXQldXWEpLWUhDUFNUTUNTUVRaSllYVFBDVFBEVE5OUEdMTExaU0pMU1BCTFBMUUhEVE5KTkxZWVJTWkZGSkZRV0RQSFpEV01SWkNDTE9EQVhOU1NOWVpSRVNUWUpXSllKREJDRlhOTVdUVEJZTFdTVFNaR1lCTEpQWEdMQk9DTEhQQ0JKTFRNWFpMSllMWlhDTFRQTkNMQ0tYVFBaSlNXQ1lYU0ZZU1pES05UTEJZSkNZSkxMU1RHUUNCWFJZWlhCWEtMWUxIWkxRWkxOWkNYV0paTEpaSk5DSkhYTU5aWkdKWlpYVFpKWFlDWVlDWFhKWVlYSkpYU1NTSlNUU1NUVFBQR1FUQ1NYV1pEQ1NZRlBURkJGSEZCQkxaSkNMWlpEQlhHQ1hMUVBYS0ZaRkxTWUxUVVdCTVFKSFNaQk1EREJDWVNDQ0xEWFlDRERRTFlKSldNUUxMQ1NHTEpKU1lGUFlZQ0NZTFRKQU5USkpQV1lDTU1HUVlZU1hEWFFNWkhTWlhQRlRXV1pRU1dRUkZLSkxaSlFRWUZCUlhKSEhGV0pKWllRQVpNWUZSSENZWUJZUVdMUEVYQ0NaU1RZUkxUVERNUUxZS01CQkdNWVlKUFJLWk5QQlNYWVhCSFlaREpETkdIUE1GU0dNV0ZaTUZRTU1CQ01aWkNKSkxDTlVYWVFMTUxSWUdRWkNZWFpMV0pHQ0pDR0dNQ0pORllaWkpIWUNQUlJDTVRaUVpYSEZRR1RKWENDSkVBUUNSSllIUExRTFNaREpSQkNRSFFEWVJIWUxZWEpTWU1IWllEV0xERlJZSEJQWURUU1NDTldCWEdMUFpNTFpaVFFTU0NQSk1YWFlDU0pZVFlDR0hZQ0pXWVJYWExGRU1XSk5NS0xMU1dUWEhZWVlOQ01NQ1dKRFFESlpHTExKV0pSS0hQWkdHRkxDQ1NDWk1DQkxUQkhCUUpYUURTUERKWlpHS0dMRlFZV0JaWVpKTFRTVERIUUhDVENCQ0hGTFFNUFdEU0hZWVRRV0NOWlpKVExCWU1CUERZWVlYU1FLWFdZWUZMWFhOQ1dDWFlQTUFFTFlLS0pNWlpaQlJYWVlRSkZMSlBGSEhIWVRaWlhTR1FRTUhTUEdEWlFXQldQSkhaSkRZU0NRV1pLVFhYU1FMWllZTVlTRFpHUlhDS0tVSkxXUFlTWVNDU1laTFJNTFFTWUxKWEJDWFRMV0RRWlBDWUNZS1BQUE5TWEZZWkpKUkNFTUhTWk1TWExYR0xSV0dDU1RMUlNYQlpHQlpHWlRDUExVSkxTTFlMWU1UWE1UWlBBTFpYUFhKVEpXVENZWVpMQkxYQlpMUU1ZTFhQR0hEU0xTU0RNWE1CRFpaU1hXSEFNTENaQ1BKTUNOSEpZU05TWUdDSFNLUU1aWlFETExLQUJMV0pYU0ZNT0NEWEpSUkxZUVpLSk1ZQllRTFlIRVRGSlpGUkZLU1JZWEZKVFdEU1hYU1lTUUpZU0xZWFdKSFNOTFhZWVhIQkhBV0hISlpYV01ZTEpDU1NMS1lEWlRYQlpTWUZEWEdYWkpLSFNYWFlCU1NYRFBZTlpXUlBUUVpDWkVOWUdDWFFGSllLSkJaTUxKQ01RUVhVT1hTTFlYWExZTExKRFpCVFlNSFBGU1RUUVFXTEhPS1lCTFpaQUxaWFFMSFpXUlJRSExTVE1ZUFlYSkpYTVFTSkZOQlhZWFlKWFhZUVlMVEhZTFFZRk1MS0xKVE1MTEhTWldLWkhMSk1MSExKS0xKU1RMUVhZTE1CSEhMTkxaWFFKSFhDRlhYTEhZSEpKR0JZWlpLQlhTQ1FESlFEU1VKWllZSFpISE1HU1hDU1lNWEZFQkNRV1dSQlBZWUpRVFlaQ1lRWVFRWllITVdGRkhHWkZSSkZDRFBYTlRRWVpQRFlLSEpMRlJaWFBQWFpEQkJHWlFTVExHREdZTENRTUxDSEhNRllXTFpZWEtKTFlQUUhTWVdNUVFHUVpNTFpKTlNRWEpRU1lKWUNCRUhTWEZTWlBYWldGTExCQ1lZSkRZVERUSFdaU0ZKTVFRWUpMTVFYWExMRFRUS0hIWUJGUFdUWVlTUVFXTlFXTEdXREVCWldDTVlHQ1VMS0pYVE1YTVlKU1hIWUJSV0ZZTVdGUlhZUU1YWVNaVFpaVEZZS01MREhRRFhXWVlOTENSWUpCTFBTWENYWVdMU1BSUkpXWEhRWVBIVFlETlhISE1NWVdZVFpDU1FNVFNTQ0NEQUxXWlRDUFFQWUpMTFFaWUpTV1hNWlpNTVlMTVhDTE1YQ1pNWE1aU1FUWlBQUVFCTFBHWFFaSEZMSkpIWVRKU1JYV1pYU0NDRExYVFlKRENRSlhTTFFZQ0xaWExaWlhNWFFSSk1IUkhaSkJITUZMSkxNTENMUU5MRFhaTExMUFlQU1lKWVNYQ1FRRENNUUpaWlhITlBOWFpNRUtNWEhZS1lRTFhTWFRYSllZSFdEQ1dEWkhRWVlCR1lCQ1lTQ0ZHUFNKTlpEWVpaSlpYUlpSUUpKWU1DQU5ZUkpUTERQUFlaQlNUSktYWFpZUEZEV0ZHWlpSUFlNVE5HWFpRQllYTkJVRk5RS1JKUVpNSkVHUlpHWUNMS1haRFNLS05TWEtDTEpTUEpZWVpMUVFKWUJaU1NRTExMS0pYVEJLVFlMQ0NEREJMU1BQRllMR1lEVFpKWVFHR0tRVFRGWlhCREtUWVlIWUJCRllUWVlCQ0xQRFlUR0RIUllSTkpTUFRDU05ZSlFIS0xMTFpTTFlEWFhXQkNKUVNQWEJQSlpKQ0pEWkZGWFhCUk1MQVpIQ1NORExCSkRTWkJMUFJaVFNXU0JYQkNMTFhYTFpESlpTSlBZTFlYWFlGVEZGRkJISkpYR0JZWEpQTU1NUFNTSlpKTVRMWVpKWFNXWFRZTEVEUVBKTVlHUVpKR0RKTFFKV0pRTExTSkdKR1lHTVNDTEpKWERUWUdKUUpRSkNKWkNKR0RaWlNYUUdTSkdHQ1hIUVhTTlFMWlpCWEhTR1pYQ1hZTEpYWVhZWURGUVFKSEpGWERIQ1RYSllSWFlTUVRKWFlFRllZU1NZWUpYTkNZWlhGWE1TWVNaWFlZU0NIU0hYWlpaR1paWkdGSkRMVFlMTlBaR1lKWVpZWVFaUEJYUUJEWlRaQ1pZWFhZSEhTUVhTSERIR1FISkhHWVdTWlRNWk1MSFlYR0VCVFlMWktRV1lUSlpSQ0xFS1lTVERCQ1lLUVFTQVlYQ0pYV1dHU0JISllaWURIQ1NKS1FDWFNXWEZMVFlOWVpQWkNDWkpRVFpXSlFEWlpaUVpMSkpYTFNCSFBZWFhQU1hTSEhFWlRYRlBUTFFZWlpYSFlUWE5DRlpZWUhYR05YTVlXWFRaU0pQVEhIR1lNWE1YUVpYVFNCQ1pZSllYWFRZWVpZUENRTE1NU1pNSlpaTExaWEdYWkFBSlpZWEpNWlhXRFhaU1haRFpYTEVZSkpaUUJIWldaWlpRVFpQU1haVERTWEpKSlpOWUFaUEhYWVlTUk5RRFRIWkhZWUtZSkhEWlhaTFNXQ0xZQlpZRUNXQ1lDUllMQ1hOSFpZRFpZRFlKREZSSkpIVFJTUVRYWVhKUkpIT0pZTlhFTFhTRlNGSlpHSFBaU1haU1pEWkNRWkJZWUtMU0dTSkhDWlNIREdRR1hZWkdYQ0hYWkpXWVFXR1lIS1NTRVFaWk5EWkZLV1lTU1RDTFpTVFNZTUNESEpYWFlXRVlYQ1pBWURNUFhNRFNYWUJTUU1KTVpKTVRaUUxQSllRWkNHUUhYSkhITFhYSExIRExESlFDTERXQlNYRlpaWVlTQ0hUWVRZWUJIRUNYSFlLR0pQWEhIWVpKRlhIV0hCRFpGWVpCQ0FQTlBHTllETVNYSE1NTU1BTVlOQllKVE1QWFlZTUNUSEpCWllGQ0dUWUhXUEhGVFdaWkVaU0JaRUdQRk1UU0tGVFlDTUhGTExIR1BaSlhaSkdaSllYWlNCQlFTQ1paTFpDQ1NUUEdYTUpTRlRDQ1pKWkRKWENZQlpMRkNKU1laRkdTWkxZQkNXWlpCWVpEWllQU1dZSlpYWkJEU1lVWExaWkJaRllHQ1pYQlpIWkZUUEJHWkdFSkJTVEdLRE1GSFlaWkpIWkxMWlpHSlFaTFNGREpTU0NCWkdQRExGWkZaU1pZWllaU1lHQ1hTTlhYQ0hDWlhUWlpMSkZaR1FTUVlYWkpRRENDWlRRQ0RYWkpZUUpRQ0hYWlRETEdTQ1haU1lRSlFUWldMUURRWlRRQ0hRUUpaWUVaWlpQQldLREpGQ0pQWlRZUFFZUVRUWU5MTUJES1RKWlBRWlFaWkZQWlNCTkpMR1lKRFhKRFpaS1pHUUtYRExQWkpUQ0pEUUJYREpRSlNUQ0tOWEJYWk1TTFlKQ1FNVEpRV1dDSlFOSk5MTExISkNXUVRCWlFZRFpDWlBaWkRaWUREQ1laWlpDQ0pUVEpGWkRQUlJUWlRKRENRVFFaRFRKTlBMWkJDTExDVFpTWEtKWlFaUFpMQlpSQlRKRENYRkNaREJDQ0pKTFRRUVBMRENHWkRCQlpKQ1FEQ0pXWU5MTFpZWkNDRFdMTFhXWkxYUlhOVFFRQ1pYS1FMU0dERlFURERHTFJMQUpKVEtVWU1LUUxMVFpZVERZWUNaR0pXWVhEWEZSU0tTVFFURU5RTVJLUVpISFFLRExEQVpGS1lQQkdHUFpSRUJaWllLWlpTUEVHSlhHWUtRWlpaU0xZU1lZWVpXRlFaWUxaWkxaSFdDSEtZUFFHTlBHQkxQTFJSSllYQ0NTWVlIU0ZaRllCWllZVEdaWFlMWENaV1hYWkpaQkxGRkxHU0tIWUpaRVlKSExQTExMTENaR1hEUlpFTFJIR0tMWlpZSFpMWVFTWlpKWlFMSlpGTE5CSEdXTENaQ0ZKWVNQWVhaTFpMWEdDQ1BaQkxMQ1lCQkJCVUJCQ0JQQ1JOTlpDWllSQkZTUkxEQ0dRWVlRWFlHTVFaV1RaWVRZSlhZRldURUhaWkpZV0xDQ05UWllKSlpERURQWkRaVFNZUUpIRFlNQkpOWUpaTFhUU1NUUEhOREpYWEJZWFFUWlFERFRKVERZWVRHV1NDU1pRRkxTSExHTEJDWlBIRExZWkpZQ0tXVFlUWUxCTllUU0RTWUNDVFlTWllZRUJIRVhIUURUV05ZR1lDTFhUU1pZU1RRTVlHWkFaQ0NTWlpEU0xaQ0xaUlFYWVlFTEpTQllNWFNYWlRFTUJCTExZWUxMWVREUVlTSFlNUlFXS0ZLQkZYTlhTQllDSFhCV0pZSFRRQlBCU0JXRFpZTEtHWlNLWUhYUVpKWEhYSlhHTkxKS1pMWVlDRFhMRllGR0hMSkdKWUJYUUxZQlhRUFFHWlRaUExOQ1lQWERKWVFZRFlNUkJFU0pZWUhLWFhTVE1YUkNaWllXWFlRWUJNQ0xMWVpIUVlaV1FYREJYQlpXWk1TTFBETVlTS0ZNWktMWkNZUVlDWkxRWEZaWllEUVpQWllHWUpZWk1aWERaRllGWVRUUVRaSEdTUENaTUxDQ1lUWlhKQ1lUSk1LU0xQWkhZU05aTExZVFBaQ1RaWkNLVFhESFhYVFFDWUZLU01RQ0NZWUFaSFRKUENZTFpMWUpCSlhUUE5ZTEpZWU5SWFNZTE1NTlhKU01ZQkNTWVNZTFpZTFhKSlFZTERaTFBRQkZaWkJMRk5EWFFLQ1pGWVdIR1FNUkRTWFlDWVRYTlFRSlpZWVBGWlhEWVpGUFJYRUpER1lRQlhSQ05GWVlRUEdIWUpEWVpYR1JIVEtZTE5XRFpOVFNNUEtMQlRIQlBZU1pCWlRKWlNaWkpUWVlYWlBIU1NaWkJaQ1pQVFFGWk1ZRkxZUFlCQkpRWFpNWFhESk1UU1lTS0tCSlpYSEpDS0xQU01LWUpaQ1hUTUxKWVhSWlpRU0xYWFFQWVpYTUtZWFhYSkNMSlBSTVlZR0FEWVNLUUxTTkRIWVpLUVhaWVpUQ0dIWlRMTUxXWllCV1NZQ1RCSEpISkZDV1pUWFdZVEtaTFhRU0hMWUpaSlhUTVBMUFlDR0xUQlpaVExaSkNZSkdEVENMS0xQTExRUEpNWlBBUFhZWkxLS1RLRFpDWlpCTlpEWURZUVpKWUpHTUNUWExUR1hTWkxNTEhCR0xLRldOV1pIRFhVSExGTUtZU0xHWERUV1dGUkpFSlpUWkhZRFhZS1NIV0ZaQ1FTSEtUTVFRSFRaSFlNSkRKU0tIWFpKWkJaWlhZTVBBR1FNU1RQWExTS0xaWU5XUlRTUUxTWkJQU1BTR1pXWUhUTEtTU1NXSFpaTFlZVE5YSkdNSlNaU1VGV05MU09aVFhHWExTQU1NTEJXTERTWllMQUtRQ1FDVE1ZQ0ZKQlNMWENMWlpDTFhYS1NCWlFDTEhKUFNRUExTWFhDS1NMTkhQU0ZRUVlUWFlKWkxRTERYWlFKWkRZWURKTlpQVFVaRFNLSkZTTEpIWUxaU1FaTEJUWFlER1RRRkRCWUFaWERaSFpKTkhIUUJZS05YSkpRQ1pNTExKWktTUExEWUNMQkJMWEtMRUxYSkxCUVlDWEpYR0NOTENRUExaTFpZSlRaTEpHWVpEWlBMVFFDU1hGRE1OWUNYR0JUSkRDWk5CR0JRWVFKV0dLRkhUTlBZUVpRR0JLUEJCWVpNVEpEWVRCTFNRTVBTWFRCTlBEWEtMRU1ZWUNKWU5aQ1RMRFlLWlpYRERYSFFTSERHTVpTSllDQ1RBWVJaTFBZTFRMS1hTTFpDR0dFWENMRlhMS0pSVExRSkFRWk5DTUJZREtLQ1hHTENaSlpYSkhQVERKSk1aUVlLUVNFQ1FaRFNISEFETUxaRk1NWkJHTlRKTk5MR0JZSkJSQlRNTEJZSkRaWExDSkxQTERMUENRREhMWFpMWUNCTENYWlpKQURKTE5aTU1TU1NNWUJIQlNRS0JIUlNYWEpNWFNEWk5aUFhMR0JSSFdHR0ZDWEdNU0tMTFRTSllZQ1FMVFNLWVdZWUhZV1hCWFFZV1BZV1lLUUxTUVBUTlRLSFFDV0RRS1RXUFhYSENQVEhUV1VNU1NZSEJXQ1JXWEhKTUtNWk5HV1RNTEtGR0hLSllMU1lZQ1hXSFlFQ0xRSEtRSFRUUUtIRlpMRFhRV1laWVlERVNCUEtZUlpQSkZZWVpKQ0VRRFpaRExBVFpCQkZKTExDWERMTUpTU1hFR1lHU0pRWENXQlhTU1pQRFlaQ1hETllYUFBaWURMWUpDWlBMVFhMU1hZWllSWENZWVlEWUxXV05aU0FISlNZUVlIR1lXV0FYVEpaREFYWVNSTFREUFNTWVlGTkVKRFhZWkhMWExMTFpRWlNKTllRWVFRWFlKR0haR1pDWUpDSFpMWUNEU0hXU0hKWllKWENMTE5YWkpKWVlYTkZYTVdGUFlMQ1lMTEFCV0RESFdEWEpNQ1haVFpQTUxRWkhTRkhaWU5aVExMRFlXTFNMWEhZTU1ZTE1CV1dLWVhZQURUWFlMTERKUFlCUFdVWEpNV01MTFNBRkRMTFlGTEJISEhCUVFMVFpKQ1FKTERKVEZGS01NTUJZVEhZR0RDUVJERFdSUUpYTkJZU05XWkRCWVlUQkpIUFlCWVRUSlhBQUhHUURRVE1ZU1RRWEtCVFpQS0pMWlJCRVFRU1NNSkpCREpPVEdUQlhQR0JLVExIUVhKSkpDVEhYUURXSkxXUkZXUUdXU0hDS1JZU1dHRlRHWUdCWFNEV0RXUkZIV1lUSkpYWFhKWVpZU0xQWVlZUEFZWEhZRFFLWFNIWFlYR1NLUUhZV0ZERERQUExDSkxRUUVFV1hLU1lZS0RZUExUSlRIS0pMVENZWUhISlRUUExUWlpDRExUSFFLWlhRWVNURUVZV1lZWllYWFlZU1RUSktMTFBaTUNZSFFHWFlIU1JNQlhQTExOUVlEUUhYU1hYV0dEUUJTSFlMTFBKSkpUSFlKS1lQUFRIWVlLVFlFWllFTk1EU0hMQ1JQUUZER0ZYWlBTRlRMSlhYSkJTV1lZU0tTRkxYTFBQTEJCQkxCU0ZYRllaQlNKU1NZTFBCQkZGRkZTU0NKRFNUWlNYWlJZWVNZRkZTWVpZWkJKVEJDVFNCU0RIUlRKSkJZVENYWUpFWUxYQ0JORUJKRFNZWFlLR1NKWkJYQllURlpXR0VOWUhIVEhaSEhYRldHQ1NUQkdYS0xTWFlXTVRNQllYSlNUWlNDRFlRUkNZVFdYWkZITVlNQ1hMWk5TREpUVFRYUllDRllKU0JTRFlFUlhKTEpYQkJERVlOSkdIWEdDS0dTQ1lNQkxYSk1TWk5TS0dYRkJOQlBUSEZKQUFGWFlYRlBYTVlQUURUWkNYWlpQWFJTWVdaRExZQkJLVFlRUFFKUFpZUFpKWk5KUFpKTFpaRllTQlRUU0xNUFRaUlREWFFTSkVIQlpZTFpESExKU1FNTEhUWFRKRUNYU0xaWlNQS1RMWktRUVlGU1lHWVdQQ1BRRkhRSFlUUVhaS1JTR1RUU1FDWkxQVFhDRFlZWlhTUVpTTFhMWk1ZQ1BDUUJaWVhIQlNYTFpETFRDRFhUWUxaSllZWlBaWVpMVFhKU0pYSExQTVlUWENRUkJMWlNTRkpaWlROSllUWE1ZSkhMSFBQTENZWFFKUVFLWlpTQ1BaS1NXQUxRU0JMQ0NaSlNYR1dXV1lHWUtUSkJCWlRES0hYSEtHVEdQQktRWVNMUFhQSkNLQk1MTFhEWlNUQktMR0dRS1FMU0JLS1RGWFJNREtCRlRQWkZSVEJCUkZFUlFHWFlKUFpTU1RMQlpUUFNaUVpTSkRITEpRTFpCUE1TTU1TWExRUU5IS05CTFJERE5YWERIRERKQ1lZR1lMWEdaTFhTWUdNUVFHS0hCUE1YWVhMWVRRV0xXR0NQQk1RWENZWllEUkpCSFRESllIUVNIVE1KU0JZUExXSExaRkZOWVBNSFhYSFBMVEJRUEZCSldRREJZR1BOWlRQRlpKR1NERFRRU0haRUFXWlpZTExUWVlCV0pLWFhHSExGS1hESlRNU1pTUVlOWkdHU1dRU1BIVExTU0tNQ0xaWFlTWlFaWE5DSkRRR1pETEZOWUtMSkNKTExaTE1aWk5IWURTU0hUSFpaTFpaQkJIUVpXV1lDUlpITFlRUUpCRVlGWFhYV0hTUlhXUUhXUFNMTVNTS1pUVFlHWVFRV1JTTEFMSE1KVFFKU01YUUJKSlpKWFpZWktYQllRWEJKWFNIWlRTRkpMWE1YWlhGR0hLWlNaR0dZTENMU0FSSllIU0xMTE1aWEVMR0xYWURKWVRMRkJIQlBOTFlaRkJCSFBUR0pLV0VUWkhLSkpYWlhYR0xMSkxTVEdTSEpKWVFMUVpGS0NHTk5ESlNTWkZEQkNUV1dTRVFGSFFKQlNBUVRHWVBRTEJYQk1NWVdYR1NMWkhHTFpHUVlGTFpCWUZaSkZSWVNGTUJZWkhRR0ZXWlNZRllKSlBIWkJZWVpGRldPREdSTE1GVFdMQlpHWUNRWENESllHWllZWVlUWVRZRFdFR0FaWUhYSkxaWVlITFJNR1JYWFpDTEhORUxKSlRKVFBXSllCSkpCWEpKVEpURUVLSFdTTEpQTFBTRllaUFFRQkRMUUpKVFlZUUxZWktES1NRSllZUVpMRFFUR0pRWVpKU1VDTVJZUVRIVEVKTUZDVFlIWVBLTUhZWldKRFFGSFlZWFdTSENUWFJMSkhRWEhDQ1lZWUpMVEtUVFlUTVhHVENKVFpBWVlPQ1pMWUxCU1pZV0pZVFNKWUhCWVNIRkpMWUdKWFhUTVpZWUxUWFhZUFpMWFlKWllaWVlQTkhNWU1EWVlMQkxITFNZWVFRTExOSkpZTVNPWVFCWkdETFlYWUxDUVlYVFNaRUdYSFpHTEhXQkxKSEVZWFRXUU1BS0JQUUNHWVNISEVHUUNNV1lZV0xKWUpIWVlaTExKSllMSFpZSE1HU0xKTEpYQ0pKWUNMWUNKUENQWkpaSk1NWUxDUUxOUUxKUUpTWFlKTUxTWkxKUUxZQ01NSENGTU1GUFFRTUZZTFFNQ0ZGUU1NTU1ITVpORkhISkdUVEhIS0hTTE5DSEhZUURYVE1NUURDWVpZWFlRTVlRWUxURENZWVlaQVpaQ1lNWllETFpGRkZNTVlDUVpXWlpNQUJUQllaVERNTlpaR0dERlRZUENHUVlUVFNTRkZXRkRUWlFTU1lTVFdYSkhYWVRTWFhZTEJZUUhXV0tYSFpYV1pOTlpaSlpKSlFKQ0NDSFlZWEJaWFpDWVpUTExDUVhZTkpZQ1lZQ1lOWlpRWVlZRVdZQ1pEQ0pZQ0NIWUpMQlRaWVlDUVdNUFdQWU1MR0tETERMR0tRUUJHWUNISlhZXCJcclxuXHRcdFx0dGhpcy5mdWxsX2RpY3QgPSB7XHJcblx0XHRcdFx0XCJhXCI6IFwiXFx1NTU0YVxcdTk2M2ZcXHU5NTE1XCIsXHJcblx0XHRcdFx0XCJhaVwiOiBcIlxcdTU3YzNcXHU2MzI4XFx1NTRjZVxcdTU1MDlcXHU1NGMwXFx1NzY5MVxcdTc2NGNcXHU4NTNjXFx1NzdlZVxcdTgyN2VcXHU3ODhkXFx1NzIzMVxcdTk2OThcXHU4YmY2XFx1NjM3MVxcdTU1ZjNcXHU1NWNjXFx1NWFkMlxcdTc0NzdcXHU2NmE3XFx1NzgzOVxcdTk1M2ZcXHU5NzJkXCIsXHJcblx0XHRcdFx0XCJhblwiOiBcIlxcdTk3OGRcXHU2YzI4XFx1NWI4OVxcdTRmZmFcXHU2MzA5XFx1NjY5N1xcdTVjYjhcXHU4MGZhXFx1Njg0OFxcdThjMTlcXHU1N2VmXFx1NjNkZVxcdTcyYjRcXHU1ZWI1XFx1Njg0OVxcdTk0ZjVcXHU5ZTRjXFx1OTg3OFxcdTllZWZcIixcclxuXHRcdFx0XHRcImFuZ1wiOiBcIlxcdTgwYWVcXHU2NjAyXFx1NzZjZVwiLFxyXG5cdFx0XHRcdFwiYW9cIjogXCJcXHU1MWY5XFx1NjU1NlxcdTcxYWNcXHU3ZmYxXFx1ODg4NFxcdTUwYjJcXHU1OTY1XFx1NjFjYVxcdTZmYjNcXHU1NzczXFx1NjJkN1xcdTU1ZjdcXHU1NjYyXFx1NWM5OVxcdTVlZDJcXHU5MDY4XFx1NWFhYVxcdTlhOWNcXHU4MDcxXFx1ODdhZlxcdTkzY2FcXHU5Y2NjXFx1OTNkNlwiLFxyXG5cdFx0XHRcdFwiYmFcIjogXCJcXHU4MmFkXFx1NjM0Y1xcdTYyNTJcXHU1M2VkXFx1NTQyN1xcdTdiMDZcXHU1MTZiXFx1NzVhNFxcdTVkZjRcXHU2MmQ0XFx1OGRjYlxcdTk3NzZcXHU2MjhhXFx1ODAxOVxcdTU3NWRcXHU5NzM4XFx1N2Y2MlxcdTcyMzhcXHU4MzA3XFx1ODNkZFxcdTg0MDZcXHU2MzZkXFx1NWM5Y1xcdTcwNWVcXHU2Nzc3XFx1OTRhZlxcdTdjOTFcXHU5Yzg1XFx1OWI0M1wiLFxyXG5cdFx0XHRcdFwiYmFpXCI6IFwiXFx1NzY3ZFxcdTY3Y2ZcXHU3NjdlXFx1NjQ0NlxcdTRmNzBcXHU4ZDI1XFx1NjJkY1xcdTdhMTdcXHU4NTljXFx1NjNiMFxcdTk3YjRcIixcclxuXHRcdFx0XHRcImJhblwiOiBcIlxcdTY1OTFcXHU3M2VkXFx1NjQyY1xcdTYyNzNcXHU4MjJjXFx1OTg4MVxcdTY3N2ZcXHU3MjQ4XFx1NjI2ZVxcdTYyY2NcXHU0ZjM0XFx1NzRlM1xcdTUzNGFcXHU1MjllXFx1N2VjYVxcdTk2MmFcXHU1NzQyXFx1OGM3M1xcdTk0YTNcXHU3NjIyXFx1NzY0ZFxcdTgyMjhcIixcclxuXHRcdFx0XHRcImJhbmdcIjogXCJcXHU5MGE2XFx1NWUyZVxcdTY4ODZcXHU2OTljXFx1ODE4MFxcdTdlZDFcXHU2OGQyXFx1NzhjNVxcdTg2OGNcXHU5NTUxXFx1NTA4ZFxcdThjMjRcXHU4NGExXFx1ODc4M1wiLFxyXG5cdFx0XHRcdFwiYmFvXCI6IFwiXFx1ODJkZVxcdTgwZGVcXHU1MzA1XFx1ODkxMlxcdTk2ZjlcXHU0ZmRkXFx1NTgyMVxcdTk5NzFcXHU1YjlkXFx1NjJiMVxcdTYyYTVcXHU2NmI0XFx1OGM3OVxcdTljOGRcXHU3MjA2XFx1NTJmOVxcdTg0NDZcXHU1YjgwXFx1NWI2MlxcdTcxNzJcXHU5ZTI4XFx1ODkxM1xcdThkYjVcXHU5Zjg1XCIsXHJcblx0XHRcdFx0XCJib1wiOiBcIlxcdTUyNjVcXHU4NTg0XFx1NzNiYlxcdTgzZTBcXHU2NGFkXFx1NjJlOFxcdTk0YjVcXHU2Y2UyXFx1NTM1YVxcdTUyYzNcXHU2NDBmXFx1OTRjMlxcdTdiOTRcXHU0ZjJmXFx1NWUxYlxcdTgyMzZcXHU4MTE2XFx1ODE4YVxcdTZlMjRcXHU2Y2NhXFx1OWE3M1xcdTRlYjNcXHU4NTQzXFx1NTU3NVxcdTk5N2RcXHU2YTk3XFx1NjRkOFxcdTc5MzRcXHU5NGI5XFx1OWU0MVxcdTdjMzhcXHU4ZGRiXCIsXHJcblx0XHRcdFx0XCJiZWlcIjogXCJcXHU2NzZmXFx1Nzg5MVxcdTYwYjJcXHU1MzUxXFx1NTMxN1xcdThmODhcXHU4MGNjXFx1OGQxZFxcdTk0YTFcXHU1MDBkXFx1NzJjOFxcdTU5MDdcXHU2MGViXFx1NzExOVxcdTg4YWJcXHU1YjViXFx1OTY0MlxcdTkwYjZcXHU1N2U0XFx1ODRkM1xcdTU0NTdcXHU2MDJiXFx1NjA5NlxcdTc4OWFcXHU5ZTRlXFx1ODkxOVxcdTk0M2VcIixcclxuXHRcdFx0XHRcImJlblwiOiBcIlxcdTU5NTRcXHU4MmVmXFx1NjcyY1xcdTdiMjhcXHU3NTVhXFx1NTc0Y1xcdTk1MWJcIixcclxuXHRcdFx0XHRcImJlbmdcIjogXCJcXHU1ZDI5XFx1N2VmN1xcdTc1MmRcXHU2Y2Y1XFx1OGU2NlxcdThmZjhcXHU1NTJhXFx1NTYyM1xcdTc1MGZcIixcclxuXHRcdFx0XHRcImJpXCI6IFwiXFx1OTAzY1xcdTlmM2JcXHU2YmQ0XFx1OTExOVxcdTdiMTRcXHU1ZjdjXFx1NzhhN1xcdTg0ZDZcXHU4NTNkXFx1NmJkNVxcdTZiZDlcXHU2YmQ2XFx1NWUwMVxcdTVlODdcXHU3NWY5XFx1OTVlZFxcdTY1NWRcXHU1ZjBhXFx1NWZjNVxcdThmOWZcXHU1OGMxXFx1ODFjMlxcdTkwN2ZcXHU5NjViXFx1NTMxNVxcdTRlZjNcXHU0ZmZlXFx1ODI5OFxcdTgzNWNcXHU4Mzc4XFx1NTQyMVxcdTU0ZDRcXHU3MmY0XFx1NWViM1xcdTYxMGVcXHU2ZWQ3XFx1NmZkZVxcdTVmM2NcXHU1OWEzXFx1NWE2MlxcdTViMTZcXHU3NGE3XFx1OGQzMlxcdTc1NDBcXHU5NGNiXFx1NzlkNVxcdTg4ZThcXHU3YjVhXFx1N2I4NVxcdTdiZTZcXHU4MjJkXFx1ODk1ZVxcdThkZjhcXHU5YWMwXCIsXHJcblx0XHRcdFx0XCJiaWFuXCI6IFwiXFx1OTdhZFxcdThmYjlcXHU3ZjE2XFx1OGQyY1xcdTYyNDFcXHU0ZmJmXFx1NTNkOFxcdTUzNWVcXHU4ZmE4XFx1OGZhOVxcdThmYWJcXHU5MDRkXFx1NTMzZVxcdTVmMDFcXHU4MmM0XFx1NWZlZFxcdTZjNzRcXHU3ZjBmXFx1NzE3OFxcdTc4MmRcXHU3OGE1XFx1N2EzOVxcdTdhODZcXHU4NzU5XFx1N2IzZVxcdTljY2FcIixcclxuXHRcdFx0XHRcImJpYW9cIjogXCJcXHU2ODA3XFx1NWY2YVxcdTgxOThcXHU4ODY4XFx1NWE0YVxcdTlhYTBcXHU5OGQxXFx1OThkOVxcdTk4ZGFcXHU3MDZjXFx1OTU1NlxcdTk1NzNcXHU3NjJkXFx1ODhmMVxcdTljZDRcIixcclxuXHRcdFx0XHRcImJpZVwiOiBcIlxcdTljZDZcXHU2MThiXFx1NTIyYlxcdTc2MmFcXHU4ZTY5XFx1OWNkOFwiLFxyXG5cdFx0XHRcdFwiYmluXCI6IFwiXFx1NWY2Y1xcdTY1OGNcXHU2ZmQyXFx1NmVlOFxcdTViYmVcXHU2NDQ4XFx1NTBhN1xcdTZkNWNcXHU3ZjI0XFx1NzNhMlxcdTZiYTFcXHU4MTkxXFx1OTU1NFxcdTlhY2NcXHU5YjEzXCIsXHJcblx0XHRcdFx0XCJiaW5nXCI6IFwiXFx1NTE3NVxcdTUxYjBcXHU2N2M0XFx1NGUxOVxcdTc5YzlcXHU5OTdjXFx1NzBiM1xcdTc1YzVcXHU1ZTc2XFx1Nzk4MFxcdTkwYjRcXHU2NDUyXFx1N2VlMFxcdTY3OGJcXHU2OWRmXFx1NzFmOVwiLFxyXG5cdFx0XHRcdFwiYnVcIjogXCJcXHU2MzU1XFx1NTM1Y1xcdTU0ZmFcXHU4ODY1XFx1NTdlMFxcdTRlMGRcXHU1ZTAzXFx1NmI2NVxcdTdjM2ZcXHU5MGU4XFx1NjAxNlxcdTYyY2FcXHU1MzVmXFx1OTAwYlxcdTc0ZmZcXHU2NjYxXFx1OTQ5YVxcdTkxYWRcIixcclxuXHRcdFx0XHRcImNhXCI6IFwiXFx1NjRlNlxcdTU2OTNcXHU3OTI0XCIsXHJcblx0XHRcdFx0XCJjYWlcIjogXCJcXHU3MzFjXFx1ODhjMVxcdTY3NTBcXHU2MjRkXFx1OGQyMlxcdTc3NmNcXHU4ZTI5XFx1OTFjN1xcdTVmNjlcXHU4M2RjXFx1ODUyMVwiLFxyXG5cdFx0XHRcdFwiY2FuXCI6IFwiXFx1OTkxMFxcdTUzYzJcXHU4Njk1XFx1NmI4YlxcdTYwZWRcXHU2MGU4XFx1NzA3ZlxcdTlhOTZcXHU3NGE4XFx1N2NiMlxcdTllZWFcIixcclxuXHRcdFx0XHRcImNhbmdcIjogXCJcXHU4MmNkXFx1ODIzMVxcdTRlZDNcXHU2Y2E3XFx1ODVjZlxcdTRmMjdcIixcclxuXHRcdFx0XHRcImNhb1wiOiBcIlxcdTY0Y2RcXHU3Y2Q5XFx1NjlmZFxcdTY2ZjlcXHU4MzQ5XFx1ODI3OVxcdTU2MDhcXHU2ZjE1XFx1ODdhY1xcdTgyNWFcIixcclxuXHRcdFx0XHRcImNlXCI6IFwiXFx1NTM5NVxcdTdiNTZcXHU0ZmE3XFx1NTE4Y1xcdTZkNGJcXHU1MjAyXFx1NWUzYlxcdTYwN2JcIixcclxuXHRcdFx0XHRcImNlbmdcIjogXCJcXHU1YzQyXFx1OGU2ZFxcdTU2NGNcIixcclxuXHRcdFx0XHRcImNoYVwiOiBcIlxcdTYzZDJcXHU1M2M5XFx1ODMyY1xcdTgzMzZcXHU2N2U1XFx1NzhiNFxcdTY0M2RcXHU1YmRmXFx1NWM5NFxcdTVkZWVcXHU4YmU3XFx1NzMzOVxcdTk5ODdcXHU2YzRhXFx1NTlmOVxcdTY3NDhcXHU2OTQyXFx1NjljZVxcdTZhYWJcXHU5NDk3XFx1OTUzOFxcdTk1NzJcXHU4ODY5XCIsXHJcblx0XHRcdFx0XCJjaGFpXCI6IFwiXFx1NjJjNlxcdTY3ZjRcXHU4YzdhXFx1NGZhYVxcdTgzMDhcXHU3NjI1XFx1ODY3ZlxcdTlmODdcIixcclxuXHRcdFx0XHRcImNoYW5cIjogXCJcXHU2NDAwXFx1NjNiYVxcdTg3NDlcXHU5OThiXFx1OGMxN1xcdTdmMjBcXHU5NGYyXFx1NGVhN1xcdTk2MTBcXHU5OGE0XFx1NTE4MVxcdThjMDRcXHU4YzM2XFx1ODQ4N1xcdTVlZGJcXHU1ZmNmXFx1NmY3YVxcdTZmYjZcXHU1YjcxXFx1N2ZiY1xcdTVhNzVcXHU1YjE3XFx1OWFhM1xcdTg5YzdcXHU3OTg1XFx1OTU2MVxcdTg4ZTNcXHU4N2ZlXFx1OGU5NFwiLFxyXG5cdFx0XHRcdFwiY2hhbmdcIjogXCJcXHU2NjBjXFx1NzMxNlxcdTU3M2FcXHU1YzFkXFx1NWUzOFxcdTk1N2ZcXHU1MDdmXFx1ODBhMFxcdTUzODJcXHU2NTVlXFx1NzU0NVxcdTU1MzFcXHU1MDIxXFx1NGYyNVxcdTliMmZcXHU4MmNjXFx1ODNkNlxcdTVmOWNcXHU2MDA1XFx1NjBkZFxcdTk2MGFcXHU1YTNjXFx1NWFlNlxcdTY2MzZcXHU2YzA1XFx1OWNiM1wiLFxyXG5cdFx0XHRcdFwiY2hhb1wiOiBcIlxcdThkODVcXHU2Mjg0XFx1OTQ5ZVxcdTY3MWRcXHU1NjMyXFx1NmY2ZVxcdTVkZTJcXHU1NDM1XFx1NzA5MlxcdTYwMGFcXHU3ZWM5XFx1NjY0MVxcdTgwMTZcIixcclxuXHRcdFx0XHRcImNoZVwiOiBcIlxcdThmNjZcXHU2MjZmXFx1NjRhNFxcdTYzYTNcXHU1ZjdiXFx1NmY4OFxcdTU3N2NcXHU1YzZlXFx1NzgxN1wiLFxyXG5cdFx0XHRcdFwiY2hlblwiOiBcIlxcdTkwZjRcXHU4MWUzXFx1OGZiMFxcdTVjMThcXHU2NjY4XFx1NWZmMVxcdTZjODlcXHU5NjQ4XFx1OGQ4MVxcdTg4NmNcXHU3OWYwXFx1OGMwY1xcdTYyYmJcXHU1NWQ0XFx1NWJiOFxcdTc0MWJcXHU2OTg3XFx1ODA5Y1xcdTgwYzJcXHU3ODljXFx1OWY4MFwiLFxyXG5cdFx0XHRcdFwiY2hlbmdcIjogXCJcXHU2NDkxXFx1NTdjZVxcdTZhNTlcXHU2MjEwXFx1NTQ0OFxcdTRlNThcXHU3YTBiXFx1NjBlOVxcdTZmODRcXHU4YmRhXFx1NjI3ZlxcdTkwMWVcXHU5YThiXFx1NzllNFxcdTU3ZDVcXHU1ZDRhXFx1NWZiNVxcdTZkNDhcXHU2N2E4XFx1NjdmZFxcdTZhMThcXHU2NjVmXFx1NTg0ZFxcdTc3YTBcXHU5NGQ2XFx1ODhjZVxcdTg2Y2ZcXHU5MTcyXCIsXHJcblx0XHRcdFx0XCJjaGlcIjogXCJcXHU1NDAzXFx1NzVmNFxcdTYzMDFcXHU1MzE5XFx1NmM2MFxcdThmZGZcXHU1ZjFiXFx1OWE3MFxcdTgwM2JcXHU5ZjdmXFx1NGY4OFxcdTVjM2FcXHU4ZDY0XFx1N2ZjNVxcdTY1YTVcXHU3MGJkXFx1NTBiYVxcdTU4ODBcXHU4MmFhXFx1ODMwY1xcdTY0MGJcXHU1M2YxXFx1NTRlN1xcdTU1N2JcXHU1NWU0XFx1NWY3M1xcdTk5NmNcXHU2Y2IyXFx1NWFiOFxcdTY1NTVcXHU4MGRkXFx1NzcxOVxcdTc3MzVcXHU5ZTMxXFx1NzYxYlxcdTg5MmJcXHU4NmE5XFx1ODdhZFxcdTdiMWVcXHU3YmVhXFx1OGM0OVxcdThlMDVcXHU4ZTFmXFx1OWI1MVwiLFxyXG5cdFx0XHRcdFwiY2hvbmdcIjogXCJcXHU1MTQ1XFx1NTFiMlxcdTg2NmJcXHU1ZDA3XFx1NWJhMFxcdTgzM2FcXHU1ZmUxXFx1NjFhN1xcdTk0ZjNcXHU4MjVmXCIsXHJcblx0XHRcdFx0XCJjaG91XCI6IFwiXFx1NjJiZFxcdTkxNmNcXHU3NTc0XFx1OGUwY1xcdTdhMjBcXHU2MTAxXFx1N2I3OVxcdTRlYzdcXHU3ZWY4XFx1Nzc4NVxcdTRlMTFcXHU0ZmU2XFx1NTczM1xcdTVlMzFcXHU2MGM2XFx1NmViNFxcdTU5YWZcXHU3NjMzXFx1OTZlMFxcdTljOGJcIixcclxuXHRcdFx0XHRcImNodVwiOiBcIlxcdTgxZWRcXHU1MjFkXFx1NTFmYVxcdTZhNzFcXHU1M2E4XFx1OGU4N1xcdTk1MDRcXHU5NmNmXFx1NmVjMVxcdTk2NjRcXHU2OTVhXFx1Nzg0MFxcdTUwYThcXHU3N2Q3XFx1NjQxMFxcdTg5ZTZcXHU1OTA0XFx1NGU4ZFxcdTUyMGRcXHU2MWI3XFx1N2VjY1xcdTY3NzVcXHU2OTZlXFx1NmExN1xcdTg3MGRcXHU4ZTcwXFx1OWVkY1wiLFxyXG5cdFx0XHRcdFwiY2h1YW5cIjogXCJcXHU2M2UzXFx1NWRkZFxcdTdhN2ZcXHU2OTNkXFx1NGYyMFxcdTgyMzlcXHU1NTk4XFx1NGUzMlxcdTYzYmVcXHU4MjFiXFx1NjBmNFxcdTkwNDRcXHU1ZGRiXFx1NmMxYVxcdTk0OGZcXHU5NTY5XFx1ODIyMVwiLFxyXG5cdFx0XHRcdFwiY2h1YW5nXCI6IFwiXFx1NzVhZVxcdTdhOTdcXHU1ZTYyXFx1NWU4YVxcdTk1ZWZcXHU1MjFiXFx1NjAwNlwiLFxyXG5cdFx0XHRcdFwiY2h1aVwiOiBcIlxcdTU0MzlcXHU3MDhhXFx1NjM3NlxcdTk1MjRcXHU1NzgyXFx1OTY3MlxcdTY4ZjBcXHU2OWNjXCIsXHJcblx0XHRcdFx0XCJjaHVuXCI6IFwiXFx1NjYyNVxcdTY5M2ZcXHU5MTg3XFx1NTUwN1xcdTZkZjNcXHU3ZWFmXFx1ODgyMlxcdTRmYzNcXHU4M2JjXFx1NmM4Y1xcdTgwYWJcXHU2NzEwXFx1OWU1MVxcdTg3N2RcIixcclxuXHRcdFx0XHRcImNodW9cIjogXCJcXHU2MjMzXFx1N2VmMFxcdTg1MWZcXHU4ZmI2XFx1OGY4ZFxcdTk1NWVcXHU4ZTE0XFx1OWY4YVwiLFxyXG5cdFx0XHRcdFwiY2lcIjogXCJcXHU3NWI1XFx1ODMyOFxcdTc4YzFcXHU5NmNjXFx1OGY5ZVxcdTYxNDhcXHU3NGY3XFx1OGJjZFxcdTZiNjRcXHU1MjNhXFx1OGQ1MFxcdTZiMjFcXHU4MzYwXFx1NTQ3MlxcdTVkNmZcXHU5ZTVhXFx1ODc4NVxcdTdjY2RcXHU4ZDkxXCIsXHJcblx0XHRcdFx0XCJjb25nXCI6IFwiXFx1ODA2YVxcdTg0NzFcXHU1NmYxXFx1NTMwNlxcdTRlY2VcXHU0ZTFiXFx1NTA2Y1xcdTgyYzFcXHU2ZGQ5XFx1OWFhMlxcdTc0MmVcXHU3NDgxXFx1Njc5ZVwiLFxyXG5cdFx0XHRcdFwiY3VcIjogXCJcXHU1MWQxXFx1N2M5N1xcdTkxOGJcXHU3YzA3XFx1NzMxZFxcdTZiODJcXHU4ZTU5XCIsXHJcblx0XHRcdFx0XCJjdWFuXCI6IFwiXFx1OGU3ZlxcdTdiZTFcXHU3YTljXFx1NmM0NlxcdTY0YmFcXHU2NjE1XFx1NzIyOFwiLFxyXG5cdFx0XHRcdFwiY3VpXCI6IFwiXFx1NjQ2N1xcdTVkMTRcXHU1MGFjXFx1ODEwNlxcdTc2MDFcXHU3Y2I5XFx1NmRlY1xcdTdmZTBcXHU4NDAzXFx1NjBiNFxcdTc0ODBcXHU2OWIxXFx1OTZiOVwiLFxyXG5cdFx0XHRcdFwiY3VuXCI6IFwiXFx1Njc1MVxcdTViNThcXHU1YmY4XFx1NzhjYlxcdTVmZDZcXHU3NmI0XCIsXHJcblx0XHRcdFx0XCJjdW9cIjogXCJcXHU2NGFlXFx1NjQxM1xcdTYzYWFcXHU2MzJiXFx1OTUxOVxcdTUzOWRcXHU4MTFlXFx1OTUwOVxcdTc3ZWNcXHU3NWU0XFx1OWU3ZVxcdThlNDlcXHU4ZTljXCIsXHJcblx0XHRcdFx0XCJkYVwiOiBcIlxcdTY0MmRcXHU4ZmJlXFx1N2I1NFxcdTc2MjlcXHU2MjUzXFx1NTkyN1xcdTgwMzdcXHU1NGQyXFx1NTVkMlxcdTYwMWJcXHU1OWIyXFx1NzViOFxcdTg5MjFcXHU3YjJhXFx1OTc3Y1xcdTk3OTFcIixcclxuXHRcdFx0XHRcImRhaVwiOiBcIlxcdTU0NDZcXHU2Yjc5XFx1NTBhM1xcdTYyMzRcXHU1ZTI2XFx1NmI4NlxcdTRlZTNcXHU4ZDM3XFx1ODg4YlxcdTVmODVcXHU5MDJlXFx1NjAyMFxcdTU3ZWRcXHU3NTE5XFx1NTQ1NFxcdTVjYjFcXHU4ZmU4XFx1OTAyZlxcdTlhODBcXHU3ZWQwXFx1NzNiM1xcdTllZGJcIixcclxuXHRcdFx0XHRcImRhblwiOiBcIlxcdTgwM2RcXHU2MmM1XFx1NGUzOVxcdTUzNTVcXHU5MGY4XFx1NjNiOFxcdTgwYzZcXHU2NWU2XFx1NmMyZVxcdTRmNDZcXHU2MGVlXFx1NmRlMVxcdThiZGVcXHU1ZjM5XFx1ODZjYlxcdTRlYmJcXHU1MTBiXFx1NTM2OVxcdTg0MGZcXHU1NTU2XFx1NmZiOVxcdTZhOTBcXHU2YjlhXFx1OGQ1NVxcdTc3MDhcXHU3NjA1XFx1ODA0M1xcdTdiYWFcIixcclxuXHRcdFx0XHRcImRhbmdcIjogXCJcXHU1ZjUzXFx1NjMyMVxcdTUxNWFcXHU4MzYxXFx1Njg2M1xcdThjMjBcXHU1MWZjXFx1ODNlYVxcdTViOTVcXHU3ODAwXFx1OTRkYlxcdTg4YzZcIixcclxuXHRcdFx0XHRcImRhb1wiOiBcIlxcdTUyMDBcXHU2MzYzXFx1OGU0OFxcdTUwMTJcXHU1YzliXFx1Nzk3N1xcdTViZmNcXHU1MjMwXFx1N2EzYlxcdTYwYmNcXHU5MDUzXFx1NzZkN1xcdTUzZThcXHU1NTQxXFx1NWZjOVxcdTZkMmVcXHU2YzE4XFx1NzExOFxcdTVmZDFcXHU3ZTliXCIsXHJcblx0XHRcdFx0XCJkZVwiOiBcIlxcdTVmYjdcXHU1Zjk3XFx1NzY4NFxcdTk1MWRcIixcclxuXHRcdFx0XHRcImRlbmdcIjogXCJcXHU4ZTZjXFx1NzA2ZlxcdTc2N2JcXHU3YjQ5XFx1NzdhYVxcdTUxZjNcXHU5MDkzXFx1NTY1NFxcdTVkOWRcXHU2MjI1XFx1NzhmNFxcdTk1NmJcXHU3YzI2XCIsXHJcblx0XHRcdFx0XCJkaVwiOiBcIlxcdTU4MjRcXHU0ZjRlXFx1NmVmNFxcdThmZWFcXHU2NTRjXFx1N2IxYlxcdTcyYzRcXHU2ZGE0XFx1N2ZkZlxcdTVhZTFcXHU2MmI1XFx1NWU5NVxcdTU3MzBcXHU4NDgyXFx1N2IyY1xcdTVlMWRcXHU1ZjFmXFx1OTAxMlxcdTdmMTRcXHU2YzEwXFx1N2M3NFxcdThiY2JcXHU4YzFiXFx1OTBiOFxcdTU3N2JcXHU4MzljXFx1ODM3YlxcdTU2MDBcXHU1YTIzXFx1NjdlMlxcdTY4ZTNcXHU4OWNjXFx1NzgyNVxcdTc4YjJcXHU3NzQ3XFx1OTU1ZFxcdTdmOWRcXHU5YWI2XCIsXHJcblx0XHRcdFx0XCJkaWFuXCI6IFwiXFx1OThhMFxcdTYzODJcXHU2ZWM3XFx1Nzg5OFxcdTcwYjlcXHU1MTc4XFx1OTc1YlxcdTU3YWJcXHU3NTM1XFx1NGY0M1xcdTc1MzhcXHU1ZTk3XFx1NjBlNlxcdTU5NjBcXHU2ZGMwXFx1NmJiZlxcdTRlMzZcXHU5NjNkXFx1NTc2YlxcdTU3ZGRcXHU1ZGM1XFx1NzNiN1xcdTc2NWNcXHU3NjZiXFx1N2MxZlxcdThlMmVcIixcclxuXHRcdFx0XHRcImRpYW9cIjogXCJcXHU3ODg5XFx1NTNmY1xcdTk2ZDVcXHU1MWNiXFx1NTIwMVxcdTYzODlcXHU1NDBhXFx1OTQ5M1xcdThjMDNcXHU4ZjdhXFx1OTRkZVxcdTg3MjlcXHU3YzljXFx1OGM4MlwiLFxyXG5cdFx0XHRcdFwiZGllXCI6IFwiXFx1OGRjY1xcdTcyMzlcXHU3ODlmXFx1ODc3NlxcdThmZWRcXHU4YzBkXFx1NTNlMFxcdTRmNWFcXHU1N2E0XFx1NTgxZVxcdTYzZjJcXHU1NThiXFx1NmUyYlxcdThmNzZcXHU3MjUyXFx1NzRkZVxcdTg5MzZcXHU4MDBiXFx1OGU0MFxcdTljYmRcXHU5Y2NlXCIsXHJcblx0XHRcdFx0XCJkaW5nXCI6IFwiXFx1NGUwMVxcdTc2ZWZcXHU1M2VlXFx1OTQ4OVxcdTk4NzZcXHU5ZjBlXFx1OTUyZFxcdTViOWFcXHU4YmEyXFx1NGUyMlxcdTRlYzNcXHU1NTc2XFx1NzM4ZVxcdTgxNWFcXHU3ODg3XFx1NzUzYVxcdTk0ZTRcXHU3NTk0XFx1ODAzNVxcdTkxNGFcIixcclxuXHRcdFx0XHRcImRvbmdcIjogXCJcXHU0ZTFjXFx1NTFhY1xcdTg0NjNcXHU2MWMyXFx1NTJhOFxcdTY4MGJcXHU0Zjk3XFx1NjA2YlxcdTUxYmJcXHU2ZDFlXFx1NTc4Y1xcdTU0OWFcXHU1Y2JkXFx1NWNkMlxcdTU5MDJcXHU2YzIxXFx1ODBlOFxcdTgwZjRcXHU3ODUwXFx1OWUyYlwiLFxyXG5cdFx0XHRcdFwiZG91XCI6IFwiXFx1NTE1Y1xcdTYyOTZcXHU2NTk3XFx1OTY2MVxcdThjNDZcXHU5MDE3XFx1NzVkOFxcdTg1MzhcXHU5NGFkXFx1N2FhNlxcdTdhYWNcXHU4NmFhXFx1N2JmY1xcdTkxNjFcIixcclxuXHRcdFx0XHRcImR1XCI6IFwiXFx1OTBmZFxcdTc3NjNcXHU2YmQyXFx1NzI4YVxcdTcyZWNcXHU4YmZiXFx1NTgzNVxcdTc3NzlcXHU4ZDRjXFx1Njc1Y1xcdTk1NDBcXHU4MDlhXFx1NWVhNlxcdTZlMjFcXHU1OTkyXFx1ODI4ZlxcdTU2MWZcXHU2ZTBlXFx1NjkxZlxcdTZhNTBcXHU3MjRkXFx1ODgzOVxcdTdiMDNcXHU5YWQxXFx1OWVlOVwiLFxyXG5cdFx0XHRcdFwiZHVhblwiOiBcIlxcdTdhZWZcXHU3N2VkXFx1OTUzYlxcdTZiYjVcXHU2NWFkXFx1N2YwZVxcdTVmNTZcXHU2OTM0XFx1NzE0NVxcdTdjMTZcIixcclxuXHRcdFx0XHRcImR1aVwiOiBcIlxcdTU4MDZcXHU1MTUxXFx1OTYxZlxcdTViZjlcXHU2MDNjXFx1NjE5ZFxcdTc4OTNcIixcclxuXHRcdFx0XHRcImR1blwiOiBcIlxcdTU4YTlcXHU1NDI4XFx1OGU3MlxcdTY1NjZcXHU5ODdmXFx1NTZlNFxcdTk0OWRcXHU3NmZlXFx1OTA0MVxcdTcwOTZcXHU3ODE4XFx1NzkwNVxcdTc2ZjlcXHU5NTY2XFx1OGRiOFwiLFxyXG5cdFx0XHRcdFwiZHVvXCI6IFwiXFx1NjM4N1xcdTU0YzZcXHU1OTFhXFx1NTkzYVxcdTU3OWJcXHU4ZWIyXFx1NjczNVxcdThkZmFcXHU4MjM1XFx1NTI0MVxcdTYwZjBcXHU1ODE1XFx1NTQ4NFxcdTU0ZGFcXHU3ZjBkXFx1NjdjMVxcdTk0Y2VcXHU4OGYwXFx1OGUzMVwiLFxyXG5cdFx0XHRcdFwiZVwiOiBcIlxcdTg2ZmVcXHU1Y2U4XFx1OWU0NVxcdTRmYzRcXHU5ODlkXFx1OGJiOVxcdTVhMjVcXHU2MDc2XFx1NTM4NFxcdTYyN2NcXHU5MDRmXFx1OTEwMlxcdTk5N2ZcXHU1NjY5XFx1OGMxNFxcdTU3YTlcXHU1N2FkXFx1ODJjYVxcdTgzYWFcXHU4NDNjXFx1NTQ0M1xcdTYxMTVcXHU1YzU5XFx1NWE0MFxcdThmNmRcXHU2NmY3XFx1ODE2ZFxcdTc4NmFcXHU5NTA3XFx1OTUzN1xcdTllNTdcXHU5ODlhXFx1OWNjNFwiLFxyXG5cdFx0XHRcdFwiZW5cIjogXCJcXHU2MDY5XFx1ODRiZFxcdTY0NDFcXHU1NTE0XFx1NTVlZlwiLFxyXG5cdFx0XHRcdFwiZXJcIjogXCJcXHU4MDBjXFx1NTEzZlxcdTgwMzNcXHU1YzE0XFx1OTk3NVxcdTZkMzFcXHU0ZThjXFx1OGQzMFxcdThmZTlcXHU3M2U1XFx1OTRkMlxcdTllMzhcXHU5Yzk1XCIsXHJcblx0XHRcdFx0XCJmYVwiOiBcIlxcdTUzZDFcXHU3ZjVhXFx1N2I0ZlxcdTRmMTBcXHU0ZTRmXFx1OTYwMFxcdTZjZDVcXHU3M2QwXFx1NTdhMVxcdTc4MWRcIixcclxuXHRcdFx0XHRcImZhblwiOiBcIlxcdTg1ZTlcXHU1ZTA2XFx1NzU2YVxcdTdmZmJcXHU2YTBhXFx1NzdmZVxcdTk0OTJcXHU3ZTQxXFx1NTFlMVxcdTcwZTZcXHU1M2NkXFx1OGZkNFxcdTgzMDNcXHU4ZDI5XFx1NzJhZlxcdTk5NmRcXHU2Y2RiXFx1ODYyOVxcdTVlNjFcXHU3MmFkXFx1NjhiNVxcdTY1MzVcXHU3MWQ0XFx1NzU0OFxcdThlNmZcIixcclxuXHRcdFx0XHRcImZhbmdcIjogXCJcXHU1NzRhXFx1ODJiM1xcdTY1YjlcXHU4MGFhXFx1NjIzZlxcdTk2MzJcXHU1OWE4XFx1NGVmZlxcdThiYmZcXHU3ZWJhXFx1NjUzZVxcdTUzMWFcXHU5MGExXFx1NWY3N1xcdTk0YWJcXHU4MjJiXFx1OWM4MlwiLFxyXG5cdFx0XHRcdFwiZmVpXCI6IFwiXFx1ODNmMlxcdTk3NWVcXHU1NTYxXFx1OThkZVxcdTgwYTVcXHU1MzJhXFx1OGJmZFxcdTU0MjBcXHU4MGJhXFx1NWU5ZlxcdTZjYjhcXHU4ZDM5XFx1ODJiZVxcdTcyZDJcXHU2MGIxXFx1NmRkZFxcdTU5ODNcXHU3ZWNiXFx1N2VlZlxcdTY5YTdcXHU4MTUzXFx1NjU5MFxcdTYyNDlcXHU3OTUzXFx1NzgyOVxcdTk1NDRcXHU3NWYxXFx1ODcxYVxcdTdiZGFcXHU3ZmUxXFx1OTcwZlxcdTljYjFcIixcclxuXHRcdFx0XHRcImZlblwiOiBcIlxcdTgyYWNcXHU5MTVhXFx1NTQyOVxcdTZjMWJcXHU1MjA2XFx1N2ViN1xcdTU3NWZcXHU3MTFhXFx1NmM3ZVxcdTdjODlcXHU1OTRiXFx1NGVmZFxcdTVmZmZcXHU2MTI0XFx1N2NhYVxcdTUwN2VcXHU3MDM1XFx1NjhmY1xcdTYxMGRcXHU5Y2JjXFx1OWYyMlwiLFxyXG5cdFx0XHRcdFwiZmVuZ1wiOiBcIlxcdTRlMzBcXHU1YzAxXFx1NjdhYlxcdTg3MDJcXHU1Y2YwXFx1OTUwYlxcdTk4Y2VcXHU3NWFmXFx1NzBmZFxcdTkwMjJcXHU1MWFmXFx1N2YxZFxcdThiYmRcXHU1OTQ5XFx1NTFlNFxcdTRmZjhcXHU5MTQ2XFx1ODQ1MVxcdTZjYTNcXHU3ODFjXCIsXHJcblx0XHRcdFx0XCJmdVwiOiBcIlxcdTRmNWJcXHU1NDI2XFx1NTkyYlxcdTY1NzdcXHU4MGE0XFx1NWI3NVxcdTYyNzZcXHU2MmMyXFx1OGY5MFxcdTVlNDVcXHU2YzFmXFx1N2IyNlxcdTRmMGZcXHU0ZmQ4XFx1NjcwZFxcdTZkNmVcXHU2ZGFhXFx1Nzk4ZlxcdTg4YjFcXHU1ZjE3XFx1NzUyYlxcdTYyOWFcXHU4Zjg1XFx1NGZlZlxcdTkxZGNcXHU2NWE3XFx1ODEyZlxcdTgxNTFcXHU1ZTljXFx1ODE1MFxcdThkNzRcXHU1MjZmXFx1ODk4NlxcdThkNGJcXHU1OTBkXFx1NTA4NVxcdTRlZDhcXHU5NjFjXFx1NzIzNlxcdTgxNzlcXHU4ZDFmXFx1NWJjY1xcdThiYTNcXHU5NjQ0XFx1NTk4N1xcdTdmMWFcXHU1NDkwXFx1NTMxMFxcdTUxZWJcXHU5MGRiXFx1ODI5OVxcdTgyZmJcXHU4MzJmXFx1ODNhOVxcdTgzZDRcXHU1NDRiXFx1NWU1ZVxcdTZlY2ZcXHU4Mjc0XFx1NWI1YVxcdTlhNzhcXHU3ZWMyXFx1Njg3NFxcdThkNTlcXHU5ZWZiXFx1OWVmY1xcdTdmNThcXHU3YTAzXFx1OTlhNVxcdTg2NGRcXHU4NmE4XFx1ODcwOVxcdTg3NjBcXHU4NzZlXFx1OWViOFxcdThkYmFcXHU4ZGQ3XFx1OWNjNlwiLFxyXG5cdFx0XHRcdFwiZ2FcIjogXCJcXHU1Njc2XFx1NTYwZVxcdTg2ZTRcXHU1YzJjXFx1NTQ3N1xcdTVjMTVcXHU1YzFjXFx1NjVlZVxcdTk0ODZcIixcclxuXHRcdFx0XHRcImdhaVwiOiBcIlxcdThiZTVcXHU2NTM5XFx1Njk4MlxcdTk0OTlcXHU3NmQ2XFx1NmU4OVxcdTRlMTBcXHU5NjU0XFx1NTc5M1xcdTYyMjRcXHU4ZDQ1XFx1ODBmMlwiLFxyXG5cdFx0XHRcdFwiZ2FuXCI6IFwiXFx1NWU3MlxcdTc1MThcXHU2NzQ2XFx1NjdkMVxcdTdhZmZcXHU4MDlkXFx1OGQ3NlxcdTYxMWZcXHU3OWM2XFx1NjU2MlxcdThkNjNcXHU1NzY5XFx1ODJmN1xcdTVjMzRcXHU2NGMwXFx1NmNkNFxcdTZkZTZcXHU2Zjg5XFx1N2VjMFxcdTZhNDRcXHU2NWYwXFx1NzdmOFxcdTc1YjNcXHU5MTUwXCIsXHJcblx0XHRcdFx0XCJnYW5nXCI6IFwiXFx1NTE4OFxcdTUyMWFcXHU5NGEyXFx1N2YzOFxcdTgwOWJcXHU3ZWIyXFx1NWM5N1xcdTZlMmZcXHU2MjA2XFx1N2Y2MVxcdTk4ODNcXHU3YjdiXCIsXHJcblx0XHRcdFx0XCJnb25nXCI6IFwiXFx1Njc2MFxcdTVkZTVcXHU2NTNiXFx1NTI5ZlxcdTYwNmRcXHU5ZjlhXFx1NGY5YlxcdThlYWNcXHU1MTZjXFx1NWJhYlxcdTVmMTNcXHU1ZGU5XFx1NmM1ZVxcdTYyZjFcXHU4ZDIxXFx1NTE3MVxcdTg1N2JcXHU1ZWZlXFx1NTRhM1xcdTczZDlcXHU4MGIxXFx1ODZhM1xcdTg2ZTlcXHU4OWU1XCIsXHJcblx0XHRcdFx0XCJnYW9cIjogXCJcXHU3YmQ5XFx1NzY4YlxcdTlhZDhcXHU4MThmXFx1N2Y5NFxcdTdjZDVcXHU2NDFlXFx1OTU1MFxcdTdhM2ZcXHU1NDRhXFx1Nzc3ZVxcdThiZjBcXHU5MGRjXFx1ODRiZlxcdTg1YzFcXHU3ZjFmXFx1NjlkNFxcdTY5YzFcXHU2NzcyXFx1OTUwNlwiLFxyXG5cdFx0XHRcdFwiZ2VcIjogXCJcXHU1NGU1XFx1NmI0Y1xcdTY0MDFcXHU2MjA4XFx1OWUzZFxcdTgwZjNcXHU3NTk5XFx1NTI3MlxcdTk3NjlcXHU4NDViXFx1NjgzY1xcdTk2MDFcXHU5Njk0XFx1OTRlY1xcdTRlMmFcXHU1NDA0XFx1OWIzMlxcdTRlZTFcXHU1NGZmXFx1NTg2NVxcdTU1ZGRcXHU3ZWE1XFx1NjQzZlxcdTgxODhcXHU3ODRjXFx1OTRlYVxcdTk1NDlcXHU4OGJjXFx1OTg4Y1xcdTg2N2NcXHU4MjM4XFx1OWFiY1xcdTlhYzJcIixcclxuXHRcdFx0XHRcImdlaVwiOiBcIlxcdTdlZDlcIixcclxuXHRcdFx0XHRcImdlblwiOiBcIlxcdTY4MzlcXHU4ZGRmXFx1NGU5OFxcdTgzMWJcXHU1NGNmXFx1ODI2ZVwiLFxyXG5cdFx0XHRcdFwiZ2VuZ1wiOiBcIlxcdTgwMTVcXHU2NmY0XFx1NWU5YVxcdTdmYjlcXHU1N2MyXFx1ODAzZlxcdTY4OTdcXHU1NGZkXFx1OGQ1M1xcdTljYTBcIixcclxuXHRcdFx0XHRcImdvdVwiOiBcIlxcdTk0YTlcXHU1MmZlXFx1NmM5ZlxcdTgyZGZcXHU3MmQ3XFx1NTdhMlxcdTY3ODRcXHU4ZDJkXFx1NTkxZlxcdTRmNWRcXHU4YmRmXFx1NWNhM1xcdTkwNThcXHU1YWJlXFx1N2YxMVxcdTg5Y2ZcXHU1ZjQwXFx1OWUzMlxcdTdiMzFcXHU3YmRkXFx1OTdiMlwiLFxyXG5cdFx0XHRcdFwiZ3VcIjogXCJcXHU4ZjljXFx1ODNjN1xcdTU0OTVcXHU3YjhkXFx1NGYzMFxcdTZjYmRcXHU1YjY0XFx1NTlkMVxcdTlmMTNcXHU1M2U0XFx1ODZjYVxcdTlhYThcXHU4YzM3XFx1ODBhMVxcdTY1NDVcXHU5ODdlXFx1NTZmYVxcdTk2YzdcXHU1NjBmXFx1OGJjMlxcdTgzZjBcXHU1NGNjXFx1NWQyZVxcdTZjNjlcXHU2ODhmXFx1OGY3MVxcdTcyNmZcXHU3MjdmXFx1ODBjZFxcdTgxY2NcXHU2YmMyXFx1NzdiZFxcdTdmNWZcXHU5NGI0XFx1OTUyMlxcdTc0ZTBcXHU5ZTJhXFx1OWU0NFxcdTc1ZmNcXHU4NmM0XFx1OTE2NFxcdTg5ZGFcXHU5Y2I0XFx1OWFiMFxcdTllNThcIixcclxuXHRcdFx0XHRcImd1YVwiOiBcIlxcdTUyMmVcXHU3NGRjXFx1NTI1MFxcdTViZTFcXHU2MzAyXFx1ODkwMlxcdTUzNjZcXHU4YmQ2XFx1NTQ3MVxcdTY4MWRcXHU5ZTM5XCIsXHJcblx0XHRcdFx0XCJndWFpXCI6IFwiXFx1NGU1NlxcdTYyZDBcXHU2MDJhXFx1NTRkOVwiLFxyXG5cdFx0XHRcdFwiZ3VhblwiOiBcIlxcdTY4ZmFcXHU1MTczXFx1NWI5OFxcdTUxYTBcXHU4OWMyXFx1N2JhMVxcdTk5ODZcXHU3ZjUwXFx1NjBlZlxcdTcwNGNcXHU4ZDJmXFx1NTAwY1xcdTgzOWVcXHU2M2JjXFx1NmRhYlxcdTc2ZTVcXHU5ZTczXFx1OWNjZlwiLFxyXG5cdFx0XHRcdFwiZ3VhbmdcIjogXCJcXHU1MTQ5XFx1NWU3ZlxcdTkwMWJcXHU3MmI3XFx1Njg0NFxcdTgwZjFcXHU3NTkyXCIsXHJcblx0XHRcdFx0XCJndWlcIjogXCJcXHU3NDcwXFx1ODljNFxcdTU3MmRcXHU3ODQ1XFx1NWY1MlxcdTlmOWZcXHU5NWZhXFx1OGY2OFxcdTliM2NcXHU4YmUxXFx1NzY3OFxcdTY4NDJcXHU2N2RjXFx1OGRlYVxcdThkMzVcXHU1MjNkXFx1NTMyNlxcdTUyM2ZcXHU1ZThiXFx1NWI4NFxcdTU5YWJcXHU2ODY3XFx1NzA4NVxcdTY2NzdcXHU3Njg4XFx1N2MwYlxcdTljOTFcXHU5Y2RjXCIsXHJcblx0XHRcdFx0XCJndW5cIjogXCJcXHU4ZjhhXFx1NmVkYVxcdTY4Y2RcXHU0ZTI4XFx1ODg2ZVxcdTdlZjJcXHU3OGQ5XFx1OWNhN1wiLFxyXG5cdFx0XHRcdFwiZ3VvXCI6IFwiXFx1OTUwNVxcdTkwZWRcXHU1NmZkXFx1Njc5Y1xcdTg4ZjlcXHU4ZmM3XFx1OTk5OFxcdTg4MDNcXHU1N2RhXFx1NjNiNFxcdTU0NTlcXHU1NmQ3XFx1NWUzY1xcdTVkMWVcXHU3MzEzXFx1NjkwMVxcdTg2NjJcXHU5NTFlXFx1ODA1MlxcdTg3MmVcXHU4NzNlXFx1ODc0OFwiLFxyXG5cdFx0XHRcdFwiaGFcIjogXCJcXHU1NGM4XCIsXHJcblx0XHRcdFx0XCJoYWlcIjogXCJcXHU5YWI4XFx1NWI2OVxcdTZkNzdcXHU2YzI2XFx1NGVhNVxcdTViYjNcXHU5YTg3XFx1NTRiNFxcdTU1ZThcXHU5ODhmXFx1OTFhMlwiLFxyXG5cdFx0XHRcdFwiaGFuXCI6IFwiXFx1OTE2M1xcdTYxYThcXHU5MGFmXFx1OTdlOVxcdTU0MmJcXHU2ZGI1XFx1NWJkMlxcdTUxZmRcXHU1NThhXFx1N2Y1NVxcdTdmZjBcXHU2NGJjXFx1NjM0ZFxcdTY1ZjFcXHU2MWJlXFx1NjA4ZFxcdTcxMGFcXHU2YzU3XFx1NmM0OVxcdTkwOTdcXHU4M2UxXFx1NjQ5NlxcdTk2MWFcXHU3MDFhXFx1NjY1N1xcdTcxMTNcXHU5ODk0XFx1ODZiNlxcdTlmM2VcIixcclxuXHRcdFx0XHRcImhlblwiOiBcIlxcdTU5MmZcXHU3NWQ1XFx1NWY4OFxcdTcyZTBcXHU2MDY4XCIsXHJcblx0XHRcdFx0XCJoYW5nXCI6IFwiXFx1Njc2ZFxcdTgyMmFcXHU2Yzg2XFx1N2VkN1xcdTczZTlcXHU2ODQxXCIsXHJcblx0XHRcdFx0XCJoYW9cIjogXCJcXHU1OGQ1XFx1NTY4ZVxcdThjNmFcXHU2YmViXFx1OTBkZFxcdTU5N2RcXHU4MDE3XFx1NTNmN1xcdTZkNjlcXHU4NTg1XFx1NTVlNVxcdTU2ODZcXHU2ZmUwXFx1NzA0ZlxcdTY2MGFcXHU3NjkzXFx1OThhMlxcdTg2OWRcIixcclxuXHRcdFx0XHRcImhlXCI6IFwiXFx1NTQ3NVxcdTU1OWRcXHU4Mzc3XFx1ODNjZlxcdTY4MzhcXHU3OWJlXFx1NTQ4Y1xcdTRmNTVcXHU1NDA4XFx1NzZkMlxcdThjODlcXHU5NjAyXFx1NmNiM1xcdTZkYjhcXHU4ZDZiXFx1ODkxMFxcdTllNjRcXHU4ZDNhXFx1OGJjM1xcdTUyYmVcXHU1OGQxXFx1ODVmZlxcdTU1ZDFcXHU1NWVjXFx1OTYxNlxcdTc2Y2RcXHU4NmI1XFx1N2ZlZVwiLFxyXG5cdFx0XHRcdFwiaGVpXCI6IFwiXFx1NTYzZlxcdTllZDFcIixcclxuXHRcdFx0XHRcImhlbmdcIjogXCJcXHU1NGZjXFx1NGVhOFxcdTZhMmFcXHU4ODYxXFx1NjA1MlxcdThhMDdcXHU4NjA1XCIsXHJcblx0XHRcdFx0XCJob25nXCI6IFwiXFx1OGY3MFxcdTU0YzRcXHU3MGQ4XFx1ODY3OVxcdTllM2ZcXHU2ZDJhXFx1NWI4ZlxcdTVmMThcXHU3ZWEyXFx1OWVjOVxcdThiYTdcXHU4MzZkXFx1ODVhOFxcdTk1ZjNcXHU2Y2QzXCIsXHJcblx0XHRcdFx0XCJob3VcIjogXCJcXHU1NTg5XFx1NGZhZlxcdTczMzRcXHU1NDNjXFx1NTM5YVxcdTUwMTlcXHU1NDBlXFx1NTgyMFxcdTVmOGNcXHU5MDA1XFx1NzYwYVxcdTdiY2NcXHU3Y2M3XFx1OWM4ZVxcdTlhYmFcIixcclxuXHRcdFx0XHRcImh1XCI6IFwiXFx1NTQ3Y1xcdTRlNGVcXHU1ZmZkXFx1NzQ1YVxcdTU4ZjZcXHU4NDZiXFx1ODBlMVxcdTg3NzRcXHU3MmQwXFx1N2NjYVxcdTZlNTZcXHU1ZjI3XFx1ODY0ZVxcdTU1MmNcXHU2MmE0XFx1NGU5MlxcdTZjYWFcXHU2MjM3XFx1NTFiMVxcdTU1M2ZcXHU1NmViXFx1NWNiNVxcdTczMjJcXHU2MDE5XFx1NjBkYVxcdTZkNTJcXHU2ZWY5XFx1NzQyNVxcdTY5ZjJcXHU4Zjc3XFx1ODlmM1xcdTcwYzBcXHU3MTczXFx1NjIzZFxcdTYyNDhcXHU3OTVjXFx1OWU1NVxcdTllNzFcXHU3YjBmXFx1OTE5MFxcdTY1OWJcIixcclxuXHRcdFx0XHRcImh1YVwiOiBcIlxcdTgyYjFcXHU1NGQ3XFx1NTM0ZVxcdTczM2VcXHU2ZWQxXFx1NzUzYlxcdTUyMTJcXHU1MzE2XFx1OGJkZFxcdTUyOTBcXHU2ZDRkXFx1OWE4NVxcdTY4NjZcXHU5NGU3XFx1N2ExZVwiLFxyXG5cdFx0XHRcdFwiaHVhaVwiOiBcIlxcdTY5ZDBcXHU1ZjhhXFx1NjAwMFxcdTZkZWVcXHU1NzRmXFx1OGZkOFxcdThlMWRcIixcclxuXHRcdFx0XHRcImh1YW5cIjogXCJcXHU2YjIyXFx1NzNhZlxcdTY4NTNcXHU3ZjEzXFx1NjM2MlxcdTYwYTNcXHU1NTI0XFx1NzVlYVxcdThjNjJcXHU3MTE1XFx1NmRhM1xcdTViYTZcXHU1ZTdiXFx1OTBjN1xcdTU5NDJcXHU1N2I4XFx1NjRkMFxcdTU3MWNcXHU2ZDM5XFx1NmQ2M1xcdTZmMzZcXHU1YmYwXFx1OTAyZFxcdTdmMzNcXHU5NTNlXFx1OWNhOVxcdTliMWZcIixcclxuXHRcdFx0XHRcImh1YW5nXCI6IFwiXFx1ODM1MlxcdTYxNGNcXHU5ZWM0XFx1NzhmYVxcdTg3NTdcXHU3YzI3XFx1NzY4N1xcdTUxZjBcXHU2MGY2XFx1NzE0Y1xcdTY2NDNcXHU1ZTRjXFx1NjA0ZFxcdThjMGVcXHU5NjhkXFx1NWZhOFxcdTZlNWZcXHU2ZjYyXFx1OTA1MVxcdTc0OWNcXHU4MDkzXFx1NzY0MFxcdTg3ZTVcXHU3YmMxXFx1OWNjN1wiLFxyXG5cdFx0XHRcdFwiaHVpXCI6IFwiXFx1NzA3MFxcdTYzMjVcXHU4Zjg5XFx1NWZiZFxcdTYwNjJcXHU4NmQ0XFx1NTZkZVxcdTZiYzFcXHU2MDk0XFx1NjE2N1xcdTUzNDlcXHU2MGUwXFx1NjY2NlxcdThkM2ZcXHU3OWZkXFx1NGYxYVxcdTcwZTlcXHU2YzQ3XFx1OGJiM1xcdThiZjJcXHU3ZWQ4XFx1OGJkOVxcdTgzMzRcXHU4MzVmXFx1ODU1OVxcdTU0ZDVcXHU1NTk5XFx1OTZiM1xcdTZkMDRcXHU1ZjU3XFx1N2YwYlxcdTczZjJcXHU2NjU2XFx1NjA1YVxcdTg2N2FcXHU4N2VhXFx1OWViZVwiLFxyXG5cdFx0XHRcdFwiaHVuXCI6IFwiXFx1ODM2NFxcdTY2MGZcXHU1YTVhXFx1OWI0MlxcdTZkNTFcXHU2ZGY3XFx1OGJlOFxcdTk5ODRcXHU5NjBkXFx1NmViN1xcdTdmMTdcIixcclxuXHRcdFx0XHRcImh1b1wiOiBcIlxcdThjNDFcXHU2ZDNiXFx1NGYxOVxcdTcwNmJcXHU4M2I3XFx1NjIxNlxcdTYwZDFcXHU5NzBkXFx1OGQyN1xcdTc5NzhcXHU2NTA5XFx1NTZhZlxcdTU5MjVcXHU5NGFjXFx1OTUyYVxcdTk1NmNcXHU4MDIwXFx1ODgxNlwiLFxyXG5cdFx0XHRcdFwiamlcIjogXCJcXHU1MWZiXFx1NTczZVxcdTU3ZmFcXHU2NzNhXFx1NzU3OFxcdTdhM2RcXHU3OWVmXFx1N2I5NVxcdTgwOGNcXHU5OTY1XFx1OGZmOVxcdTZmYzBcXHU4YmE1XFx1OWUyMVxcdTU5ZWNcXHU3ZWU5XFx1N2YwOVxcdTU0MDlcXHU2NzgxXFx1NjhkOFxcdThmOTFcXHU3YzRkXFx1OTZjNlxcdTUzY2FcXHU2MDI1XFx1NzViZVxcdTZjNzJcXHU1MzczXFx1NWFjOVxcdTdlYTdcXHU2MzI0XFx1NTFlMFxcdTgxMGFcXHU1ZGYxXFx1ODRkZlxcdTYyODBcXHU1MTgwXFx1NWI2M1xcdTRmMGVcXHU3OTZkXFx1NTI0MlxcdTYwYjhcXHU2ZDRlXFx1NWJjNFxcdTViYzJcXHU4YmExXFx1OGJiMFxcdTY1ZTJcXHU1ZmNjXFx1OTY0NVxcdTU5OTNcXHU3ZWU3XFx1N2VhYVxcdTVjNDVcXHU0ZTBjXFx1NGU2OVxcdTUyNWVcXHU0Zjc2XFx1NGY3NFxcdTgxMTRcXHU1OGJjXFx1ODJhOFxcdTgyYjBcXHU4NDAxXFx1ODRiYVxcdTg1N2FcXHU2MzhlXFx1NTNmZFxcdTU0YWRcXHU1NGRjXFx1NTUyN1xcdTVjOGNcXHU1ZDc0XFx1NmQwZVxcdTVmNTBcXHU1YzUwXFx1OWFhNVxcdTc1N2ZcXHU3MzkxXFx1Njk2YlxcdTZiOWJcXHU2MjFmXFx1NjIyMlxcdThkNGRcXHU4OWNhXFx1NzI4NFxcdTlmNTFcXHU3N2Y2XFx1N2Y4MVxcdTVkNDdcXHU3YTM3XFx1NzYyMFxcdTc2MzVcXHU4NjZlXFx1N2IwOFxcdTdiMDRcXHU2NmE4XFx1OGRmYlxcdThkZmRcXHU5NzAxXFx1OWM5YVxcdTljYWJcXHU5YWZiXFx1OWU4MlwiLFxyXG5cdFx0XHRcdFwiamlhXCI6IFwiXFx1NTYwOVxcdTY3YjdcXHU1OTM5XFx1NGY3M1xcdTViYjZcXHU1MmEwXFx1ODM1YVxcdTk4OGFcXHU4ZDNlXFx1NzUzMlxcdTk0YmVcXHU1MDQ3XFx1N2EzY1xcdTRlZjdcXHU2N2I2XFx1OWE3ZVxcdTVhYzFcXHU0ZjNkXFx1OTBjZlxcdTYyZWVcXHU1Y2FjXFx1NmQ0M1xcdThmZTZcXHU3M2M4XFx1NjIxYlxcdTgwZGJcXHU2MDVkXFx1OTRkN1xcdTk1NTNcXHU3NWMyXFx1ODZmMVxcdTdiMzNcXHU4ODg4XFx1OGRjZlwiLFxyXG5cdFx0XHRcdFwiamlhblwiOiBcIlxcdTZiN2NcXHU3NmQxXFx1NTc1YVxcdTVjMTZcXHU3YjNhXFx1OTVmNFxcdTcxNGVcXHU1MTdjXFx1ODBhOVxcdTgyNzBcXHU1OTc4XFx1N2YwNFxcdTgzMjdcXHU2OGMwXFx1NjdlY1xcdTc4YjFcXHU3ODc3XFx1NjJlM1xcdTYzNjFcXHU3YjgwXFx1NGZlZFxcdTUyNmFcXHU1MWNmXFx1ODM1MFxcdTY5ZGJcXHU5Mjc0XFx1OGRmNVxcdThkMzFcXHU4OWMxXFx1OTUyZVxcdTdiYWRcXHU0ZWY2XFx1NTA2NVxcdTgyMzBcXHU1MjUxXFx1OTk2ZlxcdTZlMTBcXHU2ZTg1XFx1NmRhN1xcdTVlZmFcXHU1MGVkXFx1OGMwZlxcdThjMmJcXHU4M2M1XFx1ODRiOVxcdTY0MWJcXHU1NmRkXFx1NmU1NFxcdThlNDdcXHU4YjA3XFx1N2YyM1xcdTY3YTdcXHU2N2Q5XFx1Njk1N1xcdTYyMGJcXHU2MjJjXFx1NzI2ZVxcdTcyOGRcXHU2YmZkXFx1ODE3MVxcdTc3NTFcXHU5NTBmXFx1OWU2M1xcdTg4ZTVcXHU3YjE1XFx1N2JiNFxcdTdmZTZcXHU4ZGJjXFx1OGUzYVxcdTljYTNcXHU5N2FmXCIsXHJcblx0XHRcdFx0XCJqaWFuZ1wiOiBcIlxcdTUwZjVcXHU1OWRjXFx1NWMwNlxcdTZkNDZcXHU2YzVmXFx1NzU4NlxcdTg0OGJcXHU2ODY4XFx1NTk1NlxcdThiYjJcXHU1MzIwXFx1OTE3MVxcdTk2NGRcXHU4MzMzXFx1NmQxYVxcdTdlZGJcXHU3ZjMwXFx1NzI5ZlxcdTc5MTNcXHU4MDI5XFx1N2NlOFxcdThjNDdcIixcclxuXHRcdFx0XHRcImppYW9cIjogXCJcXHU4NTQ5XFx1NjkxMlxcdTc5MDFcXHU3MTI2XFx1ODBmNlxcdTRlYTRcXHU5MGNhXFx1NmQ0N1xcdTlhODRcXHU1YTA3XFx1NTZiY1xcdTY0MDVcXHU5NGYwXFx1NzdlYlxcdTRmYTVcXHU4MTFhXFx1NzJlMVxcdTg5ZDJcXHU5OTdhXFx1N2YzNFxcdTdlZGVcXHU1MjdmXFx1NjU1OVxcdTkxNzVcXHU4ZjdmXFx1OGY4M1xcdTUzZWJcXHU0ZjdjXFx1NTBlY1xcdTgzMmRcXHU2MzIyXFx1NTY0ZFxcdTVjZTRcXHU1ZmJjXFx1NTllM1xcdTdlOWZcXHU2NTZiXFx1NzY4ZVxcdTllNmFcXHU4NmRmXFx1OTFhZVxcdThkZTRcXHU5YzliXCIsXHJcblx0XHRcdFx0XCJqaWVcIjogXCJcXHU3YTk2XFx1NjNlZFxcdTYzYTVcXHU3Njg2XFx1NzlmOFxcdTg4NTdcXHU5NjM2XFx1NjIyYVxcdTUyYWJcXHU4MjgyXFx1Njg1NFxcdTY3NzBcXHU2Mzc3XFx1Nzc2YlxcdTdhZWRcXHU2ZDAxXFx1N2VkM1xcdTg5ZTNcXHU1OWQwXFx1NjIxMlxcdTg1YzlcXHU4MmE1XFx1NzU0Y1xcdTUwMWZcXHU0ZWNiXFx1NzVhNVxcdThiZWJcXHU1YzRhXFx1NTA0OFxcdThiYTZcXHU4YmQ4XFx1NTU4OFxcdTU1ZGZcXHU3MzZjXFx1NWE1NVxcdTViNTFcXHU2ODQwXFx1NzM1MlxcdTc4YTNcXHU5NTM0XFx1NzU5NlxcdTg4YjdcXHU5ODg5XFx1ODZhN1xcdTdmYWZcXHU5YzkyXFx1OWFiMVxcdTlhZWJcIixcclxuXHRcdFx0XHRcImppblwiOiBcIlxcdTVkZmVcXHU3YjRiXFx1NjVhNFxcdTkxZDFcXHU0ZWNhXFx1NmQyNVxcdTg5NWZcXHU3ZDI3XFx1OTUyNlxcdTRlYzVcXHU4YzI4XFx1OGZkYlxcdTk3NzNcXHU2NjRiXFx1Nzk4MVxcdThmZDFcXHU3MGVjXFx1NmQ3OFxcdTVjM2RcXHU1MzdhXFx1ODM2OVxcdTU4MDdcXHU1NjY0XFx1OTk5MVxcdTVlZDFcXHU1OTk3XFx1N2YxOVxcdTc0N2VcXHU2OWZmXFx1OGQ0NlxcdTg5ZDBcXHU5NDg1XFx1OTUxM1xcdTg4N2ZcXHU3N2RjXCIsXHJcblx0XHRcdFx0XCJqaW5nXCI6IFwiXFx1NTJiMlxcdTgzNDZcXHU1MTYyXFx1ODMwZVxcdTc3NWJcXHU2Njc2XFx1OWNiOFxcdTRlYWNcXHU2MGNhXFx1N2NiZVxcdTdjYjNcXHU3ZWNmXFx1NGU5NVxcdThiNjZcXHU2NjZmXFx1OTg4OFxcdTk3NTlcXHU1ODgzXFx1NjU2Y1xcdTk1NWNcXHU1Zjg0XFx1NzVjOVxcdTk3NTZcXHU3YWRmXFx1N2FkZVxcdTUxYzBcXHU1MjJkXFx1NTEwNlxcdTk2MzFcXHU4M2MxXFx1NzM0ZFxcdTYxYWNcXHU2Y2ZlXFx1OGZmM1xcdTVmMmFcXHU1YTY3XFx1ODBiY1xcdTgwZWJcXHU4MTQ4XFx1NjVjY1wiLFxyXG5cdFx0XHRcdFwiamlvbmdcIjogXCJcXHU3MGFmXFx1N2E5OFxcdTUxODJcXHU4ZmU1XFx1NjI0M1wiLFxyXG5cdFx0XHRcdFwiaml1XCI6IFwiXFx1NjNlYVxcdTdhNzZcXHU3ZWEwXFx1NzM5NlxcdTk3ZWRcXHU0ZTQ1XFx1NzA3OFxcdTRlNWRcXHU5MTUyXFx1NTNhOVxcdTY1NTFcXHU2NWU3XFx1ODFmY1xcdTgyMDVcXHU1NDhlXFx1NWMzMVxcdTc1OWFcXHU1MGU2XFx1NTU3ZVxcdTk2MDRcXHU2N2U5XFx1Njg1NVxcdTllNmJcXHU4ZDczXFx1OWIwZlwiLFxyXG5cdFx0XHRcdFwianVcIjogXCJcXHU5N2EwXFx1NjJkOFxcdTcyZDlcXHU3NWJkXFx1OWE3OVxcdTgzY2FcXHU1YzQwXFx1NTQ4MFxcdTc3ZTlcXHU0ZTNlXFx1NmNhZVxcdTgwNWFcXHU2MmQyXFx1NjM2ZVxcdTVkZThcXHU1MTc3XFx1OGRkZFxcdThlMWVcXHU5NTJmXFx1NGZmMVxcdTUzZTVcXHU2MGU3XFx1NzBhY1xcdTUyNjdcXHU1MDI4XFx1OGJiNVxcdTgyZTNcXHU4MmY0XFx1ODM5MlxcdTYzYWNcXHU5MDdkXFx1NWM2NlxcdTc0MWFcXHU2N2I4XFx1NjkxMFxcdTY5OThcXHU2OTg5XFx1NmE1OFxcdTcyOGJcXHU5OGQzXFx1OTQ5Y1xcdTk1MTRcXHU3YWFkXFx1ODhmZVxcdThkODRcXHU5MWI1XFx1OGUzZFxcdTlmODNcXHU5NmNlXFx1OTdhYlwiLFxyXG5cdFx0XHRcdFwianVhblwiOiBcIlxcdTYzNTBcXHU5ZTQzXFx1NWExZlxcdTUwMjZcXHU3NzM3XFx1NTM3N1xcdTdlZTJcXHU5MTA0XFx1NzJmN1xcdTZkOTNcXHU2ODRhXFx1ODgzMlxcdTk1MjlcXHU5NTRjXFx1OTZiZFwiLFxyXG5cdFx0XHRcdFwianVlXCI6IFwiXFx1NjQ4NVxcdTY1MmJcXHU2Mjg5XFx1NjM5OFxcdTUwMTRcXHU3MjM1XFx1ODljOVxcdTUxYjNcXHU4YmMwXFx1N2VkZFxcdTUzYTVcXHU1MjgyXFx1OGMzMlxcdTc3Y2RcXHU4NTY4XFx1NTY1OFxcdTVkMWJcXHU3MzU3XFx1NWI1M1xcdTczY2ZcXHU2ODc3XFx1NmE1YlxcdTcyMWRcXHU5NTYyXFx1OGU3NlxcdTg5ZDZcIixcclxuXHRcdFx0XHRcImp1blwiOiBcIlxcdTU3NDdcXHU4M2NjXFx1OTRhN1xcdTUxOWJcXHU1NDFiXFx1NWNmYlxcdTRmY2FcXHU3YWUzXFx1NmQ1YVxcdTkwZTFcXHU5YThmXFx1NjM0M1xcdTcyZmJcXHU3NmIyXFx1N2I2MFxcdTllODdcIixcclxuXHRcdFx0XHRcImthXCI6IFwiXFx1NTU4MFxcdTU0OTZcXHU1MzYxXFx1NGY2N1xcdTU0OTRcXHU4MGU5XCIsXHJcblx0XHRcdFx0XCJrZVwiOiBcIlxcdTU0YWZcXHU1Nzc3XFx1ODJkYlxcdTY3ZWZcXHU2OGY1XFx1NzhkNVxcdTk4OTdcXHU3OWQxXFx1NThmM1xcdTU0YjNcXHU1M2VmXFx1NmUzNFxcdTUxNGJcXHU1MjNiXFx1NWJhMlxcdThiZmVcXHU1Y2EyXFx1NjA2YVxcdTZlOThcXHU5YTkyXFx1N2YwMlxcdTczYzJcXHU4ZjcyXFx1NmMyYVxcdTc3OGNcXHU5NGI2XFx1NzViNFxcdTdhYTBcXHU4NzRjXFx1OWFjMVwiLFxyXG5cdFx0XHRcdFwia2FpXCI6IFwiXFx1NWYwMFxcdTYzZTlcXHU2OTc3XFx1NTFlZlxcdTYxNjhcXHU1MjQwXFx1NTdiMlxcdTg0ODhcXHU1ZmZlXFx1NjA3YVxcdTk0ZTBcXHU5NTBlXCIsXHJcblx0XHRcdFx0XCJrYW5cIjogXCJcXHU1MjBhXFx1NTgyYVxcdTUyZDhcXHU1NzRlXFx1NzgwZFxcdTc3MGJcXHU0ZjgzXFx1NTFmNVxcdTgzYjBcXHU4M2I2XFx1NjIyMVxcdTlmOWJcXHU3N2IwXCIsXHJcblx0XHRcdFx0XCJrYW5nXCI6IFwiXFx1NWViN1xcdTYxNzdcXHU3Y2UwXFx1NjI1YlxcdTYyOTdcXHU0ZWEyXFx1NzA5NVxcdTU3NTFcXHU0ZjA5XFx1OTVmNlxcdTk0YWFcIixcclxuXHRcdFx0XHRcImthb1wiOiBcIlxcdTgwMDNcXHU2MmY3XFx1NzBlNFxcdTk3NjBcXHU1YzNiXFx1NjgzMlxcdTcyOTJcXHU5NGQwXCIsXHJcblx0XHRcdFx0XCJrZW5cIjogXCJcXHU4MGFmXFx1NTU0M1xcdTU3YTZcXHU2MDczXFx1NTdhMFxcdTg4YzlcXHU5ODgwXCIsXHJcblx0XHRcdFx0XCJrZW5nXCI6IFwiXFx1NTQyZFxcdTVmZDBcXHU5NGZmXCIsXHJcblx0XHRcdFx0XCJrb25nXCI6IFwiXFx1N2E3YVxcdTYwNTBcXHU1YjU0XFx1NjNhN1xcdTUwMjVcXHU1ZDA2XFx1N2I5Y1wiLFxyXG5cdFx0XHRcdFwia291XCI6IFwiXFx1NjJhMFxcdTUzZTNcXHU2MjYzXFx1NWJjN1xcdTgyYTRcXHU4NTNiXFx1NTNlOVxcdTc3MGRcXHU3YjU4XCIsXHJcblx0XHRcdFx0XCJrdVwiOiBcIlxcdTY3YWZcXHU1NGVkXFx1N2E5ZlxcdTgyZTZcXHU5MTc3XFx1NWU5M1xcdTg4ZTRcXHU1MjMzXFx1NTgwMFxcdTU1YmVcXHU3ZWQ0XFx1OWFiN1wiLFxyXG5cdFx0XHRcdFwia3VhXCI6IFwiXFx1NTkzOFxcdTU3YWVcXHU2MzBlXFx1OGRlOFxcdTgwZWZcXHU0Zjg5XCIsXHJcblx0XHRcdFx0XCJrdWFpXCI6IFwiXFx1NTc1N1xcdTdiNzdcXHU0ZmE5XFx1NWZlYlxcdTg0YWZcXHU5MGQwXFx1ODQ4OVxcdTcyZWZcXHU4MTBkXCIsXHJcblx0XHRcdFx0XCJrdWFuXCI6IFwiXFx1NWJiZFxcdTZiM2VcXHU5YWNiXCIsXHJcblx0XHRcdFx0XCJrdWFuZ1wiOiBcIlxcdTUzMjFcXHU3YjUwXFx1NzJjMlxcdTY4NDZcXHU3N2ZmXFx1NzczNlxcdTY1ZjdcXHU1MWI1XFx1OGJkM1xcdThiZjNcXHU5MDlkXFx1NTczOVxcdTU5M2NcXHU1NGQwXFx1N2VhOVxcdThkMzZcIixcclxuXHRcdFx0XHRcImt1aVwiOiBcIlxcdTRlOGZcXHU3NmQ0XFx1NWNiZlxcdTdhYTVcXHU4NDc1XFx1NTk0ZVxcdTliNDFcXHU1MDgwXFx1OTk4OFxcdTYxMjdcXHU2ZTgzXFx1OTk5N1xcdTUzMmVcXHU1OTE0XFx1OTY5N1xcdTYzYzZcXHU1NWI5XFx1NTU5ZlxcdTYwOWRcXHU2MTI2XFx1OTYxNVxcdTkwMzVcXHU2NjhjXFx1Nzc3ZFxcdTgwNjlcXHU4NzcwXFx1N2JkMVxcdTgxZmVcXHU4ZGVjXCIsXHJcblx0XHRcdFx0XCJrdW5cIjogXCJcXHU1NzY0XFx1NjYwNlxcdTYzNDZcXHU1NmYwXFx1NjA4M1xcdTk2MDNcXHU3NDI4XFx1OTUxZlxcdTkxOGNcXHU5Y2IyXFx1OWFlMVwiLFxyXG5cdFx0XHRcdFwia3VvXCI6IFwiXFx1NjJlY1xcdTYyNjlcXHU1ZWQzXFx1OTYxNFxcdTg2ZGVcIixcclxuXHRcdFx0XHRcImxhXCI6IFwiXFx1NTc4M1xcdTYyYzlcXHU1NTg3XFx1ODcyMVxcdTgxNGFcXHU4ZmEzXFx1NTU2NlxcdTUyNGNcXHU2NDdhXFx1OTA4YlxcdTY1ZWZcXHU3ODJjXFx1NzYwY1wiLFxyXG5cdFx0XHRcdFwibGFpXCI6IFwiXFx1ODNiMVxcdTY3NjVcXHU4ZDU2XFx1NWQwM1xcdTVmOTVcXHU2ZDllXFx1NmZkMVxcdThkNDlcXHU3NzUwXFx1OTRmY1xcdTc2NWVcXHU3YzQxXCIsXHJcblx0XHRcdFx0XCJsYW5cIjogXCJcXHU4NGRkXFx1NWE2YVxcdTY4MGZcXHU2MmU2XFx1N2JlZVxcdTk2MTFcXHU1MTcwXFx1NmY5Y1xcdThjMzBcXHU2M2ZkXFx1ODljOFxcdTYxZDJcXHU3ZjA2XFx1NzBjMlxcdTZlZTVcXHU1NTQ5XFx1NWM5YVxcdTYxZDRcXHU2ZjI0XFx1Njk4NFxcdTY1OTNcXHU3ZjcxXFx1OTU2N1xcdTg5MzRcIixcclxuXHRcdFx0XHRcImxhbmdcIjogXCJcXHU3NDA1XFx1Njk5NFxcdTcyZmNcXHU1ZWNhXFx1OTBjZVxcdTY3MTdcXHU2ZDZhXFx1ODNhOFxcdTg0OTdcXHU1NTc3XFx1OTYwNlxcdTk1MTJcXHU3YTAyXFx1ODc4MlwiLFxyXG5cdFx0XHRcdFwibGFvXCI6IFwiXFx1NjM1ZVxcdTUyYjNcXHU3MjYyXFx1ODAwMVxcdTRmNmNcXHU1OWU1XFx1OTE2YVxcdTcwZDlcXHU2ZDlkXFx1NTUyMFxcdTVkMDJcXHU2ODMzXFx1OTRkMVxcdTk0ZjlcXHU3NWU4XFx1OTFhYVwiLFxyXG5cdFx0XHRcdFwibGVcIjogXCJcXHU1MmQyXFx1NGU1MFxcdTgwOGJcXHU0ZWMyXFx1NTNmYlxcdTU2MWVcXHU2Y2QwXFx1OWNkM1wiLFxyXG5cdFx0XHRcdFwibGVpXCI6IFwiXFx1OTZmN1xcdTk1NmRcXHU4NTdlXFx1NzhjYVxcdTdkMmZcXHU1MTIxXFx1NTc5MlxcdTY0YzJcXHU3YzdiXFx1NmNlYVxcdTdmYjhcXHU4YmQ0XFx1ODM3ZFxcdTU0YTdcXHU2ZjJmXFx1NWFkOFxcdTdmMjdcXHU2YTkxXFx1ODAxMlxcdTkxNzlcIixcclxuXHRcdFx0XHRcImxpbmdcIjogXCJcXHU2OGYxXFx1NTFiN1xcdTYyY2VcXHU3M2IyXFx1ODNmMVxcdTk2ZjZcXHU5Zjg0XFx1OTRjM1xcdTRmMzZcXHU3ZjlhXFx1NTFjY1xcdTcwNzVcXHU5Njc1XFx1NWNhZFxcdTk4ODZcXHU1M2U2XFx1NGVlNFxcdTkxNDNcXHU1ODQ0XFx1ODJkM1xcdTU0NjRcXHU1NmY5XFx1NmNlMFxcdTdlZWJcXHU2N2MzXFx1NjhjMlxcdTc0ZjRcXHU4MDQ2XFx1ODZjOVxcdTdmY2VcXHU5Y2FlXCIsXHJcblx0XHRcdFx0XCJsZW5nXCI6IFwiXFx1Njk1ZVxcdTYxMjNcIixcclxuXHRcdFx0XHRcImxpXCI6IFwiXFx1NTM5OFxcdTY4YThcXHU3MjgxXFx1OWVjZVxcdTdiZjFcXHU3MmY4XFx1NzliYlxcdTZmMTNcXHU3NDA2XFx1Njc0ZVxcdTkxY2NcXHU5Y2E0XFx1NzkzY1xcdTgzODlcXHU4MzU0XFx1NTQwZlxcdTY4MTdcXHU0ZTNkXFx1NTM4OVxcdTUyYjFcXHU3ODNlXFx1NTM4NlxcdTUyMjlcXHU1MDg4XFx1NGY4YlxcdTRmZDBcXHU3NWUyXFx1N2FjYlxcdTdjOTJcXHU2Y2E1XFx1OTZiNlxcdTUyOWJcXHU3NDgzXFx1NTRlOVxcdTRmZWFcXHU0ZmRhXFx1OTBlNlxcdTU3NWNcXHU4MmM4XFx1ODM4NVxcdTg0ZTBcXHU4NWRjXFx1NjM2OVxcdTU0NTZcXHU1NTMzXFx1NTViMVxcdTczMDFcXHU2ZWE3XFx1NmZhN1xcdTkwMjZcXHU1YTBjXFx1NWFlMFxcdTlhOGFcXHU3ZjIxXFx1NzNkZVxcdTY3YTVcXHU2ODBlXFx1OGY3OVxcdTYyM2VcXHU3ODNhXFx1OGE0OFxcdTdmNzlcXHU5NTAyXFx1OWU0MlxcdTc1YTBcXHU3NWFjXFx1ODZjZVxcdTg3MGFcXHU4ODIxXFx1N2IyMFxcdTdiZTVcXHU3YzlkXFx1OTFiNFxcdThkZGVcXHU5NmYzXFx1OWNhMVxcdTljZTJcXHU5ZWU3XCIsXHJcblx0XHRcdFx0XCJsaWFuXCI6IFwiXFx1NGZlOVxcdTgwNTRcXHU4M2IyXFx1OGZkZVxcdTk1NzBcXHU1ZWM5XFx1NjAxY1xcdTZkOWZcXHU1ZTE4XFx1NjU1YlxcdTgxMzhcXHU5NGZlXFx1NjA0YlxcdTcwYmNcXHU3ZWMzXFx1NjMxYlxcdTg1MzlcXHU1OTQxXFx1NmY0YlxcdTZmYzJcXHU1YTA4XFx1NzQwZlxcdTY5NWRcXHU2YjkzXFx1ODFjMVxcdTgxYTZcXHU4OGUyXFx1ODgwYVxcdTljYTJcIixcclxuXHRcdFx0XHRcImxpYW5nXCI6IFwiXFx1N2NhZVxcdTUxYzlcXHU2ODgxXFx1N2NiMVxcdTgyNmZcXHU0ZTI0XFx1OGY4NlxcdTkxY2ZcXHU2NjdlXFx1NGVhZVxcdThjMDVcXHU1ODlhXFx1NjkwYlxcdThlMDlcXHU5NzUzXFx1OWI0OVwiLFxyXG5cdFx0XHRcdFwibGlhb1wiOiBcIlxcdTY0YTlcXHU4MDRhXFx1NTBkYVxcdTc1OTdcXHU3MWNlXFx1NWJlNVxcdThmYmRcXHU2ZjY2XFx1NGU4NlxcdTY0ODJcXHU5NTYzXFx1NWVkNlxcdTY1OTlcXHU4NGZjXFx1NWMyNVxcdTU2MzlcXHU3MzYwXFx1NWJlZVxcdTdmMmRcXHU5NDhjXFx1OWU2OVxcdTgwMjJcIixcclxuXHRcdFx0XHRcImxpZVwiOiBcIlxcdTUyMTdcXHU4OGMyXFx1NzBjOFxcdTUyYTNcXHU3MzBlXFx1NTFiZFxcdTU3ZDJcXHU2ZDBjXFx1OGQ5NFxcdThlOTBcXHU5YjIzXCIsXHJcblx0XHRcdFx0XCJsaW5cIjogXCJcXHU3NDMzXFx1Njc5N1xcdTc4ZjdcXHU5NzE2XFx1NGUzNFxcdTkwYmJcXHU5Y2RlXFx1NmRjYlxcdTUxZGJcXHU4ZDQxXFx1NTQxZFxcdTg1M2FcXHU1ZDk5XFx1NWVlYVxcdTkwNzRcXHU2YWE5XFx1OGY5YVxcdTc3YjVcXHU3Y2JjXFx1OGU4ZlxcdTllOWZcIixcclxuXHRcdFx0XHRcImxpdVwiOiBcIlxcdTZlOWNcXHU3NDA5XFx1NjliNFxcdTc4NmJcXHU5OThmXFx1NzU1OVxcdTUyMThcXHU3NjI0XFx1NmQ0MVxcdTY3ZjNcXHU1MTZkXFx1NjJhMVxcdTUwN2JcXHU4NDhjXFx1NmNkNlxcdTZkNGZcXHU5MDViXFx1OWE5ZFxcdTdlZmFcXHU2NWQyXFx1NzE5OFxcdTk1MGRcXHU5NTRmXFx1OWU2OFxcdTkzOGZcIixcclxuXHRcdFx0XHRcImxvbmdcIjogXCJcXHU5Zjk5XFx1ODA0YlxcdTU0OTlcXHU3YjNjXFx1N2FiZlxcdTk2ODZcXHU1Nzg0XFx1NjJlMlxcdTk2NDdcXHU1ZjA0XFx1NTc4NVxcdTgzMGZcXHU2Y2Y3XFx1NzNkMVxcdTY4MGFcXHU4MGU3XFx1NzgzYlxcdTc2NDNcIixcclxuXHRcdFx0XHRcImxvdVwiOiBcIlxcdTY5N2NcXHU1YTA0XFx1NjQwMlxcdTdiZDNcXHU2ZjBmXFx1OTY0YlxcdTU1YmRcXHU1ZDVkXFx1OTU0MlxcdTc2MThcXHU4MDI3XFx1ODc3Y1xcdTlhYzVcIixcclxuXHRcdFx0XHRcImx1XCI6IFwiXFx1ODJhNlxcdTUzNjJcXHU5ODg1XFx1NWU5MFxcdTcwODlcXHU2M2IzXFx1NTM2NFxcdTg2NGZcXHU5YzgxXFx1OWU5M1xcdTc4OGNcXHU5NzMyXFx1OGRlZlxcdThkNDJcXHU5ZTdmXFx1NmY1ZVxcdTc5ODRcXHU1ZjU1XFx1OTY0NlxcdTYyMmVcXHU1Nzg2XFx1NjQ0NVxcdTY0YjhcXHU1NjVjXFx1NmNmOFxcdTZlMGNcXHU2ZjA5XFx1NzQ5MFxcdTY4MGNcXHU2YTc5XFx1OGY3M1xcdThmODJcXHU4Zjk4XFx1NmMwN1xcdTgwZWFcXHU5NTY1XFx1OWUyY1xcdTllNmRcXHU3YzBmXFx1ODIzYlxcdTljODhcIixcclxuXHRcdFx0XHRcImx2XCI6IFwiXFx1OWE3NFxcdTU0MTVcXHU5NGRkXFx1NGZhM1xcdTY1YzVcXHU1YzY1XFx1NWM2MVxcdTdmMTVcXHU4NjUxXFx1NmMyZlxcdTVmOGJcXHU3Mzg3XFx1NmVlNFxcdTdlZmZcXHU2MzRiXFx1OTVmZVxcdTY5ODhcXHU4MTgyXFx1N2EwNlxcdTg5MWJcIixcclxuXHRcdFx0XHRcImx1YW5cIjogXCJcXHU1Y2U2XFx1NWI2YVxcdTZlZTZcXHU1Mzc1XFx1NGU3MVxcdTY4M2VcXHU5ZTNlXFx1OTJhZVwiLFxyXG5cdFx0XHRcdFwibHVlXCI6IFwiXFx1NjNhMFxcdTc1NjVcXHU5NTBhXCIsXHJcblx0XHRcdFx0XCJsdW5cIjogXCJcXHU4ZjZlXFx1NGYyNlxcdTRlZDFcXHU2Y2E2XFx1N2ViNlxcdThiYmFcXHU1NmY1XCIsXHJcblx0XHRcdFx0XCJsdW9cIjogXCJcXHU4NDFkXFx1ODdiYVxcdTdmNTdcXHU5MDNiXFx1OTUyM1xcdTdiYTlcXHU5YWExXFx1ODhmOFxcdTg0M2RcXHU2ZDFiXFx1OWE4NlxcdTdlZGNcXHU1MDJlXFx1ODM2NlxcdTY0NWVcXHU3MzIxXFx1NmNmYVxcdTY5MjRcXHU4MTM2XFx1OTU1OVxcdTc2MzBcXHU5NmQyXCIsXHJcblx0XHRcdFx0XCJtYVwiOiBcIlxcdTU5ODhcXHU5ZWJiXFx1NzM5YlxcdTc4MDFcXHU4NjgyXFx1OWE2Y1xcdTlhODJcXHU1NjFiXFx1NTQxN1xcdTU1MWJcXHU3MmI4XFx1NWIzN1xcdTY3NjlcXHU5ZWJkXCIsXHJcblx0XHRcdFx0XCJtYWlcIjogXCJcXHU1N2NiXFx1NGU3MFxcdTllYTZcXHU1MzU2XFx1OGZjOFxcdTgxMDlcXHU1MmEyXFx1ODM2Y1xcdTU0YWFcXHU5NzNlXCIsXHJcblx0XHRcdFx0XCJtYW5cIjogXCJcXHU3NzkyXFx1OTk5MlxcdTg2ZWVcXHU2ZWUxXFx1ODUxM1xcdTY2ZmNcXHU2MTYyXFx1NmYyYlxcdThjMjlcXHU1ODgxXFx1NWU1NFxcdTdmMjZcXHU3MWIzXFx1OTU1OFxcdTk4OWZcXHU4N2E4XFx1OWNkN1xcdTk3OTRcIixcclxuXHRcdFx0XHRcIm1hbmdcIjogXCJcXHU4MjkyXFx1ODMyYlxcdTc2ZjJcXHU1ZmQ5XFx1ODNiZFxcdTkwOTlcXHU2ZjJkXFx1NjcyNlxcdTc4NmRcXHU4N2QyXCIsXHJcblx0XHRcdFx0XCJtZW5nXCI6IFwiXFx1NmMxM1xcdTg0MGNcXHU4NDk5XFx1NmFhY1xcdTc2ZGZcXHU5NTMwXFx1NzMxYlxcdTY4YTZcXHU1YjVmXFx1NTJkMFxcdTc1MGRcXHU3N2EyXFx1NjFmNVxcdTc5MWVcXHU4NjdiXFx1ODcyMlxcdTg4MTNcXHU4MjRiXFx1ODI2OFxcdTllZmVcIixcclxuXHRcdFx0XHRcIm1pYW9cIjogXCJcXHU3MzJiXFx1ODJkN1xcdTYzY2ZcXHU3Nzg0XFx1ODVkMFxcdTc5ZDJcXHU2ZTNhXFx1NWU5OVxcdTU5OTlcXHU1NWI1XFx1OTA4OFxcdTdmMDhcXHU3ZjJhXFx1Njc2YVxcdTZkZmNcXHU3NzA3XFx1OWU0YlxcdTg3MzFcIixcclxuXHRcdFx0XHRcIm1hb1wiOiBcIlxcdTgzMDVcXHU5NTFhXFx1NmJkYlxcdTc3ZGJcXHU5NGM2XFx1NTM2ZlxcdTgzMDJcXHU1MTkyXFx1NWUzZFxcdThjOGNcXHU4ZDM4XFx1NGY5NFxcdTg4YTRcXHU1MmQ2XFx1ODMwNlxcdTVjYzFcXHU3NDQxXFx1NjYzNFxcdTcyNjZcXHU4MDA0XFx1NjVjNFxcdTYxY2JcXHU3NzgwXFx1ODZkMVxcdTg3NjVcXHU4N2NhXFx1OWFlNlwiLFxyXG5cdFx0XHRcdFwibWVcIjogXCJcXHU0ZTQ4XCIsXHJcblx0XHRcdFx0XCJtZWlcIjogXCJcXHU3M2FiXFx1Njc5YVxcdTY4ODVcXHU5MTc2XFx1OTcwOVxcdTcxNjRcXHU2Y2ExXFx1NzcwOVxcdTVhOTJcXHU5NTQxXFx1NmJjZlxcdTdmOGVcXHU2NjI3XFx1NWJkMFxcdTU5YjlcXHU1YTlhXFx1NTc3NlxcdTgzOTNcXHU1ZDRiXFx1NzMzOFxcdTZkN2NcXHU2ZTQ0XFx1Njk2M1xcdTk1NDVcXHU5ZTViXFx1ODg4MlxcdTliNDVcIixcclxuXHRcdFx0XHRcIm1lblwiOiBcIlxcdTk1ZThcXHU5NWY3XFx1NGVlY1xcdTYyNmFcXHU3MzlmXFx1NzExNlxcdTYxZDFcXHU5NDk0XCIsXHJcblx0XHRcdFx0XCJtaVwiOiBcIlxcdTc3MmZcXHU5MTlhXFx1OTc2MVxcdTdjZGNcXHU4ZmY3XFx1OGMxY1xcdTVmMjVcXHU3YzczXFx1NzlkOFxcdTg5YzVcXHU2Y2NjXFx1ODcxY1xcdTViYzZcXHU1ZTQyXFx1ODI4OFxcdTUxOTZcXHU4YzI3XFx1ODYzY1xcdTU2MjdcXHU3MzE1XFx1NzM2ZlxcdTZjNjhcXHU1YjkzXFx1NWYyZFxcdTgxMTJcXHU2NTQ5XFx1N2NmOFxcdTdlM2JcXHU5ZThiXCIsXHJcblx0XHRcdFx0XCJtaWFuXCI6IFwiXFx1NjhjOVxcdTc3MjBcXHU3ZWY1XFx1NTE5NVxcdTUxNGRcXHU1MmM5XFx1NWEyOVxcdTdmMDVcXHU5NzYyXFx1NmM5NFxcdTZlNGVcXHU4MTdjXFx1NzcwNFwiLFxyXG5cdFx0XHRcdFwibWllXCI6IFwiXFx1ODUxMVxcdTcwNmRcXHU1NGE5XFx1ODgxYlxcdTdiZmVcIixcclxuXHRcdFx0XHRcIm1pblwiOiBcIlxcdTZjMTFcXHU2MmJmXFx1NzZiZlxcdTY1NGZcXHU2MGFmXFx1OTVmZFxcdTgyZTBcXHU1Y2I3XFx1OTVmNVxcdTZjZWZcXHU3M2M5XCIsXHJcblx0XHRcdFx0XCJtaW5nXCI6IFwiXFx1NjYwZVxcdTg3OWZcXHU5ZTIzXFx1OTRlZFxcdTU0MGRcXHU1NDdkXFx1NTFhNVxcdTgzMTdcXHU2ZTlmXFx1NjY5ZFxcdTc3OTFcXHU5MTY5XCIsXHJcblx0XHRcdFx0XCJtaXVcIjogXCJcXHU4YzJjXCIsXHJcblx0XHRcdFx0XCJtb1wiOiBcIlxcdTY0NzhcXHU2NDc5XFx1ODYxMVxcdTZhMjFcXHU4MTljXFx1NzhlOFxcdTY0NjlcXHU5YjU0XFx1NjJiOVxcdTY3MmJcXHU4M2FiXFx1NThhOFxcdTllZDhcXHU2Y2FiXFx1NmYyMFxcdTViZGVcXHU5NjRjXFx1OGMxZlxcdTgzMDlcXHU4NGU2XFx1OTk4ZFxcdTVhZWJcXHU5NTQ2XFx1NzllM1xcdTc2M2NcXHU4MDMxXFx1ODdjNlxcdThjOGFcXHU4Yzk4XCIsXHJcblx0XHRcdFx0XCJtb3VcIjogXCJcXHU4YzBiXFx1NzI1ZlxcdTY3ZDBcXHU1M2I2XFx1NTRkZVxcdTVhN2FcXHU3NzM4XFx1OTM2YVwiLFxyXG5cdFx0XHRcdFwibXVcIjogXCJcXHU2MmM3XFx1NzI2MVxcdTRlYTlcXHU1OWM2XFx1NmJjZFxcdTU4OTNcXHU2NmFlXFx1NWU1NVxcdTUyZGZcXHU2MTU1XFx1NjcyOFxcdTc2ZWVcXHU3NzY2XFx1NzI2N1xcdTdhNDZcXHU0ZWViXFx1ODJkY1xcdTU0NTJcXHU2YzkwXFx1NmJlYVxcdTk0YmNcIixcclxuXHRcdFx0XHRcIm5hXCI6IFwiXFx1NjJmZlxcdTU0ZWFcXHU1NDUwXFx1OTRhMFxcdTkwYTNcXHU1YTFjXFx1N2ViM1xcdTUxODVcXHU2MzdhXFx1ODBhZFxcdTk1NGVcXHU4ODcyXFx1N2JhY1wiLFxyXG5cdFx0XHRcdFwibmFpXCI6IFwiXFx1NmMxNlxcdTRlNDNcXHU1OTc2XFx1ODAxMFxcdTU5NDhcXHU5ZjEwXFx1ODI3ZlxcdTg0MThcXHU2N2YwXCIsXHJcblx0XHRcdFx0XCJuYW5cIjogXCJcXHU1MzU3XFx1NzUzN1xcdTk2YmVcXHU1NmNhXFx1NTU4M1xcdTU2ZTFcXHU2OTYwXFx1ODE2OVxcdTg3N2JcXHU4ZDY3XCIsXHJcblx0XHRcdFx0XCJuYW9cIjogXCJcXHU2MzIwXFx1ODExMVxcdTYwN2NcXHU5NWY5XFx1NWI2Y1xcdTU3YjRcXHU3MzMxXFx1NzQ1OVxcdTc4NDdcXHU5NGQ5XFx1ODZmMlwiLFxyXG5cdFx0XHRcdFwibmVcIjogXCJcXHU2ZGQ2XFx1NTQ2MlxcdThiYjdcIixcclxuXHRcdFx0XHRcIm5laVwiOiBcIlxcdTk5ODFcIixcclxuXHRcdFx0XHRcIm5lblwiOiBcIlxcdTVhZTlcXHU4MGZkXFx1Njc5OFxcdTYwNDFcIixcclxuXHRcdFx0XHRcIm5pXCI6IFwiXFx1NTlhZVxcdTk3MTNcXHU1MDJhXFx1NmNlNVxcdTVjM2NcXHU2MmRmXFx1NGY2MFxcdTUzM2ZcXHU4MTdiXFx1OTAwNlxcdTZlYmFcXHU0ZjMyXFx1NTc2ZFxcdTczMGFcXHU2MDI5XFx1NmVlMFxcdTY2MzVcXHU2NWNlXFx1Nzk2MlxcdTYxNWRcXHU3NzY4XFx1OTRjY1xcdTljYjVcIixcclxuXHRcdFx0XHRcIm5pYW5cIjogXCJcXHU4NTJiXFx1NjJjOFxcdTVlNzRcXHU3OGJlXFx1NjRiNVxcdTYzN2JcXHU1ZmY1XFx1NWVmZlxcdThmODdcXHU5ZWNmXFx1OWM4N1xcdTljYjZcIixcclxuXHRcdFx0XHRcIm5pYW5nXCI6IFwiXFx1NWExOFxcdTkxN2ZcIixcclxuXHRcdFx0XHRcIm5pYW9cIjogXCJcXHU5ZTFmXFx1NWMzZlxcdTgzMTFcXHU1YjMyXFx1ODEzMlxcdTg4ODVcIixcclxuXHRcdFx0XHRcIm5pZVwiOiBcIlxcdTYzNGZcXHU4MDQyXFx1NWI3ZFxcdTU1NmVcXHU5NTRhXFx1OTU0ZFxcdTZkODVcXHU0ZTVjXFx1OTY2N1xcdTg2MTZcXHU1NWViXFx1ODA4MFxcdTk4OWVcXHU4MWVjXFx1OGU1MVwiLFxyXG5cdFx0XHRcdFwibmluXCI6IFwiXFx1NjBhOFxcdTY3ZTBcIixcclxuXHRcdFx0XHRcIm5pbmdcIjogXCJcXHU3MmRlXFx1NTFkZFxcdTViODFcXHU2MmU3XFx1NmNkZVxcdTRmNWVcXHU4NGU1XFx1NTQ5YlxcdTc1MmZcXHU4MDRkXCIsXHJcblx0XHRcdFx0XCJuaXVcIjogXCJcXHU3MjViXFx1NjI2ZFxcdTk0YWVcXHU3ZWJkXFx1NzJjM1xcdTVmZjhcXHU1OTllXFx1ODZiNFwiLFxyXG5cdFx0XHRcdFwibm9uZ1wiOiBcIlxcdTgxMTNcXHU2ZDUzXFx1NTE5Y1xcdTRmYWNcIixcclxuXHRcdFx0XHRcIm51XCI6IFwiXFx1NTk3NFxcdTUyYWFcXHU2MDEyXFx1NTQ3NlxcdTVlMTFcXHU1ZjI5XFx1ODBlY1xcdTViNjVcXHU5YTdkXCIsXHJcblx0XHRcdFx0XCJudlwiOiBcIlxcdTU5NzNcXHU2MDY3XFx1OTQ5NVxcdTg4NDRcIixcclxuXHRcdFx0XHRcIm51YW5cIjogXCJcXHU2Njk2XCIsXHJcblx0XHRcdFx0XCJudWVudWVcIjogXCJcXHU4NjUwXCIsXHJcblx0XHRcdFx0XCJudWVcIjogXCJcXHU3NTlmXFx1OGMxMVwiLFxyXG5cdFx0XHRcdFwibnVvXCI6IFwiXFx1NjMyYVxcdTYxZTZcXHU3Y2VmXFx1OGJmYVxcdTUwYTlcXHU2NDI2XFx1NTU4ZlxcdTk1MThcIixcclxuXHRcdFx0XHRcIm91XCI6IFwiXFx1NTRlNlxcdTZiMjdcXHU5ZTI1XFx1NmJiNFxcdTg1ZDVcXHU1NDU1XFx1NTA3NlxcdTZjYTRcXHU2MDA0XFx1NzRlZlxcdTgwMjZcIixcclxuXHRcdFx0XHRcInBhXCI6IFwiXFx1NTU2YVxcdThkYjRcXHU3MjJjXFx1NWUxNVxcdTYwMTVcXHU3NDM2XFx1ODQ2OVxcdTdiNjJcIixcclxuXHRcdFx0XHRcInBhaVwiOiBcIlxcdTYyY2RcXHU2MzkyXFx1NzI0Y1xcdTVmOThcXHU2ZTQzXFx1NmQzZVxcdTRmZjNcXHU4NDhlXCIsXHJcblx0XHRcdFx0XCJwYW5cIjogXCJcXHU2NTAwXFx1NmY1OFxcdTc2ZDhcXHU3OGQwXFx1NzZmY1xcdTc1NTRcXHU1MjI0XFx1NTNkYlxcdTcyM2ZcXHU2Y2VlXFx1ODhhMlxcdTg5N2JcXHU4N2UwXFx1OGU1MlwiLFxyXG5cdFx0XHRcdFwicGFuZ1wiOiBcIlxcdTRlNTNcXHU1ZTllXFx1NjVjMVxcdTgwMmFcXHU4MGQ2XFx1NmVjMlxcdTkwMDRcIixcclxuXHRcdFx0XHRcInBhb1wiOiBcIlxcdTYyOWJcXHU1NDg2XFx1NTIyOFxcdTcwYWVcXHU4ODhkXFx1OGRkMVxcdTZjZTFcXHU1MzBmXFx1NzJjZFxcdTVlOTZcXHU4MTJjXFx1NzViMVwiLFxyXG5cdFx0XHRcdFwicGVpXCI6IFwiXFx1NTQ3OFxcdTgwZGFcXHU1N2Y5XFx1ODhmNFxcdThkNTRcXHU5NjZhXFx1OTE0ZFxcdTRmNjlcXHU2YzliXFx1NjM4YVxcdThmOTRcXHU1ZTE0XFx1NmRlMFxcdTY1YzZcXHU5NTJiXFx1OTE4NVxcdTk3MDhcIixcclxuXHRcdFx0XHRcInBlblwiOiBcIlxcdTU1YjdcXHU3NmM2XFx1NmU1M1wiLFxyXG5cdFx0XHRcdFwicGVuZ1wiOiBcIlxcdTc4MzBcXHU2MmE4XFx1NzBmOVxcdTZmOGVcXHU1ZjZkXFx1ODRlY1xcdTY4ZGFcXHU3ODdjXFx1N2JmN1xcdTgxYThcXHU2NzBiXFx1OWU0ZlxcdTYzNjdcXHU3OGIwXFx1NTc2ZlxcdTU4MGJcXHU1NjJkXFx1NjAyNlxcdTg3ZGJcIixcclxuXHRcdFx0XHRcInBpXCI6IFwiXFx1NzgxMlxcdTk3MzlcXHU2Mjc5XFx1NjJhYlxcdTUyODhcXHU3NDM1XFx1NmJkN1xcdTU1NjRcXHU4MTNlXFx1NzViMlxcdTc2YWVcXHU1MzM5XFx1NzVkZVxcdTUwZmJcXHU1YzQxXFx1OGI2Y1xcdTRlMTVcXHU5Njc0XFx1OTBiM1xcdTkwZWJcXHU1NzJlXFx1OWYxOVxcdTY0ZDdcXHU1NjdjXFx1NWU4MFxcdTVhYjJcXHU3ZWIwXFx1Njc4N1xcdTc1MTNcXHU3NzY1XFx1N2Y3NFxcdTk0Y2RcXHU3NWU2XFx1NzY1NlxcdTc1OGJcXHU4NjhkXFx1OGM5NFwiLFxyXG5cdFx0XHRcdFwicGlhblwiOiBcIlxcdTdiYzdcXHU1MDRmXFx1NzI0N1xcdTlhOTdcXHU4YzFkXFx1OWE4OFxcdTcyOGZcXHU4MGZjXFx1ODkwYVxcdTdmZTlcXHU4ZTQxXCIsXHJcblx0XHRcdFx0XCJwaWFvXCI6IFwiXFx1OThkOFxcdTZmMDJcXHU3NGUyXFx1Nzk2OFxcdTUyN2RcXHU1NjBjXFx1NWFkNlxcdTdmMjVcXHU2YjhkXFx1Nzc5ZlxcdTg3YjVcIixcclxuXHRcdFx0XHRcInBpZVwiOiBcIlxcdTY0ODdcXHU3N2E1XFx1NGUzZlxcdTgyZTRcXHU2YzE1XCIsXHJcblx0XHRcdFx0XCJwaW5cIjogXCJcXHU2MmZjXFx1OTg5MVxcdThkMmJcXHU1NGMxXFx1ODA1OFxcdTYyZGFcXHU1OWQ4XFx1NWFkNFxcdTY5ODBcXHU3MjVkXFx1OThhNlwiLFxyXG5cdFx0XHRcdFwicGluZ1wiOiBcIlxcdTRlNTJcXHU1NzZhXFx1ODJmOVxcdTg0MGRcXHU1ZTczXFx1NTFlZFxcdTc0ZjZcXHU4YmM0XFx1NWM0ZlxcdTRmZGNcXHU1YTA5XFx1NjdiMFxcdTljODZcIixcclxuXHRcdFx0XHRcInBvXCI6IFwiXFx1NTc2MVxcdTZjZmNcXHU5ODg3XFx1NWE0NlxcdTc4MzRcXHU5YjQ0XFx1OGZlYlxcdTdjOTVcXHU1M2Y1XFx1OTEzMVxcdTZlYTVcXHU3M2MwXFx1OTQ4YlxcdTk0YjdcXHU3NmE0XFx1N2IzOFwiLFxyXG5cdFx0XHRcdFwicG91XCI6IFwiXFx1NTI1NlxcdTg4ZDJcXHU4ZTIzXCIsXHJcblx0XHRcdFx0XCJwdVwiOiBcIlxcdTYyNTFcXHU5NGZhXFx1NGVjNlxcdTgzODZcXHU4NDYxXFx1ODNlOVxcdTg0YjJcXHU1N2Q0XFx1NjczNFxcdTU3MDNcXHU2NjZlXFx1NmQ2NlxcdThjMzFcXHU2NmRkXFx1NzAxMVxcdTUzMGRcXHU1NjU3XFx1NmZlZVxcdTc0OWVcXHU2YzA2XFx1OTU2NFxcdTk1NjhcXHU4ZTdjXCIsXHJcblx0XHRcdFx0XCJxaVwiOiBcIlxcdTY3MWZcXHU2YjNhXFx1NjgxNlxcdTYyMWFcXHU1OWJiXFx1NGUwM1xcdTUxYzRcXHU2ZjA2XFx1NjdkMlxcdTZjOGZcXHU1MTc2XFx1NjhjYlxcdTU5NDdcXHU2YjY3XFx1NzU2NlxcdTVkMGVcXHU4MTEwXFx1OWY1MFxcdTY1ZDdcXHU3OTQ4XFx1Nzk0MVxcdTlhOTFcXHU4ZDc3XFx1NWM4MlxcdTRlNWVcXHU0ZjAxXFx1NTQyZlxcdTU5NTFcXHU3ODBjXFx1NTY2OFxcdTZjMTRcXHU4ZmM0XFx1NWYwM1xcdTZjN2RcXHU2Y2UzXFx1OGJhYlxcdTRlOWZcXHU0ZTkzXFx1NTczYlxcdTgyOTFcXHU4NDBiXFx1ODQ3YVxcdTU2MDFcXHU1YzdhXFx1NWM5MFxcdTZjNTRcXHU2ZGM3XFx1OWE5MFxcdTdlZWVcXHU3NDJhXFx1NzQyNlxcdTY3NWVcXHU2ODY0XFx1NjllZFxcdTZiMzlcXHU3OTdhXFx1NjFhOVxcdTc4OWJcXHU4NmY0XFx1ODcxZVxcdTdkYTZcXHU3ZGFlXFx1OGRiZlxcdThlNGFcXHU5Y2NkXFx1OWU5MlwiLFxyXG5cdFx0XHRcdFwicWlhXCI6IFwiXFx1NjM5MFxcdTYwNzBcXHU2ZDNkXFx1ODQ1Y1wiLFxyXG5cdFx0XHRcdFwicWlhblwiOiBcIlxcdTcyNzVcXHU2MjY2XFx1OTQ4ZVxcdTk0YzVcXHU1MzQzXFx1OGZjMVxcdTdiN2VcXHU0ZWRmXFx1OGMyNlxcdTRlN2VcXHU5ZWQ0XFx1OTRiMVxcdTk0YjNcXHU1MjRkXFx1NmY1Y1xcdTkwNjNcXHU2ZDQ1XFx1OGMzNFxcdTU4MTFcXHU1ZDRjXFx1NmIyMFxcdTZiNDlcXHU0ZjY1XFx1OTYyMVxcdTgyOGFcXHU4MmExXFx1ODM2OFxcdTYzYWVcXHU1YzhkXFx1NjBhZFxcdTYxNGFcXHU5YTllXFx1NjQzNFxcdTg5MzBcXHU3ZjMxXFx1NjkyMFxcdTgwYjdcXHU2MTA2XFx1OTRhNFxcdTg2NTRcXHU3YjlkXCIsXHJcblx0XHRcdFx0XCJxaWFuZ1wiOiBcIlxcdTY3YWFcXHU1NDViXFx1ODE1NFxcdTdmOGNcXHU1ODk5XFx1ODUzN1xcdTVmM2FcXHU2MmEyXFx1NWFmMVxcdTZhMmZcXHU2MjE3XFx1NzA5ZFxcdTk1MTZcXHU5NTM1XFx1OTU2YVxcdTg5NDFcXHU4NzIzXFx1N2Y5ZlxcdThkZWJcXHU4ZGM0XCIsXHJcblx0XHRcdFx0XCJxaWFvXCI6IFwiXFx1NmE0N1xcdTk1MzlcXHU2NTcyXFx1NjA4NFxcdTY4NjVcXHU3N2E3XFx1NGU1NFxcdTRmYThcXHU1ZGU3XFx1OTc5OFxcdTY0YWNcXHU3ZmQ4XFx1NWNlZFxcdTRmY2ZcXHU3YThkXFx1NTI4MVxcdThiZWVcXHU4YzJmXFx1ODM1ZVxcdTYxMDBcXHU2MTk0XFx1N2YzMlxcdTZhMzVcXHU2YmYzXFx1Nzg1N1xcdThkZjdcXHU5NzkyXCIsXHJcblx0XHRcdFx0XCJxaWVcIjogXCJcXHU1MjA3XFx1ODMwNFxcdTRlMTRcXHU2MDJmXFx1N2E4M1xcdTkwYzRcXHU1NTNjXFx1NjBlY1xcdTU5YmVcXHU2MzA4XFx1OTUzMlxcdTdiYTdcIixcclxuXHRcdFx0XHRcInFpblwiOiBcIlxcdTk0YTZcXHU0ZmI1XFx1NGViMlxcdTc5ZTZcXHU3NDM0XFx1NTJlNFxcdTgyYjlcXHU2NGQyXFx1NzliZFxcdTViZGRcXHU2YzgxXFx1ODJhOVxcdTg0YzFcXHU4NTcyXFx1NjNmZlxcdTU0MjNcXHU1NWVhXFx1NTY1OVxcdTZlYjFcXHU2YThlXFx1ODc5M1xcdTg4N2VcIixcclxuXHRcdFx0XHRcInFpbmdcIjogXCJcXHU5NzUyXFx1OGY3YlxcdTZjMjJcXHU1MDNlXFx1NTM3ZlxcdTZlMDVcXHU2NGNlXFx1NjY3NFxcdTZjMzBcXHU2MGM1XFx1OTg3N1xcdThiZjdcXHU1ZTg2XFx1NTAyOVxcdTgyZDhcXHU1NzBhXFx1NmFhMFxcdTc4ZWNcXHU4NzNiXFx1N2Y0NFxcdTdiOTBcXHU4YjI2XFx1OWNhZFxcdTllZTVcIixcclxuXHRcdFx0XHRcInFpb25nXCI6IFwiXFx1NzQzY1xcdTdhNzdcXHU5MDliXFx1ODMxNVxcdTdhNzlcXHU3YjQ3XFx1OTI4ZVwiLFxyXG5cdFx0XHRcdFwicWl1XCI6IFwiXFx1NzljYlxcdTRlMThcXHU5MGIxXFx1NzQwM1xcdTZjNDJcXHU1NmRhXFx1OTE0YlxcdTZjYzVcXHU0ZmM1XFx1NmMzZFxcdTVkZWZcXHU4MjdkXFx1NzJiMFxcdTZlNmJcXHU5MDExXFx1OTA1MlxcdTY5NzhcXHU4ZDQ3XFx1OWUyMFxcdTg2NmNcXHU4NmFmXFx1ODc2NFxcdTg4ZDhcXHU3Y2Q3XFx1OWNjNVxcdTlmM2RcIixcclxuXHRcdFx0XHRcInF1XCI6IFwiXFx1OGQ4YlxcdTUzM2FcXHU4NmM2XFx1NjZmMlxcdThlYWZcXHU1YzQ4XFx1OWE3MVxcdTZlMjBcXHU1M2Q2XFx1NWEzNlxcdTlmOGJcXHU4ZGEzXFx1NTNiYlxcdThiY2VcXHU1MmFjXFx1ODU1NlxcdTg2MjdcXHU1Yzk2XFx1ODg2MlxcdTk2MTJcXHU3NGE5XFx1ODlkMVxcdTZjMGRcXHU3OTViXFx1NzhmMlxcdTc2NmZcXHU4NmQwXFx1ODgzY1xcdTllYjRcXHU3N2JmXFx1OWVlMlwiLFxyXG5cdFx0XHRcdFwicXVhblwiOiBcIlxcdTU3MDhcXHU5OGE3XFx1Njc0M1xcdTkxOWJcXHU2Y2M5XFx1NTE2OFxcdTc1Y2FcXHU2MmYzXFx1NzJhY1xcdTUyMzhcXHU1MjlkXFx1OGJlMFxcdTgzNDNcXHU3MzdlXFx1NjA5YlxcdTdlZmJcXHU4ZjgxXFx1NzU0ZVxcdTk0ZThcXHU4NzM3XFx1N2I0Y1xcdTliMDhcIixcclxuXHRcdFx0XHRcInF1ZVwiOiBcIlxcdTdmM2FcXHU3MDk0XFx1NzYzOFxcdTUzNzRcXHU5ZTRhXFx1NjliN1xcdTc4NmVcXHU5NmMwXFx1OTYxOVxcdTYwYWJcIixcclxuXHRcdFx0XHRcInF1blwiOiBcIlxcdTg4ZDlcXHU3ZmE0XFx1OTAyMVwiLFxyXG5cdFx0XHRcdFwicmFuXCI6IFwiXFx1NzEzNlxcdTcxYzNcXHU1MTg5XFx1NjdkM1xcdTgyZDJcXHU5YWVmXCIsXHJcblx0XHRcdFx0XCJyYW5nXCI6IFwiXFx1NzRlNFxcdTU4ZTRcXHU2NTE4XFx1NTZiN1xcdThiYTlcXHU3OWIzXFx1N2E3MFwiLFxyXG5cdFx0XHRcdFwicmFvXCI6IFwiXFx1OTk3NlxcdTYyNzBcXHU3ZWQ1XFx1ODM1YlxcdTVhMDZcXHU2ODYxXCIsXHJcblx0XHRcdFx0XCJydW9cIjogXCJcXHU2MGY5XFx1ODJlNVxcdTVmMzFcIixcclxuXHRcdFx0XHRcInJlXCI6IFwiXFx1NzBlZFxcdTUwNGNcIixcclxuXHRcdFx0XHRcInJlblwiOiBcIlxcdTU4ZWNcXHU0ZWMxXFx1NGViYVxcdTVmY2RcXHU5N2U3XFx1NGVmYlxcdThiYTRcXHU1MjAzXFx1NTk4YVxcdTdlYWJcXHU0ZWRlXFx1ODM0ZlxcdTg0NWFcXHU5OTZhXFx1OGY2YlxcdTdhMTRcXHU4ODdkXCIsXHJcblx0XHRcdFx0XCJyZW5nXCI6IFwiXFx1NjI1NFxcdTRlY2RcIixcclxuXHRcdFx0XHRcInJpXCI6IFwiXFx1NjVlNVwiLFxyXG5cdFx0XHRcdFwicm9uZ1wiOiBcIlxcdTYyMGVcXHU4MzM4XFx1ODRjOVxcdTgzNjNcXHU4NzhkXFx1NzE5NFxcdTZlYjZcXHU1YmI5XFx1N2VkMlxcdTUxOTdcXHU1ZDU4XFx1NzJlOFxcdTdmMWJcXHU2OTk1XFx1ODc3ZVwiLFxyXG5cdFx0XHRcdFwicm91XCI6IFwiXFx1NjNjOVxcdTY3ZDRcXHU4MDg5XFx1N2NjNVxcdThlNDJcXHU5N2EzXCIsXHJcblx0XHRcdFx0XCJydVwiOiBcIlxcdTgzMzlcXHU4ODE1XFx1NTExMlxcdTViN2FcXHU1OTgyXFx1OGZiMVxcdTRlNzNcXHU2YzVkXFx1NTE2NVxcdTg5MjVcXHU4NGQwXFx1ODViN1xcdTU2ODVcXHU2ZDMzXFx1NmViZFxcdTZmZTFcXHU5NGY3XFx1ODk2NlxcdTk4YTVcIixcclxuXHRcdFx0XHRcInJ1YW5cIjogXCJcXHU4ZjZmXFx1OTYyZVxcdTY3MGFcIixcclxuXHRcdFx0XHRcInJ1aVwiOiBcIlxcdTg1NGFcXHU3NDVlXFx1OTUxMFxcdTgyYWVcXHU4NTY0XFx1Nzc3ZlxcdTg2OGJcIixcclxuXHRcdFx0XHRcInJ1blwiOiBcIlxcdTk1ZjBcXHU2ZGE2XCIsXHJcblx0XHRcdFx0XCJzYVwiOiBcIlxcdTY0OTJcXHU2ZDEyXFx1ODQyOFxcdTUzNDVcXHU0ZWU4XFx1NjMzMlxcdTk4ZDJcIixcclxuXHRcdFx0XHRcInNhaVwiOiBcIlxcdTgxNmVcXHU5Y2MzXFx1NTg1ZVxcdThkNWJcXHU1NjdiXCIsXHJcblx0XHRcdFx0XCJzYW5cIjogXCJcXHU0ZTA5XFx1NTNjMVxcdTRmMWVcXHU2NTYzXFx1NWY2MVxcdTk5OTNcXHU2YzM1XFx1NmJmNVxcdTdjYzFcXHU5NzMwXCIsXHJcblx0XHRcdFx0XCJzYW5nXCI6IFwiXFx1Njg1MVxcdTU1ZDNcXHU0ZTI3XFx1NjQyMVxcdTc4YzlcXHU5OGExXCIsXHJcblx0XHRcdFx0XCJzYW9cIjogXCJcXHU2NDE0XFx1OWE5YVxcdTYyNmJcXHU1YWMyXFx1NTdmZFxcdTgxY2FcXHU3NjE5XFx1OWNjYlwiLFxyXG5cdFx0XHRcdFwic2VcIjogXCJcXHU3NDVmXFx1ODI3MlxcdTZkYTlcXHU1NTZjXFx1OTRlOVxcdTk0ZWZcXHU3YTUxXCIsXHJcblx0XHRcdFx0XCJzZW5cIjogXCJcXHU2OGVlXCIsXHJcblx0XHRcdFx0XCJzZW5nXCI6IFwiXFx1NTBlN1wiLFxyXG5cdFx0XHRcdFwic2hhXCI6IFwiXFx1ODM4ZVxcdTc4MDJcXHU2NzQwXFx1NTIzOVxcdTZjOTlcXHU3ZWIxXFx1NTBiYlxcdTU1NjVcXHU3MTVlXFx1ODEwZVxcdTZiNDNcXHU3NWU3XFx1ODhkZlxcdTk3MGVcXHU5Y2E4XCIsXHJcblx0XHRcdFx0XCJzaGFpXCI6IFwiXFx1N2I1YlxcdTY2NTJcXHU5MTdlXCIsXHJcblx0XHRcdFx0XCJzaGFuXCI6IFwiXFx1NzNjYVxcdTgyZWJcXHU2NzQ5XFx1NWM3MVxcdTUyMjBcXHU3MTdkXFx1ODg2YlxcdTk1ZWFcXHU5NjU1XFx1NjRjNVxcdThkNjFcXHU4MWIzXFx1NTU4NFxcdTZjNTVcXHU2MjQ3XFx1N2YyZVxcdTUyNjFcXHU4YmFhXFx1OTEyZlxcdTU3Y2ZcXHU4MjlmXFx1NmY3OFxcdTU5ZDdcXHU5YTlmXFx1ODFiYlxcdTk0OTBcXHU3NTlkXFx1ODdlZVxcdTgyMjJcXHU4ZGRhXFx1OWNkZFwiLFxyXG5cdFx0XHRcdFwic2hhbmdcIjogXCJcXHU1ODkyXFx1NGYyNFxcdTU1NDZcXHU4ZDRmXFx1NjY0Y1xcdTRlMGFcXHU1YzFhXFx1ODhmM1xcdTU3YTdcXHU3ZWYxXFx1NmI4N1xcdTcxYjVcXHU4OWRlXCIsXHJcblx0XHRcdFx0XCJzaGFvXCI6IFwiXFx1NjhhMlxcdTYzNGVcXHU3YTBkXFx1NzBlN1xcdTgyOGRcXHU1MmZhXFx1OTdmNlxcdTVjMTFcXHU1NGU4XFx1OTBiNVxcdTdlY2RcXHU1MmFkXFx1ODJkNVxcdTZmNzJcXHU4NmY4XFx1N2IyNFxcdTdiNzJcXHU4MjQ0XCIsXHJcblx0XHRcdFx0XCJzaGVcIjogXCJcXHU1OTYyXFx1OGQ0YVxcdTg2YzdcXHU4MjBjXFx1ODIwZFxcdThkNjZcXHU2NDQ0XFx1NWMwNFxcdTYxNTFcXHU2ZDg5XFx1NzkzZVxcdThiYmVcXHU1MzhkXFx1NGY1OFxcdTczMWVcXHU3NTcyXFx1OWU5ZFwiLFxyXG5cdFx0XHRcdFwic2hlblwiOiBcIlxcdTc4MzdcXHU3NTMzXFx1NTQ3YlxcdTRmMzhcXHU4ZWFiXFx1NmRmMVxcdTVhMjBcXHU3ZWM1XFx1Nzk1ZVxcdTZjODhcXHU1YmExXFx1NWE3NlxcdTc1MWFcXHU4MGJlXFx1NjE0ZVxcdTZlMTdcXHU4YmRjXFx1OGMwMlxcdTU0MzJcXHU1NGMyXFx1NmUxNlxcdTY5MzlcXHU3N2U3XFx1ODcwM1wiLFxyXG5cdFx0XHRcdFwic2hlbmdcIjogXCJcXHU1OGYwXFx1NzUxZlxcdTc1MjVcXHU3MjcyXFx1NTM0N1xcdTdlZjNcXHU3NzAxXFx1NzZkYlxcdTUyNjlcXHU4MGRjXFx1NTcyM1xcdTRlMWVcXHU2ZTExXFx1NWFiNVxcdTc3MWFcXHU3YjE5XCIsXHJcblx0XHRcdFx0XCJzaGlcIjogXCJcXHU1ZTA4XFx1NTkzMVxcdTcyZWVcXHU2NWJkXFx1NmU3ZlxcdThiZDdcXHU1YzM4XFx1ODY3MVxcdTUzNDFcXHU3N2YzXFx1NjJmZVxcdTY1ZjZcXHU0ZWMwXFx1OThkZlxcdTg2ODBcXHU1YjllXFx1OGJjNlxcdTUzZjJcXHU3N2UyXFx1NGY3ZlxcdTVjNGVcXHU5YTc2XFx1NTljYlxcdTVmMGZcXHU3OTNhXFx1NThlYlxcdTRlMTZcXHU2N2ZmXFx1NGU4YlxcdTYyZWRcXHU4YTkzXFx1OTAxZFxcdTUyYmZcXHU2NjJmXFx1NTVkY1xcdTU2NmNcXHU5MDAyXFx1NGVkNVxcdTRmOGRcXHU5MWNhXFx1OTk3MFxcdTZjMGZcXHU1ZTAyXFx1NjA0M1xcdTViYTRcXHU4OWM2XFx1OGJkNVxcdThjMjVcXHU1N2Q4XFx1ODNiM1xcdTg0Y2RcXHU1ZjExXFx1NTUxMVxcdTk5NjNcXHU4ZjdjXFx1ODAwNlxcdThkMzNcXHU3MGJiXFx1NzkzYlxcdTk0YzhcXHU5NGNhXFx1ODdhYlxcdTgyMTBcXHU3YjZlXFx1OGM1NVxcdTljYTVcXHU5Y2JhXCIsXHJcblx0XHRcdFx0XCJzaG91XCI6IFwiXFx1NjUzNlxcdTYyNGJcXHU5OTk2XFx1NWI4OFxcdTViZmZcXHU2Mzg4XFx1NTUyZVxcdTUzZDdcXHU3NjI2XFx1NTE3ZFxcdTYyNGNcXHU3MmU5XFx1N2VmNlxcdTgyNGZcIixcclxuXHRcdFx0XHRcInNodVwiOiBcIlxcdTg1MmNcXHU2N2EyXFx1NjhiM1xcdTZiOGFcXHU2MjkyXFx1OGY5M1xcdTUzZDRcXHU4MjEyXFx1NmRkMVxcdTc1OGZcXHU0ZTY2XFx1OGQ0ZVxcdTViNzBcXHU3MTlmXFx1ODVhZlxcdTY2OTFcXHU2NmQ5XFx1N2Y3MlxcdTg3MDBcXHU5ZWNkXFx1OWYyMFxcdTVjNWVcXHU2NzJmXFx1OGZmMFxcdTY4MTFcXHU2NzVmXFx1NjIwZFxcdTdhZDZcXHU1ODg1XFx1NWViNlxcdTY1NzBcXHU2ZjMxXFx1NjA1NVxcdTUwMGZcXHU1ODdlXFx1ODNmZFxcdTVmYzRcXHU2Y2FkXFx1NmQ5MVxcdTZmOGRcXHU1OWRkXFx1N2ViZVxcdTZiZjlcXHU4MTY3XFx1NmJiM1xcdTk1NmZcXHU3OWViXFx1OWU2Y1wiLFxyXG5cdFx0XHRcdFwic2h1YVwiOiBcIlxcdTUyMzdcXHU4MDBkXFx1NTUzMFxcdTZkYWVcIixcclxuXHRcdFx0XHRcInNodWFpXCI6IFwiXFx1NjQ1NFxcdTg4NzBcXHU3NTI5XFx1NWUwNVxcdTg3YzBcIixcclxuXHRcdFx0XHRcInNodWFuXCI6IFwiXFx1NjgxM1xcdTYyZjRcXHU5NWU5XCIsXHJcblx0XHRcdFx0XCJzaHVhbmdcIjogXCJcXHU5NzFjXFx1NTNjY1xcdTcyM2RcXHU1YjQwXCIsXHJcblx0XHRcdFx0XCJzaHVpXCI6IFwiXFx1OGMwMVxcdTZjMzRcXHU3NzYxXFx1N2EwZVwiLFxyXG5cdFx0XHRcdFwic2h1blwiOiBcIlxcdTU0MmVcXHU3N2FjXFx1OTg3YVxcdTgyMWNcXHU2MDQyXCIsXHJcblx0XHRcdFx0XCJzaHVvXCI6IFwiXFx1OGJmNFxcdTc4NTVcXHU2NzE0XFx1NzBjMVxcdTg0YjRcXHU2NDIwXFx1NTVjZFxcdTZmZWZcXHU1OTgxXFx1NjljYVxcdTk0YzRcIixcclxuXHRcdFx0XHRcInNpXCI6IFwiXFx1NjVhZlxcdTY0OTVcXHU1NjM2XFx1NjAxZFxcdTc5YzFcXHU1M2Y4XFx1NGUxZFxcdTZiN2JcXHU4MDg2XFx1NWJmYVxcdTU1ZTNcXHU1NmRiXFx1NGYzYVxcdTRmM2NcXHU5OTcyXFx1NWRmM1xcdTUzYWVcXHU0ZmRmXFx1NTE1NVxcdTgzZTVcXHU1NDlkXFx1NmM1Y1xcdTZjZDdcXHU2ZjhjXFx1NTlkMlxcdTlhNzdcXHU3ZjBjXFx1Nzk0MFxcdTc5NjBcXHU5NTM2XFx1OWUzNlxcdTgwMWNcXHU4NmYzXFx1N2IyNVwiLFxyXG5cdFx0XHRcdFwic29uZ1wiOiBcIlxcdTY3N2VcXHU4MDM4XFx1NjAwMlxcdTk4ODJcXHU5MDAxXFx1NWI4YlxcdThiYmNcXHU4YmY1XFx1NTFjN1xcdTgzZDhcXHU1ZDI3XFx1NWQ2OVxcdTVmZWFcXHU2MDlhXFx1NmRkZVxcdTdhZTZcIixcclxuXHRcdFx0XHRcInNvdVwiOiBcIlxcdTY0MWNcXHU4MjU4XFx1NjRkZVxcdTU1ZmRcXHU1M2RmXFx1NTVkNlxcdTU1ZmVcXHU5OThhXFx1NmViMlxcdTk4ZDVcXHU3NzhkXFx1OTUzY1xcdTg3OGJcIixcclxuXHRcdFx0XHRcInN1XCI6IFwiXFx1ODJjZlxcdTkxNjVcXHU0ZmQ3XFx1N2QyMFxcdTkwMWZcXHU3YzlmXFx1NTBmM1xcdTU4NTFcXHU2ZWFmXFx1NWJiZlxcdThiYzlcXHU4MDgzXFx1NTkxOVxcdThjMjFcXHU4NTBjXFx1NTVjOVxcdTYxMmJcXHU3YzBjXFx1ODllYlxcdTdhMjNcIixcclxuXHRcdFx0XHRcInN1YW5cIjogXCJcXHU5MTc4XFx1ODQ5Y1xcdTdiOTdcIixcclxuXHRcdFx0XHRcInN1aVwiOiBcIlxcdTg2N2RcXHU5NjhiXFx1OTY4ZlxcdTdlZTVcXHU5YWQzXFx1Nzg4ZVxcdTVjODFcXHU3YTU3XFx1OTA0MlxcdTk2YTdcXHU3OTVmXFx1ODRkMVxcdTUxYWJcXHU4YzA3XFx1NmZjOVxcdTkwODNcXHU3MWU3XFx1NzcyZFxcdTc3NjJcIixcclxuXHRcdFx0XHRcInN1blwiOiBcIlxcdTViNTlcXHU2MzVmXFx1N2IwYlxcdTgzNmFcXHU3MmYyXFx1OThlN1xcdTY5YWJcXHU4ZGUzXFx1OTZiY1wiLFxyXG5cdFx0XHRcdFwic3VvXCI6IFwiXFx1NjhhZFxcdTU1MDZcXHU3ZjI5XFx1NzQxMFxcdTdkMjJcXHU5NTAxXFx1NjI0MFxcdTU1MjJcXHU1NWU2XFx1NWExMVxcdTY4NmJcXHU3NzQzXFx1N2ZhN1wiLFxyXG5cdFx0XHRcdFwidGFcIjogXCJcXHU1ODRjXFx1NGVkNlxcdTViODNcXHU1OTc5XFx1NTg1NFxcdTczNmRcXHU2MzFlXFx1OGU0YlxcdThlMGZcXHU5NWZjXFx1NmViYlxcdTkwNjJcXHU2OWJiXFx1NmM5M1wiLFxyXG5cdFx0XHRcdFwidGFpXCI6IFwiXFx1ODBjZVxcdTgyZDRcXHU2MmFjXFx1NTNmMFxcdTZjZjBcXHU5MTVlXFx1NTkyYVxcdTYwMDFcXHU2YzcwXFx1OTBiMFxcdTg1YjlcXHU4MGJkXFx1NzBiMVxcdTk0OWJcXHU4ZGM2XFx1OWM5MFwiLFxyXG5cdFx0XHRcdFwidGFuXCI6IFwiXFx1NTc0ZFxcdTY0NGFcXHU4ZDJhXFx1NzYyYlxcdTZlZTlcXHU1NzViXFx1NmE4MFxcdTc1ZjBcXHU2ZjZkXFx1OGMyZFxcdThjMDhcXHU1NzY2XFx1NmJlZlxcdTg4OTJcXHU3OGIzXFx1NjNhMlxcdTUzZjlcXHU3MGFkXFx1OTBlZlxcdTg1NDhcXHU2NjE5XFx1OTRiZFxcdTk1MmNcXHU4OTgzXCIsXHJcblx0XHRcdFx0XCJ0YW5nXCI6IFwiXFx1NmM2NFxcdTU4NThcXHU2NDJhXFx1NTgwMlxcdTY4ZTBcXHU4MTliXFx1NTUxMFxcdTdjZDZcXHU1MGE1XFx1OTk2N1xcdTZlOGZcXHU3NDZkXFx1OTRmNFxcdTk1NTdcXHU4MDI1XFx1ODc5N1xcdTg3YjNcXHU3ZmIwXFx1OTFhM1wiLFxyXG5cdFx0XHRcdFwidGhhbmdcIjogXCJcXHU1MDE4XFx1OGViYVxcdTZkY2NcIixcclxuXHRcdFx0XHRcInRoZW5nXCI6IFwiXFx1OGQ5ZlxcdTcwZWJcIixcclxuXHRcdFx0XHRcInRhb1wiOiBcIlxcdTYzOGZcXHU2ZDliXFx1NmVkNFxcdTdlZTZcXHU4NDA0XFx1Njg0M1xcdTkwMDNcXHU2ZGQ4XFx1OTY3NlxcdThiYThcXHU1OTU3XFx1NjMxMVxcdTlmMTdcXHU1NTU1XFx1OTdlY1xcdTk5NTVcIixcclxuXHRcdFx0XHRcInRlXCI6IFwiXFx1NzI3OVwiLFxyXG5cdFx0XHRcdFwidGVuZ1wiOiBcIlxcdTg1ZTRcXHU4MTdlXFx1NzViY1xcdThhOGFcXHU2ZWQ1XCIsXHJcblx0XHRcdFx0XCJ0aVwiOiBcIlxcdTY4YWZcXHU1MjU0XFx1OGUyMlxcdTk1MTFcXHU2M2QwXFx1OTg5OFxcdThlNDRcXHU1NTdjXFx1NGY1M1xcdTY2ZmZcXHU1NjhmXFx1NjBkNVxcdTZkOTVcXHU1MjQzXFx1NWM0OVxcdTgzNTFcXHU2MDhjXFx1OTAxNlxcdTdlZThcXHU3ZjA3XFx1OWU0OFxcdTg4ZmNcXHU5MThkXCIsXHJcblx0XHRcdFx0XCJ0aWFuXCI6IFwiXFx1NTkyOVxcdTZkZmJcXHU1ODZiXFx1NzUzMFxcdTc1MWNcXHU2MDZjXFx1ODIxNFxcdTgxNDZcXHU2M2FkXFx1NWZkZFxcdTk2MTdcXHU2Yjg0XFx1NzU0YlxcdTk0YmZcXHU4NmJhXCIsXHJcblx0XHRcdFx0XCJ0aWFvXCI6IFwiXFx1Njc2MVxcdThmZTJcXHU3NzNhXFx1OGRmM1xcdTRmN2JcXHU3OTY3XFx1OTRlYlxcdTdhOTVcXHU5Zjg2XFx1OWNhNlwiLFxyXG5cdFx0XHRcdFwidGllXCI6IFwiXFx1OGQzNFxcdTk0YzFcXHU1ZTE2XFx1ODQxY1xcdTk5MmVcIixcclxuXHRcdFx0XHRcInRpbmdcIjogXCJcXHU1Mzg1XFx1NTQyY1xcdTcwYzNcXHU2YzQwXFx1NWVmN1xcdTUwNWNcXHU0ZWFkXFx1NWVhZFxcdTYzM2FcXHU4MjQ3XFx1ODM5YlxcdTg0NzZcXHU1YTc3XFx1Njg4M1xcdTg3MTNcXHU5NzA2XCIsXHJcblx0XHRcdFx0XCJ0b25nXCI6IFwiXFx1OTAxYVxcdTY4NTBcXHU5MTZlXFx1NzdiM1xcdTU0MGNcXHU5NGRjXFx1NWY2NFxcdTdhZTVcXHU2ODc2XFx1NjM0NVxcdTdiNTJcXHU3ZWRmXFx1NzVkYlxcdTRmNWZcXHU1MGVlXFx1NGVkZFxcdTgzM2NcXHU1NWY1XFx1NjA3OFxcdTZmN2NcXHU3ODNjXCIsXHJcblx0XHRcdFx0XCJ0b3VcIjogXCJcXHU1MDc3XFx1NjI5NVxcdTU5MzRcXHU5MDBmXFx1NGVhMFwiLFxyXG5cdFx0XHRcdFwidHVcIjogXCJcXHU1MWY4XFx1NzljM1xcdTdhODFcXHU1NmZlXFx1NWY5MlxcdTkwMTRcXHU2ZDgyXFx1NWM2MFxcdTU3MWZcXHU1NDEwXFx1NTE1NFxcdTU4MGRcXHU4MzdjXFx1ODNkZlxcdTk0OGRcXHU5MTc0XCIsXHJcblx0XHRcdFx0XCJ0dWFuXCI6IFwiXFx1NmU0ZFxcdTU2ZTJcXHU3NTgzXCIsXHJcblx0XHRcdFx0XCJ0dWlcIjogXCJcXHU2M2E4XFx1OTg5M1xcdTgxN2ZcXHU4NzE1XFx1ODkyYVxcdTkwMDBcXHU1ZmQyXFx1NzE3YVwiLFxyXG5cdFx0XHRcdFwidHVuXCI6IFwiXFx1NTQxZVxcdTVjNmZcXHU4MWMwXFx1OTk2OFxcdTY2YmVcXHU4YzVhXFx1N2E4MFwiLFxyXG5cdFx0XHRcdFwidHVvXCI6IFwiXFx1NjJkNlxcdTYyNThcXHU4MTMxXFx1OWUzNVxcdTk2NDBcXHU5YTZlXFx1OWE3Y1xcdTY5MmRcXHU1OWE1XFx1NjJkM1xcdTU1M2VcXHU0ZTQ3XFx1NGY1N1xcdTU3NjhcXHU1ZWI5XFx1NmNiMVxcdTY3ZGRcXHU3ODIzXFx1N2JhOFxcdTgyMDRcXHU4ZGNlXFx1OWYwZFwiLFxyXG5cdFx0XHRcdFwid2FcIjogXCJcXHU2MzE2XFx1NTRjN1xcdTg2ZDlcXHU2ZDNjXFx1NWEwM1xcdTc0ZTZcXHU4ODljXFx1NGY2NFxcdTVhMzJcXHU4MTdkXCIsXHJcblx0XHRcdFx0XCJ3YWlcIjogXCJcXHU2YjZhXFx1NTkxNlwiLFxyXG5cdFx0XHRcdFwid2FuXCI6IFwiXFx1OGM0Y1xcdTVmMmZcXHU2ZTdlXFx1NzNhOVxcdTk4N2RcXHU0ZTM4XFx1NzBmN1xcdTViOGNcXHU3ODk3XFx1NjMzZFxcdTY2NWFcXHU3Njk2XFx1NjBjYlxcdTViOWJcXHU1YTQ5XFx1NGUwN1xcdTgxNTVcXHU1MjVjXFx1ODI4NFxcdTgyY2JcXHU4M2MwXFx1N2VhOFxcdTdlZmVcXHU3NDJjXFx1ODExOFxcdTc1NzlcXHU4NzNmXFx1N2JhMlwiLFxyXG5cdFx0XHRcdFwid2FuZ1wiOiBcIlxcdTZjNmFcXHU3MzhiXFx1NGVhMVxcdTY3ODlcXHU3ZjUxXFx1NWY4MFxcdTY1ZmFcXHU2NzFiXFx1NWZkOFxcdTU5ODRcXHU3ZjU0XFx1NWMyMlxcdTYwZDhcXHU4ZjhiXFx1OWI0ZFwiLFxyXG5cdFx0XHRcdFwid2VpXCI6IFwiXFx1NWEwMVxcdTVkY2RcXHU1ZmFlXFx1NTM3MVxcdTk3ZTZcXHU4ZmRkXFx1Njg0NVxcdTU2ZjRcXHU1NTJmXFx1NjBkZlxcdTRlM2FcXHU2ZjRkXFx1N2VmNFxcdTgyYzdcXHU4NDBlXFx1NTlkNFxcdTRmMWZcXHU0ZjJhXFx1NWMzZVxcdTdlYWNcXHU2NzJhXFx1ODUxYVxcdTU0NzNcXHU3NTRmXFx1ODBjM1xcdTU1ODJcXHU5YjRmXFx1NGY0ZFxcdTZlMmRcXHU4YzEzXFx1NWMwOVxcdTYxNzBcXHU1MzZiXFx1NTAyZFxcdTUwNGVcXHU4YmZmXFx1OTY4OFxcdTg0NzNcXHU4NTg3XFx1NWUwZlxcdTVlMzdcXHU1ZDM0XFx1NWQ2Y1xcdTczMjVcXHU3MzJjXFx1OTVmMVxcdTZjYTlcXHU2ZDI3XFx1NmRhMFxcdTkwMzZcXHU1YTEzXFx1NzNhZVxcdTk3ZWFcXHU4ZWNlXFx1NzA5Y1xcdTcxNjhcXHU3MWE4XFx1NzVmZlxcdTgyNDlcXHU5Yzk0XCIsXHJcblx0XHRcdFx0XCJ3ZW5cIjogXCJcXHU3NjFmXFx1NmUyOVxcdTg2OGFcXHU2NTg3XFx1OTVmYlxcdTdlYjlcXHU1NDNiXFx1N2EzM1xcdTdkMGFcXHU5NWVlXFx1NTIwZVxcdTYxMjBcXHU5NjBjXFx1NmM3NlxcdTc0YmFcXHU5N2ViXFx1NmI4MVxcdTk2ZWZcIixcclxuXHRcdFx0XHRcIndlbmdcIjogXCJcXHU1NWUxXFx1N2ZjMVxcdTc0ZWVcXHU4NGNhXFx1ODU3OVwiLFxyXG5cdFx0XHRcdFwid29cIjogXCJcXHU2MzFkXFx1ODcxN1xcdTZkYTFcXHU3YTlkXFx1NjIxMVxcdTY1YTFcXHU1MzY3XFx1NjNlMVxcdTZjODNcXHU4M2I0XFx1NWU0NFxcdTZlMjVcXHU2NzRjXFx1ODA5ZlxcdTlmOGNcIixcclxuXHRcdFx0XHRcInd1XCI6IFwiXFx1NWRlYlxcdTU0NWNcXHU5NGE4XFx1NGU0Y1xcdTZjNjFcXHU4YmVjXFx1NWM0YlxcdTY1ZTBcXHU4MjljXFx1NjhhN1xcdTU0M2VcXHU1NDM0XFx1NmJjYlxcdTZiNjZcXHU0ZTk0XFx1NjM0MlxcdTUzNDhcXHU4MjFlXFx1NGYwZFxcdTRmYWVcXHU1NzVlXFx1NjIwYVxcdTk2ZmVcXHU2NjY0XFx1NzI2OVxcdTUyZmZcXHU1MmExXFx1NjA5ZlxcdThiZWZcXHU1MTQwXFx1NGVmNVxcdTk2MjJcXHU5MGFjXFx1NTcyY1xcdTgyYjRcXHU1ZTkxXFx1NjAwM1xcdTVmZTRcXHU2ZDZmXFx1NWJlNFxcdThmZDVcXHU1OWE5XFx1OWE5YlxcdTcyN2VcXHU3MTEwXFx1OWU0OVxcdTllNWNcXHU4NzA4XFx1OTJjOFxcdTlmMmZcIixcclxuXHRcdFx0XHRcInhpXCI6IFwiXFx1NjYxNFxcdTcxOTlcXHU2NzkwXFx1ODk3ZlxcdTc4NTJcXHU3N2ZkXFx1NjY3MFxcdTU2M2JcXHU1NDM4XFx1OTUyMVxcdTcyN2FcXHU3YTAwXFx1NjA2ZlxcdTVlMGNcXHU2MDg5XFx1ODE5ZFxcdTU5MTVcXHU2MGRjXFx1NzE4NFxcdTcwZWZcXHU2ZWFhXFx1NmM1MFxcdTcyODBcXHU2YTg0XFx1ODhhZFxcdTVlMmRcXHU0ZTYwXFx1NWFiM1xcdTU1OWNcXHU5NGUzXFx1NmQxN1xcdTdjZmJcXHU5Njk5XFx1NjIwZlxcdTdlYzZcXHU1MGQ2XFx1NTE2ZVxcdTk2YjBcXHU5MGQ3XFx1ODMxY1xcdTg0NzhcXHU4NGYwXFx1NTk1YVxcdTU1MGZcXHU1Zjk5XFx1OTk2OVxcdTk2MGJcXHU2ZDYwXFx1NmRjNVxcdTVjNjNcXHU1YjA5XFx1NzNiYVxcdTZhMjhcXHU2NmU2XFx1ODljYlxcdTZiMzdcXHU3MWI5XFx1Nzk4YVxcdTc5YTdcXHU5NGI4XFx1NzY5OVxcdTdhNzhcXHU4NzI1XFx1ODdjYlxcdTgyM2VcXHU3ZmIyXFx1N2M5ZVxcdTdmZDVcXHU5MWFmXFx1OWYzN1wiLFxyXG5cdFx0XHRcdFwieGlhXCI6IFwiXFx1Nzc4ZVxcdTg2N2VcXHU1MzIzXFx1OTcxZVxcdThmOTZcXHU2Njg3XFx1NWNlMVxcdTRmYTBcXHU3MmVkXFx1NGUwYlxcdTUzYTZcXHU1OTBmXFx1NTQxM1xcdTYzODBcXHU4NDZkXFx1NTVjNFxcdTcyY2VcXHU5MDUwXFx1NzQ1NVxcdTc4NTZcXHU3NjE1XFx1N2Y0NVxcdTllZTBcIixcclxuXHRcdFx0XHRcInhpYW5cIjogXCJcXHU5NTI4XFx1NTE0OFxcdTRlZDlcXHU5YzljXFx1N2VhNFxcdTU0YjhcXHU4ZDI0XFx1ODg1NFxcdTgyMzdcXHU5NWYyXFx1NmQ4ZVxcdTVmMjZcXHU1YWNjXFx1NjYzZVxcdTk2NjlcXHU3M2IwXFx1NzMyZVxcdTUzYmZcXHU4MTdhXFx1OTk4NVxcdTdmYTFcXHU1YmFhXFx1OTY3N1xcdTk2NTBcXHU3ZWJmXFx1NTFiY1xcdTg1ZDNcXHU1Yzk4XFx1NzMwM1xcdTY2YjlcXHU1YTM0XFx1NmMxOVxcdTc5NDZcXHU5ZTQ3XFx1NzVlYlxcdTg2YWNcXHU3YjQ1XFx1N2M3Y1xcdTkxNzBcXHU4ZGY5XCIsXHJcblx0XHRcdFx0XCJ4aWFuZ1wiOiBcIlxcdTc2ZjhcXHU1M2EyXFx1OTU3NlxcdTk5OTlcXHU3YmIxXFx1ODk0NFxcdTZlNThcXHU0ZTYxXFx1N2ZkNFxcdTc5NjVcXHU4YmU2XFx1NjBmM1xcdTU0Y2RcXHU0ZWFiXFx1OTg3OVxcdTVkZjdcXHU2YTYxXFx1NTBjZlxcdTU0MTFcXHU4YzYxXFx1ODI5N1xcdTg0NTlcXHU5OTc3XFx1NWVhMFxcdTlhYTdcXHU3ZjAzXFx1ODdkM1xcdTljOWVcXHU5OGU4XCIsXHJcblx0XHRcdFx0XCJ4aWFvXCI6IFwiXFx1ODQyN1xcdTc4NWRcXHU5NzA0XFx1NTI0YVxcdTU0ZWVcXHU1NmEzXFx1OTUwMFxcdTZkODhcXHU1YmI1XFx1NmRjNlxcdTY2NTNcXHU1YzBmXFx1NWI1ZFxcdTY4MjFcXHU4MDk2XFx1NTU3OFxcdTdiMTFcXHU2NTQ4XFx1NTRkM1xcdTU0YmJcXHU1ZDI0XFx1NmY0N1xcdTkwMGRcXHU5YTgxXFx1N2VlMVxcdTY3YWRcXHU2N2I1XFx1N2I3MVxcdTdiYWJcXHU5YjQ4XCIsXHJcblx0XHRcdFx0XCJ4aWVcIjogXCJcXHU2OTU0XFx1NGU5YlxcdTZiNDdcXHU4NzRlXFx1OTc4YlxcdTUzNGZcXHU2MzFmXFx1NjQzYVxcdTkwYWFcXHU2NTljXFx1ODBjMVxcdThjMTBcXHU1MTk5XFx1NjhiMFxcdTUzNzhcXHU4N2Y5XFx1NjFjOFxcdTZjYzRcXHU2Y2ZiXFx1OGMyMlxcdTVjNTFcXHU1MDU1XFx1NGViNVxcdTUyZjBcXHU3MWVlXFx1ODVhNFxcdTY0YjdcXHU1ZWU4XFx1NzAyM1xcdTkwODJcXHU3ZWMxXFx1N2YyY1xcdTY5YWRcXHU2OThkXFx1NmI1OVxcdThlOWVcIixcclxuXHRcdFx0XHRcInhpblwiOiBcIlxcdTg1YWFcXHU4MmFmXFx1OTUwY1xcdTZiMjNcXHU4ZjliXFx1NjViMFxcdTVmZmJcXHU1ZmMzXFx1NGZlMVxcdTg4NDVcXHU1NmRmXFx1OTlhOFxcdTgzOThcXHU2YjQ2XFx1OTRmZFxcdTk0NmJcIixcclxuXHRcdFx0XHRcInhpbmdcIjogXCJcXHU2NjFmXFx1ODE2NVxcdTczMjlcXHU2MGZhXFx1NTE3NFxcdTUyMTFcXHU1NzhiXFx1NWY2MlxcdTkwYTJcXHU4ODRjXFx1OTE5MlxcdTVlNzhcXHU2NzRmXFx1NjAyN1xcdTU5ZDNcXHU5NjQ5XFx1ODM0N1xcdTgzNjVcXHU2NGU0XFx1NjBiYlxcdTc4NGVcIixcclxuXHRcdFx0XHRcInhpb25nXCI6IFwiXFx1NTE0NFxcdTUxZjZcXHU4MGY4XFx1NTMwOFxcdTZjNzlcXHU5NmM0XFx1NzE4YVxcdTgyOGVcIixcclxuXHRcdFx0XHRcInhpdVwiOiBcIlxcdTRmMTFcXHU0ZmVlXFx1N2Y5ZVxcdTY3M2RcXHU1NWM1XFx1OTUwOFxcdTc5YzBcXHU4ODk2XFx1N2VlM1xcdTgzYTBcXHU1Y2FiXFx1OTk5MFxcdTVlYTVcXHU5ZTNhXFx1OGM4NVxcdTlhZjlcIixcclxuXHRcdFx0XHRcInh1XCI6IFwiXFx1NTg5ZlxcdTYyMGNcXHU5NzAwXFx1ODY1YVxcdTU2MThcXHU5ODdiXFx1NWY5MFxcdThiYjhcXHU4NGM0XFx1OTE1N1xcdTUzZDlcXHU2NWVkXFx1NWU4ZlxcdTc1NWNcXHU2MDY0XFx1N2Q2ZVxcdTVhN2ZcXHU3ZWVhXFx1N2VlZFxcdThiYjRcXHU4YmU5XFx1NTcyOVxcdTg0ZmZcXHU2MDM1XFx1NmQyYlxcdTZlODZcXHU5ODdjXFx1NjgyOVxcdTcxNjZcXHU3ODA5XFx1NzZmMVxcdTgwZTVcXHU3Y2M4XFx1OTE5MVwiLFxyXG5cdFx0XHRcdFwieHVhblwiOiBcIlxcdThmNjlcXHU1NWE3XFx1NWJhM1xcdTYwYWNcXHU2NWNiXFx1NzM4NFxcdTkwMDlcXHU3NjYzXFx1NzcyOVxcdTdlZGFcXHU1MTA3XFx1OGMxNlxcdTg0MzFcXHU2M2NlXFx1OTk5NFxcdTZjZWJcXHU2ZDM1XFx1NmUzMlxcdTZmMjlcXHU3NDg3XFx1Njk2NlxcdTY2ODRcXHU3MGFiXFx1NzE0YVxcdTc4YjlcXHU5NGM5XFx1OTU1ZlxcdTc1YzNcIixcclxuXHRcdFx0XHRcInh1ZVwiOiBcIlxcdTk3NzRcXHU4NTliXFx1NWI2NlxcdTdhNzRcXHU5NmVhXFx1ODg0MFxcdTU2NzFcXHU2Y2Y2XFx1OWNkNVwiLFxyXG5cdFx0XHRcdFwieHVuXCI6IFwiXFx1NTJjYlxcdTcxOGZcXHU1ZmFhXFx1NjVlY1xcdThiZTJcXHU1YmZiXFx1OWE2ZlxcdTVkZTFcXHU2Yjg5XFx1NmM1YlxcdThiYWRcXHU4YmFmXFx1OTAwYVxcdThmYzVcXHU1ZGZkXFx1NTdkOVxcdTgzNDBcXHU4NWIwXFx1NWNjYlxcdTVmODdcXHU2ZDU0XFx1NjZkYlxcdTdhYThcXHU5MWJhXFx1OWM5ZlwiLFxyXG5cdFx0XHRcdFwieWFcIjogXCJcXHU1MzhiXFx1NjJiY1xcdTllMjZcXHU5ZTJkXFx1NTQ0MFxcdTRlMmJcXHU4MmJkXFx1NzI1OVxcdTg2OWNcXHU1ZDE2XFx1ODg1OVxcdTZkYWZcXHU5NmM1XFx1NTRkMVxcdTRlOWFcXHU4YmI2XFx1NGYyMlxcdTYzZTBcXHU1NDE2XFx1NWM4OFxcdThmZDNcXHU1YTA1XFx1NzQwYVxcdTY4NjBcXHU2YzI5XFx1NzgxMVxcdTc3NWFcXHU3NWQ2XCIsXHJcblx0XHRcdFx0XCJ5YW5cIjogXCJcXHU3MTA5XFx1NTRiZFxcdTk2MDlcXHU3MGRmXFx1NmRmOVxcdTc2ZDBcXHU0ZTI1XFx1NzgxNFxcdTg3MTJcXHU1Y2E5XFx1NWVmNlxcdThhMDBcXHU5ODljXFx1OTYwZVxcdTcwOGVcXHU2Y2JmXFx1NTk0NFxcdTYzYTlcXHU3NzNjXFx1ODg0ZFxcdTZmMTRcXHU4MjczXFx1NTgzMFxcdTcxZDVcXHU1MzhjXFx1NzgxYVxcdTk2YzFcXHU1NTAxXFx1NWY2NlxcdTcxMzBcXHU1YmI0XFx1OGMxYVxcdTlhOGNcXHU1M2EzXFx1OTc2NVxcdThkNWRcXHU0ZmU4XFx1NTA0M1xcdTUxNTZcXHU4YmEwXFx1OGMzM1xcdTkwZmVcXHU5MTIyXFx1ODJhYlxcdTgzZjhcXHU1ZDI2XFx1NjA3OVxcdTk1ZWJcXHU5NjBmXFx1NmQwN1xcdTZlNmVcXHU2ZWRmXFx1NTk4ZFxcdTVhZTNcXHU3NDMwXFx1NjY0ZlxcdTgwZWRcXHU4MTRjXFx1NzEzMVxcdTdmNjhcXHU3Yjc1XFx1OTE3ZFxcdTliNDdcXHU5OTBkXFx1OWYzOVwiLFxyXG5cdFx0XHRcdFwieWFuZ1wiOiBcIlxcdTZiODNcXHU1OTJlXFx1OWUyZlxcdTc5ZTdcXHU2NzY4XFx1NjI2Y1xcdTRmNmZcXHU3NWExXFx1N2Y4YVxcdTZkMGJcXHU5NjMzXFx1NmMyN1xcdTRlZjBcXHU3NWQyXFx1NTE3YlxcdTY4MzdcXHU2ZjNlXFx1NWY4OVxcdTYwMGZcXHU2Y2YxXFx1NzA4MFxcdTcwY2FcXHU2MDU5XFx1ODZkOFxcdTk3ODVcIixcclxuXHRcdFx0XHRcInlhb1wiOiBcIlxcdTkwODBcXHU4MTcwXFx1NTk5NlxcdTc0NzZcXHU2NDQ3XFx1NWMyN1xcdTkwNjVcXHU3YTkxXFx1OGMyM1xcdTU5ZGFcXHU1NGFjXFx1ODIwMFxcdTgzNmZcXHU4OTgxXFx1ODAwMFxcdTU5MmRcXHU3MjNiXFx1NTQwNlxcdTVkM2VcXHU1ZmFkXFx1NzAzOVxcdTVlN2FcXHU3M2U3XFx1Njc3M1xcdTY2ZGNcXHU4MGI0XFx1OWU1ZVxcdTdhODhcXHU3ZTQ3XFx1OWNkMFwiLFxyXG5cdFx0XHRcdFwieWVcIjogXCJcXHU2OTMwXFx1NTY0ZVxcdTgwMzZcXHU3MjM3XFx1OTFjZVxcdTUxYjZcXHU0ZTVmXFx1OTg3NVxcdTYzOTZcXHU0ZTFhXFx1NTNmNlxcdTY2ZjNcXHU4MTRiXFx1NTkxY1xcdTZkYjJcXHU4YzEyXFx1OTBiYVxcdTYzZjZcXHU5OTgwXFx1NjY1NFxcdTcwZThcXHU5NGQ4XCIsXHJcblx0XHRcdFx0XCJ5aVwiOiBcIlxcdTRlMDBcXHU1OGY5XFx1NTMzYlxcdTYzZDZcXHU5NGYxXFx1NGY5ZFxcdTRmMGFcXHU4ODYzXFx1OTg5MFxcdTU5MzdcXHU5MDU3XFx1NzlmYlxcdTRlZWFcXHU4MGYwXFx1NzU5MVxcdTZjODJcXHU1YjljXFx1NTllOFxcdTVmNWRcXHU2OTA1XFx1ODY4MVxcdTUwMWFcXHU1ZGYyXFx1NGU1OVxcdTc3ZTNcXHU0ZWU1XFx1ODI3YVxcdTYyOTFcXHU2NjEzXFx1OTA5MVxcdTVjNzlcXHU0ZWJmXFx1NWY3OVxcdTgxYzZcXHU5MDM4XFx1ODA4NFxcdTc1YWJcXHU0ZWE2XFx1ODhkNFxcdTYxMGZcXHU2YmM1XFx1NWZjNlxcdTRlNDlcXHU3NmNhXFx1NmVhMlxcdThiZTNcXHU4YmFlXFx1OGMwYVxcdThiZDFcXHU1ZjAyXFx1N2ZmY1xcdTdmY2NcXHU3ZWNlXFx1NTIwOFxcdTUyOTNcXHU0ZjdlXFx1OGJkMlxcdTU3MmFcXHU1NzJmXFx1NTdmOFxcdTYxZmZcXHU4MmUxXFx1ODU4ZlxcdTVmMDhcXHU1OTU1XFx1NjMzOVxcdTVmMGJcXHU1NDUzXFx1NTRhNlxcdTU0YmZcXHU1NjZiXFx1NWNjNFxcdTVkYjdcXHU3MzE3XFx1OTk3NFxcdTYwM2ZcXHU2MDIxXFx1NjA5MlxcdTZmMmFcXHU4ZmU0XFx1OWE3ZlxcdTdmMjJcXHU2YmFhXFx1OGQzYlxcdTY1ZDZcXHU3MWEwXFx1OTQ4N1xcdTk1NTJcXHU5NTcxXFx1NzVjZFxcdTc2MTdcXHU3NjU0XFx1N2ZjYVxcdTg4NjRcXHU4NzM0XFx1ODIyM1xcdTdmYmZcXHU3ZmYzXFx1OTE0ZlxcdTllZGZcIixcclxuXHRcdFx0XHRcInlpblwiOiBcIlxcdTgzMzVcXHU4MzZiXFx1NTZlMFxcdTZiYjdcXHU5N2YzXFx1OTYzNFxcdTU5ZmJcXHU1NDFmXFx1OTRmNlxcdTZkZWJcXHU1YmM1XFx1OTk2ZVxcdTVjMzlcXHU1ZjE1XFx1OTY5MFxcdTUzNzBcXHU4MGU0XFx1OTExZVxcdTU4MTlcXHU4MzFhXFx1NTU5MVxcdTcyZmFcXHU1OTI0XFx1NmMyNFxcdTk0ZGZcXHU3NjNlXFx1ODY5M1xcdTk3MmFcXHU5Zjg4XCIsXHJcblx0XHRcdFx0XCJ5aW5nXCI6IFwiXFx1ODJmMVxcdTZhMzFcXHU1YTc0XFx1OWU3MFxcdTVlOTRcXHU3ZjI4XFx1ODNiOVxcdTg0MjRcXHU4NDI1XFx1ODM2N1xcdTg3NDdcXHU4ZmNlXFx1OGQ2MlxcdTc2YzhcXHU1ZjcxXFx1OTg5NlxcdTc4NmNcXHU2NjIwXFx1NWIzNFxcdTkwZTJcXHU4MzE0XFx1ODNiYVxcdTg0MjZcXHU2NDg0XFx1NTYyNFxcdTgxYmFcXHU2ZWUyXFx1NmY0NlxcdTcwMWJcXHU3NDViXFx1NzQ4ZVxcdTY5NzlcXHU5ZTY2XFx1NzYzZlxcdTk4OGRcXHU3ZjQyXCIsXHJcblx0XHRcdFx0XCJ5b1wiOiBcIlxcdTU0ZGZcXHU1NTM3XCIsXHJcblx0XHRcdFx0XCJ5b25nXCI6IFwiXFx1NjJlNVxcdTRmNjNcXHU4MWMzXFx1NzVjOFxcdTVlYjhcXHU5NmNkXFx1OGUwYVxcdTg2ZjlcXHU1NDhmXFx1NmNmM1xcdTZkOGNcXHU2YzM4XFx1NjA3ZlxcdTUyYzdcXHU3NTI4XFx1NGZkMVxcdTU4YzVcXHU1ODg5XFx1NjE3NVxcdTkwOTVcXHU5NTViXFx1NzUyY1xcdTljZDlcXHU5OTU0XCIsXHJcblx0XHRcdFx0XCJ5b3VcIjogXCJcXHU1ZTdkXFx1NGYxOFxcdTYwYTBcXHU1ZmU3XFx1NWMyNFxcdTc1MzFcXHU5MGFlXFx1OTRjMFxcdTcyYjlcXHU2Y2I5XFx1NmUzOFxcdTkxNDlcXHU2NzA5XFx1NTNjYlxcdTUzZjNcXHU0ZjUxXFx1OTFjOVxcdThiZjFcXHU1M2M4XFx1NWU3Y1xcdTUzNjNcXHU2NTM4XFx1NGY5MVxcdTgzYjhcXHU1NDY2XFx1NTZmZlxcdTViYTVcXHU2N2RhXFx1NzMzN1xcdTcyNTZcXHU5NGQ1XFx1NzVhM1xcdTg3NjNcXHU5YzdmXFx1OWVkZFxcdTlmMmNcIixcclxuXHRcdFx0XHRcInl1XCI6IFwiXFx1OGZjMlxcdTZkZTRcXHU0ZThlXFx1NzZjMlxcdTY5ODZcXHU4NjVlXFx1NjExYVxcdTgyMDZcXHU0ZjU5XFx1NGZkZVxcdTkwM2VcXHU5YzdjXFx1NjEwOVxcdTZlMWRcXHU2ZTE0XFx1OTY4NVxcdTRlODhcXHU1YTMxXFx1OTZlOFxcdTRlMGVcXHU1YzdmXFx1NzliOVxcdTViODdcXHU4YmVkXFx1N2ZiZFxcdTczODlcXHU1N2RmXFx1ODI4YlxcdTkwYzFcXHU1NDAxXFx1OTA0N1xcdTU1YmJcXHU1Y2VhXFx1NWZhMVxcdTYxMDhcXHU2YjMyXFx1NzJmMVxcdTgwYjJcXHU4YTg5XFx1NmQ3NFxcdTViZDNcXHU4OGQ1XFx1OTg4NFxcdThjNmJcXHU5YTZkXFx1NzliYVxcdTZiZDNcXHU0ZjFiXFx1NGZlM1xcdThjMDBcXHU4YzE1XFx1ODQzOFxcdTg0ZTNcXHU2M2M0XFx1NTU4MVxcdTU3MDRcXHU1NzA5XFx1NWQ1YlxcdTcyZjNcXHU5OTZiXFx1NWViZVxcdTk2MDhcXHU1OWFhXFx1NTlhNFxcdTdlYTFcXHU3NDVjXFx1NjYzMVxcdTg5Y2VcXHU4MTc0XFx1NmIyNFxcdTY1YmNcXHU3MTVjXFx1NzFlMFxcdTgwN2ZcXHU5NGIwXFx1OWU0NlxcdTc2MTBcXHU3NjAwXFx1N2FiM1xcdTg3NTNcXHU3YWZkXFx1ODIwMVxcdTk2ZTlcXHU5Zjg5XCIsXHJcblx0XHRcdFx0XCJ5dWFuXCI6IFwiXFx1OWUzM1xcdTZlMGFcXHU1MWE0XFx1NTE0M1xcdTU3YTNcXHU4ODgxXFx1NTM5ZlxcdTYzZjRcXHU4Zjk1XFx1NTZlZFxcdTU0NThcXHU1NzA2XFx1NzMzZlxcdTZlOTBcXHU3ZjE4XFx1OGZkY1xcdTgyZDFcXHU2MTNmXFx1NjAyOFxcdTk2NjJcXHU1ODZjXFx1NmM4NVxcdTVhOWJcXHU3NDU3XFx1NmE3Y1xcdTcyMzBcXHU3NzIyXFx1OWUyMlxcdTg3ODhcXHU5ZjBiXCIsXHJcblx0XHRcdFx0XCJ5dWVcIjogXCJcXHU2NmYwXFx1N2VhNlxcdThkOGFcXHU4ZGMzXFx1OTRhNVxcdTVjYjNcXHU3Y2E0XFx1NjcwOFxcdTYwYTZcXHU5NjA1XFx1OWZhMFxcdTZhM2VcXHU1MjE2XFx1OTRiYVwiLFxyXG5cdFx0XHRcdFwieXVuXCI6IFwiXFx1ODAxOFxcdTRlOTFcXHU5MGU3XFx1NTMwMFxcdTk2NjhcXHU1MTQxXFx1OGZkMFxcdTg1NzRcXHU5MTVkXFx1NjY1NVxcdTk3ZjVcXHU1YjU1XFx1OTBkM1xcdTgyYjhcXHU3MmMxXFx1NjA3ZFxcdTdlYWRcXHU2YjkyXFx1NjYwMFxcdTZjMzJcIixcclxuXHRcdFx0XHRcInphXCI6IFwiXFx1NTMxZFxcdTc4MzhcXHU2NzQyXFx1NjJmNlxcdTU0ODJcIixcclxuXHRcdFx0XHRcInphaVwiOiBcIlxcdTY4M2RcXHU1NGM5XFx1NzA3ZVxcdTViYjBcXHU4ZjdkXFx1NTE4ZFxcdTU3MjhcXHU1NGIxXFx1NWQzZFxcdTc1M2VcIixcclxuXHRcdFx0XHRcInphblwiOiBcIlxcdTY1MTJcXHU2NjgyXFx1OGQ1ZVxcdTc0ZDJcXHU2NjFkXFx1N2MyYVxcdTdjY2NcXHU4ZGIxXFx1OTMzZVwiLFxyXG5cdFx0XHRcdFwiemFuZ1wiOiBcIlxcdThkNDNcXHU4MTBmXFx1ODQ2Y1xcdTU5NThcXHU2MjE1XFx1ODFlN1wiLFxyXG5cdFx0XHRcdFwiemFvXCI6IFwiXFx1OTA2ZFxcdTdjZGZcXHU1MWZmXFx1ODVmYlxcdTY3YTNcXHU2NWU5XFx1NmZhMVxcdTg2YTRcXHU4ZTgxXFx1NTY2YVxcdTkwMjBcXHU3NjgyXFx1NzA3NlxcdTcxZTVcXHU1NTIzXFx1N2YyYlwiLFxyXG5cdFx0XHRcdFwiemVcIjogXCJcXHU4ZDIzXFx1NjJlOVxcdTUyMTlcXHU2Y2ZkXFx1NGVjNFxcdThkNWNcXHU1NTY3XFx1OGZlZVxcdTY2MDNcXHU3YjJlXFx1N2JhNlxcdTgyMzRcIixcclxuXHRcdFx0XHRcInplaVwiOiBcIlxcdThkM2NcIixcclxuXHRcdFx0XHRcInplblwiOiBcIlxcdTYwMGVcXHU4YzJlXCIsXHJcblx0XHRcdFx0XCJ6ZW5nXCI6IFwiXFx1NTg5ZVxcdTYxOGVcXHU2NmZlXFx1OGQ2MFxcdTdmMmZcXHU3NTExXFx1N2Y3ZVxcdTk1MDNcIixcclxuXHRcdFx0XHRcInpoYVwiOiBcIlxcdTYyNGVcXHU1NWIzXFx1NmUyM1xcdTY3MmRcXHU4ZjY3XFx1OTRlMVxcdTk1ZjhcXHU3NzI4XFx1NjgwNVxcdTY5YThcXHU1NDhiXFx1NGU0ZFxcdTcwYjhcXHU4YmM4XFx1NjNmOFxcdTU0MTJcXHU1NGE0XFx1NTRmM1xcdTYwMGRcXHU3ODFmXFx1NzVjNFxcdTg2YjFcXHU5ZjQ0XCIsXHJcblx0XHRcdFx0XCJ6aGFpXCI6IFwiXFx1NjQ1OFxcdTY1OGJcXHU1Yjg1XFx1N2E4NFxcdTUwM2FcXHU1YmU4XFx1NzgyNlwiLFxyXG5cdFx0XHRcdFwiemhhblwiOiBcIlxcdTc3YmJcXHU2YmUxXFx1OGE3OVxcdTdjOThcXHU2Y2JlXFx1NzZjZlxcdTY1YTlcXHU4Zjk3XFx1NWQyZFxcdTVjNTVcXHU4NjM4XFx1NjgwOFxcdTUzNjBcXHU2MjE4XFx1N2FkOVxcdTZlNWJcXHU3ZWZkXFx1OGMzNVxcdTY0MGNcXHU2NWMzXCIsXHJcblx0XHRcdFx0XCJ6aGFuZ1wiOiBcIlxcdTZhMWZcXHU3YWUwXFx1NWY3MFxcdTZmMzNcXHU1ZjIwXFx1NjM4Y1xcdTZkYThcXHU2NzU2XFx1NGUwOFxcdTVlMTBcXHU4ZDI2XFx1NGVkN1xcdTgwYzBcXHU3NjM0XFx1OTY5Y1xcdTRlYzlcXHU5MTIzXFx1NWU1YlxcdTVkODJcXHU3MzUwXFx1NWFkY1xcdTc0OGJcXHU4N2QxXCIsXHJcblx0XHRcdFx0XCJ6aGFvXCI6IFwiXFx1NjJkYlxcdTY2MmRcXHU2MjdlXFx1NmNiY1xcdThkNzVcXHU3MTY3XFx1N2Y2OVxcdTUxNDZcXHU4MDg3XFx1NTNlY1xcdTcyMmFcXHU4YmNmXFx1NjhmOVxcdTk0OGFcXHU3YjBhXCIsXHJcblx0XHRcdFx0XCJ6aGVcIjogXCJcXHU5MDZlXFx1NjI5OFxcdTU0ZjJcXHU4NmYwXFx1OGY5OVxcdTgwMDVcXHU5NTE3XFx1ODUxN1xcdThmZDlcXHU2ZDU5XFx1OGMyYVxcdTk2NmNcXHU2N2Q4XFx1OGY4NFxcdTc4ZDRcXHU5ZTY3XFx1ODkxYVxcdTg3MDdcXHU4ZDZkXCIsXHJcblx0XHRcdFx0XCJ6aGVuXCI6IFwiXFx1NzNjZFxcdTY1OWZcXHU3NzFmXFx1NzUwNFxcdTc4MjdcXHU4MWZiXFx1OGQxZVxcdTk0ODhcXHU0ZmE2XFx1Njc5NVxcdTc1YjlcXHU4YmNhXFx1OTcwN1xcdTYzMmZcXHU5NTQ3XFx1OTYzNVxcdTdmMWNcXHU2ODYyXFx1Njk5YlxcdThmNzhcXHU4ZDQ4XFx1ODBkN1xcdTY3MTVcXHU3OTZmXFx1NzU1YlxcdTllMjlcIixcclxuXHRcdFx0XHRcInpoZW5nXCI6IFwiXFx1ODRiOFxcdTYzMjNcXHU3NzQxXFx1NWY4MVxcdTcyZjBcXHU0ZTg5XFx1NjAxNFxcdTY1NzRcXHU2MmVmXFx1NmI2M1xcdTY1M2ZcXHU1ZTI3XFx1NzVjN1xcdTkwZDFcXHU4YmMxXFx1OGJlNFxcdTVjZTVcXHU5NGIyXFx1OTRlZVxcdTdiNWRcIixcclxuXHRcdFx0XHRcInpoaVwiOiBcIlxcdTgyOWRcXHU2NzlkXFx1NjUyZlxcdTU0MzFcXHU4NzE4XFx1NzdlNVxcdTgwYTJcXHU4MTAyXFx1NmM0MVxcdTRlNGJcXHU3ZWM3XFx1ODA0Y1xcdTc2ZjRcXHU2OTBkXFx1NmI5NlxcdTYyNjdcXHU1MDNjXFx1NGY4NFxcdTU3NDBcXHU2MzA3XFx1NmI2MlxcdThkYmVcXHU1M2VhXFx1NjVlOFxcdTdlYjhcXHU1ZmQ3XFx1NjMxYVxcdTYzYjdcXHU4MWYzXFx1ODFmNFxcdTdmNmVcXHU1ZTFjXFx1NWNkOVxcdTUyMzZcXHU2NjdhXFx1NzllOVxcdTdhMWFcXHU4ZDI4XFx1NzA5OVxcdTc1ZDRcXHU2ZWRlXFx1NmNiYlxcdTdhOTJcXHU1MzZlXFx1OTY1ZlxcdTkwYzVcXHU1N2Y0XFx1ODJiN1xcdTY0NmRcXHU1ZTE5XFx1NWZlZVxcdTVmNThcXHU1NGFiXFx1OWE5OFxcdTY4MDlcXHU2N2IzXFx1NjgwMFxcdTY4NGVcXHU4Zjc1XFx1OGY3ZVxcdTY1MzRcXHU4ZDNkXFx1ODFhM1xcdTc5NDlcXHU3OTU3XFx1OWVmOVxcdTk2YzlcXHU5ZTM3XFx1NzVlM1xcdTg2ZWRcXHU3ZDc3XFx1OTE2ZlxcdThkZDZcXHU4ZTJjXFx1OGUyZlxcdThjNzhcXHU4OWVmXCIsXHJcblx0XHRcdFx0XCJ6aG9uZ1wiOiBcIlxcdTRlMmRcXHU3NmM1XFx1NWZlMFxcdTk0OWZcXHU4ODc3XFx1N2VjOFxcdTc5Y2RcXHU4MGJmXFx1OTFjZFxcdTRlZjJcXHU0ZjE3XFx1NTFhMlxcdTk1M2FcXHU4N2JkXFx1ODIwMlxcdTgyMmZcXHU4ZTM1XCIsXHJcblx0XHRcdFx0XCJ6aG91XCI6IFwiXFx1ODIxZlxcdTU0NjhcXHU1ZGRlXFx1NmQzMlxcdThiY2NcXHU3Y2E1XFx1OGY3NFxcdTgwOThcXHU1ZTFhXFx1NTQ5MlxcdTc2YjFcXHU1Yjk5XFx1NjYzY1xcdTlhYTRcXHU1NTQ0XFx1Nzc0MFxcdTUwMWNcXHU4YmY5XFx1ODM2ZVxcdTliM2JcXHU3ZWEzXFx1ODBjNFxcdTc4YTFcXHU3YzQwXFx1ODIzM1xcdTkxNGVcXHU5Y2I3XCIsXHJcblx0XHRcdFx0XCJ6aHVcIjogXCJcXHU3M2UwXFx1NjgyYVxcdTg2ZGJcXHU2NzMxXFx1NzMyYVxcdThiZjhcXHU4YmRiXFx1OTAxMFxcdTdhZjlcXHU3MGRiXFx1NzE2ZVxcdTYyYzRcXHU3N2E5XFx1NTYzMVxcdTRlM2JcXHU4NDU3XFx1NjdmMVxcdTUyYTlcXHU4NmMwXFx1OGQyZVxcdTk0ZjhcXHU3YjUxXFx1NGY0ZlxcdTZjZThcXHU3OTVkXFx1OWE3YlxcdTRmMmJcXHU0ZjhmXFx1OTBiZVxcdTgyY2VcXHU4MzMxXFx1NmQxOVxcdTZlMWFcXHU2Zjc0XFx1OWE3YVxcdTY3N2NcXHU2OWUwXFx1NmE2NVxcdTcwYjdcXHU5NGUyXFx1NzViMFxcdTc2MDNcXHU4NmIwXFx1N2FmYVxcdTdiYjhcXHU3ZmU1XFx1OGU4NVxcdTllODhcIixcclxuXHRcdFx0XHRcInpodWFcIjogXCJcXHU2MjkzXCIsXHJcblx0XHRcdFx0XCJ6aHVhaVwiOiBcIlxcdTYyZmRcIixcclxuXHRcdFx0XHRcInpodWFuXCI6IFwiXFx1NGUxM1xcdTc4MTZcXHU4ZjZjXFx1NjRiMFxcdThkNWFcXHU3YmM2XFx1NjI5ZlxcdTU1NmRcXHU5ODliXCIsXHJcblx0XHRcdFx0XCJ6aHVhbmdcIjogXCJcXHU2ODY5XFx1NWU4NFxcdTg4YzVcXHU1OTg2XFx1NjQ5ZVxcdTU4ZWVcXHU3MmI2XFx1NGUyY1wiLFxyXG5cdFx0XHRcdFwiemh1aVwiOiBcIlxcdTY5MGVcXHU5NTI1XFx1OGZmZFxcdThkNThcXHU1NzYwXFx1N2YwMFxcdTg0MTFcXHU5YTkzXFx1N2YxMlwiLFxyXG5cdFx0XHRcdFwiemh1blwiOiBcIlxcdThjMDZcXHU1MWM2XCIsXHJcblx0XHRcdFx0XCJ6aHVvXCI6IFwiXFx1NjM0OVxcdTYyZDlcXHU1MzUzXFx1Njg0Y1xcdTc0MjJcXHU4MzAxXFx1OTE0Y1xcdTcwN2NcXHU2ZDRhXFx1NTAyY1xcdThiZmNcXHU1ZWY0XFx1ODU1ZVxcdTY0ZTJcXHU1NTVjXFx1NmQ1ZVxcdTZkYmZcXHU2NzUzXFx1NzEyZlxcdTc5OWFcXHU2NWFiXCIsXHJcblx0XHRcdFx0XCJ6aVwiOiBcIlxcdTUxNzlcXHU1NGE4XFx1OGQ0NFxcdTU5ZmZcXHU2ZWNiXFx1NmRjNFxcdTViNWNcXHU3ZDJiXFx1NGVkNFxcdTdjN2RcXHU2ZWQzXFx1NWI1MFxcdTgxZWFcXHU2ZTBkXFx1NWI1N1xcdThjMThcXHU1ZDZiXFx1NTljYVxcdTViNzNcXHU3ZjAxXFx1Njg5M1xcdThmOGVcXHU4ZDQwXFx1NjA2M1xcdTc3MjZcXHU5NTMxXFx1NzllZFxcdTgwMTRcXHU3YjJiXFx1N2NhMlxcdTg5ZGNcXHU4YTNlXFx1OWNiYlxcdTlhZWRcIixcclxuXHRcdFx0XHRcInpvbmdcIjogXCJcXHU5YjAzXFx1NjhkNVxcdThlMmFcXHU1Yjk3XFx1N2VmY1xcdTYwM2JcXHU3ZWI1XFx1ODE1OVxcdTdjYmRcIixcclxuXHRcdFx0XHRcInpvdVwiOiBcIlxcdTkwYjlcXHU4ZDcwXFx1NTk0ZlxcdTYzY2RcXHU5MTM5XFx1OWNiMFwiLFxyXG5cdFx0XHRcdFwienVcIjogXCJcXHU3OWRmXFx1OGRiM1xcdTUzNTJcXHU2NWNmXFx1Nzk1NlxcdThiYzVcXHU5NjNiXFx1N2VjNFxcdTRmY2VcXHU4M2Y5XFx1NTU1MFxcdTVmODJcXHU5YTc1XFx1OGU3NFwiLFxyXG5cdFx0XHRcdFwienVhblwiOiBcIlxcdTk0YmJcXHU3ZTgyXFx1NjUyNVxcdTdmMzVcIixcclxuXHRcdFx0XHRcInp1aVwiOiBcIlxcdTU2MzRcXHU5MTg5XFx1NjcwMFxcdTdmNmFcIixcclxuXHRcdFx0XHRcInp1blwiOiBcIlxcdTVjMGFcXHU5MDc1XFx1NjQ5OVxcdTZhM2RcXHU5Y2RmXCIsXHJcblx0XHRcdFx0XCJ6dW9cIjogXCJcXHU2NjI4XFx1NWRlNlxcdTRmNTBcXHU2N2RlXFx1NTA1YVxcdTRmNWNcXHU1NzUwXFx1NWVhN1xcdTk2MWRcXHU5NjNjXFx1ODBkOVxcdTc5NWFcXHU5MTYyXCIsXHJcblx0XHRcdFx0XCJjb3VcIjogXCJcXHU4NWFlXFx1Njk3MVxcdThmOGZcXHU4MTYwXCIsXHJcblx0XHRcdFx0XCJuYW5nXCI6IFwiXFx1NjUyZVxcdTU0ZGRcXHU1NmQ0XFx1OTk5NVxcdTY2ZTlcIixcclxuXHRcdFx0XHRcIm9cIjogXCJcXHU1NTk0XCIsXHJcblx0XHRcdFx0XCJkaWFcIjogXCJcXHU1NWYyXCIsXHJcblx0XHRcdFx0XCJjaHVhaVwiOiBcIlxcdTU2MmNcXHU4MWFhXFx1OGUzOVwiLFxyXG5cdFx0XHRcdFwiY2VuXCI6IFwiXFx1NWM5MVxcdTZkOTRcIixcclxuXHRcdFx0XHRcImRpdVwiOiBcIlxcdTk0ZTVcIixcclxuXHRcdFx0XHRcIm5vdVwiOiBcIlxcdTgwMjhcIixcclxuXHRcdFx0XHRcImZvdVwiOiBcIlxcdTdmMzZcIixcclxuXHRcdFx0XHRcImJpYVwiOiBcIlxcdTlhZGZcIlxyXG5cdFx0XHR9O1xyXG5cdFx0XHR0aGlzLnBvbHlwaG9uZSA9IHtcclxuXHRcdFx0XHRcIjE5OTY5XCI6IFwiRFpcIixcclxuXHRcdFx0XHRcIjE5OTc1XCI6IFwiV01cIixcclxuXHRcdFx0XHRcIjE5OTg4XCI6IFwiUUpcIixcclxuXHRcdFx0XHRcIjIwMDQ4XCI6IFwiWUxcIixcclxuXHRcdFx0XHRcIjIwMDU2XCI6IFwiU0NcIixcclxuXHRcdFx0XHRcIjIwMDYwXCI6IFwiTk1cIixcclxuXHRcdFx0XHRcIjIwMDk0XCI6IFwiUUdcIixcclxuXHRcdFx0XHRcIjIwMTI3XCI6IFwiUUpcIixcclxuXHRcdFx0XHRcIjIwMTY3XCI6IFwiUUNcIixcclxuXHRcdFx0XHRcIjIwMTkzXCI6IFwiWUdcIixcclxuXHRcdFx0XHRcIjIwMjUwXCI6IFwiS0hcIixcclxuXHRcdFx0XHRcIjIwMjU2XCI6IFwiWkNcIixcclxuXHRcdFx0XHRcIjIwMjgyXCI6IFwiU0NcIixcclxuXHRcdFx0XHRcIjIwMjg1XCI6IFwiUUpHXCIsXHJcblx0XHRcdFx0XCIyMDI5MVwiOiBcIlREXCIsXHJcblx0XHRcdFx0XCIyMDMxNFwiOiBcIllEXCIsXHJcblx0XHRcdFx0XCIyMDM0MFwiOiBcIk5FXCIsXHJcblx0XHRcdFx0XCIyMDM3NVwiOiBcIlREXCIsXHJcblx0XHRcdFx0XCIyMDM4OVwiOiBcIllKXCIsXHJcblx0XHRcdFx0XCIyMDM5MVwiOiBcIkNaXCIsXHJcblx0XHRcdFx0XCIyMDQxNVwiOiBcIlBCXCIsXHJcblx0XHRcdFx0XCIyMDQ0NlwiOiBcIllTXCIsXHJcblx0XHRcdFx0XCIyMDQ0N1wiOiBcIlNRXCIsXHJcblx0XHRcdFx0XCIyMDUwNFwiOiBcIlRDXCIsXHJcblx0XHRcdFx0XCIyMDYwOFwiOiBcIktHXCIsXHJcblx0XHRcdFx0XCIyMDg1NFwiOiBcIlFKXCIsXHJcblx0XHRcdFx0XCIyMDg1N1wiOiBcIlpDXCIsXHJcblx0XHRcdFx0XCIyMDkxMVwiOiBcIlBGXCIsXHJcblx0XHRcdFx0XCIyMDUwNFwiOiBcIlRDXCIsXHJcblx0XHRcdFx0XCIyMDYwOFwiOiBcIktHXCIsXHJcblx0XHRcdFx0XCIyMDg1NFwiOiBcIlFKXCIsXHJcblx0XHRcdFx0XCIyMDg1N1wiOiBcIlpDXCIsXHJcblx0XHRcdFx0XCIyMDkxMVwiOiBcIlBGXCIsXHJcblx0XHRcdFx0XCIyMDk4NVwiOiBcIkFXXCIsXHJcblx0XHRcdFx0XCIyMTAzMlwiOiBcIlBCXCIsXHJcblx0XHRcdFx0XCIyMTA0OFwiOiBcIlhRXCIsXHJcblx0XHRcdFx0XCIyMTA0OVwiOiBcIlNDXCIsXHJcblx0XHRcdFx0XCIyMTA4OVwiOiBcIllTXCIsXHJcblx0XHRcdFx0XCIyMTExOVwiOiBcIkpDXCIsXHJcblx0XHRcdFx0XCIyMTI0MlwiOiBcIlNCXCIsXHJcblx0XHRcdFx0XCIyMTI3M1wiOiBcIlNDXCIsXHJcblx0XHRcdFx0XCIyMTMwNVwiOiBcIllQXCIsXHJcblx0XHRcdFx0XCIyMTMwNlwiOiBcIlFPXCIsXHJcblx0XHRcdFx0XCIyMTMzMFwiOiBcIlpDXCIsXHJcblx0XHRcdFx0XCIyMTMzM1wiOiBcIlNEQ1wiLFxyXG5cdFx0XHRcdFwiMjEzNDVcIjogXCJRS1wiLFxyXG5cdFx0XHRcdFwiMjEzNzhcIjogXCJDQVwiLFxyXG5cdFx0XHRcdFwiMjEzOTdcIjogXCJTQ1wiLFxyXG5cdFx0XHRcdFwiMjE0MTRcIjogXCJYU1wiLFxyXG5cdFx0XHRcdFwiMjE0NDJcIjogXCJTQ1wiLFxyXG5cdFx0XHRcdFwiMjE0NzdcIjogXCJKR1wiLFxyXG5cdFx0XHRcdFwiMjE0ODBcIjogXCJURFwiLFxyXG5cdFx0XHRcdFwiMjE0ODRcIjogXCJaU1wiLFxyXG5cdFx0XHRcdFwiMjE0OTRcIjogXCJZWFwiLFxyXG5cdFx0XHRcdFwiMjE1MDVcIjogXCJZWFwiLFxyXG5cdFx0XHRcdFwiMjE1MTJcIjogXCJIR1wiLFxyXG5cdFx0XHRcdFwiMjE1MjNcIjogXCJYSFwiLFxyXG5cdFx0XHRcdFwiMjE1MzdcIjogXCJQQlwiLFxyXG5cdFx0XHRcdFwiMjE1NDJcIjogXCJQRlwiLFxyXG5cdFx0XHRcdFwiMjE1NDlcIjogXCJLSFwiLFxyXG5cdFx0XHRcdFwiMjE1NzFcIjogXCJFXCIsXHJcblx0XHRcdFx0XCIyMTU3NFwiOiBcIkRBXCIsXHJcblx0XHRcdFx0XCIyMTU4OFwiOiBcIlREXCIsXHJcblx0XHRcdFx0XCIyMTU4OVwiOiBcIk9cIixcclxuXHRcdFx0XHRcIjIxNjE4XCI6IFwiWkNcIixcclxuXHRcdFx0XHRcIjIxNjIxXCI6IFwiS0hBXCIsXHJcblx0XHRcdFx0XCIyMTYzMlwiOiBcIlpKXCIsXHJcblx0XHRcdFx0XCIyMTY1NFwiOiBcIktHXCIsXHJcblx0XHRcdFx0XCIyMTY3OVwiOiBcIkxLR1wiLFxyXG5cdFx0XHRcdFwiMjE2ODNcIjogXCJLSFwiLFxyXG5cdFx0XHRcdFwiMjE3MTBcIjogXCJBXCIsXHJcblx0XHRcdFx0XCIyMTcxOVwiOiBcIllIXCIsXHJcblx0XHRcdFx0XCIyMTczNFwiOiBcIldPRVwiLFxyXG5cdFx0XHRcdFwiMjE3NjlcIjogXCJBXCIsXHJcblx0XHRcdFx0XCIyMTc4MFwiOiBcIldOXCIsXHJcblx0XHRcdFx0XCIyMTgwNFwiOiBcIlhIXCIsXHJcblx0XHRcdFx0XCIyMTgzNFwiOiBcIkFcIixcclxuXHRcdFx0XHRcIjIxODk5XCI6IFwiWkRcIixcclxuXHRcdFx0XHRcIjIxOTAzXCI6IFwiUk5cIixcclxuXHRcdFx0XHRcIjIxOTA4XCI6IFwiV09cIixcclxuXHRcdFx0XHRcIjIxOTM5XCI6IFwiWkNcIixcclxuXHRcdFx0XHRcIjIxOTU2XCI6IFwiU0FcIixcclxuXHRcdFx0XHRcIjIxOTY0XCI6IFwiWUFcIixcclxuXHRcdFx0XHRcIjIxOTcwXCI6IFwiVERcIixcclxuXHRcdFx0XHRcIjIyMDAzXCI6IFwiQVwiLFxyXG5cdFx0XHRcdFwiMjIwMzFcIjogXCJKR1wiLFxyXG5cdFx0XHRcdFwiMjIwNDBcIjogXCJYU1wiLFxyXG5cdFx0XHRcdFwiMjIwNjBcIjogXCJaQ1wiLFxyXG5cdFx0XHRcdFwiMjIwNjZcIjogXCJaQ1wiLFxyXG5cdFx0XHRcdFwiMjIwNzlcIjogXCJNSFwiLFxyXG5cdFx0XHRcdFwiMjIxMjlcIjogXCJYSlwiLFxyXG5cdFx0XHRcdFwiMjIxNzlcIjogXCJYQVwiLFxyXG5cdFx0XHRcdFwiMjIyMzdcIjogXCJOSlwiLFxyXG5cdFx0XHRcdFwiMjIyNDRcIjogXCJURFwiLFxyXG5cdFx0XHRcdFwiMjIyODBcIjogXCJKUVwiLFxyXG5cdFx0XHRcdFwiMjIzMDBcIjogXCJZSFwiLFxyXG5cdFx0XHRcdFwiMjIzMTNcIjogXCJYV1wiLFxyXG5cdFx0XHRcdFwiMjIzMzFcIjogXCJZUVwiLFxyXG5cdFx0XHRcdFwiMjIzNDNcIjogXCJZSlwiLFxyXG5cdFx0XHRcdFwiMjIzNTFcIjogXCJQSFwiLFxyXG5cdFx0XHRcdFwiMjIzOTVcIjogXCJEQ1wiLFxyXG5cdFx0XHRcdFwiMjI0MTJcIjogXCJURFwiLFxyXG5cdFx0XHRcdFwiMjI0ODRcIjogXCJQQlwiLFxyXG5cdFx0XHRcdFwiMjI1MDBcIjogXCJQQlwiLFxyXG5cdFx0XHRcdFwiMjI1MzRcIjogXCJaRFwiLFxyXG5cdFx0XHRcdFwiMjI1NDlcIjogXCJESFwiLFxyXG5cdFx0XHRcdFwiMjI1NjFcIjogXCJQQlwiLFxyXG5cdFx0XHRcdFwiMjI2MTJcIjogXCJURFwiLFxyXG5cdFx0XHRcdFwiMjI3NzFcIjogXCJLUVwiLFxyXG5cdFx0XHRcdFwiMjI4MzFcIjogXCJIQlwiLFxyXG5cdFx0XHRcdFwiMjI4NDFcIjogXCJKR1wiLFxyXG5cdFx0XHRcdFwiMjI4NTVcIjogXCJRSlwiLFxyXG5cdFx0XHRcdFwiMjI4NjVcIjogXCJYUVwiLFxyXG5cdFx0XHRcdFwiMjMwMTNcIjogXCJNTFwiLFxyXG5cdFx0XHRcdFwiMjMwODFcIjogXCJXTVwiLFxyXG5cdFx0XHRcdFwiMjM0ODdcIjogXCJTWFwiLFxyXG5cdFx0XHRcdFwiMjM1NThcIjogXCJRSlwiLFxyXG5cdFx0XHRcdFwiMjM1NjFcIjogXCJZV1wiLFxyXG5cdFx0XHRcdFwiMjM1ODZcIjogXCJZV1wiLFxyXG5cdFx0XHRcdFwiMjM2MTRcIjogXCJZV1wiLFxyXG5cdFx0XHRcdFwiMjM2MTVcIjogXCJTTlwiLFxyXG5cdFx0XHRcdFwiMjM2MzFcIjogXCJQQlwiLFxyXG5cdFx0XHRcdFwiMjM2NDZcIjogXCJaU1wiLFxyXG5cdFx0XHRcdFwiMjM2NjNcIjogXCJaVFwiLFxyXG5cdFx0XHRcdFwiMjM2NzNcIjogXCJZR1wiLFxyXG5cdFx0XHRcdFwiMjM3NjJcIjogXCJURFwiLFxyXG5cdFx0XHRcdFwiMjM3NjlcIjogXCJaU1wiLFxyXG5cdFx0XHRcdFwiMjM3ODBcIjogXCJRSlwiLFxyXG5cdFx0XHRcdFwiMjM4ODRcIjogXCJRS1wiLFxyXG5cdFx0XHRcdFwiMjQwNTVcIjogXCJYSFwiLFxyXG5cdFx0XHRcdFwiMjQxMTNcIjogXCJEQ1wiLFxyXG5cdFx0XHRcdFwiMjQxNjJcIjogXCJaQ1wiLFxyXG5cdFx0XHRcdFwiMjQxOTFcIjogXCJHQVwiLFxyXG5cdFx0XHRcdFwiMjQyNzNcIjogXCJRSlwiLFxyXG5cdFx0XHRcdFwiMjQzMjRcIjogXCJOTFwiLFxyXG5cdFx0XHRcdFwiMjQzNzdcIjogXCJURFwiLFxyXG5cdFx0XHRcdFwiMjQzNzhcIjogXCJRSlwiLFxyXG5cdFx0XHRcdFwiMjQ0MzlcIjogXCJQRlwiLFxyXG5cdFx0XHRcdFwiMjQ1NTRcIjogXCJaU1wiLFxyXG5cdFx0XHRcdFwiMjQ2ODNcIjogXCJURFwiLFxyXG5cdFx0XHRcdFwiMjQ2OTRcIjogXCJXRVwiLFxyXG5cdFx0XHRcdFwiMjQ3MzNcIjogXCJMS1wiLFxyXG5cdFx0XHRcdFwiMjQ5MjVcIjogXCJUTlwiLFxyXG5cdFx0XHRcdFwiMjUwOTRcIjogXCJaR1wiLFxyXG5cdFx0XHRcdFwiMjUxMDBcIjogXCJYUVwiLFxyXG5cdFx0XHRcdFwiMjUxMDNcIjogXCJYSFwiLFxyXG5cdFx0XHRcdFwiMjUxNTNcIjogXCJQQlwiLFxyXG5cdFx0XHRcdFwiMjUxNzBcIjogXCJQQlwiLFxyXG5cdFx0XHRcdFwiMjUxNzlcIjogXCJLR1wiLFxyXG5cdFx0XHRcdFwiMjUyMDNcIjogXCJQQlwiLFxyXG5cdFx0XHRcdFwiMjUyNDBcIjogXCJaU1wiLFxyXG5cdFx0XHRcdFwiMjUyODJcIjogXCJGQlwiLFxyXG5cdFx0XHRcdFwiMjUzMDNcIjogXCJOQVwiLFxyXG5cdFx0XHRcdFwiMjUzMjRcIjogXCJLR1wiLFxyXG5cdFx0XHRcdFwiMjUzNDFcIjogXCJaWVwiLFxyXG5cdFx0XHRcdFwiMjUzNzNcIjogXCJXWlwiLFxyXG5cdFx0XHRcdFwiMjUzNzVcIjogXCJYSlwiLFxyXG5cdFx0XHRcdFwiMjUzODRcIjogXCJBXCIsXHJcblx0XHRcdFx0XCIyNTQ1N1wiOiBcIkFcIixcclxuXHRcdFx0XHRcIjI1NTI4XCI6IFwiU0RcIixcclxuXHRcdFx0XHRcIjI1NTMwXCI6IFwiU0NcIixcclxuXHRcdFx0XHRcIjI1NTUyXCI6IFwiVERcIixcclxuXHRcdFx0XHRcIjI1Nzc0XCI6IFwiWkNcIixcclxuXHRcdFx0XHRcIjI1ODc0XCI6IFwiWkNcIixcclxuXHRcdFx0XHRcIjI2MDQ0XCI6IFwiWVdcIixcclxuXHRcdFx0XHRcIjI2MDgwXCI6IFwiV01cIixcclxuXHRcdFx0XHRcIjI2MjkyXCI6IFwiUEJcIixcclxuXHRcdFx0XHRcIjI2MzMzXCI6IFwiUEJcIixcclxuXHRcdFx0XHRcIjI2MzU1XCI6IFwiWllcIixcclxuXHRcdFx0XHRcIjI2MzY2XCI6IFwiQ1pcIixcclxuXHRcdFx0XHRcIjI2Mzk3XCI6IFwiWkNcIixcclxuXHRcdFx0XHRcIjI2Mzk5XCI6IFwiUUpcIixcclxuXHRcdFx0XHRcIjI2NDE1XCI6IFwiWlNcIixcclxuXHRcdFx0XHRcIjI2NDUxXCI6IFwiU0JcIixcclxuXHRcdFx0XHRcIjI2NTI2XCI6IFwiWkNcIixcclxuXHRcdFx0XHRcIjI2NTUyXCI6IFwiSkdcIixcclxuXHRcdFx0XHRcIjI2NTYxXCI6IFwiVERcIixcclxuXHRcdFx0XHRcIjI2NTg4XCI6IFwiSkdcIixcclxuXHRcdFx0XHRcIjI2NTk3XCI6IFwiQ1pcIixcclxuXHRcdFx0XHRcIjI2NjI5XCI6IFwiWlNcIixcclxuXHRcdFx0XHRcIjI2NjM4XCI6IFwiWUxcIixcclxuXHRcdFx0XHRcIjI2NjQ2XCI6IFwiWFFcIixcclxuXHRcdFx0XHRcIjI2NjUzXCI6IFwiS0dcIixcclxuXHRcdFx0XHRcIjI2NjU3XCI6IFwiWEpcIixcclxuXHRcdFx0XHRcIjI2NzI3XCI6IFwiSEdcIixcclxuXHRcdFx0XHRcIjI2ODk0XCI6IFwiWkNcIixcclxuXHRcdFx0XHRcIjI2OTM3XCI6IFwiWlNcIixcclxuXHRcdFx0XHRcIjI2OTQ2XCI6IFwiWkNcIixcclxuXHRcdFx0XHRcIjI2OTk5XCI6IFwiS0pcIixcclxuXHRcdFx0XHRcIjI3MDk5XCI6IFwiS0pcIixcclxuXHRcdFx0XHRcIjI3NDQ5XCI6IFwiWVFcIixcclxuXHRcdFx0XHRcIjI3NDgxXCI6IFwiWFNcIixcclxuXHRcdFx0XHRcIjI3NTQyXCI6IFwiWlNcIixcclxuXHRcdFx0XHRcIjI3NjYzXCI6IFwiWlNcIixcclxuXHRcdFx0XHRcIjI3NzQ4XCI6IFwiVFNcIixcclxuXHRcdFx0XHRcIjI3Nzg0XCI6IFwiU0NcIixcclxuXHRcdFx0XHRcIjI3Nzg4XCI6IFwiWkRcIixcclxuXHRcdFx0XHRcIjI3Nzk1XCI6IFwiVERcIixcclxuXHRcdFx0XHRcIjI3ODEyXCI6IFwiT1wiLFxyXG5cdFx0XHRcdFwiMjc4NTBcIjogXCJQQlwiLFxyXG5cdFx0XHRcdFwiMjc4NTJcIjogXCJNQlwiLFxyXG5cdFx0XHRcdFwiMjc4OTVcIjogXCJTTFwiLFxyXG5cdFx0XHRcdFwiMjc4OThcIjogXCJQTFwiLFxyXG5cdFx0XHRcdFwiMjc5NzNcIjogXCJRSlwiLFxyXG5cdFx0XHRcdFwiMjc5ODFcIjogXCJLSFwiLFxyXG5cdFx0XHRcdFwiMjc5ODZcIjogXCJIWFwiLFxyXG5cdFx0XHRcdFwiMjc5OTRcIjogXCJYSlwiLFxyXG5cdFx0XHRcdFwiMjgwNDRcIjogXCJZQ1wiLFxyXG5cdFx0XHRcdFwiMjgwNjVcIjogXCJXR1wiLFxyXG5cdFx0XHRcdFwiMjgxNzdcIjogXCJTTVwiLFxyXG5cdFx0XHRcdFwiMjgyNjdcIjogXCJRSlwiLFxyXG5cdFx0XHRcdFwiMjgyOTFcIjogXCJLSFwiLFxyXG5cdFx0XHRcdFwiMjgzMzdcIjogXCJaUVwiLFxyXG5cdFx0XHRcdFwiMjg0NjNcIjogXCJUTFwiLFxyXG5cdFx0XHRcdFwiMjg1NDhcIjogXCJEQ1wiLFxyXG5cdFx0XHRcdFwiMjg2MDFcIjogXCJURFwiLFxyXG5cdFx0XHRcdFwiMjg2ODlcIjogXCJQQlwiLFxyXG5cdFx0XHRcdFwiMjg4MDVcIjogXCJKR1wiLFxyXG5cdFx0XHRcdFwiMjg4MjBcIjogXCJRR1wiLFxyXG5cdFx0XHRcdFwiMjg4NDZcIjogXCJQQlwiLFxyXG5cdFx0XHRcdFwiMjg5NTJcIjogXCJURFwiLFxyXG5cdFx0XHRcdFwiMjg5NzVcIjogXCJaQ1wiLFxyXG5cdFx0XHRcdFwiMjkxMDBcIjogXCJBXCIsXHJcblx0XHRcdFx0XCIyOTMyNVwiOiBcIlFKXCIsXHJcblx0XHRcdFx0XCIyOTU3NVwiOiBcIlNMXCIsXHJcblx0XHRcdFx0XCIyOTYwMlwiOiBcIkZCXCIsXHJcblx0XHRcdFx0XCIzMDAxMFwiOiBcIlREXCIsXHJcblx0XHRcdFx0XCIzMDA0NFwiOiBcIkNYXCIsXHJcblx0XHRcdFx0XCIzMDA1OFwiOiBcIlBGXCIsXHJcblx0XHRcdFx0XCIzMDA5MVwiOiBcIllTUFwiLFxyXG5cdFx0XHRcdFwiMzAxMTFcIjogXCJZTlwiLFxyXG5cdFx0XHRcdFwiMzAyMjlcIjogXCJYSlwiLFxyXG5cdFx0XHRcdFwiMzA0MjdcIjogXCJTQ1wiLFxyXG5cdFx0XHRcdFwiMzA0NjVcIjogXCJTWFwiLFxyXG5cdFx0XHRcdFwiMzA2MzFcIjogXCJZUVwiLFxyXG5cdFx0XHRcdFwiMzA2NTVcIjogXCJRSlwiLFxyXG5cdFx0XHRcdFwiMzA2ODRcIjogXCJRSkdcIixcclxuXHRcdFx0XHRcIjMwNzA3XCI6IFwiU0RcIixcclxuXHRcdFx0XHRcIjMwNzI5XCI6IFwiWEhcIixcclxuXHRcdFx0XHRcIjMwNzk2XCI6IFwiTEdcIixcclxuXHRcdFx0XHRcIjMwOTE3XCI6IFwiUEJcIixcclxuXHRcdFx0XHRcIjMxMDc0XCI6IFwiTk1cIixcclxuXHRcdFx0XHRcIjMxMDg1XCI6IFwiSlpcIixcclxuXHRcdFx0XHRcIjMxMTA5XCI6IFwiU0NcIixcclxuXHRcdFx0XHRcIjMxMTgxXCI6IFwiWkNcIixcclxuXHRcdFx0XHRcIjMxMTkyXCI6IFwiTUxCXCIsXHJcblx0XHRcdFx0XCIzMTI5M1wiOiBcIkpRXCIsXHJcblx0XHRcdFx0XCIzMTQwMFwiOiBcIllYXCIsXHJcblx0XHRcdFx0XCIzMTU4NFwiOiBcIllKXCIsXHJcblx0XHRcdFx0XCIzMTg5NlwiOiBcIlpOXCIsXHJcblx0XHRcdFx0XCIzMTkwOVwiOiBcIlpZXCIsXHJcblx0XHRcdFx0XCIzMTk5NVwiOiBcIlhKXCIsXHJcblx0XHRcdFx0XCIzMjMyMVwiOiBcIlBGXCIsXHJcblx0XHRcdFx0XCIzMjMyN1wiOiBcIlpZXCIsXHJcblx0XHRcdFx0XCIzMjQxOFwiOiBcIkhHXCIsXHJcblx0XHRcdFx0XCIzMjQyMFwiOiBcIlhRXCIsXHJcblx0XHRcdFx0XCIzMjQyMVwiOiBcIkhHXCIsXHJcblx0XHRcdFx0XCIzMjQzOFwiOiBcIkxHXCIsXHJcblx0XHRcdFx0XCIzMjQ3M1wiOiBcIkdKXCIsXHJcblx0XHRcdFx0XCIzMjQ4OFwiOiBcIlREXCIsXHJcblx0XHRcdFx0XCIzMjUyMVwiOiBcIlFKXCIsXHJcblx0XHRcdFx0XCIzMjUyN1wiOiBcIlBCXCIsXHJcblx0XHRcdFx0XCIzMjU2MlwiOiBcIlpTUVwiLFxyXG5cdFx0XHRcdFwiMzI1NjRcIjogXCJKWlwiLFxyXG5cdFx0XHRcdFwiMzI3MzVcIjogXCJaRFwiLFxyXG5cdFx0XHRcdFwiMzI3OTNcIjogXCJQQlwiLFxyXG5cdFx0XHRcdFwiMzMwNzFcIjogXCJQRlwiLFxyXG5cdFx0XHRcdFwiMzMwOThcIjogXCJYTFwiLFxyXG5cdFx0XHRcdFwiMzMxMDBcIjogXCJZQVwiLFxyXG5cdFx0XHRcdFwiMzMxNTJcIjogXCJQQlwiLFxyXG5cdFx0XHRcdFwiMzMyNjFcIjogXCJDWFwiLFxyXG5cdFx0XHRcdFwiMzMzMjRcIjogXCJCUFwiLFxyXG5cdFx0XHRcdFwiMzMzMzNcIjogXCJURFwiLFxyXG5cdFx0XHRcdFwiMzM0MDZcIjogXCJZQVwiLFxyXG5cdFx0XHRcdFwiMzM0MjZcIjogXCJXTVwiLFxyXG5cdFx0XHRcdFwiMzM0MzJcIjogXCJQQlwiLFxyXG5cdFx0XHRcdFwiMzM0NDVcIjogXCJKR1wiLFxyXG5cdFx0XHRcdFwiMzM0ODZcIjogXCJaTlwiLFxyXG5cdFx0XHRcdFwiMzM0OTNcIjogXCJUU1wiLFxyXG5cdFx0XHRcdFwiMzM1MDdcIjogXCJRSlwiLFxyXG5cdFx0XHRcdFwiMzM1NDBcIjogXCJRSlwiLFxyXG5cdFx0XHRcdFwiMzM1NDRcIjogXCJaQ1wiLFxyXG5cdFx0XHRcdFwiMzM1NjRcIjogXCJYUVwiLFxyXG5cdFx0XHRcdFwiMzM2MTdcIjogXCJZVFwiLFxyXG5cdFx0XHRcdFwiMzM2MzJcIjogXCJRSlwiLFxyXG5cdFx0XHRcdFwiMzM2MzZcIjogXCJYSFwiLFxyXG5cdFx0XHRcdFwiMzM2MzdcIjogXCJZWFwiLFxyXG5cdFx0XHRcdFwiMzM2OTRcIjogXCJXR1wiLFxyXG5cdFx0XHRcdFwiMzM3MDVcIjogXCJQRlwiLFxyXG5cdFx0XHRcdFwiMzM3MjhcIjogXCJZV1wiLFxyXG5cdFx0XHRcdFwiMzM4ODJcIjogXCJTUlwiLFxyXG5cdFx0XHRcdFwiMzQwNjdcIjogXCJXTVwiLFxyXG5cdFx0XHRcdFwiMzQwNzRcIjogXCJZV1wiLFxyXG5cdFx0XHRcdFwiMzQxMjFcIjogXCJRSlwiLFxyXG5cdFx0XHRcdFwiMzQyNTVcIjogXCJaQ1wiLFxyXG5cdFx0XHRcdFwiMzQyNTlcIjogXCJYTFwiLFxyXG5cdFx0XHRcdFwiMzQ0MjVcIjogXCJKSFwiLFxyXG5cdFx0XHRcdFwiMzQ0MzBcIjogXCJYSFwiLFxyXG5cdFx0XHRcdFwiMzQ0ODVcIjogXCJLSFwiLFxyXG5cdFx0XHRcdFwiMzQ1MDNcIjogXCJZU1wiLFxyXG5cdFx0XHRcdFwiMzQ1MzJcIjogXCJIR1wiLFxyXG5cdFx0XHRcdFwiMzQ1NTJcIjogXCJYU1wiLFxyXG5cdFx0XHRcdFwiMzQ1NThcIjogXCJZRVwiLFxyXG5cdFx0XHRcdFwiMzQ1OTNcIjogXCJaTFwiLFxyXG5cdFx0XHRcdFwiMzQ2NjBcIjogXCJZUVwiLFxyXG5cdFx0XHRcdFwiMzQ4OTJcIjogXCJYSFwiLFxyXG5cdFx0XHRcdFwiMzQ5MjhcIjogXCJTQ1wiLFxyXG5cdFx0XHRcdFwiMzQ5OTlcIjogXCJRSlwiLFxyXG5cdFx0XHRcdFwiMzUwNDhcIjogXCJQQlwiLFxyXG5cdFx0XHRcdFwiMzUwNTlcIjogXCJTQ1wiLFxyXG5cdFx0XHRcdFwiMzUwOThcIjogXCJaQ1wiLFxyXG5cdFx0XHRcdFwiMzUyMDNcIjogXCJUUVwiLFxyXG5cdFx0XHRcdFwiMzUyNjVcIjogXCJKWFwiLFxyXG5cdFx0XHRcdFwiMzUyOTlcIjogXCJKWFwiLFxyXG5cdFx0XHRcdFwiMzU3ODJcIjogXCJTWlwiLFxyXG5cdFx0XHRcdFwiMzU4MjhcIjogXCJZU1wiLFxyXG5cdFx0XHRcdFwiMzU4MzBcIjogXCJFXCIsXHJcblx0XHRcdFx0XCIzNTg0M1wiOiBcIlREXCIsXHJcblx0XHRcdFx0XCIzNTg5NVwiOiBcIllHXCIsXHJcblx0XHRcdFx0XCIzNTk3N1wiOiBcIk1IXCIsXHJcblx0XHRcdFx0XCIzNjE1OFwiOiBcIkpHXCIsXHJcblx0XHRcdFx0XCIzNjIyOFwiOiBcIlFKXCIsXHJcblx0XHRcdFx0XCIzNjQyNlwiOiBcIlhRXCIsXHJcblx0XHRcdFx0XCIzNjQ2NlwiOiBcIkRDXCIsXHJcblx0XHRcdFx0XCIzNjcxMFwiOiBcIkpDXCIsXHJcblx0XHRcdFx0XCIzNjcxMVwiOiBcIlpZR1wiLFxyXG5cdFx0XHRcdFwiMzY3NjdcIjogXCJQQlwiLFxyXG5cdFx0XHRcdFwiMzY4NjZcIjogXCJTS1wiLFxyXG5cdFx0XHRcdFwiMzY5NTFcIjogXCJZV1wiLFxyXG5cdFx0XHRcdFwiMzcwMzRcIjogXCJZWFwiLFxyXG5cdFx0XHRcdFwiMzcwNjNcIjogXCJYSFwiLFxyXG5cdFx0XHRcdFwiMzcyMThcIjogXCJaQ1wiLFxyXG5cdFx0XHRcdFwiMzczMjVcIjogXCJaQ1wiLFxyXG5cdFx0XHRcdFwiMzgwNjNcIjogXCJQQlwiLFxyXG5cdFx0XHRcdFwiMzgwNzlcIjogXCJURFwiLFxyXG5cdFx0XHRcdFwiMzgwODVcIjogXCJRWVwiLFxyXG5cdFx0XHRcdFwiMzgxMDdcIjogXCJEQ1wiLFxyXG5cdFx0XHRcdFwiMzgxMTZcIjogXCJURFwiLFxyXG5cdFx0XHRcdFwiMzgxMjNcIjogXCJZRFwiLFxyXG5cdFx0XHRcdFwiMzgyMjRcIjogXCJIR1wiLFxyXG5cdFx0XHRcdFwiMzgyNDFcIjogXCJYVENcIixcclxuXHRcdFx0XHRcIjM4MjcxXCI6IFwiWkNcIixcclxuXHRcdFx0XHRcIjM4NDE1XCI6IFwiWUVcIixcclxuXHRcdFx0XHRcIjM4NDI2XCI6IFwiS0hcIixcclxuXHRcdFx0XHRcIjM4NDYxXCI6IFwiWURcIixcclxuXHRcdFx0XHRcIjM4NDYzXCI6IFwiQUVcIixcclxuXHRcdFx0XHRcIjM4NDY2XCI6IFwiUEJcIixcclxuXHRcdFx0XHRcIjM4NDc3XCI6IFwiWEpcIixcclxuXHRcdFx0XHRcIjM4NTE4XCI6IFwiWVRcIixcclxuXHRcdFx0XHRcIjM4NTUxXCI6IFwiV0tcIixcclxuXHRcdFx0XHRcIjM4NTg1XCI6IFwiWkNcIixcclxuXHRcdFx0XHRcIjM4NzA0XCI6IFwiWFNcIixcclxuXHRcdFx0XHRcIjM4NzM5XCI6IFwiTEpcIixcclxuXHRcdFx0XHRcIjM4NzYxXCI6IFwiR0pcIixcclxuXHRcdFx0XHRcIjM4ODA4XCI6IFwiU1FcIixcclxuXHRcdFx0XHRcIjM5MDQ4XCI6IFwiSkdcIixcclxuXHRcdFx0XHRcIjM5MDQ5XCI6IFwiWEpcIixcclxuXHRcdFx0XHRcIjM5MDUyXCI6IFwiSEdcIixcclxuXHRcdFx0XHRcIjM5MDc2XCI6IFwiQ1pcIixcclxuXHRcdFx0XHRcIjM5MjcxXCI6IFwiWFRcIixcclxuXHRcdFx0XHRcIjM5NTM0XCI6IFwiVERcIixcclxuXHRcdFx0XHRcIjM5NTUyXCI6IFwiVERcIixcclxuXHRcdFx0XHRcIjM5NTg0XCI6IFwiUEJcIixcclxuXHRcdFx0XHRcIjM5NjQ3XCI6IFwiU0JcIixcclxuXHRcdFx0XHRcIjM5NzMwXCI6IFwiTEdcIixcclxuXHRcdFx0XHRcIjM5NzQ4XCI6IFwiVFBCXCIsXHJcblx0XHRcdFx0XCI0MDEwOVwiOiBcIlpRXCIsXHJcblx0XHRcdFx0XCI0MDQ3OVwiOiBcIk5EXCIsXHJcblx0XHRcdFx0XCI0MDUxNlwiOiBcIkhHXCIsXHJcblx0XHRcdFx0XCI0MDUzNlwiOiBcIkhHXCIsXHJcblx0XHRcdFx0XCI0MDU4M1wiOiBcIlFKXCIsXHJcblx0XHRcdFx0XCI0MDc2NVwiOiBcIllRXCIsXHJcblx0XHRcdFx0XCI0MDc4NFwiOiBcIlFKXCIsXHJcblx0XHRcdFx0XCI0MDg0MFwiOiBcIllLXCIsXHJcblx0XHRcdFx0XCI0MDg2M1wiOiBcIlFKR1wiXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIMOmwo/CkMOlwo/igJPDpuKAucK8w6nFuMKzLCDDqMK/4oCdw6XigLrFvsOpwqbigJPDpcKt4oCUw6bCr8KNw6XCpMKnw6XigKDihKLDpcK9wqLDpcK8wo9cclxuXHRcdGdldEZ1bGxDaGFyczogZnVuY3Rpb24oc3RyKSB7XHJcblx0XHRcdHZhciByZXN1bHQgPSAnJyxcclxuXHRcdFx0XHRuYW1lO1xyXG5cdFx0XHR2YXIgcmVnID0gbmV3IFJlZ0V4cCgnW2EtekEtWjAtOVxcLSBdJyk7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSBzdHIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHR2YXIgY2ggPSBzdHIuc3Vic3RyKGksIDEpLFxyXG5cdFx0XHRcdFx0dW5pY29kZSA9IGNoLmNoYXJDb2RlQXQoMCk7XHJcblx0XHRcdFx0aWYgKHVuaWNvZGUgPiA0MDg2OSB8fCB1bmljb2RlIDwgMTk5NjgpIHtcclxuXHRcdFx0XHRcdHJlc3VsdCArPSBjaDtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bmFtZSA9IHRoaXMuX2dldEZ1bGxDaGFyKGNoKTtcclxuXHRcdFx0XHRcdGlmIChuYW1lICE9PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHRyZXN1bHQgKz0gbmFtZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gw6bCj8KQw6XCj+KAk8OpwqbigJPDpcKt4oCUw6bCr8KNw6/CvMWSw6jCv+KAncOl4oC6xb7DpcKkwqfDpeKAoOKEosOlwr3CosOlwrzCj1xyXG5cdFx0Z2V0Q2FtZWxDaGFyczogZnVuY3Rpb24oc3RyKSB7XHJcblx0XHRcdGlmICh0eXBlb2Yoc3RyKSAhPT0gJ3N0cmluZycpXHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKC0xLCBcIsOl4oChwr3DpuKAosKwZ2V0RmlzcnTDqcWT4oKsw6jCpsKBw6XCreKAlMOnwqzCpsOkwrjCssOnwrHCu8Olxb7igLnDpcKP4oCaw6bigKLCsCFcIik7XHJcblx0XHRcdHZhciBjaGFycyA9IFtdOyAvL8Okwr/CncOlwq3LnMOkwrjCrcOp4oCUwrTDp8K74oCcw6bFvsWTw6fFoeKAnsOm4oCiwrDDp8K74oCeXHJcblx0XHRcdGZvciAodmFyIGkgPSAwLCBsZW4gPSBzdHIubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHQvL8Ooxb3Ct8Olwr7igJR1bmljb2Rlw6cgwoFcclxuXHRcdFx0XHR2YXIgY2ggPSBzdHIuY2hhckF0KGkpO1xyXG5cdFx0XHRcdC8vw6bCo+KCrMOmxbjCpcOowq/CpXVuaWNvZGXDpyDCgcOmy5zCr8OlwpDCpsOlxZPCqMOlwqTigJ7Dp8KQ4oCgw6jFksaSw6XigLrCtMOkwrnigLnDpeKAoOKApizDpcWTwqjDpcuG4oSiw6jCv+KAncOl4oC6xb7DqMKvwqXDpyDCgcOlwq/CucOmy5wgw6bCseKAsMOlwq3igJTDp8Wh4oCew6bigLnCvMOpxbjCs8OpwqbigJPDpcKt4oCUw6bCr8KNLMOkwrjCjcOlxZPCqMOly4bihKLDqMKwxpLDp+KAncKow6XigKbCtsOlwq7GksOl4oChwr3DpuKAosKww6XCpOKAnsOnwpDigKBcclxuXHRcdFx0XHRjaGFycy5wdXNoKHRoaXMuX2dldENoYXIoY2gpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvL8OlwqTigJ7Dp8KQ4oCgYXJyUmVzdWx0LMOowr/igJ3DpeKAusW+w6bigLDigqzDpsWT4oCww6XCj8Kvw6jGksK9w6fFoeKAnsOm4oC5wrzDqcW4wrPDqcKm4oCTw6XCreKAlMOmwq/CjcOkwrjCssOm4oCiwrDDp8K74oCeXHJcblx0XHRcdHJldHVybiB0aGlzLl9nZXRSZXN1bHQoY2hhcnMpO1xyXG5cdFx0fSxcclxuXHJcblxyXG5cdFx0Ly8gw6bCj8KQw6XCj+KAk8Om4oC5wrzDqcW4wrNcclxuXHRcdF9nZXRGdWxsQ2hhcjogZnVuY3Rpb24oc3RyKSB7XHJcblx0XHRcdGZvciAodmFyIGtleSBpbiB0aGlzLmZ1bGxfZGljdCkge1xyXG5cdFx0XHRcdGlmICgtMSAhPT0gdGhpcy5mdWxsX2RpY3Rba2V5XS5pbmRleE9mKHN0cikpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLl9jYXBpdGFsaXplKGtleSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyDDqcKm4oCTw6XCreKAlMOmwq/CjcOlwqTCp8Ol4oCg4oSiXHJcblx0XHRfY2FwaXRhbGl6ZTogZnVuY3Rpb24oc3RyKSB7XHJcblx0XHRcdGlmIChzdHIubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdHZhciBmaXJzdCA9IHN0ci5zdWJzdHIoMCwgMSkudG9VcHBlckNhc2UoKTtcclxuXHRcdFx0XHR2YXIgc3BhcmUgPSBzdHIuc3Vic3RyKDEsIHN0ci5sZW5ndGgpO1xyXG5cdFx0XHRcdHJldHVybiBmaXJzdCArIHNwYXJlO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdF9nZXRDaGFyOiBmdW5jdGlvbihjaCkge1xyXG5cdFx0XHR2YXIgdW5pY29kZSA9IGNoLmNoYXJDb2RlQXQoMCk7XHJcblx0XHRcdC8vw6XCpuKAmsOmxb7Fk8OkwrjCjcOlxZPCqMOmwrHigLDDpcKt4oCUw6XCpOKAnsOnwpDigKDDqMWSxpLDpeKAusK0w6TCueKAucOl4oCg4oCmLMOowr/igJ3DpeKAusW+w6XFvcW4w6XCreKAlMOnwqzCpizDpMK5xbjDpcKPwq/DpMK7wqXDqMKwxpLDp+KAncKow6jigKHCqsOlwrfCscOnxaHigJ7DpcKk4oCew6fCkOKAoMOl4oChwr3DpuKAosKwXHJcblx0XHRcdGlmICh1bmljb2RlID4gNDA4NjkgfHwgdW5pY29kZSA8IDE5OTY4KVxyXG5cdFx0XHRcdHJldHVybiBjaDsgLy9kZWFsV2l0aE90aGVycyhjaCk7XHJcblx0XHRcdC8vw6bCo+KCrMOmxbjCpcOmy5zCr8OlwpDCpsOmy5zCr8OlwqTFocOpxbjCs8Olwq3igJQsw6bLnMKvw6bFkuKAsMOlwqTFocOpxbjCs8Olwq3igJTDpcKk4oCew6fCkOKAoCzDpMK4wo3Dpsucwq/DpcKwwrHDp+KAusK0w6bFvcKlw6XFk8Koc3RyQ2hpbmVzZUZpcnN0UFnDpcKt4oCUw6fCrMKmw6TCuMKyw6TCuMKtw6bigLDCvsOlwq/CucOlwrrigJ3Dp8Wh4oCew6nCpuKAk8Olwq3igJTDpsKvwo1cclxuXHRcdFx0aWYgKCF0aGlzLm9wdGlvbnMuY2hlY2tQb2x5cGhvbmUpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuY2hhcl9kaWN0LmNoYXJBdCh1bmljb2RlIC0gMTk5NjgpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5wb2x5cGhvbmVbdW5pY29kZV0gPyB0aGlzLnBvbHlwaG9uZVt1bmljb2RlXSA6IHRoaXMuY2hhcl9kaWN0LmNoYXJBdChcclxuXHRcdFx0XHR1bmljb2RlIC0gMTk5NjgpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRfZ2V0UmVzdWx0OiBmdW5jdGlvbihjaGFycykge1xyXG5cdFx0XHRpZiAoIXRoaXMub3B0aW9ucy5jaGVja1BvbHlwaG9uZSlcclxuXHRcdFx0XHRyZXR1cm4gY2hhcnMuam9pbignJyk7XHJcblx0XHRcdHZhciByZXN1bHQgPSBbJyddO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gY2hhcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0XHR2YXIgc3RyID0gY2hhcnNbaV0sXHJcblx0XHRcdFx0XHRzdHJsZW4gPSBzdHIubGVuZ3RoO1xyXG5cdFx0XHRcdGlmIChzdHJsZW4gPT0gMSkge1xyXG5cdFx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCByZXN1bHQubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0W2tdICs9IHN0cjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dmFyIHN3YXAxID0gcmVzdWx0LnNsaWNlKDApO1xyXG5cdFx0XHRcdFx0cmVzdWx0ID0gW107XHJcblx0XHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHN0cmxlbjsgaisrKSB7XHJcblx0XHRcdFx0XHRcdC8vw6XCpMKNw6XLhsK2w6TCuOKCrMOkwrjCqsOn4oC6wrjDpcKQxZLDp8Wh4oCeYXJyUnNsdFxyXG5cdFx0XHRcdFx0XHR2YXIgc3dhcDIgPSBzd2FwMS5zbGljZSgwKTtcclxuXHRcdFx0XHRcdFx0Ly/DpsWgxaDDpcK94oCcw6XigLDCjcOlwq3igJTDp8KswqZzdHJba13DpsK3wrvDpcWgIMOly4bCsMOmwq/Cj8OkwrjCqsOl4oCmxpLDp8K0IMOmxZPCq8OlwrDCvlxyXG5cdFx0XHRcdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IHN3YXAyLmxlbmd0aDsgaysrKSB7XHJcblx0XHRcdFx0XHRcdFx0c3dhcDJba10gKz0gc3RyLmNoYXJBdChqKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvL8OmxaDFoMOlwqTCjcOly4bCtsOlwrnCtsOkwr/CrsOm4oCdwrnDpcKQxb3Dp8Wh4oCew6bigKLCsMOnwrvigJ7DqMK/xb7DpsW9wqXDpcuGwrBhcnJSc2x0w6TCuMWgXHJcblx0XHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoc3dhcDIpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0fVxyXG5cclxuXHR9O1xyXG5cclxuXHR2YXIgZXh0ZW5kID0gZnVuY3Rpb24oZHN0LCBzcmMpIHtcclxuXHRcdGZvciAodmFyIHByb3BlcnR5IGluIHNyYykge1xyXG5cdFx0XHRkc3RbcHJvcGVydHldID0gc3JjW3Byb3BlcnR5XTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBkc3Q7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIG5ldyBQaW55aW4oYXJndW1lbnRzKTtcclxufSkoKTtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbChzdHIpIHtcclxuXHRsZXQgcmVzID0gcGlueWluLmdldENhbWVsQ2hhcnMoc3RyKVxyXG5cdHJldHVybiByZXMuY2hhckF0KDApXHJcbn1cclxuIiwiXG4gICAgICAgIGltcG9ydCAnQGRjbG91ZGlvL3VuaS1zdGF0JztcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvZ3JvdXAvYWRkR3JvdXAvYWRkR3JvdXAubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvZ3JvdXAvYWRkR3JvdXAvYWRkR3JvdXAnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vYWRkR3JvdXAubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYzMwODQxMiZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYWRkR3JvdXAubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9hZGRHcm91cC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9hZGRHcm91cC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vYWRkR3JvdXAubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiOWFmYjhiZjZcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwi5aSp6LWQL1RpYW5jaVdlYi9wYWdlcy9ncm91cC9hZGRHcm91cC9hZGRHcm91cC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FkZEdyb3VwLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmMzMDg0MTImbXBUeXBlPXBhZ2VcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2Nyb2xsLXZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNTdHlsZTogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH0sXG4gICAgICBhdHRyczogeyBzY3JvbGxZOiB0cnVlLCBlbmFibGVCYWNrVG9Ub3A6IHRydWUsIGJ1YmJsZTogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidmlld1wiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZyZWUtbmF2LWJhclwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0uaXNBZGQgPyBcIumAieaLqeiBlOezu+S6ulwiIDogXCLlj5HotbfnvqTogYpcIixcbiAgICAgICAgICAgICAgICBzaG93QmFjazogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaG93UmlnaHQ6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJmcmVlLW1haW4tYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc2xvdDogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCLnoa7lrpogKFwiICsgX3ZtLnNlbGVjdENvdW50ICsgXCIpXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uYWRkR3JvdXAgfSxcbiAgICAgICAgICAgICAgICBzbG90OiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICAhX3ZtLmlzQWRkXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImZsZXhcIl0sIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIxMDBycHhcIiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxleC0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBsLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwianVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImZvbnQtbWRcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi576k6IGK5ZCN56ewXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiZmxleC0zXCIsIFwicC0xXCIsIFwianVzdGlmeS1jZW50ZXJcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiZm9udC1tZFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLor7fovpPlhaXnvqTogYrlkI3np7BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5nbmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ25hbWUgPSAkZXZlbnQuZGV0YWlsLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzY3JvbGwtdmlld1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdHlsZTogXCJoZWlnaHQ6XCIgKyBfdm0uc2Nyb2xsSGVpZ2h0ICsgXCJweDtcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2Nyb2xsWTogXCJ0cnVlXCIsIHNjcm9sbEludG9WaWV3OiBfdm0uc2Nyb2xsSW50byB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5saXN0LCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgeyBrZXk6IGluZGV4LCBhdHRyczogeyBpZDogXCJpdGVtLVwiICsgaXRlbS5sZXR0ZXIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIGl0ZW0uZGF0YS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHktMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHgtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWJvdHRvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmctbGlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImZvbnQtbWRcIiwgXCJ0ZXh0LWRhcmtcIl0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLmxldHRlcikpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKGl0ZW0uZGF0YSwgZnVuY3Rpb24oaXRlbTIsIGluZGV4Mikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJmcmVlLWxpc3QtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgyLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGl0ZW0yLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvdmVyOiBpdGVtMi5waG90b1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbTIucGhvdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiL3N0YXRpYy9pbWFnZXMvdXNlcnBpYy5qcGdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1JpZ2h0SWNvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dSaWdodDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0SXRlbShpdGVtMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdW5kZWQtY2lyY2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYWxpZ24tY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImp1c3RpZnktY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1yLTRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiNDBycHhcIiwgaGVpZ2h0OiBcIjQwcnB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcInJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90OiBcInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0yLmNoZWNrZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ2aWV3XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYWluLWJnLWNvbG9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdW5kZWQtY2lyY2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIzMHJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwcnB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgICAgICBcInBvc2l0aW9uLWZpeGVkXCIsXG4gICAgICAgICAgICAgICAgXCJyaWdodC0wXCIsXG4gICAgICAgICAgICAgICAgXCJib3R0b20tMFwiLFxuICAgICAgICAgICAgICAgIFwiYmctbGlnaHRcIixcbiAgICAgICAgICAgICAgICBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBcImZsZXgtY29sdW1uXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiNTBycHhcIiB9LFxuICAgICAgICAgICAgICBzdHlsZTogXCJ0b3A6XCIgKyBfdm0udG9wICsgXCJweDtcIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICB0b3VjaHN0YXJ0OiBfdm0udG91Y2hzdGFydCxcbiAgICAgICAgICAgICAgICB0b3VjaG1vdmU6IF92bS50b3VjaG1vdmUsXG4gICAgICAgICAgICAgICAgdG91Y2hlbmQ6IF92bS50b3VjaGVuZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5saXN0LCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiZmxleC0xXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFsaWduLWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBcImp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImZvbnQtc21cIiwgXCJ0ZXh0LW11dGVkXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmxldHRlcikpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uY3VycmVudFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgICBcInBvc2l0aW9uLWZpeGVkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwicm91bmRlZC1jaXJjbGVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJiZy1saWdodFwiLFxuICAgICAgICAgICAgICAgICAgICBcImJvcmRlclwiLFxuICAgICAgICAgICAgICAgICAgICBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGlnbi1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTUwcnB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxNTBycHhcIixcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogXCIzMDBycHhcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiBcInRvcDpcIiArIF92bS5tb2RhbFRvcCArIFwicHg7XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImZvbnQtbGdcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5jdXJyZW50KSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWRkR3JvdXAubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWRkR3JvdXAubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIiwiPHRlbXBsYXRlPlxuXHQ8dmlldz5cblx0XHRcclxuXHRcdDwhLS0g5a+86Iiq5qCPIC0tPlxyXG5cdFx0PGZyZWUtbmF2LWJhciA6dGl0bGU9XCJpc0FkZD8n6YCJ5oup6IGU57O75Lq6Jzon5Y+R6LW3576k6IGKJ1wiIHNob3dCYWNrIDpzaG93UmlnaHQ9XCJ0cnVlXCI+XHJcblx0XHRcdDxmcmVlLW1haW4tYnV0dG9uIEBjbGljaz1cImFkZEdyb3VwXCIgOm5hbWU9XCIn56Gu5a6aICgnK3NlbGVjdENvdW50KycpJ1wiIHNsb3Q9XCJyaWdodFwiPjwvZnJlZS1tYWluLWJ1dHRvbj5cclxuXHRcdDwvZnJlZS1uYXYtYmFyPlxyXG5cdFx0XHJcblx0XHRcclxuXHRcdDx2aWV3IGNsYXNzPVwiZmxleFwiIHN0eWxlPVwiaGVpZ2h0OiAxMDBycHg7XCIgdi1pZj1cIiFpc0FkZFwiPlxyXG5cdFx0XHQ8dmlldyAgY2xhc3M9XCJmbGV4LTEgcGwtMiB0ZXh0LWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZm9udC1tZCBcIj7nvqTogYrlkI3np7A8L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4LTMgcC0xIGp1c3RpZnktY2VudGVyXCI+XHJcblx0XHRcdFx0PGlucHV0IHYtbW9kZWw9XCJnbmFtZVwiIGNsYXNzPVwiZm9udC1tZFwiIGZvY3VzIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl576k6IGK5ZCN56ewXCIgLz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0XHJcbjwhLS0gXHRcdDx2aWV3IGNsYXNzPVwibm9Db252ZXJzYXRpb25cIiB2LWlmPVwiaXNOdWxsXCI+XHJcblx0XHRcdDx2aWV3PlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnQgdGV4dC1ncmF5IHRleHQtY2VudGVyXCIgc3R5bGU9XCJmb250LXNpemU6IDIwMHJweDtcIj4mI3hlNjYyOzwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldz5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cIiBmb250LW1kIHRleHQtZ3JheSB0ZXh0LWNlbnRlclwiPuaaguaXoOWFs+azqOWlveWPizwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PiAtLT5cclxuXHRcdFxyXG5cdFx0PCEtLSDpgJrorq/lvZXliJfooaggLS0+XHJcblx0XHQ8c2Nyb2xsLXZpZXcgc2Nyb2xsLXk9XCJ0cnVlXCIgOnN0eWxlPVwiJ2hlaWdodDonK3Njcm9sbEhlaWdodCsncHg7J1wiXHJcblx0XHQ6c2Nyb2xsLWludG8tdmlldz1cInNjcm9sbEludG9cIj5cclxuXHRcdFx0PHZpZXcgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gbGlzdFwiIDprZXk9XCJpbmRleFwiXHJcblx0XHRcdDppZD1cIidpdGVtLScraXRlbS5sZXR0ZXJcIj5cclxuXHRcdFx0XHQ8dmlldyB2LWlmPVwiaXRlbS5kYXRhLmxlbmd0aFwiIFxyXG5cdFx0XHRcdGNsYXNzPVwicHktMiBweC0zIGJvcmRlci1ib3R0b20gYmctbGlnaHRcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZm9udC1tZCB0ZXh0LWRhcmtcIj57e2l0ZW0ubGV0dGVyfX08L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDxmcmVlLWxpc3QtaXRlbSB2LWZvcj1cIihpdGVtMixpbmRleDIpIGluIGl0ZW0uZGF0YVwiIFxyXG5cdFx0XHRcdDprZXk9XCJpbmRleDJcIiA6dGl0bGU9XCJpdGVtMi5uYW1lXCIgXHJcblx0XHRcdFx0OmNvdmVyPVwiaXRlbTIucGhvdG8/aXRlbTIucGhvdG86Jy9zdGF0aWMvaW1hZ2VzL3VzZXJwaWMuanBnJ1wiXHJcblx0XHRcdFx0OnNob3dSaWdodEljb249XCJmYWxzZVwiIHNob3dSaWdodFxyXG5cdFx0XHRcdEBjbGljaz1cInNlbGVjdEl0ZW0oaXRlbTIpXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBzbG90PVwicmlnaHRcIlxyXG5cdFx0XHRcdFx0c3R5bGU9XCJ3aWR0aDogNDBycHg7aGVpZ2h0OiA0MHJweDtcIlxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJib3JkZXIgcm91bmRlZC1jaXJjbGUgZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXItNFwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiaXRlbTIuY2hlY2tlZFwiIFxyXG5cdFx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiAzMHJweDtoZWlnaHQ6IDMwcnB4O1wiXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwibWFpbi1iZy1jb2xvciByb3VuZGVkLWNpcmNsZVwiPjwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L2ZyZWUtbGlzdC1pdGVtPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0XHJcblx0XHQ8IS0tIOS+p+i+ueWvvOiIquadoSAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwicG9zaXRpb24tZml4ZWQgcmlnaHQtMCBib3R0b20tMCBiZy1saWdodCBmbGV4IGZsZXgtY29sdW1uXCIgOnN0eWxlPVwiJ3RvcDonK3RvcCsncHg7J1wiIHN0eWxlPVwid2lkdGg6IDUwcnB4O1wiIEB0b3VjaHN0YXJ0PVwidG91Y2hzdGFydFwiIEB0b3VjaG1vdmU9XCJ0b3VjaG1vdmVcIiBAdG91Y2hlbmQ9XCJ0b3VjaGVuZFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgtMSBmbGV4IGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXHJcblx0XHRcdHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGxpc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImZvbnQtc20gdGV4dC1tdXRlZFwiPnt7aXRlbS5sZXR0ZXJ9fTwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHRcdDx2aWV3IGNsYXNzPVwicG9zaXRpb24tZml4ZWQgcm91bmRlZC1jaXJjbGUgYmctbGlnaHQgYm9yZGVyIGZsZXggYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyXCIgdi1pZj1cImN1cnJlbnRcIlxyXG5cdFx0c3R5bGU9XCJ3aWR0aDogMTUwcnB4O2hlaWdodDogMTUwcnB4O2xlZnQ6IDMwMHJweDtcIlxyXG5cdFx0OnN0eWxlPVwiJ3RvcDonK21vZGFsVG9wKydweDsnXCI+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwiZm9udC1sZ1wiPnt7Y3VycmVudH19PC90ZXh0PlxyXG5cdFx0PC92aWV3PlxyXG5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHRpbXBvcnQgZnJlZU5hdkJhciBmcm9tIFwiQC9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1uYXYtYmFyLnZ1ZVwiXHJcblx0aW1wb3J0IGZyZWVMaXN0SXRlbSBmcm9tIFwiQC9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1saXN0LWl0ZW0udnVlXCJcclxuXHRpbXBvcnQgZnJlZU1haW5CdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1tYWluLWJ1dHRvbi52dWUnO1xyXG5cdGltcG9ydCBnZXRDb2RlTXNnIGZyb20gXCJAL2pzX3Nkay9FcnJvckNvZGUuanNcIlxyXG5cdGltcG9ydCB7aW5pdGlhbH0gZnJvbSBcIkAvanNfc2RrL2NoaW5lc2VDb252ZXJzaW9uLmpzXCIgLy/lvJXlhaXmsYnlrZfovazmi7zpn7NcclxuXHR2YXIgSklNID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YS5KSU07XHJcblx0dmFyIFNFUlZFUl9BUEkgPSBnZXRBcHAoKS5nbG9iYWxEYXRhLlNFUlZFUl9BUEk7XHJcblx0dmFyIF90aGlzO1xyXG5cdFxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdGZyZWVOYXZCYXIsXHJcblx0XHRcdGZyZWVMaXN0SXRlbSxcclxuXHRcdFx0ZnJlZU1haW5CdXR0b25cclxuXHRcdH0sXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0Z2lkOicnLFxyXG5cdFx0XHRcdGduYW1lOicnLFxyXG5cdFx0XHRcdGxpc3Q6IFtdLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRvcDowLFxyXG5cdFx0XHRcdHNjcm9sbEhlaWdodDowLFxyXG5cdFx0XHRcdHNjcm9sbEludG86JycsXHJcblx0XHRcdFx0Y3VycmVudDonJyxcclxuXHRcdFx0XHRzZWxlY3RMaXN0OltdLFxyXG5cdFx0XHRcdGlzQWRkOmZhbHNlLC8v5aKe5Yqg5oiQ5ZGYXHJcblx0XHRcdFx0aXNOdWxsOmZhbHNlXG5cdFx0XHR9XG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKXtcclxuXHRcdFx0Ly8g55uR5ZCs6ZSu55uY6auY5bqm5Y+Y5YyWXHJcblx0XHRcdHVuaS5vbktleWJvYXJkSGVpZ2h0Q2hhbmdlKHJlcyA9PiB7XHJcblx0XHRcclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHRvblNob3coKXtcclxuXHRcdFx0Y29uc29sZS5sb2coX3RoaXMuaXNOdWxsKVxyXG5cdFx0XHRfdGhpcy5saXN0PVtdO1xyXG5cdFx0XHRmb3IodmFyIGk9MDtpPDI2O2krKyl7XHJcblx0XHRcdFx0dmFyIG9iaiA9IHtcclxuXHRcdFx0XHRcdGxldHRlcjpTdHJpbmcuZnJvbUNoYXJDb2RlKDY1K2kpLFxyXG5cdFx0XHRcdFx0ZGF0YTpbXVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRfdGhpcy5saXN0LnB1c2gob2JqKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdFx0dXJsOlNFUlZFUl9BUEkrXCJhcHBVc2VyL2NvbnRhY3RcIixcclxuXHRcdFx0XHRoZWFkZXI6e1xyXG5cdFx0XHRcdFx0XCJ0b2tlblwiOnVuaS5nZXRTdG9yYWdlU3luYyhcInNldFVzZXJEYXRhXCIpLnRva2VuXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRtZXRob2Q6XCJQT1NUXCIsXHJcblx0XHRcdFx0c3VjY2VzcyhyZXMpe1xyXG5cdFx0XHRcdFx0dmFyIHJlc3VsdCA9IHJlcy5kYXRhLnJlc3VsdDtcclxuXHRcdFx0XHRcdHZhciBsZW4gPSByZXN1bHQubGVuZ3RoXHJcblx0XHRcdFx0XHRpZihsZW49PTApe1xyXG5cdFx0XHRcdFx0XHRfdGhpcy5pc051bGw9dHJ1ZVxyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdF90aGlzLmlzTnVsbD1mYWxzZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Zm9yKHZhciBpPTA7aTxsZW47aSsrKXtcclxuXHRcdFx0XHRcdFx0bGV0IGxldHRlciA9IGluaXRpYWwocmVzdWx0W2ldLm5hbWUpXHJcblx0XHRcdFx0XHRcdGxldCBpbmRleCA9IGxldHRlci5jaGFyQ29kZUF0KCktNjU7XHJcblx0XHRcdFx0XHRcdF90aGlzLmxpc3RbaW5kZXhdLmRhdGEucHVzaChyZXN1bHRbaV0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkOmZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0X3RoaXM9dGhpcztcclxuXHRcdFx0aWYoZS5naWQpe1xyXG5cdFx0XHRcdF90aGlzLmdpZD1lLmdpZDtcclxuXHRcdFx0XHRfdGhpcy5nbmFtZT1lLmduYW1lO1xyXG5cdFx0XHRcdF90aGlzLmlzQWRkPXRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGxldCByZXMgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKVxyXG5cdFx0XHR0aGlzLnRvcCA9IHJlcy5zdGF0dXNCYXJIZWlnaHQgKyB1bmkudXB4MnB4KDkwKVxyXG5cdFx0XHR0aGlzLnNjcm9sbEhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHQgLSB0aGlzLnRvcCAtdW5pLnVweDJweCgxMDApXHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0bW9kYWxUb3AoKXtcclxuXHRcdFx0XHRyZXR1cm4gKHRoaXMuc2Nyb2xsSGVpZ2h0IC0gdW5pLnVweDJweCgxNTApKSAvIDJcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5q+P5Liq57Si5byV55qE6auY5bqmXHJcblx0XHRcdGl0ZW1IZWlnaHQoKSB7XHJcblx0XHRcdFx0bGV0IGNvdW50ID0gdGhpcy5saXN0Lmxlbmd0aFxyXG5cdFx0XHRcdGlmKGNvdW50IDwgMSl7XHJcblx0XHRcdFx0XHRyZXR1cm4gMFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5zY3JvbGxIZWlnaHQgLyAgY291bnRcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6YCJ5Lit5pWw6YePXHJcblx0XHRcdHNlbGVjdENvdW50KCl7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMuc2VsZWN0TGlzdC5sZW5ndGhcclxuXHRcdFx0fVxyXG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGFkZEdyb3VwKCl7XHJcblx0XHRcdFx0aWYoIV90aGlzLmlzQWRkKXtcclxuXHRcdFx0XHRcdGlmKHRoaXMuZ25hbWU9PVwiXCIpe1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcInRpdGxlXCI6XCLor7fovpPlhaXnvqTogYrlkI3np7BcIixcclxuXHRcdFx0XHRcdFx0XHRcImljb25cIjpcIm5vbmVcIlxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZih0aGlzLnNlbGVjdExpc3QubGVuZ3RoPDIpe1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcInRpdGxlXCI6XCLor7foh7PlsJHpgInmi6nkuKTkvY3lpb3lj4tcIixcclxuXHRcdFx0XHRcdFx0XHRcImljb25cIjpcIm5vbmVcIlxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRpZih0aGlzLnNlbGVjdExpc3QubGVuZ3RoPDEpe1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcInRpdGxlXCI6XCLor7foh7PlsJHpgInmi6nkuIDkvY3lpb3lj4tcIixcclxuXHRcdFx0XHRcdFx0XHRcImljb25cIjpcIm5vbmVcIlxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoaXMuc2VsZWN0TGlzdCA9IHRoaXMuc2VsZWN0TGlzdC5tYXAocmVzPT57XHJcblx0XHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0XHR1c2VybmFtZTpyZXMudG9rZW4sXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRpZihfdGhpcy5pc0FkZCl7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShfdGhpcy5zZWxlY3RMaXN0KSlcclxuXHRcdFx0XHRcdEpJTS5hZGRHcm91cE1lbWJlcnMoe1xyXG5cdFx0XHRcdFx0XHQnZ2lkJyA6IF90aGlzLmdpZCxcclxuXHRcdFx0XHRcdFx0J21lbWJlcl91c2VybmFtZXMnIDogX3RoaXMuc2VsZWN0TGlzdFxyXG5cdFx0XHRcdFx0fSkub25TdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XCJ0aXRsZVwiOlwi6YKA6K+35oiQ5YqfXCIsXHJcblx0XHRcdFx0XHRcdFx0XCJwb3NpdGlvblwiOlwiYm90dG9tXCJcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdHVybDpcIi4uL2dyb3VwQ2hhdC9ncm91cENoYXQ/Z2lkPVwiK190aGlzLmdpZCtcIiZnbmFtZT1cIitfdGhpcy5nbmFtZVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9KS5vbkZhaWwoZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcInRpdGxlXCI6Z2V0Q29kZU1zZyhkYXRhLmNvZGUpLFxyXG5cdFx0XHRcdFx0XHRcdFwicG9zaXRpb25cIjpcImJvdHRvbVwiXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdHVuaS5yZWRpcmVjdFRvKHtcclxuXHRcdFx0XHRcdFx0XHR1cmw6YC4uL2FkZEdyb3VwL2FkZEdyb3VwP2dpZD0ke190aGlzLmdpZH0mZ25hbWU9JHtfdGhpcy5nbmFtZX1gXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdEpJTS5jcmVhdGVHcm91cCh7XHJcblx0XHRcdFx0XHRcdCdncm91cF9uYW1lJyA6IF90aGlzLmduYW1lLFxyXG5cdFx0XHRcdFx0fSkub25TdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRcdFx0X3RoaXMuZ2lkPWRhdGEuZ2lkO1xyXG5cdFx0XHRcdFx0XHRKSU0uYWRkR3JvdXBNZW1iZXJzKHtcclxuXHRcdFx0XHRcdFx0XHQnZ2lkJyA6IGRhdGEuZ2lkLFxyXG5cdFx0XHRcdFx0XHRcdCdtZW1iZXJfdXNlcm5hbWVzJyA6IF90aGlzLnNlbGVjdExpc3RcclxuXHRcdFx0XHRcdFx0fSkub25TdWNjZXNzKGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmw6XCIuLi9ncm91cENoYXQvZ3JvdXBDaGF0P2dpZD1cIitfdGhpcy5naWQrXCImZ25hbWU9XCIrX3RoaXMuZ25hbWVcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH0pLm9uRmFpbChmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcInRpdGxlXCI6Z2V0Q29kZU1zZyhkYXRhLmNvZGUpLFxyXG5cdFx0XHRcdFx0XHRcdFx0XCJwb3NpdGlvblwiOlwiYm90dG9tXCJcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0pLm9uRmFpbChmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFwidGl0bGVcIjpnZXRDb2RlTXNnKGRhdGEuY29kZSksXHJcblx0XHRcdFx0XHRcdFx0XCJwb3NpdGlvblwiOlwiYm90dG9tXCJcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcblx0XHRcdHRvdWNoc3RhcnQoZSl7XHJcblx0XHRcdFx0dGhpcy5jaGFuZ2VTY3JvbGxJbnRvKGUpXHJcblx0XHRcdH0sXHJcblx0XHRcdHRvdWNobW92ZShlKXtcclxuXHRcdFx0XHR0aGlzLmNoYW5nZVNjcm9sbEludG8oZSlcclxuXHRcdFx0fSxcclxuXHRcdFx0dG91Y2hlbmQoZSl7XHJcblx0XHRcdFx0dGhpcy5jdXJyZW50ID0gJydcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6IGU5YqoXHJcblx0XHRcdGNoYW5nZVNjcm9sbEludG8oZSl7XHJcblx0XHRcdFx0bGV0IFkgPSBlLnRvdWNoZXNbMF0ucGFnZVlcclxuXHRcdFx0XHQvLyAjaWZkZWYgTVBcclxuXHRcdFx0XHRZID0gWSAtIHRoaXMudG9wXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0bGV0IGluZGV4ID0gTWF0aC5mbG9vcihZIC8gdGhpcy5pdGVtSGVpZ2h0KVxyXG5cdFx0XHRcdGxldCBpdGVtID0gdGhpcy5saXN0W2luZGV4XVxyXG5cdFx0XHRcdGlmKGl0ZW0pe1xyXG5cdFx0XHRcdFx0dGhpcy5zY3JvbGxJbnRvID0gJ2l0ZW0tJytpdGVtLmxldHRlclxyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50ID0gaXRlbS5sZXR0ZXJcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOmAieS4rS/lj5bmtojpgInkuK1cclxuXHRcdFx0c2VsZWN0SXRlbShpdGVtKXtcclxuXHRcdFx0XHRpdGVtLmNoZWNrZWQgPSAhaXRlbS5jaGVja2VkXHJcblx0XHRcdFx0aWYoaXRlbS5jaGVja2VkKXsgLy8g6YCJ5LitXHJcblx0XHRcdFx0XHR0aGlzLnNlbGVjdExpc3QucHVzaChpdGVtKVxyXG5cdFx0XHRcdH0gZWxzZSB7IC8vIOWPlua2iOmAieS4rVxyXG5cdFx0XHRcdFx0bGV0IGluZGV4ID0gdGhpcy5zZWxlY3RMaXN0LmZpbmRJbmRleCh2PT4gdiA9PT0gaXRlbSlcclxuXHRcdFx0XHRcdGlmKGluZGV4ID4gLTEpe1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNlbGVjdExpc3Quc3BsaWNlKGluZGV4LDEpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHQubm9Db252ZXJzYXRpb257XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMTAwcnB4O1xyXG5cdH1cbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FkZEdyb3VwLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FkZEdyb3VwLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwibm9Db252ZXJzYXRpb25cIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEwMHJweFwiXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9