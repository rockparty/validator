import { assertIsNumber } from '@/asserts'
import { createValidatorDecorator } from '@/decorators'
import { notANumberError } from '@/errors'

export const isNumberValidator = createValidatorDecorator<number>(
  async (toValidate) => {
    const { value } = toValidate
    if (assertIsNumber(value)) return
    return notANumberError(value)
  },
)
