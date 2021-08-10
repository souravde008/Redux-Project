const initialState = {
	formValues:[],
	msg:""
}

const formSubmit = (state = initialState, action)=>{
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

export default formSubmit;