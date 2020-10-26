import React from 'react'
import RadioButton from './RadioButton'

const ChessRadioField = ({ name, errors, values }) => {
  return (
    <div className='wrap-field'>
      <fieldset>
        <legend className='wrap-field__label'>Can you play chess?</legend>
        <div className='wrap-field__row'>
          <RadioButton
            id='radio-yes'
            name={name}
            value={true}
            checked={values.playChess}
          >
            Yes
          </RadioButton>
          <RadioButton
            id='radio-no'
            name={name}
            value={false}
            checked={values.playChess}
          >
            No
          </RadioButton>
        </div>
        {errors.playChess ? (
          <div className='wrap-field__error'>{errors.playChess}</div>
        ) : null}
      </fieldset>
    </div>
  )
}

export default ChessRadioField
