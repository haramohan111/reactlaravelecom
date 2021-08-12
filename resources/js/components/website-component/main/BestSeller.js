import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
//import '../includes/new-products.css'

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

function BestSeller() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };



  return (
  //   <div>
  //   <h2>Multiple Rows</h2>
  //   <Slider {...settings}>
  //     <div>
  //       <h3>1</h3>
  //     </div>
  //     <div>
  //       <h3>2</h3>
  //     </div>
  //     <div>
  //       <h3>3</h3>
  //     </div>
  //     <div>
  //       <h3>4</h3>
  //     </div>
  //     <div>
  //       <h3>5</h3>
  //     </div>
  //     <div>
  //       <h3>6</h3>
  //     </div>
  //     <div>
  //       <h3>7</h3>
  //     </div>
  //     <div>
  //       <h3>8</h3>
  //     </div>
  //     <div>
  //       <h3>9</h3>
  //     </div>
  //     <div>
  //       <h3>10</h3>
  //     </div>
  //     <div>
  //       <h3>11</h3>
  //     </div>
  //     <div>
  //       <h3>12</h3>
  //     </div>
  //     <div>
  //       <h3>13</h3>
  //     </div>
  //     <div>
  //       <h3>14</h3>
  //     </div>
  //     <div>
  //       <h3>15</h3>
  //     </div>
  //     <div>
  //       <h3>16</h3>
  //     </div>
  //   </Slider>
  // </div>
    // <div>
    //   <div className="best-deal wow fadeInUp outer-bottom-xs">
    //     <h3 className="section-title">Best seller</h3>
        



    //       <div className="sidebar-widget-body outer-top-xs">
    //         <div className="">
    //           <div className="item">
    //             <div className="products best-product">
    //             <Slider {...settings}>
    //               <div className="product">
    //                 <div className="product-micro">
    //                   <div className="row product-micro-row">
    //                     <div className="col col-xs-5">
    //                       <div className="product-image">
    //                         <div className="image"> <a href="#"> <img src="frontend/images/products/p20.jpg" alt="" /> </a> </div>
    //                       </div>
    //                     </div>
    //                     <div className="col2 col-xs-7">
    //                       <div className="product-info">
    //                         <h3 className="name"><a href="#">Floral Print Buttoned</a></h3>
    //                         <div className="rating rateit-small" />
    //                         <div className="product-price"> <span className="price"> $450.99 </span> </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //               </Slider>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
        

    //   </div>

    // </div>
    <div className="best-deal wow fadeInUp outer-bottom-xs">
            <h3 className="section-title">Best seller</h3>
            <div className="sidebar-widget-body outer-top-xs">
              <div className="owl-carousel best-seller custom-carousel owl-theme outer-top-xs">
                <div className="item">
                  <div className="products best-product">
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="frontend/images/products/p20.jpg" alt="" /> </a> </div>
                            </div>
                          </div>
                          <div className="col2 col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Buttoned</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="frontend/images/products/p21.jpg" alt="" /> </a> </div>
                            </div>
                          </div>
                          <div className="col2 col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Buttoned</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="products best-product">
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="frontend/images/products/p22.jpg" alt="" /> </a> </div>
                            </div>
                          </div>
                          <div className="col2 col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Buttoned</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="frontend/images/products/p23.jpg" alt="" /> </a> </div>
                            </div>
                          </div>
                          <div className="col2 col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Buttoned</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="products best-product">
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="frontend/images/products/p24.jpg" alt="" /> </a> </div>
                            </div>
                          </div>
                          <div className="col2 col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Buttoned</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="frontend/images/products/p25.jpg" alt="" /> </a> </div>
                            </div>
                          </div>
                          <div className="col2 col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Buttoned</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="products best-product">
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="frontend/images/products/p26.jpg" alt="" /> </a> </div>
                            </div>
                          </div>
                          <div className="col2 col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Buttoned</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="product">
                      <div className="product-micro">
                        <div className="row product-micro-row">
                          <div className="col col-xs-5">
                            <div className="product-image">
                              <div className="image"> <a href="#"> <img src="frontend/images/products/p27.jpg" alt="" /> </a> </div>
                            </div>
                          </div>
                          <div className="col2 col-xs-7">
                            <div className="product-info">
                              <h3 className="name"><a href="#">Floral Print Buttoned</a></h3>
                              <div className="rating rateit-small" />
                              <div className="product-price"> <span className="price"> $450.99 </span> </div>
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

export default BestSeller
