import {CONVERT_MARKDOWN} from '../actions/index';


export default function(state = {}, action){

  switch(action.type){

    case CONVERT_MARKDOWN:

       const final = {...state, result: action.payload}

      return final;
  }

  return state;
}
