//Thu Dec 04 2025 08:59:15 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const _0x1f24c6 = require("axios"),
  _0x22b8b0 = require("crypto");
function _0x497890(_0x206ca8) {
  const _0xd6c636 = "xK9mP2nQ5rT8wY3",
    _0x36212f = Buffer.from(_0x206ca8, "base64").toString("binary");
  let _0x5e6ed5 = "";
  const _0x21f808 = _0xd6c636.length;
  for (let _0x13eb46 = 0; _0x13eb46 < _0x36212f.length; _0x13eb46++) {
    _0x5e6ed5 += String.fromCharCode(_0x36212f.charCodeAt(_0x13eb46) ^ _0xd6c636.charCodeAt(_0x13eb46 % _0x21f808));
  }
  return _0x5e6ed5;
}
const _0x17a76f = _0x497890("EzhmDCVGAQ5cAgtLEjpBHT9mBjVLMWMFQGA="),
  _0x23048c = _0x497890("ED9NHWodQWACQ3oKRm0dSXoXVGEIVmkMS3tZBzAcGTtQQyBaHg=="),
  _0x46248f = _0x497890("ED9NHWodQWACQ3oKRm0dSXoXVGEIVmkMS3tZBzAcFT8XHThC"),
  _0x3dc63d = _0x497890("ED9NHWodQWACQ3oKRm0dSXoXVGEIVmkMS3tZBzAcGTtQQyBaHm5UESBRGDcOHy5NMjFcAD5AHDddGjxdDA=="),
  _0xa6c185 = "\n══════════════════════════════════════════════════\n          使用协议\n══════════════════════════════════════════════════\n\n1. 本脚本永久免费使用，不收取任何费用\n2. 我们不抽成、不偷ck、不卖卡密\n3. 脚本仅供学习交流使用，请勿用于非法用途\n4. 使用本脚本需要卡密验证，请加Q群获取：1055412650\n5. 使用脚本前必须将IP添加到白名单\n6. 禁止倒卖、破解、修改脚本后再分发\n7. 使用者必须遵守相关法律法规，否则后果自负\n8. 如遇到问题，请在Q群反馈，我们会及时处理\n";
