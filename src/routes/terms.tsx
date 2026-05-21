import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Kingdom Come Services" },
      { name: "description", content: "Terms of service for Kingdom Come Services." },
      { property: "og:title", content: "Terms of Service — Kingdom Come Services" },
      { property: "og:description", content: "Terms and conditions for using Kingdom Come Services." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-24 md:px-10">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="relative mx-auto max-w-3xl">
        <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
          Legal
        </span>
        <h1 className="font-display mt-4 text-4xl text-foreground">Terms of Service</h1>
        <p className="mt-2 text-muted-foreground">
          Last updated: May 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/80">
          <section>
            <h2 className="font-display text-xl text-foreground">1. Agreement to Terms</h2>
            <p className="mt-2">
              By booking services with Kingdom Come Services, you agree to these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">2. Services Description</h2>
            <p className="mt-2">
              Kingdom Come Services provides junk removal, moving help, furniture removal, debris hauling, packing & loading, and scrap metal recycling in the Jackson, Mississippi area and surrounding cities within a 50-mile radius.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">3. Booking & Cancellation</h2>
            <p className="mt-2">
              Bookings can be made through our website or by phone. We require at least 24 hours notice for cancellations. Same-day cancellations may incur a fee of up to $75 depending on crew dispatch status.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">4. Pricing & Payment</h2>
            <p className="mt-2">
              Prices listed on our website are starting estimates. Final pricing is determined after an on-site assessment or detailed photo review. We accept cash, credit/debit cards, and digital payments. Payment is due upon job completion unless otherwise arranged.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">5. Liability</h2>
            <p className="mt-2">
              We take utmost care with your property, but we are not liable for pre-existing damage, structural issues, or items that are inherently fragile. We carry general liability insurance for accidental damage caused by our crew during the service.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">6. Prohibited Items</h2>
            <p className="mt-2">
              We do not handle hazardous materials, chemicals, asbestos, ammunition, explosives, or biohazardous waste. If you are unsure whether we can remove an item, please ask before booking.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">7. Service Area</h2>
            <p className="mt-2">
              Our primary service area is Jackson, MS and surrounding cities within 50 miles. Jobs outside this radius may be subject to additional travel fees and are accepted at our discretion.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">8. Changes to Terms</h2>
            <p className="mt-2">
              We may update these terms from time to time. Changes will be posted on this page with an updated effective date. Continued use of our services constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">9. Contact</h2>
            <p className="mt-2">
              Questions about these Terms? Contact us at hello@kingdomcomeservices.com or (601) 555-0198.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
