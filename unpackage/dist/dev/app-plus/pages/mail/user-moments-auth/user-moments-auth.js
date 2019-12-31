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
/******/ 	return __webpack_require__(__webpack_require__.s = 65);
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

module.exports = {"_from":"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001","_id":"@dcloudio/uni-stat@2.0.0-v3-24020191018001","_inBundle":false,"_integrity":"sha512-nYBm5pRrYzrj2dKMqucWSF2PwInUMnn3MLHM/ik3gnLUEKSW61rzcY1RPlUwaH7c+Snm6N+bAJzmj3GvlrlVXA==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"range","registry":true,"raw":"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"^2.0.0-alpha-24420191128001","saveSpec":null,"fetchSpec":"^2.0.0-alpha-24420191128001"},"_requiredBy":["/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-v3-24020191018001.tgz","_shasum":"6ef04326cc0b945726413eebe442ab8f47c7536c","_spec":"@dcloudio/uni-stat@^2.0.0-alpha-24420191128001","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"197e8df53cc9d4c3f6eb722b918ccf51672b5cfe","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-v3-24020191018001"};

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
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 8);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!E:/天赐/TianciWeb/App.vue?vue&type=style&index=0&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "cuIconfont-spin": {
    "WebkitAnimation": "cuIcon-spin 2s infinite linear",
    "animation": "cuIcon-spin 2s infinite linear",
    "display": "inline-block"
  },
  "cuIconfont-pulse": {
    "WebkitAnimation": "cuIcon-spin 1s infinite steps(8)",
    "animation": "cuIcon-spin 1s infinite steps(8)",
    "display": "inline-block"
  },
  "@FONT-FACE": [
    {
      "fontFamily": "cuIcon",
      "src": "url('//at.alicdn.com/t/font_533566_yfq2d9wdij.eot?t=1545239985831#iefix') format('embedded-opentype'),\r\n\t\t\r\n\t\turl('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),\r\n\t\turl('//at.alicdn.com/t/font_533566_yfq2d9wdij.ttf?t=1545239985831') format('truetype'),\r\n\t\t\r\n\t\turl('//at.alicdn.com/t/font_533566_yfq2d9wdij.svg?t=1545239985831#cuIconfont') format('svg')"
    }
  ],
  "cuIcon-appreciate": {
    "content:before": "\"\\e644\""
  },
  "cuIcon-check": {
    "content:before": "\"\\e645\""
  },
  "cuIcon-close": {
    "content:before": "\"\\e646\""
  },
  "cuIcon-edit": {
    "content:before": "\"\\e649\""
  },
  "cuIcon-emoji": {
    "content:before": "\"\\e64a\""
  },
  "cuIcon-favorfill": {
    "content:before": "\"\\e64b\""
  },
  "cuIcon-favor": {
    "content:before": "\"\\e64c\""
  },
  "cuIcon-loading": {
    "content:before": "\"\\e64f\""
  },
  "cuIcon-locationfill": {
    "content:before": "\"\\e650\""
  },
  "cuIcon-location": {
    "content:before": "\"\\e651\""
  },
  "cuIcon-phone": {
    "content:before": "\"\\e652\""
  },
  "cuIcon-roundcheckfill": {
    "content:before": "\"\\e656\""
  },
  "cuIcon-roundcheck": {
    "content:before": "\"\\e657\""
  },
  "cuIcon-roundclosefill": {
    "content:before": "\"\\e658\""
  },
  "cuIcon-roundclose": {
    "content:before": "\"\\e659\""
  },
  "cuIcon-roundrightfill": {
    "content:before": "\"\\e65a\""
  },
  "cuIcon-roundright": {
    "content:before": "\"\\e65b\""
  },
  "cuIcon-search": {
    "content:before": "\"\\e65c\""
  },
  "cuIcon-taxi": {
    "content:before": "\"\\e65d\""
  },
  "cuIcon-timefill": {
    "content:before": "\"\\e65e\""
  },
  "cuIcon-time": {
    "content:before": "\"\\e65f\""
  },
  "cuIcon-unfold": {
    "content:before": "\"\\e661\""
  },
  "cuIcon-warnfill": {
    "content:before": "\"\\e662\""
  },
  "cuIcon-warn": {
    "content:before": "\"\\e663\""
  },
  "cuIcon-camerafill": {
    "content:before": "\"\\e664\""
  },
  "cuIcon-camera": {
    "content:before": "\"\\e665\""
  },
  "cuIcon-commentfill": {
    "content:before": "\"\\e666\""
  },
  "cuIcon-comment": {
    "content:before": "\"\\e667\""
  },
  "cuIcon-likefill": {
    "content:before": "\"\\e668\""
  },
  "cuIcon-like": {
    "content:before": "\"\\e669\""
  },
  "cuIcon-notificationfill": {
    "content:before": "\"\\e66a\""
  },
  "cuIcon-notification": {
    "content:before": "\"\\e66b\""
  },
  "cuIcon-order": {
    "content:before": "\"\\e66c\""
  },
  "cuIcon-samefill": {
    "content:before": "\"\\e66d\""
  },
  "cuIcon-same": {
    "content:before": "\"\\e66e\""
  },
  "cuIcon-deliver": {
    "content:before": "\"\\e671\""
  },
  "cuIcon-evaluate": {
    "content:before": "\"\\e672\""
  },
  "cuIcon-pay": {
    "content:before": "\"\\e673\""
  },
  "cuIcon-send": {
    "content:before": "\"\\e675\""
  },
  "cuIcon-shop": {
    "content:before": "\"\\e676\""
  },
  "cuIcon-ticket": {
    "content:before": "\"\\e677\""
  },
  "cuIcon-back": {
    "content:before": "\"\\e679\""
  },
  "cuIcon-cascades": {
    "content:before": "\"\\e67c\""
  },
  "cuIcon-discover": {
    "content:before": "\"\\e67e\""
  },
  "cuIcon-list": {
    "content:before": "\"\\e682\""
  },
  "cuIcon-more": {
    "content:before": "\"\\e684\""
  },
  "cuIcon-scan": {
    "content:before": "\"\\e689\""
  },
  "cuIcon-settings": {
    "content:before": "\"\\e68a\""
  },
  "cuIcon-questionfill": {
    "content:before": "\"\\e690\""
  },
  "cuIcon-question": {
    "content:before": "\"\\e691\""
  },
  "cuIcon-shopfill": {
    "content:before": "\"\\e697\""
  },
  "cuIcon-form": {
    "content:before": "\"\\e699\""
  },
  "cuIcon-pic": {
    "content:before": "\"\\e69b\""
  },
  "cuIcon-filter": {
    "content:before": "\"\\e69c\""
  },
  "cuIcon-footprint": {
    "content:before": "\"\\e69d\""
  },
  "cuIcon-top": {
    "content:before": "\"\\e69e\""
  },
  "cuIcon-pulldown": {
    "content:before": "\"\\e69f\""
  },
  "cuIcon-pullup": {
    "content:before": "\"\\e6a0\""
  },
  "cuIcon-right": {
    "content:before": "\"\\e6a3\""
  },
  "cuIcon-refresh": {
    "content:before": "\"\\e6a4\""
  },
  "cuIcon-moreandroid": {
    "content:before": "\"\\e6a5\""
  },
  "cuIcon-deletefill": {
    "content:before": "\"\\e6a6\""
  },
  "cuIcon-refund": {
    "content:before": "\"\\e6ac\""
  },
  "cuIcon-cart": {
    "content:before": "\"\\e6af\""
  },
  "cuIcon-qrcode": {
    "content:before": "\"\\e6b0\""
  },
  "cuIcon-remind": {
    "content:before": "\"\\e6b2\""
  },
  "cuIcon-delete": {
    "content:before": "\"\\e6b4\""
  },
  "cuIcon-profile": {
    "content:before": "\"\\e6b7\""
  },
  "cuIcon-home": {
    "content:before": "\"\\e6b8\""
  },
  "cuIcon-cartfill": {
    "content:before": "\"\\e6b9\""
  },
  "cuIcon-discoverfill": {
    "content:before": "\"\\e6ba\""
  },
  "cuIcon-homefill": {
    "content:before": "\"\\e6bb\""
  },
  "cuIcon-message": {
    "content:before": "\"\\e6bc\""
  },
  "cuIcon-addressbook": {
    "content:before": "\"\\e6bd\""
  },
  "cuIcon-link": {
    "content:before": "\"\\e6bf\""
  },
  "cuIcon-lock": {
    "content:before": "\"\\e6c0\""
  },
  "cuIcon-unlock": {
    "content:before": "\"\\e6c2\""
  },
  "cuIcon-vip": {
    "content:before": "\"\\e6c3\""
  },
  "cuIcon-weibo": {
    "content:before": "\"\\e6c4\""
  },
  "cuIcon-activity": {
    "content:before": "\"\\e6c5\""
  },
  "cuIcon-friendaddfill": {
    "content:before": "\"\\e6c9\""
  },
  "cuIcon-friendadd": {
    "content:before": "\"\\e6ca\""
  },
  "cuIcon-friendfamous": {
    "content:before": "\"\\e6cb\""
  },
  "cuIcon-friend": {
    "content:before": "\"\\e6cc\""
  },
  "cuIcon-goods": {
    "content:before": "\"\\e6cd\""
  },
  "cuIcon-selection": {
    "content:before": "\"\\e6ce\""
  },
  "cuIcon-explore": {
    "content:before": "\"\\e6d2\""
  },
  "cuIcon-present": {
    "content:before": "\"\\e6d3\""
  },
  "cuIcon-squarecheckfill": {
    "content:before": "\"\\e6d4\""
  },
  "cuIcon-square": {
    "content:before": "\"\\e6d5\""
  },
  "cuIcon-squarecheck": {
    "content:before": "\"\\e6d6\""
  },
  "cuIcon-round": {
    "content:before": "\"\\e6d7\""
  },
  "cuIcon-roundaddfill": {
    "content:before": "\"\\e6d8\""
  },
  "cuIcon-roundadd": {
    "content:before": "\"\\e6d9\""
  },
  "cuIcon-add": {
    "content:before": "\"\\e6da\""
  },
  "cuIcon-notificationforbidfill": {
    "content:before": "\"\\e6db\""
  },
  "cuIcon-explorefill": {
    "content:before": "\"\\e6dd\""
  },
  "cuIcon-fold": {
    "content:before": "\"\\e6de\""
  },
  "cuIcon-game": {
    "content:before": "\"\\e6df\""
  },
  "cuIcon-redpacket": {
    "content:before": "\"\\e6e0\""
  },
  "cuIcon-selectionfill": {
    "content:before": "\"\\e6e1\""
  },
  "cuIcon-similar": {
    "content:before": "\"\\e6e2\""
  },
  "cuIcon-appreciatefill": {
    "content:before": "\"\\e6e3\""
  },
  "cuIcon-infofill": {
    "content:before": "\"\\e6e4\""
  },
  "cuIcon-info": {
    "content:before": "\"\\e6e5\""
  },
  "cuIcon-forwardfill": {
    "content:before": "\"\\e6ea\""
  },
  "cuIcon-forward": {
    "content:before": "\"\\e6eb\""
  },
  "cuIcon-rechargefill": {
    "content:before": "\"\\e6ec\""
  },
  "cuIcon-recharge": {
    "content:before": "\"\\e6ed\""
  },
  "cuIcon-vipcard": {
    "content:before": "\"\\e6ee\""
  },
  "cuIcon-voice": {
    "content:before": "\"\\e6ef\""
  },
  "cuIcon-voicefill": {
    "content:before": "\"\\e6f0\""
  },
  "cuIcon-friendfavor": {
    "content:before": "\"\\e6f1\""
  },
  "cuIcon-wifi": {
    "content:before": "\"\\e6f2\""
  },
  "cuIcon-share": {
    "content:before": "\"\\e6f3\""
  },
  "cuIcon-wefill": {
    "content:before": "\"\\e6f4\""
  },
  "cuIcon-we": {
    "content:before": "\"\\e6f5\""
  },
  "cuIcon-lightauto": {
    "content:before": "\"\\e6f6\""
  },
  "cuIcon-lightforbid": {
    "content:before": "\"\\e6f7\""
  },
  "cuIcon-lightfill": {
    "content:before": "\"\\e6f8\""
  },
  "cuIcon-camerarotate": {
    "content:before": "\"\\e6f9\""
  },
  "cuIcon-light": {
    "content:before": "\"\\e6fa\""
  },
  "cuIcon-barcode": {
    "content:before": "\"\\e6fb\""
  },
  "cuIcon-flashlightclose": {
    "content:before": "\"\\e6fc\""
  },
  "cuIcon-flashlightopen": {
    "content:before": "\"\\e6fd\""
  },
  "cuIcon-searchlist": {
    "content:before": "\"\\e6fe\""
  },
  "cuIcon-service": {
    "content:before": "\"\\e6ff\""
  },
  "cuIcon-sort": {
    "content:before": "\"\\e700\""
  },
  "cuIcon-down": {
    "content:before": "\"\\e703\""
  },
  "cuIcon-mobile": {
    "content:before": "\"\\e704\""
  },
  "cuIcon-mobilefill": {
    "content:before": "\"\\e705\""
  },
  "cuIcon-copy": {
    "content:before": "\"\\e706\""
  },
  "cuIcon-countdownfill": {
    "content:before": "\"\\e707\""
  },
  "cuIcon-countdown": {
    "content:before": "\"\\e708\""
  },
  "cuIcon-noticefill": {
    "content:before": "\"\\e709\""
  },
  "cuIcon-notice": {
    "content:before": "\"\\e70a\""
  },
  "cuIcon-upstagefill": {
    "content:before": "\"\\e70e\""
  },
  "cuIcon-upstage": {
    "content:before": "\"\\e70f\""
  },
  "cuIcon-babyfill": {
    "content:before": "\"\\e710\""
  },
  "cuIcon-baby": {
    "content:before": "\"\\e711\""
  },
  "cuIcon-brandfill": {
    "content:before": "\"\\e712\""
  },
  "cuIcon-brand": {
    "content:before": "\"\\e713\""
  },
  "cuIcon-choicenessfill": {
    "content:before": "\"\\e714\""
  },
  "cuIcon-choiceness": {
    "content:before": "\"\\e715\""
  },
  "cuIcon-clothesfill": {
    "content:before": "\"\\e716\""
  },
  "cuIcon-clothes": {
    "content:before": "\"\\e717\""
  },
  "cuIcon-creativefill": {
    "content:before": "\"\\e718\""
  },
  "cuIcon-creative": {
    "content:before": "\"\\e719\""
  },
  "cuIcon-female": {
    "content:before": "\"\\e71a\""
  },
  "cuIcon-keyboard": {
    "content:before": "\"\\e71b\""
  },
  "cuIcon-male": {
    "content:before": "\"\\e71c\""
  },
  "cuIcon-newfill": {
    "content:before": "\"\\e71d\""
  },
  "cuIcon-new": {
    "content:before": "\"\\e71e\""
  },
  "cuIcon-pullleft": {
    "content:before": "\"\\e71f\""
  },
  "cuIcon-pullright": {
    "content:before": "\"\\e720\""
  },
  "cuIcon-rankfill": {
    "content:before": "\"\\e721\""
  },
  "cuIcon-rank": {
    "content:before": "\"\\e722\""
  },
  "cuIcon-bad": {
    "content:before": "\"\\e723\""
  },
  "cuIcon-cameraadd": {
    "content:before": "\"\\e724\""
  },
  "cuIcon-focus": {
    "content:before": "\"\\e725\""
  },
  "cuIcon-friendfill": {
    "content:before": "\"\\e726\""
  },
  "cuIcon-cameraaddfill": {
    "content:before": "\"\\e727\""
  },
  "cuIcon-apps": {
    "content:before": "\"\\e729\""
  },
  "cuIcon-paintfill": {
    "content:before": "\"\\e72a\""
  },
  "cuIcon-paint": {
    "content:before": "\"\\e72b\""
  },
  "cuIcon-picfill": {
    "content:before": "\"\\e72c\""
  },
  "cuIcon-refresharrow": {
    "content:before": "\"\\e72d\""
  },
  "cuIcon-colorlens": {
    "content:before": "\"\\e6e6\""
  },
  "cuIcon-markfill": {
    "content:before": "\"\\e730\""
  },
  "cuIcon-mark": {
    "content:before": "\"\\e731\""
  },
  "cuIcon-presentfill": {
    "content:before": "\"\\e732\""
  },
  "cuIcon-repeal": {
    "content:before": "\"\\e733\""
  },
  "cuIcon-album": {
    "content:before": "\"\\e734\""
  },
  "cuIcon-peoplefill": {
    "content:before": "\"\\e735\""
  },
  "cuIcon-people": {
    "content:before": "\"\\e736\""
  },
  "cuIcon-servicefill": {
    "content:before": "\"\\e737\""
  },
  "cuIcon-repair": {
    "content:before": "\"\\e738\""
  },
  "cuIcon-file": {
    "content:before": "\"\\e739\""
  },
  "cuIcon-repairfill": {
    "content:before": "\"\\e73a\""
  },
  "cuIcon-taoxiaopu": {
    "content:before": "\"\\e73b\""
  },
  "cuIcon-weixin": {
    "content:before": "\"\\e612\""
  },
  "cuIcon-attentionfill": {
    "content:before": "\"\\e73c\""
  },
  "cuIcon-attention": {
    "content:before": "\"\\e73d\""
  },
  "cuIcon-commandfill": {
    "content:before": "\"\\e73e\""
  },
  "cuIcon-command": {
    "content:before": "\"\\e73f\""
  },
  "cuIcon-communityfill": {
    "content:before": "\"\\e740\""
  },
  "cuIcon-community": {
    "content:before": "\"\\e741\""
  },
  "cuIcon-read": {
    "content:before": "\"\\e742\""
  },
  "cuIcon-calendar": {
    "content:before": "\"\\e74a\""
  },
  "cuIcon-cut": {
    "content:before": "\"\\e74b\""
  },
  "cuIcon-magic": {
    "content:before": "\"\\e74c\""
  },
  "cuIcon-backwardfill": {
    "content:before": "\"\\e74d\""
  },
  "cuIcon-playfill": {
    "content:before": "\"\\e74f\""
  },
  "cuIcon-stop": {
    "content:before": "\"\\e750\""
  },
  "cuIcon-tagfill": {
    "content:before": "\"\\e751\""
  },
  "cuIcon-tag": {
    "content:before": "\"\\e752\""
  },
  "cuIcon-group": {
    "content:before": "\"\\e753\""
  },
  "cuIcon-all": {
    "content:before": "\"\\e755\""
  },
  "cuIcon-backdelete": {
    "content:before": "\"\\e756\""
  },
  "cuIcon-hotfill": {
    "content:before": "\"\\e757\""
  },
  "cuIcon-hot": {
    "content:before": "\"\\e758\""
  },
  "cuIcon-post": {
    "content:before": "\"\\e759\""
  },
  "cuIcon-radiobox": {
    "content:before": "\"\\e75b\""
  },
  "cuIcon-rounddown": {
    "content:before": "\"\\e75c\""
  },
  "cuIcon-upload": {
    "content:before": "\"\\e75d\""
  },
  "cuIcon-writefill": {
    "content:before": "\"\\e760\""
  },
  "cuIcon-write": {
    "content:before": "\"\\e761\""
  },
  "cuIcon-radioboxfill": {
    "content:before": "\"\\e763\""
  },
  "cuIcon-punch": {
    "content:before": "\"\\e764\""
  },
  "cuIcon-shake": {
    "content:before": "\"\\e765\""
  },
  "cuIcon-move": {
    "content:before": "\"\\e768\""
  },
  "cuIcon-safe": {
    "content:before": "\"\\e769\""
  },
  "cuIcon-activityfill": {
    "content:before": "\"\\e775\""
  },
  "cuIcon-crownfill": {
    "content:before": "\"\\e776\""
  },
  "cuIcon-crown": {
    "content:before": "\"\\e777\""
  },
  "cuIcon-goodsfill": {
    "content:before": "\"\\e778\""
  },
  "cuIcon-messagefill": {
    "content:before": "\"\\e779\""
  },
  "cuIcon-profilefill": {
    "content:before": "\"\\e77a\""
  },
  "cuIcon-sound": {
    "content:before": "\"\\e77b\""
  },
  "cuIcon-sponsorfill": {
    "content:before": "\"\\e77c\""
  },
  "cuIcon-sponsor": {
    "content:before": "\"\\e77d\""
  },
  "cuIcon-upblock": {
    "content:before": "\"\\e77e\""
  },
  "cuIcon-weblock": {
    "content:before": "\"\\e77f\""
  },
  "cuIcon-weunblock": {
    "content:before": "\"\\e780\""
  },
  "cuIcon-my": {
    "content:before": "\"\\e78b\""
  },
  "cuIcon-myfill": {
    "content:before": "\"\\e78c\""
  },
  "cuIcon-emojifill": {
    "content:before": "\"\\e78d\""
  },
  "cuIcon-emojiflashfill": {
    "content:before": "\"\\e78e\""
  },
  "cuIcon-flashbuyfill": {
    "content:before": "\"\\e78f\""
  },
  "cuIcon-text": {
    "content:before": "\"\\e791\""
  },
  "cuIcon-goodsfavor": {
    "content:before": "\"\\e794\""
  },
  "cuIcon-musicfill": {
    "content:before": "\"\\e795\""
  },
  "cuIcon-musicforbidfill": {
    "content:before": "\"\\e796\""
  },
  "cuIcon-card": {
    "content:before": "\"\\e624\""
  },
  "cuIcon-triangledownfill": {
    "content:before": "\"\\e79b\""
  },
  "cuIcon-triangleupfill": {
    "content:before": "\"\\e79c\""
  },
  "cuIcon-roundleftfill-copy": {
    "content:before": "\"\\e79e\""
  },
  "cuIcon-font": {
    "content:before": "\"\\e76a\""
  },
  "cuIcon-title": {
    "content:before": "\"\\e82f\""
  },
  "cuIcon-recordfill": {
    "content:before": "\"\\e7a4\""
  },
  "cuIcon-record": {
    "content:before": "\"\\e7a6\""
  },
  "cuIcon-cardboardfill": {
    "content:before": "\"\\e7a9\""
  },
  "cuIcon-cardboard": {
    "content:before": "\"\\e7aa\""
  },
  "cuIcon-formfill": {
    "content:before": "\"\\e7ab\""
  },
  "cuIcon-coin": {
    "content:before": "\"\\e7ac\""
  },
  "cuIcon-cardboardforbid": {
    "content:before": "\"\\e7af\""
  },
  "cuIcon-circlefill": {
    "content:before": "\"\\e7b0\""
  },
  "cuIcon-circle": {
    "content:before": "\"\\e7b1\""
  },
  "cuIcon-attentionforbid": {
    "content:before": "\"\\e7b2\""
  },
  "cuIcon-attentionforbidfill": {
    "content:before": "\"\\e7b3\""
  },
  "cuIcon-attentionfavorfill": {
    "content:before": "\"\\e7b4\""
  },
  "cuIcon-attentionfavor": {
    "content:before": "\"\\e7b5\""
  },
  "cuIcon-titles": {
    "content:before": "\"\\e701\""
  },
  "cuIcon-icloading": {
    "content:before": "\"\\e67a\""
  },
  "cuIcon-full": {
    "content:before": "\"\\e7bc\""
  },
  "cuIcon-mail": {
    "content:before": "\"\\e7bd\""
  },
  "cuIcon-peoplelist": {
    "content:before": "\"\\e7be\""
  },
  "cuIcon-goodsnewfill": {
    "content:before": "\"\\e7bf\""
  },
  "cuIcon-goodsnew": {
    "content:before": "\"\\e7c0\""
  },
  "cuIcon-medalfill": {
    "content:before": "\"\\e7c1\""
  },
  "cuIcon-medal": {
    "content:before": "\"\\e7c2\""
  },
  "cuIcon-newsfill": {
    "content:before": "\"\\e7c3\""
  },
  "cuIcon-newshotfill": {
    "content:before": "\"\\e7c4\""
  },
  "cuIcon-newshot": {
    "content:before": "\"\\e7c5\""
  },
  "cuIcon-news": {
    "content:before": "\"\\e7c6\""
  },
  "cuIcon-videofill": {
    "content:before": "\"\\e7c7\""
  },
  "cuIcon-video": {
    "content:before": "\"\\e7c8\""
  },
  "cuIcon-exit": {
    "content:before": "\"\\e7cb\""
  },
  "cuIcon-skinfill": {
    "content:before": "\"\\e7cc\""
  },
  "cuIcon-skin": {
    "content:before": "\"\\e7cd\""
  },
  "cuIcon-moneybagfill": {
    "content:before": "\"\\e7ce\""
  },
  "cuIcon-usefullfill": {
    "content:before": "\"\\e7cf\""
  },
  "cuIcon-usefull": {
    "content:before": "\"\\e7d0\""
  },
  "cuIcon-moneybag": {
    "content:before": "\"\\e7d1\""
  },
  "cuIcon-redpacket_fill": {
    "content:before": "\"\\e7d3\""
  },
  "cuIcon-subscription": {
    "content:before": "\"\\e7d4\""
  },
  "cuIcon-loading1": {
    "content:before": "\"\\e633\""
  },
  "cuIcon-github": {
    "content:before": "\"\\e692\""
  },
  "cuIcon-global": {
    "content:before": "\"\\e7eb\""
  },
  "cuIcon-settingsfill": {
    "content:before": "\"\\e6ab\""
  },
  "cuIcon-back_android": {
    "content:before": "\"\\e7ed\""
  },
  "cuIcon-expressman": {
    "content:before": "\"\\e7ef\""
  },
  "cuIcon-evaluate_fill": {
    "content:before": "\"\\e7f0\""
  },
  "cuIcon-group_fill": {
    "content:before": "\"\\e7f5\""
  },
  "cuIcon-play_forward_fill": {
    "content:before": "\"\\e7f6\""
  },
  "cuIcon-deliver_fill": {
    "content:before": "\"\\e7f7\""
  },
  "cuIcon-notice_forbid_fill": {
    "content:before": "\"\\e7f8\""
  },
  "cuIcon-fork": {
    "content:before": "\"\\e60c\""
  },
  "cuIcon-pick": {
    "content:before": "\"\\e7fa\""
  },
  "cuIcon-wenzi": {
    "content:before": "\"\\e6a7\""
  },
  "cuIcon-ellipse": {
    "content:before": "\"\\e600\""
  },
  "cuIcon-qr_code": {
    "content:before": "\"\\e61b\""
  },
  "cuIcon-dianhua": {
    "content:before": "\"\\e64d\""
  },
  "cuIcon-cuIcon": {
    "content:before": "\"\\e602\""
  },
  "cuIcon-loading2": {
    "content:before": "\"\\e7f1\""
  },
  "cuIcon-btn": {
    "content:before": "\"\\e601\""
  },
  "round": {
    "borderRadius": "5000rpx"
  },
  "radius": {
    "borderRadius": "6rpx"
  },
  "response": {
    "width": 100
  },
  "switch-sex": {
    "content::after": "\"\\e71c\"",
    "content::before": "\"\\e71a\""
  },
  "solid": {
    "position": "relative",
    "content::after": "\" \"",
    "width::after": 200,
    "height::after": 200,
    "position::after": "absolute",
    "top::after": 0,
    "left::after": 0,
    "transform::after": "scale(0.5)",
    "transformOrigin::after": "0 0",
    "pointerEvents::after": "none",
    "boxSizing::after": "border-box",
    "border::after": "1rpx solid rgba(0, 0, 0, 0.1)"
  },
  "solid-top": {
    "position": "relative",
    "content::after::after": "\" \"",
    "width::after::after": 200,
    "height::after::after": 200,
    "position::after::after": "absolute",
    "top::after::after": 0,
    "left::after::after": 0,
    "transform::after::after": "scale(0.5)",
    "transformOrigin::after::after": "0 0",
    "pointerEvents::after::after": "none",
    "boxSizing::after::after": "border-box",
    "borderTop::after": "1rpx solid rgba(0, 0, 0, 0.1)"
  },
  "solid-right": {
    "position": "relative",
    "content::after::after::after": "\" \"",
    "width::after::after::after": 200,
    "height::after::after::after": 200,
    "position::after::after::after": "absolute",
    "top::after::after::after": 0,
    "left::after::after::after": 0,
    "transform::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after": "0 0",
    "pointerEvents::after::after::after": "none",
    "boxSizing::after::after::after": "border-box",
    "borderRight::after": "1rpx solid rgba(0, 0, 0, 0.1)"
  },
  "solid-bottom": {
    "position": "relative",
    "content::after::after::after::after": "\" \"",
    "width::after::after::after::after": 200,
    "height::after::after::after::after": 200,
    "position::after::after::after::after": "absolute",
    "top::after::after::after::after": 0,
    "left::after::after::after::after": 0,
    "transform::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after": "none",
    "boxSizing::after::after::after::after": "border-box",
    "borderBottom::after": "1rpx solid rgba(0, 0, 0, 0.1)"
  },
  "solid-left": {
    "position": "relative",
    "content::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after": 200,
    "height::after::after::after::after::after": 200,
    "position::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after": 0,
    "left::after::after::after::after::after": 0,
    "transform::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after": "border-box",
    "borderLeft::after": "1rpx solid rgba(0, 0, 0, 0.1)"
  },
  "solids": {
    "position": "relative",
    "content::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after": "border-box",
    "border::after": "8rpx solid #eee"
  },
  "solids-top": {
    "position": "relative",
    "content::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after": "border-box",
    "borderTop::after": "8rpx solid #eee"
  },
  "solids-right": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after": "border-box",
    "borderRight::after": "8rpx solid #eee"
  },
  "solids-bottom": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after": "border-box",
    "borderBottom::after": "8rpx solid #eee"
  },
  "solids-left": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after::after": "border-box",
    "borderLeft::after": "8rpx solid #eee"
  },
  "dashed": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after::after::after": "border-box",
    "border::after": "1rpx dashed #ddd"
  },
  "dashed-top": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after::after::after::after": "border-box",
    "borderTop::after": "1rpx dashed #ddd"
  },
  "dashed-right": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after::after::after::after::after": "border-box",
    "borderRight::after": "1rpx dashed #ddd"
  },
  "dashed-bottom": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "border-box",
    "borderBottom::after": "1rpx dashed #ddd"
  },
  "dashed-left": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "border-box",
    "borderLeft::after": "1rpx dashed #ddd"
  },
  "shadow-lg": {
    "--ShadowSize": "0rpx 40rpx 100rpx 0rpx"
  },
  "shadow-warp": {
    "position": "relative",
    "boxShadow": "0 0 10rpx rgba(0, 0, 0, 0.1)",
    "position:before": "absolute",
    "content:before": "\"\"",
    "top:before": "20rpx",
    "bottom:before": "30rpx",
    "left:before": "20rpx",
    "width:before": 50,
    "boxShadow:before": "0 30rpx 20rpx rgba(0, 0, 0, 0.2)",
    "transform:before": "rotate(-3deg)",
    "zIndex:before": -1,
    "position:before:after": "absolute",
    "content:before:after": "\"\"",
    "top:before:after": "20rpx",
    "bottom:before:after": "30rpx",
    "left:before:after": "20rpx",
    "width:before:after": 50,
    "boxShadow:before:after": "0 30rpx 20rpx rgba(0, 0, 0, 0.2)",
    "transform:before:after": "rotate(-3deg)",
    "zIndex:before:after": -1,
    "right:after": "20rpx",
    "transform:after": "rotate(3deg)"
  },
  "shadow-blur": {
    "position": "relative",
    "content::before": "\"\"",
    "display::before": "block",
    "background::before": "inherit",
    "filter::before": "blur(10rpx)",
    "position::before": "absolute",
    "width::before": 100,
    "height::before": 100,
    "top::before": "10rpx",
    "left::before": "10rpx",
    "zIndex::before": -1,
    "opacity::before": 0.4,
    "transformOrigin::before": "0 0",
    "transform::before": "scale(1, 1)"
  },
  "cu-btn": {
    "position": "relative",
    "border": "0rpx",
    "display": "inline-flex",
    "alignItems": "center",
    "justifyContent": "center",
    "boxSizing": "border-box",
    "paddingTop": 0,
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx",
    "fontSize": "28rpx",
    "height": "64rpx",
    "lineHeight": 1,
    "textAlign": "center",
    "textDecoration": "none",
    "transform": "translate(0rpx, 0rpx)",
    "display::after": "none"
  },
  "block": {
    "display": "block"
  },
  "cu-tag": {
    "fontSize": "24rpx",
    "verticalAlign": "middle",
    "position": "relative",
    "display": "inline-flex",
    "alignItems": "center",
    "justifyContent": "center",
    "boxSizing": "border-box",
    "paddingTop": "0rpx",
    "paddingRight": "16rpx",
    "paddingBottom": "0rpx",
    "paddingLeft": "16rpx",
    "height": "48rpx",
    "fontFamily": "Helvetica Neue, Helvetica, sans-serif",
    "whiteSpace": "nowrap"
  },
  "cu-capsule": {
    "display": "inline-flex",
    "verticalAlign": "middle"
  },
  "cu-avatar": {
    "fontVariant": "small-caps",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "display": "inline-flex",
    "textAlign": "center",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#cccccc",
    "color": "#ffffff",
    "whiteSpace": "nowrap",
    "position": "relative",
    "width": "64rpx",
    "height": "64rpx",
    "backgroundSize": "cover",
    "backgroundPosition": "center",
    "verticalAlign": "middle",
    "fontSize": 1.5
  },
  "cu-avatar-group": {
    "direction": "rtl",
    "unicodeBidi": "bidi-override",
    "paddingTop": 0,
    "paddingRight": "10rpx",
    "paddingBottom": 0,
    "paddingLeft": "40rpx",
    "display": "inline-block"
  },
  "cu-progress": {
    "overflow": "hidden",
    "height": "28rpx",
    "backgroundColor": "#ebeef5",
    "display": "inline-flex",
    "alignItems": "center",
    "width": 100
  },
  "cu-load": {
    "display": "block",
    "lineHeight": 3,
    "textAlign": "center",
    "fontFamily::before": "\"cuIcon\"",
    "display::before": "inline-block",
    "marginRight::before": "6rpx"
  },
  "load-progress": {
    "pointerEvents": "none",
    "top": 0,
    "position": "fixed",
    "width": 100,
    "left": 0,
    "zIndex": 2000
  },
  "grayscale": {
    "filter": "grayscale(1)"
  },
  "cu-bar": {
    "display": "flex",
    "position": "relative",
    "alignItems": "center",
    "minHeight": "100rpx",
    "justifyContent": "space-between"
  },
  "cu-tabbar-height": {
    "minHeight": "100rpx"
  },
  "cu-custom": {
    "display": "block",
    "position": "relative"
  },
  "nav": {
    "whiteSpace": "nowrap"
  },
  "cu-timeline": {
    "display": "block",
    "backgroundColor": "#ffffff"
  },
  "cu-chat": {
    "display": "flex",
    "flexDirection": "column"
  },
  "cu-card": {
    "display": "block",
    "overflow": "hidden"
  },
  "cu-form-group": {
    "backgroundColor": "#ffffff",
    "paddingTop": "1rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "1rpx",
    "paddingLeft": "30rpx",
    "display": "flex",
    "alignItems": "center",
    "minHeight": "100rpx",
    "justifyContent": "space-between"
  },
  "cu-modal": {
    "position": "fixed",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0,
    "zIndex": 1110,
    "opacity": 0,
    "outline": 0,
    "textAlign": "center",
    "MsTransform": "scale(1.185)",
    "transform": "scale(1.185)",
    "backfaceVisibility": "hidden",
    "perspective": "2000rpx",
    "background": "rgba(0, 0, 0, 0.6)",
    "transitionDuration": 300,
    "transitionTimingFunction": "ease-in-out",
    "transitionDelay": 0,
    "pointerEvents": "none",
    "content::before": "\"\\200B\"",
    "display::before": "inline-block",
    "height::before": 100,
    "verticalAlign::before": "middle"
  },
  "@TRANSITION": {
    "cu-modal": {
      "duration": 300,
      "timingFunction": "ease-in-out",
      "delay": 0
    }
  },
  "cu-dialog": {
    "position": "relative",
    "display": "inline-block",
    "verticalAlign": "middle",
    "width": "680rpx",
    "maxWidth": 100,
    "backgroundColor": "#f8f8f8",
    "borderRadius": "10rpx",
    "overflow": "hidden"
  },
  "screen-swiper": {
    "minHeight": "375rpx"
  },
  "card-swiper": {
    "height": "420rpx"
  },
  "tower-swiper": {
    "height": "420rpx",
    "position": "relative",
    "maxWidth": "750rpx",
    "overflow": "hidden"
  },
  "cu-steps": {
    "display": "flex"
  },
  "flex": {
    "display": "flex",
    "flexDirection": "row"
  },
  "basis-xs": {
    "flexBasis": 20
  },
  "basis-sm": {
    "flexBasis": 40
  },
  "basis-df": {
    "flexBasis": 50
  },
  "basis-lg": {
    "flexBasis": 60
  },
  "basis-xl": {
    "flexBasis": 80
  },
  "flex-sub": {
    "flex": 1
  },
  "flex-twice": {
    "flex": 2
  },
  "flex-treble": {
    "flex": 3
  },
  "flex-direction": {
    "flexDirection": "column"
  },
  "flex-wrap": {
    "flexWrap": "wrap"
  },
  "align-start": {
    "alignItems": "flex-start"
  },
  "align-end": {
    "alignItems": "flex-end"
  },
  "align-center": {
    "alignItems": "center"
  },
  "align-stretch": {
    "alignItems": "stretch"
  },
  "self-start": {
    "alignSelf": "flex-start"
  },
  "self-center": {
    "alignSelf": "flex-center"
  },
  "self-end": {
    "alignSelf": "flex-end"
  },
  "self-stretch": {
    "alignSelf": "stretch"
  },
  "justify-start": {
    "justifyContent": "flex-start"
  },
  "justify-end": {
    "justifyContent": "flex-end"
  },
  "justify-center": {
    "justifyContent": "center"
  },
  "justify-between": {
    "justifyContent": "space-between"
  },
  "justify-around": {
    "justifyContent": "space-around"
  },
  "grid": {
    "display": "flex",
    "flexWrap": "wrap"
  },
  "margin-0": {
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0
  },
  "margin-xs": {
    "marginTop": "10rpx",
    "marginRight": "10rpx",
    "marginBottom": "10rpx",
    "marginLeft": "10rpx"
  },
  "margin-sm": {
    "marginTop": "20rpx",
    "marginRight": "20rpx",
    "marginBottom": "20rpx",
    "marginLeft": "20rpx"
  },
  "margin": {
    "marginTop": "30rpx",
    "marginRight": "30rpx",
    "marginBottom": "30rpx",
    "marginLeft": "30rpx"
  },
  "margin-lg": {
    "marginTop": "40rpx",
    "marginRight": "40rpx",
    "marginBottom": "40rpx",
    "marginLeft": "40rpx"
  },
  "margin-xl": {
    "marginTop": "50rpx",
    "marginRight": "50rpx",
    "marginBottom": "50rpx",
    "marginLeft": "50rpx"
  },
  "margin-top-xs": {
    "marginTop": "10rpx"
  },
  "margin-top-sm": {
    "marginTop": "20rpx"
  },
  "margin-top": {
    "marginTop": "30rpx"
  },
  "margin-top-lg": {
    "marginTop": "40rpx"
  },
  "margin-top-xl": {
    "marginTop": "50rpx"
  },
  "margin-right-xs": {
    "marginRight": "10rpx"
  },
  "margin-right-sm": {
    "marginRight": "20rpx"
  },
  "margin-right": {
    "marginRight": "30rpx"
  },
  "margin-right-lg": {
    "marginRight": "40rpx"
  },
  "margin-right-xl": {
    "marginRight": "50rpx"
  },
  "margin-bottom-xs": {
    "marginBottom": "10rpx"
  },
  "margin-bottom-sm": {
    "marginBottom": "20rpx"
  },
  "margin-bottom": {
    "marginBottom": "30rpx"
  },
  "margin-bottom-lg": {
    "marginBottom": "40rpx"
  },
  "margin-bottom-xl": {
    "marginBottom": "50rpx"
  },
  "margin-left-xs": {
    "marginLeft": "10rpx"
  },
  "margin-left-sm": {
    "marginLeft": "20rpx"
  },
  "margin-left": {
    "marginLeft": "30rpx"
  },
  "margin-left-lg": {
    "marginLeft": "40rpx"
  },
  "margin-left-xl": {
    "marginLeft": "50rpx"
  },
  "margin-lr-xs": {
    "marginLeft": "10rpx",
    "marginRight": "10rpx"
  },
  "margin-lr-sm": {
    "marginLeft": "20rpx",
    "marginRight": "20rpx"
  },
  "margin-lr": {
    "marginLeft": "30rpx",
    "marginRight": "30rpx"
  },
  "margin-lr-lg": {
    "marginLeft": "40rpx",
    "marginRight": "40rpx"
  },
  "margin-lr-xl": {
    "marginLeft": "50rpx",
    "marginRight": "50rpx"
  },
  "margin-tb-xs": {
    "marginTop": "10rpx",
    "marginBottom": "10rpx"
  },
  "margin-tb-sm": {
    "marginTop": "20rpx",
    "marginBottom": "20rpx"
  },
  "margin-tb": {
    "marginTop": "30rpx",
    "marginBottom": "30rpx"
  },
  "margin-tb-lg": {
    "marginTop": "40rpx",
    "marginBottom": "40rpx"
  },
  "margin-tb-xl": {
    "marginTop": "50rpx",
    "marginBottom": "50rpx"
  },
  "padding-0": {
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "padding-xs": {
    "paddingTop": "10rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "10rpx"
  },
  "padding-sm": {
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx"
  },
  "padding": {
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx"
  },
  "padding-lg": {
    "paddingTop": "40rpx",
    "paddingRight": "40rpx",
    "paddingBottom": "40rpx",
    "paddingLeft": "40rpx"
  },
  "padding-xl": {
    "paddingTop": "50rpx",
    "paddingRight": "50rpx",
    "paddingBottom": "50rpx",
    "paddingLeft": "50rpx"
  },
  "padding-top-xs": {
    "paddingTop": "10rpx"
  },
  "padding-top-sm": {
    "paddingTop": "20rpx"
  },
  "padding-top": {
    "paddingTop": "30rpx"
  },
  "padding-top-lg": {
    "paddingTop": "40rpx"
  },
  "padding-top-xl": {
    "paddingTop": "50rpx"
  },
  "padding-right-xs": {
    "paddingRight": "10rpx"
  },
  "padding-right-sm": {
    "paddingRight": "20rpx"
  },
  "padding-right": {
    "paddingRight": "30rpx"
  },
  "padding-right-lg": {
    "paddingRight": "40rpx"
  },
  "padding-right-xl": {
    "paddingRight": "50rpx"
  },
  "padding-bottom-xs": {
    "paddingBottom": "10rpx"
  },
  "padding-bottom-sm": {
    "paddingBottom": "20rpx"
  },
  "padding-bottom": {
    "paddingBottom": "30rpx"
  },
  "padding-bottom-lg": {
    "paddingBottom": "40rpx"
  },
  "padding-bottom-xl": {
    "paddingBottom": "50rpx"
  },
  "padding-left-xs": {
    "paddingLeft": "10rpx"
  },
  "padding-left-sm": {
    "paddingLeft": "20rpx"
  },
  "padding-left": {
    "paddingLeft": "30rpx"
  },
  "padding-left-lg": {
    "paddingLeft": "40rpx"
  },
  "padding-left-xl": {
    "paddingLeft": "50rpx"
  },
  "padding-lr-xs": {
    "paddingLeft": "10rpx",
    "paddingRight": "10rpx"
  },
  "padding-lr-sm": {
    "paddingLeft": "20rpx",
    "paddingRight": "20rpx"
  },
  "padding-lr": {
    "paddingLeft": "30rpx",
    "paddingRight": "30rpx"
  },
  "padding-lr-lg": {
    "paddingLeft": "40rpx",
    "paddingRight": "40rpx"
  },
  "padding-lr-xl": {
    "paddingLeft": "50rpx",
    "paddingRight": "50rpx"
  },
  "padding-tb-xs": {
    "paddingTop": "10rpx",
    "paddingBottom": "10rpx"
  },
  "padding-tb-sm": {
    "paddingTop": "20rpx",
    "paddingBottom": "20rpx"
  },
  "padding-tb": {
    "paddingTop": "30rpx",
    "paddingBottom": "30rpx"
  },
  "padding-tb-lg": {
    "paddingTop": "40rpx",
    "paddingBottom": "40rpx"
  },
  "padding-tb-xl": {
    "paddingTop": "50rpx",
    "paddingBottom": "50rpx"
  },
  "cf": {
    "content::after": "\" \"",
    "display::after": "table",
    "content::after::before": "\" \"",
    "display::after::before": "table",
    "clear::after": "both"
  },
  "fl": {
    "float": "left"
  },
  "fr": {
    "float": "right"
  },
  "line-red": {
    "borderColor::after": "#e54d42",
    "color": "#e54d42"
  },
  "lines-red": {
    "borderColor::after::after": "#e54d42",
    "color": "#e54d42"
  },
  "line-orange": {
    "borderColor::after": "#f37b1d",
    "color": "#f37b1d"
  },
  "lines-orange": {
    "borderColor::after::after": "#f37b1d",
    "color": "#f37b1d"
  },
  "line-yellow": {
    "borderColor::after": "#fbbd08",
    "color": "#fbbd08"
  },
  "lines-yellow": {
    "borderColor::after::after": "#fbbd08",
    "color": "#fbbd08"
  },
  "line-olive": {
    "borderColor::after": "#8dc63f",
    "color": "#8dc63f"
  },
  "lines-olive": {
    "borderColor::after::after": "#8dc63f",
    "color": "#8dc63f"
  },
  "line-green": {
    "borderColor::after": "#39b54a",
    "color": "#39b54a"
  },
  "lines-green": {
    "borderColor::after::after": "#39b54a",
    "color": "#39b54a"
  },
  "line-cyan": {
    "borderColor::after": "#1cbbb4",
    "color": "#1cbbb4"
  },
  "lines-cyan": {
    "borderColor::after::after": "#1cbbb4",
    "color": "#1cbbb4"
  },
  "line-blue": {
    "borderColor::after": "#0081ff",
    "color": "#0081ff"
  },
  "lines-blue": {
    "borderColor::after::after": "#0081ff",
    "color": "#0081ff"
  },
  "line-purple": {
    "borderColor::after": "#6739b6",
    "color": "#6739b6"
  },
  "lines-purple": {
    "borderColor::after::after": "#6739b6",
    "color": "#6739b6"
  },
  "line-mauve": {
    "borderColor::after": "#9c26b0",
    "color": "#9c26b0"
  },
  "lines-mauve": {
    "borderColor::after::after": "#9c26b0",
    "color": "#9c26b0"
  },
  "line-pink": {
    "borderColor::after": "#e03997",
    "color": "#e03997"
  },
  "lines-pink": {
    "borderColor::after::after": "#e03997",
    "color": "#e03997"
  },
  "line-brown": {
    "borderColor::after": "#a5673f",
    "color": "#a5673f"
  },
  "lines-brown": {
    "borderColor::after::after": "#a5673f",
    "color": "#a5673f"
  },
  "line-grey": {
    "borderColor::after": "#8799a3",
    "color": "#8799a3"
  },
  "lines-grey": {
    "borderColor::after::after": "#8799a3",
    "color": "#8799a3"
  },
  "line-gray": {
    "borderColor::after": "#aaaaaa",
    "color": "#aaaaaa"
  },
  "lines-gray": {
    "borderColor::after::after": "#aaaaaa",
    "color": "#aaaaaa"
  },
  "line-black": {
    "borderColor::after": "#333333",
    "color": "#333333"
  },
  "lines-black": {
    "borderColor::after::after": "#333333",
    "color": "#333333"
  },
  "line-white": {
    "borderColor::after": "#ffffff",
    "color": "#ffffff"
  },
  "lines-white": {
    "borderColor::after::after": "#ffffff",
    "color": "#ffffff"
  },
  "bg-myblue": {
    "backgroundColor": "#007AFF",
    "color": "#ffffff"
  },
  "bg-red": {
    "backgroundColor": "#e54d42",
    "color": "#ffffff"
  },
  "bg-orange": {
    "backgroundColor": "#f37b1d",
    "color": "#ffffff"
  },
  "bg-yellow": {
    "backgroundColor": "#fbbd08",
    "color": "#333333"
  },
  "bg-olive": {
    "backgroundColor": "#8dc63f",
    "color": "#ffffff"
  },
  "bg-green": {
    "backgroundColor": "#39b54a",
    "color": "#ffffff"
  },
  "bg-cyan": {
    "backgroundColor": "#1cbbb4",
    "color": "#ffffff"
  },
  "bg-blue": {
    "backgroundColor": "#0081ff",
    "color": "#ffffff"
  },
  "bg-purple": {
    "backgroundColor": "#6739b6",
    "color": "#ffffff"
  },
  "bg-mauve": {
    "backgroundColor": "#9c26b0",
    "color": "#ffffff"
  },
  "bg-pink": {
    "backgroundColor": "#e03997",
    "color": "#ffffff"
  },
  "bg-brown": {
    "backgroundColor": "#a5673f",
    "color": "#ffffff"
  },
  "bg-grey": {
    "backgroundColor": "#8799a3",
    "color": "#ffffff"
  },
  "bg-gray": {
    "backgroundColor": "#f0f0f0",
    "color": "#333333"
  },
  "bg-black": {
    "backgroundColor": "#333333",
    "color": "#ffffff"
  },
  "bg-white": {
    "backgroundColor": "#ffffff",
    "color": "#666666"
  },
  "bg-shadeTop": {
    "backgroundImage": "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.01))",
    "color": "#ffffff"
  },
  "bg-shadeBottom": {
    "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 1))",
    "color": "#ffffff"
  },
  "bg-gradual-red": {
    "backgroundImage": "linear-gradient(45deg, #f43f3b, #ec008c)",
    "color": "#ffffff"
  },
  "bg-gradual-orange": {
    "backgroundImage": "linear-gradient(45deg, #ff9700, #ed1c24)",
    "color": "#ffffff"
  },
  "bg-gradual-green": {
    "backgroundImage": "linear-gradient(45deg, #39b54a, #8dc63f)",
    "color": "#ffffff"
  },
  "bg-gradual-purple": {
    "backgroundImage": "linear-gradient(45deg, #9000ff, #5e00ff)",
    "color": "#ffffff"
  },
  "bg-gradual-pink": {
    "backgroundImage": "linear-gradient(45deg, #ec008c, #6739b6)",
    "color": "#ffffff"
  },
  "bg-gradual-blue": {
    "backgroundImage": "linear-gradient(45deg, #0081ff, #1cbbb4)",
    "color": "#ffffff"
  },
  "bg-img": {
    "backgroundSize": "cover",
    "backgroundPosition": "center",
    "backgroundRepeat": "no-repeat"
  },
  "bg-mask": {
    "backgroundColor": "#333333",
    "position": "relative",
    "content::after": "\"\"",
    "width::after": 100,
    "height::after": 100,
    "display::after": "block",
    "backgroundColor::after": "rgba(0,0,0,0.4)",
    "position::after": "absolute",
    "left::after": 0,
    "right::after": 0,
    "bottom::after": 0,
    "top::after": 0
  },
  "bg-video": {
    "position": "relative"
  },
  "text-xs": {
    "fontSize": "20rpx"
  },
  "text-sm": {
    "fontSize": "24rpx"
  },
  "text-df": {
    "fontSize": "28rpx"
  },
  "text-lg": {
    "fontSize": "32rpx"
  },
  "text-xl": {
    "fontSize": "36rpx"
  },
  "text-xxl": {
    "fontSize": "44rpx"
  },
  "text-sl": {
    "fontSize": "80rpx"
  },
  "text-xsl": {
    "fontSize": "120rpx"
  },
  "text-Abc": {
    "textTransform": "Capitalize"
  },
  "text-ABC": {
    "textTransform": "Uppercase"
  },
  "text-abc": {
    "textTransform": "Lowercase"
  },
  "text-price": {
    "content::before": "\"¥\"",
    "fontSize::before": 80,
    "marginRight::before": "4rpx"
  },
  "text-cut": {
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap",
    "overflow": "hidden"
  },
  "text-bold": {
    "fontWeight": "bold"
  },
  "text-center": {
    "textAlign": "center"
  },
  "text-content": {
    "lineHeight": 1.6
  },
  "text-left": {
    "textAlign": "left"
  },
  "text-right": {
    "textAlign": "right"
  },
  "text-red": {
    "color": "#e54d42"
  },
  "text-orange": {
    "color": "#f37b1d"
  },
  "text-yellow": {
    "color": "#fbbd08"
  },
  "text-olive": {
    "color": "#8dc63f"
  },
  "text-green": {
    "color": "#39b54a"
  },
  "text-cyan": {
    "color": "#1cbbb4"
  },
  "text-blue": {
    "color": "#0081ff"
  },
  "text-purple": {
    "color": "#6739b6"
  },
  "text-mauve": {
    "color": "#9c26b0"
  },
  "text-pink": {
    "color": "#e03997"
  },
  "text-brown": {
    "color": "#a5673f"
  },
  "text-grey": {
    "color": "#8799a3"
  },
  "text-gray": {
    "color": "#aaaaaa"
  },
  "text-black": {
    "color": "#333333"
  },
  "text-white": {
    "color": "#ffffff"
  },
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
  "flex-nowrap": {
    "flexWrap": "nowrap"
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
  "text-ellipsis": {
    "lines": 1
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
    "backgroundColor": "#08C060"
  },
  "main-text-color": {
    "color": "#08C060"
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
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 24);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}

}

/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _free_nav_bar_vue_vue_type_template_id_5d654fc4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _free_nav_bar_vue_vue_type_template_id_5d654fc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "3d60024b"
  
)

injectStyles.call(component)
component.options.__file = "天赐/TianciWeb/components/free-ui/free-nav-bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 15 */
/*!******************************************************************************************!*\
  !*** E:/天赐/TianciWeb/components/free-ui/free-nav-bar.vue?vue&type=template&id=5d654fc4& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_nav_bar_vue_vue_type_template_id_5d654fc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./free-nav-bar.vue?vue&type=template&id=5d654fc4& */ 16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_nav_bar_vue_vue_type_template_id_5d654fc4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_nav_bar_vue_vue_type_template_id_5d654fc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 16 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!E:/天赐/TianciWeb/components/free-ui/free-nav-bar.vue?vue&type=template&id=5d654fc4& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "view",
    [
      _c("view", { class: _vm.getClass }, [
        _c("view", { style: "height:" + _vm.statusBarHeight + "px" }),
        _c(
          "view",
          {
            staticClass: ["w-100", "flex", "align-center", "justify-between"],
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
                        attrs: { icon: "\ue607" },
                        on: { click: _vm.search }
                      }),
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
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./free-nav-bar.vue?vue&type=script&lang=js& */ 18);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_nav_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 18 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!E:/天赐/TianciWeb/components/free-ui/free-nav-bar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _default = { props: { showBack: { type: Boolean, default: false }, title: { type: [String, Boolean], default: false }, fixed: { type: Boolean, default: true }, noreadnum: { type: Number, default: 0 }, bgColor: { type: String, default: "bg-nav" }, showRight: { type: Boolean, default: true } }, components: { freeIconButton: _freeIconButton.default, freePopup: _freePopup.default }, data: function data() {return { statusBarHeight: 0, navBarHeight: 0, menus: [{ name: "发起群聊", event: "", icon: "\uE600" }, { name: "添加好友", event: "", icon: "\uE6A5" }] };
  },
  mounted: function mounted() {

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
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 24);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}

}

/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _free_icon_button_vue_vue_type_template_id_7f5c65bb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _free_icon_button_vue_vue_type_template_id_7f5c65bb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "1ef79d30"
  
)

injectStyles.call(component)
component.options.__file = "天赐/TianciWeb/components/free-ui/free-icon-button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 20 */
/*!**********************************************************************************************!*\
  !*** E:/天赐/TianciWeb/components/free-ui/free-icon-button.vue?vue&type=template&id=7f5c65bb& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_icon_button_vue_vue_type_template_id_7f5c65bb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./free-icon-button.vue?vue&type=template&id=7f5c65bb& */ 21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_icon_button_vue_vue_type_template_id_7f5c65bb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_icon_button_vue_vue_type_template_id_7f5c65bb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 21 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!E:/天赐/TianciWeb/components/free-ui/free-icon-button.vue?vue&type=template&id=7f5c65bb& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("u-text", { staticClass: ["iconfont", "font-md"] }, [
        _vm._v(_vm._s(_vm.icon))
      ])
    ]
  )
}
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
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./free-icon-button.vue?vue&type=script&lang=js& */ 23);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_icon_button_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 23 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!E:/天赐/TianciWeb/components/free-ui/free-icon-button.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      default: '' } } };exports.default = _default;

/***/ }),
/* 24 */
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
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
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

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
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 24);



function injectStyles () {
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

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _free_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _free_popup_vue_vue_type_template_id_dee53bbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _free_popup_vue_vue_type_template_id_dee53bbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "dee53bbe",
  "3faeb38e"
  
)

injectStyles.call(component)
component.options.__file = "天赐/TianciWeb/components/free-ui/free-popup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 26 */
/*!****************************************************************************************************!*\
  !*** E:/天赐/TianciWeb/components/free-ui/free-popup.vue?vue&type=template&id=dee53bbe&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_popup_vue_vue_type_template_id_dee53bbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./free-popup.vue?vue&type=template&id=dee53bbe&scoped=true& */ 27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_popup_vue_vue_type_template_id_dee53bbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_popup_vue_vue_type_template_id_dee53bbe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 27 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!E:/天赐/TianciWeb/components/free-ui/free-popup.vue?vue&type=template&id=dee53bbe&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./free-popup.vue?vue&type=script&lang=js& */ 29);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 29 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!E:/天赐/TianciWeb/components/free-ui/free-popup.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_popup_vue_vue_type_style_index_0_id_dee53bbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./free-popup.vue?vue&type=style&index=0&id=dee53bbe&scoped=true&lang=css& */ 32);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_popup_vue_vue_type_style_index_0_id_dee53bbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_popup_vue_vue_type_style_index_0_id_dee53bbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_popup_vue_vue_type_style_index_0_id_dee53bbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_popup_vue_vue_type_style_index_0_id_dee53bbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_popup_vue_vue_type_style_index_0_id_dee53bbe_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 32 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!E:/天赐/TianciWeb/components/free-ui/free-popup.vue?vue&type=style&index=0&id=dee53bbe&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "free-animated": {
    "transform": "scale(0,0)",
    "opacity": 0
  }
}

/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/*!*************************************************************!*\
  !*** E:/天赐/TianciWeb/components/free-ui/free-list-item.vue ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _free_list_item_vue_vue_type_template_id_6975ced7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./free-list-item.vue?vue&type=template&id=6975ced7& */ 39);
/* harmony import */ var _free_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./free-list-item.vue?vue&type=script&lang=js& */ 41);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _free_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _free_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 24);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}

}

/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _free_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _free_list_item_vue_vue_type_template_id_6975ced7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _free_list_item_vue_vue_type_template_id_6975ced7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "1b86a1c4"
  
)

injectStyles.call(component)
component.options.__file = "天赐/TianciWeb/components/free-ui/free-list-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 39 */
/*!********************************************************************************************!*\
  !*** E:/天赐/TianciWeb/components/free-ui/free-list-item.vue?vue&type=template&id=6975ced7& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_list_item_vue_vue_type_template_id_6975ced7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./free-list-item.vue?vue&type=template&id=6975ced7& */ 40);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_list_item_vue_vue_type_template_id_6975ced7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_list_item_vue_vue_type_template_id_6975ced7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 40 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!E:/天赐/TianciWeb/components/free-ui/free-list-item.vue?vue&type=template&id=6975ced7& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
                    attrs: { src: _vm.cover, mode: "widthFix" }
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
                        [_vm._v("")]
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
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 41 */
/*!**************************************************************************************!*\
  !*** E:/天赐/TianciWeb/components/free-ui/free-list-item.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./free-list-item.vue?vue&type=script&lang=js& */ 42);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_free_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 42 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!E:/天赐/TianciWeb/components/free-ui/free-list-item.vue?vue&type=script&lang=js& ***!
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
/* 63 */,
/* 64 */,
/* 65 */
/*!***********************************************************************************************!*\
  !*** E:/天赐/TianciWeb/main.js?{"page":"pages%2Fmail%2Fuser-moments-auth%2Fuser-moments-auth"} ***!
  \***********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 6);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_mail_user_moments_auth_user_moments_auth_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/mail/user-moments-auth/user-moments-auth.nvue?mpType=page */ 66);

        
        
        
        _pages_mail_user_moments_auth_user_moments_auth_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_mail_user_moments_auth_user_moments_auth_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/mail/user-moments-auth/user-moments-auth'
        _pages_mail_user_moments_auth_user_moments_auth_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_mail_user_moments_auth_user_moments_auth_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),
/* 66 */
/*!***************************************************************************************!*\
  !*** E:/天赐/TianciWeb/pages/mail/user-moments-auth/user-moments-auth.nvue?mpType=page ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_moments_auth_nvue_vue_type_template_id_0ca4ee16_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-moments-auth.nvue?vue&type=template&id=0ca4ee16&mpType=page */ 67);
/* harmony import */ var _user_moments_auth_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-moments-auth.nvue?vue&type=script&lang=js&mpType=page */ 69);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _user_moments_auth_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _user_moments_auth_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 24);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}

}

/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _user_moments_auth_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _user_moments_auth_nvue_vue_type_template_id_0ca4ee16_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _user_moments_auth_nvue_vue_type_template_id_0ca4ee16_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "02de35e2"
  
)

injectStyles.call(component)
component.options.__file = "天赐/TianciWeb/pages/mail/user-moments-auth/user-moments-auth.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 67 */
/*!*********************************************************************************************************************!*\
  !*** E:/天赐/TianciWeb/pages/mail/user-moments-auth/user-moments-auth.nvue?vue&type=template&id=0ca4ee16&mpType=page ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_user_moments_auth_nvue_vue_type_template_id_0ca4ee16_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./user-moments-auth.nvue?vue&type=template&id=0ca4ee16&mpType=page */ 68);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_user_moments_auth_nvue_vue_type_template_id_0ca4ee16_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_user_moments_auth_nvue_vue_type_template_id_0ca4ee16_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),
/* 68 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!E:/天赐/TianciWeb/pages/mail/user-moments-auth/user-moments-auth.nvue?vue&type=template&id=0ca4ee16&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: { scrollY: true, enableBackToTop: true, bubble: "true" }
    },
    [
      _c(
        "view",
        { staticClass: ["page"] },
        [
          _c("free-nav-bar", {
            attrs: {
              title: "设置朋友圈动态权限",
              showBack: true,
              showRight: false
            }
          }),
          _c(
            "free-list-item",
            {
              attrs: {
                title: "不让他看我",
                showLeftIcon: false,
                showRight: "",
                showRightIcon: false
              }
            },
            [
              _c("switch", {
                attrs: { slot: "right", checked: false, color: "#08C060" },
                slot: "right"
              })
            ],
            1
          ),
          _c(
            "free-list-item",
            {
              attrs: {
                title: "不看他",
                showLeftIcon: false,
                showRight: "",
                showRightIcon: false
              }
            },
            [
              _c("switch", {
                attrs: { slot: "right", checked: false, color: "#08C060" },
                slot: "right"
              })
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 69 */
/*!***************************************************************************************************************!*\
  !*** E:/天赐/TianciWeb/pages/mail/user-moments-auth/user-moments-auth.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_user_moments_auth_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./user-moments-auth.nvue?vue&type=script&lang=js&mpType=page */ 70);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_user_moments_auth_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_user_moments_auth_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_user_moments_auth_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_user_moments_auth_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_user_moments_auth_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 70 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!E:/天赐/TianciWeb/pages/mail/user-moments-auth/user-moments-auth.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
















var _freeNavBar = _interopRequireDefault(__webpack_require__(/*! @/components/free-ui/free-nav-bar.vue */ 14));
var _freeListItem = _interopRequireDefault(__webpack_require__(/*! @/components/free-ui/free-list-item.vue */ 38));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var _default = { components: { freeNavBar: _freeNavBar.default, freeListItem: _freeListItem.default }, data: function data() {return {};}, methods: {} };exports.default = _default;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC9pbmRleC5qcz85MjFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3VuaS1hcHAtcGx1cy1udnVlLXY4L2Rpc3QvaW5kZXguanM/OTkyYSIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9wYWdlcy5qc29uPzE2YzkiLCJ3ZWJwYWNrOi8vL0U6L+Wkqei1kC9UaWFuY2lXZWIvcGFnZXMuanNvbj81MjFhIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL21haW4uanM/OGUwZCIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9BcHAudnVlPzQ0MzEiLCJ3ZWJwYWNrOi8vL0U6L+Wkqei1kC9UaWFuY2lXZWIvQXBwLnZ1ZT81OGFhIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLW5hdi1iYXIudnVlPzMzODMiLCJ3ZWJwYWNrOi8vL0U6L+Wkqei1kC9UaWFuY2lXZWIvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtbmF2LWJhci52dWU/NTQyMCIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1uYXYtYmFyLnZ1ZT84YmZhIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLW5hdi1iYXIudnVlP2U4NzUiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLW5hdi1iYXIudnVlIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWljb24tYnV0dG9uLnZ1ZT9jMWJlIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWljb24tYnV0dG9uLnZ1ZT83OTA3Iiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWljb24tYnV0dG9uLnZ1ZT9hY2IyIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWljb24tYnV0dG9uLnZ1ZT9hNDhlIiwidW5pLWFwcDovLy9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1pY29uLWJ1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcz8yODc3Iiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLXBvcHVwLnZ1ZT9jN2UyIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLXBvcHVwLnZ1ZT8wN2JiIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLXBvcHVwLnZ1ZT80NGY3Iiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLXBvcHVwLnZ1ZT9lZTQ5IiwidW5pLWFwcDovLy9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1wb3B1cC52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvbGliL2Zvcm1hdC1sb2cuanM/MGRlOSIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1wb3B1cC52dWU/ODBlOSIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1wb3B1cC52dWU/M2IzMSIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1saXN0LWl0ZW0udnVlP2NkN2IiLCJ3ZWJwYWNrOi8vL0U6L+Wkqei1kC9UaWFuY2lXZWIvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtbGlzdC1pdGVtLnZ1ZT9kMzk1Iiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWxpc3QtaXRlbS52dWU/OGY3OCIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1saXN0LWl0ZW0udnVlPzFiOTkiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWxpc3QtaXRlbS52dWUiLCJ3ZWJwYWNrOi8vL0U6L+Wkqei1kC9UaWFuY2lXZWIvbWFpbi5qcz85ZTExIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL3BhZ2VzL21haWwvdXNlci1tb21lbnRzLWF1dGgvdXNlci1tb21lbnRzLWF1dGgubnZ1ZT9iNjA0Iiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL3BhZ2VzL21haWwvdXNlci1tb21lbnRzLWF1dGgvdXNlci1tb21lbnRzLWF1dGgubnZ1ZT9kNTkzIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL3BhZ2VzL21haWwvdXNlci1tb21lbnRzLWF1dGgvdXNlci1tb21lbnRzLWF1dGgubnZ1ZT9lNWE1Iiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL3BhZ2VzL21haWwvdXNlci1tb21lbnRzLWF1dGgvdXNlci1tb21lbnRzLWF1dGgubnZ1ZT84ZWNiIiwidW5pLWFwcDovLy9wYWdlcy9tYWlsL3VzZXItbW9tZW50cy1hdXRoL3VzZXItbW9tZW50cy1hdXRoLm52dWUiXSwibmFtZXMiOlsiU1RBVF9WRVJTSU9OIiwidmVyc2lvbiIsIlNUQVRfVVJMIiwiU1RBVF9INV9VUkwiLCJQQUdFX1BWRVJfVElNRSIsIkFQUF9QVkVSX1RJTUUiLCJPUEVSQVRJTkdfVElNRSIsIlVVSURfS0VZIiwiVVVJRF9WQUxVRSIsImdldFV1aWQiLCJ1dWlkIiwiZ2V0UGxhdGZvcm1OYW1lIiwicGx1cyIsInJ1bnRpbWUiLCJnZXREQ2xvdWRJZCIsImUiLCJ1bmkiLCJnZXRTdG9yYWdlU3luYyIsIkRhdGUiLCJub3ciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzZXRTdG9yYWdlU3luYyIsImdldFNnaW4iLCJzdGF0RGF0YSIsImFyciIsIk9iamVjdCIsImtleXMiLCJzb3J0QXJyIiwic29ydCIsInNnaW4iLCJzZ2luU3RyIiwiaSIsInNpZ24iLCJvcHRpb25zIiwic3Vic3RyIiwibGVuZ3RoIiwiZ2V0U3BsaWNpbmciLCJkYXRhIiwic3RyIiwiZ2V0VGltZSIsInBhcnNlSW50IiwicGxhdGZvcm1MaXN0IiwicHJvY2VzcyIsImdldFBhY2tOYW1lIiwicGFja05hbWUiLCJjYW5JVXNlIiwiZ2V0QWNjb3VudEluZm9TeW5jIiwibWluaVByb2dyYW0iLCJhcHBJZCIsImdldFZlcnNpb24iLCJnZXRDaGFubmVsIiwicGxhdGZvcm1OYW1lIiwiY2hhbm5lbCIsImdldFNjZW5lIiwic2NlbmUiLCJnZXRMYXVuY2hPcHRpb25zU3luYyIsIkZpcnN0X19WaXNpdF9fVGltZV9fS0VZIiwiTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSIsImdldEZpcnN0VmlzaXRUaW1lIiwidGltZVN0b3JnZSIsInRpbWUiLCJyZW1vdmVTdG9yYWdlU3luYyIsImdldExhc3RWaXNpdFRpbWUiLCJQQUdFX1JFU0lERU5DRV9USU1FIiwiRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSIsIkxhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSIsInNldFBhZ2VSZXNpZGVuY2VUaW1lIiwiZ2V0UGFnZVJlc2lkZW5jZVRpbWUiLCJUT1RBTF9fVklTSVRfX0NPVU5UIiwiZ2V0VG90YWxWaXNpdENvdW50IiwiY291bnQiLCJHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zIiwicHJvcCIsImVuY29kZVVSSUNvbXBvbmVudCIsIlNldF9fRmlyc3RfX1RpbWUiLCJTZXRfX0xhc3RfX1RpbWUiLCJnZXRGaXJzdFRpbWUiLCJnZXRMYXN0VGltZSIsImdldFJlc2lkZW5jZVRpbWUiLCJ0eXBlIiwicmVzaWRlbmNlVGltZSIsIm92ZXJ0aW1lIiwiZ2V0Um91dGUiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInBhZ2UiLCJfc2VsZiIsIiR2bSIsIiRtcCIsImlzIiwiJHNjb3BlIiwicm91dGUiLCJnZXRQYWdlUm91dGUiLCJzZWxmIiwicXVlcnkiLCJfcXVlcnkiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0UGFnZVR5cGVzIiwibXBUeXBlIiwiJG9wdGlvbnMiLCJjYWxpYnJhdGlvbiIsImV2ZW50TmFtZSIsImNvbnNvbGUiLCJlcnJvciIsIlBhZ2VzSnNvbiIsInJlcXVpcmUiLCJkZWZhdWx0Iiwic3RhdENvbmZpZyIsInJlc3VsdE9wdGlvbnMiLCJnZXRTeXN0ZW1JbmZvU3luYyIsIlV0aWwiLCJfcmV0cnkiLCJfcGxhdGZvcm0iLCJfbmF2aWdhdGlvbkJhclRpdGxlIiwiY29uZmlnIiwicmVwb3J0IiwibHQiLCJfb3BlcmF0aW5nVGltZSIsIl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSIsIl9fcHJldmVudF90cmlnZ2VyaW5nIiwiX19saWNhdGlvbkhpZGUiLCJfX2xpY2F0aW9uU2hvdyIsIl9sYXN0UGFnZVJvdXRlIiwidXQiLCJtcG4iLCJhayIsImFwcGlkIiwidXN2IiwidiIsImNoIiwiY24iLCJwbiIsImN0IiwidCIsInR0IiwicCIsInBsYXRmb3JtIiwiYnJhbmQiLCJtZCIsIm1vZGVsIiwic3YiLCJzeXN0ZW0iLCJyZXBsYWNlIiwibXBzZGsiLCJTREtWZXJzaW9uIiwibXB2IiwibGFuZyIsImxhbmd1YWdlIiwicHIiLCJwaXhlbFJhdGlvIiwid3ciLCJ3aW5kb3dXaWR0aCIsIndoIiwid2luZG93SGVpZ2h0Iiwic3ciLCJzY3JlZW5XaWR0aCIsInNoIiwic2NyZWVuSGVpZ2h0IiwicGF0aCIsInNjIiwiX3NlbmRSZXBvcnRSZXF1ZXN0IiwiX3NlbmRIaWRlUmVxdWVzdCIsInVybHJlZiIsInVybHJlZl90cyIsInJvdXRlcGF0aCIsInRpdGxlTlZpZXciLCJ0aXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiX3NlbmRQYWdlUmVxdWVzdCIsInVybCIsIl9zZW5kRXZlbnRSZXF1ZXN0Iiwia2V5IiwiZnZ0cyIsImx2dHMiLCJ0dmMiLCJnZXRQcm9wZXJ0eSIsImdldE5ldHdvcmtJbmZvIiwib3B0IiwicmVxdWVzdCIsInZhbHVlIiwiZV9uIiwiZV92IiwidG9TdHJpbmciLCJnZXROZXR3b3JrVHlwZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJuZXQiLCJuZXR3b3JrVHlwZSIsImdldExvY2F0aW9uIiwid2d0aW5mbyIsImdlb2NvZGUiLCJhZGRyZXNzIiwiY291bnRyeSIsInByb3ZpbmNlIiwiY2l0eSIsImxhdCIsImxhdGl0dWRlIiwibG5nIiwibG9uZ2l0dWRlIiwidGl0bGUiLCJ0dG4iLCJ0dHBqIiwidHRjIiwicmVxdWVzdERhdGEiLCJwdXNoIiwidW5pU3RhdERhdGEiLCJmaXJzdEFyciIsImNvbnRlbnRBcnIiLCJsYXN0QXJyIiwicmQiLCJmb3JFYWNoIiwiZWxtIiwibmV3RGF0YSIsIm9wdGlvbnNEYXRhIiwicmVxdWVzdHMiLCJpbWFnZVJlcXVlc3QiLCJzZXRUaW1lb3V0IiwiX3NlbmRSZXF1ZXN0IiwibWV0aG9kIiwiZmFpbCIsImltYWdlIiwiSW1hZ2UiLCJzcmMiLCJTdGF0IiwiaW5zdGFuY2UiLCJhZGRJbnRlcmNlcHRvciIsImFkZEludGVyY2VwdG9ySW5pdCIsImludGVyY2VwdExvZ2luIiwiaW50ZXJjZXB0U2hhcmUiLCJpbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCIsImludm9rZSIsImFyZ3MiLCJjb21wbGV0ZSIsIl9sb2dpbiIsIl9zaGFyZSIsIl9wYXltZW50IiwiX3BhZ2VTaG93IiwiX2FwcGxpY2F0aW9uU2hvdyIsIl9wYWdlSGlkZSIsIl9hcHBsaWNhdGlvbkhpZGUiLCJlbSIsImluZm8iLCJlbVZhbCIsIm1lc3NhZ2UiLCJzdGFjayIsInN0YXQiLCJnZXRJbnN0YW5jZSIsImlzSGlkZSIsImxpZmVjeWNsZSIsIm9uTGF1bmNoIiwib25SZWFkeSIsInJlYWR5Iiwib25Mb2FkIiwibG9hZCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwib2xkU2hhcmVBcHBNZXNzYWdlIiwiY2FsbCIsIm9uU2hvdyIsInNob3ciLCJvbkhpZGUiLCJoaWRlIiwib25VbmxvYWQiLCJvbkVycm9yIiwibWFpbiIsImluaXRVbmkiLCJpc0ZuIiwiaGFuZGxlUHJvbWlzZSIsInByb21pc2UiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJSRUdFWCIsIkFQSV9OT1JNQUxfTElTVCIsInNob3VsZFByb21pc2UiLCJuYW1lIiwidGVzdCIsImluZGV4T2YiLCJwcm9taXNpZnkiLCJhcGkiLCJfbGVuIiwiYXJndW1lbnRzIiwicGFyYW1zIiwiQXJyYXkiLCJfa2V5IiwidW5kZWZpbmVkIiwiYXBwbHkiLCJjb25jYXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFzc2lnbiIsInByb3RvdHlwZSIsImZpbmFsbHkiLCJjYWxsYmFjayIsImNvbnN0cnVjdG9yIiwicmVhc29uIiwib25NZXNzYWdlQ2FsbGJhY2tzIiwib3JpZ2luIiwib25TdWJOVnVlTWVzc2FnZSIsIndlYnZpZXdJZCIsIndlZXhQbHVzIiwid2VidmlldyIsImN1cnJlbnRXZWJ2aWV3IiwiaWQiLCJCcm9hZGNhc3RDaGFubmVsIiwib25tZXNzYWdlIiwiZXZlbnQiLCJ0byIsIndyYXBwZXIiLCIkcHJvY2Vzc2VkIiwiY3VycmVudFdlYnZpZXdJZCIsImlzUG9wdXBOVnVlIiwiaG9zdE5WdWVJZCIsIl9fdW5pYXBwX29yaWdpbl90eXBlIiwiX191bmlhcHBfb3JpZ2luX2lkIiwicG9wdXBOVnVlSWQiLCJwb3N0TWVzc2FnZSIsIm9uTWVzc2FnZSIsIl9fdW5pYXBwX21hc2tfaWQiLCJfX3VuaWFwcF9ob3N0IiwibWFza0NvbG9yIiwiX191bmlhcHBfbWFzayIsIm1hc2tXZWJ2aWV3IiwiZ2V0V2Vidmlld0J5SWQiLCJwYXJlbnQiLCJvbGRTaG93Iiwib2xkSGlkZSIsIm9sZENsb3NlIiwiY2xvc2UiLCJzaG93TWFzayIsInNldFN0eWxlIiwibWFzayIsImNsb3NlTWFzayIsIl9sZW4yIiwiX2tleTIiLCJfbGVuMyIsIl9rZXkzIiwiZ2V0U3ViTlZ1ZUJ5SWQiLCJnZXRDdXJyZW50U3ViTlZ1ZSIsIndlZXgiLCJyZXF1aXJlTW9kdWxlIiwiZ2xvYmFsRXZlbnQiLCJjYWxsYmFja3MiLCJVTklBUFBfU0VSVklDRV9OVlVFX0lEIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2siLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2siLCJjcmVhdGVDYWxsYmFjayIsInJlcyIsImVyck1zZyIsImtlZXBBbGl2ZSIsImNhbGxiYWNrSWQiLCJwdWJsaXNoIiwiX3JlZiIsImNyZWF0ZVB1Ymxpc2giLCJvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAiLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQiLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCIsInJlcXVpcmVOYXRpdmVQbHVnaW4iLCJwbHVnaW5OYW1lIiwiZG9tIiwibG9hZEZvbnRGYWNlIiwiZmFtaWx5Iiwic291cmNlIiwiZGVzYyIsImFkZFJ1bGUiLCJmb250RmFtaWx5Iiwic3RhdHVzIiwiZ2xvYmFsRXZlbnQkMSIsImNhbGxiYWNrcyQxIiwiaXNVbmlBcHBSZWFkeSIsIl90eXBlb2YiLCJTeW1ib2wiLCJpdGVyYXRvciIsIm9iaiIsInN0cmVhbSIsIk1FVEhPRF9HRVQiLCJNRVRIT0RfUE9TVCIsIkNPTlRFTlRfVFlQRV9KU09OIiwiQ09OVEVOVF9UWVBFX0ZPUk0iLCJzZXJpYWxpemUiLCJjb250ZW50VHlwZSIsInRvVXBwZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJtYXAiLCJqb2luIiwiaGVhZGVyIiwiX3JlZiRtZXRob2QiLCJfcmVmJGRhdGFUeXBlIiwiZGF0YVR5cGUiLCJyZXNwb25zZVR5cGUiLCJhYm9ydGVkIiwiaGFzQ29udGVudFR5cGUiLCJoZWFkZXJzIiwiZmV0Y2giLCJib2R5IiwiX3JlZjIiLCJvayIsInN0YXR1c1RleHQiLCJyZXQiLCJzdGF0dXNDb2RlIiwiYWJvcnQiLCJzdG9yYWdlIiwiVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFIiwiZ2V0U3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZSIsInNldFN0b3JhZ2UiLCJzZXRJdGVtIiwicmVtb3ZlU3RvcmFnZSIsIl9yZWYzIiwicmVtb3ZlSXRlbSIsImNsZWFyU3RvcmFnZSIsIl9yZWY0IiwiY2xpcGJvYXJkIiwiZ2V0Q2xpcGJvYXJkRGF0YSIsImdldFN0cmluZyIsInNldENsaXBib2FyZERhdGEiLCJzZXRTdHJpbmciLCJnZXRFbWl0dGVyIiwiZ2V0VW5pRW1pdHRlciIsIkVtaXR0ZXIiLCIkb24iLCJ3YXJuIiwiJG9mZiIsIiRvbmNlIiwiJGVtaXQiLCJjdHgiLCJzbGljZSIsImZyZWV6ZSIsInd4IiwidXBsb2FkRmlsZSIsImRvd25sb2FkRmlsZSIsImNob29zZUltYWdlIiwicHJldmlld0ltYWdlIiwiZ2V0SW1hZ2VJbmZvIiwic2F2ZUltYWdlVG9QaG90b3NBbGJ1bSIsImNob29zZVZpZGVvIiwic2F2ZVZpZGVvVG9QaG90b3NBbGJ1bSIsInNhdmVGaWxlIiwiZ2V0U2F2ZWRGaWxlTGlzdCIsImdldFNhdmVkRmlsZUluZm8iLCJyZW1vdmVTYXZlZEZpbGUiLCJvcGVuRG9jdW1lbnQiLCJnZXRTdG9yYWdlSW5mbyIsImNob29zZUxvY2F0aW9uIiwib3BlbkxvY2F0aW9uIiwiZ2V0U3lzdGVtSW5mbyIsIm1ha2VQaG9uZUNhbGwiLCJzY2FuQ29kZSIsInNldFNjcmVlbkJyaWdodG5lc3MiLCJnZXRTY3JlZW5CcmlnaHRuZXNzIiwic2V0S2VlcFNjcmVlbk9uIiwidmlicmF0ZUxvbmciLCJ2aWJyYXRlU2hvcnQiLCJhZGRQaG9uZUNvbnRhY3QiLCJzaG93VG9hc3QiLCJzaG93TG9hZGluZyIsImhpZGVUb2FzdCIsImhpZGVMb2FkaW5nIiwic2hvd01vZGFsIiwic2hvd0FjdGlvblNoZWV0Iiwic2V0TmF2aWdhdGlvbkJhclRpdGxlIiwic2V0TmF2aWdhdGlvbkJhckNvbG9yIiwibmF2aWdhdGVUbyIsInJlZGlyZWN0VG8iLCJyZUxhdW5jaCIsInN3aXRjaFRhYiIsIm5hdmlnYXRlQmFjayIsImdldFByb3ZpZGVyIiwibG9naW4iLCJnZXRVc2VySW5mbyIsInNoYXJlIiwicmVxdWVzdFBheW1lbnQiLCJzdWJzY3JpYmVQdXNoIiwidW5zdWJzY3JpYmVQdXNoIiwib25QdXNoIiwib2ZmUHVzaCIsImJhc2VVbmkiLCJvcyIsIm52dWUiLCJQcm94eSIsImdldCIsInRhcmdldCIsImNyZWF0ZVVuaSIsImdldFVuaSIsIldlZXhQbHVzIiwidHlwb2YiLCJzIiwic3Vic3RyaW5nIiwiZm9ybWF0TG9nIiwibXNncyIsInZUeXBlIiwiU3RyaW5nIiwibXNnIiwibGFzdE1zZyIsInBvcCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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LEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5MUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkY7QUFDM0I7QUFDTDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUM2SDtBQUM3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QUFTLHdCQUF3QjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHdCQUF3QixrREFBa0Q7QUFDMUU7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSx3QkFBd0Isa0RBQWtEO0FBQzFFO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqRUE7QUFBQTtBQUFBO0FBQUE7QUFBNmIsQ0FBZ0Isd2RBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaUJqZDtBQUNBLG1IOzs7Ozs7Ozs7Ozs7Ozs7O2VBQ0EsRUFDQSxjQUNBLCtCQURBLEVBRUEsbUNBRkEsRUFEQSxFQUtBLElBTEEsa0JBS0EsQ0FDQSxVQUdBLENBVEEsRUFVQSxXQVZBLEUiLCJmaWxlIjoicGFnZXMvbWFpbC91c2VyLW1vbWVudHMtYXV0aC91c2VyLW1vbWVudHMtYXV0aC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2NSk7XG4iLCJpbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vcGFja2FnZS5qc29uJztcclxuXHJcbmNvbnN0IFNUQVRfVkVSU0lPTiA9IHZlcnNpb247XHJcbmNvbnN0IFNUQVRfVVJMID0gJ2h0dHBzOi8vdG9uZ2ppLmRjbG91ZC5pby91bmkvc3RhdCc7XHJcbmNvbnN0IFNUQVRfSDVfVVJMID0gJ2h0dHBzOi8vdG9uZ2ppLmRjbG91ZC5pby91bmkvc3RhdC5naWYnOyBcclxuY29uc3QgUEFHRV9QVkVSX1RJTUUgPSAxODAwO1xyXG5jb25zdCBBUFBfUFZFUl9USU1FID0gMzAwO1xyXG5jb25zdCBPUEVSQVRJTkdfVElNRSA9IDEwO1xyXG5cclxuY29uc3QgVVVJRF9LRVkgPSAnX19EQ19TVEFUX1VVSUQnO1xyXG5jb25zdCBVVUlEX1ZBTFVFID0gJ19fRENfVVVJRF9WQUxVRSc7XHJcblxyXG5mdW5jdGlvbiBnZXRVdWlkKCkge1xyXG4gIGxldCB1dWlkID0gJyc7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHV1aWQgPSBwbHVzLnJ1bnRpbWUuZ2V0RENsb3VkSWQoKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdXVpZCA9ICcnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHV1aWRcclxuICB9XHJcblxyXG4gIHRyeSB7XHJcbiAgICB1dWlkID0gdW5pLmdldFN0b3JhZ2VTeW5jKFVVSURfS0VZKTtcclxuICB9IGNhdGNoIChlKSB7XHJcbiAgICB1dWlkID0gVVVJRF9WQUxVRTtcclxuICB9XHJcblxyXG4gIGlmICghdXVpZCkge1xyXG4gICAgdXVpZCA9IERhdGUubm93KCkgKyAnJyArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDFlNyk7XHJcbiAgICB0cnkge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoVVVJRF9LRVksIHV1aWQpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoVVVJRF9LRVksIFVVSURfVkFMVUUpO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdXVpZDtcclxufVxyXG5cclxuY29uc3QgZ2V0U2dpbiA9IChzdGF0RGF0YSkgPT4ge1xyXG4gIGxldCBhcnIgPSBPYmplY3Qua2V5cyhzdGF0RGF0YSk7XHJcbiAgbGV0IHNvcnRBcnIgPSBhcnIuc29ydCgpO1xyXG4gIGxldCBzZ2luID0ge307XHJcbiAgbGV0IHNnaW5TdHIgPSAnJztcclxuICBmb3IgKHZhciBpIGluIHNvcnRBcnIpIHtcclxuICAgIHNnaW5bc29ydEFycltpXV0gPSBzdGF0RGF0YVtzb3J0QXJyW2ldXTtcclxuICAgIHNnaW5TdHIgKz0gc29ydEFycltpXSArICc9JyArIHN0YXREYXRhW3NvcnRBcnJbaV1dICsgJyYnO1xyXG4gIH1cclxuICAvLyBjb25zdCBvcHRpb25zID0gc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKVxyXG4gIC8vIHNnaW5TdHIgPSBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpICsgJyZrZXk9JyArIFNUQVRfS0VZO1xyXG4gIC8vIGNvbnN0IHNpID0gY3J5cHRvLmNyZWF0ZUhhc2goJ21kNScpLnVwZGF0ZShzZ2luU3RyKS5kaWdlc3QoJ2hleCcpO1xyXG4gIHJldHVybiB7XHJcbiAgICBzaWduOiAnJyxcclxuICAgIG9wdGlvbnM6IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSlcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U3BsaWNpbmcgPSAoZGF0YSkgPT4ge1xyXG4gIGxldCBzdHIgPSAnJztcclxuICBmb3IgKHZhciBpIGluIGRhdGEpIHtcclxuICAgIHN0ciArPSBpICsgJz0nICsgZGF0YVtpXSArICcmJztcclxuICB9XHJcbiAgcmV0dXJuIHN0ci5zdWJzdHIoMCwgc3RyLmxlbmd0aCAtIDEpXHJcbn07XHJcblxyXG5jb25zdCBnZXRUaW1lID0gKCkgPT4ge1xyXG4gIHJldHVybiBwYXJzZUludChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGxhdGZvcm1OYW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTGlzdCA9IHtcclxuICAgICdhcHAtcGx1cyc6ICduJyxcclxuICAgICdoNSc6ICdoNScsXHJcbiAgICAnbXAtd2VpeGluJzogJ3d4JyxcclxuICAgICdtcC1hbGlwYXknOiAnYWxpJyxcclxuICAgICdtcC1iYWlkdSc6ICdiZCcsXHJcbiAgICAnbXAtdG91dGlhbyc6ICd0dCcsXHJcbiAgICAnbXAtcXEnOiAncXEnXHJcbiAgfTtcclxuICByZXR1cm4gcGxhdGZvcm1MaXN0W3Byb2Nlc3MuZW52LlZVRV9BUFBfUExBVEZPUk1dO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFja05hbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHBhY2tOYW1lID0gJyc7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnd3gnIHx8IGdldFBsYXRmb3JtTmFtZSgpID09PSAncXEnKSB7XHJcbiAgICAvLyDlhbzlrrnlvq7kv6HlsI/nqIvluo/kvY7niYjmnKzln7rnoYDlupNcclxuICAgIGlmKHVuaS5jYW5JVXNlKCdnZXRBY2NvdW50SW5mb1N5bmMnKSl7XHJcbiAgICAgIHBhY2tOYW1lID0gdW5pLmdldEFjY291bnRJbmZvU3luYygpLm1pbmlQcm9ncmFtLmFwcElkIHx8ICcnO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcGFja05hbWVcclxufTtcclxuXHJcbmNvbnN0IGdldFZlcnNpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicgPyBwbHVzLnJ1bnRpbWUudmVyc2lvbiA6ICcnO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0Q2hhbm5lbCA9ICgpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybU5hbWUgPSBnZXRQbGF0Zm9ybU5hbWUoKTtcclxuICBsZXQgY2hhbm5lbCA9ICcnO1xyXG4gIGlmIChwbGF0Zm9ybU5hbWUgPT09ICduJykge1xyXG4gICAgY2hhbm5lbCA9IHBsdXMucnVudGltZS5jaGFubmVsO1xyXG4gIH1cclxuICByZXR1cm4gY2hhbm5lbDtcclxufTtcclxuXHJcbmNvbnN0IGdldFNjZW5lID0gKG9wdGlvbnMpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybU5hbWUgPSBnZXRQbGF0Zm9ybU5hbWUoKTtcclxuICBsZXQgc2NlbmUgPSAnJztcclxuICBpZiAob3B0aW9ucykge1xyXG4gICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgfVxyXG4gIGlmIChwbGF0Zm9ybU5hbWUgPT09ICd3eCcpIHtcclxuICAgIHNjZW5lID0gdW5pLmdldExhdW5jaE9wdGlvbnNTeW5jKCkuc2NlbmU7XHJcbiAgfVxyXG4gIHJldHVybiBzY2VuZTtcclxufTtcclxuY29uc3QgRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkgPSAnRmlyc3RfX1Zpc2l0X19UaW1lJztcclxuY29uc3QgTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSA9ICdMYXN0X19WaXNpdF9fVGltZSc7XHJcblxyXG5jb25zdCBnZXRGaXJzdFZpc2l0VGltZSA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKEZpcnN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICBsZXQgdGltZSA9IDA7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIHRpbWUgPSB0aW1lU3RvcmdlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aW1lID0gZ2V0VGltZSgpO1xyXG4gICAgdW5pLnNldFN0b3JhZ2VTeW5jKEZpcnN0X19WaXNpdF9fVGltZV9fS0VZLCB0aW1lKTtcclxuICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICB9XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5jb25zdCBnZXRMYXN0VmlzaXRUaW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgbGV0IHRpbWUgPSAwO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICB0aW1lID0gdGltZVN0b3JnZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGltZSA9ICcnO1xyXG4gIH1cclxuICB1bmkuc2V0U3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSwgZ2V0VGltZSgpKTtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBQQUdFX1JFU0lERU5DRV9USU1FID0gJ19fcGFnZV9fcmVzaWRlbmNlX190aW1lJztcclxubGV0IEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSAwO1xyXG5sZXQgTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gMDtcclxuXHJcblxyXG5jb25zdCBzZXRQYWdlUmVzaWRlbmNlVGltZSA9ICgpID0+IHtcclxuICBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gZ2V0VGltZSgpO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICB1bmkuc2V0U3RvcmFnZVN5bmMoUEFHRV9SRVNJREVOQ0VfVElNRSwgZ2V0VGltZSgpKTtcclxuICB9XHJcbiAgcmV0dXJuIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWVcclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VSZXNpZGVuY2VUaW1lID0gKCkgPT4ge1xyXG4gIExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IGdldFRpbWUoKTtcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhQQUdFX1JFU0lERU5DRV9USU1FKTtcclxuICB9XHJcbiAgcmV0dXJuIExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSAtIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWVcclxufTtcclxuY29uc3QgVE9UQUxfX1ZJU0lUX19DT1VOVCA9ICdUb3RhbF9fVmlzaXRfX0NvdW50JztcclxuY29uc3QgZ2V0VG90YWxWaXNpdENvdW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoVE9UQUxfX1ZJU0lUX19DT1VOVCk7XHJcbiAgbGV0IGNvdW50ID0gMTtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgY291bnQgPSB0aW1lU3RvcmdlO1xyXG4gICAgY291bnQrKztcclxuICB9XHJcbiAgdW5pLnNldFN0b3JhZ2VTeW5jKFRPVEFMX19WSVNJVF9fQ09VTlQsIGNvdW50KTtcclxuICByZXR1cm4gY291bnQ7XHJcbn07XHJcblxyXG5jb25zdCBHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zID0gKHN0YXREYXRhKSA9PiB7XHJcbiAgbGV0IGRhdGEgPSB7fTtcclxuICBmb3IgKGxldCBwcm9wIGluIHN0YXREYXRhKSB7XHJcbiAgICBkYXRhW3Byb3BdID0gZW5jb2RlVVJJQ29tcG9uZW50KHN0YXREYXRhW3Byb3BdKTtcclxuICB9XHJcbiAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5sZXQgU2V0X19GaXJzdF9fVGltZSA9IDA7XHJcbmxldCBTZXRfX0xhc3RfX1RpbWUgPSAwO1xyXG5cclxuY29uc3QgZ2V0Rmlyc3RUaW1lID0gKCkgPT4ge1xyXG4gIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgU2V0X19GaXJzdF9fVGltZSA9IHRpbWU7XHJcbiAgU2V0X19MYXN0X19UaW1lID0gMDtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBnZXRMYXN0VGltZSA9ICgpID0+IHtcclxuICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIFNldF9fTGFzdF9fVGltZSA9IHRpbWU7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZ2V0UmVzaWRlbmNlVGltZSA9ICh0eXBlKSA9PiB7XHJcbiAgbGV0IHJlc2lkZW5jZVRpbWUgPSAwO1xyXG4gIGlmIChTZXRfX0ZpcnN0X19UaW1lICE9PSAwKSB7XHJcbiAgICByZXNpZGVuY2VUaW1lID0gU2V0X19MYXN0X19UaW1lIC0gU2V0X19GaXJzdF9fVGltZTtcclxuICB9XHJcblxyXG4gIHJlc2lkZW5jZVRpbWUgPSBwYXJzZUludChyZXNpZGVuY2VUaW1lIC8gMTAwMCk7XHJcbiAgcmVzaWRlbmNlVGltZSA9IHJlc2lkZW5jZVRpbWUgPCAxID8gMSA6IHJlc2lkZW5jZVRpbWU7XHJcbiAgaWYgKHR5cGUgPT09ICdhcHAnKSB7XHJcbiAgICBsZXQgb3ZlcnRpbWUgPSByZXNpZGVuY2VUaW1lID4gQVBQX1BWRVJfVElNRSA/IHRydWUgOiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc2lkZW5jZVRpbWUsXHJcbiAgICAgIG92ZXJ0aW1lXHJcbiAgICB9O1xyXG4gIH1cclxuICBpZiAodHlwZSA9PT0gJ3BhZ2UnKSB7XHJcbiAgICBsZXQgb3ZlcnRpbWUgPSByZXNpZGVuY2VUaW1lID4gUEFHRV9QVkVSX1RJTUUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNpZGVuY2VUaW1lLFxyXG4gICAgICBvdmVydGltZVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICByZXNpZGVuY2VUaW1lXHJcbiAgfTtcclxuXHJcbn07XHJcblxyXG5jb25zdCBnZXRSb3V0ZSA9ICgpID0+IHtcclxuICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICB2YXIgcGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xyXG4gIGxldCBfc2VsZiA9IHBhZ2UuJHZtO1xyXG5cclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdiZCcpIHtcclxuICAgIHJldHVybiBfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2UuaXM7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoX3NlbGYuJHNjb3BlICYmIF9zZWxmLiRzY29wZS5yb3V0ZSkgfHwgKF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5yb3V0ZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVJvdXRlID0gKHNlbGYpID0+IHtcclxuICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICB2YXIgcGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xyXG4gIGxldCBfc2VsZiA9IHBhZ2UuJHZtO1xyXG4gIGxldCBxdWVyeSA9IHNlbGYuX3F1ZXJ5O1xyXG4gIGxldCBzdHIgPSBxdWVyeSAmJiBKU09OLnN0cmluZ2lmeShxdWVyeSkgIT09ICd7fScgPyAnPycgKyBKU09OLnN0cmluZ2lmeShxdWVyeSkgOiAnJztcclxuICAvLyBjbGVhclxyXG4gIHNlbGYuX3F1ZXJ5ID0gJyc7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnYmQnKSB7XHJcbiAgICByZXR1cm4gX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLmlzICsgc3RyO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKF9zZWxmLiRzY29wZSAmJiBfc2VsZi4kc2NvcGUucm91dGUgKyBzdHIgKXx8IChfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2Uucm91dGUgKyBzdHIpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VUeXBlcyA9IChzZWxmKSA9PiB7XHJcbiAgaWYgKHNlbGYubXBUeXBlID09PSAncGFnZScgfHwgKHNlbGYuJG1wICYmIHNlbGYuJG1wLm1wVHlwZSA9PT0gJ3BhZ2UnKSB8fCBzZWxmLiRvcHRpb25zLm1wVHlwZSA9PT0gJ3BhZ2UnKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuY29uc3QgY2FsaWJyYXRpb24gPSAoZXZlbnROYW1lLCBvcHRpb25zKSA9PiB7XHJcbiAgLy8gIGxvZ2luIOOAgSBzaGFyZSDjgIFwYXlfc3VjY2VzcyDjgIFwYXlfZmFpbCDjgIFyZWdpc3RlciDjgIF0aXRsZVxyXG4gIGlmKCFldmVudE5hbWUpe1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCDnvLrlsJEgW2V2ZW50TmFtZV0g5Y+C5pWwYCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICBpZiAodHlwZW9mIGV2ZW50TmFtZSAhPT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw57G75Z6L6ZSZ6K+vLOWPquiDveS4uiBTdHJpbmcg57G75Z6LYCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuICBpZiAoZXZlbnROYW1lLmxlbmd0aCA+IDI1NSkge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDplb/luqbkuI3og73lpKfkuo4gMjU1YCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW29wdGlvbnNdIOWPguaVsOexu+Wei+mUmeivryzlj6rog73kuLogU3RyaW5nIOaIliBPYmplY3Qg57G75Z6LYCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnc3RyaW5nJyAmJiBvcHRpb25zLmxlbmd0aCA+IDI1NSkge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbb3B0aW9uc10g5Y+C5pWw6ZW/5bqm5LiN6IO95aSn5LqOIDI1NWApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmIChldmVudE5hbWUgPT09ICd0aXRsZScgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKCd1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOS4uiB0aXRsZSDml7bvvIxbb3B0aW9uc10g5Y+C5pWw5Y+q6IO95Li6IFN0cmluZyDnsbvlnosnKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgUGFnZXNKc29uID0gcmVxdWlyZSgndW5pLXBhZ2VzP3tcInR5cGVcIjpcInN0eWxlXCJ9JykuZGVmYXVsdDtcclxuY29uc3Qgc3RhdENvbmZpZyA9IHJlcXVpcmUoJ3VuaS1zdGF0LWNvbmZpZycpLmRlZmF1bHQgfHwgcmVxdWlyZSgndW5pLXN0YXQtY29uZmlnJyk7XHJcblxyXG5jb25zdCByZXN1bHRPcHRpb25zID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XHJcblxyXG5jbGFzcyBVdGlsIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuc2VsZiA9ICcnO1xyXG4gICAgdGhpcy5fcmV0cnkgPSAwO1xyXG4gICAgdGhpcy5fcGxhdGZvcm0gPSAnJztcclxuICAgIHRoaXMuX3F1ZXJ5ID0ge307XHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUgPSB7XHJcbiAgICAgIGNvbmZpZzogJycsXHJcbiAgICAgIHBhZ2U6ICcnLFxyXG4gICAgICByZXBvcnQ6ICcnLFxyXG4gICAgICBsdDogJydcclxuICAgIH07XHJcbiAgICB0aGlzLl9vcGVyYXRpbmdUaW1lID0gMDtcclxuICAgIHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhID0ge1xyXG4gICAgICAnMSc6IFtdLFxyXG4gICAgICAnMTEnOiBbXVxyXG4gICAgfTtcclxuICAgIHRoaXMuX19wcmV2ZW50X3RyaWdnZXJpbmcgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gZmFsc2U7XHJcbiAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gZmFsc2U7XHJcbiAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhID0ge1xyXG4gICAgICB1dWlkOiBnZXRVdWlkKCksXHJcbiAgICAgIHV0OiBnZXRQbGF0Zm9ybU5hbWUoKSxcclxuICAgICAgbXBuOiBnZXRQYWNrTmFtZSgpLFxyXG4gICAgICBhazogc3RhdENvbmZpZy5hcHBpZCxcclxuICAgICAgdXN2OiBTVEFUX1ZFUlNJT04sXHJcbiAgICAgIHY6IGdldFZlcnNpb24oKSxcclxuICAgICAgY2g6IGdldENoYW5uZWwoKSxcclxuICAgICAgY246ICcnLFxyXG4gICAgICBwbjogJycsXHJcbiAgICAgIGN0OiAnJyxcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICB0dDogJycsXHJcbiAgICAgIHA6IHJlc3VsdE9wdGlvbnMucGxhdGZvcm0gPT09ICdhbmRyb2lkJyA/ICdhJyA6ICdpJyxcclxuICAgICAgYnJhbmQ6IHJlc3VsdE9wdGlvbnMuYnJhbmQgfHwgJycsXHJcbiAgICAgIG1kOiByZXN1bHRPcHRpb25zLm1vZGVsLFxyXG4gICAgICBzdjogcmVzdWx0T3B0aW9ucy5zeXN0ZW0ucmVwbGFjZSgvKEFuZHJvaWR8aU9TKVxccy8sICcnKSxcclxuICAgICAgbXBzZGs6IHJlc3VsdE9wdGlvbnMuU0RLVmVyc2lvbiB8fCAnJyxcclxuICAgICAgbXB2OiByZXN1bHRPcHRpb25zLnZlcnNpb24gfHwgJycsXHJcbiAgICAgIGxhbmc6IHJlc3VsdE9wdGlvbnMubGFuZ3VhZ2UsXHJcbiAgICAgIHByOiByZXN1bHRPcHRpb25zLnBpeGVsUmF0aW8sXHJcbiAgICAgIHd3OiByZXN1bHRPcHRpb25zLndpbmRvd1dpZHRoLFxyXG4gICAgICB3aDogcmVzdWx0T3B0aW9ucy53aW5kb3dIZWlnaHQsXHJcbiAgICAgIHN3OiByZXN1bHRPcHRpb25zLnNjcmVlbldpZHRoLFxyXG4gICAgICBzaDogcmVzdWx0T3B0aW9ucy5zY3JlZW5IZWlnaHRcclxuICAgIH07XHJcblxyXG4gIH1cclxuXHJcbiAgX2FwcGxpY2F0aW9uU2hvdygpIHtcclxuICAgIGlmICh0aGlzLl9fbGljYXRpb25IaWRlKSB7XHJcbiAgICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdhcHAnKTtcclxuICAgICAgaWYgKHRpbWUub3ZlcnRpbWUpIHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgIHBhdGg6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgICBzY2VuZTogdGhpcy5zdGF0RGF0YS5zY1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2FwcGxpY2F0aW9uSGlkZShzZWxmLCB0eXBlKSB7XHJcblxyXG4gICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IHRydWU7XHJcbiAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoKTtcclxuICAgIGdldEZpcnN0VGltZSgpO1xyXG4gICAgY29uc3Qgcm91dGUgPSBnZXRQYWdlUm91dGUodGhpcyk7XHJcbiAgICB0aGlzLl9zZW5kSGlkZVJlcXVlc3Qoe1xyXG4gICAgICB1cmxyZWY6IHJvdXRlLFxyXG4gICAgICB1cmxyZWZfdHM6IHRpbWUucmVzaWRlbmNlVGltZVxyXG4gICAgfSwgdHlwZSk7XHJcbiAgfVxyXG5cclxuICBfcGFnZVNob3coKSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IGdldFBhZ2VSb3V0ZSh0aGlzKTtcclxuICAgIGNvbnN0IHJvdXRlcGF0aCA9IGdldFJvdXRlKCk7XHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUuY29uZmlnID0gUGFnZXNKc29uICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLnRpdGxlTlZpZXcgJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0udGl0bGVOVmlldy50aXRsZVRleHQgfHxcclxuICAgICAgUGFnZXNKc29uICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLm5hdmlnYXRpb25CYXJUaXRsZVRleHQgfHwgJyc7XHJcblxyXG4gICAgaWYgKHRoaXMuX19saWNhdGlvblNob3cpIHtcclxuICAgICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgICAgIHRoaXMuX19saWNhdGlvblNob3cgPSBmYWxzZTtcclxuICAgICAgLy8gY29uc29sZS5sb2coJ+i/meaYryBvbkxhdWNoIOS5i+WQjuaJp+ihjOeahOesrOS4gOasoSBwYWdlU2hvdyDvvIzkuLrkuIvmrKHorrDlvZXml7bpl7TlgZrlh4blpIcnKTtcclxuICAgICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9IHJvdXRlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSByb3V0ZTtcclxuICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdwYWdlJyk7XHJcbiAgICBpZiAodGltZS5vdmVydGltZSkge1xyXG4gICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICBwYXRoOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHNjZW5lOiB0aGlzLnN0YXREYXRhLnNjXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgfVxyXG5cclxuICBfcGFnZUhpZGUoKSB7XHJcbiAgICBpZiAoIXRoaXMuX19saWNhdGlvbkhpZGUpIHtcclxuICAgICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ3BhZ2UnKTtcclxuICAgICAgdGhpcy5fc2VuZFBhZ2VSZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgdXJscmVmOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHVybHJlZl90czogdGltZS5yZXNpZGVuY2VUaW1lXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUgPSB7XHJcbiAgICAgICAgY29uZmlnOiAnJyxcclxuICAgICAgICBwYWdlOiAnJyxcclxuICAgICAgICByZXBvcnQ6ICcnLFxyXG4gICAgICAgIGx0OiAnJ1xyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfbG9naW4oKSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5OiAnbG9naW4nXHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIF9zaGFyZSgpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXk6ICdzaGFyZSdcclxuICAgIH0sIDApO1xyXG4gIH1cclxuICBfcGF5bWVudChrZXkpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXlcclxuICAgIH0sIDApO1xyXG4gIH1cclxuICBfc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucykge1xyXG5cclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5sdCA9ICcxJztcclxuICAgIGxldCBxdWVyeSA9IG9wdGlvbnMucXVlcnkgJiYgSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSkgIT09ICd7fScgPyAnPycgKyBKU09OLnN0cmluZ2lmeShvcHRpb25zLnF1ZXJ5KSA6ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5sdCA9ICcxJztcclxuICAgIHRoaXMuc3RhdERhdGEudXJsID0gKG9wdGlvbnMucGF0aCArIHF1ZXJ5KSB8fCAnJztcclxuICAgIHRoaXMuc3RhdERhdGEudCA9IGdldFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEuc2MgPSBnZXRTY2VuZShvcHRpb25zLnNjZW5lKTtcclxuICAgIHRoaXMuc3RhdERhdGEuZnZ0cyA9IGdldEZpcnN0VmlzaXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLmx2dHMgPSBnZXRMYXN0VmlzaXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLnR2YyA9IGdldFRvdGFsVmlzaXRDb3VudCgpO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdGhpcy5nZXRQcm9wZXJ0eSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5nZXROZXR3b3JrSW5mbygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX3NlbmRQYWdlUmVxdWVzdChvcHQpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIHVybCxcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHNcclxuICAgIH0gPSBvcHQ7XHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUubHQgPSAnMTEnO1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMTEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJsLFxyXG4gICAgICB0dDogdGhpcy5zdGF0RGF0YS50dCxcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHMsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIF9zZW5kSGlkZVJlcXVlc3Qob3B0LCB0eXBlKSB7XHJcbiAgICBsZXQge1xyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90c1xyXG4gICAgfSA9IG9wdDtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzMnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHMsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zLCB0eXBlKTtcclxuICB9XHJcbiAgX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAga2V5ID0gJycsXHJcbiAgICB2YWx1ZSA9IFwiXCJcclxuICB9ID0ge30pIHtcclxuICAgIGNvbnN0IHJvdXRlID0gdGhpcy5fbGFzdFBhZ2VSb3V0ZTtcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzIxJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybDogcm91dGUsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICBlX246IGtleSxcclxuICAgICAgZV92OiB0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlLnRvU3RyaW5nKCksXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TmV0d29ya0luZm8oKSB7XHJcbiAgICB1bmkuZ2V0TmV0d29ya1R5cGUoe1xyXG4gICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdGF0RGF0YS5uZXQgPSByZXN1bHQubmV0d29ya1R5cGU7XHJcbiAgICAgICAgdGhpcy5nZXRMb2NhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFByb3BlcnR5KCkge1xyXG4gICAgcGx1cy5ydW50aW1lLmdldFByb3BlcnR5KHBsdXMucnVudGltZS5hcHBpZCwgKHdndGluZm8pID0+IHtcclxuICAgICAgdGhpcy5zdGF0RGF0YS52ID0gd2d0aW5mby52ZXJzaW9uIHx8ICcnO1xyXG4gICAgICB0aGlzLmdldE5ldHdvcmtJbmZvKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldExvY2F0aW9uKCkge1xyXG4gICAgaWYgKHN0YXRDb25maWcuZ2V0TG9jYXRpb24pIHtcclxuICAgICAgdW5pLmdldExvY2F0aW9uKHtcclxuICAgICAgICB0eXBlOiAnd2dzODQnLFxyXG4gICAgICAgIGdlb2NvZGU6IHRydWUsXHJcbiAgICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlc3VsdC5hZGRyZXNzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEuY24gPSByZXN1bHQuYWRkcmVzcy5jb3VudHJ5O1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLnBuID0gcmVzdWx0LmFkZHJlc3MucHJvdmluY2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEuY3QgPSByZXN1bHQuYWRkcmVzcy5jaXR5O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMuc3RhdERhdGEubGF0ID0gcmVzdWx0LmxhdGl0dWRlO1xyXG4gICAgICAgICAgdGhpcy5zdGF0RGF0YS5sbmcgPSByZXN1bHQubG9uZ2l0dWRlO1xyXG4gICAgICAgICAgdGhpcy5yZXF1ZXN0KHRoaXMuc3RhdERhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YXREYXRhLmxhdCA9IDA7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEubG5nID0gMDtcclxuICAgICAgdGhpcy5yZXF1ZXN0KHRoaXMuc3RhdERhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVxdWVzdChkYXRhLCB0eXBlKSB7XHJcbiAgICBsZXQgdGltZSA9IGdldFRpbWUoKTtcclxuICAgIGNvbnN0IHRpdGxlID0gdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlO1xyXG4gICAgZGF0YS50dG4gPSB0aXRsZS5wYWdlO1xyXG4gICAgZGF0YS50dHBqID0gdGl0bGUuY29uZmlnO1xyXG4gICAgZGF0YS50dGMgPSB0aXRsZS5yZXBvcnQ7XHJcblxyXG4gICAgbGV0IHJlcXVlc3REYXRhID0gdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGE7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICByZXF1ZXN0RGF0YSA9IHVuaS5nZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKSB8fCB7fTtcclxuICAgIH1cclxuICAgIGlmICghcmVxdWVzdERhdGFbZGF0YS5sdF0pIHtcclxuICAgICAgcmVxdWVzdERhdGFbZGF0YS5sdF0gPSBbXTtcclxuICAgIH1cclxuICAgIHJlcXVlc3REYXRhW2RhdGEubHRdLnB1c2goZGF0YSk7XHJcblxyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScsIHJlcXVlc3REYXRhKTtcclxuICAgIH1cclxuICAgIGlmIChnZXRQYWdlUmVzaWRlbmNlVGltZSgpIDwgT1BFUkFUSU5HX1RJTUUgJiYgIXR5cGUpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBsZXQgdW5pU3RhdERhdGEgPSB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaVN0YXREYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpO1xyXG4gICAgfVxyXG4gICAgLy8g5pe26Ze06LaF6L+H77yM6YeN5paw6I635Y+W5pe26Ze05oizXHJcbiAgICBzZXRQYWdlUmVzaWRlbmNlVGltZSgpO1xyXG4gICAgbGV0IGZpcnN0QXJyID0gW107XHJcbiAgICBsZXQgY29udGVudEFyciA9IFtdO1xyXG4gICAgbGV0IGxhc3RBcnIgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpIGluIHVuaVN0YXREYXRhKSB7XHJcbiAgICAgIGNvbnN0IHJkID0gdW5pU3RhdERhdGFbaV07XHJcbiAgICAgIHJkLmZvckVhY2goKGVsbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSBnZXRTcGxpY2luZyhlbG0pO1xyXG4gICAgICAgIGlmIChpID09PSAwKSB7XHJcbiAgICAgICAgICBmaXJzdEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMykge1xyXG4gICAgICAgICAgbGFzdEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb250ZW50QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmaXJzdEFyci5wdXNoKC4uLmNvbnRlbnRBcnIsIC4uLmxhc3RBcnIpO1xyXG4gICAgbGV0IG9wdGlvbnNEYXRhID0ge1xyXG4gICAgICB1c3Y6IFNUQVRfVkVSU0lPTiwgLy/nu5/orqEgU0RLIOeJiOacrOWPt1xyXG4gICAgICB0OiB0aW1lLCAvL+WPkemAgeivt+axguaXtueahOaXtumXtOaIrlxyXG4gICAgICByZXF1ZXN0czogSlNPTi5zdHJpbmdpZnkoZmlyc3RBcnIpLFxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSA9IHt9O1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkYXRhLnV0ID09PSAnaDUnKSB7XHJcbiAgICAgIHRoaXMuaW1hZ2VSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicgJiYgdGhpcy5zdGF0RGF0YS5wID09PSAnYScpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICB9LCAyMDApO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICB9XHJcbiAgX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKSB7XHJcbiAgICB1bmkucmVxdWVzdCh7XHJcbiAgICAgIHVybDogU1RBVF9VUkwsXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAvLyBoZWFkZXI6IHtcclxuICAgICAgLy8gICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIC8vIOm7mOiupOWAvFxyXG4gICAgICAvLyB9LFxyXG4gICAgICBkYXRhOiBvcHRpb25zRGF0YSxcclxuICAgICAgc3VjY2VzczogKCkgPT4ge1xyXG4gICAgICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coJ3N0YXQgcmVxdWVzdCBzdWNjZXNzJyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiAoZSkgPT4ge1xyXG4gICAgICAgIGlmICgrK3RoaXMuX3JldHJ5IDwgMykge1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIGg1IOivt+axglxyXG4gICAqL1xyXG4gIGltYWdlUmVxdWVzdChkYXRhKSB7XHJcbiAgICBsZXQgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGxldCBvcHRpb25zID0gZ2V0U2dpbihHZXRFbmNvZGVVUklDb21wb25lbnRPcHRpb25zKGRhdGEpKS5vcHRpb25zO1xyXG4gICAgaW1hZ2Uuc3JjID0gU1RBVF9INV9VUkwgKyAnPycgKyBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2VuZEV2ZW50KGtleSwgdmFsdWUpIHtcclxuICAgIC8vIOagoemqjCB0eXBlIOWPguaVsFxyXG4gICAgaWYgKGNhbGlicmF0aW9uKGtleSwgdmFsdWUpKSByZXR1cm5cclxuXHJcbiAgICBpZiAoa2V5ID09PSAndGl0bGUnKSB7XHJcbiAgICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5yZXBvcnQgPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5LFxyXG4gICAgICB2YWx1ZTogdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZVxyXG4gICAgfSwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuY2xhc3MgU3RhdCBleHRlbmRzIFV0aWwge1xyXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcclxuICAgIGlmICghdGhpcy5pbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFN0YXQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xyXG4gIH1cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLmluc3RhbmNlID0gbnVsbDtcclxuICAgIC8vIOazqOWGjOaLpuaIquWZqFxyXG4gICAgaWYgKHR5cGVvZiB1bmkuYWRkSW50ZXJjZXB0b3IgPT09ICdmdW5jdGlvbicgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgdGhpcy5hZGRJbnRlcmNlcHRvckluaXQoKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRMb2dpbigpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdFNoYXJlKHRydWUpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdFJlcXVlc3RQYXltZW50KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRJbnRlcmNlcHRvckluaXQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NldE5hdmlnYXRpb25CYXJUaXRsZScsIHtcclxuICAgICAgaW52b2tlKGFyZ3MpIHtcclxuICAgICAgICBzZWxmLl9uYXZpZ2F0aW9uQmFyVGl0bGUucGFnZSA9IGFyZ3MudGl0bGU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0TG9naW4oKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ2xvZ2luJywge1xyXG4gICAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICBzZWxmLl9sb2dpbigpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdFNoYXJlKHR5cGUpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIGlmICghdHlwZSkge1xyXG4gICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignc2hhcmUnLCB7XHJcbiAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbCgpIHtcclxuICAgICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdFJlcXVlc3RQYXltZW50KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdyZXF1ZXN0UGF5bWVudCcsIHtcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICBzZWxmLl9wYXltZW50KCdwYXlfc3VjY2VzcycpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKCkge1xyXG4gICAgICAgIHNlbGYuX3BheW1lbnQoJ3BheV9mYWlsJyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVwb3J0KG9wdGlvbnMsIHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgIC8vICAgY29uc29sZS5sb2coJ3JlcG9ydCBpbml0Jyk7XHJcbiAgICAvLyB9XHJcbiAgICBzZXRQYWdlUmVzaWRlbmNlVGltZSgpO1xyXG4gICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IHRydWU7XHJcbiAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIGxvYWQob3B0aW9ucywgc2VsZikge1xyXG4gICAgaWYgKCFzZWxmLiRzY29wZSAmJiAhc2VsZi4kbXApIHtcclxuICAgICAgY29uc3QgcGFnZSA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgICBzZWxmLiRzY29wZSA9IHBhZ2VbcGFnZS5sZW5ndGggLSAxXTtcclxuICAgIH1cclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICB0aGlzLl9xdWVyeSA9IG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBzaG93KHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAgIHRoaXMuX3BhZ2VTaG93KHNlbGYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25TaG93KHNlbGYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVhZHkoc2VsZikge1xyXG4gICAgLy8gdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIC8vIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgIC8vICAgdGhpcy5fcGFnZVNob3coc2VsZik7XHJcbiAgICAvLyB9XHJcbiAgfVxyXG4gIGhpZGUoc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgICAgdGhpcy5fcGFnZUhpZGUoc2VsZik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvbkhpZGUoc2VsZiwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGVycm9yKGVtKSB7XHJcbiAgICBpZiAodGhpcy5fcGxhdGZvcm0gPT09ICdkZXZ0b29scycpIHtcclxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCflvZPliY3ov5DooYznjq/looPkuLrlvIDlj5HogIXlt6XlhbfvvIzkuI3kuIrmiqXmlbDmja7jgIInKTtcclxuICAgICAgfVxyXG4gICAgICAvLyByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgZW1WYWwgPSAnJztcclxuICAgIGlmICghZW0ubWVzc2FnZSkge1xyXG4gICAgICBlbVZhbCA9IEpTT04uc3RyaW5naWZ5KGVtKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGVtVmFsID0gZW0uc3RhY2s7XHJcbiAgICB9XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICczMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgbXBzZGs6IHRoaXMuc3RhdERhdGEubXBzZGssXHJcbiAgICAgIG1wdjogdGhpcy5zdGF0RGF0YS5tcHYsXHJcbiAgICAgIHY6IHRoaXMuc3RhdERhdGEudixcclxuICAgICAgZW06IGVtVmFsLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHN0YXQgPSBTdGF0LmdldEluc3RhbmNlKCk7XHJcbmxldCBpc0hpZGUgPSBmYWxzZTtcclxuY29uc3QgbGlmZWN5Y2xlID0ge1xyXG4gIG9uTGF1bmNoKG9wdGlvbnMpIHtcclxuICAgIHN0YXQucmVwb3J0KG9wdGlvbnMsIHRoaXMpO1xyXG4gIH0sXHJcbiAgb25SZWFkeSgpIHtcclxuICAgIHN0YXQucmVhZHkodGhpcyk7XHJcbiAgfSxcclxuICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgc3RhdC5sb2FkKG9wdGlvbnMsIHRoaXMpO1xyXG4gICAgLy8g6YeN5YaZ5YiG5Lqr77yM6I635Y+W5YiG5Lqr5LiK5oql5LqL5Lu2XHJcbiAgICBpZiAodGhpcy4kc2NvcGUgJiYgdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2UpIHtcclxuICAgICAgbGV0IG9sZFNoYXJlQXBwTWVzc2FnZSA9IHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlO1xyXG4gICAgICB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcclxuICAgICAgICBzdGF0LmludGVyY2VwdFNoYXJlKGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gb2xkU2hhcmVBcHBNZXNzYWdlLmNhbGwodGhpcywgb3B0aW9ucylcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9LFxyXG4gIG9uU2hvdygpIHtcclxuICAgIGlzSGlkZSA9IGZhbHNlO1xyXG4gICAgc3RhdC5zaG93KHRoaXMpO1xyXG4gIH0sXHJcbiAgb25IaWRlKCkge1xyXG4gICAgaXNIaWRlID0gdHJ1ZTtcclxuICAgIHN0YXQuaGlkZSh0aGlzKTtcclxuICB9LFxyXG4gIG9uVW5sb2FkKCkge1xyXG4gICAgaWYgKGlzSGlkZSkge1xyXG4gICAgICBpc0hpZGUgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBzdGF0LmhpZGUodGhpcyk7XHJcbiAgfSxcclxuICBvbkVycm9yKGUpIHtcclxuICAgIHN0YXQuZXJyb3IoZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZnVuY3Rpb24gbWFpbigpIHtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgIHVuaS5yZXBvcnQgPSBmdW5jdGlvbih0eXBlLCBvcHRpb25zKSB7fTtcclxuICB9ZWxzZXtcclxuICAgIGNvbnN0IFZ1ZSA9IHJlcXVpcmUoJ3Z1ZScpO1xyXG4gICAgKFZ1ZS5kZWZhdWx0IHx8IFZ1ZSkubWl4aW4obGlmZWN5Y2xlKTtcclxuICAgIHVuaS5yZXBvcnQgPSBmdW5jdGlvbih0eXBlLCBvcHRpb25zKSB7XHJcbiAgICAgIHN0YXQuc2VuZEV2ZW50KHR5cGUsIG9wdGlvbnMpO1xyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXHJcbm1haW4oKTtcclxuIiwiZnVuY3Rpb24gaW5pdFVuaSgpIHtcclxuXHJcbiAgICB2YXIgaXNGbiA9IGZ1bmN0aW9uIGlzRm4odikge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ2Z1bmN0aW9uJztcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGhhbmRsZVByb21pc2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9taXNlKHByb21pc2UpIHtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtudWxsLCBkYXRhXTtcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtlcnJdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgUkVHRVggPSAvXlxcJHxeb258XmNyZWF0ZXxTeW5jJHxNYW5hZ2VyJHxecGF1c2UvO1xyXG4gICAgdmFyIEFQSV9OT1JNQUxfTElTVCA9IFsnb3MnLCAnZ2V0Q3VycmVudFN1Yk5WdWUnLCAnZ2V0U3ViTlZ1ZUJ5SWQnLCAnc3RvcFJlY29yZCcsICdzdG9wVm9pY2UnLFxyXG4gICAgICAgICdzdG9wQmFja2dyb3VuZEF1ZGlvJywgJ3N0b3BQdWxsRG93blJlZnJlc2gnLCAnaGlkZUtleWJvYXJkJywgJ2hpZGVUb2FzdCcsICdoaWRlTG9hZGluZycsXHJcbiAgICAgICAgJ3Nob3dOYXZpZ2F0aW9uQmFyTG9hZGluZycsICdoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcnLCAnY2FuSVVzZScsICduYXZpZ2F0ZUJhY2snLCAnY2xvc2VTb2NrZXQnLFxyXG4gICAgICAgICdwYWdlU2Nyb2xsVG8nLCAnZHJhd0NhbnZhcydcclxuICAgIF07XHJcblxyXG4gICAgdmFyIHNob3VsZFByb21pc2UgPSBmdW5jdGlvbiBzaG91bGRQcm9taXNlKG5hbWUpIHtcclxuICAgICAgICBpZiAoUkVHRVgudGVzdChuYW1lKSAmJiBuYW1lICE9PSAnY3JlYXRlQkxFQ29ubmVjdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAofkFQSV9OT1JNQUxfTElTVC5pbmRleE9mKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBwcm9taXNpZnkgPSBmdW5jdGlvbiBwcm9taXNpZnkoYXBpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzRm4ob3B0aW9ucy5zdWNjZXNzKSB8fCBpc0ZuKG9wdGlvbnMuZmFpbCkgfHwgaXNGbihvcHRpb25zLmNvbXBsZXRlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaS5hcHBseSh1bmRlZmluZWQsIFtvcHRpb25zXS5jb25jYXQocGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVByb21pc2UobmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBhcGkuYXBwbHkodW5kZWZpbmVkLCBbT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogcmVqZWN0XHJcbiAgICAgICAgICAgICAgICB9KV0uY29uY2F0KHBhcmFtcykpO1xyXG4gICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tZXh0ZW5kLW5hdGl2ZSAqL1xyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVhc29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25NZXNzYWdlQ2FsbGJhY2tzID0gW107XHJcblxyXG4gICAgdmFyIG9yaWdpbiA9IHZvaWQgMDtcclxuXHJcbiAgICBmdW5jdGlvbiBvblN1Yk5WdWVNZXNzYWdlKGRhdGEpIHtcclxuICAgICAgICBvbk1lc3NhZ2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luOiBvcmlnaW4sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB3ZWJ2aWV3SWQgPSB3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQ7XHJcblxyXG4gICAgdmFyIGNoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbCgnVU5JLUFQUC1TVUJOVlVFJyk7XHJcbiAgICBjaGFubmVsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEudG8gPT09IHdlYnZpZXdJZCkge1xyXG4gICAgICAgICAgICBvblN1Yk5WdWVNZXNzYWdlKGV2ZW50LmRhdGEuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiB3cmFwcGVyKHdlYnZpZXcpIHtcclxuICAgICAgICB3ZWJ2aWV3LiRwcm9jZXNzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB2YXIgY3VycmVudFdlYnZpZXdJZCA9IHdlZXhQbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKS5pZDtcclxuICAgICAgICB2YXIgaXNQb3B1cE5WdWUgPSBjdXJyZW50V2Vidmlld0lkID09PSB3ZWJ2aWV3LmlkO1xyXG5cclxuICAgICAgICB2YXIgaG9zdE5WdWVJZCA9IHdlYnZpZXcuX191bmlhcHBfb3JpZ2luX3R5cGUgPT09ICd1bmlOVmlldycgJiYgd2Vidmlldy5fX3VuaWFwcF9vcmlnaW5faWQ7XHJcbiAgICAgICAgdmFyIHBvcHVwTlZ1ZUlkID0gd2Vidmlldy5pZDtcclxuXHJcbiAgICAgICAgd2Vidmlldy5wb3N0TWVzc2FnZSA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGhvc3ROVnVlSWQpIHtcclxuICAgICAgICAgICAgICAgIGNoYW5uZWwucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IGlzUG9wdXBOVnVlID8gaG9zdE5WdWVJZCA6IHBvcHVwTlZ1ZUlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnVW5pQXBwU3ViTlZ1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcub25NZXNzYWdlID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgb25NZXNzYWdlQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghd2Vidmlldy5fX3VuaWFwcF9tYXNrX2lkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3JpZ2luID0gd2Vidmlldy5fX3VuaWFwcF9ob3N0O1xyXG5cclxuICAgICAgICB2YXIgbWFza0NvbG9yID0gd2Vidmlldy5fX3VuaWFwcF9tYXNrO1xyXG5cclxuICAgICAgICB2YXIgbWFza1dlYnZpZXcgPSB3ZWV4UGx1cy53ZWJ2aWV3LmdldFdlYnZpZXdCeUlkKHdlYnZpZXcuX191bmlhcHBfbWFza19pZCk7XHJcbiAgICAgICAgbWFza1dlYnZpZXcgPSBtYXNrV2Vidmlldy5wYXJlbnQoKSB8fCBtYXNrV2VidmlldzsvL+WGjeasoeajgOa1i+eItlxyXG4gICAgICAgIHZhciBvbGRTaG93ID0gd2Vidmlldy5zaG93O1xyXG4gICAgICAgIHZhciBvbGRIaWRlID0gd2Vidmlldy5oaWRlO1xyXG4gICAgICAgIHZhciBvbGRDbG9zZSA9IHdlYnZpZXcuY2xvc2U7XHJcblxyXG4gICAgICAgIHZhciBzaG93TWFzayA9IGZ1bmN0aW9uIHNob3dNYXNrKCkge1xyXG4gICAgICAgICAgICBtYXNrV2Vidmlldy5zZXRTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBtYXNrQ29sb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgY2xvc2VNYXNrID0gZnVuY3Rpb24gY2xvc2VNYXNrKCkge1xyXG4gICAgICAgICAgICBtYXNrV2Vidmlldy5zZXRTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LnNob3cgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2hvd01hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkU2hvdy5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuaGlkZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZU1hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRIaWRlLmFwcGx5KHdlYnZpZXcsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5jbG9zZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZU1hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRDbG9zZS5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN1Yk5WdWVCeUlkKGlkKSB7XHJcbiAgICAgICAgdmFyIHdlYnZpZXcgPSB3ZWV4UGx1cy53ZWJ2aWV3LmdldFdlYnZpZXdCeUlkKGlkKTtcclxuICAgICAgICBpZiAod2VidmlldyAmJiAhd2Vidmlldy4kcHJvY2Vzc2VkKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIod2Vidmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3ZWJ2aWV3O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRTdWJOVnVlKCkge1xyXG4gICAgICAgIHJldHVybiBnZXRTdWJOVnVlQnlJZCh3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwbHVzID0gd2VleC5yZXF1aXJlTW9kdWxlKCdwbHVzJyk7XHJcbiAgICB2YXIgZ2xvYmFsRXZlbnQgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2dsb2JhbEV2ZW50Jyk7XHJcblxyXG4gICAgdmFyIGlkID0gMDtcclxuICAgIHZhciBjYWxsYmFja3MgPSB7fTtcclxuXHJcbiAgICB2YXIgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCA9ICdfX3VuaWFwcF9fc2VydmljZSc7XHJcblxyXG4gICAgZ2xvYmFsRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcigncGx1c01lc3NhZ2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwSnNBcGknKSB7XHJcbiAgICAgICAgICAgIGludm9rZShlLmRhdGEuaWQsIGUuZGF0YS5kYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwU3ViTlZ1ZScpIHtcclxuICAgICAgICAgICAgb25TdWJOVnVlTWVzc2FnZShlLmRhdGEuZGF0YSwgZS5kYXRhLm9wdGlvbnMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBjcmVhdGVDYWxsYmFjayA9IGZ1bmN0aW9uIGNyZWF0ZUNhbGxiYWNrKGFyZ3MsIHR5cGUpIHtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjayhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKGlzRm4oYXJncykpIHtcclxuICAgICAgICAgICAgICAgIGFyZ3MocmVzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAofnJlcy5lcnJNc2cuaW5kZXhPZignOm9rJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGFyZ3Muc3VjY2VzcykgJiYgYXJncy5zdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKH5yZXMuZXJyTXNnLmluZGV4T2YoJzpmYWlsJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGFyZ3MuZmFpbCkgJiYgYXJncy5mYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGFyZ3MuY29tcGxldGUpICYmIGFyZ3MuY29tcGxldGUocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGlzRm4oYXJncykgfHwgYXJncyAmJiBpc0ZuKGFyZ3MuY2FsbGJhY2spKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmtlZXBBbGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYWxsYmFjaztcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGludm9rZSA9IGZ1bmN0aW9uIGludm9rZShjYWxsYmFja0lkLCBkYXRhKSB7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzW2NhbGxiYWNrSWRdO1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgaWYgKCFjYWxsYmFjay5rZWVwQWxpdmUpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWxsYmFja3NbY2FsbGJhY2tJZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdjYWxsYmFja1snICsgY2FsbGJhY2tJZCArICddIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHB1Ymxpc2ggPSBmdW5jdGlvbiBwdWJsaXNoKF9yZWYpIHtcclxuICAgICAgICB2YXIgaWQgPSBfcmVmLmlkLFxyXG4gICAgICAgICAgICB0eXBlID0gX3JlZi50eXBlLFxyXG4gICAgICAgICAgICBwYXJhbXMgPSBfcmVmLnBhcmFtcztcclxuXHJcbiAgICAgICAgY2FsbGJhY2tzW2lkXSA9IGNyZWF0ZUNhbGxiYWNrKHBhcmFtcywgdHlwZSk7XHJcbiAgICAgICAgcGx1cy5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgICAgICB9LCBVTklBUFBfU0VSVklDRV9OVlVFX0lEKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdE1lc3NhZ2UoZGF0YSkge1xyXG4gICAgICAgIHBsdXMucG9zdE1lc3NhZ2UoZGF0YSwgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNyZWF0ZVB1Ymxpc2ggPSBmdW5jdGlvbiBjcmVhdGVQdWJsaXNoKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICBwdWJsaXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZCsrLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIHBhcmFtczogYXJnc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXF1aXJlTmF0aXZlUGx1Z2luKHBsdWdpbk5hbWUpIHtcclxuICAgICAgICByZXR1cm4gd2VleC5yZXF1aXJlTW9kdWxlKHBsdWdpbk5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkb20gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRGb250RmFjZShfcmVmKSB7XHJcbiAgICAgICAgdmFyIGZhbWlseSA9IF9yZWYuZmFtaWx5LFxyXG4gICAgICAgICAgICBzb3VyY2UgPSBfcmVmLnNvdXJjZSxcclxuICAgICAgICAgICAgZGVzYyA9IF9yZWYuZGVzYyxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBkb20uYWRkUnVsZSgnZm9udEZhY2UnLCB7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IGZhbWlseSxcclxuICAgICAgICAgICAgc3JjOiBzb3VyY2UucmVwbGFjZSgvXCIvZywgJ1xcJycpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgZXJyTXNnOiAnbG9hZEZvbnRGYWNlOm9rJyxcclxuICAgICAgICAgICAgc3RhdHVzOiAnbG9hZGVkJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ2xvYmFsRXZlbnQkMSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZ2xvYmFsRXZlbnQnKTtcclxuXHJcbiAgICB2YXIgY2FsbGJhY2tzJDEgPSBbXTtcclxuXHJcbiAgICBnbG9iYWxFdmVudCQxLmFkZEV2ZW50TGlzdGVuZXIoJ3BsdXNNZXNzYWdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcFJlYWR5Jykge1xyXG4gICAgICAgICAgICByZWFkeS5pc1VuaUFwcFJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrcyQxLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVhZHkoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVW5pQXBwUmVhZHkpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMS5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XHJcbiAgICB9IDogZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID9cclxuICAgICAgICAgICAgXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzdHJlYW0gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3N0cmVhbScpO1xyXG5cclxuICAgIC8vIGxldCByZXF1ZXN0VGFza0lkID0gMFxyXG5cclxuICAgIHZhciBNRVRIT0RfR0VUID0gJ0dFVCc7XHJcbiAgICB2YXIgTUVUSE9EX1BPU1QgPSAnUE9TVCc7XHJcbiAgICB2YXIgQ09OVEVOVF9UWVBFX0pTT04gPSAnYXBwbGljYXRpb24vanNvbic7XHJcbiAgICB2YXIgQ09OVEVOVF9UWVBFX0ZPUk0gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcclxuXHJcbiAgICB2YXIgc2VyaWFsaXplID0gZnVuY3Rpb24gc2VyaWFsaXplKGRhdGEpIHtcclxuICAgICAgICB2YXIgbWV0aG9kID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBNRVRIT0RfR0VUO1xyXG4gICAgICAgIHZhciBjb250ZW50VHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogQ09OVEVOVF9UWVBFX0ZPUk07XHJcblxyXG4gICAgICAgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgaWYgKG1ldGhvZC50b1VwcGVyQ2FzZSgpID09PSBNRVRIT0RfUE9TVCAmJiBjb250ZW50VHlwZS50b0xvd2VyQ2FzZSgpID09PSBDT05URU5UX1RZUEVfSlNPTikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKTtcclxuICAgICAgICAgICAgICAgIH0pLmpvaW4oJyYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcmVxdWVzdChfcmVmKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IF9yZWYudXJsLFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXIgPSBfcmVmLmhlYWRlcixcclxuICAgICAgICAgICAgX3JlZiRtZXRob2QgPSBfcmVmLm1ldGhvZCxcclxuICAgICAgICAgICAgbWV0aG9kID0gX3JlZiRtZXRob2QgPT09IHVuZGVmaW5lZCA/ICdHRVQnIDogX3JlZiRtZXRob2QsXHJcbiAgICAgICAgICAgIF9yZWYkZGF0YVR5cGUgPSBfcmVmLmRhdGFUeXBlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZSA9IF9yZWYkZGF0YVR5cGUgPT09IHVuZGVmaW5lZCA/ICdqc29uJyA6IF9yZWYkZGF0YVR5cGUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZSA9IF9yZWYucmVzcG9uc2VUeXBlLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIC8vIHJlcXVlc3RUYXNrSWQrK1xyXG4gICAgICAgIHZhciBhYm9ydGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciBoYXNDb250ZW50VHlwZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0ge307XHJcbiAgICAgICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIGhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNDb250ZW50VHlwZSAmJiBuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzQ29udGVudFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gaGVhZGVyW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW25hbWVdID0gaGVhZGVyW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXRob2QgPT09IE1FVEhPRF9HRVQgJiYgZGF0YSkge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAofnVybC5pbmRleE9mKCc/JykgPyB1cmwuc3Vic3RyKC0xKSA9PT0gJyYnIHx8IHVybC5zdWJzdHIoLTEpID09PSAnPycgPyAnJyA6ICcmJyA6ICc/JykgK1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHJlYW0uZmV0Y2goe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgIHR5cGU6IGRhdGFUeXBlID09PSAnanNvbicgPyAnanNvbicgOiAndGV4dCcsXHJcbiAgICAgICAgICAgIGJvZHk6IG1ldGhvZCAhPT0gTUVUSE9EX0dFVCA/IHNlcmlhbGl6ZShkYXRhLCBtZXRob2QsIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSA6ICcnXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oX3JlZjIpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IF9yZWYyLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgIG9rID0gX3JlZjIub2ssXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0ID0gX3JlZjIuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBfcmVmMi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVycyA9IF9yZWYyLmhlYWRlcnM7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmV0ID0ge307XHJcbiAgICAgICAgICAgIGlmICghc3RhdHVzIHx8IHN0YXR1cyA9PT0gLTEgfHwgYWJvcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdyZXF1ZXN0OmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICByZXQuc3RhdHVzQ29kZSA9IHN0YXR1cztcclxuICAgICAgICAgICAgICAgIHJldC5oZWFkZXIgPSBoZWFkZXJzO1xyXG4gICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmV0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gYWJvcnQoKSB7XHJcbiAgICAgICAgICAgICAgICBhYm9ydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHN0b3JhZ2UgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3BsdXNzdG9yYWdlJyk7XHJcbiAgICB2YXIgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFID0gJ19fVFlQRSc7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3RvcmFnZShfcmVmKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UuZ2V0SXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUsIGZ1bmN0aW9uKHJldCkge1xyXG4gICAgICAgICAgICBpZiAocmV0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YVR5cGUgPSByZXQuZGF0YTtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UuZ2V0SXRlbShrZXksIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgJiYgcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgIT09ICdTdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdnZXRTdG9yYWdlOm9rJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRTdG9yYWdlKF9yZWYyKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYyLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYyLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjIuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgdmFyIGRhdGFUeXBlID0gJ1N0cmluZyc7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGF0YSkpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBkYXRhVHlwZSA9ICdPYmplY3QnO1xyXG4gICAgICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEsIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFLCBkYXRhVHlwZSwgZnVuY3Rpb24ocmV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAnc2V0U3RvcmFnZTpvaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3RvcmFnZShfcmVmMykge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmMy5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmMy5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjMuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYzLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjMuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShrZXksIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ3JlbW92ZVN0b3JhZ2U6b2snXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAncmVtb3ZlU3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJTdG9yYWdlKF9yZWY0KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWY0LmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWY0LmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmNC5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjQuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmNC5jb21wbGV0ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2xpcGJvYXJkID0gd2VleC5yZXF1aXJlTW9kdWxlKCdjbGlwYm9hcmQnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDbGlwYm9hcmREYXRhKF9yZWYpIHtcclxuICAgICAgICB2YXIgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBjbGlwYm9hcmQuZ2V0U3RyaW5nKGZ1bmN0aW9uKF9yZWYyKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gX3JlZjIuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6ICdnZXRDbGlwYm9hcmREYXRhOm9rJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q2xpcGJvYXJkRGF0YShfcmVmMykge1xyXG4gICAgICAgIHZhciBkYXRhID0gX3JlZjMuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYzLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMy5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYzLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICBlcnJNc2c6ICdzZXRDbGlwYm9hcmREYXRhOm9rJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2xpcGJvYXJkLnNldFN0cmluZyhkYXRhKTtcclxuICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcclxuICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBnZXRFbWl0dGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBnZXRVbmlFbWl0dGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbiAgICAgICAgICAgIHJldHVybiBnZXRVbmlFbWl0dGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgRW1pdHRlciA9IHtcclxuICAgICAgICAgICAgJG9uOiBmdW5jdGlvbiAkb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb24gZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRvZmY6IGZ1bmN0aW9uICRvZmYoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb2ZmIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkb25jZTogZnVuY3Rpb24gJG9uY2UoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb25jZSBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJGVtaXQ6IGZ1bmN0aW9uICRlbWl0KCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJGVtaXQgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBnZXRVbmlFbWl0dGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gRW1pdHRlcjtcclxuICAgICAgICB9O1xyXG4gICAgfSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFwcGx5KGN0eCwgbWV0aG9kLCBhcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIGN0eFttZXRob2RdLmFwcGx5KGN0eCwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJG9uKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb24nLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvZmYoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvZmYnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb25jZScsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJGVtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRlbWl0JywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHZhciBhcGkgPSAvKiNfX1BVUkVfXyovIE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgIGxvYWRGb250RmFjZTogbG9hZEZvbnRGYWNlLFxyXG4gICAgICAgIHJlYWR5OiByZWFkeSxcclxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgIGdldFN0b3JhZ2U6IGdldFN0b3JhZ2UsXHJcbiAgICAgICAgc2V0U3RvcmFnZTogc2V0U3RvcmFnZSxcclxuICAgICAgICByZW1vdmVTdG9yYWdlOiByZW1vdmVTdG9yYWdlLFxyXG4gICAgICAgIGNsZWFyU3RvcmFnZTogY2xlYXJTdG9yYWdlLFxyXG4gICAgICAgIGdldENsaXBib2FyZERhdGE6IGdldENsaXBib2FyZERhdGEsXHJcbiAgICAgICAgc2V0Q2xpcGJvYXJkRGF0YTogc2V0Q2xpcGJvYXJkRGF0YSxcclxuICAgICAgICBvblN1Yk5WdWVNZXNzYWdlOiBvblN1Yk5WdWVNZXNzYWdlLFxyXG4gICAgICAgIGdldFN1Yk5WdWVCeUlkOiBnZXRTdWJOVnVlQnlJZCxcclxuICAgICAgICBnZXRDdXJyZW50U3ViTlZ1ZTogZ2V0Q3VycmVudFN1Yk5WdWUsXHJcbiAgICAgICAgJG9uOiAkb24sXHJcbiAgICAgICAgJG9mZjogJG9mZixcclxuICAgICAgICAkb25jZTogJG9uY2UsXHJcbiAgICAgICAgJGVtaXQ6ICRlbWl0XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIHd4ID0ge1xyXG4gICAgICAgIHVwbG9hZEZpbGU6IHRydWUsXHJcbiAgICAgICAgZG93bmxvYWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIGNob29zZUltYWdlOiB0cnVlLFxyXG4gICAgICAgIHByZXZpZXdJbWFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRJbWFnZUluZm86IHRydWUsXHJcbiAgICAgICAgc2F2ZUltYWdlVG9QaG90b3NBbGJ1bTogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VWaWRlbzogdHJ1ZSxcclxuICAgICAgICBzYXZlVmlkZW9Ub1Bob3Rvc0FsYnVtOiB0cnVlLFxyXG4gICAgICAgIHNhdmVGaWxlOiB0cnVlLFxyXG4gICAgICAgIGdldFNhdmVkRmlsZUxpc3Q6IHRydWUsXHJcbiAgICAgICAgZ2V0U2F2ZWRGaWxlSW5mbzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVTYXZlZEZpbGU6IHRydWUsXHJcbiAgICAgICAgb3BlbkRvY3VtZW50OiB0cnVlLFxyXG4gICAgICAgIHNldFN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0U3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRTdG9yYWdlSW5mbzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGNsZWFyU3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRMb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VMb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBvcGVuTG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgZ2V0U3lzdGVtSW5mbzogdHJ1ZSxcclxuICAgICAgICBnZXROZXR3b3JrVHlwZTogdHJ1ZSxcclxuICAgICAgICBtYWtlUGhvbmVDYWxsOiB0cnVlLFxyXG4gICAgICAgIHNjYW5Db2RlOiB0cnVlLFxyXG4gICAgICAgIHNldFNjcmVlbkJyaWdodG5lc3M6IHRydWUsXHJcbiAgICAgICAgZ2V0U2NyZWVuQnJpZ2h0bmVzczogdHJ1ZSxcclxuICAgICAgICBzZXRLZWVwU2NyZWVuT246IHRydWUsXHJcbiAgICAgICAgdmlicmF0ZUxvbmc6IHRydWUsXHJcbiAgICAgICAgdmlicmF0ZVNob3J0OiB0cnVlLFxyXG4gICAgICAgIGFkZFBob25lQ29udGFjdDogdHJ1ZSxcclxuICAgICAgICBzaG93VG9hc3Q6IHRydWUsXHJcbiAgICAgICAgc2hvd0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgaGlkZVRvYXN0OiB0cnVlLFxyXG4gICAgICAgIGhpZGVMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIHNob3dNb2RhbDogdHJ1ZSxcclxuICAgICAgICBzaG93QWN0aW9uU2hlZXQ6IHRydWUsXHJcbiAgICAgICAgc2V0TmF2aWdhdGlvbkJhclRpdGxlOiB0cnVlLFxyXG4gICAgICAgIHNldE5hdmlnYXRpb25CYXJDb2xvcjogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0ZVRvOiB0cnVlLFxyXG4gICAgICAgIHJlZGlyZWN0VG86IHRydWUsXHJcbiAgICAgICAgcmVMYXVuY2g6IHRydWUsXHJcbiAgICAgICAgc3dpdGNoVGFiOiB0cnVlLFxyXG4gICAgICAgIG5hdmlnYXRlQmFjazogdHJ1ZSxcclxuICAgICAgICBnZXRQcm92aWRlcjogdHJ1ZSxcclxuICAgICAgICBsb2dpbjogdHJ1ZSxcclxuICAgICAgICBnZXRVc2VySW5mbzogdHJ1ZSxcclxuICAgICAgICBzaGFyZTogdHJ1ZSxcclxuICAgICAgICByZXF1ZXN0UGF5bWVudDogdHJ1ZSxcclxuICAgICAgICBzdWJzY3JpYmVQdXNoOiB0cnVlLFxyXG4gICAgICAgIHVuc3Vic2NyaWJlUHVzaDogdHJ1ZSxcclxuICAgICAgICBvblB1c2g6IHRydWUsXHJcbiAgICAgICAgb2ZmUHVzaDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFzZVVuaSA9IHtcclxuICAgICAgICBvczoge1xyXG4gICAgICAgICAgICBudnVlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdW5pID0ge307XHJcblxyXG4gICAgaWYgKHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB1bmkgPSBuZXcgUHJveHkoe30sIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQodGFyZ2V0LCBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29zJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG52dWU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdwb3N0TWVzc2FnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3JlcXVpcmVOYXRpdmVQbHVnaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmVOYXRpdmVQbHVnaW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBtZXRob2QgPSBhcGlbbmFtZV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9IGNyZWF0ZVB1Ymxpc2gobmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkUHJvbWlzZShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNpZnkobWV0aG9kKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXRob2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoYmFzZVVuaSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgdW5pW2tleV0gPSBiYXNlVW5pW2tleV07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHVuaS5wb3N0TWVzc2FnZSA9IHBvc3RNZXNzYWdlO1xyXG5cclxuICAgICAgICB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbiA9IHJlcXVpcmVOYXRpdmVQbHVnaW47XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJCdXR0b25UYXAgPSBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXA7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQ7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkO1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyh3eCkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBhcGlbbmFtZV07XHJcbiAgICAgICAgICAgIGlmICghbWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2QgPSBjcmVhdGVQdWJsaXNoKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRQcm9taXNlKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobWV0aG9kKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVuaVtuYW1lXSA9IG1ldGhvZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuaTtcclxufVxyXG5cclxudmFyIGNyZWF0ZVVuaTtcclxuXHJcbmlmICh0eXBlb2YgZ2V0VW5pID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBjcmVhdGVVbmkgPSBnZXRVbmk7XHJcbn0gZWxzZSB7XHJcbiAgICBjcmVhdGVVbmkgPSBpbml0VW5pO1xyXG59XHJcbnZhciB3ZWV4UGx1cyA9IG5ldyBXZWV4UGx1cyh3ZWV4KTtcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVW5pKHdlZXgsIHdlZXhQbHVzLCBCcm9hZGNhc3RDaGFubmVsKTtcclxuZXhwb3J0IHtcclxuICAgIHdlZXhQbHVzXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcInBhZ2VzXCI6e30sXCJnbG9iYWxTdHlsZVwiOnt9fSIsImV4cG9ydCBkZWZhdWx0IHtcImFwcGlkXCI6XCJfX1VOSV9fQjdENTFFOFwifSIsIlZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyA9IHt9XG5WdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKS5kZWZhdWx0LFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXylcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIS4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTMhLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0yIS4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMyEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiY3VJY29uZm9udC1zcGluXCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvblwiOiBcImN1SWNvbi1zcGluIDJzIGluZmluaXRlIGxpbmVhclwiLFxuICAgIFwiYW5pbWF0aW9uXCI6IFwiY3VJY29uLXNwaW4gMnMgaW5maW5pdGUgbGluZWFyXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJcbiAgfSxcbiAgXCJjdUljb25mb250LXB1bHNlXCI6IHtcbiAgICBcIldlYmtpdEFuaW1hdGlvblwiOiBcImN1SWNvbi1zcGluIDFzIGluZmluaXRlIHN0ZXBzKDgpXCIsXG4gICAgXCJhbmltYXRpb25cIjogXCJjdUljb24tc3BpbiAxcyBpbmZpbml0ZSBzdGVwcyg4KVwiLFxuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiXG4gIH0sXG4gIFwiQEZPTlQtRkFDRVwiOiBbXG4gICAge1xuICAgICAgXCJmb250RmFtaWx5XCI6IFwiY3VJY29uXCIsXG4gICAgICBcInNyY1wiOiBcInVybCgnLy9hdC5hbGljZG4uY29tL3QvZm9udF81MzM1NjZfeWZxMmQ5d2Rpai5lb3Q/dD0xNTQ1MjM5OTg1ODMxI2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLFxcclxcblxcdFxcdFxcclxcblxcdFxcdHVybCgnZGF0YTphcHBsaWNhdGlvbi94LWZvbnQtd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxkMDlHUmdBQkFBQUFBS1FjQUFzQUFBQUJOS0FBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkhVMVZDQUFBQkNBQUFBRE1BQUFCQ3NQNno3VTlUTHpJQUFBRThBQUFBUkFBQUFGWThka29pWTIxaGNBQUFBWUFBQUFpYUFBQVRraWxaUHE5bmJIbG1BQUFLSEFBQWpxb0FBUWtVT2pZbENtaGxZV1FBQUpqSUFBQUFMd0FBQURZVU1vRmdhR2hsWVFBQW1QZ0FBQUFmQUFBQUpBaHdCY3BvYlhSNEFBQ1pHQUFBQUJrQUFBU2NuU0lBQUd4dlkyRUFBSmswQUFBQ1VBQUFBbEFoWDJDK2JXRjRjQUFBbTRRQUFBQWZBQUFBSUFKQUFPcHVZVzFsQUFDYnBBQUFBVVVBQUFKdFBsVCtmWEJ2YzNRQUFKenNBQUFITFFBQURNWWk4S1hKZUp4allHUmdZT0Jpa0dQUVlXQjBjZk1KWWVCZ1lHR0FBSkFNWTA1bWVpSlFETW9EeXJHQWFRNGdab09JQWdDS0l3TlBBSGljWTJCa1lXU2N3TURLd01IVXlYU0dnWUdoSDBJenZtWXdZdVJnWUdCaVlHVm13QW9DMGx4VEdCeWVNYnpRWjI3NDM4QVF3OXpBMEFBVVpnVEpBUURoSFF3VmVKek4xL25mMW1NYXh2SFA5WlFpU1VLV2JDWFoxK3c3UTBOcUltTkpoU1NTWlN5VGxNUVlzOWhsTEdQS01vUkJNeVUxdGxJaUlyS1VmZXljWnlPcGtDVkxjMXpQWWJ6OEJ6UGRyN2ZiOC95UTIvMjl6dU02VG1BNW9JbHNJVTMxNDYwVTZyK08xbTlMNCsrYjBLTHg5MDJibnE2ZkwrSUNtdEUwR3FKbHRJbDIwVEU2UjVmb0hqM2ptRGd0em9vaE1TeUd4NGk0TUM2S1MrTHF1RDV1aUZ2aXpoZ2I0Mk5DVEl3cE1TMW14T3g0SXlKTHRzaU5jOHZjTjd2bm9ka3IrMmEvSEpDRDhvSzhNa2ZtZFRrNmI4b3hlVWVPelVrNU0xL0l1VGsvRitUaS9DcVh6dHQ2MlRJSWZ2SXA5b3NEbzBjY0h2M2lqQmdjUTMvOEZCZkhWWTJmWWxUY0Z2ZkV1TVpQY1g5TWplbnhWTHdZYjhaSDJTUmI1YWE1VFhiTkhubFk5czVqczM4T3pNRjVxVDdGTlRucWgwOXhWNDdMeVRrcjV6Uitpb1c1NUwrZjRuLytwK2lwL1BFbnI4dTRocjh3bGlkNG10azgvK1ByUlY1dWZMM0RQRDdpNDhiWFZ5d3RsQlpsbmJKVjZWTUdsZEZsVEpsWlpwZVh5MXZsdmZKQm1WYytibWhvYUtGWHE0YldQN3phTm5SbzJMV2hTOE1CamE5dURUMGJldXBEdEMrZFNzZXlIcE5LQithVlZmV3BHblIybXVxRU5hTjUyWkRsV1VFbmFVVmFzaEt0V0puV3JFSWJWbVUxVnFjdGE3QW1hN0UyN1ZpSGRWbVA5ZG1BOW5SZ1F6cXlFWjNZbUUzWWxNMzRsczExSnJka0s3Wm1HN1psdTdJYW5kbWVIZGlSbmRpWlhkaVYzZGlkUGRpemJGRGFzaGQ3c3cvNzhqUDJZMys2OEhNTzRFQzZjaERkNk00djZNSEJIRUpQRHVXWEhNYmhITUdSOU9Jb2V0T0h2aHpOTVJ4TFA0NmpQOGN6Z0JNNGtZR2N4TjhZeE1tY3dxbWN4cTg0blRNNGs3UDROWU01bXlHY3cxQ0djUzdET1k4Um5LK0orWWJmY0NHLzFYUDZIYi9uRDNwR0YzTUpsK3BKWGM0VlhNbFZqT1JxL3FUbmRpM1hjVDEvNWdZOXdWR001a1p1NG1adTRhL2N5bTJNNFhidTRFN3U0bTd1MFJQK08vOWdIT081bHduY3gwVCt5ZjA4d0lNOHhNTk1aZ3FQTUpWcFBNcDBIdU54WnVoRVBNbE1udEs1bU1VelBLdlQ4WnpPeFFzNkdYT1lxOVB3a2s3SEs3ekthN3pPRy95TE4zbUx0M1ZleHVtLzh5N3Y4VDRmOEtIR0x2bTNUdEI4UG1FaGkxak1wM3pHNXl6aEM3N1VpZnFhcFh6SDl5elR5U3Fsb1RRcFRjdHlwVmxwWHBZdksraXNyVmhhbHBWS3E3SnlhVjFXS1czSzZtV05zbVpacTJ4VTFpN3RkQkxYTGV1elFDZXEyZjk2c1A0UC9yU3MvMWhwa1g4b205VE1zOUplNzhWS0o3MDNXT21vOTVhbWFTVGFHSlAwM3M0MG9VUkhVeFlRblUxVFMreG5OZjFqZjZQKzNWMnMzaFp4b05VYkk3cGF2VW5pSU5QRUU5Mk01bnJ2YmtvQm9vY3BENGlEVGNsQUhHTDF0b21lcHJRZ0RyZjZUY1FScGdRaGpqUmxDZEhMbENyRVVhWjhJWHFia29ib1k5VHZvNjlSLzMrUE51VVFjWXdwa1loK3Btd2lqak9sRk5IZmxGZkU4YWJrSWdhWU1vdzR3YWpmOTRtbVhDTUdtaEtPT01tb3oyaVFLZldJazAzNVI1eGkxR2Q5cWxHZjNXbEcvVDdQTU9yelBOT1VtTVJaUmowYmcwMHBTcHh0MUxNMHhKU3N4RkJUeGhMRFRHbExERGZsTGpIQ2FsdUlDMDFaVEZ4a1NtWGlZbE0rRTVlWWtwcTR5cFRaeEVoak83MWZiYVYrLzljYjlUemVZTXAyWXBRcDVZblJwcnduYmpRbFAzR1Q2UTRnYmpiZEJzUXRwbnVCdU0xMFF4QmpUSGNGY2J2cDFpRHVNUGJVKzUxVzZyTzR4MG85RDJOTnR3c3h6blRQRU9OTk53NHh3WFQzRUJOTnR4Qnh2MUhuN0FHanp0bURScDJ6aDB5M0ZmR3c2ZDRpSmh0MS9xWVlkZjZtR25YK3BobDEvcVliZGY0ZU05MTV4T05HbmNVWlJwM0ZwNHc2aTA4YmRSWm5tVzVKNGhuVGZVazhhN281aWRsR25kY1hqVHF2YzR3NnIzT05PcTh2R1hWZVh6YnF2TDVpMUhsOTFhanorcHBSNS9WMW84N3JHNlo3bW5qVHFMUDdsbEZuOTIyanp1NDdScDNkZDQwNnUrOFpkWGJmTityc2ZtRFUyZjNRcUxNYnBpNUFmR1RVT1o1djFEbisyS2h6dk1Db2MveUpVZWQ0b2FsSEVJdE1qWUpZYk5UNS90U284LzJaVWVmN2MxUHpJSllZZGRhL01PcXNmMm5VV2YvSzFGQ0lyNDA2OTB1Tk92ZmZtUG9MOGExUk0rQTdVNmNodmpkcUhpd3o5UnpWQWxQaklZdXArNUJOVEMySWJHcnFRK1J5cG1aRU5qTjFKTEs1cVMyUnk1dDZFN21DcVVHUkxVeGRpbXhsYWxYa3lxWitSYlkyTlMxeUZWUG5JdHVZMmhlNXFxbUhrYXVaR2htNXVxbWJrVzFOTFkxY3c5VFh5RFZOelkxY3k5VGh5TFZOYlk1c1orcDE1RHFtaGtldWErcDY1SHFtMWtldWIrcC81QWFtSmtpMk4zVkNzb09wSFpJYm1ub2kyZEhVR01tTlROMlI3R1Jxa2VUR3BqNUpibXBxbHVSbXBvNUpibTVxbStRV3B0NUpibWxxb09RMnBpNUtibXRxcGVSMnBuNUtkalkxVlhKN1UyY2xkekMxU25KSFU4Y2tkekkxV25KblU3Y2xkekcxWEhKWFU5OGxkek0xWDNKM1V3Y205ekMxWVhKUFV5OG05ekkxWkhKdlUxY205ekcxWm5KZlUzOG11NXFhTkhtUXFWT1QzVXp0bXV4dTZ0bGtEMVBqSmc4MmRXL3lFRk1MSjN1YStqaDVxS21aazRlWk9qcDV1S210azBlWWVqdDVwS25CazcxTVhaN3NiV3IxWkI5VHZ5ZjdtcG8rZWF5cDg1UDlUTzJmN0cvYUE4ampUUnNCT2NDMEc1QURUVnNDZVpKcFh5QUhtVFlIY3JCcGh5RFBObTBUNUJEVFhrR2VZOW93eUtHbVhZTWNadG82eUhOTit3YzUzTFNKa09lWmRoSnloR2s3SWM4MzdTbmtCYWFOaGJ6VUdzL1ZaZFo0M2k0MzdUUGtGYWJOaHJ6U3RPT1FJMDNiRG5tTmFlOGhyN1Zhd1BNNnE0R1hvMHhiRVRuYXRCK1JONWsySlhLTWFXY2k3ekJ0VCtSZHBqMkt2TnUwVVpIM21IWXJjcXhweXlMSG1mWXRjcnhwOHlMdk5lMWc1QVRUTmtiZVo5ckx5SW1tRFkyY1pOclZ5TW1tclkyY1l0cmZ5RWNNNVh0T3RScnBPYzFLemZoSHJXaEh5T2xXYXQ0L1pxWG0vZU5XYXQ3UHNMcmQ1Uk5XYXQ0L2FhWG0vVXdyTmU5bldhbDUvNHdWN1FYNXJCWHRCVG5iaXZhQ2ZNNUt2Uk9ldDFMdmhCZXMxRHRoanBWNko4eTFVdStFK1ZacTlpK3dVdk4rb1pXYTk0dXMxTHhmYktWbTdSSXJOZnUvc0ZLei8wc3JOZnUvc2xLemY2bHAxMlhlMXNhQy93Qi9JRERjQUFCNG5MeTlDWmdjeFhrdzNGWFY5M1QzVEUvUFRNK3hNenZIenN6ZTErek83RXJhUzd1Njd3TUpTU0JXaUZNZ3pHR0RFU0N0d0lDUUFRTU8yQTRZTFJLMkh4L2dBNE1kYkdCQitDQUUyNStkTDRuamZHRnQ1N0p4OGo4aDMyL0hDZFA2NitpZW5WMjBBaWZmLzRHMnU3cW51N3JxcmFyM2Z0L2lFTWVkZVJQTm9DWXV3eTNuTm5FY3lBMkRZaWNvRmtUSkFINUFqbEl1SzRiTlVLU1VLUWY3T3dISzVNelNNS2dNbzhvd3NGUEFqb2lTR0xFamRxazNZb3NRc0lkN3kvMW1Yd0VkZUVIMWkwSlBNZGx2V3JhaVMwcGl2WGFoM3pUOU1MZjNJdEIvdHpNNnZpRTBtZFVDaHFuQnNGOVBpbUlPUWNENy9QOHNXRUE4cnpxQUgwNlpKcGpON2gvb0hQVXJTaUMwb2xpSytwc0wwUFE3bzM0ekNpNW9hUzg3RStBMnZxL2ZxZ3d2OFVISXcxVFRwcHVRYkVwK0VEU1dPNzhEVDdPSFRUK1k4WnNjN2liKzQ5QWQ4Q0xPeGhlNHM3akhXVEZrQzVGR0VPa2RBZVVLS1BlaEQ2dHh4VG52VjJyY1VnRkFQQkkxa1VjOGVGbUJPeFNnT2t2K1FRbkYxQ29DQ0NJSUVYaFRqWEcxdXNmZ2kxeUM0eFJjVHlFcktZQldyd0FSZzZhaTRHK1UrNHF3QTZpS0ZWZWQzem0vVjJNaEZVak83MVI4RFJTZzRHOHE0QWlRRlh4Mi9oMmZyWmpxL0x2ejcyb00zNWVkLzVlOGh6L0Q0L0diUWFmUkNKZmp1cmxsM0dxT0V6SjQrRXc4UUpuZVNFak1aYnpCb3lOUzdvMkVUUU9nYktFUDl4QS9JQUd4RGVDcjhsSkFIcmN6cEZ5aXI2SjBkYWFsREVDNUJjd1l3YURoakpJakpNZUdJQ2ovdlk1Yk1remE2YnlpUGtpZklJZXZPVk9rQ01oeEZMOExwM0FkK0lXZ1VhVS9RSTdXeGVHN1owaGZoeWtFWGxISUl3M0JHWGJpQk5xdmw5QW81OE1qMU00TmNpdHh6M0RIY0wvd2xNTTl3UE1TRi9CbEorbE5zVEFNSW5neTlwYnhwRXdCaVhheDJEK01PMldIRFpDcHZ3Qm5YcXdLUXZWRmRqejFVNTcvNlNsNlBEbnhvVllaaGVOeVpzK0JDekp5UEl6azFodi9QSlFBSU5GTURrQ2JLNC9XS25peGlwWjZOZUJqOWNoZ3Z5OGVRR3ByZTBlckR3WGl2dklTQUJQaDBWQWlFUm9OSitaSzdsdzU4MjA4ZnFOY21zekRZaDRWaWoyaWhBUUROQUlrUmtidzhscEtldFZYUkpVeWVrRzBuSC85c0dxRmxFUE92MXFhL21vWFRKdHZ2eTNKUUE4QzJQRWRIZndtaUZvQk1nRXdIYWVGYnpMKzFQa2xYbmgzM3NVSERWRUE5bXZHM0RmSE1GUTVJZHNGSkxGUXNZcUZNcDcyS1NENjhTZjlvRkp1eEV0aUJQOTFFV2gyZ29wVnJ2UkViRXRJWWJSZ1JTUVJucEdsdDk4MjA3RHJWVjBMUHFhSGVjTzQ2TE1xTEg3ZkgvaGVBZnFlL0xrcFhYS0pHSTBxd3UxS3lGSS9EUHhCWGY5T0p3eklvL3hkZHlxMkJaSi9halR4Y1dna3dpandCUzN3MWpXeWNzMXZBcjdQWjVIL2YvNjVwbWhSRFFScFY2cXRLRys4aHJ1aWlSd0hhZnVmUjFzeC9McklDc09EMnduTGxYSVR4VVlHQmlOQllEeHVOcmx1cXJoemd1SXlFVDNxWExyNjJMTFZ1K0p0NVJ2QnhZOE5uMmNoUFJGQmdUWGxPNTMvY1dsWFBySmgrRTdRZFdsdkVFWGlCZ3d2cVh4aVZ3Yk1WS3NkN1pWUFBQT0YxWS8wWHROMWRMMGVFWFY5N0FQTmU5dW1oaC82MU8xZGU5dW54amNidWhEUkw5cTRlcmZPazdHRmRBNVA0ckVOY0EwWTdQanJFWTRPNXdnSWttbGJONTBoOS9EM2VBdEVVNG9CRE9YZ1h3UCtldzlQN0ladzl3UTlvbEY4L2FqemVFejEzUWEwZXgvK25zTjdQK0VqUVRlMWI1SDFnc2NWTEw1VytpcGw4dmtpdmh1S01IaEI5MW1SdytQS2JUa0k0Y0V0N0ZoZUE4Q2FNanRxSVdYOXJBK2RPblRvRkxweXY0TENNWVUybERUZCthZVVDdEsxMTdZY0JNTzE5OHBycXZ1Q2NYVWo2THdHdjRuZkgzemhabC9jUkNydEN1OTFqWFA3OFcxTWo0WXdQVnJIWGNkeCtiQkVCbk1ZVmtxOWRxUk1wbU9oMkZldWxCamhNVUF4UW9ZWGozak9BR0Y4TTB4SUVjVUFHQ2tVYVRmeDNlNmVTcStkeFplWVpFVktGQkwxL2U4RS9SNnd3SFZtZVJVRXdWeEhuRy9PZHU2SnF6SnFoQ3ZMZk1lNFQ5ZDM3MzZrR0pqYXZ0R25paG03SVFkVVVSUjVhSms5dWJGdW0rZEZTMC9tWUM2QmhFL3UyYWFwdnFpMmFtTU53YVNTa21qSDVFek9ReDNMQVFBcnk3R3VRZ2hFQTRleWtvcHlIZVcxQ0pUYjQwOGR2WDUwUXVpKzhyb0hBdEVHMkpRd1FpTEFIK0lEZTFaMXBJQUNrU0FEbU8vUEF2RGRuQkNOS1h5cWhvSXFsM2RxTVVQUSttOGU5UkFVbTRzdlkzdzZndWRIanMxRmIwWllJSXpYdklqeEFJRnRYeGxUd0VxNU40V241QXZ2Q01JN0w5QmovQXlIS1IrbWY1Z0tIaUZVNy9KZlkwb0UwTEQzQUQ0NkR6cFZRSWdob1lhM1k4SUFsQU8vd2RpZHE4M1BHWGQrZGkyT3k2MUMxazlHVXd4aFFqeEhpd3VRV3dScDk2a3g5ZGVYWS9LcEhKbWowSndLRmtYUXpuOHF5bThPS0FDVG5kc2hJOXdJOEVyY1hhK3NqY1g1TUVLWUhGSkVpVmNQd1ltWWpsSW9SVUorTUs5bEVxRm05eHduSE1QeDQzVmxWTitjNnJjSXRUOStEL245MlBHNjhrSTRsYzVCOHlxRXIvQXp0cVdSVEhjQ0twdnhGWXZCNnNiamhMM0FIOE5FKzlnOUNzRGplSnkwVDFrY1dIY2NJNy9mY3cvaFArNDVSdHA2N0Y2WDk2aUhWK01DZU0ySFZNVHVpWWp6V3RVOFRjQ0NLOFJOT01Fai9GOTlFNXlPeDhrUHgyaERwM2xSc2Q0OWg5clBBWnZ1SGpLVkdXQUl3eldDbC8yaVFNRlQrZ1R0RnhrdjVRa0pMUTZNajRuOE5IbUlBZUp4eWFLMDlBVktTMGw3Y0d2NkdXTEJUZW5GYUtrVGZ6OVhhMlVJTThxaFJoVHBIUWJvK1U5MTlncHZmZVdyYi9IOFcxL2R2VlZUZkZGOXhmcEh2c3Z6MzMwRTQ4UlNsNklpK0ZuOEdhQ2RHcmg3TFh2dUsyOEplUkd2ZGlHTmNTWjdkc1Z0dlhnQlFQNnJhcEFzTkV3ZXo3eElZU1J6SnBmazluSlhjQ2M1emhxbTNGMjJrQ2NjSUNsVTZoaTlTbjlmRitnanVES0hDK1JFV1A5UUdQUDlmaWdteWNBU3pGb0tNd0QzenhYSW9STmc2Qkx1c1JIa1FJaHdrL1FWd25IMUZkNTFWUmdDdUFubC9pS0dUaW1Ud2x4T09KU0M0Vm5RVkc3Qy84Qk1VNlVKLzB2WGNaRmZ4WFFsdURLZkE1YlVrWG82MVNHR21wcFdCMEVhWVB5TEdjdzBvek5UN0pRbUhHdXUraDlBbForV2ZTRHdXL0NmUVFPenJLUitRRGxVdDRUdldRa0xOQ3A1Qzh5WUJWK0tNTFZjZ255OHFZR2RIbVBNNkRJQnp4QWU0WEZFYURpZUFTQWRHK0ZSUzVzd2pYamUxNTArM2R3UElLTjAwRHVEL3ViVDZXNndBc3F5VUtyK3JXNEdqU3l1TkpFbHZmSktwbjRhTjhKbytGUW9ES0xtSjVPWWh3c2E4OWRWdzRKMWxYTUJHRW1DRWhtNmViTzY4U1hkd3UwOWdiOHhmemtKbG42R2ZQaE53bG92V0VmTkM3NVF2Nlp5ZU15WStFQjQwTDdGa1RDYXBoeit6TUl2di9PZHV1VURicDBsalRqRFVRSENrNU0rQWtjNGNqRW5KQkVzUnNXdlEzaG1POTkwdms3bHIzMFFDMk5ncndyN0ZjVjVGcXdoQ01JNUNSVUZYSXpGTHRLbldid09HK21zTDJDK0FjL2pMQmJyQ1BYSHMzd1lGQUFUZnNqazc3Zko1S2N5enBlZEw1cGQvVjJtODZVQVN2Umw0Y2xzWHdJNUdUYnlhY3lwTnljU1IrQytWQ2FUcXA1SURYYkZZbDJENEUwcXd0RGV6Q1phRXZnZjZZcEFaV25XaGhUWGhqRkNQNUhHc3AyRWdsSGhBN2NGTXhpNFZWaGV6bUNtQlJRd08rWkpaUmc3NUx4bGlyWlU5NUtHQk1CMjJqcHdIbW1kYzErUXRETkVXaGtLT0Y4TUJDa2tnMFkzRVVyd3YweThjMG1xMXRnbG5YSEVnV1QxOFNSbUU3SkplSEhTeWVJbGxmWWFmMjJJdER4QllJZkhZUWFsOFd6SUVUd0dNZ3dIU09UUHhGTUJ0N1ZpNG5WZU56ZXNUdUJDY05LWnhxdHdGSys3U1NZdFFpWTFPamZWOFpGdk1raENUNkFzdDFBSmtEeU56OVdmejJjY1dXODRocy9jdHBHNU9zNU5jQnU0Qy9Ib0xvTDVnU2Y3MHNYUkJ1Ykp2b1djaS9QdzAwUUdya0U3VHg4dDlQY3dLVGk4S0FjTVdxdWpyTldUQklqMEFKbHNQRTNSRllQQUxtODhuRGVEQnNWaitEQzlHRy9zWkZ3b01Dblo0V3BTTXBHeUtaeGdGd1BmMzVHZnlCK1YrMmZSTkI2Nk1KNXJSU3o3NDFGelI2dGtFNHBYcW8wWkd5ZjdYUVUwV3AxaXZmbkpEald1N3ZnSnZhaitJL3ZXbCthZDhFUnloMnlub3V4MEcrd2NkZnNKRnB5NXV2YjFjOFBjS200emt6UTl4b21nRTNkRVBQUkN4OHZUWExBUmtuSllYRnU4L1pEVDFVbkNpNnhabytwME1USU5BeHNiZDNiTjlmQ0ZzL1VyclV3Uy9tYnRXbVZPTStGQkhyb3oxTzAybUY2MHQweW1ua1d6dUwrWUN1TnA1M2NsRWpJekFWVkxBRHBCNFd6djdxYnVycVk5dlFjZlFLQTdBWWFzdHQ0MkM0d2syd0Y2QUhGTjJlNnViQjQ5Y0hENGdnYm5KU3NTQ1lIbDJhMmpCeDl3di9FbS9jWUFocVpZZEpkanIwMndTckdRWS9JTUlNaVRDVGhaeXRjVFBnelRXcnBXTU9hQlhGdTc4ekw5M01FdHkzMUNJS2IxRE9HSm1VcUNaWGFURFliQ1RRQlAwcWJ4eEYyRSs3bzd2NnViTkxXcndUbmRuZ2F0WUp3MkIzWEpzUWd2NWZDVDdjdHl6c3QyRkl5R1YzYmlldUxSdXdpVGVYY201L1ppcHMzbDNYNkoxM0VTejlkdVBCL29iQ0NjRVpHN1NwVXkwUjNpRWE4UUVZMDB0NDh3Y01ORUFxRHR4djJ3TVI2dHNINjV1aDdTSHhFYWpZWG50ckdCMnZaY1BoMXNCQ0QxTVZYeDhiSVd6NldqcHN4SFlrb2cwWXBYUWtMelhlZ0xBYmwzTllTcmUyVVFqcW45MnlIYzN1OXJ5SDhEdjArUTB6ZnlpVXgxTkpONFJaUmp2bUI2eGY2eGxPMkxCWGhmT0xOOWZHeFgxdFFQbW5HMWZPZk9uWGVXMVhnUXFrc2V2Znp5UjVmNFhGMmMxOGNpdDV6YnRWZ3ZLVTlFSjMwak5ISFhjdUQvVExlZEUzVG02K3FNb3N5b09uamd2dzhHMkVDcHVqS2p3Q2Z4d2Zuc0h3NFd3cy9nQ2ZBRS9BVm5jUzFVMitvSGpDdXY2WWtCRVdWTWo5bkFFam9SKy9yQWVzV1NacWdVaFZla0R5N0hXT3BLVWxKRVVWZW5GZmkzQ0VrelpQMGVyLzR6eFpxVGFzQVpVcFFEMEtMb1lGb044RkRCb29hTGo1N0FkQVJ4TWR5S0piZ2RwWEFPek9mWXl4VXFRSUYrUmdpU2pKMHRDS0dhanJTZjBtb3dPVFVGS3crMWRkZTRtMVdIU3cvaWhsU25HQk5FK2N6Sm9FR3B3aFJ1TWt4UE9UYzlXRHE4cXNZMGRiYzloSHNHYnFncFRyZFN2RU14R0ZmWFhqK0dXaFBCbjhEbC9ieVdGVXY5T1hLdjFpeHlFMUFrVzVrdmh4Q3QzZ0k1eEtiNHMvYnRwNmVtQUZkckxHWkRkZlZ6aXRMWmpaNDlkdXhaaEk5TEs3cXRxdnJ5dWZaM3RlUDJrejU2bFl4T09iTmVCM0JWenF6eU9UeGVuVGVNc1Jyd01jeXJzYWdRcXdGdHhaRStBalNQZC9wYlN1Y0RYQ3VXZTVkeEIxaVA1L1ZPSURTaDFqR3lwanpDTDNoRW9WYXdDRGtNK3pGcURKc3BSbTVHWUprc3NuNHM3MURKeDdOVFlDbzV5U2dIN2Z6bXJoVytXMzBydWdiV0FyQjJvSE5DTzZ4TmROSUxaMk95VUJnc0ZNRGVCbnpPNSs5MHVyTWQ0RFNmU0lKZ0lwajRNWThnRHlGUUpQQWpsNGlBVVh5YWRGbUFQV0NndlgyQVZFcHE2MjlyNjJmbDd3QlM2V0FCQUZMcFlBRVQyNDdzQlJmRDBHRE9lWkh5RmNzTG9Tc1JoQUlTa1hDdHBGaEc5UWs2M3k5cXFYQ3Vydnc0R3NkOFo0NWJ5MTNPZlpCZ0hveFNwQjRDd0VxWmFybEtESk5nREJJU2N6MEZQQ09LT2ZKUWtkN0dzOHJHVDFaNnlrUmNwNU9NNmRmd1kwc0pQY0hzS242RjZOU28xZzJmQ0RKcTlDUTZwbGwveEZCWFBDRGpwdW5hVTlzVkVIcGRzNEN5NDBzK0hUZFdlbUNsdXZJeWdkOTZaMGNwa3VYOXFycG40K0FxbmcvNCtWVURtL2FxcXAvUGh2czY3dHpLWDdvYjdqZ1FhN0hENTYvUzRtTFA0Skp1TWE2dFBDOXN0OFFPN09qQ3RTZUNBQVNiZk9NcFJJcDhmcHNhTjRNeDM3WW1ub3dEU2syb3A0QnZ6L3JkcjI5WDFPemxmUWhLQ2wrNnNrbFZ0cisrWjkwZUh4alZ6dTlhOWNRRUtrcXl2cituZDFKVHBEeWFlR0pWMS9uYW1hRHhFbTZ0L3BJUjlPYmxmNklaZU1ibDUxZHdhK290TEVUZlNEaElJdHpXVzFxR0tMOVBCRitVOHlSdStsYS85NVlCOHVGTVAycXNIblVabGRzSkE1Z2dFbUQxTUIzYkl4aUZrQnZsWnhxRENkUEVKZFdaU1RRQjBKUUFvL1RzZkFhTTh1VGQ1YXlPdmVROWVxalNhWE14UGVEZmp1SWV4WVBCNi9DclU2d0dmSHBwYXNyanIxL0c1Tm5ISmJnc3hvemR4TkxpclR6UzhocGY2VW9CVWpqWGp3bFp2bVFXQzM1QUVSSkdwQmtzeDVUQ0lZYTY3VWk1MGw4eVE2QnhtRFNCSE9ES2FqemREa0J6Q3I2ZGFnYWczWHJ6eDRMc2pKeGNwV25qenN1eThQWVorUHVxSVoweFpGVVU5MS91YndCdmdpa21obUhadmoxZC9YaXFDRUF4QlErbTI5ZmY4WUFzTzU5czRQa0dzRWVRSDNBQ1FBQmYrSDVBRlZGenMyZ0Z2dS9zRUJnT2ZaUGlsQVp1RkVzT1YxRE9qT0FSSWdqZ1dWc2dWMjdIOEFCYWVGSm5LTThVdHFtK280eVJKVFcra0JOK1pnZ1U4aGs3SStUd01tQXY0NFZBTHBpWVRDN0lFR2R3Q1UzNlRVMnFmbGJTekpRSnVyTndkN1libUJzUEtLSHFsQnFBMjNrQXR3KzFyaWxhWXkwdExXTldhS0NwZFdnN0JGVUQ3aGl2ZHNOUHRBYUhFWDZUWHhOb01WZnp3YVFKZTlKRlhBVkJEU0JpK2s5TG1pYWRKZ2JOMC9ndS9nQXVnNDQzL0VCWGZpVEsydWJoYlJDMFIyeU01aU53Mi9BMlF6MDVOUXNqN2VRRlBXOUJhT1ZWTWpKTlNRQzZjcHMzWkx0ZC91VTBlaEV0NTVxNTlaaDd1Y3pqMmFtcUVhOTlXZ1pVb1VjMFdTbWlBY1ZsWWtNc3VqSjdGK1ptc3AydzBsY2g2QWNRS3hZR0g1SkNSY3FITW8ycGFOZGZnS2R6c1FsRmpiUU5SWHd4ZGNLT2dXL0ZKL0Fkb0pCYm1JVGdXODZLMkdTM0dCREJ0MFFCQTZLaDFCd0NZWExEbVJDQTJKM0JkNHBoa05NdDlXdUVIWGhHM2FhVFl3d2ZsS0hZU2x4SmVMZzlqS3RjR1ZzUkJjL1kwVlZxVEkwTXRZT3dRbTdGbkkzUkQvZUtJdmdhcnJJM0ZHbnViV2pPOU9LYW5ZM2toZ1ZBdUxuVVVQeGZWaHpYWjhYVVo1Ukp6SlI4VGFVSHlwZi9QL0JIS0lEeEw4RzdvR1piVlFBaHM5T1dINHVIV0RqMEY1S0c4d29ZTnBJQmV1VUhrMGF5NEhkZWNWN0JQM0d5S3pNUm10L0lkWEVqM0NidUl1NEQzQkd5SGowbWt1RU9WT01neTJRZTU4ejMrSDNoKzhVRnYvZm5QTG5abFkzbnRENVVUQU5UcnVET1RyL3krQVpqa2R0ZzVnOThmcnAyazU1RzV0aUtLcmZvVDg2TXEzaGdwNWVvVW84ZXBvaU93ZjNGSVcvaDN4ejJwVkdLMkdWWEI3YUo2a25qbUc0MmNSMlliaDZsbHJNc1lVL0xSUTl6WTNwSHJ2c0trcWMyRW1xNkE4SlA5QldZdTBTS1VNa1NwWm81UW5ZSnMrR2FsbnJ0eURBeFNMbENHbjdDamxRb1ppRnlPbUdBaTVUR1ZpTEVHSmdHNWExbC9POEl3My9YWmpzNkpqbzZzcEtpR0lvQzFveDZ5dEpLS3VzVFUzdWFmWkllMC9KRkVUejI1Uys5bFlzMFFRZ2xLRFEwWUI1cjEyWXRxc25haFZlOFdCV1NDVkNLeHN4NGFrUGJ3T0VKZkNQdlhIckYrWmM4RVprNFhPb0MvRThoRnBySmgxdVlXdWtoUUw0NjBYRVIrYXFoWU5wRFBnditwWE45d295SXNVUlVpa1lsS2FTbmYvSGx6NTJRQnlvSXlYSkk2YnkwSDNOM1JWR0pSc1ZPb2ZyaTREVzlZTU8rV0FCa0dncEZmTDM4bHVwcFVGcno4Y2o0L2VNN0xqbjFVNjV1M3Z1b0JtcHU1bk9nVGtzdDFic21MSEwvdjd0TzBCVFQ2czBweWQ2alhIMzdENXZvMENWcDAreDBocHQzQ1NiL0s4dkF0WTNnd3hTWWRlY3paeTJ1TjVsbG8veTdlU2ZnelRtdzRNeDRvRmxYQjllSWVmUFZSQU5YUHpMSTR4YktubTdhQUFLRnRNdTR1L29kUktodXZYS08wR0tYRkhzQ0Z1T28wUFE3dEhlSUxPaHJhbUlLNGFpcnY1djJWR1ZFWVBrWGc2aHFwbDJoSXdqZm5qY0NSQWlqa0hXbWFtOFkwd3lLdFhlSWRNYnUxajNqS1lHbUdYeDVhbGQ1QmROR0F0OFBjdCtsZUlMQnM4alFCV1lnTUxVVWk0dzdKdko4b2NnWVp1SlpVYUFVa2JvaUVKS0k3MVVJWTQ3TE5tSEtDUy90eDR3MzVkVXg0KzBuWk5WMm5SWndyUkwxc3BMRVBIa0VvNDR5cTRUVTRaWDZpTHNHK1NUNW9sZVNSUFl5ZWRjcmhZaC9CNnNIWHhJdFY5Mml2ektncmdtRjFvaVcydGNwWXc3ZXI5K3Fta0xjRDBYNVVnQXVsVVhvand1bWVxdnVEd0ZGN3V4VExiSDJ2Q0svOS9PQzh4ZGhlNlhQYW15MGZDdnRzQVdObUtVRmIxTGxmUmp2UVdEc2s5V2JncG9WTTZEMVBwOERDN0NsazlZdmhmRHNMVlZENnRtYitwNHYxTU1DN0tUTjRQbDNOOWVmOXIrN3ZlOStVQXZpQjRQYTNJTUw3WnNocnJMQUx1T1JIb3VJdFlUeURER3ByRUx0SE5TcU1lZE1VbSttWVlyT0ZaRXNtZDZnc3lIY1NKYzJ1V0krSktCdHZuVmFZQ1lOc0NyY0dpb1RXYWhjSEltSENvR1dTbjhMdVp6WUJlR2VpZHdTVHo1aWJlWTRoUXR6R1N3aGNma2FkYlFYczlCMmdzV2JMN0VlUXM1VG8zY3RZblU2WlN6U253VHByR3ZlZUhSUlI2MWZnRVc2MWpRWVoxMW5ZK0xnZFovbUNsd3ZkejRlazc1K1lpSWx3aDZlT0dHcXJPcWhoSnhSYzJMMTdlK3JwMGtXcGl0WnFjY0F6QmtGQzR1WVBjQ0NlUmNXc3Via0QvUW5jSjNhbTYzK2E2WmIzUXlVM3JhbXJ1WVZzZGlLVGZpd3NybTdxYTM3dE1PUkpsSXQ5UTFCUStDRHJXWmhLTkV3dm42aUliR2lFTWxpVWtnQWtvTzdNZTZGR0NyQ3Q1S1pkUEpGSVpIbzNScTFNcWxVT28zL1F2YlduZ2JCb3o5R0VFb1NnSlp0eDhOMjFGWWtGRFMraU44SFhWa3l2aXJGL1ZNdVQ5cUdaK1VBTjhZdDU5WmhDZUc4QlpJdzAyek9NN2pVMDJrN1F4Q21SNmRyZHVqYVhKa3J6VGtlUXNiRFZUOVI4encwVGpBdEo5aUhqNXVkTVZwK1NiY3NaNktiemRzemVOck1MNlRyREFIRTVBSFAxSndSOGRFNVlpV0N3WVQxRXBHMmljRDlOSnM0NFhrbk50ZXBMWXFqYzUxb0VjOWovckl1SjdnUUZ2UEY1aUpWOGxiWUpLZWNJdmxIWFRUWmxCZXB0eEs3QUtNZWp3ZlhWZy8wakFNdzNnTWZvZWZxWUNRRlFDb0NIMkhuNnNPQ29Ha0k3cjRnM2hGTzlEWDZnNnEyNmdMU3VVcUhvVFIzdEU0MFdQa1E2QnBSa1FrNXhzTTVDVkpmaE5WYi9YWFBPSHlKMVBScnQrWUlQbGRmQWtKRU54OVhnSXJaVGg1bXM3MzdlUXdvTUZES1R5aWlwb295RVBabmZScXpTOHlnT3pCY0NrVCtLUlJOTE54bDdFallwSllKTERYMm00aDRYdUd4SjVwSVpPTEZQYWtIZ2ZLajZocy9sa3NxQ3NaOHc5cnZSU1Q3VmZpS0dwQ2c5UHZnS0I3WFdVMTU2eTFGYzk1c1VXSmhoSi8wZ3laZ1M4R2dxZ2FEa3ZNcnA1MVFaMEtiSDBPbjBRYlhQbmdSeGtBRm82WXJ6eGFZa2tzaTBFZFlGc1drTUFVbytlMUVCaVMreTJYNkxPUEY4ZFNmbTVMdWtMa1dGdndpdXRFWE02RXZtQUdnMGhwdE5malJodDZEd3Y3cmZXTFg1c25MZGc3SFJNRXZTZEdZRkJibHpNYXJicnZ4c21GRnYrODJjVmN1T1NUWTQ0VVZleURvZXVkZjhPaFNONGNmbVlhZjE5RzlkNFhDY2pxMCswTG8vd3VGT0tBR2hxT3RGUkN4cEozcExoTkc3dHJXTXRFZDlIZXUyTlRTMktCRkRVa3J0Rld1M0RVWWpBenZxUno4Y2dQUUc5TTd4RlFHN2xuUmZENllZb1A4WVorUkQyZzdMVDdkSE9IMXNoU1k4MG1jb25hcUF2R2RMRWhGWWlhZnA0K25TbkNybnNGYjRzeXFPcEkwd2FrU29mY0hHSFg4Qmd2YXllcG96UVFLemdNWkZlTWM4a2dzcFA2ZyttZjBwLzUveGkrQUQ3bHV2UXQ4RDdyZnd3L010UWk0UGs3VUY2eHZVUitFa0dzZHVKSm9BS2F4ZkQrdEx1N0pjMGhScmdBbGdrK2QxNjhpcmdSUHFOUk9NTDk5dmVkb0g1NFpmckRRa2tFaHQyZ0xyY2NsUzRFODh5RzZnalkxRmxxOGpjOVBTNWh6Z013NzZYTG5oeFRWbFE2b3hLT09yTGt6eE8yY2krQUxQSlVMUlVEbnZBSU1hZ0hFb0lLL0IwRGtOZWVFdjlpQTJ6cmt2R3FBWk1FUDl1STZ3ZFVBR2lrZjJJaWwxb0xmK1orNDlrSktCMXNoRUZ4YjVxdW9qeHR5clRWMTdyU0V4TEcxQXloRHl0ZTUzaFpKQy9BNExTVXd3ZzBvb0M5cVVUNFdHVzkveVBuNkIzcGJvdHNuQnFlV1gveVZrWXFGakhnRUJicjJPdjl3eTVKVm9WenJYaEMvdFcwNGVJMGVWVlR0cENnQ1hnM3dTM2dmbk9KOStvcWU3Wm5MdWo0Ni92aG43K3R0YlRsdnk1cno5WWlnRzJ1SFB0UzhvKzJtKys0Y3hPZjBlYjF0dkJxenhSRUlnRTk5UXJlWlRBUXZScHduRXdGdlhVdnZLb0NUb0x5bFV0bENhTVM4TTV3K203VGsrdDJUZVJLbW5NRXdvUVRFNWtLdERqa2lFUkFpMkZlUU1qMWtDbnQwQUV2NmxOZGhQaDlXWFJsTlQ0TnlzL01TSmxQVE5kSG4vdXFNYmxFSGZDS2RPQS9OYzVLSDA1N3VnMTFQWWNrMDdmcFhZQW1WdWV1RHlYcjNCR3BjZ3RUVzhndVV3Zmp5dzFTTzhZUHlQQ3RZbWNvcHhIbU55aDkxbGlNSlQzc0RORUkyekwyVkVsVnk1SWRwSmU3NHMrNHZuVHVUdFRGRTVnMFI4L3E5TS9wck9hWU4rdm5mZlBXcmJ3bkNXMSt0WE5rbENJa29KbE54bnhWR3FPV0M3b2Uvei9QZmYvaVI3Nk5vaHhDTnFjSnFuaGVoSUFxSUJ6ejZsSTkzYnFOdW5KczNVV2ZUM1V6N3c0NFlIdldYb05mSHl5M2x3YS8raG1jZmJFZ0FGQWhoc2dKbHZ3NUFMTVovNzVGSGlDL3lJK05EQnpYVlordFBTUUx4RElYd29CTDdwWUkvb0c3WW9PTFBLVHVKazFVYS80MlRxc2ZkQzhQRkhjU1h2NGRiZ21HTDF3NWhFOGxNb0I3SmlDaWVNU2dScGZQa0J4SXkwd2dzZDNKWTVRSjFGU0JJVC9BSzZLbFlzZnB2TkdKR1YwVzg0THNEcWhQSGhMQ2NGRXI1QXZtaG9BWlFzaVQyNU1BLzVIckVFbFNxYXpIemtNK1htOEE3SGhleFAwbjAwQUpTWk9jcmtnYUNLcmpoMDlrT1lNVXNZR2lQT2ZmbXV3Rm9TWU50VnI3NlJVWStFdXhFZVIyR0Q0anQxTUpZc1lqNXdLWGNhc3o5WEl6N2FHYk0vQUlMZ2JEZ0hyWHdudVU1cTk3NXlWNzBBcHc2ZzNIU0djNjFmYkF6K002Q20vbThJNXpsdWMvZ01VcWExZ00wak1oNmhGM0JXZklrSnNLSitxZEh6bmJUQVdlOSs0VHBCeHdCL2hsT3M4Q2lGNXlFWWZjMzZBazB3bW1ZWXlSMnpTRnVrcnVhV0NJOGJ4aU1mL0wxK25DQk9mWVdzcEpMOThSd2lrV0ExTlNQUlZEellNZlFwTkZYeE94Q0h5TkZZcXdETlhFS2kxdFRycWNNUHJ6enYzVUxuekdObkZUaEduSnp5bXEzcUJmTVBwVUtVdW9PcGdxd1FCZXVpSDhMTHhjZWpBejB5S0pQVmt5MXZmKzJlNC8wZGFvQlZmWUpVbldDQlFEUUkvdzBjNmNoQjhnK1J3NDNrM3RIVlhVZnZiUWlHSWUyUkt3MW1PZkdER1hhK2R2QlB6cnZLd1FGZkdYSHd3TnJ0WmdzR09QRnR2Ym1jWU00RzRDcnZOcnhzVTdlSlBEczRnWUpENTZ2bnkyNWVWUG5yRGc1ei9pYUpNZ3dudDE5ZWtHTUZKeGtZUGdCTzRHM3o0S2ZxdzlockRxbUI1MHBNTzJNZWhva0VpNUZXT1h5MU5ud0x5bkQ5SHpVelpCVU5lMmlib0xJNlF2TTBURFRVdlprN1plb25qU0dhVTRaNDVpVkxNNkRUUU1pUWhDTVFsQjNwVVNSc2pzQk1QNFdNa3pUeVl5VG1Demwra3VTaTRtem1CMUdIRHA1eXkwbkVkZzRjY0dSTU5UOVNETlI5RXMzaXJlY2RCQThQRGw1R01MYjlpcDdEOEhEWitqc3BuTzhhMlptS2sydThBRllrTU1WNEdxMjNwSFBQM3laWmlOZHYvNEJIdDhnTHgrZXZQQ3dJQnorcGVtZklTOWdzall6TlVraSsxS214NWV5T01RSThRNnlSS0lnd3l1Q3VVd1d5V29ncnBQVUJhSVRpa1Evd0x6RjNMR3pTMjU0VnlsU040U1RmcCtDVkhCencvSVl1RmxGb2FqcTNDTkhaT2N1UVlHdi93aTN1YTJ6R1FTTlAyM3FCQVE3UEFVM1RtNkJYNUZsakNOUU81Z0docHFRUVJuTGxtL0lpUkN1cUlQbm5UL2pvVE5xK2g4SnhrRXM5QWl4dW1WQk4rbVM4eU0vdUxGbjZkS2VHNEZvZ0E1MnE2bU5xNk1MaEEvcDRyak11N0M4aFNuRk9hZ0NXb2pQdjRTSnduMzJvZ1JnSGdhSHE1UFhuaDNWMS9RM3A5Rnlyb0hMYzUzVVY0OERmVlRXSVh5ZmE2OHdxTWhhNWlybFlFM3RXZkVLZVNhLzl0UnNHVFVId3lkUWRDRGh5OGRLSHlLaEtKbFVMc05EWGJnSnJHOC85c1BxSjVoVjR5cFgvL3pKdm9jMkozNXdRLyt0NC9qUm5QTnoxbmpVNHNOb1J4ZWkvblFXczhqRE4vVDJiNG9MUERCQnBPdE9vRHBqcm8zaVRZQjVOY3l4WGJYdTh4c2J2cmsyVjhBUGo5N290THJ3Y24zbnZvdlhUcEZLUFZubUdid1VVSWRKejJCdmh6MmJGMlZ5MFRQTzhmaDQzTGxiRmVTQW1nYWRUVy9nOFc3dWJNTno1a2Y1dGpRR3V3aitHcFR3QkhsTkNGbXE4L0Y4QjBiL0h3L0c0OEdQKzgzMklqaW9LeUU2L2kvUjhTY3l4ZFlGVm8wNlMzdSt0cGFwc2FoTzh2QURhbUNTeWtTZFRJYkVYZTBNMStOL2NJcTZWUnVBSE5lZEprVnlBTmN4NlFMczJxYkYvSUp2eFRwUWt6QUVMY1NMZlUwYUwvZ3NMSXdMS0tqeHZLVG9rcGkrT2ZldDM0TlpqNnVrcDBuMjB2bVBEVXBDSkNaM1Q2MnV1ZlVBNlBNWnhYQnJXdkFERU5RVnlWOUpLWmFrSUgxRm0vUlg5ZllEalJ2QUV2cG03bDY4d3VjYzJZbUxRYjJ4b001ZGwxb0lYRlducDFhcEF4aXFLOXZVejVvRkpQVDNsVkpNalpoeVpYZXFBY0NmSUErVThZS3ppZUtPVkU0MUwwemJINFJmcTlhQ1ZlRlV6YUdVT1lNeS9WRzFNdWY1V3p0YzV6TUZYWmV1SE9qdG5QbmdKZ1EzZEZldWtIUkREQnZpNGJJZUFIckxLZ2lHamcyQllydHU2dVVqSWcvU2MzWUdZc1ZzcG5xc01kMzlzRThrWGk1R0YrNlNwN0lhY1pYYnJxVm9ueEdOSUJpUlFxMTM3SnRCTjYyOC9DTk5JU2tNU2NnaWdqRWVtdnBZUUUxOFlNL0UwTkRFK1FjelNnRFhEZmdZQkxXWVlVSkRHN2tSYmgyM2szQWpWQ0hKWEE4clJUZDZoMW42aVF1VmxDVktUK3BIMmtPUVV5UkU5RHFTWGZFTStvdEl5VEFMZEZ2Skt5QVVWL0pQOTY2bXZyWldmN0EzQ0lKZlVld2Z4RUtsSUxDZVVXd2RQOVpLMklPV1owcnJDSE95enJwckVTa2FjQUcxelVmNDhlWm5LdXVJS0wwdWFQV0hTdGFmS1A0YnJKNWd2L1V0TlJCUU90UUVsZ2xhbnUybVBNNGE2NDNGNUd3WEh0T1VwMmpnMmdrR3pOZlB6dmRRY3JLZ0ZyWjA1eFR6ekk3bHVuRUhRYS9uYXUzTm81MUdiWkxoS2NUZnVIck45UWcveVgveTRzbFBDMFNVODJZWHNYRjdudlVPTVZLOU9aK2R1SDNibFJEczMzMDdMWC80VGdDUFgzLzduTTJLOUd2TTdkZUtQNnhmdWZ4Y1Y5d2dTVXllcFBmYnF5cm1ZL2pweXpaOEpDZkswYWlVdUhUcHhwdlJ1enJtdnUrUTh4bmNNZm9xaWZyQkMyVHM1anNCMkR5aFJUVko2eHUrZERkZUl5NHVmZG5GcFpYRjlUTWdpekdsV2NNUFliUGlsVk0wQUdOUkpZMVRsU1FUakxxTi9DZml6R2JzVTAxSmxKMFRpOGZKVlU4aUpRU1dNdy8rWDd5SXo1cGxTYzZiTWg0SGllcU52dy8vaVV0eUxkd1lkejUzQ1hlUXU1SHlib1JUcDZpZGFIQm9JVnpyQWJFZE11YzlrY2ppUGRUQm9KeUNVZy9WWC9hVUM1aTFaMjRIUFhPM3l3V2h3Qkl5a0RJTjNTYlJ6eFd2QUgrcW1yd1ArT3o5RXpDQ2ZFS2crT1RPa1JYaTMzN3NHeitCY0puenpIWFRLbi92dGZRSTluYmRQR0lFSk52ZnZuUE0xQVc5SVNhRVluZEhsalpxdWhEUy9ja3dGc1Y5MFRDdmFzN25CaTZQMmNYSzBtdmlrYTVydFdLVFloZWExRHp2TjVCc0dEejRHRlMwUk1sTUtRMlE5MmY3ek56STlwSERnd2NQQWVHeG5iMUxuQjhxMjlhc3VWYW5SOWpmbGROUXBBRy9HUnZmM216WXNzOFkvRkRXRG9xWWdkTWdVdXdHUXd0THF0YXc5SlRlM3QxenZtVjI5cFYyZnN6VUFwbU1abVJhSlFGalkvem5yWUZaTklscFR3NUxYZ3pYZGFLaUFhbVF3TFR4MU5tYTBJV0liWVl3d1BMdUxjd0NtRVQ1Z2NqS3h1dkV5cmlNSlNYY21UcmFBMy9Zc3phMHJpVy9OcDMwS2NKRmxZRmRBb0pMV2xvR1FDQU4vSENOODkzeWhRSVBsN1hFVzNXenplNWRiYTF1U1EyRjdNRnJLVDZubmdUTzEwYklWQ01Id01HRXp3WWdiRmdtSUQ3TUtBbGhDa0VRaGRDR0NuNTIwbFJSK2pCTUlnaWpVQmZCQmFMQ1hqRWs1NVNrT2JqRGRBMm1HYldncWxjM2JuNEtKYmtFdDV4WTZmcVpFOXRaMURRU2NRZ2lVZGFZS0ZmWUNwc25aeEExWUtaWVFKT2ptRyttZVRXOHdwZlRKTGd0YmZveGpsKytHYmhTeGVibEYweUZlRlV3Sk5ncThwTkRwSEZEK0kxeDh1bzRMdHlSbzJGNVNhdEJNcU5TOCsyYm1TaXg3WFlpU3ZnSi95VzdzZUdrL1VUK1dmNitaUjl3am82aTlBSzVSOVNDa01nOU56K3hRTzRaZmxkWFFaVTFjc3RIUEhsSHUrRmpBbnJ5NXNuYnlLdDdEL1BTWWVmRmVhL1FnamN2bjBldnViTGNhbTZ5MWh2S2JaK3JONFV1V01qNklYR3RvOHQ4aENwbHliTmRCSjFJWXRndWR0SVFsRW9aMytrdEUzL01Sb0JVMXROTkV4Y2VDVUhka0tpQTl5SEo2K2h0Q04xMm9YcmhJZmk4RU5wV1ZQRC8yMEtxYnlpQVpDa1FXck9XbHdSRmxXU29EMG5DRVZWTVkwNVJFdEtTNEU4V0pZTVBCTVJRNGYzSWY4N3ZncnkrMmJJMjYzeGVIOXF0bW9JaXRyWkNZamN3MWQxRGt0bXZXb1VBdm9hQmd1RlBpcHFVVGh1Q1NIbklNNWlINWpDODhsaEsyY0pkK3Y3R0g0dStXVEpkbDlaaVlpVEtFeEtSaHFXNUVWM2pEM2tpNzZvd2F6Y3dKT0duMFlOWGt4Q1lpWUV0SHdwQlRTT1FpNSs0SEYxOXZ6TmVDK3JhZWpWdy9Mamhsb2EySElEd3lrMUdFSUdBUm9LODFuNVJia3RxTVZtU1ZETXBJRk1UL2JyelJVdVBHYndXYWh2V3lSM2Q0TTIxa0x2NlFZUS90dks2WFBZanV5a0FMenNLMFFNSDZzTFJOb1g4bWlsZHQzWExCNVNBanI4aGJpZ1BidmpyOVBJUXJsMkxTYjdPa0dhZzhKMjZKRVJqc3BiZTA2L3J5TlltUHVENkY3eUVYa1ZMYUNRZHlmWFRWNkFlcXpUVXJ5Q0drU3R5RXV0MTBTcUZLVEhDekVCZm9kNW5hdTVleVNMK3pXeFIwY1gwV1V1L0ozekgrZGF1MjhQSC9XWlNYTmtEai9lc1FMZFZEMFV5eUw2TXh0N21UVCs4WW9PMThUTG9YZTZQZ3pSejl5R3FBVGlwQmNDMkt5QzhZaHNNK0tzL0tZMEFNTlpUU2tXaGVwZWNNZ2wyTVZQeXZac3V3MDlzZUVEeTdrakhxNytOcHVDVXExSmd1cExyMEVidVN1NTY3aFQzWmU1YkdPT1Y2WW9nazZTZkpKS29sR21pRUtLNEpwNHk1RXpGQWJLdy9JQklDSTN1VlFxU1JVUkNLVEJYVElvbFhJdGRMTEE0TDdJVWlTeEdmeG5HMHJOQWpVT1ZpRjJobXJ3aUpzUWtiUVZkb2tSRFIyb2hrMndFdjRiblh5T2dURFkrU2NYRkdPbC9GRVVmUUwwQk9ZeXh2TjRhbDhYUWNJdnU3N0ZFLy82TEE2TFY0OWRiaGtPaWpDa013SzJRQXIwSStMUWRJdEJEdmsyOXZnRGlRMktMS09UemlpNE05ZU5aWXNzSlFiRGpQaUVzaFJBSytIbzMrOEs2NkN5SnliWVc2a2puN2xTamF1ZDRQdy84K2tnUzlQc0VNWlBxSDlZaVFuVDU4cWdRMFliN1V4bFI4UFdENUlqdUIzei8rTVJlc3N6M3N1UDRMZ2gzamRQajAxakE5SmRrcExmczdqUURTckpUOTNkdVNpbTh2OXZQTnpUUWs1TGExT25YTzVOS3dPemMzYUlqdWVUM0tmZXFZVk5Fa1VFTkk0ZlFQVkRJWmhYZ1M2MFJNT1pKRzdwUHRmV2xGZytBTmhoQllqQ3NDRWxGNG9VMVFlMWlSV256dDQzcUZsU0hKL0t5N1JzY2FyZDRuN1lzRUZpbStYaXJmV2pRWjh2NWlXRVZXdnBvbTM5VHJkRjdENE5EWHF2eDBmUEpJWEhGYWU0UTl4SHVZM2dPb1U1aTBSNXl3K1FsbDVoNFlUa3U2MkRsaWw0WWZjNGFwb0pUcFgvdUdkdlR2T0ZGVkt1SENWb0l6eldDZUVaY1I3bEc5dmd3RkRDL01RSktoRCtoMFVoZG9HUkgwRXdyRnVFRkMvUTNaNW9IaU9ScUdSbmRoQjFoM295ajlPdXFNTmg4VzhPUXBMNGVRZ2xUVHhkQVNFOGJKdWpNWGt2VzI3VUlUNWIrbGpSK05SVFEweDFDSEdteGJPaDRjWWxnSVZ1OHpSK0JsckNrZUY4b0cvTlY5eC9YREFoZncxSW5YQzFwOXhrMlFLL3pZQnc4a1YrbUFyNmRLalE3c3QyNlplbmRnaTlvakM3clFrQkltYzdwUzRwOUFLK0tTOENvVlZRa2N6UlBtWk9oVnRyZ29EbkVaSUIwTUNlTDVsamV1ZEJxU3ZwQlgvT01IZ1loLzB4ekgvQW5td0lCSTVzMHdySWNOcEpObXN2WHZZeDZzVlJ6SHJjYmM5VFVFd092Nkpvdjdnak45U0pSNVpTZmFBMWNOd0NSc2k4MmRiN0J1TDltanhnbStvRkNubWtLQ3BUdmJnUTVJWnlSK29sK290L01tRVNsdGM2d1JhTVJ3ZzBuMjMyOFArWkRpUS8zS2J6VXBMZTFCNFZkQUlLRzdmNWRuK3hETUdXSXRyRlZEd0hWeHVnRzNsWHNCN1lLek9welpudUhscE40dWU5d1hnaDNIWWJoS3MvRDA5VkRtZ2xuTVBxRHphSE9GZ1FIQm5OeXpCWmtpQVV5ak9oVGZFQUZnSWZ4OWI2aFlEdEVMWjJoWm1nWjAxaXNkNzdYdGdTQXBhMWdFQVQxYWNNQ0FIUDRTVXZYczkwTmZMQnRkQkxzY3ppQ1VKWTQzL1ZIR0Ivbytaa1g2K0tHWGFzTVdpUWZ6Rnk0c0N2dFBiUklUcGkwcTdQd0huVyt1SGhlbVBxMk5MNFBmNktGYmFpWE9NL3Q1dU90NVdrYTUxNmsvbldMNUpxeDNxTVY4QzhYeVRremVZN1dnZCtkUGUxTTlkL2VvOW56OGtIWWkwdThpMHEwaXdxdGJ0MnY0THFIdVFDTi9NZU1vd0ZES1lnUkRxYm5PVmVmTVQ4T2o3cnZvcUhSVTE4L2RXUmk0Z2c3UFVhTTBveUl1d1g0cmRIeDhTTW52Mzd5Q0RzNWZ6ZnZaMXFnWS9LeSsvME04VGNRc3Ayd2J4ajJwbURJZ0dpdU1aM1FPZ2NiRDduZGRXMDVjbXIzeG84ZVhMTGs0RWNmdlplZUhucFg0NGJyVzNaa0hDMWJjdkQ0SHg4bkQ5T1RjL0lzYldYNUtrYmhETW5yQnpLdWM0cHI0WFVkUURKTXFLQiszWjVHbGlZV0lXTGRORDBaQzMrc3QzOWt1Q0NKTUxPOGxDdkVSUmV6RFVOQW9hR3FmUVhLYm1EOGhVZEdLcFlyOUFaRmFHRjhiZEpJQkRjcGtFMlRETTYwOW1NVTM3cnRHNW1zb3ZwTjV3dnd6d1libTRZRzhlUkZhbmM1RWIzUUQ3SVpPYWJGckhnREVBNlpmcXNqY3VDNEdnMnBjRlp1Q01KUmpJbFA0MHBleUdMMEk4Zk5XYkRXaVZRcXQ0enRQRG1CS1doTVhYTC91djc5YmJ2Nit5dFhkR3E4R29vMTdXaFBSVzhBTGFHRUlQbWpCKzVTUTFHMU9vcVBOWHBLOVBDcnVHM1VVNHZTVTNHT0VDWUJEYUQ0dzRoanZrNFlyeGZNMGVrZUFkTkgzb2RoME56VWpFR0JKS0Q2TnZPYVIvZHNTdmNTMEJmUGhxWXAzUXZ3azVpMmhURGxQQlhLeG4zVlA2WUdPWEtBd1ZyUkpYdkFUSHQwVDFBYVZTaUYvS010SlFCS21KcmxsZm5VekFqTlViUHVtbHp1amorYlcwZmhGSWtoVXNnQVN2V3BJdEZOemdtUy84UTVTWHlWd0dxd25xQlJHK3lGaXVxY29Ea2gxem5QdVRpVnhmVDlBL3c3YmoxM0JlVi9iK0J1NWJoS051YzVzekY5WHFGWVV4UlIzN3hJelMyeFJpZzlyM3hYRGVXNktlSWhPZGRpbkhQL25VdG84b1lnYnQyakdqZHZ5NWVDTW0vSDVHeXNhNWN1ajNVM3J3b2owd2ZhZlNhS3JHNkpOQnVtVDh2RUlsMTJzbEVOMEtEdXYrbm8yM3JFbFBSUWVMeDErUExHZHhvdUdpQnFEY3BEZUFYd1k4OWZjc3dyWkh4dmZPSlR6L044WjF5TEJRUzFCOEJIamg0OUthTGRtMzI2N3R1eWk0ZnRoZlpyYmo3UW5NdEJ2c1BBRlEwS3dwOThZdUsyMHVBb0wxNTYwZTVMd09QenZrRUxvOHdzZGFubkhNRzcvblNqbk1XbHVDWGNRYUpMTCtaZDkyWTNQbFFTOGtMZWl4QTlsOGtaTWJad2ZtcXZjM3ZUUUI0aDV6R2YzM09XOWZ1Y0o1M253QVJZaHFrSXhsMXdrdnJTTXB2R3FHdk4rQlZ4Zk90YnIrTFZ1MkVOOFM1YlcxcmdPa01lR0lWcE1BcE56VlUrVDJMK1pQVFFraVVyeUVQdnpDNDBWYnRsR3ByU0VDUzFLbXZXa0dDNXRhNkRUSzN5dEt2L2VBRWR4ZkxaR0xlQm0rUStoT0gyL2tVeUduaE00MHlwUGNlVDZlb3BJL1g4TE5Lc3RDd2V0VnpNMDJobitqWVY0YWcwaDZiZXZ6aFYyTk1yNkVvK3IvbDc5eFE4YWN4NVlOMStDUGV2bzhjdkYzZjNpRUtERkJLeFFMWFhGeEoxM1RtRVVPbkM0bFpObHl6ZmhhNGsxZ2grS3J4L1VTamJMZ01sbS9VaHVUMWJFNldlOHI2Smp3ODJ0aXJnZ0NWb1Myd2t5UmFtMFVwYjlzYVFKVXZJSHRRQkg3NmNZM3JvTXkraXo2QlVMYzVxS2NiQzF5K2VLL0lQdmo4dm0wS3BkNTRSazVyYThQQkJtbUdoeEpxKzloSUlMMW5ialVYOGtlNnVVUUJHd1VGMmkvM2NOUUxoU0JmOTJlbFpkd2tBbDh4L2cvd01seTBQaGQwZmRxN2d0U0FLNk8yRGdMMFhDYXRJRmtTMGdTUlNlNkVPWWtRKzZHYTFkSTg0UDEvc2wycGpyWkgwbDlFdXI2M096MWJZUzlMc3A0bDlxajhlaHVKd0crMURWNkxEbE9PcWlJUk5OQ25ibkc5RGh1dDhQeG1XODM5SUN1VjMvdUw5WlVnRzh6SWdvN3A4a0RiTlBWc2ZuVkhubGxpY3k3WlRsdzd5MC9QeVk4M0xBbG05M0tnRnlrM1dNdVFJODc0WFpaQllqSk9kSXh2elBNVG10ZUNGazMvRjgzOTFraDFyZ1NMTUxsWGZIRlNwUFhYeXI3N0EydXRNMUVmeXVmN3JMNlBsQkE0S0lBd1d6WG1IcHl1MXFCQ3hpQ1Vsb1ZuSnZ1bE1TWmJsdS9hNXNkNGlnSEl3SlBNL2ZwYWtKREVVTUtXQWg4QXBtWmNDNnMrbDZ5N2JmbFJVTGN3VktMY0VuTDhqdVVoVThHa2w2dVVMSXQ4Y3BqWXNncGo2VGNOTnRGdWc5TmlMREtCQkFuaEJBNWNYN3lOWllGalFOVXlMb3VKNzlzZEl4a3NkZ21Mdnl1L2VRbnIxMVc4MERuMzNJMFlROURsL1J0S2xXSllFcG1URm1WSkdJUkVqRzgxYkZRbmhsb2xIdDE5ekhYNUNmbTF2Y1NVTUd2OEMxb0pOYmFTSzI5UUFsbENkU1RXcU9QdlYrVExJNklMWndxTDVGb2dLM3Bsa3JlbDFKVWcvQ0x1aGYrRjV3c29Rb1RiN2NEc3VJcCsraUIxdlZBRW1IbGRmU2hnZDljWjk5SkVGV2UxcWJ4RHFndjlDTnhMNzh0Vlg0VlduM3Vvbk54ZjRjNjgvUjY0N2w1NFN4MlpHZTRsQzdqMWNXUmNWdVdpYXYzMDNFV2xQdWV3cTFvV0xTQmN1WWtkcXdTZVBuQ3RiSG43SWY2c2FENnBYWFUxTTJEZUczRzdPOVpuU1VSS1RBbWRyOFRsYy9qMmsxL254c25XODhwN3EyclpCQUFiYjRIUDBYRzBNaE1NQitCdzVMcTNPMUVKd25HRE44eUdObndhL1pXODVhdHNnUEJJT09DcDVBZncyRUhiOWxKMlpPVDdYeTFNOHd1bFlpcHBnbWR4TU5nZ213d0ltR3g2U2xhWGZ5N0lnVWVjTkwxOUR2UzlmR3dtdmh0eldxeUc4ZXV0WkVyYmg3N0tFeGFUd3pISGFDNWJPZk9iNE15L2lwNEg3N2htUzlJM2taVHZEbFVsaXBETGd5bXVjVTFRUW43cmxTWVNldklXVjczczE0RHBqakFSZXJjL3pUUHBVeGoxeTQzMVlWL0x2dnc5MVduN3cxVCtvM2JQdjJVcmUxZjJuWGR2Wnp2ZnZPWmpGZ21YQmZUSWNLZEVJQUpwR2g3cDgwL0Iyb2p3cFV3ZldjRVJFeVRtVDJsU0ltdFNZSzJHZHBlbld2Y1RTdERUVTVOY2IwaDE0K2dSVkFDOVhJcXB0WGVZM3diTEEvdjJTQ093R0phZUdaVXZKaDZHMGlIWHB5WnRyMWlYcDF0TzZydm9CR0dpTlp6UUFKeFhWMnU5dkNyVU8zRHFKeTVJL0JBUmJRaGczaC95eTdxMmRWK0EwRjZJWm9VYUlWeElWa1VqdUc0ek9xQmxORWtucWluZmRCTlFqeHIxTjlHVkZHMk9VLzAzeTNTejl4T2NlWGtwV2JNL2grNDcwcWlkMFM5bjFpLzk0Y3hlSm5ObjAydXpybTFYd29LWk1La0MyaDFlTjJESlVMMWFXZHZmYVdETEVHRzlvWkdnSlFXTzlwZjZTZWdyZjJMWDNncDNFSTJiajF1MmJGZWMrNVh3bDVvc25HNU5xVERsUC9uQkhtekhuMDNNVTQ3bE9qQU5HaVE0QmN4RlN2dHpmVjh4N2dVMWtFQ08yVUV0TVY2NElZczNkQUtXb3ExVmZ1UllsTWVmSEJ4SmRwdk9uZmhIMG1HMHhkM210aGtCeWZoenNqTFByWWlNWUU4RHFDbDA3QXduaXJkaFUvWm5uZmo3R2JzeUVnbCtLcHkzekJYK3dsZ0F4WW4zYkRMbFhvV2NDUWJiNEtxdmhtUHV5YzlRTldudlVEWnJ5ZkdIUG9GbUVNQy9SZ1NXSWE3aDdTTlFYQzllaUNSbFlzclF3WlRzeldjckdVRzhsbXN5QmpLUkVkT2prTnRINnNSUlo3bThzZlhpRytVQjU5Ym01dzJ0MTB0U0VFak1BU1Fha3VvaWxiQmtVRUtjcUtpOGxrL21NaXJEQTN0SlJhSUs2bytsS2UwOVhKeEhYczgyRkppVTRKbWhDOTVMUnNXVVJuNmJGTGFUYXdmNkJTaWxvcTBpRk9odzBnbXJSbE52YVN0MTJnNHJ3WE1oR0s4dEszWHByUUw3ZjMyUTFSK1B4MlBxTTM0U2FOb2tuT29vMCt5ZWo4aW5jbFlTYTM5N1p2U2VQdjRYVXp1dVhEUnhvRXdTMTdRTTNYOU5PWkxMOHpndDJObUdlK0JRUHUxZDk3cHRmbUxBMUVoRWRVNFAyMG9lbUh4aXlnMnBNRmVSUVZHME9xb04zcnQ3d3NTVU5VVFVhUWtveU9YRnExOVpIbHB2dGZoWDhXdE9nbUV5bkcrVzRuaXZtelpzQ0ZneVpOMlUyMTQzUEVMZUR1NHI3S1BjbDZuM1VCUXFWWVdSVG5YS2x6S0xlRGVwYVJsMGJ2Y1NKV2VJSVEwTyt2TlQ5d3YvZHNRVlZqSnNtYlFBRFNRYm5hTFBWNUUvSzBRNDVhZ0dwVlVGS1FKVjB1SGFsWUVoK255QXBrMnBCbGFJaHZMRGF3Zi8vd3o4VE5HOUt0b2R5TVRZQVNSRnFlc1BtZExlS3pJUmEwaHQ4QXBDRlhic0VXZVZKKzI0MERCWGlYN0tZcy8yL05EazhlL01NR3NNVVp5MWVvMFMzQ3lwV2ppWEVaWnVQWUg3UTc3cDB1dEdoUU15VEFCazhVWEpGaWFyOS9HUWpETUorNDlFc2VlRU5GUnVNS2tHSnYvWnR6S2tpQ2N6U2pVaDIvQ1JnQ1p2QVIzN0NaQkQ2VTNWV2hRZHZRMUJFdk1BamZPU1JBT0VrcitxQ2lIbnl3SzIyWXNtaXBqeWZLbzc2d2o3UTd3dGlmbm1XYmt1eU14SDRLM0FINGFIeHZlcXMwZ2s0K2pZZy85RXF6M0M2TFVDZjJ0WVpSRkowNzZaTkhxMDlSZnZkaStuSzh2ZmQ4M3JtbE1SYWxZa2JhMS9GSnJuNy9vRHVndThNYllGd3k5RFFWZ0MyV3VLVmhwbnRPQ0ZjcGh2Wmp2ZnNJVWg3THc0TmJibmY5RjhwZ1k2c29WOG1nSTQ1dWVWMkxDc2xLQWRCbEZVa0V0RDFwa1lpRFlISHF3a2R4cExHdjFlZ2JJVmxKeTBTaWVqdGEza3BxT2dxVEVzSWFvcnY5ejVMUlpLVGxxeWd6M2tkTjB5RmpYS3d4dE5pWG9Yd3N6dElOanZnYXRuZEVJOE1Fd3VaMTBIYmdrRHJmQzJzSVJTeHFKYW53REFFRmJ2OXRLVTI1bUR3ejhBTkUyYTZDWSt4WWZGd1dQS2VyUGV6ckhvdWdYTzVaVm1RZXZVYmpPUENoNzJ5SEZSRlVjczFOK2MwVVJSRDZ1T0dJUVI5Q0MxdEdBUUJMYWFMV2xOTGM4NkhmelB4ZzQ5cXFoclYyNEpMNEV4d3NkeS9YbzVrTnlWMTlWVStvRVhsOE1xdEs4TnlWRk1sbEVhUm1BNkExdlBCL1dDM0tOa3hLYnh5MjRxSUZOTmtGWTJJTmw2cndaYk9wWmZVeG02TXhXbS92eG41L21mZGUwNHRNcXg2blM4NDRVUkxtRmZad08ybU9RdVBjdmR6ajNLZkkxeFluZjRqVTM5Uld2QkxFcmptZC9MTDNNVzhYL0xzNU1hLy9IY3Y3TXdjMys2NmpZT3ZzZlBiN0ZSMUw2LzNuR1RuMzc1LzN1a0haN3U1c1M3NURjbXdPWmU1YXZIeTdEa09NM081Z3Y3d3cyaE5lR004NWdvNmRvMVVlempmbnhnVVNLUlZJd3VwSUd1eFVwYkljTEhrMm1aZkY4Z1U2NTBtUFMvaVRzV3F6bGhCOVJZM3RkRXR5a3NDL2JSd0VYanR6bHBqWnVkY2g4RVBBd0JrQXQ5MDFycmhybDkvUHZCbFdYR1dNeWxKbGU5MzAvNjQ4dVpIcUc5M0Q0blNYZEJpVVVMMVRTd2k1czFUMTRXQ1VQOUdyZEdYKzJMS3l4SnRtZmlpRW9zZzZadHU4NzhsSTRlRkRkUTNHZG95OHAzaEZOVnJwRThHbkE4RllyNS9kOWE1dlhqbWQ3NzR4K1lDQTdoYXpvblRjSWFMY0ZuTTI5T1lyL3c4UFdzdDVLOCs0cSs0V0pSRWZWVC84L2ZrVzlFREI1blQyWXFCNHo2L3F2aFExYUh1YkV5ZXZyMEcvbzAxTFBmak9yUzQ5ZXROZXlzSEgwQ3NHcEIrVmhPVkdQaHduVGorWXkvVENEdlB6dWtDZURlZXJZa0w0SDVkeWQxQ0l0azdxVUxVVmJkRXloV1dOTVZQZFhKc1JST216VlVwazJCamI1blBLUk1qa3FlMk83dEhKUVdlN1dXSXFQbjVvWEZCaVVZRmZkY0UwWktxWTdkZDNLcS8rckVIWC9WWmdreWl3d1NaeWJXNjBvb3ZkZWZnK2lzZ3VHelRoc3NoNEtHZXNCRkNBQjAvY09WSDRWRHB2QnVDcmk5cCtORnJNWDl1L2IyYThFTXROODZjL2Z3d3NCV1U5S2lxYU1RQnhRUzU3d2Z1ZlI2aEZ6K21ZM2J0YnNNMGpROXFnbDloRXE4YVFJR3JTWnZ1a3YzL0ExNjJDWDhYWHJiUkNtbTJvUHUxaEhiNXZRZ2VQekIySUp1YzJxWGJ5TkF1K1NBQXB1RTNsMGt3a3BEajI0ZDFIWVdORFZld1dGNDhuNmF4ek10c0FDVHJYYWViMVFWVFdZTFZXTXl5a0ttUFlaOHJ6eVhIc005U0FsTjFTZFJoUFQyckwxZDdQU1BkeUxzSzBNVTMwL09tQzVobU11QjM1cDFxL2lNa1B3M05ad0VXWm8wZzhZUEVMMjlCUG91WUdsZUlhdlRYZE51OVJrR1RUT1dNTWx5Znp1S1BWZlYxMkVNcC94dHZFZEhkZVZNUWdPR29NV2Z6M0J3bSs2MU1vMUUwU2ZWdnpWdzd0NHpvUjkvVGo2VVd5ZHZkRTY2NDdJekgzdVF6WmdiT09xUGUzbnRzTndWN1RnTTA2OGIzemRSdGt1SThCRWFkR1pJL0RybE1ReFdmMFJIY2ZBcDRoSS92ekRJQmVqUTloWHZKUE1ReGVSZ0ZzeTV1VDJNOENia2c1dTBhTVpicDc3RVd1Z1o1emE2UUpuSzRqVzVJTk10TCs1K3NYWjl4cHNCVU9vMDQvRXZWRFpwRytQek95K3p6TXpCTjRjYnNwbjZhVTg2TlEzb3YzV1Z0RU91TXBtQmVqcUd6NXdXRTArY0E1MVNkQlpPd1hjNWYxc1hTOVM1Q2NFZm5zaE8xRUFzcmZJblpXNW1POUIzR3owSEdPVTdqbjQvTW05YlQzZ3lTWERpUTNIb1p2QllIdVJYTUw2SmVNMnU3QnVHYTRvYUdXZVk5bW9Sbno3eDh2YTZkZ0NhWWtNUmN0cmF6bjExUGZVZHIrUHp2bXdpN2x1bTdlME5OZzkzaTNPT2hiV2I2Sml1aWw5MzZvMmtGRXdvWnFkTyttSWx1ci8wTzNiWDZmSTV3aVptZXdab3llK3lESC9VZU1qeGxNTXVoeUFCLzk1U2tZWEk2SmFOdzdJSDU5R0VPTm11b3p2STlvZUxwalBFOGN1VUFmTnNsRXN6cmp4QVdBeUJxamZRWS92ZUN4bXU0U1IvOHRKNGlENlgwVDM5dy9xVThyU0paOWZzVWZEWmo1NEtEczFnVjdCTDg2WlFTODJuU0ZFbDNSSG1YYVhRSFhpUEVWanZBZE9WRWlVdzFrR0UzYTVSTHhEelM1bklxUlA2UnJHeWhHT210NE00ZWtxK1E0TjV4R3Q0L3ZoZEtWOGl5cUl1Mzd6TlhYYkRLbkx3RGw1MjloRkZYSTZvdmJhWjh5U1ZKWCtvaCtibUxienNlOVpOd2ZYLzArRzBYUHlkcERaSXdhUGN1VzlackQvSlNBOXhOeHcrQUtyQUNDQVdzdWpZVHUvNk9kN2VaeGhFdkJaNFB2c1NvZHArYlR5Wjh0aDVsSmRmeGpPTE5zL1JJbHBBUTBST3B5TTVKZ05ZM2RueDI3NFdmN1V5dlF6bFJqRWJsdHJQMTlnYlZSL3ZyTzF0blRkRlNkUjlTd0szWGJUL1ZGZW1Ec0QvU2VXcjczbVVrOVpKdjNRZk9CZ2dJR1NpcW5Bc0p6OWVKNUFzcjRYVTlRbVl2VWNleTVIRzRyeUV5RzRuK3RYSTJlMENGeldlaEZMRTdnVkN1bEhDbnAvZGpIaU9vVmIrakJ3RkMrekVqZk9VT29YanR4TlFjaXBxYXVMYVozM0VsQ0w3ejU2dDlvZFl5dkQva1d5MlY0V1FtMjVEVEF3RTkxNUROQkkxTGI0Wmd5eVcrbzJ5cUh2VmRzZ1hBbXkvRnRHQjhxYng4N2RMeHZqRXZkc3ByL3pqUktmL1hld0FLc05oWHlkZ2lyUHlYK3dKdXV1b2hCSUFEMEVOZitzTjc1ZnliQU9BTHVyL2hCY2Q1a2ZXUTZaRmZRR040dnJJc1BpeENyRkFzVjZqdm1XZW1sNWdYbXMzSUllbGp4U3pVSTZOS1hibm9GWWhRa1orWEoxVlc4UlNwTkg5QXp2bDlqYXFlRkcvQUZNUUl4d0JZMWdhZWFWMkdPemRWTTY3MWVvSkE4QWQxb3M5VUhkR0hZN0lRYVNBK056QVYwb0FlVENMaVNKMklHQjBOVGtmYk1senBUMXFkNFdCOUlMY3J0RDQ5aDJmbllMQ01XMCtqRTY5ZENJT3NCd09hNkxTODFCVTFTaXp0Znk3ajdSVGxRZ1l4SFEyaDVKU3BFZXBVTW5aZHdJaFVIenhTRHh3MTdRR0gwdEVid3NXQTJSYjVnRTd5L3V2T2xCQnRHNWdEMllnZGNEYVlFWUJ4RVBoR3dIWXVxa0h3NlJvRU45YnV6WU9aVHcrbUlIQnpuNEpFMEd3QWxDZ0JzS1I5RG9Bb1lOc0I4Qk16WWdjK3ljQTJPZytrQzN4MEp4WlltYjEwdDhTaEd1WThFemliTDZiclVrdTJmaW5PYlU5Rm9EM1B1TnhCQThKSFJRRUt2SERqcHJSSHJhaFRHa2xSMWVMeExHeFRXSDUrU3M4NzhWTVFRRjc0bXBkU245WXdPVDl4SnJjd1A5dm14ZTNsRnNtcndoWTgxWjk1VzhYVmpTako5ZFRvSmdSajE4WFNPZlpoSE1LTjhEcEJPalR0K2QyeGZtNjZFZmNjQ2lMRkRGM244Uk83ejJFNy94dmNHOHJMNGU3UmtYZThiQVpmRTNnTUNGS0N1MnZ5dy9kUWhyT0k3Ull3M09ZbmdRRmsxMHFpRzVNeWJNODRNOE9HakJvTGlQMkM3cFhNbktGbnJ1QURhdlZwUzdsVEFCSjRRZzM0VmZDNDczTjFucjZ2VDZzd0dQTzk4Wm92Rm9UcXA3OVBacUw5VzBVTi9KdHN5ZFYvMHdEUW9PTFBPN1MxZ1BUOUdFbE9wVHo5dEFMRE1lVllIVS9rdFRlQ3VhTDJzN2U1S0JVbDI4WEhwZ0pNRnlsWDdFVmErdk5mL0dqbHpBOFk3SjNQZzA4d1IrWFRQOTUwbGpiKzdMbm43TThURHU1MjhHVm5KU0NNNHVlZm4vUGxuMEdJNGxMT1E1MmRudHFWY1BJam9DWk8yQkcyOVU4OWd2ejhMNDBvMUxhTlZQWUVoYkJ2VnRWdC95RXZUUHlRMzlhZGY2NWp3ZUZMbzhodkRLOEV3dVU1VmNGQ21Pazd3L2t0RkhVKzUvTDZnMUZrK1VIYVoxYWZkRmZxWEJ0WDAreWRiaHZKQnVLdVBvRFFyVEMrWGFkb0x2aEJmNFhwaFJmdGhVZjVDR1ZrM2ZEdFhHWVhUUzFtaUw3SVFHN2RkZEV2NFI2d0VQZW9jZWcxWFpOcy9kMDlyTjVYTDJ5d0xpNWRBd0krc25ld1pHQXN0MjJpKytla1g2NFdab3IwK09WQjNvNXI1d2JCcXd6eE01bjFGSG9DeTZ4TUIwczR0YXVJMytyY0R1QmlocHEzaDJrMGt6aFBaeVl4aEVBSXZxc2s2L2NTK2RZcm1peVNpSW51bU92dUh6N2lyaHFDRDBRMGFWaEF6WkNkb3BTTVV1M1Q4QkVHTWR1dEFndXdqWkNDeHJGbkVUOGsyV2xpSlo0aTV1RzBMUTN4Nk5uVk5WNTltU0NvSmdvc1ZlUHEwZ0NHZ0k5UGkxbDl6Um85SzZaSjdrQzhjRklLRE1YVXBDd25zYWdQOFdVc1BPWEtIZmdRUWM4ZTIzNFpIOStlRzJCMjU0SGM5amgvMmZaanoxWUhYVVNaaFpyYXRVeFJsblhwUHRuV0owMVpXN3RXazgxSjNYWjlLaGtzNDF3L2x0d211WVBjSWU0dVRGUnpqT3V0RCtpakdVbHFybTVuZzZCMURwaEpvdlgrUnNpYUwrYlZRZTVZSFVodkpGcTdicjZ4QlhpN3dyUTA4dDBJUFdDZEE2UzY4TFAzSHJqZTJ2aGNXQTlSVkE5ckpNQUhEeTdmQkhNSHVnYVlobUNnNjBBT2JoNDcrS0R6eVVVQmpsSDM2SHVPcVJmMFhyZi9laFBkSDdHbU1UMnIxM29iZGRtZTU1STR5ZEtPb2EvZnczb1VkSGUzbXJybjY4NHB0cE01UFlKWmxxTHN2bGY4VkgyVjlnanpLUFMvOG5IdktYeGt1ZlJlUVMvVHZacElOb2grdXZwMmNaZVN2YzVCblVNOVUyclc1MCt1ajNIdzJJZUZyR2Rwa1RnSWE3R1lJU3lGVDlab3JKc3hrbUJZNSsyYVhQOTByZlRRV1VyTzEyckZyeTFDMkVsMmZhcVBKMS94NUgrWER6bkxoV3ZuK2lYdmVNVGRRY3ZxbzVibVlzWTY2RTczaFQ2NjNYTVg2TzV4ZWN5bGhPclVhd1dLbmdxZ0Q5Vmt6aFJBSndDSnhFS0NLRkZ0eEVjLzJYRmdXUzNiWEcvNzQ3Z2RNM1hEaHlUOE9ESC9JdUtWZFhjMlgwdDl0K0pRMTBkdnBwcHkzbGxXTnpOcXVYYkdxTzAwUVhhRXpSY3QyckpHc0NDSEUxbi9FbU1VcWRxbXR2NkpDd1M0NDlKZmtFUk81Mi9kaVlJYW1rdlU5TzhZUk1tamlna0M2Z1dyVkV1U05GbmNwelNwazVlUzhNSHJXK0JuU05xbVJ3ZFcrY3ZKdWF4TVQ1ejZxZlBVdHczai9vK2FTSXBxTHdTZy8rR0hOZDRmNDd5OTRsOUZ5N2tsM1BiNmRlTm1wYW9sYXEvUFNrVlN3N3dySzFYZTNRMktPdUVUQ1o4NFZoTGtGVUduYTRtcGZIRy80RnU1YnJHOFZEd002dlhkclg1S2tpeDExUVcweDBjbEVrdHk2YVNhbC9lSk1uaUYxYkRyMFVGNnYzdHE5ZDNQOHZ5emQ1TWtWVURWOU9ZUVNWSVZOR1NTb2tvTlNnbzBNREQrRWlIejN2c05ZTHpnaXdVRTM4Ti81SWVCYit2Ujk3OFhPd2lWYVBnZzJmNG9Remo1WE1iVlRTM014VitmWitZSVRlMGJ0NVFyQUZVek96ODRRTHd2enJrQitZZUJJSndneXVqTFNiSnltdW40aEJSOEY5OStqclphZFh1anUvejdlMitSdmdTZEpRbXhPaTN4NzcxVnVwZm1tTzZXWHR1bkJKL1lIa2RFb3pkdnF5Rmh3ZlhDMzBHNlJsMUE4R3hGT01tMDJrekRQVk9mTEluWVV1ZFUvRzZjRkd1THhlVm9UT2hTanN2a2F0NEZWQjFmTEpsMG44WDNkVyt1ZGRlTWpvS3B4YThXS09DcnMvWHBJVWRCMnBuMnRoWW1MUjZGVTU0KzlFazNWbllMeVNCVUlVNU5KUktiMVV0dFdEVDFUd3FRNVdlVDhBdGlBU3N6QndpUythS0hiU2thRm9QVW5ZYmVUdEdOem9hcGJFWk9XY1lKWTM2RENQNHNjcDBGamJsT0VuaENIU0dKeW9UTGhta3M3OFk3NFA5U0h0MUJJMXRYSEpJTUM1b2RvZkhzc2daZWtEZi8vYlY3N3NqTFFSOVFCZVhpbjZnKy9LdDYwYldKTFQvY3padHFOTVNIMSsxQ3VqYVR6YXFtZ2lRZkg1ejh5VWpGQXJ3bDVEL1lmK0hwMWNsQmc5Y2F4bUtoeWxFeTQySERzQnFNcVJ1emdwRGNTbHlqeDIzZVRGaHZkbTVPdDArb0lXbDBFMWd5b09UVFFuTXJDanZUcjhtUm1ITGVVK3MyWDZFRG83QzJFUVNCRURNUVVDeEwxZ2FhUW9kM2Ixc0xmQzBLS09VQUdDNzFKZVdNTHpaZVFLSzdQOVNzdXlkUmlWdUY1WVV0M0lYY3pZdEx4UFlpWGlsVXVURnZ0MGttT00vdElWWHZzWEt1WkRWZ2RwRjlxVnVkbW5yRGMwNmhTVW8zVWttQ3VaSlFvMWFxdGpQMVJYTUxoaHJMMmJ0dUFhYnJOcXQyWHFuYnJQcUpkN21uRU8zQnFMdXJPNVhjeVozTkxORGlWWmVXVDgrcm5SYm01YUVqKzUwc296SDg5VkVndGZ5U3VUblBhUllyUXdCRFErc2lMSE5qaFlIbmZhcitJVmNIdXJLN3E5V2R3UC9uaitGMlBmYm5HR3VUbnN5N2RLNG4rc1N2R0c2S3BxOGNuWDhKdVRvUXZlUmFNaTg2ZTFYZXBYTjBrY3JZWlUybjlBcHF4SHpES0xISERZTmFSS3hJRlc5U0tNSzhtakMyWjdJRzVuQVlKMEZ6QmJ0aVI1aWRvRFRhZ01BMWw0aVRsd0NVV1h2aE1mN0p6L3pvWGtGOENPd3lndnhONjdTQTF0SVAwUFplRXFLdzl3QUFTN3JYUGlTQ29QNjIxUHZnU21QL1FRQ3V1clR5bWFXaXRtYnAxaTBBWGJKMGVDV21RM3A0WEFOQmJkeXZabThlM1Z5QmRIZk9LeTVZYzE5SHpMOWowRENCcDJOOG5LNm5GTjNmZFlUYmM3Wjk1akZPSXNnbXdqWmxuYTl1bXR2K1ppNU82Qnp4NmFPMTNlRzhGWEhTc0JCLzhucC83T3g3MHpjd3pSazk4dStLTUYyNGMzMDRvVjl6UjVTM0FxQnRzZjNybmFwWEhUNStlMTV0dEVEZ0lydjcvR2JlMTU1L2tpc3dMcmFYMmJ6ZjgyZmY2K3hjNzgvN0hkd3gwMXdoQ2xsM0R6T21mS1VrYWRFZndBdno5ejBqeVVEWUcyZS9EYVpyMWJTUVNzbXVaclhxcXR3NWZwejZyNzdJMXRXcmVDNWVqS0c5bm1xNnFkc0FpNWduN0dySVRYL0I0b0Q4WUc3ekNSSnAybXYzdUs2QzdMb29raTBmTVM0blVWbG9GaVNjZTVJYms4Y2FHc0JORFp1U3ViZ3FUNm94OWZmSkRTbGxXSW1yanpjMFhJZkxqeXZLUHBYY041cUNoWWJKaG9iRVFPSldMSFE3TDlJYzgyQmNBUjh0SnNGTmljUXgvTFJ6VHlMUmxGQmo4bFpWL1gxRGd6cXNLQ2VTRzVMWE56U2N3Rlh1VS9CZHcwaHN4VS9HS3cxMGowQk1tbFhuRzJyTXhiTW5jWDlIdWVWMGRsMzFmdnJjM1NNdDdIYi92RzdUSjJnU2MveDZYcUpBb0RsRENSZ0FDWjlpQ1FpS0MwQ3l1ZUZkSUlrY094dE1Ma29TbUZRL09vSHZYS2NveHg0SC8zUTNBZEJ4VlNWbmNLUHFUTkcwL0dBNTRZUEJsZWNFbDMzTWcxY0NmMFJSd1gvTUFjejVsM0ZWdlE1LzV0aUpONC9objI0aVJVVnhqaWx4Y0NYbWRCVVNXaDlUdVJyL09rTjV4aWpoc3hkbVR4RnFZUlFoTVNka0MrL2U4Q2RzbzNVTDkvUjUwazNWdkJTemU2OEVMQjZjdjZlaEt4d3Zwd3hMOVpIZGZDRGkzSzE2Z0x0MXp3a3ZQR0lNbzloWUlQQnB0WDZubnFCeHhNMHBNQVpuNmQ0WFovT002UzNUaU1ZS0J1ZXZNRUw2RllWald0QTBUUUJwQmR5a0tMK0dOREs4K3NhdnFVdm5MQzhJUEVpcmNRK24vd1A2WXhUbndoaXJGN2x1S28xNytKazQxck53SWhZeHZDQnA5THUzSllUYzAvOG9DUC80ZExLWUJhQ1kzTHh2Q2duLzZKeWZMQmFYRkFwWEpRdUZKY1hpOStaZG9UaCtITCtFbjA3a0U4a0NnRWYzL2ZFUG5BT0EvTGlrOEt4N0J1NzVHKzU1VG85T2VJOEFGK095WEp2WGNqYmw1emY2YkczRlVnODZmV0pNVGF0akowNGpvZXBjZkRZUEpUU0twYUY3MzJqY28rdDdHdCs0Rjh0RkU5N2VuUXZPTlZwQTJrVDI4VzZuOEJ6aVZuSnIyVDY4ODlKQmk2NU14d0lwNWplWCtCUUo5UmRTL1FYa0FtNlRYL1Q2RU1CU0czcnFYbDN1NnBMMWU1OUNXRGk5elhVeEF1NnVud25QNXlqdGRvVDNPb2JTNk5sak56MWxROS9ZbUEvYVQ5MTA3Rm5uRHMrcks1MCtTOG1MQS93NTdtdUptK0RPNC9hOVovWW1tait0TG5rVGN3Y3MxUmFlNityckptMHE1TndzVHN5NFVLRW1LalM5M20rTGVncWk5YWZhZkVMQVRkMGtTRG05dlMwb25nL1J5aFkzYzVNdTJ2NnRsRDcxRmVHZHpXWEN0MVhqcFNONUlkUjlHS0ZnZTd1V2t3UTQ1YVhwMFluWXFhV0RYYzBJRGd3MHliR0lJTUZJWDBZM3JLUkE4alloTkZid0xTTjVtNXE3Z21tTjVta0swcnhOY0xBTkRBWkpIcWVER1pxdXljM2VaRGduMlRibmlicjhJS01zZnpsVmJjM2ZGWW11YnBlVzErUU11RVM4K1ZPUVNkOWtQeVFxajhNUFhTanV1cHF5N1ErZ05IendCbWNiaytZeFNhRXlQdmppem9NUVhMM0xFU2tFL3VPREQ5UnlpdFR2ZlRaRTk5T2VrMkVXN3UyQkwrdWR1U28xWStGYys1RHJ3dElKaXlUV21zVjRWRWphMGJwY0pOUTBTbmZnWVA2QmFqMFN4R2QrNGM1bDY2clAwbEZaaDh0RVRobi8yZDRCSlBqMFdEVGMxSGpoQ3Z4Vm5VZStJR3d0UXpPa21KM0Zya2JFTnc3Z01mUW0rODl3N1k2TG9RSEcwTlhmc3VyQi8xZmJlOEJKVnBWNXcvZWNjM1BkV0xkeTZncGRWWjFUZFZWTjZPbnVtZWxKUFJFR1o1aEl6d3pEQk1sUmtOQ0FLQ0M0QXlpTENOS0VsV1VCQlZTTVNDTUtLSXVpZnZJdS9rVEhzTHZ2dW9zSmRYK0d1bnduM0Z0ZFBVRjU5M3MvNkxuMzNGRDMzcE9lODhULzQ2VmMrejE1YkNiaVhrSWI2SU9EeTkxWnRMNDlia0ZlTkhGOWJqQ01NQUpHUU5vaHltSkFFOVdGaWJhODE1R0ErcnhlaS9zeFNmTVJuUUJXTlVJeE1PRE5jK2lwTkpDU1Y1RW13MWxURGZEaDY0QllldCttMW5oSVU1VkVZS2ptV1IveDQyNnU4V0k5Rjd6elNNL2pYV0xmS1RvcWVKTEF5MnNMVnVzd1NQMWJ6YTN2QkEzMEJZcFNXVG80U2pBcmpiVlgrM3FzR1pUaWd0eGk3Z0R4MTJabURvWlNRNE8zNm9UbEwvZjVMdENZYy9GRDQ4ZVlYd0l4aVZDQWE4TGRpb1d5V1BhZlVQTngrOEpOQVlvNkUrTDIzcE1JeG5VTGhmU2xONGVrV0V3UjA5Zi8zQWgyS3hyVDVlb2s2WS91cUYrLzdlKytwdlVvV3REOWJUaW5ScUpiSFQyWkZUdVM5ZjF4QUM3Y0g5cC9QbXBic2ZkcTZCandZaU1PTGpzS0lYU1NGcENDV1YzV1lsb2xsd3NhNTFySUNqQTFzYTBZRjVOaGRJT2w2a2UrelBOZnVOWGtMZlVHSTNoRXRRb1JIZ0RJZDlXelNGRFVTS1Rqd0VVSVhYeGcrYU1qcWpsWk5VSWhvenJaOUtOK0NhM2pJdHc1M0gzYzYzN2Vkb0xmWGkvN1dXYklvakV3V0tzT0xBUk1YVTcrUkJQNVJDVEtGSmlVQXh5REJBWlVwQW5PNk1Sa3NCMzRLc1cvck5HOFQ3UUFtSjZhWmJvbFhSVDE4UXRvYkYrMENSeFV5SmNsV2lqVG5xVDVQZnh1eGI4dURIcThaSjdoaE5DUUlnOFIyMDh6andaMTlUWENpYzNtbmlXMDdEVkYyYWorRXBJa1RUeENDRzU5Y2ptRUQ2anFYc3pqTFpnZ3pNd09OYUVzcUg0UXdyYkpEdEhRUURvc1lYNVJnVHhjU1M1UFlIYkdpdWw5STFBUUlNbjJCTjMvcDZkc0NvSFRjNmRyV1NrZTdpNGRIUDZsRlMrbFZwUTdTNllZMkpiYnB1V2tSTGc3dWFMY2xublRqcFZUSzNxVFE2RVVGcUI1Q1FRa1J5MXVUSWNjdUZyVmRYV0RvcXhLREFiVGhvMHZ1ci9ERjlzM3BCMkhwS1BIbHpxVjF3aTlmVGIzTE9IVnY0Ky9kS09DT3ZFQ1J6NEZqeHFRTHl6RDFjSDg4VjZGVkFmVDZCMjRVTDBaTDFBRlhsQTFtRzdISzBtbncvTm9KV21WNWFxaXBLTmFTUURFMVFQdy9GKytHcFN6MnVtNXJacG9Mcmk0dXhTM2ZqVjhvSnhNMjFKTzI1YmJIaENOaFpmMFlQYjRsOE1ITzVMcGNlQTRtUTBseFpGeFBSQnZHNm5RVUhJTmJtTDhCYXVjWUdZZHVZUnJnWGdMWHhwSXJGU1VEYmdtUGsvOEhPWXowOXd3UllmQWM2eWJHaW5wNGsxY2NmRlU4eE9hbEQyN09tS092SFEwWVhwZmJIRStSODloQWU2THBGTjRYamNsWHJYZFV6cHBpbXFHbERmT0VQS3ltUHArcXRBdnFZai9SeXpmL2VWdGxwbUhLc01Zb2g2WlBscGZ4aEFDSkYranU1ZktoR1ZvQkIwVGZOd0k1dHRLUm9BSjQ4RTVmQUl5bDlaaS9yN09IU0xXbXZrU0lDZ05VZ3RHYzlJc0JwNUl4S1lHcmlBRlhoZG9kSHpkTjQzZ0lTMlZQQVhxV0RObEV4MzdkYStBN3Z3K1hxUTNxbmhZa1BIaDNnZE9mM0w1dzRxeUZ4OHVtRkIwb0N0NDFFd2dYcEQxVUhRa3Axb0NyNEF6cFZ4Z094NlZvbG5xS3E5SWxtTzBqN3ZDTWR6SFczT240ejd1NktibjdUY3oyZExLWkhkb3gydXM0OGpzVVpMdys2QlFXUFlKMVJ0bFpFWWwxT1Z5UU5idFdEU0pRRURSWXhjWVltQjcvblE4OHUxMHNueGcrSmRtdk5SOThRSzhHbXlsODhSSkp6c09WdDlVMDhtZVM3aTV1UHFmZWpxTkZSem4yRjZjT2N1WElBb3R4NFFjSDN2c3RDUUV5Vlg5bk9MalRNdW1xOS9FdlQzdllDa05HY2N0OUxKdTcyNWdYcFh5TjZSZlFUdDgwVDBxMTFjQnNLb091bFhkME4yZktMVlZFSzZxZ1I3Y3FrQS83a1JqUFdoUE1rMGwyeWJiZlYvL1o5Qm40Qk9ZemhKZmYrSVR1UjZQOXFGb004NUVZaW1BaVJLcnpQaWk0Vm96YTlmY01relNkR0ZtdmtpTnU5UnUyeXpCdTAweit0akYxMzBLTFYzVWRuWnFPR1dZS3JxakZneUgyNVBKcndkVHFVSTRERzlBZjMvMitYZEFlTWY1c2I3b2FkR0J4ZTdEbXVOb2RqaDhseFlNYXNGUUNMd005MThEMFQyWFRaelh2WGVocUlKYys3bTM3NHlVSXZqdlZMWnovM1RtQnlEOHdKbjdQd0JWY2ZEVTR0U2VVRHpVL0dQNlI5eVBSL0c4TG5LRExDc1FIdVh0WlpHbkswTkZDb1dqZzhUd3hWUDBmQkxDUFZpYlozYzZTcUprVjd6TmZlUWpiM01yeUdRa3Fic0JYQUhJbVJXUW5uQ3pMWG8zTUsxQVVSQS8vRWtJUDNrSEpvSnlBQ0VUSVo2ZXVCM3hRQWI4MzdkbzFieXh4cjV4QWMzKytnNi9zeHdhREZOVGNEL3dzd0FVVDZSOGZrZDFXRHI2NCt1dSt6R0p3R0o3ZDZxbFRoTmVncU4zVURVSmdHcy9DdUZkMS9FODJYLzBXdUgrbHNxNlhwN3pPVHBGN01veWxsNlhVZDhCTHduOXlZM0xaRUQyQXlrU0RobVFlRHdOczNYYVMrSUNmcFFvbGJBTUpaM0F6SnovTWpFeng0a09vRnkxbldMZmNGK3dWQXIySllxWkc4bEMyZ0crVUtxVWl0VWkrSUJuYmJhcXgxaWJQMHN3TERxRzAvbEVYOUZ4blBKWkhVSEh1WkhBR1hiTXE4OGliZ2UxQkx3anEzT1p3QVFjYTNWR0ZIU2JVRjB4UlB6SVIyRjF1RnozMkp0NmJSaUozb3hFczNOR2FHTDViVEZDaTRFV0k3VERRMmVleWYzbm1FYmVtQ2ttV0NNTTR3cloxVEp0aHc3bCs4NXdxWVFiWXZaL21qQUpiRlRWR3gwbjJIRldHYmRUc1MrUlR3OTNFSGFubzBPTnUvODdTQnQ2enQvdU9keDBNWnF6eHNPZDhRV3hDa2xPWG9tTUFacmdqZGtvdXdGTHFaUW11SHFlUVlTWTUyc1VZNVE5QUZMdGJyV3I4UWJiRjNSRk5RUFhnNStSSEc5eHg5R3pwbzBtaGNDREpDVHQ3b3NVVmVTUnBCR1kwZnFEUkVGK0wvdVp1Nis4QU15b3RnQ01UNE9qZGpwb20rNkRaTFVsSGhSTEZ2RWs0OXAyQVU4ZndWRFBBWU5sc0t1ajd2dk1zem90b3V2dnlXcUZPOThMMm13R1RrazVxUXVJQlJQa3cxSVZDNDMvVitwOUIrTEZjZDBoY0d0azZ6NklBQThSN3NOTk9qem5mOTRrU3lEQTNNdTk5Skg3TkFmUTZNR0xkbWttK01mL3M3WWlzZFMyajUxYjhPR1VoSXlmZzV6R1R3a3NDV2ZCb2ZIZVJXWkt4MXczUFdLM1NtQVdRdmVuQkNNVmYzR2U3dDJuRFJ0L1pZNXM3eWZJZWdiQXZKTnROUFFRc25TQUNEdFY3Y2htWWEwREVpc0xLZEJvcDdmeHNHNWdaaXlMOXlRSXF0RnVKVUlnVFNLaThHcWRBbFlTSDVISXFabU9HdlN4Q1ZrT0poYVh1TWJ6cFpzWGt4aHRLVHN0TnRPaTd6T0ZaYnBjOVdTNEFNajM1OHlWV3dPNmM2MEh1SW1wSGZPNHdNVlhtcDdrNEY2V213dXpsSTN4b000U2QzVzBvRDczMll3N2hiT2VxNzM3U2JZSEhpQ1RuNzUzNlp3dnVXMVNUb05hVlZzeHBCczVxbUk0T25Oc3lqR3ltVnNIbmtmTHFTK1o1M2xlZG1nMFRZQkMyVVVkcVlYdm9NbENqa2R4RkNneVM1UEVvbUR0dFBEcTM0aFNMQzcrOEdVc0RjdkNUMDRKdjJzQncwaXN2U3R5OFg1bjIySjYxUGd3d3p5a3VJamdONmwreXhTYmgxbXdvUGNJZUZHTGE1TG03Z1gzYWtRQ2RoZisvY0Jpd0RBZUYvYS84VXAxR2FBZ2krNVBmVWhIOHV0NHBNMEsra2VjWjQ5L3pzdjd5V0kxSnJrdDNIbUUvL0k2a0ZpL0hMWmpwNXltYW93TUdGOWRWaHN1QTEvVXhRdUUwT0t4THN3ZlZBU0NOd1Bxb0JKbVdMeUFQcFdPQ3FxYTY5V1pnaTc0T1YzZFROWkd2TW1TWmVBTXNtbDhqK1ZValRzS2ZJMm9DSFdpTGZ6TFU5UUJoUUNzd3Q2bmROVzlrNkN3Z3IwM3VQOUVJTlRCR1FvV1hUeC9QTHhwek9KNzZRK01JUGl6dXBrOERXOUM3dVZrNVR5RExBdmd1MFQ0bzdsVi81Mk5LRStlbVZIY2U1bUJaTnY3M1h2d0wxVndqcUovMmdqTzZSUGhQekhiZ0VtVUtaSm5EcXJYNnRVbzNka2wxRzliM3dJNXk1MDJEREF0QnlVTGZJdHVBWHhBVm0rNXdBbXE3cC9Wdk9MK1NVQ3FjK0d0WkF0VnAvbjgveUNJRHdwWnNXM2lwRUxORFlNdVoyVUJzQ1JiaHB3SlBnWW1sR0N3OFo2Z3lndGdRczB6dmhQT3dtbmExL096dStibVpYZWRNdVpCTEV6N0VaMHRqb3kwek5iS0g2SUhVQnUxVlRRelFFYkRZb1FHc3dDcVpXd3lmVGU0Zjh4c3pyaGY2TXdBZnZMaTk0MXM3UWQ1d3pRYlR6SmVEa3ZYWERMcHpwWkdxa2YyN1FKTGhrQ25VZXdzdXBkNldTaDkrOElEbURhVG5KOWxRcDJMVFMxOGsxVXJpS1Y2ZFM3UmFZZ3FQUnpSLzdJNmhid0JaTUNXd0hMMmFoYXFFdHo0dm9zbkVXanJCS3N5bTlOQXd0OW11RC9xUDMySHBicGZhTGNCNnQ3OHZ0SjRmeEpJcXVMK0VhOFo3THV1SVlNMUdYUi9CM2J2dTdXNnVBekdFNG0zT2FPOXE2aTdydzh1d1dSYmNXZno3WVZiTnczQjNvRUUwTlEyRmRDWWNjWm4vd3pPVWwvYTAyamU4R08xbDAzRm9tL3Z3bHpidkVROGZUNUFMRlVGWjN4TTJKQ25kQ1NXNTJMTjUvVW9xVDlCOVA1UURaNVRHUU5NK3dpV1ZDZDJCVDJNT2VlS3padXZjRkRZMEUxbzczWS9CYmV0V0VGU2VaRHQxZXJJUUNLRnkyU0Z4Z3R6UjE0emVFT3JUcWhFWVdsYWpTUnY2RzFsTk54cDJvNitZZ3RNeHZwR1ZlL0I2a1JWTTBBNmZXQ002UzdIRHFTVDU2MmhvZmFuRUZEYVUvQUxVZGhjYzk2UG11K0QyMjRibUl6RWxwWlg3WUlrd0g5aFQ3a3FvNGl1V1VCZDNLZGhLVE4wdXhFUjVHcTVaeUZaM2NIT05lV2xzY2prQUgxcTMyTFZabVBvYmVxZjVtT2xjUE9HZjZYMW9IN3lXVExOaHN4YmJQY2R0bXQ0YzZiVnk0eVVpV21lbEdlOEVMT1dsSHlzek5hY045QlBVSUV6TVBVZ2VSUkVqckRhRWM1emlzS3lWNjNkODl0b0FiTDIvQXpuR0hFNCtsbjNxWkFraGNDR3p6NzVKcysvK2VUbDdxL1dyZ1gyNVhlU3hPOEZOYTRlUGtnOUpBOFM3ZGNoNnU5NCtMQ0M4bEgzc1hZNW9oVGN4Nkw0VjArKzJlQUNmOWl6NXc4Qi9xVTc3M3dKL0VyQnZ5QkVFZjh1SGxJT1VyL0t3NGVVQk9mbGdaM0djc1lrbFRHWXFyRVArTEQ2dEFpSkhod3pFeUVLbGI2WUpkOG12alVsNGkzSE5KWjA5REtZQ2FJOS9yMkVLU0ZKY3JIeWM2YnNXQXBBWWs1TldhVXp3cmFNSkg0QUFYSEhPbGtHeEtFVklhaFlPVE9RbEdPOHZPb0RDS3JCa0ZSZHlGOE9QeThpeFZZemkySUg3bFVFb05pSzlvc0xRa1V0WWdJQ29iUC9FaDZkZmw4Zkh6UmtVUy9vZkc4MmtOSmxYdXU0dHRiN3ZqVktrSGpRVmE1WS9jcExucDNoOCtnaE5NVjlnTkIzcGxPTllocGZNbUEwSW5tMnRKWVFZcHJ3dHVSaEdtTFNING9RUmp0U3B6NUVHZWpOYS95YjJyemZoano0ZU85eU9CUW0vNkpoUEtuRFdDSnJBMFBoU29TSm4vQTFOU1JMRXEvd3F6NFdrQ3dkQzFYdlY2SnlVSWtEbEhic2pCeDc5NjJDeE11NklBa2F1bmt5Sk1kTlIwVzZHaklmVVRzUHRTUFZ0a1FuQkxzbm9IcExmUGQ1ZVBrd0FhcGxVOTBpellTRkN0RmsxZG82TUl5SUxoaXo2QkE0Z3ZEZTZ3WDBEL0JwdkxaSllieGtmdmdBZ0x4cVNkYytYZXFTSlNqRTJsZTB0eTF2di9DcGRSRElnaGFYK0EyM2JtaGIySlpLNDhlckZ1S05iejRZbmI1YzFnUmVzSHRqbGJ2ZWRmT2hhLys4Z1FkNGtWdTJxNXhiMDZ1RkVBenFiUXRTdVMwTHQvenVFR0hqZFFqWU53Q0k1UVRBTC8vVWdYLzRkOStmNjNrYXp6M1FpaEZCb1g1ejg2QU9mR3dEQWozcHdUT0pLTnZ3blpCYVZya21xTHY3T2QxUndBUFU4V08zT3U3em85VHgzak5VZXZ3c1NXRk9lSTJQVTVzK2dmYzlCZys2OEZkd2NsdWpCMDRLeU55aS9wZ0hEdjJYYjdTZ01jTkVxeWJuV0IvbTNyL2l3K3psM2FMOEhQVklJWHplU2IyWHcwUmF2NUZaUVhXUlpLdVpPWGtpVC9mTEtsQStlQlAxWnAxUjhSamlIMUFUclhscTRxVHZDRXAwZ2FxQkNVWHpESnFVc0RsRWtNaFZtOWhSbm5pQjZ1NVBQSlFSWnc1NlpBd3plRFNVbE1KekJNSHZRYzdER0FtcEx6ZW9yeldzRVBBUjkvdVlHNXoyUlJBUEhJamhpdCtQYVZrSXkzK2NselJDUWlMTlZGYWt2aDNNcVdlWWhCRkVRdWpPUHhBSG1xb0VseUJOMFJFUDJsVVIvRkJ4TlV4cG55YW95VStyY01WdkZjWHRsQlQzczVZdUE3QVVpZUNYYXNMTnFjcWpDcGJobE1jSUdmWGUvUUI5ZDNiK3V5dmV1MHROdXUrQUtMcnJ2NVdrUWw0OWlqUlY0eEVvS2hKK05YRHQ5eEtlOW9MdlZNQW52OUh5Y2x0VHdGSW80WGZIM1hISzdKN1hEMnp3aGEvNzhRbitXRDNwU0owL09rODJJaHNQenh1RUlxM1hqT2YzMjRmbGpNM2NUdWFsZnFLZ1plQ0h1M3ZwcXIzNFZ5ZG41MGpLVnBiT1BSSjJjZzRoa295aFFjelJzVTdNNDlWNkxocHFBWitZMjdoUGpiTlpubVhMTHZFYVBKZEF2TUFzS0VlQllWczZURFlta3dCcFZ0QklGYkNzMVpHQlg0d1h3ZkxHV2lnQytCVUFwK2RGMTlCZ1ZKOXlrT0pSZHdxWVBTVXN3ZGlRTjkwSytEYW15VGFXYkhyeWpaKzE5NFBPM2doUUpVTXptNzRwWC9WOHo3TTBqKzAyN2hDVDBFOGlaM3VLR1RTSERrUmdPaG5BVXpqa0srektWQkwxUGN0YkZIbVllWnhQRTB1b1lGZmdKOTJIQ0JwaVh3SHNwSHRibGQySFpGV1Z3VTVablczNk4zOHFrNkl4SUxuMlFrRzFGVGtnU3BrTWJNZ0p6SFFsaVJVL2pWY1pHYSsyK1FJQUJmZW5MWkF2ZmJPektJdGYwRGlUdlFqZVUraHJPT1FWOEI2eWJUekFIRVpCb1dkN0oxVWNEcHhiSGIraVpncHlQTkIzQ0tqVXVhUnplMC85VUY4Z0xndG03WXJ4NnJrZmJ4VkwzSEV3N2NsSTA0QmdNYzNMQ1krbUdzdUp2QWlmMFNrQW5HZWRRdFQrUUhBbEkxNUVtK1Q3Z013bHJ4b3VpU2hmRUhrcHlFVnJuRk5xUnlVT3NTa0JPZmpTZjlDc1ZWYzM4M1lCZ09uUks0S3d6ZjJPWllIQm5UdEJ6VGJjSDE0dzR2N0s0bC8rMEpGdkNiYjduekQ1WDRlSmxIb2RXMWJ4dXNhVGZBb2dwVTF0Yy8rWGU1R3NnTnRBKzJsNy92SktBT3pGM096NlJISjkydjJWKzNGL3pkdUx4MDA3eTdnbGVVcDNKamtROVZTR0d1MFIxYzNqWGdZNXU0L0MvaGpObUZwMGltWEJCWjJkaXdBdmJLc3YyQzBxQVpES1RoWTcxem1UUS9YVnlIQ1B1ak5FRU5mdG9BN3VJOWEvdjhnS2pFSVl3eXR3QnNJMDRyRmdOR1U3UmhqQVNDQUpZUlp6RTJBbTJHQ0UxMmh3Vkk1djV1TEIzL3hqL00yTGovR2R5SmVPeVlSYmJzMk5pNGUwNDRjUTErck9LRUEvb2hvTkFQcExoY2w0YkhOL3ZnT0ExZFhhS2dnNjg1VU5UbjVqRythNDJEM1pSQVRxOEhNdnZmZzV6SDJHRW0xd0tjczAwYkZZV2JFUFhqOXRMaW5YaUEyclZsNWkzbmd4UVB0R2xNVWQ3SlpzeFhDWFdZcTBoT2RIUmNVR3o1Z1ZMLy9sVVpUQmRaamdUdVYyMEpsNlhGMnFmWE1JYWVVK01PL00vTHFVbWV5YVo3QkRSSExySWc3S2dtL2w4Z0RPQ1hFYmNvTGtaK2pIZ09YdTZDL2wxOFpqcHc3a08ybmxjZDJITmdiem05cEtBK3lHYkRJQ2RQajVGLzJxMzVmc1RPSS85NFpDdFFEYTRraEU4VGIzVzNqT2RTWVM4UHVKaDI2Ly9hR0VtZG5RdTJmL3dmMGRreGs0VHBwNHJMOXprVHF4RDEwL2JTMHBWNGsxcjlveFl0MTRNVVI3UjlURkhleVdiTVYwbDl1S09JcGJTbElzOEJWenlFdGhjVkd5VUVqRzhnamxZNHlBTkY0MHlwRDRKZlgxVGdDZ3VmOEY0S3BCUDJiaEx0U04rWUFDVjZPWUtCVHB3TTlVUmNLVi9EeXF3SGV1enVHbUlabVVQVXNtaFJrV2pqK0ZydFBsYVg1NktuakdOSnFXZFpzZjZZYWJ1MGI0eGlQdzRQcmcrb1BRblE0SDQ1cWlPWm9haUlHN2dyR0Fpc3VLRm9mZHNxNU1YWVBRTlZPS3BqVCt1NHY0WjNmQjhvWURKRXVxOHA4Z0ZneUVoSjFxSUtEdUZFS0JZQXdjZDRiejhpdlBvaVUweCs0Z1cxa0p4dDd4cHFUV1NPOTZLODRXNGNHMm4zWWFjZ0tJbDFSdExrVHhpdWZKUENPYi9oWlNpNVpRRThtaTRlRFNuQktVNURselVYayt3Z2I3TnBZbk1FbVJKM1B6R1N5cDVZc2s2dFZlUDNheWV2NVYrT3VuMytab0poUzhkVzdOa2lMZU9LK0E5bVFGNWN2ejBsWmZFK1lEVUpmQUN6eDhoaVdvTlRIOXZwZWxtVjFPY005UXpHam1xNTV6eHBKTWJ3NzZ1ZXA3OElyNXJwUHp0SWlCekJNMGFqd2lHQ2F0V0dadzlPeGtwSG1TcG9YM1FLdlp1WlB5dm1mcWp0clYwOU5GeVBkd3JUYXNuRTBRNmhPcFZKSm9Hd3VsWWtFNWg0SjVoWUJEd0tzQzRXZzByQ3pGRDNtMndmT05aMzN1K0Y4RTRWOUltdnNiQ0p6MWdRc1BkSkpsWk9pYVc2OGVVcFppdmpHNWF1T3FKSTBHSys0K3VLdGRQWlhnZVZsOUZzR3hrdTIrNFQ1Yjh2bjc1Mmc4OW5JU3ZWYjA0WFVJb2ZIemM1Ynozb2tjaTBPZ2d6QmFZUnFpU0xSY0dvWFV0eWhLYVpWRSs5c0RWWm1MQitrRExBa0oyM3N1VUo2ZEV6M1cvYjg2blZ4QUVVUVVNUXBuTG9yV0VvVlY3YW1vYVpwdFQ1eEZnSnhVZCtzOXIvSUs3TnRVamxTY3NTcXZpS211bUNTSDlpeHM3K0JmN2FFS1dhYVdkWkplWWl1NnJVelNqRmZyaUxKMTNjZURwNm5RdEl5MElXY2NJNklPcFRvV2daQldHOWp5R1lONGdLb1cvQVQvNmoxZEhXQzhKemFnUkVVMTFOc1p4WE1yMG5maDJEMnZ1a1RKbkNVYmxvMkxyRkJac3Bra2FwREpTZEtCazl3OHVhbkNYY2JkVGVuOC9PeGgwVXJZM3pQZE9IV3FKUGdzYkU5UXR2QktOTGVTUmNtaVhDNjEyRnhidTByMHUwcWMzMVZTVGlKMGtJeE9yNzh5b0U2OXFTa0VHS0dFOEM0bG9hNGowUW5LR2hwbk5ENVh1YVdrdEpSdUsyc1Y0Z2RiM3RJL0JIQVQzZnNxWmp0Q1NRdXpINDlkZSsyalBCanNCN21oUUVzbkxvemhUbHhaVEVWTXcyNy94a0h3STl5SlZYY1oyUEJZVmdKQWhIWXRuaG5MajE5UXpnYWRvQllJbDZYSUE2ZkFPeFdnc2lSbGE1cU56UXc2emNaZWpXV2ZvR1RsSzlNcjd2MDJ6My83M2xoTU4xSEljRUxYUG9idzE0eGYwSU4wQ3lMTDBqTzYzQllFWmxpdEpEc1drVXpndzcwN3Z5aXpucjQ3bTVVZVdCc2k0Y3lWUkc2UkViTUFoSHplaUE5cVFCak52ZHYzcDM4Vzg5aWNaK0dneU9HZXdZSkI0ODhUTjR1K0tZeVF3RlpTMGtRT3J6SGtjS1FTZWRMOVY4VUpXT2pQdnZ3NVB4aDI0M3pFY05QSzk4MEFua0tHQXdxSUI5SVcwTlEvRWUzQ3k0M3YwcDhOdk9yWnQ0d1RRWVpyK3dsa3VFenA5by9nbjdnUmJoTjNrSnZtN3VVZTRaN2l2a2kwaGhrcXVETjlFc3Y0UmdhVW4waUIrazZ4OUJ2OUpMNkc1bnVrSGd1NGFsRlJJdDZnMFZwMVRuZFhwREJWVkp0TWxGbkRYbDZBNGFJSDd1TGorelBhVVN0NUNRSUlzSXVYSG9DOHVoS2hMejdHR2FTTTJ6SXYxc3RVSFNiQ0xSSUl4YVN1bU5obXprOFA0S2Roa0lDcVJtWFZrV3hoU2tFaFU5TGhxcFZDUURLeFNQVXd5Q3RXS0NpbEFhYkxKR05BdnVqcVdBTHY2Ky9yRWJCd0xLaHFybGhxVitDaVZFNU5ta0JKeFFZcXBtMUU1VmlNWDlnb1Z1b0xxaVVWaFdKcUxMWm9mSHpSQUkrZkcxQ1FHb05CMW8yanB3Qnd5aWp1T2lBY2tNemxoNDBnS1lOTkJQQmZHYzV1U3VuejB3WmNaZ2RoeU1hZklBSEZ3UExacFhvcXhOSUhoRks2dUhvTUVTK1hzZFZqRi9YUmpKK2R1NTVRbEw3ekxqK3ZUOEQvcVRHMWVQcWUwOXZWK0w1OGpDSnpSRk9MUHJTMmUyTkpTOWlWc3hkc2ZhanhueU8zemR5K3VFVFJPa0x4aVU5OC91R0pBUjRDUTAzS3pwSG05eTQ1NVVlZ3AyQ3FaNkhLWVlIazFQU3dhbWJSei9HY0dNR3I1em5jQjdoLzVMN01OSm9uSEJoMGp2elZVVFhxQjZjMEU2bFM1aVphSDY0VjZYQTVmaFFKellDVzFwRVV3ZU9ETVhFc2s0U3ZGZzJUY1VSVnAyUVl0ZWkvL2VncHVGS05TYW9qVzhjUGpVNHBGSk03WTBMV0tEcmxlQ0llTDRmd3NKSmlVL2lZRENzTC9EaVc3TzBrYVphbGZQdENHV3Fxa3BVYm44V2pCZmRMejJETEFJSXZDQklmaVk3VXlTQ3lrWnFLRGxSQVRuTWFmZFVGQzZvTzV2dVFnbnM4Rmh0WmlvZVFydEFSRklVZncrZHVKcXU3T2k1b2dxSE1LRUNmTnlxMmI2ZWpvb0svQWFxVjNLYVVwa014azgxbVJLaHJxVTI1UytsWTB1TFZ6cTBEWk1DUUJCaWxYWldkRzlTRUxJS3NJSDUra0l5VmtOcHozbnN2NktFREtLNjJiLytJb0FnREI2dmJIcHpJeGZCdmtqSWRSRnZXQzRIRGkyL2JzT24yeGFHQWhHODBrQnlLclh4azkwNDhndkFZSVNNSXI0ZnFUWjBreWV3NGZ0YU1HcHZERG4yMjZVOVFQMFpQUlBQMmhBMlNaTGJZVWhibzFzc3ZNc1E4enNIYkxielZMcUpmQUhUakhwMHJnNGU2THIzeGtpNFpSZUpLZHNmaG5UazVFVWJ6czVVOWhRV04wSGc0bVF5UE4wdGZyUzFhV0Ewa0xJUjV0TjZ1QUxJU3gzNzdBSmJlRHM3L2RrQThCVW1ZeEZDRU9FMVN4Z2RmampKVUdPcmduaStkcUNMMXVic29zaC96T1dSUGlucFBtbGRaZDdraXBmSzQ4eFhRRVpka1dZb1ZCUUsyS2NsOElTWXA0T2NucUxSSTdsRkVoQy9UbTlnVGRMeWNseE9pb3N4dmt3ZEV0WkFXVlZWTTVTQzVCK1pqV0dwUUpUNlJCY3AvSHRjNC96THZ1cUVVMHZUNTlMZE5uZVFWV0VhWXBBaTZ3eDdvS0VrSFU2WktCU3d3MEg3R1U1bGR5N0RRQWYvWUJDR0tldURSaXloejFSd2xWSVhBNkk2UlFHTThneU1VOWcxZENyTGRPVnpYQUdBRlRZRzBBSUFjd01WY2R4YVR6VVN4YURxRmNuSmlJSk1MWDdobTg4ZTZNOVlYM3k4b2lBK0E2RExNdjF5bllMSzlURlhBMkQzM0pwTEp4SGRVRllTSllUYVJ1R3B3YlFEUDA3V0hKc21GalovWW9DcXF1bXA2VlRRYWlmemtzc1BsMFRZTmdFVWQrMWVXK3RyYXdlS0oybnVVWnlVZ0d1Y0U1YThFVlAwY2ozNHlmT3dnRitiS0h0S3loeG5YcXJjYkxrY3B1akpUMjRXSmdwUFlEbHNjSWs2R0NJNHVteFUwMGNkWHBwaklzeGRkTk5Yd0FueUR4a3l3OFZzV0JFeDAzQnRPQXFnTXQ4N3lRcXY3QzZlZmRSR0J4U0JaMEtuS3pBaENicDVVMkpKWFR2Q3dNY2J4Yks5ajZXSUh6UnBDOHBQNEllYTR0MzI1bkFZbU9aVVcrSUE1TUlHS1k0QzVXaE81aE5CdjhnUksxWWRxeDZRK280c1BDeG1zVUwwSXVoVnpmcmRLbDUxdWJidE1Pb0tsTFVkYzFnZTM5aTBUTDI4OEZra2o1eHhpN3QyeTNCcmZDb05wK3h3THBkMHBKbGNTYjdJdmR4TWxCRTBrbWo4L0ZOZkMya1c2QThiTjg4L0hNeW9aVW0waGdSZmNoQlNVUWtrZ3dYSGRZVFpwMjJ5ODJiOEVnQ1g5dmZnMjhPc3A4c1FqazNzZzNETjVCeWxQdVU0a0FiTk1jSjFOSTVURzkzYm56NDREVlR2ZktLVDZsOXh5empteUxZWGlvaFJSMVlna1lnblA4UFZoYjZEM0lZSEVkeFl4NTFrbVBKRkE1b2dZdGt1RlBGWGtVUnNpdFIwdUFiV3lYVHp1QXJxR2VOS0dkVGRyR0pqNXpaUnpTd2J0WUVEV1Z3eGtzejBqQVpKV1o2YXRuQjJkT3p1eTlDb0k0QlFTZEJOdWdtR0Q1d1gzVkRPVWo4U3JpZlp1MWF6bkpVWFFkZkRIRlc1NDduVG9WRVpEMzhDeXBzQnBYSUptR2VHS3pTUXY5Vm9kVkl0MjFLc0lIaGpoRTllaUNtaFVNNHRwRnVFaFdmSy96TlRkcThETXVGY2hYUll6OHo2Y1ZRZHltdHJJRXJzS1BLbzYveURMN1BzRUVWNnBySERiUitFU3IyYXErNWRYajYvV3Y3bnZWZUFzRWJRYjQzanI1WUo0Q3Y2Y1V6aUhJK2hYaTZqMmlmcEdoblBobkFmQVdtMUZDaXZVVzBJZ0N3d2ZqSXgzZklDZWJJczJWRnhqdFBjdkh3ZXBNSFRENmNiMy8wVXpUWTF1NnU1dnlBNllBZE1NdkZJajVWckFzZ0x3OFdnYkFHM1JzMnZ1Mm5BNkhUN2Z3cUp6MURySGpKb0FtS1RNOXMyNFJmZzE4RDNjRDVockl3S0xwNnVHczd6czNpWEw0cWNGamYrTUNGNldMZW03UFA5ZHFmbWJ0Nmxlbk1WZlJNakVoVjloOThveU9Jai9kWHhYRUw0cmtYZk54MTl0TzJhdFoyN1BoRmRrT1FwRDVueWtJK3FFZkI5UGpMYlNEQkZ3YnBvUG52b004VnllNFhtb09OTEh5YjAzTW52STc5QXRTS054NERtdXlDM0ZLL1VPN3ZEeDloREpWNUVXL0FJMUR4WHl3elNkVmFnYlNKVTY1V1VMSkZ3R1Z1clJna0RzUXhXUy9LS0s3eXJRR0JKTW9Fak9ORUpsQ0R3WVhyVFFoc2FaQ1dLK1NNQjc2SDRDOTFURU5FOExrRDR3YjJsY0NtOXUvTGNRTStQdmtWQktoTzlHZ3FrS2ZlYWRqdXdnZE1yQitEbkFpSS9FZ3BPSUQ4bDhXeW1rQ01QYndoblZES2ExV0VCZlVzVHJ0WWFmM3ZxV2xheUQyUjkrZ2VOZWFFYkw1V0JJMDRDUitQVmJhU3h1YTcvNXdIbkRYZHZ3NG9SRXpacmh3ZG5qc2ZoN0N1R0VJRTdzTm95VUgxc0FYNE5iT1k2T2pETHhIeGtpN0hZcEQrR2RvNk5MSDFrMk9ycnNFWERkblY1cDZTalhqRW1ZaGJOY0NyZTU3N2xXYm0zeXB1OWFNd1lhZmNxeXppTkx5MUZ2YVNIb3YrZFQvd0hRV09xRjNsOHBLeXU2MkhWL0xTc3ZFM2cxQ0dhZFR6ZUR0Rkh6L1VOY2pXSjZsMHhJczVTRkpYdWU0WXQ2cXA3b3MxQzVTdHh6eVExNUVUMWhXVE1JUWVJczBJcGJSY3JIZit6WTFGU2pHUWlMUDNnSzB4aUJwRFR6TUs1bW04Zzh4OVFnNko2MThJMkY1V2JhakdiTTFveUhRamczYWl0c2lSdnlFaHF5TVR6UFY3UlZnM2wyZ3dCRWcvN0NpNGxPZFJGdmh5eCtrZG9aZjdGOUFJQ0J4b090dnFIbnRXVHpodmVCL25aM2RYcy9TTVZ1SXpybzIySXBmQVo4dnIzZnZjN1BCZDdma2hlY09JR0tMZCs4RU5PKzVWNjh4MS85Y2tRWVh1clhRaFVvVXFIRk1qbVhaN3JZTFAzMUdwbWE4bUpBV0tRTmpBeG9pd1Q5UlRtZ3l2QjFSZnZVSnRBNzBkYzMwZXMrVGtxOStPK3ZWTEh4ZXlVQUFyZWxjcm5VYlFHZ3llRHpzaFpRdnBRblArdk5zeDNYeXJ1WmRMVDMwVHFmek43SzZsVDI0U2VhQlFLeTB6UXMrcUZJYzY0a1hnNkxmOFM4MkgxMERPMHhnZytFaWYwbCthVVEzWUd2dVZRbkJwN1ZIU2ZOenFIc01ZN0s3aFMrbUF3RzM4TGlVQ3JGeENLeWQzT0ErUnlDYTFMRXJwSTZ6cy9qcXIvaTUwSE1WTGozeWxJR1lwa2JjK0tvSDJMQkhSSnZnMElWejZheUFVbVBscU8xeWlpc1Y4SUYwUTlhclJiQ2xXcWhSaWptR0o2Ymxlb1k1dVVyOVJxVDNZZXc5SDV5cFhtQTF5VWV5V1lJeWJGc1dNSGN2QmxVU0NndVFIeG13WUE5YVBNWFZZWXlDODY1Y0pHVnFNWjEwdzRQTFVpTFFqRWpLNDRzS0hCcWlqY2pscGJLaWNJSzA5UTFMUkEzSFJFUmZ5QjRjcytUTkI1TFVHM0QwanNpbkpJUWFjdGJiYnFzbUprRUQyRzdJc2lyN2FpSmVGQ2hZVWdWV1VFUVgrQkIxOUZiSkVIQTRqeDRDN2cwSWtraU5taEJDUllNejdmK2JkemVnTWJ1cTVoM3lIbFN3QW5HUDhoRmFUUkZsRUV3U1g1bUxLSkdaOVphTnM5dzI0dUk0WWhRRFNWODFSLzQ3cWVhVStBV0Z5NEhYMUxVdWdMNjNNZ2lRWHRKMWpSSnFRYkRZS0R3RXBsZmd0WWYralBSbG1NT2lUZ28zekZ2RW9EK2NVMXh0MVd0RUo0MkErNVZSN1FBbVN6NlVLQVlkVmNYNk5UU2hGNFRQRStVNFkxeHNtM2xCY29rTG9adzZaNVZzOEJRUVVOVTNBOHo2YTdDc3VNT2x3U3FTOHhMMVFnOUxsZG9ab09oZXBpNW9VYlJkQ1lQTHoyOWUyMzZjK24xUGFkZkN2TVplcUpuZmZvejNnbDN5Q0ozRkl2ZCtNamFZN2NjZ05LVDZYVzl1QVN5cVdOLzVqL25HK3pXS2ZhUWNzKzJTNkMxaXgzNDhZZCt2WmdjOTI3dXNuZGVQK1Q3NFpMSXc1WnlLelpzL2ErM1FWdnJPdkFPMnVPVG5sYVpiTjFkdm9xNGVZb3BqYTgvYVp2TnR0ejdUdG9QL0s1RkVTMjBsQnV3NVdEMDVLMDgzbkxiWEk1aDRPbVFsbEtja3FqWFJNUlpsT1lwWlUwRVd1WkNrVVlWRXVvRW1oR0lOUHh3aU15YXVmaEVLVXJVOU1ReFZ2SWpFOHVETmJoclZJRGJKNkxoSmVuT2J2eFBaSWZ1UFFUdkVCNVZpSC9mT1RUYXNHOWRYOWRFbk1Va0FvRkVKRmJQR2hpYUJMZjVJWXVIOXd4TmJweTdOY2FpRmNGSEZqdk94SFlvTFJiS0wrTi9hWFlJbzNPVHFKUEdJTzZaNkMzdHF2bXhpc1lkajhONGRMQU5aUDFBUnRBMzBFYUNGQkc5c2NwaUdCbDlaKzJXNEJiUTZGOWNkVkp6Z3NveVBLOVZvc1ZqR2lNYWFtMEsxQ3ArbFVnRkQrK2RDVWZ4eHdxZm42czVlbmF1dmgrUCtGZTl5azVURWN5SlV4RU1UT0U2Z1A2UFNyaEJuZUFUcFozTnlnWG42blFYdVJvS1BvbHJ4Q09JYStUZU5FOE04M2lubjhDalhJakdvR0NaR0ZQTWtNZ1F0T2dNR2NLZFNxMW5RN2hXK0o5Zm9ST0ZwdGFIdy9WYVpEaktHcWwxZ3EwSmpYUnF5bG1hclowbDZ3QjBqb1FpOTdURDVaWE90bXhIS2hZUGV0MTVYSHdxelU0TFNITnRQZldSRnNlM0h6b2RiWFkwY0VEWEQwaUpZRnVIRTdtbzNGZVpBTEdZMXQ3SjZobzhQa2FWNTBsWUZBQ2s2YkwzejNmWnBIUGtLSTIvWmR6SkRoS1JVeXhocm1ld1BGeXQ1M0cxMitzUm5pckVxYXJOOC96QkszU0U5ekl6dDlhNWJBQVdHd0dhRVVrMHBRRjF0eVpzTmw3eDIxZ2VhQWJIajIrQ0hLazZUOTF0YVZndTRGYVFGWlFHNmZpUnVhdUFjTHNlNWsyOXZYaUMyRnpCQ010bnRZSEZQVjJadHM2ZXhTQVlPQ2lIdDlnUm9KTkU5TkZjSUtJa2xXZ2dDei81WWRWRUtDQkxkNUEyK2pCdUxLaGc1a2dYV0x3dUVtNi9Pd3pOWkJpS3N5ZUkzSFdocmh6SWtSZUFWQXJnMXlWejJpRkYveFdJNUl3enoxUTBCYjhSdndxb0VkWFR1OXdOTDBGbmtSZ2FQNWpOaTFYa0JwZEJ1R3lRYnRGK3NHeXdrUmxjQnZBZS9uUndXVE8raDhRT0pQSDhZNjFMTloxenNXQkVPZEFIcGhrSFVsaFVRTGVkelRKQnBndUY5SU92ZzJuR21KQWpkaDV2OFczODY3Nk8rc2NVdHpDRjUvaTdLSG81bHVySmd3ZHg1OVNKWnFYc09Vb1N2Mzloa0doZlBaOWQyc21WS00wUFJPSTB5VStHU2JwbjhtbFl6SzBNRWswY2RhY3RtOVFtUFVqa3E2akVtQS9QWW8wRnhXdDA5WnNrZ3RZZ1V3SHZmMEs2NHE1djRZbHVHTUZ2a0NuNzlTTjYwRForQktFZUJNSEdCRDM2TWFCSDlCWXMyZmVlNkJIRS94Y2NwVDhuWjcwSHBPaERqd2FOdjZjMzBKY241MzRJanM0L1p0K1NVTjgrNFdOYVpGbVRlRHNmeDljM1pVa2drcmxnQUNyWUVNdzJMR21pSFkzSjdvVUFMT3lHVDdOOVk5SUtoeTM0dVB2UGdZeitlelZoUS9XM1pxbmNqaVhrTUp6Rk43aGQ3RWJ3V3ZmQ3h2MWhDN3htaGQzL2pRV1FiOHNreGNncnBta2FJSTU1bUxCdmk1N3hNSVI4cmZFN3hCR2FTd0NURjF2ejVjNUw5NFBtUVFzWmhxamJNUDdvcGVKbER4NERMZlFsMjV3aENzd1p6WGwyem0vSE5odFVTalp0NXlSSVF3OWQza1Fha3E3K3VrblVudmJaZGpvWVROdlRiTmZVRzgrZ0NiekN0M0U5bUYvY2ZISzlNYWl3QW1yTnRpQVFGbGxzU2RoUXIxRUNSWHdmV2pMeG9adUJveDJXYnQ0Zk92T0QwbUdpRnVhWDlzSFQrcGFKN3BiUW1yTWtkMW82NjFiNmtRNDRzbDBJOGFaNi9yZ1lqU3ZDVm1oSmpucitjaUdtRzhvSTA5L0M1VlR2eTE5RDlMNi9IaVRJQTRQd1ZScDY1RDVnbStPa2ZjWTE1OXhaUEJQdXVGVlQxSmoraktRZ1lOeDVSSk41RkoybU41Qk4wOTVFWW0rSjE5Y0dZbStpc1FtWWJQalpCdndXbVBQN2ltTGhiRjVpV2MvMHhCSmwwWG8zRmVzaU9rSDdVRnV0aEhvYmovY3ZFM0Z6YVBTYnBoeVVpY0ROa1RTSzdDUEgwN2lsSXZ6NEg1bjlBSGMyeWFaNmNGMW8zVUVTVm9WdU9SQTZkRE95LzhIQ2pVV2dwUGl0eUpSQ3l2bkx4VmhNRWJhcjVqaFkwZzhqdW9NNzNMVWltT1lTM1RocFE5cHNjQzhlQmZqU2RORHdWT1ZIeUh1TzdIOC9oTy9mZjBSejNDK3o5Z3RFVzlwUGplcXplQXpTc1RPRHB0QWV6QjkyY1RWdUdXNDdEdmpDSzU0cFJSSkpPVnl1bFdpMnREVHdmT2t5WGxJQzFKTEFzVFdaWXl0RERxWmJrSVhCb2MwQ1VMU3Z1OHNrSGFvQTd1b2JCdndMZDk3NUFqLzJIQnNYN2xGUHY5OENid3RhNFk1ZlBTS3FkeHNrWVo0Z0czZnprdkNKdml0WDRnZmd4Mng2UC81bVhQdG5TTHMvNDdXM2JlTFpPSWR0UzJYSmU5QmVYT2NNNW9pN20zRzRIS2o3UGtBbnFHc05pL0RsYWtVUXBXb2xUREswRStpTk1qaUoyRC9QaWYvTnpSRGtZbzB2Q0pvd3I4WndMTHMrc3U5dGJ0bm8wZGlBKzlJVWxORm1rR1dFZ0d3ZnVweDlNOHRFekpLNzBCYUE0aEZCNHUrT3FxRFpCQVB2WGUwMXdVMC91RjcvdDFrUS84RXJnano3QnlUQUk0MEI3NEZrQzk0NEdTNjJ4d3RoZXY0MXpBc1JIL2x1aWtkeVBENG9tekNrcTZsa0xiUjRUNEtUSm83YjExaEMwQVNxWGZCNXVtL1U1dm9KN21yUWpvSmtQcnZmd1hPR1RoelRCdGtXY2dtUGducUh5M2xQNFRycUR6VDcyaHN6SU10bzVIbnMwTWNWbTRLTlp1N3B1ZG9NMVNyMUtKTXN2YVhLLzlieVNjcUljeEhURndrS2ZQUFhnaWpRYjduWnBSOFBLREU2U1JrMkNDekQ5ZmgrZE1jZGtGYmdxcTZxeTdNUG5aNjNhL3BSc2UvdW9iMnc2ZVJmSGhLSkZGZWdlVVRMVGNYZ1NVeWQ4OHllSjY2UGFtaC93R1ZWZkVzMUNjSURYcUNtLzhkVmJMUnJOcm9UQWY1T1pHdndLdEpqdTA1Y2FXbmUyT3VmeTZqN3Q2SXpnSmZkM2tQSWlCQWxXckcxeW5NRzRFcXJCZmk0SWFsaWtycUVqc1BuVGJzeDFhUWlmVmRkQmRNdEEvSHZ2TkZKRGxzRzduSGpzM0UvdlVaL2lNa2FvMGo0cWM5Y05ldlJ1SGs3N3EvYmdBVGlMVlF1bGUwYVFUSVdpS0YybnZxUHBtYkgvVWFzU1ZKUXdsOEt4UG0rQ3NWN2lRWVFzNWJqamlvSUR5dU9QTGQya25jNjNpd2g4ZXJ6WHlRSm9oT3VueXlJRHN6TWY2MGl2YzJKa1FmM25VUTNPWHZNTnlEOFdlVi8zdWN1UDVsYTBZOWR1NS9teUY3RkxHckhaZitBdzVWYVNXSWdLYTNqdzArNmZxeU5CUStBTzJmVVdFZzk1TDVDKzdKeVNBMm01Qm1BSkVCTno0Mmp0UHNZVFNGais2alh0Vm04dHdIK2NTaW1Ic2JYRHBPblBBaWdIUDJWeDVMQU9lNWtuUDJvTWMzMitKeW56M3dPWFl1R09Zc2I0VmJnVlhjcmQ0QzdndVBxSktoSUxMRFljNkt4S2twaXFSb1JKVnlGK3VCUWxYcGtVWTQxVXFzVHJPb3hXS3ZXU0hvZ1VTcjZDdEI2cytCSFBCQm5NTXpQa1RoOXFsOHJrbkJuWXZVblFuMFFQN1JRT29xbHp6NGU3YWpWaDViblk2VmVzRDViN3JHRFdtbnpaQUVCRTRsNEpWdS9PQkpJeTBTU2hnTG1mUlpWVnF4emQ0TlVUenJka3pvRFJBdXhXQ0Y2a3hreThaLzdkS2s5dmtWWG9oQXNhVjlYZXZBMWVIblovVnpVMHBKS2FvR2xWRjhMQzVxbVRpbEZ1ZGpCeDFMNUN3WWNNSHhHcFIyZ3lsSk54UndTMEdOeU1OYTFBRXZFTVFKckNLR0pRSFZzNDQzVjkzOTRUd1MvTVoyK0p4Z2w3OXl0a2hmaUdiYjBrb0VlQjNZc0F1QVRlT240d2R1OTdvcTI2S0tnYU90cDV5eHdWNDlwODE3YkU3bGdPZVlVTjNIYnVMM2MzM0YzY284MFk2bkRJYW1wZ3hRbDZrREJZZ2I4cHZmaWhZbjc1U2p3WVowZ2czanlBazlvTUxMalc4anFUQitReHp3aWpSM0R0ekRRQUM5WGNDaFN4Y2RWMGNzYnpERDFhbVVGWDZ5V2lVYUJ2WnpGTmVQaGdiYkx5UkF2TFVvcnRySnNHK1RSd2xFc3VUbGEzNVpPaWVSM2dwanBHdTV3SEMwaXgySXcxeGpSSk1seCtPZHVDeGJqVWNIVTdlN1FZLy9HaDJPQ0pmTlN0eGR1ZGdielJIa0ZkTXFCY3BmcFhvSEhNdzlSYnFVbXFpSkN1b1BKalNUSDEzZTFMVW1VWlppNUdreTVmK0RoSnBSWmxjSFQzNUpFQVVHeDA5Z0dOSGlSeXB0SjlkVDNyQjZGQUc1YXJFYVVPQUVaQWpBY1FRRkJNZ1RIeWZZQUlQS3kxck5uWU9VVjdyUWNVMHVUcGR1ZjR6R2RNK05SQWlVay9PdmovVnQ3SlFYVEZSYmdjcVhucTNzcTdBMTF4Z1RIdGZCQTFKSWFGQ0RzN00rVkEvaFh2S1ZpK1Z5MWhXQVdKRkxEaHhYMWJQQzhxL0lBRHJ5WkJZYWdDTEdpSWtVc0xHVU9oRWNvWFhrQ1BZVDJjaW51RklZSFFaQnJwVUxKUTJrbVRqTjhQZEplOTR6ZzNjQlBmbnBNM2daL1A5OVJQd3lmeUF3Q2tNc2VHRnN5c2p1YkE3QS85ZTVwM0QvWkN5OEVPUjI4NzB1VVJEQkNnYm40RmovODhXMkV2R3phUlB3TXArRHl6Q2w5MVZ4R0p4WE9MUnpZbEY3NDRrVXZiVldVclM5ZDh2VlhzQVNReGYrV2s2Y3N4MC9KNG4vT0Z2TEQ5ZXVKc1grbjN2UmpRRFB3RFV6bnVTSW9GUVlHODFJQUVLUnFUQ1pId1RDNjA1MEo1Zk9oenp5aUFoTUxhR1JabW9IWmROcDkwMzNMekpNMUt0KzBYOTlQZFlkUkdzVkNJSmlTeEh0b1lKQ0NnRWlpQW5Kb3FqRk81QnYxOFUvTEtUTWZBbE1xSHZmdUZlNE1uTVVYTUxlaUE4ZTAwNWpLNXMwOFBLTngxRnYvUG9mcDRrSE1rVjl6b3Y3d2tOVEtkRVpHS3pTdG9JZkJRZWRPUkN5TGhPelZxVXUwQWNLczkvREN3RkIwdklVajdLZW1PV0VXdmFxL2gwZFMvWkQwM3ZqSW9sMjQ5L2dObVFCUlNuUU9BS0NnNEpyKzVaWFRnZ0lQQm5za0FmSG1ydHQ1K05CWHZ2SVFYRHBDbll4WHJ0ZEJqblgwOVI4akhZRjdFNjhVMjFwN0dmZmJlTXNZZ0pOcDNOSDVqQTZobXNrdFhIWWdxcUJRVWlxdWE0czUwQkFCa0t5QUVrbXZiUmN0eVF6a0g3LzY0bjBBN0x0NHpZMDE2aGc5Tm5NNkd4V1hmbTBmaVVsZXY1NDQxVzUxdkVIQlJvZzNYUFNtSFhNYXIvMUJycjNKYTVISVZpRlNMeEp4aUlTcVMwS1JKQk50K3RrSjcyUW1FTS9ObG9nVlpxMDFBK0JNVVFRN0F5YW85V2ltK3duM0UyYlVOK0c2UjF1aUtRaXExTHlnRk9ERTFEWHJhVlFLSXNnQVU1b054eUgrczdXcHpwcjdBd1dOanBLVW9sa1BYK0NvK1NzUFI4aHJhSFl3cWNZY21RUk1KTlExalBkeDhWckFVYnRpbnNnSDlZSlB0cDA4aFhHdjF5bzg1NFFrQ3BXQnBXSElnZVlGcXUxbkY2cDk0QzNmYXJnelg5Qk41T2h0YlhpdDNDcEJZQ2NkVEtzazkzM3V6OW9MdWlHRWpIVG14czlpNGN4SWhwSEl2NzZKR1F2aGh4QnlFamJtUU54SFhMY2piRGpJMWkwbkM5TGdTdmZmSlJST0dGQkFuNzB4bmRiRGdtSGtDNFEzWXZQNmVjcS9jU3pJSlJUeFpnUDFuRVd6Z1IvY1pVVWRvejY4WkNvUjRVRTRIUUhQZmZSMURZUXpZY0JIRW1lTVZ1cUdFMjNHamQ2RG56V09EMm9FbkZDaVhxWjBaWXZteVJ5c0cxN1lLSWxkeWhPRkhxeUhJd2FNNW1wOWtIcmwwc0FIZEhvMHpxL2NnaWVBZG1FT2JGbkp4MlBpcUozNDZFcVlBV0FKWmkveEJ2SGxhQ2k1Znd5SUdTU0RjMldVRVFGcWd5cy9tckNYd0llclV6eGY1UTFKTXZDT242cGVjc1VGbXhIb0tzT3dIcXhBWWNpSU9JWHNvamJqRWtDU1lkRE5DK1V1Z0RaZmNNVWxUYjBZNFd0am1ML2F3WDJFZTRLMVQ5NUQvbURXUmVwbGdkZmJFTXNXSnRMUVhreEFxRVB4S09vSGM0cy84Y1duZkJrNWlmdWVOQkF1NENiQTFBa3h1NEFuaGhGckNmT3FyOVdqUTVGS2xLU2E5eGd1RW41aDBvakVLS1ZSeGVFNncyVHhBNDVJVWxVQ040MlpmZ0x2T0hMQlFQdUMwSUxGdUdpa1RYRm9ZOXRabDQvMTljUzNXMXA3QkMvM2h5QXZ0Mm1pWlFkVUpZYUVrWGpuWWtGc3c2UkduaHdZVnhVa2hDN1RNK2FEcjd2L0xVRkJ0Z1E5VlhmS3VYOFZrSnlySmxSSjBNMmlhU2dhNG1IV0NzVXlOVHdzZXd1V0pGeXNSTlJKT3lrRndxWGVDY3pnMjBVN2FiamZTeHY5V1MycUdCMUdzaHdOTEN0QXhkYkNHdEcyWSthOUxla014a1kvdXBua1pVQzV5T0p2WHIzeTZpRzlTeEZFc2t3ZmtDd1lzeVZCVU14MVdhU1g5R2h2U2gxYUpDRnBVN1lnMkdwSWpBc0MvM3JqMTltRklVRVc5VVFzNWdETXFXcTFNUUh5MXI3eEVKNVdtQk5NNkxxdVpKSHFxSlprQ1pNU3I2elg0cktxUldMVkFpYXpmQ0MwY1AyR3Nlb3VRMENDdGpEV1BRaGdTTGZRNWk0SW1PNmZyRFBmUmcrZ1FlbzdSRVlGaVFncjROVkRFZ2tJREdHV0s2VmF0RjVyZ2o1NVlzLzlneUZvL0xEdlJ1SHNKMFkxR0R4ODVackFQNC9lTEp6MzZPSUF0UGU1MzV2WURzRDJpUWtDbndUVHB4WlJRTHZQZmpKL0lNU2pSMjk2anc0ZnRaL0lueGxFL0JlZUlYZXhlN2ZQWVpuTlVpd3psbnFSWXBsVmFNZ0Z6Y3BJUmRaczQ4My9JSHlCK3pQaVlwRW04UTFCNVJmUU1tMEh6UHlDckM3dVVSVmZQaW9JK0s1ZkVLbVM2UkpJenIwc044eE5jS3RwUmt4dmlmdGI2bkJQd3ZLMDRzY0ZyRllyVW91ak1lS3VKd3ZNVGJHUEhtcUdua0pUcDRqN2oxNHN2dmNCcWhaZmQxSFVmWng2NCt5Q1YreldkbDhCcjI2UnJmdG5aNmY5Y0ZiZ1FBN1hZTytWc0trYU44S3RJUHpnOUZYNE9zWGgveGwxUHNZYjNabWRudklGYXJhKzNZakc2UHEyRVZOM3lzL1htaUVGZnNKQml1dzJPcGYwaFVGZTR5bWRKMVNPK09SSVJNUmlETHJ2ZG8yYmFZWjhwU2JmTmlGb3FpNWdqdjIwVDhMUEJoN2Jvb0NBa2xSVy9wMnNPM1ovMWNrclRtVkg1OElKQUNWRFJnSy9lc0htUFk2U0QxZjZyajgxamI4MGZlb04xeE1HR2FXWGsvUTBhbHpkWEVCOCsyWmNVSlRsV1FSc1E3Y2YyL0h5YVk3bEhCd0d4TmtPaU1QNzg0QVBudmJ5anJVN1ZHWmVVSGMwL2VKK1J2MEx4eWtPN1FsamlDTU05cW40L3hlaUdhOEtoZ1E1TThCRGV6Zm8vNzhQWG1hcGdvdzVlbDFlYzU3OC94V29qTTIvYStFL2NXRVA2NC9rVHllNmdqR3lURkRNdnd2ZGFTc0h2b1gvZ1J3RkZBVFRCcmdiaUdyUXVlQVd2R244d1FreU9FRWdLbm5mOSsxcmVONzFZQmwvQ2JmRzB6SlREb3NOS1pvVWROaVBVY1VOWC9HS21MVml6a3VlaXBVc1FIaUlTazZoUlRjdnRCNmdLWGNnMnc5ZUlJbzNFRFQySVM4bURlNWpCY3o2b1ZyamFhcTNFZzYzcXlidVpPZjhWZy9GL3pvZjc5blJ3QmpLZ3Q3ODluMEFsdGU0enhoQlhoS1lJNHNnOFJZcldiWUo5M1hVM1d0Smp3Nk02endVQXFhN3lYL0FNVnRQejNRZlhZOHplQzR1NHBaaTJRR3Z0RjZlR3kvUVJaVEtjMTRvek93RTZHS2RRZjZVcmVNVElGSVg4K1VJZW5vYmxsSVB5SEQzY2xBOXJRcTY4N3NJQ1lSSDVWVFFKYVREZlFOZjVTR2VkZGRQMmF0MnJyS0xLOUtOQmg0M0tKMk9UY1RTdGEwQUtrL3Z1ZnFEVWF1cld1MnlqUHdXUWwwYjQzZ0xQMFAxZHQvYjg3U0NsMGhWWFJDcGpJeFVwTEFLZmhHcnVYMkF6K2Q1MzQ1OEsxcUkxbmsrTnV0eHZZWnhiZWg4RzZvNUxXV0JsV2tFYzUyaGp4bDB0VGNBRmFKc0VnOC9SRHdLYkM4akVvM2VPdGRLWlZNbUFQbEtEclFVajVDeVJZcExRRFlwUDc1bGNqRm96NFRITm85RjJncUZ0Z2d1aERQdC9ZTmJ6d0NsZE51YTAydUNsYkx3WHp5ZmgvL2VMTmJ0cEdVbGJWeUs1MnJXUTFlR3cxM2RkbmpOcG9HQlRXdkNrUE5MN2pmRFJtejk3dWpHMDdyTXBSNDI1RFNtcThQY0ttNHZSZVlvejVuTGlmOXFnVGlyRmpDZlY2aFRJNXdIWjR0bFlrcCtSZ0dKSXlSYTkzN2lRczV3SWlzU2lWd0orOG5EZlVBM2xvWVlUOE1veVpsRXNvdVcwVlVWdVpMWFNRL3BtRUwwM2kwWlFtMm1GakR2N2tXMnhzN25LM0p0QU44RjNzS2xMTHpHMWZGQzFIVXp2dWw1Y3ZmTkNXUzdnOHZwdXJGRXRRVW9LbCtVUXZMem1pbzZyMnhSOUdsZEFWMy9rUzhETENzWjJndXlzR21UQ1Y3UURFSkJ1dkp2YW04V08vRCsxMUIyLzRndmJ6S0FMR3grUmRHaEZ3bWpLNWlkbWViNWFUSGs2SmN1UkpZNk80dS9sTkdGMTlIRHFJejUwa0Z1QmMzSmVvZ2dIOU4wVHpUM0pVVlBpRVpDRk5vTzVlbU9JZm14d0k1aGV1dXh1U09wRGRQREMyQllBbk9SRXRJOGhJc3RHOWRla3MzbHNwZXMzZmpZaG5Xc3VHN0RsclVUUzg5S3B0UEpzNVpPZkdSaTJmNVVPcDNhdjJ6aWdzVm16RnhzNFA4ZXhmOSsrWWhtV1JyWnFNMVMwcjJFRk1FSDhiWkVIL1hZc1M5QW9WUnEvbU0vZ2wrV1NuMzNxN1psVzEvVlFocitPd1ZZTVF2L1hZNy9BVkwrRUR0bWNzbnQ2TmZvWXBwdldXVFlmY1R2aG5yZWxQei82NlU2ZFpjbEszbFRCSXFnWHdHZVQ0Uk9XZHcvdEdQbjBtVjlPM3BYRDVZc1RaVHdJZ3BrS2R4eFFhVTJOajFlR1RwdDQ0SlZ3YUFZQU5lTmpXM2RQSEpLeEpJTWlCZGJ3NGdzNkYvVTJiMTRjWC8vK25YTHh5L3NkbVNGeDd5a2xJbHNXbENwbjhHWlRXdzFrOXJnRjNJclBmVG5xN2hidVh1NXg3bG51RmU0TjNBdm56aGo1V0lQN3JjQVd1M3lsZGFEY3V1QmROS0QrWWI5QWp2eXpYWE8zM2k3ZE16OWYrdHJqNzBmVE05UGt1bEh6Qmsrek8yRmJHZXczWWZtN2J5VDduZDlzT0RnMEVtZU50NjhBL3oyYjk2U2JWNmx1ekh2QmhLT2QzUU9tSGdPa3JybDVQZ2NtTm5NWEJGd1FZTWxRS1dubTlERzR5ZDlVUXNBOHZRN3VjbkhpbjZLeXZRaFBKNTZNUiszbjd1U2VKcFQvUnJCajY4ejRwZ24wZHoxREtMNmZCS2VnYVZ3NzZ4RHJJSVM5Uzh2OTZGeXlVTUtLUGZCUXI2Sm11a1pFbXNzbnJ5TWFCZ1p2dER5UUZnR3Z5dDJTYnhqU1ZyQTRQWDFxeVF6S2didHpxNkpQa3RCUVZ2VThlbEFlT251aFpJWmtZSVc1akdVYkZFTmFqSW1pcVdWU3dac0tFcExZemt6cXFreEp4QkoyV2RMZk5mMit1V1RwY25DMHJWQ2UwckxqZkFyZUVRZWE0MGZYaDNUdmFlaXRrOC9ESDR1ajVlc0ZBOGsxVnA5c1EyQ2JTbDB0ZHkvOHBST080bFBLdGFpOC9hT2E4RE9Kbm4zWEZWc1Y4S0VOenB0OTc0aFNVZEp0ZjJVTlNuSEVUVCtqTU9KNzkrKytUM2RzUWpxbGZKdDBaS1c2NGJ3RFBvOFk5VzVWeTIxVWdpemM5WS9BYlBzeVlodjBmZ29teUtWRFdWZ3VEVSt4bHZTTUovV0VtRzZHTmdzUzNNRmpWanBpTmFUYTl6UTN0UGREaDZ4VE5PcWd3V1dybHMvdERUTndyKzNETU5DbWhaTzI0MzM1M3Y3Qy9BOWJmMk5YV2JjZ2dnOGEwVXQvT2N1RmF5NFNmR0xPWFFJQVR3ZWlwaWJYTS90NGM3bUx1RnU0bTdHWHhhaUs4TW9IQ2EwTUU4cFl5Z0Q2UWxJRHgxeVdHTkxCejdGcUdlMDVSNVlEM25aZkdvTUk4QkFudEdDcHJ2eU5XTGwrWGZSL0JSaFVIS3kwZkJBVDk3eTlyTDBzSmt1bG9zcDAweVZ5dTFwU2RsdXhITEZyQ0dxU05SamVWcUM0bThDNFhSYk9oeWd1NUQyejZvY1N1cHh4VkVWdkk4RjFkMzUvbnkrMzFaa0NjU0laU24yTHBJeFN0UjR4ZC9ERDhhNjg3SVN6SFgzczMwNDlxZFE4N1dHa1hZczk4MWdMcTdwV01TUXJQWjhURGRJeVQ3YlNrVUNlQmppMTVQbVh6ZjNXalVJZ0JxTTNSUEw1d2Z5d0ZMQ2R3U2owZlpZN0l6VzkvS0NaREsrNzQvODdTam84WDFrWlNwbEpkR2licUdROEhTKzU1UkQxbWtDbE9xWHZmUDhydDJOdnFsS1pRcStPalVNR3U4SFRqb1VTb1dmU25lbkFjQ2IyMFA0T0IyQ1A2cFVUbTM4N3RSaFVOME1OZmNXa2pidGRiSnhmeDlKcHlOZ0NkbTZ2emNkeDN5ZGJMai9GMWtueUlzQUFIaWNZMkJrWUdBQVlydjdkbnJ4L0RaZkdiaFpHRURnaHNPOGpRajZmeS9MSk9ZU0lKZURnUWtrQ2dBalFBcXJBSGljWTJCa1lHQnUrTi9BRU1PcXhBQUVMSk1ZR0JsUUFLTTZBRlZ4QTBZQWVKeGpZV0JnWUJuRm8zZ1VqK0pCaEZtVkdCZ0FybHdFd0FBQUFBQUFBQUFBZkFDcUFPQUJUQUhBQWZvQ1dnS3VBdVFEU0FQMEJEUUVoZ1RJQlI0RlZnV2dCZWdHeWdiNkJ6NEhaQWVtQ0FJSVVBamNDU3dKcEFuV0NqUUtwZ3N5QzNRTHpBeEVET0lOa0E0QURtNFBCZytpRDhZUWZCRkNFZVFTRWhLVUU4WVVJQlNRRlJBVmxoWWlGbUlXK0JjNEY0Z1gzQmdLR0c0WW5CajZHYVlhRWhxd0cxZ2IxaHhFSExJZEFCMTBIYkllTWg3Nkg0SWY3aUJZSUxJaGNDSDJJbFlpdkNOVUkvWWtiQ1dRSmx3bStpZEFKM1luMGlnQUtFQW9saWpFS1RncHhDbnFLcUFyUEN2MkxMSXMvQzAwTFlJdHZDNFVMbkF1NEM4NEw2SXY5REIrTU9ReFhESXNNeTR6cWpRWU5FbzA5alU0TmhZMmNEYlFOejQzK0RoZ09LQTVCRGs4T2NBNlRqck9PeWc3cmp3T1BJQTlBajJrUGdnK2dEN1lQeVkvZUQvNlFLQkJia0c0UWxwQ3NFTUtRNDVENUVRNFJINUUxa1dNUmo1R3prYzBSOEJJZWtqeVNaaEo3a29lU254S3hrczhTOVJNRkV5NFRPcE5TRTNpVHlKUGlGQXFVSlpSRGxGZ1VkeFNSRkxlVTBoVDNsUkVWT0JWVkZYOFZpeFdTbFowVnF4WEZGZk9XQnBZZUZqc1diWmFCRnBHV3BSYTNsc2NXMXBiaUZ3VVhMNWMxbDB3WFlwZDdGNllYd1pmVkYrdVlEWmc0bUhHWWpCalVHUnNaTXBsWm1Yd1ptUm5FbWRzWjlab01HaEthR1JvbkdrOGFWaHBtR244YWxacXptczZhL0pzYW16V2JZNXVLbTZhYnlCdnptL3NjQnh3dm5FTWNZQnlBbktlY3hoenBuUU9kR3AwNUhWbWRhQjE4blphZHhoNEhuaVVlTGg0NW5tZWVoNTZnSHFtZXd4OEdueGlmSkI5RG4ySWZpSitUSDdVZjBCL3VvQllnUEtCUW9KcWd5eURjb1E4aElwNG5HTmdaR0JnVkdlNHg4RFBBQUpNUU13RmhBd00vOEY4QmdBamlnSXNBSGljWlk5TlRzTXdFSVZmK2dla0VxcW9ZSWZrQldJQktQMFJxMjVZVkdyM1hYVGZwazZiS29rang2M1VBM0FlanNBSk9BTGNnRHZ3U0NlYk5wYkgzN3g1WTA4QTNPQUhIbzdmTGZlUlBWd3lPM0lORjdnWHJsTi9FRzZRWDRTYmFPTlZ1RVg5VGRqSE02YkNiWFJoZVlQWHVHTDJoSGRoRHgxOENOZHdqVS9oT3ZVdjRRYjVXN2lKTy93S3Q5RHg2c0krNWw1WHVJMUhML2JIVmkrY1hxbmxRY1doeVNLVE9iK0NtVjd2a29XdDB1cWNhMXZFSmxPRG9GOUpVNTFwVzkxVDdOZEQ1eUlWV1pPcUNhczZTWXpLcmRucTBBVWI1L0pScnhlSkhvUW01VmhqL3JiR0FvNXhCWVVsRG93eFFoaGtpTXJvNkR0Vlp2U3ZzVVBDWG50V1BjM25kRnNVMVA5emhRRUM5TTljVTdxeTBuazZUNEU5WHh0U2RYUXJic3VlbERTUlhzMUpFckpDWHRhMlZFTHFBVFpsVjQ0UmVselJpVDhvWjBqL0FBbGFic2dBQUFCNG5HMVdCWlRydUJXZHF4aVR6TXlIM2IvTVdOaTJ1MlZtWnVaT1pWdEp0TEV0anlRbk0xdG1abVptWm1abVptWm01Z3JzeWQrZXpqa1QzU2ZKMHROOTl6MXBqYXo1ditIYS8vM0RXU0FZSUVDSUNERVNwQmhpaERIV3NZRk43TU4rSE1CQkhJRWpjUWhINFdnY2cyTnhISTdIQ1RnUkorRmtuSUpUY1JwT3h4azQwNngxTmk2Q2krSml1RGpPd1NWd1NWd0s1K0k4WEJxWHdXVnhPVndlVjhBVmNTVmNHVmZCVlhFMVhCM1h3RFZ4TFZ3YjE4RjFjVDFjSHpmQURYRWozQmczd1UxeE05d2N0OEF0Y1N2Y0dyZkJiWEU3M0I1M3dCMXhKOXdaZDhGZGNUZHM0ZTZneUpDakFNTUVVOHpBY1Q3bUtGR2hoa0NEYlVnb2FMUllZSWtkN09JQzNBUDN4TDF3Yjl3SDk4WDljSDg4QUEvRWcvQmdQQVFQeGNQd2NEd0NqOFNqOEdnOEJvL0Y0L0I0UEFGUHhKUHdaRHdGVDhYVDhIUThBOC9Fcy9Cc1BBZlB4ZlB3Zkx3QUw4U0w4R0s4QkMvRnkvQnl2QUt2eEt2d2Fyd0dyOFhyOEhxOEFXL0VtL0JtdkFWdnhkdndkcndENzhTNzhHNjhCKy9GKy9CK2ZBQWZ4SWZ3WVh3RUg4WEg4SEY4QXAvRXAvQnBmQWFmeGVmd2VYd0JYOFNYOEdWOEJWL0YxL0IxZkFQZnhMZndiWHdIMzhYMzhIMzhBRC9Fai9Cai9BUS94Yy93Yy93Q3Y4U3Y4R3Y4QnIvRjcvQjcvQUYveEovd1ovd0ZmOFhmOEhmOEEvL0V2L0J2L0llc0VSQkNCaVFnSVlsSVRCS1NraUVaa1RGWkp4dGtrK3dqKzhrQmNwQWNRWTRraDhoUjVHaHlERG1XSEVlT0p5ZVFFOGxKNUdSeUNqbVZuRVpPSjJlUU04bFo1T3kxSVcwYXlYSk9OUXZ6R2N2bllWNEt4UUpXY0IyeVNwelAwd2xkQ0RuaFpSazZGSmVDRnJ5ZWprdVJVODFGYlllUzNnaWJtYWpaaGhSdFhiajE3T2h3WlhZamRvL0RScXpwUnlTZnp2UnF4Sm1SWWxUbXMwRFRIWjVvWHJrdkF3dWl0cDZJc2tpV1ZEbzNBZ3VHT2EyWXBOYU9QQnpsb3FwWTdkYU5PNXlVZk80WHNtQmZMVFNmOE5XQnhvZDNoRUlXVENhS2RsdGJFQmVzNUF2VHl4YTBiQTE5ZzRidUJvclZSYUJtb29rMHorZE1CeG5ONTBsT1ZVNExwcEtDcTF5WWo4eWVTZ2VWa0N3d0kzV2ltTmFHVWpYZWJwbmE0N1EzRXJ1ZzIzZ2laRFZvZUI0WlN6T1pUb1RRamVTMUhtalJKRTFibG9WWTFwRUZiUk02OG1MSkpwS3AyY2p1UmcyamdoZEQ0enZUN2l5UkdUWThCem1WT3RxV3VTaVk2YXA0WFVSK1V0eElZU2F5WUNZcWx0aHBqcDcrSk01Uk8rUzRyWmhTZE1wR3RDak1uaW9UWW02T1dwc2ZrYzlOc0d3eldQQW1YREtlaVlUbW1pKzQzbDJmU0c2SU0xL1pWZEk5YSt6UmhGYWlWWkUzd3FrUWhVcVZjUzYzNU1Sc3B5bk4wWXlmekxDdk45VjJTNDJpZSsxRjNoNGQxaDA2YVkzZGI3ZG4waHNEODMvb1FtSVFNdU51enFqYnFZdEVXUVJUbzROVXNxS2hOdGJyZXo0NUxoU3ZlRW5seGlyQjNFYmNyT2hXc0dCa1ZqZVNkY3ZISFI1Ykw2bWMrdW05RVJ2V0RQbEZ1QkE4WjZuN2RVNzFGSm5NREpiRzYxQ1orU3hhdWxHeVpHbHBWVUJiTFVZTytmUDRYaGRKbnlKU2FGc0NYSGVjVVNlRXpVbEoxY3gxK1F4ZDJhSmg5ZENucFpWeXJKaGNHSThDSmFRT25BWXJrUm5WREgzakRweUxabmM5Tnp4ck84RkZlczhhV3NyOWlTSVBSMjJqTlBVc3hCMU9NcHJ0dXJVc1NETnA5T3dLazBNYitjeXlVaHZodVFLeU1rZkdmVDFqeXVlL3grUGNwSU9SbjZlNU42SUpxMmpKa2puYnpZU2hPN0JXWExPbG5UVXdyVXN5Y3lDZFd1QXlMREdiTzZrRkZnd3lXcVNlVXlPbGNDTHlWZzI3SUprNTYzdEQ3Z3NqRHBVMmxQdmFGRG9VbXdSM2tla3lsMG9wbG9ZcW83MlMxU3FwcVBUYldURHFaTi9sY3NOb0dkSXlhNnRodzBUam1ZODhISFZCNnFkU0xnT2IyVU9QWFVBMEZUdWNpcVkxQXVJN3ZGNm5XcHZWTzAybmU1YXJxQjM3Y1lmWGJkdldKcCs3MkhaV1lMZ3RUT1VvYlZMTFFkN3FzS0pUbm85dGJlelZuelFsOWFGVlJseXhpYlpqM0xUaDFPUm1NNkFtb3ZhRHJpck5oRHZ5d0xSQkk1UU5Rc0ZGSm5aU2w4bE9nbTFqcjZwMEtiblB2ZENoY1QvVE05N1crY3ptekp5WmVyd3dDcVlUTnU0TGt6K0k3T1FhT3BTNkF1UnlyeXQzRG5kbDBzMVQxb1dSYWtTdC9NMFpkOWdJT2JNMU1GNHkxNlpMMXRZZXVidld6dDN3eUthYVU0RkRXZXZKMFd4SEQ3MEROdVBUcWxWZUxKc2U3UlVyVzlDTGZWcHlXazlMMWlmY1J0L1J1dnZrZ09QS3F0bGE1OWdFTllXdDFxSG0ydWtpRno0NmtZZnJkbEdYRjU2WTNrcnN2ZFRsT0s4M1Y3T2NPOE9jeTd4VG9vZWJLMVc1R1FmL3gzYStyZnI2OThmR2hic2k1NlZLZWQ2OVNJSko2N0tDbDUzNGJXa2FPN2E2REU1Nkk2MVlRVXNYTEljUzArZGpha0VucnJqRGdXM1RCUytZcTl5aFF3SGI0VHBSYys0ZkhoYU1LL1AwMmMyOGRFZXRlZUVZZjN6OThqanBKMnpzWFJwYkxzYXF6VlF1ZWVOdSsrNDA1MFpUcm1kdEZrMUxrVkV6cDNzanVBOXNKbXoxdDdtNWwreHRhM0p3dlgrTXVHV0hMbk1jM0cvVGE2dTdZZnllM2Z2RkdRZDh6ZDN5OUcvMWI0MTVZRXJSM0Z6VzlRVThabVhKRzhYaWJibGxMNGU0TUVxYXRUVGcrY3JuOHdhWnJ0ZlcvZ3Robm1KVEFBQUEnKSBmb3JtYXQoJ3dvZmYnKSxcXHJcXG5cXHRcXHR1cmwoJy8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfNTMzNTY2X3lmcTJkOXdkaWoudHRmP3Q9MTU0NTIzOTk4NTgzMScpIGZvcm1hdCgndHJ1ZXR5cGUnKSxcXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHR1cmwoJy8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfNTMzNTY2X3lmcTJkOXdkaWouc3ZnP3Q9MTU0NTIzOTk4NTgzMSNjdUljb25mb250JykgZm9ybWF0KCdzdmcnKVwiXG4gICAgfVxuICBdLFxuICBcImN1SWNvbi1hcHByZWNpYXRlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjQ0XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNoZWNrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjQ1XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNsb3NlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjQ2XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWVkaXRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NDlcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZW1vamlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NGFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZmF2b3JmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjRiXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWZhdm9yXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjRjXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWxvYWRpbmdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NGZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbG9jYXRpb25maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjUwXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWxvY2F0aW9uXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjUxXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXBob25lXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjUyXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJvdW5kY2hlY2tmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjU2XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJvdW5kY2hlY2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NTdcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcm91bmRjbG9zZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NThcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcm91bmRjbG9zZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1OVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yb3VuZHJpZ2h0ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1YVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yb3VuZHJpZ2h0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjViXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNlYXJjaFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY1Y1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi10YXhpXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjVkXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXRpbWVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjVlXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXRpbWVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NWZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdW5mb2xkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjYxXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXdhcm5maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjYyXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXdhcm5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY2FtZXJhZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2NFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jYW1lcmFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY29tbWVudGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NjZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY29tbWVudFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2N1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1saWtlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY2OFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1saWtlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjY5XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW5vdGlmaWNhdGlvbmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NmFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbm90aWZpY2F0aW9uXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjZiXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW9yZGVyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjZjXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNhbWVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjZkXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNhbWVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NmVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZGVsaXZlclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3MVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1ldmFsdWF0ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3MlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1wYXlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NzNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc2VuZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3NVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zaG9wXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjc2XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXRpY2tldFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3N1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1iYWNrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjc5XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNhc2NhZGVzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjdjXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWRpc2NvdmVyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjdlXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWxpc3RcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ODJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbW9yZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY4NFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zY2FuXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjg5XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNldHRpbmdzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjhhXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXF1ZXN0aW9uZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5MFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1xdWVzdGlvblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5MVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zaG9wZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5N1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1mb3JtXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjk5XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXBpY1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5YlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1maWx0ZXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OWNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZm9vdHByaW50XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjlkXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXRvcFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5ZVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1wdWxsZG93blwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY5ZlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1wdWxsdXBcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YTBcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcmlnaHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YTNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcmVmcmVzaFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhNFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1tb3JlYW5kcm9pZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhNVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1kZWxldGVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmE2XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJlZnVuZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhY1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jYXJ0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmFmXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXFyY29kZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiMFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yZW1pbmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YjJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZGVsZXRlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmI0XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXByb2ZpbGVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YjdcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24taG9tZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiOFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jYXJ0ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiOVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1kaXNjb3ZlcmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YmFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24taG9tZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YmJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbWVzc2FnZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiY1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1hZGRyZXNzYm9va1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZiZFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1saW5rXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmJmXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWxvY2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YzBcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdW5sb2NrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmMyXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXZpcFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjM1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi13ZWlib1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjNFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1hY3Rpdml0eVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjNVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1mcmllbmRhZGRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmM5XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWZyaWVuZGFkZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjYVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1mcmllbmRmYW1vdXNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2Y2JcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZnJpZW5kXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmNjXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWdvb2RzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmNkXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNlbGVjdGlvblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZjZVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1leHBsb3JlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmQyXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXByZXNlbnRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZDNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc3F1YXJlY2hlY2tmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmQ0XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNxdWFyZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkNVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zcXVhcmVjaGVja1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkNlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yb3VuZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkN1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yb3VuZGFkZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZDhcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcm91bmRhZGRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZDlcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYWRkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmRhXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW5vdGlmaWNhdGlvbmZvcmJpZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZGJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZXhwbG9yZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZGRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZm9sZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZkZVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1nYW1lXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmRmXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJlZHBhY2tldFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlMFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zZWxlY3Rpb25maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmUxXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNpbWlsYXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZTJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYXBwcmVjaWF0ZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZTNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24taW5mb2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZTRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24taW5mb1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlNVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1mb3J3YXJkZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlYVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1mb3J3YXJkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmViXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJlY2hhcmdlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlY1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yZWNoYXJnZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlZFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi12aXBjYXJkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmVlXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXZvaWNlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmVmXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXZvaWNlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmMFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1mcmllbmRmYXZvclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmMVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi13aWZpXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmYyXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNoYXJlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmYzXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXdlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmNFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi13ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmNVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1saWdodGF1dG9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZjZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbGlnaHRmb3JiaWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZjdcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbGlnaHRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmY4XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNhbWVyYXJvdGF0ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmOVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1saWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmYVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1iYXJjb2RlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmZiXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWZsYXNobGlnaHRjbG9zZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmY1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1mbGFzaGxpZ2h0b3BlblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZmZFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zZWFyY2hsaXN0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNmZlXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNlcnZpY2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2ZmZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc29ydFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwMFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1kb3duXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzAzXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW1vYmlsZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwNFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1tb2JpbGVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzA1XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNvcHlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MDZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY291bnRkb3duZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwN1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jb3VudGRvd25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MDhcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbm90aWNlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwOVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1ub3RpY2VcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MGFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdXBzdGFnZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MGVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdXBzdGFnZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcwZlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1iYWJ5ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxMFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1iYWJ5XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzExXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWJyYW5kZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxMlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1icmFuZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxM1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jaG9pY2VuZXNzZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxNFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jaG9pY2VuZXNzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzE1XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNsb3RoZXNmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzE2XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNsb3RoZXNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MTdcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY3JlYXRpdmVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzE4XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNyZWF0aXZlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzE5XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWZlbWFsZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxYVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1rZXlib2FyZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcxYlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1tYWxlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzFjXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW5ld2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MWRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbmV3XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzFlXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXB1bGxsZWZ0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzFmXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXB1bGxyaWdodFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyMFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yYW5rZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyMVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yYW5rXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzIyXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWJhZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyM1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jYW1lcmFhZGRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MjRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZm9jdXNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MjVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZnJpZW5kZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTcyNlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jYW1lcmFhZGRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzI3XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWFwcHNcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MjlcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcGFpbnRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzJhXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXBhaW50XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzJiXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXBpY2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MmNcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcmVmcmVzaGFycm93XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzJkXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNvbG9ybGVuc1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZlNlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1tYXJrZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczMFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1tYXJrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzMxXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXByZXNlbnRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzMyXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJlcGVhbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczM1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1hbGJ1bVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczNFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1wZW9wbGVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzM1XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXBlb3BsZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczNlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zZXJ2aWNlZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczN1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yZXBhaXJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3MzhcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZmlsZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczOVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yZXBhaXJmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzNhXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXRhb3hpYW9wdVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczYlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi13ZWl4aW5cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MTJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYXR0ZW50aW9uZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczY1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1hdHRlbnRpb25cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3M2RcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY29tbWFuZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3M2VcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY29tbWFuZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTczZlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jb21tdW5pdHlmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzQwXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNvbW11bml0eVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0MVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yZWFkXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzQyXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNhbGVuZGFyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzRhXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWN1dFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0YlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1tYWdpY1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc0Y1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1iYWNrd2FyZGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NGRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcGxheWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NGZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc3RvcFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1MFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi10YWdmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzUxXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXRhZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1MlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1ncm91cFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1M1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1hbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NTVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYmFja2RlbGV0ZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1NlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1ob3RmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzU3XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWhvdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1OFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1wb3N0XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzU5XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJhZGlvYm94XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzViXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJvdW5kZG93blwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc1Y1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi11cGxvYWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NWRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24td3JpdGVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzYwXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXdyaXRlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzYxXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJhZGlvYm94ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2M1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1wdW5jaFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2NFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1zaGFrZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2NVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1tb3ZlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzY4XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNhZmVcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NjlcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYWN0aXZpdHlmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzc1XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNyb3duZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3NlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jcm93blwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3N1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1nb29kc2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NzhcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbWVzc2FnZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3NzlcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcHJvZmlsZWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3N2FcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc291bmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3N2JcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc3BvbnNvcmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3N2NcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tc3BvbnNvclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc3ZFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi11cGJsb2NrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzdlXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXdlYmxvY2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3N2ZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24td2V1bmJsb2NrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzgwXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW15XCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzhiXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW15ZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc4Y1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1lbW9qaWZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OGRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZW1vamlmbGFzaGZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OGVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZmxhc2hidXlmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzhmXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXRleHRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OTFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZ29vZHNmYXZvclwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5NFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1tdXNpY2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OTVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbXVzaWNmb3JiaWRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzk2XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNhcmRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2MjRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdHJpYW5nbGVkb3duZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5YlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi10cmlhbmdsZXVwZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc5Y1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yb3VuZGxlZnRmaWxsLWNvcHlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3OWVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZm9udFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTc2YVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi10aXRsZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTgyZlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1yZWNvcmRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2E0XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJlY29yZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdhNlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jYXJkYm9hcmRmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2E5XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNhcmRib2FyZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdhYVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1mb3JtZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdhYlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jb2luXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2FjXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNhcmRib2FyZGZvcmJpZFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdhZlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1jaXJjbGVmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2IwXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWNpcmNsZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiMVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1hdHRlbnRpb25mb3JiaWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YjJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYXR0ZW50aW9uZm9yYmlkZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiM1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1hdHRlbnRpb25mYXZvcmZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YjRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tYXR0ZW50aW9uZmF2b3JcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YjVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdGl0bGVzXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzAxXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWljbG9hZGluZ1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTY3YVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1mdWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2JjXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW1haWxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YmRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcGVvcGxlbGlzdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdiZVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1nb29kc25ld2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YmZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZ29vZHNuZXdcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YzBcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbWVkYWxmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2MxXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW1lZGFsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2MyXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW5ld3NmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2MzXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW5ld3Nob3RmaWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2M0XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW5ld3Nob3RcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YzVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tbmV3c1wiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjNlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi12aWRlb2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YzdcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tdmlkZW9cIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3YzhcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZXhpdFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjYlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1za2luZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjY1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1za2luXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2NkXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW1vbmV5YmFnZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjZVxcXCJcIlxuICB9LFxuICBcImN1SWNvbi11c2VmdWxsZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdjZlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi11c2VmdWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2QwXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW1vbmV5YmFnXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2QxXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXJlZHBhY2tldF9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2QzXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXN1YnNjcmlwdGlvblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdkNFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1sb2FkaW5nMVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYzM1xcXCJcIlxuICB9LFxuICBcImN1SWNvbi1naXRodWJcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2OTJcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZ2xvYmFsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2ViXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXNldHRpbmdzZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTZhYlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1iYWNrX2FuZHJvaWRcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZWRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZXhwcmVzc21hblwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdlZlxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1ldmFsdWF0ZV9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2YwXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWdyb3VwX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZjVcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tcGxheV9mb3J3YXJkX2ZpbGxcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZjZcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZGVsaXZlcl9maWxsXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2Y3XFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLW5vdGljZV9mb3JiaWRfZmlsbFwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTdmOFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1mb3JrXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjBjXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLXBpY2tcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU3ZmFcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24td2VuemlcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2YTdcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tZWxsaXBzZVwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwMFxcXCJcIlxuICB9LFxuICBcImN1SWNvbi1xcl9jb2RlXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjFiXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWRpYW5odWFcIjoge1xuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcXGU2NGRcXFwiXCJcbiAgfSxcbiAgXCJjdUljb24tY3VJY29uXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNjAyXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWxvYWRpbmcyXCI6IHtcbiAgICBcImNvbnRlbnQ6YmVmb3JlXCI6IFwiXFxcIlxcXFxlN2YxXFxcIlwiXG4gIH0sXG4gIFwiY3VJY29uLWJ0blwiOiB7XG4gICAgXCJjb250ZW50OmJlZm9yZVwiOiBcIlxcXCJcXFxcZTYwMVxcXCJcIlxuICB9LFxuICBcInJvdW5kXCI6IHtcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjUwMDBycHhcIlxuICB9LFxuICBcInJhZGl1c1wiOiB7XG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI2cnB4XCJcbiAgfSxcbiAgXCJyZXNwb25zZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiAxMDBcbiAgfSxcbiAgXCJzd2l0Y2gtc2V4XCI6IHtcbiAgICBcImNvbnRlbnQ6OmFmdGVyXCI6IFwiXFxcIlxcXFxlNzFjXFxcIlwiLFxuICAgIFwiY29udGVudDo6YmVmb3JlXCI6IFwiXFxcIlxcXFxlNzFhXFxcIlwiXG4gIH0sXG4gIFwic29saWRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiY29udGVudDo6YWZ0ZXJcIjogXCJcXFwiIFxcXCJcIixcbiAgICBcIndpZHRoOjphZnRlclwiOiAyMDAsXG4gICAgXCJoZWlnaHQ6OmFmdGVyXCI6IDIwMCxcbiAgICBcInBvc2l0aW9uOjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3A6OmFmdGVyXCI6IDAsXG4gICAgXCJsZWZ0OjphZnRlclwiOiAwLFxuICAgIFwidHJhbnNmb3JtOjphZnRlclwiOiBcInNjYWxlKDAuNSlcIixcbiAgICBcInRyYW5zZm9ybU9yaWdpbjo6YWZ0ZXJcIjogXCIwIDBcIixcbiAgICBcInBvaW50ZXJFdmVudHM6OmFmdGVyXCI6IFwibm9uZVwiLFxuICAgIFwiYm94U2l6aW5nOjphZnRlclwiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImJvcmRlcjo6YWZ0ZXJcIjogXCIxcnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKVwiXG4gIH0sXG4gIFwic29saWQtdG9wXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImNvbnRlbnQ6OmFmdGVyOjphZnRlclwiOiBcIlxcXCIgXFxcIlwiLFxuICAgIFwid2lkdGg6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJoZWlnaHQ6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJwb3NpdGlvbjo6YWZ0ZXI6OmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJsZWZ0OjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcInRyYW5zZm9ybTo6YWZ0ZXI6OmFmdGVyXCI6IFwic2NhbGUoMC41KVwiLFxuICAgIFwidHJhbnNmb3JtT3JpZ2luOjphZnRlcjo6YWZ0ZXJcIjogXCIwIDBcIixcbiAgICBcInBvaW50ZXJFdmVudHM6OmFmdGVyOjphZnRlclwiOiBcIm5vbmVcIixcbiAgICBcImJveFNpemluZzo6YWZ0ZXI6OmFmdGVyXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiYm9yZGVyVG9wOjphZnRlclwiOiBcIjFycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpXCJcbiAgfSxcbiAgXCJzb2xpZC1yaWdodFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJjb250ZW50OjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiXFxcIiBcXFwiXCIsXG4gICAgXCJ3aWR0aDo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJoZWlnaHQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMjAwLFxuICAgIFwicG9zaXRpb246OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJsZWZ0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJ0cmFuc2Zvcm06OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJzY2FsZSgwLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm1PcmlnaW46OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCIwIDBcIixcbiAgICBcInBvaW50ZXJFdmVudHM6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJub25lXCIsXG4gICAgXCJib3hTaXppbmc6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJib3JkZXJSaWdodDo6YWZ0ZXJcIjogXCIxcnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKVwiXG4gIH0sXG4gIFwic29saWQtYm90dG9tXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImNvbnRlbnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiXFxcIiBcXFwiXCIsXG4gICAgXCJ3aWR0aDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMjAwLFxuICAgIFwiaGVpZ2h0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJwb3NpdGlvbjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwibGVmdDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcInRyYW5zZm9ybTo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJzY2FsZSgwLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm1PcmlnaW46OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiMCAwXCIsXG4gICAgXCJwb2ludGVyRXZlbnRzOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIm5vbmVcIixcbiAgICBcImJveFNpemluZzo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJib3JkZXJCb3R0b206OmFmdGVyXCI6IFwiMXJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSlcIlxuICB9LFxuICBcInNvbGlkLWxlZnRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiY29udGVudDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiXFxcIiBcXFwiXCIsXG4gICAgXCJ3aWR0aDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcImhlaWdodDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcInBvc2l0aW9uOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcImxlZnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwidHJhbnNmb3JtOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJzY2FsZSgwLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm1PcmlnaW46OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIjAgMFwiLFxuICAgIFwicG9pbnRlckV2ZW50czo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwibm9uZVwiLFxuICAgIFwiYm94U2l6aW5nOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJib3JkZXJMZWZ0OjphZnRlclwiOiBcIjFycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpXCJcbiAgfSxcbiAgXCJzb2xpZHNcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiY29udGVudDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIlxcXCIgXFxcIlwiLFxuICAgIFwid2lkdGg6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMjAwLFxuICAgIFwiaGVpZ2h0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcInBvc2l0aW9uOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwibGVmdDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwidHJhbnNmb3JtOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwic2NhbGUoMC41KVwiLFxuICAgIFwidHJhbnNmb3JtT3JpZ2luOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiMCAwXCIsXG4gICAgXCJwb2ludGVyRXZlbnRzOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwibm9uZVwiLFxuICAgIFwiYm94U2l6aW5nOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiYm9yZGVyOjphZnRlclwiOiBcIjhycHggc29saWQgI2VlZVwiXG4gIH0sXG4gIFwic29saWRzLXRvcFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJjb250ZW50OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIlxcXCIgXFxcIlwiLFxuICAgIFwid2lkdGg6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcImhlaWdodDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMjAwLFxuICAgIFwicG9zaXRpb246OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcImxlZnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJ0cmFuc2Zvcm06OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwic2NhbGUoMC41KVwiLFxuICAgIFwidHJhbnNmb3JtT3JpZ2luOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIjAgMFwiLFxuICAgIFwicG9pbnRlckV2ZW50czo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJub25lXCIsXG4gICAgXCJib3hTaXppbmc6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiYm9yZGVyVG9wOjphZnRlclwiOiBcIjhycHggc29saWQgI2VlZVwiXG4gIH0sXG4gIFwic29saWRzLXJpZ2h0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImNvbnRlbnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIlxcXCIgXFxcIlwiLFxuICAgIFwid2lkdGg6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJoZWlnaHQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJwb3NpdGlvbjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJsZWZ0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcInRyYW5zZm9ybTo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwic2NhbGUoMC41KVwiLFxuICAgIFwidHJhbnNmb3JtT3JpZ2luOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCIwIDBcIixcbiAgICBcInBvaW50ZXJFdmVudHM6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIm5vbmVcIixcbiAgICBcImJveFNpemluZzo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiYm9yZGVyUmlnaHQ6OmFmdGVyXCI6IFwiOHJweCBzb2xpZCAjZWVlXCJcbiAgfSxcbiAgXCJzb2xpZHMtYm90dG9tXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImNvbnRlbnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJcXFwiIFxcXCJcIixcbiAgICBcIndpZHRoOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcImhlaWdodDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJwb3NpdGlvbjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3A6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcImxlZnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcInRyYW5zZm9ybTo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcInNjYWxlKDAuNSlcIixcbiAgICBcInRyYW5zZm9ybU9yaWdpbjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIjAgMFwiLFxuICAgIFwicG9pbnRlckV2ZW50czo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIm5vbmVcIixcbiAgICBcImJveFNpemluZzo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImJvcmRlckJvdHRvbTo6YWZ0ZXJcIjogXCI4cnB4IHNvbGlkICNlZWVcIlxuICB9LFxuICBcInNvbGlkcy1sZWZ0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImNvbnRlbnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiXFxcIiBcXFwiXCIsXG4gICAgXCJ3aWR0aDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMjAwLFxuICAgIFwiaGVpZ2h0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJwb3NpdGlvbjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwibGVmdDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcInRyYW5zZm9ybTo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJzY2FsZSgwLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm1PcmlnaW46OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiMCAwXCIsXG4gICAgXCJwb2ludGVyRXZlbnRzOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIm5vbmVcIixcbiAgICBcImJveFNpemluZzo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJib3JkZXJMZWZ0OjphZnRlclwiOiBcIjhycHggc29saWQgI2VlZVwiXG4gIH0sXG4gIFwiZGFzaGVkXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImNvbnRlbnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIlxcXCIgXFxcIlwiLFxuICAgIFwid2lkdGg6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJoZWlnaHQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJwb3NpdGlvbjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJsZWZ0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcInRyYW5zZm9ybTo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwic2NhbGUoMC41KVwiLFxuICAgIFwidHJhbnNmb3JtT3JpZ2luOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCIwIDBcIixcbiAgICBcInBvaW50ZXJFdmVudHM6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIm5vbmVcIixcbiAgICBcImJveFNpemluZzo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiYm9yZGVyOjphZnRlclwiOiBcIjFycHggZGFzaGVkICNkZGRcIlxuICB9LFxuICBcImRhc2hlZC10b3BcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiY29udGVudDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIlxcXCIgXFxcIlwiLFxuICAgIFwid2lkdGg6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMjAwLFxuICAgIFwiaGVpZ2h0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcInBvc2l0aW9uOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwibGVmdDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwidHJhbnNmb3JtOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwic2NhbGUoMC41KVwiLFxuICAgIFwidHJhbnNmb3JtT3JpZ2luOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiMCAwXCIsXG4gICAgXCJwb2ludGVyRXZlbnRzOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwibm9uZVwiLFxuICAgIFwiYm94U2l6aW5nOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiYm9yZGVyVG9wOjphZnRlclwiOiBcIjFycHggZGFzaGVkICNkZGRcIlxuICB9LFxuICBcImRhc2hlZC1yaWdodFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJjb250ZW50OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIlxcXCIgXFxcIlwiLFxuICAgIFwid2lkdGg6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDIwMCxcbiAgICBcImhlaWdodDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMjAwLFxuICAgIFwicG9zaXRpb246OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcInRvcDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMCxcbiAgICBcImxlZnQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJ0cmFuc2Zvcm06OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwic2NhbGUoMC41KVwiLFxuICAgIFwidHJhbnNmb3JtT3JpZ2luOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcIjAgMFwiLFxuICAgIFwicG9pbnRlckV2ZW50czo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJub25lXCIsXG4gICAgXCJib3hTaXppbmc6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiYm9yZGVyLWJveFwiLFxuICAgIFwiYm9yZGVyUmlnaHQ6OmFmdGVyXCI6IFwiMXJweCBkYXNoZWQgI2RkZFwiXG4gIH0sXG4gIFwiZGFzaGVkLWJvdHRvbVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJjb250ZW50OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJcXFwiIFxcXCJcIixcbiAgICBcIndpZHRoOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMjAwLFxuICAgIFwiaGVpZ2h0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMjAwLFxuICAgIFwicG9zaXRpb246OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ0b3A6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAwLFxuICAgIFwibGVmdDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJ0cmFuc2Zvcm06OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcInNjYWxlKDAuNSlcIixcbiAgICBcInRyYW5zZm9ybU9yaWdpbjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiMCAwXCIsXG4gICAgXCJwb2ludGVyRXZlbnRzOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJub25lXCIsXG4gICAgXCJib3hTaXppbmc6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiBcImJvcmRlci1ib3hcIixcbiAgICBcImJvcmRlckJvdHRvbTo6YWZ0ZXJcIjogXCIxcnB4IGRhc2hlZCAjZGRkXCJcbiAgfSxcbiAgXCJkYXNoZWQtbGVmdFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJjb250ZW50OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiXFxcIiBcXFwiXCIsXG4gICAgXCJ3aWR0aDo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlclwiOiAyMDAsXG4gICAgXCJoZWlnaHQ6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogMjAwLFxuICAgIFwicG9zaXRpb246OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJsZWZ0OjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyXCI6IDAsXG4gICAgXCJ0cmFuc2Zvcm06OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJzY2FsZSgwLjUpXCIsXG4gICAgXCJ0cmFuc2Zvcm1PcmlnaW46OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCIwIDBcIixcbiAgICBcInBvaW50ZXJFdmVudHM6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJub25lXCIsXG4gICAgXCJib3hTaXppbmc6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXI6OmFmdGVyOjphZnRlcjo6YWZ0ZXJcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJib3JkZXJMZWZ0OjphZnRlclwiOiBcIjFycHggZGFzaGVkICNkZGRcIlxuICB9LFxuICBcInNoYWRvdy1sZ1wiOiB7XG4gICAgXCItLVNoYWRvd1NpemVcIjogXCIwcnB4IDQwcnB4IDEwMHJweCAwcnB4XCJcbiAgfSxcbiAgXCJzaGFkb3ctd2FycFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJib3hTaGFkb3dcIjogXCIwIDAgMTBycHggcmdiYSgwLCAwLCAwLCAwLjEpXCIsXG4gICAgXCJwb3NpdGlvbjpiZWZvcmVcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiY29udGVudDpiZWZvcmVcIjogXCJcXFwiXFxcIlwiLFxuICAgIFwidG9wOmJlZm9yZVwiOiBcIjIwcnB4XCIsXG4gICAgXCJib3R0b206YmVmb3JlXCI6IFwiMzBycHhcIixcbiAgICBcImxlZnQ6YmVmb3JlXCI6IFwiMjBycHhcIixcbiAgICBcIndpZHRoOmJlZm9yZVwiOiA1MCxcbiAgICBcImJveFNoYWRvdzpiZWZvcmVcIjogXCIwIDMwcnB4IDIwcnB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiLFxuICAgIFwidHJhbnNmb3JtOmJlZm9yZVwiOiBcInJvdGF0ZSgtM2RlZylcIixcbiAgICBcInpJbmRleDpiZWZvcmVcIjogLTEsXG4gICAgXCJwb3NpdGlvbjpiZWZvcmU6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwiY29udGVudDpiZWZvcmU6YWZ0ZXJcIjogXCJcXFwiXFxcIlwiLFxuICAgIFwidG9wOmJlZm9yZTphZnRlclwiOiBcIjIwcnB4XCIsXG4gICAgXCJib3R0b206YmVmb3JlOmFmdGVyXCI6IFwiMzBycHhcIixcbiAgICBcImxlZnQ6YmVmb3JlOmFmdGVyXCI6IFwiMjBycHhcIixcbiAgICBcIndpZHRoOmJlZm9yZTphZnRlclwiOiA1MCxcbiAgICBcImJveFNoYWRvdzpiZWZvcmU6YWZ0ZXJcIjogXCIwIDMwcnB4IDIwcnB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiLFxuICAgIFwidHJhbnNmb3JtOmJlZm9yZTphZnRlclwiOiBcInJvdGF0ZSgtM2RlZylcIixcbiAgICBcInpJbmRleDpiZWZvcmU6YWZ0ZXJcIjogLTEsXG4gICAgXCJyaWdodDphZnRlclwiOiBcIjIwcnB4XCIsXG4gICAgXCJ0cmFuc2Zvcm06YWZ0ZXJcIjogXCJyb3RhdGUoM2RlZylcIlxuICB9LFxuICBcInNoYWRvdy1ibHVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImNvbnRlbnQ6OmJlZm9yZVwiOiBcIlxcXCJcXFwiXCIsXG4gICAgXCJkaXNwbGF5OjpiZWZvcmVcIjogXCJibG9ja1wiLFxuICAgIFwiYmFja2dyb3VuZDo6YmVmb3JlXCI6IFwiaW5oZXJpdFwiLFxuICAgIFwiZmlsdGVyOjpiZWZvcmVcIjogXCJibHVyKDEwcnB4KVwiLFxuICAgIFwicG9zaXRpb246OmJlZm9yZVwiOiBcImFic29sdXRlXCIsXG4gICAgXCJ3aWR0aDo6YmVmb3JlXCI6IDEwMCxcbiAgICBcImhlaWdodDo6YmVmb3JlXCI6IDEwMCxcbiAgICBcInRvcDo6YmVmb3JlXCI6IFwiMTBycHhcIixcbiAgICBcImxlZnQ6OmJlZm9yZVwiOiBcIjEwcnB4XCIsXG4gICAgXCJ6SW5kZXg6OmJlZm9yZVwiOiAtMSxcbiAgICBcIm9wYWNpdHk6OmJlZm9yZVwiOiAwLjQsXG4gICAgXCJ0cmFuc2Zvcm1PcmlnaW46OmJlZm9yZVwiOiBcIjAgMFwiLFxuICAgIFwidHJhbnNmb3JtOjpiZWZvcmVcIjogXCJzY2FsZSgxLCAxKVwiXG4gIH0sXG4gIFwiY3UtYnRuXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImJvcmRlclwiOiBcIjBycHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtZmxleFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImJveFNpemluZ1wiOiBcImJvcmRlci1ib3hcIixcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI2NHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ0ZXh0RGVjb3JhdGlvblwiOiBcIm5vbmVcIixcbiAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZSgwcnB4LCAwcnB4KVwiLFxuICAgIFwiZGlzcGxheTo6YWZ0ZXJcIjogXCJub25lXCJcbiAgfSxcbiAgXCJibG9ja1wiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIlxuICB9LFxuICBcImN1LXRhZ1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI0cnB4XCIsXG4gICAgXCJ2ZXJ0aWNhbEFsaWduXCI6IFwibWlkZGxlXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWZsZXhcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3hTaXppbmdcIjogXCJib3JkZXItYm94XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTZycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjE2cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI0OHJweFwiLFxuICAgIFwiZm9udEZhbWlseVwiOiBcIkhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZcIixcbiAgICBcIndoaXRlU3BhY2VcIjogXCJub3dyYXBcIlxuICB9LFxuICBcImN1LWNhcHN1bGVcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImlubGluZS1mbGV4XCIsXG4gICAgXCJ2ZXJ0aWNhbEFsaWduXCI6IFwibWlkZGxlXCJcbiAgfSxcbiAgXCJjdS1hdmF0YXJcIjoge1xuICAgIFwiZm9udFZhcmlhbnRcIjogXCJzbWFsbC1jYXBzXCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMCxcbiAgICBcIm1hcmdpbkxlZnRcIjogMCxcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiAwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMCxcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtZmxleFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2NjY2NjY1wiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJ3aGl0ZVNwYWNlXCI6IFwibm93cmFwXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjY0cnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI2NHJweFwiLFxuICAgIFwiYmFja2dyb3VuZFNpemVcIjogXCJjb3ZlclwiLFxuICAgIFwiYmFja2dyb3VuZFBvc2l0aW9uXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ2ZXJ0aWNhbEFsaWduXCI6IFwibWlkZGxlXCIsXG4gICAgXCJmb250U2l6ZVwiOiAxLjVcbiAgfSxcbiAgXCJjdS1hdmF0YXItZ3JvdXBcIjoge1xuICAgIFwiZGlyZWN0aW9uXCI6IFwicnRsXCIsXG4gICAgXCJ1bmljb2RlQmlkaVwiOiBcImJpZGktb3ZlcnJpZGVcIixcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwcnB4XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiaW5saW5lLWJsb2NrXCJcbiAgfSxcbiAgXCJjdS1wcm9ncmVzc1wiOiB7XG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjhycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNlYmVlZjVcIixcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtZmxleFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogMTAwXG4gIH0sXG4gIFwiY3UtbG9hZFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMyxcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiZm9udEZhbWlseTo6YmVmb3JlXCI6IFwiXFxcImN1SWNvblxcXCJcIixcbiAgICBcImRpc3BsYXk6OmJlZm9yZVwiOiBcImlubGluZS1ibG9ja1wiLFxuICAgIFwibWFyZ2luUmlnaHQ6OmJlZm9yZVwiOiBcIjZycHhcIlxuICB9LFxuICBcImxvYWQtcHJvZ3Jlc3NcIjoge1xuICAgIFwicG9pbnRlckV2ZW50c1wiOiBcIm5vbmVcIixcbiAgICBcInRvcFwiOiAwLFxuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwid2lkdGhcIjogMTAwLFxuICAgIFwibGVmdFwiOiAwLFxuICAgIFwiekluZGV4XCI6IDIwMDBcbiAgfSxcbiAgXCJncmF5c2NhbGVcIjoge1xuICAgIFwiZmlsdGVyXCI6IFwiZ3JheXNjYWxlKDEpXCJcbiAgfSxcbiAgXCJjdS1iYXJcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIm1pbkhlaWdodFwiOiBcIjEwMHJweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCJcbiAgfSxcbiAgXCJjdS10YWJiYXItaGVpZ2h0XCI6IHtcbiAgICBcIm1pbkhlaWdodFwiOiBcIjEwMHJweFwiXG4gIH0sXG4gIFwiY3UtY3VzdG9tXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiXG4gIH0sXG4gIFwibmF2XCI6IHtcbiAgICBcIndoaXRlU3BhY2VcIjogXCJub3dyYXBcIlxuICB9LFxuICBcImN1LXRpbWVsaW5lXCI6IHtcbiAgICBcImRpc3BsYXlcIjogXCJibG9ja1wiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiY3UtY2hhdFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiY3UtY2FyZFwiOiB7XG4gICAgXCJkaXNwbGF5XCI6IFwiYmxvY2tcIixcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCJcbiAgfSxcbiAgXCJjdS1mb3JtLWdyb3VwXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjFycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBycHhcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJtaW5IZWlnaHRcIjogXCIxMDBycHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiXG4gIH0sXG4gIFwiY3UtbW9kYWxcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJ6SW5kZXhcIjogMTExMCxcbiAgICBcIm9wYWNpdHlcIjogMCxcbiAgICBcIm91dGxpbmVcIjogMCxcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiTXNUcmFuc2Zvcm1cIjogXCJzY2FsZSgxLjE4NSlcIixcbiAgICBcInRyYW5zZm9ybVwiOiBcInNjYWxlKDEuMTg1KVwiLFxuICAgIFwiYmFja2ZhY2VWaXNpYmlsaXR5XCI6IFwiaGlkZGVuXCIsXG4gICAgXCJwZXJzcGVjdGl2ZVwiOiBcIjIwMDBycHhcIixcbiAgICBcImJhY2tncm91bmRcIjogXCJyZ2JhKDAsIDAsIDAsIDAuNilcIixcbiAgICBcInRyYW5zaXRpb25EdXJhdGlvblwiOiAzMDAsXG4gICAgXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIjogXCJlYXNlLWluLW91dFwiLFxuICAgIFwidHJhbnNpdGlvbkRlbGF5XCI6IDAsXG4gICAgXCJwb2ludGVyRXZlbnRzXCI6IFwibm9uZVwiLFxuICAgIFwiY29udGVudDo6YmVmb3JlXCI6IFwiXFxcIlxcXFwyMDBCXFxcIlwiLFxuICAgIFwiZGlzcGxheTo6YmVmb3JlXCI6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgXCJoZWlnaHQ6OmJlZm9yZVwiOiAxMDAsXG4gICAgXCJ2ZXJ0aWNhbEFsaWduOjpiZWZvcmVcIjogXCJtaWRkbGVcIlxuICB9LFxuICBcIkBUUkFOU0lUSU9OXCI6IHtcbiAgICBcImN1LW1vZGFsXCI6IHtcbiAgICAgIFwiZHVyYXRpb25cIjogMzAwLFxuICAgICAgXCJ0aW1pbmdGdW5jdGlvblwiOiBcImVhc2UtaW4tb3V0XCIsXG4gICAgICBcImRlbGF5XCI6IDBcbiAgICB9XG4gIH0sXG4gIFwiY3UtZGlhbG9nXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBcInZlcnRpY2FsQWxpZ25cIjogXCJtaWRkbGVcIixcbiAgICBcIndpZHRoXCI6IFwiNjgwcnB4XCIsXG4gICAgXCJtYXhXaWR0aFwiOiAxMDAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjhmOGY4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMHJweFwiLFxuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIlxuICB9LFxuICBcInNjcmVlbi1zd2lwZXJcIjoge1xuICAgIFwibWluSGVpZ2h0XCI6IFwiMzc1cnB4XCJcbiAgfSxcbiAgXCJjYXJkLXN3aXBlclwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI0MjBycHhcIlxuICB9LFxuICBcInRvd2VyLXN3aXBlclwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI0MjBycHhcIixcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcIm1heFdpZHRoXCI6IFwiNzUwcnB4XCIsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiXG4gIH0sXG4gIFwiY3Utc3RlcHNcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIlxuICB9LFxuICBcImZsZXhcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcImJhc2lzLXhzXCI6IHtcbiAgICBcImZsZXhCYXNpc1wiOiAyMFxuICB9LFxuICBcImJhc2lzLXNtXCI6IHtcbiAgICBcImZsZXhCYXNpc1wiOiA0MFxuICB9LFxuICBcImJhc2lzLWRmXCI6IHtcbiAgICBcImZsZXhCYXNpc1wiOiA1MFxuICB9LFxuICBcImJhc2lzLWxnXCI6IHtcbiAgICBcImZsZXhCYXNpc1wiOiA2MFxuICB9LFxuICBcImJhc2lzLXhsXCI6IHtcbiAgICBcImZsZXhCYXNpc1wiOiA4MFxuICB9LFxuICBcImZsZXgtc3ViXCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcImZsZXgtdHdpY2VcIjoge1xuICAgIFwiZmxleFwiOiAyXG4gIH0sXG4gIFwiZmxleC10cmVibGVcIjoge1xuICAgIFwiZmxleFwiOiAzXG4gIH0sXG4gIFwiZmxleC1kaXJlY3Rpb25cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiZmxleC13cmFwXCI6IHtcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiXG4gIH0sXG4gIFwiYWxpZ24tc3RhcnRcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIlxuICB9LFxuICBcImFsaWduLWVuZFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcImFsaWduLWNlbnRlclwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJhbGlnbi1zdHJldGNoXCI6IHtcbiAgICBcImFsaWduSXRlbXNcIjogXCJzdHJldGNoXCJcbiAgfSxcbiAgXCJzZWxmLXN0YXJ0XCI6IHtcbiAgICBcImFsaWduU2VsZlwiOiBcImZsZXgtc3RhcnRcIlxuICB9LFxuICBcInNlbGYtY2VudGVyXCI6IHtcbiAgICBcImFsaWduU2VsZlwiOiBcImZsZXgtY2VudGVyXCJcbiAgfSxcbiAgXCJzZWxmLWVuZFwiOiB7XG4gICAgXCJhbGlnblNlbGZcIjogXCJmbGV4LWVuZFwiXG4gIH0sXG4gIFwic2VsZi1zdHJldGNoXCI6IHtcbiAgICBcImFsaWduU2VsZlwiOiBcInN0cmV0Y2hcIlxuICB9LFxuICBcImp1c3RpZnktc3RhcnRcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCJcbiAgfSxcbiAgXCJqdXN0aWZ5LWVuZFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCJqdXN0aWZ5LWNlbnRlclwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwianVzdGlmeS1iZXR3ZWVuXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiXG4gIH0sXG4gIFwianVzdGlmeS1hcm91bmRcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1hcm91bmRcIlxuICB9LFxuICBcImdyaWRcIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiXG4gIH0sXG4gIFwibWFyZ2luLTBcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDAsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDBcbiAgfSxcbiAgXCJtYXJnaW4teHNcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwcnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm1hcmdpbi1zbVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjBycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibWFyZ2luXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjMwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tbGdcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwcnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm1hcmdpbi14bFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1MHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNTBycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibWFyZ2luLXRvcC14c1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibWFyZ2luLXRvcC1zbVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibWFyZ2luLXRvcFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibWFyZ2luLXRvcC1sZ1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibWFyZ2luLXRvcC14bFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibWFyZ2luLXJpZ2h0LXhzXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm1hcmdpbi1yaWdodC1zbVwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tcmlnaHRcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibWFyZ2luLXJpZ2h0LWxnXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm1hcmdpbi1yaWdodC14bFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tYm90dG9tLXhzXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tYm90dG9tLXNtXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tYm90dG9tXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tYm90dG9tLWxnXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tYm90dG9tLXhsXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tbGVmdC14c1wiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm1hcmdpbi1sZWZ0LXNtXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibWFyZ2luLWxlZnRcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJtYXJnaW4tbGVmdC1sZ1wiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm1hcmdpbi1sZWZ0LXhsXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibWFyZ2luLWxyLXhzXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibWFyZ2luLWxyLXNtXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibWFyZ2luLWxyXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibWFyZ2luLWxyLWxnXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI0MHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibWFyZ2luLWxyLXhsXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1MHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibWFyZ2luLXRiLXhzXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibWFyZ2luLXRiLXNtXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibWFyZ2luLXRiXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjMwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibWFyZ2luLXRiLWxnXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjQwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibWFyZ2luLXRiLXhsXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjUwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy0wXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdSaWdodFwiOiAwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMFxuICB9LFxuICBcInBhZGRpbmcteHNcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJwYWRkaW5nLXNtXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicGFkZGluZ1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcInBhZGRpbmctbGdcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjQwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjQwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJwYWRkaW5nLXhsXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy10b3AteHNcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJwYWRkaW5nLXRvcC1zbVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBycHhcIlxuICB9LFxuICBcInBhZGRpbmctdG9wXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy10b3AtbGdcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJwYWRkaW5nLXRvcC14bFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNTBycHhcIlxuICB9LFxuICBcInBhZGRpbmctcmlnaHQteHNcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcInBhZGRpbmctcmlnaHQtc21cIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcInBhZGRpbmctcmlnaHRcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcInBhZGRpbmctcmlnaHQtbGdcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcInBhZGRpbmctcmlnaHQteGxcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcInBhZGRpbmctYm90dG9tLXhzXCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy1ib3R0b20tc21cIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJwYWRkaW5nLWJvdHRvbVwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBycHhcIlxuICB9LFxuICBcInBhZGRpbmctYm90dG9tLWxnXCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy1ib3R0b20teGxcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJwYWRkaW5nLWxlZnQteHNcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy1sZWZ0LXNtXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcInBhZGRpbmctbGVmdFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJwYWRkaW5nLWxlZnQtbGdcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicGFkZGluZy1sZWZ0LXhsXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcInBhZGRpbmctbHIteHNcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcInBhZGRpbmctbHItc21cIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcInBhZGRpbmctbHJcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcInBhZGRpbmctbHItbGdcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcInBhZGRpbmctbHIteGxcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcInBhZGRpbmctdGIteHNcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBycHhcIlxuICB9LFxuICBcInBhZGRpbmctdGItc21cIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBycHhcIlxuICB9LFxuICBcInBhZGRpbmctdGJcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBycHhcIlxuICB9LFxuICBcInBhZGRpbmctdGItbGdcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjQwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNDBycHhcIlxuICB9LFxuICBcInBhZGRpbmctdGIteGxcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjUwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNTBycHhcIlxuICB9LFxuICBcImNmXCI6IHtcbiAgICBcImNvbnRlbnQ6OmFmdGVyXCI6IFwiXFxcIiBcXFwiXCIsXG4gICAgXCJkaXNwbGF5OjphZnRlclwiOiBcInRhYmxlXCIsXG4gICAgXCJjb250ZW50OjphZnRlcjo6YmVmb3JlXCI6IFwiXFxcIiBcXFwiXCIsXG4gICAgXCJkaXNwbGF5OjphZnRlcjo6YmVmb3JlXCI6IFwidGFibGVcIixcbiAgICBcImNsZWFyOjphZnRlclwiOiBcImJvdGhcIlxuICB9LFxuICBcImZsXCI6IHtcbiAgICBcImZsb2F0XCI6IFwibGVmdFwiXG4gIH0sXG4gIFwiZnJcIjoge1xuICAgIFwiZmxvYXRcIjogXCJyaWdodFwiXG4gIH0sXG4gIFwibGluZS1yZWRcIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyXCI6IFwiI2U1NGQ0MlwiLFxuICAgIFwiY29sb3JcIjogXCIjZTU0ZDQyXCJcbiAgfSxcbiAgXCJsaW5lcy1yZWRcIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyOjphZnRlclwiOiBcIiNlNTRkNDJcIixcbiAgICBcImNvbG9yXCI6IFwiI2U1NGQ0MlwiXG4gIH0sXG4gIFwibGluZS1vcmFuZ2VcIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyXCI6IFwiI2YzN2IxZFwiLFxuICAgIFwiY29sb3JcIjogXCIjZjM3YjFkXCJcbiAgfSxcbiAgXCJsaW5lcy1vcmFuZ2VcIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyOjphZnRlclwiOiBcIiNmMzdiMWRcIixcbiAgICBcImNvbG9yXCI6IFwiI2YzN2IxZFwiXG4gIH0sXG4gIFwibGluZS15ZWxsb3dcIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyXCI6IFwiI2ZiYmQwOFwiLFxuICAgIFwiY29sb3JcIjogXCIjZmJiZDA4XCJcbiAgfSxcbiAgXCJsaW5lcy15ZWxsb3dcIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyOjphZnRlclwiOiBcIiNmYmJkMDhcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZiYmQwOFwiXG4gIH0sXG4gIFwibGluZS1vbGl2ZVwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXJcIjogXCIjOGRjNjNmXCIsXG4gICAgXCJjb2xvclwiOiBcIiM4ZGM2M2ZcIlxuICB9LFxuICBcImxpbmVzLW9saXZlXCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlcjo6YWZ0ZXJcIjogXCIjOGRjNjNmXCIsXG4gICAgXCJjb2xvclwiOiBcIiM4ZGM2M2ZcIlxuICB9LFxuICBcImxpbmUtZ3JlZW5cIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyXCI6IFwiIzM5YjU0YVwiLFxuICAgIFwiY29sb3JcIjogXCIjMzliNTRhXCJcbiAgfSxcbiAgXCJsaW5lcy1ncmVlblwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiIzM5YjU0YVwiLFxuICAgIFwiY29sb3JcIjogXCIjMzliNTRhXCJcbiAgfSxcbiAgXCJsaW5lLWN5YW5cIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyXCI6IFwiIzFjYmJiNFwiLFxuICAgIFwiY29sb3JcIjogXCIjMWNiYmI0XCJcbiAgfSxcbiAgXCJsaW5lcy1jeWFuXCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlcjo6YWZ0ZXJcIjogXCIjMWNiYmI0XCIsXG4gICAgXCJjb2xvclwiOiBcIiMxY2JiYjRcIlxuICB9LFxuICBcImxpbmUtYmx1ZVwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXJcIjogXCIjMDA4MWZmXCIsXG4gICAgXCJjb2xvclwiOiBcIiMwMDgxZmZcIlxuICB9LFxuICBcImxpbmVzLWJsdWVcIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyOjphZnRlclwiOiBcIiMwMDgxZmZcIixcbiAgICBcImNvbG9yXCI6IFwiIzAwODFmZlwiXG4gIH0sXG4gIFwibGluZS1wdXJwbGVcIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyXCI6IFwiIzY3MzliNlwiLFxuICAgIFwiY29sb3JcIjogXCIjNjczOWI2XCJcbiAgfSxcbiAgXCJsaW5lcy1wdXJwbGVcIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyOjphZnRlclwiOiBcIiM2NzM5YjZcIixcbiAgICBcImNvbG9yXCI6IFwiIzY3MzliNlwiXG4gIH0sXG4gIFwibGluZS1tYXV2ZVwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXJcIjogXCIjOWMyNmIwXCIsXG4gICAgXCJjb2xvclwiOiBcIiM5YzI2YjBcIlxuICB9LFxuICBcImxpbmVzLW1hdXZlXCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlcjo6YWZ0ZXJcIjogXCIjOWMyNmIwXCIsXG4gICAgXCJjb2xvclwiOiBcIiM5YzI2YjBcIlxuICB9LFxuICBcImxpbmUtcGlua1wiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXJcIjogXCIjZTAzOTk3XCIsXG4gICAgXCJjb2xvclwiOiBcIiNlMDM5OTdcIlxuICB9LFxuICBcImxpbmVzLXBpbmtcIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyOjphZnRlclwiOiBcIiNlMDM5OTdcIixcbiAgICBcImNvbG9yXCI6IFwiI2UwMzk5N1wiXG4gIH0sXG4gIFwibGluZS1icm93blwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXJcIjogXCIjYTU2NzNmXCIsXG4gICAgXCJjb2xvclwiOiBcIiNhNTY3M2ZcIlxuICB9LFxuICBcImxpbmVzLWJyb3duXCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlcjo6YWZ0ZXJcIjogXCIjYTU2NzNmXCIsXG4gICAgXCJjb2xvclwiOiBcIiNhNTY3M2ZcIlxuICB9LFxuICBcImxpbmUtZ3JleVwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXJcIjogXCIjODc5OWEzXCIsXG4gICAgXCJjb2xvclwiOiBcIiM4Nzk5YTNcIlxuICB9LFxuICBcImxpbmVzLWdyZXlcIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyOjphZnRlclwiOiBcIiM4Nzk5YTNcIixcbiAgICBcImNvbG9yXCI6IFwiIzg3OTlhM1wiXG4gIH0sXG4gIFwibGluZS1ncmF5XCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlclwiOiBcIiNhYWFhYWFcIixcbiAgICBcImNvbG9yXCI6IFwiI2FhYWFhYVwiXG4gIH0sXG4gIFwibGluZXMtZ3JheVwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXI6OmFmdGVyXCI6IFwiI2FhYWFhYVwiLFxuICAgIFwiY29sb3JcIjogXCIjYWFhYWFhXCJcbiAgfSxcbiAgXCJsaW5lLWJsYWNrXCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlclwiOiBcIiMzMzMzMzNcIixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiXG4gIH0sXG4gIFwibGluZXMtYmxhY2tcIjoge1xuICAgIFwiYm9yZGVyQ29sb3I6OmFmdGVyOjphZnRlclwiOiBcIiMzMzMzMzNcIixcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiXG4gIH0sXG4gIFwibGluZS13aGl0ZVwiOiB7XG4gICAgXCJib3JkZXJDb2xvcjo6YWZ0ZXJcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImxpbmVzLXdoaXRlXCI6IHtcbiAgICBcImJvcmRlckNvbG9yOjphZnRlcjo6YWZ0ZXJcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImJnLW15Ymx1ZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA3QUZGXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImJnLXJlZFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZTU0ZDQyXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImJnLW9yYW5nZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjM3YjFkXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImJnLXllbGxvd1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmJiZDA4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMzMzMzMzNcIlxuICB9LFxuICBcImJnLW9saXZlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM4ZGM2M2ZcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctZ3JlZW5cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzM5YjU0YVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy1jeWFuXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMxY2JiYjRcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctYmx1ZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA4MWZmXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImJnLXB1cnBsZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNjczOWI2XCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImJnLW1hdXZlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM5YzI2YjBcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctcGlua1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZTAzOTk3XCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImJnLWJyb3duXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNhNTY3M2ZcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctZ3JleVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjODc5OWEzXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImJnLWdyYXlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2YwZjBmMFwiLFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCJcbiAgfSxcbiAgXCJiZy1ibGFja1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMzMzMzMzXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImJnLXdoaXRlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImNvbG9yXCI6IFwiIzY2NjY2NlwiXG4gIH0sXG4gIFwiYmctc2hhZGVUb3BcIjoge1xuICAgIFwiYmFja2dyb3VuZEltYWdlXCI6IFwibGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMSksIHJnYmEoMCwgMCwgMCwgMC4wMSkpXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImJnLXNoYWRlQm90dG9tXCI6IHtcbiAgICBcImJhY2tncm91bmRJbWFnZVwiOiBcImxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuMDEpLCByZ2JhKDAsIDAsIDAsIDEpKVwiLFxuICAgIFwiY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJiZy1ncmFkdWFsLXJlZFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kSW1hZ2VcIjogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmNDNmM2IsICNlYzAwOGMpXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImJnLWdyYWR1YWwtb3JhbmdlXCI6IHtcbiAgICBcImJhY2tncm91bmRJbWFnZVwiOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmOTcwMCwgI2VkMWMyNClcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctZ3JhZHVhbC1ncmVlblwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kSW1hZ2VcIjogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMzOWI1NGEsICM4ZGM2M2YpXCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImJnLWdyYWR1YWwtcHVycGxlXCI6IHtcbiAgICBcImJhY2tncm91bmRJbWFnZVwiOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgIzkwMDBmZiwgIzVlMDBmZilcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctZ3JhZHVhbC1waW5rXCI6IHtcbiAgICBcImJhY2tncm91bmRJbWFnZVwiOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgI2VjMDA4YywgIzY3MzliNilcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctZ3JhZHVhbC1ibHVlXCI6IHtcbiAgICBcImJhY2tncm91bmRJbWFnZVwiOiBcImxpbmVhci1ncmFkaWVudCg0NWRlZywgIzAwODFmZiwgIzFjYmJiNClcIixcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiYmctaW1nXCI6IHtcbiAgICBcImJhY2tncm91bmRTaXplXCI6IFwiY292ZXJcIixcbiAgICBcImJhY2tncm91bmRQb3NpdGlvblwiOiBcImNlbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZFJlcGVhdFwiOiBcIm5vLXJlcGVhdFwiXG4gIH0sXG4gIFwiYmctbWFza1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMzMzMzMzXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJjb250ZW50OjphZnRlclwiOiBcIlxcXCJcXFwiXCIsXG4gICAgXCJ3aWR0aDo6YWZ0ZXJcIjogMTAwLFxuICAgIFwiaGVpZ2h0OjphZnRlclwiOiAxMDAsXG4gICAgXCJkaXNwbGF5OjphZnRlclwiOiBcImJsb2NrXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3I6OmFmdGVyXCI6IFwicmdiYSgwLDAsMCwwLjQpXCIsXG4gICAgXCJwb3NpdGlvbjo6YWZ0ZXJcIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwibGVmdDo6YWZ0ZXJcIjogMCxcbiAgICBcInJpZ2h0OjphZnRlclwiOiAwLFxuICAgIFwiYm90dG9tOjphZnRlclwiOiAwLFxuICAgIFwidG9wOjphZnRlclwiOiAwXG4gIH0sXG4gIFwiYmctdmlkZW9cIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiXG4gIH0sXG4gIFwidGV4dC14c1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJ0ZXh0LXNtXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjRycHhcIlxuICB9LFxuICBcInRleHQtZGZcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyOHJweFwiXG4gIH0sXG4gIFwidGV4dC1sZ1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMycnB4XCJcbiAgfSxcbiAgXCJ0ZXh0LXhsXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzZycHhcIlxuICB9LFxuICBcInRleHQteHhsXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNDRycHhcIlxuICB9LFxuICBcInRleHQtc2xcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI4MHJweFwiXG4gIH0sXG4gIFwidGV4dC14c2xcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxMjBycHhcIlxuICB9LFxuICBcInRleHQtQWJjXCI6IHtcbiAgICBcInRleHRUcmFuc2Zvcm1cIjogXCJDYXBpdGFsaXplXCJcbiAgfSxcbiAgXCJ0ZXh0LUFCQ1wiOiB7XG4gICAgXCJ0ZXh0VHJhbnNmb3JtXCI6IFwiVXBwZXJjYXNlXCJcbiAgfSxcbiAgXCJ0ZXh0LWFiY1wiOiB7XG4gICAgXCJ0ZXh0VHJhbnNmb3JtXCI6IFwiTG93ZXJjYXNlXCJcbiAgfSxcbiAgXCJ0ZXh0LXByaWNlXCI6IHtcbiAgICBcImNvbnRlbnQ6OmJlZm9yZVwiOiBcIlxcXCLCpVxcXCJcIixcbiAgICBcImZvbnRTaXplOjpiZWZvcmVcIjogODAsXG4gICAgXCJtYXJnaW5SaWdodDo6YmVmb3JlXCI6IFwiNHJweFwiXG4gIH0sXG4gIFwidGV4dC1jdXRcIjoge1xuICAgIFwidGV4dE92ZXJmbG93XCI6IFwiZWxsaXBzaXNcIixcbiAgICBcIndoaXRlU3BhY2VcIjogXCJub3dyYXBcIixcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCJcbiAgfSxcbiAgXCJ0ZXh0LWJvbGRcIjoge1xuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIlxuICB9LFxuICBcInRleHQtY2VudGVyXCI6IHtcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwidGV4dC1jb250ZW50XCI6IHtcbiAgICBcImxpbmVIZWlnaHRcIjogMS42XG4gIH0sXG4gIFwidGV4dC1sZWZ0XCI6IHtcbiAgICBcInRleHRBbGlnblwiOiBcImxlZnRcIlxuICB9LFxuICBcInRleHQtcmlnaHRcIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwicmlnaHRcIlxuICB9LFxuICBcInRleHQtcmVkXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2U1NGQ0MlwiXG4gIH0sXG4gIFwidGV4dC1vcmFuZ2VcIjoge1xuICAgIFwiY29sb3JcIjogXCIjZjM3YjFkXCJcbiAgfSxcbiAgXCJ0ZXh0LXllbGxvd1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmYmJkMDhcIlxuICB9LFxuICBcInRleHQtb2xpdmVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjOGRjNjNmXCJcbiAgfSxcbiAgXCJ0ZXh0LWdyZWVuXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzM5YjU0YVwiXG4gIH0sXG4gIFwidGV4dC1jeWFuXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzFjYmJiNFwiXG4gIH0sXG4gIFwidGV4dC1ibHVlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwODFmZlwiXG4gIH0sXG4gIFwidGV4dC1wdXJwbGVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNjczOWI2XCJcbiAgfSxcbiAgXCJ0ZXh0LW1hdXZlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzljMjZiMFwiXG4gIH0sXG4gIFwidGV4dC1waW5rXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2UwMzk5N1wiXG4gIH0sXG4gIFwidGV4dC1icm93blwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNhNTY3M2ZcIlxuICB9LFxuICBcInRleHQtZ3JleVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM4Nzk5YTNcIlxuICB9LFxuICBcInRleHQtZ3JheVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNhYWFhYWFcIlxuICB9LFxuICBcInRleHQtYmxhY2tcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCJcbiAgfSxcbiAgXCJ0ZXh0LXdoaXRlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiaWNvbmZvbnRcIjoge1xuICAgIFwiZm9udEZhbWlseVwiOiBcImljb25mb250XCJcbiAgfSxcbiAgXCJ2aWV3XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjhycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMS44LFxuICAgIFwiY29sb3JcIjogXCIjMEUxNTFEXCJcbiAgfSxcbiAgXCJ0ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjhycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMS44LFxuICAgIFwiY29sb3JcIjogXCIjMEUxNTFEXCJcbiAgfSxcbiAgXCJ3LTEwMFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiXG4gIH0sXG4gIFwicm93XCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiLTIwcnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiLTIwcnB4XCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcImNvbC0xXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjYyLjVycHhcIlxuICB9LFxuICBcImNvbC0yXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEyNXJweFwiXG4gIH0sXG4gIFwiY29sLTNcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTg3LjVycHhcIlxuICB9LFxuICBcImNvbC00XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjI1MHJweFwiXG4gIH0sXG4gIFwiY29sLTVcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIixcbiAgICBcIndpZHRoXCI6IFwiMzEyLjVycHhcIlxuICB9LFxuICBcImNvbC02XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjM3NXJweFwiXG4gIH0sXG4gIFwiY29sLTdcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIixcbiAgICBcIndpZHRoXCI6IFwiNDM3LjVycHhcIlxuICB9LFxuICBcImNvbC04XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjUwMHJweFwiXG4gIH0sXG4gIFwiY29sLTlcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIixcbiAgICBcIndpZHRoXCI6IFwiNTYyLjVycHhcIlxuICB9LFxuICBcImNvbC0xMFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCI2MjVycHhcIlxuICB9LFxuICBcImNvbC0xMVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCI2ODcuNXJweFwiXG4gIH0sXG4gIFwiY29sLTEyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjc1MHJweFwiXG4gIH0sXG4gIFwiY29sLW9mZnNldC0xMlwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNzUwcnB4XCJcbiAgfSxcbiAgXCJjb2wtb2Zmc2V0LTExXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI2ODcuNXJweFwiXG4gIH0sXG4gIFwiY29sLW9mZnNldC0xMFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNjI1cnB4XCJcbiAgfSxcbiAgXCJjb2wtb2Zmc2V0LTlcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjU2Mi41cnB4XCJcbiAgfSxcbiAgXCJjb2wtb2Zmc2V0LThcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjUwMHJweFwiXG4gIH0sXG4gIFwiY29sLW9mZnNldC03XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI0MzcuNXJweFwiXG4gIH0sXG4gIFwiY29sLW9mZnNldC02XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzNzVycHhcIlxuICB9LFxuICBcImNvbC1vZmZzZXQtNVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzEyLjVycHhcIlxuICB9LFxuICBcImNvbC1vZmZzZXQtNFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjUwcnB4XCJcbiAgfSxcbiAgXCJjb2wtb2Zmc2V0LTNcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjE4Ny41cnB4XCJcbiAgfSxcbiAgXCJjb2wtb2Zmc2V0LTJcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEyNXJweFwiXG4gIH0sXG4gIFwiY29sLW9mZnNldC0xXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI2Mi41cnB4XCJcbiAgfSxcbiAgXCJjb2wtb2Zmc2V0LTBcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiAwXG4gIH0sXG4gIFwiZmxleC1yb3dcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiZmxleC1jb2x1bW5cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiZmxleC1yb3ctcmV2ZXJzZVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93LXJldmVyc2VcIlxuICB9LFxuICBcImZsZXgtY29sdW1uLXJldmVyc2VcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtbi1yZXZlcnNlXCJcbiAgfSxcbiAgXCJmbGV4LW5vd3JhcFwiOiB7XG4gICAgXCJmbGV4V3JhcFwiOiBcIm5vd3JhcFwiXG4gIH0sXG4gIFwiZmxleC0xXCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcImZsZXgtMlwiOiB7XG4gICAgXCJmbGV4XCI6IDJcbiAgfSxcbiAgXCJmbGV4LTNcIjoge1xuICAgIFwiZmxleFwiOiAzXG4gIH0sXG4gIFwiZmxleC00XCI6IHtcbiAgICBcImZsZXhcIjogNFxuICB9LFxuICBcImZsZXgtNVwiOiB7XG4gICAgXCJmbGV4XCI6IDVcbiAgfSxcbiAgXCJjb250YWluZXJcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm0tMFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMCxcbiAgICBcIm1hcmdpbkxlZnRcIjogMFxuICB9LFxuICBcIm0tMVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibS0yXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMHJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtLTNcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwcnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm0tNFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0MHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI0MHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibS01XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjUwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjUwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1MHJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJtdC0wXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiAwXG4gIH0sXG4gIFwibXQtMVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibXQtMlwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibXQtM1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibXQtNFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibXQtNVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibWItMFwiOiB7XG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMFxuICB9LFxuICBcIm1iLTFcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm1iLTJcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm1iLTNcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm1iLTRcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm1iLTVcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNTBycHhcIlxuICB9LFxuICBcIm1sLTBcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiAwXG4gIH0sXG4gIFwibWwtMVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm1sLTJcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtbC0zXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibWwtNFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm1sLTVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJtci0wXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDBcbiAgfSxcbiAgXCJtci0xXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm1yLTJcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibXItM1wiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJtci00XCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm1yLTVcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibXktMFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogMCxcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiAwXG4gIH0sXG4gIFwibXktMVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm15LTJcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJteS0zXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjMwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibXktNFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0MHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm15LTVcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJteC0wXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogMCxcbiAgICBcIm1hcmdpblJpZ2h0XCI6IDBcbiAgfSxcbiAgXCJteC0xXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwibXgtMlwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm14LTNcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJteC00XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI0MHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwibXgtNVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNTBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcInAtMFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDBcbiAgfSxcbiAgXCJwXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1cnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNXJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJwLTFcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJwLTJcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJwLTNcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJwLTRcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjQwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjQwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJwLTVcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjUwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjUwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJwdC0wXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogMFxuICB9LFxuICBcInB0XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJwdC0xXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicHQtMlwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBycHhcIlxuICB9LFxuICBcInB0LTNcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJwdC00XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicHQtNVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNTBycHhcIlxuICB9LFxuICBcInBiLTBcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwXG4gIH0sXG4gIFwicGItMVwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBycHhcIlxuICB9LFxuICBcInBiXCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJwYi0yXCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicGItM1wiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBycHhcIlxuICB9LFxuICBcInBiLTRcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJwYi01XCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicGwtMFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwXG4gIH0sXG4gIFwicGxcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJwbC0xXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcInBsLTJcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicGwtM1wiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJwbC00XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcInBsLTVcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicHItMFwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMFxuICB9LFxuICBcInByXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjVycHhcIlxuICB9LFxuICBcInByLTFcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcInByLTJcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcInByLTNcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcInByLTRcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcInByLTVcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcInB5LTBcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiAwXG4gIH0sXG4gIFwicHlcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjVycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJweS0xXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJweS0yXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJweS0zXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJweS00XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0MHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJweS01XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJweC0wXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDAsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMFxuICB9LFxuICBcInB4LTFcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcInB4XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNXJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNXJweFwiXG4gIH0sXG4gIFwicHgtMlwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicHgtM1wiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicHgtNFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicHgtNVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjUwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwiZm9udC1zbWFsbFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJmb250LXNtXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMjVycHhcIlxuICB9LFxuICBcImZvbnRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwiZm9udC1tZFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjM1cnB4XCJcbiAgfSxcbiAgXCJmb250LWxnXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNDBycHhcIlxuICB9LFxuICBcImgxXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiODBycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMS44XG4gIH0sXG4gIFwiaDJcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI2MHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxLjhcbiAgfSxcbiAgXCJoM1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjQ1cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEuOFxuICB9LFxuICBcImg0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzJycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMS44XG4gIH0sXG4gIFwiaDVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxLjhcbiAgfSxcbiAgXCJoNlwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEuOFxuICB9LFxuICBcInRleHQtdGhyb3VnaFwiOiB7XG4gICAgXCJ0ZXh0RGVjb3JhdGlvblwiOiBcImxpbmUtdGhyb3VnaFwiXG4gIH0sXG4gIFwidGV4dC1lbGxpcHNpc1wiOiB7XG4gICAgXCJsaW5lc1wiOiAxXG4gIH0sXG4gIFwiZm9udC13ZWlnaHQtbGlnaHRcIjoge1xuICAgIFwiZm9udFdlaWdodFwiOiBcIjMwMFwiXG4gIH0sXG4gIFwiZm9udC13ZWlnaHQtbGlnaHRlclwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiMTAwXCJcbiAgfSxcbiAgXCJmb250LXdlaWdodC1ub3JtYWxcIjoge1xuICAgIFwiZm9udFdlaWdodFwiOiBcIjQwMFwiXG4gIH0sXG4gIFwiZm9udC13ZWlnaHQtYm9sZFwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNzAwXCJcbiAgfSxcbiAgXCJmb250LXdlaWdodC1ib2xkZXJcIjoge1xuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIlxuICB9LFxuICBcImZvbnQtaXRhbGljXCI6IHtcbiAgICBcImZvbnRTdHlsZVwiOiBcIml0YWxpY1wiXG4gIH0sXG4gIFwidGV4dC1wcmltYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwN2JmZlwiXG4gIH0sXG4gIFwidGV4dC1ob3Zlci1wcmltYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwNTZiM1wiXG4gIH0sXG4gIFwidGV4dC1zZWNvbmRhcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJ0ZXh0LWhvdmVyLXNlY29uZGFyeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM0OTRmNTRcIlxuICB9LFxuICBcInRleHQtc3VjY2Vzc1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMyOGE3NDVcIlxuICB9LFxuICBcInRleHQtaG92ZXItc3VjY2Vzc1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMxOTY5MmNcIlxuICB9LFxuICBcInRleHQtaW5mb1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMxN2EyYjhcIlxuICB9LFxuICBcInRleHQtaG92ZXItaW5mb1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwZjY2NzRcIlxuICB9LFxuICBcInRleHQtd2FybmluZ1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcInRleHQtaG92ZXItd2FybmluZ1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNiYThiMDBcIlxuICB9LFxuICBcInRleHQtZGFuZ2VyXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2RjMzU0NVwiXG4gIH0sXG4gIFwidGV4dC1ob3Zlci1kYW5nZXJcIjoge1xuICAgIFwiY29sb3JcIjogXCIjYTcxZDJhXCJcbiAgfSxcbiAgXCJ0ZXh0LWxpZ2h0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2Y4ZjlmYVwiXG4gIH0sXG4gIFwidGV4dC1ob3Zlci1saWdodFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNjYmQzZGFcIlxuICB9LFxuICBcInRleHQtZGFya1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMzNDNhNDBcIlxuICB9LFxuICBcInRleHQtaG92ZXItZGFya1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMxMjE0MTZcIlxuICB9LFxuICBcInRleHQtYm9keVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMyMTI1MjlcIlxuICB9LFxuICBcInRleHQtbXV0ZWRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJ0ZXh0LWxpZ2h0LW11dGVkXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0E5QTVBMFwiXG4gIH0sXG4gIFwidGV4dC1saWdodC1ibGFja1wiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC41KVwiXG4gIH0sXG4gIFwidGV4dC1saWdodC13aGl0ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiXG4gIH0sXG4gIFwiYmctcHJpbWFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA3YmZmXCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1wcmltYXJ5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvcjpob3ZlclwiOiBcIiMwMDYyY2NcIlxuICB9LFxuICBcImJnLXNlY29uZGFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1zZWNvbmRhcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yOmhvdmVyXCI6IFwiIzU0NWI2MlwiXG4gIH0sXG4gIFwiYmctc3VjY2Vzc1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMjhhNzQ1XCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1zdWNjZXNzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMxZTdlMzRcIlxuICB9LFxuICBcImJnLWluZm9cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzE3YTJiOFwiXG4gIH0sXG4gIFwiYmctaG92ZXItaW5mb1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMTE3YThiXCJcbiAgfSxcbiAgXCJiZy13YXJuaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcImJnLWhvdmVyLXdhcm5pbmdcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2QzOWUwMFwiXG4gIH0sXG4gIFwiYmctZGFuZ2VyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNkYzM1NDVcIlxuICB9LFxuICBcImJnLWhvdmVyLWRhbmdlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjYmQyMTMwXCJcbiAgfSxcbiAgXCJiZy1uYXZcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0VERURFRFwiXG4gIH0sXG4gIFwiYmctbGlnaHRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Y4ZjlmYVwiXG4gIH0sXG4gIFwiYmctaG92ZXItbGlnaHRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2RhZTBlNVwiXG4gIH0sXG4gIFwiYmctZGFya1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMzQzYTQwXCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1kYXJrXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMxZDIxMjRcIlxuICB9LFxuICBcImJnLXRyYW5zcGFyZW50XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIlxuICB9LFxuICBcImJvcmRlclwiOiB7XG4gICAgXCJib3JkZXJXaWR0aFwiOiBcIjFycHhcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2RlZTJlNlwiXG4gIH0sXG4gIFwiYm9yZGVyLXRvcFwiOiB7XG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjFycHhcIixcbiAgICBcImJvcmRlclRvcFN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2RlZTJlNlwiXG4gIH0sXG4gIFwiYm9yZGVyLXJpZ2h0XCI6IHtcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCIxcnB4XCIsXG4gICAgXCJib3JkZXJSaWdodFN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjZGVlMmU2XCJcbiAgfSxcbiAgXCJib3JkZXItYm90dG9tXCI6IHtcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMXJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZGVlMmU2XCJcbiAgfSxcbiAgXCJib3JkZXItbGVmdFwiOiB7XG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCIxcnB4XCIsXG4gICAgXCJib3JkZXJMZWZ0U3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI2RlZTJlNlwiXG4gIH0sXG4gIFwiYm9yZGVyLTBcIjoge1xuICAgIFwiYm9yZGVyV2lkdGhcIjogMFxuICB9LFxuICBcImJvcmRlci10b3AtMFwiOiB7XG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiAwXG4gIH0sXG4gIFwiYm9yZGVyLXJpZ2h0LTBcIjoge1xuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiAwXG4gIH0sXG4gIFwiYm9yZGVyLWJvdHRvbS0wXCI6IHtcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IDBcbiAgfSxcbiAgXCJib3JkZXItbGVmdC0wXCI6IHtcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiAwXG4gIH0sXG4gIFwiYm9yZGVyLXByaW1hcnlcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMDA3YmZmXCJcbiAgfSxcbiAgXCJib3JkZXItc2Vjb25kYXJ5XCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzZjNzU3ZFwiXG4gIH0sXG4gIFwiYm9yZGVyLWxpZ2h0LXNlY29uZGFyeVwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNFOUU4RTVcIlxuICB9LFxuICBcImJvcmRlci1zdWNjZXNzXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzI4YTc0NVwiXG4gIH0sXG4gIFwiYm9yZGVyLWluZm9cIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMTdhMmI4XCJcbiAgfSxcbiAgXCJib3JkZXItd2FybmluZ1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcImJvcmRlci1kYW5nZXJcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZGMzNTQ1XCJcbiAgfSxcbiAgXCJib3JkZXItbGlnaHRcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZjhmOWZhXCJcbiAgfSxcbiAgXCJib3JkZXItZGFya1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMzNDNhNDBcIlxuICB9LFxuICBcImJvcmRlci13aGl0ZVwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNGRkZGRkZcIlxuICB9LFxuICBcInJvdW5kZWRcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiOHJweFwiXG4gIH0sXG4gIFwicm91bmRlZC10b3BcIjoge1xuICAgIFwiYm9yZGVyVG9wTGVmdFJhZGl1c1wiOiBcIjhycHhcIixcbiAgICBcImJvcmRlclRvcFJpZ2h0UmFkaXVzXCI6IFwiOHJweFwiXG4gIH0sXG4gIFwicm91bmRlZC1yaWdodFwiOiB7XG4gICAgXCJib3JkZXJUb3BSaWdodFJhZGl1c1wiOiBcIjhycHhcIixcbiAgICBcImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzXCI6IFwiOHJweFwiXG4gIH0sXG4gIFwicm91bmRlZC1ib3R0b21cIjoge1xuICAgIFwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcIjogXCI4cnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzXCI6IFwiOHJweFwiXG4gIH0sXG4gIFwicm91bmRlZC1sZWZ0XCI6IHtcbiAgICBcImJvcmRlclRvcExlZnRSYWRpdXNcIjogXCI4cnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzXCI6IFwiOHJweFwiXG4gIH0sXG4gIFwicm91bmRlZC1jaXJjbGVcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTAwcnB4XCJcbiAgfSxcbiAgXCJyb3VuZGVkLTBcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDBcbiAgfSxcbiAgXCJvdmVyZmxvdy1oaWRkZW5cIjoge1xuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIlxuICB9LFxuICBcInBvc2l0aW9uLXJlbGF0aXZlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIlxuICB9LFxuICBcInBvc2l0aW9uLWFic29sdXRlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIlxuICB9LFxuICBcInBvc2l0aW9uLWZpeGVkXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIlxuICB9LFxuICBcImZpeGVkLXRvcFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJ6SW5kZXhcIjogMTAzMFxuICB9LFxuICBcImZpeGVkLWJvdHRvbVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJ6SW5kZXhcIjogMTAzMFxuICB9LFxuICBcInRvcC0wXCI6IHtcbiAgICBcInRvcFwiOiAwXG4gIH0sXG4gIFwibGVmdC0wXCI6IHtcbiAgICBcImxlZnRcIjogMFxuICB9LFxuICBcInJpZ2h0LTBcIjoge1xuICAgIFwicmlnaHRcIjogMFxuICB9LFxuICBcImJvdHRvbS0wXCI6IHtcbiAgICBcImJvdHRvbVwiOiAwXG4gIH0sXG4gIFwicGFnZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRURFREVEXCIsXG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCJtYWluLWJnLWNvbG9yXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwOEMwNjBcIlxuICB9LFxuICBcIm1haW4tdGV4dC1jb2xvclwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwOEMwNjBcIlxuICB9LFxuICBcImJvcmRlci1tYWluXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzA4QzA2MFwiXG4gIH0sXG4gIFwiYmctY2hhdC1pdGVtXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM2QkVFNjhcIlxuICB9LFxuICBcInRleHQtY2hhdC1pdGVtXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzZCRUU2OFwiXG4gIH1cbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2ZyZWUtbmF2LWJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWQ2NTRmYzQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZnJlZS1uYXYtYmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZnJlZS1uYXYtYmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzICgpIHtcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG59XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjNkNjAwMjRiXCJcbiAgXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwi5aSp6LWQL1RpYW5jaVdlYi9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1uYXYtYmFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mcmVlLW5hdi1iYXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVkNjU0ZmM0JlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInZpZXdcIixcbiAgICBbXG4gICAgICBfYyhcInZpZXdcIiwgeyBjbGFzczogX3ZtLmdldENsYXNzIH0sIFtcbiAgICAgICAgX2MoXCJ2aWV3XCIsIHsgc3R5bGU6IFwiaGVpZ2h0OlwiICsgX3ZtLnN0YXR1c0JhckhlaWdodCArIFwicHhcIiB9KSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInctMTAwXCIsIFwiZmxleFwiLCBcImFsaWduLWNlbnRlclwiLCBcImp1c3RpZnktYmV0d2VlblwiXSxcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCI5MHJweFwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiZmxleFwiLCBcImFsaWduLWNlbnRlclwiXSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLnNob3dCYWNrXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZnJlZS1pY29uLWJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcXHVlNjQ1XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmJhY2sgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0udGl0bGVcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiZm9udC1tZFwiLCBcIm1sLTNcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmdldFRpdGxlKSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5zaG93UmlnaHRcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiZmxleFwiLCBcImFsaWduLWNlbnRlclwiXSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3QoXCJyaWdodFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJmcmVlLWljb24tYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiXFx1ZTYwN1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnNlYXJjaCB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJmcmVlLWljb24tYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiXFx1ZTYzNlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9wZW5FeHRlbmQgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uZml4ZWQgPyBfYyhcInZpZXdcIiwgeyBzdHlsZTogX3ZtLmZpeGVkU3R5bGUgfSkgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5zaG93UmlnaHRcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZnJlZS1wb3B1cFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwiZXh0ZW5kXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgYm9keVdpZHRoOiAzMjAsXG4gICAgICAgICAgICAgICAgYm9keUhlaWdodDogMjA1LFxuICAgICAgICAgICAgICAgIGJvZHlCZ0NvbG9yOiBcImJnLWRhcmtcIixcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46IFwicmlnaHQgdG9wXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImZsZXhcIiwgXCJmbGV4LWNvbHVtblwiXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjMyMHJweFwiLCBoZWlnaHQ6IFwiMjA1cnB4XCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5tZW51cywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJmbGV4LTFcIiwgXCJmbGV4XCIsIFwiYWxpZ24tY2VudGVyXCJdLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jbGlja0V2ZW50KGl0ZW0uZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbmZvbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBsLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInByLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtbWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5pY29uKSldXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJmb250LW1kXCIsIFwidGV4dC13aGl0ZVwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0ubmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJlZS1uYXYtYmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJlZS1uYXYtYmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldz5cclxuXHRcdDx2aWV3IDpjbGFzcz1cImdldENsYXNzXCI+XHJcblx0XHRcdDwhLS0g54q25oCB5qCPIC0tPlxyXG5cdFx0XHQ8dmlldyA6c3R5bGU9XCInaGVpZ2h0Oicrc3RhdHVzQmFySGVpZ2h0KydweCdcIj48L3ZpZXc+XHJcblx0XHRcdDwhLS0g5a+86IiqIC0tPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInctMTAwIGZsZXggYWxpZ24tY2VudGVyIGp1c3RpZnktYmV0d2VlblwiIHN0eWxlPVwiaGVpZ2h0OiA5MHJweDtcIj5cclxuXHRcdFx0XHQ8IS0tIOW3pui+uSAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyXCI+XHJcblx0XHRcdFx0XHQ8IS0tIOi/lOWbnuaMiemSriAtLT5cclxuXHRcdFx0XHRcdDxmcmVlLWljb24tYnV0dG9uIHYtaWY9XCJzaG93QmFja1wiIEBjbGljaz1cImJhY2tcIlxyXG5cdFx0XHRcdFx0Omljb249XCInXFx1ZTY0NSdcIj48L2ZyZWUtaWNvbi1idXR0b24+XHJcblx0XHRcdFx0XHQ8IS0tIOagh+mimCAtLT5cclxuXHRcdFx0XHRcdDx0ZXh0IHYtaWY9XCJ0aXRsZVwiIGNsYXNzPVwiZm9udC1tZCBtbC0zXCI+e3tnZXRUaXRsZX19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIOWPs+i+uSAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyXCIgdi1pZj1cInNob3dSaWdodFwiPlxyXG5cdFx0XHRcdFx0PHNsb3QgbmFtZT1cInJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdDxmcmVlLWljb24tYnV0dG9uIEBjbGljaz1cInNlYXJjaFwiIFxyXG5cdFx0XHRcdFx0XHQ6aWNvbj1cIidcXHVlNjA3J1wiPjwvZnJlZS1pY29uLWJ1dHRvbj5cclxuXHRcdFx0XHRcdFx0PGZyZWUtaWNvbi1idXR0b24gQGNsaWNrPVwib3BlbkV4dGVuZFwiXHJcblx0XHRcdFx0XHRcdDppY29uPVwiJ1xcdWU2MzYnXCI+PC9mcmVlLWljb24tYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9zbG90PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSDljaDkvY0gLS0+XHJcblx0XHQ8dmlldyB2LWlmPVwiZml4ZWRcIiA6c3R5bGU9XCJmaXhlZFN0eWxlXCI+PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8IS0tIOaJqeWxleiPnOWNlSAtLT5cclxuXHRcdDxmcmVlLXBvcHVwIHYtaWY9XCJzaG93UmlnaHRcIiByZWY9XCJleHRlbmRcIiA6Ym9keVdpZHRoPVwiMzIwXCIgOmJvZHlIZWlnaHQ9XCIyMDVcIlxyXG5cdFx0Ym9keUJnQ29sb3I9XCJiZy1kYXJrXCIgdHJhbnNmb3JtT3JpZ2luPVwicmlnaHQgdG9wXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBmbGV4LWNvbHVtblwiIFxyXG5cdFx0XHRzdHlsZT1cIndpZHRoOiAzMjBycHg7aGVpZ2h0OiAyMDVycHg7XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4LTEgZmxleCBhbGlnbi1jZW50ZXJcIiBcclxuXHRcdFx0XHR2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBtZW51c1wiXHJcblx0XHRcdFx0OmtleT1cImluZGV4XCJcclxuXHRcdFx0XHRAY2xpY2s9XCJjbGlja0V2ZW50KGl0ZW0uZXZlbnQpXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250IHBsLTMgcHItMiBmb250LW1kIHRleHQtd2hpdGVcIj57e2l0ZW0uaWNvbn19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJmb250LW1kIHRleHQtd2hpdGVcIj57e2l0ZW0ubmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC9mcmVlLXBvcHVwPlxyXG5cdFx0XHJcblx0XHRcclxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxyXG5cdGltcG9ydCBmcmVlSWNvbkJ1dHRvbiBmcm9tIFwiLi9mcmVlLWljb24tYnV0dG9uLnZ1ZVwiXHJcblx0aW1wb3J0IGZyZWVQb3B1cCBmcm9tIFwiLi9mcmVlLXBvcHVwLnZ1ZVwiXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0c2hvd0JhY2s6e1xyXG5cdFx0XHRcdHR5cGU6Qm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OmZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdHRpdGxlOiB7XHJcblx0XHRcdFx0dHlwZTogW1N0cmluZyxCb29sZWFuXSxcclxuXHRcdFx0XHRkZWZhdWx0OmZhbHNlIFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmaXhlZDp7XHJcblx0XHRcdFx0dHlwZTpCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6dHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRub3JlYWRudW06e1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6MFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRiZ0NvbG9yOntcclxuXHRcdFx0XHR0eXBlOlN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OlwiYmctbmF2XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd1JpZ2h0OntcclxuXHRcdFx0XHR0eXBlOkJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDp0cnVlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wb25lbnRzOntcclxuXHRcdFx0ZnJlZUljb25CdXR0b24sXHJcblx0XHRcdGZyZWVQb3B1cFxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzQmFySGVpZ2h0OjAsXHJcblx0XHRcdFx0bmF2QmFySGVpZ2h0OjAsXHJcblx0XHRcdFx0bWVudXM6W1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOlwi5Y+R6LW3576k6IGKXCIsXHJcblx0XHRcdFx0XHRcdGV2ZW50OlwiXCIsXHJcblx0XHRcdFx0XHRcdGljb246XCJcXHVlNjAwXCJcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6XCLmt7vliqDlpb3lj4tcIixcclxuXHRcdFx0XHRcdFx0ZXZlbnQ6XCJcIixcclxuXHRcdFx0XHRcdFx0aWNvbjpcIlxcdWU2YTVcIlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdF0sXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVMtTlZVRVxyXG5cdFx0XHR0aGlzLnN0YXR1c0JhckhlaWdodCA9IHBsdXMubmF2aWdhdG9yLmdldFN0YXR1c2JhckhlaWdodCgpXHJcblx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHR0aGlzLm5hdkJhckhlaWdodCA9IHRoaXMuc3RhdHVzQmFySGVpZ2h0ICsgdW5pLnVweDJweCg5MClcclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHRmaXhlZFN0eWxlKCkge1xyXG5cdFx0XHRcdHJldHVybiBgaGVpZ2h0OiR7dGhpcy5uYXZCYXJIZWlnaHR9cHhgXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldFRpdGxlKCl7XHJcblx0XHRcdFx0bGV0IG5vcmVhZG51bSA9IHRoaXMubm9yZWFkbnVtID4gMCA/ICcoJyt0aGlzLm5vcmVhZG51bSsnKScgOiAnJ1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnRpdGxlXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldENsYXNzKCl7XHJcblx0XHRcdFx0bGV0IGZpeGVkID0gdGhpcy5maXhlZD8nZml4ZWQtdG9wJzonJ1xyXG5cdFx0XHRcdHJldHVybiBgJHtmaXhlZH0gJHt0aGlzLmJnQ29sb3J9YCBcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0b3BlbkV4dGVuZCgpIHtcclxuXHRcdFx0XHR0aGlzLiRyZWZzLmV4dGVuZC5zaG93KHVuaS51cHgycHgoNDE1KSx1bmkudXB4MnB4KDE1MCkpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOi/lOWbnlxyXG5cdFx0XHRiYWNrKCl7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdFx0XHRkZWx0YTogMVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9mcmVlLWljb24tYnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZjVjNjViYiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mcmVlLWljb24tYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZnJlZS1pY29uLWJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoKSB7XG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG59XG5pZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxufVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIxZWY3OWQzMFwiXG4gIFxuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIuWkqei1kC9UaWFuY2lXZWIvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtaWNvbi1idXR0b24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLnJlY3ljbGUuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZyZWUtaWNvbi1idXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdmNWM2NWJiJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogW1wiZmxleFwiLCBcImFsaWduLWNlbnRlclwiLCBcImp1c3RpZnktY2VudGVyXCJdLFxuICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjkwcnB4XCIsIHdpZHRoOiBcIjkwcnB4XCIgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uJGVtaXQoXCJjbGlja1wiKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJpY29uZm9udFwiLCBcImZvbnQtbWRcIl0gfSwgW1xuICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pY29uKSlcbiAgICAgIF0pXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJlZS1pY29uLWJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZyZWUtaWNvbi1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiBcclxuIEBjbGljaz1cIiRlbWl0KCdjbGljaycpXCJcclxuXHRzdHlsZT1cImhlaWdodDogOTBycHg7d2lkdGg6IDkwcnB4O1wiPlxyXG5cdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udCBmb250LW1kXCI+e3tpY29ufX08L3RleHQ+XHJcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRpY29uOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZnJlZS1wb3B1cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGVlNTNiYmUmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZnJlZS1wb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2ZyZWUtcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKCkge1xuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxufVxuaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbn1cbmlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9mcmVlLXBvcHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWRlZTUzYmJlJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2ZyZWUtcG9wdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGVlNTNiYmUmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJkZWU1M2JiZVwiLFxuICBcIjNmYWViMzhlXCJcbiAgXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwi5aSp6LWQL1RpYW5jaVdlYi9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1wb3B1cC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGUucmVjeWNsZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJlZS1wb3B1cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGVlNTNiYmUmc2NvcGVkPXRydWUmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5zdGF0dXNcbiAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgekluZGV4OiBcIjk5OTlcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfSB9LCBbXG4gICAgICAgIF92bS5tYXNrXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXG4gICAgICAgICAgICAgICAgXCJwb3NpdGlvbi1maXhlZFwiLFxuICAgICAgICAgICAgICAgIFwidG9wLTBcIixcbiAgICAgICAgICAgICAgICBcImxlZnQtMFwiLFxuICAgICAgICAgICAgICAgIFwicmlnaHQtMFwiLFxuICAgICAgICAgICAgICAgIFwiYm90dG9tLTBcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdHlsZTogX3ZtLmdldE1hc2tDb2xvcixcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5oaWRlIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZWY6IFwicG9wdXBcIixcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJwb3NpdGlvbi1maXhlZFwiLCBcImZyZWUtYW5pbWF0ZWRcIl0sXG4gICAgICAgICAgICBjbGFzczogX3ZtLmdldEJvZHlDbGFzcyxcbiAgICAgICAgICAgIHN0eWxlOiBfdm0uZ2V0Qm9keVN0eWxlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgICAgICAgMlxuICAgICAgICApXG4gICAgICBdKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mcmVlLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJlZS1wb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PGRpdiBzdHlsZT1cInotaW5kZXg6OTk5OTtvdmVyZmxvdzpoaWRkZW47XCIgdi1pZj1cInN0YXR1c1wiPlxyXG5cdFx0PCEtLSDokpnniYggLS0+XHJcblx0XHQ8ZGl2IHYtaWY9XCJtYXNrXCIgY2xhc3M9XCJwb3NpdGlvbi1maXhlZCB0b3AtMCBsZWZ0LTAgcmlnaHQtMCBib3R0b20tMFwiXHJcblx0XHQ6c3R5bGU9XCJnZXRNYXNrQ29sb3JcIiBAY2xpY2s9XCJoaWRlXCI+PC9kaXY+XHJcblx0XHQ8IS0tIOW8ueWHuuahhuWGheWuuSAtLT5cclxuXHRcdDxkaXYgcmVmPVwicG9wdXBcIiBjbGFzcz1cInBvc2l0aW9uLWZpeGVkIGZyZWUtYW5pbWF0ZWRcIiA6Y2xhc3M9XCJnZXRCb2R5Q2xhc3NcIiA6c3R5bGU9XCJnZXRCb2R5U3R5bGVcIj5cclxuXHRcdFx0PHNsb3Q+PC9zbG90PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxyXG5cdC8vICNpZmRlZiBBUFAtUExVUy1OVlVFXHJcblx0Y29uc3QgYW5pbWF0aW9uID0gd2VleC5yZXF1aXJlTW9kdWxlKCdhbmltYXRpb24nKVxyXG5cdC8vICNlbmRpZlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdC8vIOaYr+WQpuW8gOWQr+iSmeeJiOminOiJslxyXG5cdFx0XHRtYXNrQ29sb3I6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaYr+WQpuW8gOWQr+iSmeeJiFxyXG5cdFx0XHRtYXNrOntcclxuXHRcdFx0XHR0eXBlOkJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDp0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaYr+WQpuWxheS4rVxyXG5cdFx0XHRjZW50ZXI6e1xyXG5cdFx0XHRcdHR5cGU6Qm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OmZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaYr+WQpuWkhOS6juW6lemDqFxyXG5cdFx0XHRib3R0b206e1xyXG5cdFx0XHRcdHR5cGU6Qm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OmZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOW8ueWHuuWxguWGheWuueWuveW6plxyXG5cdFx0XHRib2R5V2lkdGg6e1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6MFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlvLnlh7rlsYLlhoXlrrnpq5jluqZcclxuXHRcdFx0Ym9keUhlaWdodDp7XHJcblx0XHRcdFx0dHlwZTpOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDowXHJcblx0XHRcdH0sXHJcblx0XHRcdGJvZHlCZ0NvbG9yOntcclxuXHRcdFx0XHR0eXBlOlN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OlwiYmctd2hpdGVcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0cmFuc2Zvcm1PcmlnaW46e1xyXG5cdFx0XHRcdHR5cGU6U3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6XCJsZWZ0IHRvcFwiXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIHRhYmJhcumrmOW6plxyXG5cdFx0XHR0YWJiYXJIZWlnaHQ6e1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6MFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRzdGF0dXM6IGZhbHNlLFxyXG5cdFx0XHRcdHg6LTEsXHJcblx0XHRcdFx0eToxLFxyXG5cdFx0XHRcdG1heFg6MCxcclxuXHRcdFx0XHRtYXhZOjBcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdHRyeSB7XHJcblx0XHRcdCAgICBjb25zdCByZXMgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHRcdFx0XHR0aGlzLm1heFggPSByZXMud2luZG93V2lkdGggLSB1bmkudXB4MnB4KHRoaXMuYm9keVdpZHRoKVxyXG5cdFx0XHRcdHRoaXMubWF4WSA9IHJlcy53aW5kb3dIZWlnaHQgLSB1bmkudXB4MnB4KHRoaXMuYm9keUhlaWdodCkgLSB1bmkudXB4MnB4KHRoaXMudGFiYmFySGVpZ2h0KVxyXG5cdFx0XHR9IGNhdGNoIChlKSB7XHJcblx0XHRcdCAgICAvLyBlcnJvclxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0Z2V0TWFza0NvbG9yKCkge1xyXG5cdFx0XHRcdGxldCBpID0gdGhpcy5tYXNrQ29sb3IgPyAwLjUgOiAwXHJcblx0XHRcdFx0cmV0dXJuIGBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCR7aX0pO2AgXHJcblx0XHRcdH0sXHJcblx0XHRcdGdldEJvZHlDbGFzcygpe1xyXG5cdFx0XHRcdGlmKHRoaXMuY2VudGVyKXtcclxuXHRcdFx0XHRcdHJldHVybiAnbGVmdC0wIHJpZ2h0LTAgYm90dG9tLTAgdG9wLTAgZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXInXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBib3R0b20gPSB0aGlzLmJvdHRvbSA/ICdsZWZ0LTAgcmlnaHQtMCBib3R0b20tMCcgOiAncm91bmRlZCBib3JkZXInXHJcblx0XHRcdFx0cmV0dXJuIGAke3RoaXMuYm9keUJnQ29sb3J9ICR7Ym90dG9tfWBcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0Qm9keVN0eWxlKCl7XHJcblx0XHRcdFx0bGV0IGxlZnQgPSB0aGlzLnggPiAtMSA/IGBsZWZ0OiR7dGhpcy54fXB4O2AgOiAnJ1xyXG5cdFx0XHRcdGxldCB0b3AgPSB0aGlzLnkgPiAtMSA/IGB0b3A6JHt0aGlzLnl9cHg7YCA6ICcnXHJcblx0XHRcdFx0cmV0dXJuIGxlZnQgKyB0b3BcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6e1xyXG5cdFx0XHRzaG93KHggPSAtMSAseSA9IC0xKXtcclxuXHRcdFx0XHRpZiAodGhpcy5zdGF0dXMpIHtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy54ID0gKHggPiB0aGlzLm1heFgpID8gdGhpcy5tYXhYIDogeFxyXG5cdFx0XHRcdHRoaXMueSA9ICh5ID4gdGhpcy5tYXhZKSA/IHRoaXMubWF4WSA6IHlcclxuXHRcdFx0XHR0aGlzLnN0YXR1cyA9IHRydWVcclxuXHRcdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVMtTlZVRVxyXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpPT57XHJcblx0XHRcdFx0XHRhbmltYXRpb24udHJhbnNpdGlvbih0aGlzLiRyZWZzLnBvcHVwLCB7XHJcblx0XHRcdFx0XHQgICAgc3R5bGVzOiB7XHJcblx0XHRcdFx0XHQgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEsMSknLFxyXG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybU9yaWdpbjp0aGlzLnRyYW5zZm9ybU9yaWdpbixcclxuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OjFcclxuXHRcdFx0XHRcdCAgICB9LFxyXG5cdFx0XHRcdFx0ICAgIGR1cmF0aW9uOiAxMDAsIC8vbXNcclxuXHRcdFx0XHRcdCAgICB0aW1pbmdGdW5jdGlvbjogJ2Vhc2UnLFxyXG5cdFx0XHRcdFx0ICAgIH0sIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdCAgICAgICBjb25zb2xlLmxvZygn5Yqo55S75omn6KGM57uT5p2fJyk7XHJcblx0XHRcdFx0XHQgICAgfSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRoaWRlKCl7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnaGlkZScpXHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTLU5WVUVcclxuXHRcdFx0XHRhbmltYXRpb24udHJhbnNpdGlvbih0aGlzLiRyZWZzLnBvcHVwLCB7XHJcblx0XHRcdFx0c3R5bGVzOiB7XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06ICdzY2FsZSgwLDApJyxcclxuXHRcdFx0XHRcdHRyYW5zZm9ybU9yaWdpbjp0aGlzLnRyYW5zZm9ybU9yaWdpbixcclxuXHRcdFx0XHRcdG9wYWNpdHk6MFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZHVyYXRpb246IDEwMCwgLy9tc1xyXG5cdFx0XHRcdHRpbWluZ0Z1bmN0aW9uOiAnZWFzZScsXHJcblx0XHRcdFx0fSwgKCk9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnN0YXR1cyA9IGZhbHNlXHJcblx0XHRcdFx0ICAgY29uc29sZS5sb2coJ+WKqOeUu+aJp+ihjOe7k+adnycpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0Ly8gI2lmbmRlZiBBUFAtUExVUy1OVlVFXHJcblx0XHRcdFx0dGhpcy5zdGF0dXMgPSBmYWxzZVxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XHJcblx0LmZyZWUtYW5pbWF0ZWR7XHJcblx0XHQvKiAjaWZkZWYgQVBQLVBMVVMtTlZVRSAqL1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgwLDApO1xyXG5cdFx0b3BhY2l0eTogMDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdH1cbjwvc3R5bGU+XG4iLCJmdW5jdGlvbiB0eXBvZiAodikge1xyXG4gIHZhciBzID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXHJcbiAgcmV0dXJuIHMuc3Vic3RyaW5nKDgsIHMubGVuZ3RoIC0gMSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TG9nICgpIHtcclxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV1cclxuICB9XHJcblxyXG4gIHZhciBtc2dzID0gYXJncy5tYXAoZnVuY3Rpb24gKHYpIHtcclxuICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXHJcblxyXG4gICAgaWYgKHR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ1tvYmplY3Qgb2JqZWN0XScpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB2ID0gJy0tLUJFR0lOOkpTT04tLS0nICsgSlNPTi5zdHJpbmdpZnkodikgKyAnLS0tRU5EOkpTT04tLS0nXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB2ID0gJ1tvYmplY3Qgb2JqZWN0XSdcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHYgPT09IG51bGwpIHtcclxuICAgICAgICB2ID0gJy0tLU5VTEwtLS0nXHJcbiAgICAgIH0gZWxzZSBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdiA9ICctLS1VTkRFRklORUQtLS0nXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHZUeXBlID0gdHlwb2YodikudG9VcHBlckNhc2UoKVxyXG5cclxuICAgICAgICBpZiAodlR5cGUgPT09ICdOVU1CRVInIHx8IHZUeXBlID09PSAnQk9PTEVBTicpIHtcclxuICAgICAgICAgIHYgPSAnLS0tQkVHSU46JyArIHZUeXBlICsgJy0tLScgKyB2ICsgJy0tLUVORDonICsgdlR5cGUgKyAnLS0tJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2ID0gU3RyaW5nKHYpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZcclxuICB9KVxyXG4gIHZhciBtc2cgPSAnJ1xyXG5cclxuICBpZiAobXNncy5sZW5ndGggPiAxKSB7XHJcbiAgICB2YXIgbGFzdE1zZyA9IG1zZ3MucG9wKClcclxuICAgIG1zZyA9IG1zZ3Muam9pbignLS0tQ09NTUEtLS0nKVxyXG5cclxuICAgIGlmIChsYXN0TXNnLmluZGV4T2YoJyBhdCAnKSA9PT0gMCkge1xyXG4gICAgICBtc2cgKz0gbGFzdE1zZ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbXNnICs9ICctLS1DT01NQS0tLScgKyBsYXN0TXNnXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIG1zZyA9IG1zZ3NbMF1cclxuICB9XHJcblxyXG4gIHJldHVybiBtc2dcclxufVxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJlZS1wb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kZWU1M2JiZSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0yIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZyZWUtcG9wdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGVlNTNiYmUmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJmcmVlLWFuaW1hdGVkXCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBcInNjYWxlKDAsMClcIixcbiAgICBcIm9wYWNpdHlcIjogMFxuICB9XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9mcmVlLWxpc3QtaXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njk3NWNlZDcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZnJlZS1saXN0LWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mcmVlLWxpc3QtaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoKSB7XG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG59XG5pZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxufVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIxYjg2YTFjNFwiXG4gIFxuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIuWkqei1kC9UaWFuY2lXZWIvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtbGlzdC1pdGVtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mcmVlLWxpc3QtaXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Njk3NWNlZDcmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidmlld1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBbXCJiZy13aGl0ZVwiLCBcImZsZXhcIiwgXCJhbGlnbi1zdHJldGNoXCJdLFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS4kZW1pdChcImNsaWNrXCIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5zaG93TGVmdEljb25cbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgIFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpZ24tY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgXCJqdXN0aWZ5LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgIFwicHktMlwiLFxuICAgICAgICAgICAgICAgIFwicGwtM1wiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdChcImljb25cIiksXG4gICAgICAgICAgICAgIF92bS5jb3ZlclxuICAgICAgICAgICAgICAgID8gX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IF92bS5jb3ZlclN0eWxlLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5jb3ZlciwgbW9kZTogXCJ3aWR0aEZpeFwiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgXCJmbGV4LTFcIixcbiAgICAgICAgICAgIFwiZmxleFwiLFxuICAgICAgICAgICAgXCJhbGlnbi1jZW50ZXJcIixcbiAgICAgICAgICAgIFwianVzdGlmeS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICBcInByLTNcIixcbiAgICAgICAgICAgIFwicHktM1wiLFxuICAgICAgICAgICAgXCJwbC0zXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIGNsYXNzOiBfdm0uYm9yZGVyID8gXCJib3JkZXItYm90dG9tXCIgOiBcIlwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX3QoXCJkZWZhdWx0XCIsIFtcbiAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImZvbnQtbWRcIiwgXCJ0ZXh0LWRhcmtcIl0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5zaG93UmlnaHRcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiZmxleFwiLCBcImFsaWduLWNlbnRlclwiXSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdChcInJpZ2h0XCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnNob3dSaWdodEljb25cbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uZm9udFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1saWdodC1tdXRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1tZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi7piMXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mcmVlLWxpc3QtaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZyZWUtbGlzdC1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImJnLXdoaXRlIGZsZXggYWxpZ24tc3RyZXRjaFwiXHJcblx0QGNsaWNrPVwiJGVtaXQoJ2NsaWNrJylcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMiBwbC0zXCJcclxuXHRcdHYtaWY9XCJzaG93TGVmdEljb25cIj5cclxuXHRcdFx0PHNsb3QgbmFtZT1cImljb25cIj48L3Nsb3Q+XHJcblx0XHRcdDxpbWFnZSA6c3JjPVwiY292ZXJcIiB2LWlmPVwiY292ZXJcIlxyXG5cdFx0XHRtb2RlPVwid2lkdGhGaXhcIiA6c3R5bGU9XCJjb3ZlclN0eWxlXCI+PC9pbWFnZT5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZmxleC0xIGZsZXggYWxpZ24tY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwci0zIHB5LTMgcGwtM1wiIDpjbGFzcz1cImJvcmRlciA/ICdib3JkZXItYm90dG9tJyA6ICcnXCI+XHJcblx0XHRcdDxzbG90PlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZm9udC1tZCB0ZXh0LWRhcmtcIj57e3RpdGxlfX08L3RleHQ+XHJcblx0XHRcdDwvc2xvdD5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlclwiIHYtaWY9XCJzaG93UmlnaHRcIj5cclxuXHRcdFx0XHQ8c2xvdCBuYW1lPVwicmlnaHRcIj48L3Nsb3Q+XHJcblx0XHRcdFx0PCEtLSDlj7Pnrq3lpLQgLS0+XHJcblx0XHRcdFx0PHRleHQgdi1pZj1cInNob3dSaWdodEljb25cIiBjbGFzcz1cImljb25mb250IHRleHQtbGlnaHQtbXV0ZWQgZm9udC1tZFwiPiYjeGU2MGM7PC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHQvLyDmmK/lkKblvIDlkK/kuIvovrnnur9cclxuXHRcdFx0Ym9yZGVyOntcclxuXHRcdFx0XHR0eXBlOkJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDp0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWwgemdolxyXG5cdFx0XHRjb3Zlcjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiBcIlwiXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWwgemdouWkp+Wwj1xyXG5cdFx0XHRjb3ZlclNpemU6e1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsTnVtYmVyXSxcclxuXHRcdFx0XHRkZWZhdWx0Ojc1XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOagh+mimFxyXG5cdFx0XHR0aXRsZTp7XHJcblx0XHRcdFx0dHlwZTpTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDpcIlwiXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaYvuekuuWPs+i+uVxyXG5cdFx0XHRzaG93UmlnaHQ6e1xyXG5cdFx0XHRcdHR5cGU6Qm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OmZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaYvuekuuW3pui+ueWbvuagh1xyXG5cdFx0XHRzaG93TGVmdEljb246e1xyXG5cdFx0XHRcdHR5cGU6Qm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OnRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5piv5ZCm5pi+56S6566t5aS0XHJcblx0XHRcdHNob3dSaWdodEljb246e1xyXG5cdFx0XHRcdHR5cGU6Qm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OnRydWVcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdGNvdmVyU3R5bGUoKSB7XHJcblx0XHRcdFx0cmV0dXJuIGB3aWR0aDogJHt0aGlzLmNvdmVyU2l6ZX1ycHg7aGVpZ2h0OiAke3RoaXMuY292ZXJTaXplfXJweDtgXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbjwvc3R5bGU+XG4iLCJcbiAgICAgICAgaW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQnO1xuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9tYWlsL3VzZXItbW9tZW50cy1hdXRoL3VzZXItbW9tZW50cy1hdXRoLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL21haWwvdXNlci1tb21lbnRzLWF1dGgvdXNlci1tb21lbnRzLWF1dGgnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdXNlci1tb21lbnRzLWF1dGgubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wY2E0ZWUxNiZtcFR5cGU9cGFnZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VzZXItbW9tZW50cy1hdXRoLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vdXNlci1tb21lbnRzLWF1dGgubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKCkge1xuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxufVxuaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbn1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiMDJkZTM1ZTJcIlxuICBcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCLlpKnotZAvVGlhbmNpV2ViL3BhZ2VzL21haWwvdXNlci1tb21lbnRzLWF1dGgvdXNlci1tb21lbnRzLWF1dGgubnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTAhLi91c2VyLW1vbWVudHMtYXV0aC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBjYTRlZTE2Jm1wVHlwZT1wYWdlXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2Nyb2xsLXZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNTdHlsZTogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH0sXG4gICAgICBhdHRyczogeyBzY3JvbGxZOiB0cnVlLCBlbmFibGVCYWNrVG9Ub3A6IHRydWUsIGJ1YmJsZTogXCJ0cnVlXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidmlld1wiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJwYWdlXCJdIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImZyZWUtbmF2LWJhclwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0aXRsZTogXCLorr7nva7mnIvlj4vlnIjliqjmgIHmnYPpmZBcIixcbiAgICAgICAgICAgICAgc2hvd0JhY2s6IHRydWUsXG4gICAgICAgICAgICAgIHNob3dSaWdodDogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZnJlZS1saXN0LWl0ZW1cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLkuI3orqnku5bnnIvmiJFcIixcbiAgICAgICAgICAgICAgICBzaG93TGVmdEljb246IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dSaWdodDogXCJcIixcbiAgICAgICAgICAgICAgICBzaG93UmlnaHRJY29uOiBmYWxzZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInN3aXRjaFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJyaWdodFwiLCBjaGVja2VkOiBmYWxzZSwgY29sb3I6IFwiIzA4QzA2MFwiIH0sXG4gICAgICAgICAgICAgICAgc2xvdDogXCJyaWdodFwiXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZyZWUtbGlzdC1pdGVtXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi5LiN55yL5LuWXCIsXG4gICAgICAgICAgICAgICAgc2hvd0xlZnRJY29uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93UmlnaHQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgc2hvd1JpZ2h0SWNvbjogZmFsc2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJzd2l0Y2hcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwicmlnaHRcIiwgY2hlY2tlZDogZmFsc2UsIGNvbG9yOiBcIiMwOEMwNjBcIiB9LFxuICAgICAgICAgICAgICAgIHNsb3Q6IFwicmlnaHRcIlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMCEuL3VzZXItbW9tZW50cy1hdXRoLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTAhLi91c2VyLW1vbWVudHMtYXV0aC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiLCI8dGVtcGxhdGU+XG5cdDx2aWV3IGNsYXNzPVwicGFnZVwiPlxuXHRcdDwhLS0g5a+86Iiq5qCPIC0tPlxyXG5cdFx0PGZyZWUtbmF2LWJhciB0aXRsZT1cIuiuvue9ruaci+WPi+WciOWKqOaAgeadg+mZkFwiIHNob3dCYWNrIDpzaG93UmlnaHQ9XCJmYWxzZVwiPlxyXG5cdFx0PC9mcmVlLW5hdi1iYXI+XHJcblx0XHQ8ZnJlZS1saXN0LWl0ZW0gdGl0bGU9XCLkuI3orqnku5bnnIvmiJFcIiA6c2hvd0xlZnRJY29uPVwiZmFsc2VcIlxyXG5cdFx0c2hvd1JpZ2h0IDpzaG93UmlnaHRJY29uPVwiZmFsc2VcIj5cclxuXHRcdFx0PHN3aXRjaCBzbG90PVwicmlnaHRcIiA6Y2hlY2tlZD1cImZhbHNlXCIgY29sb3I9XCIjMDhDMDYwXCIvPlxyXG5cdFx0PC9mcmVlLWxpc3QtaXRlbT5cblx0XHQ8ZnJlZS1saXN0LWl0ZW0gdGl0bGU9XCLkuI3nnIvku5ZcIiA6c2hvd0xlZnRJY29uPVwiZmFsc2VcIlxyXG5cdFx0c2hvd1JpZ2h0IDpzaG93UmlnaHRJY29uPVwiZmFsc2VcIj5cclxuXHRcdFx0PHN3aXRjaCBzbG90PVwicmlnaHRcIiA6Y2hlY2tlZD1cImZhbHNlXCIgY29sb3I9XCIjMDhDMDYwXCIvPlxyXG5cdFx0PC9mcmVlLWxpc3QtaXRlbT5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHRpbXBvcnQgZnJlZU5hdkJhciBmcm9tICdAL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLW5hdi1iYXIudnVlJztcclxuXHRpbXBvcnQgZnJlZUxpc3RJdGVtIGZyb20gJ0AvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtbGlzdC1pdGVtLnZ1ZSc7XG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0ZnJlZU5hdkJhcixcclxuXHRcdFx0ZnJlZUxpc3RJdGVtXHJcblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdFxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=