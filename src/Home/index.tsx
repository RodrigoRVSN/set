import { useState } from 'react'
import { Text } from 'react-native'
import * as S from './styles'

export const Home = () => {
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter((prevState) => prevState + 1)
  }

  return (
    <>
      <S.Title>{counter}</S.Title>
      <S.ButtonIncrement onPress={handleIncrement}>
        <Text>Aumentar</Text>
      </S.ButtonIncrement>
    </>
  )
}
