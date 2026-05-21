import { L as jsxRuntimeExports } from "./server-Dgf1Fqjt.mjs";
import { S as SERVICES, D as motion, L as Link } from "./router-CzfQMkqj.mjs";
import { S as SectionHeader } from "./SectionHeader-CeywRX1k.mjs";
import { S as ScrollReveal, C as CTASection } from "./CTASection-DZI7TcNj.mjs";
import { C as CircleCheck } from "./circle-check-CsIOETJo.mjs";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./types-BZpehCtZ.mjs";
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden px-6 pt-20 pb-12 md:px-10 md:pt-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-4xl text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "What we do", title: "Our", italic: "services", subtitle: "Six core offerings. One reliable crew. All within 50 miles of Jackson." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden px-6 pb-24 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute top-1/2 right-0 h-[500px] w-[400px] -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-6xl space-y-20", children: SERVICES.map((s, i) => {
        const Icon = s.icon;
        const reverse = i % 2 === 1;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid items-center gap-10 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: {
            y: -4
          }, transition: {
            type: "spring",
            stiffness: 300,
            damping: 22
          }, className: "glass-card group rounded-3xl p-10 transition-shadow duration-500 hover:shadow-lg hover:shadow-primary/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-14 w-14 place-items-center rounded-2xl bg-primary text-white shadow-md shadow-primary/20 transition-transform duration-300 group-hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-6 text-3xl text-foreground md:text-4xl", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: s.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2", children: s.includes.map((inc) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-primary shrink-0" }),
              " ",
              inc
            ] }, inc)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between border-t border-border pt-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Starting at" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-primary", children: s.startingPrice })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/booking", className: "rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-lg", children: [
                "Book ",
                s.title,
                " →"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[4/3] overflow-hidden rounded-3xl bg-primary-light", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full bg-gradient-to-br from-primary/15 via-accent/10 to-primary/5 transition-transform duration-700 group-hover:scale-105" }) })
        ] }) }, s.slug);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  ServicesPage as component
};
