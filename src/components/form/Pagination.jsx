import React from 'react'
import './Pagination.scss'

const Pagination = () => {
  return (
    <div className='wrap-pag'>
      <div className='step'>
        <div className='step__line'></div>
        <div className='step__number'>01</div>
      </div>
      <div className='step active'>
        <div className='step__line'></div>
        <div className='step__number'>02</div>
        <div className='step__txt'>Personal</div>
      </div>
      <div className='step'>
        <div className='step__line'></div>
        <div className='step__number'>03</div>
      </div>
    </div>
  )
}
export default Pagination
