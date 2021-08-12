import React,{ useRef }  from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide } from "react-slideshow-image";
import { sliderImages } from '../includes/hotdeals-images';
import {Link} from "react-router-dom"
import '../includes/hotdeals.css';

function HotDeals() {
  const slideRef = useRef();

  const back = () => {
    slideRef.current.goBack();
  }

  const next = () => {
    slideRef.current.goNext();
  }

  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: <div style={{width: "30px", marginRight: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
    nextArrow: <div style={{width: "30px", marginLeft: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
  };

    return (
        <div>
          <div className="sidebar-widget hot-deals wow fadeInUp outer-bottom-xs">
            <div >
            <h3 className="section-title" style={{display : 'inline-block'}} >hot deals</h3>
            <button type="button" onClick={back}>Back</button>
            <button type="button" onClick={next}>Next</button>
            </div>
                    <div className="image">         
        <Slide easing="ease slider" autoplay={false}  ref={slideRef} {...properties}>
        {sliderImages.map(({ img, category,brands, info, btnInfo }) => (
          <div key={category} className="each-slide">
            <div
              className="slider-image bg-img width-full"
              style={{ backgroundImage: `url(${img})` ,height:"30vh"}}
            >
              <div className="slider-text">
              <div className="outer-top-ss">
              <div className="item">
              <div className="products">
                  <div className="hot-deal-wrapper">
              <div className="sale-offer-tag"><span>49%<br />
                        off</span></div>
              </div>
              </div> 
              </div> 
              </div>        
                {/* <div className="heading bold-text">{category}</div>
                <div className="large-text"> {brands} </div>
                <div className="big-text">{info}</div>
                <br />
                <button className="primary-btn curved-edge-btn">
                  <Link className="link-btn small-text" to="/products-listing">
                    {btnInfo}
                  </Link>
                </button> */}
              </div>
         
              <div className="outer-top-ss">
              <div className="item">
                <div className="products">
                  <div className="hot-deal-wrapper" style={{paddingLeft: "176px",bottom: "39px"}}>
 
                    <div className="timing-wrapper">
                      <div className="box-wrapper">
                        <div className="date box"> <span className="key">120</span> <span className="value">DAYS</span> </div>
                      </div>
                      <div className="box-wrapper">
                        <div className="hour box"> <span className="key">20</span> <span className="value">HRS</span> </div>
                      </div>
                      <div className="box-wrapper">
                        <div className="minutes box"> <span className="key">36</span> <span className="value">MINS</span> </div>
                      </div>
                      <div className="box-wrapper hidden-md">
                        <div className="seconds box"> <span className="key">60</span> <span className="value">SEC</span> </div>
                      </div>
                    </div>
                  </div>
                  <div className="product-info text-left m-t-20">
                    <h3 className="name"><a href="detail.html">Floral Print Buttoned</a></h3>
                    <div className="rating rateit-small" />
                    <div className="product-price"> <span className="price"> $600.00 </span> <span className="price-before-discount">$800.00</span> </div>
                  </div>
                  <div className="cart clearfix animate-effect">
                    <div className="action">
                      <div className="add-cart-button btn-group">
                        <button className="btn btn-primary icon" data-toggle="dropdown" type="button"> <i className="fa fa-shopping-cart" /> </button>
                        <button className="btn btn-primary cart-btn" type="button">Add to cart</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </div>
             
            </div>
          </div>
        ))}
      </Slide> 
      </div>

          </div>
        </div>
    )
}

export default HotDeals
