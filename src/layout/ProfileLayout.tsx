import {Outlet} from "react-router-dom";
import NavBarSm from "../views/component/NavBarSm.tsx";

export default function profileLayout() {
    return(
        <>
            <label className="grid bg-sky-500">
                <img alt='xd' className=' h-15 ' src="https://apps9.itson.edu.mx/CIA/img/ITSON-MARCA.png"/>
            </label>
            <div className="bg-sky-500 p-1 flex gap-1 justify-start  capitalize">
                {NavBarSm()}
            </div>
            <div className="bg-sky-200 p-2">
                <Outlet/>
            </div>
        </>
    )
}