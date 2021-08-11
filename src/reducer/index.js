import {formSubmit, loadData} from './formSubmit';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
	formSubmit,
	loadData
});


export default rootReducer;