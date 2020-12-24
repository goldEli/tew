export interface IOrderItem {
  id: number,
  img: string,
  title: string,
  info: string,
  price: string,
  createTime: string,
}

export interface IOrderInfo {
  id?: number,
  isPayed?: number
}