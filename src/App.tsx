import './App.css'
import RoutingModule from "./components/routing-module/RoutingModule.tsx";
import Homepage from "./pages/homepage/Homepage.tsx";
import {Route, Routes} from "react-router-dom";
import About from "./pages/about/About.tsx";
import GamePage from "./pages/play/GamePage.tsx";

function App() {

    return (
        <>
            <RoutingModule/>
            <Routes>
                <Route path={'/'} element={<Homepage/>} />
                <Route path={'/about'} element={<About/>} />
                <Route path={'/play'} element={<GamePage/>} />
            </Routes>
        </>
    )
}

export default App
