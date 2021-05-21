/* eslint-disable @typescript-eslint/no-explicit-any */

import { createValidatorDecorator } from '@/decorators'
import { typeError } from '@/errors'

export const isObjectValidator = createValidatorDecorator<
  Record<PropertyKey, any>
>(async (toValidate) => {
  const { value } = toValidate
  if (
    typeof value !== 'function' &&
    !Array.isArray(value) &&
    value === Object(value)
  )
    return
  return typeError(toValidate, 'object')
})
