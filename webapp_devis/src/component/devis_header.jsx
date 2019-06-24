import React, { Component } from "react";
import { Row, Col, Container, DropdownButton, Dropdown } from "react-bootstrap";

class Devis_Header extends Component {
  render() {
    return (
      <Container className=" mt-3">
        <Row>
          <Col md={{ span: 4, offset: 7 }} className="mt-3">
            <h5>Devis: No. Exemple </h5>
            <h5>Date : </h5>
            <h5>Devis valable: </h5>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 1 }}>
            <h5>company: </h5>
            <h5>address: </h5>
            <h5>postcode City</h5>
            <h5>Mail:</h5>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 4, offset: 7 }}>
            <h5>ClientName:</h5>
            <h5>Address </h5>
            <h5>PostalCode</h5>
          </Col>
        </Row>
        <Row className="mt-3 ">
          <Col md={3} className=" mx-auto">
            <h4>Prix Total HT: </h4>
          </Col>
          <Col md={3} className=" mx-auto">
            <h4>TVA 10%: </h4>
          </Col>
          <Col md={3} className="mx-auto">
            <h4>Prix Total TTC: </h4>
          </Col>
        </Row>
        <DropdownButton id="dropdown-basic-button" title="Détail par métier: ">
          <Dropdown.Item href="#/Démolition">
            Démolition - préparation
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            Serrurerie - métallerie
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            Plâtrerie - cloisonnement
          </Dropdown.Item>
          <Dropdown.Item href="#/action-1">Plomberie - chauffage</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Électricité</Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            Menuiseries intérieures
          </Dropdown.Item>
          <Dropdown.Item href="#/action-1">Peinture</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Cuisine</Dropdown.Item>
        </DropdownButton>
      </Container>
    );
  }
}

export default Devis_Header;
