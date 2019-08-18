import React from "react";
import styled from "styled-components";
import PageComponent from "../components/PageComponent";
import CountryLink from "../components/CountryLink";

const Header = styled.h1`
  font-size: 35px;
  margin: 30vh auto 40px;
  font-weight: bold;
  width: 70vw;
  text-align: center;
  min-width: 250px;
`;

const IndexPage = () => (
  <PageComponent>
    <Header>Welcome to the country app!</Header>
    <CountryLink>View All Countries</CountryLink>
  </PageComponent>
);

export default IndexPage;
