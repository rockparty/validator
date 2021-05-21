import type { Validated, ValidateError } from './validate-error.protocol'

export type ValidateDecoratorFnReturnType = Promise<
  Pick<ValidateError, 'name' | 'reason'> | undefined
>

export type ValidateDecoratorFn = (
  validated: Validated,
) => ValidateDecoratorFnReturnType
