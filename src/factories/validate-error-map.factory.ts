import { assertIsValidateErrorMap } from '@/asserts'
import { getValidateErrorMapErrors, toArray } from '@/functions'
import type { ValidateError, ValidateErrorMap } from '@/protocols'

export const validateErrorMapFactory = (
  newErrors?: ValidateError | ValidateError[] | ValidateErrorMap,
  path?: string,
  currentErrors?: ValidateErrorMap,
): ValidateErrorMap | undefined => {
  let errors: ValidateErrorMap | undefined = currentErrors
    ? new Map(currentErrors)
    : undefined

  if (newErrors) {
    if (!errors) errors = new Map()
    errors.set(path, [
      ...getValidateErrorMapErrors(errors, path),
      ...(assertIsValidateErrorMap(newErrors)
        ? getValidateErrorMapErrors(newErrors, path)
        : toArray(newErrors)),
    ])
  }

  return errors
}
