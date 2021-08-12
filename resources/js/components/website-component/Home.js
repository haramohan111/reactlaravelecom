import React from 'react'
//import OwlCarousel from 'react-owl-carousel';  
// import 'owl.carousel/dist/assets/owl.carousel.css';  
// import 'owl.carousel/dist/assets/owl.theme.default.css';

import BestSeller from './main/BestSeller'
import BlogSlider from './main/BlogSlider'
import Brands from './main/Brands'
import FeaturedProducts from './main/Featuredproducts'
import Footer from './main/Footer'
import Header from './main/Header'
import HotDeals from './main/HotDeals'
import InfoBoxes from './main/InfoBoxes'
import NewArrivals from './main/NewArrivals'
import NewProducts from './main/NewProducts'
import Newslatter from './main/Newslatter'
import Slider from './main/Slider'
import SpecialDeals from './main/SpecialDeals'
import SpecialOffer from './main/SpecialOffer'




function Home() {
  
    return (
        <div>
          <Header/>
  <div className="body-content outer-top-xs" id="top-banner-and-menu">
    <div className="container">
      <div className="row"> 
        <div className="col-xs-12 col-sm-12 col-md-9 homebanner-holder"> 
          <Slider/>
          <InfoBoxes/>
         <NewProducts/>
          <div className="wide-banners wow fadeInUp outer-bottom-xs">
            <div className="row">
              <div className="col-md-7 col-sm-7">
                <div className="wide-banner cnt-strip">
                  <div className="image"> <img className="img-responsive" src="frontend/images/banners/home-banner1.jpg" alt="" /> </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-5">
                <div className="wide-banner cnt-strip">
                  <div className="image"> <img className="img-responsive" src="frontend/images/banners/home-banner2.jpg" alt="" /> </div>
                </div>
              </div>
            </div>
          </div>
          <FeaturedProducts/>
           
          <div className="wide-banners wow fadeInUp outer-bottom-xs">
            <div className="row">
              <div className="col-md-12">
                <div className="wide-banner cnt-strip">
                  <div className="image"> <img className="img-responsive" src="frontend/images/banners/home-banner.jpg" alt="" /> </div>
                  <div className="strip strip-text">
                    <div className="strip-inner">
                      <h2 className="text-right">New Mens Fashion<br />
                        <span className="shopping-needs">Save up to 40% off</span></h2>
                    </div>
                  </div>
                  <div className="new-label">
                    <div className="text">NEW</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <BestSeller/>
          <BlogSlider/>
          <NewArrivals/>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-3 sidebar"> 
          <HotDeals/>
          <SpecialOffer/>
          
          <div className="sidebar-widget product-tag wow fadeInUp">
            <h3 className="section-title">Product tags</h3>
            <div className="sidebar-widget-body outer-top-xs">
              <div className="tag-list"> <a className="item" title="Phone" href="category.html">Phone</a> <a className="item active" title="Vest" href="category.html">Vest</a> <a className="item" title="Smartphone" href="category.html">Smartphone</a> <a className="item" title="Furniture" href="category.html">Furniture</a> <a className="item" title="T-shirt" href="category.html">T-shirt</a> <a className="item" title="Sweatpants" href="category.html">Sweatpants</a> <a className="item" title="Sneaker" href="category.html">Sneaker</a> <a className="item" title="Toys" href="category.html">Toys</a> <a className="item" title="Rose" href="category.html">Rose</a> </div>
            </div>
          </div>
         
         <SpecialDeals/>
        
          <Newslatter/>
      
          <div className="sidebar-widget  wow fadeInUp outer-top-vs ">
            <div id="advertisement" className="advertisement">
              <div className="item">
                <div className="avatar"><img src="frontend/images/testimonials/member1.png" alt="Image" /></div>
                <div className="testimonials"><em>"</em> Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer.<em>"</em></div>
                <div className="clients_author">John Doe <span>Abc Company</span> </div>
              </div>
              <div className="item">
                <div className="avatar"><img src="frontend/images/testimonials/member3.png" alt="Image" /></div>
                <div className="testimonials"><em>"</em>Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer.<em>"</em></div>
                <div className="clients_author">Stephen Doe <span>Xperia Designs</span> </div>
              </div>
              <div className="item">
                <div className="avatar"><img src="frontend/images/testimonials/member2.png" alt="Image" /></div>
                <div className="testimonials"><em>"</em> Vtae sodales aliq uam morbi non sem lacus port mollis. Nunc condime tum metus eud molest sed consectetuer.<em>"</em></div>
                <div className="clients_author">Saraha Smith <span>Datsun & Co</span> </div>
              </div>
            </div>
          </div>
          <div className="home-banner"> <img src="frontend/images/banners/LHS-banner.jpg" alt="Image" /> </div>
        </div>
      </div>
    
      <Brands/>
      
    </div>
  </div>
  <Footer/>
        </div>
    )
}

export default Home
