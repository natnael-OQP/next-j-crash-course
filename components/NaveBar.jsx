import React from 'react'
import { useRouter } from "next/router";

const NaveBar = () => {
    const router = useRouter()
    return (
        <div className='h-14 w-full bg-gray-100 flex items-center  ' >
            <h1 className="text-xl font-bold  text-sky-600 cursor-pointer" onClick={() => router.push('/')} >Hello Compo</h1>
        </div>
    )
}

export default NaveBar
