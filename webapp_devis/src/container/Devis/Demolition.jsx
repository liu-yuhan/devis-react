import Devis_header from "../../component/devis_header";
import React, { Component } from "react";
import { Table, Container } from "react-bootstrap";
import Main from "./Main";
import { connect } from "react-redux";
import { devis } from "../../redux/action";

class Devis_Demolition extends Component {
  constructor(props) {
    super();
    this.state = {
      detail: ""
    };
  }
  render() {
    return (
      <>
        <Main />
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
              <tr>
                <td>
                  <h6>Salle d'eau</h6>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>Cuisine </h6>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>Salon </h6>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>Chambre </h6>
                </td>
              </tr>
              <tr>
                <td>
                  <h6>Autres prestations </h6>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
}

export default connect(
  state => ({ devis: state.devis }),
  { devis }
)(Devis_Demolition);
