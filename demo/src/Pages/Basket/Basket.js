import React from 'react'
import './Basket.css'
import './Basket-media.css'
import ProductFlex from '../../Component/ProductFlex/ProductFlex'
import ImagesHomeWelcome from '../../DataBase'
export default function Basket() {
  return (
    <div className='basket'>
      <div className="buyDiv">
        <div className="buyBtn">خرید</div>
        <p className="allCost">1400000تومان</p>
      </div>
      <ProductFlex mode='number' info={ImagesHomeWelcome.slice(0,3)} />
    </div>
  )
}
