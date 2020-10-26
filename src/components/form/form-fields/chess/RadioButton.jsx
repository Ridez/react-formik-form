import { useFormikContext } from 'formik'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const RadioButton = ({ children, name, value, checked }) => {
  const { setFieldValue } = useFormikContext()
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    setIsActive(false)
    if (value && checked) {
      setIsActive(true)
    } else if (!value && checked === false) {
      setIsActive(true)
    }
  }, [checked])

  return (
    <RadioWrapper>
      <Label>
        <Input
          type='radio'
          name={name}
          value={value}
          onChange={() => setFieldValue(name, value)}
        />
        <Mark className={isActive ? 'active' : ''}>{children}</Mark>
      </Label>
    </RadioWrapper>
  )
}

const RadioWrapper = styled.div`
  display: inline-block;
  margin-right: 15px;
`

const Mark = styled.span`
  display: flex;
  align-items: center;
  border: 2px solid #dadaed;
  position: relative;
  width: 40px;
  height: 50px;
  padding-left: 10px;
  &:after {
    content: '';
    border: 2px solid #dadaed;
    width: 11px;
    height: 11px;
    position: absolute;
    z-index: 9;
    right: -7.5px;
    background-color: #f2f2f5;
  }
  &:before {
    content: '';
    background-color: transparen;
    width: 3px;
    height: 3px;
    position: absolute;
    z-index: 99;
    right: -1.5px;
  }
  &.active {
    border: 2px solid #1bfec0;
    &:after {
      border: 2px solid #1bfec0;
    }
    &:before {
      background-color: #1bfec0;
    }
  }
`

const Input = styled.input`
  visibility: hidden;
  display: none;
`

const Label = styled.label`
  display: flex;
  cursor: pointer;
  padding: 5px 10px 5px 0;
  position: relative;
  ${(props) =>
    props.disabled &&
    `
        cursor: not-allowed;
        opacity: 0.4;
    `}
`

export default RadioButton
