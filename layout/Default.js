import React from 'react'
import NaveBar from '../components/NaveBar'

const Default = ({children}) => {
    return (
        <>
            <NaveBar />
            <main>{children}</main>
        </>
    )
}

export default Default
