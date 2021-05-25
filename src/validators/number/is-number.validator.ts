import { assertIsNumber } from '@/asserts'
import { createValidatorDecorator } from '@/decorators'
import { notANumberError } from '@/errors'

export const isNumberValidator = createValidatorDecorator<number>(
  async (toValidate) => {
    if (assertIsNumber(toValidate)) return
    return notANumberError(toValidate)
  },
)
