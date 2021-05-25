import type { ValidateDecoratorFn, Validator } from '@/protocols'
import { createValidator, validateErrorMapFactory } from '@/factories'

export const createValidatorDecorator = <T>(
  validate: ValidateDecoratorFn,
): Validator<T> =>
  createValidator(async (x, _once, key, path, errors) => {
    const toValidate = { value: x, key, path }
    const error = await validate(toValidate)
    if (!error) return
    errors = validateErrorMapFactory(
      {
        ...error,
        validated: toValidate,
      },
      path,
      errors,
    )
    return errors
  })
