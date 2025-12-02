//Tue Dec 02 2025 03:32:41 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
var _0x402dd = 2;
var _0xed_0xbda = 4;
const crypto = require("crypto");
_0xed_0xbda = "nlcceg".split("").reverse().join("");
_0x402dd = "oejmmh".split("").reverse().join("");
const fs = require("fs");
const https = require("https");
var _0x6ab17e;
const axios = require("axios");
_0x6ab17e = 9;
const {
  XMLParser: XMLParser
} = require("fast-xml-parser");
const {
  JSEncrypt: JSEncrypt
} = require("node-jsencrypt");
const agent = new https.Agent({
  rejectUnauthorized: false
});
var _0x_0x362 = 9;
var _0xef9a6c = 8;
const axiosInstance = axios.create({
  httpsAgent: agent,
  headers: {
    "User-Agent": "Mozilla/5.0 (Linux; Android 13; 22081212C Build/TKQ1.220829.002) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.97 Mobile Safari/537.36"
  }
});
_0xef9a6c = "mecicm".split("").reverse().join("");
_0x_0x362 = 7;
var _0xedd77a;
const runNum = "3";
_0xedd77a = 10;
var _0x2b8f;
var _0x129d1e = 6;
_0x129d1e = 9;
_0x2b8f = 5;
var _0x9185c;
_0x9185c = 4;
function verifyLicense(_0x4c89c6) {
  var _0x57f3e4 = 10;
  const _0x510005 = process.env.dx0d;
  _0x57f3e4 = 16;
  if (!_0x510005) {
    console.log("】0222389201群QQ【值 量变境环 d0xd 置设未 :误错".split("").reverse().join(""));
    return false;
  }
  _0x4c89c6 = "0222389201群QQ".split("").reverse().join("");
  if (_0x510005 !== _0x4c89c6) {
    console.log("值量变境环 d0xd 查检请，败失证验密卡 :误错".split("").reverse().join(""));
    return false;
  }
  console.log("功成证验密卡".split("").reverse().join(""));
  return true;
}
class ExchangeStats {
  constructor() {
    this.stats = {};
    this.exchangeRecords = [];
  }
  addSuccess(_0x197da3, _0x3b000d = "费话".split("").reverse().join("")) {
    const _0x23c092 = {
      Jblns: "stats",
      ENDli: "successCou" + "tn".split("").reverse().join(""),
      SembF: "amounts",
      uJjxk: "push",
      RumEf: "exchangeRecords",
      cWKfF: "toLocaleString",
      vSjnE: "zh-CN"
    };
    !this[_0x23c092.Jblns][_0x197da3] && (this[_0x23c092.Jblns][_0x197da3] = {
      successCount: 0,
      failedCount: 0,
      amounts: []
    });
    this[_0x23c092.Jblns][_0x197da3][_0x23c092.ENDli]++;
    this[_0x23c092.Jblns][_0x197da3][_0x23c092.SembF][_0x23c092.uJjxk](_0x3b000d);
    this[_0x23c092.RumEf][_0x23c092.uJjxk]({
      phone: _0x197da3,
      amount: _0x3b000d,
      status: "成功",
      time: new Date()[_0x23c092.cWKfF](_0x23c092.vSjnE)
    });
  }
  addFailed(_0xc6f013, _0x389076 = "") {
    !this.stats[_0xc6f013] && (this.stats[_0xc6f013] = {
      successCount: 0,
      failedCount: 0,
      amounts: []
    });
    this.stats[_0xc6f013].failedCount++;
    this.exchangeRecords.push({
      phone: _0xc6f013,
      amount: "话费",
      status: "失败",
      reason: _0x389076,
      time: new Date().toLocaleString("zh-CN")
    });
  }
  generateReport() {
    if (Object.keys(this.stats).length === 0) {
      return "本次无兑换记录";
    }
    const _0x48a61f = ["话费兑换统计报告:"];
    var _0x5273f1 = 11;
    let _0x1ed8af = 0;
    _0x5273f1 = 7;
    let _0x13293c = 0;
    for (const [_0xd4d549, _0x35238d] of Object.entries(this.stats)) {
      const _0x1f4499 = _0x35238d.successCount;
      var _0x177fbb;
      const _0x975fb2 = _0x35238d.failedCount;
      _0x177fbb = 7;
      var _0x3d4e78;
      const _0x3b19f3 = _0x35238d.amounts || [];
      _0x3d4e78 = 8;
      _0x1ed8af += _0x1f4499;
      _0x13293c += _0x975fb2;
      const _0x1824a7 = getFirstThree(_0xd4d549);
      var _0x152b5e = 6;
      const _0x2c5e56 = _0x3b19f3.length > 0 ? "(" + [...new Set(_0x3b19f3)].join(", ") + ")" : "";
      _0x152b5e = "lpkmnm".split("").reverse().join("");
      _0x48a61f.push("号码 " + _0x1824a7 + "xxx: 成功 " + _0x1f4499 + " 次, 失败 " + _0x975fb2 + " 次 " + _0x2c5e56);
    }
    _0x48a61f.push("总计: 成功 " + _0x1ed8af + " 次, 失败 " + _0x13293c + " 次");
    return _0x48a61f.join("\n");
  }
}
var _0xd11cdb = 12;
const exchangeStats = new ExchangeStats();
_0xd11cdb = 8;
var _0xb968cd;
const now = new Date();
_0xb968cd = 11;
var _0x9d3b = 10;
const yf = "" + now.getFullYear() + (now.getMonth() + 1).toString().padStart(2, "0");
_0x9d3b = "fojdgi";
var _0x43bdee;
let dhjl = {};
_0x43bdee = 3;
try {
  var _0x356e7d = 13;
  const data = fs.readFileSync("gol.费话换豆金信电".split("").reverse().join(""), "8ftu".split("").reverse().join(""));
  _0x356e7d = 2;
  dhjl = JSON.parse(data);
} catch (_0x4ec6c8) {
  dhjl = {};
}
!dhjl[yf] && (dhjl[yf] = {});
function printn(_0xd2187e) {
  var _0x569860;
  const _0x2e0242 = new Date().toLocaleTimeString("zh-CN", {
    hour12: false,
    fractionalSecondDigits: 3
  });
  _0x569860 = 12;
  console.log("\n[" + _0x2e0242 + "] " + _0xd2187e);
}
function getFirstThree(_0x4cb861) {
  if (typeof _0x4cb861 === "number") {
    return _0x4cb861.toString().slice(0, 3);
  } else {
    if (typeof _0x4cb861 === "gnirts".split("").reverse().join("")) {
      return _0x4cb861.slice(0, 3);
    } else {
      throw new TypeError("rorre".split("").reverse().join(""));
    }
  }
}
function runTime(_0x23f81e, _0x5a24d7, _0x351316) {
  var _0x5cbabb = 9;
  const _0x5dc92e = new Date();
  _0x5cbabb = "khbjgk".split("").reverse().join("");
  _0x5dc92e.setHours(_0x23f81e, _0x5a24d7, _0x351316, 0);
  return Math.floor(_0x5dc92e.getTime() / 1000);
}
function generateUUID(_0x32182b) {
  var _0x11af8a = 10;
  _0x32182b = "abcdef0123456789";
  _0x11af8a = 13;
  const _0x1b84ff = [Array.from({
    length: 8
  }, () => _0x32182b[Math.floor(Math.random() * _0x32182b.length)]).join(""), Array.from({
    length: 4
  }, () => _0x32182b[Math.floor(Math.random() * _0x32182b.length)]).join(""), "4" + Array.from({
    length: 3
  }, () => _0x32182b[Math.floor(Math.random() * _0x32182b.length)]).join(""), Array.from({
    length: 4
  }, () => _0x32182b[Math.floor(Math.random() * _0x32182b.length)]).join(""), Array.from({
    length: 12
  }, () => _0x32182b[Math.floor(Math.random() * _0x32182b.length)]).join("")];
  return _0x1b84ff;
}
var _0x3fcf2a = 7;
const key = Buffer.from("1234567`90koiuyhgtfrdews", "8ftu".split("").reverse().join(""));
_0x3fcf2a = 3;
var _0x16e = 13;
const iv = Buffer.alloc(8, 0);
_0x16e = 3;
function encrypt(_0x5e2100) {
  const _0x399d9d = {
    BatMz: "createCipheriv",
    ERzzo: "cbc-3ede-s" + "de".split("").reverse().join(""),
    thSTv: "update",
    irMjp: "utf8",
    BHgCU: "xeh",
    nVodA: function (_0x98599d, _0x497864) {
      return _0x98599d + _0x497864;
    },
    HnPRK: function (_0x470162, _0x61450e) {
      return _0x470162 ^ _0x61450e;
    },
    IgOxV: function (_0x2cf479, _0x38d728) {
      return _0x2cf479 ^ _0x38d728;
    },
    pFBNi: "final",
    wRDNs: "hex"
  };
  const _0x5b67f9 = crypto[_0x399d9d.BatMz](_0x399d9d.ERzzo.split("").reverse().join(""), key, iv);
  var _0x49b415;
  let _0x52a1a4 = _0x5b67f9[_0x399d9d.thSTv](_0x5e2100, _0x399d9d.irMjp, _0x399d9d.BHgCU.split("").reverse().join(""));
  _0x49b415 = _0x399d9d.nVodA(_0x399d9d.HnPRK(830894, 830887), _0x399d9d.IgOxV(919070, 919066));
  _0x52a1a4 += _0x5b67f9[_0x399d9d.pFBNi](_0x399d9d.wRDNs);
  return _0x52a1a4;
}
function decrypt(_0x5577ec) {
  const _0x581bd8 = crypto.createDecipheriv("des-ede3-cbc", key, iv);
  var _0x233652 = 18;
  let _0x1b4a2e = _0x581bd8.update(_0x5577ec, "xeh".split("").reverse().join(""), "utf8");
  _0x233652 = 18;
  _0x1b4a2e += _0x581bd8.final("8ftu".split("").reverse().join(""));
  return _0x1b4a2e;
}
var _0xb6a5d;
const publicKeyB64 = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB\n-----END PUBLIC KEY-----";
_0xb6a5d = 7;
const publicKeyData = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+ugG5A8cZ3FqUKDwM57GM4io6JGcStivT8UdGt67PEOihLZTw3P7371+N47PrmsCpnTRzbTgcupKtUv8ImZalYk65dU8rjC/ridwhw9ffw2LBwvkEnDkkKKRi2liWIItDftJVBiWOh17o6gfbPoNrWORcAdcbpk2L+udld5kZNwIDAQAB\n-----END PUBLIC KEY-----";
function b64(_0x15a560) {
  const _0x3e958e = new JSEncrypt();
  _0x3e958e.setPublicKey(publicKeyB64);
  return _0x3e958e.encrypt(_0x15a560);
}
function encryptPara(_0x1dcd34) {
  const _0x5d5e4f = {
    DdbpX: function (_0x54bcd6, _0x9b7c1) {
      return _0x54bcd6 !== _0x9b7c1;
    },
    HakFB: "string",
    pKBJj: "stringify",
    lmWxw: "ocglll",
    aEWGy: "setPublicK" + "ye".split("").reverse().join(""),
    ZHeDx: function (_0x23662e, _0x429946) {
      return _0x23662e - _0x429946;
    },
    REEXx: function (_0x1b3109, _0x79423) {
      return _0x1b3109 ^ _0x79423;
    },
    WzmXV: function (_0x448616, _0xd763b3) {
      return _0x448616 ^ _0xd763b3;
    },
    iRXiI: function (_0x295924, _0x40e693) {
      return _0x295924 ^ _0x40e693;
    },
    Yaasn: function (_0x1a5a1c, _0xc4c2f9) {
      return _0x1a5a1c < _0xc4c2f9;
    },
    jiGrZ: "length",
    bwzop: "slice",
    FSIlm: function (_0x4ed959, _0x5afcc9) {
      return _0x4ed959 + _0x5afcc9;
    },
    bqQHZ: function (_0x18a5c6, _0x36285d) {
      return _0x18a5c6 ^ _0x36285d;
    },
    JgfZY: function (_0x4b8f20, _0x585492) {
      return _0x4b8f20 ^ _0x585492;
    },
    bDuCb: "encrypt",
    AGkTX: function (_0x1c43b3, _0x3aaff0) {
      return _0x1c43b3 ^ _0x3aaff0;
    },
    EcCIP: "push",
    UCCmq: "from",
    nMuQs: "46esab",
    eLrDZ: "concat",
    PEwMM: "toString",
    WqTlS: "hex"
  };
  _0x5d5e4f.DdbpX(typeof _0x1dcd34, _0x5d5e4f.HakFB) && (_0x1dcd34 = JSON[_0x5d5e4f.pKBJj](_0x1dcd34));
  var _0x5859f4;
  const _0x3d1cda = new JSEncrypt();
  _0x5859f4 = _0x5d5e4f.lmWxw.split("").reverse().join("");
  _0x3d1cda[_0x5d5e4f.aEWGy](publicKeyData);
  var _0x2bd074;
  const _0x42cb72 = _0x5d5e4f.ZHeDx(_0x5d5e4f.REEXx(576856, 576984), _0x5d5e4f.WzmXV(794329, 794322));
  _0x2bd074 = _0x5d5e4f.REEXx(492813, 492808);
  const _0x5196c5 = [];
  for (let _0x216277 = _0x5d5e4f.iRXiI(310960, 310960); _0x5d5e4f.Yaasn(_0x216277, _0x1dcd34[_0x5d5e4f.jiGrZ]); _0x216277 += _0x42cb72) {
    const _0x5f5da7 = _0x1dcd34[_0x5d5e4f.bwzop](_0x216277, _0x5d5e4f.FSIlm(_0x216277, _0x42cb72));
    var _0x3ad357 = _0x5d5e4f.FSIlm(_0x5d5e4f.bqQHZ(644436, 644436), _0x5d5e4f.JgfZY(127011, 127014));
    const _0x4b6b39 = _0x3d1cda[_0x5d5e4f.bDuCb](_0x5f5da7);
    _0x3ad357 = _0x5d5e4f.AGkTX(416192, 416196);
    _0x4b6b39 && _0x5196c5[_0x5d5e4f.EcCIP](Buffer[_0x5d5e4f.UCCmq](_0x4b6b39, _0x5d5e4f.nMuQs.split("").reverse().join("")));
  }
  return Buffer[_0x5d5e4f.eLrDZ](_0x5196c5)[_0x5d5e4f.PEwMM](_0x5d5e4f.WqTlS);
}
function encodePhone(_0x4cbf56) {
  return _0x4cbf56.split("").map(_0x1b98b2 => String.fromCharCode(_0x1b98b2.charCodeAt(0) + 2)).join("");
}
async function userLoginNormal(_0x14b044, _0x1c4a26) {
  const _0x414669 = {
    gqTKe: function (_0x39f5c5) {
      return _0x39f5c5();
    },
    fuzEA: "toISOString",
    LuWHA: "replace",
    wAtOC: "[-:]",
    mdAij: "\\..*",
    ULKoG: "slice",
    BFYKA: function (_0x521e70, _0x2483e4) {
      return _0x521e70 ^ _0x2483e4;
    },
    DPaPV: function (_0x1195c7, _0x1a921d) {
      return _0x1195c7 + _0x1a921d;
    },
    Nnlzn: function (_0x18bb46, _0x50ff45) {
      return _0x18bb46 ^ _0x50ff45;
    },
    trScN: function (_0x24dfc5, _0x2a2ac9) {
      return _0x24dfc5 ^ _0x2a2ac9;
    },
    BQYaO: function (_0x43ac18, _0x4a0442) {
      return _0x43ac18 ^ _0x4a0442;
    },
    PRgcs: function (_0x12f122, _0x306857) {
      return _0x12f122 ^ _0x306857;
    },
    SEHsD: function (_0x86a293, _0x5124dc) {
      return _0x86a293 + _0x5124dc;
    },
    DpIUd: function (_0x5733f8, _0x479d42) {
      return _0x5733f8 ^ _0x479d42;
    },
    txVFz: "userLoginNormal",
    uwGva: "#11.3.0#channel35#Xiaomi Redmi K30 Pro#",
    nbiaZ: "20002",
    JFaEs: "110003",
    IPnmx: "Sid98s",
    gmBBw: function (_0x3e764f, _0xae183b) {
      return _0x3e764f(_0xae183b);
    },
    nagXk: "test",
    kQqdI: function (_0x2ed5fe, _0x25522e) {
      return _0x2ed5fe + _0x25522e;
    },
    fqHeh: function (_0x395f2c, _0xabcb12) {
      return _0x395f2c + _0xabcb12;
    },
    AWYXV: function (_0x3c4b45, _0x2ba7e8) {
      return _0x3c4b45 ^ _0x2ba7e8;
    },
    EJuAm: function (_0x5dd87b, _0x1cabad) {
      return _0x5dd87b ^ _0x1cabad;
    },
    qfnma: function (_0x279e6c, _0x4c441d) {
      return _0x279e6c(_0x4c441d);
    },
    JgKgP: function (_0x5b85fe, _0x6b135e) {
      return _0x5b85fe ^ _0x6b135e;
    },
    aNDfh: "post",
    JXcEd: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
    aqQyy: "data",
    tKXQu: "responseDa" + "at".split("").reverse().join(""),
    kzWPb: "loginSuccessResult",
    pcrCk: function (_0x107582, _0x2157e5, _0x57b272, _0x10837c) {
      return _0x107582(_0x2157e5, _0x57b272, _0x10837c);
    },
    tbLWO: "userId",
    WVxKp: "token",
    pcLQW: function (_0x12759d, _0x2b7fa0) {
      return _0x12759d + _0x2b7fa0;
    },
    YhrTu: function (_0x2cc201, _0x14aca4) {
      return _0x2cc201 ^ _0x14aca4;
    },
    atVnt: function (_0xa2975, _0x3cca50) {
      return _0xa2975 ^ _0x3cca50;
    },
    xBqKY: "error",
    zOUyk: ":败失录登",
    YvTFq: "message"
  };
  const _0x3f7483 = _0x414669.gqTKe(generateUUID);
  var _0xca4918;
  const _0x796269 = new Date()[_0x414669.fuzEA]()[_0x414669.LuWHA](new RegExp(_0x414669.wAtOC, "g"), "")[_0x414669.LuWHA](new RegExp(_0x414669.mdAij, ""), "")[_0x414669.ULKoG](_0x414669.BFYKA(505841, 505841), _0x414669.BFYKA(448230, 448232));
  _0xca4918 = _0x414669.DPaPV(_0x414669.Nnlzn(474734, 474732), _0x414669.Nnlzn(905287, 905280));
  const _0x579c3c = "iPhone 14 15.4." + _0x3f7483[_0x414669.trScN(720254, 720254)] + _0x3f7483[_0x414669.BQYaO(220870, 220871)] + _0x14b044 + _0x796269 + _0x1c4a26[_0x414669.ULKoG](_0x414669.BQYaO(553365, 553365), _0x414669.PRgcs(167741, 167739)) + "0$$$0.";
  var _0x33d1c9 = _0x414669.SEHsD(_0x414669.DpIUd(760524, 760527), _0x414669.BQYaO(536000, 536004));
  const _0x1ee2ef = {
    headerInfos: {
      code: _0x414669.txVFz,
      timestamp: _0x796269,
      broadAccount: "",
      broadToken: "",
      clientType: _0x414669.uwGva,
      shopId: _0x414669.nbiaZ,
      source: _0x414669.JFaEs,
      sourcePassword: _0x414669.IPnmx,
      token: "",
      userLoginName: _0x414669.gmBBw(encodePhone, _0x14b044)
    },
    content: {
      attach: _0x414669.nagXk,
      fieldData: {
        loginType: "4",
        accountType: "",
        loginAuthCipherAsymmertric: _0x414669.gmBBw(b64, _0x579c3c),
        deviceUid: _0x414669.kQqdI(_0x414669.fqHeh(_0x3f7483[_0x414669.AWYXV(856996, 856996)], _0x3f7483[_0x414669.EJuAm(728953, 728952)]), _0x3f7483[_0x414669.AWYXV(476263, 476261)]),
        phoneNum: _0x414669.qfnma(encodePhone, _0x14b044),
        isChinatelecom: "0",
        systemVersion: "12",
        authentication: _0x414669.gmBBw(encodePhone, _0x1c4a26)
      }
    }
  };
  _0x33d1c9 = _0x414669.fqHeh(_0x414669.JgKgP(482560, 482563), _0x414669.EJuAm(780525, 780524));
  try {
    const _0x52136e = await axiosInstance[_0x414669.aNDfh](_0x414669.JXcEd, _0x1ee2ef);
    const _0xa828e9 = _0x52136e[_0x414669.aqQyy][_0x414669.tKXQu][_0x414669.aqQyy][_0x414669.kzWPb];
    if (_0xa828e9) {
      var _0x2a989e;
      const _0x5964e3 = await _0x414669.pcrCk(getTicket, _0x14b044, _0xa828e9[_0x414669.tbLWO], _0xa828e9[_0x414669.WVxKp]);
      _0x2a989e = _0x414669.pcLQW(_0x414669.YhrTu(642323, 642321), _0x414669.atVnt(594313, 594318));
      return _0x5964e3;
    }
    return false;
  } catch (_0x2e0451) {
    console[_0x414669.xBqKY](_0x414669.zOUyk.split("").reverse().join(""), _0x2e0451[_0x414669.YvTFq]);
    return false;
  }
}
async function getTicket(_0x16782e, _0x1b2dac, _0xdc3e0e) {
  const _0x5ea274 = new Date().toISOString().replace(new RegExp("]:-[".split("").reverse().join(""), "g"), "").replace(new RegExp("\\..*", ""), "").slice(0, 14);
  var _0xbd4233;
  const _0x225ce2 = "<Request>\n    <HeaderInfos>\n      <Code>getSingle</Code>\n      <Timestamp>" + _0x5ea274 + "</Timestamp>\n      <BroadAccount></BroadAccount>\n      <BroadToken></BroadToken>\n      <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n      <ShopId>20002</ShopId>\n      <Source>110003</Source>\n      <SourcePassword>Sid98s</SourcePassword>\n      <Token>" + _0xdc3e0e + "</Token>\n      <UserLoginName>" + _0x16782e + "</UserLoginName>\n    </HeaderInfos>\n    <Content>\n      <Attach>test</Attach>\n      <FieldData>\n        <TargetId>" + encrypt(_0x1b2dac) + "</TargetId>\n        <Url>4a6862274835b451</Url>\n      </FieldData>\n    </Content>\n  </Request>";
  _0xbd4233 = "oqiopk".split("").reverse().join("");
  try {
    var _0x466a06;
    const _0x223538 = await axiosInstance.post("https://appgologin.189.cn:9031/map/clientXML", _0x225ce2, {
      headers: {
        "user-agent": "CtClient;10.4.1;Android;13;22081212C;NTQzNzgx!#!MTgwNTg1",
        "Content-Type": "application/xml"
      }
    });
    _0x466a06 = 5;
    const _0x461e5a = new XMLParser();
    const _0x248bb9 = _0x461e5a.parse(_0x223538.data);
    const _0xfdc6a6 = _0x248bb9.Response?.["Ticket"];
    if (_0xfdc6a6) {
      return decrypt(_0xfdc6a6);
    }
    return false;
  } catch (_0x29e26e) {
    console.error(":败失tekcit取获".split("").reverse().join(""), _0x29e26e.message);
    return false;
  }
}
async function conversionRights(_0x17466f, _0x510aae, _0x253dab, _0x59585b) {
  try {
    const _0x359898 = {
      id: _0x510aae,
      accId: _0x59585b,
      showType: "9003",
      showEffect: "8",
      czValue: "0"
    };
    var _0x427901 = 9;
    const _0x38545a = encryptPara(_0x359898);
    _0x427901 = 3;
    printn(getFirstThree(_0x17466f) + ":开始兑换");
    const _0x3f6738 = await axiosInstance.post("sthgiRreviecer/esidarap/ngis-tj/nc.981.krappaw//:sptth".split("").reverse().join(""), {
      para: _0x38545a
    }, {
      headers: _0x253dab.headers
    });
    const _0x23ee51 = _0x3f6738.data;
    printn(getFirstThree(_0x17466f) + ":" + JSON.stringify(_0x23ee51));
    if (_0x3f6738.data.includes("功成换兑".split("").reverse().join("")) || _0x3f6738.data.includes("已兑换")) {
      !dhjl[yf]["等级话费"] && (dhjl[yf]["等级话费"] = "");
      dhjl[yf]["等级话费"] += "#" + _0x17466f;
      fs.writeFileSync("电信金豆换话费.log", JSON.stringify(dhjl, null, 2), "utf8");
      exchangeStats.addSuccess(_0x17466f, "话费");
      return;
    } else {
      exchangeStats.addFailed(_0x17466f, JSON.stringify(_0x23ee51));
    }
  } catch (_0x15f7ab) {
    printn(getFirstThree(_0x17466f) + ": 兑换请求发生错误: " + _0x15f7ab.message);
    exchangeStats.addFailed(_0x17466f, _0x15f7ab.message);
  }
}
async function exchangeForDay(_0x29514d, _0x319f82, _0x2a5fc1, _0x517043, _0x3f6ed7) {
  const _0x289099 = Array.from({
    length: parseInt(runNum)
  }, (_0x25c0c7, _0x1e0d50) => _0x1e0d50 * _0x517043);
  console.log("号码 " + getFirstThree(_0x29514d) + "xxx: 开始发送 " + runNum + " 次兑换请求");
  for (const _0x194e40 of _0x289099) {
    await new Promise(_0x52c4f0 => setTimeout(_0x52c4f0, _0x194e40 * 1000));
    await conversionRights(_0x29514d, _0x2a5fc1, _0x319f82, _0x3f6ed7);
  }
}
async function getLevelRightsList(_0x5e0d10, _0x801e6c, _0xcd629d) {
  const _0x2cb21b = {
    calkM: "hg_qd_djqydh",
    ftnQK: "20001",
    KqGNM: function (_0x2919d3, _0xa220a) {
      return _0x2919d3(_0xa220a);
    },
    cJJnG: function (_0xd16ac6, _0x304ce1) {
      return _0xd16ac6 + _0x304ce1;
    },
    OVmoJ: function (_0x249040, _0x3a2299) {
      return _0x249040 ^ _0x3a2299;
    },
    pfQQr: "post",
    WniNo: "ofnIthgiRleveLyreuq/esidarap/ngis-tj/nc.981.krappaw//:sptth",
    JWXHP: "headers",
    ShMle: "data",
    qSKyh: function (_0x475781, _0x4b8c20) {
      return _0x475781 === _0x4b8c20;
    },
    ysXyp: "code",
    pWMVH: function (_0xd62803, _0x55ef84) {
      return _0xd62803 ^ _0x55ef84;
    },
    xOVfW: "log",
    BfHSv: "stringify",
    twHbr: "currentLev" + "le".split("").reverse().join(""),
    TZzRQ: function (_0x1db524, _0x3e9f81) {
      return _0x1db524 + _0x3e9f81;
    },
    CSmfb: "filter",
    uyYHE: "map",
    rfYBS: function (_0x12636e, _0x3378b8) {
      return _0x12636e + _0x3378b8;
    },
    BiIxL: "message"
  };
  try {
    const _0xc7ecb2 = {
      type: _0x2cb21b.calkM,
      accId: _0xcd629d,
      shopId: _0x2cb21b.ftnQK
    };
    var _0x5b7395;
    const _0x268b5c = _0x2cb21b.KqGNM(encryptPara, _0xc7ecb2);
    _0x5b7395 = _0x2cb21b.cJJnG(_0x2cb21b.OVmoJ(323131, 323131), _0x2cb21b.OVmoJ(445826, 445831));
    const _0x3df37e = await axiosInstance[_0x2cb21b.pfQQr](_0x2cb21b.WniNo.split("").reverse().join(""), {
      para: _0x268b5c
    }, {
      headers: _0x801e6c[_0x2cb21b.JWXHP]
    });
    const _0x339489 = _0x3df37e[_0x2cb21b.ShMle];
    if (_0x2cb21b.qSKyh(_0x339489[_0x2cb21b.ysXyp], _0x2cb21b.pWMVH(182646, 182503))) {
      console[_0x2cb21b.xOVfW]("获取失败:" + JSON[_0x2cb21b.BfHSv](_0x339489) + ",原因大概是sign过期了");
      return null;
    }
    const _0x57d5f2 = _0x2cb21b.KqGNM(parseInt, _0x339489[_0x2cb21b.twHbr]);
    const _0x2f1738 = _0x2cb21b.cJJnG("V", _0x57d5f2);
    var _0x10338f = _0x2cb21b.TZzRQ(_0x2cb21b.OVmoJ(204017, 204020), _0x2cb21b.pWMVH(751437, 751437));
    const _0x2183f7 = _0x339489[_0x2f1738][_0x2cb21b.CSmfb](_0x1273a9 => _0x1273a9.title && _0x1273a9.title.includes("话费"))[_0x2cb21b.uyYHE](_0x5e23a5 => _0x5e23a5.activityId);
    _0x10338f = _0x2cb21b.rfYBS(_0x2cb21b.OVmoJ(506515, 506517), _0x2cb21b.pWMVH(745350, 745344));
    return _0x2183f7;
  } catch (_0x3f2a31) {
    console[_0x2cb21b.xOVfW]("获取失败,重试一次: " + _0x3f2a31[_0x2cb21b.BiIxL]);
    return null;
  }
}
async function getSign(_0xcff381) {
  try {
    const _0x23daf7 = await axiosInstance.get("https://wappark.189.cn/jt-sign/ssoHomLogin?ticket=" + _0xcff381, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Linux; Android 13; 22081212C Build/TKQ1.220829.002) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.97 Mobile Safari/537.36"
      }
    });
    const _0x1b277c = _0x23daf7.data;
    if (_0x1b277c.resoultCode === "0") {
      var _0x2b3d77 = 16;
      const _0x5b8777 = _0x1b277c.sign;
      _0x2b3d77 = 11;
      const _0x4560e2 = _0x1b277c.accId;
      return {
        sign: _0x5b8777,
        accId: _0x4560e2
      };
    } else {
      console.log("获取sign失败[" + _0x1b277c.resoultCode + "]: " + JSON.stringify(_0x1b277c));
    }
  } catch (_0x2f4a40) {
    console.log("getSign 发生错误: " + _0x2f4a40.message);
  }
  return null;
}
async function qgNight(_0x2a2c94, _0x10ca9c, _0x4b1e6c, _0x4e74cc, _0x3f8653) {
  var _0x317be4;
  _0x3f8653 = 0;
  _0x317be4 = "pccjih";
  _0x4e74cc && (_0x3f8653 = runTime(23, 58, 30));
  if (_0x3f8653 > Math.floor(Date.now() / 1000) + _0x4b1e6c) {
    const _0x5831eb = _0x3f8653 - Math.floor(Date.now() / 1000) - _0x4b1e6c;
    console.log("当前时间:" + new Date().toLocaleTimeString("NC-hz".split("").reverse().join("")) + (",跟设定的时间不同," + "待等".split("").reverse().join("")) + _0x5831eb + "秒开始兑换每天一次的");
    await new Promise(_0xecddbe => setTimeout(_0xecddbe, _0x5831eb * 1000));
  }
  const _0x1e61a1 = await getSign(_0x10ca9c);
  if (!_0x1e61a1) {
    console.log("。ngis取获未".split("").reverse().join(""));
    return;
  }
  const _0x2ccd98 = {
    headers: {
      "User-Agent": "Mozilla/5.0 (Linux; Android 13; 22081212C Build/TKQ1.220829.002) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.97 Mobile Safari/537.36",
      sign: _0x1e61a1.sign
    }
  };
  const _0x53db52 = await getLevelRightsList(_0x2a2c94, _0x2ccd98, _0x1e61a1.accId);
  if (_0x53db52 && _0x53db52.length > 0) {
    console.log("获取到了rightsId:" + _0x53db52[0]);
  } else {
    console.log("未能获取rightsId。");
    return;
  }
  if (_0x4e74cc) {
    var _0x299706;
    const _0x10abe3 = runTime(23, 59, 59) + 0.5;
    _0x299706 = 2;
    const _0xa277b3 = _0x10abe3 - Math.floor(Date.now() / 1000) - _0x4b1e6c;
    printn("待等".split("").reverse().join("") + _0xa277b3 + "s");
    await new Promise(_0x2b5afe => setTimeout(_0x2b5afe, _0xa277b3 * 1000));
  }
  await exchangeForDay(_0x2a2c94, _0x2ccd98, _0x53db52[0], 0.1, _0x1e61a1.accId);
}
async function qgDay(_0xdc1bec, _0x40a385, _0x3c292f, _0x1dc52e) {
  console.log("白天兑换逻辑 - 号码: " + getFirstThree(_0xdc1bec));
}
async function main(_0x259945, _0x5bfa52, _0x115ba9) {
  const _0x240ce3 = [];
  const _0x4badef = process.env.dxdl;
  if (!_0x4badef) {
    console.log("式格 码密#号账 为置配请，量变境环 ldxd 置设未 :误错".split("").reverse().join(""));
    return;
  }
  var _0x4b755c;
  const _0x111b0b = _0x4badef.split("&");
  _0x4b755c = 14;
  for (const _0x3eed64 of _0x111b0b) {
    var _0x5385f5 = 6;
    const _0x5e4d4e = _0x3eed64.split("#");
    _0x5385f5 = "qcjecl";
    if (_0x5e4d4e.length !== 2) {
      console.log("跳过无效账号格式: " + _0x3eed64 + "，请使用 账号#密码 格式");
      continue;
    }
    const [_0x2ad6fb, _0x3a6b1b] = _0x5e4d4e;
    !dhjl[yf]["等级话费"] && (dhjl[yf]["等级话费"] = "");
    if (dhjl[yf]["等级话费"].includes(_0x2ad6fb)) {
      printn(_0x2ad6fb + " 等级话费 已兑换");
      continue;
    }
    printn(getFirstThree(_0x2ad6fb) + "开始登录");
    var _0x5b2b61 = 0;
    const _0x19f746 = await userLoginNormal(_0x2ad6fb, _0x3a6b1b);
    _0x5b2b61 = "babmgg";
    _0x19f746 ? _0x115ba9 > 15 ? _0x240ce3.push(qgNight(_0x2ad6fb, _0x19f746, _0x259945, _0x5bfa52)) : _0x240ce3.push(qgDay(_0x2ad6fb, _0x19f746, _0x259945, _0x5bfa52)) : printn(_0x2ad6fb + " 登录失败");
  }
  await Promise.all(_0x240ce3);
}
async function run(_0x59fc46, _0xb1a123) {
  console.log("配置信息: 每个账号发送 " + runNum + " 次兑换请求");
  !verifyLicense() && (console.log("程序终止: 卡密验证失败！变量 dx0d 值【QQ群1029832220】"), process.exit(1));
  const _0x262446 = new Date().getHours();
  console.log(" :为时小前当".split("").reverse().join("") + _0x262446);
  var _0xf4fbcf;
  _0xf4fbcf = 17;
  if (_0x262446 > 0 && _0x262446 < 10) {
    console.log("当前小时为: " + _0x262446 + " 已过0点但未到10点，开始准备抢十点场次");
    _0x59fc46 = runTime(9, 59, 8);
  } else {
    _0x262446 >= 10 && _0x262446 <= 14 ? (console.log("当前小时为: " + _0x262446 + "次场点四十抢备准始开，点41到未但点01过已 ".split("").reverse().join("")), _0x59fc46 = runTime(13, 59, 8)) : (console.log(" :为时小前当".split("").reverse().join("") + _0x262446 + " 已过14点，开始准备抢凌晨场次"), _0x59fc46 = runTime(23, 57, 57));
  }
  const _0x163fd = true;
  if (_0x59fc46 > Math.floor(Date.now() / 1000)) {
    const _0x237a76 = _0x59fc46 - Math.floor(Date.now() / 1000);
    console.log("未到时间，计算后差异: " + _0x237a76 + " 秒");
    _0x163fd && (console.log("注意: 一定要先测试，根据自身网络设定重发次数和多账号策略，避免抢购过早或过晚"), console.log("开始等待..."), await new Promise(_0x5ddd8a => setTimeout(_0x5ddd8a, _0x237a76 * 1000)));
  }
  var _0x5f4446;
  _0xb1a123 = 0;
  _0x5f4446 = 0;
  var _0xa9955e;
  const _0x5ae931 = _0xb1a123 > 0 ? _0xb1a123 : 0;
  _0xa9955e = "ipfomg";
  try {
    await main(_0x5ae931, _0x163fd, _0x262446);
  } catch (_0x1f3ac0) {
    console.log("脚本执行过程中发生异常: " + _0x1f3ac0.message);
  } finally {
    var _0x423d9b = 6;
    const _0x38a5cd = exchangeStats.generateReport();
    _0x423d9b = 4;
    console.log("\n" + "=".repeat(50));
    console.log(_0x38a5cd);
    console.log("=".repeat(50));
    console.log("所有任务都已执行完毕!");
  }
}
run().catch(console.error);
