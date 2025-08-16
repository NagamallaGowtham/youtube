import React from 'react'
import { filterOptions } from '../utils/filterConstants'

const Filter = () => {
  return (
    <div className='flex flex-wrap gap-4 overflow-x-scroll hide-scroll my-3'>
        {filterOptions?.map((option, index) => <button key={index} className='shrink-0 py-1 px-2.5 rounded-lg bg-[#00000009] cursor-pointer'>{option}</button>)}
    </div>
  )
}

export default Filter