import React, { Component } from 'react';
import { connect } from 'react-redux';
import { convertMarkdown } from '../actions';


class TextArea extends Component{

  handleOnChange(e){

    this.props.convertMarkdown(e.target.value)

  }

  render(){
    return(

      <div className='col-md-6'>
          <textarea style={{padding: '20px'}} placeholder='Enter you markdown here' rows="20" cols="60" onKeyUp={ (e)=> this.handleOnChange(e)  } />
      </div>
    )
  }
}


export default connect(null, { convertMarkdown }) (TextArea)
