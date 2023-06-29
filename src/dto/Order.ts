import Goods from './Goods'

interface Order {
  id: number
  goods: Array<{
    Goods
    num: number
    amount: number
  }>
  bill: string
  totalAmount: number
}

export default Order