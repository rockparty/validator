/* eslint-disable @typescript-eslint/no-explicit-any */

import type { Validator } from '@/protocols'
import { createValidator } from '@/factories'

export const anyValidatorDecorator = (
  validator: Validator<any>,
): Validator<any> => createValidator(validator.validate)
