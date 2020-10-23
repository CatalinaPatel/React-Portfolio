import React, { Component } from 'react';
import Portfolio from './components/Portfolio';
import { Container } from 'semantic-ui-react';
import Footer from './components/Footer';
// import Card from './components/Card'


class App extends Component {
  render() {
    return (
      <Container textAlign='center'>
        <Portfolio />
        <Footer />
        {/* <Card /> */}
      </Container>)
  }
}
export default App;