import { useState } from 'react';
import Navigation from '../navigation/Navigation';
import RevealablePhoto from './components/RevealablePhoto';
import './writing.css';

const BLACK_EYE_PHOTOS = [
  { src: '/IMG_6660.jpeg', date: 'July 14 at 10:38 PM' },
  { src: '/IMG_6661.jpeg', date: 'July 15 at 3:49 AM' },
  { src: '/IMG_6662.jpeg', date: 'July 15 at 5:01 AM' },
  { src: '/IMG_6664.jpeg', date: 'July 15 at 4:44 PM' },
  { src: '/IMG_6674.jpeg', date: 'July 16 at 9:43 AM' },
  { src: '/IMG_6685.jpeg', date: 'July 16 at 8:48 PM' },
  { src: '/IMG_6700.jpeg', date: 'July 17 at 7:46 AM' },
  { src: '/IMG_6724.jpeg', date: 'July 18 at 9:46 AM' },
  { src: '/black-eye.png', date: 'July 18 at 4:31 PM' },
];

export default function GetUpBlogPost() {
  const [revealed, setRevealed] = useState(() => new Set());

  function toggleReveal(index) {
    setRevealed(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

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
            On Tuesday, July 14 at 8:54 PM, I was attacked while running 🏃 on
            the East River walkway.
          </p>
          <table className="photo-table">
            <tbody>
              <tr>
                <td>
                  <figure>
                    <img
                      alt="path recorder map of the run"
                      src="/IMG_6726.png"
                    ></img>
                    <figcaption>
                      The location of the attack during my route (in blue)
                      circled (in red).
                    </figcaption>
                  </figure>
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            While I was running, I saw a woman lying across the path ahead of
            me. I was going to say <i>"Hi, Excuse me"</i> to pass her.
          </p>
          <p>
            {' '}
            I saw her turn to me, I was able to get out <i>"Hi..."</i> when she
            got up and lunged at me yelling, <i>"What's your problem?"</i>. I
            had started turning around when I saw her lunging at me, but I was
            not able to get away. She grabbed me around my neck. I remember
            feeling the pressure of her grabbing my neck as I got out a strained{' '}
            <i>"No"</i>.
          </p>
          <p>
            She brought me down. She punched me in the head. She slammed my head
            against the sidewalk. She kicked me in the back of the head.
          </p>
          <p>
            I remember saying: <i>"Stop, please. "I'm sorry! I'm sorry!"</i>
          </p>

          <p>
            When I started apologizing, she responded to me with:{' '}
            <i>"What are you apologizing for?"</i> I was confused and didn't
            know what to say but knew it was important to tell her something
            that could stop the assault while she was verbally communicating
            with me. I said:{' '}
            <i>"I don't know, I don't know, I don't know why I upset you."</i>
          </p>
          <p>
            The attack stopped. I grabbed my glasses and my phone and headed
            back to my apartment.
          </p>
          <p>
            I typically hold my phone in my hand while I run to track my
            distance and time. I was going through my camera roll today, and
            found that before I dropped my phone during the attack, I had
            pressed the side buttons resulting in a screenshot and an accidental
            photo capture.
          </p>
          <table className="photo-table">
            <tbody>
              <tr>
                <td>
                  <figure>
                    <img
                      alt="lock screen with path recorder's live notification"
                      src="/IMG_6658.jpeg"
                    ></img>
                    <figcaption>(2/2) Taken accidentally</figcaption>
                  </figure>
                </td>{' '}
                <td>
                  <figure>
                    <img
                      alt="blurry lights, taken accidentally during the attack"
                      src="/IMG_6657.jpeg"
                    ></img>
                    <figcaption>(1/2) Taken accidentally</figcaption>
                  </figure>
                </td>
              </tr>
            </tbody>
          </table>

          <h2>TW: the black eye</h2>
          <p>
            The photos below are of the black eye healing over the following
            days, ordered by when they were taken. Tap a photo to reveal it.
          </p>
          <div className="tw-grid">
            {BLACK_EYE_PHOTOS.map((photo, index) => (
              <RevealablePhoto
                key={photo.src}
                src={photo.src}
                alt={`black eye, ${photo.date}`}
                caption={photo.date}
                revealed={revealed.has(index)}
                onToggle={() => toggleReveal(index)}
              />
            ))}
          </div>

          <h2>Buisness Takeaways</h2>
          <p>
            After taking the minimum amount of PTO needed for the swelling on my
            right eye to go down and my eye to open back up, I found myself back
            and ready build.
          </p>
          <p>
            Turning the week over in my head with a buisness perspective, I kept
            landing on the same three things.
          </p>
          <ol>
            <li>
              <p>
                <b>When you're knocked down, get back up. 🥊 </b>
              </p>
              <p>
                Getting knocked down isnt a choice, but staying down is. My
                instinct to get back up from the cement is the same instinct
                that gets me through a bad sprint, a failed launch, or a
                rejection.
              </p>
            </li>
            <li>
              <p>
                <b>People can join your network in unexpected ways. 🤝 </b>
              </p>
              <p>
                I grew my network meeting the woman that attacked me, police
                officers, and medical professionals.
              </p>
            </li>
            <li>
              <p>
                <b>Your head is your biggest asset. 🧠 </b>
              </p>
              <p>In that moment, it was what I was most scared of losing.</p>
              <p>
                But my head is also what got me through the attack: the ability
                to think quickly through the chaos.
              </p>
              <p>
                That same asset that shows up for me on the job. Timely and
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
