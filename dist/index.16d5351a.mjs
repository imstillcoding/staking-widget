import { aQ as d, aR as b, aS as O, aT as p, aU as ie, aV as W, aW as L, aX as ce, aY as ae, aZ as S, a_ as he, a$ as K, b0 as de, b1 as E, b2 as fe, b3 as z, b4 as I, b5 as pe, b6 as ge, b7 as me } from "./index.55b2d290.mjs";
import { aX as He, bb as Ke, aS as ze, b9 as Ve, b2 as Xe, b8 as Qe, b7 as Ye, b6 as Ze, ba as et, b3 as tt, aW as rt } from "./index.55b2d290.mjs";
function be(n) {
  n = n.slice();
  for (let t = n.length - 1; t > 0; t--) {
    const e = Math.floor(Math.random() * (t + 1)), r = n[t];
    n[t] = n[e], n[e] = r;
  }
  return n;
}
let A = null;
try {
  if (A = WebSocket, A == null)
    throw new Error("inject please");
} catch {
  const t = new d(b);
  A = function() {
    t.throwError("WebSockets not supported in this environment", d.errors.UNSUPPORTED_OPERATION, {
      operation: "new WebSocket()"
    });
  };
}
var F = globalThis && globalThis.__awaiter || function(n, t, e, r) {
  function o(s) {
    return s instanceof e ? s : new e(function(i) {
      i(s);
    });
  }
  return new (e || (e = Promise))(function(s, i) {
    function l(a) {
      try {
        u(r.next(a));
      } catch (f) {
        i(f);
      }
    }
    function c(a) {
      try {
        u(r.throw(a));
      } catch (f) {
        i(f);
      }
    }
    function u(a) {
      a.done ? s(a.value) : o(a.value).then(l, c);
    }
    u((r = r.apply(n, t || [])).next());
  });
};
const j = new d(b);
let we = 1;
class M extends O {
  constructor(t, e) {
    e === "any" && j.throwError("WebSocketProvider does not support 'any' network yet", d.errors.UNSUPPORTED_OPERATION, {
      operation: "network:any"
    }), typeof t == "string" ? super(t, e) : super("_websocket", e), this._pollingInterval = -1, this._wsReady = !1, typeof t == "string" ? p(this, "_websocket", new A(this.connection.url)) : p(this, "_websocket", t), p(this, "_requests", {}), p(this, "_subs", {}), p(this, "_subIds", {}), p(this, "_detectNetwork", super.detectNetwork()), this.websocket.onopen = () => {
      this._wsReady = !0, Object.keys(this._requests).forEach((o) => {
        this.websocket.send(this._requests[o].payload);
      });
    }, this.websocket.onmessage = (o) => {
      const s = o.data, i = JSON.parse(s);
      if (i.id != null) {
        const l = String(i.id), c = this._requests[l];
        if (delete this._requests[l], i.result !== void 0)
          c.callback(null, i.result), this.emit("debug", {
            action: "response",
            request: JSON.parse(c.payload),
            response: i.result,
            provider: this
          });
        else {
          let u = null;
          i.error ? (u = new Error(i.error.message || "unknown error"), p(u, "code", i.error.code || null), p(u, "response", s)) : u = new Error("unknown error"), c.callback(u, void 0), this.emit("debug", {
            action: "response",
            error: u,
            request: JSON.parse(c.payload),
            provider: this
          });
        }
      } else if (i.method === "eth_subscription") {
        const l = this._subs[i.params.subscription];
        l && l.processFunc(i.params.result);
      } else
        console.warn("this should not happen");
    };
    const r = setInterval(() => {
      this.emit("poll");
    }, 1e3);
    r.unref && r.unref();
  }
  get websocket() {
    return this._websocket;
  }
  detectNetwork() {
    return this._detectNetwork;
  }
  get pollingInterval() {
    return 0;
  }
  resetEventsBlock(t) {
    j.throwError("cannot reset events block on WebSocketProvider", d.errors.UNSUPPORTED_OPERATION, {
      operation: "resetEventBlock"
    });
  }
  set pollingInterval(t) {
    j.throwError("cannot set polling interval on WebSocketProvider", d.errors.UNSUPPORTED_OPERATION, {
      operation: "setPollingInterval"
    });
  }
  poll() {
    return F(this, void 0, void 0, function* () {
      return null;
    });
  }
  set polling(t) {
    !t || j.throwError("cannot set polling on WebSocketProvider", d.errors.UNSUPPORTED_OPERATION, {
      operation: "setPolling"
    });
  }
  send(t, e) {
    const r = we++;
    return new Promise((o, s) => {
      function i(c, u) {
        return c ? s(c) : o(u);
      }
      const l = JSON.stringify({
        method: t,
        params: e,
        id: r,
        jsonrpc: "2.0"
      });
      this.emit("debug", {
        action: "request",
        request: JSON.parse(l),
        provider: this
      }), this._requests[String(r)] = { callback: i, payload: l }, this._wsReady && this.websocket.send(l);
    });
  }
  static defaultUrl() {
    return "ws://localhost:8546";
  }
  _subscribe(t, e, r) {
    return F(this, void 0, void 0, function* () {
      let o = this._subIds[t];
      o == null && (o = Promise.all(e).then((i) => this.send("eth_subscribe", i)), this._subIds[t] = o);
      const s = yield o;
      this._subs[s] = { tag: t, processFunc: r };
    });
  }
  _startEvent(t) {
    switch (t.type) {
      case "block":
        this._subscribe("block", ["newHeads"], (e) => {
          const r = ie.from(e.number).toNumber();
          this._emitted.block = r, this.emit("block", r);
        });
        break;
      case "pending":
        this._subscribe("pending", ["newPendingTransactions"], (e) => {
          this.emit("pending", e);
        });
        break;
      case "filter":
        this._subscribe(t.tag, ["logs", this._getFilter(t.filter)], (e) => {
          e.removed == null && (e.removed = !1), this.emit(t.filter, this.formatter.filterLog(e));
        });
        break;
      case "tx": {
        const e = (r) => {
          const o = r.hash;
          this.getTransactionReceipt(o).then((s) => {
            !s || this.emit(o, s);
          });
        };
        e(t), this._subscribe("tx", ["newHeads"], (r) => {
          this._events.filter((o) => o.type === "tx").forEach(e);
        });
        break;
      }
      case "debug":
      case "poll":
      case "willPoll":
      case "didPoll":
      case "error":
        break;
      default:
        console.log("unhandled:", t);
        break;
    }
  }
  _stopEvent(t) {
    let e = t.tag;
    if (t.type === "tx") {
      if (this._events.filter((o) => o.type === "tx").length)
        return;
      e = "tx";
    } else if (this.listenerCount(t.event))
      return;
    const r = this._subIds[e];
    !r || (delete this._subIds[e], r.then((o) => {
      !this._subs[o] || (delete this._subs[o], this.send("eth_unsubscribe", [o]));
    }));
  }
  destroy() {
    return F(this, void 0, void 0, function* () {
      this.websocket.readyState === A.CONNECTING && (yield new Promise((t) => {
        this.websocket.onopen = function() {
          t(!0);
        }, this.websocket.onerror = function() {
          t(!1);
        };
      })), this.websocket.close(1e3);
    });
  }
}
var ke = globalThis && globalThis.__awaiter || function(n, t, e, r) {
  function o(s) {
    return s instanceof e ? s : new e(function(i) {
      i(s);
    });
  }
  return new (e || (e = Promise))(function(s, i) {
    function l(a) {
      try {
        u(r.next(a));
      } catch (f) {
        i(f);
      }
    }
    function c(a) {
      try {
        u(r.throw(a));
      } catch (f) {
        i(f);
      }
    }
    function u(a) {
      a.done ? s(a.value) : o(a.value).then(l, c);
    }
    u((r = r.apply(n, t || [])).next());
  });
};
const T = new d(b);
class ye extends O {
  detectNetwork() {
    const t = Object.create(null, {
      detectNetwork: { get: () => super.detectNetwork }
    });
    return ke(this, void 0, void 0, function* () {
      let e = this.network;
      return e == null && (e = yield t.detectNetwork.call(this), e || T.throwError("no network detected", d.errors.UNKNOWN_ERROR, {}), this._network == null && (p(this, "_network", e), this.emit("network", e, null))), e;
    });
  }
}
class k extends ye {
  constructor(t, e) {
    T.checkAbstract(new.target, k), t = W(new.target, "getNetwork")(t), e = W(new.target, "getApiKey")(e);
    const r = W(new.target, "getUrl")(t, e);
    super(r, t), typeof e == "string" ? p(this, "apiKey", e) : e != null && Object.keys(e).forEach((o) => {
      p(this, o, e[o]);
    });
  }
  _startPending() {
    T.warn("WARNING: API provider does not support pending filters");
  }
  isCommunityResource() {
    return !1;
  }
  getSigner(t) {
    return T.throwError("API provider does not support signing", d.errors.UNSUPPORTED_OPERATION, { operation: "getSigner" });
  }
  listAccounts() {
    return Promise.resolve([]);
  }
  static getApiKey(t) {
    return t;
  }
  static getUrl(t, e) {
    return T.throwError("not implemented; sub-classes must override getUrl", d.errors.NOT_IMPLEMENTED, {
      operation: "getUrl"
    });
  }
}
const V = new d(b), q = "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC";
class Ee extends M {
  constructor(t, e) {
    const r = new le(t, e), o = r.connection.url.replace(/^http/i, "ws").replace(".alchemyapi.", ".ws.alchemyapi.");
    super(o, r.network), p(this, "apiKey", r.apiKey);
  }
  isCommunityResource() {
    return this.apiKey === q;
  }
}
class le extends k {
  static getWebSocketProvider(t, e) {
    return new Ee(t, e);
  }
  static getApiKey(t) {
    return t == null ? q : (t && typeof t != "string" && V.throwArgumentError("invalid apiKey", "apiKey", t), t);
  }
  static getUrl(t, e) {
    let r = null;
    switch (t.name) {
      case "homestead":
        r = "eth-mainnet.alchemyapi.io/v2/";
        break;
      case "goerli":
        r = "eth-goerli.g.alchemy.com/v2/";
        break;
      case "matic":
        r = "polygon-mainnet.g.alchemy.com/v2/";
        break;
      case "maticmum":
        r = "polygon-mumbai.g.alchemy.com/v2/";
        break;
      case "arbitrum":
        r = "arb-mainnet.g.alchemy.com/v2/";
        break;
      case "arbitrum-goerli":
        r = "arb-goerli.g.alchemy.com/v2/";
        break;
      case "optimism":
        r = "opt-mainnet.g.alchemy.com/v2/";
        break;
      case "optimism-goerli":
        r = "opt-goerli.g.alchemy.com/v2/";
        break;
      default:
        V.throwArgumentError("unsupported network", "network", arguments[0]);
    }
    return {
      allowGzip: !0,
      url: "https://" + r + e,
      throttleCallback: (o, s) => (e === q && L(), Promise.resolve(!0))
    };
  }
  isCommunityResource() {
    return this.apiKey === q;
  }
}
const ve = new d(b), x = "9f7d929b018cdffb338517efa06f58359e86ff1ffd350bc889738523659e7972";
function _e(n) {
  switch (n) {
    case "homestead":
      return "rpc.ankr.com/eth/";
    case "ropsten":
      return "rpc.ankr.com/eth_ropsten/";
    case "rinkeby":
      return "rpc.ankr.com/eth_rinkeby/";
    case "goerli":
      return "rpc.ankr.com/eth_goerli/";
    case "matic":
      return "rpc.ankr.com/polygon/";
    case "arbitrum":
      return "rpc.ankr.com/arbitrum/";
  }
  return ve.throwArgumentError("unsupported network", "name", n);
}
class Pe extends k {
  isCommunityResource() {
    return this.apiKey === x;
  }
  static getApiKey(t) {
    return t == null ? x : t;
  }
  static getUrl(t, e) {
    e == null && (e = x);
    const r = {
      allowGzip: !0,
      url: "https://" + _e(t.name) + e,
      throttleCallback: (o, s) => (e.apiKey === x && L(), Promise.resolve(!0))
    };
    return e.projectSecret != null && (r.user = "", r.password = e.projectSecret), r;
  }
}
var Ne = globalThis && globalThis.__awaiter || function(n, t, e, r) {
  function o(s) {
    return s instanceof e ? s : new e(function(i) {
      i(s);
    });
  }
  return new (e || (e = Promise))(function(s, i) {
    function l(a) {
      try {
        u(r.next(a));
      } catch (f) {
        i(f);
      }
    }
    function c(a) {
      try {
        u(r.throw(a));
      } catch (f) {
        i(f);
      }
    }
    function u(a) {
      a.done ? s(a.value) : o(a.value).then(l, c);
    }
    u((r = r.apply(n, t || [])).next());
  });
};
const X = new d(b);
class Te extends k {
  static getApiKey(t) {
    return t != null && X.throwArgumentError("apiKey not supported for cloudflare", "apiKey", t), null;
  }
  static getUrl(t, e) {
    let r = null;
    switch (t.name) {
      case "homestead":
        r = "https://cloudflare-eth.com/";
        break;
      default:
        X.throwArgumentError("unsupported network", "network", arguments[0]);
    }
    return r;
  }
  perform(t, e) {
    const r = Object.create(null, {
      perform: { get: () => super.perform }
    });
    return Ne(this, void 0, void 0, function* () {
      return t === "getBlockNumber" ? (yield r.perform.call(this, "getBlock", { blockTag: "latest" })).number : r.perform.call(this, t, e);
    });
  }
}
var C = globalThis && globalThis.__awaiter || function(n, t, e, r) {
  function o(s) {
    return s instanceof e ? s : new e(function(i) {
      i(s);
    });
  }
  return new (e || (e = Promise))(function(s, i) {
    function l(a) {
      try {
        u(r.next(a));
      } catch (f) {
        i(f);
      }
    }
    function c(a) {
      try {
        u(r.throw(a));
      } catch (f) {
        i(f);
      }
    }
    function u(a) {
      a.done ? s(a.value) : o(a.value).then(l, c);
    }
    u((r = r.apply(n, t || [])).next());
  });
};
const w = new d(b);
function Q(n) {
  const t = {};
  for (let e in n) {
    if (n[e] == null)
      continue;
    let r = n[e];
    e === "type" && r === 0 || ({ type: !0, gasLimit: !0, gasPrice: !0, maxFeePerGs: !0, maxPriorityFeePerGas: !0, nonce: !0, value: !0 }[e] ? r = he(K(r)) : e === "accessList" ? r = "[" + de(r).map((o) => `{address:"${o.address}",storageKeys:["${o.storageKeys.join('","')}"]}`).join(",") + "]" : r = K(r), t[e] = r);
  }
  return t;
}
function Re(n) {
  if (n.status == 0 && (n.message === "No records found" || n.message === "No transactions found"))
    return n.result;
  if (n.status != 1 || typeof n.message != "string" || !n.message.match(/^OK/)) {
    const t = new Error("invalid response");
    throw t.result = JSON.stringify(n), (n.result || "").toLowerCase().indexOf("rate limit") >= 0 && (t.throttleRetry = !0), t;
  }
  return n.result;
}
function Y(n) {
  if (n && n.status == 0 && n.message == "NOTOK" && (n.result || "").toLowerCase().indexOf("rate limit") >= 0) {
    const t = new Error("throttled response");
    throw t.result = JSON.stringify(n), t.throttleRetry = !0, t;
  }
  if (n.jsonrpc != "2.0") {
    const t = new Error("invalid response");
    throw t.result = JSON.stringify(n), t;
  }
  if (n.error) {
    const t = new Error(n.error.message || "unknown error");
    throw n.error.code && (t.code = n.error.code), n.error.data && (t.data = n.error.data), t;
  }
  return n.result;
}
function Z(n) {
  if (n === "pending")
    throw new Error("pending not supported");
  return n === "latest" ? n : parseInt(n.substring(2), 16);
}
function G(n, t, e) {
  if (n === "call" && t.code === d.errors.SERVER_ERROR) {
    const o = t.error;
    if (o && (o.message.match(/reverted/i) || o.message.match(/VM execution error/i))) {
      let s = o.data;
      if (s && (s = "0x" + s.replace(/^.*0x/i, "")), E(s))
        return s;
      w.throwError("missing revert data in call exception", d.errors.CALL_EXCEPTION, {
        error: t,
        data: "0x"
      });
    }
  }
  let r = t.message;
  throw t.code === d.errors.SERVER_ERROR && (t.error && typeof t.error.message == "string" ? r = t.error.message : typeof t.body == "string" ? r = t.body : typeof t.responseText == "string" && (r = t.responseText)), r = (r || "").toLowerCase(), r.match(/insufficient funds/) && w.throwError("insufficient funds for intrinsic transaction cost", d.errors.INSUFFICIENT_FUNDS, {
    error: t,
    method: n,
    transaction: e
  }), r.match(/same hash was already imported|transaction nonce is too low|nonce too low/) && w.throwError("nonce has already been used", d.errors.NONCE_EXPIRED, {
    error: t,
    method: n,
    transaction: e
  }), r.match(/another transaction with same nonce/) && w.throwError("replacement fee too low", d.errors.REPLACEMENT_UNDERPRICED, {
    error: t,
    method: n,
    transaction: e
  }), r.match(/execution failed due to an exception|execution reverted/) && w.throwError("cannot estimate gas; transaction may fail or may require manual gas limit", d.errors.UNPREDICTABLE_GAS_LIMIT, {
    error: t,
    method: n,
    transaction: e
  }), t;
}
class Se extends ce {
  constructor(t, e) {
    super(t), p(this, "baseUrl", this.getBaseUrl()), p(this, "apiKey", e || null);
  }
  getBaseUrl() {
    switch (this.network ? this.network.name : "invalid") {
      case "homestead":
        return "https://api.etherscan.io";
      case "goerli":
        return "https://api-goerli.etherscan.io";
      case "sepolia":
        return "https://api-sepolia.etherscan.io";
      case "matic":
        return "https://api.polygonscan.com";
      case "maticmum":
        return "https://api-testnet.polygonscan.com";
      case "arbitrum":
        return "https://api.arbiscan.io";
      case "arbitrum-goerli":
        return "https://api-goerli.arbiscan.io";
      case "optimism":
        return "https://api-optimistic.etherscan.io";
      case "optimism-goerli":
        return "https://api-goerli-optimistic.etherscan.io";
    }
    return w.throwArgumentError("unsupported network", "network", this.network.name);
  }
  getUrl(t, e) {
    const r = Object.keys(e).reduce((s, i) => {
      const l = e[i];
      return l != null && (s += `&${i}=${l}`), s;
    }, ""), o = this.apiKey ? `&apikey=${this.apiKey}` : "";
    return `${this.baseUrl}/api?module=${t}${r}${o}`;
  }
  getPostUrl() {
    return `${this.baseUrl}/api`;
  }
  getPostData(t, e) {
    return e.module = t, e.apikey = this.apiKey, e;
  }
  fetch(t, e, r) {
    return C(this, void 0, void 0, function* () {
      const o = r ? this.getPostUrl() : this.getUrl(t, e), s = r ? this.getPostData(t, e) : null, i = t === "proxy" ? Y : Re;
      this.emit("debug", {
        action: "request",
        request: o,
        provider: this
      });
      const l = {
        url: o,
        throttleSlotInterval: 1e3,
        throttleCallback: (a, f) => (this.isCommunityResource() && L(), Promise.resolve(!0))
      };
      let c = null;
      s && (l.headers = { "content-type": "application/x-www-form-urlencoded; charset=UTF-8" }, c = Object.keys(s).map((a) => `${a}=${s[a]}`).join("&"));
      const u = yield ae(l, c, i || Y);
      return this.emit("debug", {
        action: "response",
        request: o,
        response: S(u),
        provider: this
      }), u;
    });
  }
  detectNetwork() {
    return C(this, void 0, void 0, function* () {
      return this.network;
    });
  }
  perform(t, e) {
    const r = Object.create(null, {
      perform: { get: () => super.perform }
    });
    return C(this, void 0, void 0, function* () {
      switch (t) {
        case "getBlockNumber":
          return this.fetch("proxy", { action: "eth_blockNumber" });
        case "getGasPrice":
          return this.fetch("proxy", { action: "eth_gasPrice" });
        case "getBalance":
          return this.fetch("account", {
            action: "balance",
            address: e.address,
            tag: e.blockTag
          });
        case "getTransactionCount":
          return this.fetch("proxy", {
            action: "eth_getTransactionCount",
            address: e.address,
            tag: e.blockTag
          });
        case "getCode":
          return this.fetch("proxy", {
            action: "eth_getCode",
            address: e.address,
            tag: e.blockTag
          });
        case "getStorageAt":
          return this.fetch("proxy", {
            action: "eth_getStorageAt",
            address: e.address,
            position: e.position,
            tag: e.blockTag
          });
        case "sendTransaction":
          return this.fetch("proxy", {
            action: "eth_sendRawTransaction",
            hex: e.signedTransaction
          }, !0).catch((o) => G("sendTransaction", o, e.signedTransaction));
        case "getBlock":
          if (e.blockTag)
            return this.fetch("proxy", {
              action: "eth_getBlockByNumber",
              tag: e.blockTag,
              boolean: e.includeTransactions ? "true" : "false"
            });
          throw new Error("getBlock by blockHash not implemented");
        case "getTransaction":
          return this.fetch("proxy", {
            action: "eth_getTransactionByHash",
            txhash: e.transactionHash
          });
        case "getTransactionReceipt":
          return this.fetch("proxy", {
            action: "eth_getTransactionReceipt",
            txhash: e.transactionHash
          });
        case "call": {
          if (e.blockTag !== "latest")
            throw new Error("EtherscanProvider does not support blockTag for call");
          const o = Q(e.transaction);
          o.module = "proxy", o.action = "eth_call";
          try {
            return yield this.fetch("proxy", o, !0);
          } catch (s) {
            return G("call", s, e.transaction);
          }
        }
        case "estimateGas": {
          const o = Q(e.transaction);
          o.module = "proxy", o.action = "eth_estimateGas";
          try {
            return yield this.fetch("proxy", o, !0);
          } catch (s) {
            return G("estimateGas", s, e.transaction);
          }
        }
        case "getLogs": {
          const o = { action: "getLogs" };
          if (e.filter.fromBlock && (o.fromBlock = Z(e.filter.fromBlock)), e.filter.toBlock && (o.toBlock = Z(e.filter.toBlock)), e.filter.address && (o.address = e.filter.address), e.filter.topics && e.filter.topics.length > 0 && (e.filter.topics.length > 1 && w.throwError("unsupported topic count", d.errors.UNSUPPORTED_OPERATION, { topics: e.filter.topics }), e.filter.topics.length === 1)) {
            const l = e.filter.topics[0];
            (typeof l != "string" || l.length !== 66) && w.throwError("unsupported topic format", d.errors.UNSUPPORTED_OPERATION, { topic0: l }), o.topic0 = l;
          }
          const s = yield this.fetch("logs", o);
          let i = {};
          for (let l = 0; l < s.length; l++) {
            const c = s[l];
            if (c.blockHash == null) {
              if (i[c.blockNumber] == null) {
                const u = yield this.getBlock(c.blockNumber);
                u && (i[c.blockNumber] = u.hash);
              }
              c.blockHash = i[c.blockNumber];
            }
          }
          return s;
        }
        case "getEtherPrice":
          return this.network.name !== "homestead" ? 0 : parseFloat((yield this.fetch("stats", { action: "ethprice" })).ethusd);
      }
      return r.perform.call(this, t, e);
    });
  }
  getHistory(t, e, r) {
    return C(this, void 0, void 0, function* () {
      const o = {
        action: "txlist",
        address: yield this.resolveName(t),
        startblock: e == null ? 0 : e,
        endblock: r == null ? 99999999 : r,
        sort: "asc"
      };
      return (yield this.fetch("account", o)).map((i) => {
        ["contractAddress", "to"].forEach(function(c) {
          i[c] == "" && delete i[c];
        }), i.creates == null && i.contractAddress != null && (i.creates = i.contractAddress);
        const l = this.formatter.transactionResponse(i);
        return i.timeStamp && (l.timestamp = parseInt(i.timeStamp)), l;
      });
    });
  }
  isCommunityResource() {
    return this.apiKey == null;
  }
}
var $ = globalThis && globalThis.__awaiter || function(n, t, e, r) {
  function o(s) {
    return s instanceof e ? s : new e(function(i) {
      i(s);
    });
  }
  return new (e || (e = Promise))(function(s, i) {
    function l(a) {
      try {
        u(r.next(a));
      } catch (f) {
        i(f);
      }
    }
    function c(a) {
      try {
        u(r.throw(a));
      } catch (f) {
        i(f);
      }
    }
    function u(a) {
      a.done ? s(a.value) : o(a.value).then(l, c);
    }
    u((r = r.apply(n, t || [])).next());
  });
};
const v = new d(b);
function B() {
  return new Date().getTime();
}
function ee(n) {
  let t = null;
  for (let e = 0; e < n.length; e++) {
    const r = n[e];
    if (r == null)
      return null;
    t ? t.name === r.name && t.chainId === r.chainId && (t.ensAddress === r.ensAddress || t.ensAddress == null && r.ensAddress == null) || v.throwArgumentError("provider mismatch", "networks", n) : t = r;
  }
  return t;
}
function te(n, t) {
  n = n.slice().sort();
  const e = Math.floor(n.length / 2);
  if (n.length % 2)
    return n[e];
  const r = n[e - 1], o = n[e];
  return t != null && Math.abs(r - o) > t ? null : (r + o) / 2;
}
function P(n) {
  if (n === null)
    return "null";
  if (typeof n == "number" || typeof n == "boolean")
    return JSON.stringify(n);
  if (typeof n == "string")
    return n;
  if (ie.isBigNumber(n))
    return n.toString();
  if (Array.isArray(n))
    return JSON.stringify(n.map((t) => P(t)));
  if (typeof n == "object") {
    const t = Object.keys(n);
    return t.sort(), "{" + t.map((e) => {
      let r = n[e];
      return typeof r == "function" ? r = "[function]" : r = P(r), JSON.stringify(e) + ":" + r;
    }).join(",") + "}";
  }
  throw new Error("unknown value type: " + typeof n);
}
let Ie = 1;
function re(n) {
  let t = null, e = null, r = new Promise((i) => {
    t = function() {
      e && (clearTimeout(e), e = null), i();
    }, e = setTimeout(t, n);
  });
  const o = (i) => (r = r.then(i), r);
  function s() {
    return r;
  }
  return { cancel: t, getPromise: s, wait: o };
}
const Ae = [
  d.errors.CALL_EXCEPTION,
  d.errors.INSUFFICIENT_FUNDS,
  d.errors.NONCE_EXPIRED,
  d.errors.REPLACEMENT_UNDERPRICED,
  d.errors.UNPREDICTABLE_GAS_LIMIT
], Oe = [
  "address",
  "args",
  "errorArgs",
  "errorSignature",
  "method",
  "transaction"
];
function U(n, t) {
  const e = {
    weight: n.weight
  };
  return Object.defineProperty(e, "provider", { get: () => n.provider }), n.start && (e.start = n.start), t && (e.duration = t - n.start), n.done && (n.error ? e.error = n.error : e.result = n.result || null), e;
}
function je(n, t) {
  return function(e) {
    const r = {};
    e.forEach((s) => {
      const i = n(s.result);
      r[i] || (r[i] = { count: 0, result: s.result }), r[i].count++;
    });
    const o = Object.keys(r);
    for (let s = 0; s < o.length; s++) {
      const i = r[o[s]];
      if (i.count >= t)
        return i.result;
    }
  };
}
function xe(n, t, e) {
  let r = P;
  switch (t) {
    case "getBlockNumber":
      return function(o) {
        const s = o.map((l) => l.result);
        let i = te(o.map((l) => l.result), 2);
        if (i != null)
          return i = Math.ceil(i), s.indexOf(i + 1) >= 0 && i++, i >= n._highestBlockNumber && (n._highestBlockNumber = i), n._highestBlockNumber;
      };
    case "getGasPrice":
      return function(o) {
        const s = o.map((i) => i.result);
        return s.sort(), s[Math.floor(s.length / 2)];
      };
    case "getEtherPrice":
      return function(o) {
        return te(o.map((s) => s.result));
      };
    case "getBalance":
    case "getTransactionCount":
    case "getCode":
    case "getStorageAt":
    case "call":
    case "estimateGas":
    case "getLogs":
      break;
    case "getTransaction":
    case "getTransactionReceipt":
      r = function(o) {
        return o == null ? null : (o = I(o), o.confirmations = -1, P(o));
      };
      break;
    case "getBlock":
      e.includeTransactions ? r = function(o) {
        return o == null ? null : (o = I(o), o.transactions = o.transactions.map((s) => (s = I(s), s.confirmations = -1, s)), P(o));
      } : r = function(o) {
        return o == null ? null : P(o);
      };
      break;
    default:
      throw new Error("unknown method: " + t);
  }
  return je(r, n.quorum);
}
function N(n, t) {
  return $(this, void 0, void 0, function* () {
    const e = n.provider;
    return e.blockNumber != null && e.blockNumber >= t || t === -1 ? e : pe(() => new Promise((r, o) => {
      setTimeout(function() {
        return e.blockNumber >= t ? r(e) : n.cancelled ? r(null) : r(void 0);
      }, 0);
    }), { oncePoll: e });
  });
}
function Ce(n, t, e, r) {
  return $(this, void 0, void 0, function* () {
    let o = n.provider;
    switch (e) {
      case "getBlockNumber":
      case "getGasPrice":
        return o[e]();
      case "getEtherPrice":
        if (o.getEtherPrice)
          return o.getEtherPrice();
        break;
      case "getBalance":
      case "getTransactionCount":
      case "getCode":
        return r.blockTag && E(r.blockTag) && (o = yield N(n, t)), o[e](r.address, r.blockTag || "latest");
      case "getStorageAt":
        return r.blockTag && E(r.blockTag) && (o = yield N(n, t)), o.getStorageAt(r.address, r.position, r.blockTag || "latest");
      case "getBlock":
        return r.blockTag && E(r.blockTag) && (o = yield N(n, t)), o[r.includeTransactions ? "getBlockWithTransactions" : "getBlock"](r.blockTag || r.blockHash);
      case "call":
      case "estimateGas":
        return r.blockTag && E(r.blockTag) && (o = yield N(n, t)), e === "call" && r.blockTag ? o[e](r.transaction, r.blockTag) : o[e](r.transaction);
      case "getTransaction":
      case "getTransactionReceipt":
        return o[e](r.transactionHash);
      case "getLogs": {
        let s = r.filter;
        return (s.fromBlock && E(s.fromBlock) || s.toBlock && E(s.toBlock)) && (o = yield N(n, t)), o.getLogs(s);
      }
    }
    return v.throwError("unknown method error", d.errors.UNKNOWN_ERROR, {
      method: e,
      params: r
    });
  });
}
class Be extends ce {
  constructor(t, e) {
    t.length === 0 && v.throwArgumentError("missing providers", "providers", t);
    const r = t.map((i, l) => {
      if (fe.isProvider(i)) {
        const a = z(i) ? 2e3 : 750;
        return Object.freeze({ provider: i, weight: 1, stallTimeout: a, priority: 1 });
      }
      const c = I(i);
      c.priority == null && (c.priority = 1), c.stallTimeout == null && (c.stallTimeout = z(i) ? 2e3 : 750), c.weight == null && (c.weight = 1);
      const u = c.weight;
      return (u % 1 || u > 512 || u < 1) && v.throwArgumentError("invalid weight; must be integer in [1, 512]", `providers[${l}].weight`, u), Object.freeze(c);
    }), o = r.reduce((i, l) => i + l.weight, 0);
    e == null ? e = o / 2 : e > o && v.throwArgumentError("quorum will always fail; larger than total weight", "quorum", e);
    let s = ee(r.map((i) => i.provider.network));
    s == null && (s = new Promise((i, l) => {
      setTimeout(() => {
        this.detectNetwork().then(i, l);
      }, 0);
    })), super(s), p(this, "providerConfigs", Object.freeze(r)), p(this, "quorum", e), this._highestBlockNumber = -1;
  }
  detectNetwork() {
    return $(this, void 0, void 0, function* () {
      const t = yield Promise.all(this.providerConfigs.map((e) => e.provider.getNetwork()));
      return ee(t);
    });
  }
  perform(t, e) {
    return $(this, void 0, void 0, function* () {
      if (t === "sendTransaction") {
        const c = yield Promise.all(this.providerConfigs.map((u) => u.provider.sendTransaction(e.signedTransaction).then((a) => a.hash, (a) => a)));
        for (let u = 0; u < c.length; u++) {
          const a = c[u];
          if (typeof a == "string")
            return a;
        }
        throw c[0];
      }
      this._highestBlockNumber === -1 && t !== "getBlockNumber" && (yield this.getBlockNumber());
      const r = xe(this, t, e), o = be(this.providerConfigs.map(I));
      o.sort((c, u) => c.priority - u.priority);
      const s = this._highestBlockNumber;
      let i = 0, l = !0;
      for (; ; ) {
        const c = B();
        let u = o.filter((h) => h.runner && c - h.start < h.stallTimeout).reduce((h, g) => h + g.weight, 0);
        for (; u < this.quorum && i < o.length; ) {
          const h = o[i++], g = Ie++;
          h.start = B(), h.staller = re(h.stallTimeout), h.staller.wait(() => {
            h.staller = null;
          }), h.runner = Ce(h, s, t, e).then((m) => {
            h.done = !0, h.result = m, this.listenerCount("debug") && this.emit("debug", {
              action: "request",
              rid: g,
              backend: U(h, B()),
              request: { method: t, params: S(e) },
              provider: this
            });
          }, (m) => {
            h.done = !0, h.error = m, this.listenerCount("debug") && this.emit("debug", {
              action: "request",
              rid: g,
              backend: U(h, B()),
              request: { method: t, params: S(e) },
              provider: this
            });
          }), this.listenerCount("debug") && this.emit("debug", {
            action: "request",
            rid: g,
            backend: U(h, null),
            request: { method: t, params: S(e) },
            provider: this
          }), u += h.weight;
        }
        const a = [];
        o.forEach((h) => {
          h.done || !h.runner || (a.push(h.runner), h.staller && a.push(h.staller.getPromise()));
        }), a.length && (yield Promise.race(a));
        const f = o.filter((h) => h.done && h.error == null);
        if (f.length >= this.quorum) {
          const h = r(f);
          if (h !== void 0)
            return o.forEach((g) => {
              g.staller && g.staller.cancel(), g.cancelled = !0;
            }), h;
          l || (yield re(100).getPromise()), l = !1;
        }
        const _ = o.reduce((h, g) => {
          if (!g.done || g.error == null)
            return h;
          const m = g.error.code;
          return Ae.indexOf(m) >= 0 && (h[m] || (h[m] = { error: g.error, weight: 0 }), h[m].weight += g.weight), h;
        }, {});
        if (Object.keys(_).forEach((h) => {
          const g = _[h];
          if (g.weight < this.quorum)
            return;
          o.forEach((y) => {
            y.staller && y.staller.cancel(), y.cancelled = !0;
          });
          const m = g.error, H = {};
          Oe.forEach((y) => {
            m[y] != null && (H[y] = m[y]);
          }), v.throwError(m.reason || m.message, h, H);
        }), o.filter((h) => !h.done).length === 0)
          break;
      }
      return o.forEach((c) => {
        c.staller && c.staller.cancel(), c.cancelled = !0;
      }), v.throwError("failed to meet quorum", d.errors.SERVER_ERROR, {
        method: t,
        params: e,
        results: o.map((c) => U(c)),
        provider: this
      });
    });
  }
}
const Ue = null, D = new d(b), R = "84842078b09946638c03157f83405213";
class qe extends M {
  constructor(t, e) {
    const r = new ue(t, e), o = r.connection;
    o.password && D.throwError("INFURA WebSocket project secrets unsupported", d.errors.UNSUPPORTED_OPERATION, {
      operation: "InfuraProvider.getWebSocketProvider()"
    });
    const s = o.url.replace(/^http/i, "ws").replace("/v3/", "/ws/v3/");
    super(s, t), p(this, "apiKey", r.projectId), p(this, "projectId", r.projectId), p(this, "projectSecret", r.projectSecret);
  }
  isCommunityResource() {
    return this.projectId === R;
  }
}
class ue extends k {
  static getWebSocketProvider(t, e) {
    return new qe(t, e);
  }
  static getApiKey(t) {
    const e = {
      apiKey: R,
      projectId: R,
      projectSecret: null
    };
    return t == null || (typeof t == "string" ? e.projectId = t : t.projectSecret != null ? (D.assertArgument(typeof t.projectId == "string", "projectSecret requires a projectId", "projectId", t.projectId), D.assertArgument(typeof t.projectSecret == "string", "invalid projectSecret", "projectSecret", "[REDACTED]"), e.projectId = t.projectId, e.projectSecret = t.projectSecret) : t.projectId && (e.projectId = t.projectId), e.apiKey = e.projectId), e;
  }
  static getUrl(t, e) {
    let r = null;
    switch (t ? t.name : "unknown") {
      case "homestead":
        r = "mainnet.infura.io";
        break;
      case "goerli":
        r = "goerli.infura.io";
        break;
      case "sepolia":
        r = "sepolia.infura.io";
        break;
      case "matic":
        r = "polygon-mainnet.infura.io";
        break;
      case "maticmum":
        r = "polygon-mumbai.infura.io";
        break;
      case "optimism":
        r = "optimism-mainnet.infura.io";
        break;
      case "optimism-goerli":
        r = "optimism-goerli.infura.io";
        break;
      case "arbitrum":
        r = "arbitrum-mainnet.infura.io";
        break;
      case "arbitrum-goerli":
        r = "arbitrum-goerli.infura.io";
        break;
      default:
        D.throwError("unsupported network", d.errors.INVALID_ARGUMENT, {
          argument: "network",
          value: t
        });
    }
    const o = {
      allowGzip: !0,
      url: "https://" + r + "/v3/" + e.projectId,
      throttleCallback: (s, i) => (e.projectId === R && L(), Promise.resolve(!0))
    };
    return e.projectSecret != null && (o.user = "", o.password = e.projectSecret), o;
  }
  isCommunityResource() {
    return this.projectId === R;
  }
}
class Fe extends O {
  send(t, e) {
    const r = {
      method: t,
      params: e,
      id: this._nextId++,
      jsonrpc: "2.0"
    };
    this._pendingBatch == null && (this._pendingBatch = []);
    const o = { request: r, resolve: null, reject: null }, s = new Promise((i, l) => {
      o.resolve = i, o.reject = l;
    });
    return this._pendingBatch.push(o), this._pendingBatchAggregator || (this._pendingBatchAggregator = setTimeout(() => {
      const i = this._pendingBatch;
      this._pendingBatch = null, this._pendingBatchAggregator = null;
      const l = i.map((c) => c.request);
      return this.emit("debug", {
        action: "requestBatch",
        request: S(l),
        provider: this
      }), ae(this.connection, JSON.stringify(l)).then((c) => {
        this.emit("debug", {
          action: "response",
          request: l,
          response: c,
          provider: this
        }), i.forEach((u, a) => {
          const f = c[a];
          if (f.error) {
            const _ = new Error(f.error.message);
            _.code = f.error.code, _.data = f.error.data, u.reject(_);
          } else
            u.resolve(f.result);
        });
      }, (c) => {
        this.emit("debug", {
          action: "response",
          error: c,
          request: l,
          provider: this
        }), i.forEach((u) => {
          u.reject(c);
        });
      });
    }, 10)), s;
  }
}
const J = new d(b), De = "ETHERS_JS_SHARED";
class $e extends k {
  static getApiKey(t) {
    return t && typeof t != "string" && J.throwArgumentError("invalid apiKey", "apiKey", t), t || De;
  }
  static getUrl(t, e) {
    J.warn("NodeSmith will be discontinued on 2019-12-20; please migrate to another platform.");
    let r = null;
    switch (t.name) {
      case "homestead":
        r = "https://ethereum.api.nodesmith.io/v1/mainnet/jsonrpc";
        break;
      case "ropsten":
        r = "https://ethereum.api.nodesmith.io/v1/ropsten/jsonrpc";
        break;
      case "rinkeby":
        r = "https://ethereum.api.nodesmith.io/v1/rinkeby/jsonrpc";
        break;
      case "goerli":
        r = "https://ethereum.api.nodesmith.io/v1/goerli/jsonrpc";
        break;
      case "kovan":
        r = "https://ethereum.api.nodesmith.io/v1/kovan/jsonrpc";
        break;
      default:
        J.throwArgumentError("unsupported network", "network", arguments[0]);
    }
    return r + "?apiKey=" + e;
  }
}
const oe = new d(b), ne = "62e1ad51b37b8e00394bda3b";
class Le extends k {
  static getApiKey(t) {
    const e = {
      applicationId: null,
      loadBalancer: !0,
      applicationSecretKey: null
    };
    return t == null ? e.applicationId = ne : typeof t == "string" ? e.applicationId = t : t.applicationSecretKey != null ? (e.applicationId = t.applicationId, e.applicationSecretKey = t.applicationSecretKey) : t.applicationId ? e.applicationId = t.applicationId : oe.throwArgumentError("unsupported PocketProvider apiKey", "apiKey", t), e;
  }
  static getUrl(t, e) {
    let r = null;
    switch (t ? t.name : "unknown") {
      case "goerli":
        r = "eth-goerli.gateway.pokt.network";
        break;
      case "homestead":
        r = "eth-mainnet.gateway.pokt.network";
        break;
      case "kovan":
        r = "poa-kovan.gateway.pokt.network";
        break;
      case "matic":
        r = "poly-mainnet.gateway.pokt.network";
        break;
      case "maticmum":
        r = "polygon-mumbai-rpc.gateway.pokt.network";
        break;
      case "rinkeby":
        r = "eth-rinkeby.gateway.pokt.network";
        break;
      case "ropsten":
        r = "eth-ropsten.gateway.pokt.network";
        break;
      default:
        oe.throwError("unsupported network", d.errors.INVALID_ARGUMENT, {
          argument: "network",
          value: t
        });
    }
    const o = `https://${r}/v1/lb/${e.applicationId}`, s = { headers: {}, url: o };
    return e.applicationSecretKey != null && (s.user = "", s.password = e.applicationSecretKey), s;
  }
  isCommunityResource() {
    return this.applicationId === ne;
  }
}
const se = new d(b);
function Ge(n, t) {
  if (n == null && (n = "homestead"), typeof n == "string") {
    const r = n.match(/^(ws|http)s?:/i);
    if (r)
      switch (r[1].toLowerCase()) {
        case "http":
        case "https":
          return new O(n);
        case "ws":
        case "wss":
          return new M(n);
        default:
          se.throwArgumentError("unsupported URL scheme", "network", n);
      }
  }
  const e = ge(n);
  return (!e || !e._defaultProvider) && se.throwError("unsupported getDefaultProvider network", d.errors.NETWORK_ERROR, {
    operation: "getDefaultProvider",
    network: n
  }), e._defaultProvider({
    FallbackProvider: Be,
    AlchemyProvider: le,
    AnkrProvider: Pe,
    CloudflareProvider: Te,
    EtherscanProvider: Se,
    InfuraProvider: ue,
    JsonRpcProvider: O,
    NodesmithProvider: $e,
    PocketProvider: Le,
    Web3Provider: me,
    IpcProvider: Ue
  }, t);
}
export {
  le as AlchemyProvider,
  Ee as AlchemyWebSocketProvider,
  Pe as AnkrProvider,
  He as BaseProvider,
  Te as CloudflareProvider,
  Se as EtherscanProvider,
  Be as FallbackProvider,
  Ke as Formatter,
  ue as InfuraProvider,
  qe as InfuraWebSocketProvider,
  Ue as IpcProvider,
  Fe as JsonRpcBatchProvider,
  ze as JsonRpcProvider,
  Ve as JsonRpcSigner,
  $e as NodesmithProvider,
  Le as PocketProvider,
  Xe as Provider,
  Qe as Resolver,
  ye as StaticJsonRpcProvider,
  k as UrlJsonRpcProvider,
  Ye as Web3Provider,
  M as WebSocketProvider,
  Ge as getDefaultProvider,
  Ze as getNetwork,
  et as isCommunityResourcable,
  tt as isCommunityResource,
  rt as showThrottleMessage
};
