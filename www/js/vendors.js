"use strict";

function _defineProperty2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof2(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof2(obj) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof2(obj); }

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.LazyLoad = factory());
})(void 0, function () {
  'use strict';

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  var runningOnBrowser = typeof window !== "undefined";
  var isBot = runningOnBrowser && !("onscroll" in window) || typeof navigator !== "undefined" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent);
  var supportsIntersectionObserver = runningOnBrowser && "IntersectionObserver" in window;
  var supportsClassList = runningOnBrowser && "classList" in document.createElement("p");
  var isHiDpi = runningOnBrowser && window.devicePixelRatio > 1;
  var defaultSettings = {
    elements_selector: ".lazy",
    container: isBot || runningOnBrowser ? document : null,
    threshold: 300,
    thresholds: null,
    data_src: "src",
    data_srcset: "srcset",
    data_sizes: "sizes",
    data_bg: "bg",
    data_bg_hidpi: "bg-hidpi",
    data_bg_multi: "bg-multi",
    data_bg_multi_hidpi: "bg-multi-hidpi",
    data_bg_set: "bg-set",
    data_poster: "poster",
    class_applied: "applied",
    class_loading: "loading",
    class_loaded: "loaded",
    class_error: "error",
    class_entered: "entered",
    class_exited: "exited",
    unobserve_completed: true,
    unobserve_entered: false,
    cancel_on_exit: true,
    callback_enter: null,
    callback_exit: null,
    callback_applied: null,
    callback_loading: null,
    callback_loaded: null,
    callback_error: null,
    callback_finish: null,
    callback_cancel: null,
    use_native: false,
    restore_on_error: false
  };

  var getExtendedSettings = function getExtendedSettings(customSettings) {
    return _extends({}, defaultSettings, customSettings);
  };
  /* Creates instance and notifies it through the window element */


  var createInstance = function createInstance(classObj, options) {
    var event;
    var eventString = "LazyLoad::Initialized";
    var instance = new classObj(options);

    try {
      // Works in modern browsers
      event = new CustomEvent(eventString, {
        detail: {
          instance: instance
        }
      });
    } catch (err) {
      // Works in Internet Explorer (all versions)
      event = document.createEvent("CustomEvent");
      event.initCustomEvent(eventString, false, false, {
        instance: instance
      });
    }

    window.dispatchEvent(event);
  };
  /* Auto initialization of one or more instances of lazyload, depending on the 
      options passed in (plain object or an array) */


  var autoInitialize = function autoInitialize(classObj, options) {
    if (!options) {
      return;
    }

    if (!options.length) {
      // Plain object
      createInstance(classObj, options);
    } else {
      // Array of objects
      for (var i = 0, optionsItem; optionsItem = options[i]; i += 1) {
        createInstance(classObj, optionsItem);
      }
    }
  };

  var SRC = "src";
  var SRCSET = "srcset";
  var SIZES = "sizes";
  var POSTER = "poster";
  var ORIGINALS = "llOriginalAttrs";
  var DATA = "data";
  var statusLoading = "loading";
  var statusLoaded = "loaded";
  var statusApplied = "applied";
  var statusEntered = "entered";
  var statusError = "error";
  var statusNative = "native";
  var dataPrefix = "data-";
  var statusDataName = "ll-status";

  var getData = function getData(element, attribute) {
    return element.getAttribute(dataPrefix + attribute);
  };

  var setData = function setData(element, attribute, value) {
    var attrName = dataPrefix + attribute;

    if (value === null) {
      element.removeAttribute(attrName);
      return;
    }

    element.setAttribute(attrName, value);
  };

  var getStatus = function getStatus(element) {
    return getData(element, statusDataName);
  };

  var setStatus = function setStatus(element, status) {
    return setData(element, statusDataName, status);
  };

  var resetStatus = function resetStatus(element) {
    return setStatus(element, null);
  };

  var hasEmptyStatus = function hasEmptyStatus(element) {
    return getStatus(element) === null;
  };

  var hasStatusLoading = function hasStatusLoading(element) {
    return getStatus(element) === statusLoading;
  };

  var hasStatusError = function hasStatusError(element) {
    return getStatus(element) === statusError;
  };

  var hasStatusNative = function hasStatusNative(element) {
    return getStatus(element) === statusNative;
  };

  var statusesAfterLoading = [statusLoading, statusLoaded, statusApplied, statusError];

  var hadStartedLoading = function hadStartedLoading(element) {
    return statusesAfterLoading.indexOf(getStatus(element)) >= 0;
  };

  var safeCallback = function safeCallback(callback, arg1, arg2, arg3) {
    if (!callback) {
      return;
    }

    if (arg3 !== undefined) {
      callback(arg1, arg2, arg3);
      return;
    }

    if (arg2 !== undefined) {
      callback(arg1, arg2);
      return;
    }

    callback(arg1);
  };

  var addClass = function addClass(element, className) {
    if (supportsClassList) {
      element.classList.add(className);
      return;
    }

    element.className += (element.className ? " " : "") + className;
  };

  var removeClass = function removeClass(element, className) {
    if (supportsClassList) {
      element.classList.remove(className);
      return;
    }

    element.className = element.className.replace(new RegExp("(^|\\s+)" + className + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
  };

  var addTempImage = function addTempImage(element) {
    element.llTempImage = document.createElement("IMG");
  };

  var deleteTempImage = function deleteTempImage(element) {
    delete element.llTempImage;
  };

  var getTempImage = function getTempImage(element) {
    return element.llTempImage;
  };

  var unobserve = function unobserve(element, instance) {
    if (!instance) return;
    var observer = instance._observer;
    if (!observer) return;
    observer.unobserve(element);
  };

  var resetObserver = function resetObserver(observer) {
    observer.disconnect();
  };

  var unobserveEntered = function unobserveEntered(element, settings, instance) {
    if (settings.unobserve_entered) unobserve(element, instance);
  };

  var updateLoadingCount = function updateLoadingCount(instance, delta) {
    if (!instance) return;
    instance.loadingCount += delta;
  };

  var decreaseToLoadCount = function decreaseToLoadCount(instance) {
    if (!instance) return;
    instance.toLoadCount -= 1;
  };

  var setToLoadCount = function setToLoadCount(instance, value) {
    if (!instance) return;
    instance.toLoadCount = value;
  };

  var isSomethingLoading = function isSomethingLoading(instance) {
    return instance.loadingCount > 0;
  };

  var haveElementsToLoad = function haveElementsToLoad(instance) {
    return instance.toLoadCount > 0;
  };

  var getSourceTags = function getSourceTags(parentTag) {
    var sourceTags = [];

    for (var i = 0, childTag; childTag = parentTag.children[i]; i += 1) {
      if (childTag.tagName === "SOURCE") {
        sourceTags.push(childTag);
      }
    }

    return sourceTags;
  };

  var forEachPictureSource = function forEachPictureSource(element, fn) {
    var parent = element.parentNode;

    if (!parent || parent.tagName !== "PICTURE") {
      return;
    }

    var sourceTags = getSourceTags(parent);
    sourceTags.forEach(fn);
  };

  var forEachVideoSource = function forEachVideoSource(element, fn) {
    var sourceTags = getSourceTags(element);
    sourceTags.forEach(fn);
  };

  var attrsSrc = [SRC];
  var attrsSrcPoster = [SRC, POSTER];
  var attrsSrcSrcsetSizes = [SRC, SRCSET, SIZES];
  var attrsData = [DATA];

  var hasOriginalAttrs = function hasOriginalAttrs(element) {
    return !!element[ORIGINALS];
  };

  var getOriginalAttrs = function getOriginalAttrs(element) {
    return element[ORIGINALS];
  };

  var deleteOriginalAttrs = function deleteOriginalAttrs(element) {
    return delete element[ORIGINALS];
  }; // ## SAVE ##


  var setOriginalsObject = function setOriginalsObject(element, attributes) {
    if (hasOriginalAttrs(element)) {
      return;
    }

    var originals = {};
    attributes.forEach(function (attribute) {
      originals[attribute] = element.getAttribute(attribute);
    });
    element[ORIGINALS] = originals;
  };

  var saveOriginalBackgroundStyle = function saveOriginalBackgroundStyle(element) {
    if (hasOriginalAttrs(element)) {
      return;
    }

    element[ORIGINALS] = {
      backgroundImage: element.style.backgroundImage
    };
  }; // ## RESTORE ##


  var setOrResetAttribute = function setOrResetAttribute(element, attrName, value) {
    if (!value) {
      element.removeAttribute(attrName);
      return;
    }

    element.setAttribute(attrName, value);
  };

  var restoreOriginalAttrs = function restoreOriginalAttrs(element, attributes) {
    if (!hasOriginalAttrs(element)) {
      return;
    }

    var originals = getOriginalAttrs(element);
    attributes.forEach(function (attribute) {
      setOrResetAttribute(element, attribute, originals[attribute]);
    });
  };

  var restoreOriginalBgImage = function restoreOriginalBgImage(element) {
    if (!hasOriginalAttrs(element)) {
      return;
    }

    var originals = getOriginalAttrs(element);
    element.style.backgroundImage = originals.backgroundImage;
  };

  var manageApplied = function manageApplied(element, settings, instance) {
    addClass(element, settings.class_applied);
    setStatus(element, statusApplied); // Instance is not provided when loading is called from static class

    if (!instance) return;

    if (settings.unobserve_completed) {
      // Unobserve now because we can't do it on load
      unobserve(element, settings);
    }

    safeCallback(settings.callback_applied, element, instance);
  };

  var manageLoading = function manageLoading(element, settings, instance) {
    addClass(element, settings.class_loading);
    setStatus(element, statusLoading); // Instance is not provided when loading is called from static class

    if (!instance) return;
    updateLoadingCount(instance, +1);
    safeCallback(settings.callback_loading, element, instance);
  };

  var setAttributeIfValue = function setAttributeIfValue(element, attrName, value) {
    if (!value) {
      return;
    }

    element.setAttribute(attrName, value);
  };

  var setImageAttributes = function setImageAttributes(element, settings) {
    setAttributeIfValue(element, SIZES, getData(element, settings.data_sizes));
    setAttributeIfValue(element, SRCSET, getData(element, settings.data_srcset));
    setAttributeIfValue(element, SRC, getData(element, settings.data_src));
  };

  var setSourcesImg = function setSourcesImg(imgEl, settings) {
    forEachPictureSource(imgEl, function (sourceTag) {
      setOriginalsObject(sourceTag, attrsSrcSrcsetSizes);
      setImageAttributes(sourceTag, settings);
    });
    setOriginalsObject(imgEl, attrsSrcSrcsetSizes);
    setImageAttributes(imgEl, settings);
  };

  var setSourcesIframe = function setSourcesIframe(iframe, settings) {
    setOriginalsObject(iframe, attrsSrc);
    setAttributeIfValue(iframe, SRC, getData(iframe, settings.data_src));
  };

  var setSourcesVideo = function setSourcesVideo(videoEl, settings) {
    forEachVideoSource(videoEl, function (sourceEl) {
      setOriginalsObject(sourceEl, attrsSrc);
      setAttributeIfValue(sourceEl, SRC, getData(sourceEl, settings.data_src));
    });
    setOriginalsObject(videoEl, attrsSrcPoster);
    setAttributeIfValue(videoEl, POSTER, getData(videoEl, settings.data_poster));
    setAttributeIfValue(videoEl, SRC, getData(videoEl, settings.data_src));
    videoEl.load();
  };

  var setSourcesObject = function setSourcesObject(object, settings) {
    setOriginalsObject(object, attrsData);
    setAttributeIfValue(object, DATA, getData(object, settings.data_src));
  };

  var setBackground = function setBackground(element, settings, instance) {
    var bg1xValue = getData(element, settings.data_bg);
    var bgHiDpiValue = getData(element, settings.data_bg_hidpi);
    var bgDataValue = isHiDpi && bgHiDpiValue ? bgHiDpiValue : bg1xValue;
    if (!bgDataValue) return;
    element.style.backgroundImage = "url(\"".concat(bgDataValue, "\")");
    getTempImage(element).setAttribute(SRC, bgDataValue);
    manageLoading(element, settings, instance);
  }; // NOTE: THE TEMP IMAGE TRICK CANNOT BE DONE WITH data-multi-bg
  // BECAUSE INSIDE ITS VALUES MUST BE WRAPPED WITH URL() AND ONE OF THEM
  // COULD BE A GRADIENT BACKGROUND IMAGE


  var setMultiBackground = function setMultiBackground(element, settings, instance) {
    var bg1xValue = getData(element, settings.data_bg_multi);
    var bgHiDpiValue = getData(element, settings.data_bg_multi_hidpi);
    var bgDataValue = isHiDpi && bgHiDpiValue ? bgHiDpiValue : bg1xValue;

    if (!bgDataValue) {
      return;
    }

    element.style.backgroundImage = bgDataValue;
    manageApplied(element, settings, instance);
  };

  var setImgsetBackground = function setImgsetBackground(element, settings, instance) {
    var bgImgSetDataValue = getData(element, settings.data_bg_set);

    if (!bgImgSetDataValue) {
      return;
    }

    var imgSetValues = bgImgSetDataValue.split("|");
    var bgImageValues = imgSetValues.map(function (value) {
      return "image-set(".concat(value, ")");
    });
    element.style.backgroundImage = bgImageValues.join(); // Temporary fix for Chromeium with the -webkit- prefix

    if (element.style.backgroundImage === '') {
      bgImageValues = imgSetValues.map(function (value) {
        return "-webkit-image-set(".concat(value, ")");
      });
      element.style.backgroundImage = bgImageValues.join();
    }

    manageApplied(element, settings, instance);
  };

  var setSourcesFunctions = {
    IMG: setSourcesImg,
    IFRAME: setSourcesIframe,
    VIDEO: setSourcesVideo,
    OBJECT: setSourcesObject
  };

  var setSourcesNative = function setSourcesNative(element, settings) {
    var setSourcesFunction = setSourcesFunctions[element.tagName];

    if (!setSourcesFunction) {
      return;
    }

    setSourcesFunction(element, settings);
  };

  var setSources = function setSources(element, settings, instance) {
    var setSourcesFunction = setSourcesFunctions[element.tagName];

    if (!setSourcesFunction) {
      return;
    }

    setSourcesFunction(element, settings);
    manageLoading(element, settings, instance);
  };

  var elementsWithLoadEvent = ["IMG", "IFRAME", "VIDEO", "OBJECT"];

  var hasLoadEvent = function hasLoadEvent(element) {
    return elementsWithLoadEvent.indexOf(element.tagName) > -1;
  };

  var checkFinish = function checkFinish(settings, instance) {
    if (instance && !isSomethingLoading(instance) && !haveElementsToLoad(instance)) {
      safeCallback(settings.callback_finish, instance);
    }
  };

  var addEventListener = function addEventListener(element, eventName, handler) {
    element.addEventListener(eventName, handler);
    element.llEvLisnrs[eventName] = handler;
  };

  var removeEventListener = function removeEventListener(element, eventName, handler) {
    element.removeEventListener(eventName, handler);
  };

  var hasEventListeners = function hasEventListeners(element) {
    return !!element.llEvLisnrs;
  };

  var addEventListeners = function addEventListeners(element, loadHandler, errorHandler) {
    if (!hasEventListeners(element)) element.llEvLisnrs = {};
    var loadEventName = element.tagName === "VIDEO" ? "loadeddata" : "load";
    addEventListener(element, loadEventName, loadHandler);
    addEventListener(element, "error", errorHandler);
  };

  var removeEventListeners = function removeEventListeners(element) {
    if (!hasEventListeners(element)) {
      return;
    }

    var eventListeners = element.llEvLisnrs;

    for (var eventName in eventListeners) {
      var handler = eventListeners[eventName];
      removeEventListener(element, eventName, handler);
    }

    delete element.llEvLisnrs;
  };

  var doneHandler = function doneHandler(element, settings, instance) {
    deleteTempImage(element);
    updateLoadingCount(instance, -1);
    decreaseToLoadCount(instance);
    removeClass(element, settings.class_loading);

    if (settings.unobserve_completed) {
      unobserve(element, instance);
    }
  };

  var loadHandler = function loadHandler(event, element, settings, instance) {
    var goingNative = hasStatusNative(element);
    doneHandler(element, settings, instance);
    addClass(element, settings.class_loaded);
    setStatus(element, statusLoaded);
    safeCallback(settings.callback_loaded, element, instance);
    if (!goingNative) checkFinish(settings, instance);
  };

  var errorHandler = function errorHandler(event, element, settings, instance) {
    var goingNative = hasStatusNative(element);
    doneHandler(element, settings, instance);
    addClass(element, settings.class_error);
    setStatus(element, statusError);
    safeCallback(settings.callback_error, element, instance);
    if (settings.restore_on_error) restoreOriginalAttrs(element, attrsSrcSrcsetSizes);
    if (!goingNative) checkFinish(settings, instance);
  };

  var addOneShotEventListeners = function addOneShotEventListeners(element, settings, instance) {
    var elementToListenTo = getTempImage(element) || element;

    if (hasEventListeners(elementToListenTo)) {
      // This happens when loading is retried twice
      return;
    }

    var _loadHandler = function _loadHandler(event) {
      loadHandler(event, element, settings, instance);
      removeEventListeners(elementToListenTo);
    };

    var _errorHandler = function _errorHandler(event) {
      errorHandler(event, element, settings, instance);
      removeEventListeners(elementToListenTo);
    };

    addEventListeners(elementToListenTo, _loadHandler, _errorHandler);
  };

  var loadBackground = function loadBackground(element, settings, instance) {
    addTempImage(element);
    addOneShotEventListeners(element, settings, instance);
    saveOriginalBackgroundStyle(element);
    setBackground(element, settings, instance);
    setMultiBackground(element, settings, instance);
    setImgsetBackground(element, settings, instance);
  };

  var loadRegular = function loadRegular(element, settings, instance) {
    addOneShotEventListeners(element, settings, instance);
    setSources(element, settings, instance);
  };

  var load = function load(element, settings, instance) {
    if (hasLoadEvent(element)) {
      loadRegular(element, settings, instance);
    } else {
      loadBackground(element, settings, instance);
    }
  };

  var loadNative = function loadNative(element, settings, instance) {
    element.setAttribute("loading", "lazy");
    addOneShotEventListeners(element, settings, instance);
    setSourcesNative(element, settings);
    setStatus(element, statusNative);
  };

  var removeImageAttributes = function removeImageAttributes(element) {
    element.removeAttribute(SRC);
    element.removeAttribute(SRCSET);
    element.removeAttribute(SIZES);
  };

  var resetSourcesImg = function resetSourcesImg(element) {
    forEachPictureSource(element, function (sourceTag) {
      removeImageAttributes(sourceTag);
    });
    removeImageAttributes(element);
  };

  var restoreImg = function restoreImg(imgEl) {
    forEachPictureSource(imgEl, function (sourceEl) {
      restoreOriginalAttrs(sourceEl, attrsSrcSrcsetSizes);
    });
    restoreOriginalAttrs(imgEl, attrsSrcSrcsetSizes);
  };

  var restoreVideo = function restoreVideo(videoEl) {
    forEachVideoSource(videoEl, function (sourceEl) {
      restoreOriginalAttrs(sourceEl, attrsSrc);
    });
    restoreOriginalAttrs(videoEl, attrsSrcPoster);
    videoEl.load();
  };

  var restoreIframe = function restoreIframe(iframeEl) {
    restoreOriginalAttrs(iframeEl, attrsSrc);
  };

  var restoreObject = function restoreObject(objectEl) {
    restoreOriginalAttrs(objectEl, attrsData);
  };

  var restoreFunctions = {
    IMG: restoreImg,
    IFRAME: restoreIframe,
    VIDEO: restoreVideo,
    OBJECT: restoreObject
  };

  var restoreAttributes = function restoreAttributes(element) {
    var restoreFunction = restoreFunctions[element.tagName];

    if (!restoreFunction) {
      restoreOriginalBgImage(element);
      return;
    }

    restoreFunction(element);
  };

  var resetClasses = function resetClasses(element, settings) {
    if (hasEmptyStatus(element) || hasStatusNative(element)) {
      return;
    }

    removeClass(element, settings.class_entered);
    removeClass(element, settings.class_exited);
    removeClass(element, settings.class_applied);
    removeClass(element, settings.class_loading);
    removeClass(element, settings.class_loaded);
    removeClass(element, settings.class_error);
  };

  var restore = function restore(element, settings) {
    restoreAttributes(element);
    resetClasses(element, settings);
    resetStatus(element);
    deleteOriginalAttrs(element);
  };

  var cancelLoading = function cancelLoading(element, entry, settings, instance) {
    if (!settings.cancel_on_exit) return;
    if (!hasStatusLoading(element)) return;
    if (element.tagName !== "IMG") return; //Works only on images

    removeEventListeners(element);
    resetSourcesImg(element);
    restoreImg(element);
    removeClass(element, settings.class_loading);
    updateLoadingCount(instance, -1);
    resetStatus(element);
    safeCallback(settings.callback_cancel, element, entry, instance);
  };

  var onEnter = function onEnter(element, entry, settings, instance) {
    var dontLoad = hadStartedLoading(element);
    /* Save status 
    before setting it, to prevent loading it again. Fixes #526. */

    setStatus(element, statusEntered);
    addClass(element, settings.class_entered);
    removeClass(element, settings.class_exited);
    unobserveEntered(element, settings, instance);
    safeCallback(settings.callback_enter, element, entry, instance);
    if (dontLoad) return;
    load(element, settings, instance);
  };

  var onExit = function onExit(element, entry, settings, instance) {
    if (hasEmptyStatus(element)) return; //Ignore the first pass, at landing

    addClass(element, settings.class_exited);
    cancelLoading(element, entry, settings, instance);
    safeCallback(settings.callback_exit, element, entry, instance);
  };

  var tagsWithNativeLazy = ["IMG", "IFRAME", "VIDEO"];

  var shouldUseNative = function shouldUseNative(settings) {
    return settings.use_native && "loading" in HTMLImageElement.prototype;
  };

  var loadAllNative = function loadAllNative(elements, settings, instance) {
    elements.forEach(function (element) {
      if (tagsWithNativeLazy.indexOf(element.tagName) === -1) {
        return;
      }

      loadNative(element, settings, instance);
    });
    setToLoadCount(instance, 0);
  };

  var isIntersecting = function isIntersecting(entry) {
    return entry.isIntersecting || entry.intersectionRatio > 0;
  };

  var getObserverSettings = function getObserverSettings(settings) {
    return {
      root: settings.container === document ? null : settings.container,
      rootMargin: settings.thresholds || settings.threshold + "px"
    };
  };

  var intersectionHandler = function intersectionHandler(entries, settings, instance) {
    entries.forEach(function (entry) {
      return isIntersecting(entry) ? onEnter(entry.target, entry, settings, instance) : onExit(entry.target, entry, settings, instance);
    });
  };

  var observeElements = function observeElements(observer, elements) {
    elements.forEach(function (element) {
      observer.observe(element);
    });
  };

  var updateObserver = function updateObserver(observer, elementsToObserve) {
    resetObserver(observer);
    observeElements(observer, elementsToObserve);
  };

  var setObserver = function setObserver(settings, instance) {
    if (!supportsIntersectionObserver || shouldUseNative(settings)) {
      return;
    }

    instance._observer = new IntersectionObserver(function (entries) {
      intersectionHandler(entries, settings, instance);
    }, getObserverSettings(settings));
  };

  var toArray = function toArray(nodeSet) {
    return Array.prototype.slice.call(nodeSet);
  };

  var queryElements = function queryElements(settings) {
    return settings.container.querySelectorAll(settings.elements_selector);
  };

  var excludeManagedElements = function excludeManagedElements(elements) {
    return toArray(elements).filter(hasEmptyStatus);
  };

  var hasError = function hasError(element) {
    return hasStatusError(element);
  };

  var filterErrorElements = function filterErrorElements(elements) {
    return toArray(elements).filter(hasError);
  };

  var getElementsToLoad = function getElementsToLoad(elements, settings) {
    return excludeManagedElements(elements || queryElements(settings));
  };

  var retryLazyLoad = function retryLazyLoad(settings, instance) {
    var errorElements = filterErrorElements(queryElements(settings));
    errorElements.forEach(function (element) {
      removeClass(element, settings.class_error);
      resetStatus(element);
    });
    instance.update();
  };

  var setOnlineCheck = function setOnlineCheck(settings, instance) {
    if (!runningOnBrowser) {
      return;
    }

    instance._onlineHandler = function () {
      retryLazyLoad(settings, instance);
    };

    window.addEventListener("online", instance._onlineHandler);
  };

  var resetOnlineCheck = function resetOnlineCheck(instance) {
    if (!runningOnBrowser) {
      return;
    }

    window.removeEventListener("online", instance._onlineHandler);
  };

  var LazyLoad = function LazyLoad(customSettings, elements) {
    var settings = getExtendedSettings(customSettings);
    this._settings = settings;
    this.loadingCount = 0;
    setObserver(settings, this);
    setOnlineCheck(settings, this);
    this.update(elements);
  };

  LazyLoad.prototype = {
    update: function update(givenNodeset) {
      var settings = this._settings;
      var elementsToLoad = getElementsToLoad(givenNodeset, settings);
      setToLoadCount(this, elementsToLoad.length);

      if (isBot || !supportsIntersectionObserver) {
        this.loadAll(elementsToLoad);
        return;
      }

      if (shouldUseNative(settings)) {
        loadAllNative(elementsToLoad, settings, this);
        return;
      }

      updateObserver(this._observer, elementsToLoad);
    },
    destroy: function destroy() {
      // Observer
      if (this._observer) {
        this._observer.disconnect();
      } // Clean handlers


      resetOnlineCheck(this); // Clean custom attributes on elements

      queryElements(this._settings).forEach(function (element) {
        deleteOriginalAttrs(element);
      }); // Delete all internal props

      delete this._observer;
      delete this._settings;
      delete this._onlineHandler;
      delete this.loadingCount;
      delete this.toLoadCount;
    },
    loadAll: function loadAll(elements) {
      var _this = this;

      var settings = this._settings;
      var elementsToLoad = getElementsToLoad(elements, settings);
      elementsToLoad.forEach(function (element) {
        unobserve(element, _this);
        load(element, settings, _this);
      });
    },
    restoreAll: function restoreAll() {
      var settings = this._settings;
      queryElements(settings).forEach(function (element) {
        restore(element, settings);
      });
    }
  };

  LazyLoad.load = function (element, customSettings) {
    var settings = getExtendedSettings(customSettings);
    load(element, settings);
  };

  LazyLoad.resetStatus = function (element) {
    resetStatus(element);
  }; // Automatic instances creation if required (useful for async script loading)


  if (runningOnBrowser) {
    autoInitialize(LazyLoad, window.lazyLoadOptions);
  }

  return LazyLoad;
});

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof2(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) ? exports.AOS = t() : e.AOS = t();
}(void 0, function () {
  return function (e) {
    function t(o) {
      if (n[o]) return n[o].exports;
      var i = n[o] = {
        exports: {},
        id: o,
        loaded: !1
      };
      return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports;
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "dist/", t(0);
  }([function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    var i = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];

        for (var o in n) {
          Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
        }
      }

      return e;
    },
        r = n(1),
        a = (o(r), n(6)),
        u = o(a),
        c = n(7),
        s = o(c),
        f = n(8),
        d = o(f),
        l = n(9),
        p = o(l),
        m = n(10),
        b = o(m),
        v = n(11),
        y = o(v),
        g = n(14),
        h = o(g),
        w = [],
        k = !1,
        x = {
      offset: 120,
      delay: 0,
      easing: "ease",
      duration: 400,
      disable: !1,
      once: !1,
      startEvent: "DOMContentLoaded",
      throttleDelay: 99,
      debounceDelay: 50,
      disableMutationObserver: !1
    },
        j = function j() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      if (e && (k = !0), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w;
    },
        O = function O() {
      w = (0, h.default)(), j();
    },
        M = function M() {
      w.forEach(function (e, t) {
        e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay");
      });
    },
        S = function S(e) {
      return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0;
    },
        _ = function _(e) {
      x = i(x, e), w = (0, h.default)();
      var t = document.all && !window.atob;
      return S(x.disable) || t ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(!0) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function () {
        j(!0);
      }) : document.addEventListener(x.startEvent, function () {
        j(!0);
      }), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function () {
        (0, b.default)(w, x.once);
      }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w);
    };

    e.exports = {
      init: _,
      refresh: j,
      refreshHard: O
    };
  }, function (e, t) {},,,,, function (e, t) {
    (function (t) {
      "use strict";

      function n(e, t, n) {
        function o(t) {
          var n = b,
              o = v;
          return b = v = void 0, k = t, g = e.apply(o, n);
        }

        function r(e) {
          return k = e, h = setTimeout(f, t), M ? o(e) : g;
        }

        function a(e) {
          var n = e - w,
              o = e - k,
              i = t - n;
          return S ? j(i, y - o) : i;
        }

        function c(e) {
          var n = e - w,
              o = e - k;
          return void 0 === w || n >= t || n < 0 || S && o >= y;
        }

        function f() {
          var e = O();
          return c(e) ? d(e) : void (h = setTimeout(f, a(e)));
        }

        function d(e) {
          return h = void 0, _ && b ? o(e) : (b = v = void 0, g);
        }

        function l() {
          void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0;
        }

        function p() {
          return void 0 === h ? g : d(O());
        }

        function m() {
          var e = O(),
              n = c(e);

          if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);
            if (S) return h = setTimeout(f, t), o(w);
          }

          return void 0 === h && (h = setTimeout(f, t)), g;
        }

        var b,
            v,
            y,
            g,
            h,
            w,
            k = 0,
            M = !1,
            S = !1,
            _ = !0;

        if ("function" != typeof e) throw new TypeError(s);
        return t = u(t) || 0, i(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
      }

      function o(e, t, o) {
        var r = !0,
            a = !0;
        if ("function" != typeof e) throw new TypeError(s);
        return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
          leading: r,
          maxWait: t,
          trailing: a
        });
      }

      function i(e) {
        var t = "undefined" == typeof e ? "undefined" : c(e);
        return !!e && ("object" == t || "function" == t);
      }

      function r(e) {
        return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e));
      }

      function a(e) {
        return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d;
      }

      function u(e) {
        if ("number" == typeof e) return e;
        if (a(e)) return f;

        if (i(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = i(t) ? t + "" : t;
        }

        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(l, "");
        var n = m.test(e);
        return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? f : +e;
      }

      var c = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
        return _typeof2(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
      },
          s = "Expected a function",
          f = NaN,
          d = "[object Symbol]",
          l = /^\s+|\s+$/g,
          p = /^[-+]0x[0-9a-f]+$/i,
          m = /^0b[01]+$/i,
          b = /^0o[0-7]+$/i,
          v = parseInt,
          y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
          g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
          h = y || g || Function("return this")(),
          w = Object.prototype,
          k = w.toString,
          x = Math.max,
          j = Math.min,
          O = function O() {
        return h.Date.now();
      };

      e.exports = o;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    (function (t) {
      "use strict";

      function n(e, t, n) {
        function i(t) {
          var n = b,
              o = v;
          return b = v = void 0, O = t, g = e.apply(o, n);
        }

        function r(e) {
          return O = e, h = setTimeout(f, t), M ? i(e) : g;
        }

        function u(e) {
          var n = e - w,
              o = e - O,
              i = t - n;
          return S ? x(i, y - o) : i;
        }

        function s(e) {
          var n = e - w,
              o = e - O;
          return void 0 === w || n >= t || n < 0 || S && o >= y;
        }

        function f() {
          var e = j();
          return s(e) ? d(e) : void (h = setTimeout(f, u(e)));
        }

        function d(e) {
          return h = void 0, _ && b ? i(e) : (b = v = void 0, g);
        }

        function l() {
          void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0;
        }

        function p() {
          return void 0 === h ? g : d(j());
        }

        function m() {
          var e = j(),
              n = s(e);

          if (b = arguments, v = this, w = e, n) {
            if (void 0 === h) return r(w);
            if (S) return h = setTimeout(f, t), i(w);
          }

          return void 0 === h && (h = setTimeout(f, t)), g;
        }

        var b,
            v,
            y,
            g,
            h,
            w,
            O = 0,
            M = !1,
            S = !1,
            _ = !0;

        if ("function" != typeof e) throw new TypeError(c);
        return t = a(t) || 0, o(n) && (M = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, _ = "trailing" in n ? !!n.trailing : _), m.cancel = l, m.flush = p, m;
      }

      function o(e) {
        var t = "undefined" == typeof e ? "undefined" : u(e);
        return !!e && ("object" == t || "function" == t);
      }

      function i(e) {
        return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e));
      }

      function r(e) {
        return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == f;
      }

      function a(e) {
        if ("number" == typeof e) return e;
        if (r(e)) return s;

        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t;
        }

        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(d, "");
        var n = p.test(e);
        return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? s : +e;
      }

      var u = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (e) {
        return _typeof2(e);
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof2(e);
      },
          c = "Expected a function",
          s = NaN,
          f = "[object Symbol]",
          d = /^\s+|\s+$/g,
          l = /^[-+]0x[0-9a-f]+$/i,
          p = /^0b[01]+$/i,
          m = /^0o[0-7]+$/i,
          b = parseInt,
          v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
          y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
          g = v || y || Function("return this")(),
          h = Object.prototype,
          w = h.toString,
          k = Math.max,
          x = Math.min,
          j = function j() {
        return g.Date.now();
      };

      e.exports = n;
    }).call(t, function () {
      return this;
    }());
  }, function (e, t) {
    "use strict";

    function n(e) {
      var t = void 0,
          o = void 0,
          i = void 0;

      for (t = 0; t < e.length; t += 1) {
        if (o = e[t], o.dataset && o.dataset.aos) return !0;
        if (i = o.children && n(o.children)) return !0;
      }

      return !1;
    }

    function o() {
      return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    }

    function i() {
      return !!o();
    }

    function r(e, t) {
      var n = window.document,
          i = o(),
          r = new i(a);
      u = t, r.observe(n.documentElement, {
        childList: !0,
        subtree: !0,
        removedNodes: !0
      });
    }

    function a(e) {
      e && e.forEach(function (e) {
        var t = Array.prototype.slice.call(e.addedNodes),
            o = Array.prototype.slice.call(e.removedNodes),
            i = t.concat(o);
        if (n(i)) return u();
      });
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var u = function u() {};

    t.default = {
      isSupported: i,
      ready: r
    };
  }, function (e, t) {
    "use strict";

    function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function o() {
      return navigator.userAgent || navigator.vendor || window.opera || "";
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var i = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
        }
      }

      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t;
      };
    }(),
        r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
        a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
        c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
        s = function () {
      function e() {
        n(this, e);
      }

      return i(e, [{
        key: "phone",
        value: function value() {
          var e = o();
          return !(!r.test(e) && !a.test(e.substr(0, 4)));
        }
      }, {
        key: "mobile",
        value: function value() {
          var e = o();
          return !(!u.test(e) && !c.test(e.substr(0, 4)));
        }
      }, {
        key: "tablet",
        value: function value() {
          return this.mobile() && !this.phone();
        }
      }]), e;
    }();

    t.default = new s();
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function n(e, t, _n2) {
      var o = e.node.getAttribute("data-aos-once");
      t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !_n2 && "true" !== o) && e.node.classList.remove("aos-animate");
    },
        o = function o(e, t) {
      var o = window.pageYOffset,
          i = window.innerHeight;
      e.forEach(function (e, r) {
        n(e, i + o, t);
      });
    };

    t.default = o;
  }, function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var i = n(12),
        r = o(i),
        a = function a(e, t) {
      return e.forEach(function (e, n) {
        e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset);
      }), e;
    };

    t.default = a;
  }, function (e, t, n) {
    "use strict";

    function o(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var i = n(13),
        r = o(i),
        a = function a(e, t) {
      var n = 0,
          o = 0,
          i = window.innerHeight,
          a = {
        offset: e.getAttribute("data-aos-offset"),
        anchor: e.getAttribute("data-aos-anchor"),
        anchorPlacement: e.getAttribute("data-aos-anchor-placement")
      };

      switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement) {
        case "top-bottom":
          break;

        case "center-bottom":
          n += e.offsetHeight / 2;
          break;

        case "bottom-bottom":
          n += e.offsetHeight;
          break;

        case "top-center":
          n += i / 2;
          break;

        case "bottom-center":
          n += i / 2 + e.offsetHeight;
          break;

        case "center-center":
          n += i / 2 + e.offsetHeight / 2;
          break;

        case "top-top":
          n += i;
          break;

        case "bottom-top":
          n += e.offsetHeight + i;
          break;

        case "center-top":
          n += e.offsetHeight / 2 + i;
      }

      return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o;
    };

    t.default = a;
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function n(e) {
      for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) {
        t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
      }

      return {
        top: n,
        left: t
      };
    };

    t.default = n;
  }, function (e, t) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var n = function n(e) {
      return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function (e) {
        return {
          node: e
        };
      });
    };

    t.default = n;
  }]);
});
/*! skrollr 0.6.26 (2014-06-08) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */

(function (e, t, r) {
  "use strict";

  function n(r) {
    if (o = t.documentElement, a = t.body, K(), it = this, r = r || {}, ut = r.constants || {}, r.easing) for (var n in r.easing) {
      U[n] = r.easing[n];
    }
    yt = r.edgeStrategy || "set", ct = {
      beforerender: r.beforerender,
      render: r.render,
      keyframe: r.keyframe
    }, ft = r.forceHeight !== !1, ft && (Vt = r.scale || 1), mt = r.mobileDeceleration || x, dt = r.smoothScrolling !== !1, gt = r.smoothScrollingDuration || E, vt = {
      targetTop: it.getScrollTop()
    }, Gt = (r.mobileCheck || function () {
      return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || e.opera);
    })(), Gt ? (st = t.getElementById("skrollr-body"), st && at(), X(), Dt(o, [y, S], [T])) : Dt(o, [y, b], [T]), it.refresh(), St(e, "resize orientationchange", function () {
      var e = o.clientWidth,
          t = o.clientHeight;
      (t !== $t || e !== Mt) && ($t = t, Mt = e, _t = !0);
    });
    var i = Y();
    return function l() {
      Z(), bt = i(l);
    }(), it;
  }

  var o,
      a,
      i = {
    get: function get() {
      return it;
    },
    init: function init(e) {
      return it || new n(e);
    },
    VERSION: "0.6.26"
  },
      l = Object.prototype.hasOwnProperty,
      s = e.Math,
      c = e.getComputedStyle,
      f = "touchstart",
      u = "touchmove",
      m = "touchcancel",
      p = "touchend",
      d = "skrollable",
      g = d + "-before",
      v = d + "-between",
      h = d + "-after",
      y = "skrollr",
      T = "no-" + y,
      b = y + "-desktop",
      S = y + "-mobile",
      k = "linear",
      w = 1e3,
      x = .004,
      E = 200,
      A = "start",
      F = "end",
      C = "center",
      D = "bottom",
      H = "___skrollable_id",
      I = /^(?:input|textarea|button|select)$/i,
      P = /^\s+|\s+$/g,
      N = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
      O = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
      V = /^(@?[a-z\-]+)\[(\w+)\]$/,
      z = /-([a-z0-9_])/g,
      q = function q(e, t) {
    return t.toUpperCase();
  },
      L = /[\-+]?[\d]*\.?[\d]+/g,
      M = /\{\?\}/g,
      $ = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
      _ = /[a-z\-]+-gradient/g,
      B = "",
      G = "",
      K = function K() {
    var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;

    if (c) {
      var t = c(a, null);

      for (var n in t) {
        if (B = n.match(e) || +n == n && t[n].match(e)) break;
      }

      if (!B) return B = G = "", r;
      B = B[0], "-" === B.slice(0, 1) ? (G = B, B = {
        "-webkit-": "webkit",
        "-moz-": "Moz",
        "-ms-": "ms",
        "-o-": "O"
      }[B]) : G = "-" + B.toLowerCase() + "-";
    }
  },
      Y = function Y() {
    var t = e.requestAnimationFrame || e[B.toLowerCase() + "RequestAnimationFrame"],
        r = Pt();
    return (Gt || !t) && (t = function t(_t2) {
      var n = Pt() - r,
          o = s.max(0, 1e3 / 60 - n);
      return e.setTimeout(function () {
        r = Pt(), _t2();
      }, o);
    }), t;
  },
      R = function R() {
    var t = e.cancelAnimationFrame || e[B.toLowerCase() + "CancelAnimationFrame"];
    return (Gt || !t) && (t = function t(_t3) {
      return e.clearTimeout(_t3);
    }), t;
  },
      U = {
    begin: function begin() {
      return 0;
    },
    end: function end() {
      return 1;
    },
    linear: function linear(e) {
      return e;
    },
    quadratic: function quadratic(e) {
      return e * e;
    },
    cubic: function cubic(e) {
      return e * e * e;
    },
    swing: function swing(e) {
      return -s.cos(e * s.PI) / 2 + .5;
    },
    sqrt: function sqrt(e) {
      return s.sqrt(e);
    },
    outCubic: function outCubic(e) {
      return s.pow(e - 1, 3) + 1;
    },
    bounce: function bounce(e) {
      var t;
      if (.5083 >= e) t = 3;else if (.8489 >= e) t = 9;else if (.96208 >= e) t = 27;else {
        if (!(.99981 >= e)) return 1;
        t = 91;
      }
      return 1 - s.abs(3 * s.cos(1.028 * e * t) / t);
    }
  };

  n.prototype.refresh = function (e) {
    var n,
        o,
        a = !1;

    for (e === r ? (a = !0, lt = [], Bt = 0, e = t.getElementsByTagName("*")) : e.length === r && (e = [e]), n = 0, o = e.length; o > n; n++) {
      var i = e[n],
          l = i,
          s = [],
          c = dt,
          f = yt,
          u = !1;

      if (a && H in i && delete i[H], i.attributes) {
        for (var m = 0, p = i.attributes.length; p > m; m++) {
          var g = i.attributes[m];
          if ("data-anchor-target" !== g.name) {
            if ("data-smooth-scrolling" !== g.name) {
              if ("data-edge-strategy" !== g.name) {
                if ("data-emit-events" !== g.name) {
                  var v = g.name.match(N);

                  if (null !== v) {
                    var h = {
                      props: g.value,
                      element: i,
                      eventType: g.name.replace(z, q)
                    };
                    s.push(h);
                    var y = v[1];
                    y && (h.constant = y.substr(1));
                    var T = v[2];
                    /p$/.test(T) ? (h.isPercentage = !0, h.offset = (0 | T.slice(0, -1)) / 100) : h.offset = 0 | T;
                    var b = v[3],
                        S = v[4] || b;
                    b && b !== A && b !== F ? (h.mode = "relative", h.anchors = [b, S]) : (h.mode = "absolute", b === F ? h.isEnd = !0 : h.isPercentage || (h.offset = h.offset * Vt));
                  }
                } else u = !0;
              } else f = g.value;
            } else c = "off" !== g.value;
          } else if (l = t.querySelector(g.value), null === l) throw 'Unable to find anchor target "' + g.value + '"';
        }

        if (s.length) {
          var k, w, x;
          !a && H in i ? (x = i[H], k = lt[x].styleAttr, w = lt[x].classAttr) : (x = i[H] = Bt++, k = i.style.cssText, w = Ct(i)), lt[x] = {
            element: i,
            styleAttr: k,
            classAttr: w,
            anchorTarget: l,
            keyFrames: s,
            smoothScrolling: c,
            edgeStrategy: f,
            emitEvents: u,
            lastFrameIndex: -1
          }, Dt(i, [d], []);
        }
      }
    }

    for (Et(), n = 0, o = e.length; o > n; n++) {
      var E = lt[e[n][H]];
      E !== r && (J(E), et(E));
    }

    return it;
  }, n.prototype.relativeToAbsolute = function (e, t, r) {
    var n = o.clientHeight,
        a = e.getBoundingClientRect(),
        i = a.top,
        l = a.bottom - a.top;
    return t === D ? i -= n : t === C && (i -= n / 2), r === D ? i += l : r === C && (i += l / 2), i += it.getScrollTop(), 0 | i + .5;
  }, n.prototype.animateTo = function (e, t) {
    t = t || {};
    var n = Pt(),
        o = it.getScrollTop();
    return pt = {
      startTop: o,
      topDiff: e - o,
      targetTop: e,
      duration: t.duration || w,
      startTime: n,
      endTime: n + (t.duration || w),
      easing: U[t.easing || k],
      done: t.done
    }, pt.topDiff || (pt.done && pt.done.call(it, !1), pt = r), it;
  }, n.prototype.stopAnimateTo = function () {
    pt && pt.done && pt.done.call(it, !0), pt = r;
  }, n.prototype.isAnimatingTo = function () {
    return !!pt;
  }, n.prototype.isMobile = function () {
    return Gt;
  }, n.prototype.setScrollTop = function (t, r) {
    return ht = r === !0, Gt ? Kt = s.min(s.max(t, 0), Ot) : e.scrollTo(0, t), it;
  }, n.prototype.getScrollTop = function () {
    return Gt ? Kt : e.pageYOffset || o.scrollTop || a.scrollTop || 0;
  }, n.prototype.getMaxScrollTop = function () {
    return Ot;
  }, n.prototype.on = function (e, t) {
    return ct[e] = t, it;
  }, n.prototype.off = function (e) {
    return delete ct[e], it;
  }, n.prototype.destroy = function () {
    var e = R();
    e(bt), wt(), Dt(o, [T], [y, b, S]);

    for (var t = 0, n = lt.length; n > t; t++) {
      ot(lt[t].element);
    }

    o.style.overflow = a.style.overflow = "", o.style.height = a.style.height = "", st && i.setStyle(st, "transform", "none"), it = r, st = r, ct = r, ft = r, Ot = 0, Vt = 1, ut = r, mt = r, zt = "down", qt = -1, Mt = 0, $t = 0, _t = !1, pt = r, dt = r, gt = r, vt = r, ht = r, Bt = 0, yt = r, Gt = !1, Kt = 0, Tt = r;
  };

  var X = function X() {
    var n, i, l, c, d, g, v, h, y, T, b, S;
    St(o, [f, u, m, p].join(" "), function (e) {
      var o = e.changedTouches[0];

      for (c = e.target; 3 === c.nodeType;) {
        c = c.parentNode;
      }

      switch (d = o.clientY, g = o.clientX, T = e.timeStamp, I.test(c.tagName) || e.preventDefault(), e.type) {
        case f:
          n && n.blur(), it.stopAnimateTo(), n = c, i = v = d, l = g, y = T;
          break;

        case u:
          I.test(c.tagName) && t.activeElement !== c && e.preventDefault(), h = d - v, S = T - b, it.setScrollTop(Kt - h, !0), v = d, b = T;
          break;

        default:
        case m:
        case p:
          var a = i - d,
              k = l - g,
              w = k * k + a * a;

          if (49 > w) {
            if (!I.test(n.tagName)) {
              n.focus();
              var x = t.createEvent("MouseEvents");
              x.initMouseEvent("click", !0, !0, e.view, 1, o.screenX, o.screenY, o.clientX, o.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), n.dispatchEvent(x);
            }

            return;
          }

          n = r;
          var E = h / S;
          E = s.max(s.min(E, 3), -3);
          var A = s.abs(E / mt),
              F = E * A + .5 * mt * A * A,
              C = it.getScrollTop() - F,
              D = 0;
          C > Ot ? (D = (Ot - C) / F, C = Ot) : 0 > C && (D = -C / F, C = 0), A *= 1 - D, it.animateTo(0 | C + .5, {
            easing: "outCubic",
            duration: A
          });
      }
    }), e.scrollTo(0, 0), o.style.overflow = a.style.overflow = "hidden";
  },
      j = function j() {
    var e,
        t,
        r,
        n,
        a,
        i,
        l,
        c,
        f,
        u,
        m,
        p = o.clientHeight,
        d = At();

    for (c = 0, f = lt.length; f > c; c++) {
      for (e = lt[c], t = e.element, r = e.anchorTarget, n = e.keyFrames, a = 0, i = n.length; i > a; a++) {
        l = n[a], u = l.offset, m = d[l.constant] || 0, l.frame = u, l.isPercentage && (u *= p, l.frame = u), "relative" === l.mode && (ot(t), l.frame = it.relativeToAbsolute(r, l.anchors[0], l.anchors[1]) - u, ot(t, !0)), l.frame += m, ft && !l.isEnd && l.frame > Ot && (Ot = l.frame);
      }
    }

    for (Ot = s.max(Ot, Ft()), c = 0, f = lt.length; f > c; c++) {
      for (e = lt[c], n = e.keyFrames, a = 0, i = n.length; i > a; a++) {
        l = n[a], m = d[l.constant] || 0, l.isEnd && (l.frame = Ot - l.offset + m);
      }

      e.keyFrames.sort(Nt);
    }
  },
      W = function W(e, t) {
    for (var r = 0, n = lt.length; n > r; r++) {
      var o,
          a,
          s = lt[r],
          c = s.element,
          f = s.smoothScrolling ? e : t,
          u = s.keyFrames,
          m = u.length,
          p = u[0],
          y = u[u.length - 1],
          T = p.frame > f,
          b = f > y.frame,
          S = T ? p : y,
          k = s.emitEvents,
          w = s.lastFrameIndex;

      if (T || b) {
        if (T && -1 === s.edge || b && 1 === s.edge) continue;

        switch (T ? (Dt(c, [g], [h, v]), k && w > -1 && (xt(c, p.eventType, zt), s.lastFrameIndex = -1)) : (Dt(c, [h], [g, v]), k && m > w && (xt(c, y.eventType, zt), s.lastFrameIndex = m)), s.edge = T ? -1 : 1, s.edgeStrategy) {
          case "reset":
            ot(c);
            continue;

          case "ease":
            f = S.frame;
            break;

          default:
          case "set":
            var x = S.props;

            for (o in x) {
              l.call(x, o) && (a = nt(x[o].value), 0 === o.indexOf("@") ? c.setAttribute(o.substr(1), a) : i.setStyle(c, o, a));
            }

            continue;
        }
      } else 0 !== s.edge && (Dt(c, [d, v], [g, h]), s.edge = 0);

      for (var E = 0; m - 1 > E; E++) {
        if (f >= u[E].frame && u[E + 1].frame >= f) {
          var A = u[E],
              F = u[E + 1];

          for (o in A.props) {
            if (l.call(A.props, o)) {
              var C = (f - A.frame) / (F.frame - A.frame);
              C = A.props[o].easing(C), a = rt(A.props[o].value, F.props[o].value, C), a = nt(a), 0 === o.indexOf("@") ? c.setAttribute(o.substr(1), a) : i.setStyle(c, o, a);
            }
          }

          k && w !== E && ("down" === zt ? xt(c, A.eventType, zt) : xt(c, F.eventType, zt), s.lastFrameIndex = E);
          break;
        }
      }
    }
  },
      Z = function Z() {
    _t && (_t = !1, Et());
    var e,
        t,
        n = it.getScrollTop(),
        o = Pt();
    if (pt) o >= pt.endTime ? (n = pt.targetTop, e = pt.done, pt = r) : (t = pt.easing((o - pt.startTime) / pt.duration), n = 0 | pt.startTop + t * pt.topDiff), it.setScrollTop(n, !0);else if (!ht) {
      var a = vt.targetTop - n;
      a && (vt = {
        startTop: qt,
        topDiff: n - qt,
        targetTop: n,
        startTime: Lt,
        endTime: Lt + gt
      }), vt.endTime >= o && (t = U.sqrt((o - vt.startTime) / gt), n = 0 | vt.startTop + t * vt.topDiff);
    }

    if (Gt && st && i.setStyle(st, "transform", "translate(0, " + -Kt + "px) " + Tt), ht || qt !== n) {
      zt = n > qt ? "down" : qt > n ? "up" : zt, ht = !1;
      var l = {
        curTop: n,
        lastTop: qt,
        maxTop: Ot,
        direction: zt
      },
          s = ct.beforerender && ct.beforerender.call(it, l);
      s !== !1 && (W(n, it.getScrollTop()), qt = n, ct.render && ct.render.call(it, l)), e && e.call(it, !1);
    }

    Lt = o;
  },
      J = function J(e) {
    for (var t = 0, r = e.keyFrames.length; r > t; t++) {
      for (var n, o, a, i, l = e.keyFrames[t], s = {}; null !== (i = O.exec(l.props));) {
        a = i[1], o = i[2], n = a.match(V), null !== n ? (a = n[1], n = n[2]) : n = k, o = o.indexOf("!") ? Q(o) : [o.slice(1)], s[a] = {
          value: o,
          easing: U[n]
        };
      }

      l.props = s;
    }
  },
      Q = function Q(e) {
    var t = [];
    return $.lastIndex = 0, e = e.replace($, function (e) {
      return e.replace(L, function (e) {
        return 100 * (e / 255) + "%";
      });
    }), G && (_.lastIndex = 0, e = e.replace(_, function (e) {
      return G + e;
    })), e = e.replace(L, function (e) {
      return t.push(+e), "{?}";
    }), t.unshift(e), t;
  },
      et = function et(e) {
    var t,
        r,
        n = {};

    for (t = 0, r = e.keyFrames.length; r > t; t++) {
      tt(e.keyFrames[t], n);
    }

    for (n = {}, t = e.keyFrames.length - 1; t >= 0; t--) {
      tt(e.keyFrames[t], n);
    }
  },
      tt = function tt(e, t) {
    var r;

    for (r in t) {
      l.call(e.props, r) || (e.props[r] = t[r]);
    }

    for (r in e.props) {
      t[r] = e.props[r];
    }
  },
      rt = function rt(e, t, r) {
    var n,
        o = e.length;
    if (o !== t.length) throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
    var a = [e[0]];

    for (n = 1; o > n; n++) {
      a[n] = e[n] + (t[n] - e[n]) * r;
    }

    return a;
  },
      nt = function nt(e) {
    var t = 1;
    return M.lastIndex = 0, e[0].replace(M, function () {
      return e[t++];
    });
  },
      ot = function ot(e, t) {
    e = [].concat(e);

    for (var r, n, o = 0, a = e.length; a > o; o++) {
      n = e[o], r = lt[n[H]], r && (t ? (n.style.cssText = r.dirtyStyleAttr, Dt(n, r.dirtyClassAttr)) : (r.dirtyStyleAttr = n.style.cssText, r.dirtyClassAttr = Ct(n), n.style.cssText = r.styleAttr, Dt(n, r.classAttr)));
    }
  },
      at = function at() {
    Tt = "translateZ(0)", i.setStyle(st, "transform", Tt);
    var e = c(st),
        t = e.getPropertyValue("transform"),
        r = e.getPropertyValue(G + "transform"),
        n = t && "none" !== t || r && "none" !== r;
    n || (Tt = "");
  };

  i.setStyle = function (e, t, r) {
    var n = e.style;
    if (t = t.replace(z, q).replace("-", ""), "zIndex" === t) n[t] = isNaN(r) ? r : "" + (0 | r);else if ("float" === t) n.styleFloat = n.cssFloat = r;else try {
      B && (n[B + t.slice(0, 1).toUpperCase() + t.slice(1)] = r), n[t] = r;
    } catch (o) {}
  };

  var it,
      lt,
      st,
      ct,
      ft,
      ut,
      mt,
      pt,
      dt,
      gt,
      vt,
      ht,
      yt,
      Tt,
      bt,
      St = i.addEvent = function (t, r, n) {
    var o = function o(t) {
      return t = t || e.event, t.target || (t.target = t.srcElement), t.preventDefault || (t.preventDefault = function () {
        t.returnValue = !1, t.defaultPrevented = !0;
      }), n.call(this, t);
    };

    r = r.split(" ");

    for (var a, i = 0, l = r.length; l > i; i++) {
      a = r[i], t.addEventListener ? t.addEventListener(a, n, !1) : t.attachEvent("on" + a, o), Yt.push({
        element: t,
        name: a,
        listener: n
      });
    }
  },
      kt = i.removeEvent = function (e, t, r) {
    t = t.split(" ");

    for (var n = 0, o = t.length; o > n; n++) {
      e.removeEventListener ? e.removeEventListener(t[n], r, !1) : e.detachEvent("on" + t[n], r);
    }
  },
      wt = function wt() {
    for (var e, t = 0, r = Yt.length; r > t; t++) {
      e = Yt[t], kt(e.element, e.name, e.listener);
    }

    Yt = [];
  },
      xt = function xt(e, t, r) {
    ct.keyframe && ct.keyframe.call(it, e, t, r);
  },
      Et = function Et() {
    var e = it.getScrollTop();
    Ot = 0, ft && !Gt && (a.style.height = ""), j(), ft && !Gt && (a.style.height = Ot + o.clientHeight + "px"), Gt ? it.setScrollTop(s.min(it.getScrollTop(), Ot)) : it.setScrollTop(e, !0), ht = !0;
  },
      At = function At() {
    var e,
        t,
        r = o.clientHeight,
        n = {};

    for (e in ut) {
      t = ut[e], "function" == typeof t ? t = t.call(it) : /p$/.test(t) && (t = t.slice(0, -1) / 100 * r), n[e] = t;
    }

    return n;
  },
      Ft = function Ft() {
    var e = st && st.offsetHeight || 0,
        t = s.max(e, a.scrollHeight, a.offsetHeight, o.scrollHeight, o.offsetHeight, o.clientHeight);
    return t - o.clientHeight;
  },
      Ct = function Ct(t) {
    var r = "className";
    return e.SVGElement && t instanceof e.SVGElement && (t = t[r], r = "baseVal"), t[r];
  },
      Dt = function Dt(t, n, o) {
    var a = "className";
    if (e.SVGElement && t instanceof e.SVGElement && (t = t[a], a = "baseVal"), o === r) return t[a] = n, r;

    for (var i = t[a], l = 0, s = o.length; s > l; l++) {
      i = It(i).replace(It(o[l]), " ");
    }

    i = Ht(i);

    for (var c = 0, f = n.length; f > c; c++) {
      -1 === It(i).indexOf(It(n[c])) && (i += " " + n[c]);
    }

    t[a] = Ht(i);
  },
      Ht = function Ht(e) {
    return e.replace(P, "");
  },
      It = function It(e) {
    return " " + e + " ";
  },
      Pt = Date.now || function () {
    return +new Date();
  },
      Nt = function Nt(e, t) {
    return e.frame - t.frame;
  },
      Ot = 0,
      Vt = 1,
      zt = "down",
      qt = -1,
      Lt = Pt(),
      Mt = 0,
      $t = 0,
      _t = !1,
      Bt = 0,
      Gt = !1,
      Kt = 0,
      Yt = [];

  "function" == typeof define && define.amd ? define("skrollr", function () {
    return i;
  }) : "undefined" != typeof module && module.exports ? module.exports = i : e.skrollr = i;
})(window, document);
/**
 * Swiper 7.3.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 9, 2021
 */


(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Swiper = factory());
})(void 0, function () {
  'use strict';
  /**
   * SSR Window 4.0.1
   * Better handling for window object in SSR environment
   * https://github.com/nolimits4web/ssr-window
   *
   * Copyright 2021, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: October 27, 2021
   */

  /* eslint-disable no-param-reassign */

  function isObject$1(obj) {
    return obj !== null && _typeof2(obj) === 'object' && 'constructor' in obj && obj.constructor === Object;
  }

  function extend$1(target, src) {
    if (target === void 0) {
      target = {};
    }

    if (src === void 0) {
      src = {};
    }

    Object.keys(src).forEach(function (key) {
      if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) {
        extend$1(target[key], src[key]);
      }
    });
  }

  var ssrDocument = {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ''
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS: function createElementNS() {
      return {};
    },
    importNode: function importNode() {
      return null;
    },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: ''
    }
  };

  function getDocument() {
    var doc = typeof document !== 'undefined' ? document : {};
    extend$1(doc, ssrDocument);
    return doc;
  }

  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ''
    },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: ''
    },
    history: {
      replaceState: function replaceState() {},
      pushState: function pushState() {},
      go: function go() {},
      back: function back() {}
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return '';
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {},
    matchMedia: function matchMedia() {
      return {};
    },
    requestAnimationFrame: function requestAnimationFrame(callback) {
      if (typeof setTimeout === 'undefined') {
        callback();
        return null;
      }

      return setTimeout(callback, 0);
    },
    cancelAnimationFrame: function cancelAnimationFrame(id) {
      if (typeof setTimeout === 'undefined') {
        return;
      }

      clearTimeout(id);
    }
  };

  function getWindow() {
    var win = typeof window !== 'undefined' ? window : {};
    extend$1(win, ssrWindow);
    return win;
  }
  /**
   * Dom7 4.0.1
   * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
   * https://framework7.io/docs/dom7.html
   *
   * Copyright 2021, Vladimir Kharlampidi
   *
   * Licensed under MIT
   *
   * Released on: October 27, 2021
   */

  /* eslint-disable no-proto */


  function makeReactive(obj) {
    var proto = obj.__proto__;
    Object.defineProperty(obj, '__proto__', {
      get: function get() {
        return proto;
      },
      set: function set(value) {
        proto.__proto__ = value;
      }
    });
  }

  var Dom7 = /*#__PURE__*/function (_Array) {
    _inherits(Dom7, _Array);

    var _super = _createSuper(Dom7);

    function Dom7(items) {
      var _this10;

      _classCallCheck2(this, Dom7);

      _this10 = _super.call.apply(_super, [this].concat(_toConsumableArray(items || [])));
      makeReactive(_assertThisInitialized(_this10));
      return _this10;
    }

    return _createClass2(Dom7);
  }( /*#__PURE__*/_wrapNativeSuper(Array));

  function arrayFlat(arr) {
    if (arr === void 0) {
      arr = [];
    }

    var res = [];
    arr.forEach(function (el) {
      if (Array.isArray(el)) {
        res.push.apply(res, _toConsumableArray(arrayFlat(el)));
      } else {
        res.push(el);
      }
    });
    return res;
  }

  function arrayFilter(arr, callback) {
    return Array.prototype.filter.call(arr, callback);
  }

  function arrayUnique(arr) {
    var uniqueArray = [];

    for (var i = 0; i < arr.length; i += 1) {
      if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
    }

    return uniqueArray;
  }

  function qsa(selector, context) {
    if (typeof selector !== 'string') {
      return [selector];
    }

    var a = [];
    var res = context.querySelectorAll(selector);

    for (var i = 0; i < res.length; i += 1) {
      a.push(res[i]);
    }

    return a;
  }

  function $(selector, context) {
    var window = getWindow();
    var document = getDocument();
    var arr = [];

    if (!context && selector instanceof Dom7) {
      return selector;
    }

    if (!selector) {
      return new Dom7(arr);
    }

    if (typeof selector === 'string') {
      var _html = selector.trim();

      if (_html.indexOf('<') >= 0 && _html.indexOf('>') >= 0) {
        var toCreate = 'div';
        if (_html.indexOf('<li') === 0) toCreate = 'ul';
        if (_html.indexOf('<tr') === 0) toCreate = 'tbody';
        if (_html.indexOf('<td') === 0 || _html.indexOf('<th') === 0) toCreate = 'tr';
        if (_html.indexOf('<tbody') === 0) toCreate = 'table';
        if (_html.indexOf('<option') === 0) toCreate = 'select';
        var tempParent = document.createElement(toCreate);
        tempParent.innerHTML = _html;

        for (var i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i]);
        }
      } else {
        arr = qsa(selector.trim(), context || document);
      } // arr = qsa(selector, document);

    } else if (selector.nodeType || selector === window || selector === document) {
      arr.push(selector);
    } else if (Array.isArray(selector)) {
      if (selector instanceof Dom7) return selector;
      arr = selector;
    }

    return new Dom7(arrayUnique(arr));
  }

  $.fn = Dom7.prototype; // eslint-disable-next-line

  function addClass() {
    for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
      classes[_key] = arguments[_key];
    }

    var classNames = arrayFlat(classes.map(function (c) {
      return c.split(' ');
    }));
    this.forEach(function (el) {
      var _el$classList;

      (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classNames));
    });
    return this;
  }

  function removeClass() {
    for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      classes[_key2] = arguments[_key2];
    }

    var classNames = arrayFlat(classes.map(function (c) {
      return c.split(' ');
    }));
    this.forEach(function (el) {
      var _el$classList2;

      (_el$classList2 = el.classList).remove.apply(_el$classList2, _toConsumableArray(classNames));
    });
    return this;
  }

  function toggleClass() {
    for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      classes[_key3] = arguments[_key3];
    }

    var classNames = arrayFlat(classes.map(function (c) {
      return c.split(' ');
    }));
    this.forEach(function (el) {
      classNames.forEach(function (className) {
        el.classList.toggle(className);
      });
    });
  }

  function hasClass() {
    for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      classes[_key4] = arguments[_key4];
    }

    var classNames = arrayFlat(classes.map(function (c) {
      return c.split(' ');
    }));
    return arrayFilter(this, function (el) {
      return classNames.filter(function (className) {
        return el.classList.contains(className);
      }).length > 0;
    }).length > 0;
  }

  function attr(attrs, value) {
    if (arguments.length === 1 && typeof attrs === 'string') {
      // Get attr
      if (this[0]) return this[0].getAttribute(attrs);
      return undefined;
    } // Set attrs


    for (var i = 0; i < this.length; i += 1) {
      if (arguments.length === 2) {
        // String
        this[i].setAttribute(attrs, value);
      } else {
        // Object
        for (var attrName in attrs) {
          this[i][attrName] = attrs[attrName];
          this[i].setAttribute(attrName, attrs[attrName]);
        }
      }
    }

    return this;
  }

  function removeAttr(attr) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].removeAttribute(attr);
    }

    return this;
  }

  function transform(transform) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].style.transform = transform;
    }

    return this;
  }

  function transition$1(duration) {
    for (var i = 0; i < this.length; i += 1) {
      this[i].style.transitionDuration = typeof duration !== 'string' ? "".concat(duration, "ms") : duration;
    }

    return this;
  }

  function on() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    var eventType = args[0],
        targetSelector = args[1],
        listener = args[2],
        capture = args[3];

    if (typeof args[1] === 'function') {
      eventType = args[0];
      listener = args[1];
      capture = args[2];
      targetSelector = undefined;
    }

    if (!capture) capture = false;

    function handleLiveEvent(e) {
      var target = e.target;
      if (!target) return;
      var eventData = e.target.dom7EventData || [];

      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }

      if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
        var _parents = $(target).parents(); // eslint-disable-line


        for (var k = 0; k < _parents.length; k += 1) {
          if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
        }
      }
    }

    function handleEvent(e) {
      var eventData = e && e.target ? e.target.dom7EventData || [] : [];

      if (eventData.indexOf(e) < 0) {
        eventData.unshift(e);
      }

      listener.apply(this, eventData);
    }

    var events = eventType.split(' ');
    var j;

    for (var i = 0; i < this.length; i += 1) {
      var el = this[i];

      if (!targetSelector) {
        for (j = 0; j < events.length; j += 1) {
          var event = events[j];
          if (!el.dom7Listeners) el.dom7Listeners = {};
          if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
          el.dom7Listeners[event].push({
            listener: listener,
            proxyListener: handleEvent
          });
          el.addEventListener(event, handleEvent, capture);
        }
      } else {
        // Live events
        for (j = 0; j < events.length; j += 1) {
          var _event = events[j];
          if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
          if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];

          el.dom7LiveListeners[_event].push({
            listener: listener,
            proxyListener: handleLiveEvent
          });

          el.addEventListener(_event, handleLiveEvent, capture);
        }
      }
    }

    return this;
  }

  function off() {
    for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      args[_key6] = arguments[_key6];
    }

    var eventType = args[0],
        targetSelector = args[1],
        listener = args[2],
        capture = args[3];

    if (typeof args[1] === 'function') {
      eventType = args[0];
      listener = args[1];
      capture = args[2];
      targetSelector = undefined;
    }

    if (!capture) capture = false;
    var events = eventType.split(' ');

    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];

      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];
        var handlers = void 0;

        if (!targetSelector && el.dom7Listeners) {
          handlers = el.dom7Listeners[event];
        } else if (targetSelector && el.dom7LiveListeners) {
          handlers = el.dom7LiveListeners[event];
        }

        if (handlers && handlers.length) {
          for (var k = handlers.length - 1; k >= 0; k -= 1) {
            var handler = handlers[k];

            if (listener && handler.listener === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            } else if (!listener) {
              el.removeEventListener(event, handler.proxyListener, capture);
              handlers.splice(k, 1);
            }
          }
        }
      }
    }

    return this;
  }

  function trigger() {
    var window = getWindow();

    for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      args[_key9] = arguments[_key9];
    }

    var events = args[0].split(' ');
    var eventData = args[1];

    for (var i = 0; i < events.length; i += 1) {
      var event = events[i];

      for (var j = 0; j < this.length; j += 1) {
        var el = this[j];

        if (window.CustomEvent) {
          var evt = new window.CustomEvent(event, {
            detail: eventData,
            bubbles: true,
            cancelable: true
          });
          el.dom7EventData = args.filter(function (data, dataIndex) {
            return dataIndex > 0;
          });
          el.dispatchEvent(evt);
          el.dom7EventData = [];
          delete el.dom7EventData;
        }
      }
    }

    return this;
  }

  function transitionEnd$1(callback) {
    var dom = this;

    function fireCallBack(e) {
      if (e.target !== this) return;
      callback.call(this, e);
      dom.off('transitionend', fireCallBack);
    }

    if (callback) {
      dom.on('transitionend', fireCallBack);
    }

    return this;
  }

  function outerWidth(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        var _styles = this.styles();

        return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
      }

      return this[0].offsetWidth;
    }

    return null;
  }

  function outerHeight(includeMargins) {
    if (this.length > 0) {
      if (includeMargins) {
        var _styles2 = this.styles();

        return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
      }

      return this[0].offsetHeight;
    }

    return null;
  }

  function offset() {
    if (this.length > 0) {
      var _window = getWindow();

      var _document = getDocument();

      var el = this[0];
      var box = el.getBoundingClientRect();
      var body = _document.body;
      var clientTop = el.clientTop || body.clientTop || 0;
      var clientLeft = el.clientLeft || body.clientLeft || 0;
      var scrollTop = el === _window ? _window.scrollY : el.scrollTop;
      var scrollLeft = el === _window ? _window.scrollX : el.scrollLeft;
      return {
        top: box.top + scrollTop - clientTop,
        left: box.left + scrollLeft - clientLeft
      };
    }

    return null;
  }

  function styles() {
    var window = getWindow();
    if (this[0]) return window.getComputedStyle(this[0], null);
    return {};
  }

  function css(props, value) {
    var window = getWindow();
    var i;

    if (arguments.length === 1) {
      if (typeof props === 'string') {
        // .css('width')
        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
      } else {
        // .css({ width: '100px' })
        for (i = 0; i < this.length; i += 1) {
          for (var prop in props) {
            this[i].style[prop] = props[prop];
          }
        }

        return this;
      }
    }

    if (arguments.length === 2 && typeof props === 'string') {
      // .css('width', '100px')
      for (i = 0; i < this.length; i += 1) {
        this[i].style[props] = value;
      }

      return this;
    }

    return this;
  }

  function each(callback) {
    if (!callback) return this;
    this.forEach(function (el, index) {
      callback.apply(el, [el, index]);
    });
    return this;
  }

  function filter(callback) {
    var result = arrayFilter(this, callback);
    return $(result);
  }

  function html(html) {
    if (typeof html === 'undefined') {
      return this[0] ? this[0].innerHTML : null;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].innerHTML = html;
    }

    return this;
  }

  function text(text) {
    if (typeof text === 'undefined') {
      return this[0] ? this[0].textContent.trim() : null;
    }

    for (var i = 0; i < this.length; i += 1) {
      this[i].textContent = text;
    }

    return this;
  }

  function is(selector) {
    var window = getWindow();
    var document = getDocument();
    var el = this[0];
    var compareWith;
    var i;
    if (!el || typeof selector === 'undefined') return false;

    if (typeof selector === 'string') {
      if (el.matches) return el.matches(selector);
      if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
      if (el.msMatchesSelector) return el.msMatchesSelector(selector);
      compareWith = $(selector);

      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) return true;
      }

      return false;
    }

    if (selector === document) {
      return el === document;
    }

    if (selector === window) {
      return el === window;
    }

    if (selector.nodeType || selector instanceof Dom7) {
      compareWith = selector.nodeType ? [selector] : selector;

      for (i = 0; i < compareWith.length; i += 1) {
        if (compareWith[i] === el) return true;
      }

      return false;
    }

    return false;
  }

  function index() {
    var child = this[0];
    var i;

    if (child) {
      i = 0; // eslint-disable-next-line

      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1) i += 1;
      }

      return i;
    }

    return undefined;
  }

  function eq(index) {
    if (typeof index === 'undefined') return this;
    var length = this.length;

    if (index > length - 1) {
      return $([]);
    }

    if (index < 0) {
      var returnIndex = length + index;
      if (returnIndex < 0) return $([]);
      return $([this[returnIndex]]);
    }

    return $([this[index]]);
  }

  function append() {
    var newChild;
    var document = getDocument();

    for (var k = 0; k < arguments.length; k += 1) {
      newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

      for (var i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          var tempDiv = document.createElement('div');
          tempDiv.innerHTML = newChild;

          while (tempDiv.firstChild) {
            this[i].appendChild(tempDiv.firstChild);
          }
        } else if (newChild instanceof Dom7) {
          for (var j = 0; j < newChild.length; j += 1) {
            this[i].appendChild(newChild[j]);
          }
        } else {
          this[i].appendChild(newChild);
        }
      }
    }

    return this;
  }

  function prepend(newChild) {
    var document = getDocument();
    var i;
    var j;

    for (i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;

        for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
          this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
        }
      } else if (newChild instanceof Dom7) {
        for (j = 0; j < newChild.length; j += 1) {
          this[i].insertBefore(newChild[j], this[i].childNodes[0]);
        }
      } else {
        this[i].insertBefore(newChild, this[i].childNodes[0]);
      }
    }

    return this;
  }

  function next(selector) {
    if (this.length > 0) {
      if (selector) {
        if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
          return $([this[0].nextElementSibling]);
        }

        return $([]);
      }

      if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
      return $([]);
    }

    return $([]);
  }

  function nextAll(selector) {
    var nextEls = [];
    var el = this[0];
    if (!el) return $([]);

    while (el.nextElementSibling) {
      var _next = el.nextElementSibling; // eslint-disable-line

      if (selector) {
        if ($(_next).is(selector)) nextEls.push(_next);
      } else nextEls.push(_next);

      el = _next;
    }

    return $(nextEls);
  }

  function prev(selector) {
    if (this.length > 0) {
      var el = this[0];

      if (selector) {
        if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
          return $([el.previousElementSibling]);
        }

        return $([]);
      }

      if (el.previousElementSibling) return $([el.previousElementSibling]);
      return $([]);
    }

    return $([]);
  }

  function prevAll(selector) {
    var prevEls = [];
    var el = this[0];
    if (!el) return $([]);

    while (el.previousElementSibling) {
      var _prev = el.previousElementSibling; // eslint-disable-line

      if (selector) {
        if ($(_prev).is(selector)) prevEls.push(_prev);
      } else prevEls.push(_prev);

      el = _prev;
    }

    return $(prevEls);
  }

  function parent(selector) {
    var parents = []; // eslint-disable-line

    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode !== null) {
        if (selector) {
          if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
        } else {
          parents.push(this[i].parentNode);
        }
      }
    }

    return $(parents);
  }

  function parents(selector) {
    var parents = []; // eslint-disable-line

    for (var i = 0; i < this.length; i += 1) {
      var _parent = this[i].parentNode; // eslint-disable-line

      while (_parent) {
        if (selector) {
          if ($(_parent).is(selector)) parents.push(_parent);
        } else {
          parents.push(_parent);
        }

        _parent = _parent.parentNode;
      }
    }

    return $(parents);
  }

  function closest(selector) {
    var closest = this; // eslint-disable-line

    if (typeof selector === 'undefined') {
      return $([]);
    }

    if (!closest.is(selector)) {
      closest = closest.parents(selector).eq(0);
    }

    return closest;
  }

  function find(selector) {
    var foundElements = [];

    for (var i = 0; i < this.length; i += 1) {
      var found = this[i].querySelectorAll(selector);

      for (var j = 0; j < found.length; j += 1) {
        foundElements.push(found[j]);
      }
    }

    return $(foundElements);
  }

  function children(selector) {
    var children = []; // eslint-disable-line

    for (var i = 0; i < this.length; i += 1) {
      var childNodes = this[i].children;

      for (var j = 0; j < childNodes.length; j += 1) {
        if (!selector || $(childNodes[j]).is(selector)) {
          children.push(childNodes[j]);
        }
      }
    }

    return $(children);
  }

  function remove() {
    for (var i = 0; i < this.length; i += 1) {
      if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
    }

    return this;
  }

  var Methods = {
    addClass: addClass,
    removeClass: removeClass,
    hasClass: hasClass,
    toggleClass: toggleClass,
    attr: attr,
    removeAttr: removeAttr,
    transform: transform,
    transition: transition$1,
    on: on,
    off: off,
    trigger: trigger,
    transitionEnd: transitionEnd$1,
    outerWidth: outerWidth,
    outerHeight: outerHeight,
    styles: styles,
    offset: offset,
    css: css,
    each: each,
    html: html,
    text: text,
    is: is,
    index: index,
    eq: eq,
    append: append,
    prepend: prepend,
    next: next,
    nextAll: nextAll,
    prev: prev,
    prevAll: prevAll,
    parent: parent,
    parents: parents,
    closest: closest,
    find: find,
    children: children,
    filter: filter,
    remove: remove
  };
  Object.keys(Methods).forEach(function (methodName) {
    Object.defineProperty($.fn, methodName, {
      value: Methods[methodName],
      writable: true
    });
  });

  function deleteProps(obj) {
    var object = obj;
    Object.keys(object).forEach(function (key) {
      try {
        object[key] = null;
      } catch (e) {// no getter for object
      }

      try {
        delete object[key];
      } catch (e) {// something got wrong
      }
    });
  }

  function nextTick(callback, delay) {
    if (delay === void 0) {
      delay = 0;
    }

    return setTimeout(callback, delay);
  }

  function now() {
    return Date.now();
  }

  function getComputedStyle$1(el) {
    var window = getWindow();
    var style;

    if (window.getComputedStyle) {
      style = window.getComputedStyle(el, null);
    }

    if (!style && el.currentStyle) {
      style = el.currentStyle;
    }

    if (!style) {
      style = el.style;
    }

    return style;
  }

  function getTranslate(el, axis) {
    if (axis === void 0) {
      axis = 'x';
    }

    var window = getWindow();
    var matrix;
    var curTransform;
    var transformMatrix;
    var curStyle = getComputedStyle$1(el);

    if (window.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;

      if (curTransform.split(',').length > 6) {
        curTransform = curTransform.split(', ').map(function (a) {
          return a.replace(',', '.');
        }).join(', ');
      } // Some old versions of Webkit choke when 'none' is passed; pass
      // empty string instead in this case


      transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
      matrix = transformMatrix.toString().split(',');
    }

    if (axis === 'x') {
      // Latest Chrome and webkits Fix
      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
      else curTransform = parseFloat(matrix[4]);
    }

    if (axis === 'y') {
      // Latest Chrome and webkits Fix
      if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
      else curTransform = parseFloat(matrix[5]);
    }

    return curTransform || 0;
  }

  function isObject(o) {
    return _typeof2(o) === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
  }

  function isNode(node) {
    // eslint-disable-next-line
    if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
      return node instanceof HTMLElement;
    }

    return node && (node.nodeType === 1 || node.nodeType === 11);
  }

  function extend() {
    var to = Object(arguments.length <= 0 ? undefined : arguments[0]);
    var noExtend = ['__proto__', 'constructor', 'prototype'];

    for (var i = 1; i < arguments.length; i += 1) {
      var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

      if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
        var keysArray = Object.keys(Object(nextSource)).filter(function (key) {
          return noExtend.indexOf(key) < 0;
        });

        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

          if (desc !== undefined && desc.enumerable) {
            if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend(to[nextKey], nextSource[nextKey]);
              }
            } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
              to[nextKey] = {};

              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend(to[nextKey], nextSource[nextKey]);
              }
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }

    return to;
  }

  function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
  }

  function animateCSSModeScroll(_ref) {
    var swiper = _ref.swiper,
        targetPosition = _ref.targetPosition,
        side = _ref.side;
    var window = getWindow();
    var startPosition = -swiper.translate;
    var startTime = null;
    var time;
    var duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = 'none';
    window.cancelAnimationFrame(swiper.cssModeFrameID);
    var dir = targetPosition > startPosition ? 'next' : 'prev';

    var isOutOfBound = function isOutOfBound(current, target) {
      return dir === 'next' && current >= target || dir === 'prev' && current <= target;
    };

    var animate = function animate() {
      time = new Date().getTime();

      if (startTime === null) {
        startTime = time;
      }

      var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      var easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      var currentPosition = startPosition + easeProgress * (targetPosition - startPosition);

      if (isOutOfBound(currentPosition, targetPosition)) {
        currentPosition = targetPosition;
      }

      swiper.wrapperEl.scrollTo(_defineProperty2({}, side, currentPosition));

      if (isOutOfBound(currentPosition, targetPosition)) {
        swiper.wrapperEl.style.overflow = 'hidden';
        swiper.wrapperEl.style.scrollSnapType = '';
        setTimeout(function () {
          swiper.wrapperEl.style.overflow = '';
          swiper.wrapperEl.scrollTo(_defineProperty2({}, side, currentPosition));
        });
        window.cancelAnimationFrame(swiper.cssModeFrameID);
        return;
      }

      swiper.cssModeFrameID = window.requestAnimationFrame(animate);
    };

    animate();
  }

  var support;

  function calcSupport() {
    var window = getWindow();
    var document = getDocument();
    return {
      smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
      touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
      passiveListener: function checkPassiveListener() {
        var supportsPassive = false;

        try {
          var opts = Object.defineProperty({}, 'passive', {
            // eslint-disable-next-line
            get: function get() {
              supportsPassive = true;
            }
          });
          window.addEventListener('testPassiveListener', null, opts);
        } catch (e) {// No support
        }

        return supportsPassive;
      }(),
      gestures: function checkGestures() {
        return 'ongesturestart' in window;
      }()
    };
  }

  function getSupport() {
    if (!support) {
      support = calcSupport();
    }

    return support;
  }

  var deviceCached;

  function calcDevice(_temp) {
    var _ref3 = _temp === void 0 ? {} : _temp,
        userAgent = _ref3.userAgent;

    var support = getSupport();
    var window = getWindow();
    var platform = window.navigator.platform;
    var ua = userAgent || window.navigator.userAgent;
    var device = {
      ios: false,
      android: false
    };
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;
    var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

    var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    var windows = platform === 'Win32';
    var macos = platform === 'MacIntel'; // iPadOs 13 fix

    var iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

    if (!ipad && macos && support.touch && iPadScreens.indexOf("".concat(screenWidth, "x").concat(screenHeight)) >= 0) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad) ipad = [0, 1, '13_0_0'];
      macos = false;
    } // Android


    if (android && !windows) {
      device.os = 'android';
      device.android = true;
    }

    if (ipad || iphone || ipod) {
      device.os = 'ios';
      device.ios = true;
    } // Export object


    return device;
  }

  function getDevice(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }

    if (!deviceCached) {
      deviceCached = calcDevice(overrides);
    }

    return deviceCached;
  }

  var browser;

  function calcBrowser() {
    var window = getWindow();

    function isSafari() {
      var ua = window.navigator.userAgent.toLowerCase();
      return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
    }

    return {
      isSafari: isSafari(),
      isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
    };
  }

  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }

    return browser;
  }

  function Resize(_ref) {
    var swiper = _ref.swiper,
        on = _ref.on,
        emit = _ref.emit;
    var window = getWindow();
    var observer = null;

    var resizeHandler = function resizeHandler() {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      emit('beforeResize');
      emit('resize');
    };

    var createObserver = function createObserver() {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      observer = new ResizeObserver(function (entries) {
        var width = swiper.width,
            height = swiper.height;
        var newWidth = width;
        var newHeight = height;
        entries.forEach(function (_ref2) {
          var contentBoxSize = _ref2.contentBoxSize,
              contentRect = _ref2.contentRect,
              target = _ref2.target;
          if (target && target !== swiper.el) return;
          newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
          newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
        });

        if (newWidth !== width || newHeight !== height) {
          resizeHandler();
        }
      });
      observer.observe(swiper.el);
    };

    var removeObserver = function removeObserver() {
      if (observer && observer.unobserve && swiper.el) {
        observer.unobserve(swiper.el);
        observer = null;
      }
    };

    var orientationChangeHandler = function orientationChangeHandler() {
      if (!swiper || swiper.destroyed || !swiper.initialized) return;
      emit('orientationchange');
    };

    on('init', function () {
      if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
        createObserver();
        return;
      }

      window.addEventListener('resize', resizeHandler);
      window.addEventListener('orientationchange', orientationChangeHandler);
    });
    on('destroy', function () {
      removeObserver();
      window.removeEventListener('resize', resizeHandler);
      window.removeEventListener('orientationchange', orientationChangeHandler);
    });
  }

  function Observer(_ref) {
    var swiper = _ref.swiper,
        extendParams = _ref.extendParams,
        on = _ref.on,
        emit = _ref.emit;
    var observers = [];
    var window = getWindow();

    var attach = function attach(target, options) {
      if (options === void 0) {
        options = {};
      }

      var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
      var observer = new ObserverFunc(function (mutations) {
        // The observerUpdate event should only be triggered
        // once despite the number of mutations.  Additional
        // triggers are redundant and are very costly
        if (mutations.length === 1) {
          emit('observerUpdate', mutations[0]);
          return;
        }

        var observerUpdate = function observerUpdate() {
          emit('observerUpdate', mutations[0]);
        };

        if (window.requestAnimationFrame) {
          window.requestAnimationFrame(observerUpdate);
        } else {
          window.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
        childList: typeof options.childList === 'undefined' ? true : options.childList,
        characterData: typeof options.characterData === 'undefined' ? true : options.characterData
      });
      observers.push(observer);
    };

    var init = function init() {
      if (!swiper.params.observer) return;

      if (swiper.params.observeParents) {
        var containerParents = swiper.$el.parents();

        for (var i = 0; i < containerParents.length; i += 1) {
          attach(containerParents[i]);
        }
      } // Observe container


      attach(swiper.$el[0], {
        childList: swiper.params.observeSlideChildren
      }); // Observe wrapper

      attach(swiper.$wrapperEl[0], {
        attributes: false
      });
    };

    var destroy = function destroy() {
      observers.forEach(function (observer) {
        observer.disconnect();
      });
      observers.splice(0, observers.length);
    };

    extendParams({
      observer: false,
      observeParents: false,
      observeSlideChildren: false
    });
    on('init', init);
    on('destroy', destroy);
  }
  /* eslint-disable no-underscore-dangle */


  var eventsEmitter = {
    on: function on(events, handler, priority) {
      var self = this;
      if (typeof handler !== 'function') return self;
      var method = priority ? 'unshift' : 'push';
      events.split(' ').forEach(function (event) {
        if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
        self.eventsListeners[event][method](handler);
      });
      return self;
    },
    once: function once(events, handler, priority) {
      var self = this;
      if (typeof handler !== 'function') return self;

      function onceHandler() {
        self.off(events, onceHandler);

        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        handler.apply(self, args);
      }

      onceHandler.__emitterProxy = handler;
      return self.on(events, onceHandler, priority);
    },
    onAny: function onAny(handler, priority) {
      var self = this;
      if (typeof handler !== 'function') return self;
      var method = priority ? 'unshift' : 'push';

      if (self.eventsAnyListeners.indexOf(handler) < 0) {
        self.eventsAnyListeners[method](handler);
      }

      return self;
    },
    offAny: function offAny(handler) {
      var self = this;
      if (!self.eventsAnyListeners) return self;
      var index = self.eventsAnyListeners.indexOf(handler);

      if (index >= 0) {
        self.eventsAnyListeners.splice(index, 1);
      }

      return self;
    },
    off: function off(events, handler) {
      var self = this;
      if (!self.eventsListeners) return self;
      events.split(' ').forEach(function (event) {
        if (typeof handler === 'undefined') {
          self.eventsListeners[event] = [];
        } else if (self.eventsListeners[event]) {
          self.eventsListeners[event].forEach(function (eventHandler, index) {
            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
              self.eventsListeners[event].splice(index, 1);
            }
          });
        }
      });
      return self;
    },
    emit: function emit() {
      var self = this;
      if (!self.eventsListeners) return self;
      var events;
      var data;
      var context;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (typeof args[0] === 'string' || Array.isArray(args[0])) {
        events = args[0];
        data = args.slice(1, args.length);
        context = self;
      } else {
        events = args[0].events;
        data = args[0].data;
        context = args[0].context || self;
      }

      data.unshift(context);
      var eventsArray = Array.isArray(events) ? events : events.split(' ');
      eventsArray.forEach(function (event) {
        if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
          self.eventsAnyListeners.forEach(function (eventHandler) {
            eventHandler.apply(context, [event].concat(_toConsumableArray(data)));
          });
        }

        if (self.eventsListeners && self.eventsListeners[event]) {
          self.eventsListeners[event].forEach(function (eventHandler) {
            eventHandler.apply(context, data);
          });
        }
      });
      return self;
    }
  };

  function updateSize() {
    var swiper = this;
    var width;
    var height;
    var $el = swiper.$el;

    if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
      width = swiper.params.width;
    } else {
      width = $el[0].clientWidth;
    }

    if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
      height = swiper.params.height;
    } else {
      height = $el[0].clientHeight;
    }

    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
      return;
    } // Subtract paddings


    width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
    height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
    if (Number.isNaN(width)) width = 0;
    if (Number.isNaN(height)) height = 0;
    Object.assign(swiper, {
      width: width,
      height: height,
      size: swiper.isHorizontal() ? width : height
    });
  }

  function updateSlides() {
    var swiper = this;

    function getDirectionLabel(property) {
      if (swiper.isHorizontal()) {
        return property;
      } // prettier-ignore


      return {
        'width': 'height',
        'margin-top': 'margin-left',
        'margin-bottom ': 'margin-right',
        'margin-left': 'margin-top',
        'margin-right': 'margin-bottom',
        'padding-left': 'padding-top',
        'padding-right': 'padding-bottom',
        'marginRight': 'marginBottom'
      }[property];
    }

    function getDirectionPropertyValue(node, label) {
      return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
    }

    var params = swiper.params;
    var $wrapperEl = swiper.$wrapperEl,
        swiperSize = swiper.size,
        rtl = swiper.rtlTranslate,
        wrongRTL = swiper.wrongRTL;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    var slides = $wrapperEl.children(".".concat(swiper.params.slideClass));
    var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    var snapGrid = [];
    var slidesGrid = [];
    var slidesSizesGrid = [];
    var offsetBefore = params.slidesOffsetBefore;

    if (typeof offsetBefore === 'function') {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }

    var offsetAfter = params.slidesOffsetAfter;

    if (typeof offsetAfter === 'function') {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }

    var previousSnapGridLength = swiper.snapGrid.length;
    var previousSlidesGridLength = swiper.slidesGrid.length;
    var spaceBetween = params.spaceBetween;
    var slidePosition = -offsetBefore;
    var prevSlideSize = 0;
    var index = 0;

    if (typeof swiperSize === 'undefined') {
      return;
    }

    if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
    }

    swiper.virtualSize = -spaceBetween; // reset margins

    if (rtl) slides.css({
      marginLeft: '',
      marginBottom: '',
      marginTop: ''
    });else slides.css({
      marginRight: '',
      marginBottom: '',
      marginTop: ''
    }); // reset cssMode offsets

    if (params.centeredSlides && params.cssMode) {
      setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', '');
      setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', '');
    }

    var gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;

    if (gridEnabled) {
      swiper.grid.initSlides(slidesLength);
    } // Calc slides


    var slideSize;
    var shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(function (key) {
      return typeof params.breakpoints[key].slidesPerView !== 'undefined';
    }).length > 0;

    for (var i = 0; i < slidesLength; i += 1) {
      slideSize = 0;

      var _slide = slides.eq(i);

      if (gridEnabled) {
        swiper.grid.updateSlide(i, _slide, slidesLength, getDirectionLabel);
      }

      if (_slide.css('display') === 'none') continue; // eslint-disable-line

      if (params.slidesPerView === 'auto') {
        if (shouldResetSlideSize) {
          slides[i].style[getDirectionLabel('width')] = "";
        }

        var slideStyles = getComputedStyle(_slide[0]);
        var currentTransform = _slide[0].style.transform;
        var currentWebKitTransform = _slide[0].style.webkitTransform;

        if (currentTransform) {
          _slide[0].style.transform = 'none';
        }

        if (currentWebKitTransform) {
          _slide[0].style.webkitTransform = 'none';
        }

        if (params.roundLengths) {
          slideSize = swiper.isHorizontal() ? _slide.outerWidth(true) : _slide.outerHeight(true);
        } else {
          // eslint-disable-next-line
          var width = getDirectionPropertyValue(slideStyles, 'width');
          var paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
          var paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
          var marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
          var marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
          var boxSizing = slideStyles.getPropertyValue('box-sizing');

          if (boxSizing && boxSizing === 'border-box') {
            slideSize = width + marginLeft + marginRight;
          } else {
            var _slide$ = _slide[0],
                clientWidth = _slide$.clientWidth,
                offsetWidth = _slide$.offsetWidth;
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        }

        if (currentTransform) {
          _slide[0].style.transform = currentTransform;
        }

        if (currentWebKitTransform) {
          _slide[0].style.webkitTransform = currentWebKitTransform;
        }

        if (params.roundLengths) slideSize = Math.floor(slideSize);
      } else {
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
        if (params.roundLengths) slideSize = Math.floor(slideSize);

        if (slides[i]) {
          slides[i].style[getDirectionLabel('width')] = "".concat(slideSize, "px");
        }
      }

      if (slides[i]) {
        slides[i].swiperSlideSize = slideSize;
      }

      slidesSizesGrid.push(slideSize);

      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths) slidePosition = Math.floor(slidePosition);
        if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }

      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index += 1;
    }

    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;

    if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
      $wrapperEl.css({
        width: "".concat(swiper.virtualSize + params.spaceBetween, "px")
      });
    }

    if (params.setWrapperSize) {
      $wrapperEl.css(_defineProperty2({}, getDirectionLabel('width'), "".concat(swiper.virtualSize + params.spaceBetween, "px")));
    }

    if (gridEnabled) {
      swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
    } // Remove last grid elements depending on width


    if (!params.centeredSlides) {
      var newSlidesGrid = [];

      for (var _i5 = 0; _i5 < snapGrid.length; _i5 += 1) {
        var slidesGridItem = snapGrid[_i5];
        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);

        if (snapGrid[_i5] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem);
        }
      }

      snapGrid = newSlidesGrid;

      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }

    if (snapGrid.length === 0) snapGrid = [0];

    if (params.spaceBetween !== 0) {
      var key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
      slides.filter(function (_, slideIndex) {
        if (!params.cssMode) return true;

        if (slideIndex === slides.length - 1) {
          return false;
        }

        return true;
      }).css(_defineProperty2({}, key, "".concat(spaceBetween, "px")));
    }

    if (params.centeredSlides && params.centeredSlidesBounds) {
      var allSlidesSize = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      allSlidesSize -= params.spaceBetween;
      var maxSnap = allSlidesSize - swiperSize;
      snapGrid = snapGrid.map(function (snap) {
        if (snap < 0) return -offsetBefore;
        if (snap > maxSnap) return maxSnap + offsetAfter;
        return snap;
      });
    }

    if (params.centerInsufficientSlides) {
      var _allSlidesSize = 0;
      slidesSizesGrid.forEach(function (slideSizeValue) {
        _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
      });
      _allSlidesSize -= params.spaceBetween;

      if (_allSlidesSize < swiperSize) {
        var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
        snapGrid.forEach(function (snap, snapIndex) {
          snapGrid[snapIndex] = snap - allSlidesOffset;
        });
        slidesGrid.forEach(function (snap, snapIndex) {
          slidesGrid[snapIndex] = snap + allSlidesOffset;
        });
      }
    }

    Object.assign(swiper, {
      slides: slides,
      snapGrid: snapGrid,
      slidesGrid: slidesGrid,
      slidesSizesGrid: slidesSizesGrid
    });

    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
      setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', "".concat(-snapGrid[0], "px"));
      setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', "".concat(swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2, "px"));
      var addToSnapGrid = -swiper.snapGrid[0];
      var addToSlidesGrid = -swiper.slidesGrid[0];
      swiper.snapGrid = swiper.snapGrid.map(function (v) {
        return v + addToSnapGrid;
      });
      swiper.slidesGrid = swiper.slidesGrid.map(function (v) {
        return v + addToSlidesGrid;
      });
    }

    if (slidesLength !== previousSlidesLength) {
      swiper.emit('slidesLengthChange');
    }

    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow) swiper.checkOverflow();
      swiper.emit('snapGridLengthChange');
    }

    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit('slidesGridLengthChange');
    }

    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
  }

  function updateAutoHeight(speed) {
    var swiper = this;
    var activeSlides = [];
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var newHeight = 0;
    var i;

    if (typeof speed === 'number') {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }

    var getSlideByIndex = function getSlideByIndex(index) {
      if (isVirtual) {
        return swiper.slides.filter(function (el) {
          return parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index;
        })[0];
      }

      return swiper.slides.eq(index)[0];
    }; // Find slides currently in view


    if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
      if (swiper.params.centeredSlides) {
        swiper.visibleSlides.each(function (slide) {
          activeSlides.push(slide);
        });
      } else {
        for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
          var _index = swiper.activeIndex + i;

          if (_index > swiper.slides.length && !isVirtual) break;
          activeSlides.push(getSlideByIndex(_index));
        }
      }
    } else {
      activeSlides.push(getSlideByIndex(swiper.activeIndex));
    } // Find new height from highest slide in view


    for (i = 0; i < activeSlides.length; i += 1) {
      if (typeof activeSlides[i] !== 'undefined') {
        var height = activeSlides[i].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    } // Update Height


    if (newHeight) swiper.$wrapperEl.css('height', "".concat(newHeight, "px"));
  }

  function updateSlidesOffset() {
    var swiper = this;
    var slides = swiper.slides;

    for (var i = 0; i < slides.length; i += 1) {
      slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
    }
  }

  function updateSlidesProgress(translate) {
    if (translate === void 0) {
      translate = this && this.translate || 0;
    }

    var swiper = this;
    var params = swiper.params;
    var slides = swiper.slides,
        rtl = swiper.rtlTranslate,
        snapGrid = swiper.snapGrid;
    if (slides.length === 0) return;
    if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
    var offsetCenter = -translate;
    if (rtl) offsetCenter = translate; // Visible Slides

    slides.removeClass(params.slideVisibleClass);
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];

    for (var i = 0; i < slides.length; i += 1) {
      var _slide2 = slides[i];
      var slideOffset = _slide2.swiperSlideOffset;

      if (params.cssMode && params.centeredSlides) {
        slideOffset -= slides[0].swiperSlideOffset;
      }

      var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (_slide2.swiperSlideSize + params.spaceBetween);
      var originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (_slide2.swiperSlideSize + params.spaceBetween);
      var slideBefore = -(offsetCenter - slideOffset);
      var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

      if (isVisible) {
        swiper.visibleSlides.push(_slide2);
        swiper.visibleSlidesIndexes.push(i);
        slides.eq(i).addClass(params.slideVisibleClass);
      }

      _slide2.progress = rtl ? -slideProgress : slideProgress;
      _slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }

    swiper.visibleSlides = $(swiper.visibleSlides);
  }

  function updateProgress(translate) {
    var swiper = this;

    if (typeof translate === 'undefined') {
      var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

      translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }

    var params = swiper.params;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    var progress = swiper.progress,
        isBeginning = swiper.isBeginning,
        isEnd = swiper.isEnd;
    var wasBeginning = isBeginning;
    var wasEnd = isEnd;

    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate - swiper.minTranslate()) / translatesDiff;
      isBeginning = progress <= 0;
      isEnd = progress >= 1;
    }

    Object.assign(swiper, {
      progress: progress,
      isBeginning: isBeginning,
      isEnd: isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

    if (isBeginning && !wasBeginning) {
      swiper.emit('reachBeginning toEdge');
    }

    if (isEnd && !wasEnd) {
      swiper.emit('reachEnd toEdge');
    }

    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      swiper.emit('fromEdge');
    }

    swiper.emit('progress', progress);
  }

  function updateSlidesClasses() {
    var swiper = this;
    var slides = swiper.slides,
        params = swiper.params,
        $wrapperEl = swiper.$wrapperEl,
        activeIndex = swiper.activeIndex,
        realIndex = swiper.realIndex;
    var isVirtual = swiper.virtual && params.virtual.enabled;
    slides.removeClass("".concat(params.slideActiveClass, " ").concat(params.slideNextClass, " ").concat(params.slidePrevClass, " ").concat(params.slideDuplicateActiveClass, " ").concat(params.slideDuplicateNextClass, " ").concat(params.slideDuplicatePrevClass));
    var activeSlide;

    if (isVirtual) {
      activeSlide = swiper.$wrapperEl.find(".".concat(params.slideClass, "[data-swiper-slide-index=\"").concat(activeIndex, "\"]"));
    } else {
      activeSlide = slides.eq(activeIndex);
    } // Active classes


    activeSlide.addClass(params.slideActiveClass);

    if (params.loop) {
      // Duplicate to all looped slides
      if (activeSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children(".".concat(params.slideClass, ":not(.").concat(params.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(realIndex, "\"]")).addClass(params.slideDuplicateActiveClass);
      } else {
        $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(realIndex, "\"]")).addClass(params.slideDuplicateActiveClass);
      }
    } // Next Slide


    var nextSlide = activeSlide.nextAll(".".concat(params.slideClass)).eq(0).addClass(params.slideNextClass);

    if (params.loop && nextSlide.length === 0) {
      nextSlide = slides.eq(0);
      nextSlide.addClass(params.slideNextClass);
    } // Prev Slide


    var prevSlide = activeSlide.prevAll(".".concat(params.slideClass)).eq(0).addClass(params.slidePrevClass);

    if (params.loop && prevSlide.length === 0) {
      prevSlide = slides.eq(-1);
      prevSlide.addClass(params.slidePrevClass);
    }

    if (params.loop) {
      // Duplicate to all looped slides
      if (nextSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children(".".concat(params.slideClass, ":not(.").concat(params.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(nextSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicateNextClass);
      } else {
        $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(nextSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicateNextClass);
      }

      if (prevSlide.hasClass(params.slideDuplicateClass)) {
        $wrapperEl.children(".".concat(params.slideClass, ":not(.").concat(params.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(prevSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicatePrevClass);
      } else {
        $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(prevSlide.attr('data-swiper-slide-index'), "\"]")).addClass(params.slideDuplicatePrevClass);
      }
    }

    swiper.emitSlidesClasses();
  }

  function updateActiveIndex(newActiveIndex) {
    var swiper = this;
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    var slidesGrid = swiper.slidesGrid,
        snapGrid = swiper.snapGrid,
        params = swiper.params,
        previousIndex = swiper.activeIndex,
        previousRealIndex = swiper.realIndex,
        previousSnapIndex = swiper.snapIndex;
    var activeIndex = newActiveIndex;
    var snapIndex;

    if (typeof activeIndex === 'undefined') {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        if (typeof slidesGrid[i + 1] !== 'undefined') {
          if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
            activeIndex = i;
          } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
            activeIndex = i + 1;
          }
        } else if (translate >= slidesGrid[i]) {
          activeIndex = i;
        }
      } // Normalize slideIndex


      if (params.normalizeSlideIndex) {
        if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
      }
    }

    if (snapGrid.indexOf(translate) >= 0) {
      snapIndex = snapGrid.indexOf(translate);
    } else {
      var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }

    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

    if (activeIndex === previousIndex) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit('snapIndexChange');
      }

      return;
    } // Get real index


    var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
    Object.assign(swiper, {
      snapIndex: snapIndex,
      realIndex: realIndex,
      previousIndex: previousIndex,
      activeIndex: activeIndex
    });
    swiper.emit('activeIndexChange');
    swiper.emit('snapIndexChange');

    if (previousRealIndex !== realIndex) {
      swiper.emit('realIndexChange');
    }

    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      swiper.emit('slideChange');
    }
  }

  function updateClickedSlide(e) {
    var swiper = this;
    var params = swiper.params;
    var slide = $(e).closest(".".concat(params.slideClass))[0];
    var slideFound = false;
    var slideIndex;

    if (slide) {
      for (var i = 0; i < swiper.slides.length; i += 1) {
        if (swiper.slides[i] === slide) {
          slideFound = true;
          slideIndex = i;
          break;
        }
      }
    }

    if (slide && slideFound) {
      swiper.clickedSlide = slide;

      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
      } else {
        swiper.clickedIndex = slideIndex;
      }
    } else {
      swiper.clickedSlide = undefined;
      swiper.clickedIndex = undefined;
      return;
    }

    if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }

  var update = {
    updateSize: updateSize,
    updateSlides: updateSlides,
    updateAutoHeight: updateAutoHeight,
    updateSlidesOffset: updateSlidesOffset,
    updateSlidesProgress: updateSlidesProgress,
    updateProgress: updateProgress,
    updateSlidesClasses: updateSlidesClasses,
    updateActiveIndex: updateActiveIndex,
    updateClickedSlide: updateClickedSlide
  };

  function getSwiperTranslate(axis) {
    if (axis === void 0) {
      axis = this.isHorizontal() ? 'x' : 'y';
    }

    var swiper = this;
    var params = swiper.params,
        rtl = swiper.rtlTranslate,
        translate = swiper.translate,
        $wrapperEl = swiper.$wrapperEl;

    if (params.virtualTranslate) {
      return rtl ? -translate : translate;
    }

    if (params.cssMode) {
      return translate;
    }

    var currentTranslate = getTranslate($wrapperEl[0], axis);
    if (rtl) currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }

  function setTranslate(translate, byController) {
    var swiper = this;
    var rtl = swiper.rtlTranslate,
        params = swiper.params,
        $wrapperEl = swiper.$wrapperEl,
        wrapperEl = swiper.wrapperEl,
        progress = swiper.progress;
    var x = 0;
    var y = 0;
    var z = 0;

    if (swiper.isHorizontal()) {
      x = rtl ? -translate : translate;
    } else {
      y = translate;
    }

    if (params.roundLengths) {
      x = Math.floor(x);
      y = Math.floor(y);
    }

    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
    } else if (!params.virtualTranslate) {
      $wrapperEl.transform("translate3d(".concat(x, "px, ").concat(y, "px, ").concat(z, "px)"));
    }

    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate - swiper.minTranslate()) / translatesDiff;
    }

    if (newProgress !== progress) {
      swiper.updateProgress(translate);
    }

    swiper.emit('setTranslate', swiper.translate, byController);
  }

  function minTranslate() {
    return -this.snapGrid[0];
  }

  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }

  function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
    if (translate === void 0) {
      translate = 0;
    }

    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    if (translateBounds === void 0) {
      translateBounds = true;
    }

    var swiper = this;
    var params = swiper.params,
        wrapperEl = swiper.wrapperEl;

    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }

    var minTranslate = swiper.minTranslate();
    var maxTranslate = swiper.maxTranslate();
    var newTranslate;
    if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

    swiper.updateProgress(newTranslate);

    if (params.cssMode) {
      var isH = swiper.isHorizontal();

      if (speed === 0) {
        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
      } else {
        var _wrapperEl$scrollTo;

        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper: swiper,
            targetPosition: -newTranslate,
            side: isH ? 'left' : 'top'
          });
          return true;
        }

        wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _defineProperty2(_wrapperEl$scrollTo, isH ? 'left' : 'top', -newTranslate), _defineProperty2(_wrapperEl$scrollTo, "behavior", 'smooth'), _wrapperEl$scrollTo));
      }

      return true;
    }

    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);

      if (runCallbacks) {
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.emit('transitionEnd');
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);

      if (runCallbacks) {
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.emit('transitionStart');
      }

      if (!swiper.animating) {
        swiper.animating = true;

        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;

            if (runCallbacks) {
              swiper.emit('transitionEnd');
            }
          };
        }

        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
      }
    }

    return true;
  }

  var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate: setTranslate,
    minTranslate: minTranslate,
    maxTranslate: maxTranslate,
    translateTo: translateTo
  };

  function setTransition(duration, byController) {
    var swiper = this;

    if (!swiper.params.cssMode) {
      swiper.$wrapperEl.transition(duration);
    }

    swiper.emit('setTransition', duration, byController);
  }

  function transitionEmit(_ref) {
    var swiper = _ref.swiper,
        runCallbacks = _ref.runCallbacks,
        direction = _ref.direction,
        step = _ref.step;
    var activeIndex = swiper.activeIndex,
        previousIndex = swiper.previousIndex;
    var dir = direction;

    if (!dir) {
      if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
    }

    swiper.emit("transition".concat(step));

    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === 'reset') {
        swiper.emit("slideResetTransition".concat(step));
        return;
      }

      swiper.emit("slideChangeTransition".concat(step));

      if (dir === 'next') {
        swiper.emit("slideNextTransition".concat(step));
      } else {
        swiper.emit("slidePrevTransition".concat(step));
      }
    }
  }

  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    var swiper = this;
    var params = swiper.params;
    if (params.cssMode) return;

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }

    transitionEmit({
      swiper: swiper,
      runCallbacks: runCallbacks,
      direction: direction,
      step: 'Start'
    });
  }

  function transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    var swiper = this;
    var params = swiper.params;
    swiper.animating = false;
    if (params.cssMode) return;
    swiper.setTransition(0);
    transitionEmit({
      swiper: swiper,
      runCallbacks: runCallbacks,
      direction: direction,
      step: 'End'
    });
  }

  var transition = {
    setTransition: setTransition,
    transitionStart: transitionStart,
    transitionEnd: transitionEnd
  };

  function slideTo(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) {
      index = 0;
    }

    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    if (typeof index !== 'number' && typeof index !== 'string') {
      throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [".concat(_typeof2(index), "] given."));
    }

    if (typeof index === 'string') {
      /**
       * The `index` argument converted from `string` to `number`.
       * @type {number}
       */
      var indexAsNumber = parseInt(index, 10);
      /**
       * Determines whether the `index` argument is a valid `number`
       * after being converted from the `string` type.
       * @type {boolean}
       */

      var isValidNumber = isFinite(indexAsNumber);

      if (!isValidNumber) {
        throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(index, "] given."));
      } // Knowing that the converted `index` is a valid number,
      // we can update the original argument's value.


      index = indexAsNumber;
    }

    var swiper = this;
    var slideIndex = index;
    if (slideIndex < 0) slideIndex = 0;
    var params = swiper.params,
        snapGrid = swiper.snapGrid,
        slidesGrid = swiper.slidesGrid,
        previousIndex = swiper.previousIndex,
        activeIndex = swiper.activeIndex,
        rtl = swiper.rtlTranslate,
        wrapperEl = swiper.wrapperEl,
        enabled = swiper.enabled;

    if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
      return false;
    }

    var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

    if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
      swiper.emit('beforeSlideChangeStart');
    }

    var translate = -snapGrid[snapIndex]; // Update progress

    swiper.updateProgress(translate); // Normalize slideIndex

    if (params.normalizeSlideIndex) {
      for (var i = 0; i < slidesGrid.length; i += 1) {
        var normalizedTranslate = -Math.floor(translate * 100);
        var normalizedGrid = Math.floor(slidesGrid[i] * 100);
        var normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

        if (typeof slidesGrid[i + 1] !== 'undefined') {
          if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
            slideIndex = i;
          } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
            slideIndex = i + 1;
          }
        } else if (normalizedTranslate >= normalizedGrid) {
          slideIndex = i;
        }
      }
    } // Directions locks


    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
        return false;
      }

      if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) return false;
      }
    }

    var direction;
    if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

    if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
      swiper.updateActiveIndex(slideIndex); // Update Height

      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }

      swiper.updateSlidesClasses();

      if (params.effect !== 'slide') {
        swiper.setTranslate(translate);
      }

      if (direction !== 'reset') {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }

      return false;
    }

    if (params.cssMode) {
      var isH = swiper.isHorizontal();
      var t = rtl ? translate : -translate;

      if (speed === 0) {
        var isVirtual = swiper.virtual && swiper.params.virtual.enabled;

        if (isVirtual) {
          swiper.wrapperEl.style.scrollSnapType = 'none';
          swiper._immediateVirtual = true;
        }

        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;

        if (isVirtual) {
          requestAnimationFrame(function () {
            swiper.wrapperEl.style.scrollSnapType = '';
            swiper._swiperImmediateVirtual = false;
          });
        }
      } else {
        var _wrapperEl$scrollTo2;

        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper: swiper,
            targetPosition: t,
            side: isH ? 'left' : 'top'
          });
          return true;
        }

        wrapperEl.scrollTo((_wrapperEl$scrollTo2 = {}, _defineProperty2(_wrapperEl$scrollTo2, isH ? 'left' : 'top', t), _defineProperty2(_wrapperEl$scrollTo2, "behavior", 'smooth'), _wrapperEl$scrollTo2));
      }

      return true;
    }

    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);
      swiper.transitionEnd(runCallbacks, direction);
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);

      if (!swiper.animating) {
        swiper.animating = true;

        if (!swiper.onSlideToWrapperTransitionEnd) {
          swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
          };
        }

        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
      }
    }

    return true;
  }

  function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) {
      index = 0;
    }

    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    var swiper = this;
    var newIndex = index;

    if (swiper.params.loop) {
      newIndex += swiper.loopedSlides;
    }

    return swiper.slideTo(newIndex, speed, runCallbacks, internal);
  }
  /* eslint no-unused-vars: "off" */


  function slideNext(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    var swiper = this;
    var animating = swiper.animating,
        enabled = swiper.enabled,
        params = swiper.params;
    if (!enabled) return swiper;
    var perGroup = params.slidesPerGroup;

    if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
    }

    var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;

    if (params.loop) {
      if (animating && params.loopPreventsSlide) return false;
      swiper.loopFix(); // eslint-disable-next-line

      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }

    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
  }
  /* eslint no-unused-vars: "off" */


  function slidePrev(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    var swiper = this;
    var params = swiper.params,
        animating = swiper.animating,
        snapGrid = swiper.snapGrid,
        slidesGrid = swiper.slidesGrid,
        rtlTranslate = swiper.rtlTranslate,
        enabled = swiper.enabled;
    if (!enabled) return swiper;

    if (params.loop) {
      if (animating && params.loopPreventsSlide) return false;
      swiper.loopFix(); // eslint-disable-next-line

      swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    }

    var translate = rtlTranslate ? swiper.translate : -swiper.translate;

    function normalize(val) {
      if (val < 0) return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }

    var normalizedTranslate = normalize(translate);
    var normalizedSnapGrid = snapGrid.map(function (val) {
      return normalize(val);
    });
    var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

    if (typeof prevSnap === 'undefined' && params.cssMode) {
      var prevSnapIndex;
      snapGrid.forEach(function (snap, snapIndex) {
        if (normalizedTranslate >= snap) {
          // prevSnap = snap;
          prevSnapIndex = snapIndex;
        }
      });

      if (typeof prevSnapIndex !== 'undefined') {
        prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
      }
    }

    var prevIndex = 0;

    if (typeof prevSnap !== 'undefined') {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;

      if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
        prevIndex = Math.max(prevIndex, 0);
      }
    }

    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }
  /* eslint no-unused-vars: "off" */


  function slideReset(speed, runCallbacks, internal) {
    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    var swiper = this;
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }
  /* eslint no-unused-vars: "off" */


  function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (speed === void 0) {
      speed = this.params.speed;
    }

    if (runCallbacks === void 0) {
      runCallbacks = true;
    }

    if (threshold === void 0) {
      threshold = 0.5;
    }

    var swiper = this;
    var index = swiper.activeIndex;
    var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

    if (translate >= swiper.snapGrid[snapIndex]) {
      // The current translate is on or after the current snap index, so the choice
      // is between the current index and the one after it.
      var currentSnap = swiper.snapGrid[snapIndex];
      var nextSnap = swiper.snapGrid[snapIndex + 1];

      if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
        index += swiper.params.slidesPerGroup;
      }
    } else {
      // The current translate is before the current snap index, so the choice
      // is between the current index and the one before it.
      var prevSnap = swiper.snapGrid[snapIndex - 1];
      var _currentSnap = swiper.snapGrid[snapIndex];

      if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
        index -= swiper.params.slidesPerGroup;
      }
    }

    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
  }

  function slideToClickedSlide() {
    var swiper = this;
    var params = swiper.params,
        $wrapperEl = swiper.$wrapperEl;
    var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    var slideToIndex = swiper.clickedIndex;
    var realIndex;

    if (params.loop) {
      if (swiper.animating) return;
      realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

      if (params.centeredSlides) {
        if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
          swiper.loopFix();
          slideToIndex = $wrapperEl.children(".".concat(params.slideClass, "[data-swiper-slide-index=\"").concat(realIndex, "\"]:not(.").concat(params.slideDuplicateClass, ")")).eq(0).index();
          nextTick(function () {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = $wrapperEl.children(".".concat(params.slideClass, "[data-swiper-slide-index=\"").concat(realIndex, "\"]:not(.").concat(params.slideDuplicateClass, ")")).eq(0).index();
        nextTick(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }

  var slide = {
    slideTo: slideTo,
    slideToLoop: slideToLoop,
    slideNext: slideNext,
    slidePrev: slidePrev,
    slideReset: slideReset,
    slideToClosest: slideToClosest,
    slideToClickedSlide: slideToClickedSlide
  };

  function loopCreate() {
    var swiper = this;
    var document = getDocument();
    var params = swiper.params,
        $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

    var $selector = $wrapperEl.children().length > 0 ? $($wrapperEl.children()[0].parentNode) : $wrapperEl;
    $selector.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass)).remove();
    var slides = $selector.children(".".concat(params.slideClass));

    if (params.loopFillGroupWithBlank) {
      var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

      if (blankSlidesNum !== params.slidesPerGroup) {
        for (var i = 0; i < blankSlidesNum; i += 1) {
          var blankNode = $(document.createElement('div')).addClass("".concat(params.slideClass, " ").concat(params.slideBlankClass));
          $selector.append(blankNode);
        }

        slides = $selector.children(".".concat(params.slideClass));
      }
    }

    if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
    swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
    swiper.loopedSlides += params.loopAdditionalSlides;

    if (swiper.loopedSlides > slides.length) {
      swiper.loopedSlides = slides.length;
    }

    var prependSlides = [];
    var appendSlides = [];
    slides.each(function (el, index) {
      var slide = $(el);

      if (index < swiper.loopedSlides) {
        appendSlides.push(el);
      }

      if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
        prependSlides.push(el);
      }

      slide.attr('data-swiper-slide-index', index);
    });

    for (var _i6 = 0; _i6 < appendSlides.length; _i6 += 1) {
      $selector.append($(appendSlides[_i6].cloneNode(true)).addClass(params.slideDuplicateClass));
    }

    for (var _i7 = prependSlides.length - 1; _i7 >= 0; _i7 -= 1) {
      $selector.prepend($(prependSlides[_i7].cloneNode(true)).addClass(params.slideDuplicateClass));
    }
  }

  function loopFix() {
    var swiper = this;
    swiper.emit('beforeLoopFix');
    var activeIndex = swiper.activeIndex,
        slides = swiper.slides,
        loopedSlides = swiper.loopedSlides,
        allowSlidePrev = swiper.allowSlidePrev,
        allowSlideNext = swiper.allowSlideNext,
        snapGrid = swiper.snapGrid,
        rtl = swiper.rtlTranslate;
    var newIndex;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    var snapTranslate = -snapGrid[activeIndex];
    var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

    if (activeIndex < loopedSlides) {
      newIndex = slides.length - loopedSlides * 3 + activeIndex;
      newIndex += loopedSlides;
      var slideChanged = swiper.slideTo(newIndex, 0, false, true);

      if (slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    } else if (activeIndex >= slides.length - loopedSlides) {
      // Fix For Positive Oversliding
      newIndex = -slides.length + activeIndex + loopedSlides;
      newIndex += loopedSlides;

      var _slideChanged = swiper.slideTo(newIndex, 0, false, true);

      if (_slideChanged && diff !== 0) {
        swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
      }
    }

    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    swiper.emit('loopFix');
  }

  function loopDestroy() {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl,
        params = swiper.params,
        slides = swiper.slides;
    $wrapperEl.children(".".concat(params.slideClass, ".").concat(params.slideDuplicateClass, ",.").concat(params.slideClass, ".").concat(params.slideBlankClass)).remove();
    slides.removeAttr('data-swiper-slide-index');
  }

  var loop = {
    loopCreate: loopCreate,
    loopFix: loopFix,
    loopDestroy: loopDestroy
  };

  function setGrabCursor(moving) {
    var swiper = this;
    if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
    var el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
    el.style.cursor = 'move';
    el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
    el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
    el.style.cursor = moving ? 'grabbing' : 'grab';
  }

  function unsetGrabCursor() {
    var swiper = this;

    if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
      return;
    }

    swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
  }

  var grabCursor = {
    setGrabCursor: setGrabCursor,
    unsetGrabCursor: unsetGrabCursor
  };

  function closestElement(selector, base) {
    if (base === void 0) {
      base = this;
    }

    function __closestFrom(el) {
      if (!el || el === getDocument() || el === getWindow()) return null;
      if (el.assignedSlot) el = el.assignedSlot;
      var found = el.closest(selector);
      return found || __closestFrom(el.getRootNode().host);
    }

    return __closestFrom(base);
  }

  function onTouchStart(event) {
    var swiper = this;
    var document = getDocument();
    var window = getWindow();
    var data = swiper.touchEventsData;
    var params = swiper.params,
        touches = swiper.touches,
        enabled = swiper.enabled;
    if (!enabled) return;

    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }

    if (!swiper.animating && params.cssMode && params.loop) {
      swiper.loopFix();
    }

    var e = event;
    if (e.originalEvent) e = e.originalEvent;
    var $targetEl = $(e.target);

    if (params.touchEventsTarget === 'wrapper') {
      if (!$targetEl.closest(swiper.wrapperEl).length) return;
    }

    data.isTouchEvent = e.type === 'touchstart';
    if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
    if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
    if (data.isTouched && data.isMoved) return; // change target el for shadow root component

    var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

    if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
      $targetEl = $(event.path[0]);
    }

    var noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : ".".concat(params.noSwipingClass);
    var isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element

    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, e.target) : $targetEl.closest(noSwipingSelector)[0])) {
      swiper.allowClick = true;
      return;
    }

    if (params.swipeHandler) {
      if (!$targetEl.closest(params.swipeHandler)[0]) return;
    }

    touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
    var startX = touches.currentX;
    var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

    var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
    var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
      if (edgeSwipeDetection === 'prevent') {
        event.preventDefault();
      } else {
        return;
      }
    }

    Object.assign(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: undefined,
      startMoving: undefined
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = undefined;
    if (params.threshold > 0) data.allowThresholdMove = false;

    if (e.type !== 'touchstart') {
      var preventDefault = true;
      if ($targetEl.is(data.focusableElements)) preventDefault = false;

      if (document.activeElement && $(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
        document.activeElement.blur();
      }

      var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

      if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
        e.preventDefault();
      }
    }

    swiper.emit('touchStart', e);
  }

  function onTouchMove(event) {
    var document = getDocument();
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params,
        touches = swiper.touches,
        rtl = swiper.rtlTranslate,
        enabled = swiper.enabled;
    if (!enabled) return;
    var e = event;
    if (e.originalEvent) e = e.originalEvent;

    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }

      return;
    }

    if (data.isTouchEvent && e.type !== 'touchmove') return;
    var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
    var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
    var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

    if (e.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }

    if (!swiper.allowTouchMove) {
      // isMoved = true;
      swiper.allowClick = false;

      if (data.isTouched) {
        Object.assign(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY
        });
        data.touchStartTime = now();
      }

      return;
    }

    if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        // Vertical
        if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
        return;
      }
    }

    if (data.isTouchEvent && document.activeElement) {
      if (e.target === document.activeElement && $(e.target).is(data.focusableElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }

    if (data.allowTouchCallbacks) {
      swiper.emit('touchMove', e);
    }

    if (e.targetTouches && e.targetTouches.length > 1) return;
    touches.currentX = pageX;
    touches.currentY = pageY;
    var diffX = touches.currentX - touches.startX;
    var diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;

    if (typeof data.isScrolling === 'undefined') {
      var touchAngle;

      if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
        data.isScrolling = false;
      } else {
        // eslint-disable-next-line
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
      }
    }

    if (data.isScrolling) {
      swiper.emit('touchMoveOpposite', e);
    }

    if (typeof data.startMoving === 'undefined') {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }

    if (data.isScrolling) {
      data.isTouched = false;
      return;
    }

    if (!data.startMoving) {
      return;
    }

    swiper.allowClick = false;

    if (!params.cssMode && e.cancelable) {
      e.preventDefault();
    }

    if (params.touchMoveStopPropagation && !params.nested) {
      e.stopPropagation();
    }

    if (!data.isMoved) {
      if (params.loop && !params.cssMode) {
        swiper.loopFix();
      }

      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);

      if (swiper.animating) {
        swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
      }

      data.allowMomentumBounce = false; // Grab Cursor

      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }

      swiper.emit('sliderFirstMove', e);
    }

    swiper.emit('sliderMove', e);
    data.isMoved = true;
    var diff = swiper.isHorizontal() ? diffX : diffY;
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) diff = -diff;
    swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
    data.currentTranslate = diff + data.startTranslate;
    var disableParentSwiper = true;
    var resistanceRatio = params.resistanceRatio;

    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }

    if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
    } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
      disableParentSwiper = false;
      if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
    }

    if (disableParentSwiper) {
      e.preventedByNestedSwiper = true;
    } // Directions locks


    if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }

    if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }

    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
      data.currentTranslate = data.startTranslate;
    } // Threshold


    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }

    if (!params.followFinger || params.cssMode) return; // Update active index in free mode

    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }

    if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
      swiper.freeMode.onTouchMove();
    } // Update progress


    swiper.updateProgress(data.currentTranslate); // Update translate

    swiper.setTranslate(data.currentTranslate);
  }

  function onTouchEnd(event) {
    var swiper = this;
    var data = swiper.touchEventsData;
    var params = swiper.params,
        touches = swiper.touches,
        rtl = swiper.rtlTranslate,
        slidesGrid = swiper.slidesGrid,
        enabled = swiper.enabled;
    if (!enabled) return;
    var e = event;
    if (e.originalEvent) e = e.originalEvent;

    if (data.allowTouchCallbacks) {
      swiper.emit('touchEnd', e);
    }

    data.allowTouchCallbacks = false;

    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }

      data.isMoved = false;
      data.startMoving = false;
      return;
    } // Return Grab Cursor


    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    } // Time diff


    var touchEndTime = now();
    var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

    if (swiper.allowClick) {
      var pathTree = e.path || e.composedPath && e.composedPath();
      swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
      swiper.emit('tap click', e);

      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper.emit('doubleTap doubleClick', e);
      }
    }

    data.lastClickTime = now();
    nextTick(function () {
      if (!swiper.destroyed) swiper.allowClick = true;
    });

    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }

    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    var currentPos;

    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }

    if (params.cssMode) {
      return;
    }

    if (swiper.params.freeMode && params.freeMode.enabled) {
      swiper.freeMode.onTouchEnd({
        currentPos: currentPos
      });
      return;
    } // Find current slide


    var stopIndex = 0;
    var groupSize = swiper.slidesSizesGrid[0];

    for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
      var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

      if (typeof slidesGrid[i + _increment] !== 'undefined') {
        if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
          stopIndex = i;
          groupSize = slidesGrid[i + _increment] - slidesGrid[i];
        }
      } else if (currentPos >= slidesGrid[i]) {
        stopIndex = i;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    } // Find current slide size


    var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

    if (timeDiff > params.longSwipesMs) {
      // Long touches
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }

      if (swiper.swipeDirection === 'next') {
        if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
      }

      if (swiper.swipeDirection === 'prev') {
        if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
      }
    } else {
      // Short swipes
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }

      var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === 'next') {
          swiper.slideTo(stopIndex + increment);
        }

        if (swiper.swipeDirection === 'prev') {
          swiper.slideTo(stopIndex);
        }
      } else if (e.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }

  function onResize() {
    var swiper = this;
    var params = swiper.params,
        el = swiper.el;
    if (el && el.offsetWidth === 0) return; // Breakpoints

    if (params.breakpoints) {
      swiper.setBreakpoint();
    } // Save locks


    var allowSlideNext = swiper.allowSlideNext,
        allowSlidePrev = swiper.allowSlidePrev,
        snapGrid = swiper.snapGrid; // Disable locks on resize

    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();

    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }

    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      swiper.autoplay.run();
    } // Return locks after resize


    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;

    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }

  function onClick(e) {
    var swiper = this;
    if (!swiper.enabled) return;

    if (!swiper.allowClick) {
      if (swiper.params.preventClicks) e.preventDefault();

      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
  }

  function onScroll() {
    var swiper = this;
    var wrapperEl = swiper.wrapperEl,
        rtlTranslate = swiper.rtlTranslate,
        enabled = swiper.enabled;
    if (!enabled) return;
    swiper.previousTranslate = swiper.translate;

    if (swiper.isHorizontal()) {
      swiper.translate = -wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    } // eslint-disable-next-line


    if (swiper.translate === -0) swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    var newProgress;
    var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }

    if (newProgress !== swiper.progress) {
      swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    }

    swiper.emit('setTranslate', swiper.translate, false);
  }

  var dummyEventAttached = false;

  function dummyEventListener() {}

  var events = function events(swiper, method) {
    var document = getDocument();
    var params = swiper.params,
        touchEvents = swiper.touchEvents,
        el = swiper.el,
        wrapperEl = swiper.wrapperEl,
        device = swiper.device,
        support = swiper.support;
    var capture = !!params.nested;
    var domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
    var swiperMethod = method; // Touch Events

    if (!support.touch) {
      el[domMethod](touchEvents.start, swiper.onTouchStart, false);
      document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
      document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
    } else {
      var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;
      el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
      el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
        passive: false,
        capture: capture
      } : capture);
      el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);

      if (touchEvents.cancel) {
        el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
      }
    } // Prevent Links Clicks


    if (params.preventClicks || params.preventClicksPropagation) {
      el[domMethod]('click', swiper.onClick, true);
    }

    if (params.cssMode) {
      wrapperEl[domMethod]('scroll', swiper.onScroll);
    } // Resize handler


    if (params.updateOnWindowResize) {
      swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
    } else {
      swiper[swiperMethod]('observerUpdate', onResize, true);
    }
  };

  function attachEvents() {
    var swiper = this;
    var document = getDocument();
    var params = swiper.params,
        support = swiper.support;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);

    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }

    swiper.onClick = onClick.bind(swiper);

    if (support.touch && !dummyEventAttached) {
      document.addEventListener('touchstart', dummyEventListener);
      dummyEventAttached = true;
    }

    events(swiper, 'on');
  }

  function detachEvents() {
    var swiper = this;
    events(swiper, 'off');
  }

  var events$1 = {
    attachEvents: attachEvents,
    detachEvents: detachEvents
  };

  var isGridEnabled = function isGridEnabled(swiper, params) {
    return swiper.grid && params.grid && params.grid.rows > 1;
  };

  function setBreakpoint() {
    var swiper = this;
    var activeIndex = swiper.activeIndex,
        initialized = swiper.initialized,
        _swiper$loopedSlides = swiper.loopedSlides,
        loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
        params = swiper.params,
        $el = swiper.$el;
    var breakpoints = params.breakpoints;
    if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

    var breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
    var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
    var breakpointParams = breakpointOnlyParams || swiper.originalParams;
    var wasMultiRow = isGridEnabled(swiper, params);
    var isMultiRow = isGridEnabled(swiper, breakpointParams);
    var wasEnabled = params.enabled;

    if (wasMultiRow && !isMultiRow) {
      $el.removeClass("".concat(params.containerModifierClass, "grid ").concat(params.containerModifierClass, "grid-column"));
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      $el.addClass("".concat(params.containerModifierClass, "grid"));

      if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
        $el.addClass("".concat(params.containerModifierClass, "grid-column"));
      }

      swiper.emitContainerClasses();
    }

    var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

    if (directionChanged && initialized) {
      swiper.changeDirection();
    }

    extend(swiper.params, breakpointParams);
    var isEnabled = swiper.params.enabled;
    Object.assign(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });

    if (wasEnabled && !isEnabled) {
      swiper.disable();
    } else if (!wasEnabled && isEnabled) {
      swiper.enable();
    }

    swiper.currentBreakpoint = breakpoint;
    swiper.emit('_beforeBreakpoint', breakpointParams);

    if (needsReLoop && initialized) {
      swiper.loopDestroy();
      swiper.loopCreate();
      swiper.updateSlides();
      swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
    }

    swiper.emit('breakpoint', breakpointParams);
  }

  function getBreakpoint(breakpoints, base, containerEl) {
    if (base === void 0) {
      base = 'window';
    }

    if (!breakpoints || base === 'container' && !containerEl) return undefined;
    var breakpoint = false;
    var window = getWindow();
    var currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
    var points = Object.keys(breakpoints).map(function (point) {
      if (typeof point === 'string' && point.indexOf('@') === 0) {
        var minRatio = parseFloat(point.substr(1));
        var value = currentHeight * minRatio;
        return {
          value: value,
          point: point
        };
      }

      return {
        value: point,
        point: point
      };
    });
    points.sort(function (a, b) {
      return parseInt(a.value, 10) - parseInt(b.value, 10);
    });

    for (var i = 0; i < points.length; i += 1) {
      var _points$i = points[i],
          point = _points$i.point,
          value = _points$i.value;

      if (base === 'window') {
        if (window.matchMedia("(min-width: ".concat(value, "px)")).matches) {
          breakpoint = point;
        }
      } else if (value <= containerEl.clientWidth) {
        breakpoint = point;
      }
    }

    return breakpoint || 'max';
  }

  var breakpoints = {
    setBreakpoint: setBreakpoint,
    getBreakpoint: getBreakpoint
  };

  function prepareClasses(entries, prefix) {
    var resultClasses = [];
    entries.forEach(function (item) {
      if (_typeof2(item) === 'object') {
        Object.keys(item).forEach(function (classNames) {
          if (item[classNames]) {
            resultClasses.push(prefix + classNames);
          }
        });
      } else if (typeof item === 'string') {
        resultClasses.push(prefix + item);
      }
    });
    return resultClasses;
  }

  function addClasses() {
    var swiper = this;
    var classNames = swiper.classNames,
        params = swiper.params,
        rtl = swiper.rtl,
        $el = swiper.$el,
        device = swiper.device,
        support = swiper.support; // prettier-ignore

    var suffixes = prepareClasses(['initialized', params.direction, {
      'pointer-events': !support.touch
    }, {
      'free-mode': swiper.params.freeMode && params.freeMode.enabled
    }, {
      'autoheight': params.autoHeight
    }, {
      'rtl': rtl
    }, {
      'grid': params.grid && params.grid.rows > 1
    }, {
      'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
    }, {
      'android': device.android
    }, {
      'ios': device.ios
    }, {
      'css-mode': params.cssMode
    }, {
      'centered': params.cssMode && params.centeredSlides
    }], params.containerModifierClass);
    classNames.push.apply(classNames, _toConsumableArray(suffixes));
    $el.addClass(_toConsumableArray(classNames).join(' '));
    swiper.emitContainerClasses();
  }

  function removeClasses() {
    var swiper = this;
    var $el = swiper.$el,
        classNames = swiper.classNames;
    $el.removeClass(classNames.join(' '));
    swiper.emitContainerClasses();
  }

  var classes = {
    addClasses: addClasses,
    removeClasses: removeClasses
  };

  function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
    var window = getWindow();
    var image;

    function onReady() {
      if (callback) callback();
    }

    var isPicture = $(imageEl).parent('picture')[0];

    if (!isPicture && (!imageEl.complete || !checkForComplete)) {
      if (src) {
        image = new window.Image();
        image.onload = onReady;
        image.onerror = onReady;

        if (sizes) {
          image.sizes = sizes;
        }

        if (srcset) {
          image.srcset = srcset;
        }

        if (src) {
          image.src = src;
        }
      } else {
        onReady();
      }
    } else {
      // image already loaded...
      onReady();
    }
  }

  function preloadImages() {
    var swiper = this;
    swiper.imagesToLoad = swiper.$el.find('img');

    function onReady() {
      if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
      if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

      if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
        if (swiper.params.updateOnImagesReady) swiper.update();
        swiper.emit('imagesReady');
      }
    }

    for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
      var imageEl = swiper.imagesToLoad[i];
      swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
    }
  }

  var images = {
    loadImage: loadImage,
    preloadImages: preloadImages
  };

  function checkOverflow() {
    var swiper = this;
    var wasLocked = swiper.isLocked,
        params = swiper.params;
    var slidesOffsetBefore = params.slidesOffsetBefore;

    if (slidesOffsetBefore) {
      var lastSlideIndex = swiper.slides.length - 1;
      var lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
      swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }

    if (params.allowSlideNext === true) {
      swiper.allowSlideNext = !swiper.isLocked;
    }

    if (params.allowSlidePrev === true) {
      swiper.allowSlidePrev = !swiper.isLocked;
    }

    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
    }

    if (wasLocked !== swiper.isLocked) {
      swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
    }
  }

  var checkOverflow$1 = {
    checkOverflow: checkOverflow
  };
  var defaults = {
    init: true,
    direction: 'horizontal',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    enabled: true,
    focusableElements: 'input, select, option, textarea, button, video, label',
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: 'slide',
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: undefined,
    breakpointsBase: 'window',
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 0,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // Images
    preloadImages: true,
    updateOnImagesReady: true,
    // loop
    loop: false,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: false,
    loopPreventsSlide: true,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    // NS
    containerModifierClass: 'swiper-',
    // NEW
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
  };

  function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj) {
      if (obj === void 0) {
        obj = {};
      }

      var moduleParamName = Object.keys(obj)[0];
      var moduleParams = obj[moduleParamName];

      if (_typeof2(moduleParams) !== 'object' || moduleParams === null) {
        extend(allModulesParams, obj);
        return;
      }

      if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
        params[moduleParamName] = {
          auto: true
        };
      }

      if (!(moduleParamName in params && 'enabled' in moduleParams)) {
        extend(allModulesParams, obj);
        return;
      }

      if (params[moduleParamName] === true) {
        params[moduleParamName] = {
          enabled: true
        };
      }

      if (_typeof2(params[moduleParamName]) === 'object' && !('enabled' in params[moduleParamName])) {
        params[moduleParamName].enabled = true;
      }

      if (!params[moduleParamName]) params[moduleParamName] = {
        enabled: false
      };
      extend(allModulesParams, obj);
    };
  }
  /* eslint no-param-reassign: "off" */


  var prototypes = {
    eventsEmitter: eventsEmitter,
    update: update,
    translate: translate,
    transition: transition,
    slide: slide,
    loop: loop,
    grabCursor: grabCursor,
    events: events$1,
    breakpoints: breakpoints,
    checkOverflow: checkOverflow$1,
    classes: classes,
    images: images
  };
  var extendedDefaults = {};

  var Swiper = /*#__PURE__*/function () {
    function Swiper() {
      _classCallCheck2(this, Swiper);

      var el;
      var params;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
        params = args[0];
      } else {
        el = args[0];
        params = args[1];
      }

      if (!params) params = {};
      params = extend({}, params);
      if (el && !params.el) params.el = el;

      if (params.el && $(params.el).length > 1) {
        var swipers = [];
        $(params.el).each(function (containerEl) {
          var newParams = extend({}, params, {
            el: containerEl
          });
          swipers.push(new Swiper(newParams));
        });
        return swipers;
      } // Swiper Instance


      var swiper = this;
      swiper.__swiper__ = true;
      swiper.support = getSupport();
      swiper.device = getDevice({
        userAgent: params.userAgent
      });
      swiper.browser = getBrowser();
      swiper.eventsListeners = {};
      swiper.eventsAnyListeners = [];
      swiper.modules = _toConsumableArray(swiper.__modules__);

      if (params.modules && Array.isArray(params.modules)) {
        var _swiper$modules;

        (_swiper$modules = swiper.modules).push.apply(_swiper$modules, _toConsumableArray(params.modules));
      }

      var allModulesParams = {};
      swiper.modules.forEach(function (mod) {
        mod({
          swiper: swiper,
          extendParams: moduleExtendParams(params, allModulesParams),
          on: swiper.on.bind(swiper),
          once: swiper.once.bind(swiper),
          off: swiper.off.bind(swiper),
          emit: swiper.emit.bind(swiper)
        });
      }); // Extend defaults with modules params

      var swiperParams = extend({}, defaults, allModulesParams); // Extend defaults with passed params

      swiper.params = extend({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = extend({}, swiper.params);
      swiper.passedParams = extend({}, params); // add event listeners

      if (swiper.params && swiper.params.on) {
        Object.keys(swiper.params.on).forEach(function (eventName) {
          swiper.on(eventName, swiper.params.on[eventName]);
        });
      }

      if (swiper.params && swiper.params.onAny) {
        swiper.onAny(swiper.params.onAny);
      } // Save Dom lib


      swiper.$ = $; // Extend Swiper

      Object.assign(swiper, {
        enabled: swiper.params.enabled,
        el: el,
        // Classes
        classNames: [],
        // Slides
        slides: $(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal: function isHorizontal() {
          return swiper.params.direction === 'horizontal';
        },
        isVertical: function isVertical() {
          return swiper.params.direction === 'vertical';
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: true,
        isEnd: false,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        // Touch Events
        touchEvents: function touchEvents() {
          var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
          var desktop = ['pointerdown', 'pointermove', 'pointerup'];
          swiper.touchEventsTouch = {
            start: touch[0],
            move: touch[1],
            end: touch[2],
            cancel: touch[3]
          };
          swiper.touchEventsDesktop = {
            start: desktop[0],
            move: desktop[1],
            end: desktop[2]
          };
          return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
        }(),
        touchEventsData: {
          isTouched: undefined,
          isMoved: undefined,
          allowTouchCallbacks: undefined,
          touchStartTime: undefined,
          isScrolling: undefined,
          currentTranslate: undefined,
          startTranslate: undefined,
          allowThresholdMove: undefined,
          // Form elements to match
          focusableElements: swiper.params.focusableElements,
          // Last click time
          lastClickTime: now(),
          clickTimeout: undefined,
          // Velocities
          velocities: [],
          allowMomentumBounce: undefined,
          isTouchEvent: undefined,
          startMoving: undefined
        },
        // Clicks
        allowClick: true,
        // Touches
        allowTouchMove: swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0
      });
      swiper.emit('_swiper'); // Init

      if (swiper.params.init) {
        swiper.init();
      } // Return app instance


      return swiper;
    }

    _createClass2(Swiper, [{
      key: "enable",
      value: function enable() {
        var swiper = this;
        if (swiper.enabled) return;
        swiper.enabled = true;

        if (swiper.params.grabCursor) {
          swiper.setGrabCursor();
        }

        swiper.emit('enable');
      }
    }, {
      key: "disable",
      value: function disable() {
        var swiper = this;
        if (!swiper.enabled) return;
        swiper.enabled = false;

        if (swiper.params.grabCursor) {
          swiper.unsetGrabCursor();
        }

        swiper.emit('disable');
      }
    }, {
      key: "setProgress",
      value: function setProgress(progress, speed) {
        var swiper = this;
        progress = Math.min(Math.max(progress, 0), 1);
        var min = swiper.minTranslate();
        var max = swiper.maxTranslate();
        var current = (max - min) * progress + min;
        swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
    }, {
      key: "emitContainerClasses",
      value: function emitContainerClasses() {
        var swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        var cls = swiper.el.className.split(' ').filter(function (className) {
          return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
        swiper.emit('_containerClasses', cls.join(' '));
      }
    }, {
      key: "getSlideClasses",
      value: function getSlideClasses(slideEl) {
        var swiper = this;
        return slideEl.className.split(' ').filter(function (className) {
          return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(' ');
      }
    }, {
      key: "emitSlidesClasses",
      value: function emitSlidesClasses() {
        var swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        var updates = [];
        swiper.slides.each(function (slideEl) {
          var classNames = swiper.getSlideClasses(slideEl);
          updates.push({
            slideEl: slideEl,
            classNames: classNames
          });
          swiper.emit('_slideClass', slideEl, classNames);
        });
        swiper.emit('_slideClasses', updates);
      }
    }, {
      key: "slidesPerViewDynamic",
      value: function slidesPerViewDynamic(view, exact) {
        if (view === void 0) {
          view = 'current';
        }

        if (exact === void 0) {
          exact = false;
        }

        var swiper = this;
        var params = swiper.params,
            slides = swiper.slides,
            slidesGrid = swiper.slidesGrid,
            slidesSizesGrid = swiper.slidesSizesGrid,
            swiperSize = swiper.size,
            activeIndex = swiper.activeIndex;
        var spv = 1;

        if (params.centeredSlides) {
          var slideSize = slides[activeIndex].swiperSlideSize;
          var breakLoop;

          for (var i = activeIndex + 1; i < slides.length; i += 1) {
            if (slides[i] && !breakLoop) {
              slideSize += slides[i].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize) breakLoop = true;
            }
          }

          for (var _i8 = activeIndex - 1; _i8 >= 0; _i8 -= 1) {
            if (slides[_i8] && !breakLoop) {
              slideSize += slides[_i8].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize) breakLoop = true;
            }
          }
        } else {
          // eslint-disable-next-line
          if (view === 'current') {
            for (var _i9 = activeIndex + 1; _i9 < slides.length; _i9 += 1) {
              var slideInView = exact ? slidesGrid[_i9] + slidesSizesGrid[_i9] - slidesGrid[activeIndex] < swiperSize : slidesGrid[_i9] - slidesGrid[activeIndex] < swiperSize;

              if (slideInView) {
                spv += 1;
              }
            }
          } else {
            // previous
            for (var _i10 = activeIndex - 1; _i10 >= 0; _i10 -= 1) {
              var _slideInView = slidesGrid[activeIndex] - slidesGrid[_i10] < swiperSize;

              if (_slideInView) {
                spv += 1;
              }
            }
          }
        }

        return spv;
      }
    }, {
      key: "update",
      value: function update() {
        var swiper = this;
        if (!swiper || swiper.destroyed) return;
        var snapGrid = swiper.snapGrid,
            params = swiper.params; // Breakpoints

        if (params.breakpoints) {
          swiper.setBreakpoint();
        }

        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();

        function setTranslate() {
          var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
          var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
          swiper.setTranslate(newTranslate);
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        }

        var translated;

        if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
          setTranslate();

          if (swiper.params.autoHeight) {
            swiper.updateAutoHeight();
          }
        } else {
          if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
            translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
          } else {
            translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
          }

          if (!translated) {
            setTranslate();
          }
        }

        if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
          swiper.checkOverflow();
        }

        swiper.emit('update');
      }
    }, {
      key: "changeDirection",
      value: function changeDirection(newDirection, needUpdate) {
        if (needUpdate === void 0) {
          needUpdate = true;
        }

        var swiper = this;
        var currentDirection = swiper.params.direction;

        if (!newDirection) {
          // eslint-disable-next-line
          newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
        }

        if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
          return swiper;
        }

        swiper.$el.removeClass("".concat(swiper.params.containerModifierClass).concat(currentDirection)).addClass("".concat(swiper.params.containerModifierClass).concat(newDirection));
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.each(function (slideEl) {
          if (newDirection === 'vertical') {
            slideEl.style.width = '';
          } else {
            slideEl.style.height = '';
          }
        });
        swiper.emit('changeDirection');
        if (needUpdate) swiper.update();
        return swiper;
      }
    }, {
      key: "mount",
      value: function mount(el) {
        var swiper = this;
        if (swiper.mounted) return true; // Find el

        var $el = $(el || swiper.params.el);
        el = $el[0];

        if (!el) {
          return false;
        }

        el.swiper = swiper;

        var getWrapperSelector = function getWrapperSelector() {
          return ".".concat((swiper.params.wrapperClass || '').trim().split(' ').join('.'));
        };

        var getWrapper = function getWrapper() {
          if (el && el.shadowRoot && el.shadowRoot.querySelector) {
            var res = $(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items

            res.children = function (options) {
              return $el.children(options);
            };

            return res;
          }

          return $el.children(getWrapperSelector());
        }; // Find Wrapper


        var $wrapperEl = getWrapper();

        if ($wrapperEl.length === 0 && swiper.params.createElements) {
          var _document2 = getDocument();

          var wrapper = _document2.createElement('div');

          $wrapperEl = $(wrapper);
          wrapper.className = swiper.params.wrapperClass;
          $el.append(wrapper);
          $el.children(".".concat(swiper.params.slideClass)).each(function (slideEl) {
            $wrapperEl.append(slideEl);
          });
        }

        Object.assign(swiper, {
          $el: $el,
          el: el,
          $wrapperEl: $wrapperEl,
          wrapperEl: $wrapperEl[0],
          mounted: true,
          // RTL
          rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
          rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
          wrongRTL: $wrapperEl.css('display') === '-webkit-box'
        });
        return true;
      }
    }, {
      key: "init",
      value: function init(el) {
        var swiper = this;
        if (swiper.initialized) return swiper;
        var mounted = swiper.mount(el);
        if (mounted === false) return swiper;
        swiper.emit('beforeInit'); // Set breakpoint

        if (swiper.params.breakpoints) {
          swiper.setBreakpoint();
        } // Add Classes


        swiper.addClasses(); // Create loop

        if (swiper.params.loop) {
          swiper.loopCreate();
        } // Update size


        swiper.updateSize(); // Update slides

        swiper.updateSlides();

        if (swiper.params.watchOverflow) {
          swiper.checkOverflow();
        } // Set Grab Cursor


        if (swiper.params.grabCursor && swiper.enabled) {
          swiper.setGrabCursor();
        }

        if (swiper.params.preloadImages) {
          swiper.preloadImages();
        } // Slide To Initial Slide


        if (swiper.params.loop) {
          swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
        } else {
          swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
        } // Attach events


        swiper.attachEvents(); // Init Flag

        swiper.initialized = true; // Emit

        swiper.emit('init');
        swiper.emit('afterInit');
        return swiper;
      }
    }, {
      key: "destroy",
      value: function destroy(deleteInstance, cleanStyles) {
        if (deleteInstance === void 0) {
          deleteInstance = true;
        }

        if (cleanStyles === void 0) {
          cleanStyles = true;
        }

        var swiper = this;
        var params = swiper.params,
            $el = swiper.$el,
            $wrapperEl = swiper.$wrapperEl,
            slides = swiper.slides;

        if (typeof swiper.params === 'undefined' || swiper.destroyed) {
          return null;
        }

        swiper.emit('beforeDestroy'); // Init Flag

        swiper.initialized = false; // Detach events

        swiper.detachEvents(); // Destroy loop

        if (params.loop) {
          swiper.loopDestroy();
        } // Cleanup styles


        if (cleanStyles) {
          swiper.removeClasses();
          $el.removeAttr('style');
          $wrapperEl.removeAttr('style');

          if (slides && slides.length) {
            slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
          }
        }

        swiper.emit('destroy'); // Detach emitter events

        Object.keys(swiper.eventsListeners).forEach(function (eventName) {
          swiper.off(eventName);
        });

        if (deleteInstance !== false) {
          swiper.$el[0].swiper = null;
          deleteProps(swiper);
        }

        swiper.destroyed = true;
        return null;
      }
    }], [{
      key: "extendDefaults",
      value: function extendDefaults(newDefaults) {
        extend(extendedDefaults, newDefaults);
      }
    }, {
      key: "extendedDefaults",
      get: function get() {
        return extendedDefaults;
      }
    }, {
      key: "defaults",
      get: function get() {
        return defaults;
      }
    }, {
      key: "installModule",
      value: function installModule(mod) {
        if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
        var modules = Swiper.prototype.__modules__;

        if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
          modules.push(mod);
        }
      }
    }, {
      key: "use",
      value: function use(module) {
        if (Array.isArray(module)) {
          module.forEach(function (m) {
            return Swiper.installModule(m);
          });
          return Swiper;
        }

        Swiper.installModule(module);
        return Swiper;
      }
    }]);

    return Swiper;
  }();

  Object.keys(prototypes).forEach(function (prototypeGroup) {
    Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([Resize, Observer]);

  function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
    var document = getDocument();

    if (swiper.params.createElements) {
      Object.keys(checkProps).forEach(function (key) {
        if (!params[key] && params.auto === true) {
          var element = swiper.$el.children(".".concat(checkProps[key]))[0];

          if (!element) {
            element = document.createElement('div');
            element.className = checkProps[key];
            swiper.$el.append(element);
          }

          params[key] = element;
          originalParams[key] = element;
        }
      });
    }

    return params;
  }

  function Navigation(_ref) {
    var swiper = _ref.swiper,
        extendParams = _ref.extendParams,
        on = _ref.on,
        emit = _ref.emit;
    extendParams({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: false,
        disabledClass: 'swiper-button-disabled',
        hiddenClass: 'swiper-button-hidden',
        lockClass: 'swiper-button-lock'
      }
    });
    swiper.navigation = {
      nextEl: null,
      $nextEl: null,
      prevEl: null,
      $prevEl: null
    };

    function getEl(el) {
      var $el;

      if (el) {
        $el = $(el);

        if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) {
          $el = swiper.$el.find(el);
        }
      }

      return $el;
    }

    function toggleEl($el, disabled) {
      var params = swiper.params.navigation;

      if ($el && $el.length > 0) {
        $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);
        if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;

        if (swiper.params.watchOverflow && swiper.enabled) {
          $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        }
      }
    }

    function update() {
      // Update Navigation Buttons
      if (swiper.params.loop) return;
      var _swiper$navigation = swiper.navigation,
          $nextEl = _swiper$navigation.$nextEl,
          $prevEl = _swiper$navigation.$prevEl;
      toggleEl($prevEl, swiper.isBeginning);
      toggleEl($nextEl, swiper.isEnd);
    }

    function onPrevClick(e) {
      e.preventDefault();
      if (swiper.isBeginning && !swiper.params.loop) return;
      swiper.slidePrev();
    }

    function onNextClick(e) {
      e.preventDefault();
      if (swiper.isEnd && !swiper.params.loop) return;
      swiper.slideNext();
    }

    function init() {
      var params = swiper.params.navigation;
      swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev'
      });
      if (!(params.nextEl || params.prevEl)) return;
      var $nextEl = getEl(params.nextEl);
      var $prevEl = getEl(params.prevEl);

      if ($nextEl && $nextEl.length > 0) {
        $nextEl.on('click', onNextClick);
      }

      if ($prevEl && $prevEl.length > 0) {
        $prevEl.on('click', onPrevClick);
      }

      Object.assign(swiper.navigation, {
        $nextEl: $nextEl,
        nextEl: $nextEl && $nextEl[0],
        $prevEl: $prevEl,
        prevEl: $prevEl && $prevEl[0]
      });

      if (!swiper.enabled) {
        if ($nextEl) $nextEl.addClass(params.lockClass);
        if ($prevEl) $prevEl.addClass(params.lockClass);
      }
    }

    function destroy() {
      var _swiper$navigation2 = swiper.navigation,
          $nextEl = _swiper$navigation2.$nextEl,
          $prevEl = _swiper$navigation2.$prevEl;

      if ($nextEl && $nextEl.length) {
        $nextEl.off('click', onNextClick);
        $nextEl.removeClass(swiper.params.navigation.disabledClass);
      }

      if ($prevEl && $prevEl.length) {
        $prevEl.off('click', onPrevClick);
        $prevEl.removeClass(swiper.params.navigation.disabledClass);
      }
    }

    on('init', function () {
      init();
      update();
    });
    on('toEdge fromEdge lock unlock', function () {
      update();
    });
    on('destroy', function () {
      destroy();
    });
    on('enable disable', function () {
      var _swiper$navigation3 = swiper.navigation,
          $nextEl = _swiper$navigation3.$nextEl,
          $prevEl = _swiper$navigation3.$prevEl;

      if ($nextEl) {
        $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
      }

      if ($prevEl) {
        $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
      }
    });
    on('click', function (_s, e) {
      var _swiper$navigation4 = swiper.navigation,
          $nextEl = _swiper$navigation4.$nextEl,
          $prevEl = _swiper$navigation4.$prevEl;
      var targetEl = e.target;

      if (swiper.params.navigation.hideOnClick && !$(targetEl).is($prevEl) && !$(targetEl).is($nextEl)) {
        if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
        var isHidden;

        if ($nextEl) {
          isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
        } else if ($prevEl) {
          isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
        }

        if (isHidden === true) {
          emit('navigationShow');
        } else {
          emit('navigationHide');
        }

        if ($nextEl) {
          $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
        }

        if ($prevEl) {
          $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
        }
      }
    });
    Object.assign(swiper.navigation, {
      update: update,
      init: init,
      destroy: destroy
    });
  }

  function classesToSelector(classes) {
    if (classes === void 0) {
      classes = '';
    }

    return ".".concat(classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
    .replace(/ /g, '.'));
  }

  function Pagination(_ref) {
    var swiper = _ref.swiper,
        extendParams = _ref.extendParams,
        on = _ref.on,
        emit = _ref.emit;
    var pfx = 'swiper-pagination';
    extendParams({
      pagination: {
        el: null,
        bulletElement: 'span',
        clickable: false,
        hideOnClick: false,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: false,
        type: 'bullets',
        // 'bullets' or 'progressbar' or 'fraction' or 'custom'
        dynamicBullets: false,
        dynamicMainBullets: 1,
        formatFractionCurrent: function formatFractionCurrent(number) {
          return number;
        },
        formatFractionTotal: function formatFractionTotal(number) {
          return number;
        },
        bulletClass: "".concat(pfx, "-bullet"),
        bulletActiveClass: "".concat(pfx, "-bullet-active"),
        modifierClass: "".concat(pfx, "-"),
        currentClass: "".concat(pfx, "-current"),
        totalClass: "".concat(pfx, "-total"),
        hiddenClass: "".concat(pfx, "-hidden"),
        progressbarFillClass: "".concat(pfx, "-progressbar-fill"),
        progressbarOppositeClass: "".concat(pfx, "-progressbar-opposite"),
        clickableClass: "".concat(pfx, "-clickable"),
        lockClass: "".concat(pfx, "-lock"),
        horizontalClass: "".concat(pfx, "-horizontal"),
        verticalClass: "".concat(pfx, "-vertical")
      }
    });
    swiper.pagination = {
      el: null,
      $el: null,
      bullets: []
    };
    var bulletSize;
    var dynamicBulletIndex = 0;

    function isPaginationDisabled() {
      return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
    }

    function setSideBullets($bulletEl, position) {
      var bulletActiveClass = swiper.params.pagination.bulletActiveClass;
      $bulletEl[position]().addClass("".concat(bulletActiveClass, "-").concat(position))[position]().addClass("".concat(bulletActiveClass, "-").concat(position, "-").concat(position));
    }

    function update() {
      // Render || Update Pagination bullets/items
      var rtl = swiper.rtl;
      var params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      var $el = swiper.pagination.$el; // Current/Total

      var current;
      var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

      if (swiper.params.loop) {
        current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

        if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
          current -= slidesLength - swiper.loopedSlides * 2;
        }

        if (current > total - 1) current -= total;
        if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
      } else if (typeof swiper.snapIndex !== 'undefined') {
        current = swiper.snapIndex;
      } else {
        current = swiper.activeIndex || 0;
      } // Types


      if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
        var bullets = swiper.pagination.bullets;
        var firstIndex;
        var lastIndex;
        var midIndex;

        if (params.dynamicBullets) {
          bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
          $el.css(swiper.isHorizontal() ? 'width' : 'height', "".concat(bulletSize * (params.dynamicMainBullets + 4), "px"));

          if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
            dynamicBulletIndex += current - swiper.previousIndex;

            if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
              dynamicBulletIndex = params.dynamicMainBullets - 1;
            } else if (dynamicBulletIndex < 0) {
              dynamicBulletIndex = 0;
            }
          }

          firstIndex = current - dynamicBulletIndex;
          lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
          midIndex = (lastIndex + firstIndex) / 2;
        }

        bullets.removeClass(['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(function (suffix) {
          return "".concat(params.bulletActiveClass).concat(suffix);
        }).join(' '));

        if ($el.length > 1) {
          bullets.each(function (bullet) {
            var $bullet = $(bullet);
            var bulletIndex = $bullet.index();

            if (bulletIndex === current) {
              $bullet.addClass(params.bulletActiveClass);
            }

            if (params.dynamicBullets) {
              if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                $bullet.addClass("".concat(params.bulletActiveClass, "-main"));
              }

              if (bulletIndex === firstIndex) {
                setSideBullets($bullet, 'prev');
              }

              if (bulletIndex === lastIndex) {
                setSideBullets($bullet, 'next');
              }
            }
          });
        } else {
          var $bullet = bullets.eq(current);
          var bulletIndex = $bullet.index();
          $bullet.addClass(params.bulletActiveClass);

          if (params.dynamicBullets) {
            var $firstDisplayedBullet = bullets.eq(firstIndex);
            var $lastDisplayedBullet = bullets.eq(lastIndex);

            for (var i = firstIndex; i <= lastIndex; i += 1) {
              bullets.eq(i).addClass("".concat(params.bulletActiveClass, "-main"));
            }

            if (swiper.params.loop) {
              if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                for (var _i11 = params.dynamicMainBullets; _i11 >= 0; _i11 -= 1) {
                  bullets.eq(bullets.length - _i11).addClass("".concat(params.bulletActiveClass, "-main"));
                }

                bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass("".concat(params.bulletActiveClass, "-prev"));
              } else {
                setSideBullets($firstDisplayedBullet, 'prev');
                setSideBullets($lastDisplayedBullet, 'next');
              }
            } else {
              setSideBullets($firstDisplayedBullet, 'prev');
              setSideBullets($lastDisplayedBullet, 'next');
            }
          }
        }

        if (params.dynamicBullets) {
          var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
          var bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
          var offsetProp = rtl ? 'right' : 'left';
          bullets.css(swiper.isHorizontal() ? offsetProp : 'top', "".concat(bulletsOffset, "px"));
        }
      }

      if (params.type === 'fraction') {
        $el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
        $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
      }

      if (params.type === 'progressbar') {
        var progressbarDirection;

        if (params.progressbarOpposite) {
          progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
        } else {
          progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
        }

        var scale = (current + 1) / total;
        var scaleX = 1;
        var scaleY = 1;

        if (progressbarDirection === 'horizontal') {
          scaleX = scale;
        } else {
          scaleY = scale;
        }

        $el.find(classesToSelector(params.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(scaleX, ") scaleY(").concat(scaleY, ")")).transition(swiper.params.speed);
      }

      if (params.type === 'custom' && params.renderCustom) {
        $el.html(params.renderCustom(swiper, current + 1, total));
        emit('paginationRender', $el[0]);
      } else {
        emit('paginationUpdate', $el[0]);
      }

      if (swiper.params.watchOverflow && swiper.enabled) {
        $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      }
    }

    function render() {
      // Render Container
      var params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
      var $el = swiper.pagination.$el;
      var paginationHTML = '';

      if (params.type === 'bullets') {
        var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

        if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) {
          numberOfBullets = slidesLength;
        }

        for (var i = 0; i < numberOfBullets; i += 1) {
          if (params.renderBullet) {
            paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
          } else {
            paginationHTML += "<".concat(params.bulletElement, " class=\"").concat(params.bulletClass, "\"></").concat(params.bulletElement, ">");
          }
        }

        $el.html(paginationHTML);
        swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
      }

      if (params.type === 'fraction') {
        if (params.renderFraction) {
          paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
        } else {
          paginationHTML = "<span class=\"".concat(params.currentClass, "\"></span>") + ' / ' + "<span class=\"".concat(params.totalClass, "\"></span>");
        }

        $el.html(paginationHTML);
      }

      if (params.type === 'progressbar') {
        if (params.renderProgressbar) {
          paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
        } else {
          paginationHTML = "<span class=\"".concat(params.progressbarFillClass, "\"></span>");
        }

        $el.html(paginationHTML);
      }

      if (params.type !== 'custom') {
        emit('paginationRender', swiper.pagination.$el[0]);
      }
    }

    function init() {
      swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
        el: 'swiper-pagination'
      });
      var params = swiper.params.pagination;
      if (!params.el) return;
      var $el = $(params.el);
      if ($el.length === 0) return;

      if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
        $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper

        if ($el.length > 1) {
          $el = $el.filter(function (el) {
            if ($(el).parents('.swiper')[0] !== swiper.el) return false;
            return true;
          });
        }
      }

      if (params.type === 'bullets' && params.clickable) {
        $el.addClass(params.clickableClass);
      }

      $el.addClass(params.modifierClass + params.type);
      $el.addClass(params.modifierClass + swiper.params.direction);

      if (params.type === 'bullets' && params.dynamicBullets) {
        $el.addClass("".concat(params.modifierClass).concat(params.type, "-dynamic"));
        dynamicBulletIndex = 0;

        if (params.dynamicMainBullets < 1) {
          params.dynamicMainBullets = 1;
        }
      }

      if (params.type === 'progressbar' && params.progressbarOpposite) {
        $el.addClass(params.progressbarOppositeClass);
      }

      if (params.clickable) {
        $el.on('click', classesToSelector(params.bulletClass), function onClick(e) {
          e.preventDefault();
          var index = $(this).index() * swiper.params.slidesPerGroup;
          if (swiper.params.loop) index += swiper.loopedSlides;
          swiper.slideTo(index);
        });
      }

      Object.assign(swiper.pagination, {
        $el: $el,
        el: $el[0]
      });

      if (!swiper.enabled) {
        $el.addClass(params.lockClass);
      }
    }

    function destroy() {
      var params = swiper.params.pagination;
      if (isPaginationDisabled()) return;
      var $el = swiper.pagination.$el;
      $el.removeClass(params.hiddenClass);
      $el.removeClass(params.modifierClass + params.type);
      $el.removeClass(params.modifierClass + swiper.params.direction);
      if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

      if (params.clickable) {
        $el.off('click', classesToSelector(params.bulletClass));
      }
    }

    on('init', function () {
      init();
      render();
      update();
    });
    on('activeIndexChange', function () {
      if (swiper.params.loop) {
        update();
      } else if (typeof swiper.snapIndex === 'undefined') {
        update();
      }
    });
    on('snapIndexChange', function () {
      if (!swiper.params.loop) {
        update();
      }
    });
    on('slidesLengthChange', function () {
      if (swiper.params.loop) {
        render();
        update();
      }
    });
    on('snapGridLengthChange', function () {
      if (!swiper.params.loop) {
        render();
        update();
      }
    });
    on('destroy', function () {
      destroy();
    });
    on('enable disable', function () {
      var $el = swiper.pagination.$el;

      if ($el) {
        $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
      }
    });
    on('lock unlock', function () {
      update();
    });
    on('click', function (_s, e) {
      var targetEl = e.target;
      var $el = swiper.pagination.$el;

      if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el.length > 0 && !$(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
        if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
        var isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);

        if (isHidden === true) {
          emit('paginationShow');
        } else {
          emit('paginationHide');
        }

        $el.toggleClass(swiper.params.pagination.hiddenClass);
      }
    });
    Object.assign(swiper.pagination, {
      render: render,
      update: update,
      init: init,
      destroy: destroy
    });
  }

  function Lazy(_ref) {
    var swiper = _ref.swiper,
        extendParams = _ref.extendParams,
        on = _ref.on,
        emit = _ref.emit;
    extendParams({
      lazy: {
        checkInView: false,
        enabled: false,
        loadPrevNext: false,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: false,
        scrollingElement: '',
        elementClass: 'swiper-lazy',
        loadingClass: 'swiper-lazy-loading',
        loadedClass: 'swiper-lazy-loaded',
        preloaderClass: 'swiper-lazy-preloader'
      }
    });
    swiper.lazy = {};
    var scrollHandlerAttached = false;
    var initialImageLoaded = false;

    function loadInSlide(index, loadInDuplicate) {
      if (loadInDuplicate === void 0) {
        loadInDuplicate = true;
      }

      var params = swiper.params.lazy;
      if (typeof index === 'undefined') return;
      if (swiper.slides.length === 0) return;
      var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      var $slideEl = isVirtual ? swiper.$wrapperEl.children(".".concat(swiper.params.slideClass, "[data-swiper-slide-index=\"").concat(index, "\"]")) : swiper.slides.eq(index);
      var $images = $slideEl.find(".".concat(params.elementClass, ":not(.").concat(params.loadedClass, "):not(.").concat(params.loadingClass, ")"));

      if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
        $images.push($slideEl[0]);
      }

      if ($images.length === 0) return;
      $images.each(function (imageEl) {
        var $imageEl = $(imageEl);
        $imageEl.addClass(params.loadingClass);
        var background = $imageEl.attr('data-background');
        var src = $imageEl.attr('data-src');
        var srcset = $imageEl.attr('data-srcset');
        var sizes = $imageEl.attr('data-sizes');
        var $pictureEl = $imageEl.parent('picture');
        swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
          if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

          if (background) {
            $imageEl.css('background-image', "url(\"".concat(background, "\")"));
            $imageEl.removeAttr('data-background');
          } else {
            if (srcset) {
              $imageEl.attr('srcset', srcset);
              $imageEl.removeAttr('data-srcset');
            }

            if (sizes) {
              $imageEl.attr('sizes', sizes);
              $imageEl.removeAttr('data-sizes');
            }

            if ($pictureEl.length) {
              $pictureEl.children('source').each(function (sourceEl) {
                var $source = $(sourceEl);

                if ($source.attr('data-srcset')) {
                  $source.attr('srcset', $source.attr('data-srcset'));
                  $source.removeAttr('data-srcset');
                }
              });
            }

            if (src) {
              $imageEl.attr('src', src);
              $imageEl.removeAttr('data-src');
            }
          }

          $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
          $slideEl.find(".".concat(params.preloaderClass)).remove();

          if (swiper.params.loop && loadInDuplicate) {
            var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

            if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
              var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"".concat(slideOriginalIndex, "\"]:not(.").concat(swiper.params.slideDuplicateClass, ")"));
              loadInSlide(originalSlide.index(), false);
            } else {
              var duplicatedSlide = swiper.$wrapperEl.children(".".concat(swiper.params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(slideOriginalIndex, "\"]"));
              loadInSlide(duplicatedSlide.index(), false);
            }
          }

          emit('lazyImageReady', $slideEl[0], $imageEl[0]);

          if (swiper.params.autoHeight) {
            swiper.updateAutoHeight();
          }
        });
        emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
      });
    }

    function load() {
      var $wrapperEl = swiper.$wrapperEl,
          swiperParams = swiper.params,
          slides = swiper.slides,
          activeIndex = swiper.activeIndex;
      var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
      var params = swiperParams.lazy;
      var slidesPerView = swiperParams.slidesPerView;

      if (slidesPerView === 'auto') {
        slidesPerView = 0;
      }

      function slideExist(index) {
        if (isVirtual) {
          if ($wrapperEl.children(".".concat(swiperParams.slideClass, "[data-swiper-slide-index=\"").concat(index, "\"]")).length) {
            return true;
          }
        } else if (slides[index]) return true;

        return false;
      }

      function slideIndex(slideEl) {
        if (isVirtual) {
          return $(slideEl).attr('data-swiper-slide-index');
        }

        return $(slideEl).index();
      }

      if (!initialImageLoaded) initialImageLoaded = true;

      if (swiper.params.watchSlidesProgress) {
        $wrapperEl.children(".".concat(swiperParams.slideVisibleClass)).each(function (slideEl) {
          var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
          loadInSlide(index);
        });
      } else if (slidesPerView > 1) {
        for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
          if (slideExist(i)) loadInSlide(i);
        }
      } else {
        loadInSlide(activeIndex);
      }

      if (params.loadPrevNext) {
        if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
          var amount = params.loadPrevNextAmount;
          var spv = slidesPerView;
          var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
          var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

          for (var _i12 = activeIndex + slidesPerView; _i12 < maxIndex; _i12 += 1) {
            if (slideExist(_i12)) loadInSlide(_i12);
          } // Prev Slides


          for (var _i13 = minIndex; _i13 < activeIndex; _i13 += 1) {
            if (slideExist(_i13)) loadInSlide(_i13);
          }
        } else {
          var nextSlide = $wrapperEl.children(".".concat(swiperParams.slideNextClass));
          if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
          var prevSlide = $wrapperEl.children(".".concat(swiperParams.slidePrevClass));
          if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
        }
      }
    }

    function checkInViewOnLoad() {
      var window = getWindow();
      if (!swiper || swiper.destroyed) return;
      var $scrollElement = swiper.params.lazy.scrollingElement ? $(swiper.params.lazy.scrollingElement) : $(window);
      var isWindow = $scrollElement[0] === window;
      var scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
      var scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
      var swiperOffset = swiper.$el.offset();
      var rtl = swiper.rtlTranslate;
      var inView = false;
      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
      var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

      for (var i = 0; i < swiperCoord.length; i += 1) {
        var point = swiperCoord[i];

        if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
          if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

          inView = true;
        }
      }

      var passiveListener = swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners ? {
        passive: true,
        capture: false
      } : false;

      if (inView) {
        load();
        $scrollElement.off('scroll', checkInViewOnLoad, passiveListener);
      } else if (!scrollHandlerAttached) {
        scrollHandlerAttached = true;
        $scrollElement.on('scroll', checkInViewOnLoad, passiveListener);
      }
    }

    on('beforeInit', function () {
      if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
        swiper.params.preloadImages = false;
      }
    });
    on('init', function () {
      if (swiper.params.lazy.enabled) {
        if (swiper.params.lazy.checkInView) {
          checkInViewOnLoad();
        } else {
          load();
        }
      }
    });
    on('scroll', function () {
      if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) {
        load();
      }
    });
    on('scrollbarDragMove resize _freeModeNoMomentumRelease', function () {
      if (swiper.params.lazy.enabled) {
        if (swiper.params.lazy.checkInView) {
          checkInViewOnLoad();
        } else {
          load();
        }
      }
    });
    on('transitionStart', function () {
      if (swiper.params.lazy.enabled) {
        if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
          if (swiper.params.lazy.checkInView) {
            checkInViewOnLoad();
          } else {
            load();
          }
        }
      }
    });
    on('transitionEnd', function () {
      if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
        if (swiper.params.lazy.checkInView) {
          checkInViewOnLoad();
        } else {
          load();
        }
      }
    });
    on('slideChange', function () {
      var _swiper$params = swiper.params,
          lazy = _swiper$params.lazy,
          cssMode = _swiper$params.cssMode,
          watchSlidesProgress = _swiper$params.watchSlidesProgress,
          touchReleaseOnEdges = _swiper$params.touchReleaseOnEdges,
          resistanceRatio = _swiper$params.resistanceRatio;

      if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) {
        load();
      }
    });
    Object.assign(swiper.lazy, {
      load: load,
      loadInSlide: loadInSlide
    });
  }
  /* eslint no-bitwise: ["error", { "allow": [">>"] }] */


  function Controller(_ref) {
    var swiper = _ref.swiper,
        extendParams = _ref.extendParams,
        on = _ref.on;
    extendParams({
      controller: {
        control: undefined,
        inverse: false,
        by: 'slide' // or 'container'

      }
    });
    swiper.controller = {
      control: undefined
    };

    function LinearSpline(x, y) {
      var binarySearch = function search() {
        var maxIndex;
        var minIndex;
        var guess;
        return function (array, val) {
          minIndex = -1;
          maxIndex = array.length;

          while (maxIndex - minIndex > 1) {
            guess = maxIndex + minIndex >> 1;

            if (array[guess] <= val) {
              minIndex = guess;
            } else {
              maxIndex = guess;
            }
          }

          return maxIndex;
        };
      }();

      this.x = x;
      this.y = y;
      this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
      // (x1,y1) is the known point before given value,
      // (x3,y3) is the known point after given value.

      var i1;
      var i3;

      this.interpolate = function interpolate(x2) {
        if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

        i3 = binarySearch(this.x, x2);
        i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
        // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

        return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
      };

      return this;
    } // xxx: for now i will just save one spline function to to


    function getInterpolateFunction(c) {
      if (!swiper.controller.spline) {
        swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
      }
    }

    function setTranslate(_t, byController) {
      var controlled = swiper.controller.control;
      var multiplier;
      var controlledTranslate;
      var Swiper = swiper.constructor;

      function setControlledTranslate(c) {
        // this will create an Interpolate function based on the snapGrids
        // x is the Grid of the scrolled scroller and y will be the controlled scroller
        // it makes sense to create this only once and recall it for the interpolation
        // the function does a lot of value caching for performance
        var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

        if (swiper.params.controller.by === 'slide') {
          getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
          // but it did not work out

          controlledTranslate = -swiper.controller.spline.interpolate(-translate);
        }

        if (!controlledTranslate || swiper.params.controller.by === 'container') {
          multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
          controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
        }

        if (swiper.params.controller.inverse) {
          controlledTranslate = c.maxTranslate() - controlledTranslate;
        }

        c.updateProgress(controlledTranslate);
        c.setTranslate(controlledTranslate, swiper);
        c.updateActiveIndex();
        c.updateSlidesClasses();
      }

      if (Array.isArray(controlled)) {
        for (var i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTranslate(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTranslate(controlled);
      }
    }

    function setTransition(duration, byController) {
      var Swiper = swiper.constructor;
      var controlled = swiper.controller.control;
      var i;

      function setControlledTransition(c) {
        c.setTransition(duration, swiper);

        if (duration !== 0) {
          c.transitionStart();

          if (c.params.autoHeight) {
            nextTick(function () {
              c.updateAutoHeight();
            });
          }

          c.$wrapperEl.transitionEnd(function () {
            if (!controlled) return;

            if (c.params.loop && swiper.params.controller.by === 'slide') {
              c.loopFix();
            }

            c.transitionEnd();
          });
        }
      }

      if (Array.isArray(controlled)) {
        for (i = 0; i < controlled.length; i += 1) {
          if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
            setControlledTransition(controlled[i]);
          }
        }
      } else if (controlled instanceof Swiper && byController !== controlled) {
        setControlledTransition(controlled);
      }
    }

    function removeSpline() {
      if (!swiper.controller.control) return;

      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    }

    on('beforeInit', function () {
      swiper.controller.control = swiper.params.controller.control;
    });
    on('update', function () {
      removeSpline();
    });
    on('resize', function () {
      removeSpline();
    });
    on('observerUpdate', function () {
      removeSpline();
    });
    on('setTranslate', function (_s, translate, byController) {
      if (!swiper.controller.control) return;
      swiper.controller.setTranslate(translate, byController);
    });
    on('setTransition', function (_s, duration, byController) {
      if (!swiper.controller.control) return;
      swiper.controller.setTransition(duration, byController);
    });
    Object.assign(swiper.controller, {
      setTranslate: setTranslate,
      setTransition: setTransition
    });
  }
  /* eslint no-underscore-dangle: "off" */


  function Autoplay(_ref) {
    var swiper = _ref.swiper,
        extendParams = _ref.extendParams,
        on = _ref.on,
        emit = _ref.emit;
    var timeout;
    swiper.autoplay = {
      running: false,
      paused: false
    };
    extendParams({
      autoplay: {
        enabled: false,
        delay: 3000,
        waitForTransition: true,
        disableOnInteraction: true,
        stopOnLastSlide: false,
        reverseDirection: false,
        pauseOnMouseEnter: false
      }
    });

    function run() {
      var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
      var delay = swiper.params.autoplay.delay;

      if ($activeSlideEl.attr('data-swiper-autoplay')) {
        delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
      }

      clearTimeout(timeout);
      timeout = nextTick(function () {
        var autoplayResult;

        if (swiper.params.autoplay.reverseDirection) {
          if (swiper.params.loop) {
            swiper.loopFix();
            autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
            emit('autoplay');
          } else if (!swiper.isBeginning) {
            autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
            emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
            emit('autoplay');
          } else {
            stop();
          }
        } else if (swiper.params.loop) {
          swiper.loopFix();
          autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
          emit('autoplay');
        } else if (!swiper.isEnd) {
          autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
          emit('autoplay');
        } else if (!swiper.params.autoplay.stopOnLastSlide) {
          autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
          emit('autoplay');
        } else {
          stop();
        }

        if (swiper.params.cssMode && swiper.autoplay.running) run();else if (autoplayResult === false) {
          run();
        }
      }, delay);
    }

    function start() {
      if (typeof timeout !== 'undefined') return false;
      if (swiper.autoplay.running) return false;
      swiper.autoplay.running = true;
      emit('autoplayStart');
      run();
      return true;
    }

    function stop() {
      if (!swiper.autoplay.running) return false;
      if (typeof timeout === 'undefined') return false;

      if (timeout) {
        clearTimeout(timeout);
        timeout = undefined;
      }

      swiper.autoplay.running = false;
      emit('autoplayStop');
      return true;
    }

    function pause(speed) {
      if (!swiper.autoplay.running) return;
      if (swiper.autoplay.paused) return;
      if (timeout) clearTimeout(timeout);
      swiper.autoplay.paused = true;

      if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
        swiper.autoplay.paused = false;
        run();
      } else {
        ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
          swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
        });
      }
    }

    function onVisibilityChange() {
      var document = getDocument();

      if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
        pause();
      }

      if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
        run();
        swiper.autoplay.paused = false;
      }
    }

    function onTransitionEnd(e) {
      if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
      if (e.target !== swiper.$wrapperEl[0]) return;
      ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
        swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
      });
      swiper.autoplay.paused = false;

      if (!swiper.autoplay.running) {
        stop();
      } else {
        run();
      }
    }

    function onMouseEnter() {
      if (swiper.params.autoplay.disableOnInteraction) {
        stop();
      } else {
        pause();
      }

      ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
        swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
      });
    }

    function onMouseLeave() {
      if (swiper.params.autoplay.disableOnInteraction) {
        return;
      }

      swiper.autoplay.paused = false;
      run();
    }

    function attachMouseEvents() {
      if (swiper.params.autoplay.pauseOnMouseEnter) {
        swiper.$el.on('mouseenter', onMouseEnter);
        swiper.$el.on('mouseleave', onMouseLeave);
      }
    }

    function detachMouseEvents() {
      swiper.$el.off('mouseenter', onMouseEnter);
      swiper.$el.off('mouseleave', onMouseLeave);
    }

    on('init', function () {
      if (swiper.params.autoplay.enabled) {
        start();

        var _document3 = getDocument();

        _document3.addEventListener('visibilitychange', onVisibilityChange);

        attachMouseEvents();
      }
    });
    on('beforeTransitionStart', function (_s, speed, internal) {
      if (swiper.autoplay.running) {
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.pause(speed);
        } else {
          stop();
        }
      }
    });
    on('sliderFirstMove', function () {
      if (swiper.autoplay.running) {
        if (swiper.params.autoplay.disableOnInteraction) {
          stop();
        } else {
          pause();
        }
      }
    });
    on('touchEnd', function () {
      if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
        run();
      }
    });
    on('destroy', function () {
      detachMouseEvents();

      if (swiper.autoplay.running) {
        stop();
      }

      var document = getDocument();
      document.removeEventListener('visibilitychange', onVisibilityChange);
    });
    Object.assign(swiper.autoplay, {
      pause: pause,
      run: run,
      start: start,
      stop: stop
    });
  } // Swiper Class


  var modules = [Navigation, Pagination, Lazy, Controller, Autoplay];
  Swiper.use(modules);
  return Swiper;
});
/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */


!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Vue = t();
}(void 0, function () {
  "use strict";

  var e = Object.freeze({});

  function t(e) {
    return null == e;
  }

  function n(e) {
    return null != e;
  }

  function r(e) {
    return !0 === e;
  }

  function i(e) {
    return "string" == typeof e || "number" == typeof e || "symbol" == _typeof2(e) || "boolean" == typeof e;
  }

  function o(e) {
    return null !== e && "object" == _typeof2(e);
  }

  var a = Object.prototype.toString;

  function s(e) {
    return "[object Object]" === a.call(e);
  }

  function c(e) {
    var t = parseFloat(String(e));
    return t >= 0 && Math.floor(t) === t && isFinite(e);
  }

  function u(e) {
    return n(e) && "function" == typeof e.then && "function" == typeof e.catch;
  }

  function l(e) {
    return null == e ? "" : Array.isArray(e) || s(e) && e.toString === a ? JSON.stringify(e, null, 2) : String(e);
  }

  function f(e) {
    var t = parseFloat(e);
    return isNaN(t) ? e : t;
  }

  function p(e, t) {
    for (var n = Object.create(null), r = e.split(","), i = 0; i < r.length; i++) {
      n[r[i]] = !0;
    }

    return t ? function (e) {
      return n[e.toLowerCase()];
    } : function (e) {
      return n[e];
    };
  }

  var d = p("slot,component", !0),
      v = p("key,ref,slot,slot-scope,is");

  function h(e, t) {
    if (e.length) {
      var n = e.indexOf(t);
      if (n > -1) return e.splice(n, 1);
    }
  }

  var m = Object.prototype.hasOwnProperty;

  function y(e, t) {
    return m.call(e, t);
  }

  function g(e) {
    var t = Object.create(null);
    return function (n) {
      return t[n] || (t[n] = e(n));
    };
  }

  var _ = /-(\w)/g,
      b = g(function (e) {
    return e.replace(_, function (e, t) {
      return t ? t.toUpperCase() : "";
    });
  }),
      $ = g(function (e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
  }),
      w = /\B([A-Z])/g,
      C = g(function (e) {
    return e.replace(w, "-$1").toLowerCase();
  });
  var x = Function.prototype.bind ? function (e, t) {
    return e.bind(t);
  } : function (e, t) {
    function n(n) {
      var r = arguments.length;
      return r ? r > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t);
    }

    return n._length = e.length, n;
  };

  function k(e, t) {
    t = t || 0;

    for (var n = e.length - t, r = new Array(n); n--;) {
      r[n] = e[n + t];
    }

    return r;
  }

  function A(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }

    return e;
  }

  function O(e) {
    for (var t = {}, n = 0; n < e.length; n++) {
      e[n] && A(t, e[n]);
    }

    return t;
  }

  function S(e, t, n) {}

  var T = function T(e, t, n) {
    return !1;
  },
      E = function E(e) {
    return e;
  };

  function N(e, t) {
    if (e === t) return !0;
    var n = o(e),
        r = o(t);
    if (!n || !r) return !n && !r && String(e) === String(t);

    try {
      var i = Array.isArray(e),
          a = Array.isArray(t);
      if (i && a) return e.length === t.length && e.every(function (e, n) {
        return N(e, t[n]);
      });
      if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
      if (i || a) return !1;
      var s = Object.keys(e),
          c = Object.keys(t);
      return s.length === c.length && s.every(function (n) {
        return N(e[n], t[n]);
      });
    } catch (e) {
      return !1;
    }
  }

  function j(e, t) {
    for (var n = 0; n < e.length; n++) {
      if (N(e[n], t)) return n;
    }

    return -1;
  }

  function D(e) {
    var t = !1;
    return function () {
      t || (t = !0, e.apply(this, arguments));
    };
  }

  var L = "data-server-rendered",
      M = ["component", "directive", "filter"],
      I = ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated", "errorCaptured", "serverPrefetch"],
      F = {
    optionMergeStrategies: Object.create(null),
    silent: !1,
    productionTip: !1,
    devtools: !1,
    performance: !1,
    errorHandler: null,
    warnHandler: null,
    ignoredElements: [],
    keyCodes: Object.create(null),
    isReservedTag: T,
    isReservedAttr: T,
    isUnknownElement: T,
    getTagNamespace: S,
    parsePlatformTagName: E,
    mustUseProp: T,
    async: !0,
    _lifecycleHooks: I
  },
      P = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

  function R(e, t, n, r) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: !!r,
      writable: !0,
      configurable: !0
    });
  }

  var H = new RegExp("[^" + P.source + ".$_\\d]");
  var B,
      U = ("__proto__" in {}),
      z = "undefined" != typeof window,
      V = "undefined" != typeof WXEnvironment && !!WXEnvironment.platform,
      K = V && WXEnvironment.platform.toLowerCase(),
      J = z && window.navigator.userAgent.toLowerCase(),
      q = J && /msie|trident/.test(J),
      W = J && J.indexOf("msie 9.0") > 0,
      Z = J && J.indexOf("edge/") > 0,
      G = (J && J.indexOf("android"), J && /iphone|ipad|ipod|ios/.test(J) || "ios" === K),
      X = (J && /chrome\/\d+/.test(J), J && /phantomjs/.test(J), J && J.match(/firefox\/(\d+)/)),
      Y = {}.watch,
      Q = !1;
  if (z) try {
    var ee = {};
    Object.defineProperty(ee, "passive", {
      get: function get() {
        Q = !0;
      }
    }), window.addEventListener("test-passive", null, ee);
  } catch (e) {}

  var te = function te() {
    return void 0 === B && (B = !z && !V && "undefined" != typeof global && global.process && "server" === global.process.env.VUE_ENV), B;
  },
      ne = z && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

  function re(e) {
    return "function" == typeof e && /native code/.test(e.toString());
  }

  var ie,
      oe = "undefined" != typeof Symbol && re(Symbol) && "undefined" != typeof Reflect && re(Reflect.ownKeys);
  ie = "undefined" != typeof Set && re(Set) ? Set : function () {
    function e() {
      this.set = Object.create(null);
    }

    return e.prototype.has = function (e) {
      return !0 === this.set[e];
    }, e.prototype.add = function (e) {
      this.set[e] = !0;
    }, e.prototype.clear = function () {
      this.set = Object.create(null);
    }, e;
  }();

  var ae = S,
      se = 0,
      ce = function ce() {
    this.id = se++, this.subs = [];
  };

  ce.prototype.addSub = function (e) {
    this.subs.push(e);
  }, ce.prototype.removeSub = function (e) {
    h(this.subs, e);
  }, ce.prototype.depend = function () {
    ce.target && ce.target.addDep(this);
  }, ce.prototype.notify = function () {
    for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) {
      e[t].update();
    }
  }, ce.target = null;
  var ue = [];

  function le(e) {
    ue.push(e), ce.target = e;
  }

  function fe() {
    ue.pop(), ce.target = ue[ue.length - 1];
  }

  var pe = function pe(e, t, n, r, i, o, a, s) {
    this.tag = e, this.data = t, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = o, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = t && t.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = s, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
  },
      de = {
    child: {
      configurable: !0
    }
  };

  de.child.get = function () {
    return this.componentInstance;
  }, Object.defineProperties(pe.prototype, de);

  var ve = function ve(e) {
    void 0 === e && (e = "");
    var t = new pe();
    return t.text = e, t.isComment = !0, t;
  };

  function he(e) {
    return new pe(void 0, void 0, void 0, String(e));
  }

  function me(e) {
    var t = new pe(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
    return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.fnContext = e.fnContext, t.fnOptions = e.fnOptions, t.fnScopeId = e.fnScopeId, t.asyncMeta = e.asyncMeta, t.isCloned = !0, t;
  }

  var ye = Array.prototype,
      ge = Object.create(ye);
  ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
    var t = ye[e];
    R(ge, e, function () {
      for (var n = [], r = arguments.length; r--;) {
        n[r] = arguments[r];
      }

      var i,
          o = t.apply(this, n),
          a = this.__ob__;

      switch (e) {
        case "push":
        case "unshift":
          i = n;
          break;

        case "splice":
          i = n.slice(2);
      }

      return i && a.observeArray(i), a.dep.notify(), o;
    });
  });

  var _e = Object.getOwnPropertyNames(ge),
      be = !0;

  function $e(e) {
    be = e;
  }

  var we = function we(e) {
    var t;
    this.value = e, this.dep = new ce(), this.vmCount = 0, R(e, "__ob__", this), Array.isArray(e) ? (U ? (t = ge, e.__proto__ = t) : function (e, t, n) {
      for (var r = 0, i = n.length; r < i; r++) {
        var o = n[r];
        R(e, o, t[o]);
      }
    }(e, ge, _e), this.observeArray(e)) : this.walk(e);
  };

  function Ce(e, t) {
    var n;
    if (o(e) && !(e instanceof pe)) return y(e, "__ob__") && e.__ob__ instanceof we ? n = e.__ob__ : be && !te() && (Array.isArray(e) || s(e)) && Object.isExtensible(e) && !e._isVue && (n = new we(e)), t && n && n.vmCount++, n;
  }

  function xe(e, t, n, r, i) {
    var o = new ce(),
        a = Object.getOwnPropertyDescriptor(e, t);

    if (!a || !1 !== a.configurable) {
      var s = a && a.get,
          c = a && a.set;
      s && !c || 2 !== arguments.length || (n = e[t]);
      var u = !i && Ce(n);
      Object.defineProperty(e, t, {
        enumerable: !0,
        configurable: !0,
        get: function get() {
          var t = s ? s.call(e) : n;
          return ce.target && (o.depend(), u && (u.dep.depend(), Array.isArray(t) && function e(t) {
            for (var n = void 0, r = 0, i = t.length; r < i; r++) {
              (n = t[r]) && n.__ob__ && n.__ob__.dep.depend(), Array.isArray(n) && e(n);
            }
          }(t))), t;
        },
        set: function set(t) {
          var r = s ? s.call(e) : n;
          t === r || t != t && r != r || s && !c || (c ? c.call(e, t) : n = t, u = !i && Ce(t), o.notify());
        }
      });
    }
  }

  function ke(e, t, n) {
    if (Array.isArray(e) && c(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
    if (t in e && !(t in Object.prototype)) return e[t] = n, n;
    var r = e.__ob__;
    return e._isVue || r && r.vmCount ? n : r ? (xe(r.value, t, n), r.dep.notify(), n) : (e[t] = n, n);
  }

  function Ae(e, t) {
    if (Array.isArray(e) && c(t)) e.splice(t, 1);else {
      var n = e.__ob__;
      e._isVue || n && n.vmCount || y(e, t) && (delete e[t], n && n.dep.notify());
    }
  }

  we.prototype.walk = function (e) {
    for (var t = Object.keys(e), n = 0; n < t.length; n++) {
      xe(e, t[n]);
    }
  }, we.prototype.observeArray = function (e) {
    for (var t = 0, n = e.length; t < n; t++) {
      Ce(e[t]);
    }
  };
  var Oe = F.optionMergeStrategies;

  function Se(e, t) {
    if (!t) return e;

    for (var n, r, i, o = oe ? Reflect.ownKeys(t) : Object.keys(t), a = 0; a < o.length; a++) {
      "__ob__" !== (n = o[a]) && (r = e[n], i = t[n], y(e, n) ? r !== i && s(r) && s(i) && Se(r, i) : ke(e, n, i));
    }

    return e;
  }

  function Te(e, t, n) {
    return n ? function () {
      var r = "function" == typeof t ? t.call(n, n) : t,
          i = "function" == typeof e ? e.call(n, n) : e;
      return r ? Se(r, i) : i;
    } : t ? e ? function () {
      return Se("function" == typeof t ? t.call(this, this) : t, "function" == typeof e ? e.call(this, this) : e);
    } : t : e;
  }

  function Ee(e, t) {
    var n = t ? e ? e.concat(t) : Array.isArray(t) ? t : [t] : e;
    return n ? function (e) {
      for (var t = [], n = 0; n < e.length; n++) {
        -1 === t.indexOf(e[n]) && t.push(e[n]);
      }

      return t;
    }(n) : n;
  }

  function Ne(e, t, n, r) {
    var i = Object.create(e || null);
    return t ? A(i, t) : i;
  }

  Oe.data = function (e, t, n) {
    return n ? Te(e, t, n) : t && "function" != typeof t ? e : Te(e, t);
  }, I.forEach(function (e) {
    Oe[e] = Ee;
  }), M.forEach(function (e) {
    Oe[e + "s"] = Ne;
  }), Oe.watch = function (e, t, n, r) {
    if (e === Y && (e = void 0), t === Y && (t = void 0), !t) return Object.create(e || null);
    if (!e) return t;
    var i = {};

    for (var o in A(i, e), t) {
      var a = i[o],
          s = t[o];
      a && !Array.isArray(a) && (a = [a]), i[o] = a ? a.concat(s) : Array.isArray(s) ? s : [s];
    }

    return i;
  }, Oe.props = Oe.methods = Oe.inject = Oe.computed = function (e, t, n, r) {
    if (!e) return t;
    var i = Object.create(null);
    return A(i, e), t && A(i, t), i;
  }, Oe.provide = Te;

  var je = function je(e, t) {
    return void 0 === t ? e : t;
  };

  function De(e, t, n) {
    if ("function" == typeof t && (t = t.options), function (e, t) {
      var n = e.props;

      if (n) {
        var r,
            i,
            o = {};
        if (Array.isArray(n)) for (r = n.length; r--;) {
          "string" == typeof (i = n[r]) && (o[b(i)] = {
            type: null
          });
        } else if (s(n)) for (var a in n) {
          i = n[a], o[b(a)] = s(i) ? i : {
            type: i
          };
        }
        e.props = o;
      }
    }(t), function (e, t) {
      var n = e.inject;

      if (n) {
        var r = e.inject = {};
        if (Array.isArray(n)) for (var i = 0; i < n.length; i++) {
          r[n[i]] = {
            from: n[i]
          };
        } else if (s(n)) for (var o in n) {
          var a = n[o];
          r[o] = s(a) ? A({
            from: o
          }, a) : {
            from: a
          };
        }
      }
    }(t), function (e) {
      var t = e.directives;
      if (t) for (var n in t) {
        var r = t[n];
        "function" == typeof r && (t[n] = {
          bind: r,
          update: r
        });
      }
    }(t), !t._base && (t.extends && (e = De(e, t.extends, n)), t.mixins)) for (var r = 0, i = t.mixins.length; r < i; r++) {
      e = De(e, t.mixins[r], n);
    }
    var o,
        a = {};

    for (o in e) {
      c(o);
    }

    for (o in t) {
      y(e, o) || c(o);
    }

    function c(r) {
      var i = Oe[r] || je;
      a[r] = i(e[r], t[r], n, r);
    }

    return a;
  }

  function Le(e, t, n, r) {
    if ("string" == typeof n) {
      var i = e[t];
      if (y(i, n)) return i[n];
      var o = b(n);
      if (y(i, o)) return i[o];
      var a = $(o);
      return y(i, a) ? i[a] : i[n] || i[o] || i[a];
    }
  }

  function Me(e, t, n, r) {
    var i = t[e],
        o = !y(n, e),
        a = n[e],
        s = Pe(Boolean, i.type);
    if (s > -1) if (o && !y(i, "default")) a = !1;else if ("" === a || a === C(e)) {
      var c = Pe(String, i.type);
      (c < 0 || s < c) && (a = !0);
    }

    if (void 0 === a) {
      a = function (e, t, n) {
        if (!y(t, "default")) return;
        var r = t.default;
        if (e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n]) return e._props[n];
        return "function" == typeof r && "Function" !== Ie(t.type) ? r.call(e) : r;
      }(r, i, e);

      var u = be;
      $e(!0), Ce(a), $e(u);
    }

    return a;
  }

  function Ie(e) {
    var t = e && e.toString().match(/^\s*function (\w+)/);
    return t ? t[1] : "";
  }

  function Fe(e, t) {
    return Ie(e) === Ie(t);
  }

  function Pe(e, t) {
    if (!Array.isArray(t)) return Fe(t, e) ? 0 : -1;

    for (var n = 0, r = t.length; n < r; n++) {
      if (Fe(t[n], e)) return n;
    }

    return -1;
  }

  function Re(e, t, n) {
    le();

    try {
      if (t) for (var r = t; r = r.$parent;) {
        var i = r.$options.errorCaptured;
        if (i) for (var o = 0; o < i.length; o++) {
          try {
            if (!1 === i[o].call(r, e, t, n)) return;
          } catch (e) {
            Be(e, r, "errorCaptured hook");
          }
        }
      }
      Be(e, t, n);
    } finally {
      fe();
    }
  }

  function He(e, t, n, r, i) {
    var o;

    try {
      (o = n ? e.apply(t, n) : e.call(t)) && !o._isVue && u(o) && !o._handled && (o.catch(function (e) {
        return Re(e, r, i + " (Promise/async)");
      }), o._handled = !0);
    } catch (e) {
      Re(e, r, i);
    }

    return o;
  }

  function Be(e, t, n) {
    if (F.errorHandler) try {
      return F.errorHandler.call(null, e, t, n);
    } catch (t) {
      t !== e && Ue(t, null, "config.errorHandler");
    }
    Ue(e, t, n);
  }

  function Ue(e, t, n) {
    if (!z && !V || "undefined" == typeof console) throw e;
    console.error(e);
  }

  var ze,
      Ve = !1,
      Ke = [],
      Je = !1;

  function qe() {
    Je = !1;
    var e = Ke.slice(0);
    Ke.length = 0;

    for (var t = 0; t < e.length; t++) {
      e[t]();
    }
  }

  if ("undefined" != typeof Promise && re(Promise)) {
    var We = Promise.resolve();
    ze = function ze() {
      We.then(qe), G && setTimeout(S);
    }, Ve = !0;
  } else if (q || "undefined" == typeof MutationObserver || !re(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) ze = "undefined" != typeof setImmediate && re(setImmediate) ? function () {
    setImmediate(qe);
  } : function () {
    setTimeout(qe, 0);
  };else {
    var Ze = 1,
        Ge = new MutationObserver(qe),
        Xe = document.createTextNode(String(Ze));
    Ge.observe(Xe, {
      characterData: !0
    }), ze = function ze() {
      Ze = (Ze + 1) % 2, Xe.data = String(Ze);
    }, Ve = !0;
  }

  function Ye(e, t) {
    var n;
    if (Ke.push(function () {
      if (e) try {
        e.call(t);
      } catch (e) {
        Re(e, t, "nextTick");
      } else n && n(t);
    }), Je || (Je = !0, ze()), !e && "undefined" != typeof Promise) return new Promise(function (e) {
      n = e;
    });
  }

  var Qe = new ie();

  function et(e) {
    !function e(t, n) {
      var r, i;
      var a = Array.isArray(t);
      if (!a && !o(t) || Object.isFrozen(t) || t instanceof pe) return;

      if (t.__ob__) {
        var s = t.__ob__.dep.id;
        if (n.has(s)) return;
        n.add(s);
      }

      if (a) for (r = t.length; r--;) {
        e(t[r], n);
      } else for (i = Object.keys(t), r = i.length; r--;) {
        e(t[i[r]], n);
      }
    }(e, Qe), Qe.clear();
  }

  var tt = g(function (e) {
    var t = "&" === e.charAt(0),
        n = "~" === (e = t ? e.slice(1) : e).charAt(0),
        r = "!" === (e = n ? e.slice(1) : e).charAt(0);
    return {
      name: e = r ? e.slice(1) : e,
      once: n,
      capture: r,
      passive: t
    };
  });

  function nt(e, t) {
    function n() {
      var e = arguments,
          r = n.fns;
      if (!Array.isArray(r)) return He(r, null, arguments, t, "v-on handler");

      for (var i = r.slice(), o = 0; o < i.length; o++) {
        He(i[o], null, e, t, "v-on handler");
      }
    }

    return n.fns = e, n;
  }

  function rt(e, n, i, o, a, s) {
    var c, u, l, f;

    for (c in e) {
      u = e[c], l = n[c], f = tt(c), t(u) || (t(l) ? (t(u.fns) && (u = e[c] = nt(u, s)), r(f.once) && (u = e[c] = a(f.name, u, f.capture)), i(f.name, u, f.capture, f.passive, f.params)) : u !== l && (l.fns = u, e[c] = l));
    }

    for (c in n) {
      t(e[c]) && o((f = tt(c)).name, n[c], f.capture);
    }
  }

  function it(e, i, o) {
    var a;
    e instanceof pe && (e = e.data.hook || (e.data.hook = {}));
    var s = e[i];

    function c() {
      o.apply(this, arguments), h(a.fns, c);
    }

    t(s) ? a = nt([c]) : n(s.fns) && r(s.merged) ? (a = s).fns.push(c) : a = nt([s, c]), a.merged = !0, e[i] = a;
  }

  function ot(e, t, r, i, o) {
    if (n(t)) {
      if (y(t, r)) return e[r] = t[r], o || delete t[r], !0;
      if (y(t, i)) return e[r] = t[i], o || delete t[i], !0;
    }

    return !1;
  }

  function at(e) {
    return i(e) ? [he(e)] : Array.isArray(e) ? function e(o, a) {
      var s = [];
      var c, u, l, f;

      for (c = 0; c < o.length; c++) {
        t(u = o[c]) || "boolean" == typeof u || (l = s.length - 1, f = s[l], Array.isArray(u) ? u.length > 0 && (st((u = e(u, (a || "") + "_" + c))[0]) && st(f) && (s[l] = he(f.text + u[0].text), u.shift()), s.push.apply(s, u)) : i(u) ? st(f) ? s[l] = he(f.text + u) : "" !== u && s.push(he(u)) : st(u) && st(f) ? s[l] = he(f.text + u.text) : (r(o._isVList) && n(u.tag) && t(u.key) && n(a) && (u.key = "__vlist" + a + "_" + c + "__"), s.push(u)));
      }

      return s;
    }(e) : void 0;
  }

  function st(e) {
    return n(e) && n(e.text) && !1 === e.isComment;
  }

  function ct(e, t) {
    if (e) {
      for (var n = Object.create(null), r = oe ? Reflect.ownKeys(e) : Object.keys(e), i = 0; i < r.length; i++) {
        var o = r[i];

        if ("__ob__" !== o) {
          for (var a = e[o].from, s = t; s;) {
            if (s._provided && y(s._provided, a)) {
              n[o] = s._provided[a];
              break;
            }

            s = s.$parent;
          }

          if (!s && "default" in e[o]) {
            var c = e[o].default;
            n[o] = "function" == typeof c ? c.call(t) : c;
          }
        }
      }

      return n;
    }
  }

  function ut(e, t) {
    if (!e || !e.length) return {};

    for (var n = {}, r = 0, i = e.length; r < i; r++) {
      var o = e[r],
          a = o.data;
      if (a && a.attrs && a.attrs.slot && delete a.attrs.slot, o.context !== t && o.fnContext !== t || !a || null == a.slot) (n.default || (n.default = [])).push(o);else {
        var s = a.slot,
            c = n[s] || (n[s] = []);
        "template" === o.tag ? c.push.apply(c, o.children || []) : c.push(o);
      }
    }

    for (var u in n) {
      n[u].every(lt) && delete n[u];
    }

    return n;
  }

  function lt(e) {
    return e.isComment && !e.asyncFactory || " " === e.text;
  }

  function ft(t, n, r) {
    var i,
        o = Object.keys(n).length > 0,
        a = t ? !!t.$stable : !o,
        s = t && t.$key;

    if (t) {
      if (t._normalized) return t._normalized;
      if (a && r && r !== e && s === r.$key && !o && !r.$hasNormal) return r;

      for (var c in i = {}, t) {
        t[c] && "$" !== c[0] && (i[c] = pt(n, c, t[c]));
      }
    } else i = {};

    for (var u in n) {
      u in i || (i[u] = dt(n, u));
    }

    return t && Object.isExtensible(t) && (t._normalized = i), R(i, "$stable", a), R(i, "$key", s), R(i, "$hasNormal", o), i;
  }

  function pt(e, t, n) {
    var r = function r() {
      var e = arguments.length ? n.apply(null, arguments) : n({});
      return (e = e && "object" == _typeof2(e) && !Array.isArray(e) ? [e] : at(e)) && (0 === e.length || 1 === e.length && e[0].isComment) ? void 0 : e;
    };

    return n.proxy && Object.defineProperty(e, t, {
      get: r,
      enumerable: !0,
      configurable: !0
    }), r;
  }

  function dt(e, t) {
    return function () {
      return e[t];
    };
  }

  function vt(e, t) {
    var r, i, a, s, c;
    if (Array.isArray(e) || "string" == typeof e) for (r = new Array(e.length), i = 0, a = e.length; i < a; i++) {
      r[i] = t(e[i], i);
    } else if ("number" == typeof e) for (r = new Array(e), i = 0; i < e; i++) {
      r[i] = t(i + 1, i);
    } else if (o(e)) if (oe && e[Symbol.iterator]) {
      r = [];

      for (var u = e[Symbol.iterator](), l = u.next(); !l.done;) {
        r.push(t(l.value, r.length)), l = u.next();
      }
    } else for (s = Object.keys(e), r = new Array(s.length), i = 0, a = s.length; i < a; i++) {
      c = s[i], r[i] = t(e[c], c, i);
    }
    return n(r) || (r = []), r._isVList = !0, r;
  }

  function ht(e, t, n, r) {
    var i,
        o = this.$scopedSlots[e];
    o ? (n = n || {}, r && (n = A(A({}, r), n)), i = o(n) || t) : i = this.$slots[e] || t;
    var a = n && n.slot;
    return a ? this.$createElement("template", {
      slot: a
    }, i) : i;
  }

  function mt(e) {
    return Le(this.$options, "filters", e) || E;
  }

  function yt(e, t) {
    return Array.isArray(e) ? -1 === e.indexOf(t) : e !== t;
  }

  function gt(e, t, n, r, i) {
    var o = F.keyCodes[t] || n;
    return i && r && !F.keyCodes[t] ? yt(i, r) : o ? yt(o, e) : r ? C(r) !== t : void 0;
  }

  function _t(e, t, n, r, i) {
    if (n) if (o(n)) {
      var a;
      Array.isArray(n) && (n = O(n));

      var s = function s(o) {
        if ("class" === o || "style" === o || v(o)) a = e;else {
          var s = e.attrs && e.attrs.type;
          a = r || F.mustUseProp(t, s, o) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
        }
        var c = b(o),
            u = C(o);
        c in a || u in a || (a[o] = n[o], i && ((e.on || (e.on = {}))["update:" + o] = function (e) {
          n[o] = e;
        }));
      };

      for (var c in n) {
        s(c);
      }
    } else ;
    return e;
  }

  function bt(e, t) {
    var n = this._staticTrees || (this._staticTrees = []),
        r = n[e];
    return r && !t ? r : (wt(r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, null, this), "__static__" + e, !1), r);
  }

  function $t(e, t, n) {
    return wt(e, "__once__" + t + (n ? "_" + n : ""), !0), e;
  }

  function wt(e, t, n) {
    if (Array.isArray(e)) for (var r = 0; r < e.length; r++) {
      e[r] && "string" != typeof e[r] && Ct(e[r], t + "_" + r, n);
    } else Ct(e, t, n);
  }

  function Ct(e, t, n) {
    e.isStatic = !0, e.key = t, e.isOnce = n;
  }

  function xt(e, t) {
    if (t) if (s(t)) {
      var n = e.on = e.on ? A({}, e.on) : {};

      for (var r in t) {
        var i = n[r],
            o = t[r];
        n[r] = i ? [].concat(i, o) : o;
      }
    } else ;
    return e;
  }

  function kt(e, t, n, r) {
    t = t || {
      $stable: !n
    };

    for (var i = 0; i < e.length; i++) {
      var o = e[i];
      Array.isArray(o) ? kt(o, t, n) : o && (o.proxy && (o.fn.proxy = !0), t[o.key] = o.fn);
    }

    return r && (t.$key = r), t;
  }

  function At(e, t) {
    for (var n = 0; n < t.length; n += 2) {
      var r = t[n];
      "string" == typeof r && r && (e[t[n]] = t[n + 1]);
    }

    return e;
  }

  function Ot(e, t) {
    return "string" == typeof e ? t + e : e;
  }

  function St(e) {
    e._o = $t, e._n = f, e._s = l, e._l = vt, e._t = ht, e._q = N, e._i = j, e._m = bt, e._f = mt, e._k = gt, e._b = _t, e._v = he, e._e = ve, e._u = kt, e._g = xt, e._d = At, e._p = Ot;
  }

  function Tt(t, n, i, o, a) {
    var s,
        c = this,
        u = a.options;
    y(o, "_uid") ? (s = Object.create(o))._original = o : (s = o, o = o._original);
    var l = r(u._compiled),
        f = !l;
    this.data = t, this.props = n, this.children = i, this.parent = o, this.listeners = t.on || e, this.injections = ct(u.inject, o), this.slots = function () {
      return c.$slots || ft(t.scopedSlots, c.$slots = ut(i, o)), c.$slots;
    }, Object.defineProperty(this, "scopedSlots", {
      enumerable: !0,
      get: function get() {
        return ft(t.scopedSlots, this.slots());
      }
    }), l && (this.$options = u, this.$slots = this.slots(), this.$scopedSlots = ft(t.scopedSlots, this.$slots)), u._scopeId ? this._c = function (e, t, n, r) {
      var i = Pt(s, e, t, n, r, f);
      return i && !Array.isArray(i) && (i.fnScopeId = u._scopeId, i.fnContext = o), i;
    } : this._c = function (e, t, n, r) {
      return Pt(s, e, t, n, r, f);
    };
  }

  function Et(e, t, n, r, i) {
    var o = me(e);
    return o.fnContext = n, o.fnOptions = r, t.slot && ((o.data || (o.data = {})).slot = t.slot), o;
  }

  function Nt(e, t) {
    for (var n in t) {
      e[b(n)] = t[n];
    }
  }

  St(Tt.prototype);
  var jt = {
    init: function init(e, t) {
      if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
        var r = e;
        jt.prepatch(r, r);
      } else {
        (e.componentInstance = function (e, t) {
          var r = {
            _isComponent: !0,
            _parentVnode: e,
            parent: t
          },
              i = e.data.inlineTemplate;
          n(i) && (r.render = i.render, r.staticRenderFns = i.staticRenderFns);
          return new e.componentOptions.Ctor(r);
        }(e, Wt)).$mount(t ? e.elm : void 0, t);
      }
    },
    prepatch: function prepatch(t, n) {
      var r = n.componentOptions;
      !function (t, n, r, i, o) {
        var a = i.data.scopedSlots,
            s = t.$scopedSlots,
            c = !!(a && !a.$stable || s !== e && !s.$stable || a && t.$scopedSlots.$key !== a.$key),
            u = !!(o || t.$options._renderChildren || c);
        t.$options._parentVnode = i, t.$vnode = i, t._vnode && (t._vnode.parent = i);

        if (t.$options._renderChildren = o, t.$attrs = i.data.attrs || e, t.$listeners = r || e, n && t.$options.props) {
          $e(!1);

          for (var l = t._props, f = t.$options._propKeys || [], p = 0; p < f.length; p++) {
            var d = f[p],
                v = t.$options.props;
            l[d] = Me(d, v, n, t);
          }

          $e(!0), t.$options.propsData = n;
        }

        r = r || e;
        var h = t.$options._parentListeners;
        t.$options._parentListeners = r, qt(t, r, h), u && (t.$slots = ut(o, i.context), t.$forceUpdate());
      }(n.componentInstance = t.componentInstance, r.propsData, r.listeners, n, r.children);
    },
    insert: function insert(e) {
      var t,
          n = e.context,
          r = e.componentInstance;
      r._isMounted || (r._isMounted = !0, Yt(r, "mounted")), e.data.keepAlive && (n._isMounted ? ((t = r)._inactive = !1, en.push(t)) : Xt(r, !0));
    },
    destroy: function destroy(e) {
      var t = e.componentInstance;
      t._isDestroyed || (e.data.keepAlive ? function e(t, n) {
        if (n && (t._directInactive = !0, Gt(t))) return;

        if (!t._inactive) {
          t._inactive = !0;

          for (var r = 0; r < t.$children.length; r++) {
            e(t.$children[r]);
          }

          Yt(t, "deactivated");
        }
      }(t, !0) : t.$destroy());
    }
  },
      Dt = Object.keys(jt);

  function Lt(i, a, s, c, l) {
    if (!t(i)) {
      var f = s.$options._base;

      if (o(i) && (i = f.extend(i)), "function" == typeof i) {
        var p;
        if (t(i.cid) && void 0 === (i = function (e, i) {
          if (r(e.error) && n(e.errorComp)) return e.errorComp;
          if (n(e.resolved)) return e.resolved;
          var a = Ht;
          a && n(e.owners) && -1 === e.owners.indexOf(a) && e.owners.push(a);
          if (r(e.loading) && n(e.loadingComp)) return e.loadingComp;

          if (a && !n(e.owners)) {
            var s = e.owners = [a],
                c = !0,
                l = null,
                f = null;
            a.$on("hook:destroyed", function () {
              return h(s, a);
            });

            var p = function p(e) {
              for (var t = 0, n = s.length; t < n; t++) {
                s[t].$forceUpdate();
              }

              e && (s.length = 0, null !== l && (clearTimeout(l), l = null), null !== f && (clearTimeout(f), f = null));
            },
                d = D(function (t) {
              e.resolved = Bt(t, i), c ? s.length = 0 : p(!0);
            }),
                v = D(function (t) {
              n(e.errorComp) && (e.error = !0, p(!0));
            }),
                m = e(d, v);

            return o(m) && (u(m) ? t(e.resolved) && m.then(d, v) : u(m.component) && (m.component.then(d, v), n(m.error) && (e.errorComp = Bt(m.error, i)), n(m.loading) && (e.loadingComp = Bt(m.loading, i), 0 === m.delay ? e.loading = !0 : l = setTimeout(function () {
              l = null, t(e.resolved) && t(e.error) && (e.loading = !0, p(!1));
            }, m.delay || 200)), n(m.timeout) && (f = setTimeout(function () {
              f = null, t(e.resolved) && v(null);
            }, m.timeout)))), c = !1, e.loading ? e.loadingComp : e.resolved;
          }
        }(p = i, f))) return function (e, t, n, r, i) {
          var o = ve();
          return o.asyncFactory = e, o.asyncMeta = {
            data: t,
            context: n,
            children: r,
            tag: i
          }, o;
        }(p, a, s, c, l);
        a = a || {}, $n(i), n(a.model) && function (e, t) {
          var r = e.model && e.model.prop || "value",
              i = e.model && e.model.event || "input";
          (t.attrs || (t.attrs = {}))[r] = t.model.value;
          var o = t.on || (t.on = {}),
              a = o[i],
              s = t.model.callback;
          n(a) ? (Array.isArray(a) ? -1 === a.indexOf(s) : a !== s) && (o[i] = [s].concat(a)) : o[i] = s;
        }(i.options, a);

        var d = function (e, r, i) {
          var o = r.options.props;

          if (!t(o)) {
            var a = {},
                s = e.attrs,
                c = e.props;
            if (n(s) || n(c)) for (var u in o) {
              var l = C(u);
              ot(a, c, u, l, !0) || ot(a, s, u, l, !1);
            }
            return a;
          }
        }(a, i);

        if (r(i.options.functional)) return function (t, r, i, o, a) {
          var s = t.options,
              c = {},
              u = s.props;
          if (n(u)) for (var l in u) {
            c[l] = Me(l, u, r || e);
          } else n(i.attrs) && Nt(c, i.attrs), n(i.props) && Nt(c, i.props);
          var f = new Tt(i, c, a, o, t),
              p = s.render.call(null, f._c, f);
          if (p instanceof pe) return Et(p, i, f.parent, s);

          if (Array.isArray(p)) {
            for (var d = at(p) || [], v = new Array(d.length), h = 0; h < d.length; h++) {
              v[h] = Et(d[h], i, f.parent, s);
            }

            return v;
          }
        }(i, d, a, s, c);
        var v = a.on;

        if (a.on = a.nativeOn, r(i.options.abstract)) {
          var m = a.slot;
          a = {}, m && (a.slot = m);
        }

        !function (e) {
          for (var t = e.hook || (e.hook = {}), n = 0; n < Dt.length; n++) {
            var r = Dt[n],
                i = t[r],
                o = jt[r];
            i === o || i && i._merged || (t[r] = i ? Mt(o, i) : o);
          }
        }(a);
        var y = i.options.name || l;
        return new pe("vue-component-" + i.cid + (y ? "-" + y : ""), a, void 0, void 0, void 0, s, {
          Ctor: i,
          propsData: d,
          listeners: v,
          tag: l,
          children: c
        }, p);
      }
    }
  }

  function Mt(e, t) {
    var n = function n(_n3, r) {
      e(_n3, r), t(_n3, r);
    };

    return n._merged = !0, n;
  }

  var It = 1,
      Ft = 2;

  function Pt(e, a, s, c, u, l) {
    return (Array.isArray(s) || i(s)) && (u = c, c = s, s = void 0), r(l) && (u = Ft), function (e, i, a, s, c) {
      if (n(a) && n(a.__ob__)) return ve();
      n(a) && n(a.is) && (i = a.is);
      if (!i) return ve();
      Array.isArray(s) && "function" == typeof s[0] && ((a = a || {}).scopedSlots = {
        default: s[0]
      }, s.length = 0);
      c === Ft ? s = at(s) : c === It && (s = function (e) {
        for (var t = 0; t < e.length; t++) {
          if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
        }

        return e;
      }(s));
      var u, l;

      if ("string" == typeof i) {
        var f;
        l = e.$vnode && e.$vnode.ns || F.getTagNamespace(i), u = F.isReservedTag(i) ? new pe(F.parsePlatformTagName(i), a, s, void 0, void 0, e) : a && a.pre || !n(f = Le(e.$options, "components", i)) ? new pe(i, a, s, void 0, void 0, e) : Lt(f, a, e, s, i);
      } else u = Lt(i, a, e, s);

      return Array.isArray(u) ? u : n(u) ? (n(l) && function e(i, o, a) {
        i.ns = o;
        "foreignObject" === i.tag && (o = void 0, a = !0);
        if (n(i.children)) for (var s = 0, c = i.children.length; s < c; s++) {
          var u = i.children[s];
          n(u.tag) && (t(u.ns) || r(a) && "svg" !== u.tag) && e(u, o, a);
        }
      }(u, l), n(a) && function (e) {
        o(e.style) && et(e.style);
        o(e.class) && et(e.class);
      }(a), u) : ve();
    }(e, a, s, c, u);
  }

  var Rt,
      Ht = null;

  function Bt(e, t) {
    return (e.__esModule || oe && "Module" === e[Symbol.toStringTag]) && (e = e.default), o(e) ? t.extend(e) : e;
  }

  function Ut(e) {
    return e.isComment && e.asyncFactory;
  }

  function zt(e) {
    if (Array.isArray(e)) for (var t = 0; t < e.length; t++) {
      var r = e[t];
      if (n(r) && (n(r.componentOptions) || Ut(r))) return r;
    }
  }

  function Vt(e, t) {
    Rt.$on(e, t);
  }

  function Kt(e, t) {
    Rt.$off(e, t);
  }

  function Jt(e, t) {
    var n = Rt;
    return function r() {
      null !== t.apply(null, arguments) && n.$off(e, r);
    };
  }

  function qt(e, t, n) {
    Rt = e, rt(t, n || {}, Vt, Kt, Jt, e), Rt = void 0;
  }

  var Wt = null;

  function Zt(e) {
    var t = Wt;
    return Wt = e, function () {
      Wt = t;
    };
  }

  function Gt(e) {
    for (; e && (e = e.$parent);) {
      if (e._inactive) return !0;
    }

    return !1;
  }

  function Xt(e, t) {
    if (t) {
      if (e._directInactive = !1, Gt(e)) return;
    } else if (e._directInactive) return;

    if (e._inactive || null === e._inactive) {
      e._inactive = !1;

      for (var n = 0; n < e.$children.length; n++) {
        Xt(e.$children[n]);
      }

      Yt(e, "activated");
    }
  }

  function Yt(e, t) {
    le();
    var n = e.$options[t],
        r = t + " hook";
    if (n) for (var i = 0, o = n.length; i < o; i++) {
      He(n[i], e, null, e, r);
    }
    e._hasHookEvent && e.$emit("hook:" + t), fe();
  }

  var Qt = [],
      en = [],
      tn = {},
      nn = !1,
      rn = !1,
      on = 0;
  var an = 0,
      sn = Date.now;

  if (z && !q) {
    var cn = window.performance;
    cn && "function" == typeof cn.now && sn() > document.createEvent("Event").timeStamp && (sn = function sn() {
      return cn.now();
    });
  }

  function un() {
    var e, t;

    for (an = sn(), rn = !0, Qt.sort(function (e, t) {
      return e.id - t.id;
    }), on = 0; on < Qt.length; on++) {
      (e = Qt[on]).before && e.before(), t = e.id, tn[t] = null, e.run();
    }

    var n = en.slice(),
        r = Qt.slice();
    on = Qt.length = en.length = 0, tn = {}, nn = rn = !1, function (e) {
      for (var t = 0; t < e.length; t++) {
        e[t]._inactive = !0, Xt(e[t], !0);
      }
    }(n), function (e) {
      var t = e.length;

      for (; t--;) {
        var n = e[t],
            r = n.vm;
        r._watcher === n && r._isMounted && !r._isDestroyed && Yt(r, "updated");
      }
    }(r), ne && F.devtools && ne.emit("flush");
  }

  var ln = 0,
      fn = function fn(e, t, n, r, i) {
    this.vm = e, i && (e._watcher = this), e._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync, this.before = r.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++ln, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ie(), this.newDepIds = new ie(), this.expression = "", "function" == typeof t ? this.getter = t : (this.getter = function (e) {
      if (!H.test(e)) {
        var t = e.split(".");
        return function (e) {
          for (var n = 0; n < t.length; n++) {
            if (!e) return;
            e = e[t[n]];
          }

          return e;
        };
      }
    }(t), this.getter || (this.getter = S)), this.value = this.lazy ? void 0 : this.get();
  };

  fn.prototype.get = function () {
    var e;
    le(this);
    var t = this.vm;

    try {
      e = this.getter.call(t, t);
    } catch (e) {
      if (!this.user) throw e;
      Re(e, t, 'getter for watcher "' + this.expression + '"');
    } finally {
      this.deep && et(e), fe(), this.cleanupDeps();
    }

    return e;
  }, fn.prototype.addDep = function (e) {
    var t = e.id;
    this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
  }, fn.prototype.cleanupDeps = function () {
    for (var e = this.deps.length; e--;) {
      var t = this.deps[e];
      this.newDepIds.has(t.id) || t.removeSub(this);
    }

    var n = this.depIds;
    this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, this.newDeps = n, this.newDeps.length = 0;
  }, fn.prototype.update = function () {
    this.lazy ? this.dirty = !0 : this.sync ? this.run() : function (e) {
      var t = e.id;

      if (null == tn[t]) {
        if (tn[t] = !0, rn) {
          for (var n = Qt.length - 1; n > on && Qt[n].id > e.id;) {
            n--;
          }

          Qt.splice(n + 1, 0, e);
        } else Qt.push(e);

        nn || (nn = !0, Ye(un));
      }
    }(this);
  }, fn.prototype.run = function () {
    if (this.active) {
      var e = this.get();

      if (e !== this.value || o(e) || this.deep) {
        var t = this.value;
        if (this.value = e, this.user) try {
          this.cb.call(this.vm, e, t);
        } catch (e) {
          Re(e, this.vm, 'callback for watcher "' + this.expression + '"');
        } else this.cb.call(this.vm, e, t);
      }
    }
  }, fn.prototype.evaluate = function () {
    this.value = this.get(), this.dirty = !1;
  }, fn.prototype.depend = function () {
    for (var e = this.deps.length; e--;) {
      this.deps[e].depend();
    }
  }, fn.prototype.teardown = function () {
    if (this.active) {
      this.vm._isBeingDestroyed || h(this.vm._watchers, this);

      for (var e = this.deps.length; e--;) {
        this.deps[e].removeSub(this);
      }

      this.active = !1;
    }
  };
  var pn = {
    enumerable: !0,
    configurable: !0,
    get: S,
    set: S
  };

  function dn(e, t, n) {
    pn.get = function () {
      return this[t][n];
    }, pn.set = function (e) {
      this[t][n] = e;
    }, Object.defineProperty(e, n, pn);
  }

  function vn(e) {
    e._watchers = [];
    var t = e.$options;
    t.props && function (e, t) {
      var n = e.$options.propsData || {},
          r = e._props = {},
          i = e.$options._propKeys = [];
      e.$parent && $e(!1);

      var o = function o(_o2) {
        i.push(_o2);
        var a = Me(_o2, t, n, e);
        xe(r, _o2, a), _o2 in e || dn(e, "_props", _o2);
      };

      for (var a in t) {
        o(a);
      }

      $e(!0);
    }(e, t.props), t.methods && function (e, t) {
      e.$options.props;

      for (var n in t) {
        e[n] = "function" != typeof t[n] ? S : x(t[n], e);
      }
    }(e, t.methods), t.data ? function (e) {
      var t = e.$options.data;
      s(t = e._data = "function" == typeof t ? function (e, t) {
        le();

        try {
          return e.call(t, t);
        } catch (e) {
          return Re(e, t, "data()"), {};
        } finally {
          fe();
        }
      }(t, e) : t || {}) || (t = {});
      var n = Object.keys(t),
          r = e.$options.props,
          i = (e.$options.methods, n.length);

      for (; i--;) {
        var o = n[i];
        r && y(r, o) || (a = void 0, 36 !== (a = (o + "").charCodeAt(0)) && 95 !== a && dn(e, "_data", o));
      }

      var a;
      Ce(t, !0);
    }(e) : Ce(e._data = {}, !0), t.computed && function (e, t) {
      var n = e._computedWatchers = Object.create(null),
          r = te();

      for (var i in t) {
        var o = t[i],
            a = "function" == typeof o ? o : o.get;
        r || (n[i] = new fn(e, a || S, S, hn)), i in e || mn(e, i, o);
      }
    }(e, t.computed), t.watch && t.watch !== Y && function (e, t) {
      for (var n in t) {
        var r = t[n];
        if (Array.isArray(r)) for (var i = 0; i < r.length; i++) {
          _n(e, n, r[i]);
        } else _n(e, n, r);
      }
    }(e, t.watch);
  }

  var hn = {
    lazy: !0
  };

  function mn(e, t, n) {
    var r = !te();
    "function" == typeof n ? (pn.get = r ? yn(t) : gn(n), pn.set = S) : (pn.get = n.get ? r && !1 !== n.cache ? yn(t) : gn(n.get) : S, pn.set = n.set || S), Object.defineProperty(e, t, pn);
  }

  function yn(e) {
    return function () {
      var t = this._computedWatchers && this._computedWatchers[e];
      if (t) return t.dirty && t.evaluate(), ce.target && t.depend(), t.value;
    };
  }

  function gn(e) {
    return function () {
      return e.call(this, this);
    };
  }

  function _n(e, t, n, r) {
    return s(n) && (r = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, r);
  }

  var bn = 0;

  function $n(e) {
    var t = e.options;

    if (e.super) {
      var n = $n(e.super);

      if (n !== e.superOptions) {
        e.superOptions = n;

        var r = function (e) {
          var t,
              n = e.options,
              r = e.sealedOptions;

          for (var i in n) {
            n[i] !== r[i] && (t || (t = {}), t[i] = n[i]);
          }

          return t;
        }(e);

        r && A(e.extendOptions, r), (t = e.options = De(n, e.extendOptions)).name && (t.components[t.name] = e);
      }
    }

    return t;
  }

  function wn(e) {
    this._init(e);
  }

  function Cn(e) {
    e.cid = 0;
    var t = 1;

    e.extend = function (e) {
      e = e || {};
      var n = this,
          r = n.cid,
          i = e._Ctor || (e._Ctor = {});
      if (i[r]) return i[r];

      var o = e.name || n.options.name,
          a = function a(e) {
        this._init(e);
      };

      return (a.prototype = Object.create(n.prototype)).constructor = a, a.cid = t++, a.options = De(n.options, e), a.super = n, a.options.props && function (e) {
        var t = e.options.props;

        for (var n in t) {
          dn(e.prototype, "_props", n);
        }
      }(a), a.options.computed && function (e) {
        var t = e.options.computed;

        for (var n in t) {
          mn(e.prototype, n, t[n]);
        }
      }(a), a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, M.forEach(function (e) {
        a[e] = n[e];
      }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = e, a.sealedOptions = A({}, a.options), i[r] = a, a;
    };
  }

  function xn(e) {
    return e && (e.Ctor.options.name || e.tag);
  }

  function kn(e, t) {
    return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : (n = e, "[object RegExp]" === a.call(n) && e.test(t));
    var n;
  }

  function An(e, t) {
    var n = e.cache,
        r = e.keys,
        i = e._vnode;

    for (var o in n) {
      var a = n[o];

      if (a) {
        var s = xn(a.componentOptions);
        s && !t(s) && On(n, o, r, i);
      }
    }
  }

  function On(e, t, n, r) {
    var i = e[t];
    !i || r && i.tag === r.tag || i.componentInstance.$destroy(), e[t] = null, h(n, t);
  }

  !function (t) {
    t.prototype._init = function (t) {
      var n = this;
      n._uid = bn++, n._isVue = !0, t && t._isComponent ? function (e, t) {
        var n = e.$options = Object.create(e.constructor.options),
            r = t._parentVnode;
        n.parent = t.parent, n._parentVnode = r;
        var i = r.componentOptions;
        n.propsData = i.propsData, n._parentListeners = i.listeners, n._renderChildren = i.children, n._componentTag = i.tag, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns);
      }(n, t) : n.$options = De($n(n.constructor), t || {}, n), n._renderProxy = n, n._self = n, function (e) {
        var t = e.$options,
            n = t.parent;

        if (n && !t.abstract) {
          for (; n.$options.abstract && n.$parent;) {
            n = n.$parent;
          }

          n.$children.push(e);
        }

        e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1;
      }(n), function (e) {
        e._events = Object.create(null), e._hasHookEvent = !1;
        var t = e.$options._parentListeners;
        t && qt(e, t);
      }(n), function (t) {
        t._vnode = null, t._staticTrees = null;
        var n = t.$options,
            r = t.$vnode = n._parentVnode,
            i = r && r.context;
        t.$slots = ut(n._renderChildren, i), t.$scopedSlots = e, t._c = function (e, n, r, i) {
          return Pt(t, e, n, r, i, !1);
        }, t.$createElement = function (e, n, r, i) {
          return Pt(t, e, n, r, i, !0);
        };
        var o = r && r.data;
        xe(t, "$attrs", o && o.attrs || e, null, !0), xe(t, "$listeners", n._parentListeners || e, null, !0);
      }(n), Yt(n, "beforeCreate"), function (e) {
        var t = ct(e.$options.inject, e);
        t && ($e(!1), Object.keys(t).forEach(function (n) {
          xe(e, n, t[n]);
        }), $e(!0));
      }(n), vn(n), function (e) {
        var t = e.$options.provide;
        t && (e._provided = "function" == typeof t ? t.call(e) : t);
      }(n), Yt(n, "created"), n.$options.el && n.$mount(n.$options.el);
    };
  }(wn), function (e) {
    var t = {
      get: function get() {
        return this._data;
      }
    },
        n = {
      get: function get() {
        return this._props;
      }
    };
    Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), e.prototype.$set = ke, e.prototype.$delete = Ae, e.prototype.$watch = function (e, t, n) {
      if (s(t)) return _n(this, e, t, n);
      (n = n || {}).user = !0;
      var r = new fn(this, e, t, n);
      if (n.immediate) try {
        t.call(this, r.value);
      } catch (e) {
        Re(e, this, 'callback for immediate watcher "' + r.expression + '"');
      }
      return function () {
        r.teardown();
      };
    };
  }(wn), function (e) {
    var t = /^hook:/;
    e.prototype.$on = function (e, n) {
      var r = this;
      if (Array.isArray(e)) for (var i = 0, o = e.length; i < o; i++) {
        r.$on(e[i], n);
      } else (r._events[e] || (r._events[e] = [])).push(n), t.test(e) && (r._hasHookEvent = !0);
      return r;
    }, e.prototype.$once = function (e, t) {
      var n = this;

      function r() {
        n.$off(e, r), t.apply(n, arguments);
      }

      return r.fn = t, n.$on(e, r), n;
    }, e.prototype.$off = function (e, t) {
      var n = this;
      if (!arguments.length) return n._events = Object.create(null), n;

      if (Array.isArray(e)) {
        for (var r = 0, i = e.length; r < i; r++) {
          n.$off(e[r], t);
        }

        return n;
      }

      var o,
          a = n._events[e];
      if (!a) return n;
      if (!t) return n._events[e] = null, n;

      for (var s = a.length; s--;) {
        if ((o = a[s]) === t || o.fn === t) {
          a.splice(s, 1);
          break;
        }
      }

      return n;
    }, e.prototype.$emit = function (e) {
      var t = this._events[e];

      if (t) {
        t = t.length > 1 ? k(t) : t;

        for (var n = k(arguments, 1), r = 'event handler for "' + e + '"', i = 0, o = t.length; i < o; i++) {
          He(t[i], this, n, this, r);
        }
      }

      return this;
    };
  }(wn), function (e) {
    e.prototype._update = function (e, t) {
      var n = this,
          r = n.$el,
          i = n._vnode,
          o = Zt(n);
      n._vnode = e, n.$el = i ? n.__patch__(i, e) : n.__patch__(n.$el, e, t, !1), o(), r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el);
    }, e.prototype.$forceUpdate = function () {
      this._watcher && this._watcher.update();
    }, e.prototype.$destroy = function () {
      var e = this;

      if (!e._isBeingDestroyed) {
        Yt(e, "beforeDestroy"), e._isBeingDestroyed = !0;
        var t = e.$parent;
        !t || t._isBeingDestroyed || e.$options.abstract || h(t.$children, e), e._watcher && e._watcher.teardown();

        for (var n = e._watchers.length; n--;) {
          e._watchers[n].teardown();
        }

        e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), Yt(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null);
      }
    };
  }(wn), function (e) {
    St(e.prototype), e.prototype.$nextTick = function (e) {
      return Ye(e, this);
    }, e.prototype._render = function () {
      var e,
          t = this,
          n = t.$options,
          r = n.render,
          i = n._parentVnode;
      i && (t.$scopedSlots = ft(i.data.scopedSlots, t.$slots, t.$scopedSlots)), t.$vnode = i;

      try {
        Ht = t, e = r.call(t._renderProxy, t.$createElement);
      } catch (n) {
        Re(n, t, "render"), e = t._vnode;
      } finally {
        Ht = null;
      }

      return Array.isArray(e) && 1 === e.length && (e = e[0]), e instanceof pe || (e = ve()), e.parent = i, e;
    };
  }(wn);
  var Sn = [String, RegExp, Array],
      Tn = {
    KeepAlive: {
      name: "keep-alive",
      abstract: !0,
      props: {
        include: Sn,
        exclude: Sn,
        max: [String, Number]
      },
      created: function created() {
        this.cache = Object.create(null), this.keys = [];
      },
      destroyed: function destroyed() {
        for (var e in this.cache) {
          On(this.cache, e, this.keys);
        }
      },
      mounted: function mounted() {
        var e = this;
        this.$watch("include", function (t) {
          An(e, function (e) {
            return kn(t, e);
          });
        }), this.$watch("exclude", function (t) {
          An(e, function (e) {
            return !kn(t, e);
          });
        });
      },
      render: function render() {
        var e = this.$slots.default,
            t = zt(e),
            n = t && t.componentOptions;

        if (n) {
          var r = xn(n),
              i = this.include,
              o = this.exclude;
          if (i && (!r || !kn(i, r)) || o && r && kn(o, r)) return t;
          var a = this.cache,
              s = this.keys,
              c = null == t.key ? n.Ctor.cid + (n.tag ? "::" + n.tag : "") : t.key;
          a[c] ? (t.componentInstance = a[c].componentInstance, h(s, c), s.push(c)) : (a[c] = t, s.push(c), this.max && s.length > parseInt(this.max) && On(a, s[0], s, this._vnode)), t.data.keepAlive = !0;
        }

        return t || e && e[0];
      }
    }
  };
  !function (e) {
    var t = {
      get: function get() {
        return F;
      }
    };
    Object.defineProperty(e, "config", t), e.util = {
      warn: ae,
      extend: A,
      mergeOptions: De,
      defineReactive: xe
    }, e.set = ke, e.delete = Ae, e.nextTick = Ye, e.observable = function (e) {
      return Ce(e), e;
    }, e.options = Object.create(null), M.forEach(function (t) {
      e.options[t + "s"] = Object.create(null);
    }), e.options._base = e, A(e.options.components, Tn), function (e) {
      e.use = function (e) {
        var t = this._installedPlugins || (this._installedPlugins = []);
        if (t.indexOf(e) > -1) return this;
        var n = k(arguments, 1);
        return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), t.push(e), this;
      };
    }(e), function (e) {
      e.mixin = function (e) {
        return this.options = De(this.options, e), this;
      };
    }(e), Cn(e), function (e) {
      M.forEach(function (t) {
        e[t] = function (e, n) {
          return n ? ("component" === t && s(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
            bind: n,
            update: n
          }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
        };
      });
    }(e);
  }(wn), Object.defineProperty(wn.prototype, "$isServer", {
    get: te
  }), Object.defineProperty(wn.prototype, "$ssrContext", {
    get: function get() {
      return this.$vnode && this.$vnode.ssrContext;
    }
  }), Object.defineProperty(wn, "FunctionalRenderContext", {
    value: Tt
  }), wn.version = "2.6.11";

  var En = p("style,class"),
      Nn = p("input,textarea,option,select,progress"),
      jn = function jn(e, t, n) {
    return "value" === n && Nn(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e;
  },
      Dn = p("contenteditable,draggable,spellcheck"),
      Ln = p("events,caret,typing,plaintext-only"),
      Mn = function Mn(e, t) {
    return Hn(t) || "false" === t ? "false" : "contenteditable" === e && Ln(t) ? t : "true";
  },
      In = p("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
      Fn = "http://www.w3.org/1999/xlink",
      Pn = function Pn(e) {
    return ":" === e.charAt(5) && "xlink" === e.slice(0, 5);
  },
      Rn = function Rn(e) {
    return Pn(e) ? e.slice(6, e.length) : "";
  },
      Hn = function Hn(e) {
    return null == e || !1 === e;
  };

  function Bn(e) {
    for (var t = e.data, r = e, i = e; n(i.componentInstance);) {
      (i = i.componentInstance._vnode) && i.data && (t = Un(i.data, t));
    }

    for (; n(r = r.parent);) {
      r && r.data && (t = Un(t, r.data));
    }

    return function (e, t) {
      if (n(e) || n(t)) return zn(e, Vn(t));
      return "";
    }(t.staticClass, t.class);
  }

  function Un(e, t) {
    return {
      staticClass: zn(e.staticClass, t.staticClass),
      class: n(e.class) ? [e.class, t.class] : t.class
    };
  }

  function zn(e, t) {
    return e ? t ? e + " " + t : e : t || "";
  }

  function Vn(e) {
    return Array.isArray(e) ? function (e) {
      for (var t, r = "", i = 0, o = e.length; i < o; i++) {
        n(t = Vn(e[i])) && "" !== t && (r && (r += " "), r += t);
      }

      return r;
    }(e) : o(e) ? function (e) {
      var t = "";

      for (var n in e) {
        e[n] && (t && (t += " "), t += n);
      }

      return t;
    }(e) : "string" == typeof e ? e : "";
  }

  var Kn = {
    svg: "http://www.w3.org/2000/svg",
    math: "http://www.w3.org/1998/Math/MathML"
  },
      Jn = p("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),
      qn = p("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
      Wn = function Wn(e) {
    return Jn(e) || qn(e);
  };

  function Zn(e) {
    return qn(e) ? "svg" : "math" === e ? "math" : void 0;
  }

  var Gn = Object.create(null);
  var Xn = p("text,number,password,search,email,tel,url");

  function Yn(e) {
    if ("string" == typeof e) {
      var t = document.querySelector(e);
      return t || document.createElement("div");
    }

    return e;
  }

  var Qn = Object.freeze({
    createElement: function createElement(e, t) {
      var n = document.createElement(e);
      return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), n);
    },
    createElementNS: function createElementNS(e, t) {
      return document.createElementNS(Kn[e], t);
    },
    createTextNode: function createTextNode(e) {
      return document.createTextNode(e);
    },
    createComment: function createComment(e) {
      return document.createComment(e);
    },
    insertBefore: function insertBefore(e, t, n) {
      e.insertBefore(t, n);
    },
    removeChild: function removeChild(e, t) {
      e.removeChild(t);
    },
    appendChild: function appendChild(e, t) {
      e.appendChild(t);
    },
    parentNode: function parentNode(e) {
      return e.parentNode;
    },
    nextSibling: function nextSibling(e) {
      return e.nextSibling;
    },
    tagName: function tagName(e) {
      return e.tagName;
    },
    setTextContent: function setTextContent(e, t) {
      e.textContent = t;
    },
    setStyleScope: function setStyleScope(e, t) {
      e.setAttribute(t, "");
    }
  }),
      er = {
    create: function create(e, t) {
      tr(t);
    },
    update: function update(e, t) {
      e.data.ref !== t.data.ref && (tr(e, !0), tr(t));
    },
    destroy: function destroy(e) {
      tr(e, !0);
    }
  };

  function tr(e, t) {
    var r = e.data.ref;

    if (n(r)) {
      var i = e.context,
          o = e.componentInstance || e.elm,
          a = i.$refs;
      t ? Array.isArray(a[r]) ? h(a[r], o) : a[r] === o && (a[r] = void 0) : e.data.refInFor ? Array.isArray(a[r]) ? a[r].indexOf(o) < 0 && a[r].push(o) : a[r] = [o] : a[r] = o;
    }
  }

  var nr = new pe("", {}, []),
      rr = ["create", "activate", "update", "remove", "destroy"];

  function ir(e, i) {
    return e.key === i.key && (e.tag === i.tag && e.isComment === i.isComment && n(e.data) === n(i.data) && function (e, t) {
      if ("input" !== e.tag) return !0;
      var r,
          i = n(r = e.data) && n(r = r.attrs) && r.type,
          o = n(r = t.data) && n(r = r.attrs) && r.type;
      return i === o || Xn(i) && Xn(o);
    }(e, i) || r(e.isAsyncPlaceholder) && e.asyncFactory === i.asyncFactory && t(i.asyncFactory.error));
  }

  function or(e, t, r) {
    var i,
        o,
        a = {};

    for (i = t; i <= r; ++i) {
      n(o = e[i].key) && (a[o] = i);
    }

    return a;
  }

  var ar = {
    create: sr,
    update: sr,
    destroy: function destroy(e) {
      sr(e, nr);
    }
  };

  function sr(e, t) {
    (e.data.directives || t.data.directives) && function (e, t) {
      var n,
          r,
          i,
          o = e === nr,
          a = t === nr,
          s = ur(e.data.directives, e.context),
          c = ur(t.data.directives, t.context),
          u = [],
          l = [];

      for (n in c) {
        r = s[n], i = c[n], r ? (i.oldValue = r.value, i.oldArg = r.arg, fr(i, "update", t, e), i.def && i.def.componentUpdated && l.push(i)) : (fr(i, "bind", t, e), i.def && i.def.inserted && u.push(i));
      }

      if (u.length) {
        var f = function f() {
          for (var n = 0; n < u.length; n++) {
            fr(u[n], "inserted", t, e);
          }
        };

        o ? it(t, "insert", f) : f();
      }

      l.length && it(t, "postpatch", function () {
        for (var n = 0; n < l.length; n++) {
          fr(l[n], "componentUpdated", t, e);
        }
      });
      if (!o) for (n in s) {
        c[n] || fr(s[n], "unbind", e, e, a);
      }
    }(e, t);
  }

  var cr = Object.create(null);

  function ur(e, t) {
    var n,
        r,
        i = Object.create(null);
    if (!e) return i;

    for (n = 0; n < e.length; n++) {
      (r = e[n]).modifiers || (r.modifiers = cr), i[lr(r)] = r, r.def = Le(t.$options, "directives", r.name);
    }

    return i;
  }

  function lr(e) {
    return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".");
  }

  function fr(e, t, n, r, i) {
    var o = e.def && e.def[t];
    if (o) try {
      o(n.elm, e, n, r, i);
    } catch (r) {
      Re(r, n.context, "directive " + e.name + " " + t + " hook");
    }
  }

  var pr = [er, ar];

  function dr(e, r) {
    var i = r.componentOptions;

    if (!(n(i) && !1 === i.Ctor.options.inheritAttrs || t(e.data.attrs) && t(r.data.attrs))) {
      var o,
          a,
          s = r.elm,
          c = e.data.attrs || {},
          u = r.data.attrs || {};

      for (o in n(u.__ob__) && (u = r.data.attrs = A({}, u)), u) {
        a = u[o], c[o] !== a && vr(s, o, a);
      }

      for (o in (q || Z) && u.value !== c.value && vr(s, "value", u.value), c) {
        t(u[o]) && (Pn(o) ? s.removeAttributeNS(Fn, Rn(o)) : Dn(o) || s.removeAttribute(o));
      }
    }
  }

  function vr(e, t, n) {
    e.tagName.indexOf("-") > -1 ? hr(e, t, n) : In(t) ? Hn(n) ? e.removeAttribute(t) : (n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t, e.setAttribute(t, n)) : Dn(t) ? e.setAttribute(t, Mn(t, n)) : Pn(t) ? Hn(n) ? e.removeAttributeNS(Fn, Rn(t)) : e.setAttributeNS(Fn, t, n) : hr(e, t, n);
  }

  function hr(e, t, n) {
    if (Hn(n)) e.removeAttribute(t);else {
      if (q && !W && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
        var r = function r(t) {
          t.stopImmediatePropagation(), e.removeEventListener("input", r);
        };

        e.addEventListener("input", r), e.__ieph = !0;
      }

      e.setAttribute(t, n);
    }
  }

  var mr = {
    create: dr,
    update: dr
  };

  function yr(e, r) {
    var i = r.elm,
        o = r.data,
        a = e.data;

    if (!(t(o.staticClass) && t(o.class) && (t(a) || t(a.staticClass) && t(a.class)))) {
      var s = Bn(r),
          c = i._transitionClasses;
      n(c) && (s = zn(s, Vn(c))), s !== i._prevClass && (i.setAttribute("class", s), i._prevClass = s);
    }
  }

  var gr,
      _r,
      br,
      $r,
      wr,
      Cr,
      xr = {
    create: yr,
    update: yr
  },
      kr = /[\w).+\-_$\]]/;

  function Ar(e) {
    var t,
        n,
        r,
        i,
        o,
        a = !1,
        s = !1,
        c = !1,
        u = !1,
        l = 0,
        f = 0,
        p = 0,
        d = 0;

    for (r = 0; r < e.length; r++) {
      if (n = t, t = e.charCodeAt(r), a) 39 === t && 92 !== n && (a = !1);else if (s) 34 === t && 92 !== n && (s = !1);else if (c) 96 === t && 92 !== n && (c = !1);else if (u) 47 === t && 92 !== n && (u = !1);else if (124 !== t || 124 === e.charCodeAt(r + 1) || 124 === e.charCodeAt(r - 1) || l || f || p) {
        switch (t) {
          case 34:
            s = !0;
            break;

          case 39:
            a = !0;
            break;

          case 96:
            c = !0;
            break;

          case 40:
            p++;
            break;

          case 41:
            p--;
            break;

          case 91:
            f++;
            break;

          case 93:
            f--;
            break;

          case 123:
            l++;
            break;

          case 125:
            l--;
        }

        if (47 === t) {
          for (var v = r - 1, h = void 0; v >= 0 && " " === (h = e.charAt(v)); v--) {
            ;
          }

          h && kr.test(h) || (u = !0);
        }
      } else void 0 === i ? (d = r + 1, i = e.slice(0, r).trim()) : m();
    }

    function m() {
      (o || (o = [])).push(e.slice(d, r).trim()), d = r + 1;
    }

    if (void 0 === i ? i = e.slice(0, r).trim() : 0 !== d && m(), o) for (r = 0; r < o.length; r++) {
      i = Or(i, o[r]);
    }
    return i;
  }

  function Or(e, t) {
    var n = t.indexOf("(");
    if (n < 0) return '_f("' + t + '")(' + e + ")";
    var r = t.slice(0, n),
        i = t.slice(n + 1);
    return '_f("' + r + '")(' + e + (")" !== i ? "," + i : i);
  }

  function Sr(e, t) {
    console.error("[Vue compiler]: " + e);
  }

  function Tr(e, t) {
    return e ? e.map(function (e) {
      return e[t];
    }).filter(function (e) {
      return e;
    }) : [];
  }

  function Er(e, t, n, r, i) {
    (e.props || (e.props = [])).push(Rr({
      name: t,
      value: n,
      dynamic: i
    }, r)), e.plain = !1;
  }

  function Nr(e, t, n, r, i) {
    (i ? e.dynamicAttrs || (e.dynamicAttrs = []) : e.attrs || (e.attrs = [])).push(Rr({
      name: t,
      value: n,
      dynamic: i
    }, r)), e.plain = !1;
  }

  function jr(e, t, n, r) {
    e.attrsMap[t] = n, e.attrsList.push(Rr({
      name: t,
      value: n
    }, r));
  }

  function Dr(e, t, n, r, i, o, a, s) {
    (e.directives || (e.directives = [])).push(Rr({
      name: t,
      rawName: n,
      value: r,
      arg: i,
      isDynamicArg: o,
      modifiers: a
    }, s)), e.plain = !1;
  }

  function Lr(e, t, n) {
    return n ? "_p(" + t + ',"' + e + '")' : e + t;
  }

  function Mr(t, n, r, i, o, a, s, c) {
    var u;
    (i = i || e).right ? c ? n = "(" + n + ")==='click'?'contextmenu':(" + n + ")" : "click" === n && (n = "contextmenu", delete i.right) : i.middle && (c ? n = "(" + n + ")==='click'?'mouseup':(" + n + ")" : "click" === n && (n = "mouseup")), i.capture && (delete i.capture, n = Lr("!", n, c)), i.once && (delete i.once, n = Lr("~", n, c)), i.passive && (delete i.passive, n = Lr("&", n, c)), i.native ? (delete i.native, u = t.nativeEvents || (t.nativeEvents = {})) : u = t.events || (t.events = {});
    var l = Rr({
      value: r.trim(),
      dynamic: c
    }, s);
    i !== e && (l.modifiers = i);
    var f = u[n];
    Array.isArray(f) ? o ? f.unshift(l) : f.push(l) : u[n] = f ? o ? [l, f] : [f, l] : l, t.plain = !1;
  }

  function Ir(e, t, n) {
    var r = Fr(e, ":" + t) || Fr(e, "v-bind:" + t);
    if (null != r) return Ar(r);

    if (!1 !== n) {
      var i = Fr(e, t);
      if (null != i) return JSON.stringify(i);
    }
  }

  function Fr(e, t, n) {
    var r;
    if (null != (r = e.attrsMap[t])) for (var i = e.attrsList, o = 0, a = i.length; o < a; o++) {
      if (i[o].name === t) {
        i.splice(o, 1);
        break;
      }
    }
    return n && delete e.attrsMap[t], r;
  }

  function Pr(e, t) {
    for (var n = e.attrsList, r = 0, i = n.length; r < i; r++) {
      var o = n[r];
      if (t.test(o.name)) return n.splice(r, 1), o;
    }
  }

  function Rr(e, t) {
    return t && (null != t.start && (e.start = t.start), null != t.end && (e.end = t.end)), e;
  }

  function Hr(e, t, n) {
    var r = n || {},
        i = r.number,
        o = "$$v";
    r.trim && (o = "(typeof $$v === 'string'? $$v.trim(): $$v)"), i && (o = "_n(" + o + ")");
    var a = Br(t, o);
    e.model = {
      value: "(" + t + ")",
      expression: JSON.stringify(t),
      callback: "function ($$v) {" + a + "}"
    };
  }

  function Br(e, t) {
    var n = function (e) {
      if (e = e.trim(), gr = e.length, e.indexOf("[") < 0 || e.lastIndexOf("]") < gr - 1) return ($r = e.lastIndexOf(".")) > -1 ? {
        exp: e.slice(0, $r),
        key: '"' + e.slice($r + 1) + '"'
      } : {
        exp: e,
        key: null
      };
      _r = e, $r = wr = Cr = 0;

      for (; !zr();) {
        Vr(br = Ur()) ? Jr(br) : 91 === br && Kr(br);
      }

      return {
        exp: e.slice(0, wr),
        key: e.slice(wr + 1, Cr)
      };
    }(e);

    return null === n.key ? e + "=" + t : "$set(" + n.exp + ", " + n.key + ", " + t + ")";
  }

  function Ur() {
    return _r.charCodeAt(++$r);
  }

  function zr() {
    return $r >= gr;
  }

  function Vr(e) {
    return 34 === e || 39 === e;
  }

  function Kr(e) {
    var t = 1;

    for (wr = $r; !zr();) {
      if (Vr(e = Ur())) Jr(e);else if (91 === e && t++, 93 === e && t--, 0 === t) {
        Cr = $r;
        break;
      }
    }
  }

  function Jr(e) {
    for (var t = e; !zr() && (e = Ur()) !== t;) {
      ;
    }
  }

  var qr,
      Wr = "__r",
      Zr = "__c";

  function Gr(e, t, n) {
    var r = qr;
    return function i() {
      null !== t.apply(null, arguments) && Qr(e, i, n, r);
    };
  }

  var Xr = Ve && !(X && Number(X[1]) <= 53);

  function Yr(e, t, n, r) {
    if (Xr) {
      var i = an,
          o = t;

      t = o._wrapper = function (e) {
        if (e.target === e.currentTarget || e.timeStamp >= i || e.timeStamp <= 0 || e.target.ownerDocument !== document) return o.apply(this, arguments);
      };
    }

    qr.addEventListener(e, t, Q ? {
      capture: n,
      passive: r
    } : n);
  }

  function Qr(e, t, n, r) {
    (r || qr).removeEventListener(e, t._wrapper || t, n);
  }

  function ei(e, r) {
    if (!t(e.data.on) || !t(r.data.on)) {
      var i = r.data.on || {},
          o = e.data.on || {};
      qr = r.elm, function (e) {
        if (n(e[Wr])) {
          var t = q ? "change" : "input";
          e[t] = [].concat(e[Wr], e[t] || []), delete e[Wr];
        }

        n(e[Zr]) && (e.change = [].concat(e[Zr], e.change || []), delete e[Zr]);
      }(i), rt(i, o, Yr, Qr, Gr, r.context), qr = void 0;
    }
  }

  var ti,
      ni = {
    create: ei,
    update: ei
  };

  function ri(e, r) {
    if (!t(e.data.domProps) || !t(r.data.domProps)) {
      var i,
          o,
          a = r.elm,
          s = e.data.domProps || {},
          c = r.data.domProps || {};

      for (i in n(c.__ob__) && (c = r.data.domProps = A({}, c)), s) {
        i in c || (a[i] = "");
      }

      for (i in c) {
        if (o = c[i], "textContent" === i || "innerHTML" === i) {
          if (r.children && (r.children.length = 0), o === s[i]) continue;
          1 === a.childNodes.length && a.removeChild(a.childNodes[0]);
        }

        if ("value" === i && "PROGRESS" !== a.tagName) {
          a._value = o;
          var u = t(o) ? "" : String(o);
          ii(a, u) && (a.value = u);
        } else if ("innerHTML" === i && qn(a.tagName) && t(a.innerHTML)) {
          (ti = ti || document.createElement("div")).innerHTML = "<svg>" + o + "</svg>";

          for (var l = ti.firstChild; a.firstChild;) {
            a.removeChild(a.firstChild);
          }

          for (; l.firstChild;) {
            a.appendChild(l.firstChild);
          }
        } else if (o !== s[i]) try {
          a[i] = o;
        } catch (e) {}
      }
    }
  }

  function ii(e, t) {
    return !e.composing && ("OPTION" === e.tagName || function (e, t) {
      var n = !0;

      try {
        n = document.activeElement !== e;
      } catch (e) {}

      return n && e.value !== t;
    }(e, t) || function (e, t) {
      var r = e.value,
          i = e._vModifiers;

      if (n(i)) {
        if (i.number) return f(r) !== f(t);
        if (i.trim) return r.trim() !== t.trim();
      }

      return r !== t;
    }(e, t));
  }

  var oi = {
    create: ri,
    update: ri
  },
      ai = g(function (e) {
    var t = {},
        n = /:(.+)/;
    return e.split(/;(?![^(]*\))/g).forEach(function (e) {
      if (e) {
        var r = e.split(n);
        r.length > 1 && (t[r[0].trim()] = r[1].trim());
      }
    }), t;
  });

  function si(e) {
    var t = ci(e.style);
    return e.staticStyle ? A(e.staticStyle, t) : t;
  }

  function ci(e) {
    return Array.isArray(e) ? O(e) : "string" == typeof e ? ai(e) : e;
  }

  var ui,
      li = /^--/,
      fi = /\s*!important$/,
      pi = function pi(e, t, n) {
    if (li.test(t)) e.style.setProperty(t, n);else if (fi.test(n)) e.style.setProperty(C(t), n.replace(fi, ""), "important");else {
      var r = vi(t);
      if (Array.isArray(n)) for (var i = 0, o = n.length; i < o; i++) {
        e.style[r] = n[i];
      } else e.style[r] = n;
    }
  },
      di = ["Webkit", "Moz", "ms"],
      vi = g(function (e) {
    if (ui = ui || document.createElement("div").style, "filter" !== (e = b(e)) && e in ui) return e;

    for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < di.length; n++) {
      var r = di[n] + t;
      if (r in ui) return r;
    }
  });

  function hi(e, r) {
    var i = r.data,
        o = e.data;

    if (!(t(i.staticStyle) && t(i.style) && t(o.staticStyle) && t(o.style))) {
      var a,
          s,
          c = r.elm,
          u = o.staticStyle,
          l = o.normalizedStyle || o.style || {},
          f = u || l,
          p = ci(r.data.style) || {};
      r.data.normalizedStyle = n(p.__ob__) ? A({}, p) : p;

      var d = function (e, t) {
        var n,
            r = {};
        if (t) for (var i = e; i.componentInstance;) {
          (i = i.componentInstance._vnode) && i.data && (n = si(i.data)) && A(r, n);
        }
        (n = si(e.data)) && A(r, n);

        for (var o = e; o = o.parent;) {
          o.data && (n = si(o.data)) && A(r, n);
        }

        return r;
      }(r, !0);

      for (s in f) {
        t(d[s]) && pi(c, s, "");
      }

      for (s in d) {
        (a = d[s]) !== f[s] && pi(c, s, null == a ? "" : a);
      }
    }
  }

  var mi = {
    create: hi,
    update: hi
  },
      yi = /\s+/;

  function gi(e, t) {
    if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(yi).forEach(function (t) {
      return e.classList.add(t);
    }) : e.classList.add(t);else {
      var n = " " + (e.getAttribute("class") || "") + " ";
      n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim());
    }
  }

  function _i(e, t) {
    if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(yi).forEach(function (t) {
      return e.classList.remove(t);
    }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class");else {
      for (var n = " " + (e.getAttribute("class") || "") + " ", r = " " + t + " "; n.indexOf(r) >= 0;) {
        n = n.replace(r, " ");
      }

      (n = n.trim()) ? e.setAttribute("class", n) : e.removeAttribute("class");
    }
  }

  function bi(e) {
    if (e) {
      if ("object" == _typeof2(e)) {
        var t = {};
        return !1 !== e.css && A(t, $i(e.name || "v")), A(t, e), t;
      }

      return "string" == typeof e ? $i(e) : void 0;
    }
  }

  var $i = g(function (e) {
    return {
      enterClass: e + "-enter",
      enterToClass: e + "-enter-to",
      enterActiveClass: e + "-enter-active",
      leaveClass: e + "-leave",
      leaveToClass: e + "-leave-to",
      leaveActiveClass: e + "-leave-active"
    };
  }),
      wi = z && !W,
      Ci = "transition",
      xi = "animation",
      ki = "transition",
      Ai = "transitionend",
      Oi = "animation",
      Si = "animationend";
  wi && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (ki = "WebkitTransition", Ai = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Oi = "WebkitAnimation", Si = "webkitAnimationEnd"));
  var Ti = z ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : function (e) {
    return e();
  };

  function Ei(e) {
    Ti(function () {
      Ti(e);
    });
  }

  function Ni(e, t) {
    var n = e._transitionClasses || (e._transitionClasses = []);
    n.indexOf(t) < 0 && (n.push(t), gi(e, t));
  }

  function ji(e, t) {
    e._transitionClasses && h(e._transitionClasses, t), _i(e, t);
  }

  function Di(e, t, n) {
    var r = Mi(e, t),
        i = r.type,
        o = r.timeout,
        a = r.propCount;
    if (!i) return n();

    var s = i === Ci ? Ai : Si,
        c = 0,
        u = function u() {
      e.removeEventListener(s, l), n();
    },
        l = function l(t) {
      t.target === e && ++c >= a && u();
    };

    setTimeout(function () {
      c < a && u();
    }, o + 1), e.addEventListener(s, l);
  }

  var Li = /\b(transform|all)(,|$)/;

  function Mi(e, t) {
    var n,
        r = window.getComputedStyle(e),
        i = (r[ki + "Delay"] || "").split(", "),
        o = (r[ki + "Duration"] || "").split(", "),
        a = Ii(i, o),
        s = (r[Oi + "Delay"] || "").split(", "),
        c = (r[Oi + "Duration"] || "").split(", "),
        u = Ii(s, c),
        l = 0,
        f = 0;
    return t === Ci ? a > 0 && (n = Ci, l = a, f = o.length) : t === xi ? u > 0 && (n = xi, l = u, f = c.length) : f = (n = (l = Math.max(a, u)) > 0 ? a > u ? Ci : xi : null) ? n === Ci ? o.length : c.length : 0, {
      type: n,
      timeout: l,
      propCount: f,
      hasTransform: n === Ci && Li.test(r[ki + "Property"])
    };
  }

  function Ii(e, t) {
    for (; e.length < t.length;) {
      e = e.concat(e);
    }

    return Math.max.apply(null, t.map(function (t, n) {
      return Fi(t) + Fi(e[n]);
    }));
  }

  function Fi(e) {
    return 1e3 * Number(e.slice(0, -1).replace(",", "."));
  }

  function Pi(e, r) {
    var i = e.elm;
    n(i._leaveCb) && (i._leaveCb.cancelled = !0, i._leaveCb());
    var a = bi(e.data.transition);

    if (!t(a) && !n(i._enterCb) && 1 === i.nodeType) {
      for (var s = a.css, c = a.type, u = a.enterClass, l = a.enterToClass, p = a.enterActiveClass, d = a.appearClass, v = a.appearToClass, h = a.appearActiveClass, m = a.beforeEnter, y = a.enter, g = a.afterEnter, _ = a.enterCancelled, b = a.beforeAppear, $ = a.appear, w = a.afterAppear, C = a.appearCancelled, x = a.duration, k = Wt, A = Wt.$vnode; A && A.parent;) {
        k = A.context, A = A.parent;
      }

      var O = !k._isMounted || !e.isRootInsert;

      if (!O || $ || "" === $) {
        var S = O && d ? d : u,
            T = O && h ? h : p,
            E = O && v ? v : l,
            N = O && b || m,
            j = O && "function" == typeof $ ? $ : y,
            L = O && w || g,
            M = O && C || _,
            I = f(o(x) ? x.enter : x),
            F = !1 !== s && !W,
            P = Bi(j),
            R = i._enterCb = D(function () {
          F && (ji(i, E), ji(i, T)), R.cancelled ? (F && ji(i, S), M && M(i)) : L && L(i), i._enterCb = null;
        });
        e.data.show || it(e, "insert", function () {
          var t = i.parentNode,
              n = t && t._pending && t._pending[e.key];
          n && n.tag === e.tag && n.elm._leaveCb && n.elm._leaveCb(), j && j(i, R);
        }), N && N(i), F && (Ni(i, S), Ni(i, T), Ei(function () {
          ji(i, S), R.cancelled || (Ni(i, E), P || (Hi(I) ? setTimeout(R, I) : Di(i, c, R)));
        })), e.data.show && (r && r(), j && j(i, R)), F || P || R();
      }
    }
  }

  function Ri(e, r) {
    var i = e.elm;
    n(i._enterCb) && (i._enterCb.cancelled = !0, i._enterCb());
    var a = bi(e.data.transition);
    if (t(a) || 1 !== i.nodeType) return r();

    if (!n(i._leaveCb)) {
      var s = a.css,
          c = a.type,
          u = a.leaveClass,
          l = a.leaveToClass,
          p = a.leaveActiveClass,
          d = a.beforeLeave,
          v = a.leave,
          h = a.afterLeave,
          m = a.leaveCancelled,
          y = a.delayLeave,
          g = a.duration,
          _ = !1 !== s && !W,
          b = Bi(v),
          $ = f(o(g) ? g.leave : g),
          w = i._leaveCb = D(function () {
        i.parentNode && i.parentNode._pending && (i.parentNode._pending[e.key] = null), _ && (ji(i, l), ji(i, p)), w.cancelled ? (_ && ji(i, u), m && m(i)) : (r(), h && h(i)), i._leaveCb = null;
      });

      y ? y(C) : C();
    }

    function C() {
      w.cancelled || (!e.data.show && i.parentNode && ((i.parentNode._pending || (i.parentNode._pending = {}))[e.key] = e), d && d(i), _ && (Ni(i, u), Ni(i, p), Ei(function () {
        ji(i, u), w.cancelled || (Ni(i, l), b || (Hi($) ? setTimeout(w, $) : Di(i, c, w)));
      })), v && v(i, w), _ || b || w());
    }
  }

  function Hi(e) {
    return "number" == typeof e && !isNaN(e);
  }

  function Bi(e) {
    if (t(e)) return !1;
    var r = e.fns;
    return n(r) ? Bi(Array.isArray(r) ? r[0] : r) : (e._length || e.length) > 1;
  }

  function Ui(e, t) {
    !0 !== t.data.show && Pi(t);
  }

  var zi = function (e) {
    var o,
        a,
        s = {},
        c = e.modules,
        u = e.nodeOps;

    for (o = 0; o < rr.length; ++o) {
      for (s[rr[o]] = [], a = 0; a < c.length; ++a) {
        n(c[a][rr[o]]) && s[rr[o]].push(c[a][rr[o]]);
      }
    }

    function l(e) {
      var t = u.parentNode(e);
      n(t) && u.removeChild(t, e);
    }

    function f(e, t, i, o, a, c, l) {
      if (n(e.elm) && n(c) && (e = c[l] = me(e)), e.isRootInsert = !a, !function (e, t, i, o) {
        var a = e.data;

        if (n(a)) {
          var c = n(e.componentInstance) && a.keepAlive;
          if (n(a = a.hook) && n(a = a.init) && a(e, !1), n(e.componentInstance)) return d(e, t), v(i, e.elm, o), r(c) && function (e, t, r, i) {
            for (var o, a = e; a.componentInstance;) {
              if (a = a.componentInstance._vnode, n(o = a.data) && n(o = o.transition)) {
                for (o = 0; o < s.activate.length; ++o) {
                  s.activate[o](nr, a);
                }

                t.push(a);
                break;
              }
            }

            v(r, e.elm, i);
          }(e, t, i, o), !0;
        }
      }(e, t, i, o)) {
        var f = e.data,
            p = e.children,
            m = e.tag;
        n(m) ? (e.elm = e.ns ? u.createElementNS(e.ns, m) : u.createElement(m, e), g(e), h(e, p, t), n(f) && y(e, t), v(i, e.elm, o)) : r(e.isComment) ? (e.elm = u.createComment(e.text), v(i, e.elm, o)) : (e.elm = u.createTextNode(e.text), v(i, e.elm, o));
      }
    }

    function d(e, t) {
      n(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, m(e) ? (y(e, t), g(e)) : (tr(e), t.push(e));
    }

    function v(e, t, r) {
      n(e) && (n(r) ? u.parentNode(r) === e && u.insertBefore(e, t, r) : u.appendChild(e, t));
    }

    function h(e, t, n) {
      if (Array.isArray(t)) for (var r = 0; r < t.length; ++r) {
        f(t[r], n, e.elm, null, !0, t, r);
      } else i(e.text) && u.appendChild(e.elm, u.createTextNode(String(e.text)));
    }

    function m(e) {
      for (; e.componentInstance;) {
        e = e.componentInstance._vnode;
      }

      return n(e.tag);
    }

    function y(e, t) {
      for (var r = 0; r < s.create.length; ++r) {
        s.create[r](nr, e);
      }

      n(o = e.data.hook) && (n(o.create) && o.create(nr, e), n(o.insert) && t.push(e));
    }

    function g(e) {
      var t;
      if (n(t = e.fnScopeId)) u.setStyleScope(e.elm, t);else for (var r = e; r;) {
        n(t = r.context) && n(t = t.$options._scopeId) && u.setStyleScope(e.elm, t), r = r.parent;
      }
      n(t = Wt) && t !== e.context && t !== e.fnContext && n(t = t.$options._scopeId) && u.setStyleScope(e.elm, t);
    }

    function _(e, t, n, r, i, o) {
      for (; r <= i; ++r) {
        f(n[r], o, e, t, !1, n, r);
      }
    }

    function b(e) {
      var t,
          r,
          i = e.data;
      if (n(i)) for (n(t = i.hook) && n(t = t.destroy) && t(e), t = 0; t < s.destroy.length; ++t) {
        s.destroy[t](e);
      }
      if (n(t = e.children)) for (r = 0; r < e.children.length; ++r) {
        b(e.children[r]);
      }
    }

    function $(e, t, r) {
      for (; t <= r; ++t) {
        var i = e[t];
        n(i) && (n(i.tag) ? (w(i), b(i)) : l(i.elm));
      }
    }

    function w(e, t) {
      if (n(t) || n(e.data)) {
        var r,
            i = s.remove.length + 1;

        for (n(t) ? t.listeners += i : t = function (e, t) {
          function n() {
            0 == --n.listeners && l(e);
          }

          return n.listeners = t, n;
        }(e.elm, i), n(r = e.componentInstance) && n(r = r._vnode) && n(r.data) && w(r, t), r = 0; r < s.remove.length; ++r) {
          s.remove[r](e, t);
        }

        n(r = e.data.hook) && n(r = r.remove) ? r(e, t) : t();
      } else l(e.elm);
    }

    function C(e, t, r, i) {
      for (var o = r; o < i; o++) {
        var a = t[o];
        if (n(a) && ir(e, a)) return o;
      }
    }

    function x(e, i, o, a, c, l) {
      if (e !== i) {
        n(i.elm) && n(a) && (i = a[c] = me(i));
        var p = i.elm = e.elm;
        if (r(e.isAsyncPlaceholder)) n(i.asyncFactory.resolved) ? O(e.elm, i, o) : i.isAsyncPlaceholder = !0;else if (r(i.isStatic) && r(e.isStatic) && i.key === e.key && (r(i.isCloned) || r(i.isOnce))) i.componentInstance = e.componentInstance;else {
          var d,
              v = i.data;
          n(v) && n(d = v.hook) && n(d = d.prepatch) && d(e, i);
          var h = e.children,
              y = i.children;

          if (n(v) && m(i)) {
            for (d = 0; d < s.update.length; ++d) {
              s.update[d](e, i);
            }

            n(d = v.hook) && n(d = d.update) && d(e, i);
          }

          t(i.text) ? n(h) && n(y) ? h !== y && function (e, r, i, o, a) {
            for (var s, c, l, p = 0, d = 0, v = r.length - 1, h = r[0], m = r[v], y = i.length - 1, g = i[0], b = i[y], w = !a; p <= v && d <= y;) {
              t(h) ? h = r[++p] : t(m) ? m = r[--v] : ir(h, g) ? (x(h, g, o, i, d), h = r[++p], g = i[++d]) : ir(m, b) ? (x(m, b, o, i, y), m = r[--v], b = i[--y]) : ir(h, b) ? (x(h, b, o, i, y), w && u.insertBefore(e, h.elm, u.nextSibling(m.elm)), h = r[++p], b = i[--y]) : ir(m, g) ? (x(m, g, o, i, d), w && u.insertBefore(e, m.elm, h.elm), m = r[--v], g = i[++d]) : (t(s) && (s = or(r, p, v)), t(c = n(g.key) ? s[g.key] : C(g, r, p, v)) ? f(g, o, e, h.elm, !1, i, d) : ir(l = r[c], g) ? (x(l, g, o, i, d), r[c] = void 0, w && u.insertBefore(e, l.elm, h.elm)) : f(g, o, e, h.elm, !1, i, d), g = i[++d]);
            }

            p > v ? _(e, t(i[y + 1]) ? null : i[y + 1].elm, i, d, y, o) : d > y && $(r, p, v);
          }(p, h, y, o, l) : n(y) ? (n(e.text) && u.setTextContent(p, ""), _(p, null, y, 0, y.length - 1, o)) : n(h) ? $(h, 0, h.length - 1) : n(e.text) && u.setTextContent(p, "") : e.text !== i.text && u.setTextContent(p, i.text), n(v) && n(d = v.hook) && n(d = d.postpatch) && d(e, i);
        }
      }
    }

    function k(e, t, i) {
      if (r(i) && n(e.parent)) e.parent.data.pendingInsert = t;else for (var o = 0; o < t.length; ++o) {
        t[o].data.hook.insert(t[o]);
      }
    }

    var A = p("attrs,class,staticClass,staticStyle,key");

    function O(e, t, i, o) {
      var a,
          s = t.tag,
          c = t.data,
          u = t.children;
      if (o = o || c && c.pre, t.elm = e, r(t.isComment) && n(t.asyncFactory)) return t.isAsyncPlaceholder = !0, !0;
      if (n(c) && (n(a = c.hook) && n(a = a.init) && a(t, !0), n(a = t.componentInstance))) return d(t, i), !0;

      if (n(s)) {
        if (n(u)) if (e.hasChildNodes()) {
          if (n(a = c) && n(a = a.domProps) && n(a = a.innerHTML)) {
            if (a !== e.innerHTML) return !1;
          } else {
            for (var l = !0, f = e.firstChild, p = 0; p < u.length; p++) {
              if (!f || !O(f, u[p], i, o)) {
                l = !1;
                break;
              }

              f = f.nextSibling;
            }

            if (!l || f) return !1;
          }
        } else h(t, u, i);

        if (n(c)) {
          var v = !1;

          for (var m in c) {
            if (!A(m)) {
              v = !0, y(t, i);
              break;
            }
          }

          !v && c.class && et(c.class);
        }
      } else e.data !== t.text && (e.data = t.text);

      return !0;
    }

    return function (e, i, o, a) {
      if (!t(i)) {
        var c,
            l = !1,
            p = [];
        if (t(e)) l = !0, f(i, p);else {
          var d = n(e.nodeType);
          if (!d && ir(e, i)) x(e, i, p, null, null, a);else {
            if (d) {
              if (1 === e.nodeType && e.hasAttribute(L) && (e.removeAttribute(L), o = !0), r(o) && O(e, i, p)) return k(i, p, !0), e;
              c = e, e = new pe(u.tagName(c).toLowerCase(), {}, [], void 0, c);
            }

            var v = e.elm,
                h = u.parentNode(v);
            if (f(i, p, v._leaveCb ? null : h, u.nextSibling(v)), n(i.parent)) for (var y = i.parent, g = m(i); y;) {
              for (var _ = 0; _ < s.destroy.length; ++_) {
                s.destroy[_](y);
              }

              if (y.elm = i.elm, g) {
                for (var w = 0; w < s.create.length; ++w) {
                  s.create[w](nr, y);
                }

                var C = y.data.hook.insert;
                if (C.merged) for (var A = 1; A < C.fns.length; A++) {
                  C.fns[A]();
                }
              } else tr(y);

              y = y.parent;
            }
            n(h) ? $([e], 0, 0) : n(e.tag) && b(e);
          }
        }
        return k(i, p, l), i.elm;
      }

      n(e) && b(e);
    };
  }({
    nodeOps: Qn,
    modules: [mr, xr, ni, oi, mi, z ? {
      create: Ui,
      activate: Ui,
      remove: function remove(e, t) {
        !0 !== e.data.show ? Ri(e, t) : t();
      }
    } : {}].concat(pr)
  });

  W && document.addEventListener("selectionchange", function () {
    var e = document.activeElement;
    e && e.vmodel && Xi(e, "input");
  });
  var Vi = {
    inserted: function inserted(e, t, n, r) {
      "select" === n.tag ? (r.elm && !r.elm._vOptions ? it(n, "postpatch", function () {
        Vi.componentUpdated(e, t, n);
      }) : Ki(e, t, n.context), e._vOptions = [].map.call(e.options, Wi)) : ("textarea" === n.tag || Xn(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("compositionstart", Zi), e.addEventListener("compositionend", Gi), e.addEventListener("change", Gi), W && (e.vmodel = !0)));
    },
    componentUpdated: function componentUpdated(e, t, n) {
      if ("select" === n.tag) {
        Ki(e, t, n.context);
        var r = e._vOptions,
            i = e._vOptions = [].map.call(e.options, Wi);
        if (i.some(function (e, t) {
          return !N(e, r[t]);
        })) (e.multiple ? t.value.some(function (e) {
          return qi(e, i);
        }) : t.value !== t.oldValue && qi(t.value, i)) && Xi(e, "change");
      }
    }
  };

  function Ki(e, t, n) {
    Ji(e, t, n), (q || Z) && setTimeout(function () {
      Ji(e, t, n);
    }, 0);
  }

  function Ji(e, t, n) {
    var r = t.value,
        i = e.multiple;

    if (!i || Array.isArray(r)) {
      for (var o, a, s = 0, c = e.options.length; s < c; s++) {
        if (a = e.options[s], i) o = j(r, Wi(a)) > -1, a.selected !== o && (a.selected = o);else if (N(Wi(a), r)) return void (e.selectedIndex !== s && (e.selectedIndex = s));
      }

      i || (e.selectedIndex = -1);
    }
  }

  function qi(e, t) {
    return t.every(function (t) {
      return !N(t, e);
    });
  }

  function Wi(e) {
    return "_value" in e ? e._value : e.value;
  }

  function Zi(e) {
    e.target.composing = !0;
  }

  function Gi(e) {
    e.target.composing && (e.target.composing = !1, Xi(e.target, "input"));
  }

  function Xi(e, t) {
    var n = document.createEvent("HTMLEvents");
    n.initEvent(t, !0, !0), e.dispatchEvent(n);
  }

  function Yi(e) {
    return !e.componentInstance || e.data && e.data.transition ? e : Yi(e.componentInstance._vnode);
  }

  var Qi = {
    model: Vi,
    show: {
      bind: function bind(e, t, n) {
        var r = t.value,
            i = (n = Yi(n)).data && n.data.transition,
            o = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
        r && i ? (n.data.show = !0, Pi(n, function () {
          e.style.display = o;
        })) : e.style.display = r ? o : "none";
      },
      update: function update(e, t, n) {
        var r = t.value;
        !r != !t.oldValue && ((n = Yi(n)).data && n.data.transition ? (n.data.show = !0, r ? Pi(n, function () {
          e.style.display = e.__vOriginalDisplay;
        }) : Ri(n, function () {
          e.style.display = "none";
        })) : e.style.display = r ? e.__vOriginalDisplay : "none");
      },
      unbind: function unbind(e, t, n, r, i) {
        i || (e.style.display = e.__vOriginalDisplay);
      }
    }
  },
      eo = {
    name: String,
    appear: Boolean,
    css: Boolean,
    mode: String,
    type: String,
    enterClass: String,
    leaveClass: String,
    enterToClass: String,
    leaveToClass: String,
    enterActiveClass: String,
    leaveActiveClass: String,
    appearClass: String,
    appearActiveClass: String,
    appearToClass: String,
    duration: [Number, String, Object]
  };

  function to(e) {
    var t = e && e.componentOptions;
    return t && t.Ctor.options.abstract ? to(zt(t.children)) : e;
  }

  function no(e) {
    var t = {},
        n = e.$options;

    for (var r in n.propsData) {
      t[r] = e[r];
    }

    var i = n._parentListeners;

    for (var o in i) {
      t[b(o)] = i[o];
    }

    return t;
  }

  function ro(e, t) {
    if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {
      props: t.componentOptions.propsData
    });
  }

  var io = function io(e) {
    return e.tag || Ut(e);
  },
      oo = function oo(e) {
    return "show" === e.name;
  },
      ao = {
    name: "transition",
    props: eo,
    abstract: !0,
    render: function render(e) {
      var t = this,
          n = this.$slots.default;

      if (n && (n = n.filter(io)).length) {
        var r = this.mode,
            o = n[0];
        if (function (e) {
          for (; e = e.parent;) {
            if (e.data.transition) return !0;
          }
        }(this.$vnode)) return o;
        var a = to(o);
        if (!a) return o;
        if (this._leaving) return ro(e, o);
        var s = "__transition-" + this._uid + "-";
        a.key = null == a.key ? a.isComment ? s + "comment" : s + a.tag : i(a.key) ? 0 === String(a.key).indexOf(s) ? a.key : s + a.key : a.key;
        var c = (a.data || (a.data = {})).transition = no(this),
            u = this._vnode,
            l = to(u);

        if (a.data.directives && a.data.directives.some(oo) && (a.data.show = !0), l && l.data && !function (e, t) {
          return t.key === e.key && t.tag === e.tag;
        }(a, l) && !Ut(l) && (!l.componentInstance || !l.componentInstance._vnode.isComment)) {
          var f = l.data.transition = A({}, c);
          if ("out-in" === r) return this._leaving = !0, it(f, "afterLeave", function () {
            t._leaving = !1, t.$forceUpdate();
          }), ro(e, o);

          if ("in-out" === r) {
            if (Ut(a)) return u;

            var p,
                d = function d() {
              p();
            };

            it(c, "afterEnter", d), it(c, "enterCancelled", d), it(f, "delayLeave", function (e) {
              p = e;
            });
          }
        }

        return o;
      }
    }
  },
      so = A({
    tag: String,
    moveClass: String
  }, eo);

  function co(e) {
    e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
  }

  function uo(e) {
    e.data.newPos = e.elm.getBoundingClientRect();
  }

  function lo(e) {
    var t = e.data.pos,
        n = e.data.newPos,
        r = t.left - n.left,
        i = t.top - n.top;

    if (r || i) {
      e.data.moved = !0;
      var o = e.elm.style;
      o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)", o.transitionDuration = "0s";
    }
  }

  delete so.mode;
  var fo = {
    Transition: ao,
    TransitionGroup: {
      props: so,
      beforeMount: function beforeMount() {
        var e = this,
            t = this._update;

        this._update = function (n, r) {
          var i = Zt(e);
          e.__patch__(e._vnode, e.kept, !1, !0), e._vnode = e.kept, i(), t.call(e, n, r);
        };
      },
      render: function render(e) {
        for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), r = this.prevChildren = this.children, i = this.$slots.default || [], o = this.children = [], a = no(this), s = 0; s < i.length; s++) {
          var c = i[s];
          c.tag && null != c.key && 0 !== String(c.key).indexOf("__vlist") && (o.push(c), n[c.key] = c, (c.data || (c.data = {})).transition = a);
        }

        if (r) {
          for (var u = [], l = [], f = 0; f < r.length; f++) {
            var p = r[f];
            p.data.transition = a, p.data.pos = p.elm.getBoundingClientRect(), n[p.key] ? u.push(p) : l.push(p);
          }

          this.kept = e(t, null, u), this.removed = l;
        }

        return e(t, null, o);
      },
      updated: function updated() {
        var e = this.prevChildren,
            t = this.moveClass || (this.name || "v") + "-move";
        e.length && this.hasMove(e[0].elm, t) && (e.forEach(co), e.forEach(uo), e.forEach(lo), this._reflow = document.body.offsetHeight, e.forEach(function (e) {
          if (e.data.moved) {
            var n = e.elm,
                r = n.style;
            Ni(n, t), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(Ai, n._moveCb = function e(r) {
              r && r.target !== n || r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Ai, e), n._moveCb = null, ji(n, t));
            });
          }
        }));
      },
      methods: {
        hasMove: function hasMove(e, t) {
          if (!wi) return !1;
          if (this._hasMove) return this._hasMove;
          var n = e.cloneNode();
          e._transitionClasses && e._transitionClasses.forEach(function (e) {
            _i(n, e);
          }), gi(n, t), n.style.display = "none", this.$el.appendChild(n);
          var r = Mi(n);
          return this.$el.removeChild(n), this._hasMove = r.hasTransform;
        }
      }
    }
  };
  wn.config.mustUseProp = jn, wn.config.isReservedTag = Wn, wn.config.isReservedAttr = En, wn.config.getTagNamespace = Zn, wn.config.isUnknownElement = function (e) {
    if (!z) return !0;
    if (Wn(e)) return !1;
    if (e = e.toLowerCase(), null != Gn[e]) return Gn[e];
    var t = document.createElement(e);
    return e.indexOf("-") > -1 ? Gn[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : Gn[e] = /HTMLUnknownElement/.test(t.toString());
  }, A(wn.options.directives, Qi), A(wn.options.components, fo), wn.prototype.__patch__ = z ? zi : S, wn.prototype.$mount = function (e, t) {
    return function (e, t, n) {
      var r;
      return e.$el = t, e.$options.render || (e.$options.render = ve), Yt(e, "beforeMount"), r = function r() {
        e._update(e._render(), n);
      }, new fn(e, r, S, {
        before: function before() {
          e._isMounted && !e._isDestroyed && Yt(e, "beforeUpdate");
        }
      }, !0), n = !1, null == e.$vnode && (e._isMounted = !0, Yt(e, "mounted")), e;
    }(this, e = e && z ? Yn(e) : void 0, t);
  }, z && setTimeout(function () {
    F.devtools && ne && ne.emit("init", wn);
  }, 0);
  var po = /\{\{((?:.|\r?\n)+?)\}\}/g,
      vo = /[-.*+?^${}()|[\]\/\\]/g,
      ho = g(function (e) {
    var t = e[0].replace(vo, "\\$&"),
        n = e[1].replace(vo, "\\$&");
    return new RegExp(t + "((?:.|\\n)+?)" + n, "g");
  });
  var mo = {
    staticKeys: ["staticClass"],
    transformNode: function transformNode(e, t) {
      t.warn;
      var n = Fr(e, "class");
      n && (e.staticClass = JSON.stringify(n));
      var r = Ir(e, "class", !1);
      r && (e.classBinding = r);
    },
    genData: function genData(e) {
      var t = "";
      return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), t;
    }
  };

  var yo,
      go = {
    staticKeys: ["staticStyle"],
    transformNode: function transformNode(e, t) {
      t.warn;
      var n = Fr(e, "style");
      n && (e.staticStyle = JSON.stringify(ai(n)));
      var r = Ir(e, "style", !1);
      r && (e.styleBinding = r);
    },
    genData: function genData(e) {
      var t = "";
      return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), t;
    }
  },
      _o = function _o(e) {
    return (yo = yo || document.createElement("div")).innerHTML = e, yo.textContent;
  },
      bo = p("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),
      $o = p("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),
      wo = p("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),
      Co = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
      xo = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,
      ko = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + P.source + "]*",
      Ao = "((?:" + ko + "\\:)?" + ko + ")",
      Oo = new RegExp("^<" + Ao),
      So = /^\s*(\/?)>/,
      To = new RegExp("^<\\/" + Ao + "[^>]*>"),
      Eo = /^<!DOCTYPE [^>]+>/i,
      No = /^<!\--/,
      jo = /^<!\[/,
      Do = p("script,style,textarea", !0),
      Lo = {},
      Mo = {
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&amp;": "&",
    "&#10;": "\n",
    "&#9;": "\t",
    "&#39;": "'"
  },
      Io = /&(?:lt|gt|quot|amp|#39);/g,
      Fo = /&(?:lt|gt|quot|amp|#39|#10|#9);/g,
      Po = p("pre,textarea", !0),
      Ro = function Ro(e, t) {
    return e && Po(e) && "\n" === t[0];
  };

  function Ho(e, t) {
    var n = t ? Fo : Io;
    return e.replace(n, function (e) {
      return Mo[e];
    });
  }

  var Bo,
      Uo,
      zo,
      Vo,
      Ko,
      Jo,
      qo,
      Wo,
      Zo = /^@|^v-on:/,
      Go = /^v-|^@|^:|^#/,
      Xo = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,
      Yo = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/,
      Qo = /^\(|\)$/g,
      ea = /^\[.*\]$/,
      ta = /:(.*)$/,
      na = /^:|^\.|^v-bind:/,
      ra = /\.[^.\]]+(?=[^\]]*$)/g,
      ia = /^v-slot(:|$)|^#/,
      oa = /[\r\n]/,
      aa = /\s+/g,
      sa = g(_o),
      ca = "_empty_";

  function ua(e, t, n) {
    return {
      type: 1,
      tag: e,
      attrsList: t,
      attrsMap: ma(t),
      rawAttrsMap: {},
      parent: n,
      children: []
    };
  }

  function la(e, t) {
    Bo = t.warn || Sr, Jo = t.isPreTag || T, qo = t.mustUseProp || T, Wo = t.getTagNamespace || T;
    t.isReservedTag;
    zo = Tr(t.modules, "transformNode"), Vo = Tr(t.modules, "preTransformNode"), Ko = Tr(t.modules, "postTransformNode"), Uo = t.delimiters;
    var n,
        r,
        i = [],
        o = !1 !== t.preserveWhitespace,
        a = t.whitespace,
        s = !1,
        c = !1;

    function u(e) {
      if (l(e), s || e.processed || (e = fa(e, t)), i.length || e === n || n.if && (e.elseif || e.else) && da(n, {
        exp: e.elseif,
        block: e
      }), r && !e.forbidden) if (e.elseif || e.else) a = e, (u = function (e) {
        var t = e.length;

        for (; t--;) {
          if (1 === e[t].type) return e[t];
          e.pop();
        }
      }(r.children)) && u.if && da(u, {
        exp: a.elseif,
        block: a
      });else {
        if (e.slotScope) {
          var o = e.slotTarget || '"default"';
          (r.scopedSlots || (r.scopedSlots = {}))[o] = e;
        }

        r.children.push(e), e.parent = r;
      }
      var a, u;
      e.children = e.children.filter(function (e) {
        return !e.slotScope;
      }), l(e), e.pre && (s = !1), Jo(e.tag) && (c = !1);

      for (var f = 0; f < Ko.length; f++) {
        Ko[f](e, t);
      }
    }

    function l(e) {
      if (!c) for (var t; (t = e.children[e.children.length - 1]) && 3 === t.type && " " === t.text;) {
        e.children.pop();
      }
    }

    return function (e, t) {
      for (var n, r, i = [], o = t.expectHTML, a = t.isUnaryTag || T, s = t.canBeLeftOpenTag || T, c = 0; e;) {
        if (n = e, r && Do(r)) {
          var u = 0,
              l = r.toLowerCase(),
              f = Lo[l] || (Lo[l] = new RegExp("([\\s\\S]*?)(</" + l + "[^>]*>)", "i")),
              p = e.replace(f, function (e, n, r) {
            return u = r.length, Do(l) || "noscript" === l || (n = n.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), Ro(l, n) && (n = n.slice(1)), t.chars && t.chars(n), "";
          });
          c += e.length - p.length, e = p, A(l, c - u, c);
        } else {
          var d = e.indexOf("<");

          if (0 === d) {
            if (No.test(e)) {
              var v = e.indexOf("--\x3e");

              if (v >= 0) {
                t.shouldKeepComment && t.comment(e.substring(4, v), c, c + v + 3), C(v + 3);
                continue;
              }
            }

            if (jo.test(e)) {
              var h = e.indexOf("]>");

              if (h >= 0) {
                C(h + 2);
                continue;
              }
            }

            var m = e.match(Eo);

            if (m) {
              C(m[0].length);
              continue;
            }

            var y = e.match(To);

            if (y) {
              var g = c;
              C(y[0].length), A(y[1], g, c);
              continue;
            }

            var _ = x();

            if (_) {
              k(_), Ro(_.tagName, e) && C(1);
              continue;
            }
          }

          var b = void 0,
              $ = void 0,
              w = void 0;

          if (d >= 0) {
            for ($ = e.slice(d); !(To.test($) || Oo.test($) || No.test($) || jo.test($) || (w = $.indexOf("<", 1)) < 0);) {
              d += w, $ = e.slice(d);
            }

            b = e.substring(0, d);
          }

          d < 0 && (b = e), b && C(b.length), t.chars && b && t.chars(b, c - b.length, c);
        }

        if (e === n) {
          t.chars && t.chars(e);
          break;
        }
      }

      function C(t) {
        c += t, e = e.substring(t);
      }

      function x() {
        var t = e.match(Oo);

        if (t) {
          var n,
              r,
              i = {
            tagName: t[1],
            attrs: [],
            start: c
          };

          for (C(t[0].length); !(n = e.match(So)) && (r = e.match(xo) || e.match(Co));) {
            r.start = c, C(r[0].length), r.end = c, i.attrs.push(r);
          }

          if (n) return i.unarySlash = n[1], C(n[0].length), i.end = c, i;
        }
      }

      function k(e) {
        var n = e.tagName,
            c = e.unarySlash;
        o && ("p" === r && wo(n) && A(r), s(n) && r === n && A(n));

        for (var u = a(n) || !!c, l = e.attrs.length, f = new Array(l), p = 0; p < l; p++) {
          var d = e.attrs[p],
              v = d[3] || d[4] || d[5] || "",
              h = "a" === n && "href" === d[1] ? t.shouldDecodeNewlinesForHref : t.shouldDecodeNewlines;
          f[p] = {
            name: d[1],
            value: Ho(v, h)
          };
        }

        u || (i.push({
          tag: n,
          lowerCasedTag: n.toLowerCase(),
          attrs: f,
          start: e.start,
          end: e.end
        }), r = n), t.start && t.start(n, f, u, e.start, e.end);
      }

      function A(e, n, o) {
        var a, s;
        if (null == n && (n = c), null == o && (o = c), e) for (s = e.toLowerCase(), a = i.length - 1; a >= 0 && i[a].lowerCasedTag !== s; a--) {
          ;
        } else a = 0;

        if (a >= 0) {
          for (var u = i.length - 1; u >= a; u--) {
            t.end && t.end(i[u].tag, n, o);
          }

          i.length = a, r = a && i[a - 1].tag;
        } else "br" === s ? t.start && t.start(e, [], !0, n, o) : "p" === s && (t.start && t.start(e, [], !1, n, o), t.end && t.end(e, n, o));
      }

      A();
    }(e, {
      warn: Bo,
      expectHTML: t.expectHTML,
      isUnaryTag: t.isUnaryTag,
      canBeLeftOpenTag: t.canBeLeftOpenTag,
      shouldDecodeNewlines: t.shouldDecodeNewlines,
      shouldDecodeNewlinesForHref: t.shouldDecodeNewlinesForHref,
      shouldKeepComment: t.comments,
      outputSourceRange: t.outputSourceRange,
      start: function start(e, o, a, l, f) {
        var p = r && r.ns || Wo(e);
        q && "svg" === p && (o = function (e) {
          for (var t = [], n = 0; n < e.length; n++) {
            var r = e[n];
            ya.test(r.name) || (r.name = r.name.replace(ga, ""), t.push(r));
          }

          return t;
        }(o));
        var d,
            v = ua(e, o, r);
        p && (v.ns = p), "style" !== (d = v).tag && ("script" !== d.tag || d.attrsMap.type && "text/javascript" !== d.attrsMap.type) || te() || (v.forbidden = !0);

        for (var h = 0; h < Vo.length; h++) {
          v = Vo[h](v, t) || v;
        }

        s || (!function (e) {
          null != Fr(e, "v-pre") && (e.pre = !0);
        }(v), v.pre && (s = !0)), Jo(v.tag) && (c = !0), s ? function (e) {
          var t = e.attrsList,
              n = t.length;
          if (n) for (var r = e.attrs = new Array(n), i = 0; i < n; i++) {
            r[i] = {
              name: t[i].name,
              value: JSON.stringify(t[i].value)
            }, null != t[i].start && (r[i].start = t[i].start, r[i].end = t[i].end);
          } else e.pre || (e.plain = !0);
        }(v) : v.processed || (pa(v), function (e) {
          var t = Fr(e, "v-if");
          if (t) e.if = t, da(e, {
            exp: t,
            block: e
          });else {
            null != Fr(e, "v-else") && (e.else = !0);
            var n = Fr(e, "v-else-if");
            n && (e.elseif = n);
          }
        }(v), function (e) {
          null != Fr(e, "v-once") && (e.once = !0);
        }(v)), n || (n = v), a ? u(v) : (r = v, i.push(v));
      },
      end: function end(e, t, n) {
        var o = i[i.length - 1];
        i.length -= 1, r = i[i.length - 1], u(o);
      },
      chars: function chars(e, t, n) {
        if (r && (!q || "textarea" !== r.tag || r.attrsMap.placeholder !== e)) {
          var i,
              u,
              l,
              f = r.children;
          if (e = c || e.trim() ? "script" === (i = r).tag || "style" === i.tag ? e : sa(e) : f.length ? a ? "condense" === a && oa.test(e) ? "" : " " : o ? " " : "" : "") c || "condense" !== a || (e = e.replace(aa, " ")), !s && " " !== e && (u = function (e, t) {
            var n = t ? ho(t) : po;

            if (n.test(e)) {
              for (var r, i, o, a = [], s = [], c = n.lastIndex = 0; r = n.exec(e);) {
                (i = r.index) > c && (s.push(o = e.slice(c, i)), a.push(JSON.stringify(o)));
                var u = Ar(r[1].trim());
                a.push("_s(" + u + ")"), s.push({
                  "@binding": u
                }), c = i + r[0].length;
              }

              return c < e.length && (s.push(o = e.slice(c)), a.push(JSON.stringify(o))), {
                expression: a.join("+"),
                tokens: s
              };
            }
          }(e, Uo)) ? l = {
            type: 2,
            expression: u.expression,
            tokens: u.tokens,
            text: e
          } : " " === e && f.length && " " === f[f.length - 1].text || (l = {
            type: 3,
            text: e
          }), l && f.push(l);
        }
      },
      comment: function comment(e, t, n) {
        if (r) {
          var i = {
            type: 3,
            text: e,
            isComment: !0
          };
          r.children.push(i);
        }
      }
    }), n;
  }

  function fa(e, t) {
    var n, r;
    (r = Ir(n = e, "key")) && (n.key = r), e.plain = !e.key && !e.scopedSlots && !e.attrsList.length, function (e) {
      var t = Ir(e, "ref");
      t && (e.ref = t, e.refInFor = function (e) {
        var t = e;

        for (; t;) {
          if (void 0 !== t.for) return !0;
          t = t.parent;
        }

        return !1;
      }(e));
    }(e), function (e) {
      var t;
      "template" === e.tag ? (t = Fr(e, "scope"), e.slotScope = t || Fr(e, "slot-scope")) : (t = Fr(e, "slot-scope")) && (e.slotScope = t);
      var n = Ir(e, "slot");
      n && (e.slotTarget = '""' === n ? '"default"' : n, e.slotTargetDynamic = !(!e.attrsMap[":slot"] && !e.attrsMap["v-bind:slot"]), "template" === e.tag || e.slotScope || Nr(e, "slot", n, function (e, t) {
        return e.rawAttrsMap[":" + t] || e.rawAttrsMap["v-bind:" + t] || e.rawAttrsMap[t];
      }(e, "slot")));

      if ("template" === e.tag) {
        var r = Pr(e, ia);

        if (r) {
          var i = va(r),
              o = i.name,
              a = i.dynamic;
          e.slotTarget = o, e.slotTargetDynamic = a, e.slotScope = r.value || ca;
        }
      } else {
        var s = Pr(e, ia);

        if (s) {
          var c = e.scopedSlots || (e.scopedSlots = {}),
              u = va(s),
              l = u.name,
              f = u.dynamic,
              p = c[l] = ua("template", [], e);
          p.slotTarget = l, p.slotTargetDynamic = f, p.children = e.children.filter(function (e) {
            if (!e.slotScope) return e.parent = p, !0;
          }), p.slotScope = s.value || ca, e.children = [], e.plain = !1;
        }
      }
    }(e), function (e) {
      "slot" === e.tag && (e.slotName = Ir(e, "name"));
    }(e), function (e) {
      var t;
      (t = Ir(e, "is")) && (e.component = t);
      null != Fr(e, "inline-template") && (e.inlineTemplate = !0);
    }(e);

    for (var i = 0; i < zo.length; i++) {
      e = zo[i](e, t) || e;
    }

    return function (e) {
      var t,
          n,
          r,
          i,
          o,
          a,
          s,
          c,
          u = e.attrsList;

      for (t = 0, n = u.length; t < n; t++) {
        if (r = i = u[t].name, o = u[t].value, Go.test(r)) {
          if (e.hasBindings = !0, (a = ha(r.replace(Go, ""))) && (r = r.replace(ra, "")), na.test(r)) r = r.replace(na, ""), o = Ar(o), (c = ea.test(r)) && (r = r.slice(1, -1)), a && (a.prop && !c && "innerHtml" === (r = b(r)) && (r = "innerHTML"), a.camel && !c && (r = b(r)), a.sync && (s = Br(o, "$event"), c ? Mr(e, '"update:"+(' + r + ")", s, null, !1, 0, u[t], !0) : (Mr(e, "update:" + b(r), s, null, !1, 0, u[t]), C(r) !== b(r) && Mr(e, "update:" + C(r), s, null, !1, 0, u[t])))), a && a.prop || !e.component && qo(e.tag, e.attrsMap.type, r) ? Er(e, r, o, u[t], c) : Nr(e, r, o, u[t], c);else if (Zo.test(r)) r = r.replace(Zo, ""), (c = ea.test(r)) && (r = r.slice(1, -1)), Mr(e, r, o, a, !1, 0, u[t], c);else {
            var l = (r = r.replace(Go, "")).match(ta),
                f = l && l[1];
            c = !1, f && (r = r.slice(0, -(f.length + 1)), ea.test(f) && (f = f.slice(1, -1), c = !0)), Dr(e, r, i, o, f, c, a, u[t]);
          }
        } else Nr(e, r, JSON.stringify(o), u[t]), !e.component && "muted" === r && qo(e.tag, e.attrsMap.type, r) && Er(e, r, "true", u[t]);
      }
    }(e), e;
  }

  function pa(e) {
    var t;

    if (t = Fr(e, "v-for")) {
      var n = function (e) {
        var t = e.match(Xo);
        if (!t) return;
        var n = {};
        n.for = t[2].trim();
        var r = t[1].trim().replace(Qo, ""),
            i = r.match(Yo);
        i ? (n.alias = r.replace(Yo, "").trim(), n.iterator1 = i[1].trim(), i[2] && (n.iterator2 = i[2].trim())) : n.alias = r;
        return n;
      }(t);

      n && A(e, n);
    }
  }

  function da(e, t) {
    e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t);
  }

  function va(e) {
    var t = e.name.replace(ia, "");
    return t || "#" !== e.name[0] && (t = "default"), ea.test(t) ? {
      name: t.slice(1, -1),
      dynamic: !0
    } : {
      name: '"' + t + '"',
      dynamic: !1
    };
  }

  function ha(e) {
    var t = e.match(ra);

    if (t) {
      var n = {};
      return t.forEach(function (e) {
        n[e.slice(1)] = !0;
      }), n;
    }
  }

  function ma(e) {
    for (var t = {}, n = 0, r = e.length; n < r; n++) {
      t[e[n].name] = e[n].value;
    }

    return t;
  }

  var ya = /^xmlns:NS\d+/,
      ga = /^NS\d+:/;

  function _a(e) {
    return ua(e.tag, e.attrsList.slice(), e.parent);
  }

  var ba = [mo, go, {
    preTransformNode: function preTransformNode(e, t) {
      if ("input" === e.tag) {
        var n,
            r = e.attrsMap;
        if (!r["v-model"]) return;

        if ((r[":type"] || r["v-bind:type"]) && (n = Ir(e, "type")), r.type || n || !r["v-bind"] || (n = "(" + r["v-bind"] + ").type"), n) {
          var i = Fr(e, "v-if", !0),
              o = i ? "&&(" + i + ")" : "",
              a = null != Fr(e, "v-else", !0),
              s = Fr(e, "v-else-if", !0),
              c = _a(e);

          pa(c), jr(c, "type", "checkbox"), fa(c, t), c.processed = !0, c.if = "(" + n + ")==='checkbox'" + o, da(c, {
            exp: c.if,
            block: c
          });

          var u = _a(e);

          Fr(u, "v-for", !0), jr(u, "type", "radio"), fa(u, t), da(c, {
            exp: "(" + n + ")==='radio'" + o,
            block: u
          });

          var l = _a(e);

          return Fr(l, "v-for", !0), jr(l, ":type", n), fa(l, t), da(c, {
            exp: i,
            block: l
          }), a ? c.else = !0 : s && (c.elseif = s), c;
        }
      }
    }
  }];
  var $a,
      wa,
      Ca = {
    expectHTML: !0,
    modules: ba,
    directives: {
      model: function model(e, t, n) {
        var r = t.value,
            i = t.modifiers,
            o = e.tag,
            a = e.attrsMap.type;
        if (e.component) return Hr(e, r, i), !1;
        if ("select" === o) !function (e, t, n) {
          var r = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
          r = r + " " + Br(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), Mr(e, "change", r, null, !0);
        }(e, r, i);else if ("input" === o && "checkbox" === a) !function (e, t, n) {
          var r = n && n.number,
              i = Ir(e, "value") || "null",
              o = Ir(e, "true-value") || "true",
              a = Ir(e, "false-value") || "false";
          Er(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + i + ")>-1" + ("true" === o ? ":(" + t + ")" : ":_q(" + t + "," + o + ")")), Mr(e, "change", "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + Br(t, "$$a.concat([$$v])") + ")}else{$$i>-1&&(" + Br(t, "$$a.slice(0,$$i).concat($$a.slice($$i+1))") + ")}}else{" + Br(t, "$$c") + "}", null, !0);
        }(e, r, i);else if ("input" === o && "radio" === a) !function (e, t, n) {
          var r = n && n.number,
              i = Ir(e, "value") || "null";
          Er(e, "checked", "_q(" + t + "," + (i = r ? "_n(" + i + ")" : i) + ")"), Mr(e, "change", Br(t, i), null, !0);
        }(e, r, i);else if ("input" === o || "textarea" === o) !function (e, t, n) {
          var r = e.attrsMap.type,
              i = n || {},
              o = i.lazy,
              a = i.number,
              s = i.trim,
              c = !o && "range" !== r,
              u = o ? "change" : "range" === r ? Wr : "input",
              l = "$event.target.value";
          s && (l = "$event.target.value.trim()"), a && (l = "_n(" + l + ")");
          var f = Br(t, l);
          c && (f = "if($event.target.composing)return;" + f), Er(e, "value", "(" + t + ")"), Mr(e, u, f, null, !0), (s || a) && Mr(e, "blur", "$forceUpdate()");
        }(e, r, i);else if (!F.isReservedTag(o)) return Hr(e, r, i), !1;
        return !0;
      },
      text: function text(e, t) {
        t.value && Er(e, "textContent", "_s(" + t.value + ")", t);
      },
      html: function html(e, t) {
        t.value && Er(e, "innerHTML", "_s(" + t.value + ")", t);
      }
    },
    isPreTag: function isPreTag(e) {
      return "pre" === e;
    },
    isUnaryTag: bo,
    mustUseProp: jn,
    canBeLeftOpenTag: $o,
    isReservedTag: Wn,
    getTagNamespace: Zn,
    staticKeys: function (e) {
      return e.reduce(function (e, t) {
        return e.concat(t.staticKeys || []);
      }, []).join(",");
    }(ba)
  },
      xa = g(function (e) {
    return p("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (e ? "," + e : ""));
  });

  function ka(e, t) {
    e && ($a = xa(t.staticKeys || ""), wa = t.isReservedTag || T, function e(t) {
      t.static = function (e) {
        if (2 === e.type) return !1;
        if (3 === e.type) return !0;
        return !(!e.pre && (e.hasBindings || e.if || e.for || d(e.tag) || !wa(e.tag) || function (e) {
          for (; e.parent;) {
            if ("template" !== (e = e.parent).tag) return !1;
            if (e.for) return !0;
          }

          return !1;
        }(e) || !Object.keys(e).every($a)));
      }(t);

      if (1 === t.type) {
        if (!wa(t.tag) && "slot" !== t.tag && null == t.attrsMap["inline-template"]) return;

        for (var n = 0, r = t.children.length; n < r; n++) {
          var i = t.children[n];
          e(i), i.static || (t.static = !1);
        }

        if (t.ifConditions) for (var o = 1, a = t.ifConditions.length; o < a; o++) {
          var s = t.ifConditions[o].block;
          e(s), s.static || (t.static = !1);
        }
      }
    }(e), function e(t, n) {
      if (1 === t.type) {
        if ((t.static || t.once) && (t.staticInFor = n), t.static && t.children.length && (1 !== t.children.length || 3 !== t.children[0].type)) return void (t.staticRoot = !0);
        if (t.staticRoot = !1, t.children) for (var r = 0, i = t.children.length; r < i; r++) {
          e(t.children[r], n || !!t.for);
        }
        if (t.ifConditions) for (var o = 1, a = t.ifConditions.length; o < a; o++) {
          e(t.ifConditions[o].block, n);
        }
      }
    }(e, !1));
  }

  var Aa = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/,
      Oa = /\([^)]*?\);*$/,
      Sa = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/,
      Ta = {
    esc: 27,
    tab: 9,
    enter: 13,
    space: 32,
    up: 38,
    left: 37,
    right: 39,
    down: 40,
    delete: [8, 46]
  },
      Ea = {
    esc: ["Esc", "Escape"],
    tab: "Tab",
    enter: "Enter",
    space: [" ", "Spacebar"],
    up: ["Up", "ArrowUp"],
    left: ["Left", "ArrowLeft"],
    right: ["Right", "ArrowRight"],
    down: ["Down", "ArrowDown"],
    delete: ["Backspace", "Delete", "Del"]
  },
      Na = function Na(e) {
    return "if(" + e + ")return null;";
  },
      ja = {
    stop: "$event.stopPropagation();",
    prevent: "$event.preventDefault();",
    self: Na("$event.target !== $event.currentTarget"),
    ctrl: Na("!$event.ctrlKey"),
    shift: Na("!$event.shiftKey"),
    alt: Na("!$event.altKey"),
    meta: Na("!$event.metaKey"),
    left: Na("'button' in $event && $event.button !== 0"),
    middle: Na("'button' in $event && $event.button !== 1"),
    right: Na("'button' in $event && $event.button !== 2")
  };

  function Da(e, t) {
    var n = t ? "nativeOn:" : "on:",
        r = "",
        i = "";

    for (var o in e) {
      var a = La(e[o]);
      e[o] && e[o].dynamic ? i += o + "," + a + "," : r += '"' + o + '":' + a + ",";
    }

    return r = "{" + r.slice(0, -1) + "}", i ? n + "_d(" + r + ",[" + i.slice(0, -1) + "])" : n + r;
  }

  function La(e) {
    if (!e) return "function(){}";
    if (Array.isArray(e)) return "[" + e.map(function (e) {
      return La(e);
    }).join(",") + "]";
    var t = Sa.test(e.value),
        n = Aa.test(e.value),
        r = Sa.test(e.value.replace(Oa, ""));

    if (e.modifiers) {
      var i = "",
          o = "",
          a = [];

      for (var s in e.modifiers) {
        if (ja[s]) o += ja[s], Ta[s] && a.push(s);else if ("exact" === s) {
          var c = e.modifiers;
          o += Na(["ctrl", "shift", "alt", "meta"].filter(function (e) {
            return !c[e];
          }).map(function (e) {
            return "$event." + e + "Key";
          }).join("||"));
        } else a.push(s);
      }

      return a.length && (i += function (e) {
        return "if(!$event.type.indexOf('key')&&" + e.map(Ma).join("&&") + ")return null;";
      }(a)), o && (i += o), "function($event){" + i + (t ? "return " + e.value + "($event)" : n ? "return (" + e.value + ")($event)" : r ? "return " + e.value : e.value) + "}";
    }

    return t || n ? e.value : "function($event){" + (r ? "return " + e.value : e.value) + "}";
  }

  function Ma(e) {
    var t = parseInt(e, 10);
    if (t) return "$event.keyCode!==" + t;
    var n = Ta[e],
        r = Ea[e];
    return "_k($event.keyCode," + JSON.stringify(e) + "," + JSON.stringify(n) + ",$event.key," + JSON.stringify(r) + ")";
  }

  var Ia = {
    on: function on(e, t) {
      e.wrapListeners = function (e) {
        return "_g(" + e + "," + t.value + ")";
      };
    },
    bind: function bind(e, t) {
      e.wrapData = function (n) {
        return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")";
      };
    },
    cloak: S
  },
      Fa = function Fa(e) {
    this.options = e, this.warn = e.warn || Sr, this.transforms = Tr(e.modules, "transformCode"), this.dataGenFns = Tr(e.modules, "genData"), this.directives = A(A({}, Ia), e.directives);
    var t = e.isReservedTag || T;
    this.maybeComponent = function (e) {
      return !!e.component || !t(e.tag);
    }, this.onceId = 0, this.staticRenderFns = [], this.pre = !1;
  };

  function Pa(e, t) {
    var n = new Fa(t);
    return {
      render: "with(this){return " + (e ? Ra(e, n) : '_c("div")') + "}",
      staticRenderFns: n.staticRenderFns
    };
  }

  function Ra(e, t) {
    if (e.parent && (e.pre = e.pre || e.parent.pre), e.staticRoot && !e.staticProcessed) return Ha(e, t);
    if (e.once && !e.onceProcessed) return Ba(e, t);
    if (e.for && !e.forProcessed) return za(e, t);
    if (e.if && !e.ifProcessed) return Ua(e, t);

    if ("template" !== e.tag || e.slotTarget || t.pre) {
      if ("slot" === e.tag) return function (e, t) {
        var n = e.slotName || '"default"',
            r = qa(e, t),
            i = "_t(" + n + (r ? "," + r : ""),
            o = e.attrs || e.dynamicAttrs ? Ga((e.attrs || []).concat(e.dynamicAttrs || []).map(function (e) {
          return {
            name: b(e.name),
            value: e.value,
            dynamic: e.dynamic
          };
        })) : null,
            a = e.attrsMap["v-bind"];
        !o && !a || r || (i += ",null");
        o && (i += "," + o);
        a && (i += (o ? "" : ",null") + "," + a);
        return i + ")";
      }(e, t);
      var n;
      if (e.component) n = function (e, t, n) {
        var r = t.inlineTemplate ? null : qa(t, n, !0);
        return "_c(" + e + "," + Va(t, n) + (r ? "," + r : "") + ")";
      }(e.component, e, t);else {
        var r;
        (!e.plain || e.pre && t.maybeComponent(e)) && (r = Va(e, t));
        var i = e.inlineTemplate ? null : qa(e, t, !0);
        n = "_c('" + e.tag + "'" + (r ? "," + r : "") + (i ? "," + i : "") + ")";
      }

      for (var o = 0; o < t.transforms.length; o++) {
        n = t.transforms[o](e, n);
      }

      return n;
    }

    return qa(e, t) || "void 0";
  }

  function Ha(e, t) {
    e.staticProcessed = !0;
    var n = t.pre;
    return e.pre && (t.pre = e.pre), t.staticRenderFns.push("with(this){return " + Ra(e, t) + "}"), t.pre = n, "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")";
  }

  function Ba(e, t) {
    if (e.onceProcessed = !0, e.if && !e.ifProcessed) return Ua(e, t);

    if (e.staticInFor) {
      for (var n = "", r = e.parent; r;) {
        if (r.for) {
          n = r.key;
          break;
        }

        r = r.parent;
      }

      return n ? "_o(" + Ra(e, t) + "," + t.onceId++ + "," + n + ")" : Ra(e, t);
    }

    return Ha(e, t);
  }

  function Ua(e, t, n, r) {
    return e.ifProcessed = !0, function e(t, n, r, i) {
      if (!t.length) return i || "_e()";
      var o = t.shift();
      return o.exp ? "(" + o.exp + ")?" + a(o.block) + ":" + e(t, n, r, i) : "" + a(o.block);

      function a(e) {
        return r ? r(e, n) : e.once ? Ba(e, n) : Ra(e, n);
      }
    }(e.ifConditions.slice(), t, n, r);
  }

  function za(e, t, n, r) {
    var i = e.for,
        o = e.alias,
        a = e.iterator1 ? "," + e.iterator1 : "",
        s = e.iterator2 ? "," + e.iterator2 : "";
    return e.forProcessed = !0, (r || "_l") + "((" + i + "),function(" + o + a + s + "){return " + (n || Ra)(e, t) + "})";
  }

  function Va(e, t) {
    var n = "{",
        r = function (e, t) {
      var n = e.directives;
      if (!n) return;
      var r,
          i,
          o,
          a,
          s = "directives:[",
          c = !1;

      for (r = 0, i = n.length; r < i; r++) {
        o = n[r], a = !0;
        var u = t.directives[o.name];
        u && (a = !!u(e, o, t.warn)), a && (c = !0, s += '{name:"' + o.name + '",rawName:"' + o.rawName + '"' + (o.value ? ",value:(" + o.value + "),expression:" + JSON.stringify(o.value) : "") + (o.arg ? ",arg:" + (o.isDynamicArg ? o.arg : '"' + o.arg + '"') : "") + (o.modifiers ? ",modifiers:" + JSON.stringify(o.modifiers) : "") + "},");
      }

      if (c) return s.slice(0, -1) + "]";
    }(e, t);

    r && (n += r + ","), e.key && (n += "key:" + e.key + ","), e.ref && (n += "ref:" + e.ref + ","), e.refInFor && (n += "refInFor:true,"), e.pre && (n += "pre:true,"), e.component && (n += 'tag:"' + e.tag + '",');

    for (var i = 0; i < t.dataGenFns.length; i++) {
      n += t.dataGenFns[i](e);
    }

    if (e.attrs && (n += "attrs:" + Ga(e.attrs) + ","), e.props && (n += "domProps:" + Ga(e.props) + ","), e.events && (n += Da(e.events, !1) + ","), e.nativeEvents && (n += Da(e.nativeEvents, !0) + ","), e.slotTarget && !e.slotScope && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += function (e, t, n) {
      var r = e.for || Object.keys(t).some(function (e) {
        var n = t[e];
        return n.slotTargetDynamic || n.if || n.for || Ka(n);
      }),
          i = !!e.if;
      if (!r) for (var o = e.parent; o;) {
        if (o.slotScope && o.slotScope !== ca || o.for) {
          r = !0;
          break;
        }

        o.if && (i = !0), o = o.parent;
      }
      var a = Object.keys(t).map(function (e) {
        return Ja(t[e], n);
      }).join(",");
      return "scopedSlots:_u([" + a + "]" + (r ? ",null,true" : "") + (!r && i ? ",null,false," + function (e) {
        var t = 5381,
            n = e.length;

        for (; n;) {
          t = 33 * t ^ e.charCodeAt(--n);
        }

        return t >>> 0;
      }(a) : "") + ")";
    }(e, e.scopedSlots, t) + ","), e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), e.inlineTemplate) {
      var o = function (e, t) {
        var n = e.children[0];

        if (n && 1 === n.type) {
          var r = Pa(n, t.options);
          return "inlineTemplate:{render:function(){" + r.render + "},staticRenderFns:[" + r.staticRenderFns.map(function (e) {
            return "function(){" + e + "}";
          }).join(",") + "]}";
        }
      }(e, t);

      o && (n += o + ",");
    }

    return n = n.replace(/,$/, "") + "}", e.dynamicAttrs && (n = "_b(" + n + ',"' + e.tag + '",' + Ga(e.dynamicAttrs) + ")"), e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), n;
  }

  function Ka(e) {
    return 1 === e.type && ("slot" === e.tag || e.children.some(Ka));
  }

  function Ja(e, t) {
    var n = e.attrsMap["slot-scope"];
    if (e.if && !e.ifProcessed && !n) return Ua(e, t, Ja, "null");
    if (e.for && !e.forProcessed) return za(e, t, Ja);
    var r = e.slotScope === ca ? "" : String(e.slotScope),
        i = "function(" + r + "){return " + ("template" === e.tag ? e.if && n ? "(" + e.if + ")?" + (qa(e, t) || "undefined") + ":undefined" : qa(e, t) || "undefined" : Ra(e, t)) + "}",
        o = r ? "" : ",proxy:true";
    return "{key:" + (e.slotTarget || '"default"') + ",fn:" + i + o + "}";
  }

  function qa(e, t, n, r, i) {
    var o = e.children;

    if (o.length) {
      var a = o[0];

      if (1 === o.length && a.for && "template" !== a.tag && "slot" !== a.tag) {
        var s = n ? t.maybeComponent(a) ? ",1" : ",0" : "";
        return "" + (r || Ra)(a, t) + s;
      }

      var c = n ? function (e, t) {
        for (var n = 0, r = 0; r < e.length; r++) {
          var i = e[r];

          if (1 === i.type) {
            if (Wa(i) || i.ifConditions && i.ifConditions.some(function (e) {
              return Wa(e.block);
            })) {
              n = 2;
              break;
            }

            (t(i) || i.ifConditions && i.ifConditions.some(function (e) {
              return t(e.block);
            })) && (n = 1);
          }
        }

        return n;
      }(o, t.maybeComponent) : 0,
          u = i || Za;
      return "[" + o.map(function (e) {
        return u(e, t);
      }).join(",") + "]" + (c ? "," + c : "");
    }
  }

  function Wa(e) {
    return void 0 !== e.for || "template" === e.tag || "slot" === e.tag;
  }

  function Za(e, t) {
    return 1 === e.type ? Ra(e, t) : 3 === e.type && e.isComment ? (r = e, "_e(" + JSON.stringify(r.text) + ")") : "_v(" + (2 === (n = e).type ? n.expression : Xa(JSON.stringify(n.text))) + ")";
    var n, r;
  }

  function Ga(e) {
    for (var t = "", n = "", r = 0; r < e.length; r++) {
      var i = e[r],
          o = Xa(i.value);
      i.dynamic ? n += i.name + "," + o + "," : t += '"' + i.name + '":' + o + ",";
    }

    return t = "{" + t.slice(0, -1) + "}", n ? "_d(" + t + ",[" + n.slice(0, -1) + "])" : t;
  }

  function Xa(e) {
    return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
  }

  new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b");

  function Ya(e, t) {
    try {
      return new Function(e);
    } catch (n) {
      return t.push({
        err: n,
        code: e
      }), S;
    }
  }

  function Qa(e) {
    var t = Object.create(null);
    return function (n, r, i) {
      (r = A({}, r)).warn;
      delete r.warn;
      var o = r.delimiters ? String(r.delimiters) + n : n;
      if (t[o]) return t[o];
      var a = e(n, r),
          s = {},
          c = [];
      return s.render = Ya(a.render, c), s.staticRenderFns = a.staticRenderFns.map(function (e) {
        return Ya(e, c);
      }), t[o] = s;
    };
  }

  var es,
      ts,
      ns = (es = function es(e, t) {
    var n = la(e.trim(), t);
    !1 !== t.optimize && ka(n, t);
    var r = Pa(n, t);
    return {
      ast: n,
      render: r.render,
      staticRenderFns: r.staticRenderFns
    };
  }, function (e) {
    function t(t, n) {
      var r = Object.create(e),
          i = [],
          o = [];
      if (n) for (var a in n.modules && (r.modules = (e.modules || []).concat(n.modules)), n.directives && (r.directives = A(Object.create(e.directives || null), n.directives)), n) {
        "modules" !== a && "directives" !== a && (r[a] = n[a]);
      }

      r.warn = function (e, t, n) {
        (n ? o : i).push(e);
      };

      var s = es(t.trim(), r);
      return s.errors = i, s.tips = o, s;
    }

    return {
      compile: t,
      compileToFunctions: Qa(t)
    };
  })(Ca),
      rs = (ns.compile, ns.compileToFunctions);

  function is(e) {
    return (ts = ts || document.createElement("div")).innerHTML = e ? '<a href="\n"/>' : '<div a="\n"/>', ts.innerHTML.indexOf("&#10;") > 0;
  }

  var os = !!z && is(!1),
      as = !!z && is(!0),
      ss = g(function (e) {
    var t = Yn(e);
    return t && t.innerHTML;
  }),
      cs = wn.prototype.$mount;
  return wn.prototype.$mount = function (e, t) {
    if ((e = e && Yn(e)) === document.body || e === document.documentElement) return this;
    var n = this.$options;

    if (!n.render) {
      var r = n.template;
      if (r) {
        if ("string" == typeof r) "#" === r.charAt(0) && (r = ss(r));else {
          if (!r.nodeType) return this;
          r = r.innerHTML;
        }
      } else e && (r = function (e) {
        if (e.outerHTML) return e.outerHTML;
        var t = document.createElement("div");
        return t.appendChild(e.cloneNode(!0)), t.innerHTML;
      }(e));

      if (r) {
        var i = rs(r, {
          outputSourceRange: !1,
          shouldDecodeNewlines: os,
          shouldDecodeNewlinesForHref: as,
          delimiters: n.delimiters,
          comments: n.comments
        }, this),
            o = i.render,
            a = i.staticRenderFns;
        n.render = o, n.staticRenderFns = a;
      }
    }

    return cs.call(this, e, t);
  }, wn.compile = rs, wn;
});
!function (t, e) {
  'object' == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) && 'object' == (typeof module === "undefined" ? "undefined" : _typeof2(module)) ? module.exports = e() : 'function' == typeof define && define.amd ? define([], e) : 'object' == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) ? exports['vue-scrollactive'] = e() : t.vueScrollactive = e();
}('undefined' != typeof self ? self : void 0, function () {
  return function (t) {
    var e = {};

    function r(n) {
      if (e[n]) return e[n].exports;
      var o = e[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
    }

    return r.m = t, r.c = e, r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: n
      });
    }, r.r = function (t) {
      'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: 'Module'
      }), Object.defineProperty(t, '__esModule', {
        value: !0
      });
    }, r.t = function (t, e) {
      if (1 & e && (t = r(t)), 8 & e) return t;
      if (4 & e && 'object' == _typeof2(t) && t && t.__esModule) return t;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, 'default', {
        enumerable: !0,
        value: t
      }), 2 & e && 'string' != typeof t) for (var o in t) {
        r.d(n, o, function (e) {
          return t[e];
        }.bind(null, o));
      }
      return n;
    }, r.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return r.d(e, 'a', e), e;
    }, r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, r.p = '/dist/', r(r.s = 1);
  }([function (t, e) {
    var r = 'function' == typeof Float32Array;

    function n(t, e) {
      return 1 - 3 * e + 3 * t;
    }

    function o(t, e) {
      return 3 * e - 6 * t;
    }

    function i(t) {
      return 3 * t;
    }

    function s(t, e, r) {
      return ((n(e, r) * t + o(e, r)) * t + i(e)) * t;
    }

    function l(t, e, r) {
      return 3 * n(e, r) * t * t + 2 * o(e, r) * t + i(e);
    }

    function a(t) {
      return t;
    }

    t.exports = function (t, e, n, o) {
      if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error('bezier x values must be in [0, 1] range');
      if (t === e && n === o) return a;

      for (var i = r ? new Float32Array(11) : new Array(11), c = 0; c < 11; ++c) {
        i[c] = s(0.1 * c, t, n);
      }

      function u(e) {
        for (var r = 0, o = 1; 10 !== o && i[o] <= e; ++o) {
          r += 0.1;
        }

        --o;
        var a = r + 0.1 * ((e - i[o]) / (i[o + 1] - i[o])),
            c = l(a, t, n);
        return c >= 0.001 ? function (t, e, r, n) {
          for (var o = 0; o < 4; ++o) {
            var i = l(e, r, n);
            if (0 === i) return e;
            e -= (s(e, r, n) - t) / i;
          }

          return e;
        }(e, a, t, n) : 0 === c ? a : function (t, e, r, n, o) {
          var i,
              l,
              a = 0;

          do {
            (i = s(l = e + (r - e) / 2, n, o) - t) > 0 ? r = l : e = l;
          } while (Math.abs(i) > 1e-7 && ++a < 10);

          return l;
        }(e, r, r + 0.1, t, n);
      }

      return function (t) {
        return 0 === t ? 0 : 1 === t ? 1 : s(u(t), e, o);
      };
    };
  }, function (t, e, r) {
    'use strict';

    r.r(e);

    var n = function n() {
      var t = this.$createElement;
      return (this._self._c || t)(this.tag, {
        ref: 'scrollactive-nav-wrapper',
        tag: 'component',
        staticClass: 'scrollactive-nav'
      }, [this._t('default')], 2);
    };

    n._withStripped = !0;
    var o = r(0),
        i = r.n(o);

    function s(t) {
      return function (t) {
        if (Array.isArray(t)) return l(t);
      }(t) || function (t) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
      }(t) || function (t, e) {
        if (!t) return;
        if ('string' == typeof t) return l(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        'Object' === r && t.constructor && (r = t.constructor.name);
        if ('Map' === r || 'Set' === r) return Array.from(t);
        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return l(t, e);
      }(t) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
      }();
    }

    function l(t, e) {
      (null == e || e > t.length) && (e = t.length);

      for (var r = 0, n = new Array(e); r < e; r++) {
        n[r] = t[r];
      }

      return n;
    }

    var a = function (t, e, r, n, o, i, s, l) {
      var a,
          c = 'function' == typeof t ? t.options : t;
      if (e && (c.render = e, c.staticRenderFns = r, c._compiled = !0), n && (c.functional = !0), i && (c._scopeId = 'data-v-' + i), s ? (a = function a(t) {
        (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || 'undefined' == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), o && o.call(this, t), t && t._registeredComponents && t._registeredComponents.add(s);
      }, c._ssrRegister = a) : o && (a = l ? function () {
        o.call(this, (c.functional ? this.parent : this).$root.$options.shadowRoot);
      } : o), a) if (c.functional) {
        c._injectStyles = a;
        var u = c.render;

        c.render = function (t, e) {
          return a.call(e), u(t, e);
        };
      } else {
        var f = c.beforeCreate;
        c.beforeCreate = f ? [].concat(f, a) : [a];
      }
      return {
        exports: t,
        options: c
      };
    }({
      props: {
        activeClass: {
          type: String,
          default: 'is-active'
        },
        offset: {
          type: Number,
          default: 20
        },
        scrollOffset: {
          type: Number,
          default: null
        },
        scrollContainerSelector: {
          type: String,
          default: ''
        },
        clickToScroll: {
          type: Boolean,
          default: !0
        },
        duration: {
          type: Number,
          default: 600
        },
        alwaysTrack: {
          type: Boolean,
          default: !1
        },
        bezierEasingValue: {
          type: String,
          default: '.5,0,.35,1'
        },
        modifyUrl: {
          type: Boolean,
          default: !0
        },
        exact: {
          type: Boolean,
          default: !1
        },
        highlightFirstItem: {
          type: Boolean,
          default: !1
        },
        tag: {
          type: String,
          default: 'nav'
        },
        scrollOnStart: {
          type: Boolean,
          default: !0
        }
      },
      data: function data() {
        return {
          observer: null,
          items: [],
          currentItem: null,
          lastActiveItem: null,
          scrollAnimationFrame: null,
          bezierEasing: i.a
        };
      },
      computed: {
        cubicBezierArray: function cubicBezierArray() {
          return this.bezierEasingValue.split(',');
        },
        scrollContainer: function scrollContainer() {
          var t = window;
          return this.scrollContainerSelector && (t = document.querySelector(this.scrollContainerSelector) || window), t;
        }
      },
      mounted: function mounted() {
        var t = window.MutationObserver || window.WebKitMutationObserver;
        this.observer || (this.observer = new t(this.initScrollactiveItems), this.observer.observe(this.$refs['scrollactive-nav-wrapper'], {
          childList: !0,
          subtree: !0
        })), this.initScrollactiveItems(), this.removeActiveClass(), this.currentItem = this.getItemInsideWindow(), this.currentItem && this.currentItem.classList.add(this.activeClass), this.scrollOnStart && this.scrollToHashElement(), this.scrollContainer.addEventListener('scroll', this.onScroll);
      },
      updated: function updated() {
        this.initScrollactiveItems();
      },
      beforeDestroy: function beforeDestroy() {
        this.scrollContainer.removeEventListener('scroll', this.onScroll), window.cancelAnimationFrame(this.scrollAnimationFrame);
      },
      methods: {
        onScroll: function onScroll(t) {
          this.currentItem = this.getItemInsideWindow(), this.currentItem !== this.lastActiveItem && (this.removeActiveClass(), this.$emit('itemchanged', t, this.currentItem, this.lastActiveItem), this.lastActiveItem = this.currentItem), this.currentItem && this.currentItem.classList.add(this.activeClass);
        },
        getItemInsideWindow: function getItemInsideWindow() {
          var t,
              e = this;
          return [].forEach.call(this.items, function (r) {
            var n = r === e.items[0],
                o = document.getElementById(decodeURI(r.hash.substr(1)));

            if (o) {
              var i = e.scrollContainer.scrollTop || window.pageYOffset,
                  s = i >= e.getOffsetTop(o) - e.offset,
                  l = i < e.getOffsetTop(o) - e.offset + o.offsetHeight;
              n && e.highlightFirstItem && l && (t = r), e.exact && s && l && (t = r), !e.exact && s && (t = r);
            }
          }), t;
        },
        initScrollactiveItems: function initScrollactiveItems() {
          var t = this;
          this.items = this.$el.querySelectorAll('.scrollactive-item'), this.clickToScroll ? [].forEach.call(this.items, function (e) {
            e.addEventListener('click', t.handleClick);
          }) : [].forEach.call(this.items, function (e) {
            e.removeEventListener('click', t.handleClick);
          });
        },
        setScrollactiveItems: function setScrollactiveItems() {
          this.initScrollactiveItems();
        },
        handleClick: function handleClick(t) {
          var e = this;
          t.preventDefault();
          var r = t.currentTarget.hash,
              n = document.getElementById(decodeURI(r.substr(1)));
          n ? (this.alwaysTrack || (this.scrollContainer.removeEventListener('scroll', this.onScroll), window.cancelAnimationFrame(this.scrollAnimationFrame), this.removeActiveClass(), t.currentTarget.classList.add(this.activeClass)), this.scrollTo(n).then(function () {
            if (!e.alwaysTrack) {
              e.scrollContainer.addEventListener('scroll', e.onScroll);
              e.currentItem = [].find.call(e.items, function (t) {
                return decodeURI(t.hash.substr(1)) === n.id;
              }), e.currentItem !== e.lastActiveItem && (e.$emit('itemchanged', null, e.currentItem, e.lastActiveItem), e.lastActiveItem = e.currentItem);
            }

            e.modifyUrl && e.pushHashToUrl(r);
          })) : console.warn("[vue-scrollactive] Element '".concat(r, "' was not found. Make sure it is set in the DOM."));
        },
        scrollTo: function scrollTo(t) {
          var e = this;
          return new Promise(function (r) {
            var n = e.getOffsetTop(t),
                o = e.scrollContainer.scrollTop || window.pageYOffset,
                i = n - o,
                l = e.bezierEasing.apply(e, s(e.cubicBezierArray)),
                a = null;
            window.requestAnimationFrame(function t(n) {
              a || (a = n);
              var s = n - a,
                  c = s / e.duration;
              s >= e.duration && (s = e.duration), c >= 1 && (c = 1);
              var u = e.scrollOffset || e.offset,
                  f = o + l(c) * (i - u);
              e.scrollContainer.scrollTo(0, f), s < e.duration ? e.scrollAnimationFrame = window.requestAnimationFrame(t) : r();
            });
          });
        },
        getOffsetTop: function getOffsetTop(t) {
          for (var e = 0, r = t; r;) {
            e += r.offsetTop, r = r.offsetParent;
          }

          return this.scrollContainer.offsetTop && (e -= this.scrollContainer.offsetTop), e;
        },
        removeActiveClass: function removeActiveClass() {
          var t = this;
          [].forEach.call(this.items, function (e) {
            e.classList.remove(t.activeClass);
          });
        },
        scrollToHashElement: function scrollToHashElement() {
          var t = this,
              e = window.location.hash;

          if (e) {
            var r = document.querySelector(decodeURI(e));
            r && (window.location.hash = '', setTimeout(function () {
              var n = r.offsetTop - t.offset;
              t.scrollContainer.scrollTo(0, n), t.pushHashToUrl(e);
            }, 0));
          }
        },
        pushHashToUrl: function pushHashToUrl(t) {
          window.history.pushState ? window.history.pushState(null, null, t) : window.location.hash = t;
        }
      }
    }, n, [], !1, null, null, null);

    a.options.__file = 'src/scrollactive.vue';
    var c = a.exports,
        u = {
      install: function install(t) {
        u.install.installed || t.component('scrollactive', c);
      }
    };
    'undefined' != typeof window && window.Vue && u.install(window.Vue);
    e.default = u;
  }]);
});

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.VueMask = {}));
})(void 0, function (exports) {
  'use strict';

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var placeholderChar = '_';
  var strFunction = 'function';
  var emptyArray$1 = [];

  function convertMaskToPlaceholder() {
    var mask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyArray$1;
    var placeholderChar$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : placeholderChar;

    if (!isArray(mask)) {
      throw new Error('Text-mask:convertMaskToPlaceholder; The mask property must be an array.');
    }

    if (mask.indexOf(placeholderChar$1) !== -1) {
      throw new Error('Placeholder character must not be used as part of the mask. Please specify a character ' + 'that is not present in your mask as your placeholder character.\n\n' + "The placeholder character that was received is: ".concat(JSON.stringify(placeholderChar$1), "\n\n") + "The mask that was received is: ".concat(JSON.stringify(mask)));
    }

    return mask.map(function (char) {
      return char instanceof RegExp ? placeholderChar$1 : char;
    }).join('');
  }

  function isArray(value) {
    return Array.isArray && Array.isArray(value) || value instanceof Array;
  }

  var strCaretTrap = '[]';

  function processCaretTraps(mask) {
    var indexes = [];
    var indexOfCaretTrap;

    while (indexOfCaretTrap = mask.indexOf(strCaretTrap), indexOfCaretTrap !== -1) {
      indexes.push(indexOfCaretTrap);
      mask.splice(indexOfCaretTrap, 1);
    }

    return {
      maskWithoutCaretTraps: mask,
      indexes: indexes
    };
  }

  var emptyArray = [];
  var emptyString = '';

  function conformToMask() {
    var rawValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : emptyString;
    var mask = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : emptyArray;
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!isArray(mask)) {
      if (_typeof(mask) === strFunction) {
        mask = mask(rawValue, config);
        mask = processCaretTraps(mask).maskWithoutCaretTraps;
      } else {
        throw new Error('Text-mask:conformToMask; The mask property must be an array.');
      }
    }

    var _config$guide = config.guide,
        guide = _config$guide === void 0 ? true : _config$guide,
        _config$previousConfo = config.previousConformedValue,
        previousConformedValue = _config$previousConfo === void 0 ? emptyString : _config$previousConfo,
        _config$placeholderCh = config.placeholderChar,
        placeholderChar$1 = _config$placeholderCh === void 0 ? placeholderChar : _config$placeholderCh,
        _config$placeholder = config.placeholder,
        placeholder = _config$placeholder === void 0 ? convertMaskToPlaceholder(mask, placeholderChar$1) : _config$placeholder,
        currentCaretPosition = config.currentCaretPosition,
        keepCharPositions = config.keepCharPositions;
    var suppressGuide = guide === false && previousConformedValue !== undefined;
    var rawValueLength = rawValue.length;
    var previousConformedValueLength = previousConformedValue.length;
    var placeholderLength = placeholder.length;
    var maskLength = mask.length;
    var editDistance = rawValueLength - previousConformedValueLength;
    var isAddition = editDistance > 0;
    var indexOfFirstChange = currentCaretPosition + (isAddition ? -editDistance : 0);
    var indexOfLastChange = indexOfFirstChange + Math.abs(editDistance);

    if (keepCharPositions === true && !isAddition) {
      var compensatingPlaceholderChars = emptyString;

      for (var i = indexOfFirstChange; i < indexOfLastChange; i++) {
        if (placeholder[i] === placeholderChar$1) {
          compensatingPlaceholderChars += placeholderChar$1;
        }
      }

      rawValue = rawValue.slice(0, indexOfFirstChange) + compensatingPlaceholderChars + rawValue.slice(indexOfFirstChange, rawValueLength);
    }

    var rawValueArr = rawValue.split(emptyString).map(function (char, i) {
      return {
        char: char,
        isNew: i >= indexOfFirstChange && i < indexOfLastChange
      };
    });

    for (var _i = rawValueLength - 1; _i >= 0; _i--) {
      var char = rawValueArr[_i].char;

      if (char !== placeholderChar$1) {
        var shouldOffset = _i >= indexOfFirstChange && previousConformedValueLength === maskLength;

        if (char === placeholder[shouldOffset ? _i - editDistance : _i]) {
          rawValueArr.splice(_i, 1);
        }
      }
    }

    var conformedValue = emptyString;
    var someCharsRejected = false;

    placeholderLoop: for (var _i2 = 0; _i2 < placeholderLength; _i2++) {
      var charInPlaceholder = placeholder[_i2];

      if (charInPlaceholder === placeholderChar$1) {
        if (rawValueArr.length > 0) {
          while (rawValueArr.length > 0) {
            var _rawValueArr$shift = rawValueArr.shift(),
                rawValueChar = _rawValueArr$shift.char,
                isNew = _rawValueArr$shift.isNew;

            if (rawValueChar === placeholderChar$1 && suppressGuide !== true) {
              conformedValue += placeholderChar$1;
              continue placeholderLoop;
            } else if (mask[_i2].test(rawValueChar)) {
              if (keepCharPositions !== true || isNew === false || previousConformedValue === emptyString || guide === false || !isAddition) {
                conformedValue += rawValueChar;
              } else {
                var rawValueArrLength = rawValueArr.length;
                var indexOfNextAvailablePlaceholderChar = null;

                for (var _i3 = 0; _i3 < rawValueArrLength; _i3++) {
                  var charData = rawValueArr[_i3];

                  if (charData.char !== placeholderChar$1 && charData.isNew === false) {
                    break;
                  }

                  if (charData.char === placeholderChar$1) {
                    indexOfNextAvailablePlaceholderChar = _i3;
                    break;
                  }
                }

                if (indexOfNextAvailablePlaceholderChar !== null) {
                  conformedValue += rawValueChar;
                  rawValueArr.splice(indexOfNextAvailablePlaceholderChar, 1);
                } else {
                  _i2--;
                }
              }

              continue placeholderLoop;
            } else {
              someCharsRejected = true;
            }
          }
        }

        if (suppressGuide === false) {
          conformedValue += placeholder.substr(_i2, placeholderLength);
        }

        break;
      } else {
        conformedValue += charInPlaceholder;
      }
    }

    if (suppressGuide && isAddition === false) {
      var indexOfLastFilledPlaceholderChar = null;

      for (var _i4 = 0; _i4 < conformedValue.length; _i4++) {
        if (placeholder[_i4] === placeholderChar$1) {
          indexOfLastFilledPlaceholderChar = _i4;
        }
      }

      if (indexOfLastFilledPlaceholderChar !== null) {
        conformedValue = conformedValue.substr(0, indexOfLastFilledPlaceholderChar + 1);
      } else {
        conformedValue = emptyString;
      }
    }

    return {
      conformedValue: conformedValue,
      meta: {
        someCharsRejected: someCharsRejected
      }
    };
  }

  var NEXT_CHAR_OPTIONAL = {
    __nextCharOptional__: true
  };
  var defaultMaskReplacers = {
    '#': /\d/,
    A: /[a-z]/i,
    N: /[a-z0-9]/i,
    '?': NEXT_CHAR_OPTIONAL,
    X: /./
  };

  var stringToRegexp = function stringToRegexp(str) {
    var lastSlash = str.lastIndexOf('/');
    return new RegExp(str.slice(1, lastSlash), str.slice(lastSlash + 1));
  };

  var makeRegexpOptional = function makeRegexpOptional(charRegexp) {
    return stringToRegexp(charRegexp.toString().replace(/.(\/)[gmiyus]{0,6}$/, function (match) {
      return match.replace('/', '?/');
    }));
  };

  var escapeIfNeeded = function escapeIfNeeded(char) {
    return '[\\^$.|?*+()'.indexOf(char) > -1 ? "\\".concat(char) : char;
  };

  var charRegexp = function charRegexp(char) {
    return new RegExp("/[".concat(escapeIfNeeded(char), "]/"));
  };

  var isRegexp$1 = function isRegexp(entity) {
    return entity instanceof RegExp;
  };

  var castToRegexp = function castToRegexp(char) {
    return isRegexp$1(char) ? char : charRegexp(char);
  };

  function maskToRegExpMask(mask) {
    var maskReplacers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMaskReplacers;
    return mask.map(function (char, index, array) {
      var maskChar = maskReplacers[char] || char;
      var previousChar = array[index - 1];
      var previousMaskChar = maskReplacers[previousChar] || previousChar;

      if (maskChar === NEXT_CHAR_OPTIONAL) {
        return null;
      }

      if (previousMaskChar === NEXT_CHAR_OPTIONAL) {
        return makeRegexpOptional(castToRegexp(maskChar));
      }

      return maskChar;
    }).filter(Boolean);
  }

  function stringMaskToRegExpMask(stringMask) {
    var maskReplacers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMaskReplacers;
    return maskToRegExpMask(stringMask.split(''), maskReplacers);
  }

  function arrayMaskToRegExpMask(arrayMask) {
    var maskReplacers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMaskReplacers;
    var flattenedMask = arrayMask.map(function (part) {
      if (part instanceof RegExp) {
        return part;
      }

      if (typeof part === 'string') {
        return part.split('');
      }

      return null;
    }).filter(Boolean).reduce(function (mask, part) {
      return mask.concat(part);
    }, []);
    return maskToRegExpMask(flattenedMask, maskReplacers);
  }

  var trigger = function trigger(el, type) {
    var e = document.createEvent('HTMLEvents');
    e.initEvent(type, true, true);
    el.dispatchEvent(e);
  };

  var queryInputElementInside = function queryInputElementInside(el) {
    return el instanceof HTMLInputElement ? el : el.querySelector('input') || el;
  };

  var isFunction = function isFunction(val) {
    return typeof val === 'function';
  };

  var isString = function isString(val) {
    return typeof val === 'string';
  };

  var isRegexp = function isRegexp(val) {
    return val instanceof RegExp;
  };

  function parseMask(inputMask, maskReplacers) {
    if (Array.isArray(inputMask)) {
      return arrayMaskToRegExpMask(inputMask, maskReplacers);
    }

    if (isFunction(inputMask)) {
      return inputMask;
    }

    if (isString(inputMask) && inputMask.length > 0) {
      return stringMaskToRegExpMask(inputMask, maskReplacers);
    }

    return inputMask;
  }

  function createOptions() {
    var elementOptions = new Map();
    var defaultOptions = {
      previousValue: '',
      mask: []
    };

    function get(el) {
      return elementOptions.get(el) || _objectSpread2({}, defaultOptions);
    }

    function partiallyUpdate(el, newOptions) {
      elementOptions.set(el, _objectSpread2(_objectSpread2({}, get(el)), newOptions));
    }

    function remove(el) {
      elementOptions.delete(el);
    }

    return {
      partiallyUpdate: partiallyUpdate,
      remove: remove,
      get: get
    };
  }

  function extendMaskReplacers(maskReplacers) {
    var baseMaskReplacers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMaskReplacers;

    if (maskReplacers === null || Array.isArray(maskReplacers) || _typeof(maskReplacers) !== 'object') {
      return baseMaskReplacers;
    }

    return Object.keys(maskReplacers).reduce(function (extendedMaskReplacers, key) {
      var value = maskReplacers[key];

      if (value !== null && !(value instanceof RegExp)) {
        return extendedMaskReplacers;
      }

      return _objectSpread2(_objectSpread2({}, extendedMaskReplacers), {}, _defineProperty({}, key, value));
    }, baseMaskReplacers);
  }

  var options = createOptions();

  function triggerInputUpdate(el) {
    trigger(el, 'input');
  }

  function updateValue(el) {
    var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var value = el.value;

    var _options$get = options.get(el),
        previousValue = _options$get.previousValue,
        mask = _options$get.mask;

    var isValueChanged = value !== previousValue;
    var isLengthIncreased = value.length > previousValue.length;
    var isUpdateNeeded = value && isValueChanged && isLengthIncreased;

    if ((force || isUpdateNeeded) && mask) {
      var _conformToMask = conformToMask(value, mask, {
        guide: false
      }),
          conformedValue = _conformToMask.conformedValue;

      el.value = conformedValue;
      triggerInputUpdate(el);
    }

    options.partiallyUpdate(el, {
      previousValue: value
    });
  }

  function updateMask(el, inputMask, maskReplacers) {
    var mask = parseMask(inputMask, maskReplacers);
    options.partiallyUpdate(el, {
      mask: mask
    });
  }

  function maskToString(mask) {
    var maskArray = Array.isArray(mask) ? mask : [mask];
    var filteredMaskArray = maskArray.filter(function (part) {
      return isString(part) || isRegexp(part);
    });
    return filteredMaskArray.toString();
  }

  function createDirective() {
    var directiveOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var instanceMaskReplacers = extendMaskReplacers(directiveOptions && directiveOptions.placeholders);
    return {
      bind: function bind(el, _ref) {
        var value = _ref.value;
        el = queryInputElementInside(el);
        updateMask(el, value, instanceMaskReplacers);
        updateValue(el);
      },
      componentUpdated: function componentUpdated(el, _ref2) {
        var value = _ref2.value,
            oldValue = _ref2.oldValue;
        el = queryInputElementInside(el);
        var isMaskChanged = isFunction(value) || maskToString(oldValue) !== maskToString(value);

        if (isMaskChanged) {
          updateMask(el, value, instanceMaskReplacers);
        }

        updateValue(el, isMaskChanged);
      },
      unbind: function unbind(el) {
        el = queryInputElementInside(el);
        options.remove(el);
      }
    };
  }

  var directive = createDirective();

  function createFilter() {
    var filterOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var instanceMaskReplacers = extendMaskReplacers(filterOptions && filterOptions.placeholders);
    return function (value, inputMask) {
      if (!isString(value) && !Number.isFinite(value)) return value;
      var mask = parseMask(inputMask, instanceMaskReplacers);

      var _conformToMask = conformToMask("".concat(value), mask, {
        guide: false
      }),
          conformedValue = _conformToMask.conformedValue;

      return conformedValue;
    };
  }

  var filter = createFilter();

  var plugin = function plugin(Vue) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Vue.directive('mask', createDirective(options));
    Vue.filter('VMask', createFilter(options));
  };

  exports.VueMaskDirective = directive;
  exports.VueMaskFilter = filter;
  exports.VueMaskPlugin = plugin;
  exports["default"] = plugin;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof2(module)) ? module.exports = t(require("swiper")) : "function" == typeof define && define.amd ? define(["swiper"], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) ? exports.VueAwesomeSwiper = t(require("swiper")) : e.VueAwesomeSwiper = t(e.swiper);
}(void 0, function (e) {
  return function (e) {
    function t(r) {
      if (n[r]) return n[r].exports;
      var s = n[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(s.exports, s, s.exports, t), s.l = !0, s.exports;
    }

    var n = {};
    return t.m = e, t.c = n, t.i = function (e) {
      return e;
    }, t.d = function (e, n, r) {
      t.o(e, n) || Object.defineProperty(e, n, {
        configurable: !1,
        enumerable: !0,
        get: r
      });
    }, t.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return t.d(n, "a", n), n;
    }, t.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "/", t(t.s = 4);
  }([function (t, n) {
    t.exports = e;
  }, function (e, t) {
    e.exports = function (e, t, n, r, s, i) {
      var o,
          a = e = e || {},
          u = _typeof2(e.default);

      "object" !== u && "function" !== u || (o = e, a = e.default);
      var p = "function" == typeof a ? a.options : a;
      t && (p.render = t.render, p.staticRenderFns = t.staticRenderFns, p._compiled = !0), n && (p.functional = !0), s && (p._scopeId = s);
      var l;

      if (i ? (l = function l(e) {
        e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, e || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), r && r.call(this, e), e && e._registeredComponents && e._registeredComponents.add(i);
      }, p._ssrRegister = l) : r && (l = r), l) {
        var c = p.functional,
            d = c ? p.render : p.beforeCreate;
        c ? (p._injectStyles = l, p.render = function (e, t) {
          return l.call(t), d(e, t);
        }) : p.beforeCreate = d ? [].concat(d, l) : [l];
      }

      return {
        esModule: o,
        exports: a,
        options: p
      };
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(5),
        s = n.n(r),
        i = n(7),
        o = n(1),
        a = o(s.a, i.a, !1, null, null, null);
    t.default = a.exports;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = n(6),
        s = n.n(r),
        i = n(8),
        o = n(1),
        a = o(s.a, i.a, !1, null, null, null);
    t.default = a.exports;
  }, function (e, t, n) {
    "use strict";

    function r(e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.install = t.swiperSlide = t.swiper = t.Swiper = void 0;

    var s = n(0),
        i = r(s),
        o = n(2),
        a = r(o),
        u = n(3),
        p = r(u),
        l = window.Swiper || i.default,
        c = p.default,
        d = a.default,
        f = function f(e, t) {
      t && (p.default.props.globalOptions.default = function () {
        return t;
      }), e.component(p.default.name, p.default), e.component(a.default.name, a.default);
    },
        h = {
      Swiper: l,
      swiper: c,
      swiperSlide: d,
      install: f
    };

    t.default = h, t.Swiper = l, t.swiper = c, t.swiperSlide = d, t.install = f;
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = {
      name: "swiper-slide",
      data: function data() {
        return {
          slideClass: "swiper-slide"
        };
      },
      ready: function ready() {
        this.update();
      },
      mounted: function mounted() {
        this.update(), this.$parent && this.$parent.options && this.$parent.options.slideClass && (this.slideClass = this.$parent.options.slideClass);
      },
      updated: function updated() {
        this.update();
      },
      attached: function attached() {
        this.update();
      },
      methods: {
        update: function update() {
          this.$parent && this.$parent.swiper && this.$parent.swiper.update && (this.$parent.swiper.update(!0), this.$parent.options.loop && this.$parent.swiper.reLoop && this.$parent.swiper.reLoop());
        }
      }
    };
  }, function (e, t, n) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });

    var r = n(0),
        s = function (e) {
      return e && e.__esModule ? e : {
        default: e
      };
    }(r),
        i = window.Swiper || s.default;

    "function" != typeof Object.assign && Object.defineProperty(Object, "assign", {
      value: function value(e, t) {
        if (null == e) throw new TypeError("Cannot convert undefined or null to object");

        for (var n = Object(e), r = 1; r < arguments.length; r++) {
          var s = arguments[r];
          if (null != s) for (var i in s) {
            Object.prototype.hasOwnProperty.call(s, i) && (n[i] = s[i]);
          }
        }

        return n;
      },
      writable: !0,
      configurable: !0
    }), t.default = {
      name: "swiper",
      props: {
        options: {
          type: Object,
          default: function _default() {
            return {};
          }
        },
        globalOptions: {
          type: Object,
          required: !1,
          default: function _default() {
            return {};
          }
        }
      },
      methods: {
        update: function update() {
          this.swiper && this.swiper.update && this.swiper.update();
        },
        mountInstance: function mountInstance() {
          var e = Object.assign({}, this.globalOptions, this.options);
          this.swiper = new i(this.$el, e);
        }
      },
      data: function data() {
        return {
          classes: {
            wrapperClass: "swiper-wrapper"
          }
        };
      },
      ready: function ready() {
        this.swiper || this.mountInstance();
      },
      mounted: function mounted() {
        if (!this.swiper) {
          var e = !1;

          for (var t in this.classes) {
            this.classes.hasOwnProperty(t) && this.options[t] && (e = !0, this.classes[t] = this.options[t]);
          }

          e ? this.$nextTick(this.mountInstance) : this.mountInstance();
        }
      },
      activated: function activated() {
        this.update();
      },
      updated: function updated() {
        this.update();
      },
      beforeDestroy: function beforeDestroy() {
        this.swiper && (this.swiper.destroy && this.swiper.destroy(), delete this.swiper);
      }
    };
  }, function (e, t, n) {
    "use strict";

    var r = function r() {
      var e = this,
          t = e.$createElement;
      return (e._self._c || t)("div", {
        class: e.slideClass
      }, [e._t("default")], 2);
    },
        s = [],
        i = {
      render: r,
      staticRenderFns: s
    };

    t.a = i;
  }, function (e, t, n) {
    "use strict";

    var r = function r() {
      var e = this,
          t = e.$createElement,
          n = e._self._c || t;
      return n("div", {
        staticClass: "swiper-container"
      }, [e._t("parallax-bg"), e._v(" "), n("div", {
        class: e.classes.wrapperClass
      }, [e._t("default")], 2), e._v(" "), e._t("pagination"), e._v(" "), e._t("button-prev"), e._v(" "), e._t("button-next"), e._v(" "), e._t("scrollbar")], 2);
    },
        s = [],
        i = {
      render: r,
      staticRenderFns: s
    };

    t.a = i;
  }]);
});

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.GLightbox = factory());
})(void 0, function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var uid = Date.now();

  function extend() {
    var extended = {};
    var deep = true;
    var i = 0;
    var length = arguments.length;

    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    }

    var merge = function merge(obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            extended[prop] = extend(true, extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    };

    for (; i < length; i++) {
      var obj = arguments[i];
      merge(obj);
    }

    return extended;
  }

  function each(collection, callback) {
    if (isNode(collection) || collection === window || collection === document) {
      collection = [collection];
    }

    if (!isArrayLike(collection) && !isObject(collection)) {
      collection = [collection];
    }

    if (size(collection) == 0) {
      return;
    }

    if (isArrayLike(collection) && !isObject(collection)) {
      var l = collection.length,
          i = 0;

      for (; i < l; i++) {
        if (callback.call(collection[i], collection[i], i, collection) === false) {
          break;
        }
      }
    } else if (isObject(collection)) {
      for (var key in collection) {
        if (has(collection, key)) {
          if (callback.call(collection[key], collection[key], key, collection) === false) {
            break;
          }
        }
      }
    }
  }

  function getNodeEvents(node) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var fn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var cache = node[uid] = node[uid] || [];
    var data = {
      all: cache,
      evt: null,
      found: null
    };

    if (name && fn && size(cache) > 0) {
      each(cache, function (cl, i) {
        if (cl.eventName == name && cl.fn.toString() == fn.toString()) {
          data.found = true;
          data.evt = i;
          return false;
        }
      });
    }

    return data;
  }

  function addEvent(eventName) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        onElement = _ref.onElement,
        withCallback = _ref.withCallback,
        _ref$avoidDuplicate = _ref.avoidDuplicate,
        avoidDuplicate = _ref$avoidDuplicate === void 0 ? true : _ref$avoidDuplicate,
        _ref$once = _ref.once,
        once = _ref$once === void 0 ? false : _ref$once,
        _ref$useCapture = _ref.useCapture,
        useCapture = _ref$useCapture === void 0 ? false : _ref$useCapture;

    var thisArg = arguments.length > 2 ? arguments[2] : undefined;
    var element = onElement || [];

    if (isString(element)) {
      element = document.querySelectorAll(element);
    }

    function handler(event) {
      if (isFunction(withCallback)) {
        withCallback.call(thisArg, event, this);
      }

      if (once) {
        handler.destroy();
      }
    }

    handler.destroy = function () {
      each(element, function (el) {
        var events = getNodeEvents(el, eventName, handler);

        if (events.found) {
          events.all.splice(events.evt, 1);
        }

        if (el.removeEventListener) {
          el.removeEventListener(eventName, handler, useCapture);
        }
      });
    };

    each(element, function (el) {
      var events = getNodeEvents(el, eventName, handler);

      if (el.addEventListener && avoidDuplicate && !events.found || !avoidDuplicate) {
        el.addEventListener(eventName, handler, useCapture);
        events.all.push({
          eventName: eventName,
          fn: handler
        });
      }
    });
    return handler;
  }

  function addClass(node, name) {
    each(name.split(' '), function (cl) {
      return node.classList.add(cl);
    });
  }

  function removeClass(node, name) {
    each(name.split(' '), function (cl) {
      return node.classList.remove(cl);
    });
  }

  function hasClass(node, name) {
    return node.classList.contains(name);
  }

  function closest(elem, selector) {
    while (elem !== document.body) {
      elem = elem.parentElement;

      if (!elem) {
        return false;
      }

      var matches = typeof elem.matches == 'function' ? elem.matches(selector) : elem.msMatchesSelector(selector);

      if (matches) {
        return elem;
      }
    }
  }

  function animateElement(element) {
    var animation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (!element || animation === '') {
      return false;
    }

    if (animation === 'none') {
      if (isFunction(callback)) {
        callback();
      }

      return false;
    }

    var animationEnd = whichAnimationEvent();
    var animationNames = animation.split(' ');
    each(animationNames, function (name) {
      addClass(element, 'g' + name);
    });
    addEvent(animationEnd, {
      onElement: element,
      avoidDuplicate: false,
      once: true,
      withCallback: function withCallback(event, target) {
        each(animationNames, function (name) {
          removeClass(target, 'g' + name);
        });

        if (isFunction(callback)) {
          callback();
        }
      }
    });
  }

  function cssTransform(node) {
    var translate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (translate === '') {
      node.style.webkitTransform = '';
      node.style.MozTransform = '';
      node.style.msTransform = '';
      node.style.OTransform = '';
      node.style.transform = '';
      return false;
    }

    node.style.webkitTransform = translate;
    node.style.MozTransform = translate;
    node.style.msTransform = translate;
    node.style.OTransform = translate;
    node.style.transform = translate;
  }

  function show(element) {
    element.style.display = 'block';
  }

  function hide(element) {
    element.style.display = 'none';
  }

  function createHTML(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;

    while (temp.firstChild) {
      frag.appendChild(temp.firstChild);
    }

    return frag;
  }

  function windowSize() {
    return {
      width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    };
  }

  function whichAnimationEvent() {
    var t,
        el = document.createElement('fakeelement');
    var animations = {
      animation: 'animationend',
      OAnimation: 'oAnimationEnd',
      MozAnimation: 'animationend',
      WebkitAnimation: 'webkitAnimationEnd'
    };

    for (t in animations) {
      if (el.style[t] !== undefined) {
        return animations[t];
      }
    }
  }

  function whichTransitionEvent() {
    var t,
        el = document.createElement('fakeelement');
    var transitions = {
      transition: 'transitionend',
      OTransition: 'oTransitionEnd',
      MozTransition: 'transitionend',
      WebkitTransition: 'webkitTransitionEnd'
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  }

  function createIframe(config) {
    var url = config.url,
        allow = config.allow,
        callback = config.callback,
        appendTo = config.appendTo;
    var iframe = document.createElement('iframe');
    iframe.className = 'vimeo-video gvideo';
    iframe.src = url;
    iframe.style.width = '100%';
    iframe.style.height = '100%';

    if (allow) {
      iframe.setAttribute('allow', allow);
    }

    iframe.onload = function () {
      iframe.onload = null;
      addClass(iframe, 'node-ready');

      if (isFunction(callback)) {
        callback();
      }
    };

    if (appendTo) {
      appendTo.appendChild(iframe);
    }

    return iframe;
  }

  function waitUntil(check, onComplete, delay, timeout) {
    if (check()) {
      onComplete();
      return;
    }

    if (!delay) {
      delay = 100;
    }

    var timeoutPointer;
    var intervalPointer = setInterval(function () {
      if (!check()) {
        return;
      }

      clearInterval(intervalPointer);

      if (timeoutPointer) {
        clearTimeout(timeoutPointer);
      }

      onComplete();
    }, delay);

    if (timeout) {
      timeoutPointer = setTimeout(function () {
        clearInterval(intervalPointer);
      }, timeout);
    }
  }

  function injectAssets(url, waitFor, callback) {
    if (isNil(url)) {
      console.error('Inject assets error');
      return;
    }

    if (isFunction(waitFor)) {
      callback = waitFor;
      waitFor = false;
    }

    if (isString(waitFor) && waitFor in window) {
      if (isFunction(callback)) {
        callback();
      }

      return;
    }

    var found;

    if (url.indexOf('.css') !== -1) {
      found = document.querySelectorAll('link[href="' + url + '"]');

      if (found && found.length > 0) {
        if (isFunction(callback)) {
          callback();
        }

        return;
      }

      var head = document.getElementsByTagName('head')[0];
      var headStyles = head.querySelectorAll('link[rel="stylesheet"]');
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = url;
      link.media = 'all';

      if (headStyles) {
        head.insertBefore(link, headStyles[0]);
      } else {
        head.appendChild(link);
      }

      if (isFunction(callback)) {
        callback();
      }

      return;
    }

    found = document.querySelectorAll('script[src="' + url + '"]');

    if (found && found.length > 0) {
      if (isFunction(callback)) {
        if (isString(waitFor)) {
          waitUntil(function () {
            return typeof window[waitFor] !== 'undefined';
          }, function () {
            callback();
          });
          return false;
        }

        callback();
      }

      return;
    }

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    script.onload = function () {
      if (isFunction(callback)) {
        if (isString(waitFor)) {
          waitUntil(function () {
            return typeof window[waitFor] !== 'undefined';
          }, function () {
            callback();
          });
          return false;
        }

        callback();
      }
    };

    document.body.appendChild(script);
  }

  function isMobile() {
    return 'navigator' in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i);
  }

  function isTouch() {
    return isMobile() !== null || document.createTouch !== undefined || 'ontouchstart' in window || 'onmsgesturechange' in window || navigator.msMaxTouchPoints;
  }

  function isFunction(f) {
    return typeof f === 'function';
  }

  function isString(s) {
    return typeof s === 'string';
  }

  function isNode(el) {
    return !!(el && el.nodeType && el.nodeType == 1);
  }

  function isArray(ar) {
    return Array.isArray(ar);
  }

  function isArrayLike(ar) {
    return ar && ar.length && isFinite(ar.length);
  }

  function isObject(o) {
    var type = _typeof(o);

    return type === 'object' && o != null && !isFunction(o) && !isArray(o);
  }

  function isNil(o) {
    return o == null;
  }

  function has(obj, key) {
    return obj !== null && hasOwnProperty.call(obj, key);
  }

  function size(o) {
    if (isObject(o)) {
      if (o.keys) {
        return o.keys().length;
      }

      var l = 0;

      for (var k in o) {
        if (has(o, k)) {
          l++;
        }
      }

      return l;
    } else {
      return o.length;
    }
  }

  function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function getNextFocusElement() {
    var current = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
    var btns = document.querySelectorAll('.gbtn[data-taborder]:not(.disabled)');

    if (!btns.length) {
      return false;
    }

    if (btns.length == 1) {
      return btns[0];
    }

    if (typeof current == 'string') {
      current = parseInt(current);
    }

    var orders = [];
    each(btns, function (btn) {
      orders.push(btn.getAttribute('data-taborder'));
    });
    var highestOrder = Math.max.apply(Math, orders.map(function (order) {
      return parseInt(order);
    }));
    var newIndex = current < 0 ? 1 : current + 1;

    if (newIndex > highestOrder) {
      newIndex = '1';
    }

    var nextOrders = orders.filter(function (el) {
      return el >= parseInt(newIndex);
    });
    var nextFocus = nextOrders.sort()[0];
    return document.querySelector(".gbtn[data-taborder=\"".concat(nextFocus, "\"]"));
  }

  function keyboardNavigation(instance) {
    if (instance.events.hasOwnProperty('keyboard')) {
      return false;
    }

    instance.events['keyboard'] = addEvent('keydown', {
      onElement: window,
      withCallback: function withCallback(event, target) {
        event = event || window.event;
        var key = event.keyCode;

        if (key == 9) {
          var focusedButton = document.querySelector('.gbtn.focused');

          if (!focusedButton) {
            var activeElement = document.activeElement && document.activeElement.nodeName ? document.activeElement.nodeName.toLocaleLowerCase() : false;

            if (activeElement == 'input' || activeElement == 'textarea' || activeElement == 'button') {
              return;
            }
          }

          event.preventDefault();
          var btns = document.querySelectorAll('.gbtn[data-taborder]');

          if (!btns || btns.length <= 0) {
            return;
          }

          if (!focusedButton) {
            var first = getNextFocusElement();

            if (first) {
              first.focus();
              addClass(first, 'focused');
            }

            return;
          }

          var currentFocusOrder = focusedButton.getAttribute('data-taborder');
          var nextFocus = getNextFocusElement(currentFocusOrder);
          removeClass(focusedButton, 'focused');

          if (nextFocus) {
            nextFocus.focus();
            addClass(nextFocus, 'focused');
          }
        }

        if (key == 39) {
          instance.nextSlide();
        }

        if (key == 37) {
          instance.prevSlide();
        }

        if (key == 27) {
          instance.close();
        }
      }
    });
  }

  function getLen(v) {
    return Math.sqrt(v.x * v.x + v.y * v.y);
  }

  function dot(v1, v2) {
    return v1.x * v2.x + v1.y * v2.y;
  }

  function getAngle(v1, v2) {
    var mr = getLen(v1) * getLen(v2);

    if (mr === 0) {
      return 0;
    }

    var r = dot(v1, v2) / mr;

    if (r > 1) {
      r = 1;
    }

    return Math.acos(r);
  }

  function cross(v1, v2) {
    return v1.x * v2.y - v2.x * v1.y;
  }

  function getRotateAngle(v1, v2) {
    var angle = getAngle(v1, v2);

    if (cross(v1, v2) > 0) {
      angle *= -1;
    }

    return angle * 180 / Math.PI;
  }

  var EventsHandlerAdmin = function () {
    function EventsHandlerAdmin(el) {
      _classCallCheck(this, EventsHandlerAdmin);

      this.handlers = [];
      this.el = el;
    }

    _createClass(EventsHandlerAdmin, [{
      key: "add",
      value: function add(handler) {
        this.handlers.push(handler);
      }
    }, {
      key: "del",
      value: function del(handler) {
        if (!handler) {
          this.handlers = [];
        }

        for (var i = this.handlers.length; i >= 0; i--) {
          if (this.handlers[i] === handler) {
            this.handlers.splice(i, 1);
          }
        }
      }
    }, {
      key: "dispatch",
      value: function dispatch() {
        for (var i = 0, len = this.handlers.length; i < len; i++) {
          var handler = this.handlers[i];

          if (typeof handler === 'function') {
            handler.apply(this.el, arguments);
          }
        }
      }
    }]);

    return EventsHandlerAdmin;
  }();

  function wrapFunc(el, handler) {
    var EventshandlerAdmin = new EventsHandlerAdmin(el);
    EventshandlerAdmin.add(handler);
    return EventshandlerAdmin;
  }

  var TouchEvents = function () {
    function TouchEvents(el, option) {
      _classCallCheck(this, TouchEvents);

      this.element = typeof el == 'string' ? document.querySelector(el) : el;
      this.start = this.start.bind(this);
      this.move = this.move.bind(this);
      this.end = this.end.bind(this);
      this.cancel = this.cancel.bind(this);
      this.element.addEventListener('touchstart', this.start, false);
      this.element.addEventListener('touchmove', this.move, false);
      this.element.addEventListener('touchend', this.end, false);
      this.element.addEventListener('touchcancel', this.cancel, false);
      this.preV = {
        x: null,
        y: null
      };
      this.pinchStartLen = null;
      this.zoom = 1;
      this.isDoubleTap = false;

      var noop = function noop() {};

      this.rotate = wrapFunc(this.element, option.rotate || noop);
      this.touchStart = wrapFunc(this.element, option.touchStart || noop);
      this.multipointStart = wrapFunc(this.element, option.multipointStart || noop);
      this.multipointEnd = wrapFunc(this.element, option.multipointEnd || noop);
      this.pinch = wrapFunc(this.element, option.pinch || noop);
      this.swipe = wrapFunc(this.element, option.swipe || noop);
      this.tap = wrapFunc(this.element, option.tap || noop);
      this.doubleTap = wrapFunc(this.element, option.doubleTap || noop);
      this.longTap = wrapFunc(this.element, option.longTap || noop);
      this.singleTap = wrapFunc(this.element, option.singleTap || noop);
      this.pressMove = wrapFunc(this.element, option.pressMove || noop);
      this.twoFingerPressMove = wrapFunc(this.element, option.twoFingerPressMove || noop);
      this.touchMove = wrapFunc(this.element, option.touchMove || noop);
      this.touchEnd = wrapFunc(this.element, option.touchEnd || noop);
      this.touchCancel = wrapFunc(this.element, option.touchCancel || noop);
      this.translateContainer = this.element;
      this._cancelAllHandler = this.cancelAll.bind(this);
      window.addEventListener('scroll', this._cancelAllHandler);
      this.delta = null;
      this.last = null;
      this.now = null;
      this.tapTimeout = null;
      this.singleTapTimeout = null;
      this.longTapTimeout = null;
      this.swipeTimeout = null;
      this.x1 = this.x2 = this.y1 = this.y2 = null;
      this.preTapPosition = {
        x: null,
        y: null
      };
    }

    _createClass(TouchEvents, [{
      key: "start",
      value: function start(evt) {
        if (!evt.touches) {
          return;
        }

        var ignoreDragFor = ['a', 'button', 'input'];

        if (evt.target && evt.target.nodeName && ignoreDragFor.indexOf(evt.target.nodeName.toLowerCase()) >= 0) {
          console.log('ignore drag for this touched element', evt.target.nodeName.toLowerCase());
          return;
        }

        this.now = Date.now();
        this.x1 = evt.touches[0].pageX;
        this.y1 = evt.touches[0].pageY;
        this.delta = this.now - (this.last || this.now);
        this.touchStart.dispatch(evt, this.element);

        if (this.preTapPosition.x !== null) {
          this.isDoubleTap = this.delta > 0 && this.delta <= 250 && Math.abs(this.preTapPosition.x - this.x1) < 30 && Math.abs(this.preTapPosition.y - this.y1) < 30;

          if (this.isDoubleTap) {
            clearTimeout(this.singleTapTimeout);
          }
        }

        this.preTapPosition.x = this.x1;
        this.preTapPosition.y = this.y1;
        this.last = this.now;
        var preV = this.preV,
            len = evt.touches.length;

        if (len > 1) {
          this._cancelLongTap();

          this._cancelSingleTap();

          var v = {
            x: evt.touches[1].pageX - this.x1,
            y: evt.touches[1].pageY - this.y1
          };
          preV.x = v.x;
          preV.y = v.y;
          this.pinchStartLen = getLen(preV);
          this.multipointStart.dispatch(evt, this.element);
        }

        this._preventTap = false;
        this.longTapTimeout = setTimeout(function () {
          this.longTap.dispatch(evt, this.element);
          this._preventTap = true;
        }.bind(this), 750);
      }
    }, {
      key: "move",
      value: function move(evt) {
        if (!evt.touches) {
          return;
        }

        var preV = this.preV,
            len = evt.touches.length,
            currentX = evt.touches[0].pageX,
            currentY = evt.touches[0].pageY;
        this.isDoubleTap = false;

        if (len > 1) {
          var sCurrentX = evt.touches[1].pageX,
              sCurrentY = evt.touches[1].pageY;
          var v = {
            x: evt.touches[1].pageX - currentX,
            y: evt.touches[1].pageY - currentY
          };

          if (preV.x !== null) {
            if (this.pinchStartLen > 0) {
              evt.zoom = getLen(v) / this.pinchStartLen;
              this.pinch.dispatch(evt, this.element);
            }

            evt.angle = getRotateAngle(v, preV);
            this.rotate.dispatch(evt, this.element);
          }

          preV.x = v.x;
          preV.y = v.y;

          if (this.x2 !== null && this.sx2 !== null) {
            evt.deltaX = (currentX - this.x2 + sCurrentX - this.sx2) / 2;
            evt.deltaY = (currentY - this.y2 + sCurrentY - this.sy2) / 2;
          } else {
            evt.deltaX = 0;
            evt.deltaY = 0;
          }

          this.twoFingerPressMove.dispatch(evt, this.element);
          this.sx2 = sCurrentX;
          this.sy2 = sCurrentY;
        } else {
          if (this.x2 !== null) {
            evt.deltaX = currentX - this.x2;
            evt.deltaY = currentY - this.y2;
            var movedX = Math.abs(this.x1 - this.x2),
                movedY = Math.abs(this.y1 - this.y2);

            if (movedX > 10 || movedY > 10) {
              this._preventTap = true;
            }
          } else {
            evt.deltaX = 0;
            evt.deltaY = 0;
          }

          this.pressMove.dispatch(evt, this.element);
        }

        this.touchMove.dispatch(evt, this.element);

        this._cancelLongTap();

        this.x2 = currentX;
        this.y2 = currentY;

        if (len > 1) {
          evt.preventDefault();
        }
      }
    }, {
      key: "end",
      value: function end(evt) {
        if (!evt.changedTouches) {
          return;
        }

        this._cancelLongTap();

        var self = this;

        if (evt.touches.length < 2) {
          this.multipointEnd.dispatch(evt, this.element);
          this.sx2 = this.sy2 = null;
        }

        if (this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30) {
          evt.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2);
          this.swipeTimeout = setTimeout(function () {
            self.swipe.dispatch(evt, self.element);
          }, 0);
        } else {
          this.tapTimeout = setTimeout(function () {
            if (!self._preventTap) {
              self.tap.dispatch(evt, self.element);
            }

            if (self.isDoubleTap) {
              self.doubleTap.dispatch(evt, self.element);
              self.isDoubleTap = false;
            }
          }, 0);

          if (!self.isDoubleTap) {
            self.singleTapTimeout = setTimeout(function () {
              self.singleTap.dispatch(evt, self.element);
            }, 250);
          }
        }

        this.touchEnd.dispatch(evt, this.element);
        this.preV.x = 0;
        this.preV.y = 0;
        this.zoom = 1;
        this.pinchStartLen = null;
        this.x1 = this.x2 = this.y1 = this.y2 = null;
      }
    }, {
      key: "cancelAll",
      value: function cancelAll() {
        this._preventTap = true;
        clearTimeout(this.singleTapTimeout);
        clearTimeout(this.tapTimeout);
        clearTimeout(this.longTapTimeout);
        clearTimeout(this.swipeTimeout);
      }
    }, {
      key: "cancel",
      value: function cancel(evt) {
        this.cancelAll();
        this.touchCancel.dispatch(evt, this.element);
      }
    }, {
      key: "_cancelLongTap",
      value: function _cancelLongTap() {
        clearTimeout(this.longTapTimeout);
      }
    }, {
      key: "_cancelSingleTap",
      value: function _cancelSingleTap() {
        clearTimeout(this.singleTapTimeout);
      }
    }, {
      key: "_swipeDirection",
      value: function _swipeDirection(x1, x2, y1, y2) {
        return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? x1 - x2 > 0 ? 'Left' : 'Right' : y1 - y2 > 0 ? 'Up' : 'Down';
      }
    }, {
      key: "on",
      value: function on(evt, handler) {
        if (this[evt]) {
          this[evt].add(handler);
        }
      }
    }, {
      key: "off",
      value: function off(evt, handler) {
        if (this[evt]) {
          this[evt].del(handler);
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.singleTapTimeout) {
          clearTimeout(this.singleTapTimeout);
        }

        if (this.tapTimeout) {
          clearTimeout(this.tapTimeout);
        }

        if (this.longTapTimeout) {
          clearTimeout(this.longTapTimeout);
        }

        if (this.swipeTimeout) {
          clearTimeout(this.swipeTimeout);
        }

        this.element.removeEventListener('touchstart', this.start);
        this.element.removeEventListener('touchmove', this.move);
        this.element.removeEventListener('touchend', this.end);
        this.element.removeEventListener('touchcancel', this.cancel);
        this.rotate.del();
        this.touchStart.del();
        this.multipointStart.del();
        this.multipointEnd.del();
        this.pinch.del();
        this.swipe.del();
        this.tap.del();
        this.doubleTap.del();
        this.longTap.del();
        this.singleTap.del();
        this.pressMove.del();
        this.twoFingerPressMove.del();
        this.touchMove.del();
        this.touchEnd.del();
        this.touchCancel.del();
        this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null;
        window.removeEventListener('scroll', this._cancelAllHandler);
        return null;
      }
    }]);

    return TouchEvents;
  }();

  function resetSlideMove(slide) {
    var transitionEnd = whichTransitionEvent();
    var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var media = hasClass(slide, 'gslide-media') ? slide : slide.querySelector('.gslide-media');
    var container = closest(media, '.ginner-container');
    var desc = slide.querySelector('.gslide-description');

    if (windowWidth > 769) {
      media = container;
    }

    addClass(media, 'greset');
    cssTransform(media, 'translate3d(0, 0, 0)');
    addEvent(transitionEnd, {
      onElement: media,
      once: true,
      withCallback: function withCallback(event, target) {
        removeClass(media, 'greset');
      }
    });
    media.style.opacity = '';

    if (desc) {
      desc.style.opacity = '';
    }
  }

  function touchNavigation(instance) {
    if (instance.events.hasOwnProperty('touch')) {
      return false;
    }

    var winSize = windowSize();
    var winWidth = winSize.width;
    var winHeight = winSize.height;
    var process = false;
    var currentSlide = null;
    var media = null;
    var mediaImage = null;
    var doingMove = false;
    var initScale = 1;
    var maxScale = 4.5;
    var currentScale = 1;
    var doingZoom = false;
    var imageZoomed = false;
    var zoomedPosX = null;
    var zoomedPosY = null;
    var lastZoomedPosX = null;
    var lastZoomedPosY = null;
    var hDistance;
    var vDistance;
    var hDistancePercent = 0;
    var vDistancePercent = 0;
    var vSwipe = false;
    var hSwipe = false;
    var startCoords = {};
    var endCoords = {};
    var xDown = 0;
    var yDown = 0;
    var isInlined;
    var sliderWrapper = document.getElementById('glightbox-slider');
    var overlay = document.querySelector('.goverlay');
    var touchInstance = new TouchEvents(sliderWrapper, {
      touchStart: function touchStart(e) {
        process = true;

        if (hasClass(e.targetTouches[0].target, 'ginner-container') || closest(e.targetTouches[0].target, '.gslide-desc') || e.targetTouches[0].target.nodeName.toLowerCase() == 'a') {
          process = false;
        }

        if (closest(e.targetTouches[0].target, '.gslide-inline') && !hasClass(e.targetTouches[0].target.parentNode, 'gslide-inline')) {
          process = false;
        }

        if (process) {
          endCoords = e.targetTouches[0];
          startCoords.pageX = e.targetTouches[0].pageX;
          startCoords.pageY = e.targetTouches[0].pageY;
          xDown = e.targetTouches[0].clientX;
          yDown = e.targetTouches[0].clientY;
          currentSlide = instance.activeSlide;
          media = currentSlide.querySelector('.gslide-media');
          isInlined = currentSlide.querySelector('.gslide-inline');
          mediaImage = null;

          if (hasClass(media, 'gslide-image')) {
            mediaImage = media.querySelector('img');
          }

          var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

          if (windowWidth > 769) {
            media = currentSlide.querySelector('.ginner-container');
          }

          removeClass(overlay, 'greset');

          if (e.pageX > 20 && e.pageX < window.innerWidth - 20) {
            return;
          }

          e.preventDefault();
        }
      },
      touchMove: function touchMove(e) {
        if (!process) {
          return;
        }

        endCoords = e.targetTouches[0];

        if (doingZoom || imageZoomed) {
          return;
        }

        if (isInlined && isInlined.offsetHeight > winHeight) {
          var moved = startCoords.pageX - endCoords.pageX;

          if (Math.abs(moved) <= 13) {
            return false;
          }
        }

        doingMove = true;
        var xUp = e.targetTouches[0].clientX;
        var yUp = e.targetTouches[0].clientY;
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
          vSwipe = false;
          hSwipe = true;
        } else {
          hSwipe = false;
          vSwipe = true;
        }

        hDistance = endCoords.pageX - startCoords.pageX;
        hDistancePercent = hDistance * 100 / winWidth;
        vDistance = endCoords.pageY - startCoords.pageY;
        vDistancePercent = vDistance * 100 / winHeight;
        var opacity;

        if (vSwipe && mediaImage) {
          opacity = 1 - Math.abs(vDistance) / winHeight;
          overlay.style.opacity = opacity;

          if (instance.settings.touchFollowAxis) {
            hDistancePercent = 0;
          }
        }

        if (hSwipe) {
          opacity = 1 - Math.abs(hDistance) / winWidth;
          media.style.opacity = opacity;

          if (instance.settings.touchFollowAxis) {
            vDistancePercent = 0;
          }
        }

        if (!mediaImage) {
          return cssTransform(media, "translate3d(".concat(hDistancePercent, "%, 0, 0)"));
        }

        cssTransform(media, "translate3d(".concat(hDistancePercent, "%, ").concat(vDistancePercent, "%, 0)"));
      },
      touchEnd: function touchEnd() {
        if (!process) {
          return;
        }

        doingMove = false;

        if (imageZoomed || doingZoom) {
          lastZoomedPosX = zoomedPosX;
          lastZoomedPosY = zoomedPosY;
          return;
        }

        var v = Math.abs(parseInt(vDistancePercent));
        var h = Math.abs(parseInt(hDistancePercent));

        if (v > 29 && mediaImage) {
          instance.close();
          return;
        }

        if (v < 29 && h < 25) {
          addClass(overlay, 'greset');
          overlay.style.opacity = 1;
          return resetSlideMove(media);
        }
      },
      multipointEnd: function multipointEnd() {
        setTimeout(function () {
          doingZoom = false;
        }, 50);
      },
      multipointStart: function multipointStart() {
        doingZoom = true;
        initScale = currentScale ? currentScale : 1;
      },
      pinch: function pinch(evt) {
        if (!mediaImage || doingMove) {
          return false;
        }

        doingZoom = true;
        mediaImage.scaleX = mediaImage.scaleY = initScale * evt.zoom;
        var scale = initScale * evt.zoom;
        imageZoomed = true;

        if (scale <= 1) {
          imageZoomed = false;
          scale = 1;
          lastZoomedPosY = null;
          lastZoomedPosX = null;
          zoomedPosX = null;
          zoomedPosY = null;
          mediaImage.setAttribute('style', '');
          return;
        }

        if (scale > maxScale) {
          scale = maxScale;
        }

        mediaImage.style.transform = "scale3d(".concat(scale, ", ").concat(scale, ", 1)");
        currentScale = scale;
      },
      pressMove: function pressMove(e) {
        if (imageZoomed && !doingZoom) {
          var mhDistance = endCoords.pageX - startCoords.pageX;
          var mvDistance = endCoords.pageY - startCoords.pageY;

          if (lastZoomedPosX) {
            mhDistance = mhDistance + lastZoomedPosX;
          }

          if (lastZoomedPosY) {
            mvDistance = mvDistance + lastZoomedPosY;
          }

          zoomedPosX = mhDistance;
          zoomedPosY = mvDistance;
          var style = "translate3d(".concat(mhDistance, "px, ").concat(mvDistance, "px, 0)");

          if (currentScale) {
            style += " scale3d(".concat(currentScale, ", ").concat(currentScale, ", 1)");
          }

          cssTransform(mediaImage, style);
        }
      },
      swipe: function swipe(evt) {
        if (imageZoomed) {
          return;
        }

        if (doingZoom) {
          doingZoom = false;
          return;
        }

        if (evt.direction == 'Left') {
          if (instance.index == instance.elements.length - 1) {
            return resetSlideMove(media);
          }

          instance.nextSlide();
        }

        if (evt.direction == 'Right') {
          if (instance.index == 0) {
            return resetSlideMove(media);
          }

          instance.prevSlide();
        }
      }
    });
    instance.events['touch'] = touchInstance;
  }

  var ZoomImages = function () {
    function ZoomImages(el, slide) {
      var _this = this;

      var onclose = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      _classCallCheck(this, ZoomImages);

      this.img = el;
      this.slide = slide;
      this.onclose = onclose;

      if (this.img.setZoomEvents) {
        return false;
      }

      this.active = false;
      this.zoomedIn = false;
      this.dragging = false;
      this.currentX = null;
      this.currentY = null;
      this.initialX = null;
      this.initialY = null;
      this.xOffset = 0;
      this.yOffset = 0;
      this.img.addEventListener('mousedown', function (e) {
        return _this.dragStart(e);
      }, false);
      this.img.addEventListener('mouseup', function (e) {
        return _this.dragEnd(e);
      }, false);
      this.img.addEventListener('mousemove', function (e) {
        return _this.drag(e);
      }, false);
      this.img.addEventListener('click', function (e) {
        if (_this.slide.classList.contains('dragging-nav')) {
          _this.zoomOut();

          return false;
        }

        if (!_this.zoomedIn) {
          return _this.zoomIn();
        }

        if (_this.zoomedIn && !_this.dragging) {
          _this.zoomOut();
        }
      }, false);
      this.img.setZoomEvents = true;
    }

    _createClass(ZoomImages, [{
      key: "zoomIn",
      value: function zoomIn() {
        var winWidth = this.widowWidth();

        if (this.zoomedIn || winWidth <= 768) {
          return;
        }

        var img = this.img;
        img.setAttribute('data-style', img.getAttribute('style'));
        img.style.maxWidth = img.naturalWidth + 'px';
        img.style.maxHeight = img.naturalHeight + 'px';

        if (img.naturalWidth > winWidth) {
          var centerX = winWidth / 2 - img.naturalWidth / 2;
          this.setTranslate(this.img.parentNode, centerX, 0);
        }

        this.slide.classList.add('zoomed');
        this.zoomedIn = true;
      }
    }, {
      key: "zoomOut",
      value: function zoomOut() {
        this.img.parentNode.setAttribute('style', '');
        this.img.setAttribute('style', this.img.getAttribute('data-style'));
        this.slide.classList.remove('zoomed');
        this.zoomedIn = false;
        this.currentX = null;
        this.currentY = null;
        this.initialX = null;
        this.initialY = null;
        this.xOffset = 0;
        this.yOffset = 0;

        if (this.onclose && typeof this.onclose == 'function') {
          this.onclose();
        }
      }
    }, {
      key: "dragStart",
      value: function dragStart(e) {
        e.preventDefault();

        if (!this.zoomedIn) {
          this.active = false;
          return;
        }

        if (e.type === 'touchstart') {
          this.initialX = e.touches[0].clientX - this.xOffset;
          this.initialY = e.touches[0].clientY - this.yOffset;
        } else {
          this.initialX = e.clientX - this.xOffset;
          this.initialY = e.clientY - this.yOffset;
        }

        if (e.target === this.img) {
          this.active = true;
          this.img.classList.add('dragging');
        }
      }
    }, {
      key: "dragEnd",
      value: function dragEnd(e) {
        var _this2 = this;

        e.preventDefault();
        this.initialX = this.currentX;
        this.initialY = this.currentY;
        this.active = false;
        setTimeout(function () {
          _this2.dragging = false;
          _this2.img.isDragging = false;

          _this2.img.classList.remove('dragging');
        }, 100);
      }
    }, {
      key: "drag",
      value: function drag(e) {
        if (this.active) {
          e.preventDefault();

          if (e.type === 'touchmove') {
            this.currentX = e.touches[0].clientX - this.initialX;
            this.currentY = e.touches[0].clientY - this.initialY;
          } else {
            this.currentX = e.clientX - this.initialX;
            this.currentY = e.clientY - this.initialY;
          }

          this.xOffset = this.currentX;
          this.yOffset = this.currentY;
          this.img.isDragging = true;
          this.dragging = true;
          this.setTranslate(this.img, this.currentX, this.currentY);
        }
      }
    }, {
      key: "onMove",
      value: function onMove(e) {
        if (!this.zoomedIn) {
          return;
        }

        var xOffset = e.clientX - this.img.naturalWidth / 2;
        var yOffset = e.clientY - this.img.naturalHeight / 2;
        this.setTranslate(this.img, xOffset, yOffset);
      }
    }, {
      key: "setTranslate",
      value: function setTranslate(node, xPos, yPos) {
        node.style.transform = 'translate3d(' + xPos + 'px, ' + yPos + 'px, 0)';
      }
    }, {
      key: "widowWidth",
      value: function widowWidth() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      }
    }]);

    return ZoomImages;
  }();

  var DragSlides = function () {
    function DragSlides() {
      var _this = this;

      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, DragSlides);

      var dragEl = config.dragEl,
          _config$toleranceX = config.toleranceX,
          toleranceX = _config$toleranceX === void 0 ? 40 : _config$toleranceX,
          _config$toleranceY = config.toleranceY,
          toleranceY = _config$toleranceY === void 0 ? 65 : _config$toleranceY,
          _config$slide = config.slide,
          slide = _config$slide === void 0 ? null : _config$slide,
          _config$instance = config.instance,
          instance = _config$instance === void 0 ? null : _config$instance;
      this.el = dragEl;
      this.active = false;
      this.dragging = false;
      this.currentX = null;
      this.currentY = null;
      this.initialX = null;
      this.initialY = null;
      this.xOffset = 0;
      this.yOffset = 0;
      this.direction = null;
      this.lastDirection = null;
      this.toleranceX = toleranceX;
      this.toleranceY = toleranceY;
      this.toleranceReached = false;
      this.dragContainer = this.el;
      this.slide = slide;
      this.instance = instance;
      this.el.addEventListener('mousedown', function (e) {
        return _this.dragStart(e);
      }, false);
      this.el.addEventListener('mouseup', function (e) {
        return _this.dragEnd(e);
      }, false);
      this.el.addEventListener('mousemove', function (e) {
        return _this.drag(e);
      }, false);
    }

    _createClass(DragSlides, [{
      key: "dragStart",
      value: function dragStart(e) {
        if (this.slide.classList.contains('zoomed')) {
          this.active = false;
          return;
        }

        if (e.type === 'touchstart') {
          this.initialX = e.touches[0].clientX - this.xOffset;
          this.initialY = e.touches[0].clientY - this.yOffset;
        } else {
          this.initialX = e.clientX - this.xOffset;
          this.initialY = e.clientY - this.yOffset;
        }

        var clicked = e.target.nodeName.toLowerCase();
        var exludeClicks = ['input', 'select', 'textarea', 'button', 'a'];

        if (e.target.classList.contains('nodrag') || closest(e.target, '.nodrag') || exludeClicks.indexOf(clicked) !== -1) {
          this.active = false;
          return;
        }

        e.preventDefault();

        if (e.target === this.el || clicked !== 'img' && closest(e.target, '.gslide-inline')) {
          this.active = true;
          this.el.classList.add('dragging');
          this.dragContainer = closest(e.target, '.ginner-container');
        }
      }
    }, {
      key: "dragEnd",
      value: function dragEnd(e) {
        var _this2 = this;

        e && e.preventDefault();
        this.initialX = 0;
        this.initialY = 0;
        this.currentX = null;
        this.currentY = null;
        this.initialX = null;
        this.initialY = null;
        this.xOffset = 0;
        this.yOffset = 0;
        this.active = false;

        if (this.doSlideChange) {
          this.instance.preventOutsideClick = true;
          this.doSlideChange == 'right' && this.instance.prevSlide();
          this.doSlideChange == 'left' && this.instance.nextSlide();
        }

        if (this.doSlideClose) {
          this.instance.close();
        }

        if (!this.toleranceReached) {
          this.setTranslate(this.dragContainer, 0, 0, true);
        }

        setTimeout(function () {
          _this2.instance.preventOutsideClick = false;
          _this2.toleranceReached = false;
          _this2.lastDirection = null;
          _this2.dragging = false;
          _this2.el.isDragging = false;

          _this2.el.classList.remove('dragging');

          _this2.slide.classList.remove('dragging-nav');

          _this2.dragContainer.style.transform = '';
          _this2.dragContainer.style.transition = '';
        }, 100);
      }
    }, {
      key: "drag",
      value: function drag(e) {
        if (this.active) {
          e.preventDefault();
          this.slide.classList.add('dragging-nav');

          if (e.type === 'touchmove') {
            this.currentX = e.touches[0].clientX - this.initialX;
            this.currentY = e.touches[0].clientY - this.initialY;
          } else {
            this.currentX = e.clientX - this.initialX;
            this.currentY = e.clientY - this.initialY;
          }

          this.xOffset = this.currentX;
          this.yOffset = this.currentY;
          this.el.isDragging = true;
          this.dragging = true;
          this.doSlideChange = false;
          this.doSlideClose = false;
          var currentXInt = Math.abs(this.currentX);
          var currentYInt = Math.abs(this.currentY);

          if (currentXInt > 0 && currentXInt >= Math.abs(this.currentY) && (!this.lastDirection || this.lastDirection == 'x')) {
            this.yOffset = 0;
            this.lastDirection = 'x';
            this.setTranslate(this.dragContainer, this.currentX, 0);
            var doChange = this.shouldChange();

            if (!this.instance.settings.dragAutoSnap && doChange) {
              this.doSlideChange = doChange;
            }

            if (this.instance.settings.dragAutoSnap && doChange) {
              this.instance.preventOutsideClick = true;
              this.toleranceReached = true;
              this.active = false;
              this.instance.preventOutsideClick = true;
              this.dragEnd(null);
              doChange == 'right' && this.instance.prevSlide();
              doChange == 'left' && this.instance.nextSlide();
              return;
            }
          }

          if (this.toleranceY > 0 && currentYInt > 0 && currentYInt >= currentXInt && (!this.lastDirection || this.lastDirection == 'y')) {
            this.xOffset = 0;
            this.lastDirection = 'y';
            this.setTranslate(this.dragContainer, 0, this.currentY);
            var doClose = this.shouldClose();

            if (!this.instance.settings.dragAutoSnap && doClose) {
              this.doSlideClose = true;
            }

            if (this.instance.settings.dragAutoSnap && doClose) {
              this.instance.close();
            }

            return;
          }
        }
      }
    }, {
      key: "shouldChange",
      value: function shouldChange() {
        var doChange = false;
        var currentXInt = Math.abs(this.currentX);

        if (currentXInt >= this.toleranceX) {
          var dragDir = this.currentX > 0 ? 'right' : 'left';

          if (dragDir == 'left' && this.slide !== this.slide.parentNode.lastChild || dragDir == 'right' && this.slide !== this.slide.parentNode.firstChild) {
            doChange = dragDir;
          }
        }

        return doChange;
      }
    }, {
      key: "shouldClose",
      value: function shouldClose() {
        var doClose = false;
        var currentYInt = Math.abs(this.currentY);

        if (currentYInt >= this.toleranceY) {
          doClose = true;
        }

        return doClose;
      }
    }, {
      key: "setTranslate",
      value: function setTranslate(node, xPos, yPos) {
        var animated = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (animated) {
          node.style.transition = 'all .2s ease';
        } else {
          node.style.transition = '';
        }

        node.style.transform = "translate3d(".concat(xPos, "px, ").concat(yPos, "px, 0)");
      }
    }]);

    return DragSlides;
  }();

  function slideImage(slide, data, index, callback) {
    var slideMedia = slide.querySelector('.gslide-media');
    var img = new Image();
    var titleID = 'gSlideTitle_' + index;
    var textID = 'gSlideDesc_' + index;
    img.addEventListener('load', function () {
      if (isFunction(callback)) {
        callback();
      }
    }, false);
    img.src = data.href;

    if (data.sizes != '' && data.srcset != '') {
      img.sizes = data.sizes;
      img.srcset = data.srcset;
    }

    img.alt = '';

    if (!isNil(data.alt) && data.alt !== '') {
      img.alt = data.alt;
    }

    if (data.title !== '') {
      img.setAttribute('aria-labelledby', titleID);
    }

    if (data.description !== '') {
      img.setAttribute('aria-describedby', textID);
    }

    if (data.hasOwnProperty('_hasCustomWidth') && data._hasCustomWidth) {
      img.style.width = data.width;
    }

    if (data.hasOwnProperty('_hasCustomHeight') && data._hasCustomHeight) {
      img.style.height = data.height;
    }

    slideMedia.insertBefore(img, slideMedia.firstChild);
    return;
  }

  function slideVideo(slide, data, index, callback) {
    var _this = this;

    var slideContainer = slide.querySelector('.ginner-container');
    var videoID = 'gvideo' + index;
    var slideMedia = slide.querySelector('.gslide-media');
    var videoPlayers = this.getAllPlayers();
    addClass(slideContainer, 'gvideo-container');
    slideMedia.insertBefore(createHTML('<div class="gvideo-wrapper"></div>'), slideMedia.firstChild);
    var videoWrapper = slide.querySelector('.gvideo-wrapper');
    injectAssets(this.settings.plyr.css, 'Plyr');
    var url = data.href;
    var provider = data === null || data === void 0 ? void 0 : data.videoProvider;
    var customPlaceholder = false;
    slideMedia.style.maxWidth = data.width;
    injectAssets(this.settings.plyr.js, 'Plyr', function () {
      if (!provider && url.match(/vimeo\.com\/([0-9]*)/)) {
        provider = 'vimeo';
      }

      if (!provider && (url.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || url.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || url.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/))) {
        provider = 'youtube';
      }

      if (provider === 'local' || !provider) {
        provider = 'local';
        var html = '<video id="' + videoID + '" ';
        html += "style=\"background:#000; max-width: ".concat(data.width, ";\" ");
        html += 'preload="metadata" ';
        html += 'x-webkit-airplay="allow" ';
        html += 'playsinline ';
        html += 'controls ';
        html += 'class="gvideo-local">';
        html += "<source src=\"".concat(url, "\">");
        html += '</video>';
        customPlaceholder = createHTML(html);
      }

      var placeholder = customPlaceholder ? customPlaceholder : createHTML("<div id=\"".concat(videoID, "\" data-plyr-provider=\"").concat(provider, "\" data-plyr-embed-id=\"").concat(url, "\"></div>"));
      addClass(videoWrapper, "".concat(provider, "-video gvideo"));
      videoWrapper.appendChild(placeholder);
      videoWrapper.setAttribute('data-id', videoID);
      videoWrapper.setAttribute('data-index', index);
      var playerConfig = has(_this.settings.plyr, 'config') ? _this.settings.plyr.config : {};
      var player = new Plyr('#' + videoID, playerConfig);
      player.on('ready', function (event) {
        videoPlayers[videoID] = event.detail.plyr;

        if (isFunction(callback)) {
          callback();
        }
      });
      waitUntil(function () {
        return slide.querySelector('iframe') && slide.querySelector('iframe').dataset.ready == 'true';
      }, function () {
        _this.resize(slide);
      });
      player.on('enterfullscreen', handleMediaFullScreen);
      player.on('exitfullscreen', handleMediaFullScreen);
    });
  }

  function handleMediaFullScreen(event) {
    var media = closest(event.target, '.gslide-media');

    if (event.type === 'enterfullscreen') {
      addClass(media, 'fullscreen');
    }

    if (event.type === 'exitfullscreen') {
      removeClass(media, 'fullscreen');
    }
  }

  function slideInline(slide, data, index, callback) {
    var _this = this;

    var slideMedia = slide.querySelector('.gslide-media');
    var hash = has(data, 'href') && data.href ? data.href.split('#').pop().trim() : false;
    var content = has(data, 'content') && data.content ? data.content : false;
    var innerContent;

    if (content) {
      if (isString(content)) {
        innerContent = createHTML("<div class=\"ginlined-content\">".concat(content, "</div>"));
      }

      if (isNode(content)) {
        if (content.style.display == 'none') {
          content.style.display = 'block';
        }

        var container = document.createElement('div');
        container.className = 'ginlined-content';
        container.appendChild(content);
        innerContent = container;
      }
    }

    if (hash) {
      var div = document.getElementById(hash);

      if (!div) {
        return false;
      }

      var cloned = div.cloneNode(true);
      cloned.style.height = data.height;
      cloned.style.maxWidth = data.width;
      addClass(cloned, 'ginlined-content');
      innerContent = cloned;
    }

    if (!innerContent) {
      console.error('Unable to append inline slide content', data);
      return false;
    }

    slideMedia.style.height = data.height;
    slideMedia.style.width = data.width;
    slideMedia.appendChild(innerContent);
    this.events['inlineclose' + hash] = addEvent('click', {
      onElement: slideMedia.querySelectorAll('.gtrigger-close'),
      withCallback: function withCallback(e) {
        e.preventDefault();

        _this.close();
      }
    });

    if (isFunction(callback)) {
      callback();
    }

    return;
  }

  function slideIframe(slide, data, index, callback) {
    var slideMedia = slide.querySelector('.gslide-media');
    var iframe = createIframe({
      url: data.href,
      callback: callback
    });
    slideMedia.parentNode.style.maxWidth = data.width;
    slideMedia.parentNode.style.height = data.height;
    slideMedia.appendChild(iframe);
    return;
  }

  var SlideConfigParser = function () {
    function SlideConfigParser() {
      var slideParamas = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, SlideConfigParser);

      this.defaults = {
        href: '',
        sizes: '',
        srcset: '',
        title: '',
        type: '',
        videoProvider: '',
        description: '',
        alt: '',
        descPosition: 'bottom',
        effect: '',
        width: '',
        height: '',
        content: false,
        zoomable: true,
        draggable: true
      };

      if (isObject(slideParamas)) {
        this.defaults = extend(this.defaults, slideParamas);
      }
    }

    _createClass(SlideConfigParser, [{
      key: "sourceType",
      value: function sourceType(url) {
        var origin = url;
        url = url.toLowerCase();

        if (url.match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/) !== null) {
          return 'image';
        }

        if (url.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || url.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || url.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) {
          return 'video';
        }

        if (url.match(/vimeo\.com\/([0-9]*)/)) {
          return 'video';
        }

        if (url.match(/\.(mp4|ogg|webm|mov)/) !== null) {
          return 'video';
        }

        if (url.match(/\.(mp3|wav|wma|aac|ogg)/) !== null) {
          return 'audio';
        }

        if (url.indexOf('#') > -1) {
          var hash = origin.split('#').pop();

          if (hash.trim() !== '') {
            return 'inline';
          }
        }

        if (url.indexOf('goajax=true') > -1) {
          return 'ajax';
        }

        return 'external';
      }
    }, {
      key: "parseConfig",
      value: function parseConfig(element, settings) {
        var _this = this;

        var data = extend({
          descPosition: settings.descPosition
        }, this.defaults);

        if (isObject(element) && !isNode(element)) {
          if (!has(element, 'type')) {
            if (has(element, 'content') && element.content) {
              element.type = 'inline';
            } else if (has(element, 'href')) {
              element.type = this.sourceType(element.href);
            }
          }

          var objectData = extend(data, element);
          this.setSize(objectData, settings);
          return objectData;
        }

        var url = '';
        var config = element.getAttribute('data-glightbox');
        var nodeType = element.nodeName.toLowerCase();

        if (nodeType === 'a') {
          url = element.href;
        }

        if (nodeType === 'img') {
          url = element.src;
          data.alt = element.alt;
        }

        data.href = url;
        each(data, function (val, key) {
          if (has(settings, key) && key !== 'width') {
            data[key] = settings[key];
          }

          var nodeData = element.dataset[key];

          if (!isNil(nodeData)) {
            data[key] = _this.sanitizeValue(nodeData);
          }
        });

        if (data.content) {
          data.type = 'inline';
        }

        if (!data.type && url) {
          data.type = this.sourceType(url);
        }

        if (!isNil(config)) {
          var cleanKeys = [];
          each(data, function (v, k) {
            cleanKeys.push(';\\s?' + k);
          });
          cleanKeys = cleanKeys.join('\\s?:|');

          if (config.trim() !== '') {
            each(data, function (val, key) {
              var str = config;
              var match = 's?' + key + 's?:s?(.*?)(' + cleanKeys + 's?:|$)';
              var regex = new RegExp(match);
              var matches = str.match(regex);

              if (matches && matches.length && matches[1]) {
                var value = matches[1].trim().replace(/;\s*$/, '');
                data[key] = _this.sanitizeValue(value);
              }
            });
          }
        } else {
          if (!data.title && nodeType == 'a') {
            var title = element.title;

            if (!isNil(title) && title !== '') {
              data.title = title;
            }
          }

          if (!data.title && nodeType == 'img') {
            var alt = element.alt;

            if (!isNil(alt) && alt !== '') {
              data.title = alt;
            }
          }
        }

        if (data.description && data.description.substring(0, 1) === '.') {
          var description;

          try {
            description = document.querySelector(data.description).innerHTML;
          } catch (error) {
            if (!(error instanceof DOMException)) {
              throw error;
            }
          }

          if (description) {
            data.description = description;
          }
        }

        if (!data.description) {
          var nodeDesc = element.querySelector('.glightbox-desc');

          if (nodeDesc) {
            data.description = nodeDesc.innerHTML;
          }
        }

        this.setSize(data, settings, element);
        this.slideConfig = data;
        return data;
      }
    }, {
      key: "setSize",
      value: function setSize(data, settings) {
        var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var defaultWith = data.type == 'video' ? this.checkSize(settings.videosWidth) : this.checkSize(settings.width);
        var defaultHeight = this.checkSize(settings.height);
        data.width = has(data, 'width') && data.width !== '' ? this.checkSize(data.width) : defaultWith;
        data.height = has(data, 'height') && data.height !== '' ? this.checkSize(data.height) : defaultHeight;

        if (element && data.type == 'image') {
          data._hasCustomWidth = element.dataset.width ? true : false;
          data._hasCustomHeight = element.dataset.height ? true : false;
        }

        return data;
      }
    }, {
      key: "checkSize",
      value: function checkSize(size) {
        return isNumber(size) ? "".concat(size, "px") : size;
      }
    }, {
      key: "sanitizeValue",
      value: function sanitizeValue(val) {
        if (val !== 'true' && val !== 'false') {
          return val;
        }

        return val === 'true';
      }
    }]);

    return SlideConfigParser;
  }();

  var Slide = function () {
    function Slide(el, instance, index) {
      _classCallCheck(this, Slide);

      this.element = el;
      this.instance = instance;
      this.index = index;
    }

    _createClass(Slide, [{
      key: "setContent",
      value: function setContent() {
        var _this = this;

        var slide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (hasClass(slide, 'loaded')) {
          return false;
        }

        var settings = this.instance.settings;
        var slideConfig = this.slideConfig;
        var isMobileDevice = isMobile();

        if (isFunction(settings.beforeSlideLoad)) {
          settings.beforeSlideLoad({
            index: this.index,
            slide: slide,
            player: false
          });
        }

        var type = slideConfig.type;
        var position = slideConfig.descPosition;
        var slideMedia = slide.querySelector('.gslide-media');
        var slideTitle = slide.querySelector('.gslide-title');
        var slideText = slide.querySelector('.gslide-desc');
        var slideDesc = slide.querySelector('.gdesc-inner');
        var finalCallback = callback;
        var titleID = 'gSlideTitle_' + this.index;
        var textID = 'gSlideDesc_' + this.index;

        if (isFunction(settings.afterSlideLoad)) {
          finalCallback = function finalCallback() {
            if (isFunction(callback)) {
              callback();
            }

            settings.afterSlideLoad({
              index: _this.index,
              slide: slide,
              player: _this.instance.getSlidePlayerInstance(_this.index)
            });
          };
        }

        if (slideConfig.title == '' && slideConfig.description == '') {
          if (slideDesc) {
            slideDesc.parentNode.parentNode.removeChild(slideDesc.parentNode);
          }
        } else {
          if (slideTitle && slideConfig.title !== '') {
            slideTitle.id = titleID;
            slideTitle.innerHTML = slideConfig.title;
          } else {
            slideTitle.parentNode.removeChild(slideTitle);
          }

          if (slideText && slideConfig.description !== '') {
            slideText.id = textID;

            if (isMobileDevice && settings.moreLength > 0) {
              slideConfig.smallDescription = this.slideShortDesc(slideConfig.description, settings.moreLength, settings.moreText);
              slideText.innerHTML = slideConfig.smallDescription;
              this.descriptionEvents(slideText, slideConfig);
            } else {
              slideText.innerHTML = slideConfig.description;
            }
          } else {
            slideText.parentNode.removeChild(slideText);
          }

          addClass(slideMedia.parentNode, "desc-".concat(position));
          addClass(slideDesc.parentNode, "description-".concat(position));
        }

        addClass(slideMedia, "gslide-".concat(type));
        addClass(slide, 'loaded');

        if (type === 'video') {
          slideVideo.apply(this.instance, [slide, slideConfig, this.index, finalCallback]);
          return;
        }

        if (type === 'external') {
          slideIframe.apply(this, [slide, slideConfig, this.index, finalCallback]);
          return;
        }

        if (type === 'inline') {
          slideInline.apply(this.instance, [slide, slideConfig, this.index, finalCallback]);

          if (slideConfig.draggable) {
            new DragSlides({
              dragEl: slide.querySelector('.gslide-inline'),
              toleranceX: settings.dragToleranceX,
              toleranceY: settings.dragToleranceY,
              slide: slide,
              instance: this.instance
            });
          }

          return;
        }

        if (type === 'image') {
          slideImage(slide, slideConfig, this.index, function () {
            var img = slide.querySelector('img');

            if (slideConfig.draggable) {
              new DragSlides({
                dragEl: img,
                toleranceX: settings.dragToleranceX,
                toleranceY: settings.dragToleranceY,
                slide: slide,
                instance: _this.instance
              });
            }

            if (slideConfig.zoomable && img.naturalWidth > img.offsetWidth) {
              addClass(img, 'zoomable');
              new ZoomImages(img, slide, function () {
                _this.instance.resize();
              });
            }

            if (isFunction(finalCallback)) {
              finalCallback();
            }
          });
          return;
        }

        if (isFunction(finalCallback)) {
          finalCallback();
        }
      }
    }, {
      key: "slideShortDesc",
      value: function slideShortDesc(string) {
        var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
        var wordBoundary = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var div = document.createElement('div');
        div.innerHTML = string;
        var cleanedString = div.innerText;
        var useWordBoundary = wordBoundary;
        string = cleanedString.trim();

        if (string.length <= n) {
          return string;
        }

        var subString = string.substr(0, n - 1);

        if (!useWordBoundary) {
          return subString;
        }

        div = null;
        return subString + '... <a href="#" class="desc-more">' + wordBoundary + '</a>';
      }
    }, {
      key: "descriptionEvents",
      value: function descriptionEvents(desc, data) {
        var _this2 = this;

        var moreLink = desc.querySelector('.desc-more');

        if (!moreLink) {
          return false;
        }

        addEvent('click', {
          onElement: moreLink,
          withCallback: function withCallback(event, target) {
            event.preventDefault();
            var body = document.body;
            var desc = closest(target, '.gslide-desc');

            if (!desc) {
              return false;
            }

            desc.innerHTML = data.description;
            addClass(body, 'gdesc-open');
            var shortEvent = addEvent('click', {
              onElement: [body, closest(desc, '.gslide-description')],
              withCallback: function withCallback(event, target) {
                if (event.target.nodeName.toLowerCase() !== 'a') {
                  removeClass(body, 'gdesc-open');
                  addClass(body, 'gdesc-closed');
                  desc.innerHTML = data.smallDescription;

                  _this2.descriptionEvents(desc, data);

                  setTimeout(function () {
                    removeClass(body, 'gdesc-closed');
                  }, 400);
                  shortEvent.destroy();
                }
              }
            });
          }
        });
      }
    }, {
      key: "create",
      value: function create() {
        return createHTML(this.instance.settings.slideHTML);
      }
    }, {
      key: "getConfig",
      value: function getConfig() {
        if (!isNode(this.element) && !this.element.hasOwnProperty('draggable')) {
          this.element.draggable = this.instance.settings.draggable;
        }

        var parser = new SlideConfigParser(this.instance.settings.slideExtraAttributes);
        this.slideConfig = parser.parseConfig(this.element, this.instance.settings);
        return this.slideConfig;
      }
    }]);

    return Slide;
  }();

  var _version = '3.1.0';
  var isMobile$1 = isMobile();
  var isTouch$1 = isTouch();
  var html = document.getElementsByTagName('html')[0];
  var defaults = {
    selector: '.glightbox',
    elements: null,
    skin: 'clean',
    theme: 'clean',
    closeButton: true,
    startAt: null,
    autoplayVideos: true,
    autofocusVideos: true,
    descPosition: 'bottom',
    width: '900px',
    height: '506px',
    videosWidth: '960px',
    beforeSlideChange: null,
    afterSlideChange: null,
    beforeSlideLoad: null,
    afterSlideLoad: null,
    slideInserted: null,
    slideRemoved: null,
    slideExtraAttributes: null,
    onOpen: null,
    onClose: null,
    loop: false,
    zoomable: true,
    draggable: true,
    dragAutoSnap: false,
    dragToleranceX: 40,
    dragToleranceY: 65,
    preload: true,
    oneSlidePerOpen: false,
    touchNavigation: true,
    touchFollowAxis: true,
    keyboardNavigation: true,
    closeOnOutsideClick: true,
    plugins: false,
    plyr: {
      css: 'https://cdn.plyr.io/3.6.12/plyr.css',
      js: 'https://cdn.plyr.io/3.6.12/plyr.js',
      config: {
        ratio: '16:9',
        fullscreen: {
          enabled: true,
          iosNative: true
        },
        youtube: {
          noCookie: true,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3
        },
        vimeo: {
          byline: false,
          portrait: false,
          title: false,
          transparent: false
        }
      }
    },
    openEffect: 'zoom',
    closeEffect: 'zoom',
    slideEffect: 'slide',
    moreText: 'See more',
    moreLength: 60,
    cssEfects: {
      fade: {
        "in": 'fadeIn',
        out: 'fadeOut'
      },
      zoom: {
        "in": 'zoomIn',
        out: 'zoomOut'
      },
      slide: {
        "in": 'slideInRight',
        out: 'slideOutLeft'
      },
      slideBack: {
        "in": 'slideInLeft',
        out: 'slideOutRight'
      },
      none: {
        "in": 'none',
        out: 'none'
      }
    },
    svg: {
      close: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
      next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
      prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
    }
  };
  defaults.slideHTML = "<div class=\"gslide\">\n    <div class=\"gslide-inner-content\">\n        <div class=\"ginner-container\">\n            <div class=\"gslide-media\">\n            </div>\n            <div class=\"gslide-description\">\n                <div class=\"gdesc-inner\">\n                    <h4 class=\"gslide-title\"></h4>\n                    <div class=\"gslide-desc\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
  defaults.lightboxHTML = "<div id=\"glightbox-body\" class=\"glightbox-container\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"false\">\n    <div class=\"gloader visible\"></div>\n    <div class=\"goverlay\"></div>\n    <div class=\"gcontainer\">\n    <div id=\"glightbox-slider\" class=\"gslider\"></div>\n    <button class=\"gclose gbtn\" aria-label=\"Close\" data-taborder=\"3\">{closeSVG}</button>\n    <button class=\"gprev gbtn\" aria-label=\"Previous\" data-taborder=\"2\">{prevSVG}</button>\n    <button class=\"gnext gbtn\" aria-label=\"Next\" data-taborder=\"1\">{nextSVG}</button>\n</div>\n</div>";

  var GlightboxInit = function () {
    function GlightboxInit() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, GlightboxInit);

      this.customOptions = options;
      this.settings = extend(defaults, options);
      this.effectsClasses = this.getAnimationClasses();
      this.videoPlayers = {};
      this.apiEvents = [];
      this.fullElementsList = false;
    }

    _createClass(GlightboxInit, [{
      key: "init",
      value: function init() {
        var _this = this;

        var selector = this.getSelector();

        if (selector) {
          this.baseEvents = addEvent('click', {
            onElement: selector,
            withCallback: function withCallback(e, target) {
              e.preventDefault();

              _this.open(target);
            }
          });
        }

        this.elements = this.getElements();
      }
    }, {
      key: "open",
      value: function open() {
        var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var startAt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        if (this.elements.length === 0) {
          return false;
        }

        this.activeSlide = null;
        this.prevActiveSlideIndex = null;
        this.prevActiveSlide = null;
        var index = isNumber(startAt) ? startAt : this.settings.startAt;

        if (isNode(element)) {
          var gallery = element.getAttribute('data-gallery');

          if (gallery) {
            this.fullElementsList = this.elements;
            this.elements = this.getGalleryElements(this.elements, gallery);
          }

          if (isNil(index)) {
            index = this.getElementIndex(element);

            if (index < 0) {
              index = 0;
            }
          }
        }

        if (!isNumber(index)) {
          index = 0;
        }

        this.build();
        animateElement(this.overlay, this.settings.openEffect === 'none' ? 'none' : this.settings.cssEfects.fade["in"]);
        var body = document.body;
        var scrollBar = window.innerWidth - document.documentElement.clientWidth;

        if (scrollBar > 0) {
          var styleSheet = document.createElement('style');
          styleSheet.type = 'text/css';
          styleSheet.className = 'gcss-styles';
          styleSheet.innerText = ".gscrollbar-fixer {margin-right: ".concat(scrollBar, "px}");
          document.head.appendChild(styleSheet);
          addClass(body, 'gscrollbar-fixer');
        }

        addClass(body, 'glightbox-open');
        addClass(html, 'glightbox-open');

        if (isMobile$1) {
          addClass(document.body, 'glightbox-mobile');
          this.settings.slideEffect = 'slide';
        }

        this.showSlide(index, true);

        if (this.elements.length === 1) {
          addClass(this.prevButton, 'glightbox-button-hidden');
          addClass(this.nextButton, 'glightbox-button-hidden');
        } else {
          removeClass(this.prevButton, 'glightbox-button-hidden');
          removeClass(this.nextButton, 'glightbox-button-hidden');
        }

        this.lightboxOpen = true;
        this.trigger('open');

        if (isFunction(this.settings.onOpen)) {
          this.settings.onOpen();
        }

        if (isTouch$1 && this.settings.touchNavigation) {
          touchNavigation(this);
        }

        if (this.settings.keyboardNavigation) {
          keyboardNavigation(this);
        }
      }
    }, {
      key: "openAt",
      value: function openAt() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        this.open(null, index);
      }
    }, {
      key: "showSlide",
      value: function showSlide() {
        var _this2 = this;

        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var first = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        show(this.loader);
        this.index = parseInt(index);
        var current = this.slidesContainer.querySelector('.current');

        if (current) {
          removeClass(current, 'current');
        }

        this.slideAnimateOut();
        var slideNode = this.slidesContainer.querySelectorAll('.gslide')[index];

        if (hasClass(slideNode, 'loaded')) {
          this.slideAnimateIn(slideNode, first);
          hide(this.loader);
        } else {
          show(this.loader);
          var slide = this.elements[index];
          var slideData = {
            index: this.index,
            slide: slideNode,
            slideNode: slideNode,
            slideConfig: slide.slideConfig,
            slideIndex: this.index,
            trigger: slide.node,
            player: null
          };
          this.trigger('slide_before_load', slideData);
          slide.instance.setContent(slideNode, function () {
            hide(_this2.loader);

            _this2.resize();

            _this2.slideAnimateIn(slideNode, first);

            _this2.trigger('slide_after_load', slideData);
          });
        }

        this.slideDescription = slideNode.querySelector('.gslide-description');
        this.slideDescriptionContained = this.slideDescription && hasClass(this.slideDescription.parentNode, 'gslide-media');

        if (this.settings.preload) {
          this.preloadSlide(index + 1);
          this.preloadSlide(index - 1);
        }

        this.updateNavigationClasses();
        this.activeSlide = slideNode;
      }
    }, {
      key: "preloadSlide",
      value: function preloadSlide(index) {
        var _this3 = this;

        if (index < 0 || index > this.elements.length - 1) {
          return false;
        }

        if (isNil(this.elements[index])) {
          return false;
        }

        var slideNode = this.slidesContainer.querySelectorAll('.gslide')[index];

        if (hasClass(slideNode, 'loaded')) {
          return false;
        }

        var slide = this.elements[index];
        var type = slide.type;
        var slideData = {
          index: index,
          slide: slideNode,
          slideNode: slideNode,
          slideConfig: slide.slideConfig,
          slideIndex: index,
          trigger: slide.node,
          player: null
        };
        this.trigger('slide_before_load', slideData);

        if (type === 'video' || type === 'external') {
          setTimeout(function () {
            slide.instance.setContent(slideNode, function () {
              _this3.trigger('slide_after_load', slideData);
            });
          }, 200);
        } else {
          slide.instance.setContent(slideNode, function () {
            _this3.trigger('slide_after_load', slideData);
          });
        }
      }
    }, {
      key: "prevSlide",
      value: function prevSlide() {
        this.goToSlide(this.index - 1);
      }
    }, {
      key: "nextSlide",
      value: function nextSlide() {
        this.goToSlide(this.index + 1);
      }
    }, {
      key: "goToSlide",
      value: function goToSlide() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        this.prevActiveSlide = this.activeSlide;
        this.prevActiveSlideIndex = this.index;

        if (!this.loop() && (index < 0 || index > this.elements.length - 1)) {
          return false;
        }

        if (index < 0) {
          index = this.elements.length - 1;
        } else if (index >= this.elements.length) {
          index = 0;
        }

        this.showSlide(index);
      }
    }, {
      key: "insertSlide",
      value: function insertSlide() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

        if (index < 0) {
          index = this.elements.length;
        }

        var slide = new Slide(config, this, index);
        var data = slide.getConfig();
        var slideInfo = extend({}, data);
        var newSlide = slide.create();
        var totalSlides = this.elements.length - 1;
        slideInfo.index = index;
        slideInfo.node = false;
        slideInfo.instance = slide;
        slideInfo.slideConfig = data;
        this.elements.splice(index, 0, slideInfo);
        var addedSlideNode = null;
        var addedSlidePlayer = null;

        if (this.slidesContainer) {
          if (index > totalSlides) {
            this.slidesContainer.appendChild(newSlide);
          } else {
            var existingSlide = this.slidesContainer.querySelectorAll('.gslide')[index];
            this.slidesContainer.insertBefore(newSlide, existingSlide);
          }

          if (this.settings.preload && this.index == 0 && index == 0 || this.index - 1 == index || this.index + 1 == index) {
            this.preloadSlide(index);
          }

          if (this.index === 0 && index === 0) {
            this.index = 1;
          }

          this.updateNavigationClasses();
          addedSlideNode = this.slidesContainer.querySelectorAll('.gslide')[index];
          addedSlidePlayer = this.getSlidePlayerInstance(index);
          slideInfo.slideNode = addedSlideNode;
        }

        this.trigger('slide_inserted', {
          index: index,
          slide: addedSlideNode,
          slideNode: addedSlideNode,
          slideConfig: data,
          slideIndex: index,
          trigger: null,
          player: addedSlidePlayer
        });

        if (isFunction(this.settings.slideInserted)) {
          this.settings.slideInserted({
            index: index,
            slide: addedSlideNode,
            player: addedSlidePlayer
          });
        }
      }
    }, {
      key: "removeSlide",
      value: function removeSlide() {
        var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;

        if (index < 0 || index > this.elements.length - 1) {
          return false;
        }

        var slide = this.slidesContainer && this.slidesContainer.querySelectorAll('.gslide')[index];

        if (slide) {
          if (this.getActiveSlideIndex() == index) {
            if (index == this.elements.length - 1) {
              this.prevSlide();
            } else {
              this.nextSlide();
            }
          }

          slide.parentNode.removeChild(slide);
        }

        this.elements.splice(index, 1);
        this.trigger('slide_removed', index);

        if (isFunction(this.settings.slideRemoved)) {
          this.settings.slideRemoved(index);
        }
      }
    }, {
      key: "slideAnimateIn",
      value: function slideAnimateIn(slide, first) {
        var _this4 = this;

        var slideMedia = slide.querySelector('.gslide-media');
        var slideDesc = slide.querySelector('.gslide-description');
        var prevData = {
          index: this.prevActiveSlideIndex,
          slide: this.prevActiveSlide,
          slideNode: this.prevActiveSlide,
          slideIndex: this.prevActiveSlide,
          slideConfig: isNil(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
          trigger: isNil(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
          player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
        };
        var nextData = {
          index: this.index,
          slide: this.activeSlide,
          slideNode: this.activeSlide,
          slideConfig: this.elements[this.index].slideConfig,
          slideIndex: this.index,
          trigger: this.elements[this.index].node,
          player: this.getSlidePlayerInstance(this.index)
        };

        if (slideMedia.offsetWidth > 0 && slideDesc) {
          hide(slideDesc);
          slideDesc.style.display = '';
        }

        removeClass(slide, this.effectsClasses);

        if (first) {
          animateElement(slide, this.settings.cssEfects[this.settings.openEffect]["in"], function () {
            if (_this4.settings.autoplayVideos) {
              _this4.slidePlayerPlay(slide);
            }

            _this4.trigger('slide_changed', {
              prev: prevData,
              current: nextData
            });

            if (isFunction(_this4.settings.afterSlideChange)) {
              _this4.settings.afterSlideChange.apply(_this4, [prevData, nextData]);
            }
          });
        } else {
          var effectName = this.settings.slideEffect;
          var animIn = effectName !== 'none' ? this.settings.cssEfects[effectName]["in"] : effectName;

          if (this.prevActiveSlideIndex > this.index) {
            if (this.settings.slideEffect == 'slide') {
              animIn = this.settings.cssEfects.slideBack["in"];
            }
          }

          animateElement(slide, animIn, function () {
            if (_this4.settings.autoplayVideos) {
              _this4.slidePlayerPlay(slide);
            }

            _this4.trigger('slide_changed', {
              prev: prevData,
              current: nextData
            });

            if (isFunction(_this4.settings.afterSlideChange)) {
              _this4.settings.afterSlideChange.apply(_this4, [prevData, nextData]);
            }
          });
        }

        setTimeout(function () {
          _this4.resize(slide);
        }, 100);
        addClass(slide, 'current');
      }
    }, {
      key: "slideAnimateOut",
      value: function slideAnimateOut() {
        if (!this.prevActiveSlide) {
          return false;
        }

        var prevSlide = this.prevActiveSlide;
        removeClass(prevSlide, this.effectsClasses);
        addClass(prevSlide, 'prev');
        var animation = this.settings.slideEffect;
        var animOut = animation !== 'none' ? this.settings.cssEfects[animation].out : animation;
        this.slidePlayerPause(prevSlide);
        this.trigger('slide_before_change', {
          prev: {
            index: this.prevActiveSlideIndex,
            slide: this.prevActiveSlide,
            slideNode: this.prevActiveSlide,
            slideIndex: this.prevActiveSlideIndex,
            slideConfig: isNil(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
            trigger: isNil(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
          },
          current: {
            index: this.index,
            slide: this.activeSlide,
            slideNode: this.activeSlide,
            slideIndex: this.index,
            slideConfig: this.elements[this.index].slideConfig,
            trigger: this.elements[this.index].node,
            player: this.getSlidePlayerInstance(this.index)
          }
        });

        if (isFunction(this.settings.beforeSlideChange)) {
          this.settings.beforeSlideChange.apply(this, [{
            index: this.prevActiveSlideIndex,
            slide: this.prevActiveSlide,
            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
          }, {
            index: this.index,
            slide: this.activeSlide,
            player: this.getSlidePlayerInstance(this.index)
          }]);
        }

        if (this.prevActiveSlideIndex > this.index && this.settings.slideEffect == 'slide') {
          animOut = this.settings.cssEfects.slideBack.out;
        }

        animateElement(prevSlide, animOut, function () {
          var container = prevSlide.querySelector('.ginner-container');
          var media = prevSlide.querySelector('.gslide-media');
          var desc = prevSlide.querySelector('.gslide-description');
          container.style.transform = '';
          media.style.transform = '';
          removeClass(media, 'greset');
          media.style.opacity = '';

          if (desc) {
            desc.style.opacity = '';
          }

          removeClass(prevSlide, 'prev');
        });
      }
    }, {
      key: "getAllPlayers",
      value: function getAllPlayers() {
        return this.videoPlayers;
      }
    }, {
      key: "getSlidePlayerInstance",
      value: function getSlidePlayerInstance(index) {
        var id = 'gvideo' + index;
        var videoPlayers = this.getAllPlayers();

        if (has(videoPlayers, id) && videoPlayers[id]) {
          return videoPlayers[id];
        }

        return false;
      }
    }, {
      key: "stopSlideVideo",
      value: function stopSlideVideo(slide) {
        if (isNode(slide)) {
          var node = slide.querySelector('.gvideo-wrapper');

          if (node) {
            slide = node.getAttribute('data-index');
          }
        }

        console.log('stopSlideVideo is deprecated, use slidePlayerPause');
        var player = this.getSlidePlayerInstance(slide);

        if (player && player.playing) {
          player.pause();
        }
      }
    }, {
      key: "slidePlayerPause",
      value: function slidePlayerPause(slide) {
        if (isNode(slide)) {
          var node = slide.querySelector('.gvideo-wrapper');

          if (node) {
            slide = node.getAttribute('data-index');
          }
        }

        var player = this.getSlidePlayerInstance(slide);

        if (player && player.playing) {
          player.pause();
        }
      }
    }, {
      key: "playSlideVideo",
      value: function playSlideVideo(slide) {
        if (isNode(slide)) {
          var node = slide.querySelector('.gvideo-wrapper');

          if (node) {
            slide = node.getAttribute('data-index');
          }
        }

        console.log('playSlideVideo is deprecated, use slidePlayerPlay');
        var player = this.getSlidePlayerInstance(slide);

        if (player && !player.playing) {
          player.play();
        }
      }
    }, {
      key: "slidePlayerPlay",
      value: function slidePlayerPlay(slide) {
        var _this$settings$plyr$c;

        if (isMobile$1 && !((_this$settings$plyr$c = this.settings.plyr.config) !== null && _this$settings$plyr$c !== void 0 && _this$settings$plyr$c.muted)) {
          return;
        }

        if (isNode(slide)) {
          var node = slide.querySelector('.gvideo-wrapper');

          if (node) {
            slide = node.getAttribute('data-index');
          }
        }

        var player = this.getSlidePlayerInstance(slide);

        if (player && !player.playing) {
          player.play();

          if (this.settings.autofocusVideos) {
            player.elements.container.focus();
          }
        }
      }
    }, {
      key: "setElements",
      value: function setElements(elements) {
        var _this5 = this;

        this.settings.elements = false;
        var newElements = [];

        if (elements && elements.length) {
          each(elements, function (el, i) {
            var slide = new Slide(el, _this5, i);
            var data = slide.getConfig();
            var slideInfo = extend({}, data);
            slideInfo.slideConfig = data;
            slideInfo.instance = slide;
            slideInfo.index = i;
            newElements.push(slideInfo);
          });
        }

        this.elements = newElements;

        if (this.lightboxOpen) {
          this.slidesContainer.innerHTML = '';

          if (this.elements.length) {
            each(this.elements, function () {
              var slide = createHTML(_this5.settings.slideHTML);

              _this5.slidesContainer.appendChild(slide);
            });
            this.showSlide(0, true);
          }
        }
      }
    }, {
      key: "getElementIndex",
      value: function getElementIndex(node) {
        var index = false;
        each(this.elements, function (el, i) {
          if (has(el, 'node') && el.node == node) {
            index = i;
            return true;
          }
        });
        return index;
      }
    }, {
      key: "getElements",
      value: function getElements() {
        var _this6 = this;

        var list = [];
        this.elements = this.elements ? this.elements : [];

        if (!isNil(this.settings.elements) && isArray(this.settings.elements) && this.settings.elements.length) {
          each(this.settings.elements, function (el, i) {
            var slide = new Slide(el, _this6, i);
            var elData = slide.getConfig();
            var slideInfo = extend({}, elData);
            slideInfo.node = false;
            slideInfo.index = i;
            slideInfo.instance = slide;
            slideInfo.slideConfig = elData;
            list.push(slideInfo);
          });
        }

        var nodes = false;
        var selector = this.getSelector();

        if (selector) {
          nodes = document.querySelectorAll(this.getSelector());
        }

        if (!nodes) {
          return list;
        }

        each(nodes, function (el, i) {
          var slide = new Slide(el, _this6, i);
          var elData = slide.getConfig();
          var slideInfo = extend({}, elData);
          slideInfo.node = el;
          slideInfo.index = i;
          slideInfo.instance = slide;
          slideInfo.slideConfig = elData;
          slideInfo.gallery = el.getAttribute('data-gallery');
          list.push(slideInfo);
        });
        return list;
      }
    }, {
      key: "getGalleryElements",
      value: function getGalleryElements(list, gallery) {
        return list.filter(function (el) {
          return el.gallery == gallery;
        });
      }
    }, {
      key: "getSelector",
      value: function getSelector() {
        if (this.settings.elements) {
          return false;
        }

        if (this.settings.selector && this.settings.selector.substring(0, 5) == 'data-') {
          return "*[".concat(this.settings.selector, "]");
        }

        return this.settings.selector;
      }
    }, {
      key: "getActiveSlide",
      value: function getActiveSlide() {
        return this.slidesContainer.querySelectorAll('.gslide')[this.index];
      }
    }, {
      key: "getActiveSlideIndex",
      value: function getActiveSlideIndex() {
        return this.index;
      }
    }, {
      key: "getAnimationClasses",
      value: function getAnimationClasses() {
        var effects = [];

        for (var key in this.settings.cssEfects) {
          if (this.settings.cssEfects.hasOwnProperty(key)) {
            var effect = this.settings.cssEfects[key];
            effects.push("g".concat(effect["in"]));
            effects.push("g".concat(effect.out));
          }
        }

        return effects.join(' ');
      }
    }, {
      key: "build",
      value: function build() {
        var _this7 = this;

        if (this.built) {
          return false;
        }

        var children = document.body.childNodes;
        var bodyChildElms = [];
        each(children, function (el) {
          if (el.parentNode == document.body && el.nodeName.charAt(0) !== '#' && el.hasAttribute && !el.hasAttribute('aria-hidden')) {
            bodyChildElms.push(el);
            el.setAttribute('aria-hidden', 'true');
          }
        });
        var nextSVG = has(this.settings.svg, 'next') ? this.settings.svg.next : '';
        var prevSVG = has(this.settings.svg, 'prev') ? this.settings.svg.prev : '';
        var closeSVG = has(this.settings.svg, 'close') ? this.settings.svg.close : '';
        var lightboxHTML = this.settings.lightboxHTML;
        lightboxHTML = lightboxHTML.replace(/{nextSVG}/g, nextSVG);
        lightboxHTML = lightboxHTML.replace(/{prevSVG}/g, prevSVG);
        lightboxHTML = lightboxHTML.replace(/{closeSVG}/g, closeSVG);
        lightboxHTML = createHTML(lightboxHTML);
        document.body.appendChild(lightboxHTML);
        var modal = document.getElementById('glightbox-body');
        this.modal = modal;
        var closeButton = modal.querySelector('.gclose');
        this.prevButton = modal.querySelector('.gprev');
        this.nextButton = modal.querySelector('.gnext');
        this.overlay = modal.querySelector('.goverlay');
        this.loader = modal.querySelector('.gloader');
        this.slidesContainer = document.getElementById('glightbox-slider');
        this.bodyHiddenChildElms = bodyChildElms;
        this.events = {};
        addClass(this.modal, 'glightbox-' + this.settings.skin);

        if (this.settings.closeButton && closeButton) {
          this.events['close'] = addEvent('click', {
            onElement: closeButton,
            withCallback: function withCallback(e, target) {
              e.preventDefault();

              _this7.close();
            }
          });
        }

        if (closeButton && !this.settings.closeButton) {
          closeButton.parentNode.removeChild(closeButton);
        }

        if (this.nextButton) {
          this.events['next'] = addEvent('click', {
            onElement: this.nextButton,
            withCallback: function withCallback(e, target) {
              e.preventDefault();

              _this7.nextSlide();
            }
          });
        }

        if (this.prevButton) {
          this.events['prev'] = addEvent('click', {
            onElement: this.prevButton,
            withCallback: function withCallback(e, target) {
              e.preventDefault();

              _this7.prevSlide();
            }
          });
        }

        if (this.settings.closeOnOutsideClick) {
          this.events['outClose'] = addEvent('click', {
            onElement: modal,
            withCallback: function withCallback(e, target) {
              if (!_this7.preventOutsideClick && !hasClass(document.body, 'glightbox-mobile') && !closest(e.target, '.ginner-container')) {
                if (!closest(e.target, '.gbtn') && !hasClass(e.target, 'gnext') && !hasClass(e.target, 'gprev')) {
                  _this7.close();
                }
              }
            }
          });
        }

        each(this.elements, function (slide, i) {
          _this7.slidesContainer.appendChild(slide.instance.create());

          slide.slideNode = _this7.slidesContainer.querySelectorAll('.gslide')[i];
        });

        if (isTouch$1) {
          addClass(document.body, 'glightbox-touch');
        }

        this.events['resize'] = addEvent('resize', {
          onElement: window,
          withCallback: function withCallback() {
            _this7.resize();
          }
        });
        this.built = true;
      }
    }, {
      key: "resize",
      value: function resize() {
        var slide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        slide = !slide ? this.activeSlide : slide;

        if (!slide || hasClass(slide, 'zoomed')) {
          return;
        }

        var winSize = windowSize();
        var video = slide.querySelector('.gvideo-wrapper');
        var image = slide.querySelector('.gslide-image');
        var description = this.slideDescription;
        var winWidth = winSize.width;
        var winHeight = winSize.height;

        if (winWidth <= 768) {
          addClass(document.body, 'glightbox-mobile');
        } else {
          removeClass(document.body, 'glightbox-mobile');
        }

        if (!video && !image) {
          return;
        }

        var descriptionResize = false;

        if (description && (hasClass(description, 'description-bottom') || hasClass(description, 'description-top')) && !hasClass(description, 'gabsolute')) {
          descriptionResize = true;
        }

        if (image) {
          if (winWidth <= 768) {
            var imgNode = image.querySelector('img');
          } else if (descriptionResize) {
            var descHeight = description.offsetHeight;

            var _imgNode = image.querySelector('img');

            _imgNode.setAttribute('style', "max-height: calc(100vh - ".concat(descHeight, "px)"));

            description.setAttribute('style', "max-width: ".concat(_imgNode.offsetWidth, "px;"));
          }
        }

        if (video) {
          var ratio = has(this.settings.plyr.config, 'ratio') ? this.settings.plyr.config.ratio : '';

          if (!ratio) {
            var containerWidth = video.clientWidth;
            var containerHeight = video.clientHeight;
            var divisor = containerWidth / containerHeight;
            ratio = "".concat(containerWidth / divisor, ":").concat(containerHeight / divisor);
          }

          var videoRatio = ratio.split(':');
          var videoWidth = this.settings.videosWidth;
          var maxWidth = this.settings.videosWidth;

          if (isNumber(videoWidth) || videoWidth.indexOf('px') !== -1) {
            maxWidth = parseInt(videoWidth);
          } else {
            if (videoWidth.indexOf('vw') !== -1) {
              maxWidth = winWidth * parseInt(videoWidth) / 100;
            } else if (videoWidth.indexOf('vh') !== -1) {
              maxWidth = winHeight * parseInt(videoWidth) / 100;
            } else if (videoWidth.indexOf('%') !== -1) {
              maxWidth = winWidth * parseInt(videoWidth) / 100;
            } else {
              maxWidth = parseInt(video.clientWidth);
            }
          }

          var maxHeight = maxWidth / (parseInt(videoRatio[0]) / parseInt(videoRatio[1]));
          maxHeight = Math.floor(maxHeight);

          if (descriptionResize) {
            winHeight = winHeight - description.offsetHeight;
          }

          if (maxWidth > winWidth || maxHeight > winHeight || winHeight < maxHeight && winWidth > maxWidth) {
            var vwidth = video.offsetWidth;
            var vheight = video.offsetHeight;

            var _ratio = winHeight / vheight;

            var vsize = {
              width: vwidth * _ratio,
              height: vheight * _ratio
            };
            video.parentNode.setAttribute('style', "max-width: ".concat(vsize.width, "px"));

            if (descriptionResize) {
              description.setAttribute('style', "max-width: ".concat(vsize.width, "px;"));
            }
          } else {
            video.parentNode.style.maxWidth = "".concat(videoWidth);

            if (descriptionResize) {
              description.setAttribute('style', "max-width: ".concat(videoWidth, ";"));
            }
          }
        }
      }
    }, {
      key: "reload",
      value: function reload() {
        this.init();
      }
    }, {
      key: "updateNavigationClasses",
      value: function updateNavigationClasses() {
        var loop = this.loop();
        removeClass(this.nextButton, 'disabled');
        removeClass(this.prevButton, 'disabled');

        if (this.index == 0 && this.elements.length - 1 == 0) {
          addClass(this.prevButton, 'disabled');
          addClass(this.nextButton, 'disabled');
        } else if (this.index === 0 && !loop) {
          addClass(this.prevButton, 'disabled');
        } else if (this.index === this.elements.length - 1 && !loop) {
          addClass(this.nextButton, 'disabled');
        }
      }
    }, {
      key: "loop",
      value: function loop() {
        var loop = has(this.settings, 'loopAtEnd') ? this.settings.loopAtEnd : null;
        loop = has(this.settings, 'loop') ? this.settings.loop : loop;
        return loop;
      }
    }, {
      key: "close",
      value: function close() {
        var _this8 = this;

        if (!this.lightboxOpen) {
          if (this.events) {
            for (var key in this.events) {
              if (this.events.hasOwnProperty(key)) {
                this.events[key].destroy();
              }
            }

            this.events = null;
          }

          return false;
        }

        if (this.closing) {
          return false;
        }

        this.closing = true;
        this.slidePlayerPause(this.activeSlide);

        if (this.fullElementsList) {
          this.elements = this.fullElementsList;
        }

        if (this.bodyHiddenChildElms.length) {
          each(this.bodyHiddenChildElms, function (el) {
            el.removeAttribute('aria-hidden');
          });
        }

        addClass(this.modal, 'glightbox-closing');
        animateElement(this.overlay, this.settings.openEffect == 'none' ? 'none' : this.settings.cssEfects.fade.out);
        animateElement(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function () {
          _this8.activeSlide = null;
          _this8.prevActiveSlideIndex = null;
          _this8.prevActiveSlide = null;
          _this8.built = false;

          if (_this8.events) {
            for (var _key in _this8.events) {
              if (_this8.events.hasOwnProperty(_key)) {
                _this8.events[_key].destroy();
              }
            }

            _this8.events = null;
          }

          var body = document.body;
          removeClass(html, 'glightbox-open');
          removeClass(body, 'glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer');

          _this8.modal.parentNode.removeChild(_this8.modal);

          _this8.trigger('close');

          if (isFunction(_this8.settings.onClose)) {
            _this8.settings.onClose();
          }

          var styles = document.querySelector('.gcss-styles');

          if (styles) {
            styles.parentNode.removeChild(styles);
          }

          _this8.lightboxOpen = false;
          _this8.closing = null;
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.close();
        this.clearAllEvents();

        if (this.baseEvents) {
          this.baseEvents.destroy();
        }
      }
    }, {
      key: "on",
      value: function on(evt, callback) {
        var once = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (!evt || !isFunction(callback)) {
          throw new TypeError('Event name and callback must be defined');
        }

        this.apiEvents.push({
          evt: evt,
          once: once,
          callback: callback
        });
      }
    }, {
      key: "once",
      value: function once(evt, callback) {
        this.on(evt, callback, true);
      }
    }, {
      key: "trigger",
      value: function trigger(eventName) {
        var _this9 = this;

        var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        var onceTriggered = [];
        each(this.apiEvents, function (event, i) {
          var evt = event.evt,
              once = event.once,
              callback = event.callback;

          if (evt == eventName) {
            callback(data);

            if (once) {
              onceTriggered.push(i);
            }
          }
        });

        if (onceTriggered.length) {
          each(onceTriggered, function (i) {
            return _this9.apiEvents.splice(i, 1);
          });
        }
      }
    }, {
      key: "clearAllEvents",
      value: function clearAllEvents() {
        this.apiEvents.splice(0, this.apiEvents.length);
      }
    }, {
      key: "version",
      value: function version() {
        return _version;
      }
    }]);

    return GlightboxInit;
  }();

  function glightbox() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var instance = new GlightboxInit(options);
    instance.init();
    return instance;
  }

  return glightbox;
});