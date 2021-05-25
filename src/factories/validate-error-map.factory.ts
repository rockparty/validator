import type { ValidateError, ValidateErrorMap } from '@/protocols'

export const validateErrorMapFactory = (
  error?: ValidateError,
  path?: string[],
  errors?: ValidateErrorMap,
): ValidateErrorMap => {
  if (!errors) errors = new Map()
  if (error) errors.set(path, [...(errors.get(path) ?? []), error])
  return errors
}
