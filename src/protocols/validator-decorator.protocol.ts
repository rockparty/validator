import type { Validated, ValidateError } from './validate-error.protocol'

export type ValidateErrorWithoutValidated = Omit<ValidateError, 'validated'>

export type ValidateDecoratorFnReturnType = Promise<
  ValidateErrorWithoutValidated | undefined
>

export type ValidateDecoratorFn = (
  validated: Validated,
) => ValidateDecoratorFnReturnType
