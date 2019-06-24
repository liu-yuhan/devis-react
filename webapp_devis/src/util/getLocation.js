const getLocation = (devis, uuid) => {
  devis.map(devis =>
    devis.locationsDetails.locations[0] &&
    devis.locationsDetails.locations[0].uuid === uuid ? (
      <tr key={devis.index} className="text-center border border-primary my-2">
        <td>{devis.designation} </td>
        <td>{devis.unite} </td>
        <td>{devis.quantite}</td>
        <td>{devis.prixUnitaireHT} </td>
        <td>{devis.prixHT} </td>
      </tr>
    ) : null
  );
};

export default getLocation;
