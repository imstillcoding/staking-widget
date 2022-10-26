import { ar as V, as as y, at as A, br as v, aq as h, bs as d, bt as H, bu as z, bv as O, bw as Q, bx as B, by as k, bz as G, bA as J, an as w, ax as K, bB as Y, bC as $, bD as X, bE as Z, bF as M, bG as _, am as L, ap as ee, ay as W } from "./index.55b2d290.mjs";
import { a5 as _e, am as en, bt as nn, bM as tn, br as an, bI as rn, bz as sn, bJ as un, ar as on, bN as cn, bO as fn, bT as ln, bS as mn, by as dn, a6 as vn, bU as hn, bP as pn, ay as bn, bL as gn, ap as yn, bQ as An, bF as wn, bV as En, bW as xn, ao as Fn, bC as In, bG as Tn, bH as Sn, bx as qn, bK as On, bX as kn, bR as Ln, bY as Mn, k as Wn, j as Cn, bw as jn, bZ as Rn, b_ as Vn, b$ as zn, c0 as Pn } from "./index.55b2d290.mjs";
import { A as ne, a as te, c as ae, o as re, b as ie, n as se } from "./zipWith.c687c09b.mjs";
import { e as Nn, A as Dn, C as Hn, f as Qn, N as Bn, d as Gn, S as Jn, T as Kn, k as Yn, l as $n, m as Xn, p as Zn, q as _n, s as et, u as nt, v as tt, w as at, g as rt, x as it, y as st, B as ut, D as ot, E as ct, F as ft, G as lt, H as mt, I as dt, J as vt, K as ht, L as pt, M as bt, O as gt, P as yt, Q as At, R as wt, U as Et, V as xt, W as Ft, X as It, Y as Tt, Z as St, _ as qt, a5 as Ot, $ as kt, a0 as Lt, i as Mt, a1 as Wt, a2 as Ct, a3 as jt, a4 as Rt, a6 as Vt, a7 as zt, a8 as Pt, a9 as Ut, aa as Nt, h as Dt, ab as Ht, ac as Qt, ad as Bt, ae as Gt, af as Jt, r as Kt, ag as Yt, ah as $t, am as Xt, ai as Zt, aj as _t, ak as ea, al as na, an as ta, ao as aa, ap as ra, aq as ia, ar as sa, as as ua, at as oa, au as ca, av as fa, aw as la, ax as ma, ay as da, az as va, aA as ha, aB as pa, aC as ba, t as ga, aD as ya, aE as Aa, aF as wa, aG as Ea, j as xa, aH as Fa, aI as Ia, aJ as Ta, aK as Sa, aL as qa, aM as Oa, aN as ka, z as La, aO as Ma, aP as Wa } from "./zipWith.c687c09b.mjs";
import { A as I, a as T } from "./skip.7ebd501e.mjs";
import { S as ja, b as Ra, c as Va, d as za, s as Pa } from "./skip.7ebd501e.mjs";
import { m as Na } from "./merge.284ea1e0.mjs";
var P = {
  now: function() {
    return (P.delegate || performance).now();
  },
  delegate: void 0
}, b = {
  schedule: function(n) {
    var t = requestAnimationFrame, e = cancelAnimationFrame, r = b.delegate;
    r && (t = r.requestAnimationFrame, e = r.cancelAnimationFrame);
    var a = t(function(i) {
      e = void 0, n(i);
    });
    return new V(function() {
      return e == null ? void 0 : e(a);
    });
  },
  requestAnimationFrame: function() {
    for (var n = [], t = 0; t < arguments.length; t++)
      n[t] = arguments[t];
    var e = b.delegate;
    return ((e == null ? void 0 : e.requestAnimationFrame) || requestAnimationFrame).apply(void 0, y([], A(n)));
  },
  cancelAnimationFrame: function() {
    for (var n = [], t = 0; t < arguments.length; t++)
      n[t] = arguments[t];
    var e = b.delegate;
    return ((e == null ? void 0 : e.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, y([], A(n)));
  },
  delegate: void 0
};
function Me(n) {
  return n ? U(n) : ue;
}
function U(n) {
  return new v(function(t) {
    var e = n || P, r = e.now(), a = 0, i = function() {
      t.closed || (a = b.requestAnimationFrame(function(s) {
        a = 0;
        var u = e.now();
        t.next({
          timestamp: n ? u : s,
          elapsed: u - r
        }), i();
      }));
    };
    return i(), function() {
      a && b.cancelAnimationFrame(a);
    };
  });
}
var ue = U(), oe = 1, S, q = {};
function C(n) {
  return n in q ? (delete q[n], !0) : !1;
}
var N = {
  setImmediate: function(n) {
    var t = oe++;
    return q[t] = !0, S || (S = Promise.resolve()), S.then(function() {
      return C(t) && n();
    }), t;
  },
  clearImmediate: function(n) {
    C(n);
  }
}, ce = N.setImmediate, fe = N.clearImmediate, x = {
  setImmediate: function() {
    for (var n = [], t = 0; t < arguments.length; t++)
      n[t] = arguments[t];
    var e = x.delegate;
    return ((e == null ? void 0 : e.setImmediate) || ce).apply(void 0, y([], A(n)));
  },
  clearImmediate: function(n) {
    var t = x.delegate;
    return ((t == null ? void 0 : t.clearImmediate) || fe)(n);
  },
  delegate: void 0
}, le = function(n) {
  h(t, n);
  function t(e, r) {
    var a = n.call(this, e, r) || this;
    return a.scheduler = e, a.work = r, a;
  }
  return t.prototype.requestAsyncId = function(e, r, a) {
    return a === void 0 && (a = 0), a !== null && a > 0 ? n.prototype.requestAsyncId.call(this, e, r, a) : (e.actions.push(this), e._scheduled || (e._scheduled = x.setImmediate(e.flush.bind(e, void 0))));
  }, t.prototype.recycleAsyncId = function(e, r, a) {
    var i;
    if (a === void 0 && (a = 0), a != null ? a > 0 : this.delay > 0)
      return n.prototype.recycleAsyncId.call(this, e, r, a);
    var s = e.actions;
    r != null && ((i = s[s.length - 1]) === null || i === void 0 ? void 0 : i.id) !== r && (x.clearImmediate(r), e._scheduled = void 0);
  }, t;
}(I), me = function(n) {
  h(t, n);
  function t() {
    return n !== null && n.apply(this, arguments) || this;
  }
  return t.prototype.flush = function(e) {
    this._active = !0;
    var r = this._scheduled;
    this._scheduled = void 0;
    var a = this.actions, i;
    e = e || a.shift();
    do
      if (i = e.execute(e.state, e.delay))
        break;
    while ((e = a[0]) && e.id === r && a.shift());
    if (this._active = !1, i) {
      for (; (e = a[0]) && e.id === r && a.shift(); )
        e.unsubscribe();
      throw i;
    }
  }, t;
}(T), de = new me(le), We = de, ve = function(n) {
  h(t, n);
  function t(e, r) {
    var a = n.call(this, e, r) || this;
    return a.scheduler = e, a.work = r, a;
  }
  return t.prototype.schedule = function(e, r) {
    return r === void 0 && (r = 0), r > 0 ? n.prototype.schedule.call(this, e, r) : (this.delay = r, this.state = e, this.scheduler.flush(this), this);
  }, t.prototype.execute = function(e, r) {
    return r > 0 || this.closed ? n.prototype.execute.call(this, e, r) : this._execute(e, r);
  }, t.prototype.requestAsyncId = function(e, r, a) {
    return a === void 0 && (a = 0), a != null && a > 0 || a == null && this.delay > 0 ? n.prototype.requestAsyncId.call(this, e, r, a) : (e.flush(this), 0);
  }, t;
}(I), he = function(n) {
  h(t, n);
  function t() {
    return n !== null && n.apply(this, arguments) || this;
  }
  return t;
}(T), pe = new he(ve), Ce = pe, be = function(n) {
  h(t, n);
  function t(e, r) {
    var a = n.call(this, e, r) || this;
    return a.scheduler = e, a.work = r, a;
  }
  return t.prototype.requestAsyncId = function(e, r, a) {
    return a === void 0 && (a = 0), a !== null && a > 0 ? n.prototype.requestAsyncId.call(this, e, r, a) : (e.actions.push(this), e._scheduled || (e._scheduled = b.requestAnimationFrame(function() {
      return e.flush(void 0);
    })));
  }, t.prototype.recycleAsyncId = function(e, r, a) {
    var i;
    if (a === void 0 && (a = 0), a != null ? a > 0 : this.delay > 0)
      return n.prototype.recycleAsyncId.call(this, e, r, a);
    var s = e.actions;
    r != null && ((i = s[s.length - 1]) === null || i === void 0 ? void 0 : i.id) !== r && (b.cancelAnimationFrame(r), e._scheduled = void 0);
  }, t;
}(I), ge = function(n) {
  h(t, n);
  function t() {
    return n !== null && n.apply(this, arguments) || this;
  }
  return t.prototype.flush = function(e) {
    this._active = !0;
    var r = this._scheduled;
    this._scheduled = void 0;
    var a = this.actions, i;
    e = e || a.shift();
    do
      if (i = e.execute(e.state, e.delay))
        break;
    while ((e = a[0]) && e.id === r && a.shift());
    if (this._active = !1, i) {
      for (; (e = a[0]) && e.id === r && a.shift(); )
        e.unsubscribe();
      throw i;
    }
  }, t;
}(T), ye = new ge(be), je = ye, Re = function(n) {
  h(t, n);
  function t(e, r) {
    e === void 0 && (e = Ae), r === void 0 && (r = 1 / 0);
    var a = n.call(this, e, function() {
      return a.frame;
    }) || this;
    return a.maxFrames = r, a.frame = 0, a.index = -1, a;
  }
  return t.prototype.flush = function() {
    for (var e = this, r = e.actions, a = e.maxFrames, i, s; (s = r[0]) && s.delay <= a && (r.shift(), this.frame = s.delay, !(i = s.execute(s.state, s.delay))); )
      ;
    if (i) {
      for (; s = r.shift(); )
        s.unsubscribe();
      throw i;
    }
  }, t.frameTimeFactor = 10, t;
}(T), Ae = function(n) {
  h(t, n);
  function t(e, r, a) {
    a === void 0 && (a = e.index += 1);
    var i = n.call(this, e, r) || this;
    return i.scheduler = e, i.work = r, i.index = a, i.active = !0, i.index = e.index = a, i;
  }
  return t.prototype.schedule = function(e, r) {
    if (r === void 0 && (r = 0), Number.isFinite(r)) {
      if (!this.id)
        return n.prototype.schedule.call(this, e, r);
      this.active = !1;
      var a = new t(this.scheduler, this.work);
      return this.add(a), a.schedule(e, r);
    } else
      return V.EMPTY;
  }, t.prototype.requestAsyncId = function(e, r, a) {
    a === void 0 && (a = 0), this.delay = e.frame + a;
    var i = e.actions;
    return i.push(this), i.sort(t.sortActions), 1;
  }, t.prototype.recycleAsyncId = function(e, r, a) {
  }, t.prototype._execute = function(e, r) {
    if (this.active === !0)
      return n.prototype._execute.call(this, e, r);
  }, t.sortActions = function(e, r) {
    return e.delay === r.delay ? e.index === r.index ? 0 : e.index > r.index ? 1 : -1 : e.delay > r.delay ? 1 : -1;
  }, t;
}(I);
function Ve(n) {
  return !!n && (n instanceof v || d(n.lift) && d(n.subscribe));
}
function ze(n, t) {
  var e = typeof t == "object";
  return new Promise(function(r, a) {
    var i = !1, s;
    n.subscribe({
      next: function(u) {
        s = u, i = !0;
      },
      error: a,
      complete: function() {
        i ? r(s) : e ? r(t.defaultValue) : a(new H());
      }
    });
  });
}
function F(n, t, e, r) {
  if (e)
    if (z(e))
      r = e;
    else
      return function() {
        for (var a = [], i = 0; i < arguments.length; i++)
          a[i] = arguments[i];
        return F(n, t, r).apply(this, a).pipe(O(e));
      };
  return r ? function() {
    for (var a = [], i = 0; i < arguments.length; i++)
      a[i] = arguments[i];
    return F(n, t).apply(this, a).pipe(Q(r), B(r));
  } : function() {
    for (var a = this, i = [], s = 0; s < arguments.length; s++)
      i[s] = arguments[s];
    var u = new ne(), o = !0;
    return new v(function(f) {
      var c = u.subscribe(f);
      if (o) {
        o = !1;
        var l = !1, E = !1;
        t.apply(a, y(y([], A(i)), [
          function() {
            for (var m = [], p = 0; p < arguments.length; p++)
              m[p] = arguments[p];
            if (n) {
              var g = m.shift();
              if (g != null) {
                u.error(g);
                return;
              }
            }
            u.next(1 < m.length ? m : m[0]), E = !0, l && u.complete();
          }
        ])), E && u.complete(), l = !0;
      }
      return c;
    });
  };
}
function Pe(n, t, e) {
  return F(!1, n, t, e);
}
function Ue(n, t, e) {
  return F(!0, n, t, e);
}
var we = {
  connector: function() {
    return new G();
  },
  resetOnDisconnect: !0
};
function Ne(n, t) {
  t === void 0 && (t = we);
  var e = null, r = t.connector, a = t.resetOnDisconnect, i = a === void 0 ? !0 : a, s = r(), u = new v(function(o) {
    return s.subscribe(o);
  });
  return u.connect = function() {
    return (!e || e.closed) && (e = k(function() {
      return n;
    }).subscribe(s), i && e.add(function() {
      return s = r();
    })), e;
  }, u;
}
function De() {
  for (var n = [], t = 0; t < arguments.length; t++)
    n[t] = arguments[t];
  var e = J(n), r = te(n), a = r.args, i = r.keys, s = new v(function(u) {
    var o = a.length;
    if (!o) {
      u.complete();
      return;
    }
    for (var f = new Array(o), c = o, l = o, E = function(p) {
      var g = !1;
      w(a[p]).subscribe(K(u, function(D) {
        g || (g = !0, l--), f[p] = D;
      }, function() {
        return c--;
      }, void 0, function() {
        (!c || !g) && (l || u.next(i ? ae(i, f) : f), u.complete());
      }));
    }, m = 0; m < o; m++)
      E(m);
  });
  return e ? s.pipe(O(e)) : s;
}
var Ee = ["addListener", "removeListener"], xe = ["addEventListener", "removeEventListener"], Fe = ["on", "off"];
function j(n, t, e, r) {
  if (d(e) && (r = e, e = void 0), r)
    return j(n, t, e).pipe(O(r));
  var a = A(Se(n) ? xe.map(function(u) {
    return function(o) {
      return n[u](t, o, e);
    };
  }) : Ie(n) ? Ee.map(R(n, t)) : Te(n) ? Fe.map(R(n, t)) : [], 2), i = a[0], s = a[1];
  if (!i && Y(n))
    return $(function(u) {
      return j(u, t, e);
    })(w(n));
  if (!i)
    throw new TypeError("Invalid event target");
  return new v(function(u) {
    var o = function() {
      for (var f = [], c = 0; c < arguments.length; c++)
        f[c] = arguments[c];
      return u.next(1 < f.length ? f : f[0]);
    };
    return i(o), function() {
      return s(o);
    };
  });
}
function R(n, t) {
  return function(e) {
    return function(r) {
      return n[e](t, r);
    };
  };
}
function Ie(n) {
  return d(n.addListener) && d(n.removeListener);
}
function Te(n) {
  return d(n.on) && d(n.off);
}
function Se(n) {
  return d(n.addEventListener) && d(n.removeEventListener);
}
function He(n, t, e, r, a) {
  var i, s, u, o;
  arguments.length === 1 ? (i = n, o = i.initialState, t = i.condition, e = i.iterate, s = i.resultSelector, u = s === void 0 ? M : s, a = i.scheduler) : (o = n, !r || z(r) ? (u = M, a = r) : u = r);
  function f() {
    var c;
    return Z(this, function(l) {
      switch (l.label) {
        case 0:
          c = o, l.label = 1;
        case 1:
          return !t || t(c) ? [4, u(c)] : [3, 4];
        case 2:
          l.sent(), l.label = 3;
        case 3:
          return c = e(c), [3, 1];
        case 4:
          return [2];
      }
    });
  }
  return k(a ? function() {
    return X(f(), a);
  } : f);
}
function Qe(n, t, e) {
  return k(function() {
    return n() ? t : e;
  });
}
var qe = new v(_);
function Be() {
  return qe;
}
function Ge() {
  for (var n = [], t = 0; t < arguments.length; t++)
    n[t] = arguments[t];
  return re(ie(n))(L);
}
function Je(n, t) {
  return ee(Object.entries(n), t);
}
function Ke(n, t, e) {
  return [W(t, e)(w(n)), W(se(t, e))(w(n))];
}
function Ye(n, t, e) {
  if (t == null && (t = n, n = 0), t <= 0)
    return L;
  var r = t + n;
  return new v(e ? function(a) {
    var i = n;
    return e.schedule(function() {
      i < r ? (a.next(i++), this.schedule()) : a.complete();
    });
  } : function(a) {
    for (var i = n; i < r && !a.closed; )
      a.next(i++);
    a.complete();
  });
}
function $e(n, t) {
  return new v(function(e) {
    var r = n(), a = t(r), i = a ? w(a) : L;
    return i.subscribe(e), function() {
      r && r.unsubscribe();
    };
  });
}
export {
  Nn as ArgumentOutOfRangeError,
  Dn as AsyncSubject,
  _e as BehaviorSubject,
  Hn as ConnectableObservable,
  en as EMPTY,
  nn as EmptyError,
  qe as NEVER,
  Qn as NotFoundError,
  Bn as Notification,
  Gn as NotificationKind,
  tn as ObjectUnsubscribedError,
  an as Observable,
  rn as ReplaySubject,
  ja as Scheduler,
  Jn as SequenceError,
  sn as Subject,
  un as Subscriber,
  on as Subscription,
  Kn as TimeoutError,
  cn as UnsubscriptionError,
  Ae as VirtualAction,
  Re as VirtualTimeScheduler,
  je as animationFrame,
  ye as animationFrameScheduler,
  Me as animationFrames,
  We as asap,
  de as asapScheduler,
  Ra as async,
  Va as asyncScheduler,
  Yn as audit,
  $n as auditTime,
  Pe as bindCallback,
  Ue as bindNodeCallback,
  Xn as buffer,
  Zn as bufferCount,
  _n as bufferTime,
  et as bufferToggle,
  nt as bufferWhen,
  tt as catchError,
  at as combineAll,
  rt as combineLatest,
  it as combineLatestAll,
  st as combineLatestWith,
  fn as concat,
  ln as concatAll,
  ut as concatMap,
  ot as concatMapTo,
  ct as concatWith,
  mn as config,
  ft as connect,
  Ne as connectable,
  lt as count,
  mt as debounce,
  za as debounceTime,
  dt as defaultIfEmpty,
  dn as defer,
  vt as delay,
  ht as delayWhen,
  pt as dematerialize,
  bt as distinct,
  vn as distinctUntilChanged,
  hn as distinctUntilKeyChanged,
  gt as elementAt,
  pn as empty,
  yt as endWith,
  At as every,
  wt as exhaust,
  Et as exhaustAll,
  xt as exhaustMap,
  Ft as expand,
  bn as filter,
  It as finalize,
  Tt as find,
  St as findIndex,
  qt as first,
  gn as firstValueFrom,
  Ot as flatMap,
  De as forkJoin,
  yn as from,
  j as fromEvent,
  An as fromEventPattern,
  He as generate,
  kt as groupBy,
  wn as identity,
  Lt as ignoreElements,
  Qe as iif,
  Mt as interval,
  Wt as isEmpty,
  Ve as isObservable,
  Ct as last,
  ze as lastValueFrom,
  En as map,
  xn as mapTo,
  jt as materialize,
  Rt as max,
  Na as merge,
  Fn as mergeAll,
  In as mergeMap,
  Vt as mergeMapTo,
  zt as mergeScan,
  Pt as mergeWith,
  Ut as min,
  Nt as multicast,
  Be as never,
  Tn as noop,
  Sn as observable,
  qn as observeOn,
  Dt as of,
  Ge as onErrorResumeNext,
  Je as pairs,
  Ht as pairwise,
  Ke as partition,
  On as pipe,
  kn as pluck,
  Qt as publish,
  Bt as publishBehavior,
  Gt as publishLast,
  Jt as publishReplay,
  Ce as queue,
  pe as queueScheduler,
  Kt as race,
  Yt as raceWith,
  Ye as range,
  $t as reduce,
  Xt as refCount,
  Zt as repeat,
  _t as repeatWhen,
  ea as retry,
  na as retryWhen,
  ta as sample,
  aa as sampleTime,
  ra as scan,
  Ln as scheduled,
  ia as sequenceEqual,
  Mn as share,
  Wn as shareReplay,
  sa as single,
  Pa as skip,
  ua as skipLast,
  oa as skipUntil,
  ca as skipWhile,
  Cn as startWith,
  jn as subscribeOn,
  fa as switchAll,
  Rn as switchMap,
  la as switchMapTo,
  ma as switchScan,
  Vn as take,
  da as takeLast,
  zn as takeUntil,
  va as takeWhile,
  ha as tap,
  pa as throttle,
  ba as throttleTime,
  ga as throwError,
  ya as throwIfEmpty,
  Aa as timeInterval,
  wa as timeout,
  Ea as timeoutWith,
  xa as timer,
  Fa as timestamp,
  Ia as toArray,
  $e as using,
  Ta as window,
  Sa as windowCount,
  qa as windowTime,
  Oa as windowToggle,
  ka as windowWhen,
  Pn as withLatestFrom,
  La as zip,
  Ma as zipAll,
  Wa as zipWith
};
