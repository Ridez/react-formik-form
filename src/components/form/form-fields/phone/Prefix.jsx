import { useFormikContext } from 'formik'
import React, { useEffect, useState } from 'react'
import { getCountries, getCountryCallingCode } from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import './Prefix.scss'

const PhoneInputField = ({ field, form, name, ...props }) => {
  const setPrefix = (e) => {
    const prefix = `+${getCountryCallingCode(e.target.value)}`
    setFieldValue(`${field.name}.prefix`, prefix)
  }

  const [countries, setCountries] = useState([])
  const { setFieldValue } = useFormikContext()

  useEffect(() => {
    const codes = ['PL', 'DE', 'AT', 'IT', 'RU', 'NL']
    const filteredCountries = getCountries().filter((country) =>
      codes.includes(country)
    )
    setCountries(filteredCountries)
  }, [])

  return (
    <div className='wrap-select prefix'>
      <select className='select' onChange={setPrefix} value='PL'>
        {countries.map((country) => (
          <option key={country} value={country}>
            +{getCountryCallingCode(country)} ({country})
          </option>
        ))}
      </select>
      <div className='arrow-down'></div>
    </div>
  )
}

export default PhoneInputField
