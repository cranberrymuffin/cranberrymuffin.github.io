import Navigation from '../navigation/Navigation';
import './writing.css';

export default function DogLinkedInBlogPost() {
  return (
    <div id="main" className="main">
      <Navigation />
      <div id="writing" className="writing">
        <h1>
          My Dog Is <a href="/#/linkedin/dog">#OpenToWork</a>
        </h1>
        <i>
          First published <time dateTime="2026-05-13">May 13, 2026</time>.
        </i>
        <p>
          I find social media overwhelming. Because of that, I'm not really on
          any platforms except LinkedIn.
        </p>
        <p>
          Even so, I end up hibernating LinkedIn for weeks or months at a time
          when it starts to feel like too much.
        </p>
        <p>
          It's hard to fully step away from it. Even though LinkedIn is just
          another social media platform, it's also used professionally — which
          makes it difficult to delete or ignore entirely.
        </p>
        <p>
          You still need some version of it to participate in professional life.
          Most recently I needed one to attend a{' '}
          <a
            href="https://partiful.com/e/uaMJVd3xreNGjfWDdiUF"
            target="_blank"
            rel="noreferrer"
          >
            hackathon
          </a>{' '}
          at{' '}
          <a href="https://nytechweek.com" target="_blank" rel="noreferrer">
            #NYTechWeek
          </a>
          .
        </p>
        <p>
          So when people ask for my LinkedIn, I sometimes just send{' '}
          <a href="/#/linkedin">my fake one</a> instead.
        </p>
        <h2>
          My dog's <a href="/#/linkedin/dog">LinkedIn</a>
        </h2>
        <p>
          Loretta is my dog. She relocated from Kentucky to New York City in
          2023 with{' '}
          <a
            href="https://www.muddypawsrescue.org/"
            target="_blank"
            rel="noreferrer"
          >
            Muddy Paws Rescue
          </a>
          , and has since established herself as a Professional Good Girl with
          expertise in park exploration, treat tasting, and tricks.
        </p>
        <h3>Building the template</h3>
        <p>
          Since I was building two profiles, I didn't want to write everything
          twice. So I refactored both into a shared{' '}
          <code>LinkedInProfileTemplate</code> — each profile is now just a data
          file of experience entries, posts, and skills, passed as props to the
          same template.
        </p>
        <h3>The design system</h3>
        <p>
          This is basically what a design system is. You build a library of
          components that encode visual structure and behavior once. Then
          consuming them is just a matter of providing data. LinkedIn itself
          works this way — every profile looks the same, but holds different
          content.
        </p>
        <p>
          The template is made up of smaller pieces, each with a distinct reason
          to exist:
        </p>
        <ul>
          <li>
            <code>Navbar</code> renders the LinkedIn-style top bar — logo,
            search, and nav icons. It's also responsive: at narrower widths the
            search input collapses to just an icon, and the nav item labels
            disappear, leaving icon-only navigation.
          </li>
          <li>
            <code>ProfileHeader</code> renders the top of the profile — photo,
            name, headline, location, and follower count. It also conditionally
            renders action buttons: my profile shows Message, View Resume, and
            Meet My Dog; Loretta's hides all of that. The{' '}
            <code>isDogProfile</code> flag handles the difference without
            forking the component.
          </li>
          <li>
            <code>ProfileCard</code> is a generic section wrapper. Every section
            on a LinkedIn profile — About, Experience, Skills — has the same
            card shape: a title and a content area. Without it, that structure
            would be duplicated for every section.
          </li>
          <li>
            <code>ExperienceItem</code> is reused for experience, education, and
            projects because all three have the same shape: a logo, a title, a
            subtitle, and optional dates. One component handles all of them.
          </li>
          <li>
            <code>SkillItem</code> exists separately because skills look
            different — each one shows an endorsement source, not dates or a
            description.
          </li>
          <li>
            <code>Recommendation</code> is its own component because it's the
            most complex item on the page: a quote, an author, a relationship
            context, and a date.
          </li>
          <li>
            <code>ActivitySection</code> wraps a <code>ProfileCard</code>{' '}
            internally but adds tab state on top of it, switching between two
            different content types — posts and comments — in the same section.
          </li>
          <li>
            <code>Post</code> renders a single post inside{' '}
            <code>ActivitySection</code> — profile image, author, timestamp, and
            content. <code>ActivitySection</code> maps over an array of them;{' '}
            <code>Post</code> only knows about one.
          </li>
          <li>
            <code>Carousel</code> is a scrollable container with conditionally
            rendered prev/next buttons. It uses a <code>ResizeObserver</code> to
            track scroll position and only shows the navigation buttons when
            there's actually content to scroll to in that direction.
          </li>
        </ul>
        <p>
          Components accept a <code>children</code> prop so each profile can
          append its own extra sections, like my Projects card or Loretta's
          Interests.
        </p>
        <pre className="component-diagram">{`LinkedInProfileTemplate
├── Navbar
├── ProfileHeader
├── ProfileCard          (reused for every section)
│   ├── ExperienceItem   (experience, education, projects)
│   ├── SkillItem
│   └── Recommendation
└── ActivitySection
    └── Carousel
        └── Post`}</pre>
        <p>
          Loretta, for her part, has no complicated feelings about any of this.
        </p>
      </div>
    </div>
  );
}
