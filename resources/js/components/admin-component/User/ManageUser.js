import React, { useEffect,useState } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Pagination from 'react-js-pagination';
import Sidebar from '../Sidebar';
import axios from 'axios';
import ClipLoader from "react-spinners/ClipLoader";



function ManageUser() {
    
  const [users, setUser] = useState([]);
  const [pages,setPage] = useState([]);
  const [usearch,setUsearch] = useState([]);
  let [loading, setLoading] = useState(false);




  useEffect(() =>{
    loadUsers();
    setLoading(true);
  }, []);

console.log(pages.check);

  const loadUsers = async (pagenumber,sear) => {
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
    const gurl = `user?page=${pagenumber}&search=${sear}`;
    const result = await axios.get(gurl,{
      
        credentials:'include'
    });
    console.log(result.data);
    //console.log(result.data.from);

    setUser(result.data.data);
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
          <h1>User</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">User</li>
            <li className="breadcrumb-item active">Manage User</li>
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
              <h3 className="card-title">Manage User</h3>
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
                    <th>User</th>
                    <th>Email</th>
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
                    users.map((user,index)=>(
                      
                      <tr key={user.id}>

                      <td>{pages.check+index}</td>
                      
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      
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

export default ManageUser
