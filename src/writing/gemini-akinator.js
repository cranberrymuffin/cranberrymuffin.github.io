import "./writing.css";

export default function GeminiAkinator() {
  return (
    <div id="blog" className="blog">
      <div id="writing" className="writing">
        <h1>My Gemini AI Powered Akinator Game</h1>
        <i>
          First published <time datetime="2025-02-11">Feb 11, 2025</time>.
        </i>
        <p>
          This app combines a powerful backend, a smooth frontend, and AI to
          create an interactive experience. Here's an overview of the tech
          stack:
        </p>

        <h2>1. React Frontend, Node Backend, and Express Delivery</h2>
        <p>
          The frontend of the app is built using <strong>React</strong>,
          providing a dynamic and responsive user interface. The React app is
          bundled into static files using <strong>npm build</strong>, compiling
          the app for production.
        </p>
        <p>
          The <strong>Node.js</strong> backend, with the help of the{" "}
          <strong>Express</strong> framework, serves these static files. The
          backend’s primary role is to handle communication with the{" "}
          <strong>Gemini AI API</strong>, acting as an intermediary to forward
          requests from the frontend to the API and sending the AI’s responses
          back to the frontend. The static React files are served by the backend
          via <code>node server.js</code>.
        </p>
        <p>
          You can view the React app’s main component here:{" "}
          <a
            href="https://github.com/cranberrymuffin/akinator-app/blob/main/src/App.jsx"
            target="_blank"
          >
            App.jsx on GitHub
          </a>
          .
        </p>
        <p>
          The process of bundling the React app for production and serving it
          through Express allows for a seamless delivery of both the frontend
          and backend in one unified app.
        </p>
        <p>
          You can check out the server code here:{" "}
          <a
            href="https://github.com/cranberrymuffin/akinator-app/blob/main/server.js"
            target="_blank"
          >
            server.js on GitHub
          </a>
          .
        </p>

        <h2>2. Disco Hosting</h2>
        <p>
          To host both the frontend and backend, I use <strong>Disco</strong>, a
          reliable platform for deploying full-stack applications.{" "}
          <strong>Disco</strong> provides an efficient environment for serving
          both the static files (generated from the React app) and the Express
          backend.
        </p>
        <p>
          The app’s deployment is managed with <strong>Docker</strong>. The{" "}
          <strong>Dockerfile</strong> automates the process by:
        </p>
        <ul>
          <li>
            Running <code>npm build</code> to generate the production-ready
            static files for the frontend.
          </li>
          <li>
            Serving these static files through the{" "}
            <strong>Express server</strong> using <code>node server.js</code>.
          </li>
          <li>
            Hosting the entire app on <strong>Disco</strong>, ensuring it’s
            scalable, fast, and reliable.
          </li>
        </ul>
        <p>
          Additionally, the <strong>server</strong> I’m using to run this app is
          a <strong>Raspberry Pi</strong> located at the{" "}
          <strong>Recurse Center</strong>. The setup allows for a powerful
          development environment while running on minimal hardware.
        </p>
        <p>
          You can view the{" "}
          <a href="https://docs.letsdisco.dev/" target="_blank">
            Disco documentation
          </a>{" "}
          for more details about how the hosting platform works and how I
          integrated it into my project.
        </p>
        <p>
          You can also view the Dockerfile here:{" "}
          <a
            href="https://github.com/cranberrymuffin/akinator-app/blob/main/Dockerfile"
            target="_blank"
          >
            Dockerfile on GitHub
          </a>
          .
        </p>

        <h2>3. Gemini AI Chat Conversation API</h2>
        <p>
          At the heart of the app is the <strong>Gemini API</strong> by Google,
          which powers the AI's ability to ask smart yes/no questions and
          process the user's answers. The <strong>Gemini API</strong> leverages
          advanced text generation to create dynamic and relevant questions that
          make the game feel interactive and engaging.
        </p>
        <p>
          Specifically, I’m utilizing the <strong>Chat</strong> feature of the
          Gemini API. The <strong>create a chat</strong> section of the
          documentation enables me to establish a conversation flow where the AI
          interacts with the user based on previous responses. This allows the
          AI to adjust its questions dynamically and refine the process of
          guessing what the user is thinking.
        </p>
        <p>
          For more details on the Gemini API’s{" "}
          <strong>chat functionality</strong>, check out the{" "}
          <a
            href="https://ai.google.dev/gemini-api/docs/text-generation?lang=node#chat"
            target="_blank"
          >
            create a chat section in the documentation
          </a>
          .
        </p>
      </div>
    </div>
  );
}
