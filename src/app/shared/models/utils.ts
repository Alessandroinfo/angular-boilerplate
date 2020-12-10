// THOSE INTERFACE ARE USED FOR A INTERFACE CONDITION
// IF THERE ARE INTERFACE B AND C THAT EXTEND A
// AND B, ARE TO USE ONE OR ANOTHER ( PROPERTY OF ONE OR EXCLUDING THE PROPERTY OF C)
// USING TYPE A = StrictUnion(B | C)

type UnionKeys<T> = T extends any ? keyof T : never;
type StrictUnionHelper<T, TAll> = T extends any
  ? T & Partial<Record<Exclude<UnionKeys<TAll>, keyof T>, never>>
  : never;
type StrictUnion<T> = StrictUnionHelper<T, T>;
