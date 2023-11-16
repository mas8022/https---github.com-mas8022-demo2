import React from 'react'
import './Favorites.css'
import ProductFlex from '../../Component/ProductFlex/ProductFlex'
import ImagesHomeWelcome from '../../DataBase'
import Title from '../../Component/Title/Title'

export default function Favorites() {
  return (
    <div className='favorites'>
      <Title title={'غذاهای مورد علاقه شما'}/>
      <ProductFlex mode='add' info={ImagesHomeWelcome.slice(0,6)} />
    </div>
  )
}
