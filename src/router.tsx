import { BrowserRouter, Routes, Route} from  'react-router-dom'
import LogIn from "./views/LogIn.tsx";
import LogInLayout from "./layout/LogInLayout.tsx";
import TestView from "./views/TestView.tsx";
import ProfileLayout from "./layout/ProfileLayout.tsx";
import HomeView from "./views/HomeView.tsx";

export default function  Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<LogInLayout />}>
                    <Route path="/" element={<LogIn />} />
                    <Route path="/test" element={<TestView/>} />
                </Route>
            </Routes>
            <Routes>
                <Route element={<ProfileLayout />}>
                    <Route path='/home' element={<HomeView/>} />
                </Route>
            </Routes>
        </BrowserRouter>
        )
}