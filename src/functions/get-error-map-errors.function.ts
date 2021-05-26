import type { ValidateError, ValidateErrorMap } from '@/protocols'

export const getValidateErrorMapErrors = (
  map: ValidateErrorMap,
  path?: string,
): ValidateError[] => map.get(path) ?? []
