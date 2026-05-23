"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { submitBookingAction } from "@/lib/actions";
import { SERVICES, TIME_SLOTS } from "@/lib/services";
import {
  Trash2,
  Truck,
  Armchair,
  HardHat,
  Package,
  Recycle,
  ChevronLeft,
  ChevronRight,
  Check,
  Loader2,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Clock,
  FileText,
  Copy,
} from "lucide-react";

const STEPS = [
  { label: "Service", icon: Package },
  { label: "Details", icon: Phone },
  { label: "Schedule", icon: Calendar },
  { label: "Review", icon: FileText },
];

type FormData = {
  service: string;
  customer_name: string;
  phone: string;
  email: string;
  address: string;
  preferred_date: string;
  time_slot: string;
  notes: string;
};

const initial: FormData = {
  service: "",
  customer_name: "",
  phone: "",
  email: "",
  address: "",
  preferred_date: "",
  time_slot: "",
  notes: "",
};

export default function BookingPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initial);
  const [direction, setDirection] = useState(1);
  const [ref, setRef] = useState("");

  const mutation = useMutation<
    { booking_ref: string },
    Error,
    Parameters<typeof submitBookingAction>[0]
  >({
    mutationFn: submitBookingAction,
    onSuccess: (data) => {
      setRef(data.booking_ref);
      setStep(4);
    },
  });

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
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
      email: form.email || undefined,
      service_type: form.service,
      address: form.address,
      preferred_date: form.preferred_date || null,
      time_slot: form.time_slot || null,
      notes: form.notes || undefined,
    });
  }

  const progress = ((step + 1) / 4) * 100;

  return (
    <section className="relative min-h-screen overflow-hidden px-6 pt-28 pb-24 md:px-10">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl">
        <div className="mb-8 text-center">
          <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
            Book a job
          </span>
          <h1 className="font-display mt-3 text-4xl text-foreground">
            Book in <span className="italic text-primary">minutes</span>
          </h1>
          <p className="mt-2 text-muted-foreground">
            Select your service and we'll lock in a time that works for you.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              const active = i === step;
              const done = i < step;
              return (
                <div key={s.label} className="flex flex-col items-center gap-2">
                  <div
                    className={`grid h-9 w-9 place-items-center rounded-full border-2 text-xs font-bold transition-all ${
                      active
                        ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                        : done
                        ? "border-primary bg-primary-light text-primary"
                        : "border-border bg-surface text-muted-foreground"
                    }`}
                  >
                    {done ? <Check className="h-4 w-4" /> : <Icon className="h-4 w-4" />}
                  </div>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wide ${
                      active ? "text-primary" : done ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border">
            <motion.div
              className="h-full rounded-full bg-primary"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>
        </div>

        <div className="glass-card rounded-[2rem] p-6 shadow-elegant sm:p-10">
          <AnimatePresence mode="wait" custom={direction}>
            {step === 0 && (
              <Step0Service
                key="step0"
                value={form.service}
                onChange={(v) => update("service", v)}
                direction={direction}
              />
            )}
            {step === 1 && (
              <Step1Details
                key="step1"
                form={form}
                onChange={update}
                direction={direction}
              />
            )}
            {step === 2 && (
              <Step2Schedule
                key="step2"
                form={form}
                onChange={update}
                direction={direction}
              />
            )}
            {step === 3 && (
              <Step3Review
                key="step3"
                form={form}
                onChange={update}
                direction={direction}
              />
            )}
            {step === 4 && (
              <Step4Success key="step4" refCode={ref} direction={direction} />
            )}
          </AnimatePresence>

          {step < 4 && (
            <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-6">
              <button
                onClick={back}
                disabled={step === 0}
                className="inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-muted disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" /> Back
              </button>

              {step < 3 ? (
                <button
                  onClick={next}
                  disabled={!canProceed()}
                  className="inline-flex items-center gap-1 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-xl disabled:opacity-50 disabled:shadow-none"
                >
                  Next <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={mutation.isPending}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-xl disabled:opacity-60"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>Confirm booking</>
                  )}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Step0Service({ value, onChange, direction }: { value: string; onChange: (v: string) => void; direction: number }) {
  const iconMap: Record<string, React.ElementType> = {
    "junk-removal": Trash2,
    moving: Truck,
    "furniture-removal": Armchair,
    "debris-hauling": HardHat,
    "packing-loading": Package,
    "scrap-metal": Recycle,
  };

  return (
    <motion.div
      key="step0"
      initial={{ opacity: 0, x: direction * 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction * -40 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-display text-2xl text-foreground">What do you need?</h2>
      <p className="mt-1 text-sm text-muted-foreground">Choose the service that best fits your job.</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {SERVICES.map((svc) => {
          const Icon = iconMap[svc.slug] ?? Package;
          const selected = value === svc.title;
          return (
            <button
              key={svc.slug}
              onClick={() => onChange(svc.title)}
              className={`relative flex items-start gap-3 rounded-2xl border p-4 text-left transition-all ${
                selected
                  ? "border-primary bg-primary/5 shadow-md shadow-primary/10"
                  : "border-border bg-surface hover:border-primary/30 hover:shadow-sm"
              }`}
            >
              <span
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                  selected ? "bg-primary text-primary-foreground" : "bg-surface-2 text-muted-foreground"
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-sm font-semibold text-foreground">{svc.title}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{svc.short}</div>
                <div className="mt-1.5 text-xs font-semibold text-primary">From {svc.startingPrice}</div>
              </div>
              {selected && (
                <span className="absolute top-3 right-3 grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] text-primary-foreground">
                  <Check className="h-3 w-3" />
                </span>
              )}
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

function Step1Details({ form, onChange, direction }: { form: FormData; onChange: <K extends keyof FormData>(key: K, value: FormData[K]) => void; direction: number }) {
  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: direction * 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction * -40 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-display text-2xl text-foreground">Your details</h2>
      <p className="mt-1 text-sm text-muted-foreground">We use this to confirm your booking and send reminders.</p>
      <div className="mt-6 space-y-4">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-foreground/70">Full name <span className="text-destructive">*</span></label>
          <input type="text" value={form.customer_name} onChange={(e) => onChange("customer_name", e.target.value)} required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="John Smith" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-foreground/70">Phone <span className="text-destructive">*</span></label>
          <input type="tel" value={form.phone} onChange={(e) => onChange("phone", e.target.value)} required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="(601) 555-0198" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-foreground/70">Email (optional)</label>
          <input type="email" value={form.email} onChange={(e) => onChange("email", e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="john@example.com" />
        </div>
      </div>
    </motion.div>
  );
}

function Step2Schedule({ form, onChange, direction }: { form: FormData; onChange: <K extends keyof FormData>(key: K, value: FormData[K]) => void; direction: number }) {
  return (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: direction * 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction * -40 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-display text-2xl text-foreground">Location & schedule</h2>
      <p className="mt-1 text-sm text-muted-foreground">Tell us where and when you need us.</p>
      <div className="mt-6 space-y-4">
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-foreground/70">Address <span className="text-destructive">*</span></label>
          <input type="text" value={form.address} onChange={(e) => onChange("address", e.target.value)} required className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="123 Main St, Jackson, MS" />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-foreground/70">Preferred date</label>
            <input type="date" value={form.preferred_date} onChange={(e) => onChange("preferred_date", e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-foreground/70">Time slot</label>
            <select value={form.time_slot} onChange={(e) => onChange("time_slot", e.target.value)} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20">
              <option value="">Select a time</option>
              {TIME_SLOTS.map((slot) => (
                <option key={slot.value} value={slot.value}>{slot.label}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-semibold text-foreground/70">Additional notes</label>
          <textarea value={form.notes} onChange={(e) => onChange("notes", e.target.value)} rows={3} className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20" placeholder="Access info, gate code, item list, etc." />
        </div>
      </div>
    </motion.div>
  );
}

function Step3Review({ form, onChange, direction }: { form: FormData; onChange: <K extends keyof FormData>(key: K, value: FormData[K]) => void; direction: number }) {
  const selected = SERVICES.find((s) => s.title === form.service);
  const slot = TIME_SLOTS.find((t) => t.value === form.time_slot);

  return (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: direction * 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction * -40 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="font-display text-2xl text-foreground">Review & confirm</h2>
      <p className="mt-1 text-sm text-muted-foreground">Double-check your details before submitting.</p>
      <div className="mt-6 space-y-3">
        <ReviewRow icon={<Package className="h-4 w-4" />} label="Service" value={selected?.title ?? form.service} />
        <ReviewRow icon={<Phone className="h-4 w-4" />} label="Phone" value={form.phone} />
        {form.email && <ReviewRow icon={<Mail className="h-4 w-4" />} label="Email" value={form.email} />}
        <ReviewRow icon={<MapPin className="h-4 w-4" />} label="Address" value={form.address} />
        {form.preferred_date && (
          <ReviewRow icon={<Calendar className="h-4 w-4" />} label="Date" value={new Date(form.preferred_date).toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" })} />
        )}
        {slot && <ReviewRow icon={<Clock className="h-4 w-4" />} label="Time" value={slot.label} />}
        {form.notes && (
          <div className="rounded-xl bg-surface-2 p-3 text-xs text-muted-foreground">
            <span className="font-semibold text-foreground">Notes:</span> {form.notes}
          </div>
        )}
      </div>
      <div className="mt-4 rounded-xl border border-border bg-surface p-3 text-xs text-muted-foreground">
        You will receive a confirmation text once we review your request. We typically respond within 30 minutes during business hours.
      </div>
    </motion.div>
  );
}

function ReviewRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3">
      <span className="text-primary">{icon}</span>
      <div className="min-w-0 flex-1">
        <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
}

function Step4Success({ refCode, direction }: { refCode: string; direction: number }) {
  const [copied, setCopied] = useState(false);

  function copyRef() {
    if (refCode) {
      navigator.clipboard.writeText(refCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <motion.div
      key="step4"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, x: direction * -40 }}
      transition={{ duration: 0.4 }}
      className="text-center"
    >
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20">
        <Check className="h-8 w-8" />
      </div>
      <h2 className="font-display mt-4 text-2xl text-foreground">Booking submitted!</h2>
      <p className="mt-2 text-sm text-muted-foreground">We'll text you shortly to confirm your slot.</p>
      {refCode && (
        <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2">
          <span className="text-xs text-muted-foreground">Ref:</span>
          <span className="font-mono text-sm font-semibold text-foreground">{refCode}</span>
          <button onClick={copyRef} className="ml-1 rounded-full p-1 transition hover:bg-muted" title="Copy reference">
            {copied ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5 text-muted-foreground" />}
          </button>
        </div>
      )}
      <div className="mt-8">
        <Link href="/" className="inline-flex rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark hover:shadow-xl">
          Back to home
        </Link>
      </div>
    </motion.div>
  );
}
