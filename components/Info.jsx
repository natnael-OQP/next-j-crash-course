import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Card from "./Card";

export default function Info() {
    const router = useRouter();
    return (
        <>
            <div className="p-5">
            <div className="flex flex-col max-w-4xl mx-auto">
                <h1 className="display-4 text-5xl text-sky-600 font-base ">Cat World  </h1>
                <p className="text-gray-500 pt-1 text-lg ">Find your next best friend</p>
                <hr className="my-4" />
                <p className='text-gray-600' >
                    It uses utility classNamees for typography and spacing to space
                    content out within the larger container.
                </p>
                <Link href="/cats">
                    <a className="mt-3  flex justify-center w-40 bg-sky-600 px-4 py-2 rounded-md shadow-md shadow-sky-300 text-white " >Start Looking</a>
                </Link>
            </div>
            </div>
        </>
    );
}
