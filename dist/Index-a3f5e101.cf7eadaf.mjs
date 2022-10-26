import { S as me, i as ge, s as be, e as he, a as W, l as R, g as ue, t as M, c as ve, b as C, d as V, f as ne, h as Ae, j as Sn, k as In, o as qn, w as ke, u as De, m as E, n as G, p as se, q as Z, r as u, v as d, x as ye, y as q, W as pe, z as ie, A as Re, B as qe, C as j, D as B, E as Y, F as Q, G as s, H as Hn, I as le, J as Oe, K as yn, L as Ln, M as F, N as He, O as Le, P as Wn, Q as Vn, R as Ce, Y as Ue, T as Cn, U as Me, V as Se, X as Tn, Z as Pe, _ as jn, $ as Bn, a0 as Fn, a1 as zn, a2 as Be, a3 as $n, a4 as Dn, a5 as Nn, a6 as En, a7 as Gn, a8 as Zn, a9 as On, aa as Pn, ab as xe, ac as Rn, ad as en, ae as Un, af as nn, ag as Fe, ah as tn, ai as Xn, aj as rn } from "./index.55b2d290.mjs";
import { m as Jn } from "./merge.284ea1e0.mjs";
import { s as Kn, d as Qn } from "./skip.7ebd501e.mjs";
var Yn = `
  <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z" fill="currentColor"/>
  </svg>
`;
function xn(e) {
  ye(e, "svelte-nf2wa3", `.container.svelte-nf2wa3.svelte-nf2wa3.svelte-nf2wa3{padding:0.25rem;margin-bottom:0.25rem;width:100%;font-size:var(--onboard-font-size-5, var(--font-size-5));line-height:var(--onboard-font-line-height-2, var(--font-line-height-2));border-radius:12px;transition:background-color 150ms ease-in-out}.container.svelte-nf2wa3.svelte-nf2wa3.svelte-nf2wa3:hover{background:var(--onboard-gray-500, var(--gray-500))}.container.svelte-nf2wa3:hover>div.svelte-nf2wa3>span.balance.svelte-nf2wa3{color:var(
      --account-center-maximized-balance-color,
      var(--onboard-gray-100, var(--gray-100))
    )}.container.primary.svelte-nf2wa3.svelte-nf2wa3.svelte-nf2wa3:hover{background:var(
      --account-center-maximized-account-section-background-hover,
      var(--onboard-gray-700, var(--gray-700))
    )}.address-ens.svelte-nf2wa3.svelte-nf2wa3.svelte-nf2wa3{margin-left:0.5rem;font-weight:700;color:var(
      --account-center-maximized-address-color,
      var(--onboard-primary-100, var(--primary-100))
    )}.balance.svelte-nf2wa3.svelte-nf2wa3.svelte-nf2wa3{margin-left:0.5rem;color:var(--onboard-gray-300, var(--gray-300));transition:color 150ms ease-in-out, background-color 150ms ease-in-out;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:7.25rem;text-align:end}.elipsis-container.svelte-nf2wa3.svelte-nf2wa3.svelte-nf2wa3{padding:0.25rem;margin-left:0.25rem;border-radius:24px;transition:color 150ms ease-in-out, background-color 150ms ease-in-out;background-color:transparent;color:var(--onboard-gray-400, var(--gray-400))}.elipsis.svelte-nf2wa3.svelte-nf2wa3.svelte-nf2wa3{width:24px}.elipsis-container.svelte-nf2wa3.svelte-nf2wa3.svelte-nf2wa3:hover{color:var(--onboard-gray-100, var(--gray-100))}.elipsis-container.active.svelte-nf2wa3.svelte-nf2wa3.svelte-nf2wa3{background:var(--onboard-gray-700, var(--gray-700))}.menu.svelte-nf2wa3.svelte-nf2wa3.svelte-nf2wa3{background:var(--onboard-white, var(--white));border:1px solid var(--onboard-gray-100, var(--gray-100));border-radius:8px;list-style-type:none;right:0.25rem;top:2.25rem;margin:0;padding:0;border:none;overflow:hidden;z-index:1}.menu.svelte-nf2wa3 li.svelte-nf2wa3.svelte-nf2wa3{color:var(--onboard-primary-500, var(--primary-500));font-size:var(--onboard-font-size-5, var(--font-size-5));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));padding:12px 16px;background:var(--onboard-white, var(--white));transition:background-color 150ms ease-in-out;cursor:pointer}.menu.svelte-nf2wa3 li.svelte-nf2wa3.svelte-nf2wa3:hover{background:var(--onboard-primary-200, var(--primary-200))}`);
}
function an(e, n, t) {
  const r = e.slice();
  return r[14] = n[t].address, r[15] = n[t].ens, r[16] = n[t].balance, r[18] = t, r;
}
function on(e) {
  let n, t, r;
  return t = new qe({ props: { size: 14 } }), {
    c() {
      n = u("div"), E(t.$$.fragment), Y(n, "right", "-5px"), Y(n, "bottom", "-5px"), d(n, "class", "drop-shadow absolute");
    },
    m(a, l) {
      W(a, n, l), G(t, n, null), r = !0;
    },
    i(a) {
      r || (C(t.$$.fragment, a), r = !0);
    },
    o(a) {
      M(t.$$.fragment, a), r = !1;
    },
    d(a) {
      a && V(n), Z(t);
    }
  };
}
function ln(e) {
  let n, t = fn(e[16]) + "", r, a;
  return {
    c() {
      n = u("span"), r = B(t), d(n, "class", "balance svelte-nf2wa3");
    },
    m(l, o) {
      W(l, n, o), s(n, r);
    },
    p(l, o) {
      o & 1 && t !== (t = fn(l[16]) + "") && F(r, t);
    },
    i(l) {
      a || He(() => {
        a = Le(n, Se, {}), a.start();
      });
    },
    o: se,
    d(l) {
      l && V(n);
    }
  };
}
function sn(e) {
  let n, t, r = e[4]("accountCenter.addAccount", {
    default: e[2].accountCenter.addAccount
  }) + "", a, l, o, c, i = e[4]("accountCenter.disconnectWallet", {
    default: e[2].accountCenter.disconnectWallet
  }) + "", f, v, m, g = e[2].accountCenter.copyAddress + "", k, p, b, h, _ = !(e[1] && e[18] === 0) && cn(e);
  function w() {
    return e[13](e[15], e[14]);
  }
  return {
    c() {
      n = u("ul"), t = u("li"), a = B(r), l = j(), _ && _.c(), o = j(), c = u("li"), f = B(i), v = j(), m = u("li"), k = B(g), d(t, "class", "svelte-nf2wa3"), d(c, "class", "svelte-nf2wa3"), d(m, "class", "svelte-nf2wa3"), d(n, "class", "menu absolute svelte-nf2wa3");
    },
    m($, D) {
      W($, n, D), s(n, t), s(t, a), s(n, l), _ && _.m(n, null), s(n, o), s(n, c), s(c, f), s(n, v), s(n, m), s(m, k), b || (h = [
        R(t, "click", le(e[10])),
        R(c, "click", le(e[12])),
        R(m, "click", le(w))
      ], b = !0);
    },
    p($, D) {
      e = $, D & 20 && r !== (r = e[4]("accountCenter.addAccount", {
        default: e[2].accountCenter.addAccount
      }) + "") && F(a, r), e[1] && e[18] === 0 ? _ && (_.d(1), _ = null) : _ ? _.p(e, D) : (_ = cn(e), _.c(), _.m(n, o)), D & 20 && i !== (i = e[4]("accountCenter.disconnectWallet", {
        default: e[2].accountCenter.disconnectWallet
      }) + "") && F(f, i), D & 4 && g !== (g = e[2].accountCenter.copyAddress + "") && F(k, g);
    },
    i($) {
      p || He(() => {
        p = Le(n, Se, {}), p.start();
      });
    },
    o: se,
    d($) {
      $ && V(n), _ && _.d(), b = !1, Ce(h);
    }
  };
}
function cn(e) {
  let n, t = e[4]("accountCenter.setPrimaryAccount", {
    default: e[2].accountCenter.setPrimaryAccount
  }) + "", r, a, l;
  function o() {
    return e[11](e[14]);
  }
  return {
    c() {
      n = u("li"), r = B(t), d(n, "class", "svelte-nf2wa3");
    },
    m(c, i) {
      W(c, n, i), s(n, r), a || (l = R(n, "click", le(o)), a = !0);
    },
    p(c, i) {
      e = c, i & 20 && t !== (t = e[4]("accountCenter.setPrimaryAccount", {
        default: e[2].accountCenter.setPrimaryAccount
      }) + "") && F(r, t);
    },
    d(c) {
      c && V(n), a = !1, l();
    }
  };
}
function dn(e) {
  let n, t, r, a, l, o, c, i, f = (e[15] ? Me(e[15].name) : Pe(e[14])) + "", v, m, g, k, p, b, h, _, w, $, D;
  l = new pe({
    props: {
      size: 32,
      padding: 4,
      background: "custom",
      color: "#EFF1FC",
      customBackgroundColor: e[1] && e[18] === 0 ? "rgba(24, 206, 102, 0.2)" : "rgba(235, 235, 237, 0.1)",
      border: e[1] && e[18] === 0 ? "green" : "gray",
      radius: 8,
      icon: e[0].icon
    }
  });
  let S = e[1] && e[18] === 0 && on(), y = e[16] && ln(e);
  function L() {
    return e[8](e[14]);
  }
  function re() {
    return e[9](e[14]);
  }
  let I = e[3] === e[14] && sn(e);
  return {
    c() {
      n = u("div"), t = u("div"), r = u("div"), a = u("div"), E(l.$$.fragment), o = j(), S && S.c(), c = j(), i = u("span"), v = B(f), m = j(), g = u("div"), y && y.c(), k = j(), p = u("div"), b = u("div"), h = j(), I && I.c(), _ = j(), d(a, "class", "flex items-center relative"), d(i, "class", "address-ens svelte-nf2wa3"), d(r, "class", "flex items-center"), d(b, "class", "elipsis pointer flex items-center justify-center relative svelte-nf2wa3"), d(p, "class", "elipsis-container svelte-nf2wa3"), Q(p, "active", e[3] === e[14]), d(g, "class", "flex items-center svelte-nf2wa3"), d(t, "class", "container flex items-center justify-between pointer svelte-nf2wa3"), Q(t, "primary", e[1] && e[18] === 0), d(n, "class", "relative");
    },
    m(O, T) {
      W(O, n, T), s(n, t), s(t, r), s(r, a), G(l, a, null), s(a, o), S && S.m(a, null), s(r, c), s(r, i), s(i, v), s(t, m), s(t, g), y && y.m(g, null), s(g, k), s(g, p), s(p, b), b.innerHTML = Yn, s(n, h), I && I.m(n, null), s(n, _), w = !0, $ || (D = [
        R(b, "click", le(L)),
        R(t, "click", re)
      ], $ = !0);
    },
    p(O, T) {
      e = O;
      const J = {};
      T & 2 && (J.customBackgroundColor = e[1] && e[18] === 0 ? "rgba(24, 206, 102, 0.2)" : "rgba(235, 235, 237, 0.1)"), T & 2 && (J.border = e[1] && e[18] === 0 ? "green" : "gray"), T & 1 && (J.icon = e[0].icon), l.$set(J), e[1] && e[18] === 0 ? S ? T & 2 && C(S, 1) : (S = on(), S.c(), C(S, 1), S.m(a, null)) : S && (ue(), M(S, 1, 1, () => {
        S = null;
      }), ve()), (!w || T & 1) && f !== (f = (e[15] ? Me(e[15].name) : Pe(e[14])) + "") && F(v, f), e[16] ? y ? (y.p(e, T), T & 1 && C(y, 1)) : (y = ln(e), y.c(), C(y, 1), y.m(g, k)) : y && (y.d(1), y = null), (!w || T & 9) && Q(p, "active", e[3] === e[14]), (!w || T & 2) && Q(t, "primary", e[1] && e[18] === 0), e[3] === e[14] ? I ? (I.p(e, T), T & 9 && C(I, 1)) : (I = sn(e), I.c(), C(I, 1), I.m(n, _)) : I && (I.d(1), I = null);
    },
    i(O) {
      w || (C(l.$$.fragment, O), C(S), C(y), C(I), w = !0);
    },
    o(O) {
      M(l.$$.fragment, O), M(S), w = !1;
    },
    d(O) {
      O && V(n), Z(l), S && S.d(), y && y.d(), I && I.d(), $ = !1, Ce(D);
    }
  };
}
function et(e) {
  let n, t, r = e[0].accounts, a = [];
  for (let o = 0; o < r.length; o += 1)
    a[o] = dn(an(e, r, o));
  const l = (o) => M(a[o], 1, 1, () => {
    a[o] = null;
  });
  return {
    c() {
      for (let o = 0; o < a.length; o += 1)
        a[o].c();
      n = he();
    },
    m(o, c) {
      for (let i = 0; i < a.length; i += 1)
        a[i].m(o, c);
      W(o, n, c), t = !0;
    },
    p(o, [c]) {
      if (c & 127) {
        r = o[0].accounts;
        let i;
        for (i = 0; i < r.length; i += 1) {
          const f = an(o, r, i);
          a[i] ? (a[i].p(f, c), C(a[i], 1)) : (a[i] = dn(f), a[i].c(), C(a[i], 1), a[i].m(n.parentNode, n));
        }
        for (ue(), i = r.length; i < a.length; i += 1)
          l(i);
        ve();
      }
    },
    i(o) {
      if (!t) {
        for (let c = 0; c < r.length; c += 1)
          C(a[c]);
        t = !0;
      }
    },
    o(o) {
      a = a.filter(Boolean);
      for (let c = 0; c < a.length; c += 1)
        M(a[c]);
      t = !1;
    },
    d(o) {
      Gn(a, o), o && V(n);
    }
  };
}
function fn(e) {
  const [n] = Object.keys(e);
  return `${e[n].length > 8 ? e[n].slice(0, 8) : e[n]} ${n}`;
}
function nt(e, n, t) {
  let r;
  ne(e, Ue, (h) => t(4, r = h));
  let { wallet: a } = n, { primary: l } = n;
  function o() {
    t(3, c = "");
  }
  let c = "";
  async function i(h) {
    try {
      await Pn(h.provider);
    } catch (_) {
      const { code: w } = _;
      (w === xe.UNSUPPORTED_METHOD || w === xe.DOES_NOT_EXIST) && Rn.next({
        inProgress: !1,
        actionRequired: h.label
      });
    }
  }
  function f() {
    t(2, q.accountCenter.copyAddress = "Copied Successfully", q), setTimeout(o, 500), setTimeout(
      () => {
        t(2, q.accountCenter.copyAddress = "Copy Wallet address", q);
      },
      700
    );
  }
  const v = (h) => t(3, c = c === h ? "" : h), m = (h) => en(a, h), g = () => {
    t(3, c = ""), i(a);
  }, k = (h) => {
    t(3, c = ""), en(a, h);
  }, p = () => {
    t(3, c = ""), zn({ label: a.label });
  }, b = (h, _) => {
    Un(h ? h.name : _).then(() => {
      f();
    });
  };
  return e.$$set = (h) => {
    "wallet" in h && t(0, a = h.wallet), "primary" in h && t(1, l = h.primary);
  }, [
    a,
    l,
    q,
    c,
    r,
    i,
    f,
    o,
    v,
    m,
    g,
    k,
    p,
    b
  ];
}
class tt extends me {
  constructor(n) {
    super(), ge(this, n, nt, et, be, { wallet: 0, primary: 1, hideMenu: 7 }, xn);
  }
  get hideMenu() {
    return this.$$.ctx[7];
  }
}
var rt = `
  <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
  </svg>
`, at = `
  <svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.09 15.59L11.5 17L16.5 12L11.5 7L10.09 8.41L12.67 11H3V13H12.67L10.09 15.59ZM19 3H5C3.89 3 3 3.9 3 5V9H5V5H19V19H5V15H3V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" fill="currentColor"/>
  </svg>
`, An = '<svg width="100%" height="24" viewBox="0 5 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 10L12 15L17 10H7Z" fill="currentColor"/></svg>';
function ot(e) {
  ye(e, "svelte-1uqued6", "select.svelte-1uqued6{border:none;background-image:none;background-color:transparent;-webkit-appearance:none;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none;appearance:none;font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));transition:width 250ms ease-in-out;background-repeat:no-repeat, repeat;background-position:right 0px top 0px, 0 0;scrollbar-width:none;-ms-overflow-style:none;padding:0 14px 0 0;white-space:nowrap;text-overflow:ellipsis}select.minimized_ac.svelte-1uqued6{min-width:80px;max-width:80px}select.maximized_ac.svelte-1uqued6{width:auto !important}select.svelte-1uqued6:focus{outline:none}span.switching-placeholder.svelte-1uqued6{font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));min-width:80px;max-width:80px;padding:0 8px 0 4px}");
}
function un(e, n, t) {
  const r = e.slice();
  return r[15] = n[t], r;
}
function vn(e) {
  let n;
  function t(l, o) {
    return l[7] ? it : lt;
  }
  let r = t(e), a = r(e);
  return {
    c() {
      a.c(), n = he();
    },
    m(l, o) {
      a.m(l, o), W(l, n, o);
    },
    p(l, o) {
      r === (r = t(l)) && a ? a.p(l, o) : (a.d(1), a = r(l), a && (a.c(), a.m(n.parentNode, n)));
    },
    d(l) {
      a.d(l), l && V(n);
    }
  };
}
function lt(e) {
  let n, t = !nn(e[6].chains[0], e[2]), r, a = [], l = /* @__PURE__ */ new Map(), o, c, i, f, v, m = t && pn(e), g = e[2];
  const k = (p) => p[15].id;
  for (let p = 0; p < g.length; p += 1) {
    let b = un(e, g, p), h = k(b);
    l.set(h, a[p] = mn(h, b));
  }
  return {
    c() {
      n = u("select"), m && m.c(), r = he();
      for (let p = 0; p < a.length; p += 1)
        a[p].c();
      d(n, "class", o = Fe(`flex justify-center items-center pointer ${e[4]}`) + " svelte-1uqued6"), d(n, "style", i = `
        color: var(${e[1]}, 
        var(--account-center-network-selector-color, var (--gray-500)));
        background-image: url('data:image/svg+xml;utf8,${e[0]}'); ${e[3] ? "font-weight: 700;" : ""}`);
    },
    m(p, b) {
      W(p, n, b), m && m.m(n, null), s(n, r);
      for (let h = 0; h < a.length; h += 1)
        a[h].m(n, null);
      tn(n, e[6].chains[0].id), e[13](n), f || (v = R(n, "change", e[10]), f = !0);
    },
    p(p, b) {
      b & 68 && (t = !nn(p[6].chains[0], p[2])), t ? m ? m.p(p, b) : (m = pn(p), m.c(), m.m(n, r)) : m && (m.d(1), m = null), b & 4 && (g = p[2], a = yn(a, b, k, 1, p, g, l, n, Xn, mn, null, un)), b & 16 && o !== (o = Fe(`flex justify-center items-center pointer ${p[4]}`) + " svelte-1uqued6") && d(n, "class", o), b & 64 && c !== (c = p[6].chains[0].id) && tn(n, p[6].chains[0].id), b & 11 && i !== (i = `
        color: var(${p[1]}, 
        var(--account-center-network-selector-color, var (--gray-500)));
        background-image: url('data:image/svg+xml;utf8,${p[0]}'); ${p[3] ? "font-weight: 700;" : ""}`) && d(n, "style", i);
    },
    d(p) {
      p && V(n), m && m.d();
      for (let b = 0; b < a.length; b += 1)
        a[b].d();
      e[13](null), f = !1, v();
    }
  };
}
function it(e) {
  let n, t, r, a;
  return {
    c() {
      n = u("span"), t = B("switching..."), d(n, "class", r = Fe(`switching-placeholder ${e[4]}`) + " svelte-1uqued6"), d(n, "style", a = `
        color: var(${e[1]}, 
        var(--account-center-network-selector-color, var (--gray-500))); 
      `);
    },
    m(l, o) {
      W(l, n, o), s(n, t);
    },
    p(l, o) {
      o & 16 && r !== (r = Fe(`switching-placeholder ${l[4]}`) + " svelte-1uqued6") && d(n, "class", r), o & 2 && a !== (a = `
        color: var(${l[1]}, 
        var(--account-center-network-selector-color, var (--gray-500))); 
      `) && d(n, "style", a);
    },
    d(l) {
      l && V(n);
    }
  };
}
function pn(e) {
  let n, t = (rn[e[6].chains[0].id] || "unrecognized") + "", r, a;
  return {
    c() {
      n = u("option"), r = B(t), n.__value = a = e[6].chains[0].id, n.value = n.__value;
    },
    m(l, o) {
      W(l, n, o), s(n, r);
    },
    p(l, o) {
      o & 64 && t !== (t = (rn[l[6].chains[0].id] || "unrecognized") + "") && F(r, t), o & 64 && a !== (a = l[6].chains[0].id) && (n.__value = a, n.value = n.__value);
    },
    d(l) {
      l && V(n);
    }
  };
}
function mn(e, n) {
  let t, r = n[15].label + "", a, l;
  return {
    key: e,
    first: null,
    c() {
      t = u("option"), a = B(r), t.__value = l = n[15].id, t.value = t.__value, this.first = t;
    },
    m(o, c) {
      W(o, t, c), s(t, a);
    },
    p(o, c) {
      n = o, c & 4 && r !== (r = n[15].label + "") && F(a, r), c & 4 && l !== (l = n[15].id) && (t.__value = l, t.value = t.__value);
    },
    d(o) {
      o && V(t);
    }
  };
}
function st(e) {
  let n, t = e[6] && vn(e);
  return {
    c() {
      t && t.c(), n = he();
    },
    m(r, a) {
      t && t.m(r, a), W(r, n, a);
    },
    p(r, [a]) {
      r[6] ? t ? t.p(r, a) : (t = vn(r), t.c(), t.m(n.parentNode, n)) : t && (t.d(1), t = null);
    },
    i: se,
    o: se,
    d(r) {
      t && t.d(r), r && V(n);
    }
  };
}
function ct(e, n, t) {
  let r, a, l, o;
  ne(e, ke, (w) => t(12, l = w));
  let { selectIcon: c = An } = n, { colorVar: i } = n, { chains: f } = n, { bold: v = !1 } = n, { parentCSSId: m = "" } = n;
  const g = new Nn(!1);
  ne(e, g, (w) => t(7, o = w));
  let k;
  const p = Jn(ke, g.pipe(Kn(1))).pipe(Qn(50), En((w, $) => typeof w == "boolean" || typeof $ == "boolean" ? !1 : w[0] && $[0] && w[0].chains[0].id === $[0].chains[0].id));
  ne(e, p, (w) => t(11, a = w));
  async function b() {
    const w = k.selectedOptions[0].value;
    w !== r.chains[0].id && (g.next(!0), await Zn({
      chainId: w,
      chainNamespace: "evm",
      wallet: r.label
    }), g.next(!1));
  }
  function h() {
    if (!k)
      return;
    let w = document.createElement("option");
    w.textContent = k.selectedOptions[0].textContent;
    let $ = document.createElement("select");
    $.style.visibility = "hidden", $.style.position = "fixed", $.appendChild(w), k.after($), t(5, k.style.width = `${$.clientWidth - 22}px`, k), $.remove();
  }
  function _(w) {
    jn[w ? "unshift" : "push"](() => {
      k = w, t(5, k), t(2, f), t(6, r), t(12, l);
    });
  }
  return e.$$set = (w) => {
    "selectIcon" in w && t(0, c = w.selectIcon), "colorVar" in w && t(1, i = w.colorVar), "chains" in w && t(2, f = w.chains), "bold" in w && t(3, v = w.bold), "parentCSSId" in w && t(4, m = w.parentCSSId);
  }, e.$$.update = () => {
    e.$$.dirty & 4096 && t(6, [r] = l, r), e.$$.dirty & 2048 && a && h();
  }, [
    c,
    i,
    f,
    v,
    m,
    k,
    r,
    o,
    g,
    p,
    b,
    a,
    l,
    _
  ];
}
class Mn extends me {
  constructor(n) {
    super(), ge(
      this,
      n,
      ct,
      st,
      be,
      {
        selectIcon: 0,
        colorVar: 1,
        chains: 2,
        bold: 3,
        parentCSSId: 4
      },
      ot
    );
  }
}
var dt = '<svg width="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z" fill="currentColor"/></svg>', Ie = `
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 21H23L12 2L1 21ZM13 18H11V16H13V18ZM13 14H11V10H13V14Z" fill="currentColor"/>
  </svg>
`;
function ft(e) {
  ye(e, "svelte-10lq1b5", ".content.svelte-10lq1b5{padding:1rem;width:300px;font-family:var(--onboard-font-family-normal, var(--font-family-normal));font-size:var(--onboard-font-size-5, var(--font-size-5));line-height:24px}.icon-container.svelte-10lq1b5{width:3rem;height:3rem;background:var(--onboard-warning-100, var(--warning-100));border-radius:24px;padding:12px;color:var(--onboard-warning-500, var(--warning-500))}h4.svelte-10lq1b5{margin:1.5rem 0 0.5rem 0;font-weight:700}p.svelte-10lq1b5{margin:0;font-weight:400}button.svelte-10lq1b5{margin-top:1.5rem;width:50%;font-weight:700}.right.svelte-10lq1b5{margin-left:0.5rem;width:60%}");
}
function ut(e) {
  let n, t, r, a, l = e[2]("modals.confirmDisconnectAll.heading", {
    default: q.modals.confirmDisconnectAll.heading
  }) + "", o, c, i, f = e[2]("modals.confirmDisconnectAll.description") + "", v, m, g, k, p = e[2]("modals.confirmDisconnectAll.cancel", {
    default: q.modals.confirmDisconnectAll.cancel
  }) + "", b, h, _, w = e[2]("modals.confirmDisconnectAll.confirm", {
    default: q.modals.confirmDisconnectAll.confirm
  }) + "", $, D, S;
  return {
    c() {
      n = u("div"), t = u("div"), r = j(), a = u("h4"), o = B(l), c = j(), i = u("p"), v = B(f), m = j(), g = u("div"), k = u("button"), b = B(p), h = j(), _ = u("button"), $ = B(w), d(t, "class", "icon-container flex justify-center items-center svelte-10lq1b5"), d(a, "class", "svelte-10lq1b5"), d(i, "class", "svelte-10lq1b5"), d(k, "class", "button-neutral-solid-b rounded svelte-10lq1b5"), d(_, "class", "right button-neutral-solid rounded svelte-10lq1b5"), d(g, "class", "flex justify-between items-center w-100"), d(n, "class", "content svelte-10lq1b5");
    },
    m(y, L) {
      W(y, n, L), s(n, t), t.innerHTML = Ie, s(n, r), s(n, a), s(a, o), s(n, c), s(n, i), s(i, v), s(n, m), s(n, g), s(g, k), s(k, b), s(g, h), s(g, _), s(_, $), D || (S = [
        R(k, "click", function() {
          Oe(e[1]) && e[1].apply(this, arguments);
        }),
        R(_, "click", function() {
          Oe(e[0]) && e[0].apply(this, arguments);
        })
      ], D = !0);
    },
    p(y, L) {
      e = y, L & 4 && l !== (l = e[2]("modals.confirmDisconnectAll.heading", {
        default: q.modals.confirmDisconnectAll.heading
      }) + "") && F(o, l), L & 4 && f !== (f = e[2]("modals.confirmDisconnectAll.description") + "") && F(v, f), L & 4 && p !== (p = e[2]("modals.confirmDisconnectAll.cancel", {
        default: q.modals.confirmDisconnectAll.cancel
      }) + "") && F(b, p), L & 4 && w !== (w = e[2]("modals.confirmDisconnectAll.confirm", {
        default: q.modals.confirmDisconnectAll.confirm
      }) + "") && F($, w);
    },
    d(y) {
      y && V(n), D = !1, Ce(S);
    }
  };
}
function vt(e) {
  let n, t;
  return n = new On({
    props: {
      close: e[1],
      $$slots: { default: [ut] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      E(n.$$.fragment);
    },
    m(r, a) {
      G(n, r, a), t = !0;
    },
    p(r, [a]) {
      const l = {};
      a & 2 && (l.close = r[1]), a & 15 && (l.$$scope = { dirty: a, ctx: r }), n.$set(l);
    },
    i(r) {
      t || (C(n.$$.fragment, r), t = !0);
    },
    o(r) {
      M(n.$$.fragment, r), t = !1;
    },
    d(r) {
      Z(n, r);
    }
  };
}
function pt(e, n, t) {
  let r;
  ne(e, Ue, (o) => t(2, r = o));
  let { onConfirm: a } = n, { onClose: l } = n;
  return e.$$set = (o) => {
    "onConfirm" in o && t(0, a = o.onConfirm), "onClose" in o && t(1, l = o.onClose);
  }, [a, l, r];
}
class mt extends me {
  constructor(n) {
    super(), ge(this, n, pt, vt, be, { onConfirm: 0, onClose: 1 }, ft);
  }
}
function gt(e) {
  ye(e, "svelte-jvefs6", `.outer-container.svelte-jvefs6{background:var(
      --account-center-maximized-upper-background,
      var(--onboard-gray-600, var(--gray-600))
    );border-radius:var(
      --account-center-border-radius,
      var(--onboard-border-radius-3, var(--border-radius-3))
    );width:100%;filter:drop-shadow(0px 4px 16px rgba(178, 178, 178, 0.2));padding:0 1px 1px 1px;pointer-events:auto}.wallets-section.svelte-jvefs6{width:100%;border-radius:var(
      --account-center-border-radius,
      var(--onboard-border-radius-3, var(--border-radius-3))
    )}.p5.svelte-jvefs6{padding:var(--onboard-spacing-5, var(--spacing-5))}.wallets.svelte-jvefs6{width:100%;margin-bottom:0.5rem}.actions.svelte-jvefs6{color:var(
      --account-center-maximized-upper-action-color,
      var(--onboard-primary-400, var(--primary-400))
    );padding-left:2px}.action-container.svelte-jvefs6{padding:4px 12px 4px 8px;border-radius:8px;transition:background-color 150ms ease-in-out}.action-container.svelte-jvefs6:hover{background-color:var(
      --account-center-maximized-upper-action-background-hover,
      rgba(146, 155, 237, 0.2)
    )}.plus-icon.svelte-jvefs6{width:20px}.arrow-forward.svelte-jvefs6{width:20px}.mt.svelte-jvefs6{margin-top:0.25rem}.action-text.svelte-jvefs6{font-size:var(--onboard-font-size-6, var(--font-size-6));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));margin-left:0.5rem}.background-blue.svelte-jvefs6{background:var(
      --account-center-maximized-network-section-background,
      var(--onboard-primary-100, var(--primary-100))
    )}.background-gray.svelte-jvefs6{background:var(--onboard-gray-100, var(--gray-100))}.background-yellow.svelte-jvefs6{background:var(--onboard-warning-100, var(--warning-100))}.network-container.svelte-jvefs6{border-radius:var(
      --account-center-border-radius,
      var(--onboard-border-radius-3, var(--border-radius-3))
    );color:var(
      --account-center-maximized-network-text-color,
      var(
        --account-center-maximized-network-section,
        var(--onboard-gray-500, var(--gray-500))
      )
    )}.p5-5.svelte-jvefs6{padding:12px}.network-selector-container.svelte-jvefs6{margin-left:1rem;width:100%}.network-selector-label.svelte-jvefs6{font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3))}.app-info-container.svelte-jvefs6{background:var(
      --account-center-maximized-info-section-background-color,
      var(
        --account-center-maximized-info-section,
        var(--onboard-white, var(--white))
      )
    );border-radius:var(
      --account-center-border-radius,
      var(--onboard-border-radius-3, var(--border-radius-3))
    );padding:12px}.app-name.svelte-jvefs6{font-weight:700;font-size:var(--onboard-font-size-5, var(--font-size-5));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));color:var(
      --account-center-maximized-app-name-color,
      var(--onboard-gray-600, var(--gray-600))
    );margin-bottom:var(--onboard-spacing-5, var(--spacing-5));margin-top:0}.app-description.svelte-jvefs6{font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));color:var(
      --account-center-maximized-app-info-color,
      var(--onboard-gray-500, var(--gray-500))
    );margin:0}.app-info.svelte-jvefs6{font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3));color:var(
      --account-center-maximized-app-info-color,
      var(--onboard-gray-500, var(--gray-500))
    )}.app-info-heading.svelte-jvefs6{color:var(
      --account-center-maximized-app-info-color,
      var(--onboard-gray-600, var(--gray-600))
    );font-weight:700;margin-top:var(--onboard-spacing-5, var(--spacing-5));margin-bottom:var(--onboard-spacing-7, var(--spacing-7))}a.svelte-jvefs6{font-weight:700}.mt7.svelte-jvefs6{margin-top:var(--onboard-spacing-7, var(--spacing-7))}.ml4.svelte-jvefs6{margin-left:var(--onboard-spacing-4, var(--spacing-4))}.app-button.svelte-jvefs6{margin-top:var(--onboard-spacing-5, var(--spacing-5));color:var(
      --account-center-app-btn-text-color,
      var(--onboard-white, var(--white))
    );background:var(
      --account-center-app-btn-background,
      var(--onboard-gray-500, var(--gray-500))
    );font-family:var(--account-center-app-btn-font-family, inherit)}.powered-by-container.svelte-jvefs6{margin-top:12px}.powered-by.svelte-jvefs6{color:var(--onboard-gray-400, var(--gray-400));font-size:var(--onboard-font-size-7, var(--font-size-7));line-height:var(--onboard-font-line-height-3, var(--font-line-height-3))}`);
}
function gn(e, n, t) {
  const r = e.slice();
  return r[19] = n[t], r[21] = t, r;
}
function bn(e) {
  let n, t;
  return n = new mt({
    props: {
      onClose: e[14],
      onConfirm: e[6]
    }
  }), {
    c() {
      E(n.$$.fragment);
    },
    m(r, a) {
      G(n, r, a), t = !0;
    },
    p(r, a) {
      const l = {};
      a & 2 && (l.onClose = r[14]), n.$set(l);
    },
    i(r) {
      t || (C(n.$$.fragment, r), t = !0);
    },
    o(r) {
      M(n.$$.fragment, r), t = !1;
    },
    d(r) {
      Z(n, r);
    }
  };
}
function hn(e, n) {
  let t, r, a, l;
  function o(i) {
    n[15](i);
  }
  let c = {
    wallet: n[19],
    primary: n[21] === 0
  };
  return n[2] !== void 0 && (c.hideMenu = n[2]), r = new tt({ props: c }), jn.push(() => Bn(r, "hideMenu", o)), {
    key: e,
    first: null,
    c() {
      t = he(), E(r.$$.fragment), this.first = t;
    },
    m(i, f) {
      W(i, t, f), G(r, i, f), l = !0;
    },
    p(i, f) {
      n = i;
      const v = {};
      f & 1 && (v.wallet = n[19]), f & 1 && (v.primary = n[21] === 0), !a && f & 4 && (a = !0, v.hideMenu = n[2], Fn(() => a = !1)), r.$set(v);
    },
    i(i) {
      l || (C(r.$$.fragment, i), l = !0);
    },
    o(i) {
      M(r.$$.fragment, i), l = !1;
    },
    d(i) {
      i && V(t), Z(r, i);
    }
  };
}
function bt(e) {
  let n, t, r, a, l = e[5]("accountCenter.connectAnotherWallet", {
    default: q.accountCenter.connectAnotherWallet
  }) + "", o, c, i, f, v, m, g = e[5]("accountCenter.disconnectAllWallets", {
    default: q.accountCenter.disconnectAllWallets
  }) + "", k, p, b;
  return {
    c() {
      n = u("div"), t = u("div"), r = j(), a = u("span"), o = B(l), c = j(), i = u("div"), f = u("div"), v = j(), m = u("span"), k = B(g), d(t, "class", "plus-icon flex items-center justify-center svelte-jvefs6"), d(a, "class", "action-text svelte-jvefs6"), d(n, "class", "action-container flex items-center pointer svelte-jvefs6"), d(f, "class", "arrow-forward flex items-center justify-center svelte-jvefs6"), d(m, "class", "action-text svelte-jvefs6"), d(i, "class", "action-container flex items-center mt pointer svelte-jvefs6");
    },
    m(h, _) {
      W(h, n, _), s(n, t), t.innerHTML = rt, s(n, r), s(n, a), s(a, o), W(h, c, _), W(h, i, _), s(i, f), f.innerHTML = at, s(i, v), s(i, m), s(m, k), p || (b = [
        R(n, "click", e[16]),
        R(i, "click", e[17])
      ], p = !0);
    },
    p(h, _) {
      _ & 32 && l !== (l = h[5]("accountCenter.connectAnotherWallet", {
        default: q.accountCenter.connectAnotherWallet
      }) + "") && F(o, l), _ & 32 && g !== (g = h[5]("accountCenter.disconnectAllWallets", {
        default: q.accountCenter.disconnectAllWallets
      }) + "") && F(k, g);
    },
    d(h) {
      h && V(n), h && V(c), h && V(i), p = !1, Ce(b);
    }
  };
}
function wn(e) {
  let n, t, r;
  return t = new qe({ props: { size: 14 } }), {
    c() {
      n = u("div"), E(t.$$.fragment), Y(n, "right", "-5px"), Y(n, "bottom", "-5px"), d(n, "class", "drop-shadow absolute");
    },
    m(a, l) {
      W(a, n, l), G(t, n, null), r = !0;
    },
    i(a) {
      r || (C(t.$$.fragment, a), r = !0);
    },
    o(a) {
      M(t.$$.fragment, a), r = !1;
    },
    d(a) {
      a && V(n), Z(t);
    }
  };
}
function ht(e) {
  let n, t, r = e[5]("accountCenter.appInfo", { default: q.accountCenter.appInfo }) + "", a, l, o, c = e[8].gettingStartedGuide && wt(e), i = e[8].explore && _t(e);
  return {
    c() {
      n = u("div"), t = u("h4"), a = B(r), l = j(), c && c.c(), o = j(), i && i.c(), d(t, "class", "app-info-heading svelte-jvefs6"), d(n, "class", "app-info svelte-jvefs6");
    },
    m(f, v) {
      W(f, n, v), s(n, t), s(t, a), s(n, l), c && c.m(n, null), s(n, o), i && i.m(n, null);
    },
    p(f, v) {
      v & 32 && r !== (r = f[5]("accountCenter.appInfo", { default: q.accountCenter.appInfo }) + "") && F(a, r), f[8].gettingStartedGuide && c.p(f, v), f[8].explore && i.p(f, v);
    },
    d(f) {
      f && V(n), c && c.d(), i && i.d();
    }
  };
}
function wt(e) {
  let n, t, r = e[5]("accountCenter.learnMore", { default: q.accountCenter.learnMore }) + "", a, l, o, c = e[5]("accountCenter.gettingStartedGuide", {
    default: q.accountCenter.gettingStartedGuide
  }) + "", i;
  return {
    c() {
      n = u("div"), t = u("div"), a = B(r), l = j(), o = u("a"), i = B(c), d(o, "href", e[8].gettingStartedGuide), d(o, "target", "_blank"), d(o, "rel", "noreferrer noopener"), d(o, "class", "svelte-jvefs6"), d(n, "class", "flex justify-between items-center mt7 svelte-jvefs6");
    },
    m(f, v) {
      W(f, n, v), s(n, t), s(t, a), s(n, l), s(n, o), s(o, i);
    },
    p(f, v) {
      v & 32 && r !== (r = f[5]("accountCenter.learnMore", { default: q.accountCenter.learnMore }) + "") && F(a, r), v & 32 && c !== (c = f[5]("accountCenter.gettingStartedGuide", {
        default: q.accountCenter.gettingStartedGuide
      }) + "") && F(i, c);
    },
    d(f) {
      f && V(n);
    }
  };
}
function _t(e) {
  let n, t, r = e[5]("accountCenter.smartContracts", { default: q.accountCenter.smartContracts }) + "", a, l, o, c = e[5]("accountCenter.explore", { default: q.accountCenter.explore }) + "", i;
  return {
    c() {
      n = u("div"), t = u("div"), a = B(r), l = j(), o = u("a"), i = B(c), d(o, "href", e[8].explore), d(o, "target", "_blank"), d(o, "rel", "noreferrer noopener"), d(o, "class", "svelte-jvefs6"), d(n, "class", "flex justify-between items-center mt7 svelte-jvefs6");
    },
    m(f, v) {
      W(f, n, v), s(n, t), s(t, a), s(n, l), s(n, o), s(o, i);
    },
    p(f, v) {
      v & 32 && r !== (r = f[5]("accountCenter.smartContracts", { default: q.accountCenter.smartContracts }) + "") && F(a, r), v & 32 && c !== (c = f[5]("accountCenter.explore", { default: q.accountCenter.explore }) + "") && F(i, c);
    },
    d(f) {
      f && V(n);
    }
  };
}
function kt(e) {
  let n, t, r, a, l, o = [], c = /* @__PURE__ */ new Map(), i, f, v, m, g, k, p, b, h, _, w, $ = e[5]("accountCenter.currentNetwork", { default: q.accountCenter.currentNetwork }) + "", D, S, y, L, re, I, O, T, J, ce, x, U, we, ae, N, z, K, je, Xe, ze, We = e[5]("accountCenter.backToApp", { default: q.accountCenter.backToApp }) + "", Ne, Je, oe, Ve, Te = e[5]("accountCenter.poweredBy", { default: q.accountCenter.poweredBy }) + "", Ee, Ke, _e, Ge, te, Ze, Qe, P = e[1] && bn(e), $e = e[0];
  const Ye = (H) => H[19].label;
  for (let H = 0; H < $e.length; H += 1) {
    let A = gn(e, $e, H), ee = Ye(A);
    c.set(ee, o[H] = hn(ee, A));
  }
  let de = e[10].type === "desktop" && bt(e);
  p = new pe({
    props: {
      size: 32,
      padding: 4,
      background: "custom",
      color: e[4] ? e[4].icon ? void 0 : "#EFF1FC" : "#FFAF00",
      customBackgroundColor: e[4] ? e[4].color || e[3] && e[3].color || ie.color : "#FFE7B3",
      border: "transparent",
      radius: 8,
      icon: e[4] ? e[4].icon || e[3] && e[3].icon || ie.icon : Ie
    }
  });
  let X = e[4] && wn();
  L = new Mn({
    props: {
      chains: e[7],
      colorVar: "--account-center-maximized-network-selector-color",
      bold: !0,
      selectIcon: dt,
      parentCSSId: "maximized_ac"
    }
  }), J = new pe({
    props: {
      size: 32,
      padding: 4,
      background: "transparent",
      border: "black",
      radius: 8,
      icon: e[8] && e[8].icon || Re
    }
  }), U = new qe({ props: { size: 14, color: "blue" } });
  let fe = e[8] && (e[8].gettingStartedGuide || e[8].explore) && ht(e);
  return {
    c() {
      P && P.c(), n = j(), t = u("div"), r = u("div"), a = u("div"), l = u("div");
      for (let H = 0; H < o.length; H += 1)
        o[H].c();
      i = j(), f = u("div"), de && de.c(), v = j(), m = u("div"), g = u("div"), k = u("div"), E(p.$$.fragment), b = j(), X && X.c(), h = j(), _ = u("div"), w = u("div"), D = B($), S = j(), y = u("div"), E(L.$$.fragment), re = j(), I = u("div"), O = u("div"), T = u("div"), E(J.$$.fragment), ce = j(), x = u("div"), E(U.$$.fragment), we = j(), ae = u("div"), N = u("h4"), N.textContent = `${e[8] && e[8].name || "App Name"}`, z = j(), K = u("p"), K.textContent = `${e[8] && e[8].description || "This app has not added a description."}`, je = j(), fe && fe.c(), Xe = j(), ze = u("button"), Ne = B(We), Je = j(), oe = u("a"), Ve = u("span"), Ee = B(Te), Ke = j(), _e = u("div"), d(l, "class", "wallets svelte-jvefs6"), d(f, "class", "actions flex flex-column items-start svelte-jvefs6"), d(a, "class", "p5 svelte-jvefs6"), d(k, "class", "relative flex"), d(w, "class", "network-selector-label svelte-jvefs6"), d(y, "class", "flex items-center"), Y(y, "width", "100%"), d(_, "class", "network-selector-container svelte-jvefs6"), d(g, "class", "flex items-center p5-5 svelte-jvefs6"), Y(x, "right", "-5px"), Y(x, "bottom", "-5px"), d(x, "class", "drop-shadow absolute"), d(T, "class", "relative flex"), d(N, "class", "app-name svelte-jvefs6"), d(K, "class", "app-description svelte-jvefs6"), d(ae, "class", "ml4 svelte-jvefs6"), d(O, "class", "flex items-start"), d(ze, "class", "app-button button-neutral-solid svelte-jvefs6"), d(Ve, "class", "powered-by svelte-jvefs6"), d(_e, "class", "flex items-center"), Y(_e, "width", "83px"), Y(_e, "margin-left", "4px"), d(oe, "href", "https://blocknative.com"), d(oe, "target", "_blank"), d(oe, "rel", "noopener noreferrer"), d(oe, "class", "flex justify-center items-center powered-by-container svelte-jvefs6"), d(I, "class", "app-info-container svelte-jvefs6"), d(m, "class", "network-container shadow-1 svelte-jvefs6"), Q(m, "background-blue", e[4] && e[4].icon || e[3]), Q(m, "background-yellow", !e[4]), Q(m, "background-gray", e[4] && !e[3]), d(r, "class", "wallets-section svelte-jvefs6"), d(t, "class", "outer-container svelte-jvefs6");
    },
    m(H, A) {
      P && P.m(H, A), W(H, n, A), W(H, t, A), s(t, r), s(r, a), s(a, l);
      for (let ee = 0; ee < o.length; ee += 1)
        o[ee].m(l, null);
      s(a, i), s(a, f), de && de.m(f, null), s(r, v), s(r, m), s(m, g), s(g, k), G(p, k, null), s(k, b), X && X.m(k, null), s(g, h), s(g, _), s(_, w), s(w, D), s(_, S), s(_, y), G(L, y, null), s(m, re), s(m, I), s(I, O), s(O, T), G(J, T, null), s(T, ce), s(T, x), G(U, x, null), s(O, we), s(O, ae), s(ae, N), s(ae, z), s(ae, K), s(I, je), fe && fe.m(I, null), s(I, Xe), s(I, ze), s(ze, Ne), s(I, Je), s(I, oe), s(oe, Ve), s(Ve, Ee), s(oe, Ke), s(oe, _e), _e.innerHTML = Hn, te = !0, Ze || (Qe = [
        R(y, "click", e[13]),
        R(ze, "click", e[18]),
        R(t, "click", le(function() {
          Oe(e[2]) && e[2].apply(this, arguments);
        }))
      ], Ze = !0);
    },
    p(H, [A]) {
      e = H, e[1] ? P ? (P.p(e, A), A & 2 && C(P, 1)) : (P = bn(e), P.c(), C(P, 1), P.m(n.parentNode, n)) : P && (ue(), M(P, 1, 1, () => {
        P = null;
      }), ve()), A & 5 && ($e = e[0], ue(), o = yn(o, A, Ye, 1, e, $e, c, l, Ln, hn, null, gn), ve()), e[10].type === "desktop" && de.p(e, A);
      const ee = {};
      A & 16 && (ee.color = e[4] ? e[4].icon ? void 0 : "#EFF1FC" : "#FFAF00"), A & 24 && (ee.customBackgroundColor = e[4] ? e[4].color || e[3] && e[3].color || ie.color : "#FFE7B3"), A & 24 && (ee.icon = e[4] ? e[4].icon || e[3] && e[3].icon || ie.icon : Ie), p.$set(ee), e[4] ? X ? A & 16 && C(X, 1) : (X = wn(), X.c(), C(X, 1), X.m(k, null)) : X && (ue(), M(X, 1, 1, () => {
        X = null;
      }), ve()), (!te || A & 32) && $ !== ($ = e[5]("accountCenter.currentNetwork", { default: q.accountCenter.currentNetwork }) + "") && F(D, $), e[8] && (e[8].gettingStartedGuide || e[8].explore) && fe.p(e, A), (!te || A & 32) && We !== (We = e[5]("accountCenter.backToApp", { default: q.accountCenter.backToApp }) + "") && F(Ne, We), (!te || A & 32) && Te !== (Te = e[5]("accountCenter.poweredBy", { default: q.accountCenter.poweredBy }) + "") && F(Ee, Te), (!te || A & 24) && Q(m, "background-blue", e[4] && e[4].icon || e[3]), (!te || A & 16) && Q(m, "background-yellow", !e[4]), (!te || A & 24) && Q(m, "background-gray", e[4] && !e[3]);
    },
    i(H) {
      if (!te) {
        C(P);
        for (let A = 0; A < $e.length; A += 1)
          C(o[A]);
        C(p.$$.fragment, H), C(X), C(L.$$.fragment, H), C(J.$$.fragment, H), C(U.$$.fragment, H), Ge || He(() => {
          Ge = Le(t, Vn, {
            delay: e[9].includes("top") ? 100 : 0,
            duration: 600,
            y: e[9].includes("top") ? 56 : -76,
            easing: Wn,
            opacity: 0
          }), Ge.start();
        }), te = !0;
      }
    },
    o(H) {
      M(P);
      for (let A = 0; A < o.length; A += 1)
        M(o[A]);
      M(p.$$.fragment, H), M(X), M(L.$$.fragment, H), M(J.$$.fragment, H), M(U.$$.fragment, H), te = !1;
    },
    d(H) {
      P && P.d(H), H && V(n), H && V(t);
      for (let A = 0; A < o.length; A += 1)
        o[A].d();
      de && de.d(), Z(p), X && X.d(), Z(L), Z(J), Z(U), fe && fe.d(), Ze = !1, Ce(Qe);
    }
  };
}
function yt(e, n, t) {
  let r, a, l, o, c, i;
  ne(e, ke, (y) => t(0, c = y)), ne(e, Ue, (y) => t(5, i = y));
  function f() {
    c.forEach(({ label: y }) => zn({ label: y }));
  }
  const { chains: v } = Ae.get(), { appMetadata: m } = Be;
  let g = !1, k;
  const { position: p } = Ae.get().accountCenter, { device: b } = Be;
  function h(y) {
    $n.call(this, e, y);
  }
  const _ = () => t(1, g = !1);
  function w(y) {
    k = y, t(2, k);
  }
  const $ = () => Dn(), D = () => t(1, g = !0), S = () => De({ expanded: !1 });
  return e.$$.update = () => {
    e.$$.dirty & 1 && t(12, [r] = c, r), e.$$.dirty & 4096 && t(11, [a] = r ? r.chains : [], a), e.$$.dirty & 2048 && t(4, l = v.find(({ id: y, namespace: L }) => a ? y === a.id && L === a.namespace : !1)), e.$$.dirty & 2048 && t(3, o = Cn(a && a.id));
  }, [
    c,
    g,
    k,
    o,
    l,
    i,
    f,
    v,
    m,
    p,
    b,
    a,
    r,
    h,
    _,
    w,
    $,
    D,
    S
  ];
}
class Ct extends me {
  constructor(n) {
    super(), ge(this, n, yt, kt, be, {}, gt);
  }
}
function jt(e) {
  ye(e, "svelte-13pjibp", `.minimized.svelte-13pjibp{background:var(
      --account-center-minimized-background,
      var(--onboard-white, var(--white))
    );border:1px solid
      var(--account-center-border, var(--onboard-gray-100, var(--gray-100)));width:100%;box-shadow:var(
      --account-center-box-shadow,
      var(--onboard-shadow-3, var(--shadow-3))
    );pointer-events:auto}.radius.svelte-13pjibp{border-radius:var(
      --account-center-border-radius,
      var(--onboard-border-radius-3, var(--border-radius-3))
    )}.padding-5.svelte-13pjibp{padding:var(--onboard-spacing-5, var(--spacing-5))}.drop-shadow.svelte-13pjibp{filter:drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.2))}.address.svelte-13pjibp{font-weight:700;line-height:var(--onboard-font-line-height-2, var(--font-line-height-2));color:var(--account-center-minimized-address-color, initial)}.balance.svelte-13pjibp{font-weight:400;line-height:var(--onboard-font-line-height-2, var(--font-line-height-2));color:var(
      --account-center-minimized-balance-color,
      var(--onboard-gray-400, var(--gray-400))
    );overflow:hidden;white-space:nowrap;text-overflow:ellipsis;width:7.25rem}.network.svelte-13pjibp{margin-left:0.2rem}.chain-icon.svelte-13pjibp{width:22px;height:22px;padding:4px;border-radius:25px;margin-right:4px}.container.svelte-13pjibp{border:1px solid transparent;border-radius:16px;padding:1px;transition:border-color 250ms ease-in-out, backround 250ms ease-in-out;max-width:128px;cursor:default}.color-yellow.svelte-13pjibp{color:var(
      --account-center-chain-warning,
      var(--onboard-warning-500, var(--warning-500))
    )}.color-white.svelte-13pjibp{color:var(--onboard-primary-100, var(--primary-100))}`);
}
function _n(e) {
  let n, t = (e[4].length > 8 ? e[4].slice(0, 8) : e[4]) + "", r, a, l, o;
  return {
    c() {
      n = u("div"), r = B(t), a = j(), l = B(e[1]), d(n, "class", "balance svelte-13pjibp");
    },
    m(c, i) {
      W(c, n, i), s(n, r), s(n, a), s(n, l);
    },
    p(c, i) {
      i & 16 && t !== (t = (c[4].length > 8 ? c[4].slice(0, 8) : c[4]) + "") && F(r, t), i & 2 && F(l, c[1]);
    },
    i(c) {
      o || He(() => {
        o = Le(n, Se, {}), o.start();
      });
    },
    o: se,
    d(c) {
      c && V(n);
    }
  };
}
function zt(e) {
  let n, t, r, a, l, o, c, i, f, v, m, g, k, p, b, h = (e[6] ? Me(e[6]) : e[5]) + "", _, w, $, D, S, y, L, re = (e[3] ? e[3].icon || e[2] && e[2].icon || ie.icon : Ie) + "", I, O, T, J, ce, x, U, we, ae;
  o = new pe({
    props: {
      size: 32,
      padding: 4,
      background: "white",
      border: "darkGreen",
      radius: 8,
      icon: e[7]
    }
  }), f = new pe({
    props: {
      size: 32,
      padding: 4,
      background: "green",
      border: "darkGreen",
      radius: 8,
      icon: e[0] ? e[0].icon : ""
    }
  }), g = new qe({ props: { size: 14 } });
  let N = e[4] && _n(e);
  return T = new Mn({
    props: {
      chains: e[8],
      colorVar: "--account-center-minimized-network-selector-color",
      selectIcon: An,
      parentCSSId: "minimized_ac"
    }
  }), {
    c() {
      n = u("div"), t = u("div"), r = u("div"), a = u("div"), l = u("div"), E(o.$$.fragment), c = j(), i = u("div"), E(f.$$.fragment), v = j(), m = u("div"), E(g.$$.fragment), k = j(), p = u("div"), b = u("div"), _ = B(h), w = j(), N && N.c(), $ = j(), D = u("div"), S = u("div"), y = u("div"), L = u("div"), O = j(), E(T.$$.fragment), d(l, "class", "drop-shadow svelte-13pjibp"), Y(i, "right", "0.5rem"), d(i, "class", "drop-shadow relative svelte-13pjibp"), Y(m, "right", "5px"), Y(m, "bottom", "-5px"), d(m, "class", "drop-shadow absolute svelte-13pjibp"), d(a, "class", "flex items-centered relative"), d(b, "class", "address svelte-13pjibp"), d(p, "class", "flex flex-column"), Y(p, "height", "40px"), d(r, "class", "flex items-center w-100"), d(L, "class", "chain-icon flex justify-center items-center svelte-13pjibp"), d(L, "style", I = `background-color: ${e[3] ? e[3].color || e[2] && e[2].color || ie.color : "var(--onboard-warning-200, var(--warning-200))"};`), Q(L, "color-yellow", !e[3]), Q(L, "color-white", e[3] && !e[3].icon), d(y, "class", "flex items-center"), d(S, "class", "container shadow-1 flex items-center svelte-13pjibp"), d(S, "style", J = `border-color: var(${e[3] ? "--onboard-primary-200, var(--primary-200)" : "--onboard-warning-500, var(--warning-500)"}); background-color: var(${e[3] ? "--account-center-minimized-chain-select-background, var(--primary-100)" : "--account-center-minimized-chain-select-background-warning, var(--warning-100)"})`), d(D, "class", "network svelte-13pjibp"), d(t, "class", "flex items-center justify-between"), Y(t, "padding", "0 4px"), d(n, "class", "minimized pointer radius padding-5 svelte-13pjibp");
    },
    m(z, K) {
      W(z, n, K), s(n, t), s(t, r), s(r, a), s(a, l), G(o, l, null), s(a, c), s(a, i), G(f, i, null), s(a, v), s(a, m), G(g, m, null), s(r, k), s(r, p), s(p, b), s(b, _), s(p, w), N && N.m(p, null), s(t, $), s(t, D), s(D, S), s(S, y), s(y, L), L.innerHTML = re, s(y, O), G(T, y, null), U = !0, we || (ae = [
        R(S, "click", le(e[13])),
        R(n, "click", le(e[9]))
      ], we = !0);
    },
    p(z, [K]) {
      const je = {};
      K & 1 && (je.icon = z[0] ? z[0].icon : ""), f.$set(je), (!U || K & 96) && h !== (h = (z[6] ? Me(z[6]) : z[5]) + "") && F(_, h), z[4] ? N ? (N.p(z, K), K & 16 && C(N, 1)) : (N = _n(z), N.c(), C(N, 1), N.m(p, null)) : N && (N.d(1), N = null), (!U || K & 12) && re !== (re = (z[3] ? z[3].icon || z[2] && z[2].icon || ie.icon : Ie) + "") && (L.innerHTML = re), (!U || K & 12 && I !== (I = `background-color: ${z[3] ? z[3].color || z[2] && z[2].color || ie.color : "var(--onboard-warning-200, var(--warning-200))"};`)) && d(L, "style", I), (!U || K & 8) && Q(L, "color-yellow", !z[3]), (!U || K & 8) && Q(L, "color-white", z[3] && !z[3].icon), (!U || K & 8 && J !== (J = `border-color: var(${z[3] ? "--onboard-primary-200, var(--primary-200)" : "--onboard-warning-500, var(--warning-500)"}); background-color: var(${z[3] ? "--account-center-minimized-chain-select-background, var(--primary-100)" : "--account-center-minimized-chain-select-background-warning, var(--warning-100)"})`)) && d(S, "style", J);
    },
    i(z) {
      U || (C(o.$$.fragment, z), C(f.$$.fragment, z), C(g.$$.fragment, z), C(N), C(T.$$.fragment, z), He(() => {
        x && x.end(1), ce = Le(n, Se, { duration: 250 }), ce.start();
      }), U = !0);
    },
    o(z) {
      M(o.$$.fragment, z), M(f.$$.fragment, z), M(g.$$.fragment, z), M(T.$$.fragment, z), ce && ce.invalidate(), x = Tn(n, Se, { duration: 100 }), U = !1;
    },
    d(z) {
      z && V(n), Z(o), Z(f), Z(g), N && N.d(), Z(T), z && x && x.end(), we = !1, Ce(ae);
    }
  };
}
function $t(e, n, t) {
  let r, a, l, o, c, i, f, v, m, g;
  ne(e, ke, (w) => t(12, g = w));
  const { appMetadata: k } = Be, p = k && k.icon || Re, b = Ae.get().chains;
  function h() {
    De({ expanded: !0 });
  }
  function _(w) {
    $n.call(this, e, w);
  }
  return e.$$.update = () => {
    e.$$.dirty & 4096 && t(0, [r] = g, r), e.$$.dirty & 1 && t(11, [a] = r ? r.accounts : [], a), e.$$.dirty & 2048 && t(6, l = a && a.ens && Me(a.ens.name)), e.$$.dirty & 2048 && t(5, o = a ? Pe(a.address) : ""), e.$$.dirty & 2048 && t(
      1,
      [c] = a && a.balance ? Object.keys(a.balance) : [],
      c
    ), e.$$.dirty & 2050 && t(4, i = a && a.balance ? a.balance[c] : null), e.$$.dirty & 1 && t(10, f = r && r.chains[0]), e.$$.dirty & 1024 && t(3, v = b.find(({ id: w, namespace: $ }) => f ? w === f.id && $ === f.namespace : !1)), e.$$.dirty & 1024 && t(2, m = Cn(f && f.id));
  }, [
    r,
    c,
    m,
    v,
    i,
    o,
    l,
    p,
    b,
    h,
    f,
    a,
    g,
    _
  ];
}
class At extends me {
  constructor(n) {
    super(), ge(this, n, $t, zt, be, {}, jt);
  }
}
function Mt(e) {
  ye(e, "svelte-cjyox5", `.minimized.svelte-cjyox5{background:var(
      --account-center-micro-background,
      var(--onboard-white, var(--white))
    );border:1px solid
      var(--acount-center-border, var(--onboard-gray-100, var(--gray-100)));box-shadow:var(
      --account-center-box-shadow,
      var(--onboard-shadow-3, var(--shadow-3))
    );width:80px;pointer-events:auto}.radius.svelte-cjyox5{border-radius:var(
      --account-center-border-radius,
      var(--onboard-border-radius-3, var(--border-radius-3))
    )}.drop-shadow.svelte-cjyox5{filter:drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.2))}.inner-box-wrapper.svelte-cjyox5{display:flex;flex-flow:row nowrap;padding:12px}.wallet-square-wrapper.svelte-cjyox5{position:relative;margin-left:-8px}.check-icon-wrapper.svelte-cjyox5{position:absolute;right:-4px;bottom:-4px}`);
}
function St(e) {
  let n, t, r, a, l, o, c, i, f, v, m, g, k, p;
  return a = new pe({
    props: {
      size: 32,
      padding: 4,
      background: "white",
      border: "darkGreen",
      radius: 8,
      icon: e[1]
    }
  }), i = new pe({
    props: {
      size: 32,
      padding: 4,
      background: "green",
      border: "darkGreen",
      radius: 8,
      icon: e[0] ? e[0].icon : ""
    }
  }), m = new qe({ props: { size: 14 } }), {
    c() {
      n = u("div"), t = u("div"), r = u("div"), E(a.$$.fragment), l = j(), o = u("div"), c = u("div"), E(i.$$.fragment), f = j(), v = u("div"), E(m.$$.fragment), d(r, "class", "drop-shadow svelte-cjyox5"), d(c, "class", "drop-shadow svelte-cjyox5"), d(v, "class", "check-icon-wrapper drop-shadow svelte-cjyox5"), d(o, "class", "wallet-square-wrapper svelte-cjyox5"), d(t, "class", "inner-box-wrapper svelte-cjyox5"), d(n, "class", "minimized pointer radius svelte-cjyox5");
    },
    m(b, h) {
      W(b, n, h), s(n, t), s(t, r), G(a, r, null), s(t, l), s(t, o), s(o, c), G(i, c, null), s(o, f), s(o, v), G(m, v, null), g = !0, k || (p = R(n, "click", le(e[2])), k = !0);
    },
    p(b, [h]) {
      const _ = {};
      h & 1 && (_.icon = b[0] ? b[0].icon : ""), i.$set(_);
    },
    i(b) {
      g || (C(a.$$.fragment, b), C(i.$$.fragment, b), C(m.$$.fragment, b), g = !0);
    },
    o(b) {
      M(a.$$.fragment, b), M(i.$$.fragment, b), M(m.$$.fragment, b), g = !1;
    },
    d(b) {
      b && V(n), Z(a), Z(i), Z(m), k = !1, p();
    }
  };
}
function It(e, n, t) {
  let r, a;
  ne(e, ke, (i) => t(3, a = i));
  const { appMetadata: l } = Be, o = l && l.icon || Re;
  function c() {
    De({ expanded: !0 });
  }
  return e.$$.update = () => {
    e.$$.dirty & 8 && t(0, [r] = a, r);
  }, [r, o, c, a];
}
class qt extends me {
  constructor(n) {
    super(), ge(this, n, It, St, be, {}, Mt);
  }
}
function Ht(e) {
  let n, t;
  return n = new Ct({}), {
    c() {
      E(n.$$.fragment);
    },
    m(r, a) {
      G(n, r, a), t = !0;
    },
    p: se,
    i(r) {
      t || (C(n.$$.fragment, r), t = !0);
    },
    o(r) {
      M(n.$$.fragment, r), t = !1;
    },
    d(r) {
      Z(n, r);
    }
  };
}
function Lt(e) {
  let n, t;
  return n = new qt({}), {
    c() {
      E(n.$$.fragment);
    },
    m(r, a) {
      G(n, r, a), t = !0;
    },
    p: se,
    i(r) {
      t || (C(n.$$.fragment, r), t = !0);
    },
    o(r) {
      M(n.$$.fragment, r), t = !1;
    },
    d(r) {
      Z(n, r);
    }
  };
}
function Wt(e) {
  let n, t;
  return n = new At({}), {
    c() {
      E(n.$$.fragment);
    },
    m(r, a) {
      G(n, r, a), t = !0;
    },
    p: se,
    i(r) {
      t || (C(n.$$.fragment, r), t = !0);
    },
    o(r) {
      M(n.$$.fragment, r), t = !1;
    },
    d(r) {
      Z(n, r);
    }
  };
}
function Vt(e) {
  let n, t, r = e[2].length && kn();
  return {
    c() {
      r && r.c(), n = he();
    },
    m(a, l) {
      r && r.m(a, l), W(a, n, l), t = !0;
    },
    p(a, l) {
      a[2].length ? r ? l & 4 && C(r, 1) : (r = kn(), r.c(), C(r, 1), r.m(n.parentNode, n)) : r && (ue(), M(r, 1, 1, () => {
        r = null;
      }), ve());
    },
    i(a) {
      t || (C(r), t = !0);
    },
    o(a) {
      M(r), t = !1;
    },
    d(a) {
      r && r.d(a), a && V(n);
    }
  };
}
function kn(e) {
  let n, t, r;
  return t = new Ft({}), {
    c() {
      n = u("div"), E(t.$$.fragment), d(n, "class", "container flex flex-column fixed z-indexed");
    },
    m(a, l) {
      W(a, n, l), G(t, n, null), r = !0;
    },
    i(a) {
      r || (C(t.$$.fragment, a), r = !0);
    },
    o(a) {
      M(t.$$.fragment, a), r = !1;
    },
    d(a) {
      a && V(n), Z(t);
    }
  };
}
function Tt(e) {
  let n, t, r, a, l, o;
  const c = [Vt, Wt, Lt, Ht], i = [];
  function f(v, m) {
    return v[0] ? 0 : !v[1].expanded && !v[1].minimal ? 1 : !v[1].expanded && v[1].minimal ? 2 : 3;
  }
  return n = f(e), t = i[n] = c[n](e), {
    c() {
      t.c(), r = he();
    },
    m(v, m) {
      i[n].m(v, m), W(v, r, m), a = !0, l || (o = R(window, "click", e[4]), l = !0);
    },
    p(v, [m]) {
      let g = n;
      n = f(v), n === g ? i[n].p(v, m) : (ue(), M(i[g], 1, 1, () => {
        i[g] = null;
      }), ve(), t = i[n], t ? t.p(v, m) : (t = i[n] = c[n](v), t.c()), C(t, 1), t.m(r.parentNode, r));
    },
    i(v) {
      a || (C(t), a = !0);
    },
    o(v) {
      M(t), a = !1;
    },
    d(v) {
      i[n].d(v), v && V(r), l = !1, o();
    }
  };
}
function Bt(e, n, t) {
  let r, a;
  ne(e, ke, (i) => t(2, a = i));
  let { mountInContainer: l = !1 } = n;
  const o = Ae.select("accountCenter").pipe(Sn(Ae.get().accountCenter), In(1));
  ne(e, o, (i) => t(1, r = i)), qn(c);
  function c() {
    r.expanded && De({ expanded: !1 });
  }
  return e.$$set = (i) => {
    "mountInContainer" in i && t(0, l = i.mountInContainer);
  }, [l, r, a, o, c];
}
class Ft extends me {
  constructor(n) {
    super(), ge(this, n, Bt, Tt, be, { mountInContainer: 0 });
  }
}
export {
  Ft as default
};
