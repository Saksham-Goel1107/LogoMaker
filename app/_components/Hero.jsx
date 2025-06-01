"use client"
import React,{useState} from 'react'
import lookup from '../_data/Lookup'
import Link from 'next/link'

const Hero = () => {
    const [LogoTitle, setLogoTitle] = useState()
return (
    <section
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)',
            padding: '3rem 1rem',
            borderRadius: '1.5rem',
            boxShadow: '0 8px 32px rgba(60, 72, 100, 0.12)',
            margin: '2rem auto',
            maxWidth: '700px',
        }}
    >
        <h1
            style={{
                fontSize: '2.8rem',
                fontWeight: 800,
                color: '#1e293b',
                marginBottom: '1rem',
                textAlign: 'center',
                letterSpacing: '-1px',
            }}
        >
            {lookup.HeroHeading}
        </h1>
        <h2
            style={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#6366f1',
                marginBottom: '1.5rem',
                textAlign: 'center',
            }}
        >
            {lookup.HeroSubheading}
        </h2>
        <p
            style={{
                fontSize: '0.9rem',
                color: 'gray',
                maxWidth: '500px',
                textAlign: 'center',
                lineHeight: 1.6,
            }}
        >
            {lookup.HeroDesc}
        </p>
        <div style={{
            display: 'flex',
            gap: '0.75rem',
            marginTop: '2rem',
            width: '100%',
            justifyContent: 'center'
        }}>
            <input
            onChange={(event)=>setLogoTitle(event?.target.value)}
                placeholder={lookup.InputTitlePlaceholder}
                type="text"
                style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '0.75rem',
                    border: '1px solid #c7d2fe',
                    fontSize: '1rem',
                    width: '260px',
                    outline: 'none',
                    boxShadow: '0 2px 8px rgba(99, 102, 241, 0.06)',
                    transition: 'border 0.2s',
                }}
            />
            <Link href={'/create?title='+LogoTitle}>
            <button
                style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.75rem',
                    background: 'linear-gradient(90deg, #6366f1 0%, #818cf8 100%)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '1rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(99, 102, 241, 0.12)',
                    transition: 'background 0.2s',
                }}
            >
                Get Started
            </button>
            </Link>
        </div>
    </section>
)
}

export default Hero
