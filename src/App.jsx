import { Routes, Route } from "react-router-dom";
import Snowstorm from "./snowstorm/Snowstorm";

export default function App() {
    return <Routes>
        <Route path="/" element={Snowstorm()} />
    </Routes>;
}

// Render updates for free
// Camera positioning and intrinsics for free