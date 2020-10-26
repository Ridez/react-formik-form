import { Field, getIn } from 'formik'
import moment from 'moment'
import React, { useEffect, useLayoutEffect, useState } from 'react'

const ErrorMessage = ({ name }) => (
  <Field
    name={name}
    render={({ form }) => {
      const error = getIn(form.errors, name)
      return error ? <div className='wrap-field__error'>{error}</div> : null
    }}
  />
)

const DatePickerField = ({ name, date, errors }) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
  const [isMobile, setIsMobile] = useState(null)

  useEffect(() => {
    const pageWidth = window.innerWidth
    pageWidth > 991 ? setIsMobile(false) : setIsMobile(true)
  }, [])

  useLayoutEffect(() => {
    const handleScroll = () => {
      const pageWidth = window.innerWidth
      pageWidth > 991 ? setIsMobile(false) : setIsMobile(true)
    }
    if (typeof window !== `undefined`) {
      window.addEventListener('resize', handleScroll)

      return () => window.removeEventListener('resize', handleScroll)
    }
  })

  useEffect(() => {
    const age = moment().diff(
      [date.year, isMobile ? date.month : months.indexOf(date.month), date.day],
      'years'
    )
    date.fullDate = moment(`
      ${date.year}-
      ${isMobile ? date.month : months.indexOf(date.month) + 1}-
      ${date.day}`)
    date.isAdult = age >= 18

    date.isValid = moment(
      `
      ${date.year}-
      ${isMobile ? date.month : months.indexOf(date.month) + 1}-
      ${date.day}`,
      'YYYY-MM-DD'
    ).isValid()
  }, [date])

  const getMonth = (month) => {
    if (isMobile) {
      let monthNumber = months.indexOf(month) + 1
      if (monthNumber < 10) {
        return `0${monthNumber}`
      } else {
        return monthNumber
      }
    } else {
      return month
    }
  }

  return (
    <div className={`wrap-field ${errors.yourName ? 'error' : ''}`}>
      <fieldset>
        <legend className='wrap-field__label'>Date of birth</legend>
        <Field className='field field--day' name={`${name}.day`} />
        <div className='separator-line'></div>
        <div className='wrap-select month'>
          <Field
            className='field field--month'
            as='select'
            name={`${name}.month`}
          >
            {months.map((month) => (
              <option key={month}>{getMonth(month)}</option>
            ))}
          </Field>
          <div className='arrow-down'></div>
        </div>
        <div className='separator-line'></div>
        <Field className='field field--year' name={`${name}.year`} />
        <ErrorMessage name={`${name}.isAdult`} />
        <ErrorMessage name={`${name}.isValid`} />
        <ErrorMessage name={`${name}.fullDate`} />
      </fieldset>
    </div>
  )
}
export default DatePickerField
