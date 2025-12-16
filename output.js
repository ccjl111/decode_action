//Tue Dec 16 2025 02:09:40 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
const $ = new Env("望潮");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(ac) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ad) {
      return typeof ad;
    } : function (ad) {
      return ad && "function" == typeof Symbol && ad.constructor === Symbol && ad !== Symbol.prototype ? "symbol" : typeof ad;
    };
    return b(ac);
  }
  function c(ac, ad) {
    {
      var af = "undefined" != typeof Symbol && ac[Symbol.iterator] || ac["@@iterator"];
      if (!af) {
        {
          if (Array.isArray(ac) || (af = d(ac)) || ad && ac && "number" == typeof ac.length) {
            {
              af && (ac = af);
              var ag = 0;
              var ah = function () {};
              return {
                s: ah,
                n: function () {
                  {
                    var al = {
                      done: true
                    };
                    return ag >= ac.length ? al : {
                      done: false,
                      value: ac[ag++]
                    };
                  }
                },
                e: function (al) {
                  {
                    throw al;
                  }
                },
                f: ah
              };
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
      }
      var ai;
      var aj = true;
      var ak = false;
      return {
        s: function () {
          af = af.call(ac);
        },
        n: function () {
          {
            var ao = af.next();
            aj = ao.done;
            return ao;
          }
        },
        e: function (an) {
          {
            ak = true;
            ai = an;
          }
        },
        f: function () {
          {
            try {
              aj || null == af.return || af.return();
            } finally {
              {
                if (ak) {
                  throw ai;
                }
              }
            }
          }
        }
      };
    }
  }
  function d(ac, ad) {
    {
      if (ac) {
        {
          if ("string" == typeof ac) {
            return f(ac, ad);
          }
          var ae = {}.toString.call(ac).slice(8, -1);
          "Object" === ae && ac.constructor && (ae = ac.constructor.name);
          return "Map" === ae || "Set" === ae ? Array.from(ac) : "Arguments" === ae || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ae) ? f(ac, ad) : undefined;
        }
      }
    }
  }
  function f(ac, ad) {
    {
      (null == ad || ad > ac.length) && (ad = ac.length);
      for (var af = 0, ag = Array(ad); af < ad; af++) {
        ag[af] = ac[af];
      }
      return ag;
    }
  }
  function g() {
    "use strict";

    var ac = {
      ZgWGy: "XTOlt",
      QLBkE: "oxElI",
      ZqvhD: function (aJ, aK) {
        return aJ instanceof aK;
      },
      AtMhq: function (aJ, aK, aL, aM) {
        return aJ(aK, aL, aM);
      },
      pkWnU: "_invoke",
      qwNVS: function (aJ, aK, aL, aM) {
        return aJ(aK, aL, aM);
      },
      hcsVm: function (aJ, aK) {
        return aJ(aK);
      },
      zxieI: function (aJ, aK) {
        return aJ < aK;
      },
      WiIdu: function (aJ, aK) {
        return aJ === aK;
      },
      KTWiH: "jYcDW",
      mlypn: function (aJ, aK) {
        return aJ !== aK;
      },
      RXhCr: "tUapT",
      xEFSI: "normal",
      YZgoo: "YmjFQ",
      DiLMl: "throw",
      PxtdQ: "ArFrO",
      UOvhf: "uVSMQ",
      FWbpo: function (aJ, aK, aL, aM) {
        return aJ(aK, aL, aM);
      },
      gAWbS: "IZUtz",
      Jpgka: "next",
      midDZ: "return",
      BeSWh: "JvArt",
      QDkrx: "dgQng",
      JacWr: "xRlFx",
      oePig: function (aJ, aK, aL, aM, aN) {
        return aJ(aK, aL, aM, aN);
      },
      Ejuwu: function (aJ, aK) {
        return aJ(aK);
      },
      EcoWR: function (aJ, aK) {
        return aJ + aK;
      },
      RtSsg: " is not iterable",
      XwzHS: "5|1|3|0|4|2",
      REdzc: "' method",
      WZiEa: "iterator result is not an object",
      xXosz: "lIkva",
      fQeMU: "MTvRE",
      zCRjD: function (aJ, aK) {
        return aJ == aK;
      },
      fCPKm: function (aJ, aK) {
        return aJ === aK;
      },
      dpXzV: "OAijs",
      KJEwZ: function (aJ, aK) {
        return aJ(aK);
      },
      HMDHw: "WmPkI",
      mnunb: "vfcJg",
      kWVWT: "__await",
      nxnzy: "KEcJE",
      BPfgE: function (aJ, aK, aL, aM, aN) {
        return aJ(aK, aL, aM, aN);
      },
      kDXzX: function (aJ) {
        return aJ();
      },
      QjBWv: function (aJ, aK, aL, aM) {
        return aJ(aK, aL, aM);
      },
      THriB: function (aJ, aK) {
        return aJ !== aK;
      },
      PKNFq: "KncmC",
      lpFPQ: function (aJ, aK) {
        return aJ === aK;
      },
      JqfoH: function (aJ, aK) {
        return aJ + aK;
      },
      oOfcB: "The iterator does not provide a '",
      njYoV: function (aJ, aK) {
        return aJ === aK;
      },
      lZTwB: "QExtf",
      CyrgU: "NnWIb",
      kUxTY: function (aJ, aK) {
        return aJ in aK;
      },
      abguR: function (aJ, aK) {
        return aJ >= aK;
      },
      fdfBg: "2|5|0|3|4|1",
      BXXaT: "&password=",
      iMhBU: "&phone_number=",
      nMPGr: "post%%/web/oauth/credential_auth?",
      JUorH: "client_id=",
      MGMLW: "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB",
      zESaj: "WRgkO",
      ibjep: function (aJ, aK) {
        return aJ === aK;
      },
      ETYXf: "eEvwu",
      kdnfl: "pzPVf",
      lVVRO: function (aJ, aK) {
        return aJ(aK);
      },
      xwEzx: "pzOKV",
      QTmXh: function (aJ, aK) {
        return aJ + aK;
      },
      frYIm: function (aJ, aK) {
        return aJ === aK;
      },
      woQMZ: "SUFiQ",
      NHNDK: "function",
      eRRjQ: function (aJ, aK) {
        return aJ === aK;
      },
      wHUde: "GeneratorFunction",
      kXmsh: "illegal catch attempt",
      Ltwqo: " API请求失败，请检查网路重试",
      roKez: "end",
      GqNva: "nmJro",
      RsGAw: "jctfV",
      HBKfk: function (aJ, aK) {
        return aJ === aK;
      },
      RobtP: function (aJ, aK, aL, aM, aN) {
        return aJ(aK, aL, aM, aN);
      },
      RTYiz: function (aJ, aK) {
        return aJ !== aK;
      },
      ppmGW: "eYnlp",
      fDMHi: "qMNpD",
      xgtPd: "wzSoS",
      MwDoL: function (aJ, aK) {
        return aJ == aK;
      },
      kjdFW: function (aJ, aK) {
        return aJ !== aK;
      },
      ZHMTV: "Tbgif",
      QbxbT: function (aJ, aK) {
        return aJ(aK);
      },
      Tvsfe: "IEcaN",
      JWCEj: "NuMMI",
      ChrBH: function (aJ, aK) {
        return aJ == aK;
      },
      fHWpn: function (aJ, aK) {
        return aJ > aK;
      },
      lPuaN: function (aJ, aK) {
        return aJ * aK;
      },
      uwtkC: function (aJ, aK) {
        return aJ | aK;
      },
      UFcfI: function (aJ, aK) {
        return aJ & aK;
      },
      YzEUn: function (aJ, aK) {
        return aJ === aK;
      },
      vffjI: "kNbmm",
      AKYxX: function (aJ, aK) {
        return aJ >= aK;
      },
      bbLRA: function (aJ, aK) {
        return aJ !== aK;
      },
      lqIdX: "WGoTI",
      DkGrC: function (aJ, aK) {
        return aJ <= aK;
      },
      GxayK: function (aJ, aK) {
        return aJ === aK;
      },
      mUhWu: "Utezj",
      NRuIm: "catchLoc",
      PcpWD: "finallyLoc",
      KZhWQ: function (aJ, aK) {
        return aJ && aK;
      },
      fYoWe: function (aJ, aK) {
        return aJ === aK;
      },
      bpDJr: "rsowx",
      wiAFX: "mJOQe",
      AGVRB: function (aJ, aK, aL) {
        return aJ(aK, aL);
      },
      MdhYL: "TjDha",
      SyPgY: "lpXQR",
      jBwGG: function (aJ, aK) {
        return aJ(aK);
      },
      DzkFk: function (aJ, aK) {
        return aJ > aK;
      },
      NIqiV: "XMJDH",
      SGnZG: function (aJ, aK) {
        return aJ - aK;
      },
      UKvQm: function (aJ, aK) {
        return aJ !== aK;
      },
      ZUnFo: "tekrJ",
      XDAwv: function (aJ, aK) {
        return aJ === aK;
      },
      Gzfar: function (aJ, aK) {
        return aJ(aK);
      },
      zKHTR: function (aJ, aK) {
        return aJ == aK;
      },
      Jcdfj: function (aJ) {
        return aJ();
      }
    };
    g = function () {
      return ae;
    };
    var ad;
    var ae = {
      wrap: an
    };
    var af = Object.prototype;
    var ag = af.hasOwnProperty;
    var ah = Object.defineProperty || function (aJ, aK, aL) {
      {
        aJ[aK] = aL.value;
      }
    };
    var ai = "function" == typeof Symbol ? Symbol : {};
    var aj = ai.iterator || "@@iterator";
    var ak = ai.asyncIterator || "@@asyncIterator";
    var al = ai.toStringTag || "@@toStringTag";
    function am(aJ, aK, aL) {
      var aM = {
        value: aL,
        enumerable: true,
        configurable: true,
        writable: true
      };
      Object.defineProperty(aJ, aK, aM);
      return aJ[aK];
    }
    try {
      am({}, "");
    } catch (aK) {
      {
        am = function (aM, aN, aO) {
          {
            return aM[aN] = aO;
          }
        };
      }
    }
    function an(aM, aN, aO, aP) {
      {
        var aQ = aN && aN.prototype instanceof au ? aN : au;
        var aR = Object.create(aQ.prototype);
        var aS = new aH(aP || []);
        ah(aR, "_invoke", {
          value: aD(aM, aO, aS)
        });
        return aR;
      }
    }
    function ao(aM, aN, aO) {
      {
        try {
          {
            return {
              type: "normal",
              arg: aM.call(aN, aO)
            };
          }
        } catch (aS) {
          {
            var aQ = {
              type: "throw",
              arg: aS
            };
            return aQ;
          }
        }
      }
    }
    var ap = "suspendedStart";
    var aq = "suspendedYield";
    var ar = "executing";
    var as = "completed";
    var at = {};
    function au() {}
    function av() {}
    function aw() {}
    var ax = {};
    am(ax, aj, function () {
      return this;
    });
    var ay = Object.getPrototypeOf;
    var az = ay && ay(ay(aI([])));
    az && az !== af && ag.call(az, aj) && (ax = az);
    aw.prototype = au.prototype = Object.create(ax);
    var aA = aw.prototype;
    function aB(aM) {
      ["next", "throw", "return"].forEach(function (aO) {
        {
          am(aM, aO, function (aR) {
            {
              return this._invoke(aO, aR);
            }
          });
        }
      });
    }
    function aC(aM, aN) {
      function aQ(aR, aS, aT, aU) {
        {
          var aW = ao(aM[aR], aM, aS);
          if ("throw" !== aW.type) {
            {
              var aX = aW.arg;
              var aY = aX.value;
              return aY && "object" == b(aY) && ag.call(aY, "__await") ? aN.resolve(aY.__await).then(function (b1) {
                {
                  aQ("next", b1, aT, aU);
                }
              }, function (b1) {
                {
                  aQ("throw", b1, aT, aU);
                }
              }) : aN.resolve(aY).then(function (b1) {
                {
                  aX.value = b1;
                  aT(aX);
                }
              }, function (b1) {
                return aQ("throw", b1, aT, aU);
              });
            }
          }
          aU(aW.arg);
        }
      }
      var aP;
      ah(this, "_invoke", {
        value: function (aR, aS) {
          function aU() {
            return new aN(function (aW, aX) {
              {
                aQ(aR, aS, aW, aX);
              }
            });
          }
          return aP = aP ? aP.then(aU, aU) : aU();
        }
      });
    }
    function aD(aM, aN, aO) {
      {
        var aQ = ap;
        return function (aS, aT) {
          {
            if (aQ === ar) {
              throw Error("Generator is already running");
            }
            if (aQ === as) {
              {
                if ("throw" === aS) {
                  throw aT;
                }
                var aV = {
                  value: ad,
                  done: true
                };
                return aV;
              }
            }
            for (aO.method = aS, aO.arg = aT;;) {
              {
                var aW = aO.delegate;
                if (aW) {
                  {
                    var aX = aE(aW, aO);
                    if (aX) {
                      {
                        if (aX === at) {
                          continue;
                        }
                        return aX;
                      }
                    }
                  }
                }
                if ("next" === aO.method) {
                  aO.sent = aO._sent = aO.arg;
                } else {
                  if ("throw" === aO.method) {
                    {
                      if (aQ === ap) {
                        throw aQ = as, aO.arg;
                      }
                      aO.dispatchException(aO.arg);
                    }
                  } else {
                    "return" === aO.method && aO.abrupt("return", aO.arg);
                  }
                }
                aQ = ar;
                var aY = ao(aM, aN, aO);
                if ("normal" === aY.type) {
                  {
                    if (aQ = aO.done ? as : aq, aY.arg === at) {
                      continue;
                    }
                    var aZ = {
                      value: aY.arg,
                      done: aO.done
                    };
                    return aZ;
                  }
                }
                "throw" === aY.type && (aQ = as, aO.method = "throw", aO.arg = aY.arg);
              }
            }
          }
        };
      }
    }
    function aE(aM, aN) {
      {
        var aO = aN.method;
        var aP = aM.iterator[aO];
        if (aP === ad) {
          aN.delegate = null;
          "throw" === aO && aM.iterator.return && (aN.method = "return", aN.arg = ad, aE(aM, aN), "throw" === aN.method) || "return" !== aO && (aN.method = "throw", aN.arg = new TypeError("The iterator does not provide a '" + aO + "' method"));
          return at;
        }
        var aQ = ao(aP, aM.iterator, aN.arg);
        if ("throw" === aQ.type) {
          aN.method = "throw";
          aN.arg = aQ.arg;
          aN.delegate = null;
          return at;
        }
        var aR = aQ.arg;
        return aR ? aR.done ? (aN[aM.resultName] = aR.value, aN.next = aM.nextLoc, "return" !== aN.method && (aN.method = "next", aN.arg = ad), aN.delegate = null, at) : aR : (aN.method = "throw", aN.arg = new TypeError("iterator result is not an object"), aN.delegate = null, at);
      }
    }
    function aF(aM) {
      {
        var aO = {
          tryLoc: aM[0]
        };
        1 in aM && (aO.catchLoc = aM[1]);
        2 in aM && (aO.finallyLoc = aM[2], aO.afterLoc = aM[3]);
        this.tryEntries.push(aO);
      }
    }
    function aG(aM) {
      {
        var aO = aM.completion || {};
        aO.type = "normal";
        delete aO.arg;
        aM.completion = aO;
      }
    }
    function aH(aM) {
      {
        var aN = {
          tryLoc: "root"
        };
        this.tryEntries = [aN];
        aM.forEach(aF, this);
        this.reset(true);
      }
    }
    function aI(aM) {
      {
        if (aM || "" === aM) {
          {
            var aO = aM[aj];
            if (aO) {
              return aO.call(aM);
            }
            if ("function" == typeof aM.next) {
              return aM;
            }
            if (!isNaN(aM.length)) {
              {
                var aP = -1;
                var aQ = function aR() {
                  {
                    for (; ++aP < aM.length;) {
                      if (ag.call(aM, aP)) {
                        aR.value = aM[aP];
                        aR.done = false;
                        return aR;
                      }
                    }
                    aR.value = ad;
                    aR.done = true;
                    return aR;
                  }
                };
                return aQ.next = aQ;
              }
            }
          }
        }
        throw new TypeError(b(aM) + " is not iterable");
      }
    }
    av.prototype = aw;
    ah(aA, "constructor", {
      value: aw,
      configurable: true
    });
    ah(aw, "constructor", {
      value: av,
      configurable: true
    });
    av.displayName = am(aw, al, "GeneratorFunction");
    ae.isGeneratorFunction = function (aM) {
      {
        var aP = "function" == typeof aM && aM.constructor;
        return !!aP && (aP === av || "GeneratorFunction" === (aP.displayName || aP.name));
      }
    };
    ae.mark = function (aM) {
      {
        Object.setPrototypeOf ? Object.setPrototypeOf(aM, aw) : (aM.__proto__ = aw, am(aM, al, "GeneratorFunction"));
        aM.prototype = Object.create(aA);
        return aM;
      }
    };
    ae.awrap = function (aM) {
      {
        var aN = {
          __await: aM
        };
        return aN;
      }
    };
    aB(aC.prototype);
    am(aC.prototype, ak, function () {
      {
        return this;
      }
    });
    ae.AsyncIterator = aC;
    ae.async = function (aM, aN, aO, aP, aQ) {
      {
        undefined === aQ && (aQ = Promise);
        var aS = new aC(an(aM, aN, aO, aP), aQ);
        return ae.isGeneratorFunction(aN) ? aS : aS.next().then(function (aT) {
          {
            return aT.done ? aT.value : aS.next();
          }
        });
      }
    };
    aB(aA);
    am(aA, al, "Generator");
    am(aA, aj, function () {
      return this;
    });
    am(aA, "toString", function () {
      return "[object Generator]";
    });
    ae.keys = function (aM) {
      {
        var aO = Object(aM);
        var aP = [];
        for (var aQ in aO) aP.push(aQ);
        aP.reverse();
        return function aS() {
          {
            for (; aP.length;) {
              {
                var aT = aP.pop();
                if (aT in aO) {
                  aS.value = aT;
                  aS.done = false;
                  return aS;
                }
              }
            }
            aS.done = true;
            return aS;
          }
        };
      }
    };
    ae.values = aI;
    aH.prototype = {
      constructor: aH,
      reset: function (aM) {
        {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = ad, this.done = false, this.delegate = null, this.method = "next", this.arg = ad, this.tryEntries.forEach(aG), !aM) {
            for (var aN in this) "t" === aN.charAt(0) && ag.call(this, aN) && !isNaN(+aN.slice(1)) && (this[aN] = ad);
          }
        }
      },
      stop: function () {
        {
          this.done = true;
          var aN = this.tryEntries[0].completion;
          if ("throw" === aN.type) {
            throw aN.arg;
          }
          return this.rval;
        }
      },
      dispatchException: function (aM) {
        {
          if (this.done) {
            throw aM;
          }
          var aO = this;
          function aU(aV, aW) {
            {
              aR.type = "throw";
              aR.arg = aM;
              aO.next = aV;
              aW && (aO.method = "next", aO.arg = ad);
              return !!aW;
            }
          }
          for (var aP = this.tryEntries.length - 1; aP >= 0; --aP) {
            {
              var aQ = this.tryEntries[aP];
              var aR = aQ.completion;
              if ("root" === aQ.tryLoc) {
                return aU("end");
              }
              if (aQ.tryLoc <= this.prev) {
                {
                  var aS = ag.call(aQ, "catchLoc");
                  var aT = ag.call(aQ, "finallyLoc");
                  if (aS && aT) {
                    {
                      if (this.prev < aQ.catchLoc) {
                        return aU(aQ.catchLoc, true);
                      }
                      if (this.prev < aQ.finallyLoc) {
                        return aU(aQ.finallyLoc);
                      }
                    }
                  } else {
                    if (aS) {
                      {
                        if (this.prev < aQ.catchLoc) {
                          return aU(aQ.catchLoc, true);
                        }
                      }
                    } else {
                      {
                        if (!aT) {
                          throw Error("try statement without catch or finally");
                        }
                        if (this.prev < aQ.finallyLoc) {
                          return aU(aQ.finallyLoc);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      abrupt: function (aM, aN) {
        {
          for (var aO = this.tryEntries.length - 1; aO >= 0; --aO) {
            {
              var aP = this.tryEntries[aO];
              if (aP.tryLoc <= this.prev && ag.call(aP, "finallyLoc") && this.prev < aP.finallyLoc) {
                {
                  var aQ = aP;
                  break;
                }
              }
            }
          }
          aQ && ("break" === aM || "continue" === aM) && aQ.tryLoc <= aN && aN <= aQ.finallyLoc && (aQ = null);
          var aR = aQ ? aQ.completion : {};
          aR.type = aM;
          aR.arg = aN;
          return aQ ? (this.method = "next", this.next = aQ.finallyLoc, at) : this.complete(aR);
        }
      },
      complete: function (aM, aN) {
        {
          if ("throw" === aM.type) {
            throw aM.arg;
          }
          "break" === aM.type || "continue" === aM.type ? this.next = aM.arg : "return" === aM.type ? (this.rval = this.arg = aM.arg, this.method = "return", this.next = "end") : "normal" === aM.type && aN && (this.next = aN);
          return at;
        }
      },
      finish: function (aM) {
        {
          for (var aN = this.tryEntries.length - 1; aN >= 0; --aN) {
            {
              var aO = this.tryEntries[aN];
              if (aO.finallyLoc === aM) {
                this.complete(aO.completion, aO.afterLoc);
                aG(aO);
                return at;
              }
            }
          }
        }
      },
      catch: function (aM) {
        {
          for (var aO = this.tryEntries.length - 1; aO >= 0; --aO) {
            {
              var aP = this.tryEntries[aO];
              if (aP.tryLoc === aM) {
                {
                  var aQ = aP.completion;
                  if ("throw" === aQ.type) {
                    {
                      var aR = aQ.arg;
                      aG(aP);
                    }
                  }
                  return aR;
                }
              }
            }
          }
          throw Error("illegal catch attempt");
        }
      },
      delegateYield: function (aM, aN, aO) {
        this.delegate = {
          iterator: aI(aM),
          resultName: aN,
          nextLoc: aO
        };
        "next" === this.method && (this.arg = ad);
        return at;
      }
    };
    return ae;
  }
  function h(ac, ad, ae, af, ag, ah, ai) {
    {
      try {
        {
          var al = ac[ah](ai);
          var am = al.value;
        }
      } catch (ap) {
        {
          return void ae(ap);
        }
      }
      al.done ? ad(am) : Promise.resolve(am).then(af, ag);
    }
  }
  function i(ac) {
    return function () {
      var af = this;
      var ag = arguments;
      return new Promise(function (ah, ai) {
        var aj = ac.apply(af, ag);
        function ak(am) {
          {
            h(aj, ah, ai, ak, al, "next", am);
          }
        }
        function al(am) {
          {
            h(aj, ah, ai, ak, al, "throw", am);
          }
        }
        ak(undefined);
      });
    };
  }
  var j = ($.isNode() ? process.env.WangChao : $.getdata("WangChao")) || "";
  var k = ($.isNode() ? process.env.GHPROXYURL : $.getdata("GHPROXYURL")) || "https://ghfast.top";
  var l = undefined;
  var m = "";
  var n = "64";
  var o = "";
  var p = "";
  var q = "";
  var r = "";
  var s = "";
  var t = "";
  var u = "";
  var v = "";
  var w = "10019";
  var x = "";
  var y = "";
  var z = "";
  var A = "FR*r!isE5W";
  function B() {
    {
      return C.apply(this, arguments);
    }
  }
  function C() {
    {
      C = i(g().mark(function ad() {
        {
          var af;
          var ag;
          var ah;
          var ai;
          var aj;
          var ak;
          var al;
          var am;
          var an;
          var ao;
          var ap;
          var aq;
          var ar;
          var as;
          var at;
          var au;
          var av;
          var aw;
          var ax;
          var ay;
          var az;
          var aA;
          var aB;
          var aC;
          var aD;
          var aE;
          var aF;
          var aG;
          var aH;
          var aI;
          return g().wrap(function (aJ) {
            {
              for (;;) {
                switch (aJ.prev = aJ.next) {
                  case 0:
                    if (j) {
                      aJ.next = 5;
                      break;
                    }
                    console.log("先去boxjs填写账号密码");
                    aJ.next = 4;
                    return aa("先去boxjs填写账号密码");
                  case 4:
                    return aJ.abrupt("return");
                  case 5:
                    aJ.next = 7;
                    return a6();
                  case 7:
                    l = aJ.sent;
                    af = j.split(" ");
                    ag = c(af);
                    aJ.prev = 10;
                    ag.s();
                  case 12:
                    if ((ah = ag.n()).done) {
                      {
                        aJ.next = 142;
                        break;
                      }
                    }
                    ai = ah.value;
                    console.log("随机生成UA");
                    aj = a4();
                    o = aj.ua;
                    p = aj.commonUa;
                    q = aj.uuid;
                    console.log(o);
                    console.log(p);
                    u = ai.split("&")[0];
                    v = ai.split("&")[1];
                    console.log("用户：".concat(u, "开始任务"));
                    console.log("获取sessionId");
                    aJ.next = 27;
                    return J("/api/account/init");
                  case 27:
                    ak = aJ.sent;
                    x = ak.data.session.id;
                    console.log(x);
                    console.log("获取signature_key");
                    aJ.next = 33;
                    return D("/web/init?client_id=".concat(w));
                  case 33:
                    al = aJ.sent;
                    m = al.data.client.signature_key;
                    console.log(m);
                    console.log("获取code");
                    aJ.next = 39;
                    return F("/web/oauth/credential_auth");
                  case 39:
                    if (am = aJ.sent, am.data) {
                      {
                        aJ.next = 43;
                        break;
                      }
                    }
                    console.log(am.message);
                    return aJ.abrupt("continue", 140);
                  case 43:
                    an = am.data.authorization_code.code;
                    console.log(an);
                    console.log("登录");
                    aJ.next = 48;
                    return J("/api/zbtxz/login", "check_token=&code=".concat(an, "&token=&type=-1&union_id="));
                  case 48:
                    ao = aJ.sent;
                    console.log("登录成功");
                    t = ao.data.session.account_id;
                    x = ao.data.session.id;
                    aJ.next = 54;
                    return H("/api/app_feature_switch/list");
                  case 54:
                    ap = aJ.sent;
                    console.log("进入app：".concat(ap.message));
                    console.log("————————————");
                    console.log("每日签到");
                    aJ.next = 60;
                    return N("/auth/userLogin", {
                      accountId: t,
                      sessionId: x,
                      q: "bcuABCdvYzEJodimBMvIjKjDQ5CiVGO2yL2Tm66bWYU=",
                      tenantCode: "xsb_wangchao"
                    });
                  case 60:
                    aq = aJ.sent;
                    y = aq.data.token;
                    aJ.next = 64;
                    return L("/activity/signin?deviceId=".concat(q, "&sessionId=").concat(x));
                  case 64:
                    ar = aJ.sent;
                    console.log("签到结果：".concat(ar.message));
                    aJ.next = 68;
                    return L("/activity/getFixSigninInfo");
                  case 68:
                    if (as = aJ.sent, !(as.data.fixSigninDate.length > 0)) {
                      {
                        aJ.next = 78;
                        break;
                      }
                    }
                    at = "";
                    au = c(as.data.fixSigninDate);
                    try {
                      {
                        for (au.s(); !(av = au.n()).done;) {
                          aw = av.value;
                          at += aw + ",";
                        }
                      }
                    } catch (aR) {
                      {
                        au.e(aR);
                      }
                    } finally {
                      {
                        au.f();
                      }
                    }
                    at = at.substring(0, at.length - 1);
                    aJ.next = 76;
                    return L("/activity/fixSignin?deviceId=".concat(q, "&sessionId=").concat(x, "&fixSigninDate=").concat(at));
                  case 76:
                    ax = aJ.sent;
                    console.log("补签结果：".concat(ax.message));
                  case 78:
                    console.log("————————————");
                    console.log("阅读抽奖");
                    r = "";
                    console.log("获取登录cookie");
                    aJ.next = 84;
                    return P("/prod-api/user-read/app/login?id=".concat(t, "&sessionId=").concat(x, "&deviceId=").concat(q));
                  case 84:
                    if (r = aJ.sent, r) {
                      {
                        aJ.next = 87;
                        break;
                      }
                    }
                    return aJ.abrupt("continue", 140);
                  case 87:
                    console.log(r);
                    aJ.next = 90;
                    return R("/prod-api/user-read/list/".concat(a3()));
                  case 90:
                    ay = aJ.sent;
                    az = c(ay.data.articleIsReadList);
                    aJ.prev = 92;
                    az.s();
                  case 94:
                    if ((aA = az.n()).done) {
                      {
                        aJ.next = 110;
                        break;
                      }
                    }
                    aB = aA.value;
                    console.log("文章：".concat(aB.title));
                    aJ.next = 99;
                    return H("/api/article/detail?id=".concat(aB.newsId));
                  case 99:
                    aJ.sent;
                    aJ.next = 102;
                    return H("/api/article/read_time?channel_article_id=".concat(aB.newsId, "&is_end=true&read_time=7934"));
                  case 102:
                    aJ.sent;
                    aC = JSON.stringify({
                      timestamp: Date.now(),
                      articleId: aB.id,
                      accountId: t
                    });
                    aJ.next = 106;
                    return R("/prod-api/already-read/article/new?signature=".concat(Z(aC)), aC);
                  case 106:
                    aD = aJ.sent;
                    console.log("阅读：".concat(aD.msg));
                  case 108:
                    aJ.next = 94;
                    break;
                  case 110:
                    aJ.next = 115;
                    break;
                  case 112:
                    aJ.prev = 112;
                    aJ.t0 = aJ.catch(92);
                    az.e(aJ.t0);
                  case 115:
                    aJ.prev = 115;
                    az.f();
                    return aJ.finish(115);
                  case 118:
                    aJ.next = 120;
                    return R("/prod-api/user-read-count/count/".concat(a3()));
                  case 120:
                    if (aE = aJ.sent, console.log("剩余抽奖次数：".concat(aE.data)), !(aE.data > 0)) {
                      {
                        aJ.next = 140;
                        break;
                      }
                    }
                    s = "";
                    aJ.next = 126;
                    return T("/tzrb/user/loginWC?accountId=".concat(t, "&sessionId=").concat(x));
                  case 126:
                    s = aJ.sent;
                    console.log("获取抽奖cookie");
                    console.log(s);
                    aJ.next = 131;
                    return V("/tzrb/awardUpgrade/list?activityId=67");
                  case 131:
                    aF = aJ.sent;
                    aG = aF.data;
                    aH = g().mark(function aX() {
                      {
                        var aY;
                        var aZ;
                        return g().wrap(function (b1) {
                          {
                            for (;;) {
                              switch (b1.prev = b1.next) {
                                case 0:
                                  b1.next = 2;
                                  return X("/tzrb/userAwardRecordUpgrade/saveUpdate", "activityId=67&sessionId=undefined&sig=undefined&token=undefined");
                                case 2:
                                  aY = b1.sent;
                                  aZ = aG.findIndex(function (b3) {
                                    {
                                      return b3.id == aY.data;
                                    }
                                  });
                                  -1 != aZ ? (console.log("抽奖获得：".concat(aG[aZ].title)), z += "用户：".concat(u, " 抽奖获得：").concat(aG[aZ].title, "\n")) : console.log(JSON.stringify(aY));
                                case 5:
                                case "end":
                                  return b1.stop();
                              }
                            }
                          }
                        }, aX);
                      }
                    });
                    aI = 0;
                  case 135:
                    if (!(aI < aE.data)) {
                      {
                        aJ.next = 140;
                        break;
                      }
                    }
                    return aJ.delegateYield(aH(), "t1", 137);
                  case 137:
                    aI++;
                    aJ.next = 135;
                    break;
                  case 140:
                    aJ.next = 12;
                    break;
                  case 142:
                    aJ.next = 147;
                    break;
                  case 144:
                    aJ.prev = 144;
                    aJ.t2 = aJ.catch(10);
                    ag.e(aJ.t2);
                  case 147:
                    aJ.prev = 147;
                    ag.f();
                    return aJ.finish(147);
                  case 150:
                    if (!z) {
                      {
                        aJ.next = 153;
                        break;
                      }
                    }
                    aJ.next = 153;
                    return aa(z);
                  case 153:
                  case "end":
                    return aJ.stop();
                }
              }
            }
          }, ad, null, [[10, 144, 147, 150], [92, 112, 115, 118]]);
        }
      }));
      return C.apply(this, arguments);
    }
  }
  function D(ac) {
    return E.apply(this, arguments);
  }
  function E() {
    {
      E = i(g().mark(function ad(ae) {
        return g().wrap(function (ag) {
          {
            for (;;) {
              switch (ag.prev = ag.next) {
                case 0:
                  return ag.abrupt("return", new Promise(function (ai) {
                    {
                      var ak = {
                        url: "https://passport.tmuyun.com".concat(ae),
                        headers: {
                          Connection: "Keep-Alive",
                          "Cache-Control": "no-cache",
                          "X-REQUEST-ID": a2(),
                          "Accept-Encoding": "gzip",
                          "user-agent": o
                        }
                      };
                      $.get(ak, function () {
                        {
                          var an = i(g().mark(function ap(aq, ar, as) {
                            return g().wrap(function (au) {
                              {
                                for (;;) {
                                  switch (au.prev = au.next) {
                                    case 0:
                                      try {
                                        aq ? (console.log("".concat(JSON.stringify(aq))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ai(JSON.parse(as));
                                      } catch (aw) {
                                        {
                                          $.logErr(aw, ar);
                                        }
                                      } finally {
                                        {
                                          ai();
                                        }
                                      }
                                    case 1:
                                    case "end":
                                      return au.stop();
                                  }
                                }
                              }
                            }, ap);
                          }));
                          return function (aq, ar, as) {
                            {
                              return an.apply(this, arguments);
                            }
                          };
                        }
                      }());
                    }
                  }));
                case 1:
                case "end":
                  return ag.stop();
              }
            }
          }
        }, ad);
      }));
      return E.apply(this, arguments);
    }
  }
  function F(ac) {
    {
      return G.apply(this, arguments);
    }
  }
  function G() {
    G = i(g().mark(function ae(af) {
      {
        var ah;
        return g().wrap(function (aj) {
          {
            for (;;) {
              switch (aj.prev = aj.next) {
                case 0:
                  ah = a0();
                  return aj.abrupt("return", new Promise(function (al) {
                    {
                      var an = {
                        url: "https://passport.tmuyun.com".concat(af),
                        headers: {
                          Connection: "Keep-Alive",
                          "X-REQUEST-ID": ah.uuid,
                          "X-SIGNATURE": ah.signature,
                          "Cache-Control": "no-cache",
                          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                          "Accept-Encoding": "gzip",
                          "user-agent": o
                        },
                        body: ah.body
                      };
                      $.post(an, function () {
                        {
                          var aq = i(g().mark(function as(at, au, av) {
                            {
                              return g().wrap(function (ax) {
                                {
                                  for (;;) {
                                    switch (ax.prev = ax.next) {
                                      case 0:
                                        try {
                                          {
                                            at ? (console.log("".concat(JSON.stringify(at))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : al(JSON.parse(av));
                                          }
                                        } catch (aA) {
                                          {
                                            $.logErr(aA, au);
                                          }
                                        } finally {
                                          {
                                            al();
                                          }
                                        }
                                      case 1:
                                      case "end":
                                        return ax.stop();
                                    }
                                  }
                                }
                              }, as);
                            }
                          }));
                          return function (at, au, av) {
                            {
                              return aq.apply(this, arguments);
                            }
                          };
                        }
                      }());
                    }
                  }));
                case 2:
                case "end":
                  return aj.stop();
              }
            }
          }
        }, ae);
      }
    }));
    return G.apply(this, arguments);
  }
  function H(ac) {
    return I.apply(this, arguments);
  }
  function I() {
    I = i(g().mark(function ad(ae) {
      var ag;
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              ag = a1(ae);
              return ah.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://vapp.taizhou.com.cn".concat(ae),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ag.time,
                    "X-SESSION-ID": x,
                    "X-REQUEST-ID": ag.uuid,
                    "X-SIGNATURE": ag.signature,
                    "X-TENANT-ID": n,
                    "X-ACCOUNT-ID": t,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": p
                  }
                };
                $.get(am, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            if (au.prev = 0, !aq) {
                              {
                                au.next = 6;
                                break;
                              }
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            au.next = 9;
                            break;
                          case 6:
                            au.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(as));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, ar);
                          case 14:
                            au.prev = 14;
                            ak();
                            return au.finish(14);
                          case 17:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, ap, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ah.stop();
          }
        }
      }, ad);
    }));
    return I.apply(this, arguments);
  }
  function J(ac, ad) {
    return K.apply(this, arguments);
  }
  function K() {
    K = i(g().mark(function ac(ad, ae) {
      var ag;
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              ag = a1(ad);
              return ah.abrupt("return", new Promise(function (ai) {
                var ak = {
                  Connection: "Keep-Alive",
                  "X-TIMESTAMP": ag.time,
                  "X-SESSION-ID": x,
                  "X-REQUEST-ID": ag.uuid,
                  "X-SIGNATURE": ag.signature,
                  "X-TENANT-ID": n,
                  "X-ACCOUNT-ID": t,
                  "Cache-Control": "no-cache",
                  "Accept-Encoding": "gzip",
                  "user-agent": p
                };
                var al = {
                  url: "https://vapp.taizhou.com.cn".concat(ad),
                  headers: ak,
                  body: ae
                };
                $.post(al, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            if (at.prev = 0, !ap) {
                              at.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ap)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            at.next = 9;
                            break;
                          case 6:
                            at.next = 8;
                            return $.wait(2000);
                          case 8:
                            ai(JSON.parse(ar));
                          case 9:
                            at.next = 14;
                            break;
                          case 11:
                            at.prev = 11;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, aq);
                          case 14:
                            at.prev = 14;
                            ai();
                            return at.finish(14);
                          case 17:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, ao, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ah.stop();
          }
        }
      }, ac);
    }));
    return K.apply(this, arguments);
  }
  function L(ac) {
    return M.apply(this, arguments);
  }
  function M() {
    M = i(g().mark(function ad(ae) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ah) {
                var aj = {
                  url: "https://act.tmlyun.com/activity-api/signin/h5".concat(ae),
                  headers: {
                    accept: "application/json, text/plain, */*",
                    authorization: y,
                    "sec-fetch-site": "sec-fetch-site",
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "user-agent": p
                  }
                };
                $.get(aj, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (as) {
                      for (;;) {
                        switch (as.prev = as.next) {
                          case 0:
                            if (as.prev = 0, !ao) {
                              as.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ao)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            as.next = 9;
                            break;
                          case 6:
                            as.next = 8;
                            return $.wait(2000);
                          case 8:
                            ah(JSON.parse(aq));
                          case 9:
                            as.next = 14;
                            break;
                          case 11:
                            as.prev = 11;
                            as.t0 = as.catch(0);
                            $.logErr(as.t0, ap);
                          case 14:
                            as.prev = 14;
                            ah();
                            return as.finish(14);
                          case 17:
                          case "end":
                            return as.stop();
                        }
                      }
                    }, an, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ao, ap, aq) {
                    return am.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return af.stop();
          }
        }
      }, ad);
    }));
    return M.apply(this, arguments);
  }
  function N(ac, ad) {
    return O.apply(this, arguments);
  }
  function O() {
    O = i(g().mark(function ad(ae, af) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (ai) {
                var ak = {
                  url: "https://act.tmlyun.com/activity-api/signin/h5".concat(ae),
                  headers: {
                    "content-type": "application/json",
                    accept: "application/json, text/plain, */*",
                    authorization: y,
                    "sec-fetch-site": "sec-fetch-site",
                    "accept-language": "zh-CN,zh-Hans;q=0.9",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    "user-agent": p
                  },
                  body: JSON.stringify(af)
                };
                $.post(ak, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (as) {
                      for (;;) {
                        switch (as.prev = as.next) {
                          case 0:
                            if (as.prev = 0, !ao) {
                              as.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ao)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            as.next = 9;
                            break;
                          case 6:
                            as.next = 8;
                            return $.wait(2000);
                          case 8:
                            ai(JSON.parse(aq));
                          case 9:
                            as.next = 14;
                            break;
                          case 11:
                            as.prev = 11;
                            as.t0 = as.catch(0);
                            $.logErr(as.t0, ap);
                          case 14:
                            as.prev = 14;
                            ai();
                            return as.finish(14);
                          case 17:
                          case "end":
                            return as.stop();
                        }
                      }
                    }, an, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ao, ap, aq) {
                    return am.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ah.stop();
          }
        }
      }, ad);
    }));
    return O.apply(this, arguments);
  }
  function P(ac) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = i(g().mark(function ad(ae) {
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              return ag.abrupt("return", new Promise(function (ah) {
                var aj = {
                  url: "https://xmt.taizhou.com.cn".concat(ae),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    Cookie: r,
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v2/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(aj, function () {
                  var ak = i(g().mark(function al(am, an, ao) {
                    return g().wrap(function (aq) {
                      for (;;) {
                        switch (aq.prev = aq.next) {
                          case 0:
                            if (aq.prev = 0, !am) {
                              aq.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(am)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aq.next = 16;
                            break;
                          case 6:
                            aq.next = 8;
                            return $.wait(2000);
                          case 8:
                            if (200 == JSON.parse(ao).code) {
                              aq.next = 13;
                              break;
                            }
                            console.log(JSON.parse(ao).msg);
                            z += "用户：".concat(u, " ").concat(JSON.parse(ao).msg, "\n");
                            ah("");
                            return aq.abrupt("return");
                          case 13:
                            r = $.isNode() ? an.headers["set-cookie"][0] : an.headers["set-cookie"] || an.headers["Set-Cookie"];
                            r = r.split(";")[0];
                            ah(r);
                          case 16:
                            aq.next = 21;
                            break;
                          case 18:
                            aq.prev = 18;
                            aq.t0 = aq.catch(0);
                            $.logErr(aq.t0, an);
                          case 21:
                            aq.prev = 21;
                            ah();
                            return aq.finish(21);
                          case 24:
                          case "end":
                            return aq.stop();
                        }
                      }
                    }, al, null, [[0, 18, 21, 24]]);
                  }));
                  return function (am, an, ao) {
                    return ak.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ag.stop();
          }
        }
      }, ad);
    }));
    return Q.apply(this, arguments);
  }
  function R(ac) {
    return S.apply(this, arguments);
  }
  function S() {
    S = i(g().mark(function ad(ae) {
      return g().wrap(function (ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              return ag.abrupt("return", new Promise(function (ah) {
                var aj = {
                  Connection: "Keep-Alive",
                  Accept: "*/*",
                  Cookie: r,
                  "Sec-Fetch-Site": "same-origin",
                  "Sec-Fetch-Mode": "cors",
                  "Sec-Fetch-Dest": "empty",
                  Referer: "https://xmt.taizhou.com.cn/readingLuck-v2/",
                  "X-Requested-With": "com.shangc.tiennews.taizhou",
                  "Accept-Encoding": "gzip, deflate",
                  "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                };
                var ak = {
                  url: "https://xmt.taizhou.com.cn".concat(ae),
                  headers: aj
                };
                $.get(ak, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (as) {
                      for (;;) {
                        switch (as.prev = as.next) {
                          case 0:
                            if (as.prev = 0, !ao) {
                              as.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ao)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            as.next = 9;
                            break;
                          case 6:
                            as.next = 8;
                            return $.wait(2000);
                          case 8:
                            ah(JSON.parse(aq));
                          case 9:
                            as.next = 14;
                            break;
                          case 11:
                            as.prev = 11;
                            as.t0 = as.catch(0);
                            $.logErr(as.t0, ap);
                          case 14:
                            as.prev = 14;
                            ah();
                            return as.finish(14);
                          case 17:
                          case "end":
                            return as.stop();
                        }
                      }
                    }, an, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ao, ap, aq) {
                    return am.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ag.stop();
          }
        }
      }, ad);
    }));
    return S.apply(this, arguments);
  }
  function T(ac) {
    return U.apply(this, arguments);
  }
  function U() {
    U = i(g().mark(function ac(ad) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ah) {
                var ai = {
                  url: "https://srv-app.taizhou.com.cn".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    cookie: s,
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  }
                };
                $.get(ai, function () {
                  var ak = i(g().mark(function al(am, an, ao) {
                    return g().wrap(function (ap) {
                      for (;;) {
                        switch (ap.prev = ap.next) {
                          case 0:
                            if (ap.prev = 0, !am) {
                              ap.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(am)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ap.next = 11;
                            break;
                          case 6:
                            ap.next = 8;
                            return $.wait(2000);
                          case 8:
                            s = $.isNode() ? an.headers["set-cookie"][0] : an.headers["set-cookie"] || an.headers["Set-Cookie"];
                            s = s.split(";")[0];
                            ah(s);
                          case 11:
                            ap.next = 16;
                            break;
                          case 13:
                            ap.prev = 13;
                            ap.t0 = ap.catch(0);
                            $.logErr(ap.t0, an);
                          case 16:
                            ap.prev = 16;
                            ah();
                            return ap.finish(16);
                          case 19:
                          case "end":
                            return ap.stop();
                        }
                      }
                    }, al, null, [[0, 13, 16, 19]]);
                  }));
                  return function (am, an, ao) {
                    return ak.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return af.stop();
          }
        }
      }, ac);
    }));
    return U.apply(this, arguments);
  }
  function V(ac) {
    return W.apply(this, arguments);
  }
  function W() {
    W = i(g().mark(function ac(ad) {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ah) {
                var aj = {
                  Connection: "Keep-Alive",
                  Accept: "*/*",
                  "Sec-Fetch-Site": "same-origin",
                  "Sec-Fetch-Mode": "cors",
                  "Sec-Fetch-Dest": "empty",
                  cookie: s,
                  Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                  "X-Requested-With": "com.shangc.tiennews.taizhou",
                  "Accept-Encoding": "gzip, deflate",
                  "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                  "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                };
                var ak = {
                  url: "https://srv-app.taizhou.com.cn".concat(ad),
                  headers: aj
                };
                $.get(ak, function () {
                  var am = i(g().mark(function an(ao, ap, aq) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            if (ar.prev = 0, !ao) {
                              ar.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ao)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            ar.next = 9;
                            break;
                          case 6:
                            ar.next = 8;
                            return $.wait(2000);
                          case 8:
                            ah(JSON.parse(aq));
                          case 9:
                            ar.next = 14;
                            break;
                          case 11:
                            ar.prev = 11;
                            ar.t0 = ar.catch(0);
                            $.logErr(ar.t0, ap);
                          case 14:
                            ar.prev = 14;
                            ah();
                            return ar.finish(14);
                          case 17:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, an, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ao, ap, aq) {
                    return am.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return af.stop();
          }
        }
      }, ac);
    }));
    return W.apply(this, arguments);
  }
  function X(ac, ad) {
    return Y.apply(this, arguments);
  }
  function Y() {
    Y = i(g().mark(function ac(ad, ae) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              return ah.abrupt("return", new Promise(function (aj) {
                var al = {
                  url: "https://srv-app.taizhou.com.cn".concat(ad),
                  headers: {
                    Connection: "Keep-Alive",
                    Accept: "*/*",
                    "Content-type": "application/x-www-form-urlencoded",
                    "Sec-Fetch-Site": "same-origin",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    cookie: s,
                    Referer: "https://xmt.taizhou.com.cn/readingLuck-v1/",
                    "X-Requested-With": "com.shangc.tiennews.taizhou",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_wangchao;xsb_wangchao;6.0.2;native_app;6.10.0"
                  },
                  body: ae
                };
                $.post(al, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            if (at.prev = 0, !ap) {
                              at.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ap)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            at.next = 9;
                            break;
                          case 6:
                            at.next = 8;
                            return $.wait(2000);
                          case 8:
                            aj(JSON.parse(ar));
                          case 9:
                            at.next = 14;
                            break;
                          case 11:
                            at.prev = 11;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, aq);
                          case 14:
                            at.prev = 14;
                            aj();
                            return at.finish(14);
                          case 17:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, ao, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ah.stop();
          }
        }
      }, ac);
    }));
    return Y.apply(this, arguments);
  }
  function Z(ac) {
    var ad = l.loadSM2();
    return ad.doEncrypt(ac, "04A50803A27F000D6B310607EBA2A1C899E82872C0B538CA41DB6F0183B4C7E164DAFC6946ABF93C8AF1C0AD96D0E770D29264EF9F907DDBAE97A2A0BB1036D4AC", 1);
  }
  function a0() {
    var ak = new (l.loadJSEncrypt())();
    ak.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    v = ak.encrypt(v);
    var ah = a2();
    var ai = "client_id=".concat(w, "&password=").concat(v, "&phone_number=").concat(u);
    var aj = "post%%/web/oauth/credential_auth?".concat(ai, "%%").concat(ah, "%%");
    ai = "client_id=".concat(w, "&password=").concat(encodeURIComponent(v), "&phone_number=").concat(u);
    CryptoJS = l.createCryptoJS();
    var af = CryptoJS.HmacSHA256(aj, m);
    var ag = CryptoJS.enc.Hex.stringify(af);
    var ae = {
      uuid: ah,
      signature: ag,
      body: ai
    };
    return ae;
  }
  function a1(ac) {
    var ad = a2();
    var ae = Date.now();
    ac.indexOf("?") > 0 && (ac = ac.substring(0, ac.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var af = CryptoJS.SHA256("".concat(ac, "&&").concat(x, "&&").concat(ad, "&&").concat(ae, "&&").concat(A, "&&").concat(n)).toString();
    var ag = {
      uuid: ad,
      time: ae,
      signature: af
    };
    return ag;
  }
  function a2() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (ad) {
      var ae = 16 * Math.random() | 0;
      var af = "x" === ad ? ae : 3 & ae | 8;
      return af.toString(16);
    });
  }
  function a3() {
    var ac = new Date();
    var ad = ac.getFullYear();
    var ae = String(ac.getMonth() + 1).padStart(2, "0");
    var af = String(ac.getDate()).padStart(2, "0");
    return "".concat(ad).concat(ae).concat(af);
  }
  function a4() {
    var ac = "6.0.2";
    var ad = a2();
    var ae = a5(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]);
    var af = "Xiaomi " + ae;
    var ag = "Android";
    var ah = "".concat(ag.toUpperCase(), ";").concat("11", ";").concat(w, ";").concat(ac, ";1.0;null;").concat(ae);
    var ai = "".concat(ac, ";").concat(ad, ";").concat(af, ";").concat(ag, ";").concat("11", ";").concat("xiaomi", ";").concat("6.10.0");
    var aj = {
      ua: ah,
      commonUa: ai,
      uuid: ad
    };
    return aj;
  }
  function a5(ac) {
    return ac[Math.floor(Math.random() * ac.length)];
  }
  function a6() {
    return a7.apply(this, arguments);
  }
  function a7() {
    a7 = i(g().mark(function ad() {
      var ae;
      return g().wrap(function af(ag) {
        for (;;) {
          switch (ag.prev = ag.next) {
            case 0:
              if (ae = $.getdata("Utils_Code") || "", !ae || !Object.keys(ae).length) {
                ag.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ae);
              return ag.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return ag.abrupt("return", new Promise(function () {
                var ak = i(g().mark(function al(am) {
                  return g().wrap(function ao(ap) {
                    for (;;) {
                      switch (ap.prev = ap.next) {
                        case 0:
                          $.getScript("".concat(k, "/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js")).then(function (aq) {
                            $.setdata(aq, "Utils_Code");
                            eval(aq);
                            console.log("✅ Utils加载成功, 请继续");
                            am(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ap.stop();
                      }
                    }
                  }, al);
                }));
                return function (am) {
                  return ak.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return ag.stop();
          }
        }
      }, ad);
    }));
    return a7.apply(this, arguments);
  }
  function a8() {
    return a9.apply(this, arguments);
  }
  function a9() {
    a9 = i(g().mark(function ad() {
      return g().wrap(function (af) {
        for (;;) {
          switch (af.prev = af.next) {
            case 0:
              return af.abrupt("return", new Promise(function (ah) {
                var aj = {
                  url: "https://fastly.jsdelivr.net/gh/xzxxn777/Surge@main/Utils/Notice.json"
                };
                $.get(aj, function () {
                  var ak = i(g().mark(function al(am, an, ao) {
                    return g().wrap(function (ar) {
                      for (;;) {
                        switch (ar.prev = ar.next) {
                          case 0:
                            try {
                              am ? (console.log("".concat(JSON.stringify(am))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : console.log(JSON.parse(ao).notice);
                            } catch (as) {
                              $.logErr(as, an);
                            } finally {
                              ah();
                            }
                          case 1:
                          case "end":
                            return ar.stop();
                        }
                      }
                    }, al);
                  }));
                  return function (am, an, ao) {
                    return ak.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return af.stop();
          }
        }
      }, ad);
    }));
    return a9.apply(this, arguments);
  }
  function aa(ac) {
    return ab.apply(this, arguments);
  }
  function ab() {
    ab = i(g().mark(function ad(ae) {
      return g().wrap(function (ah) {
        for (;;) {
          switch (ah.prev = ah.next) {
            case 0:
              if (!$.isNode()) {
                ah.next = 5;
                break;
              }
              ah.next = 3;
              return notify.sendNotify($.name, ae);
            case 3:
              ah.next = 6;
              break;
            case 5:
              $.msg($.name, "", ae);
            case 6:
            case "end":
              return ah.stop();
          }
        }
      }, ad);
    }));
    return ab.apply(this, arguments);
  }
  i(g().mark(function ac() {
    return g().wrap(function (ad) {
      for (;;) {
        switch (ad.prev = ad.next) {
          case 0:
            ad.next = 2;
            return a8();
          case 2:
            ad.next = 4;
            return B();
          case 4:
          case "end":
            return ad.stop();
        }
      }
    }, ac);
  }))().catch(function (ad) {
    $.log(ad);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : undefined;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return false;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@");
        const n = {
          url: `http://${a}/v1/scripting/evaluate`,
          body: {
            script_text: t,
            mock_type: "cron",
            timeout: o
          },
          headers: {
            "X-Key": r,
            Accept: "*/*"
          },
          timeout: o
        };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile);
        const e = this.path.resolve(process.cwd(), this.dataFile);
        const s = this.fs.existsSync(t);
        const i = !s && this.fs.existsSync(e);
        const o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], undefined === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t);
        const o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = false;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e);
        const r = this.getval(i);
        const a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return true;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, undefined === t.headers.cookie && undefined === t.headers.Cookie && undefined === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
              statusCode: i,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), undefined === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = false), this.isQuanX() && (t.opts ? t.opts.redirection = false : t.opts = {
        redirection: false
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": false
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: false
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
              statusCode: s,
              statusCode: o,
              headers: r,
              rawBody: a
            } = t;
            const n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case undefined:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t;
                    let e;
                    let s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";");
                        const [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, undefined !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}