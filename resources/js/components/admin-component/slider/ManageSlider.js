import React, { useEffect,useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Pagination from 'react-js-pagination';
import Sidebar from '../Sidebar';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";

function ManageSlider() {
    const [data, setData] = useState([]);
    const [pages,setPage] = useState([]);
    const [usearch,setUsearch] = useState([]);
    let [loading, setLoading] = useState(false);
  
  
  
  
    useEffect(() =>{
      loaddata();
      setLoading(true);
    }, []);
  
  
  
    const loaddata = async (pagenumber,sear) => {
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
      const gurl = `sliderview?page=${pagenumber}&search=${sear}`;
      const result = await axios.get(gurl);
      console.log(result.data);
      //console.log(search);
  
      setData(result.data.data);
      setPage({current_page:result.data.current_page,per_page:result.data.per_page,total:result.data.total,check:result.data.from});
      setLoading(false);
    };
  
  
      return (
          <div>
 
              <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Slider</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Slider</li>
              <li className="breadcrumb-item active">Manage Slider</li>
            </ol>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
  
        {/* /.row */}
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Manage Slider</h3>
                <div className="card-tools">
                  <div className="input-group input-group-sm" style={{width: '150px'}}>
                    <input type="text" name="table_search" className="form-control float-right" placeholder="Search" onChange={(e)=>loadUsers(1,e.target.value)} />
                    <div className="input-group-append">
                      <button type="submit" className="btn btn-default">
                        <i className="fas fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body table-responsive p-0">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Image</th>
                      <th>Priority</th>
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
                      data.map((getdetails,index)=>(
                        
                        <tr key={getdetails.id}>
  
                        <td>{pages.check+index}</td>
                        
                        <td>{getdetails.name.toUpperCase()}</td>
                        <td><img height={50} width={50} src={window.user.baseURL+"api/admin/slider/"+getdetails.image}/></td>
                        <td>{getdetails.priority}</td>
                        
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
                   <Pagination
                  activePage={pages.current_page}
                  totalItemsCount={pages.total}
                  itemsCountPerPage={pages.per_page}
                  onChange={(pagenumber)=>loadUsers(pagenumber,usearch)}
                  itemClass="page-link"
                  linkClass="page-link"
                  firstPageText="First"
                  lastPageText="Last"
                  onClick={() => setLoading(true)}
                 />  
  
              {/* /.card-body */}
            </div>
            {/* /.card */}
          </div>
        </div>
  
  
  
      </div>{/* /.container-fluid */}
    </section>
    {/* /.content */}
  </div>
  
          </div>
      )
}

export default ManageSlider
