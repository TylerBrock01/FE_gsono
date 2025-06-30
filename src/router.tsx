import { BrowserRouter, Routes, Route} from  'react-router-dom'
import Home from "./views/Home.tsx";
import About from "./views/About.tsx";
import HomeLayout from "./layout/HomeLayout.tsx";

export default function  Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<HomeLayout />}>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
        )
}