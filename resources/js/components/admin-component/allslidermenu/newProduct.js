import React,{useState,useEffect,useRef} from 'react'
import { NavLink, Link } from 'react-router-dom';
import Pagination from 'react-js-pagination';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
function newProduct() {

    const [data, setData] = useState([]);
    const [pages,setPage] = useState([]);
    const [usearch,setUsearch] = useState([]);
    let [loading, setLoading] = useState(false);
    
    useEffect(() =>{
      loadData();
      setLoading(true);
    }, []);

    const [radio, setRadio] = useState("");
    const [check,setCheck] = useState();

    const onInputChange = e =>{
      setRadio(e.currentTarget.value);
      //console.log(e.currentTarget.value);
      console.log(radio);
      
      const gen = {menu_id:e.currentTarget.value};
    //   axios.post('addnewproductmenu',gen).then (response =>{
    //     toast('Menu Added');
    //   }).then(error=>{

    //   });
    }
   
    
    const loadData = async (pagenumber,sear) => {
      if (typeof pagenumber == "undefined") {
        pagenumber=1;
      }
      
      setUsearch(sear);
      if (typeof sear == "undefined") {
        sear="";
      }else{
        sear=sear;
      }
      setLoading(true);
      const gurl = `categoryview?page=${pagenumber}&search=${sear}`;
      const result = await axios.get(gurl);
      const menu_result = await axios.get("menuid");
      setCheck(menu_result.data);
      setData(result.data.data);
      setPage({current_page:result.data.current_page,per_page:result.data.per_page,total:result.data.total,check:result.data.from});
      setLoading(false);
    };
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>General Form</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">New Product</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section>
            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-6">
                            <div className="card card-secondary">
                                <div className="card-header">
                                    <h3 className="card-title">Custom Elements</h3>
                                </div>
                                {/* /.card-header */}
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                {/* checkbox */}
                                                <div className="form-group">
                                                {
                                                    loading ? 
                                                    <div>
                                                    <ClipLoader  loading={loading} style={{paddingLeft:800}}  size={60} />
                                                    </div>: 
                                                                      pages.check !== null ?
                                                                      data.map((user,index)=>(
                                                    <div className="custom-control" key={user.id}>
                                                        <input className="" type="checkbox"  value={user.id} onChange={e=>onInputChange(e)} />
                                                        <label htmlFor={user.id} className="custom-control-label">{user.category_name.toUpperCase()}</label>
                                                    </div>
                                                                          ))
                                                                          : 
                                                    <div>no result</div>
                                                }
                                                </div>
                                            </div>

                                        </div>
                                        </form>
                                        <div className="card">

                                            <div className="card-body">
                                                <table className="table table-bordered">
                                                    <thead>
                                                        <tr>
                                                            <th style={{ width: '10px' }}>#</th>
                                                            <th>Task</th>
                                                            <th>Progress</th>
                                                            <th style={{ width: '40px' }}>Label</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                      loading ?  
                      <tr>
                      <td><ClipLoader  loading={loading} style={{paddingLeft:800}}  size={60} />
                      </td>
                      </tr>
                       :
                      pages.check !== null ?
                      data.map((user,index)=>(
                        
                        <tr key={user.id}>
  
                        <td>{pages.check+index}</td>
                        
                        <td>{user.category_name.toUpperCase()}</td>
                        <td>{user.priority}</td>
                        
                        </tr>
                        
                      ))
                      : 
                      <tr>
                        <td>No result</td>
                      </tr>
                      
                    } 
    
                                                    </tbody>
                                                </table>
                                            </div>
                                            {/* /.card-body */}
                                            <div className="card-footer clearfix">
                                                <ul className="pagination pagination-sm m-0 float-right">
                                                    <li className="page-item"><a className="page-link" href="#">«</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">»</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                    
                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                        </div>
                        {/*/.col (right) */}
                    </div>
                    {/* /.row */}
                </div>{/* /.container-fluid */}
            </section>
            {/* /.content */}
        </div>

    )
}

export default newProduct
