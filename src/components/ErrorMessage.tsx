export default function ErrorMessage ({children} : {children: React.ReactNode}) {
    return(
        <p className='text-red-600 capitalize'>{children}</p>
    )
}