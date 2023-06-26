import Goods from './Goods'

interface Order {
  id: number
  goods: Array<{
    // id: number
    // name: string
    // price: number
    // unit: string
    Goods
    num: number
    amount: number
  }>
  bill: string
  totalAmount: number
}

export default Order