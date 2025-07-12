import { BrowserRouter, Routes, Route} from  'react-router-dom'
import HomeView from "./views/HomeView.tsx";
import AboutView from "./views/AboutView.tsx";
import HomeLayout from "./layout/HomeLayout.tsx";
import RegisterView from "./views/RegisterView.tsx";

export default function  Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<HomeLayout />}>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/about" element={<AboutView />} />
                    <Route path="/register" element={<RegisterView />} />
                </Route>
            </Routes>
        </BrowserRouter>
        )
}