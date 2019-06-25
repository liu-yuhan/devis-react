import React, { Component } from "react";
import { reqDevis } from "../../api_connection";
import { connect } from "react-redux";
import { getDevis } from "../../redux/action";
import {
  Row,
  Col,
  Container,
  Image,
  Dropdown,
  DropdownButton
} from "react-bootstrap";
class Devis_Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: ""
    };
    this.props.getDevis(this.state);
  }

  render() {
    const devisDetail = this.props.devis;
    if (!devisDetail) {
      return (
        <>
          <Container>
            <Row>
              <Col>
                <Image src="loading.jpg" alt="loading" fluid />
              </Col>
            </Row>
          </Container>
        </>
      );
    } else {
      const clientInfo = devisDetail.deal;
      const companyInfo = devisDetail.company;
      return (
        <Container>
          <Row>
            {devisDetail ? (
              <Col md={{ span: 4, offset: 7 }} className="mt-3">
                <h5>Devis: No. Exemple </h5>
                <h5>Date : {devisDetail.date} </h5>
                <h5>Devis valable:{devisDetail.dureeValidite} </h5>
              </Col>
            ) : null}
          </Row>
          <Row>
            {companyInfo ? (
              <Col md={{ span: 4, offset: 1 }}>
                <h5>company: {companyInfo.name} </h5>
                <h5>address: {companyInfo.address} </h5>
                <h5>
                  {companyInfo.postalCode}, {companyInfo.city}
                </h5>
                <h5>Mail:</h5>
              </Col>
            ) : null}
          </Row>
          <Row>
            {clientInfo ? (
              <Col md={{ span: 4, offset: 7 }}>
                <h5>ClientName:{clientInfo.customerName} </h5>
                <h5>Address: {clientInfo.billingAddress.address} </h5>
                <h5>
                  {clientInfo.billingAddress.postalCode},
                  {clientInfo.billingAddress.city}{" "}
                </h5>
              </Col>
            ) : null}
          </Row>
          <Row className="mt-3 ">
            <Col md={3} className=" mx-auto">
              <h4>Prix Total HT: {devisDetail.prixTotalHT} </h4>
            </Col>
            <Col md={3} className=" mx-auto">
              {devisDetail.montantsTVA ? (
                <h4>TVA 10%: {devisDetail.montantsTVA[0].montant} </h4>
              ) : null}
            </Col>
            <Col md={3} className="mx-auto">
              <h4>Prix Total TTC: {devisDetail.prixTotalTTC} </h4>
            </Col>
          </Row>
          <DropdownButton
            id="dropdown-basic-button"
            title="Détail par métier: "
          >
            <Dropdown.Item href="#/demolition">
              Démolition - préparation
            </Dropdown.Item>
            <Dropdown.Item href="#/serrurerie">
              Serrurerie - métallerie
            </Dropdown.Item>
            <Dropdown.Item href="#/platrerie">
              Plâtrerie - cloisonnement
            </Dropdown.Item>
            <Dropdown.Item href="#/plomberie-chauffage">
              Plomberie - chauffage
            </Dropdown.Item>
            <Dropdown.Item href="#/electricite">Électricité</Dropdown.Item>
            <Dropdown.Item href="#/Menuiseries-intérieures">
              Menuiseries intérieures
            </Dropdown.Item>
            <Dropdown.Item href="#/action-1">Peinture</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Cuisine</Dropdown.Item>
          </DropdownButton>
        </Container>
      );
    }
  }
}

export default connect(
  state => ({ devis: state.devis }),
  { getDevis }
)(Devis_Main);
