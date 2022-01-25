// import React from 'react';
import styled from 'styled-components'

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background: rgba(6, 22, 54);  
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 10vw;
  padding: 60px;
  color: whitesmoke;
  flex-direction: ${({ layout }) => layout || 'row'};

  img {
    width: 80%;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`
