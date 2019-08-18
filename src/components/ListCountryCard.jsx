import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px auto;
  width: 250px;
  border-radius: 10px;
  background: white;
  padding: 10px;
  box-shadow: 0 0.625rem 2.5rem 0 rgba(198, 203, 222, 0.45);
  cursor: pointer;
  transition: all 0.4s linear;
  &:hover {
    transform: scale(1.1);
  }
`;

const Header = styled.h1`
  font-size: 22px;
  text-align: center;
`;

const InfoRow = styled.div`
  padding: 10px 0;
  color: #4a4a4a;
  border-bottom: 1px solid #cacaca;
  font-size: 14px;
  &:last-of-type {
    border-bottom: none;
  }
`;

const InfoLabel = styled.p`
  font-weight: bold;
  margin-right: 5px;
`;
const ListCountryCard = ({
  name,
  continent,
  code,
  nativeLang,
  englishLang,
  handleClick
}) => (
  <Container onClick={handleClick}>
    <Header>{name}</Header>
    <InfoRow>
      <InfoLabel>Continent:</InfoLabel>
      <p>{continent}</p>
    </InfoRow>
    <InfoRow>
      <InfoLabel>Native Language:</InfoLabel>
      <p>{nativeLang}</p>
    </InfoRow>
    <InfoRow>
      <InfoLabel>Native Language(English):</InfoLabel>
      <p>{englishLang}</p>
    </InfoRow>
  </Container>
);

export default ListCountryCard;
