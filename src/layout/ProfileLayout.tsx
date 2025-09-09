import {Outlet} from "react-router-dom";
import NavBarSm from "../views/component/NavBarSm.tsx";

export default function profileLayout() {
    return(
        <>
            <div className="grid">
                <label className="grid bg-sky-500">
                    <img alt='xd' className=' h-15 ' src="https://apps9.itson.edu.mx/CIA/img/ITSON-MARCA.png"/>
                </label>
                <div className="bg-sky-500 flex gap-1 justify-start md:justify-end  capitalize">
                    <div className="flex gap-1">
                        {NavBarSm()}
                    </div>
                </div>
            </div>
            <div className="bg-sky-200 p-2">
                <Outlet/>
            </div>
        </>
    )
}