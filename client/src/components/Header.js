import React from 'react';
import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
// import { Button } from './styles/Button.styled'
import Mint from '../Web3/Mint'
import img from '../images/19.png'


export default function Header() {
  return (
    <StyledHeader>
        <Nav>
          <h1>INTERLOOP</h1>
          {/* <Button>Try It Free</Button> */}
        </Nav>
        <Container>
        <Flex>
          <div>
            <Mint />


            {/* <Button>
              Get Started For Free
            </Button> */}
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
