var e,
  t,
  n,
  r,
  s,
  a,
  i,
  o,
  c,
  h,
  l,
  u,
  d,
  p,
  g,
  f,
  w,
  m,
  y,
  E,
  S,
  b,
  v,
  M,
  N,
  A,
  C,
  _,
  T,
  L,
  k,
  R,
  P,
  x,
  I,
  F,
  D,
  W,
  O,
  U,
  B,
  G,
  V,
  H,
  $,
  j,
  X,
  z,
  K,
  Y,
  Z,
  q,
  J,
  Q,
  ee,
  te,
  ne = (e) => {
    throw TypeError(e);
  },
  re = (e, t, n) => t.has(e) || ne("Cannot " + n),
  se = (e, t, n) => (
    re(e, t, "read from private field"),
    n ? n.call(e) : t.get(e)
  ),
  ae = (e, t, n) =>
    t.has(e)
      ? ne("Cannot add the same private member more than once")
      : t instanceof WeakSet
        ? t.add(e)
        : t.set(e, n),
  ie = (e, t, n, r) => (
    re(e, t, "write to private field"),
    r ? r.call(e, n) : t.set(e, n),
    n
  ),
  oe = (e, t, n) => (re(e, t, "access private method"), n);
import {
  S as ce,
  i as he,
  s as le,
  n as ue,
  d as de,
  k as pe,
  b as ge,
  c as fe,
  e as we,
  o as me,
  f as ye,
  a4 as Ee,
} from "./CHj1SSsY.js";
import { a as Se, B as be, b as ve } from "./Y63yw9rt.js";
import { h as Me } from "./CQSQNu0h.js";
import {
  T as Ne,
  A as Ae,
  G as Ce,
  S as _e,
  D as Te,
  a as Le,
  b as ke,
  R as Re,
} from "./CRNNNCwz.js";
import { e as Pe, f as xe, g as Ie } from "./C8gngcK2.js";
import { A as Fe } from "./Cj-wvwrR.js";
import { b as De } from "./CSht1uUK.js";
function We(e) {
  let t,
    n,
    r,
    s = e[1].fullTitle + "";
  return {
    c() {
      ((t = we("div")),
        (n = me("Todo ")),
        (r = me(s)),
        ye(t, "class", "calendar svelte-k0rgl2"));
    },
    m(e, s) {
      (ge(e, t, s), fe(t, n), fe(t, r));
    },
    p(e, [t]) {
      2 & t && s !== (s = e[1].fullTitle + "") && pe(r, s);
    },
    i: ue,
    o: ue,
    d(e) {
      e && de(t);
    },
  };
}
function Oe(e, t, n) {
  let r,
    s = ue,
    a = () => (s(), (s = Ee(i, (e) => n(1, (r = e)))), i);
  e.$$.on_destroy.push(() => s());
  let { settings: i } = t;
  return (
    a(),
    (e.$$set = (e) => {
      "settings" in e && a(n(0, (i = e.settings)));
    }),
    [i, r]
  );
}
const Ue = class e extends Fe {
  constructor(t) {
    (super(
      t ?? { uid: "calendar", type: "calendar" },
      { showFutureEvents: !0, showPastEvents: !0, distance: 0, apply: 0 },
      {
        button: { backgroundColor: 16777215, textColor: 0 },
        group: {
          borderColor: 15132390,
          backgroundColor: 16777215,
          title: {
            textColor: 6974069,
            backgroundColor: 15987699,
            linkColor: 21964,
          },
          event: {
            titleColor: 0,
            timeColor: 9408407,
            descriptionColor: 9408407,
          },
        },
      },
      e.type,
      e.category,
      e.digits,
      e.flags,
    ),
      (this.loading = 0));
  }
  setCurrency(e, t) {
    ((this.currencyMargin = e), (this.currencyProfit = t), this.refresh());
  }
  setLoading(e) {
    ((this.loading = e), this.refresh());
  }
};
((Ue.type = "calendar"), (Ue.category = 6), (Ue.digits = 0), (Ue.flags = 27));
let Be = Ue;
var Ge = ((e) => (
    (e[(e.EN = 0)] = "EN"),
    (e[(e.RU = 1)] = "RU"),
    (e[(e.DE = 2)] = "DE"),
    (e[(e.ES = 3)] = "ES"),
    (e[(e.PT = 4)] = "PT"),
    (e[(e.JP = 5)] = "JP"),
    (e[(e.ZH = 6)] = "ZH"),
    (e[(e.AR = 7)] = "AR"),
    (e[(e.ALL = 255)] = "ALL"),
    e
  ))(Ge || {}),
  Ve = ((e) => (
    (e[(e.POINT = 1)] = "POINT"),
    (e[(e.DESCRIPTION = 2)] = "DESCRIPTION"),
    e
  ))(Ve || {}),
  He = ((e) => (
    (e[(e.CHANGE_ID = 0)] = "CHANGE_ID"),
    (e[(e.RANGE_ASC = 1)] = "RANGE_ASC"),
    (e[(e["RANGE_DESС"] = 2)] = "RANGE_DESС"),
    (e[(e.RANGE_AND_PARENT_ASC = 3)] = "RANGE_AND_PARENT_ASC"),
    (e[(e["RANGE_AND_PARENT_DESС"] = 4)] = "RANGE_AND_PARENT_DESС"),
    e
  ))(He || {}),
  $e = ((e) => (
    (e[(e.USA = 840)] = "USA"),
    (e[(e.EUR = 999)] = "EUR"),
    (e[(e.JPN = 392)] = "JPN"),
    (e[(e.GBR = 826)] = "GBR"),
    (e[(e.CAN = 124)] = "CAN"),
    (e[(e.AUS = 36)] = "AUS"),
    (e[(e.CHE = 756)] = "CHE"),
    (e[(e.CHN = 156)] = "CHN"),
    (e[(e.NZL = 554)] = "NZL"),
    (e[(e.SWE = 752)] = "SWE"),
    (e[(e.DEU = 276)] = "DEU"),
    (e[(e.FRA = 250)] = "FRA"),
    (e[(e.ITA = 380)] = "ITA"),
    (e[(e.ESP = 724)] = "ESP"),
    (e[(e.BRA = 76)] = "BRA"),
    (e[(e.KOR = 410)] = "KOR"),
    (e[(e.HKG = 344)] = "HKG"),
    (e[(e.SGP = 702)] = "SGP"),
    (e[(e.MEX = 484)] = "MEX"),
    (e[(e.ZAF = 710)] = "ZAF"),
    (e[(e.IND = 356)] = "IND"),
    (e[(e.NOR = 578)] = "NOR"),
    (e[(e.ALL = 0)] = "ALL"),
    e
  ))($e || {}),
  je = ((e) => (
    (e[(e.Fail = -1)] = "Fail"),
    (e[(e.FailAccessDenied = -2)] = "FailAccessDenied"),
    (e[(e.FailInvalidParams = -3)] = "FailInvalidParams"),
    (e[(e.FailInvalidRequest = -4)] = "FailInvalidRequest"),
    (e[(e.FailInvalidVersion = -5)] = "FailInvalidVersion"),
    (e[(e.FailDisconnect = -6)] = "FailDisconnect"),
    (e[(e.FailOutOfMemory = -7)] = "FailOutOfMemory"),
    (e[(e.FailSqlError = -8)] = "FailSqlError"),
    (e[(e.FailBanned = -9)] = "FailBanned"),
    (e[(e.FailNetwork = -10)] = "FailNetwork"),
    (e[(e.FailDataTooBig = -11)] = "FailDataTooBig"),
    (e[(e.FailNotFound = -12)] = "FailNotFound"),
    (e[(e.FailDuplicate = -13)] = "FailDuplicate"),
    (e[(e.FailBannedTemporary = -14)] = "FailBannedTemporary"),
    (e[(e.FailDisallowed = -15)] = "FailDisallowed"),
    (e[(e.FailInterrupted = -16)] = "FailInterrupted"),
    (e[(e.Success = 1)] = "Success"),
    (e[(e.SuccessPartial = 2)] = "SuccessPartial"),
    (e[(e.SuccessSame = 3)] = "SuccessSame"),
    (e[(e.SuccessDisconnect = 4)] = "SuccessDisconnect"),
    e
  ))(je || {}),
  Xe = ((e) => (
    (e[(e.NAME = 1)] = "NAME"),
    (e[(e.FULL_NAME = 2)] = "FULL_NAME"),
    (e[(e.DESCRIPTION = 4)] = "DESCRIPTION"),
    (e[(e.FULL_DESCRIPTION = 8)] = "FULL_DESCRIPTION"),
    (e[(e.SOURCE = 16)] = "SOURCE"),
    e
  ))(Xe || {}),
  ze = ((e) => (
    (e[(e.NAME = 0)] = "NAME"),
    (e[(e.FULL_NAME = 1)] = "FULL_NAME"),
    (e[(e.DESCRIPTION = 2)] = "DESCRIPTION"),
    (e[(e.FULL_DESCRIPTION = 3)] = "FULL_DESCRIPTION"),
    (e[(e.SOURCE = 4)] = "SOURCE"),
    e
  ))(ze || {}),
  Ke = ((e) => (
    (e[(e.NONE = 0)] = "NONE"),
    (e[(e.PERCENT = 1)] = "PERCENT"),
    (e[(e.CURRENCY = 2)] = "CURRENCY"),
    (e[(e.HOUR = 3)] = "HOUR"),
    (e[(e.JOB = 4)] = "JOB"),
    (e[(e.RIG = 5)] = "RIG"),
    (e[(e.USD = 6)] = "USD"),
    (e[(e.PEOPLE = 7)] = "PEOPLE"),
    (e[(e.MORTGAGE = 8)] = "MORTGAGE"),
    (e[(e.VOTE = 9)] = "VOTE"),
    (e[(e.BARREL = 10)] = "BARREL"),
    (e[(e.CUBICFEET = 11)] = "CUBICFEET"),
    (e[(e.PSOTION = 12)] = "PSOTION"),
    (e[(e.BUILDING = 13)] = "BUILDING"),
    e
  ))(Ke || {});
