var $e = {}, We = 9007199254740991, Vn = "[object Arguments]", qn = "[object Function]", Yn = "[object GeneratorFunction]", Gn = /^(?:0|[1-9]\d*)$/;
function je(n, t, e) {
  switch (e.length) {
    case 0:
      return n.call(t);
    case 1:
      return n.call(t, e[0]);
    case 2:
      return n.call(t, e[0], e[1]);
    case 3:
      return n.call(t, e[0], e[1], e[2]);
  }
  return n.apply(t, e);
}
function Xn(n, t) {
  for (var e = -1, r = Array(n); ++e < n; )
    r[e] = t(e);
  return r;
}
var Xt = Object.prototype, Qt = Xt.hasOwnProperty, Ue = Xt.toString, Qn = Xt.propertyIsEnumerable, be = Math.max;
function Jn(n, t) {
  var e = ar(n) || cr(n) ? Xn(n.length, String) : [], r = e.length, s = !!r;
  for (var i in n)
    (t || Qt.call(n, i)) && !(s && (i == "length" || Ne(i, r))) && e.push(i);
  return e;
}
function Zn(n, t, e, r) {
  return n === void 0 || z0(n, Xt[e]) && !Qt.call(r, e) ? t : n;
}
function tr(n, t, e) {
  var r = n[t];
  (!(Qt.call(n, t) && z0(r, e)) || e === void 0 && !(t in n)) && (n[t] = e);
}
function er(n) {
  if (!W0(n))
    return or(n);
  var t = ir(n), e = [];
  for (var r in n)
    r == "constructor" && (t || !Qt.call(n, r)) || e.push(r);
  return e;
}
function Ke(n, t) {
  return t = be(t === void 0 ? n.length - 1 : t, 0), function() {
    for (var e = arguments, r = -1, s = be(e.length - t, 0), i = Array(s); ++r < s; )
      i[r] = e[t + r];
    r = -1;
    for (var o = Array(t + 1); ++r < t; )
      o[r] = e[r];
    return o[t] = i, je(n, this, o);
  };
}
function nr(n, t, e, r) {
  e || (e = {});
  for (var s = -1, i = t.length; ++s < i; ) {
    var o = t[s], c = r ? r(e[o], n[o], o, e, n) : void 0;
    tr(e, o, c === void 0 ? n[o] : c);
  }
  return e;
}
function rr(n) {
  return Ke(function(t, e) {
    var r = -1, s = e.length, i = s > 1 ? e[s - 1] : void 0, o = s > 2 ? e[2] : void 0;
    for (i = n.length > 3 && typeof i == "function" ? (s--, i) : void 0, o && sr(e[0], e[1], o) && (i = s < 3 ? void 0 : i, s = 1), t = Object(t); ++r < s; ) {
      var c = e[r];
      c && n(t, c, r, i);
    }
    return t;
  });
}
function Ne(n, t) {
  return t = t == null ? We : t, !!t && (typeof n == "number" || Gn.test(n)) && n > -1 && n % 1 == 0 && n < t;
}
function sr(n, t, e) {
  if (!W0(e))
    return !1;
  var r = typeof t;
  return (r == "number" ? $0(e) && Ne(t, e.length) : r == "string" && t in e) ? z0(e[t], n) : !1;
}
function ir(n) {
  var t = n && n.constructor, e = typeof t == "function" && t.prototype || Xt;
  return n === e;
}
function or(n) {
  var t = [];
  if (n != null)
    for (var e in Object(n))
      t.push(e);
  return t;
}
function z0(n, t) {
  return n === t || n !== n && t !== t;
}
function cr(n) {
  return ur(n) && Qt.call(n, "callee") && (!Qn.call(n, "callee") || Ue.call(n) == Vn);
}
var ar = Array.isArray;
function $0(n) {
  return n != null && lr(n.length) && !fr(n);
}
function ur(n) {
  return hr(n) && $0(n);
}
function fr(n) {
  var t = W0(n) ? Ue.call(n) : "";
  return t == qn || t == Yn;
}
function lr(n) {
  return typeof n == "number" && n > -1 && n % 1 == 0 && n <= We;
}
function W0(n) {
  var t = typeof n;
  return !!n && (t == "object" || t == "function");
}
function hr(n) {
  return !!n && typeof n == "object";
}
var xr = rr(function(n, t, e, r) {
  nr(t, pr(t), n, r);
}), dr = Ke(function(n) {
  return n.push(void 0, Zn), je(xr, void 0, n);
});
function pr(n) {
  return $0(n) ? Jn(n, !0) : er(n);
}
var br = dr;
Object.defineProperty($e, "__esModule", { value: !0 });
var yr = br, _r = "Provided shouldReconnect() returned false. Closing permanently.", wr = "Provided shouldReconnect() resolved to false. Closing permanently.", gr = function() {
  function n(t, e, r) {
    if (this.url = t, this.onclose = null, this.onerror = null, this.onmessage = null, this.onopen = null, this.ondown = null, this.onreopen = null, this.CONNECTING = n.CONNECTING, this.OPEN = n.OPEN, this.CLOSING = n.CLOSING, this.CLOSED = n.CLOSED, this.hasBeenOpened = !1, this.isClosed = !1, this.messageBuffer = [], this.nextRetryTime = 0, this.reconnectCount = 0, this.lastKnownExtensions = "", this.lastKnownProtocol = "", this.listeners = {}, e == null || typeof e == "string" || Array.isArray(e) ? this.protocols = e : r = e, this.options = yr({}, r, n.DEFAULT_OPTIONS), !this.options.wsConstructor)
      if (typeof WebSocket < "u")
        this.options.wsConstructor = WebSocket;
      else
        throw new Error("WebSocket not present in global scope and no wsConstructor option was provided.");
    this.openNewWebSocket();
  }
  return Object.defineProperty(n.prototype, "binaryType", {
    get: function() {
      return this.binaryTypeInternal || "blob";
    },
    set: function(t) {
      this.binaryTypeInternal = t, this.ws && (this.ws.binaryType = t);
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(n.prototype, "bufferedAmount", {
    get: function() {
      var t = this.ws ? this.ws.bufferedAmount : 0, e = !1;
      return this.messageBuffer.forEach(function(r) {
        var s = vr(r);
        s != null ? t += s : e = !0;
      }), e && this.debugLog("Some buffered data had unknown length. bufferedAmount() return value may be below the correct amount."), t;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(n.prototype, "extensions", {
    get: function() {
      return this.ws ? this.ws.extensions : this.lastKnownExtensions;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(n.prototype, "protocol", {
    get: function() {
      return this.ws ? this.ws.protocol : this.lastKnownProtocol;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(n.prototype, "readyState", {
    get: function() {
      return this.isClosed ? n.CLOSED : n.OPEN;
    },
    enumerable: !0,
    configurable: !0
  }), n.prototype.close = function(t, e) {
    this.ws && this.ws.close(t, e), this.shutdown(), this.debugLog("WebSocket permanently closed by client.");
  }, n.prototype.send = function(t) {
    this.ws && this.ws.readyState === this.OPEN ? this.ws.send(t) : this.messageBuffer.push(t);
  }, n.prototype.addEventListener = function(t, e) {
    this.listeners[t] || (this.listeners[t] = []), this.listeners[t].push(e);
  }, n.prototype.dispatchEvent = function(t) {
    return this.dispatchEventOfType(t.type, t);
  }, n.prototype.removeEventListener = function(t, e) {
    this.listeners[t] && (this.listeners[t] = this.listeners[t].filter(function(r) {
      return r !== e;
    }));
  }, n.prototype.openNewWebSocket = function() {
    var t = this;
    if (!this.isClosed) {
      var e = this.options, r = e.connectTimeout, s = e.wsConstructor;
      this.debugLog("Opening new WebSocket to " + this.url + ".");
      var i = new s(this.url, this.protocols);
      i.onclose = function(o) {
        return t.handleClose(o);
      }, i.onerror = function(o) {
        return t.handleError(o);
      }, i.onmessage = function(o) {
        return t.handleMessage(o);
      }, i.onopen = function(o) {
        return t.handleOpen(o);
      }, this.connectTimeoutId = setTimeout(function() {
        t.clearConnectTimeout(), i.close();
      }, r), this.ws = i;
    }
  }, n.prototype.handleOpen = function(t) {
    var e = this;
    if (!(!this.ws || this.isClosed)) {
      var r = this.options.allClearResetTime;
      this.debugLog("WebSocket opened."), this.binaryTypeInternal != null ? this.ws.binaryType = this.binaryTypeInternal : this.binaryTypeInternal = this.ws.binaryType, this.clearConnectTimeout(), this.hasBeenOpened ? this.dispatchEventOfType("reopen", t) : (this.dispatchEventOfType("open", t), this.hasBeenOpened = !0), this.messageBuffer.forEach(function(s) {
        return e.send(s);
      }), this.messageBuffer = [], this.allClearTimeoutId = setTimeout(function() {
        e.clearAllClearTimeout(), e.nextRetryTime = 0, e.reconnectCount = 0;
        var s = r / 1e3 | 0;
        e.debugLog("WebSocket remained open for " + s + " seconds. Resetting retry time and count.");
      }, r);
    }
  }, n.prototype.handleMessage = function(t) {
    this.isClosed || this.dispatchEventOfType("message", t);
  }, n.prototype.handleClose = function(t) {
    var e = this;
    if (!this.isClosed) {
      var r = this.options, s = r.maxReconnectAttempts, i = r.shouldReconnect;
      if (this.clearConnectTimeout(), this.clearAllClearTimeout(), this.ws && (this.lastKnownExtensions = this.ws.extensions, this.lastKnownProtocol = this.ws.protocol, this.ws = void 0), this.dispatchEventOfType("down", t), this.reconnectCount >= s) {
        this.stopReconnecting(t, this.getTooManyFailedReconnectsMessage());
        return;
      }
      var o = i(t);
      typeof o == "boolean" ? this.handleWillReconnect(o, t, _r) : o.then(function(c) {
        e.isClosed || e.handleWillReconnect(c, t, wr);
      });
    }
  }, n.prototype.handleError = function(t) {
    this.dispatchEventOfType("error", t), this.debugLog("WebSocket encountered an error.");
  }, n.prototype.handleWillReconnect = function(t, e, r) {
    t ? this.reconnect() : this.stopReconnecting(e, r);
  }, n.prototype.reconnect = function() {
    var t = this, e = this.options, r = e.minReconnectDelay, s = e.maxReconnectDelay, i = e.reconnectBackoffFactor;
    this.reconnectCount++;
    var o = this.nextRetryTime;
    this.nextRetryTime = Math.max(r, Math.min(this.nextRetryTime * i, s)), setTimeout(function() {
      return t.openNewWebSocket();
    }, o);
    var c = o / 1e3 | 0;
    this.debugLog("WebSocket was closed. Re-opening in " + c + " seconds.");
  }, n.prototype.stopReconnecting = function(t, e) {
    this.debugLog(e), this.shutdown(), this.dispatchEventOfType("close", t);
  }, n.prototype.shutdown = function() {
    this.isClosed = !0, this.clearAllTimeouts(), this.messageBuffer = [];
  }, n.prototype.clearAllTimeouts = function() {
    this.clearConnectTimeout(), this.clearAllClearTimeout();
  }, n.prototype.clearConnectTimeout = function() {
    this.connectTimeoutId != null && (clearTimeout(this.connectTimeoutId), this.connectTimeoutId = void 0);
  }, n.prototype.clearAllClearTimeout = function() {
    this.allClearTimeoutId != null && (clearTimeout(this.allClearTimeoutId), this.allClearTimeoutId = void 0);
  }, n.prototype.dispatchEventOfType = function(t, e) {
    var r = this;
    switch (t) {
      case "close":
        this.onclose && this.onclose(e);
        break;
      case "error":
        this.onerror && this.onerror(e);
        break;
      case "message":
        this.onmessage && this.onmessage(e);
        break;
      case "open":
        this.onopen && this.onopen(e);
        break;
      case "down":
        this.ondown && this.ondown(e);
        break;
      case "reopen":
        this.onreopen && this.onreopen(e);
        break;
    }
    return t in this.listeners && this.listeners[t].slice().forEach(function(s) {
      return r.callListener(s, e);
    }), !e || !e.defaultPrevented;
  }, n.prototype.callListener = function(t, e) {
    typeof t == "function" ? t.call(this, e) : t.handleEvent.call(this, e);
  }, n.prototype.debugLog = function(t) {
    this.options.debug && console.log(t);
  }, n.prototype.getTooManyFailedReconnectsMessage = function() {
    var t = this.options.maxReconnectAttempts;
    return "Failed to reconnect after " + t + " " + Sr("attempt", t) + ". Closing permanently.";
  }, n.DEFAULT_OPTIONS = {
    allClearResetTime: 5e3,
    connectTimeout: 5e3,
    debug: !1,
    minReconnectDelay: 1e3,
    maxReconnectDelay: 3e4,
    maxReconnectAttempts: Number.POSITIVE_INFINITY,
    reconnectBackoffFactor: 1.5,
    shouldReconnect: function() {
      return !0;
    },
    wsConstructor: void 0
  }, n.CONNECTING = 0, n.OPEN = 1, n.CLOSING = 2, n.CLOSED = 3, n;
}(), mr = $e.default = gr;
function vr(n) {
  return typeof n == "string" ? 2 * n.length : n instanceof ArrayBuffer ? n.byteLength : n instanceof Blob ? n.size : void 0;
}
function Sr(n, t) {
  return t === 1 ? n : n + "s";
}
class C {
  static create(...t) {
    return new this(...t);
  }
  mixIn(t) {
    return Object.assign(this, t);
  }
  clone() {
    const t = new this.constructor();
    return Object.assign(t, this), t;
  }
}
class A extends C {
  constructor(t = [], e = t.length * 4) {
    super();
    let r = t;
    if (r instanceof ArrayBuffer && (r = new Uint8Array(r)), (r instanceof Int8Array || r instanceof Uint8ClampedArray || r instanceof Int16Array || r instanceof Uint16Array || r instanceof Int32Array || r instanceof Uint32Array || r instanceof Float32Array || r instanceof Float64Array) && (r = new Uint8Array(r.buffer, r.byteOffset, r.byteLength)), r instanceof Uint8Array) {
      const s = r.byteLength, i = [];
      for (let o = 0; o < s; o += 1)
        i[o >>> 2] |= r[o] << 24 - o % 4 * 8;
      this.words = i, this.sigBytes = s;
    } else
      this.words = t, this.sigBytes = e;
  }
  static random(t) {
    const e = [], r = (s) => {
      let i = s, o = 987654321;
      const c = 4294967295;
      return () => {
        o = 36969 * (o & 65535) + (o >> 16) & c, i = 18e3 * (i & 65535) + (i >> 16) & c;
        let a = (o << 16) + i & c;
        return a /= 4294967296, a += 0.5, a * (Math.random() > 0.5 ? 1 : -1);
      };
    };
    for (let s = 0, i; s < t; s += 4) {
      const o = r((i || Math.random()) * 4294967296);
      i = o() * 987654071, e.push(o() * 4294967296 | 0);
    }
    return new A(e, t);
  }
  toString(t = f0) {
    return t.stringify(this);
  }
  concat(t) {
    const e = this.words, r = t.words, s = this.sigBytes, i = t.sigBytes;
    if (this.clamp(), s % 4)
      for (let o = 0; o < i; o += 1) {
        const c = r[o >>> 2] >>> 24 - o % 4 * 8 & 255;
        e[s + o >>> 2] |= c << 24 - (s + o) % 4 * 8;
      }
    else
      for (let o = 0; o < i; o += 4)
        e[s + o >>> 2] = r[o >>> 2];
    return this.sigBytes += i, this;
  }
  clamp() {
    const { words: t, sigBytes: e } = this;
    t[e >>> 2] &= 4294967295 << 32 - e % 4 * 8, t.length = Math.ceil(e / 4);
  }
  clone() {
    const t = super.clone.call(this);
    return t.words = this.words.slice(0), t;
  }
}
const f0 = {
  stringify(n) {
    const { words: t, sigBytes: e } = n, r = [];
    for (let s = 0; s < e; s += 1) {
      const i = t[s >>> 2] >>> 24 - s % 4 * 8 & 255;
      r.push((i >>> 4).toString(16)), r.push((i & 15).toString(16));
    }
    return r.join("");
  },
  parse(n) {
    const t = n.length, e = [];
    for (let r = 0; r < t; r += 2)
      e[r >>> 3] |= parseInt(n.substr(r, 2), 16) << 24 - r % 8 * 4;
    return new A(e, t / 2);
  }
}, T0 = {
  stringify(n) {
    const { words: t, sigBytes: e } = n, r = [];
    for (let s = 0; s < e; s += 1) {
      const i = t[s >>> 2] >>> 24 - s % 4 * 8 & 255;
      r.push(String.fromCharCode(i));
    }
    return r.join("");
  },
  parse(n) {
    const t = n.length, e = [];
    for (let r = 0; r < t; r += 1)
      e[r >>> 2] |= (n.charCodeAt(r) & 255) << 24 - r % 4 * 8;
    return new A(e, t);
  }
}, j0 = {
  stringify(n) {
    try {
      return decodeURIComponent(escape(T0.stringify(n)));
    } catch {
      throw new Error("Malformed UTF-8 data");
    }
  },
  parse(n) {
    return T0.parse(unescape(encodeURIComponent(n)));
  }
};
class U0 extends C {
  constructor() {
    super(), this._minBufferSize = 0;
  }
  reset() {
    this._data = new A(), this._nDataBytes = 0;
  }
  _append(t) {
    let e = t;
    typeof e == "string" && (e = j0.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
  }
  _process(t) {
    let e;
    const { _data: r, blockSize: s } = this, i = r.words, o = r.sigBytes, c = s * 4;
    let a = o / c;
    t ? a = Math.ceil(a) : a = Math.max((a | 0) - this._minBufferSize, 0);
    const u = a * s, h = Math.min(u * 4, o);
    if (u) {
      for (let l = 0; l < u; l += s)
        this._doProcessBlock(i, l);
      e = i.splice(0, u), r.sigBytes -= h;
    }
    return new A(e, h);
  }
  clone() {
    const t = super.clone.call(this);
    return t._data = this._data.clone(), t;
  }
}
class P extends U0 {
  constructor(t) {
    super(), this.blockSize = 512 / 32, this.cfg = Object.assign(new C(), t), this.reset();
  }
  static _createHelper(t) {
    return (e, r) => new t(r).finalize(e);
  }
  static _createHmacHelper(t) {
    return (e, r) => new K0(t, r).finalize(e);
  }
  reset() {
    super.reset.call(this), this._doReset();
  }
  update(t) {
    return this._append(t), this._process(), this;
  }
  finalize(t) {
    return t && this._append(t), this._doFinalize();
  }
}
class K0 extends C {
  constructor(t, e) {
    super();
    const r = new t();
    this._hasher = r;
    let s = e;
    typeof s == "string" && (s = j0.parse(s));
    const i = r.blockSize, o = i * 4;
    s.sigBytes > o && (s = r.finalize(e)), s.clamp();
    const c = s.clone();
    this._oKey = c;
    const a = s.clone();
    this._iKey = a;
    const u = c.words, h = a.words;
    for (let l = 0; l < i; l += 1)
      u[l] ^= 1549556828, h[l] ^= 909522486;
    c.sigBytes = o, a.sigBytes = o, this.reset();
  }
  reset() {
    const t = this._hasher;
    t.reset(), t.update(this._iKey);
  }
  update(t) {
    return this._hasher.update(t), this;
  }
  finalize(t) {
    const e = this._hasher, r = e.finalize(t);
    return e.reset(), e.finalize(this._oKey.clone().concat(r));
  }
}
const Er = A;
class d extends C {
  constructor(t, e) {
    super(), this.high = t, this.low = e;
  }
}
class N0 extends C {
  constructor(t = [], e = t.length * 8) {
    super(), this.words = t, this.sigBytes = e;
  }
  toX32() {
    const t = this.words, e = t.length, r = [];
    for (let s = 0; s < e; s += 1) {
      const i = t[s];
      r.push(i.high), r.push(i.low);
    }
    return Er.create(r, this.sigBytes);
  }
  clone() {
    const t = super.clone.call(this);
    t.words = this.words.slice(0);
    const { words: e } = t, r = e.length;
    for (let s = 0; s < r; s += 1)
      e[s] = e[s].clone();
    return t;
  }
}
const kr = (n, t, e) => {
  const r = [];
  let s = 0;
  for (let i = 0; i < t; i += 1)
    if (i % 4) {
      const o = e[n.charCodeAt(i - 1)] << i % 4 * 2, c = e[n.charCodeAt(i)] >>> 6 - i % 4 * 2, a = o | c;
      r[s >>> 2] |= a << 24 - s % 4 * 8, s += 1;
    }
  return A.create(r, s);
}, A0 = {
  stringify(n) {
    const { words: t, sigBytes: e } = n, r = this._map;
    n.clamp();
    const s = [];
    for (let o = 0; o < e; o += 3) {
      const c = t[o >>> 2] >>> 24 - o % 4 * 8 & 255, a = t[o + 1 >>> 2] >>> 24 - (o + 1) % 4 * 8 & 255, u = t[o + 2 >>> 2] >>> 24 - (o + 2) % 4 * 8 & 255, h = c << 16 | a << 8 | u;
      for (let l = 0; l < 4 && o + l * 0.75 < e; l += 1)
        s.push(r.charAt(h >>> 6 * (3 - l) & 63));
    }
    const i = r.charAt(64);
    if (i)
      for (; s.length % 4; )
        s.push(i);
    return s.join("");
  },
  parse(n) {
    let t = n.length;
    const e = this._map;
    let r = this._reverseMap;
    if (!r) {
      this._reverseMap = [], r = this._reverseMap;
      for (let i = 0; i < e.length; i += 1)
        r[e.charCodeAt(i)] = i;
    }
    const s = e.charAt(64);
    if (s) {
      const i = n.indexOf(s);
      i !== -1 && (t = i);
    }
    return kr(n, t, r);
  },
  _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
}, w = [];
for (let n = 0; n < 64; n += 1)
  w[n] = Math.abs(Math.sin(n + 1)) * 4294967296 | 0;
const R = (n, t, e, r, s, i, o) => {
  const c = n + (t & e | ~t & r) + s + o;
  return (c << i | c >>> 32 - i) + t;
}, H = (n, t, e, r, s, i, o) => {
  const c = n + (t & r | e & ~r) + s + o;
  return (c << i | c >>> 32 - i) + t;
}, M = (n, t, e, r, s, i, o) => {
  const c = n + (t ^ e ^ r) + s + o;
  return (c << i | c >>> 32 - i) + t;
}, O = (n, t, e, r, s, i, o) => {
  const c = n + (e ^ (t | ~r)) + s + o;
  return (c << i | c >>> 32 - i) + t;
};
class b0 extends P {
  _doReset() {
    this._hash = new A([
      1732584193,
      4023233417,
      2562383102,
      271733878
    ]);
  }
  _doProcessBlock(t, e) {
    const r = t;
    for (let at = 0; at < 16; at += 1) {
      const Pt = e + at, nt = t[Pt];
      r[Pt] = (nt << 8 | nt >>> 24) & 16711935 | (nt << 24 | nt >>> 8) & 4278255360;
    }
    const s = this._hash.words, i = r[e + 0], o = r[e + 1], c = r[e + 2], a = r[e + 3], u = r[e + 4], h = r[e + 5], l = r[e + 6], y = r[e + 7], v = r[e + 8], m = r[e + 9], g = r[e + 10], S = r[e + 11], _ = r[e + 12], B = r[e + 13], E = r[e + 14], I = r[e + 15];
    let f = s[0], x = s[1], p = s[2], b = s[3];
    f = R(f, x, p, b, i, 7, w[0]), b = R(b, f, x, p, o, 12, w[1]), p = R(p, b, f, x, c, 17, w[2]), x = R(x, p, b, f, a, 22, w[3]), f = R(f, x, p, b, u, 7, w[4]), b = R(b, f, x, p, h, 12, w[5]), p = R(p, b, f, x, l, 17, w[6]), x = R(x, p, b, f, y, 22, w[7]), f = R(f, x, p, b, v, 7, w[8]), b = R(b, f, x, p, m, 12, w[9]), p = R(p, b, f, x, g, 17, w[10]), x = R(x, p, b, f, S, 22, w[11]), f = R(f, x, p, b, _, 7, w[12]), b = R(b, f, x, p, B, 12, w[13]), p = R(p, b, f, x, E, 17, w[14]), x = R(x, p, b, f, I, 22, w[15]), f = H(f, x, p, b, o, 5, w[16]), b = H(b, f, x, p, l, 9, w[17]), p = H(p, b, f, x, S, 14, w[18]), x = H(x, p, b, f, i, 20, w[19]), f = H(f, x, p, b, h, 5, w[20]), b = H(b, f, x, p, g, 9, w[21]), p = H(p, b, f, x, I, 14, w[22]), x = H(x, p, b, f, u, 20, w[23]), f = H(f, x, p, b, m, 5, w[24]), b = H(b, f, x, p, E, 9, w[25]), p = H(p, b, f, x, a, 14, w[26]), x = H(x, p, b, f, v, 20, w[27]), f = H(f, x, p, b, B, 5, w[28]), b = H(b, f, x, p, c, 9, w[29]), p = H(p, b, f, x, y, 14, w[30]), x = H(x, p, b, f, _, 20, w[31]), f = M(f, x, p, b, h, 4, w[32]), b = M(b, f, x, p, v, 11, w[33]), p = M(p, b, f, x, S, 16, w[34]), x = M(x, p, b, f, E, 23, w[35]), f = M(f, x, p, b, o, 4, w[36]), b = M(b, f, x, p, u, 11, w[37]), p = M(p, b, f, x, y, 16, w[38]), x = M(x, p, b, f, g, 23, w[39]), f = M(f, x, p, b, B, 4, w[40]), b = M(b, f, x, p, i, 11, w[41]), p = M(p, b, f, x, a, 16, w[42]), x = M(x, p, b, f, l, 23, w[43]), f = M(f, x, p, b, m, 4, w[44]), b = M(b, f, x, p, _, 11, w[45]), p = M(p, b, f, x, I, 16, w[46]), x = M(x, p, b, f, c, 23, w[47]), f = O(f, x, p, b, i, 6, w[48]), b = O(b, f, x, p, y, 10, w[49]), p = O(p, b, f, x, E, 15, w[50]), x = O(x, p, b, f, h, 21, w[51]), f = O(f, x, p, b, _, 6, w[52]), b = O(b, f, x, p, a, 10, w[53]), p = O(p, b, f, x, g, 15, w[54]), x = O(x, p, b, f, o, 21, w[55]), f = O(f, x, p, b, v, 6, w[56]), b = O(b, f, x, p, I, 10, w[57]), p = O(p, b, f, x, l, 15, w[58]), x = O(x, p, b, f, B, 21, w[59]), f = O(f, x, p, b, u, 6, w[60]), b = O(b, f, x, p, S, 10, w[61]), p = O(p, b, f, x, c, 15, w[62]), x = O(x, p, b, f, m, 21, w[63]), s[0] = s[0] + f | 0, s[1] = s[1] + x | 0, s[2] = s[2] + p | 0, s[3] = s[3] + b | 0;
  }
  _doFinalize() {
    const t = this._data, e = t.words, r = this._nDataBytes * 8, s = t.sigBytes * 8;
    e[s >>> 5] |= 128 << 24 - s % 32;
    const i = Math.floor(r / 4294967296), o = r;
    e[(s + 64 >>> 9 << 4) + 15] = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & 4278255360, e[(s + 64 >>> 9 << 4) + 14] = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360, t.sigBytes = (e.length + 1) * 4, this._process();
    const c = this._hash, a = c.words;
    for (let u = 0; u < 4; u += 1) {
      const h = a[u];
      a[u] = (h << 8 | h >>> 24) & 16711935 | (h << 24 | h >>> 8) & 4278255360;
    }
    return c;
  }
  clone() {
    const t = super.clone.call(this);
    return t._hash = this._hash.clone(), t;
  }
}
const Tr = P._createHelper(b0), Ar = P._createHmacHelper(b0);
class V0 extends C {
  constructor(t) {
    super(), this.cfg = Object.assign(
      new C(),
      {
        keySize: 128 / 32,
        hasher: b0,
        iterations: 1
      },
      t
    );
  }
  compute(t, e) {
    let r;
    const { cfg: s } = this, i = s.hasher.create(), o = A.create(), c = o.words, { keySize: a, iterations: u } = s;
    for (; c.length < a; ) {
      r && i.update(r), r = i.update(t).finalize(e), i.reset();
      for (let h = 1; h < u; h += 1)
        r = i.finalize(r), i.reset();
      o.concat(r);
    }
    return o.sigBytes = a * 4, o;
  }
}
const Br = (n, t, e) => V0.create(e).compute(n, t);
class bt extends U0 {
  constructor(t, e, r) {
    super(), this.cfg = Object.assign(new C(), r), this._xformMode = t, this._key = e, this.reset();
  }
  static createEncryptor(t, e) {
    return this.create(this._ENC_XFORM_MODE, t, e);
  }
  static createDecryptor(t, e) {
    return this.create(this._DEC_XFORM_MODE, t, e);
  }
  static _createHelper(t) {
    const e = (r) => typeof r == "string" ? q0 : pt;
    return {
      encrypt(r, s, i) {
        return e(s).encrypt(t, r, s, i);
      },
      decrypt(r, s, i) {
        return e(s).decrypt(t, r, s, i);
      }
    };
  }
  reset() {
    super.reset.call(this), this._doReset();
  }
  process(t) {
    return this._append(t), this._process();
  }
  finalize(t) {
    return t && this._append(t), this._doFinalize();
  }
}
bt._ENC_XFORM_MODE = 1;
bt._DEC_XFORM_MODE = 2;
bt.keySize = 128 / 32;
bt.ivSize = 128 / 32;
class ht extends bt {
  constructor(...t) {
    super(...t), this.blockSize = 1;
  }
  _doFinalize() {
    return this._process(!0);
  }
}
class yt extends C {
  constructor(t, e) {
    super(), this._cipher = t, this._iv = e;
  }
  static createEncryptor(t, e) {
    return this.Encryptor.create(t, e);
  }
  static createDecryptor(t, e) {
    return this.Decryptor.create(t, e);
  }
}
function Ve(n, t, e) {
  const r = n;
  let s;
  const i = this._iv;
  i ? (s = i, this._iv = void 0) : s = this._prevBlock;
  for (let o = 0; o < e; o += 1)
    r[t + o] ^= s[o];
}
class Bt extends yt {
}
Bt.Encryptor = class extends Bt {
  processBlock(n, t) {
    const e = this._cipher, { blockSize: r } = e;
    Ve.call(this, n, t, r), e.encryptBlock(n, t), this._prevBlock = n.slice(t, t + r);
  }
};
Bt.Decryptor = class extends Bt {
  processBlock(n, t) {
    const e = this._cipher, { blockSize: r } = e, s = n.slice(t, t + r);
    e.decryptBlock(n, t), Ve.call(this, n, t, r), this._prevBlock = s;
  }
};
const qe = {
  pad(n, t) {
    const e = t * 4, r = e - n.sigBytes % e, s = r << 24 | r << 16 | r << 8 | r, i = [];
    for (let c = 0; c < r; c += 4)
      i.push(s);
    const o = A.create(i, r);
    n.concat(o);
  },
  unpad(n) {
    const t = n, e = t.words[t.sigBytes - 1 >>> 2] & 255;
    t.sigBytes -= e;
  }
};
class _t extends bt {
  constructor(t, e, r) {
    super(t, e, Object.assign(
      {
        mode: Bt,
        padding: qe
      },
      r
    )), this.blockSize = 128 / 32;
  }
  reset() {
    let t;
    super.reset.call(this);
    const { cfg: e } = this, { iv: r, mode: s } = e;
    this._xformMode === this.constructor._ENC_XFORM_MODE ? t = s.createEncryptor : (t = s.createDecryptor, this._minBufferSize = 1), this._mode = t.call(s, this, r && r.words), this._mode.__creator = t;
  }
  _doProcessBlock(t, e) {
    this._mode.processBlock(t, e);
  }
  _doFinalize() {
    let t;
    const { padding: e } = this.cfg;
    return this._xformMode === this.constructor._ENC_XFORM_MODE ? (e.pad(this._data, this.blockSize), t = this._process(!0)) : (t = this._process(!0), e.unpad(t)), t;
  }
}
class Jt extends C {
  constructor(t) {
    super(), this.mixIn(t);
  }
  toString(t) {
    return (t || this.formatter).stringify(this);
  }
}
const Ye = {
  stringify(n) {
    let t;
    const { ciphertext: e, salt: r } = n;
    return r ? t = A.create([1398893684, 1701076831]).concat(r).concat(e) : t = e, t.toString(A0);
  },
  parse(n) {
    let t;
    const e = A0.parse(n), r = e.words;
    return r[0] === 1398893684 && r[1] === 1701076831 && (t = A.create(r.slice(2, 4)), r.splice(0, 4), e.sigBytes -= 16), Jt.create({ ciphertext: e, salt: t });
  }
};
class pt extends C {
  static encrypt(t, e, r, s) {
    const i = Object.assign(new C(), this.cfg, s), o = t.createEncryptor(r, i), c = o.finalize(e), a = o.cfg;
    return Jt.create({
      ciphertext: c,
      key: r,
      iv: a.iv,
      algorithm: t,
      mode: a.mode,
      padding: a.padding,
      blockSize: o.blockSize,
      formatter: i.format
    });
  }
  static decrypt(t, e, r, s) {
    let i = e;
    const o = Object.assign(new C(), this.cfg, s);
    return i = this._parse(i, o.format), t.createDecryptor(r, o).finalize(i.ciphertext);
  }
  static _parse(t, e) {
    return typeof t == "string" ? e.parse(t, this) : t;
  }
}
pt.cfg = Object.assign(
  new C(),
  { format: Ye }
);
const Ge = {
  execute(n, t, e, r) {
    let s = r;
    s || (s = A.random(64 / 8));
    const i = V0.create({ keySize: t + e }).compute(n, s), o = A.create(i.words.slice(t), e * 4);
    return i.sigBytes = t * 4, Jt.create({ key: i, iv: o, salt: s });
  }
};
class q0 extends pt {
  static encrypt(t, e, r, s) {
    const i = Object.assign(new C(), this.cfg, s), o = i.kdf.execute(r, t.keySize, t.ivSize);
    i.iv = o.iv;
    const c = pt.encrypt.call(this, t, e, o.key, i);
    return c.mixIn(o), c;
  }
  static decrypt(t, e, r, s) {
    let i = e;
    const o = Object.assign(new C(), this.cfg, s);
    i = this._parse(i, o.format);
    const c = o.kdf.execute(r, t.keySize, t.ivSize, i.salt);
    return o.iv = c.iv, pt.decrypt.call(this, t, i, c.key, o);
  }
}
q0.cfg = Object.assign(pt.cfg, { kdf: Ge });
const ye = (n) => n << 8 & 4278255360 | n >>> 8 & 16711935, Xe = {
  stringify(n) {
    const { words: t, sigBytes: e } = n, r = [];
    for (let s = 0; s < e; s += 2) {
      const i = t[s >>> 2] >>> 16 - s % 4 * 8 & 65535;
      r.push(String.fromCharCode(i));
    }
    return r.join("");
  },
  parse(n) {
    const t = n.length, e = [];
    for (let r = 0; r < t; r += 1)
      e[r >>> 1] |= n.charCodeAt(r) << 16 - r % 2 * 16;
    return A.create(e, t * 2);
  }
}, Ir = Xe, Cr = {
  stringify(n) {
    const { words: t, sigBytes: e } = n, r = [];
    for (let s = 0; s < e; s += 2) {
      const i = ye(t[s >>> 2] >>> 16 - s % 4 * 8 & 65535);
      r.push(String.fromCharCode(i));
    }
    return r.join("");
  },
  parse(n) {
    const t = n.length, e = [];
    for (let r = 0; r < t; r += 1)
      e[r >>> 1] |= ye(n.charCodeAt(r) << 16 - r % 2 * 16);
    return A.create(e, t * 2);
  }
}, xt = [];
class y0 extends P {
  _doReset() {
    this._hash = new A([
      1732584193,
      4023233417,
      2562383102,
      271733878,
      3285377520
    ]);
  }
  _doProcessBlock(t, e) {
    const r = this._hash.words;
    let s = r[0], i = r[1], o = r[2], c = r[3], a = r[4];
    for (let u = 0; u < 80; u += 1) {
      if (u < 16)
        xt[u] = t[e + u] | 0;
      else {
        const l = xt[u - 3] ^ xt[u - 8] ^ xt[u - 14] ^ xt[u - 16];
        xt[u] = l << 1 | l >>> 31;
      }
      let h = (s << 5 | s >>> 27) + a + xt[u];
      u < 20 ? h += (i & o | ~i & c) + 1518500249 : u < 40 ? h += (i ^ o ^ c) + 1859775393 : u < 60 ? h += (i & o | i & c | o & c) - 1894007588 : h += (i ^ o ^ c) - 899497514, a = c, c = o, o = i << 30 | i >>> 2, i = s, s = h;
    }
    r[0] = r[0] + s | 0, r[1] = r[1] + i | 0, r[2] = r[2] + o | 0, r[3] = r[3] + c | 0, r[4] = r[4] + a | 0;
  }
  _doFinalize() {
    const t = this._data, e = t.words, r = this._nDataBytes * 8, s = t.sigBytes * 8;
    return e[s >>> 5] |= 128 << 24 - s % 32, e[(s + 64 >>> 9 << 4) + 14] = Math.floor(r / 4294967296), e[(s + 64 >>> 9 << 4) + 15] = r, t.sigBytes = e.length * 4, this._process(), this._hash;
  }
  clone() {
    const t = super.clone.call(this);
    return t._hash = this._hash.clone(), t;
  }
}
const Pr = P._createHelper(y0), Rr = P._createHmacHelper(y0), Qe = [], Je = [], Hr = (n) => {
  const t = Math.sqrt(n);
  for (let e = 2; e <= t; e += 1)
    if (!(n % e))
      return !1;
  return !0;
}, _e = (n) => (n - (n | 0)) * 4294967296 | 0;
let s0 = 2, $t = 0;
for (; $t < 64; )
  Hr(s0) && ($t < 8 && (Qe[$t] = _e(s0 ** (1 / 2))), Je[$t] = _e(s0 ** (1 / 3)), $t += 1), s0 += 1;
const dt = [];
class It extends P {
  _doReset() {
    this._hash = new A(Qe.slice(0));
  }
  _doProcessBlock(t, e) {
    const r = this._hash.words;
    let s = r[0], i = r[1], o = r[2], c = r[3], a = r[4], u = r[5], h = r[6], l = r[7];
    for (let y = 0; y < 64; y += 1) {
      if (y < 16)
        dt[y] = t[e + y] | 0;
      else {
        const E = dt[y - 15], I = (E << 25 | E >>> 7) ^ (E << 14 | E >>> 18) ^ E >>> 3, f = dt[y - 2], x = (f << 15 | f >>> 17) ^ (f << 13 | f >>> 19) ^ f >>> 10;
        dt[y] = I + dt[y - 7] + x + dt[y - 16];
      }
      const v = a & u ^ ~a & h, m = s & i ^ s & o ^ i & o, g = (s << 30 | s >>> 2) ^ (s << 19 | s >>> 13) ^ (s << 10 | s >>> 22), S = (a << 26 | a >>> 6) ^ (a << 21 | a >>> 11) ^ (a << 7 | a >>> 25), _ = l + S + v + Je[y] + dt[y], B = g + m;
      l = h, h = u, u = a, a = c + _ | 0, c = o, o = i, i = s, s = _ + B | 0;
    }
    r[0] = r[0] + s | 0, r[1] = r[1] + i | 0, r[2] = r[2] + o | 0, r[3] = r[3] + c | 0, r[4] = r[4] + a | 0, r[5] = r[5] + u | 0, r[6] = r[6] + h | 0, r[7] = r[7] + l | 0;
  }
  _doFinalize() {
    const t = this._data, e = t.words, r = this._nDataBytes * 8, s = t.sigBytes * 8;
    return e[s >>> 5] |= 128 << 24 - s % 32, e[(s + 64 >>> 9 << 4) + 14] = Math.floor(r / 4294967296), e[(s + 64 >>> 9 << 4) + 15] = r, t.sigBytes = e.length * 4, this._process(), this._hash;
  }
  clone() {
    const t = super.clone.call(this);
    return t._hash = this._hash.clone(), t;
  }
}
const Mr = P._createHelper(It), Or = P._createHmacHelper(It);
class Y0 extends It {
  _doReset() {
    this._hash = new A([
      3238371032,
      914150663,
      812702999,
      4144912697,
      4290775857,
      1750603025,
      1694076839,
      3204075428
    ]);
  }
  _doFinalize() {
    const t = super._doFinalize.call(this);
    return t.sigBytes -= 4, t;
  }
}
const Dr = It._createHelper(Y0), Lr = It._createHmacHelper(Y0), Fr = [
  new d(1116352408, 3609767458),
  new d(1899447441, 602891725),
  new d(3049323471, 3964484399),
  new d(3921009573, 2173295548),
  new d(961987163, 4081628472),
  new d(1508970993, 3053834265),
  new d(2453635748, 2937671579),
  new d(2870763221, 3664609560),
  new d(3624381080, 2734883394),
  new d(310598401, 1164996542),
  new d(607225278, 1323610764),
  new d(1426881987, 3590304994),
  new d(1925078388, 4068182383),
  new d(2162078206, 991336113),
  new d(2614888103, 633803317),
  new d(3248222580, 3479774868),
  new d(3835390401, 2666613458),
  new d(4022224774, 944711139),
  new d(264347078, 2341262773),
  new d(604807628, 2007800933),
  new d(770255983, 1495990901),
  new d(1249150122, 1856431235),
  new d(1555081692, 3175218132),
  new d(1996064986, 2198950837),
  new d(2554220882, 3999719339),
  new d(2821834349, 766784016),
  new d(2952996808, 2566594879),
  new d(3210313671, 3203337956),
  new d(3336571891, 1034457026),
  new d(3584528711, 2466948901),
  new d(113926993, 3758326383),
  new d(338241895, 168717936),
  new d(666307205, 1188179964),
  new d(773529912, 1546045734),
  new d(1294757372, 1522805485),
  new d(1396182291, 2643833823),
  new d(1695183700, 2343527390),
  new d(1986661051, 1014477480),
  new d(2177026350, 1206759142),
  new d(2456956037, 344077627),
  new d(2730485921, 1290863460),
  new d(2820302411, 3158454273),
  new d(3259730800, 3505952657),
  new d(3345764771, 106217008),
  new d(3516065817, 3606008344),
  new d(3600352804, 1432725776),
  new d(4094571909, 1467031594),
  new d(275423344, 851169720),
  new d(430227734, 3100823752),
  new d(506948616, 1363258195),
  new d(659060556, 3750685593),
  new d(883997877, 3785050280),
  new d(958139571, 3318307427),
  new d(1322822218, 3812723403),
  new d(1537002063, 2003034995),
  new d(1747873779, 3602036899),
  new d(1955562222, 1575990012),
  new d(2024104815, 1125592928),
  new d(2227730452, 2716904306),
  new d(2361852424, 442776044),
  new d(2428436474, 593698344),
  new d(2756734187, 3733110249),
  new d(3204031479, 2999351573),
  new d(3329325298, 3815920427),
  new d(3391569614, 3928383900),
  new d(3515267271, 566280711),
  new d(3940187606, 3454069534),
  new d(4118630271, 4000239992),
  new d(116418474, 1914138554),
  new d(174292421, 2731055270),
  new d(289380356, 3203993006),
  new d(460393269, 320620315),
  new d(685471733, 587496836),
  new d(852142971, 1086792851),
  new d(1017036298, 365543100),
  new d(1126000580, 2618297676),
  new d(1288033470, 3409855158),
  new d(1501505948, 4234509866),
  new d(1607167915, 987167468),
  new d(1816402316, 1246189591)
], kt = [];
for (let n = 0; n < 80; n += 1)
  kt[n] = new d();
class Ct extends P {
  constructor() {
    super(), this.blockSize = 1024 / 32;
  }
  _doReset() {
    this._hash = new N0([
      new d(1779033703, 4089235720),
      new d(3144134277, 2227873595),
      new d(1013904242, 4271175723),
      new d(2773480762, 1595750129),
      new d(1359893119, 2917565137),
      new d(2600822924, 725511199),
      new d(528734635, 4215389547),
      new d(1541459225, 327033209)
    ]);
  }
  _doProcessBlock(t, e) {
    const r = this._hash.words, s = r[0], i = r[1], o = r[2], c = r[3], a = r[4], u = r[5], h = r[6], l = r[7], y = s.high;
    let v = s.low;
    const m = i.high;
    let g = i.low;
    const S = o.high;
    let _ = o.low;
    const B = c.high;
    let E = c.low;
    const I = a.high;
    let f = a.low;
    const x = u.high;
    let p = u.low;
    const b = h.high;
    let at = h.low;
    const Pt = l.high;
    let nt = l.low, U = y, F = v, Rt = m, wt = g, Ht = S, gt = _, m0 = B, Mt = E, K = I, z = f, n0 = x, Ot = p, r0 = b, Dt = at, v0 = Pt, Lt = nt;
    for (let N = 0; N < 80; N += 1) {
      let X, ut;
      const mt = kt[N];
      if (N < 16)
        mt.high = t[e + N * 2] | 0, ut = mt.high, mt.low = t[e + N * 2 + 1] | 0, X = mt.low;
      else {
        const ue = kt[N - 15], vt = ue.high, Ft = ue.low, Wn = (vt >>> 1 | Ft << 31) ^ (vt >>> 8 | Ft << 24) ^ vt >>> 7, fe = (Ft >>> 1 | vt << 31) ^ (Ft >>> 8 | vt << 24) ^ (Ft >>> 7 | vt << 25), le = kt[N - 2], St = le.high, zt = le.low, jn = (St >>> 19 | zt << 13) ^ (St << 3 | zt >>> 29) ^ St >>> 6, he = (zt >>> 19 | St << 13) ^ (zt << 3 | St >>> 29) ^ (zt >>> 6 | St << 26), xe = kt[N - 7], Un = xe.high, Kn = xe.low, de = kt[N - 16], Nn = de.high, pe = de.low;
        X = fe + Kn, ut = Wn + Un + (X >>> 0 < fe >>> 0 ? 1 : 0), X += he, ut = ut + jn + (X >>> 0 < he >>> 0 ? 1 : 0), X += pe, ut = ut + Nn + (X >>> 0 < pe >>> 0 ? 1 : 0), mt.high = ut, mt.low = X;
      }
      const Hn = K & n0 ^ ~K & r0, se = z & Ot ^ ~z & Dt, Mn = U & Rt ^ U & Ht ^ Rt & Ht, On = F & wt ^ F & gt ^ wt & gt, Dn = (U >>> 28 | F << 4) ^ (U << 30 | F >>> 2) ^ (U << 25 | F >>> 7), ie = (F >>> 28 | U << 4) ^ (F << 30 | U >>> 2) ^ (F << 25 | U >>> 7), Ln = (K >>> 14 | z << 18) ^ (K >>> 18 | z << 14) ^ (K << 23 | z >>> 9), Fn = (z >>> 14 | K << 18) ^ (z >>> 18 | K << 14) ^ (z << 23 | K >>> 9), oe = Fr[N], zn = oe.high, ce = oe.low;
      let Q = Lt + Fn, ft = v0 + Ln + (Q >>> 0 < Lt >>> 0 ? 1 : 0);
      Q += se, ft = ft + Hn + (Q >>> 0 < se >>> 0 ? 1 : 0), Q += ce, ft = ft + zn + (Q >>> 0 < ce >>> 0 ? 1 : 0), Q += X, ft = ft + ut + (Q >>> 0 < X >>> 0 ? 1 : 0);
      const ae = ie + On, $n = Dn + Mn + (ae >>> 0 < ie >>> 0 ? 1 : 0);
      v0 = r0, Lt = Dt, r0 = n0, Dt = Ot, n0 = K, Ot = z, z = Mt + Q | 0, K = m0 + ft + (z >>> 0 < Mt >>> 0 ? 1 : 0) | 0, m0 = Ht, Mt = gt, Ht = Rt, gt = wt, Rt = U, wt = F, F = Q + ae | 0, U = ft + $n + (F >>> 0 < Q >>> 0 ? 1 : 0) | 0;
    }
    s.low = v + F, v = s.low, s.high = y + U + (v >>> 0 < F >>> 0 ? 1 : 0), i.low = g + wt, g = i.low, i.high = m + Rt + (g >>> 0 < wt >>> 0 ? 1 : 0), o.low = _ + gt, _ = o.low, o.high = S + Ht + (_ >>> 0 < gt >>> 0 ? 1 : 0), c.low = E + Mt, E = c.low, c.high = B + m0 + (E >>> 0 < Mt >>> 0 ? 1 : 0), a.low = f + z, f = a.low, a.high = I + K + (f >>> 0 < z >>> 0 ? 1 : 0), u.low = p + Ot, p = u.low, u.high = x + n0 + (p >>> 0 < Ot >>> 0 ? 1 : 0), h.low = at + Dt, at = h.low, h.high = b + r0 + (at >>> 0 < Dt >>> 0 ? 1 : 0), l.low = nt + Lt, nt = l.low, l.high = Pt + v0 + (nt >>> 0 < Lt >>> 0 ? 1 : 0);
  }
  _doFinalize() {
    const t = this._data, e = t.words, r = this._nDataBytes * 8, s = t.sigBytes * 8;
    return e[s >>> 5] |= 128 << 24 - s % 32, e[(s + 128 >>> 10 << 5) + 30] = Math.floor(r / 4294967296), e[(s + 128 >>> 10 << 5) + 31] = r, t.sigBytes = e.length * 4, this._process(), this._hash.toX32();
  }
  clone() {
    const t = super.clone.call(this);
    return t._hash = this._hash.clone(), t;
  }
}
const zr = P._createHelper(Ct), $r = P._createHmacHelper(Ct);
class G0 extends Ct {
  _doReset() {
    this._hash = new N0([
      new d(3418070365, 3238371032),
      new d(1654270250, 914150663),
      new d(2438529370, 812702999),
      new d(355462360, 4144912697),
      new d(1731405415, 4290775857),
      new d(2394180231, 1750603025),
      new d(3675008525, 1694076839),
      new d(1203062813, 3204075428)
    ]);
  }
  _doFinalize() {
    const t = super._doFinalize.call(this);
    return t.sigBytes -= 16, t;
  }
}
const Wr = Ct._createHelper(G0), jr = Ct._createHmacHelper(G0), Ze = [], tn = [], en = [];
let S0 = 1, i0 = 0;
for (let n = 0; n < 24; n += 1) {
  Ze[S0 + 5 * i0] = (n + 1) * (n + 2) / 2 % 64;
  const t = i0 % 5, e = (2 * S0 + 3 * i0) % 5;
  S0 = t, i0 = e;
}
for (let n = 0; n < 5; n += 1)
  for (let t = 0; t < 5; t += 1)
    tn[n + 5 * t] = t + (2 * n + 3 * t) % 5 * 5;
let Wt = 1;
for (let n = 0; n < 24; n += 1) {
  let t = 0, e = 0;
  for (let r = 0; r < 7; r += 1) {
    if (Wt & 1) {
      const s = (1 << r) - 1;
      s < 32 ? e ^= 1 << s : t ^= 1 << s - 32;
    }
    Wt & 128 ? Wt = Wt << 1 ^ 113 : Wt <<= 1;
  }
  en[n] = d.create(t, e);
}
const ot = [];
for (let n = 0; n < 25; n += 1)
  ot[n] = d.create();
class X0 extends P {
  constructor(t) {
    super(Object.assign(
      { outputLength: 512 },
      t
    ));
  }
  _doReset() {
    this._state = [];
    const t = this._state;
    for (let e = 0; e < 25; e += 1)
      t[e] = new d();
    this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
  }
  _doProcessBlock(t, e) {
    const r = this._state, s = this.blockSize / 2;
    for (let i = 0; i < s; i += 1) {
      let o = t[e + 2 * i], c = t[e + 2 * i + 1];
      o = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360, c = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360;
      const a = r[i];
      a.high ^= c, a.low ^= o;
    }
    for (let i = 0; i < 24; i += 1) {
      for (let h = 0; h < 5; h += 1) {
        let l = 0, y = 0;
        for (let m = 0; m < 5; m += 1) {
          const g = r[h + 5 * m];
          l ^= g.high, y ^= g.low;
        }
        const v = ot[h];
        v.high = l, v.low = y;
      }
      for (let h = 0; h < 5; h += 1) {
        const l = ot[(h + 4) % 5], y = ot[(h + 1) % 5], v = y.high, m = y.low, g = l.high ^ (v << 1 | m >>> 31), S = l.low ^ (m << 1 | v >>> 31);
        for (let _ = 0; _ < 5; _ += 1) {
          const B = r[h + 5 * _];
          B.high ^= g, B.low ^= S;
        }
      }
      for (let h = 1; h < 25; h += 1) {
        let l, y;
        const v = r[h], m = v.high, g = v.low, S = Ze[h];
        S < 32 ? (l = m << S | g >>> 32 - S, y = g << S | m >>> 32 - S) : (l = g << S - 32 | m >>> 64 - S, y = m << S - 32 | g >>> 64 - S);
        const _ = ot[tn[h]];
        _.high = l, _.low = y;
      }
      const o = ot[0], c = r[0];
      o.high = c.high, o.low = c.low;
      for (let h = 0; h < 5; h += 1)
        for (let l = 0; l < 5; l += 1) {
          const y = h + 5 * l, v = r[y], m = ot[y], g = ot[(h + 1) % 5 + 5 * l], S = ot[(h + 2) % 5 + 5 * l];
          v.high = m.high ^ ~g.high & S.high, v.low = m.low ^ ~g.low & S.low;
        }
      const a = r[0], u = en[i];
      a.high ^= u.high, a.low ^= u.low;
    }
  }
  _doFinalize() {
    const t = this._data, e = t.words, r = t.sigBytes * 8, s = this.blockSize * 32;
    e[r >>> 5] |= 1 << 24 - r % 32, e[(Math.ceil((r + 1) / s) * s >>> 5) - 1] |= 128, t.sigBytes = e.length * 4, this._process();
    const i = this._state, o = this.cfg.outputLength / 8, c = o / 8, a = [];
    for (let u = 0; u < c; u += 1) {
      const h = i[u];
      let l = h.high, y = h.low;
      l = (l << 8 | l >>> 24) & 16711935 | (l << 24 | l >>> 8) & 4278255360, y = (y << 8 | y >>> 24) & 16711935 | (y << 24 | y >>> 8) & 4278255360, a.push(y), a.push(l);
    }
    return new A(a, o);
  }
  clone() {
    const t = super.clone.call(this);
    t._state = this._state.slice(0);
    const e = t._state;
    for (let r = 0; r < 25; r += 1)
      e[r] = e[r].clone();
    return t;
  }
}
const Ur = P._createHelper(X0), Kr = P._createHmacHelper(X0);
/** @preserve
(c) 2012 by Cédric Mesnil. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted
provided that the following conditions are met:

    - Redistributions of source code must retain the above copyright notice, this list of
    conditions and the following disclaimer.
    - Redistributions in binary form must reproduce the above copyright notice, this list
    of conditions and the following disclaimer in the documentation and/or other materials
    provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR
CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY
WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
const Nr = A.create([
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  7,
  4,
  13,
  1,
  10,
  6,
  15,
  3,
  12,
  0,
  9,
  5,
  2,
  14,
  11,
  8,
  3,
  10,
  14,
  4,
  9,
  15,
  8,
  1,
  2,
  7,
  0,
  6,
  13,
  11,
  5,
  12,
  1,
  9,
  11,
  10,
  0,
  8,
  12,
  4,
  13,
  3,
  7,
  15,
  14,
  5,
  6,
  2,
  4,
  0,
  5,
  9,
  7,
  12,
  2,
  10,
  14,
  1,
  3,
  8,
  11,
  6,
  15,
  13
]), Vr = A.create([
  5,
  14,
  7,
  0,
  9,
  2,
  11,
  4,
  13,
  6,
  15,
  8,
  1,
  10,
  3,
  12,
  6,
  11,
  3,
  7,
  0,
  13,
  5,
  10,
  14,
  15,
  8,
  12,
  4,
  9,
  1,
  2,
  15,
  5,
  1,
  3,
  7,
  14,
  6,
  9,
  11,
  8,
  12,
  2,
  10,
  0,
  4,
  13,
  8,
  6,
  4,
  1,
  3,
  11,
  15,
  0,
  5,
  12,
  2,
  13,
  9,
  7,
  10,
  14,
  12,
  15,
  10,
  4,
  1,
  5,
  8,
  7,
  6,
  2,
  13,
  14,
  0,
  3,
  9,
  11
]), qr = A.create([
  11,
  14,
  15,
  12,
  5,
  8,
  7,
  9,
  11,
  13,
  14,
  15,
  6,
  7,
  9,
  8,
  7,
  6,
  8,
  13,
  11,
  9,
  7,
  15,
  7,
  12,
  15,
  9,
  11,
  7,
  13,
  12,
  11,
  13,
  6,
  7,
  14,
  9,
  13,
  15,
  14,
  8,
  13,
  6,
  5,
  12,
  7,
  5,
  11,
  12,
  14,
  15,
  14,
  15,
  9,
  8,
  9,
  14,
  5,
  6,
  8,
  6,
  5,
  12,
  9,
  15,
  5,
  11,
  6,
  8,
  13,
  12,
  5,
  12,
  13,
  14,
  11,
  8,
  5,
  6
]), Yr = A.create([
  8,
  9,
  9,
  11,
  13,
  15,
  15,
  5,
  7,
  7,
  8,
  11,
  14,
  14,
  12,
  6,
  9,
  13,
  15,
  7,
  12,
  8,
  9,
  11,
  7,
  7,
  12,
  7,
  6,
  15,
  13,
  11,
  9,
  7,
  15,
  11,
  8,
  6,
  6,
  14,
  12,
  13,
  5,
  14,
  13,
  13,
  7,
  5,
  15,
  5,
  8,
  11,
  14,
  14,
  6,
  14,
  6,
  9,
  12,
  9,
  12,
  5,
  15,
  8,
  8,
  5,
  12,
  9,
  12,
  5,
  14,
  6,
  8,
  13,
  6,
  5,
  15,
  13,
  11,
  11
]), Gr = A.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), Xr = A.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), we = (n, t, e) => n ^ t ^ e, ge = (n, t, e) => n & t | ~n & e, me = (n, t, e) => (n | ~t) ^ e, ve = (n, t, e) => n & e | t & ~e, Se = (n, t, e) => n ^ (t | ~e), o0 = (n, t) => n << t | n >>> 32 - t;
class Q0 extends P {
  _doReset() {
    this._hash = A.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
  }
  _doProcessBlock(t, e) {
    const r = t;
    for (let x = 0; x < 16; x += 1) {
      const p = e + x, b = r[p];
      r[p] = (b << 8 | b >>> 24) & 16711935 | (b << 24 | b >>> 8) & 4278255360;
    }
    const s = this._hash.words, i = Gr.words, o = Xr.words, c = Nr.words, a = Vr.words, u = qr.words, h = Yr.words;
    let l = s[0], y = s[1], v = s[2], m = s[3], g = s[4], S = s[0], _ = s[1], B = s[2], E = s[3], I = s[4], f;
    for (let x = 0; x < 80; x += 1)
      f = l + r[e + c[x]] | 0, x < 16 ? f += we(y, v, m) + i[0] : x < 32 ? f += ge(y, v, m) + i[1] : x < 48 ? f += me(y, v, m) + i[2] : x < 64 ? f += ve(y, v, m) + i[3] : f += Se(y, v, m) + i[4], f |= 0, f = o0(f, u[x]), f = f + g | 0, l = g, g = m, m = o0(v, 10), v = y, y = f, f = S + r[e + a[x]] | 0, x < 16 ? f += Se(_, B, E) + o[0] : x < 32 ? f += ve(_, B, E) + o[1] : x < 48 ? f += me(_, B, E) + o[2] : x < 64 ? f += ge(_, B, E) + o[3] : f += we(_, B, E) + o[4], f |= 0, f = o0(f, h[x]), f = f + I | 0, S = I, I = E, E = o0(B, 10), B = _, _ = f;
    f = s[1] + v + E | 0, s[1] = s[2] + m + I | 0, s[2] = s[3] + g + S | 0, s[3] = s[4] + l + _ | 0, s[4] = s[0] + y + B | 0, s[0] = f;
  }
  _doFinalize() {
    const t = this._data, e = t.words, r = this._nDataBytes * 8, s = t.sigBytes * 8;
    e[s >>> 5] |= 128 << 24 - s % 32, e[(s + 64 >>> 9 << 4) + 14] = (r << 8 | r >>> 24) & 16711935 | (r << 24 | r >>> 8) & 4278255360, t.sigBytes = (e.length + 1) * 4, this._process();
    const i = this._hash, o = i.words;
    for (let c = 0; c < 5; c += 1) {
      const a = o[c];
      o[c] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
    }
    return i;
  }
  clone() {
    const t = super.clone.call(this);
    return t._hash = this._hash.clone(), t;
  }
}
const Qr = P._createHelper(Q0), Jr = P._createHmacHelper(Q0);
class nn extends C {
  constructor(t) {
    super(), this.cfg = Object.assign(
      new C(),
      {
        keySize: 128 / 32,
        hasher: y0,
        iterations: 1
      },
      t
    );
  }
  compute(t, e) {
    const { cfg: r } = this, s = K0.create(r.hasher, t), i = A.create(), o = A.create([1]), c = i.words, a = o.words, { keySize: u, iterations: h } = r;
    for (; c.length < u; ) {
      const l = s.update(e).finalize(o);
      s.reset();
      const y = l.words, v = y.length;
      let m = l;
      for (let g = 1; g < h; g += 1) {
        m = s.finalize(m), s.reset();
        const S = m.words;
        for (let _ = 0; _ < v; _ += 1)
          y[_] ^= S[_];
      }
      i.concat(l), a[0] += 1;
    }
    return i.sigBytes = u * 4, i;
  }
}
const Zr = (n, t, e) => nn.create(e).compute(n, t), L = [], rn = [], sn = [], on = [], cn = [], an = [], B0 = [], I0 = [], C0 = [], P0 = [], q = [];
for (let n = 0; n < 256; n += 1)
  n < 128 ? q[n] = n << 1 : q[n] = n << 1 ^ 283;
let V = 0, rt = 0;
for (let n = 0; n < 256; n += 1) {
  let t = rt ^ rt << 1 ^ rt << 2 ^ rt << 3 ^ rt << 4;
  t = t >>> 8 ^ t & 255 ^ 99, L[V] = t, rn[t] = V;
  const e = q[V], r = q[e], s = q[r];
  let i = q[t] * 257 ^ t * 16843008;
  sn[V] = i << 24 | i >>> 8, on[V] = i << 16 | i >>> 16, cn[V] = i << 8 | i >>> 24, an[V] = i, i = s * 16843009 ^ r * 65537 ^ e * 257 ^ V * 16843008, B0[t] = i << 24 | i >>> 8, I0[t] = i << 16 | i >>> 16, C0[t] = i << 8 | i >>> 24, P0[t] = i, V ? (V = e ^ q[q[q[s ^ e]]], rt ^= q[q[rt]]) : (rt = 1, V = rt);
}
const ts = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
class J0 extends _t {
  _doReset() {
    let t;
    if (this._nRounds && this._keyPriorReset === this._key)
      return;
    this._keyPriorReset = this._key;
    const e = this._keyPriorReset, r = e.words, s = e.sigBytes / 4;
    this._nRounds = s + 6;
    const o = (this._nRounds + 1) * 4;
    this._keySchedule = [];
    const c = this._keySchedule;
    for (let u = 0; u < o; u += 1)
      u < s ? c[u] = r[u] : (t = c[u - 1], u % s ? s > 6 && u % s === 4 && (t = L[t >>> 24] << 24 | L[t >>> 16 & 255] << 16 | L[t >>> 8 & 255] << 8 | L[t & 255]) : (t = t << 8 | t >>> 24, t = L[t >>> 24] << 24 | L[t >>> 16 & 255] << 16 | L[t >>> 8 & 255] << 8 | L[t & 255], t ^= ts[u / s | 0] << 24), c[u] = c[u - s] ^ t);
    this._invKeySchedule = [];
    const a = this._invKeySchedule;
    for (let u = 0; u < o; u += 1) {
      const h = o - u;
      u % 4 ? t = c[h] : t = c[h - 4], u < 4 || h <= 4 ? a[u] = t : a[u] = B0[L[t >>> 24]] ^ I0[L[t >>> 16 & 255]] ^ C0[L[t >>> 8 & 255]] ^ P0[L[t & 255]];
    }
  }
  encryptBlock(t, e) {
    this._doCryptBlock(
      t,
      e,
      this._keySchedule,
      sn,
      on,
      cn,
      an,
      L
    );
  }
  decryptBlock(t, e) {
    const r = t;
    let s = r[e + 1];
    r[e + 1] = r[e + 3], r[e + 3] = s, this._doCryptBlock(
      r,
      e,
      this._invKeySchedule,
      B0,
      I0,
      C0,
      P0,
      rn
    ), s = r[e + 1], r[e + 1] = r[e + 3], r[e + 3] = s;
  }
  _doCryptBlock(t, e, r, s, i, o, c, a) {
    const u = t, h = this._nRounds;
    let l = u[e] ^ r[0], y = u[e + 1] ^ r[1], v = u[e + 2] ^ r[2], m = u[e + 3] ^ r[3], g = 4;
    for (let I = 1; I < h; I += 1) {
      const f = s[l >>> 24] ^ i[y >>> 16 & 255] ^ o[v >>> 8 & 255] ^ c[m & 255] ^ r[g];
      g += 1;
      const x = s[y >>> 24] ^ i[v >>> 16 & 255] ^ o[m >>> 8 & 255] ^ c[l & 255] ^ r[g];
      g += 1;
      const p = s[v >>> 24] ^ i[m >>> 16 & 255] ^ o[l >>> 8 & 255] ^ c[y & 255] ^ r[g];
      g += 1;
      const b = s[m >>> 24] ^ i[l >>> 16 & 255] ^ o[y >>> 8 & 255] ^ c[v & 255] ^ r[g];
      g += 1, l = f, y = x, v = p, m = b;
    }
    const S = (a[l >>> 24] << 24 | a[y >>> 16 & 255] << 16 | a[v >>> 8 & 255] << 8 | a[m & 255]) ^ r[g];
    g += 1;
    const _ = (a[y >>> 24] << 24 | a[v >>> 16 & 255] << 16 | a[m >>> 8 & 255] << 8 | a[l & 255]) ^ r[g];
    g += 1;
    const B = (a[v >>> 24] << 24 | a[m >>> 16 & 255] << 16 | a[l >>> 8 & 255] << 8 | a[y & 255]) ^ r[g];
    g += 1;
    const E = (a[m >>> 24] << 24 | a[l >>> 16 & 255] << 16 | a[y >>> 8 & 255] << 8 | a[v & 255]) ^ r[g];
    g += 1, u[e] = S, u[e + 1] = _, u[e + 2] = B, u[e + 3] = E;
  }
}
J0.keySize = 256 / 32;
const es = _t._createHelper(J0), ns = [
  57,
  49,
  41,
  33,
  25,
  17,
  9,
  1,
  58,
  50,
  42,
  34,
  26,
  18,
  10,
  2,
  59,
  51,
  43,
  35,
  27,
  19,
  11,
  3,
  60,
  52,
  44,
  36,
  63,
  55,
  47,
  39,
  31,
  23,
  15,
  7,
  62,
  54,
  46,
  38,
  30,
  22,
  14,
  6,
  61,
  53,
  45,
  37,
  29,
  21,
  13,
  5,
  28,
  20,
  12,
  4
], Ee = [
  14,
  17,
  11,
  24,
  1,
  5,
  3,
  28,
  15,
  6,
  21,
  10,
  23,
  19,
  12,
  4,
  26,
  8,
  16,
  7,
  27,
  20,
  13,
  2,
  41,
  52,
  31,
  37,
  47,
  55,
  30,
  40,
  51,
  45,
  33,
  48,
  44,
  49,
  39,
  56,
  34,
  53,
  46,
  42,
  50,
  36,
  29,
  32
], rs = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], ss = [
  {
    0: 8421888,
    268435456: 32768,
    536870912: 8421378,
    805306368: 2,
    1073741824: 512,
    1342177280: 8421890,
    1610612736: 8389122,
    1879048192: 8388608,
    2147483648: 514,
    2415919104: 8389120,
    2684354560: 33280,
    2952790016: 8421376,
    3221225472: 32770,
    3489660928: 8388610,
    3758096384: 0,
    4026531840: 33282,
    134217728: 0,
    402653184: 8421890,
    671088640: 33282,
    939524096: 32768,
    1207959552: 8421888,
    1476395008: 512,
    1744830464: 8421378,
    2013265920: 2,
    2281701376: 8389120,
    2550136832: 33280,
    2818572288: 8421376,
    3087007744: 8389122,
    3355443200: 8388610,
    3623878656: 32770,
    3892314112: 514,
    4160749568: 8388608,
    1: 32768,
    268435457: 2,
    536870913: 8421888,
    805306369: 8388608,
    1073741825: 8421378,
    1342177281: 33280,
    1610612737: 512,
    1879048193: 8389122,
    2147483649: 8421890,
    2415919105: 8421376,
    2684354561: 8388610,
    2952790017: 33282,
    3221225473: 514,
    3489660929: 8389120,
    3758096385: 32770,
    4026531841: 0,
    134217729: 8421890,
    402653185: 8421376,
    671088641: 8388608,
    939524097: 512,
    1207959553: 32768,
    1476395009: 8388610,
    1744830465: 2,
    2013265921: 33282,
    2281701377: 32770,
    2550136833: 8389122,
    2818572289: 514,
    3087007745: 8421888,
    3355443201: 8389120,
    3623878657: 0,
    3892314113: 33280,
    4160749569: 8421378
  },
  {
    0: 1074282512,
    16777216: 16384,
    33554432: 524288,
    50331648: 1074266128,
    67108864: 1073741840,
    83886080: 1074282496,
    100663296: 1073758208,
    117440512: 16,
    134217728: 540672,
    150994944: 1073758224,
    167772160: 1073741824,
    184549376: 540688,
    201326592: 524304,
    218103808: 0,
    234881024: 16400,
    251658240: 1074266112,
    8388608: 1073758208,
    25165824: 540688,
    41943040: 16,
    58720256: 1073758224,
    75497472: 1074282512,
    92274688: 1073741824,
    109051904: 524288,
    125829120: 1074266128,
    142606336: 524304,
    159383552: 0,
    176160768: 16384,
    192937984: 1074266112,
    209715200: 1073741840,
    226492416: 540672,
    243269632: 1074282496,
    260046848: 16400,
    268435456: 0,
    285212672: 1074266128,
    301989888: 1073758224,
    318767104: 1074282496,
    335544320: 1074266112,
    352321536: 16,
    369098752: 540688,
    385875968: 16384,
    402653184: 16400,
    419430400: 524288,
    436207616: 524304,
    452984832: 1073741840,
    469762048: 540672,
    486539264: 1073758208,
    503316480: 1073741824,
    520093696: 1074282512,
    276824064: 540688,
    293601280: 524288,
    310378496: 1074266112,
    327155712: 16384,
    343932928: 1073758208,
    360710144: 1074282512,
    377487360: 16,
    394264576: 1073741824,
    411041792: 1074282496,
    427819008: 1073741840,
    444596224: 1073758224,
    461373440: 524304,
    478150656: 0,
    494927872: 16400,
    511705088: 1074266128,
    528482304: 540672
  },
  {
    0: 260,
    1048576: 0,
    2097152: 67109120,
    3145728: 65796,
    4194304: 65540,
    5242880: 67108868,
    6291456: 67174660,
    7340032: 67174400,
    8388608: 67108864,
    9437184: 67174656,
    10485760: 65792,
    11534336: 67174404,
    12582912: 67109124,
    13631488: 65536,
    14680064: 4,
    15728640: 256,
    524288: 67174656,
    1572864: 67174404,
    2621440: 0,
    3670016: 67109120,
    4718592: 67108868,
    5767168: 65536,
    6815744: 65540,
    7864320: 260,
    8912896: 4,
    9961472: 256,
    11010048: 67174400,
    12058624: 65796,
    13107200: 65792,
    14155776: 67109124,
    15204352: 67174660,
    16252928: 67108864,
    16777216: 67174656,
    17825792: 65540,
    18874368: 65536,
    19922944: 67109120,
    20971520: 256,
    22020096: 67174660,
    23068672: 67108868,
    24117248: 0,
    25165824: 67109124,
    26214400: 67108864,
    27262976: 4,
    28311552: 65792,
    29360128: 67174400,
    30408704: 260,
    31457280: 65796,
    32505856: 67174404,
    17301504: 67108864,
    18350080: 260,
    19398656: 67174656,
    20447232: 0,
    21495808: 65540,
    22544384: 67109120,
    23592960: 256,
    24641536: 67174404,
    25690112: 65536,
    26738688: 67174660,
    27787264: 65796,
    28835840: 67108868,
    29884416: 67109124,
    30932992: 67174400,
    31981568: 4,
    33030144: 65792
  },
  {
    0: 2151682048,
    65536: 2147487808,
    131072: 4198464,
    196608: 2151677952,
    262144: 0,
    327680: 4198400,
    393216: 2147483712,
    458752: 4194368,
    524288: 2147483648,
    589824: 4194304,
    655360: 64,
    720896: 2147487744,
    786432: 2151678016,
    851968: 4160,
    917504: 4096,
    983040: 2151682112,
    32768: 2147487808,
    98304: 64,
    163840: 2151678016,
    229376: 2147487744,
    294912: 4198400,
    360448: 2151682112,
    425984: 0,
    491520: 2151677952,
    557056: 4096,
    622592: 2151682048,
    688128: 4194304,
    753664: 4160,
    819200: 2147483648,
    884736: 4194368,
    950272: 4198464,
    1015808: 2147483712,
    1048576: 4194368,
    1114112: 4198400,
    1179648: 2147483712,
    1245184: 0,
    1310720: 4160,
    1376256: 2151678016,
    1441792: 2151682048,
    1507328: 2147487808,
    1572864: 2151682112,
    1638400: 2147483648,
    1703936: 2151677952,
    1769472: 4198464,
    1835008: 2147487744,
    1900544: 4194304,
    1966080: 64,
    2031616: 4096,
    1081344: 2151677952,
    1146880: 2151682112,
    1212416: 0,
    1277952: 4198400,
    1343488: 4194368,
    1409024: 2147483648,
    1474560: 2147487808,
    1540096: 64,
    1605632: 2147483712,
    1671168: 4096,
    1736704: 2147487744,
    1802240: 2151678016,
    1867776: 4160,
    1933312: 2151682048,
    1998848: 4194304,
    2064384: 4198464
  },
  {
    0: 128,
    4096: 17039360,
    8192: 262144,
    12288: 536870912,
    16384: 537133184,
    20480: 16777344,
    24576: 553648256,
    28672: 262272,
    32768: 16777216,
    36864: 537133056,
    40960: 536871040,
    45056: 553910400,
    49152: 553910272,
    53248: 0,
    57344: 17039488,
    61440: 553648128,
    2048: 17039488,
    6144: 553648256,
    10240: 128,
    14336: 17039360,
    18432: 262144,
    22528: 537133184,
    26624: 553910272,
    30720: 536870912,
    34816: 537133056,
    38912: 0,
    43008: 553910400,
    47104: 16777344,
    51200: 536871040,
    55296: 553648128,
    59392: 16777216,
    63488: 262272,
    65536: 262144,
    69632: 128,
    73728: 536870912,
    77824: 553648256,
    81920: 16777344,
    86016: 553910272,
    90112: 537133184,
    94208: 16777216,
    98304: 553910400,
    102400: 553648128,
    106496: 17039360,
    110592: 537133056,
    114688: 262272,
    118784: 536871040,
    122880: 0,
    126976: 17039488,
    67584: 553648256,
    71680: 16777216,
    75776: 17039360,
    79872: 537133184,
    83968: 536870912,
    88064: 17039488,
    92160: 128,
    96256: 553910272,
    100352: 262272,
    104448: 553910400,
    108544: 0,
    112640: 553648128,
    116736: 16777344,
    120832: 262144,
    124928: 537133056,
    129024: 536871040
  },
  {
    0: 268435464,
    256: 8192,
    512: 270532608,
    768: 270540808,
    1024: 268443648,
    1280: 2097152,
    1536: 2097160,
    1792: 268435456,
    2048: 0,
    2304: 268443656,
    2560: 2105344,
    2816: 8,
    3072: 270532616,
    3328: 2105352,
    3584: 8200,
    3840: 270540800,
    128: 270532608,
    384: 270540808,
    640: 8,
    896: 2097152,
    1152: 2105352,
    1408: 268435464,
    1664: 268443648,
    1920: 8200,
    2176: 2097160,
    2432: 8192,
    2688: 268443656,
    2944: 270532616,
    3200: 0,
    3456: 270540800,
    3712: 2105344,
    3968: 268435456,
    4096: 268443648,
    4352: 270532616,
    4608: 270540808,
    4864: 8200,
    5120: 2097152,
    5376: 268435456,
    5632: 268435464,
    5888: 2105344,
    6144: 2105352,
    6400: 0,
    6656: 8,
    6912: 270532608,
    7168: 8192,
    7424: 268443656,
    7680: 270540800,
    7936: 2097160,
    4224: 8,
    4480: 2105344,
    4736: 2097152,
    4992: 268435464,
    5248: 268443648,
    5504: 8200,
    5760: 270540808,
    6016: 270532608,
    6272: 270540800,
    6528: 270532616,
    6784: 8192,
    7040: 2105352,
    7296: 2097160,
    7552: 0,
    7808: 268435456,
    8064: 268443656
  },
  {
    0: 1048576,
    16: 33555457,
    32: 1024,
    48: 1049601,
    64: 34604033,
    80: 0,
    96: 1,
    112: 34603009,
    128: 33555456,
    144: 1048577,
    160: 33554433,
    176: 34604032,
    192: 34603008,
    208: 1025,
    224: 1049600,
    240: 33554432,
    8: 34603009,
    24: 0,
    40: 33555457,
    56: 34604032,
    72: 1048576,
    88: 33554433,
    104: 33554432,
    120: 1025,
    136: 1049601,
    152: 33555456,
    168: 34603008,
    184: 1048577,
    200: 1024,
    216: 34604033,
    232: 1,
    248: 1049600,
    256: 33554432,
    272: 1048576,
    288: 33555457,
    304: 34603009,
    320: 1048577,
    336: 33555456,
    352: 34604032,
    368: 1049601,
    384: 1025,
    400: 34604033,
    416: 1049600,
    432: 1,
    448: 0,
    464: 34603008,
    480: 33554433,
    496: 1024,
    264: 1049600,
    280: 33555457,
    296: 34603009,
    312: 1,
    328: 33554432,
    344: 1048576,
    360: 1025,
    376: 34604032,
    392: 33554433,
    408: 34603008,
    424: 0,
    440: 34604033,
    456: 1049601,
    472: 1024,
    488: 33555456,
    504: 1048577
  },
  {
    0: 134219808,
    1: 131072,
    2: 134217728,
    3: 32,
    4: 131104,
    5: 134350880,
    6: 134350848,
    7: 2048,
    8: 134348800,
    9: 134219776,
    10: 133120,
    11: 134348832,
    12: 2080,
    13: 0,
    14: 134217760,
    15: 133152,
    2147483648: 2048,
    2147483649: 134350880,
    2147483650: 134219808,
    2147483651: 134217728,
    2147483652: 134348800,
    2147483653: 133120,
    2147483654: 133152,
    2147483655: 32,
    2147483656: 134217760,
    2147483657: 2080,
    2147483658: 131104,
    2147483659: 134350848,
    2147483660: 0,
    2147483661: 134348832,
    2147483662: 134219776,
    2147483663: 131072,
    16: 133152,
    17: 134350848,
    18: 32,
    19: 2048,
    20: 134219776,
    21: 134217760,
    22: 134348832,
    23: 131072,
    24: 0,
    25: 131104,
    26: 134348800,
    27: 134219808,
    28: 134350880,
    29: 133120,
    30: 2080,
    31: 134217728,
    2147483664: 131072,
    2147483665: 2048,
    2147483666: 134348832,
    2147483667: 133152,
    2147483668: 32,
    2147483669: 134348800,
    2147483670: 134217728,
    2147483671: 134219808,
    2147483672: 134350880,
    2147483673: 134217760,
    2147483674: 134219776,
    2147483675: 0,
    2147483676: 133120,
    2147483677: 2080,
    2147483678: 131104,
    2147483679: 134350848
  }
], is = [
  4160749569,
  528482304,
  33030144,
  2064384,
  129024,
  8064,
  504,
  2147483679
];
function Et(n, t) {
  const e = (this._lBlock >>> n ^ this._rBlock) & t;
  this._rBlock ^= e, this._lBlock ^= e << n;
}
function c0(n, t) {
  const e = (this._rBlock >>> n ^ this._lBlock) & t;
  this._lBlock ^= e, this._rBlock ^= e << n;
}
class lt extends _t {
  _doReset() {
    const e = this._key.words, r = [];
    for (let o = 0; o < 56; o += 1) {
      const c = ns[o] - 1;
      r[o] = e[c >>> 5] >>> 31 - c % 32 & 1;
    }
    this._subKeys = [];
    const s = this._subKeys;
    for (let o = 0; o < 16; o += 1) {
      s[o] = [];
      const c = s[o], a = rs[o];
      for (let u = 0; u < 24; u += 1)
        c[u / 6 | 0] |= r[(Ee[u] - 1 + a) % 28] << 31 - u % 6, c[4 + (u / 6 | 0)] |= r[28 + (Ee[u + 24] - 1 + a) % 28] << 31 - u % 6;
      c[0] = c[0] << 1 | c[0] >>> 31;
      for (let u = 1; u < 7; u += 1)
        c[u] >>>= (u - 1) * 4 + 3;
      c[7] = c[7] << 5 | c[7] >>> 27;
    }
    this._invSubKeys = [];
    const i = this._invSubKeys;
    for (let o = 0; o < 16; o += 1)
      i[o] = s[15 - o];
  }
  encryptBlock(t, e) {
    this._doCryptBlock(t, e, this._subKeys);
  }
  decryptBlock(t, e) {
    this._doCryptBlock(t, e, this._invSubKeys);
  }
  _doCryptBlock(t, e, r) {
    const s = t;
    this._lBlock = t[e], this._rBlock = t[e + 1], Et.call(this, 4, 252645135), Et.call(this, 16, 65535), c0.call(this, 2, 858993459), c0.call(this, 8, 16711935), Et.call(this, 1, 1431655765);
    for (let o = 0; o < 16; o += 1) {
      const c = r[o], a = this._lBlock, u = this._rBlock;
      let h = 0;
      for (let l = 0; l < 8; l += 1)
        h |= ss[l][((u ^ c[l]) & is[l]) >>> 0];
      this._lBlock = u, this._rBlock = a ^ h;
    }
    const i = this._lBlock;
    this._lBlock = this._rBlock, this._rBlock = i, Et.call(this, 1, 1431655765), c0.call(this, 8, 16711935), c0.call(this, 2, 858993459), Et.call(this, 16, 65535), Et.call(this, 4, 252645135), s[e] = this._lBlock, s[e + 1] = this._rBlock;
  }
}
lt.keySize = 64 / 32;
lt.ivSize = 64 / 32;
lt.blockSize = 64 / 32;
const os = _t._createHelper(lt);
class Zt extends _t {
  _doReset() {
    const e = this._key.words;
    if (e.length !== 2 && e.length !== 4 && e.length < 6)
      throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
    const r = e.slice(0, 2), s = e.length < 4 ? e.slice(0, 2) : e.slice(2, 4), i = e.length < 6 ? e.slice(0, 2) : e.slice(4, 6);
    this._des1 = lt.createEncryptor(A.create(r)), this._des2 = lt.createEncryptor(A.create(s)), this._des3 = lt.createEncryptor(A.create(i));
  }
  encryptBlock(t, e) {
    this._des1.encryptBlock(t, e), this._des2.decryptBlock(t, e), this._des3.encryptBlock(t, e);
  }
  decryptBlock(t, e) {
    this._des3.decryptBlock(t, e), this._des2.encryptBlock(t, e), this._des1.decryptBlock(t, e);
  }
}
Zt.keySize = 192 / 32;
Zt.ivSize = 64 / 32;
Zt.blockSize = 64 / 32;
const cs = _t._createHelper(Zt), J = [], st = [], k = [];
function E0() {
  const n = this._X, t = this._C;
  for (let e = 0; e < 8; e += 1)
    st[e] = t[e];
  t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + (t[0] >>> 0 < st[0] >>> 0 ? 1 : 0) | 0, t[2] = t[2] + 886263092 + (t[1] >>> 0 < st[1] >>> 0 ? 1 : 0) | 0, t[3] = t[3] + 1295307597 + (t[2] >>> 0 < st[2] >>> 0 ? 1 : 0) | 0, t[4] = t[4] + 3545052371 + (t[3] >>> 0 < st[3] >>> 0 ? 1 : 0) | 0, t[5] = t[5] + 886263092 + (t[4] >>> 0 < st[4] >>> 0 ? 1 : 0) | 0, t[6] = t[6] + 1295307597 + (t[5] >>> 0 < st[5] >>> 0 ? 1 : 0) | 0, t[7] = t[7] + 3545052371 + (t[6] >>> 0 < st[6] >>> 0 ? 1 : 0) | 0, this._b = t[7] >>> 0 < st[7] >>> 0 ? 1 : 0;
  for (let e = 0; e < 8; e += 1) {
    const r = n[e] + t[e], s = r & 65535, i = r >>> 16, o = ((s * s >>> 17) + s * i >>> 15) + i * i, c = ((r & 4294901760) * r | 0) + ((r & 65535) * r | 0);
    k[e] = o ^ c;
  }
  n[0] = k[0] + (k[7] << 16 | k[7] >>> 16) + (k[6] << 16 | k[6] >>> 16) | 0, n[1] = k[1] + (k[0] << 8 | k[0] >>> 24) + k[7] | 0, n[2] = k[2] + (k[1] << 16 | k[1] >>> 16) + (k[0] << 16 | k[0] >>> 16) | 0, n[3] = k[3] + (k[2] << 8 | k[2] >>> 24) + k[1] | 0, n[4] = k[4] + (k[3] << 16 | k[3] >>> 16) + (k[2] << 16 | k[2] >>> 16) | 0, n[5] = k[5] + (k[4] << 8 | k[4] >>> 24) + k[3] | 0, n[6] = k[6] + (k[5] << 16 | k[5] >>> 16) + (k[4] << 16 | k[4] >>> 16) | 0, n[7] = k[7] + (k[6] << 8 | k[6] >>> 24) + k[5] | 0;
}
class un extends ht {
  constructor(...t) {
    super(...t), this.blockSize = 128 / 32, this.ivSize = 64 / 32;
  }
  _doReset() {
    const t = this._key.words, { iv: e } = this.cfg;
    for (let i = 0; i < 4; i += 1)
      t[i] = (t[i] << 8 | t[i] >>> 24) & 16711935 | (t[i] << 24 | t[i] >>> 8) & 4278255360;
    this._X = [
      t[0],
      t[3] << 16 | t[2] >>> 16,
      t[1],
      t[0] << 16 | t[3] >>> 16,
      t[2],
      t[1] << 16 | t[0] >>> 16,
      t[3],
      t[2] << 16 | t[1] >>> 16
    ];
    const r = this._X;
    this._C = [
      t[2] << 16 | t[2] >>> 16,
      t[0] & 4294901760 | t[1] & 65535,
      t[3] << 16 | t[3] >>> 16,
      t[1] & 4294901760 | t[2] & 65535,
      t[0] << 16 | t[0] >>> 16,
      t[2] & 4294901760 | t[3] & 65535,
      t[1] << 16 | t[1] >>> 16,
      t[3] & 4294901760 | t[0] & 65535
    ];
    const s = this._C;
    this._b = 0;
    for (let i = 0; i < 4; i += 1)
      E0.call(this);
    for (let i = 0; i < 8; i += 1)
      s[i] ^= r[i + 4 & 7];
    if (e) {
      const i = e.words, o = i[0], c = i[1], a = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360, u = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360, h = a >>> 16 | u & 4294901760, l = u << 16 | a & 65535;
      s[0] ^= a, s[1] ^= h, s[2] ^= u, s[3] ^= l, s[4] ^= a, s[5] ^= h, s[6] ^= u, s[7] ^= l;
      for (let y = 0; y < 4; y += 1)
        E0.call(this);
    }
  }
  _doProcessBlock(t, e) {
    const r = t, s = this._X;
    E0.call(this), J[0] = s[0] ^ s[5] >>> 16 ^ s[3] << 16, J[1] = s[2] ^ s[7] >>> 16 ^ s[5] << 16, J[2] = s[4] ^ s[1] >>> 16 ^ s[7] << 16, J[3] = s[6] ^ s[3] >>> 16 ^ s[1] << 16;
    for (let i = 0; i < 4; i += 1)
      J[i] = (J[i] << 8 | J[i] >>> 24) & 16711935 | (J[i] << 24 | J[i] >>> 8) & 4278255360, r[e + i] ^= J[i];
  }
}
const as = ht._createHelper(un), Z = [], it = [], T = [];
function k0() {
  const n = this._X, t = this._C;
  for (let e = 0; e < 8; e += 1)
    it[e] = t[e];
  t[0] = t[0] + 1295307597 + this._b | 0, t[1] = t[1] + 3545052371 + (t[0] >>> 0 < it[0] >>> 0 ? 1 : 0) | 0, t[2] = t[2] + 886263092 + (t[1] >>> 0 < it[1] >>> 0 ? 1 : 0) | 0, t[3] = t[3] + 1295307597 + (t[2] >>> 0 < it[2] >>> 0 ? 1 : 0) | 0, t[4] = t[4] + 3545052371 + (t[3] >>> 0 < it[3] >>> 0 ? 1 : 0) | 0, t[5] = t[5] + 886263092 + (t[4] >>> 0 < it[4] >>> 0 ? 1 : 0) | 0, t[6] = t[6] + 1295307597 + (t[5] >>> 0 < it[5] >>> 0 ? 1 : 0) | 0, t[7] = t[7] + 3545052371 + (t[6] >>> 0 < it[6] >>> 0 ? 1 : 0) | 0, this._b = t[7] >>> 0 < it[7] >>> 0 ? 1 : 0;
  for (let e = 0; e < 8; e += 1) {
    const r = n[e] + t[e], s = r & 65535, i = r >>> 16, o = ((s * s >>> 17) + s * i >>> 15) + i * i, c = ((r & 4294901760) * r | 0) + ((r & 65535) * r | 0);
    T[e] = o ^ c;
  }
  n[0] = T[0] + (T[7] << 16 | T[7] >>> 16) + (T[6] << 16 | T[6] >>> 16) | 0, n[1] = T[1] + (T[0] << 8 | T[0] >>> 24) + T[7] | 0, n[2] = T[2] + (T[1] << 16 | T[1] >>> 16) + (T[0] << 16 | T[0] >>> 16) | 0, n[3] = T[3] + (T[2] << 8 | T[2] >>> 24) + T[1] | 0, n[4] = T[4] + (T[3] << 16 | T[3] >>> 16) + (T[2] << 16 | T[2] >>> 16) | 0, n[5] = T[5] + (T[4] << 8 | T[4] >>> 24) + T[3] | 0, n[6] = T[6] + (T[5] << 16 | T[5] >>> 16) + (T[4] << 16 | T[4] >>> 16) | 0, n[7] = T[7] + (T[6] << 8 | T[6] >>> 24) + T[5] | 0;
}
class fn extends ht {
  constructor(...t) {
    super(...t), this.blockSize = 128 / 32, this.ivSize = 64 / 32;
  }
  _doReset() {
    const t = this._key.words, { iv: e } = this.cfg;
    this._X = [
      t[0],
      t[3] << 16 | t[2] >>> 16,
      t[1],
      t[0] << 16 | t[3] >>> 16,
      t[2],
      t[1] << 16 | t[0] >>> 16,
      t[3],
      t[2] << 16 | t[1] >>> 16
    ];
    const r = this._X;
    this._C = [
      t[2] << 16 | t[2] >>> 16,
      t[0] & 4294901760 | t[1] & 65535,
      t[3] << 16 | t[3] >>> 16,
      t[1] & 4294901760 | t[2] & 65535,
      t[0] << 16 | t[0] >>> 16,
      t[2] & 4294901760 | t[3] & 65535,
      t[1] << 16 | t[1] >>> 16,
      t[3] & 4294901760 | t[0] & 65535
    ];
    const s = this._C;
    this._b = 0;
    for (let i = 0; i < 4; i += 1)
      k0.call(this);
    for (let i = 0; i < 8; i += 1)
      s[i] ^= r[i + 4 & 7];
    if (e) {
      const i = e.words, o = i[0], c = i[1], a = (o << 8 | o >>> 24) & 16711935 | (o << 24 | o >>> 8) & 4278255360, u = (c << 8 | c >>> 24) & 16711935 | (c << 24 | c >>> 8) & 4278255360, h = a >>> 16 | u & 4294901760, l = u << 16 | a & 65535;
      s[0] ^= a, s[1] ^= h, s[2] ^= u, s[3] ^= l, s[4] ^= a, s[5] ^= h, s[6] ^= u, s[7] ^= l;
      for (let y = 0; y < 4; y += 1)
        k0.call(this);
    }
  }
  _doProcessBlock(t, e) {
    const r = t, s = this._X;
    k0.call(this), Z[0] = s[0] ^ s[5] >>> 16 ^ s[3] << 16, Z[1] = s[2] ^ s[7] >>> 16 ^ s[5] << 16, Z[2] = s[4] ^ s[1] >>> 16 ^ s[7] << 16, Z[3] = s[6] ^ s[3] >>> 16 ^ s[1] << 16;
    for (let i = 0; i < 4; i += 1)
      Z[i] = (Z[i] << 8 | Z[i] >>> 24) & 16711935 | (Z[i] << 24 | Z[i] >>> 8) & 4278255360, r[e + i] ^= Z[i];
  }
}
const us = ht._createHelper(fn);
function ln() {
  const n = this._S;
  let t = this._i, e = this._j, r = 0;
  for (let s = 0; s < 4; s += 1) {
    t = (t + 1) % 256, e = (e + n[t]) % 256;
    const i = n[t];
    n[t] = n[e], n[e] = i, r |= n[(n[t] + n[e]) % 256] << 24 - s * 8;
  }
  return this._i = t, this._j = e, r;
}
class t0 extends ht {
  _doReset() {
    const t = this._key, e = t.words, r = t.sigBytes;
    this._S = [];
    const s = this._S;
    for (let i = 0; i < 256; i += 1)
      s[i] = i;
    for (let i = 0, o = 0; i < 256; i += 1) {
      const c = i % r, a = e[c >>> 2] >>> 24 - c % 4 * 8 & 255;
      o = (o + s[i] + a) % 256;
      const u = s[i];
      s[i] = s[o], s[o] = u;
    }
    this._j = 0, this._i = this._j;
  }
  _doProcessBlock(t, e) {
    const r = t;
    r[e] ^= ln.call(this);
  }
}
t0.keySize = 256 / 32;
t0.ivSize = 0;
const fs = ht._createHelper(t0);
class hn extends t0 {
  constructor(...t) {
    super(...t), Object.assign(this.cfg, { drop: 192 });
  }
  _doReset() {
    super._doReset.call(this);
    for (let t = this.cfg.drop; t > 0; t -= 1)
      ln.call(this);
  }
}
const ls = ht._createHelper(hn);
function xn(n, t, e, r) {
  const s = n;
  let i;
  const o = this._iv;
  o ? (i = o.slice(0), this._iv = void 0) : i = this._prevBlock, r.encryptBlock(i, 0);
  for (let c = 0; c < e; c += 1)
    s[t + c] ^= i[c];
}
class Ut extends yt {
}
Ut.Encryptor = class extends Ut {
  processBlock(n, t) {
    const e = this._cipher, { blockSize: r } = e;
    xn.call(this, n, t, r, e), this._prevBlock = n.slice(t, t + r);
  }
};
Ut.Decryptor = class extends Ut {
  processBlock(n, t) {
    const e = this._cipher, { blockSize: r } = e, s = n.slice(t, t + r);
    xn.call(this, n, t, r, e), this._prevBlock = s;
  }
};
class Kt extends yt {
}
Kt.Encryptor = class extends Kt {
  processBlock(n, t) {
    const e = n, r = this._cipher, { blockSize: s } = r, i = this._iv;
    let o = this._counter;
    i && (this._counter = i.slice(0), o = this._counter, this._iv = void 0);
    const c = o.slice(0);
    r.encryptBlock(c, 0), o[s - 1] = o[s - 1] + 1 | 0;
    for (let a = 0; a < s; a += 1)
      e[t + a] ^= c[a];
  }
};
Kt.Decryptor = Kt.Encryptor;
const ke = (n) => {
  let t = n;
  if ((n >> 24 & 255) === 255) {
    let e = n >> 16 & 255, r = n >> 8 & 255, s = n & 255;
    e === 255 ? (e = 0, r === 255 ? (r = 0, s === 255 ? s = 0 : s += 1) : r += 1) : e += 1, t = 0, t += e << 16, t += r << 8, t += s;
  } else
    t += 1 << 24;
  return t;
}, hs = (n) => {
  const t = n;
  return t[0] = ke(t[0]), t[0] === 0 && (t[1] = ke(t[1])), t;
};
/** @preserve
 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
 * derived from CryptoJS.mode.CTR
 * Jan Hruby jhruby.web@gmail.com
 */
class Nt extends yt {
}
Nt.Encryptor = class extends Nt {
  processBlock(n, t) {
    const e = n, r = this._cipher, { blockSize: s } = r, i = this._iv;
    let o = this._counter;
    i && (this._counter = i.slice(0), o = this._counter, this._iv = void 0), hs(o);
    const c = o.slice(0);
    r.encryptBlock(c, 0);
    for (let a = 0; a < s; a += 1)
      e[t + a] ^= c[a];
  }
};
Nt.Decryptor = Nt.Encryptor;
class Vt extends yt {
}
Vt.Encryptor = class extends Vt {
  processBlock(n, t) {
    this._cipher.encryptBlock(n, t);
  }
};
Vt.Decryptor = class extends Vt {
  processBlock(n, t) {
    this._cipher.decryptBlock(n, t);
  }
};
class qt extends yt {
}
qt.Encryptor = class extends qt {
  processBlock(n, t) {
    const e = n, r = this._cipher, { blockSize: s } = r, i = this._iv;
    let o = this._keystream;
    i && (this._keystream = i.slice(0), o = this._keystream, this._iv = void 0), r.encryptBlock(o, 0);
    for (let c = 0; c < s; c += 1)
      e[t + c] ^= o[c];
  }
};
qt.Decryptor = qt.Encryptor;
const xs = {
  pad(n, t) {
    const e = n, r = e.sigBytes, s = t * 4, i = s - r % s, o = r + i - 1;
    e.clamp(), e.words[o >>> 2] |= i << 24 - o % 4 * 8, e.sigBytes += i;
  },
  unpad(n) {
    const t = n, e = t.words[t.sigBytes - 1 >>> 2] & 255;
    t.sigBytes -= e;
  }
}, ds = {
  pad(n, t) {
    const e = t * 4, r = e - n.sigBytes % e;
    n.concat(A.random(r - 1)).concat(A.create([r << 24], 1));
  },
  unpad(n) {
    const t = n, e = t.words[t.sigBytes - 1 >>> 2] & 255;
    t.sigBytes -= e;
  }
}, R0 = {
  pad(n, t) {
    const e = n, r = t * 4;
    e.clamp(), e.sigBytes += r - (n.sigBytes % r || r);
  },
  unpad(n) {
    const t = n, e = t.words;
    for (let r = t.sigBytes - 1; r >= 0; r -= 1)
      if (e[r >>> 2] >>> 24 - r % 4 * 8 & 255) {
        t.sigBytes = r + 1;
        break;
      }
  }
}, ps = {
  pad(n, t) {
    n.concat(A.create([2147483648], 1)), R0.pad(n, t);
  },
  unpad(n) {
    const t = n;
    R0.unpad(t), t.sigBytes -= 1;
  }
}, bs = {
  pad() {
  },
  unpad() {
  }
}, ys = {
  stringify(n) {
    return n.ciphertext.toString(f0);
  },
  parse(n) {
    const t = f0.parse(n);
    return Jt.create({ ciphertext: t });
  }
}, _s = {
  lib: {
    Base: C,
    WordArray: A,
    BufferedBlockAlgorithm: U0,
    Hasher: P,
    Cipher: bt,
    StreamCipher: ht,
    BlockCipherMode: yt,
    BlockCipher: _t,
    CipherParams: Jt,
    SerializableCipher: pt,
    PasswordBasedCipher: q0
  },
  x64: {
    Word: d,
    WordArray: N0
  },
  enc: {
    Hex: f0,
    Latin1: T0,
    Utf8: j0,
    Utf16: Ir,
    Utf16BE: Xe,
    Utf16LE: Cr,
    Base64: A0
  },
  algo: {
    HMAC: K0,
    MD5: b0,
    SHA1: y0,
    SHA224: Y0,
    SHA256: It,
    SHA384: G0,
    SHA512: Ct,
    SHA3: X0,
    RIPEMD160: Q0,
    PBKDF2: nn,
    EvpKDF: V0,
    AES: J0,
    DES: lt,
    TripleDES: Zt,
    Rabbit: un,
    RabbitLegacy: fn,
    RC4: t0,
    RC4Drop: hn
  },
  mode: {
    CBC: Bt,
    CFB: Ut,
    CTR: Kt,
    CTRGladman: Nt,
    ECB: Vt,
    OFB: qt
  },
  pad: {
    Pkcs7: qe,
    AnsiX923: xs,
    Iso10126: ds,
    Iso97971: ps,
    NoPadding: bs,
    ZeroPadding: R0
  },
  format: {
    OpenSSL: Ye,
    Hex: ys
  },
  kdf: {
    OpenSSL: Ge
  },
  MD5: Tr,
  HmacMD5: Ar,
  SHA1: Pr,
  HmacSHA1: Rr,
  SHA224: Dr,
  HmacSHA224: Lr,
  SHA256: Mr,
  HmacSHA256: Or,
  SHA384: Wr,
  HmacSHA384: jr,
  SHA512: zr,
  HmacSHA512: $r,
  SHA3: Ur,
  HmacSHA3: Kr,
  RIPEMD160: Qr,
  HmacRIPEMD160: Jr,
  PBKDF2: Zr,
  EvpKDF: Br,
  AES: es,
  DES: os,
  TripleDES: cs,
  Rabbit: as,
  RabbitLegacy: us,
  RC4: fs,
  RC4Drop: ls
};
let dn = (n = 21) => crypto.getRandomValues(new Uint8Array(n)).reduce((t, e) => (e &= 63, e < 36 ? t += e.toString(36) : e < 62 ? t += (e - 26).toString(36).toUpperCase() : e > 62 ? t += "-" : t += "_", t), "");
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var H0 = function(n, t) {
  return H0 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, r) {
    e.__proto__ = r;
  } || function(e, r) {
    for (var s in r)
      r.hasOwnProperty(s) && (e[s] = r[s]);
  }, H0(n, t);
};
function W(n, t) {
  H0(n, t);
  function e() {
    this.constructor = n;
  }
  n.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
function l0(n) {
  return typeof n == "function";
}
var Te = !1, Y = {
  Promise: void 0,
  set useDeprecatedSynchronousErrorHandling(n) {
    if (n) {
      var t = /* @__PURE__ */ new Error();
      "" + t.stack;
    }
    Te = n;
  },
  get useDeprecatedSynchronousErrorHandling() {
    return Te;
  }
};
function Tt(n) {
  setTimeout(function() {
    throw n;
  }, 0);
}
var h0 = {
  closed: !0,
  next: function(n) {
  },
  error: function(n) {
    if (Y.useDeprecatedSynchronousErrorHandling)
      throw n;
    Tt(n);
  },
  complete: function() {
  }
}, Z0 = /* @__PURE__ */ function() {
  return Array.isArray || function(n) {
    return n && typeof n.length == "number";
  };
}();
function pn(n) {
  return n !== null && typeof n == "object";
}
var ws = /* @__PURE__ */ function() {
  function n(t) {
    return Error.call(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(e, r) {
      return r + 1 + ") " + e.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t, this;
  }
  return n.prototype = /* @__PURE__ */ Object.create(Error.prototype), n;
}(), a0 = ws, et = /* @__PURE__ */ function() {
  function n(t) {
    this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._ctorUnsubscribe = !0, this._unsubscribe = t);
  }
  return n.prototype.unsubscribe = function() {
    var t;
    if (!this.closed) {
      var e = this, r = e._parentOrParents, s = e._ctorUnsubscribe, i = e._unsubscribe, o = e._subscriptions;
      if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, r instanceof n)
        r.remove(this);
      else if (r !== null)
        for (var c = 0; c < r.length; ++c) {
          var a = r[c];
          a.remove(this);
        }
      if (l0(i)) {
        s && (this._unsubscribe = void 0);
        try {
          i.call(this);
        } catch (l) {
          t = l instanceof a0 ? Ae(l.errors) : [l];
        }
      }
      if (Z0(o))
        for (var c = -1, u = o.length; ++c < u; ) {
          var h = o[c];
          if (pn(h))
            try {
              h.unsubscribe();
            } catch (y) {
              t = t || [], y instanceof a0 ? t = t.concat(Ae(y.errors)) : t.push(y);
            }
        }
      if (t)
        throw new a0(t);
    }
  }, n.prototype.add = function(t) {
    var e = t;
    if (!t)
      return n.EMPTY;
    switch (typeof t) {
      case "function":
        e = new n(t);
      case "object":
        if (e === this || e.closed || typeof e.unsubscribe != "function")
          return e;
        if (this.closed)
          return e.unsubscribe(), e;
        if (!(e instanceof n)) {
          var r = e;
          e = new n(), e._subscriptions = [r];
        }
        break;
      default:
        throw new Error("unrecognized teardown " + t + " added to Subscription.");
    }
    var s = e._parentOrParents;
    if (s === null)
      e._parentOrParents = this;
    else if (s instanceof n) {
      if (s === this)
        return e;
      e._parentOrParents = [s, this];
    } else if (s.indexOf(this) === -1)
      s.push(this);
    else
      return e;
    var i = this._subscriptions;
    return i === null ? this._subscriptions = [e] : i.push(e), e;
  }, n.prototype.remove = function(t) {
    var e = this._subscriptions;
    if (e) {
      var r = e.indexOf(t);
      r !== -1 && e.splice(r, 1);
    }
  }, n.EMPTY = function(t) {
    return t.closed = !0, t;
  }(new n()), n;
}();
function Ae(n) {
  return n.reduce(function(t, e) {
    return t.concat(e instanceof a0 ? e.errors : e);
  }, []);
}
var x0 = /* @__PURE__ */ function() {
  return typeof Symbol == "function" ? /* @__PURE__ */ Symbol("rxSubscriber") : "@@rxSubscriber_" + /* @__PURE__ */ Math.random();
}(), ct = /* @__PURE__ */ function(n) {
  W(t, n);
  function t(e, r, s) {
    var i = n.call(this) || this;
    switch (i.syncErrorValue = null, i.syncErrorThrown = !1, i.syncErrorThrowable = !1, i.isStopped = !1, arguments.length) {
      case 0:
        i.destination = h0;
        break;
      case 1:
        if (!e) {
          i.destination = h0;
          break;
        }
        if (typeof e == "object") {
          e instanceof t ? (i.syncErrorThrowable = e.syncErrorThrowable, i.destination = e, e.add(i)) : (i.syncErrorThrowable = !0, i.destination = new Be(i, e));
          break;
        }
      default:
        i.syncErrorThrowable = !0, i.destination = new Be(i, e, r, s);
        break;
    }
    return i;
  }
  return t.prototype[x0] = function() {
    return this;
  }, t.create = function(e, r, s) {
    var i = new t(e, r, s);
    return i.syncErrorThrowable = !1, i;
  }, t.prototype.next = function(e) {
    this.isStopped || this._next(e);
  }, t.prototype.error = function(e) {
    this.isStopped || (this.isStopped = !0, this._error(e));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, n.prototype.unsubscribe.call(this));
  }, t.prototype._next = function(e) {
    this.destination.next(e);
  }, t.prototype._error = function(e) {
    this.destination.error(e), this.unsubscribe();
  }, t.prototype._complete = function() {
    this.destination.complete(), this.unsubscribe();
  }, t.prototype._unsubscribeAndRecycle = function() {
    var e = this._parentOrParents;
    return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = e, this;
  }, t;
}(et), Be = /* @__PURE__ */ function(n) {
  W(t, n);
  function t(e, r, s, i) {
    var o = n.call(this) || this;
    o._parentSubscriber = e;
    var c, a = o;
    return l0(r) ? c = r : r && (c = r.next, s = r.error, i = r.complete, r !== h0 && (a = Object.create(r), l0(a.unsubscribe) && o.add(a.unsubscribe.bind(a)), a.unsubscribe = o.unsubscribe.bind(o))), o._context = a, o._next = c, o._error = s, o._complete = i, o;
  }
  return t.prototype.next = function(e) {
    if (!this.isStopped && this._next) {
      var r = this._parentSubscriber;
      !Y.useDeprecatedSynchronousErrorHandling || !r.syncErrorThrowable ? this.__tryOrUnsub(this._next, e) : this.__tryOrSetError(r, this._next, e) && this.unsubscribe();
    }
  }, t.prototype.error = function(e) {
    if (!this.isStopped) {
      var r = this._parentSubscriber, s = Y.useDeprecatedSynchronousErrorHandling;
      if (this._error)
        !s || !r.syncErrorThrowable ? (this.__tryOrUnsub(this._error, e), this.unsubscribe()) : (this.__tryOrSetError(r, this._error, e), this.unsubscribe());
      else if (r.syncErrorThrowable)
        s ? (r.syncErrorValue = e, r.syncErrorThrown = !0) : Tt(e), this.unsubscribe();
      else {
        if (this.unsubscribe(), s)
          throw e;
        Tt(e);
      }
    }
  }, t.prototype.complete = function() {
    var e = this;
    if (!this.isStopped) {
      var r = this._parentSubscriber;
      if (this._complete) {
        var s = function() {
          return e._complete.call(e._context);
        };
        !Y.useDeprecatedSynchronousErrorHandling || !r.syncErrorThrowable ? (this.__tryOrUnsub(s), this.unsubscribe()) : (this.__tryOrSetError(r, s), this.unsubscribe());
      } else
        this.unsubscribe();
    }
  }, t.prototype.__tryOrUnsub = function(e, r) {
    try {
      e.call(this._context, r);
    } catch (s) {
      if (this.unsubscribe(), Y.useDeprecatedSynchronousErrorHandling)
        throw s;
      Tt(s);
    }
  }, t.prototype.__tryOrSetError = function(e, r, s) {
    if (!Y.useDeprecatedSynchronousErrorHandling)
      throw new Error("bad call");
    try {
      r.call(this._context, s);
    } catch (i) {
      return Y.useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = i, e.syncErrorThrown = !0, !0) : (Tt(i), !0);
    }
    return !1;
  }, t.prototype._unsubscribe = function() {
    var e = this._parentSubscriber;
    this._context = null, this._parentSubscriber = null, e.unsubscribe();
  }, t;
}(ct);
function gs(n) {
  for (; n; ) {
    var t = n, e = t.closed, r = t.destination, s = t.isStopped;
    if (e || s)
      return !1;
    r && r instanceof ct ? n = r : n = null;
  }
  return !0;
}
function ms(n, t, e) {
  if (n) {
    if (n instanceof ct)
      return n;
    if (n[x0])
      return n[x0]();
  }
  return !n && !t && !e ? new ct(h0) : new ct(n, t, e);
}
var e0 = /* @__PURE__ */ function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function bn(n) {
  return n;
}
function vs(n) {
  return n.length === 0 ? bn : n.length === 1 ? n[0] : function(e) {
    return n.reduce(function(r, s) {
      return s(r);
    }, e);
  };
}
var $ = /* @__PURE__ */ function() {
  function n(t) {
    this._isScalar = !1, t && (this._subscribe = t);
  }
  return n.prototype.lift = function(t) {
    var e = new n();
    return e.source = this, e.operator = t, e;
  }, n.prototype.subscribe = function(t, e, r) {
    var s = this.operator, i = ms(t, e, r);
    if (s ? i.add(s.call(i, this.source)) : i.add(this.source || Y.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)), Y.useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown))
      throw i.syncErrorValue;
    return i;
  }, n.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (e) {
      Y.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), gs(t) ? t.error(e) : console.warn(e);
    }
  }, n.prototype.forEach = function(t, e) {
    var r = this;
    return e = Ie(e), new e(function(s, i) {
      var o;
      o = r.subscribe(function(c) {
        try {
          t(c);
        } catch (a) {
          i(a), o && o.unsubscribe();
        }
      }, i, s);
    });
  }, n.prototype._subscribe = function(t) {
    var e = this.source;
    return e && e.subscribe(t);
  }, n.prototype[e0] = function() {
    return this;
  }, n.prototype.pipe = function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    return t.length === 0 ? this : vs(t)(this);
  }, n.prototype.toPromise = function(t) {
    var e = this;
    return t = Ie(t), new t(function(r, s) {
      var i;
      e.subscribe(function(o) {
        return i = o;
      }, function(o) {
        return s(o);
      }, function() {
        return r(i);
      });
    });
  }, n.create = function(t) {
    return new n(t);
  }, n;
}();
function Ie(n) {
  if (n || (n = Y.Promise || Promise), !n)
    throw new Error("no Promise impl found");
  return n;
}
var Ss = /* @__PURE__ */ function() {
  function n() {
    return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this;
  }
  return n.prototype = /* @__PURE__ */ Object.create(Error.prototype), n;
}(), jt = Ss, Es = /* @__PURE__ */ function(n) {
  W(t, n);
  function t(e, r) {
    var s = n.call(this) || this;
    return s.subject = e, s.subscriber = r, s.closed = !1, s;
  }
  return t.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.closed = !0;
      var e = this.subject, r = e.observers;
      if (this.subject = null, !(!r || r.length === 0 || e.isStopped || e.closed)) {
        var s = r.indexOf(this.subscriber);
        s !== -1 && r.splice(s, 1);
      }
    }
  }, t;
}(et), ks = /* @__PURE__ */ function(n) {
  W(t, n);
  function t(e) {
    var r = n.call(this, e) || this;
    return r.destination = e, r;
  }
  return t;
}(ct), Yt = /* @__PURE__ */ function(n) {
  W(t, n);
  function t() {
    var e = n.call(this) || this;
    return e.observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e;
  }
  return t.prototype[x0] = function() {
    return new ks(this);
  }, t.prototype.lift = function(e) {
    var r = new Ce(this, this);
    return r.operator = e, r;
  }, t.prototype.next = function(e) {
    if (this.closed)
      throw new jt();
    if (!this.isStopped)
      for (var r = this.observers, s = r.length, i = r.slice(), o = 0; o < s; o++)
        i[o].next(e);
  }, t.prototype.error = function(e) {
    if (this.closed)
      throw new jt();
    this.hasError = !0, this.thrownError = e, this.isStopped = !0;
    for (var r = this.observers, s = r.length, i = r.slice(), o = 0; o < s; o++)
      i[o].error(e);
    this.observers.length = 0;
  }, t.prototype.complete = function() {
    if (this.closed)
      throw new jt();
    this.isStopped = !0;
    for (var e = this.observers, r = e.length, s = e.slice(), i = 0; i < r; i++)
      s[i].complete();
    this.observers.length = 0;
  }, t.prototype.unsubscribe = function() {
    this.isStopped = !0, this.closed = !0, this.observers = null;
  }, t.prototype._trySubscribe = function(e) {
    if (this.closed)
      throw new jt();
    return n.prototype._trySubscribe.call(this, e);
  }, t.prototype._subscribe = function(e) {
    if (this.closed)
      throw new jt();
    return this.hasError ? (e.error(this.thrownError), et.EMPTY) : this.isStopped ? (e.complete(), et.EMPTY) : (this.observers.push(e), new Es(this, e));
  }, t.prototype.asObservable = function() {
    var e = new $();
    return e.source = this, e;
  }, t.create = function(e, r) {
    return new Ce(e, r);
  }, t;
}($), Ce = /* @__PURE__ */ function(n) {
  W(t, n);
  function t(e, r) {
    var s = n.call(this) || this;
    return s.destination = e, s.source = r, s;
  }
  return t.prototype.next = function(e) {
    var r = this.destination;
    r && r.next && r.next(e);
  }, t.prototype.error = function(e) {
    var r = this.destination;
    r && r.error && this.destination.error(e);
  }, t.prototype.complete = function() {
    var e = this.destination;
    e && e.complete && this.destination.complete();
  }, t.prototype._subscribe = function(e) {
    var r = this.source;
    return r ? this.source.subscribe(e) : et.EMPTY;
  }, t;
}(Yt), Ts = /* @__PURE__ */ function(n) {
  W(t, n);
  function t(e, r) {
    return n.call(this) || this;
  }
  return t.prototype.schedule = function(e, r) {
    return this;
  }, t;
}(et), As = /* @__PURE__ */ function(n) {
  W(t, n);
  function t(e, r) {
    var s = n.call(this, e, r) || this;
    return s.scheduler = e, s.work = r, s.pending = !1, s;
  }
  return t.prototype.schedule = function(e, r) {
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = e;
    var s = this.id, i = this.scheduler;
    return s != null && (this.id = this.recycleAsyncId(i, s, r)), this.pending = !0, this.delay = r, this.id = this.id || this.requestAsyncId(i, this.id, r), this;
  }, t.prototype.requestAsyncId = function(e, r, s) {
    return s === void 0 && (s = 0), setInterval(e.flush.bind(e, this), s);
  }, t.prototype.recycleAsyncId = function(e, r, s) {
    if (s === void 0 && (s = 0), s !== null && this.delay === s && this.pending === !1)
      return r;
    clearInterval(r);
  }, t.prototype.execute = function(e, r) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var s = this._execute(e, r);
    if (s)
      return s;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, t.prototype._execute = function(e, r) {
    var s = !1, i = void 0;
    try {
      this.work(e);
    } catch (o) {
      s = !0, i = !!o && o || new Error(o);
    }
    if (s)
      return this.unsubscribe(), i;
  }, t.prototype._unsubscribe = function() {
    var e = this.id, r = this.scheduler, s = r.actions, i = s.indexOf(this);
    this.work = null, this.state = null, this.pending = !1, this.scheduler = null, i !== -1 && s.splice(i, 1), e != null && (this.id = this.recycleAsyncId(r, e, null)), this.delay = null;
  }, t;
}(Ts), Pe = /* @__PURE__ */ function() {
  function n(t, e) {
    e === void 0 && (e = n.now), this.SchedulerAction = t, this.now = e;
  }
  return n.prototype.schedule = function(t, e, r) {
    return e === void 0 && (e = 0), new this.SchedulerAction(this, t).schedule(r, e);
  }, n.now = function() {
    return Date.now();
  }, n;
}(), Bs = /* @__PURE__ */ function(n) {
  W(t, n);
  function t(e, r) {
    r === void 0 && (r = Pe.now);
    var s = n.call(this, e, function() {
      return t.delegate && t.delegate !== s ? t.delegate.now() : r();
    }) || this;
    return s.actions = [], s.active = !1, s.scheduled = void 0, s;
  }
  return t.prototype.schedule = function(e, r, s) {
    return r === void 0 && (r = 0), t.delegate && t.delegate !== this ? t.delegate.schedule(e, r, s) : n.prototype.schedule.call(this, e, r, s);
  }, t.prototype.flush = function(e) {
    var r = this.actions;
    if (this.active) {
      r.push(e);
      return;
    }
    var s;
    this.active = !0;
    do
      if (s = e.execute(e.state, e.delay))
        break;
    while (e = r.shift());
    if (this.active = !1, s) {
      for (; e = r.shift(); )
        e.unsubscribe();
      throw s;
    }
  }, t;
}(Pe);
function M0(n) {
  return n && typeof n.schedule == "function";
}
var yn = function(n) {
  return function(t) {
    for (var e = 0, r = n.length; e < r && !t.closed; e++)
      t.next(n[e]);
    t.complete();
  };
};
function _n(n, t) {
  return new $(function(e) {
    var r = new et(), s = 0;
    return r.add(t.schedule(function() {
      if (s === n.length) {
        e.complete();
        return;
      }
      e.next(n[s++]), e.closed || r.add(this.schedule());
    })), r;
  });
}
function Is(n, t) {
  return t ? _n(n, t) : new $(yn(n));
}
var Cs = /* @__PURE__ */ new Bs(As), Ps = Cs;
function wn(n, t) {
  return function(r) {
    if (typeof n != "function")
      throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
    return r.lift(new Rs(n, t));
  };
}
var Rs = /* @__PURE__ */ function() {
  function n(t, e) {
    this.project = t, this.thisArg = e;
  }
  return n.prototype.call = function(t, e) {
    return e.subscribe(new Hs(t, this.project, this.thisArg));
  }, n;
}(), Hs = /* @__PURE__ */ function(n) {
  W(t, n);
  function t(e, r, s) {
    var i = n.call(this, e) || this;
    return i.project = r, i.count = 0, i.thisArg = s || i, i;
  }
  return t.prototype._next = function(e) {
    var r;
    try {
      r = this.project.call(this.thisArg, e, this.count++);
    } catch (s) {
      this.destination.error(s);
      return;
    }
    this.destination.next(r);
  }, t;
}(ct), Ms = function(n) {
  return function(t) {
    return n.then(function(e) {
      t.closed || (t.next(e), t.complete());
    }, function(e) {
      return t.error(e);
    }).then(null, Tt), t;
  };
};
function Os() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var _0 = /* @__PURE__ */ Os(), Ds = function(n) {
  return function(t) {
    var e = n[_0]();
    do {
      var r = void 0;
      try {
        r = e.next();
      } catch (s) {
        return t.error(s), t;
      }
      if (r.done) {
        t.complete();
        break;
      }
      if (t.next(r.value), t.closed)
        break;
    } while (!0);
    return typeof e.return == "function" && t.add(function() {
      e.return && e.return();
    }), t;
  };
}, Ls = function(n) {
  return function(t) {
    var e = n[e0]();
    if (typeof e.subscribe != "function")
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    return e.subscribe(t);
  };
}, gn = function(n) {
  return n && typeof n.length == "number" && typeof n != "function";
};
function mn(n) {
  return !!n && typeof n.subscribe != "function" && typeof n.then == "function";
}
var vn = function(n) {
  if (!!n && typeof n[e0] == "function")
    return Ls(n);
  if (gn(n))
    return yn(n);
  if (mn(n))
    return Ms(n);
  if (!!n && typeof n[_0] == "function")
    return Ds(n);
  var t = pn(n) ? "an invalid object" : "'" + n + "'", e = "You provided " + t + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
  throw new TypeError(e);
};
function Fs(n, t) {
  return new $(function(e) {
    var r = new et();
    return r.add(t.schedule(function() {
      var s = n[e0]();
      r.add(s.subscribe({
        next: function(i) {
          r.add(t.schedule(function() {
            return e.next(i);
          }));
        },
        error: function(i) {
          r.add(t.schedule(function() {
            return e.error(i);
          }));
        },
        complete: function() {
          r.add(t.schedule(function() {
            return e.complete();
          }));
        }
      }));
    })), r;
  });
}
function zs(n, t) {
  return new $(function(e) {
    var r = new et();
    return r.add(t.schedule(function() {
      return n.then(function(s) {
        r.add(t.schedule(function() {
          e.next(s), r.add(t.schedule(function() {
            return e.complete();
          }));
        }));
      }, function(s) {
        r.add(t.schedule(function() {
          return e.error(s);
        }));
      });
    })), r;
  });
}
function $s(n, t) {
  if (!n)
    throw new Error("Iterable cannot be null");
  return new $(function(e) {
    var r = new et(), s;
    return r.add(function() {
      s && typeof s.return == "function" && s.return();
    }), r.add(t.schedule(function() {
      s = n[_0](), r.add(t.schedule(function() {
        if (!e.closed) {
          var i, o;
          try {
            var c = s.next();
            i = c.value, o = c.done;
          } catch (a) {
            e.error(a);
            return;
          }
          o ? e.complete() : (e.next(i), this.schedule());
        }
      }));
    })), r;
  });
}
function Ws(n) {
  return n && typeof n[e0] == "function";
}
function js(n) {
  return n && typeof n[_0] == "function";
}
function Us(n, t) {
  if (n != null) {
    if (Ws(n))
      return Fs(n, t);
    if (mn(n))
      return zs(n, t);
    if (gn(n))
      return _n(n, t);
    if (js(n) || typeof n == "string")
      return $s(n, t);
  }
  throw new TypeError((n !== null && typeof n || n) + " is not observable");
}
function Ks(n, t) {
  return t ? Us(n, t) : n instanceof $ ? n : new $(vn(n));
}
var Ns = /* @__PURE__ */ function(n) {
  W(t, n);
  function t(e) {
    var r = n.call(this) || this;
    return r.parent = e, r;
  }
  return t.prototype._next = function(e) {
    this.parent.notifyNext(e);
  }, t.prototype._error = function(e) {
    this.parent.notifyError(e), this.unsubscribe();
  }, t.prototype._complete = function() {
    this.parent.notifyComplete(), this.unsubscribe();
  }, t;
}(ct), Vs = /* @__PURE__ */ function(n) {
  W(t, n);
  function t() {
    return n !== null && n.apply(this, arguments) || this;
  }
  return t.prototype.notifyNext = function(e) {
    this.destination.next(e);
  }, t.prototype.notifyError = function(e) {
    this.destination.error(e);
  }, t.prototype.notifyComplete = function() {
    this.destination.complete();
  }, t;
}(ct);
function qs(n, t) {
  if (!t.closed) {
    if (n instanceof $)
      return n.subscribe(t);
    var e;
    try {
      e = vn(n)(t);
    } catch (r) {
      t.error(r);
    }
    return e;
  }
}
function Sn(n, t, e) {
  return e === void 0 && (e = Number.POSITIVE_INFINITY), typeof t == "function" ? function(r) {
    return r.pipe(Sn(function(s, i) {
      return Ks(n(s, i)).pipe(wn(function(o, c) {
        return t(s, o, i, c);
      }));
    }, e));
  } : (typeof t == "number" && (e = t), function(r) {
    return r.lift(new Ys(n, e));
  });
}
var Ys = /* @__PURE__ */ function() {
  function n(t, e) {
    e === void 0 && (e = Number.POSITIVE_INFINITY), this.project = t, this.concurrent = e;
  }
  return n.prototype.call = function(t, e) {
    return e.subscribe(new Gs(t, this.project, this.concurrent));
  }, n;
}(), Gs = /* @__PURE__ */ function(n) {
  W(t, n);
  function t(e, r, s) {
    s === void 0 && (s = Number.POSITIVE_INFINITY);
    var i = n.call(this, e) || this;
    return i.project = r, i.concurrent = s, i.hasCompleted = !1, i.buffer = [], i.active = 0, i.index = 0, i;
  }
  return t.prototype._next = function(e) {
    this.active < this.concurrent ? this._tryNext(e) : this.buffer.push(e);
  }, t.prototype._tryNext = function(e) {
    var r, s = this.index++;
    try {
      r = this.project(e, s);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    this.active++, this._innerSub(r);
  }, t.prototype._innerSub = function(e) {
    var r = new Ns(this), s = this.destination;
    s.add(r);
    var i = qs(e, r);
    i !== r && s.add(i);
  }, t.prototype._complete = function() {
    this.hasCompleted = !0, this.active === 0 && this.buffer.length === 0 && this.destination.complete(), this.unsubscribe();
  }, t.prototype.notifyNext = function(e) {
    this.destination.next(e);
  }, t.prototype.notifyComplete = function() {
    var e = this.buffer;
    this.active--, e.length > 0 ? this._next(e.shift()) : this.active === 0 && this.hasCompleted && this.destination.complete();
  }, t;
}(Vs);
function Xs(n) {
  return n === void 0 && (n = Number.POSITIVE_INFINITY), Sn(bn, n);
}
function En(n, t, e, r) {
  return l0(e) && (r = e, e = void 0), r ? En(n, t, e).pipe(wn(function(s) {
    return Z0(s) ? r.apply(void 0, s) : r(s);
  })) : new $(function(s) {
    function i(o) {
      arguments.length > 1 ? s.next(Array.prototype.slice.call(arguments)) : s.next(o);
    }
    kn(n, t, i, s, e);
  });
}
function kn(n, t, e, r, s) {
  var i;
  if (Zs(n)) {
    var o = n;
    n.addEventListener(t, e, s), i = function() {
      return o.removeEventListener(t, e, s);
    };
  } else if (Js(n)) {
    var c = n;
    n.on(t, e), i = function() {
      return c.off(t, e);
    };
  } else if (Qs(n)) {
    var a = n;
    n.addListener(t, e), i = function() {
      return a.removeListener(t, e);
    };
  } else if (n && n.length)
    for (var u = 0, h = n.length; u < h; u++)
      kn(n[u], t, e, r, s);
  else
    throw new TypeError("Invalid event target");
  r.add(i);
}
function Qs(n) {
  return n && typeof n.addListener == "function" && typeof n.removeListener == "function";
}
function Js(n) {
  return n && typeof n.on == "function" && typeof n.off == "function";
}
function Zs(n) {
  return n && typeof n.addEventListener == "function" && typeof n.removeEventListener == "function";
}
function Re(n) {
  return !Z0(n) && n - parseFloat(n) + 1 >= 0;
}
function ti() {
  for (var n = [], t = 0; t < arguments.length; t++)
    n[t] = arguments[t];
  var e = Number.POSITIVE_INFINITY, r = null, s = n[n.length - 1];
  return M0(s) ? (r = n.pop(), n.length > 1 && typeof n[n.length - 1] == "number" && (e = n.pop())) : typeof s == "number" && (e = n.pop()), r === null && n.length === 1 && n[0] instanceof $ ? n[0] : Xs(e)(Is(n, r));
}
function ei(n, t, e) {
  n === void 0 && (n = 0);
  var r = -1;
  return Re(t) ? r = Number(t) < 1 && 1 || Number(t) : M0(t) && (e = t), M0(e) || (e = Ps), new $(function(s) {
    var i = Re(n) ? n : +n - e.now();
    return e.schedule(ni, i, {
      index: 0,
      period: r,
      subscriber: s
    });
  });
}
function ni(n) {
  var t = n.index, e = n.period, r = n.subscriber;
  if (r.next(t), !r.closed) {
    if (e === -1)
      return r.complete();
    n.index = t + 1, this.schedule(n, e);
  }
}
const Tn = {
  bitcoin: {
    1: "main",
    2: "testnet"
  },
  ethereum: {
    1: "main",
    3: "ropsten",
    4: "rinkeby",
    5: "goerli",
    42: "kovan",
    56: "bsc-main",
    100: "xdai",
    137: "matic-main",
    250: "fantom-main",
    80001: "matic-mumbai"
  }
}, An = {
  points: 150,
  duration: 1
}, He = 1e4;
function D(n) {
  const {
    name: t,
    value: e,
    type: r,
    optional: s,
    customValidation: i
  } = n;
  if (!s && typeof e > "u")
    throw new Error(`"${t}" is required`);
  if (typeof e < "u" && (r === "array" ? Array.isArray(r) : typeof e !== r))
    throw new Error(`"${t}" must be of type: ${r}, received type: ${typeof e} from value: ${e}`);
  if (typeof e < "u" && i && !i(e))
    throw new Error(`"${e}" is not a valid "${t}"`);
}
function ri(n) {
  D({
    name: "sdk options",
    value: n,
    type: "object"
  });
  const {
    dappId: t,
    system: e,
    name: r,
    appVersion: s,
    networkId: i,
    transactionHandlers: o,
    apiUrl: c,
    ws: a,
    onopen: u,
    ondown: h,
    onreopen: l,
    onerror: y,
    onclose: v,
    multichain: m,
    ...g
  } = n;
  ii(g, ["dappId", "system", "name", "appVersion", "networkId", "transactionHandlers", "apiUrl", "ws", "onopen", "ondown", "onreopen", "onerror", "onclose", "multichain"], "Initialization Options"), D({
    name: "dappId",
    value: t,
    type: "string",
    optional: !0
  }), D({
    name: "system",
    value: e,
    type: "string",
    optional: !0,
    customValidation: si
  }), D({
    name: "name",
    value: r,
    type: "string",
    optional: !0
  }), D({
    name: "appVersion",
    value: s,
    type: "string",
    optional: !0
  }), D({
    name: "networkId",
    value: i,
    type: "number"
  }), D({
    name: "transactionHandler",
    value: o,
    type: "array",
    optional: !0
  }), o && o.forEach((S) => D({
    name: "transactionHandler",
    value: S,
    type: "function"
  })), D({
    name: "apiUrl",
    value: c,
    type: "string",
    optional: !0
  }), D({
    name: "ws",
    value: a,
    type: "function",
    optional: !0
  }), D({
    name: "onopen",
    value: u,
    type: "function",
    optional: !0
  }), D({
    name: "ondown",
    value: h,
    type: "function",
    optional: !0
  }), D({
    name: "onreopen",
    value: l,
    type: "function",
    optional: !0
  }), D({
    name: "onerror",
    value: y,
    type: "function",
    optional: !0
  }), D({
    name: "onclose",
    value: v,
    type: "function",
    optional: !0
  }), D({
    name: "multichain",
    value: m,
    type: "boolean",
    optional: !0
  });
}
function si(n) {
  return !!Tn[n];
}
function ii(n, t, e) {
  const r = Object.keys(n);
  if (r.length > 0)
    throw new Error(`${r[0]} is not a valid parameter for ${e}, must be one of the following valid parameters: ${t.join(", ")}`);
}
function te() {
  return {
    listeners: {},
    on: function(n, t) {
      switch (n) {
        case "txSent":
        case "txPool":
        case "txConfirmed":
        case "txSpeedUp":
        case "txCancel":
        case "txFailed":
        case "txDropped":
        case "txRequest":
        case "nsfFail":
        case "txRepeat":
        case "txAwaitingApproval":
        case "txConfirmReminder":
        case "txSendFail":
        case "txError":
        case "txUnderPriced":
        case "txPoolSimulation":
        case "all":
          break;
        default:
          throw new Error(`${n} is not a valid event code, for a list of valid event codes see: https://docs.blocknative.com/notify-sdk#event-codes`);
      }
      if (typeof t != "function")
        throw new Error("Listener must be a function");
      this.listeners[n] = t;
    },
    off: function(n) {
      delete this.listeners[n];
    },
    emit: function(n) {
      if (this.listeners[n.eventCode])
        return this.listeners[n.eventCode](n);
      if (this.listeners.all)
        return this.listeners.all(n);
    }
  };
}
function Bn(n, t) {
  return Tn[n][t];
}
function oi(n) {
  switch (n) {
    case "txRequest":
    case "nsfFail":
    case "txRepeat":
    case "txAwaitingApproval":
    case "txConfirmReminder":
    case "txSendFail":
    case "txError":
    case "txUnderPriced":
    case "txSent":
      return !0;
    default:
      return !1;
  }
}
function ci(n) {
  return n.reverse()[0];
}
function ai(n, t) {
  switch (n) {
    case "ethereum":
      return t.length === 42;
    case "bitcoin":
      return t.length !== 64;
    default:
      return !1;
  }
}
function ui(n, t) {
  switch (n) {
    case "ethereum":
      return t.length === 66;
    case "bitcoin":
      return t.length === 64;
    default:
      return !1;
  }
}
function O0(n) {
  return new Promise((t) => {
    setTimeout(t, n);
  });
}
const fi = (n, t) => t === void 0 ? "undefined" : t;
function In() {
  if (typeof window < "u" && "localStorage" in window) {
    const t = "__testLocalStorage";
    try {
      return window.localStorage.setItem(t, "1"), window.localStorage.removeItem(t), !0;
    } catch {
      return !1;
    }
  }
  return !1;
}
function li(n, t) {
  if (this._destroyed)
    throw new Error("The WebSocket instance has been destroyed, re-initialize to continue making requests.");
  const e = Date.now(), r = te(), s = "txSent";
  this.watchedTransactions.push({
    hash: n,
    emitter: r
  });
  const o = {
    ...this._system === "ethereum" ? {
      hash: n
    } : {
      txid: n
    },
    id: t || n,
    startTime: e,
    status: "sent"
  }, c = {
    ...o,
    eventCode: s
  };
  this._sendMessage({
    eventCode: s,
    categoryCode: "activeTransaction",
    transaction: o
  });
  const a = {
    details: c,
    emitter: r
  };
  function u() {
    const h = r.emit(c);
    this._transactionHandlers.forEach((l) => l({
      transaction: c,
      emitterResult: h
    }));
  }
  return setTimeout(u.bind(this), 5), a;
}
function hi(n) {
  if (this._destroyed)
    throw new Error("The WebSocket instance has been destroyed, re-initialize to continue making requests.");
  n = this._system === "ethereum" ? n.toLowerCase() : n;
  const t = te(), e = "watch", r = this.watchedAccounts.find((s) => s.address === n);
  return r ? r.emitters.push(t) : this.watchedAccounts.push({
    address: n,
    emitters: [t]
  }), this._sendMessage({
    eventCode: e,
    categoryCode: "accountAddress",
    account: {
      address: n
    }
  }), {
    emitter: t,
    details: {
      address: n
    }
  };
}
function xi(n) {
  if (this._destroyed)
    throw new Error("The WebSocket instance has been destroyed, re-initialize to continue making requests.");
  this._sendMessage(n);
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var D0 = function(n, t) {
  return D0 = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function(e, r) {
    e.__proto__ = r;
  } || function(e, r) {
    for (var s in r)
      r.hasOwnProperty(s) && (e[s] = r[s]);
  }, D0(n, t);
};
function j(n, t) {
  D0(n, t);
  function e() {
    this.constructor = n;
  }
  n.prototype = t === null ? Object.create(t) : (e.prototype = t.prototype, new e());
}
function L0(n) {
  return typeof n == "function";
}
var Me = !1, tt = {
  Promise: void 0,
  set useDeprecatedSynchronousErrorHandling(n) {
    if (n) {
      var t = /* @__PURE__ */ new Error();
      "" + t.stack;
    }
    Me = n;
  },
  get useDeprecatedSynchronousErrorHandling() {
    return Me;
  }
};
function At(n) {
  setTimeout(function() {
    throw n;
  }, 0);
}
var d0 = {
  closed: !0,
  next: function(n) {
  },
  error: function(n) {
    if (tt.useDeprecatedSynchronousErrorHandling)
      throw n;
    At(n);
  },
  complete: function() {
  }
}, di = /* @__PURE__ */ function() {
  return Array.isArray || function(n) {
    return n && typeof n.length == "number";
  };
}();
function Cn(n) {
  return n !== null && typeof n == "object";
}
var pi = /* @__PURE__ */ function() {
  function n(t) {
    return Error.call(this), this.message = t ? t.length + ` errors occurred during unsubscription:
` + t.map(function(e, r) {
      return r + 1 + ") " + e.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = t, this;
  }
  return n.prototype = /* @__PURE__ */ Object.create(Error.prototype), n;
}(), u0 = pi, ee = /* @__PURE__ */ function() {
  function n(t) {
    this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._ctorUnsubscribe = !0, this._unsubscribe = t);
  }
  return n.prototype.unsubscribe = function() {
    var t;
    if (!this.closed) {
      var e = this, r = e._parentOrParents, s = e._ctorUnsubscribe, i = e._unsubscribe, o = e._subscriptions;
      if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, r instanceof n)
        r.remove(this);
      else if (r !== null)
        for (var c = 0; c < r.length; ++c) {
          var a = r[c];
          a.remove(this);
        }
      if (L0(i)) {
        s && (this._unsubscribe = void 0);
        try {
          i.call(this);
        } catch (l) {
          t = l instanceof u0 ? Oe(l.errors) : [l];
        }
      }
      if (di(o))
        for (var c = -1, u = o.length; ++c < u; ) {
          var h = o[c];
          if (Cn(h))
            try {
              h.unsubscribe();
            } catch (y) {
              t = t || [], y instanceof u0 ? t = t.concat(Oe(y.errors)) : t.push(y);
            }
        }
      if (t)
        throw new u0(t);
    }
  }, n.prototype.add = function(t) {
    var e = t;
    if (!t)
      return n.EMPTY;
    switch (typeof t) {
      case "function":
        e = new n(t);
      case "object":
        if (e === this || e.closed || typeof e.unsubscribe != "function")
          return e;
        if (this.closed)
          return e.unsubscribe(), e;
        if (!(e instanceof n)) {
          var r = e;
          e = new n(), e._subscriptions = [r];
        }
        break;
      default:
        throw new Error("unrecognized teardown " + t + " added to Subscription.");
    }
    var s = e._parentOrParents;
    if (s === null)
      e._parentOrParents = this;
    else if (s instanceof n) {
      if (s === this)
        return e;
      e._parentOrParents = [s, this];
    } else if (s.indexOf(this) === -1)
      s.push(this);
    else
      return e;
    var i = this._subscriptions;
    return i === null ? this._subscriptions = [e] : i.push(e), e;
  }, n.prototype.remove = function(t) {
    var e = this._subscriptions;
    if (e) {
      var r = e.indexOf(t);
      r !== -1 && e.splice(r, 1);
    }
  }, n.EMPTY = function(t) {
    return t.closed = !0, t;
  }(new n()), n;
}();
function Oe(n) {
  return n.reduce(function(t, e) {
    return t.concat(e instanceof u0 ? e.errors : e);
  }, []);
}
var F0 = /* @__PURE__ */ function() {
  return typeof Symbol == "function" ? /* @__PURE__ */ Symbol("rxSubscriber") : "@@rxSubscriber_" + /* @__PURE__ */ Math.random();
}(), G = /* @__PURE__ */ function(n) {
  j(t, n);
  function t(e, r, s) {
    var i = n.call(this) || this;
    switch (i.syncErrorValue = null, i.syncErrorThrown = !1, i.syncErrorThrowable = !1, i.isStopped = !1, arguments.length) {
      case 0:
        i.destination = d0;
        break;
      case 1:
        if (!e) {
          i.destination = d0;
          break;
        }
        if (typeof e == "object") {
          e instanceof t ? (i.syncErrorThrowable = e.syncErrorThrowable, i.destination = e, e.add(i)) : (i.syncErrorThrowable = !0, i.destination = new De(i, e));
          break;
        }
      default:
        i.syncErrorThrowable = !0, i.destination = new De(i, e, r, s);
        break;
    }
    return i;
  }
  return t.prototype[F0] = function() {
    return this;
  }, t.create = function(e, r, s) {
    var i = new t(e, r, s);
    return i.syncErrorThrowable = !1, i;
  }, t.prototype.next = function(e) {
    this.isStopped || this._next(e);
  }, t.prototype.error = function(e) {
    this.isStopped || (this.isStopped = !0, this._error(e));
  }, t.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, t.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, n.prototype.unsubscribe.call(this));
  }, t.prototype._next = function(e) {
    this.destination.next(e);
  }, t.prototype._error = function(e) {
    this.destination.error(e), this.unsubscribe();
  }, t.prototype._complete = function() {
    this.destination.complete(), this.unsubscribe();
  }, t.prototype._unsubscribeAndRecycle = function() {
    var e = this._parentOrParents;
    return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = e, this;
  }, t;
}(ee), De = /* @__PURE__ */ function(n) {
  j(t, n);
  function t(e, r, s, i) {
    var o = n.call(this) || this;
    o._parentSubscriber = e;
    var c, a = o;
    return L0(r) ? c = r : r && (c = r.next, s = r.error, i = r.complete, r !== d0 && (a = Object.create(r), L0(a.unsubscribe) && o.add(a.unsubscribe.bind(a)), a.unsubscribe = o.unsubscribe.bind(o))), o._context = a, o._next = c, o._error = s, o._complete = i, o;
  }
  return t.prototype.next = function(e) {
    if (!this.isStopped && this._next) {
      var r = this._parentSubscriber;
      !tt.useDeprecatedSynchronousErrorHandling || !r.syncErrorThrowable ? this.__tryOrUnsub(this._next, e) : this.__tryOrSetError(r, this._next, e) && this.unsubscribe();
    }
  }, t.prototype.error = function(e) {
    if (!this.isStopped) {
      var r = this._parentSubscriber, s = tt.useDeprecatedSynchronousErrorHandling;
      if (this._error)
        !s || !r.syncErrorThrowable ? (this.__tryOrUnsub(this._error, e), this.unsubscribe()) : (this.__tryOrSetError(r, this._error, e), this.unsubscribe());
      else if (r.syncErrorThrowable)
        s ? (r.syncErrorValue = e, r.syncErrorThrown = !0) : At(e), this.unsubscribe();
      else {
        if (this.unsubscribe(), s)
          throw e;
        At(e);
      }
    }
  }, t.prototype.complete = function() {
    var e = this;
    if (!this.isStopped) {
      var r = this._parentSubscriber;
      if (this._complete) {
        var s = function() {
          return e._complete.call(e._context);
        };
        !tt.useDeprecatedSynchronousErrorHandling || !r.syncErrorThrowable ? (this.__tryOrUnsub(s), this.unsubscribe()) : (this.__tryOrSetError(r, s), this.unsubscribe());
      } else
        this.unsubscribe();
    }
  }, t.prototype.__tryOrUnsub = function(e, r) {
    try {
      e.call(this._context, r);
    } catch (s) {
      if (this.unsubscribe(), tt.useDeprecatedSynchronousErrorHandling)
        throw s;
      At(s);
    }
  }, t.prototype.__tryOrSetError = function(e, r, s) {
    if (!tt.useDeprecatedSynchronousErrorHandling)
      throw new Error("bad call");
    try {
      r.call(this._context, s);
    } catch (i) {
      return tt.useDeprecatedSynchronousErrorHandling ? (e.syncErrorValue = i, e.syncErrorThrown = !0, !0) : (At(i), !0);
    }
    return !1;
  }, t.prototype._unsubscribe = function() {
    var e = this._parentSubscriber;
    this._context = null, this._parentSubscriber = null, e.unsubscribe();
  }, t;
}(G);
function bi(n) {
  for (; n; ) {
    var t = n, e = t.closed, r = t.destination, s = t.isStopped;
    if (e || s)
      return !1;
    r && r instanceof G ? n = r : n = null;
  }
  return !0;
}
function yi(n, t, e) {
  if (n) {
    if (n instanceof G)
      return n;
    if (n[F0])
      return n[F0]();
  }
  return !n && !t && !e ? new G(d0) : new G(n, t, e);
}
var ne = /* @__PURE__ */ function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function _i(n) {
  return n;
}
function wi(n) {
  return n.length === 0 ? _i : n.length === 1 ? n[0] : function(e) {
    return n.reduce(function(r, s) {
      return s(r);
    }, e);
  };
}
var Gt = /* @__PURE__ */ function() {
  function n(t) {
    this._isScalar = !1, t && (this._subscribe = t);
  }
  return n.prototype.lift = function(t) {
    var e = new n();
    return e.source = this, e.operator = t, e;
  }, n.prototype.subscribe = function(t, e, r) {
    var s = this.operator, i = yi(t, e, r);
    if (s ? i.add(s.call(i, this.source)) : i.add(this.source || tt.useDeprecatedSynchronousErrorHandling && !i.syncErrorThrowable ? this._subscribe(i) : this._trySubscribe(i)), tt.useDeprecatedSynchronousErrorHandling && i.syncErrorThrowable && (i.syncErrorThrowable = !1, i.syncErrorThrown))
      throw i.syncErrorValue;
    return i;
  }, n.prototype._trySubscribe = function(t) {
    try {
      return this._subscribe(t);
    } catch (e) {
      tt.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e), bi(t) ? t.error(e) : console.warn(e);
    }
  }, n.prototype.forEach = function(t, e) {
    var r = this;
    return e = Le(e), new e(function(s, i) {
      var o;
      o = r.subscribe(function(c) {
        try {
          t(c);
        } catch (a) {
          i(a), o && o.unsubscribe();
        }
      }, i, s);
    });
  }, n.prototype._subscribe = function(t) {
    var e = this.source;
    return e && e.subscribe(t);
  }, n.prototype[ne] = function() {
    return this;
  }, n.prototype.pipe = function() {
    for (var t = [], e = 0; e < arguments.length; e++)
      t[e] = arguments[e];
    return t.length === 0 ? this : wi(t)(this);
  }, n.prototype.toPromise = function(t) {
    var e = this;
    return t = Le(t), new t(function(r, s) {
      var i;
      e.subscribe(function(o) {
        return i = o;
      }, function(o) {
        return s(o);
      }, function() {
        return r(i);
      });
    });
  }, n.create = function(t) {
    return new n(t);
  }, n;
}();
function Le(n) {
  if (n || (n = Promise), !n)
    throw new Error("no Promise impl found");
  return n;
}
var gi = function(n) {
  return function(t) {
    for (var e = 0, r = n.length; e < r && !t.closed; e++)
      t.next(n[e]);
    t.complete();
  };
}, mi = function(n) {
  return function(t) {
    return n.then(function(e) {
      t.closed || (t.next(e), t.complete());
    }, function(e) {
      return t.error(e);
    }).then(null, At), t;
  };
};
function vi() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Pn = /* @__PURE__ */ vi(), Si = function(n) {
  return function(t) {
    var e = n[Pn]();
    do {
      var r = void 0;
      try {
        r = e.next();
      } catch (s) {
        return t.error(s), t;
      }
      if (r.done) {
        t.complete();
        break;
      }
      if (t.next(r.value), t.closed)
        break;
    } while (!0);
    return typeof e.return == "function" && t.add(function() {
      e.return && e.return();
    }), t;
  };
}, Ei = function(n) {
  return function(t) {
    var e = n[ne]();
    if (typeof e.subscribe != "function")
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    return e.subscribe(t);
  };
}, ki = function(n) {
  return n && typeof n.length == "number" && typeof n != "function";
};
function Ti(n) {
  return !!n && typeof n.subscribe != "function" && typeof n.then == "function";
}
var Ai = function(n) {
  if (!!n && typeof n[ne] == "function")
    return Ei(n);
  if (ki(n))
    return gi(n);
  if (Ti(n))
    return mi(n);
  if (!!n && typeof n[Pn] == "function")
    return Si(n);
  var t = Cn(n) ? "an invalid object" : "'" + n + "'", e = "You provided " + t + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
  throw new TypeError(e);
}, Bi = /* @__PURE__ */ function(n) {
  j(t, n);
  function t(e) {
    var r = n.call(this) || this;
    return r.parent = e, r;
  }
  return t.prototype._next = function(e) {
    this.parent.notifyNext(e);
  }, t.prototype._error = function(e) {
    this.parent.notifyError(e), this.unsubscribe();
  }, t.prototype._complete = function() {
    this.parent.notifyComplete(), this.unsubscribe();
  }, t;
}(G), Ii = /* @__PURE__ */ function(n) {
  j(t, n);
  function t() {
    return n !== null && n.apply(this, arguments) || this;
  }
  return t.prototype.notifyNext = function(e) {
    this.destination.next(e);
  }, t.prototype.notifyError = function(e) {
    this.destination.error(e);
  }, t.prototype.notifyComplete = function() {
    this.destination.complete();
  }, t;
}(G);
function Ci(n, t) {
  if (!t.closed)
    return n instanceof Gt ? n.subscribe(t) : Ai(n)(t);
}
var Pi = /* @__PURE__ */ function(n) {
  j(t, n);
  function t(e, r) {
    return n.call(this) || this;
  }
  return t.prototype.schedule = function(e, r) {
    return this;
  }, t;
}(ee), Ri = /* @__PURE__ */ function(n) {
  j(t, n);
  function t(e, r) {
    var s = n.call(this, e, r) || this;
    return s.scheduler = e, s.work = r, s.pending = !1, s;
  }
  return t.prototype.schedule = function(e, r) {
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = e;
    var s = this.id, i = this.scheduler;
    return s != null && (this.id = this.recycleAsyncId(i, s, r)), this.pending = !0, this.delay = r, this.id = this.id || this.requestAsyncId(i, this.id, r), this;
  }, t.prototype.requestAsyncId = function(e, r, s) {
    return s === void 0 && (s = 0), setInterval(e.flush.bind(e, this), s);
  }, t.prototype.recycleAsyncId = function(e, r, s) {
    if (s === void 0 && (s = 0), s !== null && this.delay === s && this.pending === !1)
      return r;
    clearInterval(r);
  }, t.prototype.execute = function(e, r) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var s = this._execute(e, r);
    if (s)
      return s;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, t.prototype._execute = function(e, r) {
    var s = !1, i = void 0;
    try {
      this.work(e);
    } catch (o) {
      s = !0, i = !!o && o || new Error(o);
    }
    if (s)
      return this.unsubscribe(), i;
  }, t.prototype._unsubscribe = function() {
    var e = this.id, r = this.scheduler, s = r.actions, i = s.indexOf(this);
    this.work = null, this.state = null, this.pending = !1, this.scheduler = null, i !== -1 && s.splice(i, 1), e != null && (this.id = this.recycleAsyncId(r, e, null)), this.delay = null;
  }, t;
}(Pi), Fe = /* @__PURE__ */ function() {
  function n(t, e) {
    e === void 0 && (e = n.now), this.SchedulerAction = t, this.now = e;
  }
  return n.prototype.schedule = function(t, e, r) {
    return e === void 0 && (e = 0), new this.SchedulerAction(this, t).schedule(r, e);
  }, n.now = function() {
    return Date.now();
  }, n;
}(), Hi = /* @__PURE__ */ function(n) {
  j(t, n);
  function t(e, r) {
    r === void 0 && (r = Fe.now);
    var s = n.call(this, e, function() {
      return t.delegate && t.delegate !== s ? t.delegate.now() : r();
    }) || this;
    return s.actions = [], s.active = !1, s.scheduled = void 0, s;
  }
  return t.prototype.schedule = function(e, r, s) {
    return r === void 0 && (r = 0), t.delegate && t.delegate !== this ? t.delegate.schedule(e, r, s) : n.prototype.schedule.call(this, e, r, s);
  }, t.prototype.flush = function(e) {
    var r = this.actions;
    if (this.active) {
      r.push(e);
      return;
    }
    var s;
    this.active = !0;
    do
      if (s = e.execute(e.state, e.delay))
        break;
    while (e = r.shift());
    if (this.active = !1, s) {
      for (; e = r.shift(); )
        e.unsubscribe();
      throw s;
    }
  }, t;
}(Fe), Mi = /* @__PURE__ */ new Hi(Ri), Rn = Mi;
function Oi(n) {
  return n instanceof Date && !isNaN(+n);
}
var Di = /* @__PURE__ */ new Gt(function(n) {
  return n.complete();
});
function Li(n) {
  return n ? Fi(n) : Di;
}
function Fi(n) {
  return new Gt(function(t) {
    return n.schedule(function() {
      return t.complete();
    });
  });
}
function zi(n, t) {
  return t ? new Gt(function(e) {
    return t.schedule($i, 0, {
      error: n,
      subscriber: e
    });
  }) : new Gt(function(e) {
    return e.error(n);
  });
}
function $i(n) {
  var t = n.error, e = n.subscriber;
  e.error(t);
}
var Wi = /* @__PURE__ */ function() {
  function n() {
    return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this;
  }
  return n.prototype = /* @__PURE__ */ Object.create(Error.prototype), n;
}(), ji = Wi;
function w0(n, t) {
  return function(r) {
    return r.lift(new Ui(n, t));
  };
}
var Ui = /* @__PURE__ */ function() {
  function n(t, e) {
    this.predicate = t, this.thisArg = e;
  }
  return n.prototype.call = function(t, e) {
    return e.subscribe(new Ki(t, this.predicate, this.thisArg));
  }, n;
}(), Ki = /* @__PURE__ */ function(n) {
  j(t, n);
  function t(e, r, s) {
    var i = n.call(this, e) || this;
    return i.predicate = r, i.thisArg = s, i.count = 0, i;
  }
  return t.prototype._next = function(e) {
    var r;
    try {
      r = this.predicate.call(this.thisArg, e, this.count++);
    } catch (s) {
      this.destination.error(s);
      return;
    }
    r && this.destination.next(e);
  }, t;
}(G);
function g0(n) {
  return function(t) {
    return n === 0 ? Li() : t.lift(new Ni(n));
  };
}
var Ni = /* @__PURE__ */ function() {
  function n(t) {
    if (this.total = t, this.total < 0)
      throw new ji();
  }
  return n.prototype.call = function(t, e) {
    return e.subscribe(new Vi(t, this.total));
  }, n;
}(), Vi = /* @__PURE__ */ function(n) {
  j(t, n);
  function t(e, r) {
    var s = n.call(this, e) || this;
    return s.total = r, s.count = 0, s;
  }
  return t.prototype._next = function(e) {
    var r = this.total, s = ++this.count;
    s <= r && (this.destination.next(e), s === r && (this.destination.complete(), this.unsubscribe()));
  }, t;
}(G);
function ze(n) {
  return function(t) {
    return t.lift(new qi(n));
  };
}
var qi = /* @__PURE__ */ function() {
  function n(t) {
    this.callback = t;
  }
  return n.prototype.call = function(t, e) {
    return e.subscribe(new Yi(t, this.callback));
  }, n;
}(), Yi = /* @__PURE__ */ function(n) {
  j(t, n);
  function t(e, r) {
    var s = n.call(this, e) || this;
    return s.add(new ee(r)), s;
  }
  return t;
}(G);
function Gi(n, t) {
  return t === void 0 && (t = !1), function(e) {
    return e.lift(new Xi(n, t));
  };
}
var Xi = /* @__PURE__ */ function() {
  function n(t, e) {
    this.predicate = t, this.inclusive = e;
  }
  return n.prototype.call = function(t, e) {
    return e.subscribe(new Qi(t, this.predicate, this.inclusive));
  }, n;
}(), Qi = /* @__PURE__ */ function(n) {
  j(t, n);
  function t(e, r, s) {
    var i = n.call(this, e) || this;
    return i.predicate = r, i.inclusive = s, i.index = 0, i;
  }
  return t.prototype._next = function(e) {
    var r = this.destination, s;
    try {
      s = this.predicate(e, this.index++);
    } catch (i) {
      r.error(i);
      return;
    }
    this.nextOrComplete(e, s);
  }, t.prototype.nextOrComplete = function(e, r) {
    var s = this.destination;
    Boolean(r) ? s.next(e) : (this.inclusive && s.next(e), s.complete());
  }, t;
}(G), Ji = /* @__PURE__ */ function() {
  function n() {
    return Error.call(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this;
  }
  return n.prototype = /* @__PURE__ */ Object.create(Error.prototype), n;
}(), Zi = Ji;
function to(n, t, e) {
  return e === void 0 && (e = Rn), function(r) {
    var s = Oi(n), i = s ? +n - e.now() : Math.abs(n);
    return r.lift(new eo(i, s, t, e));
  };
}
var eo = /* @__PURE__ */ function() {
  function n(t, e, r, s) {
    this.waitFor = t, this.absoluteTimeout = e, this.withObservable = r, this.scheduler = s;
  }
  return n.prototype.call = function(t, e) {
    return e.subscribe(new no(t, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
  }, n;
}(), no = /* @__PURE__ */ function(n) {
  j(t, n);
  function t(e, r, s, i, o) {
    var c = n.call(this, e) || this;
    return c.absoluteTimeout = r, c.waitFor = s, c.withObservable = i, c.scheduler = o, c.scheduleTimeout(), c;
  }
  return t.dispatchTimeout = function(e) {
    var r = e.withObservable;
    e._unsubscribeAndRecycle(), e.add(Ci(r, new Bi(e)));
  }, t.prototype.scheduleTimeout = function() {
    var e = this.action;
    e ? this.action = e.schedule(this, this.waitFor) : this.add(this.action = this.scheduler.schedule(t.dispatchTimeout, this.waitFor, this));
  }, t.prototype._next = function(e) {
    this.absoluteTimeout || this.scheduleTimeout(), n.prototype._next.call(this, e);
  }, t.prototype._unsubscribe = function() {
    this.action = void 0, this.scheduler = null, this.withObservable = null;
  }, t;
}(Ii);
function ro(n, t) {
  return t === void 0 && (t = Rn), to(n, zi(new Zi()), t);
}
const p0 = new Yt();
function so(n, t, e) {
  if (this._destroyed)
    throw new Error("The WebSocket instance has been destroyed, re-initialize to continue making requests.");
  const r = dn();
  return this._sendMessage({
    categoryCode: "simulate",
    eventCode: "txSimulation",
    eventId: r,
    transaction: e
  }), new Promise((s, i) => {
    p0.pipe(w0(({
      eventId: o
    }) => o === r), g0(1)).subscribe({
      next: ({
        transaction: o
      }) => s(o),
      error: ({
        error: o
      }) => i(o.message)
    });
  });
}
function io(n) {
  if (this._destroyed)
    throw new Error("The WebSocket instance has been destroyed, re-initialize to continue making requests.");
  const t = dn();
  return this._sendMessage({
    categoryCode: "simulate",
    eventCode: "txSimulation",
    eventId: t,
    transaction: n
  }), new Promise((e, r) => {
    p0.pipe(w0(({
      eventId: s
    }) => s === t), g0(1)).subscribe({
      next: ({
        transaction: s
      }) => e(s),
      error: ({
        error: s
      }) => r(s.message)
    });
  });
}
function oo(n) {
  if (this._destroyed)
    throw new Error("The WebSocket instance has been destroyed, re-initialize to continue making requests.");
  const t = ai(this._system, n), e = ui(this._system, n);
  if (t) {
    const r = this._system === "ethereum" ? n.toLowerCase() : n;
    this.watchedAccounts = this.watchedAccounts.filter((s) => s.address !== r), this.configurations.delete(r), this._sendMessage({
      categoryCode: "accountAddress",
      eventCode: "unwatch",
      account: {
        address: r
      }
    });
  } else if (e) {
    this.watchedTransactions = this.watchedTransactions.filter((i) => i.hash !== n);
    const s = {
      ...this._system === "ethereum" ? {
        hash: n
      } : {
        txid: n
      },
      id: n,
      status: "unsubscribed"
    };
    this._sendMessage({
      categoryCode: "activeTransaction",
      eventCode: "unwatch",
      transaction: s
    });
  } else
    throw new Error(`Error trying to unsubscribe ${n}: not a valid address or transaction id/hash`);
}
function co(n) {
  if (this._destroyed)
    throw new Error("The WebSocket instance has been destroyed, re-initialize to continue making requests.");
  const t = this._system === "ethereum" ? n.scope.toLowerCase() : n.scope, e = this.configurations.get(t);
  e && e.subscription && e.subscription.next();
  const r = new Yt(), s = n.watchAddress ? {
    emitter: te()
  } : {};
  return this.configurations.set(t, {
    ...n,
    ...s,
    subscription: r
  }), this._sendMessage({
    categoryCode: "configs",
    eventCode: "put",
    config: n
  }), new Promise((i, o) => {
    r.pipe(g0(1), ro(5e3)).subscribe({
      next: () => i({
        ...s,
        details: {
          config: n
        }
      }),
      error: (c) => {
        const a = c.message === "Timeout has occurred" ? `Configuration with scope: ${n.scope} has been sent to the Blocknative server, but has not received a reply within 5 seconds.` : c.message;
        this._onerror ? (this._onerror({
          message: a
        }), i(`Error: ${a}`)) : o(a);
      }
    });
  });
}
function ao(n) {
  const {
    id: t,
    chainId: e,
    type: r
  } = n;
  if (!Bn("ethereum", parseInt(e, 16)))
    throw new Error(`chainId: ${e} is an unsupported network`);
  this.connections[e] || (this.connections[e] = new this.Blocknative({
    system: "ethereum",
    networkId: parseInt(e, 16),
    dappId: this.apiKey,
    ws: this.ws,
    transactionHandlers: [({
      transaction: i
    }) => {
      this.onTransaction$.next(i);
    }],
    onerror: (i) => this.errors$.next(i)
  }));
  const s = this.connections[e];
  if (r === "account") {
    const {
      filters: i = [],
      abi: o = []
    } = n;
    return s.configuration({
      scope: t,
      filters: i,
      abi: o,
      watchAddress: !0
    }), this.transactions$.pipe(w0(({
      watchedAddress: c
    }) => c === t), ze(() => {
      this.unsubscribe({
        id: t,
        chainId: e
      });
    }));
  } else {
    const {
      emitter: i
    } = s.transaction(t);
    return En(
      i,
      "all"
    ).pipe(
      Gi(({
        status: o
      }) => o !== "confirmed" && o !== "failed" && o !== "dropped", !0),
      ze(() => {
        this.unsubscribe({
          id: t,
          chainId: e
        });
      })
    );
  }
}
function uo(n) {
  const {
    id: t,
    chainId: e,
    timeout: r = 0
  } = n, s = ei(r), i = this.transactions$.pipe(w0(({
    hash: o,
    watchedAddress: c
  }) => o === t || c === t));
  ti(i, s).pipe(g0(1)).subscribe((o) => {
    typeof o == "number" ? Object.entries(this.connections).filter(([a, u]) => u !== null).forEach(([a, u]) => {
      e && a !== e || (u.unsubscribe(t), !u.watchedAccounts.length && !u.watchedTransactions.length && !u.configurations.size && (u.destroy(), this.connections[a] = null));
    }) : this.unsubscribe(n);
  });
}
class fo {
  constructor(t, e) {
    const {
      ws: r
    } = t, {
      apiKey: s
    } = t, {
      apiUrl: i
    } = t;
    this.apiKey = s, this.apiUrl = i, this.ws = r, this.connections = {}, this.onTransaction$ = new Yt(), this.transactions$ = this.onTransaction$.asObservable(), this.errors$ = new Yt(), this.Blocknative = e, this.subscribe = ao.bind(this), this.unsubscribe = uo.bind(this);
  }
}
var lo = "4.6.0";
function ho(n) {
  if (this._queuedMessages.length > He)
    throw new Error(`Queue limit of ${He} messages has been reached.`);
  this._queuedMessages.push(re.bind(this)(n)), this._processingQueue || this._processQueue();
}
async function xo() {
  for (this._processingQueue = !0, this._connected || await bo.bind(this)(); this._queuedMessages.length > 0; ) {
    await O0(1), this._waitToRetry !== null && (await this._waitToRetry, this._waitToRetry = null);
    const n = this._queuedMessages.shift(), t = this._limitRules.duration / this._limitRules.points * 1e3;
    await O0(t), this._socket.send(n);
  }
  this._processingQueue = !1, this._limitRules = An;
}
function po(n) {
  const {
    status: t,
    reason: e,
    event: r,
    connectionId: s,
    serverVersion: i,
    retryMs: o,
    limitRules: c,
    blockedMsg: a,
    dispatchTimestamp: u
  } = JSON.parse(n.data);
  if (s && (In() && window.localStorage.setItem(this._storageKey, s), this._connectionId = s), t === "error") {
    if (e.includes("ratelimit") && !e.match(/IP (PendingSimulation|Notification) ratelimit reached/)) {
      this._waitToRetry = O0(o), this._limitRules = c, a && this._queuedMessages.unshift(a);
      return;
    }
    if (e.includes("upgrade your plan"))
      if (this._onerror) {
        this._onerror({
          message: e
        });
        return;
      } else
        throw new Error(e);
    if (e.includes("not a valid API key"))
      if (this._onerror) {
        this._onerror({
          message: e
        });
        return;
      } else
        throw new Error(e);
    if (e.includes("network not supported"))
      if (this._onerror) {
        this._onerror({
          message: e
        });
        return;
      } else
        throw new Error(e);
    if (e.includes("maximum allowed amount"))
      if (this._onerror) {
        this._onerror({
          message: e
        });
        return;
      } else
        throw new Error(e);
    if (e.includes("invalid txid")) {
      const h = `${r.transaction.txid} is an invalid txid`;
      if (this._onerror) {
        this._onerror({
          message: h,
          transaction: r.transaction.txid
        });
        return;
      } else
        throw new Error(h);
    }
    if (e.includes("invalid hash")) {
      const h = `${r.transaction.hash} is an invalid transaction hash`;
      if (this._onerror) {
        this._onerror({
          message: h,
          transaction: r.transaction.hash
        });
        return;
      } else
        throw new Error(h);
    }
    if (e.includes("invalid address")) {
      const h = `${r.account.address} is an invalid address`;
      if (this._onerror) {
        this._onerror({
          message: h,
          account: r.account.address
        });
        return;
      } else
        throw new Error(h);
    }
    if (e.includes("not a valid Bitcoin"))
      if (this._onerror) {
        this._onerror({
          message: e,
          account: r.account.address
        });
        return;
      } else
        throw new Error(e);
    if (e.includes("not a valid Ethereum"))
      if (this._onerror) {
        this._onerror({
          message: e,
          account: r.account.address
        });
        return;
      } else
        throw new Error(e);
    if (r && r.categoryCode === "simulate") {
      p0.error({
        eventId: r.eventId,
        error: {
          message: e
        }
      });
      return;
    }
    if (r && r.config) {
      const h = this.configurations.get(r.config.scope);
      h && h.subscription && h.subscription.error({
        message: e
      });
      return;
    }
    if (this._onerror) {
      this._onerror({
        message: e
      });
      return;
    } else
      throw new Error(e);
  }
  if (r && r.config) {
    const h = this._system === "ethereum" ? r.config.scope.toLowerCase() : r.config.scope, l = this.configurations.get(h);
    l && l.subscription && l.subscription.next();
  }
  if (r && r.transaction) {
    const {
      eventId: h,
      transaction: l,
      eventCode: y,
      contractCall: v,
      timeStamp: m,
      blockchain: {
        system: g,
        network: S
      }
    } = r, _ = this._system === "ethereum" ? {
      ...l,
      serverVersion: i,
      eventCode: y,
      timeStamp: m,
      dispatchTimestamp: u,
      system: g,
      network: S,
      contractCall: v
    } : {
      ...l,
      serverVersion: i,
      eventCode: y,
      timeStamp: m,
      dispatchTimestamp: u,
      system: g,
      network: S
    };
    if (oi(y) || l.status === "unsubscribed")
      return;
    if (_.originalHash && (_.replaceHash = _.hash, _.hash = _.originalHash, delete _.originalHash), y === "txSpeedUp" && _.status !== "speedup" && (_.status = "speedup"), y === "txCancel" && _.status !== "cancel" && (_.status = "cancel"), (y === "txSpeedUp" || y === "txCancel") && (this.watchedTransactions = this.watchedTransactions.map((E) => (E.hash === _.replaceHash && (E.hash = l.hash || l.txid), E))), r && r.categoryCode === "simulate") {
      _.contractCall = r.transaction.contractCall, delete _.dispatchTimestamp, p0.next({
        eventId: h,
        transaction: _
      });
      return;
    }
    const B = l.watchedAddress && this._system === "ethereum" ? l.watchedAddress.toLowerCase() : l.watchedAddress;
    if (B) {
      const E = this.watchedAccounts.find((p) => p.address === B), I = E ? ci(E.emitters.map((p) => p.emit(_))) : !1, f = this.configurations.get(B), x = f && f.emitter && f.emitter.emit(_) || I;
      this._transactionHandlers.forEach((p) => p({
        transaction: _,
        emitterResult: x
      }));
    } else {
      const E = this.watchedTransactions.find((f) => f.hash === _.hash || _.txid), I = E && E.emitter.emit(_);
      this._transactionHandlers.forEach((f) => f({
        transaction: _,
        emitterResult: I
      })), (_.status === "speedup" || _.status === "cancel") && (this.watchedTransactions = this.watchedTransactions.map((f) => f.hash === _.hash || _.txid ? {
        ...f,
        hash: _.replaceHash
      } : f));
    }
  }
}
function re(n) {
  return JSON.stringify({
    timeStamp: new Date().toISOString(),
    dappId: this._dappId,
    version: lo,
    appName: this._appName,
    appVersion: this._appVersion,
    blockchain: {
      system: this._system,
      network: Bn(this._system, this._networkId) || "local"
    },
    ...n
  }, n.categoryCode === "configs" ? fi : void 0);
}
function bo() {
  return new Promise((n) => {
    const t = setInterval(() => {
      this._connected && (setTimeout(n, 100), clearInterval(t));
    });
  });
}
const yo = "unknown", _o = "unknown", wo = "ethereum";
class So {
  constructor(t) {
    ri(t);
    const {
      system: e = wo,
      name: r = yo,
      appVersion: s = _o,
      networkId: i,
      transactionHandlers: o = [],
      ws: c,
      onopen: a,
      ondown: u,
      onreopen: h,
      onerror: l,
      onclose: y
    } = t, {
      apiUrl: v
    } = t, {
      dappId: m
    } = t, g = {
      connectTimeout: 1e4
    }, S = new mr(v || "wss://api.blocknative.com/v0", c ? {
      wsConstructor: c,
      ...g
    } : {
      ...g
    });
    S.onopen = go.bind(this, a), S.ondown = mo.bind(this, u), S.onreopen = vo.bind(this, h), S.onmessage = po.bind(this), S.onerror = (E) => l && l({
      message: "There was a WebSocket error",
      error: E
    }), S.onclose = () => {
      this._pingTimeout && clearInterval(this._pingTimeout), y && y();
    };
    const _ = _s.SHA1(`${m} - ${r}`).toString(), B = In() && window.localStorage.getItem(_);
    this._storageKey = _, this._connectionId = B || void 0, this._dappId = m, this._system = e, this._networkId = i, this._appName = r, this._appVersion = s, this._transactionHandlers = o, this._socket = S, this._connected = !1, this._sendMessage = ho.bind(this), this._pingTimeout = void 0, this._destroyed = !1, this._onerror = l, this._queuedMessages = [], this._limitRules = An, this._waitToRetry = null, this._processingQueue = !1, this._processQueue = xo.bind(this), this._socket.ws.on && (this._heartbeat = () => {
      this._pingTimeout && clearTimeout(this._pingTimeout), this._pingTimeout = setTimeout(() => {
        this._socket.ws.terminate();
      }, 3e4 + 1e3);
    }, this._socket.ws.on("ping", () => {
      this._heartbeat && this._heartbeat();
    })), this.watchedTransactions = [], this.watchedAccounts = [], this.configurations = /* @__PURE__ */ new Map(), this.transaction = li.bind(this), this.account = hi.bind(this), this.event = xi.bind(this), this.simulate = so.bind(this), this.multiSim = io.bind(this), this.unsubscribe = oo.bind(this), this.configuration = co.bind(this), this.destroy = () => {
      this._socket.close(), this._destroyed = !0, this._socket.onclose();
    };
  }
  static multichain(t) {
    return new fo(t, this);
  }
}
function go(n) {
  this._connected = !0;
  const t = {
    categoryCode: "initialize",
    eventCode: "checkDappId",
    connectionId: this._connectionId
  };
  this._socket.send(re.bind(this)(t)), this._heartbeat && this._heartbeat(), n && n();
}
function mo(n, t) {
  this._connected = !1, n && n(t), this._pingTimeout && clearTimeout(this._pingTimeout);
}
async function vo(n) {
  this._connected = !0;
  const t = {
    categoryCode: "initialize",
    eventCode: "checkDappId",
    connectionId: this._connectionId
  };
  this._socket.send(re.bind(this)(t));
  const e = Array.from(this.configurations.values()), r = this.configurations.get("global");
  if (r)
    try {
      const {
        emitter: i,
        subscription: o,
        ...c
      } = r;
      await this.configuration(c);
    } catch (i) {
      console.warn("Error re-sending global configuration upon reconnection:", i);
    }
  e.filter(({
    scope: i
  }) => i !== "global").forEach((i) => {
    const {
      emitter: o,
      subscription: c,
      ...a
    } = i;
    this._sendMessage({
      categoryCode: "configs",
      eventCode: "put",
      config: a
    });
  }), this.watchedAccounts.forEach((i) => {
    this._sendMessage({
      eventCode: "accountAddress",
      categoryCode: "watch",
      account: {
        address: i.address
      }
    });
  }), n && n(), this._socket.ws && this._socket.ws.on && (this._socket.ws.on("ping", () => {
    this._heartbeat && this._heartbeat();
  }), this._heartbeat());
}
export {
  So as default
};
