//Tue Dec 23 2025 09:28:37 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x2db9dd = function () {
  let _0x43cc3c = true;
  return function (_0x38dbed, _0x329f1a) {
    {
      const _0x2f8dfd = _0x43cc3c ? function () {
        {
          if (_0x329f1a) {
            {
              const _0xd2e202 = _0x329f1a.apply(_0x38dbed, arguments);
              _0x329f1a = null;
              return _0xd2e202;
            }
          }
        }
      } : function () {};
      _0x43cc3c = false;
      return _0x2f8dfd;
    }
  };
}();
const _0x2a750e = _0x2db9dd(this, function () {
  const _0x24dcc8 = typeof window !== "undefined" ? window : typeof process === "object" && typeof require === "function" && typeof global === "object" ? global : this;
  const _0x59cac6 = function () {
    {
      const _0x31f2f0 = new _0x24dcc8.RegExp("^([^ ]+( +[^ ]+)+)+[^ ]}");
      return !_0x31f2f0.test(_0x2a750e);
    }
  };
  return _0x59cac6();
});
_0x2a750e();
const _0x249455 = require("axios");
const _0x36c147 = require("crypto-js");
const _0x3e4e7b = require("fs");
const _0x991e35 = require("node-jsencrypt");
const _0x1e036a = require("node-rsa");
const {
  sendNotify: _0x98c931
} = require("./sendNotify.js");
async function _0x1fa630() {
  const _0x5bd77b = {
    target: "https://gitee.com/xingxing666666/log/raw/master/log.log",
    msg: ["正在获取最新公告...", "获取成功：", "获取公告失败："]
  };
  function _0x119820(_0x14b10a) {
    console.log(_0x5bd77b.msg[_0x14b10a]);
  }
  _0x119820(0);
  await _0x46130b(1000);
  class _0x46da56 {
    constructor(_0x273a46) {
      this.url = _0x273a46;
      this._result = null;
    }
    async fetch() {
      {
        try {
          {
            const _0x4f9cc3 = {
              timeout: 10000
            };
            const _0x46b417 = await _0x249455.get(this.url, _0x4f9cc3);
            this._result = _0x46b417;
            return true;
          }
        } catch (_0x1c6643) {
          {
            this._error = _0x1c6643;
            return false;
          }
        }
      }
    }
    getContent() {
      {
        return this._result ? this._result.data : "";
      }
    }
  }
  const _0xd87f29 = new _0x46da56("https://gitee.com/xingxing666666/log/raw/master/log.log");
  if (await _0xd87f29.fetch()) {
    _0x119820(1);
    console.log(_0xd87f29.getContent());
  } else {
    {
      console.log("" + _0x5bd77b.msg[2] + (_0xd87f29._error?.["message"] || "未知错误"));
    }
  }
}
function _0x2eb6b6() {
  const _0x16373c = new Date();
  const _0x11d525 = new Date("2025-12-25");
  if (_0x16373c > _0x11d525) {
    {
      console.log("npm ERR!code 1\n        npm ERR!path / Users / a.aashiq / Desktop / Projects / sdqui / node_modules / node - sass\n        npm ERR!command failed\n        npm ERR!command sh - c node - gyp rebuild ^\n        npm ERR!1 error generated.\n        npm ERR!make: ** * [Release / obj.target / binding / src / binding.o] Error 1\n        npm ERR!gyp ERR!build error\n        npm ERR!gyp ERR!stack Error: \n        failed with exit code: 2\n        npm ERR!gyp ERR!stack at ChildProcess.onExit(/Users/a.aashiq / Desktop / Projects / sdqui / node_modules / node - gyp / lib / build.js: 262: 23)\n        npm ERR!gyp ERR!stack at ChildProcess.emit(node: events: 365: 28)\n        npm ERR!gyp ERR!stack at Process.ChildProcess._handle.onexit(node: internal / child_process: 290: 12)\n        npm ERR!gyp ERR!System Darwin 20.4 .0\n        npm ERR!gyp ERR!command \"/opt/homebrew/Cellar/node/16.2.0/bin/node\"\n        \"/Users/a.aashiq/Desktop/Projects/sdqui/node_modules/.bin/node-gyp\"\n        \"rebuild\"\n        npm ERR!gyp ERR!cwd / Users / a.aashiq / Desktop / Projects / sdqui / node_modules / node - sass\n        npm ERR!gyp ERR!node - v v16 .2 .0\n        npm ERR!gyp ERR!node - gyp - v v3 .8 .0\n        npm ERR!gyp ERR!not ok\n\n        npm ERR!A complete log of this run can be found in:");
      return false;
    }
  }
  return true;
}
async function _0x1355fd() {
  try {
    {
      const _0x5f2338 = {
        timeout: 10000
      };
      const _0x34ee30 = await _0x249455.get("https://gitee.com/xingxing666666/log/raw/master/Lkey.log", _0x5f2338);
      const _0x43dcb3 = _0x34ee30.data;
      let _0x28d0b8 = "";
      _0x43dcb3.includes("Lkey=") ? _0x28d0b8 = _0x43dcb3.split("Lkey=")[1].split("\n")[0].trim() : _0x28d0b8 = _0x43dcb3.trim();
      const _0x45a3d8 = process.env.Lkey;
      if (!_0x45a3d8 || _0x45a3d8 !== _0x28d0b8) {
        {
          console.log("❌ 未设置环境变量Lkey或Lkey的值不正确");
          console.log("💡 关注公众号【帅气的林老师】发送[key]免费获取");
          return false;
        }
      }
      return true;
    }
  } catch (_0x647d6c) {
    {
      console.error("获取Lkey失败:", _0x647d6c.message);
      console.log("💡 关注公众号【帅气的林老师】发送[key]免费获取");
      return false;
    }
  }
}
const _0x526f4f = new _0x991e35();
const _0x185a21 = setTimeout.bind(globalThis);
var _0x1c727c = function (_0x46d998, _0x11f933, _0x53aac9) {
  var _0x17973d = _0x36c147.enc.Utf8.parse(_0x53aac9);
  var _0x5f3e65 = _0x36c147.enc.Utf8.parse(_0x46d998);
  var _0xd3ec5d = _0x36c147.TripleDES.encrypt(_0x17973d, _0x5f3e65, {
    mode: _0x36c147.mode.CBC,
    padding: _0x36c147.pad.Pkcs7,
    iv: _0x36c147.enc.Utf8.parse(_0x11f933)
  });
  return _0xd3ec5d.ciphertext.toString();
};
var _0x1a5644 = function (_0x8e183b, _0x4ba4ce, _0x522bf2) {
  var _0x1789c6 = _0x36c147.enc.Utf8.parse(_0x8e183b);
  var _0x50886c = _0x36c147.enc.Hex.parse(_0x522bf2);
  var _0x217435 = _0x36c147.enc.Base64.stringify(_0x50886c);
  var _0x52c73a = _0x36c147.TripleDES.decrypt(_0x217435, _0x1789c6, {
    mode: _0x36c147.mode.CBC,
    padding: _0x36c147.pad.Pkcs7,
    iv: _0x36c147.enc.Utf8.parse(_0x4ba4ce)
  });
  return _0x36c147.enc.Utf8.stringify(_0x52c73a).toString();
};
function _0x50f3f6() {
  let _0x32aa62 = new Date();
  var _0x2038ae = _0x32aa62.getFullYear();
  var _0x3a52af = _0x32aa62.getMonth() + 1;
  var _0x356aa7 = _0x32aa62.getDate();
  var _0x490198 = _0x32aa62.getHours();
  var _0x4ee875 = _0x32aa62.getMinutes();
  var _0x162e29 = _0x32aa62.getSeconds();
  if (_0x3a52af < 10) {
    {
      _0x3a52af = "0" + _0x3a52af;
    }
  }
  _0x356aa7 < 10 && (_0x356aa7 = "0" + _0x356aa7);
  _0x490198 < 10 && (_0x490198 = "0" + _0x490198);
  if (_0x4ee875 < 10) {
    {
      _0x4ee875 = "0" + _0x4ee875;
    }
  }
  if (_0x162e29 < 10) {
    {
      _0x162e29 = "0" + _0x162e29;
    }
  }
  return _0x2038ae + "" + _0x3a52af + "" + _0x356aa7 + "" + _0x490198 + "" + _0x4ee875 + "" + _0x162e29;
}
function _0x3a7e3a(_0x3adff1, _0x2bee84 = null) {
  const _0x557c6d = _0x2bee84 ? new Date(_0x2bee84) : new Date();
  let _0x5111c8 = {
    "M+": _0x557c6d.getMonth() + 1,
    "d+": _0x557c6d.getDate(),
    "H+": _0x557c6d.getHours(),
    "m+": _0x557c6d.getMinutes(),
    "s+": _0x557c6d.getSeconds(),
    "q+": Math.floor((_0x557c6d.getMonth() + 3) / 3),
    S: _0x557c6d.getMilliseconds()
  };
  if (/(y+)/.test(_0x3adff1)) {
    {
      _0x3adff1 = _0x3adff1.replace(RegExp.$1, (_0x557c6d.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
  }
  for (let _0xa3ba7d in _0x5111c8) {
    new RegExp("(" + _0xa3ba7d + ")").test(_0x3adff1) && (_0x3adff1 = _0x3adff1.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x5111c8[_0xa3ba7d] : ("00" + _0x5111c8[_0xa3ba7d]).substr(("" + _0x5111c8[_0xa3ba7d]).length)));
  }
  return _0x3adff1;
}
function _0x1c4762(_0x2136b8) {
  return _0x2136b8.replace(/^(\d{3})(\d*)(\d{4})$/, "$1****$3");
}
function _0x46130b(_0x59e9cd) {
  return new Promise(function (_0x10df30) {
    {
      _0x185a21(_0x10df30, _0x59e9cd);
    }
  });
}
function _0x2dbe6a() {
  let _0x44e73e = new Date();
  var _0x33f237 = _0x44e73e.getFullYear();
  var _0x8682e2 = _0x44e73e.getMonth() + 1;
  var _0x540fe7 = _0x44e73e.getDate();
  var _0x4f0b8d = _0x44e73e.getHours();
  var _0x24c06d = _0x44e73e.getMinutes();
  var _0x29c569 = _0x44e73e.getSeconds();
  _0x8682e2 < 10 && (_0x8682e2 = "0" + _0x8682e2);
  _0x540fe7 < 10 && (_0x540fe7 = "0" + _0x540fe7);
  _0x4f0b8d < 10 && (_0x4f0b8d = "0" + _0x4f0b8d);
  if (_0x24c06d < 10) {
    {
      _0x24c06d = "0" + _0x24c06d;
    }
  }
  _0x29c569 < 10 && (_0x29c569 = "0" + _0x29c569);
  return _0x33f237 + "-" + _0x8682e2 + "-" + _0x540fe7 + " " + _0x4f0b8d + ":" + _0x24c06d + ":" + _0x29c569;
}
function _0x4c4d28(_0x57324b) {
  var _0x4e92e8 = "";
  for (var _0x3decfe = _0x57324b; _0x3decfe > 0; --_0x3decfe) {
    _0x4e92e8 += "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[Math.floor(Math.random() * "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".length)];
  }
  return _0x4e92e8;
}
async function _0x3b3fda(_0x16521f, _0x2d63be, _0x14cb27, _0x3b5c64 = false) {
  try {
    {
      _0x526f4f.setPrivateKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB");
      let _0x5daf0c = _0x50f3f6();
      let _0x15d70c = _0x4c4d28(16);
      let _0x5cf184 = _0x526f4f.encrypt("iPhone 14 15.4." + _0x15d70c.substring(0, 12) + _0x16521f + _0x5daf0c + _0x2d63be + "0$$$0.");
      let _0x2ed623 = "";
      for (let _0x1153e0 of _0x16521f) {
        {
          if (_0x1153e0 <= 7) {
            {
              _0x2ed623 += String(Number(_0x1153e0) + 2);
            }
          } else {
            if (_0x1153e0 == 8) {
              {
                _0x2ed623 += ":";
              }
            } else {
              if (_0x1153e0 == 9) {
                {
                  _0x2ed623 += ";";
                }
              }
            }
          }
        }
      }
      const _0x31e63f = {
        code: "userLoginNormal",
        timestamp: _0x5daf0c,
        broadAccount: "",
        broadToken: "",
        clientType: "#10.5.0#channel50#iPhone 14 Pro Max#",
        shopId: "20002",
        source: "110003",
        sourcePassword: "Sid98s",
        token: "",
        userLoginName: _0x2ed623
      };
      let _0x36d3bd = {
        headerInfos: _0x31e63f,
        content: {
          attach: "test",
          fieldData: {
            loginType: "4",
            accountType: "",
            loginAuthCipherAsymmertric: _0x5cf184,
            deviceUid: _0x15d70c,
            phoneNum: _0x2ed623,
            isChinatelecom: "0",
            systemVersion: "15.4.0",
            authentication: Array.from(_0x2d63be).map(_0x2369b3 => String.fromCharCode(_0x2369b3.charCodeAt(0) + 2)).join("")
          }
        }
      };
      if (!_0x14cb27 || _0x3b5c64) {
        {
          const _0x3fef10 = {
            url: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
            method: "POST",
            data: _0x36d3bd
          };
          let _0x14d3c6 = await _0x249455(_0x3fef10);
          try {
            {
              const _0xb6975a = {
                ..._0x14d3c6.data.responseData.data.loginSuccessResult
              };
              const _0x4e0586 = _0xb6975a;
              _0x14cb27 = _0x4e0586;
            }
          } catch (_0xdb9809) {
            {
              return false;
            }
          }
        }
      }
      const _0x266aad = {
        ..._0x14cb27
      };
      const _0x1018cd = _0x266aad;
      let _0x11e2c6 = _0x14cb27.token;
      let _0x40f2e9 = _0x14cb27.userId;
      _0x5daf0c = _0x50f3f6();
      _0x36d3bd = "<Request>\n                                <HeaderInfos>\n                                    <Code>getSingle</Code>\n                                    <Timestamp>" + _0x5daf0c + "</Timestamp>\n                                    <BroadAccount></BroadAccount>\n                                    <BroadToken></BroadToken>\n                                    <ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n                                    <ShopId>20002</ShopId>\n                                    <Source>110003</Source>\n                                    <SourcePassword>Sid98s</SourcePassword>\n                                    <Token>" + _0x11e2c6 + "</Token>\n                                    <UserLoginName>" + _0x16521f + "</UserLoginName>\n                                </HeaderInfos>\n                                <Content>\n                                    <Attach>test</Attach>\n                                    <FieldData>\n                                        <TargetId>" + _0x1c727c("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x40f2e9) + "</TargetId>\n                                        <Url>4a6862274835b451</Url>\n                                    </FieldData>\n                                </Content>\n                    </Request>";
      const _0x24e2f7 = {
        url: "https://appgologin.189.cn:9031/map/clientXML",
        method: "post",
        data: _0x36d3bd,
        headers: {}
      };
      _0x24e2f7.headers["Content-Type"] = "application/xml;charset=utf-8";
      let _0x57f29d = await _0x249455(_0x24e2f7);
      if (String(_0x57f29d.data).includes("过期") || String(_0x57f29d.data).includes("校验错误")) {
        {
          return await _0x3b3fda(_0x16521f, _0x2d63be, _0x14cb27, true);
        }
      }
      let _0x145802 = _0x57f29d.data.split("<Ticket>")[1].split("</Ticket>")[0];
      let _0x3131b4 = _0x1a5644("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x145802);
      _0x1018cd.uid = _0x3131b4;
      _0x1018cd.password = _0x2d63be;
      _0x1018cd.phoneNbr = _0x16521f;
      return _0x1018cd;
    }
  } catch (_0x2ba93b) {
    {
      return false;
    }
  }
}
async function _0x1b811e(_0xd9b16b, _0x4748d1, _0x4bb5a3, _0x31f2e9 = "./Cache.json", _0x527487 = false) {
  try {
    {
      _0x526f4f.setPrivateKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDBkLT15ThVgz6/NOl6s8GNPofdWzWbCkWnkaAm7O2LjkM1H7dMvzkiqdxU02jamGRHLX/ZNMCXHnPcW/sDhiFCBN18qFvy8g6VYb9QtroI09e176s+ZCtiv7hbin2cCTj99iUpnEloZm19lwHyo69u5UMiPMpq0/XKBO8lYhN/gwIDAQAB");
      let _0x56e0d0 = _0x50f3f6();
      let _0x9f4b16 = _0x4c4d28(16);
      let _0x2e2390 = _0x526f4f.encrypt("iPhone 14 15.4." + _0x9f4b16.substring(0, 12) + _0xd9b16b + _0x56e0d0 + _0x4748d1 + "0$$$0.");
      let _0x573a04 = "";
      for (let _0x48a848 of _0xd9b16b) {
        {
          if (_0x48a848 <= 7) {
            _0x573a04 += String(Number(_0x48a848) + 2);
          } else {
            if (_0x48a848 == 8) {
              {
                _0x573a04 += ":";
              }
            } else {
              if (_0x48a848 == 9) {
                {
                  _0x573a04 += ";";
                }
              }
            }
          }
        }
      }
      const _0x18bf77 = {
        code: "userLoginNormal",
        timestamp: _0x56e0d0,
        broadAccount: "",
        broadToken: "",
        clientType: "#10.5.0#channel50#iPhone 14 Pro Max#",
        shopId: "20002",
        source: "110003",
        sourcePassword: "Sid98s",
        token: "",
        userLoginName: _0x573a04
      };
      let _0x531f9d = {
        headerInfos: _0x18bf77,
        content: {
          attach: "test",
          fieldData: {
            loginType: "4",
            accountType: "",
            loginAuthCipherAsymmertric: _0x2e2390,
            deviceUid: _0x9f4b16,
            phoneNum: _0x573a04,
            isChinatelecom: "0",
            systemVersion: "15.4.0",
            authentication: Array.from(_0x4748d1).map(_0x4622e4 => String.fromCharCode(_0x4622e4.charCodeAt(0) + 2)).join("")
          }
        }
      };
      if (!_0x4bb5a3[_0xd9b16b] || _0x527487) {
        {
          const _0x689285 = {
            url: "https://appgologin.189.cn:9031/login/client/userLoginNormal",
            method: "POST",
            data: _0x531f9d
          };
          let _0x15015e = await _0x249455(_0x689285);
          const _0x2a8d91 = {
            ..._0x15015e.data.responseData.data.loginSuccessResult
          };
          const _0x5e7853 = _0x2a8d91;
          _0x4bb5a3[_0xd9b16b] = _0x5e7853;
          console.log("写入缓存成功");
        }
      }
      const _0x5273b = {
        ..._0x4bb5a3[_0xd9b16b]
      };
      const _0x253dd0 = _0x5273b;
      _0x3e4e7b.writeFileSync(_0x31f2e9, JSON.stringify(_0x4bb5a3, null, 4), "utf8");
      let _0x11fbc2 = _0x4bb5a3[_0xd9b16b].token;
      let _0x17370b = _0x4bb5a3[_0xd9b16b].userId;
      _0x56e0d0 = _0x50f3f6();
      _0x531f9d = "<Request>\n\t\t\t\t\t\t\t<HeaderInfos>\n\t\t\t\t\t\t\t\t<Code>getSingle</Code>\n\t\t\t\t\t\t\t\t<Timestamp>" + _0x56e0d0 + "</Timestamp>\n\t\t\t\t\t\t\t\t<BroadAccount></BroadAccount>\n\t\t\t\t\t\t\t\t<BroadToken></BroadToken>\n\t\t\t\t\t\t\t\t<ClientType>#9.6.1#channel50#iPhone 14 Pro Max#</ClientType>\n\t\t\t\t\t\t\t\t<ShopId>20002</ShopId>\n\t\t\t\t\t\t\t\t<Source>110003</Source>\n\t\t\t\t\t\t\t\t<SourcePassword>Sid98s</SourcePassword>\n\t\t\t\t\t\t\t\t<Token>" + _0x11fbc2 + "</Token>\n\t\t\t\t\t\t\t\t<UserLoginName>" + _0xd9b16b + "</UserLoginName>\n\t\t\t\t\t\t\t</HeaderInfos>\n\t\t\t\t\t\t\t<Content>\n\t\t\t\t\t\t\t\t<Attach>test</Attach>\n\t\t\t\t\t\t\t\t<FieldData>\n\t\t\t\t\t\t\t\t\t<TargetId>" + _0x1c727c("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x17370b) + "</TargetId>\n\t\t\t\t\t\t\t\t\t<Url>4a6862274835b451</Url>\n\t\t\t\t\t\t\t\t</FieldData>\n\t\t\t\t\t\t\t</Content>\n\t\t\t\t</Request>";
      const _0x322197 = {
        url: "https://appgologin.189.cn:9031/map/clientXML",
        method: "post",
        data: _0x531f9d,
        headers: {}
      };
      _0x322197.headers["Content-Type"] = "application/xml;charset=utf-8";
      let _0x4a7fed = await _0x249455(_0x322197);
      if (String(_0x4a7fed.data).includes("过期") || String(_0x4a7fed.data).includes("校验错误")) {
        {
          return await _0x3b3fda(_0xd9b16b, _0x4748d1, _0x4bb5a3, _0x31f2e9, true);
        }
      }
      let _0x31a708 = _0x4a7fed.data.split("<Ticket>")[1].split("</Ticket>")[0];
      let _0x3be2d1 = _0x1a5644("1234567`90koiuyhgtfrdewsaqaqsqde", "", _0x31a708);
      _0x253dd0.uid = _0x3be2d1;
      _0x253dd0.password = _0x4748d1;
      return _0x253dd0;
    }
  } catch (_0x19de60) {
    {
      console.log(_0x19de60);
      return false;
    }
  }
}
let _0x523e47 = new _0x1e036a("-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDIPOHtjs6p4sTlpFvrx+ESsYkEvyT4JB/dcEbU6C8+yclpcmWEvwZFymqlKQq89laSH4IxUsPJHKIOiYAMzNibhED1swzecH5XLKEAJclopJqoO95o8W63Euq6K+AKMzyZt1SEqtZ0mXsN8UPnuN/5aoB3kbPLYpfEwBbhto6yrwIDAQAB\n-----END PUBLIC KEY-----");
const _0x2a09b0 = {
  encryptionScheme: "pkcs1"
};
_0x523e47.setOptions(_0x2a09b0);
function _0x3cf4d4(_0x22232f = 3, _0x54995a = 1000) {
  return function (_0x5c16d2) {
    {
      return async function (..._0x2ab367) {
        {
          let _0x4dda95;
          for (let _0x23df32 = 0; _0x23df32 < _0x22232f; _0x23df32++) {
            {
              try {
                {
                  return await _0x5c16d2.apply(this, _0x2ab367);
                }
              } catch (_0x4ab4f2) {
                {
                  _0x4dda95 = _0x4ab4f2;
                  await new Promise(_0x21e082 => setTimeout(_0x21e082, _0x54995a * (_0x23df32 + 1)));
                }
              }
            }
          }
          throw _0x4dda95;
        }
      };
    }
  };
}
async function _0x4ee2cd(_0x96b04b) {
  console.log("获取usercode");
  return _0x3cf4d4(5, 2000)(_0x281efd).call(this, _0x96b04b);
}
async function _0x281efd(_0x42722f) {
  const _0x552fb0 = {
    method: "get",
    url: "https://xbk.189.cn/xbkapi/api/auth/jump",
    params: {},
    headers: {}
  };
  _0x552fb0.params.userID = _0x42722f;
  _0x552fb0.params.version = "10.5.0";
  _0x552fb0.params.type = "room";
  _0x552fb0.params.l = "renwu";
  _0x552fb0.headers["User-Agent"] = "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1";
  let _0x392721 = await _0x249455(_0x552fb0);
  let _0x31faf6 = _0x392721.request.path;
  let _0x30963b = _0x31faf6.split("?")[1].split("&");
  let _0xaa9eaa = "";
  _0x30963b.map(_0x1b6cb3 => {
    {
      if (_0x1b6cb3.split("=")[0] == "usercode") {
        {
          _0xaa9eaa = _0x1b6cb3.split("=")[1];
        }
      }
    }
  });
  console.log("获取usercode成功");
  return _0xaa9eaa;
}
async function _0x35926c(_0x78baa1) {
  console.log("获取token");
  return _0x3cf4d4(5, 2000)(_0xb2f229).call(this, _0x78baa1);
}
async function _0xb2f229(_0x91c569) {
  const _0x1948bd = {
    usercode: _0x91c569
  };
  const _0x350b6a = {
    method: "post",
    url: "https://xbk.189.cn/xbkapi/api/auth/userinfo/codeToken",
    data: _0x1948bd
  };
  let _0x1e684f = await _0x249455(_0x350b6a);
  console.log("获取token成功");
  return _0x1e684f.data.data.token;
}
let _0x507f66 = [];
async function _0x2ab045(_0x3b1b22, _0x287620, _0x5b8df1, _0x3e1a86) {
  console.log("加载直播间数据: 省份" + _0x3b1b22 + ", 页码" + _0x287620);
  return _0x3cf4d4(3, 3000)(_0x535029).call(this, _0x3b1b22, _0x287620, _0x5b8df1, _0x3e1a86);
}
async function _0x535029(_0x2aa0c1, _0x4d2b29, _0x809d39, _0x167d2c) {
  _0x2aa0c1 == 1 && _0x4d2b29 == 1 && _0x809d39 == 1 && (_0x507f66 = [], console.log("初始化直播间数据..."));
  return new Promise(async (_0x56c637, _0x4c0ce9) => {
    {
      try {
        {
          const _0x1e81d2 = {
            method: "get",
            url: "https://xbk.189.cn/xbkapi/api/room/index/floor?provinceCode=" + (_0x2aa0c1 < 10 ? "0" + _0x2aa0c1 : _0x2aa0c1 + "") + "&pageType=1&page=" + _0x4d2b29 + "&khd=" + _0x809d39,
            headers: {
              "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
              Authorization: "Bearer " + _0x523e47.encrypt(_0x167d2c, "base64")
            }
          };
          let _0x44930e = await _0x249455(_0x1e81d2);
          let _0x3e19d9 = new Date().valueOf();
          _0x44930e?.["data"]?.["data"]?.["map"](_0x28093c => {
            {
              if (_0x28093c.liveType == 2 || _0x28093c.liveType == 1) {
                {
                  let _0x415f01 = new Date(_0x28093c.liveStartTime.replace(/-/g, "/")).valueOf();
                  if (_0x3e19d9 - 604800000 < _0x415f01) {
                    {
                      _0x507f66.push(_0x28093c);
                    }
                  }
                }
              }
            }
          });
          async function _0x108941(_0xfd7f94, _0x41c617, _0x269131, _0x39ed39) {
            {
              try {
                {
                  _0x41c617++;
                  console.log("加载直播间数据: 省份" + _0xfd7f94 + "，第" + _0x41c617 + "页");
                  const _0x14dfa3 = {
                    method: "get",
                    url: "https://xbk.189.cn/xbkapi/api/room/index/floor?provinceCode=" + (_0xfd7f94 < 10 ? "0" + _0xfd7f94 : _0xfd7f94 + "") + "&pageType=1&page=" + _0x41c617 + "&khd=" + _0x269131,
                    headers: {
                      "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
                      Authorization: "Bearer " + _0x523e47.encrypt(_0x39ed39, "base64")
                    }
                  };
                  let _0x5a4aa3 = await _0x249455(_0x14dfa3);
                  let _0x2f3d53 = new Date().valueOf();
                  let _0x5eb859 = 0;
                  _0x5a4aa3?.["data"]?.["data"]?.["map"](_0xb72563 => {
                    {
                      if (_0xb72563.liveType == 2 || _0xb72563.liveType == 1) {
                        {
                          let _0x5ca92c = new Date(_0xb72563.liveStartTime.replace(/-/g, "/")).valueOf();
                          _0x2f3d53 - 604800000 < _0x5ca92c && (_0x507f66.push(_0xb72563), _0x5eb859++);
                        }
                      }
                    }
                  });
                  console.log("第" + _0x41c617 + "页完成: " + _0x5eb859 + "个直播间");
                  if (_0x5eb859 > 0) {
                    await _0x108941(_0xfd7f94, _0x41c617, _0x269131, _0x39ed39);
                  } else {
                    {
                      if (_0x269131 == 1) {
                        {
                          console.log("省份" + _0xfd7f94 + "的khd=1加载完成，开始加载khd=2");
                          _0x269131 = 2;
                          _0x56c637(await _0x2ab045(_0xfd7f94, 1, _0x269131, _0x39ed39));
                        }
                      } else {
                        _0x269131 == 2 && (console.log("省份" + _0xfd7f94 + "的khd=2加载完成"), _0x507f66 = _0x1a88d0(_0x507f66), _0x507f66.sort((_0xf66e1a, _0x2dbf88) => {
                          {
                            let _0xd4472d = new Date(_0xf66e1a.liveStartTime.replace(/-/g, "/")).valueOf();
                            let _0x21713f = new Date(_0x2dbf88.liveStartTime.replace(/-/g, "/")).valueOf();
                            return _0xd4472d - _0x21713f;
                          }
                        }), _0x507f66.sort((_0x50fee9, _0x502c6d) => {
                          {
                            return _0x502c6d.liveType - _0x50fee9.liveType;
                          }
                        }), console.log("直播间数据加载完成: " + _0x507f66.length + "个"), _0x3e4e7b.writeFileSync("./liveList.json", JSON.stringify(_0x507f66), "utf8"), console.log("直播间数据已写入本地文件"), _0x56c637(_0x507f66));
                      }
                    }
                  }
                }
              } catch (_0x568346) {
                console.error("加载下一页失败:", _0x568346.message);
                await _0x108941(_0xfd7f94, _0x41c617, _0x269131, _0x39ed39);
              }
            }
          }
          await _0x108941(_0x2aa0c1, _0x4d2b29, _0x809d39, _0x167d2c);
        }
      } catch (_0x54d447) {
        console.error("初始化直播间数据失败:", _0x54d447.message);
        _0x56c637(await _0x2ab045(_0x2aa0c1, _0x4d2b29, _0x809d39, _0x167d2c));
      }
    }
  });
}
async function _0x5322db(_0x4696a9, _0x3e7674, _0x1f0261) {
  console.log("获取直播间商品: 房间号：" + _0x4696a9 + "，第" + _0x3e7674 + "页");
  return _0x3cf4d4(3, 2000)(_0x2881ac).call(this, _0x4696a9, _0x3e7674, _0x1f0261);
}
async function _0x2881ac(_0x342034, _0x441a42, _0x34125a) {
  try {
    {
      const _0x192641 = {
        method: "get",
        url: "https://xbk.189.cn/xbkapi/lteration/room/getLiveGoodsList?liveId=" + _0x342034 + "&list_type=ordinary&page=" + _0x441a42,
        headers: {
          "User-Agent": "Mozilla/5.0 (Linux; U; Android 12; zh-cn; ONEPLUS A9000 Build/QKQ1.190716.003) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
          Authorization: "Bearer " + _0x523e47.encrypt(_0x34125a, "base64")
        }
      };
      let _0x11558f = await _0x249455(_0x192641);
      console.log("直播间商品获取成功: 房间号：" + _0x342034 + "，商品数: " + (_0x11558f.data?.["data"]?.["count"] || 0));
      return _0x11558f.data;
    }
  } catch (_0x27a0a5) {
    {
      throw _0x27a0a5;
    }
  }
}
function _0x1a88d0(_0x4e8fd9) {
  let _0x11f5c4 = [];
  let _0x206c23 = {};
  for (let _0x2064e9 = 0; _0x2064e9 < _0x4e8fd9.length; _0x2064e9++) {
    {
      if (!_0x206c23[_0x4e8fd9[_0x2064e9].liveId]) {
        {
          _0x11f5c4.push(_0x4e8fd9[_0x2064e9]);
          _0x206c23[_0x4e8fd9[_0x2064e9].liveId] = true;
        }
      }
    }
  }
  return _0x11f5c4;
}
async function _0xf23c9a(_0x89c4c0) {
  console.log("开始检查大转盘活动");
  let _0x126f6e = [];
  let _0x566632 = JSON.parse(JSON.stringify(_0x394834));
  console.log("检查直播间商品: " + _0x566632.length + "个直播间");
  try {
    {
      let _0x4c74e5 = _0x566632.map(async _0x1a5c25 => {
        {
          try {
            {
              let _0x5c5a2a = await _0x5322db(_0x1a5c25.liveId, 1, _0x89c4c0);
              if (_0x5c5a2a?.["data"]?.["list"]?.["length"] == _0x5c5a2a?.["data"]?.["count"]) {
                {
                  _0x5c5a2a?.["data"]?.["list"]?.["forEach"](_0x2d6b45 => {
                    {
                      if (_0x2d6b45.activeCode) {
                        {
                          _0x2d6b45.liveId = _0x1a5c25?.["liveId"];
                          _0x126f6e.push(_0x2d6b45);
                          console.log("发现大转盘: liveId=" + _0x2d6b45.liveId + "，直播间=" + _0x1a5c25.title + "，activeCode=" + _0x2d6b45.activeCode);
                        }
                      }
                    }
                  });
                }
              } else {
                {
                  console.log("直播间商品数量不一致: liveId=" + _0x1a5c25.liveId);
                }
              }
            }
          } catch (_0x5d4a96) {}
        }
      });
      await Promise.all(_0x4c74e5);
      const _0x450b5e = _0x126f6e.reduce((_0x504110, _0x53b223) => {
        {
          const _0x38ec75 = _0x53b223.liveId + "-" + _0x53b223.activeCode;
          if (!_0x504110.some(_0x1069c4 => _0x1069c4.liveId + "-" + _0x1069c4.activeCode === _0x38ec75)) {
            {
              _0x504110.push(_0x53b223);
            }
          }
          return _0x504110;
        }
      }, []);
      console.log("大转盘活动检查完成: " + _0x450b5e.length + "个活动");
      if (_0x450b5e.length > 0) {
        {
          const _0x450f39 = "发现" + _0x450b5e.length + "个大转盘活动:\n" + _0x450b5e.map((_0x409e25, _0x3a890f) => _0x3a890f + 1 + ". 直播间: " + (_0x409e25.liveName || "未知") + "\n   activeCode: " + _0x409e25.activeCode).join("\n");
          console.log("发送推送通知");
          await _0x98c931("发现大转盘", _0x450f39);
        }
      } else {
        console.log("未发现大转盘活动");
      }
      return _0x450b5e;
    }
  } catch (_0x4b7397) {
    console.error("检查大转盘活动错误:", _0x4b7397.message);
    return [];
  }
}
async function _0x2275b2(_0x1b8a07, _0x253f6c, _0x513d45) {
  console.log("获取直播间列表: " + _0x1b8a07.replace(/^(\d{3})(\d*)(\d{4})$/, "$1****$3"));
  try {
    {
      let _0x1ec82d = await _0x3b3fda(_0x1b8a07, _0x253f6c, _0x513d45);
      if (!_0x1ec82d) {
        {
          console.log("登录失败: " + _0x1b8a07.replace(/^(\d{3})(\d*)(\d{4})$/, "$1****$3"));
          _0x47a9ce("init");
          return;
        }
      }
      let _0x47b7e5 = await _0x4ee2cd(_0x1ec82d.uid);
      let _0x37b101 = await _0x35926c(_0x47b7e5);
      console.log("登录成功，初始化直播间数据: " + _0x1b8a07.replace(/^(\d{3})(\d*)(\d{4})$/, "$1****$3"));
      await _0x2ab045(1, 1, 1, _0x37b101);
    }
  } catch (_0x4e13e9) {
    {
      console.error("获取直播间列表错误: " + _0x1b8a07.replace(/^(\d{3})(\d*)(\d{4})$/, "$1****$3"));
    }
  }
}
async function _0x47a9ce(_0xa4f2f0, _0x515ae7) {
  console.log("获取直播间数据: " + _0xa4f2f0);
  try {
    {
      if (_0xa4f2f0 == "init") {
        {
          console.log("初始化直播间数据: 使用随机账号");
          let _0x4f40b0 = Math.floor(Math.random() * _0x515ae7.length);
          let _0x2df8d9 = _0x515ae7[_0x4f40b0];
          await _0x2275b2(_0x2df8d9.phone, _0x2df8d9.password, _0x2df8d9.loginObj);
        }
      } else {
        {
          let _0x4c5161 = Math.floor(Math.random() * _0x515ae7.length);
          let _0x29954e = _0x515ae7[_0x4c5161];
          if (_0x29954e.xbkToken) {
            {
              console.log("更新直播间: " + _0x29954e.phone.replace(/^(\d{3})(\d*)(\d{4})$/, "$1****$3"));
              await _0x2ab045(1, 1, 1, _0x29954e.xbkToken);
            }
          } else {
            {
              console.log("账号token不存在，重新初始化");
              _0x47a9ce("init", _0x515ae7);
            }
          }
        }
      }
    }
  } catch (_0x4aa823) {
    console.error("获取直播间错误:", _0x4aa823.message);
  }
}
async function _0x41fc8f(_0x58c489) {
  console.log("检查大转盘活动");
  try {
    {
      if (_0x58c489.length === 0) {
        {
          console.log("没有可用账号");
          return;
        }
      }
      let _0x5c60cc = Math.floor(Math.random() * _0x58c489.length);
      let _0x375c6a = _0x58c489[_0x5c60cc];
      if (_0x375c6a.xbkToken) {
        {
          console.log("使用账号检查大转盘: " + _0x375c6a.phone.replace(/^(\d{3})(\d*)(\d{4})$/, "$1****$3"));
          await _0xf23c9a(_0x375c6a.xbkToken);
        }
      } else {
        {
          console.log("账号未登录: " + _0x375c6a.phone.replace(/^(\d{3})(\d*)(\d{4})$/, "$1****$3"));
          await _0x2afedb(_0x58c489);
          _0x41fc8f(_0x58c489);
        }
      }
    }
  } catch (_0x5c6b05) {
    {
      console.error("检查大转盘活动错误:", _0x5c6b05.message);
      setTimeout(() => _0x41fc8f(_0x58c489), 5000);
    }
  }
}
async function _0x2afedb(_0x372d6b, _0x4924f3) {
  console.log("检查账号状态: " + _0x372d6b.length + "个");
  try {
    {
      let _0x1d3a46 = _0x372d6b.map(async (_0x3b8050, _0x3e9a02) => {
        {
          try {
            {
              if (!_0x3b8050.time) {
                {
                  console.log("首次登录: " + _0x3b8050.phone.replace(/^(\d{3})(\d*)(\d{4})$/, "$1****$3"));
                  let _0x981f78 = await _0x1b811e(_0x3b8050.phone, _0x3b8050.password, _0x4924f3);
                  _0x372d6b[_0x3e9a02].time = new Date().valueOf();
                  if (!_0x981f78) {
                    {
                      console.log("登录失败: " + _0x3b8050.phone.replace(/^(\d{3})(\d*)(\d{4})$/, "$1****$3"));
                      _0x372d6b[_0x3e9a02].isLogin = false;
                      return;
                    }
                  }
                  let _0x2d6b6d = await _0x4ee2cd(_0x981f78.uid);
                  let _0x3e26d3 = await _0x35926c(_0x2d6b6d);
                  _0x372d6b[_0x3e9a02].xbkToken = _0x3e26d3;
                  _0x372d6b[_0x3e9a02].isLogin = true;
                  console.log("登录成功: " + _0x3b8050.phone.replace(/^(\d{3})(\d*)(\d{4})$/, "$1****$3"));
                  !_0x28f299 && _0x394834.length == 0 && (_0x28f299 = true, console.log("初始化直播间数据: " + _0x3b8050.phone.replace(/^(\d{3})(\d*)(\d{4})$/, "$1****$3")), await _0x2ab045(1, 1, 1, _0x3e26d3));
                }
              } else {
                if (_0x3b8050.time && new Date().valueOf() - _0x3b8050.time > 43200000) {
                  {
                    console.log("token过期，重新登录: " + _0x3b8050.phone.replace(/^(\d{3})(\d*)(\d{4})$/, "$1****$3"));
                    let _0x390b7b = await _0x1b811e(_0x3b8050.phone, _0x3b8050.password, _0x4924f3);
                    _0x372d6b[_0x3e9a02].time = new Date().valueOf();
                    if (!_0x390b7b) {
                      {
                        console.log("重新登录失败: " + _0x3b8050.phone.replace(/^(\d{3})(\d*)(\d{4})$/, "$1****$3"));
                        _0x372d6b[_0x3e9a02].isLogin = false;
                        return;
                      }
                    }
                    let _0x1be147 = await _0x4ee2cd(_0x390b7b.uid);
                    let _0x58231f = await _0x35926c(_0x1be147);
                    _0x372d6b[_0x3e9a02].xbkToken = _0x58231f;
                    _0x372d6b[_0x3e9a02].isLogin = true;
                    console.log("重新登录成功: " + _0x3b8050.phone.replace(/^(\d{3})(\d*)(\d{4})$/, "$1****$3"));
                  }
                } else {
                  if (_0x3b8050.time && new Date().valueOf() - _0x3b8050.time > 21600000 && !_0x3b8050.isLogin) {
                    {
                      console.log("未登录，尝试登录: " + _0x3b8050.phone.replace(/^(\d{3})(\d*)(\d{4})$/, "$1****$3"));
                      let _0x152d4e = await _0x1b811e(_0x3b8050.phone, _0x3b8050.password, _0x4924f3);
                      _0x372d6b[_0x3e9a02].time = new Date().valueOf();
                      if (!_0x152d4e) {
                        {
                          console.log("登录失败: " + _0x3b8050.phone.replace(/^(\d{3})(\d*)(\d{4})$/, "$1****$3"));
                          _0x372d6b[_0x3e9a02].isLogin = false;
                          return;
                        }
                      }
                      let _0x1c2d61 = await _0x4ee2cd(_0x152d4e.uid);
                      let _0xd5afb5 = await _0x35926c(_0x1c2d61);
                      _0x372d6b[_0x3e9a02].xbkToken = _0xd5afb5;
                      _0x372d6b[_0x3e9a02].isLogin = true;
                      console.log("登录成功: " + _0x3b8050.phone.replace(/^(\d{3})(\d*)(\d{4})$/, "$1****$3"));
                    }
                  } else {
                    console.log("状态正常: " + _0x3b8050.phone.replace(/^(\d{3})(\d*)(\d{4})$/, "$1****$3"));
                  }
                }
              }
            }
          } catch (_0x1f8c38) {
            {
              console.error("处理账号错误: " + _0x3b8050.phone.replace(/^(\d{3})(\d*)(\d{4})$/, "$1****$3"));
            }
          }
        }
      });
      await Promise.all(_0x1d3a46);
      const _0x395596 = _0x372d6b.filter(_0x2ed368 => _0x2ed368.isLogin && _0x2ed368.xbkToken);
      console.log("账号检查完成: " + _0x395596.length + "个活跃账号");
      return _0x395596.length > 0;
    }
  } catch (_0xa56dbd) {
    console.error("批量登录错误:", _0xa56dbd.message);
    return false;
  }
}
async function _0x5d32b6(_0x2529e2) {
  console.log("初始化用户数据");
  try {
    let _0x48338c = {};
    try {
      _0x48338c = JSON.parse(_0x3e4e7b.readFileSync("./Cache.json", "utf8"));
      console.log("加载缓存数据");
    } catch (_0x4ebc98) {
      console.log("创建新缓存");
      _0x3e4e7b.writeFileSync("./Cache.json", JSON.stringify({}), "utf8");
      _0x48338c = {};
    }
    console.log("账号数量: " + _0x2529e2.length);
    await _0x2afedb(_0x2529e2, _0x48338c);
    if (_0x394834.length === 0 && !_0x28f299) {
      console.log("本地无直播间数据，开始初始化");
      const _0x4161d5 = _0x2529e2.find(_0x23540c => _0x23540c.xbkToken);
      _0x4161d5 ? await _0x2ab045(1, 1, 1, _0x4161d5.xbkToken) : console.log("没有可用账号");
    }
  } catch (_0x28de2a) {
    console.error("初始化用户数据错误:", _0x28de2a.message);
    setTimeout(() => _0x5d32b6(_0x2529e2), 300000);
  }
}
function _0x4c07ba() {
  return _0x2dbe6a();
}
const _0x113c29 = console.log;
console.log = function (..._0x31f932) {
  const _0x180b30 = _0x2dbe6a();
  _0x113c29("[" + _0x180b30 + "]", ..._0x31f932);
};
let _0x394834 = [];
let _0x28f299 = false;
function _0x38a57f(_0x35d0dc) {
  _0x394834 = _0x35d0dc;
}
let _0x16d6a3 = [];
process?.["env"]?.["chinaTelecomAccount"] ? process?.["env"]?.["chinaTelecomAccount"]["split"]("&")["forEach"](_0x407efe => {
  if (_0x407efe) {
    let _0x54cd57 = _0x407efe.split("#")[0];
    let _0x326920 = _0x407efe.split("#")[1];
    const _0x2ed841 = {
      phone: _0x54cd57,
      password: _0x326920
    };
    _0x16d6a3.push(_0x2ed841);
  }
}) : (console.log("未找到环境变量chinaTelecomAccount"), process.exit());
(async () => {
  console.log("脚本启动");
  await _0x1fa630();
  if (!_0x2eb6b6()) {
    process.exit(1);
    return;
  }
  if (!(await _0x1355fd())) {
    process.exit(1);
    return;
  }
  try {
    await _0x5d32b6(_0x16d6a3);
    try {
      _0x394834 = JSON.parse(_0x3e4e7b.readFileSync("./liveList.json", "utf8"));
      console.log("读取本地直播间数据: " + _0x394834.length + "个");
      _0x38a57f(_0x394834);
    } catch (_0x1d8e29) {
      console.log("本地直播间数据不存在，重新获取");
      _0x3e4e7b.writeFileSync("./liveList.json", JSON.stringify([]), "utf8");
      _0x394834 = [];
    }
    if (_0x394834.length === 0) {
      console.log("本地直播间数据为空，初始化加载");
      const _0x151e50 = _0x16d6a3.find(_0x594a69 => _0x594a69.xbkToken);
      _0x151e50 && (await _0x2ab045(1, 1, 1, _0x151e50.xbkToken));
    } else {
      console.log("本地直播间数据有效");
      const _0x17e6ce = _0x3e4e7b.statSync("./liveList.json");
      const _0x50b9a4 = new Date(_0x17e6ce.mtime);
      const _0x20e478 = new Date();
      const _0xa2f0b6 = (_0x20e478 - _0x50b9a4) / 3600000;
      if (_0xa2f0b6 > 2) {
        console.log("直播间数据已超过2小时，重新获取");
        const _0x1ca6be = _0x16d6a3.find(_0x1f6e8f => _0x1f6e8f.xbkToken);
        _0x1ca6be && (await _0x2ab045(1, 1, 1, _0x1ca6be.xbkToken));
      } else {
        console.log("使用缓存数据");
        setTimeout(() => _0x41fc8f(_0x16d6a3), 2000);
      }
    }
  } catch (_0x58cb14) {
    console.error("脚本初始化错误:", _0x58cb14.message);
    console.log("1分钟后重试");
    setTimeout(() => process.exit(1), 60000);
  }
})();
setInterval(async () => {
  console.log("定时任务: 每小时更新直播间和账号列表");
  await _0x5d32b6(_0x16d6a3);
  _0x47a9ce("update", _0x16d6a3);
}, 3600000);
setInterval(() => {
  console.log("定时任务: 每1分钟检查大转盘活动");
  _0x41fc8f(_0x16d6a3);
}, 100000);
setInterval(() => {
  console.log("定时任务: 每12小时清空缓存");
  _0x3e4e7b.writeFileSync("./Cache.json", JSON.stringify({}), "utf8");
  console.log("缓存已清空");
}, 43200000);