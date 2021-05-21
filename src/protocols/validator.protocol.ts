import type { ValidateErrorMap } from './validate-error.protocol'

export type ValidateFnReturnType = Promise<undefined | ValidateErrorMap>

export type ValidateFn<T> = (
  x: T,
  once?: boolean,
  key?: string,
  path?: string[],
  errors?: ValidateErrorMap,
) => ValidateFnReturnType

export interface Validator<T> {
  validate: (
    x: T,
    once?: boolean,
    key?: string,
    path?: string[],
    errors?: ValidateErrorMap,
  ) => ValidateFnReturnType
}
