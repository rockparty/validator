export function assertIsArrayOfString(obj: unknown): obj is string[] {
  if (!Array.isArray(obj)) return false
  for (const value of obj) {
    if (!(typeof value === 'string')) return false
  }
  return true
}
