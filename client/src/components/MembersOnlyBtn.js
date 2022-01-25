import React from 'react';
import Anchor from './styles/Anchor.styled'


const MembersOnlyBtn = () => {

  return (

      <Anchor
      style={{
          display: 'block',
          marginTop: '7px',
          width: '187px'
      }}
      href={'/MembersOnly'}
      >
          Members Only
    </Anchor>
    )
  }


export default MembersOnlyBtn;
