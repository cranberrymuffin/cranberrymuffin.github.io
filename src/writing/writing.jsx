import Navigation from '../navigation/Navigation';
import './writing.css';

export default function Writing() {
  return (
    <div id="main" className="main">
      <Navigation />
      <div id="writing" className="writing">
        <h1> Writing </h1>
        <ul>
          <li>
            July 29, 2025:{' '}
            <a href="/#/blog/path-recorder">
              Building my first iOS app: Path Recorder
            </a>
          </li>
          <li>
            March 2, 2025: <a href="/#/blog/json-validator">Json Parser</a>
          </li>
          <li>
            February 20, 2025:{' '}
            <a href="/#/blog/ascii-art">ASCII Art Generation</a>
          </li>
          <li>
            February 11, 2025:{' '}
            <a href="/#/blog/gemini-akinator">Gemini AI Akinator</a>
          </li>
          <li>
            February 4, 2025:{' '}
            <a href="/#/blog/tic-tac-toe">WebRTC Tic-Tac-Toe</a>
          </li>
          <li>
            January 30, 2025: <a href="/#/blog/valentine">Valentine</a>
          </li>
          <li>
            January 27, 2025: <a href="/#/blog/snowstorm">Snowstorm</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
