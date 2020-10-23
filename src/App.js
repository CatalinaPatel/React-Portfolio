import React, { Component } from 'react';
import './index.css';
import Homepage from './components/Homepage';
import { Container } from 'semantic-ui-react';
class App extends Component {
  render() {
    return (
      <Container textAlign='center'>
        <Homepage />
      </Container>)
  }
}
export default App;