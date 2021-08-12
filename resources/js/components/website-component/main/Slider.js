import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Fade } from "react-slideshow-image";
import { sliderImages } from '../includes/slider-images';
import {Link} from "react-router-dom"
import '../styles.css';

function Slider() {
    return (
        <div>
        <div>
        <Fade easing="ease slider">
        {sliderImages.map(({ img, category,brands, info, btnInfo }) => (
          <div key={category} className="each-slide">
            <div
              className="slider-image bg-img width-full"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="slider-text">
                <div className="heading bold-text">{category}</div>
                <div className="large-text"> {brands} </div>
                <div className="big-text">{info}</div>
                <br />
                <button className="primary-btn curved-edge-btn">
                  <Link className="link-btn small-text" to="/products-listing">
                    {btnInfo}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Fade>

            {/* <div id="owl-main" className="owl-carousel owl-inner-nav owl-ui-sm">
              <div className="item" style={{backgroundImage: 'url(frontend/images/sliders/01.jpg)'}}>
                <div className="container-fluid">
                  <div className="caption bg-color vertical-center text-left">
                    <div className="slider-header fadeInDown-1">Top Brands</div>
                    <div className="big-text fadeInDown-1"> New Collections </div>
                    <div className="excerpt fadeInDown-2 hidden-xs"> <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span> </div>
                    <div className="button-holder fadeInDown-3"> <a href="index.php?page=single-product" className="btn-lg btn btn-uppercase btn-primary shop-now-button">Shop Now</a> </div>
                  </div>
                </div>
              </div>
              <div className="item" style={{backgroundImage: 'url(frontend/images/sliders/02.jpg)'}}>
                <div className="container-fluid">
                  <div className="caption bg-color vertical-center text-left">
                    <div className="slider-header fadeInDown-1">Spring 2016</div>
                    <div className="big-text fadeInDown-1"> Women <span className="highlight">Fashion</span> </div>
                    <div className="excerpt fadeInDown-2 hidden-xs"> <span>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</span> </div>
                    <div className="button-holder fadeInDown-3"> <a href="index.php?page=single-product" className="btn-lg btn btn-uppercase btn-primary shop-now-button">Shop Now</a> </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
    )
}

export default Slider
