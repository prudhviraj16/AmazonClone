import React from 'react'
import Subtotal from '../Subtotal/Subtotal'
import './checkout.css'
import { useSelector } from 'react-redux';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';

const Checkout = () => {
    
    const articles = useSelector((state)=>state.basket)


  return (
    <div className='checkout'>
        <div className="checkout_left">
            <img className='checkout_ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />

            <div>
                <h2 className="checkout_title">
                    Your Shopping Basket
                </h2>

                {articles.map(item=>(
                    <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating ={item.rating}/>
                ))}

            </div>

        </div>

        <div className="checkout_right">
            <Subtotal/>
            <h2>The subtotal will go here</h2>
        </div>

        
    </div>
  )
}

export default Checkout