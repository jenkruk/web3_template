import React from 'react';
// import SocialIcons from './SocialIcons'
import { Container } from './styles/Container.styled'
// import { Flex } from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'
import Scroll from './Scroll'

export default function Footer() {
  return (
    <StyledFooter>
        {/* <h1>INTERLOOP</h1> */}
        <Scroll />
        <Container>

        {/* <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </li>
            <li>+1-212-555-1212</li>
            <li>example@Interloop.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex> */}
      </Container>
        <p>&copy; 2022 Interloop. All rights reserved</p>
      
    </StyledFooter>
  )
}
