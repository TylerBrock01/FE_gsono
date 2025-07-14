export default function ErrorMessage ({children}) {
    return(
        <div>
            <h1 className='text-red-600 capitalize'>{children}</h1>
        </div>
    )
}