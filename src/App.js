import React, { Component } from 'react';
import Portfolio from './components/Portfolio';
import { Container } from 'semantic-ui-react';
// import Footer from './components/footer';


class App extends Component {
  render() {
    return (
      <Container textAlign='center'>
        <Portfolio />
        {/* <Footer /> */}
      </Container>)
  }
}
export default App;