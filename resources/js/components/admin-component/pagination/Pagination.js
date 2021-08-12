import React,{useState,useEffect} from 'react'

function Pagination({showPerPage,onPaginationChange,total}) {

    const[counter,setCounter]=useState(10);
    const[numOfButtons,setNumOfButtons] = useState(2);
    //console.log(Math.ceil(total/showPerPage));
    //console.log(numOfButtons);

    useEffect(()=>{
      const value=showPerPage*counter;
      onPaginationChange(value-showPerPage,value);
    },[counter]);

    const onButtonClick = (type)=>{
        if(type==="prev"){
            if(counter===1){
                setCounter(1);
            }else{
                setCounter(counter-1);
            }

        }else if(type==="next"){
            if( numOfButtons === counter){
                setCounter(counter);
            }else{
                setCounter(counter+1);
            }
            
        }
    }
    return (
        <div>
            
            <div className="card-footer clearfix">
                <ul className="pagination pagination-sm m-0 float-right">
                  <li className="page-item"><button className="page-link" onClick={()=>onButtonClick('prev')}>Previous</button></li>

                  {
                      new Array(numOfButtons).fill("").map((el,index)=>(
                        <li className={`page-item ${index+1 === counter ? "active":null}`}  ><button className="page-link">{index+1}</button></li>
                      ))
                  }
                  <li className="page-item"><button className="page-link" onClick={()=>onButtonClick('next')}>Next</button></li>
                </ul>
              </div>
        </div>
    )
}

export default Pagination
