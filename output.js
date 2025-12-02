//Tue Dec 02 2025 03:31:11 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const querystring = require("querystring"),
  axios = require("axios"),
  fs = require("fs"),
  path = require("path"),
  {
    "SocksProxyAgent": SocksProxyAgent
  } = require("socks-proxy-agent");
function detectLiveAd(adData = {}) {
  try {
    let _0xdf43b = adData.adExtInfo || adData.extInfo || adData?.ad?.adExtInfo || "{}";
    if (typeof _0xdf43b === "gnirts".split("").reverse().join("")) {
      try {
        _0xdf43b = JSON.parse(_0xdf43b);
      } catch (error) {
        _0xdf43b = {};
      }
    }
    const _0xb68g = ["播直".split("").reverse().join(""), "live", "主播", "EVIL".split("").reverse().join(""), "zb", "BZ".split("").reverse().join("")],
      _0xb6eced = String(adData.creativeId || adData?.ad?.creativeId || "").toLowerCase(),
      _0x70c6d = String(_0xdf43b.description || "").toLowerCase(),
      _0x90755c = String(_0xdf43b.title || adData.title || "").toLowerCase(),
      _0x008a = String(_0xdf43b.caption || adData.caption || "").toLowerCase(),
      _0x659c = [_0xb6eced, _0x70c6d, _0x90755c, _0x008a, JSON.stringify(_0xdf43b || {})];
    for (const _0x27ad of _0x659c) {
      for (const _0xb8d of _0xb68g) {
        if (_0x27ad && _0x27ad.includes(_0xb8d.toLowerCase())) {
          return true;
        }
      }
    }
    var _0xc94a;
    const _0x0f5e = adData.materialTime || adData?.ad?.materialTime || 0;
    _0xc94a = 3;
    if (_0x0f5e > 60000) return true;
    if (_0xb6eced.startsWith("live_") || _0xb6eced.startsWith("zb_") || _0xb6eced.startsWith("live-") || _0xb6eced.startsWith("zb-")) return true;
    return false;
  } catch (error) {
    return false;
  }
}
function readIntConfig(configName, defaultValue) {
  var _0x3cf9f = 15;
  const _0x8cbb = parseInt(process.env[configName], 10);
  _0x3cf9f = 9;
  return isNaN(_0x8cbb) ? defaultValue : _0x8cbb;
}
function readStringConfig(configName, defaultValue) {
  const _0x4g_0x531 = process.env[configName];
  return _0x4g_0x531 ? _0x4g_0x531.trim() : defaultValue;
}
function readRangeConfig(configName, minDefault, maxDefault) {
  const _0x3c5gd = process.env[configName];
  if (!_0x3c5gd) return [minDefault, maxDefault];
  const _0x633d = _0x3c5gd.includes("-") ? "-" : ",";
  const _0xa2g9e = _0x3c5gd.split(_0x633d).map(item => item.trim()).filter(Boolean);
  if (_0xa2g9e.length === 2) {
    var _0x_0x4a2 = 4;
    const _0x5476c = parseInt(_0xa2g9e[0], 10);
    _0x_0x4a2 = 4;
    const _0x95gcf = parseInt(_0xa2g9e[1], 10);
    if (!isNaN(_0x5476c) && !isNaN(_0x95gcf) && _0x5476c <= _0x95gcf) {
      return [_0x5476c, _0x95gcf];
    }
  }
  return [minDefault, maxDefault];
}
const COIN_LIMIT = readIntConfig("KSCOIN_LIMIT", 500000),
  LOW_REWARD_THRESHOLD = readIntConfig("KSLOW_REWARD_THRESHOLD", 10),
  LOW_REWARD_LIMIT = readIntConfig("TIMIL_DRAWER_WOLSK".split("").reverse().join(""), 3),
  LOOK_COUNT = readIntConfig("KSLOOK_COUNT", 50),
  FOLLOW_COUNT = readIntConfig("KSFOLLOW_COUNT", 5),
  SEARCH_COUNT = readIntConfig("TNUOC_HCRAESSK".split("").reverse().join(""), 5),
  SEARCH_FOLLOW_COUNT = readIntConfig("KSSEARCHFOLLOW_COUNT", 2),
  BOX_COUNT = readIntConfig("KSBOX_COUNT", 30),
  FOOD_COUNT = readIntConfig("KSFOOD_COUNT", 50),
  KBOX_COUNT = readIntConfig("KSKBOX_COUNT", 1);
