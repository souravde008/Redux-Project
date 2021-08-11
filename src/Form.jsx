import React, {useState} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {submitForm, deleteData, loadData} from './action/index';

function Form(){

  const myState = useSelector((state)=> state.formSubmit)
  const dispatch = useDispatch();
	 const [formData,setFormData] = useState({
      fname:'',
      lname:'',
      email: '',
      phone: '',
    });
    const events =(event)=>{
      console.log(event.target.value);
      console.log(event.target.name);
      const value = event.target.value;
      const name = event.target.name;
      setFormData((preValue)=>{
        if(name === 'fname'){
          return{
            fname: value,
            lname: preValue.lname,
            email: preValue.email,
            phone: preValue.phone,
          };
        } else if(name === 'lname'){
          return{
            fname: preValue.fname,
            lname: value,
            email: preValue.email,
            phone: preValue.phone,
          };
        }else if(name === 'email'){
          return{
            fname: preValue.fname,
            lname: preValue.lname,
            email: value,
            phone: preValue.phone,
          };
        }else if(name === 'phone'){
          return{
            fname: preValue.fname,
            lname: preValue.lname,
            email: preValue.email,
            phone: value,
          };
        }
      })
    }
    const onSubmitData = (e) =>{
      e.preventDefault();
      dispatch(submitForm(formData))
    }



    const deleteValue = (e)=>{
      // console.log(e.target.value)
      var val  = e.target.value
      // console.log(val)
      dispatch(deleteData(val))
    }
	return(
		<>
			<div>
				<div className="text-center mt-2">
					<h2> Signup </h2>
				</div>
        <h5 className="text-center">{myState.msg}</h5>
				<div>
					<form onSubmit={(e)=>onSubmitData(e)}>
					    <div className="text-center">
					    <input type="text" placeholder="Enter Your First Name" name="fname" onChange={events} /><br/><br/>
					    <input type="text" placeholder="Enter Your Last Name" name="lname" onChange={events} /><br/><br/>
					    <input type="text" placeholder="Enter Your Email" name="email" onChange={events} /><br/><br/>
					    <input type="number" placeholder="Enter Your Phone" name="phone" onChange={events} /><br/><br/>
					    <button className="mt-2" type="submit"> Click Me </button>
					    </div>
    				</form>
				</div>
         {/*console.log(myState.formValues.length)*/}

         {myState.formValues.length !== 0 ?(
         <table className="table table-striped">
                
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>email</th>
              <th>phone</th>
              <th>Action</th>
            </tr>
            {
              myState.formValues.map((allData, id) => {
                return (
                    

                      <tr key={id}>
                      {
                        Object.values(allData).map((data, i) =>(
                          <td key={i}><span className="input-label">{data}</span></td>
                        ))
                      }
                      <td key={id}><button type="button" class="btn btn-danger" value={allData.email} onClick={(e)=>deleteValue(e)}>Delete</button></td>
                    </tr>
                  )
              })
            }
          </table>
          ):(<p></p>)
        }
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          {/*<button onClick={()=>dispatch(loadData())}>Load Data</button>*/}
        </div>
      </div>
		</>
		);
}

export default Form;