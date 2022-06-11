import React from 'react';
import { Image } from 'react-native';
import { Container,Logo } from './styles';
import logilogo from '../../assets/logo.png';

function Header() {
  return(
    <Container>
      <Logo 
        source={logilogo}
      />
    </Container>
  )
}

export default Header;