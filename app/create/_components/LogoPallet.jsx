"use client"
import React,{useState} from 'react'
import HeadingDescription from '../_components/HeadingDescription'
import Lookup from '@/app/_data/Lookup';
import Colors from '@/app/_data/Colors';

const LogoPallet = ({onHandleInputChange}) => {
  const [SelectedOption, setSelectedOption] = useState()

  return (
    <div className='my-10'>
      <HeadingDescription title={Lookup.LogoColorPaletteTitle} description={Lookup.LogoColorPaletteDesc}/>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-5 mt-5'>
        {Colors.map((pallete, index) => (
          <div key={index} className={`flex p-1 cursor-pointer ${SelectedOption==pallete.name&&'rounded-lg border-destructive border-2'}`}>
            {pallete.colors.map((color, colorIndex) => (
            <div className="h-24 w-full" style={{ backgroundColor: color }} key={colorIndex} onClick={()=>{setSelectedOption(pallete.name);onHandleInputChange(pallete.name)}}>
        
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoPallet;