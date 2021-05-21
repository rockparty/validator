import type {
  ValidateErrorMap,
  ValidateFn,
  ValidateFnReturnType,
  Validator,
} from '@/protocols'

export const createValidator = <T>(
  validateFn: ValidateFn<T>,
): Validator<T> => ({
  validate: (
    x: T,
    once?: boolean,
    key?: string,
    path?: string[],
    errors?: ValidateErrorMap,
  ): ValidateFnReturnType => validateFn(x, once, key, path, errors),
})
