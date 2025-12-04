//Thu Dec 04 2025 07:23:47 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const fs = require("fs");
const https = require("https");
const http = require("http");
const url = require("url");
const {
  URLSearchParams
} = require("url");
const path = require("path");
const UPDATE_CONFIG = {
  versionUrl: "https://gitee.com/shusvip/qinglong/raw/master/version.json",
  scriptUrl: "https://gitee.com/shusvip/qinglong/raw/master/nfsq.js",
  backupFolder: "./backups",
  autoUpdate: true,
  forceCheck: false,
  checkIntervalHours: 24
};
function logInfo(_0x484df3) {
  const _0x4f7459 = new Date().toISOString().replace("T", " ").substr(0, 19);
  console.log("[32m" + _0x4f7459 + "[0m" + " - " + "[34m" + "INFO" + "[0m" + " - " + _0x484df3);
}
function logError(_0x4f39bf) {
  const _0x143b23 = new Date().toISOString().replace("T", " ").substr(0, 19);
  console.error("[32m" + _0x143b23 + "[0m" + " - " + "[31m" + "ERROR" + "[0m" + " - " + _0x4f39bf);
}
function logWarning(_0x20d082) {
  const _0x1cdfd5 = new Date().toISOString().replace("T", " ").substr(0, 19);
  console.warn("[32m" + _0x1cdfd5 + "[0m" + " - " + "[33m" + "WARNING" + "[0m" + " - " + _0x20d082);
}
class UpdateManager {
  constructor() {
    this.currentVersion = "1.0.0";
    this.updateAvailable = false;
    this.latestVersion = null;
    this.updateInfo = null;
    this.lastCheckFile = ".nfsq_last_update_check";
  }
  showBanner() {
    console.log("[36m" + "=".repeat(60) + "[0m");
    console.log("[32m🎯 农夫山泉抽奖脚本[0m");
    console.log("[34m📦 版本: " + this.currentVersion + "[0m");
    console.log("[33m📁 仓库: https://gitee.com/shusvip/qinglong[0m");
    console.log("[36m" + "=".repeat(60) + "[0m");
  }
  shouldCheckUpdate() {
    if (UPDATE_CONFIG.forceCheck) {
      return true;
    }
    try {
      if (!fs.existsSync(this.lastCheckFile)) {
        return true;
      }
      const _0x5976fd = parseInt(fs.readFileSync(this.lastCheckFile, "utf8"), 10);
      const _0x167467 = Date.now();
      const _0x4bfbd6 = (_0x167467 - _0x5976fd) / 3600000;
      return _0x4bfbd6 >= UPDATE_CONFIG.checkIntervalHours;
    } catch (_0x5d1f06) {
      return true;
    }
  }
  saveLastCheckTime() {
    try {
      fs.writeFileSync(this.lastCheckFile, Date.now().toString(), "utf8");
    } catch (_0x98ba05) {}
  }
  async fetchUpdateInfo() {
    return new Promise((_0x2e39e9, _0x2bd347) => {
      const _0x9e7f54 = new URL(UPDATE_CONFIG.versionUrl);
      const _0x24db35 = {
        hostname: _0x9e7f54.hostname,
        port: _0x9e7f54.port || 443,
        path: _0x9e7f54.pathname,
        method: "GET",
        headers: {
          "User-Agent": "NFSQ-Updater/1.0"
        },
        timeout: 10000
      };
      https.get(_0x24db35, _0x324c5d => {
        if (_0x324c5d.statusCode !== 200) {
          _0x2bd347(new Error("HTTP " + _0x324c5d.statusCode));
          return;
        }
        let _0xef1a8e = "";
        _0x324c5d.on("data", _0x53e179 => {
          _0xef1a8e += _0x53e179;
        });
        _0x324c5d.on("end", () => {
          try {
            const _0x26b765 = JSON.parse(_0xef1a8e);
            _0x2e39e9(_0x26b765);
          } catch (_0x364537) {
            _0x2bd347(new Error("解析更新信息失败"));
          }
        });
      }).on("error", _0x398b18 => {
        _0x2bd347(_0x398b18);
      }).on("timeout", () => {
        _0x2bd347(new Error("请求超时"));
      });
    });
  }
  compareVersions(_0x48ad7b, _0x514281) {
    const _0x3e5e69 = _0x48ad7b.split(".").map(Number);
    const _0x314255 = _0x514281.split(".").map(Number);
    for (let _0x5ca511 = 0; _0x5ca511 < Math.max(_0x3e5e69.length, _0x314255.length); _0x5ca511++) {
      const _0x169c0a = _0x3e5e69[_0x5ca511] || 0;
      const _0x28e09a = _0x314255[_0x5ca511] || 0;
      if (_0x169c0a > _0x28e09a) {
        return 1;
      }
      if (_0x169c0a < _0x28e09a) {
        return -1;
      }
    }
    return 0;
  }
  async checkForUpdate() {
    logInfo("🔍 正在检查更新...");
    try {
      this.updateInfo = await this.fetchUpdateInfo();
      this.latestVersion = this.updateInfo.version;
      const _0xc3243 = this.compareVersions(this.currentVersion, this.latestVersion);
      if (_0xc3243 < 0) {
        this.updateAvailable = true;
        logInfo("🎉 发现新版本: " + this.latestVersion + " (当前: " + this.currentVersion + ")");
        return true;
      } else {
        _0xc3243 === 0 ? logInfo("✅ 已是最新版本") : logInfo("ℹ️  当前版本比线上版本新（可能是开发版本）");
      }
      return false;
    } catch (_0x1ab313) {
      logWarning("⚠️ 检查更新失败: " + _0x1ab313.message);
      return false;
    } finally {
      this.saveLastCheckTime();
    }
  }
  async downloadFromGitee(_0x4059ca, _0xdd5302) {
    return new Promise((_0x382f9e, _0x33f225) => {
      const _0x51cc17 = new URL(_0x4059ca);
      const _0x42e5c5 = {
        hostname: _0x51cc17.hostname,
        port: _0x51cc17.port || 443,
        path: _0x51cc17.pathname,
        method: "GET",
        headers: {
          "User-Agent": "NFSQ-Updater/1.0"
        },
        timeout: 30000
      };
      const _0x2cff9d = fs.createWriteStream(_0xdd5302);
      https.get(_0x42e5c5, _0x4fb6aa => {
        if (_0x4fb6aa.statusCode !== 200) {
          _0x33f225(new Error("HTTP " + _0x4fb6aa.statusCode));
          return;
        }
        _0x4fb6aa.pipe(_0x2cff9d);
        _0x2cff9d.on("finish", () => {
          _0x2cff9d.close();
          _0x382f9e();
        });
        _0x2cff9d.on("error", _0x10fe7e => {
          fs.unlinkSync(_0xdd5302);
          _0x33f225(_0x10fe7e);
        });
      }).on("error", _0x34a1a0 => {
        _0x33f225(_0x34a1a0);
      }).on("timeout", () => {
        _0x33f225(new Error("下载超时"));
      });
    });
  }
  backupCurrentScript() {
    try {
      !fs.existsSync(UPDATE_CONFIG.backupFolder) && fs.mkdirSync(UPDATE_CONFIG.backupFolder, {
        recursive: true
      });
      const _0x2f99b8 = new Date().toISOString().replace(/[:.]/g, "-");
      const _0x5f47bd = path.join(UPDATE_CONFIG.backupFolder, "nfsq_backup_" + _0x2f99b8 + ".js");
      fs.copyFileSync(process.argv[1], _0x5f47bd);
      logInfo("📁 备份创建: " + _0x5f47bd);
      return _0x5f47bd;
    } catch (_0x46a595) {
      throw new Error("备份失败: " + _0x46a595.message);
    }
  }
  validateScript(_0x22a4bd) {
    try {
      const _0x3cbd4d = fs.readFileSync(_0x22a4bd, "utf8");
      const _0x4c3ad4 = fs.statSync(_0x22a4bd);
      if (_0x4c3ad4.size < 1024) {
        return false;
      }
      if (!_0x3cbd4d.includes("NongFuSpringLottery") || !_0x3cbd4d.includes("UpdateManager")) {
        return false;
      }
      if (!_0x3cbd4d.includes("currentVersion")) {
        return false;
      }
      return true;
    } catch (_0x179df9) {
      return false;
    }
  }
  async applyUpdate() {
    if (!this.updateAvailable) {
      throw new Error("没有可用的更新");
    }
    logInfo("🔄 开始更新到版本 " + this.latestVersion + "...");
    const _0x55c9c3 = process.argv[1] + ".new";
    const _0x3557ab = this.backupCurrentScript();
    try {
      await this.downloadFromGitee(UPDATE_CONFIG.scriptUrl, _0x55c9c3);
      if (!this.validateScript(_0x55c9c3)) {
        throw new Error("下载的文件验证失败");
      }
      fs.renameSync(_0x55c9c3, process.argv[1]);
      try {
        fs.chmodSync(process.argv[1], "755");
      } catch (_0x2ec9d9) {}
      logInfo("✅ 更新成功! 新版本: v" + this.latestVersion);
      this.updateInfo.changelog && (console.log("\n[35m📋 更新内容:[0m"), console.log(this.updateInfo.changelog), console.log());
      return true;
    } catch (_0x3b427c) {
      logError("❌ 更新失败: " + _0x3b427c.message);
      try {
        fs.existsSync(_0x3557ab) && (fs.copyFileSync(_0x3557ab, process.argv[1]), logInfo("↩️  已恢复备份版本"));
      } catch (_0x57fac9) {
        logError("❌ 恢复备份失败");
      }
      throw _0x3b427c;
    }
  }
  async showUpdatePrompt() {
    if (!this.updateInfo) {
      return false;
    }
    console.log("\n[33m" + "=".repeat(60) + "[0m");
    console.log("[33m✨ 发现新版本![0m");
    console.log("[36m" + ("当前版本: " + this.currentVersion) + "[0m");
    console.log("[32m" + ("最新版本: " + this.latestVersion) + "[0m");
    this.updateInfo.changelog && (console.log("\n[35m更新内容:[0m"), console.log(this.updateInfo.changelog));
    console.log("\n[33m" + "=".repeat(60) + "[0m");
    if (UPDATE_CONFIG.autoUpdate) {
      logInfo("🔧 自动更新模式，开始更新...");
      return true;
    }
    const _0x584315 = require("readline");
    const _0xe8a72c = _0x584315.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    return new Promise(_0x362c9c => {
      _0xe8a72c.question("[34m是否立即更新? (Y/n): [0m", _0x4c011e => {
        _0xe8a72c.close();
        _0x362c9c(_0x4c011e.toLowerCase() === "y" || _0x4c011e === "");
      });
    });
  }
  async runUpdateProcess() {
    try {
      this.showBanner();
      if (!this.shouldCheckUpdate()) {
        return false;
      }
      if (!(await this.checkForUpdate())) {
        return false;
      }
      if (!(await this.showUpdatePrompt())) {
        logInfo("⏸️  用户取消更新");
        return false;
      }
      await this.applyUpdate();
      console.log("\n[32m🔄 更新完成! 请重启脚本以应用新版本。[0m");
      console.log("[36m   运行命令: node " + path.basename(process.argv[1]) + "[0m");
      return true;
    } catch (_0x26246f) {
      logError("❌ 更新过程出错: " + _0x26246f.message);
      return false;
    }
  }
  async standaloneUpdate() {
    console.log("[36m\n🚀 独立更新模式[0m");
    console.log("[36m" + "=".repeat(50) + "[0m");
    try {
      this.updateInfo = await this.fetchUpdateInfo();
      this.latestVersion = this.updateInfo.version;
      return this.compareVersions(this.currentVersion, this.latestVersion) < 0 ? await this.applyUpdate() : (logInfo("✅ 已是最新版本"), false);
    } catch (_0xf2ba3e) {
      logError("❌ 独立更新失败: " + _0xf2ba3e.message);
      return false;
    }
  }
}
function sleep(_0x1c44e8) {
  return new Promise(_0x193c52 => setTimeout(_0x193c52, _0x1c44e8));
}
function randomInt(_0x40d1ac, _0x219349) {
  return Math.floor(Math.random() * (_0x219349 - _0x40d1ac + 1)) + _0x40d1ac;
}
function randomFloat(_0xf58dfb, _0x1ed930) {
  return Math.random() * (_0x1ed930 - _0xf58dfb) + _0xf58dfb;
}
function encodeURIComponentSafe(_0x3d9607) {
  return encodeURIComponent(_0x3d9607).replace(/'/g, "%27").replace(/"/g, "%22");
}
async function makeRequest(_0x45642d, _0x7c93cb, _0x25c849 = {}, _0x229c2c = null, _0x3afa3c = null) {
  return new Promise((_0x5f1aee, _0x4bd8c7) => {
    const _0xd97d0c = new URL(_0x7c93cb);
    const _0x559ae1 = {
      hostname: _0xd97d0c.hostname,
      port: _0xd97d0c.port || (_0xd97d0c.protocol === "https:" ? 443 : 80),
      path: _0xd97d0c.pathname + _0xd97d0c.search,
      method: _0x45642d,
      headers: _0x25c849
    };
    const _0x5adf37 = _0xd97d0c.protocol === "https:" ? https : http;
    const _0x15a611 = _0x5adf37.request(_0x559ae1, _0x3cf100 => {
      let _0xa66ad = "";
      _0x3cf100.on("data", _0x4e5d25 => {
        _0xa66ad += _0x4e5d25;
      });
      _0x3cf100.on("end", () => {
        try {
          const _0x40fd90 = JSON.parse(_0xa66ad);
          _0x5f1aee({
            status: _0x3cf100.statusCode,
            data: _0x40fd90,
            headers: _0x3cf100.headers
          });
        } catch (_0x5148de) {
          _0x5f1aee({
            status: _0x3cf100.statusCode,
            data: _0xa66ad,
            headers: _0x3cf100.headers
          });
        }
      });
    });
    _0x15a611.on("error", _0xfad894 => {
      _0x4bd8c7(_0xfad894);
    });
    _0x229c2c && (_0x45642d === "POST" || _0x45642d === "PUT") && _0x15a611.write(JSON.stringify(_0x229c2c));
    _0x15a611.end();
  });
}
class LocationPool {
  constructor() {
    this.locationData = {
      "北京市": {
        districts: ["东城区", "西城区", "朝阳区", "丰台区", "海淀区"],
        center: [116.4074, 39.9042],
        address_templates: ["{city}{district}长安街{number}号", "{city}{district}王府井大街{number}号"]
      },
      "上海市": {
        districts: ["黄浦区", "徐汇区", "长宁区", "静安区", "浦东新区"],
        center: [121.4737, 31.2304],
        address_templates: ["{city}{district}南京东路{number}号", "{city}{district}淮海中路{number}号"]
      }
    };
    this.allLocations = this.generateAllLocations();
  }
  generateAllLocations() {
    const _0x48c055 = [];
    for (const [_0x215c14, _0x4e8093] of Object.entries(this.locationData)) {
      const _0x58ba9e = _0x215c14;
      const [_0xe0a07d, _0x554ffd] = _0x4e8093.center;
      const _0x236435 = _0x4e8093.districts;
      const _0x5c1b76 = _0x4e8093.address_templates;
      for (const _0xa2dd84 of _0x236435) {
        for (let _0x2d1067 = 0; _0x2d1067 < 3; _0x2d1067++) {
          const _0x42d206 = this.createLocation(_0x215c14, _0x58ba9e, _0xa2dd84, _0x554ffd, _0xe0a07d, _0x5c1b76);
          _0x48c055.push(_0x42d206);
        }
      }
    }
    return _0x48c055;
  }
  createLocation(_0x3601e8, _0x5520d8, _0x2c67e5, _0x27f3fd, _0x57683f, _0x1eaf13) {
    const _0x214178 = randomFloat(-0.05, 0.05);
    const _0x2ca191 = randomFloat(-0.05, 0.05);
    const _0x10d25b = _0x27f3fd + _0x214178;
    const _0x1b29fd = _0x57683f + _0x2ca191;
    const _0x184384 = randomInt(1, 999);
    const _0x13d54d = _0x1eaf13[randomInt(0, _0x1eaf13.length - 1)];
    const _0x348245 = _0x13d54d.replace(/{province}/g, _0x3601e8).replace(/{city}/g, _0x5520d8).replace(/{district}/g, _0x2c67e5).replace(/{number}/g, _0x184384);
    return {
      provice_name: _0x3601e8,
      city_name: _0x5520d8,
      area_name: _0x2c67e5,
      address: _0x348245,
      longitude: _0x1b29fd,
      dimension: _0x10d25b
    };
  }
  getRandomLocation() {
    return this.allLocations[randomInt(0, this.allLocations.length - 1)];
  }
  getLocationsCount() {
    return this.allLocations.length;
  }
}
class NongFuSpringLottery {
  constructor() {
    this.accounts = [];
    this.allResults = [];
    this.locationPool = new LocationPool();
    this.updateManager = new UpdateManager();
    this.taskIds = [{
      name: "分享任务",
      task_id: "2510301516431"
    }, {
      name: "浏览得机会",
      task_id: "2510301515552"
    }, {
      name: "观看视频号",
      task_id: "2510301517291"
    }, {
      name: "浏览公众号",
      task_id: "2510301518121"
    }];
    this.firstPrizeLocation = null;
    this.firstPrizeAccount = null;
    this.firstPrizeFound = false;
    this.headers = {
      "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
      "Content-Type": "application/json",
      Accept: "application/json, text/plain, */*"
    };
  }
  async checkUpdatesAsync() {
    try {
      const _0x451790 = new UpdateManager();
      setTimeout(async () => {
        try {
          (await _0x451790.checkForUpdate()) && logInfo("📢 新版本 " + _0x451790.latestVersion + " 可用，运行 'node " + path.basename(process.argv[1]) + " update' 更新");
        } catch (_0x4f52af) {}
      }, 1000);
    } catch (_0x2f10d8) {}
  }
  loadAccounts() {
    try {
      const _0x133338 = process.env.nfsq;
      if (!_0x133338) {
        logError("❌ 未找到环境变量 'nfsq'");
        return false;
      }
      const _0x4bdc8a = _0x133338.includes("&") ? _0x133338.split("&") : _0x133338.split("\n");
      for (const _0x285124 of _0x4bdc8a) {
        const _0x2d8b9e = _0x285124.trim();
        if (!_0x2d8b9e) {
          continue;
        }
        const _0x187bbc = _0x2d8b9e.split("#");
        if (_0x187bbc.length >= 3) {
          const _0x37a71f = _0x187bbc[0];
          const _0x5aa341 = _0x187bbc[1];
          const _0x32e372 = _0x187bbc[2];
          const _0x1ac318 = _0x187bbc.length > 3 ? _0x187bbc[3] : null;
          this.accounts.push({
            remark: _0x37a71f,
            unique_identity: _0x5aa341,
            apitoken: _0x32e372,
            proxy: _0x1ac318
          });
          logInfo("✅ 加载账号: " + _0x37a71f);
        } else {
          logWarning("⚠️ 跳过格式错误的账号: " + _0x2d8b9e);
        }
      }
      logInfo("🎯 成功加载 " + this.accounts.length + " 个账号");
      logInfo("🗺️ 定位池包含 " + this.locationPool.getLocationsCount() + " 个位置");
      return true;
    } catch (_0x3ae4df) {
      logError("❌ 加载账号失败: " + _0x3ae4df.message);
      return false;
    }
  }
  async executeTasks(_0x2918f4) {
    try {
      logInfo("📋 开始执行任务: " + _0x2918f4.remark);
      const _0x514e6d = [];
      let _0x215614 = 0;
      for (const _0x21bd15 of this.taskIds) {
        const _0x4aedd1 = _0x21bd15.name;
        const _0x5866ef = _0x21bd15.task_id;
        try {
          const _0x19aa2c = new Date().toISOString().replace("T", " ").substr(0, 19);
          const _0x26be0f = encodeURIComponentSafe(_0x19aa2c);
          const _0x4eca29 = "https://sxs-consumer.nfsq.com.cn/geement.marketingplay/api/v1/task/join?action_time=" + _0x26be0f + "&task_id=" + _0x5866ef;
          logInfo("   📤 执行任务: " + _0x4aedd1);
          const _0xc048d4 = {
            ...this.headers,
            unique_identity: _0x2918f4.unique_identity,
            apitoken: _0x2918f4.apitoken
          };
          const _0x3c1190 = await makeRequest("GET", _0x4eca29, _0xc048d4, null, _0x2918f4.proxy);
          if (_0x3c1190.data.success && _0x3c1190.data.code === 200) {
            logInfo("     ✅ " + _0x4aedd1 + "成功");
            _0x514e6d.push({
              task_name: _0x4aedd1,
              success: true,
              completed: true
            });
            _0x215614++;
          } else {
            const _0x1d4c76 = _0x3c1190.data.msg || "未知错误";
            _0x1d4c76.includes("已参与任务") ? (logInfo("     ℹ️ " + _0x4aedd1 + "已参与"), _0x514e6d.push({
              task_name: _0x4aedd1,
              success: true,
              completed: false,
              already_done: true
            })) : (logWarning("     ⚠️ " + _0x4aedd1 + "失败: " + _0x1d4c76), _0x514e6d.push({
              task_name: _0x4aedd1,
              success: false,
              error: _0x1d4c76,
              completed: false
            }));
          }
          await sleep(randomInt(1000, 2000));
        } catch (_0x2d2a63) {
          logError("     ❌ " + _0x4aedd1 + "异常: " + _0x2d2a63.message);
          _0x514e6d.push({
            task_name: _0x4aedd1,
            success: false,
            error: _0x2d2a63.message,
            completed: false
          });
        }
      }
      logInfo("✅ 任务执行完成: " + _0x215614 + "/" + this.taskIds.length + " 个任务完成");
      return {
        success: true,
        task_results: _0x514e6d,
        completed_tasks: _0x215614
      };
    } catch (_0x57dbac) {
      logError("❌ 执行任务异常: " + _0x57dbac.message);
      return {
        success: false,
        error: _0x57dbac.message
      };
    }
  }
  getLocationForAccount(_0xad3a01, _0x4a0051) {
    if (this.firstPrizeFound && this.firstPrizeLocation) {
      logInfo("🎯 使用一等奖定位: " + _0xad3a01.remark + " (来自: " + this.firstPrizeAccount + ")");
      return JSON.parse(JSON.stringify(this.firstPrizeLocation));
    }
    return this.locationPool.getRandomLocation();
  }
  checkAndRecordFirstPrize(_0x3e5989, _0x453586, _0x58b0fa) {
    if (_0x453586.success && _0x453586.prize_level) {
      const _0x27b0b6 = _0x453586.prize_level;
      _0x27b0b6.includes("一等奖") && !this.firstPrizeFound && (this.firstPrizeFound = true, this.firstPrizeLocation = JSON.parse(JSON.stringify(_0x58b0fa)), this.firstPrizeAccount = _0x3e5989.remark, logInfo("🎉🎉🎉 发现一等奖! 来自账号: " + _0x3e5989.remark), logInfo("📍 一等奖定位: " + _0x58b0fa.provice_name + _0x58b0fa.city_name + _0x58b0fa.area_name), logInfo("📝 后续所有账号将使用此定位"));
    }
  }
  async lotteryDraw(_0x311431, _0x6ed66b, _0x24f0d7) {
    const _0xa130dc = [];
    const _0x449db9 = "https://sxs-consumer.nfsq.com.cn/geement.marketinglottery/api/v1/marketinglottery";
    logInfo("🎰 开始系统抽奖: " + _0x311431.remark + " (共3次)");
    for (let _0x1288b7 = 0; _0x1288b7 < 3; _0x1288b7++) {
      try {
        const _0x120c56 = this.getLocationForAccount(_0x311431, _0x24f0d7);
        const _0x4d6ab0 = {
          code: "SCENE-2510301508361",
          provice_name: _0x120c56.provice_name,
          city_name: _0x120c56.city_name,
          area_name: _0x120c56.area_name,
          address: _0x120c56.address,
          longitude: _0x120c56.longitude,
          dimension: _0x120c56.dimension
        };
        logInfo("🎯 第 " + (_0x1288b7 + 1) + "/3 次系统抽奖: " + _0x311431.remark);
        this.firstPrizeFound ? logInfo("   📍 位置: " + _0x120c56.provice_name + _0x120c56.city_name + _0x120c56.area_name + " (一等奖定位)") : logInfo("   📍 位置: " + _0x120c56.provice_name + _0x120c56.city_name + _0x120c56.area_name);
        const _0x58dcbb = {
          ...this.headers,
          unique_identity: _0x311431.unique_identity,
          apitoken: _0x311431.apitoken
        };
        const _0x1d9205 = await makeRequest("POST", _0x449db9, _0x58dcbb, _0x4d6ab0, _0x311431.proxy);
        if (_0x1d9205.data.success && _0x1d9205.data.code === 200) {
          const _0x1e5ea8 = _0x1d9205.data.data || {};
          const _0x4350f9 = _0x1e5ea8.prizedto || {};
          const _0xa50891 = _0x4350f9.prize_name || "未知奖品";
          const _0x1b5dc6 = _0x4350f9.prize_level || "未知等级";
          logInfo("🎉 系统抽奖成功! 获得: " + _0xa50891 + " (等级: " + _0x1b5dc6 + ")");
          const _0x3fc88d = {
            round: _0x1288b7 + 1,
            type: "系统",
            location: "" + _0x120c56.provice_name + _0x120c56.city_name + _0x120c56.area_name,
            success: true,
            prize_name: _0xa50891,
            prize_level: _0x1b5dc6,
            raw_data: _0x1e5ea8
          };
          _0xa130dc.push(_0x3fc88d);
          this.checkAndRecordFirstPrize(_0x311431, _0x3fc88d, _0x120c56);
        } else {
          const _0x48e567 = _0x1d9205.data.msg || "未知错误";
          logInfo("ℹ️ 系统抽奖失败: " + _0x48e567);
          _0xa130dc.push({
            round: _0x1288b7 + 1,
            type: "系统",
            location: "" + _0x120c56.provice_name + _0x120c56.city_name + _0x120c56.area_name,
            success: false,
            error: _0x48e567
          });
        }
        await sleep(randomInt(2000, 3000));
      } catch (_0x398bea) {
        logError("❌ 第 " + (_0x1288b7 + 1) + " 次系统抽奖异常: " + _0x398bea.message);
        _0xa130dc.push({
          round: _0x1288b7 + 1,
          type: "系统",
          location: "未知",
          success: false,
          error: _0x398bea.message
        });
        await sleep(randomInt(2000, 3000));
      }
    }
    if (_0x6ed66b > 0) {
      logInfo("🎰 开始任务抽奖: " + _0x311431.remark + " (共" + _0x6ed66b + "次)");
      for (let _0x28a510 = 0; _0x28a510 < _0x6ed66b; _0x28a510++) {
        try {
          const _0x4b0d39 = this.getLocationForAccount(_0x311431, _0x24f0d7);
          const _0x3f766a = {
            code: "SCENE-2510301509021",
            provice_name: _0x4b0d39.provice_name,
            city_name: _0x4b0d39.city_name,
            area_name: _0x4b0d39.area_name,
            address: _0x4b0d39.address,
            longitude: _0x4b0d39.longitude,
            dimension: _0x4b0d39.dimension
          };
          logInfo("🎯 第 " + (_0x28a510 + 1) + "/" + _0x6ed66b + " 次任务抽奖: " + _0x311431.remark);
          this.firstPrizeFound ? logInfo("   📍 位置: " + _0x4b0d39.provice_name + _0x4b0d39.city_name + _0x4b0d39.area_name + " (一等奖定位)") : logInfo("   📍 位置: " + _0x4b0d39.provice_name + _0x4b0d39.city_name + _0x4b0d39.area_name);
          const _0x2e51cb = {
            ...this.headers,
            unique_identity: _0x311431.unique_identity,
            apitoken: _0x311431.apitoken
          };
          const _0x4fe6b8 = await makeRequest("POST", _0x449db9, _0x2e51cb, _0x3f766a, _0x311431.proxy);
          if (_0x4fe6b8.data.success && _0x4fe6b8.data.code === 200) {
            const _0x5e2d44 = _0x4fe6b8.data.data || {};
            const _0x2e15b8 = _0x5e2d44.prizedto || {};
            const _0x318c42 = _0x2e15b8.prize_name || "未知奖品";
            const _0x40baad = _0x2e15b8.prize_level || "未知等级";
            logInfo("🎉 任务抽奖成功! 获得: " + _0x318c42 + " (等级: " + _0x40baad + ")");
            const _0x5c8e5c = {
              round: 3 + _0x28a510 + 1,
              type: "任务",
              location: "" + _0x4b0d39.provice_name + _0x4b0d39.city_name + _0x4b0d39.area_name,
              success: true,
              prize_name: _0x318c42,
              prize_level: _0x40baad,
              raw_data: _0x5e2d44
            };
            _0xa130dc.push(_0x5c8e5c);
            this.checkAndRecordFirstPrize(_0x311431, _0x5c8e5c, _0x4b0d39);
          } else {
            const _0x509d60 = _0x4fe6b8.data.msg || "未知错误";
            logInfo("ℹ️ 任务抽奖失败: " + _0x509d60);
            _0xa130dc.push({
              round: 3 + _0x28a510 + 1,
              type: "任务",
              location: "" + _0x4b0d39.provice_name + _0x4b0d39.city_name + _0x4b0d39.area_name,
              success: false,
              error: _0x509d60
            });
          }
          await sleep(randomInt(2000, 3000));
        } catch (_0x18bcf5) {
          logError("❌ 第 " + (_0x28a510 + 1) + " 次任务抽奖异常: " + _0x18bcf5.message);
          _0xa130dc.push({
            round: 3 + _0x28a510 + 1,
            type: "任务",
            location: "未知",
            success: false,
            error: _0x18bcf5.message
          });
          await sleep(randomInt(2000, 3000));
        }
      }
    }
    const _0x31fc39 = _0xa130dc.filter(_0x4467cf => _0x4467cf.success).length;
    logInfo("🏁 抽奖结束: 共尝试 " + _0xa130dc.length + " 次，成功 " + _0x31fc39 + " 次");
    return _0xa130dc;
  }
  async queryPrizeDetails(_0x3f891c) {
    try {
      const _0x521487 = "ACT2510301507191%2CACT2510301505581";
      const _0x41effc = "https://sxs-consumer.nfsq.com.cn/geement.actjextra/api/v1/act/win/goods/simple?act_codes=" + _0x521487;
      logInfo("📋 查询奖品明细: " + _0x3f891c.remark);
      const _0x2352c1 = {
        ...this.headers,
        unique_identity: _0x3f891c.unique_identity,
        apitoken: _0x3f891c.apitoken
      };
      const _0x47b8bb = await makeRequest("GET", _0x41effc, _0x2352c1, null, _0x3f891c.proxy);
      if (_0x47b8bb.data.success && _0x47b8bb.data.code === 200) {
        const _0xb1508 = _0x47b8bb.data.data || [];
        const _0x3b6814 = {};
        for (const _0x13a7a0 of _0xb1508) {
          const _0x24e95c = _0x13a7a0.win_goods_name || "未知奖品";
          _0x3b6814[_0x24e95c] = (_0x3b6814[_0x24e95c] || 0) + 1;
        }
        const _0x37da91 = [];
        for (const [_0x58a4e8, _0x25d583] of Object.entries(_0x3b6814)) {
          _0x25d583 > 1 ? _0x37da91.push(_0x58a4e8 + "×" + _0x25d583) : _0x37da91.push(_0x58a4e8);
        }
        logInfo("📦 奖品明细: " + _0x37da91.join(", "));
        return {
          success: true,
          total_count: _0xb1508.length,
          merged_prizes: _0x37da91
        };
      } else {
        const _0x1a5666 = _0x47b8bb.data.msg || "未知错误";
        logWarning("⚠️ 查询奖品明细失败: " + _0x1a5666);
        return {
          success: false,
          error: _0x1a5666
        };
      }
    } catch (_0x793e98) {
      logError("❌ 查询奖品明细异常: " + _0x793e98.message);
      return {
        success: false,
        error: _0x793e98.message
      };
    }
  }
  async runSingleAccount(_0x2d6a53, _0x2c710e) {
    logInfo("\n" + "=".repeat(50));
    logInfo("🚀 开始处理账号: " + _0x2d6a53.remark);
    this.firstPrizeFound && logInfo("📍 使用一等奖定位 (来自: " + this.firstPrizeAccount + ")");
    logInfo("" + "=".repeat(50));
    try {
      const _0x3586a5 = await this.executeTasks(_0x2d6a53);
      const _0x4a6469 = _0x3586a5.completed_tasks || 0;
      const _0x2321e5 = await this.lotteryDraw(_0x2d6a53, _0x4a6469, _0x2c710e);
      const _0x3312d6 = await this.queryPrizeDetails(_0x2d6a53);
      const _0x4401d5 = _0x2321e5.filter(_0x5366d4 => _0x5366d4.success).length;
      const _0x4a6fff = {
        account: _0x2d6a53.remark,
        task_results: _0x3586a5.task_results || [],
        completed_tasks: _0x4a6469,
        lottery_results: _0x2321e5,
        success_count: _0x4401d5,
        prize_details: _0x3312d6
      };
      this.allResults.push(_0x4a6fff);
      logInfo("✅ 账号 " + _0x2d6a53.remark + " 处理完成");
    } catch (_0xac25b6) {
      logError("❌ 账号 " + _0x2d6a53.remark + " 处理失败: " + _0xac25b6.message);
      this.allResults.push({
        account: _0x2d6a53.remark,
        error: _0xac25b6.message,
        success: false
      });
    }
  }
  summarizeResults() {
    logInfo("\n" + "=".repeat(60));
    logInfo("📊 任务执行汇总");
    logInfo("" + "=".repeat(60));
    const _0x5b3e65 = this.allResults.length;
    const _0x172d2f = this.allResults.reduce((_0x5460ca, _0x5962b4) => _0x5460ca + (_0x5962b4.success_count || 0), 0);
    const _0x211866 = this.allResults.reduce((_0x458674, _0x2ad7cb) => {
      if (_0x2ad7cb.prize_details && _0x2ad7cb.prize_details.success) {
        return _0x458674 + (_0x2ad7cb.prize_details.total_count || 0);
      }
      return _0x458674;
    }, 0);
    logInfo("👥 总账号数: " + _0x5b3e65);
    logInfo("🎁 本次中奖: " + _0x172d2f + " 次");
    logInfo("📦 历史奖品: " + _0x211866 + " 个");
    this.firstPrizeFound ? (logInfo("🎉 发现一等奖: 是 (来自: " + this.firstPrizeAccount + ")"), logInfo("📍 一等奖定位: " + this.firstPrizeLocation.provice_name + this.firstPrizeLocation.city_name + this.firstPrizeLocation.area_name)) : logInfo("🎉 发现一等奖: 否");
    logInfo("🗺️ 定位策略: " + (this.firstPrizeFound ? "使用一等奖定位" : "随机位置"));
    for (const _0x3cfd0b of this.allResults) {
      if (_0x3cfd0b.error) {
        logInfo("❌ " + _0x3cfd0b.account + ": 执行失败 - " + _0x3cfd0b.error);
      } else {
        let _0x235211 = 0;
        let _0x4a659b = 0;
        if (_0x3cfd0b.lottery_results) {
          for (const _0x571b59 of _0x3cfd0b.lottery_results) {
            if (_0x571b59.success) {
              if (_0x571b59.type === "系统") {
                _0x235211++;
              } else {
                _0x571b59.type === "任务" && _0x4a659b++;
              }
            }
          }
        }
        const _0x5ecdc4 = "，系统抽奖:" + _0x235211 + "/3";
        const _0x3700b2 = "，任务抽奖:" + _0x4a659b + "/" + _0x3cfd0b.completed_tasks;
        const _0x588721 = [];
        if (_0x3cfd0b.lottery_results) {
          for (const _0x41d4e5 of _0x3cfd0b.lottery_results) {
            if (_0x41d4e5.success) {
              const _0x20f982 = _0x41d4e5.type === "系统" ? "系统" : "任务";
              const _0x23d6d3 = _0x41d4e5.prize_level && _0x41d4e5.prize_level.includes("一等奖") ? "🎉" : "";
              _0x588721.push("第" + _0x41d4e5.round + "次(" + _0x20f982 + "):" + _0x41d4e5.prize_name + _0x23d6d3);
            }
          }
        }
        const _0x2ea8ae = _0x588721.length > 0 ? "，本次:" + _0x588721.join(", ") : "";
        const _0xd6909b = _0x3cfd0b.prize_details || {};
        let _0x301133 = "";
        _0xd6909b.success ? _0x301133 = "，历史:" + _0xd6909b.merged_prizes.join(", ") : _0x301133 = "，历史:无";
        logInfo("✅ " + _0x3cfd0b.account + ": 完成任务" + _0x3cfd0b.completed_tasks + "个" + _0x5ecdc4 + _0x3700b2 + "，中奖" + _0x3cfd0b.success_count + "次" + _0x2ea8ae + _0x301133);
      }
    }
  }
  async run() {
    const _0x4b7e7b = Date.now();
    const _0x34bd9b = new UpdateManager();
    _0x34bd9b.showBanner();
    await this.checkUpdatesAsync();
    if (!this.loadAccounts()) {
      return;
    }
    for (let _0x1535a0 = 0; _0x1535a0 < this.accounts.length; _0x1535a0++) {
      await this.runSingleAccount(this.accounts[_0x1535a0], _0x1535a0);
      await sleep(randomInt(3000, 5000));
    }
    this.summarizeResults();
    const _0x12548f = Date.now();
    const _0x23080d = Math.floor((_0x12548f - _0x4b7e7b) / 1000);
    logInfo("🏁 任务执行完成，总耗时: " + _0x23080d + " 秒");
  }
}
async function main() {
  const _0x3d8521 = process.argv.slice(2);
  if (_0x3d8521.includes("update") || _0x3d8521.includes("--update") || _0x3d8521.includes("-u")) {
    const _0x32aee1 = new UpdateManager();
    const _0x14723d = await _0x32aee1.runUpdateProcess();
    _0x14723d && process.exit(0);
    return;
  }
  if (_0x3d8521.includes("help") || _0x3d8521.includes("--help") || _0x3d8521.includes("-h")) {
    console.log("[36m" + "=".repeat(60) + "[0m");
    console.log("[32m📖 农夫山泉抽奖脚本使用说明[0m");
    console.log("[36m" + "=".repeat(60) + "[0m");
    console.log();
    console.log("[34m使用方法:[0m");
    console.log("  node nfsq.js                    # 运行抽奖脚本");
    console.log("  node nfsq.js update            # 检查并更新脚本");
    console.log("  node nfsq.js help              # 显示帮助信息");
    console.log();
    console.log("[34m环境变量:[0m");
    console.log("  export nfsq=\"账号1#unique1#token1&账号2#unique2#token2\"");
    console.log();
    console.log("[34m更新配置:[0m");
    console.log("  自动更新: 脚本启动时自动检查更新");
    console.log("  手动更新: 运行 node nfsq.js update");
    console.log();
    console.log("[33m仓库地址: https://gitee.com/shusvip/qinglong[0m");
    console.log("[36m" + "=".repeat(60) + "[0m");
    return;
  }
  if (_0x3d8521.includes("version") || _0x3d8521.includes("--version") || _0x3d8521.includes("-v")) {
    const _0x318ce5 = new UpdateManager();
    _0x318ce5.showBanner();
    return;
  }
  try {
    const _0x1675a5 = new NongFuSpringLottery();
    await _0x1675a5.run();
  } catch (_0x1603ef) {
    logError("💥 脚本执行异常: " + _0x1603ef.message);
  }
}
process.on("SIGINT", () => {
  logInfo("👋 用户中断执行");
  process.exit(0);
});
process.on("uncaughtException", _0x1b8476 => {
  logError("💥 未捕获异常: " + _0x1b8476.message);
  process.exit(1);
});
process.on("unhandledRejection", _0xbb7e78 => {
  logError("💥 未处理的Promise拒绝: " + _0xbb7e78.message);
  process.exit(1);
});
require.main === module && main();
module.exports = {
  NongFuSpringLottery: NongFuSpringLottery,
  LocationPool: LocationPool,
  UpdateManager: UpdateManager
};