import { useEffect, useState } from "react";
import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { getBookings, updateBookingStatus } from "@/lib/admin.functions";
import {
  Crown,
  LogOut,
  Loader2,
  PhoneCall,
  Mail,
  MapPin,
  Calendar,
  Clock,
  Package,
  ChevronDown,
  ChevronUp,
  Search,
  ArrowUpDown,
  X,
} from "lucide-react";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [{ title: "Admin Dashboard — Kingdom Come Services" }],
  }),
  component: AdminDashboardPage,
});

const STATUS_OPTIONS = ["pending", "confirmed", "in_progress", "completed", "cancelled"];

function AdminDashboardPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [sortNewestFirst, setSortNewestFirst] = useState(true);
  const [page, setPage] = useState(1);
  const perPage = 10;

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        navigate({ to: "/admin/login" });
      } else {
        setUserEmail(data.session.user.email ?? null);
      }
    });
  }, [navigate]);

  const {
    data: bookings,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["admin-bookings"],
    queryFn: () => getBookings(),
    refetchInterval: 30000,
  });

  const statusMutation = useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) =>
      updateBookingStatus({ id, status }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-bookings"] });
    },
  });

  async function handleLogout() {
    await supabase.auth.signOut();
    navigate({ to: "/admin/login" });
  }

  const filtered = (bookings ?? []).filter((b) => {
    const matchesSearch =
      !search.trim() ||
      b.customer_name.toLowerCase().includes(search.toLowerCase()) ||
      b.phone.includes(search) ||
      b.address.toLowerCase().includes(search.toLowerCase()) ||
      b.booking_ref.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || b.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const sorted = [...filtered].sort((a, b) => {
    const da = new Date(a.created_at).getTime();
    const db = new Date(b.created_at).getTime();
    return sortNewestFirst ? db - da : da - db;
  });

  const totalPages = Math.max(1, Math.ceil(sorted.length / perPage));
  const paged = sorted.slice((page - 1) * perPage, page * perPage);

  const stats = {
    total: bookings?.length ?? 0,
    pending: bookings?.filter((b) => b.status === "pending").length ?? 0,
    confirmed: bookings?.filter((b) => b.status === "confirmed").length ?? 0,
    completed: bookings?.filter((b) => b.status === "completed").length ?? 0,
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-surface-2 px-6 py-10 md:px-10">
      <div className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/20">
              <Crown className="h-5 w-5" />
            </span>
            <div>
              <h1 className="font-display text-2xl text-foreground">Dashboard</h1>
              <p className="text-xs text-muted-foreground">
                {userEmail ?? "Loading..."}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              View site
            </Link>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded-full bg-surface px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-destructive/10 hover:text-destructive"
            >
              <LogOut className="h-3.5 w-3.5" /> Sign out
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total bookings" value={stats.total} />
          <StatCard label="Pending" value={stats.pending} accent />
          <StatCard label="Confirmed" value={stats.confirmed} />
          <StatCard label="Completed" value={stats.completed} />
        </div>

        {/* Bookings list */}
        <div className="mt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-lg font-semibold text-foreground">Bookings</h2>
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                  placeholder="Search bookings..."
                  className="w-full rounded-full border border-border bg-background py-2 pr-3 pl-8 text-sm text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 sm:w-56"
                />
                {search && (
                  <button
                    onClick={() => { setSearch(""); setPage(1); }}
                    className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-0.5 text-muted-foreground hover:text-foreground"
                  >
                    <X className="h-3 w-3" />
                  </button>
                )}
              </div>
              <select
                value={statusFilter}
                onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}
                className="rounded-full border border-border bg-background px-3 py-2 text-sm text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                <option value="all">All statuses</option>
                {STATUS_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s.replace("_", " ")}
                  </option>
                ))}
              </select>
              <button
                onClick={() => setSortNewestFirst((v) => !v)}
                className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-3 py-2 text-xs font-semibold text-muted-foreground transition hover:bg-muted"
                title="Toggle sort"
              >
                <ArrowUpDown className="h-3.5 w-3.5" />
                {sortNewestFirst ? "Newest" : "Oldest"}
              </button>
            </div>
          </div>

          {isLoading && (
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" /> Loading bookings...
            </div>
          )}

          {error && (
            <p className="mt-6 text-sm text-destructive">
              Failed to load bookings. Please refresh.
            </p>
          )}

          {!isLoading && bookings?.length === 0 && (
            <p className="mt-6 text-sm text-muted-foreground">
              No bookings yet.
            </p>
          )}

          {!isLoading && filtered.length === 0 && bookings && bookings.length > 0 && (
            <p className="mt-6 text-sm text-muted-foreground">
              No bookings match your filters.
            </p>
          )}

          <div className="mt-4 space-y-3">
            {paged.map((b) => (
              <motion.div
                layout
                key={b.id}
                className="glass-card rounded-2xl border border-border/60 p-5 transition-all hover:border-primary/20 hover:shadow-md"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-lg text-foreground">
                        {b.customer_name}
                      </span>
                      <StatusBadge status={b.status} />
                    </div>
                    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <PhoneCall className="h-3 w-3" /> {b.phone}
                      </span>
                      <span className="flex items-center gap-1">
                        <Package className="h-3 w-3" /> {b.service_type}
                      </span>
                      {b.preferred_date && (
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {b.preferred_date}
                        </span>
                      )}
                      {b.time_slot && (
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {b.time_slot}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <select
                      value={b.status}
                      onChange={(e) =>
                        statusMutation.mutate({ id: b.id, status: e.target.value })
                      }
                      disabled={statusMutation.isPending}
                      className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      {STATUS_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() =>
                        setExpandedId(expandedId === b.id ? null : b.id)
                      }
                      className="grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground transition hover:bg-muted"
                    >
                      {expandedId === b.id ? (
                        <ChevronUp className="h-3.5 w-3.5" />
                      ) : (
                        <ChevronDown className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {expandedId === b.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-4 border-t border-border/60 pt-4 text-sm text-muted-foreground"
                  >
                    <div className="grid gap-2 sm:grid-cols-2">
                      <p className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        {b.address}
                      </p>
                      {b.email && (
                        <p className="flex items-center gap-2">
                          <Mail className="h-3.5 w-3.5 text-primary" />
                          {b.email}
                        </p>
                      )}
                      <p>
                        <span className="text-xs uppercase tracking-wider">Ref:</span>{" "}
                        <span className="font-mono text-xs">{b.booking_ref}</span>
                      </p>
                      <p>
                        <span className="text-xs uppercase tracking-wider">Created:</span>{" "}
                        {new Date(b.created_at).toLocaleString()}
                      </p>
                      {b.price_estimate && (
                        <p>
                          <span className="text-xs uppercase tracking-wider">Estimate:</span>{" "}
                          ${b.price_estimate}
                        </p>
                      )}
                      {b.distance_mi && (
                        <p>
                          <span className="text-xs uppercase tracking-wider">Distance:</span>{" "}
                          {b.distance_mi} mi
                        </p>
                      )}
                    </div>
                    {b.notes && (
                      <div className="mt-3 rounded-xl bg-surface-2 p-3 text-xs">
                        <span className="font-semibold text-foreground">Notes:</span>{" "}
                        {b.notes}
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-6 flex items-center justify-between">
              <p className="text-xs text-muted-foreground">
                Showing {(page - 1) * perPage + 1}–{Math.min(page * perPage, sorted.length)} of {sorted.length}
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-foreground transition hover:bg-muted disabled:opacity-40"
                >
                  Prev
                </button>
                <span className="text-xs font-semibold text-muted-foreground">
                  {page} / {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-semibold text-foreground transition hover:bg-muted disabled:opacity-40"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: number;
  accent?: boolean;
}) {
  return (
    <div
      className={`glass-card rounded-2xl p-5 ${
        accent ? "border-primary/20 ring-1 ring-primary/10" : ""
      }`}
    >
      <div className="text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div
        className={`mt-1 font-display text-3xl ${
          accent ? "text-primary" : "text-foreground"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    pending: "bg-amber-100 text-amber-700",
    confirmed: "bg-emerald-100 text-emerald-700",
    in_progress: "bg-blue-100 text-blue-700",
    completed: "bg-primary-light text-primary",
    cancelled: "bg-destructive/10 text-destructive",
  };
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
        map[status] ?? "bg-muted text-muted-foreground"
      }`}
    >
      {status.replace("_", " ")}
    </span>
  );
}
