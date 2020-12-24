
export interface IOrderInfo {
  id?: number,
  isPayed?: number
  createTime?: string,
  house?: {
    imgs: {url: string} [],
    name: string,
    info: string,
    price: string,
  }
}