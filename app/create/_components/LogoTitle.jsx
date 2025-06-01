"use client"
import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import { useSearchParams } from 'next/navigation'

const LogoTitle = ({onHandleInputChange}) => {
    const searchParams = useSearchParams()
    const [Title, setTitle] = React.useState(searchParams?.get("title")??'')
return (
    <div className=" mb-4 p-10 rounded-xl 2xl:mx-72">
        <HeadingDescription
            title={Lookup?.LogoTitle}
            description={Lookup.LogoTitleDesc}
        />
        <input className=' border rounded-lg mt-3 p-3 w-full' onChange={(e)=>onHandleInputChange(e.target.value)} defaultValue={Title} type="text" placeholder={Lookup.InputTitlePlaceholder}/>
    </div>
)
}

export default LogoTitle
