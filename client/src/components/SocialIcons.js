import React from 'react';
import { FaTwitter, FaDiscord, FaLinkedin } from 'react-icons/fa'
import { StyledSocialIcons } from './styles/SocialIcons.styled'

const SocialIcons =() => {
  return (
    <StyledSocialIcons>
      <li>
        <a href='https://twitter.com'>
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href='https://facebook.com'>
          <FaDiscord />
        </a>
      </li>
    </StyledSocialIcons>
  )
}

export default SocialIcons;
