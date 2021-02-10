import React from 'react'
import { Button } from 'react-bootstrap'

import './App.css';
import Person from './person/Person'

class App extends React.Component {

  state = {
    show: false
  }

  handleShow = () => {
    this.setState({
      show: true
    })
  }

  render() {
    return (
      <div className="App" >
        <Button 
          onClick={this.handleShow}>Toggle</Button>
        {this.state.show &&
          <Person testprops="hello props" />
        }
      </div>
    );
  }
}

export default App;