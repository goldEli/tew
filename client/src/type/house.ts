export type HouseCommentList = {
  id?: string,
  user?: {avatar: string},
  username?: string,
  createTime?: number,
  msg?: string,
}[]

export interface IHouseDetail {
  title?: string;
  msg?: string;
  price?: number;
  publishTime?: number;
  startTime?: number;
  endTime?: number
}
export type ICities = {
  label: string,
  value: string
}[][]

export type IHouses = {
  id: number,
  imgs: {url: string}[],
  name: string,
  info: string,
  price: number
}[]