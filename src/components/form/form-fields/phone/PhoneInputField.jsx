import { Field, getIn } from 'formik'
import React from 'react'
import Prefix from './Prefix'

const ErrorMessage = ({ name }) => (
  <Field
    name={name}
    render={({ form }) => {
      const error = getIn(form.errors, name)
      return error ? <div className='wrap-field__error'>{error}</div> : null
    }}
  />
)

const PhoneInputField = ({ name, errors }) => {
  return (
    <div className={`wrap-field ${errors.yourName ? 'error' : ''}`}>
      <fieldset>
        <legend className='wrap-field__label'>Mobile</legend>
        <Field name={name} component={Prefix} />
        <div style={{ width: '100%' }}>
          <Field
            className='wrap-field__input'
            name={`${name}.number`}
            placeholder='000 000 000'
          />
          <ErrorMessage name={`${name}.number`} />
        </div>
      </fieldset>
    </div>
  )
}
export default PhoneInputField
