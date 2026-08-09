import Navigation from '../navigation/Navigation';
import './portfolio.css';

const demos = [
  {
    title: '3D Physics Animation',
    description:
      'My cranberrymuffin displayname featured on the home page with gravity.',
    src: '/#/animation',
  },
  {
    title: 'Parametric Meshes',
    description:
      'A 3D heart generated from parametric equations, rendered with React Three Fiber.',
    src: 'https://cranberrymuffin.io/valentine/',
    blogLink: '/#/blog/valentine',
    codeLink: 'https://github.com/cranberrymuffin/valentine',
  },
  {
    title: 'My first game: Snowstorm',
    description: 'A whack-a-mole-style christmas themed game.',
    src: 'https://cranberrymuffin.io/snowstorm/',
    blogLink: '/#/blog/snowstorm',
    codeLink: 'https://github.com/cranberrymuffin/snowstorm',
  },
];

export default function ThreeJsPlayground() {
  return (
    <div className="portfolio-container">
      <Navigation textColor="linear-gradient(45deg, #ff0099, #ff6600, #ff0099, #6600ff)" />
      <header>
        <h1>React Three Fiber Playground</h1>
        <p>Live React Three Fiber experiments, embedded below.</p>
      </header>

      <section className="playground">
        {demos.map((demo, index) => (
          <div className="card playground-card" key={index}>
            <h2>{demo.title}</h2>
            <p className="desc">{demo.description}</p>
            <div className="embed-frame">
              <iframe src={demo.src} title={demo.title} loading="lazy" />
            </div>
            <div className="button-row">
              <a
                href={demo.src}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open
              </a>
              {demo.blogLink && (
                <a href={demo.blogLink} className="btn">
                  Blog
                </a>
              )}
              {demo.codeLink && (
                <a
                  href={demo.codeLink}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
