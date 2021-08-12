import React,{useEffect,useState,useLayoutEffect} from 'react'
import ReactDOM from 'react-dom';

import Header from './admin-component/Header'
import Footer from './admin-component/Footer'
import Sidebar from './admin-component/Sidebar'
import {  useHistory } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
// import '../../css/admin-componentend/plugins/fontawesome-free/css/all.min.css';
// import '../../css/admin-componentend/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css';
// import '../../css/admin-componentend/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
// import '../../css/admin-componentend/plugins/jqvmap/jqvmap.min.css';
import '../../css/backend/dist/css/adminlte.min.css';
// import '../../css/admin-componentend/plugins/overlayScrollbars/css/OverlayScrollbars.min.css';
// import '../../css/admin-componentend/plugins/daterangepicker/daterangepicker.css';
// import '../../css/admin-componentend/plugins/summernote/summernote-bs4.min.css';
// import '../../css/admin-componentend/plugins/bootstrap/js/bootstrap.bundle.min.js';

// import '../../css/admin-componentend/plugins/chart.js/Chart.min.js';

// import '../../css/admin-componentend/plugins/sparklines/sparkline.js';
// import '../../css/admin-componentend/plugins/jqvmap/jquery.vmap.min.js';
// import '../../css/admin-componentend/plugins/jqvmap/maps/jquery.vmap.usa.js';
// import '../../css/admin-componentend/plugins/jquery-knob/jquery.knob.min.js';

// import '../../css/admin-componentend/plugins/moment/moment.min.js';
// import '../../css/admin-componentend/plugins/daterangepicker/daterangepicker.js';
// import '../../css/admin-componentend/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js';

// import '../../css/admin-componentend/plugins/summernote/summernote-bs4.min.js';
// import '../../css/admin-componentend/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js';
// import '../../css/admin-componentend/dist/js/adminlte.js';
// import '../../css/admin-componentend/dist/js/demo.js';
// import '../../css/admin-componentend/dist/js/pages/dashboard.js';
// import '../../css/admin-componentend/dist/js/adminlte.min.js';
import Cookies from 'js-cookie'
import axios from 'axios';
import Routes from './admin-component/Routes';
import Test from './admin-component/Test2';



function AdminApp() {
  const history = useHistory();
    var baseurl = window.location.protocol +"//"+ window.location.host;

    axios.defaults.baseURL = baseurl +'/api/admin/';
    axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.getItem('authtoken');
 
    // if(!localStorage.getItem('authtoken')){
    //     replace({
    //         pathname: '/admin'
    //       })
    //}
    // if(localStorage.getItem('authtoken')){
    //   history.push("/admin/dashboard");
    //   } 
 
    // console.log(Cookies.get('jwt'))
    // if(!Cookies.get('jwt')){
    //     localStorage.clear();
    //     <Redirect to="/admin" />;
    // }

    useLayoutEffect(() => {

        var url = window.location;
// for sidebar menu but not for treeview submenu
$('ul.sidebar-menu a').filter(function() {
    return this.href == url;
}).parent().siblings().removeClass('active').end().addClass('active');
// for treeview which is like a submenu
$('ul.treeview-menu a').filter(function() {
    return this.href == url;
}).parentsUntil(".sidebar-menu > .treeview-menu").siblings().removeClass('active menu-open').end().addClass('active menu-open');

        }, []);
        // const pathArray = window.location.pathname.split("/");
        // const segment_1 = pathArray[2];
 
        // const[seg ,setSeg] = useState(segment_1);
        // alert(seg)
        // if(seg==null){
        //     setSeg(1)
        // } else{
        //     setSeg(0)
        // }
        var pathArray = window.location.pathname.split('/');
        var seg1 = pathArray[2];
        
        const [seg, setSeg] = useState(seg1);
 //alert(seg);
    return (

        <Router basename="">
            <div className="wrapper">    
            {          
            seg!=='login' ? <div><Header/><Sidebar /></div>:null
            }     
                
                <Routes/>
            {          
            seg!=='login' ? <Footer/>:null
            } 
            </div>
            </Router>
    )

}

export default AdminApp;

if (document.getElementById('admin')) {
    ReactDOM.render(<AdminApp />, document.getElementById('admin'));
}
