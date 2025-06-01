"use client"
import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import { useSearchParams } from 'next/navigation'

const LogoTitle = ({onHandleInputChange, formData}) => {
    const searchParams = useSearchParams()
    const [title, setTitle] = React.useState(formData?.title || searchParams?.get("title") || '')

    React.useEffect(() => {
        if (formData?.title) {
            setTitle(formData.title)
        }
    }, [formData?.title])

    const handleChange = (e) => {
        const value = e.target.value
        setTitle(value)
        onHandleInputChange(value)
    }

    return (
        <div className="mb-4 p-10 rounded-xl 2xl:mx-72">
            <HeadingDescription
                title={Lookup?.LogoTitle}
                description={Lookup.LogoTitleDesc}
            />
            <input 
                className='border rounded-lg mt-3 p-3 w-full' 
                onChange={handleChange}
                value={title}
                type="text" 
                placeholder={Lookup.InputTitlePlaceholder}
            />
        </div>
    )
}

export default LogoTitle
