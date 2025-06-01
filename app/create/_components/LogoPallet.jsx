"use client"
import React, { useState, useEffect } from 'react'
import HeadingDescription from '../_components/HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Colors from '@/app/_data/Colors'

const LogoPallet = ({ onHandleInputChange, formData }) => {
  const [selectedOption, setSelectedOption] = useState(formData?.pallete || '')

  useEffect(() => {
    if (formData?.pallete) {
      setSelectedOption(formData.pallete)
    }
  }, [formData?.pallete])

  const handleSelection = (pallete) => {
    setSelectedOption(pallete.name)
    onHandleInputChange(pallete.name)
  }

  return (
    <div className='my-10'>
      <HeadingDescription 
        title={Lookup.LogoColorPatetteTitle} 
        description={Lookup.LogoCotorPatetteDesc}
      />
      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-5'>
        {Colors.map((pallete, index) => (
          <div 
            key={index} 
            className={`flex p-1 cursor-pointer ${selectedOption === pallete.name ? 'rounded-lg border-destructive border-2' : ''}`}
            onClick={() => handleSelection(pallete)}
          >
            {pallete.colors.map((color, colorIndex) => (
              <div 
                className="h-24 w-full" 
                style={{ backgroundColor: color }} 
                key={colorIndex}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoPallet