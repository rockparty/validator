import { createValidatorDecorator } from '@/decorators'
import { typeError } from '@/errors'

export const isNumberValidator = createValidatorDecorator<number>(
  async (toValidate) => {
    if (typeof toValidate.value === 'number') return
    return typeError(toValidate, 'number')
  },
)
