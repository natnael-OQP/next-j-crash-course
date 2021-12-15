import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import Card from '../../components/Card';
import {fetcher } from '../../fetchData/axios' 

export default function Home() {
    const { data, error } = useSWR('/api/user', fetcher);
    if (!data) {
        return <h1>loading...</h1>
    }
    return (
    <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            {
                data?.map((cat) => (
                    <Card
                        key={cat.id}
                        name={cat.name}
                        id={cat.id}
                        phone={cat.phone}
                        email={cat.email}
                        description={cat.description}
                        image={{ url: cat?.image?.url, alt: cat?.image?.alt }}
                        isFavorite={cat.favoured}
                    />
                ) )
            }
    </section>
    )
}


