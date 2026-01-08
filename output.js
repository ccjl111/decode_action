//Thu Jan 08 2026 03:13:24 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const axios = require("axios"),
  CryptoJS = require("crypto-js");
class QLZxshRunner {
  constructor() {
    this.TASK_CONFIG = {
      "FIXED_WATCH_SEC": 100,
      "INTERVAL_SEC": 5,
      "TIMEOUT": 30000
    };
    this.ZXSH = process.env.ZXSH || "";
    this.ZXSHZM = process.env.ZXSHZM || "";
    this.ZXSH_NICKNAMES = process.env.ZXSH_NICKNAMES || "";
    this.results = [];
  }
  ["log"](_0x1f5739, _0x316e5a = "INFO", _0x3440aa = null) {
    const _0x525e9a = {
        "INFO": "[36m",
        "WARN": "[33m",
        "ERROR": "[31m",
        "SUCCESS": "[32m",
        "CHECK": "[35m"
      },
      _0x4c530c = "[0m",
      _0x1aeee7 = _0x3440aa ? "[" + _0x3440aa + "] " : "",
      _0x3337f6 = new Date().toLocaleTimeString();
    console.log((_0x525e9a[_0x316e5a] || _0x4c530c) + "[" + _0x3337f6 + "] [" + _0x316e5a + "] " + _0x1aeee7 + _0x1f5739 + _0x4c530c);
  }
  ["encryptMD5"](_0x49ef53) {
    return CryptoJS.MD5(_0x49ef53).toString().toUpperCase();
  }
  ["generateRandomString"](_0x31e986 = 8) {
    const _0x51c4b0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let _0x586ef5 = "";
    for (let _0x5a5e26 = 0; _0x5a5e26 < _0x31e986; _0x5a5e26++) {
      _0x586ef5 += _0x51c4b0.charAt(Math.floor(Math.random() * _0x51c4b0.length));
    }
    return _0x586ef5;
  }
  ["generateSign"](_0x148fd3, _0x356b50, _0x37b4e8) {
    const _0x9b0334 = "aB3xK9pQ2sL8mZ1nR7tY4uW0vJ5cH6gF",
      _0x322dcd = "randomNumber=" + _0x356b50 + "&timeStamp=" + _0x148fd3 + "&videoId=" + _0x37b4e8 + "&" + _0x9b0334 + "=";
    return CryptoJS.MD5(_0x322dcd).toString();
  }
  ["getHeaders"](_0x3c6cf0 = null) {
    const _0x28e548 = {
      "host": "gw.yyzqsh.cn",
      "platform": "Android",
      "version": "v1.3.0",
      "content-type": "application/json; charset=UTF-8",
      "user-agent": "okhttp/4.10.0"
    };
    if (_0x3c6cf0) {
      _0x28e548.authorization = _0x3c6cf0.trim();
    }
    return _0x28e548;
  }
  async ["loginByAccountPwd"](_0x89b94a, _0x2b344b, _0x378ae1) {
    try {
      {
        this.log("🚀 正在账号密码登录...", "CHECK", _0x378ae1);
        const _0x3cf925 = await axios.post("http://gw.yyzqsh.cn/api/web/auth/pwdLogin", {
          "phone": _0x89b94a,
          "password": this.encryptMD5(_0x2b344b)
        }, {
          "headers": this.getHeaders(),
          "timeout": this.TASK_CONFIG.TIMEOUT
        });
        if (!_0x3cf925.data || _0x3cf925.data.code !== 200) throw new Error(_0x3cf925.data?.["message"] || "登录失败");
        const _0x51a276 = _0x3cf925.data.result.token;
        this.log("✅ 账号密码登录成功", "SUCCESS", _0x378ae1);
        return _0x51a276;
      }
    } catch (_0x4d6a0b) {
      throw new Error("登录失败：" + _0x4d6a0b.message);
    }
  }
  async ["executeTokenTask"](_0x330505, _0x532fc8) {
    let _0x25bda4 = {
      "备注": _0x532fc8,
      "类型": "Token登录",
      "状态": "❌ 失败",
      "原因": ""
    };
    try {
      if (!_0x330505) throw new Error("Token为空");
      this.log("✅ 使用Token直接登录，开始执行任务", "SUCCESS", _0x532fc8);
      const _0x59084a = this.getHeaders(_0x330505),
        _0x4afba2 = await axios.post("http://gw.yyzqsh.cn/api/web/member/getMemberCenterInfo", {}, {
          "headers": _0x59084a,
          "timeout": this.TASK_CONFIG.TIMEOUT
        });
      _0x4afba2.data.result.nickName && (_0x532fc8 = _0x4afba2.data.result.nickName);
      const _0x45f856 = _0x4afba2.data.result || {};
      let _0x20d889 = _0x45f856.watchedVideoCount || 0;
      const _0x513d49 = _0x45f856.videoCount || 0;
      this.log("📊 今日进度: " + _0x20d889 + "/" + _0x513d49, "INFO", _0x532fc8);
      if (_0x20d889 >= _0x513d49 && _0x513d49 > 0) {
        _0x25bda4["状态"] = "✅ 已完成";
        return _0x25bda4;
      }
      for (let _0x25c922 = _0x20d889; _0x25c922 < _0x513d49; _0x25c922++) {
        const _0x1be006 = await axios.post("http://gw.yyzqsh.cn/api/web/member/get/internalAdvertisement", {}, {
          "headers": _0x59084a,
          "timeout": this.TASK_CONFIG.TIMEOUT
        });
        this.log("正在看广告：" + _0x1be006.data.result.description, "INFO", _0x532fc8);
        const _0x4c8b25 = _0x1be006.data.result ? _0x1be006.data.result.id : null;
        if (!_0x4c8b25) {
          this.log("无法获取广告ID，跳过", "WARN", _0x532fc8);
          continue;
        }
        this.log("📺 模拟观看广告 ID: " + _0x4c8b25 + " (" + this.TASK_CONFIG.FIXED_WATCH_SEC + "秒)", "INFO", _0x532fc8);
        await new Promise(_0x29d8b1 => setTimeout(_0x29d8b1, this.TASK_CONFIG.FIXED_WATCH_SEC * 1000));
        const _0x342d6f = Date.now().toString(),
          _0x405c75 = this.generateRandomString(8),
          _0x382d90 = this.generateSign(_0x342d6f, _0x405c75, _0x4c8b25),
          _0x4616fc = {
            ..._0x59084a,
            "timestamp": _0x342d6f,
            "randomnumber": _0x405c75,
            "sign": _0x382d90,
            "phoneinfo": "MANUFACTURER:Xiaomi,MODEL:Redmi K20 Pro,DEVICE:raphael,VERSION.RELEASE:11,"
          },
          _0xbc0210 = await axios.post("http://gw.yyzqsh.cn/api/web/newPeopleUnlock/receiveWelfareNineteen?videoId=" + _0x4c8b25, {}, {
            "headers": _0x4616fc,
            "timeout": this.TASK_CONFIG.TIMEOUT
          });
        _0xbc0210.data && _0xbc0210.data.code === 200 ? this.log("💰 贡献值领取成功，获得" + _0xbc0210.data.result.contributionPerVideo + "贡献值", "SUCCESS", _0x532fc8) : this.log("❌ 领取失败: " + _0xbc0210.data?.["message"], "WARN", _0x532fc8);
        _0x25c922 < _0x513d49 - 1 && (await new Promise(_0x232db0 => setTimeout(_0x232db0, this.TASK_CONFIG.INTERVAL_SEC * 1000)));
      }
      _0x25bda4["状态"] = "✅ 成功";
      return _0x25bda4;
    } catch (_0x21b212) {
      this.log("💥 异常: " + _0x21b212.message, "ERROR", _0x532fc8);
      _0x25bda4["原因"] = _0x21b212.message;
      return _0x25bda4;
    }
  }
  async ["executeAccountTask"](_0x237b1b, _0x425d55, _0x22a544) {
    let _0xfed1ce = {
      "备注": _0x22a544,
      "手机号": _0x237b1b,
      "类型": "账号密码登录",
      "状态": "❌ 失败",
      "原因": ""
    };
    try {
      const _0xff20c2 = await this.loginByAccountPwd(_0x237b1b, _0x425d55, _0x22a544),
        _0x3d9451 = await this.executeTokenTask(_0xff20c2, _0x22a544);
      _0xfed1ce["状态"] = _0x3d9451["状态"];
      _0xfed1ce["原因"] = _0x3d9451["原因"];
      return _0xfed1ce;
    } catch (_0x48365d) {
      this.log("💥 异常: " + _0x48365d.message, "ERROR", _0x22a544);
      _0xfed1ce["原因"] = _0x48365d.message;
      return _0xfed1ce;
    }
  }
  ["displayResults"]() {
    if (this.results.length === 0) {
      this.log("没有可显示的结果", "WARN");
      return;
    }
    const _0x2ea52b = new Set();
    this.results.forEach(_0xb95061 => Object.keys(_0xb95061).forEach(_0x3d5500 => _0x2ea52b.add(_0x3d5500)));
    const _0x1d190b = Array.from(_0x2ea52b),
      _0x5d8d8b = _0x1d190b.map(_0x1961c5 => {
        const _0x1f8201 = Math.max(...this.results.map(_0x51a3f6 => String(_0x51a3f6[_0x1961c5] || "").length));
        return Math.max(_0x1961c5.length, _0x1f8201) + 2;
      }),
      _0x304840 = _0x5d8d8b.map(_0xb17d2 => "-".repeat(_0xb17d2)).join("+");
    console.log("\n" + _0x304840);
    let _0x1f45df = "";
    _0x1d190b.forEach((_0x4c0e64, _0x3e44bb) => {
      _0x1f45df += _0x4c0e64.padEnd(_0x5d8d8b[_0x3e44bb] - 1) + "|";
    });
    console.log(_0x1f45df);
    console.log(_0x304840);
    this.results.forEach(_0x835920 => {
      let _0x4c6115 = "";
      _0x1d190b.forEach((_0x2a9953, _0x1d9d0b) => {
        const _0x4d0070 = String(_0x835920[_0x2a9953] || "");
        let _0xe8638c = _0x4d0070;
        if (_0x4d0070.includes("✅")) _0xe8638c = "[32m" + _0x4d0070 + "[0m";
        if (_0x4d0070.includes("❌")) _0xe8638c = "[31m" + _0x4d0070 + "[0m";
        _0x4c6115 += _0xe8638c.padEnd(_0x5d8d8b[_0x1d9d0b] - 1) + "|";
      });
      console.log(_0x4c6115);
    });
    console.log(_0x304840 + "\n");
  }
  async ["run"]() {
    try {
      {
        const _0x5c57d0 = this.ZXSH_NICKNAMES ? this.ZXSH_NICKNAMES.split("-").map(_0x5b6a0f => _0x5b6a0f.trim()) : [];
        if (this.ZXSH) {
          {
            const _0x45cc06 = this.ZXSH.split(/\r?\n|&/).map(_0x2ff338 => _0x2ff338.trim()).filter(_0x2fd320 => _0x2fd320);
            if (_0x45cc06.length > 0) {
              {
                this.log("==== 启动Token登录任务 ====", "CHECK");
                this.log("共检测到 " + _0x45cc06.length + " 个Token", "INFO");
                for (let _0x52122f = 0; _0x52122f < _0x45cc06.length; _0x52122f++) {
                  {
                    let _0x49b0ee = _0x45cc06[_0x52122f];
                    if (_0x49b0ee.split("#").length > 1) {
                      _0x49b0ee = _0x49b0ee.split("#")[0];
                    }
                    const _0x18217e = _0x5c57d0[_0x52122f] || "Token" + (_0x52122f + 1),
                      _0x36e911 = await this.executeTokenTask(_0x49b0ee, _0x18217e);
                    this.results.push(_0x36e911);
                    this.log("-".repeat(50), "INFO");
                  }
                }
              }
            }
          }
        }
        if (this.ZXSHZM) {
          const _0x57c09e = this.ZXSHZM.split(/\r?\n|&/).map(_0x3de3be => _0x3de3be.trim()).filter(_0x2268f3 => _0x2268f3 && _0x2268f3.includes("#"));
          if (_0x57c09e.length > 0) {
            this.log("==== 启动账号密码登录任务 ====", "CHECK");
            this.log("共检测到 " + _0x57c09e.length + " 个账号", "INFO");
            const _0x4a09d1 = this.ZXSH ? this.ZXSH.split(/\r?\n|&/).filter(_0x224874 => _0x224874).length : 0;
            for (let _0x2a0101 = 0; _0x2a0101 < _0x57c09e.length; _0x2a0101++) {
              const [_0x1066db, _0x32d4df] = _0x57c09e[_0x2a0101].split("#");
              if (!_0x1066db || !_0x32d4df) {
                this.log("账号行格式错误，跳过：" + _0x57c09e[_0x2a0101], "WARN");
                continue;
              }
              const _0x3a3674 = _0x5c57d0[_0x4a09d1 + _0x2a0101] || "账号" + (_0x2a0101 + 1),
                _0x1ec4a6 = await this.executeAccountTask(_0x1066db.trim(), _0x32d4df.trim(), _0x3a3674);
              this.results.push(_0x1ec4a6);
              this.log("-".repeat(50), "INFO");
            }
          }
        }
        if (this.results.length === 0) throw new Error("未配置有效的ZXSH（token）或ZXSHZM（账号密码）！");
        this.log("==== 所有任务执行完成 ====", "CHECK");
        this.displayResults();
      }
    } catch (_0x30efe5) {
      this.log("💥 整体执行失败: " + _0x30efe5.message, "ERROR");
    }
  }
}
(async () => {
  const _0x2d45e4 = new QLZxshRunner();
  await _0x2d45e4.run();
})();