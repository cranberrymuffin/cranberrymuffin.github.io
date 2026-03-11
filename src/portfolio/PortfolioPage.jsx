import './portfolio.css';
import Navigation from '../navigation/Navigation'; // Import the Navigation component

const projects = [
  {
    title: 'Path Recorder',
    description: 'An iOS app that tracks and visualizes your foot paths.',
    projectLink: 'https://apps.apple.com/us/app/pathrecorder/id6749169358',
    codeLink: 'https://github.com/cranberrymuffin/PathRecorder', // Replace with your code repo link
    blogLink: '/#/blog/path-recorder',
  },
];

export default function PortfolioPage() {
  return (
    <div className="portfolio-container">
      <Navigation textColor="linear-gradient(45deg, #ff0099, #ff6600, #ff0099, #6600ff)" />
      <header>
        <h1>Aparna Natarajan</h1>
        <p>Full Stack Developer</p>
      </header>

      <section className="portfolio">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h2>{project.title}</h2>
            <p className="desc">{project.description}</p>
            <div className="button-row">
              {project.codeLink && (
                <a href={project.codeLink} className="btn">
                  Code
                </a>
              )}
              {project.projectLink && (
                <a href={project.projectLink} className="btn">
                  Demo
                </a>
              )}
              {project.blogLink && (
                <a href={project.blogLink} className="btn">
                  Blog
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
