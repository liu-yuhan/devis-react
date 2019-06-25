# devis-react

This application is developed for browsing the estimate, fetched from API:
https://api.travauxlib.com/api/devis-pro/JKusHl8Ba8MABIjdCtLZOe2lxxnUfX
It using axios to connect the API, functions can be found in /src/api_connection.

The appilication can filter the estimate by professions, each sub-estimate is an independent component. They can be found in /src/container.

The application is using Redux as state manager, the configuration is in /src/redux.

# to improve

Correct the "Quantité" in table, it should display the "locations[n].quantite",
but it is displaying "lots[n].quantite" for now.

So as "Total HT", it should be "locations[n].quantite \* Prix unitaire",
but not "lots[n].prixHT".

Display N/A when there is no element in this location.

Browse on a single route.

Add a price total calculation for each location in each sub-estimate.
