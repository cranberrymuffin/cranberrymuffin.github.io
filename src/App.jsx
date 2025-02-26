import { Routes, Route } from 'react-router-dom';
import Resume from './resume/resume';
import Home from './home/Home';
import Writing from './writing/writing';
import ValentineBlogPost from './writing/valentine';
import TicTacToeBlogPost from './writing/tic-tac-toe';
import SnowstormBlogPost from './writing/snowstorm';
import MuffinsBlogPost from './writing/muffins';
import GeminiAkinator from './writing/gemini-akinator';
import AsciiArtBlogPost from './writing/ascii';
import PortfolioPage from './home/PortfolioPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/blog" element={<Writing />} />
      <Route path="/blog/valentine" element={<ValentineBlogPost />} />
      <Route path="/blog/tic-tac-toe" element={<TicTacToeBlogPost />} />
      <Route path="/blog/muffins" element={<MuffinsBlogPost />} />
      <Route path="/blog/Snowstorm" element={<SnowstormBlogPost />} />
      <Route path="/blog/gemini-akinator" element={<GeminiAkinator />} />
      <Route path="/blog/ascii-art" element={<AsciiArtBlogPost />} />
    </Routes>
  );
}
