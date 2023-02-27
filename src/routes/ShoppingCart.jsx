import { useContext, useEffect, useState } from "react"
import { ShoppingCartContext } from "../contexts/ShoppingCartContext"

import ShoppingCartList from "../components/ShoppingCartList"

import Style from './shoppingcart.module.css'

const ShoppingCart = () => {

  const { shoppingCart } = useContext(ShoppingCartContext)
  const [total, setTotal] = useState()

  useEffect(() => {
    setTotal(shoppingCart.reduce((acc, i) => i.price + acc, 0))

  }, [shoppingCart])

  return (
    <div className={Style.shoppingcart}>
      <div className={Style.productslist}>
        {shoppingCart.length > 0 ? (shoppingCart.map((product) => (
          <ShoppingCartList product={product} key={product.id}/>
        ))) : (
          <h1>CARRINHO VAZIO</h1>
        )}
      </div>
      <div className={Style.totalprice}>
        <h1>TOTAL</h1>
        <p>{`R$ ${total}`}</p>
      </div>
    </div>
  )
}

export default ShoppingCart