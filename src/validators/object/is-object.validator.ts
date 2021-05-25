/* eslint-disable @typescript-eslint/no-explicit-any */

import { assertIsObject } from '@/asserts'
import { createValidatorDecorator } from '@/decorators'
import { notAObjectError } from '@/errors'

export const isObjectValidator = createValidatorDecorator<
  Record<PropertyKey, any>
>(async (toValidate) => {
  const { value } = toValidate
  if (assertIsObject(value)) return
  return notAObjectError(toValidate)
})