function Ye(e, t) {
  return `incorrect type ${e}, expected ${t}`;
}
function Ze(e, t = "", n = 0) {
  if (!e) return;
  const r = new DataView(e);
  for (let s = 0, a = t.length; s < a; s++)
    (r.setInt8(n, t.charCodeAt(s)), (n += 1));
}
function qe(e, t = 0, n = 0) {
  const r = new Uint8Array(e.slice(t, t + n));
  return String.fromCharCode(...r);
}
function Je(e) {
  let t = 0;
  return (
    e.forEach((e) => {
      var n, r;
      switch (e.propType) {
        case 1:
        case 4:
          t += 1;
          break;
        case 2:
        case 5:
          t += 2;
          break;
        case 3:
        case 6:
        case 7:
          t += 4;
          break;
        case 8:
        case 9:
        case 17:
        case 18:
          t += 8;
          break;
        case 10:
          e.propLength
            ? (t += e.propLength)
            : "string" == typeof e.propValue && (t += e.propValue.length);
          break;
        case 11:
          if (e.propLength) t += e.propLength;
          else {
            if ("string" != typeof e.propValue) {
              const t = Ye(typeof e.propValue, "string");
              throw new Error(t);
            }
            t += 2 * e.propValue.length;
          }
          break;
        case 12:
          if (e.propLength) t += e.propLength;
          else {
            if (
              (null == (n = e.propValue) ? void 0 : n.constructor) !==
              ArrayBuffer
            ) {
              const t = Ye(typeof e.propValue, "ArrayBuffer");
              throw new Error(t);
            }
            t +=
              e.propLength ||
              (null == (r = e.propValue) ? void 0 : r.byteLength) ||
              0;
          }
      }
    }),
    t
  );
}
const Qe = {
  parse: function (e, t, n = 0) {
    const r = [],
      s = new DataView(e);
    return (
      t.forEach((t, a) => {
        if (n >= e.byteLength) return;
        let i = 0;
        switch (t.propType) {
          case 1:
            ((i = s.getInt8(n)), (n += 1));
            break;
          case 2:
            ((i = s.getInt16(n, !0)), (n += 2));
            break;
          case 3:
            ((i = s.getInt32(n, !0)), (n += 4));
            break;
          case 4:
            ((i = s.getUint8(n)), (n += 1));
            break;
          case 5:
            ((i = s.getUint16(n, !0)), (n += 2));
            break;
          case 6:
            ((i = s.getUint32(n, !0)), (n += 4));
            break;
          case 7:
            ((i = s.getFloat32(n, !0)), (n += 4));
            break;
          case 8:
            ((i = s.getFloat64(n, !0)), (n += 8));
            break;
          case 9:
            ((i = (function (e, t = 0) {
              const n = new Uint8Array(e);
              let r = 0;
              for (let s = 7; s >= 0; s--) r = 256 * r + n[t + s];
              return ((r = Math.floor(r / 1e4) - 116444736e5), r);
            })(e, n)),
              (n += 8));
            break;
          case 10:
            ((i = qe(e, n, t.propLength)), t.propLength && (n += t.propLength));
            break;
          case 11:
            ((i = (function (e, t = 0, n = 0) {
              if (!e) return "";
              const r = new DataView(e);
              let s = "";
              for (let a = t, i = t + n; a < i; a += 2) {
                const e = r.getUint16(a, !0);
                if (0 === e) break;
                s += String.fromCharCode(e);
              }
              return s;
            })(e, n, t.propLength)),
              (null == t ? void 0 : t.propLength) && (n += t.propLength));
            break;
          case 12:
            if (t.propLength || t.propLengthType) {
              if (t.propLengthType)
                switch (t.propLengthType) {
                  case 4:
                    ((t.propLength = s.getUint8(n)), (n += 1));
                    break;
                  case 5:
                    ((t.propLength = s.getUint16(n, !0)), (n += 2));
                    break;
                  case 6:
                    ((t.propLength = s.getUint32(n, !0)), (n += 4));
                }
              if (!t.propLength) return;
              ((i = e.slice(n, n + t.propLength)),
                t.parser && i instanceof ArrayBuffer && (i = t.parser(i)),
                (n += t.propLength));
            }
            break;
          case 17:
            ((i = s.getBigInt64(n, !0)), (n += 8));
            break;
          case 18:
            ((i = s.getBigUint64(n, !0)), (n += 8));
        }
        r[a] = i;
      }),
      r
    );
  },
  toHex: function (e) {
    return Array.from(new Uint8Array(e))
      .map((e) => e.toString(16).padStart(2, "0"))
      .join("");
  },
  serialize: function (e) {
    if (!e.length) return null;
    const t = new ArrayBuffer(
        Je(
          e.map((e) => ({
            propType: e[0],
            propValue: e[1],
            propLength: e[2],
            propLengthType: e[3],
          })),
        ),
      ),
      n = new Uint8Array(t),
      r = new DataView(t);
    let s = 0;
    return (
      e.forEach((e) => {
        var a;
        switch (e[0]) {
          case 1:
            if ("number" != typeof e[1]) {
              const t = Ye(typeof e[1], "number");
              throw new Error(t);
            }
            (r.setInt8(s, e[1]), (s += 1));
            break;
          case 2:
            if ("number" != typeof e[1]) {
              const t = Ye(typeof e[1], "number");
              throw new Error(t);
            }
            (r.setInt16(s, e[1], !0), (s += 2));
            break;
          case 3:
            if ("number" != typeof e[1]) {
              const t = Ye(typeof e[1], "number");
              throw new Error(t);
            }
            (r.setInt32(s, e[1], !0), (s += 4));
            break;
          case 17:
            if ("bigint" != typeof e[1]) {
              const t = Ye(typeof e[1], "bigint");
              throw new Error(t);
            }
            (r.setBigInt64(s, e[1], !0), (s += 8));
            break;
          case 4:
            if ("number" != typeof e[1]) {
              const t = Ye(typeof e[1], "number");
              throw new Error(t);
            }
            (r.setUint8(s, e[1]), (s += 1));
            break;
          case 5:
            if ("number" != typeof e[1]) {
              const t = Ye(typeof e[1], "number");
              throw new Error(t);
            }
            (r.setUint16(s, e[1], !0), (s += 2));
            break;
          case 6:
            if ("number" != typeof e[1]) {
              const t = Ye(typeof e[1], "number");
              throw new Error(t);
            }
            (r.setUint32(s, e[1], !0), (s += 4));
            break;
          case 18:
            if ("bigint" != typeof e[1]) {
              const t = Ye(typeof e[1], "bigint");
              throw new Error(t);
            }
            (r.setBigUint64(s, e[1], !0), (s += 8));
            break;
          case 7:
            if ("number" != typeof e[1]) {
              const t = Ye(typeof e[1], "number");
              throw new Error(t);
            }
            (r.setFloat32(s, e[1], !0), (s += 4));
            break;
          case 8:
            if ("number" != typeof e[1]) {
              const t = Ye(typeof e[1], "number");
              throw new Error(t);
            }
            (r.setFloat64(s, e[1], !0), (s += 8));
            break;
          case 9:
            if ("number" != typeof e[1]) {
              const t = Ye(typeof e[1], "number");
              throw new Error(t);
            }
            (!(function (e, t, n) {
              if (!e) return;
              const r = new DataView(e);
              let s = 1e4 * (n + 116444736e5);
              for (let a = 0; a < 8; a++)
                (r.setInt8(t + a, s % 256), (s /= 256));
            })(t, s, e[1]),
              (s += 8));
            break;
          case 10:
            if ("string" != typeof e[1]) {
              const t = Ye(typeof e[1], "string");
              throw new Error(t);
            }
            (Ze(t, e[1], s), (s += e[2] || e[1].length));
            break;
          case 11:
            if ("string" != typeof e[1]) {
              const t = Ye(typeof e[1], "string");
              throw new Error(t);
            }
            (!(function (e, t = "", n = 0) {
              if (!e) return;
              const r = new DataView(e);
              for (let s = 0, a = t.length; s < a; s++)
                (r.setInt16(n, t.charCodeAt(s), !0), (n += 2));
            })(t, e[1], s),
              (s += e[2] || 2 * e[1].length));
            break;
          case 12:
            if ((null == (a = e[1]) ? void 0 : a.constructor) !== ArrayBuffer) {
              const t = Ye(typeof e[1], "ArrayBuffer");
              throw new Error(t);
            }
            (n.set(new Uint8Array(e[1]), s), (s += e[1].byteLength));
        }
      }),
      t
    );
  },
  getSeriesSize: Je,
  setCharString: Ze,
  getCharString: qe,
  getString16: function (e, t, n) {
    const r = new Uint8Array(e.slice(t, t + n));
    return (function (e) {
      let t = "";
      const n = e.length;
      let r = 0;
      for (; r < n; ) {
        const n = e.charCodeAt(r);
        switch (((r += 1), n >> 4)) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
            t += e.charAt(r - 1);
            break;
          case 12:
          case 13: {
            const s = e.charCodeAt(r);
            ((r += 1), (t += String.fromCharCode(((31 & n) << 6) | (63 & s))));
            break;
          }
          case 14: {
            const s = e.charCodeAt(r);
            r += 1;
            const a = e.charCodeAt(r);
            ((r += 1),
              (t += String.fromCharCode(
                ((15 & n) << 12) | ((63 & s) << 6) | (63 & a),
              )));
            break;
          }
        }
      }
      return t;
    })(String.fromCharCode(...r));
  },
  concat: function (e, t) {
    const n = new Uint8Array(e.byteLength + t.byteLength);
    return (
      n.set(new Uint8Array(e), 0),
      n.set(new Uint8Array(t), e.byteLength),
      n.buffer
    );
  },
};
class et {
  constructor(t, n, r) {
    (ae(this, e),
      (this.uid = t),
      (this.command = n),
      (this.buffer = r),
      (this.promise = new Promise((e, t) => {
        ((this.resolve = e), (this.reject = t));
      })));
  }
  timeout(t) {
    return (
      ie(
        this,
        e,
        globalThis.setTimeout(() => t(this), 3e4),
      ),
      this
    );
  }
  stop() {
    return (clearTimeout(se(this, e)), ie(this, e, void 0), this);
  }
}
e = new WeakMap();
const tt = { INFO: 6, EVENT: 87, EVENTS: 86 },
  nt = navigator.userAgent,
  rt = navigator.appVersion;
