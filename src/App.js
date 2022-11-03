import style from './style/App.module.css';
import Cart from './components/cart';
import PopCart from './components/popCart';
import Products from './components/products';
import { Routes, Route } from "react-router-dom";

function App () {
  return (
    <div className={style.app} >
      <span className={style.title}>Vuex - 购物车示例</span>
      <span className={style.pop_cart}><PopCart /></span>
      <Routes>
        <Route exact path="/cart" element={<Cart />}></Route>
        <Route exact path="/" element={<Products />}></Route>
      </Routes>
    </div>
  );
}

export default App;
