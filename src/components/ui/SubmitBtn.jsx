import React from 'react'
import styled from 'styled-components'
import rightArrowIcon from '../../images/right-arrow.svg'

const SubmitBtn = ({ children }) => {
  return (
    <Button type='submit'>
      {children}
      <span className='arrow'>
        <img alt='right arrow icon' src={rightArrowIcon} />
      </span>
    </Button>
  )
}

const Button = styled.button`
  border: none;
  position: absolute;
  right: 0;
  bottom: -25px;
  padding: 0px 70px;
  height: 51px;
  background: linear-gradient(90deg, #8658eb -0.42%, #652ae6 100.42%);
  box-shadow: 0px 20px 25px rgba(32, 31, 54, 0.15);
  text-transform: uppercase;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.480054px;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  @media (max-width: 991px) {
    position: absolute;
    left: -50px;
    bottom: -25px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: -50px;
    width: 50px;
    height: 51px;
    background: #7841f4;
    box-shadow: 0px 23px 24px rgba(13, 13, 31, 0.08);
  }
`
export default SubmitBtn
