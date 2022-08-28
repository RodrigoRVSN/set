import { useState } from 'react'
import { Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import * as S from './styles'

export const Home = () => {
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter((prevState) => prevState + 1)
  }

  return (
    <S.Container>
      <S.Title>{counter}</S.Title>
      <RectButton onPress={handleIncrement}>
        <Text>Aumentar</Text>
      </RectButton>
    </S.Container>
  )
}
