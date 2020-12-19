export * from "./house"
export * from "./order"
export interface IHttpOptions<T> {
  url: string,
  method?: string,
  headers?: HeadersInit,
  body?: Object,
  initData?: T
}

export type ICities = {
  label: string,
  value: string
}[][]

export type IHouses = {
  id: number,
  img: string,
  title: string,
  info: string,
  price: number
}[]