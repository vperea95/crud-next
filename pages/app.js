import React from "react";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

import AddProduct from "../components/AddProduct";
import FilterProducts from "../components/FilterProducts";
import ListProducts from "../components/ListProducts";

function App() {
  return (
    <Container>
      <Col>
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