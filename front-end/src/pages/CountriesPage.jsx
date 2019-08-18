import React, { Component } from "react";
import styled from "styled-components";
import { graphql } from "react-apollo";

// Components
import PageComponent from "../components/PageComponent";
import Loader from "../components/Loader";
import ListCountryCard from "../components/ListCountryCard";
import Header from "../components/PageHeader";
import CenteredText from "../components/CenteredText";

//Queries
import { getCountriesQuery } from "../queries";

const CountriesWrapper = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 5vh;
`;

class CountriesPage extends Component {
  render() {
    const { data, history } = this.props;
    const { loading, countries } = data;
    if (countries) {
      countries.map(country => console.log(country.languages));
    }
    return (
      <PageComponent>
        <Header>Countries</Header>
        <CountriesWrapper>
          {loading && <Loader />}
          {!loading &&
            countries &&
            countries.map(country => (
              <ListCountryCard
                name={country.name}
                continent={country.continent.name}
                nativeLang={
                  country.languages[0]
                    ? country.languages.map(lang => lang.native).join(" , ")
                    : "none"
                }
                englishLang={
                  country.languages[0]
                    ? country.languages.map(lang => lang.name).join(" , ")
                    : "none"
                }
                key={country.code}
                handleClick={() => history.push(`/countries/${country.code}`)}
              />
            ))}
          {!loading && !countries && (
            <CenteredText>
              There was a problem getting countries, please check your
              connection and try again later.
            </CenteredText>
          )}
        </CountriesWrapper>
      </PageComponent>
    );
  }
}

export default graphql(getCountriesQuery)(CountriesPage);
