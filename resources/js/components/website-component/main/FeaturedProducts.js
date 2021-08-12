import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
 import '../includes/featured-products.css'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}


function FeaturedProducts() {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }
    return (
        <div>
      <section className="section featured-product wow fadeInUp">
            <h3 className="section-title">Featured products</h3>

            <div >
            <Slider {...settings}>
          
              
                <div className="products" >
                  <div className="product" style={{width:'68%'}}>
                    <div className="product-image">
                      <div className="image"> <a href="detail.html"><img src="frontend/images/products/p6.jpg" alt="" /></a> </div>
                      <div className="tag new"><span>new</span></div>
                    </div>
                    <div className="product-info text-left">
                      <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                      <div className="rating rateit-small" />
                      <div className="description" />
                      <div className="product-price"> <span className="price"> $450.99 </span> <span className="price-before-discount">$ 800</span> </div>
                    </div>
                    <div className="cart clearfix animate-effect">
                      <div className="action">
                        <ul className="list-unstyled">
                          <li className="add-cart-button btn-group">
                            <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                            <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                          </li>
                          <li className="lnk wishlist"> <a className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                          <li className="lnk"> <a className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
         
     
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
            

             
            </div>
          </section>
  
        </div>
    )
}

export default FeaturedProducts
