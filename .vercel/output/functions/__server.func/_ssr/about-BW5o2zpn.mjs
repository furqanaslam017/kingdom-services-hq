import { L as jsxRuntimeExports } from "./server-Dgf1Fqjt.mjs";
import { S as SectionHeader } from "./SectionHeader-CeywRX1k.mjs";
import { S as ScrollReveal, C as CTASection } from "./CTASection-DZI7TcNj.mjs";
import { D as motion } from "./router-CzfQMkqj.mjs";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./types-BZpehCtZ.mjs";
const TIMELINE = [["2020", "Founded Kingdom Come Services in Jackson"], ["2021", "Expanded to moving & furniture handling"], ["2022", "Reached 200+ completed jobs"], ["2023", "Added scrap metal & debris services"], ["2024", "500+ jobs and growing"]];
const CREW = [{
  name: "Marcus",
  role: "Founder & Lead",
  fact: "Played college football. Lifts heavier than your couch."
}, {
  name: "Devon",
  role: "Operations",
  fact: "Knows every back road in Hinds County by heart."
}, {
  name: "Tre",
  role: "Crew",
  fact: "Started moving for friends in high school. Hasn't stopped."
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden px-6 pt-20 pb-12 md:px-10 md:pt-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-3xl text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "About us", title: "3 locals who", italic: "get things done", subtitle: "No call centers. No franchise overhead. Just a hard-working Jackson crew who treats your property like our own." }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden px-6 pb-24 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto grid max-w-6xl gap-6 md:grid-cols-3", children: CREW.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: {
        y: -6
      }, transition: {
        type: "spring",
        stiffness: 300,
        damping: 22
      }, className: "glass-card group h-full rounded-3xl p-8 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-16 w-16 place-items-center rounded-full bg-primary text-2xl font-bold text-white shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-110", children: c.name[0] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-5 text-2xl", children: c.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-primary", children: c.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: c.fact })
      ] }) }, c.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-surface-2 px-6 py-24 md:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute top-1/2 left-0 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Our story", title: "From day one to", italic: "500+ jobs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative mt-12 space-y-8 border-l-2 border-primary/20 pl-8", children: TIMELINE.map(([year, what]) => /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollReveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -left-[39px] top-0 grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-white shadow-md shadow-primary/20", children: "•" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-primary", children: year }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-foreground", children: what })
        ] }) }, year)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CTASection, {})
  ] });
}
export {
  AboutPage as component
};
