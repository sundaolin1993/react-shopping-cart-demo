import React from 'react'
import { Popover, Table, Button, Badge } from 'element-react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class PopCart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      columns: [
        { prop: "title", label: "商品" },
        { prop: "price", label: "价格" },
        { prop: "count", label: "数量" },
        { prop: "address", label: "操作", render: () => { return <Button type="text" size="small">加入购物车</Button> } },
      ],
      cartProducts: [
        // { id: 1, title: 'iPad Pro', price: 500.01, isChecked: false, count: 0 },
        // { id: 2, title: 'H&M T-Shirt White', price: 10.99, isChecked: false, count: 0 },
        // { id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, isChecked: false, count: 0 }
      ],
      totalCount: 0,
      totalPrice: 0
    }
  }
  render () {
    return (
      <Popover width="500" trigger="hover" content={(
        <>
          <Table columns={this.state.columns} data={this.state.cartProducts} />
          <div>
            <p>共 {this.state.totalCount} 件商品 共计¥{this.state.totalPrice}</p>
            <NavLink to="cart"><Button size="mini" type="danger" >去购物车</Button></NavLink>
          </div>
        </>
      )}>
        <Badge value={this.state.totalCount}>
          <Button type="primary" >我的购物车</Button>
        </Badge>
      </Popover>
    )
  }
  componentWillReceiveProps (nextProps) {
    const { products, totalCount, totalPrice } = nextProps.cartReducer
    this.setState({
      cartProducts: products,
      totalCount,
      totalPrice
    })
  }
}
export default connect(state => state)(PopCart)