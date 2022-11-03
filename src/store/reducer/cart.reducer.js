const initState = {
  products: [],
  totalCount: 0,
  totalPrice: 0
}

const changeProduct = (products, id, count) => {
  const find = products.find(i => i.id === id)
  if (!find) return true
  count ? find.count = count : find.count++
  find.totalPrice = find.count * find.price
}
const compute = products => {
  let totalCount = 0
  let totalPrice = 0
  products.forEach(pro => {
    totalCount += pro.count
    totalPrice += pro.totalPrice
  });
  return {
    totalCount,
    totalPrice
  }
}
const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'addProduct':
      if (changeProduct(state.products, action.payload.id, null)) state.products.push({ ...action.payload, count: 1, totalPrice: action.payload.price })
      break
    case 'countChange':
      changeProduct(state.products, action.payload.row.id, action.payload.count)
      break
    case 'removeProduct':
      state.products.splice(state.products.findIndex(i => i.id === action.payload), 1)
      break
    default:
      return state
  }
  return { products: JSON.parse(JSON.stringify(state.products)), ...compute(state.products) }
}
export default reducer