const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_RE.test(email.trim());
}

export function sanitize(input: string): string {
  return input.replace(/<[^>]*>/g, '').trim();
}
