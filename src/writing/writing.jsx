import "./writing.css";

export default function Writing() {
  return (
    <div id="main" className="main">
      <div id="writing" className="writing">
        <h1> Writing </h1>
        <ul>
          <li>
            February 20, 2025:{" "}
            <a href="/#/blog/ascii-art">ASCII Art Generation</a>
          </li>
          <li>
            February 11, 2025:{" "}
            <a href="/#/blog/gemini-akinator">Gemini AI Akinator</a>
          </li>
          <li>
            February 4, 2025:{" "}
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