const [ROUND_START_MIN, ROUND_START_MAX] = readRangeConfig("KSROUND_START_WAIT", 7, 15);
const [WATCH_AD_MIN, WATCH_AD_MAX] = readRangeConfig("EMIT_DA_HCTAWSK".split("").reverse().join(""), 30, 40);
const [PRE_LOOK_FOLLOW_MIN, PRE_LOOK_FOLLOW_MAX] = readRangeConfig("KSPRE_LOOK_FOLLOW_WAIT", 15, 30);
const [BETWEEN_LOOK_FOLLOW_MIN, BETWEEN_LOOK_FOLLOW_MAX] = readRangeConfig("KSBETWEEN_LOOK_FOLLOW_WAIT", 35, 50);
const [PRE_SEARCH_FOLLOW_MIN, PRE_SEARCH_FOLLOW_MAX] = readRangeConfig("KSPRE_SEARCH_FOLLOW_WAIT", 15, 30);
const [BETWEEN_SEARCH_FOLLOW_MIN, BETWEEN_SEARCH_FOLLOW_MAX] = readRangeConfig("KSBETWEEN_SEARCH_FOLLOW_WAIT", 15, 30);
const [ROUND_END_MIN, ROUND_END_MAX] = readRangeConfig("KSROUND_END_WAIT", 10, 20);
const [TASK_SWITCH_MIN, TASK_SWITCH_MAX] = readRangeConfig("TIAW_HCTIWS_KSATSK".split("").reverse().join(""), 15, 30);
const MAX_CONCURRENCY = readIntConfig("MAX_CONCURRENCY", 888);
var _0x3938a = 7;
const SCRIPT_VERSION = "eerf-8v".split("").reverse().join("");
_0x3938a = 10;
const DEVICE_ID_FILE = ".device_id.txt";
var _0x4f408f;
const SKIP_LIVE_ADS = ["1", "true", "yes", "on"].includes(readStringConfig("SDA_EVIL_PIKS".split("").reverse().join(""), "1").toLowerCase());
_0x4f408f = 5;
var _0x71b = 15;
const SKIP_LIVE_MAX_RETRIES = Math.max(1, readIntConfig("SEIRTER_XAM_EVIL_PIKS".split("").reverse().join(""), 5));
_0x71b = 0;
var _0x9ff = 10;
const ENABLE_CHANGE_DID = ["1", "eurt".split("").reverse().join(""), "yes", "on"].includes(readStringConfig("DID_EGNAHC_ELBANE".split("").reverse().join(""), "0").toLowerCase());
_0x9ff = 2;
function getTasksToExecute() {
  var _0x20fa6a;
  const _0xcf6e = process.env.Task;
  _0x20fa6a = "nngfka";
  if (!_0xcf6e) return ["look", "box", "food", "kbox", "search", "wollof_kool".split("").reverse().join(""), "search_follow"];
  var _0x3baafb = 17;
  const _0x712d = _0xcf6e.split(",").map(task => task.trim().toLowerCase()).filter(Boolean);
  _0x3baafb = 6;
  var _0x621cf = 12;
  const _0xb385f = ["look", "box", "food", "kbox", "search", "look_follow", "search_follow"];
  _0x621cf = "mhnipg";
  const _0x53ca9f = _0x712d.filter(task => _0xb385f.includes(task));
  return _0x53ca9f.length === 0 ? ["kool".split("").reverse().join(""), "box", "doof".split("").reverse().join(""), "kbox", "hcraes".split("").reverse().join(""), "wollof_kool".split("").reverse().join(""), "search_follow"] : _0x53ca9f;
}
function parseAccountsFromEnv() {
  const _0x8c43bc = [];
  const _0x10_0x251 = new Set();
  if (process.env.ksck) {
    const _0xf4f3c = process.env.ksck.split("&").map(cookie => cookie.trim()).filter(Boolean);
    _0x8c43bc.push(..._0xf4f3c);
  }
  for (let i = 1; i <= 666; i++) {
    const _0x2b9ae = "ksck" + i;
    if (process.env[_0x2b9ae]) {
      const _0x6f8f = process.env[_0x2b9ae].split("&").map(cookie => cookie.trim()).filter(Boolean);
      _0x8c43bc.push(..._0x6f8f);
    }
  }
  const _0x3d6dab = [];
  for (const _0xc78d of _0x8c43bc) {
    if (!_0x10_0x251.has(_0xc78d)) {
      _0x10_0x251.add(_0xc78d);
      _0x3d6dab.push(_0xc78d);
    }
  }
  return _0x3d6dab;
}
var _0x76g16c = 2;
const accounts = parseAccountsFromEnv();
_0x76g16c = 9;
var _0xabbe;
const accountCount = accounts.length;
_0xabbe = 3;
var _0xaa1c9d = 13;
const tasksToExecute = getTasksToExecute();
_0xaa1c9d = 1;
function generateDeviceId() {
  try {
    const _0xccae8a = length => {
      const _0xcd6ge = "0123456789abcdef";
      let _0x75ef = "";
      for (let i = 0; i < length; i++) {
        _0x75ef += _0xcd6ge.charAt(Math.floor(Math.random() * _0xcd6ge.length));
      }
      return _0x75ef;
    };
    var _0x2_0xbb8 = 7;
    const _0x11_0xb31 = _0xccae8a(16);
    _0x2_0xbb8 = "pnohmn".split("").reverse().join("");
    return "_DIORDNA".split("").reverse().join("") + _0x11_0xb31;
  } catch (error) {
    console.log("生成设备ID失败: " + error.message);
    var _0xad5a6d;
    const _0xb246c = Date.now().toString(16).toUpperCase();
    _0xad5a6d = "njhkcg";
    return "ANDROID_" + _0xb246c.substring(0, 16);
  }
}
function getOrCreateDeviceId() {
  try {
    if (fs.existsSync(DEVICE_ID_FILE)) {
      var _0xbg1e4e;
      const _0xd6ad2e = fs.readFileSync(DEVICE_ID_FILE, "8ftu".split("").reverse().join("")).trim();
      _0xbg1e4e = 14;
      if (_0xd6ad2e && _0xd6ad2e.length === 32) {
        return _0xd6ad2e;
      } else {
        if (_0xd6ad2e && _0xd6ad2e.length > 0) {
          try {
            fs.unlinkSync(DEVICE_ID_FILE);
          } catch (error) {}
        }
      }
    }
    const chars = "0123456789abcdef";
    const _0xf5dge = () => {
      var _0x235g = 14;
      let _0x6d5da = "";
      _0x235g = "eljfme";
      for (let i = 0; i < 32; i++) {
        _0x6d5da += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return _0x6d5da;
    };
    var _0x80f8g = 0;
    const _0xc30da = _0xf5dge();
    _0x80f8g = 11;
    try {
      fs.writeFileSync(DEVICE_ID_FILE, _0xc30da, "utf8");
    } catch (error) {
      console.log("保存设备ID失败: " + error.message);
    }
    return _0xc30da;
  } catch (error) {
    console.log(" :败失DI备设取读".split("").reverse().join("") + error.message);
    var _0x5f8f9g;
    const chars = "0123456789abcdef";
    _0x5f8f9g = 7;
    var _0x1a_0x9b5 = 7;
    let _0x5g18b = "";
    _0x1a_0x9b5 = 9;
    for (let i = 0; i < 32; i++) {
      _0x5g18b += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return _0x5g18b;
  }
}
async function sendRequest(requestConfig, proxyUrl = null, requestDescription = "求请知未".split("").reverse().join("")) {
  const _0xbec24a = {
    ...requestConfig
  };
  let _0xba6c3f = null;
  if (proxyUrl) {
    try {
      _0xba6c3f = new SocksProxyAgent(proxyUrl);
    } catch (error) {
      console.log("[错误] " + requestDescription + " 代理URL无效(" + error.message + "式模连直试尝，)".split("").reverse().join(""));
    }
  }
  var _0x3_0x895;
  const _0xab441f = _0xbec24a.method || "TEG".split("").reverse().join("");
  _0x3_0x895 = 11;
  var _0x4_0xff5 = 14;
  const _0x5721f = _0xbec24a.url;
  _0x4_0xff5 = 7;
  const _0xb376bf = _0xbec24a.headers || {};
  const _0xafa1a = _0xbec24a.body || _0xbec24a.form;
  try {
    var _0xe837f = 4;
    const _0xde_0x75a = Date.now();
    _0xe837f = 6;
    const _0xf898d = {
      "method": _0xab441f,
      "url": _0x5721f,
      "headers": _0xb376bf,
      "data": _0xafa1a,
      "timeout": _0xbec24a.timeout || 30000,
      "startTime": _0xde_0x75a,
      ...(_0xba6c3f && {
        "httpAgent": _0xba6c3f,
        "httpsAgent": _0xba6c3f
      })
    };
    const _0xe2fca = await axios(_0xf898d);
    var _0xbd_0xf35;
    const responseTime = Date.now() - _0xde_0x75a;
    _0xbd_0xf35 = 1;
    return {
      "response": _0xe2fca,
      "body": _0xe2fca.data
    };
  } catch (error) {
    var _0xf326bf;
    const responseTime = error.config?.startTime ? Date.now() - error.config.startTime : 0;
    _0xf326bf = 3;
    if (error.response) {
      var _0x4d5f0a = 1;
      const _0xa1c = error.response.data || null;
      _0x4d5f0a = 3;
      return {
        "response": error.response,
        "body": _0xa1c
      };
    } else if (error.request) {} else {}
    return {
      "response": null,
      "body": null
    };
  }
}
function isValidIP(ip) {
  if (!ip || typeof ip !== "gnirts".split("").reverse().join("")) return false;
  if (ip.includes(">lmth<".split("").reverse().join("")) || ip.includes("503 Service Temporarily Unavailable") || ip.includes("yawetaG daB 205".split("").reverse().join("")) || ip.includes("504 Gateway Timeout")) {
    return false;
  }
  var _0x855d7e;
  const _0x69d9c = new RegExp("$}3,1{d\\}3{).\\}3,1{d\\(^".split("").reverse().join(""), "");
  _0x855d7e = 14;
  var _0x576ccb;
  const _0xcd5e = new RegExp("^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$", "");
  _0x576ccb = "nhfjmd";
  if (_0x69d9c.test(ip)) {
    var _0xd88f7d = 7;
    const _0x5df = ip.split(".");
    _0xd88f7d = "hamjfm".split("").reverse().join("");
    for (const _0xe84e9a of _0x5df) {
      const _0xgfbb9c = parseInt(_0xe84e9a, 10);
      if (_0xgfbb9c < 0 || _0xgfbb9c > 255 || isNaN(_0xgfbb9c)) return false;
    }
    return true;
  }
  return _0xcd5e.test(ip);
}
async function testProxyConnectivity(proxyUrl, testDescription = "代理连通性检测", maxRetries = 10) {
  if (!proxyUrl) {
    return {
      "ok": true,
      "msg": "✅ 未配置代理（直连模式）",
      "ip": "localhost"
    };
  }
  var _0x1f21de;
  let _0x2f69e = null;
  _0x1f21de = 11;
  const _0x1fd3ca = ["https://httpbin.org/ip", "https://api.ipify.org?format=json", "moc.pinosj//:sptth".split("").reverse().join(""), "https://api.my-ip.io/ip.json"];
  for (let _0x4fc18d = 1; _0x4fc18d <= maxRetries; _0x4fc18d++) {
    for (const _0x7651g of _0x1fd3ca) {
      try {
        const {
          "response": response,
          "body": body
        } = await sendRequest({
          "method": "GET",
          "url": _0x7651g,
          "headers": {
            "User-Agent": "ProxyTester/1.0"
          },
          "timeout": 15000
        }, proxyUrl, testDescription + " → " + new URL(_0x7651g).hostname);
        if (typeof body === "string" && (body.includes("<html>") || body.includes("503 Service Temporarily Unavailable") || body.includes("502 Bad Gateway") || body.includes("504 Gateway Timeout"))) {
          continue;
        }
        if (body) {
          let _0x46a9aa = null;
          if (_0x7651g.includes("httpbin.org") && body.origin) {
            _0x46a9aa = body.origin;
          } else if (_0x7651g.includes("ipify.org") && body.ip) {
            _0x46a9aa = body.ip;
          } else if (_0x7651g.includes("jsonip.com") && body.ip) {
            _0x46a9aa = body.ip;
          } else if (_0x7651g.includes("oi.pi-ym".split("").reverse().join("")) && body.ip) {
            _0x46a9aa = body.ip;
          } else if (typeof body === "gnirts".split("").reverse().join("") && !body.includes("<")) {
            _0x46a9aa = body.trim();
          }
          if (_0x46a9aa && isValidIP(_0x46a9aa)) {
            return {
              "ok": true,
              "msg": " :PI口出，常正理代5SKCOS ✅".split("").reverse().join("") + _0x46a9aa,
              "ip": _0x46a9aa
            };
          }
        }
      } catch (error) {
        _0x2f69e = error;
        continue;
      }
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    if (_0x4fc18d < maxRetries) {
      var _0x5_0xg65 = 7;
      const _0xf8f8ed = _0x4fc18d * 2000;
      _0x5_0xg65 = 9;
      await new Promise(resolve => setTimeout(resolve, _0xf8f8ed));
    }
  }
  try {
    new URL(proxyUrl);
  } catch (error) {
    return {
      "ok": false,
      "msg": "❌ 代理URL格式错误: " + error.message,
      "ip": null
    };
  }
  return {
    "ok": false,
    "msg": "❌ 代理测试失败: " + (_0x2f69e?.message || "所有测试端点均无法访问"),
    "ip": null
  };
}
const usedProxyIPs = new Set();
async function getAccountBasicInfo(cookie, proxyUrl, accountIdentifier = "?") {
  var _0x5b5ebb;
  const _0x87066a = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first";
  _0x5b5ebb = "nefgmm";
  const {
    "body": responseData
  } = await sendRequest({
    "method": "GET",
    "url": _0x87066a,
    "headers": {
      "Host": "nebula.kuaishou.com",
      "User-Agent": "kwai-android aegon/3.56.0",
      "Cookie": cookie,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    "timeout": 8000
  }, proxyUrl, "账号[" + accountIdentifier + "] 获取基本信息");
  if (responseData && responseData.result === 1 && responseData.data) {
    let _0x1b2ff = null;
    if (responseData.data.userData) {
      _0x1b2ff = responseData.data.userData.ud || responseData.data.userData.userId || responseData.data.userData.user_id || responseData.data.userData.id || null;
    }
    if (!_0x1b2ff) {
      _0x1b2ff = responseData.data.ud || responseData.data.userId || responseData.data.user_id || null;
    }
    return {
      "nickname": responseData.data.userData?.nickname || null,
      "totalCoin": responseData.data.totalCoin ?? null,
      "allCash": responseData.data.allCash ?? null,
      "ud": _0x1b2ff
    };
  }
  return null;
}
const forceColor = String(process.env.FORCE_COLOR || "").toLowerCase();
const noColor = String(process.env.NO_COLOR || "").toLowerCase() === "1";
const enableColors = !noColor && forceColor !== "0";
var _0xb94fe = 14;
const colors = enableColors ? {
  "reset": "[0m",
  "bright": "[1m",
  "dim": "[2m",
  "red": "[31m",
  "green": "[32m",
  "yellow": "[33m",
  "blue": "[34m",
  "magenta": "[35m",
  "cyan": "[36m",
  "white": "[37m"
} : {
  "reset": "",
  "bright": "",
  "dim": "",
  "red": "",
  "green": "",
  "yellow": "",
  "blue": "",
  "magenta": "",
  "cyan": "",
  "white": ""
};
_0xb94fe = 6;
function colorText(text, colorCode) {
  if (!enableColors || !colorCode) {
    return String(text);
  }
  return colorCode + text + colors.reset;
}
function formatTag(text) {
  return colorText("[" + text + "]", colors.bright + colors.cyan);
}
function formatSuccess(text) {
  return colorText("[" + text + "]", colors.bright + colors.green);
}
function formatWarning(text) {
  return colorText("[" + text + "]", colors.bright + colors.yellow);
}
function centerText(text, width) {
  text = String(text);
  if (text.length >= width) return text.substring(0, width);
  var _0xeceg = 1;
  const _0xadce8f = width - text.length;
  _0xeceg = 9;
  var _0x3d78c = 6;
  const _0x6abbgc = Math.floor(_0xadce8f / 2);
  _0x3d78c = 2;
  var _0x156g;
  const _0xda5ag = _0xadce8f - _0x6abbgc;
  _0x156g = 6;
  return " ".repeat(_0x6abbgc) + text + " ".repeat(_0xda5ag);
}
class KuaishouAccount {
  constructor({
    "index": index,
    "salt": salt,
    "cookie": cookie,
    "nickname": nickname = "",
    "proxyUrl": proxyUrl = null,
    "tasksToExecute": tasksToExecute = ["look"],
    "remark": remark = "",
    "udFromLogin": udFromLogin = null
  }) {
    this.index = index;
    this.salt = salt;
    this.cookie = cookie;
    this.nickname = nickname || remark || "号账".split("").reverse().join("") + index;
    this.remark = remark;
    this.proxyUrl = proxyUrl;
    this.coinLimit = COIN_LIMIT;
    this.coinExceeded = false;
    this.tasksToExecute = tasksToExecute;
    this.adAdditionalNum = 0;
    this.extractCookieInfo();
    if (udFromLogin && udFromLogin.trim()) {
      var _0xc92cdg;
      const ud = String(udFromLogin).trim();
      _0xc92cdg = 12;
      if (ud) {
        this.userId = ud;
      }
    }
    this.headers = {
      "Host": "nebula.kuaishou.com",
      "Connection": "keep-alive",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36",
      "Cookie": this.cookie,
      "content-type": "application/json"
    };
    this.taskReportPath = "/rest/r/ad/task/report";
    this.startTime = Date.now();
    this.endTime = this.startTime - 30000;
    this.queryParams = "mod=Xiaomi(MI 11)&appver=" + this.appver + "&egid=" + this.egid + "=did&".split("").reverse().join("") + this.did;
    this.taskConfigs = {
      "look": {
        "name": "看广告得金币",
        "businessId": 672,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 1,
        "taskType": 1
      },
      "look_follow": {
        "name": "追加看广告得金币",
        "businessId": 672,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 2,
        "taskType": 1
      },
      "box": {
        "name": "宝箱广告",
        "businessId": 606,
        "posId": 20346,
        "subPageId": 100024064,
        "requestSceneType": 1,
        "taskType": 1
      },
      "food": {
        "name": "饭补广告",
        "businessId": 9362,
        "posId": 24067,
        "subPageId": 100026367,
        "requestSceneType": 7,
        "taskType": 2
      },
      "kbox": {
        "name": "开宝箱",
        "businessId": 606,
        "posId": 20346,
        "subPageId": 100024064,
        "requestSceneType": 1,
        "taskType": 1
      },
      "search": {
        "name": "搜索任务",
        "pageId": 11014,
        "businessId": 7076,
        "posId": 216268,
        "subPageId": 100161537,
        "requestSceneType": 1,
        "taskType": 1
      },
      "search_follow": {
        "name": "搜索任务追加",
        "pageId": 11014,
        "businessId": 7076,
        "posId": 216268,
        "subPageId": 100161537,
        "requestSceneType": 7,
        "taskType": 2
      }
    };
    this.taskStats = {};
    var _0xdbad = 16;
    const allTasks = new Set(this.tasksToExecute);
    _0xdbad = 14;
    allTasks.add("look_follow");
    allTasks.add("search");
    allTasks.add("search_follow");
    allTasks.forEach(taskType => {
      if (this.taskConfigs[taskType]) {
        this.taskStats[taskType] = {
          "success": 0,
          "failed": 0,
          "totalReward": 0
        };
      }
    });
    this.lowRewardStreak = 0;
    this.lowRewardThreshold = LOW_REWARD_THRESHOLD;
    this.lowRewardLimit = LOW_REWARD_LIMIT;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    var _0x6_0xc3g;
    const allTaskTypes = new Set(this.tasksToExecute);
    _0x6_0xc3g = 4;
    allTaskTypes.add("wollof_kool".split("").reverse().join(""));
    allTaskTypes.add("search");
    allTaskTypes.add("search_follow");
    allTaskTypes.forEach(taskType => {
      if (this.taskConfigs[taskType]) {
        this.taskLimitReached[taskType] = false;
      }
    });
  }
  getAccountDisplayName() {
    const displayName = this.remark || this.nickname || "号账".split("").reverse().join("") + this.index;
    if (enableColors) {
      var _0xa5b = 6;
      const accountLabel = colors.bright + colors.cyan + "账号" + colors.reset;
      _0xa5b = "pagmnm".split("").reverse().join("");
      return accountLabel + formatTag(displayName);
    }
    return "账号[" + displayName + "]";
  }
  getTaskTotalCount(taskType) {
    switch (taskType) {
      case "look":
        return LOOK_COUNT;
      case "look_follow":
        return this.tasksToExecute.includes("look") ? LOOK_COUNT * FOLLOW_COUNT : 0;
      case "hcraes".split("").reverse().join(""):
        return SEARCH_COUNT;
      case "search_follow":
        return this.tasksToExecute.includes("hcraes".split("").reverse().join("")) ? SEARCH_COUNT * SEARCH_FOLLOW_COUNT : 0;
      case "box":
        return BOX_COUNT;
      case "doof".split("").reverse().join(""):
        return FOOD_COUNT;
      case "kbox":
        return KBOX_COUNT;
      default:
        return 0;
    }
  }
  async checkCoinLimit() {
    try {
      const accountInfo = await getAccountBasicInfo(this.getCookieWithCurrentDid(), this.proxyUrl, this.index);
      if (accountInfo && accountInfo.totalCoin) {
        var _0xb3cf;
        const currentCoins = parseInt(accountInfo.totalCoin);
        _0xb3cf = 6;
        if (currentCoins >= this.coinLimit) {
          console.log("⚠️ " + this.getAccountDisplayName() + " 金币已达 " + currentCoins + " 过超，".split("").reverse().join("") + this.coinLimit + "务任止停将，值阈 ".split("").reverse().join(""));
          this.coinExceeded = true;
          this.stopAllTasks = true;
          return true;
        }
      }
      return false;
    } catch (error) {
      console.log(" ❌".split("").reverse().join("") + this.getAccountDisplayName() + " :常异查检币金 ".split("").reverse().join("") + error.message);
      return false;
    }
  }
  extractCookieInfo() {
    try {
      var _0xe8c9b;
      const extractValue = (key, defaultValue = "") => {
        const patterns = [new RegExp(`\\b${key}\\s*=\\s*"([^"]+)"`, "i"), new RegExp(`\\b${key}\\s*=\\s*([^;]+)`, "i"), new RegExp(`\\b${key}\\s*:\\s*"([^"]+)"`, "i"), new RegExp(`\\b${key}\\s*:\\s*([^,;]+)`, "i")];
        for (const pattern of patterns) {
          const match = this.cookie.match(pattern);
          if (match && match[1] && match[1].trim()) {
            return match[1].trim();
          }
        }
        return defaultValue;
      };
      _0xe8c9b = 10;
      this.egid = extractValue("egid");
      this.did = extractValue("did") || extractValue("oDid");
      this.userId = extractValue("ud") || extractValue("dIresu".split("").reverse().join("")) || "";
      this.kuaishouApiSt = extractValue("ts_ipa.uohsiauk".split("").reverse().join("")) || "";
      this.appver = extractValue("revppa".split("").reverse().join(""), "75601.04.8.31".split("").reverse().join(""));
      var _0xa513eb = 3;
      const missingFields = [];
      _0xa513eb = "kjecol".split("").reverse().join("");
      if (!this.egid) missingFields.push("egid");
      if (!this.did) missingFields.push("did".split("").reverse().join(""));
      if (!this.userId) missingFields.push("dIresu/du".split("").reverse().join(""));
      if (!this.kuaishouApiSt) missingFields.push("kuaishou.api_st");
      if (missingFields.length > 0) {
        console.log("⚠️ " + this.getAccountDisplayName() + " 缺少必要参数: " + missingFields.join(", "));
      }
    } catch (error) {
      console.log("❌ " + this.getAccountDisplayName() + " 解析cookie失败: " + error.message);
    }
  }
  getCookieWithCurrentDid() {
    try {
      if (!this.cookie || !this.did) return this.cookie;
      const cookieParts = String(this.cookie).split(";");
      const updatedParts = cookieParts.map(part => {
        var _0xb2eb = 10;
        const partStr = String(part ?? "");
        _0xb2eb = "fhneoh";
        if (!partStr.trim()) return partStr;
        const hasEquals = partStr.includes("=");
        const hasColon = partStr.includes(":");
        const separator = hasEquals ? "=" : hasColon ? ":" : null;
        if (!separator) return partStr;
        const [key, ...valueParts] = partStr.split(separator);
        var _0xbd2;
        const keyName = String(key || "").trim();
        _0xbd2 = 1;
        const keyLower = keyName.toLowerCase();
        if (keyLower === "did".split("").reverse().join("") || keyLower === "odid") {
          return keyName + separator + this.did;
        }
        return partStr;
      });
      return updatedParts.join(" ;".split("").reverse().join(""));
    } catch (error) {
      return this.cookie;
    }
  }
  getTaskStats() {
    return this.taskStats;
  }
  printTaskStats() {
    console.log("\n📊 " + this.getAccountDisplayName() + " 任务执行统计:");
    for (const [taskType, stats] of Object.entries(this.taskStats)) {
      var _0x4f636b = 11;
      const taskConfig = this.taskConfigs[taskType];
      _0x4f636b = 5;
      console.log("  " + taskConfig.name + ": 成功" + stats.success + "次, 失败" + stats.failed + "次, 总奖励" + stats.totalReward + "币金".split("").reverse().join(""));
    }
  }
  async retryOperation(operation, operationName, maxRetries = 3, delay = 2000) {
    let attempt = 0;
    var _0xba73d;
    let lastError = null;
    _0xba73d = 11;
    while (attempt < maxRetries) {
      try {
        var _0xe60ffb = 8;
        const result = await operation();
        _0xe60ffb = 7;
        if (result) return result;
        lastError = new Error(operationName + "果结空回返 ".split("").reverse().join(""));
      } catch (error) {
        lastError = error;
      }
      attempt++;
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
    return null;
  }
  needsNewDid = false;
  async getAdInfo(taskConfig, retryCount = 0) {
    try {
      const maxRetries = SKIP_LIVE_ADS ? SKIP_LIVE_MAX_RETRIES : 1;
      const apiPath = "/rest/e/reward/mixed/ad";
      var _0x04g3g = 6;
      const requestParams = {
        "encData": "|encData|",
        "sign": "|sign|",
        "cs": "false",
        "client_key": "2ac2a76d",
        "videoModelCrowdTag": "1_23",
        "os": "android",
        "kuaishou.api_st": this.kuaishouApiSt,
        "uQaTag": "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
      };
      _0x04g3g = 9;
      const deviceInfo = {
        "earphoneMode": "1",
        "mod": "Xiaomi(23116PN5BC)",
        "appver": this.appver,
        "isp": "CUCC",
        "language": "zh-cn",
        "ud": this.userId || "",
        "did_tag": "0",
        "net": "WIFI",
        "kcv": "1599",
        "app": "0",
        "kpf": "ANDROID_PHONE",
        "ver": "11.6",
        "android_os": "0",
        "boardPlatform": "pineapple",
        "kpn": "NEBULA",
        "androidApiLevel": "35",
        "country_code": "cn",
        "sys": "ANDROID_15",
        "sw": "1080",
        "sh": "2400",
        "abi": "arm64",
        "userRecoBit": "0"
      };
      const adRequestData = {
        "appInfo": {
          "appId": "kuaishou_nebula",
          "name": "快手极速版",
          "packageName": "com.kuaishou.nebula",
          "version": this.appver,
          "versionCode": -1
        },
        "deviceInfo": {
          "osType": 1,
          "osVersion": "15",
          "deviceId": this.did,
          "screenSize": {
            "width": 1080,
            "height": 2249
          },
          "ftt": ""
        },
        "userInfo": {
          "userId": this.userId || "",
          "age": 0,
          "gender": ""
        },
        "impInfo": [{
          "pageId": taskConfig.pageId || 11101,
          "subPageId": taskConfig.subPageId,
          "action": 0,
          "browseType": 3,
          "impExtData": "{}",
          "mediaExtData": "{}"
        }]
      };
      var _0xaa068d = 7;
      const encodedData = Buffer.from(JSON.stringify(adRequestData)).toString("base64");
      _0xaa068d = 12;
      let signature = await this.getSign(encodedData);
      if (!signature) {
        console.log(" ❌".split("").reverse().join("") + this.getAccountDisplayName() + " 获取签名失败");
        return null;
      }
      requestParams.encData = signature.encdata;
      requestParams.sign = signature.sign;
      var _0x7_0xda7 = 3;
      let adSignature = await this.requestSignService({
        "urlpath": apiPath,
        "reqdata": querystring.stringify(requestParams) + "&" + querystring.stringify(deviceInfo),
        "api_client_salt": this.salt
      }, "获取广告签名");
      _0x7_0xda7 = 3;
      if (!adSignature) {
        console.log(" ❌".split("").reverse().join("") + this.getAccountDisplayName() + "败失名签告广取获 ".split("").reverse().join(""));
        return null;
      }
      var _0x241dbg = 10;
      const queryParams = {
        ...deviceInfo,
        "sig": adSignature.sig,
        "__NS_sig3": adSignature.__NS_sig3,
        "__NS_xfalcon": adSignature.__NS_xfalcon || "",
        "__NStokensig": adSignature.__NStokensig
      };
      _0x241dbg = 6;
      var _0x63184b = 11;
      const fullUrl = "https://api.e.kuaishou.com" + apiPath + "?" + querystring.stringify(queryParams);
      _0x63184b = 16;
      const {
        "response": response,
        "body": adResponse
      } = await sendRequest({
        "method": "POST",
        "url": fullUrl,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "Host": "api.e.kuaishou.com",
          "User-Agent": "kwai-android aegon/3.56.0",
          "Cookie": "=ts_ipa.uohsiauk".split("").reverse().join("") + this.kuaishouApiSt
        },
        "form": requestParams,
        "timeout": 30000
      }, this.proxyUrl, this.getAccountDisplayName() + " 获取广告");
      if (!response || !adResponse) {
        console.log("❌ " + this.getAccountDisplayName() + " 获取广告无响应");
        return null;
      }
      if (adResponse.errorMsg === "KO".split("").reverse().join("") && adResponse.feeds && adResponse.feeds[0] && adResponse.feeds[0].ad) {
        const adData = adResponse.feeds[0];
        var _0x92a61f = 15;
        const creativeId = adData?.ad?.creativeId ?? adData?.creativeId;
        _0x92a61f = 1;
        var _0xc4a16e = 12;
        const expTag = adData.exp_tag || "";
        _0xc4a16e = "nodgcq";
        var _0xbf5fcd = 9;
        const llsid = expTag.split("/")[1]?.split("_")?.[0] || "";
        _0xbf5fcd = 8;
        if (!creativeId) {
          console.log(" ️⚠".split("").reverse().join("") + this.getAccountDisplayName() + "dIevitaerc 告广析解能未 ".split("").reverse().join(""));
          return null;
        }
        const adTitle = (adData.caption || adData?.ad?.caption || "").slice(0, 20);
        var _0x626b = 13;
        const infoColor = colors.bright + colors.blue;
        _0x626b = "eldghj";
        console.log(colorText("ℹ️", infoColor) + " " + this.getAccountDisplayName() + " 获取广告: " + (adTitle || "无标题"));
        return {
          "cid": creativeId,
          "llsid": llsid
        };
      } else {
        console.log("❌ " + this.getAccountDisplayName() + " 获取广告失败: errorMsg=" + (adResponse?.error_msg || "unknown") + ", result=" + (adResponse?.result || "nwonknu".split("").reverse().join("")));
        return null;
      }
    } catch (error) {
      console.log("❌ " + this.getAccountDisplayName() + " 获取广告异常: " + error.message);
      return null;
    }
  }
  async generateSignature(creativeId, llsid, taskType, taskConfig) {
    try {
      const businessData = JSON.stringify({
        "businessId": taskConfig.businessId,
        "endTime": this.endTime,
        "extParams": "",
        "mediaScene": "video",
        "neoInfos": [{
          "creativeId": creativeId,
          "extInfo": "",
          "llsid": llsid,
          "requestSceneType": taskConfig.requestSceneType,
          "taskType": taskConfig.taskType,
          "watchExpId": "",
          "watchStage": 0
        }],
        "pageId": taskConfig.pageId || 11101,
        "posId": taskConfig.posId,
        "reportType": 0,
        "sessionId": "",
        "startTime": this.startTime,
        "subPageId": taskConfig.subPageId
      });
      var _0x01g0f;
      const postData = "bizStr=" + encodeURIComponent(businessData) + "=ts_ipa.uohsiauk&d67a2ca2=yek_tneilc&eslaf=sc&".split("").reverse().join("") + this.kuaishouApiSt;
      _0x01g0f = "mkcgom".split("").reverse().join("");
      var _0x324g1c = 4;
      const fullData = this.queryParams + "&" + postData;
      _0x324g1c = 4;
      const signature = await this.requestSignService({
        "urlpath": this.taskReportPath,
        "reqdata": fullData,
        "api_client_salt": this.salt
      }, this.getAccountDisplayName() + " 生成报告签名");
      if (!signature) return null;
      return {
        "sig": signature.sig,
        "sig3": signature.__NS_sig3,
        "sigtoken": signature.__NStokensig,
        "xfalcon": signature.__NS_xfalcon || "",
        "post": postData
      };
    } catch (error) {
      return null;
    }
  }
  async submitReport(sig, sig3, sigtoken, xfalcon, postData, taskType, taskConfig) {
    try {
      var _0x775bf = 7;
      const reportUrl = "//:sptth".split("").reverse().join("") + "api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + sig + "&__NS_sig3=" + sig3 + "=noclafx_SN__&".split("").reverse().join("") + (xfalcon || "") + "=gisnekotSN__&".split("").reverse().join("") + sigtoken);
      _0x775bf = 2;
      const {
        "response": response,
        "body": reportResponse
      } = await sendRequest({
        "method": "POST",
        "url": reportUrl,
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          "Host": "api.e.kuaishou.com",
          "User-Agent": "kwai-android aegon/3.56.0"
        },
        "body": postData,
        "timeout": 12000
      }, this.proxyUrl, "账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 提交任务");
      if (!reportResponse) {
        return {
          "success": false,
          "reward": 0,
          "shouldRetry": false
        };
      }
      if (reportResponse.result === 1) {
        var _0x3af = 16;
        const reward = reportResponse.data?.neoAmount || 0;
        _0x3af = 9;
        if (reward <= this.lowRewardThreshold) {
          this.lowRewardStreak++;
          if (ENABLE_CHANGE_DID) {
            const newDid = generateDeviceId();
            this.did = newDid;
            this.queryParams = "=revppa&)11 IM(imoaiX=dom".split("").reverse().join("") + this.appver + "&egid=" + this.egid + "=did&".split("").reverse().join("") + newDid;
            console.log(" \uDD04\uD83D".split("").reverse().join("") + this.getAccountDisplayName() + " 低奖励触发，已更新设备ID: " + newDid);
          } else {
            console.log(" \uDD04\uD83D".split("").reverse().join("") + this.getAccountDisplayName() + " 低奖励触发，但当前已关闭自动更换did");
          }
          console.log(" ️⚠".split("").reverse().join("") + this.getAccountDisplayName() + " 金币奖励(" + reward + "(值阈于等或于低)".split("").reverse().join("") + this.lowRewardThreshold + ")，等待30秒后重试，当前连续低奖励次数：(" + this.lowRewardStreak + ")/" + this.lowRewardLimit);
          await new Promise(resolve => setTimeout(resolve, 30000));
          if (this.lowRewardStreak >= this.lowRewardLimit) {
            console.log("🏁 " + this.getAccountDisplayName() + "续连 ".split("").reverse().join("") + this.lowRewardLimit + "次奖励≤" + this.lowRewardThreshold + "务任部全止停，".split("").reverse().join(""));
            this.stopAllTasks = true;
            return {
              "success": false,
              "reward": 0,
              "shouldRetry": false
            };
          }
          return {
            "success": true,
            "reward": reward,
            "shouldRetry": false
          };
        } else {
          if (this.lowRewardStreak > 0) {
            console.log(" ✅".split("").reverse().join("") + this.getAccountDisplayName() + "(励奖 ".split("").reverse().join("") + reward + ")恢复正常，重置低奖励计数");
            this.lowRewardStreak = 0;
          }
          return {
            "success": true,
            "reward": reward,
            "shouldRetry": false
          };
        }
      }
      if ([20107, 20108, 1003, 415].includes(reportResponse.result)) {
        console.log("⚠️ " + this.getAccountDisplayName() + " " + taskConfig.name + " 已达上限");
        this.taskLimitReached[taskType] = true;
        return {
          "success": false,
          "reward": 0
        };
      }
      return {
        "success": false,
        "reward": 0
      };
    } catch (error) {
      return {
        "success": false,
        "reward": 0
      };
    }
  }
  async getSign(encodedData) {
    var _0xf8d;
    const maxRetries = 3;
    _0xf8d = 0;
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        var _0xc991a = 4;
        const requestData = JSON.stringify({
          "type": "encsign",
          "data": encodedData,
          "ud": this.userId || "",
          "script_version": SCRIPT_VERSION
        });
        _0xc991a = "dogecl".split("").reverse().join("");
        const {
          "response": response,
          "body": signResponse
        } = await sendRequest({
          "method": "POST",
          "url": "https://ks.yubin8.dpdns.org/encsign",
          "body": requestData,
          "headers": {
            "Content-Type": "application/json"
          },
          "timeout": 30000
        }, this.proxyUrl, this.getAccountDisplayName() + " encsign签名");
        if (!response) {
          if (attempt < maxRetries) continue;else {
            console.log("❌ " + this.getAccountDisplayName() + "败失求请名签 ".split("").reverse().join(""));
            return null;
          }
        }
        if (!signResponse) {
          if (attempt < maxRetries) continue;else {
            console.log("❌ " + this.getAccountDisplayName() + "空为应响名签 ".split("").reverse().join(""));
            return null;
          }
        }
        if (signResponse && signResponse.status) {
          var _0xe2ea = 10;
          let resultData = signResponse.data;
          _0xe2ea = 5;
          if (typeof resultData === "gnirts".split("").reverse().join("")) {
            try {
              resultData = JSON.parse(resultData);
            } catch (error) {
              if (attempt < maxRetries) continue;else {
                console.log("❌ " + this.getAccountDisplayName() + " 解析签名数据失败");
                return null;
              }
            }
          }
          return resultData;
        } else {
          if (attempt >= maxRetries) {
            console.log("❌ " + this.getAccountDisplayName() + " :误错回返务服名签 ".split("").reverse().join("") + (signResponse?.message || "未知错误"));
          }
          if (attempt < maxRetries) continue;else return null;
        }
      } catch (error) {
        if (attempt >= maxRetries) {
          console.log("❌ " + this.getAccountDisplayName() + " :常异求请名签 ".split("").reverse().join("") + error.message);
        }
        if (attempt < maxRetries) continue;else return null;
      }
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
    console.log("❌ " + this.getAccountDisplayName() + "数次试重大最达已，败失取获名签 ".split("").reverse().join(""));
    return null;
  }
  async requestSignService(requestData, operationDescription) {
    const maxRetries = 3;
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const deviceId = getOrCreateDeviceId();
        const requestPayload = JSON.stringify({
          "type": "nssig",
          "path": requestData.urlpath,
          "data": requestData.reqdata,
          "salt": requestData.api_client_salt,
          "ud": this.userId || "",
          "script_version": SCRIPT_VERSION,
          "device_id": deviceId
        });
        const {
          "response": response,
          "body": signResponse
        } = await sendRequest({
          "method": "POST",
          "url": "https://ks.yubin8.dpdns.org" + "gissn/".split("").reverse().join(""),
          "headers": {
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0"
          },
          "body": requestPayload,
          "timeout": 15000
        }, this.proxyUrl, operationDescription + "（签名服务）");
        if (!signResponse) {
          if (attempt < maxRetries) continue;else {
            console.log(" ❌".split("").reverse().join("") + this.getAccountDisplayName() + " " + operationDescription + " 签名响应为空");
            return null;
          }
        }
        if (signResponse && signResponse.status) {
          let resultData = signResponse.data;
          if (typeof resultData === "gnirts".split("").reverse().join("")) {
            try {
              resultData = JSON.parse(resultData);
            } catch (error) {
              if (attempt < maxRetries) continue;else {
                console.log(" ❌".split("").reverse().join("") + this.getAccountDisplayName() + " " + operationDescription + "败失据数名签析解 ".split("").reverse().join(""));
                return null;
              }
            }
          }
          var _0xc374b = 3;
          let finalResult = resultData;
          _0xc374b = 13;
          if (resultData.data && typeof resultData.data === "object") {
            finalResult = resultData.data;
          }
          var _0x6139e;
          let sig3 = finalResult.nssig3 || finalResult.__NS_sig3;
          _0x6139e = 1;
          let tokensig = finalResult.nstokensig || finalResult.__NStokensig;
          let xfalcon = finalResult.xfalcon || finalResult.nssig4 || finalResult.__NS_xfalcon || "";
          var _0x271ab = 12;
          let sig = finalResult.sig;
          _0x271ab = "gibeei";
          return {
            "__NS_sig3": sig3,
            "__NStokensig": tokensig,
            "sig": sig,
            "__NS_xfalcon": xfalcon
          };
        }
        if (attempt >= maxRetries) {
          console.log("❌ " + this.getAccountDisplayName() + " " + operationDescription + "败失名签 ".split("").reverse().join(""));
        }
        if (attempt < maxRetries) continue;else return null;
      } catch (error) {
        if (attempt >= maxRetries) {
          console.log("❌ " + this.getAccountDisplayName() + " " + operationDescription + " :常异名签 ".split("").reverse().join("") + error.message);
        }
        if (attempt < maxRetries) continue;else return null;
      }
    }
    console.log("❌ " + this.getAccountDisplayName() + " " + operationDescription + "数次试重大最达已，败失名签 ".split("").reverse().join(""));
    return null;
  }
  async executeTask(taskType) {
    if (!this.tasksToExecute.includes(taskType)) return false;
    const taskConfig = this.taskConfigs[taskType];
    if (!taskConfig) {
      console.log("❌ " + this.getAccountDisplayName() + " :务任知未 ".split("").reverse().join("") + taskType);
      return false;
    }
    if (this.taskLimitReached[taskType]) return false;
    try {
      const initialInfo = await getAccountBasicInfo(this.getCookieWithCurrentDid(), this.proxyUrl, this.index);
      const initialCoins = initialInfo?.totalCoin || 0;
      var _0x16a49g = 7;
      let adInfo;
      _0x16a49g = 0;
      let retryCount = 0;
      var _0xa_0xf0g;
      const maxAdRetries = 3;
      _0xa_0xf0g = 9;
      while (retryCount < maxAdRetries) {
        const adResult = await this.getAdInfo(taskConfig);
        if (adResult && adResult.needsNewDid) {
          this.needsNewDid = true;
          retryCount++;
          console.log(" \uDD04\uD83D".split("").reverse().join("") + this.getAccountDisplayName() + " 正在更新设备ID并重试获取广告 (" + retryCount + "/" + maxAdRetries + ")");
          continue;
        } else if (adResult) {
          adInfo = adResult;
          break;
        } else {
          retryCount++;
          if (retryCount >= maxAdRetries) {
            console.log("❌ " + this.getAccountDisplayName() + "取获 ".split("").reverse().join("") + taskConfig.name + "败失息信".split("").reverse().join(""));
            this.taskStats[taskType].failed++;
            return false;
          }
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }
      if (!adInfo) {
        this.taskStats[taskType].failed++;
        return false;
      }
      const waitTime = Math.floor(Math.random() * (WATCH_AD_MAX - WATCH_AD_MIN + 1)) + WATCH_AD_MIN;
      console.log("⏱️ " + this.getAccountDisplayName() + " " + taskConfig.name + " 等待 " + waitTime + " 秒后继续");
      await new Promise(resolve => setTimeout(resolve, waitTime * 1000));
      const signature = await this.generateSignature(adInfo.cid, adInfo.llsid, taskType, taskConfig);
      if (!signature) {
        this.taskStats[taskType].failed++;
        console.log("❌ " + this.getAccountDisplayName() + " 生成签名失败，本次" + taskConfig.name + "励奖得获未".split("").reverse().join(""));
        return false;
      }
      var _0x7dec4d;
      let reportResult;
      _0x7dec4d = 2;
      var _0xdd_0x212 = 8;
      let reportAttempt = 0;
      _0xdd_0x212 = 11;
      while (reportAttempt < 3) {
        reportResult = await this.submitReport(signature.sig, signature.sig3, signature.sigtoken, signature.xfalcon || "", signature.post, taskType, taskConfig);
        if (reportResult?.success || !reportResult?.shouldRetry) {
          break;
        }
        reportAttempt++;
        if (reportResult.shouldRetry) {
          await new Promise(resolve => setTimeout(resolve, 30000));
          console.log(" \uDD04\uD83D".split("").reverse().join("") + this.getAccountDisplayName() + " 准备重试 (" + reportAttempt + "/3)");
        }
      }
      if (reportResult?.success) {
        this.taskStats[taskType].success++;
        this.taskStats[taskType].totalReward += reportResult.reward || 0;
        const finalInfo = await getAccountBasicInfo(this.getCookieWithCurrentDid(), this.proxyUrl, this.index);
        var _0xbd3 = 12;
        const finalCoins = finalInfo?.totalCoin || initialCoins;
        _0xbd3 = "jeqojk";
        var _0xec388c = 11;
        const reward = reportResult.reward || 0;
        _0xec388c = "elninj";
        const remark = this.remark || this.nickname || "备注";
        let taskDescription = "告广到取获".split("").reverse().join("");
        let taskColor = colors.bright + colors.cyan;
        switch (taskType) {
          case "xobk".split("").reverse().join(""):
            taskDescription = "获取到宝箱";
            taskColor = colors.bright + colors.magenta;
            break;
          case "xob".split("").reverse().join(""):
            taskDescription = "告广箱宝到取获".split("").reverse().join("");
            taskColor = colors.bright + colors.blue;
            break;
          case "doof".split("").reverse().join(""):
            taskDescription = "告广补饭到取获".split("").reverse().join("");
            taskColor = colors.bright + colors.green;
            break;
          case "wollof_kool".split("").reverse().join(""):
            taskDescription = "获取追加广告";
            taskColor = colors.bright + colors.yellow;
            break;
          case "wollof_hcraes".split("").reverse().join(""):
            taskDescription = "获取到搜索追加广告";
            taskColor = colors.bright + colors.yellow;
            break;
          case "look":
            taskDescription = "获取到广告";
            taskColor = colors.bright + colors.cyan;
            break;
          case "search":
            taskDescription = "获取到搜索广告";
            taskColor = colors.bright + colors.cyan;
            break;
        }
        var _0xb32e;
        const currentCount = this.taskStats[taskType].success;
        _0xb32e = "mhjilj";
        var _0x5517ed = 1;
        const totalCount = this.getTaskTotalCount(taskType);
        _0x5517ed = 3;
        const rewardIndicator = reward >= 100 ? colors.bright + colors.red + "💰[高额奖励]" + colors.reset : colors.bright + colors.green + "💰[奖励]" + colors.reset;
        var _0x8_0x0b5;
        const remarkTag = formatTag(remark);
        _0x8_0x0b5 = 11;
        const taskDesc = colorText(taskDescription, taskColor);
        console.log(rewardIndicator + " " + remarkTag + " " + taskDesc + "第（".split("").reverse().join("") + currentCount + "/" + totalCount + ">==）次".split("").reverse().join("") + formatWarning(reward) + " 币金前当 —— 币金".split("").reverse().join("") + formatSuccess(finalCoins));
        return true;
      }
      this.taskStats[taskType].failed++;
      if (this.taskLimitReached[taskType]) {
        console.log("⚠️ " + this.getAccountDisplayName() + " " + taskConfig.name + "励奖得获未次本，限上达已 ".split("").reverse().join(""));
      } else if (reportResult) {
        console.log(" ❌".split("").reverse().join("") + this.getAccountDisplayName() + " 提交" + taskConfig.name + "失败，本次未获得奖励");
      } else {
        console.log(" ❌".split("").reverse().join("") + this.getAccountDisplayName() + " 提交" + taskConfig.name + "失败（网络或服务器异常），本次未获得奖励");
      }
      return false;
    } catch (error) {
      this.taskStats[taskType].failed++;
      return false;
    }
  }
  async executeAllTasksByPriority() {
    console.log("🔀 " + this.getAccountDisplayName() + " 任务执行顺序: " + this.tasksToExecute.join(" → "));
    for (const taskType of this.tasksToExecute) {
      if (this.stopAllTasks) {
        console.log("🛑 " + this.getAccountDisplayName() + " 已停止所有任务");
        break;
      }
      if (this.taskLimitReached[taskType]) {
        console.log(" ️⏭".split("").reverse().join("") + this.getAccountDisplayName() + " " + this.taskConfigs[taskType]?.name + " 已达上限，跳过");
        continue;
      }
      console.log("🚀 " + this.getAccountDisplayName() + " 开始执行: " + this.taskConfigs[taskType]?.name);
      switch (taskType) {
        case "kool".split("").reverse().join(""):
          await this.executeLookTasks();
          break;
        case "hcraes".split("").reverse().join(""):
          await this.executeSearchTasks();
          break;
        case "box":
          await this.executeBoxTasks();
          break;
        case "doof".split("").reverse().join(""):
          await this.executeFoodTasks();
          break;
        case "kbox":
          await this.executeKboxTasks();
          break;
        case "look_follow":
          console.log(" ️ℹ".split("").reverse().join("") + this.getAccountDisplayName() + "行执动自后功成务任 kool 在将 wollof_kool ".split("").reverse().join(""));
          break;
        case "search_follow":
          console.log("ℹ️ " + this.getAccountDisplayName() + " search_follow 将在 search 任务成功后自动执行");
          break;
        default:
          console.log("❌ " + this.getAccountDisplayName() + " 未知任务类型: " + taskType);
      }
      var _0xb9adg;
      const isLastTask = taskType === this.tasksToExecute[this.tasksToExecute.length - 1];
      _0xb9adg = 9;
      if (!isLastTask && !this.stopAllTasks && !this.taskLimitReached[taskType]) {
        const switchDelay = (Math.floor(Math.random() * (TASK_SWITCH_MAX - TASK_SWITCH_MIN + 1)) + TASK_SWITCH_MIN) * 1000;
        console.log(" ⏱".split("").reverse().join("") + this.getAccountDisplayName() + " 任务切换 等待 " + Math.round(switchDelay / 1000) + " 秒");
        await new Promise(resolve => setTimeout(resolve, switchDelay));
      }
    }
    console.log("✅ " + this.getAccountDisplayName() + "成完行执务任有所 ".split("").reverse().join(""));
    return {};
  }
  async executeLookTasks() {
    console.log(" \uDCFA\uD83D".split("").reverse().join("") + this.getAccountDisplayName() + " 开始执行看广告任务，计划执行 " + LOOK_COUNT + "次 ".split("").reverse().join(""));
    for (let i = 0; i < LOOK_COUNT; i++) {
      if (this.stopAllTasks || this.taskLimitReached.look) {
        console.log(" \uDED1\uD83D".split("").reverse().join("") + this.getAccountDisplayName() + "止停已务任告广看 ".split("").reverse().join(""));
        break;
      }
      var _0x0be = 8;
      const currentCount = i + 1;
      _0x0be = 7;
      console.log(" \uDD0D\uD83D".split("").reverse().join("") + this.getAccountDisplayName() + "第 务任告广看 ".split("").reverse().join("") + currentCount + "/" + LOOK_COUNT + " 次");
      const lookResult = await this.executeTask("kool".split("").reverse().join(""));
      if (lookResult && this.tasksToExecute.includes("wollof_kool".split("").reverse().join("")) && !this.stopAllTasks && !this.taskLimitReached.look_follow && FOLLOW_COUNT > 0) {
        const followDelay = (Math.floor(Math.random() * (PRE_LOOK_FOLLOW_MAX - PRE_LOOK_FOLLOW_MIN + 1)) + PRE_LOOK_FOLLOW_MIN) * 1000;
        console.log(" ⏱".split("").reverse().join("") + this.getAccountDisplayName() + " 待等 wollof_kool→kool ".split("").reverse().join("") + Math.round(followDelay / 1000) + " 秒");
        await new Promise(resolve => setTimeout(resolve, followDelay));
        console.log(" \uDD04\uD83D".split("").reverse().join("") + this.getAccountDisplayName() + " 开始执行追加看广告任务，计划执行 " + FOLLOW_COUNT + "次 ".split("").reverse().join(""));
        for (let j = 0; j < FOLLOW_COUNT; j++) {
          if (this.stopAllTasks || this.taskLimitReached.look_follow) {
            console.log(" \uDED1\uD83D".split("").reverse().join("") + this.getAccountDisplayName() + "止停已务任告广看加追 ".split("").reverse().join(""));
            break;
          }
          var _0xa19a4e;
          const followCount = j + 1;
          _0xa19a4e = 8;
          console.log(" \uDCF1\uD83D".split("").reverse().join("") + this.getAccountDisplayName() + " 追加看广告 第" + followCount + "/" + FOLLOW_COUNT + "次 ".split("").reverse().join(""));
          await this.executeTask("wollof_kool".split("").reverse().join(""));
          if (j < FOLLOW_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.look_follow) {
            var _0xa128b;
            const betweenDelay = (Math.floor(Math.random() * (BETWEEN_LOOK_FOLLOW_MAX - BETWEEN_LOOK_FOLLOW_MIN + 1)) + BETWEEN_LOOK_FOLLOW_MIN) * 1000;
            _0xa128b = 16;
            console.log(" ⏱".split("").reverse().join("") + this.getAccountDisplayName() + " 待等 隔间 wollof_kool ".split("").reverse().join("") + Math.round(betweenDelay / 1000) + " 秒");
            await new Promise(resolve => setTimeout(resolve, betweenDelay));
          }
        }
      }
      if (i < LOOK_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.look) {
        var _0x371bf;
        const roundDelay = (Math.floor(Math.random() * (ROUND_END_MAX - ROUND_END_MIN + 1)) + ROUND_END_MIN) * 1000;
        _0x371bf = 4;
        console.log(" ⏱".split("").reverse().join("") + this.getAccountDisplayName() + " 待等 隔间 kool ".split("").reverse().join("") + Math.round(roundDelay / 1000) + "秒 ".split("").reverse().join(""));
        await new Promise(resolve => setTimeout(resolve, roundDelay));
      }
    }
    console.log("✅ " + this.getAccountDisplayName() + "成完行执务任告广看 ".split("").reverse().join(""));
  }
  async executeSearchTasks() {
    console.log(" \uDD0E\uD83D".split("").reverse().join("") + this.getAccountDisplayName() + " 开始执行搜索任务，计划执行 " + SEARCH_COUNT + " 次");
    for (let i = 0; i < SEARCH_COUNT; i++) {
      if (this.stopAllTasks || this.taskLimitReached.search) {
        console.log(" \uDED1\uD83D".split("").reverse().join("") + this.getAccountDisplayName() + " 搜索任务已停止");
        break;
      }
      const currentCount = i + 1;
      console.log("🔍 " + this.getAccountDisplayName() + "第 务任索搜 ".split("").reverse().join("") + currentCount + "/" + SEARCH_COUNT + "次 ".split("").reverse().join(""));
      var _0xd17f1e;
      const searchResult = await this.executeTask("hcraes".split("").reverse().join(""));
      _0xd17f1e = 7;
      if (searchResult && this.tasksToExecute.includes("search_follow") && !this.stopAllTasks && !this.taskLimitReached.search_follow && SEARCH_FOLLOW_COUNT > 0) {
        var _0x7d_0x127;
        const followDelay = (Math.floor(Math.random() * (PRE_SEARCH_FOLLOW_MAX - PRE_SEARCH_FOLLOW_MIN + 1)) + PRE_SEARCH_FOLLOW_MIN) * 1000;
        _0x7d_0x127 = 1;
        console.log("⏱ " + this.getAccountDisplayName() + " 待等 wollof_hcraes→hcraes ".split("").reverse().join("") + Math.round(followDelay / 1000) + " 秒");
        await new Promise(resolve => setTimeout(resolve, followDelay));
        console.log("🔄 " + this.getAccountDisplayName() + " 开始执行搜索追加任务，计划执行 " + SEARCH_FOLLOW_COUNT + "次 ".split("").reverse().join(""));
        for (let j = 0; j < SEARCH_FOLLOW_COUNT; j++) {
          if (this.stopAllTasks || this.taskLimitReached.search_follow) {
            console.log(" \uDED1\uD83D".split("").reverse().join("") + this.getAccountDisplayName() + "止停已务任加追索搜 ".split("").reverse().join(""));
            break;
          }
          const followCount = j + 1;
          console.log("📱 " + this.getAccountDisplayName() + " 搜索追加 第" + followCount + "/" + SEARCH_FOLLOW_COUNT + " 次");
          this.adAdditionalNum++;
          await this.executeTask("wollof_hcraes".split("").reverse().join(""));
          this.adAdditionalNum = 0;
          if (j < SEARCH_FOLLOW_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.search_follow) {
            var _0xaefecf;
            const betweenDelay = (Math.floor(Math.random() * (BETWEEN_SEARCH_FOLLOW_MAX - BETWEEN_SEARCH_FOLLOW_MIN + 1)) + BETWEEN_SEARCH_FOLLOW_MIN) * 1000;
            _0xaefecf = 8;
            console.log(" ⏱".split("").reverse().join("") + this.getAccountDisplayName() + " search_follow 间隔 等待 " + Math.round(betweenDelay / 1000) + "秒 ".split("").reverse().join(""));
            await new Promise(resolve => setTimeout(resolve, betweenDelay));
          }
        }
      }
      if (i < SEARCH_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.search) {
        var _0x48914d;
        const roundDelay = (Math.floor(Math.random() * (ROUND_END_MAX - ROUND_END_MIN + 1)) + ROUND_END_MIN) * 1000;
        _0x48914d = 1;
        console.log("⏱ " + this.getAccountDisplayName() + " search 间隔 等待 " + Math.round(roundDelay / 1000) + " 秒");
        await new Promise(resolve => setTimeout(resolve, roundDelay));
      }
    }
    console.log("✅ " + this.getAccountDisplayName() + "成完行执务任索搜 ".split("").reverse().join(""));
  }
  async executeBoxTasks() {
    console.log(" \uDF81\uD83C".split("").reverse().join("") + this.getAccountDisplayName() + " 行执划计，务任箱宝行执始开 ".split("").reverse().join("") + BOX_COUNT + " 次");
    for (let i = 0; i < BOX_COUNT; i++) {
      if (this.stopAllTasks || this.taskLimitReached.box) {
        console.log(" \uDED1\uD83D".split("").reverse().join("") + this.getAccountDisplayName() + " 宝箱任务已停止");
        break;
      }
      var _0x3545ca;
      const currentCount = i + 1;
      _0x3545ca = 18;
      console.log(" \uDD0D\uD83D".split("").reverse().join("") + this.getAccountDisplayName() + "第 务任箱宝 ".split("").reverse().join("") + currentCount + "/" + BOX_COUNT + "次 ".split("").reverse().join(""));
      await this.executeTask("xob".split("").reverse().join(""));
      if (i < BOX_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.box) {
        var _0x4fe8bb = 7;
        const switchDelay = (Math.floor(Math.random() * (TASK_SWITCH_MAX - TASK_SWITCH_MIN + 1)) + TASK_SWITCH_MIN) * 1000;
        _0x4fe8bb = 1;
        console.log("⏱ " + this.getAccountDisplayName() + " 待等 隔间 xob ".split("").reverse().join("") + Math.round(switchDelay / 1000) + "秒 ".split("").reverse().join(""));
        await new Promise(resolve => setTimeout(resolve, switchDelay));
      }
    }
    console.log("✅ " + this.getAccountDisplayName() + " 宝箱任务执行完成");
  }
  async executeFoodTasks() {
    console.log("🍚 " + this.getAccountDisplayName() + " 行执划计，务任补饭行执始开 ".split("").reverse().join("") + FOOD_COUNT + " 次");
    for (let i = 0; i < FOOD_COUNT; i++) {
      if (this.stopAllTasks || this.taskLimitReached.food) {
        console.log("🛑 " + this.getAccountDisplayName() + " 饭补任务已停止");
        break;
      }
      var _0x5fee = 16;
      const currentCount = i + 1;
      _0x5fee = "kbmihh";
      console.log("🔍 " + this.getAccountDisplayName() + " 饭补任务 第" + currentCount + "/" + FOOD_COUNT + " 次");
      await this.executeTask("food");
      if (i < FOOD_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.food) {
        var _0x31b;
        const switchDelay = (Math.floor(Math.random() * (TASK_SWITCH_MAX - TASK_SWITCH_MIN + 1)) + TASK_SWITCH_MIN) * 1000;
        _0x31b = 9;
        console.log("⏱ " + this.getAccountDisplayName() + " food 间隔 等待 " + Math.round(switchDelay / 1000) + " 秒");
        await new Promise(resolve => setTimeout(resolve, switchDelay));
      }
    }
    console.log("✅ " + this.getAccountDisplayName() + "成完行执务任补饭 ".split("").reverse().join(""));
  }
  async executeKboxTasks() {
    console.log(" \uDCE6\uD83D".split("").reverse().join("") + this.getAccountDisplayName() + " 开始执行开宝箱任务，计划执行 " + KBOX_COUNT + "次 ".split("").reverse().join(""));
    for (let i = 0; i < KBOX_COUNT; i++) {
      if (this.stopAllTasks || this.taskLimitReached.kbox) {
        console.log("🛑 " + this.getAccountDisplayName() + " 开宝箱任务已停止");
        break;
      }
      var _0xd4e7fb;
      const currentCount = i + 1;
      _0xd4e7fb = 4;
      console.log("🔍 " + this.getAccountDisplayName() + " 开宝箱任务 第" + currentCount + "/" + KBOX_COUNT + "次 ".split("").reverse().join(""));
      await this.executeTask("kbox");
      if (i < KBOX_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.kbox) {
        var _0x76833a;
        const switchDelay = (Math.floor(Math.random() * (TASK_SWITCH_MAX - TASK_SWITCH_MIN + 1)) + TASK_SWITCH_MIN) * 1000;
        _0x76833a = "jomdcn".split("").reverse().join("");
        console.log("⏱ " + this.getAccountDisplayName() + " kbox 间隔 等待 " + Math.round(switchDelay / 1000) + "秒 ".split("").reverse().join(""));
        await new Promise(resolve => setTimeout(resolve, switchDelay));
      }
    }
    console.log("✅ " + this.getAccountDisplayName() + " 开宝箱任务执行完成");
  }
}
function parseAccountString(accountStr, _0x1a9df, _0xc7755a, _0x18a74d) {
  const _0x9aacc = String(accountStr || "").trim();
  if (!_0x9aacc) {
    return null;
  }
  _0x1a9df = "";
  _0xc7755a = "";
  var _0x8cf4f;
  _0x18a74d = "";
  _0x8cf4f = 1;
  let _0xe7eeg = null;
  if (_0x9aacc.includes("#")) {
    var _0xa4adae = 8;
    const _0xg5ffc = _0x9aacc.split("#");
    _0xa4adae = 5;
    if (_0xg5ffc.length === 2) {
      _0x18a74d = _0xg5ffc[0];
      _0xc7755a = _0xg5ffc[1];
    } else if (_0xg5ffc.length === 3) {
      if (new RegExp("^socks5:\\/\\/", "i").test(_0xg5ffc[2]) || _0xg5ffc[2].includes("|")) {
        _0x18a74d = _0xg5ffc[0];
        _0xc7755a = _0xg5ffc[1];
        _0xe7eeg = _0xg5ffc[2];
      } else {
        _0x1a9df = _0xg5ffc[0];
        _0x18a74d = _0xg5ffc[1];
        _0xc7755a = _0xg5ffc[2];
      }
    } else if (_0xg5ffc.length >= 4) {
      _0x1a9df = _0xg5ffc[0];
      _0x18a74d = _0xg5ffc[1];
      _0xc7755a = _0xg5ffc.slice(2, _0xg5ffc.length - 1).join("#");
      _0xe7eeg = _0xg5ffc[_0xg5ffc.length - 1];
    }
  } else {
    _0x18a74d = _0x9aacc;
    _0xc7755a = "";
  }
  if (_0xe7eeg) {
    if (_0xe7eeg === "0" || _0xe7eeg.toLowerCase() === "none") {
      _0xe7eeg = null;
    } else if (_0xe7eeg.includes("|")) {
      const _0x3d1e = _0xe7eeg.split("|");
      if (_0x3d1e.length >= 2) {
        const [ip, port, username = "", password = ""] = _0x3d1e.map(part => String(part || "").trim());
        if (ip && port) {
          const _0x2g38eb = username || password ? encodeURIComponent(username) + ":" + encodeURIComponent(password) + "@" : "";
          _0xe7eeg = "//:5skcos".split("").reverse().join("") + _0x2g38eb + ip + ":" + port;
        } else {
          _0xe7eeg = null;
        }
      } else {
        _0xe7eeg = null;
      }
    }
  }
  return {
    "remark": _0x1a9df || "",
    "salt": _0xc7755a,
    "cookie": _0x18a74d,
    "proxyUrl": _0xe7eeg
  };
}
function getAllAccountConfigs() {
  const _0xg8ec = parseAccountsFromEnv();
  var _0x98ed7g;
  const _0x59c2g = [];
  _0x98ed7g = "ejaffd".split("").reverse().join("");
  for (const _0x13_0x145 of _0xg8ec) {
    const _0x56a68a = parseAccountString(_0x13_0x145);
    if (_0x56a68a) {
      _0x59c2g.push(_0x56a68a);
    } else {
      console.log("：误错式格号账".split("").reverse().join("") + _0x13_0x145);
    }
  }
  _0x59c2g.forEach((config, index) => {
    config.index = index + 1;
  });
  return _0x59c2g;
}
async function executeConcurrently(items, concurrency, processor, _0x48d90d) {
  var _0x1c6ce;
  const _0x87c6c = new Array(items.length);
  _0x1c6ce = 12;
  _0x48d90d = 0;
  async function _0x9bf2b() {
    while (true) {
      var _0x5eec;
      const _0xdca62d = _0x48d90d++;
      _0x5eec = 4;
      if (_0xdca62d >= items.length) {
        return;
      }
      var _0x0e7edc = 17;
      const _0xd696df = items[_0xdca62d];
      _0x0e7edc = 8;
      try {
        _0x87c6c[_0xdca62d] = await processor(_0xd696df, _0xdca62d);
      } catch (error) {
        console.log("=xedni（常异行执发并".split("").reverse().join("") + (_0xdca62d + 1) + "）：" + error.message);
        _0x87c6c[_0xdca62d] = null;
      }
    }
  }
  var _0x35c4e = 8;
  const _0x84f86e = Array.from({
    "length": Math.min(concurrency, items.length)
  }, _0x9bf2b);
  _0x35c4e = 2;
  await Promise.all(_0x84f86e);
  return _0x87c6c;
}
function formatAccountDisplay(index, nickname, remark) {
  var _0xb566c = 11;
  const _0x2a905b = "账号[" + (nickname || index) + "]" + (remark ? "（" + remark + "）" : "");
  _0xb566c = 0;
  return colors.bright + colors.cyan + _0x2a905b + colors.reset;
}
async function processAccount(accountConfig) {
  if (accountConfig.proxyUrl) {
    var _0x47a82d;
    const accountDisplay = formatAccountDisplay(accountConfig.index, null, accountConfig.remark);
    _0x47a82d = 9;
    var _0xa2_0x4f0;
    const _0x3d61f = await testProxyConnectivity(accountConfig.proxyUrl, accountDisplay);
    _0xa2_0x4f0 = 6;
    console.log("  - " + (_0x3d61f.ok ? "过通证验理代 ✅".split("").reverse().join("") : "败失证验理代 ❌".split("").reverse().join("")) + " :".split("").reverse().join("") + _0x3d61f.msg);
    if (_0x3d61f.ok && _0x3d61f.ip && _0x3d61f.ip !== "localhost") {
      if (usedProxyIPs.has(_0x3d61f.ip)) {
        console.log("⚠️ 存在相同代理IP（" + _0x3d61f.ip + "），继续执行其余账号...");
      } else {
        usedProxyIPs.add(_0x3d61f.ip);
      }
      console.log(" \uDF10\uD83C".split("").reverse().join("") + accountDisplay + " 使用代理: " + accountConfig.proxyUrl);
    } else if (!_0x3d61f.ok) {
      console.log("❌ " + accountDisplay + "号账该过跳，败失试测理代 ".split("").reverse().join(""));
      return {
        "index": accountConfig.index,
        "remark": accountConfig.remark || "无备注",
        "nickname": "号账".split("").reverse().join("") + accountConfig.index,
        "initialCoin": 0,
        "finalCoin": 0,
        "coinChange": 0,
        "initialCash": 0,
        "finalCash": 0,
        "cashChange": 0,
        "error": "代理测试失败: " + _0x3d61f.msg,
        "skipped": true
      };
    }
  } else {
    const accountDisplay = formatAccountDisplay(accountConfig.index, null, accountConfig.remark);
    console.log("🌐 " + accountDisplay + " 未配置代理，走直连");
  }
  var _0xd463c = 11;
  const accountDisplay = formatAccountDisplay(accountConfig.index, null, accountConfig.remark);
  _0xd463c = "bjhdio".split("").reverse().join("");
  console.log("🔍 " + accountDisplay + "...中息信号账取获 ".split("").reverse().join(""));
  var _0x57b;
  let _0xbe_0x102 = await getAccountBasicInfo(accountConfig.cookie, accountConfig.proxyUrl, accountConfig.index);
  _0x57b = "nhnlbn".split("").reverse().join("");
  var _0xf2f = 13;
  let _0x91aa = _0xbe_0x102?.nickname || "号账".split("").reverse().join("") + accountConfig.index;
  _0xf2f = 9;
  if (_0xbe_0x102) {
    var _0xd4afff;
    const _0x57b3b = _0xbe_0x102.totalCoin != null ? _0xbe_0x102.totalCoin : "未知";
    _0xd4afff = 10;
    var _0x1bcf = 7;
    const _0xba9be = _0xbe_0x102.allCash != null ? _0xbe_0x102.allCash : "未知";
    _0x1bcf = 9;
    const fullDisplay = formatAccountDisplay(accountConfig.index, _0x91aa, accountConfig.remark);
    var _0x38ce6d = 5;
    const _0x5cg86a = _0xbe_0x102.ud ? "，UD: " + _0xbe_0x102.ud : "";
    _0x38ce6d = 1;
    if (enableColors) {
      console.log("✅ " + fullDisplay + " :币金前当 \uDCB0\uD83D，功成录登 ".split("").reverse().join("") + formatSuccess(_0x57b3b) + " :额余前当 \uDCB8\uD83D，".split("").reverse().join("") + colorText(_0xba9be, colors.bright + colors.yellow) + _0x5cg86a);
    } else {
      console.log(" ✅".split("").reverse().join("") + fullDisplay + " :币金前当 \uDCB0\uD83D，功成录登 ".split("").reverse().join("") + _0x57b3b + " :额余前当 \uDCB8\uD83D，".split("").reverse().join("") + _0xba9be + _0x5cg86a);
    }
  } else {
    const fullDisplay = formatAccountDisplay(accountConfig.index, _0x91aa, accountConfig.remark);
    console.log("❌ " + fullDisplay + " 基本信息获取失败，但仍继续执行任务");
  }
  const _0x1dd8da = _0xbe_0x102?.ud || null;
  var _0x6a7d5b;
  const _0xc2abe = new KuaishouAccount({
    ...accountConfig,
    "nickname": _0x91aa,
    "tasksToExecute": tasksToExecute,
    "udFromLogin": _0x1dd8da
  });
  _0x6a7d5b = 4;
  if (_0xbe_0x102) {
    await _0xc2abe.checkCoinLimit();
    if (_0xc2abe.coinExceeded) {
      console.log("⚠️ " + _0xc2abe.getAccountDisplayName() + " 初始金币已超过阈值，不执行任务");
      const finalInfo = await getAccountBasicInfo(_0xc2abe.getCookieWithCurrentDid(), accountConfig.proxyUrl, accountConfig.index);
      var _0x18fg;
      const initialCoins = _0xbe_0x102?.totalCoin || 0;
      _0x18fg = 9;
      const finalCoins = finalInfo?.totalCoin || 0;
      const coinChange = finalCoins - initialCoins;
      var _0xc2136c;
      const initialCash = _0xbe_0x102?.allCash || 0;
      _0xc2136c = 14;
      var _0xa9bdc = 15;
      const finalCash = finalInfo?.allCash || 0;
      _0xa9bdc = "fhfbgq".split("").reverse().join("");
      var _0x6abeeb = 11;
      const cashChange = finalCash - initialCash;
      _0x6abeeb = "opmqlm";
      return {
        "index": accountConfig.index,
        "remark": accountConfig.remark || "无备注",
        "nickname": _0x91aa,
        "initialCoin": initialCoins,
        "finalCoin": finalCoins,
        "coinChange": coinChange,
        "initialCash": initialCash,
        "finalCash": finalCash,
        "cashChange": cashChange,
        "stats": _0xc2abe.getTaskStats(),
        "coinLimitExceeded": true
      };
    }
  }
  await _0xc2abe.executeAllTasksByPriority();
  var _0xacgcc = 14;
  const finalInfo = await getAccountBasicInfo(_0xc2abe.getCookieWithCurrentDid(), accountConfig.proxyUrl, accountConfig.index);
  _0xacgcc = 10;
  const initialCoins = _0xbe_0x102?.totalCoin || 0;
  var _0x7d477d;
  const finalCoins = finalInfo?.totalCoin || 0;
  _0x7d477d = 7;
  var _0x66ba = 11;
  const coinChange = finalCoins - initialCoins;
  _0x66ba = "kbfgoc".split("").reverse().join("");
  var _0xb_0x2d2 = 6;
  const initialCash = _0xbe_0x102?.allCash || 0;
  _0xb_0x2d2 = "jhnlcp".split("").reverse().join("");
  const finalCash = finalInfo?.allCash || 0;
  var _0xbac4ed = 5;
  const cashChange = finalCash - initialCash;
  _0xbac4ed = "defgne".split("").reverse().join("");
  _0xc2abe.printTaskStats();
  return {
    "index": accountConfig.index,
    "remark": accountConfig.remark || "无备注",
    "nickname": _0x91aa,
    "initialCoin": initialCoins,
    "finalCoin": finalCoins,
    "coinChange": coinChange,
    "initialCash": initialCash,
    "finalCash": finalCash,
    "cashChange": cashChange,
    "stats": _0xc2abe.getTaskStats(),
    "coinLimitExceeded": _0xc2abe.coinExceeded,
    "infoFetchFailed": !_0xbe_0x102
  };
}
function displayResultsTable(results, _0x59dc9e, _0x5a_0x8da, _0x265a6b, _0x540f4g, _0x87gfba) {
  if (!results.length) {
    console.log("\n没有可显示的账号信息。");
    return;
  }
  var _0x41a1d = 8;
  const _0xd49c6g = results.reduce((sum, account) => sum + (parseInt(account.initialCoin) || 0), 0);
  _0x41a1d = 4;
  const _0x6c56c = results.reduce((sum, account) => sum + (parseInt(account.finalCoin) || 0), 0);
  const _0x89dc = _0x6c56c - _0xd49c6g;
  var _0xed3a;
  const _0xf_0x7e3 = results.reduce((sum, account) => sum + (parseFloat(account.initialCash) || 0), 0);
  _0xed3a = 6;
  const _0x7f8cf = results.reduce((sum, account) => sum + (parseFloat(account.finalCash) || 0), 0);
  const _0x5f78df = _0x7f8cf - _0xf_0x7e3;
  _0x59dc9e = 0;
  var _0xdb31c;
  _0x5a_0x8da = 0;
  _0xdb31c = 4;
  _0x265a6b = 0;
  results.forEach(account => {
    if (account.stats) {
      Object.values(account.stats).forEach(taskStats => {
        _0x59dc9e += taskStats.success + taskStats.failed;
        _0x5a_0x8da += taskStats.success;
        _0x265a6b += taskStats.totalReward;
      });
    }
  });
  var _0x44d5ee = 10;
  const _0x24bd1f = _0x59dc9e > 0 ? (_0x5a_0x8da / _0x59dc9e * 100).toFixed(1) : "0.0".split("").reverse().join("");
  _0x44d5ee = 2;
  var _0x9_0xg59;
  const _0xcacf1d = results.filter(account => account.coinLimitExceeded).length;
  _0x9_0xg59 = 2;
  const _0x39d2d = results.filter(account => account.skipped).length;
  const _0xc4628e = results.filter(account => account.infoFetchFailed).length;
  console.log("\n\n" + "=".repeat(80));
  console.log("|" + centerText("      快手极速版自动化任务执行结果汇总表      ", 78) + "|");
  console.log("=".repeat(80));
  console.log("|" + (" :数号账总".split("").reverse().join("") + results.length).padEnd(22) + (" :号账过跳".split("").reverse().join("") + _0x39d2d).padEnd(22) + ("总任务数: " + _0x59dc9e).padEnd(22) + (" :率功成务任".split("").reverse().join("") + _0x24bd1f + "%").padEnd(10) + "|");
  console.log("|" + ("总金币变化: " + _0x89dc).padEnd(26) + (" :励奖币金总".split("").reverse().join("") + _0x265a6b).padEnd(26) + ("总余额变化: " + _0x5f78df.toFixed(2)).padEnd(24) + "|");
  console.log("-".repeat(80));
  var _0x73d8g = 7;
  const _0x6aa9ed = ["序号", "备注", "称昵号账".split("").reverse().join(""), "初始金币", "币金终最".split("").reverse().join(""), "化变币金".split("").reverse().join(""), "初始余额", "额余终最".split("").reverse().join(""), "余额变化", "态状".split("").reverse().join("")];
  _0x73d8g = 6;
  const _0xab7f = [6, 16, 16, 12, 12, 12, 12, 12, 12, 10];
  _0x540f4g = "|";
  _0x6aa9ed.forEach((header, index) => {
    _0x540f4g += centerText(header, _0xab7f[index]) + "|";
  });
  console.log(_0x540f4g);
  _0x87gfba = "|";
  _0xab7f.forEach(width => {
    _0x87gfba += "-".repeat(width) + "|";
  });
  console.log(_0x87gfba);
  results.forEach(account => {
    let _0x3cc4d = "|";
    _0x3cc4d += centerText(account.index, _0xab7f[0]) + "|";
    _0x3cc4d += centerText(account.remark, _0xab7f[1]) + "|";
    let _0xfb21gd = account.nickname || "-";
    if (account.skipped) _0xfb21gd += "❌ ".split("").reverse().join("");else if (account.coinLimitExceeded) _0xfb21gd += "️⚠ ".split("").reverse().join("");else if (account.infoFetchFailed) _0xfb21gd += "\uDD36\uD83D ".split("").reverse().join("");
    _0x3cc4d += centerText(_0xfb21gd.substring(0, _0xab7f[2] - 2), _0xab7f[2]) + "|";
    _0x3cc4d += centerText(account.initialCoin, _0xab7f[3]) + "|";
    _0x3cc4d += centerText(account.finalCoin, _0xab7f[4]) + "|";
    var _0x098bf = 10;
    const _0x5g9c = account.coinChange >= 0 ? "+" + account.coinChange : account.coinChange;
    _0x098bf = 15;
    _0x3cc4d += centerText(_0x5g9c, _0xab7f[5]) + "|";
    _0x3cc4d += centerText(account.initialCash, _0xab7f[6]) + "|";
    _0x3cc4d += centerText(account.finalCash, _0xab7f[7]) + "|";
    var _0x99522d = 10;
    const _0x82f = account.cashChange >= 0 ? "+" + account.cashChange.toFixed(2) : account.cashChange.toFixed(2);
    _0x99522d = 5;
    _0x3cc4d += centerText(_0x82f, _0xab7f[8]) + "|";
    let _0x584d = "成完".split("").reverse().join("");
    if (account.skipped) _0x584d = "跳过";else if (account.coinLimitExceeded) _0x584d = "限超".split("").reverse().join("");else if (account.infoFetchFailed) _0x584d = "息信无".split("").reverse().join("");
    _0x3cc4d += centerText(_0x584d, _0xab7f[9]) + "|";
    console.log(_0x3cc4d);
  });
  console.log("=".repeat(80));
  console.log("|" + centerText("      任务执行完成，请查看详细结果      ", 78) + "|");
  console.log("=".repeat(80));
}
async function testSignService() {
  try {
    var _0x5ca3c = 12;
    const _0xba8c4a = {
      "type": "encsign",
      "data": "dGVzdF9kYXRh",
      "ud": "test_user",
      "script_version": SCRIPT_VERSION
    };
    _0x5ca3c = 7;
    const {
      "response": response,
      "body": body
    } = await sendRequest({
      "method": "POST",
      "url": "https://ks.yubin8.dpdns.org/encsign",
      "body": JSON.stringify(_0xba8c4a),
      "headers": {
        "Content-Type": "application/json"
      },
      "timeout": 10000
    }, null, "encsign签名服务测试");
    if (!response) {
      console.log("应响无 :败失试测务服名签ngiscne ❌".split("").reverse().join(""));
      return false;
    }
    if (body && body.status) {
      console.log("功成试测务服名签ngiscne ✅".split("").reverse().join(""));
      return true;
    } else {
      console.log(" :败失试测务服名签ngiscne ❌".split("").reverse().join("") + (body?.message || "未知错误"));
      return false;
    }
  } catch (error) {
    console.log("❌ encsign签名服务测试异常: " + error.message);
    return false;
  }
}
async function testNssigService() {
  try {
    const _0x16_0x4a4 = getOrCreateDeviceId();
    var _0xa01efd;
    const _0x792gfa = {
      "type": "nssig",
      "path": "/rest/e/reward/mixed/ad",
      "data": "test=data&salt=test_salt",
      "salt": "test_salt",
      "ud": "test_user",
      "script_version": SCRIPT_VERSION,
      "device_id": _0x16_0x4a4
    };
    _0xa01efd = 14;
    const {
      "response": response,
      "body": body
    } = await sendRequest({
      "method": "POST",
      "url": "https://ks.yubin8.dpdns.org/nssig",
      "body": JSON.stringify(_0x792gfa),
      "headers": {
        "Content-Type": "application/json"
      },
      "timeout": 10000
    }, null, "试测务服名签gissn".split("").reverse().join(""));
    if (!response) {
      console.log("❌ nssig签名服务测试失败: 无响应");
      return false;
    }
    if (body && body.status) {
      console.log("✅ nssig签名服务测试成功");
      return true;
    } else {
      console.log("❌ nssig签名服务测试失败: " + (body?.message || "未知错误"));
      return false;
    }
  } catch (error) {
    console.log(" :常异试测务服名签gissn ❌".split("").reverse().join("") + error.message);
    return false;
  }
}
(async () => {
  console.log("证验密卡需无，本版费免友妖 ✅".split("").reverse().join(""));
  const deviceId = getOrCreateDeviceId();
  console.log(" :DI备设 \uDCF1\uD83D".split("").reverse().join("") + deviceId);
  var _0x46c4d = 14;
  const encsignTest = await testSignService();
  _0x46c4d = 1;
  const nssigTest = await testNssigService();
  if (!encsignTest || !nssigTest) {
    console.log("\n❌ 签名服务测试失败，脚本终止执行");
    console.log("💡 请检查以下问题:");
    console.log("  1. 网络连接是否正常");
    console.log("  2. 签名服务地址是否正确: https://ks.yubin8.dpdns.org");
    console.log("  3. 服务是否可用");
    console.log("  4. 防火墙或代理设置");
    process.exit(1);
  }
  var _0x6c5acd;
  const accountConfigs = getAllAccountConfigs();
  _0x6c5acd = 7;
  if (!accountConfigs.length) {
    console.error("息信号账置配未 :误错 ❌\n".split("").reverse().join(""));
    console.log("\n💡 请设置环境变量 ksck 或 ksck1, ksck2... 来配置账号");
    process.exit(1);
  }
  console.log("═══════════════════════════════════════════════════════════════".split("").reverse().join(""));
  console.log("：息信置配前当 \uDCCB\uD83D".split("").reverse().join(""));
  console.log("  金币上限 (KSCOIN_LIMIT): " + COIN_LIMIT);
  console.log(" :)DLOHSERHT_DRAWER_WOLSK( 值阈励奖低  ".split("").reverse().join("") + LOW_REWARD_THRESHOLD);
  console.log(" :)TIMIL_DRAWER_WOLSK( 限上励奖低续连  ".split("").reverse().join("") + LOW_REWARD_LIMIT);
  console.log("  并发策略: 每个账号同时进行 (" + accountCount + " 并发)");
  console.log("  跳过直播广告 (SKIP_LIVE_ADS): " + (SKIP_LIVE_ADS ? "启用，重试" + SKIP_LIVE_MAX_RETRIES + "次" : "用禁".split("").reverse().join("")));
  console.log(" :)ksaT( 务任行执  ".split("").reverse().join("") + tasksToExecute.join(" ,".split("").reverse().join("")));
  if (tasksToExecute.includes("kool".split("").reverse().join(""))) {
    console.log(" :)TNUOC_KOOLSK( 数次行执总 kool  ".split("").reverse().join("") + LOOK_COUNT);
  }
  if (tasksToExecute.includes("box")) {
    console.log(" :)TNUOC_XOBSK( 数次行执总 xob  ".split("").reverse().join("") + BOX_COUNT);
  }
  if (tasksToExecute.includes("food")) {
    console.log(" :)TNUOC_DOOFSK( 数次行执总 doof  ".split("").reverse().join("") + FOOD_COUNT);
  }
  if (tasksToExecute.includes("kbox")) {
    console.log("  kbox 总执行次数 (KSKBOX_COUNT): " + KBOX_COUNT);
  }
  if (tasksToExecute.includes("hcraes".split("").reverse().join(""))) {
    console.log(" :)TNUOC_HCRAESSK( 数次行执总 hcraes  ".split("").reverse().join("") + SEARCH_COUNT);
  }
  if (tasksToExecute.includes("look_follow")) {
    console.log("  每次 look 成功追加 look_follow 次数 (KSFOLLOW_COUNT): " + FOLLOW_COUNT);
  }
  if (tasksToExecute.includes("search_follow")) {
    console.log(" :)TNUOC_WOLLOFHCRAESSK( 数次 wollof_hcraes 加追功成 hcraes 次每  ".split("").reverse().join("") + SEARCH_FOLLOW_COUNT);
  }
  console.log("公益接口，撑不住就进群提醒我修复 1029832220");
  console.log("═══════════════════════════════════════════════════════════════\n");
  console.log(" 共，务任行执始开 \uDE80\uD83D".split("").reverse().join("") + accountConfigs.length + "\n...号账个 ".split("").reverse().join(""));
  const results = [];
  const concurrency = Math.max(1, Math.min(MAX_CONCURRENCY, accountConfigs.length));
  await executeConcurrently(accountConfigs, concurrency, async accountConfig => {
    try {
      var _0x1eab9a = 10;
      const accountResult = await processAccount(accountConfig);
      _0x1eab9a = 1;
      results.push({
        "index": accountConfig.index,
        "remark": accountConfig.remark || "无备注",
        "nickname": accountResult?.nickname || "账号" + accountConfig.index,
        "initialCoin": accountResult?.initialCoin || 0,
        "finalCoin": accountResult?.finalCoin || 0,
        "coinChange": accountResult?.coinChange || 0,
        "initialCash": accountResult?.initialCash || 0,
        "finalCash": accountResult?.finalCash || 0,
        "cashChange": accountResult?.cashChange || 0,
        "stats": accountResult?.stats || {},
        "coinLimitExceeded": accountResult?.coinLimitExceeded || false,
        "skipped": accountResult?.skipped || false,
        "infoFetchFailed": accountResult?.infoFetchFailed || false,
        "error": accountResult?.error || null
      });
    } catch (error) {
      console.log("账号[" + accountConfig.index + "]" + (accountConfig.remark ? "（" + accountConfig.remark + "）" : "") + " ❌ 执行异常：" + error.message);
      results.push({
        "index": accountConfig.index,
        "remark": accountConfig.remark || "注备无".split("").reverse().join(""),
        "nickname": "账号" + accountConfig.index,
        "initialCoin": 0,
        "finalCoin": 0,
        "coinChange": 0,
        "initialCash": 0,
        "finalCash": 0,
        "cashChange": 0,
        "error": error.message,
        "skipped": true
      });
    }
  });
  results.sort((a, b) => a.index - b.index);
  console.log("\n全部完成。", "✅");
  console.log("\n---------------------------------------------- 账号信息汇总 ----------------------------------------------");
  displayResultsTable(results);
})();