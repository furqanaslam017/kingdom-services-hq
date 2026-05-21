import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { toast } from "sonner";
import { z } from "zod";
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import { BUSINESS, SERVICES, TIME_SLOTS } from "@/lib/services";
import { submitBooking } from "@/lib/booking.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Kingdom Come Services" },
      { name: "description", content: "Call (601) 555-0198 or book online. Free estimates within the hour." },
      { property: "og:title", content: "Contact Kingdom Come Services" },
      { property: "og:description", content: "Get a free junk removal or moving estimate in Jackson, MS." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const Schema = z.object({
  customer_name: z.string().trim().min(2, "Name is required").max(100),
  phone: z.string().trim().min(7, "Phone is required").max(30),
  email: z.string().trim().email("Invalid email").max(255).optional().or(z.literal("")),
  service_type: z.string().min(2),
  address: z.string().trim().min(4, "Address is required").max(255),
  preferred_date: z.string().optional(),
  time_slot: z.string().optional(),
  notes: z.string().max(1000).optional().or(z.literal("")),
});
type FormData = z.infer<typeof Schema>;

function ContactPage() {
  const submit = useServerFn(submitBooking);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(Schema),
    defaultValues: { service_type: SERVICES[0].title },
  });

  const m = useMutation({
    mutationFn: (data: FormData) => submit({ data }),
    onSuccess: (r) => {
      toast.success(`Request received! Reference: ${r.booking_ref}`, {
        description: "We'll get back to you within the hour.",
      });
      reset();
    },
    onError: (e: Error) => toast.error(e.message || "Something went wrong."),
  });

  return (
    <section className="px-6 pt-20 pb-24 md:px-10 md:pt-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeader eyebrow="Contact" title="Get your" italic="free estimate" />
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-10 lg:grid-cols-[1.4fr_1fr]">
        <form
          onSubmit={handleSubmit((d) => m.mutate(d))}
          className="glass-card rounded-3xl p-8 md:p-10"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Full name *" error={errors.customer_name?.message}>
              <input {...register("customer_name")} className={inputCls} placeholder="Jane Smith" />
            </Field>
            <Field label="Phone *" error={errors.phone?.message}>
              <input {...register("phone")} className={inputCls} placeholder="(601) 555-0198" />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <input {...register("email")} type="email" className={inputCls} placeholder="you@example.com" />
            </Field>
            <Field label="Service *">
              <select {...register("service_type")} className={inputCls}>
                {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
              </select>
            </Field>
            <div className="md:col-span-2">
              <Field label="Service address *" error={errors.address?.message}>
                <input {...register("address")} className={inputCls} placeholder="123 Main St, Jackson, MS" />
              </Field>
            </div>
            <Field label="Preferred date">
              <input {...register("preferred_date")} type="date" className={inputCls} />
            </Field>
            <Field label="Preferred time">
              <select {...register("time_slot")} className={inputCls}>
                <option value="">Any time</option>
                {TIME_SLOTS.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
            </Field>
            <div className="md:col-span-2">
              <Field label="Notes">
                <textarea {...register("notes")} rows={4} className={`${inputCls} resize-none`} placeholder="Tell us what needs hauling or moving..." />
              </Field>
            </div>
          </div>

          <button
            type="submit"
            disabled={m.isPending}
            className="mt-8 w-full rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition hover:bg-primary-dark disabled:opacity-60"
          >
            {m.isPending ? "Sending..." : "Send my request"}
          </button>
        </form>

        <aside className="space-y-4">
          <div className="rounded-3xl border border-border bg-surface p-6">
            <h3 className="font-display text-xl">Reach us</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-center gap-3"><PhoneCall className="h-4 w-4 text-primary"/> <a href={BUSINESS.phoneHref} className="hover:text-primary">{BUSINESS.phone}</a></li>
              <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary"/> <a href={`mailto:${BUSINESS.email}`} className="hover:text-primary">{BUSINESS.email}</a></li>
              <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-primary"/> {BUSINESS.city} · 50mi</li>
              <li className="flex items-center gap-3"><Clock className="h-4 w-4 text-primary"/> {BUSINESS.hours}</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-primary p-6 text-primary-foreground">
            <h3 className="font-display text-xl">Need it today?</h3>
            <p className="mt-2 text-sm text-white/80">Call us — we often have same-day availability.</p>
            <a href={BUSINESS.phoneHref} className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary">
              <PhoneCall className="h-4 w-4"/> Call now
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-foreground/70">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
