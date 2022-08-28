import { RectButton } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: violet;
`

export const Title = styled.Text`
  font-size: 24px;
  color: white;
`

export const ButtonIncrement = styled(RectButton)`
  height: 48px;
  width: 192px;
  background: green;
`
