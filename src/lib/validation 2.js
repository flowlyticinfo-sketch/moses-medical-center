const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function isValidEmail(email) {
    return EMAIL_RE.test(email.trim());
}
export function sanitize(input) {
    return input.replace(/<[^>]*>/g, '').trim();
}
//# sourceMappingURL=validation.js.map