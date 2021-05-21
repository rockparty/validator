import type { Validated, ValidateError } from '@/protocols'

export const typeError = (
  validated: Validated,
  type: string,
  message?: string,
): ValidateError => {
  const [firstChar, ...restOfChars] = type
  const typeCapitalized =
    firstChar.toUpperCase() + restOfChars.join('').toLowerCase()
  return {
    name: `${typeCapitalized}TypeError`,
    reason: message ?? `Value must be of ${type.toLowerCase()} type`,
    validated,
  }
}
