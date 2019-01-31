import { combineReducers } from 'redux';
import groupusers from './groupuserReducer';

export default combineReducers({
    groupusers: groupusers
});