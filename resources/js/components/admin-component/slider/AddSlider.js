import axios from 'axios'
import React, { useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Sidebar from '../Sidebar'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const AddSlider = () => {

   
    const [input, setInput] = useState({
        slider_name:"",
        image:"",
        priority:""
    });

    const {slider_name,image, priority} = input;

    const onInputChange = e =>{

      setInput({...input,[e.target.name]:e.target.value});
      if(e.target.name =='image'){
        var img= e.target.files[0];
        setInput({...input,[e.target.name]:img});
      }

    }

    const onSubmit = async e =>{
        e.preventDefault();

         const fdata = new FormData();
         fdata.append('slider_name',slider_name);
         fdata.append('image',image);
         fdata.append('priority',priority);
        //console.log(input);
        await axios.post('addslider',fdata)
        .then(response => {
          //console.log(response.data.results)
          if(response.status == '200'){
          setInput({slider_name:"",image:"", priority:""});
          toast('Slider Added');
          }else{
          toast('Slider not added');
          }
        })
        .catch(error => {
          console.log(error)
        })
        
       
    }

  return (
    <div>

      <div className="content-wrapper">
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
                  <li className="breadcrumb-item active">Add Slider</li>
                </ol>
              </div>
            </div>
          </div>
    </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Add Slider</h3>
                  </div>
                  <form onSubmit={e => onSubmit(e)}>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Slider Name </label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter slider" name="slider_name" value={slider_name} onChange={e => onInputChange(e)} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Add Image</label>
                        <input type="file" className="form-control" id="exampleInputEmail2"  name="image" onChange={e => onInputChange(e)} />
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Priority</label>
                        <input type="text" className="form-control" id="exampleInputEmail3" placeholder="Enter priority" name="priority" value={priority} onChange={e => onInputChange(e)} />
                      </div>
                    </div>
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
    </section>
      </div>
    </div>
  )
}

export default AddSlider
