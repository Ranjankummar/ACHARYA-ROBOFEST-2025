const HARDCODED_ADMIN_EMAILS = [];

const envAdminEmails = (import.meta.env.VITE_ADMIN_EMAILS || '')
  .split(',')
  .map((email) => email.trim())
  .filter(Boolean);

const normalizeEmail = (email) => email.trim().toLowerCase();

export const ADMIN_EMAIL_ALLOWLIST = [...new Set([...HARDCODED_ADMIN_EMAILS, ...envAdminEmails])]
  .map(normalizeEmail)
  .filter(Boolean);

export const isAdminEmail = (email) => {
  if (!email) {
    return false;
  }

  if (ADMIN_EMAIL_ALLOWLIST.length === 0) {
    return true;
  }

  return ADMIN_EMAIL_ALLOWLIST.includes(normalizeEmail(email));
};
