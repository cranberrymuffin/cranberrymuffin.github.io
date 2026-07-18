import Navigation from '../navigation/Navigation';
import './writing.css';

export default function GetUpBlogPost() {
  return (
    <div id="main" className="main">
      <Navigation />
      <div id="blog" className="blog">
        <div id="writing" className="writing">
          <h1>What I Learned From Getting Knocked Down </h1>
          <i>
            First published <time dateTime="2026-07-18">July 18, 2026</time>.
          </i>
          <p>
            On Tuesday, July 14 at 8:54 PM 🌇, I was attacked while running 🏃
            on the East River walkway.
          </p>
          <p>
            After taking the minimum amount of PTO needed for my right eye 👁️ to
            open back up, I found myself back and ready build 💻.
          </p>
          <p>
            Turning the week over in my head, I kept landing on the same three
            things.
          </p>
          <ol>
            <li>
              <p>
                <b>When you fall down, get back up.</b>
              </p>
              <p>
                Getting knocked down 🥊 isn't a choice, but staying down is. The
                instinct to get back up from the cement is the same instinct
                that gets me through a bad sprint, a failed launch, or a
                rejection.
              </p>
            </li>
            <li>
              <p>
                <b>People can join your network in unexpected ways.</b>
              </p>
              <p>
                I grew my network meeting the woman that attacked me 🥊, police
                officers 👮, and medical professionals 🏥.
              </p>
            </li>
            <li>
              <p>
                <b>Your head 🧠 is your biggest asset.</b>
              </p>
              <p>
                In the moment, it was what I was most scared of losing
                literally.{' '}
              </p>
              <p>
                But my head is also what got me through the attack: the ability
                to think quickly through the chaos.
              </p>
              <p>
                That same asset that shows up for me on the job. Timely ⏰ and
                strategic decision making can stop incidents before they get
                worse.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
