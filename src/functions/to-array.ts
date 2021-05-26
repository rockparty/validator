/* eslint-disable @typescript-eslint/no-explicit-any */

export const toArray = <T>(obj: T): T extends any[] ? T : T[] =>
  (Array.isArray(obj) ? obj : [obj]) as T extends any[] ? T : T[]
