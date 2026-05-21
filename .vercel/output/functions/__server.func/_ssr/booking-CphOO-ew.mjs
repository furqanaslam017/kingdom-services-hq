import { V as reactExports, L as jsxRuntimeExports } from "./server-Dgf1Fqjt.mjs";
import { P as Package, D as motion, A as AnimatePresence, n as createLucideIcon, S as SERVICES, R as Recycle, H as HardHat, a as Armchair, i as Truck, h as Trash2, T as TIME_SLOTS, M as Mail, c as MapPin, L as Link } from "./router-CzfQMkqj.mjs";
import { u as useMutation, C as Clock } from "./createSsrRpc-CLR5Oyub.mjs";
import { s as submitBooking } from "./booking.functions-CvOqWQFB.mjs";
import { C as Calendar } from "./calendar-DlWwPndj.mjs";
import { C as Check, a as ChevronLeft, b as ChevronRight } from "./chevron-right-C9-OPG1o.mjs";
import { L as LoaderCircle } from "./loader-circle-DT8K_p01.mjs";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./types-BZpehCtZ.mjs";
const __iconNode$2 = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = createLucideIcon("copy", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode);
const STEPS = [{
  label: "Service",
  icon: Package
}, {
  label: "Details",
  icon: Phone
}, {
  label: "Schedule",
  icon: Calendar
}, {
  label: "Review",
  icon: FileText
}];
const initial = {
  service: "",
  customer_name: "",
  phone: "",
  email: "",
  address: "",
  preferred_date: "",
  time_slot: "",
  notes: ""
};
function BookingPage() {
  const [step, setStep] = reactExports.useState(0);
  const [form, setForm] = reactExports.useState(initial);
  const [direction, setDirection] = reactExports.useState(1);
  const [ref, setRef] = reactExports.useState("");
  const mutation = useMutation({
    mutationFn: submitBooking,
    onSuccess: (data) => {
      setRef(data.booking_ref);
      setStep(4);
    }
  });
  function update(key, value) {
    setForm((prev) => ({
      ...prev,
      [key]: value
    }));
  }
  function next() {
    if (step < 3) {
      setDirection(1);
      setStep((s) => s + 1);
    }
  }
  function back() {
    if (step > 0) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
  }
  function canProceed() {
    switch (step) {
      case 0:
        return !!form.service;
      case 1:
        return form.customer_name.trim().length >= 2 && form.phone.trim().length >= 7;
      case 2:
        return form.address.trim().length >= 4;
      case 3:
        return true;
      default:
        return false;
    }
  }
  function handleSubmit() {
    mutation.mutate({
      customer_name: form.customer_name,
      phone: form.phone,
      email: form.email || void 0,
      service_type: form.service,
      address: form.address,
      preferred_date: form.preferred_date || null,
      time_slot: form.time_slot || null,
      notes: form.notes || void 0
    });
  }
  const progress = (step + 1) / 4 * 100;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen overflow-hidden px-6 pt-28 pb-24 md:px-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary", children: "Book a job" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display mt-3 text-4xl text-foreground", children: [
          "Book in",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-primary", children: "minutes" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Select your service and we’ll lock in a time that works for you." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: STEPS.map((s, i) => {
          const Icon = s.icon;
          const active = i === step;
          const done = i < step;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-9 w-9 place-items-center rounded-full border-2 text-xs font-bold transition-all ${active ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20" : done ? "border-primary bg-primary-light text-primary" : "border-border bg-surface text-muted-foreground"}`, children: done ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-semibold uppercase tracking-wide ${active ? "text-primary" : done ? "text-foreground" : "text-muted-foreground"}`, children: s.label })
          ] }, s.label);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "h-full rounded-full bg-primary", animate: {
          width: `${progress}%`
        }, transition: {
          duration: 0.4,
          ease: "easeInOut"
        } }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-[2rem] p-6 shadow-elegant sm:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", custom: direction, children: [
          step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Step0Service, { value: form.service, onChange: (v) => update("service", v), direction }, "step0"),
          step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Step1Details, { form, onChange: update, direction }, "step1"),
          step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(Step2Schedule, { form, onChange: update, direction }, "step2"),
          step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(Step3Review, { form, onChange: update, direction }, "step3"),
          step === 4 && /* @__PURE__ */ jsxRuntimeExports.jsx(Step4Success, { refCode: ref, direction }, "step4")
        ] }),
        step < 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-between border-t border-border/60 pt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: back, disabled: step === 0, className: "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-muted disabled:opacity-40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" }),
            " Back"
          ] }),
          step < 3 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: next, disabled: !canProceed(), className: "inline-flex items-center gap-1 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-xl disabled:opacity-50 disabled:shadow-none", children: [
            "Next ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: handleSubmit, disabled: mutation.isPending, className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-xl disabled:opacity-60", children: mutation.isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "h-4 w-4 animate-spin" }),
            " Submitting..."
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: "Confirm booking" }) })
        ] })
      ] })
    ] })
  ] });
}
function Step0Service({
  value,
  onChange,
  direction
}) {
  const iconMap = {
    "junk-removal": Trash2,
    moving: Truck,
    "furniture-removal": Armchair,
    "debris-hauling": HardHat,
    "packing-loading": Package,
    "scrap-metal": Recycle
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    x: direction * 40
  }, animate: {
    opacity: 1,
    x: 0
  }, exit: {
    opacity: 0,
    x: direction * -40
  }, transition: {
    duration: 0.3
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-foreground", children: "What do you need?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Choose the service that best fits your job." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-3 sm:grid-cols-2", children: SERVICES.map((svc) => {
      const Icon = iconMap[svc.slug] ?? Package;
      const selected = value === svc.title;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => onChange(svc.title), className: `relative flex items-start gap-3 rounded-2xl border p-4 text-left transition-all ${selected ? "border-primary bg-primary/5 shadow-md shadow-primary/10" : "border-border bg-surface hover:border-primary/30 hover:shadow-sm"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `grid h-10 w-10 shrink-0 place-items-center rounded-xl ${selected ? "bg-primary text-primary-foreground" : "bg-surface-2 text-muted-foreground"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: svc.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-xs text-muted-foreground", children: svc.short }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 text-xs font-semibold text-primary", children: [
            "From ",
            svc.startingPrice
          ] })
        ] }),
        selected && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 right-3 grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }) })
      ] }, svc.slug);
    }) })
  ] }, "step0");
}
function Step1Details({
  form,
  onChange,
  direction
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    x: direction * 40
  }, animate: {
    opacity: 1,
    x: 0
  }, exit: {
    opacity: 0,
    x: direction * -40
  }, transition: {
    duration: 0.3
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-foreground", children: "Your details" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "We use this to confirm your booking and send reminders." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mb-1.5 block text-xs font-semibold text-foreground/70", children: [
          "Full name ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: form.customer_name, onChange: (e) => onChange("customer_name", e.target.value), required: true, className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20", placeholder: "John Smith" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mb-1.5 block text-xs font-semibold text-foreground/70", children: [
          "Phone ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "tel", value: form.phone, onChange: (e) => onChange("phone", e.target.value), required: true, className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20", placeholder: "(601) 555-0198" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-semibold text-foreground/70", children: "Email (optional)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: form.email, onChange: (e) => onChange("email", e.target.value), className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20", placeholder: "john@example.com" })
      ] })
    ] })
  ] }, "step1");
}
function Step2Schedule({
  form,
  onChange,
  direction
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    x: direction * 40
  }, animate: {
    opacity: 1,
    x: 0
  }, exit: {
    opacity: 0,
    x: direction * -40
  }, transition: {
    duration: 0.3
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-foreground", children: "Location & schedule" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Tell us where and when you need us." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "mb-1.5 block text-xs font-semibold text-foreground/70", children: [
          "Address ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: form.address, onChange: (e) => onChange("address", e.target.value), required: true, className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20", placeholder: "123 Main St, Jackson, MS" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-semibold text-foreground/70", children: "Preferred date" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", value: form.preferred_date, onChange: (e) => onChange("preferred_date", e.target.value), className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-semibold text-foreground/70", children: "Time slot" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.time_slot, onChange: (e) => onChange("time_slot", e.target.value), className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a time" }),
            TIME_SLOTS.map((slot) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: slot.value, children: slot.label }, slot.value))
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "mb-1.5 block text-xs font-semibold text-foreground/70", children: "Additional notes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: form.notes, onChange: (e) => onChange("notes", e.target.value), rows: 3, className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20", placeholder: "Access info, gate code, item list, etc." })
      ] })
    ] })
  ] }, "step2");
}
function Step3Review({
  form,
  onChange,
  direction
}) {
  const selected = SERVICES.find((s) => s.title === form.service);
  const slot = TIME_SLOTS.find((t) => t.value === form.time_slot);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    x: direction * 40
  }, animate: {
    opacity: 1,
    x: 0
  }, exit: {
    opacity: 0,
    x: direction * -40
  }, transition: {
    duration: 0.3
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl text-foreground", children: "Review & confirm" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Double-check your details before submitting." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "h-4 w-4" }), label: "Service", value: selected?.title ?? form.service }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }), label: "Phone", value: form.phone }),
      form.email && /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }), label: "Email", value: form.email }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }), label: "Address", value: form.address }),
      form.preferred_date && /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4" }), label: "Date", value: new Date(form.preferred_date).toLocaleDateString(void 0, {
        weekday: "short",
        month: "short",
        day: "numeric"
      }) }),
      slot && /* @__PURE__ */ jsxRuntimeExports.jsx(ReviewRow, { icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4" }), label: "Time", value: slot.label }),
      form.notes && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-surface-2 p-3 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Notes:" }),
        " ",
        form.notes
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 rounded-xl border border-border bg-surface p-3 text-xs text-muted-foreground", children: "You will receive a confirmation text once we review your request. We typically respond within 30 minutes during business hours." })
  ] }, "step3");
}
function ReviewRow({
  icon,
  label,
  value
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: icon }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold uppercase tracking-wide text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm font-medium text-foreground", children: value })
    ] })
  ] });
}
function Step4Success({
  refCode,
  direction
}) {
  const [copied, setCopied] = reactExports.useState(false);
  function copyRef() {
    if (refCode) {
      navigator.clipboard.writeText(refCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    scale: 0.95
  }, animate: {
    opacity: 1,
    scale: 1
  }, exit: {
    opacity: 0,
    x: direction * -40
  }, transition: {
    duration: 0.4
  }, className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-8 w-8" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-4 text-2xl text-foreground", children: "Booking submitted!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "We’ll text you shortly to confirm your slot." }),
    refCode && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Ref:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-sm font-semibold text-foreground", children: refCode }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: copyRef, className: "ml-1 rounded-full p-1 transition hover:bg-muted", title: "Copy reference", children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3.5 w-3.5 text-emerald-500" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "h-3.5 w-3.5 text-muted-foreground" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-xl", children: "Back to home" }) })
  ] }, "step4");
}
export {
  BookingPage as component
};
