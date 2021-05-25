/* eslint-disable @typescript-eslint/no-explicit-any */

import { assertIsObject } from '@/asserts'
import { createValidatorDecorator } from '@/decorators'
import { notAObjectError } from '@/errors'
import type { Validator } from '@/protocols'

export const isObjectValidator = <
  T extends Record<string, any> = Record<string, any>,
>(): Validator<T> =>
  createValidatorDecorator<T>(async (toValidate) => {
    const { value } = toValidate
    if (assertIsObject(value)) return
    return notAObjectError(value)
  })