let st, at;
function it() {
  let e = 0,
    t = 0;
  const n =
    (void 0 === at &&
      (function () {
        const e = [
          { name: "Windows 10", regex: /(Windows 10.0|Windows NT 10.0)/ },
          { name: "Windows 8.1", regex: /(Windows 8.1|Windows NT 6.3)/ },
          { name: "Windows 8", regex: /(Windows 8|Windows NT 6.2)/ },
          { name: "Windows 7", regex: /(Windows 7|Windows NT 6.1)/ },
          { name: "Windows Vista", regex: /Windows NT 6.0/ },
          { name: "Windows Server 2003", regex: /Windows NT 5.2/ },
          { name: "Windows XP", regex: /(Windows NT 5.1|Windows XP)/ },
          { name: "Windows 2000", regex: /(Windows NT 5.0|Windows 2000)/ },
          { name: "Windows ME", regex: /(Win 9x 4.90|Windows ME)/ },
          { name: "Windows 98", regex: /(Windows 98|Win98)/ },
          { name: "Windows 95", regex: /(Windows 95|Win95|Windows_95)/ },
          {
            name: "Windows NT 4.0",
            regex: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/,
          },
          { name: "Windows CE", regex: /Windows CE/ },
          { name: "Windows 3.11", regex: /Win16/ },
          { name: "Android", regex: /Android/ },
          { name: "Open BSD", regex: /OpenBSD/ },
          { name: "Sun OS", regex: /SunOS/ },
          { name: "Chrome OS", regex: /CrOS/ },
          { name: "Linux", regex: /(Linux|X11(?!.*CrOS))/ },
          { name: "iOS", regex: /(iPhone|iPad|iPod)/ },
          { name: "Mac OS X", regex: /Mac OS X/ },
          {
            name: "Mac OS",
            regex: /(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/,
          },
          { name: "QNX", regex: /QNX/ },
          { name: "UNIX", regex: /UNIX/ },
          { name: "BeOS", regex: /BeOS/ },
          { name: "OS/2", regex: /OS\/2/ },
          {
            name: "Search Bot",
            regex:
              /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/,
          },
        ];
        for (let n = 0, r = e.length; n < r; n++) {
          const t = e[n];
          if (t.regex.test(nt)) {
            st = t.name;
            break;
          }
        }
        let t = [];
        switch (
          (st &&
            /Windows/.test(st) &&
            ((t = /Windows (.*)/.exec(st)),
            t && t.length && t.length > 1 && (at = t[1]),
            (st = "Windows")),
          st)
        ) {
          case "Mac OS":
          case "Mac OS X":
          case "Android":
            ((t =
              /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([._\d]+)/.exec(
                nt,
              )),
              t && t.length && t.length > 1 && (at = t[1].replace(/_/g, ".")));
            break;
          case "iOS":
            ((t = /OS (\d+)_(\d+)_?(\d+)?/.exec(rt)),
              t &&
                t.length &&
                t.length > 2 &&
                (at = `${t[1]}.'${t[2]}.${t.length > 3 ? t[3] : 0}`));
        }
        (void 0 === at && (at = ""), void 0 === st && (st = ""));
      })(),
    at || "");
  if (n) {
    const r = n.split(".");
    ((e = parseInt(r[0], 10)), r.length > 1 && (t = parseInt(r[1], 10)));
  }
  return 100 * e + t;
}
function ot() {
  const e = (function () {
    const e = `; ${document.cookie}`.split("; _fz_uniq=");
    if (2 !== e.length) return "";
    const t = e.pop();
    if (!t) return "";
    const n = t.split(";").shift();
    return n ? decodeURIComponent(n) : "";
  })();
  if (!e) return 0n;
  try {
    return BigInt(e);
  } catch (t) {
    return 0n;
  }
}
(nt.match(/Android/i),
  nt.match(/BlackBerry/i),
  nt.match(/iPhone|iPad|iPod/i),
  nt.match(/Opera Mini/i),
  nt.match(/IEMobile/i),
  nt.indexOf("MSIE"),
  nt.indexOf("Gecko/"),
  (function () {
    try {
      /* @cc_on true ||@ */
      return !!document.documentMode;
    } catch {
      return !1;
    }
  })());
const ct = 13;
let ht = 1e3;
class lt {
  constructor() {
    (ae(this, a),
      ae(this, t),
      ae(this, n),
      ae(this, r),
      ae(this, s),
      ae(this, l),
      ae(this, u),
      ie(this, t, new Map()),
      ie(this, n, new Map()),
      (this.inited = !1),
      ie(this, l, (e) => {
        (ie(this, s, Qe.concat(se(this, s), e.data)),
          oe(this, a, h).call(this));
      }),
      ie(this, u, (e) => {
        (e.stop(),
          e.reject &&
            e.reject(
              new Error(
                `request timeout (command: ${e.command}, uid: ${e.uid})`,
              ),
            ),
          se(this, t).delete(e.uid));
      }),
      se(this, n).set(tt.EVENT, new Set()),
      se(this, n).set(tt.EVENTS, new Set()),
      ie(this, s, new ArrayBuffer(0)));
  }
  connect(e) {
    return new Promise((t, n) => {
      ie(this, r, new WebSocket("wss://msg1.mql5.com"));
      const s = se(this, r);
      ((s.binaryType = "arraybuffer"),
        s.addEventListener("message", se(this, l)),
        s.addEventListener("close", n),
        s.addEventListener("error", n),
        s.addEventListener("open", () => {
          (s.removeEventListener("close", n),
            s.removeEventListener("error", n),
            (this.inited = !0));
          const r =
            ((o = e),
            Qe.serialize([
              [4, o.protocol_version],
              [4, o.client_type],
              [6, o.client_build],
              [6, 0],
              [18, 0n],
              [6, 0],
              [6, it() ?? 0],
              [4, o.connect_type],
              [18, ot() ?? 0n],
              [4, 0],
            ]));
          var o;
          (r && oe(this, a, i).call(this, tt.INFO, r, !1), t(this));
        }));
    });
  }
  close() {
    var e;
    (se(this, n).clear(),
      se(this, t).clear(),
      null == (e = se(this, r)) || e.close(),
      ie(this, r, void 0));
  }
  send(e, t, n = !0) {
    return (function (e) {
      return [tt.EVENT, tt.EVENTS, tt.INFO].includes(e);
    })(e)
      ? oe(this, a, i).call(this, e, t, n)
      : Promise.reject(new Error(`unknown command (${e})`));
  }
  on(e, t) {
    var r;
    return (null == (r = se(this, n).get(e)) || r.add(t), this);
  }
  off(e, t) {
    const r = se(this, n).get(e);
    return (
      t && (null == r ? void 0 : r.has(t)) && r.delete(t),
      t || se(this, n).set(e, new Set()),
      this
    );
  }
}
function ut(e, t, n, r) {
  const s = [
    [4, Ve.POINT],
    [4, e],
    [6, 0],
    [6, 1e3],
  ];
  return (
    r ? s.push([4, He.CHANGE_ID], [18, r]) : s.push([4, He.RANGE_ASC]),
    s.push([9, t], [9, n]),
    Qe.serialize(s)
  );
}
((t = new WeakMap()),
  (n = new WeakMap()),
  (r = new WeakMap()),
  (s = new WeakMap()),
  (a = new WeakSet()),
  (i = function (e, t, n) {
    const r = ht;
    ht += 1;
    const s = (function (e, t, n) {
        const r = (n && n.byteLength) || 0,
          s = new Uint8Array(ct + r);
        n && s.set(new Uint8Array(n), ct);
        const a = new DataView(s.buffer);
        return (
          a.setUint8(0, t),
          a.setFloat64(1, e, !0),
          a.setUint32(9, r, !0),
          s.buffer
        );
      })(r, e, t),
      i = new et(r, e, s);
    return (
      n && i.timeout(se(this, u)),
      oe(this, a, o).call(this, i),
      i.promise
    );
  }),
  (o = function (e) {
    var n;
    (se(this, t).set(e.uid, e), null == (n = se(this, r)) || n.send(e.buffer));
  }),
  (c = function (e) {
    const { uid: r, command: s } = e,
      a = se(this, t).get(r);
    a && (a.stop().resolve(e), se(this, t).delete(s));
    const i = se(this, n).get(s);
    i &&
      i.forEach((t) => {
        t.call(this, e);
      });
  }),
  (h = function () {
    const e = se(this, s).byteLength;
    if (e > ct) {
      const t = (function (e) {
        const t = new DataView(e);
        return {
          command: t.getUint8(0),
          uid: t.getFloat64(1, !0),
          size: t.getUint32(9, !0),
          body: e.slice(13),
        };
      })(se(this, s));
      e >= t.size + ct &&
        ((t.body = se(this, s).slice(ct, ct + t.size)),
        oe(this, a, c).call(this, t),
        ie(this, s, se(this, s).slice(ct + t.size)),
        oe(this, a, h).call(this));
    }
  }),
  (l = new WeakMap()),
  (u = new WeakMap()));
const dt = [
  { propType: 4 },
  { propType: 4 },
  { propType: 4 },
  { propType: 4 },
  { propType: 5 },
  { propType: 4 },
  { propType: 4 },
  { propType: 4 },
  { propType: 4 },
  { propType: 12, propLengthType: 5, parser: pt },
  { propType: 12, propLengthType: 5, parser: pt },
];
function pt(e) {
  return Qe.getString16(e, 0, e.byteLength);
}
const gt = [
  { propType: 4 },
  { propType: 9 },
  { propType: 4 },
  { propType: 17 },
  { propType: 17 },
  { propType: 17 },
  { propType: 17 },
  { propType: 4 },
];
function ft(e) {
  const t = {},
    n = e.byteLength,
    r = new DataView(e);
  let s = 0;
  for (; s < n; ) {
    const n = r.getUint8(s);
    s += 1;
    const a = r.getUint32(s, !0);
    ((s += 4), (t[n] = wt(e.slice(s, s + a))), (s += a));
  }
  return t;
}
function wt(e) {
  const t = {},
    n = e.byteLength,
    r = new DataView(e);
  let s = 0;
  for (; s < n; ) {
    const n = r.getUint8(s);
    s += 1;
    const a = r.getUint16(s, !0);
    ((s += 2), (t[n] = Qe.getString16(e, s, a)), (s += a));
  }
  return t;
}
const mt = [
    { propType: 4 },
    { propType: 17 },
    { propType: 17 },
    { propType: 9 },
    { propType: 17 },
    { propType: 4 },
  ],
  yt = Qe.getSeriesSize(mt);
function Et(e) {
  const t = Qe.parse(e, mt),
    n = e.slice(yt, e.byteLength),
    r =
      ((s = t[0]),
      [
        {
          propType: 12,
          propLengthType: 6,
          parser: (e) =>
            (function (e, t) {
              let n;
              if (t === Ve.POINT)
                n = (function (e) {
                  const t = Qe.parse(e, gt);
                  return {
                    is_time_unknown: t[0],
                    period: t[1],
                    revision: t[2],
                    actual_value: t[3],
                    prev_value: t[4],
                    revised_prev_value: t[5],
                    forecast_value: t[6],
                    impact_type: t[7],
                  };
                })(e);
              else {
                if (t !== Ve.DESCRIPTION) throw Error("type is incorrect");
                n = (function (e) {
                  const t = Qe.parse(e, dt);
                  return {
                    type: t[0],
                    sector: t[1],
                    frequency: t[2],
                    time_mode: t[3],
                    country: t[4],
                    unit: t[5],
                    importance: t[6],
                    multiplier: t[7],
                    digits: t[8],
                    source_url: t[9],
                    event_code: t[10],
                  };
                })(e);
              }
              return n;
            })(e, s),
        },
        { propType: 12, propLengthType: 6, parser: ft },
      ]);
  var s;
  const a = Qe.parse(n, r);
  return {
    type: t[0],
    id: t[1].toString(),
    parent_id: t[2].toString(),
    datetime: t[3],
    change_id: t[4].toString(),
    is_deleted: t[5],
    data: a[0],
    translates: a[1],
  };
}
function St(e) {
  const t = [{ propType: 1 }, { propType: 17 }],
    n = [
      {
        propType: 12,
        parser: bt,
        propLength: e.byteLength - Qe.getSeriesSize(t),
      },
    ],
    r = [...t, ...n],
    s = Qe.parse(e, r);
  return { result: s[0], last_change_id: s[1], records: s[2] ?? [] };
}
function bt(e) {
  const t = [];
  let n = 0;
  const r = new DataView(e),
    s = e.byteLength;
  for (; n < s; ) {
    const s = r.getUint32(n, !0) || 0;
    ((n += 4), s && t.push(Et(e.slice(n, n + s))), (n += s));
  }
  return t;
}
class vt {
  constructor(e, t, n) {
    ((this.db = e), (this.name = t), (this.keyPath = n));
  }
  static createStore(e, t, n) {
    try {
      return (
        e
          .createObjectStore(t, { keyPath: n })
          .createIndex(n, [n], { unique: !0 }),
        new vt(e, t, n)
      );
    } catch (r) {
      throw r;
    }
  }
  getAll() {
    return new Promise((e) => {
      const t = this.db
        .transaction(this.name, "readwrite")
        .objectStore(this.name)
        .index(this.keyPath)
        .getAll();
      t.onsuccess = () => {
        const n = t.result;
        e(n);
      };
    });
  }
  get(e) {
    return new Promise((t) => {
      const n = this.db
        .transaction(this.name, "readwrite")
        .objectStore(this.name)
        .get(e);
      n.onsuccess = () => {
        const e = n.result;
        t(e);
      };
    });
  }
  async add(e) {
    this.db.transaction(this.name, "readwrite").objectStore(this.name).put(e);
  }
  async remove(e) {
    this.db
      .transaction(this.name, "readwrite")
      .objectStore(this.name)
      .delete(e);
  }
  async clear() {
    return new Promise((e, t) => {
      const n = this.db
        .transaction(this.name, "readwrite")
        .objectStore(this.name)
        .clear();
      ((n.onsuccess = () => e()),
        (n.onerror = () => {
          t(new Error("clear error"));
        }));
    });
  }
  async addMany(e) {
    const t = this.db
      .transaction(this.name, "readwrite")
      .objectStore(this.name);
    e.forEach((e) => t.put(e));
  }
}
function Mt(e) {
  switch (e) {
    case 1:
      return 9408407;
    case 2:
      return 16293424;
    case 3:
      return 15352132;
    default:
      return 16777215;
  }
}
function Nt(e) {
  switch (e) {
    case $e.ALL:
      return "ALL";
    case $e.USA:
    case $e.AUS:
    case $e.CAN:
    case $e.NZL:
      return "$";
    case $e.MEX:
      return "Mex$";
    case $e.DEU:
    case $e.FRA:
    case $e.ITA:
    case $e.ESP:
    case $e.EUR:
      return "€";
    case $e.GBR:
      return "£";
    case $e.CHN:
    case $e.JPN:
      return "¥";
    case $e.CHE:
      return "₣";
    case $e.SWE:
      return "Kr";
    case $e.BRA:
      return "R$";
    case $e.KOR:
      return "₩";
    case $e.HKG:
      return "HK$";
    case $e.SGP:
      return "R$";
    case $e.ZAF:
      return "R";
    case $e.IND:
      return "₹";
    case $e.NOR:
      return "Kr";
    default:
      return "";
  }
}
function At(e) {
  let t = "Actual: ";
  return e.actual_value !== xe
    ? ((t += Tt(e.actual_value, e)), t)
    : ((t = ""), t);
}
function Ct(e) {
  let t = "Forecast: ";
  return e.forecast_value !== xe
    ? ((t += Tt(e.forecast_value, e)), t)
    : ((t = ""), t);
}
function _t(e) {
  let t = "Previous: ";
  return e.prev_value !== xe
    ? e.revised_prev_value !== xe
      ? ((t += Tt(e.revised_prev_value, e)),
        (t += " ("),
        (t += Tt(e.prev_value, e)),
        (t += ")"),
        t)
      : ((t += Tt(e.prev_value, e)), t)
    : ((t = ""), t);
}
function Tt(e, t) {
  let n = "";
  const r = (function (e, t) {
      let n = e.toString(),
        r = !1,
        s = "";
      if ("0" === n) return "-";
      ("-" === n.charAt(0) && ((r = !0), (n = n.substring(1))),
        n.length <= 6 && (n = n.padStart(7, "0")));
      const a = n.substring(0, n.length - 6);
      let i = n.substring(n.length - 6);
      return (
        i.length < t && (i = i.padEnd(t, "0")),
        r && (s += "-"),
        (s += Number(a).toString()),
        t > 0 && ((s += "."), (s += i.substring(0, t))),
        s
      );
    })(e, t.digits),
    s = (function (e) {
      switch (e) {
        case 1:
          return " K";
        case 2:
          return " M";
        case 3:
          return " B";
        case 4:
          return " T";
        default:
          return "";
      }
    })(t.multiplier),
    a = (function (e) {
      switch (e.unit) {
        case Ke.CURRENCY:
          return Nt(e.country);
        case Ke.USD:
          return Nt($e.USA);
        case Ke.PERCENT:
          return "%";
        default:
          return "";
      }
    })(t);
  return "-" === r
    ? "-"
    : (t.unit !== Ke.PERCENT && (n += a),
      (n += r),
      t.unit === Ke.PERCENT && (n += a),
      (n += s),
      n);
}
const Lt = new Map();
let kt = new Map();
const Rt = new Map(),
  Pt = new Map();
let xt = null;
class It {
  constructor() {
    (ae(this, w),
      ae(this, d, new Set()),
      ae(this, p),
      ae(this, g),
      ae(this, f));
  }
  async connect(e) {
    return ((xt = xt ?? oe(this, w, m).call(this, e)), xt);
  }
  destroy() {
    var e;
    (se(this, d).clear(),
      null == (e = se(this, p)) || e.close(),
      ie(this, p, void 0));
  }
  on(e) {
    se(this, d).add(e);
  }
  off(e) {
    return (e && se(this, d).delete(e), e || se(this, d).clear(), this);
  }
  async prepare(e) {
    const t = Dt();
    (await Promise.all([
      oe(this, w, E).call(this, e),
      oe(this, w, v).call(this, t),
    ]),
      oe(this, w, M).call(this));
  }
  getPoints(e, t, n, r) {
    const s = new Map();
    return (
      e.forEach((e) => {
        const a = Lt.get(e);
        a &&
          kt.forEach((i) => {
            const o = a.get(i.parent_id);
            if ((null == o ? void 0 : o.parent_id) !== String(e)) return;
            const c = o.data,
              {
                importance: h,
                digits: l,
                multiplier: u,
                unit: d,
                event_code: p,
              } = c,
              g = (function (e) {
                switch (e) {
                  case $e.ALL:
                    return "worldwide";
                  case $e.EUR:
                    return "european-union";
                  case $e.USA:
                    return "united-states";
                  case $e.CAN:
                    return "canada";
                  case $e.AUS:
                    return "australia";
                  case $e.NZL:
                    return "new-zealand";
                  case $e.JPN:
                    return "japan";
                  case $e.CHN:
                    return "china";
                  case $e.GBR:
                    return "united-kingdom";
                  case $e.CHE:
                    return "switzerland";
                  case $e.DEU:
                    return "germany";
                  case $e.FRA:
                    return "france";
                  case $e.ITA:
                    return "italy";
                  case $e.BRA:
                    return "brazil";
                  case $e.KOR:
                    return "south-korea";
                  case $e.HKG:
                    return "hong-kong";
                  case $e.SGP:
                    return "singapore";
                  case $e.MEX:
                    return "mexico";
                  case $e.ESP:
                    return "spain";
                  case $e.ZAF:
                    return "south-africa";
                  case $e.IND:
                    return "india";
                  case $e.SWE:
                    return "sweden";
                  case $e.NOR:
                    return "norway";
                  default:
                    return "";
                }
              })(e),
              f = o.translates[Ge.EN][ze.NAME],
              w = n + 3600 * r,
              m = i.datetime + 1e3 * w,
              y = Se(m, t),
              E = i.data;
            let S = s.get(y);
            (S || ((S = []), s.set(y, S)),
              S.push({
                datetime: m,
                country: e,
                importance: h,
                unit: d,
                title: f,
                digits: l,
                multiplier: u,
                date: y,
                id: i.id,
                actual_value: E.actual_value,
                prev_value: E.prev_value,
                revised_prev_value: E.revised_prev_value,
                forecast_value: E.forecast_value,
                event_code: p,
                event_country: g,
              }));
          });
      }),
      s
    );
  }
  checkPoints(e, t) {
    const n = Math.max(
        Dt(-2, Date.now()),
        Math.min(Dt(0, e), Dt(24, Date.now())),
      ),
      r = Math.max(Dt(-2, Date.now()), Math.min(Dt(0, t), Dt(24, Date.now())));
    let s = n;
    const a = async (e) => {
      (await oe(this, w, v).call(this, e),
        Pt.set(e, !0),
        oe(this, w, y).call(this));
    };
    for (; s <= r; )
      (Pt.has(s) || Rt.has(s) || Pt.set(s, a), (s = Dt(1, Ft(s).from)));
    const i = [...Pt.keys()];
    for (let o = 0; o < i[i.length - 1]; o++) {
      const e = Pt.get(i[o]);
      if ("function" == typeof e) {
        Pt.set(i[o], e(i[o]));
        break;
      }
      if (e instanceof Promise) break;
    }
  }
}
function Ft(e) {
  const t = Math.floor(e / 100),
    n = e % 100;
  return {
    from: new Date(t, n - 1, 1).getTime(),
    to: new Date(t, n, 0).getTime(),
  };
}
function Dt(e = 0, t = Date.now()) {
  const n = e >= 0 ? Math.floor(e / 12) : Math.ceil(e / 12),
    r = e % 12,
    s = new Date(t);
  return (
    s.setFullYear(s.getFullYear() + n),
    s.setMonth(s.getMonth() + r),
    100 * s.getFullYear() + (s.getMonth() + 1)
  );
}
((d = new WeakMap()),
  (p = new WeakMap()),
  (g = new WeakMap()),
  (f = new WeakMap()),
  (w = new WeakSet()),
  (m = async function (e) {
    const t = await new Promise((e, t) => {
      const n = window.self.indexedDB.open("mt_calendar", 1);
      ((n.onerror = (e) => {
        t(new Error("create calendatr error"));
      }),
        (n.onsuccess = () => {
          const t = n.result;
          e({
            descriptions: new vt(t, "descriptions", "country"),
            events: new vt(t, "events", "month"),
          });
        }),
        (n.onupgradeneeded = () => {
          const e = n.result;
          (vt.createStore(e, "descriptions", "country"),
            vt.createStore(e, "events", "month"));
        }));
    });
    (ie(this, g, t.descriptions),
      ie(this, f, t.events),
      ie(this, p, new lt()),
      await se(this, p).connect(e),
      (xt = null),
      oe(this, w, y).call(this));
  }),
  (y = function () {
    se(this, d).forEach((e) => {
      try {
        e.call(this);
      } catch (t) {}
    });
  }),
  (E = async function (e = []) {
    await Promise.all(e.map((e) => oe(this, w, b).call(this, e)));
  }),
  (S = async function (e, t, n) {
    if (
      t.result === je.Success ||
      t.result === je.SuccessPartial ||
      t.result === je.SuccessSame ||
      t.result === je.SuccessDisconnect
    ) {
      if (!n)
        return (
          await se(this, g).add({ country: e, ...t }),
          Lt.set(e, new Map(t.records.map((e) => [e.id, e]))),
          { ...t, country: e }
        );
      if (n.last_change_id === t.last_change_id && !t.records.length)
        return (Lt.set(e, new Map(n.records.map((e) => [e.id, e]))), n);
      if (n.last_change_id === t.last_change_id || !t.records.length)
        return (
          await se(this, g).add({
            country: e,
            last_change_id: t.last_change_id,
            records: n.records,
            result: t.result,
          }),
          Lt.set(e, new Map(n.records.map((e) => [e.id, e]))),
          n
        );
      const r = new Map(n.records.map((e) => [e.id, e]));
      t.records.forEach((e) => {
        e.is_deleted ? r.delete(e.id) : r.set(e.id, e);
      });
      const s = {
        country: e,
        last_change_id: t.last_change_id,
        records: Array.from(r.values()),
        result: t.result,
      };
      return (
        await se(this, g).add(s),
        Lt.set(e, new Map(s.records.map((e) => [e.id, e]))),
        s
      );
    }
    const r = n ?? { country: e, ...t };
    return (Lt.set(e, new Map(r.records.map((e) => [e.id, e]))), r);
  }),
  (b = async function (e) {
    var t;
    if (!(null == (t = se(this, p)) ? void 0 : t.inited)) return [];
    const n = await se(this, g).get(e),
      r = (function (e, t, n) {
        const r = [
          [4, Ve.DESCRIPTION],
          [4, e],
          [6, Xe.NAME],
          [6, 1e3],
        ];
        return (
          n
            ? r.push([4, He.CHANGE_ID], [18, n])
            : r.push(
                [4, He.RANGE_AND_PARENT_ASC],
                [18, BigInt(t)],
                [18, BigInt(0)],
                [18, Pe],
              ),
          Qe.serialize(r)
        );
      })(Ge.EN, e, null == n ? void 0 : n.last_change_id);
    if (!r) return [];
    try {
      const t = await se(this, p).send(tt.EVENTS, r);
      return (await oe(this, w, S).call(this, e, St(t.body), n)).records;
    } catch (s) {
      return [];
    }
  }),
  (v = async function (e) {
    var t, n;
    const r = await se(this, f).get(e);
    r && Rt.set(e, !0);
    let s = je.SuccessPartial;
    const a = (null == r ? void 0 : r.last_change_id) ?? void 0,
      i = new Map((null == r ? void 0 : r.records.map((e) => [e.id, e])) ?? []),
      o = Ft(e);
    if (!(null == (t = se(this, p)) ? void 0 : t.inited)) {
      if (null == (n = null == r ? void 0 : r.records) ? void 0 : n.length) {
        const e = [...kt.values()]
          .concat(r.records)
          .sort((e, t) => e.datetime - t.datetime);
        kt = new Map(e.map((e) => [e.id, e]));
      }
      return { result: s, last_change_id: BigInt(0), records: [...i.values()] };
    }
    for (; s === je.SuccessPartial; ) {
      const e = ut(Ge.EN, o.from, o.to, a);
      if (e) {
        const t = St((await se(this, p).send(tt.EVENTS, e)).body);
        (t.records.length &&
          (t.records.sort((e, t) => e.datetime - t.datetime),
          t.records.forEach((e) => {
            e.is_deleted ? i.delete(e.id) : i.set(e.id, e);
          }),
          (o.from = Math.min(
            t.records[t.records.length - 1].datetime,
            o.to - 1e3,
          ))),
          (s = t.result));
      } else s = je.Success;
    }
    const c = {
      result: s,
      last_change_id: a ?? BigInt(0),
      records: [...i.values()].sort((e, t) => e.datetime - t.datetime),
    };
    c.records.forEach((e) => kt.set(e.id, e));
    const h = [...kt.values()].sort((e, t) => e.datetime - t.datetime);
    return (
      (kt = new Map(h.map((e) => [e.id, e]))),
      await se(this, f).add({ ...c, month: e }),
      r && Rt.set(e, !0),
      c
    );
  }),
  (M = async function () {
    const e = await se(this, f).getAll();
    await Promise.all(e.map((e) => oe(this, w, v).call(this, e.month)));
  }));
const Wt = [
    $e.USA,
    $e.EUR,
    $e.JPN,
    $e.GBR,
    $e.CAN,
    $e.AUS,
    $e.CHE,
    $e.CHN,
    $e.NZL,
    $e.SWE,
    $e.DEU,
    $e.FRA,
    $e.ITA,
    $e.ESP,
    $e.BRA,
    $e.KOR,
    $e.HKG,
    $e.SGP,
    $e.MEX,
    $e.ZAF,
    $e.IND,
    $e.NOR,
    $e.ALL,
  ],
  Ot = Ie(),
  Ut = 48;
let Bt,
  Gt = null;
class Vt extends be {
  constructor(e, t = 13e3, n, r) {
    (super(e, t, n),
      ae(this, R),
      ae(this, N, !1),
      ae(this, A, new Map()),
      ae(this, C),
      ae(this, _, new Map()),
      ae(this, T),
      ae(this, L, null),
      ae(this, k),
      ae(this, V, () => {
        this._draw();
      }),
      ae(this, H, (e) => {
        const t = e.target instanceof Te ? e.target.name : null;
        (ie(this, L, se(this, L) === t ? null : t),
          ie(this, _, new Map()),
          e.stopPropagation(),
          this.draw(),
          this.chart.app.stage.removeEventListener("pointerdown", se(this, $)),
          this.chart.app.stage.addEventListener("pointerdown", se(this, $)));
      }),
      ae(this, $, (e) => {
        const t = e.data.global;
        (this.chart.app.stage.removeEventListener("pointerup", se(this, j)),
          this.chart.app.stage.addEventListener("pointerup", se(this, j)),
          ie(this, C, { x: t.x, y: t.y }));
      }),
      ae(this, j, (e) => {
        const t = e.data.global;
        se(this, C) &&
          (Math.abs(t.x - se(this, C).x) < 3 ||
            Math.abs(t.y - se(this, C).y) < 3) &&
          (this.chart.app.stage.removeEventListener("pointerdown", se(this, $)),
          this.chart.app.stage.removeEventListener("pointerup", se(this, j)),
          ie(this, L, null),
          this.draw());
      }),
      ae(this, X, (e) => {
        e.target instanceof Te &&
          "link" === e.target.name &&
          (e.stopPropagation(),
          window.open("https://www.mql5.com/en/economic-calendar", "_blank"));
      }),
      ae(this, z, (e, t, n) => {
        (e.stopPropagation(),
          window.open(
            `https://www.mql5.com/en/economic-calendar/${t}/${String(n)}`,
            "_blank",
          ));
      }),
      ie(this, k, r),
      (this.titleStyle = new Ne({
        fontFamily: this.chart.style.fontFamily,
        fontSize: 13,
      })),
      this.init());
  }
  async init() {
    try {
      (this.settings.setLoading(1),
        Bt || ((Bt = new It()), await Bt.connect(se(this, k))),
        await oe(this, R, P).call(this),
        Bt.off(se(this, V)),
        ie(this, T, oe(this, R, Z).call(this)),
        Bt.on(se(this, V)),
        await Bt.prepare(se(this, T)),
        ie(this, N, !0),
        this.draw(),
        this.settings.setLoading(2));
    } catch (e) {
      this.settings.setLoading(3);
    }
  }
  _drawGraph(e, t) {}
  destroy() {
    (Bt.off(se(this, V)), super.destroy());
  }
  draw() {
    return this.chart.bars.symbol &&
      (this.settings.currencyMargin || this.settings.currencyProfit)
      ? super.draw()
      : this;
  }
  _init() {}
  _draw() {
    if (!se(this, N)) return;
    super._draw();
    const { state: e } = this.chart,
      t = this.chart.bars,
      n = e.getFrom(),
      r = e.getCount(),
      s = t.time(n),
      a = t.time(n + r);
    (Bt.checkPoints(s, a), oe(this, R, x).call(this));
  }
  tick() {}
}
function Ht(e, t) {
  return e.datetime > t.datetime ? 1 : e.datetime < t.datetime ? -1 : 0;
}
function $t(e) {
  switch (e.toLowerCase()) {
    case "usd":
      return $e.USA;
    case "DEU":
    case "FRA":
    case "ITA":
    case "ESP":
    case "eur":
      return $e.EUR;
    case "jpy":
      return $e.JPN;
    case "gbp":
      return $e.GBR;
    case "cad":
      return $e.CAN;
    case "aud":
      return $e.AUS;
    case "chf":
      return $e.CHE;
    case "cny":
      return $e.CHN;
    case "nzd":
      return $e.NZL;
    case "sek":
      return $e.SWE;
    case "brl":
      return $e.BRA;
    case "krw":
      return $e.KOR;
    case "hkd":
      return $e.HKG;
    case "sgd":
      return $e.SGP;
    case "mxn":
      return $e.MEX;
    case "zar":
      return $e.ZAF;
    case "inr":
      return $e.IND;
    case "nok":
      return $e.NOR;
    default:
      return null;
  }
}
((N = new WeakMap()),
  (A = new WeakMap()),
  (C = new WeakMap()),
  (_ = new WeakMap()),
  (T = new WeakMap()),
  (L = new WeakMap()),
  (k = new WeakMap()),
  (R = new WeakSet()),
  (P = async function () {
    if (Gt) oe(this, R, Y).call(this, Gt);
    else {
      const e = "/terminal".replace(/\/+/g, "/"),
        t = Ie() ? `${e}/i/flags2x.png?v=1` : `${e}/i/flags.png?v=1`;
      ((Gt = await Ae.load(t)),
        oe(this, R, Y).call(this, Gt),
        oe(this, R, x).call(this));
    }
  }),
  (x = function () {
    const { chart: e, section: t } = this,
      { state: n } = e,
      r = this._createGraphics("mask");
    ((r.isMask = !0),
      (r.x = n.graphX),
      (r.y = t.y),
      r.beginFill(),
      r.drawRect(0, 0, n.graphWidth + 1, t.height),
      r.endFill());
    const s = this._createGraphics("flags");
    ((s.x = n.graphX),
      (s.y = t.y),
      (s.mask = r),
      (s.name = "flags"),
      (s.eventMode = "static"));
    const a = this._createGraphics("counter");
    ((a.x = n.graphX), (a.y = t.y), (a.mask = r));
    const i = this._createGraphics("tiles");
    ((i.x = n.graphX),
      (i.y = t.y),
      (i.mask = r),
      (i.name = "tiles"),
      (i.eventMode = "static"));
    let o = n.startX();
    const c = n.getFrom(),
      h = n.getStep();
    let l = 1;
    h < 36 && (l = Math.ceil(36 / h));
    let u = new Set();
    const d = Bt.getPoints(
      se(this, T) ?? [],
      this.chart.bars.period,
      this.chart.timezoneShift,
      this.chart.dayLightMode,
    );
    for (let p = c, g = c + n.getCount() + 1; p < g; p++) {
      if (p >= 0) {
        const e = this.chart.bars.time(p),
          t = d.get(e);
        if ((t && t.length && (u = new Set([...u, ...t])), p % l == 0)) {
          let e = Math.round(o);
          (l > 1 && (e -= Math.round((l - 1) * h * 0.5)),
            oe(this, R, I).call(this, s, a, i, e, u),
            (u = new Set()));
        }
      }
      o += h;
    }
    this.container.addChild(s, a, i);
  }),
  (I = function (e, t, n, r, s) {
    const { chart: a, section: i } = this,
      { state: o } = a;
    if (s) {
      let a = Math.round(i.height + 8);
      const c = (function (e, t = []) {
        const n = new Map();
        return (
          e.forEach((e) => {
            const r = e.country,
              s = e.importance;
            if (!~t.indexOf(r)) return;
            if (s < 1) return;
            let a = n.get(r);
            (a || n.set(r, (a = { count: 0, importance: 0, events: [] })),
              (a.count += 1),
              (a.importance = Math.max(a.importance, s)),
              a.events.push(e));
          }),
          n
        );
      })(s, se(this, T));
      let h = 1;
      c.forEach((s, i) => {
        a -= 30;
        const c = (function (e, t) {
            let n = `${t}`;
            return (
              e.forEach((e) => {
                n += e.date;
              }),
              n
            );
          })(s.events, i),
          l = c === se(this, L),
          u = Mt(s.importance),
          d = s.count,
          p = l ? a - 10 : a;
        (oe(this, R, F).call(this, e, r, p, i, c, u, h, d, l),
          d > 1 && oe(this, R, W).call(this, t, r, p, d, u, h),
          l &&
            r - 13 < o.graphWidth &&
            (oe(this, R, O).call(this, n, p - (d > 1 ? 26 : 16), i, s),
            (h = 0.2)));
      });
    }
  }),
  (F = function (e, t, n, r, s, a, i = 1, o = 0, c = !1) {
    const { backgroundColor: h } = this.chart.colors.calendar.button;
    let l = t - 11,
      u = n - 8,
      d = 22,
      p = 17;
    if (
      (c && ((l -= 1), (u -= 1), (d += 2), (p += 2)),
      c ||
        (e.beginFill(0, 0.1),
        e.drawRect(l + 1, u + 1, d, p),
        o > 1 && e.drawCircle(t + 13, n - 7, 9)),
      e.beginFill(a, i),
      e.drawRect(l, u, d, p),
      e.beginFill(h, i),
      e.drawRect(t - 10, n - 7, 20, 15),
      oe(this, R, D).call(this, e, t - 8, n - 5, r, i),
      !this.chart.state.moving)
    ) {
      const r = new Ce();
      (r.beginFill(0, 0.01),
        r.drawRect(l, u, d, p),
        (r.name = s),
        (r.eventMode = "static"),
        (r.cursor = "pointer"),
        o > 1 && r.drawCircle(t + 12, n - 8, 9),
        r.addEventListener("pointerdown", se(this, H)),
        e.addChild(r));
    }
  }),
  (D = function (e, t, n, r, s = 1) {
    const a = se(this, A).get(r);
    if (!a) return;
    const i = new _e(a);
    ((i.x = t),
      (i.y = n),
      (i.alpha = s),
      Ot && ((i.width = a.width / 2), (i.height = a.height / 2)),
      e.addChild(i));
  }),
  (W = function (e, t, n, r, s, a = 1) {
    const { backgroundColor: i, textColor: o } =
      this.chart.colors.calendar.button;
    (e.beginFill(s, a),
      e.drawCircle(t + 12, n - 8, 9),
      e.beginFill(i, a),
      e.drawCircle(t + 12, n - 8, 8));
    const c = this.createText("");
    ((c.x = t + 9 - 2 * Number(r > 9)),
      (c.y = n - 16),
      (c.text = r > 9 ? "9+" : String(r)),
      (c.tint = o),
      (c.alpha = a),
      e.addChild(c));
  }),
  (O = function (e, t, n, r) {
    const { chart: s, section: a } = this,
      { state: i } = s,
      o = this.chart.bars;
    let c = t,
      h = 0,
      l = 0;
    e.x = 0;
    const u = r.events;
    if (u) {
      u.sort(Ht);
      const t = (function (e) {
        const t = new Map();
        return (
          e.forEach((e) => {
            const n = e.date;
            let r = t.get(n);
            (r || t.set(n, (r = { count: 0, events: [] })),
              (r.count += 1),
              r.events.push(e));
          }),
          t
        );
      })(u);
      let r = 20;
      const s = Math.floor((a.height - 100) / Ut);
      (u.length > s && (r = Math.floor(s / t.size) - 1),
        (r = Math.max(r, 1)),
        t.forEach((t, s) => {
          const a = i.indexToX(o.index(s)),
            u = oe(this, R, U).call(this, e, a, c, t, n, r);
          ((c -= u.height),
            (c -= Ut),
            oe(this, R, G).call(this, e, a, c, s, t, r),
            (h = Math.max(h, u.width)),
            (l = Math.max(l, a)));
        }));
    }
    l + h > i.graphWidth - 10 && (e.x = i.graphWidth - (l + h) - 10);
  }),
  (U = function (e, t, n, r, s, a = 3) {
    let i = n;
    const { borderColor: o, backgroundColor: c } =
        this.chart.colors.calendar.group,
      h = Math.min(r.count, a);
    let l = 0,
      u = 0;
    const d = r.events;
    (d.length > a && (d.length = a),
      d.forEach((n) => {
        ((i -= Ut),
          (l = Math.max(l, oe(this, R, B).call(this, e, t, i, s, n))),
          (u += Ut));
      }),
      e.beginFill(0, 0.1),
      e.drawRect(t + 1, i + 1, l, u),
      e.beginFill(o),
      e.drawRect(t, i, l, u),
      e.beginFill(c),
      e.drawRect(t + 1, i + 1, l - 2, u - 2));
    for (let p = 0; p < h; p++)
      (e.beginFill(Mt(d[p].importance)),
        e.drawRect(t, i + Ut * p, 3, Ut),
        p > 0 && (e.beginFill(o), e.drawRect(t, i + Ut * p - 1, l, 1)));
    return { width: l, height: u };
  }),
  (B = function (e, t, n, r, s) {
    const {
        timeColor: a,
        titleColor: i,
        descriptionColor: o,
      } = this.chart.colors.calendar.group.event,
      c = t + 1;
    oe(this, R, D).call(this, e, c + 17, n + 10, r);
    const h = this.createText(
      ((l = s.datetime),
      (u = this.chart.bars.period),
      Me(l, u > 1440 ? "D MMM" : "hhhh:mm")),
    );
    var l, u;
    ((h.x = c + 8), (h.y = n + 25), (h.tint = a), e.addChild(h));
    const d = oe(this, R, K).call(this, s.id, s.title);
    ((d.x = c + 48),
      (d.y = n + 8),
      (d.style.fill = i),
      (d.eventMode = "static"),
      (d.cursor = "pointer"),
      (d.alpha = 1),
      d.addEventListener("pointerdown", (e) => {
        se(this, z).call(this, e, s.event_country, s.event_code);
      }),
      d.addEventListener("mouseover", () => {
        d.alpha = 0.6;
      }),
      d.addEventListener("mouseout", () => {
        d.alpha = 1;
      }),
      e.addChild(d));
    const p = (function (e) {
        return e.country === $e.ALL
          ? ""
          : [At(e), Ct(e), _t(e)].filter(Boolean).join(", ");
      })(s),
      g = this.createText(p);
    return (
      (g.text = p),
      (g.x = c + 48),
      (g.y = n + 25),
      (g.tint = o),
      e.addChild(g),
      Math.max(d.x + d.width - c, g.x + g.width - c) + 20
    );
  }),
  (G = function (e, t, n, r, s, a) {
    const {
      borderColor: i,
      title: { textColor: o, linkColor: c, backgroundColor: h },
    } = this.chart.colors.calendar.group;
    let l = 0;
    const u = this.createText(
      (function (e, t, n, r) {
        let s = `${(function (e, t) {
          if (10080 !== t) {
            let n = "DD.MM.YY hhhh:mm";
            return (
              t > 240 && (n = "DD.MM.YY"),
              t > 10080 && (n = "MM.YY"),
              Me(e, n)
            );
          }
          const n = De(e, 10080, 1),
            r = "DD.MM.YY";
          return [Me(e, r), Me(n, r)].join(" - ");
        })(t, n)} - `;
        return (
          e.count < r ? (s += e.count) : (s += `${r}/${e.count}`),
          (s += " events"),
          s
        );
      })(s, r, this.chart.bars.period, a),
    );
    if (
      ((u.x = t + 10),
      (u.y = n + 31),
      (u.tint = o),
      e.addChild(u),
      (l += u.width + 10),
      s.count > a)
    ) {
      const t = u.x + u.width + 10,
        s = n + 31,
        a = this.createText("show all");
      ((a.x = t), (a.y = s), (a.tint = c), (a.alpha = 1));
      const i = this._createGraphics(r.toString());
      (i.beginFill(h),
        i.drawRect(t - 5, s + 2, a.width + 10, a.height + 2),
        (i.name = "link"),
        (i.eventMode = "static"),
        (i.cursor = "pointer"),
        i.addEventListener("pointerdown", se(this, X)),
        i.addEventListener("mouseover", () => {
          a.alpha = 0.6;
        }),
        i.addEventListener("mouseout", () => {
          a.alpha = 1;
        }),
        i.addChild(a),
        e.addChild(i),
        (l += a.width + 10));
    }
    (e.beginFill(i),
      e.drawRect(t - 1, n + 26, l + 13, 23),
      e.beginFill(h),
      e.drawRect(t, n + 27, l + 11, 21));
  }),
  (V = new WeakMap()),
  (H = new WeakMap()),
  ($ = new WeakMap()),
  (j = new WeakMap()),
  (X = new WeakMap()),
  (z = new WeakMap()),
  (K = function (e = "0", t) {
    const n = e.toString();
    let r = se(this, _).get(n);
    return r || ((r = new Le(t, this.titleStyle)), se(this, _).set(n, r), r);
  }),
  (Y = function (e) {
    const t = Number(Ot) + 1,
      n = 16 * t,
      r = 11 * t;
    (ie(this, A, new Map()),
      Wt.forEach((s, a) => {
        const i = 17 * a * t;
        se(this, A).set(s, new ke(e.baseTexture, new Re(i, 0, n, r)));
      }));
  }),
  (Z = function () {
    const e = [];
    let t;
    return (
      this.settings.currencyMargin &&
        ((t = $t(this.settings.currencyMargin)), t && e.push(t)),
      this.settings.currencyProfit &&
        ((t = $t(this.settings.currencyProfit)), t && e.push(t)),
      e.push($e.ALL),
      e
    );
  }));
class jt extends ve {
  constructor(e, t) {
    (super(e),
      ae(this, Q),
      ae(this, q),
      ae(this, J),
      (this.data = []),
      ie(this, J, null),
      ie(this, q, t));
  }
  get() {
    return this.data[0];
  }
  setVisible(e, t) {
    const n = this.data[0];
    n &&
      ((n.settings.visible = t), n.settings.refresh(), this.trigger("208", e));
  }
  init() {
    oe(this, Q, te).call(this);
  }
  getOptions() {
    return this.chart.createOptions(this.chart.sections.getByIndex(0));
  }
  async add(e) {
    return (
      ie(this, J, se(this, J) ?? oe(this, Q, ee).call(this, e)),
      se(this, J)
    );
  }
  remove() {
    const e = this.get();
    (e && e.destroy(), this.data.splice(0, 1), this.trigger("202", "calendar"));
  }
  async show(e, t) {
    this.get() || (await this.add());
    const n = this.data[0];
    !n ||
      (e === n.settings.currencyMargin &&
        t === n.settings.currencyProfit &&
        !1 !== n.settings.visible) ||
      (n.settings.setCurrency(e, t),
      n.init(),
      this.setVisible("calendar", !0),
      this.chart.refresh());
  }
  hide() {
    this.get() && (this.setVisible("calendar", !1), this.chart.refresh());
  }
  destroy() {
    (this.data.forEach((e) => e.destroy()), super.destroy());
  }
}
((q = new WeakMap()),
  (J = new WeakMap()),
  (Q = new WeakSet()),
  (ee = async function (e) {
    const t = this.getOptions(),
      n = new Be(e),
      r = new Vt(t, 13e3, n, se(this, q));
    return (
      (this.data[0] = r),
      ie(this, J, null),
      this.trigger("201", n.uid),
      n.uid
    );
  }),
  (te = function () {
    (this.data[0] && this.data[0].destroy(), this.data.splice(0, 1));
  }));
const Xt = class extends ce {
  constructor(e) {
    (super(), he(this, e, Oe, We, le, { settings: 0 }));
  }
};
export {
  jt as CalendarManager,
  $e as Country,
  Xe as Description,
  Ge as Languages,
  He as Request,
  je as ResultType,
  Xt as Template,
  ze as Translates,
  Ve as Types,
  Ke as Units,
};
