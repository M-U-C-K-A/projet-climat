import Link from 'next/link'
export default function NotFound() {
    return (
        <div className='min-h-screen items-center justify-center flex flex-col gap-4'>
            <h1 className='text-5xl md:text-5xl tracking-tighter max-w-xl font-regular text-left'>Oooops...</h1>
            <h2 className='text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left'>That page cannot be found.</h2>
            <p className=''>Go back to the <Link href="/" className='text-destructive'>Homepage</Link></p>
        </div>
    )
}