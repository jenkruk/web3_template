import React from 'react';
import styled from 'styled-components'

export const StyledHeader = styled.header`

  
background-image: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.light};
  // text-align: center;
  padding: 40px 0;
  margin-bottom: 7vh;
  
  h1 {
    font-family: 'Poiret One';
    font-size: 3rem;
    letter-spacing: 3px;
  }

  select {
    border-radius: 5px;
    margin: 0;
    border: none;
    text-align: right;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    padding: 10px 10px;
    background-color: ${({ bg }) => bg || '#fff'};
    color: ${({ color }) => color || '#333'};
  }

`

export const Nav = styled.nav`
color: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
`

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`
