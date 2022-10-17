import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchItemsRemove } from '../../Redux/action';
import './checkoutproduct.css'
const CheckoutProduct = ({id,image,title,price,rating}) => {
    const dispatch = useDispatch()
    const removeFromBasket = () => {
        dispatch(fetchItemsRemove(id))
    }

    
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image' src={image} alt="" />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                    {title}
                </p>
                <p className='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct_rating">
                    {Array(rating).fill().map(()=>(
                        <p>⭐</p>
                    ))}
                </div>

                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    );
};

export default CheckoutProduct;