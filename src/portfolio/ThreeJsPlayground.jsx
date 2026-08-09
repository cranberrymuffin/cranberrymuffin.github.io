import Navigation from '../navigation/Navigation';
import './portfolio.css';

const demos = [
  {
    title: 'Animation',
    description: 'The cranberry muffin animation featured on the home page.',
    src: '/#/animation',
  },
  {
    title: 'Valentine Heart',
    description:
      'A 3D heart generated from parametric equations, rendered with React Three Fiber.',
    src: 'https://cranberrymuffin.io/valentine/',
  },
  {
    title: 'Snowstorm',
    description:
      'A whack-a-mole-style winter game with real-time falling snow.',
    src: 'https://cranberrymuffin.io/snowstorm/',
  },
];

export default function ThreeJsPlayground() {
  return (
    <div className="portfolio-container">
      <Navigation textColor="linear-gradient(45deg, #ff0099, #ff6600, #ff0099, #6600ff)" />
      <header>
        <h1>Three.js Playground</h1>
        <p>Live three.js and React Three Fiber experiments, embedded below.</p>
      </header>

      <section className="playground">
        {demos.map((demo, index) => (
          <div className="card playground-card" key={index}>
            <h2>{demo.title}</h2>
            <p className="desc">{demo.description}</p>
            <div className="embed-frame">
              <iframe src={demo.src} title={demo.title} loading="lazy" />
            </div>
            <a
              href={demo.src}
              className="btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Fullscreen
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}
