import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import { getSortedPostsData } from '../lib/posts';

export default function Home({allPostsData}) {
  return (
    <div home>
      {/* Keep the existing code here */}

      {/* Add this <section> tag below the existing <section> tag */}
      <section >
        <h2 >Blog</h2>
        <ul >
          {
            allPostsData.map(({ id, date, title }) => (
            <li  key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}