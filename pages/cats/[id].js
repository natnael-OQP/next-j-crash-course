import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image'
const CatDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [cat, setCat] = useState(null);
    const fetchCat = async () => await axios.get(`/api/cats/${id}`).then(({data}) => setCat(data))
    
    useEffect(() => {
        fetchCat();
    }, []);
    
    return (
        <>
            {cat && (
                <div className="mt-4 max-w-5xl mx-auto grid grid-cols-2 gap-5 " >
                    <div className='relative ' >
                        <Image objectFit='cover' layout='fill' src={cat?.image?.url} alt={cat?.image?.alt} />
                    </div>
                    <div className="">
                        <h1 className="text-blue-500 text-xl py-2" >{cat.name}</h1>
                        <p>{cat.description} </p>
                    </div>
                </div>
            )}
        </>
    )
}



export default CatDetail;
