import { Field } from 'formik'
import React from 'react'

const YourNameField = ({ name, errors }) => {
  return (
    <div className={`wrap-field ${errors.yourName ? 'error' : ''}`}>
      <label className='wrap-field__label' htmlFor={name}>
        Your Name
      </label>
      <Field
        className='wrap-field__input'
        id={name}
        name={name}
        placeholder='Your name...'
      />
      {errors.yourName ? (
        <div className='wrap-field__error'>{errors.yourName}</div>
      ) : null}
    </div>
  )
}
export default YourNameField
