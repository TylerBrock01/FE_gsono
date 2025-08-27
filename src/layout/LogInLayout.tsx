import {Outlet} from "react-router-dom";

export default function LogInLayout() {
    return(
        <>
            <div className="bg-sky-500 py-30 md:py-40">
                <Outlet/>
            </div>
        </>
    )
}