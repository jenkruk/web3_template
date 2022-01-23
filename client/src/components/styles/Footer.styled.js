import React from 'react';
import styled from 'styled-components'

export const StyledFooter = styled.footer`

  // background-image: ${({ theme }) => theme.colors.reversegradient};
  // position: fixed;
  bottom: 0;
  width: 100vw;
  color: #fff;
  padding: 100px 5vw 60px 0;


  h1 {
    font-family: 'Poiret One';
    font-size: 3rem;
    letter-spacing: 3px;
  }

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`
