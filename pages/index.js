import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import Hello from '../components/Hello';

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold text-center text-lime-400">hello</h1>
      <Link href="/about" >
        <a>go to about </a>
      </Link>
      <Hello/>
    </>
  )
}
