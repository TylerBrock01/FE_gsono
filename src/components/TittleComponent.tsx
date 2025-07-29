export default function TittleComponent ({children} : {children: React.ReactNode}) {
    return(
        <h1 className="animate-slide-in-top flex justify-center text-4xl bg-cyan-700 text-white font-bold capitalize px-4 py-1">{children}</h1>
    )
}