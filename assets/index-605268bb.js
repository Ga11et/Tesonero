;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s)
  new MutationObserver((s) => {
    for (const r of s)
      if (r.type === 'childList')
        for (const o of r.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && i(o)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(s) {
    const r = {}
    return (
      s.integrity && (r.integrity = s.integrity),
      s.referrerPolicy && (r.referrerPolicy = s.referrerPolicy),
      s.crossOrigin === 'use-credentials'
        ? (r.credentials = 'include')
        : s.crossOrigin === 'anonymous'
        ? (r.credentials = 'omit')
        : (r.credentials = 'same-origin'),
      r
    )
  }
  function i(s) {
    if (s.ep) return
    s.ep = !0
    const r = n(s)
    fetch(s.href, r)
  }
})()
function _i(e, t) {
  const n = Object.create(null),
    i = e.split(',')
  for (let s = 0; s < i.length; s++) n[i[s]] = !0
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s]
}
function yi(e) {
  if ($(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const i = e[n],
        s = ue(i) ? ro(i) : yi(i)
      if (s) for (const r in s) t[r] = s[r]
    }
    return t
  } else {
    if (ue(e)) return e
    if (re(e)) return e
  }
}
const no = /;(?![^(]*\))/g,
  io = /:([^]+)/,
  so = /\/\*.*?\*\//gs
