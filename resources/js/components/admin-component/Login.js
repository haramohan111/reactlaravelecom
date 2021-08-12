import React,{useState,useEffect} from 'react'
import {Redirect, useHistory} from 'react-router-dom';
import Cookies from 'js-cookie';

function Login() {
   
    const history = useHistory();
    const [input, setInput] = useState({
        email:"",
        password:"",
        redirectToReferrer: false
    });
    // if(localStorage.getItem('authtoken')){
    //   history.push("/admin/dashboard");
    //   } 

  //   useEffect(() =>{

  //     window.history.pushState(null, null, window.location.pathname);
  //     window.addEventListener('popstate', onBackButtonEvent);
      
  //   }, []);
  
  //   const onBackButtonEvent = () => {
  //     window.history.forward()
  // }
     
      // if(Cookies.get('jwt')){
      //   history.push("/admin/dashboard");
      // }

    const {email,password,redirectToReferrer} = input;

    const onInputChange = e =>{

      setInput({...input,[e.target.name]:e.target.value});

    }

    const onSubmit = async e =>{
        e.preventDefault();

        await axios.post('login',input,{
      
            // credentials:'include'
        })
        .then(response => {
          console.log(response.data)
          setInput({redirectToReferrer:true});
          
          if(response.data.status == '200'){
            // sessionStorage.setItem('authToken',response.config.headers["X-XSRF-TOKEN"]);
           //localStorage.setItem('authToken',response.config.headers["X-XSRF-TOKEN"]);
           localStorage.setItem('authtoken',response.data.authtoken);
            //setInput(...input,{redirectToReferrer:true})
           //console.log(response.config.headers["X-XSRF-TOKEN"]);
          //  history.pushState(null, null, "/admin/dashboard");
          //  window.onpopstate = function(event) {
          //    history.go(1);
          //  };
          window.location.href="/admin/dashboard";
         // window.location.reload(history.push("/admin/dashboard"));
          }
          // <Redirect to='/admin/dashboard'/>;
        })
        .catch(error => {
          console.log(error)
        })     
    }



    return (
        <div className="login-page">
            <div className="login-box">
  <div className="login-logo">
    <a href="../../index2.html"><b>Admin</b>LTE</a>
  </div>
  {/* /.login-logo */}
  <div className="card">
    <div className="card-body login-card-body">
      <p className="login-box-msg">Sign in to start your session</p>
      <form  onSubmit={ e => onSubmit(e)}>
        <div className="input-group mb-3">
          <input type="email" className="form-control" placeholder="Email" name="email" value={email} onChange={e=>onInputChange(e)}/>
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-envelope" />
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" className="form-control" placeholder="Password" name="password" value={password} onChange={e=>onInputChange(e)} />
          <div className="input-group-append">
            <div className="input-group-text">
              <span className="fas fa-lock" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="icheck-primary">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">
                Remember Me
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <button type="submit" className="btn btn-primary btn-block">Sign In</button>
          </div>
          {/* /.col */}
        </div>
      </form>



    </div>
    {/* /.login-card-body */}
  </div>
</div>
{/* /.login-box */}

        </div>
    )
}

export default Login
