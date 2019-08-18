import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CountryLink = ({ className, children }) => (
  <Link to="/countries" className={className}>
    {children}
  </Link>
);

export default styled(CountryLink)`
  background: #022b69;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  display: flex;
  margin: 0 auto 40px;
  text-decoration: none;
  width: 200px
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  transition: all .4s linear;
  &:hover {
    box-shadow: 0 0.625rem 2.5rem 0 rgba(198, 203, 222, 0.45);
    transform: scale(1.1);    
  }
`;
