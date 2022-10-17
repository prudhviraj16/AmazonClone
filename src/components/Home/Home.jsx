import React from 'react'
import Product from '../Product/Product'
import './home.css'
const Home = () => {
  return (
    <div className="home">
        <div className="home_container">
          <img className="home_image" src="https://m.media-amazon.com/images/I/716QifRLW+L._SX3000_.jpg" alt="" />

          <div className="home_row">
              <Product id="12321341" title = "The lean startup" price = {29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5}/>

              <Product id="49538094" title="Kenwood KMX750RD/ KMix Stand Mixer 1000W (Red)" price={239} image="https://m.media-amazon.com/images/I/51ddU7z-xXL._SL1000_.jpg" rating={4}/>
          </div>

          <div className="home_row">
              <Product id="4903850" title="Samsung LC49RG90SSUXEN Curved LED Gaming Monitor" image="https://images.samsung.com/is/image/samsung/in-gaming-monitor-c49g95tssw-lc49g95tsswxxl-frontwhite-335279681?$650_519_PNG$" price={199.99} rating = {3}/>
              <Product id="23445930" title="Apple iPad Pro 2020 12.9 inch Wi-Fi Only  512 GB Silver+Apple Pencil (2nd Generation)
" price={456} rating={4} image="https://m.media-amazon.com/images/I/81Re1b7rGDL._SL1500_.jpg"/>
              <Product id="3254354345" title="Buy Amazon Echo Dot 3 (3rd Gen) – improved smart speaker with Alexa Black
              " price={98.99} rating={4} image="https://cdn.shopify.com/s/files/1/0961/0490/products/echo-dot-3rd-gen-smart-speaker-with-alexa-black_bfe8795d-74a9-421c-b740-3d9725970289_1024x1024.jpg?v=1608465583"/>
          </div>

          <div className="home_row">
              <Product id="121234" rating ={5} image="https://m.media-amazon.com/images/I/71W+RrSPINL._SL1500_.jpg" title="Apple Watch Series 7 - Midnight Aluminium Case with Midnight Sport Band 
"/>
          </div>

        </div>
    </div>
  )
}

export default Home