function ro(e) {
  const t = {}
  return (
    e
      .replace(so, '')
      .split(no)
      .forEach((n) => {
        if (n) {
          const i = n.split(io)
          i.length > 1 && (t[i[0].trim()] = i[1].trim())
        }
      }),
    t
  )
}
function gt(e) {
  let t = ''
  if (ue(e)) t = e
  else if ($(e))
    for (let n = 0; n < e.length; n++) {
      const i = gt(e[n])
      i && (t += i + ' ')
    }
  else if (re(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const oo = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  lo = _i(oo)
function Ps(e) {
  return !!e || e === ''
}
const $e = (e) =>
    ue(e)
      ? e
      : e == null
      ? ''
      : $(e) || (re(e) && (e.toString === Fs || !q(e.toString)))
      ? JSON.stringify(e, Rs, 2)
      : String(e),
  Rs = (e, t) =>
    t && t.__v_isRef
      ? Rs(e, t.value)
      : Tt(t)
      ? { [`Map(${t.size})`]: [...t.entries()].reduce((n, [i, s]) => ((n[`${i} =>`] = s), n), {}) }
      : Ns(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : re(t) && !$(t) && !Hs(t)
      ? String(t)
      : t,
  ie = {},
  xt = [],
  Pe = () => {},
  ao = () => !1,
  co = /^on[^a-z]/,
  bn = (e) => co.test(e),
  Si = (e) => e.startsWith('onUpdate:'),
  ge = Object.assign,
  wi = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  uo = Object.prototype.hasOwnProperty,
  Y = (e, t) => uo.call(e, t),
  $ = Array.isArray,
  Tt = (e) => _n(e) === '[object Map]',
  Ns = (e) => _n(e) === '[object Set]',
  q = (e) => typeof e == 'function',
  ue = (e) => typeof e == 'string',
  Ci = (e) => typeof e == 'symbol',
  re = (e) => e !== null && typeof e == 'object',
  ks = (e) => re(e) && q(e.then) && q(e.catch),
  Fs = Object.prototype.toString,
  _n = (e) => Fs.call(e),
  fo = (e) => _n(e).slice(8, -1),
  Hs = (e) => _n(e) === '[object Object]',
  xi = (e) => ue(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  on = _i(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted',
  ),
  yn = (e) => {
    const t = Object.create(null)
    return (n) => t[n] || (t[n] = e(n))
  },
  po = /-(\w)/g,
  Ve = yn((e) => e.replace(po, (t, n) => (n ? n.toUpperCase() : ''))),
  ho = /\B([A-Z])/g,
  Bt = yn((e) => e.replace(ho, '-$1').toLowerCase()),
  Sn = yn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Fn = yn((e) => (e ? `on${Sn(e)}` : '')),
  zt = (e, t) => !Object.is(e, t),
  Hn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  fn = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  go = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let Yi
const mo = () =>
  Yi ||
  (Yi =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {})
let Le
class Ds {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Le),
      !t && Le && (this.index = (Le.scopes || (Le.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = Le
      try {
        return (Le = this), t()
      } finally {
        Le = n
      }
    }
  }
  on() {
    Le = this
  }
  off() {
    Le = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, i
      for (n = 0, i = this.effects.length; n < i; n++) this.effects[n].stop()
      for (n = 0, i = this.cleanups.length; n < i; n++) this.cleanups[n]()
      if (this.scopes) for (n = 0, i = this.scopes.length; n < i; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop()
        s && s !== this && ((this.parent.scopes[this.index] = s), (s.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function vo(e) {
  return new Ds(e)
}
function bo(e, t = Le) {
  t && t.active && t.effects.push(e)
}
function _o() {
  return Le
}
const Ti = (e) => {
    const t = new Set(e)
    return (t.w = 0), (t.n = 0), t
  },
  Gs = (e) => (e.w & it) > 0,
  zs = (e) => (e.n & it) > 0,
  yo = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= it
  },
  So = (e) => {
    const { deps: t } = e
    if (t.length) {
      let n = 0
      for (let i = 0; i < t.length; i++) {
        const s = t[i]
        Gs(s) && !zs(s) ? s.delete(e) : (t[n++] = s), (s.w &= ~it), (s.n &= ~it)
      }
      t.length = n
    }
  },
  ei = new WeakMap()
let Ht = 0,
  it = 1
const ti = 30
let Ie
const ft = Symbol(''),
  ni = Symbol('')
class Ai {
  constructor(t, n = null, i) {
    ;(this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      bo(this, i)
  }
  run() {
    if (!this.active) return this.fn()
    let t = Ie,
      n = tt
    for (; t; ) {
      if (t === this) return
      t = t.parent
    }
    try {
      return (
        (this.parent = Ie),
        (Ie = this),
        (tt = !0),
        (it = 1 << ++Ht),
        Ht <= ti ? yo(this) : Zi(this),
        this.fn()
      )
    } finally {
      Ht <= ti && So(this),
        (it = 1 << --Ht),
        (Ie = this.parent),
        (tt = n),
        (this.parent = void 0),
        this.deferStop && this.stop()
    }
  }
  stop() {
    Ie === this
      ? (this.deferStop = !0)
      : this.active && (Zi(this), this.onStop && this.onStop(), (this.active = !1))
  }
}
function Zi(e) {
  const { deps: t } = e
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e)
    t.length = 0
  }
}
let tt = !0
const js = []
function Pt() {
  js.push(tt), (tt = !1)
}
function Rt() {
  const e = js.pop()
  tt = e === void 0 ? !0 : e
}
function _e(e, t, n) {
  if (tt && Ie) {
    let i = ei.get(e)
    i || ei.set(e, (i = new Map()))
    let s = i.get(n)
    s || i.set(n, (s = Ti())), $s(s)
  }
}
function $s(e, t) {
  let n = !1
  Ht <= ti ? zs(e) || ((e.n |= it), (n = !Gs(e))) : (n = !e.has(Ie)),
    n && (e.add(Ie), Ie.deps.push(e))
}
function Qe(e, t, n, i, s, r) {
  const o = ei.get(e)
  if (!o) return
  let l = []
  if (t === 'clear') l = [...o.values()]
  else if (n === 'length' && $(e)) {
    const a = Number(i)
    o.forEach((c, u) => {
      ;(u === 'length' || u >= a) && l.push(c)
    })
  } else
    switch ((n !== void 0 && l.push(o.get(n)), t)) {
      case 'add':
        $(e) ? xi(n) && l.push(o.get('length')) : (l.push(o.get(ft)), Tt(e) && l.push(o.get(ni)))
        break
      case 'delete':
        $(e) || (l.push(o.get(ft)), Tt(e) && l.push(o.get(ni)))
        break
      case 'set':
        Tt(e) && l.push(o.get(ft))
        break
    }
  if (l.length === 1) l[0] && ii(l[0])
  else {
    const a = []
    for (const c of l) c && a.push(...c)
    ii(Ti(a))
  }
}
function ii(e, t) {
  const n = $(e) ? e : [...e]
  for (const i of n) i.computed && Xi(i)
  for (const i of n) i.computed || Xi(i)
}
function Xi(e, t) {
  ;(e !== Ie || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
const wo = _i('__proto__,__v_isRef,__isVue'),
  Vs = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Ci),
  ),
  Co = Ei(),
  xo = Ei(!1, !0),
  To = Ei(!0),
  Ji = Ao()
function Ao() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const i = Z(this)
        for (let r = 0, o = this.length; r < o; r++) _e(i, 'get', r + '')
        const s = i[t](...n)
        return s === -1 || s === !1 ? i[t](...n.map(Z)) : s
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        Pt()
        const i = Z(this)[t].apply(this, n)
        return Rt(), i
      }
    }),
    e
  )
}
function Eo(e) {
  const t = Z(this)
  return _e(t, 'has', e), t.hasOwnProperty(e)
}
function Ei(e = !1, t = !1) {
  return function (i, s, r) {
    if (s === '__v_isReactive') return !e
    if (s === '__v_isReadonly') return e
    if (s === '__v_isShallow') return t
    if (s === '__v_raw' && r === (e ? (t ? $o : Qs) : t ? Ks : Ws).get(i)) return i
    const o = $(i)
    if (!e) {
      if (o && Y(Ji, s)) return Reflect.get(Ji, s, r)
      if (s === 'hasOwnProperty') return Eo
    }
    const l = Reflect.get(i, s, r)
    return (Ci(s) ? Vs.has(s) : wo(s)) || (e || _e(i, 'get', s), t)
      ? l
      : he(l)
      ? o && xi(s)
        ? l
        : l.value
      : re(l)
      ? e
        ? Ys(l)
        : Cn(l)
      : l
  }
}
const Mo = qs(),
  Lo = qs(!0)
function qs(e = !1) {
  return function (n, i, s, r) {
    let o = n[i]
    if (Ot(o) && he(o) && !he(s)) return !1
    if (!e && (!pn(s) && !Ot(s) && ((o = Z(o)), (s = Z(s))), !$(n) && he(o) && !he(s)))
      return (o.value = s), !0
    const l = $(n) && xi(i) ? Number(i) < n.length : Y(n, i),
      a = Reflect.set(n, i, s, r)
    return n === Z(r) && (l ? zt(s, o) && Qe(n, 'set', i, s) : Qe(n, 'add', i, s)), a
  }
}
function Oo(e, t) {
  const n = Y(e, t)
  e[t]
  const i = Reflect.deleteProperty(e, t)
  return i && n && Qe(e, 'delete', t, void 0), i
}
function Io(e, t) {
  const n = Reflect.has(e, t)
  return (!Ci(t) || !Vs.has(t)) && _e(e, 'has', t), n
}
function Bo(e) {
  return _e(e, 'iterate', $(e) ? 'length' : ft), Reflect.ownKeys(e)
}
const Us = { get: Co, set: Mo, deleteProperty: Oo, has: Io, ownKeys: Bo },
  Po = {
    get: To,
    set(e, t) {
      return !0
    },
    deleteProperty(e, t) {
      return !0
    },
  },
  Ro = ge({}, Us, { get: xo, set: Lo }),
  Mi = (e) => e,
  wn = (e) => Reflect.getPrototypeOf(e)
function Zt(e, t, n = !1, i = !1) {
  e = e.__v_raw
  const s = Z(e),
    r = Z(t)
  n || (t !== r && _e(s, 'get', t), _e(s, 'get', r))
  const { has: o } = wn(s),
    l = i ? Mi : n ? Ii : jt
  if (o.call(s, t)) return l(e.get(t))
  if (o.call(s, r)) return l(e.get(r))
  e !== s && e.get(t)
}
function Xt(e, t = !1) {
  const n = this.__v_raw,
    i = Z(n),
    s = Z(e)
  return (
    t || (e !== s && _e(i, 'has', e), _e(i, 'has', s)), e === s ? n.has(e) : n.has(e) || n.has(s)
  )
}
function Jt(e, t = !1) {
  return (e = e.__v_raw), !t && _e(Z(e), 'iterate', ft), Reflect.get(e, 'size', e)
}
function es(e) {
  e = Z(e)
  const t = Z(this)
  return wn(t).has.call(t, e) || (t.add(e), Qe(t, 'add', e, e)), this
}
function ts(e, t) {
  t = Z(t)
  const n = Z(this),
    { has: i, get: s } = wn(n)
  let r = i.call(n, e)
  r || ((e = Z(e)), (r = i.call(n, e)))
  const o = s.call(n, e)
  return n.set(e, t), r ? zt(t, o) && Qe(n, 'set', e, t) : Qe(n, 'add', e, t), this
}
function ns(e) {
  const t = Z(this),
    { has: n, get: i } = wn(t)
  let s = n.call(t, e)
  s || ((e = Z(e)), (s = n.call(t, e))), i && i.call(t, e)
  const r = t.delete(e)
  return s && Qe(t, 'delete', e, void 0), r
}
function is() {
  const e = Z(this),
    t = e.size !== 0,
    n = e.clear()
  return t && Qe(e, 'clear', void 0, void 0), n
}
function en(e, t) {
  return function (i, s) {
    const r = this,
      o = r.__v_raw,
      l = Z(o),
      a = t ? Mi : e ? Ii : jt
    return !e && _e(l, 'iterate', ft), o.forEach((c, u) => i.call(s, a(c), a(u), r))
  }
}
function tn(e, t, n) {
  return function (...i) {
    const s = this.__v_raw,
      r = Z(s),
      o = Tt(r),
      l = e === 'entries' || (e === Symbol.iterator && o),
      a = e === 'keys' && o,
      c = s[e](...i),
      u = n ? Mi : t ? Ii : jt
    return (
      !t && _e(r, 'iterate', a ? ni : ft),
      {
        next() {
          const { value: d, done: h } = c.next()
          return h ? { value: d, done: h } : { value: l ? [u(d[0]), u(d[1])] : u(d), done: h }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function Ze(e) {
  return function (...t) {
    return e === 'delete' ? !1 : this
  }
}
function No() {
  const e = {
      get(r) {
        return Zt(this, r)
      },
      get size() {
        return Jt(this)
      },
      has: Xt,
      add: es,
      set: ts,
      delete: ns,
      clear: is,
      forEach: en(!1, !1),
    },
    t = {
      get(r) {
        return Zt(this, r, !1, !0)
      },
      get size() {
        return Jt(this)
      },
      has: Xt,
      add: es,
      set: ts,
      delete: ns,
      clear: is,
      forEach: en(!1, !0),
    },
    n = {
      get(r) {
        return Zt(this, r, !0)
      },
      get size() {
        return Jt(this, !0)
      },
      has(r) {
        return Xt.call(this, r, !0)
      },
      add: Ze('add'),
      set: Ze('set'),
      delete: Ze('delete'),
      clear: Ze('clear'),
      forEach: en(!0, !1),
    },
    i = {
      get(r) {
        return Zt(this, r, !0, !0)
      },
      get size() {
        return Jt(this, !0)
      },
      has(r) {
        return Xt.call(this, r, !0)
      },
      add: Ze('add'),
      set: Ze('set'),
      delete: Ze('delete'),
      clear: Ze('clear'),
      forEach: en(!0, !0),
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      ;(e[r] = tn(r, !1, !1)),
        (n[r] = tn(r, !0, !1)),
        (t[r] = tn(r, !1, !0)),
        (i[r] = tn(r, !0, !0))
    }),
    [e, n, t, i]
  )
}
const [ko, Fo, Ho, Do] = No()
function Li(e, t) {
  const n = t ? (e ? Do : Ho) : e ? Fo : ko
  return (i, s, r) =>
    s === '__v_isReactive'
      ? !e
      : s === '__v_isReadonly'
      ? e
      : s === '__v_raw'
      ? i
      : Reflect.get(Y(n, s) && s in i ? n : i, s, r)
}
const Go = { get: Li(!1, !1) },
  zo = { get: Li(!1, !0) },
  jo = { get: Li(!0, !1) },
  Ws = new WeakMap(),
  Ks = new WeakMap(),
  Qs = new WeakMap(),
  $o = new WeakMap()
function Vo(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function qo(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Vo(fo(e))
}
function Cn(e) {
  return Ot(e) ? e : Oi(e, !1, Us, Go, Ws)
}
function Uo(e) {
  return Oi(e, !1, Ro, zo, Ks)
}
function Ys(e) {
  return Oi(e, !0, Po, jo, Qs)
}
function Oi(e, t, n, i, s) {
  if (!re(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const r = s.get(e)
  if (r) return r
  const o = qo(e)
  if (o === 0) return e
  const l = new Proxy(e, o === 2 ? i : n)
  return s.set(e, l), l
}
function At(e) {
  return Ot(e) ? At(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Ot(e) {
  return !!(e && e.__v_isReadonly)
}
function pn(e) {
  return !!(e && e.__v_isShallow)
}
function Zs(e) {
  return At(e) || Ot(e)
}
function Z(e) {
  const t = e && e.__v_raw
  return t ? Z(t) : e
}
function Xs(e) {
  return fn(e, '__v_skip', !0), e
}
const jt = (e) => (re(e) ? Cn(e) : e),
  Ii = (e) => (re(e) ? Ys(e) : e)
function Js(e) {
  tt && Ie && ((e = Z(e)), $s(e.dep || (e.dep = Ti())))
}
function er(e, t) {
  e = Z(e)
  const n = e.dep
  n && ii(n)
}
function he(e) {
  return !!(e && e.__v_isRef === !0)
}
function ve(e) {
  return Wo(e, !1)
}
function Wo(e, t) {
  return he(e) ? e : new Ko(e, t)
}
class Ko {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : Z(t)),
      (this._value = n ? t : jt(t))
  }
  get value() {
    return Js(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || pn(t) || Ot(t)
    ;(t = n ? t : Z(t)),
      zt(t, this._rawValue) && ((this._rawValue = t), (this._value = n ? t : jt(t)), er(this))
  }
}
function Qo(e) {
  return he(e) ? e.value : e
}
const Yo = {
  get: (e, t, n) => Qo(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const s = e[t]
    return he(s) && !he(n) ? ((s.value = n), !0) : Reflect.set(e, t, n, i)
  },
}
function tr(e) {
  return At(e) ? e : new Proxy(e, Yo)
}
var nr
class Zo {
  constructor(t, n, i, s) {
    ;(this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[nr] = !1),
      (this._dirty = !0),
      (this.effect = new Ai(t, () => {
        this._dirty || ((this._dirty = !0), er(this))
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !s),
      (this.__v_isReadonly = i)
  }
  get value() {
    const t = Z(this)
    return (
      Js(t), (t._dirty || !t._cacheable) && ((t._dirty = !1), (t._value = t.effect.run())), t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
}
nr = '__v_isReadonly'
function Xo(e, t, n = !1) {
  let i, s
  const r = q(e)
  return r ? ((i = e), (s = Pe)) : ((i = e.get), (s = e.set)), new Zo(i, s, r || !s, n)
}
function nt(e, t, n, i) {
  let s
  try {
    s = i ? e(...i) : e()
  } catch (r) {
    xn(r, t, n)
  }
  return s
}
function Ee(e, t, n, i) {
  if (q(e)) {
    const r = nt(e, t, n, i)
    return (
      r &&
        ks(r) &&
        r.catch((o) => {
          xn(o, t, n)
        }),
      r
    )
  }
  const s = []
  for (let r = 0; r < e.length; r++) s.push(Ee(e[r], t, n, i))
  return s
}
function xn(e, t, n, i = !0) {
  const s = t ? t.vnode : null
  if (t) {
    let r = t.parent
    const o = t.proxy,
      l = n
    for (; r; ) {
      const c = r.ec
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](e, o, l) === !1) return
      }
      r = r.parent
    }
    const a = t.appContext.config.errorHandler
    if (a) {
      nt(a, null, 10, [e, o, l])
      return
    }
  }
  Jo(e, n, s, i)
}
function Jo(e, t, n, i = !0) {
  console.error(e)
}
let $t = !1,
  si = !1
const pe = []
let ze = 0
const Et = []
let We = null,
  ct = 0
const ir = Promise.resolve()
let Bi = null
function sr(e) {
  const t = Bi || ir
  return e ? t.then(this ? e.bind(this) : e) : t
}
function el(e) {
  let t = ze + 1,
    n = pe.length
  for (; t < n; ) {
    const i = (t + n) >>> 1
    Vt(pe[i]) < e ? (t = i + 1) : (n = i)
  }
  return t
}
function Pi(e) {
  ;(!pe.length || !pe.includes(e, $t && e.allowRecurse ? ze + 1 : ze)) &&
    (e.id == null ? pe.push(e) : pe.splice(el(e.id), 0, e), rr())
}
function rr() {
  !$t && !si && ((si = !0), (Bi = ir.then(lr)))
}
function tl(e) {
  const t = pe.indexOf(e)
  t > ze && pe.splice(t, 1)
}
function nl(e) {
  $(e) ? Et.push(...e) : (!We || !We.includes(e, e.allowRecurse ? ct + 1 : ct)) && Et.push(e), rr()
}
function ss(e, t = $t ? ze + 1 : 0) {
  for (; t < pe.length; t++) {
    const n = pe[t]
    n && n.pre && (pe.splice(t, 1), t--, n())
  }
}
function or(e) {
  if (Et.length) {
    const t = [...new Set(Et)]
    if (((Et.length = 0), We)) {
      We.push(...t)
      return
    }
    for (We = t, We.sort((n, i) => Vt(n) - Vt(i)), ct = 0; ct < We.length; ct++) We[ct]()
    ;(We = null), (ct = 0)
  }
}
const Vt = (e) => (e.id == null ? 1 / 0 : e.id),
  il = (e, t) => {
    const n = Vt(e) - Vt(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function lr(e) {
  ;(si = !1), ($t = !0), pe.sort(il)
  const t = Pe
  try {
    for (ze = 0; ze < pe.length; ze++) {
      const n = pe[ze]
      n && n.active !== !1 && nt(n, null, 14)
    }
  } finally {
    ;(ze = 0), (pe.length = 0), or(), ($t = !1), (Bi = null), (pe.length || Et.length) && lr()
  }
}
function sl(e, t, ...n) {
  if (e.isUnmounted) return
  const i = e.vnode.props || ie
  let s = n
  const r = t.startsWith('update:'),
    o = r && t.slice(7)
  if (o && o in i) {
    const u = `${o === 'modelValue' ? 'model' : o}Modifiers`,
      { number: d, trim: h } = i[u] || ie
    h && (s = n.map((m) => (ue(m) ? m.trim() : m))), d && (s = n.map(go))
  }
  let l,
    a = i[(l = Fn(t))] || i[(l = Fn(Ve(t)))]
  !a && r && (a = i[(l = Fn(Bt(t)))]), a && Ee(a, e, 6, s)
  const c = i[l + 'Once']
  if (c) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[l]) return
    ;(e.emitted[l] = !0), Ee(c, e, 6, s)
  }
}
function ar(e, t, n = !1) {
  const i = t.emitsCache,
    s = i.get(e)
  if (s !== void 0) return s
  const r = e.emits
  let o = {},
    l = !1
  if (!q(e)) {
    const a = (c) => {
      const u = ar(c, t, !0)
      u && ((l = !0), ge(o, u))
    }
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a)
  }
  return !r && !l
    ? (re(e) && i.set(e, null), null)
    : ($(r) ? r.forEach((a) => (o[a] = null)) : ge(o, r), re(e) && i.set(e, o), o)
}
function Tn(e, t) {
  return !e || !bn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      Y(e, t[0].toLowerCase() + t.slice(1)) || Y(e, Bt(t)) || Y(e, t))
}
let Ae = null,
  An = null
function hn(e) {
  const t = Ae
  return (Ae = e), (An = (e && e.type.__scopeId) || null), t
}
function rl(e) {
  An = e
}
function ol() {
  An = null
}
function ri(e, t = Ae, n) {
  if (!t || e._n) return e
  const i = (...s) => {
    i._d && hs(-1)
    const r = hn(t)
    let o
    try {
      o = e(...s)
    } finally {
      hn(r), i._d && hs(1)
    }
    return o
  }
  return (i._n = !0), (i._c = !0), (i._d = !0), i
}
function Dn(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: s,
    props: r,
    propsOptions: [o],
    slots: l,
    attrs: a,
    emit: c,
    render: u,
    renderCache: d,
    data: h,
    setupState: m,
    ctx: y,
    inheritAttrs: v,
  } = e
  let T, p
  const _ = hn(e)
  try {
    if (n.shapeFlag & 4) {
      const A = s || i
      ;(T = Ge(u.call(A, A, d, r, m, h, y))), (p = a)
    } else {
      const A = t
      ;(T = Ge(A.length > 1 ? A(r, { attrs: a, slots: l, emit: c }) : A(r, null))),
        (p = t.props ? a : ll(a))
    }
  } catch (A) {
    ;(Gt.length = 0), xn(A, e, 1), (T = W(Re))
  }
  let b = T
  if (p && v !== !1) {
    const A = Object.keys(p),
      { shapeFlag: P } = b
    A.length && P & 7 && (o && A.some(Si) && (p = al(p, o)), (b = st(b, p)))
  }
  return (
    n.dirs && ((b = st(b)), (b.dirs = b.dirs ? b.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (b.transition = n.transition),
    (T = b),
    hn(_),
    T
  )
}
const ll = (e) => {
    let t
    for (const n in e) (n === 'class' || n === 'style' || bn(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  al = (e, t) => {
    const n = {}
    for (const i in e) (!Si(i) || !(i.slice(9) in t)) && (n[i] = e[i])
    return n
  }
function cl(e, t, n) {
  const { props: i, children: s, component: r } = e,
    { props: o, children: l, patchFlag: a } = t,
    c = r.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && a >= 0) {
    if (a & 1024) return !0
    if (a & 16) return i ? rs(i, o, c) : !!o
    if (a & 8) {
      const u = t.dynamicProps
      for (let d = 0; d < u.length; d++) {
        const h = u[d]
        if (o[h] !== i[h] && !Tn(c, h)) return !0
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : i === o ? !1 : i ? (o ? rs(i, o, c) : !0) : !!o
  return !1
}
function rs(e, t, n) {
  const i = Object.keys(t)
  if (i.length !== Object.keys(e).length) return !0
  for (let s = 0; s < i.length; s++) {
    const r = i[s]
    if (t[r] !== e[r] && !Tn(n, r)) return !0
  }
  return !1
}
function ul({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent)
}
const dl = (e) => e.__isSuspense
function fl(e, t) {
  t && t.pendingBranch ? ($(e) ? t.effects.push(...e) : t.effects.push(e)) : nl(e)
}
function Ri(e, t) {
  if (le) {
    let n = le.provides
    const i = le.parent && le.parent.provides
    i === n && (n = le.provides = Object.create(i)), (n[e] = t)
  }
}
function ln(e, t, n = !1) {
  const i = le || Ae
  if (i) {
    const s =
      i.parent == null ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides
    if (s && e in s) return s[e]
    if (arguments.length > 1) return n && q(t) ? t.call(i.proxy) : t
  }
}
const nn = {}
function Mt(e, t, n) {
  return cr(e, t, n)
}
function cr(e, t, { immediate: n, deep: i, flush: s, onTrack: r, onTrigger: o } = ie) {
  const l = _o() === (le == null ? void 0 : le.scope) ? le : null
  let a,
    c = !1,
    u = !1
  if (
    (he(e)
      ? ((a = () => e.value), (c = pn(e)))
      : At(e)
      ? ((a = () => e), (i = !0))
      : $(e)
      ? ((u = !0),
        (c = e.some((b) => At(b) || pn(b))),
        (a = () =>
          e.map((b) => {
            if (he(b)) return b.value
            if (At(b)) return Ct(b)
            if (q(b)) return nt(b, l, 2)
          })))
      : q(e)
      ? t
        ? (a = () => nt(e, l, 2))
        : (a = () => {
            if (!(l && l.isUnmounted)) return d && d(), Ee(e, l, 3, [h])
          })
      : (a = Pe),
    t && i)
  ) {
    const b = a
    a = () => Ct(b())
  }
  let d,
    h = (b) => {
      d = p.onStop = () => {
        nt(b, l, 4)
      }
    },
    m
  if (Ut)
    if (((h = Pe), t ? n && Ee(t, l, 3, [a(), u ? [] : void 0, h]) : a(), s === 'sync')) {
      const b = oa()
      m = b.__watcherHandles || (b.__watcherHandles = [])
    } else return Pe
  let y = u ? new Array(e.length).fill(nn) : nn
  const v = () => {
    if (p.active)
      if (t) {
        const b = p.run()
        ;(i || c || (u ? b.some((A, P) => zt(A, y[P])) : zt(b, y))) &&
          (d && d(), Ee(t, l, 3, [b, y === nn ? void 0 : u && y[0] === nn ? [] : y, h]), (y = b))
      } else p.run()
  }
  v.allowRecurse = !!t
  let T
  s === 'sync'
    ? (T = v)
    : s === 'post'
    ? (T = () => be(v, l && l.suspense))
    : ((v.pre = !0), l && (v.id = l.uid), (T = () => Pi(v)))
  const p = new Ai(a, T)
  t ? (n ? v() : (y = p.run())) : s === 'post' ? be(p.run.bind(p), l && l.suspense) : p.run()
  const _ = () => {
    p.stop(), l && l.scope && wi(l.scope.effects, p)
  }
  return m && m.push(_), _
}
function pl(e, t, n) {
  const i = this.proxy,
    s = ue(e) ? (e.includes('.') ? ur(i, e) : () => i[e]) : e.bind(i, i)
  let r
  q(t) ? (r = t) : ((r = t.handler), (n = t))
  const o = le
  It(this)
  const l = cr(s, r.bind(i), n)
  return o ? It(o) : pt(), l
}
function ur(e, t) {
  const n = t.split('.')
  return () => {
    let i = e
    for (let s = 0; s < n.length && i; s++) i = i[n[s]]
    return i
  }
}
function Ct(e, t) {
  if (!re(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e
  if ((t.add(e), he(e))) Ct(e.value, t)
  else if ($(e)) for (let n = 0; n < e.length; n++) Ct(e[n], t)
  else if (Ns(e) || Tt(e))
    e.forEach((n) => {
      Ct(n, t)
    })
  else if (Hs(e)) for (const n in e) Ct(e[n], t)
  return e
}
function hl() {
  const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() }
  return (
    Ln(() => {
      e.isMounted = !0
    }),
    On(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const Te = [Function, Array],
  gl = {
    name: 'BaseTransition',
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: Te,
      onEnter: Te,
      onAfterEnter: Te,
      onEnterCancelled: Te,
      onBeforeLeave: Te,
      onLeave: Te,
      onAfterLeave: Te,
      onLeaveCancelled: Te,
      onBeforeAppear: Te,
      onAppear: Te,
      onAfterAppear: Te,
      onAppearCancelled: Te,
    },
    setup(e, { slots: t }) {
      const n = Xl(),
        i = hl()
      let s
      return () => {
        const r = t.default && fr(t.default(), !0)
        if (!r || !r.length) return
        let o = r[0]
        if (r.length > 1) {
          for (const v of r)
            if (v.type !== Re) {
              o = v
              break
            }
        }
        const l = Z(e),
          { mode: a } = l
        if (i.isLeaving) return Gn(o)
        const c = os(o)
        if (!c) return Gn(o)
        const u = oi(c, l, i, n)
        li(c, u)
        const d = n.subTree,
          h = d && os(d)
        let m = !1
        const { getTransitionKey: y } = c.type
        if (y) {
          const v = y()
          s === void 0 ? (s = v) : v !== s && ((s = v), (m = !0))
        }
        if (h && h.type !== Re && (!ut(c, h) || m)) {
          const v = oi(h, l, i, n)
          if ((li(h, v), a === 'out-in'))
            return (
              (i.isLeaving = !0),
              (v.afterLeave = () => {
                ;(i.isLeaving = !1), n.update.active !== !1 && n.update()
              }),
              Gn(o)
            )
          a === 'in-out' &&
            c.type !== Re &&
            (v.delayLeave = (T, p, _) => {
              const b = dr(i, h)
              ;(b[String(h.key)] = h),
                (T._leaveCb = () => {
                  p(), (T._leaveCb = void 0), delete u.delayedLeave
                }),
                (u.delayedLeave = _)
            })
        }
        return o
      }
    },
  },
  ml = gl
function dr(e, t) {
  const { leavingVNodes: n } = e
  let i = n.get(t.type)
  return i || ((i = Object.create(null)), n.set(t.type, i)), i
}
function oi(e, t, n, i) {
  const {
      appear: s,
      mode: r,
      persisted: o = !1,
      onBeforeEnter: l,
      onEnter: a,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: d,
      onLeave: h,
      onAfterLeave: m,
      onLeaveCancelled: y,
      onBeforeAppear: v,
      onAppear: T,
      onAfterAppear: p,
      onAppearCancelled: _,
    } = t,
    b = String(e.key),
    A = dr(n, e),
    P = (w, B) => {
      w && Ee(w, i, 9, B)
    },
    k = (w, B) => {
      const U = B[1]
      P(w, B), $(w) ? w.every((M) => M.length <= 1) && U() : w.length <= 1 && U()
    },
    z = {
      mode: r,
      persisted: o,
      beforeEnter(w) {
        let B = l
        if (!n.isMounted)
          if (s) B = v || l
          else return
        w._leaveCb && w._leaveCb(!0)
        const U = A[b]
        U && ut(e, U) && U.el._leaveCb && U.el._leaveCb(), P(B, [w])
      },
      enter(w) {
        let B = a,
          U = c,
          M = u
        if (!n.isMounted)
          if (s) (B = T || a), (U = p || c), (M = _ || u)
          else return
        let N = !1
        const G = (w._enterCb = (oe) => {
          N ||
            ((N = !0),
            oe ? P(M, [w]) : P(U, [w]),
            z.delayedLeave && z.delayedLeave(),
            (w._enterCb = void 0))
        })
        B ? k(B, [w, G]) : G()
      },
      leave(w, B) {
        const U = String(e.key)
        if ((w._enterCb && w._enterCb(!0), n.isUnmounting)) return B()
        P(d, [w])
        let M = !1
        const N = (w._leaveCb = (G) => {
          M ||
            ((M = !0),
            B(),
            G ? P(y, [w]) : P(m, [w]),
            (w._leaveCb = void 0),
            A[U] === e && delete A[U])
        })
        ;(A[U] = e), h ? k(h, [w, N]) : N()
      },
      clone(w) {
        return oi(w, t, n, i)
      },
    }
  return z
}
function Gn(e) {
  if (En(e)) return (e = st(e)), (e.children = null), e
}
function os(e) {
  return En(e) ? (e.children ? e.children[0] : void 0) : e
}
function li(e, t) {
  e.shapeFlag & 6 && e.component
    ? li(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t)
}
function fr(e, t = !1, n) {
  let i = [],
    s = 0
  for (let r = 0; r < e.length; r++) {
    let o = e[r]
    const l = n == null ? o.key : String(n) + String(o.key != null ? o.key : r)
    o.type === fe
      ? (o.patchFlag & 128 && s++, (i = i.concat(fr(o.children, t, l))))
      : (t || o.type !== Re) && i.push(l != null ? st(o, { key: l }) : o)
  }
  if (s > 1) for (let r = 0; r < i.length; r++) i[r].patchFlag = -2
  return i
}
const an = (e) => !!e.type.__asyncLoader,
  En = (e) => e.type.__isKeepAlive
function vl(e, t) {
  pr(e, 'a', t)
}
function bl(e, t) {
  pr(e, 'da', t)
}
function pr(e, t, n = le) {
  const i =
    e.__wdc ||
    (e.__wdc = () => {
      let s = n
      for (; s; ) {
        if (s.isDeactivated) return
        s = s.parent
      }
      return e()
    })
  if ((Mn(t, i, n), n)) {
    let s = n.parent
    for (; s && s.parent; ) En(s.parent.vnode) && _l(i, t, n, s), (s = s.parent)
  }
}
function _l(e, t, n, i) {
  const s = Mn(t, e, i, !0)
  gr(() => {
    wi(i[t], s)
  }, n)
}
function Mn(e, t, n = le, i = !1) {
  if (n) {
    const s = n[e] || (n[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...o) => {
          if (n.isUnmounted) return
          Pt(), It(n)
          const l = Ee(t, n, e, o)
          return pt(), Rt(), l
        })
    return i ? s.unshift(r) : s.push(r), r
  }
}
const Ye =
    (e) =>
    (t, n = le) =>
      (!Ut || e === 'sp') && Mn(e, (...i) => t(...i), n),
  yl = Ye('bm'),
  Ln = Ye('m'),
  hr = Ye('bu'),
  Ni = Ye('u'),
  On = Ye('bum'),
  gr = Ye('um'),
  Sl = Ye('sp'),
  wl = Ye('rtg'),
  Cl = Ye('rtc')
function xl(e, t = le) {
  Mn('ec', e, t)
}
function ot(e, t, n, i) {
  const s = e.dirs,
    r = t && t.dirs
  for (let o = 0; o < s.length; o++) {
    const l = s[o]
    r && (l.oldValue = r[o].value)
    let a = l.dir[i]
    a && (Pt(), Ee(a, n, 8, [e.el, l, e, t]), Rt())
  }
}
const mr = 'components'
function se(e, t) {
  return Al(mr, e, !0, t) || e
}
const Tl = Symbol()
function Al(e, t, n = !0, i = !1) {
  const s = Ae || le
  if (s) {
    const r = s.type
    if (e === mr) {
      const l = ia(r, !1)
      if (l && (l === t || l === Ve(t) || l === Sn(Ve(t)))) return r
    }
    const o = ls(s[e] || r[e], t) || ls(s.appContext[e], t)
    return !o && i ? r : o
  }
}
function ls(e, t) {
  return e && (e[t] || e[Ve(t)] || e[Sn(Ve(t))])
}
function Lt(e, t, n, i) {
  let s
  const r = n && n[i]
  if ($(e) || ue(e)) {
    s = new Array(e.length)
    for (let o = 0, l = e.length; o < l; o++) s[o] = t(e[o], o, void 0, r && r[o])
  } else if (typeof e == 'number') {
    s = new Array(e)
    for (let o = 0; o < e; o++) s[o] = t(o + 1, o, void 0, r && r[o])
  } else if (re(e))
    if (e[Symbol.iterator]) s = Array.from(e, (o, l) => t(o, l, void 0, r && r[l]))
    else {
      const o = Object.keys(e)
      s = new Array(o.length)
      for (let l = 0, a = o.length; l < a; l++) {
        const c = o[l]
        s[l] = t(e[c], c, l, r && r[l])
      }
    }
  else s = []
  return n && (n[i] = s), s
}
const ai = (e) => (e ? (Er(e) ? Gi(e) || e.proxy : ai(e.parent)) : null),
  Dt = ge(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ai(e.parent),
    $root: (e) => ai(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ki(e),
    $forceUpdate: (e) => e.f || (e.f = () => Pi(e.update)),
    $nextTick: (e) => e.n || (e.n = sr.bind(e.proxy)),
    $watch: (e) => pl.bind(e),
  }),
  zn = (e, t) => e !== ie && !e.__isScriptSetup && Y(e, t),
  El = {
    get({ _: e }, t) {
      const { ctx: n, setupState: i, data: s, props: r, accessCache: o, type: l, appContext: a } = e
      let c
      if (t[0] !== '$') {
        const m = o[t]
        if (m !== void 0)
          switch (m) {
            case 1:
              return i[t]
            case 2:
              return s[t]
            case 4:
              return n[t]
            case 3:
              return r[t]
          }
        else {
          if (zn(i, t)) return (o[t] = 1), i[t]
          if (s !== ie && Y(s, t)) return (o[t] = 2), s[t]
          if ((c = e.propsOptions[0]) && Y(c, t)) return (o[t] = 3), r[t]
          if (n !== ie && Y(n, t)) return (o[t] = 4), n[t]
          ci && (o[t] = 0)
        }
      }
      const u = Dt[t]
      let d, h
      if (u) return t === '$attrs' && _e(e, 'get', t), u(e)
      if ((d = l.__cssModules) && (d = d[t])) return d
      if (n !== ie && Y(n, t)) return (o[t] = 4), n[t]
      if (((h = a.config.globalProperties), Y(h, t))) return h[t]
    },
    set({ _: e }, t, n) {
      const { data: i, setupState: s, ctx: r } = e
      return zn(s, t)
        ? ((s[t] = n), !0)
        : i !== ie && Y(i, t)
        ? ((i[t] = n), !0)
        : Y(e.props, t) || (t[0] === '$' && t.slice(1) in e)
        ? !1
        : ((r[t] = n), !0)
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: s, propsOptions: r } },
      o,
    ) {
      let l
      return (
        !!n[o] ||
        (e !== ie && Y(e, o)) ||
        zn(t, o) ||
        ((l = r[0]) && Y(l, o)) ||
        Y(i, o) ||
        Y(Dt, o) ||
        Y(s.config.globalProperties, o)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : Y(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    },
  }
let ci = !0
function Ml(e) {
  const t = ki(e),
    n = e.proxy,
    i = e.ctx
  ;(ci = !1), t.beforeCreate && as(t.beforeCreate, e, 'bc')
  const {
    data: s,
    computed: r,
    methods: o,
    watch: l,
    provide: a,
    inject: c,
    created: u,
    beforeMount: d,
    mounted: h,
    beforeUpdate: m,
    updated: y,
    activated: v,
    deactivated: T,
    beforeDestroy: p,
    beforeUnmount: _,
    destroyed: b,
    unmounted: A,
    render: P,
    renderTracked: k,
    renderTriggered: z,
    errorCaptured: w,
    serverPrefetch: B,
    expose: U,
    inheritAttrs: M,
    components: N,
    directives: G,
    filters: oe,
  } = t
  if ((c && Ll(c, i, null, e.appContext.config.unwrapInjectedRef), o))
    for (const ne in o) {
      const J = o[ne]
      q(J) && (i[ne] = J.bind(n))
    }
  if (s) {
    const ne = s.call(n, n)
    re(ne) && (e.data = Cn(ne))
  }
  if (((ci = !0), r))
    for (const ne in r) {
      const J = r[ne],
        ke = q(J) ? J.bind(n, n) : q(J.get) ? J.get.bind(n, n) : Pe,
        rt = !q(J) && q(J.set) ? J.set.bind(n) : Pe,
        Fe = zi({ get: ke, set: rt })
      Object.defineProperty(i, ne, {
        enumerable: !0,
        configurable: !0,
        get: () => Fe.value,
        set: (xe) => (Fe.value = xe),
      })
    }
  if (l) for (const ne in l) vr(l[ne], i, n, ne)
  if (a) {
    const ne = q(a) ? a.call(n) : a
    Reflect.ownKeys(ne).forEach((J) => {
      Ri(J, ne[J])
    })
  }
  u && as(u, e, 'c')
  function de(ne, J) {
    $(J) ? J.forEach((ke) => ne(ke.bind(n))) : J && ne(J.bind(n))
  }
  if (
    (de(yl, d),
    de(Ln, h),
    de(hr, m),
    de(Ni, y),
    de(vl, v),
    de(bl, T),
    de(xl, w),
    de(Cl, k),
    de(wl, z),
    de(On, _),
    de(gr, A),
    de(Sl, B),
    $(U))
  )
    if (U.length) {
      const ne = e.exposed || (e.exposed = {})
      U.forEach((J) => {
        Object.defineProperty(ne, J, { get: () => n[J], set: (ke) => (n[J] = ke) })
      })
    } else e.exposed || (e.exposed = {})
  P && e.render === Pe && (e.render = P),
    M != null && (e.inheritAttrs = M),
    N && (e.components = N),
    G && (e.directives = G)
}
function Ll(e, t, n = Pe, i = !1) {
  $(e) && (e = ui(e))
  for (const s in e) {
    const r = e[s]
    let o
    re(r)
      ? 'default' in r
        ? (o = ln(r.from || s, r.default, !0))
        : (o = ln(r.from || s))
      : (o = ln(r)),
      he(o) && i
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (l) => (o.value = l),
          })
        : (t[s] = o)
  }
}
function as(e, t, n) {
  Ee($(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function vr(e, t, n, i) {
  const s = i.includes('.') ? ur(n, i) : () => n[i]
  if (ue(e)) {
    const r = t[e]
    q(r) && Mt(s, r)
  } else if (q(e)) Mt(s, e.bind(n))
  else if (re(e))
    if ($(e)) e.forEach((r) => vr(r, t, n, i))
    else {
      const r = q(e.handler) ? e.handler.bind(n) : t[e.handler]
      q(r) && Mt(s, r, e)
    }
}
function ki(e) {
  const t = e.type,
    { mixins: n, extends: i } = t,
    {
      mixins: s,
      optionsCache: r,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    l = r.get(t)
  let a
  return (
    l
      ? (a = l)
      : !s.length && !n && !i
      ? (a = t)
      : ((a = {}), s.length && s.forEach((c) => gn(a, c, o, !0)), gn(a, t, o)),
    re(t) && r.set(t, a),
    a
  )
}
function gn(e, t, n, i = !1) {
  const { mixins: s, extends: r } = t
  r && gn(e, r, n, !0), s && s.forEach((o) => gn(e, o, n, !0))
  for (const o in t)
    if (!(i && o === 'expose')) {
      const l = Ol[o] || (n && n[o])
      e[o] = l ? l(e[o], t[o]) : t[o]
    }
  return e
}
const Ol = {
  data: cs,
  props: at,
  emits: at,
  methods: at,
  computed: at,
  beforeCreate: me,
  created: me,
  beforeMount: me,
  mounted: me,
  beforeUpdate: me,
  updated: me,
  beforeDestroy: me,
  beforeUnmount: me,
  destroyed: me,
  unmounted: me,
  activated: me,
  deactivated: me,
  errorCaptured: me,
  serverPrefetch: me,
  components: at,
  directives: at,
  watch: Bl,
  provide: cs,
  inject: Il,
}
function cs(e, t) {
  return t
    ? e
      ? function () {
          return ge(q(e) ? e.call(this, this) : e, q(t) ? t.call(this, this) : t)
        }
      : t
    : e
}
function Il(e, t) {
  return at(ui(e), ui(t))
}
function ui(e) {
  if ($(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function me(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function at(e, t) {
  return e ? ge(ge(Object.create(null), e), t) : t
}
function Bl(e, t) {
  if (!e) return t
  if (!t) return e
  const n = ge(Object.create(null), e)
  for (const i in t) n[i] = me(e[i], t[i])
  return n
}
function Pl(e, t, n, i = !1) {
  const s = {},
    r = {}
  fn(r, Bn, 1), (e.propsDefaults = Object.create(null)), br(e, t, s, r)
  for (const o in e.propsOptions[0]) o in s || (s[o] = void 0)
  n ? (e.props = i ? s : Uo(s)) : e.type.props ? (e.props = s) : (e.props = r), (e.attrs = r)
}
function Rl(e, t, n, i) {
  const {
      props: s,
      attrs: r,
      vnode: { patchFlag: o },
    } = e,
    l = Z(s),
    [a] = e.propsOptions
  let c = !1
  if ((i || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = e.vnode.dynamicProps
      for (let d = 0; d < u.length; d++) {
        let h = u[d]
        if (Tn(e.emitsOptions, h)) continue
        const m = t[h]
        if (a)
          if (Y(r, h)) m !== r[h] && ((r[h] = m), (c = !0))
          else {
            const y = Ve(h)
            s[y] = di(a, l, y, m, e, !1)
          }
        else m !== r[h] && ((r[h] = m), (c = !0))
      }
    }
  } else {
    br(e, t, s, r) && (c = !0)
    let u
    for (const d in l)
      (!t || (!Y(t, d) && ((u = Bt(d)) === d || !Y(t, u)))) &&
        (a
          ? n && (n[d] !== void 0 || n[u] !== void 0) && (s[d] = di(a, l, d, void 0, e, !0))
          : delete s[d])
    if (r !== l) for (const d in r) (!t || !Y(t, d)) && (delete r[d], (c = !0))
  }
  c && Qe(e, 'set', '$attrs')
}
function br(e, t, n, i) {
  const [s, r] = e.propsOptions
  let o = !1,
    l
  if (t)
    for (let a in t) {
      if (on(a)) continue
      const c = t[a]
      let u
      s && Y(s, (u = Ve(a)))
        ? !r || !r.includes(u)
          ? (n[u] = c)
          : ((l || (l = {}))[u] = c)
        : Tn(e.emitsOptions, a) || ((!(a in i) || c !== i[a]) && ((i[a] = c), (o = !0)))
    }
  if (r) {
    const a = Z(n),
      c = l || ie
    for (let u = 0; u < r.length; u++) {
      const d = r[u]
      n[d] = di(s, a, d, c[d], e, !Y(c, d))
    }
  }
  return o
}
function di(e, t, n, i, s, r) {
  const o = e[n]
  if (o != null) {
    const l = Y(o, 'default')
    if (l && i === void 0) {
      const a = o.default
      if (o.type !== Function && q(a)) {
        const { propsDefaults: c } = s
        n in c ? (i = c[n]) : (It(s), (i = c[n] = a.call(null, t)), pt())
      } else i = a
    }
    o[0] && (r && !l ? (i = !1) : o[1] && (i === '' || i === Bt(n)) && (i = !0))
  }
  return i
}
function _r(e, t, n = !1) {
  const i = t.propsCache,
    s = i.get(e)
  if (s) return s
  const r = e.props,
    o = {},
    l = []
  let a = !1
  if (!q(e)) {
    const u = (d) => {
      a = !0
      const [h, m] = _r(d, t, !0)
      ge(o, h), m && l.push(...m)
    }
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u)
  }
  if (!r && !a) return re(e) && i.set(e, xt), xt
  if ($(r))
    for (let u = 0; u < r.length; u++) {
      const d = Ve(r[u])
      us(d) && (o[d] = ie)
    }
  else if (r)
    for (const u in r) {
      const d = Ve(u)
      if (us(d)) {
        const h = r[u],
          m = (o[d] = $(h) || q(h) ? { type: h } : Object.assign({}, h))
        if (m) {
          const y = ps(Boolean, m.type),
            v = ps(String, m.type)
          ;(m[0] = y > -1), (m[1] = v < 0 || y < v), (y > -1 || Y(m, 'default')) && l.push(d)
        }
      }
    }
  const c = [o, l]
  return re(e) && i.set(e, c), c
}
function us(e) {
  return e[0] !== '$'
}
function ds(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
  return t ? t[2] : e === null ? 'null' : ''
}
function fs(e, t) {
  return ds(e) === ds(t)
}
function ps(e, t) {
  return $(t) ? t.findIndex((n) => fs(n, e)) : q(t) && fs(t, e) ? 0 : -1
}
const yr = (e) => e[0] === '_' || e === '$stable',
  Fi = (e) => ($(e) ? e.map(Ge) : [Ge(e)]),
  Nl = (e, t, n) => {
    if (t._n) return t
    const i = ri((...s) => Fi(t(...s)), n)
    return (i._c = !1), i
  },
  Sr = (e, t, n) => {
    const i = e._ctx
    for (const s in e) {
      if (yr(s)) continue
      const r = e[s]
      if (q(r)) t[s] = Nl(s, r, i)
      else if (r != null) {
        const o = Fi(r)
        t[s] = () => o
      }
    }
  },
  wr = (e, t) => {
    const n = Fi(t)
    e.slots.default = () => n
  },
  kl = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = Z(t)), fn(t, '_', n)) : Sr(t, (e.slots = {}))
    } else (e.slots = {}), t && wr(e, t)
    fn(e.slots, Bn, 1)
  },
  Fl = (e, t, n) => {
    const { vnode: i, slots: s } = e
    let r = !0,
      o = ie
    if (i.shapeFlag & 32) {
      const l = t._
      l
        ? n && l === 1
          ? (r = !1)
          : (ge(s, t), !n && l === 1 && delete s._)
        : ((r = !t.$stable), Sr(t, s)),
        (o = t)
    } else t && (wr(e, t), (o = { default: 1 }))
    if (r) for (const l in s) !yr(l) && !(l in o) && delete s[l]
  }
function Cr() {
  return {
    app: null,
    config: {
      isNativeTag: ao,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let Hl = 0
function Dl(e, t) {
  return function (i, s = null) {
    q(i) || (i = Object.assign({}, i)), s != null && !re(s) && (s = null)
    const r = Cr(),
      o = new Set()
    let l = !1
    const a = (r.app = {
      _uid: Hl++,
      _component: i,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: la,
      get config() {
        return r.config
      },
      set config(c) {},
      use(c, ...u) {
        return (
          o.has(c) ||
            (c && q(c.install) ? (o.add(c), c.install(a, ...u)) : q(c) && (o.add(c), c(a, ...u))),
          a
        )
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), a
      },
      component(c, u) {
        return u ? ((r.components[c] = u), a) : r.components[c]
      },
      directive(c, u) {
        return u ? ((r.directives[c] = u), a) : r.directives[c]
      },
      mount(c, u, d) {
        if (!l) {
          const h = W(i, s)
          return (
            (h.appContext = r),
            u && t ? t(h, c) : e(h, c, d),
            (l = !0),
            (a._container = c),
            (c.__vue_app__ = a),
            Gi(h.component) || h.component.proxy
          )
        }
      },
      unmount() {
        l && (e(null, a._container), delete a._container.__vue_app__)
      },
      provide(c, u) {
        return (r.provides[c] = u), a
      },
    })
    return a
  }
}
function fi(e, t, n, i, s = !1) {
  if ($(e)) {
    e.forEach((h, m) => fi(h, t && ($(t) ? t[m] : t), n, i, s))
    return
  }
  if (an(i) && !s) return
  const r = i.shapeFlag & 4 ? Gi(i.component) || i.component.proxy : i.el,
    o = s ? null : r,
    { i: l, r: a } = e,
    c = t && t.r,
    u = l.refs === ie ? (l.refs = {}) : l.refs,
    d = l.setupState
  if (
    (c != null &&
      c !== a &&
      (ue(c) ? ((u[c] = null), Y(d, c) && (d[c] = null)) : he(c) && (c.value = null)),
    q(a))
  )
    nt(a, l, 12, [o, u])
  else {
    const h = ue(a),
      m = he(a)
    if (h || m) {
      const y = () => {
        if (e.f) {
          const v = h ? (Y(d, a) ? d[a] : u[a]) : a.value
          s
            ? $(v) && wi(v, r)
            : $(v)
            ? v.includes(r) || v.push(r)
            : h
            ? ((u[a] = [r]), Y(d, a) && (d[a] = u[a]))
            : ((a.value = [r]), e.k && (u[e.k] = a.value))
        } else h ? ((u[a] = o), Y(d, a) && (d[a] = o)) : m && ((a.value = o), e.k && (u[e.k] = o))
      }
      o ? ((y.id = -1), be(y, n)) : y()
    }
  }
}
const be = fl
function Gl(e) {
  return zl(e)
}
function zl(e, t) {
  const n = mo()
  n.__VUE__ = !0
  const {
      insert: i,
      remove: s,
      patchProp: r,
      createElement: o,
      createText: l,
      createComment: a,
      setText: c,
      setElementText: u,
      parentNode: d,
      nextSibling: h,
      setScopeId: m = Pe,
      insertStaticContent: y,
    } = e,
    v = (f, g, S, x = null, C = null, O = null, R = !1, L = null, I = !!g.dynamicChildren) => {
      if (f === g) return
      f && !ut(f, g) && ((x = Yt(f)), xe(f, C, O, !0), (f = null)),
        g.patchFlag === -2 && ((I = !1), (g.dynamicChildren = null))
      const { type: E, ref: H, shapeFlag: F } = g
      switch (E) {
        case In:
          T(f, g, S, x)
          break
        case Re:
          p(f, g, S, x)
          break
        case cn:
          f == null && _(g, S, x, R)
          break
        case fe:
          N(f, g, S, x, C, O, R, L, I)
          break
        default:
          F & 1
            ? P(f, g, S, x, C, O, R, L, I)
            : F & 6
            ? G(f, g, S, x, C, O, R, L, I)
            : (F & 64 || F & 128) && E.process(f, g, S, x, C, O, R, L, I, _t)
      }
      H != null && C && fi(H, f && f.ref, O, g || f, !g)
    },
    T = (f, g, S, x) => {
      if (f == null) i((g.el = l(g.children)), S, x)
      else {
        const C = (g.el = f.el)
        g.children !== f.children && c(C, g.children)
      }
    },
    p = (f, g, S, x) => {
      f == null ? i((g.el = a(g.children || '')), S, x) : (g.el = f.el)
    },
    _ = (f, g, S, x) => {
      ;[f.el, f.anchor] = y(f.children, g, S, x, f.el, f.anchor)
    },
    b = ({ el: f, anchor: g }, S, x) => {
      let C
      for (; f && f !== g; ) (C = h(f)), i(f, S, x), (f = C)
      i(g, S, x)
    },
    A = ({ el: f, anchor: g }) => {
      let S
      for (; f && f !== g; ) (S = h(f)), s(f), (f = S)
      s(g)
    },
    P = (f, g, S, x, C, O, R, L, I) => {
      ;(R = R || g.type === 'svg'), f == null ? k(g, S, x, C, O, R, L, I) : B(f, g, C, O, R, L, I)
    },
    k = (f, g, S, x, C, O, R, L) => {
      let I, E
      const { type: H, props: F, shapeFlag: D, transition: j, dirs: K } = f
      if (
        ((I = f.el = o(f.type, O, F && F.is, F)),
        D & 8
          ? u(I, f.children)
          : D & 16 && w(f.children, I, null, x, C, O && H !== 'foreignObject', R, L),
        K && ot(f, null, x, 'created'),
        z(I, f, f.scopeId, R, x),
        F)
      ) {
        for (const ee in F)
          ee !== 'value' && !on(ee) && r(I, ee, null, F[ee], O, f.children, x, C, qe)
        'value' in F && r(I, 'value', null, F.value), (E = F.onVnodeBeforeMount) && De(E, x, f)
      }
      K && ot(f, null, x, 'beforeMount')
      const te = (!C || (C && !C.pendingBranch)) && j && !j.persisted
      te && j.beforeEnter(I),
        i(I, g, S),
        ((E = F && F.onVnodeMounted) || te || K) &&
          be(() => {
            E && De(E, x, f), te && j.enter(I), K && ot(f, null, x, 'mounted')
          }, C)
    },
    z = (f, g, S, x, C) => {
      if ((S && m(f, S), x)) for (let O = 0; O < x.length; O++) m(f, x[O])
      if (C) {
        let O = C.subTree
        if (g === O) {
          const R = C.vnode
          z(f, R, R.scopeId, R.slotScopeIds, C.parent)
        }
      }
    },
    w = (f, g, S, x, C, O, R, L, I = 0) => {
      for (let E = I; E < f.length; E++) {
        const H = (f[E] = L ? Xe(f[E]) : Ge(f[E]))
        v(null, H, g, S, x, C, O, R, L)
      }
    },
    B = (f, g, S, x, C, O, R) => {
      const L = (g.el = f.el)
      let { patchFlag: I, dynamicChildren: E, dirs: H } = g
      I |= f.patchFlag & 16
      const F = f.props || ie,
        D = g.props || ie
      let j
      S && lt(S, !1),
        (j = D.onVnodeBeforeUpdate) && De(j, S, g, f),
        H && ot(g, f, S, 'beforeUpdate'),
        S && lt(S, !0)
      const K = C && g.type !== 'foreignObject'
      if (
        (E ? U(f.dynamicChildren, E, L, S, x, K, O) : R || J(f, g, L, null, S, x, K, O, !1), I > 0)
      ) {
        if (I & 16) M(L, g, F, D, S, x, C)
        else if (
          (I & 2 && F.class !== D.class && r(L, 'class', null, D.class, C),
          I & 4 && r(L, 'style', F.style, D.style, C),
          I & 8)
        ) {
          const te = g.dynamicProps
          for (let ee = 0; ee < te.length; ee++) {
            const ae = te[ee],
              Me = F[ae],
              yt = D[ae]
            ;(yt !== Me || ae === 'value') && r(L, ae, Me, yt, C, f.children, S, x, qe)
          }
        }
        I & 1 && f.children !== g.children && u(L, g.children)
      } else !R && E == null && M(L, g, F, D, S, x, C)
      ;((j = D.onVnodeUpdated) || H) &&
        be(() => {
          j && De(j, S, g, f), H && ot(g, f, S, 'updated')
        }, x)
    },
    U = (f, g, S, x, C, O, R) => {
      for (let L = 0; L < g.length; L++) {
        const I = f[L],
          E = g[L],
          H = I.el && (I.type === fe || !ut(I, E) || I.shapeFlag & 70) ? d(I.el) : S
        v(I, E, H, null, x, C, O, R, !0)
      }
    },
    M = (f, g, S, x, C, O, R) => {
      if (S !== x) {
        if (S !== ie)
          for (const L in S) !on(L) && !(L in x) && r(f, L, S[L], null, R, g.children, C, O, qe)
        for (const L in x) {
          if (on(L)) continue
          const I = x[L],
            E = S[L]
          I !== E && L !== 'value' && r(f, L, E, I, R, g.children, C, O, qe)
        }
        'value' in x && r(f, 'value', S.value, x.value)
      }
    },
    N = (f, g, S, x, C, O, R, L, I) => {
      const E = (g.el = f ? f.el : l('')),
        H = (g.anchor = f ? f.anchor : l(''))
      let { patchFlag: F, dynamicChildren: D, slotScopeIds: j } = g
      j && (L = L ? L.concat(j) : j),
        f == null
          ? (i(E, S, x), i(H, S, x), w(g.children, S, H, C, O, R, L, I))
          : F > 0 && F & 64 && D && f.dynamicChildren
          ? (U(f.dynamicChildren, D, S, C, O, R, L),
            (g.key != null || (C && g === C.subTree)) && xr(f, g, !0))
          : J(f, g, S, H, C, O, R, L, I)
    },
    G = (f, g, S, x, C, O, R, L, I) => {
      ;(g.slotScopeIds = L),
        f == null
          ? g.shapeFlag & 512
            ? C.ctx.activate(g, S, x, R, I)
            : oe(g, S, x, C, O, R, I)
          : bt(f, g, I)
    },
    oe = (f, g, S, x, C, O, R) => {
      const L = (f.component = Zl(f, x, C))
      if ((En(f) && (L.ctx.renderer = _t), Jl(L), L.asyncDep)) {
        if ((C && C.registerDep(L, de), !f.el)) {
          const I = (L.subTree = W(Re))
          p(null, I, g, S)
        }
        return
      }
      de(L, f, g, S, C, O, R)
    },
    bt = (f, g, S) => {
      const x = (g.component = f.component)
      if (cl(f, g, S))
        if (x.asyncDep && !x.asyncResolved) {
          ne(x, g, S)
          return
        } else (x.next = g), tl(x.update), x.update()
      else (g.el = f.el), (x.vnode = g)
    },
    de = (f, g, S, x, C, O, R) => {
      const L = () => {
          if (f.isMounted) {
            let { next: H, bu: F, u: D, parent: j, vnode: K } = f,
              te = H,
              ee
            lt(f, !1),
              H ? ((H.el = K.el), ne(f, H, R)) : (H = K),
              F && Hn(F),
              (ee = H.props && H.props.onVnodeBeforeUpdate) && De(ee, j, H, K),
              lt(f, !0)
            const ae = Dn(f),
              Me = f.subTree
            ;(f.subTree = ae),
              v(Me, ae, d(Me.el), Yt(Me), f, C, O),
              (H.el = ae.el),
              te === null && ul(f, ae.el),
              D && be(D, C),
              (ee = H.props && H.props.onVnodeUpdated) && be(() => De(ee, j, H, K), C)
          } else {
            let H
            const { el: F, props: D } = g,
              { bm: j, m: K, parent: te } = f,
              ee = an(g)
            if (
              (lt(f, !1),
              j && Hn(j),
              !ee && (H = D && D.onVnodeBeforeMount) && De(H, te, g),
              lt(f, !0),
              F && kn)
            ) {
              const ae = () => {
                ;(f.subTree = Dn(f)), kn(F, f.subTree, f, C, null)
              }
              ee ? g.type.__asyncLoader().then(() => !f.isUnmounted && ae()) : ae()
            } else {
              const ae = (f.subTree = Dn(f))
              v(null, ae, S, x, f, C, O), (g.el = ae.el)
            }
            if ((K && be(K, C), !ee && (H = D && D.onVnodeMounted))) {
              const ae = g
              be(() => De(H, te, ae), C)
            }
            ;(g.shapeFlag & 256 || (te && an(te.vnode) && te.vnode.shapeFlag & 256)) &&
              f.a &&
              be(f.a, C),
              (f.isMounted = !0),
              (g = S = x = null)
          }
        },
        I = (f.effect = new Ai(L, () => Pi(E), f.scope)),
        E = (f.update = () => I.run())
      ;(E.id = f.uid), lt(f, !0), E()
    },
    ne = (f, g, S) => {
      g.component = f
      const x = f.vnode.props
      ;(f.vnode = g), (f.next = null), Rl(f, g.props, x, S), Fl(f, g.children, S), Pt(), ss(), Rt()
    },
    J = (f, g, S, x, C, O, R, L, I = !1) => {
      const E = f && f.children,
        H = f ? f.shapeFlag : 0,
        F = g.children,
        { patchFlag: D, shapeFlag: j } = g
      if (D > 0) {
        if (D & 128) {
          rt(E, F, S, x, C, O, R, L, I)
          return
        } else if (D & 256) {
          ke(E, F, S, x, C, O, R, L, I)
          return
        }
      }
      j & 8
        ? (H & 16 && qe(E, C, O), F !== E && u(S, F))
        : H & 16
        ? j & 16
          ? rt(E, F, S, x, C, O, R, L, I)
          : qe(E, C, O, !0)
        : (H & 8 && u(S, ''), j & 16 && w(F, S, x, C, O, R, L, I))
    },
    ke = (f, g, S, x, C, O, R, L, I) => {
      ;(f = f || xt), (g = g || xt)
      const E = f.length,
        H = g.length,
        F = Math.min(E, H)
      let D
      for (D = 0; D < F; D++) {
        const j = (g[D] = I ? Xe(g[D]) : Ge(g[D]))
        v(f[D], j, S, null, C, O, R, L, I)
      }
      E > H ? qe(f, C, O, !0, !1, F) : w(g, S, x, C, O, R, L, I, F)
    },
    rt = (f, g, S, x, C, O, R, L, I) => {
      let E = 0
      const H = g.length
      let F = f.length - 1,
        D = H - 1
      for (; E <= F && E <= D; ) {
        const j = f[E],
          K = (g[E] = I ? Xe(g[E]) : Ge(g[E]))
        if (ut(j, K)) v(j, K, S, null, C, O, R, L, I)
        else break
        E++
      }
      for (; E <= F && E <= D; ) {
        const j = f[F],
          K = (g[D] = I ? Xe(g[D]) : Ge(g[D]))
        if (ut(j, K)) v(j, K, S, null, C, O, R, L, I)
        else break
        F--, D--
      }
      if (E > F) {
        if (E <= D) {
          const j = D + 1,
            K = j < H ? g[j].el : x
          for (; E <= D; ) v(null, (g[E] = I ? Xe(g[E]) : Ge(g[E])), S, K, C, O, R, L, I), E++
        }
      } else if (E > D) for (; E <= F; ) xe(f[E], C, O, !0), E++
      else {
        const j = E,
          K = E,
          te = new Map()
        for (E = K; E <= D; E++) {
          const Se = (g[E] = I ? Xe(g[E]) : Ge(g[E]))
          Se.key != null && te.set(Se.key, E)
        }
        let ee,
          ae = 0
        const Me = D - K + 1
        let yt = !1,
          Wi = 0
        const kt = new Array(Me)
        for (E = 0; E < Me; E++) kt[E] = 0
        for (E = j; E <= F; E++) {
          const Se = f[E]
          if (ae >= Me) {
            xe(Se, C, O, !0)
            continue
          }
          let He
          if (Se.key != null) He = te.get(Se.key)
          else
            for (ee = K; ee <= D; ee++)
              if (kt[ee - K] === 0 && ut(Se, g[ee])) {
                He = ee
                break
              }
          He === void 0
            ? xe(Se, C, O, !0)
            : ((kt[He - K] = E + 1),
              He >= Wi ? (Wi = He) : (yt = !0),
              v(Se, g[He], S, null, C, O, R, L, I),
              ae++)
        }
        const Ki = yt ? jl(kt) : xt
        for (ee = Ki.length - 1, E = Me - 1; E >= 0; E--) {
          const Se = K + E,
            He = g[Se],
            Qi = Se + 1 < H ? g[Se + 1].el : x
          kt[E] === 0
            ? v(null, He, S, Qi, C, O, R, L, I)
            : yt && (ee < 0 || E !== Ki[ee] ? Fe(He, S, Qi, 2) : ee--)
        }
      }
    },
    Fe = (f, g, S, x, C = null) => {
      const { el: O, type: R, transition: L, children: I, shapeFlag: E } = f
      if (E & 6) {
        Fe(f.component.subTree, g, S, x)
        return
      }
      if (E & 128) {
        f.suspense.move(g, S, x)
        return
      }
      if (E & 64) {
        R.move(f, g, S, _t)
        return
      }
      if (R === fe) {
        i(O, g, S)
        for (let F = 0; F < I.length; F++) Fe(I[F], g, S, x)
        i(f.anchor, g, S)
        return
      }
      if (R === cn) {
        b(f, g, S)
        return
      }
      if (x !== 2 && E & 1 && L)
        if (x === 0) L.beforeEnter(O), i(O, g, S), be(() => L.enter(O), C)
        else {
          const { leave: F, delayLeave: D, afterLeave: j } = L,
            K = () => i(O, g, S),
            te = () => {
              F(O, () => {
                K(), j && j()
              })
            }
          D ? D(O, K, te) : te()
        }
      else i(O, g, S)
    },
    xe = (f, g, S, x = !1, C = !1) => {
      const {
        type: O,
        props: R,
        ref: L,
        children: I,
        dynamicChildren: E,
        shapeFlag: H,
        patchFlag: F,
        dirs: D,
      } = f
      if ((L != null && fi(L, null, S, f, !0), H & 256)) {
        g.ctx.deactivate(f)
        return
      }
      const j = H & 1 && D,
        K = !an(f)
      let te
      if ((K && (te = R && R.onVnodeBeforeUnmount) && De(te, g, f), H & 6)) to(f.component, S, x)
      else {
        if (H & 128) {
          f.suspense.unmount(S, x)
          return
        }
        j && ot(f, null, g, 'beforeUnmount'),
          H & 64
            ? f.type.remove(f, g, S, C, _t, x)
            : E && (O !== fe || (F > 0 && F & 64))
            ? qe(E, g, S, !1, !0)
            : ((O === fe && F & 384) || (!C && H & 16)) && qe(I, g, S),
          x && Qt(f)
      }
      ;((K && (te = R && R.onVnodeUnmounted)) || j) &&
        be(() => {
          te && De(te, g, f), j && ot(f, null, g, 'unmounted')
        }, S)
    },
    Qt = (f) => {
      const { type: g, el: S, anchor: x, transition: C } = f
      if (g === fe) {
        eo(S, x)
        return
      }
      if (g === cn) {
        A(f)
        return
      }
      const O = () => {
        s(S), C && !C.persisted && C.afterLeave && C.afterLeave()
      }
      if (f.shapeFlag & 1 && C && !C.persisted) {
        const { leave: R, delayLeave: L } = C,
          I = () => R(S, O)
        L ? L(f.el, O, I) : I()
      } else O()
    },
    eo = (f, g) => {
      let S
      for (; f !== g; ) (S = h(f)), s(f), (f = S)
      s(g)
    },
    to = (f, g, S) => {
      const { bum: x, scope: C, update: O, subTree: R, um: L } = f
      x && Hn(x),
        C.stop(),
        O && ((O.active = !1), xe(R, f, g, S)),
        L && be(L, g),
        be(() => {
          f.isUnmounted = !0
        }, g),
        g &&
          g.pendingBranch &&
          !g.isUnmounted &&
          f.asyncDep &&
          !f.asyncResolved &&
          f.suspenseId === g.pendingId &&
          (g.deps--, g.deps === 0 && g.resolve())
    },
    qe = (f, g, S, x = !1, C = !1, O = 0) => {
      for (let R = O; R < f.length; R++) xe(f[R], g, S, x, C)
    },
    Yt = (f) =>
      f.shapeFlag & 6
        ? Yt(f.component.subTree)
        : f.shapeFlag & 128
        ? f.suspense.next()
        : h(f.anchor || f.el),
    Ui = (f, g, S) => {
      f == null
        ? g._vnode && xe(g._vnode, null, null, !0)
        : v(g._vnode || null, f, g, null, null, null, S),
        ss(),
        or(),
        (g._vnode = f)
    },
    _t = { p: v, um: xe, m: Fe, r: Qt, mt: oe, mc: w, pc: J, pbc: U, n: Yt, o: e }
  let Nn, kn
  return t && ([Nn, kn] = t(_t)), { render: Ui, hydrate: Nn, createApp: Dl(Ui, Nn) }
}
function lt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function xr(e, t, n = !1) {
  const i = e.children,
    s = t.children
  if ($(i) && $(s))
    for (let r = 0; r < i.length; r++) {
      const o = i[r]
      let l = s[r]
      l.shapeFlag & 1 &&
        !l.dynamicChildren &&
        ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = s[r] = Xe(s[r])), (l.el = o.el)),
        n || xr(o, l)),
        l.type === In && (l.el = o.el)
    }
}
function jl(e) {
  const t = e.slice(),
    n = [0]
  let i, s, r, o, l
  const a = e.length
  for (i = 0; i < a; i++) {
    const c = e[i]
    if (c !== 0) {
      if (((s = n[n.length - 1]), e[s] < c)) {
        ;(t[i] = s), n.push(i)
        continue
      }
      for (r = 0, o = n.length - 1; r < o; ) (l = (r + o) >> 1), e[n[l]] < c ? (r = l + 1) : (o = l)
      c < e[n[r]] && (r > 0 && (t[i] = n[r - 1]), (n[r] = i))
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; ) (n[r] = o), (o = t[o])
  return n
}
const $l = (e) => e.__isTeleport,
  fe = Symbol(void 0),
  In = Symbol(void 0),
  Re = Symbol(void 0),
  cn = Symbol(void 0),
  Gt = []
let Be = null
function V(e = !1) {
  Gt.push((Be = e ? null : []))
}
function Vl() {
  Gt.pop(), (Be = Gt[Gt.length - 1] || null)
}
let qt = 1
function hs(e) {
  qt += e
}
function Tr(e) {
  return (e.dynamicChildren = qt > 0 ? Be || xt : null), Vl(), qt > 0 && Be && Be.push(e), e
}
function X(e, t, n, i, s, r) {
  return Tr(Q(e, t, n, i, s, r, !0))
}
function Ke(e, t, n, i, s) {
  return Tr(W(e, t, n, i, s, !0))
}
function pi(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function ut(e, t) {
  return e.type === t.type && e.key === t.key
}
const Bn = '__vInternal',
  Ar = ({ key: e }) => e ?? null,
  un = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null ? (ue(e) || he(e) || q(e) ? { i: Ae, r: e, k: t, f: !!n } : e) : null
function Q(e, t = null, n = null, i = 0, s = null, r = e === fe ? 0 : 1, o = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ar(t),
    ref: t && un(t),
    scopeId: An,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: i,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: Ae,
  }
  return (
    l ? (Di(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= ue(n) ? 8 : 16),
    qt > 0 && !o && Be && (a.patchFlag > 0 || r & 6) && a.patchFlag !== 32 && Be.push(a),
    a
  )
}
const W = ql
function ql(e, t = null, n = null, i = 0, s = null, r = !1) {
  if (((!e || e === Tl) && (e = Re), pi(e))) {
    const l = st(e, t, !0)
    return (
      n && Di(l, n),
      qt > 0 && !r && Be && (l.shapeFlag & 6 ? (Be[Be.indexOf(e)] = l) : Be.push(l)),
      (l.patchFlag |= -2),
      l
    )
  }
  if ((sa(e) && (e = e.__vccOpts), t)) {
    t = Ul(t)
    let { class: l, style: a } = t
    l && !ue(l) && (t.class = gt(l)),
      re(a) && (Zs(a) && !$(a) && (a = ge({}, a)), (t.style = yi(a)))
  }
  const o = ue(e) ? 1 : dl(e) ? 128 : $l(e) ? 64 : re(e) ? 4 : q(e) ? 2 : 0
  return Q(e, t, n, i, s, o, r, !0)
}
function Ul(e) {
  return e ? (Zs(e) || Bn in e ? ge({}, e) : e) : null
}
function st(e, t, n = !1) {
  const { props: i, ref: s, patchFlag: r, children: o } = e,
    l = t ? Kl(i || {}, t) : i
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && Ar(l),
    ref: t && t.ref ? (n && s ? ($(s) ? s.concat(un(t)) : [s, un(t)]) : un(t)) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== fe ? (r === -1 ? 16 : r | 16) : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && st(e.ssContent),
    ssFallback: e.ssFallback && st(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  }
}
function Wl(e = ' ', t = 0) {
  return W(In, null, e, t)
}
function Pn(e, t) {
  const n = W(cn, null, e)
  return (n.staticCount = t), n
}
function Hi(e = '', t = !1) {
  return t ? (V(), Ke(Re, null, e)) : W(Re, null, e)
}
function Ge(e) {
  return e == null || typeof e == 'boolean'
    ? W(Re)
    : $(e)
    ? W(fe, null, e.slice())
    : typeof e == 'object'
    ? Xe(e)
    : W(In, null, String(e))
}
function Xe(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : st(e)
}
function Di(e, t) {
  let n = 0
  const { shapeFlag: i } = e
  if (t == null) t = null
  else if ($(t)) n = 16
  else if (typeof t == 'object')
    if (i & 65) {
      const s = t.default
      s && (s._c && (s._d = !1), Di(e, s()), s._c && (s._d = !0))
      return
    } else {
      n = 32
      const s = t._
      !s && !(Bn in t)
        ? (t._ctx = Ae)
        : s === 3 && Ae && (Ae.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    q(t)
      ? ((t = { default: t, _ctx: Ae }), (n = 32))
      : ((t = String(t)), i & 64 ? ((n = 16), (t = [Wl(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Kl(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const i = e[n]
    for (const s in i)
      if (s === 'class') t.class !== i.class && (t.class = gt([t.class, i.class]))
      else if (s === 'style') t.style = yi([t.style, i.style])
      else if (bn(s)) {
        const r = t[s],
          o = i[s]
        o && r !== o && !($(r) && r.includes(o)) && (t[s] = r ? [].concat(r, o) : o)
      } else s !== '' && (t[s] = i[s])
  }
  return t
}
function De(e, t, n, i = null) {
  Ee(e, t, 7, [n, i])
}
const Ql = Cr()
let Yl = 0
function Zl(e, t, n) {
  const i = e.type,
    s = (t ? t.appContext : e.appContext) || Ql,
    r = {
      uid: Yl++,
      vnode: e,
      type: i,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Ds(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: _r(i, s),
      emitsOptions: ar(i, s),
      emit: null,
      emitted: null,
      propsDefaults: ie,
      inheritAttrs: i.inheritAttrs,
      ctx: ie,
      data: ie,
      props: ie,
      attrs: ie,
      slots: ie,
      refs: ie,
      setupState: ie,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (r.ctx = { _: r }), (r.root = t ? t.root : r), (r.emit = sl.bind(null, r)), e.ce && e.ce(r), r
  )
}
let le = null
const Xl = () => le || Ae,
  It = (e) => {
    ;(le = e), e.scope.on()
  },
  pt = () => {
    le && le.scope.off(), (le = null)
  }
function Er(e) {
  return e.vnode.shapeFlag & 4
}
let Ut = !1
function Jl(e, t = !1) {
  Ut = t
  const { props: n, children: i } = e.vnode,
    s = Er(e)
  Pl(e, n, s, t), kl(e, i)
  const r = s ? ea(e, t) : void 0
  return (Ut = !1), r
}
function ea(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = Xs(new Proxy(e.ctx, El)))
  const { setup: i } = n
  if (i) {
    const s = (e.setupContext = i.length > 1 ? na(e) : null)
    It(e), Pt()
    const r = nt(i, e, 0, [e.props, s])
    if ((Rt(), pt(), ks(r))) {
      if ((r.then(pt, pt), t))
        return r
          .then((o) => {
            gs(e, o, t)
          })
          .catch((o) => {
            xn(o, e, 0)
          })
      e.asyncDep = r
    } else gs(e, r, t)
  } else Mr(e, t)
}
function gs(e, t, n) {
  q(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : re(t) && (e.setupState = tr(t)),
    Mr(e, n)
}
let ms
function Mr(e, t, n) {
  const i = e.type
  if (!e.render) {
    if (!t && ms && !i.render) {
      const s = i.template || ki(e).template
      if (s) {
        const { isCustomElement: r, compilerOptions: o } = e.appContext.config,
          { delimiters: l, compilerOptions: a } = i,
          c = ge(ge({ isCustomElement: r, delimiters: l }, o), a)
        i.render = ms(s, c)
      }
    }
    e.render = i.render || Pe
  }
  It(e), Pt(), Ml(e), Rt(), pt()
}
function ta(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return _e(e, 'get', '$attrs'), t[n]
    },
  })
}
function na(e) {
  const t = (i) => {
    e.exposed = i || {}
  }
  let n
  return {
    get attrs() {
      return n || (n = ta(e))
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function Gi(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(tr(Xs(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in Dt) return Dt[n](e)
        },
        has(t, n) {
          return n in t || n in Dt
        },
      }))
    )
}
function ia(e, t = !0) {
  return q(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function sa(e) {
  return q(e) && '__vccOpts' in e
}
const zi = (e, t) => Xo(e, t, Ut)
function Oe(e, t, n) {
  const i = arguments.length
  return i === 2
    ? re(t) && !$(t)
      ? pi(t)
        ? W(e, null, [t])
        : W(e, t)
      : W(e, null, t)
    : (i > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : i === 3 && pi(n) && (n = [n]),
      W(e, t, n))
}
const ra = Symbol(''),
  oa = () => ln(ra),
  la = '3.2.47',
  aa = 'http://www.w3.org/2000/svg',
  dt = typeof document < 'u' ? document : null,
  vs = dt && dt.createElement('template'),
  ca = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, i) => {
      const s = t ? dt.createElementNS(aa, e) : dt.createElement(e, n ? { is: n } : void 0)
      return e === 'select' && i && i.multiple != null && s.setAttribute('multiple', i.multiple), s
    },
    createText: (e) => dt.createTextNode(e),
    createComment: (e) => dt.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => dt.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, i, s, r) {
      const o = n ? n.previousSibling : t.lastChild
      if (s && (s === r || s.nextSibling))
        for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); );
      else {
        vs.innerHTML = i ? `<svg>${e}</svg>` : e
        const l = vs.content
        if (i) {
          const a = l.firstChild
          for (; a.firstChild; ) l.appendChild(a.firstChild)
          l.removeChild(a)
        }
        t.insertBefore(l, n)
      }
      return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    },
  }
function ua(e, t, n) {
  const i = e._vtc
  i && (t = (t ? [t, ...i] : [...i]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t)
}
function da(e, t, n) {
  const i = e.style,
    s = ue(n)
  if (n && !s) {
    if (t && !ue(t)) for (const r in t) n[r] == null && hi(i, r, '')
    for (const r in n) hi(i, r, n[r])
  } else {
    const r = i.display
    s ? t !== n && (i.cssText = n) : t && e.removeAttribute('style'), '_vod' in e && (i.display = r)
  }
}
const bs = /\s*!important$/
function hi(e, t, n) {
  if ($(n)) n.forEach((i) => hi(e, t, i))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const i = fa(e, t)
    bs.test(n) ? e.setProperty(Bt(i), n.replace(bs, ''), 'important') : (e[i] = n)
  }
}
const _s = ['Webkit', 'Moz', 'ms'],
  jn = {}
function fa(e, t) {
  const n = jn[t]
  if (n) return n
  let i = Ve(t)
  if (i !== 'filter' && i in e) return (jn[t] = i)
  i = Sn(i)
  for (let s = 0; s < _s.length; s++) {
    const r = _s[s] + i
    if (r in e) return (jn[t] = r)
  }
  return t
}
const ys = 'http://www.w3.org/1999/xlink'
function pa(e, t, n, i, s) {
  if (i && t.startsWith('xlink:'))
    n == null ? e.removeAttributeNS(ys, t.slice(6, t.length)) : e.setAttributeNS(ys, t, n)
  else {
    const r = lo(t)
    n == null || (r && !Ps(n)) ? e.removeAttribute(t) : e.setAttribute(t, r ? '' : n)
  }
}
function ha(e, t, n, i, s, r, o) {
  if (t === 'innerHTML' || t === 'textContent') {
    i && o(i, s, r), (e[t] = n ?? '')
    return
  }
  if (t === 'value' && e.tagName !== 'PROGRESS' && !e.tagName.includes('-')) {
    e._value = n
    const a = n ?? ''
    ;(e.value !== a || e.tagName === 'OPTION') && (e.value = a), n == null && e.removeAttribute(t)
    return
  }
  let l = !1
  if (n === '' || n == null) {
    const a = typeof e[t]
    a === 'boolean'
      ? (n = Ps(n))
      : n == null && a === 'string'
      ? ((n = ''), (l = !0))
      : a === 'number' && ((n = 0), (l = !0))
  }
  try {
    e[t] = n
  } catch {}
  l && e.removeAttribute(t)
}
function ga(e, t, n, i) {
  e.addEventListener(t, n, i)
}
function ma(e, t, n, i) {
  e.removeEventListener(t, n, i)
}
function va(e, t, n, i, s = null) {
  const r = e._vei || (e._vei = {}),
    o = r[t]
  if (i && o) o.value = i
  else {
    const [l, a] = ba(t)
    if (i) {
      const c = (r[t] = Sa(i, s))
      ga(e, l, c, a)
    } else o && (ma(e, l, o, a), (r[t] = void 0))
  }
}
const Ss = /(?:Once|Passive|Capture)$/
function ba(e) {
  let t
  if (Ss.test(e)) {
    t = {}
    let i
    for (; (i = e.match(Ss)); )
      (e = e.slice(0, e.length - i[0].length)), (t[i[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : Bt(e.slice(2)), t]
}
let $n = 0
const _a = Promise.resolve(),
  ya = () => $n || (_a.then(() => ($n = 0)), ($n = Date.now()))
function Sa(e, t) {
  const n = (i) => {
    if (!i._vts) i._vts = Date.now()
    else if (i._vts <= n.attached) return
    Ee(wa(i, n.value), t, 5, [i])
  }
  return (n.value = e), (n.attached = ya()), n
}
function wa(e, t) {
  if ($(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((i) => (s) => !s._stopped && i && i(s))
    )
  } else return t
}
const ws = /^on[a-z]/,
  Ca = (e, t, n, i, s = !1, r, o, l, a) => {
    t === 'class'
      ? ua(e, i, s)
      : t === 'style'
      ? da(e, n, i)
      : bn(t)
      ? Si(t) || va(e, t, n, i, o)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : xa(e, t, i, s)
        )
      ? ha(e, t, i, r, o, l, a)
      : (t === 'true-value' ? (e._trueValue = i) : t === 'false-value' && (e._falseValue = i),
        pa(e, t, i, s))
  }
function xa(e, t, n, i) {
  return i
    ? !!(t === 'innerHTML' || t === 'textContent' || (t in e && ws.test(t) && q(n)))
    : t === 'spellcheck' ||
      t === 'draggable' ||
      t === 'translate' ||
      t === 'form' ||
      (t === 'list' && e.tagName === 'INPUT') ||
      (t === 'type' && e.tagName === 'TEXTAREA') ||
      (ws.test(t) && ue(n))
    ? !1
    : t in e
}
const Ta = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
}
ml.props
const Aa = ge({ patchProp: Ca }, ca)
let Cs
function Ea() {
  return Cs || (Cs = Gl(Aa))
}
const Ma = (...e) => {
  const t = Ea().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = (i) => {
      const s = La(i)
      if (!s) return
      const r = t._component
      !q(r) && !r.render && !r.template && (r.template = s.innerHTML), (s.innerHTML = '')
      const o = n(s, !1, s instanceof SVGElement)
      return (
        s instanceof Element && (s.removeAttribute('v-cloak'), s.setAttribute('data-v-app', '')), o
      )
    }),
    t
  )
}
function La(e) {
  return ue(e) ? document.querySelector(e) : e
}
const Oa = { name: 'HeaderButton' }
const ce = (e, t) => {
    const n = e.__vccOpts || e
    for (const [i, s] of t) n[i] = s
    return n
  },
  Ia = { class: 'button', type: 'button' }
function Ba(e, t) {
  return V(), X('button', Ia, 'Button')
}
const Pa = ce(Oa, [
    ['render', Ba],
    ['__scopeId', 'data-v-dfd3014c'],
  ]),
  Ra = { name: 'LogoSVG' },
  Na = {
    width: '304',
    height: '93',
    viewBox: '0 0 304 93',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  ka = Q(
    'path',
    {
      d: 'M271.792 36.8271C271.792 38.6458 271.338 40.919 270.431 43.1923C269.524 45.4656 268.163 47.2842 266.802 49.5575C265.441 51.8308 263.626 53.6494 261.812 55.0134C259.997 56.832 258.636 58.196 256.822 60.0146L253.646 62.2879V62.7426L257.275 61.8332H266.802L265.441 67.7438H244.573L245.481 64.1065C246.388 63.1972 247.749 61.8332 249.11 60.9239C250.471 59.56 251.832 58.196 253.193 56.832C254.554 55.4681 256.368 53.6494 257.729 52.2855C259.09 50.9215 260.451 49.1029 261.358 47.7389C262.265 46.3749 263.173 44.5563 264.08 43.1923C264.987 41.8283 264.987 40.4644 264.987 39.1004C264.987 37.7364 264.534 36.8271 264.08 36.3725C263.626 35.4632 262.265 35.0085 260.451 35.0085C259.544 35.0085 258.183 35.4632 256.822 35.9178C255.461 36.3725 254.554 37.2818 253.193 38.1911L251.378 33.1899C253.193 31.8259 255.007 30.9166 256.822 30.4619C258.636 30.0073 260.451 29.5526 263.173 29.5526C265.894 29.5526 267.709 30.4619 269.524 31.8259C271.338 32.2806 271.792 34.5538 271.792 36.8271Z',
      fill: '#A6ABBD',
    },
    null,
    -1,
  ),
  Fa = Q(
    'path',
    {
      d: 'M301.278 56.8317H295.381L293.113 67.7435H286.762L289.03 56.8317H273.606L274.514 52.7398L295.835 29.0977H301.278L296.742 51.3758H302.639L301.278 56.8317ZM292.205 42.7374L293.566 38.1908L290.844 42.2827L284.04 49.5572L280.864 51.8305L284.04 51.3758H289.937L292.205 42.7374Z',
      fill: '#A6ABBD',
    },
    null,
    -1,
  ),
  Ha = Q(
    'path',
    {
      d: 'M304 17.277L302.185 17.7316L296.742 19.0956L281.318 22.2782L284.04 13.1851C262.719 7.27451 240.491 19.5502 234.14 40.9191C227.335 62.288 238.676 85.0208 259.544 92.75C237.315 85.0208 224.613 60.924 231.872 37.7365C239.13 15.0037 263.173 1.81863 285.855 8.63848L288.123 0L304 17.277Z',
      fill: '#00C368',
    },
    null,
    -1,
  ),
  Da = Q(
    'path',
    {
      d: 'M9.86328 54.4756L7.66602 67H0.512695L6.68945 31.4531L19.1406 31.4775C22.9818 31.4775 26.001 32.5436 28.1982 34.6758C30.3955 36.8079 31.3558 39.5911 31.0791 43.0254C30.8187 46.5085 29.362 49.2917 26.709 51.375C24.0723 53.4583 20.7031 54.5 16.6016 54.5L9.86328 54.4756ZM10.8643 48.543L16.8213 48.5918C18.7419 48.5918 20.3369 48.0954 21.6064 47.1025C22.876 46.1097 23.6328 44.7669 23.877 43.0742C24.1211 41.3815 23.8444 40.0306 23.0469 39.0215C22.2656 38.0124 21.1019 37.4753 19.5557 37.4102L12.8174 37.3857L10.8643 48.543ZM47.29 53.9873H41.4795L39.209 67H32.0557L38.2324 31.4531L50 31.4775C53.9388 31.4775 56.9661 32.4053 59.082 34.2607C61.2142 36.1162 62.1582 38.696 61.9141 42C61.5723 46.8828 58.9681 50.2764 54.1016 52.1807L59.1064 66.6094V67H51.4893L47.29 53.9873ZM42.5049 48.0547L47.8271 48.1035C49.7152 48.071 51.2695 47.5664 52.4902 46.5898C53.7272 45.597 54.4678 44.2542 54.7119 42.5615C54.9398 40.9827 54.6875 39.7458 53.9551 38.8506C53.2227 37.9554 52.0589 37.4753 50.4639 37.4102L44.3604 37.3857L42.5049 48.0547ZM77.5391 67.4883C75.179 67.4395 73.0957 66.8861 71.2891 65.8281C69.4987 64.7539 68.0745 63.2158 67.0166 61.2139C65.9749 59.1956 65.3727 56.8844 65.21 54.2803C65.0309 51.611 65.3158 48.7627 66.0645 45.7354C66.8132 42.708 68.0176 40.0469 69.6777 37.752C71.3379 35.457 73.2829 33.7399 75.5127 32.6006C77.7588 31.4613 80.1839 30.916 82.7881 30.9648C85.1807 31.0137 87.2721 31.5833 89.0625 32.6738C90.8529 33.748 92.2607 35.3024 93.2861 37.3369C94.3115 39.3551 94.8975 41.6501 95.0439 44.2217C95.2067 47.0863 94.8975 50.0322 94.1162 53.0596C93.335 56.0869 92.1224 58.7074 90.4785 60.9209C88.8346 63.1344 86.9059 64.7946 84.6924 65.9014C82.4951 67.0081 80.1107 67.5371 77.5391 67.4883ZM87.6709 48.25L87.8662 45.9307C88.029 43.0335 87.6383 40.8363 86.6943 39.3389C85.7666 37.8415 84.3506 37.0602 82.4463 36.9951C79.4678 36.8975 77.0996 38.2158 75.3418 40.9502C73.6003 43.6846 72.6156 47.5094 72.3877 52.4248C72.2249 55.3057 72.6074 57.5273 73.5352 59.0898C74.4629 60.6361 75.9033 61.4417 77.8564 61.5068C80.4118 61.6208 82.5277 60.6279 84.2041 58.5283C85.8805 56.4124 86.9792 53.4258 87.5 49.5684L87.6709 48.25ZM96.9971 67L103.174 31.4531L113.379 31.4775C115.771 31.5264 117.92 32.0716 119.824 33.1133C121.745 34.1387 123.299 35.6198 124.487 37.5566C125.675 39.4935 126.392 41.6745 126.636 44.0996C126.766 45.5156 126.75 46.9642 126.587 48.4453L126.416 49.7393C125.7 54.9476 123.649 59.1305 120.264 62.2881C116.895 65.4294 112.801 67 107.983 67H96.9971ZM109.302 37.3857L105.176 61.1162L108.154 61.1406C111.442 61.1406 114.079 59.9362 116.064 57.5273C118.066 55.1185 119.214 51.4808 119.507 46.6143L119.556 45.833C119.604 43.1475 119.092 41.0885 118.018 39.6562C116.943 38.224 115.34 37.4753 113.208 37.4102L109.302 37.3857ZM161.206 31.4531L157.202 54.8906C156.649 58.8132 155.021 61.9137 152.319 64.1924C149.618 66.471 146.265 67.5778 142.261 67.5127C139.754 67.4639 137.573 66.9186 135.718 65.877C133.879 64.819 132.52 63.3379 131.641 61.4336C130.762 59.513 130.461 57.3402 130.737 54.915L134.717 31.4531H141.87L137.891 54.9395C137.777 55.8509 137.769 56.7054 137.866 57.5029C138.192 60.1396 139.762 61.5068 142.578 61.6045C144.596 61.6696 146.248 61.1162 147.534 59.9443C148.82 58.7725 149.65 57.096 150.024 54.915L154.028 31.4531H161.206ZM189.941 55.1348C189.665 57.5924 188.826 59.7734 187.427 61.6777C186.027 63.5658 184.204 65.0225 181.958 66.0479C179.712 67.057 177.287 67.5371 174.683 67.4883C172.339 67.4395 170.296 66.9023 168.555 65.877C166.813 64.8353 165.438 63.3379 164.429 61.3848C163.436 59.4154 162.874 57.153 162.744 54.5977C162.63 52.5957 162.834 50.1055 163.354 47.127C163.892 44.1484 164.836 41.5036 166.187 39.1924C167.554 36.8812 169.173 35.0501 171.045 33.6992C173.682 31.8112 176.693 30.8997 180.078 30.9648C183.757 31.0299 186.67 32.1693 188.818 34.3828C190.983 36.5801 192.171 39.64 192.383 43.5625L185.254 43.5381C185.254 41.292 184.806 39.6481 183.911 38.6064C183.016 37.5648 181.624 37.0114 179.736 36.9463C177.295 36.8649 175.285 37.7357 173.706 39.5586C172.144 41.3815 171.094 44.0426 170.557 47.542C170.036 50.9437 169.808 53.4909 169.873 55.1836C169.954 57.332 170.435 58.9189 171.313 59.9443C172.192 60.9535 173.421 61.4824 175 61.5312C177.181 61.6126 178.923 61.0999 180.225 59.9932C181.543 58.8701 182.414 57.2669 182.837 55.1836L189.941 55.1348ZM223.34 37.3857H212.793L207.666 67H200.513L205.64 37.3857H195.215L196.265 31.4531H224.39L223.34 37.3857Z',
      fill: '#A6ABBD',
    },
    null,
    -1,
  ),
  Ga = [ka, Fa, Ha, Da]
function za(e, t) {
  return V(), X('svg', Na, Ga)
}
const ja = ce(Ra, [['render', za]]),
  $a = {
    name: 'HeaderNavItem',
    props: { content: { type: Object, required: !0 } },
    computed: {
      active() {
        return this.$store.getters.getActiveNav
      },
    },
    methods: {
      clickHandler() {
        this.$store.commit('setActiveNav', this.$props.content.id)
      },
    },
  }
function Va(e, t) {
  return (
    V(),
    X(
      'button',
      {
        class: gt(['item', { active: e.active === e.content.id }]),
        type: 'button',
        onClick: t[0] || (t[0] = (...n) => e.clickHandler && e.clickHandler(...n)),
      },
      $e(e.content.text),
      3,
    )
  )
}
const qa = ce($a, [
    ['render', Va],
    ['__scopeId', 'data-v-8ff70660'],
  ]),
  Ua = {
    name: 'HeaderNav',
    computed: {
      nav() {
        return this.$store.getters.getNav
      },
    },
    components: { HeaderNavItem: qa, LogoSVG: ja },
  }
const Wa = { class: 'nav' }
function Ka(e, t) {
  const n = se('LogoSVG'),
    i = se('HeaderNavItem')
  return (
    V(),
    X('div', Wa, [
      W(n, { class: 'logo' }),
      (V(!0),
      X(
        fe,
        null,
        Lt(e.nav, (s) => (V(), Ke(i, { key: s.id, content: s }, null, 8, ['content']))),
        128,
      )),
    ])
  )
}
const Qa = ce(Ua, [
    ['render', Ka],
    ['__scopeId', 'data-v-e89d020b'],
  ]),
  Ya = { name: 'Header', components: { HeaderNav: Qa, HeaderButton: Pa } }
const Za = { class: 'header' }
function Xa(e, t) {
  const n = se('HeaderNav'),
    i = se('HeaderButton')
  return V(), X('header', Za, [W(n), W(i)])
}
const Ja = ce(Ya, [
    ['render', Xa],
    ['__scopeId', 'data-v-17b083da'],
  ]),
  ec = {
    name: 'CenterItemSVG',
    props: {
      type: { type: String, validator: (e) => ['board', 'headphones', 'box', 'pult'].includes(e) },
    },
  },
  tc = {
    key: 0,
    width: '73',
    height: '88',
    viewBox: '0 0 73 88',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    stroke: '#2E3A59',
  },
  nc = Pn(
    '<g filter="url(#filter0_d_1_239)"><rect x="5.5" y="5" width="54" height="70" rx="3" stroke="inherit" stroke-width="2"></rect><path d="M13.5 5H51.5V10C51.5 11.6569 50.1569 13 48.5 13H16.5C14.8431 13 13.5 11.6569 13.5 10V5Z" stroke="inherit" stroke-width="2"></path><g filter="url(#filter1_d_1_239)"><path d="M13.5 61C13.5 59.3431 14.8431 58 16.5 58H48.5C50.1569 58 51.5 59.3431 51.5 61V63C51.5 64.6569 50.1569 66 48.5 66H16.5C14.8431 66 13.5 64.6569 13.5 63V61Z" stroke="#00C368" stroke-width="2"></path></g></g><defs><filter id="filter0_d_1_239" x="0.5" y="0" width="72" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="4" dy="4"></feOffset><feGaussianBlur stdDeviation="4"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.65098 0 0 0 0 0.670588 0 0 0 0 0.741176 0 0 0 1 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_239"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_239" result="shape"></feBlend></filter><filter id="filter1_d_1_239" x="10.5" y="55" width="48" height="18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="2" dy="2"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.764706 0 0 0 0 0.407843 0 0 0 0.4 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_239"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_239" result="shape"></feBlend></filter></defs>',
    2,
  ),
  ic = [nc],
  sc = {
    key: 1,
    width: '81',
    height: '94',
    viewBox: '0 0 81 94',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    stroke: '#2E3A59',
  },
  rc = Pn(
    '<g filter="url(#filter0_d_1_257)"><circle cx="31.69" cy="73.4106" r="7" transform="rotate(-15 31.69 73.4106)" stroke="inherit" stroke-width="2"></circle><rect x="30.9965" y="32.1854" width="30" height="30" transform="rotate(-15 30.9965 32.1854)" stroke="inherit" stroke-width="2"></rect><g filter="url(#filter1_d_1_257)"><rect x="43.1053" y="31.0114" width="6" height="8" transform="rotate(-15 43.1053 31.0114)" stroke="#00C368" stroke-width="2"></rect></g></g><defs><filter id="filter0_d_1_257" x="19.688" y="19.196" width="61.2756" height="74.2165" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="4" dy="4"></feOffset><feGaussianBlur stdDeviation="4"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.65098 0 0 0 0 0.670588 0 0 0 0 0.741176 0 0 0 1 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_257"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_257" result="shape"></feBlend></filter><filter id="filter1_d_1_257" x="39.8805" y="26.2338" width="18.3156" height="19.7298" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="2" dy="2"></feOffset><feGaussianBlur stdDeviation="2"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.764706 0 0 0 0 0.407843 0 0 0 0.4 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_257"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_257" result="shape"></feBlend></filter></defs>',
    2,
  ),
  oc = [rc],
  lc = {
    key: 2,
    width: '80',
    height: '88',
    viewBox: '0 0 80 88',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    stroke: '#2E3A59',
  },
  ac = Pn(
    '<g filter="url(#filter0_d_1_248)"><path d="M64 43.5V29C64 15.7452 53.2548 5 40 5H32C18.7452 5 8 15.7452 8 29V43.5" stroke="inherit" stroke-width="2"></path><path d="M13 35C13 22.2975 23.2975 12 36 12C48.7025 12 59 22.2975 59 35V43C59 55.7025 48.7025 66 36 66C23.2975 66 13 55.7025 13 43V35Z" stroke="inherit" stroke-width="2"></path><path d="M33.5 74.5L40 74.5C53.2548 74.5 64 63.7548 64 50.5L64 40" stroke="inherit" stroke-width="2"></path><rect x="5" y="36" width="6" height="14" rx="3" stroke="inherit" stroke-width="2"></rect><rect x="61" y="36" width="6" height="14" rx="3" stroke="inherit" stroke-width="2"></rect></g><defs><filter id="filter0_d_1_248" x="0" y="0" width="80" height="87.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="4" dy="4"></feOffset><feGaussianBlur stdDeviation="4"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.65098 0 0 0 0 0.670588 0 0 0 0 0.741176 0 0 0 1 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_248"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_248" result="shape"></feBlend></filter></defs>',
    2,
  ),
  cc = [ac],
  uc = {
    key: 3,
    width: '109',
    height: '99',
    viewBox: '0 0 109 99',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    stroke: '#2E3A59',
  },
  dc = Pn(
    '<g filter="url(#filter0_d_1_284)"><path d="M15.1607 61.5422C9.30285 55.6844 9.30284 46.1869 15.1607 40.329L40.7138 14.7759C46.5717 8.91804 56.0692 8.91804 61.927 14.7759L66.3751 19.2239C72.7391 25.588 72.1152 36.1227 65.2298 42.0046C61.3795 45.2936 57.381 48.849 54.1861 52.0091C50.446 55.7086 46.2117 60.4447 42.3971 64.8965C36.5133 71.7631 25.9905 72.372 19.6345 66.016L15.1607 61.5422Z" stroke="inherit" stroke-width="2"></path><path d="M13.1361 59.2873C7.76622 53.9173 7.26444 45.4045 12.1268 39.6211C16.509 34.4089 21.7879 28.3753 26.3021 23.9101C30.2798 19.9757 35.5538 15.3896 40.2347 11.4712C46.0198 6.62843 54.5204 7.13888 59.8823 12.5008L60.2826 12.9011C66.6467 19.2651 66.0228 29.7998 59.1373 35.6817C55.287 38.9708 51.2885 42.5261 48.0937 45.6863C44.3535 49.3857 40.1192 54.1218 36.3046 58.5736C30.4209 65.4402 19.898 66.0491 13.542 59.6931L13.1361 59.2873Z" stroke="inherit" stroke-width="2"></path><rect x="34.1522" y="26.7675" width="15.6653" height="15.6653" rx="7.83265" transform="rotate(-45 34.1522 26.7675)" stroke="inherit" stroke-width="2"></rect><rect x="69.5" y="63.9998" width="26" height="22" rx="1" stroke="inherit" stroke-width="2"></rect><path d="M71.5 40.9994C78.5 42.9994 82.5 45.9998 82.5002 56.999" stroke="inherit" stroke-width="2"></path></g><defs><filter id="filter0_d_1_284" x="3.77332" y="3.1373" width="104.727" height="95.8625" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dx="4" dy="4"></feOffset><feGaussianBlur stdDeviation="4"></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.65098 0 0 0 0 0.670588 0 0 0 0 0.741176 0 0 0 1 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_284"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_284" result="shape"></feBlend></filter></defs>',
    2,
  ),
  fc = [dc]
function pc(e, t) {
  return e.type === 'board'
    ? (V(), X('svg', tc, ic))
    : e.$props.type === 'box'
    ? (V(), X('svg', sc, oc))
    : e.$props.type === 'headphones'
    ? (V(), X('svg', lc, cc))
    : e.type === 'pult'
    ? (V(), X('svg', uc, fc))
    : Hi('', !0)
}
const hc = ce(ec, [['render', pc]]),
  gc = {
    name: 'MenuCenterItem',
    props: { content: { type: Object, required: !0 } },
    components: { CenterItemSVG: hc },
  }
const mc = { href: '/', class: 'item' },
  vc = { class: 'text' }
function bc(e, t) {
  const n = se('CenterItemSVG')
  return (
    V(),
    X('a', mc, [
      W(n, { class: 'svg', type: e.$props.content.type }, null, 8, ['type']),
      Q('p', vc, $e(e.$props.content.text), 1),
    ])
  )
}
const Lr = ce(gc, [
  ['render', bc],
  ['__scopeId', 'data-v-dfd40f61'],
])
function xs(e) {
  return e !== null && typeof e == 'object' && 'constructor' in e && e.constructor === Object
}
function ji(e = {}, t = {}) {
  Object.keys(t).forEach((n) => {
    typeof e[n] > 'u'
      ? (e[n] = t[n])
      : xs(t[n]) && xs(e[n]) && Object.keys(t[n]).length > 0 && ji(e[n], t[n])
  })
}
const Or = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: '' },
  querySelector() {
    return null
  },
  querySelectorAll() {
    return []
  },
  getElementById() {
    return null
  },
  createEvent() {
    return { initEvent() {} }
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return []
      },
    }
  },
  createElementNS() {
    return {}
  },
  importNode() {
    return null
  },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: '',
  },
}
function mt() {
  const e = typeof document < 'u' ? document : {}
  return ji(e, Or), e
}
const _c = {
  document: Or,
  navigator: { userAgent: '' },
  location: {
    hash: '',
    host: '',
    hostname: '',
    href: '',
    origin: '',
    pathname: '',
    protocol: '',
    search: '',
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return ''
      },
    }
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {}
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > 'u' ? (e(), null) : setTimeout(e, 0)
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > 'u' || clearTimeout(e)
  },
}
function Ce() {
  const e = typeof window < 'u' ? window : {}
  return ji(e, _c), e
}
function yc(e) {
  const t = e
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null
    } catch {}
    try {
      delete t[n]
    } catch {}
  })
}
function gi(e, t = 0) {
  return setTimeout(e, t)
}
function Wt() {
  return Date.now()
}
function Sc(e) {
  const t = Ce()
  let n
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  )
}
function wc(e, t = 'x') {
  const n = Ce()
  let i, s, r
  const o = Sc(e)
  return (
    n.WebKitCSSMatrix
      ? ((s = o.transform || o.webkitTransform),
        s.split(',').length > 6 &&
          (s = s
            .split(', ')
            .map((l) => l.replace(',', '.'))
            .join(', ')),
        (r = new n.WebKitCSSMatrix(s === 'none' ? '' : s)))
      : ((r =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
        (i = r.toString().split(','))),
    t === 'x' &&
      (n.WebKitCSSMatrix
        ? (s = r.m41)
        : i.length === 16
        ? (s = parseFloat(i[12]))
        : (s = parseFloat(i[4]))),
    t === 'y' &&
      (n.WebKitCSSMatrix
        ? (s = r.m42)
        : i.length === 16
        ? (s = parseFloat(i[13]))
        : (s = parseFloat(i[5]))),
    s || 0
  )
}
function sn(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === 'Object'
  )
}
function Cc(e) {
  return typeof window < 'u' && typeof window.HTMLElement < 'u'
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11)
}
function we(...e) {
  const t = Object(e[0]),
    n = ['__proto__', 'constructor', 'prototype']
  for (let i = 1; i < e.length; i += 1) {
    const s = e[i]
    if (s != null && !Cc(s)) {
      const r = Object.keys(Object(s)).filter((o) => n.indexOf(o) < 0)
      for (let o = 0, l = r.length; o < l; o += 1) {
        const a = r[o],
          c = Object.getOwnPropertyDescriptor(s, a)
        c !== void 0 &&
          c.enumerable &&
          (sn(t[a]) && sn(s[a])
            ? s[a].__swiper__
              ? (t[a] = s[a])
              : we(t[a], s[a])
            : !sn(t[a]) && sn(s[a])
            ? ((t[a] = {}), s[a].__swiper__ ? (t[a] = s[a]) : we(t[a], s[a]))
            : (t[a] = s[a]))
      }
    }
  }
  return t
}
function rn(e, t, n) {
  e.style.setProperty(t, n)
}
function Ir({ swiper: e, targetPosition: t, side: n }) {
  const i = Ce(),
    s = -e.translate
  let r = null,
    o
  const l = e.params.speed
  ;(e.wrapperEl.style.scrollSnapType = 'none'), i.cancelAnimationFrame(e.cssModeFrameID)
  const a = t > s ? 'next' : 'prev',
    c = (d, h) => (a === 'next' && d >= h) || (a === 'prev' && d <= h),
    u = () => {
      ;(o = new Date().getTime()), r === null && (r = o)
      const d = Math.max(Math.min((o - r) / l, 1), 0),
        h = 0.5 - Math.cos(d * Math.PI) / 2
      let m = s + h * (t - s)
      if ((c(m, t) && (m = t), e.wrapperEl.scrollTo({ [n]: m }), c(m, t))) {
        ;(e.wrapperEl.style.overflow = 'hidden'),
          (e.wrapperEl.style.scrollSnapType = ''),
          setTimeout(() => {
            ;(e.wrapperEl.style.overflow = ''), e.wrapperEl.scrollTo({ [n]: m })
          }),
          i.cancelAnimationFrame(e.cssModeFrameID)
        return
      }
      e.cssModeFrameID = i.requestAnimationFrame(u)
    }
  u()
}
function je(e, t = '') {
  return [...e.children].filter((n) => n.matches(t))
}
function Br(e, t = []) {
  const n = document.createElement(e)
  return n.classList.add(...(Array.isArray(t) ? t : [t])), n
}
function xc(e, t) {
  const n = []
  for (; e.previousElementSibling; ) {
    const i = e.previousElementSibling
    t ? i.matches(t) && n.push(i) : n.push(i), (e = i)
  }
  return n
}
function Tc(e, t) {
  const n = []
  for (; e.nextElementSibling; ) {
    const i = e.nextElementSibling
    t ? i.matches(t) && n.push(i) : n.push(i), (e = i)
  }
  return n
}
function Je(e, t) {
  return Ce().getComputedStyle(e, null).getPropertyValue(t)
}
function mn(e) {
  let t = e,
    n
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; ) t.nodeType === 1 && (n += 1)
    return n
  }
}
function Pr(e, t) {
  const n = []
  let i = e.parentElement
  for (; i; ) t ? i.matches(t) && n.push(i) : n.push(i), (i = i.parentElement)
  return n
}
function mi(e, t, n) {
  const i = Ce()
  return n
    ? e[t === 'width' ? 'offsetWidth' : 'offsetHeight'] +
        parseFloat(
          i
            .getComputedStyle(e, null)
            .getPropertyValue(t === 'width' ? 'margin-right' : 'margin-top'),
        ) +
        parseFloat(
          i
            .getComputedStyle(e, null)
            .getPropertyValue(t === 'width' ? 'margin-left' : 'margin-bottom'),
        )
    : e.offsetWidth
}
let Vn
function Ac() {
  const e = Ce(),
    t = mt()
  return {
    smoothScroll: t.documentElement && 'scrollBehavior' in t.documentElement.style,
    touch: !!('ontouchstart' in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
  }
}
function Rr() {
  return Vn || (Vn = Ac()), Vn
}
let qn
function Ec({ userAgent: e } = {}) {
  const t = Rr(),
    n = Ce(),
    i = n.navigator.platform,
    s = e || n.navigator.userAgent,
    r = { ios: !1, android: !1 },
    o = n.screen.width,
    l = n.screen.height,
    a = s.match(/(Android);?[\s\/]+([\d.]+)?/)
  let c = s.match(/(iPad).*OS\s([\d_]+)/)
  const u = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    d = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    h = i === 'Win32'
  let m = i === 'MacIntel'
  const y = [
    '1024x1366',
    '1366x1024',
    '834x1194',
    '1194x834',
    '834x1112',
    '1112x834',
    '768x1024',
    '1024x768',
    '820x1180',
    '1180x820',
    '810x1080',
    '1080x810',
  ]
  return (
    !c &&
      m &&
      t.touch &&
      y.indexOf(`${o}x${l}`) >= 0 &&
      ((c = s.match(/(Version)\/([\d.]+)/)), c || (c = [0, 1, '13_0_0']), (m = !1)),
    a && !h && ((r.os = 'android'), (r.android = !0)),
    (c || d || u) && ((r.os = 'ios'), (r.ios = !0)),
    r
  )
}
function Mc(e = {}) {
  return qn || (qn = Ec(e)), qn
}
let Un
function Lc() {
  const e = Ce()
  let t = !1
  function n() {
    const i = e.navigator.userAgent.toLowerCase()
    return i.indexOf('safari') >= 0 && i.indexOf('chrome') < 0 && i.indexOf('android') < 0
  }
  if (n()) {
    const i = String(e.navigator.userAgent)
    if (i.includes('Version/')) {
      const [s, r] = i
        .split('Version/')[1]
        .split(' ')[0]
        .split('.')
        .map((o) => Number(o))
      t = s < 16 || (s === 16 && r < 2)
    }
  }
  return {
    isSafari: t || n(),
    needPerspectiveFix: t,
    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
  }
}
function Oc() {
  return Un || (Un = Lc()), Un
}
function Ic({ swiper: e, on: t, emit: n }) {
  const i = Ce()
  let s = null,
    r = null
  const o = () => {
      !e || e.destroyed || !e.initialized || (n('beforeResize'), n('resize'))
    },
    l = () => {
      !e ||
        e.destroyed ||
        !e.initialized ||
        ((s = new ResizeObserver((u) => {
          r = i.requestAnimationFrame(() => {
            const { width: d, height: h } = e
            let m = d,
              y = h
            u.forEach(({ contentBoxSize: v, contentRect: T, target: p }) => {
              ;(p && p !== e.el) ||
                ((m = T ? T.width : (v[0] || v).inlineSize),
                (y = T ? T.height : (v[0] || v).blockSize))
            }),
              (m !== d || y !== h) && o()
          })
        })),
        s.observe(e.el))
    },
    a = () => {
      r && i.cancelAnimationFrame(r), s && s.unobserve && e.el && (s.unobserve(e.el), (s = null))
    },
    c = () => {
      !e || e.destroyed || !e.initialized || n('orientationchange')
    }
  t('init', () => {
    if (e.params.resizeObserver && typeof i.ResizeObserver < 'u') {
      l()
      return
    }
    i.addEventListener('resize', o), i.addEventListener('orientationchange', c)
  }),
    t('destroy', () => {
      a(), i.removeEventListener('resize', o), i.removeEventListener('orientationchange', c)
    })
}
function Bc({ swiper: e, extendParams: t, on: n, emit: i }) {
  const s = [],
    r = Ce(),
    o = (c, u = {}) => {
      const d = r.MutationObserver || r.WebkitMutationObserver,
        h = new d((m) => {
          if (e.__preventObserver__) return
          if (m.length === 1) {
            i('observerUpdate', m[0])
            return
          }
          const y = function () {
            i('observerUpdate', m[0])
          }
          r.requestAnimationFrame ? r.requestAnimationFrame(y) : r.setTimeout(y, 0)
        })
      h.observe(c, {
        attributes: typeof u.attributes > 'u' ? !0 : u.attributes,
        childList: typeof u.childList > 'u' ? !0 : u.childList,
        characterData: typeof u.characterData > 'u' ? !0 : u.characterData,
      }),
        s.push(h)
    },
    l = () => {
      if (e.params.observer) {
        if (e.params.observeParents) {
          const c = Pr(e.el)
          for (let u = 0; u < c.length; u += 1) o(c[u])
        }
        o(e.el, { childList: e.params.observeSlideChildren }), o(e.wrapperEl, { attributes: !1 })
      }
    },
    a = () => {
      s.forEach((c) => {
        c.disconnect()
      }),
        s.splice(0, s.length)
    }
  t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }), n('init', l), n('destroy', a)
}
const Pc = {
  on(e, t, n) {
    const i = this
    if (!i.eventsListeners || i.destroyed || typeof t != 'function') return i
    const s = n ? 'unshift' : 'push'
    return (
      e.split(' ').forEach((r) => {
        i.eventsListeners[r] || (i.eventsListeners[r] = []), i.eventsListeners[r][s](t)
      }),
      i
    )
  },
  once(e, t, n) {
    const i = this
    if (!i.eventsListeners || i.destroyed || typeof t != 'function') return i
    function s(...r) {
      i.off(e, s), s.__emitterProxy && delete s.__emitterProxy, t.apply(i, r)
    }
    return (s.__emitterProxy = t), i.on(e, s, n)
  },
  onAny(e, t) {
    const n = this
    if (!n.eventsListeners || n.destroyed || typeof e != 'function') return n
    const i = t ? 'unshift' : 'push'
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[i](e), n
  },
  offAny(e) {
    const t = this
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t
    const n = t.eventsAnyListeners.indexOf(e)
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
  },
  off(e, t) {
    const n = this
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(' ').forEach((i) => {
          typeof t > 'u'
            ? (n.eventsListeners[i] = [])
            : n.eventsListeners[i] &&
              n.eventsListeners[i].forEach((s, r) => {
                ;(s === t || (s.__emitterProxy && s.__emitterProxy === t)) &&
                  n.eventsListeners[i].splice(r, 1)
              })
        }),
      n
    )
  },
  emit(...e) {
    const t = this
    if (!t.eventsListeners || t.destroyed || !t.eventsListeners) return t
    let n, i, s
    return (
      typeof e[0] == 'string' || Array.isArray(e[0])
        ? ((n = e[0]), (i = e.slice(1, e.length)), (s = t))
        : ((n = e[0].events), (i = e[0].data), (s = e[0].context || t)),
      i.unshift(s),
      (Array.isArray(n) ? n : n.split(' ')).forEach((o) => {
        t.eventsAnyListeners &&
          t.eventsAnyListeners.length &&
          t.eventsAnyListeners.forEach((l) => {
            l.apply(s, [o, ...i])
          }),
          t.eventsListeners &&
            t.eventsListeners[o] &&
            t.eventsListeners[o].forEach((l) => {
              l.apply(s, i)
            })
      }),
      t
    )
  },
}
function Rc() {
  const e = this
  let t, n
  const i = e.el
  typeof e.params.width < 'u' && e.params.width !== null
    ? (t = e.params.width)
    : (t = i.clientWidth),
    typeof e.params.height < 'u' && e.params.height !== null
      ? (n = e.params.height)
      : (n = i.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t - parseInt(Je(i, 'padding-left') || 0, 10) - parseInt(Je(i, 'padding-right') || 0, 10)),
      (n =
        n - parseInt(Je(i, 'padding-top') || 0, 10) - parseInt(Je(i, 'padding-bottom') || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, { width: t, height: n, size: e.isHorizontal() ? t : n }))
}
function Nc() {
  const e = this
  function t(M) {
    return e.isHorizontal()
      ? M
      : {
          width: 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          marginRight: 'marginBottom',
        }[M]
  }
  function n(M, N) {
    return parseFloat(M.getPropertyValue(t(N)) || 0)
  }
  const i = e.params,
    { wrapperEl: s, slidesEl: r, size: o, rtlTranslate: l, wrongRTL: a } = e,
    c = e.virtual && i.virtual.enabled,
    u = c ? e.virtual.slides.length : e.slides.length,
    d = je(r, `.${e.params.slideClass}, swiper-slide`),
    h = c ? e.virtual.slides.length : d.length
  let m = []
  const y = [],
    v = []
  let T = i.slidesOffsetBefore
  typeof T == 'function' && (T = i.slidesOffsetBefore.call(e))
  let p = i.slidesOffsetAfter
  typeof p == 'function' && (p = i.slidesOffsetAfter.call(e))
  const _ = e.snapGrid.length,
    b = e.slidesGrid.length
  let A = i.spaceBetween,
    P = -T,
    k = 0,
    z = 0
  if (typeof o > 'u') return
  typeof A == 'string' && A.indexOf('%') >= 0 && (A = (parseFloat(A.replace('%', '')) / 100) * o),
    (e.virtualSize = -A),
    d.forEach((M) => {
      l ? (M.style.marginLeft = '') : (M.style.marginRight = ''),
        (M.style.marginBottom = ''),
        (M.style.marginTop = '')
    }),
    i.centeredSlides &&
      i.cssMode &&
      (rn(s, '--swiper-centered-offset-before', ''), rn(s, '--swiper-centered-offset-after', ''))
  const w = i.grid && i.grid.rows > 1 && e.grid
  w && e.grid.initSlides(h)
  let B
  const U =
    i.slidesPerView === 'auto' &&
    i.breakpoints &&
    Object.keys(i.breakpoints).filter((M) => typeof i.breakpoints[M].slidesPerView < 'u').length > 0
  for (let M = 0; M < h; M += 1) {
    B = 0
    let N
    if (
      (d[M] && (N = d[M]),
      w && e.grid.updateSlide(M, N, h, t),
      !(d[M] && Je(N, 'display') === 'none'))
    ) {
      if (i.slidesPerView === 'auto') {
        U && (d[M].style[t('width')] = '')
        const G = getComputedStyle(N),
          oe = N.style.transform,
          bt = N.style.webkitTransform
        if (
          (oe && (N.style.transform = 'none'),
          bt && (N.style.webkitTransform = 'none'),
          i.roundLengths)
        )
          B = e.isHorizontal() ? mi(N, 'width', !0) : mi(N, 'height', !0)
        else {
          const de = n(G, 'width'),
            ne = n(G, 'padding-left'),
            J = n(G, 'padding-right'),
            ke = n(G, 'margin-left'),
            rt = n(G, 'margin-right'),
            Fe = G.getPropertyValue('box-sizing')
          if (Fe && Fe === 'border-box') B = de + ke + rt
          else {
            const { clientWidth: xe, offsetWidth: Qt } = N
            B = de + ne + J + ke + rt + (Qt - xe)
          }
        }
        oe && (N.style.transform = oe),
          bt && (N.style.webkitTransform = bt),
          i.roundLengths && (B = Math.floor(B))
      } else
        (B = (o - (i.slidesPerView - 1) * A) / i.slidesPerView),
          i.roundLengths && (B = Math.floor(B)),
          d[M] && (d[M].style[t('width')] = `${B}px`)
      d[M] && (d[M].swiperSlideSize = B),
        v.push(B),
        i.centeredSlides
          ? ((P = P + B / 2 + k / 2 + A),
            k === 0 && M !== 0 && (P = P - o / 2 - A),
            M === 0 && (P = P - o / 2 - A),
            Math.abs(P) < 1 / 1e3 && (P = 0),
            i.roundLengths && (P = Math.floor(P)),
            z % i.slidesPerGroup === 0 && m.push(P),
            y.push(P))
          : (i.roundLengths && (P = Math.floor(P)),
            (z - Math.min(e.params.slidesPerGroupSkip, z)) % e.params.slidesPerGroup === 0 &&
              m.push(P),
            y.push(P),
            (P = P + B + A)),
        (e.virtualSize += B + A),
        (k = B),
        (z += 1)
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, o) + p),
    l &&
      a &&
      (i.effect === 'slide' || i.effect === 'coverflow') &&
      (s.style.width = `${e.virtualSize + i.spaceBetween}px`),
    i.setWrapperSize && (s.style[t('width')] = `${e.virtualSize + i.spaceBetween}px`),
    w && e.grid.updateWrapperSize(B, m, t),
    !i.centeredSlides)
  ) {
    const M = []
    for (let N = 0; N < m.length; N += 1) {
      let G = m[N]
      i.roundLengths && (G = Math.floor(G)), m[N] <= e.virtualSize - o && M.push(G)
    }
    ;(m = M),
      Math.floor(e.virtualSize - o) - Math.floor(m[m.length - 1]) > 1 && m.push(e.virtualSize - o)
  }
  if (c && i.loop) {
    const M = v[0] + A
    if (i.slidesPerGroup > 1) {
      const N = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / i.slidesPerGroup),
        G = M * i.slidesPerGroup
      for (let oe = 0; oe < N; oe += 1) m.push(m[m.length - 1] + G)
    }
    for (let N = 0; N < e.virtual.slidesBefore + e.virtual.slidesAfter; N += 1)
      i.slidesPerGroup === 1 && m.push(m[m.length - 1] + M),
        y.push(y[y.length - 1] + M),
        (e.virtualSize += M)
  }
  if ((m.length === 0 && (m = [0]), i.spaceBetween !== 0)) {
    const M = e.isHorizontal() && l ? 'marginLeft' : t('marginRight')
    d.filter((N, G) => (!i.cssMode || i.loop ? !0 : G !== d.length - 1)).forEach((N) => {
      N.style[M] = `${A}px`
    })
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let M = 0
    v.forEach((G) => {
      M += G + (i.spaceBetween ? i.spaceBetween : 0)
    }),
      (M -= i.spaceBetween)
    const N = M - o
    m = m.map((G) => (G < 0 ? -T : G > N ? N + p : G))
  }
  if (i.centerInsufficientSlides) {
    let M = 0
    if (
      (v.forEach((N) => {
        M += N + (i.spaceBetween ? i.spaceBetween : 0)
      }),
      (M -= i.spaceBetween),
      M < o)
    ) {
      const N = (o - M) / 2
      m.forEach((G, oe) => {
        m[oe] = G - N
      }),
        y.forEach((G, oe) => {
          y[oe] = G + N
        })
    }
  }
  if (
    (Object.assign(e, { slides: d, snapGrid: m, slidesGrid: y, slidesSizesGrid: v }),
    i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
  ) {
    rn(s, '--swiper-centered-offset-before', `${-m[0]}px`),
      rn(s, '--swiper-centered-offset-after', `${e.size / 2 - v[v.length - 1] / 2}px`)
    const M = -e.snapGrid[0],
      N = -e.slidesGrid[0]
    ;(e.snapGrid = e.snapGrid.map((G) => G + M)), (e.slidesGrid = e.slidesGrid.map((G) => G + N))
  }
  if (
    (h !== u && e.emit('slidesLengthChange'),
    m.length !== _ && (e.params.watchOverflow && e.checkOverflow(), e.emit('snapGridLengthChange')),
    y.length !== b && e.emit('slidesGridLengthChange'),
    i.watchSlidesProgress && e.updateSlidesOffset(),
    !c && !i.cssMode && (i.effect === 'slide' || i.effect === 'fade'))
  ) {
    const M = `${i.containerModifierClass}backface-hidden`,
      N = e.el.classList.contains(M)
    h <= i.maxBackfaceHiddenSlides ? N || e.el.classList.add(M) : N && e.el.classList.remove(M)
  }
}
function kc(e) {
  const t = this,
    n = [],
    i = t.virtual && t.params.virtual.enabled
  let s = 0,
    r
  typeof e == 'number' ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed)
  const o = (l) => (i ? t.getSlideIndexByData(l) : t.slides[l])
  if (t.params.slidesPerView !== 'auto' && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((l) => {
        n.push(l)
      })
    else
      for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
        const l = t.activeIndex + r
        if (l > t.slides.length && !i) break
        n.push(o(l))
      }
  else n.push(o(t.activeIndex))
  for (r = 0; r < n.length; r += 1)
    if (typeof n[r] < 'u') {
      const l = n[r].offsetHeight
      s = l > s ? l : s
    }
  ;(s || s === 0) && (t.wrapperEl.style.height = `${s}px`)
}
function Fc() {
  const e = this,
    t = e.slides,
    n = e.isElement ? (e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop) : 0
  for (let i = 0; i < t.length; i += 1)
    t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - n
}
function Hc(e = (this && this.translate) || 0) {
  const t = this,
    n = t.params,
    { slides: i, rtlTranslate: s, snapGrid: r } = t
  if (i.length === 0) return
  typeof i[0].swiperSlideOffset > 'u' && t.updateSlidesOffset()
  let o = -e
  s && (o = e),
    i.forEach((l) => {
      l.classList.remove(n.slideVisibleClass)
    }),
    (t.visibleSlidesIndexes = []),
    (t.visibleSlides = [])
  for (let l = 0; l < i.length; l += 1) {
    const a = i[l]
    let c = a.swiperSlideOffset
    n.cssMode && n.centeredSlides && (c -= i[0].swiperSlideOffset)
    const u =
        (o + (n.centeredSlides ? t.minTranslate() : 0) - c) / (a.swiperSlideSize + n.spaceBetween),
      d =
        (o - r[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
        (a.swiperSlideSize + n.spaceBetween),
      h = -(o - c),
      m = h + t.slidesSizesGrid[l]
    ;((h >= 0 && h < t.size - 1) || (m > 1 && m <= t.size) || (h <= 0 && m >= t.size)) &&
      (t.visibleSlides.push(a),
      t.visibleSlidesIndexes.push(l),
      i[l].classList.add(n.slideVisibleClass)),
      (a.progress = s ? -u : u),
      (a.originalProgress = s ? -d : d)
  }
}
function Dc(e) {
  const t = this
  if (typeof e > 'u') {
    const u = t.rtlTranslate ? -1 : 1
    e = (t && t.translate && t.translate * u) || 0
  }
  const n = t.params,
    i = t.maxTranslate() - t.minTranslate()
  let { progress: s, isBeginning: r, isEnd: o, progressLoop: l } = t
  const a = r,
    c = o
  if (i === 0) (s = 0), (r = !0), (o = !0)
  else {
    s = (e - t.minTranslate()) / i
    const u = Math.abs(e - t.minTranslate()) < 1,
      d = Math.abs(e - t.maxTranslate()) < 1
    ;(r = u || s <= 0), (o = d || s >= 1), u && (s = 0), d && (s = 1)
  }
  if (n.loop) {
    const u = t.getSlideIndexByData(0),
      d = t.getSlideIndexByData(t.slides.length - 1),
      h = t.slidesGrid[u],
      m = t.slidesGrid[d],
      y = t.slidesGrid[t.slidesGrid.length - 1],
      v = Math.abs(e)
    v >= h ? (l = (v - h) / y) : (l = (v + y - m) / y), l > 1 && (l -= 1)
  }
  Object.assign(t, { progress: s, progressLoop: l, isBeginning: r, isEnd: o }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) && t.updateSlidesProgress(e),
    r && !a && t.emit('reachBeginning toEdge'),
    o && !c && t.emit('reachEnd toEdge'),
    ((a && !r) || (c && !o)) && t.emit('fromEdge'),
    t.emit('progress', s)
}
function Gc() {
  const e = this,
    { slides: t, params: n, slidesEl: i, activeIndex: s } = e,
    r = e.virtual && n.virtual.enabled,
    o = (a) => je(i, `.${n.slideClass}${a}, swiper-slide${a}`)[0]
  t.forEach((a) => {
    a.classList.remove(n.slideActiveClass, n.slideNextClass, n.slidePrevClass)
  })
  let l
  if (r)
    if (n.loop) {
      let a = s - e.virtual.slidesBefore
      a < 0 && (a = e.virtual.slides.length + a),
        a >= e.virtual.slides.length && (a -= e.virtual.slides.length),
        (l = o(`[data-swiper-slide-index="${a}"]`))
    } else l = o(`[data-swiper-slide-index="${s}"]`)
  else l = t[s]
  if (l) {
    l.classList.add(n.slideActiveClass)
    let a = Tc(l, `.${n.slideClass}, swiper-slide`)[0]
    n.loop && !a && (a = t[0]), a && a.classList.add(n.slideNextClass)
    let c = xc(l, `.${n.slideClass}, swiper-slide`)[0]
    n.loop && !c === 0 && (c = t[t.length - 1]), c && c.classList.add(n.slidePrevClass)
  }
  e.emitSlidesClasses()
}
function zc(e) {
  const { slidesGrid: t, params: n } = e,
    i = e.rtlTranslate ? e.translate : -e.translate
  let s
  for (let r = 0; r < t.length; r += 1)
    typeof t[r + 1] < 'u'
      ? i >= t[r] && i < t[r + 1] - (t[r + 1] - t[r]) / 2
        ? (s = r)
        : i >= t[r] && i < t[r + 1] && (s = r + 1)
      : i >= t[r] && (s = r)
  return n.normalizeSlideIndex && (s < 0 || typeof s > 'u') && (s = 0), s
}
function jc(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: i, params: s, activeIndex: r, realIndex: o, snapIndex: l } = t
  let a = e,
    c
  const u = (h) => {
    let m = h - t.virtual.slidesBefore
    return (
      m < 0 && (m = t.virtual.slides.length + m),
      m >= t.virtual.slides.length && (m -= t.virtual.slides.length),
      m
    )
  }
  if ((typeof a > 'u' && (a = zc(t)), i.indexOf(n) >= 0)) c = i.indexOf(n)
  else {
    const h = Math.min(s.slidesPerGroupSkip, a)
    c = h + Math.floor((a - h) / s.slidesPerGroup)
  }
  if ((c >= i.length && (c = i.length - 1), a === r)) {
    c !== l && ((t.snapIndex = c), t.emit('snapIndexChange')),
      t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = u(a))
    return
  }
  let d
  t.virtual && s.virtual.enabled && s.loop
    ? (d = u(a))
    : t.slides[a]
    ? (d = parseInt(t.slides[a].getAttribute('data-swiper-slide-index') || a, 10))
    : (d = a),
    Object.assign(t, { snapIndex: c, realIndex: d, previousIndex: r, activeIndex: a }),
    t.emit('activeIndexChange'),
    t.emit('snapIndexChange'),
    o !== d && t.emit('realIndexChange'),
    (t.initialized || t.params.runCallbacksOnInit) && t.emit('slideChange')
}
function $c(e) {
  const t = this,
    n = t.params,
    i = e.closest(`.${n.slideClass}, swiper-slide`)
  let s = !1,
    r
  if (i) {
    for (let o = 0; o < t.slides.length; o += 1)
      if (t.slides[o] === i) {
        ;(s = !0), (r = o)
        break
      }
  }
  if (i && s)
    (t.clickedSlide = i),
      t.virtual && t.params.virtual.enabled
        ? (t.clickedIndex = parseInt(i.getAttribute('data-swiper-slide-index'), 10))
        : (t.clickedIndex = r)
  else {
    ;(t.clickedSlide = void 0), (t.clickedIndex = void 0)
    return
  }
  n.slideToClickedSlide &&
    t.clickedIndex !== void 0 &&
    t.clickedIndex !== t.activeIndex &&
    t.slideToClickedSlide()
}
const Vc = {
  updateSize: Rc,
  updateSlides: Nc,
  updateAutoHeight: kc,
  updateSlidesOffset: Fc,
  updateSlidesProgress: Hc,
  updateProgress: Dc,
  updateSlidesClasses: Gc,
  updateActiveIndex: jc,
  updateClickedSlide: $c,
}
function qc(e = this.isHorizontal() ? 'x' : 'y') {
  const t = this,
    { params: n, rtlTranslate: i, translate: s, wrapperEl: r } = t
  if (n.virtualTranslate) return i ? -s : s
  if (n.cssMode) return s
  let o = wc(r, e)
  return i && (o = -o), o || 0
}
function Uc(e, t) {
  const n = this,
    { rtlTranslate: i, params: s, wrapperEl: r, progress: o } = n
  let l = 0,
    a = 0
  const c = 0
  n.isHorizontal() ? (l = i ? -e : e) : (a = e),
    s.roundLengths && ((l = Math.floor(l)), (a = Math.floor(a))),
    s.cssMode
      ? (r[n.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = n.isHorizontal() ? -l : -a)
      : s.virtualTranslate || (r.style.transform = `translate3d(${l}px, ${a}px, ${c}px)`),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? l : a)
  let u
  const d = n.maxTranslate() - n.minTranslate()
  d === 0 ? (u = 0) : (u = (e - n.minTranslate()) / d),
    u !== o && n.updateProgress(e),
    n.emit('setTranslate', n.translate, t)
}
function Wc() {
  return -this.snapGrid[0]
}
function Kc() {
  return -this.snapGrid[this.snapGrid.length - 1]
}
function Qc(e = 0, t = this.params.speed, n = !0, i = !0, s) {
  const r = this,
    { params: o, wrapperEl: l } = r
  if (r.animating && o.preventInteractionOnTransition) return !1
  const a = r.minTranslate(),
    c = r.maxTranslate()
  let u
  if ((i && e > a ? (u = a) : i && e < c ? (u = c) : (u = e), r.updateProgress(u), o.cssMode)) {
    const d = r.isHorizontal()
    if (t === 0) l[d ? 'scrollLeft' : 'scrollTop'] = -u
    else {
      if (!r.support.smoothScroll)
        return Ir({ swiper: r, targetPosition: -u, side: d ? 'left' : 'top' }), !0
      l.scrollTo({ [d ? 'left' : 'top']: -u, behavior: 'smooth' })
    }
    return !0
  }
  return (
    t === 0
      ? (r.setTransition(0),
        r.setTranslate(u),
        n && (r.emit('beforeTransitionStart', t, s), r.emit('transitionEnd')))
      : (r.setTransition(t),
        r.setTranslate(u),
        n && (r.emit('beforeTransitionStart', t, s), r.emit('transitionStart')),
        r.animating ||
          ((r.animating = !0),
          r.onTranslateToWrapperTransitionEnd ||
            (r.onTranslateToWrapperTransitionEnd = function (h) {
              !r ||
                r.destroyed ||
                (h.target === this &&
                  (r.wrapperEl.removeEventListener(
                    'transitionend',
                    r.onTranslateToWrapperTransitionEnd,
                  ),
                  (r.onTranslateToWrapperTransitionEnd = null),
                  delete r.onTranslateToWrapperTransitionEnd,
                  n && r.emit('transitionEnd')))
            }),
          r.wrapperEl.addEventListener('transitionend', r.onTranslateToWrapperTransitionEnd))),
    !0
  )
}
const Yc = {
  getTranslate: qc,
  setTranslate: Uc,
  minTranslate: Wc,
  maxTranslate: Kc,
  translateTo: Qc,
}
function Zc(e, t) {
  const n = this
  n.params.cssMode || (n.wrapperEl.style.transitionDuration = `${e}ms`),
    n.emit('setTransition', e, t)
}
function Nr({ swiper: e, runCallbacks: t, direction: n, step: i }) {
  const { activeIndex: s, previousIndex: r } = e
  let o = n
  if (
    (o || (s > r ? (o = 'next') : s < r ? (o = 'prev') : (o = 'reset')),
    e.emit(`transition${i}`),
    t && s !== r)
  ) {
    if (o === 'reset') {
      e.emit(`slideResetTransition${i}`)
      return
    }
    e.emit(`slideChangeTransition${i}`),
      o === 'next' ? e.emit(`slideNextTransition${i}`) : e.emit(`slidePrevTransition${i}`)
  }
}
function Xc(e = !0, t) {
  const n = this,
    { params: i } = n
  i.cssMode ||
    (i.autoHeight && n.updateAutoHeight(),
    Nr({ swiper: n, runCallbacks: e, direction: t, step: 'Start' }))
}
function Jc(e = !0, t) {
  const n = this,
    { params: i } = n
  ;(n.animating = !1),
    !i.cssMode &&
      (n.setTransition(0), Nr({ swiper: n, runCallbacks: e, direction: t, step: 'End' }))
}
const eu = { setTransition: Zc, transitionStart: Xc, transitionEnd: Jc }
function tu(e = 0, t = this.params.speed, n = !0, i, s) {
  typeof e == 'string' && (e = parseInt(e, 10))
  const r = this
  let o = e
  o < 0 && (o = 0)
  const {
    params: l,
    snapGrid: a,
    slidesGrid: c,
    previousIndex: u,
    activeIndex: d,
    rtlTranslate: h,
    wrapperEl: m,
    enabled: y,
  } = r
  if ((r.animating && l.preventInteractionOnTransition) || (!y && !i && !s)) return !1
  const v = Math.min(r.params.slidesPerGroupSkip, o)
  let T = v + Math.floor((o - v) / r.params.slidesPerGroup)
  T >= a.length && (T = a.length - 1)
  const p = -a[T]
  if (l.normalizeSlideIndex)
    for (let b = 0; b < c.length; b += 1) {
      const A = -Math.floor(p * 100),
        P = Math.floor(c[b] * 100),
        k = Math.floor(c[b + 1] * 100)
      typeof c[b + 1] < 'u'
        ? A >= P && A < k - (k - P) / 2
          ? (o = b)
          : A >= P && A < k && (o = b + 1)
        : A >= P && (o = b)
    }
  if (
    r.initialized &&
    o !== d &&
    ((!r.allowSlideNext && p < r.translate && p < r.minTranslate()) ||
      (!r.allowSlidePrev && p > r.translate && p > r.maxTranslate() && (d || 0) !== o))
  )
    return !1
  o !== (u || 0) && n && r.emit('beforeSlideChangeStart'), r.updateProgress(p)
  let _
  if (
    (o > d ? (_ = 'next') : o < d ? (_ = 'prev') : (_ = 'reset'),
    (h && -p === r.translate) || (!h && p === r.translate))
  )
    return (
      r.updateActiveIndex(o),
      l.autoHeight && r.updateAutoHeight(),
      r.updateSlidesClasses(),
      l.effect !== 'slide' && r.setTranslate(p),
      _ !== 'reset' && (r.transitionStart(n, _), r.transitionEnd(n, _)),
      !1
    )
  if (l.cssMode) {
    const b = r.isHorizontal(),
      A = h ? p : -p
    if (t === 0) {
      const P = r.virtual && r.params.virtual.enabled
      P && ((r.wrapperEl.style.scrollSnapType = 'none'), (r._immediateVirtual = !0)),
        P && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
          ? ((r._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              m[b ? 'scrollLeft' : 'scrollTop'] = A
            }))
          : (m[b ? 'scrollLeft' : 'scrollTop'] = A),
        P &&
          requestAnimationFrame(() => {
            ;(r.wrapperEl.style.scrollSnapType = ''), (r._immediateVirtual = !1)
          })
    } else {
      if (!r.support.smoothScroll)
        return Ir({ swiper: r, targetPosition: A, side: b ? 'left' : 'top' }), !0
      m.scrollTo({ [b ? 'left' : 'top']: A, behavior: 'smooth' })
    }
    return !0
  }
  return (
    r.setTransition(t),
    r.setTranslate(p),
    r.updateActiveIndex(o),
    r.updateSlidesClasses(),
    r.emit('beforeTransitionStart', t, i),
    r.transitionStart(n, _),
    t === 0
      ? r.transitionEnd(n, _)
      : r.animating ||
        ((r.animating = !0),
        r.onSlideToWrapperTransitionEnd ||
          (r.onSlideToWrapperTransitionEnd = function (A) {
            !r ||
              r.destroyed ||
              (A.target === this &&
                (r.wrapperEl.removeEventListener('transitionend', r.onSlideToWrapperTransitionEnd),
                (r.onSlideToWrapperTransitionEnd = null),
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(n, _)))
          }),
        r.wrapperEl.addEventListener('transitionend', r.onSlideToWrapperTransitionEnd)),
    !0
  )
}
function nu(e = 0, t = this.params.speed, n = !0, i) {
  typeof e == 'string' && (e = parseInt(e, 10))
  const s = this
  let r = e
  return (
    s.params.loop &&
      (s.virtual && s.params.virtual.enabled
        ? (r = r + s.virtual.slidesBefore)
        : (r = s.getSlideIndexByData(r))),
    s.slideTo(r, t, n, i)
  )
}
function iu(e = this.params.speed, t = !0, n) {
  const i = this,
    { enabled: s, params: r, animating: o } = i
  if (!s) return i
  let l = r.slidesPerGroup
  r.slidesPerView === 'auto' &&
    r.slidesPerGroup === 1 &&
    r.slidesPerGroupAuto &&
    (l = Math.max(i.slidesPerViewDynamic('current', !0), 1))
  const a = i.activeIndex < r.slidesPerGroupSkip ? 1 : l,
    c = i.virtual && r.virtual.enabled
  if (r.loop) {
    if (o && !c && r.loopPreventsSliding) return !1
    i.loopFix({ direction: 'next' }), (i._clientLeft = i.wrapperEl.clientLeft)
  }
  return r.rewind && i.isEnd ? i.slideTo(0, e, t, n) : i.slideTo(i.activeIndex + a, e, t, n)
}
function su(e = this.params.speed, t = !0, n) {
  const i = this,
    { params: s, snapGrid: r, slidesGrid: o, rtlTranslate: l, enabled: a, animating: c } = i
  if (!a) return i
  const u = i.virtual && s.virtual.enabled
  if (s.loop) {
    if (c && !u && s.loopPreventsSliding) return !1
    i.loopFix({ direction: 'prev' }), (i._clientLeft = i.wrapperEl.clientLeft)
  }
  const d = l ? i.translate : -i.translate
  function h(p) {
    return p < 0 ? -Math.floor(Math.abs(p)) : Math.floor(p)
  }
  const m = h(d),
    y = r.map((p) => h(p))
  let v = r[y.indexOf(m) - 1]
  if (typeof v > 'u' && s.cssMode) {
    let p
    r.forEach((_, b) => {
      m >= _ && (p = b)
    }),
      typeof p < 'u' && (v = r[p > 0 ? p - 1 : p])
  }
  let T = 0
  if (
    (typeof v < 'u' &&
      ((T = o.indexOf(v)),
      T < 0 && (T = i.activeIndex - 1),
      s.slidesPerView === 'auto' &&
        s.slidesPerGroup === 1 &&
        s.slidesPerGroupAuto &&
        ((T = T - i.slidesPerViewDynamic('previous', !0) + 1), (T = Math.max(T, 0)))),
    s.rewind && i.isBeginning)
  ) {
    const p =
      i.params.virtual && i.params.virtual.enabled && i.virtual
        ? i.virtual.slides.length - 1
        : i.slides.length - 1
    return i.slideTo(p, e, t, n)
  }
  return i.slideTo(T, e, t, n)
}
function ru(e = this.params.speed, t = !0, n) {
  const i = this
  return i.slideTo(i.activeIndex, e, t, n)
}
function ou(e = this.params.speed, t = !0, n, i = 0.5) {
  const s = this
  let r = s.activeIndex
  const o = Math.min(s.params.slidesPerGroupSkip, r),
    l = o + Math.floor((r - o) / s.params.slidesPerGroup),
    a = s.rtlTranslate ? s.translate : -s.translate
  if (a >= s.snapGrid[l]) {
    const c = s.snapGrid[l],
      u = s.snapGrid[l + 1]
    a - c > (u - c) * i && (r += s.params.slidesPerGroup)
  } else {
    const c = s.snapGrid[l - 1],
      u = s.snapGrid[l]
    a - c <= (u - c) * i && (r -= s.params.slidesPerGroup)
  }
  return (r = Math.max(r, 0)), (r = Math.min(r, s.slidesGrid.length - 1)), s.slideTo(r, e, t, n)
}
function lu() {
  const e = this,
    { params: t, slidesEl: n } = e,
    i = t.slidesPerView === 'auto' ? e.slidesPerViewDynamic() : t.slidesPerView
  let s = e.clickedIndex,
    r
  const o = e.isElement ? 'swiper-slide' : `.${t.slideClass}`
  if (t.loop) {
    if (e.animating) return
    ;(r = parseInt(e.clickedSlide.getAttribute('data-swiper-slide-index'), 10)),
      t.centeredSlides
        ? s < e.loopedSlides - i / 2 || s > e.slides.length - e.loopedSlides + i / 2
          ? (e.loopFix(),
            (s = e.getSlideIndex(je(n, `${o}[data-swiper-slide-index="${r}"]`)[0])),
            gi(() => {
              e.slideTo(s)
            }))
          : e.slideTo(s)
        : s > e.slides.length - i
        ? (e.loopFix(),
          (s = e.getSlideIndex(je(n, `${o}[data-swiper-slide-index="${r}"]`)[0])),
          gi(() => {
            e.slideTo(s)
          }))
        : e.slideTo(s)
  } else e.slideTo(s)
}
const au = {
  slideTo: tu,
  slideToLoop: nu,
  slideNext: iu,
  slidePrev: su,
  slideReset: ru,
  slideToClosest: ou,
  slideToClickedSlide: lu,
}
function cu(e) {
  const t = this,
    { params: n, slidesEl: i } = t
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return
  je(i, `.${n.slideClass}, swiper-slide`).forEach((r, o) => {
    r.setAttribute('data-swiper-slide-index', o)
  }),
    t.loopFix({ slideRealIndex: e, direction: n.centeredSlides ? void 0 : 'next' })
}
function uu({
  slideRealIndex: e,
  slideTo: t = !0,
  direction: n,
  setTranslate: i,
  activeSlideIndex: s,
  byController: r,
  byMousewheel: o,
} = {}) {
  const l = this
  if (!l.params.loop) return
  l.emit('beforeLoopFix')
  const { slides: a, allowSlidePrev: c, allowSlideNext: u, slidesEl: d, params: h } = l
  if (((l.allowSlidePrev = !0), (l.allowSlideNext = !0), l.virtual && h.virtual.enabled)) {
    t &&
      (!h.centeredSlides && l.snapIndex === 0
        ? l.slideTo(l.virtual.slides.length, 0, !1, !0)
        : h.centeredSlides && l.snapIndex < h.slidesPerView
        ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
        : l.snapIndex === l.snapGrid.length - 1 && l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
      (l.allowSlidePrev = c),
      (l.allowSlideNext = u),
      l.emit('loopFix')
    return
  }
  const m =
    h.slidesPerView === 'auto'
      ? l.slidesPerViewDynamic()
      : Math.ceil(parseFloat(h.slidesPerView, 10))
  let y = h.loopedSlides || m
  y % h.slidesPerGroup !== 0 && (y += h.slidesPerGroup - (y % h.slidesPerGroup)),
    (l.loopedSlides = y)
  const v = [],
    T = []
  let p = l.activeIndex
  typeof s > 'u'
    ? (s = l.getSlideIndex(l.slides.filter((k) => k.classList.contains(h.slideActiveClass))[0]))
    : (p = s)
  const _ = n === 'next' || !n,
    b = n === 'prev' || !n
  let A = 0,
    P = 0
  if (s < y) {
    A = Math.max(y - s, h.slidesPerGroup)
    for (let k = 0; k < y - s; k += 1) {
      const z = k - Math.floor(k / a.length) * a.length
      v.push(a.length - z - 1)
    }
  } else if (s > l.slides.length - y * 2) {
    P = Math.max(s - (l.slides.length - y * 2), h.slidesPerGroup)
    for (let k = 0; k < P; k += 1) {
      const z = k - Math.floor(k / a.length) * a.length
      T.push(z)
    }
  }
  if (
    (b &&
      v.forEach((k) => {
        d.prepend(l.slides[k])
      }),
    _ &&
      T.forEach((k) => {
        d.append(l.slides[k])
      }),
    l.recalcSlides(),
    h.watchSlidesProgress && l.updateSlidesOffset(),
    t)
  ) {
    if (v.length > 0 && b)
      if (typeof e > 'u') {
        const k = l.slidesGrid[p],
          w = l.slidesGrid[p + A] - k
        o
          ? l.setTranslate(l.translate - w)
          : (l.slideTo(p + A, 0, !1, !0),
            i && (l.touches[l.isHorizontal() ? 'startX' : 'startY'] += w))
      } else i && l.slideToLoop(e, 0, !1, !0)
    else if (T.length > 0 && _)
      if (typeof e > 'u') {
        const k = l.slidesGrid[p],
          w = l.slidesGrid[p - P] - k
        o
          ? l.setTranslate(l.translate - w)
          : (l.slideTo(p - P, 0, !1, !0),
            i && (l.touches[l.isHorizontal() ? 'startX' : 'startY'] += w))
      } else l.slideToLoop(e, 0, !1, !0)
  }
  if (
    ((l.allowSlidePrev = c), (l.allowSlideNext = u), l.controller && l.controller.control && !r)
  ) {
    const k = {
      slideRealIndex: e,
      slideTo: !1,
      direction: n,
      setTranslate: i,
      activeSlideIndex: s,
      byController: !0,
    }
    Array.isArray(l.controller.control)
      ? l.controller.control.forEach((z) => {
          !z.destroyed && z.params.loop && z.loopFix(k)
        })
      : l.controller.control instanceof l.constructor &&
        l.controller.control.params.loop &&
        l.controller.control.loopFix(k)
  }
  l.emit('loopFix')
}
function du() {
  const e = this,
    { params: t, slidesEl: n } = e
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return
  e.recalcSlides()
  const i = []
  e.slides.forEach((s) => {
    const r =
      typeof s.swiperSlideIndex > 'u'
        ? s.getAttribute('data-swiper-slide-index') * 1
        : s.swiperSlideIndex
    i[r] = s
  }),
    e.slides.forEach((s) => {
      s.removeAttribute('data-swiper-slide-index')
    }),
    i.forEach((s) => {
      n.append(s)
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0)
}
const fu = { loopCreate: cu, loopFix: uu, loopDestroy: du }
function pu(e) {
  const t = this
  if (!t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode) return
  const n = t.params.touchEventsTarget === 'container' ? t.el : t.wrapperEl
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = 'move'),
    (n.style.cursor = e ? 'grabbing' : 'grab'),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1
      })
}
function hu() {
  const e = this
  ;(e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[e.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = ''),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1
      }))
}
const gu = { setGrabCursor: pu, unsetGrabCursor: hu }
function mu(e, t = this) {
  function n(i) {
    if (!i || i === mt() || i === Ce()) return null
    i.assignedSlot && (i = i.assignedSlot)
    const s = i.closest(e)
    return !s && !i.getRootNode ? null : s || n(i.getRootNode().host)
  }
  return n(t)
}
function vu(e) {
  const t = this,
    n = mt(),
    i = Ce(),
    s = t.touchEventsData
  s.evCache.push(e)
  const { params: r, touches: o, enabled: l } = t
  if (
    !l ||
    (!r.simulateTouch && e.pointerType === 'mouse') ||
    (t.animating && r.preventInteractionOnTransition)
  )
    return
  !t.animating && r.cssMode && r.loop && t.loopFix()
  let a = e
  a.originalEvent && (a = a.originalEvent)
  let c = a.target
  if (
    (r.touchEventsTarget === 'wrapper' && !t.wrapperEl.contains(c)) ||
    ('which' in a && a.which === 3) ||
    ('button' in a && a.button > 0) ||
    (s.isTouched && s.isMoved)
  )
    return
  const u = !!r.noSwipingClass && r.noSwipingClass !== '',
    d = e.composedPath ? e.composedPath() : e.path
  u && a.target && a.target.shadowRoot && d && (c = d[0])
  const h = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    m = !!(a.target && a.target.shadowRoot)
  if (r.noSwiping && (m ? mu(h, c) : c.closest(h))) {
    t.allowClick = !0
    return
  }
  if (r.swipeHandler && !c.closest(r.swipeHandler)) return
  ;(o.currentX = a.pageX), (o.currentY = a.pageY)
  const y = o.currentX,
    v = o.currentY,
    T = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
    p = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold
  if (T && (y <= p || y >= i.innerWidth - p))
    if (T === 'prevent') e.preventDefault()
    else return
  Object.assign(s, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = y),
    (o.startY = v),
    (s.touchStartTime = Wt()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    r.threshold > 0 && (s.allowThresholdMove = !1)
  let _ = !0
  c.matches(s.focusableElements) && ((_ = !1), c.nodeName === 'SELECT' && (s.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(s.focusableElements) &&
      n.activeElement !== c &&
      n.activeElement.blur()
  const b = _ && t.allowTouchMove && r.touchStartPreventDefault
  ;(r.touchStartForcePreventDefault || b) && !c.isContentEditable && a.preventDefault(),
    t.params.freeMode &&
      t.params.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !r.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit('touchStart', a)
}
function bu(e) {
  const t = mt(),
    n = this,
    i = n.touchEventsData,
    { params: s, touches: r, rtlTranslate: o, enabled: l } = n
  if (!l || (!s.simulateTouch && e.pointerType === 'mouse')) return
  let a = e
  if ((a.originalEvent && (a = a.originalEvent), !i.isTouched)) {
    i.startMoving && i.isScrolling && n.emit('touchMoveOpposite', a)
    return
  }
  const c = i.evCache.findIndex((k) => k.pointerId === a.pointerId)
  c >= 0 && (i.evCache[c] = a)
  const u = i.evCache.length > 1 ? i.evCache[0] : a,
    d = u.pageX,
    h = u.pageY
  if (a.preventedByNestedSwiper) {
    ;(r.startX = d), (r.startY = h)
    return
  }
  if (!n.allowTouchMove) {
    a.target.matches(i.focusableElements) || (n.allowClick = !1),
      i.isTouched &&
        (Object.assign(r, {
          startX: d,
          startY: h,
          prevX: n.touches.currentX,
          prevY: n.touches.currentY,
          currentX: d,
          currentY: h,
        }),
        (i.touchStartTime = Wt()))
    return
  }
  if (s.touchReleaseOnEdges && !s.loop) {
    if (n.isVertical()) {
      if (
        (h < r.startY && n.translate <= n.maxTranslate()) ||
        (h > r.startY && n.translate >= n.minTranslate())
      ) {
        ;(i.isTouched = !1), (i.isMoved = !1)
        return
      }
    } else if (
      (d < r.startX && n.translate <= n.maxTranslate()) ||
      (d > r.startX && n.translate >= n.minTranslate())
    )
      return
  }
  if (t.activeElement && a.target === t.activeElement && a.target.matches(i.focusableElements)) {
    ;(i.isMoved = !0), (n.allowClick = !1)
    return
  }
  if (
    (i.allowTouchCallbacks && n.emit('touchMove', a), a.targetTouches && a.targetTouches.length > 1)
  )
    return
  ;(r.currentX = d), (r.currentY = h)
  const m = r.currentX - r.startX,
    y = r.currentY - r.startY
  if (n.params.threshold && Math.sqrt(m ** 2 + y ** 2) < n.params.threshold) return
  if (typeof i.isScrolling > 'u') {
    let k
    ;(n.isHorizontal() && r.currentY === r.startY) || (n.isVertical() && r.currentX === r.startX)
      ? (i.isScrolling = !1)
      : m * m + y * y >= 25 &&
        ((k = (Math.atan2(Math.abs(y), Math.abs(m)) * 180) / Math.PI),
        (i.isScrolling = n.isHorizontal() ? k > s.touchAngle : 90 - k > s.touchAngle))
  }
  if (
    (i.isScrolling && n.emit('touchMoveOpposite', a),
    typeof i.startMoving > 'u' &&
      (r.currentX !== r.startX || r.currentY !== r.startY) &&
      (i.startMoving = !0),
    i.isScrolling || (n.zoom && n.params.zoom && n.params.zoom.enabled && i.evCache.length > 1))
  ) {
    i.isTouched = !1
    return
  }
  if (!i.startMoving) return
  ;(n.allowClick = !1),
    !s.cssMode && a.cancelable && a.preventDefault(),
    s.touchMoveStopPropagation && !s.nested && a.stopPropagation()
  let v = n.isHorizontal() ? m : y,
    T = n.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY
  s.oneWayMovement && ((v = Math.abs(v) * (o ? 1 : -1)), (T = Math.abs(T) * (o ? 1 : -1))),
    (r.diff = v),
    (v *= s.touchRatio),
    o && ((v = -v), (T = -T))
  const p = n.touchesDirection
  ;(n.swipeDirection = v > 0 ? 'prev' : 'next'), (n.touchesDirection = T > 0 ? 'prev' : 'next')
  const _ = n.params.loop && !s.cssMode
  if (!i.isMoved) {
    if (
      (_ && n.loopFix({ direction: n.swipeDirection }),
      (i.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const k = new window.CustomEvent('transitionend', { bubbles: !0, cancelable: !0 })
      n.wrapperEl.dispatchEvent(k)
    }
    ;(i.allowMomentumBounce = !1),
      s.grabCursor && (n.allowSlideNext === !0 || n.allowSlidePrev === !0) && n.setGrabCursor(!0),
      n.emit('sliderFirstMove', a)
  }
  let b
  i.isMoved &&
    p !== n.touchesDirection &&
    _ &&
    Math.abs(v) >= 1 &&
    (n.loopFix({ direction: n.swipeDirection, setTranslate: !0 }), (b = !0)),
    n.emit('sliderMove', a),
    (i.isMoved = !0),
    (i.currentTranslate = v + i.startTranslate)
  let A = !0,
    P = s.resistanceRatio
  if (
    (s.touchReleaseOnEdges && (P = 0),
    v > 0
      ? (_ &&
          !b &&
          i.currentTranslate >
            (s.centeredSlides ? n.minTranslate() - n.size / 2 : n.minTranslate()) &&
          n.loopFix({ direction: 'prev', setTranslate: !0, activeSlideIndex: 0 }),
        i.currentTranslate > n.minTranslate() &&
          ((A = !1),
          s.resistance &&
            (i.currentTranslate =
              n.minTranslate() - 1 + (-n.minTranslate() + i.startTranslate + v) ** P)))
      : v < 0 &&
        (_ &&
          !b &&
          i.currentTranslate <
            (s.centeredSlides ? n.maxTranslate() + n.size / 2 : n.maxTranslate()) &&
          n.loopFix({
            direction: 'next',
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (s.slidesPerView === 'auto'
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(s.slidesPerView, 10))),
          }),
        i.currentTranslate < n.maxTranslate() &&
          ((A = !1),
          s.resistance &&
            (i.currentTranslate =
              n.maxTranslate() + 1 - (n.maxTranslate() - i.startTranslate - v) ** P))),
    A && (a.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === 'next' &&
      i.currentTranslate < i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === 'prev' &&
      i.currentTranslate > i.startTranslate &&
      (i.currentTranslate = i.startTranslate),
    !n.allowSlidePrev && !n.allowSlideNext && (i.currentTranslate = i.startTranslate),
    s.threshold > 0)
  )
    if (Math.abs(v) > s.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        ;(i.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (i.currentTranslate = i.startTranslate),
          (r.diff = n.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
        return
      }
    } else {
      i.currentTranslate = i.startTranslate
      return
    }
  !s.followFinger ||
    s.cssMode ||
    (((s.freeMode && s.freeMode.enabled && n.freeMode) || s.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    n.params.freeMode && s.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(i.currentTranslate),
    n.setTranslate(i.currentTranslate))
}
function _u(e) {
  const t = this,
    n = t.touchEventsData,
    i = n.evCache.findIndex((b) => b.pointerId === e.pointerId)
  if (
    (i >= 0 && n.evCache.splice(i, 1),
    ['pointercancel', 'pointerout', 'pointerleave'].includes(e.type) &&
      !(e.type === 'pointercancel' && (t.browser.isSafari || t.browser.isWebView)))
  )
    return
  const { params: s, touches: r, rtlTranslate: o, slidesGrid: l, enabled: a } = t
  if (!a || (!s.simulateTouch && e.pointerType === 'mouse')) return
  let c = e
  if (
    (c.originalEvent && (c = c.originalEvent),
    n.allowTouchCallbacks && t.emit('touchEnd', c),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && s.grabCursor && t.setGrabCursor(!1), (n.isMoved = !1), (n.startMoving = !1)
    return
  }
  s.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1)
  const u = Wt(),
    d = u - n.touchStartTime
  if (t.allowClick) {
    const b = c.path || (c.composedPath && c.composedPath())
    t.updateClickedSlide((b && b[0]) || c.target),
      t.emit('tap click', c),
      d < 300 && u - n.lastClickTime < 300 && t.emit('doubleTap doubleClick', c)
  }
  if (
    ((n.lastClickTime = Wt()),
    gi(() => {
      t.destroyed || (t.allowClick = !0)
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      r.diff === 0 ||
      n.currentTranslate === n.startTranslate)
  ) {
    ;(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1)
    return
  }
  ;(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1)
  let h
  if (
    (s.followFinger ? (h = o ? t.translate : -t.translate) : (h = -n.currentTranslate), s.cssMode)
  )
    return
  if (t.params.freeMode && s.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: h })
    return
  }
  let m = 0,
    y = t.slidesSizesGrid[0]
  for (let b = 0; b < l.length; b += b < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
    const A = b < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup
    typeof l[b + A] < 'u'
      ? h >= l[b] && h < l[b + A] && ((m = b), (y = l[b + A] - l[b]))
      : h >= l[b] && ((m = b), (y = l[l.length - 1] - l[l.length - 2]))
  }
  let v = null,
    T = null
  s.rewind &&
    (t.isBeginning
      ? (T =
          t.params.virtual && t.params.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (v = 0))
  const p = (h - l[m]) / y,
    _ = m < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup
  if (d > s.longSwipesMs) {
    if (!s.longSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.swipeDirection === 'next' &&
      (p >= s.longSwipesRatio ? t.slideTo(s.rewind && t.isEnd ? v : m + _) : t.slideTo(m)),
      t.swipeDirection === 'prev' &&
        (p > 1 - s.longSwipesRatio
          ? t.slideTo(m + _)
          : T !== null && p < 0 && Math.abs(p) > s.longSwipesRatio
          ? t.slideTo(T)
          : t.slideTo(m))
  } else {
    if (!s.shortSwipes) {
      t.slideTo(t.activeIndex)
      return
    }
    t.navigation && (c.target === t.navigation.nextEl || c.target === t.navigation.prevEl)
      ? c.target === t.navigation.nextEl
        ? t.slideTo(m + _)
        : t.slideTo(m)
      : (t.swipeDirection === 'next' && t.slideTo(v !== null ? v : m + _),
        t.swipeDirection === 'prev' && t.slideTo(T !== null ? T : m))
  }
}
let Ts
function As() {
  const e = this,
    { params: t, el: n } = e
  if (n && n.offsetWidth === 0) return
  t.breakpoints && e.setBreakpoint()
  const { allowSlideNext: i, allowSlidePrev: s, snapGrid: r } = e,
    o = e.virtual && e.params.virtual.enabled
  ;(e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses()
  const l = o && t.loop
  ;(t.slidesPerView === 'auto' || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !l
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !o
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(Ts),
      (Ts = setTimeout(() => {
        e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
      }, 500))),
    (e.allowSlidePrev = s),
    (e.allowSlideNext = i),
    e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
}
function yu(e) {
  const t = this
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())))
}
function Su() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: i } = e
  if (!i) return
  ;(e.previousTranslate = e.translate),
    e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses()
  let s
  const r = e.maxTranslate() - e.minTranslate()
  r === 0 ? (s = 0) : (s = (e.translate - e.minTranslate()) / r),
    s !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit('setTranslate', e.translate, !1)
}
const dn = (e, t) => {
  if (!e || e.destroyed || !e.params) return
  const n = () => (e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`),
    i = t.closest(n())
  if (i) {
    const s = i.querySelector(`.${e.params.lazyPreloaderClass}`)
    s && s.remove()
  }
}
function wu(e) {
  const t = this
  dn(t, e.target), t.update()
}
let Es = !1
function Cu() {}
const kr = (e, t) => {
  const n = mt(),
    { params: i, el: s, wrapperEl: r, device: o } = e,
    l = !!i.nested,
    a = t === 'on' ? 'addEventListener' : 'removeEventListener',
    c = t
  s[a]('pointerdown', e.onTouchStart, { passive: !1 }),
    n[a]('pointermove', e.onTouchMove, { passive: !1, capture: l }),
    n[a]('pointerup', e.onTouchEnd, { passive: !0 }),
    n[a]('pointercancel', e.onTouchEnd, { passive: !0 }),
    n[a]('pointerout', e.onTouchEnd, { passive: !0 }),
    n[a]('pointerleave', e.onTouchEnd, { passive: !0 }),
    (i.preventClicks || i.preventClicksPropagation) && s[a]('click', e.onClick, !0),
    i.cssMode && r[a]('scroll', e.onScroll),
    i.updateOnWindowResize
      ? e[c](
          o.ios || o.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate',
          As,
          !0,
        )
      : e[c]('observerUpdate', As, !0),
    s[a]('load', e.onLoad, { capture: !0 })
}
function xu() {
  const e = this,
    t = mt(),
    { params: n } = e
  ;(e.onTouchStart = vu.bind(e)),
    (e.onTouchMove = bu.bind(e)),
    (e.onTouchEnd = _u.bind(e)),
    n.cssMode && (e.onScroll = Su.bind(e)),
    (e.onClick = yu.bind(e)),
    (e.onLoad = wu.bind(e)),
    Es || (t.addEventListener('touchstart', Cu), (Es = !0)),
    kr(e, 'on')
}
function Tu() {
  kr(this, 'off')
}
const Au = { attachEvents: xu, detachEvents: Tu },
  Ms = (e, t) => e.grid && t.grid && t.grid.rows > 1
function Eu() {
  const e = this,
    { realIndex: t, initialized: n, params: i, el: s } = e,
    r = i.breakpoints
  if (!r || (r && Object.keys(r).length === 0)) return
  const o = e.getBreakpoint(r, e.params.breakpointsBase, e.el)
  if (!o || e.currentBreakpoint === o) return
  const a = (o in r ? r[o] : void 0) || e.originalParams,
    c = Ms(e, i),
    u = Ms(e, a),
    d = i.enabled
  c && !u
    ? (s.classList.remove(
        `${i.containerModifierClass}grid`,
        `${i.containerModifierClass}grid-column`,
      ),
      e.emitContainerClasses())
    : !c &&
      u &&
      (s.classList.add(`${i.containerModifierClass}grid`),
      ((a.grid.fill && a.grid.fill === 'column') || (!a.grid.fill && i.grid.fill === 'column')) &&
        s.classList.add(`${i.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    ['navigation', 'pagination', 'scrollbar'].forEach((v) => {
      const T = i[v] && i[v].enabled,
        p = a[v] && a[v].enabled
      T && !p && e[v].disable(), !T && p && e[v].enable()
    })
  const h = a.direction && a.direction !== i.direction,
    m = i.loop && (a.slidesPerView !== i.slidesPerView || h)
  h && n && e.changeDirection(), we(e.params, a)
  const y = e.params.enabled
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    d && !y ? e.disable() : !d && y && e.enable(),
    (e.currentBreakpoint = o),
    e.emit('_beforeBreakpoint', a),
    m && n && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
    e.emit('breakpoint', a)
}
function Mu(e, t = 'window', n) {
  if (!e || (t === 'container' && !n)) return
  let i = !1
  const s = Ce(),
    r = t === 'window' ? s.innerHeight : n.clientHeight,
    o = Object.keys(e).map((l) => {
      if (typeof l == 'string' && l.indexOf('@') === 0) {
        const a = parseFloat(l.substr(1))
        return { value: r * a, point: l }
      }
      return { value: l, point: l }
    })
  o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10))
  for (let l = 0; l < o.length; l += 1) {
    const { point: a, value: c } = o[l]
    t === 'window'
      ? s.matchMedia(`(min-width: ${c}px)`).matches && (i = a)
      : c <= n.clientWidth && (i = a)
  }
  return i || 'max'
}
const Lu = { setBreakpoint: Eu, getBreakpoint: Mu }
function Ou(e, t) {
  const n = []
  return (
    e.forEach((i) => {
      typeof i == 'object'
        ? Object.keys(i).forEach((s) => {
            i[s] && n.push(t + s)
          })
        : typeof i == 'string' && n.push(t + i)
    }),
    n
  )
}
function Iu() {
  const e = this,
    { classNames: t, params: n, rtl: i, el: s, device: r } = e,
    o = Ou(
      [
        'initialized',
        n.direction,
        { 'free-mode': e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: i },
        { grid: n.grid && n.grid.rows > 1 },
        { 'grid-column': n.grid && n.grid.rows > 1 && n.grid.fill === 'column' },
        { android: r.android },
        { ios: r.ios },
        { 'css-mode': n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { 'watch-progress': n.watchSlidesProgress },
      ],
      n.containerModifierClass,
    )
  t.push(...o), s.classList.add(...t), e.emitContainerClasses()
}
function Bu() {
  const e = this,
    { el: t, classNames: n } = e
  t.classList.remove(...n), e.emitContainerClasses()
}
const Pu = { addClasses: Iu, removeClasses: Bu }
function Ru() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: i } = n
  if (i) {
    const s = e.slides.length - 1,
      r = e.slidesGrid[s] + e.slidesSizesGrid[s] + i * 2
    e.isLocked = e.size > r
  } else e.isLocked = e.snapGrid.length === 1
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock')
}
const Nu = { checkOverflow: Ru },
  Ls = {
    init: !0,
    direction: 'horizontal',
    oneWayMovement: !1,
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: 'input, select, option, textarea, button, video, label',
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: 'slide',
    breakpoints: void 0,
    breakpointsBase: 'window',
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: 'swiper-',
    slideClass: 'swiper-slide',
    slideActiveClass: 'swiper-slide-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideNextClass: 'swiper-slide-next',
    slidePrevClass: 'swiper-slide-prev',
    wrapperClass: 'swiper-wrapper',
    lazyPreloaderClass: 'swiper-lazy-preloader',
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  }
function ku(e, t) {
  return function (i = {}) {
    const s = Object.keys(i)[0],
      r = i[s]
    if (typeof r != 'object' || r === null) {
      we(t, i)
      return
    }
    if (
      (['navigation', 'pagination', 'scrollbar'].indexOf(s) >= 0 &&
        e[s] === !0 &&
        (e[s] = { auto: !0 }),
      !(s in e && 'enabled' in r))
    ) {
      we(t, i)
      return
    }
    e[s] === !0 && (e[s] = { enabled: !0 }),
      typeof e[s] == 'object' && !('enabled' in e[s]) && (e[s].enabled = !0),
      e[s] || (e[s] = { enabled: !1 }),
      we(t, i)
  }
}
const Wn = {
    eventsEmitter: Pc,
    update: Vc,
    translate: Yc,
    transition: eu,
    slide: au,
    loop: fu,
    grabCursor: gu,
    events: Au,
    breakpoints: Lu,
    checkOverflow: Nu,
    classes: Pu,
  },
  Kn = {}
let Kt = class Ue {
  constructor(...t) {
    let n, i
    t.length === 1 &&
    t[0].constructor &&
    Object.prototype.toString.call(t[0]).slice(8, -1) === 'Object'
      ? (i = t[0])
      : ([n, i] = t),
      i || (i = {}),
      (i = we({}, i)),
      n && !i.el && (i.el = n)
    const s = mt()
    if (i.el && typeof i.el == 'string' && s.querySelectorAll(i.el).length > 1) {
      const a = []
      return (
        s.querySelectorAll(i.el).forEach((c) => {
          const u = we({}, i, { el: c })
          a.push(new Ue(u))
        }),
        a
      )
    }
    const r = this
    ;(r.__swiper__ = !0),
      (r.support = Rr()),
      (r.device = Mc({ userAgent: i.userAgent })),
      (r.browser = Oc()),
      (r.eventsListeners = {}),
      (r.eventsAnyListeners = []),
      (r.modules = [...r.__modules__]),
      i.modules && Array.isArray(i.modules) && r.modules.push(...i.modules)
    const o = {}
    r.modules.forEach((a) => {
      a({
        params: i,
        swiper: r,
        extendParams: ku(i, o),
        on: r.on.bind(r),
        once: r.once.bind(r),
        off: r.off.bind(r),
        emit: r.emit.bind(r),
      })
    })
    const l = we({}, Ls, o)
    return (
      (r.params = we({}, l, Kn, i)),
      (r.originalParams = we({}, r.params)),
      (r.passedParams = we({}, i)),
      r.params &&
        r.params.on &&
        Object.keys(r.params.on).forEach((a) => {
          r.on(a, r.params.on[a])
        }),
      r.params && r.params.onAny && r.onAny(r.params.onAny),
      Object.assign(r, {
        enabled: r.params.enabled,
        el: n,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return r.params.direction === 'horizontal'
        },
        isVertical() {
          return r.params.direction === 'vertical'
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: r.params.allowSlideNext,
        allowSlidePrev: r.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: r.params.focusableElements,
          lastClickTime: Wt(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          evCache: [],
        },
        allowClick: !0,
        allowTouchMove: r.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      r.emit('_swiper'),
      r.params.init && r.init(),
      r
    )
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: i } = this,
      s = je(n, `.${i.slideClass}, swiper-slide`),
      r = mn(s[0])
    return mn(t) - r
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter((n) => n.getAttribute('data-swiper-slide-index') * 1 === t)[0],
    )
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: i } = t
    t.slides = je(n, `.${i.slideClass}, swiper-slide`)
  }
  enable() {
    const t = this
    t.enabled || ((t.enabled = !0), t.params.grabCursor && t.setGrabCursor(), t.emit('enable'))
  }
  disable() {
    const t = this
    t.enabled && ((t.enabled = !1), t.params.grabCursor && t.unsetGrabCursor(), t.emit('disable'))
  }
  setProgress(t, n) {
    const i = this
    t = Math.min(Math.max(t, 0), 1)
    const s = i.minTranslate(),
      o = (i.maxTranslate() - s) * t + s
    i.translateTo(o, typeof n > 'u' ? 0 : n), i.updateActiveIndex(), i.updateSlidesClasses()
  }
  emitContainerClasses() {
    const t = this
    if (!t.params._emitClasses || !t.el) return
    const n = t.el.className
      .split(' ')
      .filter((i) => i.indexOf('swiper') === 0 || i.indexOf(t.params.containerModifierClass) === 0)
    t.emit('_containerClasses', n.join(' '))
  }
  getSlideClasses(t) {
    const n = this
    return n.destroyed
      ? ''
      : t.className
          .split(' ')
          .filter((i) => i.indexOf('swiper-slide') === 0 || i.indexOf(n.params.slideClass) === 0)
          .join(' ')
  }
  emitSlidesClasses() {
    const t = this
    if (!t.params._emitClasses || !t.el) return
    const n = []
    t.slides.forEach((i) => {
      const s = t.getSlideClasses(i)
      n.push({ slideEl: i, classNames: s }), t.emit('_slideClass', i, s)
    }),
      t.emit('_slideClasses', n)
  }
  slidesPerViewDynamic(t = 'current', n = !1) {
    const i = this,
      { params: s, slides: r, slidesGrid: o, slidesSizesGrid: l, size: a, activeIndex: c } = i
    let u = 1
    if (s.centeredSlides) {
      let d = r[c].swiperSlideSize,
        h
      for (let m = c + 1; m < r.length; m += 1)
        r[m] && !h && ((d += r[m].swiperSlideSize), (u += 1), d > a && (h = !0))
      for (let m = c - 1; m >= 0; m -= 1)
        r[m] && !h && ((d += r[m].swiperSlideSize), (u += 1), d > a && (h = !0))
    } else if (t === 'current')
      for (let d = c + 1; d < r.length; d += 1)
        (n ? o[d] + l[d] - o[c] < a : o[d] - o[c] < a) && (u += 1)
    else for (let d = c - 1; d >= 0; d -= 1) o[c] - o[d] < a && (u += 1)
    return u
  }
  update() {
    const t = this
    if (!t || t.destroyed) return
    const { snapGrid: n, params: i } = t
    i.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && dn(t, o)
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses()
    function s() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate,
        l = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate())
      t.setTranslate(l), t.updateActiveIndex(), t.updateSlidesClasses()
    }
    let r
    t.params.freeMode && t.params.freeMode.enabled
      ? (s(), t.params.autoHeight && t.updateAutoHeight())
      : ((t.params.slidesPerView === 'auto' || t.params.slidesPerView > 1) &&
        t.isEnd &&
        !t.params.centeredSlides
          ? (r = t.slideTo(t.slides.length - 1, 0, !1, !0))
          : (r = t.slideTo(t.activeIndex, 0, !1, !0)),
        r || s()),
      i.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
      t.emit('update')
  }
  changeDirection(t, n = !0) {
    const i = this,
      s = i.params.direction
    return (
      t || (t = s === 'horizontal' ? 'vertical' : 'horizontal'),
      t === s ||
        (t !== 'horizontal' && t !== 'vertical') ||
        (i.el.classList.remove(`${i.params.containerModifierClass}${s}`),
        i.el.classList.add(`${i.params.containerModifierClass}${t}`),
        i.emitContainerClasses(),
        (i.params.direction = t),
        i.slides.forEach((r) => {
          t === 'vertical' ? (r.style.width = '') : (r.style.height = '')
        }),
        i.emit('changeDirection'),
        n && i.update()),
      i
    )
  }
  changeLanguageDirection(t) {
    const n = this
    ;(n.rtl && t === 'rtl') ||
      (!n.rtl && t === 'ltr') ||
      ((n.rtl = t === 'rtl'),
      (n.rtlTranslate = n.params.direction === 'horizontal' && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`), (n.el.dir = 'rtl'))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`), (n.el.dir = 'ltr')),
      n.update())
  }
  mount(t) {
    const n = this
    if (n.mounted) return !0
    let i = t || n.params.el
    if ((typeof i == 'string' && (i = document.querySelector(i)), !i)) return !1
    ;(i.swiper = n), i.shadowEl && (n.isElement = !0)
    const s = () => `.${(n.params.wrapperClass || '').trim().split(' ').join('.')}`
    let o = (() =>
      i && i.shadowRoot && i.shadowRoot.querySelector
        ? i.shadowRoot.querySelector(s())
        : je(i, s())[0])()
    return (
      !o &&
        n.params.createElements &&
        ((o = Br('div', n.params.wrapperClass)),
        i.append(o),
        je(i, `.${n.params.slideClass}`).forEach((l) => {
          o.append(l)
        })),
      Object.assign(n, {
        el: i,
        wrapperEl: o,
        slidesEl: n.isElement ? i : o,
        mounted: !0,
        rtl: i.dir.toLowerCase() === 'rtl' || Je(i, 'direction') === 'rtl',
        rtlTranslate:
          n.params.direction === 'horizontal' &&
          (i.dir.toLowerCase() === 'rtl' || Je(i, 'direction') === 'rtl'),
        wrongRTL: Je(o, 'display') === '-webkit-box',
      }),
      !0
    )
  }
  init(t) {
    const n = this
    return (
      n.initialized ||
        n.mount(t) === !1 ||
        (n.emit('beforeInit'),
        n.params.breakpoints && n.setBreakpoint(),
        n.addClasses(),
        n.updateSize(),
        n.updateSlides(),
        n.params.watchOverflow && n.checkOverflow(),
        n.params.grabCursor && n.enabled && n.setGrabCursor(),
        n.params.loop && n.virtual && n.params.virtual.enabled
          ? n.slideTo(
              n.params.initialSlide + n.virtual.slidesBefore,
              0,
              n.params.runCallbacksOnInit,
              !1,
              !0,
            )
          : n.slideTo(n.params.initialSlide, 0, n.params.runCallbacksOnInit, !1, !0),
        n.params.loop && n.loopCreate(),
        n.attachEvents(),
        [...n.el.querySelectorAll('[loading="lazy"]')].forEach((s) => {
          s.complete
            ? dn(n, s)
            : s.addEventListener('load', (r) => {
                dn(n, r.target)
              })
        }),
        (n.initialized = !0),
        n.emit('init'),
        n.emit('afterInit')),
      n
    )
  }
  destroy(t = !0, n = !0) {
    const i = this,
      { params: s, el: r, wrapperEl: o, slides: l } = i
    return (
      typeof i.params > 'u' ||
        i.destroyed ||
        (i.emit('beforeDestroy'),
        (i.initialized = !1),
        i.detachEvents(),
        s.loop && i.loopDestroy(),
        n &&
          (i.removeClasses(),
          r.removeAttribute('style'),
          o.removeAttribute('style'),
          l &&
            l.length &&
            l.forEach((a) => {
              a.classList.remove(
                s.slideVisibleClass,
                s.slideActiveClass,
                s.slideNextClass,
                s.slidePrevClass,
              ),
                a.removeAttribute('style'),
                a.removeAttribute('data-swiper-slide-index')
            })),
        i.emit('destroy'),
        Object.keys(i.eventsListeners).forEach((a) => {
          i.off(a)
        }),
        t !== !1 && ((i.el.swiper = null), yc(i)),
        (i.destroyed = !0)),
      null
    )
  }
  static extendDefaults(t) {
    we(Kn, t)
  }
  static get extendedDefaults() {
    return Kn
  }
  static get defaults() {
    return Ls
  }
  static installModule(t) {
    Ue.prototype.__modules__ || (Ue.prototype.__modules__ = [])
    const n = Ue.prototype.__modules__
    typeof t == 'function' && n.indexOf(t) < 0 && n.push(t)
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => Ue.installModule(n)), Ue)
      : (Ue.installModule(t), Ue)
  }
}
Object.keys(Wn).forEach((e) => {
  Object.keys(Wn[e]).forEach((t) => {
    Kt.prototype[t] = Wn[e][t]
  })
})
Kt.use([Ic, Bc])
function Fr(e, t, n, i) {
  return (
    e.params.createElements &&
      Object.keys(i).forEach((s) => {
        if (!n[s] && n.auto === !0) {
          let r = je(e.el, `.${i[s]}`)[0]
          r || ((r = Br('div', i[s])), (r.className = i[s]), e.el.append(r)), (n[s] = r), (t[s] = r)
        }
      }),
    n
  )
}
function Fu({ swiper: e, extendParams: t, on: n, emit: i }) {
  t({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
      lockClass: 'swiper-button-lock',
      navigationDisabledClass: 'swiper-navigation-disabled',
    },
  }),
    (e.navigation = { nextEl: null, prevEl: null })
  const s = (y) => (Array.isArray(y) || (y = [y].filter((v) => !!v)), y)
  function r(y) {
    let v
    return y && typeof y == 'string' && e.isElement && ((v = e.el.shadowRoot.querySelector(y)), v)
      ? v
      : (y &&
          (typeof y == 'string' && (v = [...document.querySelectorAll(y)]),
          e.params.uniqueNavElements &&
            typeof y == 'string' &&
            v.length > 1 &&
            e.el.querySelectorAll(y).length === 1 &&
            (v = e.el.querySelector(y))),
        y && !v ? y : v)
  }
  function o(y, v) {
    const T = e.params.navigation
    ;(y = s(y)),
      y.forEach((p) => {
        p &&
          (p.classList[v ? 'add' : 'remove'](...T.disabledClass.split(' ')),
          p.tagName === 'BUTTON' && (p.disabled = v),
          e.params.watchOverflow &&
            e.enabled &&
            p.classList[e.isLocked ? 'add' : 'remove'](T.lockClass))
      })
  }
  function l() {
    const { nextEl: y, prevEl: v } = e.navigation
    if (e.params.loop) {
      o(v, !1), o(y, !1)
      return
    }
    o(v, e.isBeginning && !e.params.rewind), o(y, e.isEnd && !e.params.rewind)
  }
  function a(y) {
    y.preventDefault(),
      !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), i('navigationPrev'))
  }
  function c(y) {
    y.preventDefault(),
      !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), i('navigationNext'))
  }
  function u() {
    const y = e.params.navigation
    if (
      ((e.params.navigation = Fr(e, e.originalParams.navigation, e.params.navigation, {
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev',
      })),
      !(y.nextEl || y.prevEl))
    )
      return
    let v = r(y.nextEl),
      T = r(y.prevEl)
    Object.assign(e.navigation, { nextEl: v, prevEl: T }), (v = s(v)), (T = s(T))
    const p = (_, b) => {
      _ && _.addEventListener('click', b === 'next' ? c : a),
        !e.enabled && _ && _.classList.add(...y.lockClass.split(' '))
    }
    v.forEach((_) => p(_, 'next')), T.forEach((_) => p(_, 'prev'))
  }
  function d() {
    let { nextEl: y, prevEl: v } = e.navigation
    ;(y = s(y)), (v = s(v))
    const T = (p, _) => {
      p.removeEventListener('click', _ === 'next' ? c : a),
        p.classList.remove(...e.params.navigation.disabledClass.split(' '))
    }
    y.forEach((p) => T(p, 'next')), v.forEach((p) => T(p, 'prev'))
  }
  n('init', () => {
    e.params.navigation.enabled === !1 ? m() : (u(), l())
  }),
    n('toEdge fromEdge lock unlock', () => {
      l()
    }),
    n('destroy', () => {
      d()
    }),
    n('enable disable', () => {
      let { nextEl: y, prevEl: v } = e.navigation
      ;(y = s(y)),
        (v = s(v)),
        [...y, ...v]
          .filter((T) => !!T)
          .forEach((T) => T.classList[e.enabled ? 'remove' : 'add'](e.params.navigation.lockClass))
    }),
    n('click', (y, v) => {
      let { nextEl: T, prevEl: p } = e.navigation
      ;(T = s(T)), (p = s(p))
      const _ = v.target
      if (e.params.navigation.hideOnClick && !p.includes(_) && !T.includes(_)) {
        if (
          e.pagination &&
          e.params.pagination &&
          e.params.pagination.clickable &&
          (e.pagination.el === _ || e.pagination.el.contains(_))
        )
          return
        let b
        T.length
          ? (b = T[0].classList.contains(e.params.navigation.hiddenClass))
          : p.length && (b = p[0].classList.contains(e.params.navigation.hiddenClass)),
          i(b === !0 ? 'navigationShow' : 'navigationHide'),
          [...T, ...p]
            .filter((A) => !!A)
            .forEach((A) => A.classList.toggle(e.params.navigation.hiddenClass))
      }
    })
  const h = () => {
      e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(' ')), u(), l()
    },
    m = () => {
      e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(' ')), d()
    }
  Object.assign(e.navigation, { enable: h, disable: m, update: l, init: u, destroy: d })
}
function Ft(e = '') {
  return `.${e
    .trim()
    .replace(/([\.:!+\/])/g, '\\$1')
    .replace(/ /g, '.')}`
}
function Hu({ swiper: e, extendParams: t, on: n, emit: i }) {
  const s = 'swiper-pagination'
  t({
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: 'bullets',
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (p) => p,
      formatFractionTotal: (p) => p,
      bulletClass: `${s}-bullet`,
      bulletActiveClass: `${s}-bullet-active`,
      modifierClass: `${s}-`,
      currentClass: `${s}-current`,
      totalClass: `${s}-total`,
      hiddenClass: `${s}-hidden`,
      progressbarFillClass: `${s}-progressbar-fill`,
      progressbarOppositeClass: `${s}-progressbar-opposite`,
      clickableClass: `${s}-clickable`,
      lockClass: `${s}-lock`,
      horizontalClass: `${s}-horizontal`,
      verticalClass: `${s}-vertical`,
      paginationDisabledClass: `${s}-disabled`,
    },
  }),
    (e.pagination = { el: null, bullets: [] })
  let r,
    o = 0
  const l = (p) => (Array.isArray(p) || (p = [p].filter((_) => !!_)), p)
  function a() {
    return (
      !e.params.pagination.el ||
      !e.pagination.el ||
      (Array.isArray(e.pagination.el) && e.pagination.el.length === 0)
    )
  }
  function c(p, _) {
    const { bulletActiveClass: b } = e.params.pagination
    p &&
      ((p = p[`${_ === 'prev' ? 'previous' : 'next'}ElementSibling`]),
      p &&
        (p.classList.add(`${b}-${_}`),
        (p = p[`${_ === 'prev' ? 'previous' : 'next'}ElementSibling`]),
        p && p.classList.add(`${b}-${_}-${_}`)))
  }
  function u(p) {
    const _ = p.target.closest(Ft(e.params.pagination.bulletClass))
    if (!_) return
    p.preventDefault()
    const b = mn(_) * e.params.slidesPerGroup
    if (e.params.loop) {
      if (e.realIndex === b) return
      ;(b < e.loopedSlides || b > e.slides.length - e.loopedSlides) &&
        e.loopFix({
          direction: b < e.loopedSlides ? 'prev' : 'next',
          activeSlideIndex: b,
          slideTo: !1,
        }),
        e.slideToLoop(b)
    } else e.slideTo(b)
  }
  function d() {
    const p = e.rtl,
      _ = e.params.pagination
    if (a()) return
    let b = e.pagination.el
    b = l(b)
    let A
    const P = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
      k = e.params.loop ? Math.ceil(P / e.params.slidesPerGroup) : e.snapGrid.length
    if (
      (e.params.loop
        ? (A =
            e.params.slidesPerGroup > 1
              ? Math.floor(e.realIndex / e.params.slidesPerGroup)
              : e.realIndex)
        : typeof e.snapIndex < 'u'
        ? (A = e.snapIndex)
        : (A = e.activeIndex || 0),
      _.type === 'bullets' && e.pagination.bullets && e.pagination.bullets.length > 0)
    ) {
      const z = e.pagination.bullets
      let w, B, U
      if (
        (_.dynamicBullets &&
          ((r = mi(z[0], e.isHorizontal() ? 'width' : 'height', !0)),
          b.forEach((M) => {
            M.style[e.isHorizontal() ? 'width' : 'height'] = `${r * (_.dynamicMainBullets + 4)}px`
          }),
          _.dynamicMainBullets > 1 &&
            e.previousIndex !== void 0 &&
            ((o += A - (e.previousIndex || 0)),
            o > _.dynamicMainBullets - 1 ? (o = _.dynamicMainBullets - 1) : o < 0 && (o = 0)),
          (w = Math.max(A - o, 0)),
          (B = w + (Math.min(z.length, _.dynamicMainBullets) - 1)),
          (U = (B + w) / 2)),
        z.forEach((M) => {
          const N = [
            ...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(
              (G) => `${_.bulletActiveClass}${G}`,
            ),
          ]
            .map((G) => (typeof G == 'string' && G.includes(' ') ? G.split(' ') : G))
            .flat()
          M.classList.remove(...N)
        }),
        b.length > 1)
      )
        z.forEach((M) => {
          const N = mn(M)
          N === A && M.classList.add(..._.bulletActiveClass.split(' ')),
            _.dynamicBullets &&
              (N >= w && N <= B && M.classList.add(...`${_.bulletActiveClass}-main`.split(' ')),
              N === w && c(M, 'prev'),
              N === B && c(M, 'next'))
        })
      else {
        const M = z[A]
        if ((M && M.classList.add(..._.bulletActiveClass.split(' ')), _.dynamicBullets)) {
          const N = z[w],
            G = z[B]
          for (let oe = w; oe <= B; oe += 1)
            z[oe] && z[oe].classList.add(...`${_.bulletActiveClass}-main`.split(' '))
          c(N, 'prev'), c(G, 'next')
        }
      }
      if (_.dynamicBullets) {
        const M = Math.min(z.length, _.dynamicMainBullets + 4),
          N = (r * M - r) / 2 - U * r,
          G = p ? 'right' : 'left'
        z.forEach((oe) => {
          oe.style[e.isHorizontal() ? G : 'top'] = `${N}px`
        })
      }
    }
    b.forEach((z, w) => {
      if (
        (_.type === 'fraction' &&
          (z.querySelectorAll(Ft(_.currentClass)).forEach((B) => {
            B.textContent = _.formatFractionCurrent(A + 1)
          }),
          z.querySelectorAll(Ft(_.totalClass)).forEach((B) => {
            B.textContent = _.formatFractionTotal(k)
          })),
        _.type === 'progressbar')
      ) {
        let B
        _.progressbarOpposite
          ? (B = e.isHorizontal() ? 'vertical' : 'horizontal')
          : (B = e.isHorizontal() ? 'horizontal' : 'vertical')
        const U = (A + 1) / k
        let M = 1,
          N = 1
        B === 'horizontal' ? (M = U) : (N = U),
          z.querySelectorAll(Ft(_.progressbarFillClass)).forEach((G) => {
            ;(G.style.transform = `translate3d(0,0,0) scaleX(${M}) scaleY(${N})`),
              (G.style.transitionDuration = `${e.params.speed}ms`)
          })
      }
      _.type === 'custom' && _.renderCustom
        ? ((z.innerHTML = _.renderCustom(e, A + 1, k)), w === 0 && i('paginationRender', z))
        : (w === 0 && i('paginationRender', z), i('paginationUpdate', z)),
        e.params.watchOverflow &&
          e.enabled &&
          z.classList[e.isLocked ? 'add' : 'remove'](_.lockClass)
    })
  }
  function h() {
    const p = e.params.pagination
    if (a()) return
    const _ = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length
    let b = e.pagination.el
    b = l(b)
    let A = ''
    if (p.type === 'bullets') {
      let P = e.params.loop ? Math.ceil(_ / e.params.slidesPerGroup) : e.snapGrid.length
      e.params.freeMode && e.params.freeMode.enabled && P > _ && (P = _)
      for (let k = 0; k < P; k += 1)
        p.renderBullet
          ? (A += p.renderBullet.call(e, k, p.bulletClass))
          : (A += `<${p.bulletElement} class="${p.bulletClass}"></${p.bulletElement}>`)
    }
    p.type === 'fraction' &&
      (p.renderFraction
        ? (A = p.renderFraction.call(e, p.currentClass, p.totalClass))
        : (A = `<span class="${p.currentClass}"></span> / <span class="${p.totalClass}"></span>`)),
      p.type === 'progressbar' &&
        (p.renderProgressbar
          ? (A = p.renderProgressbar.call(e, p.progressbarFillClass))
          : (A = `<span class="${p.progressbarFillClass}"></span>`)),
      (e.pagination.bullets = []),
      b.forEach((P) => {
        p.type !== 'custom' && (P.innerHTML = A || ''),
          p.type === 'bullets' &&
            e.pagination.bullets.push(...P.querySelectorAll(Ft(p.bulletClass)))
      }),
      p.type !== 'custom' && i('paginationRender', b[0])
  }
  function m() {
    e.params.pagination = Fr(e, e.originalParams.pagination, e.params.pagination, {
      el: 'swiper-pagination',
    })
    const p = e.params.pagination
    if (!p.el) return
    let _
    typeof p.el == 'string' && e.isElement && (_ = e.el.shadowRoot.querySelector(p.el)),
      !_ && typeof p.el == 'string' && (_ = [...document.querySelectorAll(p.el)]),
      _ || (_ = p.el),
      !(!_ || _.length === 0) &&
        (e.params.uniqueNavElements &&
          typeof p.el == 'string' &&
          Array.isArray(_) &&
          _.length > 1 &&
          ((_ = [...e.el.querySelectorAll(p.el)]),
          _.length > 1 && (_ = _.filter((b) => Pr(b, '.swiper')[0] === e.el)[0])),
        Array.isArray(_) && _.length === 1 && (_ = _[0]),
        Object.assign(e.pagination, { el: _ }),
        (_ = l(_)),
        _.forEach((b) => {
          p.type === 'bullets' && p.clickable && b.classList.add(p.clickableClass),
            b.classList.add(p.modifierClass + p.type),
            b.classList.add(e.isHorizontal() ? p.horizontalClass : p.verticalClass),
            p.type === 'bullets' &&
              p.dynamicBullets &&
              (b.classList.add(`${p.modifierClass}${p.type}-dynamic`),
              (o = 0),
              p.dynamicMainBullets < 1 && (p.dynamicMainBullets = 1)),
            p.type === 'progressbar' &&
              p.progressbarOpposite &&
              b.classList.add(p.progressbarOppositeClass),
            p.clickable && b.addEventListener('click', u),
            e.enabled || b.classList.add(p.lockClass)
        }))
  }
  function y() {
    const p = e.params.pagination
    if (a()) return
    let _ = e.pagination.el
    _ &&
      ((_ = l(_)),
      _.forEach((b) => {
        b.classList.remove(p.hiddenClass),
          b.classList.remove(p.modifierClass + p.type),
          b.classList.remove(e.isHorizontal() ? p.horizontalClass : p.verticalClass),
          p.clickable && b.removeEventListener('click', u)
      })),
      e.pagination.bullets &&
        e.pagination.bullets.forEach((b) => b.classList.remove(...p.bulletActiveClass.split(' ')))
  }
  n('init', () => {
    e.params.pagination.enabled === !1 ? T() : (m(), h(), d())
  }),
    n('activeIndexChange', () => {
      typeof e.snapIndex > 'u' && d()
    }),
    n('snapIndexChange', () => {
      d()
    }),
    n('snapGridLengthChange', () => {
      h(), d()
    }),
    n('destroy', () => {
      y()
    }),
    n('enable disable', () => {
      let { el: p } = e.pagination
      p &&
        ((p = l(p)),
        p.forEach((_) => _.classList[e.enabled ? 'remove' : 'add'](e.params.pagination.lockClass)))
    }),
    n('lock unlock', () => {
      d()
    }),
    n('click', (p, _) => {
      const b = _.target
      let { el: A } = e.pagination
      if (
        (Array.isArray(A) || (A = [A].filter((P) => !!P)),
        e.params.pagination.el &&
          e.params.pagination.hideOnClick &&
          A &&
          A.length > 0 &&
          !b.classList.contains(e.params.pagination.bulletClass))
      ) {
        if (
          e.navigation &&
          ((e.navigation.nextEl && b === e.navigation.nextEl) ||
            (e.navigation.prevEl && b === e.navigation.prevEl))
        )
          return
        const P = A[0].classList.contains(e.params.pagination.hiddenClass)
        i(P === !0 ? 'paginationShow' : 'paginationHide'),
          A.forEach((k) => k.classList.toggle(e.params.pagination.hiddenClass))
      }
    })
  const v = () => {
      e.el.classList.remove(e.params.pagination.paginationDisabledClass)
      let { el: p } = e.pagination
      p &&
        ((p = l(p)),
        p.forEach((_) => _.classList.remove(e.params.pagination.paginationDisabledClass))),
        m(),
        h(),
        d()
    },
    T = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass)
      let { el: p } = e.pagination
      p &&
        ((p = l(p)),
        p.forEach((_) => _.classList.add(e.params.pagination.paginationDisabledClass))),
        y()
    }
  Object.assign(e.pagination, { enable: v, disable: T, render: h, update: d, init: m, destroy: y })
}
function ht(e) {
  return (
    typeof e == 'object' &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === 'Object'
  )
}
function et(e, t) {
  const n = ['__proto__', 'constructor', 'prototype']
  Object.keys(t)
    .filter((i) => n.indexOf(i) < 0)
    .forEach((i) => {
      typeof e[i] > 'u'
        ? (e[i] = t[i])
        : ht(t[i]) && ht(e[i]) && Object.keys(t[i]).length > 0
        ? t[i].__swiper__
          ? (e[i] = t[i])
          : et(e[i], t[i])
        : (e[i] = t[i])
    })
}
function Hr(e = {}) {
  return e.navigation && typeof e.navigation.nextEl > 'u' && typeof e.navigation.prevEl > 'u'
}
function Dr(e = {}) {
  return e.pagination && typeof e.pagination.el > 'u'
}
function Gr(e = {}) {
  return e.scrollbar && typeof e.scrollbar.el > 'u'
}
function zr(e = '') {
  const t = e
      .split(' ')
      .map((i) => i.trim())
      .filter((i) => !!i),
    n = []
  return (
    t.forEach((i) => {
      n.indexOf(i) < 0 && n.push(i)
    }),
    n.join(' ')
  )
}
function Du(e = '') {
  return e ? (e.includes('swiper-wrapper') ? e : `swiper-wrapper ${e}`) : 'swiper-wrapper'
}
const jr = [
  'eventsPrefix',
  'modules',
  'init',
  '_direction',
  'oneWayMovement',
  'touchEventsTarget',
  'initialSlide',
  '_speed',
  'cssMode',
  'updateOnWindowResize',
  'resizeObserver',
  'nested',
  'focusableElements',
  '_enabled',
  '_width',
  '_height',
  'preventInteractionOnTransition',
  'userAgent',
  'url',
  '_edgeSwipeDetection',
  '_edgeSwipeThreshold',
  '_freeMode',
  '_autoHeight',
  'setWrapperSize',
  'virtualTranslate',
  '_effect',
  'breakpoints',
  '_spaceBetween',
  '_slidesPerView',
  'maxBackfaceHiddenSlides',
  '_grid',
  '_slidesPerGroup',
  '_slidesPerGroupSkip',
  '_slidesPerGroupAuto',
  '_centeredSlides',
  '_centeredSlidesBounds',
  '_slidesOffsetBefore',
  '_slidesOffsetAfter',
  'normalizeSlideIndex',
  '_centerInsufficientSlides',
  '_watchOverflow',
  'roundLengths',
  'touchRatio',
  'touchAngle',
  'simulateTouch',
  '_shortSwipes',
  '_longSwipes',
  'longSwipesRatio',
  'longSwipesMs',
  '_followFinger',
  'allowTouchMove',
  '_threshold',
  'touchMoveStopPropagation',
  'touchStartPreventDefault',
  'touchStartForcePreventDefault',
  'touchReleaseOnEdges',
  'uniqueNavElements',
  '_resistance',
  '_resistanceRatio',
  '_watchSlidesProgress',
  '_grabCursor',
  'preventClicks',
  'preventClicksPropagation',
  '_slideToClickedSlide',
  '_loop',
  'loopedSlides',
  'loopPreventsSliding',
  '_rewind',
  '_allowSlidePrev',
  '_allowSlideNext',
  '_swipeHandler',
  '_noSwiping',
  'noSwipingClass',
  'noSwipingSelector',
  'passiveListeners',
  'containerModifierClass',
  'slideClass',
  'slideActiveClass',
  'slideVisibleClass',
  'slideNextClass',
  'slidePrevClass',
  'wrapperClass',
  'lazyPreloaderClass',
  'runCallbacksOnInit',
  'observer',
  'observeParents',
  'observeSlideChildren',
  'a11y',
  '_autoplay',
  '_controller',
  'coverflowEffect',
  'cubeEffect',
  'fadeEffect',
  'flipEffect',
  'creativeEffect',
  'cardsEffect',
  'hashNavigation',
  'history',
  'keyboard',
  'mousewheel',
  '_navigation',
  '_pagination',
  'parallax',
  '_scrollbar',
  '_thumbs',
  'virtual',
  'zoom',
  'control',
  'injectStyles',
  'injectStylesUrls',
]
function Os(e = {}, t = !0) {
  const n = { on: {} },
    i = {},
    s = {}
  et(n, Kt.defaults), et(n, Kt.extendedDefaults), (n._emitClasses = !0), (n.init = !1)
  const r = {},
    o = jr.map((a) => a.replace(/_/, '')),
    l = Object.assign({}, e)
  return (
    Object.keys(l).forEach((a) => {
      typeof e[a] > 'u' ||
        (o.indexOf(a) >= 0
          ? ht(e[a])
            ? ((n[a] = {}), (s[a] = {}), et(n[a], e[a]), et(s[a], e[a]))
            : ((n[a] = e[a]), (s[a] = e[a]))
          : a.search(/on[A-Z]/) === 0 && typeof e[a] == 'function'
          ? t
            ? (i[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
            : (n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
          : (r[a] = e[a]))
    }),
    ['navigation', 'pagination', 'scrollbar'].forEach((a) => {
      n[a] === !0 && (n[a] = {}), n[a] === !1 && delete n[a]
    }),
    { params: n, passedParams: s, rest: r, events: i }
  )
}
function Gu({ el: e, nextEl: t, prevEl: n, paginationEl: i, scrollbarEl: s, swiper: r }, o) {
  Hr(o) &&
    t &&
    n &&
    ((r.params.navigation.nextEl = t),
    (r.originalParams.navigation.nextEl = t),
    (r.params.navigation.prevEl = n),
    (r.originalParams.navigation.prevEl = n)),
    Dr(o) && i && ((r.params.pagination.el = i), (r.originalParams.pagination.el = i)),
    Gr(o) && s && ((r.params.scrollbar.el = s), (r.originalParams.scrollbar.el = s)),
    r.init(e)
}
function zu(e, t, n, i, s) {
  const r = []
  if (!t) return r
  const o = (a) => {
    r.indexOf(a) < 0 && r.push(a)
  }
  if (n && i) {
    const a = i.map(s),
      c = n.map(s)
    a.join('') !== c.join('') && o('children'), i.length !== n.length && o('children')
  }
  return (
    jr
      .filter((a) => a[0] === '_')
      .map((a) => a.replace(/_/, ''))
      .forEach((a) => {
        if (a in e && a in t)
          if (ht(e[a]) && ht(t[a])) {
            const c = Object.keys(e[a]),
              u = Object.keys(t[a])
            c.length !== u.length
              ? o(a)
              : (c.forEach((d) => {
                  e[a][d] !== t[a][d] && o(a)
                }),
                u.forEach((d) => {
                  e[a][d] !== t[a][d] && o(a)
                }))
          } else e[a] !== t[a] && o(a)
      }),
    r
  )
}
function Qn(e, t, n) {
  e === void 0 && (e = {})
  const i = [],
    s = { 'container-start': [], 'container-end': [], 'wrapper-start': [], 'wrapper-end': [] },
    r = (o, l) => {
      Array.isArray(o) &&
        o.forEach((a) => {
          const c = typeof a.type == 'symbol'
          l === 'default' && (l = 'container-end'),
            c && a.children
              ? r(a.children, 'default')
              : a.type && (a.type.name === 'SwiperSlide' || a.type.name === 'AsyncComponentWrapper')
              ? i.push(a)
              : s[l] && s[l].push(a)
        })
    }
  return (
    Object.keys(e).forEach((o) => {
      if (typeof e[o] != 'function') return
      const l = e[o]()
      r(l, o)
    }),
    (n.value = t.value),
    (t.value = i),
    { slides: i, slots: s }
  )
}
function ju({
  swiper: e,
  slides: t,
  passedParams: n,
  changedParams: i,
  nextEl: s,
  prevEl: r,
  scrollbarEl: o,
  paginationEl: l,
}) {
  const a = i.filter((w) => w !== 'children' && w !== 'direction' && w !== 'wrapperClass'),
    { params: c, pagination: u, navigation: d, scrollbar: h, virtual: m, thumbs: y } = e
  let v, T, p, _, b, A, P, k
  i.includes('thumbs') && n.thumbs && n.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (v = !0),
    i.includes('controller') &&
      n.controller &&
      n.controller.control &&
      c.controller &&
      !c.controller.control &&
      (T = !0),
    i.includes('pagination') &&
      n.pagination &&
      (n.pagination.el || l) &&
      (c.pagination || c.pagination === !1) &&
      u &&
      !u.el &&
      (p = !0),
    i.includes('scrollbar') &&
      n.scrollbar &&
      (n.scrollbar.el || o) &&
      (c.scrollbar || c.scrollbar === !1) &&
      h &&
      !h.el &&
      (_ = !0),
    i.includes('navigation') &&
      n.navigation &&
      (n.navigation.prevEl || r) &&
      (n.navigation.nextEl || s) &&
      (c.navigation || c.navigation === !1) &&
      d &&
      !d.prevEl &&
      !d.nextEl &&
      (b = !0)
  const z = (w) => {
    e[w] &&
      (e[w].destroy(),
      w === 'navigation'
        ? (e.isElement && (e[w].prevEl.remove(), e[w].nextEl.remove()),
          (c[w].prevEl = void 0),
          (c[w].nextEl = void 0),
          (e[w].prevEl = void 0),
          (e[w].nextEl = void 0))
        : (e.isElement && e[w].el.remove(), (c[w].el = void 0), (e[w].el = void 0)))
  }
  i.includes('loop') &&
    e.isElement &&
    (c.loop && !n.loop ? (A = !0) : !c.loop && n.loop ? (P = !0) : (k = !0)),
    a.forEach((w) => {
      if (ht(c[w]) && ht(n[w])) et(c[w], n[w])
      else {
        const B = n[w]
        ;(B === !0 || B === !1) && (w === 'navigation' || w === 'pagination' || w === 'scrollbar')
          ? B === !1 && z(w)
          : (c[w] = n[w])
      }
    }),
    a.includes('controller') &&
      !T &&
      e.controller &&
      e.controller.control &&
      c.controller &&
      c.controller.control &&
      (e.controller.control = c.controller.control),
    i.includes('children') && t && m && c.virtual.enabled && ((m.slides = t), m.update(!0)),
    i.includes('children') && t && c.loop && (k = !0),
    v && y.init() && y.update(!0),
    T && (e.controller.control = c.controller.control),
    p &&
      (e.isElement &&
        (!l || typeof l == 'string') &&
        ((l = document.createElement('div')),
        l.classList.add('swiper-pagination'),
        e.el.shadowEl.appendChild(l)),
      l && (c.pagination.el = l),
      u.init(),
      u.render(),
      u.update()),
    _ &&
      (e.isElement &&
        (!o || typeof o == 'string') &&
        ((o = document.createElement('div')),
        o.classList.add('swiper-scrollbar'),
        e.el.shadowEl.appendChild(o)),
      o && (c.scrollbar.el = o),
      h.init(),
      h.updateSize(),
      h.setTranslate()),
    b &&
      (e.isElement &&
        ((!s || typeof s == 'string') &&
          ((s = document.createElement('div')),
          s.classList.add('swiper-button-next'),
          e.el.shadowEl.appendChild(s)),
        (!r || typeof r == 'string') &&
          ((r = document.createElement('div')),
          r.classList.add('swiper-button-prev'),
          e.el.shadowEl.appendChild(r))),
      s && (c.navigation.nextEl = s),
      r && (c.navigation.prevEl = r),
      d.init(),
      d.update()),
    i.includes('allowSlideNext') && (e.allowSlideNext = n.allowSlideNext),
    i.includes('allowSlidePrev') && (e.allowSlidePrev = n.allowSlidePrev),
    i.includes('direction') && e.changeDirection(n.direction, !1),
    (A || k) && e.loopDestroy(),
    (P || k) && e.loopCreate(),
    e.update()
}
function $u(e, t, n) {
  if (!n) return null
  const i = (u) => {
      let d = u
      return u < 0 ? (d = t.length + u) : d >= t.length && (d = d - t.length), d
    },
    s = e.value.isHorizontal()
      ? { [e.value.rtlTranslate ? 'right' : 'left']: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: r, to: o } = n,
    l = e.value.params.loop ? -t.length : 0,
    a = e.value.params.loop ? t.length * 2 : t.length,
    c = []
  for (let u = l; u < a; u += 1) u >= r && u <= o && c.push(t[i(u)])
  return c.map(
    (u) => (
      u.props || (u.props = {}),
      u.props.style || (u.props.style = {}),
      (u.props.swiperRef = e),
      (u.props.style = s),
      Oe(u.type, { ...u.props }, u.children)
    ),
  )
}
const Vu = (e) => {
    !e ||
      e.destroyed ||
      !e.params.virtual ||
      (e.params.virtual && !e.params.virtual.enabled) ||
      (e.updateSlides(),
      e.updateProgress(),
      e.updateSlidesClasses(),
      e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
  },
  qu = {
    name: 'Swiper',
    props: {
      tag: { type: String, default: 'div' },
      wrapperTag: { type: String, default: 'div' },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      oneWayMovement: { type: Boolean, default: void 0 },
      touchEventsTarget: { type: String, default: void 0 },
      initialSlide: { type: Number, default: void 0 },
      speed: { type: Number, default: void 0 },
      cssMode: { type: Boolean, default: void 0 },
      updateOnWindowResize: { type: Boolean, default: void 0 },
      resizeObserver: { type: Boolean, default: void 0 },
      nested: { type: Boolean, default: void 0 },
      focusableElements: { type: String, default: void 0 },
      width: { type: Number, default: void 0 },
      height: { type: Number, default: void 0 },
      preventInteractionOnTransition: { type: Boolean, default: void 0 },
      userAgent: { type: String, default: void 0 },
      url: { type: String, default: void 0 },
      edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
      edgeSwipeThreshold: { type: Number, default: void 0 },
      autoHeight: { type: Boolean, default: void 0 },
      setWrapperSize: { type: Boolean, default: void 0 },
      virtualTranslate: { type: Boolean, default: void 0 },
      effect: { type: String, default: void 0 },
      breakpoints: { type: Object, default: void 0 },
      spaceBetween: { type: [Number, String], default: void 0 },
      slidesPerView: { type: [Number, String], default: void 0 },
      maxBackfaceHiddenSlides: { type: Number, default: void 0 },
      slidesPerGroup: { type: Number, default: void 0 },
      slidesPerGroupSkip: { type: Number, default: void 0 },
      slidesPerGroupAuto: { type: Boolean, default: void 0 },
      centeredSlides: { type: Boolean, default: void 0 },
      centeredSlidesBounds: { type: Boolean, default: void 0 },
      slidesOffsetBefore: { type: Number, default: void 0 },
      slidesOffsetAfter: { type: Number, default: void 0 },
      normalizeSlideIndex: { type: Boolean, default: void 0 },
      centerInsufficientSlides: { type: Boolean, default: void 0 },
      watchOverflow: { type: Boolean, default: void 0 },
      roundLengths: { type: Boolean, default: void 0 },
      touchRatio: { type: Number, default: void 0 },
      touchAngle: { type: Number, default: void 0 },
      simulateTouch: { type: Boolean, default: void 0 },
      shortSwipes: { type: Boolean, default: void 0 },
      longSwipes: { type: Boolean, default: void 0 },
      longSwipesRatio: { type: Number, default: void 0 },
      longSwipesMs: { type: Number, default: void 0 },
      followFinger: { type: Boolean, default: void 0 },
      allowTouchMove: { type: Boolean, default: void 0 },
      threshold: { type: Number, default: void 0 },
      touchMoveStopPropagation: { type: Boolean, default: void 0 },
      touchStartPreventDefault: { type: Boolean, default: void 0 },
      touchStartForcePreventDefault: { type: Boolean, default: void 0 },
      touchReleaseOnEdges: { type: Boolean, default: void 0 },
      uniqueNavElements: { type: Boolean, default: void 0 },
      resistance: { type: Boolean, default: void 0 },
      resistanceRatio: { type: Number, default: void 0 },
      watchSlidesProgress: { type: Boolean, default: void 0 },
      grabCursor: { type: Boolean, default: void 0 },
      preventClicks: { type: Boolean, default: void 0 },
      preventClicksPropagation: { type: Boolean, default: void 0 },
      slideToClickedSlide: { type: Boolean, default: void 0 },
      loop: { type: Boolean, default: void 0 },
      loopedSlides: { type: Number, default: void 0 },
      loopPreventsSliding: { type: Boolean, default: void 0 },
      rewind: { type: Boolean, default: void 0 },
      allowSlidePrev: { type: Boolean, default: void 0 },
      allowSlideNext: { type: Boolean, default: void 0 },
      swipeHandler: { type: Boolean, default: void 0 },
      noSwiping: { type: Boolean, default: void 0 },
      noSwipingClass: { type: String, default: void 0 },
      noSwipingSelector: { type: String, default: void 0 },
      passiveListeners: { type: Boolean, default: void 0 },
      containerModifierClass: { type: String, default: void 0 },
      slideClass: { type: String, default: void 0 },
      slideActiveClass: { type: String, default: void 0 },
      slideVisibleClass: { type: String, default: void 0 },
      slideNextClass: { type: String, default: void 0 },
      slidePrevClass: { type: String, default: void 0 },
      wrapperClass: { type: String, default: void 0 },
      lazyPreloaderClass: { type: String, default: void 0 },
      runCallbacksOnInit: { type: Boolean, default: void 0 },
      observer: { type: Boolean, default: void 0 },
      observeParents: { type: Boolean, default: void 0 },
      observeSlideChildren: { type: Boolean, default: void 0 },
      a11y: { type: [Boolean, Object], default: void 0 },
      autoplay: { type: [Boolean, Object], default: void 0 },
      controller: { type: Object, default: void 0 },
      coverflowEffect: { type: Object, default: void 0 },
      cubeEffect: { type: Object, default: void 0 },
      fadeEffect: { type: Object, default: void 0 },
      flipEffect: { type: Object, default: void 0 },
      creativeEffect: { type: Object, default: void 0 },
      cardsEffect: { type: Object, default: void 0 },
      hashNavigation: { type: [Boolean, Object], default: void 0 },
      history: { type: [Boolean, Object], default: void 0 },
      keyboard: { type: [Boolean, Object], default: void 0 },
      mousewheel: { type: [Boolean, Object], default: void 0 },
      navigation: { type: [Boolean, Object], default: void 0 },
      pagination: { type: [Boolean, Object], default: void 0 },
      parallax: { type: [Boolean, Object], default: void 0 },
      scrollbar: { type: [Boolean, Object], default: void 0 },
      thumbs: { type: Object, default: void 0 },
      virtual: { type: [Boolean, Object], default: void 0 },
      zoom: { type: [Boolean, Object], default: void 0 },
      grid: { type: [Object], default: void 0 },
      freeMode: { type: [Boolean, Object], default: void 0 },
      enabled: { type: Boolean, default: void 0 },
    },
    emits: [
      '_beforeBreakpoint',
      '_containerClasses',
      '_slideClass',
      '_slideClasses',
      '_swiper',
      '_freeModeNoMomentumRelease',
      'activeIndexChange',
      'afterInit',
      'autoplay',
      'autoplayStart',
      'autoplayStop',
      'autoplayPause',
      'autoplayResume',
      'autoplayTimeLeft',
      'beforeDestroy',
      'beforeInit',
      'beforeLoopFix',
      'beforeResize',
      'beforeSlideChangeStart',
      'beforeTransitionStart',
      'breakpoint',
      'changeDirection',
      'click',
      'disable',
      'doubleTap',
      'doubleClick',
      'destroy',
      'enable',
      'fromEdge',
      'hashChange',
      'hashSet',
      'init',
      'keyPress',
      'lock',
      'loopFix',
      'momentumBounce',
      'navigationHide',
      'navigationShow',
      'navigationPrev',
      'navigationNext',
      'observerUpdate',
      'orientationchange',
      'paginationHide',
      'paginationRender',
      'paginationShow',
      'paginationUpdate',
      'progress',
      'reachBeginning',
      'reachEnd',
      'realIndexChange',
      'resize',
      'scroll',
      'scrollbarDragEnd',
      'scrollbarDragMove',
      'scrollbarDragStart',
      'setTransition',
      'setTranslate',
      'slideChange',
      'slideChangeTransitionEnd',
      'slideChangeTransitionStart',
      'slideNextTransitionEnd',
      'slideNextTransitionStart',
      'slidePrevTransitionEnd',
      'slidePrevTransitionStart',
      'slideResetTransitionStart',
      'slideResetTransitionEnd',
      'sliderMove',
      'sliderFirstMove',
      'slidesLengthChange',
      'slidesGridLengthChange',
      'snapGridLengthChange',
      'snapIndexChange',
      'swiper',
      'tap',
      'toEdge',
      'touchEnd',
      'touchMove',
      'touchMoveOpposite',
      'touchStart',
      'transitionEnd',
      'transitionStart',
      'unlock',
      'update',
      'virtualUpdate',
      'zoomChange',
    ],
    setup(e, t) {
      let { slots: n, emit: i } = t
      const { tag: s, wrapperTag: r } = e,
        o = ve('swiper'),
        l = ve(null),
        a = ve(!1),
        c = ve(!1),
        u = ve(null),
        d = ve(null),
        h = ve(null),
        m = { value: [] },
        y = { value: [] },
        v = ve(null),
        T = ve(null),
        p = ve(null),
        _ = ve(null),
        { params: b, passedParams: A } = Os(e, !1)
      Qn(n, m, y), (h.value = A), (y.value = m.value)
      const P = () => {
        Qn(n, m, y), (a.value = !0)
      }
      ;(b.onAny = function (w) {
        for (var B = arguments.length, U = new Array(B > 1 ? B - 1 : 0), M = 1; M < B; M++)
          U[M - 1] = arguments[M]
        i(w, ...U)
      }),
        Object.assign(b.on, {
          _beforeBreakpoint: P,
          _containerClasses(w, B) {
            o.value = B
          },
        })
      const k = { ...b }
      if (
        (delete k.wrapperClass,
        (d.value = new Kt(k)),
        d.value.virtual && d.value.params.virtual.enabled)
      ) {
        d.value.virtual.slides = m.value
        const w = {
          cache: !1,
          slides: m.value,
          renderExternal: (B) => {
            l.value = B
          },
          renderExternalUpdate: !1,
        }
        et(d.value.params.virtual, w), et(d.value.originalParams.virtual, w)
      }
      Ni(() => {
        !c.value && d.value && (d.value.emitSlidesClasses(), (c.value = !0))
        const { passedParams: w } = Os(e, !1),
          B = zu(w, h.value, m.value, y.value, (U) => U.props && U.props.key)
        ;(h.value = w),
          (B.length || a.value) &&
            d.value &&
            !d.value.destroyed &&
            ju({
              swiper: d.value,
              slides: m.value,
              passedParams: w,
              changedParams: B,
              nextEl: v.value,
              prevEl: T.value,
              scrollbarEl: _.value,
              paginationEl: p.value,
            }),
          (a.value = !1)
      }),
        Ri('swiper', d),
        Mt(l, () => {
          sr(() => {
            Vu(d.value)
          })
        }),
        Ln(() => {
          u.value &&
            (Gu(
              {
                el: u.value,
                nextEl: v.value,
                prevEl: T.value,
                paginationEl: p.value,
                scrollbarEl: _.value,
                swiper: d.value,
              },
              b,
            ),
            i('swiper', d.value))
        }),
        On(() => {
          d.value && !d.value.destroyed && d.value.destroy(!0, !1)
        })
      function z(w) {
        return b.virtual
          ? $u(d, w, l.value)
          : (w.forEach((B, U) => {
              B.props || (B.props = {}), (B.props.swiperRef = d), (B.props.swiperSlideIndex = U)
            }),
            w)
      }
      return () => {
        const { slides: w, slots: B } = Qn(n, m, y)
        return Oe(s, { ref: u, class: zr(o.value) }, [
          B['container-start'],
          Oe(r, { class: Du(b.wrapperClass) }, [B['wrapper-start'], z(w), B['wrapper-end']]),
          Hr(e) && [
            Oe('div', { ref: T, class: 'swiper-button-prev' }),
            Oe('div', { ref: v, class: 'swiper-button-next' }),
          ],
          Gr(e) && Oe('div', { ref: _, class: 'swiper-scrollbar' }),
          Dr(e) && Oe('div', { ref: p, class: 'swiper-pagination' }),
          B['container-end'],
        ])
      }
    },
  },
  Uu = {
    name: 'SwiperSlide',
    props: {
      tag: { type: String, default: 'div' },
      swiperRef: { type: Object, required: !1 },
      swiperSlideIndex: { type: Number, default: void 0, required: !1 },
      zoom: { type: Boolean, default: void 0, required: !1 },
      lazy: { type: Boolean, default: !1, required: !1 },
      virtualIndex: { type: [String, Number], default: void 0 },
    },
    setup(e, t) {
      let { slots: n } = t,
        i = !1
      const { swiperRef: s } = e,
        r = ve(null),
        o = ve('swiper-slide'),
        l = ve(!1)
      function a(d, h, m) {
        h === r.value && (o.value = m)
      }
      Ln(() => {
        !s || !s.value || (s.value.on('_slideClass', a), (i = !0))
      }),
        hr(() => {
          i || !s || !s.value || (s.value.on('_slideClass', a), (i = !0))
        }),
        Ni(() => {
          !r.value ||
            !s ||
            !s.value ||
            (typeof e.swiperSlideIndex < 'u' && (r.value.swiperSlideIndex = e.swiperSlideIndex),
            s.value.destroyed && o.value !== 'swiper-slide' && (o.value = 'swiper-slide'))
        }),
        On(() => {
          !s || !s.value || s.value.off('_slideClass', a)
        })
      const c = zi(() => ({
        isActive: o.value.indexOf('swiper-slide-active') >= 0,
        isVisible: o.value.indexOf('swiper-slide-visible') >= 0,
        isPrev: o.value.indexOf('swiper-slide-prev') >= 0,
        isNext: o.value.indexOf('swiper-slide-next') >= 0,
      }))
      Ri('swiperSlide', c)
      const u = () => {
        l.value = !0
      }
      return () =>
        Oe(
          e.tag,
          {
            class: zr(`${o.value}`),
            ref: r,
            'data-swiper-slide-index':
              typeof e.virtualIndex > 'u' && s && s.value && s.value.params.loop
                ? e.swiperSlideIndex
                : e.virtualIndex,
            onLoadCapture: u,
          },
          e.zoom
            ? Oe(
                'div',
                {
                  class: 'swiper-zoom-container',
                  'data-swiper-zoom': typeof e.zoom == 'number' ? e.zoom : void 0,
                },
                [
                  n.default && n.default(c.value),
                  e.lazy && !l.value && Oe('div', { class: 'swiper-lazy-preloader' }),
                ],
              )
            : [
                n.default && n.default(c.value),
                e.lazy && !l.value && Oe('div', { class: 'swiper-lazy-preloader' }),
              ],
        )
    },
  }
const Wu = {
  name: 'MenuMobile',
  computed: {
    items() {
      return this.$store.getters.getMenuItems
    },
  },
  setup() {
    return { modules: [Fu, Hu] }
  },
  components: { MenuCenterItem: Lr, Swiper: qu, SwiperSlide: Uu },
}
function Ku(e, t) {
  const n = se('MenuCenterItem'),
    i = se('swiper-slide'),
    s = se('swiper')
  return (
    V(),
    Ke(
      s,
      { class: 'container', modules: e.modules, navigation: !0, pagination: !0, slidesPerView: 1 },
      {
        default: ri(() => [
          (V(!0),
          X(
            fe,
            null,
            Lt(
              e.items,
              (r) => (
                V(),
                Ke(
                  i,
                  { key: r.id },
                  {
                    default: ri(() => [
                      W(n, { content: r, class: 'slideItem' }, null, 8, ['content']),
                    ]),
                    _: 2,
                  },
                  1024,
                )
              ),
            ),
            128,
          )),
        ]),
        _: 1,
      },
      8,
      ['modules'],
    )
  )
}
const Qu = ce(Wu, [
    ['render', Ku],
    ['__scopeId', 'data-v-56de00fd'],
  ]),
  Yu = {
    name: 'MenuCenter',
    computed: {
      items() {
        return this.$store.getters.getMenuItems
      },
      berriesIMG() {
        return this.$store.getters.getBerriesIMG
      },
    },
    components: { MenuCenterItem: Lr, MenuMobile: Qu },
  }
const Zu = { class: 'center' },
  Xu = { class: 'top' },
  Ju = { class: 'middle' },
  ed = ['src'],
  td = { class: 'bottom' },
  nd = { class: 'mobile' },
  id = ['src']
function sd(e, t) {
  const n = se('base-heading'),
    i = se('MenuCenterItem'),
    s = se('MenuMobile')
  return (
    V(),
    X(
      fe,
      null,
      [
        Q('div', Zu, [
          W(n, { class: 'heading', heading: 'Lorem ipsum, dolor sit amet consectetur' }),
          Q('div', Xu, [
            (V(!0),
            X(
              fe,
              null,
              Lt(
                e.items.slice(0, 2),
                (r) => (V(), Ke(i, { key: r.id, content: r }, null, 8, ['content'])),
              ),
              128,
            )),
          ]),
          Q('div', Ju, [
            (V(!0),
            X(
              fe,
              null,
              Lt(
                e.items.slice(2, 4),
                (r) => (V(), Ke(i, { key: r.id, content: r }, null, 8, ['content'])),
              ),
              128,
            )),
            Q('img', { class: 'image', src: e.berriesIMG, alt: 'berries' }, null, 8, ed),
          ]),
          Q('div', td, [
            (V(!0),
            X(
              fe,
              null,
              Lt(
                e.items.slice(4, 6),
                (r) => (V(), Ke(i, { key: r.id, content: r }, null, 8, ['content'])),
              ),
              128,
            )),
          ]),
        ]),
        Q('div', nd, [
          Q('img', { class: 'image', src: e.berriesIMG, alt: 'berries' }, null, 8, id),
          W(n, { class: 'heading', heading: 'Lorem ipsum, dolor sit amet consectetur' }),
          W(s, { class: 'swiper' }),
        ]),
      ],
      64,
    )
  )
}
const rd = ce(Yu, [
    ['render', sd],
    ['__scopeId', 'data-v-bcc522c4'],
  ]),
  od = {
    name: 'Menu',
    computed: {
      leftBubblesIMG() {
        return this.$store.getters.getLeftBubblesIMG
      },
      rightBubblesIMG() {
        return this.$store.getters.getRightBubblesIMG
      },
    },
    components: { MenuCenter: rd },
  }
const ld = { class: 'menu' },
  ad = ['src'],
  cd = ['src']
function ud(e, t) {
  const n = se('MenuCenter')
  return (
    V(),
    X('section', ld, [
      Q('img', { class: 'rightBubbles', src: e.rightBubblesIMG, alt: 'rightBubbles' }, null, 8, ad),
      Q('img', { class: 'leftBubbles', src: e.leftBubblesIMG, alt: 'leftBubbles' }, null, 8, cd),
      W(n),
    ])
  )
}
const dd = ce(od, [
    ['render', ud],
    ['__scopeId', 'data-v-f614a41b'],
  ]),
  fd = { name: 'ArrowSVG' },
  pd = {
    width: '19',
    height: '11',
    viewBox: '0 0 19 11',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  hd = Q(
    'path',
    {
      d: 'M18.7 0.3C18.3 -0.1 17.7 -0.1 17.3 0.3L9.5 8.1L1.7 0.3C1.3 -0.1 0.7 -0.1 0.3 0.3C-0.1 0.7 -0.1 1.3 0.3 1.7L8.8 10.2C9.2 10.6 9.8 10.6 10.2 10.2L18.7 1.7C19.1 1.3 19.1 0.7 18.7 0.3Z',
      fill: '#A6ABBD',
    },
    null,
    -1,
  ),
  gd = [hd]
function md(e, t) {
  return V(), X('svg', pd, gd)
}
const vd = ce(fd, [['render', md]]),
  bd = {
    name: 'Question',
    props: { content: { type: Object, reqiured: !0 } },
    computed: {
      active() {
        return this.$store.getters.getActiveQuestion
      },
    },
    methods: {
      clickHandler() {
        this.$store.commit('setActiveQuestion', this.$props.content.id)
      },
    },
    components: { ArrowSVG: vd },
  }
const _d = ['src', 'alt'],
  yd = { class: 'content' },
  Sd = { class: 'heading' },
  wd = { key: 0, class: 'description' }
function Cd(e, t) {
  const n = se('ArrowSVG')
  return (
    V(),
    X(
      'div',
      {
        class: gt(['question', { active: e.$props.content.id === e.active }]),
        onClick: t[0] || (t[0] = (...i) => e.clickHandler && e.clickHandler(...i)),
      },
      [
        Q(
          'img',
          { class: 'image', src: e.$props.content.image, alt: e.$props.content.heading },
          null,
          8,
          _d,
        ),
        Q('div', yd, [
          Q('h3', Sd, $e(e.$props.content.heading), 1),
          e.$props.content.id === e.active
            ? (V(), X('p', wd, $e(e.$props.content.description), 1))
            : Hi('', !0),
        ]),
        W(n, { class: 'arrow' }),
      ],
      2,
    )
  )
}
const xd = ce(bd, [
    ['render', Cd],
    ['__scopeId', 'data-v-d15e0559'],
  ]),
  Td = {
    name: 'Questions',
    computed: {
      questions() {
        return this.$store.getters.getQuestions
      },
    },
    components: { Question: xd },
  }
const Ad = (e) => (rl('data-v-125d5a49'), (e = e()), ol(), e),
  Ed = { class: 'questions' },
  Md = Ad(() =>
    Q('p', { class: 'subHeading' }, 'Porro ab rerum omnis magnam eligendi error nobis dolore?', -1),
  )
function Ld(e, t) {
  const n = se('base-heading'),
    i = se('Question')
  return (
    V(),
    X('section', Ed, [
      W(n, { class: 'heading', heading: 'Lorem ipsum, dolor sit adipisicing elit.', level: 2 }),
      Md,
      (V(!0),
      X(
        fe,
        null,
        Lt(e.questions, (s) => (V(), Ke(i, { key: s.id, content: s }, null, 8, ['content']))),
        128,
      )),
    ])
  )
}
const Od = ce(Td, [
    ['render', Ld],
    ['__scopeId', 'data-v-125d5a49'],
  ]),
  Id = { name: 'QuotesSVG' },
  Bd = {
    width: '20',
    height: '26',
    viewBox: '0 0 20 26',
    fill: '#00C368',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  Pd = Q(
    'path',
    {
      d: 'M-7.62939e-06 9.45753C-7.62939e-06 4.23428 4.34846 0 9.71411 0C15.0788 0 18.9734 4.08837 19.4282 9.29309C20.1219 17.235 13.9251 23.8845 6.40137 26C8.96573 24.4904 10.7541 21.8648 11.0529 18.8113C10.6138 18.872 10.1689 18.9151 9.71411 18.9151C4.34846 18.9151 -7.62939e-06 14.6813 -7.62939e-06 9.45753Z',
      fill: 'inherit',
    },
    null,
    -1,
  ),
  Rd = [Pd]
function Nd(e, t) {
  return V(), X('svg', Bd, Rd)
}
const kd = ce(Id, [['render', Nd]]),
  Fd = {
    name: 'LargeReview',
    props: { content: { type: Object, required: !0 } },
    components: { QuotesSVG: kd },
  }
const Hd = { class: 'review' },
  Dd = ['src'],
  Gd = ['src'],
  zd = { class: 'content' },
  jd = { class: 'paragraph' },
  $d = { class: 'author' },
  Vd = { class: 'before' },
  qd = { class: 'after' }
function Ud(e, t) {
  const n = se('QuotesSVG')
  return (
    V(),
    X('div', Hd, [
      Q(
        'img',
        { class: 'image desctop', src: e.$props.content.photos.large, alt: 'review photo' },
        null,
        8,
        Dd,
      ),
      Q(
        'img',
        { class: 'image mobile', src: e.$props.content.photos.medium, alt: 'review photo' },
        null,
        8,
        Gd,
      ),
      Q('div', zd, [
        Q('p', jd, $e(e.$props.content.text), 1),
        Q('p', $d, $e(e.$props.content.author), 1),
        Q('div', Vd, [W(n, { class: 'svg' }), W(n, { class: 'svg' })]),
        Q('div', qd, [W(n, { class: 'svg' }), W(n, { class: 'svg' })]),
      ]),
    ])
  )
}
const Wd = ce(Fd, [
    ['render', Ud],
    ['__scopeId', 'data-v-9484c968'],
  ]),
  Kd = { name: 'Review', props: { content: { type: Object, required: !0 }, reverse: Boolean } }
const Qd = ['src'],
  Yd = ['src'],
  Zd = { class: 'content' },
  Xd = { class: 'paragraph' },
  Jd = { class: 'author' }
function ef(e, t) {
  return (
    V(),
    X(
      'div',
      { class: gt(['review', { reverse: e.$props.reverse }]) },
      [
        Q(
          'img',
          { class: 'image desctop', src: e.$props.content.photos.medium, alt: 'review photo' },
          null,
          8,
          Qd,
        ),
        Q(
          'img',
          { class: 'image mobile', src: e.$props.content.photos.small, alt: 'review photo' },
          null,
          8,
          Yd,
        ),
        Q('div', Zd, [
          Q('p', Xd, $e(e.$props.content.text), 1),
          Q('p', Jd, $e(e.$props.content.author), 1),
        ]),
      ],
      2,
    )
  )
}
const tf = ce(Kd, [
    ['render', ef],
    ['__scopeId', 'data-v-c0bfd9b2'],
  ]),
  nf = {
    name: 'Reviews',
    computed: {
      largeReview() {
        return this.$store.getters.getLargeReview
      },
      reviews() {
        return this.$store.getters.getReviews
      },
    },
    components: { LargeReview: Wd, Review: tf },
  }
const sf = { class: 'reviews' },
  rf = { class: 'mediums' }
function of(e, t) {
  const n = se('base-heading'),
    i = se('LargeReview'),
    s = se('Review')
  return (
    V(),
    X('section', sf, [
      W(n, { heading: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.', level: 2 }),
      e.largeReview
        ? (V(), Ke(i, { key: 0, content: e.largeReview }, null, 8, ['content']))
        : Hi('', !0),
      Q('div', rf, [
        W(s, { content: e.reviews[0], reverse: !0 }, null, 8, ['content']),
        W(s, { content: e.reviews[1] }, null, 8, ['content']),
      ]),
    ])
  )
}
const lf = ce(nf, [
  ['render', of],
  ['__scopeId', 'data-v-c2f7f358'],
])
const af = { name: 'App', components: { Header: Ja, Menu: dd, Reviews: lf, Questions: Od } },
  cf = { class: 'columns' }
function uf(e, t, n, i, s, r) {
  const o = se('Header'),
    l = se('Menu'),
    a = se('Reviews'),
    c = se('Questions')
  return (
    V(),
    X(fe, null, [W(o), W(l), Q('div', cf, [W(a, { class: 'item' }), W(c, { class: 'item' })])], 64)
  )
}
const df = ce(af, [
  ['render', uf],
  ['__scopeId', 'data-v-c124905d'],
])
function ff() {
  return $r().__VUE_DEVTOOLS_GLOBAL_HOOK__
}
function $r() {
  return typeof navigator < 'u' && typeof window < 'u' ? window : typeof global < 'u' ? global : {}
}
const pf = typeof Proxy == 'function',
  hf = 'devtools-plugin:setup',
  gf = 'plugin:settings:set'
let St, vi
function mf() {
  var e
  return (
    St !== void 0 ||
      (typeof window < 'u' && window.performance
        ? ((St = !0), (vi = window.performance))
        : typeof global < 'u' &&
          !((e = global.perf_hooks) === null || e === void 0) &&
          e.performance
        ? ((St = !0), (vi = global.perf_hooks.performance))
        : (St = !1)),
    St
  )
}
function vf() {
  return mf() ? vi.now() : Date.now()
}
class bf {
  constructor(t, n) {
    ;(this.target = null),
      (this.targetQueue = []),
      (this.onQueue = []),
      (this.plugin = t),
      (this.hook = n)
    const i = {}
    if (t.settings)
      for (const o in t.settings) {
        const l = t.settings[o]
        i[o] = l.defaultValue
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`
    let r = Object.assign({}, i)
    try {
      const o = localStorage.getItem(s),
        l = JSON.parse(o)
      Object.assign(r, l)
    } catch {}
    ;(this.fallbacks = {
      getSettings() {
        return r
      },
      setSettings(o) {
        try {
          localStorage.setItem(s, JSON.stringify(o))
        } catch {}
        r = o
      },
      now() {
        return vf()
      },
    }),
      n &&
        n.on(gf, (o, l) => {
          o === this.plugin.id && this.fallbacks.setSettings(l)
        }),
      (this.proxiedOn = new Proxy(
        {},
        {
          get: (o, l) =>
            this.target
              ? this.target.on[l]
              : (...a) => {
                  this.onQueue.push({ method: l, args: a })
                },
        },
      )),
      (this.proxiedTarget = new Proxy(
        {},
        {
          get: (o, l) =>
            this.target
              ? this.target[l]
              : l === 'on'
              ? this.proxiedOn
              : Object.keys(this.fallbacks).includes(l)
              ? (...a) => (
                  this.targetQueue.push({ method: l, args: a, resolve: () => {} }),
                  this.fallbacks[l](...a)
                )
              : (...a) =>
                  new Promise((c) => {
                    this.targetQueue.push({ method: l, args: a, resolve: c })
                  }),
        },
      ))
  }
  async setRealTarget(t) {
    this.target = t
    for (const n of this.onQueue) this.target.on[n.method](...n.args)
    for (const n of this.targetQueue) n.resolve(await this.target[n.method](...n.args))
  }
}
function _f(e, t) {
  const n = e,
    i = $r(),
    s = ff(),
    r = pf && n.enableEarlyProxy
  if (s && (i.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !r)) s.emit(hf, e, t)
  else {
    const o = r ? new bf(n, s) : null
    ;(i.__VUE_DEVTOOLS_PLUGINS__ = i.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: o,
    }),
      o && t(o.proxiedTarget)
  }
}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */ var yf = 'store'
function Nt(e, t) {
  Object.keys(e).forEach(function (n) {
    return t(e[n], n)
  })
}
function Sf(e) {
  return e !== null && typeof e == 'object'
}
function wf(e) {
  return e && typeof e.then == 'function'
}
function Cf(e, t) {
  return function () {
    return e(t)
  }
}
function Vr(e, t, n) {
  return (
    t.indexOf(e) < 0 && (n && n.prepend ? t.unshift(e) : t.push(e)),
    function () {
      var i = t.indexOf(e)
      i > -1 && t.splice(i, 1)
    }
  )
}
function qr(e, t) {
  ;(e._actions = Object.create(null)),
    (e._mutations = Object.create(null)),
    (e._wrappedGetters = Object.create(null)),
    (e._modulesNamespaceMap = Object.create(null))
  var n = e.state
  Rn(e, n, [], e._modules.root, !0), $i(e, n, t)
}
function $i(e, t, n) {
  var i = e._state,
    s = e._scope
  ;(e.getters = {}), (e._makeLocalGettersCache = Object.create(null))
  var r = e._wrappedGetters,
    o = {},
    l = {},
    a = vo(!0)
  a.run(function () {
    Nt(r, function (c, u) {
      ;(o[u] = Cf(c, e)),
        (l[u] = zi(function () {
          return o[u]()
        })),
        Object.defineProperty(e.getters, u, {
          get: function () {
            return l[u].value
          },
          enumerable: !0,
        })
    })
  }),
    (e._state = Cn({ data: t })),
    (e._scope = a),
    e.strict && Mf(e),
    i &&
      n &&
      e._withCommit(function () {
        i.data = null
      }),
    s && s.stop()
}
function Rn(e, t, n, i, s) {
  var r = !n.length,
    o = e._modules.getNamespace(n)
  if ((i.namespaced && (e._modulesNamespaceMap[o], (e._modulesNamespaceMap[o] = i)), !r && !s)) {
    var l = Vi(t, n.slice(0, -1)),
      a = n[n.length - 1]
    e._withCommit(function () {
      l[a] = i.state
    })
  }
  var c = (i.context = xf(e, o, n))
  i.forEachMutation(function (u, d) {
    var h = o + d
    Tf(e, h, u, c)
  }),
    i.forEachAction(function (u, d) {
      var h = u.root ? d : o + d,
        m = u.handler || u
      Af(e, h, m, c)
    }),
    i.forEachGetter(function (u, d) {
      var h = o + d
      Ef(e, h, u, c)
    }),
    i.forEachChild(function (u, d) {
      Rn(e, t, n.concat(d), u, s)
    })
}
function xf(e, t, n) {
  var i = t === '',
    s = {
      dispatch: i
        ? e.dispatch
        : function (r, o, l) {
            var a = vn(r, o, l),
              c = a.payload,
              u = a.options,
              d = a.type
            return (!u || !u.root) && (d = t + d), e.dispatch(d, c)
          },
      commit: i
        ? e.commit
        : function (r, o, l) {
            var a = vn(r, o, l),
              c = a.payload,
              u = a.options,
              d = a.type
            ;(!u || !u.root) && (d = t + d), e.commit(d, c, u)
          },
    }
  return (
    Object.defineProperties(s, {
      getters: {
        get: i
          ? function () {
              return e.getters
            }
          : function () {
              return Ur(e, t)
            },
      },
      state: {
        get: function () {
          return Vi(e.state, n)
        },
      },
    }),
    s
  )
}
function Ur(e, t) {
  if (!e._makeLocalGettersCache[t]) {
    var n = {},
      i = t.length
    Object.keys(e.getters).forEach(function (s) {
      if (s.slice(0, i) === t) {
        var r = s.slice(i)
        Object.defineProperty(n, r, {
          get: function () {
            return e.getters[s]
          },
          enumerable: !0,
        })
      }
    }),
      (e._makeLocalGettersCache[t] = n)
  }
  return e._makeLocalGettersCache[t]
}
function Tf(e, t, n, i) {
  var s = e._mutations[t] || (e._mutations[t] = [])
  s.push(function (o) {
    n.call(e, i.state, o)
  })
}
function Af(e, t, n, i) {
  var s = e._actions[t] || (e._actions[t] = [])
  s.push(function (o) {
    var l = n.call(
      e,
      {
        dispatch: i.dispatch,
        commit: i.commit,
        getters: i.getters,
        state: i.state,
        rootGetters: e.getters,
        rootState: e.state,
      },
      o,
    )
    return (
      wf(l) || (l = Promise.resolve(l)),
      e._devtoolHook
        ? l.catch(function (a) {
            throw (e._devtoolHook.emit('vuex:error', a), a)
          })
        : l
    )
  })
}
function Ef(e, t, n, i) {
  e._wrappedGetters[t] ||
    (e._wrappedGetters[t] = function (r) {
      return n(i.state, i.getters, r.state, r.getters)
    })
}
function Mf(e) {
  Mt(
    function () {
      return e._state.data
    },
    function () {},
    { deep: !0, flush: 'sync' },
  )
}
function Vi(e, t) {
  return t.reduce(function (n, i) {
    return n[i]
  }, e)
}
function vn(e, t, n) {
  return Sf(e) && e.type && ((n = t), (t = e), (e = e.type)), { type: e, payload: t, options: n }
}
var Lf = 'vuex bindings',
  Is = 'vuex:mutations',
  Yn = 'vuex:actions',
  wt = 'vuex',
  Of = 0
function If(e, t) {
  _f(
    {
      id: 'org.vuejs.vuex',
      app: e,
      label: 'Vuex',
      homepage: 'https://next.vuex.vuejs.org/',
      logo: 'https://vuejs.org/images/icons/favicon-96x96.png',
      packageName: 'vuex',
      componentStateTypes: [Lf],
    },
    function (n) {
      n.addTimelineLayer({ id: Is, label: 'Vuex Mutations', color: Bs }),
        n.addTimelineLayer({ id: Yn, label: 'Vuex Actions', color: Bs }),
        n.addInspector({
          id: wt,
          label: 'Vuex',
          icon: 'storage',
          treeFilterPlaceholder: 'Filter stores...',
        }),
        n.on.getInspectorTree(function (i) {
          if (i.app === e && i.inspectorId === wt)
            if (i.filter) {
              var s = []
              Yr(s, t._modules.root, i.filter, ''), (i.rootNodes = s)
            } else i.rootNodes = [Qr(t._modules.root, '')]
        }),
        n.on.getInspectorState(function (i) {
          if (i.app === e && i.inspectorId === wt) {
            var s = i.nodeId
            Ur(t, s),
              (i.state = Rf(
                kf(t._modules, s),
                s === 'root' ? t.getters : t._makeLocalGettersCache,
                s,
              ))
          }
        }),
        n.on.editInspectorState(function (i) {
          if (i.app === e && i.inspectorId === wt) {
            var s = i.nodeId,
              r = i.path
            s !== 'root' && (r = s.split('/').filter(Boolean).concat(r)),
              t._withCommit(function () {
                i.set(t._state.data, r, i.state.value)
              })
          }
        }),
        t.subscribe(function (i, s) {
          var r = {}
          i.payload && (r.payload = i.payload),
            (r.state = s),
            n.notifyComponentUpdate(),
            n.sendInspectorTree(wt),
            n.sendInspectorState(wt),
            n.addTimelineEvent({ layerId: Is, event: { time: Date.now(), title: i.type, data: r } })
        }),
        t.subscribeAction({
          before: function (i, s) {
            var r = {}
            i.payload && (r.payload = i.payload),
              (i._id = Of++),
              (i._time = Date.now()),
              (r.state = s),
              n.addTimelineEvent({
                layerId: Yn,
                event: { time: i._time, title: i.type, groupId: i._id, subtitle: 'start', data: r },
              })
          },
          after: function (i, s) {
            var r = {},
              o = Date.now() - i._time
            ;(r.duration = {
              _custom: {
                type: 'duration',
                display: o + 'ms',
                tooltip: 'Action duration',
                value: o,
              },
            }),
              i.payload && (r.payload = i.payload),
              (r.state = s),
              n.addTimelineEvent({
                layerId: Yn,
                event: {
                  time: Date.now(),
                  title: i.type,
                  groupId: i._id,
                  subtitle: 'end',
                  data: r,
                },
              })
          },
        })
    },
  )
}
var Bs = 8702998,
  Bf = 6710886,
  Pf = 16777215,
  Wr = { label: 'namespaced', textColor: Pf, backgroundColor: Bf }
function Kr(e) {
  return e && e !== 'root' ? e.split('/').slice(-2, -1)[0] : 'Root'
}
function Qr(e, t) {
  return {
    id: t || 'root',
    label: Kr(t),
    tags: e.namespaced ? [Wr] : [],
    children: Object.keys(e._children).map(function (n) {
      return Qr(e._children[n], t + n + '/')
    }),
  }
}
function Yr(e, t, n, i) {
  i.includes(n) &&
    e.push({
      id: i || 'root',
      label: i.endsWith('/') ? i.slice(0, i.length - 1) : i || 'Root',
      tags: t.namespaced ? [Wr] : [],
    }),
    Object.keys(t._children).forEach(function (s) {
      Yr(e, t._children[s], n, i + s + '/')
    })
}
function Rf(e, t, n) {
  t = n === 'root' ? t : t[n]
  var i = Object.keys(t),
    s = {
      state: Object.keys(e.state).map(function (o) {
        return { key: o, editable: !0, value: e.state[o] }
      }),
    }
  if (i.length) {
    var r = Nf(t)
    s.getters = Object.keys(r).map(function (o) {
      return {
        key: o.endsWith('/') ? Kr(o) : o,
        editable: !1,
        value: bi(function () {
          return r[o]
        }),
      }
    })
  }
  return s
}
function Nf(e) {
  var t = {}
  return (
    Object.keys(e).forEach(function (n) {
      var i = n.split('/')
      if (i.length > 1) {
        var s = t,
          r = i.pop()
        i.forEach(function (o) {
          s[o] || (s[o] = { _custom: { value: {}, display: o, tooltip: 'Module', abstract: !0 } }),
            (s = s[o]._custom.value)
        }),
          (s[r] = bi(function () {
            return e[n]
          }))
      } else
        t[n] = bi(function () {
          return e[n]
        })
    }),
    t
  )
}
function kf(e, t) {
  var n = t.split('/').filter(function (i) {
    return i
  })
  return n.reduce(
    function (i, s, r) {
      var o = i[s]
      if (!o) throw new Error('Missing module "' + s + '" for path "' + t + '".')
      return r === n.length - 1 ? o : o._children
    },
    t === 'root' ? e : e.root._children,
  )
}
function bi(e) {
  try {
    return e()
  } catch (t) {
    return t
  }
}
var Ne = function (t, n) {
    ;(this.runtime = n), (this._children = Object.create(null)), (this._rawModule = t)
    var i = t.state
    this.state = (typeof i == 'function' ? i() : i) || {}
  },
  Zr = { namespaced: { configurable: !0 } }
Zr.namespaced.get = function () {
  return !!this._rawModule.namespaced
}
Ne.prototype.addChild = function (t, n) {
  this._children[t] = n
}
Ne.prototype.removeChild = function (t) {
  delete this._children[t]
}
Ne.prototype.getChild = function (t) {
  return this._children[t]
}
Ne.prototype.hasChild = function (t) {
  return t in this._children
}
Ne.prototype.update = function (t) {
  ;(this._rawModule.namespaced = t.namespaced),
    t.actions && (this._rawModule.actions = t.actions),
    t.mutations && (this._rawModule.mutations = t.mutations),
    t.getters && (this._rawModule.getters = t.getters)
}
Ne.prototype.forEachChild = function (t) {
  Nt(this._children, t)
}
Ne.prototype.forEachGetter = function (t) {
  this._rawModule.getters && Nt(this._rawModule.getters, t)
}
Ne.prototype.forEachAction = function (t) {
  this._rawModule.actions && Nt(this._rawModule.actions, t)
}
Ne.prototype.forEachMutation = function (t) {
  this._rawModule.mutations && Nt(this._rawModule.mutations, t)
}
Object.defineProperties(Ne.prototype, Zr)
var vt = function (t) {
  this.register([], t, !1)
}
vt.prototype.get = function (t) {
  return t.reduce(function (n, i) {
    return n.getChild(i)
  }, this.root)
}
vt.prototype.getNamespace = function (t) {
  var n = this.root
  return t.reduce(function (i, s) {
    return (n = n.getChild(s)), i + (n.namespaced ? s + '/' : '')
  }, '')
}
vt.prototype.update = function (t) {
  Xr([], this.root, t)
}
vt.prototype.register = function (t, n, i) {
  var s = this
  i === void 0 && (i = !0)
  var r = new Ne(n, i)
  if (t.length === 0) this.root = r
  else {
    var o = this.get(t.slice(0, -1))
    o.addChild(t[t.length - 1], r)
  }
  n.modules &&
    Nt(n.modules, function (l, a) {
      s.register(t.concat(a), l, i)
    })
}
vt.prototype.unregister = function (t) {
  var n = this.get(t.slice(0, -1)),
    i = t[t.length - 1],
    s = n.getChild(i)
  s && s.runtime && n.removeChild(i)
}
vt.prototype.isRegistered = function (t) {
  var n = this.get(t.slice(0, -1)),
    i = t[t.length - 1]
  return n ? n.hasChild(i) : !1
}
function Xr(e, t, n) {
  if ((t.update(n), n.modules))
    for (var i in n.modules) {
      if (!t.getChild(i)) return
      Xr(e.concat(i), t.getChild(i), n.modules[i])
    }
}
function Ff(e) {
  return new ye(e)
}
var ye = function (t) {
    var n = this
    t === void 0 && (t = {})
    var i = t.plugins
    i === void 0 && (i = [])
    var s = t.strict
    s === void 0 && (s = !1)
    var r = t.devtools
    ;(this._committing = !1),
      (this._actions = Object.create(null)),
      (this._actionSubscribers = []),
      (this._mutations = Object.create(null)),
      (this._wrappedGetters = Object.create(null)),
      (this._modules = new vt(t)),
      (this._modulesNamespaceMap = Object.create(null)),
      (this._subscribers = []),
      (this._makeLocalGettersCache = Object.create(null)),
      (this._scope = null),
      (this._devtools = r)
    var o = this,
      l = this,
      a = l.dispatch,
      c = l.commit
    ;(this.dispatch = function (h, m) {
      return a.call(o, h, m)
    }),
      (this.commit = function (h, m, y) {
        return c.call(o, h, m, y)
      }),
      (this.strict = s)
    var u = this._modules.root.state
    Rn(this, u, [], this._modules.root),
      $i(this, u),
      i.forEach(function (d) {
        return d(n)
      })
  },
  qi = { state: { configurable: !0 } }
ye.prototype.install = function (t, n) {
  t.provide(n || yf, this), (t.config.globalProperties.$store = this)
  var i = this._devtools !== void 0 ? this._devtools : !1
  i && If(t, this)
}
qi.state.get = function () {
  return this._state.data
}
qi.state.set = function (e) {}
ye.prototype.commit = function (t, n, i) {
  var s = this,
    r = vn(t, n, i),
    o = r.type,
    l = r.payload,
    a = { type: o, payload: l },
    c = this._mutations[o]
  c &&
    (this._withCommit(function () {
      c.forEach(function (d) {
        d(l)
      })
    }),
    this._subscribers.slice().forEach(function (u) {
      return u(a, s.state)
    }))
}
ye.prototype.dispatch = function (t, n) {
  var i = this,
    s = vn(t, n),
    r = s.type,
    o = s.payload,
    l = { type: r, payload: o },
    a = this._actions[r]
  if (a) {
    try {
      this._actionSubscribers
        .slice()
        .filter(function (u) {
          return u.before
        })
        .forEach(function (u) {
          return u.before(l, i.state)
        })
    } catch {}
    var c =
      a.length > 1
        ? Promise.all(
            a.map(function (u) {
              return u(o)
            }),
          )
        : a[0](o)
    return new Promise(function (u, d) {
      c.then(
        function (h) {
          try {
            i._actionSubscribers
              .filter(function (m) {
                return m.after
              })
              .forEach(function (m) {
                return m.after(l, i.state)
              })
          } catch {}
          u(h)
        },
        function (h) {
          try {
            i._actionSubscribers
              .filter(function (m) {
                return m.error
              })
              .forEach(function (m) {
                return m.error(l, i.state, h)
              })
          } catch {}
          d(h)
        },
      )
    })
  }
}
ye.prototype.subscribe = function (t, n) {
  return Vr(t, this._subscribers, n)
}
ye.prototype.subscribeAction = function (t, n) {
  var i = typeof t == 'function' ? { before: t } : t
  return Vr(i, this._actionSubscribers, n)
}
ye.prototype.watch = function (t, n, i) {
  var s = this
  return Mt(
    function () {
      return t(s.state, s.getters)
    },
    n,
    Object.assign({}, i),
  )
}
ye.prototype.replaceState = function (t) {
  var n = this
  this._withCommit(function () {
    n._state.data = t
  })
}
ye.prototype.registerModule = function (t, n, i) {
  i === void 0 && (i = {}),
    typeof t == 'string' && (t = [t]),
    this._modules.register(t, n),
    Rn(this, this.state, t, this._modules.get(t), i.preserveState),
    $i(this, this.state)
}
ye.prototype.unregisterModule = function (t) {
  var n = this
  typeof t == 'string' && (t = [t]),
    this._modules.unregister(t),
    this._withCommit(function () {
      var i = Vi(n.state, t.slice(0, -1))
      delete i[t[t.length - 1]]
    }),
    qr(this)
}
ye.prototype.hasModule = function (t) {
  return typeof t == 'string' && (t = [t]), this._modules.isRegistered(t)
}
ye.prototype.hotUpdate = function (t) {
  this._modules.update(t), qr(this, !0)
}
ye.prototype._withCommit = function (t) {
  var n = this._committing
  ;(this._committing = !0), t(), (this._committing = n)
}
Object.defineProperties(ye.prototype, qi)
const Hf = {
    state: {
      nav: [
        { id: '1', text: 'NavItem1' },
        { id: '2', text: 'NavItem2' },
        { id: '3', text: 'NavItem3' },
      ],
      activeNav: '3',
    },
    getters: {
      getNav(e) {
        return e.nav
      },
      getActiveNav(e) {
        return e.activeNav
      },
    },
    mutations: {
      setActiveNav(e, t) {
        e.activeNav = t
      },
    },
    actions: {},
    modules: {},
  },
  Zn = './assets/largeReviewPhoto-4ab82790.png',
  Xn = './assets/mediumReviewPhoto-a662d312.png',
  Jn = './assets/smallReviewPhoto-103072b8.png',
  Df = {
    state: {
      largeReview: {
        id: '1',
        author: 'Jane Doe',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae deleniti, iste nisi expedita, provident excepturi officia! Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore?',
        photos: { large: Zn, medium: Xn, small: Jn },
      },
      reviews: [
        {
          id: '2',
          author: 'Jane Doe',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio tempore at ipsum quas eius nemo nam numquam eos in quos!',
          photos: { large: Zn, medium: Xn, small: Jn },
        },
        {
          id: '3',
          author: 'Jane Doe',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio tempore at ipsum quas eius nemo nam numquam eos in quos!',
          photos: { large: Zn, medium: Xn, small: Jn },
        },
      ],
    },
    getters: {
      getLargeReview(e) {
        return e.largeReview
      },
      getReviews(e) {
        return e.reviews
      },
    },
    mutations: {},
    actions: {},
    modules: {},
  },
  Gf =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR8SURBVHgBzZhBbBtFFIbfvN0I0tiJV3ZCUyFhFyGEEKo5IG7EOaECokIVCARBgV7IKc4BLgg1OVRC4pDNKRwKDXDIAaoKCQ5I0LqXkgIHp+2FIoiRKiWN6+7GaSq19e70vUk2dduNvevarv/Y8Xpndvfze2/ezDwBDWq5aGU0HfdJR2RAyLQQEJMSYtxGx7YEKNBRAaXIV1w4PdgfzUEDEmE6L1lW7NEKZhFhXLpSwch6DxD8EPpDUaDOOQedqUHDKEAzARms28FJOhyXsh5SjYcRrQJGMedAMNC6gCura1mhwWF3y2LNEEMiYgEFTiaMyDc1+9ZqXLmyZsIDWq2WEJXrzQGjd2KnPr6Amy7VTkjpZqDFYkh65XXhDhuGYd/X7ndRt4un2gHHotABeqUrUjvh134fILuVRmga2qhNSJkpWuXpe9vucvHyFWuUDH6sVTFXTxrlLxfkxO54n+md2wZctqykYNe6MgkPSZyGNA1tHSopLx51rxFdjVKJm4SQWjx/EX4/m4czZ8/B5dWSOvdk6nHYS++Rd16Dxwbige/FniOGWAW7DtNXNbKVBZX1HFwK49qNjevw7fzP8FtuAd57az+8vn8I9gwmVNvf//yv3rNfH4cXX3gORt5+FXp6dgW+t65rZLmKwVZUgJdL5WNEPhr0Bgz38afT8Owze+GT8fchGvF/+Pq1DZj96jgs/HkBvjgyERiSU4+OOBk3olMKcKW0thQm9maPfg893Y8Q3Eig/p8d+RI0XYePDr0ZqD/PNLqm2QkjaiCvSmgST0JAcZz98dd5GDt0MOgl6of8enIBzl24GKg/RxqFW6xorWdoSsQhCBF7383/BGMfHtzRrX6KRnrgXYrTMwuLga/h8UBJeh+SPdNhst6/S5fg6aeegLA68MpLNNKDA7pSLeUyKGS4vPdfg4B7Bvu301Awsdlkmqe6JHSgNqNOxJA+m7bOa4FiCB0uSolgQ+fKZhd3JCAvHHhnqNNRnkIyGebi+R9OQqvFUxwxFjjN5Ji20yR4vyIwrzuuu0i7KwiTrD+fPgqtFpLRaJbLKdOtlsoWgYZKNy8fGFOfv/w425R+1WKPdulaIR6LpFSaIWOaneRmXvoTVI6PFaCOlRnsEEBVfaD4u+nemuLvCnBr5doRVlSbeQFzXllkeybRqahDjfbDZFSbJiqJeNZT56o7rJSsLApt2nFcaLcYjvciZLLRRO+des1dc/HuuGEKCSabud3igUGMZjUcy5ekeLV8inf6vONvC5yGDJintPL8vW2+qxldOG9wQUdrsSW3NuoqIZflrWHfPrVuUCxRrURAlpI4NLsa4sUcuzXeF9mx/FZzPdgf752QrvOBKjaqGHlwi3pW69KRMgZma8HVBWQNJIw554YzTNP1nIoVrTFQD4ytRp9mWVZS8b5dM3WvgxDiEkkXaFw3yZDLk+z16oHklU68H8D/NxOvSr42TRFm2b05k/IpVDYFsFqWtT7kMihAmm5CsLymFFsLDskzky1prUlgOUQ9b0S7T0MDug1j5J9e+BLIhAAAAABJRU5ErkJggg==',
  zf =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYCSURBVHgBrZhvbBRFGMafnV0SKAXubItQSbxKKgJCSwJpwWivJX6AYqVKFJQ/VfgAxqRtJAajpiUg+gHCVU0wURIoGANBCQ1/TIz0zg8gSuRqVKKRUD7Qqy31jlZqAr1d33fKXa69vd29c59e7/Z2Z2d/98zMO++MghwV6Y/6VU2UGXHFD8UoVxR4DAMevkbHMQPopqNuYSjhER2hmUVTgshBSjaFr0ejnokjokkINBq6IWEMuwco/BD6E0o3FQ7GRXznTK+3G24CMtikuGilw0bDsEOyeBjRSmChHIrDGagtYG/f7SZFRYt+3zE3xJBCiG6hiNZCb/5hy7JWF3tv3Q7AwrU7d4bxVcd5/PzLH/ir72/6H5DnJ0/Ow+ySWVhaUYYnKsvw4PQC0/uFkE0fmO6d2oxsAEebVD1pGLrf7DqD7G07jOs3bqJuRRWWLJqLOaU+FM8slNd7IrdwM9KPjnMhXL5yFfPnzsaGdatMQRmSXmFN0au9Xm/MEWDvwO0rNAjKza6dJMdOne7E6lVVePmFFZiSnwc7HTj4JY4eO4f1a2tRX1eTdn3fh+2oXLIguKauutoWkJuVmrTR7EFHvjiN86EfcPDjd1A8owjZqKe3H5tf343lVRVYv642eX5vW7v8fLN5E7sZKBrX3CL1S+RWtIE+TOHYuVzhWHwP3/tt6JKsKxVue+NG0CCEoaOJWq8p9b6kg5Fo1KfoopOa1je+cu5z25r24ET7+znBpYqdfOW1XVgwvzQJl4Sh4a2qIqZhpCTRH5MOCl1tMYNjcdNuXLvif8OxuI5ZxUVy5KfCsTha6LruGcGEliQXv7F7dLHBrEJ279er17D11efhht597wCN9iIMD/8rw9R4cVMTalOUIkkSULqXIdZd+L4LiymMuAXHvWrX21tRt/Ip6oudpuXIRejQGpOA1D39mSq9cCmMZ1dWwU041uJF89BFzWwmNovskoNFcFZC33yZKr52/Sb1m0K4Ccd6rPTh5MyTDighPf3RIT9NiaIKFgkA9xPuM27CsbjOTICjkAY3b5mgsV2ee36SG5wT8Vihl18ohnloSYjnzx6aV92G4zrzJ1tNk3I0l/Mg8cES8AH8/ucNuAnH4mTiEcp4MuLJZlU8gj4t87yFjz+KH3+6CjfhWB1nv8MySsds5BF2JTj76DgbwtA/w3ZFs+pzl6/8hmWVtoCciiFmVYD7SYnvIXx+/Bzcgjtw8ATmzyvNmMimKMZNHLMrtb1xE06eCWUcLNnAcR1Hjn1NCWytZTlOHHhlyGEmDBvxL11d66d8blcaZLZwXMdGgrNzT5GQBEhhJsi0dqqvW46a6ooxkLnALa+uxOpnamzLK7xeUURYi+t6F62u4CRYb1i7Cvl5k7Bm01syZZpD05Ud3NDQMI4eP4tT1EUYzAkcS5BpNMsFpXV9A4NRAnW8rGzd8wkuXupCNmr/dLeTQSHFLTpBU7sLPPklmjwBJUAnW50syjlNT8wAO5q3wIk+2P+ZYziWSlsXBBXkYxkHNTHSJhz0w9Q1ROLBTuCykdx9oP53V7+3MwnI+T/hBawGy3g4lhMHnbqckFzMKziU2BZJziQaberQxZgZoxkcy20H5aKJtkQS7o0BZBd1gyGFIziWmw4ynKapMARaUzeVxtDMKPAGFAMBttkOjuWmgzwwiDFQOHXsZlJaslBUMLWZBkxwnw0cbxBt2/wi7MRl7EYwrYW574ULpuWnbSJpZjdoSrz+yWWLOpdWLCyP6+ahZ9uWNbRePmOZtrPkD6GyZlJkMB4NyIPGvXrTMrBQ/8DgfirRREE847LluZfewIkdd1A8zqQe4m74qFAG6Exw3Oe4Wc2ccwTI6uP9GsHrZvjkcnAc6TfnL5o6mXDu6ZqlaWDsmkoRA4raWjAtr83q+Y62gCORqE+dqLZQhGoY3Z5IB7VTSnNK1wYplJSY7AfmBJgEpS2SCVB538QvHUViq2JUCehEwOf30cArgy85JgjsbpsTsJwAUxWNDlXpDAqUUyUEy6tD5X7CYfDMFDMo1ySwoBBa2DtlUgg56D9aiZFLcxBLmgAAAABJRU5ErkJggg==',
  jf =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAYuSURBVHgBzVhbbBRVGP7nzDaxdIFdt0BQSdqq+AJsfRJ4YVuFF8EIwQSTVkuCiZiYLgkkJsQU4iUmGlviAyRgUqgJJBDXcPEBQlteuLxtwSdM201QKZQ629ZqpJ05/t9pZzvb7p7ZWRvC1+5l9pyZ853/dr5zDCoT94ethBkScWkbCTJkvWFQREqKoI2/ZyVRhr9lhDTSUw5dW7lscS+VASNI50HLijwzJZJCUKt0pCIj/QYwMAj/CSPDnXttYR9eGY1maCEJglilLQ7x11Yp/ShpBmO2irAwOm0qjagvwaGHo0nDpDZnxmILAZAUQmSEIQ5VR8MntX11jUOPRjvof1pNByGU6zuWR5fsK9anIMFpl5opKZ0ElYgr3Tfo6IlzFK6qpOZ336TNjRtKug8k+T8dMpyGaDSandde6KZKR/QEIQd0nb5E5z6ZoM6PH9ExJloqOHSI/+unpJkq1D6PINzKGVpPAfHg4Qg9FyP1+mvi70D3TpOUiWFrrJ10BO8/slr4o5VKxEQJREC8FICkdCg5NDKapEIE71tWjWGItlISAoMeOPgtNX/wqW/fAwfb6ZsjJ0siylYkU4g2i3NgHkHhmG3s2hq/h6TOd6tB42tfoa7jn/l1p1PHP6cVK2L0UfJLda8OMI7jOJEpqmhzfwvhDdaTtmwhH3SdvsjZepO+/mIfrVgeo1LRvGsrbeGsxsQmJv6hJs7yYoCrhZBJtuJhZLWyoLKej2sx+3LIucA9uPcylyM/S7IVyaGQygVFkMMzobsB8dN15lIeOSTI0RNnyQ/Hvj+bSyaXZOpCtzYmYSw2l0oWAVXCVzW6QeDaHW815pFz3eUHOGa67yzJzY3rOXFOae9hkpFhazzBS6LYRBr3Yqa3f/mVmnbNxs0pLsrr1q6m/a3v5X6rqlpEf7BR8PKGwN4971Bd7SrlARfbebL9g79pyxSsyO6NC16563XRd/1mH61bszqP8I1bfRz4+YG+d89OavmumnZ+VaWWOi8+5LbLV2/yRO+q6zBPBlZMne8pOq4jlZRLhAypLy3Xb6V5wK25a7gbBGAxL7D2Flt/QWj7toa8ya5b8zL9dKGHmqhYRsNssh5JUkMa9A/+nucyuOZFdllQbHl9A0+2L3f9Ut0qn0TBuxER/KnVeYgTL8EBJlhX+wIFBZ7hJTT3uggigp5ysBSjrK5DmTOfh/6BeyqbXeAZ4TlxXABZuNiH4LMq7lxseC1OVzgjAxNUsTsbGkMPRrShgv0LdoYoM2nSAFl3+87d3PXG9XG1EkwE0Hzo+wPXQW/5gQLfyJMtSlCRZIJcZnrBthhQVLEGu4TiTPgNrmFHA6hmFHZMzJtsKP74rShB7FcMkRa24/Tpdk6Ik7ra5/OKKizRP3gvb50tBLRhSbvDBdpb2FFL4Rmd6BBsNF7lesXKZVFYUBuH+1vfVyrETQ6QxqKPWrWXdR7a+gdm41SJCxR0FrThcKXq6xZ2tKW4QDdrJNf0/tnIRBdXXlPGGx4Zb7Olc0gnuVLnr6oHz5Vb02QuKYsOzCQT2hFfcOHcZRLCAcLj7W2NRccKmSYJ0+iMLQ3vVgQhsScd02J3kw5dZy6qDC5HE7rksKI07dJbLxQyaVJO1uLkIRd+wyNj7baUSX/hepWJ/kw72AI6ZewCcfjjjNj1sxxgmgIvZT1F2G1QVpTmIPYEfvsm161QJ1j0Ieex73CtinYUZrRf7r6l6h+kmZ/VYb2KkJl5LCcb3HObvAQeGrGSwjDbbVvvai9RKBQoHogKryjFK86aESqmyn/FyLmWRWBL9ZLZ85p5FQaudkgmsXl5kphJjA52bd45TcESOPznWA92+k+KpIo7IdKxSPjVuW0F1UzIsLfjQMcUgc43AwNuBTkU5DGOu4J9dA+Au7lHEuVnoU/g3Jjjj3lu9UKrB5fFluyTjr1bHTYKQbo1OwgxWK0iJLK81iZ15HwJAsuro532v3aDIahzpkaVRdQlBqvxZ8eYnKqNLV10xPc+CgAckVSQiXOTBLu8Bl73JpJb5N0J4F2dok6fTWdZonSMOY+P1BY4qFwQgl5Y1vgmB0SJ6vkhTBa7Q2NmfyOzUOqStSYT6xUilMbCT2XgP6Ap+ZYemS3CAAAAAElFTkSuQmCC',
  $f =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXCSURBVHgBtVhtbFNVGH7PuXeJYx+06RgsQtwQF02QVRMj6g+6ETAGwQ22RAyQoTNxJmYdSqKg2YguIUFcpz9GopjJiPhjc3EBiSGyzh8CMZoOpj+mkSbEbO7Ddp3TCO09vu/pbtO6u/Z+zGf9OPeee3ufvc/7dQ4DmxifivgUlVeJBPMBE17GwCUEuGgOx1EBEMZRmAsWimswXLaqKAg2wKxcfDMScd0V537OoUVoQpIRuR7A6CH4x1kYLw4meOJYmdsdhuUkSMTyE7wdhy1C5KKU5WHIVhLmrCcB5ojmJDgxOetnCrRpCxZbDhBJznmYM95e4i78JOu12SYnpmcD4NBq2cC5lD5Q6i5uXeoaQ4JJSZUBITQf/M8gkvgKqUyrdrvd0UXzRjfla3zILrlLl6/A7udehQMvvinHuYCuA/jyxoUyYDS/iCDJihHqBZvoPXcB+l6fh55XpuHUR32m7kmSFL6pSKwTshEcn4404ldLth978pnmbNPw5/zfqXFBQT6YBZEUGvgnZmb9YERwPBIpZ4y3OQ2Iqo0b4Km3GNQfL4D9e3dYuhetCArnbRGMAf2cqg+4pmAq0crBAX6fnIGR0V/gzIfvwOpSD1gFGQc5uOI8rw0PZWRLC5L1cLIRHKL33HnYvatmETkrgUNSI1W/bkVJkKznVNqRG2NwffRn2PfsDgPi1gIHrQgaqC0pguiePnCIk++fMfQ5kp3eOswEDhkLzSWDRaWuBI/KwQJe9ndALUq5veYxeTwyOiZl3bZwTJif/ws+H7yMkl6V5xs/GJMR3tyUO3BITCTpmorM+VSsiVuEZk3eNw4dhMGLw3AWpTvR0YqRWwkbjqxNzX97LSSlXF+xTs7bDRiFsSoVK7dXgDWCjzz8gHx3n+6Hw0c7oTtwBKVbIf3w7GfngSroay0HYBMStwuyGfqfjzMhysEmml/YA+vuLoWBwSF5/OvNW/DEZq+0mhNyScho9lKQlIMDvPT8HumDhLpdW6F2Z43hdVZrdDKpMJeK3476vPsr78H0MpY6plxoTPCqTDUYPtBwvC8joLLAxcEhigoLTF1nt0ar2BBSD2bbit/98JOMVh379z5teN2a1R5MNRdMp5oFREliRwQHv/wGy1u1HFN6IQLbDeQjSU3KKkHrF1oZchyFwCa6T/fBte9/TD34XrTkpa+vyEC4fmMMnIBJkhBWMc0EkW2tlVpMsp76uB9u/TYpUwqBKgcl5BMdhyTJd7H0bdp4n5TcTqJmtF5hPMSo1OHqakgzSZAaVspxVQ9WQt3OapmgSVrKhTpZHb2YtOl8FRIdwUaiEIOD6rUZqfNUBRRV9clF0+RMLJLAPgxMgAh+9UX3ovOHj76HebAGHn80c7VAjQJJfvHtpAEasJHt//Rk1meQ/yHBsMdVWCHTDBozQCedYB9KSfWXpE4HyUtW1mEmxWBXTaSCNJYEVR7v4g4JUsOwvmJtquylo7mpHlNMiallgNx9QP+7rd05JrnRB61Hp2ZiZEW/k8a1ualBNg/btm7OCAwrKUYu5hn0lLmS2yKpSqLipg5ORp0YkkhR5JLPma256SDrobxh3XoZBMmKmiCSzqoftf0UEFbWxTo5FSNXcGhP31TKYLPG4w4wAQEy81IwiuB02K25FBjIMVBSnLmZZMhk6o8Y5UWfpln3R5KVFknJmltvyvcUhRPBEKaVh/47Z0iQlnxxQfsz4E1o9oMmF0hWuXnEeXBO3KmrMNg8yhoSGNmdeIUfkzgs9w6c7nMkq2dl4ZLbb1kjYpWnuFVoiYNys1H6iLNcqRMjSfNUjhmD+7ORy0mQUFri7kn8k6hmHHqkryj2iOrEyGr4HYiJeIVn5YqunPeBBdAWSR4otG/iQ8nLSfX0QNKTvP4P0Gcy8crkG8USEYhpt7uMfG1ZCKYjEpnbohFRAC/+CJKl1SFbaDhElDp1gb0mEgtyrobcRfnDYAP/Aonbcjf2ooktAAAAAElFTkSuQmCC',
  Vf =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAceSURBVHgBvZgLbFNVGMf/99xO2KOjzdh0KGFTQAXNhpniI2qHBl9oVNCIgiAYA2pcRyIGQR4BfKCRoiSgBpnABAmwMGFoCGwTBQSCAw0GBCkJYcAYLRsbga33+H2na1m329u1IP91vW3vuff+7vc637kaElRtnc+l20SeDGguaDJf0+CQEg7eR5/9EvDSJ6+QWk2rgersTHsVEpAWz+CjPp+je6twC4EiaUgFI2NdQOOL0J/QvDS4KiACs7KdTi+uJiCDJQfETPpYJGUsJIuLEa0CFlpJAF0DjQl48vQ5t6ZjhtFmsashhhRCeIUmZvZ0pn1nOdZq58kz5zy4QqtZSQjlek+WM7042hhTwKBL9TIpDRf+ZzEkvWpsmlHodDr9nfabHZRsiMorhTt1uh77/zyEpqZmy3EUOqBXfqvUy8z2d7Igu5VcWoQExDDryrei7MdK9EhPRa8bMnHwsBcpyckYNfIpDB1yX9RjlSXJ3Zkd3B0BWHvGN5aGLU0k5thi706dj0dd92Di+OGwp6WE9+3e+zemf7gYg+++ExPGvxD1HDrVLwOy+IaMHp5OgLU+X47GrjVkDuLUkaPHMYsAxox8Eq+8+ETUcePfno3evbOjQnIZ0nXht6E1NxSPYcBT9Q1LDcMYizi1eesOlK6qwJwPJqJg0O2WYxvPN+GJ4UV4dtgQ5XIzBV2tk6vTlKtVkrD1yK1jEaeWr9yA71dvwoJ5kxTc7r0HlJXyHniZQN7B4m/XRIy3p6XimScfwvJVG1BGsWomThqan9w+qiRhQGHoM+KNO4bbWr0LSxZOw619c3Citg7F783BRNcB/PqZhGdcHbb+vA4r6Abaq2DQANjtKVixamPUc5MnKRZtRWFACelCgnCcqaxFS9Zi8giJgn5kKcqPW28ClrglSleuJddeLjWcPHxDt/Xvg/1/HTI9PxuLzOVWgNyV0LccXAEc6+DhYwqqvRgUgWY0NjZFjuvXR1ly+859MAdUkI46X6OLpkTxMLroXo4bMzgWf9/dwSAn6oP/dntq+LfKX/bgNgLslZ2J8xZFnK1I7s0TlNv5XcHb/nsNyiuqTOFYr7z4OBZXaFi/I/j94HHy0VdaRE3kJDpx8oxKFM7otNSUqNfjXKGXS2gydt3jIvw1xZjn42JTONbddw3A/E+moXRnDvLe1DD+y1QMeWw4JowbHgT+x4vpcxdj9tQJwe+HjuGWm2+yuKrK5nwbvecgBhzPEFOKx6jgthJDri75qNPv7NZ5Xywja45Q5Ygzfs8fBzDi+aFRzxWMOs1ho61ln8dwzz/tQuFDBUhEXGZKV/9E1p8UvsH1FdUYOKAfrs/KiHW4Q1jtLSvfgsEFA8NuileLlqxRcKFaySonuLIN1RgdZSbpKJpY4I+2k7uSUe3mVrZ6QBpoMVopiA3EgivftC0iqdiaC79Zg0/nFnfFeiy/kFEAuQQ0N19QNSukklPbYfvtLayp34uzrc0Ktqtw/NuylRVdhuPGgVeGXGZqzAY0NV2IqF9c2+taGpEiuuHghVM4dvEsLhotXYbbXLkrHsupLoYYvTYqM1VE+2zHuZhPdK6hSU1ToTr2xvUP4v70vqi95FfAHe3HLrSCS7Woe50Aeb2iiRoRMIx90VZOt+TeqDIueEca7LZu6Ns9E4NSeyO3WwaS9aTwWC7CoYS4UjiW0LjtElUiO9PJFjSNw1Ejh6H0h02qbrF0Wn9mXZeGPt0z4ExKgd62pFGdzJTPIwo5w3G2JgIXXD9rXqc9uVq0WcfDP3ZU3h39MaRwsOrxQpCC/pI0XW1ZoR5wctGr4VLCrk4UThmCWn+Cqgqykbg5bDF0H7nb9ABuMFes3IjCBwtQcNftKiY5NnmG4LmVp69QN811Ls5SEiE2lM2mo0W25PKTB57qwP1/XX0DW9Ft1riOfmmY2jIkiztjbjpDUxersbGZLFehLDfj/QkJwbHUYl5DSbYj+Fgk7FdlRakfpW7WEa372rxlB1lzI3rfmKX6uV7ZPZUleeKv3LYHdwzsj4mvj0gYjq2XZNO9l2RLYei5TUTgnaz3uYWmzw8ErGcJbr2O/HtcNRLcMjHQ0EfuTSje2sOxaym0x/ZMv/y8plNmkKvn09rUHVy8XDvZdEo8XfNk9EiLvnAPqe5sQ6UhpetaQdJamDO3JsORNqjjPtNuxqYFnuMHOrqI6/lm3GpbqKuC3EBxZzrG6gTsbhrh5vJztZ/AhWKONp3c2l6W/WBmRnqxNAKvqYeNQsCsmCcCxlZLsgk/zbVuK7iYgKysns6SwMVAoSZQomJFTww0BMZWo62nQbbmZvRIWRDzOMQhfkSSBH0GfXSRy3PY6+0TKVTkQzfA78HCq4qvn1oUT4NxaUGuyYPKqwLYXj5f48MGgwL5dBKC5dWh1ra+kX7u1CX1mgRWJYSthid+JKD/AGYJIt7bEhkzAAAAAElFTkSuQmCC',
  qf = {
    state: {
      questions: [
        {
          id: '1',
          image: Vf,
          heading: 'Lorem ipsum, dolor sit amet adipisicing elit.',
          description:
            'Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit',
        },
        {
          id: '2',
          image: Gf,
          heading: 'Lorem ipsum, dolor sit amet adipisicing elit.',
          description:
            'Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit',
        },
        {
          id: '3',
          image: zf,
          heading: 'Lorem ipsum, dolor sit amet adipisicing elit.',
          description:
            'Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit',
        },
        {
          id: '4',
          image: $f,
          heading: 'Lorem ipsum, dolor sit amet adipisicing elit.',
          description:
            'Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit',
        },
        {
          id: '5',
          image: jf,
          heading: 'Lorem ipsum, dolor sit amet adipisicing elit.',
          description:
            'Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit',
        },
      ],
      activeQuestion: '0',
    },
    getters: {
      getQuestions(e) {
        return e.questions
      },
      getActiveQuestion(e) {
        return e.activeQuestion
      },
    },
    mutations: {
      setActiveQuestion(e, t) {
        e.activeQuestion = t
      },
    },
    actions: {},
    modules: {},
  },
  Uf = './assets/berries-5c729ba4.png',
  Wf = './assets/leftBubbles-54d70c18.png',
  Kf = './assets/rightBubbles-67e6bc97.png',
  Qf = {
    state: {
      items: [
        {
          id: '1',
          type: 'headphones',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        { id: '2', type: 'box', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
        {
          id: '3',
          type: 'board',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
          id: '4',
          type: 'pult',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
          id: '5',
          type: 'headphones',
          text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        { id: '6', type: 'box', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
      ],
      berries: Uf,
      leftBubbles: Wf,
      rightBubbles: Kf,
    },
    getters: {
      getMenuItems(e) {
        return e.items
      },
      getBerriesIMG(e) {
        return e.berries
      },
      getLeftBubblesIMG(e) {
        return e.leftBubbles
      },
      getRightBubblesIMG(e) {
        return e.rightBubbles
      },
    },
    mutations: {},
    actions: {},
    modules: {},
  },
  Yf = Ff({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: { headerSlice: Hf, reviewsSlice: Df, questionsSlice: qf, menuSlice: Qf },
  }),
  Zf = { name: 'base-divider' }
const Xf = { class: 'divider' }
function Jf(e, t) {
  return V(), X('div', Xf)
}
const ep = ce(Zf, [
    ['render', Jf],
    ['__scopeId', 'data-v-9f603320'],
  ]),
  tp = { name: 'base-heading', props: { heading: { type: String, required: !0 }, level: Number } }
const np = { class: 'heading' },
  ip = { key: 0, class: 'text' },
  sp = { key: 1, class: 'text' }
function rp(e, t) {
  const n = se('base-divider')
  return (
    V(),
    X('div', np, [
      W(n, { class: gt({ mobile: e.$props.level !== 2 }) }, null, 8, ['class']),
      e.$props.level === 2
        ? (V(), X('h2', ip, $e(e.heading), 1))
        : (V(), X('h1', sp, $e(e.heading), 1)),
    ])
  )
}
const op = ce(tp, [
    ['render', rp],
    ['__scopeId', 'data-v-2c081594'],
  ]),
  lp = (e) => {
    e.component('base-divider', ep), e.component('base-heading', op)
  },
  Jr = Ma(df).use(Yf)
lp(Jr)
Jr.mount('#app')
