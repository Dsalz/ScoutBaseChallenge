import React, { Component } from "react";
import styled from "styled-components";
import { graphql } from "react-apollo";

// Components
import PageComponent from "../components/PageComponent";
import Loader from "../components/Loader";
import ListCountryCard from "../components/ListCountryCard";

//Queries
import { getCountriesQuery } from "../queries";

const Header = styled.h1`
  font-size: 30px;
  margin: 40px auto 0;
  font-weight: bold;
  width: 70vw;
  text-align: center;
  min-width: 250px;
`;

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
            countries.length > 0 &&
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
        </CountriesWrapper>
      </PageComponent>
    );
  }
}

export default graphql(getCountriesQuery)(CountriesPage);
