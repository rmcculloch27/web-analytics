var tObjectCheck,
  _allowedQuerystrings = [],
  isSearch = !1,
  oCONFIG = {
    GWT_UAID: ["UA-33523145-1"],
    GWT_GA4ID: ["G-CSLL4ZEK4L"],
    FORCE_SSL: !0,
    ANONYMIZE_IP: !0,
    AGENCY: "",
    SUB_AGENCY: "",
    VERSION: "20231212 v6.9 - Dual Tracking",
    SITE_TOPIC: "",
    SITE_PLATFORM: "",
    SCRIPT_SOURCE: "",
    URL_PROTOCOL: location.protocol,
    USE_MAIN_CUSTOM_DIMENSIONS: !0,
    MAIN_AGENCY_CUSTOM_DIMENSION_SLOT: "dimension1",
    MAIN_SUBAGENCY_CUSTOM_DIMENSION_SLOT: "dimension2",
    MAIN_CODEVERSION_CUSTOM_DIMENSION_SLOT: "dimension3",
    MAIN_SITE_TOPIC_CUSTOM_DIMENSION_SLOT: "dimension4",
    MAIN_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT: "dimension5",
    MAIN_SCRIPT_SOURCE_URL_CUSTOM_DIMENSION_SLOT: "dimension6",
    MAIN_URL_PROTOCOL_CUSTOM_DIMENSION_SLOT: "dimension7",
    MAIN_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT: "dimension8",
    USE_PARALLEL_CUSTOM_DIMENSIONS: !1,
    PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT: "dimension1",
    PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT: "dimension2",
    PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT: "dimension3",
    PARALLEL_SITE_TOPIC_CUSTOM_DIMENSION_SLOT: "dimension4",
    PARALLEL_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT: "dimension5",
    PARALLEL_SCRIPT_SOURCE_URL_CUSTOM_DIMENSION_SLOT: "dimension6",
    PARALLEL_URL_PROTOCOL_CUSTOM_DIMENSION_SLOT: "dimension7",
    PARALLEL_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT: "dimension8",
    COOKIE_DOMAIN: location.hostname.replace(/^www\./, "").toLowerCase(),
    COOKIE_TIMEOUT: 63072e3,
    SEARCH_PARAMS:
      "q|query|nasaInclude|k|querytext|keys|qt|search_input|search|globalSearch|goog|s|gsearch|search_keywords|SearchableText|sp_q|qs|psnetsearch|locate|lookup|search_api_views_fulltext|keywords|request|_3_keywords",
    YOUTUBE: !1,
    AUTOTRACKER: !0,
    EXTS: "doc|docx|xls|xlsx|xlsm|ppt|pptx|exe|zip|pdf|js|txt|csv|dxf|dwgd|rfa|rvt|dwfx|dwg|wmv|jpg|msi|7z|gz|tgz|wma|mov|avi|mp3|mp4|csv|mobi|epub|swf|rar",
    SUBDOMAIN_BASED: !0,
    PUA_NAME: "GSA_ENOR",
    GA4_NAME: "GSA_GA4_ENOR",
  };
document.location.href.match(/([?&])(dap-dev-env)([^&$]*)/i) &&
  ((oCONFIG.GWT_UAID[0] = "UA-33523145-1"),
  (oCONFIG.GWT_GA4ID[0] = "G-9TNNMGP8WJ"));
var head = document.getElementsByTagName("head").item(0),
  GA4Object = document.createElement("script");
GA4Object.setAttribute("type", "text/javascript");
GA4Object.setAttribute(
  "src",
  "https://www.googletagmanager.com/gtag/js?id=" + oCONFIG.GWT_GA4ID[0]
);
head.appendChild(GA4Object);
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("set", "cookie_flags", "SameSite=Strict;Secure");
"undefined" === typeof window.GoogleAnalyticsObject &&
  (function (a, b, c, d, k, g, l) {
    a.GoogleAnalyticsObject = k;
    a[k] =
      a[k] ||
      function () {
        (a[k].q = a[k].q || []).push(arguments);
      };
    a[k].l = 1 * new Date();
    g = b.createElement(c);
    l = b.getElementsByTagName(c)[0];
    g.async = 1;
    g.src = d;
    l.parentNode.insertBefore(g, l);
  })(
    window,
    document,
    "script",
    "https://www.google-analytics.com/analytics.js",
    "ga"
  );
