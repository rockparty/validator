import type { ValidateError } from '@/protocols'
import { assertIsValidateError } from './assert-is-validate-error'

export function assertIsArrayOfValidateError(
  obj: unknown,
): obj is ValidateError[] {
  if (!Array.isArray(obj)) return false
  for (const value of obj) {
    if (!assertIsValidateError(value)) return false
  }
  return true
}
