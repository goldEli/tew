
export interface IHttpOptions {
  url: string,
  method?: string,
  headers?: HeadersInit,
  body?: Object,
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