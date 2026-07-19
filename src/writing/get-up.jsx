import { useState, useEffect } from 'react';
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <h2>Being my own digital detective</h2>
          <p>
            I typically hold my phone in my hand while I run to get information
            on my distance and time on my lock screen from PathRecorder's
            lockscreen live activity.
          </p>
          <p>
            I was going through my camera roll today, and found that before I
            dropped my phone and while I was going down, I had pressed the side
            buttons resulting in an accidental screenshot and camera capture.
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
          <p>
            The photos I capture do not associate location information on them
            by default. My phone's camera app does not have location services.
            But when I upload photos to PathRecorder, if they were taken while a
            path was in progress, they can be uploaded after the fact and
            associated with the GPS coordinate recorded at the time of capture.
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
                <td>
                  <figure>
                    <img
                      alt="path recorder map of the run"
                      src="/path-recorder-with-pic-uploaded.png"
                    ></img>
                    <figcaption>
                      Photo capture during attacked geotagged to path.
                    </figcaption>
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
        </div>
      </div>
    </div>
  );
}
