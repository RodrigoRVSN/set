import React, { ReactNode } from "react"
import { ScrollView } from "react-native"
import * as S from './styles'

interface FormLayoutProps {
  message: string
  children: ReactNode
}

export const FormLayout = ({ message, children }: FormLayoutProps) => {
  return (
    <ScrollView>
      <S.Container>
        <S.ContainerHeader
          animation='fadeInLeft'
          delay={500}
        >
          <S.Message>{message}</S.Message>
        </S.ContainerHeader>

        <S.ContainerForm
          animation='fadeInUp'
          delay={500}
        >
          {children}
        </S.ContainerForm>
      </S.Container>
    </ScrollView>
  )
}