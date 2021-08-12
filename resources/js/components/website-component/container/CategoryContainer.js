import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchCategory } from '../redux'
import {Link} from "react-router-dom"

function CategoryContainer({ userData, fetchCategory }) {
    useEffect(() => {
        fetchCategory()
      }, [])
      //console.log(userData.category.menu_result);
      return  (
        <div>
          <header className="header-style-1">
          {/* ============================================== TOP MENU ============================================== */}
          <div className="top-bar animate-dropdown">
            <div className="container">
              <div className="header-top-inner">
                <div className="cnt-account">
                  <ul className="list-unstyled">
                    <li><a href="#"><i className="icon fa fa-user" />My Account</a></li>
                    <li><a href="#"><i className="icon fa fa-heart" />Wishlist</a></li>
                    <li><a href="#"><i className="icon fa fa-shopping-cart" />My Cart</a></li>
                    <li><a href="#"><i className="icon fa fa-check" />Checkout</a></li>
                    <li><Link to="/login"><i className="icon fa fa-lock" />Login</Link></li>
                  </ul>
                </div>
                {/* /.cnt-account */}
                <div className="cnt-block">
                  <ul className="list-unstyled list-inline">
                    <li className="dropdown dropdown-small"> <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"><span className="value">USD </span><b className="caret" /></a>
                      <ul className="dropdown-menu">
                        <li><a href="#">USD</a></li>
                        <li><a href="#">INR</a></li>
                        <li><a href="#">GBP</a></li>
                      </ul>
                    </li>
                    <li className="dropdown dropdown-small"> <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown"><span className="value">English </span><b className="caret" /></a>
                      <ul className="dropdown-menu">
                        <li><a href="#">English</a></li>
                        <li><a href="#">French</a></li>
                        <li><a href="#">German</a></li>
                      </ul>
                    </li>
                  </ul>
                  {/* /.list-unstyled */}
                </div>
                {/* /.cnt-cart */}
                <div className="clearfix" />
              </div>
              {/* /.header-top-inner */}
            </div>
            {/* /.container */}
          </div>
          {/* /.header-top */}
          {/* ============================================== TOP MENU : END ============================================== */}
          <div className="main-header">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-3 logo-holder">
                  {/* ============================================================= LOGO ============================================================= */}
                  <div className="logo"> <a href="home.html"> <img src="frontend/images/logo.png" alt="logo" /> </a> </div>
                  {/* /.logo */}
                  {/* ============================================================= LOGO : END ============================================================= */} </div>
                {/* /.logo-holder */}
                <div className="col-xs-12 col-sm-12 col-md-7 top-search-holder">
                  {/* /.contact-row */}
                  {/* ============================================================= SEARCH AREA ============================================================= */}
                  <div className="search-area">
                    <form>
                      <div className="control-group">
                        <ul className="categories-filter animate-dropdown">
                          <li className="dropdown"> <a className="dropdown-toggle" data-toggle="dropdown" href="category.html">Categories <b className="caret" /></a>
                            <ul className="dropdown-menu" role="menu">
                              <li className="menu-header">Computer</li>
                              <li role="presentation"><a role="menuitem" tabIndex={-1} href="category.html">- Clothing</a></li>
                              <li role="presentation"><a role="menuitem" tabIndex={-1} href="category.html">- Electronics</a></li>
                              <li role="presentation"><a role="menuitem" tabIndex={-1} href="category.html">- Shoes</a></li>
                              <li role="presentation"><a role="menuitem" tabIndex={-1} href="category.html">- Watches</a></li>
                            </ul>
                          </li>
                        </ul>
                        <input className="search-field" placeholder="Search here..." />
                        <a className="search-button" href="#" /> </div>
                    </form>
                  </div>
                  {/* /.search-area */}
                  {/* ============================================================= SEARCH AREA : END ============================================================= */} </div>
                {/* /.top-search-holder */}
                <div className="col-xs-12 col-sm-12 col-md-2 animate-dropdown top-cart-row">
                  {/* ============================================================= SHOPPING CART DROPDOWN ============================================================= */}
                  <div className="dropdown dropdown-cart"> <a href="#" className="dropdown-toggle lnk-cart" data-toggle="dropdown">
                    <div className="items-cart-inner">
                      <div className="basket"> <i className="glyphicon glyphicon-shopping-cart" /> </div>
                      <div className="basket-item-count"><span className="count">2</span></div>
                      <div className="total-price-basket"> <span className="lbl">cart -</span> <span className="total-price"> <span className="sign">$</span><span className="value">600.00</span> </span> </div>
                    </div>
                  </a>
                    <ul className="dropdown-menu">
                      <li>
                        <div className="cart-item product-summary">
                          <div className="row">
                            <div className="col-xs-4">
                              <div className="image"> <a href="detail.html"><img src="frontend/images/cart.jpg" alt="" /></a> </div>
                            </div>
                            <div className="col-xs-7">
                              <h3 className="name"><a href="index.php?page-detail">Simple Product</a></h3>
                              <div className="price">$600.00</div>
                            </div>
                            <div className="col-xs-1 action"> <a href="#"><i className="fa fa-trash" /></a> </div>
                          </div>
                        </div>
                        {/* /.cart-item */}
                        <div className="clearfix" />
                        <hr />
                        <div className="clearfix cart-total">
                          <div className="pull-right"> <span className="text">Sub Total :</span><span className="price">$600.00</span> </div>
                          <div className="clearfix" />
                          <a href="checkout.html" className="btn btn-upper btn-primary btn-block m-t-20">Checkout</a> </div>
                        {/* /.cart-total*/}
                      </li>
                    </ul>
                    {/* /.dropdown-menu*/}
                  </div>
                  {/* /.dropdown-cart */}
                  {/* ============================================================= SHOPPING CART DROPDOWN : END============================================================= */} </div>
                {/* /.top-cart-row */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container */}
          </div>
          {/* /.main-header */}
          {/* ============================================== NAVBAR ============================================== */}
          <div className="header-nav animate-dropdown">
            <div className="container">
              <div className="yamm navbar navbar-default" role="navigation">
                <div className="navbar-header">
                  <button data-target="#mc-horizontal-menu-collapse" data-toggle="collapse" className="navbar-toggle collapsed" type="button">
                    <span className="sr-only">Toggle navigation</span> <span className="icon-bar" /> <span className="icon-bar" /> <span className="icon-bar" /> </button>
                </div>
                <div className="nav-bg-class">
                  <div className="navbar-collapse collapse" id="mc-horizontal-menu-collapse">
                    <div className="nav-outer">
                      <ul className="nav navbar-nav">
                        <li className="active dropdown yamm-fw"> <a href="home.html" data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">Home</a> </li>

                        {Array.isArray(userData.category) && 
                           userData.category.map((menu,index) => 
                        <li className="dropdown mega-menu" key={menu.id+"#a"}>
                          <a href="category.html" data-hover="dropdown" className="dropdown-toggle" data-toggle="dropdown">{menu.category_name} </a>
                          <ul className="dropdown-menu container">
                            <li>
                              <div className="yamm-content">
                                <div className="row">
                                { Array.isArray(menu.submenu_list) && menu.submenu_list.map((submenu,index) => 
                                  <div className="col-xs-12 col-sm-12 col-md-2 col-menu" key={submenu.id+"#b"}>                               
                                    <h2 className="title">{submenu.subcategory_name.toUpperCase() }</h2>
                                    <ul className="links">
                                   
                                    { Array.isArray(submenu.listsubmenu_list) && submenu.listsubmenu_list.map((alist,index) =>
                                     
                                     <li key={index}>{alist[0].listsubcategory_name.toUpperCase()}</li>
                                    )}
                                      

                                    </ul>
                                  </div>
                                )}
                                  <div className="col-xs-12 col-sm-12 col-md-4 col-menu custom-banner"> <a href="#"><img alt="" src="frontend/images/banners/banner-side.png" /></a> </div>
                                </div>
                                {/* /.row */}
                              </div>
                              {/* /.yamm-content */} </li>
                          </ul>
                        </li>
    )}
                        <li className="dropdown"> <a href="#" className="dropdown-toggle" data-hover="dropdown" data-toggle="dropdown">Pages</a>
                          <ul className="dropdown-menu pages">
                            <li>
                              <div className="yamm-content">
                                <div className="row">
                                  <div className="col-xs-12 col-menu">
                                    <ul className="links">
                                      <li><a href="home.html">Home</a></li>
                                      <li><a href="category.html">Category</a></li>
                                      <li><a href="detail.html">Detail</a></li>
                                      <li><a href="shopping-cart.html">Shopping Cart Summary</a></li>
                                      <li><a href="checkout.html">Checkout</a></li>
                                      <li><a href="blog.html">Blog</a></li>
                                      <li><a href="blog-details.html">Blog Detail</a></li>
                                      <li><a href="contact.html">Contact</a></li>
                                      <li><a href="sign-in.html">Sign In</a></li>
                                      <li><a href="my-wishlist.html">Wishlist</a></li>
                                      <li><a href="terms-conditions.html">Terms and Condition</a></li>
                                      <li><a href="track-orders.html">Track Orders</a></li>
                                      <li><a href="product-comparison.html">Product-Comparison</a></li>
                                      <li><a href="faq.html">FAQ</a></li>
                                      <li><a href="404.html">404</a></li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      {/* /.navbar-nav */}
                      <div className="clearfix" />
                    </div>
                    {/* /.nav-outer */}
                  </div>
                  {/* /.navbar-collapse */}
                </div>
                {/* /.nav-bg-class */}
              </div>
              {/* /.navbar-default */}
            </div>
            {/* /.container-class */}
          </div>
          {/* /.header-nav */}
          {/* ============================================== NAVBAR : END ============================================== */}
        </header>
        {/* ============================================== HEADER : END ============================================== */}
        </div>
      )
}

const mapStateToProps = state => {
    return {
      userData: state.category
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      fetchCategory: () => dispatch(fetchCategory())
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CategoryContainer)
