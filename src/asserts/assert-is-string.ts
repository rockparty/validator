/* eslint-disable @typescript-eslint/no-explicit-any */

export function assertIsString(obj: unknown): obj is string {
  return typeof obj === 'string'
}
