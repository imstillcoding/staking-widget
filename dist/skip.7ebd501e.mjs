import { aq as c, ar as A, as as d, at as f, au as g, av as w, aw as I, ax as b, ay as m } from "./index.55b2d290.mjs";
var _ = function(n) {
  c(i, n);
  function i(e, r) {
    return n.call(this) || this;
  }
  return i.prototype.schedule = function(e, r) {
    return this;
  }, i;
}(A), l = {
  setInterval: function(n, i) {
    for (var e = [], r = 2; r < arguments.length; r++)
      e[r - 2] = arguments[r];
    var t = l.delegate;
    return t != null && t.setInterval ? t.setInterval.apply(t, d([n, i], f(e))) : setInterval.apply(void 0, d([n, i], f(e)));
  },
  clearInterval: function(n) {
    var i = l.delegate;
    return ((i == null ? void 0 : i.clearInterval) || clearInterval)(n);
  },
  delegate: void 0
}, x = function(n) {
  c(i, n);
  function i(e, r) {
    var t = n.call(this, e, r) || this;
    return t.scheduler = e, t.work = r, t.pending = !1, t;
  }
  return i.prototype.schedule = function(e, r) {
    var t;
    if (r === void 0 && (r = 0), this.closed)
      return this;
    this.state = e;
    var s = this.id, a = this.scheduler;
    return s != null && (this.id = this.recycleAsyncId(a, s, r)), this.pending = !0, this.delay = r, this.id = (t = this.id) !== null && t !== void 0 ? t : this.requestAsyncId(a, this.id, r), this;
  }, i.prototype.requestAsyncId = function(e, r, t) {
    return t === void 0 && (t = 0), l.setInterval(e.flush.bind(e, this), t);
  }, i.prototype.recycleAsyncId = function(e, r, t) {
    if (t === void 0 && (t = 0), t != null && this.delay === t && this.pending === !1)
      return r;
    r != null && l.clearInterval(r);
  }, i.prototype.execute = function(e, r) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var t = this._execute(e, r);
    if (t)
      return t;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, i.prototype._execute = function(e, r) {
    var t = !1, s;
    try {
      this.work(e);
    } catch (a) {
      t = !0, s = a || new Error("Scheduled action threw falsy error");
    }
    if (t)
      return this.unsubscribe(), s;
  }, i.prototype.unsubscribe = function() {
    if (!this.closed) {
      var e = this, r = e.id, t = e.scheduler, s = t.actions;
      this.work = this.state = this.scheduler = null, this.pending = !1, g(s, this), r != null && (this.id = this.recycleAsyncId(t, r, null)), this.delay = null, n.prototype.unsubscribe.call(this);
    }
  }, i;
}(_), v = function() {
  function n(i, e) {
    e === void 0 && (e = n.now), this.schedulerActionCtor = i, this.now = e;
  }
  return n.prototype.schedule = function(i, e, r) {
    return e === void 0 && (e = 0), new this.schedulerActionCtor(this, i).schedule(r, e);
  }, n.now = w.now, n;
}(), S = function(n) {
  c(i, n);
  function i(e, r) {
    r === void 0 && (r = v.now);
    var t = n.call(this, e, r) || this;
    return t.actions = [], t._active = !1, t;
  }
  return i.prototype.flush = function(e) {
    var r = this.actions;
    if (this._active) {
      r.push(e);
      return;
    }
    var t;
    this._active = !0;
    do
      if (t = e.execute(e.state, e.delay))
        break;
    while (e = r.shift());
    if (this._active = !1, t) {
      for (; e = r.shift(); )
        e.unsubscribe();
      throw t;
    }
  }, i;
}(v), p = new S(x), T = p;
function q(n, i) {
  return i === void 0 && (i = p), I(function(e, r) {
    var t = null, s = null, a = null, o = function() {
      if (t) {
        t.unsubscribe(), t = null;
        var u = s;
        s = null, r.next(u);
      }
    };
    function y() {
      var u = a + n, h = i.now();
      if (h < u) {
        t = this.schedule(void 0, u - h), r.add(t);
        return;
      }
      o();
    }
    e.subscribe(b(r, function(u) {
      s = u, a = i.now(), t || (t = i.schedule(y, n), r.add(t));
    }, function() {
      o(), r.complete();
    }, void 0, function() {
      s = t = null;
    }));
  });
}
function C(n) {
  return m(function(i, e) {
    return n <= e;
  });
}
export {
  x as A,
  v as S,
  S as a,
  T as b,
  p as c,
  q as d,
  C as s
};
