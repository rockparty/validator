import { assertIsString } from '@/asserts'
import { createValidatorDecorator } from '@/decorators'
import { notAStringError } from '@/errors'

export const isStringValidator = createValidatorDecorator<string>(
  async (toValidate) => {
    const { value } = toValidate
    if (assertIsString(value)) return
    return notAStringError(value)
  },
)
