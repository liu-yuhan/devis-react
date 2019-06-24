import api_connector from "./api_connector";

// give api_connector real parameters and create a new async function
//wait to be called by action/dispatcher

export const reqDevis = () =>
  api_connector(
    "https://api.travauxlib.com/api/devis-pro/JKusHl8Ba8MABIjdCtLZOe2lxxnUfX"
  );
