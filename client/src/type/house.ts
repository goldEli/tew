export type HouseCommentList = {
  id?: string,
  avatar?: string,
  username?: string,
  createTime?: number,
  info?: string,
}[]

export interface IHouseDetail {
  title?: string;
  msg?: string;
  price?: number;
  publishTime?: number;
  startTime?: number;
  endTime?: number
}