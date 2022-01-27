import React from 'react';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import img from '../images/19.png';
import { StyledHeader, Nav, Image } from './styles/MembersOnlyHeader.styled';


export default function Header(props) {
  console.log(props)
  return (
    <StyledHeader>
        <Nav>
          <h1><a href={'/'}>INTERLOOP</a></h1>
        </Nav>
        <Container>
        <Flex>
          <div>
            <h1>Members Only...</h1>
            <h4><a href={"/"}>Back to Main Page</a></h4>
          </div>
          <Image style={{
            borderRadius: "50%", 
            boxShadow: "1px 2px 3px rgba(0,0,0,.5)"
            }}
            src={img} alt='Couch Surfer NFT' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}
