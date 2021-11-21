import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

import AddProduct from "../components/AddProduct";
import FilterProducts from "../components/FilterProducts";
import ListProducts from "../components/ListProducts";
import Efecto from '../pruebaHooks/pruebaUseStateHook'

function App() {
  return (
    <Container>
      <Col>
      <Efecto/>
          <AddProduct />
        </Col>
        <Col>
          <FilterProducts />
          <hr />
          <ListProducts />
        </Col>
    </Container>
  );
}

export default App;