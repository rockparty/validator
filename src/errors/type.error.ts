import { validateErrorFactory } from '@/factories'
import type { ValidateErrorFactoryFn } from '@/protocols'

export const typeError = (type: string): ValidateErrorFactoryFn => {
  const [firstChar, ...restOfChars] = type
  const typeCapitalized =
    firstChar.toUpperCase() + restOfChars.join('').toLowerCase()
  return validateErrorFactory({
    name: `${typeCapitalized}TypeError`,
    reason: `Value must be of ${type.toLowerCase()} type`,
  })
}
