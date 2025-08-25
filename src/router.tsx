import { BrowserRouter, Routes, Route} from  'react-router-dom'
import LogIn from "./views/LogIn.tsx";
import HomeLayout from "./layout/HomeLayout.tsx";
import TestView from "./views/TestView.tsx";

export default function  Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<HomeLayout />}>
                    <Route path="/" element={<LogIn />} />
                    <Route path='/test' element={<TestView/>} />
                </Route>
            </Routes>
        </BrowserRouter>
        )
}