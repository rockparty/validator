import type { ValidateErrorMap } from '@/protocols'
import { assertIsArrayOfString } from './assert-is-array-of-string'
import { assertIsArrayOfValidateError } from './assert-is-array-of-validate-error'

export function assertIsValidateErrorMap(
  obj: unknown,
): obj is ValidateErrorMap {
  if (!(obj instanceof Map)) return false
  for (const [path, errors] of obj.entries()) {
    if (path) {
      if (!assertIsArrayOfString(path)) return false
    }
    if (!assertIsArrayOfValidateError(errors)) return false
  }
  return true
}
