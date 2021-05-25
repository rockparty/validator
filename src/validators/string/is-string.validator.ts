import { assertIsString } from '@/asserts'
import { createValidatorDecorator } from '@/decorators'
import { notAStringError } from '@/errors'

export const isStringValidator = createValidatorDecorator<string>(
  async (toValidate) => {
    if (assertIsString(toValidate)) return
    return notAStringError(toValidate)
  },
)
