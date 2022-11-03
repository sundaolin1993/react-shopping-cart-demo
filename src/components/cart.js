import React from 'react'
import { Breadcrumb, Table, Button, InputNumber } from 'element-react'
import '../style/cart.module.css'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as cartAction from '../store/actions/cart.action';

class Cart extends React.Component {
  constructor (props) {
    console.log(props)
    super(props)
    this.state = {
      columns: [
        { type: "selection" },
        { prop: "title", label: "商品", width: 200 },
        { prop: "price", label: "单价" },
        { prop: "count", label: "数量", render: (row) => { return <InputNumber onChange={this.handleCountChange.bind(this, row)} defaultValue={row.count} size="small" min="1" max="10"></InputNumber> } },
        { prop: "totalPrice", label: "小计" },
        { prop: "address", label: "操作", render: (row) => { return <Button onClick={this.handleRemoveProduct.bind(this, row)} type="text" size="small">删除</Button> } },
      ],
      products: props.cartReducer.products
    }
  }
  handleCountChange = (row, count) => {
    this.props.countChange(row, count)
  }
  handleRemoveProduct = row => {
    this.props.removeProduct(row)
  }
  render () {
    return (
      <div>
        <Breadcrumb separator="/" style={{ padding: '20px 0' }}>
          <Breadcrumb.Item><NavLink to="/">首页</NavLink></Breadcrumb.Item>
          <Breadcrumb.Item>购物车</Breadcrumb.Item>
        </Breadcrumb>
        <Table border={true} style={{ width: '100%' }} columns={this.state.columns} data={this.state.products} maxHeight={200} />
        <div>
          <p>已选 <span>xxx</span> 件商品，总价：<span>xxx</span></p>
          <Button type="danger">结算</Button>
        </div>
      </div >
    )
  }
  componentWillReceiveProps (nextProps) {
    const { products } = nextProps.cartReducer
    this.setState({
      products
    })
  }
}
const mapStateToProps = state => state
const mapDispathToProps = dispatch => bindActionCreators(cartAction, dispatch)
export default connect(mapStateToProps, mapDispathToProps)(Cart)