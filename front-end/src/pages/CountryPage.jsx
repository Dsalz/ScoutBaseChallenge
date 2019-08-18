import React, { Fragment } from "react";
import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";

// Components
import PageComponent from "../components/PageComponent";
import Loader from "../components/Loader";
import CountryLink from "../components/CountryLink";
import Header from "../components/PageHeader";
import CenteredText from "../components/CenteredText";

//Queries
import { getCountryQuery } from "../queries";

const CountryDetailsCard = styled.div`
  box-shadow: 0 0.625rem 2.5rem 0 rgba(198, 203, 222, 0.45);
  border-radius: 10px;
  text-align: left;
  width: 90%;
  margin: 40px auto;
  padding: 20px;
  box-sizing: border-box;
`;

const CountryDetailsHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 0;
`;

const CountryDetailsInfo = styled.p`
  font-size: 20px;
  color: #4a4a4a;
  margin-bottom: 50px;
`;

const CountryPage = ({ match }) => {
  const { loading, error, data } = useQuery(getCountryQuery, {
    variables: { country: match.params.code }
  });
  const { country } = data;
  console.log(country);
  return (
    <PageComponent>
      {loading && <Loader />}
      {!loading && country && (
        <Fragment>
          <Header>{country.name}</Header>

          <CountryDetailsCard>
            <CountryDetailsHeader>Name</CountryDetailsHeader>
            <CountryDetailsInfo>{country.name}</CountryDetailsInfo>
            <CountryDetailsHeader>Currency</CountryDetailsHeader>
            <CountryDetailsInfo>{country.currency}</CountryDetailsInfo>
            <CountryDetailsHeader>Area Code</CountryDetailsHeader>
            <CountryDetailsInfo>{country.phone}</CountryDetailsInfo>
            <CountryDetailsHeader>Languages Spoken</CountryDetailsHeader>
            <CountryDetailsInfo>
              {country.languages[0]
                ? country.languages.map(lang => lang.native).join(" , ")
                : "none"}
            </CountryDetailsInfo>
            <CountryDetailsHeader>
              Languages Spoken (in English)
            </CountryDetailsHeader>
            <CountryDetailsInfo>
              {country.languages[0]
                ? country.languages.map(lang => lang.name).join(" , ")
                : "none"}
            </CountryDetailsInfo>
            <CountryDetailsHeader>Continent</CountryDetailsHeader>
            <CountryDetailsInfo>{country.continent.name}</CountryDetailsInfo>
          </CountryDetailsCard>
          <CountryLink>View All Countries</CountryLink>
        </Fragment>
      )}
      {!loading && error && <CenteredText>{error}</CenteredText>}
      {!loading && !country && (
        <CenteredText>
          There was an error getting country. It's likely because of an invalid
          code
        </CenteredText>
      )}
    </PageComponent>
  );
};

export default CountryPage;
