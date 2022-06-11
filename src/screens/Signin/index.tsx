import React from 'react';
import { 
  KeyboardView, 
  Title, 
  Container, 
  Input, 
  ButtonSubmit,
  TextButton
} from './styles';
import Header from '../../components/Login';
import { Text, View, StyleSheet, Button } from 'react-native';

export function Signin() {
  return(
    
    <KeyboardView>
      <Header />
      <Container>
        <Title>Login</Title>
        <Input 
          placeholderTextColor="#fff"
          placeholder="E-mail"
        />
        <Input 
          placeholderTextColor="#fff"
          placeholder="Senha"
          secureTextEntry
        />
        <ButtonSubmit >
          <TextButton>
            Entrar
          </TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
   
  )
}

