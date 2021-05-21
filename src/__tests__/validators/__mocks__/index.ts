export type DataTypes =
  | 'boolean'
  | 'string'
  | 'number'
  | 'undefined'
  | 'null'
  | 'function'
  | 'object'
  | 'array'

export interface MockType<T> {
  label: DataTypes
  value: T
}

export const mockDataToValidate: Array<MockType<any>> = [
  { label: 'boolean', value: false },
  { label: 'string', value: 'foo' },
  { label: 'number', value: 0 },
  { label: 'undefined', value: undefined },
  { label: 'null', value: null },
  { label: 'function', value: () => ({ foo: 'bar' }) },
  { label: 'object', value: { foo: 'bar' } },
  { label: 'array', value: ['foo', 'bar'] },
]

export const pickMockDataToValidate = <T = any>(
  type: DataTypes,
  override?: T,
): MockType<T> => {
  const mock = mockDataToValidate.find((d) => d.label === type) as MockType<T>
  return {
    label: mock.label,
    value: override ?? mock.value,
  }
}

export const omitMockDataToValidate = (...types: DataTypes[]) =>
  mockDataToValidate.filter((d) => !types.includes(d.label))

export const mockTypeToValidate = <T = any>(type: DataTypes) => ({
  valid: pickMockDataToValidate<T>(type),
  invalids: omitMockDataToValidate(type),
})
