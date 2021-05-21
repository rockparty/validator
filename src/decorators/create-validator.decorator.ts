import type { ValidateDecoratorFn, Validator } from '@/protocols'
import { createValidator } from '@/factories'

export const createValidatorDecorator = <T>(
  validate: ValidateDecoratorFn,
): Validator<T> =>
  createValidator(async (x, _once, key, path, errors) => {
    const toValidate = { value: x, key, path }
    const error = await validate(toValidate)
    if (!error) return
    if (!errors) errors = new Map()
    return errors.set(path, [
      ...(errors.get(path) ?? []),
      {
        ...error,
        validated: toValidate,
      },
    ])
  })
