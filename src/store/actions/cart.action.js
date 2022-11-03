export const addProduct = (row) => ({ type: 'addProduct', payload: row })
export const countChange = (row, count) => ({ type: 'countChange', payload: { row, count } })
export const removeProduct = (row) => ({ type: 'removeProduct', payload: row.id })