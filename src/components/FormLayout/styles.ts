import styled from 'styled-components/native'
import { View } from 'react-native-animatable'
import { Dimensions } from 'react-native'
import { commonStyles } from '../../Styles/commonStyles'

const height = Dimensions.get('screen').height

export const Container = styled.View`
  background-color: ${commonStyles.primaryColor};
  flex: 1;
`

export const ContainerHeader = styled(View)`
  margin: 16px 0;
  padding: 24px;
`

export const Message = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: ${commonStyles.secondaryColor};
`

export const ContainerForm = styled(View)`
  background-color: ${commonStyles.secondaryColor};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  min-height: ${height}px;
  padding: 24px;
`