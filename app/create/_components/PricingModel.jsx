"use client"
import React, { useEffect } from 'react'
import HeadindDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { SignIn, SignInButton, useUser } from '@clerk/clerk-react'

const PricingModel = ({ formdata }) => {
    const { user } = useUser()
    useEffect(() => {
        if (formdata?.title && typeof window !== 'undefined') {
            localStorage.setItem('formdata', JSON.stringify(formdata))
        }
    }, [formdata])
    return (
        <div className='my-10'>
            <HeadindDescription title={Lookup.LogoPricingModelTitle} description={Lookup.LogoPricingModelDesc} />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                {Lookup.pricingOption.map((pricing, index) => (
                    <div key={index} className='flex flex-col items-center p-5 border rounded-xl mt-5'>
                        <Image src={pricing.icon} alt={pricing.title} width={60} height={60} />
                        <h2 className='font-medium text-2xl'>{pricing.title}</h2>
                        <div className='h-[7rem] mt-3 mb-2'>
                            {pricing.features.map((feature, idx) => (
                                <h2 key={idx} className='text-gray-500'>{feature}</h2>
                            ))}
                        </div>
                        {user ?
                            <Button className='mt-5 py-2.5 px-3 rounded-4xl font-bold'>{pricing.button}</Button>
                            : <SignInButton mode='modal' forceRedirectUrl={'/generate-logo?type='+pricing.title}>
                                <Button className='mt-5 py-2.5 px-3 rounded-4xl font-bold'>{pricing.button}</Button>
                            </SignInButton >}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PricingModel
