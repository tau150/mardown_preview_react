import React, { Component } from 'react';
import TextArea from '../containers/text_area';
import ShowResult from './show_result'

  // var marked = require('marked');
class App extends Component {

  render() {
    return (
        <div className="container">
          <h3 style={{'margin-top': '50px'}} >Markdow preview</h3>
          <div className='row mt-5'>
            <TextArea />
            <ShowResult />
          </div>
        </div>
    );
  }
}

export default App;
