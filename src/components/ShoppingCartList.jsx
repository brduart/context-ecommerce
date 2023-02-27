import Style from './shoppingcartlist.module.css'

import { useContext } from 'react'
import { ShoppingCartContext } from '../contexts/ShoppingCartContext'

const ShoppingCartList = ({product}) => {

  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext)

  return (
    <div id={Style.prod}>
      <div className={Style.prodimg}>
        <img src={product.img} alt={product.name} />
      </div>
        <div className={Style.prodinfo}>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
        <button onClick={() => setShoppingCart(shoppingCart.filter((i) => i.id !== product.id))}>Remover do Carrinho</button>
    </div>
  )
}

export default ShoppingCartList