/* eslint-disable @typescript-eslint/no-explicit-any */

export interface Validated {
  value: any
  key?: string
  path?: string[]
}

export interface ValidateError {
  name: string
  reason: string
  validated: Validated
}

export type ValidateErrorMap = Map<string[] | undefined, ValidateError[]>
