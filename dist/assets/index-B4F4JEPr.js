import {
  r as l,
  t as Ze,
  c as et,
  j as e,
  V as ve,
  R as be,
  A as je,
  C as we,
  X as tt,
  T as Ne,
  D as Te,
  a as Se,
  P as st,
  b as rt,
  d as ot,
  e as Ee,
  f as at,
  i as nt,
  g as it,
  h as dt,
  S as lt,
  k as ct,
  u as ut,
  l as ht,
  G as mt,
  m as de,
  E as Ce,
  n as gt,
  o as ft,
  F as Ae,
  p as ke,
  q as Ie,
  s as xt,
  L as Y,
  v as le,
  w as ce,
  x as ue,
  y as he,
  z as me,
  B as ge,
  H as fe,
  I as pt,
  J as yt,
  K as Fe,
  M as ze,
  N as Pe,
  O as vt,
  Q as bt,
  U as jt,
  W as wt,
  Y as Nt,
  Z as Tt,
  _ as St,
  $ as Et,
  a0 as Ct,
  a1 as At,
  a2 as kt,
  a3 as It,
  a4 as Ft,
  a5 as xe,
  a6 as zt,
} from "./vendor-CRJ2kFXX.js";
(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) a(n);
  new MutationObserver((n) => {
    for (const i of n)
      if (i.type === "childList")
        for (const p of i.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && a(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(n) {
    const i = {};
    return (
      n.integrity && (i.integrity = n.integrity),
      n.referrerPolicy && (i.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : n.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
      i
    );
  }
  function a(n) {
    if (n.ep) return;
    n.ep = !0;
    const i = o(n);
    fetch(n.href, i);
  }
})();
const Pt = 1,
  Dt = 1e6;
let X = 0;
function Ot() {
  return (X = (X + 1) % Number.MAX_SAFE_INTEGER), X.toString();
}
const Z = new Map(),
  pe = (t) => {
    if (Z.has(t)) return;
    const s = setTimeout(() => {
      Z.delete(t), q({ type: "REMOVE_TOAST", toastId: t });
    }, Dt);
    Z.set(t, s);
  },
  $t = (t, s) => {
    switch (s.type) {
      case "ADD_TOAST":
        return { ...t, toasts: [s.toast, ...t.toasts].slice(0, Pt) };
      case "UPDATE_TOAST":
        return {
          ...t,
          toasts: t.toasts.map((o) =>
            o.id === s.toast.id ? { ...o, ...s.toast } : o,
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: o } = s;
        return (
          o
            ? pe(o)
            : t.toasts.forEach((a) => {
                pe(a.id);
              }),
          {
            ...t,
            toasts: t.toasts.map((a) =>
              a.id === o || o === void 0 ? { ...a, open: !1 } : a,
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return s.toastId === void 0
          ? { ...t, toasts: [] }
          : { ...t, toasts: t.toasts.filter((o) => o.id !== s.toastId) };
    }
  },
  Q = [];
let J = { toasts: [] };
function q(t) {
  (J = $t(J, t)),
    Q.forEach((s) => {
      s(J);
    });
}
function h({ ...t }) {
  const s = Ot(),
    o = (n) => q({ type: "UPDATE_TOAST", toast: { ...n, id: s } }),
    a = () => q({ type: "DISMISS_TOAST", toastId: s });
  return (
    q({
      type: "ADD_TOAST",
      toast: {
        ...t,
        id: s,
        open: !0,
        onOpenChange: (n) => {
          n || a();
        },
      },
    }),
    { id: s, dismiss: a, update: o }
  );
}
function Rt() {
  const [t, s] = l.useState(J);
  return (
    l.useEffect(
      () => (
        Q.push(s),
        () => {
          const o = Q.indexOf(s);
          o > -1 && Q.splice(o, 1);
        }
      ),
      [t],
    ),
    { ...t, toast: h, dismiss: (o) => q({ type: "DISMISS_TOAST", toastId: o }) }
  );
}
function F(...t) {
  return Ze(et(t));
}
const Ut = st,
  De = l.forwardRef(({ className: t, ...s }, o) =>
    e.jsx(ve, {
      ref: o,
      className: F(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        t,
      ),
      ...s,
    }),
  );
De.displayName = ve.displayName;
const Mt = Se(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    },
  ),
  Oe = l.forwardRef(({ className: t, variant: s, ...o }, a) =>
    e.jsx(be, { ref: a, className: F(Mt({ variant: s }), t), ...o }),
  );
Oe.displayName = be.displayName;
const Lt = l.forwardRef(({ className: t, ...s }, o) =>
  e.jsx(je, {
    ref: o,
    className: F(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      t,
    ),
    ...s,
  }),
);
Lt.displayName = je.displayName;
const $e = l.forwardRef(({ className: t, ...s }, o) =>
  e.jsx(we, {
    ref: o,
    className: F(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      t,
    ),
    "toast-close": "",
    ...s,
    children: e.jsx(tt, { className: "h-4 w-4" }),
  }),
);
$e.displayName = we.displayName;
const Re = l.forwardRef(({ className: t, ...s }, o) =>
  e.jsx(Ne, { ref: o, className: F("text-sm font-semibold", t), ...s }),
);
Re.displayName = Ne.displayName;
const Ue = l.forwardRef(({ className: t, ...s }, o) =>
  e.jsx(Te, { ref: o, className: F("text-sm opacity-90", t), ...s }),
);
Ue.displayName = Te.displayName;
function _t() {
  const { toasts: t } = Rt();
  return e.jsxs(Ut, {
    children: [
      t.map(function ({ id: s, title: o, description: a, action: n, ...i }) {
        return e.jsxs(
          Oe,
          {
            ...i,
            children: [
              e.jsxs("div", {
                className: "grid gap-1",
                children: [
                  o && e.jsx(Re, { children: o }),
                  a && e.jsx(Ue, { children: a }),
                ],
              }),
              n,
              e.jsx($e, {}),
            ],
          },
          s,
        );
      }),
      e.jsx(De, {}),
    ],
  });
}
const Bt = ({ ...t }) => {
    const { theme: s = "system" } = rt();
    return e.jsx(ot, {
      theme: s,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      },
      ...t,
    });
  },
  Yt = at,
  Wt = l.forwardRef(({ className: t, sideOffset: s = 4, ...o }, a) =>
    e.jsx(Ee, {
      ref: a,
      sideOffset: s,
      className: F(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        t,
      ),
      ...o,
    }),
  );
Wt.displayName = Ee.displayName;
const Kt = {
    apiKey: "AIzaSyDdhFjTD26R5XKrFXQ5vkT-hTh6_bjGQtM",
    authDomain: "thought-lovable.firebaseapp.com",
    projectId: "thought-lovable",
    storageBucket: "thought-lovable.firebasestorage.app",
    messagingSenderId: "809952134295",
    appId: "1:809952134295:web:b14da2f7b2d34a0a3295d2",
    measurementId: "G-3RXFQWCN9Z",
  },
  Vt = nt(Kt),
  I = it(Vt);
I.setPersistence(dt);
const L = "http://localhost:5000/api/thoughts",
  k = {
    async getIdToken() {
      const t = I.currentUser;
      if (!t) return null;
      try {
        return await t.getIdToken();
      } catch (s) {
        return console.error("Error getting ID token:", s), null;
      }
    },
    isAuthenticated() {
      return !!I.currentUser;
    },
    getCurrentUserId() {
      var t;
      return ((t = I.currentUser) == null ? void 0 : t.uid) || null;
    },
  },
  M = {
    async get(t) {
      const s = await k.getIdToken();
      if (!s) throw new Error("User not authenticated");
      const o = t.startsWith("http") ? t : `${L}${t}`,
        a = await fetch(o, { headers: { Authorization: `Bearer ${s}` } });
      if (!a.ok) throw new Error(`HTTP Error: ${a.status} - ${a.statusText}`);
      return await a.json();
    },
    async post(t, s) {
      const o = await k.getIdToken();
      if (!o) throw new Error("User not authenticated");
      const a = t.startsWith("http") ? t : `${L}${t}`,
        n = await fetch(a, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${o}`,
          },
          body: JSON.stringify(s),
        });
      if (!n.ok) throw new Error(`HTTP Error: ${n.status} - ${n.statusText}`);
      return await n.json();
    },
    async put(t, s) {
      const o = await k.getIdToken();
      if (!o) throw new Error("User not authenticated");
      const a = t.startsWith("http") ? t : `${L}${t}`,
        n = await fetch(a, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${o}`,
          },
          body: JSON.stringify(s),
        });
      if (!n.ok) throw new Error(`HTTP Error: ${n.status} - ${n.statusText}`);
      return await n.json();
    },
    async delete(t, s) {
      const o = await k.getIdToken();
      if (!o) throw new Error("User not authenticated");
      const a = t.startsWith("http") ? t : `${L}${t}`,
        n = await fetch(a, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${o}`,
          },
          body: JSON.stringify(s),
        });
      if (!n.ok) throw new Error(`HTTP Error: ${n.status} - ${n.statusText}`);
      return await n.json();
    },
  },
  w = {
    get(t, s) {
      try {
        const o = localStorage.getItem(t);
        return o ? JSON.parse(o) : s;
      } catch (o) {
        return (
          console.error(`Error getting item ${t} from localStorage:`, o), s
        );
      }
    },
    set(t, s) {
      try {
        localStorage.setItem(t, JSON.stringify(s));
      } catch (o) {
        console.error(`Error setting item ${t} in localStorage:`, o);
      }
    },
    remove(t) {
      try {
        localStorage.removeItem(t);
      } catch (s) {
        console.error(`Error removing item ${t} from localStorage:`, s);
      }
    },
  },
  E = {
    async getThoughts() {
      try {
        if (!k.isAuthenticated()) throw new Error("User not authenticated");
        return (await M.get("")).thoughts || [];
      } catch (t) {
        throw (console.error("Error fetching thoughts:", t), t);
      }
    },
    async createThought(t) {
      try {
        if (!k.isAuthenticated()) throw new Error("User not authenticated");
        return (await M.post("", t)).thought;
      } catch (s) {
        throw (console.error("Error creating thought:", s), s);
      }
    },
    async updateThought(t) {
      try {
        if (!k.isAuthenticated()) throw new Error("User not authenticated");
        return (await M.put("", t)).thought;
      } catch (s) {
        throw (console.error("Error updating thought:", s), s);
      }
    },
    async deleteThought(t) {
      try {
        if (!k.isAuthenticated()) throw new Error("User not authenticated");
        return await M.delete("", { id: t }), !0;
      } catch (s) {
        throw (console.error("Error deleting thought:", s), s);
      }
    },
    async getFolders() {
      try {
        return k.isAuthenticated()
          ? (await M.get(`${L.replace("/thoughts", "/folders")}`)).folders || []
          : w.get("folders", []);
      } catch (t) {
        return (
          console.error("Error fetching folders:", t), w.get("folders", [])
        );
      }
    },
    async createFolder(t) {
      try {
        if (!k.isAuthenticated()) {
          const o = {
              id: Date.now().toString(),
              name: t.name || "New Folder",
              timestamp: new Date().toISOString(),
            },
            a = w.get("folders", []);
          return a.push(o), w.set("folders", a), o;
        }
        return (await M.post(`${L.replace("/thoughts", "/folders")}`, t))
          .folder;
      } catch (s) {
        console.error("Error creating folder:", s);
        const o = {
            id: Date.now().toString(),
            name: t.name || "New Folder",
            timestamp: new Date().toISOString(),
          },
          a = w.get("folders", []);
        return a.push(o), w.set("folders", a), o;
      }
    },
    async updateFolder(t) {
      try {
        if (!k.isAuthenticated()) {
          const a = w
            .get("folders", [])
            .map((n) => (n.id === t.id ? { ...n, ...t } : n));
          return w.set("folders", a), a.find((n) => n.id === t.id);
        }
        return (await M.put(`${L.replace("/thoughts", "/folders")}`, t)).folder;
      } catch (s) {
        console.error("Error updating folder:", s);
        const a = w
          .get("folders", [])
          .map((n) => (n.id === t.id ? { ...n, ...t } : n));
        return w.set("folders", a), a.find((n) => n.id === t.id);
      }
    },
    async deleteFolder(t) {
      try {
        if (!k.isAuthenticated()) {
          const o = w.get("folders", []).filter((a) => a.id !== t);
          return w.set("folders", o), !0;
        }
        return (
          await M.delete(`${L.replace("/thoughts", "/folders")}`, { id: t }), !0
        );
      } catch (s) {
        console.error("Error deleting folder:", s);
        const a = w.get("folders", []).filter((n) => n.id !== t);
        return w.set("folders", a), !0;
      }
    },
  },
  Gt = ({
    onAddThought: t,
    inputRef: s,
    placeholder: o = "Add a new thought...",
  }) => {
    const [a, n] = l.useState(""),
      [i, p] = l.useState(!1),
      [C, b] = l.useState(!1),
      z = l.useRef(null),
      x = s || z;
    l.useEffect(() => {
      x.current &&
        ((x.current.style.height = "auto"),
        (x.current.style.height = `${x.current.scrollHeight}px`));
    }, [a, x]),
      l.useEffect(() => {
        x.current && x.current.focus();
      }, [x]);
    const N = (m) => {
        n(m.target.value), !i && m.target.value.length > 0 && p(!0);
      },
      c = async () => {
        if (a.trim())
          try {
            b(!0),
              await t(a),
              n(""),
              p(!1),
              h({
                title: "Thought added",
                description: "Your thought has been saved.",
                duration: 3e3,
              });
          } catch (m) {
            console.error("Error adding thought:", m),
              h({
                title: "Error",
                description: "Failed to add thought. Please try again.",
                variant: "destructive",
                duration: 5e3,
              });
          } finally {
            b(!1),
              setTimeout(() => {
                x.current && x.current.focus();
              }, 0);
          }
      },
      y = (m) => {
        (m.ctrlKey || m.metaKey) &&
          m.key === "Enter" &&
          (m.preventDefault(), c());
      };
    return e.jsx("div", {
      className: `w-full transition-all duration-300 ease-out ${i ? "mb-6" : "mb-0"}`,
      children: e.jsxs("div", {
        className:
          "relative glass rounded-xl shadow-glass transition-all duration-300 ease-out hover:shadow-lg",
        children: [
          e.jsx("textarea", {
            ref: x,
            value: a,
            onChange: N,
            onKeyDown: y,
            placeholder: o,
            className: `w-full resize-none overflow-hidden bg-transparent px-4 py-3 outline-none transition-all duration-300 text-lg ${i ? "min-h-[120px] rounded-t-xl border-b" : "min-h-[56px] rounded-xl"}`,
            style: { color: "hsl(var(--foreground))" },
          }),
          i &&
            e.jsxs("div", {
              className:
                "flex items-center justify-between p-3 rounded-b-xl bg-secondary/50",
              children: [
                e.jsxs("div", {
                  className: "flex items-center text-sm text-muted-foreground",
                  children: [
                    e.jsx(lt, { size: 16, className: "mr-2 text-idea/70" }),
                    e.jsx("span", { children: "Ctrl+Enter to add" }),
                  ],
                }),
                e.jsxs("button", {
                  onClick: c,
                  disabled: C || !a.trim(),
                  className: `flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition-all duration-300
                ${C ? "bg-muted cursor-not-allowed" : "bg-idea text-white hover:bg-idea/90 hover-scale"}`,
                  children: [
                    e.jsx(ct, { size: 18 }),
                    e.jsx("span", { children: "Add" }),
                  ],
                }),
              ],
            }),
        ],
      }),
    });
  },
  ye = ({
    id: t,
    value: s,
    timestamp: o,
    onDoubleClick: a,
    section: n,
    folder: i,
    onUpdate: p,
    updates: C = [],
  }) => {
    const [b, z] = l.useState(!1),
      [x, N] = l.useState(""),
      [c, y] = l.useState(!1),
      {
        attributes: m,
        listeners: T,
        setNodeRef: W,
        transform: $,
        transition: R,
        isDragging: B,
      } = ut({ id: t }),
      O = {
        transform: ht.Transform.toString($),
        transition: R,
        opacity: B ? 0.5 : 1,
      },
      P = () => {
        !x.trim() || !p || (p(x), N(""), y(!1));
      },
      D = (U) => {
        U.key === "Enter" && P();
      },
      g = () => {
        switch (n) {
          case "ideas":
            return "bg-blue-50 border-blue-200 hover:bg-blue-100";
          case "done":
            return "bg-green-50 border-green-200 hover:bg-green-100";
          case "folder":
            return "bg-amber-50 border-amber-200 hover:bg-amber-100";
          default:
            return "bg-gray-50 border-gray-200 hover:bg-gray-100";
        }
      },
      j = () => {
        switch (n) {
          case "ideas":
            return "bg-idea/10 text-idea";
          case "done":
            return "bg-done/10 text-done";
          case "folder":
            return "bg-folder/10 text-folder";
          default:
            return "bg-gray-100 text-gray-600";
        }
      };
    return e.jsx("div", {
      ref: W,
      style: O,
      ...m,
      className: `${g()} w-full mb-3 rounded-xl border p-3 shadow-sm transition-all duration-200 hover-scale`,
      onDoubleClick: a,
      children: e.jsxs("div", {
        className: "flex items-start gap-2",
        children: [
          e.jsx("div", {
            ...T,
            className:
              "cursor-grab touch-none mt-0.5 text-gray-400 hover:text-gray-600",
            children: e.jsx(mt, { size: 18 }),
          }),
          e.jsxs("div", {
            className: "flex-1",
            children: [
              e.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  e.jsxs("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: [
                      i &&
                        e.jsx("span", {
                          className: `inline-flex items-center px-2 py-0.5 text-xs font-medium rounded ${j()}`,
                          children: i,
                        }),
                      o &&
                        e.jsx("span", {
                          className: "text-xs text-gray-500",
                          children: de(new Date(o), { addSuffix: !0 }),
                        }),
                    ],
                  }),
                  n === "ideas" &&
                    p &&
                    e.jsx("button", {
                      onClick: () => z(!b),
                      className: "text-gray-500 hover:text-gray-700",
                      children: e.jsx(Ce, { size: 16 }),
                    }),
                ],
              }),
              e.jsx("p", { className: "mt-1 text-gray-800", children: s }),
              n === "ideas" &&
                b &&
                e.jsxs("div", {
                  className: "mt-3 border-t border-gray-200 pt-2",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center justify-between mb-2",
                      children: [
                        e.jsx("span", {
                          className: "text-xs font-semibold text-gray-500",
                          children: "Updates",
                        }),
                        p &&
                          e.jsx("button", {
                            onClick: () => y(!c),
                            className: "text-xs text-idea hover:text-idea/80",
                            children: c ? "Cancel" : "Add update",
                          }),
                      ],
                    }),
                    c &&
                      e.jsxs("div", {
                        className: "mb-2 flex",
                        children: [
                          e.jsx("input", {
                            type: "text",
                            value: x,
                            onChange: (U) => N(U.target.value),
                            onKeyDown: D,
                            placeholder: "Add an update...",
                            className:
                              "flex-1 rounded-l-md border border-gray-300 px-3 py-1 text-sm focus:border-blue-500 focus:outline-none",
                          }),
                          e.jsx("button", {
                            onClick: P,
                            className:
                              "rounded-r-md bg-idea px-3 py-1 text-sm font-medium text-white hover:bg-idea/90",
                            children: "Add",
                          }),
                        ],
                      }),
                    C.length > 0
                      ? e.jsx("div", {
                          className: "space-y-2",
                          children: C.map((U, K) =>
                            e.jsx(
                              "div",
                              {
                                className:
                                  "rounded-md bg-white p-2 text-sm shadow-sm",
                                children: e.jsxs("div", {
                                  className:
                                    "flex items-center justify-between",
                                  children: [
                                    e.jsx("p", { children: U.text }),
                                    e.jsx("span", {
                                      className: "text-xs text-gray-500",
                                      children: de(new Date(U.timestamp), {
                                        addSuffix: !0,
                                      }),
                                    }),
                                  ],
                                }),
                              },
                              K,
                            ),
                          ),
                        })
                      : e.jsx("p", {
                          className: "text-xs text-gray-500 italic",
                          children: "No updates yet",
                        }),
                  ],
                }),
            ],
          }),
        ],
      }),
    });
  },
  Ht = ({
    id: t,
    name: s,
    thoughts: o,
    onAddThought: a,
    onRenameFolder: n,
    onDeleteFolder: i,
    isActive: p,
    onSelect: C,
  }) => {
    const [b, z] = l.useState(!1),
      [x, N] = l.useState(!1),
      [c, y] = l.useState(s),
      [m, T] = l.useState(!1),
      W = (g) => {
        g.stopPropagation(), z(!b);
      },
      $ = () => {
        c.trim() && c !== s && n(t, c), N(!1), T(!1);
      },
      R = (g) => {
        g.key === "Enter" ? $() : g.key === "Escape" && (N(!1), y(s));
      },
      B = (g) => {
        g.stopPropagation(), a(t);
      },
      O = (g) => {
        g.stopPropagation(), i(t), T(!1);
      },
      P = (g) => {
        g.stopPropagation(), T(!m);
      },
      D = (g) => {
        g.stopPropagation(), N(!0), T(!1);
      };
    return e.jsxs("div", {
      className: "mb-1",
      children: [
        e.jsxs("div", {
          className: `flex items-center py-2 px-3 rounded-lg cursor-pointer transition-all duration-200
          ${p ? "bg-folder/10 text-folder" : "hover:bg-gray-100"}`,
          onClick: C,
          children: [
            e.jsx("button", {
              onClick: W,
              className: "mr-1 text-gray-500 hover:text-gray-700",
              children: b ? e.jsx(gt, { size: 16 }) : e.jsx(ft, { size: 16 }),
            }),
            e.jsx(Ae, {
              size: 18,
              className: `mr-2 ${p ? "text-folder" : "text-gray-500"}`,
            }),
            x
              ? e.jsx("input", {
                  type: "text",
                  value: c,
                  onChange: (g) => y(g.target.value),
                  onBlur: $,
                  onKeyDown: R,
                  onClick: (g) => g.stopPropagation(),
                  className:
                    "flex-1 bg-white border border-gray-300 rounded px-2 py-0.5 text-sm",
                  autoFocus: !0,
                })
              : e.jsx("span", {
                  className: "flex-1 text-sm font-medium truncate",
                  children: s,
                }),
            e.jsxs("div", {
              className: "flex items-center",
              children: [
                e.jsx("button", {
                  onClick: B,
                  className:
                    "text-gray-500 hover:text-idea mr-1 p-1 rounded-full hover:bg-gray-200",
                  title: "Add thought to folder",
                  children: e.jsx(ke, { size: 16 }),
                }),
                e.jsxs("div", {
                  className: "relative",
                  children: [
                    e.jsx("button", {
                      onClick: P,
                      className:
                        "text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-200",
                      children: e.jsx(Ce, { size: 16 }),
                    }),
                    m &&
                      e.jsxs("div", {
                        className:
                          "absolute right-0 mt-1 py-1 w-36 bg-white rounded-md shadow-lg z-10 border border-gray-200",
                        children: [
                          e.jsxs("button", {
                            onClick: D,
                            className:
                              "flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100",
                            children: [
                              e.jsx(Ie, { size: 14, className: "mr-2" }),
                              "Rename",
                            ],
                          }),
                          e.jsxs("button", {
                            onClick: O,
                            className:
                              "flex items-center w-full px-4 py-2 text-sm text-left text-red-600 hover:bg-gray-100",
                            children: [
                              e.jsx(xt, { size: 14, className: "mr-2" }),
                              "Delete",
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
        b &&
          o.length > 0 &&
          e.jsx("div", {
            className: "pl-8 mt-1 space-y-1",
            children: o.map((g) =>
              e.jsx(
                "div",
                {
                  className:
                    "py-1 px-2 text-sm rounded-md hover:bg-gray-100 cursor-pointer truncate",
                  children: g.text,
                },
                g.id,
              ),
            ),
          }),
      ],
    });
  },
  qt = () => {
    var ie;
    const [t, s] = l.useState([]),
      [o, a] = l.useState([]),
      [n, i] = l.useState(!1),
      [p, C] = l.useState(""),
      [b, z] = l.useState(null),
      [x, N] = l.useState(null),
      [c, y] = l.useState(""),
      [m, T] = l.useState(null),
      [W, $] = l.useState(!1),
      [R, B] = l.useState(""),
      O = l.useRef(null),
      P = t.filter(
        (r) => r.section === "ideas" && (m === null || r.folder === m),
      ),
      D = t.filter(
        (r) => r.section === "done" && (m === null || r.folder === m),
      ),
      g = t.length,
      [j, U] = l.useState(!!I.currentUser);
    l.useEffect(() => {
      const r = I.onAuthStateChanged((d) => {
        U(!!d), d ? K() : (s([]), a([]));
      });
      return () => r();
    }, []);
    const K = l.useCallback(async () => {
      if (j) {
        i(!0), C("");
        try {
          const r = await E.getThoughts();
          s(r);
          const d = await E.getFolders();
          a(d);
        } catch (r) {
          console.error("Error loading thoughts:", r),
            C("Failed to load your thoughts."),
            h({
              title: "Error loading thoughts",
              description: "Please try refreshing the page.",
              variant: "destructive",
            });
        } finally {
          i(!1);
        }
      }
    }, [j]);
    l.useEffect(() => {
      j && K();
    }, [K, j]);
    const Le = (r) => (r.trim() ? r.charAt(0).toUpperCase() + r.slice(1) : ""),
      _e = async (r, d) => {
        if (!r.trim() || !j) return;
        i(!0);
        const u = Le(r),
          f = new Date().toISOString();
        try {
          const v = await E.createThought({
            text: u,
            timestamp: f,
            section: "ideas",
            ...(d ? { folder: d } : {}),
          });
          s((S) => [...S, v]),
            O.current && O.current.focus(),
            h({
              title: "Thought added",
              description: "Your thought has been saved.",
            });
        } catch (v) {
          console.error("Error adding thought:", v),
            h({
              title: "Error adding thought",
              description: "Please try again.",
              variant: "destructive",
            });
        } finally {
          i(!1);
        }
      },
      Be = (r) => {
        T(r), O.current && O.current.focus();
        const d = o.find((u) => u.id === r);
        d &&
          h({
            title: `Adding to "${d.name}"`,
            description: "Type your thought and press Add",
          });
      },
      Ye = async (r, d) => {
        if (!d.trim() || !j) return;
        i(!0);
        const u = new Date().toISOString();
        try {
          const f = t.find((_) => _.id === r);
          if (!f) return;
          const v = f.updates || [],
            S = await E.updateThought({
              id: r,
              updates: [...v, { text: d, timestamp: u }],
            });
          s((_) => _.map((A) => (A.id === r ? S : A))),
            h({
              title: "Update added",
              description: "Your update has been saved.",
            });
        } catch (f) {
          console.error("Error adding update:", f),
            h({
              title: "Error adding update",
              description: "Please try again.",
              variant: "destructive",
            });
        } finally {
          i(!1);
        }
      },
      se = async (r) => {
        if (j) {
          i(!0);
          try {
            const d = await E.updateThought({ id: r.id, section: "done" });
            s((u) => u.map((f) => (f.id === r.id ? d : f))),
              h({
                title: "Moved to Done",
                description: "Your thought has been completed.",
              });
          } catch (d) {
            console.error("Error moving thought to done:", d),
              h({
                title: "Error moving thought",
                description: "Please try again.",
                variant: "destructive",
              });
          } finally {
            i(!1);
          }
        }
      },
      re = async (r) => {
        if (j) {
          i(!0);
          try {
            const d = await E.updateThought({ id: r.id, section: "ideas" });
            s((u) => u.map((f) => (f.id === r.id ? d : f))),
              h({
                title: "Moved to Ideas",
                description: "Your thought has been moved back to ideas.",
              });
          } catch (d) {
            console.error("Error moving thought to ideas:", d),
              h({
                title: "Error moving thought",
                description: "Please try again.",
                variant: "destructive",
              });
          } finally {
            i(!1);
          }
        }
      },
      oe = async (r) => {
        if (j) {
          i(!0);
          try {
            await E.deleteThought(r.id),
              s((d) => d.filter((u) => u.id !== r.id)),
              h({
                title: "Thought deleted",
                description: "Your thought has been permanently removed.",
              });
          } catch (d) {
            console.error("Error deleting thought:", d),
              h({
                title: "Error deleting thought",
                description: "Please try again.",
                variant: "destructive",
              });
          } finally {
            i(!1);
          }
        }
      },
      We = (r) => {
        N(r.id), y(r.text), z(null);
      },
      Ke = async (r) => {
        if (!(!c.trim() || !j)) {
          i(!0);
          try {
            const d = await E.updateThought({ id: r.id, text: c });
            s((u) => u.map((f) => (f.id === r.id ? d : f))),
              N(null),
              h({
                title: "Thought updated",
                description: "Your changes have been saved.",
              });
          } catch (d) {
            console.error("Error updating thought:", d),
              h({
                title: "Error updating thought",
                description: "Please try again.",
                variant: "destructive",
              });
          } finally {
            i(!1);
          }
        }
      },
      ae = async () => {
        if (!(!R.trim() || !j)) {
          i(!0);
          try {
            const r = await E.createFolder({ name: R });
            a((d) => [...d, r]),
              B(""),
              $(!1),
              T(r.id),
              h({
                title: "Folder created",
                description: `"${R}" folder has been created.`,
              });
          } catch (r) {
            console.error("Error creating folder:", r),
              h({
                title: "Error creating folder",
                description: "Please try again.",
                variant: "destructive",
              });
          } finally {
            i(!1);
          }
        }
      },
      Ve = async (r, d) => {
        if (!(!d.trim() || !j)) {
          i(!0);
          try {
            const u = await E.updateFolder({ id: r, name: d });
            a((f) => f.map((v) => (v.id === r ? u : v))),
              h({
                title: "Folder renamed",
                description: "Your folder has been renamed.",
              });
          } catch (u) {
            console.error("Error renaming folder:", u),
              h({
                title: "Error renaming folder",
                description: "Please try again.",
                variant: "destructive",
              });
          } finally {
            i(!1);
          }
        }
      },
      Ge = async (r) => {
        if (!j) return;
        const d = t.filter((u) => u.folder === r);
        if (d.length > 0) {
          if (
            !window.confirm(
              `This folder contains ${d.length} thoughts. Delete anyway? (Thoughts will be moved out of the folder)`,
            )
          )
            return;
          i(!0);
          try {
            const u = d.map((v) =>
                E.updateThought({ id: v.id, folder: void 0 }),
              ),
              f = await Promise.all(u);
            s((v) => v.map((S) => f.find((A) => A.id === S.id) || S)),
              await E.deleteFolder(r),
              a((v) => v.filter((S) => S.id !== r)),
              m === r && T(null),
              h({
                title: "Folder deleted",
                description: "Your folder has been removed.",
              });
          } catch (u) {
            console.error("Error deleting folder:", u),
              h({
                title: "Error deleting folder",
                description: "Please try again.",
                variant: "destructive",
              });
          } finally {
            i(!1);
          }
        } else {
          i(!0);
          try {
            await E.deleteFolder(r),
              a((u) => u.filter((f) => f.id !== r)),
              m === r && T(null),
              h({
                title: "Folder deleted",
                description: "Your folder has been removed.",
              });
          } catch (u) {
            console.error("Error deleting folder:", u),
              h({
                title: "Error deleting folder",
                description: "Please try again.",
                variant: "destructive",
              });
          } finally {
            i(!1);
          }
        }
      },
      ne = (r) => {
        const { active: d, over: u } = r;
        if (!u) return;
        const f = d.id.toString(),
          v = u.id.toString();
        if (f === v) return;
        const S = t.find((A) => A.id === f),
          _ = t.find((A) => A.id === v);
        if (!(!S || !_) && S.section === _.section) {
          const A = S.section === "ideas" ? P : D,
            qe = A.findIndex((V) => V.id === f),
            Qe = A.findIndex((V) => V.id === v),
            Je = pt(A, qe, Qe),
            Xe = [...t.filter((V) => V.section !== S.section), ...Je];
          s(Xe);
        }
      },
      He = () => {
        T(null);
      };
    return j
      ? e.jsxs("div", {
          className: "max-w-4xl mx-auto py-8",
          children: [
            g === 0 &&
              e.jsxs("div", {
                className:
                  "flex flex-col items-center justify-center py-16 text-center slide-in-up",
                children: [
                  e.jsx("div", {
                    className: "text-5xl mb-6 animate-float text-idea",
                    children: e.jsx(Y, { size: 64, strokeWidth: 1.5 }),
                  }),
                  e.jsx("h1", {
                    className: "text-3xl font-bold mb-4",
                    children: "Capture Your Thoughts",
                  }),
                  e.jsx("p", {
                    className: "text-muted-foreground mb-8 max-w-md",
                    children:
                      "Start by adding your first thought below. Ideas can be organized, marked as done, and grouped into folders.",
                  }),
                ],
              }),
            e.jsx("div", {
              className: `w-full max-w-2xl mx-auto ${g === 0 ? "slide-in-up delay-200" : ""}`,
              children: e.jsx(Gt, {
                onAddThought: (r) => _e(r, m || void 0),
                inputRef: O,
                placeholder: m
                  ? "Add thought to selected folder..."
                  : "What's on your mind?",
              }),
            }),
            g > 0 &&
              e.jsxs("div", {
                className: "mt-8 grid grid-cols-1 md:grid-cols-4 gap-6",
                children: [
                  e.jsxs("div", {
                    className: "md:col-span-1 fade-in",
                    children: [
                      e.jsxs("div", {
                        className: "mb-4 flex items-center justify-between",
                        children: [
                          e.jsx("h3", {
                            className: "font-medium text-lg",
                            children: "Folders",
                          }),
                          e.jsx("button", {
                            onClick: () => $(!0),
                            className:
                              "p-1.5 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors",
                            title: "Add new folder",
                            children: e.jsx(ke, { size: 18 }),
                          }),
                        ],
                      }),
                      W &&
                        e.jsxs("div", {
                          className: "mb-3 flex items-center",
                          children: [
                            e.jsx("input", {
                              type: "text",
                              value: R,
                              onChange: (r) => B(r.target.value),
                              placeholder: "Folder name",
                              className:
                                "flex-1 rounded-l-md border border-r-0 border-gray-300 px-3 py-1.5 text-sm focus:border-blue-500 focus:outline-none",
                              autoFocus: !0,
                              onKeyDown: (r) => {
                                r.key === "Enter" && ae(),
                                  r.key === "Escape" && $(!1);
                              },
                            }),
                            e.jsx("button", {
                              onClick: ae,
                              className:
                                "rounded-r-md bg-folder px-3 py-1.5 text-sm font-medium text-white hover:bg-folder/90",
                              children: "Add",
                            }),
                          ],
                        }),
                      e.jsxs("div", {
                        className: `flex items-center py-2 px-3 rounded-lg cursor-pointer transition-all duration-200 mb-1
                ${m === null ? "bg-gray-100 text-foreground" : "hover:bg-gray-100"}`,
                        onClick: He,
                        children: [
                          e.jsx(Y, {
                            size: 18,
                            className: "mr-2 text-gray-500",
                          }),
                          e.jsx("span", {
                            className: "flex-1 text-sm font-medium",
                            children: "All thoughts",
                          }),
                          e.jsx("span", {
                            className:
                              "text-xs text-gray-500 bg-gray-200 rounded-full px-2 py-0.5",
                            children: t.length,
                          }),
                        ],
                      }),
                      o.length > 0
                        ? e.jsx("div", {
                            className: "space-y-1 mt-2",
                            children: o.map((r) =>
                              e.jsx(
                                Ht,
                                {
                                  id: r.id,
                                  name: r.name,
                                  thoughts: t.filter((d) => d.folder === r.id),
                                  onAddThought: Be,
                                  onRenameFolder: Ve,
                                  onDeleteFolder: Ge,
                                  isActive: m === r.id,
                                  onSelect: () => T(r.id),
                                },
                                r.id,
                              ),
                            ),
                          })
                        : e.jsx("div", {
                            className:
                              "text-center py-4 text-muted-foreground text-sm italic",
                            children: "No folders yet",
                          }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "md:col-span-3 fade-in delay-100",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center mb-5",
                        children: [
                          m &&
                            e.jsxs("div", {
                              className:
                                "flex items-center mr-2 bg-folder/10 text-folder px-2 py-1 rounded-md text-sm",
                              children: [
                                e.jsx(Ae, { size: 16, className: "mr-1" }),
                                ((ie = o.find((r) => r.id === m)) == null
                                  ? void 0
                                  : ie.name) || "Folder",
                              ],
                            }),
                          e.jsx("h2", {
                            className: "font-medium text-lg",
                            children: m ? "Thoughts in folder" : "All thoughts",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "mb-8 fade-in delay-200",
                        children: [
                          e.jsxs("h3", {
                            className: "flex items-center mb-4 font-medium",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "bg-idea/10 text-idea py-1 px-3 rounded-md flex items-center mr-2",
                                children: [
                                  e.jsx(Y, { size: 16, className: "mr-1.5" }),
                                  e.jsx("span", { children: "Ideas" }),
                                ],
                              }),
                              e.jsxs("span", {
                                className: "text-sm text-muted-foreground",
                                children: [
                                  P.length,
                                  " ",
                                  P.length === 1 ? "thought" : "thoughts",
                                ],
                              }),
                            ],
                          }),
                          P.length > 0
                            ? e.jsx(le, {
                                collisionDetection: ce,
                                onDragEnd: ne,
                                children: e.jsx(ue, {
                                  items: P.map((r) => r.id),
                                  strategy: he,
                                  children: P.map((r) => {
                                    var d;
                                    return e.jsxs(
                                      "div",
                                      {
                                        className:
                                          "flex items-start gap-2 w-full",
                                        children: [
                                          x === r.id
                                            ? e.jsx("div", {
                                                className: "w-full mb-3",
                                                children: e.jsx("textarea", {
                                                  value: c,
                                                  onChange: (u) =>
                                                    y(u.target.value),
                                                  onBlur: () => Ke(r),
                                                  className:
                                                    "border p-3 rounded-xl w-full text-gray-800 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-300",
                                                  autoFocus: !0,
                                                }),
                                              })
                                            : e.jsx(ye, {
                                                id: r.id,
                                                value: r.text,
                                                timestamp: r.timestamp,
                                                onDoubleClick: () => se(r),
                                                section: "ideas",
                                                folder:
                                                  r.folder &&
                                                  ((d = o.find(
                                                    (u) => u.id === r.folder,
                                                  )) == null
                                                    ? void 0
                                                    : d.name),
                                                onUpdate: (u) => Ye(r.id, u),
                                                updates: r.updates,
                                              }),
                                          !x &&
                                            e.jsxs("div", {
                                              className: "relative mt-3",
                                              children: [
                                                e.jsx("button", {
                                                  onClick: () =>
                                                    z(b === r.id ? null : r.id),
                                                  className:
                                                    "text-gray-500 hover:text-gray-700",
                                                  children: e.jsx(me, {
                                                    size: 18,
                                                  }),
                                                }),
                                                b === r.id &&
                                                  e.jsxs("div", {
                                                    className:
                                                      "absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-10",
                                                    children: [
                                                      e.jsxs("button", {
                                                        onClick: () => We(r),
                                                        className:
                                                          "w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                                                        children: [
                                                          e.jsx(Ie, {
                                                            size: 16,
                                                            className: "mr-2",
                                                          }),
                                                          "Edit",
                                                        ],
                                                      }),
                                                      e.jsxs("button", {
                                                        onClick: () => se(r),
                                                        className:
                                                          "w-full flex items-center px-4 py-2 text-sm text-done hover:bg-gray-100",
                                                        children: [
                                                          e.jsx(ge, {
                                                            size: 16,
                                                            className: "mr-2",
                                                          }),
                                                          "Mark done",
                                                        ],
                                                      }),
                                                      e.jsxs("button", {
                                                        onClick: () => oe(r),
                                                        className:
                                                          "w-full flex items-center px-4 py-2 text-sm text-red-500 hover:bg-gray-100",
                                                        children: [
                                                          e.jsx(fe, {
                                                            size: 16,
                                                            className: "mr-2",
                                                          }),
                                                          "Delete",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                              ],
                                            }),
                                        ],
                                      },
                                      r.id,
                                    );
                                  }),
                                }),
                              })
                            : e.jsx("div", {
                                className:
                                  "text-center py-6 text-muted-foreground text-sm italic border border-dashed rounded-xl",
                                children: "No ideas in this section yet",
                              }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "fade-in delay-300",
                        children: [
                          e.jsxs("h3", {
                            className: "flex items-center mb-4 font-medium",
                            children: [
                              e.jsxs("div", {
                                className:
                                  "bg-done/10 text-done py-1 px-3 rounded-md flex items-center mr-2",
                                children: [
                                  e.jsx(ge, { size: 16, className: "mr-1.5" }),
                                  e.jsx("span", { children: "Done" }),
                                ],
                              }),
                              e.jsxs("span", {
                                className: "text-sm text-muted-foreground",
                                children: [
                                  D.length,
                                  " ",
                                  D.length === 1 ? "thought" : "thoughts",
                                ],
                              }),
                            ],
                          }),
                          D.length > 0
                            ? e.jsx(le, {
                                collisionDetection: ce,
                                onDragEnd: ne,
                                children: e.jsx(ue, {
                                  items: D.map((r) => r.id),
                                  strategy: he,
                                  children: D.map((r) => {
                                    var d;
                                    return e.jsxs(
                                      "div",
                                      {
                                        className:
                                          "flex items-start gap-2 w-full",
                                        children: [
                                          e.jsx(ye, {
                                            id: r.id,
                                            value: r.text,
                                            timestamp: r.timestamp,
                                            onDoubleClick: () => re(r),
                                            section: "done",
                                            folder:
                                              r.folder &&
                                              ((d = o.find(
                                                (u) => u.id === r.folder,
                                              )) == null
                                                ? void 0
                                                : d.name),
                                          }),
                                          e.jsxs("div", {
                                            className: "relative mt-3",
                                            children: [
                                              e.jsx("button", {
                                                onClick: () =>
                                                  z(b === r.id ? null : r.id),
                                                className:
                                                  "text-gray-500 hover:text-gray-700",
                                                children: e.jsx(me, {
                                                  size: 18,
                                                }),
                                              }),
                                              b === r.id &&
                                                e.jsxs("div", {
                                                  className:
                                                    "absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-10",
                                                  children: [
                                                    e.jsxs("button", {
                                                      onClick: () => re(r),
                                                      className:
                                                        "w-full flex items-center px-4 py-2 text-sm text-idea hover:bg-gray-100",
                                                      children: [
                                                        e.jsx(Y, {
                                                          size: 16,
                                                          className: "mr-2",
                                                        }),
                                                        "Move to ideas",
                                                      ],
                                                    }),
                                                    e.jsxs("button", {
                                                      onClick: () => oe(r),
                                                      className:
                                                        "w-full flex items-center px-4 py-2 text-sm text-red-500 hover:bg-gray-100",
                                                      children: [
                                                        e.jsx(fe, {
                                                          size: 16,
                                                          className: "mr-2",
                                                        }),
                                                        "Delete",
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                        ],
                                      },
                                      r.id,
                                    );
                                  }),
                                }),
                              })
                            : e.jsx("div", {
                                className:
                                  "text-center py-6 text-muted-foreground text-sm italic border border-dashed rounded-xl",
                                children: "No completed thoughts yet",
                              }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        })
      : e.jsx("div", {
          className: "max-w-4xl mx-auto px-4 py-8",
          children: e.jsxs("div", {
            className:
              "flex flex-col items-center justify-center py-16 text-center slide-in-up",
            children: [
              e.jsx("div", {
                className: "text-5xl mb-6 animate-float text-idea",
                children: e.jsx(Y, { size: 64, strokeWidth: 1.5 }),
              }),
              e.jsx("h1", {
                className: "text-3xl font-bold mb-4",
                children: "Capture Your Thoughts",
              }),
              e.jsx("p", {
                className: "text-muted-foreground mb-8 max-w-md",
                children: "Sign in to start saving your thoughts and ideas.",
              }),
            ],
          }),
        });
  },
  Qt = Se(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    },
  ),
  G = l.forwardRef(
    ({ className: t, variant: s, size: o, asChild: a = !1, ...n }, i) => {
      const p = a ? yt : "button";
      return e.jsx(p, {
        className: F(Qt({ variant: s, size: o, className: t })),
        ref: i,
        ...n,
      });
    },
  );
G.displayName = "Button";
const H = l.forwardRef(({ className: t, type: s, ...o }, a) =>
  e.jsx("input", {
    type: s,
    className: F(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      t,
    ),
    ref: a,
    ...o,
  }),
);
H.displayName = "Input";
const Jt = vt,
  Me = l.forwardRef(({ className: t, ...s }, o) =>
    e.jsx(Fe, {
      ref: o,
      className: F(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        t,
      ),
      ...s,
    }),
  );
Me.displayName = Fe.displayName;
const ee = l.forwardRef(({ className: t, ...s }, o) =>
  e.jsx(ze, {
    ref: o,
    className: F(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      t,
    ),
    ...s,
  }),
);
ee.displayName = ze.displayName;
const te = l.forwardRef(({ className: t, ...s }, o) =>
  e.jsx(Pe, {
    ref: o,
    className: F(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      t,
    ),
    ...s,
  }),
);
te.displayName = Pe.displayName;
const Xt = () => {
    const [t, s] = l.useState(""),
      [o, a] = l.useState(""),
      [n, i] = l.useState(!1),
      [p, C] = l.useState(I.currentUser);
    l.useEffect(() => {
      const c = bt(I, (y) => {
        C(y);
      });
      return () => c();
    }, []);
    const b = async (c) => {
        c.preventDefault(), i(!0);
        try {
          await wt(I, t, o),
            h({
              title: "Account created!",
              description: "You've successfully signed up.",
            }),
            s(""),
            a("");
        } catch (y) {
          h({
            title: "Sign up failed",
            description: y.message,
            variant: "destructive",
          });
        } finally {
          i(!1);
        }
      },
      z = async (c) => {
        c.preventDefault(), i(!0);
        try {
          await Nt(I, t, o),
            h({
              title: "Welcome back!",
              description: "You've successfully signed in.",
            }),
            s(""),
            a("");
        } catch (y) {
          h({
            title: "Sign in failed",
            description: y.message,
            variant: "destructive",
          });
        } finally {
          i(!1);
        }
      },
      x = async () => {
        i(!0);
        try {
          const c = new Tt();
          c.addScope("profile"),
            c.addScope("email"),
            c.setCustomParameters({ prompt: "select_account" }),
            await St(I, c),
            h({
              title: "Welcome!",
              description: "You've successfully signed in with Google.",
            });
        } catch (c) {
          console.error("Google sign in error:", c),
            h({
              title: "Google sign in failed",
              description: c.message || "Could not sign in with Google",
              variant: "destructive",
            });
        } finally {
          i(!1);
        }
      },
      N = async () => {
        try {
          await Et(I),
            h({
              title: "Signed out",
              description: "You've been successfully signed out.",
            });
        } catch (c) {
          h({
            title: "Sign out failed",
            description: c.message,
            variant: "destructive",
          });
        }
      };
    return p
      ? e.jsxs("div", {
          className:
            "flex items-center justify-between bg-secondary/50 p-3 rounded-lg mb-4",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                e.jsx("div", {
                  className: "bg-idea/10 p-2 rounded-full",
                  children: e.jsx(Y, { size: 20, className: "text-idea" }),
                }),
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className: "text-sm font-medium",
                      children: p.email,
                    }),
                    e.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children: "Signed in",
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs(G, {
              variant: "outline",
              size: "sm",
              onClick: N,
              className: "gap-2",
              children: [e.jsx(jt, { size: 16 }), "Sign Out"],
            }),
          ],
        })
      : e.jsxs("div", {
          className: "bg-card p-6 rounded-lg shadow-md mb-8",
          children: [
            e.jsx("h2", {
              className: "text-xl font-medium mb-4 text-center",
              children: "Sign in to save your thoughts",
            }),
            e.jsxs(Jt, {
              defaultValue: "signin",
              className: "w-full",
              children: [
                e.jsxs(Me, {
                  className: "grid w-full grid-cols-2 mb-4",
                  children: [
                    e.jsx(ee, { value: "signin", children: "Sign In" }),
                    e.jsx(ee, { value: "signup", children: "Sign Up" }),
                  ],
                }),
                e.jsx(te, {
                  value: "signin",
                  children: e.jsxs("form", {
                    onSubmit: z,
                    className: "space-y-4",
                    children: [
                      e.jsx("div", {
                        children: e.jsx(H, {
                          type: "email",
                          placeholder: "Email",
                          value: t,
                          onChange: (c) => s(c.target.value),
                          required: !0,
                        }),
                      }),
                      e.jsx("div", {
                        children: e.jsx(H, {
                          type: "password",
                          placeholder: "Password",
                          value: o,
                          onChange: (c) => a(c.target.value),
                          required: !0,
                        }),
                      }),
                      e.jsx(G, {
                        type: "submit",
                        className: "w-full",
                        disabled: n,
                        children: n ? "Signing in..." : "Sign In",
                      }),
                    ],
                  }),
                }),
                e.jsx(te, {
                  value: "signup",
                  children: e.jsxs("form", {
                    onSubmit: b,
                    className: "space-y-4",
                    children: [
                      e.jsx("div", {
                        children: e.jsx(H, {
                          type: "email",
                          placeholder: "Email",
                          value: t,
                          onChange: (c) => s(c.target.value),
                          required: !0,
                        }),
                      }),
                      e.jsx("div", {
                        children: e.jsx(H, {
                          type: "password",
                          placeholder: "Password",
                          value: o,
                          onChange: (c) => a(c.target.value),
                          required: !0,
                          minLength: 6,
                        }),
                      }),
                      e.jsx(G, {
                        type: "submit",
                        className: "w-full",
                        disabled: n,
                        children: n ? "Signing up..." : "Sign Up",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "mt-4",
              children: [
                e.jsxs("div", {
                  className: "relative my-4",
                  children: [
                    e.jsx("div", {
                      className: "absolute inset-0 flex items-center",
                      children: e.jsx("div", { className: "w-full border-t" }),
                    }),
                    e.jsx("div", {
                      className:
                        "relative flex justify-center text-xs uppercase",
                      children: e.jsx("span", {
                        className: "bg-card px-2 text-muted-foreground",
                        children: "Or continue with",
                      }),
                    }),
                  ],
                }),
                e.jsxs(G, {
                  type: "button",
                  variant: "outline",
                  className: "w-full",
                  onClick: x,
                  disabled: n,
                  children: [
                    e.jsxs("svg", {
                      className: "mr-2 h-4 w-4",
                      viewBox: "0 0 24 24",
                      children: [
                        e.jsx("path", {
                          d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z",
                          fill: "#4285F4",
                        }),
                        e.jsx("path", {
                          d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z",
                          fill: "#34A853",
                        }),
                        e.jsx("path", {
                          d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z",
                          fill: "#FBBC05",
                        }),
                        e.jsx("path", {
                          d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z",
                          fill: "#EA4335",
                        }),
                      ],
                    }),
                    "Google",
                  ],
                }),
              ],
            }),
          ],
        });
  },
  Zt = () =>
    e.jsxs("div", {
      className: "min-h-screen bg-gradient-to-b from-white to-gray-50",
      children: [
        e.jsxs("header", {
          className: "pt-8 pb-6 px-4 text-center",
          children: [
            e.jsx("h1", {
              className: "text-3xl font-medium tracking-tight mb-2",
              children: "Thought Space",
            }),
            e.jsx("p", {
              className: "text-muted-foreground max-w-md mx-auto",
              children:
                "Capture your ideas, organize with folders, and track your progress",
            }),
          ],
        }),
        e.jsxs("main", {
          className: "max-w-4xl mx-auto px-4",
          children: [e.jsx(Xt, {}), e.jsx(qt, {})],
        }),
      ],
    }),
  es = () => {
    const t = Ct();
    return (
      l.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          t.pathname,
        );
      }, [t.pathname]),
      e.jsx("div", {
        className: "min-h-screen flex items-center justify-center bg-gray-100",
        children: e.jsxs("div", {
          className: "text-center",
          children: [
            e.jsx("h1", {
              className: "text-4xl font-bold mb-4",
              children: "404",
            }),
            e.jsx("p", {
              className: "text-xl text-gray-600 mb-4",
              children: "Oops! Page not found",
            }),
            e.jsx("a", {
              href: "/",
              className: "text-blue-500 hover:text-blue-700 underline",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  ts = new At(),
  ss = () =>
    e.jsx(kt, {
      client: ts,
      children: e.jsxs(Yt, {
        children: [
          e.jsx(_t, {}),
          e.jsx(Bt, {}),
          e.jsx(It, {
            children: e.jsxs(Ft, {
              children: [
                e.jsx(xe, { path: "/", element: e.jsx(Zt, {}) }),
                e.jsx(xe, { path: "*", element: e.jsx(es, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
zt(document.getElementById("root")).render(e.jsx(ss, {}));
