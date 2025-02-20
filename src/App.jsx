import { Routes, Route } from "react-router-dom";
import Snowstorm from "./snowstorm/Snowstorm";
import Resume from "./resume/resume";
import GameIntro from "./tic-tac-toe/GameIntro";
import Home from "./home/Home";
import Valentines from "./valentines/Valentines";
import Writing from "./writing/writing";
import ValentineBlogPost from "./writing/valentine";
import TicTacToeBlogPost from "./writing/tic-tac-toe";
import SnowstormBlogPost from "./writing/snowstorm";
import MuffinsBlogPost from "./writing/muffins";
import GeminiAkinator from "./writing/gemini-akinator";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/snowstorm" element={<Snowstorm />} />
      <Route path="/valentine" element={<Valentines />} />
      <Route path="/blog" element={<Writing />} />
      <Route path="/blog/valentine" element={<ValentineBlogPost />} />
      <Route path="/blog/tic-tac-toe" element={<TicTacToeBlogPost />} />
      <Route path="/blog/muffins" element={<MuffinsBlogPost />} />
      <Route path="/blog/Snowstorm" element={<SnowstormBlogPost />} />
      <Route path="/blog/gemini-akinator" element={<GeminiAkinator />} />
    </Routes>
  );
}
