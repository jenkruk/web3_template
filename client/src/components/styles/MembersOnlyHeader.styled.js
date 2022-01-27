// import React from 'react';
import styled from 'styled-components'

export const StyledHeader = styled.header`

  
background-image: ${({ theme }) => theme.colors.gradient};
  color: ${({ theme }) => theme.colors.light};
  // text-align: center;
  padding: 40px 0;
  margin-bottom: 7vh;
  
  h1 a{
    font-family: 'Poiret One';
    font-size: 3rem;
    letter-spacing: 3px;
    text-decoration: none;
    color: whitesmoke;
    cursor: pointer;
  }

  h4 a{
      border: 1px solid whitesmoke;
      padding: 1vh 1vw;
      cursor: pointer;
      color: whitesmoke;
      text-decoration: none;
  }

`

export const Nav = styled.nav`
color: ${({ theme }) => theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 0 5vw;

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