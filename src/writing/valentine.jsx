import "./writing.css";

export default function ValentineBlogPost() {
  return (
    <div id="blog" className="blog">
      <div id="writing" className="writing">
        <h1>
          Building a <a href="/valentine">3D Heart</a> with Math
        </h1>
        <i>
          First published <time datetime="2025-01-30">Jan 30, 2025</time>.
        </i>
        <p>Shapes can be represented as equations in 3D space.</p>
        <h2>Implicit Equations</h2>
        <p>
          An implicit equation defines a relationship between variables without
          explicitly solving for one variable in terms of others. Instead of
          expressing y or z directly as a function of x, an implicit equation
          combines all variables into a single equation.
        </p>
        <p>
          A sphere can be represented by the implicit equation x² + y² + z² = r²
          where "r" represents the radius of the sphere
        </p>
        <h2>Parametric Equations</h2>
        <p>
          A parametric equation expresses each variable as functions of one or
          more independent parameters, rather than directly relating them to
          each other. Essentially, you use an independent parameter (i.e. t) to
          describe the values of multiple variables simultaneously, and each
          variable is a function of t.
        </p>
        <p>
          A sphere can be represented by the parametric equation
          <ul>
            <li>x = r * sin(φ)cos(θ)</li>
            <li>y = r * sin(φ)sin(θ)</li>
            <li>z = r * r * cos(φ)</li>
          </ul>
          Where "r" represents the radius of the sphere, "φ" (phi) represents
          the angle from the positive z-axis, and "θ" (theta) represents the
          angle in the xy-plane (longitude). Phi and Theta can be visually
          represented in the diagram below.
          <br></br>
          <img
            width="500px"
            alt="spherical-coordinates"
            src="/spherical.png"
          ></img>
        </p>
        <h2> Equation of a Heart</h2>
        <ul>
          <li>
            Implicit Equation:{" "}
            <a href="https://mathworld.wolfram.com/HeartSurface.html">
              Taubin's Heart{" "}
            </a>
          </li>
          <li>
            Parametric Equations:{" "}
            <a href="https://math.stackexchange.com/questions/3416410/parametric-equation-for-taubin-heart-surface">
              Julia's Heart
            </a>
          </li>
        </ul>
        <h2> Why Parametric Equations are Easier to Represent in Code</h2>
        When generating coordinates for a mesh, parametric equations offer a
        significant advantage over implicit equations. Implicit equations define
        a shape as a set of points satisfying a mathematical condition, but they
        do not provide a direct way to generate a list of coordinates. This
        makes them difficult to work with computationally, as solving them often
        requires approximation or ray-marching techniques. In contrast,
        parametric equations explicitly define how to compute each point on the
        shape by varying the input parameters. This makes them much easier to
        implement in code, as we can simply loop over a range of values to
        generate a structured set of vertices for rendering. Parametric
        equations allow us to efficiently compute vertices and construct the
        shape without requiring complex mathematical solvers.
        <h2>Recipe for a Mesh</h2>
        <p>
          <ul>
            <li>
              <b>Vertices</b>: Define the position of the object in 3D space and
              its basic shape. Vertices are used to create the object's
              geometry.
            </li>
            <li>
              <b>Faces</b>: Specify how to connect those points into surfaces
              that can be shaded, textured, and rendered. Faces are necessary to
              fill in the geometry with a surface, giving the shape volume.
            </li>
            <li>
              <b>Normals</b>: Provide information on how light interacts with
              the surfaces, which is crucial for realistic lighting, shading,
              and rendering effects.Normals are used to calculate how light
              reflects off the surfaces of the object, affecting the shading and
              overall visual appearance.
            </li>
          </ul>
          Without any of these components, the mesh wouldn’t have its full
          representation or proper visual appearance in 3D space. Vertices
          without faces would just be floating points, faces without normals
          would lack proper lighting, and normals without vertices or faces
          wouldn’t have any surfaces to affect.
        </p>
        <h2> Generating a 3D Mesh for a Heart</h2>
        In order to generate a 3D mesh for a heart, we will be generating
        verticies using the parametric equation for Julia's Heart. Verticies are
        traversed (in their winding order) and mapped to triangles which will
        form faces. Normals are computed based on the winding order of the
        verticies.
        <pre>
          <code>
            {" "}
            {`
// Custom heart geometry function
function createHeartGeometry() {
    const geometry = new BufferGeometry();

    const vertices = [];
    const indices = [];

    const uSteps = 64; // Number of divisions in u-direction
    const vSteps = 32; // Number of divisions in v-direction
    const uStepSize = (2 * Math.PI) / uSteps;
    const vStepSize = Math.PI / vSteps;

    // Generate vertices
    for (let vi = 0; vi <= vSteps; vi++) {
        const v = vi * vStepSize;

        for (let ui = 0; ui <= uSteps; ui++) {
            const u = ui * uStepSize;

            const x = Math.sin(v) * (15 * Math.sin(u) - 4 * Math.sin(3 * u));
            const z = 8 * Math.cos(v);
            const y = Math.sin(v) * (15 * Math.cos(u) - 5 * Math.cos(2 * u) - 2 * Math.cos(3 * u) - Math.cos(2 * u));

            vertices.push(x, y, z);
        }
    }

    // Generate indices for the faces
    for (let vi = 0; vi < vSteps; vi++) {
        for (let ui = 0; ui < uSteps; ui++) {
            const current = vi * (uSteps + 1) + ui;
            const next = current + uSteps + 1;

            indices.push(current, current + 1, next);
            indices.push(next, current + 1, next + 1);
        }
    }

    // Set vertices and indices in geometry
    geometry.setAttribute('position', new Float32BufferAttribute(vertices, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();

    return geometry;
}
`}
          </code>
        </pre>
      </div>
    </div>
  );
}
