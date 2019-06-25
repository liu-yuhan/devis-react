import Devis_header from "../../component/devis_header";
import React, { Component } from "react";
import { Table, Container } from "react-bootstrap";
import Main from "./Main";
import { connect } from "react-redux";
import { getDevis } from "../../redux/action";
import Devis_Header from "../../component/devis_header";
class Devis_plomberie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: ""
    };
    this.props.getDevis(this.state);
  }

  render() {
    const devis_all = this.props.devis.sections;
    var salle_deau_items;
    if (devis_all) {
      var devis_plomberie = devis_all[0].lots[3].lignes;
      console.log(devis_plomberie);
      salle_deau_items = devis_plomberie.map(devis_plomberie =>
        devis_plomberie.locationsDetails.locations[0] &&
        devis_plomberie.locationsDetails.locations[0].uuid ===
          "35c15ae1-4258-4a56-b61c-6bb6a2140e25" ? (
          <tr
            key={devis_plomberie.index}
            className="text-center border border-primary my-2"
          >
            <td>{devis_plomberie.designation} </td>
            <td>{devis_plomberie.unite} </td>
            <td>{devis_plomberie.quantite}</td>
            <td>{devis_plomberie.prixUnitaireHT} </td>
            <td>{devis_plomberie.prixHT} </td>
          </tr>
        ) : null
      );
    }
    var cuisine_items;
    if (devis_all) {
      var devis_plomberie = devis_all[0].lots[3].lignes;
      console.log(devis_plomberie);
      cuisine_items = devis_plomberie.map(devis_plomberie =>
        devis_plomberie.locationsDetails.locations[0] &&
        devis_plomberie.locationsDetails.locations[0].uuid ===
          "c85c00a8-6316-4ed4-8c58-aa55127edc99" ? (
          <tr
            key={devis_plomberie.index}
            className="text-center border border-primary my-2"
          >
            <td>{devis_plomberie.designation} </td>
            <td>{devis_plomberie.unite} </td>
            <td>{devis_plomberie.quantite}</td>
            <td>{devis_plomberie.prixUnitaireHT} </td>
            <td>{devis_plomberie.prixHT} </td>
          </tr>
        ) : null
      );
    }
    var salon_items;
    if (devis_all) {
      var devis_plomberie = devis_all[0].lots[3].lignes;
      console.log(devis_plomberie);
      salon_items = devis_plomberie.map(devis_plomberie =>
        devis_plomberie.locationsDetails.locations[0] &&
        devis_plomberie.locationsDetails.locations[0].uuid ===
          "8ebec007-b267-481e-88b3-7d2f2f3df1b7" ? (
          <tr
            key={devis_plomberie.index}
            className="text-center border border-primary my-2"
          >
            <td>{devis_plomberie.designation} </td>
            <td>{devis_plomberie.unite} </td>
            <td>{devis_plomberie.quantite}</td>
            <td>{devis_plomberie.prixUnitaireHT} </td>
            <td>{devis_plomberie.prixHT} </td>
          </tr>
        ) : null
      );
    }

    var chambre_items;
    if (devis_all) {
      var devis_plomberie = devis_all[0].lots[3].lignes;
      console.log(devis_plomberie);
      chambre_items = devis_plomberie.map(devis_plomberie =>
        devis_plomberie.locationsDetails.locations[0] &&
        devis_plomberie.locationsDetails.locations[0].uuid ===
          "a0947d3d-99b3-4a58-a58d-8b0fd4bd6f40" ? (
          <tr
            key={devis_plomberie.index}
            className="text-center border border-primary my-2"
          >
            <td>{devis_plomberie.designation} </td>
            <td>{devis_plomberie.unite} </td>
            <td>{devis_plomberie.quantite}</td>
            <td>{devis_plomberie.prixUnitaireHT} </td>
            <td>{devis_plomberie.prixHT} </td>
          </tr>
        ) : null
      );
    }
    var autres_prestations;
    if (devis_all) {
      var devis_plomberie = devis_all[0].lots[3].lignes;
      console.log(devis_plomberie);
      autres_prestations = devis_plomberie.map(devis_plomberie =>
        !devis_plomberie.locationsDetails.locations[0] ? (
          <tr
            key={devis_plomberie.index}
            className="text-center border border-primary my-2"
          >
            <td>{devis_plomberie.designation} </td>
            <td>{devis_plomberie.unite} </td>
            <td>{devis_plomberie.quantite}</td>
            <td>{devis_plomberie.prixUnitaireHT} </td>
            <td>{devis_plomberie.prixHT} </td>
          </tr>
        ) : null
      );
    }

    return (
      <>
        <Main />
        <Container>
          <Table striped bordered hover className="mt-3">
            <Devis_Header />
            <tbody>
              <tr>
                <td>Salle d'eau</td>
              </tr>
              {salle_deau_items}
              <tr>
                <td>Cuisine</td>
              </tr>
              {cuisine_items}
              <tr>
                <td>Salon</td>
              </tr>
              {salon_items}
              <tr>
                <td>Chambre</td>
              </tr>
              {chambre_items}
              <tr>
                <td>Autres prestations</td>
              </tr>
              {autres_prestations}
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
}

export default connect(
  state => ({ devis: state.devis }),
  { getDevis }
)(Devis_plomberie);
