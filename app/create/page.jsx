"use client"
import React from 'react'
import LogoTitle from './_components/LogoTitle'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import LogoDesc from './_components/LogoDesc'
import LogoPallet from './_components/LogoPallet'
import LogoIdea from './_components/LogoIdea'
import LogoDesigns from './_components/LogoDesigns'

const CreateLogo = () => {
  const [Step, setStep] = React.useState(1)
  const [formData, setformData] = React.useState({
    title: '',
    desc: '',
    pallete: '',
    design: '',
    idea: ''
  })

  const onHandleInputChange = (field, value) => {
    setformData(prev => {
      const updated = {
        ...prev,
        [field]: value
      }
      console.log('Updated formData:', updated)
      return updated
    })
  }

  return (
    <div>
      <div className="rounded-lg border p-10 flex flex-col justify-center mt-5">
        {Step == 1 ?
          <LogoTitle onHandleInputChange={(v) => onHandleInputChange('title', v)} formData={formData}/> : 
         Step == 2 ? 
          <LogoDesc onHandleInputChange={(v) => onHandleInputChange('desc', v)} formData={formData}/> : 
         Step == 3 ? 
          <LogoPallet onHandleInputChange={(v) => onHandleInputChange('pallete', v)} formData={formData}/> : 
         Step == 4 ? 
          <LogoDesigns onHandleInputChange={(v) => onHandleInputChange('design', v)} formData={formData}/> : 
         Step == 5 ? 
          <LogoIdea onHandleInputChange={(v) => onHandleInputChange('idea', v)} formData={formData}/> : 
         null
        }
        <div className='flex items-center justify-between gap-4 border-t pt-4'>
          {Step != 1 && <Button onClick={() => setStep(Step - 1)} variant='outline' className="flex items-center cursor-pointer"><ArrowLeft className="mr-2 h-4 w-4" />Previous</Button>}
          <Button onClick={() => setStep(Step + 1)} className="flex items-center cursor-pointer">Continue<ArrowRight /></Button>
        </div>
      </div>
    </div>
  )
}

export default CreateLogo
