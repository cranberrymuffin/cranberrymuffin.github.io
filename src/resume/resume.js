import Navigation from '../navigation/Navigation';
import './resume.css';

export default function Resume() {
  return (
    <div id="content" className="content">
      <Navigation />
      <div className="resume" id="resume">
        <div className="business-card">
          <h1>✨ Aparna Natarajan ✨</h1>
          <p>Full Stack Developer</p>
          <p>
            <a href="/#/portfolio">Portfolio</a> |{' '}
            <a href="https://www.github.com/cranberrymuffin">GitHub</a> |
            <a href="https://www.linkedin.com/in/aparna-n-569179335/">
              LinkedIn
            </a>
            <br />
            aparnalovestocode@gmail.com
            <br />
            +1 (917) 301-7943
          </p>
        </div>
        <h2> Summary</h2>
        <p>
          Software Engineer with 6+ years of expertise at Meta, Activision, and
          J.P. Morgan. Proficient in scalable systems, cross-platform solutions,
          and UI enhancements. Currently at the Recurse Center working on
          projects available at <a href="/">cranberrymuffin.github.io</a>.
        </p>
        <h2>Professional Experience</h2>
        <h3>Meta</h3>
        <div className="row">
          <h4 className="role">Software Engineer</h4>
          <h4 className="date">May 2022 - Dec 2024</h4>
        </div>
        <ul>
          <li>
            Unlocked independent app updates for 57 apps by designing a
            version-safe Interface Definition Language (IDL) for
            application-level interprocess communication (IPC) on embedded
            Android devices. Developed a Rust library that transpiles IDL
            declarations into data transfer object stubs.
          </li>
          <li>
            Reduced on-call security workload by 40% by designing and developing
            a CI pipeline to automate app permission management.
          </li>
          <li>
            Implemented UI updates for the Facebook Android app, aligning with
            design bets on motion, notifications, post headers, and text
            truncation within Facebook Design Systems.
          </li>
          <li>
            Led the modernization of Facebook's mobile app iconography by
            upgrading asset storage, download, and caching infrastructure used
            across all mobile teams.
          </li>
          <li>
            Managed A/B tests to evaluate design bets, leveraging data-driven
            insights to drive release decisions on front-end changes that
            increased app engagement.
          </li>
        </ul>
        <h3>Activision</h3>
        <div className="row">
          <h4 className="role">Software Engineer (Part-time)</h4>
          <h4 className="date">May 2021 - Dec 2021</h4>
        </div>
        <ul>
          <li>
            Developed and maintained Spring Boot REST APIs to deliver store
            bundles, personalized recommendations, and schedules to the Call of
            Duty companion app.
          </li>
          <li>
            Led cloud services migration from AWS to GCP, optimizing APIs to
            leverage GCP services such as Sharded Redis Cache and Secret
            Manager, enhancing scalability and security.
          </li>
          <li>Implemented cloud-based CI/CD deployment pipelines.</li>
        </ul>
        <h3>J.P. Morgan</h3>
        <div className="row">
          <h4 className="role">Software Engineer</h4>
          <h4 className="date">July 2018 - July 2020</h4>
        </div>
        <ul>
          <li>
            Developed a blue-green deployment pipeline using Cloud Foundry,
            ensuring 100% service availability during releases.
          </li>
          <li>
            Designed and built live trade execution UI with React and MobX.
          </li>
          <li>
            Created Spring Boot REST API to deliver trading data across teams.
          </li>
          <li>
            Developed a CRUD web application to manage and query trading SQL
            database.
          </li>
          <li>
            Integrated FIX messaging for communication between an Asset
            Management trading application and Tradeweb, enabling real-time
            financial transaction data exchange.
          </li>
        </ul>
        <h2>Education</h2>
        <p>
          Masters in Computer Science, Brown University, 2022
          <br />
          Bachelors in Computer Science, University of Maryland, 2018
        </p>
        <h2>Skills</h2>
        <p>
          <strong>Languages:</strong> Java, Kotlin, JavaScript, C++, TypeScript,
          C#, C, Ruby, Python, R, Scala, OCaml, Prolog, Matlab, GoLang, PHP,
          bash, PostgreSQL, Rust, CSS
          <br />
          <strong>Frameworks:</strong> React, Redux, MobX, Spring Boot, Spring
          MVC, Angular.js, WPF, GraphQL, Redis, Angular, Vue.js
          <br />
          <strong>Other:</strong> Android, Git, Jenkins, Cloud Foundry, AWS,
          Heroku, GCP, Kubernetes, Kafka, Node
        </p>
      </div>
    </div>
  );
}
