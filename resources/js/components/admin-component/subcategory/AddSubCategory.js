import axios from 'axios'
import React,{useEffect,useState} from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const AddSubCategory = () => {

  const [data, setData] = useState([]);

   
    const [input, setInput] = useState({
        category_id:"",
        subcategory_name:"",
        priority:""
    });

    const {category_id,subcategory_name, priority} = input;

    useEffect(() =>{
      loadUsers();
    }, []);

    const loadUsers = async () => {
      const gurl = `categoryview`;
      const result = await axios.get(gurl);
      //console.log(result.data);
      setData(result.data.data);

    };

    const onInputChange = e =>{
      setInput({...input,[e.target.name]:e.target.value});
    }

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post('subcategory',input)
        .then(response => {
          console.log(response.data.results)
          setInput({category_id:"",subcategory_name:"", priority:""});
          //loadUsers();
        })
        .catch(error => {
          console.log(error)
        })
        
        toast('Subcategory Added');
    }

    return (
<div>
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Subcategory</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Subcategory</li>
              <li className="breadcrumb-item active">AddSubCategory</li>
            </ol>
          </div>
        </div>
      </div>{/* /.container-fluid */}
    </section>
    {/* Main content */}
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          {/* left column */}
          <div className="col-md-6">
            {/* general form elements */}
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">AddSubCategory</h3>
              </div>
              {/* /.card-header */}
              {/* form start */}
              <form onSubmit={ e => onSubmit(e)}>
                <div className="card-body">
                  <div className="form-group">
                    <label>Category</label>
                    <select className="form-control select2" style={{width: '100%'}} name="category_id" value={category_id} onChange={e=>onInputChange(e)}>
                      <option selected="selected">Select category</option>
                      {
                      (typeof data !== "")?
                      
                      data.map((user,index)=>(
                          
                      <option key={user.id} value={user.id}>{user.category_name}</option>
                        
                        
                      )):
                      <option>Empty</option>

                      }
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Subcategory Name </label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter subcategory" name="subcategory_name" value={subcategory_name} onChange={e=>onInputChange(e)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Priority</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter priority" name="priority" value={priority} onChange={e=>onInputChange(e)} />
                  </div>


                </div>
                {/* /.card-body */}
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>



          </div>

        </div>
        {/* /.row */}
      </div>{/* /.container-fluid */}
    </section>
    {/* /.content */}
  </div>
  {/* /.content-wrapper */}
 

</div>
    )
}

export default AddSubCategory
