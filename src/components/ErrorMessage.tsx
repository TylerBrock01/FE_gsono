export default function ErrorMessage ({children}) {
    return(
        <div>
            <h1 className='text-red-600'>{children}</h1>
        </div>
    )
}