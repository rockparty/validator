import { assertIsString } from '@/asserts'
import { createValidatorDecorator } from '@/decorators'
import { typeError } from '@/errors'

export const isStringValidator = createValidatorDecorator<string>(
  async (toValidate) => {
    if (assertIsString(toValidate)) return
    return typeError(toValidate, 'string')
  },
)
