import React from 'react'
import { Link, useHistory } from "react-router-dom"

function Header(props) {
  const history = useHistory();

  const click = async e => {
    e.preventDefault();

    await axios.get('logout')
      .then(response => {
        console.log(response);
        //setInput({redirectToReferrer:true});

        if (response.data.status == '200') {
          //  sessionStorage.setItem("authToken",'');
          //  sessionStorage.clear();
          // localStorage.removeItem("authToken");
          localStorage.clear();
          window.location.href = "/admin/login";
        }
        //   <Redirect to='/admin/dashboard'/>;
      })
      .catch(error => {
        console.log(error)
      })


  }
  return (
    <div>
   

      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="index3.html" className="nav-link">Home</a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="#" className="nav-link">Contact</a>
          </li>
          <li className="nav-item dropdown">
            <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">Site settings</a>
            <ul aria-labelledby="dropdownSubMenu1" className="dropdown-menu border-0 shadow">
              <li><a href="#" className="dropdown-item">Size </a></li>
              <li><a href="#" className="dropdown-item">Color</a></li>
              <li><a href="#" className="dropdown-item">Brand</a></li>
              <li className="dropdown-divider" />
              {/* Level two dropdown*/}
              <li className="dropdown-submenu dropdown-hover">
                <a id="dropdownSubMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle">Hover for action</a>
                <ul aria-labelledby="dropdownSubMenu2" className="dropdown-menu border-0 shadow">
                  {/* <li>
                    <a tabIndex={-1} href="#" className="dropdown-item">level 2</a>
                  </li> */}
                  {/* Level three dropdown*/}
                  {/* <li className="dropdown-submenu">
                    <a id="dropdownSubMenu3" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle">level 2</a>
                    <ul aria-labelledby="dropdownSubMenu3" className="dropdown-menu border-0 shadow">
                      <li><a href="#" className="dropdown-item">3rd level</a></li>
                      <li><a href="#" className="dropdown-item">3rd level</a></li>
                    </ul>
                  </li> */}
                  {/* End Level three */}
                  <li><a href="#" className="dropdown-item">level 2</a></li>
                  <li><a href="#" className="dropdown-item">level 2</a></li>
                </ul>
              </li>
              {/* End Level two */}
            </ul>
          </li>

          <li className="nav-item d-none d-sm-inline-block">
            <button to="/admin/logout" className="nav-link" onClick={e => click(e)}>Logout</button>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Navbar Search */}
          <li className="nav-item">
            <a className="nav-link" data-widget="navbar-search" href="#" role="button">
              <i className="fas fa-search" />
            </a>
            <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search" />
                    </button>
                    <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>
          {/* Messages Dropdown Menu */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-comments" />
              <span className="badge badge-danger navbar-badge">3</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="#" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  <img src="backend/dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Brad Diesel
                  <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                    </h3>
                    <p className="text-sm">Call me whenever you can...</p>
                    <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  <img src="backend/dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      John Pierce
                  <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                    </h3>
                    <p className="text-sm">I got your message bro</p>
                    <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                {/* Message Start */}
                <div className="media">
                  <img src="backend/dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Nora Silvester
                  <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                    </h3>
                    <p className="text-sm">The subject goes here</p>
                    <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
            </div>
          </li>
          {/* Notifications Dropdown Menu */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-bell" />
              <span className="badge badge-warning navbar-badge">15</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-item dropdown-header">15 Notifications</span>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fas fa-envelope mr-2" /> 4 new messages
            <span className="float-right text-muted text-sm">3 mins</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fas fa-users mr-2" /> 8 friend requests
            <span className="float-right text-muted text-sm">12 hours</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item">
                <i className="fas fa-file mr-2" /> 3 new reports
            <span className="float-right text-muted text-sm">2 days</span>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-widget="fullscreen" href="#" role="button">
              <i className="fas fa-expand-arrows-alt" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
              <i className="fas fa-th-large" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
