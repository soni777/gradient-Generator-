import {CustomButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {data, active, onClickDirection} = props

  const onChangeClicked = () => {
    onClickDirection(data.value)
  }

  return (
    <li>
      <CustomButton
        active={active}
        value={data.value}
        type="text"
        onClick={onChangeClicked}
      >
        {data.displayText}
      </CustomButton>
    </li>
  )
}

export default GradientDirectionItem
