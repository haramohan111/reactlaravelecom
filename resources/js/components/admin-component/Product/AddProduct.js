import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
const AddProduct = () => {

  const [data, setData] = useState([]);
  const [subdata, setsubData] = useState([]);
  const [listsubdata, setlistsubData] = useState([]);


  const [input, setInput] = useState({
    seller_id:"",
    skucode:"",
    category_id: "",
    subcategory_id: "",
    listsubcategory_id: "",
    product_title:"",
    product_image: "",
    priority: "",
    stock:"",
    size:"",
    color:"",
    mrp:"",
    selling_price:"",
    height:"",
    width:"",
    length:"",
    
  });

  const { seller_id,skucode,category_id, subcategory_id, listsubcategory_id, product_title, product_image, priority,stock,size,color,mrp,selling_price,height,width,length } = input;

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const gurl = `categoryview`;
    const result = await axios.get(gurl);
    //console.log(result.data);
    setData(result.data.data);
    //console.log(data);

  };

  const loadsub = async (id) => {
    const gurl = `subcateview/${id}`;
    const result = await axios.get(gurl);
    // console.log(result.data);
    setsubData(result.data);
    //console.log(subdata);

  };

  const loadlistsub = async (id) => {
    const gurl = `listsubcateview/${id}`;
    const result = await axios.get(gurl);
    // console.log(result.data);
    setlistsubData(result.data);
    //console.log(subdata);

  };

  const onInputChange = e => {
    //  alert(e.target.files[0]);
    //console.log(img[0]);
    setInput({ ...input, [e.target.name]: e.target.value });
    //setImageData(e.target.files[0]);
    // console.log(input);
    if (e.target.name == 'category_id') {
      var cat_id = { [e.target.name]: e.target.value };
      loadsub(cat_id.category_id);
    }

    if (e.target.name == 'subcategory_id') {
      var subcat_id = { [e.target.name]: e.target.value };
      loadlistsub(subcat_id.subcategory_id);
    }

    if (e.target.name == 'product_image') {
      var img = e.target.files[0];

      setInput({ ...input, [e.target.name]: img });
    }

  }

  const onSubmit = async e => {
    e.preventDefault();

    const fdata = new FormData();
    fdata.append('seller_id', seller_id);
    fdata.append('skucode', skucode);
    fdata.append('category_id', category_id);
    fdata.append('subcategory_id', subcategory_id);
    fdata.append('listsubcategory_id', listsubcategory_id);
    fdata.append('product_title', product_title);
    fdata.append('product_image', product_image);
    fdata.append('priority', priority);
    fdata.append('stock', stock);
    fdata.append('size', size);
    fdata.append('color', color);
    fdata.append('mrp', mrp);
    fdata.append('selling_price', selling_price);
    fdata.append('height', height);
    fdata.append('width', width);
    fdata.append('length', length);

    console.log(input);
    await axios.post('product', fdata)
      .then(response => {
        //console.log(response.data.results)
        setInput({ category_id: "", subcategory_id: "", listsubcategory_id: "", product_name: "", image: "", priority: "" });
        //loadUsers();
      })
      .catch(error => {
        console.log(error)
      })

    toast('Product Added');
  }

  return (
    <div>
     <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>AddProduct</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item active">Product</li>
                  <li className="breadcrumb-item active">AddProduct</li>
                </ol>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Seller details</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <div className="row">
                  <div className="col-12 col-sm-4">

                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Seller </label>
                      <input type="text" className="form-control" placeholder="Enter product" name="seller_id" value={seller_id} onChange={e => onInputChange(e)} />
                    </div>
                    {/* /.form-group */}
                  </div>
                  {/* /.col */}
                  <div className="col-12 col-sm-4">
                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">SKU Code </label>
                      <input type="text" className="form-control" placeholder="Enter product" name="skucode" value={skucode} onChange={e => onInputChange(e)} />
                    </div>
                    {/* /.form-group */}
                  </div>

                </div>
                {/* /.row */}

              </div>
              {/* /.card-body */}

            </div>


          </div>{/* /.container-fluid */}
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Category details</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Category</label>
                      <select className="form-control select2" style={{ width: '100%' }} name="category_id" value={category_id} onChange={e => onInputChange(e)}>
                        <option>Select Category</option>
                        {
                          (typeof data !== "") ?

                            data.map((user, index) => (

                              <option key={user.id} value={user.id}>{user.category_name}</option>


                            )) :
                            <option>Empty</option>

                        }
                      </select>
                    </div>
                    {/* /.form-group */}

                    {/* /.form-group */}

                  </div>
                  {/* /.col */}
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Subcategory</label>
                      <select className="form-control select2" style={{ width: '100%' }} name="subcategory_id" value={subcategory_id} onChange={e => onInputChange(e)}>
                        <option >Select Subcategory</option>
                        {
                          subdata.length !== 0 ?

                            subdata.map((sub, index) => (

                              <option key={sub.id} value={sub.id}>{sub.subcategory_name}</option>


                            )) :
                            <div>jj</div>

                        }
                      </select>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">List Subcategory</label>
                      <select className="form-control select2" style={{ width: '100%' }} name="listsubcategory_id" value={listsubcategory_id} onChange={e => onInputChange(e)}>
                        <option >Select List Subcategory</option>
                        {
                          listsubdata.length !== 0 ?

                            listsubdata.map((sub, index) => (

                              <option key={sub.id} value={sub.id}>{sub.listsubcategory_name}</option>


                            )) :
                            <div>jj</div>

                        }
                      </select>
                    </div>
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}
              </div>
              {/* /.card-body */}
            </div>
            {/* /.row */}
          </div>{/* /.container-fluid */}
        </section>

        <section className="content">
          <div className="container-fluid">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Product details</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body">



                <div className="row">
                  <div className="col-12 col-sm-4">

                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Product Title </label>
                      <input type="text" className="form-control" placeholder="Enter product" name="product_title" value={product_title} onChange={e => onInputChange(e)} />
                    </div>
                    {/* /.form-group */}
                  </div>
                  {/* /.col */}
                  <div className="col-12 col-sm-4">
                    <div className="form-group">
                      <label htmlFor="exampleInputFile">Product Image</label>
                      <div className="input-group">
                        <div className="custom-file">
                          <input type="file" className="custom-file-input" id="exampleInputFile" name="product_image" onChange={e => onInputChange(e)} />
                          <label className="custom-file-label" htmlFor="exampleInputFile">Choose file</label>
                        </div>

                      </div>
                    </div>
                    {/* /.form-group */}
                  </div>

                  <div className="col-12 col-sm-4">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Priority</label>
                      <input type="text" className="form-control" placeholder="Enter priority" name="priority" value={priority} onChange={e => onInputChange(e)} />
                    </div>
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}

              </div>
              {/* /.card-body */}

            </div>


            {/* /.row */}
          </div>{/* /.container-fluid */}
        </section>
        {/* /.content */}
        <section className="content">
          <div className="container-fluid">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Price & color,size details</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body">



                <div className="row">
                  <div className="col-12 col-sm-4">

                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Stock </label>
                      <input type="text" className="form-control" placeholder="Enter product" name="stock" value={stock} onChange={e => onInputChange(e)} />
                    </div>
                    {/* /.form-group */}
                  </div>
                  {/* /.col */}
                  <div className="col-12 col-sm-4">
                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Size </label>
                      <input type="text" className="form-control" placeholder="Enter product" name="size" value={size} onChange={e => onInputChange(e)} />
                    </div>
                    {/* /.form-group */}
                  </div>

                  <div className="col-12 col-sm-4">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Color</label>
                      <input type="text" className="form-control" placeholder="Enter priority" name="color" value={color} onChange={e => onInputChange(e)} />
                    </div>
                  </div>
                  {/* /.col */}
                </div>

                <div className="row">
                  <div className="col-12 col-sm-2">

                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Mrp </label>
                      <input type="text" className="form-control" placeholder="Enter product" name="mrp" value={mrp} onChange={e => onInputChange(e)} />
                    </div>
                    {/* /.form-group */}
                  </div>
                  {/* /.col */}
                  <div className="col-12 col-sm-2">
                    <div className="form-group">
                      <label htmlFor="exampleInputFile">Selling Price</label>
                      <div className="input-group">
                        <div className="custom-file">
                          <input type="text" className="form-control" placeholder="selling price" id="exampleInputFile" name="selling_price" value={selling_price} onChange={e => onInputChange(e)} />
                          
                        </div>

                      </div>
                    </div>
                    {/* /.form-group */}
                  </div>

                  <div className="col-12 col-sm-2">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Height</label>
                      <input type="text" className="form-control" placeholder="Enter priority" name="height" value={height} onChange={e => onInputChange(e)} />
                    </div>
                  </div>
                  <div className="col-12 col-sm-2">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Width</label>
                      <input type="text" className="form-control" placeholder="Enter priority" name="width" value={width} onChange={e => onInputChange(e)} />
                    </div>
                  </div>
                  <div className="col-12 col-sm-2">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Length</label>
                      <input type="text" className="form-control" placeholder="Enter priority" name="length" value={length} onChange={e => onInputChange(e)} />
                    </div>
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}

              </div>
              {/* /.card-body */}

            </div>


            {/* /.row */}
          </div>{/* /.container-fluid */}
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">Option to add more size and color</h3>
                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus" />
                  </button>
                  <button type="button" className="btn btn-tool" data-card-widget="remove">
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              {/* /.card-header */}
              <div className="card-body">



                <div className="row">
                  <div className="col-12 col-sm-2">

                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">SKU </label>
                      <input type="text" className="form-control" placeholder="Enter product" name="sku[]" value={priority} onChange={e => onInputChange(e)} />
                    </div>
                    {/* /.form-group */}
                  </div>
                  {/* /.col */}
                  <div className="col-12 col-sm-2">
                    <div className="form-group">
                      <label htmlFor="exampleInputFile">Stock</label>
                      <div className="input-group">
                        <div className="custom-file">
                          <input type="text" className="form-control" id="exampleInputFile" name="stock[]" value={stock} onChange={e => onInputChange(e)} />
                
                        </div>

                      </div>
                    </div>
                    {/* /.form-group */}
                  </div>

                  <div className="col-12 col-sm-2">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Mrp</label>
                      <input type="text" className="form-control" placeholder="Enter priority" name="mrp[]" value={priority} onChange={e => onInputChange(e)} />
                    </div>
                  </div>
                  <div className="col-12 col-sm-2">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Selling price</label>
                      <input type="text" className="form-control" placeholder="Enter priority" name="mrp[]" value={priority} onChange={e => onInputChange(e)} />
                    </div>
                  </div>
                  <div className="col-12 col-sm-2">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Size</label>
                      <input type="text" className="form-control" placeholder="Enter priority" name="mrp[]" value={priority} onChange={e => onInputChange(e)} />
                    </div>
                  </div>
                  <div className="col-12 col-sm-2">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Color</label>
                      <input type="text" className="form-control" placeholder="Enter priority" name="mrp[]" value={priority} onChange={e => onInputChange(e)} />
                    </div>
                  </div>
                  {/* /.col */}
                </div>
                {/* /.row */}

              </div>
              {/* /.card-body */}

            </div>

            <div className="row">
          
                  <form onSubmit={e => onSubmit(e)}>

                    {/* /.card-body */}
                    <div className="card-footer">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>          

            </div>
            {/* /.row */}
          </div>{/* /.container-fluid */}
        </section>
      </div>
      {/* /.content-wrapper */}
    

    </div>
  )
}

export default AddProduct
