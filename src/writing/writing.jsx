import Navigation from '../navigation/Navigation';
import { ListReadCount, useBlogReadCounts } from '../analytics/goatcounter';
import './writing.css';

const POSTS = [
  {
    date: 'July 18, 2026',
    path: '/blog/get-up',
    title: 'What I Learned From Getting Knocked Down',
  },
  {
    date: 'May 13, 2026',
    path: '/blog/dog-linkedin',
    title: 'My Dog Is #OpenToWork',
  },
  {
    date: 'July 29, 2025',
    path: '/blog/path-recorder',
    title: 'Building my first iOS app: Path Recorder',
  },
  { date: 'March 2, 2025', path: '/blog/json-validator', title: 'Json Parser' },
  {
    date: 'February 20, 2025',
    path: '/blog/ascii-art',
    title: 'ASCII Art Generation',
  },
  {
    date: 'February 11, 2025',
    path: '/blog/gemini-akinator',
    title: 'Gemini AI Akinator',
  },
  {
    date: 'February 4, 2025',
    path: '/blog/tic-tac-toe',
    title: 'WebRTC Tic-Tac-Toe',
  },
  { date: 'January 30, 2025', path: '/blog/valentine', title: 'Valentine' },
  { date: 'January 27, 2025', path: '/blog/snowstorm', title: 'Snowstorm' },
];

export default function Writing() {
  const counts = useBlogReadCounts();

  return (
    <div id="main" className="main">
      <Navigation />
      <div id="writing" className="writing">
        <h1> Writing </h1>
        <ul>
          {POSTS.map(post => (
            <li key={post.path}>
              {post.date} · <a href={`/#${post.path}`}>{post.title}</a>
              <ListReadCount counts={counts} path={post.path} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
