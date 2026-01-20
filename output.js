//Tue Jan 20 2026 06:46:31 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const QL_CONFIG = {
  CLIENT_ID: process.env.QL_CLIENT_ID || "9bVZa-JnTm-w",
  CLIENT_SECRET: process.env.QL_CLIENT_SECRET || "i6miR_cusVftsrkmS50cMY3c",
  API_URL: process.env.QL_API_URL || "http://127.0.0.1:5700",
  ENV_NAME: "DDD"
};
const TASK_CONFIG = {
  COUNTDOWN_REFRESH_INTERVAL: 1000,
  WATCH_DURATION_MODE: "fixed",
  FIXED_WATCH_SEC: 30,
  INTERVAL_SEC: 5,
  RETRY_COUNT: 3,
  TIMEOUT: 30000,
  RANDOM_MIN_MINUTES: 1,
  RANDOM_MAX_MINUTES: 3,
  PROFIT_WAIT_SEC: 4,
  MAX_RECEIVE_ERRORS: 2
};
const REQUIRED_INVITE_ID = 10639;
const API_HOST = "gw.jiudageapp.com";
const axios = require("axios");
const CryptoJS = require("crypto-js");
function log(_0x5e4981, _0x1e60e7 = true) {
  const _0x28c5e2 = _0x1e60e7 ? "" : "❌ ";
  console.log("[" + new Date().toLocaleString() + "] " + _0x28c5e2 + _0x5e4981);
}
function wait(_0x11cc02) {
  return new Promise(_0x26e892 => setTimeout(_0x26e892, _0x11cc02 * 1000));
}
function getRandomWaitSeconds() {
  const _0x120dd1 = Math.floor(Math.random() * (TASK_CONFIG.RANDOM_MAX_MINUTES - TASK_CONFIG.RANDOM_MIN_MINUTES + 1)) + TASK_CONFIG.RANDOM_MIN_MINUTES;
  const _0xcbadf9 = _0x120dd1 * 60;
  log("生成随机等待时间：" + _0x120dd1 + "分钟（" + _0xcbadf9 + "秒）");
  return _0xcbadf9;
}
function parsePlatformFromUA(_0x4e8301) {
  if (!_0x4e8301) {
    return "Android";
  }
  if (_0x4e8301.includes("iOS") || _0x4e8301.includes("com.jiudageapp.ios")) {
    return "iOS";
  } else {
    return _0x4e8301.includes("Android") || _0x4e8301.includes("com.jiudageapp.android") ? "Android" : "Android";
  }
}
function parseVersionFromUA(_0x100046) {
  if (!_0x100046) {
    return "v1.6.1";
  }
  const _0x9936ec = _0x100046.match(/GZHealth\/([\d.]+)/);
  return _0x9936ec ? "v" + _0x9936ec[1] : "v1.6.1";
}
function calcVideoDuration(_0x389b39) {
  const _0x525c58 = _0x389b39 / 1024 / 1024;
  return Math.max(Math.floor(_0x525c58 * 8), 10);
}
function desEncrypt(_0x8f633a, _0xc2c5fa) {
  const _0x233b62 = CryptoJS.enc.Utf8.parse(_0xc2c5fa);
  const _0xa0e1dd = CryptoJS.enc.Utf8.parse(_0x8f633a);
  const _0x109664 = CryptoJS.DES.encrypt(_0xa0e1dd, _0x233b62, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return _0x109664.toString();
}
function md5Encrypt(_0x2006ec) {
  return CryptoJS.MD5(_0x2006ec).toString().toUpperCase();
}
async function getQingLongToken() {
  if (!QL_CONFIG.CLIENT_ID || !QL_CONFIG.CLIENT_SECRET) {
    log("未配置青龙面板Client ID/Secret，跳过token持久化");
    return null;
  }
  try {
    const _0x3437b4 = await axios({
      method: "GET",
      url: QL_CONFIG.API_URL + "/open/auth/token",
      params: {
        client_id: QL_CONFIG.CLIENT_ID,
        client_secret: QL_CONFIG.CLIENT_SECRET
      },
      timeout: 10000
    });
    return _0x3437b4.data && _0x3437b4.data.code === 200 ? (log("青龙面板认证成功"), _0x3437b4.data.data.token) : (log("青龙面板认证失败：" + JSON.stringify(_0x3437b4.data), false), null);
  } catch (_0x2d2cdc) {
    log("青龙面板认证异常：" + _0x2d2cdc.message, false);
    return null;
  }
}
async function getEnvFromQingLong(_0x10ca11, _0x1201eb) {
  try {
    const _0x14e47 = await axios({
      method: "GET",
      url: QL_CONFIG.API_URL + "/open/envs",
      headers: {
        Authorization: "Bearer " + _0x10ca11
      },
      params: {
        searchValue: _0x1201eb
      },
      timeout: 10000
    });
    if (_0x14e47.data && _0x14e47.data.code === 200) {
      const _0x50472c = _0x14e47.data.data;
      const _0x1dda3b = _0x50472c.find(_0x5c5dc4 => _0x5c5dc4.name === _0x1201eb);
      return _0x1dda3b || null;
    }
    return null;
  } catch (_0x37bcfc) {
    log("获取青龙环境变量失败：" + _0x37bcfc.message, false);
    return null;
  }
}
async function updateEnvToQingLong(_0x4016a7, _0x27a054, _0x518c21, _0x1202f2 = null) {
  try {
    let _0x51b488;
    _0x1202f2 ? _0x51b488 = await axios({
      method: "PUT",
      url: QL_CONFIG.API_URL + "/open/envs",
      headers: {
        Authorization: "Bearer " + _0x4016a7,
        "Content-Type": "application/json"
      },
      data: {
        id: _0x1202f2,
        name: _0x27a054,
        value: _0x518c21
      },
      timeout: 10000
    }) : _0x51b488 = await axios({
      method: "POST",
      url: QL_CONFIG.API_URL + "/open/envs",
      headers: {
        Authorization: "Bearer " + _0x4016a7,
        "Content-Type": "application/json"
      },
      data: [{
        name: _0x27a054,
        value: _0x518c21
      }],
      timeout: 10000
    });
    return _0x51b488.data && _0x51b488.data.code === 200 ? (log("青龙环境变量" + (_0x1202f2 ? "更新" : "创建") + "成功：" + _0x27a054), true) : (log("青龙环境变量" + (_0x1202f2 ? "更新" : "创建") + "失败：" + JSON.stringify(_0x51b488.data), false), false);
  } catch (_0x2c3100) {
    log("青龙环境变量操作异常：" + _0x2c3100.message, false);
    return false;
  }
}
async function loginWithPassword(_0x2fc9cc, _0x30c6be) {
  try {
    const _0x2efd37 = md5Encrypt(_0x30c6be);
    const _0x420f0e = await axios({
      method: "POST",
      url: "https://" + API_HOST + "/api/web/auth/pwdLogin",
      headers: {
        "User-Agent": "okhttp/4.10.0",
        "Accept-Encoding": "gzip",
        "Content-Type": "application/json",
        version: "v1.6.1",
        platform: "Android"
      },
      data: {
        password: _0x2efd37,
        phone: _0x2fc9cc
      },
      timeout: TASK_CONFIG.TIMEOUT
    });
    const _0x29810c = _0x420f0e.data;
    if (_0x29810c.code !== 200) {
      log("账号" + _0x2fc9cc + "登录失败：" + (_0x29810c.message || JSON.stringify(_0x29810c)), false);
      return null;
    }
    const _0x536ee4 = _0x29810c.result;
    const _0x2e7995 = _0x536ee4.token;
    const _0x2c65dc = _0x536ee4.nickName || "未知";
    const _0x1ae23f = await getAppVersion("Android");
    const _0xd310e0 = _0x1ae23f ? _0x1ae23f.version_no_show : "1.6.1";
    const _0x46307d = _0x1ae23f ? versionToBuild(_0xd310e0) : 161;
    const _0x277afa = "GZHealth/" + _0xd310e0 + " (com.jiudageapp.android; build:" + _0x46307d + "; Android 13.1.0) okhttp/4.10.0";
    log("✅ 账号" + _0x2fc9cc + "登录成功，昵称：" + _0x2c65dc);
    return {
      token: _0x2e7995,
      ua: _0x277afa,
      nickName: _0x2c65dc,
      phone: _0x2fc9cc
    };
  } catch (_0x22b7e9) {
    log("账号" + _0x2fc9cc + "登录异常：" + _0x22b7e9.message, false);
    return null;
  }
}
async function getAppVersion(_0x5cef76) {
  try {
    const _0x5d66d2 = await axios({
      method: "POST",
      url: "https://" + API_HOST + "/api/web/setting/getLastVersionInfo",
      headers: {
        "User-Agent": "okhttp/4.10.0",
        "Content-Type": "application/json"
      },
      data: {
        deviceType: _0x5cef76 === "iOS" ? "Ios" : _0x5cef76
      },
      timeout: 10000
    });
    const _0x30359f = _0x5d66d2.data;
    if (_0x30359f.code === 200 && _0x30359f.result) {
      return {
        version_no_show: _0x30359f.result.versionNoShow || "1.6.1",
        version_num: _0x30359f.result.versionNum || 0
      };
    }
    return null;
  } catch (_0x14247d) {
    log("获取版本信息失败：" + _0x14247d.message, false);
    return null;
  }
}
function versionToBuild(_0x4143c5) {
  return parseInt(_0x4143c5.replace(/\./g, ""));
}
async function isTokenValid(_0x925f16, _0x458f88, _0x51d8ee, _0x4dc2cb) {
  try {
    const _0x4c2130 = await requestWithRetry({
      method: "POST",
      url: "https://" + API_HOST + "/api/web/member/getMemberInfo",
      headers: {
        authorization: _0x925f16,
        version: _0x4dc2cb,
        "accept-encoding": "gzip",
        "user-agent": _0x458f88,
        "content-length": "0"
      }
    }, _0x51d8ee);
    return _0x4c2130.success === true;
  } catch (_0x43c697) {
    return false;
  }
}
async function requestWithRetry(_0x3748ed, _0x1fe423, _0x41d2c5 = TASK_CONFIG.RETRY_COUNT) {
  try {
    const _0x1a1e16 = {
      ..._0x3748ed,
      timeout: TASK_CONFIG.TIMEOUT,
      headers: {
        ..._0x3748ed.headers,
        platform: _0x1fe423
      }
    };
    const _0x4884ef = await axios(_0x1a1e16);
    return _0x4884ef.data;
  } catch (_0x34923f) {
    if (_0x41d2c5 > 0) {
      log("请求失败，剩余重试次数：" + _0x41d2c5 + "，错误信息：" + _0x34923f.message);
      await wait(2);
      return requestWithRetry(_0x3748ed, _0x1fe423, _0x41d2c5 - 1);
    }
    throw _0x34923f;
  }
}
async function getMemberCenterInfo(_0x350bdb, _0x5baedf, _0x2d54b2, _0x58261b) {
  try {
    const _0x2f14b2 = await requestWithRetry({
      method: "POST",
      url: "https://" + API_HOST + "/api/web/member/getMemberCenterInfo",
      headers: {
        authorization: _0x350bdb,
        version: _0x58261b,
        "content-length": "0",
        "accept-encoding": "gzip",
        "user-agent": _0x5baedf
      }
    }, _0x2d54b2);
    if (_0x2f14b2.success && _0x2f14b2.result) {
      const _0x2d6e8c = {
        watched: _0x2f14b2.result.watchedVideoCount,
        total: _0x2f14b2.result.videoCount,
        remaining: _0x2f14b2.result.videoCount - _0x2f14b2.result.watchedVideoCount,
        contribution: _0x2f14b2.result.contribution,
        canWithdraw: _0x2f14b2.result.canNewMemberWithdrawal,
        inviteCode: _0x2f14b2.result.inviteCode
      };
      log("今日广告任务进度：已看" + _0x2d6e8c.watched + "/" + _0x2d6e8c.total + "次，剩余" + _0x2d6e8c.remaining + "次");
      log("当前累计贡献值：" + _0x2d6e8c.contribution + "，是否可提现：" + (_0x2d6e8c.canWithdraw ? "是" : "否"));
      log("用户邀请码：" + _0x2d6e8c.inviteCode);
      return _0x2d6e8c;
    } else {
      log("获取会员中心信息失败：" + _0x2f14b2.message);
      return null;
    }
  } catch (_0x163cb5) {
    log("会员中心接口异常：" + _0x163cb5.message);
    return null;
  }
}
async function checkMiniAppBound(_0x1fc959, _0x407faf, _0x2156f2, _0x353643) {
  try {
    const _0x495d2b = await requestWithRetry({
      method: "GET",
      url: "https://" + API_HOST + "/api/web/member/hasMiniAppBoundToday",
      headers: {
        authorization: _0x1fc959,
        version: _0x353643,
        "accept-encoding": "gzip",
        "user-agent": _0x407faf
      }
    }, _0x2156f2);
    return _0x495d2b.success ? (log("今日小程序绑定状态：" + (_0x495d2b.result ? "已绑定" : "未绑定")), _0x495d2b.result) : (log("获取小程序绑定状态失败：" + _0x495d2b.message), false);
  } catch (_0x5e335c) {
    log("小程序绑定状态校验接口异常：" + _0x5e335c.message);
    return false;
  }
}
async function getInternalAdVideoId(_0x278587, _0x58dd1b, _0x1fd84e, _0x2d21ac) {
  try {
    const _0x2bb65b = await requestWithRetry({
      method: "POST",
      url: "https://" + API_HOST + "/api/web/member/get/internalAdvertisement",
      headers: {
        authorization: _0x278587,
        version: _0x2d21ac,
        "content-length": "0",
        "accept-encoding": "gzip",
        "user-agent": _0x58dd1b
      }
    }, _0x1fd84e);
    if (_0x2bb65b.success && _0x2bb65b.result?.["id"]) {
      const _0x55dc40 = _0x2bb65b.result.id;
      const _0x352dea = _0x2bb65b.result.videoUrl;
      log("动态获取广告视频ID成功：" + _0x55dc40 + "，视频地址：" + _0x352dea);
      return _0x55dc40;
    } else {
      log("获取广告信息失败：" + (_0x2bb65b.message || "无视频ID返回"));
      return null;
    }
  } catch (_0x5d9dad) {
    log("广告信息接口异常：" + _0x5d9dad.message);
    return null;
  }
}
async function getMemberInfo(_0x9ca5, _0x32091d, _0x5b26c2, _0x52a702) {
  try {
    const _0x130ff7 = await requestWithRetry({
      method: "POST",
      url: "https://" + API_HOST + "/api/web/member/getMemberInfo",
      headers: {
        authorization: _0x9ca5,
        version: _0x52a702,
        "accept-encoding": "gzip",
        "user-agent": _0x32091d,
        "content-length": "0"
      }
    }, _0x5b26c2);
    if (_0x130ff7.success) {
      const _0x59ce81 = _0x130ff7.result.inviteMemberId === REQUIRED_INVITE_ID;
      const _0x3b05a4 = _0x130ff7.result.phone || "未知";
      const _0x427535 = _0x130ff7.result.id;
      const _0x449f12 = _0x130ff7.result.inviteMemberId;
      return {
        success: _0x59ce81,
        phone: _0x3b05a4
      };
    } else {
      log("获取会员信息失败：" + _0x130ff7.message, false);
      return {
        success: false,
        phone: null
      };
    }
  } catch (_0x10d660) {
    log("会员信息接口异常：" + _0x10d660.message, false);
    return {
      success: false,
      phone: null
    };
  }
}
async function watchAdAndReceiveWelfare(_0x5a5cde, _0xf191fb, _0x34ed83, _0xba641a, _0x2148bc, _0x90784f) {
  if (!_0xba641a) {
    log("视频ID为空，无法执行广告任务", false);
    return false;
  }
  try {
    let _0x287e45 = 0;
    TASK_CONFIG.WATCH_DURATION_MODE === "fixed" ? (_0x287e45 = TASK_CONFIG.FIXED_WATCH_SEC, log("固定观看时长：" + _0x287e45 + "秒")) : (_0x287e45 = calcVideoDuration(5242880), log("自动估算观看时长：" + _0x287e45 + "秒"));
    log("开始观看广告，视频ID：" + _0xba641a);
    await wait(_0x287e45);
    await wait(TASK_CONFIG.INTERVAL_SEC);
    const _0x3ac165 = desEncrypt(String(_0xba641a), _0x90784f);
    const _0x4cb65e = encodeURIComponent(_0x3ac165);
    log("视频ID加密结果：" + _0x3ac165 + " -> URL编码：" + _0x4cb65e);
    const _0x2b802e = await requestWithRetry({
      method: "POST",
      url: "https://" + API_HOST + "/api/web/newPeopleUnlock/receiveWelfareNineteenV2?videoId=" + _0x4cb65e,
      headers: {
        authorization: _0x5a5cde,
        version: _0x2148bc,
        "accept-encoding": "gzip",
        "user-agent": _0xf191fb,
        "content-length": "0"
      }
    }, _0x34ed83);
    return _0x2b802e.success ? (log("广告福利领取成功！贡献值：" + _0x2b802e.result.actualReceiveContribution + "，兑换值：" + _0x2b802e.result.actualReceiveRedemptionValue), log("今日累计观看：" + _0x2b802e.result.visitedVideoCount + "/" + _0x2b802e.result.totalVideoCount + "次"), true) : (log("广告福利领取失败：" + _0x2b802e.message), false);
  } catch (_0x3f51ad) {
    log("广告任务执行异常：" + _0x3f51ad.message);
    return false;
  }
}
async function runSingleAccount(_0x58a70d) {
  const [_0x2f7f0e, _0x30a6ff] = _0x58a70d.split("#");
  if (!_0x2f7f0e || !_0x30a6ff) {
    log("账号格式错误，需为 token#ua 格式");
    return;
  }
  const _0x4275a4 = parsePlatformFromUA(_0x30a6ff);
  const _0x11f477 = parseVersionFromUA(_0x30a6ff);
  const _0x1915f4 = await getMemberInfo(_0x2f7f0e, _0x30a6ff, _0x4275a4, _0x11f477);
  log("\n========== 开始执行账号任务 [" + _0x1915f4.phone + "] ==========");
  let _0x428785 = 0;
  while (true) {
    const _0x5984d1 = await getMemberCenterInfo(_0x2f7f0e, _0x30a6ff, _0x4275a4, _0x11f477);
    if (!_0x5984d1) {
      break;
    }
    if (!_0x5984d1.inviteCode) {
      log("无法获取邀请码，终止任务", false);
      break;
    }
    if (_0x5984d1.remaining <= 0) {
      log("今日广告任务已全部完成，无剩余次数");
      break;
    }
    const _0x45b8e5 = await checkMiniAppBound(_0x2f7f0e, _0x30a6ff, _0x4275a4, _0x11f477);
    const _0x465690 = await getInternalAdVideoId(_0x2f7f0e, _0x30a6ff, _0x4275a4, _0x11f477);
    if (!_0x465690) {
      log("获取视频ID失败，跳过本次循环");
      await wait(5);
      continue;
    }
    const _0x1d8ef1 = await watchAdAndReceiveWelfare(_0x2f7f0e, _0x30a6ff, _0x4275a4, _0x465690, _0x11f477, _0x5984d1.inviteCode);
    if (!_0x1d8ef1) {
      _0x428785++;
      log("本次广告任务执行失败（第" + _0x428785 + "次错误），跳过本次循环");
      if (_0x428785 > TASK_CONFIG.MAX_RECEIVE_ERRORS) {
        log("领取奖励错误次数已达" + _0x428785 + "次，超过最大限制" + TASK_CONFIG.MAX_RECEIVE_ERRORS + "次，终止当前账号任务", false);
        break;
      }
      await wait(5);
      continue;
    }
    _0x428785 = 0;
    await wait(TASK_CONFIG.PROFIT_WAIT_SEC);
    await wait(2);
  }
  log("========== 账号任务执行结束 ==========\n");
}
async function main() {
  log("======= 店铛铛新人解锁广告任务脚本启动 =======");
  log("QQ交流群：1002163255");
  const _0x162102 = process.env.DDD_ACCOUNTS;
  if (!_0x162102 || !_0x162102.trim()) {
    log("❌ 未配置环境变量 DDD_ACCOUNTS！", false);
    log("请在青龙面板添加环境变量：", false);
    log("变量名：DDD_ACCOUNTS", false);
    log("变量值：手机号&密码（多账号用换行分隔）", false);
    log("示例：18665189270&13579Abc", false);
    return;
  }
  let _0x2aebd6 = [];
  let _0x1239b6 = null;
  let _0x2603ae = false;
  QL_CONFIG.CLIENT_ID && QL_CONFIG.CLIENT_SECRET ? (log("检测到青龙面板配置，启用token持久化功能"), _0x1239b6 = await getQingLongToken()) : log("⚠️ 未配置青龙面板Client ID/Secret，token将不会持久化");
  const _0x1be33b = _0x162102.split("\n").filter(_0xc006af => _0xc006af.trim());
  log("共读取到 " + _0x1be33b.length + " 个账号配置");
  let _0x2db5bd = [];
  if (_0x1239b6) {
    const _0xca8962 = await getEnvFromQingLong(_0x1239b6, QL_CONFIG.ENV_NAME);
    if (_0xca8962 && _0xca8962.value) {
      log("发现青龙面板缓存的token，尝试验证有效性...");
      const _0x221ae4 = _0xca8962.value.split("\n").filter(_0x368830 => _0x368830.trim());
      for (let _0x39e142 = 0; _0x39e142 < Math.min(_0x1be33b.length, _0x221ae4.length); _0x39e142++) {
        const [_0x3cb621, _0x5e6c31] = _0x221ae4[_0x39e142].split("#");
        if (_0x3cb621 && _0x5e6c31) {
          const _0x33a3e3 = parsePlatformFromUA(_0x5e6c31);
          const _0x2326ce = parseVersionFromUA(_0x5e6c31);
          const _0x57c82c = await isTokenValid(_0x3cb621, _0x5e6c31, _0x33a3e3, _0x2326ce);
          _0x57c82c ? (log("第" + (_0x39e142 + 1) + "个账号的缓存token仍然有效"), _0x2db5bd.push(_0x221ae4[_0x39e142])) : (log("第" + (_0x39e142 + 1) + "个账号的缓存token已过期，将重新登录", false), _0x2db5bd.push(null), _0x2603ae = true);
        } else {
          _0x2db5bd.push(null);
        }
      }
    }
  }
  for (let _0x5cba45 = 0; _0x5cba45 < _0x1be33b.length; _0x5cba45++) {
    const _0x216bcc = _0x1be33b[_0x5cba45].trim();
    if (_0x2db5bd[_0x5cba45]) {
      continue;
    }
    let _0x45f3e0;
    let _0x4f29ef;
    if (_0x216bcc.includes("&")) {
      [_0x45f3e0, _0x4f29ef] = _0x216bcc.split("&");
    } else {
      if (_0x216bcc.includes("@")) {
        [_0x45f3e0, _0x4f29ef] = _0x216bcc.split("@");
      } else {
        log("第" + (_0x5cba45 + 1) + "个账号格式错误，需要 手机号&密码 格式", false);
        continue;
      }
    }
    _0x45f3e0 = _0x45f3e0.trim();
    _0x4f29ef = _0x4f29ef.trim();
    log("正在登录第" + (_0x5cba45 + 1) + "个账号：" + _0x45f3e0);
    const _0x3a4a33 = await loginWithPassword(_0x45f3e0, _0x4f29ef);
    if (_0x3a4a33) {
      const _0x1321b0 = _0x3a4a33.token + "#" + _0x3a4a33.ua;
      _0x2db5bd[_0x5cba45] = _0x1321b0;
      _0x2603ae = true;
    } else {
      log("第" + (_0x5cba45 + 1) + "个账号登录失败，跳过", false);
    }
    _0x5cba45 < _0x1be33b.length - 1 && (await wait(2));
  }
  _0x2aebd6 = _0x2db5bd.filter(_0x2f28ca => _0x2f28ca);
  log("成功获取 " + _0x2aebd6.length + " 个有效token");
  log("准备同步token到青龙面板：qlToken=" + (_0x1239b6 ? "有" : "无") + ", needUpdateQL=" + _0x2603ae + ", accounts=" + _0x2aebd6.length);
  if (_0x1239b6 && _0x2603ae && _0x2aebd6.length > 0) {
    const _0x52f99a = _0x2aebd6.join("\n");
    log("将要同步的token数据（" + _0x2aebd6.length + "行）：");
    _0x2aebd6.forEach((_0x1999c4, _0x1ff1c8) => {
      const _0x191118 = _0x1999c4.substring(0, 30) + "...";
      log("  账号" + (_0x1ff1c8 + 1) + ": " + _0x191118);
    });
    const _0x8ed1e3 = await getEnvFromQingLong(_0x1239b6, QL_CONFIG.ENV_NAME);
    const _0x1375d7 = _0x8ed1e3 ? _0x8ed1e3.id : null;
    log("现有环境变量：" + (_0x8ed1e3 ? "存在(ID=" + _0x1375d7 + ")" : "不存在"));
    log("正在" + (_0x1375d7 ? "更新" : "创建") + "青龙环境变量 " + QL_CONFIG.ENV_NAME + "...");
    const _0x3d5278 = await updateEnvToQingLong(_0x1239b6, QL_CONFIG.ENV_NAME, _0x52f99a, _0x1375d7);
    _0x3d5278 ? log("✅ Token已成功同步到青龙面板！") : log("❌ Token同步到青龙面板失败，请检查日志", false);
  } else {
    if (!_0x1239b6) {
      log("⚠️ 未获取到青龙面板token，跳过同步");
    } else {
      if (!_0x2603ae) {
        log("ℹ️ 所有token均来自缓存且有效，无需更新青龙面板");
      } else {
        _0x2aebd6.length === 0 && log("⚠️ 没有可用的账号，跳过同步");
      }
    }
  }
  if (_0x2aebd6.length === 0) {
    log("没有可用的账号，脚本终止", false);
    return;
  }
  for (let _0x4964b0 = 0; _0x4964b0 < _0x2aebd6.length; _0x4964b0++) {
    await runSingleAccount(_0x2aebd6[_0x4964b0]);
    if (_0x4964b0 < _0x2aebd6.length - 1) {
      const _0x4ace9f = getRandomWaitSeconds();
      log("等待 " + _0x4ace9f + " 秒后执行下一个账号...");
      await wait(_0x4ace9f);
    }
  }
  log("\n======= 所有账号任务执行完毕 =======");
}
main().catch(_0x2a3d49 => log("脚本执行异常：" + _0x2a3d49.message));