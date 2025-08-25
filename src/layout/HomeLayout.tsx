import {Outlet} from "react-router-dom";

export default function HomeLayout() {
    return(
        <>
            <h1>Home Log in</h1>
            <div>
                <Outlet/>
            </div>
        </>
    )
}