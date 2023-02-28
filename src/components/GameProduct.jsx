import { useContext } from 'react'
import { ShoppingCartContext } from '../contexts/ShoppingCartContext'

import Style from './gameproduct.module.css'

const GameProduct = ({product}) => {

  const { shoppingCart, setShoppingCart } = useContext(ShoppingCartContext)

  return (
    <div className={Style.gameproduct}>
      <div className={Style.gameimg}>
        <img src={product.img} alt={product.name} />
      </div>
        <div className={Style.description}>
          <p>{product.name}</p>
          <p>{product.price.toLocaleString('pt-bt', {style: 'currency', currency: 'BRL'})}</p>
        </div>
          <div className={Style.buybutton}>
            {shoppingCart.includes(product) ? (
              <button id={Style.removebutton} onClick={() => setShoppingCart(shoppingCart.filter((p) => p.id !== product.id))}>Remover do Carrinho</button>
            ) : (
              <button onClick={() => setShoppingCart([...shoppingCart, product])}>Adicionar ao Carrinho</button>
            )}
          </div>
    </div>
  )
}
//<
export default GameProduct