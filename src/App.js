import React from 'react';
//import {Container, Row, Col} from 'react-bootstrap';
import Layout from './hoc/Layout/Layout'
import {Route, Switch, Redirect} from 'react-router-dom' 
import Gameinfo from './containers/Gameinfo/Gameinfo'
import Populargames from './containers/Populargames/Populargames'
import NotFound from './containers/Notfound/Notfound'
import './App.css';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Gameinfo} />
        <Route path="/popular-games"  component={Populargames} />
        <Route path="/404" component={NotFound} />
        <Redirect to={"/404"}/> 
      </Switch>
    </Layout>


  //   <Container fluid>
  //     <Row>
  //       <Col><h1>Hello</h1></Col >
  //     </Row>
  // </Container>
  );
}

export default App;
