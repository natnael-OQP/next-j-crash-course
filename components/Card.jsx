import React from 'react'
import Image from 'next/image'
import Link from "next/link";
import { useRouter } from "next/router";

const Card = ({ name,id, phone, email, image, isFavorite,}) => {
    const router = useRouter();
    const path = router.pathname;
    
    return (
        <Link href={`${path}/${id}`} passHref >
            <article className="bg-white group relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform duration-200">
                <div className="relative max-w-72 h-96 md:h-64 lg:h-44">
                    <Image
                        src={image?.url}
                        className="w-full h-full object-center object-cover" layout="fill"
                        alt={image?.alt}
                        />
                </div>
                <div className="px-3 py-4">
                    <h3 className=" flex justify-between text-sm text-gray-500 pb-2">
                        <a className="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
                            <span className="absolute inset-0"></span>
                            {name}
                        </a>
                        <a className="bg-indigo-600 py-1 px-2 text-white rounded-lg" href="#">
                            <span className="absolute inset-0"></span>
                            {phone}
                        </a>
                    </h3>
                    <h1 className="bg-indigo-600 py-1 px-2 text-white rounded-lg" >{email}</h1>
                    <p className="text-base font-semibold text-gray-900 group-hover:text-indigo-600">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </article>
        </Link>
    )
}

export default Card
