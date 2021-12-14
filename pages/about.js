import Link from 'next/link';

const about = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center text-indigo-600" >about</h1>
            <Link href="/" >
                <a>go to home </a>
            </Link>
        </div>
        
    )
}

export default about

