import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


const Result = styled.div`
  border: 1px solid #777;
  width: 100%;
  height: 100%;
  padding: 20px;
`;



class ShowResult extends Component {


  createMarkup() {
    return { __html: this.props.result };
  };


  render(){

    return(
      <div className="col-md-6">
        <Result dangerouslySetInnerHTML={ this.createMarkup() } />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    result: state.convert.result,
  };
};





export default connect(mapStateToProps, null)(ShowResult)
