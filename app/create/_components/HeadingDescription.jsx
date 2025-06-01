import React from 'react'

const HeadingDescription = ({ title, description }) => {
    return (
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>{title}</h2>
            <p style={{ color: '#555', fontSize: '1.1rem', marginTop: '0.5rem' }}>{description}</p>
        </div>
    )
}

export default HeadingDescription
