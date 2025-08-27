import {Outlet} from "react-router-dom";

export default function profileLayout() {
    return(
        <>
            <div>
                <li>inicio</li>
                <li>favoritos</li>
                <li>desconexion</li>
            </div>
            <div className="bg-sky-200 p-2">
                <Outlet/>
            </div>
        </>
    )
}