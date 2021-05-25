/* eslint-disable @typescript-eslint/no-explicit-any */

import { assertIsObject } from '@/asserts'
import { createValidatorDecorator } from '@/decorators'
import { typeError } from '@/errors'

export const isObjectValidator = createValidatorDecorator<
  Record<PropertyKey, any>
>(async (toValidate) => {
  const { value } = toValidate
  if (assertIsObject(value)) return
  return typeError(toValidate, 'object')
})
