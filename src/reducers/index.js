import { combineReducers } from 'redux';
import ConvertMarkdown from './convert_reducer';

const rootReducer = combineReducers({
  convert: ConvertMarkdown
});

export default rootReducer;
