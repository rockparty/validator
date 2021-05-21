import type { ValidateFnReturnType, Validator } from '@/protocols'

export const createArrayValidator = <T>(
  ...validators: Validator<T>[]
): Validator<T> => ({
  validate: async (x, once, key, path, errors): ValidateFnReturnType => {
    for (const validation of validators) {
      errors = await validation.validate(x, once, key, path, errors)
      if (errors && once) return errors
    }
    return errors
  },
})
