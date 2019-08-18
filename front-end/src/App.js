import React from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import IndexPage from "./pages/IndexPage";
import CountriesPage from "./pages/CountriesPage";
import CountryPage from "./pages/CountryPage";

const client = new ApolloClient({
  uri: "https://countries.trevorblades.com"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/countries" component={CountriesPage} />
          <Route exact path="/countries/:code" component={CountryPage} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
