import { assertIsValidateErrorMap } from '@/asserts'
import { getValidateErrorMapErrors, toArray } from '@/functions'
import type { ValidateError, ValidateErrorMap } from '@/protocols'

export const validateErrorMapFactory = (
  newErrors?: ValidateError | ValidateError[] | ValidateErrorMap,
  path?: string[],
  currentErrors?: ValidateErrorMap,
): ValidateErrorMap => {
  const errors: ValidateErrorMap = new Map(currentErrors ?? [])
  if (newErrors) {
    errors.set(path, [
      ...(currentErrors ? getValidateErrorMapErrors(currentErrors) : []),
      ...(assertIsValidateErrorMap(newErrors)
        ? getValidateErrorMapErrors(errors)
        : toArray(newErrors)),
    ])
  }
  return errors
}
