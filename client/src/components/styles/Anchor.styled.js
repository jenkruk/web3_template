// import React from 'react';
import styled from 'styled-components'

const Anchor = styled.a`
  border-radius: 5px;
  text-align: center;
  margin: 0;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 10px 20px;
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};
  text-decoration: none;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`

export default Anchor;
