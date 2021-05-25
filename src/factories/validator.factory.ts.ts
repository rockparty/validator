import type {
  ValidateErrorMap,
  ValidateFn,
  ValidateFnReturnType,
  Validator,
} from '@/protocols'

export const createValidator = <ToValidate>(
  validateFn: ValidateFn<ToValidate>,
): Validator<ToValidate> => ({
  validate: (
    toValidate: ToValidate,
    once?: boolean,
    key?: string,
    path?: string[],
    errors?: ValidateErrorMap,
  ): ValidateFnReturnType => validateFn(toValidate, once, key, path, errors),
})
