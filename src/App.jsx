import { Routes, Route } from "react-router-dom";
import Snowstorm from "./snowstorm/Snowstorm";
import Resume from "./resume/resume";
import TicTacToe from "./tic-tac-toe/tic-tac-toe";
import TwoPlayerGame from "./tic-tac-toe/TwoPlayerGame";
export default function App() {
    return <Routes>
        <Route path="/" element={Snowstorm()} />
        <Route path="/resume" element ={Resume()} />
        <Route path="/tic-tac-toe" element ={TwoPlayerGame()} />
    </Routes>;
}

// Render updates for free
// Camera positioning and intrinsics for free