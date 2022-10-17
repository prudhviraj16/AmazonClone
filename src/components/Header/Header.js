import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
const Header = () => {

  const articles = useSelector((state)=>state.basket)

  return (
    <div>
      <div className="header">
        <Link to="/">
             <img className="header-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </Link>
        <div className="header_search">
            <input type="text" className='header_searchInput'/>
            <SearchIcon className='header_searchIcon'/>
        </div>

        <div className="header_nav">
          <Link to="/login">
            <div className="header_option">
                <span className="header_optionLineOne">
                    Hello Guest
                </span>
                 
                <span className='header_optionLineTwo'>Sign In</span>
            </div> 
          </Link>
            <div className="header_option">
            <span className="header_optionLineOne">
                    Returns
                </span>
            <span className='header_optionLineTwo'>Orders </span>
            </div>

            <div className="header_option">
              <span className="header_optionLineOne">
                      Your
                  </span>
                <span className='header_optionLineTwo'>Prime</span>
            </div>

          <Link to="/checkout">
            <div className="header_optionBasket">
              <ShoppingBasketIcon />

              <span className="header_optionLineTwo header_basketCount">
                {articles.length}
              </span>
              </div>
          </Link>
        </div>
      </div>


    </div>
  )
}

export default Header
