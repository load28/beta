export type NonNullable<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};
