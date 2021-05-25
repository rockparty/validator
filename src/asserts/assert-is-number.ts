/* eslint-disable @typescript-eslint/no-explicit-any */

export function assertIsNumber(obj: unknown): obj is number {
  return typeof obj === 'number'
}
