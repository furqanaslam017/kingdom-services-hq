import Link from "next/link";
import { Crown, PhoneCall, Mail, MapPin } from "lucide-react";
import { BUSINESS, CITIES } from "@/lib/services";
import { SERVICE_DETAILS } from "@/lib/service-detail-data";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface-2">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/20">
              <Crown className="h-5 w-5" />
            </span>
            <span className="font-display text-xl leading-none">
              Kingdom Come
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Junk removal & moving services in Jackson, Mississippi. 3-man crew.
            4 years strong.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase">Services</h4>
          <ul className="mt-4 max-h-60 space-y-2 overflow-y-auto text-sm text-muted-foreground">
            {SERVICE_DETAILS.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="link-underline transition-colors hover:text-primary"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase">Service Area</h4>
          <ul className="mt-4 flex flex-wrap gap-1.5 text-xs">
            {CITIES.slice(0, 8).map((c) => (
              <li
                key={c}
                className="rounded-full bg-primary-light px-2.5 py-1 text-primary transition-colors hover:bg-primary hover:text-white cursor-default"
              >
                {c}
              </li>
            ))}
            <li className="rounded-full border border-dashed border-primary/30 px-2.5 py-1 text-primary/70">
              + more
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide text-foreground uppercase">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4 text-primary shrink-0" />
              <a href={BUSINESS.phoneHref} className="transition-colors hover:text-primary">
                {BUSINESS.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <a href={`mailto:${BUSINESS.email}`} className="transition-colors hover:text-primary">
                {BUSINESS.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span>{BUSINESS.city} · 50mi radius</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:px-10">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="transition-colors hover:text-foreground">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-foreground">Terms</Link>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">Licensed & insured · Jackson, MS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
