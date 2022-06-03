import React from 'react';

import { League } from '../League';

import nbaImg from '../../assets/NBA.png';
import nbbImg from '../../assets/NBB.png';
import libertadoresImg from '../../assets/libertadores.png';
import premierImg from '../../assets/premier.png';

import { Container } from './styles';

export function Leagues() {
  return (
    <Container
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 24 }}
    >
      <League title="NBA" image={nbaImg} isActive={true} />
      <League title="NBB" image={nbbImg} isActive={false} />

    </Container>
  );
}