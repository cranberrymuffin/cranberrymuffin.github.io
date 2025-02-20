import "./writing.css";

export default function AsciiArtBlogPost() {
  return (
    <div id="blog" className="blog">
      <div id="writing" className="writing">
        <h1>
          Transforming Images into{" "}
          <a href="https://cranberrymuffin.github.io/ascii-art/">ASCII Art</a>
        </h1>
        <i>
          First published <time datetime="2025-02-20">Feb 20, 2025</time>.
        </i>
        <p>
          ASCII Art displays images using characters. In this post, I’ll walk
          through how I built a web tool that converts images into ASCII art,
          and share the challenges faced along the way.
        </p>
        <h2>Image preprocessing</h2>
        Before converting our image to ASCII, we will do some preprocessing on
        it to enhance the results.
        <h3>Background Removal</h3>
        <p>
          Removing the background from an image helps create cleaner and more
          focused ASCII art because the background elements in an image can
          introduce unnecessary visual clutter that distracts from the main
          subject. In ASCII art, every pixel or part of the image is represented
          by a character, and if the background contains irrelevant or similar
          shades to the subject, it can make the output harder to read and less
          distinct. Here’s why removing the background is helpful:
          <ol>
            <li>
              <b> Focus on the Subject: </b> By eliminating the background, the
              ASCII art focuses solely on the subject of the image. This allows
              the key details and features to stand out more clearly, creating a
              more recognizable representation.{" "}
            </li>
            <li>
              <b>Improved Contrast:</b> Backgrounds often consist of neutral
              colors or flat patterns that don’t contribute meaningfully to the
              structure of the image. When these are removed, the contrast
              between the subject and its surroundings becomes more defined,
              making the ASCII art cleaner and easier to interpret.{" "}
            </li>
            <li>
              <b>Reduced Noise:</b> Sometimes the background includes random
              details, textures, or colors that can add "noise" to the ASCII
              art, making it more difficult to see the subject. By removing the
              background, only the important elements are left, leading to a
              smoother and more aesthetically pleasing result.{" "}
            </li>
          </ol>
          I used the <b>@imgly/background-removal</b> library to remove
          backgrounds from images.
        </p>
        <h3>Cropping</h3>
        <p>
          After the background is removed, cropping is performed to eliminate
          the excess empty pixels that result from the background removal
          process. This step helps reduce the number of unnecessary blank
          spaces, making the ASCII art more compact and focused on the main
          subject. By cropping out these empty areas, the ASCII result becomes
          cleaner and avoids displaying too many empty characters.
        </p>
        <ol>
          <li>
            <strong>Create a Canvas:</strong> A new <code>&lt;canvas&gt;</code>{" "}
            element is created to draw the image and extract its pixel data.
          </li>
          <li>
            <strong>Draw Image to Canvas:</strong> The image is drawn onto the
            canvas, allowing the code to access its pixel data.
          </li>
          <li>
            <strong>Get Pixel Data:</strong> Using <code>getImageData</code>,
            the pixel data (RGBA) of the entire image is retrieved.
          </li>
          <li>
            <strong>Identify Non-Transparent Pixels:</strong> The code loops
            through every pixel and checks the alpha channel (transparency). If
            a pixel is not fully transparent (alpha {">"} 128), it updates the
            boundaries of the image’s content (top, bottom, left, and right).
          </li>
          <li>
            <strong>Determine the Bounding Box:</strong> By examining the
            non-transparent pixels, the code determines the smallest rectangle
            (bounding box) that contains all visible content. This box
            represents the area of interest in the image.
          </li>
          <li>
            <strong>Create a Cropped Canvas:</strong> A new canvas is created to
            hold the cropped version of the image. The dimensions are based on
            the bounding box determined in the previous step.
          </li>
          <li>
            <strong>Draw the Cropped Area:</strong> The relevant portion of the
            original image, defined by the bounding box, is drawn onto the new
            canvas.
          </li>
          <li>
            <strong>Return the Cropped Canvas:</strong> The function returns the
            new canvas with the cropped image, which can now be used for further
            processing, such as converting to ASCII art.
          </li>
        </ol>
        <h2>Representing Pixels with Characters</h2>
        <p>
          The core of the project is an algorithm that converts images into
          ASCII art by mapping the brightness of pixels to ASCII characters.
          Brighter pixels are represented with lighter characters (e.g.,
          spaces), while darker pixels are depicted with denser characters
          (e.g., `@` or `#`). The set of characters we mapped each pixel to is{" "}
          <code>
            {" "}
            const asciiChars: string[] = [ '@', '%', '#', '*', '+', '=', '-',
            ':', '.', ' ', ];
          </code>
          This set of characters can be larger or smaller!
        </p>
        <h3>Sizing ASCII Art</h3>
        <p>
          To ensure that the ASCII art fits the screen properly, we need to
          compute how many rows and columns of characters we can use based on
          the viewport size. This is done by dividing the width and height of
          the font face by the width and height of the browser's viewport. With
          this information, we can rescale the image while maintaining its
          aspect ratio.
        </p>
        <ol>
          <li>
            <strong>Get Viewport Size:</strong> First, we measure the width and
            height of the browser's viewport using JavaScript.
          </li>
          <li>
            <strong>Get Font Face Size:</strong> Then, we get the dimensions of
            the font face used to display the ASCII art, typically in pixels.
          </li>
          <li>
            <strong>Calculate Columns and Rows:</strong> We divide the
            viewport's width by the width of the character to compute how many
            columns can fit. Similarly, the viewport height is divided by the
            height of the font to determine how many rows will fit.
          </li>
          <li>
            <strong>Rescale the Image:</strong> Using the calculated number of
            rows and columns, we can resize the image to fit the new size while
            maintaining its aspect ratio.
          </li>
        </ol>
        <h2>ASCII Postprocessing</h2>
        <h3>ASCII Output Aspect Ratio Correction</h3>
        <p>
          One of the key challenges in ASCII art is maintaining the correct
          aspect ratio. Since ASCII characters are taller than they are wide,
          this causes distortion when displaying the art. Since we are
          displaying our output on the browser, this can easily be corrected in
          CSS. I adjusted the line height in CSS to correct the stretching
          effect and resized the images to fit within the available viewport.
        </p>
        <h2>Conclusion</h2>
        <p>
          This project was a fun and rewarding experience that combined my
          interest in image processing with web development. If you’re
          interested in trying out this ASCII art tool, you can find it on{" "}
          <a
            href="https://github.com/cranberrymuffin/ascii-art"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}
