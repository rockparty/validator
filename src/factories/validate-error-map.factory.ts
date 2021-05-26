import { assertIsValidateErrorMap } from '@/asserts'
import { getValidateErrorMapErrors, toArray } from '@/functions'
import type { ValidateError, ValidateErrorMap } from '@/protocols'

export const validateErrorMapFactory = (
  newErrors?: ValidateError | ValidateError[] | ValidateErrorMap,
  path?: string[],
  currentErrors?: ValidateErrorMap,
): ValidateErrorMap => {
  if (!currentErrors) currentErrors = new Map()
  if (newErrors) {
    currentErrors.set(path, [
      ...getValidateErrorMapErrors(currentErrors),
      ...(assertIsValidateErrorMap(newErrors)
        ? getValidateErrorMapErrors(currentErrors)
        : toArray(newErrors)),
    ])
  }
  return currentErrors
}
