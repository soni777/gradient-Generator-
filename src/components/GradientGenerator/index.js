import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  MainContainer,
  Title,
  SubHeading,
  DirectionContainer,
  ColorName,
  Input,
  SubmitButton,
  FormContainer,
  ColorContainer,
  RowCon,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

const defaultState = {
  firstColor: '#8ae323',
  secondColor: '#014f7b',
  gradientOne: '#8ae323',
  gradientTwo: `#014f7b`,
  gradientDirection: gradientDirectionsList[0].value,
  direction: gradientDirectionsList[0].value,
}

class GradientGenerator extends Component {
  state = defaultState

  onClickDirection = value => {
    this.setState({direction: value})
  }

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    this.setState(prev => ({
      gradientOne: prev.firstColor,
      gradientTwo: prev.secondColor,
      gradientDirection: prev.direction,
    }))
  }

  render() {
    const {
      firstColor,
      secondColor,
      gradientOne,
      gradientTwo,
      gradientDirection,
      direction,
    } = this.state
    return (
      <MainContainer
        data-testid="gradientGenerator"
        gradientOne={gradientOne}
        gradientTwo={gradientTwo}
        directions={gradientDirection}
      >
        <Title>Generate a CSS Color Gradient</Title>
        <SubHeading>Choose Direction</SubHeading>
        <DirectionContainer>
          {gradientDirectionsList.map(each => (
            <GradientDirectionItem
              active={direction === each.value}
              key={each.directionId}
              data={each}
              onClickDirection={this.onClickDirection}
            />
          ))}
        </DirectionContainer>
        <SubHeading>Pick the Colors</SubHeading>
        <FormContainer onSubmit={this.onSubmitForm}>
          <RowCon>
            <ColorContainer>
              <ColorName>{firstColor}</ColorName>
              <Input
                id="firstColor"
                value={firstColor}
                type="color"
                onChange={this.onChangeFirstColor}
              />
            </ColorContainer>
            <ColorContainer>
              <ColorName>{secondColor}</ColorName>
              <Input
                id="secondColor"
                value={secondColor}
                type="color"
                onChange={this.onChangeSecondColor}
              />
            </ColorContainer>
          </RowCon>
          <SubmitButton type="submit">Generate</SubmitButton>
        </FormContainer>
      </MainContainer>
    )
  }
}

export default GradientGenerator
