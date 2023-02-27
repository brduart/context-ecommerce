import { useState } from 'react'
import GameProduct from '../components/GameProduct'

import { Products } from '../products/Products'

import Style from './home.module.css'

const Home = () => {

  const [products, setProducts] = useState([...Products])


  return (
    <div className={Style.home}>
      <div className={Style.products}>
        {products && products.map((prod) => (
          <GameProduct product={prod} key={prod.id}/>
        ))}
      </div>
    </div>
  )
}

export default Home