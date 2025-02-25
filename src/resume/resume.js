import './resume.css';

export default function Resume() {
  return (
    <div id="content" className="content">
      <div className="resume" id="resume">
        <div className="business-card">
          <h1>✨ Aparna ✨</h1>
          <p>
            cranberrymuffin.github.io
            <br />
            aparnalovestocode@gmail.com
            <br />
            +1 (917) 301-7943
          </p>
        </div>
        <h2> Summary</h2>
        <p>
          Software Engineer with 5 years of experience with a background in
          mobile and web development. Seeking a (preferably) remote opportunity.
          You can find my work on{' '}
          <a href="/">my website (cranberrymuffin.github.io)</a>.
        </p>
        <h2>Employment</h2>
        <h3>Meta</h3>
        <div className="row">
          <h4 className="role">Software Engineer</h4>
          <h4 className="date">May 2022 - Dec 2024</h4>
        </div>
        <ul>
          <strong>Reality Labs</strong>
          <li>
            Enabled independent app updates for 57 apps running on an embedded
            Android OS by designing new Interface Definition Language (IDL) for
            interprocess communication (IPC) with version-safety guarantees.
          </li>
          <li>
            Replaced default Android OS IPC library with custom Rust library
            which transpiled IDL declarations to Kotlin data transfer object
            stubs.
          </li>
          <li>
            Reduced on-call security workload by 40% by architecting and
            deploying a CI pipeline to automate app permission grants.
          </li>
          <strong>Facebook Design Systems</strong>
          <li>
            Led UI/UX improvements for the Facebook Android app, optimizing
            notifications, post headers, and the text truncation algorithm as
            part of Facebook Design System modernization.
          </li>
          <li>
            Spearheaded a cross-platform iconography update for Facebook
            aligning with brand guidelines and improving visual consistency.
          </li>
          <li>
            Ran A/B tests to optimize front-end changes, using data-driven
            insights to enhance the user interface and boost app engagement.
          </li>
        </ul>
        <h3>Activision Publishing Inc.</h3>
        <div className="row">
          <h4 className="role">Software Engineer</h4>
          <h4 className="date"> May 2021 - December 2021</h4>
        </div>
        <ul>
          <li>
            Developed and maintained Spring Boot applications to deliver store
            bundles, personalized recommendations, and schedules to the Call of
            Duty companion app, integrating JWT authentication and custom
            Jackson Serializers.
          </li>
          <li>
            Led migration from AWS to GCP, optimizing APIs to leverage GCP
            services such as Sharded Redis Cache and Secret Manager, enhancing
            scalability and security.
          </li>
          <li>Set up CI/CD pipelines with ArgoCD and Kubernetes</li>
        </ul>
        <h3>J.P. Morgan Chase &amp; Co.</h3>
        <div className="row">
          <h4 className="role">Software Engineer</h4>
          <h4 className="date"> July 2018 - July 2020</h4>
        </div>
        <ul>
          <li>
            Developed a blue-green deployment pipeline using Cloud Foundry and
            Jenkins, eliminating downtime during deployments and improving
            service availability and customer satisfaction.
          </li>
          <li>
            Designed and built a React.js-based front-end for a live trade
            execution blotter, with state management powered by MobX Reactor
            Core.
          </li>
          <li>
            Created a secure Kotlin REST API using Spring Boot, JDBC, and
            Ehcache to deliver trading data across teams.
          </li>
          <li>
            Developed a CRUD web application with Java Spring Boot, React.js,
            and SQL to manage trading data in Oracle databases.
          </li>
          <li>
            Integrated FIX messaging for communication between an Asset
            Management trading application and Tradeweb, enabling real-time
            financial transaction data exchange.
          </li>
          <li>
            Contributed to the development of a trading application using WPF C#
            and Kotlin, implementing Google Protocol Buffers for efficient data
            serialization between front-end and backend systems.
          </li>
        </ul>
        <h2> Skills</h2>
        <p>
          Java, Kotlin, Javascript, C++, Typescript, C#, C, Ruby, Python, R,
          Scala, OCaml, Assembly, Prolog, Matlab, Go, PHP, y86 Assembly, shell
          scripting, SQL, Rust, React.js, Redux, MobX, Spring Boot, Spring MVC,
          Angular.js, WPF, Android, Git, Jenkins, Cloud Foundry, AWS, Heroku,
          GCP, Kubernetes, Kafka, Node, Node.js, Redis, PostgreSQL, CSS
        </p>
        <h2> Education</h2>
        <p>
          {' '}
          University of Maryland, B.S. Computer Science, 2018
          <br />
          Brown University, M.S. Computer Science, 2022
        </p>
      </div>
    </div>
  );
}
