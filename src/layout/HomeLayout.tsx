import {Outlet} from "react-router-dom";

export default function HomeLayout() {
    return(
        <>
            {/*<h1 className='bg-sky-500'>Home Log in</h1>*/}
            <div className="bg-sky-500 py-30">
                <Outlet/>
            </div>
        </>
    )
}