import { gql } from "apollo-boost";

export const getCountriesQuery = gql`
  {
    countries {
      code
      name
      languages {
        name
        native
      }
      continent {
        name
      }
    }
  }
`;

export const getCountryQuery = gql`
  query($country: String!) {
    country(code: $country) {
      name
      languages {
        name
        native
      }
      continent {
        name
      }
      currency
      phone
    }
  }
`;
