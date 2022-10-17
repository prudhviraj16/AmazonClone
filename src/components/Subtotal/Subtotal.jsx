import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux'
import './subtotal.css'
import { getBasketTotal } from './../../Redux/reducer';
const Subtotal = () => {

    const articles = useSelector((state)=>state.basket)

    const articlessum = articles.reduce((sum,item)=> item.price+sum,0)

  return (
    <div className='subtotal'>
        {<CurrencyFormat renderText={(value)=>(
            <>
                <p> 
                    Subtotal {articles.length} items:  <strong>$ {articlessum}</strong>
                </p>

                <small className='subtotal_gift'>
                    <input type="checkbox" />
                    This order contains a gift
                </small>
            </>
        )}

            decimalScale={2}
            value = {getBasketTotal(articles)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
    }
        <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal

