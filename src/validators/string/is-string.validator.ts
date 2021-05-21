import { createValidatorDecorator } from '@/decorators'
import { typeError } from '@/errors'

export const isStringValidator = createValidatorDecorator<string>(
  async (toValidate) => {
    if (typeof toValidate.value === 'string') return
    return typeError(toValidate, 'string')
  },
)
