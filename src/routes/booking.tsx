import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book Online — Kingdom Come Services" },
      { name: "description", content: "Book your junk removal or move online in Jackson, MS." },
      { property: "og:title", content: "Book Online — Kingdom Come Services" },
      { property: "og:description", content: "Quick online booking for junk removal and moving." },
      { property: "og:url", content: "/booking" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
  component: BookingPage,
});

function BookingPage() {
  return (
    <section className="px-6 pt-28 pb-24 md:px-10">
      <div className="mx-auto max-w-2xl rounded-3xl border border-border bg-surface p-10 text-center shadow-elegant">
        <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary">
          Book a job
        </span>
        <h1 className="font-display mt-4 text-4xl text-foreground">
          Use our contact form to{" "}
          <span className="italic text-primary">book in minutes</span>
        </h1>
        <p className="mt-3 text-muted-foreground">
          We currently route bookings through the contact form — fastest way to lock in a slot.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-dark"
        >
          Go to booking form →
        </Link>
      </div>
    </section>
  );
}
