import { i as dr, g as pr, d as mr, a as Ze, s as gr, r as De, b as Be, c as vr, m as Ue } from "./mobile.4bf08e4b.mjs";
import { bn as yr, bo as Mt, bp as Mr } from "./index.55b2d290.mjs";
const _r = [
  "session_request",
  "session_update",
  "exchange_key",
  "connect",
  "disconnect",
  "display_uri",
  "modal_closed",
  "transport_open",
  "transport_close",
  "transport_error"
], Je = [
  "eth_sendTransaction",
  "eth_signTransaction",
  "eth_sign",
  "eth_signTypedData",
  "eth_signTypedData_v1",
  "eth_signTypedData_v2",
  "eth_signTypedData_v3",
  "eth_signTypedData_v4",
  "personal_sign",
  "wallet_addEthereumChain",
  "wallet_switchEthereumChain",
  "wallet_getPermissions",
  "wallet_requestPermissions",
  "wallet_registerOnboarding",
  "wallet_watchAsset",
  "wallet_scanQRCode"
];
var We = { exports: {} };
(function(s) {
  (function(i, a) {
    function p(l, t) {
      if (!l)
        throw new Error(t || "Assertion failed");
    }
    function g(l, t) {
      l.super_ = t;
      var r = function() {
      };
      r.prototype = t.prototype, l.prototype = new r(), l.prototype.constructor = l;
    }
    function c(l, t, r) {
      if (c.isBN(l))
        return l;
      this.negative = 0, this.words = null, this.length = 0, this.red = null, l !== null && ((t === "le" || t === "be") && (r = t, t = 10), this._init(l || 0, t || 10, r || "be"));
    }
    typeof i == "object" ? i.exports = c : a.BN = c, c.BN = c, c.wordSize = 26;
    var k;
    try {
      k = yr.Buffer;
    } catch {
    }
    c.isBN = function(t) {
      return t instanceof c ? !0 : t !== null && typeof t == "object" && t.constructor.wordSize === c.wordSize && Array.isArray(t.words);
    }, c.max = function(t, r) {
      return t.cmp(r) > 0 ? t : r;
    }, c.min = function(t, r) {
      return t.cmp(r) < 0 ? t : r;
    }, c.prototype._init = function(t, r, n) {
      if (typeof t == "number")
        return this._initNumber(t, r, n);
      if (typeof t == "object")
        return this._initArray(t, r, n);
      r === "hex" && (r = 16), p(r === (r | 0) && r >= 2 && r <= 36), t = t.toString().replace(/\s+/g, "");
      var o = 0;
      t[0] === "-" && o++, r === 16 ? this._parseHex(t, o) : this._parseBase(t, r, o), t[0] === "-" && (this.negative = 1), this.strip(), n === "le" && this._initArray(this.toArray(), r, n);
    }, c.prototype._initNumber = function(t, r, n) {
      t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [t & 67108863], this.length = 1) : t < 4503599627370496 ? (this.words = [
        t & 67108863,
        t / 67108864 & 67108863
      ], this.length = 2) : (p(t < 9007199254740992), this.words = [
        t & 67108863,
        t / 67108864 & 67108863,
        1
      ], this.length = 3), n === "le" && this._initArray(this.toArray(), r, n);
    }, c.prototype._initArray = function(t, r, n) {
      if (p(typeof t.length == "number"), t.length <= 0)
        return this.words = [0], this.length = 1, this;
      this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
      for (var o = 0; o < this.length; o++)
        this.words[o] = 0;
      var u, d, m = 0;
      if (n === "be")
        for (o = t.length - 1, u = 0; o >= 0; o -= 3)
          d = t[o] | t[o - 1] << 8 | t[o - 2] << 16, this.words[u] |= d << m & 67108863, this.words[u + 1] = d >>> 26 - m & 67108863, m += 24, m >= 26 && (m -= 26, u++);
      else if (n === "le")
        for (o = 0, u = 0; o < t.length; o += 3)
          d = t[o] | t[o + 1] << 8 | t[o + 2] << 16, this.words[u] |= d << m & 67108863, this.words[u + 1] = d >>> 26 - m & 67108863, m += 24, m >= 26 && (m -= 26, u++);
      return this.strip();
    };
    function mt(l, t, r) {
      for (var n = 0, o = Math.min(l.length, r), u = t; u < o; u++) {
        var d = l.charCodeAt(u) - 48;
        n <<= 4, d >= 49 && d <= 54 ? n |= d - 49 + 10 : d >= 17 && d <= 22 ? n |= d - 17 + 10 : n |= d & 15;
      }
      return n;
    }
    c.prototype._parseHex = function(t, r) {
      this.length = Math.ceil((t.length - r) / 6), this.words = new Array(this.length);
      for (var n = 0; n < this.length; n++)
        this.words[n] = 0;
      var o, u, d = 0;
      for (n = t.length - 6, o = 0; n >= r; n -= 6)
        u = mt(t, n, n + 6), this.words[o] |= u << d & 67108863, this.words[o + 1] |= u >>> 26 - d & 4194303, d += 24, d >= 26 && (d -= 26, o++);
      n + 6 !== r && (u = mt(t, r, n + 6), this.words[o] |= u << d & 67108863, this.words[o + 1] |= u >>> 26 - d & 4194303), this.strip();
    };
    function E(l, t, r, n) {
      for (var o = 0, u = Math.min(l.length, r), d = t; d < u; d++) {
        var m = l.charCodeAt(d) - 48;
        o *= n, m >= 49 ? o += m - 49 + 10 : m >= 17 ? o += m - 17 + 10 : o += m;
      }
      return o;
    }
    c.prototype._parseBase = function(t, r, n) {
      this.words = [0], this.length = 1;
      for (var o = 0, u = 1; u <= 67108863; u *= r)
        o++;
      o--, u = u / r | 0;
      for (var d = t.length - n, m = d % o, h = Math.min(d, d - m) + n, e = 0, f = n; f < h; f += o)
        e = E(t, f, f + o, r), this.imuln(u), this.words[0] + e < 67108864 ? this.words[0] += e : this._iaddn(e);
      if (m !== 0) {
        var _ = 1;
        for (e = E(t, f, t.length, r), f = 0; f < m; f++)
          _ *= r;
        this.imuln(_), this.words[0] + e < 67108864 ? this.words[0] += e : this._iaddn(e);
      }
    }, c.prototype.copy = function(t) {
      t.words = new Array(this.length);
      for (var r = 0; r < this.length; r++)
        t.words[r] = this.words[r];
      t.length = this.length, t.negative = this.negative, t.red = this.red;
    }, c.prototype.clone = function() {
      var t = new c(null);
      return this.copy(t), t;
    }, c.prototype._expand = function(t) {
      for (; this.length < t; )
        this.words[this.length++] = 0;
      return this;
    }, c.prototype.strip = function() {
      for (; this.length > 1 && this.words[this.length - 1] === 0; )
        this.length--;
      return this._normSign();
    }, c.prototype._normSign = function() {
      return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this;
    }, c.prototype.inspect = function() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    };
    var gt = [
      "",
      "0",
      "00",
      "000",
      "0000",
      "00000",
      "000000",
      "0000000",
      "00000000",
      "000000000",
      "0000000000",
      "00000000000",
      "000000000000",
      "0000000000000",
      "00000000000000",
      "000000000000000",
      "0000000000000000",
      "00000000000000000",
      "000000000000000000",
      "0000000000000000000",
      "00000000000000000000",
      "000000000000000000000",
      "0000000000000000000000",
      "00000000000000000000000",
      "000000000000000000000000",
      "0000000000000000000000000"
    ], kt = [
      0,
      0,
      25,
      16,
      12,
      11,
      10,
      9,
      8,
      8,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ], _t = [
      0,
      0,
      33554432,
      43046721,
      16777216,
      48828125,
      60466176,
      40353607,
      16777216,
      43046721,
      1e7,
      19487171,
      35831808,
      62748517,
      7529536,
      11390625,
      16777216,
      24137569,
      34012224,
      47045881,
      64e6,
      4084101,
      5153632,
      6436343,
      7962624,
      9765625,
      11881376,
      14348907,
      17210368,
      20511149,
      243e5,
      28629151,
      33554432,
      39135393,
      45435424,
      52521875,
      60466176
    ];
    c.prototype.toString = function(t, r) {
      t = t || 10, r = r | 0 || 1;
      var n;
      if (t === 16 || t === "hex") {
        n = "";
        for (var o = 0, u = 0, d = 0; d < this.length; d++) {
          var m = this.words[d], h = ((m << o | u) & 16777215).toString(16);
          u = m >>> 24 - o & 16777215, u !== 0 || d !== this.length - 1 ? n = gt[6 - h.length] + h + n : n = h + n, o += 2, o >= 26 && (o -= 26, d--);
        }
        for (u !== 0 && (n = u.toString(16) + n); n.length % r !== 0; )
          n = "0" + n;
        return this.negative !== 0 && (n = "-" + n), n;
      }
      if (t === (t | 0) && t >= 2 && t <= 36) {
        var e = kt[t], f = _t[t];
        n = "";
        var _ = this.clone();
        for (_.negative = 0; !_.isZero(); ) {
          var b = _.modn(f).toString(t);
          _ = _.idivn(f), _.isZero() ? n = b + n : n = gt[e - b.length] + b + n;
        }
        for (this.isZero() && (n = "0" + n); n.length % r !== 0; )
          n = "0" + n;
        return this.negative !== 0 && (n = "-" + n), n;
      }
      p(!1, "Base should be between 2 and 36");
    }, c.prototype.toNumber = function() {
      var t = this.words[0];
      return this.length === 2 ? t += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? t += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && p(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -t : t;
    }, c.prototype.toJSON = function() {
      return this.toString(16);
    }, c.prototype.toBuffer = function(t, r) {
      return p(typeof k < "u"), this.toArrayLike(k, t, r);
    }, c.prototype.toArray = function(t, r) {
      return this.toArrayLike(Array, t, r);
    }, c.prototype.toArrayLike = function(t, r, n) {
      var o = this.byteLength(), u = n || Math.max(1, o);
      p(o <= u, "byte array longer than desired length"), p(u > 0, "Requested array length <= 0"), this.strip();
      var d = r === "le", m = new t(u), h, e, f = this.clone();
      if (d) {
        for (e = 0; !f.isZero(); e++)
          h = f.andln(255), f.iushrn(8), m[e] = h;
        for (; e < u; e++)
          m[e] = 0;
      } else {
        for (e = 0; e < u - o; e++)
          m[e] = 0;
        for (e = 0; !f.isZero(); e++)
          h = f.andln(255), f.iushrn(8), m[u - e - 1] = h;
      }
      return m;
    }, Math.clz32 ? c.prototype._countBits = function(t) {
      return 32 - Math.clz32(t);
    } : c.prototype._countBits = function(t) {
      var r = t, n = 0;
      return r >= 4096 && (n += 13, r >>>= 13), r >= 64 && (n += 7, r >>>= 7), r >= 8 && (n += 4, r >>>= 4), r >= 2 && (n += 2, r >>>= 2), n + r;
    }, c.prototype._zeroBits = function(t) {
      if (t === 0)
        return 26;
      var r = t, n = 0;
      return (r & 8191) === 0 && (n += 13, r >>>= 13), (r & 127) === 0 && (n += 7, r >>>= 7), (r & 15) === 0 && (n += 4, r >>>= 4), (r & 3) === 0 && (n += 2, r >>>= 2), (r & 1) === 0 && n++, n;
    }, c.prototype.bitLength = function() {
      var t = this.words[this.length - 1], r = this._countBits(t);
      return (this.length - 1) * 26 + r;
    };
    function wt(l) {
      for (var t = new Array(l.bitLength()), r = 0; r < t.length; r++) {
        var n = r / 26 | 0, o = r % 26;
        t[r] = (l.words[n] & 1 << o) >>> o;
      }
      return t;
    }
    c.prototype.zeroBits = function() {
      if (this.isZero())
        return 0;
      for (var t = 0, r = 0; r < this.length; r++) {
        var n = this._zeroBits(this.words[r]);
        if (t += n, n !== 26)
          break;
      }
      return t;
    }, c.prototype.byteLength = function() {
      return Math.ceil(this.bitLength() / 8);
    }, c.prototype.toTwos = function(t) {
      return this.negative !== 0 ? this.abs().inotn(t).iaddn(1) : this.clone();
    }, c.prototype.fromTwos = function(t) {
      return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone();
    }, c.prototype.isNeg = function() {
      return this.negative !== 0;
    }, c.prototype.neg = function() {
      return this.clone().ineg();
    }, c.prototype.ineg = function() {
      return this.isZero() || (this.negative ^= 1), this;
    }, c.prototype.iuor = function(t) {
      for (; this.length < t.length; )
        this.words[this.length++] = 0;
      for (var r = 0; r < t.length; r++)
        this.words[r] = this.words[r] | t.words[r];
      return this.strip();
    }, c.prototype.ior = function(t) {
      return p((this.negative | t.negative) === 0), this.iuor(t);
    }, c.prototype.or = function(t) {
      return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this);
    }, c.prototype.uor = function(t) {
      return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this);
    }, c.prototype.iuand = function(t) {
      var r;
      this.length > t.length ? r = t : r = this;
      for (var n = 0; n < r.length; n++)
        this.words[n] = this.words[n] & t.words[n];
      return this.length = r.length, this.strip();
    }, c.prototype.iand = function(t) {
      return p((this.negative | t.negative) === 0), this.iuand(t);
    }, c.prototype.and = function(t) {
      return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this);
    }, c.prototype.uand = function(t) {
      return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this);
    }, c.prototype.iuxor = function(t) {
      var r, n;
      this.length > t.length ? (r = this, n = t) : (r = t, n = this);
      for (var o = 0; o < n.length; o++)
        this.words[o] = r.words[o] ^ n.words[o];
      if (this !== r)
        for (; o < r.length; o++)
          this.words[o] = r.words[o];
      return this.length = r.length, this.strip();
    }, c.prototype.ixor = function(t) {
      return p((this.negative | t.negative) === 0), this.iuxor(t);
    }, c.prototype.xor = function(t) {
      return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this);
    }, c.prototype.uxor = function(t) {
      return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this);
    }, c.prototype.inotn = function(t) {
      p(typeof t == "number" && t >= 0);
      var r = Math.ceil(t / 26) | 0, n = t % 26;
      this._expand(r), n > 0 && r--;
      for (var o = 0; o < r; o++)
        this.words[o] = ~this.words[o] & 67108863;
      return n > 0 && (this.words[o] = ~this.words[o] & 67108863 >> 26 - n), this.strip();
    }, c.prototype.notn = function(t) {
      return this.clone().inotn(t);
    }, c.prototype.setn = function(t, r) {
      p(typeof t == "number" && t >= 0);
      var n = t / 26 | 0, o = t % 26;
      return this._expand(n + 1), r ? this.words[n] = this.words[n] | 1 << o : this.words[n] = this.words[n] & ~(1 << o), this.strip();
    }, c.prototype.iadd = function(t) {
      var r;
      if (this.negative !== 0 && t.negative === 0)
        return this.negative = 0, r = this.isub(t), this.negative ^= 1, this._normSign();
      if (this.negative === 0 && t.negative !== 0)
        return t.negative = 0, r = this.isub(t), t.negative = 1, r._normSign();
      var n, o;
      this.length > t.length ? (n = this, o = t) : (n = t, o = this);
      for (var u = 0, d = 0; d < o.length; d++)
        r = (n.words[d] | 0) + (o.words[d] | 0) + u, this.words[d] = r & 67108863, u = r >>> 26;
      for (; u !== 0 && d < n.length; d++)
        r = (n.words[d] | 0) + u, this.words[d] = r & 67108863, u = r >>> 26;
      if (this.length = n.length, u !== 0)
        this.words[this.length] = u, this.length++;
      else if (n !== this)
        for (; d < n.length; d++)
          this.words[d] = n.words[d];
      return this;
    }, c.prototype.add = function(t) {
      var r;
      return t.negative !== 0 && this.negative === 0 ? (t.negative = 0, r = this.sub(t), t.negative ^= 1, r) : t.negative === 0 && this.negative !== 0 ? (this.negative = 0, r = t.sub(this), this.negative = 1, r) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this);
    }, c.prototype.isub = function(t) {
      if (t.negative !== 0) {
        t.negative = 0;
        var r = this.iadd(t);
        return t.negative = 1, r._normSign();
      } else if (this.negative !== 0)
        return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
      var n = this.cmp(t);
      if (n === 0)
        return this.negative = 0, this.length = 1, this.words[0] = 0, this;
      var o, u;
      n > 0 ? (o = this, u = t) : (o = t, u = this);
      for (var d = 0, m = 0; m < u.length; m++)
        r = (o.words[m] | 0) - (u.words[m] | 0) + d, d = r >> 26, this.words[m] = r & 67108863;
      for (; d !== 0 && m < o.length; m++)
        r = (o.words[m] | 0) + d, d = r >> 26, this.words[m] = r & 67108863;
      if (d === 0 && m < o.length && o !== this)
        for (; m < o.length; m++)
          this.words[m] = o.words[m];
      return this.length = Math.max(this.length, m), o !== this && (this.negative = 1), this.strip();
    }, c.prototype.sub = function(t) {
      return this.clone().isub(t);
    };
    function yt(l, t, r) {
      r.negative = t.negative ^ l.negative;
      var n = l.length + t.length | 0;
      r.length = n, n = n - 1 | 0;
      var o = l.words[0] | 0, u = t.words[0] | 0, d = o * u, m = d & 67108863, h = d / 67108864 | 0;
      r.words[0] = m;
      for (var e = 1; e < n; e++) {
        for (var f = h >>> 26, _ = h & 67108863, b = Math.min(e, t.length - 1), S = Math.max(0, e - l.length + 1); S <= b; S++) {
          var x = e - S | 0;
          o = l.words[x] | 0, u = t.words[S] | 0, d = o * u + _, f += d / 67108864 | 0, _ = d & 67108863;
        }
        r.words[e] = _ | 0, h = f | 0;
      }
      return h !== 0 ? r.words[e] = h | 0 : r.length--, r.strip();
    }
    var Ot = function(t, r, n) {
      var o = t.words, u = r.words, d = n.words, m = 0, h, e, f, _ = o[0] | 0, b = _ & 8191, S = _ >>> 13, x = o[1] | 0, T = x & 8191, O = x >>> 13, bt = o[2] | 0, q = bt & 8191, A = bt >>> 13, ye = o[3] | 0, B = ye & 8191, U = ye >>> 13, Me = o[4] | 0, F = Me & 8191, L = Me >>> 13, _e = o[5] | 0, P = _e & 8191, j = _e >>> 13, we = o[6] | 0, H = we & 8191, $ = we >>> 13, be = o[7] | 0, Z = be & 8191, D = be >>> 13, Se = o[8] | 0, J = Se & 8191, W = Se >>> 13, xe = o[9] | 0, z = xe & 8191, K = xe >>> 13, Re = u[0] | 0, Q = Re & 8191, G = Re >>> 13, Ie = u[1] | 0, V = Ie & 8191, Y = Ie >>> 13, ke = u[2] | 0, X = ke & 8191, tt = ke >>> 13, Ee = u[3] | 0, et = Ee & 8191, rt = Ee >>> 13, Te = u[4] | 0, it = Te & 8191, nt = Te >>> 13, Oe = u[5] | 0, st = Oe & 8191, ot = Oe >>> 13, qe = u[6] | 0, at = qe & 8191, ht = qe >>> 13, Ae = u[7] | 0, ft = Ae & 8191, ut = Ae >>> 13, Ce = u[8] | 0, ct = Ce & 8191, lt = Ce >>> 13, Ne = u[9] | 0, dt = Ne & 8191, pt = Ne >>> 13;
      n.negative = t.negative ^ r.negative, n.length = 19, h = Math.imul(b, Q), e = Math.imul(b, G), e = e + Math.imul(S, Q) | 0, f = Math.imul(S, G);
      var $t = (m + h | 0) + ((e & 8191) << 13) | 0;
      m = (f + (e >>> 13) | 0) + ($t >>> 26) | 0, $t &= 67108863, h = Math.imul(T, Q), e = Math.imul(T, G), e = e + Math.imul(O, Q) | 0, f = Math.imul(O, G), h = h + Math.imul(b, V) | 0, e = e + Math.imul(b, Y) | 0, e = e + Math.imul(S, V) | 0, f = f + Math.imul(S, Y) | 0;
      var Zt = (m + h | 0) + ((e & 8191) << 13) | 0;
      m = (f + (e >>> 13) | 0) + (Zt >>> 26) | 0, Zt &= 67108863, h = Math.imul(q, Q), e = Math.imul(q, G), e = e + Math.imul(A, Q) | 0, f = Math.imul(A, G), h = h + Math.imul(T, V) | 0, e = e + Math.imul(T, Y) | 0, e = e + Math.imul(O, V) | 0, f = f + Math.imul(O, Y) | 0, h = h + Math.imul(b, X) | 0, e = e + Math.imul(b, tt) | 0, e = e + Math.imul(S, X) | 0, f = f + Math.imul(S, tt) | 0;
      var Dt = (m + h | 0) + ((e & 8191) << 13) | 0;
      m = (f + (e >>> 13) | 0) + (Dt >>> 26) | 0, Dt &= 67108863, h = Math.imul(B, Q), e = Math.imul(B, G), e = e + Math.imul(U, Q) | 0, f = Math.imul(U, G), h = h + Math.imul(q, V) | 0, e = e + Math.imul(q, Y) | 0, e = e + Math.imul(A, V) | 0, f = f + Math.imul(A, Y) | 0, h = h + Math.imul(T, X) | 0, e = e + Math.imul(T, tt) | 0, e = e + Math.imul(O, X) | 0, f = f + Math.imul(O, tt) | 0, h = h + Math.imul(b, et) | 0, e = e + Math.imul(b, rt) | 0, e = e + Math.imul(S, et) | 0, f = f + Math.imul(S, rt) | 0;
      var Jt = (m + h | 0) + ((e & 8191) << 13) | 0;
      m = (f + (e >>> 13) | 0) + (Jt >>> 26) | 0, Jt &= 67108863, h = Math.imul(F, Q), e = Math.imul(F, G), e = e + Math.imul(L, Q) | 0, f = Math.imul(L, G), h = h + Math.imul(B, V) | 0, e = e + Math.imul(B, Y) | 0, e = e + Math.imul(U, V) | 0, f = f + Math.imul(U, Y) | 0, h = h + Math.imul(q, X) | 0, e = e + Math.imul(q, tt) | 0, e = e + Math.imul(A, X) | 0, f = f + Math.imul(A, tt) | 0, h = h + Math.imul(T, et) | 0, e = e + Math.imul(T, rt) | 0, e = e + Math.imul(O, et) | 0, f = f + Math.imul(O, rt) | 0, h = h + Math.imul(b, it) | 0, e = e + Math.imul(b, nt) | 0, e = e + Math.imul(S, it) | 0, f = f + Math.imul(S, nt) | 0;
      var Wt = (m + h | 0) + ((e & 8191) << 13) | 0;
      m = (f + (e >>> 13) | 0) + (Wt >>> 26) | 0, Wt &= 67108863, h = Math.imul(P, Q), e = Math.imul(P, G), e = e + Math.imul(j, Q) | 0, f = Math.imul(j, G), h = h + Math.imul(F, V) | 0, e = e + Math.imul(F, Y) | 0, e = e + Math.imul(L, V) | 0, f = f + Math.imul(L, Y) | 0, h = h + Math.imul(B, X) | 0, e = e + Math.imul(B, tt) | 0, e = e + Math.imul(U, X) | 0, f = f + Math.imul(U, tt) | 0, h = h + Math.imul(q, et) | 0, e = e + Math.imul(q, rt) | 0, e = e + Math.imul(A, et) | 0, f = f + Math.imul(A, rt) | 0, h = h + Math.imul(T, it) | 0, e = e + Math.imul(T, nt) | 0, e = e + Math.imul(O, it) | 0, f = f + Math.imul(O, nt) | 0, h = h + Math.imul(b, st) | 0, e = e + Math.imul(b, ot) | 0, e = e + Math.imul(S, st) | 0, f = f + Math.imul(S, ot) | 0;
      var zt = (m + h | 0) + ((e & 8191) << 13) | 0;
      m = (f + (e >>> 13) | 0) + (zt >>> 26) | 0, zt &= 67108863, h = Math.imul(H, Q), e = Math.imul(H, G), e = e + Math.imul($, Q) | 0, f = Math.imul($, G), h = h + Math.imul(P, V) | 0, e = e + Math.imul(P, Y) | 0, e = e + Math.imul(j, V) | 0, f = f + Math.imul(j, Y) | 0, h = h + Math.imul(F, X) | 0, e = e + Math.imul(F, tt) | 0, e = e + Math.imul(L, X) | 0, f = f + Math.imul(L, tt) | 0, h = h + Math.imul(B, et) | 0, e = e + Math.imul(B, rt) | 0, e = e + Math.imul(U, et) | 0, f = f + Math.imul(U, rt) | 0, h = h + Math.imul(q, it) | 0, e = e + Math.imul(q, nt) | 0, e = e + Math.imul(A, it) | 0, f = f + Math.imul(A, nt) | 0, h = h + Math.imul(T, st) | 0, e = e + Math.imul(T, ot) | 0, e = e + Math.imul(O, st) | 0, f = f + Math.imul(O, ot) | 0, h = h + Math.imul(b, at) | 0, e = e + Math.imul(b, ht) | 0, e = e + Math.imul(S, at) | 0, f = f + Math.imul(S, ht) | 0;
      var Kt = (m + h | 0) + ((e & 8191) << 13) | 0;
      m = (f + (e >>> 13) | 0) + (Kt >>> 26) | 0, Kt &= 67108863, h = Math.imul(Z, Q), e = Math.imul(Z, G), e = e + Math.imul(D, Q) | 0, f = Math.imul(D, G), h = h + Math.imul(H, V) | 0, e = e + Math.imul(H, Y) | 0, e = e + Math.imul($, V) | 0, f = f + Math.imul($, Y) | 0, h = h + Math.imul(P, X) | 0, e = e + Math.imul(P, tt) | 0, e = e + Math.imul(j, X) | 0, f = f + Math.imul(j, tt) | 0, h = h + Math.imul(F, et) | 0, e = e + Math.imul(F, rt) | 0, e = e + Math.imul(L, et) | 0, f = f + Math.imul(L, rt) | 0, h = h + Math.imul(B, it) | 0, e = e + Math.imul(B, nt) | 0, e = e + Math.imul(U, it) | 0, f = f + Math.imul(U, nt) | 0, h = h + Math.imul(q, st) | 0, e = e + Math.imul(q, ot) | 0, e = e + Math.imul(A, st) | 0, f = f + Math.imul(A, ot) | 0, h = h + Math.imul(T, at) | 0, e = e + Math.imul(T, ht) | 0, e = e + Math.imul(O, at) | 0, f = f + Math.imul(O, ht) | 0, h = h + Math.imul(b, ft) | 0, e = e + Math.imul(b, ut) | 0, e = e + Math.imul(S, ft) | 0, f = f + Math.imul(S, ut) | 0;
      var Qt = (m + h | 0) + ((e & 8191) << 13) | 0;
      m = (f + (e >>> 13) | 0) + (Qt >>> 26) | 0, Qt &= 67108863, h = Math.imul(J, Q), e = Math.imul(J, G), e = e + Math.imul(W, Q) | 0, f = Math.imul(W, G), h = h + Math.imul(Z, V) | 0, e = e + Math.imul(Z, Y) | 0, e = e + Math.imul(D, V) | 0, f = f + Math.imul(D, Y) | 0, h = h + Math.imul(H, X) | 0, e = e + Math.imul(H, tt) | 0, e = e + Math.imul($, X) | 0, f = f + Math.imul($, tt) | 0, h = h + Math.imul(P, et) | 0, e = e + Math.imul(P, rt) | 0, e = e + Math.imul(j, et) | 0, f = f + Math.imul(j, rt) | 0, h = h + Math.imul(F, it) | 0, e = e + Math.imul(F, nt) | 0, e = e + Math.imul(L, it) | 0, f = f + Math.imul(L, nt) | 0, h = h + Math.imul(B, st) | 0, e = e + Math.imul(B, ot) | 0, e = e + Math.imul(U, st) | 0, f = f + Math.imul(U, ot) | 0, h = h + Math.imul(q, at) | 0, e = e + Math.imul(q, ht) | 0, e = e + Math.imul(A, at) | 0, f = f + Math.imul(A, ht) | 0, h = h + Math.imul(T, ft) | 0, e = e + Math.imul(T, ut) | 0, e = e + Math.imul(O, ft) | 0, f = f + Math.imul(O, ut) | 0, h = h + Math.imul(b, ct) | 0, e = e + Math.imul(b, lt) | 0, e = e + Math.imul(S, ct) | 0, f = f + Math.imul(S, lt) | 0;
      var Gt = (m + h | 0) + ((e & 8191) << 13) | 0;
      m = (f + (e >>> 13) | 0) + (Gt >>> 26) | 0, Gt &= 67108863, h = Math.imul(z, Q), e = Math.imul(z, G), e = e + Math.imul(K, Q) | 0, f = Math.imul(K, G), h = h + Math.imul(J, V) | 0, e = e + Math.imul(J, Y) | 0, e = e + Math.imul(W, V) | 0, f = f + Math.imul(W, Y) | 0, h = h + Math.imul(Z, X) | 0, e = e + Math.imul(Z, tt) | 0, e = e + Math.imul(D, X) | 0, f = f + Math.imul(D, tt) | 0, h = h + Math.imul(H, et) | 0, e = e + Math.imul(H, rt) | 0, e = e + Math.imul($, et) | 0, f = f + Math.imul($, rt) | 0, h = h + Math.imul(P, it) | 0, e = e + Math.imul(P, nt) | 0, e = e + Math.imul(j, it) | 0, f = f + Math.imul(j, nt) | 0, h = h + Math.imul(F, st) | 0, e = e + Math.imul(F, ot) | 0, e = e + Math.imul(L, st) | 0, f = f + Math.imul(L, ot) | 0, h = h + Math.imul(B, at) | 0, e = e + Math.imul(B, ht) | 0, e = e + Math.imul(U, at) | 0, f = f + Math.imul(U, ht) | 0, h = h + Math.imul(q, ft) | 0, e = e + Math.imul(q, ut) | 0, e = e + Math.imul(A, ft) | 0, f = f + Math.imul(A, ut) | 0, h = h + Math.imul(T, ct) | 0, e = e + Math.imul(T, lt) | 0, e = e + Math.imul(O, ct) | 0, f = f + Math.imul(O, lt) | 0, h = h + Math.imul(b, dt) | 0, e = e + Math.imul(b, pt) | 0, e = e + Math.imul(S, dt) | 0, f = f + Math.imul(S, pt) | 0;
      var Vt = (m + h | 0) + ((e & 8191) << 13) | 0;
      m = (f + (e >>> 13) | 0) + (Vt >>> 26) | 0, Vt &= 67108863, h = Math.imul(z, V), e = Math.imul(z, Y), e = e + Math.imul(K, V) | 0, f = Math.imul(K, Y), h = h + Math.imul(J, X) | 0, e = e + Math.imul(J, tt) | 0, e = e + Math.imul(W, X) | 0, f = f + Math.imul(W, tt) | 0, h = h + Math.imul(Z, et) | 0, e = e + Math.imul(Z, rt) | 0, e = e + Math.imul(D, et) | 0, f = f + Math.imul(D, rt) | 0, h = h + Math.imul(H, it) | 0, e = e + Math.imul(H, nt) | 0, e = e + Math.imul($, it) | 0, f = f + Math.imul($, nt) | 0, h = h + Math.imul(P, st) | 0, e = e + Math.imul(P, ot) | 0, e = e + Math.imul(j, st) | 0, f = f + Math.imul(j, ot) | 0, h = h + Math.imul(F, at) | 0, e = e + Math.imul(F, ht) | 0, e = e + Math.imul(L, at) | 0, f = f + Math.imul(L, ht) | 0, h = h + Math.imul(B, ft) | 0, e = e + Math.imul(B, ut) | 0, e = e + Math.imul(U, ft) | 0, f = f + Math.imul(U, ut) | 0, h = h + Math.imul(q, ct) | 0, e = e + Math.imul(q, lt) | 0, e = e + Math.imul(A, ct) | 0, f = f + Math.imul(A, lt) | 0, h = h + Math.imul(T, dt) | 0, e = e + Math.imul(T, pt) | 0, e = e + Math.imul(O, dt) | 0, f = f + Math.imul(O, pt) | 0;
      var Yt = (m + h | 0) + ((e & 8191) << 13) | 0;
      m = (f + (e >>> 13) | 0) + (Yt >>> 26) | 0, Yt &= 67108863, h = Math.imul(z, X), e = Math.imul(z, tt), e = e + Math.imul(K, X) | 0, f = Math.imul(K, tt), h = h + Math.imul(J, et) | 0, e = e + Math.imul(J, rt) | 0, e = e + Math.imul(W, et) | 0, f = f + Math.imul(W, rt) | 0, h = h + Math.imul(Z, it) | 0, e = e + Math.imul(Z, nt) | 0, e = e + Math.imul(D, it) | 0, f = f + Math.imul(D, nt) | 0, h = h + Math.imul(H, st) | 0, e = e + Math.imul(H, ot) | 0, e = e + Math.imul($, st) | 0, f = f + Math.imul($, ot) | 0, h = h + Math.imul(P, at) | 0, e = e + Math.imul(P, ht) | 0, e = e + Math.imul(j, at) | 0, f = f + Math.imul(j, ht) | 0, h = h + Math.imul(F, ft) | 0, e = e + Math.imul(F, ut) | 0, e = e + Math.imul(L, ft) | 0, f = f + Math.imul(L, ut) | 0, h = h + Math.imul(B, ct) | 0, e = e + Math.imul(B, lt) | 0, e = e + Math.imul(U, ct) | 0, f = f + Math.imul(U, lt) | 0, h = h + Math.imul(q, dt) | 0, e = e + Math.imul(q, pt) | 0, e = e + Math.imul(A, dt) | 0, f = f + Math.imul(A, pt) | 0;
      var Xt = (m + h | 0) + ((e & 8191) << 13) | 0;
      m = (f + (e >>> 13) | 0) + (Xt >>> 26) | 0, Xt &= 67108863, h = Math.imul(z, et), e = Math.imul(z, rt), e = e + Math.imul(K, et) | 0, f = Math.imul(K, rt), h = h + Math.imul(J, it) | 0, e = e + Math.imul(J, nt) | 0, e = e + Math.imul(W, it) | 0, f = f + Math.imul(W, nt) | 0, h = h + Math.imul(Z, st) | 0, e = e + Math.imul(Z, ot) | 0, e = e + Math.imul(D, st) | 0, f = f + Math.imul(D, ot) | 0, h = h + Math.imul(H, at) | 0, e = e + Math.imul(H, ht) | 0, e = e + Math.imul($, at) | 0, f = f + Math.imul($, ht) | 0, h = h + Math.imul(P, ft) | 0, e = e + Math.imul(P, ut) | 0, e = e + Math.imul(j, ft) | 0, f = f + Math.imul(j, ut) | 0, h = h + Math.imul(F, ct) | 0, e = e + Math.imul(F, lt) | 0, e = e + Math.imul(L, ct) | 0, f = f + Math.imul(L, lt) | 0, h = h + Math.imul(B, dt) | 0, e = e + Math.imul(B, pt) | 0, e = e + Math.imul(U, dt) | 0, f = f + Math.imul(U, pt) | 0;
      var te = (m + h | 0) + ((e & 8191) << 13) | 0;
      m = (f + (e >>> 13) | 0) + (te >>> 26) | 0, te &= 67108863, h = Math.imul(z, it), e = Math.imul(z, nt), e = e + Math.imul(K, it) | 0, f = Math.imul(K, nt), h = h + Math.imul(J, st) | 0, e = e + Math.imul(J, ot) | 0, e = e + Math.imul(W, st) | 0, f = f + Math.imul(W, ot) | 0, h = h + Math.imul(Z, at) | 0, e = e + Math.imul(Z, ht) | 0, e = e + Math.imul(D, at) | 0, f = f + Math.imul(D, ht) | 0, h = h + Math.imul(H, ft) | 0, e = e + Math.imul(H, ut) | 0, e = e + Math.imul($, ft) | 0, f = f + Math.imul($, ut) | 0, h = h + Math.imul(P, ct) | 0, e = e + Math.imul(P, lt) | 0, e = e + Math.imul(j, ct) | 0, f = f + Math.imul(j, lt) | 0, h = h + Math.imul(F, dt) | 0, e = e + Math.imul(F, pt) | 0, e = e + Math.imul(L, dt) | 0, f = f + Math.imul(L, pt) | 0;
      var ee = (m + h | 0) + ((e & 8191) << 13) | 0;
      m = (f + (e >>> 13) | 0) + (ee >>> 26) | 0, ee &= 67108863, h = Math.imul(z, st), e = Math.imul(z, ot), e = e + Math.imul(K, st) | 0, f = Math.imul(K, ot), h = h + Math.imul(J, at) | 0, e = e + Math.imul(J, ht) | 0, e = e + Math.imul(W, at) | 0, f = f + Math.imul(W, ht) | 0, h = h + Math.imul(Z, ft) | 0, e = e + Math.imul(Z, ut) | 0, e = e + Math.imul(D, ft) | 0, f = f + Math.imul(D, ut) | 0, h = h + Math.imul(H, ct) | 0, e = e + Math.imul(H, lt) | 0, e = e + Math.imul($, ct) | 0, f = f + Math.imul($, lt) | 0, h = h + Math.imul(P, dt) | 0, e = e + Math.imul(P, pt) | 0, e = e + Math.imul(j, dt) | 0, f = f + Math.imul(j, pt) | 0;
      var re = (m + h | 0) + ((e & 8191) << 13) | 0;
      m = (f + (e >>> 13) | 0) + (re >>> 26) | 0, re &= 67108863, h = Math.imul(z, at), e = Math.imul(z, ht), e = e + Math.imul(K, at) | 0, f = Math.imul(K, ht), h = h + Math.imul(J, ft) | 0, e = e + Math.imul(J, ut) | 0, e = e + Math.imul(W, ft) | 0, f = f + Math.imul(W, ut) | 0, h = h + Math.imul(Z, ct) | 0, e = e + Math.imul(Z, lt) | 0, e = e + Math.imul(D, ct) | 0, f = f + Math.imul(D, lt) | 0, h = h + Math.imul(H, dt) | 0, e = e + Math.imul(H, pt) | 0, e = e + Math.imul($, dt) | 0, f = f + Math.imul($, pt) | 0;
      var ie = (m + h | 0) + ((e & 8191) << 13) | 0;
      m = (f + (e >>> 13) | 0) + (ie >>> 26) | 0, ie &= 67108863, h = Math.imul(z, ft), e = Math.imul(z, ut), e = e + Math.imul(K, ft) | 0, f = Math.imul(K, ut), h = h + Math.imul(J, ct) | 0, e = e + Math.imul(J, lt) | 0, e = e + Math.imul(W, ct) | 0, f = f + Math.imul(W, lt) | 0, h = h + Math.imul(Z, dt) | 0, e = e + Math.imul(Z, pt) | 0, e = e + Math.imul(D, dt) | 0, f = f + Math.imul(D, pt) | 0;
      var ne = (m + h | 0) + ((e & 8191) << 13) | 0;
      m = (f + (e >>> 13) | 0) + (ne >>> 26) | 0, ne &= 67108863, h = Math.imul(z, ct), e = Math.imul(z, lt), e = e + Math.imul(K, ct) | 0, f = Math.imul(K, lt), h = h + Math.imul(J, dt) | 0, e = e + Math.imul(J, pt) | 0, e = e + Math.imul(W, dt) | 0, f = f + Math.imul(W, pt) | 0;
      var se = (m + h | 0) + ((e & 8191) << 13) | 0;
      m = (f + (e >>> 13) | 0) + (se >>> 26) | 0, se &= 67108863, h = Math.imul(z, dt), e = Math.imul(z, pt), e = e + Math.imul(K, dt) | 0, f = Math.imul(K, pt);
      var oe = (m + h | 0) + ((e & 8191) << 13) | 0;
      return m = (f + (e >>> 13) | 0) + (oe >>> 26) | 0, oe &= 67108863, d[0] = $t, d[1] = Zt, d[2] = Dt, d[3] = Jt, d[4] = Wt, d[5] = zt, d[6] = Kt, d[7] = Qt, d[8] = Gt, d[9] = Vt, d[10] = Yt, d[11] = Xt, d[12] = te, d[13] = ee, d[14] = re, d[15] = ie, d[16] = ne, d[17] = se, d[18] = oe, m !== 0 && (d[19] = m, n.length++), n;
    };
    Math.imul || (Ot = yt);
    function Ft(l, t, r) {
      r.negative = t.negative ^ l.negative, r.length = l.length + t.length;
      for (var n = 0, o = 0, u = 0; u < r.length - 1; u++) {
        var d = o;
        o = 0;
        for (var m = n & 67108863, h = Math.min(u, t.length - 1), e = Math.max(0, u - l.length + 1); e <= h; e++) {
          var f = u - e, _ = l.words[f] | 0, b = t.words[e] | 0, S = _ * b, x = S & 67108863;
          d = d + (S / 67108864 | 0) | 0, x = x + m | 0, m = x & 67108863, d = d + (x >>> 26) | 0, o += d >>> 26, d &= 67108863;
        }
        r.words[u] = m, n = d, d = o;
      }
      return n !== 0 ? r.words[u] = n : r.length--, r.strip();
    }
    function v(l, t, r) {
      var n = new y();
      return n.mulp(l, t, r);
    }
    c.prototype.mulTo = function(t, r) {
      var n, o = this.length + t.length;
      return this.length === 10 && t.length === 10 ? n = Ot(this, t, r) : o < 63 ? n = yt(this, t, r) : o < 1024 ? n = Ft(this, t, r) : n = v(this, t, r), n;
    };
    function y(l, t) {
      this.x = l, this.y = t;
    }
    y.prototype.makeRBT = function(t) {
      for (var r = new Array(t), n = c.prototype._countBits(t) - 1, o = 0; o < t; o++)
        r[o] = this.revBin(o, n, t);
      return r;
    }, y.prototype.revBin = function(t, r, n) {
      if (t === 0 || t === n - 1)
        return t;
      for (var o = 0, u = 0; u < r; u++)
        o |= (t & 1) << r - u - 1, t >>= 1;
      return o;
    }, y.prototype.permute = function(t, r, n, o, u, d) {
      for (var m = 0; m < d; m++)
        o[m] = r[t[m]], u[m] = n[t[m]];
    }, y.prototype.transform = function(t, r, n, o, u, d) {
      this.permute(d, t, r, n, o, u);
      for (var m = 1; m < u; m <<= 1)
        for (var h = m << 1, e = Math.cos(2 * Math.PI / h), f = Math.sin(2 * Math.PI / h), _ = 0; _ < u; _ += h)
          for (var b = e, S = f, x = 0; x < m; x++) {
            var T = n[_ + x], O = o[_ + x], bt = n[_ + x + m], q = o[_ + x + m], A = b * bt - S * q;
            q = b * q + S * bt, bt = A, n[_ + x] = T + bt, o[_ + x] = O + q, n[_ + x + m] = T - bt, o[_ + x + m] = O - q, x !== h && (A = e * b - f * S, S = e * S + f * b, b = A);
          }
    }, y.prototype.guessLen13b = function(t, r) {
      var n = Math.max(r, t) | 1, o = n & 1, u = 0;
      for (n = n / 2 | 0; n; n = n >>> 1)
        u++;
      return 1 << u + 1 + o;
    }, y.prototype.conjugate = function(t, r, n) {
      if (!(n <= 1))
        for (var o = 0; o < n / 2; o++) {
          var u = t[o];
          t[o] = t[n - o - 1], t[n - o - 1] = u, u = r[o], r[o] = -r[n - o - 1], r[n - o - 1] = -u;
        }
    }, y.prototype.normalize13b = function(t, r) {
      for (var n = 0, o = 0; o < r / 2; o++) {
        var u = Math.round(t[2 * o + 1] / r) * 8192 + Math.round(t[2 * o] / r) + n;
        t[o] = u & 67108863, u < 67108864 ? n = 0 : n = u / 67108864 | 0;
      }
      return t;
    }, y.prototype.convert13b = function(t, r, n, o) {
      for (var u = 0, d = 0; d < r; d++)
        u = u + (t[d] | 0), n[2 * d] = u & 8191, u = u >>> 13, n[2 * d + 1] = u & 8191, u = u >>> 13;
      for (d = 2 * r; d < o; ++d)
        n[d] = 0;
      p(u === 0), p((u & -8192) === 0);
    }, y.prototype.stub = function(t) {
      for (var r = new Array(t), n = 0; n < t; n++)
        r[n] = 0;
      return r;
    }, y.prototype.mulp = function(t, r, n) {
      var o = 2 * this.guessLen13b(t.length, r.length), u = this.makeRBT(o), d = this.stub(o), m = new Array(o), h = new Array(o), e = new Array(o), f = new Array(o), _ = new Array(o), b = new Array(o), S = n.words;
      S.length = o, this.convert13b(t.words, t.length, m, o), this.convert13b(r.words, r.length, f, o), this.transform(m, d, h, e, o, u), this.transform(f, d, _, b, o, u);
      for (var x = 0; x < o; x++) {
        var T = h[x] * _[x] - e[x] * b[x];
        e[x] = h[x] * b[x] + e[x] * _[x], h[x] = T;
      }
      return this.conjugate(h, e, o), this.transform(h, e, S, d, o, u), this.conjugate(S, d, o), this.normalize13b(S, o), n.negative = t.negative ^ r.negative, n.length = t.length + r.length, n.strip();
    }, c.prototype.mul = function(t) {
      var r = new c(null);
      return r.words = new Array(this.length + t.length), this.mulTo(t, r);
    }, c.prototype.mulf = function(t) {
      var r = new c(null);
      return r.words = new Array(this.length + t.length), v(this, t, r);
    }, c.prototype.imul = function(t) {
      return this.clone().mulTo(t, this);
    }, c.prototype.imuln = function(t) {
      p(typeof t == "number"), p(t < 67108864);
      for (var r = 0, n = 0; n < this.length; n++) {
        var o = (this.words[n] | 0) * t, u = (o & 67108863) + (r & 67108863);
        r >>= 26, r += o / 67108864 | 0, r += u >>> 26, this.words[n] = u & 67108863;
      }
      return r !== 0 && (this.words[n] = r, this.length++), this;
    }, c.prototype.muln = function(t) {
      return this.clone().imuln(t);
    }, c.prototype.sqr = function() {
      return this.mul(this);
    }, c.prototype.isqr = function() {
      return this.imul(this.clone());
    }, c.prototype.pow = function(t) {
      var r = wt(t);
      if (r.length === 0)
        return new c(1);
      for (var n = this, o = 0; o < r.length && r[o] === 0; o++, n = n.sqr())
        ;
      if (++o < r.length)
        for (var u = n.sqr(); o < r.length; o++, u = u.sqr())
          r[o] !== 0 && (n = n.mul(u));
      return n;
    }, c.prototype.iushln = function(t) {
      p(typeof t == "number" && t >= 0);
      var r = t % 26, n = (t - r) / 26, o = 67108863 >>> 26 - r << 26 - r, u;
      if (r !== 0) {
        var d = 0;
        for (u = 0; u < this.length; u++) {
          var m = this.words[u] & o, h = (this.words[u] | 0) - m << r;
          this.words[u] = h | d, d = m >>> 26 - r;
        }
        d && (this.words[u] = d, this.length++);
      }
      if (n !== 0) {
        for (u = this.length - 1; u >= 0; u--)
          this.words[u + n] = this.words[u];
        for (u = 0; u < n; u++)
          this.words[u] = 0;
        this.length += n;
      }
      return this.strip();
    }, c.prototype.ishln = function(t) {
      return p(this.negative === 0), this.iushln(t);
    }, c.prototype.iushrn = function(t, r, n) {
      p(typeof t == "number" && t >= 0);
      var o;
      r ? o = (r - r % 26) / 26 : o = 0;
      var u = t % 26, d = Math.min((t - u) / 26, this.length), m = 67108863 ^ 67108863 >>> u << u, h = n;
      if (o -= d, o = Math.max(0, o), h) {
        for (var e = 0; e < d; e++)
          h.words[e] = this.words[e];
        h.length = d;
      }
      if (d !== 0)
        if (this.length > d)
          for (this.length -= d, e = 0; e < this.length; e++)
            this.words[e] = this.words[e + d];
        else
          this.words[0] = 0, this.length = 1;
      var f = 0;
      for (e = this.length - 1; e >= 0 && (f !== 0 || e >= o); e--) {
        var _ = this.words[e] | 0;
        this.words[e] = f << 26 - u | _ >>> u, f = _ & m;
      }
      return h && f !== 0 && (h.words[h.length++] = f), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip();
    }, c.prototype.ishrn = function(t, r, n) {
      return p(this.negative === 0), this.iushrn(t, r, n);
    }, c.prototype.shln = function(t) {
      return this.clone().ishln(t);
    }, c.prototype.ushln = function(t) {
      return this.clone().iushln(t);
    }, c.prototype.shrn = function(t) {
      return this.clone().ishrn(t);
    }, c.prototype.ushrn = function(t) {
      return this.clone().iushrn(t);
    }, c.prototype.testn = function(t) {
      p(typeof t == "number" && t >= 0);
      var r = t % 26, n = (t - r) / 26, o = 1 << r;
      if (this.length <= n)
        return !1;
      var u = this.words[n];
      return !!(u & o);
    }, c.prototype.imaskn = function(t) {
      p(typeof t == "number" && t >= 0);
      var r = t % 26, n = (t - r) / 26;
      if (p(this.negative === 0, "imaskn works only with positive numbers"), this.length <= n)
        return this;
      if (r !== 0 && n++, this.length = Math.min(n, this.length), r !== 0) {
        var o = 67108863 ^ 67108863 >>> r << r;
        this.words[this.length - 1] &= o;
      }
      return this.strip();
    }, c.prototype.maskn = function(t) {
      return this.clone().imaskn(t);
    }, c.prototype.iaddn = function(t) {
      return p(typeof t == "number"), p(t < 67108864), t < 0 ? this.isubn(-t) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < t ? (this.words[0] = t - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t);
    }, c.prototype._iaddn = function(t) {
      this.words[0] += t;
      for (var r = 0; r < this.length && this.words[r] >= 67108864; r++)
        this.words[r] -= 67108864, r === this.length - 1 ? this.words[r + 1] = 1 : this.words[r + 1]++;
      return this.length = Math.max(this.length, r + 1), this;
    }, c.prototype.isubn = function(t) {
      if (p(typeof t == "number"), p(t < 67108864), t < 0)
        return this.iaddn(-t);
      if (this.negative !== 0)
        return this.negative = 0, this.iaddn(t), this.negative = 1, this;
      if (this.words[0] -= t, this.length === 1 && this.words[0] < 0)
        this.words[0] = -this.words[0], this.negative = 1;
      else
        for (var r = 0; r < this.length && this.words[r] < 0; r++)
          this.words[r] += 67108864, this.words[r + 1] -= 1;
      return this.strip();
    }, c.prototype.addn = function(t) {
      return this.clone().iaddn(t);
    }, c.prototype.subn = function(t) {
      return this.clone().isubn(t);
    }, c.prototype.iabs = function() {
      return this.negative = 0, this;
    }, c.prototype.abs = function() {
      return this.clone().iabs();
    }, c.prototype._ishlnsubmul = function(t, r, n) {
      var o = t.length + n, u;
      this._expand(o);
      var d, m = 0;
      for (u = 0; u < t.length; u++) {
        d = (this.words[u + n] | 0) + m;
        var h = (t.words[u] | 0) * r;
        d -= h & 67108863, m = (d >> 26) - (h / 67108864 | 0), this.words[u + n] = d & 67108863;
      }
      for (; u < this.length - n; u++)
        d = (this.words[u + n] | 0) + m, m = d >> 26, this.words[u + n] = d & 67108863;
      if (m === 0)
        return this.strip();
      for (p(m === -1), m = 0, u = 0; u < this.length; u++)
        d = -(this.words[u] | 0) + m, m = d >> 26, this.words[u] = d & 67108863;
      return this.negative = 1, this.strip();
    }, c.prototype._wordDiv = function(t, r) {
      var n = this.length - t.length, o = this.clone(), u = t, d = u.words[u.length - 1] | 0, m = this._countBits(d);
      n = 26 - m, n !== 0 && (u = u.ushln(n), o.iushln(n), d = u.words[u.length - 1] | 0);
      var h = o.length - u.length, e;
      if (r !== "mod") {
        e = new c(null), e.length = h + 1, e.words = new Array(e.length);
        for (var f = 0; f < e.length; f++)
          e.words[f] = 0;
      }
      var _ = o.clone()._ishlnsubmul(u, 1, h);
      _.negative === 0 && (o = _, e && (e.words[h] = 1));
      for (var b = h - 1; b >= 0; b--) {
        var S = (o.words[u.length + b] | 0) * 67108864 + (o.words[u.length + b - 1] | 0);
        for (S = Math.min(S / d | 0, 67108863), o._ishlnsubmul(u, S, b); o.negative !== 0; )
          S--, o.negative = 0, o._ishlnsubmul(u, 1, b), o.isZero() || (o.negative ^= 1);
        e && (e.words[b] = S);
      }
      return e && e.strip(), o.strip(), r !== "div" && n !== 0 && o.iushrn(n), {
        div: e || null,
        mod: o
      };
    }, c.prototype.divmod = function(t, r, n) {
      if (p(!t.isZero()), this.isZero())
        return {
          div: new c(0),
          mod: new c(0)
        };
      var o, u, d;
      return this.negative !== 0 && t.negative === 0 ? (d = this.neg().divmod(t, r), r !== "mod" && (o = d.div.neg()), r !== "div" && (u = d.mod.neg(), n && u.negative !== 0 && u.iadd(t)), {
        div: o,
        mod: u
      }) : this.negative === 0 && t.negative !== 0 ? (d = this.divmod(t.neg(), r), r !== "mod" && (o = d.div.neg()), {
        div: o,
        mod: d.mod
      }) : (this.negative & t.negative) !== 0 ? (d = this.neg().divmod(t.neg(), r), r !== "div" && (u = d.mod.neg(), n && u.negative !== 0 && u.isub(t)), {
        div: d.div,
        mod: u
      }) : t.length > this.length || this.cmp(t) < 0 ? {
        div: new c(0),
        mod: this
      } : t.length === 1 ? r === "div" ? {
        div: this.divn(t.words[0]),
        mod: null
      } : r === "mod" ? {
        div: null,
        mod: new c(this.modn(t.words[0]))
      } : {
        div: this.divn(t.words[0]),
        mod: new c(this.modn(t.words[0]))
      } : this._wordDiv(t, r);
    }, c.prototype.div = function(t) {
      return this.divmod(t, "div", !1).div;
    }, c.prototype.mod = function(t) {
      return this.divmod(t, "mod", !1).mod;
    }, c.prototype.umod = function(t) {
      return this.divmod(t, "mod", !0).mod;
    }, c.prototype.divRound = function(t) {
      var r = this.divmod(t);
      if (r.mod.isZero())
        return r.div;
      var n = r.div.negative !== 0 ? r.mod.isub(t) : r.mod, o = t.ushrn(1), u = t.andln(1), d = n.cmp(o);
      return d < 0 || u === 1 && d === 0 ? r.div : r.div.negative !== 0 ? r.div.isubn(1) : r.div.iaddn(1);
    }, c.prototype.modn = function(t) {
      p(t <= 67108863);
      for (var r = (1 << 26) % t, n = 0, o = this.length - 1; o >= 0; o--)
        n = (r * n + (this.words[o] | 0)) % t;
      return n;
    }, c.prototype.idivn = function(t) {
      p(t <= 67108863);
      for (var r = 0, n = this.length - 1; n >= 0; n--) {
        var o = (this.words[n] | 0) + r * 67108864;
        this.words[n] = o / t | 0, r = o % t;
      }
      return this.strip();
    }, c.prototype.divn = function(t) {
      return this.clone().idivn(t);
    }, c.prototype.egcd = function(t) {
      p(t.negative === 0), p(!t.isZero());
      var r = this, n = t.clone();
      r.negative !== 0 ? r = r.umod(t) : r = r.clone();
      for (var o = new c(1), u = new c(0), d = new c(0), m = new c(1), h = 0; r.isEven() && n.isEven(); )
        r.iushrn(1), n.iushrn(1), ++h;
      for (var e = n.clone(), f = r.clone(); !r.isZero(); ) {
        for (var _ = 0, b = 1; (r.words[0] & b) === 0 && _ < 26; ++_, b <<= 1)
          ;
        if (_ > 0)
          for (r.iushrn(_); _-- > 0; )
            (o.isOdd() || u.isOdd()) && (o.iadd(e), u.isub(f)), o.iushrn(1), u.iushrn(1);
        for (var S = 0, x = 1; (n.words[0] & x) === 0 && S < 26; ++S, x <<= 1)
          ;
        if (S > 0)
          for (n.iushrn(S); S-- > 0; )
            (d.isOdd() || m.isOdd()) && (d.iadd(e), m.isub(f)), d.iushrn(1), m.iushrn(1);
        r.cmp(n) >= 0 ? (r.isub(n), o.isub(d), u.isub(m)) : (n.isub(r), d.isub(o), m.isub(u));
      }
      return {
        a: d,
        b: m,
        gcd: n.iushln(h)
      };
    }, c.prototype._invmp = function(t) {
      p(t.negative === 0), p(!t.isZero());
      var r = this, n = t.clone();
      r.negative !== 0 ? r = r.umod(t) : r = r.clone();
      for (var o = new c(1), u = new c(0), d = n.clone(); r.cmpn(1) > 0 && n.cmpn(1) > 0; ) {
        for (var m = 0, h = 1; (r.words[0] & h) === 0 && m < 26; ++m, h <<= 1)
          ;
        if (m > 0)
          for (r.iushrn(m); m-- > 0; )
            o.isOdd() && o.iadd(d), o.iushrn(1);
        for (var e = 0, f = 1; (n.words[0] & f) === 0 && e < 26; ++e, f <<= 1)
          ;
        if (e > 0)
          for (n.iushrn(e); e-- > 0; )
            u.isOdd() && u.iadd(d), u.iushrn(1);
        r.cmp(n) >= 0 ? (r.isub(n), o.isub(u)) : (n.isub(r), u.isub(o));
      }
      var _;
      return r.cmpn(1) === 0 ? _ = o : _ = u, _.cmpn(0) < 0 && _.iadd(t), _;
    }, c.prototype.gcd = function(t) {
      if (this.isZero())
        return t.abs();
      if (t.isZero())
        return this.abs();
      var r = this.clone(), n = t.clone();
      r.negative = 0, n.negative = 0;
      for (var o = 0; r.isEven() && n.isEven(); o++)
        r.iushrn(1), n.iushrn(1);
      do {
        for (; r.isEven(); )
          r.iushrn(1);
        for (; n.isEven(); )
          n.iushrn(1);
        var u = r.cmp(n);
        if (u < 0) {
          var d = r;
          r = n, n = d;
        } else if (u === 0 || n.cmpn(1) === 0)
          break;
        r.isub(n);
      } while (!0);
      return n.iushln(o);
    }, c.prototype.invm = function(t) {
      return this.egcd(t).a.umod(t);
    }, c.prototype.isEven = function() {
      return (this.words[0] & 1) === 0;
    }, c.prototype.isOdd = function() {
      return (this.words[0] & 1) === 1;
    }, c.prototype.andln = function(t) {
      return this.words[0] & t;
    }, c.prototype.bincn = function(t) {
      p(typeof t == "number");
      var r = t % 26, n = (t - r) / 26, o = 1 << r;
      if (this.length <= n)
        return this._expand(n + 1), this.words[n] |= o, this;
      for (var u = o, d = n; u !== 0 && d < this.length; d++) {
        var m = this.words[d] | 0;
        m += u, u = m >>> 26, m &= 67108863, this.words[d] = m;
      }
      return u !== 0 && (this.words[d] = u, this.length++), this;
    }, c.prototype.isZero = function() {
      return this.length === 1 && this.words[0] === 0;
    }, c.prototype.cmpn = function(t) {
      var r = t < 0;
      if (this.negative !== 0 && !r)
        return -1;
      if (this.negative === 0 && r)
        return 1;
      this.strip();
      var n;
      if (this.length > 1)
        n = 1;
      else {
        r && (t = -t), p(t <= 67108863, "Number is too big");
        var o = this.words[0] | 0;
        n = o === t ? 0 : o < t ? -1 : 1;
      }
      return this.negative !== 0 ? -n | 0 : n;
    }, c.prototype.cmp = function(t) {
      if (this.negative !== 0 && t.negative === 0)
        return -1;
      if (this.negative === 0 && t.negative !== 0)
        return 1;
      var r = this.ucmp(t);
      return this.negative !== 0 ? -r | 0 : r;
    }, c.prototype.ucmp = function(t) {
      if (this.length > t.length)
        return 1;
      if (this.length < t.length)
        return -1;
      for (var r = 0, n = this.length - 1; n >= 0; n--) {
        var o = this.words[n] | 0, u = t.words[n] | 0;
        if (o !== u) {
          o < u ? r = -1 : o > u && (r = 1);
          break;
        }
      }
      return r;
    }, c.prototype.gtn = function(t) {
      return this.cmpn(t) === 1;
    }, c.prototype.gt = function(t) {
      return this.cmp(t) === 1;
    }, c.prototype.gten = function(t) {
      return this.cmpn(t) >= 0;
    }, c.prototype.gte = function(t) {
      return this.cmp(t) >= 0;
    }, c.prototype.ltn = function(t) {
      return this.cmpn(t) === -1;
    }, c.prototype.lt = function(t) {
      return this.cmp(t) === -1;
    }, c.prototype.lten = function(t) {
      return this.cmpn(t) <= 0;
    }, c.prototype.lte = function(t) {
      return this.cmp(t) <= 0;
    }, c.prototype.eqn = function(t) {
      return this.cmpn(t) === 0;
    }, c.prototype.eq = function(t) {
      return this.cmp(t) === 0;
    }, c.red = function(t) {
      return new N(t);
    }, c.prototype.toRed = function(t) {
      return p(!this.red, "Already a number in reduction context"), p(this.negative === 0, "red works only with positives"), t.convertTo(this)._forceRed(t);
    }, c.prototype.fromRed = function() {
      return p(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this);
    }, c.prototype._forceRed = function(t) {
      return this.red = t, this;
    }, c.prototype.forceRed = function(t) {
      return p(!this.red, "Already a number in reduction context"), this._forceRed(t);
    }, c.prototype.redAdd = function(t) {
      return p(this.red, "redAdd works only with red numbers"), this.red.add(this, t);
    }, c.prototype.redIAdd = function(t) {
      return p(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t);
    }, c.prototype.redSub = function(t) {
      return p(this.red, "redSub works only with red numbers"), this.red.sub(this, t);
    }, c.prototype.redISub = function(t) {
      return p(this.red, "redISub works only with red numbers"), this.red.isub(this, t);
    }, c.prototype.redShl = function(t) {
      return p(this.red, "redShl works only with red numbers"), this.red.shl(this, t);
    }, c.prototype.redMul = function(t) {
      return p(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t);
    }, c.prototype.redIMul = function(t) {
      return p(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t);
    }, c.prototype.redSqr = function() {
      return p(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this);
    }, c.prototype.redISqr = function() {
      return p(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this);
    }, c.prototype.redSqrt = function() {
      return p(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this);
    }, c.prototype.redInvm = function() {
      return p(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this);
    }, c.prototype.redNeg = function() {
      return p(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this);
    }, c.prototype.redPow = function(t) {
      return p(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t);
    };
    var w = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function M(l, t) {
      this.name = l, this.p = new c(t, 16), this.n = this.p.bitLength(), this.k = new c(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    M.prototype._tmp = function() {
      var t = new c(null);
      return t.words = new Array(Math.ceil(this.n / 13)), t;
    }, M.prototype.ireduce = function(t) {
      var r = t, n;
      do
        this.split(r, this.tmp), r = this.imulK(r), r = r.iadd(this.tmp), n = r.bitLength();
      while (n > this.n);
      var o = n < this.n ? -1 : r.ucmp(this.p);
      return o === 0 ? (r.words[0] = 0, r.length = 1) : o > 0 ? r.isub(this.p) : r.strip(), r;
    }, M.prototype.split = function(t, r) {
      t.iushrn(this.n, 0, r);
    }, M.prototype.imulK = function(t) {
      return t.imul(this.k);
    };
    function R() {
      M.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    g(R, M), R.prototype.split = function(t, r) {
      for (var n = 4194303, o = Math.min(t.length, 9), u = 0; u < o; u++)
        r.words[u] = t.words[u];
      if (r.length = o, t.length <= 9) {
        t.words[0] = 0, t.length = 1;
        return;
      }
      var d = t.words[9];
      for (r.words[r.length++] = d & n, u = 10; u < t.length; u++) {
        var m = t.words[u] | 0;
        t.words[u - 10] = (m & n) << 4 | d >>> 22, d = m;
      }
      d >>>= 22, t.words[u - 10] = d, d === 0 && t.length > 10 ? t.length -= 10 : t.length -= 9;
    }, R.prototype.imulK = function(t) {
      t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
      for (var r = 0, n = 0; n < t.length; n++) {
        var o = t.words[n] | 0;
        r += o * 977, t.words[n] = r & 67108863, r = o * 64 + (r / 67108864 | 0);
      }
      return t.words[t.length - 1] === 0 && (t.length--, t.words[t.length - 1] === 0 && t.length--), t;
    };
    function C() {
      M.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    g(C, M);
    function I() {
      M.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    g(I, M);
    function vt() {
      M.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    g(vt, M), vt.prototype.imulK = function(t) {
      for (var r = 0, n = 0; n < t.length; n++) {
        var o = (t.words[n] | 0) * 19 + r, u = o & 67108863;
        o >>>= 26, t.words[n] = u, r = o;
      }
      return r !== 0 && (t.words[t.length++] = r), t;
    }, c._prime = function(t) {
      if (w[t])
        return w[t];
      var r;
      if (t === "k256")
        r = new R();
      else if (t === "p224")
        r = new C();
      else if (t === "p192")
        r = new I();
      else if (t === "p25519")
        r = new vt();
      else
        throw new Error("Unknown prime " + t);
      return w[t] = r, r;
    };
    function N(l) {
      if (typeof l == "string") {
        var t = c._prime(l);
        this.m = t.p, this.prime = t;
      } else
        p(l.gtn(1), "modulus must be greater than 1"), this.m = l, this.prime = null;
    }
    N.prototype._verify1 = function(t) {
      p(t.negative === 0, "red works only with positives"), p(t.red, "red works only with red numbers");
    }, N.prototype._verify2 = function(t, r) {
      p((t.negative | r.negative) === 0, "red works only with positives"), p(
        t.red && t.red === r.red,
        "red works only with red numbers"
      );
    }, N.prototype.imod = function(t) {
      return this.prime ? this.prime.ireduce(t)._forceRed(this) : t.umod(this.m)._forceRed(this);
    }, N.prototype.neg = function(t) {
      return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
    }, N.prototype.add = function(t, r) {
      this._verify2(t, r);
      var n = t.add(r);
      return n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this);
    }, N.prototype.iadd = function(t, r) {
      this._verify2(t, r);
      var n = t.iadd(r);
      return n.cmp(this.m) >= 0 && n.isub(this.m), n;
    }, N.prototype.sub = function(t, r) {
      this._verify2(t, r);
      var n = t.sub(r);
      return n.cmpn(0) < 0 && n.iadd(this.m), n._forceRed(this);
    }, N.prototype.isub = function(t, r) {
      this._verify2(t, r);
      var n = t.isub(r);
      return n.cmpn(0) < 0 && n.iadd(this.m), n;
    }, N.prototype.shl = function(t, r) {
      return this._verify1(t), this.imod(t.ushln(r));
    }, N.prototype.imul = function(t, r) {
      return this._verify2(t, r), this.imod(t.imul(r));
    }, N.prototype.mul = function(t, r) {
      return this._verify2(t, r), this.imod(t.mul(r));
    }, N.prototype.isqr = function(t) {
      return this.imul(t, t.clone());
    }, N.prototype.sqr = function(t) {
      return this.mul(t, t);
    }, N.prototype.sqrt = function(t) {
      if (t.isZero())
        return t.clone();
      var r = this.m.andln(3);
      if (p(r % 2 === 1), r === 3) {
        var n = this.m.add(new c(1)).iushrn(2);
        return this.pow(t, n);
      }
      for (var o = this.m.subn(1), u = 0; !o.isZero() && o.andln(1) === 0; )
        u++, o.iushrn(1);
      p(!o.isZero());
      var d = new c(1).toRed(this), m = d.redNeg(), h = this.m.subn(1).iushrn(1), e = this.m.bitLength();
      for (e = new c(2 * e * e).toRed(this); this.pow(e, h).cmp(m) !== 0; )
        e.redIAdd(m);
      for (var f = this.pow(e, o), _ = this.pow(t, o.addn(1).iushrn(1)), b = this.pow(t, o), S = u; b.cmp(d) !== 0; ) {
        for (var x = b, T = 0; x.cmp(d) !== 0; T++)
          x = x.redSqr();
        p(T < S);
        var O = this.pow(f, new c(1).iushln(S - T - 1));
        _ = _.redMul(O), f = O.redSqr(), b = b.redMul(f), S = T;
      }
      return _;
    }, N.prototype.invm = function(t) {
      var r = t._invmp(this.m);
      return r.negative !== 0 ? (r.negative = 0, this.imod(r).redNeg()) : this.imod(r);
    }, N.prototype.pow = function(t, r) {
      if (r.isZero())
        return new c(1).toRed(this);
      if (r.cmpn(1) === 0)
        return t.clone();
      var n = 4, o = new Array(1 << n);
      o[0] = new c(1).toRed(this), o[1] = t;
      for (var u = 2; u < o.length; u++)
        o[u] = this.mul(o[u - 1], t);
      var d = o[0], m = 0, h = 0, e = r.bitLength() % 26;
      for (e === 0 && (e = 26), u = r.length - 1; u >= 0; u--) {
        for (var f = r.words[u], _ = e - 1; _ >= 0; _--) {
          var b = f >> _ & 1;
          if (d !== o[0] && (d = this.sqr(d)), b === 0 && m === 0) {
            h = 0;
            continue;
          }
          m <<= 1, m |= b, h++, !(h !== n && (u !== 0 || _ !== 0)) && (d = this.mul(d, o[m]), h = 0, m = 0);
        }
        e = 26;
      }
      return d;
    }, N.prototype.convertTo = function(t) {
      var r = t.umod(this.m);
      return r === t ? r.clone() : r;
    }, N.prototype.convertFrom = function(t) {
      var r = t.clone();
      return r.red = null, r;
    }, c.mont = function(t) {
      return new Et(t);
    };
    function Et(l) {
      N.call(this, l), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new c(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    g(Et, N), Et.prototype.convertTo = function(t) {
      return this.imod(t.ushln(this.shift));
    }, Et.prototype.convertFrom = function(t) {
      var r = this.imod(t.mul(this.rinv));
      return r.red = null, r;
    }, Et.prototype.imul = function(t, r) {
      if (t.isZero() || r.isZero())
        return t.words[0] = 0, t.length = 1, t;
      var n = t.imul(r), o = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), u = n.isub(o).iushrn(this.shift), d = u;
      return u.cmp(this.m) >= 0 ? d = u.isub(this.m) : u.cmpn(0) < 0 && (d = u.iadd(this.m)), d._forceRed(this);
    }, Et.prototype.mul = function(t, r) {
      if (t.isZero() || r.isZero())
        return new c(0)._forceRed(this);
      var n = t.mul(r), o = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), u = n.isub(o).iushrn(this.shift), d = u;
      return u.cmp(this.m) >= 0 ? d = u.isub(this.m) : u.cmpn(0) < 0 && (d = u.iadd(this.m)), d._forceRed(this);
    }, Et.prototype.invm = function(t) {
      var r = this.imod(t._invmp(this.m).mul(this.r2));
      return r._forceRed(this);
    };
  })(s, Mt);
})(We);
const wr = We.exports;
var br = de;
de.strict = ze;
de.loose = Ke;
var Sr = Object.prototype.toString, xr = {
  "[object Int8Array]": !0,
  "[object Int16Array]": !0,
  "[object Int32Array]": !0,
  "[object Uint8Array]": !0,
  "[object Uint8ClampedArray]": !0,
  "[object Uint16Array]": !0,
  "[object Uint32Array]": !0,
  "[object Float32Array]": !0,
  "[object Float64Array]": !0
};
function de(s) {
  return ze(s) || Ke(s);
}
function ze(s) {
  return s instanceof Int8Array || s instanceof Int16Array || s instanceof Int32Array || s instanceof Uint8Array || s instanceof Uint8ClampedArray || s instanceof Uint16Array || s instanceof Uint32Array || s instanceof Float32Array || s instanceof Float64Array;
}
function Ke(s) {
  return xr[Sr.call(s)];
}
var Rr = br.strict, Ir = function(i) {
  if (Rr(i)) {
    var a = Buffer.from(i.buffer);
    return i.byteLength !== i.buffer.byteLength && (a = a.slice(i.byteOffset, i.byteOffset + i.byteLength)), a;
  } else
    return Buffer.from(i);
};
const Qe = "hex", Ge = "utf8", jt = "0";
function Ct(s) {
  return new Uint8Array(s);
}
function Ve(s, i = !1) {
  const a = s.toString(Qe);
  return i ? Nt(a) : a;
}
function kr(s) {
  return s.toString(Ge);
}
function Ht(s) {
  return Ir(s);
}
function qt(s, i = !1) {
  return Ve(Ht(s), i);
}
function Er(s) {
  return kr(Ht(s));
}
function Tr(s) {
  return Buffer.from(Rt(s), Qe);
}
function At(s) {
  return Ct(Tr(s));
}
function pe(s) {
  return Buffer.from(s, Ge);
}
function Or(s) {
  return Ct(pe(s));
}
function qr(s, i = !1) {
  return Ve(pe(s), i);
}
function Ar(s, i) {
  return !(typeof s != "string" || !s.match(/^0x[0-9A-Fa-f]*$/) || i && s.length !== 2 + 2 * i);
}
function Ye(...s) {
  let i = [];
  return s.forEach((a) => i = i.concat(Array.from(a))), new Uint8Array([...i]);
}
function Cr(s, i = 8) {
  const a = s % i;
  return a ? (s - a) / i * i + i : s;
}
function Nr(s, i = 8, a = jt) {
  return Br(s, Cr(s.length, i), a);
}
function Br(s, i, a = jt) {
  return Fr(s, i, !0, a);
}
function Rt(s) {
  return s.replace(/^0x/, "");
}
function Nt(s) {
  return s.startsWith("0x") ? s : `0x${s}`;
}
function Xe(s) {
  return s = Rt(s), s = Nr(s, 2), s && (s = Nt(s)), s;
}
function Ur(s) {
  const i = s.startsWith("0x");
  return s = Rt(s), s = s.startsWith(jt) ? s.substring(1) : s, i ? Nt(s) : s;
}
function Fr(s, i, a, p = jt) {
  const g = i - s.length;
  let c = s;
  if (g > 0) {
    const k = p.repeat(g);
    c = a ? k + s : s + k;
  }
  return c;
}
function ue(s) {
  return Ht(new Uint8Array(s));
}
function Lr(s, i) {
  return qt(new Uint8Array(s), !i);
}
function Pr(s) {
  return Ct(s).buffer;
}
function jr(s) {
  return pe(s);
}
function Hr(s, i) {
  return qr(s, !i);
}
function $r(s) {
  return At(s).buffer;
}
function tr(s, i) {
  const a = Rt(Xe(new wr(s).toString(16)));
  return i ? a : Nt(a);
}
var Bt = {}, St = {};
Object.defineProperty(St, "__esModule", { value: !0 });
St.isBrowserCryptoAvailable = St.getSubtleCrypto = St.getBrowerCrypto = void 0;
function me() {
  return (Mt === null || Mt === void 0 ? void 0 : Mt.crypto) || (Mt === null || Mt === void 0 ? void 0 : Mt.msCrypto) || {};
}
St.getBrowerCrypto = me;
function er() {
  const s = me();
  return s.subtle || s.webkitSubtle;
}
St.getSubtleCrypto = er;
function Zr() {
  return !!me() && !!er();
}
St.isBrowserCryptoAvailable = Zr;
var xt = {};
Object.defineProperty(xt, "__esModule", { value: !0 });
xt.isBrowser = xt.isNode = xt.isReactNative = void 0;
function rr() {
  return typeof document > "u" && typeof navigator < "u" && navigator.product === "ReactNative";
}
xt.isReactNative = rr;
function ir() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
xt.isNode = ir;
function Dr() {
  return !rr() && !ir();
}
xt.isBrowser = Dr;
(function(s) {
  var i = Mt && Mt.__createBinding || (Object.create ? function(p, g, c, k) {
    k === void 0 && (k = c), Object.defineProperty(p, k, { enumerable: !0, get: function() {
      return g[c];
    } });
  } : function(p, g, c, k) {
    k === void 0 && (k = c), p[k] = g[c];
  }), a = Mt && Mt.__exportStar || function(p, g) {
    for (var c in p)
      c !== "default" && !g.hasOwnProperty(c) && i(g, p, c);
  };
  Object.defineProperty(s, "__esModule", { value: !0 }), a(St, s), a(xt, s);
})(Bt);
function Jr() {
  const s = Date.now() * Math.pow(10, 3), i = Math.floor(Math.random() * Math.pow(10, 3));
  return s + i;
}
function Lt(s) {
  return Xe(s);
}
function Wr(s) {
  return Ur(Nt(s));
}
const zr = Jr;
function ae() {
  return ((i, a) => {
    for (a = i = ""; i++ < 36; a += i * 51 & 52 ? (i ^ 15 ? 8 ^ Math.random() * (i ^ 20 ? 16 : 4) : 4).toString(16) : "-")
      ;
    return a;
  })();
}
function Kr(s) {
  return s === "" || typeof s == "string" && s.trim() === "";
}
function Qr(s) {
  return !(s && s.length);
}
function nr(s, i) {
  return Ar(s, i);
}
function Gr(s) {
  return typeof s.method < "u";
}
function Ut(s) {
  return typeof s.result < "u";
}
function Pt(s) {
  return typeof s.error < "u";
}
function Fe(s) {
  return typeof s.event < "u";
}
function Vr(s) {
  return _r.includes(s) || s.startsWith("wc_");
}
function Yr(s) {
  return s.method.startsWith("wc_") ? !0 : !Je.includes(s.method);
}
function Xr(s) {
  s = Rt(s.toLowerCase());
  const i = Rt(Mr.exports.keccak_256(jr(s)));
  let a = "";
  for (let p = 0; p < s.length; p++)
    parseInt(i[p], 16) > 7 ? a += s[p].toUpperCase() : a += s[p];
  return Nt(a);
}
const ti = (s) => s ? s.toLowerCase().substring(0, 2) !== "0x" ? !1 : /^(0x)?[0-9a-f]{40}$/i.test(s) ? /^(0x)?[0-9a-f]{40}$/.test(s) || /^(0x)?[0-9A-F]{40}$/.test(s) ? !0 : s === Xr(s) : !1 : !1;
function Le(s) {
  return !Qr(s) && !nr(s[0]) && (s[0] = Hr(s[0])), s;
}
function he(s) {
  if (typeof s.type < "u" && s.type !== "0")
    return s;
  if (typeof s.from > "u" || !ti(s.from))
    throw new Error("Transaction object must include a valid 'from' value.");
  function i(g) {
    let c = g;
    return (typeof g == "number" || typeof g == "string" && !Kr(g)) && (nr(g) ? typeof g == "string" && (c = Lt(g)) : c = tr(g)), typeof c == "string" && (c = Wr(c)), c;
  }
  const a = {
    from: Lt(s.from),
    to: typeof s.to > "u" ? void 0 : Lt(s.to),
    gasPrice: typeof s.gasPrice > "u" ? "" : i(s.gasPrice),
    gas: typeof s.gas > "u" ? typeof s.gasLimit > "u" ? "" : i(s.gasLimit) : i(s.gas),
    value: typeof s.value > "u" ? "" : i(s.value),
    nonce: typeof s.nonce > "u" ? "" : i(s.nonce),
    data: typeof s.data > "u" ? "" : Lt(s.data) || "0x"
  }, p = ["gasPrice", "gas", "value", "nonce"];
  return Object.keys(a).forEach((g) => {
    (typeof a[g] > "u" || typeof a[g] == "string" && !a[g].trim().length) && p.includes(g) && delete a[g];
  }), a;
}
function ei(s) {
  const i = s.message || "Failed or Rejected Request";
  let a = -32e3;
  if (s && !s.code)
    switch (i) {
      case "Parse error":
        a = -32700;
        break;
      case "Invalid request":
        a = -32600;
        break;
      case "Method not found":
        a = -32601;
        break;
      case "Invalid params":
        a = -32602;
        break;
      case "Internal error":
        a = -32603;
        break;
      default:
        a = -32e3;
        break;
    }
  const p = {
    code: a,
    message: i
  };
  return s.data && (p.data = s.data), p;
}
var ge = {}, ri = (s) => encodeURIComponent(s).replace(/[!'()*]/g, (i) => `%${i.charCodeAt(0).toString(16).toUpperCase()}`), sr = "%[a-f0-9]{2}", Pe = new RegExp(sr, "gi"), je = new RegExp("(" + sr + ")+", "gi");
function ce(s, i) {
  try {
    return decodeURIComponent(s.join(""));
  } catch {
  }
  if (s.length === 1)
    return s;
  i = i || 1;
  var a = s.slice(0, i), p = s.slice(i);
  return Array.prototype.concat.call([], ce(a), ce(p));
}
function ii(s) {
  try {
    return decodeURIComponent(s);
  } catch {
    for (var i = s.match(Pe), a = 1; a < i.length; a++)
      s = ce(i, a).join(""), i = s.match(Pe);
    return s;
  }
}
function ni(s) {
  for (var i = {
    "%FE%FF": "\uFFFD\uFFFD",
    "%FF%FE": "\uFFFD\uFFFD"
  }, a = je.exec(s); a; ) {
    try {
      i[a[0]] = decodeURIComponent(a[0]);
    } catch {
      var p = ii(a[0]);
      p !== a[0] && (i[a[0]] = p);
    }
    a = je.exec(s);
  }
  i["%C2"] = "\uFFFD";
  for (var g = Object.keys(i), c = 0; c < g.length; c++) {
    var k = g[c];
    s = s.replace(new RegExp(k, "g"), i[k]);
  }
  return s;
}
var si = function(s) {
  if (typeof s != "string")
    throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof s + "`");
  try {
    return s = s.replace(/\+/g, " "), decodeURIComponent(s);
  } catch {
    return ni(s);
  }
}, oi = (s, i) => {
  if (!(typeof s == "string" && typeof i == "string"))
    throw new TypeError("Expected the arguments to be of type `string`");
  if (i === "")
    return [s];
  const a = s.indexOf(i);
  return a === -1 ? [s] : [
    s.slice(0, a),
    s.slice(a + i.length)
  ];
};
(function(s) {
  const i = ri, a = si, p = oi, g = (v) => v == null;
  function c(v) {
    switch (v.arrayFormat) {
      case "index":
        return (y) => (w, M) => {
          const R = w.length;
          return M === void 0 || v.skipNull && M === null || v.skipEmptyString && M === "" ? w : M === null ? [...w, [E(y, v), "[", R, "]"].join("")] : [
            ...w,
            [E(y, v), "[", E(R, v), "]=", E(M, v)].join("")
          ];
        };
      case "bracket":
        return (y) => (w, M) => M === void 0 || v.skipNull && M === null || v.skipEmptyString && M === "" ? w : M === null ? [...w, [E(y, v), "[]"].join("")] : [...w, [E(y, v), "[]=", E(M, v)].join("")];
      case "comma":
      case "separator":
        return (y) => (w, M) => M == null || M.length === 0 ? w : w.length === 0 ? [[E(y, v), "=", E(M, v)].join("")] : [[w, E(M, v)].join(v.arrayFormatSeparator)];
      default:
        return (y) => (w, M) => M === void 0 || v.skipNull && M === null || v.skipEmptyString && M === "" ? w : M === null ? [...w, E(y, v)] : [...w, [E(y, v), "=", E(M, v)].join("")];
    }
  }
  function k(v) {
    let y;
    switch (v.arrayFormat) {
      case "index":
        return (w, M, R) => {
          if (y = /\[(\d*)\]$/.exec(w), w = w.replace(/\[\d*\]$/, ""), !y) {
            R[w] = M;
            return;
          }
          R[w] === void 0 && (R[w] = {}), R[w][y[1]] = M;
        };
      case "bracket":
        return (w, M, R) => {
          if (y = /(\[\])$/.exec(w), w = w.replace(/\[\]$/, ""), !y) {
            R[w] = M;
            return;
          }
          if (R[w] === void 0) {
            R[w] = [M];
            return;
          }
          R[w] = [].concat(R[w], M);
        };
      case "comma":
      case "separator":
        return (w, M, R) => {
          const I = typeof M == "string" && M.split("").indexOf(v.arrayFormatSeparator) > -1 ? M.split(v.arrayFormatSeparator).map((vt) => gt(vt, v)) : M === null ? M : gt(M, v);
          R[w] = I;
        };
      default:
        return (w, M, R) => {
          if (R[w] === void 0) {
            R[w] = M;
            return;
          }
          R[w] = [].concat(R[w], M);
        };
    }
  }
  function mt(v) {
    if (typeof v != "string" || v.length !== 1)
      throw new TypeError("arrayFormatSeparator must be single character string");
  }
  function E(v, y) {
    return y.encode ? y.strict ? i(v) : encodeURIComponent(v) : v;
  }
  function gt(v, y) {
    return y.decode ? a(v) : v;
  }
  function kt(v) {
    return Array.isArray(v) ? v.sort() : typeof v == "object" ? kt(Object.keys(v)).sort((y, w) => Number(y) - Number(w)).map((y) => v[y]) : v;
  }
  function _t(v) {
    const y = v.indexOf("#");
    return y !== -1 && (v = v.slice(0, y)), v;
  }
  function wt(v) {
    let y = "";
    const w = v.indexOf("#");
    return w !== -1 && (y = v.slice(w)), y;
  }
  function yt(v) {
    v = _t(v);
    const y = v.indexOf("?");
    return y === -1 ? "" : v.slice(y + 1);
  }
  function Ot(v, y) {
    return y.parseNumbers && !Number.isNaN(Number(v)) && typeof v == "string" && v.trim() !== "" ? v = Number(v) : y.parseBooleans && v !== null && (v.toLowerCase() === "true" || v.toLowerCase() === "false") && (v = v.toLowerCase() === "true"), v;
  }
  function Ft(v, y) {
    y = Object.assign({
      decode: !0,
      sort: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ",",
      parseNumbers: !1,
      parseBooleans: !1
    }, y), mt(y.arrayFormatSeparator);
    const w = k(y), M = /* @__PURE__ */ Object.create(null);
    if (typeof v != "string" || (v = v.trim().replace(/^[?#&]/, ""), !v))
      return M;
    for (const R of v.split("&")) {
      let [C, I] = p(y.decode ? R.replace(/\+/g, " ") : R, "=");
      I = I === void 0 ? null : ["comma", "separator"].includes(y.arrayFormat) ? I : gt(I, y), w(gt(C, y), I, M);
    }
    for (const R of Object.keys(M)) {
      const C = M[R];
      if (typeof C == "object" && C !== null)
        for (const I of Object.keys(C))
          C[I] = Ot(C[I], y);
      else
        M[R] = Ot(C, y);
    }
    return y.sort === !1 ? M : (y.sort === !0 ? Object.keys(M).sort() : Object.keys(M).sort(y.sort)).reduce((R, C) => {
      const I = M[C];
      return Boolean(I) && typeof I == "object" && !Array.isArray(I) ? R[C] = kt(I) : R[C] = I, R;
    }, /* @__PURE__ */ Object.create(null));
  }
  s.extract = yt, s.parse = Ft, s.stringify = (v, y) => {
    if (!v)
      return "";
    y = Object.assign({
      encode: !0,
      strict: !0,
      arrayFormat: "none",
      arrayFormatSeparator: ","
    }, y), mt(y.arrayFormatSeparator);
    const w = (I) => y.skipNull && g(v[I]) || y.skipEmptyString && v[I] === "", M = c(y), R = {};
    for (const I of Object.keys(v))
      w(I) || (R[I] = v[I]);
    const C = Object.keys(R);
    return y.sort !== !1 && C.sort(y.sort), C.map((I) => {
      const vt = v[I];
      return vt === void 0 ? "" : vt === null ? E(I, y) : Array.isArray(vt) ? vt.reduce(M(I), []).join("&") : E(I, y) + "=" + E(vt, y);
    }).filter((I) => I.length > 0).join("&");
  }, s.parseUrl = (v, y) => {
    y = Object.assign({
      decode: !0
    }, y);
    const [w, M] = p(v, "#");
    return Object.assign(
      {
        url: w.split("?")[0] || "",
        query: Ft(yt(v), y)
      },
      y && y.parseFragmentIdentifier && M ? { fragmentIdentifier: gt(M, y) } : {}
    );
  }, s.stringifyUrl = (v, y) => {
    y = Object.assign({
      encode: !0,
      strict: !0
    }, y);
    const w = _t(v.url).split("?")[0] || "", M = s.extract(v.url), R = s.parse(M, { sort: !1 }), C = Object.assign(R, v.query);
    let I = s.stringify(C, y);
    I && (I = `?${I}`);
    let vt = wt(v.url);
    return v.fragmentIdentifier && (vt = `#${E(v.fragmentIdentifier, y)}`), `${w}${I}${vt}`;
  };
})(ge);
function ai(s) {
  const i = s.indexOf("?") !== -1 ? s.indexOf("?") : void 0;
  return typeof i < "u" ? s.substr(i) : "";
}
function hi(s, i) {
  let a = or(s);
  return a = Object.assign(Object.assign({}, a), i), s = fi(a), s;
}
function or(s) {
  return ge.parse(s);
}
function fi(s) {
  return ge.stringify(s);
}
function ui(s) {
  return typeof s.bridge < "u";
}
function ci(s) {
  const i = s.indexOf(":"), a = s.indexOf("?") !== -1 ? s.indexOf("?") : void 0, p = s.substring(0, i), g = s.substring(i + 1, a);
  function c(_t) {
    const wt = "@", yt = _t.split(wt);
    return {
      handshakeTopic: yt[0],
      version: parseInt(yt[1], 10)
    };
  }
  const k = c(g), mt = typeof a < "u" ? s.substr(a) : "";
  function E(_t) {
    const wt = or(_t);
    return {
      key: wt.key || "",
      bridge: wt.bridge || ""
    };
  }
  const gt = E(mt);
  return Object.assign(Object.assign({ protocol: p }, k), gt);
}
class li {
  constructor() {
    this._eventEmitters = [], typeof window < "u" && typeof window.addEventListener < "u" && (window.addEventListener("online", () => this.trigger("online")), window.addEventListener("offline", () => this.trigger("offline")));
  }
  on(i, a) {
    this._eventEmitters.push({
      event: i,
      callback: a
    });
  }
  trigger(i) {
    let a = [];
    i && (a = this._eventEmitters.filter((p) => p.event === i)), a.forEach((p) => {
      p.callback();
    });
  }
}
const di = typeof global.WebSocket < "u" ? global.WebSocket : require("ws");
class pi {
  constructor(i) {
    if (this.opts = i, this._queue = [], this._events = [], this._subscriptions = [], this._protocol = i.protocol, this._version = i.version, this._url = "", this._netMonitor = null, this._socket = null, this._nextSocket = null, this._subscriptions = i.subscriptions || [], this._netMonitor = i.netMonitor || new li(), !i.url || typeof i.url != "string")
      throw new Error("Missing or invalid WebSocket url");
    this._url = i.url, this._netMonitor.on("online", () => this._socketCreate());
  }
  set readyState(i) {
  }
  get readyState() {
    return this._socket ? this._socket.readyState : -1;
  }
  set connecting(i) {
  }
  get connecting() {
    return this.readyState === 0;
  }
  set connected(i) {
  }
  get connected() {
    return this.readyState === 1;
  }
  set closing(i) {
  }
  get closing() {
    return this.readyState === 2;
  }
  set closed(i) {
  }
  get closed() {
    return this.readyState === 3;
  }
  open() {
    this._socketCreate();
  }
  close() {
    this._socketClose();
  }
  send(i, a, p) {
    if (!a || typeof a != "string")
      throw new Error("Missing or invalid topic field");
    this._socketSend({
      topic: a,
      type: "pub",
      payload: i,
      silent: !!p
    });
  }
  subscribe(i) {
    this._socketSend({
      topic: i,
      type: "sub",
      payload: "",
      silent: !0
    });
  }
  on(i, a) {
    this._events.push({ event: i, callback: a });
  }
  _socketCreate() {
    if (this._nextSocket)
      return;
    const i = mi(this._url, this._protocol, this._version);
    if (this._nextSocket = new di(i), !this._nextSocket)
      throw new Error("Failed to create socket");
    this._nextSocket.onmessage = (a) => this._socketReceive(a), this._nextSocket.onopen = () => this._socketOpen(), this._nextSocket.onerror = (a) => this._socketError(a), this._nextSocket.onclose = () => {
      setTimeout(() => {
        this._nextSocket = null, this._socketCreate();
      }, 1e3);
    };
  }
  _socketOpen() {
    this._socketClose(), this._socket = this._nextSocket, this._nextSocket = null, this._queueSubscriptions(), this._pushQueue();
  }
  _socketClose() {
    this._socket && (this._socket.onclose = () => {
    }, this._socket.close());
  }
  _socketSend(i) {
    const a = JSON.stringify(i);
    this._socket && this._socket.readyState === 1 ? this._socket.send(a) : (this._setToQueue(i), this._socketCreate());
  }
  async _socketReceive(i) {
    let a;
    try {
      a = JSON.parse(i.data);
    } catch {
      return;
    }
    if (this._socketSend({
      topic: a.topic,
      type: "ack",
      payload: "",
      silent: !0
    }), this._socket && this._socket.readyState === 1) {
      const p = this._events.filter((g) => g.event === "message");
      p && p.length && p.forEach((g) => g.callback(a));
    }
  }
  _socketError(i) {
    const a = this._events.filter((p) => p.event === "error");
    a && a.length && a.forEach((p) => p.callback(i));
  }
  _queueSubscriptions() {
    this._subscriptions.forEach((a) => this._queue.push({
      topic: a,
      type: "sub",
      payload: "",
      silent: !0
    })), this._subscriptions = this.opts.subscriptions || [];
  }
  _setToQueue(i) {
    this._queue.push(i);
  }
  _pushQueue() {
    this._queue.forEach((a) => this._socketSend(a)), this._queue = [];
  }
}
function mi(s, i, a) {
  var p, g;
  const k = (s.startsWith("https") ? s.replace("https", "wss") : s.startsWith("http") ? s.replace("http", "ws") : s).split("?"), mt = dr() ? {
    protocol: i,
    version: a,
    env: "browser",
    host: ((p = pr()) === null || p === void 0 ? void 0 : p.host) || ""
  } : {
    protocol: i,
    version: a,
    env: ((g = mr()) === null || g === void 0 ? void 0 : g.name) || ""
  }, E = hi(ai(k[1] || ""), mt);
  return k[0] + "?" + E;
}
const fe = "Session currently connected", Tt = "Session currently disconnected", gi = "Session Rejected", vi = "Missing JSON RPC response", yi = 'JSON-RPC success response must include "result" field', Mi = 'JSON-RPC error response must include "error" field', _i = 'JSON RPC request must have valid "method" value', wi = 'JSON RPC request must have valid "id" value', bi = "Missing one of the required parameters: bridge / uri / session", He = "JSON RPC response format is invalid", Si = "URI format is invalid", xi = "QRCode Modal not provided", $e = "User close QRCode Modal";
class Ri {
  constructor() {
    this._eventEmitters = [];
  }
  subscribe(i) {
    this._eventEmitters.push(i);
  }
  unsubscribe(i) {
    this._eventEmitters = this._eventEmitters.filter((a) => a.event !== i);
  }
  trigger(i) {
    let a = [], p;
    Gr(i) ? p = i.method : Ut(i) || Pt(i) ? p = `response:${i.id}` : Fe(i) ? p = i.event : p = "", p && (a = this._eventEmitters.filter((g) => g.event === p)), (!a || !a.length) && !Vr(p) && !Fe(p) && (a = this._eventEmitters.filter((g) => g.event === "call_request")), a.forEach((g) => {
      if (Pt(i)) {
        const c = new Error(i.error.message);
        g.callback(c, null);
      } else
        g.callback(null, i);
    });
  }
}
class Ii {
  constructor(i = "walletconnect") {
    this.storageId = i;
  }
  getSession() {
    let i = null;
    const a = Ze(this.storageId);
    return a && ui(a) && (i = a), i;
  }
  setSession(i) {
    return gr(this.storageId, i), i;
  }
  removeSession() {
    De(this.storageId);
  }
}
const ki = "walletconnect.org", Ei = "abcdefghijklmnopqrstuvwxyz0123456789", ar = Ei.split("").map((s) => `https://${s}.bridge.walletconnect.org`);
function Ti(s) {
  let i = s.indexOf("//") > -1 ? s.split("/")[2] : s.split("/")[0];
  return i = i.split(":")[0], i = i.split("?")[0], i;
}
function Oi(s) {
  return Ti(s).split(".").slice(-2).join(".");
}
function qi() {
  return Math.floor(Math.random() * ar.length);
}
function Ai() {
  return ar[qi()];
}
function Ci(s) {
  return Oi(s) === ki;
}
function Ni(s) {
  return Ci(s) ? Ai() : s;
}
class Bi {
  constructor(i) {
    if (this.protocol = "wc", this.version = 1, this._bridge = "", this._key = null, this._clientId = "", this._clientMeta = null, this._peerId = "", this._peerMeta = null, this._handshakeId = 0, this._handshakeTopic = "", this._connected = !1, this._accounts = [], this._chainId = 0, this._networkId = 0, this._rpcUrl = "", this._eventManager = new Ri(), this._clientMeta = Be() || i.connectorOpts.clientMeta || null, this._cryptoLib = i.cryptoLib, this._sessionStorage = i.sessionStorage || new Ii(i.connectorOpts.storageId), this._qrcodeModal = i.connectorOpts.qrcodeModal, this._qrcodeModalOptions = i.connectorOpts.qrcodeModalOptions, this._signingMethods = [...Je, ...i.connectorOpts.signingMethods || []], !i.connectorOpts.bridge && !i.connectorOpts.uri && !i.connectorOpts.session)
      throw new Error(bi);
    i.connectorOpts.bridge && (this.bridge = Ni(i.connectorOpts.bridge)), i.connectorOpts.uri && (this.uri = i.connectorOpts.uri);
    const a = i.connectorOpts.session || this._getStorageSession();
    a && (this.session = a), this.handshakeId && this._subscribeToSessionResponse(this.handshakeId, "Session request rejected"), this._transport = i.transport || new pi({
      protocol: this.protocol,
      version: this.version,
      url: this.bridge,
      subscriptions: [this.clientId]
    }), this._subscribeToInternalEvents(), this._initTransport(), i.connectorOpts.uri && this._subscribeToSessionRequest(), i.pushServerOpts && this._registerPushServer(i.pushServerOpts);
  }
  set bridge(i) {
    !i || (this._bridge = i);
  }
  get bridge() {
    return this._bridge;
  }
  set key(i) {
    if (!i)
      return;
    const a = $r(i);
    this._key = a;
  }
  get key() {
    return this._key ? Lr(this._key, !0) : "";
  }
  set clientId(i) {
    !i || (this._clientId = i);
  }
  get clientId() {
    let i = this._clientId;
    return i || (i = this._clientId = ae()), this._clientId;
  }
  set peerId(i) {
    !i || (this._peerId = i);
  }
  get peerId() {
    return this._peerId;
  }
  set clientMeta(i) {
  }
  get clientMeta() {
    let i = this._clientMeta;
    return i || (i = this._clientMeta = Be()), i;
  }
  set peerMeta(i) {
    this._peerMeta = i;
  }
  get peerMeta() {
    return this._peerMeta;
  }
  set handshakeTopic(i) {
    !i || (this._handshakeTopic = i);
  }
  get handshakeTopic() {
    return this._handshakeTopic;
  }
  set handshakeId(i) {
    !i || (this._handshakeId = i);
  }
  get handshakeId() {
    return this._handshakeId;
  }
  get uri() {
    return this._formatUri();
  }
  set uri(i) {
    if (!i)
      return;
    const { handshakeTopic: a, bridge: p, key: g } = this._parseUri(i);
    this.handshakeTopic = a, this.bridge = p, this.key = g;
  }
  set chainId(i) {
    this._chainId = i;
  }
  get chainId() {
    return this._chainId;
  }
  set networkId(i) {
    this._networkId = i;
  }
  get networkId() {
    return this._networkId;
  }
  set accounts(i) {
    this._accounts = i;
  }
  get accounts() {
    return this._accounts;
  }
  set rpcUrl(i) {
    this._rpcUrl = i;
  }
  get rpcUrl() {
    return this._rpcUrl;
  }
  set connected(i) {
  }
  get connected() {
    return this._connected;
  }
  set pending(i) {
  }
  get pending() {
    return !!this._handshakeTopic;
  }
  get session() {
    return {
      connected: this.connected,
      accounts: this.accounts,
      chainId: this.chainId,
      bridge: this.bridge,
      key: this.key,
      clientId: this.clientId,
      clientMeta: this.clientMeta,
      peerId: this.peerId,
      peerMeta: this.peerMeta,
      handshakeId: this.handshakeId,
      handshakeTopic: this.handshakeTopic
    };
  }
  set session(i) {
    !i || (this._connected = i.connected, this.accounts = i.accounts, this.chainId = i.chainId, this.bridge = i.bridge, this.key = i.key, this.clientId = i.clientId, this.clientMeta = i.clientMeta, this.peerId = i.peerId, this.peerMeta = i.peerMeta, this.handshakeId = i.handshakeId, this.handshakeTopic = i.handshakeTopic);
  }
  on(i, a) {
    const p = {
      event: i,
      callback: a
    };
    this._eventManager.subscribe(p);
  }
  off(i) {
    this._eventManager.unsubscribe(i);
  }
  async createInstantRequest(i) {
    this._key = await this._generateKey();
    const a = this._formatRequest({
      method: "wc_instantRequest",
      params: [
        {
          peerId: this.clientId,
          peerMeta: this.clientMeta,
          request: this._formatRequest(i)
        }
      ]
    });
    this.handshakeId = a.id, this.handshakeTopic = ae(), this._eventManager.trigger({
      event: "display_uri",
      params: [this.uri]
    }), this.on("modal_closed", () => {
      throw new Error($e);
    });
    const p = () => {
      this.killSession();
    };
    try {
      const g = await this._sendCallRequest(a);
      return g && p(), g;
    } catch (g) {
      throw p(), g;
    }
  }
  async connect(i) {
    if (!this._qrcodeModal)
      throw new Error(xi);
    return this.connected ? {
      chainId: this.chainId,
      accounts: this.accounts
    } : (await this.createSession(i), new Promise(async (a, p) => {
      this.on("modal_closed", () => p(new Error($e))), this.on("connect", (g, c) => {
        if (g)
          return p(g);
        a(c.params[0]);
      });
    }));
  }
  async createSession(i) {
    if (this._connected)
      throw new Error(fe);
    if (this.pending)
      return;
    this._key = await this._generateKey();
    const a = this._formatRequest({
      method: "wc_sessionRequest",
      params: [
        {
          peerId: this.clientId,
          peerMeta: this.clientMeta,
          chainId: i && i.chainId ? i.chainId : null
        }
      ]
    });
    this.handshakeId = a.id, this.handshakeTopic = ae(), this._sendSessionRequest(a, "Session update rejected", {
      topic: this.handshakeTopic
    }), this._eventManager.trigger({
      event: "display_uri",
      params: [this.uri]
    });
  }
  approveSession(i) {
    if (this._connected)
      throw new Error(fe);
    this.chainId = i.chainId, this.accounts = i.accounts, this.networkId = i.networkId || 0, this.rpcUrl = i.rpcUrl || "";
    const a = {
      approved: !0,
      chainId: this.chainId,
      networkId: this.networkId,
      accounts: this.accounts,
      rpcUrl: this.rpcUrl,
      peerId: this.clientId,
      peerMeta: this.clientMeta
    }, p = {
      id: this.handshakeId,
      jsonrpc: "2.0",
      result: a
    };
    this._sendResponse(p), this._connected = !0, this._setStorageSession(), this._eventManager.trigger({
      event: "connect",
      params: [
        {
          peerId: this.peerId,
          peerMeta: this.peerMeta,
          chainId: this.chainId,
          accounts: this.accounts
        }
      ]
    });
  }
  rejectSession(i) {
    if (this._connected)
      throw new Error(fe);
    const a = i && i.message ? i.message : gi, p = this._formatResponse({
      id: this.handshakeId,
      error: { message: a }
    });
    this._sendResponse(p), this._connected = !1, this._eventManager.trigger({
      event: "disconnect",
      params: [{ message: a }]
    }), this._removeStorageSession();
  }
  updateSession(i) {
    if (!this._connected)
      throw new Error(Tt);
    this.chainId = i.chainId, this.accounts = i.accounts, this.networkId = i.networkId || 0, this.rpcUrl = i.rpcUrl || "";
    const a = {
      approved: !0,
      chainId: this.chainId,
      networkId: this.networkId,
      accounts: this.accounts,
      rpcUrl: this.rpcUrl
    }, p = this._formatRequest({
      method: "wc_sessionUpdate",
      params: [a]
    });
    this._sendSessionRequest(p, "Session update rejected"), this._eventManager.trigger({
      event: "session_update",
      params: [
        {
          chainId: this.chainId,
          accounts: this.accounts
        }
      ]
    }), this._manageStorageSession();
  }
  async killSession(i) {
    const a = i ? i.message : "Session Disconnected", p = {
      approved: !1,
      chainId: null,
      networkId: null,
      accounts: null
    }, g = this._formatRequest({
      method: "wc_sessionUpdate",
      params: [p]
    });
    await this._sendRequest(g), this._handleSessionDisconnect(a);
  }
  async sendTransaction(i) {
    if (!this._connected)
      throw new Error(Tt);
    const a = he(i), p = this._formatRequest({
      method: "eth_sendTransaction",
      params: [a]
    });
    return await this._sendCallRequest(p);
  }
  async signTransaction(i) {
    if (!this._connected)
      throw new Error(Tt);
    const a = he(i), p = this._formatRequest({
      method: "eth_signTransaction",
      params: [a]
    });
    return await this._sendCallRequest(p);
  }
  async signMessage(i) {
    if (!this._connected)
      throw new Error(Tt);
    const a = this._formatRequest({
      method: "eth_sign",
      params: i
    });
    return await this._sendCallRequest(a);
  }
  async signPersonalMessage(i) {
    if (!this._connected)
      throw new Error(Tt);
    i = Le(i);
    const a = this._formatRequest({
      method: "personal_sign",
      params: i
    });
    return await this._sendCallRequest(a);
  }
  async signTypedData(i) {
    if (!this._connected)
      throw new Error(Tt);
    const a = this._formatRequest({
      method: "eth_signTypedData",
      params: i
    });
    return await this._sendCallRequest(a);
  }
  async updateChain(i) {
    if (!this._connected)
      throw new Error("Session currently disconnected");
    const a = this._formatRequest({
      method: "wallet_updateChain",
      params: [i]
    });
    return await this._sendCallRequest(a);
  }
  unsafeSend(i, a) {
    return this._sendRequest(i, a), this._eventManager.trigger({
      event: "call_request_sent",
      params: [{ request: i, options: a }]
    }), new Promise((p, g) => {
      this._subscribeToResponse(i.id, (c, k) => {
        if (c) {
          g(c);
          return;
        }
        if (!k)
          throw new Error(vi);
        p(k);
      });
    });
  }
  async sendCustomRequest(i, a) {
    if (!this._connected)
      throw new Error(Tt);
    switch (i.method) {
      case "eth_accounts":
        return this.accounts;
      case "eth_chainId":
        return tr(this.chainId);
      case "eth_sendTransaction":
      case "eth_signTransaction":
        i.params && (i.params[0] = he(i.params[0]));
        break;
      case "personal_sign":
        i.params && (i.params = Le(i.params));
        break;
    }
    const p = this._formatRequest(i);
    return await this._sendCallRequest(p, a);
  }
  approveRequest(i) {
    if (Ut(i)) {
      const a = this._formatResponse(i);
      this._sendResponse(a);
    } else
      throw new Error(yi);
  }
  rejectRequest(i) {
    if (Pt(i)) {
      const a = this._formatResponse(i);
      this._sendResponse(a);
    } else
      throw new Error(Mi);
  }
  transportClose() {
    this._transport.close();
  }
  async _sendRequest(i, a) {
    const p = this._formatRequest(i), g = await this._encrypt(p), c = typeof (a == null ? void 0 : a.topic) < "u" ? a.topic : this.peerId, k = JSON.stringify(g), mt = typeof (a == null ? void 0 : a.forcePushNotification) < "u" ? !a.forcePushNotification : Yr(p);
    this._transport.send(k, c, mt);
  }
  async _sendResponse(i) {
    const a = await this._encrypt(i), p = this.peerId, g = JSON.stringify(a), c = !0;
    this._transport.send(g, p, c);
  }
  async _sendSessionRequest(i, a, p) {
    this._sendRequest(i, p), this._subscribeToSessionResponse(i.id, a);
  }
  _sendCallRequest(i, a) {
    return this._sendRequest(i, a), this._eventManager.trigger({
      event: "call_request_sent",
      params: [{ request: i, options: a }]
    }), this._subscribeToCallResponse(i.id);
  }
  _formatRequest(i) {
    if (typeof i.method > "u")
      throw new Error(_i);
    return {
      id: typeof i.id > "u" ? zr() : i.id,
      jsonrpc: "2.0",
      method: i.method,
      params: typeof i.params > "u" ? [] : i.params
    };
  }
  _formatResponse(i) {
    if (typeof i.id > "u")
      throw new Error(wi);
    const a = { id: i.id, jsonrpc: "2.0" };
    if (Pt(i)) {
      const p = ei(i.error);
      return Object.assign(Object.assign(Object.assign({}, a), i), { error: p });
    } else if (Ut(i))
      return Object.assign(Object.assign({}, a), i);
    throw new Error(He);
  }
  _handleSessionDisconnect(i) {
    const a = i || "Session Disconnected";
    this._connected || (this._qrcodeModal && this._qrcodeModal.close(), De(Ue)), this._connected && (this._connected = !1), this._handshakeId && (this._handshakeId = 0), this._handshakeTopic && (this._handshakeTopic = ""), this._peerId && (this._peerId = ""), this._eventManager.trigger({
      event: "disconnect",
      params: [{ message: a }]
    }), this._removeStorageSession(), this.transportClose();
  }
  _handleSessionResponse(i, a) {
    a ? a.approved ? (this._connected ? (a.chainId && (this.chainId = a.chainId), a.accounts && (this.accounts = a.accounts), this._eventManager.trigger({
      event: "session_update",
      params: [
        {
          chainId: this.chainId,
          accounts: this.accounts
        }
      ]
    })) : (this._connected = !0, a.chainId && (this.chainId = a.chainId), a.accounts && (this.accounts = a.accounts), a.peerId && !this.peerId && (this.peerId = a.peerId), a.peerMeta && !this.peerMeta && (this.peerMeta = a.peerMeta), this._eventManager.trigger({
      event: "connect",
      params: [
        {
          peerId: this.peerId,
          peerMeta: this.peerMeta,
          chainId: this.chainId,
          accounts: this.accounts
        }
      ]
    })), this._manageStorageSession()) : this._handleSessionDisconnect(i) : this._handleSessionDisconnect(i);
  }
  async _handleIncomingMessages(i) {
    if (![this.clientId, this.handshakeTopic].includes(i.topic))
      return;
    let p;
    try {
      p = JSON.parse(i.payload);
    } catch {
      return;
    }
    const g = await this._decrypt(p);
    g && this._eventManager.trigger(g);
  }
  _subscribeToSessionRequest() {
    this._transport.subscribe(this.handshakeTopic);
  }
  _subscribeToResponse(i, a) {
    this.on(`response:${i}`, a);
  }
  _subscribeToSessionResponse(i, a) {
    this._subscribeToResponse(i, (p, g) => {
      if (p) {
        this._handleSessionResponse(p.message);
        return;
      }
      Ut(g) ? this._handleSessionResponse(a, g.result) : g.error && g.error.message ? this._handleSessionResponse(g.error.message) : this._handleSessionResponse(a);
    });
  }
  _subscribeToCallResponse(i) {
    return new Promise((a, p) => {
      this._subscribeToResponse(i, (g, c) => {
        if (g) {
          p(g);
          return;
        }
        Ut(c) ? a(c.result) : c.error && c.error.message ? p(c.error) : p(new Error(He));
      });
    });
  }
  _subscribeToInternalEvents() {
    this.on("display_uri", () => {
      this._qrcodeModal && this._qrcodeModal.open(this.uri, () => {
        this._eventManager.trigger({
          event: "modal_closed",
          params: []
        });
      }, this._qrcodeModalOptions);
    }), this.on("connect", () => {
      this._qrcodeModal && this._qrcodeModal.close();
    }), this.on("call_request_sent", (i, a) => {
      const { request: p } = a.params[0];
      if (vr() && this._signingMethods.includes(p.method)) {
        const g = Ze(Ue);
        g && (window.location.href = g.href);
      }
    }), this.on("wc_sessionRequest", (i, a) => {
      i && this._eventManager.trigger({
        event: "error",
        params: [
          {
            code: "SESSION_REQUEST_ERROR",
            message: i.toString()
          }
        ]
      }), this.handshakeId = a.id, this.peerId = a.params[0].peerId, this.peerMeta = a.params[0].peerMeta;
      const p = Object.assign(Object.assign({}, a), { method: "session_request" });
      this._eventManager.trigger(p);
    }), this.on("wc_sessionUpdate", (i, a) => {
      i && this._handleSessionResponse(i.message), this._handleSessionResponse("Session disconnected", a.params[0]);
    });
  }
  _initTransport() {
    this._transport.on("message", (i) => this._handleIncomingMessages(i)), this._transport.on("open", () => this._eventManager.trigger({ event: "transport_open", params: [] })), this._transport.on("close", () => this._eventManager.trigger({ event: "transport_close", params: [] })), this._transport.on("error", () => this._eventManager.trigger({
      event: "transport_error",
      params: ["Websocket connection failed"]
    })), this._transport.open();
  }
  _formatUri() {
    const i = this.protocol, a = this.handshakeTopic, p = this.version, g = encodeURIComponent(this.bridge), c = this.key;
    return `${i}:${a}@${p}?bridge=${g}&key=${c}`;
  }
  _parseUri(i) {
    const a = ci(i);
    if (a.protocol === this.protocol) {
      if (!a.handshakeTopic)
        throw Error("Invalid or missing handshakeTopic parameter value");
      const p = a.handshakeTopic;
      if (!a.bridge)
        throw Error("Invalid or missing bridge url parameter value");
      const g = decodeURIComponent(a.bridge);
      if (!a.key)
        throw Error("Invalid or missing key parameter value");
      const c = a.key;
      return { handshakeTopic: p, bridge: g, key: c };
    } else
      throw new Error(Si);
  }
  async _generateKey() {
    return this._cryptoLib ? await this._cryptoLib.generateKey() : null;
  }
  async _encrypt(i) {
    const a = this._key;
    return this._cryptoLib && a ? await this._cryptoLib.encrypt(i, a) : null;
  }
  async _decrypt(i) {
    const a = this._key;
    return this._cryptoLib && a ? await this._cryptoLib.decrypt(i, a) : null;
  }
  _getStorageSession() {
    let i = null;
    return this._sessionStorage && (i = this._sessionStorage.getSession()), i;
  }
  _setStorageSession() {
    this._sessionStorage && this._sessionStorage.setSession(this.session);
  }
  _removeStorageSession() {
    this._sessionStorage && this._sessionStorage.removeSession();
  }
  _manageStorageSession() {
    this._connected ? this._setStorageSession() : this._removeStorageSession();
  }
  _registerPushServer(i) {
    if (!i.url || typeof i.url != "string")
      throw Error("Invalid or missing pushServerOpts.url parameter value");
    if (!i.type || typeof i.type != "string")
      throw Error("Invalid or missing pushServerOpts.type parameter value");
    if (!i.token || typeof i.token != "string")
      throw Error("Invalid or missing pushServerOpts.token parameter value");
    const a = {
      bridge: this.bridge,
      topic: this.clientId,
      type: i.type,
      token: i.token,
      peerName: "",
      language: i.language || ""
    };
    this.on("connect", async (p, g) => {
      if (p)
        throw p;
      if (i.peerMeta) {
        const c = g.params[0].peerMeta.name;
        a.peerName = c;
      }
      try {
        if (!(await (await fetch(`${i.url}/new`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(a)
        })).json()).success)
          throw Error("Failed to register in Push Server");
      } catch {
        throw Error("Failed to register in Push Server");
      }
    });
  }
}
function Ui(s) {
  return Bt.getBrowerCrypto().getRandomValues(new Uint8Array(s));
}
const hr = 256, fr = hr, Fi = hr, It = "AES-CBC", Li = `SHA-${fr}`, le = "HMAC", Pi = "encrypt", ji = "decrypt", Hi = "sign", $i = "verify";
function Zi(s) {
  return s === It ? { length: fr, name: It } : {
    hash: { name: Li },
    name: le
  };
}
function Di(s) {
  return s === It ? [Pi, ji] : [Hi, $i];
}
async function ve(s, i = It) {
  return Bt.getSubtleCrypto().importKey("raw", s, Zi(i), !0, Di(i));
}
async function Ji(s, i, a) {
  const p = Bt.getSubtleCrypto(), g = await ve(i, It), c = await p.encrypt({
    iv: s,
    name: It
  }, g, a);
  return new Uint8Array(c);
}
async function Wi(s, i, a) {
  const p = Bt.getSubtleCrypto(), g = await ve(i, It), c = await p.decrypt({
    iv: s,
    name: It
  }, g, a);
  return new Uint8Array(c);
}
async function zi(s, i) {
  const a = Bt.getSubtleCrypto(), p = await ve(s, le), g = await a.sign({
    length: Fi,
    name: le
  }, p, i);
  return new Uint8Array(g);
}
function Ki(s, i, a) {
  return Ji(s, i, a);
}
function Qi(s, i, a) {
  return Wi(s, i, a);
}
async function ur(s, i) {
  return await zi(s, i);
}
async function cr(s) {
  const i = (s || 256) / 8, a = Ui(i);
  return Pr(Ht(a));
}
async function lr(s, i) {
  const a = At(s.data), p = At(s.iv), g = At(s.hmac), c = qt(g, !1), k = Ye(a, p), mt = await ur(i, k), E = qt(mt, !1);
  return Rt(c) === Rt(E);
}
async function Gi(s, i, a) {
  const p = Ct(ue(i)), g = a || await cr(128), c = Ct(ue(g)), k = qt(c, !1), mt = JSON.stringify(s), E = Or(mt), gt = await Ki(c, p, E), kt = qt(gt, !1), _t = Ye(gt, c), wt = await ur(p, _t), yt = qt(wt, !1);
  return {
    data: kt,
    hmac: yt,
    iv: k
  };
}
async function Vi(s, i) {
  const a = Ct(ue(i));
  if (!a)
    throw new Error("Missing key: required for decryption");
  if (!await lr(s, a))
    return null;
  const g = At(s.data), c = At(s.iv), k = await Qi(c, a, g), mt = Er(k);
  let E;
  try {
    E = JSON.parse(mt);
  } catch {
    return null;
  }
  return E;
}
const Yi = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  generateKey: cr,
  verifyHmac: lr,
  encrypt: Gi,
  decrypt: Vi
}, Symbol.toStringTag, { value: "Module" }));
class en extends Bi {
  constructor(i, a) {
    super({
      cryptoLib: Yi,
      connectorOpts: i,
      pushServerOpts: a
    });
  }
}
export {
  en as default
};
