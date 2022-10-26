import { S as M, i as R, s as I, x as O, e as ye, a as _, b as x, g as V, t as z, c as A, d as k, h as Y, j as _e, k as xe, f as D, r as h, v as y, K as ke, m as H, C as j, ag as B, n as G, G as g, l as S, I as me, az as Ce, aA as ze, aB as Te, N as Le, O as je, Q as Pe, X as Se, q as F, a2 as Z, a3 as Ne, aC as Ee, aD as be, V as Me, J as Re, aE as J, aF as K, F as $, R as he, w as Ie, Y as ge, aG as Oe, aH as De, aI as Q, aJ as U, o as we, p as E, aK as X, D as N, M as q, aL as ee, aM as He, aN as te, aO as P, z as Ge, Z as W, aP as Fe } from "./index.55b2d290.mjs";
function Ve(i, { from: e, to: t }, n = {}) {
  const o = getComputedStyle(i), a = o.transform === "none" ? "" : o.transform, [f, l] = o.transformOrigin.split(" ").map(parseFloat), s = e.left + e.width * f / t.width - (t.left + f), r = e.top + e.height * l / t.height - (t.top + l), { delay: c = 0, duration: d = (u) => Math.sqrt(u) * 120, easing: v = be } = n;
  return {
    delay: c,
    duration: Re(d) ? d(Math.sqrt(s * s + r * r)) : d,
    easing: v,
    css: (u, b) => {
      const p = b * s, m = b * r, C = u + b * e.width / t.width, T = u + b * e.height / t.height;
      return `transform: ${a} translate(${p}px, ${m}px) scale(${C}, ${T});`;
    }
  };
}
function Ae(i) {
  O(i, "svelte-13cuwwo", "div.svelte-13cuwwo{box-sizing:content-box}.border.svelte-13cuwwo{border:2px solid;border-radius:120px;overflow:hidden}");
}
function $e(i) {
  let e, t;
  return {
    c() {
      e = h("div"), y(e, "class", "border svelte-13cuwwo"), y(e, "style", t = `
    width: ${i[2] - i[3] * 2}px; 
    height: ${i[2] - i[3] * 2}px; 
    border-color: var(${i[1]}); 
    padding: ${i[3]}px; 
    background-color: ${i[4]};
    border-radius: 50%;
    display: flex;
    justify-content: center;
  `);
    },
    m(n, o) {
      _(n, e, o), e.innerHTML = i[0];
    },
    p(n, [o]) {
      o & 1 && (e.innerHTML = n[0]), o & 30 && t !== (t = `
    width: ${n[2] - n[3] * 2}px; 
    height: ${n[2] - n[3] * 2}px; 
    border-color: var(${n[1]}); 
    padding: ${n[3]}px; 
    background-color: ${n[4]};
    border-radius: 50%;
    display: flex;
    justify-content: center;
  `) && y(e, "style", t);
    },
    i: E,
    o: E,
    d(n) {
      n && k(e);
    }
  };
}
function Be(i, e, t) {
  let { icon: n } = e, { borderColorVar: o } = e, { size: a } = e, { padding: f = 0 } = e, { background: l = "transparent" } = e;
  return i.$$set = (s) => {
    "icon" in s && t(0, n = s.icon), "borderColorVar" in s && t(1, o = s.borderColorVar), "size" in s && t(2, a = s.size), "padding" in s && t(3, f = s.padding), "background" in s && t(4, l = s.background);
  }, [n, o, a, f, l];
}
class Ke extends M {
  constructor(e) {
    super(), R(
      this,
      e,
      Be,
      $e,
      I,
      {
        icon: 0,
        borderColorVar: 1,
        size: 2,
        padding: 3,
        background: 4
      },
      Ae
    );
  }
}
function We(i) {
  O(i, "svelte-jvic9v", "div.notification-icons-wrapper.svelte-jvic9v{height:32px;width:32px}.border.svelte-jvic9v{border-radius:8px}div.notification-icon.svelte-jvic9v{padding:6px}div.pending-icon.svelte-jvic9v{animation:svelte-jvic9v-blink 2s ease-in infinite;height:100%;width:100%;padding:7px}@keyframes svelte-jvic9v-blink{from,to{opacity:1}50%{opacity:0.2}}div.border-action.svelte-jvic9v{height:32px;min-width:32px;border-radius:8px;overflow:hidden;will-change:transform}div.border-action.svelte-jvic9v:before{content:'';background-image:conic-gradient(#b1b7f2 20deg, #6370e5 120deg);height:140%;width:140%;position:absolute;left:-25%;top:-25%;animation:svelte-jvic9v-rotate 2s infinite linear}div.chain-icon-container.svelte-jvic9v{left:18px;top:18px}@keyframes svelte-jvic9v-rotate{100%{transform:rotate(-360deg)}}");
}
function ne(i) {
  let e, t, n, o, a = P[i[1].type].eventIcon + "", f, l, s, r = !i[1].id.includes("customNotification") && !i[1].id.includes("preflight"), c, d = i[1].type === "pending" && ie(), v = r && oe(i);
  return {
    c() {
      e = h("div"), d && d.c(), t = j(), n = h("div"), o = h("div"), s = j(), v && v.c(), y(o, "class", f = B(`notification-icon flex items-center justify-center ${i[1].type === "pending" ? "pending-icon" : ""}`) + " svelte-jvic9v"), y(n, "class", "flex items-center justify-center border relative notification-icons-wrapper svelte-jvic9v"), y(n, "style", l = `background:${P[i[1].type].backgroundColor}; color: ${P[i[1].type].iconColor || ""}; ${i[1].type === "pending" ? "height: 28px; width: 28px; margin: 2px;" : `border: 2px solid ${P[i[1].type].borderColor}`}; `), y(e, "class", "relative");
    },
    m(u, b) {
      _(u, e, b), d && d.m(e, null), g(e, t), g(e, n), g(n, o), o.innerHTML = a, g(e, s), v && v.m(e, null), c = !0;
    },
    p(u, b) {
      u[1].type === "pending" ? d || (d = ie(), d.c(), d.m(e, t)) : d && (d.d(1), d = null), (!c || b & 2) && a !== (a = P[u[1].type].eventIcon + "") && (o.innerHTML = a), (!c || b & 2 && f !== (f = B(`notification-icon flex items-center justify-center ${u[1].type === "pending" ? "pending-icon" : ""}`) + " svelte-jvic9v")) && y(o, "class", f), (!c || b & 2 && l !== (l = `background:${P[u[1].type].backgroundColor}; color: ${P[u[1].type].iconColor || ""}; ${u[1].type === "pending" ? "height: 28px; width: 28px; margin: 2px;" : `border: 2px solid ${P[u[1].type].borderColor}`}; `)) && y(n, "style", l), b & 2 && (r = !u[1].id.includes("customNotification") && !u[1].id.includes("preflight")), r ? v ? (v.p(u, b), b & 2 && x(v, 1)) : (v = oe(u), v.c(), x(v, 1), v.m(e, null)) : v && (V(), z(v, 1, 1, () => {
        v = null;
      }), A());
    },
    i(u) {
      c || (x(v), c = !0);
    },
    o(u) {
      z(v), c = !1;
    },
    d(u) {
      u && k(e), d && d.d(), v && v.d();
    }
  };
}
function ie(i) {
  let e;
  return {
    c() {
      e = h("div"), y(e, "class", "border-action absolute svelte-jvic9v");
    },
    m(t, n) {
      _(t, e, n);
    },
    d(t) {
      t && k(e);
    }
  };
}
function oe(i) {
  let e, t, n;
  return t = new Ke({
    props: {
      icon: i[0].icon,
      size: 16,
      background: i[0].color,
      borderColorVar: "--onboard-gray-600, var(--gray-600)",
      padding: 3
    }
  }), {
    c() {
      e = h("div"), H(t.$$.fragment), y(e, "class", "absolute chain-icon-container svelte-jvic9v");
    },
    m(o, a) {
      _(o, e, a), G(t, e, null), n = !0;
    },
    p(o, a) {
      const f = {};
      a & 1 && (f.icon = o[0].icon), a & 1 && (f.background = o[0].color), t.$set(f);
    },
    i(o) {
      n || (x(t.$$.fragment, o), n = !0);
    },
    o(o) {
      z(t.$$.fragment, o), n = !1;
    },
    d(o) {
      o && k(e), F(t);
    }
  };
}
function qe(i) {
  let e, t, n = i[1].type && ne(i);
  return {
    c() {
      n && n.c(), e = ye();
    },
    m(o, a) {
      n && n.m(o, a), _(o, e, a), t = !0;
    },
    p(o, [a]) {
      o[1].type ? n ? (n.p(o, a), a & 2 && x(n, 1)) : (n = ne(o), n.c(), x(n, 1), n.m(e.parentNode, e)) : n && (V(), z(n, 1, 1, () => {
        n = null;
      }), A());
    },
    i(o) {
      t || (x(n), t = !0);
    },
    o(o) {
      z(n), t = !1;
    },
    d(o) {
      n && n.d(o), o && k(e);
    }
  };
}
function Ye(i, e, t) {
  let { chainStyles: n = Ge } = e, { notification: o } = e;
  return i.$$set = (a) => {
    "chainStyles" in a && t(0, n = a.chainStyles), "notification" in a && t(1, o = a.notification);
  }, [n, o];
}
class Ze extends M {
  constructor(e) {
    super(), R(this, e, Ye, qe, I, { chainStyles: 0, notification: 1 }, We);
  }
}
function Je(i) {
  O(i, "svelte-pm7idu", `div.svelte-pm7idu{display:flex;justify-content:center;font-size:inherit;font-family:inherit;margin:0 1.5rem 0 0.75rem}span.svelte-pm7idu{font-family:inherit;display:flex;align-items:center;margin:0 2px}.time.svelte-pm7idu{color:var(
      --notify-onboard-timer-color,
      var(--onboard-gray-300, var(--gray-300))
    );margin-left:4px}`);
}
function ae(i) {
  let e, t, n = i[2](i[1] - i[0]) + "", o, a;
  return {
    c() {
      e = N(`-
    `), t = h("span"), o = N(n), a = N(`
    ago`), y(t, "class", "svelte-pm7idu");
    },
    m(f, l) {
      _(f, e, l), _(f, t, l), g(t, o), _(f, a, l);
    },
    p(f, l) {
      l & 3 && n !== (n = f[2](f[1] - f[0]) + "") && q(o, n);
    },
    d(f) {
      f && k(e), f && k(t), f && k(a);
    }
  };
}
function Qe(i) {
  let e, t = i[0] && ae(i);
  return {
    c() {
      e = h("div"), t && t.c(), y(e, "class", "time svelte-pm7idu");
    },
    m(n, o) {
      _(n, e, o), t && t.m(e, null);
    },
    p(n, [o]) {
      n[0] ? t ? t.p(n, o) : (t = ae(n), t.c(), t.m(e, null)) : t && (t.d(1), t = null);
    },
    i: E,
    o: E,
    d(n) {
      n && k(e), t && t.d();
    }
  };
}
function Ue(i, e, t) {
  let n, o;
  D(i, ge, (r) => t(3, n = r)), D(i, Fe, (r) => t(4, o = r));
  let { startTime: a } = e;
  function f(r) {
    const c = Math.floor(r / 1e3), d = c < 0 ? 0 : c;
    return d >= 60 ? `${Math.floor(d / 60).toLocaleString(o)} ${n("notify.time.minutes")}` : `${d.toLocaleString(o)} ${n("notify.time.seconds")}`;
  }
  let l = Date.now();
  const s = setInterval(
    () => {
      t(1, l = Date.now());
    },
    1e3
  );
  return we(() => {
    clearInterval(s);
  }), i.$$set = (r) => {
    "startTime" in r && t(0, a = r.startTime);
  }, [a, l, f];
}
class Xe extends M {
  constructor(e) {
    super(), R(this, e, Ue, Qe, I, { startTime: 0 }, Je);
  }
}
function et(i) {
  O(i, "svelte-gv6x72", `div.notify-transaction-data.svelte-gv6x72{font-size:var(
      --notify-onboard-transaction-font-size,
      var(--onboard-font-size-6, var(--font-size-6))
    );font-family:inherit;margin:0px 20px 0px 8px;justify-content:center}.hash-time.svelte-gv6x72{display:inline-flex;margin-top:4px;font-size:var(
      --notify-onboard-hash-time-font-size,
      var(--onboard-font-size-7, var(--font-size-7))
    );line-height:var(
      --notify-onboard-hash-time-font-line-height,
      var(--onboard-font-line-height-4, var(--font-line-height-4))
    )}.address-hash.svelte-gv6x72{color:var(
      --notify-onboard-address-hash-color,
      var(--onboard-primary-200, var(--primary-200))
    )}a.address-hash.svelte-gv6x72{color:var(
      --notify-onboard-anchor-color,
      var(--onboard-primary-400, var(--primary-400))
    )}a.svelte-gv6x72{display:flex;text-decoration:none;color:inherit}.transaction-status.svelte-gv6x72{color:var(
      --notify-onboard-transaction-status,
      var(--onboard-primary-100, var(--primary-100))
    );line-height:var(
      --notify-onboard-font-size-5,
      var(--onboard-font-size-5, var(--font-size-5))
    );font-weight:400;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}`);
}
function re(i) {
  let e, t, n, o;
  function a(s, r) {
    return s[0].link ? nt : tt;
  }
  let f = a(i), l = f(i);
  return n = new Xe({
    props: {
      startTime: i[0].startTime
    }
  }), {
    c() {
      e = h("span"), l.c(), t = j(), H(n.$$.fragment), y(e, "class", "hash-time svelte-gv6x72");
    },
    m(s, r) {
      _(s, e, r), l.m(e, null), g(e, t), G(n, e, null), o = !0;
    },
    p(s, r) {
      f === (f = a(s)) && l ? l.p(s, r) : (l.d(1), l = f(s), l && (l.c(), l.m(e, t)));
      const c = {};
      r & 1 && (c.startTime = s[0].startTime), n.$set(c);
    },
    i(s) {
      o || (x(n.$$.fragment, s), o = !0);
    },
    o(s) {
      z(n.$$.fragment, s), o = !1;
    },
    d(s) {
      s && k(e), l.d(), F(n);
    }
  };
}
function tt(i) {
  let e, t = W(i[0].id) + "", n;
  return {
    c() {
      e = h("div"), n = N(t), y(e, "class", "address-hash svelte-gv6x72");
    },
    m(o, a) {
      _(o, e, a), g(e, n);
    },
    p(o, a) {
      a & 1 && t !== (t = W(o[0].id) + "") && q(n, t);
    },
    d(o) {
      o && k(e);
    }
  };
}
function nt(i) {
  let e, t = W(i[0].id) + "", n, o;
  return {
    c() {
      e = h("a"), n = N(t), y(e, "class", "address-hash svelte-gv6x72"), y(e, "href", o = i[0].link), y(e, "target", "_blank"), y(e, "rel", "noreferrer noopener");
    },
    m(a, f) {
      _(a, e, f), g(e, n);
    },
    p(a, f) {
      f & 1 && t !== (t = W(a[0].id) + "") && q(n, t), f & 1 && o !== (o = a[0].link) && y(e, "href", o);
    },
    d(a) {
      a && k(e);
    }
  };
}
function it(i) {
  let e, t, n = i[0].message + "", o, a, f = i[0].id && !i[0].id.includes("customNotification") && !i[0].id.includes("preflight"), l, s = f && re(i);
  return {
    c() {
      e = h("div"), t = h("span"), o = N(n), a = j(), s && s.c(), y(t, "class", "transaction-status svelte-gv6x72"), y(e, "class", "flex flex-column notify-transaction-data svelte-gv6x72");
    },
    m(r, c) {
      _(r, e, c), g(e, t), g(t, o), g(e, a), s && s.m(e, null), l = !0;
    },
    p(r, [c]) {
      (!l || c & 1) && n !== (n = r[0].message + "") && q(o, n), c & 1 && (f = r[0].id && !r[0].id.includes("customNotification") && !r[0].id.includes("preflight")), f ? s ? (s.p(r, c), c & 1 && x(s, 1)) : (s = re(r), s.c(), x(s, 1), s.m(e, null)) : s && (V(), z(s, 1, 1, () => {
        s = null;
      }), A());
    },
    i(r) {
      l || (x(s), l = !0);
    },
    o(r) {
      z(s), l = !1;
    },
    d(r) {
      r && k(e), s && s.d();
    }
  };
}
function ot(i, e, t) {
  let { notification: n } = e;
  return i.$$set = (o) => {
    "notification" in o && t(0, n = o.notification);
  }, [n];
}
class at extends M {
  constructor(e) {
    super(), R(this, e, ot, it, I, { notification: 0 }, et);
  }
}
var rt = `
<svg width="100%" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z" fill="currentColor"/>
</svg>
`;
const st = ["txPool"], lt = ["main", "matic-main"], ct = [
  "Ledger",
  "Trezor",
  "Keystone",
  "KeepKey",
  "D'CENT"
], se = (i) => st.includes(i), le = (i) => lt.includes(i), ce = (i) => i && ct.includes(i.label);
async function fe({ type: i, wallet: e, transaction: t }) {
  const { from: n, input: o, value: a, to: f, nonce: l, gas: s, network: r } = t, c = K[r], { gasPriceProbability: d } = Y.get().notify.replacement, { gas: v, apiKey: u } = Z, [b] = await v.get({
    chains: [K[r]],
    endpoint: "blockPrices",
    apiKey: u
  }), { maxFeePerGas: p, maxPriorityFeePerGas: m } = b.blockPrices[0].estimatedPrices.find(({ confidence: L }) => L === (i === "speedup" ? d.speedup : d.cancel)), C = ee(p), T = ee(m), w = o === "0x" ? {} : { data: o };
  return e.provider.request({
    method: "eth_sendTransaction",
    params: [
      {
        type: "0x2",
        from: n,
        to: i === "cancel" ? n : f,
        chainId: parseInt(c),
        value: `${He.from(a).toHexString()}`,
        nonce: te(l),
        gasLimit: te(s),
        maxFeePerGas: C,
        maxPriorityFeePerGas: T,
        ...w
      }
    ]
  });
}
function ft(i) {
  O(i, "svelte-4xaywn", `.bn-notify-notification.svelte-4xaywn.svelte-4xaywn.svelte-4xaywn{font-family:inherit;transition:background 300ms ease-in-out, color 300ms ease-in-out;pointer-events:all;backdrop-filter:blur(5px);width:100%;min-height:56px;background:var(
      --notify-onboard-background,
      var(--onboard-gray-600, var(--gray-600))
    );border-radius:var(
      --notify-onboard-border-radius,
      var(--onboard-border-radius-4, var(--border-radius-4))
    );display:flex;flex-direction:column;position:relative;overflow:hidden}.bn-notify-notification-inner.svelte-4xaywn.svelte-4xaywn.svelte-4xaywn{padding:0.75rem}.bn-notify-notification.svelte-4xaywn:hover>div.bn-notify-notification-inner.svelte-4xaywn>div.notify-close-btn-desktop.svelte-4xaywn{visibility:visible;opacity:1}div.notify-close-btn.svelte-4xaywn.svelte-4xaywn.svelte-4xaywn{margin-left:auto;margin-bottom:auto;height:24px;width:24px;position:absolute;top:8px;right:8px;justify-content:center;align-items:center}div.notify-close-btn-desktop.svelte-4xaywn.svelte-4xaywn.svelte-4xaywn{visibility:hidden;transition:visibility 0.15s linear, opacity 0.15s linear;opacity:0}.notify-close-btn.svelte-4xaywn .close-icon.svelte-4xaywn.svelte-4xaywn{width:20px;margin:auto}.notify-close-btn.svelte-4xaywn>.close-icon.svelte-4xaywn.svelte-4xaywn{color:var(
      --notify-onboard-close-icon-color,
      var(--onboard-gray-300, var(--gray-300))
    )}.notify-close-btn.svelte-4xaywn:hover>.close-icon.svelte-4xaywn.svelte-4xaywn{color:var(
      --notify-onboard-close-icon-hover,
      var(--onboard-gray-100, var(--gray-100))
    )}.transaction-status.svelte-4xaywn.svelte-4xaywn.svelte-4xaywn{color:var(
      --notify-onboard-transaction-status-color,
      var(--onboard-primary-100, var(--primary-100))
    );line-height:14px}.dropdown.svelte-4xaywn.svelte-4xaywn.svelte-4xaywn{height:0px;overflow:hidden;transition:height 150ms ease-in-out}.dropdown-visible.svelte-4xaywn.svelte-4xaywn.svelte-4xaywn{height:48px}.dropdown-buttons.svelte-4xaywn.svelte-4xaywn.svelte-4xaywn{background-color:var(
      --notify-onboard-gray-700,
      var(--onboard-gray-700, var(--gray-700))
    );width:100%;padding:8px}.dropdown-button.svelte-4xaywn.svelte-4xaywn.svelte-4xaywn{padding:4px 12px;border-radius:var(
      --notify-onboard-border-radius-5,
      var(--onboard-border-radius-5, var(--border-radius-5))
    );background-color:transparent;font-size:var(
      --notify-onboard-font-size-6,
      var(--onboard-font-size-6, var(--font-size-6))
    );color:var(
      --notify-onboard-primary-400,
      var(--onboard-primary-400, var(--primary-400))
    );transition:all 150ms ease-in-out;cursor:pointer}.dropdown-button.svelte-4xaywn.svelte-4xaywn.svelte-4xaywn:hover{background-color:rgba(146, 155, 237, 0.2)}`);
}
function de(i) {
  let e, t, n, o, a, f;
  return {
    c() {
      e = h("div"), t = h("button"), t.textContent = "Cancel", n = j(), o = h("button"), o.textContent = "Speed-up", y(t, "class", "dropdown-button svelte-4xaywn"), y(o, "class", "dropdown-button svelte-4xaywn"), y(e, "class", "dropdown-buttons flex items-center justify-end svelte-4xaywn");
    },
    m(l, s) {
      _(l, e, s), g(e, t), g(e, n), g(e, o), a || (f = [
        S(t, "click", i[9]),
        S(o, "click", i[10])
      ], a = !0);
    },
    p: E,
    d(l) {
      l && k(e), a = !1, he(f);
    }
  };
}
function dt(i) {
  let e, t, n, o, a, f, l, s, r, c, d, v, u, b;
  n = new Ze({
    props: {
      notification: i[0],
      chainStyles: J[K[i[0].network]]
    }
  }), a = new at({
    props: { notification: i[0] }
  });
  let p = i[0].eventCode === "txPool" && de(i);
  return {
    c() {
      e = h("div"), t = h("div"), H(n.$$.fragment), o = j(), H(a.$$.fragment), f = j(), l = h("div"), s = h("div"), r = j(), c = h("div"), p && p.c(), y(s, "class", "flex items-center close-icon svelte-4xaywn"), y(l, "class", "notify-close-btn notify-close-btn-" + i[4].type + " pointer flex svelte-4xaywn"), y(t, "class", "flex bn-notify-notification-inner svelte-4xaywn"), y(c, "class", "dropdown svelte-4xaywn"), $(c, "dropdown-visible", i[2] && i[5] && se(i[0].eventCode) && le(i[0].network) && ce(i[7])), y(e, "class", d = "bn-notify-notification bn-notify-notification-" + i[0].type + "} svelte-4xaywn"), $(e, "bn-notify-clickable", i[0].onClick);
    },
    m(m, C) {
      _(m, e, C), g(e, t), G(n, t, null), g(t, o), G(a, t, null), g(t, f), g(t, l), g(l, s), s.innerHTML = rt, g(e, r), g(e, c), p && p.m(c, null), v = !0, u || (b = [
        S(l, "click", me(i[8])),
        S(e, "mouseenter", i[11]),
        S(e, "mouseleave", i[12]),
        S(e, "click", i[13])
      ], u = !0);
    },
    p(m, [C]) {
      const T = {};
      C & 1 && (T.notification = m[0]), C & 1 && (T.chainStyles = J[K[m[0].network]]), n.$set(T);
      const w = {};
      C & 1 && (w.notification = m[0]), a.$set(w), m[0].eventCode === "txPool" ? p ? p.p(m, C) : (p = de(m), p.c(), p.m(c, null)) : p && (p.d(1), p = null), (!v || C & 165) && $(c, "dropdown-visible", m[2] && m[5] && se(m[0].eventCode) && le(m[0].network) && ce(m[7])), (!v || C & 1 && d !== (d = "bn-notify-notification bn-notify-notification-" + m[0].type + "} svelte-4xaywn")) && y(e, "class", d), (!v || C & 1) && $(e, "bn-notify-clickable", m[0].onClick);
    },
    i(m) {
      v || (x(n.$$.fragment, m), x(a.$$.fragment, m), v = !0);
    },
    o(m) {
      z(n.$$.fragment, m), z(a.$$.fragment, m), v = !1;
    },
    d(m) {
      m && k(e), F(n), F(a), p && p.d(), u = !1, he(b);
    }
  };
}
function ut(i, e, t) {
  let n, o;
  D(i, Ie, (w) => t(15, n = w)), D(i, ge, (w) => t(3, o = w));
  const { device: a, gas: f } = Z;
  let { notification: l } = e, { updateParentOnRemove: s } = e, r, c = !1;
  const d = Oe.getValue().find(({ hash: w }) => w === l.id), v = d && n.find(({ accounts: w }) => !!w.find(({ address: L }) => L.toLowerCase() === d.from.toLowerCase()));
  De(() => {
    l.autoDismiss && (r = setTimeout(
      () => {
        Q(l.id), U(l.id);
      },
      l.autoDismiss
    ));
  }), we(() => {
    clearTimeout(r);
  });
  const u = () => {
    Q(l.id), U(l.id), s();
  }, b = async () => {
    try {
      await fe({ type: "cancel", wallet: v, transaction: d });
    } catch {
      const L = `${d.hash.slice(0, 9)}:txReplaceError${d.hash.slice(-5)}`;
      X({
        id: L,
        type: "hint",
        eventCode: "txError",
        message: o("notify.transaction.txReplaceError"),
        key: L,
        autoDismiss: 4e3
      });
    }
  }, p = async () => {
    try {
      await fe({ type: "speedup", wallet: v, transaction: d });
    } catch {
      const L = `${d.hash.slice(0, 9)}:txReplaceError${d.hash.slice(-5)}`;
      X({
        id: L,
        type: "hint",
        eventCode: "txError",
        message: o("notify.transaction.txReplaceError"),
        key: L,
        autoDismiss: 4e3
      });
    }
  }, m = () => t(2, c = !0), C = () => t(2, c = !1), T = (w) => l.onClick && l.onClick(w);
  return i.$$set = (w) => {
    "notification" in w && t(0, l = w.notification), "updateParentOnRemove" in w && t(1, s = w.updateParentOnRemove);
  }, [
    l,
    s,
    c,
    o,
    a,
    f,
    d,
    v,
    u,
    b,
    p,
    m,
    C,
    T
  ];
}
class vt extends M {
  constructor(e) {
    super(), R(this, e, ut, dt, I, { notification: 0, updateParentOnRemove: 1 }, ft);
  }
}
function pt(i) {
  O(i, "svelte-17x6hrg", `ul.svelte-17x6hrg{padding-left:0;display:flex;flex-flow:column nowrap;font-size:var(
      --notify-onboard-font-size-5,
      var(--onboard-font-size-5, var(--font-size-5))
    );list-style-type:none;overflow:visible;scrollbar-width:none;box-sizing:border-box;z-index:var(--notify-onboard-z-index, 300);font-family:var(
      --notify-onboard-font-family-normal,
      var(--onboard-font-family-normal, var(--font-family-normal))
    );margin:8px 0;pointer-events:all}.y-scroll.svelte-17x6hrg{overflow-y:scroll}.y-visible.svelte-17x6hrg{overflow-y:visible}li.notification-list-top.svelte-17x6hrg:not(:first-child){margin-top:8px}li.notification-list-bottom.svelte-17x6hrg:not(:first-child){margin-bottom:8px}ul.bn-notify-bottomLeft.svelte-17x6hrg,ul.bn-notify-bottomRight.svelte-17x6hrg{flex-direction:column-reverse}@media only screen and (max-width: 450px){ul.svelte-17x6hrg{width:100%}}.bn-notify-clickable:hover{cursor:pointer}.svelte-17x6hrg::-webkit-scrollbar{display:none}`);
}
function ue(i, e, t) {
  const n = i.slice();
  return n[12] = e[t], n;
}
function ve(i) {
  let e, t = [], n = /* @__PURE__ */ new Map(), o, a, f, l = i[2];
  const s = (r) => r[12].key;
  for (let r = 0; r < l.length; r += 1) {
    let c = ue(i, l, r), d = s(c);
    n.set(d, t[r] = pe(d, c));
  }
  return {
    c() {
      e = h("ul");
      for (let r = 0; r < t.length; r += 1)
        t[r].c();
      y(e, "class", o = "bn-notify-" + i[0] + " " + i[5] + " svelte-17x6hrg"), y(e, "style", a = `${i[0].includes("top") ? "justify-content:flex-start;" : ""}; max-height: calc(100vh - ${i[6].expanded ? "412px" : i[1] && i[7].type !== "mobile" ? "82px" : !i[1] && i[7].type === "mobile" ? "108px" : "24px"})`);
    },
    m(r, c) {
      _(r, e, c);
      for (let d = 0; d < t.length; d += 1)
        t[d].m(e, null);
      f = !0;
    },
    p(r, c) {
      if (c & 517) {
        l = r[2], V();
        for (let d = 0; d < t.length; d += 1)
          t[d].r();
        t = ke(t, c, s, 1, r, l, n, e, Ee, pe, null, ue);
        for (let d = 0; d < t.length; d += 1)
          t[d].a();
        A();
      }
      (!f || c & 33 && o !== (o = "bn-notify-" + r[0] + " " + r[5] + " svelte-17x6hrg")) && y(e, "class", o), (!f || c & 67 && a !== (a = `${r[0].includes("top") ? "justify-content:flex-start;" : ""}; max-height: calc(100vh - ${r[6].expanded ? "412px" : r[1] && r[7].type !== "mobile" ? "82px" : !r[1] && r[7].type === "mobile" ? "108px" : "24px"})`)) && y(e, "style", a);
    },
    i(r) {
      if (!f) {
        for (let c = 0; c < l.length; c += 1)
          x(t[c]);
        f = !0;
      }
    },
    o(r) {
      for (let c = 0; c < t.length; c += 1)
        z(t[c]);
      f = !1;
    },
    d(r) {
      r && k(e);
      for (let c = 0; c < t.length; c += 1)
        t[c].d();
    }
  };
}
function pe(i, e) {
  let t, n, o, a, f, l, s, r = E, c, d, v;
  return n = new vt({
    props: {
      notification: e[12],
      updateParentOnRemove: e[9]
    }
  }), {
    key: i,
    first: null,
    c() {
      t = h("li"), H(n.$$.fragment), o = j(), y(t, "class", a = B(`bn-notify-li-${e[0]} ${e[0].includes("top") ? "notification-list-top" : "notification-list-bottom"}`) + " svelte-17x6hrg"), this.first = t;
    },
    m(u, b) {
      _(u, t, b), G(n, t, null), g(t, o), c = !0, d || (v = S(t, "click", me(e[10])), d = !0);
    },
    p(u, b) {
      e = u;
      const p = {};
      b & 4 && (p.notification = e[12]), n.$set(p), (!c || b & 1 && a !== (a = B(`bn-notify-li-${e[0]} ${e[0].includes("top") ? "notification-list-top" : "notification-list-bottom"}`) + " svelte-17x6hrg")) && y(t, "class", a);
    },
    r() {
      s = t.getBoundingClientRect();
    },
    f() {
      Ce(t), r(), ze(t, s);
    },
    a() {
      r(), r = Te(t, s, Ve, { duration: 500 });
    },
    i(u) {
      c || (x(n.$$.fragment, u), Le(() => {
        l && l.end(1), f = je(t, Pe, {
          duration: 1200,
          delay: 300,
          x: e[3],
          y: e[4],
          easing: mt
        }), f.start();
      }), c = !0);
    },
    o(u) {
      z(n.$$.fragment, u), f && f.invalidate(), l = Se(t, Me, { duration: 300, easing: be }), c = !1;
    },
    d(u) {
      u && k(t), F(n), u && l && l.end(), d = !1, v();
    }
  };
}
function yt(i) {
  let e, t, n = i[2].length && ve(i);
  return {
    c() {
      n && n.c(), e = ye();
    },
    m(o, a) {
      n && n.m(o, a), _(o, e, a), t = !0;
    },
    p(o, [a]) {
      o[2].length ? n ? (n.p(o, a), a & 4 && x(n, 1)) : (n = ve(o), n.c(), x(n, 1), n.m(e.parentNode, e)) : n && (V(), z(n, 1, 1, () => {
        n = null;
      }), A());
    },
    i(o) {
      t || (x(n), t = !0);
    },
    o(o) {
      z(n), t = !1;
    },
    d(o) {
      n && n.d(o), o && k(e);
    }
  };
}
function mt(i) {
  return Math.sin(-13 * (i + 1) * Math.PI / 2) * Math.pow(2, -35 * i) + 1;
}
function bt(i, e, t) {
  let n;
  const { device: o } = Z, a = Y.select("accountCenter").pipe(_e(Y.get().accountCenter), xe(1));
  D(i, a, (p) => t(6, n = p));
  let { position: f } = e, { sharedContainer: l } = e, { notifications: s } = e, r, c;
  r = 0, c = 0;
  let d = "y-scroll";
  const v = () => {
    d !== "y-visible" && t(5, d = "y-visible"), u(
      function() {
        t(5, d = "y-scroll");
      },
      1e3
    );
  }, u = function() {
    let p = null;
    return (m, C) => {
      clearTimeout(p), p = setTimeout(m, C);
    };
  }();
  function b(p) {
    Ne.call(this, i, p);
  }
  return i.$$set = (p) => {
    "position" in p && t(0, f = p.position), "sharedContainer" in p && t(1, l = p.sharedContainer), "notifications" in p && t(2, s = p.notifications);
  }, i.$$.update = () => {
    i.$$.dirty & 1 && (f.includes("top") ? t(4, c = -50) : t(4, c = 50));
  }, [
    f,
    l,
    s,
    r,
    c,
    d,
    n,
    o,
    a,
    v,
    b
  ];
}
class gt extends M {
  constructor(e) {
    super(), R(
      this,
      e,
      bt,
      yt,
      I,
      {
        position: 0,
        sharedContainer: 1,
        notifications: 2
      },
      pt
    );
  }
}
export {
  gt as default
};
