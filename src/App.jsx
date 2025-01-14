import { Routes, Route } from "react-router-dom";
import Snowstorm from "./snowstorm/Snowstorm";
import Resume from "./resume/resume";
export default function App() {
    return <Routes>
        <Route path="/" element={Snowstorm()} />
        <Route path="/resume" element ={Resume()} />
    </Routes>;
}

// Render updates for free
// Camera positioning and intrinsics for free