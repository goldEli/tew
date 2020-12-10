
export interface IHttpOptions {
  url: string,
  method?: string,
  headers?: HeadersInit,
  body?: Object,
}

export interface ICities {
  [index: number]: {
    label: string,
    value: string
  }[]
}