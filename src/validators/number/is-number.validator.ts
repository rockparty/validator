import { assertIsNumber } from '@/asserts'
import { createValidatorDecorator } from '@/decorators'
import { typeError } from '@/errors'

export const isNumberValidator = createValidatorDecorator<number>(
  async (toValidate) => {
    if (assertIsNumber(toValidate)) return
    return typeError(toValidate, 'number')
  },
)
