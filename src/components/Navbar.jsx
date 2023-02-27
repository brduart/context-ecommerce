import { Link } from 'react-router-dom'
import Style from './navbar.module.css'

import { useContext } from 'react'
import { ShoppingCartContext } from '../contexts/ShoppingCartContext'

const Navbar = () => {

  const { shoppingCart } = useContext(ShoppingCartContext)

  return (
    <div className={Style.navbar}>
        <ul className={Style.list}>
            <li>
                <Link className={Style.link} to='/'>Home</Link>
            </li>
            <li>
                <Link className={Style.link} to='/shoppingcart'>{`Carrinho(${shoppingCart.length})`}</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar