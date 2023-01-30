export declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}

export declare interface PromiseFn<T = any, R = T> {
  (...arg: T[]): Promise<R>;
}
