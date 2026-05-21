import { L as jsxRuntimeExports } from "./server-Dgf1Fqjt.mjs";
function SectionHeader({
  eyebrow,
  title,
  italic,
  subtitle,
  align = "center"
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${alignCls} max-w-3xl`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full bg-primary-light px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl", children: [
      title,
      " ",
      italic && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-normal italic text-primary", children: italic })
    ] }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground sm:text-lg", children: subtitle })
  ] });
}
export {
  SectionHeader as S
};
