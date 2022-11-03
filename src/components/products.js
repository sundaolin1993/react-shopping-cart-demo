import React from 'react'
import { Breadcrumb, Table, Button } from 'element-react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cartAction from '../store/actions/cart.action'

class Products extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      columns: [
        { prop: "title", label: "商品" },
        { prop: "price", label: "价格" },
        {
          prop: "address", label: "操作", render: (row) => {
            return <Button onClick={this.handleAddCart.bind(this, row)} type="text" size="small">加入购物车</Button>
          }
        },
      ],
      products: [
        { id: 1, title: 'iPad Pro', price: 500.01 },
        { id: 2, title: 'H&M T-Shirt White', price: 10.99 },
        { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99 }
      ]
    }
  }
  handleAddCart = (row) => {
    this.props.addProduct(row)
  }
  render () {
    return (
      <div>
        <Breadcrumb separator="/" style={{ padding: '20px 0' }}>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item>商品列表</Breadcrumb.Item>
        </Breadcrumb>
        <Table style={{ width: '100%' }} columns={this.state.columns} data={this.state.products} maxHeight={200} />
      </div >
    )
  }
}
export default connect(state => state, dispatch => bindActionCreators(cartAction, dispatch))(Products)