export const submitForm = (values) =>{
	return{
		type: 'SUBMIT',
		payload: values
	}
}

export const deleteData = (value) =>{
	return{
		type: 'DELETE',
		payload: value
	}
}