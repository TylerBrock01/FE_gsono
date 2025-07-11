import { BrowserRouter, Routes, Route} from  'react-router-dom'
import Home from "./views/Home.tsx";
import About from "./views/About.tsx";
import HomeLayout from "./layout/HomeLayout.tsx";
import Register from "./views/Register.tsx";

export default function  Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<HomeLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/register" element={<Register />} />

                </Route>
            </Routes>
        </BrowserRouter>
        )
}