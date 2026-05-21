import { L as jsxRuntimeExports } from "./server-Dgf1Fqjt.mjs";
import { D as motion, L as Link } from "./router-CzfQMkqj.mjs";
import { S as SectionHeader } from "./SectionHeader-CeywRX1k.mjs";
import { S as ScrollReveal } from "./CTASection-DZI7TcNj.mjs";
import { C as CircleCheck } from "./circle-check-CsIOETJo.mjs";
function PricingTeaser() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden px-6 py-24 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/5 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        SectionHeader,
        {
          eyebrow: "Pricing",
          title: "Clear pricing,",
          italic: "no surprises",
          subtitle: "Local jobs are a flat range. Travel surcharge is distance-based and disclosed upfront."
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            whileHover: { y: -8 },
            transition: { type: "spring", stiffness: 280, damping: 22 },
            className: "group relative overflow-hidden rounded-[2.5rem] p-10 text-white shadow-xl shadow-primary/10",
            style: {
              background: "linear-gradient(135deg, oklch(0.22 0.09 265), oklch(0.15 0.06 265))"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 animate-shimmer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/40 blur-3xl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-accent/20 blur-3xl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-md ring-1 ring-white/20", children: "Most popular" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display relative mt-4 text-2xl", children: "Local Jackson" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-3 flex items-baseline gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-5xl", children: "$250 – $300" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-white/60", children: "/ job" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "relative mt-6 space-y-2.5 text-sm", children: [
                "Full service within Jackson, MS",
                "3-man crew included",
                "All hauling & disposal included",
                "Same-day availability"
              ].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-accent-glow shrink-0" }),
                f
              ] }, f)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/booking",
                  className: "relative mt-8 inline-flex w-full items-center justify-center rounded-full bg-white py-3.5 text-sm font-semibold text-primary shadow-lg shadow-black/10 transition-all hover:bg-white/90 hover:shadow-xl",
                  children: "Book this service"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            whileHover: { y: -8 },
            transition: { type: "spring", stiffness: 280, damping: 22 },
            className: "h-full rounded-[2.5rem] border border-border bg-surface p-10 shadow-sm transition-shadow duration-500 hover:shadow-lg hover:shadow-primary/5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary", children: "Outside Jackson" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-4 text-2xl text-foreground", children: "Travel Surcharge" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex items-baseline gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-5xl text-primary", children: "+$50 – $125" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Distance-based, per trip" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm leading-relaxed text-muted-foreground", children: "We serve 30–50 miles from Jackson. Surcharge added based on your exact distance — confirmed before any work begins." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/contact",
                  className: "mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30",
                  children: "Get exact quote"
                }
              )
            ]
          }
        ) })
      ] })
    ] })
  ] });
}
export {
  PricingTeaser as P
};
