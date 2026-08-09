import './portfolio.css';
import Navigation from '../navigation/Navigation'; // Import the Navigation component

const projects = [
  {
    title: 'Path Recorder',
    description: 'An iOS app that tracks and visualizes your foot paths.',
    links: [
      {
        label: 'Download',
        href: 'https://apps.apple.com/us/app/pathrecorder/id6749169358',
      },
      {
        label: 'Code',
        href: 'https://github.com/cranberrymuffin/PathRecorder',
      },
      { label: 'Blog', href: '/#/blog/path-recorder' },
    ],
  },
  {
    title: 'React Three Fiber Playground',
    description:
      'A collection of React Three Fiber experiments, embedded and ready to try live.',
    links: [{ label: 'View Playground', href: '/#/three-js-playground' }],
  },
  {
    title: 'Animal Emoji Chrome Extension',
    description:
      'A chrome extension that replaces animal names with their corresponding emojis across webpages.',
    links: [
      {
        label: 'Download',
        href: 'https://chromewebstore.google.com/detail/emojizoo/lcjbmbipfajbefepfpfoogancikbeack',
      },
      {
        label: 'Code',
        href: 'https://github.com/cranberrymuffin/zoo-emoji-extension',
      },
    ],
  },
  {
    title: 'WebRTC Video Chat',
    description: `WebRTC two person video chat app built with React and PeerJS.`,
    projectLink: '/peerjs-video-chat/',
    codeLink: 'https://github.com/cranberrymuffin/peerjs-video-chat',
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
              {project.links ? (
                project.links.map((link, linkIndex) => (
                  <a href={link.href} className="btn" key={linkIndex}>
                    {link.label}
                  </a>
                ))
              ) : (
                <>
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
                </>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
