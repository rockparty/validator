import type { ValidateErrorMap } from './validate-error.protocol'

export type ValidateFnReturnType = Promise<undefined | ValidateErrorMap>

export type ValidateFn<ToValidate> = (
  toValidate: ToValidate,
  once?: boolean,
  key?: string,
  path?: string,
  errors?: ValidateErrorMap,
) => ValidateFnReturnType

export interface Validator<ToValidate> {
  validate: (
    toValidate: ToValidate,
    once?: boolean,
    key?: string,
    path?: string,
    errors?: ValidateErrorMap,
  ) => ValidateFnReturnType
}
