/* eslint-disable @typescript-eslint/no-explicit-any */

export function assertIsObject(obj: unknown): obj is Record<string, any> {
  return (
    !!obj &&
    typeof obj !== 'function' &&
    !Array.isArray(obj) &&
    obj === Object(obj)
  )
}
