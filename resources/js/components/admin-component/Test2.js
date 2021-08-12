import React, {  useState } from 'react';
//import Button from '@material-ui/core/Button';


function Test2() {
    const [fields, setFields] = useState();
function handleChangeInput(i, event) {
    const values = [...fields];
    const { name, value } = event.target;
    values[i][name] = value;
    setFields(values);
    console.log(fields);
  }

function handleAddInput() {
    const values = [...fields];
    values.push({
      firstname: '',
      lastname:'',
      age: '',
      sex: '',
      otherinfo: ''
    });
    setFields(values);
  }

function handleRemoveInput(i) {
    const values = [...fields];
    console.log(values);
    values.splice(i, 1);
    setFields(values);
  }

<form className="form" onSubmit={e=>onSubmit(e)} method="POST">
{

    fields.map((field,idx) =>{

        return(
            <div key={`${field}-${idx}`} className="maindiv">
               <div className="form-group">
                  First Name
                  <input 
                   type="text"
                   name="firstname"
                   value={field.firstname}
                   placeholder="Enter First Name"
                   onChange={e=>handleChangeInput(idx,e)}
                  />
               </div>
               <div className="form-group">
                  First Name
                  <input 
                   type="text"
                   name="lastname"
                   value={field.firstname}
                   placeholder="Enter Last Name"
                   onChange={e=>handleChangeInput(idx,e)}
                  />
               </div>

               <div className="form-group">
                  First Name
                  <input 
                   type="text"
                   name="age"
                   value={field.age}
                   placeholder="Enter Age"
                   onChange={e=>handleChangeInput(idx,e)}
                  />
               </div>

               <div className="form-group">
                  Sex
                  <input 
                   type="text"
                   name="sex"
                   value={field.sex}
                   placeholder="Enter Sex"
                   onChange={e=>handleChangeInput(idx,e)}
                  />
               </div>

               <div className="form-group">
                  Other Info
                  <input 
                   type="text"
                   name="otherinfo"
                   value={field.otherinfo}
                   placeholder="Enter Other Info"
                   onChange={e=>handleChangeInput(idx,e)}
                  />
               </div>

               <Button type="button" onClick={() => handleAddInput()}>
                   
                       <i className="fa fa-plus" />
               </Button>
               <Button type="button" onClick={() => handleRemoveInput()}>
                   
                   <i className="fa fa-times" />
                </Button>
            </div>
        )
    })

}
<input type="submit" className="btn btn-primary"/>
</form>
}
export default Test2;

