import Navigation from '../navigation/Navigation';
import './writing.css';

export default function PathRecorderBlogPost() {
  return (
    <div id="main" className="main">
      <Navigation />
      <div id="blog" className="blog">
        <div id="writing" className="writing">
          <h1>
            Building My First iOS App:{' '}
            <a href="https://apps.apple.com/us/app/pathrecorder/id6749169358">
              Path Recorder
            </a>
          </h1>
          <i>
            First published <time datetime="2025-07-29">Jul 29, 2025</time>.
          </i>
          <p>
            Path Recorder is my first foray into iOS development - a location
            tracking app that records and visualizes your foot paths. The app
            captures GPS coordinates in real-time, displays your path on a map,
            and allows you to document your journey with photos. Here's the
            story of how I built it and what I learned along the way.
          </p>
          <h2>The Motivation</h2>
          <p>
            I started running and became an active Strava user, but I quickly
            noticed a frustrating problem: every time I wanted to check how much
            distance I had travelled during a run, I needed to unlock my phone.
            This might seem like a small action, but when you're running, out of
            breath, and trying to stay focused, it becomes mentally cumbersome
            and breaks your flow.
          </p>
          <p>
            I knew iOS offered Live Activities that could display real-time
            information on the lock screen, so I wanted to create an app that
            would show my current distance travelled right there without needing
            to unlock my phone. What started as a simple solution to check
            distance on the lock screen grew into a full-featured path recording
            app as I realized there were other improvements I could make to the
            route recording experience.
          </p>
          <h2>Key Features</h2>
          <ul>
            <li>
              <strong>Lock screen distance display</strong>
            </li>
            <li>
              <strong>Real-time GPS tracking</strong>
            </li>
            <li>
              <strong>Photo capture with geotagging</strong>
            </li>
            <li>
              <strong>Activity restoration</strong>
            </li>
            <li>
              <strong>Path visualization</strong>
            </li>
          </ul>
          <h3>Core Technologies Used:</h3>
          <ul>
            <li>
              <strong>Swift & SwiftUI</strong> - Main development language and
              UI framework
            </li>
            <li>
              <strong>Core Location</strong> - For GPS tracking and location
              services
            </li>
            <li>
              <strong>MapKit</strong> - For displaying maps and route
              visualization
            </li>
            <li>
              <strong>Core Data</strong> - For local data persistence, and
              activity restoration.
            </li>
            <li>
              <strong>ActivityKit & WidgetKit</strong> - For Live Activities on
              the lock screen
            </li>
          </ul>
          <h2>Building the Core Features</h2>
          <h3>Location Management & GPS Tracking</h3>
          <ul>
            <li>
              <strong>Smart Location Filtering:</strong> Filters locations by
              accuracy (ignoring readings worse than 20 meters), minimum
              distance moved (2 meters), and time intervals (2 seconds between
              updates) for better data quality.
            </li>
            <li>
              <strong>Moving Average Smoothing:</strong> Uses a buffer of the
              last 3 location readings to smooth out GPS noise and prevent
              erratic jumps.
            </li>
            <li>
              <strong>Segment-Based Recording:</strong> Pausing and resuming
              creates new path segments with unique IDs, supporting proper line
              rendering and editing.
            </li>
          </ul>
          <h3>Live Activities Implementation</h3>
          <p>
            Using ActivityKit, Path Recorder displays a lock screen widget
            showing current GPS coordinates, distance traveled, elapsed time,
            and pause/resume status. The implementation handles app termination
            and restoration, automatically resuming Live Activities when the app
            is relaunched.
          </p>
          <h3>Persistent State Management</h3>
          <p>
            Recordings survive app termination thanks to a robust persistence
            system using UserDefaults. All GPS locations, timestamps, segment
            IDs, distance, elapsed time, and photos are saved. The app detects
            in-progress recordings and offers to resume them, complete with
            restored Live Activities.
          </p>
          <h3>Photo Geotagging System</h3>
          <ul>
            <li>
              Photos are geotagged with current GPS coordinates and timestamped.
            </li>
            <li>
              Saved to local storage with unique filenames and associated with
              the current path.
            </li>
            <li>
              Appear as annotations on the completed route map; tapping shows a
              full-screen gallery.
            </li>
            <li>
              Camera button hides when paused to prevent incorrect photo
              locations.
            </li>
            <li>
              Photos captured outside the app while recording can be uploaded
              from the photo library after activity completion.
            </li>
          </ul>
          <h3>Map Visualization & Interaction</h3>
          <ul>
            <li>
              <strong>Real-time Path Rendering:</strong> Polylines are drawn on
              the map as you move, with segments for pause/resume cycles.
            </li>
            <li>
              <strong>Smart Camera Following:</strong> Map centers on your
              location, but you can disable this by touching the map; a
              re-center button appears as needed.
            </li>
            <li>
              <strong>Photo Integration:</strong> Photos appear as custom
              annotations, clustered by proximity.
            </li>
            <li>
              <strong>Path Editing:</strong> Resume any completed path to
              continue recording, perfect for multi-day hikes or long pauses.
            </li>
          </ul>
          <h3>Advanced User Interaction Features</h3>
          <ul>
            <li>
              <strong>Context-Aware Controls:</strong> Camera button disappears
              when paused; re-center button appears only when needed.
            </li>
            <li>
              <strong>Smart Camera Following:</strong> Map follows your position
              but autocentering disables when you interact; re-center restores
              following mode.
            </li>
          </ul>
          <h3>Photo Management System</h3>
          <ul>
            <li>
              <strong>Rich Photo Metadata:</strong> Each photo stores GPS,
              timestamp, and session reference; viewer displays metadata.
            </li>
            <li>
              <strong>Advanced Photo Gallery:</strong> Swipe navigation, context
              menus, GPS/timestamp display, and delete functionality.
            </li>
          </ul>
          <h3>Custom Map Rendering</h3>
          <ul>
            <li>
              <strong>Hand-Crafted Visual Elements:</strong> Custom Core
              Graphics for glowing blue dots, solid waypoints, photo bubbles,
              and rounded polylines.
            </li>
            <li>
              <strong>Performance-Optimized Graphics:</strong> Annotation images
              cached as static properties for smooth scrolling.
            </li>
            <li>
              <strong>Visual Hierarchy:</strong> Z-ordering and visual weight
              highlight photos, current location, and waypoints.
            </li>
          </ul>
          <h2>Technical Challenges & Solutions</h2>
          <h3>App Termination Handling</h3>
          <p>
            iOS can kill apps at any time. Persistent state saving after every
            location update and automatic restoration on app launch keep
            recordings safe, with Live Activity management across app
            lifecycles.
          </p>
          <h3>GPS Accuracy Issues</h3>
          <p>
            Raw GPS data is noisy. Moving average smoothing, accuracy filtering,
            and minimum distance thresholds ensure clean, accurate path data.
          </p>
          <h3>Complex State Management</h3>
          <p>
            Managing recording, pausing, editing, and photo states across
            multiple views is handled by a centralized LocationManager using
            @ObservableObject and clear state transitions in SwiftUI.
          </p>
          <h3>Permission Handling</h3>
          <p>
            iOS location permissions require careful handling. I learned to
            gracefully handle different permission states and provide clear
            explanations to users about why location access is necessary.
          </p>
          <h2>Key Learnings</h2>
          <ul>
            <li>
              Core Location mastery: GPS filtering, accuracy management, and
              battery optimization.
            </li>
            <li>
              Live Activities complexity: ActivityKit lifecycle management and
              error handling.
            </li>
            <li>
              Data persistence patterns: Frequent state saving and graceful
              restoration.
            </li>
            <li>
              SwiftUI + UIKit integration: UIViewControllerRepresentable for
              advanced map features.
            </li>
            <li>
              User experience polish: Details like hiding the camera button when
              paused and smart map centering.
            </li>
          </ul>
          <h2>What's Next</h2>
          <ul>
            <li>Support for sharing routes outside of the app</li>
            <li>Elevation support</li>
          </ul>
          <p>
            The complete source code and detailed implementation can be found in
            my{' '}
            <a href="https://github.com/cranberrymuffin/PathRecorder">
              PathRecorder repository
            </a>
            .
          </p>
          <p>
            <strong>
              Try Path Recorder{' '}
              <a href="https://apps.apple.com/us/app/pathrecorder/id6749169358">
                here
              </a>
            </strong>{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
