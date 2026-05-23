export type RevenueEntry = {
  id: string;
  customerName: string;
  amount: number;
  date: string;
  notes: string;
};

const STORAGE_KEY = "kcs_revenue";

export function getRevenue(): RevenueEntry[] {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as RevenueEntry[];
  } catch {
    return [];
  }
}

export function addRevenue(entry: Omit<RevenueEntry, "id">): RevenueEntry {
  const entries = getRevenue();
  const newEntry: RevenueEntry = {
    ...entry,
    id: `${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify([newEntry, ...entries]));
  return newEntry;
}

export function deleteRevenue(id: string): boolean {
  const entries = getRevenue();
  const filtered = entries.filter((e) => e.id !== id);
  if (filtered.length === entries.length) return false;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  return true;
}

export function getMonthlyTotal(monthYear: string): number {
  const entries = getRevenue();
  return entries
    .filter((e) => e.date.startsWith(monthYear))
    .reduce((sum, e) => sum + e.amount, 0);
}

