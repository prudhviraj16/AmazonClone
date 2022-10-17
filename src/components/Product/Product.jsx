import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { fetchItemsAdd } from '../../Redux/action';

import './Product.css'

const Product = ({id,title,image,price,rating}) => {
  const dispatch = useDispatch()
  const articles = useSelector((state)=>state.basket)
  const addToBasket = () => {
    dispatch(fetchItemsAdd({id,title,image,price,rating}))
  }

  console.log(articles)

  return (
    <div className='product' key={id}>

        <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>

            <div className="product_rating">
              
              {Array(rating).fill().map((_,i)=>(
                <p>⭐</p>
              ))}
            </div>

        </div>

        <img src={image} alt="" />

        <button onClick={addToBasket}>Add to basket</button>
    </div>
  )
}

export default Product
