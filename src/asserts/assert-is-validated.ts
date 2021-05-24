import type { Validated } from '@/protocols'

export function assertIsValidated(obj: unknown): obj is Validated {
  return !!obj && (obj as Validated).value !== undefined
}
