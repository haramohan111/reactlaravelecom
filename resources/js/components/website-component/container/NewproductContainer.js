import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../includes/new-products.css'
import {listNewProducts,menuId} from '../redux/products/NewproductActions'


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
function NewproductContainer(props) {
   // alert("2")
    useEffect(() => {
        props.listNewProducts();
        props.menuId();
       // console.log("mmmmm"+props.menuId());
      }, [])
    console.log(props.getData.menuid);
     console.log(props.getData.newProduct);
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
        <div id="product-tabs-slider" className="scroll-tabs outer-top-vs wow fadeInUp">
          <div className="more-info-tab clearfix ">
            <h3 className="new-product-title pull-left">New Products</h3>
            <ul className="nav nav-tabs nav-tab-line pull-right" id="new-products-1">
              <li className="active"><a data-transition-type="backSlide" href="#all" data-toggle="tab">All</a></li>
              <li><a data-transition-type="backSlide" href="#smartphone" data-toggle="tab">Clothing</a></li>
              <li><a data-transition-type="backSlide" href="#laptop" data-toggle="tab">Electronics</a></li>
              <li><a data-transition-type="backSlide" href="#apple" data-toggle="tab" id="arrow">Shoes</a></li>
            </ul>
          </div>
          <div className="tab-content outer-top-xs">
            <div className="tab-pane in active" id="all">
            
            <div className="product-slider">
            <Slider {...settings}>
        <div>
        <div className="product-slider">
        <div className="custom-carousel">
        <div className="item item-carousel">
          <div className="products" style={{width:'68%'}}>
            <div className="product">
              <div className="product-image">
                <div className="image"> <a href="detail.html"><img src="frontend/images/products/p1.jpg" alt="" /></a> </div>
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
                      <button data-toggle="tooltip" className="btn btn-primary icon" type="button" title="Add Cart"> <i className="fa fa-shopping-cart" /> </button>
                      <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                    </li>
                    <li className="lnk wishlist"> <a data-toggle="tooltip" className="add-to-cart" href="detail.html" title="Wishlist"> <i className="icon fa fa-heart" /> </a> </li>
                    <li className="lnk"> <a data-toggle="tooltip" className="add-to-cart" href="detail.html" title="Compare"> <i className="fa fa-signal" aria-hidden="true" /> </a> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
            </div>
            <div className="tab-pane" id="smartphone">

              <div className="product-slider">
                <div className="owl-carousel home-owl-carousel custom-carousel owl-theme">
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img src="frontend/images/products/p5.jpg" alt="" /></a> </div>
                          <div className="tag sale"><span>sale</span></div>
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
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="laptop">
              <div className="product-slider">
                <div className="owl-carousel home-owl-carousel custom-carousel owl-theme">
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img src="frontend/images/products/p16.jpg" alt="" /></a> </div>
                          <div className="tag sale"><span>sale</span></div>
                        </div>
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Apple Iphone 5s 32GB</a></h3>
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
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="apple">
              <div className="product-slider">
                <div className="owl-carousel home-owl-carousel custom-carousel owl-theme">
                  <div className="item item-carousel">
                    <div className="products">
                      <div className="product">
                        <div className="product-image">
                          <div className="image"> <a href="detail.html"><img src="frontend/images/products/p14.jpg" alt="" /></a> </div>
                          <div className="tag hot"><span>hot</span></div>
                        </div>
                        <div className="product-info text-left">
                          <h3 className="name"><a href="detail.html">Samsung Galaxy S4</a></h3>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = state =>{
    return {
        getData:state.newproducts       
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        listNewProducts:()=>dispatch(listNewProducts()),
        menuId:()=>dispatch(menuId())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewproductContainer)
