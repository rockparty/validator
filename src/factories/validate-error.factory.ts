import type {
  Validated,
  ValidateError,
  ValidateErrorWithoutValidated,
} from '@/protocols'

export const validateErrorFactory =
  (partialError: ValidateErrorWithoutValidated) =>
  (validated: Validated, customReason?: string): ValidateError => ({
    name: partialError.name,
    reason: customReason ?? partialError.reason,
    validated,
  })
