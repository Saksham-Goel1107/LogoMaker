import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Header = () => {
return (
    <header className="bg-white shadow-md px-6 lg:px-24 xl:px-40 2xl:px-56 py-4 flex justify-between items-center">
        <Link href='/'>
        <div className="flex items-center gap-3">
            <Image
                src="/logo.png"
                alt="Logo"
                width={48}
                height={48}
                className="rounded-lg"
                priority
            />
            <span className="text-xl font-bold text-gray-800 tracking-tight">LogoMaker</span>
        </div>
        </Link>
        <Link href='/create'>
        <Button className="cursor-pointer px-6 py-2 text-base font-semibold shadow transition-colors ">
            Get Started
        </Button>
        </Link>
    </header>
)
}

export default Header
