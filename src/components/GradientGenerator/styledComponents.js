import styled from 'styled-components'

export const MainContainer = styled.div`
  background: linear-gradient(
    to ${props => props.directions},
    ${props => props.gradientOne},
    ${props => props.gradientTwo}
  );
  min-height: 100vh;
  padding: 5px;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
`

export const Title = styled.h1`
  color: #ffffff;
  font-size: 20px;
`

export const SubHeading = styled.p`
  color: #ffffff79;
`

export const DirectionContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const RowCon = styled.div`
  display: flex;
`

export const ColorContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ColorName = styled.p`
  color: #ededed;
  margin: 5px;
`

export const Input = styled.input`
  width: 120px;
  border: none;
  outline: none;
  margin: 5px;
`

export const SubmitButton = styled.button`
  background: #00c9b7;
  color: #1e293b;
  border-radius: 5px;
  padding: 10px;
  width: 120px;
  border: none;
  outline: none;
  margin-top: 20px;
`
