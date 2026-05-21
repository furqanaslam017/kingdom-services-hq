import { V as reactExports, L as jsxRuntimeExports } from "./server-Dgf1Fqjt.mjs";
import { D as motion, B as BUSINESS, f as PhoneCall, L as Link, n as createLucideIcon, Q as resolveElements } from "./router-CzfQMkqj.mjs";
const thresholds = {
  some: 0,
  all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
  const elements = resolveElements(elementOrSelector);
  const activeIntersections = /* @__PURE__ */ new WeakMap();
  const onIntersectionChange = (entries) => {
    entries.forEach((entry) => {
      const onEnd = activeIntersections.get(entry.target);
      if (entry.isIntersecting === Boolean(onEnd))
        return;
      if (entry.isIntersecting) {
        const newOnEnd = onStart(entry.target, entry);
        if (typeof newOnEnd === "function") {
          activeIntersections.set(entry.target, newOnEnd);
        } else {
          observer.unobserve(entry.target);
        }
      } else if (typeof onEnd === "function") {
        onEnd(entry);
        activeIntersections.delete(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(onIntersectionChange, {
    root,
    rootMargin,
    threshold: typeof amount === "number" ? amount : thresholds[amount]
  });
  elements.forEach((element) => observer.observe(element));
  return () => observer.disconnect();
}
function useInView(ref, { root, margin, amount, once = false, initial = false } = {}) {
  const [isInView, setInView] = reactExports.useState(initial);
  reactExports.useEffect(() => {
    if (!ref.current || once && isInView)
      return;
    const onEnter = () => {
      setInView(true);
      return once ? void 0 : () => setInView(false);
    };
    const options = {
      root: root && root.current || void 0,
      margin,
      amount
    };
    return inView(ref.current, onEnter, options);
  }, [root, ref, margin, once, amount]);
  return isInView;
}
const __iconNode = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode);
function ScrollReveal({
  children,
  delay = 0,
  y = 32,
  className
}) {
  const ref = reactExports.useRef(null);
  const inView2 = useInView(ref, { once: true, margin: "-80px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      initial: { opacity: 0, y },
      animate: inView2 ? { opacity: 1, y: 0 } : {},
      transition: {
        duration: 0.7,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      },
      className,
      children
    }
  );
}
function CTASection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "relative overflow-hidden px-6 py-28 md:py-32",
      style: {
        background: "linear-gradient(135deg, oklch(0.43 0.21 265) 0%, oklch(0.32 0.18 265) 50%, oklch(0.18 0.08 265) 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute inset-0 z-[1] opacity-[0.025] mix-blend-overlay",
            style: {
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-drift absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent-glow/25 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "animate-drift absolute -bottom-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-primary/35 blur-3xl",
            style: { animationDelay: "-4s" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-3xl text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.span,
            {
              initial: { opacity: 0, y: 10, scale: 0.95 },
              whileInView: { opacity: 1, y: 0, scale: 1 },
              viewport: { once: true },
              transition: { duration: 0.5 },
              className: "inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/90 uppercase backdrop-blur-md ring-1 ring-white/20",
              children: "Ready to get started?"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h2,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.1, duration: 0.6 },
              className: "mt-5 text-balance text-5xl font-bold text-white md:text-6xl",
              children: [
                "Get your",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display italic font-normal", children: "free estimate" }),
                " ",
                "today"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 10 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.2, duration: 0.5 },
              className: "mt-4 text-white/70 md:text-lg",
              children: "Call us or fill out our quick form. We respond within the hour."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: 0.3, duration: 0.5 },
              className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.a,
                  {
                    whileHover: { scale: 1.04 },
                    whileTap: { scale: 0.97 },
                    href: BUSINESS.phoneHref,
                    className: "flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary shadow-lg shadow-black/10 transition-shadow hover:shadow-xl",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneCall, { className: "h-4 w-4" }),
                      " Call ",
                      BUSINESS.phone
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: { scale: 1.04 }, whileTap: { scale: 0.97 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/booking",
                    className: "inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:border-white/40",
                    children: "Book online →"
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { delay: 0.4, duration: 0.5 },
              className: "mt-8 flex items-center justify-center gap-2 text-sm text-white/60",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: Array.from({ length: 5 }).map((_, n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Star,
                  {
                    className: "h-3.5 w-3.5 fill-amber-300 text-amber-300"
                  },
                  n
                )) }),
                "500+ satisfied customers in Jackson, MS"
              ]
            }
          )
        ] })
      ]
    }
  );
}
export {
  CTASection as C,
  ScrollReveal as S,
  Star as a,
  useInView as u
};
