import {
  createArrayValidator,
  anyValidatorDecorator,
  isStringValidator,
  stringHasMinLength,
} from '@rockparty/validator'
import type {
  Validator,
  ValidateErrorMap,
} from '@rockparty/validator/src/protocols'

export interface SchemaField<T> {
  validator?: Validator<T>
}

export type Schema = Record<string, SchemaField<any>>

export type ExtractType<T extends Schema> = {
  [P in keyof T]: T[P] extends SchemaField<infer U> ? U : never
}

export const schemaField = <ST>(
  schema: SchemaField<ST> = {},
): SchemaField<ST> => ({
  ...schema,
})

export const createSchema = <T extends Schema>(schema: T) => ({
  schema,
  validate: async (x: ExtractType<T>, opts: { once?: boolean } = {}) => {
    const { once } = opts

    let path: string[] | undefined = undefined
    let errors: ValidateErrorMap | undefined = undefined

    for (const k in schema) {
      const { validator } = schema[k]
      errors = await validator?.validate(
        x[k],
        once,
        k,
        [...(path ?? []), k],
        errors,
      )
      if (errors && once) return errors
    }

    return errors
  },
})

const fooSchema = createSchema({
  foo: schemaField<string>({
    validator: createArrayValidator(isStringValidator, stringHasMinLength(4)),
  }),
  bar: schemaField<unknown>({
    validator: anyValidatorDecorator(isStringValidator),
  }),
})

type FooSchema = typeof fooSchema['schema']

type Foo = ExtractType<FooSchema>

const foo: Foo = {
  foo: true as unknown as string,
  bar: 123,
}

fooSchema.validate(foo, { once: true }).then((result) => {
  console.dir(result, { depth: null })
})
