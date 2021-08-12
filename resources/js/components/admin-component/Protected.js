import React,{useLayoutEffect,useState,useEffect} from 'react';
import Cookies from 'js-cookie';
import {useHistory} from "react-router-dom";

function Protected(props) {
  const history = useHistory();

  //   if(!localStorage.getItem('authToken')){
  //     history.push("/admin");
     
  // } 
  useEffect(() => {
load();
  }, []);

    // if(Cookies.get('jwt')){
    //   history.push("/admin/dashboard");
    // }else{
    //     history.push("/admin");  
    // }
    const[protect ,setProtect] = useState(1); 

    // if(protect==true){
    //   history.push("/admin/dashboard");
    // }else{
    //     history.push("/admin");  
    // }
  let Cmp = props.component;

  const load = async () => {       
    await axios.get('checkauth')
    .then(response => {
     console.log(response);
       if(response.data.status == '200'){

            setProtect(0);
           // alert("7");
         //history.push("/admin/dashboard");
      }else if(response.data.status=='400'){
        history.push("/admin/login");
        
      }else {

        history.push("/admin/login");
      }

    })
    .catch(error => {
      if (error.response.status === 401) {
      //  alert("5");
        history.push("/admin/login");
       }
    })
  }

// async function getInfo() {
//   let token = "Bearer "+ Cookies.get('jwt');
//   const res = await window.fetch("checkauth", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: token
//     },
//   });

//   console.log(res.status);
//   if(res.status==200){
//    // alert("j")
//     setProtect(true)
//   }else if(res.status==401){
//     setProtect(false)
//   }
// }

    return (
       protect=='0' ?
        <div>         
            <Cmp/>                  
        </div>
        :
        <div>
        </div>

    )
    
  

}

export default Protected