tObjectCheck = window.GoogleAnalyticsObject;
var trackerFlag = !0;
function _onEveryPage() {
  _updateConfig();
  _defineCookieDomain();
  _defineAgencyCDsValues();
  _setAllowedQS();
  createTracker(trackerFlag);
  _sendViewSearchResult(location.href);
}
_onEveryPage();
function _defineCookieDomain() {
  /(([^.\/]+\.[^.\/]{2,3}\.[^.\/]{2})|(([^.\/]+\.)[^.\/]{2,4}))(\/.*)?$/.test(
    oCONFIG.SUBDOMAIN_BASED.toString()
  )
    ? ((oCONFIG.COOKIE_DOMAIN = oCONFIG.SUBDOMAIN_BASED.toLowerCase().replace(
        /^www\./i,
        ""
      )),
      (oCONFIG.SUBDOMAIN_BASED = !0))
    : !1 === oCONFIG.SUBDOMAIN_BASED
    ? ((oCONFIG.COOKIE_DOMAIN = document.location.hostname.match(
        /(([^.\/]+\.[^.\/]{2,3}\.[^.\/]{2})|(([^.\/]+\.)[^.\/]{2,4}))(\/.*)?$/
      )[1]),
      (oCONFIG.SUBDOMAIN_BASED = !0))
    : ((oCONFIG.COOKIE_DOMAIN = location.hostname
        .toLowerCase()
        .replace(/^www\./i, "")),
      (oCONFIG.SUBDOMAIN_BASED = !1));
}
function _defineAgencyCDsValues() {
  oCONFIG.AGENCY = oCONFIG.AGENCY || "unspecified:" + oCONFIG.COOKIE_DOMAIN;
  oCONFIG.SUB_AGENCY = oCONFIG.SUB_AGENCY || "" + oCONFIG.COOKIE_DOMAIN;
  oCONFIG.SITE_TOPIC =
    oCONFIG.SITE_TOPIC || "unspecified:" + oCONFIG.COOKIE_DOMAIN;
  oCONFIG.SITE_PLATFORM =
    oCONFIG.SITE_PLATFORM || "unspecified:" + oCONFIG.COOKIE_DOMAIN;
}
function _cleanBooleanParam(a) {
  switch (a.toString().toLowerCase()) {
    case "true":
    case "on":
    case "yes":
    case "1":
      return !0;
    case "false":
    case "off":
    case "no":
    case "0":
      return !1;
    default:
      return a;
  }
}
function _isValidUANum(a) {
  a = a.toLowerCase();
  a = a.match(/^ua\-([0-9]+)\-[0-9]+$/);
  return (
    null !== a && 0 < a.length && a[0] !== oCONFIG.GWT_UAID[0].toLowerCase()
  );
}
function _isValidGA4Num(a) {
  a = a.toLowerCase();
  a = a.match(/^g\-([0-9a-z])+$/);
  return (
    null !== a && 0 < a.length && a[0] !== oCONFIG.GWT_GA4ID[0].toLowerCase()
  );
}
function _cleanDimensionValue(a) {
  try {
    pattern = /^dimension([1-9]|[1-9][0-9]|1([0-9][0-9])|200)$/;
    if (pattern.test(a)) return a;
    if (null !== a.match(/\d+$/g)) {
      var b = "dimension" + a.match(/\d+$/g)[0];
      if (pattern.test(b)) return b;
    }
    return "";
  } catch (c) {}
}
function _updateConfig() {
  if ("undefined" !== typeof _fedParmsGTM) {
    var a = _fedParmsGTM.toLowerCase().split("&");
    oCONFIG.SCRIPT_SOURCE = "GTM";
  } else {
    var b = document.getElementById("_fed_an_ua_tag");
    _fullParams = b.src.match(/^([^\?]*)(.*)$/i)[2].replace("?", "");
    a = _fullParams.split("&");
    oCONFIG.SCRIPT_SOURCE = b.src.split("?")[0];
  }
  for (b = 0; b < a.length; b++)
    switch (
      ((_keyValuePair = decodeURIComponent(a[b].toLowerCase())),
      (_key = _keyValuePair.split("=")[0]),
      (_value = _keyValuePair.split("=")[1]),
      _key)
    ) {
      case "pua":
        for (var c = _value.split(","), d = 0; d < c.length; d++)
          _isValidUANum(c[d]) && oCONFIG.GWT_UAID.push(c[d].toUpperCase());
        break;
      case "pga4":
        c = _value.split(",");
        for (d = 0; d < c.length; d++)
          _isValidGA4Num(c[d]) && oCONFIG.GWT_GA4ID.push(c[d].toUpperCase());
        break;
      case "agency":
        oCONFIG.AGENCY = _value.toUpperCase();
        break;
      case "subagency":
        oCONFIG.SUB_AGENCY = _value.toUpperCase();
        break;
      case "sitetopic":
        oCONFIG.SITE_TOPIC = _value;
        break;
      case "siteplatform":
        oCONFIG.SITE_PLATFORM = _value;
        break;
      case "parallelcd":
        _value = _cleanBooleanParam(_value);
        if (!0 === _value || !1 === _value)
          oCONFIG.USE_PARALLEL_CUSTOM_DIMENSIONS = _value;
        break;
      case "palagencydim":
        _value = _cleanDimensionValue(_value);
        "" !== _value &&
          (oCONFIG.PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT = _value);
        break;
      case "palsubagencydim":
        _value = _cleanDimensionValue(_value);
        "" !== _value &&
          (oCONFIG.PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT = _value);
        break;
      case "palversiondim":
        _value = _cleanDimensionValue(_value);
        "" !== _value &&
          (oCONFIG.PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT = _value);
        break;
      case "paltopicdim":
        _value = _cleanDimensionValue(_value);
        "" !== _value &&
          (oCONFIG.PARALLEL_SITE_TOPIC_CUSTOM_DIMENSION_SLOT = _value);
        break;
      case "palplatformdim":
        _value = _cleanDimensionValue(_value);
        "" !== _value &&
          (oCONFIG.PARALLEL_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT = _value);
        break;
      case "palscriptsrcdim":
        _value = _cleanDimensionValue(_value);
        "" !== _value &&
          (oCONFIG.PARALLEL_SCRIPT_SOURCE_URL_CUSTOM_DIMENSION_SLOT = _value);
        break;
      case "palurlprotocoldim":
        _value = _cleanDimensionValue(_value);
        "" !== _value &&
          (oCONFIG.PARALLEL_URL_PROTOCOL_CUSTOM_DIMENSION_SLOT = _value);
        break;
      case "palinteractiontypedim":
        _value = _cleanDimensionValue(_value);
        "" !== _value &&
          (oCONFIG.PARALLEL_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT = _value);
        break;
      case "cto":
        oCONFIG.COOKIE_TIMEOUT = 2628e3 * parseInt(_value);
        break;
      case "sp":
        oCONFIG.SEARCH_PARAMS += "|" + _value.replace(/,/g, "|");
        break;
      case "exts":
        oCONFIG.EXTS += "|" + _value.replace(/,/g, "|");
        break;
      case "yt":
        _value = _cleanBooleanParam(_value);
        if (!0 === _value || !1 === _value) oCONFIG.YOUTUBE = _value;
        break;
      case "autotracker":
        _value = _cleanBooleanParam(_value);
        if (!0 === _value || !1 === _value) oCONFIG.AUTOTRACKER = _value;
        break;
      case "sdor":
        oCONFIG.SUBDOMAIN_BASED = _cleanBooleanParam(_value);
    }
}
function _sendCustomDimensions(a, b) {
  if (0 < a.length && "" !== b && void 0 !== b) {
    tObjectCheck !== window.GoogleAnalyticsObject && createTracker(!1);
    for (var c = 0; c < oCONFIG.GWT_UAID.length; c++)
      if ("dimension0" !== a[c])
        try {
          window[window.GoogleAnalyticsObject](
            oCONFIG.PUA_NAME + c + ".set",
            a[c],
            b
          );
        } catch (d) {}
  }
}
function _sendCustomMetrics(a, b) {
  if (0 < a.length && "" !== b && void 0 !== b) {
    tObjectCheck != window.GoogleAnalyticsObject && createTracker(!1);
    for (var c = 0; c < oCONFIG.GWT_UAID.length; c++)
      if ("metric0" !== a[c])
        try {
          window[window.GoogleAnalyticsObject](
            oCONFIG.PUA_NAME + c + ".set",
            a[c],
            b
          );
        } catch (d) {}
  }
}
function _sendEvent(a, b) {
  !/^(page_view|view_search_results)$/i.test(a) && _mapGA4toUA(a, b);
  for (var c = "", d = 0; d < oCONFIG.GWT_GA4ID.length; d++)
    try {
      c += oCONFIG.GA4_NAME + d + ",";
    } catch (k) {}
  b.send_to = c.replace(/.$/, "");
  b.event_name_dimension = a;
  gtag("event", a, b);
}
function _mapGA4toUA(a, b) {
  var c;
  var d = b.link_url;
  var k = b.event_value ? b.event_value : 0;
  var g = b.non_interaction || !1;
  var l = b.interaction_type;
  switch (a) {
    case "file_download":
      b.outbound ? (c = "Outbound Downloads") : (c = "Download");
      var f = b.file_extension;
      break;
    case "email_click":
      b.outbound ? (c = "Outbound MailTo") : (c = "Mailto");
      f = b.link_url;
      d = "";
      break;
    case "click":
      c = "Outbound";
      f = b.link_domain;
      d = b.link_url.split(b.link_domain)[1];
      break;
    case "telephone_click":
      c = "Telephone Clicks";
      f = b.link_url;
      d = "";
      break;
    case "video_start":
      c = "YouTube Video";
      f = "play";
      d = b.video_url;
      break;
    case "video_play":
      c = "YouTube Video";
      f = "play";
      d = b.video_url;
      break;
    case "video_pause":
      c = "YouTube Video";
      f = "pause";
      d = b.video_url;
      break;
    case "video_progress":
      c = "YouTube Video";
      f =
        0 < b.video_percent && 33 >= b.video_percent
          ? "33%"
          : 33 < b.video_percent && 66 >= b.video_percent
          ? "66%"
          : 66 < b.video_percent && 90 >= b.video_percent
          ? "90%"
          : b.video_percent;
      d = b.video_url;
      break;
    case "video_complete":
      c = "YouTube Video";
      f = "finish";
      d = b.video_url;
      break;
    case "dap_event":
      (c = b.event_category), (f = b.event_action), (d = b.event_label);
  }
  if ("" !== c && void 0 !== c && "" !== f && void 0 !== f)
    for (
      a = oCONFIG.MAIN_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT,
        tObjectCheck !== window.GoogleAnalyticsObject && createTracker(!1),
        b = 0;
      b < oCONFIG.GWT_UAID.length;
      b++
    )
      try {
        0 < b &&
          (!0 === oCONFIG.USE_PARALLEL_CUSTOM_DIMENSIONS
            ? (a = oCONFIG.PARALLEL_INTERACTION_TYPE_CUSTOM_DIMENSION_SLOT)
            : (l = void 0)),
          window[window.GoogleAnalyticsObject](
            oCONFIG.PUA_NAME + b + ".set",
            a,
            l
          ),
          window[window.GoogleAnalyticsObject](
            oCONFIG.PUA_NAME + b + ".send",
            "event",
            c,
            f,
            void 0 !== d ? d : "",
            "" === k && isNaN(k) && void 0 === k ? 0 : parseInt(k),
            { nonInteraction: g }
          );
      } catch (m) {}
}
function _sendPageview(a, b) {
  if ("" !== a && void 0 !== a) {
    a = _URIHandler(_scrubbedURL(a)).split(/[#]/)[0];
    tObjectCheck !== window.GoogleAnalyticsObject && createTracker(!1);
    for (var c = 0; c < oCONFIG.GWT_UAID.length; c++)
      try {
        window[window.GoogleAnalyticsObject](
          oCONFIG.PUA_NAME + c + ".send",
          "pageview",
          {
            page: a.split(location.hostname)[1],
            title: "" !== b || void 0 !== b ? b : document.title,
          }
        );
      } catch (d) {}
    _sendEvent("page_view", {
      page_location: a,
      page_title: "" !== b || void 0 !== b ? b : document.title,
      ignore_referrer: _isExcludedReferrer() ? !0 : !1,
    });
    _sendViewSearchResult(a);
  }
}
function gas(a, b, c, d, k, g, l) {
  if (
    void 0 !== a &&
    "" !== a &&
    void 0 !== b &&
    "" !== b &&
    void 0 !== c &&
    "" !== c
  )
    if ("pageview" === b.toLowerCase())
      try {
        _sendPageview(c, void 0 === d || "" === d ? document.title : d);
      } catch (n) {}
    else if ("event" === b.toLowerCase() && void 0 !== d && "" !== d)
      try {
        var f = !1;
        void 0 !== l &&
          "boolean" === typeof _cleanBooleanParam(l) &&
          (f = _cleanBooleanParam(l));
        _sendEvent("dap_event", {
          event_category: c,
          event_action: d,
          event_label: void 0 === k ? "" : k,
          event_value: void 0 === g || "" === g || isNaN(g) ? 0 : parseInt(g),
          non_interaction: f,
        });
      } catch (n) {}
    else if (-1 != b.toLowerCase().indexOf("dimension"))
      try {
        f = b.toLowerCase().split(",");
        var m = [];
        dimsPattern = /^dimension([1-9]|[1-9][0-9]|1([0-9][0-9])|200)$/;
        for (var p = 0; p < f.length; p++)
          if (dimsPattern.test(f[p])) m.push(f[p]);
          else {
            var h = "dimension" + f[p].match(/\d+$/g)[0];
            (dimsPattern.test(h) || "dimension0" === h) && m.push(h);
          }
        0 < m.length && _sendCustomDimensions(m, void 0 === c ? "" : c);
      } catch (n) {}
    else if (-1 != b.toLowerCase().indexOf("metric"))
      try {
        m = b.toLowerCase().split(",");
        f = [];
        mtrcsPattern = /^metric([1-9]|[1-9][0-9]|1([0-9][0-9])|200)$/;
        for (h = 0; h < m.length; h++)
          mtrcsPattern.test(m[h])
            ? f.push(m[h])
            : ((p = "metric" + m[h].match(/\d+$/g)[0]),
              (mtrcsPattern.test(p) || "metric0" === p) && f.push(p));
        0 < f.length &&
          _sendCustomMetrics(
            f,
            void 0 === c || "" === c || isNaN(c) ? 1 : parseFloat(c)
          );
      } catch (n) {}
}
function _URIHandler(a) {
  var b = new RegExp("([?&])(" + oCONFIG.SEARCH_PARAMS + ")(=[^&]+)", "i");
  b.test(a) && ((a = a.replace(b, "$1query$3")), (isSearch = !0));
  return a;
}
function _sendViewSearchResult(a) {
  isSearch &&
    (_sendEvent("view_search_results", {
      search_term: _URIHandler(a).match(/([?&])(query=)([^&#?]*)/i)[3],
      page_location: _URIHandler(_scrubbedURL(a)),
    }),
    (isSearch = !1));
}
function _isExcludedReferrer() {
  if ("" !== document.referrer) {
    var a = document.referrer
      .replace(/https?:\/\//i, "")
      .split("/")[0]
      .replace(/^www\./i, "");
    return oCONFIG.SUBDOMAIN_BASED
      ? -1 != a.indexOf(oCONFIG.COOKIE_DOMAIN)
        ? !0
        : !1
      : a === oCONFIG.COOKIE_DOMAIN
      ? !0
      : !1;
  }
}
function createTracker(a) {
  for (var b = 0; b < oCONFIG.GWT_UAID.length; b++) {
    var c = _URIHandler(
      _scrubbedURL(
        document.location.pathname +
          document.location.search +
          document.location.hash
      )
    ).split(document.location.hostname)[1];
    window[window.GoogleAnalyticsObject](
      "create",
      oCONFIG.GWT_UAID[b],
      oCONFIG.COOKIE_DOMAIN,
      {
        name: oCONFIG.PUA_NAME + b,
        allowLinker: !0,
        cookieExpires: parseInt(oCONFIG.COOKIE_TIMEOUT),
        cookieFlags: "SameSite=Strict;Secure",
      }
    );
    if (oCONFIG.ANONYMIZE_IP)
      window[window.GoogleAnalyticsObject](
        oCONFIG.PUA_NAME + b + ".set",
        "anonymizeIp",
        oCONFIG.ANONYMIZE_IP
      );
    if (oCONFIG.FORCE_SSL)
      window[window.GoogleAnalyticsObject](
        oCONFIG.PUA_NAME + b + ".set",
        "forceSSL",
        !0
      );
    if (_isExcludedReferrer())
      window[window.GoogleAnalyticsObject](
        oCONFIG.PUA_NAME + b + ".set",
        "referrer",
        ""
      );
    oCONFIG.USE_MAIN_CUSTOM_DIMENSIONS &&
      0 === b &&
      (window[window.GoogleAnalyticsObject](
        oCONFIG.PUA_NAME + b + ".set",
        oCONFIG.MAIN_AGENCY_CUSTOM_DIMENSION_SLOT,
        oCONFIG.AGENCY
      ),
      window[window.GoogleAnalyticsObject](
        oCONFIG.PUA_NAME + b + ".set",
        oCONFIG.MAIN_SUBAGENCY_CUSTOM_DIMENSION_SLOT,
        oCONFIG.SUB_AGENCY
      ),
      window[window.GoogleAnalyticsObject](
        oCONFIG.PUA_NAME + b + ".set",
        oCONFIG.MAIN_CODEVERSION_CUSTOM_DIMENSION_SLOT,
        oCONFIG.VERSION
      ),
      window[window.GoogleAnalyticsObject](
        oCONFIG.PUA_NAME + b + ".set",
        oCONFIG.MAIN_SITE_TOPIC_CUSTOM_DIMENSION_SLOT,
        oCONFIG.SITE_TOPIC
      ),
      window[window.GoogleAnalyticsObject](
        oCONFIG.PUA_NAME + b + ".set",
        oCONFIG.MAIN_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT,
        oCONFIG.SITE_PLATFORM
      ),
      window[window.GoogleAnalyticsObject](
        oCONFIG.PUA_NAME + b + ".set",
        oCONFIG.MAIN_SCRIPT_SOURCE_URL_CUSTOM_DIMENSION_SLOT,
        oCONFIG.SCRIPT_SOURCE
      ),
      window[window.GoogleAnalyticsObject](
        oCONFIG.PUA_NAME + b + ".set",
        oCONFIG.MAIN_URL_PROTOCOL_CUSTOM_DIMENSION_SLOT,
        oCONFIG.URL_PROTOCOL
      ));
    oCONFIG.USE_PARALLEL_CUSTOM_DIMENSIONS &&
      0 < b &&
      (window[window.GoogleAnalyticsObject](
        oCONFIG.PUA_NAME + b + ".set",
        oCONFIG.PARALLEL_AGENCY_CUSTOM_DIMENSION_SLOT,
        oCONFIG.AGENCY
      ),
      window[window.GoogleAnalyticsObject](
        oCONFIG.PUA_NAME + b + ".set",
        oCONFIG.PARALLEL_SUBAGENCY_CUSTOM_DIMENSION_SLOT,
        oCONFIG.SUB_AGENCY
      ),
      window[window.GoogleAnalyticsObject](
        oCONFIG.PUA_NAME + b + ".set",
        oCONFIG.PARALLEL_CODEVERSION_CUSTOM_DIMENSION_SLOT,
        oCONFIG.VERSION
      ),
      window[window.GoogleAnalyticsObject](
        oCONFIG.PUA_NAME + b + ".set",
        oCONFIG.PARALLEL_SITE_TOPIC_CUSTOM_DIMENSION_SLOT,
        oCONFIG.SITE_TOPIC
      ),
      window[window.GoogleAnalyticsObject](
        oCONFIG.PUA_NAME + b + ".set",
        oCONFIG.PARALLEL_SITE_PLATFORM_CUSTOM_DIMENSION_SLOT,
        oCONFIG.SITE_PLATFORM
      ),
      window[window.GoogleAnalyticsObject](
        oCONFIG.PUA_NAME + b + ".set",
        oCONFIG.PARALLEL_SCRIPT_SOURCE_URL_CUSTOM_DIMENSION_SLOT,
        oCONFIG.SCRIPT_SOURCE
      ),
      window[window.GoogleAnalyticsObject](
        oCONFIG.PUA_NAME + b + ".set",
        oCONFIG.PARALLEL_URL_PROTOCOL_CUSTOM_DIMENSION_SLOT,
        oCONFIG.URL_PROTOCOL
      ));
    -1 !== document.title.search(/404|not found/i) &&
      (c =
        ("/vpv404/" + c).replace(/\/\//g, "/") +
        (document.referrer ? "/" + document.referrer : document.referrer));
    if (a)
      window[window.GoogleAnalyticsObject](
        oCONFIG.PUA_NAME + b + ".send",
        "pageview",
        c
      );
  }
  b =
    -1 !== document.title.search(/404|not found/gi)
      ? document.location.protocol + "//" + document.location.hostname + c
      : document.location.href;
  a = _URIHandler(_scrubbedURL(b));
  for (b = 0; b < oCONFIG.GWT_GA4ID.length; b++)
    0 === b || (0 < b && oCONFIG.USE_PARALLEL_CUSTOM_DIMENSIONS)
      ? gtag("config", oCONFIG.GWT_GA4ID[b], {
          groups: oCONFIG.GA4_NAME + b,
          cookie_expires: parseInt(oCONFIG.COOKIE_TIMEOUT),
          page_location: a,
          ignore_referrer: _isExcludedReferrer() ? !0 : !1,
          agency: oCONFIG.AGENCY.toUpperCase(),
          subagency: oCONFIG.SUB_AGENCY.toUpperCase(),
          site_topic: oCONFIG.SITE_TOPIC.toLowerCase(),
          site_platform: oCONFIG.SITE_PLATFORM.toLowerCase(),
          script_source: oCONFIG.SCRIPT_SOURCE.toLowerCase(),
          version: oCONFIG.VERSION.toLowerCase(),
          protocol: oCONFIG.URL_PROTOCOL,
        })
      : gtag("config", oCONFIG.GWT_GA4ID[b], {
          groups: oCONFIG.GA4_NAME + b,
          cookie_expires: parseInt(oCONFIG.COOKIE_TIMEOUT),
          page_location: a,
          ignore_referrer: _isExcludedReferrer() ? !0 : !1,
        });
}
function _initAutoTracker() {
  var a = function (a) {
      a = a.href
        .toLowerCase()
        .replace(/[#?&].*/, "")
        .split(a.hostname)[1]
        .split(".");
      a = a[a.length - 1];
      return null != a.match(new RegExp("^(" + oCONFIG.EXTS + ")$")) ? a : !1;
    },
    b = function (a) {
      try {
        var b = JSON.stringify(a);
        return JSON.parse(b.toLowerCase());
      } catch (g) {}
    },
    c = function (c) {
      try {
        if (
          "mousedown" === c.type ||
          ("keydown" === c.type && 13 === c.keyCode)
        )
          if ("A" === c.target.nodeName || null !== c.target.closest("a")) {
            var d = oCONFIG.COOKIE_DOMAIN,
              g = "",
              l = "",
              f = "",
              m = /^mailto:[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/i,
              p =
                /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/i,
              h = "",
              n = "",
              q = {},
              r = /^(tel:)(.*)$/i,
              e = c.target.closest("a");
            "mousedown" === c.type
              ? (n = "Mouse Click")
              : "keydown" === c.type &&
                13 === c.keyCode &&
                (n = "Enter Key Keystroke");
            if (m.test(e.href) || p.test(e.href) || r.test(e.href))
              try {
                p.test(e.href)
                  ? ((f = e.hostname.toLowerCase().replace(/^www\./i, "")),
                    (h = "l"))
                  : m.test(e.href)
                  ? ((f = e.href.split("@")[1].toLowerCase()), (h = "m"))
                  : r.test(e.href) &&
                    ((f = e.href), (f = f.toLowerCase()), (h = "t"));
              } catch (t) {}
            (oCONFIG.SUBDOMAIN_BASED ? -1 !== f.indexOf(d) : f === d)
              ? "m" === h
                ? ((g = e.href.match(
                    /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/
                  )),
                  (q = {
                    link_id: e.id,
                    link_url: g[0],
                    link_domain: g[0].split("@")[1],
                    link_text: e.text.replace(/(?:[\r\n]+)+/g, "").trim(),
                    link_classes: e.className,
                    interaction_type: n,
                  }),
                  _sendEvent("email_click", b(q)))
                : "l" === h && a(e)
                ? ((g = e.pathname.split(/[#?&?]/)[0]),
                  (l = a(e)),
                  (q = {
                    file_name: g,
                    file_extension: l,
                    link_text: e.text.replace(/(?:[\r\n]+)+/g, "").trim(),
                    link_id: e.id,
                    link_url: e.href.replace(/[#?&].*/, ""),
                    link_domain: e.hostname.replace(/^www\./i, ""),
                    interaction_type: n,
                  }),
                  _sendEvent("file_download", b(q)))
                : "l" !== h || a(e)
              : "l" === h && a(e)
              ? ((g = e.pathname.split(/[#?&?]/)[0]),
                (l = a(e)),
                (q = {
                  file_name: g,
                  file_extension: l,
                  link_text: e.text.replace(/(?:[\r\n]+)+/g, "").trim(),
                  link_id: e.id,
                  link_url: e.href.replace(/[#?&].*/, ""),
                  link_domain: e.hostname.replace(/^www\./i, ""),
                  outbound: !0,
                  interaction_type: n,
                }),
                _sendEvent("file_download", b(q)))
              : "l" !== h || a(e)
              ? "m" === h
                ? ((g = e.href.match(
                    /[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/
                  )),
                  (q = {
                    link_id: e.id,
                    link_url: g[0],
                    link_domain: g[0].split("@")[1],
                    link_text: e.text.replace(/(?:[\r\n]+)+/g, "").trim(),
                    link_classes: e.className,
                    outbound: !0,
                    interaction_type: n,
                  }),
                  _sendEvent("email_click", b(q)))
                : "t" === h &&
                  ((q = {
                    link_id: e.id,
                    link_url: e.href.split("tel:")[1],
                    link_text: e.text.replace(/(?:[\r\n]+)+/g, "").trim(),
                    link_classes: e.className,
                    interaction_type: n,
                  }),
                  _sendEvent("telephone_click", b(q)))
              : ((q = {
                  link_id: e.id,
                  link_url: e.href.replace(/[#?&].*/, ""),
                  link_domain: e.hostname.replace(/^www\./i, ""),
                  link_text: e.text.replace(/(?:[\r\n]+)+/g, "").trim(),
                  link_classes: e.className,
                  outbound: !0,
                  interaction_type: n,
                }),
                _sendEvent("click", b(q)));
          }
      } catch (t) {}
    };
  document.addEventListener
    ? document.addEventListener("mousedown", c, !1)
    : document.attachEvent && document.attachEvent("onmousedown", c);
  document.addEventListener
    ? document.addEventListener("keydown", c, !1)
    : document.attachEvent && document.attachEvent("onkeydown", c);
}
if (oCONFIG.YOUTUBE) {
  var videoArray_fed = [],
    playerArray_fed = [],
    _f33 = !1,
    _f66 = !1,
    _f90 = !1,
    tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var youtube_parser_fed = function (a) {
      if (
        (a = a.match(
          /^(https?:)?(\/\/)?(www\.)?(youtu\.be\/|youtube(\-nocookie)?\.([A-Za-z]{2,4}|[A-Za-z]{2,3}\.[A-Za-z]{2})\/)(watch|embed\/|vi?\/)?(\?vi?=)?([^#&\?\/]{11}).*$/
        )) &&
        11 === a[9].length
      )
        return a[9];
    },
    IsYouTube_fed = function (a) {
      return /^(https?:)?(\/\/)?(www\.)?(youtu\.be\/|youtube(\-nocookie)?\.([A-Za-z]{2,4}|[A-Za-z]{2,3}\.[A-Za-z]{2})\/)(watch|embed\/|vi?\/)?(\?vi?=)?([^#&\?\/]{11}).*$/.test(
        a.toString()
      )
        ? !0
        : !1;
    },
    YTUrlHandler_fed = function (a) {
      a = a.replace(
        /origin=(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})&?/gi,
        "origin=" + document.location.protocol + "//" + document.location.host
      );
      stAdd = "";
      adFlag = !1;
      -1 === a.indexOf("https") && (a = a.replace("http", "https"));
      -1 === a.indexOf("?") && (stAdd = "?flag=1");
      -1 === a.indexOf("enablejsapi") &&
        ((stAdd += "&enablejsapi=1"), (adFlag = !0));
      -1 === a.indexOf("html5") && ((stAdd += "&html5=1"), (adFlag = !0));
      -1 === a.indexOf("origin") &&
        ((stAdd +=
          "&origin=" +
          document.location.protocol +
          "//" +
          document.location.host),
        (adFlag = !0));
      return !0 === adFlag ? a + stAdd : a;
    },
    _initYouTubeTracker = function () {
      for (
        var a = document.getElementsByTagName("iframe"), b = 0, c = 0;
        c < a.length;
        c++
      ) {
        _thisVideoObj = a[c];
        var d = _thisVideoObj.src;
        IsYouTube_fed(d) &&
          ((_thisVideoObj.src = YTUrlHandler_fed(d)),
          (d = youtube_parser_fed(d)),
          _thisVideoObj.setAttribute("id", d),
          (videoArray_fed[b] = d),
          b++);
      }
    },
    onYouTubePlayerAPIReady = function () {
      for (var a = 0; a < videoArray_fed.length; a++)
        playerArray_fed[a] = new YT.Player(videoArray_fed[a], {
          events: {
            onReady: onFedPlayerReady,
            onStateChange: onFedPlayerStateChange,
          },
        });
    },
    onFedPlayerReady = function (a) {},
    onFedPlayerStateChange = function (a) {
      var b = a.target.getIframe().getAttribute("src");
      _thisDuration = (
        (parseInt(a.target.getCurrentTime()) /
          parseInt(a.target.getDuration())) *
        100
      ).toFixed();
      var c = {
        video_current_time: Math.round(a.target.getCurrentTime()),
        video_duration: Math.round(a.target.getDuration()),
        video_percent: this.video_percent || Math.round(+_thisDuration),
        video_provider: "youtube",
        video_title: a.target.getVideoData().title,
        video_url: b.split("?")[0],
      };
      youtube_parser_fed(b);
      "undefined" !== typeof onPlayerStateChange && onPlayerStateChange(a);
      parseInt(a.data) === parseInt(YT.PlayerState.PLAYING)
        ? 0 == Math.floor(+_thisDuration)
          ? ((_f90 = _f66 = _f33 = !1), _sendEvent("video_start", c))
          : _sendEvent("video_play", c)
        : a.data === YT.PlayerState.ENDED
        ? _sendEvent("video_complete", c)
        : a.data === YT.PlayerState.PAUSED &&
          (_sendEvent("video_pause", c),
          100 > _thisDuration &&
            ((a = _thisDuration),
            0 < a && 33 >= a && !1 === _f33
              ? ((c.video_percent = 33),
                _sendEvent("video_progress", c),
                (c.video_percent = void 0),
                (_f33 = !0))
              : 33 < a && 66 >= a && !1 === _f66
              ? ((c.video_percent = 66),
                _sendEvent("video_progress", c),
                (c.video_percent = void 0),
                (_f66 = !0))
              : 66 < a &&
                90 >= a &&
                !1 === _f90 &&
                ((c.video_percent = 90),
                _sendEvent("video_progress", c),
                (c.video_percent = void 0),
                (_f90 = !0))));
    };
}
function _initIdAssigner() {
  for (var a = document.getElementsByTagName("a"), b = 0; b < a.length; b++) {
    var c = a[b].getAttribute("id");
    (null !== c && "" !== c && void 0 !== c) ||
      a[b].setAttribute("id", "anch_" + b);
  }
}
function _scrubbedURL(a) {
  RegExp.escape = function (a) {
    return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  };
  var b = "";
  a = new RegExp(
    "^(https?:\\/\\/(www\\.)?)?" +
      RegExp.escape(document.location.hostname.replace(/^www\\./, "")),
    "ig"
  ).test(a)
    ? a
    : document.location.protocol + "//" + document.location.hostname + a;
  var c = a.split("?")[0];
  return 1 < a.split("?").length
    ? (a
        .split("?")[1]
        .split("&")
        .forEach(function (a, c) {
          -1 < _allowedQuerystrings.indexOf(a.split("=")[0]) &&
            (b = b + "&" + a);
        }),
      0 < b.length ? c + "?" + b.substring(1) : c)
    : c;
}
function _setAllowedQS() {
  var a = {
    default:
      "utm_id utm_source utm_medium utm_campaign utm_term utm_content _gl gclid dclid gclsrc affiliate dap-dev-env".split(
        " "
      ),
    gsa: ["challenge", "state"],
    dhs: ["appreceiptnum"],
    doc: "station meas start atlc epac cpac basin fdays cone tswind120 gm_track 50wind120 hwind120 mltoa34 swath radii wsurge key_messages inundation rainqpf ero gage wfo spanish_key_messages key_messages sid lan office pil".split(
      " "
    ),
    hhs: ["s_cid", "selectedFacets"],
    hud: ["PostID"],
    nasa: ["feature", "ProductID", "selectedFacets"],
    nps: ["gid", "mapid", "site", "webcam", "id"],
    nsf: "meas start atlc epac cpac basin fdays cone tswind120 gm_track 50wind120 hwind120 mltoa34 swath radii wsurge key_messages inundation rainqpf ero gage wfo spanish_key_messages key_messages sid".split(
      " "
    ),
    va: ["id"],
  };
  _allowedQuerystrings = a.default
    .concat(a[oCONFIG.AGENCY.toLowerCase()])
    .concat(oCONFIG.SEARCH_PARAMS.split("|"));
}
function _setUpTrackers() {
  tObjectCheck !== window.GoogleAnalyticsObject && createTracker(!1);
  oCONFIG.ENHANCED_LINK ? _initIdAssigner() : "";
  oCONFIG.AUTOTRACKER ? _initAutoTracker() : "";
  oCONFIG.YOUTUBE ? _initYouTubeTracker() : "";
}
function _setUpTrackersIfReady() {
  return "interactive" === document.readyState ||
    "complete" === document.readyState
    ? (_setUpTrackers(), !0)
    : !1;
}
_setUpTrackersIfReady() ||
  (document.addEventListener
    ? document.addEventListener("DOMContentLoaded", _setUpTrackers)
    : document.attachEvent &&
      document.attachEvent("onreadystatechange", _setUpTrackersIfReady));
//# sourceMappingURL=Federated.js.map
