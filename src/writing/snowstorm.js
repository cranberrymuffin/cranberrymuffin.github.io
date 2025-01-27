import Snowstorm from '../snowstorm/Snowstorm';
import './writing.css';

export default function SnowstormBlogPost() {
  return (<div id="blog" className='blog'>
    <div id="writing" className='writing'>
      <h1>Building <a href="/#/snowstorm">Snowstorm</a>: A Wintertime Web Game</h1>
      <i>
        First published <time datetime="2025-01-27">Jan 27, 2025</time>.
      </i>
      <p>
      Destroy all evil (red team) snowmen. Destroying good (green team) snowmen results in lost points.
      <br></br>
      This blog walks you through how the visual effects of snowstorm were made. There are two main visual components to the snowstorm, one is the snowfall, and the other is the snowmen. I’m going to cover how both visual effects can be created.
      </p>
      <h2>Making it Snow</h2>
      <p>
        To make the illusion of snowfall
        <ol>
          <li>I generated particles positioned at random places within a 3D spherical bounding volume, each representing a snowflake. </li>
          <li>By slowly rotating the particles generated within the sphere around the x-axis, the particles will appear to swirl gently, creating an illusion of a snowstorm.</li>
          <li>Each particle is mapped to the png image of a snowflake</li>
          <li>The camera is positioned at the very center of this sphere, giving the viewer the perspective of standing in the middle of the storm.</li>
        </ol>
      </p>
      <h2>Snowmen</h2>
      Sphere meshes are translated and arranged to build a snowman in a reusable react component.
      <h3>Displaying the Snowmen: The Camera Frustum</h3>
      The camera frustum is a 3D volume that represents the visible area of a 3D scene from the camera's perspective. It's a truncated pyramid where the narrow end (near plane) is closest to the camera and the wide end (far plane) extends further into the scene. Any object outside this frustum is invisible to the camera.
      We only need to generate our snowmen meshes within the 3D volume of the camera frustum.
      <h3>Displaying the Snowmen: Movement</h3>
      Every frame, the snowman moves closer to the camera (or forward on the z-axis). In order to achieve this, we use React Three Fiber's useFrame hook to execute code before every rendered frame. The code we will execute is a function call to increment the snowman group's position forward on the z-axis.
      Once the snowman moves past the camera, its position is reset to a random point in the camera frustum.
      <h3>Displaying the Snowmen: Good vs. Evil</h3>
      The snowmen are created with a React prop called "evil" which describes whether the snowman should be green or red. Red snowmen are evil. green snowmen are good.
      <h3>Displaying the Snowmen: Destroying snowmen</h3>
      The onClick property of the snowman mesh makes snowmen invisible once triggered. Once they are invisible they are destroyed.
      <h2>Points</h2>
      A point store is created using zustand. This allows the onClick of the snowmen to increase or decrease the points displayed by the info component of the game.
    </div>
  </div>
  );
}