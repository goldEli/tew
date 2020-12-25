
export interface IOrderInfo {
  id?: number,
  isPayed?: number
  createTime?: number,
  house?: {
    imgs: {url: string} [],
    name: string,
    info: string,
    price: string,
  }
}