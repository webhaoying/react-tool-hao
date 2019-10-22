import React, { Component } from 'react';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    console.log(connect)
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)， 哈哈
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