function _0x584a38() {
  const _0x3f3a3c = [],
    _0x29f1be = process.env.mtck || "";
  _0x29f1be && _0x3f3a3c.push(_0x29f1be);
  for (let _0x4b3234 = 1; _0x4b3234 <= 9; _0x4b3234++) {
    {
      const _0x8089cc = process.env["mtck" + _0x4b3234] || "";
      if (_0x8089cc) {
        _0x3f3a3c.push(_0x8089cc);
      }
    }
  }
  return _0x3f3a3c;
}
const _0x9eedb1 = {
  "apiUrl": _0x46248f,
  "cardSecret": process.env.km || "",
  "meituanAccounts": _0x584a38(),
  "delay": parseInt(process.env.MT_DELAY) || 1000,
  "announcementUrl": _0x3dc63d,
  "pushToken": process.env.push || "",
  "agreement": process.env.agreement || ""
};
let _0x131bb4 = {};
async function _0x2510db() {
  try {
    _0x21a5f3("正在从后台获取券列表...");
    const _0x297487 = await _0x1f24c6.post(_0x9eedb1.apiUrl, new URLSearchParams({
      "action": "get_coupons"
    }), {
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "timeout": 10000
    });
    if (_0x297487.data && _0x297487.data.success && _0x297487.data.data) {
      _0x131bb4 = _0x297487.data.data;
      const _0x198d2e = Object.values(_0x131bb4).join(", ");
      _0x21a5f3("[成功] 已加载 " + _0x297487.data.count + " 个券: " + _0x198d2e, "success");
      return true;
    } else {
      const _0x3cc9f9 = _0x297487.data?.["message"] || "未知错误";
      _0x21a5f3("[错误] 获取券列表失败: " + _0x3cc9f9, "error");
      _0x21a5f3("请在后台\"美团券管理\"中添加并启用券", "error");
      return false;
    }
  } catch (_0x166d3e) {
    _0x21a5f3("[错误] 获取券列表失败: " + _0x166d3e.message, "error");
    _0x21a5f3("请检查网络连接或联系管理员", "error");
    return false;
  }
}
function _0x3fcbd2(_0xee0631) {
  return new Promise(_0x4fae50 => setTimeout(_0x4fae50, _0xee0631));
}
function _0xbd4f6b() {
  const _0x43a117 = 30000,
    _0x5bc5aa = 90000,
    _0x4323b6 = Math.floor(Math.random() * (_0x5bc5aa - _0x43a117 + 1)) + _0x43a117;
  return _0x4323b6;
}
async function _0x3a07e1(_0x4abe1b, _0x13553d) {
  if (!_0x9eedb1.pushToken) return;
  try {
    const _0x442a90 = await _0x1f24c6.post("http://www.pushplus.plus/send", {
      "token": _0x9eedb1.pushToken,
      "title": _0x4abe1b,
      "content": _0x13553d,
      "template": "html"
    }, {
      "timeout": 10000
    });
    if (_0x442a90.data && _0x442a90.data.code === 200) {
      _0x21a5f3("[成功] 推送通知发送成功", "success");
    } else {
      _0x21a5f3("[失败] 推送通知发送失败: " + (_0x442a90.data?.["msg"] || "未知错误"), "warn");
    }
  } catch (_0x433c55) {
    _0x21a5f3("[异常] 推送通知发送异常: " + _0x433c55.message, "warn");
  }
}
function _0x21a5f3(_0x113cce, _0x2c970a = "info") {
  const _0x18cbe0 = new Date(),
    _0x5cc62c = _0x18cbe0.toLocaleTimeString("zh-CN", {
      "hour12": false
    });
  console.log("[" + _0x5cc62c + "] " + _0x113cce);
}
async function _0x1fba3b() {
  try {
    {
      const _0x354bcd = await _0x1f24c6.get(_0x9eedb1.announcementUrl, {
        "timeout": 3000,
        "headers": {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
      });
      if (_0x354bcd.data && _0x354bcd.data.success && _0x354bcd.data.data) {
        {
          const _0x1ee5ed = Array.isArray(_0x354bcd.data.data) ? _0x354bcd.data.data : [_0x354bcd.data.data];
          _0x1ee5ed.forEach((_0xa53a23, _0x42ee60) => {
            {
              const _0x325f45 = _0xa53a23.title || "系统公告 " + (_0x42ee60 + 1),
                _0x42e98f = _0xa53a23.content || "",
                _0x20b3df = _0x42e98f.replace(/\\r\\n/g, "\n").replace(/\\n/g, "\n");
              console.log("\n" + _0x325f45);
              console.log("═".repeat(50));
              console.log(_0x20b3df);
              console.log("═".repeat(50));
              _0x42ee60 < _0x1ee5ed.length - 1 && console.log("");
            }
          });
          return;
        }
      }
    }
  } catch (_0x4b8a20) {
    console.log("远程公告获取失败，继续执行脚本");
  }
}
async function _0x5daa28() {
  const _0x36b00c = ["https://api.ipify.org?format=json", "https://ipinfo.io/json", "https://api.ip.sb/ip"];
  for (const _0x4ec789 of _0x36b00c) {
    try {
      const _0x576893 = await _0x1f24c6.get(_0x4ec789, {
        "timeout": 5000
      });
      let _0x33f9d5 = null;
      if (typeof _0x576893.data === "string") {
        _0x33f9d5 = _0x576893.data.trim();
      } else {
        if (_0x576893.data.ip) _0x33f9d5 = _0x576893.data.ip;else _0x576893.data.query && (_0x33f9d5 = _0x576893.data.query);
      }
      if (_0x33f9d5 && /^(\d{1,3}\.){3}\d{1,3}$/.test(_0x33f9d5)) return _0x33f9d5;
    } catch (_0x28e8e3) {
      continue;
    }
  }
  return null;
}
async function _0x1a07e4() {
  let _0x9fc2e5 = await _0x5daa28();
  if (!_0x9fc2e5) {
    {
      const _0x1ff83f = process.env.ip;
      if (_0x1ff83f && /^(\d{1,3}\.){3}\d{1,3}$/.test(_0x1ff83f)) _0x21a5f3("自动获取IP失败，使用手动配置: " + _0x1ff83f, "warn"), _0x9fc2e5 = _0x1ff83f;else return _0x21a5f3("无法获取公网IP，请检查网络连接或配置ip变量", "error"), false;
    }
  } else {
    _0x21a5f3("获取到公网IP: " + _0x9fc2e5, "success");
    _0x3d60e8 = _0x9fc2e5;
  }
  try {
    const _0x473589 = Math.floor(Date.now() / 1000).toString(),
      _0x1492ca = "mt.js脚本",
      _0x2355eb = _0x22b8b0.createHash("md5").update(_0x9fc2e5 + _0x1492ca + _0x473589 + _0x17a76f).digest("hex"),
      _0x5dd94d = await _0x1f24c6.post(_0x23048c, {
        "action": "auto_add_ip",
        "ip": _0x9fc2e5,
        "source": _0x1492ca,
        "timestamp": _0x473589,
        "sign": _0x2355eb
      }, {
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "timeout": 10000
      });
    if (_0x5dd94d.data && _0x5dd94d.data.success) {
      _0x21a5f3("白名单添加成功: " + _0x9fc2e5, "success");
      return true;
    } else {
      _0x21a5f3("白名单自动添加失败: " + (_0x5dd94d.data?.["message"] || "未知错误"), "warn");
      _0x21a5f3("检查IP是否已在白名单中...");
      const _0x263b5f = Math.floor(Date.now() / 1000).toString(),
        _0x50f87a = _0x22b8b0.createHash("md5").update(_0x9fc2e5 + "heartbeat" + _0x263b5f + _0x17a76f).digest("hex"),
        _0x39fecb = await _0x1f24c6.post(_0x23048c, {
          "action": "check_whitelist",
          "ip": _0x9fc2e5,
          "timestamp": _0x263b5f,
          "sign": _0x50f87a
        }, {
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "timeout": 10000
        }),
        _0x1172e4 = _0x39fecb.data && _0x39fecb.data.in_whitelist === true || _0x39fecb.data && _0x39fecb.data.success === true;
      return _0x1172e4 ? (_0x21a5f3("IP已在白名单中（可能是管理员手动添加）: " + _0x9fc2e5, "success"), true) : (_0x21a5f3("IP不在白名单中，脚本无法继续运行", "error"), _0x21a5f3("   返回数据: " + JSON.stringify(_0x39fecb.data)), _0x21a5f3("   提示: 请联系管理员确认白名单: " + _0x9fc2e5), false);
    }
  } catch (_0x425f50) {
    _0x21a5f3("IP白名单操作异常: " + _0x425f50.message, "error");
    return false;
  }
}
let _0x5b0c15 = null,
  _0x3d60e8 = null;
async function _0x54ac5a() {
  try {
    {
      let _0x5c070a = _0x3d60e8 || (await _0x5daa28());
      if (!_0x5c070a) {
        {
          _0x21a5f3("白名单心跳检查异常: 无法获取IP，继续运行", "warn");
          return;
        }
      }
      const _0x47b0a3 = Math.floor(Date.now() / 1000).toString(),
        _0x26da6b = _0x22b8b0.createHash("md5").update(_0x5c070a + "heartbeat" + _0x47b0a3 + _0x17a76f).digest("hex"),
        _0x3c9c73 = await _0x1f24c6.post(_0x23048c, {
          "action": "check_whitelist",
          "ip": _0x5c070a,
          "timestamp": _0x47b0a3,
          "sign": _0x26da6b
        }, {
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "timeout": 10000
        }),
        _0x4e15b2 = _0x3c9c73.data && _0x3c9c73.data.in_whitelist === true || _0x3c9c73.data && _0x3c9c73.data.success === true;
      if (_0x4e15b2) {} else {
        _0x21a5f3("白名单心跳检查失败: " + (_0x3c9c73.data?.["message"] || "IP不在白名单中"), "error");
        _0x21a5f3("   返回数据: " + JSON.stringify(_0x3c9c73.data));
        _0x21a5f3("可能原因: 1.白名单刚添加未生效 2.IP已过期被删除 3.网络波动", "warn");
        _0x21a5f3("将在下次检查时重新验证，暂不退出脚本", "warn");
      }
    }
  } catch (_0x9ad856) {
    _0x21a5f3("白名单心跳检查异常: " + _0x9ad856.message + "，继续运行", "warn");
  }
}
function _0x549842() {
  _0x5b0c15 && clearInterval(_0x5b0c15);
  setTimeout(() => {
    _0x54ac5a();
  }, 10000);
  _0x5b0c15 = setInterval(() => {
    _0x54ac5a();
  }, 300000);
}
function _0x1f3755(_0x24889d) {
  try {
    const _0x4caf72 = new URL(_0x24889d),
      _0x38fe8e = _0x4caf72.searchParams.get("userId"),
      _0x5d5658 = _0x4caf72.searchParams.get("token");
    if (!_0x38fe8e || !_0x5d5658) {
      throw new Error("URL中缺少userId或token参数");
    }
    return {
      "userId": _0x38fe8e,
      "token": _0x5d5658
    };
  } catch (_0x42cf56) {
    throw new Error("URL解析失败: " + _0x42cf56.message);
  }
}
async function _0x1edfc1(_0x5d33fa, _0x2d4b03 = {}) {
  try {
    const _0x4cb43c = new URLSearchParams();
    _0x4cb43c.append("action", _0x5d33fa);
    _0x4cb43c.append("card", _0x9eedb1.cardSecret);
    for (const _0x1017a4 in _0x2d4b03) {
      _0x4cb43c.append(_0x1017a4, _0x2d4b03[_0x1017a4]);
    }
    const _0x140748 = await _0x1f24c6.post(_0x9eedb1.apiUrl, _0x4cb43c, {
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      },
      "timeout": 30000
    });
    return _0x140748.data;
  } catch (_0x1d7324) {
    {
      if (_0x1d7324.response) return {
        "success": false,
        "message": "HTTP错误: " + _0x1d7324.response.status,
        "error": _0x1d7324.response.data
      };else {
        if (_0x1d7324.request) return {
          "success": false,
          "message": "网络请求超时或无响应"
        };else {
          return {
            "success": false,
            "message": _0x1d7324.message
          };
        }
      }
    }
  }
}
async function _0x3b6a40(_0x579cdd, _0x518999, _0x423c2f) {
  const _0x4cbcd1 = _0x131bb4[_0x579cdd] || _0x579cdd;
  _0x21a5f3("正在领取券: " + _0x4cbcd1);
  const _0xfae230 = await _0x1edfc1("meituan_receive", {
    "coupon_id": _0x579cdd,
    "user_id": _0x518999,
    "meituan_token": _0x423c2f
  });
  if (_0xfae230.success) {
    {
      let _0x1c7685 = _0xfae230.message || "领券成功";
      if (_0x1c7685.includes(":")) {
        const _0x5a7281 = _0x1c7685.split(":");
        if (_0x5a7281.length > 1) {
          _0x1c7685 = _0x5a7281.slice(1).join(":").trim();
        }
      }
      _0x21a5f3("[成功] 券 " + _0x4cbcd1 + " 领取成功: " + _0x1c7685, "success");
      return {
        "success": true,
        "couponId": _0x579cdd,
        "message": _0x1c7685
      };
    }
  } else {
    let _0x12b6a1 = _0xfae230.message || "领券失败";
    _0x12b6a1.startsWith("失败:") && (_0x12b6a1 = _0x12b6a1.substring(3).trim());
    const _0x3a70b6 = _0xfae230.error_type || "unknown";
    if (_0x3a70b6 === "already_claimed") _0x21a5f3("[已领] 券 " + _0x4cbcd1 + " " + _0x12b6a1, "warn");else {
      if (_0x3a70b6 === "limit_exceeded") {
        _0x21a5f3("[限制] 券 " + _0x4cbcd1 + " " + _0x12b6a1, "warn");
      } else _0x21a5f3("[失败] 券 " + _0x4cbcd1 + " 领取失败: " + _0x12b6a1, "error");
    }
    return {
      "success": false,
      "couponId": _0x579cdd,
      "message": _0x12b6a1,
      "error_type": _0x3a70b6
    };
  }
}
async function _0xd66f0b(_0x4c42c1, _0x1537f0, _0xa97eec) {
  _0x21a5f3("========================================");
  _0x21a5f3("开始批量领券");
  _0x21a5f3("========================================");
  const _0x3586eb = [];
  let _0x38807d = 0,
    _0x58bfa1 = 0,
    _0x4420e9 = 0,
    _0x11af43 = 0,
    _0x2f5418 = 0;
  for (let _0x1804a1 = 0; _0x1804a1 < _0x4c42c1.length; _0x1804a1++) {
    {
      const _0x20994b = _0x4c42c1[_0x1804a1],
        _0x193d17 = await _0x3b6a40(_0x20994b, _0x1537f0, _0xa97eec);
      _0x3586eb.push(_0x193d17);
      if (_0x193d17.success) {
        _0x38807d++;
        if (_0x1804a1 < _0x4c42c1.length - 1) {
          {
            const _0x5ae171 = _0xbd4f6b(),
              _0x5b5791 = Math.round(_0x5ae171 / 1000);
            _0x21a5f3("领券成功，等待 " + _0x5b5791 + " 秒后继续...", "success");
            await _0x3fcbd2(_0x5ae171);
          }
        }
      } else {
        _0x58bfa1++;
        if (_0x193d17.error_type === "already_claimed") {
          _0x4420e9++;
        } else {
          if (_0x193d17.error_type === "limit_exceeded") _0x11af43++;else _0x193d17.error_type === "daily_limit_exceeded" && _0x2f5418++;
        }
        _0x1804a1 < _0x4c42c1.length - 1 && (await _0x3fcbd2(_0x9eedb1.delay));
      }
    }
  }
  _0x21a5f3("========================================");
  _0x21a5f3("领券完成: 成功 " + _0x38807d + " 个，失败 " + _0x58bfa1 + " 个");
  if (_0x4420e9 > 0) {
    _0x21a5f3("其中已领取: " + _0x4420e9 + " 个", "warn");
  }
  _0x11af43 > 0 && _0x21a5f3("其中限制: " + _0x11af43 + " 个", "warn");
  _0x21a5f3("========================================");
  return {
    "total": _0x4c42c1.length,
    "success": _0x38807d,
    "failed": _0x58bfa1,
    "already_claimed": _0x4420e9,
    "limit_exceeded": _0x11af43,
    "results": _0x3586eb
  };
}
async function _0xa27a02(_0x4ae615, _0x2d8e1d, _0x242f19) {
  _0x21a5f3("\n" + "═".repeat(50));
  _0x21a5f3("开始处理账号 " + _0x2d8e1d + "/" + _0x242f19);
  _0x21a5f3("═".repeat(50));
  _0x21a5f3("正在解析mt URL...");
  const {
    userId: _0x376c4f,
    token: _0x21ded2
  } = _0x1f3755(_0x4ae615);
  _0x21a5f3("解析成功: userId=" + _0x376c4f, "success");
  try {
    const _0x73cccb = Object.keys(_0x131bb4),
      _0x1ec650 = Object.values(_0x131bb4);
    _0x21a5f3("准备领取券: " + _0x1ec650.join(", "));
    const _0x97bd2e = Math.floor(Math.random() * 30000) + 30000,
      _0x1cb449 = Math.round(_0x97bd2e / 1000);
    _0x21a5f3("等待 " + _0x1cb449 + " 秒后继续...");
    await _0x3fcbd2(_0x97bd2e);
    _0x21a5f3("");
    let _0x47b450;
    _0x73cccb.length === 1 ? _0x47b450 = await _0x3b6a40(_0x73cccb[0], _0x376c4f, _0x21ded2) : _0x47b450 = await _0xd66f0b(_0x73cccb, _0x376c4f, _0x21ded2);
    _0x21a5f3("\n账号 " + _0x2d8e1d + " 领券完成", "success");
    return {
      "userId": _0x376c4f,
      "result": _0x47b450,
      "success": true
    };
  } catch (_0x5e3592) {
    _0x21a5f3("\n账号 " + _0x2d8e1d + " 执行出错: " + _0x5e3592.message, "error");
    console.error(_0x5e3592);
    return {
      "userId": "unknown",
      "result": null,
      "success": false,
      "error": _0x5e3592.message
    };
  }
}
async function _0x9a6e18() {
  await _0x1fba3b();
  console.log(_0xa6c185);
  _0x9eedb1.agreement !== "我同意协议" && (console.log("[错误] 您尚未同意使用协议！"), console.log("请设置环境变量 agreement=我同意协议 以同意协议并继续使用脚本"), console.log("注意：必须完整输入\"我同意协议\"四个字，否则无法使用\n"), process.exit(1));
  if (!_0x9eedb1.cardSecret) {
    _0x21a5f3("错误：未配置卡密（km）", "error");
    _0x21a5f3("请在青龙面板设置环境变量：km", "error");
    return;
  }
  if (_0x9eedb1.meituanAccounts.length === 0) {
    _0x21a5f3("错误：未配置mt URL（mtck）", "error");
    _0x21a5f3("请在青龙面板设置环境变量：mtck", "error");
    _0x21a5f3("格式：https://i.meituan.com/mttouch/page/account?userId=xxx&token=xxx", "error");
    _0x21a5f3("支持mtck到mtck9，最多10个账号", "error");
    return;
  }
  _0x21a5f3("开始执行IP白名单自动添加...\n");
  const _0x5d0bdc = await _0x1a07e4();
  !_0x5d0bdc && (_0x21a5f3("\nIP白名单添加失败，脚本终止运行", "error"), _0x21a5f3("未添加IP白名单无法运行脚本，请检查网络连接或手动添加IP", "warn"), process.exit(1));
  _0x21a5f3("\nIP白名单验证通过，继续执行脚本...\n");
  const _0x411e90 = await _0x2510db();
  !_0x411e90 && (_0x21a5f3("\n券列表加载失败，脚本终止运行", "error"), _0x21a5f3("请在后台\"美团券管理\"中添加券并设置为启用状态", "warn"), process.exit(1));
  _0x549842();
  _0x21a5f3("\n检测到 " + _0x9eedb1.meituanAccounts.length + " 个账号，开始批量处理...\n");
  const _0x50ddd6 = [];
  for (let _0x4e5561 = 0; _0x4e5561 < _0x9eedb1.meituanAccounts.length; _0x4e5561++) {
    {
      const _0x5573b5 = _0x9eedb1.meituanAccounts[_0x4e5561],
        _0x523b48 = await _0xa27a02(_0x5573b5, _0x4e5561 + 1, _0x9eedb1.meituanAccounts.length);
      _0x50ddd6.push(_0x523b48);
      if (_0x4e5561 < _0x9eedb1.meituanAccounts.length - 1) {
        {
          const _0x2d5ab0 = 5;
          _0x21a5f3("\n等待 " + _0x2d5ab0 + " 秒后处理下一个账号...\n");
          await _0x3fcbd2(_0x2d5ab0 * 1000);
        }
      }
    }
  }
  _0x21a5f3("\n" + "═".repeat(50));
  _0x21a5f3("所有账号处理完成");
  _0x21a5f3("═".repeat(50));
  const _0x4d8f65 = _0x50ddd6.filter(_0x120e9a => _0x120e9a.success).length,
    _0x293099 = _0x50ddd6.length - _0x4d8f65;
  _0x21a5f3("成功: " + _0x4d8f65 + " 个账号，失败: " + _0x293099 + " 个账号");
  if (_0x9eedb1.pushToken) {
    {
      const _0x491e8b = "美团领券通知";
      let _0x52b15f = "<h3>批量领券结果</h3>";
      _0x52b15f += "<p>总账号数: " + _0x50ddd6.length + "</p>";
      _0x52b15f += "<p>成功: " + _0x4d8f65 + " 个</p>";
      _0x52b15f += "<p>失败: " + _0x293099 + " 个</p>";
      _0x52b15f += "<hr>";
      _0x50ddd6.forEach((_0x41579f, _0x1a6de7) => {
        {
          _0x52b15f += "<h4>账号 " + (_0x1a6de7 + 1) + "</h4>";
          _0x52b15f += "<p>用户ID: " + _0x41579f.userId + "</p>";
          if (_0x41579f.success && _0x41579f.result) {
            {
              const _0x13cdfb = _0x41579f.result;
              _0x13cdfb.couponId !== undefined ? (_0x52b15f += "<p>券名称: " + (_0x131bb4[_0x13cdfb.couponId] || _0x13cdfb.couponId) + "</p>", _0x52b15f += "<p>状态: " + (_0x13cdfb.success ? "成功" : "失败") + "</p>", _0x52b15f += "<p>消息: " + _0x13cdfb.message + "</p>") : (_0x52b15f += "<p>总计: " + (_0x13cdfb.total || 0) + " 张券</p>", _0x52b15f += "<p>成功: " + (_0x13cdfb.success || 0) + " 张</p>", _0x52b15f += "<p>失败: " + (_0x13cdfb.failed || 0) + " 张</p>", _0x13cdfb.results && _0x13cdfb.results.length > 0 && (_0x52b15f += "<ul>", _0x13cdfb.results.forEach(_0x7dc2fc => {
                const _0x9853fe = _0x131bb4[_0x7dc2fc.couponId] || _0x7dc2fc.couponId,
                  _0x4d25e5 = _0x7dc2fc.success ? "[成功]" : "[失败]";
                _0x52b15f += "<li>" + _0x4d25e5 + " " + _0x9853fe + ": " + _0x7dc2fc.message + "</li>";
              }), _0x52b15f += "</ul>"));
            }
          } else _0x52b15f += "<p style=\"color:red;\">执行失败: " + (_0x41579f.error || "未知错误") + "</p>";
          _0x1a6de7 < _0x50ddd6.length - 1 && (_0x52b15f += "<hr>");
        }
      });
      _0x52b15f += "<p>时间: " + new Date().toLocaleString("zh-CN") + "</p>";
      await _0x3a07e1(_0x491e8b, _0x52b15f);
    }
  }
  _0x21a5f3("\n脚本执行完成，即将退出...");
  process.exit(0);
}
require.main === module && _0x9a6e18().catch(_0x5059b3 => {
  console.error("未捕获的错误:", _0x5059b3);
  process.exit(1);
});
module.exports = {
  "main": _0x9a6e18
};