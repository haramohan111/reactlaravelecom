import React from 'react'
import { Switch, Route, Redirect, useHistory } from "react-router-dom"
import AddCategory from './category/AddCategory';
import ManageCategory from './category/ManageCategory';
import Dashboard from './Dashboard';
import NotFound from './notfound/NotFound';
import ManageSubCategory from './subcategory/ManageSubCategory';
import AddSubCategory from './subcategory/AddSubCategory';
import AddUser from './User/AddUser';
import ManageUser from './User/ManageUser';
import AddListSubcategory from './listsubcategory/AddListSubcategory';
import ManageListSubCategory from './listsubcategory/ManageListSubCategory';
import AddProduct from './Product/AddProduct';
import ManageProduct from './Product/ManageProduct';
import Login from './Login';
import Protected from './Protected';
import AddSlider from './slider/AddSlider';
import ManageSlider from './slider/ManageSlider';
import newProduct from './allslidermenu/newProduct';

function Routes() {
    return (
        <div>

                <Switch>

                    <Route path="/admin/login" exact component={Login} />
                    <Route path="/admin/dashboard"> <Protected exact component={Dashboard} /> </Route>
                    <Route path="/admin/user/adduser"> <Protected exact component={AddUser} /> </Route>
                    <Route path="/admin/user/manageuser" > <Protected exact component={ManageUser} /> </Route>
                    <Route path="/admin/category/addcategory" exact component={AddCategory} />
                    <Route path="/admin/category/managecategory" exact component={ManageCategory} />
                    <Route path="/admin/subcategory/addsubcategory" exact component={AddSubCategory} />
                    <Route path="/admin/subcategory/managesubcategory" exact component={ManageSubCategory} />
                    <Route path="/admin/listsubcategory/addlistsubcategory" exact component={AddListSubcategory} />
                    <Route path="/admin/listsubcategory/managelistsubcategory" exact component={ManageListSubCategory} />
                    <Route path="/admin/product/addproduct" exact component={AddProduct} />
                    <Route path="/admin/product/manageproduct" exact component={ManageProduct} />
                    <Route path="/admin/slider/addslider" exact component={AddSlider} />
                    <Route path="/admin/slider/manageslider" exact component={ManageSlider} />
                    <Route path="/admin/allmenu/managemenu" exact component={newProduct} />
                    <Route component={NotFound} />
                    <Protected />

                </Switch>
           
        </div>
    )
}

export default Routes
