import type { ValidateError } from '@/protocols'

export function assertIsValidateError(obj: unknown): obj is ValidateError {
  return (
    !!obj &&
    typeof (obj as ValidateError).name === 'string' &&
    typeof (obj as ValidateError).reason === 'string' &&
    (obj as ValidateError).validated !== undefined
  )
}
