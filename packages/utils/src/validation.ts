/** Basic email validation */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Nigerian phone number validation (e.g. 08012345678 or +2348012345678) */
export function isValidNigerianPhone(phone: string): boolean {
  return /^(\+234|0)[789]\d{9}$/.test(phone);
}
