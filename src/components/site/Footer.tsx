import { Link } from "@tanstack/react-router";
import { Crown, PhoneCall, Mail, MapPin } from "lucide-react";
import { BUSINESS, CITIES } from "@/lib/services";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface-2">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Crown className="h-5 w-5" />
            </span>
            <span className="font-display text-xl leading-none">
              Kingdom Come
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Junk removal & moving services in Jackson, Mississippi. 3-man crew.
            4 years strong.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-primary">Junk Removal</Link></li>
            <li><Link to="/services" className="hover:text-primary">Moving Help</Link></li>
            <li><Link to="/services" className="hover:text-primary">Furniture Removal</Link></li>
            <li><Link to="/services" className="hover:text-primary">Debris Hauling</Link></li>
            <li><Link to="/services" className="hover:text-primary">Scrap Metal</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Service Area</h4>
          <ul className="mt-4 flex flex-wrap gap-1.5 text-xs">
            {CITIES.slice(0, 8).map((c) => (
              <li
                key={c}
                className="rounded-full bg-primary-light px-2.5 py-1 text-primary"
              >
                {c}
              </li>
            ))}
            <li className="rounded-full bg-primary-light px-2.5 py-1 text-primary">
              + more
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Get in touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <PhoneCall className="h-4 w-4 text-primary" />
              <a href={BUSINESS.phoneHref} className="hover:text-primary">
                {BUSINESS.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              <a href={`mailto:${BUSINESS.email}`} className="hover:text-primary">
                {BUSINESS.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {BUSINESS.city} · 50mi radius
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:px-10">
          <p>© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
          <p>Licensed & insured · Jackson, MS</p>
        </div>
      </div>
    </footer>
  );
}
