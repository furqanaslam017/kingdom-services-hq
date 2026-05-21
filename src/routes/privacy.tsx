import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Kingdom Come Services" },
      { name: "description", content: "Privacy policy for Kingdom Come Services." },
      { property: "og:title", content: "Privacy Policy — Kingdom Come Services" },
      { property: "og:description", content: "How we collect, use, and protect your personal information." },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-24 md:px-10">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="relative mx-auto max-w-3xl">
        <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
          Legal
        </span>
        <h1 className="font-display mt-4 text-4xl text-foreground">Privacy Policy</h1>
        <p className="mt-2 text-muted-foreground">
          Last updated: May 2026
        </p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/80">
          <section>
            <h2 className="font-display text-xl text-foreground">1. Information We Collect</h2>
            <p className="mt-2">
              When you use our website or submit a booking request, we may collect your name, phone number, email address, service address, and any notes you provide about the job. We also collect basic analytics data to improve our website experience.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">2. How We Use Your Information</h2>
            <p className="mt-2">
              We use your information solely to provide junk removal and moving services, communicate about your booking, send appointment reminders, and improve our operations. We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">3. Information Sharing</h2>
            <p className="mt-2">
              We only share your information with our crew members who need it to complete your job. We may also share data when required by law or to protect our legal rights.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">4. Data Security</h2>
            <p className="mt-2">
              We use industry-standard security measures to protect your data. Our website uses HTTPS encryption, and our database is secured with role-based access controls.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">5. Your Rights</h2>
            <p className="mt-2">
              You may request access to, correction of, or deletion of your personal data by contacting us at hello@kingdomcomeservices.com.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">6. Cookies</h2>
            <p className="mt-2">
              Our website may use cookies for analytics and performance purposes. You can disable cookies in your browser settings if you prefer.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl text-foreground">7. Contact Us</h2>
            <p className="mt-2">
              If you have questions about this Privacy Policy, please contact us at hello@kingdomcomeservices.com or call (601) 555-0198.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
