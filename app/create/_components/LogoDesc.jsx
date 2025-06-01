import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'

const LogoDesc = ({onHandleInputChange}) => {

  return (
    <div>
      <HeadingDescription title={Lookup.LogoDescTitle} description={Lookup.LogoDescDesc}/>
        <input className=' border rounded-lg mt-3 p-3 w-full' onChange={(e)=>onHandleInputChange(e.target.value)} type="text" placeholder={Lookup.InputTitlePlaceholder}/>
    </div>
  )
}

export default LogoDesc
