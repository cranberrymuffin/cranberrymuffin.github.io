import { Routes, Route } from "react-router-dom";
import Snowstorm from "./snowstorm/Snowstorm";
import Resume from "./resume/resume";
import GameIntro from "./tic-tac-toe/GameIntro";
import Home from "./home/Home";
import Valentines from "./valentines/Valentines";

export default function App() {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/tic-tac-toe/:shareCode?" element={<GameIntro />} />
        <Route path="/snowstorm" element={<Snowstorm />} />
        <Route path="/valentines" element={<Valentines />} />
    </Routes>;
}