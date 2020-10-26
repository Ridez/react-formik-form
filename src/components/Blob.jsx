import React from 'react'
import './Blob.scss'

const Blob = () => {
  return (
    <svg
      className='blob'
      width='649'
      height='616'
      viewBox='0 0 649 616'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0)'>
        <g filter='url(#filter0_d)'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M0.000347137 0.000213623H266C266 0.000213623 309.593 75.3855 426 91.9999C513.841 104.537 559.476 105.051 634 154C728.562 248.563 342.565 607.61 297 615C107.816 645.683 233.77 133.034 -12.0002 242'
            fill='url(#paint0_linear)'
          />
        </g>
      </g>
      <defs>
        <filter
          id='filter0_d'
          x='-37.0002'
          y='-4.99979'
          width='710.857'
          height='666.327'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset dy='20' />
          <feGaussianBlur stdDeviation='12.5' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0.12549 0 0 0 0 0.121569 0 0 0 0 0.211765 0 0 0 0.05 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow'
            result='shape'
          />
        </filter>
        <linearGradient
          id='paint0_linear'
          x1='-66'
          y1='647'
          x2='730'
          y2='647'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#8658EB' />
          <stop offset='1' stopColor='#652AE6' />
        </linearGradient>
        <clipPath id='clip0'>
          <rect width='649' height='616' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Blob
