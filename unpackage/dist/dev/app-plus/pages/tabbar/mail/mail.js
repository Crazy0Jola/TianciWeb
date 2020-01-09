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
/******/ 	return __webpack_require__(__webpack_require__.s = 193);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
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

/***/ 14:
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

/***/ 15:
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

/***/ 16:
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

/***/ 17:
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

/***/ 18:
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

/***/ 19:
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

/***/ 193:
/*!***********************************************************************!*\
  !*** E:/天赐/TianciWeb/main.js?{"page":"pages%2Ftabbar%2Fmail%2Fmail"} ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 6);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_tabbar_mail_mail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/tabbar/mail/mail.nvue?mpType=page */ 194);

        
        
        
        _pages_tabbar_mail_mail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_tabbar_mail_mail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/tabbar/mail/mail'
        _pages_tabbar_mail_mail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_tabbar_mail_mail_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),

/***/ 194:
/*!***************************************************************!*\
  !*** E:/天赐/TianciWeb/pages/tabbar/mail/mail.nvue?mpType=page ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mail_nvue_vue_type_template_id_a0aa9d50_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mail.nvue?vue&type=template&id=a0aa9d50&mpType=page */ 195);
/* harmony import */ var _mail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mail.nvue?vue&type=script&lang=js&mpType=page */ 197);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _mail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _mail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
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
                Vue.prototype.__merge_style(__webpack_require__(/*! ./mail.nvue?vue&type=style&index=0&lang=css&mpType=page */ 199).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./mail.nvue?vue&type=style&index=0&lang=css&mpType=page */ 199).default)
            }

}

/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _mail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _mail_nvue_vue_type_template_id_a0aa9d50_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _mail_nvue_vue_type_template_id_a0aa9d50_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "f6bc636c",
  false,
  _mail_nvue_vue_type_template_id_a0aa9d50_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "天赐/TianciWeb/pages/tabbar/mail/mail.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 195:
/*!*********************************************************************************************!*\
  !*** E:/天赐/TianciWeb/pages/tabbar/mail/mail.nvue?vue&type=template&id=a0aa9d50&mpType=page ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mail_nvue_vue_type_template_id_a0aa9d50_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mail.nvue?vue&type=template&id=a0aa9d50&mpType=page */ 196);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mail_nvue_vue_type_template_id_a0aa9d50_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mail_nvue_vue_type_template_id_a0aa9d50_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mail_nvue_vue_type_template_id_a0aa9d50_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mail_nvue_vue_type_template_id_a0aa9d50_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 196:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/天赐/TianciWeb/pages/tabbar/mail/mail.nvue?vue&type=template&id=a0aa9d50&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
          _c("free-nav-bar", { attrs: { title: "通讯录" } }),
          _c(
            "scroll-view",
            {
              style: "height:" + _vm.scrollHeight + "px;",
              attrs: { scrollY: "true", scrollIntoView: _vm.scrollInto }
            },
            [
              _vm._l(_vm.topList, function(item, index) {
                return _c("free-list-item", {
                  key: index,
                  attrs: { title: item.title, cover: item.cover },
                  on: {
                    click: function($event) {
                      _vm.EventHandle(item.event)
                    }
                  }
                })
              }),
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
                      return _c("free-list-item", {
                        key: index2,
                        attrs: {
                          title: item2.name,
                          cover: item2.photo
                            ? item2.photo
                            : "/static/images/userpic.jpg"
                        },
                        on: {
                          click: function($event) {
                            _vm.goChat(item2)
                          }
                        }
                      })
                    })
                  ],
                  2
                )
              })
            ],
            2
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

/***/ 197:
/*!***************************************************************************************!*\
  !*** E:/天赐/TianciWeb/pages/tabbar/mail/mail.nvue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mail.nvue?vue&type=script&lang=js&mpType=page */ 198);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mail_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 198:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/天赐/TianciWeb/pages/tabbar/mail/mail.nvue?vue&type=script&lang=js&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, __f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;



















































var _freeNavBar = _interopRequireDefault(__webpack_require__(/*! @/components/free-ui/free-nav-bar.vue */ 14));
var _freeListItem = _interopRequireDefault(__webpack_require__(/*! @/components/free-ui/free-list-item.vue */ 33));
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
var SERVER_API = getApp().globalData.SERVER_API;var _this;var _default = { components: { freeNavBar: _freeNavBar.default, freeListItem: _freeListItem.default }, data: function data() {return { topList: [// {
      // 	title:"新的朋友",
      // 	cover:"/static/images/mail/friend.png",
      // 	event:""
      // },
      { title: "群聊", cover: "/static/images/mail/group.png", event: "goGroupList" }], list: [], top: 0, scrollHeight: 0, scrollInto: '', current: '', isNull: false };}, onLoad: function onLoad() {_this = this;var res = uni.getSystemInfoSync();this.top = res.statusBarHeight + uni.upx2px(90);this.scrollHeight = res.windowHeight - this.top - 50;}, onShow: function onShow() {console.log(__f__(_this.isNull, " at pages\\tabbar\\mail\\mail.nvue:99"));_this.list = [];for (var i = 0; i < 26; i++) {var obj = { letter: String.fromCharCode(65 + i), data: [] };_this.list.push(obj);}uni.request({ url: SERVER_API + "appUser/contact", header: { "token": uni.getStorageSync("setUserData").token },

      method: "POST",
      success: function success(res) {
        console.log(__f__(res, " at pages\\tabbar\\mail\\mail.nvue:115"));
        var result = res.data.result;
        var len = result.length;
        if (len == 0) {
          _this.isNull = true;
        } else {
          _this.isNull = false;
        }
        for (var i = 0; i < len; i++) {
          var letter = (0, _chineseConversion.initial)(result[i].name);
          var index = letter.charCodeAt() - 65;
          _this.list[index].data.push(result[i]);
        }

      } });

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
    } },

  methods: {
    EventHandle: function EventHandle(e) {
      if (e == "goGroupList") {
        uni.navigateTo({
          url: "../../group/groupList/groupList" });

      }
    },
    goChat: function goChat(e) {
      console.log(__f__(e, " at pages\\tabbar\\mail\\mail.nvue:154"));
      var username = e.token;
      var nickname = e.name;
      var avatar = e.photo;
      uni.navigateTo({
        url: "/pages/chat/chat/chat?username=".concat(username, "&nickname=").concat(nickname, "&avatar=").concat(avatar) });

      console.log(__f__(e, " at pages\\tabbar\\mail\\mail.nvue:161"));
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
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 30)["default"]))

/***/ }),

/***/ 199:
/*!***********************************************************************************************!*\
  !*** E:/天赐/TianciWeb/pages/tabbar/mail/mail.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./mail.nvue?vue&type=style&index=0&lang=css&mpType=page */ 200);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_mail_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 2:
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

/***/ 20:
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

/***/ 200:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/天赐/TianciWeb/pages/tabbar/mail/mail.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "noConversation": {
    "width": "750rpx",
    "height": "500rpx",
    "marginTop": "100rpx"
  }
}

/***/ }),

/***/ 21:
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
        { staticClass: ["iconfont", "font-md"], class: _vm.iconClass },
        [_vm._v(_vm._s(_vm.icon))]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 22:
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

/***/ 23:
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

/***/ 24:
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

/***/ 25:
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

/***/ 26:
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

/***/ 27:
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

/***/ 28:
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

/***/ 29:
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

/***/ 3:
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@alpha","_id":"@dcloudio/uni-stat@2.0.0-alpha-25120200103005","_inBundle":false,"_integrity":"sha512-nYoIrRV2e5o/vzr6foSdWi3Rl2p0GuO+LPY3JctyY6uTKgPnuH99d7aL/QQdJ1SacQjBWO+QGK1qankN7oyrWw==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@alpha","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"alpha","saveSpec":null,"fetchSpec":"alpha"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25120200103005.tgz","_shasum":"a77a63481f36474f3e86686868051219d1bb12df","_spec":"@dcloudio/uni-stat@alpha","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"6be187a3dfe15f95dd6146d9fec08e1f81100987","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-alpha-25120200103005"};

/***/ }),

/***/ 30:
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

/***/ 31:
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

/***/ 32:
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

/***/ 33:
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

/***/ 34:
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

/***/ 35:
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

/***/ 36:
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

/***/ 37:
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

/***/ 4:
/*!***************************************************!*\
  !*** E:/天赐/TianciWeb/pages.json?{"type":"style"} ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{"pages/tabbar/find/find":{"navigationBarTitleText":"朋友圈","enablePullDownRefresh":true,"bounce":"none","titleNView":{"type":"transparent","buttons":[{"background":"rgba(255,255,255,0.2)","color":"#696969","type":"none","fontSrc":"/static/fonts/iconfont.ttf","text":""}]},"usingComponents":{"chat-input":"/components/im-chat/chatinput","free-confirm":"/components/free-ui/free-confirm","free-popup":"/components/free-ui/free-popup"},"usingAutoImportComponents":{}},"pages/login/login":{"usingComponents":{"w-input":"/components/watch-login/watch-input","w-button":"/components/watch-login/watch-button"},"usingAutoImportComponents":{}},"pages/login/forget":{"usingComponents":{"w-input":"/components/watch-login/watch-input","w-button":"/components/watch-login/watch-button"},"usingAutoImportComponents":{}},"pages/login/register":{"usingComponents":{"w-input":"/components/watch-login/watch-input","w-button":"/components/watch-login/watch-button"},"usingAutoImportComponents":{}},"pages/webview/webview":{"navigationBarTitleText":"","bounce":"none","titleNView":{"type":"default"},"usingComponents":{},"usingAutoImportComponents":{}},"pages/tabbar/publish/publish":{"navigationBarTitleText":"发表动态","navigationBarBackgroundColor":"#EDEDED","bounce":"none","titleNView":{"type":"default"},"usingComponents":{"free-nav-bar":"/components/free-ui/free-nav-bar","free-confirm":"/components/free-ui/free-confirm"},"usingAutoImportComponents":{}},"pages/mine/mine":{"navigationBarTitleText":"个人中心","navigationBarBackgroundColor":"#EDEDED","bounce":"none","titleNView":{"type":"default"},"usingComponents":{},"usingAutoImportComponents":{}}},"globalStyle":{"navigationBarTextStyle":"black","navigationBarTitleText":"仿微信","navigationBarBackgroundColor":"#F8F8F8","backgroundColor":"#F8F8F8","titleNView":false,"scrollIndicator":"none"}});

/***/ }),

/***/ 5:
/*!**************************************************!*\
  !*** E:/天赐/TianciWeb/pages.json?{"type":"stat"} ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__B7D51E8"});

/***/ }),

/***/ 6:
/*!***************************************************!*\
  !*** E:/天赐/TianciWeb/main.js?{"type":"appStyle"} ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 7).default,Vue.prototype.__$appStyle__)


/***/ }),

/***/ 7:
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

/***/ 8:
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

/***/ 86:
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC9pbmRleC5qcz85MjFiIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLW5hdi1iYXIudnVlP2E3NGYiLCJ3ZWJwYWNrOi8vL0U6L+Wkqei1kC9UaWFuY2lXZWIvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtbmF2LWJhci52dWU/OTllZSIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1uYXYtYmFyLnZ1ZT8xMWVjIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLW5hdi1iYXIudnVlPzcwZTIiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLW5hdi1iYXIudnVlIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWljb24tYnV0dG9uLnZ1ZT83YWI2Iiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL21haW4uanM/OTcxNCIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9wYWdlcy90YWJiYXIvbWFpbC9tYWlsLm52dWU/NjVlZiIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9wYWdlcy90YWJiYXIvbWFpbC9tYWlsLm52dWU/ZWM2YyIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9wYWdlcy90YWJiYXIvbWFpbC9tYWlsLm52dWU/MzgxYyIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9wYWdlcy90YWJiYXIvbWFpbC9tYWlsLm52dWU/MTc0NiIsInVuaS1hcHA6Ly8vcGFnZXMvdGFiYmFyL21haWwvbWFpbC5udnVlIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL3BhZ2VzL3RhYmJhci9tYWlsL21haWwubnZ1ZT9lY2VjIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3VuaS1hcHAtcGx1cy1udnVlLXY4L2Rpc3QvaW5kZXguanM/OTkyYSIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1pY29uLWJ1dHRvbi52dWU/YzZhYyIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9wYWdlcy90YWJiYXIvbWFpbC9tYWlsLm52dWU/NWQ3NyIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1pY29uLWJ1dHRvbi52dWU/Y2Q2NyIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1pY29uLWJ1dHRvbi52dWU/MWJkMiIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtaWNvbi1idXR0b24udnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcz9mMGM1Iiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLXBvcHVwLnZ1ZT9iMGRhIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLXBvcHVwLnZ1ZT85NjlkIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLXBvcHVwLnZ1ZT9jMmNkIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLXBvcHVwLnZ1ZT9kYjBmIiwidW5pLWFwcDovLy9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1wb3B1cC52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvbGliL2Zvcm1hdC1sb2cuanM/MGRlOSIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1wb3B1cC52dWU/ZWMxNSIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1wb3B1cC52dWU/YmYxNSIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1saXN0LWl0ZW0udnVlPzg4MzgiLCJ3ZWJwYWNrOi8vL0U6L+Wkqei1kC9UaWFuY2lXZWIvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtbGlzdC1pdGVtLnZ1ZT83ZDZiIiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWxpc3QtaXRlbS52dWU/ZWY2MSIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1saXN0LWl0ZW0udnVlP2NkODMiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWxpc3QtaXRlbS52dWUiLCJ3ZWJwYWNrOi8vL0U6L+Wkqei1kC9UaWFuY2lXZWIvcGFnZXMuanNvbj8xNmM5Iiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL3BhZ2VzLmpzb24/NTIxYSIsIndlYnBhY2s6Ly8vRTov5aSp6LWQL1RpYW5jaVdlYi9tYWluLmpzPzhlMGQiLCJ3ZWJwYWNrOi8vL0U6L+Wkqei1kC9UaWFuY2lXZWIvQXBwLnZ1ZT82YmI3Iiwid2VicGFjazovLy9FOi/lpKnotZAvVGlhbmNpV2ViL0FwcC52dWU/Mjg0YyIsInVuaS1hcHA6Ly8vanNfc2RrL2NoaW5lc2VDb252ZXJzaW9uLmpzIl0sIm5hbWVzIjpbIlNUQVRfVkVSU0lPTiIsInZlcnNpb24iLCJTVEFUX1VSTCIsIlNUQVRfSDVfVVJMIiwiUEFHRV9QVkVSX1RJTUUiLCJBUFBfUFZFUl9USU1FIiwiT1BFUkFUSU5HX1RJTUUiLCJVVUlEX0tFWSIsIlVVSURfVkFMVUUiLCJnZXRVdWlkIiwidXVpZCIsImdldFBsYXRmb3JtTmFtZSIsInBsdXMiLCJydW50aW1lIiwiZ2V0RENsb3VkSWQiLCJlIiwidW5pIiwiZ2V0U3RvcmFnZVN5bmMiLCJEYXRlIiwibm93IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0U3RvcmFnZVN5bmMiLCJnZXRTZ2luIiwic3RhdERhdGEiLCJhcnIiLCJPYmplY3QiLCJrZXlzIiwic29ydEFyciIsInNvcnQiLCJzZ2luIiwic2dpblN0ciIsImkiLCJzaWduIiwib3B0aW9ucyIsInN1YnN0ciIsImxlbmd0aCIsImdldFNwbGljaW5nIiwiZGF0YSIsInN0ciIsImdldFRpbWUiLCJwYXJzZUludCIsInBsYXRmb3JtTGlzdCIsInByb2Nlc3MiLCJnZXRQYWNrTmFtZSIsInBhY2tOYW1lIiwiY2FuSVVzZSIsImdldEFjY291bnRJbmZvU3luYyIsIm1pbmlQcm9ncmFtIiwiYXBwSWQiLCJnZXRWZXJzaW9uIiwiZ2V0Q2hhbm5lbCIsInBsYXRmb3JtTmFtZSIsImNoYW5uZWwiLCJnZXRTY2VuZSIsInNjZW5lIiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSIsIkxhc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJnZXRGaXJzdFZpc2l0VGltZSIsInRpbWVTdG9yZ2UiLCJ0aW1lIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJnZXRMYXN0VmlzaXRUaW1lIiwiUEFHRV9SRVNJREVOQ0VfVElNRSIsIkZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJzZXRQYWdlUmVzaWRlbmNlVGltZSIsImdldFBhZ2VSZXNpZGVuY2VUaW1lIiwiVE9UQUxfX1ZJU0lUX19DT1VOVCIsImdldFRvdGFsVmlzaXRDb3VudCIsImNvdW50IiwiR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyIsInByb3AiLCJlbmNvZGVVUklDb21wb25lbnQiLCJTZXRfX0ZpcnN0X19UaW1lIiwiU2V0X19MYXN0X19UaW1lIiwiZ2V0Rmlyc3RUaW1lIiwiZ2V0TGFzdFRpbWUiLCJnZXRSZXNpZGVuY2VUaW1lIiwidHlwZSIsInJlc2lkZW5jZVRpbWUiLCJvdmVydGltZSIsImdldFJvdXRlIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwYWdlIiwiX3NlbGYiLCIkdm0iLCIkbXAiLCJpcyIsIiRzY29wZSIsInJvdXRlIiwiZ2V0UGFnZVJvdXRlIiwic2VsZiIsInF1ZXJ5IiwiX3F1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFBhZ2VUeXBlcyIsIm1wVHlwZSIsIiRvcHRpb25zIiwiY2FsaWJyYXRpb24iLCJldmVudE5hbWUiLCJjb25zb2xlIiwiZXJyb3IiLCJQYWdlc0pzb24iLCJyZXF1aXJlIiwiZGVmYXVsdCIsInN0YXRDb25maWciLCJyZXN1bHRPcHRpb25zIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJVdGlsIiwiX3JldHJ5IiwiX3BsYXRmb3JtIiwiX25hdmlnYXRpb25CYXJUaXRsZSIsImNvbmZpZyIsInJlcG9ydCIsImx0IiwiX29wZXJhdGluZ1RpbWUiLCJfcmVwb3J0aW5nUmVxdWVzdERhdGEiLCJfX3ByZXZlbnRfdHJpZ2dlcmluZyIsIl9fbGljYXRpb25IaWRlIiwiX19saWNhdGlvblNob3ciLCJfbGFzdFBhZ2VSb3V0ZSIsInV0IiwibXBuIiwiYWsiLCJhcHBpZCIsInVzdiIsInYiLCJjaCIsImNuIiwicG4iLCJjdCIsInQiLCJ0dCIsInAiLCJwbGF0Zm9ybSIsImJyYW5kIiwibWQiLCJtb2RlbCIsInN2Iiwic3lzdGVtIiwicmVwbGFjZSIsIm1wc2RrIiwiU0RLVmVyc2lvbiIsIm1wdiIsImxhbmciLCJsYW5ndWFnZSIsInByIiwicGl4ZWxSYXRpbyIsInd3Iiwid2luZG93V2lkdGgiLCJ3aCIsIndpbmRvd0hlaWdodCIsInN3Iiwic2NyZWVuV2lkdGgiLCJzaCIsInNjcmVlbkhlaWdodCIsInBhdGgiLCJzYyIsIl9zZW5kUmVwb3J0UmVxdWVzdCIsIl9zZW5kSGlkZVJlcXVlc3QiLCJ1cmxyZWYiLCJ1cmxyZWZfdHMiLCJyb3V0ZXBhdGgiLCJ0aXRsZU5WaWV3IiwidGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIl9zZW5kUGFnZVJlcXVlc3QiLCJ1cmwiLCJfc2VuZEV2ZW50UmVxdWVzdCIsImtleSIsImZ2dHMiLCJsdnRzIiwidHZjIiwiZ2V0UHJvcGVydHkiLCJnZXROZXR3b3JrSW5mbyIsIm9wdCIsInJlcXVlc3QiLCJ2YWx1ZSIsImVfbiIsImVfdiIsInRvU3RyaW5nIiwiZ2V0TmV0d29ya1R5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwibmV0IiwibmV0d29ya1R5cGUiLCJnZXRMb2NhdGlvbiIsIndndGluZm8iLCJnZW9jb2RlIiwiYWRkcmVzcyIsImNvdW50cnkiLCJwcm92aW5jZSIsImNpdHkiLCJsYXQiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsInRpdGxlIiwidHRuIiwidHRwaiIsInR0YyIsInJlcXVlc3REYXRhIiwicHVzaCIsInVuaVN0YXREYXRhIiwiZmlyc3RBcnIiLCJjb250ZW50QXJyIiwibGFzdEFyciIsInJkIiwiZm9yRWFjaCIsImVsbSIsIm5ld0RhdGEiLCJvcHRpb25zRGF0YSIsInJlcXVlc3RzIiwiaW1hZ2VSZXF1ZXN0Iiwic2V0VGltZW91dCIsIl9zZW5kUmVxdWVzdCIsIm1ldGhvZCIsImZhaWwiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiU3RhdCIsImluc3RhbmNlIiwiYWRkSW50ZXJjZXB0b3IiLCJhZGRJbnRlcmNlcHRvckluaXQiLCJpbnRlcmNlcHRMb2dpbiIsImludGVyY2VwdFNoYXJlIiwiaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQiLCJpbnZva2UiLCJhcmdzIiwiY29tcGxldGUiLCJfbG9naW4iLCJfc2hhcmUiLCJfcGF5bWVudCIsIl9wYWdlU2hvdyIsIl9hcHBsaWNhdGlvblNob3ciLCJfcGFnZUhpZGUiLCJfYXBwbGljYXRpb25IaWRlIiwiZW0iLCJpbmZvIiwiZW1WYWwiLCJtZXNzYWdlIiwic3RhY2siLCJzdGF0IiwiZ2V0SW5zdGFuY2UiLCJpc0hpZGUiLCJsaWZlY3ljbGUiLCJvbkxhdW5jaCIsIm9uUmVhZHkiLCJyZWFkeSIsIm9uTG9hZCIsImxvYWQiLCJvblNoYXJlQXBwTWVzc2FnZSIsIm9sZFNoYXJlQXBwTWVzc2FnZSIsImNhbGwiLCJvblNob3ciLCJzaG93Iiwib25IaWRlIiwiaGlkZSIsIm9uVW5sb2FkIiwib25FcnJvciIsIm1haW4iLCJpbml0VW5pIiwiaXNGbiIsImhhbmRsZVByb21pc2UiLCJwcm9taXNlIiwidGhlbiIsImNhdGNoIiwiZXJyIiwiUkVHRVgiLCJBUElfTk9STUFMX0xJU1QiLCJzaG91bGRQcm9taXNlIiwibmFtZSIsInRlc3QiLCJpbmRleE9mIiwicHJvbWlzaWZ5IiwiYXBpIiwiX2xlbiIsImFyZ3VtZW50cyIsInBhcmFtcyIsIkFycmF5IiwiX2tleSIsInVuZGVmaW5lZCIsImFwcGx5IiwiY29uY2F0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJmaW5hbGx5IiwiY2FsbGJhY2siLCJjb25zdHJ1Y3RvciIsInJlYXNvbiIsIm9uTWVzc2FnZUNhbGxiYWNrcyIsIm9yaWdpbiIsIm9uU3ViTlZ1ZU1lc3NhZ2UiLCJ3ZWJ2aWV3SWQiLCJ3ZWV4UGx1cyIsIndlYnZpZXciLCJjdXJyZW50V2VidmlldyIsImlkIiwiQnJvYWRjYXN0Q2hhbm5lbCIsIm9ubWVzc2FnZSIsImV2ZW50IiwidG8iLCJ3cmFwcGVyIiwiJHByb2Nlc3NlZCIsImN1cnJlbnRXZWJ2aWV3SWQiLCJpc1BvcHVwTlZ1ZSIsImhvc3ROVnVlSWQiLCJfX3VuaWFwcF9vcmlnaW5fdHlwZSIsIl9fdW5pYXBwX29yaWdpbl9pZCIsInBvcHVwTlZ1ZUlkIiwicG9zdE1lc3NhZ2UiLCJvbk1lc3NhZ2UiLCJfX3VuaWFwcF9tYXNrX2lkIiwiX191bmlhcHBfaG9zdCIsIm1hc2tDb2xvciIsIl9fdW5pYXBwX21hc2siLCJtYXNrV2VidmlldyIsImdldFdlYnZpZXdCeUlkIiwicGFyZW50Iiwib2xkU2hvdyIsIm9sZEhpZGUiLCJvbGRDbG9zZSIsImNsb3NlIiwic2hvd01hc2siLCJzZXRTdHlsZSIsIm1hc2siLCJjbG9zZU1hc2siLCJfbGVuMiIsIl9rZXkyIiwiX2xlbjMiLCJfa2V5MyIsImdldFN1Yk5WdWVCeUlkIiwiZ2V0Q3VycmVudFN1Yk5WdWUiLCJ3ZWV4IiwicmVxdWlyZU1vZHVsZSIsImdsb2JhbEV2ZW50IiwiY2FsbGJhY2tzIiwiVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrIiwiY3JlYXRlQ2FsbGJhY2siLCJyZXMiLCJlcnJNc2ciLCJrZWVwQWxpdmUiLCJjYWxsYmFja0lkIiwicHVibGlzaCIsIl9yZWYiLCJjcmVhdGVQdWJsaXNoIiwib25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQiLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQiLCJyZXF1aXJlTmF0aXZlUGx1Z2luIiwicGx1Z2luTmFtZSIsImRvbSIsImxvYWRGb250RmFjZSIsImZhbWlseSIsInNvdXJjZSIsImRlc2MiLCJhZGRSdWxlIiwiZm9udEZhbWlseSIsInN0YXR1cyIsImdsb2JhbEV2ZW50JDEiLCJjYWxsYmFja3MkMSIsImlzVW5pQXBwUmVhZHkiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvYmoiLCJzdHJlYW0iLCJNRVRIT0RfR0VUIiwiTUVUSE9EX1BPU1QiLCJDT05URU5UX1RZUEVfSlNPTiIsIkNPTlRFTlRfVFlQRV9GT1JNIiwic2VyaWFsaXplIiwiY29udGVudFR5cGUiLCJ0b1VwcGVyQ2FzZSIsInRvTG93ZXJDYXNlIiwibWFwIiwiam9pbiIsImhlYWRlciIsIl9yZWYkbWV0aG9kIiwiX3JlZiRkYXRhVHlwZSIsImRhdGFUeXBlIiwicmVzcG9uc2VUeXBlIiwiYWJvcnRlZCIsImhhc0NvbnRlbnRUeXBlIiwiaGVhZGVycyIsImZldGNoIiwiYm9keSIsIl9yZWYyIiwib2siLCJzdGF0dXNUZXh0IiwicmV0Iiwic3RhdHVzQ29kZSIsImFib3J0Iiwic3RvcmFnZSIsIlVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSIsImdldFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2UiLCJzZXRTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZVN0b3JhZ2UiLCJfcmVmMyIsInJlbW92ZUl0ZW0iLCJjbGVhclN0b3JhZ2UiLCJfcmVmNCIsImNsaXBib2FyZCIsImdldENsaXBib2FyZERhdGEiLCJnZXRTdHJpbmciLCJzZXRDbGlwYm9hcmREYXRhIiwic2V0U3RyaW5nIiwiZ2V0RW1pdHRlciIsImdldFVuaUVtaXR0ZXIiLCJFbWl0dGVyIiwiJG9uIiwid2FybiIsIiRvZmYiLCIkb25jZSIsIiRlbWl0IiwiY3R4Iiwic2xpY2UiLCJmcmVlemUiLCJ3eCIsInVwbG9hZEZpbGUiLCJkb3dubG9hZEZpbGUiLCJjaG9vc2VJbWFnZSIsInByZXZpZXdJbWFnZSIsImdldEltYWdlSW5mbyIsInNhdmVJbWFnZVRvUGhvdG9zQWxidW0iLCJjaG9vc2VWaWRlbyIsInNhdmVWaWRlb1RvUGhvdG9zQWxidW0iLCJzYXZlRmlsZSIsImdldFNhdmVkRmlsZUxpc3QiLCJnZXRTYXZlZEZpbGVJbmZvIiwicmVtb3ZlU2F2ZWRGaWxlIiwib3BlbkRvY3VtZW50IiwiZ2V0U3RvcmFnZUluZm8iLCJjaG9vc2VMb2NhdGlvbiIsIm9wZW5Mb2NhdGlvbiIsImdldFN5c3RlbUluZm8iLCJtYWtlUGhvbmVDYWxsIiwic2NhbkNvZGUiLCJzZXRTY3JlZW5CcmlnaHRuZXNzIiwiZ2V0U2NyZWVuQnJpZ2h0bmVzcyIsInNldEtlZXBTY3JlZW5PbiIsInZpYnJhdGVMb25nIiwidmlicmF0ZVNob3J0IiwiYWRkUGhvbmVDb250YWN0Iiwic2hvd1RvYXN0Iiwic2hvd0xvYWRpbmciLCJoaWRlVG9hc3QiLCJoaWRlTG9hZGluZyIsInNob3dNb2RhbCIsInNob3dBY3Rpb25TaGVldCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInNldE5hdmlnYXRpb25CYXJDb2xvciIsIm5hdmlnYXRlVG8iLCJyZWRpcmVjdFRvIiwicmVMYXVuY2giLCJzd2l0Y2hUYWIiLCJuYXZpZ2F0ZUJhY2siLCJnZXRQcm92aWRlciIsImxvZ2luIiwiZ2V0VXNlckluZm8iLCJzaGFyZSIsInJlcXVlc3RQYXltZW50Iiwic3Vic2NyaWJlUHVzaCIsInVuc3Vic2NyaWJlUHVzaCIsIm9uUHVzaCIsIm9mZlB1c2giLCJiYXNlVW5pIiwib3MiLCJudnVlIiwiUHJveHkiLCJnZXQiLCJ0YXJnZXQiLCJjcmVhdGVVbmkiLCJnZXRVbmkiLCJXZWV4UGx1cyIsInR5cG9mIiwicyIsInN1YnN0cmluZyIsImZvcm1hdExvZyIsIm1zZ3MiLCJ2VHlwZSIsIlN0cmluZyIsIm1zZyIsImxhc3RNc2ciLCJwb3AiLCJwaW55aW4iLCJQaW55aW4iLCJvcHMiLCJpbml0aWFsaXplIiwiY2hlY2tQb2x5cGhvbmUiLCJjaGFyY2FzZSIsImZuIiwiaW5pdCIsImV4dGVuZCIsImNoYXJfZGljdCIsImZ1bGxfZGljdCIsInBvbHlwaG9uZSIsImdldEZ1bGxDaGFycyIsInJlZyIsIlJlZ0V4cCIsImxlbiIsInVuaWNvZGUiLCJjaGFyQ29kZUF0IiwiX2dldEZ1bGxDaGFyIiwiZ2V0Q2FtZWxDaGFycyIsIkVycm9yIiwiY2hhcnMiLCJjaGFyQXQiLCJfZ2V0Q2hhciIsIl9nZXRSZXN1bHQiLCJfY2FwaXRhbGl6ZSIsImZpcnN0Iiwic3BhcmUiLCJzdHJsZW4iLCJqIiwiayIsInN3YXAxIiwic3dhcDIiLCJkc3QiLCJwcm9wZXJ0eSIsImluaXRpYWwiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O2lEQ2xGQSw2RDs7QUFFQSxJQUFNQSxZQUFZLEdBQUdDLGdCQUFyQjtBQUNBLElBQU1DLFFBQVEsR0FBRyxtQ0FBakI7QUFDQSxJQUFNQyxXQUFXLEdBQUcsdUNBQXBCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLElBQXZCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLEdBQXRCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLEVBQXZCOztBQUVBLElBQU1DLFFBQVEsR0FBRyxnQkFBakI7QUFDQSxJQUFNQyxVQUFVLEdBQUcsaUJBQW5C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RztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFD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VjtBQTJCQyxpQkFBUyxJQTNCVjtBQTRCQyxpQkFBUyxJQTVCVjtBQTZCVSxVQTdCVjtBQThCVSxVQTlCVjtBQStCVSxVQS9CVjtBQWdDVSxVQWhDVjtBQWlDVSxVQWpDVjtBQWtDQyxhQWxDRCxFQWtDVSxJQWxDVjtBQW1DQyxhQW5DRCxFQW1DVSxJQW5DVjtBQW9DQyxhQXBDRCxFQW9DVSxJQXBDVjtBQXFDQyxhQXJDRCxFQXFDVSxJQXJDVjtBQXNDQyxhQXRDRCxFQXNDVSxJQXRDVjtBQXVDQyxhQXZDRCxFQXVDVSxJQXZDVjtBQXdDQyxhQXhDRCxFQXdDVSxJQXhDVjtBQXlDQyxhQXpDRCxFQXlDVSxJQXpDVjtBQTBDQyxhQTFDRCxFQTBDVSxJQTFDVjtBQTJDQyxhQTNDRCxFQTJDVSxJQTNDVjtBQTRDQyxhQTVDRCxFQTRDVSxJQTVDVjtBQTZDQyxhQTdDRCxFQTZDVSxLQTdDVjtBQThDQyxhQTlDRCxFQThDVSxJQTlDVjtBQStDQyxhQS9DRCxFQStDVSxJQS9DVjtBQWdEQyxhQWhERCxFQWdEVSxJQWhEVjtBQWlEQyxhQWpERCxFQWlEVSxJQWpEVjtBQWtEQyxhQWxERCxFQWtEVSxJQWxEVjtBQW1EQyxhQW5ERCxFQW1EVSxJQW5EVjtBQW9EQyxhQXBERCxFQW9EVSxJQXBEVjtBQXFEQyxhQXJERCxFQXFEVSxJQXJEVjtBQXNEQyxhQXRERCxFQXNEVSxJQXREVjtBQXVEQyxhQXZERCxFQXVEVSxJQXZEVjtBQXdEQyxhQXhERCxFQXdEVSxJQXhEVjtBQXlEQyxhQXpERCxFQXlEVSxJQXpEVjtBQTBEQyxhQTFERCxFQTBEVSxJQTFEVjtBQTJEQyxhQTNERCxFQTJEVSxJQTNEVjtBQTREQyxhQTVERCxFQTREVSxJQTVEVjtBQTZEQyxhQTdERCxFQTZEVSxHQTdEVjtBQThEQyxhQTlERCxFQThEVSxJQTlEVjtBQStEQyxhQS9ERCxFQStEVSxJQS9EVjtBQWdFQyxhQWhFRCxFQWdFVSxHQWhFVjtBQWlFQyxhQWpFRCxFQWlFVSxJQWpFVjtBQWtFQyxhQWxFRCxFQWtFVSxLQWxFVjtBQW1FQyxhQW5FRCxFQW1FVSxJQW5FVjtBQW9FQyxhQXBFRCxFQW9FVSxJQXBFVjtBQXFFQyxhQXJFRCxFQXFFVSxLQXJFVjtBQXNFQyxhQXRFRCxFQXNFVSxJQXRFVjtBQXVFQyxhQXZFRCxFQXVFVSxHQXZFVjtBQXdFQyxhQXhFRCxFQXdFVSxJQXhFVjtBQXlFQyxhQXpFRCxFQXlFVSxLQXpFVjtBQTBFQyxhQTFFRCxFQTBFVSxHQTFFVjtBQTJFQyxhQTNFRCxFQTJFVSxJQTNFVjtBQTRFQyxhQTVFRCxFQTRFVSxJQTVFVjtBQTZFQyxhQTdFRCxFQTZFVSxHQTdFVjtBQThFQyxhQTlFRCxFQThFVSxJQTlFVjtBQStFQyxhQS9FRCxFQStFVSxJQS9FVjtBQWdGQyxhQWhGRCxFQWdGVSxJQWhGVjtBQWlGQyxhQWpGRCxFQWlGVSxJQWpGVjtBQWtGQyxhQWxGRCxFQWtGVSxJQWxGVjtBQW1GQyxhQW5GRCxFQW1GVSxJQW5GVjtBQW9GQyxhQXBGRCxFQW9GVSxJQXBGVjtBQXFGQyxhQXJGRCxFQXFGVSxHQXJGVjtBQXNGQyxhQXRGRCxFQXNGVSxJQXRGVjtBQXVGQyxhQXZGRCxFQXVGVSxJQXZGVjtBQXdGQyxhQXhGRCxFQXdGVSxJQXhGVjtBQXlGQyxhQXpGRCxFQXlGVSxJQXpGVjtBQTBGQyxhQTFGRCxFQTBGVSxJQTFGVjtBQTJGQyxhQTNGRCxFQTJGVSxJQTNGVjtBQTRGQyxhQTVGRCxFQTRGVSxJQTVGVjtBQTZGQyxhQTdGRCxFQTZGVSxJQTdGVjtBQThGQyxhQTlGRCxFQThGVSxJQTlGVjtBQStGQyxhQS9GRCxFQStGVSxJQS9GVjtBQWdHQyxhQWhHRCxFQWdHVSxJQWhHVjtBQWlHQyxhQWpHRCxFQWlHVSxJQWpHVjtBQWtHQyxhQWxHRCxFQWtHVSxJQWxHVjtBQW1HQyxhQW5HRCxFQW1HVSxJQW5HVjtBQW9HQyxhQXBHRCxFQW9HVSxJQXBHVjtBQXFHQyxhQXJHRCxFQXFHVSxJQXJHVjtBQXNHQyxhQXRHRCxFQXNHVSxJQXRHVjtBQXVHQyxhQXZHRCxFQXVHVSxJQXZHVjtBQXdHQyxhQXhHRCxFQXdHVSxJQXhHVjtBQXlHQyxhQXpHRCxFQXlHVSxJQXpHVjtBQTBHQyxhQTFHRCxFQTBHVSxJQTFHVjtBQTJHQyxhQTNHRCxFQTJHVSxJQTNHVjtBQTRHQyxhQTVHRCxFQTRHVSxJQTVHVjtBQTZHQyxhQTdHRCxFQTZHVSxJQTdHVjtBQThHQyxhQTlHRCxFQThHVSxJQTlHVjtBQStHQyxhQS9HRCxFQStHVSxJQS9HVjtBQWdIQyxhQWhIRCxFQWdIVSxJQWhIVjtBQWlIQyxhQWpIRCxFQWlIVSxJQWpIVjtBQWtIQyxhQWxIRCxFQWtIVSxJQWxIVjtBQW1IQyxhQW5IRCxFQW1IVSxJQW5IVjtBQW9IQyxhQXBIRCxFQW9IVSxJQXBIVjtBQXFIQyxhQXJIRCxFQXFIVSxJQXJIVjtBQXNIQyxhQXRIRCxFQXNIVSxJQXRIVjtBQXVIQyxhQXZIRCxFQXVIVSxJQXZIVjtBQXdIQyxhQXhIRCxFQXdIVSxJQXhIVjtBQXlIQyxhQXpIRCxFQXlIVSxJQXpIVjtBQTBIQyxhQTFIRCxFQTBIVSxJQTFIVjtBQTJIQyxhQTNIRCxFQTJIVSxJQTNIVjtBQTRIQyxhQTVIRCxFQTRIVSxJQTVIVjtBQTZIQyxhQTdIRCxFQTZIVSxJQTdIVjtBQThIQyxhQTlIRCxFQThIVSxJQTlIVjtBQStIQyxhQS9IRCxFQStIVSxJQS9IVjtBQWdJQyxhQWhJRCxFQWdJVSxJQWhJVjtBQWlJQyxhQWpJRCxFQWlJVSxJQWpJVjtBQWtJQyxhQWxJRCxFQWtJVSxJQWxJVjtBQW1JQyxhQW5JRCxFQW1JVSxJQW5JVjtBQW9JQyxhQXBJRCxFQW9JVSxJQXBJVjtBQXFJQyxhQXJJRCxFQXFJVSxJQXJJVjtBQXNJQyxhQXRJRCxFQXNJVSxJQXRJVjtBQXVJQyxhQXZJRCxFQXVJVSxJQXZJVjtBQXdJQyxhQXhJRCxFQXdJVSxJQXhJVjtBQXlJQyxhQXpJRCxFQXlJVSxJQXpJVjtBQTBJQyxhQTFJRCxFQTBJVSxJQTFJVjtBQTJJQyxhQTNJRCxFQTJJVSxJQTNJVjtBQTRJQyxhQTVJRCxFQTRJVSxJQTVJVjtBQTZJQyxhQTdJRCxFQTZJVSxJQTdJVjtBQThJQyxhQTlJRCxFQThJVSxJQTlJVjtBQStJQyxhQS9JRCxFQStJVSxJQS9JVjtBQWdKQyxhQWhKRCxFQWdKVSxJQWhKVjtBQWlKQyxhQWpKRCxFQWlKVSxJQWpKVjtBQWtKQyxhQWxKRCxFQWtKVSxJQWxKVjtBQW1KQyxhQW5KRCxFQW1KVSxJQW5KVjtBQW9KQyxhQXBKRCxFQW9KVSxJQXBKVjtBQXFKQyxhQXJKRCxFQXFKVSxJQXJKVjtBQXNKQyxhQXRKRCxFQXNKVSxJQXRKVjtBQXVKQyxhQXZKRCxFQXVKVSxJQXZKVjtBQXdKQyxhQXhKRCxFQXdKVSxJQXhKVjtBQXlKQyxhQXpKRCxFQXlKVSxJQXpKVjtBQTBKQyxhQTFKRCxFQTBKVSxJQTFKVjtBQTJKQyxhQTNKRCxFQTJKVSxJQTNKVjtBQTRKQyxhQTVKRCxFQTRKVSxJQTVKVjtBQTZKQyxhQTdKRCxFQTZKVSxJQTdKVjtBQThKQyxhQTlKRCxFQThKVSxHQTlKVjtBQStKQyxhQS9KRCxFQStKVSxHQS9KVjtBQWdLQyxhQWhLRCxFQWdLVSxJQWhLVjtBQWlLQyxhQWpLRCxFQWlLVSxJQWpLVjtBQWtLQyxhQWxLRCxFQWtLVSxJQWxLVjtBQW1LQyxhQW5LRCxFQW1LVSxJQW5LVjtBQW9LQyxhQXBLRCxFQW9LVSxJQXBLVjtBQXFLQyxhQXJLRCxFQXFLVSxJQXJLVjtBQXNLQyxhQXRLRCxFQXNLVSxJQXRLVjtBQXVLQyxhQXZLRCxFQXVLVSxJQXZLVjtBQXdLQyxhQXhLRCxFQXdLVSxJQXhLVjtBQXlLQyxhQXpLRCxFQXlLVSxJQXpLVjtBQTBLQyxhQTFLRCxFQTBLVSxJQTFLVjtBQTJLQyxhQTNLRCxFQTJLVSxJQTNLVjtBQTRLQyxhQTVLRCxFQTRLVSxJQTVLVjtBQTZLQyxhQTdLRCxFQTZLVSxJQTdLVjtBQThLQyxhQTlLRCxFQThLVSxJQTlLVjtBQStLQyxhQS9LRCxFQStLVSxJQS9LVjtBQWdMQyxhQWhMRCxFQWdMVSxJQWhMVjtBQWlMQyxhQWpMRCxFQWlMVSxJQWpMVjtBQWtMQyxhQWxMRCxFQWtMVSxJQWxMVjtBQW1MQyxhQW5MRCxFQW1MVSxJQW5MVjtBQW9MQyxhQXBMRCxFQW9MVSxJQXBMVjtBQXFMQyxhQXJMRCxFQXFMVSxJQXJMVjtBQXNMQyxhQXRMRCxFQXNMVSxJQXRMVjtBQXVMQyxhQXZMRCxFQXVMVSxJQXZMVjtBQXdMQyxhQXhMRCxFQXdMVSxJQXhMVjtBQXlMQyxhQXpMRCxFQXlMVSxJQXpMVjtBQTBMQyxhQTFMRCxFQTBMVSxJQTFMVjtBQTJMQyxhQTNMRCxFQTJMVSxJQTNMVjtBQTRMQyxhQTVMRCxFQTRMVSxJQTVMVjtBQTZMQyxhQTdMRCxFQTZMVSxJQTdMVjtBQThMQyxhQTlMRCxFQThMVSxJQTlMVjtBQStMQyxhQS9MRCxFQStMVSxJQS9MVjtBQWdNQyxhQWhNRCxFQWdNVSxJQWhNVjtBQWlNQyxhQWpNRCxFQWlNVSxJQWpNVjtBQWtNQyxhQWxNRCxFQWtNVSxJQWxNVjtBQW1NQyxhQW5NRCxFQW1NVSxJQW5NVjtBQW9NQyxhQXBNRCxFQW9NVSxJQXBNVjtBQXFNQyxhQXJNRCxFQXFNVSxJQXJNVjtBQXNNQyxhQXRNRCxFQXNNVSxJQXRNVjtBQXVNQyxhQXZNRCxFQXVNVSxHQXZNVjtBQXdNQyxhQXhNRCxFQXdNVSxJQXhNVjtBQXlNQyxhQXpNRCxFQXlNVSxJQXpNVjtBQTBNQyxhQTFNRCxFQTBNVSxJQTFNVjtBQTJNQyxhQTNNRCxFQTJNVSxJQTNNVjtBQTRNQyxhQTVNRCxFQTRNVSxJQTVNVjtBQTZNQyxhQTdNRCxFQTZNVSxJQTdNVjtBQThNQyxhQTlNRCxFQThNVSxJQTlNVjtBQStNQyxhQS9NRCxFQStNVSxJQS9NVjtBQWdOQyxhQWhORCxFQWdOVSxJQWhOVjtBQWlOQyxhQWpORCxFQWlOVSxJQWpOVjtBQWtOQyxhQWxORCxFQWtOVSxJQWxOVjtBQW1OQyxhQW5ORCxFQW1OVSxJQW5OVjtBQW9OQyxhQXBORCxFQW9OVSxJQXBOVjtBQXFOQyxhQXJORCxFQXFOVSxJQXJOVjtBQXNOQyxhQXRORCxFQXNOVSxJQXROVjtBQXVOQyxhQXZORCxFQXVOVSxJQXZOVjtBQXdOQyxhQXhORCxFQXdOVSxJQXhOVjtBQXlOQyxhQXpORCxFQXlOVSxJQXpOVjtBQTBOQyxhQTFORCxFQTBOVSxJQTFOVjtBQTJOQyxhQTNORCxFQTJOVSxJQTNOVjtBQTROQyxhQTVORCxFQTROVSxJQTVOVjtBQTZOQyxhQTdORCxFQTZOVSxJQTdOVjtBQThOQyxhQTlORCxFQThOVSxJQTlOVjtBQStOQyxhQS9ORCxFQStOVSxHQS9OVjtBQWdPQyxhQWhPRCxFQWdPVSxJQWhPVjtBQWlPQyxhQWpPRCxFQWlPVSxJQWpPVjtBQWtPQyxhQWxPRCxFQWtPVSxJQWxPVjtBQW1PQyxhQW5PRCxFQW1PVSxJQW5PVjtBQW9PQyxhQXBPRCxFQW9PVSxJQXBPVjtBQXFPQyxhQXJPRCxFQXFPVSxJQXJPVjtBQXNPQyxhQXRPRCxFQXNPVSxLQXRPVjtBQXVPQyxhQXZPRCxFQXVPVSxJQXZPVjtBQXdPQyxhQXhPRCxFQXdPVSxJQXhPVjtBQXlPQyxhQXpPRCxFQXlPVSxJQXpPVjtBQTBPQyxhQTFPRCxFQTBPVSxJQTFPVjtBQTJPQyxhQTNPRCxFQTJPVSxJQTNPVjtBQTRPQyxhQTVPRCxFQTRPVSxJQTVPVjtBQTZPQyxhQTdPRCxFQTZPVSxLQTdPVjtBQThPQyxhQTlPRCxFQThPVSxJQTlPVjtBQStPQyxhQS9PRCxFQStPVSxJQS9PVjtBQWdQQyxhQWhQRCxFQWdQVSxJQWhQVjtBQWlQQyxhQWpQRCxFQWlQVSxJQWpQVjtBQWtQQyxhQWxQRCxFQWtQVSxJQWxQVjtBQW1QQyxhQW5QRCxFQW1QVSxJQW5QVjtBQW9QQyxhQXBQRCxFQW9QVSxJQXBQVjtBQXFQQyxhQXJQRCxFQXFQVSxJQXJQVjtBQXNQQyxhQXRQRCxFQXNQVSxLQXRQVjtBQXVQQyxhQXZQRCxFQXVQVSxJQXZQVjtBQXdQQyxhQXhQRCxFQXdQVSxJQXhQVjtBQXlQQyxhQXpQRCxFQXlQVSxJQXpQVjtBQTBQQyxhQTFQRCxFQTBQVSxJQTFQVjtBQTJQQyxhQTNQRCxFQTJQVSxJQTNQVjtBQTRQQyxhQTVQRCxFQTRQVSxJQTVQVjtBQTZQQyxhQTdQRCxFQTZQVSxJQTdQVjtBQThQQyxhQTlQRCxFQThQVSxJQTlQVjtBQStQQyxhQS9QRCxFQStQVSxJQS9QVjtBQWdRQyxhQWhRRCxFQWdRVSxJQWhRVjtBQWlRQyxhQWpRRCxFQWlRVSxJQWpRVjtBQWtRQyxhQWxRRCxFQWtRVSxJQWxRVjtBQW1RQyxhQW5RRCxFQW1RVSxJQW5RVjtBQW9RQyxhQXBRRCxFQW9RVSxJQXBRVjtBQXFRQyxhQXJRRCxFQXFRVSxJQXJRVjtBQXNRQyxhQXRRRCxFQXNRVSxJQXRRVjtBQXVRQyxhQXZRRCxFQXVRVSxLQXZRVjtBQXdRQyxhQXhRRCxFQXdRVSxJQXhRVjtBQXlRQyxhQXpRRCxFQXlRVSxJQXpRVjtBQTBRQyxhQTFRRCxFQTBRVSxJQTFRVjtBQTJRQyxhQTNRRCxFQTJRVSxJQTNRVjtBQTRRQyxhQTVRRCxFQTRRVSxJQTVRVjtBQTZRQyxhQTdRRCxFQTZRVSxJQTdRVjtBQThRQyxhQTlRRCxFQThRVSxJQTlRVjtBQStRQyxhQS9RRCxFQStRVSxJQS9RVjtBQWdSQyxhQWhSRCxFQWdSVSxJQWhSVjtBQWlSQyxhQWpSRCxFQWlSVSxJQWpSVjtBQWtSQyxhQWxSRCxFQWtSVSxJQWxSVjtBQW1SQyxhQW5SRCxFQW1SVSxJQW5SVjtBQW9SQyxhQXBSRCxFQW9SVSxJQXBSVjtBQXFSQyxhQXJSRCxFQXFSVSxJQXJSVjtBQXNSQyxhQXRSRCxFQXNSVSxJQXRSVjtBQXVSQyxhQXZSRCxFQXVSVSxJQXZSVjtBQXdSQyxhQXhSRCxFQXdSVSxJQXhSVjtBQXlSQyxhQXpSRCxFQXlSVSxJQXpSVjtBQTBSQyxhQTFSRCxFQTBSVSxJQTFSVjtBQTJSQyxhQTNSRCxFQTJSVSxJQTNSVjtBQTRSQyxhQTVSRCxFQTRSVSxJQTVSVjtBQTZSQyxhQTdSRCxFQTZSVSxJQTdSVjtBQThSQyxhQTlSRCxFQThSVSxJQTlSVjtBQStSQyxhQS9SRCxFQStSVSxJQS9SVjtBQWdTQyxhQWhTRCxFQWdTVSxJQWhTVjtBQWlTQyxhQWpTRCxFQWlTVSxJQWpTVjtBQWtTQyxhQWxTRCxFQWtTVSxJQWxTVjtBQW1TQyxhQW5TRCxFQW1TVSxJQW5TVjtBQW9TQyxhQXBTRCxFQW9TVSxJQXBTVjtBQXFTQyxhQXJTRCxFQXFTVSxJQXJTVjtBQXNTQyxhQXRTRCxFQXNTVSxJQXRTVjtBQXVTQyxhQXZTRCxFQXVTVSxJQXZTVjtBQXdTQyxhQXhTRCxFQXdTVSxJQXhTVjtBQXlTQyxhQXpTRCxFQXlTVSxJQXpTVjtBQTBTQyxhQTFTRCxFQTBTVSxJQTFTVjtBQTJTQyxhQTNTRCxFQTJTVSxJQTNTVjtBQTRTQyxhQTVTRCxFQTRTVSxJQTVTVjtBQTZTQyxhQTdTRCxFQTZTVSxJQTdTVjtBQThTQyxhQTlTRCxFQThTVSxJQTlTVjtBQStTQyxhQS9TRCxFQStTVSxJQS9TVjtBQWdUQyxhQWhURCxFQWdUVSxJQWhUVjtBQWlUQyxhQWpURCxFQWlUVSxJQWpUVjtBQWtUQyxhQWxURCxFQWtUVSxJQWxUVjtBQW1UQyxhQW5URCxFQW1UVSxJQW5UVjtBQW9UQyxhQXBURCxFQW9UVSxJQXBUVjtBQXFUQyxhQXJURCxFQXFUVSxJQXJUVjtBQXNUQyxhQXRURCxFQXNUVSxJQXRUVjtBQXVUQyxhQXZURCxFQXVUVSxJQXZUVjtBQXdUQyxhQXhURCxFQXdUVSxJQXhUVjtBQXlUQyxhQXpURCxFQXlUVSxJQXpUVjtBQTBUQyxhQTFURCxFQTBUVSxJQTFUVjtBQTJUQyxhQTNURCxFQTJUVSxJQTNUVjtBQTRUQyxhQTVURCxFQTRUVSxJQTVUVjtBQTZUQyxhQTdURCxFQTZUVSxHQTdUVjtBQThUQyxhQTlURCxFQThUVSxJQTlUVjtBQStUQyxhQS9URCxFQStUVSxJQS9UVjtBQWdVQyxhQWhVRCxFQWdVVSxJQWhVVjtBQWlVQyxhQWpVRCxFQWlVVSxJQWpVVjtBQWtVQyxhQWxVRCxFQWtVVSxJQWxVVjtBQW1VQyxhQW5VRCxFQW1VVSxJQW5VVjtBQW9VQyxhQXBVRCxFQW9VVSxJQXBVVjtBQXFVQyxhQXJVRCxFQXFVVSxJQXJVVjtBQXNVQyxhQXRVRCxFQXNVVSxLQXRVVjtBQXVVQyxhQXZVRCxFQXVVVSxJQXZVVjtBQXdVQyxhQXhVRCxFQXdVVSxJQXhVVjtBQXlVQyxhQXpVRCxFQXlVVSxJQXpVVjtBQTBVQyxhQTFVRCxFQTBVVSxJQTFVVjtBQTJVQyxhQTNVRCxFQTJVVSxJQTNVVjtBQTRVQyxhQTVVRCxFQTRVVSxJQTVVVjtBQTZVQyxhQTdVRCxFQTZVVSxJQTdVVjtBQThVQyxhQTlVRCxFQThVVSxJQTlVVjtBQStVQyxhQS9VRCxFQStVVSxJQS9VVjtBQWdWQyxhQWhWRCxFQWdWVSxJQWhWVjtBQWlWQyxhQWpWRCxFQWlWVSxJQWpWVjtBQWtWQyxhQWxWRCxFQWtWVSxJQWxWVjtBQW1WQyxhQW5WRCxFQW1WVSxJQW5WVjtBQW9WQyxhQXBWRCxFQW9WVSxJQXBWVjtBQXFWQyxhQXJWRCxFQXFWVSxLQXJWVjtBQXNWQyxhQXRWRCxFQXNWVSxJQXRWVjtBQXVWQyxhQXZWRCxFQXVWVSxJQXZWVjtBQXdWQyxhQXhWRCxFQXdWVSxJQXhWVjtBQXlWQyxhQXpWRCxFQXlWVSxJQXpWVjtBQTBWQyxhQTFWRCxFQTBWVSxJQTFWVjtBQTJWQyxhQTNWRCxFQTJWVSxJQTNWVjtBQTRWQyxhQTVWRCxFQTRWVSxJQTVWVjtBQTZWQyxhQTdWRCxFQTZWVSxJQTdWVjtBQThWQyxhQTlWRCxFQThWVSxJQTlWVjtBQStWQyxhQS9WRCxFQStWVSxJQS9WVjtBQWdXQyxhQWhXRCxFQWdXVSxJQWhXVjtBQWlXQyxhQWpXRCxFQWlXVSxJQWpXVjtBQWtXQyxhQWxXRCxFQWtXVSxJQWxXVjtBQW1XQyxhQW5XRCxFQW1XVSxJQW5XVjtBQW9XQyxhQXBXRCxFQW9XVSxJQXBXVjtBQXFXQyxhQXJXRCxFQXFXVSxJQXJXVjtBQXNXQyxhQXRXRCxFQXNXVSxJQXRXVjtBQXVXQyxhQXZXRCxFQXVXVSxJQXZXVjtBQXdXQyxhQXhXRCxFQXdXVSxJQXhXVjtBQXlXQyxhQXpXRCxFQXlXVSxJQXpXVjtBQTBXQyxhQTFXRCxFQTBXVSxJQTFXVjtBQTJXQyxhQTNXRCxFQTJXVSxJQTNXVjtBQTRXQyxhQTVXRCxFQTRXVSxJQTVXVjtBQTZXQyxhQTdXRCxFQTZXVSxJQTdXVjtBQThXQyxhQTlXRCxFQThXVSxLQTlXVjtBQStXQyxhQS9X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QUFiOzs7QUFnNUJPLFNBQVMrUCxPQUFULENBQWlCbGYsR0FBakIsRUFBc0I7QUFDNUIsTUFBSXlULEdBQUcsR0FBR3NKLE1BQU0sQ0FBQ21CLGFBQVAsQ0FBcUJsZSxHQUFyQixDQUFWO0FBQ0EsU0FBT3lULEdBQUcsQ0FBQzRLLE1BQUosQ0FBVyxDQUFYLENBQVA7QUFDQSxDIiwiZmlsZSI6InBhZ2VzL3RhYmJhci9tYWlsL21haWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTkzKTtcbiIsImltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xyXG5cclxuY29uc3QgU1RBVF9WRVJTSU9OID0gdmVyc2lvbjtcclxuY29uc3QgU1RBVF9VUkwgPSAnaHR0cHM6Ly90b25namkuZGNsb3VkLmlvL3VuaS9zdGF0JztcclxuY29uc3QgU1RBVF9INV9VUkwgPSAnaHR0cHM6Ly90b25namkuZGNsb3VkLmlvL3VuaS9zdGF0LmdpZic7IFxyXG5jb25zdCBQQUdFX1BWRVJfVElNRSA9IDE4MDA7XHJcbmNvbnN0IEFQUF9QVkVSX1RJTUUgPSAzMDA7XHJcbmNvbnN0IE9QRVJBVElOR19USU1FID0gMTA7XHJcblxyXG5jb25zdCBVVUlEX0tFWSA9ICdfX0RDX1NUQVRfVVVJRCc7XHJcbmNvbnN0IFVVSURfVkFMVUUgPSAnX19EQ19VVUlEX1ZBTFVFJztcclxuXHJcbmZ1bmN0aW9uIGdldFV1aWQoKSB7XHJcbiAgbGV0IHV1aWQgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdXVpZCA9IHBsdXMucnVudGltZS5nZXREQ2xvdWRJZCgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB1dWlkID0gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXVpZFxyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIHV1aWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoVVVJRF9LRVkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHV1aWQgPSBVVUlEX1ZBTFVFO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF1dWlkKSB7XHJcbiAgICB1dWlkID0gRGF0ZS5ub3coKSArICcnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWU3KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhVVUlEX0tFWSwgdXVpZCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhVVUlEX0tFWSwgVVVJRF9WQUxVRSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB1dWlkO1xyXG59XHJcblxyXG5jb25zdCBnZXRTZ2luID0gKHN0YXREYXRhKSA9PiB7XHJcbiAgbGV0IGFyciA9IE9iamVjdC5rZXlzKHN0YXREYXRhKTtcclxuICBsZXQgc29ydEFyciA9IGFyci5zb3J0KCk7XHJcbiAgbGV0IHNnaW4gPSB7fTtcclxuICBsZXQgc2dpblN0ciA9ICcnO1xyXG4gIGZvciAodmFyIGkgaW4gc29ydEFycikge1xyXG4gICAgc2dpbltzb3J0QXJyW2ldXSA9IHN0YXREYXRhW3NvcnRBcnJbaV1dO1xyXG4gICAgc2dpblN0ciArPSBzb3J0QXJyW2ldICsgJz0nICsgc3RhdERhdGFbc29ydEFycltpXV0gKyAnJic7XHJcbiAgfVxyXG4gIC8vIGNvbnN0IG9wdGlvbnMgPSBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgLy8gc2dpblN0ciA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSkgKyAnJmtleT0nICsgU1RBVF9LRVk7XHJcbiAgLy8gY29uc3Qgc2kgPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JykudXBkYXRlKHNnaW5TdHIpLmRpZ2VzdCgnaGV4Jyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNpZ246ICcnLFxyXG4gICAgb3B0aW9uczogc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKVxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBnZXRTcGxpY2luZyA9IChkYXRhKSA9PiB7XHJcbiAgbGV0IHN0ciA9ICcnO1xyXG4gIGZvciAodmFyIGkgaW4gZGF0YSkge1xyXG4gICAgc3RyICs9IGkgKyAnPScgKyBkYXRhW2ldICsgJyYnO1xyXG4gIH1cclxuICByZXR1cm4gc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoIC0gMSlcclxufTtcclxuXHJcbmNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHBhcnNlSW50KG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQbGF0Zm9ybU5hbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1MaXN0ID0ge1xyXG4gICAgJ2FwcC1wbHVzJzogJ24nLFxyXG4gICAgJ2g1JzogJ2g1JyxcclxuICAgICdtcC13ZWl4aW4nOiAnd3gnLFxyXG4gICAgJ21wLWFsaXBheSc6ICdhbGknLFxyXG4gICAgJ21wLWJhaWR1JzogJ2JkJyxcclxuICAgICdtcC10b3V0aWFvJzogJ3R0JyxcclxuICAgICdtcC1xcSc6ICdxcSdcclxuICB9O1xyXG4gIHJldHVybiBwbGF0Zm9ybUxpc3RbcHJvY2Vzcy5lbnYuVlVFX0FQUF9QTEFURk9STV07XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWNrTmFtZSA9ICgpID0+IHtcclxuICBsZXQgcGFja05hbWUgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICd3eCcgfHwgZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdxcScpIHtcclxuICAgIC8vIOWFvOWuueW+ruS/oeWwj+eoi+W6j+S9jueJiOacrOWfuuehgOW6k1xyXG4gICAgaWYodW5pLmNhbklVc2UoJ2dldEFjY291bnRJbmZvU3luYycpKXtcclxuICAgICAgcGFja05hbWUgPSB1bmkuZ2V0QWNjb3VudEluZm9TeW5jKCkubWluaVByb2dyYW0uYXBwSWQgfHwgJyc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwYWNrTmFtZVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VmVyc2lvbiA9ICgpID0+IHtcclxuICByZXR1cm4gZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyA/IHBsdXMucnVudGltZS52ZXJzaW9uIDogJyc7XHJcbn07XHJcblxyXG5jb25zdCBnZXRDaGFubmVsID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTmFtZSA9IGdldFBsYXRmb3JtTmFtZSgpO1xyXG4gIGxldCBjaGFubmVsID0gJyc7XHJcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ24nKSB7XHJcbiAgICBjaGFubmVsID0gcGx1cy5ydW50aW1lLmNoYW5uZWw7XHJcbiAgfVxyXG4gIHJldHVybiBjaGFubmVsO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2NlbmUgPSAob3B0aW9ucykgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTmFtZSA9IGdldFBsYXRmb3JtTmFtZSgpO1xyXG4gIGxldCBzY2VuZSA9ICcnO1xyXG4gIGlmIChvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxuICB9XHJcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ3d4Jykge1xyXG4gICAgc2NlbmUgPSB1bmkuZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKS5zY2VuZTtcclxuICB9XHJcbiAgcmV0dXJuIHNjZW5lO1xyXG59O1xyXG5jb25zdCBGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSA9ICdGaXJzdF9fVmlzaXRfX1RpbWUnO1xyXG5jb25zdCBMYXN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0xhc3RfX1Zpc2l0X19UaW1lJztcclxuXHJcbmNvbnN0IGdldEZpcnN0VmlzaXRUaW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICB1bmkuc2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVksIHRpbWUpO1xyXG4gICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIH1cclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcbmNvbnN0IGdldExhc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICBsZXQgdGltZSA9IDA7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIHRpbWUgPSB0aW1lU3RvcmdlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aW1lID0gJyc7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZLCBnZXRUaW1lKCkpO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IFBBR0VfUkVTSURFTkNFX1RJTUUgPSAnX19wYWdlX19yZXNpZGVuY2VfX3RpbWUnO1xyXG5sZXQgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcbmxldCBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSAwO1xyXG5cclxuXHJcbmNvbnN0IHNldFBhZ2VSZXNpZGVuY2VUaW1lID0gKCkgPT4ge1xyXG4gIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhQQUdFX1JFU0lERU5DRV9USU1FLCBnZXRUaW1lKCkpO1xyXG4gIH1cclxuICByZXR1cm4gRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gZ2V0VGltZSgpO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gdW5pLmdldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUpO1xyXG4gIH1cclxuICByZXR1cm4gTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIC0gRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZVxyXG59O1xyXG5jb25zdCBUT1RBTF9fVklTSVRfX0NPVU5UID0gJ1RvdGFsX19WaXNpdF9fQ291bnQnO1xyXG5jb25zdCBnZXRUb3RhbFZpc2l0Q291bnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5UKTtcclxuICBsZXQgY291bnQgPSAxO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICBjb3VudCA9IHRpbWVTdG9yZ2U7XHJcbiAgICBjb3VudCsrO1xyXG4gIH1cclxuICB1bmkuc2V0U3RvcmFnZVN5bmMoVE9UQUxfX1ZJU0lUX19DT1VOVCwgY291bnQpO1xyXG4gIHJldHVybiBjb3VudDtcclxufTtcclxuXHJcbmNvbnN0IEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMgPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgZGF0YSA9IHt9O1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3RhdERhdGEpIHtcclxuICAgIGRhdGFbcHJvcF0gPSBlbmNvZGVVUklDb21wb25lbnQoc3RhdERhdGFbcHJvcF0pO1xyXG4gIH1cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmxldCBTZXRfX0ZpcnN0X19UaW1lID0gMDtcclxubGV0IFNldF9fTGFzdF9fVGltZSA9IDA7XHJcblxyXG5jb25zdCBnZXRGaXJzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0ZpcnN0X19UaW1lID0gdGltZTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSAwO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldExhc3RUaW1lID0gKCkgPT4ge1xyXG4gIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgU2V0X19MYXN0X19UaW1lID0gdGltZTtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBnZXRSZXNpZGVuY2VUaW1lID0gKHR5cGUpID0+IHtcclxuICBsZXQgcmVzaWRlbmNlVGltZSA9IDA7XHJcbiAgaWYgKFNldF9fRmlyc3RfX1RpbWUgIT09IDApIHtcclxuICAgIHJlc2lkZW5jZVRpbWUgPSBTZXRfX0xhc3RfX1RpbWUgLSBTZXRfX0ZpcnN0X19UaW1lO1xyXG4gIH1cclxuXHJcbiAgcmVzaWRlbmNlVGltZSA9IHBhcnNlSW50KHJlc2lkZW5jZVRpbWUgLyAxMDAwKTtcclxuICByZXNpZGVuY2VUaW1lID0gcmVzaWRlbmNlVGltZSA8IDEgPyAxIDogcmVzaWRlbmNlVGltZTtcclxuICBpZiAodHlwZSA9PT0gJ2FwcCcpIHtcclxuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBBUFBfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG4gIGlmICh0eXBlID09PSAncGFnZScpIHtcclxuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBQQUdFX1BWRVJfVElNRSA/IHRydWUgOiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc2lkZW5jZVRpbWUsXHJcbiAgICAgIG92ZXJ0aW1lXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc2lkZW5jZVRpbWVcclxuICB9O1xyXG5cclxufTtcclxuXHJcbmNvbnN0IGdldFJvdXRlID0gKCkgPT4ge1xyXG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgbGV0IF9zZWxmID0gcGFnZS4kdm07XHJcblxyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlKSB8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUm91dGUgPSAoc2VsZikgPT4ge1xyXG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgbGV0IF9zZWxmID0gcGFnZS4kdm07XHJcbiAgbGV0IHF1ZXJ5ID0gc2VsZi5fcXVlcnk7XHJcbiAgbGV0IHN0ciA9IHF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSA6ICcnO1xyXG4gIC8vIGNsZWFyXHJcbiAgc2VsZi5fcXVlcnkgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdiZCcpIHtcclxuICAgIHJldHVybiBfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2UuaXMgKyBzdHI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoX3NlbGYuJHNjb3BlICYmIF9zZWxmLiRzY29wZS5yb3V0ZSArIHN0ciApfHwgKF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5yb3V0ZSArIHN0cik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVR5cGVzID0gKHNlbGYpID0+IHtcclxuICBpZiAoc2VsZi5tcFR5cGUgPT09ICdwYWdlJyB8fCAoc2VsZi4kbXAgJiYgc2VsZi4kbXAubXBUeXBlID09PSAncGFnZScpIHx8IHNlbGYuJG9wdGlvbnMubXBUeXBlID09PSAncGFnZScpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5jb25zdCBjYWxpYnJhdGlvbiA9IChldmVudE5hbWUsIG9wdGlvbnMpID0+IHtcclxuICAvLyAgbG9naW4g44CBIHNoYXJlIOOAgXBheV9zdWNjZXNzIOOAgXBheV9mYWlsIOOAgXJlZ2lzdGVyIOOAgXRpdGxlXHJcbiAgaWYoIWV2ZW50TmFtZSl7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IOe8uuWwkSBbZXZlbnROYW1lXSDlj4LmlbBgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgZXZlbnROYW1lICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDnsbvlnotgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmIChldmVudE5hbWUubGVuZ3RoID4gMjU1KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbb3B0aW9uc10g5Y+C5pWw57G75Z6L6ZSZ6K+vLOWPquiDveS4uiBTdHJpbmcg5oiWIE9iamVjdCDnsbvlnotgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnICYmIG9wdGlvbnMubGVuZ3RoID4gMjU1KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDplb/luqbkuI3og73lpKfkuo4gMjU1YCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKGV2ZW50TmFtZSA9PT0gJ3RpdGxlJyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ3VuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw5Li6IHRpdGxlIOaXtu+8jFtvcHRpb25zXSDlj4LmlbDlj6rog73kuLogU3RyaW5nIOexu+WeiycpO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBQYWdlc0pzb24gPSByZXF1aXJlKCd1bmktcGFnZXM/e1widHlwZVwiOlwic3R5bGVcIn0nKS5kZWZhdWx0O1xyXG5jb25zdCBzdGF0Q29uZmlnID0gcmVxdWlyZSgndW5pLXN0YXQtY29uZmlnJykuZGVmYXVsdCB8fCByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKTtcclxuXHJcbmNvbnN0IHJlc3VsdE9wdGlvbnMgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHJcbmNsYXNzIFV0aWwge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zZWxmID0gJyc7XHJcbiAgICB0aGlzLl9yZXRyeSA9IDA7XHJcbiAgICB0aGlzLl9wbGF0Zm9ybSA9ICcnO1xyXG4gICAgdGhpcy5fcXVlcnkgPSB7fTtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZSA9IHtcclxuICAgICAgY29uZmlnOiAnJyxcclxuICAgICAgcGFnZTogJycsXHJcbiAgICAgIHJlcG9ydDogJycsXHJcbiAgICAgIGx0OiAnJ1xyXG4gICAgfTtcclxuICAgIHRoaXMuX29wZXJhdGluZ1RpbWUgPSAwO1xyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7XHJcbiAgICAgICcxJzogW10sXHJcbiAgICAgICcxMSc6IFtdXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fX3ByZXZlbnRfdHJpZ2dlcmluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSBmYWxzZTtcclxuICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSAnJztcclxuICAgIHRoaXMuc3RhdERhdGEgPSB7XHJcbiAgICAgIHV1aWQ6IGdldFV1aWQoKSxcclxuICAgICAgdXQ6IGdldFBsYXRmb3JtTmFtZSgpLFxyXG4gICAgICBtcG46IGdldFBhY2tOYW1lKCksXHJcbiAgICAgIGFrOiBzdGF0Q29uZmlnLmFwcGlkLFxyXG4gICAgICB1c3Y6IFNUQVRfVkVSU0lPTixcclxuICAgICAgdjogZ2V0VmVyc2lvbigpLFxyXG4gICAgICBjaDogZ2V0Q2hhbm5lbCgpLFxyXG4gICAgICBjbjogJycsXHJcbiAgICAgIHBuOiAnJyxcclxuICAgICAgY3Q6ICcnLFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHR0OiAnJyxcclxuICAgICAgcDogcmVzdWx0T3B0aW9ucy5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnID8gJ2EnIDogJ2knLFxyXG4gICAgICBicmFuZDogcmVzdWx0T3B0aW9ucy5icmFuZCB8fCAnJyxcclxuICAgICAgbWQ6IHJlc3VsdE9wdGlvbnMubW9kZWwsXHJcbiAgICAgIHN2OiByZXN1bHRPcHRpb25zLnN5c3RlbS5yZXBsYWNlKC8oQW5kcm9pZHxpT1MpXFxzLywgJycpLFxyXG4gICAgICBtcHNkazogcmVzdWx0T3B0aW9ucy5TREtWZXJzaW9uIHx8ICcnLFxyXG4gICAgICBtcHY6IHJlc3VsdE9wdGlvbnMudmVyc2lvbiB8fCAnJyxcclxuICAgICAgbGFuZzogcmVzdWx0T3B0aW9ucy5sYW5ndWFnZSxcclxuICAgICAgcHI6IHJlc3VsdE9wdGlvbnMucGl4ZWxSYXRpbyxcclxuICAgICAgd3c6IHJlc3VsdE9wdGlvbnMud2luZG93V2lkdGgsXHJcbiAgICAgIHdoOiByZXN1bHRPcHRpb25zLndpbmRvd0hlaWdodCxcclxuICAgICAgc3c6IHJlc3VsdE9wdGlvbnMuc2NyZWVuV2lkdGgsXHJcbiAgICAgIHNoOiByZXN1bHRPcHRpb25zLnNjcmVlbkhlaWdodFxyXG4gICAgfTtcclxuXHJcbiAgfVxyXG5cclxuICBfYXBwbGljYXRpb25TaG93KCkge1xyXG4gICAgaWYgKHRoaXMuX19saWNhdGlvbkhpZGUpIHtcclxuICAgICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ2FwcCcpO1xyXG4gICAgICBpZiAodGltZS5vdmVydGltZSkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICAgIHNjZW5lOiB0aGlzLnN0YXREYXRhLnNjXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfYXBwbGljYXRpb25IaWRlKHNlbGYsIHR5cGUpIHtcclxuXHJcbiAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gdHJ1ZTtcclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgpO1xyXG4gICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgICBjb25zdCByb3V0ZSA9IGdldFBhZ2VSb3V0ZSh0aGlzKTtcclxuICAgIHRoaXMuX3NlbmRIaWRlUmVxdWVzdCh7XHJcbiAgICAgIHVybHJlZjogcm91dGUsXHJcbiAgICAgIHVybHJlZl90czogdGltZS5yZXNpZGVuY2VUaW1lXHJcbiAgICB9LCB0eXBlKTtcclxuICB9XHJcblxyXG4gIF9wYWdlU2hvdygpIHtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgY29uc3Qgcm91dGVwYXRoID0gZ2V0Um91dGUoKTtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5jb25maWcgPSBQYWdlc0pzb24gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0udGl0bGVOVmlldyAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3LnRpdGxlVGV4dCB8fFxyXG4gICAgICBQYWdlc0pzb24gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0ubmF2aWdhdGlvbkJhclRpdGxlVGV4dCB8fCAnJztcclxuXHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uU2hvdykge1xyXG4gICAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygn6L+Z5pivIG9uTGF1Y2gg5LmL5ZCO5omn6KGM55qE56ys5LiA5qyhIHBhZ2VTaG93IO+8jOS4uuS4i+asoeiusOW9leaXtumXtOWBmuWHhuWkhycpO1xyXG4gICAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9IHJvdXRlO1xyXG4gICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ3BhZ2UnKTtcclxuICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIHBhdGg6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICB9XHJcblxyXG4gIF9wYWdlSGlkZSgpIHtcclxuICAgIGlmICghdGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgICB0aGlzLl9zZW5kUGFnZVJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWY6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZSA9IHtcclxuICAgICAgICBjb25maWc6ICcnLFxyXG4gICAgICAgIHBhZ2U6ICcnLFxyXG4gICAgICAgIHJlcG9ydDogJycsXHJcbiAgICAgICAgbHQ6ICcnXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9sb2dpbigpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXk6ICdsb2dpbidcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgX3NoYXJlKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ3NoYXJlJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIF9wYXltZW50KGtleSkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleVxyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIF9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKSB7XHJcblxyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzEnO1xyXG4gICAgbGV0IHF1ZXJ5ID0gb3B0aW9ucy5xdWVyeSAmJiBKU09OLnN0cmluZ2lmeShvcHRpb25zLnF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpIDogJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLmx0ID0gJzEnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS51cmwgPSAob3B0aW9ucy5wYXRoICsgcXVlcnkpIHx8ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50ID0gZ2V0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5zYyA9IGdldFNjZW5lKG9wdGlvbnMuc2NlbmUpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5mdnRzID0gZ2V0Rmlyc3RWaXNpdFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEubHZ0cyA9IGdldExhc3RWaXNpdFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEudHZjID0gZ2V0VG90YWxWaXNpdENvdW50KCk7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB0aGlzLmdldFByb3BlcnR5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdldE5ldHdvcmtJbmZvKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2VuZFBhZ2VSZXF1ZXN0KG9wdCkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJsLFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90c1xyXG4gICAgfSA9IG9wdDtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5sdCA9ICcxMSc7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcxMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHR0OiB0aGlzLnN0YXREYXRhLnR0LFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90cyxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgX3NlbmRIaWRlUmVxdWVzdChvcHQsIHR5cGUpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMycsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90cyxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMsIHR5cGUpO1xyXG4gIH1cclxuICBfc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICBrZXkgPSAnJyxcclxuICAgIHZhbHVlID0gXCJcIlxyXG4gIH0gPSB7fSkge1xyXG4gICAgY29uc3Qgcm91dGUgPSB0aGlzLl9sYXN0UGFnZVJvdXRlO1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMjEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJsOiByb3V0ZSxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIGVfbjoga2V5LFxyXG4gICAgICBlX3Y6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWUudG9TdHJpbmcoKSxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBnZXROZXR3b3JrSW5mbygpIHtcclxuICAgIHVuaS5nZXROZXR3b3JrVHlwZSh7XHJcbiAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXREYXRhLm5ldCA9IHJlc3VsdC5uZXR3b3JrVHlwZTtcclxuICAgICAgICB0aGlzLmdldExvY2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvcGVydHkoKSB7XHJcbiAgICBwbHVzLnJ1bnRpbWUuZ2V0UHJvcGVydHkocGx1cy5ydW50aW1lLmFwcGlkLCAod2d0aW5mbykgPT4ge1xyXG4gICAgICB0aGlzLnN0YXREYXRhLnYgPSB3Z3RpbmZvLnZlcnNpb24gfHwgJyc7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TG9jYXRpb24oKSB7XHJcbiAgICBpZiAoc3RhdENvbmZpZy5nZXRMb2NhdGlvbikge1xyXG4gICAgICB1bmkuZ2V0TG9jYXRpb24oe1xyXG4gICAgICAgIHR5cGU6ICd3Z3M4NCcsXHJcbiAgICAgICAgZ2VvY29kZTogdHJ1ZSxcclxuICAgICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LmFkZHJlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jbiA9IHJlc3VsdC5hZGRyZXNzLmNvdW50cnk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEucG4gPSByZXN1bHQuYWRkcmVzcy5wcm92aW5jZTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jdCA9IHJlc3VsdC5hZGRyZXNzLmNpdHk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSByZXN1bHQubGF0aXR1ZGU7XHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IHJlc3VsdC5sb25naXR1ZGU7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QodGhpcy5zdGF0RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEubGF0ID0gMDtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sbmcgPSAwO1xyXG4gICAgICB0aGlzLnJlcXVlc3QodGhpcy5zdGF0RGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0KGRhdGEsIHR5cGUpIHtcclxuICAgIGxldCB0aW1lID0gZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGU7XHJcbiAgICBkYXRhLnR0biA9IHRpdGxlLnBhZ2U7XHJcbiAgICBkYXRhLnR0cGogPSB0aXRsZS5jb25maWc7XHJcbiAgICBkYXRhLnR0YyA9IHRpdGxlLnJlcG9ydDtcclxuXHJcbiAgICBsZXQgcmVxdWVzdERhdGEgPSB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpIHx8IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXF1ZXN0RGF0YVtkYXRhLmx0XSkge1xyXG4gICAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XSA9IFtdO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdERhdGFbZGF0YS5sdF0ucHVzaChkYXRhKTtcclxuXHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJywgcmVxdWVzdERhdGEpO1xyXG4gICAgfVxyXG4gICAgaWYgKGdldFBhZ2VSZXNpZGVuY2VUaW1lKCkgPCBPUEVSQVRJTkdfVElNRSAmJiAhdHlwZSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCB1bmlTdGF0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pU3RhdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XHJcbiAgICB9XHJcbiAgICAvLyDml7bpl7TotoXov4fvvIzph43mlrDojrflj5bml7bpl7TmiLNcclxuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBsZXQgZmlyc3RBcnIgPSBbXTtcclxuICAgIGxldCBjb250ZW50QXJyID0gW107XHJcbiAgICBsZXQgbGFzdEFyciA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgaW4gdW5pU3RhdERhdGEpIHtcclxuICAgICAgY29uc3QgcmQgPSB1bmlTdGF0RGF0YVtpXTtcclxuICAgICAgcmQuZm9yRWFjaCgoZWxtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IGdldFNwbGljaW5nKGVsbSk7XHJcbiAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgIGZpcnN0QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSAzKSB7XHJcbiAgICAgICAgICBsYXN0QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnRlbnRBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcnN0QXJyLnB1c2goLi4uY29udGVudEFyciwgLi4ubGFzdEFycik7XHJcbiAgICBsZXQgb3B0aW9uc0RhdGEgPSB7XHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLCAvL+e7n+iuoSBTREsg54mI5pys5Y+3XHJcbiAgICAgIHQ6IHRpbWUsIC8v5Y+R6YCB6K+35rGC5pe255qE5pe26Ze05oiuXHJcbiAgICAgIHJlcXVlc3RzOiBKU09OLnN0cmluZ2lmeShmaXJzdEFyciksXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhID0ge307XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEudXQgPT09ICdoNScpIHtcclxuICAgICAgdGhpcy5pbWFnZVJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyAmJiB0aGlzLnN0YXREYXRhLnAgPT09ICdhJykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gIH1cclxuICBfc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpIHtcclxuICAgIHVuaS5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBTVEFUX1VSTCxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIC8vIGhlYWRlcjoge1xyXG4gICAgICAvLyAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLy8g6buY6K6k5YC8XHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIGRhdGE6IG9wdGlvbnNEYXRhLFxyXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnc3RhdCByZXF1ZXN0IHN1Y2Nlc3MnKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKCsrdGhpcy5fcmV0cnkgPCAzKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogaDUg6K+35rGCXHJcbiAgICovXHJcbiAgaW1hZ2VSZXF1ZXN0KGRhdGEpIHtcclxuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbGV0IG9wdGlvbnMgPSBnZXRTZ2luKEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMoZGF0YSkpLm9wdGlvbnM7XHJcbiAgICBpbWFnZS5zcmMgPSBTVEFUX0g1X1VSTCArICc/JyArIG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBzZW5kRXZlbnQoa2V5LCB2YWx1ZSkge1xyXG4gICAgLy8g5qCh6aqMIHR5cGUg5Y+C5pWwXHJcbiAgICBpZiAoY2FsaWJyYXRpb24oa2V5LCB2YWx1ZSkpIHJldHVyblxyXG5cclxuICAgIGlmIChrZXkgPT09ICd0aXRsZScpIHtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLnJlcG9ydCA9IHZhbHVlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXksXHJcbiAgICAgIHZhbHVlOiB0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlXHJcbiAgICB9LCAxKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBTdGF0IGV4dGVuZHMgVXRpbCB7XHJcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU3RhdCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgLy8g5rOo5YaM5oum5oiq5ZmoXHJcbiAgICBpZiAodHlwZW9mIHVuaS5hZGRJbnRlcmNlcHRvciA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICB0aGlzLmFkZEludGVyY2VwdG9ySW5pdCgpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdExvZ2luKCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0U2hhcmUodHJ1ZSk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEludGVyY2VwdG9ySW5pdCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignc2V0TmF2aWdhdGlvbkJhclRpdGxlJywge1xyXG4gICAgICBpbnZva2UoYXJncykge1xyXG4gICAgICAgIHNlbGYuX25hdmlnYXRpb25CYXJUaXRsZS5wYWdlID0gYXJncy50aXRsZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRMb2dpbigpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignbG9naW4nLCB7XHJcbiAgICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgIHNlbGYuX2xvZ2luKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0U2hhcmUodHlwZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKCF0eXBlKSB7XHJcbiAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzaGFyZScsIHtcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3JlcXVlc3RQYXltZW50Jywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3BheW1lbnQoJ3BheV9zdWNjZXNzJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X2ZhaWwnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXBvcnQob3B0aW9ucywgc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygncmVwb3J0IGluaXQnKTtcclxuICAgIC8vIH1cclxuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gdHJ1ZTtcclxuICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgbG9hZChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICBpZiAoIXNlbGYuJHNjb3BlICYmICFzZWxmLiRtcCkge1xyXG4gICAgICBjb25zdCBwYWdlID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgIHNlbGYuJHNjb3BlID0gcGFnZVtwYWdlLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIHRoaXMuX3F1ZXJ5ID0gb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNob3coc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgICAgdGhpcy5fcGFnZVNob3coc2VsZik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblNob3coc2VsZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWFkeShzZWxmKSB7XHJcbiAgICAvLyB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgLy8gICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIC8vIH1cclxuICB9XHJcbiAgaGlkZShzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlSGlkZShzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uSGlkZShzZWxmLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcbiAgZXJyb3IoZW0pIHtcclxuICAgIGlmICh0aGlzLl9wbGF0Zm9ybSA9PT0gJ2RldnRvb2xzJykge1xyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ+W9k+WJjei/kOihjOeOr+Wig+S4uuW8gOWPkeiAheW3peWFt++8jOS4jeS4iuaKpeaVsOaNruOAgicpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBlbVZhbCA9ICcnO1xyXG4gICAgaWYgKCFlbS5tZXNzYWdlKSB7XHJcbiAgICAgIGVtVmFsID0gSlNPTi5zdHJpbmdpZnkoZW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZW1WYWwgPSBlbS5zdGFjaztcclxuICAgIH1cclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzMxJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICBtcHNkazogdGhpcy5zdGF0RGF0YS5tcHNkayxcclxuICAgICAgbXB2OiB0aGlzLnN0YXREYXRhLm1wdixcclxuICAgICAgdjogdGhpcy5zdGF0RGF0YS52LFxyXG4gICAgICBlbTogZW1WYWwsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3RhdCA9IFN0YXQuZ2V0SW5zdGFuY2UoKTtcclxubGV0IGlzSGlkZSA9IGZhbHNlO1xyXG5jb25zdCBsaWZlY3ljbGUgPSB7XHJcbiAgb25MYXVuY2gob3B0aW9ucykge1xyXG4gICAgc3RhdC5yZXBvcnQob3B0aW9ucywgdGhpcyk7XHJcbiAgfSxcclxuICBvblJlYWR5KCkge1xyXG4gICAgc3RhdC5yZWFkeSh0aGlzKTtcclxuICB9LFxyXG4gIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICBzdGF0LmxvYWQob3B0aW9ucywgdGhpcyk7XHJcbiAgICAvLyDph43lhpnliIbkuqvvvIzojrflj5bliIbkuqvkuIrmiqXkuovku7ZcclxuICAgIGlmICh0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZSkge1xyXG4gICAgICBsZXQgb2xkU2hhcmVBcHBNZXNzYWdlID0gdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2U7XHJcbiAgICAgIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICAgIHN0YXQuaW50ZXJjZXB0U2hhcmUoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBvbGRTaGFyZUFwcE1lc3NhZ2UuY2FsbCh0aGlzLCBvcHRpb25zKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25TaG93KCkge1xyXG4gICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICBzdGF0LnNob3codGhpcyk7XHJcbiAgfSxcclxuICBvbkhpZGUoKSB7XHJcbiAgICBpc0hpZGUgPSB0cnVlO1xyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICBpZiAoaXNIaWRlKSB7XHJcbiAgICAgIGlzSGlkZSA9IGZhbHNlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHN0YXQuaGlkZSh0aGlzKTtcclxuICB9LFxyXG4gIG9uRXJyb3IoZSkge1xyXG4gICAgc3RhdC5lcnJvcihlKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgdW5pLnJlcG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMpIHt9O1xyXG4gIH1lbHNle1xyXG4gICAgY29uc3QgVnVlID0gcmVxdWlyZSgndnVlJyk7XHJcbiAgICAoVnVlLmRlZmF1bHQgfHwgVnVlKS5taXhpbihsaWZlY3ljbGUpO1xyXG4gICAgdW5pLnJlcG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMpIHtcclxuICAgICAgc3RhdC5zZW5kRXZlbnQodHlwZSwgb3B0aW9ucyk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxubWFpbigpO1xyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2ZyZWUtbmF2LWJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWQ2NTRmYzQmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mcmVlLW5hdi1iYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mcmVlLW5hdi1iYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjc2NjExYWQyXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIuWkqei1kC9UaWFuY2lXZWIvY29tcG9uZW50cy9mcmVlLXVpL2ZyZWUtbmF2LWJhci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJlZS1uYXYtYmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZDY1NGZjNCZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidmlld1wiLFxuICAgIFtcbiAgICAgIF9jKFwidmlld1wiLCB7IGNsYXNzOiBfdm0uZ2V0Q2xhc3MgfSwgW1xuICAgICAgICBfYyhcInZpZXdcIiwgeyBzdHlsZTogXCJoZWlnaHQ6XCIgKyBfdm0uc3RhdHVzQmFySGVpZ2h0ICsgXCJweFwiIH0pLFxuICAgICAgICBfdm0uc2hvd05hdlxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgIFwidy0xMDBcIixcbiAgICAgICAgICAgICAgICAgIFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgXCJhbGlnbi1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIFwianVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCI5MHJweFwiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJmbGV4XCIsIFwiYWxpZ24tY2VudGVyXCJdIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5zaG93QmFja1xuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJmcmVlLWljb24tYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJcXHVlNjQ1XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5iYWNrIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJmb250LW1kXCIsIFwibWwtM1wiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmdldFRpdGxlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5zaG93UmlnaHRcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiZmxleFwiLCBcImFsaWduLWNlbnRlclwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdChcInJpZ2h0XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmcmVlLWljb24tYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcIlxcdWU2MzZcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub3BlbkV4dGVuZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKSxcbiAgICAgIF92bS5maXhlZCA/IF9jKFwidmlld1wiLCB7IHN0eWxlOiBfdm0uZml4ZWRTdHlsZSB9KSA6IF92bS5fZSgpLFxuICAgICAgX3ZtLnNob3dSaWdodFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJmcmVlLXBvcHVwXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlZjogXCJleHRlbmRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBib2R5V2lkdGg6IDMyMCxcbiAgICAgICAgICAgICAgICBib2R5SGVpZ2h0OiAyMDUsXG4gICAgICAgICAgICAgICAgYm9keUJnQ29sb3I6IFwiYmctZGFya1wiLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogXCJyaWdodCB0b3BcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1wiZmxleFwiLCBcImZsZXgtY29sdW1uXCJdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMzIwcnB4XCIsIGhlaWdodDogXCIyMDVycHhcIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLm1lbnVzLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcImZsZXgtMVwiLCBcImZsZXhcIiwgXCJhbGlnbi1jZW50ZXJcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNsaWNrRXZlbnQoaXRlbS5ldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uZm9udFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicGwtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1tZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLmljb24pKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidS10ZXh0XCIsIHsgc3RhdGljQ2xhc3M6IFtcImZvbnQtbWRcIiwgXCJ0ZXh0LXdoaXRlXCJdIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJlZS1uYXYtYmFyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZyZWUtbmF2LWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXc+XHJcblx0XHQ8dmlldyA6Y2xhc3M9XCJnZXRDbGFzc1wiPlxyXG5cdFx0XHQ8IS0tIOeKtuaAgeagjyAtLT5cclxuXHRcdFx0PHZpZXcgOnN0eWxlPVwiJ2hlaWdodDonK3N0YXR1c0JhckhlaWdodCsncHgnXCI+PC92aWV3PlxyXG5cdFx0XHQ8IS0tIOWvvOiIqiAtLT5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ3LTEwMCBmbGV4IGFsaWduLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIiB2LWlmPVwic2hvd05hdlwiIHN0eWxlPVwiaGVpZ2h0OiA5MHJweDtcIj5cclxuXHRcdFx0XHQ8IS0tIOW3pui+uSAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyXCI+XHJcblx0XHRcdFx0XHQ8IS0tIOi/lOWbnuaMiemSriAtLT5cclxuXHRcdFx0XHRcdDxmcmVlLWljb24tYnV0dG9uIHYtaWY9XCJzaG93QmFja1wiIEBjbGljaz1cImJhY2tcIlxyXG5cdFx0XHRcdFx0Omljb249XCInXFx1ZTY0NSdcIj48L2ZyZWUtaWNvbi1idXR0b24+XHJcblx0XHRcdFx0XHQ8IS0tIOagh+mimCAtLT5cclxuXHRcdFx0XHRcdDx0ZXh0IHYtaWY9XCJ0aXRsZVwiIGNsYXNzPVwiZm9udC1tZCBtbC0zXCI+e3tnZXRUaXRsZX19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8IS0tIOWPs+i+uSAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyXCIgdi1pZj1cInNob3dSaWdodFwiPlxyXG5cdFx0XHRcdFx0PHNsb3QgbmFtZT1cInJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdDwhLS0gPGZyZWUtaWNvbi1idXR0b24gQGNsaWNrPVwic2VhcmNoXCIgXHJcblx0XHRcdFx0XHRcdDppY29uPVwiJ1xcdWU2MDcnXCI+PC9mcmVlLWljb24tYnV0dG9uPiAtLT5cclxuXHRcdFx0XHRcdFx0PGZyZWUtaWNvbi1idXR0b24gQGNsaWNrPVwib3BlbkV4dGVuZFwiXHJcblx0XHRcdFx0XHRcdDppY29uPVwiJ1xcdWU2MzYnXCI+PC9mcmVlLWljb24tYnV0dG9uPlxyXG5cdFx0XHRcdFx0PC9zbG90PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSDljaDkvY0gLS0+XHJcblx0XHQ8dmlldyB2LWlmPVwiZml4ZWRcIiA6c3R5bGU9XCJmaXhlZFN0eWxlXCI+PC92aWV3PlxyXG5cdFx0XHJcblx0XHQ8IS0tIOaJqeWxleiPnOWNlSAtLT5cclxuXHRcdDxmcmVlLXBvcHVwIHYtaWY9XCJzaG93UmlnaHRcIiByZWY9XCJleHRlbmRcIiA6Ym9keVdpZHRoPVwiMzIwXCIgOmJvZHlIZWlnaHQ9XCIyMDVcIlxyXG5cdFx0Ym9keUJnQ29sb3I9XCJiZy1kYXJrXCIgdHJhbnNmb3JtT3JpZ2luPVwicmlnaHQgdG9wXCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBmbGV4LWNvbHVtblwiIFxyXG5cdFx0XHRzdHlsZT1cIndpZHRoOiAzMjBycHg7aGVpZ2h0OiAyMDVycHg7XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4LTEgZmxleCBhbGlnbi1jZW50ZXJcIiBcclxuXHRcdFx0XHR2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBtZW51c1wiXHJcblx0XHRcdFx0OmtleT1cImluZGV4XCJcclxuXHRcdFx0XHRAY2xpY2s9XCJjbGlja0V2ZW50KGl0ZW0uZXZlbnQpXCI+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250IHBsLTMgcHItMiBmb250LW1kIHRleHQtd2hpdGVcIj57e2l0ZW0uaWNvbn19PC90ZXh0PlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJmb250LW1kIHRleHQtd2hpdGVcIj57e2l0ZW0ubmFtZX19PC90ZXh0PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC9mcmVlLXBvcHVwPlxyXG5cdFx0XHJcblx0XHRcclxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxyXG5cdGltcG9ydCBmcmVlSWNvbkJ1dHRvbiBmcm9tIFwiLi9mcmVlLWljb24tYnV0dG9uLnZ1ZVwiXHJcblx0aW1wb3J0IGZyZWVQb3B1cCBmcm9tIFwiLi9mcmVlLXBvcHVwLnZ1ZVwiXHJcblx0dmFyIF90aGlzO1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHNob3dCYWNrOntcclxuXHRcdFx0XHR0eXBlOkJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDpmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93TmF2OntcclxuXHRcdFx0XHR0eXBlOkJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDp0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdHRpdGxlOiB7XHJcblx0XHRcdFx0dHlwZTogW1N0cmluZyxCb29sZWFuXSxcclxuXHRcdFx0XHRkZWZhdWx0OmZhbHNlIFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmaXhlZDp7XHJcblx0XHRcdFx0dHlwZTpCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6dHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRub3JlYWRudW06e1xyXG5cdFx0XHRcdHR5cGU6TnVtYmVyLFxyXG5cdFx0XHRcdGRlZmF1bHQ6MFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRiZ0NvbG9yOntcclxuXHRcdFx0XHR0eXBlOlN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OlwiYmctbmF2XCJcclxuXHRcdFx0fSxcclxuXHRcdFx0c2hvd1JpZ2h0OntcclxuXHRcdFx0XHR0eXBlOkJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDp0cnVlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wb25lbnRzOntcclxuXHRcdFx0ZnJlZUljb25CdXR0b24sXHJcblx0XHRcdGZyZWVQb3B1cFxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0c3RhdHVzQmFySGVpZ2h0OjAsXHJcblx0XHRcdFx0bmF2QmFySGVpZ2h0OjAsXHJcblx0XHRcdFx0bWVudXM6W1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOlwi5Y+R6LW3576k6IGKXCIsXHJcblx0XHRcdFx0XHRcdGV2ZW50OlwiY3JlYXRlR3JvdXBcIixcclxuXHRcdFx0XHRcdFx0aWNvbjpcIlxcdWU2MDBcIlxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0bmFtZTpcIua3u+WKoOWFs+azqFwiLFxyXG5cdFx0XHRcdFx0XHRldmVudDpcImZvbGxvd1wiLFxyXG5cdFx0XHRcdFx0XHRpY29uOlwiXFx1ZTZhNVwiXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1vdW50ZWQoKSB7XHJcblx0XHRcdF90aGlzID0gdGhpcztcclxuXHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTLU5WVUVcclxuXHRcdFx0dGhpcy5zdGF0dXNCYXJIZWlnaHQgPSBwbHVzLm5hdmlnYXRvci5nZXRTdGF0dXNiYXJIZWlnaHQoKVxyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0dGhpcy5uYXZCYXJIZWlnaHQgPSB0aGlzLnN0YXR1c0JhckhlaWdodCArIHVuaS51cHgycHgoOTApXHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6IHtcclxuXHRcdFx0Zml4ZWRTdHlsZSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gYGhlaWdodDoke3RoaXMubmF2QmFySGVpZ2h0fXB4YFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRUaXRsZSgpe1xyXG5cdFx0XHRcdGxldCBub3JlYWRudW0gPSB0aGlzLm5vcmVhZG51bSA+IDAgPyAnKCcrdGhpcy5ub3JlYWRudW0rJyknIDogJydcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy50aXRsZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRDbGFzcygpe1xyXG5cdFx0XHRcdGxldCBmaXhlZCA9IHRoaXMuZml4ZWQ/J2ZpeGVkLXRvcCc6JydcclxuXHRcdFx0XHRyZXR1cm4gYCR7Zml4ZWR9ICR7dGhpcy5iZ0NvbG9yfWAgXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdG9wZW5FeHRlbmQoKSB7XHJcblx0XHRcdFx0dGhpcy4kcmVmcy5leHRlbmQuc2hvdyh1bmkudXB4MnB4KDQxNSksdW5pLnVweDJweCgxNTApKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbGlja0V2ZW50KGUpe1xyXG5cdFx0XHRcdHN3aXRjaCAoZSl7XHJcblx0XHRcdFx0XHRjYXNlICdjcmVhdGVHcm91cCc6XHJcblx0XHRcdFx0XHRcdF90aGlzLiRyZWZzLmV4dGVuZC5oaWRlKClcclxuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdHVybDonL3BhZ2VzL2dyb3VwL2FkZEdyb3VwL2FkZEdyb3VwJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdGNhc2UgJ2ZvbGxvdyc6XHJcblx0XHRcdFx0XHRcdF90aGlzLiRyZWZzLmV4dGVuZC5oaWRlKClcclxuXHRcdFx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0XHRcdHVybDonL3BhZ2VzL2ZyaWVuZC9hZGRGcmllbmQvYWRkRnJpZW5kJ1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOi/lOWbnlxyXG5cdFx0XHRiYWNrKCl7XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlQmFjayh7XHJcblx0XHRcdFx0XHRkZWx0YTogMVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG48L3N0eWxlPlxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9mcmVlLWljb24tYnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZjVjNjViYiZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ZyZWUtaWNvbi1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mcmVlLWljb24tYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIFxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCI1NmVhOWJiNFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCLlpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWljb24tYnV0dG9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIlxuICAgICAgICBpbXBvcnQgJ0BkY2xvdWRpby91bmktc3RhdCc7XG4gICAgICAgIGltcG9ydCAndW5pLWFwcC1zdHlsZSdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL3RhYmJhci9tYWlsL21haWwubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvdGFiYmFyL21haWwvbWFpbCdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9tYWlsLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTBhYTlkNTAmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21haWwubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9tYWlsLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL21haWwubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL21haWwubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiZjZiYzYzNmNcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwi5aSp6LWQL1RpYW5jaVdlYi9wYWdlcy90YWJiYXIvbWFpbC9tYWlsLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFpbC5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWEwYWE5ZDUwJm1wVHlwZT1wYWdlXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInNjcm9sbC12aWV3XCIsXG4gICAge1xuICAgICAgc3RhdGljU3R5bGU6IHsgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9LFxuICAgICAgYXR0cnM6IHsgc2Nyb2xsWTogdHJ1ZSwgZW5hYmxlQmFja1RvVG9wOiB0cnVlLCBidWJibGU6IFwidHJ1ZVwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInZpZXdcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZnJlZS1uYXYtYmFyXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwi6YCa6K6v5b2VXCIgfSB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic2Nyb2xsLXZpZXdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3R5bGU6IFwiaGVpZ2h0OlwiICsgX3ZtLnNjcm9sbEhlaWdodCArIFwicHg7XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNjcm9sbFk6IFwidHJ1ZVwiLCBzY3JvbGxJbnRvVmlldzogX3ZtLnNjcm9sbEludG8gfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS50b3BMaXN0LCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImZyZWUtbGlzdC1pdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogaXRlbS50aXRsZSwgY292ZXI6IGl0ZW0uY292ZXIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uRXZlbnRIYW5kbGUoaXRlbS5ldmVudClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmxpc3QsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAgICB7IGtleTogaW5kZXgsIGF0dHJzOiB7IGlkOiBcIml0ZW0tXCIgKyBpdGVtLmxldHRlciB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uZGF0YS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInB5LTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicHgtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItYm90dG9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJnLWxpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJmb250LW1kXCIsIFwidGV4dC1kYXJrXCJdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLmxldHRlcikpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChpdGVtLmRhdGEsIGZ1bmN0aW9uKGl0ZW0yLCBpbmRleDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJmcmVlLWxpc3QtaXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4MixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtMi5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb3ZlcjogaXRlbTIucGhvdG9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0yLnBob3RvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIi9zdGF0aWMvaW1hZ2VzL3VzZXJwaWMuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdvQ2hhdChpdGVtMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgIFwicG9zaXRpb24tZml4ZWRcIixcbiAgICAgICAgICAgICAgICBcInJpZ2h0LTBcIixcbiAgICAgICAgICAgICAgICBcImJvdHRvbS0wXCIsXG4gICAgICAgICAgICAgICAgXCJiZy1saWdodFwiLFxuICAgICAgICAgICAgICAgIFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIFwiZmxleC1jb2x1bW5cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI1MHJweFwiIH0sXG4gICAgICAgICAgICAgIHN0eWxlOiBcInRvcDpcIiArIF92bS50b3AgKyBcInB4O1wiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIHRvdWNoc3RhcnQ6IF92bS50b3VjaHN0YXJ0LFxuICAgICAgICAgICAgICAgIHRvdWNobW92ZTogX3ZtLnRvdWNobW92ZSxcbiAgICAgICAgICAgICAgICB0b3VjaGVuZDogX3ZtLnRvdWNoZW5kXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmxpc3QsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJmbGV4LTFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYWxpZ24tY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwianVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiZm9udC1zbVwiLCBcInRleHQtbXV0ZWRcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0ubGV0dGVyKSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5jdXJyZW50XG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgIFwicG9zaXRpb24tZml4ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgXCJyb3VuZGVkLWNpcmNsZVwiLFxuICAgICAgICAgICAgICAgICAgICBcImJnLWxpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFsaWduLWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBcImp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxNTBycHhcIixcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjE1MHJweFwiLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiBcIjMwMHJweFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgc3R5bGU6IFwidG9wOlwiICsgX3ZtLm1vZGFsVG9wICsgXCJweDtcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiZm9udC1sZ1wiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmN1cnJlbnQpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYWlsLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21haWwubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIiwiPHRlbXBsYXRlPlxuXHQ8dmlldz5cblx0XHRcclxuXHRcdDwhLS0g5a+86Iiq5qCPIC0tPlxyXG5cdFx0PGZyZWUtbmF2LWJhciB0aXRsZT1cIumAmuiur+W9lVwiPjwvZnJlZS1uYXYtYmFyPlxyXG5cdFx0XHJcblx0XHRcclxuXHRcdDwhLS0g6YCa6K6v5b2V5YiX6KGoIC0tPlxyXG5cdFx0PHNjcm9sbC12aWV3IHNjcm9sbC15PVwidHJ1ZVwiIDpzdHlsZT1cIidoZWlnaHQ6JytzY3JvbGxIZWlnaHQrJ3B4OydcIlxyXG5cdFx0OnNjcm9sbC1pbnRvLXZpZXc9XCJzY3JvbGxJbnRvXCI+XHJcblx0XHRcdDxmcmVlLWxpc3QtaXRlbSB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiB0b3BMaXN0XCIgOmtleT1cImluZGV4XCJcclxuXHRcdFx0OnRpdGxlPVwiaXRlbS50aXRsZVwiIDpjb3Zlcj1cIml0ZW0uY292ZXJcIiBAY2xpY2s9XCJFdmVudEhhbmRsZShpdGVtLmV2ZW50KVwiPjwvZnJlZS1saXN0LWl0ZW0+XHJcblx0XHRcdFxyXG5cdFx0XHQ8IS0tIDx2aWV3IGNsYXNzPVwibm9Db252ZXJzYXRpb25cIiB2LXNob3c9XCJpc051bGxcIj5cclxuXHRcdFx0XHQ8dmlldz5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnQgdGV4dC1ncmF5IHRleHQtY2VudGVyXCIgc3R5bGU9XCJmb250LXNpemU6IDIwMHJweDtcIj4mI3hlNjYyOzwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXc+XHJcblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIiBmb250LW1kIHRleHQtZ3JheSB0ZXh0LWNlbnRlclwiPuaaguaXoOWFs+azqOWlveWPizwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDwvdmlldz4gLS0+XHJcblx0XHRcdFxyXG5cdFx0XHQ8dmlldyB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBsaXN0XCIgOmtleT1cImluZGV4XCJcclxuXHRcdFx0OmlkPVwiJ2l0ZW0tJytpdGVtLmxldHRlclwiPlxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJpdGVtLmRhdGEubGVuZ3RoXCIgXHJcblx0XHRcdFx0Y2xhc3M9XCJweS0yIHB4LTMgYm9yZGVyLWJvdHRvbSBiZy1saWdodFwiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJmb250LW1kIHRleHQtZGFya1wiPnt7aXRlbS5sZXR0ZXJ9fTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PGZyZWUtbGlzdC1pdGVtICB2LWZvcj1cIihpdGVtMixpbmRleDIpIGluIGl0ZW0uZGF0YVwiIFxyXG5cdFx0XHRcdDprZXk9XCJpbmRleDJcIiA6dGl0bGU9XCJpdGVtMi5uYW1lXCIgXHJcblx0XHRcdFx0OmNvdmVyPVwiaXRlbTIucGhvdG8/aXRlbTIucGhvdG86Jy9zdGF0aWMvaW1hZ2VzL3VzZXJwaWMuanBnJ1wiIEBjbGljaz1cImdvQ2hhdChpdGVtMilcIj48L2ZyZWUtbGlzdC1pdGVtPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0XHJcblx0XHQ8IS0tIOS+p+i+ueWvvOiIquadoSAtLT5cclxuXHRcdDx2aWV3IGNsYXNzPVwicG9zaXRpb24tZml4ZWQgcmlnaHQtMCBib3R0b20tMCBiZy1saWdodCBmbGV4IGZsZXgtY29sdW1uXCIgOnN0eWxlPVwiJ3RvcDonK3RvcCsncHg7J1wiIHN0eWxlPVwid2lkdGg6IDUwcnB4O1wiIEB0b3VjaHN0YXJ0PVwidG91Y2hzdGFydFwiIEB0b3VjaG1vdmU9XCJ0b3VjaG1vdmVcIiBAdG91Y2hlbmQ9XCJ0b3VjaGVuZFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgtMSBmbGV4IGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXHJcblx0XHRcdHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGxpc3RcIiA6a2V5PVwiaW5kZXhcIj5cclxuXHRcdFx0XHQ8dGV4dCBjbGFzcz1cImZvbnQtc20gdGV4dC1tdXRlZFwiPnt7aXRlbS5sZXR0ZXJ9fTwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHRcdDx2aWV3IGNsYXNzPVwicG9zaXRpb24tZml4ZWQgcm91bmRlZC1jaXJjbGUgYmctbGlnaHQgYm9yZGVyIGZsZXggYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyXCIgdi1pZj1cImN1cnJlbnRcIlxyXG5cdFx0c3R5bGU9XCJ3aWR0aDogMTUwcnB4O2hlaWdodDogMTUwcnB4O2xlZnQ6IDMwMHJweDtcIlxyXG5cdFx0OnN0eWxlPVwiJ3RvcDonK21vZGFsVG9wKydweDsnXCI+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwiZm9udC1sZ1wiPnt7Y3VycmVudH19PC90ZXh0PlxyXG5cdFx0PC92aWV3PlxyXG5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHRpbXBvcnQgZnJlZU5hdkJhciBmcm9tIFwiQC9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1uYXYtYmFyLnZ1ZVwiXHJcblx0aW1wb3J0IGZyZWVMaXN0SXRlbSBmcm9tIFwiQC9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1saXN0LWl0ZW0udnVlXCJcclxuXHRpbXBvcnQge2luaXRpYWx9IGZyb20gXCJAL2pzX3Nkay9jaGluZXNlQ29udmVyc2lvbi5qc1wiXHJcblx0XHJcblx0dmFyIFNFUlZFUl9BUEkgPSBnZXRBcHAoKS5nbG9iYWxEYXRhLlNFUlZFUl9BUEk7XHJcblx0dmFyIF90aGlzO1xuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdGZyZWVOYXZCYXIsXHJcblx0XHRcdGZyZWVMaXN0SXRlbVxyXG5cdFx0fSxcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dG9wTGlzdDpbXHJcblx0XHRcdFx0XHQvLyB7XHJcblx0XHRcdFx0XHQvLyBcdHRpdGxlOlwi5paw55qE5pyL5Y+LXCIsXHJcblx0XHRcdFx0XHQvLyBcdGNvdmVyOlwiL3N0YXRpYy9pbWFnZXMvbWFpbC9mcmllbmQucG5nXCIsXHJcblx0XHRcdFx0XHQvLyBcdGV2ZW50OlwiXCJcclxuXHRcdFx0XHRcdC8vIH0sXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdHRpdGxlOlwi576k6IGKXCIsXHJcblx0XHRcdFx0XHRcdGNvdmVyOlwiL3N0YXRpYy9pbWFnZXMvbWFpbC9ncm91cC5wbmdcIixcclxuXHRcdFx0XHRcdFx0ZXZlbnQ6XCJnb0dyb3VwTGlzdFwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Ly8ge1xyXG5cdFx0XHRcdFx0Ly8gXHR0aXRsZTpcIuagh+etvlwiLFxyXG5cdFx0XHRcdFx0Ly8gXHRjb3ZlcjpcIi9zdGF0aWMvaW1hZ2VzL21haWwvdGFnLnBuZ1wiLFxyXG5cdFx0XHRcdFx0Ly8gXHRldmVudDpcIlwiXHJcblx0XHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRsaXN0OiBbXSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0b3A6MCxcclxuXHRcdFx0XHRzY3JvbGxIZWlnaHQ6MCxcclxuXHRcdFx0XHRzY3JvbGxJbnRvOicnLFxyXG5cdFx0XHRcdGN1cnJlbnQ6JycsXHJcblx0XHRcdFx0aXNOdWxsOmZhbHNlXG5cdFx0XHR9XG5cdFx0fSxcclxuXHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0X3RoaXM9dGhpcztcclxuXHRcdFx0bGV0IHJlcyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpXHJcblx0XHRcdHRoaXMudG9wID0gcmVzLnN0YXR1c0JhckhlaWdodCArIHVuaS51cHgycHgoOTApXHJcblx0XHRcdHRoaXMuc2Nyb2xsSGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodCAtIHRoaXMudG9wIC0gNTBcclxuXHRcdH0sXHJcblx0XHRvblNob3coKXtcdFxyXG5cdFx0XHRjb25zb2xlLmxvZyhfdGhpcy5pc051bGwpXHJcblx0XHRcdF90aGlzLmxpc3Q9W107XHJcblx0XHRcdGZvcih2YXIgaT0wO2k8MjY7aSsrKXtcclxuXHRcdFx0XHR2YXIgb2JqID0ge1xyXG5cdFx0XHRcdFx0bGV0dGVyOlN0cmluZy5mcm9tQ2hhckNvZGUoNjUraSksXHJcblx0XHRcdFx0XHRkYXRhOltdXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdF90aGlzLmxpc3QucHVzaChvYmopO1xyXG5cdFx0XHR9XHJcblx0XHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0XHR1cmw6U0VSVkVSX0FQSStcImFwcFVzZXIvY29udGFjdFwiLFxyXG5cdFx0XHRcdGhlYWRlcjp7XHJcblx0XHRcdFx0XHRcInRva2VuXCI6dW5pLmdldFN0b3JhZ2VTeW5jKFwic2V0VXNlckRhdGFcIikudG9rZW5cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG1ldGhvZDpcIlBPU1RcIixcclxuXHRcdFx0XHRzdWNjZXNzKHJlcyl7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpXHJcblx0XHRcdFx0XHR2YXIgcmVzdWx0ID0gcmVzLmRhdGEucmVzdWx0O1xyXG5cdFx0XHRcdFx0dmFyIGxlbiA9IHJlc3VsdC5sZW5ndGhcclxuXHRcdFx0XHRcdGlmKGxlbj09MCl7XHJcblx0XHRcdFx0XHRcdF90aGlzLmlzTnVsbD10cnVlXHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0X3RoaXMuaXNOdWxsPWZhbHNlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRmb3IodmFyIGk9MDtpPGxlbjtpKyspe1xyXG5cdFx0XHRcdFx0XHRsZXQgbGV0dGVyID0gaW5pdGlhbChyZXN1bHRbaV0ubmFtZSlcclxuXHRcdFx0XHRcdFx0bGV0IGluZGV4ID0gbGV0dGVyLmNoYXJDb2RlQXQoKS02NTtcclxuXHRcdFx0XHRcdFx0X3RoaXMubGlzdFtpbmRleF0uZGF0YS5wdXNoKHJlc3VsdFtpXSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHRtb2RhbFRvcCgpe1xyXG5cdFx0XHRcdHJldHVybiAodGhpcy5zY3JvbGxIZWlnaHQgLSB1bmkudXB4MnB4KDE1MCkpIC8gMlxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmr4/kuKrntKLlvJXnmoTpq5jluqZcclxuXHRcdFx0aXRlbUhlaWdodCgpIHtcclxuXHRcdFx0XHRsZXQgY291bnQgPSB0aGlzLmxpc3QubGVuZ3RoXHJcblx0XHRcdFx0aWYoY291bnQgPCAxKXtcclxuXHRcdFx0XHRcdHJldHVybiAwXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLnNjcm9sbEhlaWdodCAvICBjb3VudFxyXG5cdFx0XHR9XHJcblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0RXZlbnRIYW5kbGUoZSl7XHJcblx0XHRcdFx0aWYoZT09XCJnb0dyb3VwTGlzdFwiKXtcclxuXHRcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdFx0dXJsOlwiLi4vLi4vZ3JvdXAvZ3JvdXBMaXN0L2dyb3VwTGlzdFwiXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Z29DaGF0KGUpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpXHJcblx0XHRcdFx0dmFyIHVzZXJuYW1lID0gZS50b2tlbjtcclxuXHRcdFx0XHR2YXIgbmlja25hbWUgPSBlLm5hbWU7XHJcblx0XHRcdFx0dmFyIGF2YXRhciA9IGUucGhvdG87XHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiBgL3BhZ2VzL2NoYXQvY2hhdC9jaGF0P3VzZXJuYW1lPSR7dXNlcm5hbWV9Jm5pY2tuYW1lPSR7bmlja25hbWV9JmF2YXRhcj0ke2F2YXRhcn1gLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpICAgIFxyXG5cdFx0XHR9LFxuXHRcdFx0dG91Y2hzdGFydChlKXtcclxuXHRcdFx0XHR0aGlzLmNoYW5nZVNjcm9sbEludG8oZSlcclxuXHRcdFx0fSxcclxuXHRcdFx0dG91Y2htb3ZlKGUpe1xyXG5cdFx0XHRcdHRoaXMuY2hhbmdlU2Nyb2xsSW50byhlKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b3VjaGVuZChlKXtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnQgPSAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDogZTliqhcclxuXHRcdFx0Y2hhbmdlU2Nyb2xsSW50byhlKXtcclxuXHRcdFx0XHRsZXQgWSA9IGUudG91Y2hlc1swXS5wYWdlWVxyXG5cdFx0XHRcdC8vICNpZmRlZiBNUFxyXG5cdFx0XHRcdFkgPSBZIC0gdGhpcy50b3BcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRsZXQgaW5kZXggPSBNYXRoLmZsb29yKFkgLyB0aGlzLml0ZW1IZWlnaHQpXHJcblx0XHRcdFx0bGV0IGl0ZW0gPSB0aGlzLmxpc3RbaW5kZXhdXHJcblx0XHRcdFx0aWYoaXRlbSl7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRoaXMuc2Nyb2xsSW50byA9ICdpdGVtLScraXRlbS5sZXR0ZXJcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudCA9IGl0ZW0ubGV0dGVyXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHQubm9Db252ZXJzYXRpb257XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0aGVpZ2h0OiA1MDBycHg7XHJcblx0XHRtYXJnaW4tdG9wOiAxMDBycHg7XHJcblx0fVxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFpbC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYWlsLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiIiwiZnVuY3Rpb24gaW5pdFVuaSgpIHtcclxuXHJcbiAgICB2YXIgaXNGbiA9IGZ1bmN0aW9uIGlzRm4odikge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ2Z1bmN0aW9uJztcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGhhbmRsZVByb21pc2UgPSBmdW5jdGlvbiBoYW5kbGVQcm9taXNlKHByb21pc2UpIHtcclxuICAgICAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtudWxsLCBkYXRhXTtcclxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtlcnJdO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgUkVHRVggPSAvXlxcJHxeb258XmNyZWF0ZXxTeW5jJHxNYW5hZ2VyJHxecGF1c2UvO1xyXG4gICAgdmFyIEFQSV9OT1JNQUxfTElTVCA9IFsnb3MnLCAnZ2V0Q3VycmVudFN1Yk5WdWUnLCAnZ2V0U3ViTlZ1ZUJ5SWQnLCAnc3RvcFJlY29yZCcsICdzdG9wVm9pY2UnLFxyXG4gICAgICAgICdzdG9wQmFja2dyb3VuZEF1ZGlvJywgJ3N0b3BQdWxsRG93blJlZnJlc2gnLCAnaGlkZUtleWJvYXJkJywgJ2hpZGVUb2FzdCcsICdoaWRlTG9hZGluZycsXHJcbiAgICAgICAgJ3Nob3dOYXZpZ2F0aW9uQmFyTG9hZGluZycsICdoaWRlTmF2aWdhdGlvbkJhckxvYWRpbmcnLCAnY2FuSVVzZScsICduYXZpZ2F0ZUJhY2snLCAnY2xvc2VTb2NrZXQnLFxyXG4gICAgICAgICdwYWdlU2Nyb2xsVG8nLCAnZHJhd0NhbnZhcydcclxuICAgIF07XHJcblxyXG4gICAgdmFyIHNob3VsZFByb21pc2UgPSBmdW5jdGlvbiBzaG91bGRQcm9taXNlKG5hbWUpIHtcclxuICAgICAgICBpZiAoUkVHRVgudGVzdChuYW1lKSAmJiBuYW1lICE9PSAnY3JlYXRlQkxFQ29ubmVjdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAofkFQSV9OT1JNQUxfTElTVC5pbmRleE9mKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBwcm9taXNpZnkgPSBmdW5jdGlvbiBwcm9taXNpZnkoYXBpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzRm4ob3B0aW9ucy5zdWNjZXNzKSB8fCBpc0ZuKG9wdGlvbnMuZmFpbCkgfHwgaXNGbihvcHRpb25zLmNvbXBsZXRlKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaS5hcHBseSh1bmRlZmluZWQsIFtvcHRpb25zXS5jb25jYXQocGFyYW1zKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZVByb21pc2UobmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBhcGkuYXBwbHkodW5kZWZpbmVkLCBbT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlc29sdmUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogcmVqZWN0XHJcbiAgICAgICAgICAgICAgICB9KV0uY29uY2F0KHBhcmFtcykpO1xyXG4gICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tZXh0ZW5kLW5hdGl2ZSAqL1xyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihyZWFzb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgcmVhc29uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25NZXNzYWdlQ2FsbGJhY2tzID0gW107XHJcblxyXG4gICAgdmFyIG9yaWdpbiA9IHZvaWQgMDtcclxuXHJcbiAgICBmdW5jdGlvbiBvblN1Yk5WdWVNZXNzYWdlKGRhdGEpIHtcclxuICAgICAgICBvbk1lc3NhZ2VDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luOiBvcmlnaW4sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciB3ZWJ2aWV3SWQgPSB3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQ7XHJcblxyXG4gICAgdmFyIGNoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbCgnVU5JLUFQUC1TVUJOVlVFJyk7XHJcbiAgICBjaGFubmVsLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmRhdGEudG8gPT09IHdlYnZpZXdJZCkge1xyXG4gICAgICAgICAgICBvblN1Yk5WdWVNZXNzYWdlKGV2ZW50LmRhdGEuZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiB3cmFwcGVyKHdlYnZpZXcpIHtcclxuICAgICAgICB3ZWJ2aWV3LiRwcm9jZXNzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB2YXIgY3VycmVudFdlYnZpZXdJZCA9IHdlZXhQbHVzLndlYnZpZXcuY3VycmVudFdlYnZpZXcoKS5pZDtcclxuICAgICAgICB2YXIgaXNQb3B1cE5WdWUgPSBjdXJyZW50V2Vidmlld0lkID09PSB3ZWJ2aWV3LmlkO1xyXG5cclxuICAgICAgICB2YXIgaG9zdE5WdWVJZCA9IHdlYnZpZXcuX191bmlhcHBfb3JpZ2luX3R5cGUgPT09ICd1bmlOVmlldycgJiYgd2Vidmlldy5fX3VuaWFwcF9vcmlnaW5faWQ7XHJcbiAgICAgICAgdmFyIHBvcHVwTlZ1ZUlkID0gd2Vidmlldy5pZDtcclxuXHJcbiAgICAgICAgd2Vidmlldy5wb3N0TWVzc2FnZSA9IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGhvc3ROVnVlSWQpIHtcclxuICAgICAgICAgICAgICAgIGNoYW5uZWwucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdG86IGlzUG9wdXBOVnVlID8gaG9zdE5WdWVJZCA6IHBvcHVwTlZ1ZUlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnVW5pQXBwU3ViTlZ1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcub25NZXNzYWdlID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgb25NZXNzYWdlQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghd2Vidmlldy5fX3VuaWFwcF9tYXNrX2lkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3JpZ2luID0gd2Vidmlldy5fX3VuaWFwcF9ob3N0O1xyXG5cclxuICAgICAgICB2YXIgbWFza0NvbG9yID0gd2Vidmlldy5fX3VuaWFwcF9tYXNrO1xyXG5cclxuICAgICAgICB2YXIgbWFza1dlYnZpZXcgPSB3ZWV4UGx1cy53ZWJ2aWV3LmdldFdlYnZpZXdCeUlkKHdlYnZpZXcuX191bmlhcHBfbWFza19pZCk7XHJcbiAgICAgICAgbWFza1dlYnZpZXcgPSBtYXNrV2Vidmlldy5wYXJlbnQoKSB8fCBtYXNrV2VidmlldzsvL+WGjeasoeajgOa1i+eItlxyXG4gICAgICAgIHZhciBvbGRTaG93ID0gd2Vidmlldy5zaG93O1xyXG4gICAgICAgIHZhciBvbGRIaWRlID0gd2Vidmlldy5oaWRlO1xyXG4gICAgICAgIHZhciBvbGRDbG9zZSA9IHdlYnZpZXcuY2xvc2U7XHJcblxyXG4gICAgICAgIHZhciBzaG93TWFzayA9IGZ1bmN0aW9uIHNob3dNYXNrKCkge1xyXG4gICAgICAgICAgICBtYXNrV2Vidmlldy5zZXRTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiBtYXNrQ29sb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgY2xvc2VNYXNrID0gZnVuY3Rpb24gY2xvc2VNYXNrKCkge1xyXG4gICAgICAgICAgICBtYXNrV2Vidmlldy5zZXRTdHlsZSh7XHJcbiAgICAgICAgICAgICAgICBtYXNrOiAnbm9uZSdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LnNob3cgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2hvd01hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkU2hvdy5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuaGlkZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZU1hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRIaWRlLmFwcGx5KHdlYnZpZXcsIGFyZ3MpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5jbG9zZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjbG9zZU1hc2soKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvbGRDbG9zZS5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN1Yk5WdWVCeUlkKGlkKSB7XHJcbiAgICAgICAgdmFyIHdlYnZpZXcgPSB3ZWV4UGx1cy53ZWJ2aWV3LmdldFdlYnZpZXdCeUlkKGlkKTtcclxuICAgICAgICBpZiAod2VidmlldyAmJiAhd2Vidmlldy4kcHJvY2Vzc2VkKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXIod2Vidmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB3ZWJ2aWV3O1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRTdWJOVnVlKCkge1xyXG4gICAgICAgIHJldHVybiBnZXRTdWJOVnVlQnlJZCh3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBwbHVzID0gd2VleC5yZXF1aXJlTW9kdWxlKCdwbHVzJyk7XHJcbiAgICB2YXIgZ2xvYmFsRXZlbnQgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2dsb2JhbEV2ZW50Jyk7XHJcblxyXG4gICAgdmFyIGlkID0gMDtcclxuICAgIHZhciBjYWxsYmFja3MgPSB7fTtcclxuXHJcbiAgICB2YXIgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCA9ICdfX3VuaWFwcF9fc2VydmljZSc7XHJcblxyXG4gICAgZ2xvYmFsRXZlbnQuYWRkRXZlbnRMaXN0ZW5lcigncGx1c01lc3NhZ2UnLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwSnNBcGknKSB7XHJcbiAgICAgICAgICAgIGludm9rZShlLmRhdGEuaWQsIGUuZGF0YS5kYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnVW5pQXBwU3ViTlZ1ZScpIHtcclxuICAgICAgICAgICAgb25TdWJOVnVlTWVzc2FnZShlLmRhdGEuZGF0YSwgZS5kYXRhLm9wdGlvbnMpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCcpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoZS5kYXRhLnR5cGUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrKGUuZGF0YS5kYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBjcmVhdGVDYWxsYmFjayA9IGZ1bmN0aW9uIGNyZWF0ZUNhbGxiYWNrKGFyZ3MsIHR5cGUpIHtcclxuICAgICAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiBjYWxsYmFjayhyZXMpIHtcclxuICAgICAgICAgICAgaWYgKGlzRm4oYXJncykpIHtcclxuICAgICAgICAgICAgICAgIGFyZ3MocmVzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAofnJlcy5lcnJNc2cuaW5kZXhPZignOm9rJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGFyZ3Muc3VjY2VzcykgJiYgYXJncy5zdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKH5yZXMuZXJyTXNnLmluZGV4T2YoJzpmYWlsJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGFyZ3MuZmFpbCkgJiYgYXJncy5mYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGFyZ3MuY29tcGxldGUpICYmIGFyZ3MuY29tcGxldGUocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGlzRm4oYXJncykgfHwgYXJncyAmJiBpc0ZuKGFyZ3MuY2FsbGJhY2spKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrLmtlZXBBbGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjYWxsYmFjaztcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGludm9rZSA9IGZ1bmN0aW9uIGludm9rZShjYWxsYmFja0lkLCBkYXRhKSB7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2FsbGJhY2tzW2NhbGxiYWNrSWRdO1xyXG4gICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhkYXRhKTtcclxuICAgICAgICAgICAgaWYgKCFjYWxsYmFjay5rZWVwQWxpdmUpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWxsYmFja3NbY2FsbGJhY2tJZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdjYWxsYmFja1snICsgY2FsbGJhY2tJZCArICddIGlzIHVuZGVmaW5lZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHB1Ymxpc2ggPSBmdW5jdGlvbiBwdWJsaXNoKF9yZWYpIHtcclxuICAgICAgICB2YXIgaWQgPSBfcmVmLmlkLFxyXG4gICAgICAgICAgICB0eXBlID0gX3JlZi50eXBlLFxyXG4gICAgICAgICAgICBwYXJhbXMgPSBfcmVmLnBhcmFtcztcclxuXHJcbiAgICAgICAgY2FsbGJhY2tzW2lkXSA9IGNyZWF0ZUNhbGxiYWNrKHBhcmFtcywgdHlwZSk7XHJcbiAgICAgICAgcGx1cy5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgICAgICB9LCBVTklBUFBfU0VSVklDRV9OVlVFX0lEKTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcG9zdE1lc3NhZ2UoZGF0YSkge1xyXG4gICAgICAgIHBsdXMucG9zdE1lc3NhZ2UoZGF0YSwgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNyZWF0ZVB1Ymxpc2ggPSBmdW5jdGlvbiBjcmVhdGVQdWJsaXNoKG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24oYXJncykge1xyXG4gICAgICAgICAgICBwdWJsaXNoKHtcclxuICAgICAgICAgICAgICAgIGlkOiBpZCsrLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogbmFtZSxcclxuICAgICAgICAgICAgICAgIHBhcmFtczogYXJnc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuICAgIHZhciBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayA9IHZvaWQgMDtcclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZXF1aXJlTmF0aXZlUGx1Z2luKHBsdWdpbk5hbWUpIHtcclxuICAgICAgICByZXR1cm4gd2VleC5yZXF1aXJlTW9kdWxlKHBsdWdpbk5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBkb20gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGxvYWRGb250RmFjZShfcmVmKSB7XHJcbiAgICAgICAgdmFyIGZhbWlseSA9IF9yZWYuZmFtaWx5LFxyXG4gICAgICAgICAgICBzb3VyY2UgPSBfcmVmLnNvdXJjZSxcclxuICAgICAgICAgICAgZGVzYyA9IF9yZWYuZGVzYyxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBkb20uYWRkUnVsZSgnZm9udEZhY2UnLCB7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IGZhbWlseSxcclxuICAgICAgICAgICAgc3JjOiBzb3VyY2UucmVwbGFjZSgvXCIvZywgJ1xcJycpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgZXJyTXNnOiAnbG9hZEZvbnRGYWNlOm9rJyxcclxuICAgICAgICAgICAgc3RhdHVzOiAnbG9hZGVkJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ2xvYmFsRXZlbnQkMSA9IHdlZXgucmVxdWlyZU1vZHVsZSgnZ2xvYmFsRXZlbnQnKTtcclxuXHJcbiAgICB2YXIgY2FsbGJhY2tzJDEgPSBbXTtcclxuXHJcbiAgICBnbG9iYWxFdmVudCQxLmFkZEV2ZW50TGlzdGVuZXIoJ3BsdXNNZXNzYWdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcFJlYWR5Jykge1xyXG4gICAgICAgICAgICByZWFkeS5pc1VuaUFwcFJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrcyQxLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMSA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gcmVhZHkoY2FsbGJhY2spIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVW5pQXBwUmVhZHkpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFja3MkMS5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XHJcbiAgICB9IDogZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID9cclxuICAgICAgICAgICAgXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBzdHJlYW0gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3N0cmVhbScpO1xyXG5cclxuICAgIC8vIGxldCByZXF1ZXN0VGFza0lkID0gMFxyXG5cclxuICAgIHZhciBNRVRIT0RfR0VUID0gJ0dFVCc7XHJcbiAgICB2YXIgTUVUSE9EX1BPU1QgPSAnUE9TVCc7XHJcbiAgICB2YXIgQ09OVEVOVF9UWVBFX0pTT04gPSAnYXBwbGljYXRpb24vanNvbic7XHJcbiAgICB2YXIgQ09OVEVOVF9UWVBFX0ZPUk0gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJztcclxuXHJcbiAgICB2YXIgc2VyaWFsaXplID0gZnVuY3Rpb24gc2VyaWFsaXplKGRhdGEpIHtcclxuICAgICAgICB2YXIgbWV0aG9kID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBNRVRIT0RfR0VUO1xyXG4gICAgICAgIHZhciBjb250ZW50VHlwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDogQ09OVEVOVF9UWVBFX0ZPUk07XHJcblxyXG4gICAgICAgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgaWYgKG1ldGhvZC50b1VwcGVyQ2FzZSgpID09PSBNRVRIT0RfUE9TVCAmJiBjb250ZW50VHlwZS50b0xvd2VyQ2FzZSgpID09PSBDT05URU5UX1RZUEVfSlNPTikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKGRhdGEpLm1hcChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtrZXldKTtcclxuICAgICAgICAgICAgICAgIH0pLmpvaW4oJyYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcmVxdWVzdChfcmVmKSB7XHJcbiAgICAgICAgdmFyIHVybCA9IF9yZWYudXJsLFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXIgPSBfcmVmLmhlYWRlcixcclxuICAgICAgICAgICAgX3JlZiRtZXRob2QgPSBfcmVmLm1ldGhvZCxcclxuICAgICAgICAgICAgbWV0aG9kID0gX3JlZiRtZXRob2QgPT09IHVuZGVmaW5lZCA/ICdHRVQnIDogX3JlZiRtZXRob2QsXHJcbiAgICAgICAgICAgIF9yZWYkZGF0YVR5cGUgPSBfcmVmLmRhdGFUeXBlLFxyXG4gICAgICAgICAgICBkYXRhVHlwZSA9IF9yZWYkZGF0YVR5cGUgPT09IHVuZGVmaW5lZCA/ICdqc29uJyA6IF9yZWYkZGF0YVR5cGUsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZSA9IF9yZWYucmVzcG9uc2VUeXBlLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIC8vIHJlcXVlc3RUYXNrSWQrK1xyXG4gICAgICAgIHZhciBhYm9ydGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciBoYXNDb250ZW50VHlwZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBoZWFkZXJzID0ge307XHJcbiAgICAgICAgaWYgKGhlYWRlcikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBuYW1lIGluIGhlYWRlcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNDb250ZW50VHlwZSAmJiBuYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzQ29udGVudFR5cGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gaGVhZGVyW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzW25hbWVdID0gaGVhZGVyW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXRob2QgPT09IE1FVEhPRF9HRVQgJiYgZGF0YSkge1xyXG4gICAgICAgICAgICB1cmwgPSB1cmwgKyAofnVybC5pbmRleE9mKCc/JykgPyB1cmwuc3Vic3RyKC0xKSA9PT0gJyYnIHx8IHVybC5zdWJzdHIoLTEpID09PSAnPycgPyAnJyA6ICcmJyA6ICc/JykgK1xyXG4gICAgICAgICAgICAgICAgc2VyaWFsaXplKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdHJlYW0uZmV0Y2goe1xyXG4gICAgICAgICAgICB1cmw6IHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICAgICAgICAgIHR5cGU6IGRhdGFUeXBlID09PSAnanNvbicgPyAnanNvbicgOiAndGV4dCcsXHJcbiAgICAgICAgICAgIGJvZHk6IG1ldGhvZCAhPT0gTUVUSE9EX0dFVCA/IHNlcmlhbGl6ZShkYXRhLCBtZXRob2QsIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSA6ICcnXHJcbiAgICAgICAgfSwgZnVuY3Rpb24oX3JlZjIpIHtcclxuICAgICAgICAgICAgdmFyIHN0YXR1cyA9IF9yZWYyLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgIG9rID0gX3JlZjIub2ssXHJcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0ID0gX3JlZjIuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgIGRhdGEgPSBfcmVmMi5kYXRhLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVycyA9IF9yZWYyLmhlYWRlcnM7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmV0ID0ge307XHJcbiAgICAgICAgICAgIGlmICghc3RhdHVzIHx8IHN0YXR1cyA9PT0gLTEgfHwgYWJvcnRlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdyZXF1ZXN0OmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICByZXQuc3RhdHVzQ29kZSA9IHN0YXR1cztcclxuICAgICAgICAgICAgICAgIHJldC5oZWFkZXIgPSBoZWFkZXJzO1xyXG4gICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmV0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gYWJvcnQoKSB7XHJcbiAgICAgICAgICAgICAgICBhYm9ydGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHN0b3JhZ2UgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ3BsdXNzdG9yYWdlJyk7XHJcbiAgICB2YXIgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFID0gJ19fVFlQRSc7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0U3RvcmFnZShfcmVmKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZi5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZi5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UuZ2V0SXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUsIGZ1bmN0aW9uKHJldCkge1xyXG4gICAgICAgICAgICBpZiAocmV0LnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGF0YVR5cGUgPSByZXQuZGF0YTtcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2UuZ2V0SXRlbShrZXksIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgJiYgcmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGUgIT09ICdTdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gSlNPTi5wYXJzZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdnZXRTdG9yYWdlOm9rJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiByZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXQuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZXRTdG9yYWdlKF9yZWYyKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWYyLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYyLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMi5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjIuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgdmFyIGRhdGFUeXBlID0gJ1N0cmluZyc7XHJcbiAgICAgICAgaWYgKCh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoZGF0YSkpID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBkYXRhVHlwZSA9ICdPYmplY3QnO1xyXG4gICAgICAgICAgICBkYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0b3JhZ2Uuc2V0SXRlbShrZXksIGRhdGEsIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLnNldEl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFLCBkYXRhVHlwZSwgZnVuY3Rpb24ocmV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAnc2V0U3RvcmFnZTpvaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmV0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlU3RvcmFnZShfcmVmMykge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmMy5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmMy5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjMuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYzLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjMuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShrZXksIGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ3JlbW92ZVN0b3JhZ2U6b2snXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAncmVtb3ZlU3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJTdG9yYWdlKF9yZWY0KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IF9yZWY0LmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWY0LmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmNC5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjQuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmNC5jb21wbGV0ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2xpcGJvYXJkID0gd2VleC5yZXF1aXJlTW9kdWxlKCdjbGlwYm9hcmQnKTtcclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDbGlwYm9hcmREYXRhKF9yZWYpIHtcclxuICAgICAgICB2YXIgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBjbGlwYm9hcmQuZ2V0U3RyaW5nKGZ1bmN0aW9uKF9yZWYyKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gX3JlZjIuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBlcnJNc2c6ICdnZXRDbGlwYm9hcmREYXRhOm9rJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0Q2xpcGJvYXJkRGF0YShfcmVmMykge1xyXG4gICAgICAgIHZhciBkYXRhID0gX3JlZjMuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYzLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMy5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYzLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICBlcnJNc2c6ICdzZXRDbGlwYm9hcmREYXRhOm9rJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY2xpcGJvYXJkLnNldFN0cmluZyhkYXRhKTtcclxuICAgICAgICBpc0ZuKHN1Y2Nlc3MpICYmIHN1Y2Nlc3MocmVzKTtcclxuICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBnZXRFbWl0dGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBnZXRVbmlFbWl0dGVyID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbiAgICAgICAgICAgIHJldHVybiBnZXRVbmlFbWl0dGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgRW1pdHRlciA9IHtcclxuICAgICAgICAgICAgJG9uOiBmdW5jdGlvbiAkb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb24gZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRvZmY6IGZ1bmN0aW9uICRvZmYoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb2ZmIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkb25jZTogZnVuY3Rpb24gJG9uY2UoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VuaS4kb25jZSBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJGVtaXQ6IGZ1bmN0aW9uICRlbWl0KCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJGVtaXQgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBnZXRVbmlFbWl0dGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gRW1pdHRlcjtcclxuICAgICAgICB9O1xyXG4gICAgfSgpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFwcGx5KGN0eCwgbWV0aG9kLCBhcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIGN0eFttZXRob2RdLmFwcGx5KGN0eCwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJG9uKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb24nLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvZmYoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvZmYnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb25jZScsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gJGVtaXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRlbWl0JywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHZhciBhcGkgPSAvKiNfX1BVUkVfXyovIE9iamVjdC5mcmVlemUoe1xyXG4gICAgICAgIGxvYWRGb250RmFjZTogbG9hZEZvbnRGYWNlLFxyXG4gICAgICAgIHJlYWR5OiByZWFkeSxcclxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgIGdldFN0b3JhZ2U6IGdldFN0b3JhZ2UsXHJcbiAgICAgICAgc2V0U3RvcmFnZTogc2V0U3RvcmFnZSxcclxuICAgICAgICByZW1vdmVTdG9yYWdlOiByZW1vdmVTdG9yYWdlLFxyXG4gICAgICAgIGNsZWFyU3RvcmFnZTogY2xlYXJTdG9yYWdlLFxyXG4gICAgICAgIGdldENsaXBib2FyZERhdGE6IGdldENsaXBib2FyZERhdGEsXHJcbiAgICAgICAgc2V0Q2xpcGJvYXJkRGF0YTogc2V0Q2xpcGJvYXJkRGF0YSxcclxuICAgICAgICBvblN1Yk5WdWVNZXNzYWdlOiBvblN1Yk5WdWVNZXNzYWdlLFxyXG4gICAgICAgIGdldFN1Yk5WdWVCeUlkOiBnZXRTdWJOVnVlQnlJZCxcclxuICAgICAgICBnZXRDdXJyZW50U3ViTlZ1ZTogZ2V0Q3VycmVudFN1Yk5WdWUsXHJcbiAgICAgICAgJG9uOiAkb24sXHJcbiAgICAgICAgJG9mZjogJG9mZixcclxuICAgICAgICAkb25jZTogJG9uY2UsXHJcbiAgICAgICAgJGVtaXQ6ICRlbWl0XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgdmFyIHd4ID0ge1xyXG4gICAgICAgIHVwbG9hZEZpbGU6IHRydWUsXHJcbiAgICAgICAgZG93bmxvYWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIGNob29zZUltYWdlOiB0cnVlLFxyXG4gICAgICAgIHByZXZpZXdJbWFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRJbWFnZUluZm86IHRydWUsXHJcbiAgICAgICAgc2F2ZUltYWdlVG9QaG90b3NBbGJ1bTogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VWaWRlbzogdHJ1ZSxcclxuICAgICAgICBzYXZlVmlkZW9Ub1Bob3Rvc0FsYnVtOiB0cnVlLFxyXG4gICAgICAgIHNhdmVGaWxlOiB0cnVlLFxyXG4gICAgICAgIGdldFNhdmVkRmlsZUxpc3Q6IHRydWUsXHJcbiAgICAgICAgZ2V0U2F2ZWRGaWxlSW5mbzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVTYXZlZEZpbGU6IHRydWUsXHJcbiAgICAgICAgb3BlbkRvY3VtZW50OiB0cnVlLFxyXG4gICAgICAgIHNldFN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0U3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRTdG9yYWdlSW5mbzogdHJ1ZSxcclxuICAgICAgICByZW1vdmVTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGNsZWFyU3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBnZXRMb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VMb2NhdGlvbjogdHJ1ZSxcclxuICAgICAgICBvcGVuTG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgZ2V0U3lzdGVtSW5mbzogdHJ1ZSxcclxuICAgICAgICBnZXROZXR3b3JrVHlwZTogdHJ1ZSxcclxuICAgICAgICBtYWtlUGhvbmVDYWxsOiB0cnVlLFxyXG4gICAgICAgIHNjYW5Db2RlOiB0cnVlLFxyXG4gICAgICAgIHNldFNjcmVlbkJyaWdodG5lc3M6IHRydWUsXHJcbiAgICAgICAgZ2V0U2NyZWVuQnJpZ2h0bmVzczogdHJ1ZSxcclxuICAgICAgICBzZXRLZWVwU2NyZWVuT246IHRydWUsXHJcbiAgICAgICAgdmlicmF0ZUxvbmc6IHRydWUsXHJcbiAgICAgICAgdmlicmF0ZVNob3J0OiB0cnVlLFxyXG4gICAgICAgIGFkZFBob25lQ29udGFjdDogdHJ1ZSxcclxuICAgICAgICBzaG93VG9hc3Q6IHRydWUsXHJcbiAgICAgICAgc2hvd0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgaGlkZVRvYXN0OiB0cnVlLFxyXG4gICAgICAgIGhpZGVMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIHNob3dNb2RhbDogdHJ1ZSxcclxuICAgICAgICBzaG93QWN0aW9uU2hlZXQ6IHRydWUsXHJcbiAgICAgICAgc2V0TmF2aWdhdGlvbkJhclRpdGxlOiB0cnVlLFxyXG4gICAgICAgIHNldE5hdmlnYXRpb25CYXJDb2xvcjogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0ZVRvOiB0cnVlLFxyXG4gICAgICAgIHJlZGlyZWN0VG86IHRydWUsXHJcbiAgICAgICAgcmVMYXVuY2g6IHRydWUsXHJcbiAgICAgICAgc3dpdGNoVGFiOiB0cnVlLFxyXG4gICAgICAgIG5hdmlnYXRlQmFjazogdHJ1ZSxcclxuICAgICAgICBnZXRQcm92aWRlcjogdHJ1ZSxcclxuICAgICAgICBsb2dpbjogdHJ1ZSxcclxuICAgICAgICBnZXRVc2VySW5mbzogdHJ1ZSxcclxuICAgICAgICBzaGFyZTogdHJ1ZSxcclxuICAgICAgICByZXF1ZXN0UGF5bWVudDogdHJ1ZSxcclxuICAgICAgICBzdWJzY3JpYmVQdXNoOiB0cnVlLFxyXG4gICAgICAgIHVuc3Vic2NyaWJlUHVzaDogdHJ1ZSxcclxuICAgICAgICBvblB1c2g6IHRydWUsXHJcbiAgICAgICAgb2ZmUHVzaDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgYmFzZVVuaSA9IHtcclxuICAgICAgICBvczoge1xyXG4gICAgICAgICAgICBudnVlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgdW5pID0ge307XHJcblxyXG4gICAgaWYgKHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB1bmkgPSBuZXcgUHJveHkoe30sIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQodGFyZ2V0LCBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29zJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG52dWU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdwb3N0TWVzc2FnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcG9zdE1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ3JlcXVpcmVOYXRpdmVQbHVnaW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVpcmVOYXRpdmVQbHVnaW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBtZXRob2QgPSBhcGlbbmFtZV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIW1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9IGNyZWF0ZVB1Ymxpc2gobmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkUHJvbWlzZShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNpZnkobWV0aG9kKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXRob2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoYmFzZVVuaSkuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcclxuICAgICAgICAgICAgdW5pW2tleV0gPSBiYXNlVW5pW2tleV07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHVuaS5wb3N0TWVzc2FnZSA9IHBvc3RNZXNzYWdlO1xyXG5cclxuICAgICAgICB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbiA9IHJlcXVpcmVOYXRpdmVQbHVnaW47XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJCdXR0b25UYXAgPSBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXA7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQ7XHJcblxyXG4gICAgICAgIHVuaS5vbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkO1xyXG5cclxuICAgICAgICBPYmplY3Qua2V5cyh3eCkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBhcGlbbmFtZV07XHJcbiAgICAgICAgICAgIGlmICghbWV0aG9kKSB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2QgPSBjcmVhdGVQdWJsaXNoKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzaG91bGRQcm9taXNlKG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB1bmlbbmFtZV0gPSBwcm9taXNpZnkobWV0aG9kKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVuaVtuYW1lXSA9IG1ldGhvZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuaTtcclxufVxyXG5cclxudmFyIGNyZWF0ZVVuaTtcclxuXHJcbmlmICh0eXBlb2YgZ2V0VW5pID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICBjcmVhdGVVbmkgPSBnZXRVbmk7XHJcbn0gZWxzZSB7XHJcbiAgICBjcmVhdGVVbmkgPSBpbml0VW5pO1xyXG59XHJcbnZhciB3ZWV4UGx1cyA9IG5ldyBXZWV4UGx1cyh3ZWV4KTtcclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVW5pKHdlZXgsIHdlZXhQbHVzLCBCcm9hZGNhc3RDaGFubmVsKTtcclxuZXhwb3J0IHtcclxuICAgIHdlZXhQbHVzXHJcbn07XHJcbiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLnJlY3ljbGUuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mcmVlLWljb24tYnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZjVjNjViYiZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIm5vQ29udmVyc2F0aW9uXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNzUwcnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI1MDBycHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjEwMHJweFwiXG4gIH1cbn0iLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogW1wiZmxleFwiLCBcImFsaWduLWNlbnRlclwiLCBcImp1c3RpZnktY2VudGVyXCJdLFxuICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjkwcnB4XCIsIHdpZHRoOiBcIjkwcnB4XCIgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uJGVtaXQoXCJjbGlja1wiKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiaWNvbmZvbnRcIiwgXCJmb250LW1kXCJdLCBjbGFzczogX3ZtLmljb25DbGFzcyB9LFxuICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uaWNvbikpXVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mcmVlLWljb24tYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZyZWUtaWNvbi1idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiBcclxuIEBjbGljaz1cIiRlbWl0KCdjbGljaycpXCJcclxuXHRzdHlsZT1cImhlaWdodDogOTBycHg7d2lkdGg6IDkwcnB4O1wiPlxyXG5cdFx0PHRleHQgY2xhc3M9XCJpY29uZm9udCBmb250LW1kXCIgOmNsYXNzPVwiaWNvbkNsYXNzXCI+e3tpY29ufX08L3RleHQ+XHJcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRpY29uOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHRcdH0sXHJcblx0XHRcdGljb25DbGFzczoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuPC9zdHlsZT5cbiIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlLCAvKiB2dWUtY2xpIG9ubHkgKi9cbiAgY29tcG9uZW50cywgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICByZW5kZXJqcyAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgaWYgKGNvbXBvbmVudHMpIHtcbiAgICBvcHRpb25zLmNvbXBvbmVudHMgPSBPYmplY3QuYXNzaWduKGNvbXBvbmVudHMsIG9wdGlvbnMuY29tcG9uZW50cyB8fCB7fSlcbiAgfVxuICAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbiAgaWYgKHJlbmRlcmpzKSB7XG4gICAgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSB8fCAocmVuZGVyanMuYmVmb3JlQ3JlYXRlID0gW10pKS51bnNoaWZ0KGZ1bmN0aW9uKCkge1xuICAgICAgdGhpc1tyZW5kZXJqcy5fX21vZHVsZV0gPSB0aGlzXG4gICAgfSk7XG4gICAgKG9wdGlvbnMubWl4aW5zIHx8IChvcHRpb25zLm1peGlucyA9IFtdKSkucHVzaChyZW5kZXJqcylcbiAgfVxuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9mcmVlLXBvcHVwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kZWU1M2JiZSZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2ZyZWUtcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mcmVlLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2ZyZWUtcG9wdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGVlNTNiYmUmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2ZyZWUtcG9wdXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGVlNTNiYmUmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZGVlNTNiYmVcIixcbiAgXCI2NDk1YzZkYVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCLlpKnotZAvVGlhbmNpV2ViL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLXBvcHVwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLnJlY3ljbGUuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mcmVlLXBvcHVwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kZWU1M2JiZSZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5zdGF0dXNcbiAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgekluZGV4OiBcIjk5OTlcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIgfSB9LCBbXG4gICAgICAgIF92bS5tYXNrXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXG4gICAgICAgICAgICAgICAgXCJwb3NpdGlvbi1maXhlZFwiLFxuICAgICAgICAgICAgICAgIFwidG9wLTBcIixcbiAgICAgICAgICAgICAgICBcImxlZnQtMFwiLFxuICAgICAgICAgICAgICAgIFwicmlnaHQtMFwiLFxuICAgICAgICAgICAgICAgIFwiYm90dG9tLTBcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdHlsZTogX3ZtLmdldE1hc2tDb2xvcixcbiAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5oaWRlIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZWY6IFwicG9wdXBcIixcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJwb3NpdGlvbi1maXhlZFwiLCBcImZyZWUtYW5pbWF0ZWRcIl0sXG4gICAgICAgICAgICBjbGFzczogX3ZtLmdldEJvZHlDbGFzcyxcbiAgICAgICAgICAgIHN0eWxlOiBfdm0uZ2V0Qm9keVN0eWxlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgICAgICAgMlxuICAgICAgICApXG4gICAgICBdKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJlZS1wb3B1cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mcmVlLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IHN0eWxlPVwiei1pbmRleDo5OTk5O292ZXJmbG93OmhpZGRlbjtcIiB2LWlmPVwic3RhdHVzXCI+XHJcblx0XHQ8IS0tIOiSmeeJiCAtLT5cclxuXHRcdDxkaXYgdi1pZj1cIm1hc2tcIiBjbGFzcz1cInBvc2l0aW9uLWZpeGVkIHRvcC0wIGxlZnQtMCByaWdodC0wIGJvdHRvbS0wXCJcclxuXHRcdDpzdHlsZT1cImdldE1hc2tDb2xvclwiIEBjbGljaz1cImhpZGVcIj48L2Rpdj5cclxuXHRcdDwhLS0g5by55Ye65qGG5YaF5a65IC0tPlxyXG5cdFx0PGRpdiByZWY9XCJwb3B1cFwiIGNsYXNzPVwicG9zaXRpb24tZml4ZWQgZnJlZS1hbmltYXRlZFwiIDpjbGFzcz1cImdldEJvZHlDbGFzc1wiIDpzdHlsZT1cImdldEJvZHlTdHlsZVwiPlxyXG5cdFx0XHQ8c2xvdD48L3Nsb3Q+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XHJcblx0Ly8gI2lmZGVmIEFQUC1QTFVTLU5WVUVcclxuXHRjb25zdCBhbmltYXRpb24gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2FuaW1hdGlvbicpXHJcblx0Ly8gI2VuZGlmXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0Ly8g5piv5ZCm5byA5ZCv6JKZ54mI6aKc6ImyXHJcblx0XHRcdG1hc2tDb2xvcjoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5piv5ZCm5byA5ZCv6JKZ54mIXHJcblx0XHRcdG1hc2s6e1xyXG5cdFx0XHRcdHR5cGU6Qm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OnRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5piv5ZCm5bGF5LitXHJcblx0XHRcdGNlbnRlcjp7XHJcblx0XHRcdFx0dHlwZTpCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5piv5ZCm5aSE5LqO5bqV6YOoXHJcblx0XHRcdGJvdHRvbTp7XHJcblx0XHRcdFx0dHlwZTpCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5by55Ye65bGC5YaF5a655a695bqmXHJcblx0XHRcdGJvZHlXaWR0aDp7XHJcblx0XHRcdFx0dHlwZTpOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDowXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOW8ueWHuuWxguWGheWuuemrmOW6plxyXG5cdFx0XHRib2R5SGVpZ2h0OntcclxuXHRcdFx0XHR0eXBlOk51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OjBcclxuXHRcdFx0fSxcclxuXHRcdFx0Ym9keUJnQ29sb3I6e1xyXG5cdFx0XHRcdHR5cGU6U3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6XCJiZy13aGl0ZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHRyYW5zZm9ybU9yaWdpbjp7XHJcblx0XHRcdFx0dHlwZTpTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDpcImxlZnQgdG9wXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gdGFiYmFy6auY5bqmXHJcblx0XHRcdHRhYmJhckhlaWdodDp7XHJcblx0XHRcdFx0dHlwZTpOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDowXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHN0YXR1czogZmFsc2UsXHJcblx0XHRcdFx0eDotMSxcclxuXHRcdFx0XHR5OjEsXHJcblx0XHRcdFx0bWF4WDowLFxyXG5cdFx0XHRcdG1heFk6MFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dHJ5IHtcclxuXHRcdFx0ICAgIGNvbnN0IHJlcyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cdFx0XHRcdHRoaXMubWF4WCA9IHJlcy53aW5kb3dXaWR0aCAtIHVuaS51cHgycHgodGhpcy5ib2R5V2lkdGgpXHJcblx0XHRcdFx0dGhpcy5tYXhZID0gcmVzLndpbmRvd0hlaWdodCAtIHVuaS51cHgycHgodGhpcy5ib2R5SGVpZ2h0KSAtIHVuaS51cHgycHgodGhpcy50YWJiYXJIZWlnaHQpXHJcblx0XHRcdH0gY2F0Y2ggKGUpIHtcclxuXHRcdFx0ICAgIC8vIGVycm9yXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHRnZXRNYXNrQ29sb3IoKSB7XHJcblx0XHRcdFx0bGV0IGkgPSB0aGlzLm1hc2tDb2xvciA/IDAuNSA6IDBcclxuXHRcdFx0XHRyZXR1cm4gYGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsJHtpfSk7YCBcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0Qm9keUNsYXNzKCl7XHJcblx0XHRcdFx0aWYodGhpcy5jZW50ZXIpe1xyXG5cdFx0XHRcdFx0cmV0dXJuICdsZWZ0LTAgcmlnaHQtMCBib3R0b20tMCB0b3AtMCBmbGV4IGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlcidcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IGJvdHRvbSA9IHRoaXMuYm90dG9tID8gJ2xlZnQtMCByaWdodC0wIGJvdHRvbS0wJyA6ICdyb3VuZGVkIGJvcmRlcidcclxuXHRcdFx0XHRyZXR1cm4gYCR7dGhpcy5ib2R5QmdDb2xvcn0gJHtib3R0b219YFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRnZXRCb2R5U3R5bGUoKXtcclxuXHRcdFx0XHRsZXQgbGVmdCA9IHRoaXMueCA+IC0xID8gYGxlZnQ6JHt0aGlzLnh9cHg7YCA6ICcnXHJcblx0XHRcdFx0bGV0IHRvcCA9IHRoaXMueSA+IC0xID8gYHRvcDoke3RoaXMueX1weDtgIDogJydcclxuXHRcdFx0XHRyZXR1cm4gbGVmdCArIHRvcFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczp7XHJcblx0XHRcdHNob3coeCA9IC0xICx5ID0gLTEpe1xyXG5cdFx0XHRcdGlmICh0aGlzLnN0YXR1cykge1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnggPSAoeCA+IHRoaXMubWF4WCkgPyB0aGlzLm1heFggOiB4XHJcblx0XHRcdFx0dGhpcy55ID0gKHkgPiB0aGlzLm1heFkpID8gdGhpcy5tYXhZIDogeVxyXG5cdFx0XHRcdHRoaXMuc3RhdHVzID0gdHJ1ZVxyXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtUExVUy1OVlVFXHJcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCk9PntcclxuXHRcdFx0XHRcdGFuaW1hdGlvbi50cmFuc2l0aW9uKHRoaXMuJHJlZnMucG9wdXAsIHtcclxuXHRcdFx0XHRcdCAgICBzdHlsZXM6IHtcclxuXHRcdFx0XHRcdCAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMSwxKScsXHJcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtT3JpZ2luOnRoaXMudHJhbnNmb3JtT3JpZ2luLFxyXG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6MVxyXG5cdFx0XHRcdFx0ICAgIH0sXHJcblx0XHRcdFx0XHQgICAgZHVyYXRpb246IDEwMCwgLy9tc1xyXG5cdFx0XHRcdFx0ICAgIHRpbWluZ0Z1bmN0aW9uOiAnZWFzZScsXHJcblx0XHRcdFx0XHQgICAgfSwgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0ICAgICAgIGNvbnNvbGUubG9nKCfliqjnlLvmiafooYznu5PmnZ8nKTtcclxuXHRcdFx0XHRcdCAgICB9KVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdGhpZGUoKXtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdoaWRlJylcclxuXHRcdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVMtTlZVRVxyXG5cdFx0XHRcdGFuaW1hdGlvbi50cmFuc2l0aW9uKHRoaXMuJHJlZnMucG9wdXAsIHtcclxuXHRcdFx0XHRzdHlsZXM6IHtcclxuXHRcdFx0XHRcdHRyYW5zZm9ybTogJ3NjYWxlKDAsMCknLFxyXG5cdFx0XHRcdFx0dHJhbnNmb3JtT3JpZ2luOnRoaXMudHJhbnNmb3JtT3JpZ2luLFxyXG5cdFx0XHRcdFx0b3BhY2l0eTowXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRkdXJhdGlvbjogMTAwLCAvL21zXHJcblx0XHRcdFx0dGltaW5nRnVuY3Rpb246ICdlYXNlJyxcclxuXHRcdFx0XHR9LCAoKT0+IHtcclxuXHRcdFx0XHRcdHRoaXMuc3RhdHVzID0gZmFsc2VcclxuXHRcdFx0XHQgICBjb25zb2xlLmxvZygn5Yqo55S75omn6KGM57uT5p2fJyk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHQvLyAjaWZuZGVmIEFQUC1QTFVTLU5WVUVcclxuXHRcdFx0XHR0aGlzLnN0YXR1cyA9IGZhbHNlXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cclxuXHQuZnJlZS1hbmltYXRlZHtcclxuXHRcdC8qICNpZmRlZiBBUFAtUExVUy1OVlVFICovXHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDAsMCk7XHJcblx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0fVxuPC9zdHlsZT5cbiIsImZ1bmN0aW9uIHR5cG9mICh2KSB7XHJcbiAgdmFyIHMgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcclxuICByZXR1cm4gcy5zdWJzdHJpbmcoOCwgcy5sZW5ndGggLSAxKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRMb2cgKCkge1xyXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XVxyXG4gIH1cclxuXHJcbiAgdmFyIG1zZ3MgPSBhcmdzLm1hcChmdW5jdGlvbiAodikge1xyXG4gICAgdmFyIHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodilcclxuXHJcbiAgICBpZiAodHlwZS50b0xvd2VyQ2FzZSgpID09PSAnW29iamVjdCBvYmplY3RdJykge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHYgPSAnLS0tQkVHSU46SlNPTi0tLScgKyBKU09OLnN0cmluZ2lmeSh2KSArICctLS1FTkQ6SlNPTi0tLSdcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHYgPSAnW29iamVjdCBvYmplY3RdJ1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHYgPSAnLS0tTlVMTC0tLSdcclxuICAgICAgfSBlbHNlIGlmICh2ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB2ID0gJy0tLVVOREVGSU5FRC0tLSdcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgdlR5cGUgPSB0eXBvZih2KS50b1VwcGVyQ2FzZSgpXHJcblxyXG4gICAgICAgIGlmICh2VHlwZSA9PT0gJ05VTUJFUicgfHwgdlR5cGUgPT09ICdCT09MRUFOJykge1xyXG4gICAgICAgICAgdiA9ICctLS1CRUdJTjonICsgdlR5cGUgKyAnLS0tJyArIHYgKyAnLS0tRU5EOicgKyB2VHlwZSArICctLS0nXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHYgPSBTdHJpbmcodilcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdlxyXG4gIH0pXHJcbiAgdmFyIG1zZyA9ICcnXHJcblxyXG4gIGlmIChtc2dzLmxlbmd0aCA+IDEpIHtcclxuICAgIHZhciBsYXN0TXNnID0gbXNncy5wb3AoKVxyXG4gICAgbXNnID0gbXNncy5qb2luKCctLS1DT01NQS0tLScpXHJcblxyXG4gICAgaWYgKGxhc3RNc2cuaW5kZXhPZignIGF0ICcpID09PSAwKSB7XHJcbiAgICAgIG1zZyArPSBsYXN0TXNnXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtc2cgKz0gJy0tLUNPTU1BLS0tJyArIGxhc3RNc2dcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgbXNnID0gbXNnc1swXVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG1zZ1xyXG59XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnJlZS1wb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kZWU1M2JiZSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mcmVlLXBvcHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWRlZTUzYmJlJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiZnJlZS1hbmltYXRlZFwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJzY2FsZSgwLDApXCIsXG4gICAgXCJvcGFjaXR5XCI6IDBcbiAgfVxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vZnJlZS1saXN0LWl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY5NzVjZWQ3JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZnJlZS1saXN0LWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mcmVlLWxpc3QtaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBcbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiZjY0OWExZTBcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwi5aSp6LWQL1RpYW5jaVdlYi9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1saXN0LWl0ZW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGUucmVjeWNsZS5qcyEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZyZWUtbGlzdC1pdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OTc1Y2VkNyZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidmlld1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBbXCJiZy13aGl0ZVwiLCBcImZsZXhcIiwgXCJhbGlnbi1zdHJldGNoXCJdLFxuICAgICAgb246IHtcbiAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS4kZW1pdChcImNsaWNrXCIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5zaG93TGVmdEljb25cbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgIFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIFwiYWxpZ24tY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgXCJqdXN0aWZ5LWNlbnRlclwiLFxuICAgICAgICAgICAgICAgIFwicHktMlwiLFxuICAgICAgICAgICAgICAgIFwicGwtM1wiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdChcImljb25cIiksXG4gICAgICAgICAgICAgIF92bS5jb3ZlclxuICAgICAgICAgICAgICAgID8gX2MoXCJ1LWltYWdlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IF92bS5jb3ZlclN0eWxlLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IF92bS5jb3ZlciwgbW9kZTogXCJhc3BlY3RGaWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBsb25ncHJlc3M6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwiaW1nQ2xpY2tcIilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgXCJmbGV4LTFcIixcbiAgICAgICAgICAgIFwiZmxleFwiLFxuICAgICAgICAgICAgXCJhbGlnbi1jZW50ZXJcIixcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICBcImp1c3RpZnktYmV0d2VlblwiLFxuICAgICAgICAgICAgXCJwci0zXCIsXG4gICAgICAgICAgICBcInB5LTNcIixcbiAgICAgICAgICAgIFwicGwtM1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBjbGFzczogX3ZtLmJvcmRlciA/IFwiYm9yZGVyLWJvdHRvbVwiIDogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl90KFwiZGVmYXVsdFwiLCBbXG4gICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJmb250LW1kXCIsIFwidGV4dC1kYXJrXCJdIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uc2hvd1JpZ2h0XG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImZsZXhcIiwgXCJhbGlnbi1jZW50ZXJcIl0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3QoXCJyaWdodFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5zaG93UmlnaHRJY29uXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbmZvbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtbGlnaHQtbXV0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtbWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIu6YhVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZyZWUtbGlzdC1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ZyZWUtbGlzdC1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cImJnLXdoaXRlIGZsZXggYWxpZ24tc3RyZXRjaFwiXHJcblx0QGNsaWNrPVwiJGVtaXQoJ2NsaWNrJylcIj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMiBwbC0zXCJcclxuXHRcdHYtaWY9XCJzaG93TGVmdEljb25cIj5cclxuXHRcdFx0PHNsb3QgbmFtZT1cImljb25cIj48L3Nsb3Q+XHJcblx0XHRcdDxpbWFnZSBAbG9uZ3ByZXNzPVwiJGVtaXQoJ2ltZ0NsaWNrJylcIiA6c3JjPVwiY292ZXJcIiB2LWlmPVwiY292ZXJcIlxyXG5cdFx0XHRtb2RlPVwiYXNwZWN0RmlsbFwiIDpzdHlsZT1cImNvdmVyU3R5bGVcIj48L2ltYWdlPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJmbGV4LTEgZmxleCBhbGlnbi1jZW50ZXIgIGp1c3RpZnktYmV0d2VlbiBwci0zIHB5LTMgcGwtM1wiIDpjbGFzcz1cImJvcmRlciA/ICdib3JkZXItYm90dG9tJyA6ICcnXCI+XHJcblx0XHRcdDxzbG90PlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwiZm9udC1tZCB0ZXh0LWRhcmtcIj57e3RpdGxlfX08L3RleHQ+XHJcblx0XHRcdDwvc2xvdD5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlclwiIHYtaWY9XCJzaG93UmlnaHRcIj5cclxuXHRcdFx0XHQ8c2xvdCBuYW1lPVwicmlnaHRcIj48L3Nsb3Q+XHJcblx0XHRcdFx0PCEtLSDlj7Pnrq3lpLQgLS0+XHJcblx0XHRcdFx0PHRleHQgdi1pZj1cInNob3dSaWdodEljb25cIiBjbGFzcz1cImljb25mb250IHRleHQtbGlnaHQtbXV0ZWQgZm9udC1tZFwiPiYjeGU2MDU7PC90ZXh0PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHQvLyDmmK/lkKblvIDlkK/kuIvovrnnur9cclxuXHRcdFx0Ym9yZGVyOntcclxuXHRcdFx0XHR0eXBlOkJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDp0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWwgemdolxyXG5cdFx0XHRjb3Zlcjoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiBcIlwiXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOWwgemdouWkp+Wwj1xyXG5cdFx0XHRjb3ZlclNpemU6e1xyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsTnVtYmVyXSxcclxuXHRcdFx0XHRkZWZhdWx0Ojc1XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOagh+mimFxyXG5cdFx0XHR0aXRsZTp7XHJcblx0XHRcdFx0dHlwZTpTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDpcIlwiXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaYvuekuuWPs+i+uVxyXG5cdFx0XHRzaG93UmlnaHQ6e1xyXG5cdFx0XHRcdHR5cGU6Qm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OmZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaYvuekuuW3pui+ueWbvuagh1xyXG5cdFx0XHRzaG93TGVmdEljb246e1xyXG5cdFx0XHRcdHR5cGU6Qm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OnRydWVcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5piv5ZCm5pi+56S6566t5aS0XHJcblx0XHRcdHNob3dSaWdodEljb246e1xyXG5cdFx0XHRcdHR5cGU6Qm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OnRydWVcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdGNvdmVyU3R5bGUoKSB7XHJcblx0XHRcdFx0cmV0dXJuIGB3aWR0aDogJHt0aGlzLmNvdmVyU2l6ZX1ycHg7aGVpZ2h0OiAke3RoaXMuY292ZXJTaXplfXJweDtgXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuPC9zdHlsZT5cclxuIiwiZXhwb3J0IGRlZmF1bHQge1wicGFnZXNcIjp7XCJwYWdlcy90YWJiYXIvZmluZC9maW5kXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5pyL5Y+L5ZyIXCIsXCJlbmFibGVQdWxsRG93blJlZnJlc2hcIjp0cnVlLFwiYm91bmNlXCI6XCJub25lXCIsXCJ0aXRsZU5WaWV3XCI6e1widHlwZVwiOlwidHJhbnNwYXJlbnRcIixcImJ1dHRvbnNcIjpbe1wiYmFja2dyb3VuZFwiOlwicmdiYSgyNTUsMjU1LDI1NSwwLjIpXCIsXCJjb2xvclwiOlwiIzY5Njk2OVwiLFwidHlwZVwiOlwibm9uZVwiLFwiZm9udFNyY1wiOlwiL3N0YXRpYy9mb250cy9pY29uZm9udC50dGZcIixcInRleHRcIjpcIu6YiFwifV19LFwidXNpbmdDb21wb25lbnRzXCI6e1wiY2hhdC1pbnB1dFwiOlwiL2NvbXBvbmVudHMvaW0tY2hhdC9jaGF0aW5wdXRcIixcImZyZWUtY29uZmlybVwiOlwiL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWNvbmZpcm1cIixcImZyZWUtcG9wdXBcIjpcIi9jb21wb25lbnRzL2ZyZWUtdWkvZnJlZS1wb3B1cFwifSxcInVzaW5nQXV0b0ltcG9ydENvbXBvbmVudHNcIjp7fX0sXCJwYWdlcy9sb2dpbi9sb2dpblwiOntcInVzaW5nQ29tcG9uZW50c1wiOntcInctaW5wdXRcIjpcIi9jb21wb25lbnRzL3dhdGNoLWxvZ2luL3dhdGNoLWlucHV0XCIsXCJ3LWJ1dHRvblwiOlwiL2NvbXBvbmVudHMvd2F0Y2gtbG9naW4vd2F0Y2gtYnV0dG9uXCJ9LFwidXNpbmdBdXRvSW1wb3J0Q29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL2xvZ2luL2ZvcmdldFwiOntcInVzaW5nQ29tcG9uZW50c1wiOntcInctaW5wdXRcIjpcIi9jb21wb25lbnRzL3dhdGNoLWxvZ2luL3dhdGNoLWlucHV0XCIsXCJ3LWJ1dHRvblwiOlwiL2NvbXBvbmVudHMvd2F0Y2gtbG9naW4vd2F0Y2gtYnV0dG9uXCJ9LFwidXNpbmdBdXRvSW1wb3J0Q29tcG9uZW50c1wiOnt9fSxcInBhZ2VzL2xvZ2luL3JlZ2lzdGVyXCI6e1widXNpbmdDb21wb25lbnRzXCI6e1widy1pbnB1dFwiOlwiL2NvbXBvbmVudHMvd2F0Y2gtbG9naW4vd2F0Y2gtaW5wdXRcIixcInctYnV0dG9uXCI6XCIvY29tcG9uZW50cy93YXRjaC1sb2dpbi93YXRjaC1idXR0b25cIn0sXCJ1c2luZ0F1dG9JbXBvcnRDb21wb25lbnRzXCI6e319LFwicGFnZXMvd2Vidmlldy93ZWJ2aWV3XCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwiXCIsXCJib3VuY2VcIjpcIm5vbmVcIixcInRpdGxlTlZpZXdcIjp7XCJ0eXBlXCI6XCJkZWZhdWx0XCJ9LFwidXNpbmdDb21wb25lbnRzXCI6e30sXCJ1c2luZ0F1dG9JbXBvcnRDb21wb25lbnRzXCI6e319LFwicGFnZXMvdGFiYmFyL3B1Ymxpc2gvcHVibGlzaFwiOntcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuWPkeihqOWKqOaAgVwiLFwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvclwiOlwiI0VERURFRFwiLFwiYm91bmNlXCI6XCJub25lXCIsXCJ0aXRsZU5WaWV3XCI6e1widHlwZVwiOlwiZGVmYXVsdFwifSxcInVzaW5nQ29tcG9uZW50c1wiOntcImZyZWUtbmF2LWJhclwiOlwiL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLW5hdi1iYXJcIixcImZyZWUtY29uZmlybVwiOlwiL2NvbXBvbmVudHMvZnJlZS11aS9mcmVlLWNvbmZpcm1cIn0sXCJ1c2luZ0F1dG9JbXBvcnRDb21wb25lbnRzXCI6e319LFwicGFnZXMvbWluZS9taW5lXCI6e1wibmF2aWdhdGlvbkJhclRpdGxlVGV4dFwiOlwi5Liq5Lq65Lit5b+DXCIsXCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yXCI6XCIjRURFREVEXCIsXCJib3VuY2VcIjpcIm5vbmVcIixcInRpdGxlTlZpZXdcIjp7XCJ0eXBlXCI6XCJkZWZhdWx0XCJ9LFwidXNpbmdDb21wb25lbnRzXCI6e30sXCJ1c2luZ0F1dG9JbXBvcnRDb21wb25lbnRzXCI6e319fSxcImdsb2JhbFN0eWxlXCI6e1wibmF2aWdhdGlvbkJhclRleHRTdHlsZVwiOlwiYmxhY2tcIixcIm5hdmlnYXRpb25CYXJUaXRsZVRleHRcIjpcIuS7v+W+ruS/oVwiLFwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvclwiOlwiI0Y4RjhGOFwiLFwiYmFja2dyb3VuZENvbG9yXCI6XCIjRjhGOEY4XCIsXCJ0aXRsZU5WaWV3XCI6ZmFsc2UsXCJzY3JvbGxJbmRpY2F0b3JcIjpcIm5vbmVcIn19IiwiZXhwb3J0IGRlZmF1bHQge1wiYXBwaWRcIjpcIl9fVU5JX19CN0Q1MUU4XCJ9IiwiVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImljb25mb250XCI6IHtcbiAgICBcImZvbnRGYW1pbHlcIjogXCJpY29uZm9udFwiXG4gIH0sXG4gIFwidmlld1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEuOCxcbiAgICBcImNvbG9yXCI6IFwiIzBFMTUxRFwiXG4gIH0sXG4gIFwidGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI4cnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEuOCxcbiAgICBcImNvbG9yXCI6IFwiIzBFMTUxRFwiXG4gIH0sXG4gIFwidy0xMDBcIjoge1xuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIlxuICB9LFxuICBcInJvd1wiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIi0yMHJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIi0yMHJweFwiLFxuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCJcbiAgfSxcbiAgXCJjb2wtMVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCI2Mi41cnB4XCJcbiAgfSxcbiAgXCJjb2wtMlwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMjVycHhcIlxuICB9LFxuICBcImNvbC0zXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjE4Ny41cnB4XCJcbiAgfSxcbiAgXCJjb2wtNFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCIyNTBycHhcIlxuICB9LFxuICBcImNvbC01XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjMxMi41cnB4XCJcbiAgfSxcbiAgXCJjb2wtNlwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCIzNzVycHhcIlxuICB9LFxuICBcImNvbC03XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjQzNy41cnB4XCJcbiAgfSxcbiAgXCJjb2wtOFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCI1MDBycHhcIlxuICB9LFxuICBcImNvbC05XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjU2Mi41cnB4XCJcbiAgfSxcbiAgXCJjb2wtMTBcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIixcbiAgICBcIndpZHRoXCI6IFwiNjI1cnB4XCJcbiAgfSxcbiAgXCJjb2wtMTFcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIixcbiAgICBcIndpZHRoXCI6IFwiNjg3LjVycHhcIlxuICB9LFxuICBcImNvbC0xMlwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwid2lkdGhcIjogXCI3NTBycHhcIlxuICB9LFxuICBcImNvbC1vZmZzZXQtMTJcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjc1MHJweFwiXG4gIH0sXG4gIFwiY29sLW9mZnNldC0xMVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNjg3LjVycHhcIlxuICB9LFxuICBcImNvbC1vZmZzZXQtMTBcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjYyNXJweFwiXG4gIH0sXG4gIFwiY29sLW9mZnNldC05XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1NjIuNXJweFwiXG4gIH0sXG4gIFwiY29sLW9mZnNldC04XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1MDBycHhcIlxuICB9LFxuICBcImNvbC1vZmZzZXQtN1wiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDM3LjVycHhcIlxuICB9LFxuICBcImNvbC1vZmZzZXQtNlwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzc1cnB4XCJcbiAgfSxcbiAgXCJjb2wtb2Zmc2V0LTVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMxMi41cnB4XCJcbiAgfSxcbiAgXCJjb2wtb2Zmc2V0LTRcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjI1MHJweFwiXG4gIH0sXG4gIFwiY29sLW9mZnNldC0zXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxODcuNXJweFwiXG4gIH0sXG4gIFwiY29sLW9mZnNldC0yXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMjVycHhcIlxuICB9LFxuICBcImNvbC1vZmZzZXQtMVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNjIuNXJweFwiXG4gIH0sXG4gIFwiY29sLW9mZnNldC0wXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogMFxuICB9LFxuICBcImZsZXhcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiZmxleC1yb3dcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwiZmxleC1jb2x1bW5cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiZmxleC1yb3ctcmV2ZXJzZVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93LXJldmVyc2VcIlxuICB9LFxuICBcImZsZXgtY29sdW1uLXJldmVyc2VcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtbi1yZXZlcnNlXCJcbiAgfSxcbiAgXCJmbGV4LXdyYXBcIjoge1xuICAgIFwiZmxleFdyYXBcIjogXCJ3cmFwXCJcbiAgfSxcbiAgXCJmbGV4LW5vd3JhcFwiOiB7XG4gICAgXCJmbGV4V3JhcFwiOiBcIm5vd3JhcFwiXG4gIH0sXG4gIFwianVzdGlmeS1zdGFydFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtc3RhcnRcIlxuICB9LFxuICBcImp1c3RpZnktZW5kXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcImp1c3RpZnktYmV0d2VlblwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIlxuICB9LFxuICBcImp1c3RpZnktY2VudGVyXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJhbGlnbi1jZW50ZXJcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiYWxpZ24tc3RyZXRjaFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwic3RyZXRjaFwiXG4gIH0sXG4gIFwiYWxpZ24tc3RhcnRcIjoge1xuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIlxuICB9LFxuICBcImFsaWduLWVuZFwiOiB7XG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcImZsZXgtMVwiOiB7XG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCJmbGV4LTJcIjoge1xuICAgIFwiZmxleFwiOiAyXG4gIH0sXG4gIFwiZmxleC0zXCI6IHtcbiAgICBcImZsZXhcIjogM1xuICB9LFxuICBcImZsZXgtNFwiOiB7XG4gICAgXCJmbGV4XCI6IDRcbiAgfSxcbiAgXCJmbGV4LTVcIjoge1xuICAgIFwiZmxleFwiOiA1XG4gIH0sXG4gIFwiY29udGFpbmVyXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtLTBcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAwLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IDAsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDBcbiAgfSxcbiAgXCJtLTFcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwcnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm0tMlwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjBycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibS0zXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjMwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIzMHJweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJtLTRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwcnB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm0tNVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1MHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNTBycHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibXQtMFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogMFxuICB9LFxuICBcIm10LTFcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm10LTJcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm10LTNcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm10LTRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm10LTVcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNTBycHhcIlxuICB9LFxuICBcIm1iLTBcIjoge1xuICAgIFwibWFyZ2luQm90dG9tXCI6IDBcbiAgfSxcbiAgXCJtYi0xXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJtYi0yXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJtYi0zXCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJtYi00XCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJtYi01XCI6IHtcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJtbC0wXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogMFxuICB9LFxuICBcIm1sLTFcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJtbC0yXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibWwtM1wiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm1sLTRcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJtbC01XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibXItMFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiAwXG4gIH0sXG4gIFwibXItMVwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJtci0yXCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcIm1yLTNcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibXItNFwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJtci01XCI6IHtcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcIm15LTBcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IDAsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogMFxuICB9LFxuICBcIm15LTFcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJteS0yXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIyMHJweFwiXG4gIH0sXG4gIFwibXktM1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIzMHJweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMzBycHhcIlxuICB9LFxuICBcIm15LTRcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJteS01XCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjUwcnB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI1MHJweFwiXG4gIH0sXG4gIFwibXgtMFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IDAsXG4gICAgXCJtYXJnaW5SaWdodFwiOiAwXG4gIH0sXG4gIFwibXgtMVwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBycHhcIlxuICB9LFxuICBcIm14LTJcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJteC0zXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIzMHJweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwibXgtNFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDBycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcIm14LTVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjUwcnB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJwLTBcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwXG4gIH0sXG4gIFwicFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNXJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNXJweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjVycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNXJweFwiXG4gIH0sXG4gIFwicC0xXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicC0yXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicC0zXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicC00XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI0MHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI0MHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicC01XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicHQtMFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IDBcbiAgfSxcbiAgXCJwdFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNXJweFwiXG4gIH0sXG4gIFwicHQtMVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBycHhcIlxuICB9LFxuICBcInB0LTJcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJwdC0zXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicHQtNFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNDBycHhcIlxuICB9LFxuICBcInB0LTVcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJwYi0wXCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMFxuICB9LFxuICBcInBiLTFcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJwYlwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNXJweFwiXG4gIH0sXG4gIFwicGItMlwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMjBycHhcIlxuICB9LFxuICBcInBiLTNcIjoge1xuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJwYi00XCI6IHtcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicGItNVwiOiB7XG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNTBycHhcIlxuICB9LFxuICBcInBsLTBcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogMFxuICB9LFxuICBcInBsXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNXJweFwiXG4gIH0sXG4gIFwicGwtMVwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJwbC0yXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcInBsLTNcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicGwtNFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJwbC01XCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcInByLTBcIjoge1xuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDBcbiAgfSxcbiAgXCJwclwiOiB7XG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCI1cnB4XCJcbiAgfSxcbiAgXCJwci0xXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJwci0yXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcnB4XCJcbiAgfSxcbiAgXCJwci0zXCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCJcbiAgfSxcbiAgXCJwci00XCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJwci01XCI6IHtcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjUwcnB4XCJcbiAgfSxcbiAgXCJweS0wXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMFxuICB9LFxuICBcInB5XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1cnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNXJweFwiXG4gIH0sXG4gIFwicHktMVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMHJweFwiXG4gIH0sXG4gIFwicHktMlwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHJweFwiXG4gIH0sXG4gIFwicHktM1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHJweFwiXG4gIH0sXG4gIFwicHktNFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNDBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI0MHJweFwiXG4gIH0sXG4gIFwicHktNVwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNTBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1MHJweFwiXG4gIH0sXG4gIFwicHgtMFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IDBcbiAgfSxcbiAgXCJweC0xXCI6IHtcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEwcnB4XCJcbiAgfSxcbiAgXCJweFwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjVycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjVycHhcIlxuICB9LFxuICBcInB4LTJcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBycHhcIlxuICB9LFxuICBcInB4LTNcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcInB4LTRcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI0MHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNDBycHhcIlxuICB9LFxuICBcInB4LTVcIjoge1xuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1MHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiNTBycHhcIlxuICB9LFxuICBcImZvbnQtc21hbGxcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyMHJweFwiXG4gIH0sXG4gIFwiZm9udC1zbVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI1cnB4XCJcbiAgfSxcbiAgXCJmb250XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzBycHhcIlxuICB9LFxuICBcImZvbnQtbWRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzNXJweFwiXG4gIH0sXG4gIFwiZm9udC1sZ1wiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjQwcnB4XCJcbiAgfSxcbiAgXCJoMVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjgwcnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEuOFxuICB9LFxuICBcImgyXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiNjBycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMS44XG4gIH0sXG4gIFwiaDNcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI0NXJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxLjhcbiAgfSxcbiAgXCJoNFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjMycnB4XCIsXG4gICAgXCJsaW5lSGVpZ2h0XCI6IDEuOFxuICB9LFxuICBcImg1XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzBycHhcIixcbiAgICBcImxpbmVIZWlnaHRcIjogMS44XG4gIH0sXG4gIFwiaDZcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyOHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiAxLjhcbiAgfSxcbiAgXCJ0ZXh0LXRocm91Z2hcIjoge1xuICAgIFwidGV4dERlY29yYXRpb25cIjogXCJsaW5lLXRocm91Z2hcIlxuICB9LFxuICBcInRleHQtbGVmdFwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJsZWZ0XCJcbiAgfSxcbiAgXCJ0ZXh0LXJpZ2h0XCI6IHtcbiAgICBcInRleHRBbGlnblwiOiBcInJpZ2h0XCJcbiAgfSxcbiAgXCJ0ZXh0LWNlbnRlclwiOiB7XG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInRleHQtZWxsaXBzaXNcIjoge1xuICAgIFwibGluZXNcIjogMSxcbiAgICBcInRleHRPdmVyZmxvd1wiOiBcImVsbGlwc2lzXCJcbiAgfSxcbiAgXCJmb250LXdlaWdodC1saWdodFwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiMzAwXCJcbiAgfSxcbiAgXCJmb250LXdlaWdodC1saWdodGVyXCI6IHtcbiAgICBcImZvbnRXZWlnaHRcIjogXCIxMDBcIlxuICB9LFxuICBcImZvbnQtd2VpZ2h0LW5vcm1hbFwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiNDAwXCJcbiAgfSxcbiAgXCJmb250LXdlaWdodC1ib2xkXCI6IHtcbiAgICBcImZvbnRXZWlnaHRcIjogXCI3MDBcIlxuICB9LFxuICBcImZvbnQtd2VpZ2h0LWJvbGRlclwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiXG4gIH0sXG4gIFwiZm9udC1pdGFsaWNcIjoge1xuICAgIFwiZm9udFN0eWxlXCI6IFwiaXRhbGljXCJcbiAgfSxcbiAgXCJ0ZXh0LXNxXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDkzLDEyMCwyNTUpXCJcbiAgfSxcbiAgXCJ0ZXh0LXF5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDUwLDIwNSw1MClcIlxuICB9LFxuICBcInRleHQtdGNiXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI0MywxNTQsMjQpXCJcbiAgfSxcbiAgXCJ0ZXh0LXdzXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDIwNSwxMzMsNjMpXCJcbiAgfSxcbiAgXCJ0ZXh0LXpiXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDI1NSwxODIsMTkzKVwiXG4gIH0sXG4gIFwidGV4dC15c1wiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYig3Nyw3Nyw3NylcIlxuICB9LFxuICBcInRleHQtd3lcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoMjU1LDE5MiwyMDMpXCJcbiAgfSxcbiAgXCJ0ZXh0LXN5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDMwLDE0NCwyNTUpXCJcbiAgfSxcbiAgXCJ0ZXh0LWpqXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDIxMiwzNSwxMjIpXCJcbiAgfSxcbiAgXCJ0ZXh0LXF5ZndcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoMjQ0LDIzNCw0MilcIlxuICB9LFxuICBcInRleHQtendmd1wiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYigxOSwzNCwxMjIpXCJcbiAgfSxcbiAgXCJ0ZXh0LXNoZndcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoMjUwLDEyOCwxMTQpXCJcbiAgfSxcbiAgXCJ0ZXh0LWJtXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDMxLDIwMywxODQpXCJcbiAgfSxcbiAgXCJ0ZXh0LWxzXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDE5MSwxOTEsMTkxKVwiXG4gIH0sXG4gIFwidGV4dC1oeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYigxNzMsMjE2LDIzMClcIlxuICB9LFxuICBcInRleHQteHpcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoNDQsNDQsNDQpXCJcbiAgfSxcbiAgXCJ0ZXh0LXlxXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDIxNiwzMCw2KVwiXG4gIH0sXG4gIFwidGV4dC1ncmF5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2FhYWFhYVwiXG4gIH0sXG4gIFwidGV4dC13aGl0ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcInRleHQtcmVkXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDIxNiwzMCw2KVwiXG4gIH0sXG4gIFwidGV4dC1wcmltYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwN2JmZlwiXG4gIH0sXG4gIFwidGV4dC1ob3Zlci1wcmltYXJ5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwNTZiM1wiXG4gIH0sXG4gIFwidGV4dC1zZWNvbmRhcnlcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJ0ZXh0LWhvdmVyLXNlY29uZGFyeVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM0OTRmNTRcIlxuICB9LFxuICBcInRleHQtc3VjY2Vzc1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMyOGE3NDVcIlxuICB9LFxuICBcInRleHQtaG92ZXItc3VjY2Vzc1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMxOTY5MmNcIlxuICB9LFxuICBcInRleHQtaW5mb1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMxN2EyYjhcIlxuICB9LFxuICBcInRleHQtaG92ZXItaW5mb1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwZjY2NzRcIlxuICB9LFxuICBcInRleHQtd2FybmluZ1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcInRleHQtaG92ZXItd2FybmluZ1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNiYThiMDBcIlxuICB9LFxuICBcInRleHQtZGFuZ2VyXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2RjMzU0NVwiXG4gIH0sXG4gIFwidGV4dC1ob3Zlci1kYW5nZXJcIjoge1xuICAgIFwiY29sb3JcIjogXCIjYTcxZDJhXCJcbiAgfSxcbiAgXCJ0ZXh0LWxpZ2h0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI2Y4ZjlmYVwiXG4gIH0sXG4gIFwidGV4dC1ob3Zlci1saWdodFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiNjYmQzZGFcIlxuICB9LFxuICBcInRleHQtZGFya1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMzNDNhNDBcIlxuICB9LFxuICBcInRleHQtaG92ZXItZGFya1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMxMjE0MTZcIlxuICB9LFxuICBcInRleHQtYm9keVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMyMTI1MjlcIlxuICB9LFxuICBcInRleHQtbXV0ZWRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJ0ZXh0LWxpZ2h0LW11dGVkXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0E5QTVBMFwiXG4gIH0sXG4gIFwidGV4dC1saWdodC1ibGFja1wiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMCwwLDAsMC41KVwiXG4gIH0sXG4gIFwidGV4dC1saWdodC13aGl0ZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcInJnYmEoMjU1LDI1NSwyNTUsMC41KVwiXG4gIH0sXG4gIFwiYmctcHJpbWFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA3YmZmXCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1wcmltYXJ5XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvcjpob3ZlclwiOiBcIiMwMDYyY2NcIlxuICB9LFxuICBcImJnLXNlY29uZGFyeVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjNmM3NTdkXCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1zZWNvbmRhcnlcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yOmhvdmVyXCI6IFwiIzU0NWI2MlwiXG4gIH0sXG4gIFwiYmctc3VjY2Vzc1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMjhhNzQ1XCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1zdWNjZXNzXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMxZTdlMzRcIlxuICB9LFxuICBcImJnLWluZm9cIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzE3YTJiOFwiXG4gIH0sXG4gIFwiYmctaG92ZXItaW5mb1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMTE3YThiXCJcbiAgfSxcbiAgXCJiZy13YXJuaW5nXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcImJnLWhvdmVyLXdhcm5pbmdcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2QzOWUwMFwiXG4gIH0sXG4gIFwiYmctZGFuZ2VyXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNkYzM1NDVcIlxuICB9LFxuICBcImJnLWhvdmVyLWRhbmdlclwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjYmQyMTMwXCJcbiAgfSxcbiAgXCJiZy1uYXZcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0VERURFRFwiXG4gIH0sXG4gIFwiYmctbGlnaHRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Y4ZjlmYVwiXG4gIH0sXG4gIFwiYmctaG92ZXItbGlnaHRcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2RhZTBlNVwiXG4gIH0sXG4gIFwiYmctZGFya1wiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMzQzYTQwXCJcbiAgfSxcbiAgXCJiZy1ob3Zlci1kYXJrXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMxZDIxMjRcIlxuICB9LFxuICBcImJnLXdoaXRlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcImJnLXRyYW5zcGFyZW50XCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMClcIlxuICB9LFxuICBcImJvcmRlclwiOiB7XG4gICAgXCJib3JkZXJXaWR0aFwiOiBcIjFycHhcIixcbiAgICBcImJvcmRlclN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiI2RlZTJlNlwiXG4gIH0sXG4gIFwiYm9yZGVyLXRvcFwiOiB7XG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjFycHhcIixcbiAgICBcImJvcmRlclRvcFN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2RlZTJlNlwiXG4gIH0sXG4gIFwiYm9yZGVyLXJpZ2h0XCI6IHtcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCIxcnB4XCIsXG4gICAgXCJib3JkZXJSaWdodFN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjZGVlMmU2XCJcbiAgfSxcbiAgXCJib3JkZXItYm90dG9tXCI6IHtcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMXJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZGVlMmU2XCJcbiAgfSxcbiAgXCJib3JkZXItbGVmdFwiOiB7XG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCIxcnB4XCIsXG4gICAgXCJib3JkZXJMZWZ0U3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI2RlZTJlNlwiXG4gIH0sXG4gIFwiYm9yZGVyLTBcIjoge1xuICAgIFwiYm9yZGVyV2lkdGhcIjogMFxuICB9LFxuICBcImJvcmRlci10b3AtMFwiOiB7XG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiAwXG4gIH0sXG4gIFwiYm9yZGVyLXJpZ2h0LTBcIjoge1xuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiAwXG4gIH0sXG4gIFwiYm9yZGVyLWJvdHRvbS0wXCI6IHtcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IDBcbiAgfSxcbiAgXCJib3JkZXItbGVmdC0wXCI6IHtcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiAwXG4gIH0sXG4gIFwiYm9yZGVyLXByaW1hcnlcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMDA3YmZmXCJcbiAgfSxcbiAgXCJib3JkZXItc2Vjb25kYXJ5XCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzZjNzU3ZFwiXG4gIH0sXG4gIFwiYm9yZGVyLWxpZ2h0LXNlY29uZGFyeVwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNFOUU4RTVcIlxuICB9LFxuICBcImJvcmRlci1zdWNjZXNzXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzI4YTc0NVwiXG4gIH0sXG4gIFwiYm9yZGVyLWluZm9cIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjMTdhMmI4XCJcbiAgfSxcbiAgXCJib3JkZXItd2FybmluZ1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNmZmMxMDdcIlxuICB9LFxuICBcImJvcmRlci1kYW5nZXJcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZGMzNTQ1XCJcbiAgfSxcbiAgXCJib3JkZXItbGlnaHRcIjoge1xuICAgIFwiYm9yZGVyQ29sb3JcIjogXCIjZjhmOWZhXCJcbiAgfSxcbiAgXCJib3JkZXItZGFya1wiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiMzNDNhNDBcIlxuICB9LFxuICBcImJvcmRlci13aGl0ZVwiOiB7XG4gICAgXCJib3JkZXJDb2xvclwiOiBcIiNGRkZGRkZcIlxuICB9LFxuICBcInJvdW5kZWRcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiOHJweFwiXG4gIH0sXG4gIFwicm91bmRlZC10b3BcIjoge1xuICAgIFwiYm9yZGVyVG9wTGVmdFJhZGl1c1wiOiBcIjhycHhcIixcbiAgICBcImJvcmRlclRvcFJpZ2h0UmFkaXVzXCI6IFwiOHJweFwiXG4gIH0sXG4gIFwicm91bmRlZC1yaWdodFwiOiB7XG4gICAgXCJib3JkZXJUb3BSaWdodFJhZGl1c1wiOiBcIjhycHhcIixcbiAgICBcImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzXCI6IFwiOHJweFwiXG4gIH0sXG4gIFwicm91bmRlZC1ib3R0b21cIjoge1xuICAgIFwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcIjogXCI4cnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzXCI6IFwiOHJweFwiXG4gIH0sXG4gIFwicm91bmRlZC1sZWZ0XCI6IHtcbiAgICBcImJvcmRlclRvcExlZnRSYWRpdXNcIjogXCI4cnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzXCI6IFwiOHJweFwiXG4gIH0sXG4gIFwicm91bmRlZC1jaXJjbGVcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTAwcnB4XCJcbiAgfSxcbiAgXCJyb3VuZGVkLTBcIjoge1xuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDBcbiAgfSxcbiAgXCJvdmVyZmxvdy1oaWRkZW5cIjoge1xuICAgIFwib3ZlcmZsb3dcIjogXCJoaWRkZW5cIlxuICB9LFxuICBcInBvc2l0aW9uLXJlbGF0aXZlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIlxuICB9LFxuICBcInBvc2l0aW9uLWFic29sdXRlXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIlxuICB9LFxuICBcInBvc2l0aW9uLWZpeGVkXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIlxuICB9LFxuICBcImZpeGVkLXRvcFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJ6SW5kZXhcIjogMTAzMFxuICB9LFxuICBcImZpeGVkLWJvdHRvbVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJyaWdodFwiOiAwLFxuICAgIFwiYm90dG9tXCI6IDAsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJ6SW5kZXhcIjogMTAzMFxuICB9LFxuICBcInRvcC0wXCI6IHtcbiAgICBcInRvcFwiOiAwXG4gIH0sXG4gIFwibGVmdC0wXCI6IHtcbiAgICBcImxlZnRcIjogMFxuICB9LFxuICBcInJpZ2h0LTBcIjoge1xuICAgIFwicmlnaHRcIjogMFxuICB9LFxuICBcImJvdHRvbS0wXCI6IHtcbiAgICBcImJvdHRvbVwiOiAwXG4gIH0sXG4gIFwicGFnZVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjRURFREVEXCIsXG4gICAgXCJmbGV4XCI6IDFcbiAgfSxcbiAgXCJtYWluLWJnLWNvbG9yXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMzNTc4RTVcIlxuICB9LFxuICBcIm1haW4tdGV4dC1jb2xvclwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMzNTc4RTVcIlxuICB9LFxuICBcImJvcmRlci1tYWluXCI6IHtcbiAgICBcImJvcmRlckNvbG9yXCI6IFwiIzA4QzA2MFwiXG4gIH0sXG4gIFwiYmctY2hhdC1pdGVtXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiM2QkVFNjhcIlxuICB9LFxuICBcInRleHQtY2hhdC1pdGVtXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzZCRUU2OFwiXG4gIH1cbn0iLCJ2YXIgcGlueWluID0gKGZ1bmN0aW9uKCkge1xyXG5cdHZhciBQaW55aW4gPSBmdW5jdGlvbihvcHMpIHtcclxuXHRcdFx0dGhpcy5pbml0aWFsaXplKG9wcyk7XHJcblx0XHR9LFxyXG5cclxuXHRcdG9wdGlvbnMgPSB7XHJcblx0XHRcdGNoZWNrUG9seXBob25lOiBmYWxzZSxcclxuXHRcdFx0Y2hhcmNhc2U6ICdkZWZhdWx0J1xyXG5cdFx0fTtcclxuXHJcblxyXG5cdFBpbnlpbi5mbiA9IFBpbnlpbi5wcm90b3R5cGUgPSB7XHJcblx0XHRpbml0OiBmdW5jdGlvbihvcHMpIHtcclxuXHRcdFx0dGhpcy5vcHRpb25zID0gZXh0ZW5kKG9wdGlvbnMsIG9wcyk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGluaXRpYWxpemU6IGZ1bmN0aW9uKG9wcykge1xyXG5cdFx0XHR0aGlzLmluaXQob3BzKTtcclxuXHRcdFx0dGhpcy5jaGFyX2RpY3QgPVxyXG5cdFx0XHRcdFwiWURZUVNYTVdaU1NYSkJZTUdDQ1pRUFNTUUJZQ0RTQ0RRTERZTFlCU1NKR1laWkpKRktDQ0xaREhXRFdaSkxKUEZZWU5XSkpUTVlIWldaSEZMWlBQUUhHU0NZWVlOSlFZWFhHSkhIU0RTSk5LS1RNT01MQ1JYWVBTTlFTRUNDUVpHR0xMWUpMTVlaWlNFQ1lLWVlIUVdKU1NHR1lYWVpZSldXS0RKSFlDSE1ZWEpUTFhKWVFCWVhaTERXUkRKUldZU1JMRFpKUENCWkpKQlJDRlRMRUNaU1RaRlhYWkhUUlFIWUJETFlDWlNTWU1NUkZNWVFaUFdXSkpZRkNSV0ZERlpRUFlERFdZWEtZSkFXSkZGWFlQU0ZUWllISFlaWVNXQ0pZWFNDTENYWFdaWlhOQkdOTlhCWExaU1pTQlNHUFlTWVpESE1EWkJRQlpDV0RaWllZVFpIQlRTWVlCWkdOVE5YUVlXUVNLQlBISExYR1lCRk1KRUJKSEhHUVRKQ1lTWFNUS1pITFlDS0dMWVNNWlhZQUxNRUxEQ0NYR1pZUkpYU0RMVFlaQ1FLQ05OSldISlRaWkNRTEpTVFNUQk5YQlRZWENFUVhHS1dKWUZMWlFMWUhZWFNQU0ZYTE1QQllTWFhYWURKQ1pZTExMU0pYRkhKWFBKQlRGRllBQllYQkhaWkJKWVpMV0xDWkdHQlRTU01EVEpaWFBUSFlRVEdMSlNDUUZaS0paSlFOTFpXTFNMSERaQldKTkNKWllaU1FRWUNRWVJaQ0pKV1lCUlRXUFlGVFdFWENTS0RaQ1RCWkhZWlpZWUpYWkNGRlpaTUpZWFhTRFpaT1RUQlpMUVdGQ0tTWlNYRllSTE5ZSk1CRFRISlhTUVFDQ1NCWFlZVFNZRkJYRFpUR0JDTlNMQ1laWlBTQVpZWlpTQ0pDU0haUVlEWExCUEpMTE1RWFRZRFpYU1FKVFpQWExDR0xRVFpXSkJIQ1RTWUpTRlhZRUpKVExCR1hTWEpNWUpRUVBGWkFTWUpOVFlESlhLSkNESlNaQ0JBUlREQ0xZSlFNV05RTkNMTExLQllCWlpTWUhRUUxUV0xDQ1hUWExMWk5UWUxORVdZWllYQ1pYWEdSS1JNVENORE5KVFNZWVNTRFFER0hTREJKR0hSV1JRTFlCR0xYSExHVEdYQlFKRFpQWUpTSllKQ1RNUk5ZTUdSWkpDWkdKTVpNR1hNUFJZWEtKTllNU0dNWkpZTUtNRlhNTERUR0ZCSENKSEtZTFBGTURYTFFKSlNNVFFHWlNKTFFETERHSllDQUxDTVpDU0RKTExOWERKRkZGRkpDWkZNWkZGUEZLSEtHRFBTWEtUQUNKREhIWkREQ1JSQ0ZRWUpLUUNDV0pEWEhXSkxZTExaR0NGQ1FEU01MWlBCSkpQTFNCQ0pHR0RDS0tERVpTUUNDS0pHQ0dLREpUSkRMWllDWEtMUVNDR0pDTFRGUENRQ1pHV1BKRFFZWkpKQllKSFNKRFpXR0ZTSkdaS1FDQ1pMTFBTUEtKR1FKSFpaTEpQTEdKR0pKVEhKSllKWkNaTUxaTFlRQkdKV01MSktYWkRaTkpRU1laTUxKTExKS1lXWE1LSkxIU0tKR0JNQ0xZWU1LWEpRTEJNTExLTURYWEtXWVhZU0xNTFBTSlFRSlFYWVhGSlRKRFhNWFhMTENYUUJTWUpCR1dZTUJHR0JDWVhQSllHUEVQRkdESkdCSEJOU1FKWVpKS0pLSFhRRkdRWktGSFlHS0hES0xMU0RKUVhQUVlLWUJOUVNYUU5TWlNXSEJTWFdIWFdCWlpYRE1OU0pCU0JLQkJaS0xZTFhHV1hEUldZUVpNWVdTSlFMQ0pYWEpYS0pFUVhTQ1lFVExaSExZWVlTRFpQQVFZWkNNVExTSFRaQ0ZZWllYWUxKU0RDSlFBR1lTTENRTFlZWVNITVJRUUtMRFhaU0NTU1NZRFlDSllTRlNKQkZSU1NaUVNCWFhQWEpZU0RSQ0tHSkxHREtaSlpCREtUQ1NZUVBZSFNUQ0xESkRITVhNQ0dYWVpISkREVE1ITFRYWlhZTFlNT0hZSkNMVFlGQlFRWFBGQkRGSEhUS1NRSFpZWVdDTlhYQ1JXSE9XR1lKTEVHV0RRQ1dHRkpZQ1NOVE1ZVE9MQllHV1FXRVNKUFdOTUxSWURaU1pUWFlRUFpHQ1dYSE5HUFlYU0hNWVFKWFpURFBQQkZZSFpIVEpZRkRaV0tHS1pCTEROVFNYSFFFRUdaWllMWk1NWllKWkdYWlhLSEtTVFhOWFhXWUxZQVBTVEhYRFdIWllNUFhBR0tZRFhCSE5IWEtEUEpOTVlIWUxQTUdPQ1NMTlpIS1hYTFBaWkxCTUxTRkJISEdZR1lZR0dCSFNDWUFRVFlXTFhUWlFDRVpZRFFEUU1NSFRLTExTWkhMU0paV0ZZSFFTV1NDV0xRQVpZTllUTFNYVEhBWk5LWlpTWlpMQVhYWldXQ1RHUVFURERZWlRDQ0hZUVpGTFhQU0xaWUdQWlNaTkdMTkRRVEJETFhHVENUQUpES1lXTlNZWkxKSEhaWkNXTllZWllXTUhZQ0hIWVhISktaV1NYSFpZWExZU0tRWVNQU0xZWldNWVBQS0JZR0xLWkhUWVhBWFFTWVNIWEFTTUNIS0RTQ1JTV0pQV1hTR1pKTFdXU0NIU0pIU1FOSENTRUdOREFRVEJBQUxaWk1TU1REUUpDSktUU0NKQVhQTEdHWEhIR1hYWkNYUERNTUhMREdUWUJZU0pNWEhNUkNQWFhKWkNLWlhTSE1MUVhYVFRIWFdaRktIQ0NaRFlUQ0pZWFFITFhESFlQSlFYWUxTWVlEWk9aSk5ZWFFFWllTUVlBWVhXWVBER1hERFhTUFBZWk5ETFRXUkhYWURYWlpKSFRDWE1DWkxIUFlZWVlNSFpMTEhOWE1ZTExMTURDUFBYSE1YREtZQ1lSRExUWEpDSEhaWlhaTENDTFlMTlpTSFpKWlpMTk5STFdIWVFTTkpIWFlOVFRUS1lKUFlDSEhZRUdLQ1RUV0xHUVJMR0dUR1RZR1lIUFlIWUxRWVFHQ1dZUUtQWVlZVFRUVExIWUhMTFRZVFRTUExLWVpYR1pXR1BZRFNTWlpEUVhTS0NRTk1KSlpaQlhZUU1KUlRGRkJUS0haS0JYTEpKS0RYSlRMQldGWlBQVEtRVFpUR1BER05UUEpZRkFMUU1LR1hCRENMWkZIWkNMTExMQURQTVhESkhMQ0NMR1lIRFpGR1lEREdDWVlGR1lEWEtTU0VCREhZS0RLREtITkFYWFlCUEJZWUhYWlFHQUZGUVlKWERNTEpDU1FaTExQQ0hCU1hHSllORFlCWVFTUFpXSkxaS1NERFRBQ1RCWFpEWVpZUEpaUVNKTktLVEtOSkRKR1lZUEdUTEZZUUtBU0ROVENZSEJMV0RaSEJCWURXSlJZR0taWUhFWVlGSk1TRFRZRlpKSkhHQ1hQTFhITERXWFhKS1lUQ1lLU1NTTVRXQ1RUUVpMUEJTWkRaV1pYR1pBR1lLVFlXWExITFNQQkNMTE9RTU1aU1NMQ01CSkNTWlpLWURDWkpHUVFEU01DWVRaUVFMV1pRWlhTU0ZQVFRGUU1ERFpEU0hEVERXRkhURFlaSllRSlFLWVBCREpZWVhUTEpIRFJRWFhYSEFZREhSSkxLTFlUV0hMTFJMTFJDWFlMQldTUlNaWlNZTUtaWkhIS1lIWEtTTURTWURZQ0pQQlpCU1FMRkNYWFhOWEtYV1lXU0RaWVFPR0dRTU1ZSENEWlRURkpZWUJHU1RUVFlCWUtKREhLWVhCRUxIVFlQSlFORlhGRFlLWkhRS1pCWUpUWkJYSEZEWEtEQVNXVEFXQUpMRFlKU0ZIQkxETk5UTlFKVEpOQ0hYRkpTUkZXSFpGTURSWUpZSldaUERKS1pZSllNUENZWk5ZTlhGQllURllGV1lHREJOWlpaRE5ZVFhaRU1NUUJTUUVIWEZaTUJNRkxaWlNSWFlNSkdTWFdaSlNQUllESlNKR1hISkpHTEpKWU5aWkpYSEdYS1lNTFBZWVlDWFlUV1FaU1dIV0xZUkpMUFhTTFNYTUZTV1dLTENUTlhOWU5QU0pTWkhEWkVQVFhNWVlXWFlZU1lXTFhKUVpRWFpEQ0xFRUVMTUNQSlBDTFdCWFNRSEZXV1RGRkpUTlFKSEpRRFhIV0xCWVpORkpMQUxLWVlKTERYSEhZQ1NUWVlXTlJKWVhZV1RSTURSUUhXUUNNRkpEWVpNSE1ZWVhKV01ZWlFaWFRMTVJTUFdXQ0hBUUJYWUdaWVBYWVlSUkNMTVBZTUdLU0pTWllTUk1ZSlNOWFRQTE5CQVBQWVBZTFhZWVpLWU5MRFpZSlpDWk5OTE1aSEhBUlFNUEdXUVRaTVhYTUxMSEdEWlhZSFhLWVhZQ0pNRkZZWUhKRlNCU1NRTFhYTkRZQ0FOTk1UQ0pDWVBSUk5ZVFlRTllZTUJNU1hORExZTFlTTEpSTFhZU1hRTUxMWVpMWkpKSktZWlpDU0ZCWlhYTVNUQkpHTlhZWkhMWE5NQ1dTQ1laWUZaTFhCUk5OTllMQk5SVEdaUVlTQVRTV1JZSFlKWk1aREhaR1pEV1lCU1NDU0tYU1lIWVRYWEdDUUdYWlpTSFlYSlNDUkhNS0tCWENaSllKWU1LUUhaSkZOQkhNUUhZU05KTlpZQktOUU1DTEdRSFdMWk5aU1dYS0hMSkhZWUJRTEJGQ0RTWERMRFNQRlpQU0tKWVpXWlhaRERYSlNNTUVHSlNDU1NNR0NMWFhLWVlZTE5ZUFdXV0dZREtaSkdHR1pHR1NZQ0tOSldOSlBDWEJKSlRRVEpXRFNTUEpYWlhOWlhVTUVMUFhGU1hUTExYQ0xKWEpKTEpaWENUUFNXWExZREhMWVFSV0hTWUNTUVlZQllBWVdKSkpRRldRQ1FRQ0pRR1hBTERCWlpZSkdLR1hQTFRaWUZYSkxUUEFES1lRSFBNQVRMQ1BEQ0tCTVRYWUJIS0xFTlhETEVFR1FEWU1TQVdIWk1MSlRXWUdYTFlRWkxKRUVZWUJRUUZGTkxZWFJEU0NUR0pHWFlZTktMTFlRS0NDVExISkxRTUtLWkdDWVlHTExMSkRaR1lESFpXWFBZU0pCWktEWkdZWlpIWVdZRlFZVFlaU1pZRVpaTFlNSEpKSFRTTVFXWVpMS1lZV1pDU1JLUVlUTFREWFdDVFlKS0xXU1FaV0JEQ1FZTkNKU1JTWkpMS0NEQ0RUTFpaWkFDUVFaWkREWFlQTFhaQlFKWUxaTExMUUREWlFKWUpZSlpZWE5ZWVlOWUpYS1hEQVpXWVJETEpZWVlSSkxYTExEWVhKQ1lXWVdOUUNDTERETllZWU5ZQ0tDWkhYWENDTEdaUUpHS1dQUENRUUpZU0JaWlhZSlNRUFhKUFpCU0JEU0ZOU0ZQWlhIRFdaVERXUFBURkxaWkJaRE1ZWVBRSlJTRFpTUVpTUVhCREdDUFpTV0RXQ1NRWkdNREhaWE1XV0ZZQlBER1BIVE1KVEhaU01NQkdaTUJaSkNGWldGWkJCWk1RQ0ZNQkRNQ0pYTEdQTkpCQlhHWUhZWUpHUFRaR1pNUUJRVENHWVhKWExXWktZRFBEWU1HQ0ZUUEZYWVpUWlhEWlhUR0tNVFlCQkNMQkpBU0tZVFNTUVlZTVNaWEZKRVdMWExMU1pCUUpKSkFLTFlMWExZQ0NUU1hNQ1dGS0tLQlNYTExMTEpZWFRZTFRKWVlURFBKSE5ITk5LQllRTkZRWVlaQllZRVNTRVNTR0RZSEZIV1RDSkJTRFpaVEZETVhIQ05KWllNUVdTUllKRFpKUVBEUUJCU1RKR0dGQktKQlhUR1FITkdXSlhKR0RMTFRIWkhIWVlZWVlZU1hXVFlZWUNDQkRCUFlQWllDQ1pZSlBaWVdDQkRMRldaQ1dKRFhYSFlITEhXWlpYSlRDWkxDRFBYVUpDWlpaTFlYSkpUWFBIRlhXUFlXWFpQVERaWkJEWkNZSEpITUxYQlFYU0JZTFJEVEdKUlJDVFRUSFlUQ1pXTVhGWVRXV1pDV0pXWEpZV0NTS1lCWlNDQ1RaUU5IWE5XWFhLSEtGSFRTV09DQ0pZQkNNUFpaWUtCTk5aUEJaSEhaRExTWUREWVRZRkpQWFlOR0ZYQllRWENCSFhDUFNYVFlaRE1LWVNOWFNYTEhLTVpYTFlIREhLV0hYWFNTS1FZSEhDSllYR0xIWlhDU05IRUtEVEdaWFFZUEtESEVYVFlLQ05ZTVlZWVBLUVlZWUtYWkxUSEpRVEJZUUhYQk1ZSFNRQ0tXV1lMTEhDWVlMTk5FUVhRV01DRkJEQ0NNTEpHR1hEUUtUTFhLR05RQ0RHWkpXWUpKTFlISFFUVFROV0NITVhDWFdIV1NaSllESkNDREJRQ0RHRE5ZWFpUSENRUlhDQkhaVFFDQlhXR1FXWVlCWEhNQllNWVFUWUVYTVFLWUFRWVJHWVpTTEZZS0tRSFlTU1FZU0hKR0pDTlhLWllDWFNCWFlYSFlZTFNUWUNYUVRIWVNNR1NDUE1NR0NDQ0NDTVRaVEFTTUdRWkpIS0xPU1FZTFNXVE1YU1lRS0RaTEpRUVlQTFNZQ1pUQ1FRUEJCUUpaQ0xQS0hRWllZWFhEVEREVFNKQ1hGRkxMQ0hRWE1KTFdDSkNYVFNQWUNYTkRUSlNISldYRFFRSlNLWFlBTVlMU0pITUxBTFlLWENZWURNTk1EUU1YTUNaTk5DWUJaS0tZRkxNQ0hDTUxIWFJDSkpIU1lMTk1USlpHWkdZV0pYU1JYQ1dKR0pRSFFaRFFKRENKSlpLSktHRFpRR0pKWUpZTFhaWFhDRFFISEhFWVRNSExGU0JESlNZWVNIRllTVENaUUxQQkRSRlJaVFpZS1lXSFNaWVFLV0RRWlJLTVNZTkJDUlhRQkpZRkFaUFpaRURaQ0pZV0JDSldIWUpCUVNaWVdSWVNaUFRES1pQRlBCTlpUS0xRWUhCQlpQTlBQVFlaWllCUU5ZRENQSk1NQ1lDUU1DWUZaWkRDTU5MRlBCUExOR1FKVEJUVE5KWlBaQkJaTkpLTEpRWUxOQlpRSEtTSlpOR0dRU1paS1lYU0hQWlNOQkNHWktERFpRQU5aSEpLRFJUTFpMU1dKTEpaTFlXVEpOREpaSkhYWUFZTkNCR1RaQ1NTUU1OSlBKWVRZU1dYWkZLV0pRVEtIVFpQTEJIU05KWlNZWkJXWlpaWkxTWUxTQkpIRFdXUVBTTE1NRkJKRFdBUVlaVENKVEJOTldaWFFYQ0RTTFFHRFNEUERaSEpUUVFQU1dMWVlKWkxHWVhZWkxDVENCSlRLVFlDWkpUUUtCU0pMR01HWkRNQ1NHUFlOSlpZUVlZS05YUlBXU1pYTVROQ1NaWllYWUJZSFlaQVhZV1FDSlRMTENLSkpUSkhHRFhEWFlRWVpaQllXRExXUUNHTFpHSkdRUlFaQ1pTU0JDUlBDU0tZRFpOWEpTUUdYU1NKTVlETlNUWlRQQkRMVEtaV1hRV1FUWkVYTlFDWkdXRVpLU1NCWUJSVFNTU0xDQ0dCUFNaUVNaTENDR0xMTFpYSFpRVEhDWk1RR1laUVpOTUNPQ1NaSk1NWlNRUEpZR1FMSllKUFBMRFhSR1pZWENDU1hIU0hHVFpOTFpXWktKQ1hUQ0ZDSlhMQk1RQkNaWldQUUROSFhMSkNUSFlaTEdZTE5MU1paUENYRFNDUVFISlFLU1haUEJBSllFTVNNSlRaRFhMQ0pZUllZTldKQk5HWlpUTUpYTFRCU0xZUlpQWUxTU0NOWFBITExIWUxMUVFaUUxYWU1SU1lDWFpMTU1DWkxUWlNEV1RKSkxMTlpHR1FYUEZTS1lHWUdIQkZaUERLTVdHSENYTVNHRFhKTUNKWkRZQ0FCWEpETE5CQ0RRWUdTS1lEUVRYREpKWVhNU1pRQVpEWkZTTFFYWUpTSlpZTEJUWFhXWFFRWkJKWlVGQkJMWUxXRFNMSkhYSllaSldUREpDWkZRWlFaWkRaU1haWlFMWkNEWkZKSFlTUFlNUFFaTUxQUExGRlhKSk5aWllMU0pFWVFaRlBGWktTWVdKSkpIUkRKWlpYVFhYR0xHSFlEWENTS1lTV01NWkNXWUJBWkJKS1NIRkhKQ1hNSEZRSFlYWFlaRlRTSllaRlhZWFBaTENITVpNQlhIWlpTWFlGWU1OQ1dEQUJBWkxYS1RDU0hIWEtYSkpaSlNUSFlHWFNYWVlISEhKV1hLWlhTU0JaWldISEhDV1RaWlpQSlhTTlhRUUpHWllaWVdMTENXWFpGWFhZWFlIWE1LWVlTV1NRTU5MTkFZQ1lTUE1KS0hXQ1FIWUxBSkpNWlhITU1DTlpIQkhYQ0xYVEpQTFRYWUpIRFlZTFRUWEZTWkhZWFhTSkJKWUFZUlNNWFlQTENLRFVZSExYUkxOTExTVFlaWVlRWUdZSEhTQ0NTTVpDVFpRWEtZUUZQWVlSUEZGTEtRVU5UU1pMTFpNV1dUQ1FRWVpXVExMTUxNUFdNQlpTU1RaUkJQRERUTFFKSkJYWkNTUlpRUVlHV0NTWEZXWkxYQ0NSU1pEWk1DWUdHRFpRU0dUSlNXTEpNWU1NWllIRkJKREdZWENDUFNIWE5aQ1NCU0pZSkdKTVBQV0FGRllGTlhIWVpYWllMUkVNWkdaQ1laU1NaRExMSkNTUUZOWFpLUFRYWkdYSkpHRk1ZWVlTTkJUWUxCTkxIUEZaRENZRkJNR1FSUlNTU1pYWVNHVFpSTllEWlpDREdQSkFGSkZaS05aQkxDWlNaUFNHQ1lDSlNaTE1MUlNaQlpaTERMU0xMWVNYU1FaUUxZWFpMU0tLQlJYQlJCWkNZQ1haWlpFRVlGR0tMWkxZWUhHWlNHWkxGSkhHVEdXS1JBQUpZWktaUVRTU0hKSlhEQ1laVVlKTFpZUlpEUVFIR0paWFNTWkJZS0pQQkZSVEpYTExGUVdKSFlMUVRZTUJMUFpEWFRaWUdCREhaWlJCR1hIV05KVEpYTEtTQ0ZTTVdMU0RRWVNKVFhLWlNDRldKTEJYRlRaTExKWkxMUUJMU1FNUVFDR0NaRlBCUEhaQ1pKTFBZWUdHRFRHV0RDRkNaUVlZWVFZU1NDTFhaU0tMWlpaR0ZGQ1FOV0dMSFFZWkpKQ1pMUVpaWUpQSlpaQlBEQ0NNSEpHWERRREdETFpRTUZHUFNZVFNEWUZXV0RKWkpZU1hZWUNaQ1lIWldQQllLWFJZTFlCSEtKS1NGWFRaSk1NQ0tITExUTllZTVNZWFlaUFlKUVlDU1lDV01USkpLUVlSSExMUVhQU0dUTFlZQ0xKU0NQWEpZWkZOTUxSR0pKVFlaQlhZWk1TSllKSEhGWlFNU1lYUlNaQ1dUTFJUUVpTU1RLWEdRS0dTUFRHQ1pOSlNKQ1FDWEhNWEdHWlRRWURKS1pETEJaU1hKTEhZUUdHR1RIUVNaUFlISkhIR1lZR0tHR0NXSlpaWUxDWkxYUVNGVEdaU0xMTE1MSlNLQ1RCTExaWlNaTU1OWVRQWlNYUUhKQ0pZUVhZWlhaUVpDUFNIS1paWVNYQ0RGR01XUVJMTFFYUkZaVExZU1RDVE1KQ1hKSlhISk5YVE5SWlRaRlFZSFFHTExHQ1hTWlNKREpMSkNZRFNKVExOWVhIU1pYQ0dKWllRUFlMRkhESlNCUENDWkhKSkpRWkpRRFlCU1NMTENNWVRUTVFUQkhKUU5OWUdLWVJRWVFNWkdDSktQRENHTVlaSFFMTFNMTENMTUhPTFpHRFlZRlpTTEpDUVpMWUxaUUpFU0hOWUxMSlhHSlhMWVNZWVlYTkJaTEpTU1pDUVFDSllMTFpMVEpZTExaTExCTllMR1FDSFhZWVhPWENYUUtZSlhYWFlLTFhTWFhZUVhDWUtRWFFDU0dZWFhZUVhZR1lUUU9IWEhYUFlYWFhVTENZRVlDSFpaQ0JXUUJCV0pRWlNDU1pTU0xaWUxLREVTSlpXTVlNQ1lUU0RTWFhTQ0pQUVFTUVlMWVlaWUNNREpEWllXQ0JUSlNZREpLQ1lEREpMQkRKSlNPRFpZU1lYUVFZWERISEdRUVlRSERZWFdHTU1NQUpEWUJCQlBQQkNNVVVQTEpaU01UWEVSWEpNSFFOVVRQSkRDQlNTTVNTU1RLSlRTU01NVFJDUExaU1pNTFFEU0RNSk1RUE5RRFhDRllOQkZTRFFYWVhIWUFZS1FZRERMUVlZWVNTWkJZRFNMTlRGUVRaUVBaTUNIREhDWkNXRkRYVE1ZUVNQSFFZWVhTUkdKQ1dUSlRaWlFNR1dKSlRKSFRRSkJCSFdaUFhYSFlRRlhYUVlXWVlIWVNDRFlESEhRTU5NVE1XQ1BCU1pQUFpaR0xNWkZPTExDRldITU1TSlpUVERIWlpZRkZZVFpaR1pZU0tZSlhRWUpaUUJITUJaWkxZR0hHRk1TSFBaRlpTTkNMUEJRU05KWFpTTFhYRlBNVFlKWUdCWExMRExYUFpKWVpKWUhIWkNZV0hKWUxTSkVYRlNaWllXWEtaSkxVWURUTUxZTVFKUFdYWUhYU0tUUUpFWlJQWFhaSEhNSFdRUFdRTFlKSlFKSlpTWkNQSEpMQ0hITlhKTFFXWkpIQk1aWVhCREhIWVBaTEhMSExHRldMQ0hZWVRMSEpYQ0pNU0NQWFNUS1BOSFFYU1JUWVhYVEVTWUpDVExTU0xTVERMTExXV1lIREhSSlpTRkdYVFNZQ1pZTllIVERIV0pTTEhUWkRRREpaWFhRSEdZTFRaUEhDU1FGQ0xOSlRDTFpQRlNUUERZTllMR01KTExZQ1FIWVNTSENIWUxIUVlRVE1aWVBCWVdSRlFZS1FTWVNMWkRRSk1QWFlZU1NSSFpKTllXVFFERlpCV1dUV1dSWENXSEdZSFhNS01ZWVlRTVNNWkhOR0NFUE1MUVFNVENXQ1RNTVBYSlBKSkhGWFlZWlNYWkhUWUJNU1RTWUpUVFFRUVlZTEhZTlBZUVpMQ1laSFpXU01ZTEtGSlhMV0dYWVBKWVRZU1lYWU1aQ0tUVFdMS1NNWlNZTE1QV0xaV1hXUVpTU0FRU1lYWVJIU1NOVFNSQVBYQ1BXQ01HRFhIWFpEWllGSkhHWlRUU0JKSEdZWlNaWVNNWUNMTExYQlRZWEhCQlpKS1NTRE1BTFhIWUNGWUdNUVlQSllDUVhKTExMSkdTTFpHUUxZQ0pDQ1pPVFlYTVRNVFRMTFdUR1BYWU1aTUtMUFNaWlpYSEtRWVNYQ1RZSlpZSFhTSFlYWktYTFpXUFNRUFlISldQSlBXWFFRWUxYU0RITVJTTFpaWVpXVFRDWVhZU1paU0hCU0NDU1RQTFdTU0NKQ0hOTENHQ0hTU1BIWUxIRkhIWEpTWFlMTE5ZTFNaREhaWFlMU1hMV1pZS0NMRFlBWFpDTUREWVNQSlRRSlpMTldRUFNTU1dDVFNUU1pMQkxOWFNNTllZTUpRQlFIUlpXVFlZRENIUUxYS1BaV0JHUVlCS0ZDTVpXUFpMTFlZTFNaWURXSFhQU0JDTUxKQlNDR0JIWExRSFlSTEpYWVNXWFdYWlNMREZITFNMWU5KTFpZRkxZSllDRFJKTEZTWVpGU0xMQ1FZUUZHSllIWVhaTFlMTVNUREpDWUhCWkxMTldMWFhZR1lZSFNNR0RIWFhISExaWkpaWENaWlpDWVFaRk5HV1BZTENQS1BZWVBNQ0xRS0RHWFpHR1dRQkRYWlpLWkZCWFhMWlhKVFBKUFRUQllUU1paRFdTTENIWkhTTFRZWEhRTEhZWFhYWVlaWVNXVFhaS0hMWFpYWlBZSEdDSEtDRlNZSFVUSlJMWEZKWFBUWlRXSFBMWVhGQ1JIWFNIWEtZWFhZSFpRRFhRV1VMSFlITUpUQkZMS0hUWENXSEpGV0pDRlBRUllRWENZWVlRWUdSUFlXU0dTVU5HV0NIS1pEWFlGTFhYSEpKQllaV1RTWFhOQ1lKSllNU1daSlFSTUhYWldGUVNZTFpKWkdCSFlOU0xCR1RUQ1NZQllYWFdYWUhYWVlYTlNRWVhNUVlXUkdZUUxYQkJaTEpTWUxQU1lUSlpZSFlaQVdMUk9SSk1LU0NaSlhYWFlYQ0hEWVhSWVhYSkRUU1FGWExZTFRTRkZZWExNVFlKTUpVWVlZWExUWkNTWFFaUUhaWExZWVhaSEROQlJYWFhKQ1RZSExCUkxNQlJMTEFYS1lMTExKTFlYWExZQ1JZTENKVEdKQ01UTFpMTENZWlpQWlBDWUFXSEpKRllCRFlZWlNNUENLWkRRWVFQQlBDSlBEQ1laTURQQkNZWURZQ05OUExNVE1MUk1GTU1HV1laQlNKR1lHU01aUVFRWlRYTUtRV0dYTExQSkdaQlFDREpKSkZQS0pLQ1hCTEpNU1dNRFRRSlhMRExQUEJYQ1dSQ1FGQkZRSkNaQUhaR01ZS1BIWVlIWllLTkRLWk1CUEpZWFBYWUhMRlBOWVlHWEpEQktYTlhISk1aSlhTVFJTVExEWFNLWllTWUJaWEpMWFlTTEJaWVNMSFhKUEZYUFFOQllMTEpRS1lHWk1DWVpaWU1DQ1NMQ0xIWkZXRldZWFpNV1NYVFlOWEpIUFlZTUNZU1BNSFlTTVlEWVNIUVlaQ0hNSkpNWkNBQUdDRkpCQkhQTFlaWUxYWFNESkdYREhLWFhUWFhOQkhSTUxZSlNMVFhNUkhOTFhRSlhZWkxMWVNXUUdETEJKSERDR0pZUVlDTUhXRk1KWUJNQllKWUpXWU1EUFdIWFFMRFlHUERGWFhCQ0dKU1BDS1JTU1laSk1TTEJaWkpGTEpKSkxHWFpHWVhZWExTWlFZWEJFWFlYSEdDWEJQTERZSFdFVFRXV0NKTUJUWENIWFlRWExMWEZMWVhMTEpMU1NGV0RQWlNNWUpDTE1XWVRDWlBDSFFFS0NRQldMQ1FZRFBMUVBQUVpRRkpRREpIWU1NQ1hUWERSTUpXUkhYQ0paWUxRWERZWU5IWVlIUlNMU1JTWVdXWkpZTVRMVExMR1RRQ0paWUFCVENLWkNKWUNDUUxKWlFYQUxNWllIWVdMV0RYWlhRRExMUVNIR1BKRkpMSkhKQUJDUVpESkdUS0hTU1RDWUpMUFNXWkxYWlhSV0dMRExaUkxaWFRHU0xMTExaTFlYWFdHRFpZR0JEUEhaUEJSTFdTWFFCUEZEV09GTVdITFlQQ0JKQ0NMRE1CWlBCWlpMQ1lRWExET01aQkxaV1BEV1lZR0RTVFRIQ1NRU0NDUlNTU1lTTEZZQkZOVFlKU1pERk5EUERIRFpaTUJCTFNMQ01ZRkZHVEpKUVdGVE1UUEpXRk5MQlpDTU1KVEdCRFpMUUxQWUZIWVlNSllMU0RDSERaSldKQ0NUTEpDTERUTEpKQ1BERFNRRFNTWllCTkRCSkxHR0paWFNYTkxZQ1lCSlhRWUNCWUxaQ0ZaUFBHS0NYWkRaRlpUSkpGSlNKWFpCTlpZSlFUVFlKWUhUWUNaSFlNREpYVFRNUFhTUExaQ0RXU0xTSFhZUFpHVEZNTENKVFlDQlBNR0RLV1lDWVpDRFNaWllIRkxZQ1RZR1dIS0pZWUxTSkNYR1lXSkNCTExDU05EREJUWkJTQ0xZWkNaWlNTUURMTE1RWVlIRlNMUUxMWEZUWUhBQlhHV05ZV1lZUExMU0RMRExMQkpDWVhKWk1MSExKRFhZWVFZVERMTExCVUdCRkRGQkJRSlpaTURQSkhHQ0xHTUpKUEdBRUhIQldDUVhBWEhISFpDSFhZUEhKQVhITFBISlBHUFpKUUNRWkdKSlpaVVpETVFZWUJaWlBIWUhZQldIQVpZSkhZS0ZHRFBGUVNETFpNTEpYS1hHQUxYWkRBR0xNREdYTVdaUVlYWERYWFBGRE1NU1NZTVBGTURNTUtYS1NZWllTSERaS1hTWVNNTVpaWk1TWUROWlpDWlhGUExTVE1aRE5NWENLSk1aVFlZTVpNWlpNU1hISERDWkpFTVhYS0xKU1RMV0xTUUxZSlpMTFpKU1NEUFBNSE5MWkpDWllITVhYSEdaQ0pNREhYVEtHUk1YRldNQ0dNV0tEVEtTWFFNTU1GWlpZREtNU0NMQ01QQ0dNSFNQWFFQWkRTU0xDWEtZWFRXTFdKWUFIWkpHWlFNQ1NOWFlZTU1QTUxLSlhNSExNTFFNWENUS1pNSlFZU1pKU1lTWkhTWUpaSkNEQUpaWUJTRFFKWkdXWlFRWEZLRE1TREpMRldFSEtaUUtKUEVZUFpZU1pDRFdZSkZGTVpaWUxUVERaWkVGTVpMQk5QUExQTFBFUFNaQUxMVFlMS0NLUVpLR0VOUUxXQUdZWFlEUFhMSFNYUVFXUUNRWFFDTEhZWFhNTFlDQ1dMWU1RWVNLR0NITENKTlNaS1BZWktDUVpRTEpQRE1EWkhMQVNYTEJZRFdRTFdETkJRQ1JZRERaVEpZQktCV1NaRFhEVE5QSkRUQ1RRREZYUVFNR05YRUNMVFRCS1BXU0xDVFlRTFBXWVpaS0xQWUdaQ1FRUExMS0NDWUxQUU1aQ1pRQ0xKU0xRWkRKWExEREhQWlFETEpKWFpRRFhZWlFLWkxKQ1lRRFlKUFBZUFFZS0pZUk1QQ0JZTUNYS0xMWkxMRlFQWUxMTE1CU0dMQ1lTU0xSU1lTUVRNWFlYWlFaRkRaVVlTWVpURkZNWlpTTVpRSFpTU0NDTUxZWFdUUFpHWFpKR1pHU0pTR0tEREhUUUdHWkxMQkpEWkxDQkNIWVhZWkhaRllXWFlaWU1TREJaWllKR1RTTVRGWFFZWFFTVERHU0xOWERMUllaWkxSWVlMWFFIVFhTUlRaTkdaWEJOUVFaRk1ZS01aSkJaWU1LQlBOTFlaUEJMTUNOUVlaWlpTSlpISkNUWktIWVpaSlJEWVpITlBYR0xGWlRMS0dKVENUU1NZTExHWlJaQkJRWlpLTFBLTENaWVNTVVlYQkpGUE5KWlpYQ0RXWFpZSlhaWkRKSktHR1JTUkpLTVNNWkpMU0pZV1FTS1lIUUpTWFBKWlpaTFNOU0hSTllQWlRXQ0hLTFBTUlpMWlhZSlFYUUtZU0pZQ1pUTFFaWUJCWUJXWlBRRFdXWVpDWVRKQ0pYQ0tDV0RLS1pYU0dLRFpYV1dZWUpRWVlUQ1lURExMWFdLQ1pLS0xDQ0xaQ1FRRFpMUUxDU0ZRQ0hRSFNGU01RWlpMTkJKSlpCU0pIVFNaRFlTSlFKUERMWkNEQ1dKS0paWkxQWUNHTVpXREpKQlNKUVpTWVpZSEhYSlBCSllEU1NYRFpOQ0dMUU1CVFNGU0JQRFpETFpORkdGSkdGU01QWEpRTE1CTEdRQ1lZWEJRS0RKSlFZUkZLWlRKREhDWktMQlNEWkNGSlRQTExKR1hIWVhaQ1NTWlpYU1RKWUdLR0NLR1lPUVhKUExaUEJQR1RHWUpaR0haUVpaTEJKTFNRRlpHS1FRSlpHWUNaQlpRVExEWFJKWEJTWFhQWlhIWVpZQ0xXRFhKSkhYTUZEWlBGWkhRSFFNUUdLU0xZSFRZQ0dGUlpHTlFYQ0xQRExCWkNTQ1pRTExKQkxIQlpDWVBaWlBQRFlNWlpTR1lIQ0tDUFpKR1NMSkxOU0NEU0xETFhCTVNUTERERkpNS0RKREhaTFpYTFNaUVBRUEdKTExZQkRTWkdRTEJaTFNMS1lZSFpUVE5USllRVFpaUFNaUVpUTExKVFlZTExRTExRWVpRTEJEWkxTTFlZWllNREZTWlNOSExYWk5DWlFaUEJXU0tSRkJTWVpNVEhCTEdKUE1DWlpMU1RMWFNIVENTWVpMWkJMRkVRSExYRkxDSkxZTEpRQ0JaTFpKSEhTU1RCUk1IWFpISlpDTFhGTkJHWEdUUUpDWlRNU0ZaS0pNU1NOWExKS0JIU0pYTlROTFpETlRMTVNKWEdaSllKQ1pYWUpZSldSV1dRTlpUTkZKU1pQWlNIWkpGWVJESlNGU1pKWkJKRlpRWlpIWkxYRllTQlpRTFpTR1lGVFpEQ1NaWFpKQlFNU1pLSlJIWUpaQ0tNSktIQ0hHVFhLWFFHTFhQWEZYVFJUWUxYSlhIRFRTSlhISlpKWFpXWkxDUVNCVFhXWEdYVFhYSFhGVFNES0ZKSFpZSkZKWFJaU0RMTExUUVNRUVpRV1pYU1lRVFdHV0JaQ0daTExZWkJDTE1RUVRaSFpYWlhMSkZSTVlaRkxYWVNRWFhKS1hSTVFEWkRNTVlZQlNRQkhHWk1XRldYR01YTFpQWVlUR1pZQ0NEWFlaWFlXR1NZSllaTkJIUFpKU1FTWVhTWFJURllaR1JIWlRYU1paVEhDQkZDTFNZWFpMWlFNWkxNUExNWFpKWFNGTEJZWk1ZUUhYSlNYUlhTUVpaWlNTTFlGUkNaSlJDUlhISFpYUVlEWUhYU0pKSFpDWFpCVFlOU1lTWEpCUUxQWFpRUFlNTFhaS1lYTFhDSkxDWVNYWFpaTFhETExMSkpZSFpYR1lKV0tKUldZSENQU0dOUlpMRlpXRlpaTlNYR1hGTFpTWFpaWkJGQ1NZSkRCUkpLUkRISEdYSkxKSlRHWEpYWFNUSlRKWExZWFFGQ1NHU1dNU0JDVExRWlpXTFpaS1hKTUxUTUpZSFNEREJYR1pIRExCTVlKRlJaRlNHQ0xZSkJQTUxZU01TWExTWkpRUUhKWkZYR0ZRRlFCUFhaR1lZUVhHWlRDUVdZTFRMR1dTR1dIUkxGU0ZHWkpNR01HQkdUSkZTWVpaR1pZWkFGTFNTUE1MUEZMQ1dCSlpDTEpKTVpMUEpKTFlNUURNWVlZRkJHWUdZWk1MWVpEWFFZWFJRUVFIU1lZWVFYWUxKVFlYRlNGU0xMR05RQ1lIWUNXRkhDQ0NGWFBZTFlQTExaWVhYWFhYS1FISFhTSEpaQ0ZaU0NaSlhDUFpXSEhISEhBUFlMUUFMUFFBRllIWERZTFVLTVpRR0dHRERFU1JOTlpMVFpHQ0hZUFBZU1FKSkhDTExKVE9MTkpQWkxKTEhZTUhFWURZRFNRWUNEREhHWlVORFpDTFpZWkxMWk5UTllaR1NMSFNMUEpKQkRHV1hQQ0RVVEpDS0xLQ0xXS0xMQ0FTU1RLWlpETlFOVFRMWVlaU1NZU1NaWlJZTEpRS0NRREhIQ1JYUlpZREdSR0NXQ0daUUZGRlBQSkZaWU5BS1JHWVdZUVBRWFhGS0pUU1paWFNXWkRERkJCWFRCR1RaS1pOUFpaUFpYWlBKU1pCTVFIS0NZWFlMREtMSk5ZUEtZR0hHRFpKWFhFQUhQTlpLWlRaQ01YQ1hNTUpYTktTWlFOTU5MV0JXV1hKS1lIQ1BTVE1DU1FUWkpZWFRQQ1RQRFROTlBHTExMWlNKTFNQQkxQTFFIRFROSk5MWVlSU1pGRkpGUVdEUEhaRFdNUlpDQ0xPREFYTlNTTllaUkVTVFlKV0pZSkRCQ0ZYTk1XVFRCWUxXU1RTWkdZQkxKUFhHTEJPQ0xIUENCSkxUTVhaTEpZTFpYQ0xUUE5DTENLWFRQWkpTV0NZWFNGWVNaREtOVExCWUpDWUpMTFNUR1FDQlhSWVpYQlhLTFlMSFpMUVpMTlpDWFdKWkxKWkpOQ0pIWE1OWlpHSlpaWFRaSlhZQ1lZQ1hYSllZWEpKWFNTU0pTVFNTVFRQUEdRVENTWFdaRENTWUZQVEZCRkhGQkJMWkpDTFpaREJYR0NYTFFQWEtGWkZMU1lMVFVXQk1RSkhTWkJNRERCQ1lTQ0NMRFhZQ0REUUxZSkpXTVFMTENTR0xKSlNZRlBZWUNDWUxUSkFOVEpKUFdZQ01NR1FZWVNYRFhRTVpIU1pYUEZUV1daUVNXUVJGS0pMWkpRUVlGQlJYSkhIRldKSlpZUUFaTVlGUkhDWVlCWVFXTFBFWENDWlNUWVJMVFRETVFMWUtNQkJHTVlZSlBSS1pOUEJTWFlYQkhZWkRKRE5HSFBNRlNHTVdGWk1GUU1NQkNNWlpDSkpMQ05VWFlRTE1MUllHUVpDWVhaTFdKR0NKQ0dHTUNKTkZZWlpKSFlDUFJSQ01UWlFaWEhGUUdUSlhDQ0pFQVFDUkpZSFBMUUxTWkRKUkJDUUhRRFlSSFlMWVhKU1lNSFpZRFdMREZSWUhCUFlEVFNTQ05XQlhHTFBaTUxaWlRRU1NDUEpNWFhZQ1NKWVRZQ0dIWUNKV1lSWFhMRkVNV0pOTUtMTFNXVFhIWVlZTkNNTUNXSkRRREpaR0xMSldKUktIUFpHR0ZMQ0NTQ1pNQ0JMVEJIQlFKWFFEU1BESlpaR0tHTEZRWVdCWllaSkxUU1RESFFIQ1RDQkNIRkxRTVBXRFNIWVlUUVdDTlpaSlRMQllNQlBEWVlZWFNRS1hXWVlGTFhYTkNXQ1hZUE1BRUxZS0tKTVpaWkJSWFlZUUpGTEpQRkhISFlUWlpYU0dRUU1IU1BHRFpRV0JXUEpIWkpEWVNDUVdaS1RYWFNRTFpZWU1ZU0RaR1JYQ0tLVUpMV1BZU1lTQ1NZWkxSTUxRU1lMSlhCQ1hUTFdEUVpQQ1lDWUtQUFBOU1hGWVpKSlJDRU1IU1pNU1hMWEdMUldHQ1NUTFJTWEJaR0JaR1pUQ1BMVUpMU0xZTFlNVFhNVFpQQUxaWFBYSlRKV1RDWVlaTEJMWEJaTFFNWUxYUEdIRFNMU1NETVhNQkRaWlNYV0hBTUxDWkNQSk1DTkhKWVNOU1lHQ0hTS1FNWlpRRExMS0FCTFdKWFNGTU9DRFhKUlJMWVFaS0pNWUJZUUxZSEVURkpaRlJGS1NSWVhGSlRXRFNYWFNZU1FKWVNMWVhXSkhTTkxYWVlYSEJIQVdISEpaWFdNWUxKQ1NTTEtZRFpUWEJaU1lGRFhHWFpKS0hTWFhZQlNTWERQWU5aV1JQVFFaQ1pFTllHQ1hRRkpZS0pCWk1MSkNNUVFYVU9YU0xZWFhMWUxMSkRaQlRZTUhQRlNUVFFRV0xIT0tZQkxaWkFMWlhRTEhaV1JSUUhMU1RNWVBZWEpKWE1RU0pGTkJYWVhZSlhYWVFZTFRIWUxRWUZNTEtMSlRNTExIU1pXS1pITEpNTEhMSktMSlNUTFFYWUxNQkhITE5MWlhRSkhYQ0ZYWExIWUhKSkdCWVpaS0JYU0NRREpRRFNVSlpZWUhaSEhNR1NYQ1NZTVhGRUJDUVdXUkJQWVlKUVRZWkNZUVlRUVpZSE1XRkZIR1pGUkpGQ0RQWE5UUVlaUERZS0hKTEZSWlhQUFhaREJCR1pRU1RMR0RHWUxDUU1MQ0hITUZZV0xaWVhLSkxZUFFIU1lXTVFRR1FaTUxaSk5TUVhKUVNZSllDQkVIU1hGU1pQWFpXRkxMQkNZWUpEWVREVEhXWlNGSk1RUVlKTE1RWFhMTERUVEtISFlCRlBXVFlZU1FRV05RV0xHV0RFQlpXQ01ZR0NVTEtKWFRNWE1ZSlNYSFlCUldGWU1XRlJYWVFNWFlTWlRaWlRGWUtNTERIUURYV1lZTkxDUllKQkxQU1hDWFlXTFNQUlJKV1hIUVlQSFRZRE5YSEhNTVlXWVRaQ1NRTVRTU0NDREFMV1pUQ1BRUFlKTExRWllKU1dYTVpaTU1ZTE1YQ0xNWENaTVhNWlNRVFpQUFFRQkxQR1hRWkhGTEpKSFlUSlNSWFdaWFNDQ0RMWFRZSkRDUUpYU0xRWUNMWlhMWlpYTVhRUkpNSFJIWkpCSE1GTEpMTUxDTFFOTERYWkxMTFBZUFNZSllTWENRUURDTVFKWlpYSE5QTlhaTUVLTVhIWUtZUUxYU1hUWEpZWUhXRENXRFpIUVlZQkdZQkNZU0NGR1BTSk5aRFlaWkpaWFJaUlFKSllNQ0FOWVJKVExEUFBZWkJTVEpLWFhaWVBGRFdGR1paUlBZTVROR1haUUJZWE5CVUZOUUtSSlFaTUpFR1JaR1lDTEtYWkRTS0tOU1hLQ0xKU1BKWVlaTFFRSllCWlNTUUxMTEtKWFRCS1RZTENDRERCTFNQUEZZTEdZRFRaSllRR0dLUVRURlpYQkRLVFlZSFlCQkZZVFlZQkNMUERZVEdESFJZUk5KU1BUQ1NOWUpRSEtMTExaU0xZRFhYV0JDSlFTUFhCUEpaSkNKRFpGRlhYQlJNTEFaSENTTkRMQkpEU1pCTFBSWlRTV1NCWEJDTExYWExaREpaU0pQWUxZWFhZRlRGRkZCSEpKWEdCWVhKUE1NTVBTU0paSk1UTFlaSlhTV1hUWUxFRFFQSk1ZR1FaSkdESkxRSldKUUxMU0pHSkdZR01TQ0xKSlhEVFlHSlFKUUpDSlpDSkdEWlpTWFFHU0pHR0NYSFFYU05RTFpaQlhIU0daWENYWUxKWFlYWVlERlFRSkhKRlhESENUWEpZUlhZU1FUSlhZRUZZWVNTWVlKWE5DWVpYRlhNU1lTWlhZWVNDSFNIWFpaWkdaWlpHRkpETFRZTE5QWkdZSllaWVlRWlBCWFFCRFpUWkNaWVhYWUhIU1FYU0hESEdRSEpIR1lXU1pUTVpNTEhZWEdFQlRZTFpLUVdZVEpaUkNMRUtZU1REQkNZS1FRU0FZWENKWFdXR1NCSEpZWllESENTSktRQ1hTV1hGTFRZTllaUFpDQ1pKUVRaV0pRRFpaWlFaTEpKWExTQkhQWVhYUFNYU0hIRVpUWEZQVExRWVpaWEhZVFhOQ0ZaWVlIWEdOWE1ZV1hUWlNKUFRISEdZTVhNWFFaWFRTQkNaWUpZWFhUWVlaWVBDUUxNTVNaTUpaWkxMWlhHWFpBQUpaWVhKTVpYV0RYWlNYWkRaWExFWUpKWlFCSFpXWlpaUVRaUFNYWlREU1hKSkpaTllBWlBIWFlZU1JOUURUSFpIWVlLWUpIRFpYWkxTV0NMWUJaWUVDV0NZQ1JZTENYTkhaWURaWURZSkRGUkpKSFRSU1FUWFlYSlJKSE9KWU5YRUxYU0ZTRkpaR0hQWlNYWlNaRFpDUVpCWVlLTFNHU0pIQ1pTSERHUUdYWVpHWENIWFpKV1lRV0dZSEtTU0VRWlpORFpGS1dZU1NUQ0xaU1RTWU1DREhKWFhZV0VZWENaQVlETVBYTURTWFlCU1FNSk1aSk1UWlFMUEpZUVpDR1FIWEpISExYWEhMSERMREpRQ0xEV0JTWEZaWllZU0NIVFlUWVlCSEVDWEhZS0dKUFhISFlaSkZYSFdIQkRaRllaQkNBUE5QR05ZRE1TWEhNTU1NQU1ZTkJZSlRNUFhZWU1DVEhKQlpZRkNHVFlIV1BIRlRXWlpFWlNCWkVHUEZNVFNLRlRZQ01IRkxMSEdQWkpYWkpHWkpZWFpTQkJRU0NaWkxaQ0NTVFBHWE1KU0ZUQ0NaSlpESlhDWUJaTEZDSlNZWkZHU1pMWUJDV1paQllaRFpZUFNXWUpaWFpCRFNZVVhMWlpCWkZZR0NaWEJaSFpGVFBCR1pHRUpCU1RHS0RNRkhZWlpKSFpMTFpaR0pRWkxTRkRKU1NDQlpHUERMRlpGWlNaWVpZWlNZR0NYU05YWENIQ1pYVFpaTEpGWkdRU1FZWFpKUURDQ1pUUUNEWFpKWVFKUUNIWFpURExHU0NYWlNZUUpRVFpXTFFEUVpUUUNIUVFKWllFWlpaUEJXS0RKRkNKUFpUWVBRWVFUVFlOTE1CREtUSlpQUVpRWlpGUFpTQk5KTEdZSkRYSkRaWktaR1FLWERMUFpKVENKRFFCWERKUUpTVENLTlhCWFpNU0xZSkNRTVRKUVdXQ0pRTkpOTExMSEpDV1FUQlpRWURaQ1pQWlpEWllERENZWlpaQ0NKVFRKRlpEUFJSVFpUSkRDUVRRWkRUSk5QTFpCQ0xMQ1RaU1hLSlpRWlBaTEJaUkJUSkRDWEZDWkRCQ0NKSkxUUVFQTERDR1pEQkJaSkNRRENKV1lOTExaWVpDQ0RXTExYV1pMWFJYTlRRUUNaWEtRTFNHREZRVERER0xSTEFKSlRLVVlNS1FMTFRaWVREWVlDWkdKV1lYRFhGUlNLU1RRVEVOUU1SS1FaSEhRS0RMREFaRktZUEJHR1BaUkVCWlpZS1paU1BFR0pYR1lLUVpaWlNMWVNZWVlaV0ZRWllMWlpMWkhXQ0hLWVBRR05QR0JMUExSUkpZWENDU1lZSFNGWkZZQlpZWVRHWlhZTFhDWldYWFpKWkJMRkZMR1NLSFlKWkVZSkhMUExMTExDWkdYRFJaRUxSSEdLTFpaWUhaTFlRU1paSlpRTEpaRkxOQkhHV0xDWkNGSllTUFlYWkxaTFhHQ0NQWkJMTENZQkJCQlVCQkNCUENSTk5aQ1pZUkJGU1JMRENHUVlZUVhZR01RWldUWllUWUpYWUZXVEVIWlpKWVdMQ0NOVFpZSkpaREVEUFpEWlRTWVFKSERZTUJKTllKWkxYVFNTVFBITkRKWFhCWVhRVFpRRERUSlREWVlUR1dTQ1NaUUZMU0hMR0xCQ1pQSERMWVpKWUNLV1RZVFlMQk5ZVFNEU1lDQ1RZU1pZWUVCSEVYSFFEVFdOWUdZQ0xYVFNaWVNUUU1ZR1pBWkNDU1paRFNMWkNMWlJRWFlZRUxKU0JZTVhTWFpURU1CQkxMWVlMTFlURFFZU0hZTVJRV0tGS0JGWE5YU0JZQ0hYQldKWUhUUUJQQlNCV0RaWUxLR1pTS1lIWFFaSlhIWEpYR05MSktaTFlZQ0RYTEZZRkdITEpHSllCWFFMWUJYUVBRR1pUWlBMTkNZUFhESllRWURZTVJCRVNKWVlIS1hYU1RNWFJDWlpZV1hZUVlCTUNMTFlaSFFZWldRWERCWEJaV1pNU0xQRE1ZU0tGTVpLTFpDWVFZQ1pMUVhGWlpZRFFaUFpZR1lKWVpNWlhEWkZZRllUVFFUWkhHU1BDWk1MQ0NZVFpYSkNZVEpNS1NMUFpIWVNOWkxMWVRQWkNUWlpDS1RYREhYWFRRQ1lGS1NNUUNDWVlBWkhUSlBDWUxaTFlKQkpYVFBOWUxKWVlOUlhTWUxNTU5YSlNNWUJDU1lTWUxaWUxYSkpRWUxEWkxQUUJGWlpCTEZORFhRS0NaRllXSEdRTVJEU1hZQ1lUWE5RUUpaWVlQRlpYRFlaRlBSWEVKREdZUUJYUkNORllZUVBHSFlKRFlaWEdSSFRLWUxOV0RaTlRTTVBLTEJUSEJQWVNaQlpUSlpTWlpKVFlZWFpQSFNTWlpCWkNaUFRRRlpNWUZMWVBZQkJKUVhaTVhYREpNVFNZU0tLQkpaWEhKQ0tMUFNNS1lKWkNYVE1MSllYUlpaUVNMWFhRUFlaWE1LWVhYWEpDTEpQUk1ZWUdBRFlTS1FMU05ESFlaS1FYWllaVENHSFpUTE1MV1pZQldTWUNUQkhKSEpGQ1daVFhXWVRLWkxYUVNITFlKWkpYVE1QTFBZQ0dMVEJaWlRMWkpDWUpHRFRDTEtMUExMUVBKTVpQQVBYWVpMS0tUS0RaQ1paQk5aRFlEWVFaSllKR01DVFhMVEdYU1pMTUxIQkdMS0ZXTldaSERYVUhMRk1LWVNMR1hEVFdXRlJKRUpaVFpIWURYWUtTSFdGWkNRU0hLVE1RUUhUWkhZTUpESlNLSFhaSlpCWlpYWU1QQUdRTVNUUFhMU0tMWllOV1JUU1FMU1pCUFNQU0daV1lIVExLU1NTV0haWkxZWVROWEpHTUpTWlNVRldOTFNPWlRYR1hMU0FNTUxCV0xEU1pZTEFLUUNRQ1RNWUNGSkJTTFhDTFpaQ0xYWEtTQlpRQ0xISlBTUVBMU1hYQ0tTTE5IUFNGUVFZVFhZSlpMUUxEWFpRSlpEWVlESk5aUFRVWkRTS0pGU0xKSFlMWlNRWkxCVFhZREdUUUZEQllBWlhEWkhaSk5ISFFCWUtOWEpKUUNaTUxMSlpLU1BMRFlDTEJCTFhLTEVMWEpMQlFZQ1hKWEdDTkxDUVBMWkxaWUpUWkxKR1laRFpQTFRRQ1NYRkRNTllDWEdCVEpEQ1pOQkdCUVlRSldHS0ZIVE5QWVFaUUdCS1BCQllaTVRKRFlUQkxTUU1QU1hUQk5QRFhLTEVNWVlDSllOWkNUTERZS1paWEREWEhRU0hER01aU0pZQ0NUQVlSWkxQWUxUTEtYU0xaQ0dHRVhDTEZYTEtKUlRMUUpBUVpOQ01CWURLS0NYR0xDWkpaWEpIUFRESkpNWlFZS1FTRUNRWkRTSEhBRE1MWkZNTVpCR05USk5OTEdCWUpCUkJUTUxCWUpEWlhMQ0pMUExETFBDUURITFhaTFlDQkxDWFpaSkFESkxOWk1NU1NTTVlCSEJTUUtCSFJTWFhKTVhTRFpOWlBYTEdCUkhXR0dGQ1hHTVNLTExUU0pZWUNRTFRTS1lXWVlIWVdYQlhRWVdQWVdZS1FMU1FQVE5US0hRQ1dEUUtUV1BYWEhDUFRIVFdVTVNTWUhCV0NSV1hISk1LTVpOR1dUTUxLRkdIS0pZTFNZWUNYV0hZRUNMUUhLUUhUVFFLSEZaTERYUVdZWllZREVTQlBLWVJaUEpGWVlaSkNFUURaWkRMQVRaQkJGSkxMQ1hETE1KU1NYRUdZR1NKUVhDV0JYU1NaUERZWkNYRE5ZWFBQWllETFlKQ1pQTFRYTFNYWVpZUlhDWVlZRFlMV1dOWlNBSEpTWVFZSEdZV1dBWFRKWkRBWFlTUkxURFBTU1lZRk5FSkRYWVpITFhMTExaUVpTSk5ZUVlRUVhZSkdIWkdaQ1lKQ0haTFlDRFNIV1NISlpZSlhDTExOWFpKSllZWE5GWE1XRlBZTENZTExBQldEREhXRFhKTUNYWlRaUE1MUVpIU0ZIWllOWlRMTERZV0xTTFhIWU1NWUxNQldXS1lYWUFEVFhZTExESlBZQlBXVVhKTVdNTExTQUZETExZRkxCSEhIQlFRTFRaSkNRSkxESlRGRktNTU1CWVRIWUdEQ1FSRERXUlFKWE5CWVNOV1pEQllZVEJKSFBZQllUVEpYQUFIR1FEUVRNWVNUUVhLQlRaUEtKTFpSQkVRUVNTTUpKQkRKT1RHVEJYUEdCS1RMSFFYSkpKQ1RIWFFEV0pMV1JGV1FHV1NIQ0tSWVNXR0ZUR1lHQlhTRFdEV1JGSFdZVEpKWFhYSllaWVNMUFlZWVBBWVhIWURRS1hTSFhZWEdTS1FIWVdGREREUFBMQ0pMUVFFRVdYS1NZWUtEWVBMVEpUSEtKTFRDWVlISEpUVFBMVFpaQ0RMVEhRS1pYUVlTVEVFWVdZWVpZWFhZWVNUVEpLTExQWk1DWUhRR1hZSFNSTUJYUExMTlFZRFFIWFNYWFdHRFFCU0hZTExQSkpKVEhZSktZUFBUSFlZS1RZRVpZRU5NRFNITENSUFFGREdGWFpQU0ZUTEpYWEpCU1dZWVNLU0ZMWExQUExCQkJMQlNGWEZZWkJTSlNTWUxQQkJGRkZGU1NDSkRTVFpTWFpSWVlTWUZGU1laWVpCSlRCQ1RTQlNESFJUSkpCWVRDWFlKRVlMWENCTkVCSkRTWVhZS0dTSlpCWEJZVEZaV0dFTllISFRIWkhIWEZXR0NTVEJHWEtMU1hZV01UTUJZWEpTVFpTQ0RZUVJDWVRXWFpGSE1ZTUNYTFpOU0RKVFRUWFJZQ0ZZSlNCU0RZRVJYSkxKWEJCREVZTkpHSFhHQ0tHU0NZTUJMWEpNU1pOU0tHWEZCTkJQVEhGSkFBRlhZWEZQWE1ZUFFEVFpDWFpaUFhSU1lXWkRMWUJCS1RZUVBRSlBaWVBaSlpOSlBaSkxaWkZZU0JUVFNMTVBUWlJURFhRU0pFSEJaWUxaREhMSlNRTUxIVFhUSkVDWFNMWlpTUEtUTFpLUVFZRlNZR1lXUENQUUZIUUhZVFFYWktSU0dUVFNRQ1pMUFRYQ0RZWVpYU1FaU0xYTFpNWUNQQ1FCWllYSEJTWExaRExUQ0RYVFlMWkpZWVpQWllaTFRYSlNKWEhMUE1ZVFhDUVJCTFpTU0ZKWlpUTkpZVFhNWUpITEhQUExDWVhRSlFRS1paU0NQWktTV0FMUVNCTENDWkpTWEdXV1dZR1lLVEpCQlpUREtIWEhLR1RHUEJLUVlTTFBYUEpDS0JNTExYRFpTVEJLTEdHUUtRTFNCS0tURlhSTURLQkZUUFpGUlRCQlJGRVJRR1hZSlBaU1NUTEJaVFBTWlFaU0pESExKUUxaQlBNU01NU1hMUVFOSEtOQkxSREROWFhESERESkNZWUdZTFhHWkxYU1lHTVFRR0tIQlBNWFlYTFlUUVdMV0dDUEJNUVhDWVpZRFJKQkhUREpZSFFTSFRNSlNCWVBMV0hMWkZGTllQTUhYWEhQTFRCUVBGQkpXUURCWUdQTlpUUEZaSkdTRERUUVNIWkVBV1paWUxMVFlZQldKS1hYR0hMRktYREpUTVNaU1FZTlpHR1NXUVNQSFRMU1NLTUNMWlhZU1pRWlhOQ0pEUUdaRExGTllLTEpDSkxMWkxNWlpOSFlEU1NIVEhaWkxaWkJCSFFaV1dZQ1JaSExZUVFKQkVZRlhYWFdIU1JYV1FIV1BTTE1TU0taVFRZR1lRUVdSU0xBTEhNSlRRSlNNWFFCSkpaSlhaWVpLWEJZUVhCSlhTSFpUU0ZKTFhNWFpYRkdIS1pTWkdHWUxDTFNBUkpZSFNMTExNWlhFTEdMWFlESllUTEZCSEJQTkxZWkZCQkhQVEdKS1dFVFpIS0pKWFpYWEdMTEpMU1RHU0hKSllRTFFaRktDR05OREpTU1pGREJDVFdXU0VRRkhRSkJTQVFUR1lQUUxCWEJNTVlXWEdTTFpIR0xaR1FZRkxaQllGWkpGUllTRk1CWVpIUUdGV1pTWUZZSkpQSFpCWVlaRkZXT0RHUkxNRlRXTEJaR1lDUVhDREpZR1pZWVlZVFlUWURXRUdBWllIWEpMWllZSExSTUdSWFhaQ0xITkVMSkpUSlRQV0pZQkpKQlhKSlRKVEVFS0hXU0xKUExQU0ZZWlBRUUJETFFKSlRZWVFMWVpLREtTUUpZWVFaTERRVEdKUVlaSlNVQ01SWVFUSFRFSk1GQ1RZSFlQS01IWVpXSkRRRkhZWVhXU0hDVFhSTEpIUVhIQ0NZWVlKTFRLVFRZVE1YR1RDSlRaQVlZT0NaTFlMQlNaWVdKWVRTSllIQllTSEZKTFlHSlhYVE1aWVlMVFhYWVBaTFhZSlpZWllZUE5ITVlNRFlZTEJMSExTWVlRUUxMTkpKWU1TT1lRQlpHRExZWFlMQ1FZWFRTWkVHWEhaR0xIV0JMSkhFWVhUV1FNQUtCUFFDR1lTSEhFR1FDTVdZWVdMSllKSFlZWkxMSkpZTEhaWUhNR1NMSkxKWENKSllDTFlDSlBDUFpKWkpNTVlMQ1FMTlFMSlFKU1hZSk1MU1pMSlFMWUNNTUhDRk1NRlBRUU1GWUxRTUNGRlFNTU1NSE1aTkZISEpHVFRISEtIU0xOQ0hIWVFEWFRNTVFEQ1laWVhZUU1ZUVlMVERDWVlZWkFaWkNZTVpZRExaRkZGTU1ZQ1FaV1paTUFCVEJZWlRETU5aWkdHREZUWVBDR1FZVFRTU0ZGV0ZEVFpRU1NZU1RXWEpIWFlUU1hYWUxCWVFIV1dLWEhaWFdaTk5aWkpaSkpRSkNDQ0hZWVhCWlhaQ1laVExMQ1FYWU5KWUNZWUNZTlpaUVlZWUVXWUNaRENKWUNDSFlKTEJUWllZQ1FXTVBXUFlNTEdLRExETEdLUVFCR1lDSEpYWVwiXHJcblx0XHRcdHRoaXMuZnVsbF9kaWN0ID0ge1xyXG5cdFx0XHRcdFwiYVwiOiBcIlxcdTU1NGFcXHU5NjNmXFx1OTUxNVwiLFxyXG5cdFx0XHRcdFwiYWlcIjogXCJcXHU1N2MzXFx1NjMyOFxcdTU0Y2VcXHU1NTA5XFx1NTRjMFxcdTc2OTFcXHU3NjRjXFx1ODUzY1xcdTc3ZWVcXHU4MjdlXFx1Nzg4ZFxcdTcyMzFcXHU5Njk4XFx1OGJmNlxcdTYzNzFcXHU1NWYzXFx1NTVjY1xcdTVhZDJcXHU3NDc3XFx1NjZhN1xcdTc4MzlcXHU5NTNmXFx1OTcyZFwiLFxyXG5cdFx0XHRcdFwiYW5cIjogXCJcXHU5NzhkXFx1NmMyOFxcdTViODlcXHU0ZmZhXFx1NjMwOVxcdTY2OTdcXHU1Y2I4XFx1ODBmYVxcdTY4NDhcXHU4YzE5XFx1NTdlZlxcdTYzZGVcXHU3MmI0XFx1NWViNVxcdTY4NDlcXHU5NGY1XFx1OWU0Y1xcdTk4NzhcXHU5ZWVmXCIsXHJcblx0XHRcdFx0XCJhbmdcIjogXCJcXHU4MGFlXFx1NjYwMlxcdTc2Y2VcIixcclxuXHRcdFx0XHRcImFvXCI6IFwiXFx1NTFmOVxcdTY1NTZcXHU3MWFjXFx1N2ZmMVxcdTg4ODRcXHU1MGIyXFx1NTk2NVxcdTYxY2FcXHU2ZmIzXFx1NTc3M1xcdTYyZDdcXHU1NWY3XFx1NTY2MlxcdTVjOTlcXHU1ZWQyXFx1OTA2OFxcdTVhYWFcXHU5YTljXFx1ODA3MVxcdTg3YWZcXHU5M2NhXFx1OWNjY1xcdTkzZDZcIixcclxuXHRcdFx0XHRcImJhXCI6IFwiXFx1ODJhZFxcdTYzNGNcXHU2MjUyXFx1NTNlZFxcdTU0MjdcXHU3YjA2XFx1NTE2YlxcdTc1YTRcXHU1ZGY0XFx1NjJkNFxcdThkY2JcXHU5Nzc2XFx1NjI4YVxcdTgwMTlcXHU1NzVkXFx1OTczOFxcdTdmNjJcXHU3MjM4XFx1ODMwN1xcdTgzZGRcXHU4NDA2XFx1NjM2ZFxcdTVjOWNcXHU3MDVlXFx1Njc3N1xcdTk0YWZcXHU3YzkxXFx1OWM4NVxcdTliNDNcIixcclxuXHRcdFx0XHRcImJhaVwiOiBcIlxcdTc2N2RcXHU2N2NmXFx1NzY3ZVxcdTY0NDZcXHU0ZjcwXFx1OGQyNVxcdTYyZGNcXHU3YTE3XFx1ODU5Y1xcdTYzYjBcXHU5N2I0XCIsXHJcblx0XHRcdFx0XCJiYW5cIjogXCJcXHU2NTkxXFx1NzNlZFxcdTY0MmNcXHU2MjczXFx1ODIyY1xcdTk4ODFcXHU2NzdmXFx1NzI0OFxcdTYyNmVcXHU2MmNjXFx1NGYzNFxcdTc0ZTNcXHU1MzRhXFx1NTI5ZVxcdTdlY2FcXHU5NjJhXFx1NTc0MlxcdThjNzNcXHU5NGEzXFx1NzYyMlxcdTc2NGRcXHU4MjI4XCIsXHJcblx0XHRcdFx0XCJiYW5nXCI6IFwiXFx1OTBhNlxcdTVlMmVcXHU2ODg2XFx1Njk5Y1xcdTgxODBcXHU3ZWQxXFx1NjhkMlxcdTc4YzVcXHU4NjhjXFx1OTU1MVxcdTUwOGRcXHU4YzI0XFx1ODRhMVxcdTg3ODNcIixcclxuXHRcdFx0XHRcImJhb1wiOiBcIlxcdTgyZGVcXHU4MGRlXFx1NTMwNVxcdTg5MTJcXHU5NmY5XFx1NGZkZFxcdTU4MjFcXHU5OTcxXFx1NWI5ZFxcdTYyYjFcXHU2MmE1XFx1NjZiNFxcdThjNzlcXHU5YzhkXFx1NzIwNlxcdTUyZjlcXHU4NDQ2XFx1NWI4MFxcdTViNjJcXHU3MTcyXFx1OWUyOFxcdTg5MTNcXHU4ZGI1XFx1OWY4NVwiLFxyXG5cdFx0XHRcdFwiYm9cIjogXCJcXHU1MjY1XFx1ODU4NFxcdTczYmJcXHU4M2UwXFx1NjRhZFxcdTYyZThcXHU5NGI1XFx1NmNlMlxcdTUzNWFcXHU1MmMzXFx1NjQwZlxcdTk0YzJcXHU3Yjk0XFx1NGYyZlxcdTVlMWJcXHU4MjM2XFx1ODExNlxcdTgxOGFcXHU2ZTI0XFx1NmNjYVxcdTlhNzNcXHU0ZWIzXFx1ODU0M1xcdTU1NzVcXHU5OTdkXFx1NmE5N1xcdTY0ZDhcXHU3OTM0XFx1OTRiOVxcdTllNDFcXHU3YzM4XFx1OGRkYlwiLFxyXG5cdFx0XHRcdFwiYmVpXCI6IFwiXFx1Njc2ZlxcdTc4OTFcXHU2MGIyXFx1NTM1MVxcdTUzMTdcXHU4Zjg4XFx1ODBjY1xcdThkMWRcXHU5NGExXFx1NTAwZFxcdTcyYzhcXHU1OTA3XFx1NjBlYlxcdTcxMTlcXHU4OGFiXFx1NWI1YlxcdTk2NDJcXHU5MGI2XFx1NTdlNFxcdTg0ZDNcXHU1NDU3XFx1NjAyYlxcdTYwOTZcXHU3ODlhXFx1OWU0ZVxcdTg5MTlcXHU5NDNlXCIsXHJcblx0XHRcdFx0XCJiZW5cIjogXCJcXHU1OTU0XFx1ODJlZlxcdTY3MmNcXHU3YjI4XFx1NzU1YVxcdTU3NGNcXHU5NTFiXCIsXHJcblx0XHRcdFx0XCJiZW5nXCI6IFwiXFx1NWQyOVxcdTdlZjdcXHU3NTJkXFx1NmNmNVxcdThlNjZcXHU4ZmY4XFx1NTUyYVxcdTU2MjNcXHU3NTBmXCIsXHJcblx0XHRcdFx0XCJiaVwiOiBcIlxcdTkwM2NcXHU5ZjNiXFx1NmJkNFxcdTkxMTlcXHU3YjE0XFx1NWY3Y1xcdTc4YTdcXHU4NGQ2XFx1ODUzZFxcdTZiZDVcXHU2YmQ5XFx1NmJkNlxcdTVlMDFcXHU1ZTg3XFx1NzVmOVxcdTk1ZWRcXHU2NTVkXFx1NWYwYVxcdTVmYzVcXHU4ZjlmXFx1NThjMVxcdTgxYzJcXHU5MDdmXFx1OTY1YlxcdTUzMTVcXHU0ZWYzXFx1NGZmZVxcdTgyOThcXHU4MzVjXFx1ODM3OFxcdTU0MjFcXHU1NGQ0XFx1NzJmNFxcdTVlYjNcXHU2MTBlXFx1NmVkN1xcdTZmZGVcXHU1ZjNjXFx1NTlhM1xcdTVhNjJcXHU1YjE2XFx1NzRhN1xcdThkMzJcXHU3NTQwXFx1OTRjYlxcdTc5ZDVcXHU4OGU4XFx1N2I1YVxcdTdiODVcXHU3YmU2XFx1ODIyZFxcdTg5NWVcXHU4ZGY4XFx1OWFjMFwiLFxyXG5cdFx0XHRcdFwiYmlhblwiOiBcIlxcdTk3YWRcXHU4ZmI5XFx1N2YxNlxcdThkMmNcXHU2MjQxXFx1NGZiZlxcdTUzZDhcXHU1MzVlXFx1OGZhOFxcdThmYTlcXHU4ZmFiXFx1OTA0ZFxcdTUzM2VcXHU1ZjAxXFx1ODJjNFxcdTVmZWRcXHU2Yzc0XFx1N2YwZlxcdTcxNzhcXHU3ODJkXFx1NzhhNVxcdTdhMzlcXHU3YTg2XFx1ODc1OVxcdTdiM2VcXHU5Y2NhXCIsXHJcblx0XHRcdFx0XCJiaWFvXCI6IFwiXFx1NjgwN1xcdTVmNmFcXHU4MTk4XFx1ODg2OFxcdTVhNGFcXHU5YWEwXFx1OThkMVxcdTk4ZDlcXHU5OGRhXFx1NzA2Y1xcdTk1NTZcXHU5NTczXFx1NzYyZFxcdTg4ZjFcXHU5Y2Q0XCIsXHJcblx0XHRcdFx0XCJiaWVcIjogXCJcXHU5Y2Q2XFx1NjE4YlxcdTUyMmJcXHU3NjJhXFx1OGU2OVxcdTljZDhcIixcclxuXHRcdFx0XHRcImJpblwiOiBcIlxcdTVmNmNcXHU2NThjXFx1NmZkMlxcdTZlZThcXHU1YmJlXFx1NjQ0OFxcdTUwYTdcXHU2ZDVjXFx1N2YyNFxcdTczYTJcXHU2YmExXFx1ODE5MVxcdTk1NTRcXHU5YWNjXFx1OWIxM1wiLFxyXG5cdFx0XHRcdFwiYmluZ1wiOiBcIlxcdTUxNzVcXHU1MWIwXFx1NjdjNFxcdTRlMTlcXHU3OWM5XFx1OTk3Y1xcdTcwYjNcXHU3NWM1XFx1NWU3NlxcdTc5ODBcXHU5MGI0XFx1NjQ1MlxcdTdlZTBcXHU2NzhiXFx1NjlkZlxcdTcxZjlcIixcclxuXHRcdFx0XHRcImJ1XCI6IFwiXFx1NjM1NVxcdTUzNWNcXHU1NGZhXFx1ODg2NVxcdTU3ZTBcXHU0ZTBkXFx1NWUwM1xcdTZiNjVcXHU3YzNmXFx1OTBlOFxcdTYwMTZcXHU2MmNhXFx1NTM1ZlxcdTkwMGJcXHU3NGZmXFx1NjY2MVxcdTk0OWFcXHU5MWFkXCIsXHJcblx0XHRcdFx0XCJjYVwiOiBcIlxcdTY0ZTZcXHU1NjkzXFx1NzkyNFwiLFxyXG5cdFx0XHRcdFwiY2FpXCI6IFwiXFx1NzMxY1xcdTg4YzFcXHU2NzUwXFx1NjI0ZFxcdThkMjJcXHU3NzZjXFx1OGUyOVxcdTkxYzdcXHU1ZjY5XFx1ODNkY1xcdTg1MjFcIixcclxuXHRcdFx0XHRcImNhblwiOiBcIlxcdTk5MTBcXHU1M2MyXFx1ODY5NVxcdTZiOGJcXHU2MGVkXFx1NjBlOFxcdTcwN2ZcXHU5YTk2XFx1NzRhOFxcdTdjYjJcXHU5ZWVhXCIsXHJcblx0XHRcdFx0XCJjYW5nXCI6IFwiXFx1ODJjZFxcdTgyMzFcXHU0ZWQzXFx1NmNhN1xcdTg1Y2ZcXHU0ZjI3XCIsXHJcblx0XHRcdFx0XCJjYW9cIjogXCJcXHU2NGNkXFx1N2NkOVxcdTY5ZmRcXHU2NmY5XFx1ODM0OVxcdTgyNzlcXHU1NjA4XFx1NmYxNVxcdTg3YWNcXHU4MjVhXCIsXHJcblx0XHRcdFx0XCJjZVwiOiBcIlxcdTUzOTVcXHU3YjU2XFx1NGZhN1xcdTUxOGNcXHU2ZDRiXFx1NTIwMlxcdTVlM2JcXHU2MDdiXCIsXHJcblx0XHRcdFx0XCJjZW5nXCI6IFwiXFx1NWM0MlxcdThlNmRcXHU1NjRjXCIsXHJcblx0XHRcdFx0XCJjaGFcIjogXCJcXHU2M2QyXFx1NTNjOVxcdTgzMmNcXHU4MzM2XFx1NjdlNVxcdTc4YjRcXHU2NDNkXFx1NWJkZlxcdTVjOTRcXHU1ZGVlXFx1OGJlN1xcdTczMzlcXHU5OTg3XFx1NmM0YVxcdTU5ZjlcXHU2NzQ4XFx1Njk0MlxcdTY5Y2VcXHU2YWFiXFx1OTQ5N1xcdTk1MzhcXHU5NTcyXFx1ODg2OVwiLFxyXG5cdFx0XHRcdFwiY2hhaVwiOiBcIlxcdTYyYzZcXHU2N2Y0XFx1OGM3YVxcdTRmYWFcXHU4MzA4XFx1NzYyNVxcdTg2N2ZcXHU5Zjg3XCIsXHJcblx0XHRcdFx0XCJjaGFuXCI6IFwiXFx1NjQwMFxcdTYzYmFcXHU4NzQ5XFx1OTk4YlxcdThjMTdcXHU3ZjIwXFx1OTRmMlxcdTRlYTdcXHU5NjEwXFx1OThhNFxcdTUxODFcXHU4YzA0XFx1OGMzNlxcdTg0ODdcXHU1ZWRiXFx1NWZjZlxcdTZmN2FcXHU2ZmI2XFx1NWI3MVxcdTdmYmNcXHU1YTc1XFx1NWIxN1xcdTlhYTNcXHU4OWM3XFx1Nzk4NVxcdTk1NjFcXHU4OGUzXFx1ODdmZVxcdThlOTRcIixcclxuXHRcdFx0XHRcImNoYW5nXCI6IFwiXFx1NjYwY1xcdTczMTZcXHU1NzNhXFx1NWMxZFxcdTVlMzhcXHU5NTdmXFx1NTA3ZlxcdTgwYTBcXHU1MzgyXFx1NjU1ZVxcdTc1NDVcXHU1NTMxXFx1NTAyMVxcdTRmMjVcXHU5YjJmXFx1ODJjY1xcdTgzZDZcXHU1ZjljXFx1NjAwNVxcdTYwZGRcXHU5NjBhXFx1NWEzY1xcdTVhZTZcXHU2NjM2XFx1NmMwNVxcdTljYjNcIixcclxuXHRcdFx0XHRcImNoYW9cIjogXCJcXHU4ZDg1XFx1NjI4NFxcdTk0OWVcXHU2NzFkXFx1NTYzMlxcdTZmNmVcXHU1ZGUyXFx1NTQzNVxcdTcwOTJcXHU2MDBhXFx1N2VjOVxcdTY2NDFcXHU4MDE2XCIsXHJcblx0XHRcdFx0XCJjaGVcIjogXCJcXHU4ZjY2XFx1NjI2ZlxcdTY0YTRcXHU2M2EzXFx1NWY3YlxcdTZmODhcXHU1NzdjXFx1NWM2ZVxcdTc4MTdcIixcclxuXHRcdFx0XHRcImNoZW5cIjogXCJcXHU5MGY0XFx1ODFlM1xcdThmYjBcXHU1YzE4XFx1NjY2OFxcdTVmZjFcXHU2Yzg5XFx1OTY0OFxcdThkODFcXHU4ODZjXFx1NzlmMFxcdThjMGNcXHU2MmJiXFx1NTVkNFxcdTViYjhcXHU3NDFiXFx1Njk4N1xcdTgwOWNcXHU4MGMyXFx1Nzg5Y1xcdTlmODBcIixcclxuXHRcdFx0XHRcImNoZW5nXCI6IFwiXFx1NjQ5MVxcdTU3Y2VcXHU2YTU5XFx1NjIxMFxcdTU0NDhcXHU0ZTU4XFx1N2EwYlxcdTYwZTlcXHU2Zjg0XFx1OGJkYVxcdTYyN2ZcXHU5MDFlXFx1OWE4YlxcdTc5ZTRcXHU1N2Q1XFx1NWQ0YVxcdTVmYjVcXHU2ZDQ4XFx1NjdhOFxcdTY3ZmRcXHU2YTE4XFx1NjY1ZlxcdTU4NGRcXHU3N2EwXFx1OTRkNlxcdTg4Y2VcXHU4NmNmXFx1OTE3MlwiLFxyXG5cdFx0XHRcdFwiY2hpXCI6IFwiXFx1NTQwM1xcdTc1ZjRcXHU2MzAxXFx1NTMxOVxcdTZjNjBcXHU4ZmRmXFx1NWYxYlxcdTlhNzBcXHU4MDNiXFx1OWY3ZlxcdTRmODhcXHU1YzNhXFx1OGQ2NFxcdTdmYzVcXHU2NWE1XFx1NzBiZFxcdTUwYmFcXHU1ODgwXFx1ODJhYVxcdTgzMGNcXHU2NDBiXFx1NTNmMVxcdTU0ZTdcXHU1NTdiXFx1NTVlNFxcdTVmNzNcXHU5OTZjXFx1NmNiMlxcdTVhYjhcXHU2NTU1XFx1ODBkZFxcdTc3MTlcXHU3NzM1XFx1OWUzMVxcdTc2MWJcXHU4OTJiXFx1ODZhOVxcdTg3YWRcXHU3YjFlXFx1N2JlYVxcdThjNDlcXHU4ZTA1XFx1OGUxZlxcdTliNTFcIixcclxuXHRcdFx0XHRcImNob25nXCI6IFwiXFx1NTE0NVxcdTUxYjJcXHU4NjZiXFx1NWQwN1xcdTViYTBcXHU4MzNhXFx1NWZlMVxcdTYxYTdcXHU5NGYzXFx1ODI1ZlwiLFxyXG5cdFx0XHRcdFwiY2hvdVwiOiBcIlxcdTYyYmRcXHU5MTZjXFx1NzU3NFxcdThlMGNcXHU3YTIwXFx1NjEwMVxcdTdiNzlcXHU0ZWM3XFx1N2VmOFxcdTc3ODVcXHU0ZTExXFx1NGZlNlxcdTU3MzNcXHU1ZTMxXFx1NjBjNlxcdTZlYjRcXHU1OWFmXFx1NzYzM1xcdTk2ZTBcXHU5YzhiXCIsXHJcblx0XHRcdFx0XCJjaHVcIjogXCJcXHU4MWVkXFx1NTIxZFxcdTUxZmFcXHU2YTcxXFx1NTNhOFxcdThlODdcXHU5NTA0XFx1OTZjZlxcdTZlYzFcXHU5NjY0XFx1Njk1YVxcdTc4NDBcXHU1MGE4XFx1NzdkN1xcdTY0MTBcXHU4OWU2XFx1NTkwNFxcdTRlOGRcXHU1MjBkXFx1NjFiN1xcdTdlY2NcXHU2Nzc1XFx1Njk2ZVxcdTZhMTdcXHU4NzBkXFx1OGU3MFxcdTllZGNcIixcclxuXHRcdFx0XHRcImNodWFuXCI6IFwiXFx1NjNlM1xcdTVkZGRcXHU3YTdmXFx1NjkzZFxcdTRmMjBcXHU4MjM5XFx1NTU5OFxcdTRlMzJcXHU2M2JlXFx1ODIxYlxcdTYwZjRcXHU5MDQ0XFx1NWRkYlxcdTZjMWFcXHU5NDhmXFx1OTU2OVxcdTgyMjFcIixcclxuXHRcdFx0XHRcImNodWFuZ1wiOiBcIlxcdTc1YWVcXHU3YTk3XFx1NWU2MlxcdTVlOGFcXHU5NWVmXFx1NTIxYlxcdTYwMDZcIixcclxuXHRcdFx0XHRcImNodWlcIjogXCJcXHU1NDM5XFx1NzA4YVxcdTYzNzZcXHU5NTI0XFx1NTc4MlxcdTk2NzJcXHU2OGYwXFx1NjljY1wiLFxyXG5cdFx0XHRcdFwiY2h1blwiOiBcIlxcdTY2MjVcXHU2OTNmXFx1OTE4N1xcdTU1MDdcXHU2ZGYzXFx1N2VhZlxcdTg4MjJcXHU0ZmMzXFx1ODNiY1xcdTZjOGNcXHU4MGFiXFx1NjcxMFxcdTllNTFcXHU4NzdkXCIsXHJcblx0XHRcdFx0XCJjaHVvXCI6IFwiXFx1NjIzM1xcdTdlZjBcXHU4NTFmXFx1OGZiNlxcdThmOGRcXHU5NTVlXFx1OGUxNFxcdTlmOGFcIixcclxuXHRcdFx0XHRcImNpXCI6IFwiXFx1NzViNVxcdTgzMjhcXHU3OGMxXFx1OTZjY1xcdThmOWVcXHU2MTQ4XFx1NzRmN1xcdThiY2RcXHU2YjY0XFx1NTIzYVxcdThkNTBcXHU2YjIxXFx1ODM2MFxcdTU0NzJcXHU1ZDZmXFx1OWU1YVxcdTg3ODVcXHU3Y2NkXFx1OGQ5MVwiLFxyXG5cdFx0XHRcdFwiY29uZ1wiOiBcIlxcdTgwNmFcXHU4NDcxXFx1NTZmMVxcdTUzMDZcXHU0ZWNlXFx1NGUxYlxcdTUwNmNcXHU4MmMxXFx1NmRkOVxcdTlhYTJcXHU3NDJlXFx1NzQ4MVxcdTY3OWVcIixcclxuXHRcdFx0XHRcImN1XCI6IFwiXFx1NTFkMVxcdTdjOTdcXHU5MThiXFx1N2MwN1xcdTczMWRcXHU2YjgyXFx1OGU1OVwiLFxyXG5cdFx0XHRcdFwiY3VhblwiOiBcIlxcdThlN2ZcXHU3YmUxXFx1N2E5Y1xcdTZjNDZcXHU2NGJhXFx1NjYxNVxcdTcyMjhcIixcclxuXHRcdFx0XHRcImN1aVwiOiBcIlxcdTY0NjdcXHU1ZDE0XFx1NTBhY1xcdTgxMDZcXHU3NjAxXFx1N2NiOVxcdTZkZWNcXHU3ZmUwXFx1ODQwM1xcdTYwYjRcXHU3NDgwXFx1NjliMVxcdTk2YjlcIixcclxuXHRcdFx0XHRcImN1blwiOiBcIlxcdTY3NTFcXHU1YjU4XFx1NWJmOFxcdTc4Y2JcXHU1ZmQ2XFx1NzZiNFwiLFxyXG5cdFx0XHRcdFwiY3VvXCI6IFwiXFx1NjRhZVxcdTY0MTNcXHU2M2FhXFx1NjMyYlxcdTk1MTlcXHU1MzlkXFx1ODExZVxcdTk1MDlcXHU3N2VjXFx1NzVlNFxcdTllN2VcXHU4ZTQ5XFx1OGU5Y1wiLFxyXG5cdFx0XHRcdFwiZGFcIjogXCJcXHU2NDJkXFx1OGZiZVxcdTdiNTRcXHU3NjI5XFx1NjI1M1xcdTU5MjdcXHU4MDM3XFx1NTRkMlxcdTU1ZDJcXHU2MDFiXFx1NTliMlxcdTc1YjhcXHU4OTIxXFx1N2IyYVxcdTk3N2NcXHU5NzkxXCIsXHJcblx0XHRcdFx0XCJkYWlcIjogXCJcXHU1NDQ2XFx1NmI3OVxcdTUwYTNcXHU2MjM0XFx1NWUyNlxcdTZiODZcXHU0ZWUzXFx1OGQzN1xcdTg4OGJcXHU1Zjg1XFx1OTAyZVxcdTYwMjBcXHU1N2VkXFx1NzUxOVxcdTU0NTRcXHU1Y2IxXFx1OGZlOFxcdTkwMmZcXHU5YTgwXFx1N2VkMFxcdTczYjNcXHU5ZWRiXCIsXHJcblx0XHRcdFx0XCJkYW5cIjogXCJcXHU4MDNkXFx1NjJjNVxcdTRlMzlcXHU1MzU1XFx1OTBmOFxcdTYzYjhcXHU4MGM2XFx1NjVlNlxcdTZjMmVcXHU0ZjQ2XFx1NjBlZVxcdTZkZTFcXHU4YmRlXFx1NWYzOVxcdTg2Y2JcXHU0ZWJiXFx1NTEwYlxcdTUzNjlcXHU4NDBmXFx1NTU1NlxcdTZmYjlcXHU2YTkwXFx1NmI5YVxcdThkNTVcXHU3NzA4XFx1NzYwNVxcdTgwNDNcXHU3YmFhXCIsXHJcblx0XHRcdFx0XCJkYW5nXCI6IFwiXFx1NWY1M1xcdTYzMjFcXHU1MTVhXFx1ODM2MVxcdTY4NjNcXHU4YzIwXFx1NTFmY1xcdTgzZWFcXHU1Yjk1XFx1NzgwMFxcdTk0ZGJcXHU4OGM2XCIsXHJcblx0XHRcdFx0XCJkYW9cIjogXCJcXHU1MjAwXFx1NjM2M1xcdThlNDhcXHU1MDEyXFx1NWM5YlxcdTc5NzdcXHU1YmZjXFx1NTIzMFxcdTdhM2JcXHU2MGJjXFx1OTA1M1xcdTc2ZDdcXHU1M2U4XFx1NTU0MVxcdTVmYzlcXHU2ZDJlXFx1NmMxOFxcdTcxMThcXHU1ZmQxXFx1N2U5YlwiLFxyXG5cdFx0XHRcdFwiZGVcIjogXCJcXHU1ZmI3XFx1NWY5N1xcdTc2ODRcXHU5NTFkXCIsXHJcblx0XHRcdFx0XCJkZW5nXCI6IFwiXFx1OGU2Y1xcdTcwNmZcXHU3NjdiXFx1N2I0OVxcdTc3YWFcXHU1MWYzXFx1OTA5M1xcdTU2NTRcXHU1ZDlkXFx1NjIyNVxcdTc4ZjRcXHU5NTZiXFx1N2MyNlwiLFxyXG5cdFx0XHRcdFwiZGlcIjogXCJcXHU1ODI0XFx1NGY0ZVxcdTZlZjRcXHU4ZmVhXFx1NjU0Y1xcdTdiMWJcXHU3MmM0XFx1NmRhNFxcdTdmZGZcXHU1YWUxXFx1NjJiNVxcdTVlOTVcXHU1NzMwXFx1ODQ4MlxcdTdiMmNcXHU1ZTFkXFx1NWYxZlxcdTkwMTJcXHU3ZjE0XFx1NmMxMFxcdTdjNzRcXHU4YmNiXFx1OGMxYlxcdTkwYjhcXHU1NzdiXFx1ODM5Y1xcdTgzN2JcXHU1NjAwXFx1NWEyM1xcdTY3ZTJcXHU2OGUzXFx1ODljY1xcdTc4MjVcXHU3OGIyXFx1Nzc0N1xcdTk1NWRcXHU3ZjlkXFx1OWFiNlwiLFxyXG5cdFx0XHRcdFwiZGlhblwiOiBcIlxcdTk4YTBcXHU2MzgyXFx1NmVjN1xcdTc4OThcXHU3MGI5XFx1NTE3OFxcdTk3NWJcXHU1N2FiXFx1NzUzNVxcdTRmNDNcXHU3NTM4XFx1NWU5N1xcdTYwZTZcXHU1OTYwXFx1NmRjMFxcdTZiYmZcXHU0ZTM2XFx1OTYzZFxcdTU3NmJcXHU1N2RkXFx1NWRjNVxcdTczYjdcXHU3NjVjXFx1NzY2YlxcdTdjMWZcXHU4ZTJlXCIsXHJcblx0XHRcdFx0XCJkaWFvXCI6IFwiXFx1Nzg4OVxcdTUzZmNcXHU5NmQ1XFx1NTFjYlxcdTUyMDFcXHU2Mzg5XFx1NTQwYVxcdTk0OTNcXHU4YzAzXFx1OGY3YVxcdTk0ZGVcXHU4NzI5XFx1N2M5Y1xcdThjODJcIixcclxuXHRcdFx0XHRcImRpZVwiOiBcIlxcdThkY2NcXHU3MjM5XFx1Nzg5ZlxcdTg3NzZcXHU4ZmVkXFx1OGMwZFxcdTUzZTBcXHU0ZjVhXFx1NTdhNFxcdTU4MWVcXHU2M2YyXFx1NTU4YlxcdTZlMmJcXHU4Zjc2XFx1NzI1MlxcdTc0ZGVcXHU4OTM2XFx1ODAwYlxcdThlNDBcXHU5Y2JkXFx1OWNjZVwiLFxyXG5cdFx0XHRcdFwiZGluZ1wiOiBcIlxcdTRlMDFcXHU3NmVmXFx1NTNlZVxcdTk0ODlcXHU5ODc2XFx1OWYwZVxcdTk1MmRcXHU1YjlhXFx1OGJhMlxcdTRlMjJcXHU0ZWMzXFx1NTU3NlxcdTczOGVcXHU4MTVhXFx1Nzg4N1xcdTc1M2FcXHU5NGU0XFx1NzU5NFxcdTgwMzVcXHU5MTRhXCIsXHJcblx0XHRcdFx0XCJkb25nXCI6IFwiXFx1NGUxY1xcdTUxYWNcXHU4NDYzXFx1NjFjMlxcdTUyYThcXHU2ODBiXFx1NGY5N1xcdTYwNmJcXHU1MWJiXFx1NmQxZVxcdTU3OGNcXHU1NDlhXFx1NWNiZFxcdTVjZDJcXHU1OTAyXFx1NmMyMVxcdTgwZThcXHU4MGY0XFx1Nzg1MFxcdTllMmJcIixcclxuXHRcdFx0XHRcImRvdVwiOiBcIlxcdTUxNWNcXHU2Mjk2XFx1NjU5N1xcdTk2NjFcXHU4YzQ2XFx1OTAxN1xcdTc1ZDhcXHU4NTM4XFx1OTRhZFxcdTdhYTZcXHU3YWFjXFx1ODZhYVxcdTdiZmNcXHU5MTYxXCIsXHJcblx0XHRcdFx0XCJkdVwiOiBcIlxcdTkwZmRcXHU3NzYzXFx1NmJkMlxcdTcyOGFcXHU3MmVjXFx1OGJmYlxcdTU4MzVcXHU3Nzc5XFx1OGQ0Y1xcdTY3NWNcXHU5NTQwXFx1ODA5YVxcdTVlYTZcXHU2ZTIxXFx1NTk5MlxcdTgyOGZcXHU1NjFmXFx1NmUwZVxcdTY5MWZcXHU2YTUwXFx1NzI0ZFxcdTg4MzlcXHU3YjAzXFx1OWFkMVxcdTllZTlcIixcclxuXHRcdFx0XHRcImR1YW5cIjogXCJcXHU3YWVmXFx1NzdlZFxcdTk1M2JcXHU2YmI1XFx1NjVhZFxcdTdmMGVcXHU1ZjU2XFx1NjkzNFxcdTcxNDVcXHU3YzE2XCIsXHJcblx0XHRcdFx0XCJkdWlcIjogXCJcXHU1ODA2XFx1NTE1MVxcdTk2MWZcXHU1YmY5XFx1NjAzY1xcdTYxOWRcXHU3ODkzXCIsXHJcblx0XHRcdFx0XCJkdW5cIjogXCJcXHU1OGE5XFx1NTQyOFxcdThlNzJcXHU2NTY2XFx1OTg3ZlxcdTU2ZTRcXHU5NDlkXFx1NzZmZVxcdTkwNDFcXHU3MDk2XFx1NzgxOFxcdTc5MDVcXHU3NmY5XFx1OTU2NlxcdThkYjhcIixcclxuXHRcdFx0XHRcImR1b1wiOiBcIlxcdTYzODdcXHU1NGM2XFx1NTkxYVxcdTU5M2FcXHU1NzliXFx1OGViMlxcdTY3MzVcXHU4ZGZhXFx1ODIzNVxcdTUyNDFcXHU2MGYwXFx1NTgxNVxcdTU0ODRcXHU1NGRhXFx1N2YwZFxcdTY3YzFcXHU5NGNlXFx1ODhmMFxcdThlMzFcIixcclxuXHRcdFx0XHRcImVcIjogXCJcXHU4NmZlXFx1NWNlOFxcdTllNDVcXHU0ZmM0XFx1OTg5ZFxcdThiYjlcXHU1YTI1XFx1NjA3NlxcdTUzODRcXHU2MjdjXFx1OTA0ZlxcdTkxMDJcXHU5OTdmXFx1NTY2OVxcdThjMTRcXHU1N2E5XFx1NTdhZFxcdTgyY2FcXHU4M2FhXFx1ODQzY1xcdTU0NDNcXHU2MTE1XFx1NWM1OVxcdTVhNDBcXHU4ZjZkXFx1NjZmN1xcdTgxNmRcXHU3ODZhXFx1OTUwN1xcdTk1MzdcXHU5ZTU3XFx1OTg5YVxcdTljYzRcIixcclxuXHRcdFx0XHRcImVuXCI6IFwiXFx1NjA2OVxcdTg0YmRcXHU2NDQxXFx1NTUxNFxcdTU1ZWZcIixcclxuXHRcdFx0XHRcImVyXCI6IFwiXFx1ODAwY1xcdTUxM2ZcXHU4MDMzXFx1NWMxNFxcdTk5NzVcXHU2ZDMxXFx1NGU4Y1xcdThkMzBcXHU4ZmU5XFx1NzNlNVxcdTk0ZDJcXHU5ZTM4XFx1OWM5NVwiLFxyXG5cdFx0XHRcdFwiZmFcIjogXCJcXHU1M2QxXFx1N2Y1YVxcdTdiNGZcXHU0ZjEwXFx1NGU0ZlxcdTk2MDBcXHU2Y2Q1XFx1NzNkMFxcdTU3YTFcXHU3ODFkXCIsXHJcblx0XHRcdFx0XCJmYW5cIjogXCJcXHU4NWU5XFx1NWUwNlxcdTc1NmFcXHU3ZmZiXFx1NmEwYVxcdTc3ZmVcXHU5NDkyXFx1N2U0MVxcdTUxZTFcXHU3MGU2XFx1NTNjZFxcdThmZDRcXHU4MzAzXFx1OGQyOVxcdTcyYWZcXHU5OTZkXFx1NmNkYlxcdTg2MjlcXHU1ZTYxXFx1NzJhZFxcdTY4YjVcXHU2NTM1XFx1NzFkNFxcdTc1NDhcXHU4ZTZmXCIsXHJcblx0XHRcdFx0XCJmYW5nXCI6IFwiXFx1NTc0YVxcdTgyYjNcXHU2NWI5XFx1ODBhYVxcdTYyM2ZcXHU5NjMyXFx1NTlhOFxcdTRlZmZcXHU4YmJmXFx1N2ViYVxcdTY1M2VcXHU1MzFhXFx1OTBhMVxcdTVmNzdcXHU5NGFiXFx1ODIyYlxcdTljODJcIixcclxuXHRcdFx0XHRcImZlaVwiOiBcIlxcdTgzZjJcXHU5NzVlXFx1NTU2MVxcdTk4ZGVcXHU4MGE1XFx1NTMyYVxcdThiZmRcXHU1NDIwXFx1ODBiYVxcdTVlOWZcXHU2Y2I4XFx1OGQzOVxcdTgyYmVcXHU3MmQyXFx1NjBiMVxcdTZkZGRcXHU1OTgzXFx1N2VjYlxcdTdlZWZcXHU2OWE3XFx1ODE1M1xcdTY1OTBcXHU2MjQ5XFx1Nzk1M1xcdTc4MjlcXHU5NTQ0XFx1NzVmMVxcdTg3MWFcXHU3YmRhXFx1N2ZlMVxcdTk3MGZcXHU5Y2IxXCIsXHJcblx0XHRcdFx0XCJmZW5cIjogXCJcXHU4MmFjXFx1OTE1YVxcdTU0MjlcXHU2YzFiXFx1NTIwNlxcdTdlYjdcXHU1NzVmXFx1NzExYVxcdTZjN2VcXHU3Yzg5XFx1NTk0YlxcdTRlZmRcXHU1ZmZmXFx1NjEyNFxcdTdjYWFcXHU1MDdlXFx1NzAzNVxcdTY4ZmNcXHU2MTBkXFx1OWNiY1xcdTlmMjJcIixcclxuXHRcdFx0XHRcImZlbmdcIjogXCJcXHU0ZTMwXFx1NWMwMVxcdTY3YWJcXHU4NzAyXFx1NWNmMFxcdTk1MGJcXHU5OGNlXFx1NzVhZlxcdTcwZmRcXHU5MDIyXFx1NTFhZlxcdTdmMWRcXHU4YmJkXFx1NTk0OVxcdTUxZTRcXHU0ZmY4XFx1OTE0NlxcdTg0NTFcXHU2Y2EzXFx1NzgxY1wiLFxyXG5cdFx0XHRcdFwiZnVcIjogXCJcXHU0ZjViXFx1NTQyNlxcdTU5MmJcXHU2NTc3XFx1ODBhNFxcdTViNzVcXHU2Mjc2XFx1NjJjMlxcdThmOTBcXHU1ZTQ1XFx1NmMxZlxcdTdiMjZcXHU0ZjBmXFx1NGZkOFxcdTY3MGRcXHU2ZDZlXFx1NmRhYVxcdTc5OGZcXHU4OGIxXFx1NWYxN1xcdTc1MmJcXHU2MjlhXFx1OGY4NVxcdTRmZWZcXHU5MWRjXFx1NjVhN1xcdTgxMmZcXHU4MTUxXFx1NWU5Y1xcdTgxNTBcXHU4ZDc0XFx1NTI2ZlxcdTg5ODZcXHU4ZDRiXFx1NTkwZFxcdTUwODVcXHU0ZWQ4XFx1OTYxY1xcdTcyMzZcXHU4MTc5XFx1OGQxZlxcdTViY2NcXHU4YmEzXFx1OTY0NFxcdTU5ODdcXHU3ZjFhXFx1NTQ5MFxcdTUzMTBcXHU1MWViXFx1OTBkYlxcdTgyOTlcXHU4MmZiXFx1ODMyZlxcdTgzYTlcXHU4M2Q0XFx1NTQ0YlxcdTVlNWVcXHU2ZWNmXFx1ODI3NFxcdTViNWFcXHU5YTc4XFx1N2VjMlxcdTY4NzRcXHU4ZDU5XFx1OWVmYlxcdTllZmNcXHU3ZjU4XFx1N2EwM1xcdTk5YTVcXHU4NjRkXFx1ODZhOFxcdTg3MDlcXHU4NzYwXFx1ODc2ZVxcdTllYjhcXHU4ZGJhXFx1OGRkN1xcdTljYzZcIixcclxuXHRcdFx0XHRcImdhXCI6IFwiXFx1NTY3NlxcdTU2MGVcXHU4NmU0XFx1NWMyY1xcdTU0NzdcXHU1YzE1XFx1NWMxY1xcdTY1ZWVcXHU5NDg2XCIsXHJcblx0XHRcdFx0XCJnYWlcIjogXCJcXHU4YmU1XFx1NjUzOVxcdTY5ODJcXHU5NDk5XFx1NzZkNlxcdTZlODlcXHU0ZTEwXFx1OTY1NFxcdTU3OTNcXHU2MjI0XFx1OGQ0NVxcdTgwZjJcIixcclxuXHRcdFx0XHRcImdhblwiOiBcIlxcdTVlNzJcXHU3NTE4XFx1Njc0NlxcdTY3ZDFcXHU3YWZmXFx1ODA5ZFxcdThkNzZcXHU2MTFmXFx1NzljNlxcdTY1NjJcXHU4ZDYzXFx1NTc2OVxcdTgyZjdcXHU1YzM0XFx1NjRjMFxcdTZjZDRcXHU2ZGU2XFx1NmY4OVxcdTdlYzBcXHU2YTQ0XFx1NjVmMFxcdTc3ZjhcXHU3NWIzXFx1OTE1MFwiLFxyXG5cdFx0XHRcdFwiZ2FuZ1wiOiBcIlxcdTUxODhcXHU1MjFhXFx1OTRhMlxcdTdmMzhcXHU4MDliXFx1N2ViMlxcdTVjOTdcXHU2ZTJmXFx1NjIwNlxcdTdmNjFcXHU5ODgzXFx1N2I3YlwiLFxyXG5cdFx0XHRcdFwiZ29uZ1wiOiBcIlxcdTY3NjBcXHU1ZGU1XFx1NjUzYlxcdTUyOWZcXHU2MDZkXFx1OWY5YVxcdTRmOWJcXHU4ZWFjXFx1NTE2Y1xcdTViYWJcXHU1ZjEzXFx1NWRlOVxcdTZjNWVcXHU2MmYxXFx1OGQyMVxcdTUxNzFcXHU4NTdiXFx1NWVmZVxcdTU0YTNcXHU3M2Q5XFx1ODBiMVxcdTg2YTNcXHU4NmU5XFx1ODllNVwiLFxyXG5cdFx0XHRcdFwiZ2FvXCI6IFwiXFx1N2JkOVxcdTc2OGJcXHU5YWQ4XFx1ODE4ZlxcdTdmOTRcXHU3Y2Q1XFx1NjQxZVxcdTk1NTBcXHU3YTNmXFx1NTQ0YVxcdTc3N2VcXHU4YmYwXFx1OTBkY1xcdTg0YmZcXHU4NWMxXFx1N2YxZlxcdTY5ZDRcXHU2OWMxXFx1Njc3MlxcdTk1MDZcIixcclxuXHRcdFx0XHRcImdlXCI6IFwiXFx1NTRlNVxcdTZiNGNcXHU2NDAxXFx1NjIwOFxcdTllM2RcXHU4MGYzXFx1NzU5OVxcdTUyNzJcXHU5NzY5XFx1ODQ1YlxcdTY4M2NcXHU5NjAxXFx1OTY5NFxcdTk0ZWNcXHU0ZTJhXFx1NTQwNFxcdTliMzJcXHU0ZWUxXFx1NTRmZlxcdTU4NjVcXHU1NWRkXFx1N2VhNVxcdTY0M2ZcXHU4MTg4XFx1Nzg0Y1xcdTk0ZWFcXHU5NTQ5XFx1ODhiY1xcdTk4OGNcXHU4NjdjXFx1ODIzOFxcdTlhYmNcXHU5YWMyXCIsXHJcblx0XHRcdFx0XCJnZWlcIjogXCJcXHU3ZWQ5XCIsXHJcblx0XHRcdFx0XCJnZW5cIjogXCJcXHU2ODM5XFx1OGRkZlxcdTRlOThcXHU4MzFiXFx1NTRjZlxcdTgyNmVcIixcclxuXHRcdFx0XHRcImdlbmdcIjogXCJcXHU4MDE1XFx1NjZmNFxcdTVlOWFcXHU3ZmI5XFx1NTdjMlxcdTgwM2ZcXHU2ODk3XFx1NTRmZFxcdThkNTNcXHU5Y2EwXCIsXHJcblx0XHRcdFx0XCJnb3VcIjogXCJcXHU5NGE5XFx1NTJmZVxcdTZjOWZcXHU4MmRmXFx1NzJkN1xcdTU3YTJcXHU2Nzg0XFx1OGQyZFxcdTU5MWZcXHU0ZjVkXFx1OGJkZlxcdTVjYTNcXHU5MDU4XFx1NWFiZVxcdTdmMTFcXHU4OWNmXFx1NWY0MFxcdTllMzJcXHU3YjMxXFx1N2JkZFxcdTk3YjJcIixcclxuXHRcdFx0XHRcImd1XCI6IFwiXFx1OGY5Y1xcdTgzYzdcXHU1NDk1XFx1N2I4ZFxcdTRmMzBcXHU2Y2JkXFx1NWI2NFxcdTU5ZDFcXHU5ZjEzXFx1NTNlNFxcdTg2Y2FcXHU5YWE4XFx1OGMzN1xcdTgwYTFcXHU2NTQ1XFx1OTg3ZVxcdTU2ZmFcXHU5NmM3XFx1NTYwZlxcdThiYzJcXHU4M2YwXFx1NTRjY1xcdTVkMmVcXHU2YzY5XFx1Njg4ZlxcdThmNzFcXHU3MjZmXFx1NzI3ZlxcdTgwY2RcXHU4MWNjXFx1NmJjMlxcdTc3YmRcXHU3ZjVmXFx1OTRiNFxcdTk1MjJcXHU3NGUwXFx1OWUyYVxcdTllNDRcXHU3NWZjXFx1ODZjNFxcdTkxNjRcXHU4OWRhXFx1OWNiNFxcdTlhYjBcXHU5ZTU4XCIsXHJcblx0XHRcdFx0XCJndWFcIjogXCJcXHU1MjJlXFx1NzRkY1xcdTUyNTBcXHU1YmUxXFx1NjMwMlxcdTg5MDJcXHU1MzY2XFx1OGJkNlxcdTU0NzFcXHU2ODFkXFx1OWUzOVwiLFxyXG5cdFx0XHRcdFwiZ3VhaVwiOiBcIlxcdTRlNTZcXHU2MmQwXFx1NjAyYVxcdTU0ZDlcIixcclxuXHRcdFx0XHRcImd1YW5cIjogXCJcXHU2OGZhXFx1NTE3M1xcdTViOThcXHU1MWEwXFx1ODljMlxcdTdiYTFcXHU5OTg2XFx1N2Y1MFxcdTYwZWZcXHU3MDRjXFx1OGQyZlxcdTUwMGNcXHU4MzllXFx1NjNiY1xcdTZkYWJcXHU3NmU1XFx1OWU3M1xcdTljY2ZcIixcclxuXHRcdFx0XHRcImd1YW5nXCI6IFwiXFx1NTE0OVxcdTVlN2ZcXHU5MDFiXFx1NzJiN1xcdTY4NDRcXHU4MGYxXFx1NzU5MlwiLFxyXG5cdFx0XHRcdFwiZ3VpXCI6IFwiXFx1NzQ3MFxcdTg5YzRcXHU1NzJkXFx1Nzg0NVxcdTVmNTJcXHU5ZjlmXFx1OTVmYVxcdThmNjhcXHU5YjNjXFx1OGJlMVxcdTc2NzhcXHU2ODQyXFx1NjdkY1xcdThkZWFcXHU4ZDM1XFx1NTIzZFxcdTUzMjZcXHU1MjNmXFx1NWU4YlxcdTViODRcXHU1OWFiXFx1Njg2N1xcdTcwODVcXHU2Njc3XFx1NzY4OFxcdTdjMGJcXHU5YzkxXFx1OWNkY1wiLFxyXG5cdFx0XHRcdFwiZ3VuXCI6IFwiXFx1OGY4YVxcdTZlZGFcXHU2OGNkXFx1NGUyOFxcdTg4NmVcXHU3ZWYyXFx1NzhkOVxcdTljYTdcIixcclxuXHRcdFx0XHRcImd1b1wiOiBcIlxcdTk1MDVcXHU5MGVkXFx1NTZmZFxcdTY3OWNcXHU4OGY5XFx1OGZjN1xcdTk5OThcXHU4ODAzXFx1NTdkYVxcdTYzYjRcXHU1NDU5XFx1NTZkN1xcdTVlM2NcXHU1ZDFlXFx1NzMxM1xcdTY5MDFcXHU4NjYyXFx1OTUxZVxcdTgwNTJcXHU4NzJlXFx1ODczZVxcdTg3NDhcIixcclxuXHRcdFx0XHRcImhhXCI6IFwiXFx1NTRjOFwiLFxyXG5cdFx0XHRcdFwiaGFpXCI6IFwiXFx1OWFiOFxcdTViNjlcXHU2ZDc3XFx1NmMyNlxcdTRlYTVcXHU1YmIzXFx1OWE4N1xcdTU0YjRcXHU1NWU4XFx1OTg4ZlxcdTkxYTJcIixcclxuXHRcdFx0XHRcImhhblwiOiBcIlxcdTkxNjNcXHU2MWE4XFx1OTBhZlxcdTk3ZTlcXHU1NDJiXFx1NmRiNVxcdTViZDJcXHU1MWZkXFx1NTU4YVxcdTdmNTVcXHU3ZmYwXFx1NjRiY1xcdTYzNGRcXHU2NWYxXFx1NjFiZVxcdTYwOGRcXHU3MTBhXFx1NmM1N1xcdTZjNDlcXHU5MDk3XFx1ODNlMVxcdTY0OTZcXHU5NjFhXFx1NzAxYVxcdTY2NTdcXHU3MTEzXFx1OTg5NFxcdTg2YjZcXHU5ZjNlXCIsXHJcblx0XHRcdFx0XCJoZW5cIjogXCJcXHU1OTJmXFx1NzVkNVxcdTVmODhcXHU3MmUwXFx1NjA2OFwiLFxyXG5cdFx0XHRcdFwiaGFuZ1wiOiBcIlxcdTY3NmRcXHU4MjJhXFx1NmM4NlxcdTdlZDdcXHU3M2U5XFx1Njg0MVwiLFxyXG5cdFx0XHRcdFwiaGFvXCI6IFwiXFx1NThkNVxcdTU2OGVcXHU4YzZhXFx1NmJlYlxcdTkwZGRcXHU1OTdkXFx1ODAxN1xcdTUzZjdcXHU2ZDY5XFx1ODU4NVxcdTU1ZTVcXHU1Njg2XFx1NmZlMFxcdTcwNGZcXHU2NjBhXFx1NzY5M1xcdTk4YTJcXHU4NjlkXCIsXHJcblx0XHRcdFx0XCJoZVwiOiBcIlxcdTU0NzVcXHU1NTlkXFx1ODM3N1xcdTgzY2ZcXHU2ODM4XFx1NzliZVxcdTU0OGNcXHU0ZjU1XFx1NTQwOFxcdTc2ZDJcXHU4Yzg5XFx1OTYwMlxcdTZjYjNcXHU2ZGI4XFx1OGQ2YlxcdTg5MTBcXHU5ZTY0XFx1OGQzYVxcdThiYzNcXHU1MmJlXFx1NThkMVxcdTg1ZmZcXHU1NWQxXFx1NTVlY1xcdTk2MTZcXHU3NmNkXFx1ODZiNVxcdTdmZWVcIixcclxuXHRcdFx0XHRcImhlaVwiOiBcIlxcdTU2M2ZcXHU5ZWQxXCIsXHJcblx0XHRcdFx0XCJoZW5nXCI6IFwiXFx1NTRmY1xcdTRlYThcXHU2YTJhXFx1ODg2MVxcdTYwNTJcXHU4YTA3XFx1ODYwNVwiLFxyXG5cdFx0XHRcdFwiaG9uZ1wiOiBcIlxcdThmNzBcXHU1NGM0XFx1NzBkOFxcdTg2NzlcXHU5ZTNmXFx1NmQyYVxcdTViOGZcXHU1ZjE4XFx1N2VhMlxcdTllYzlcXHU4YmE3XFx1ODM2ZFxcdTg1YThcXHU5NWYzXFx1NmNkM1wiLFxyXG5cdFx0XHRcdFwiaG91XCI6IFwiXFx1NTU4OVxcdTRmYWZcXHU3MzM0XFx1NTQzY1xcdTUzOWFcXHU1MDE5XFx1NTQwZVxcdTU4MjBcXHU1ZjhjXFx1OTAwNVxcdTc2MGFcXHU3YmNjXFx1N2NjN1xcdTljOGVcXHU5YWJhXCIsXHJcblx0XHRcdFx0XCJodVwiOiBcIlxcdTU0N2NcXHU0ZTRlXFx1NWZmZFxcdTc0NWFcXHU1OGY2XFx1ODQ2YlxcdTgwZTFcXHU4Nzc0XFx1NzJkMFxcdTdjY2FcXHU2ZTU2XFx1NWYyN1xcdTg2NGVcXHU1NTJjXFx1NjJhNFxcdTRlOTJcXHU2Y2FhXFx1NjIzN1xcdTUxYjFcXHU1NTNmXFx1NTZlYlxcdTVjYjVcXHU3MzIyXFx1NjAxOVxcdTYwZGFcXHU2ZDUyXFx1NmVmOVxcdTc0MjVcXHU2OWYyXFx1OGY3N1xcdTg5ZjNcXHU3MGMwXFx1NzE3M1xcdTYyM2RcXHU2MjQ4XFx1Nzk1Y1xcdTllNTVcXHU5ZTcxXFx1N2IwZlxcdTkxOTBcXHU2NTliXCIsXHJcblx0XHRcdFx0XCJodWFcIjogXCJcXHU4MmIxXFx1NTRkN1xcdTUzNGVcXHU3MzNlXFx1NmVkMVxcdTc1M2JcXHU1MjEyXFx1NTMxNlxcdThiZGRcXHU1MjkwXFx1NmQ0ZFxcdTlhODVcXHU2ODY2XFx1OTRlN1xcdTdhMWVcIixcclxuXHRcdFx0XHRcImh1YWlcIjogXCJcXHU2OWQwXFx1NWY4YVxcdTYwMDBcXHU2ZGVlXFx1NTc0ZlxcdThmZDhcXHU4ZTFkXCIsXHJcblx0XHRcdFx0XCJodWFuXCI6IFwiXFx1NmIyMlxcdTczYWZcXHU2ODUzXFx1N2YxM1xcdTYzNjJcXHU2MGEzXFx1NTUyNFxcdTc1ZWFcXHU4YzYyXFx1NzExNVxcdTZkYTNcXHU1YmE2XFx1NWU3YlxcdTkwYzdcXHU1OTQyXFx1NTdiOFxcdTY0ZDBcXHU1NzFjXFx1NmQzOVxcdTZkNjNcXHU2ZjM2XFx1NWJmMFxcdTkwMmRcXHU3ZjMzXFx1OTUzZVxcdTljYTlcXHU5YjFmXCIsXHJcblx0XHRcdFx0XCJodWFuZ1wiOiBcIlxcdTgzNTJcXHU2MTRjXFx1OWVjNFxcdTc4ZmFcXHU4NzU3XFx1N2MyN1xcdTc2ODdcXHU1MWYwXFx1NjBmNlxcdTcxNGNcXHU2NjQzXFx1NWU0Y1xcdTYwNGRcXHU4YzBlXFx1OTY4ZFxcdTVmYThcXHU2ZTVmXFx1NmY2MlxcdTkwNTFcXHU3NDljXFx1ODA5M1xcdTc2NDBcXHU4N2U1XFx1N2JjMVxcdTljYzdcIixcclxuXHRcdFx0XHRcImh1aVwiOiBcIlxcdTcwNzBcXHU2MzI1XFx1OGY4OVxcdTVmYmRcXHU2MDYyXFx1ODZkNFxcdTU2ZGVcXHU2YmMxXFx1NjA5NFxcdTYxNjdcXHU1MzQ5XFx1NjBlMFxcdTY2NjZcXHU4ZDNmXFx1NzlmZFxcdTRmMWFcXHU3MGU5XFx1NmM0N1xcdThiYjNcXHU4YmYyXFx1N2VkOFxcdThiZDlcXHU4MzM0XFx1ODM1ZlxcdTg1NTlcXHU1NGQ1XFx1NTU5OVxcdTk2YjNcXHU2ZDA0XFx1NWY1N1xcdTdmMGJcXHU3M2YyXFx1NjY1NlxcdTYwNWFcXHU4NjdhXFx1ODdlYVxcdTllYmVcIixcclxuXHRcdFx0XHRcImh1blwiOiBcIlxcdTgzNjRcXHU2NjBmXFx1NWE1YVxcdTliNDJcXHU2ZDUxXFx1NmRmN1xcdThiZThcXHU5OTg0XFx1OTYwZFxcdTZlYjdcXHU3ZjE3XCIsXHJcblx0XHRcdFx0XCJodW9cIjogXCJcXHU4YzQxXFx1NmQzYlxcdTRmMTlcXHU3MDZiXFx1ODNiN1xcdTYyMTZcXHU2MGQxXFx1OTcwZFxcdThkMjdcXHU3OTc4XFx1NjUwOVxcdTU2YWZcXHU1OTI1XFx1OTRhY1xcdTk1MmFcXHU5NTZjXFx1ODAyMFxcdTg4MTZcIixcclxuXHRcdFx0XHRcImppXCI6IFwiXFx1NTFmYlxcdTU3M2VcXHU1N2ZhXFx1NjczYVxcdTc1NzhcXHU3YTNkXFx1NzllZlxcdTdiOTVcXHU4MDhjXFx1OTk2NVxcdThmZjlcXHU2ZmMwXFx1OGJhNVxcdTllMjFcXHU1OWVjXFx1N2VlOVxcdTdmMDlcXHU1NDA5XFx1Njc4MVxcdTY4ZDhcXHU4ZjkxXFx1N2M0ZFxcdTk2YzZcXHU1M2NhXFx1NjAyNVxcdTc1YmVcXHU2YzcyXFx1NTM3M1xcdTVhYzlcXHU3ZWE3XFx1NjMyNFxcdTUxZTBcXHU4MTBhXFx1NWRmMVxcdTg0ZGZcXHU2MjgwXFx1NTE4MFxcdTViNjNcXHU0ZjBlXFx1Nzk2ZFxcdTUyNDJcXHU2MGI4XFx1NmQ0ZVxcdTViYzRcXHU1YmMyXFx1OGJhMVxcdThiYjBcXHU2NWUyXFx1NWZjY1xcdTk2NDVcXHU1OTkzXFx1N2VlN1xcdTdlYWFcXHU1YzQ1XFx1NGUwY1xcdTRlNjlcXHU1MjVlXFx1NGY3NlxcdTRmNzRcXHU4MTE0XFx1NThiY1xcdTgyYThcXHU4MmIwXFx1ODQwMVxcdTg0YmFcXHU4NTdhXFx1NjM4ZVxcdTUzZmRcXHU1NGFkXFx1NTRkY1xcdTU1MjdcXHU1YzhjXFx1NWQ3NFxcdTZkMGVcXHU1ZjUwXFx1NWM1MFxcdTlhYTVcXHU3NTdmXFx1NzM5MVxcdTY5NmJcXHU2YjliXFx1NjIxZlxcdTYyMjJcXHU4ZDRkXFx1ODljYVxcdTcyODRcXHU5ZjUxXFx1NzdmNlxcdTdmODFcXHU1ZDQ3XFx1N2EzN1xcdTc2MjBcXHU3NjM1XFx1ODY2ZVxcdTdiMDhcXHU3YjA0XFx1NjZhOFxcdThkZmJcXHU4ZGZkXFx1OTcwMVxcdTljOWFcXHU5Y2FiXFx1OWFmYlxcdTllODJcIixcclxuXHRcdFx0XHRcImppYVwiOiBcIlxcdTU2MDlcXHU2N2I3XFx1NTkzOVxcdTRmNzNcXHU1YmI2XFx1NTJhMFxcdTgzNWFcXHU5ODhhXFx1OGQzZVxcdTc1MzJcXHU5NGJlXFx1NTA0N1xcdTdhM2NcXHU0ZWY3XFx1NjdiNlxcdTlhN2VcXHU1YWMxXFx1NGYzZFxcdTkwY2ZcXHU2MmVlXFx1NWNhY1xcdTZkNDNcXHU4ZmU2XFx1NzNjOFxcdTYyMWJcXHU4MGRiXFx1NjA1ZFxcdTk0ZDdcXHU5NTUzXFx1NzVjMlxcdTg2ZjFcXHU3YjMzXFx1ODg4OFxcdThkY2ZcIixcclxuXHRcdFx0XHRcImppYW5cIjogXCJcXHU2YjdjXFx1NzZkMVxcdTU3NWFcXHU1YzE2XFx1N2IzYVxcdTk1ZjRcXHU3MTRlXFx1NTE3Y1xcdTgwYTlcXHU4MjcwXFx1NTk3OFxcdTdmMDRcXHU4MzI3XFx1NjhjMFxcdTY3ZWNcXHU3OGIxXFx1Nzg3N1xcdTYyZTNcXHU2MzYxXFx1N2I4MFxcdTRmZWRcXHU1MjZhXFx1NTFjZlxcdTgzNTBcXHU2OWRiXFx1OTI3NFxcdThkZjVcXHU4ZDMxXFx1ODljMVxcdTk1MmVcXHU3YmFkXFx1NGVmNlxcdTUwNjVcXHU4MjMwXFx1NTI1MVxcdTk5NmZcXHU2ZTEwXFx1NmU4NVxcdTZkYTdcXHU1ZWZhXFx1NTBlZFxcdThjMGZcXHU4YzJiXFx1ODNjNVxcdTg0YjlcXHU2NDFiXFx1NTZkZFxcdTZlNTRcXHU4ZTQ3XFx1OGIwN1xcdTdmMjNcXHU2N2E3XFx1NjdkOVxcdTY5NTdcXHU2MjBiXFx1NjIyY1xcdTcyNmVcXHU3MjhkXFx1NmJmZFxcdTgxNzFcXHU3NzUxXFx1OTUwZlxcdTllNjNcXHU4OGU1XFx1N2IxNVxcdTdiYjRcXHU3ZmU2XFx1OGRiY1xcdThlM2FcXHU5Y2EzXFx1OTdhZlwiLFxyXG5cdFx0XHRcdFwiamlhbmdcIjogXCJcXHU1MGY1XFx1NTlkY1xcdTVjMDZcXHU2ZDQ2XFx1NmM1ZlxcdTc1ODZcXHU4NDhiXFx1Njg2OFxcdTU5NTZcXHU4YmIyXFx1NTMyMFxcdTkxNzFcXHU5NjRkXFx1ODMzM1xcdTZkMWFcXHU3ZWRiXFx1N2YzMFxcdTcyOWZcXHU3OTEzXFx1ODAyOVxcdTdjZThcXHU4YzQ3XCIsXHJcblx0XHRcdFx0XCJqaWFvXCI6IFwiXFx1ODU0OVxcdTY5MTJcXHU3OTAxXFx1NzEyNlxcdTgwZjZcXHU0ZWE0XFx1OTBjYVxcdTZkNDdcXHU5YTg0XFx1NWEwN1xcdTU2YmNcXHU2NDA1XFx1OTRmMFxcdTc3ZWJcXHU0ZmE1XFx1ODExYVxcdTcyZTFcXHU4OWQyXFx1OTk3YVxcdTdmMzRcXHU3ZWRlXFx1NTI3ZlxcdTY1NTlcXHU5MTc1XFx1OGY3ZlxcdThmODNcXHU1M2ViXFx1NGY3Y1xcdTUwZWNcXHU4MzJkXFx1NjMyMlxcdTU2NGRcXHU1Y2U0XFx1NWZiY1xcdTU5ZTNcXHU3ZTlmXFx1NjU2YlxcdTc2OGVcXHU5ZTZhXFx1ODZkZlxcdTkxYWVcXHU4ZGU0XFx1OWM5YlwiLFxyXG5cdFx0XHRcdFwiamllXCI6IFwiXFx1N2E5NlxcdTYzZWRcXHU2M2E1XFx1NzY4NlxcdTc5ZjhcXHU4ODU3XFx1OTYzNlxcdTYyMmFcXHU1MmFiXFx1ODI4MlxcdTY4NTRcXHU2NzcwXFx1NjM3N1xcdTc3NmJcXHU3YWVkXFx1NmQwMVxcdTdlZDNcXHU4OWUzXFx1NTlkMFxcdTYyMTJcXHU4NWM5XFx1ODJhNVxcdTc1NGNcXHU1MDFmXFx1NGVjYlxcdTc1YTVcXHU4YmViXFx1NWM0YVxcdTUwNDhcXHU4YmE2XFx1OGJkOFxcdTU1ODhcXHU1NWRmXFx1NzM2Y1xcdTVhNTVcXHU1YjUxXFx1Njg0MFxcdTczNTJcXHU3OGEzXFx1OTUzNFxcdTc1OTZcXHU4OGI3XFx1OTg4OVxcdTg2YTdcXHU3ZmFmXFx1OWM5MlxcdTlhYjFcXHU5YWViXCIsXHJcblx0XHRcdFx0XCJqaW5cIjogXCJcXHU1ZGZlXFx1N2I0YlxcdTY1YTRcXHU5MWQxXFx1NGVjYVxcdTZkMjVcXHU4OTVmXFx1N2QyN1xcdTk1MjZcXHU0ZWM1XFx1OGMyOFxcdThmZGJcXHU5NzczXFx1NjY0YlxcdTc5ODFcXHU4ZmQxXFx1NzBlY1xcdTZkNzhcXHU1YzNkXFx1NTM3YVxcdTgzNjlcXHU1ODA3XFx1NTY2NFxcdTk5OTFcXHU1ZWQxXFx1NTk5N1xcdTdmMTlcXHU3NDdlXFx1NjlmZlxcdThkNDZcXHU4OWQwXFx1OTQ4NVxcdTk1MTNcXHU4ODdmXFx1NzdkY1wiLFxyXG5cdFx0XHRcdFwiamluZ1wiOiBcIlxcdTUyYjJcXHU4MzQ2XFx1NTE2MlxcdTgzMGVcXHU3NzViXFx1NjY3NlxcdTljYjhcXHU0ZWFjXFx1NjBjYVxcdTdjYmVcXHU3Y2IzXFx1N2VjZlxcdTRlOTVcXHU4YjY2XFx1NjY2ZlxcdTk4ODhcXHU5NzU5XFx1NTg4M1xcdTY1NmNcXHU5NTVjXFx1NWY4NFxcdTc1YzlcXHU5NzU2XFx1N2FkZlxcdTdhZGVcXHU1MWMwXFx1NTIyZFxcdTUxMDZcXHU5NjMxXFx1ODNjMVxcdTczNGRcXHU2MWFjXFx1NmNmZVxcdThmZjNcXHU1ZjJhXFx1NWE2N1xcdTgwYmNcXHU4MGViXFx1ODE0OFxcdTY1Y2NcIixcclxuXHRcdFx0XHRcImppb25nXCI6IFwiXFx1NzBhZlxcdTdhOThcXHU1MTgyXFx1OGZlNVxcdTYyNDNcIixcclxuXHRcdFx0XHRcImppdVwiOiBcIlxcdTYzZWFcXHU3YTc2XFx1N2VhMFxcdTczOTZcXHU5N2VkXFx1NGU0NVxcdTcwNzhcXHU0ZTVkXFx1OTE1MlxcdTUzYTlcXHU2NTUxXFx1NjVlN1xcdTgxZmNcXHU4MjA1XFx1NTQ4ZVxcdTVjMzFcXHU3NTlhXFx1NTBlNlxcdTU1N2VcXHU5NjA0XFx1NjdlOVxcdTY4NTVcXHU5ZTZiXFx1OGQ3M1xcdTliMGZcIixcclxuXHRcdFx0XHRcImp1XCI6IFwiXFx1OTdhMFxcdTYyZDhcXHU3MmQ5XFx1NzViZFxcdTlhNzlcXHU4M2NhXFx1NWM0MFxcdTU0ODBcXHU3N2U5XFx1NGUzZVxcdTZjYWVcXHU4MDVhXFx1NjJkMlxcdTYzNmVcXHU1ZGU4XFx1NTE3N1xcdThkZGRcXHU4ZTFlXFx1OTUyZlxcdTRmZjFcXHU1M2U1XFx1NjBlN1xcdTcwYWNcXHU1MjY3XFx1NTAyOFxcdThiYjVcXHU4MmUzXFx1ODJmNFxcdTgzOTJcXHU2M2FjXFx1OTA3ZFxcdTVjNjZcXHU3NDFhXFx1NjdiOFxcdTY5MTBcXHU2OTk4XFx1Njk4OVxcdTZhNThcXHU3MjhiXFx1OThkM1xcdTk0OWNcXHU5NTE0XFx1N2FhZFxcdTg4ZmVcXHU4ZDg0XFx1OTFiNVxcdThlM2RcXHU5ZjgzXFx1OTZjZVxcdTk3YWJcIixcclxuXHRcdFx0XHRcImp1YW5cIjogXCJcXHU2MzUwXFx1OWU0M1xcdTVhMWZcXHU1MDI2XFx1NzczN1xcdTUzNzdcXHU3ZWUyXFx1OTEwNFxcdTcyZjdcXHU2ZDkzXFx1Njg0YVxcdTg4MzJcXHU5NTI5XFx1OTU0Y1xcdTk2YmRcIixcclxuXHRcdFx0XHRcImp1ZVwiOiBcIlxcdTY0ODVcXHU2NTJiXFx1NjI4OVxcdTYzOThcXHU1MDE0XFx1NzIzNVxcdTg5YzlcXHU1MWIzXFx1OGJjMFxcdTdlZGRcXHU1M2E1XFx1NTI4MlxcdThjMzJcXHU3N2NkXFx1ODU2OFxcdTU2NThcXHU1ZDFiXFx1NzM1N1xcdTViNTNcXHU3M2NmXFx1Njg3N1xcdTZhNWJcXHU3MjFkXFx1OTU2MlxcdThlNzZcXHU4OWQ2XCIsXHJcblx0XHRcdFx0XCJqdW5cIjogXCJcXHU1NzQ3XFx1ODNjY1xcdTk0YTdcXHU1MTliXFx1NTQxYlxcdTVjZmJcXHU0ZmNhXFx1N2FlM1xcdTZkNWFcXHU5MGUxXFx1OWE4ZlxcdTYzNDNcXHU3MmZiXFx1NzZiMlxcdTdiNjBcXHU5ZTg3XCIsXHJcblx0XHRcdFx0XCJrYVwiOiBcIlxcdTU1ODBcXHU1NDk2XFx1NTM2MVxcdTRmNjdcXHU1NDk0XFx1ODBlOVwiLFxyXG5cdFx0XHRcdFwia2VcIjogXCJcXHU1NGFmXFx1NTc3N1xcdTgyZGJcXHU2N2VmXFx1NjhmNVxcdTc4ZDVcXHU5ODk3XFx1NzlkMVxcdTU4ZjNcXHU1NGIzXFx1NTNlZlxcdTZlMzRcXHU1MTRiXFx1NTIzYlxcdTViYTJcXHU4YmZlXFx1NWNhMlxcdTYwNmFcXHU2ZTk4XFx1OWE5MlxcdTdmMDJcXHU3M2MyXFx1OGY3MlxcdTZjMmFcXHU3NzhjXFx1OTRiNlxcdTc1YjRcXHU3YWEwXFx1ODc0Y1xcdTlhYzFcIixcclxuXHRcdFx0XHRcImthaVwiOiBcIlxcdTVmMDBcXHU2M2U5XFx1Njk3N1xcdTUxZWZcXHU2MTY4XFx1NTI0MFxcdTU3YjJcXHU4NDg4XFx1NWZmZVxcdTYwN2FcXHU5NGUwXFx1OTUwZVwiLFxyXG5cdFx0XHRcdFwia2FuXCI6IFwiXFx1NTIwYVxcdTU4MmFcXHU1MmQ4XFx1NTc0ZVxcdTc4MGRcXHU3NzBiXFx1NGY4M1xcdTUxZjVcXHU4M2IwXFx1ODNiNlxcdTYyMjFcXHU5ZjliXFx1NzdiMFwiLFxyXG5cdFx0XHRcdFwia2FuZ1wiOiBcIlxcdTVlYjdcXHU2MTc3XFx1N2NlMFxcdTYyNWJcXHU2Mjk3XFx1NGVhMlxcdTcwOTVcXHU1NzUxXFx1NGYwOVxcdTk1ZjZcXHU5NGFhXCIsXHJcblx0XHRcdFx0XCJrYW9cIjogXCJcXHU4MDAzXFx1NjJmN1xcdTcwZTRcXHU5NzYwXFx1NWMzYlxcdTY4MzJcXHU3MjkyXFx1OTRkMFwiLFxyXG5cdFx0XHRcdFwia2VuXCI6IFwiXFx1ODBhZlxcdTU1NDNcXHU1N2E2XFx1NjA3M1xcdTU3YTBcXHU4OGM5XFx1OTg4MFwiLFxyXG5cdFx0XHRcdFwia2VuZ1wiOiBcIlxcdTU0MmRcXHU1ZmQwXFx1OTRmZlwiLFxyXG5cdFx0XHRcdFwia29uZ1wiOiBcIlxcdTdhN2FcXHU2MDUwXFx1NWI1NFxcdTYzYTdcXHU1MDI1XFx1NWQwNlxcdTdiOWNcIixcclxuXHRcdFx0XHRcImtvdVwiOiBcIlxcdTYyYTBcXHU1M2UzXFx1NjI2M1xcdTViYzdcXHU4MmE0XFx1ODUzYlxcdTUzZTlcXHU3NzBkXFx1N2I1OFwiLFxyXG5cdFx0XHRcdFwia3VcIjogXCJcXHU2N2FmXFx1NTRlZFxcdTdhOWZcXHU4MmU2XFx1OTE3N1xcdTVlOTNcXHU4OGU0XFx1NTIzM1xcdTU4MDBcXHU1NWJlXFx1N2VkNFxcdTlhYjdcIixcclxuXHRcdFx0XHRcImt1YVwiOiBcIlxcdTU5MzhcXHU1N2FlXFx1NjMwZVxcdThkZThcXHU4MGVmXFx1NGY4OVwiLFxyXG5cdFx0XHRcdFwia3VhaVwiOiBcIlxcdTU3NTdcXHU3Yjc3XFx1NGZhOVxcdTVmZWJcXHU4NGFmXFx1OTBkMFxcdTg0ODlcXHU3MmVmXFx1ODEwZFwiLFxyXG5cdFx0XHRcdFwia3VhblwiOiBcIlxcdTViYmRcXHU2YjNlXFx1OWFjYlwiLFxyXG5cdFx0XHRcdFwia3VhbmdcIjogXCJcXHU1MzIxXFx1N2I1MFxcdTcyYzJcXHU2ODQ2XFx1NzdmZlxcdTc3MzZcXHU2NWY3XFx1NTFiNVxcdThiZDNcXHU4YmYzXFx1OTA5ZFxcdTU3MzlcXHU1OTNjXFx1NTRkMFxcdTdlYTlcXHU4ZDM2XCIsXHJcblx0XHRcdFx0XCJrdWlcIjogXCJcXHU0ZThmXFx1NzZkNFxcdTVjYmZcXHU3YWE1XFx1ODQ3NVxcdTU5NGVcXHU5YjQxXFx1NTA4MFxcdTk5ODhcXHU2MTI3XFx1NmU4M1xcdTk5OTdcXHU1MzJlXFx1NTkxNFxcdTk2OTdcXHU2M2M2XFx1NTViOVxcdTU1OWZcXHU2MDlkXFx1NjEyNlxcdTk2MTVcXHU5MDM1XFx1NjY4Y1xcdTc3N2RcXHU4MDY5XFx1ODc3MFxcdTdiZDFcXHU4MWZlXFx1OGRlY1wiLFxyXG5cdFx0XHRcdFwia3VuXCI6IFwiXFx1NTc2NFxcdTY2MDZcXHU2MzQ2XFx1NTZmMFxcdTYwODNcXHU5NjAzXFx1NzQyOFxcdTk1MWZcXHU5MThjXFx1OWNiMlxcdTlhZTFcIixcclxuXHRcdFx0XHRcImt1b1wiOiBcIlxcdTYyZWNcXHU2MjY5XFx1NWVkM1xcdTk2MTRcXHU4NmRlXCIsXHJcblx0XHRcdFx0XCJsYVwiOiBcIlxcdTU3ODNcXHU2MmM5XFx1NTU4N1xcdTg3MjFcXHU4MTRhXFx1OGZhM1xcdTU1NjZcXHU1MjRjXFx1NjQ3YVxcdTkwOGJcXHU2NWVmXFx1NzgyY1xcdTc2MGNcIixcclxuXHRcdFx0XHRcImxhaVwiOiBcIlxcdTgzYjFcXHU2NzY1XFx1OGQ1NlxcdTVkMDNcXHU1Zjk1XFx1NmQ5ZVxcdTZmZDFcXHU4ZDQ5XFx1Nzc1MFxcdTk0ZmNcXHU3NjVlXFx1N2M0MVwiLFxyXG5cdFx0XHRcdFwibGFuXCI6IFwiXFx1ODRkZFxcdTVhNmFcXHU2ODBmXFx1NjJlNlxcdTdiZWVcXHU5NjExXFx1NTE3MFxcdTZmOWNcXHU4YzMwXFx1NjNmZFxcdTg5YzhcXHU2MWQyXFx1N2YwNlxcdTcwYzJcXHU2ZWU1XFx1NTU0OVxcdTVjOWFcXHU2MWQ0XFx1NmYyNFxcdTY5ODRcXHU2NTkzXFx1N2Y3MVxcdTk1NjdcXHU4OTM0XCIsXHJcblx0XHRcdFx0XCJsYW5nXCI6IFwiXFx1NzQwNVxcdTY5OTRcXHU3MmZjXFx1NWVjYVxcdTkwY2VcXHU2NzE3XFx1NmQ2YVxcdTgzYThcXHU4NDk3XFx1NTU3N1xcdTk2MDZcXHU5NTEyXFx1N2EwMlxcdTg3ODJcIixcclxuXHRcdFx0XHRcImxhb1wiOiBcIlxcdTYzNWVcXHU1MmIzXFx1NzI2MlxcdTgwMDFcXHU0ZjZjXFx1NTllNVxcdTkxNmFcXHU3MGQ5XFx1NmQ5ZFxcdTU1MjBcXHU1ZDAyXFx1NjgzM1xcdTk0ZDFcXHU5NGY5XFx1NzVlOFxcdTkxYWFcIixcclxuXHRcdFx0XHRcImxlXCI6IFwiXFx1NTJkMlxcdTRlNTBcXHU4MDhiXFx1NGVjMlxcdTUzZmJcXHU1NjFlXFx1NmNkMFxcdTljZDNcIixcclxuXHRcdFx0XHRcImxlaVwiOiBcIlxcdTk2ZjdcXHU5NTZkXFx1ODU3ZVxcdTc4Y2FcXHU3ZDJmXFx1NTEyMVxcdTU3OTJcXHU2NGMyXFx1N2M3YlxcdTZjZWFcXHU3ZmI4XFx1OGJkNFxcdTgzN2RcXHU1NGE3XFx1NmYyZlxcdTVhZDhcXHU3ZjI3XFx1NmE5MVxcdTgwMTJcXHU5MTc5XCIsXHJcblx0XHRcdFx0XCJsaW5nXCI6IFwiXFx1NjhmMVxcdTUxYjdcXHU2MmNlXFx1NzNiMlxcdTgzZjFcXHU5NmY2XFx1OWY4NFxcdTk0YzNcXHU0ZjM2XFx1N2Y5YVxcdTUxY2NcXHU3MDc1XFx1OTY3NVxcdTVjYWRcXHU5ODg2XFx1NTNlNlxcdTRlZTRcXHU5MTQzXFx1NTg0NFxcdTgyZDNcXHU1NDY0XFx1NTZmOVxcdTZjZTBcXHU3ZWViXFx1NjdjM1xcdTY4YzJcXHU3NGY0XFx1ODA0NlxcdTg2YzlcXHU3ZmNlXFx1OWNhZVwiLFxyXG5cdFx0XHRcdFwibGVuZ1wiOiBcIlxcdTY5NWVcXHU2MTIzXCIsXHJcblx0XHRcdFx0XCJsaVwiOiBcIlxcdTUzOThcXHU2OGE4XFx1NzI4MVxcdTllY2VcXHU3YmYxXFx1NzJmOFxcdTc5YmJcXHU2ZjEzXFx1NzQwNlxcdTY3NGVcXHU5MWNjXFx1OWNhNFxcdTc5M2NcXHU4Mzg5XFx1ODM1NFxcdTU0MGZcXHU2ODE3XFx1NGUzZFxcdTUzODlcXHU1MmIxXFx1NzgzZVxcdTUzODZcXHU1MjI5XFx1NTA4OFxcdTRmOGJcXHU0ZmQwXFx1NzVlMlxcdTdhY2JcXHU3YzkyXFx1NmNhNVxcdTk2YjZcXHU1MjliXFx1NzQ4M1xcdTU0ZTlcXHU0ZmVhXFx1NGZkYVxcdTkwZTZcXHU1NzVjXFx1ODJjOFxcdTgzODVcXHU4NGUwXFx1ODVkY1xcdTYzNjlcXHU1NDU2XFx1NTUzM1xcdTU1YjFcXHU3MzAxXFx1NmVhN1xcdTZmYTdcXHU5MDI2XFx1NWEwY1xcdTVhZTBcXHU5YThhXFx1N2YyMVxcdTczZGVcXHU2N2E1XFx1NjgwZVxcdThmNzlcXHU2MjNlXFx1NzgzYVxcdThhNDhcXHU3Zjc5XFx1OTUwMlxcdTllNDJcXHU3NWEwXFx1NzVhY1xcdTg2Y2VcXHU4NzBhXFx1ODgyMVxcdTdiMjBcXHU3YmU1XFx1N2M5ZFxcdTkxYjRcXHU4ZGRlXFx1OTZmM1xcdTljYTFcXHU5Y2UyXFx1OWVlN1wiLFxyXG5cdFx0XHRcdFwibGlhblwiOiBcIlxcdTRmZTlcXHU4MDU0XFx1ODNiMlxcdThmZGVcXHU5NTcwXFx1NWVjOVxcdTYwMWNcXHU2ZDlmXFx1NWUxOFxcdTY1NWJcXHU4MTM4XFx1OTRmZVxcdTYwNGJcXHU3MGJjXFx1N2VjM1xcdTYzMWJcXHU4NTM5XFx1NTk0MVxcdTZmNGJcXHU2ZmMyXFx1NWEwOFxcdTc0MGZcXHU2OTVkXFx1NmI5M1xcdTgxYzFcXHU4MWE2XFx1ODhlMlxcdTg4MGFcXHU5Y2EyXCIsXHJcblx0XHRcdFx0XCJsaWFuZ1wiOiBcIlxcdTdjYWVcXHU1MWM5XFx1Njg4MVxcdTdjYjFcXHU4MjZmXFx1NGUyNFxcdThmODZcXHU5MWNmXFx1NjY3ZVxcdTRlYWVcXHU4YzA1XFx1NTg5YVxcdTY5MGJcXHU4ZTA5XFx1OTc1M1xcdTliNDlcIixcclxuXHRcdFx0XHRcImxpYW9cIjogXCJcXHU2NGE5XFx1ODA0YVxcdTUwZGFcXHU3NTk3XFx1NzFjZVxcdTViZTVcXHU4ZmJkXFx1NmY2NlxcdTRlODZcXHU2NDgyXFx1OTU2M1xcdTVlZDZcXHU2NTk5XFx1ODRmY1xcdTVjMjVcXHU1NjM5XFx1NzM2MFxcdTViZWVcXHU3ZjJkXFx1OTQ4Y1xcdTllNjlcXHU4MDIyXCIsXHJcblx0XHRcdFx0XCJsaWVcIjogXCJcXHU1MjE3XFx1ODhjMlxcdTcwYzhcXHU1MmEzXFx1NzMwZVxcdTUxYmRcXHU1N2QyXFx1NmQwY1xcdThkOTRcXHU4ZTkwXFx1OWIyM1wiLFxyXG5cdFx0XHRcdFwibGluXCI6IFwiXFx1NzQzM1xcdTY3OTdcXHU3OGY3XFx1OTcxNlxcdTRlMzRcXHU5MGJiXFx1OWNkZVxcdTZkY2JcXHU1MWRiXFx1OGQ0MVxcdTU0MWRcXHU4NTNhXFx1NWQ5OVxcdTVlZWFcXHU5MDc0XFx1NmFhOVxcdThmOWFcXHU3N2I1XFx1N2NiY1xcdThlOGZcXHU5ZTlmXCIsXHJcblx0XHRcdFx0XCJsaXVcIjogXCJcXHU2ZTljXFx1NzQwOVxcdTY5YjRcXHU3ODZiXFx1OTk4ZlxcdTc1NTlcXHU1MjE4XFx1NzYyNFxcdTZkNDFcXHU2N2YzXFx1NTE2ZFxcdTYyYTFcXHU1MDdiXFx1ODQ4Y1xcdTZjZDZcXHU2ZDRmXFx1OTA1YlxcdTlhOWRcXHU3ZWZhXFx1NjVkMlxcdTcxOThcXHU5NTBkXFx1OTU0ZlxcdTllNjhcXHU5MzhmXCIsXHJcblx0XHRcdFx0XCJsb25nXCI6IFwiXFx1OWY5OVxcdTgwNGJcXHU1NDk5XFx1N2IzY1xcdTdhYmZcXHU5Njg2XFx1NTc4NFxcdTYyZTJcXHU5NjQ3XFx1NWYwNFxcdTU3ODVcXHU4MzBmXFx1NmNmN1xcdTczZDFcXHU2ODBhXFx1ODBlN1xcdTc4M2JcXHU3NjQzXCIsXHJcblx0XHRcdFx0XCJsb3VcIjogXCJcXHU2OTdjXFx1NWEwNFxcdTY0MDJcXHU3YmQzXFx1NmYwZlxcdTk2NGJcXHU1NWJkXFx1NWQ1ZFxcdTk1NDJcXHU3NjE4XFx1ODAyN1xcdTg3N2NcXHU5YWM1XCIsXHJcblx0XHRcdFx0XCJsdVwiOiBcIlxcdTgyYTZcXHU1MzYyXFx1OTg4NVxcdTVlOTBcXHU3MDg5XFx1NjNiM1xcdTUzNjRcXHU4NjRmXFx1OWM4MVxcdTllOTNcXHU3ODhjXFx1OTczMlxcdThkZWZcXHU4ZDQyXFx1OWU3ZlxcdTZmNWVcXHU3OTg0XFx1NWY1NVxcdTk2NDZcXHU2MjJlXFx1NTc4NlxcdTY0NDVcXHU2NGI4XFx1NTY1Y1xcdTZjZjhcXHU2ZTBjXFx1NmYwOVxcdTc0OTBcXHU2ODBjXFx1NmE3OVxcdThmNzNcXHU4ZjgyXFx1OGY5OFxcdTZjMDdcXHU4MGVhXFx1OTU2NVxcdTllMmNcXHU5ZTZkXFx1N2MwZlxcdTgyM2JcXHU5Yzg4XCIsXHJcblx0XHRcdFx0XCJsdlwiOiBcIlxcdTlhNzRcXHU1NDE1XFx1OTRkZFxcdTRmYTNcXHU2NWM1XFx1NWM2NVxcdTVjNjFcXHU3ZjE1XFx1ODY1MVxcdTZjMmZcXHU1ZjhiXFx1NzM4N1xcdTZlZTRcXHU3ZWZmXFx1NjM0YlxcdTk1ZmVcXHU2OTg4XFx1ODE4MlxcdTdhMDZcXHU4OTFiXCIsXHJcblx0XHRcdFx0XCJsdWFuXCI6IFwiXFx1NWNlNlxcdTViNmFcXHU2ZWU2XFx1NTM3NVxcdTRlNzFcXHU2ODNlXFx1OWUzZVxcdTkyYWVcIixcclxuXHRcdFx0XHRcImx1ZVwiOiBcIlxcdTYzYTBcXHU3NTY1XFx1OTUwYVwiLFxyXG5cdFx0XHRcdFwibHVuXCI6IFwiXFx1OGY2ZVxcdTRmMjZcXHU0ZWQxXFx1NmNhNlxcdTdlYjZcXHU4YmJhXFx1NTZmNVwiLFxyXG5cdFx0XHRcdFwibHVvXCI6IFwiXFx1ODQxZFxcdTg3YmFcXHU3ZjU3XFx1OTAzYlxcdTk1MjNcXHU3YmE5XFx1OWFhMVxcdTg4ZjhcXHU4NDNkXFx1NmQxYlxcdTlhODZcXHU3ZWRjXFx1NTAyZVxcdTgzNjZcXHU2NDVlXFx1NzMyMVxcdTZjZmFcXHU2OTI0XFx1ODEzNlxcdTk1NTlcXHU3NjMwXFx1OTZkMlwiLFxyXG5cdFx0XHRcdFwibWFcIjogXCJcXHU1OTg4XFx1OWViYlxcdTczOWJcXHU3ODAxXFx1ODY4MlxcdTlhNmNcXHU5YTgyXFx1NTYxYlxcdTU0MTdcXHU1NTFiXFx1NzJiOFxcdTViMzdcXHU2NzY5XFx1OWViZFwiLFxyXG5cdFx0XHRcdFwibWFpXCI6IFwiXFx1NTdjYlxcdTRlNzBcXHU5ZWE2XFx1NTM1NlxcdThmYzhcXHU4MTA5XFx1NTJhMlxcdTgzNmNcXHU1NGFhXFx1OTczZVwiLFxyXG5cdFx0XHRcdFwibWFuXCI6IFwiXFx1Nzc5MlxcdTk5OTJcXHU4NmVlXFx1NmVlMVxcdTg1MTNcXHU2NmZjXFx1NjE2MlxcdTZmMmJcXHU4YzI5XFx1NTg4MVxcdTVlNTRcXHU3ZjI2XFx1NzFiM1xcdTk1NThcXHU5ODlmXFx1ODdhOFxcdTljZDdcXHU5Nzk0XCIsXHJcblx0XHRcdFx0XCJtYW5nXCI6IFwiXFx1ODI5MlxcdTgzMmJcXHU3NmYyXFx1NWZkOVxcdTgzYmRcXHU5MDk5XFx1NmYyZFxcdTY3MjZcXHU3ODZkXFx1ODdkMlwiLFxyXG5cdFx0XHRcdFwibWVuZ1wiOiBcIlxcdTZjMTNcXHU4NDBjXFx1ODQ5OVxcdTZhYWNcXHU3NmRmXFx1OTUzMFxcdTczMWJcXHU2OGE2XFx1NWI1ZlxcdTUyZDBcXHU3NTBkXFx1NzdhMlxcdTYxZjVcXHU3OTFlXFx1ODY3YlxcdTg3MjJcXHU4ODEzXFx1ODI0YlxcdTgyNjhcXHU5ZWZlXCIsXHJcblx0XHRcdFx0XCJtaWFvXCI6IFwiXFx1NzMyYlxcdTgyZDdcXHU2M2NmXFx1Nzc4NFxcdTg1ZDBcXHU3OWQyXFx1NmUzYVxcdTVlOTlcXHU1OTk5XFx1NTViNVxcdTkwODhcXHU3ZjA4XFx1N2YyYVxcdTY3NmFcXHU2ZGZjXFx1NzcwN1xcdTllNGJcXHU4NzMxXCIsXHJcblx0XHRcdFx0XCJtYW9cIjogXCJcXHU4MzA1XFx1OTUxYVxcdTZiZGJcXHU3N2RiXFx1OTRjNlxcdTUzNmZcXHU4MzAyXFx1NTE5MlxcdTVlM2RcXHU4YzhjXFx1OGQzOFxcdTRmOTRcXHU4OGE0XFx1NTJkNlxcdTgzMDZcXHU1Y2MxXFx1NzQ0MVxcdTY2MzRcXHU3MjY2XFx1ODAwNFxcdTY1YzRcXHU2MWNiXFx1Nzc4MFxcdTg2ZDFcXHU4NzY1XFx1ODdjYVxcdTlhZTZcIixcclxuXHRcdFx0XHRcIm1lXCI6IFwiXFx1NGU0OFwiLFxyXG5cdFx0XHRcdFwibWVpXCI6IFwiXFx1NzNhYlxcdTY3OWFcXHU2ODg1XFx1OTE3NlxcdTk3MDlcXHU3MTY0XFx1NmNhMVxcdTc3MDlcXHU1YTkyXFx1OTU0MVxcdTZiY2ZcXHU3ZjhlXFx1NjYyN1xcdTViZDBcXHU1OWI5XFx1NWE5YVxcdTU3NzZcXHU4MzkzXFx1NWQ0YlxcdTczMzhcXHU2ZDdjXFx1NmU0NFxcdTY5NjNcXHU5NTQ1XFx1OWU1YlxcdTg4ODJcXHU5YjQ1XCIsXHJcblx0XHRcdFx0XCJtZW5cIjogXCJcXHU5NWU4XFx1OTVmN1xcdTRlZWNcXHU2MjZhXFx1NzM5ZlxcdTcxMTZcXHU2MWQxXFx1OTQ5NFwiLFxyXG5cdFx0XHRcdFwibWlcIjogXCJcXHU3NzJmXFx1OTE5YVxcdTk3NjFcXHU3Y2RjXFx1OGZmN1xcdThjMWNcXHU1ZjI1XFx1N2M3M1xcdTc5ZDhcXHU4OWM1XFx1NmNjY1xcdTg3MWNcXHU1YmM2XFx1NWU0MlxcdTgyODhcXHU1MTk2XFx1OGMyN1xcdTg2M2NcXHU1NjI3XFx1NzMxNVxcdTczNmZcXHU2YzY4XFx1NWI5M1xcdTVmMmRcXHU4MTEyXFx1NjU0OVxcdTdjZjhcXHU3ZTNiXFx1OWU4YlwiLFxyXG5cdFx0XHRcdFwibWlhblwiOiBcIlxcdTY4YzlcXHU3NzIwXFx1N2VmNVxcdTUxOTVcXHU1MTRkXFx1NTJjOVxcdTVhMjlcXHU3ZjA1XFx1OTc2MlxcdTZjOTRcXHU2ZTRlXFx1ODE3Y1xcdTc3MDRcIixcclxuXHRcdFx0XHRcIm1pZVwiOiBcIlxcdTg1MTFcXHU3MDZkXFx1NTRhOVxcdTg4MWJcXHU3YmZlXCIsXHJcblx0XHRcdFx0XCJtaW5cIjogXCJcXHU2YzExXFx1NjJiZlxcdTc2YmZcXHU2NTRmXFx1NjBhZlxcdTk1ZmRcXHU4MmUwXFx1NWNiN1xcdTk1ZjVcXHU2Y2VmXFx1NzNjOVwiLFxyXG5cdFx0XHRcdFwibWluZ1wiOiBcIlxcdTY2MGVcXHU4NzlmXFx1OWUyM1xcdTk0ZWRcXHU1NDBkXFx1NTQ3ZFxcdTUxYTVcXHU4MzE3XFx1NmU5ZlxcdTY2OWRcXHU3NzkxXFx1OTE2OVwiLFxyXG5cdFx0XHRcdFwibWl1XCI6IFwiXFx1OGMyY1wiLFxyXG5cdFx0XHRcdFwibW9cIjogXCJcXHU2NDc4XFx1NjQ3OVxcdTg2MTFcXHU2YTIxXFx1ODE5Y1xcdTc4ZThcXHU2NDY5XFx1OWI1NFxcdTYyYjlcXHU2NzJiXFx1ODNhYlxcdTU4YThcXHU5ZWQ4XFx1NmNhYlxcdTZmMjBcXHU1YmRlXFx1OTY0Y1xcdThjMWZcXHU4MzA5XFx1ODRlNlxcdTk5OGRcXHU1YWViXFx1OTU0NlxcdTc5ZTNcXHU3NjNjXFx1ODAzMVxcdTg3YzZcXHU4YzhhXFx1OGM5OFwiLFxyXG5cdFx0XHRcdFwibW91XCI6IFwiXFx1OGMwYlxcdTcyNWZcXHU2N2QwXFx1NTNiNlxcdTU0ZGVcXHU1YTdhXFx1NzczOFxcdTkzNmFcIixcclxuXHRcdFx0XHRcIm11XCI6IFwiXFx1NjJjN1xcdTcyNjFcXHU0ZWE5XFx1NTljNlxcdTZiY2RcXHU1ODkzXFx1NjZhZVxcdTVlNTVcXHU1MmRmXFx1NjE1NVxcdTY3MjhcXHU3NmVlXFx1Nzc2NlxcdTcyNjdcXHU3YTQ2XFx1NGVlYlxcdTgyZGNcXHU1NDUyXFx1NmM5MFxcdTZiZWFcXHU5NGJjXCIsXHJcblx0XHRcdFx0XCJuYVwiOiBcIlxcdTYyZmZcXHU1NGVhXFx1NTQ1MFxcdTk0YTBcXHU5MGEzXFx1NWExY1xcdTdlYjNcXHU1MTg1XFx1NjM3YVxcdTgwYWRcXHU5NTRlXFx1ODg3MlxcdTdiYWNcIixcclxuXHRcdFx0XHRcIm5haVwiOiBcIlxcdTZjMTZcXHU0ZTQzXFx1NTk3NlxcdTgwMTBcXHU1OTQ4XFx1OWYxMFxcdTgyN2ZcXHU4NDE4XFx1NjdmMFwiLFxyXG5cdFx0XHRcdFwibmFuXCI6IFwiXFx1NTM1N1xcdTc1MzdcXHU5NmJlXFx1NTZjYVxcdTU1ODNcXHU1NmUxXFx1Njk2MFxcdTgxNjlcXHU4NzdiXFx1OGQ2N1wiLFxyXG5cdFx0XHRcdFwibmFvXCI6IFwiXFx1NjMyMFxcdTgxMTFcXHU2MDdjXFx1OTVmOVxcdTViNmNcXHU1N2I0XFx1NzMzMVxcdTc0NTlcXHU3ODQ3XFx1OTRkOVxcdTg2ZjJcIixcclxuXHRcdFx0XHRcIm5lXCI6IFwiXFx1NmRkNlxcdTU0NjJcXHU4YmI3XCIsXHJcblx0XHRcdFx0XCJuZWlcIjogXCJcXHU5OTgxXCIsXHJcblx0XHRcdFx0XCJuZW5cIjogXCJcXHU1YWU5XFx1ODBmZFxcdTY3OThcXHU2MDQxXCIsXHJcblx0XHRcdFx0XCJuaVwiOiBcIlxcdTU5YWVcXHU5NzEzXFx1NTAyYVxcdTZjZTVcXHU1YzNjXFx1NjJkZlxcdTRmNjBcXHU1MzNmXFx1ODE3YlxcdTkwMDZcXHU2ZWJhXFx1NGYzMlxcdTU3NmRcXHU3MzBhXFx1NjAyOVxcdTZlZTBcXHU2NjM1XFx1NjVjZVxcdTc5NjJcXHU2MTVkXFx1Nzc2OFxcdTk0Y2NcXHU5Y2I1XCIsXHJcblx0XHRcdFx0XCJuaWFuXCI6IFwiXFx1ODUyYlxcdTYyYzhcXHU1ZTc0XFx1NzhiZVxcdTY0YjVcXHU2MzdiXFx1NWZmNVxcdTVlZmZcXHU4Zjg3XFx1OWVjZlxcdTljODdcXHU5Y2I2XCIsXHJcblx0XHRcdFx0XCJuaWFuZ1wiOiBcIlxcdTVhMThcXHU5MTdmXCIsXHJcblx0XHRcdFx0XCJuaWFvXCI6IFwiXFx1OWUxZlxcdTVjM2ZcXHU4MzExXFx1NWIzMlxcdTgxMzJcXHU4ODg1XCIsXHJcblx0XHRcdFx0XCJuaWVcIjogXCJcXHU2MzRmXFx1ODA0MlxcdTViN2RcXHU1NTZlXFx1OTU0YVxcdTk1NGRcXHU2ZDg1XFx1NGU1Y1xcdTk2NjdcXHU4NjE2XFx1NTVlYlxcdTgwODBcXHU5ODllXFx1ODFlY1xcdThlNTFcIixcclxuXHRcdFx0XHRcIm5pblwiOiBcIlxcdTYwYThcXHU2N2UwXCIsXHJcblx0XHRcdFx0XCJuaW5nXCI6IFwiXFx1NzJkZVxcdTUxZGRcXHU1YjgxXFx1NjJlN1xcdTZjZGVcXHU0ZjVlXFx1ODRlNVxcdTU0OWJcXHU3NTJmXFx1ODA0ZFwiLFxyXG5cdFx0XHRcdFwibml1XCI6IFwiXFx1NzI1YlxcdTYyNmRcXHU5NGFlXFx1N2ViZFxcdTcyYzNcXHU1ZmY4XFx1NTk5ZVxcdTg2YjRcIixcclxuXHRcdFx0XHRcIm5vbmdcIjogXCJcXHU4MTEzXFx1NmQ1M1xcdTUxOWNcXHU0ZmFjXCIsXHJcblx0XHRcdFx0XCJudVwiOiBcIlxcdTU5NzRcXHU1MmFhXFx1NjAxMlxcdTU0NzZcXHU1ZTExXFx1NWYyOVxcdTgwZWNcXHU1YjY1XFx1OWE3ZFwiLFxyXG5cdFx0XHRcdFwibnZcIjogXCJcXHU1OTczXFx1NjA2N1xcdTk0OTVcXHU4ODQ0XCIsXHJcblx0XHRcdFx0XCJudWFuXCI6IFwiXFx1NjY5NlwiLFxyXG5cdFx0XHRcdFwibnVlbnVlXCI6IFwiXFx1ODY1MFwiLFxyXG5cdFx0XHRcdFwibnVlXCI6IFwiXFx1NzU5ZlxcdThjMTFcIixcclxuXHRcdFx0XHRcIm51b1wiOiBcIlxcdTYzMmFcXHU2MWU2XFx1N2NlZlxcdThiZmFcXHU1MGE5XFx1NjQyNlxcdTU1OGZcXHU5NTE4XCIsXHJcblx0XHRcdFx0XCJvdVwiOiBcIlxcdTU0ZTZcXHU2YjI3XFx1OWUyNVxcdTZiYjRcXHU4NWQ1XFx1NTQ1NVxcdTUwNzZcXHU2Y2E0XFx1NjAwNFxcdTc0ZWZcXHU4MDI2XCIsXHJcblx0XHRcdFx0XCJwYVwiOiBcIlxcdTU1NmFcXHU4ZGI0XFx1NzIyY1xcdTVlMTVcXHU2MDE1XFx1NzQzNlxcdTg0NjlcXHU3YjYyXCIsXHJcblx0XHRcdFx0XCJwYWlcIjogXCJcXHU2MmNkXFx1NjM5MlxcdTcyNGNcXHU1Zjk4XFx1NmU0M1xcdTZkM2VcXHU0ZmYzXFx1ODQ4ZVwiLFxyXG5cdFx0XHRcdFwicGFuXCI6IFwiXFx1NjUwMFxcdTZmNThcXHU3NmQ4XFx1NzhkMFxcdTc2ZmNcXHU3NTU0XFx1NTIyNFxcdTUzZGJcXHU3MjNmXFx1NmNlZVxcdTg4YTJcXHU4OTdiXFx1ODdlMFxcdThlNTJcIixcclxuXHRcdFx0XHRcInBhbmdcIjogXCJcXHU0ZTUzXFx1NWU5ZVxcdTY1YzFcXHU4MDJhXFx1ODBkNlxcdTZlYzJcXHU5MDA0XCIsXHJcblx0XHRcdFx0XCJwYW9cIjogXCJcXHU2MjliXFx1NTQ4NlxcdTUyMjhcXHU3MGFlXFx1ODg4ZFxcdThkZDFcXHU2Y2UxXFx1NTMwZlxcdTcyY2RcXHU1ZTk2XFx1ODEyY1xcdTc1YjFcIixcclxuXHRcdFx0XHRcInBlaVwiOiBcIlxcdTU0NzhcXHU4MGRhXFx1NTdmOVxcdTg4ZjRcXHU4ZDU0XFx1OTY2YVxcdTkxNGRcXHU0ZjY5XFx1NmM5YlxcdTYzOGFcXHU4Zjk0XFx1NWUxNFxcdTZkZTBcXHU2NWM2XFx1OTUyYlxcdTkxODVcXHU5NzA4XCIsXHJcblx0XHRcdFx0XCJwZW5cIjogXCJcXHU1NWI3XFx1NzZjNlxcdTZlNTNcIixcclxuXHRcdFx0XHRcInBlbmdcIjogXCJcXHU3ODMwXFx1NjJhOFxcdTcwZjlcXHU2ZjhlXFx1NWY2ZFxcdTg0ZWNcXHU2OGRhXFx1Nzg3Y1xcdTdiZjdcXHU4MWE4XFx1NjcwYlxcdTllNGZcXHU2MzY3XFx1NzhiMFxcdTU3NmZcXHU1ODBiXFx1NTYyZFxcdTYwMjZcXHU4N2RiXCIsXHJcblx0XHRcdFx0XCJwaVwiOiBcIlxcdTc4MTJcXHU5NzM5XFx1NjI3OVxcdTYyYWJcXHU1Mjg4XFx1NzQzNVxcdTZiZDdcXHU1NTY0XFx1ODEzZVxcdTc1YjJcXHU3NmFlXFx1NTMzOVxcdTc1ZGVcXHU1MGZiXFx1NWM0MVxcdThiNmNcXHU0ZTE1XFx1OTY3NFxcdTkwYjNcXHU5MGViXFx1NTcyZVxcdTlmMTlcXHU2NGQ3XFx1NTY3Y1xcdTVlODBcXHU1YWIyXFx1N2ViMFxcdTY3ODdcXHU3NTEzXFx1Nzc2NVxcdTdmNzRcXHU5NGNkXFx1NzVlNlxcdTc2NTZcXHU3NThiXFx1ODY4ZFxcdThjOTRcIixcclxuXHRcdFx0XHRcInBpYW5cIjogXCJcXHU3YmM3XFx1NTA0ZlxcdTcyNDdcXHU5YTk3XFx1OGMxZFxcdTlhODhcXHU3MjhmXFx1ODBmY1xcdTg5MGFcXHU3ZmU5XFx1OGU0MVwiLFxyXG5cdFx0XHRcdFwicGlhb1wiOiBcIlxcdTk4ZDhcXHU2ZjAyXFx1NzRlMlxcdTc5NjhcXHU1MjdkXFx1NTYwY1xcdTVhZDZcXHU3ZjI1XFx1NmI4ZFxcdTc3OWZcXHU4N2I1XCIsXHJcblx0XHRcdFx0XCJwaWVcIjogXCJcXHU2NDg3XFx1NzdhNVxcdTRlM2ZcXHU4MmU0XFx1NmMxNVwiLFxyXG5cdFx0XHRcdFwicGluXCI6IFwiXFx1NjJmY1xcdTk4OTFcXHU4ZDJiXFx1NTRjMVxcdTgwNThcXHU2MmRhXFx1NTlkOFxcdTVhZDRcXHU2OTgwXFx1NzI1ZFxcdTk4YTZcIixcclxuXHRcdFx0XHRcInBpbmdcIjogXCJcXHU0ZTUyXFx1NTc2YVxcdTgyZjlcXHU4NDBkXFx1NWU3M1xcdTUxZWRcXHU3NGY2XFx1OGJjNFxcdTVjNGZcXHU0ZmRjXFx1NWEwOVxcdTY3YjBcXHU5Yzg2XCIsXHJcblx0XHRcdFx0XCJwb1wiOiBcIlxcdTU3NjFcXHU2Y2ZjXFx1OTg4N1xcdTVhNDZcXHU3ODM0XFx1OWI0NFxcdThmZWJcXHU3Yzk1XFx1NTNmNVxcdTkxMzFcXHU2ZWE1XFx1NzNjMFxcdTk0OGJcXHU5NGI3XFx1NzZhNFxcdTdiMzhcIixcclxuXHRcdFx0XHRcInBvdVwiOiBcIlxcdTUyNTZcXHU4OGQyXFx1OGUyM1wiLFxyXG5cdFx0XHRcdFwicHVcIjogXCJcXHU2MjUxXFx1OTRmYVxcdTRlYzZcXHU4Mzg2XFx1ODQ2MVxcdTgzZTlcXHU4NGIyXFx1NTdkNFxcdTY3MzRcXHU1NzAzXFx1NjY2ZVxcdTZkNjZcXHU4YzMxXFx1NjZkZFxcdTcwMTFcXHU1MzBkXFx1NTY1N1xcdTZmZWVcXHU3NDllXFx1NmMwNlxcdTk1NjRcXHU5NTY4XFx1OGU3Y1wiLFxyXG5cdFx0XHRcdFwicWlcIjogXCJcXHU2NzFmXFx1NmIzYVxcdTY4MTZcXHU2MjFhXFx1NTliYlxcdTRlMDNcXHU1MWM0XFx1NmYwNlxcdTY3ZDJcXHU2YzhmXFx1NTE3NlxcdTY4Y2JcXHU1OTQ3XFx1NmI2N1xcdTc1NjZcXHU1ZDBlXFx1ODExMFxcdTlmNTBcXHU2NWQ3XFx1Nzk0OFxcdTc5NDFcXHU5YTkxXFx1OGQ3N1xcdTVjODJcXHU0ZTVlXFx1NGYwMVxcdTU0MmZcXHU1OTUxXFx1NzgwY1xcdTU2NjhcXHU2YzE0XFx1OGZjNFxcdTVmMDNcXHU2YzdkXFx1NmNlM1xcdThiYWJcXHU0ZTlmXFx1NGU5M1xcdTU3M2JcXHU4MjkxXFx1ODQwYlxcdTg0N2FcXHU1NjAxXFx1NWM3YVxcdTVjOTBcXHU2YzU0XFx1NmRjN1xcdTlhOTBcXHU3ZWVlXFx1NzQyYVxcdTc0MjZcXHU2NzVlXFx1Njg2NFxcdTY5ZWRcXHU2YjM5XFx1Nzk3YVxcdTYxYTlcXHU3ODliXFx1ODZmNFxcdTg3MWVcXHU3ZGE2XFx1N2RhZVxcdThkYmZcXHU4ZTRhXFx1OWNjZFxcdTllOTJcIixcclxuXHRcdFx0XHRcInFpYVwiOiBcIlxcdTYzOTBcXHU2MDcwXFx1NmQzZFxcdTg0NWNcIixcclxuXHRcdFx0XHRcInFpYW5cIjogXCJcXHU3Mjc1XFx1NjI2NlxcdTk0OGVcXHU5NGM1XFx1NTM0M1xcdThmYzFcXHU3YjdlXFx1NGVkZlxcdThjMjZcXHU0ZTdlXFx1OWVkNFxcdTk0YjFcXHU5NGIzXFx1NTI0ZFxcdTZmNWNcXHU5MDYzXFx1NmQ0NVxcdThjMzRcXHU1ODExXFx1NWQ0Y1xcdTZiMjBcXHU2YjQ5XFx1NGY2NVxcdTk2MjFcXHU4MjhhXFx1ODJhMVxcdTgzNjhcXHU2M2FlXFx1NWM4ZFxcdTYwYWRcXHU2MTRhXFx1OWE5ZVxcdTY0MzRcXHU4OTMwXFx1N2YzMVxcdTY5MjBcXHU4MGI3XFx1NjEwNlxcdTk0YTRcXHU4NjU0XFx1N2I5ZFwiLFxyXG5cdFx0XHRcdFwicWlhbmdcIjogXCJcXHU2N2FhXFx1NTQ1YlxcdTgxNTRcXHU3ZjhjXFx1NTg5OVxcdTg1MzdcXHU1ZjNhXFx1NjJhMlxcdTVhZjFcXHU2YTJmXFx1NjIxN1xcdTcwOWRcXHU5NTE2XFx1OTUzNVxcdTk1NmFcXHU4OTQxXFx1ODcyM1xcdTdmOWZcXHU4ZGViXFx1OGRjNFwiLFxyXG5cdFx0XHRcdFwicWlhb1wiOiBcIlxcdTZhNDdcXHU5NTM5XFx1NjU3MlxcdTYwODRcXHU2ODY1XFx1NzdhN1xcdTRlNTRcXHU0ZmE4XFx1NWRlN1xcdTk3OThcXHU2NGFjXFx1N2ZkOFxcdTVjZWRcXHU0ZmNmXFx1N2E4ZFxcdTUyODFcXHU4YmVlXFx1OGMyZlxcdTgzNWVcXHU2MTAwXFx1NjE5NFxcdTdmMzJcXHU2YTM1XFx1NmJmM1xcdTc4NTdcXHU4ZGY3XFx1OTc5MlwiLFxyXG5cdFx0XHRcdFwicWllXCI6IFwiXFx1NTIwN1xcdTgzMDRcXHU0ZTE0XFx1NjAyZlxcdTdhODNcXHU5MGM0XFx1NTUzY1xcdTYwZWNcXHU1OWJlXFx1NjMwOFxcdTk1MzJcXHU3YmE3XCIsXHJcblx0XHRcdFx0XCJxaW5cIjogXCJcXHU5NGE2XFx1NGZiNVxcdTRlYjJcXHU3OWU2XFx1NzQzNFxcdTUyZTRcXHU4MmI5XFx1NjRkMlxcdTc5YmRcXHU1YmRkXFx1NmM4MVxcdTgyYTlcXHU4NGMxXFx1ODU3MlxcdTYzZmZcXHU1NDIzXFx1NTVlYVxcdTU2NTlcXHU2ZWIxXFx1NmE4ZVxcdTg3OTNcXHU4ODdlXCIsXHJcblx0XHRcdFx0XCJxaW5nXCI6IFwiXFx1OTc1MlxcdThmN2JcXHU2YzIyXFx1NTAzZVxcdTUzN2ZcXHU2ZTA1XFx1NjRjZVxcdTY2NzRcXHU2YzMwXFx1NjBjNVxcdTk4NzdcXHU4YmY3XFx1NWU4NlxcdTUwMjlcXHU4MmQ4XFx1NTcwYVxcdTZhYTBcXHU3OGVjXFx1ODczYlxcdTdmNDRcXHU3YjkwXFx1OGIyNlxcdTljYWRcXHU5ZWU1XCIsXHJcblx0XHRcdFx0XCJxaW9uZ1wiOiBcIlxcdTc0M2NcXHU3YTc3XFx1OTA5YlxcdTgzMTVcXHU3YTc5XFx1N2I0N1xcdTkyOGVcIixcclxuXHRcdFx0XHRcInFpdVwiOiBcIlxcdTc5Y2JcXHU0ZTE4XFx1OTBiMVxcdTc0MDNcXHU2YzQyXFx1NTZkYVxcdTkxNGJcXHU2Y2M1XFx1NGZjNVxcdTZjM2RcXHU1ZGVmXFx1ODI3ZFxcdTcyYjBcXHU2ZTZiXFx1OTAxMVxcdTkwNTJcXHU2OTc4XFx1OGQ0N1xcdTllMjBcXHU4NjZjXFx1ODZhZlxcdTg3NjRcXHU4OGQ4XFx1N2NkN1xcdTljYzVcXHU5ZjNkXCIsXHJcblx0XHRcdFx0XCJxdVwiOiBcIlxcdThkOGJcXHU1MzNhXFx1ODZjNlxcdTY2ZjJcXHU4ZWFmXFx1NWM0OFxcdTlhNzFcXHU2ZTIwXFx1NTNkNlxcdTVhMzZcXHU5ZjhiXFx1OGRhM1xcdTUzYmJcXHU4YmNlXFx1NTJhY1xcdTg1NTZcXHU4NjI3XFx1NWM5NlxcdTg4NjJcXHU5NjEyXFx1NzRhOVxcdTg5ZDFcXHU2YzBkXFx1Nzk1YlxcdTc4ZjJcXHU3NjZmXFx1ODZkMFxcdTg4M2NcXHU5ZWI0XFx1NzdiZlxcdTllZTJcIixcclxuXHRcdFx0XHRcInF1YW5cIjogXCJcXHU1NzA4XFx1OThhN1xcdTY3NDNcXHU5MTliXFx1NmNjOVxcdTUxNjhcXHU3NWNhXFx1NjJmM1xcdTcyYWNcXHU1MjM4XFx1NTI5ZFxcdThiZTBcXHU4MzQzXFx1NzM3ZVxcdTYwOWJcXHU3ZWZiXFx1OGY4MVxcdTc1NGVcXHU5NGU4XFx1ODczN1xcdTdiNGNcXHU5YjA4XCIsXHJcblx0XHRcdFx0XCJxdWVcIjogXCJcXHU3ZjNhXFx1NzA5NFxcdTc2MzhcXHU1Mzc0XFx1OWU0YVxcdTY5YjdcXHU3ODZlXFx1OTZjMFxcdTk2MTlcXHU2MGFiXCIsXHJcblx0XHRcdFx0XCJxdW5cIjogXCJcXHU4OGQ5XFx1N2ZhNFxcdTkwMjFcIixcclxuXHRcdFx0XHRcInJhblwiOiBcIlxcdTcxMzZcXHU3MWMzXFx1NTE4OVxcdTY3ZDNcXHU4MmQyXFx1OWFlZlwiLFxyXG5cdFx0XHRcdFwicmFuZ1wiOiBcIlxcdTc0ZTRcXHU1OGU0XFx1NjUxOFxcdTU2YjdcXHU4YmE5XFx1NzliM1xcdTdhNzBcIixcclxuXHRcdFx0XHRcInJhb1wiOiBcIlxcdTk5NzZcXHU2MjcwXFx1N2VkNVxcdTgzNWJcXHU1YTA2XFx1Njg2MVwiLFxyXG5cdFx0XHRcdFwicnVvXCI6IFwiXFx1NjBmOVxcdTgyZTVcXHU1ZjMxXCIsXHJcblx0XHRcdFx0XCJyZVwiOiBcIlxcdTcwZWRcXHU1MDRjXCIsXHJcblx0XHRcdFx0XCJyZW5cIjogXCJcXHU1OGVjXFx1NGVjMVxcdTRlYmFcXHU1ZmNkXFx1OTdlN1xcdTRlZmJcXHU4YmE0XFx1NTIwM1xcdTU5OGFcXHU3ZWFiXFx1NGVkZVxcdTgzNGZcXHU4NDVhXFx1OTk2YVxcdThmNmJcXHU3YTE0XFx1ODg3ZFwiLFxyXG5cdFx0XHRcdFwicmVuZ1wiOiBcIlxcdTYyNTRcXHU0ZWNkXCIsXHJcblx0XHRcdFx0XCJyaVwiOiBcIlxcdTY1ZTVcIixcclxuXHRcdFx0XHRcInJvbmdcIjogXCJcXHU2MjBlXFx1ODMzOFxcdTg0YzlcXHU4MzYzXFx1ODc4ZFxcdTcxOTRcXHU2ZWI2XFx1NWJiOVxcdTdlZDJcXHU1MTk3XFx1NWQ1OFxcdTcyZThcXHU3ZjFiXFx1Njk5NVxcdTg3N2VcIixcclxuXHRcdFx0XHRcInJvdVwiOiBcIlxcdTYzYzlcXHU2N2Q0XFx1ODA4OVxcdTdjYzVcXHU4ZTQyXFx1OTdhM1wiLFxyXG5cdFx0XHRcdFwicnVcIjogXCJcXHU4MzM5XFx1ODgxNVxcdTUxMTJcXHU1YjdhXFx1NTk4MlxcdThmYjFcXHU0ZTczXFx1NmM1ZFxcdTUxNjVcXHU4OTI1XFx1ODRkMFxcdTg1YjdcXHU1Njg1XFx1NmQzM1xcdTZlYmRcXHU2ZmUxXFx1OTRmN1xcdTg5NjZcXHU5OGE1XCIsXHJcblx0XHRcdFx0XCJydWFuXCI6IFwiXFx1OGY2ZlxcdTk2MmVcXHU2NzBhXCIsXHJcblx0XHRcdFx0XCJydWlcIjogXCJcXHU4NTRhXFx1NzQ1ZVxcdTk1MTBcXHU4MmFlXFx1ODU2NFxcdTc3N2ZcXHU4NjhiXCIsXHJcblx0XHRcdFx0XCJydW5cIjogXCJcXHU5NWYwXFx1NmRhNlwiLFxyXG5cdFx0XHRcdFwic2FcIjogXCJcXHU2NDkyXFx1NmQxMlxcdTg0MjhcXHU1MzQ1XFx1NGVlOFxcdTYzMzJcXHU5OGQyXCIsXHJcblx0XHRcdFx0XCJzYWlcIjogXCJcXHU4MTZlXFx1OWNjM1xcdTU4NWVcXHU4ZDViXFx1NTY3YlwiLFxyXG5cdFx0XHRcdFwic2FuXCI6IFwiXFx1NGUwOVxcdTUzYzFcXHU0ZjFlXFx1NjU2M1xcdTVmNjFcXHU5OTkzXFx1NmMzNVxcdTZiZjVcXHU3Y2MxXFx1OTczMFwiLFxyXG5cdFx0XHRcdFwic2FuZ1wiOiBcIlxcdTY4NTFcXHU1NWQzXFx1NGUyN1xcdTY0MjFcXHU3OGM5XFx1OThhMVwiLFxyXG5cdFx0XHRcdFwic2FvXCI6IFwiXFx1NjQxNFxcdTlhOWFcXHU2MjZiXFx1NWFjMlxcdTU3ZmRcXHU4MWNhXFx1NzYxOVxcdTljY2JcIixcclxuXHRcdFx0XHRcInNlXCI6IFwiXFx1NzQ1ZlxcdTgyNzJcXHU2ZGE5XFx1NTU2Y1xcdTk0ZTlcXHU5NGVmXFx1N2E1MVwiLFxyXG5cdFx0XHRcdFwic2VuXCI6IFwiXFx1NjhlZVwiLFxyXG5cdFx0XHRcdFwic2VuZ1wiOiBcIlxcdTUwZTdcIixcclxuXHRcdFx0XHRcInNoYVwiOiBcIlxcdTgzOGVcXHU3ODAyXFx1Njc0MFxcdTUyMzlcXHU2Yzk5XFx1N2ViMVxcdTUwYmJcXHU1NTY1XFx1NzE1ZVxcdTgxMGVcXHU2YjQzXFx1NzVlN1xcdTg4ZGZcXHU5NzBlXFx1OWNhOFwiLFxyXG5cdFx0XHRcdFwic2hhaVwiOiBcIlxcdTdiNWJcXHU2NjUyXFx1OTE3ZVwiLFxyXG5cdFx0XHRcdFwic2hhblwiOiBcIlxcdTczY2FcXHU4MmViXFx1Njc0OVxcdTVjNzFcXHU1MjIwXFx1NzE3ZFxcdTg4NmJcXHU5NWVhXFx1OTY1NVxcdTY0YzVcXHU4ZDYxXFx1ODFiM1xcdTU1ODRcXHU2YzU1XFx1NjI0N1xcdTdmMmVcXHU1MjYxXFx1OGJhYVxcdTkxMmZcXHU1N2NmXFx1ODI5ZlxcdTZmNzhcXHU1OWQ3XFx1OWE5ZlxcdTgxYmJcXHU5NDkwXFx1NzU5ZFxcdTg3ZWVcXHU4MjIyXFx1OGRkYVxcdTljZGRcIixcclxuXHRcdFx0XHRcInNoYW5nXCI6IFwiXFx1NTg5MlxcdTRmMjRcXHU1NTQ2XFx1OGQ0ZlxcdTY2NGNcXHU0ZTBhXFx1NWMxYVxcdTg4ZjNcXHU1N2E3XFx1N2VmMVxcdTZiODdcXHU3MWI1XFx1ODlkZVwiLFxyXG5cdFx0XHRcdFwic2hhb1wiOiBcIlxcdTY4YTJcXHU2MzRlXFx1N2EwZFxcdTcwZTdcXHU4MjhkXFx1NTJmYVxcdTk3ZjZcXHU1YzExXFx1NTRlOFxcdTkwYjVcXHU3ZWNkXFx1NTJhZFxcdTgyZDVcXHU2ZjcyXFx1ODZmOFxcdTdiMjRcXHU3YjcyXFx1ODI0NFwiLFxyXG5cdFx0XHRcdFwic2hlXCI6IFwiXFx1NTk2MlxcdThkNGFcXHU4NmM3XFx1ODIwY1xcdTgyMGRcXHU4ZDY2XFx1NjQ0NFxcdTVjMDRcXHU2MTUxXFx1NmQ4OVxcdTc5M2VcXHU4YmJlXFx1NTM4ZFxcdTRmNThcXHU3MzFlXFx1NzU3MlxcdTllOWRcIixcclxuXHRcdFx0XHRcInNoZW5cIjogXCJcXHU3ODM3XFx1NzUzM1xcdTU0N2JcXHU0ZjM4XFx1OGVhYlxcdTZkZjFcXHU1YTIwXFx1N2VjNVxcdTc5NWVcXHU2Yzg4XFx1NWJhMVxcdTVhNzZcXHU3NTFhXFx1ODBiZVxcdTYxNGVcXHU2ZTE3XFx1OGJkY1xcdThjMDJcXHU1NDMyXFx1NTRjMlxcdTZlMTZcXHU2OTM5XFx1NzdlN1xcdTg3MDNcIixcclxuXHRcdFx0XHRcInNoZW5nXCI6IFwiXFx1NThmMFxcdTc1MWZcXHU3NTI1XFx1NzI3MlxcdTUzNDdcXHU3ZWYzXFx1NzcwMVxcdTc2ZGJcXHU1MjY5XFx1ODBkY1xcdTU3MjNcXHU0ZTFlXFx1NmUxMVxcdTVhYjVcXHU3NzFhXFx1N2IxOVwiLFxyXG5cdFx0XHRcdFwic2hpXCI6IFwiXFx1NWUwOFxcdTU5MzFcXHU3MmVlXFx1NjViZFxcdTZlN2ZcXHU4YmQ3XFx1NWMzOFxcdTg2NzFcXHU1MzQxXFx1NzdmM1xcdTYyZmVcXHU2NWY2XFx1NGVjMFxcdTk4ZGZcXHU4NjgwXFx1NWI5ZVxcdThiYzZcXHU1M2YyXFx1NzdlMlxcdTRmN2ZcXHU1YzRlXFx1OWE3NlxcdTU5Y2JcXHU1ZjBmXFx1NzkzYVxcdTU4ZWJcXHU0ZTE2XFx1NjdmZlxcdTRlOGJcXHU2MmVkXFx1OGE5M1xcdTkwMWRcXHU1MmJmXFx1NjYyZlxcdTU1ZGNcXHU1NjZjXFx1OTAwMlxcdTRlZDVcXHU0ZjhkXFx1OTFjYVxcdTk5NzBcXHU2YzBmXFx1NWUwMlxcdTYwNDNcXHU1YmE0XFx1ODljNlxcdThiZDVcXHU4YzI1XFx1NTdkOFxcdTgzYjNcXHU4NGNkXFx1NWYxMVxcdTU1MTFcXHU5OTYzXFx1OGY3Y1xcdTgwMDZcXHU4ZDMzXFx1NzBiYlxcdTc5M2JcXHU5NGM4XFx1OTRjYVxcdTg3YWJcXHU4MjEwXFx1N2I2ZVxcdThjNTVcXHU5Y2E1XFx1OWNiYVwiLFxyXG5cdFx0XHRcdFwic2hvdVwiOiBcIlxcdTY1MzZcXHU2MjRiXFx1OTk5NlxcdTViODhcXHU1YmZmXFx1NjM4OFxcdTU1MmVcXHU1M2Q3XFx1NzYyNlxcdTUxN2RcXHU2MjRjXFx1NzJlOVxcdTdlZjZcXHU4MjRmXCIsXHJcblx0XHRcdFx0XCJzaHVcIjogXCJcXHU4NTJjXFx1NjdhMlxcdTY4YjNcXHU2YjhhXFx1NjI5MlxcdThmOTNcXHU1M2Q0XFx1ODIxMlxcdTZkZDFcXHU3NThmXFx1NGU2NlxcdThkNGVcXHU1YjcwXFx1NzE5ZlxcdTg1YWZcXHU2NjkxXFx1NjZkOVxcdTdmNzJcXHU4NzAwXFx1OWVjZFxcdTlmMjBcXHU1YzVlXFx1NjcyZlxcdThmZjBcXHU2ODExXFx1Njc1ZlxcdTYyMGRcXHU3YWQ2XFx1NTg4NVxcdTVlYjZcXHU2NTcwXFx1NmYzMVxcdTYwNTVcXHU1MDBmXFx1NTg3ZVxcdTgzZmRcXHU1ZmM0XFx1NmNhZFxcdTZkOTFcXHU2ZjhkXFx1NTlkZFxcdTdlYmVcXHU2YmY5XFx1ODE2N1xcdTZiYjNcXHU5NTZmXFx1NzllYlxcdTllNmNcIixcclxuXHRcdFx0XHRcInNodWFcIjogXCJcXHU1MjM3XFx1ODAwZFxcdTU1MzBcXHU2ZGFlXCIsXHJcblx0XHRcdFx0XCJzaHVhaVwiOiBcIlxcdTY0NTRcXHU4ODcwXFx1NzUyOVxcdTVlMDVcXHU4N2MwXCIsXHJcblx0XHRcdFx0XCJzaHVhblwiOiBcIlxcdTY4MTNcXHU2MmY0XFx1OTVlOVwiLFxyXG5cdFx0XHRcdFwic2h1YW5nXCI6IFwiXFx1OTcxY1xcdTUzY2NcXHU3MjNkXFx1NWI0MFwiLFxyXG5cdFx0XHRcdFwic2h1aVwiOiBcIlxcdThjMDFcXHU2YzM0XFx1Nzc2MVxcdTdhMGVcIixcclxuXHRcdFx0XHRcInNodW5cIjogXCJcXHU1NDJlXFx1NzdhY1xcdTk4N2FcXHU4MjFjXFx1NjA0MlwiLFxyXG5cdFx0XHRcdFwic2h1b1wiOiBcIlxcdThiZjRcXHU3ODU1XFx1NjcxNFxcdTcwYzFcXHU4NGI0XFx1NjQyMFxcdTU1Y2RcXHU2ZmVmXFx1NTk4MVxcdTY5Y2FcXHU5NGM0XCIsXHJcblx0XHRcdFx0XCJzaVwiOiBcIlxcdTY1YWZcXHU2NDk1XFx1NTYzNlxcdTYwMWRcXHU3OWMxXFx1NTNmOFxcdTRlMWRcXHU2YjdiXFx1ODA4NlxcdTViZmFcXHU1NWUzXFx1NTZkYlxcdTRmM2FcXHU0ZjNjXFx1OTk3MlxcdTVkZjNcXHU1M2FlXFx1NGZkZlxcdTUxNTVcXHU4M2U1XFx1NTQ5ZFxcdTZjNWNcXHU2Y2Q3XFx1NmY4Y1xcdTU5ZDJcXHU5YTc3XFx1N2YwY1xcdTc5NDBcXHU3OTYwXFx1OTUzNlxcdTllMzZcXHU4MDFjXFx1ODZmM1xcdTdiMjVcIixcclxuXHRcdFx0XHRcInNvbmdcIjogXCJcXHU2NzdlXFx1ODAzOFxcdTYwMDJcXHU5ODgyXFx1OTAwMVxcdTViOGJcXHU4YmJjXFx1OGJmNVxcdTUxYzdcXHU4M2Q4XFx1NWQyN1xcdTVkNjlcXHU1ZmVhXFx1NjA5YVxcdTZkZGVcXHU3YWU2XCIsXHJcblx0XHRcdFx0XCJzb3VcIjogXCJcXHU2NDFjXFx1ODI1OFxcdTY0ZGVcXHU1NWZkXFx1NTNkZlxcdTU1ZDZcXHU1NWZlXFx1OTk4YVxcdTZlYjJcXHU5OGQ1XFx1Nzc4ZFxcdTk1M2NcXHU4NzhiXCIsXHJcblx0XHRcdFx0XCJzdVwiOiBcIlxcdTgyY2ZcXHU5MTY1XFx1NGZkN1xcdTdkMjBcXHU5MDFmXFx1N2M5ZlxcdTUwZjNcXHU1ODUxXFx1NmVhZlxcdTViYmZcXHU4YmM5XFx1ODA4M1xcdTU5MTlcXHU4YzIxXFx1ODUwY1xcdTU1YzlcXHU2MTJiXFx1N2MwY1xcdTg5ZWJcXHU3YTIzXCIsXHJcblx0XHRcdFx0XCJzdWFuXCI6IFwiXFx1OTE3OFxcdTg0OWNcXHU3Yjk3XCIsXHJcblx0XHRcdFx0XCJzdWlcIjogXCJcXHU4NjdkXFx1OTY4YlxcdTk2OGZcXHU3ZWU1XFx1OWFkM1xcdTc4OGVcXHU1YzgxXFx1N2E1N1xcdTkwNDJcXHU5NmE3XFx1Nzk1ZlxcdTg0ZDFcXHU1MWFiXFx1OGMwN1xcdTZmYzlcXHU5MDgzXFx1NzFlN1xcdTc3MmRcXHU3NzYyXCIsXHJcblx0XHRcdFx0XCJzdW5cIjogXCJcXHU1YjU5XFx1NjM1ZlxcdTdiMGJcXHU4MzZhXFx1NzJmMlxcdTk4ZTdcXHU2OWFiXFx1OGRlM1xcdTk2YmNcIixcclxuXHRcdFx0XHRcInN1b1wiOiBcIlxcdTY4YWRcXHU1NTA2XFx1N2YyOVxcdTc0MTBcXHU3ZDIyXFx1OTUwMVxcdTYyNDBcXHU1NTIyXFx1NTVlNlxcdTVhMTFcXHU2ODZiXFx1Nzc0M1xcdTdmYTdcIixcclxuXHRcdFx0XHRcInRhXCI6IFwiXFx1NTg0Y1xcdTRlZDZcXHU1YjgzXFx1NTk3OVxcdTU4NTRcXHU3MzZkXFx1NjMxZVxcdThlNGJcXHU4ZTBmXFx1OTVmY1xcdTZlYmJcXHU5MDYyXFx1NjliYlxcdTZjOTNcIixcclxuXHRcdFx0XHRcInRhaVwiOiBcIlxcdTgwY2VcXHU4MmQ0XFx1NjJhY1xcdTUzZjBcXHU2Y2YwXFx1OTE1ZVxcdTU5MmFcXHU2MDAxXFx1NmM3MFxcdTkwYjBcXHU4NWI5XFx1ODBiZFxcdTcwYjFcXHU5NDliXFx1OGRjNlxcdTljOTBcIixcclxuXHRcdFx0XHRcInRhblwiOiBcIlxcdTU3NGRcXHU2NDRhXFx1OGQyYVxcdTc2MmJcXHU2ZWU5XFx1NTc1YlxcdTZhODBcXHU3NWYwXFx1NmY2ZFxcdThjMmRcXHU4YzA4XFx1NTc2NlxcdTZiZWZcXHU4ODkyXFx1NzhiM1xcdTYzYTJcXHU1M2Y5XFx1NzBhZFxcdTkwZWZcXHU4NTQ4XFx1NjYxOVxcdTk0YmRcXHU5NTJjXFx1ODk4M1wiLFxyXG5cdFx0XHRcdFwidGFuZ1wiOiBcIlxcdTZjNjRcXHU1ODU4XFx1NjQyYVxcdTU4MDJcXHU2OGUwXFx1ODE5YlxcdTU1MTBcXHU3Y2Q2XFx1NTBhNVxcdTk5NjdcXHU2ZThmXFx1NzQ2ZFxcdTk0ZjRcXHU5NTU3XFx1ODAyNVxcdTg3OTdcXHU4N2IzXFx1N2ZiMFxcdTkxYTNcIixcclxuXHRcdFx0XHRcInRoYW5nXCI6IFwiXFx1NTAxOFxcdThlYmFcXHU2ZGNjXCIsXHJcblx0XHRcdFx0XCJ0aGVuZ1wiOiBcIlxcdThkOWZcXHU3MGViXCIsXHJcblx0XHRcdFx0XCJ0YW9cIjogXCJcXHU2MzhmXFx1NmQ5YlxcdTZlZDRcXHU3ZWU2XFx1ODQwNFxcdTY4NDNcXHU5MDAzXFx1NmRkOFxcdTk2NzZcXHU4YmE4XFx1NTk1N1xcdTYzMTFcXHU5ZjE3XFx1NTU1NVxcdTk3ZWNcXHU5OTU1XCIsXHJcblx0XHRcdFx0XCJ0ZVwiOiBcIlxcdTcyNzlcIixcclxuXHRcdFx0XHRcInRlbmdcIjogXCJcXHU4NWU0XFx1ODE3ZVxcdTc1YmNcXHU4YThhXFx1NmVkNVwiLFxyXG5cdFx0XHRcdFwidGlcIjogXCJcXHU2OGFmXFx1NTI1NFxcdThlMjJcXHU5NTExXFx1NjNkMFxcdTk4OThcXHU4ZTQ0XFx1NTU3Y1xcdTRmNTNcXHU2NmZmXFx1NTY4ZlxcdTYwZDVcXHU2ZDk1XFx1NTI0M1xcdTVjNDlcXHU4MzUxXFx1NjA4Y1xcdTkwMTZcXHU3ZWU4XFx1N2YwN1xcdTllNDhcXHU4OGZjXFx1OTE4ZFwiLFxyXG5cdFx0XHRcdFwidGlhblwiOiBcIlxcdTU5MjlcXHU2ZGZiXFx1NTg2YlxcdTc1MzBcXHU3NTFjXFx1NjA2Y1xcdTgyMTRcXHU4MTQ2XFx1NjNhZFxcdTVmZGRcXHU5NjE3XFx1NmI4NFxcdTc1NGJcXHU5NGJmXFx1ODZiYVwiLFxyXG5cdFx0XHRcdFwidGlhb1wiOiBcIlxcdTY3NjFcXHU4ZmUyXFx1NzczYVxcdThkZjNcXHU0ZjdiXFx1Nzk2N1xcdTk0ZWJcXHU3YTk1XFx1OWY4NlxcdTljYTZcIixcclxuXHRcdFx0XHRcInRpZVwiOiBcIlxcdThkMzRcXHU5NGMxXFx1NWUxNlxcdTg0MWNcXHU5OTJlXCIsXHJcblx0XHRcdFx0XCJ0aW5nXCI6IFwiXFx1NTM4NVxcdTU0MmNcXHU3MGMzXFx1NmM0MFxcdTVlZjdcXHU1MDVjXFx1NGVhZFxcdTVlYWRcXHU2MzNhXFx1ODI0N1xcdTgzOWJcXHU4NDc2XFx1NWE3N1xcdTY4ODNcXHU4NzEzXFx1OTcwNlwiLFxyXG5cdFx0XHRcdFwidG9uZ1wiOiBcIlxcdTkwMWFcXHU2ODUwXFx1OTE2ZVxcdTc3YjNcXHU1NDBjXFx1OTRkY1xcdTVmNjRcXHU3YWU1XFx1Njg3NlxcdTYzNDVcXHU3YjUyXFx1N2VkZlxcdTc1ZGJcXHU0ZjVmXFx1NTBlZVxcdTRlZGRcXHU4MzNjXFx1NTVmNVxcdTYwNzhcXHU2ZjdjXFx1NzgzY1wiLFxyXG5cdFx0XHRcdFwidG91XCI6IFwiXFx1NTA3N1xcdTYyOTVcXHU1OTM0XFx1OTAwZlxcdTRlYTBcIixcclxuXHRcdFx0XHRcInR1XCI6IFwiXFx1NTFmOFxcdTc5YzNcXHU3YTgxXFx1NTZmZVxcdTVmOTJcXHU5MDE0XFx1NmQ4MlxcdTVjNjBcXHU1NzFmXFx1NTQxMFxcdTUxNTRcXHU1ODBkXFx1ODM3Y1xcdTgzZGZcXHU5NDhkXFx1OTE3NFwiLFxyXG5cdFx0XHRcdFwidHVhblwiOiBcIlxcdTZlNGRcXHU1NmUyXFx1NzU4M1wiLFxyXG5cdFx0XHRcdFwidHVpXCI6IFwiXFx1NjNhOFxcdTk4OTNcXHU4MTdmXFx1ODcxNVxcdTg5MmFcXHU5MDAwXFx1NWZkMlxcdTcxN2FcIixcclxuXHRcdFx0XHRcInR1blwiOiBcIlxcdTU0MWVcXHU1YzZmXFx1ODFjMFxcdTk5NjhcXHU2NmJlXFx1OGM1YVxcdTdhODBcIixcclxuXHRcdFx0XHRcInR1b1wiOiBcIlxcdTYyZDZcXHU2MjU4XFx1ODEzMVxcdTllMzVcXHU5NjQwXFx1OWE2ZVxcdTlhN2NcXHU2OTJkXFx1NTlhNVxcdTYyZDNcXHU1NTNlXFx1NGU0N1xcdTRmNTdcXHU1NzY4XFx1NWViOVxcdTZjYjFcXHU2N2RkXFx1NzgyM1xcdTdiYThcXHU4MjA0XFx1OGRjZVxcdTlmMGRcIixcclxuXHRcdFx0XHRcIndhXCI6IFwiXFx1NjMxNlxcdTU0YzdcXHU4NmQ5XFx1NmQzY1xcdTVhMDNcXHU3NGU2XFx1ODg5Y1xcdTRmNjRcXHU1YTMyXFx1ODE3ZFwiLFxyXG5cdFx0XHRcdFwid2FpXCI6IFwiXFx1NmI2YVxcdTU5MTZcIixcclxuXHRcdFx0XHRcIndhblwiOiBcIlxcdThjNGNcXHU1ZjJmXFx1NmU3ZVxcdTczYTlcXHU5ODdkXFx1NGUzOFxcdTcwZjdcXHU1YjhjXFx1Nzg5N1xcdTYzM2RcXHU2NjVhXFx1NzY5NlxcdTYwY2JcXHU1YjliXFx1NWE0OVxcdTRlMDdcXHU4MTU1XFx1NTI1Y1xcdTgyODRcXHU4MmNiXFx1ODNjMFxcdTdlYThcXHU3ZWZlXFx1NzQyY1xcdTgxMThcXHU3NTc5XFx1ODczZlxcdTdiYTJcIixcclxuXHRcdFx0XHRcIndhbmdcIjogXCJcXHU2YzZhXFx1NzM4YlxcdTRlYTFcXHU2Nzg5XFx1N2Y1MVxcdTVmODBcXHU2NWZhXFx1NjcxYlxcdTVmZDhcXHU1OTg0XFx1N2Y1NFxcdTVjMjJcXHU2MGQ4XFx1OGY4YlxcdTliNGRcIixcclxuXHRcdFx0XHRcIndlaVwiOiBcIlxcdTVhMDFcXHU1ZGNkXFx1NWZhZVxcdTUzNzFcXHU5N2U2XFx1OGZkZFxcdTY4NDVcXHU1NmY0XFx1NTUyZlxcdTYwZGZcXHU0ZTNhXFx1NmY0ZFxcdTdlZjRcXHU4MmM3XFx1ODQwZVxcdTU5ZDRcXHU0ZjFmXFx1NGYyYVxcdTVjM2VcXHU3ZWFjXFx1NjcyYVxcdTg1MWFcXHU1NDczXFx1NzU0ZlxcdTgwYzNcXHU1NTgyXFx1OWI0ZlxcdTRmNGRcXHU2ZTJkXFx1OGMxM1xcdTVjMDlcXHU2MTcwXFx1NTM2YlxcdTUwMmRcXHU1MDRlXFx1OGJmZlxcdTk2ODhcXHU4NDczXFx1ODU4N1xcdTVlMGZcXHU1ZTM3XFx1NWQzNFxcdTVkNmNcXHU3MzI1XFx1NzMyY1xcdTk1ZjFcXHU2Y2E5XFx1NmQyN1xcdTZkYTBcXHU5MDM2XFx1NWExM1xcdTczYWVcXHU5N2VhXFx1OGVjZVxcdTcwOWNcXHU3MTY4XFx1NzFhOFxcdTc1ZmZcXHU4MjQ5XFx1OWM5NFwiLFxyXG5cdFx0XHRcdFwid2VuXCI6IFwiXFx1NzYxZlxcdTZlMjlcXHU4NjhhXFx1NjU4N1xcdTk1ZmJcXHU3ZWI5XFx1NTQzYlxcdTdhMzNcXHU3ZDBhXFx1OTVlZVxcdTUyMGVcXHU2MTIwXFx1OTYwY1xcdTZjNzZcXHU3NGJhXFx1OTdlYlxcdTZiODFcXHU5NmVmXCIsXHJcblx0XHRcdFx0XCJ3ZW5nXCI6IFwiXFx1NTVlMVxcdTdmYzFcXHU3NGVlXFx1ODRjYVxcdTg1NzlcIixcclxuXHRcdFx0XHRcIndvXCI6IFwiXFx1NjMxZFxcdTg3MTdcXHU2ZGExXFx1N2E5ZFxcdTYyMTFcXHU2NWExXFx1NTM2N1xcdTYzZTFcXHU2YzgzXFx1ODNiNFxcdTVlNDRcXHU2ZTI1XFx1Njc0Y1xcdTgwOWZcXHU5ZjhjXCIsXHJcblx0XHRcdFx0XCJ3dVwiOiBcIlxcdTVkZWJcXHU1NDVjXFx1OTRhOFxcdTRlNGNcXHU2YzYxXFx1OGJlY1xcdTVjNGJcXHU2NWUwXFx1ODI5Y1xcdTY4YTdcXHU1NDNlXFx1NTQzNFxcdTZiY2JcXHU2YjY2XFx1NGU5NFxcdTYzNDJcXHU1MzQ4XFx1ODIxZVxcdTRmMGRcXHU0ZmFlXFx1NTc1ZVxcdTYyMGFcXHU5NmZlXFx1NjY2NFxcdTcyNjlcXHU1MmZmXFx1NTJhMVxcdTYwOWZcXHU4YmVmXFx1NTE0MFxcdTRlZjVcXHU5NjIyXFx1OTBhY1xcdTU3MmNcXHU4MmI0XFx1NWU5MVxcdTYwMDNcXHU1ZmU0XFx1NmQ2ZlxcdTViZTRcXHU4ZmQ1XFx1NTlhOVxcdTlhOWJcXHU3MjdlXFx1NzExMFxcdTllNDlcXHU5ZTVjXFx1ODcwOFxcdTkyYzhcXHU5ZjJmXCIsXHJcblx0XHRcdFx0XCJ4aVwiOiBcIlxcdTY2MTRcXHU3MTk5XFx1Njc5MFxcdTg5N2ZcXHU3ODUyXFx1NzdmZFxcdTY2NzBcXHU1NjNiXFx1NTQzOFxcdTk1MjFcXHU3MjdhXFx1N2EwMFxcdTYwNmZcXHU1ZTBjXFx1NjA4OVxcdTgxOWRcXHU1OTE1XFx1NjBkY1xcdTcxODRcXHU3MGVmXFx1NmVhYVxcdTZjNTBcXHU3MjgwXFx1NmE4NFxcdTg4YWRcXHU1ZTJkXFx1NGU2MFxcdTVhYjNcXHU1NTljXFx1OTRlM1xcdTZkMTdcXHU3Y2ZiXFx1OTY5OVxcdTYyMGZcXHU3ZWM2XFx1NTBkNlxcdTUxNmVcXHU5NmIwXFx1OTBkN1xcdTgzMWNcXHU4NDc4XFx1ODRmMFxcdTU5NWFcXHU1NTBmXFx1NWY5OVxcdTk5NjlcXHU5NjBiXFx1NmQ2MFxcdTZkYzVcXHU1YzYzXFx1NWIwOVxcdTczYmFcXHU2YTI4XFx1NjZlNlxcdTg5Y2JcXHU2YjM3XFx1NzFiOVxcdTc5OGFcXHU3OWE3XFx1OTRiOFxcdTc2OTlcXHU3YTc4XFx1ODcyNVxcdTg3Y2JcXHU4MjNlXFx1N2ZiMlxcdTdjOWVcXHU3ZmQ1XFx1OTFhZlxcdTlmMzdcIixcclxuXHRcdFx0XHRcInhpYVwiOiBcIlxcdTc3OGVcXHU4NjdlXFx1NTMyM1xcdTk3MWVcXHU4Zjk2XFx1NjY4N1xcdTVjZTFcXHU0ZmEwXFx1NzJlZFxcdTRlMGJcXHU1M2E2XFx1NTkwZlxcdTU0MTNcXHU2MzgwXFx1ODQ2ZFxcdTU1YzRcXHU3MmNlXFx1OTA1MFxcdTc0NTVcXHU3ODU2XFx1NzYxNVxcdTdmNDVcXHU5ZWUwXCIsXHJcblx0XHRcdFx0XCJ4aWFuXCI6IFwiXFx1OTUyOFxcdTUxNDhcXHU0ZWQ5XFx1OWM5Y1xcdTdlYTRcXHU1NGI4XFx1OGQyNFxcdTg4NTRcXHU4MjM3XFx1OTVmMlxcdTZkOGVcXHU1ZjI2XFx1NWFjY1xcdTY2M2VcXHU5NjY5XFx1NzNiMFxcdTczMmVcXHU1M2JmXFx1ODE3YVxcdTk5ODVcXHU3ZmExXFx1NWJhYVxcdTk2NzdcXHU5NjUwXFx1N2ViZlxcdTUxYmNcXHU4NWQzXFx1NWM5OFxcdTczMDNcXHU2NmI5XFx1NWEzNFxcdTZjMTlcXHU3OTQ2XFx1OWU0N1xcdTc1ZWJcXHU4NmFjXFx1N2I0NVxcdTdjN2NcXHU5MTcwXFx1OGRmOVwiLFxyXG5cdFx0XHRcdFwieGlhbmdcIjogXCJcXHU3NmY4XFx1NTNhMlxcdTk1NzZcXHU5OTk5XFx1N2JiMVxcdTg5NDRcXHU2ZTU4XFx1NGU2MVxcdTdmZDRcXHU3OTY1XFx1OGJlNlxcdTYwZjNcXHU1NGNkXFx1NGVhYlxcdTk4NzlcXHU1ZGY3XFx1NmE2MVxcdTUwY2ZcXHU1NDExXFx1OGM2MVxcdTgyOTdcXHU4NDU5XFx1OTk3N1xcdTVlYTBcXHU5YWE3XFx1N2YwM1xcdTg3ZDNcXHU5YzllXFx1OThlOFwiLFxyXG5cdFx0XHRcdFwieGlhb1wiOiBcIlxcdTg0MjdcXHU3ODVkXFx1OTcwNFxcdTUyNGFcXHU1NGVlXFx1NTZhM1xcdTk1MDBcXHU2ZDg4XFx1NWJiNVxcdTZkYzZcXHU2NjUzXFx1NWMwZlxcdTViNWRcXHU2ODIxXFx1ODA5NlxcdTU1NzhcXHU3YjExXFx1NjU0OFxcdTU0ZDNcXHU1NGJiXFx1NWQyNFxcdTZmNDdcXHU5MDBkXFx1OWE4MVxcdTdlZTFcXHU2N2FkXFx1NjdiNVxcdTdiNzFcXHU3YmFiXFx1OWI0OFwiLFxyXG5cdFx0XHRcdFwieGllXCI6IFwiXFx1Njk1NFxcdTRlOWJcXHU2YjQ3XFx1ODc0ZVxcdTk3OGJcXHU1MzRmXFx1NjMxZlxcdTY0M2FcXHU5MGFhXFx1NjU5Y1xcdTgwYzFcXHU4YzEwXFx1NTE5OVxcdTY4YjBcXHU1Mzc4XFx1ODdmOVxcdTYxYzhcXHU2Y2M0XFx1NmNmYlxcdThjMjJcXHU1YzUxXFx1NTA1NVxcdTRlYjVcXHU1MmYwXFx1NzFlZVxcdTg1YTRcXHU2NGI3XFx1NWVlOFxcdTcwMjNcXHU5MDgyXFx1N2VjMVxcdTdmMmNcXHU2OWFkXFx1Njk4ZFxcdTZiNTlcXHU4ZTllXCIsXHJcblx0XHRcdFx0XCJ4aW5cIjogXCJcXHU4NWFhXFx1ODJhZlxcdTk1MGNcXHU2YjIzXFx1OGY5YlxcdTY1YjBcXHU1ZmZiXFx1NWZjM1xcdTRmZTFcXHU4ODQ1XFx1NTZkZlxcdTk5YThcXHU4Mzk4XFx1NmI0NlxcdTk0ZmRcXHU5NDZiXCIsXHJcblx0XHRcdFx0XCJ4aW5nXCI6IFwiXFx1NjYxZlxcdTgxNjVcXHU3MzI5XFx1NjBmYVxcdTUxNzRcXHU1MjExXFx1NTc4YlxcdTVmNjJcXHU5MGEyXFx1ODg0Y1xcdTkxOTJcXHU1ZTc4XFx1Njc0ZlxcdTYwMjdcXHU1OWQzXFx1OTY0OVxcdTgzNDdcXHU4MzY1XFx1NjRlNFxcdTYwYmJcXHU3ODRlXCIsXHJcblx0XHRcdFx0XCJ4aW9uZ1wiOiBcIlxcdTUxNDRcXHU1MWY2XFx1ODBmOFxcdTUzMDhcXHU2Yzc5XFx1OTZjNFxcdTcxOGFcXHU4MjhlXCIsXHJcblx0XHRcdFx0XCJ4aXVcIjogXCJcXHU0ZjExXFx1NGZlZVxcdTdmOWVcXHU2NzNkXFx1NTVjNVxcdTk1MDhcXHU3OWMwXFx1ODg5NlxcdTdlZTNcXHU4M2EwXFx1NWNhYlxcdTk5OTBcXHU1ZWE1XFx1OWUzYVxcdThjODVcXHU5YWY5XCIsXHJcblx0XHRcdFx0XCJ4dVwiOiBcIlxcdTU4OWZcXHU2MjBjXFx1OTcwMFxcdTg2NWFcXHU1NjE4XFx1OTg3YlxcdTVmOTBcXHU4YmI4XFx1ODRjNFxcdTkxNTdcXHU1M2Q5XFx1NjVlZFxcdTVlOGZcXHU3NTVjXFx1NjA2NFxcdTdkNmVcXHU1YTdmXFx1N2VlYVxcdTdlZWRcXHU4YmI0XFx1OGJlOVxcdTU3MjlcXHU4NGZmXFx1NjAzNVxcdTZkMmJcXHU2ZTg2XFx1OTg3Y1xcdTY4MjlcXHU3MTY2XFx1NzgwOVxcdTc2ZjFcXHU4MGU1XFx1N2NjOFxcdTkxOTFcIixcclxuXHRcdFx0XHRcInh1YW5cIjogXCJcXHU4ZjY5XFx1NTVhN1xcdTViYTNcXHU2MGFjXFx1NjVjYlxcdTczODRcXHU5MDA5XFx1NzY2M1xcdTc3MjlcXHU3ZWRhXFx1NTEwN1xcdThjMTZcXHU4NDMxXFx1NjNjZVxcdTk5OTRcXHU2Y2ViXFx1NmQzNVxcdTZlMzJcXHU2ZjI5XFx1NzQ4N1xcdTY5NjZcXHU2Njg0XFx1NzBhYlxcdTcxNGFcXHU3OGI5XFx1OTRjOVxcdTk1NWZcXHU3NWMzXCIsXHJcblx0XHRcdFx0XCJ4dWVcIjogXCJcXHU5Nzc0XFx1ODU5YlxcdTViNjZcXHU3YTc0XFx1OTZlYVxcdTg4NDBcXHU1NjcxXFx1NmNmNlxcdTljZDVcIixcclxuXHRcdFx0XHRcInh1blwiOiBcIlxcdTUyY2JcXHU3MThmXFx1NWZhYVxcdTY1ZWNcXHU4YmUyXFx1NWJmYlxcdTlhNmZcXHU1ZGUxXFx1NmI4OVxcdTZjNWJcXHU4YmFkXFx1OGJhZlxcdTkwMGFcXHU4ZmM1XFx1NWRmZFxcdTU3ZDlcXHU4MzQwXFx1ODViMFxcdTVjY2JcXHU1Zjg3XFx1NmQ1NFxcdTY2ZGJcXHU3YWE4XFx1OTFiYVxcdTljOWZcIixcclxuXHRcdFx0XHRcInlhXCI6IFwiXFx1NTM4YlxcdTYyYmNcXHU5ZTI2XFx1OWUyZFxcdTU0NDBcXHU0ZTJiXFx1ODJiZFxcdTcyNTlcXHU4NjljXFx1NWQxNlxcdTg4NTlcXHU2ZGFmXFx1OTZjNVxcdTU0ZDFcXHU0ZTlhXFx1OGJiNlxcdTRmMjJcXHU2M2UwXFx1NTQxNlxcdTVjODhcXHU4ZmQzXFx1NWEwNVxcdTc0MGFcXHU2ODYwXFx1NmMyOVxcdTc4MTFcXHU3NzVhXFx1NzVkNlwiLFxyXG5cdFx0XHRcdFwieWFuXCI6IFwiXFx1NzEwOVxcdTU0YmRcXHU5NjA5XFx1NzBkZlxcdTZkZjlcXHU3NmQwXFx1NGUyNVxcdTc4MTRcXHU4NzEyXFx1NWNhOVxcdTVlZjZcXHU4YTAwXFx1OTg5Y1xcdTk2MGVcXHU3MDhlXFx1NmNiZlxcdTU5NDRcXHU2M2E5XFx1NzczY1xcdTg4NGRcXHU2ZjE0XFx1ODI3M1xcdTU4MzBcXHU3MWQ1XFx1NTM4Y1xcdTc4MWFcXHU5NmMxXFx1NTUwMVxcdTVmNjZcXHU3MTMwXFx1NWJiNFxcdThjMWFcXHU5YThjXFx1NTNhM1xcdTk3NjVcXHU4ZDVkXFx1NGZlOFxcdTUwNDNcXHU1MTU2XFx1OGJhMFxcdThjMzNcXHU5MGZlXFx1OTEyMlxcdTgyYWJcXHU4M2Y4XFx1NWQyNlxcdTYwNzlcXHU5NWViXFx1OTYwZlxcdTZkMDdcXHU2ZTZlXFx1NmVkZlxcdTU5OGRcXHU1YWUzXFx1NzQzMFxcdTY2NGZcXHU4MGVkXFx1ODE0Y1xcdTcxMzFcXHU3ZjY4XFx1N2I3NVxcdTkxN2RcXHU5YjQ3XFx1OTkwZFxcdTlmMzlcIixcclxuXHRcdFx0XHRcInlhbmdcIjogXCJcXHU2YjgzXFx1NTkyZVxcdTllMmZcXHU3OWU3XFx1Njc2OFxcdTYyNmNcXHU0ZjZmXFx1NzVhMVxcdTdmOGFcXHU2ZDBiXFx1OTYzM1xcdTZjMjdcXHU0ZWYwXFx1NzVkMlxcdTUxN2JcXHU2ODM3XFx1NmYzZVxcdTVmODlcXHU2MDBmXFx1NmNmMVxcdTcwODBcXHU3MGNhXFx1NjA1OVxcdTg2ZDhcXHU5Nzg1XCIsXHJcblx0XHRcdFx0XCJ5YW9cIjogXCJcXHU5MDgwXFx1ODE3MFxcdTU5OTZcXHU3NDc2XFx1NjQ0N1xcdTVjMjdcXHU5MDY1XFx1N2E5MVxcdThjMjNcXHU1OWRhXFx1NTRhY1xcdTgyMDBcXHU4MzZmXFx1ODk4MVxcdTgwMDBcXHU1OTJkXFx1NzIzYlxcdTU0MDZcXHU1ZDNlXFx1NWZhZFxcdTcwMzlcXHU1ZTdhXFx1NzNlN1xcdTY3NzNcXHU2NmRjXFx1ODBiNFxcdTllNWVcXHU3YTg4XFx1N2U0N1xcdTljZDBcIixcclxuXHRcdFx0XHRcInllXCI6IFwiXFx1NjkzMFxcdTU2NGVcXHU4MDM2XFx1NzIzN1xcdTkxY2VcXHU1MWI2XFx1NGU1ZlxcdTk4NzVcXHU2Mzk2XFx1NGUxYVxcdTUzZjZcXHU2NmYzXFx1ODE0YlxcdTU5MWNcXHU2ZGIyXFx1OGMxMlxcdTkwYmFcXHU2M2Y2XFx1OTk4MFxcdTY2NTRcXHU3MGU4XFx1OTRkOFwiLFxyXG5cdFx0XHRcdFwieWlcIjogXCJcXHU0ZTAwXFx1NThmOVxcdTUzM2JcXHU2M2Q2XFx1OTRmMVxcdTRmOWRcXHU0ZjBhXFx1ODg2M1xcdTk4OTBcXHU1OTM3XFx1OTA1N1xcdTc5ZmJcXHU0ZWVhXFx1ODBmMFxcdTc1OTFcXHU2YzgyXFx1NWI5Y1xcdTU5ZThcXHU1ZjVkXFx1NjkwNVxcdTg2ODFcXHU1MDFhXFx1NWRmMlxcdTRlNTlcXHU3N2UzXFx1NGVlNVxcdTgyN2FcXHU2MjkxXFx1NjYxM1xcdTkwOTFcXHU1Yzc5XFx1NGViZlxcdTVmNzlcXHU4MWM2XFx1OTAzOFxcdTgwODRcXHU3NWFiXFx1NGVhNlxcdTg4ZDRcXHU2MTBmXFx1NmJjNVxcdTVmYzZcXHU0ZTQ5XFx1NzZjYVxcdTZlYTJcXHU4YmUzXFx1OGJhZVxcdThjMGFcXHU4YmQxXFx1NWYwMlxcdTdmZmNcXHU3ZmNjXFx1N2VjZVxcdTUyMDhcXHU1MjkzXFx1NGY3ZVxcdThiZDJcXHU1NzJhXFx1NTcyZlxcdTU3ZjhcXHU2MWZmXFx1ODJlMVxcdTg1OGZcXHU1ZjA4XFx1NTk1NVxcdTYzMzlcXHU1ZjBiXFx1NTQ1M1xcdTU0YTZcXHU1NGJmXFx1NTY2YlxcdTVjYzRcXHU1ZGI3XFx1NzMxN1xcdTk5NzRcXHU2MDNmXFx1NjAyMVxcdTYwOTJcXHU2ZjJhXFx1OGZlNFxcdTlhN2ZcXHU3ZjIyXFx1NmJhYVxcdThkM2JcXHU2NWQ2XFx1NzFhMFxcdTk0ODdcXHU5NTUyXFx1OTU3MVxcdTc1Y2RcXHU3NjE3XFx1NzY1NFxcdTdmY2FcXHU4ODY0XFx1ODczNFxcdTgyMjNcXHU3ZmJmXFx1N2ZmM1xcdTkxNGZcXHU5ZWRmXCIsXHJcblx0XHRcdFx0XCJ5aW5cIjogXCJcXHU4MzM1XFx1ODM2YlxcdTU2ZTBcXHU2YmI3XFx1OTdmM1xcdTk2MzRcXHU1OWZiXFx1NTQxZlxcdTk0ZjZcXHU2ZGViXFx1NWJjNVxcdTk5NmVcXHU1YzM5XFx1NWYxNVxcdTk2OTBcXHU1MzcwXFx1ODBlNFxcdTkxMWVcXHU1ODE5XFx1ODMxYVxcdTU1OTFcXHU3MmZhXFx1NTkyNFxcdTZjMjRcXHU5NGRmXFx1NzYzZVxcdTg2OTNcXHU5NzJhXFx1OWY4OFwiLFxyXG5cdFx0XHRcdFwieWluZ1wiOiBcIlxcdTgyZjFcXHU2YTMxXFx1NWE3NFxcdTllNzBcXHU1ZTk0XFx1N2YyOFxcdTgzYjlcXHU4NDI0XFx1ODQyNVxcdTgzNjdcXHU4NzQ3XFx1OGZjZVxcdThkNjJcXHU3NmM4XFx1NWY3MVxcdTk4OTZcXHU3ODZjXFx1NjYyMFxcdTViMzRcXHU5MGUyXFx1ODMxNFxcdTgzYmFcXHU4NDI2XFx1NjQ4NFxcdTU2MjRcXHU4MWJhXFx1NmVlMlxcdTZmNDZcXHU3MDFiXFx1NzQ1YlxcdTc0OGVcXHU2OTc5XFx1OWU2NlxcdTc2M2ZcXHU5ODhkXFx1N2Y0MlwiLFxyXG5cdFx0XHRcdFwieW9cIjogXCJcXHU1NGRmXFx1NTUzN1wiLFxyXG5cdFx0XHRcdFwieW9uZ1wiOiBcIlxcdTYyZTVcXHU0ZjYzXFx1ODFjM1xcdTc1YzhcXHU1ZWI4XFx1OTZjZFxcdThlMGFcXHU4NmY5XFx1NTQ4ZlxcdTZjZjNcXHU2ZDhjXFx1NmMzOFxcdTYwN2ZcXHU1MmM3XFx1NzUyOFxcdTRmZDFcXHU1OGM1XFx1NTg4OVxcdTYxNzVcXHU5MDk1XFx1OTU1YlxcdTc1MmNcXHU5Y2Q5XFx1OTk1NFwiLFxyXG5cdFx0XHRcdFwieW91XCI6IFwiXFx1NWU3ZFxcdTRmMThcXHU2MGEwXFx1NWZlN1xcdTVjMjRcXHU3NTMxXFx1OTBhZVxcdTk0YzBcXHU3MmI5XFx1NmNiOVxcdTZlMzhcXHU5MTQ5XFx1NjcwOVxcdTUzY2JcXHU1M2YzXFx1NGY1MVxcdTkxYzlcXHU4YmYxXFx1NTNjOFxcdTVlN2NcXHU1MzYzXFx1NjUzOFxcdTRmOTFcXHU4M2I4XFx1NTQ2NlxcdTU2ZmZcXHU1YmE1XFx1NjdkYVxcdTczMzdcXHU3MjU2XFx1OTRkNVxcdTc1YTNcXHU4NzYzXFx1OWM3ZlxcdTllZGRcXHU5ZjJjXCIsXHJcblx0XHRcdFx0XCJ5dVwiOiBcIlxcdThmYzJcXHU2ZGU0XFx1NGU4ZVxcdTc2YzJcXHU2OTg2XFx1ODY1ZVxcdTYxMWFcXHU4MjA2XFx1NGY1OVxcdTRmZGVcXHU5MDNlXFx1OWM3Y1xcdTYxMDlcXHU2ZTFkXFx1NmUxNFxcdTk2ODVcXHU0ZTg4XFx1NWEzMVxcdTk2ZThcXHU0ZTBlXFx1NWM3ZlxcdTc5YjlcXHU1Yjg3XFx1OGJlZFxcdTdmYmRcXHU3Mzg5XFx1NTdkZlxcdTgyOGJcXHU5MGMxXFx1NTQwMVxcdTkwNDdcXHU1NWJiXFx1NWNlYVxcdTVmYTFcXHU2MTA4XFx1NmIzMlxcdTcyZjFcXHU4MGIyXFx1OGE4OVxcdTZkNzRcXHU1YmQzXFx1ODhkNVxcdTk4ODRcXHU4YzZiXFx1OWE2ZFxcdTc5YmFcXHU2YmQzXFx1NGYxYlxcdTRmZTNcXHU4YzAwXFx1OGMxNVxcdTg0MzhcXHU4NGUzXFx1NjNjNFxcdTU1ODFcXHU1NzA0XFx1NTcwOVxcdTVkNWJcXHU3MmYzXFx1OTk2YlxcdTVlYmVcXHU5NjA4XFx1NTlhYVxcdTU5YTRcXHU3ZWExXFx1NzQ1Y1xcdTY2MzFcXHU4OWNlXFx1ODE3NFxcdTZiMjRcXHU2NWJjXFx1NzE1Y1xcdTcxZTBcXHU4MDdmXFx1OTRiMFxcdTllNDZcXHU3NjEwXFx1NzYwMFxcdTdhYjNcXHU4NzUzXFx1N2FmZFxcdTgyMDFcXHU5NmU5XFx1OWY4OVwiLFxyXG5cdFx0XHRcdFwieXVhblwiOiBcIlxcdTllMzNcXHU2ZTBhXFx1NTFhNFxcdTUxNDNcXHU1N2EzXFx1ODg4MVxcdTUzOWZcXHU2M2Y0XFx1OGY5NVxcdTU2ZWRcXHU1NDU4XFx1NTcwNlxcdTczM2ZcXHU2ZTkwXFx1N2YxOFxcdThmZGNcXHU4MmQxXFx1NjEzZlxcdTYwMjhcXHU5NjYyXFx1NTg2Y1xcdTZjODVcXHU1YTliXFx1NzQ1N1xcdTZhN2NcXHU3MjMwXFx1NzcyMlxcdTllMjJcXHU4Nzg4XFx1OWYwYlwiLFxyXG5cdFx0XHRcdFwieXVlXCI6IFwiXFx1NjZmMFxcdTdlYTZcXHU4ZDhhXFx1OGRjM1xcdTk0YTVcXHU1Y2IzXFx1N2NhNFxcdTY3MDhcXHU2MGE2XFx1OTYwNVxcdTlmYTBcXHU2YTNlXFx1NTIxNlxcdTk0YmFcIixcclxuXHRcdFx0XHRcInl1blwiOiBcIlxcdTgwMThcXHU0ZTkxXFx1OTBlN1xcdTUzMDBcXHU5NjY4XFx1NTE0MVxcdThmZDBcXHU4NTc0XFx1OTE1ZFxcdTY2NTVcXHU5N2Y1XFx1NWI1NVxcdTkwZDNcXHU4MmI4XFx1NzJjMVxcdTYwN2RcXHU3ZWFkXFx1NmI5MlxcdTY2MDBcXHU2YzMyXCIsXHJcblx0XHRcdFx0XCJ6YVwiOiBcIlxcdTUzMWRcXHU3ODM4XFx1Njc0MlxcdTYyZjZcXHU1NDgyXCIsXHJcblx0XHRcdFx0XCJ6YWlcIjogXCJcXHU2ODNkXFx1NTRjOVxcdTcwN2VcXHU1YmIwXFx1OGY3ZFxcdTUxOGRcXHU1NzI4XFx1NTRiMVxcdTVkM2RcXHU3NTNlXCIsXHJcblx0XHRcdFx0XCJ6YW5cIjogXCJcXHU2NTEyXFx1NjY4MlxcdThkNWVcXHU3NGQyXFx1NjYxZFxcdTdjMmFcXHU3Y2NjXFx1OGRiMVxcdTkzM2VcIixcclxuXHRcdFx0XHRcInphbmdcIjogXCJcXHU4ZDQzXFx1ODEwZlxcdTg0NmNcXHU1OTU4XFx1NjIxNVxcdTgxZTdcIixcclxuXHRcdFx0XHRcInphb1wiOiBcIlxcdTkwNmRcXHU3Y2RmXFx1NTFmZlxcdTg1ZmJcXHU2N2EzXFx1NjVlOVxcdTZmYTFcXHU4NmE0XFx1OGU4MVxcdTU2NmFcXHU5MDIwXFx1NzY4MlxcdTcwNzZcXHU3MWU1XFx1NTUyM1xcdTdmMmJcIixcclxuXHRcdFx0XHRcInplXCI6IFwiXFx1OGQyM1xcdTYyZTlcXHU1MjE5XFx1NmNmZFxcdTRlYzRcXHU4ZDVjXFx1NTU2N1xcdThmZWVcXHU2NjAzXFx1N2IyZVxcdTdiYTZcXHU4MjM0XCIsXHJcblx0XHRcdFx0XCJ6ZWlcIjogXCJcXHU4ZDNjXCIsXHJcblx0XHRcdFx0XCJ6ZW5cIjogXCJcXHU2MDBlXFx1OGMyZVwiLFxyXG5cdFx0XHRcdFwiemVuZ1wiOiBcIlxcdTU4OWVcXHU2MThlXFx1NjZmZVxcdThkNjBcXHU3ZjJmXFx1NzUxMVxcdTdmN2VcXHU5NTAzXCIsXHJcblx0XHRcdFx0XCJ6aGFcIjogXCJcXHU2MjRlXFx1NTViM1xcdTZlMjNcXHU2NzJkXFx1OGY2N1xcdTk0ZTFcXHU5NWY4XFx1NzcyOFxcdTY4MDVcXHU2OWE4XFx1NTQ4YlxcdTRlNGRcXHU3MGI4XFx1OGJjOFxcdTYzZjhcXHU1NDEyXFx1NTRhNFxcdTU0ZjNcXHU2MDBkXFx1NzgxZlxcdTc1YzRcXHU4NmIxXFx1OWY0NFwiLFxyXG5cdFx0XHRcdFwiemhhaVwiOiBcIlxcdTY0NThcXHU2NThiXFx1NWI4NVxcdTdhODRcXHU1MDNhXFx1NWJlOFxcdTc4MjZcIixcclxuXHRcdFx0XHRcInpoYW5cIjogXCJcXHU3N2JiXFx1NmJlMVxcdThhNzlcXHU3Yzk4XFx1NmNiZVxcdTc2Y2ZcXHU2NWE5XFx1OGY5N1xcdTVkMmRcXHU1YzU1XFx1ODYzOFxcdTY4MDhcXHU1MzYwXFx1NjIxOFxcdTdhZDlcXHU2ZTViXFx1N2VmZFxcdThjMzVcXHU2NDBjXFx1NjVjM1wiLFxyXG5cdFx0XHRcdFwiemhhbmdcIjogXCJcXHU2YTFmXFx1N2FlMFxcdTVmNzBcXHU2ZjMzXFx1NWYyMFxcdTYzOGNcXHU2ZGE4XFx1Njc1NlxcdTRlMDhcXHU1ZTEwXFx1OGQyNlxcdTRlZDdcXHU4MGMwXFx1NzYzNFxcdTk2OWNcXHU0ZWM5XFx1OTEyM1xcdTVlNWJcXHU1ZDgyXFx1NzM1MFxcdTVhZGNcXHU3NDhiXFx1ODdkMVwiLFxyXG5cdFx0XHRcdFwiemhhb1wiOiBcIlxcdTYyZGJcXHU2NjJkXFx1NjI3ZVxcdTZjYmNcXHU4ZDc1XFx1NzE2N1xcdTdmNjlcXHU1MTQ2XFx1ODA4N1xcdTUzZWNcXHU3MjJhXFx1OGJjZlxcdTY4ZjlcXHU5NDhhXFx1N2IwYVwiLFxyXG5cdFx0XHRcdFwiemhlXCI6IFwiXFx1OTA2ZVxcdTYyOThcXHU1NGYyXFx1ODZmMFxcdThmOTlcXHU4MDA1XFx1OTUxN1xcdTg1MTdcXHU4ZmQ5XFx1NmQ1OVxcdThjMmFcXHU5NjZjXFx1NjdkOFxcdThmODRcXHU3OGQ0XFx1OWU2N1xcdTg5MWFcXHU4NzA3XFx1OGQ2ZFwiLFxyXG5cdFx0XHRcdFwiemhlblwiOiBcIlxcdTczY2RcXHU2NTlmXFx1NzcxZlxcdTc1MDRcXHU3ODI3XFx1ODFmYlxcdThkMWVcXHU5NDg4XFx1NGZhNlxcdTY3OTVcXHU3NWI5XFx1OGJjYVxcdTk3MDdcXHU2MzJmXFx1OTU0N1xcdTk2MzVcXHU3ZjFjXFx1Njg2MlxcdTY5OWJcXHU4Zjc4XFx1OGQ0OFxcdTgwZDdcXHU2NzE1XFx1Nzk2ZlxcdTc1NWJcXHU5ZTI5XCIsXHJcblx0XHRcdFx0XCJ6aGVuZ1wiOiBcIlxcdTg0YjhcXHU2MzIzXFx1Nzc0MVxcdTVmODFcXHU3MmYwXFx1NGU4OVxcdTYwMTRcXHU2NTc0XFx1NjJlZlxcdTZiNjNcXHU2NTNmXFx1NWUyN1xcdTc1YzdcXHU5MGQxXFx1OGJjMVxcdThiZTRcXHU1Y2U1XFx1OTRiMlxcdTk0ZWVcXHU3YjVkXCIsXHJcblx0XHRcdFx0XCJ6aGlcIjogXCJcXHU4MjlkXFx1Njc5ZFxcdTY1MmZcXHU1NDMxXFx1ODcxOFxcdTc3ZTVcXHU4MGEyXFx1ODEwMlxcdTZjNDFcXHU0ZTRiXFx1N2VjN1xcdTgwNGNcXHU3NmY0XFx1NjkwZFxcdTZiOTZcXHU2MjY3XFx1NTAzY1xcdTRmODRcXHU1NzQwXFx1NjMwN1xcdTZiNjJcXHU4ZGJlXFx1NTNlYVxcdTY1ZThcXHU3ZWI4XFx1NWZkN1xcdTYzMWFcXHU2M2I3XFx1ODFmM1xcdTgxZjRcXHU3ZjZlXFx1NWUxY1xcdTVjZDlcXHU1MjM2XFx1NjY3YVxcdTc5ZTlcXHU3YTFhXFx1OGQyOFxcdTcwOTlcXHU3NWQ0XFx1NmVkZVxcdTZjYmJcXHU3YTkyXFx1NTM2ZVxcdTk2NWZcXHU5MGM1XFx1NTdmNFxcdTgyYjdcXHU2NDZkXFx1NWUxOVxcdTVmZWVcXHU1ZjU4XFx1NTRhYlxcdTlhOThcXHU2ODA5XFx1NjdiM1xcdTY4MDBcXHU2ODRlXFx1OGY3NVxcdThmN2VcXHU2NTM0XFx1OGQzZFxcdTgxYTNcXHU3OTQ5XFx1Nzk1N1xcdTllZjlcXHU5NmM5XFx1OWUzN1xcdTc1ZTNcXHU4NmVkXFx1N2Q3N1xcdTkxNmZcXHU4ZGQ2XFx1OGUyY1xcdThlMmZcXHU4Yzc4XFx1ODllZlwiLFxyXG5cdFx0XHRcdFwiemhvbmdcIjogXCJcXHU0ZTJkXFx1NzZjNVxcdTVmZTBcXHU5NDlmXFx1ODg3N1xcdTdlYzhcXHU3OWNkXFx1ODBiZlxcdTkxY2RcXHU0ZWYyXFx1NGYxN1xcdTUxYTJcXHU5NTNhXFx1ODdiZFxcdTgyMDJcXHU4MjJmXFx1OGUzNVwiLFxyXG5cdFx0XHRcdFwiemhvdVwiOiBcIlxcdTgyMWZcXHU1NDY4XFx1NWRkZVxcdTZkMzJcXHU4YmNjXFx1N2NhNVxcdThmNzRcXHU4MDk4XFx1NWUxYVxcdTU0OTJcXHU3NmIxXFx1NWI5OVxcdTY2M2NcXHU5YWE0XFx1NTU0NFxcdTc3NDBcXHU1MDFjXFx1OGJmOVxcdTgzNmVcXHU5YjNiXFx1N2VhM1xcdTgwYzRcXHU3OGExXFx1N2M0MFxcdTgyMzNcXHU5MTRlXFx1OWNiN1wiLFxyXG5cdFx0XHRcdFwiemh1XCI6IFwiXFx1NzNlMFxcdTY4MmFcXHU4NmRiXFx1NjczMVxcdTczMmFcXHU4YmY4XFx1OGJkYlxcdTkwMTBcXHU3YWY5XFx1NzBkYlxcdTcxNmVcXHU2MmM0XFx1NzdhOVxcdTU2MzFcXHU0ZTNiXFx1ODQ1N1xcdTY3ZjFcXHU1MmE5XFx1ODZjMFxcdThkMmVcXHU5NGY4XFx1N2I1MVxcdTRmNGZcXHU2Y2U4XFx1Nzk1ZFxcdTlhN2JcXHU0ZjJiXFx1NGY4ZlxcdTkwYmVcXHU4MmNlXFx1ODMzMVxcdTZkMTlcXHU2ZTFhXFx1NmY3NFxcdTlhN2FcXHU2NzdjXFx1NjllMFxcdTZhNjVcXHU3MGI3XFx1OTRlMlxcdTc1YjBcXHU3NjAzXFx1ODZiMFxcdTdhZmFcXHU3YmI4XFx1N2ZlNVxcdThlODVcXHU5ZTg4XCIsXHJcblx0XHRcdFx0XCJ6aHVhXCI6IFwiXFx1NjI5M1wiLFxyXG5cdFx0XHRcdFwiemh1YWlcIjogXCJcXHU2MmZkXCIsXHJcblx0XHRcdFx0XCJ6aHVhblwiOiBcIlxcdTRlMTNcXHU3ODE2XFx1OGY2Y1xcdTY0YjBcXHU4ZDVhXFx1N2JjNlxcdTYyOWZcXHU1NTZkXFx1OTg5YlwiLFxyXG5cdFx0XHRcdFwiemh1YW5nXCI6IFwiXFx1Njg2OVxcdTVlODRcXHU4OGM1XFx1NTk4NlxcdTY0OWVcXHU1OGVlXFx1NzJiNlxcdTRlMmNcIixcclxuXHRcdFx0XHRcInpodWlcIjogXCJcXHU2OTBlXFx1OTUyNVxcdThmZmRcXHU4ZDU4XFx1NTc2MFxcdTdmMDBcXHU4NDExXFx1OWE5M1xcdTdmMTJcIixcclxuXHRcdFx0XHRcInpodW5cIjogXCJcXHU4YzA2XFx1NTFjNlwiLFxyXG5cdFx0XHRcdFwiemh1b1wiOiBcIlxcdTYzNDlcXHU2MmQ5XFx1NTM1M1xcdTY4NGNcXHU3NDIyXFx1ODMwMVxcdTkxNGNcXHU3MDdjXFx1NmQ0YVxcdTUwMmNcXHU4YmZjXFx1NWVmNFxcdTg1NWVcXHU2NGUyXFx1NTU1Y1xcdTZkNWVcXHU2ZGJmXFx1Njc1M1xcdTcxMmZcXHU3OTlhXFx1NjVhYlwiLFxyXG5cdFx0XHRcdFwiemlcIjogXCJcXHU1MTc5XFx1NTRhOFxcdThkNDRcXHU1OWZmXFx1NmVjYlxcdTZkYzRcXHU1YjVjXFx1N2QyYlxcdTRlZDRcXHU3YzdkXFx1NmVkM1xcdTViNTBcXHU4MWVhXFx1NmUwZFxcdTViNTdcXHU4YzE4XFx1NWQ2YlxcdTU5Y2FcXHU1YjczXFx1N2YwMVxcdTY4OTNcXHU4ZjhlXFx1OGQ0MFxcdTYwNjNcXHU3NzI2XFx1OTUzMVxcdTc5ZWRcXHU4MDE0XFx1N2IyYlxcdTdjYTJcXHU4OWRjXFx1OGEzZVxcdTljYmJcXHU5YWVkXCIsXHJcblx0XHRcdFx0XCJ6b25nXCI6IFwiXFx1OWIwM1xcdTY4ZDVcXHU4ZTJhXFx1NWI5N1xcdTdlZmNcXHU2MDNiXFx1N2ViNVxcdTgxNTlcXHU3Y2JkXCIsXHJcblx0XHRcdFx0XCJ6b3VcIjogXCJcXHU5MGI5XFx1OGQ3MFxcdTU5NGZcXHU2M2NkXFx1OTEzOVxcdTljYjBcIixcclxuXHRcdFx0XHRcInp1XCI6IFwiXFx1NzlkZlxcdThkYjNcXHU1MzUyXFx1NjVjZlxcdTc5NTZcXHU4YmM1XFx1OTYzYlxcdTdlYzRcXHU0ZmNlXFx1ODNmOVxcdTU1NTBcXHU1ZjgyXFx1OWE3NVxcdThlNzRcIixcclxuXHRcdFx0XHRcInp1YW5cIjogXCJcXHU5NGJiXFx1N2U4MlxcdTY1MjVcXHU3ZjM1XCIsXHJcblx0XHRcdFx0XCJ6dWlcIjogXCJcXHU1NjM0XFx1OTE4OVxcdTY3MDBcXHU3ZjZhXCIsXHJcblx0XHRcdFx0XCJ6dW5cIjogXCJcXHU1YzBhXFx1OTA3NVxcdTY0OTlcXHU2YTNkXFx1OWNkZlwiLFxyXG5cdFx0XHRcdFwienVvXCI6IFwiXFx1NjYyOFxcdTVkZTZcXHU0ZjUwXFx1NjdkZVxcdTUwNWFcXHU0ZjVjXFx1NTc1MFxcdTVlYTdcXHU5NjFkXFx1OTYzY1xcdTgwZDlcXHU3OTVhXFx1OTE2MlwiLFxyXG5cdFx0XHRcdFwiY291XCI6IFwiXFx1ODVhZVxcdTY5NzFcXHU4ZjhmXFx1ODE2MFwiLFxyXG5cdFx0XHRcdFwibmFuZ1wiOiBcIlxcdTY1MmVcXHU1NGRkXFx1NTZkNFxcdTk5OTVcXHU2NmU5XCIsXHJcblx0XHRcdFx0XCJvXCI6IFwiXFx1NTU5NFwiLFxyXG5cdFx0XHRcdFwiZGlhXCI6IFwiXFx1NTVmMlwiLFxyXG5cdFx0XHRcdFwiY2h1YWlcIjogXCJcXHU1NjJjXFx1ODFhYVxcdThlMzlcIixcclxuXHRcdFx0XHRcImNlblwiOiBcIlxcdTVjOTFcXHU2ZDk0XCIsXHJcblx0XHRcdFx0XCJkaXVcIjogXCJcXHU5NGU1XCIsXHJcblx0XHRcdFx0XCJub3VcIjogXCJcXHU4MDI4XCIsXHJcblx0XHRcdFx0XCJmb3VcIjogXCJcXHU3ZjM2XCIsXHJcblx0XHRcdFx0XCJiaWFcIjogXCJcXHU5YWRmXCJcclxuXHRcdFx0fTtcclxuXHRcdFx0dGhpcy5wb2x5cGhvbmUgPSB7XHJcblx0XHRcdFx0XCIxOTk2OVwiOiBcIkRaXCIsXHJcblx0XHRcdFx0XCIxOTk3NVwiOiBcIldNXCIsXHJcblx0XHRcdFx0XCIxOTk4OFwiOiBcIlFKXCIsXHJcblx0XHRcdFx0XCIyMDA0OFwiOiBcIllMXCIsXHJcblx0XHRcdFx0XCIyMDA1NlwiOiBcIlNDXCIsXHJcblx0XHRcdFx0XCIyMDA2MFwiOiBcIk5NXCIsXHJcblx0XHRcdFx0XCIyMDA5NFwiOiBcIlFHXCIsXHJcblx0XHRcdFx0XCIyMDEyN1wiOiBcIlFKXCIsXHJcblx0XHRcdFx0XCIyMDE2N1wiOiBcIlFDXCIsXHJcblx0XHRcdFx0XCIyMDE5M1wiOiBcIllHXCIsXHJcblx0XHRcdFx0XCIyMDI1MFwiOiBcIktIXCIsXHJcblx0XHRcdFx0XCIyMDI1NlwiOiBcIlpDXCIsXHJcblx0XHRcdFx0XCIyMDI4MlwiOiBcIlNDXCIsXHJcblx0XHRcdFx0XCIyMDI4NVwiOiBcIlFKR1wiLFxyXG5cdFx0XHRcdFwiMjAyOTFcIjogXCJURFwiLFxyXG5cdFx0XHRcdFwiMjAzMTRcIjogXCJZRFwiLFxyXG5cdFx0XHRcdFwiMjAzNDBcIjogXCJORVwiLFxyXG5cdFx0XHRcdFwiMjAzNzVcIjogXCJURFwiLFxyXG5cdFx0XHRcdFwiMjAzODlcIjogXCJZSlwiLFxyXG5cdFx0XHRcdFwiMjAzOTFcIjogXCJDWlwiLFxyXG5cdFx0XHRcdFwiMjA0MTVcIjogXCJQQlwiLFxyXG5cdFx0XHRcdFwiMjA0NDZcIjogXCJZU1wiLFxyXG5cdFx0XHRcdFwiMjA0NDdcIjogXCJTUVwiLFxyXG5cdFx0XHRcdFwiMjA1MDRcIjogXCJUQ1wiLFxyXG5cdFx0XHRcdFwiMjA2MDhcIjogXCJLR1wiLFxyXG5cdFx0XHRcdFwiMjA4NTRcIjogXCJRSlwiLFxyXG5cdFx0XHRcdFwiMjA4NTdcIjogXCJaQ1wiLFxyXG5cdFx0XHRcdFwiMjA5MTFcIjogXCJQRlwiLFxyXG5cdFx0XHRcdFwiMjA1MDRcIjogXCJUQ1wiLFxyXG5cdFx0XHRcdFwiMjA2MDhcIjogXCJLR1wiLFxyXG5cdFx0XHRcdFwiMjA4NTRcIjogXCJRSlwiLFxyXG5cdFx0XHRcdFwiMjA4NTdcIjogXCJaQ1wiLFxyXG5cdFx0XHRcdFwiMjA5MTFcIjogXCJQRlwiLFxyXG5cdFx0XHRcdFwiMjA5ODVcIjogXCJBV1wiLFxyXG5cdFx0XHRcdFwiMjEwMzJcIjogXCJQQlwiLFxyXG5cdFx0XHRcdFwiMjEwNDhcIjogXCJYUVwiLFxyXG5cdFx0XHRcdFwiMjEwNDlcIjogXCJTQ1wiLFxyXG5cdFx0XHRcdFwiMjEwODlcIjogXCJZU1wiLFxyXG5cdFx0XHRcdFwiMjExMTlcIjogXCJKQ1wiLFxyXG5cdFx0XHRcdFwiMjEyNDJcIjogXCJTQlwiLFxyXG5cdFx0XHRcdFwiMjEyNzNcIjogXCJTQ1wiLFxyXG5cdFx0XHRcdFwiMjEzMDVcIjogXCJZUFwiLFxyXG5cdFx0XHRcdFwiMjEzMDZcIjogXCJRT1wiLFxyXG5cdFx0XHRcdFwiMjEzMzBcIjogXCJaQ1wiLFxyXG5cdFx0XHRcdFwiMjEzMzNcIjogXCJTRENcIixcclxuXHRcdFx0XHRcIjIxMzQ1XCI6IFwiUUtcIixcclxuXHRcdFx0XHRcIjIxMzc4XCI6IFwiQ0FcIixcclxuXHRcdFx0XHRcIjIxMzk3XCI6IFwiU0NcIixcclxuXHRcdFx0XHRcIjIxNDE0XCI6IFwiWFNcIixcclxuXHRcdFx0XHRcIjIxNDQyXCI6IFwiU0NcIixcclxuXHRcdFx0XHRcIjIxNDc3XCI6IFwiSkdcIixcclxuXHRcdFx0XHRcIjIxNDgwXCI6IFwiVERcIixcclxuXHRcdFx0XHRcIjIxNDg0XCI6IFwiWlNcIixcclxuXHRcdFx0XHRcIjIxNDk0XCI6IFwiWVhcIixcclxuXHRcdFx0XHRcIjIxNTA1XCI6IFwiWVhcIixcclxuXHRcdFx0XHRcIjIxNTEyXCI6IFwiSEdcIixcclxuXHRcdFx0XHRcIjIxNTIzXCI6IFwiWEhcIixcclxuXHRcdFx0XHRcIjIxNTM3XCI6IFwiUEJcIixcclxuXHRcdFx0XHRcIjIxNTQyXCI6IFwiUEZcIixcclxuXHRcdFx0XHRcIjIxNTQ5XCI6IFwiS0hcIixcclxuXHRcdFx0XHRcIjIxNTcxXCI6IFwiRVwiLFxyXG5cdFx0XHRcdFwiMjE1NzRcIjogXCJEQVwiLFxyXG5cdFx0XHRcdFwiMjE1ODhcIjogXCJURFwiLFxyXG5cdFx0XHRcdFwiMjE1ODlcIjogXCJPXCIsXHJcblx0XHRcdFx0XCIyMTYxOFwiOiBcIlpDXCIsXHJcblx0XHRcdFx0XCIyMTYyMVwiOiBcIktIQVwiLFxyXG5cdFx0XHRcdFwiMjE2MzJcIjogXCJaSlwiLFxyXG5cdFx0XHRcdFwiMjE2NTRcIjogXCJLR1wiLFxyXG5cdFx0XHRcdFwiMjE2NzlcIjogXCJMS0dcIixcclxuXHRcdFx0XHRcIjIxNjgzXCI6IFwiS0hcIixcclxuXHRcdFx0XHRcIjIxNzEwXCI6IFwiQVwiLFxyXG5cdFx0XHRcdFwiMjE3MTlcIjogXCJZSFwiLFxyXG5cdFx0XHRcdFwiMjE3MzRcIjogXCJXT0VcIixcclxuXHRcdFx0XHRcIjIxNzY5XCI6IFwiQVwiLFxyXG5cdFx0XHRcdFwiMjE3ODBcIjogXCJXTlwiLFxyXG5cdFx0XHRcdFwiMjE4MDRcIjogXCJYSFwiLFxyXG5cdFx0XHRcdFwiMjE4MzRcIjogXCJBXCIsXHJcblx0XHRcdFx0XCIyMTg5OVwiOiBcIlpEXCIsXHJcblx0XHRcdFx0XCIyMTkwM1wiOiBcIlJOXCIsXHJcblx0XHRcdFx0XCIyMTkwOFwiOiBcIldPXCIsXHJcblx0XHRcdFx0XCIyMTkzOVwiOiBcIlpDXCIsXHJcblx0XHRcdFx0XCIyMTk1NlwiOiBcIlNBXCIsXHJcblx0XHRcdFx0XCIyMTk2NFwiOiBcIllBXCIsXHJcblx0XHRcdFx0XCIyMTk3MFwiOiBcIlREXCIsXHJcblx0XHRcdFx0XCIyMjAwM1wiOiBcIkFcIixcclxuXHRcdFx0XHRcIjIyMDMxXCI6IFwiSkdcIixcclxuXHRcdFx0XHRcIjIyMDQwXCI6IFwiWFNcIixcclxuXHRcdFx0XHRcIjIyMDYwXCI6IFwiWkNcIixcclxuXHRcdFx0XHRcIjIyMDY2XCI6IFwiWkNcIixcclxuXHRcdFx0XHRcIjIyMDc5XCI6IFwiTUhcIixcclxuXHRcdFx0XHRcIjIyMTI5XCI6IFwiWEpcIixcclxuXHRcdFx0XHRcIjIyMTc5XCI6IFwiWEFcIixcclxuXHRcdFx0XHRcIjIyMjM3XCI6IFwiTkpcIixcclxuXHRcdFx0XHRcIjIyMjQ0XCI6IFwiVERcIixcclxuXHRcdFx0XHRcIjIyMjgwXCI6IFwiSlFcIixcclxuXHRcdFx0XHRcIjIyMzAwXCI6IFwiWUhcIixcclxuXHRcdFx0XHRcIjIyMzEzXCI6IFwiWFdcIixcclxuXHRcdFx0XHRcIjIyMzMxXCI6IFwiWVFcIixcclxuXHRcdFx0XHRcIjIyMzQzXCI6IFwiWUpcIixcclxuXHRcdFx0XHRcIjIyMzUxXCI6IFwiUEhcIixcclxuXHRcdFx0XHRcIjIyMzk1XCI6IFwiRENcIixcclxuXHRcdFx0XHRcIjIyNDEyXCI6IFwiVERcIixcclxuXHRcdFx0XHRcIjIyNDg0XCI6IFwiUEJcIixcclxuXHRcdFx0XHRcIjIyNTAwXCI6IFwiUEJcIixcclxuXHRcdFx0XHRcIjIyNTM0XCI6IFwiWkRcIixcclxuXHRcdFx0XHRcIjIyNTQ5XCI6IFwiREhcIixcclxuXHRcdFx0XHRcIjIyNTYxXCI6IFwiUEJcIixcclxuXHRcdFx0XHRcIjIyNjEyXCI6IFwiVERcIixcclxuXHRcdFx0XHRcIjIyNzcxXCI6IFwiS1FcIixcclxuXHRcdFx0XHRcIjIyODMxXCI6IFwiSEJcIixcclxuXHRcdFx0XHRcIjIyODQxXCI6IFwiSkdcIixcclxuXHRcdFx0XHRcIjIyODU1XCI6IFwiUUpcIixcclxuXHRcdFx0XHRcIjIyODY1XCI6IFwiWFFcIixcclxuXHRcdFx0XHRcIjIzMDEzXCI6IFwiTUxcIixcclxuXHRcdFx0XHRcIjIzMDgxXCI6IFwiV01cIixcclxuXHRcdFx0XHRcIjIzNDg3XCI6IFwiU1hcIixcclxuXHRcdFx0XHRcIjIzNTU4XCI6IFwiUUpcIixcclxuXHRcdFx0XHRcIjIzNTYxXCI6IFwiWVdcIixcclxuXHRcdFx0XHRcIjIzNTg2XCI6IFwiWVdcIixcclxuXHRcdFx0XHRcIjIzNjE0XCI6IFwiWVdcIixcclxuXHRcdFx0XHRcIjIzNjE1XCI6IFwiU05cIixcclxuXHRcdFx0XHRcIjIzNjMxXCI6IFwiUEJcIixcclxuXHRcdFx0XHRcIjIzNjQ2XCI6IFwiWlNcIixcclxuXHRcdFx0XHRcIjIzNjYzXCI6IFwiWlRcIixcclxuXHRcdFx0XHRcIjIzNjczXCI6IFwiWUdcIixcclxuXHRcdFx0XHRcIjIzNzYyXCI6IFwiVERcIixcclxuXHRcdFx0XHRcIjIzNzY5XCI6IFwiWlNcIixcclxuXHRcdFx0XHRcIjIzNzgwXCI6IFwiUUpcIixcclxuXHRcdFx0XHRcIjIzODg0XCI6IFwiUUtcIixcclxuXHRcdFx0XHRcIjI0MDU1XCI6IFwiWEhcIixcclxuXHRcdFx0XHRcIjI0MTEzXCI6IFwiRENcIixcclxuXHRcdFx0XHRcIjI0MTYyXCI6IFwiWkNcIixcclxuXHRcdFx0XHRcIjI0MTkxXCI6IFwiR0FcIixcclxuXHRcdFx0XHRcIjI0MjczXCI6IFwiUUpcIixcclxuXHRcdFx0XHRcIjI0MzI0XCI6IFwiTkxcIixcclxuXHRcdFx0XHRcIjI0Mzc3XCI6IFwiVERcIixcclxuXHRcdFx0XHRcIjI0Mzc4XCI6IFwiUUpcIixcclxuXHRcdFx0XHRcIjI0NDM5XCI6IFwiUEZcIixcclxuXHRcdFx0XHRcIjI0NTU0XCI6IFwiWlNcIixcclxuXHRcdFx0XHRcIjI0NjgzXCI6IFwiVERcIixcclxuXHRcdFx0XHRcIjI0Njk0XCI6IFwiV0VcIixcclxuXHRcdFx0XHRcIjI0NzMzXCI6IFwiTEtcIixcclxuXHRcdFx0XHRcIjI0OTI1XCI6IFwiVE5cIixcclxuXHRcdFx0XHRcIjI1MDk0XCI6IFwiWkdcIixcclxuXHRcdFx0XHRcIjI1MTAwXCI6IFwiWFFcIixcclxuXHRcdFx0XHRcIjI1MTAzXCI6IFwiWEhcIixcclxuXHRcdFx0XHRcIjI1MTUzXCI6IFwiUEJcIixcclxuXHRcdFx0XHRcIjI1MTcwXCI6IFwiUEJcIixcclxuXHRcdFx0XHRcIjI1MTc5XCI6IFwiS0dcIixcclxuXHRcdFx0XHRcIjI1MjAzXCI6IFwiUEJcIixcclxuXHRcdFx0XHRcIjI1MjQwXCI6IFwiWlNcIixcclxuXHRcdFx0XHRcIjI1MjgyXCI6IFwiRkJcIixcclxuXHRcdFx0XHRcIjI1MzAzXCI6IFwiTkFcIixcclxuXHRcdFx0XHRcIjI1MzI0XCI6IFwiS0dcIixcclxuXHRcdFx0XHRcIjI1MzQxXCI6IFwiWllcIixcclxuXHRcdFx0XHRcIjI1MzczXCI6IFwiV1pcIixcclxuXHRcdFx0XHRcIjI1Mzc1XCI6IFwiWEpcIixcclxuXHRcdFx0XHRcIjI1Mzg0XCI6IFwiQVwiLFxyXG5cdFx0XHRcdFwiMjU0NTdcIjogXCJBXCIsXHJcblx0XHRcdFx0XCIyNTUyOFwiOiBcIlNEXCIsXHJcblx0XHRcdFx0XCIyNTUzMFwiOiBcIlNDXCIsXHJcblx0XHRcdFx0XCIyNTU1MlwiOiBcIlREXCIsXHJcblx0XHRcdFx0XCIyNTc3NFwiOiBcIlpDXCIsXHJcblx0XHRcdFx0XCIyNTg3NFwiOiBcIlpDXCIsXHJcblx0XHRcdFx0XCIyNjA0NFwiOiBcIllXXCIsXHJcblx0XHRcdFx0XCIyNjA4MFwiOiBcIldNXCIsXHJcblx0XHRcdFx0XCIyNjI5MlwiOiBcIlBCXCIsXHJcblx0XHRcdFx0XCIyNjMzM1wiOiBcIlBCXCIsXHJcblx0XHRcdFx0XCIyNjM1NVwiOiBcIlpZXCIsXHJcblx0XHRcdFx0XCIyNjM2NlwiOiBcIkNaXCIsXHJcblx0XHRcdFx0XCIyNjM5N1wiOiBcIlpDXCIsXHJcblx0XHRcdFx0XCIyNjM5OVwiOiBcIlFKXCIsXHJcblx0XHRcdFx0XCIyNjQxNVwiOiBcIlpTXCIsXHJcblx0XHRcdFx0XCIyNjQ1MVwiOiBcIlNCXCIsXHJcblx0XHRcdFx0XCIyNjUyNlwiOiBcIlpDXCIsXHJcblx0XHRcdFx0XCIyNjU1MlwiOiBcIkpHXCIsXHJcblx0XHRcdFx0XCIyNjU2MVwiOiBcIlREXCIsXHJcblx0XHRcdFx0XCIyNjU4OFwiOiBcIkpHXCIsXHJcblx0XHRcdFx0XCIyNjU5N1wiOiBcIkNaXCIsXHJcblx0XHRcdFx0XCIyNjYyOVwiOiBcIlpTXCIsXHJcblx0XHRcdFx0XCIyNjYzOFwiOiBcIllMXCIsXHJcblx0XHRcdFx0XCIyNjY0NlwiOiBcIlhRXCIsXHJcblx0XHRcdFx0XCIyNjY1M1wiOiBcIktHXCIsXHJcblx0XHRcdFx0XCIyNjY1N1wiOiBcIlhKXCIsXHJcblx0XHRcdFx0XCIyNjcyN1wiOiBcIkhHXCIsXHJcblx0XHRcdFx0XCIyNjg5NFwiOiBcIlpDXCIsXHJcblx0XHRcdFx0XCIyNjkzN1wiOiBcIlpTXCIsXHJcblx0XHRcdFx0XCIyNjk0NlwiOiBcIlpDXCIsXHJcblx0XHRcdFx0XCIyNjk5OVwiOiBcIktKXCIsXHJcblx0XHRcdFx0XCIyNzA5OVwiOiBcIktKXCIsXHJcblx0XHRcdFx0XCIyNzQ0OVwiOiBcIllRXCIsXHJcblx0XHRcdFx0XCIyNzQ4MVwiOiBcIlhTXCIsXHJcblx0XHRcdFx0XCIyNzU0MlwiOiBcIlpTXCIsXHJcblx0XHRcdFx0XCIyNzY2M1wiOiBcIlpTXCIsXHJcblx0XHRcdFx0XCIyNzc0OFwiOiBcIlRTXCIsXHJcblx0XHRcdFx0XCIyNzc4NFwiOiBcIlNDXCIsXHJcblx0XHRcdFx0XCIyNzc4OFwiOiBcIlpEXCIsXHJcblx0XHRcdFx0XCIyNzc5NVwiOiBcIlREXCIsXHJcblx0XHRcdFx0XCIyNzgxMlwiOiBcIk9cIixcclxuXHRcdFx0XHRcIjI3ODUwXCI6IFwiUEJcIixcclxuXHRcdFx0XHRcIjI3ODUyXCI6IFwiTUJcIixcclxuXHRcdFx0XHRcIjI3ODk1XCI6IFwiU0xcIixcclxuXHRcdFx0XHRcIjI3ODk4XCI6IFwiUExcIixcclxuXHRcdFx0XHRcIjI3OTczXCI6IFwiUUpcIixcclxuXHRcdFx0XHRcIjI3OTgxXCI6IFwiS0hcIixcclxuXHRcdFx0XHRcIjI3OTg2XCI6IFwiSFhcIixcclxuXHRcdFx0XHRcIjI3OTk0XCI6IFwiWEpcIixcclxuXHRcdFx0XHRcIjI4MDQ0XCI6IFwiWUNcIixcclxuXHRcdFx0XHRcIjI4MDY1XCI6IFwiV0dcIixcclxuXHRcdFx0XHRcIjI4MTc3XCI6IFwiU01cIixcclxuXHRcdFx0XHRcIjI4MjY3XCI6IFwiUUpcIixcclxuXHRcdFx0XHRcIjI4MjkxXCI6IFwiS0hcIixcclxuXHRcdFx0XHRcIjI4MzM3XCI6IFwiWlFcIixcclxuXHRcdFx0XHRcIjI4NDYzXCI6IFwiVExcIixcclxuXHRcdFx0XHRcIjI4NTQ4XCI6IFwiRENcIixcclxuXHRcdFx0XHRcIjI4NjAxXCI6IFwiVERcIixcclxuXHRcdFx0XHRcIjI4Njg5XCI6IFwiUEJcIixcclxuXHRcdFx0XHRcIjI4ODA1XCI6IFwiSkdcIixcclxuXHRcdFx0XHRcIjI4ODIwXCI6IFwiUUdcIixcclxuXHRcdFx0XHRcIjI4ODQ2XCI6IFwiUEJcIixcclxuXHRcdFx0XHRcIjI4OTUyXCI6IFwiVERcIixcclxuXHRcdFx0XHRcIjI4OTc1XCI6IFwiWkNcIixcclxuXHRcdFx0XHRcIjI5MTAwXCI6IFwiQVwiLFxyXG5cdFx0XHRcdFwiMjkzMjVcIjogXCJRSlwiLFxyXG5cdFx0XHRcdFwiMjk1NzVcIjogXCJTTFwiLFxyXG5cdFx0XHRcdFwiMjk2MDJcIjogXCJGQlwiLFxyXG5cdFx0XHRcdFwiMzAwMTBcIjogXCJURFwiLFxyXG5cdFx0XHRcdFwiMzAwNDRcIjogXCJDWFwiLFxyXG5cdFx0XHRcdFwiMzAwNThcIjogXCJQRlwiLFxyXG5cdFx0XHRcdFwiMzAwOTFcIjogXCJZU1BcIixcclxuXHRcdFx0XHRcIjMwMTExXCI6IFwiWU5cIixcclxuXHRcdFx0XHRcIjMwMjI5XCI6IFwiWEpcIixcclxuXHRcdFx0XHRcIjMwNDI3XCI6IFwiU0NcIixcclxuXHRcdFx0XHRcIjMwNDY1XCI6IFwiU1hcIixcclxuXHRcdFx0XHRcIjMwNjMxXCI6IFwiWVFcIixcclxuXHRcdFx0XHRcIjMwNjU1XCI6IFwiUUpcIixcclxuXHRcdFx0XHRcIjMwNjg0XCI6IFwiUUpHXCIsXHJcblx0XHRcdFx0XCIzMDcwN1wiOiBcIlNEXCIsXHJcblx0XHRcdFx0XCIzMDcyOVwiOiBcIlhIXCIsXHJcblx0XHRcdFx0XCIzMDc5NlwiOiBcIkxHXCIsXHJcblx0XHRcdFx0XCIzMDkxN1wiOiBcIlBCXCIsXHJcblx0XHRcdFx0XCIzMTA3NFwiOiBcIk5NXCIsXHJcblx0XHRcdFx0XCIzMTA4NVwiOiBcIkpaXCIsXHJcblx0XHRcdFx0XCIzMTEwOVwiOiBcIlNDXCIsXHJcblx0XHRcdFx0XCIzMTE4MVwiOiBcIlpDXCIsXHJcblx0XHRcdFx0XCIzMTE5MlwiOiBcIk1MQlwiLFxyXG5cdFx0XHRcdFwiMzEyOTNcIjogXCJKUVwiLFxyXG5cdFx0XHRcdFwiMzE0MDBcIjogXCJZWFwiLFxyXG5cdFx0XHRcdFwiMzE1ODRcIjogXCJZSlwiLFxyXG5cdFx0XHRcdFwiMzE4OTZcIjogXCJaTlwiLFxyXG5cdFx0XHRcdFwiMzE5MDlcIjogXCJaWVwiLFxyXG5cdFx0XHRcdFwiMzE5OTVcIjogXCJYSlwiLFxyXG5cdFx0XHRcdFwiMzIzMjFcIjogXCJQRlwiLFxyXG5cdFx0XHRcdFwiMzIzMjdcIjogXCJaWVwiLFxyXG5cdFx0XHRcdFwiMzI0MThcIjogXCJIR1wiLFxyXG5cdFx0XHRcdFwiMzI0MjBcIjogXCJYUVwiLFxyXG5cdFx0XHRcdFwiMzI0MjFcIjogXCJIR1wiLFxyXG5cdFx0XHRcdFwiMzI0MzhcIjogXCJMR1wiLFxyXG5cdFx0XHRcdFwiMzI0NzNcIjogXCJHSlwiLFxyXG5cdFx0XHRcdFwiMzI0ODhcIjogXCJURFwiLFxyXG5cdFx0XHRcdFwiMzI1MjFcIjogXCJRSlwiLFxyXG5cdFx0XHRcdFwiMzI1MjdcIjogXCJQQlwiLFxyXG5cdFx0XHRcdFwiMzI1NjJcIjogXCJaU1FcIixcclxuXHRcdFx0XHRcIjMyNTY0XCI6IFwiSlpcIixcclxuXHRcdFx0XHRcIjMyNzM1XCI6IFwiWkRcIixcclxuXHRcdFx0XHRcIjMyNzkzXCI6IFwiUEJcIixcclxuXHRcdFx0XHRcIjMzMDcxXCI6IFwiUEZcIixcclxuXHRcdFx0XHRcIjMzMDk4XCI6IFwiWExcIixcclxuXHRcdFx0XHRcIjMzMTAwXCI6IFwiWUFcIixcclxuXHRcdFx0XHRcIjMzMTUyXCI6IFwiUEJcIixcclxuXHRcdFx0XHRcIjMzMjYxXCI6IFwiQ1hcIixcclxuXHRcdFx0XHRcIjMzMzI0XCI6IFwiQlBcIixcclxuXHRcdFx0XHRcIjMzMzMzXCI6IFwiVERcIixcclxuXHRcdFx0XHRcIjMzNDA2XCI6IFwiWUFcIixcclxuXHRcdFx0XHRcIjMzNDI2XCI6IFwiV01cIixcclxuXHRcdFx0XHRcIjMzNDMyXCI6IFwiUEJcIixcclxuXHRcdFx0XHRcIjMzNDQ1XCI6IFwiSkdcIixcclxuXHRcdFx0XHRcIjMzNDg2XCI6IFwiWk5cIixcclxuXHRcdFx0XHRcIjMzNDkzXCI6IFwiVFNcIixcclxuXHRcdFx0XHRcIjMzNTA3XCI6IFwiUUpcIixcclxuXHRcdFx0XHRcIjMzNTQwXCI6IFwiUUpcIixcclxuXHRcdFx0XHRcIjMzNTQ0XCI6IFwiWkNcIixcclxuXHRcdFx0XHRcIjMzNTY0XCI6IFwiWFFcIixcclxuXHRcdFx0XHRcIjMzNjE3XCI6IFwiWVRcIixcclxuXHRcdFx0XHRcIjMzNjMyXCI6IFwiUUpcIixcclxuXHRcdFx0XHRcIjMzNjM2XCI6IFwiWEhcIixcclxuXHRcdFx0XHRcIjMzNjM3XCI6IFwiWVhcIixcclxuXHRcdFx0XHRcIjMzNjk0XCI6IFwiV0dcIixcclxuXHRcdFx0XHRcIjMzNzA1XCI6IFwiUEZcIixcclxuXHRcdFx0XHRcIjMzNzI4XCI6IFwiWVdcIixcclxuXHRcdFx0XHRcIjMzODgyXCI6IFwiU1JcIixcclxuXHRcdFx0XHRcIjM0MDY3XCI6IFwiV01cIixcclxuXHRcdFx0XHRcIjM0MDc0XCI6IFwiWVdcIixcclxuXHRcdFx0XHRcIjM0MTIxXCI6IFwiUUpcIixcclxuXHRcdFx0XHRcIjM0MjU1XCI6IFwiWkNcIixcclxuXHRcdFx0XHRcIjM0MjU5XCI6IFwiWExcIixcclxuXHRcdFx0XHRcIjM0NDI1XCI6IFwiSkhcIixcclxuXHRcdFx0XHRcIjM0NDMwXCI6IFwiWEhcIixcclxuXHRcdFx0XHRcIjM0NDg1XCI6IFwiS0hcIixcclxuXHRcdFx0XHRcIjM0NTAzXCI6IFwiWVNcIixcclxuXHRcdFx0XHRcIjM0NTMyXCI6IFwiSEdcIixcclxuXHRcdFx0XHRcIjM0NTUyXCI6IFwiWFNcIixcclxuXHRcdFx0XHRcIjM0NTU4XCI6IFwiWUVcIixcclxuXHRcdFx0XHRcIjM0NTkzXCI6IFwiWkxcIixcclxuXHRcdFx0XHRcIjM0NjYwXCI6IFwiWVFcIixcclxuXHRcdFx0XHRcIjM0ODkyXCI6IFwiWEhcIixcclxuXHRcdFx0XHRcIjM0OTI4XCI6IFwiU0NcIixcclxuXHRcdFx0XHRcIjM0OTk5XCI6IFwiUUpcIixcclxuXHRcdFx0XHRcIjM1MDQ4XCI6IFwiUEJcIixcclxuXHRcdFx0XHRcIjM1MDU5XCI6IFwiU0NcIixcclxuXHRcdFx0XHRcIjM1MDk4XCI6IFwiWkNcIixcclxuXHRcdFx0XHRcIjM1MjAzXCI6IFwiVFFcIixcclxuXHRcdFx0XHRcIjM1MjY1XCI6IFwiSlhcIixcclxuXHRcdFx0XHRcIjM1Mjk5XCI6IFwiSlhcIixcclxuXHRcdFx0XHRcIjM1NzgyXCI6IFwiU1pcIixcclxuXHRcdFx0XHRcIjM1ODI4XCI6IFwiWVNcIixcclxuXHRcdFx0XHRcIjM1ODMwXCI6IFwiRVwiLFxyXG5cdFx0XHRcdFwiMzU4NDNcIjogXCJURFwiLFxyXG5cdFx0XHRcdFwiMzU4OTVcIjogXCJZR1wiLFxyXG5cdFx0XHRcdFwiMzU5NzdcIjogXCJNSFwiLFxyXG5cdFx0XHRcdFwiMzYxNThcIjogXCJKR1wiLFxyXG5cdFx0XHRcdFwiMzYyMjhcIjogXCJRSlwiLFxyXG5cdFx0XHRcdFwiMzY0MjZcIjogXCJYUVwiLFxyXG5cdFx0XHRcdFwiMzY0NjZcIjogXCJEQ1wiLFxyXG5cdFx0XHRcdFwiMzY3MTBcIjogXCJKQ1wiLFxyXG5cdFx0XHRcdFwiMzY3MTFcIjogXCJaWUdcIixcclxuXHRcdFx0XHRcIjM2NzY3XCI6IFwiUEJcIixcclxuXHRcdFx0XHRcIjM2ODY2XCI6IFwiU0tcIixcclxuXHRcdFx0XHRcIjM2OTUxXCI6IFwiWVdcIixcclxuXHRcdFx0XHRcIjM3MDM0XCI6IFwiWVhcIixcclxuXHRcdFx0XHRcIjM3MDYzXCI6IFwiWEhcIixcclxuXHRcdFx0XHRcIjM3MjE4XCI6IFwiWkNcIixcclxuXHRcdFx0XHRcIjM3MzI1XCI6IFwiWkNcIixcclxuXHRcdFx0XHRcIjM4MDYzXCI6IFwiUEJcIixcclxuXHRcdFx0XHRcIjM4MDc5XCI6IFwiVERcIixcclxuXHRcdFx0XHRcIjM4MDg1XCI6IFwiUVlcIixcclxuXHRcdFx0XHRcIjM4MTA3XCI6IFwiRENcIixcclxuXHRcdFx0XHRcIjM4MTE2XCI6IFwiVERcIixcclxuXHRcdFx0XHRcIjM4MTIzXCI6IFwiWURcIixcclxuXHRcdFx0XHRcIjM4MjI0XCI6IFwiSEdcIixcclxuXHRcdFx0XHRcIjM4MjQxXCI6IFwiWFRDXCIsXHJcblx0XHRcdFx0XCIzODI3MVwiOiBcIlpDXCIsXHJcblx0XHRcdFx0XCIzODQxNVwiOiBcIllFXCIsXHJcblx0XHRcdFx0XCIzODQyNlwiOiBcIktIXCIsXHJcblx0XHRcdFx0XCIzODQ2MVwiOiBcIllEXCIsXHJcblx0XHRcdFx0XCIzODQ2M1wiOiBcIkFFXCIsXHJcblx0XHRcdFx0XCIzODQ2NlwiOiBcIlBCXCIsXHJcblx0XHRcdFx0XCIzODQ3N1wiOiBcIlhKXCIsXHJcblx0XHRcdFx0XCIzODUxOFwiOiBcIllUXCIsXHJcblx0XHRcdFx0XCIzODU1MVwiOiBcIldLXCIsXHJcblx0XHRcdFx0XCIzODU4NVwiOiBcIlpDXCIsXHJcblx0XHRcdFx0XCIzODcwNFwiOiBcIlhTXCIsXHJcblx0XHRcdFx0XCIzODczOVwiOiBcIkxKXCIsXHJcblx0XHRcdFx0XCIzODc2MVwiOiBcIkdKXCIsXHJcblx0XHRcdFx0XCIzODgwOFwiOiBcIlNRXCIsXHJcblx0XHRcdFx0XCIzOTA0OFwiOiBcIkpHXCIsXHJcblx0XHRcdFx0XCIzOTA0OVwiOiBcIlhKXCIsXHJcblx0XHRcdFx0XCIzOTA1MlwiOiBcIkhHXCIsXHJcblx0XHRcdFx0XCIzOTA3NlwiOiBcIkNaXCIsXHJcblx0XHRcdFx0XCIzOTI3MVwiOiBcIlhUXCIsXHJcblx0XHRcdFx0XCIzOTUzNFwiOiBcIlREXCIsXHJcblx0XHRcdFx0XCIzOTU1MlwiOiBcIlREXCIsXHJcblx0XHRcdFx0XCIzOTU4NFwiOiBcIlBCXCIsXHJcblx0XHRcdFx0XCIzOTY0N1wiOiBcIlNCXCIsXHJcblx0XHRcdFx0XCIzOTczMFwiOiBcIkxHXCIsXHJcblx0XHRcdFx0XCIzOTc0OFwiOiBcIlRQQlwiLFxyXG5cdFx0XHRcdFwiNDAxMDlcIjogXCJaUVwiLFxyXG5cdFx0XHRcdFwiNDA0NzlcIjogXCJORFwiLFxyXG5cdFx0XHRcdFwiNDA1MTZcIjogXCJIR1wiLFxyXG5cdFx0XHRcdFwiNDA1MzZcIjogXCJIR1wiLFxyXG5cdFx0XHRcdFwiNDA1ODNcIjogXCJRSlwiLFxyXG5cdFx0XHRcdFwiNDA3NjVcIjogXCJZUVwiLFxyXG5cdFx0XHRcdFwiNDA3ODRcIjogXCJRSlwiLFxyXG5cdFx0XHRcdFwiNDA4NDBcIjogXCJZS1wiLFxyXG5cdFx0XHRcdFwiNDA4NjNcIjogXCJRSkdcIlxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHJcblx0XHQvLyDDpsKPwpDDpcKP4oCTw6bigLnCvMOpxbjCsywgw6jCv+KAncOl4oC6xb7DqcKm4oCTw6XCreKAlMOmwq/CjcOlwqTCp8Ol4oCg4oSiw6XCvcKiw6XCvMKPXHJcblx0XHRnZXRGdWxsQ2hhcnM6IGZ1bmN0aW9uKHN0cikge1xyXG5cdFx0XHR2YXIgcmVzdWx0ID0gJycsXHJcblx0XHRcdFx0bmFtZTtcclxuXHRcdFx0dmFyIHJlZyA9IG5ldyBSZWdFeHAoJ1thLXpBLVowLTlcXC0gXScpO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gc3RyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0dmFyIGNoID0gc3RyLnN1YnN0cihpLCAxKSxcclxuXHRcdFx0XHRcdHVuaWNvZGUgPSBjaC5jaGFyQ29kZUF0KDApO1xyXG5cdFx0XHRcdGlmICh1bmljb2RlID4gNDA4NjkgfHwgdW5pY29kZSA8IDE5OTY4KSB7XHJcblx0XHRcdFx0XHRyZXN1bHQgKz0gY2g7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG5hbWUgPSB0aGlzLl9nZXRGdWxsQ2hhcihjaCk7XHJcblx0XHRcdFx0XHRpZiAobmFtZSAhPT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0cmVzdWx0ICs9IG5hbWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiByZXN1bHQ7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vIMOmwo/CkMOlwo/igJPDqcKm4oCTw6XCreKAlMOmwq/CjcOvwrzFksOowr/igJ3DpeKAusW+w6XCpMKnw6XigKDihKLDpcK9wqLDpcK8wo9cclxuXHRcdGdldENhbWVsQ2hhcnM6IGZ1bmN0aW9uKHN0cikge1xyXG5cdFx0XHRpZiAodHlwZW9mKHN0cikgIT09ICdzdHJpbmcnKVxyXG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcigtMSwgXCLDpeKAocK9w6bigKLCsGdldEZpc3J0w6nFk+KCrMOowqbCgcOlwq3igJTDp8KswqbDpMK4wrLDp8KxwrvDpcW+4oC5w6XCj+KAmsOm4oCiwrAhXCIpO1xyXG5cdFx0XHR2YXIgY2hhcnMgPSBbXTsgLy/DpMK/wp3DpcKty5zDpMK4wq3DqeKAlMK0w6fCu+KAnMOmxb7Fk8OnxaHigJ7DpuKAosKww6fCu+KAnlxyXG5cdFx0XHRmb3IgKHZhciBpID0gMCwgbGVuID0gc3RyLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0Ly/DqMW9wrfDpcK+4oCUdW5pY29kZcOnIMKBXHJcblx0XHRcdFx0dmFyIGNoID0gc3RyLmNoYXJBdChpKTtcclxuXHRcdFx0XHQvL8OmwqPigqzDpsW4wqXDqMKvwqV1bmljb2Rlw6cgwoHDpsucwq/DpcKQwqbDpcWTwqjDpcKk4oCew6fCkOKAoMOoxZLGksOl4oC6wrTDpMK54oC5w6XigKDigKYsw6XFk8Kow6XLhuKEosOowr/igJ3DpeKAusW+w6jCr8Klw6cgwoHDpcKvwrnDpsucIMOmwrHigLDDpcKt4oCUw6fFoeKAnsOm4oC5wrzDqcW4wrPDqcKm4oCTw6XCreKAlMOmwq/CjSzDpMK4wo3DpcWTwqjDpcuG4oSiw6jCsMaSw6figJ3CqMOl4oCmwrbDpcKuxpLDpeKAocK9w6bigKLCsMOlwqTigJ7Dp8KQ4oCgXHJcblx0XHRcdFx0Y2hhcnMucHVzaCh0aGlzLl9nZXRDaGFyKGNoKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly/DpcKk4oCew6fCkOKAoGFyclJlc3VsdCzDqMK/4oCdw6XigLrFvsOm4oCw4oKsw6bFk+KAsMOlwo/Cr8OoxpLCvcOnxaHigJ7DpuKAucK8w6nFuMKzw6nCpuKAk8Olwq3igJTDpsKvwo3DpMK4wrLDpuKAosKww6fCu+KAnlxyXG5cdFx0XHRyZXR1cm4gdGhpcy5fZ2V0UmVzdWx0KGNoYXJzKTtcclxuXHRcdH0sXHJcblxyXG5cclxuXHRcdC8vIMOmwo/CkMOlwo/igJPDpuKAucK8w6nFuMKzXHJcblx0XHRfZ2V0RnVsbENoYXI6IGZ1bmN0aW9uKHN0cikge1xyXG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gdGhpcy5mdWxsX2RpY3QpIHtcclxuXHRcdFx0XHRpZiAoLTEgIT09IHRoaXMuZnVsbF9kaWN0W2tleV0uaW5kZXhPZihzdHIpKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5fY2FwaXRhbGl6ZShrZXkpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Ly8gw6nCpuKAk8Olwq3igJTDpsKvwo3DpcKkwqfDpeKAoOKEolxyXG5cdFx0X2NhcGl0YWxpemU6IGZ1bmN0aW9uKHN0cikge1xyXG5cdFx0XHRpZiAoc3RyLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHR2YXIgZmlyc3QgPSBzdHIuc3Vic3RyKDAsIDEpLnRvVXBwZXJDYXNlKCk7XHJcblx0XHRcdFx0dmFyIHNwYXJlID0gc3RyLnN1YnN0cigxLCBzdHIubGVuZ3RoKTtcclxuXHRcdFx0XHRyZXR1cm4gZmlyc3QgKyBzcGFyZTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRfZ2V0Q2hhcjogZnVuY3Rpb24oY2gpIHtcclxuXHRcdFx0dmFyIHVuaWNvZGUgPSBjaC5jaGFyQ29kZUF0KDApO1xyXG5cdFx0XHQvL8OlwqbigJrDpsW+xZPDpMK4wo3DpcWTwqjDpsKx4oCww6XCreKAlMOlwqTigJ7Dp8KQ4oCgw6jFksaSw6XigLrCtMOkwrnigLnDpeKAoOKApizDqMK/4oCdw6XigLrFvsOlxb3FuMOlwq3igJTDp8KswqYsw6TCucW4w6XCj8Kvw6TCu8Klw6jCsMaSw6figJ3CqMOo4oChwqrDpcK3wrHDp8Wh4oCew6XCpOKAnsOnwpDigKDDpeKAocK9w6bigKLCsFxyXG5cdFx0XHRpZiAodW5pY29kZSA+IDQwODY5IHx8IHVuaWNvZGUgPCAxOTk2OClcclxuXHRcdFx0XHRyZXR1cm4gY2g7IC8vZGVhbFdpdGhPdGhlcnMoY2gpO1xyXG5cdFx0XHQvL8OmwqPigqzDpsW4wqXDpsucwq/DpcKQwqbDpsucwq/DpcKkxaHDqcW4wrPDpcKt4oCULMOmy5zCr8OmxZLigLDDpcKkxaHDqcW4wrPDpcKt4oCUw6XCpOKAnsOnwpDigKAsw6TCuMKNw6bLnMKvw6XCsMKxw6figLrCtMOmxb3CpcOlxZPCqHN0ckNoaW5lc2VGaXJzdFBZw6XCreKAlMOnwqzCpsOkwrjCssOkwrjCrcOm4oCwwr7DpcKvwrnDpcK64oCdw6fFoeKAnsOpwqbigJPDpcKt4oCUw6bCr8KNXHJcblx0XHRcdGlmICghdGhpcy5vcHRpb25zLmNoZWNrUG9seXBob25lKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmNoYXJfZGljdC5jaGFyQXQodW5pY29kZSAtIDE5OTY4KTtcclxuXHRcdFx0cmV0dXJuIHRoaXMucG9seXBob25lW3VuaWNvZGVdID8gdGhpcy5wb2x5cGhvbmVbdW5pY29kZV0gOiB0aGlzLmNoYXJfZGljdC5jaGFyQXQoXHJcblx0XHRcdFx0dW5pY29kZSAtIDE5OTY4KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0X2dldFJlc3VsdDogZnVuY3Rpb24oY2hhcnMpIHtcclxuXHRcdFx0aWYgKCF0aGlzLm9wdGlvbnMuY2hlY2tQb2x5cGhvbmUpXHJcblx0XHRcdFx0cmV0dXJuIGNoYXJzLmpvaW4oJycpO1xyXG5cdFx0XHR2YXIgcmVzdWx0ID0gWycnXTtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDAsIGxlbiA9IGNoYXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRcdFx0dmFyIHN0ciA9IGNoYXJzW2ldLFxyXG5cdFx0XHRcdFx0c3RybGVuID0gc3RyLmxlbmd0aDtcclxuXHRcdFx0XHRpZiAoc3RybGVuID09IDEpIHtcclxuXHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgcmVzdWx0Lmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0XHRcdHJlc3VsdFtrXSArPSBzdHI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHZhciBzd2FwMSA9IHJlc3VsdC5zbGljZSgwKTtcclxuXHRcdFx0XHRcdHJlc3VsdCA9IFtdO1xyXG5cdFx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBzdHJsZW47IGorKykge1xyXG5cdFx0XHRcdFx0XHQvL8OlwqTCjcOly4bCtsOkwrjigqzDpMK4wqrDp+KAusK4w6XCkMWSw6fFoeKAnmFyclJzbHRcclxuXHRcdFx0XHRcdFx0dmFyIHN3YXAyID0gc3dhcDEuc2xpY2UoMCk7XHJcblx0XHRcdFx0XHRcdC8vw6bFoMWgw6XCveKAnMOl4oCwwo3DpcKt4oCUw6fCrMKmc3RyW2tdw6bCt8K7w6XFoCDDpcuGwrDDpsKvwo/DpMK4wqrDpeKApsaSw6fCtCDDpsWTwqvDpcKwwr5cclxuXHRcdFx0XHRcdFx0Zm9yICh2YXIgayA9IDA7IGsgPCBzd2FwMi5sZW5ndGg7IGsrKykge1xyXG5cdFx0XHRcdFx0XHRcdHN3YXAyW2tdICs9IHN0ci5jaGFyQXQoaik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly/DpsWgxaDDpcKkwo3DpcuGwrbDpcK5wrbDpMK/wq7DpuKAncK5w6XCkMW9w6fFoeKAnsOm4oCiwrDDp8K74oCew6jCv8W+w6bFvcKlw6XLhsKwYXJyUnNsdMOkwrjFoFxyXG5cdFx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQuY29uY2F0KHN3YXAyKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJlc3VsdDtcclxuXHRcdH1cclxuXHJcblx0fTtcclxuXHJcblx0dmFyIGV4dGVuZCA9IGZ1bmN0aW9uKGRzdCwgc3JjKSB7XHJcblx0XHRmb3IgKHZhciBwcm9wZXJ0eSBpbiBzcmMpIHtcclxuXHRcdFx0ZHN0W3Byb3BlcnR5XSA9IHNyY1twcm9wZXJ0eV07XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZHN0O1xyXG5cdH07XHJcblxyXG5cdHJldHVybiBuZXcgUGlueWluKGFyZ3VtZW50cyk7XHJcbn0pKCk7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWwoc3RyKSB7XHJcblx0bGV0IHJlcyA9IHBpbnlpbi5nZXRDYW1lbENoYXJzKHN0cilcclxuXHRyZXR1cm4gcmVzLmNoYXJBdCgwKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=