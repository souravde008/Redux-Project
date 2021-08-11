import axios from 'axios';	
const initialState = {
	formValues:[],
	storageData: [],
	msg:""
}

 export const formSubmit = (state = initialState, action)=>{
	switch (action.type){
		case 'SUBMIT':
		 	console.log("Form Data - ", action.payload);
		    
			return{
				...state,
				formValues: [...state.formValues, action.payload],
				msg:"FORM SUBMITTED."
			}
		case 'DELETE':
			console.log("Delete Data: ", action.payload)
			return { 
				...state, 
				formValues: state.formValues.filter(i => i.email !== action.payload),
				msg:"DATA DELETED"
			}
		default: return state;
	}
}



export const loadData = async (dispatch, getState) => {
  	// const headers  ={ 
   //        'Accept': 'application/json',
   //        'Content-Type': 'application/json',
   //      }
   //      axios.get(`https://jsonplaceholder.typicode.com/users`)
   //    		.then(res => {
			// 	console.log(res.data)
   //    	}).catch(error =>{
   //        	console.log(error);
   //   	})
} 