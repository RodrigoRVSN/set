import styled from 'styled-components/native'
import { View } from 'react-native-animatable'

export const Container = styled.ScrollView`
  background-color: #38A69D;
  flex: 1;
`

export const ContainerHeader = styled(View)`
  margin: 16px 0;
  padding: 24px;
`

export const Message = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #FFF;
`

export const ContainerForm = styled(View)`
  background-color: #FFF;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  flex: 1;
  padding: 24px;
`