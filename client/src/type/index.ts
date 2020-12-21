export * from "./house"
export * from "./order"
export * from "./user"
export interface IHttpOptions<T> {
  url: string,
  method?: string,
  headers?: HeadersInit,
  body?: Object,
  initData?: T
}
