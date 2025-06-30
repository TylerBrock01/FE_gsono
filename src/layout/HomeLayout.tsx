import {Outlet} from "react-router-dom";

export default function HomeLayout() {
    return (
        <>
            <div className='bg-slate-800 min-h-screen'>
                <h1 className='bg-gray-400'>header 1</h1>
                <div className=''>
                    <Outlet/>
                </div>
            </div>

        </>
    )
}