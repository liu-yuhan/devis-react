import React, { Component } from "react";

class Devis_Header extends Component {
  render() {
    return (
      <thead>
        <tr>
          <th className="col-4 text-center">Designation</th>
          <th className="col-2 text-center">Unité</th>
          <th className="col-2 text-center">Quantité</th>
          <th className="col-2 text-center">Prix unitaire</th>
          <th className="col-2 text-center">Total HT</th>
        </tr>
      </thead>
    );
  }
}

export default Devis_Header;
