import React, { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { withRouter } from "react-router";


function Sidebar() {
    useEffect(() => {
        $('[data-widget="treeview"]').Treeview('init');
    }, []);
    return (
        <div>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <Link to="index3.html" className="brand-link">
                    <img src="/backend/dist/img//AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </Link>
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="/backend/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>
                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item has-treeview menu-open">
                                <a href="#" className="nav-link active">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        Dashboard
              <i className="right fas fa-angle-left" />
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <a href="./index.html" className="nav-link active">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Dashboard v1</p>
                                        </a>
                                    </li>

                                </ul>
                            </li>

                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">      
                                        User
                                </a>
                                <ul className="nav nav-treeview">

                                    <li className="nav-item">
                                        <Link to="/admin/user/adduser" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Add User</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/admin/user/manageuser" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Manage User</p>
                                        </Link>
                                    </li>

                                </ul>
                            </li>

                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">      
                                        Category
                                </a>
                                <ul className="nav nav-treeview">

                                    <li className="nav-item">
                                        <Link to="/admin/category/addcategory" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Add Category</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/admin/category/managecategory" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Manage Category</p>
                                        </Link>
                                    </li>

                                </ul>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">      
                                        Subcategory
                                </a>
                                <ul className="nav nav-treeview">

                                    <li className="nav-item">
                                        <Link to="/admin/subcategory/addsubcategory" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Add Subcategory</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/admin/subcategory/managesubcategory" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Manage Subcategory</p>
                                        </Link>
                                    </li>

                                </ul>
                            </li>

                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">      
                                        List Subcategory
                                </a>
                                <ul className="nav nav-treeview">

                                    <li className="nav-item">
                                        <Link to="/admin/listsubcategory/addlistsubcategory" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Add List Subcategory</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/admin/listsubcategory/managelistsubcategory" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Manage List Subcategory</p>
                                        </Link>
                                    </li>

                                </ul>
                            </li>
                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">      
                                        Product
                                </a>
                                <ul className="nav nav-treeview">

                                    <li className="nav-item">
                                        <Link to="/admin/product/addproduct" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Add Product</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/admin/product/manageproduct" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Manage Product</p>
                                        </Link>
                                    </li>

                                </ul>
                            </li>

                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">      
                                        Slider
                                </a>
                                <ul className="nav nav-treeview">

                                    <li className="nav-item">
                                        <Link to="/admin/slider/addslider" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Add Slider</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/admin/slider/manageslider" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Manage Slider</p>
                                        </Link>
                                    </li>

                                </ul>
                            </li>

                            <li className="nav-item has-treeview">
                                <a href="#" className="nav-link">      
                                        All Menu
                                </a>
                                <ul className="nav nav-treeview">

                                    <li className="nav-item">
                                        <Link to="/admin/allmenu/managemenu" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>New Product Menu</p>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/admin/slider/manageslider" className="nav-link">
                                            <i className="far fa-circle nav-icon" />
                                            <p>Manage Slider</p>
                                        </Link>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>

        </div>
    )
}

export default Sidebar
