import styled from 'styled-components'

export const CustomButton = styled.button`
  background: ${props => (props.active ? '#ededed' : '#ffffff79')};
  opacity: ${props => (props.active ? 1 : 0.5)};
  color: #334155;
  border-radius: 5px;
  width: 120px;
  margin: 10px;
  padding: 10px;
  border: none;
  text-align: center;
`
