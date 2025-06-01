import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'

const LogoDesc = ({onHandleInputChange, formData}) => {
  return (
    <div>
      <HeadingDescription title={Lookup.LogoDescTitle} description={Lookup.LogoDesc}/>
      <input 
        value={formData?.desc || ''} 
        className='border rounded-lg mt-3 p-3 w-full' 
        onChange={(e) => onHandleInputChange(e.target.value)} 
        type="text" 
        placeholder="Describe your logo vision..."
      />
    </div>
  )
}

export default LogoDesc
