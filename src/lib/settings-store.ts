export type AdminSettings = {
  phone: string;
  email: string;
  serviceRadius: string;
  pricingNotes: string;
  password: string;
};

const STORAGE_KEY = "kcs_admin_settings";
const PASSWORD_KEY = "kcs_admin_pass";

const DEFAULTS: AdminSettings = {
  phone: "(601) 555-0198",
  email: "hello@kingdomcomeservices.com",
  serviceRadius: "30–50 miles around Jackson, MS",
  pricingNotes: "Exact pricing discussed before every job. Call or book online for a free estimate.",
  password: "KCS2024!",
};

export function getSettings(): AdminSettings {
  if (typeof window === "undefined") return DEFAULTS;
  const raw = localStorage.getItem(STORAGE_KEY);
  const settings = raw ? (JSON.parse(raw) as Partial<AdminSettings>) : {};
  return { ...DEFAULTS, ...settings };
}

export function saveSettings(settings: Partial<AdminSettings>): AdminSettings {
  const current = getSettings();
  const merged = { ...current, ...settings };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  if (settings.password) {
    localStorage.setItem(PASSWORD_KEY, settings.password);
  }
  return merged;
}

export function getStoredPassword(): string {
  if (typeof window === "undefined") return DEFAULTS.password;
  return localStorage.getItem(PASSWORD_KEY) || DEFAULTS.password;
}

export function checkPassword(input: string): boolean {
  return input === getStoredPassword();
}

