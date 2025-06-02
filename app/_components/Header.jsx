"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'

const Header = () => {
    const {user} = useUser()
    return (
        <header className="bg-white shadow-md px-6 lg:px-24 xl:px-40 2xl:px-56 py-4 flex justify-between items-center">
            <Link href="/">
                <div className="flex items-center gap-3">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={48}
                        height={48}
                        className="rounded-lg"
                        priority
                    />
                    <span className="text-2xl font-extrabold text-gray-900 tracking-tight">LogoMaker</span>
                </div>
            </Link>
            <div className="flex items-center gap-6">
                {user ? (
                    <Link href="/create">
                        <Button variant="outline" className="px-5 py-2 text-base font-medium rounded-lg hover:bg-gray-100 transition-colors">
                            Dashboard
                        </Button>
                    </Link>
                ) : (
                    <Link href="/create">
                        <Button className="px-6 py-2 text-base font-semibold rounded-lg">
                            Get Started
                        </Button>
                    </Link>
                )}
                <div className="ml-4">
                    <UserButton />
                </div>
            </div>
        </header>
    )
}

export default Header
