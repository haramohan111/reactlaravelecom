import axios from 'axios'
import React,{useState} from 'react'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const AddCategory = () => {

    // const notify = () =>{
    //     toast('category Added')
    // }
   
    const [category, setCategory] = useState({
        category_name:"",
        priority:""
    });

    const {category_name,priority} = category;

    const onInputChange = e =>{
      setCategory({...category,[e.target.name]:e.target.value});
    }

    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post('category',category);
        setCategory({category_name:"",priority:""});
        toast('Category Added');
    }

    return (
<div>


  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Category</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Category</li>
              <li className="breadcrumb-item active">Add Category</li>
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
                <h3 className="card-title">Add Category</h3>
              </div>
              {/* /.card-header */}
              {/* form start */}
              <form onSubmit={ e => onSubmit(e)}>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Category Name </label>
                    <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter category" name="category_name" value={category_name} onChange={e=>onInputChange(e)} />
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


</div>
    )
}

export default AddCategory
