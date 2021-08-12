import React,{useEffect} from 'react'



function AddUser() {


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
              <li className="breadcrumb-item active">Add user</li>
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
                <h3 className="card-title">Add User</h3>
              </div>
              {/* /.card-header */}
              {/* form start */}
              <form>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Phone</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
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

export default AddUser
