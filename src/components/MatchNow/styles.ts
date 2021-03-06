import styled from 'styled-components/native';

export const Container = styled.View`
  width: 90%; 
  background-color: #BA1C00;
  border-radius: 18px;
  padding: 24px;
  align-items: center;
  margin-top: 30px;
  overflow: hidden;
`;

export const Title = styled.Text`
  color: #FFFFFF;
  font-size: 18px;
  font-weight: bold;
`;

export const Turn = styled.Text`
  color: #999;
`;

export const Play = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Image = styled.Image`
  width: 98px;
  height: 110px;
`;

export const Score = styled.Text`
  color: #FFFFFF;
  font-size: 24px;
  font-weight: bold;
  margin: 0 12px;
`;

export const LeagueLogo = styled.Image`
  position: absolute;
  z-index: -1;
  top: -30;
  right: 10px;
  height: 300px;
  width: 300px;
`;

