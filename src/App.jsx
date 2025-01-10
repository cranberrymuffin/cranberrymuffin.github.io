import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Experience from './Experience';

export default function App() {
    return <Router>
        <Routes>
            <Route path="/" element={Experience} />
        </Routes>
    </Router>
}

// Render updates for free
// Camera positioning and intrinsics for free