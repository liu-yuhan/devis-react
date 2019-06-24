import Devis_header from "../../component/devis_header";
import React, { Component } from "react";
import { Table, Container } from "react-bootstrap";
class Devis_Main extends Component {
  constructor(props) {
    super();
    this.state = {
      detail: ""
    };
  }

  render() {
    return (
      <>
        <Devis_header />
        <Container>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>Designation</th>
                <th>Unité</th>
                <th>Quantité</th>
                <th>Prixunitaire</th>
                <th>Total HT</th>
              </tr>
            </thead>
            <tbody>
              <h6>Salle d'eau </h6>
              <tr />
              <h6>Cuisine </h6>
              <tr />
              <h6>Salon </h6>
              <tr />
              <h6>Chambre </h6>
              <tr />
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
}

export default Devis_Main;
