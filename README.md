# Validator

## Promised data validate for javascript/typescript

### Requirements

Node.js

### Install

You can install '@rockparty/validator' by entering this command

```
npm install @rockparty/validator
```

### Example

```ts
import {
  createArrayValidator,
  isStringValidator,
  stringHasMinLength,
  isNumberValidator,
} from '@rockparty/validator'

const fooValidator = createArrayValidator(
  isStringValidator,
  stringHasMinLength(3),
).validate('foo') // undefined

await isNumberValidator.validate('foo') // error
```

create custom validators

```ts
import {
  createValidatorDecorator,
  Validated,
  ValidateError,
} from '@rockparty/validator'

// create
const myCustomValidator = createValidatorDecorator<T>(
  // T = type to validate (e.g. number)
  async (toValidate: Validated) => {
    // Validated = { value: any; key?: string; path?: string[] }

    // if toValidate.value is valid
    return undefined

    // else returns ValidateError
    const error: ValidateError = {
      name: 'ErrorName',
      reason: 'Why this error happened',
      validated: toValidate,
    }
    return error
  },

  // usage
  await myCustomValidator.validate('foo'), // undefined or ValidateErrorMap
)
```

## License

Licensed under [MIT](./LICENSE).
