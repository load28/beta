export type NonNullableType<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};
