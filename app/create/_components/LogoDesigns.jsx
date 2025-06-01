"use client"
import React, { useState, useEffect } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Image from 'next/image'
import LogoDesign from '@/app/_data/LogoDesign'

const LogoDesigns = ({ onHandleInputChange, formData }) => {
  const [selectedOption, setSelectedOption] = useState(formData?.design?.title || '')

  useEffect(() => {
    if (formData?.design?.title) {
      setSelectedOption(formData.design.title)
    }
  }, [formData?.design?.title])

  const handleSelection = (design) => {
    setSelectedOption(design.title)
    onHandleInputChange(design)
  }

  return (
    <div>
      <HeadingDescription 
        title={Lookup.LogoDesignTitle} 
        description={Lookup.LogoDesignDesc}
      />
      <div className='grid grid-cols-2 md:grid-cols-3'>
        {LogoDesign.map((design, index) => (
          <div
            key={index}
            className={`ml-3 mt-5 ${selectedOption === design.title ? 'rounded-lg border-destructive border-2' : ''}`}
            onClick={() => handleSelection(design)}
          >
            <Image 
              src={design.image} 
              alt={design.title} 
              width={300} 
              height={200} 
              className='w-full rounded-xl h-[150px] object-cover cursor-pointer'
            />
            <p className='font-semibold text-center'>{design.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoDesigns
