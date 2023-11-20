import React, {useContext} from 'react'
import './Favorites.css'
import ProductFlex from '../../Component/ProductFlex/ProductFlex'
import Title from '../../Component/Title/Title'
import context from '../../ContextSite'
export default function Favorites() {
  let contextFavorites = useContext(context)
  return (
    <div className='favorites'>
      <Title title={'غذاهای مورد علاقه شما'}/>
      <ProductFlex mode='add' info={contextFavorites.productsFav} />
    </div>
  )
}
