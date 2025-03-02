import './writing.css';

export default function JSONParserBlogPost() {
  return (
    <div id="blog" className="blog">
      <div id="writing" className="writing">
        <h1>
          Building a <a href="/json-validator">JSON Validator</a> by Parsing
          from Scratch
        </h1>
        <i>
          First published <time datetime="2025-03-02">Mar 2, 2025</time>.
        </i>
        <p>
          In the world of web development, JSON is one of the most widely used
          formats for transmitting data between a server and a client. Whether
          it's a configuration file, data exchange between APIs, or even simple
          application state management, we all interact with JSON daily. But
          have you ever wondered how JSON parsing actually works behind the
          scenes?
        </p>
        <h2>The Goal</h2>
        <p>
          The goal of this project was simple: Create a basic JSON validator
          that can parse JSON strings and check their validity. This isn't meant
          to be a production-ready tool, but rather a fun exercise in
          understanding how JSON is parsed at a lower level. The highlight is
          that I built the parser myself, instead of using the built-in
          JSON.parse() method.
        </p>
        <h2>Why Not Use JSON.parse()?</h2>
        <p>
          JSON.parse() is the go-to tool for parsing JSON strings in JavaScript.
          It’s easy, fast, and works for almost all scenarios. But I wanted to
          go a step further and understand how a JSON parser actually works
          under the hood.
        </p>
        <h2>Steps to Build a JSON Validator</h2>
        <ul>
          <li>Define a formal grammar for JSON.</li>
          <li>Convert the grammar into separate parsing functions.</li>
          <li>Implement a recursive descent parser.</li>
          <li>Validate JSON by attempting to parse values.</li>
        </ul>
        <h2>Defining a Formal Grammar</h2>
        <p>
          A formal grammar defines the rules of a language in terms of tokens
          and structures. JSON consists of key-value pairs enclosed in curly
          braces.
        </p>
        <pre>
          <code>
            {`
            JSON Object      → { (String : Value (, String : Value)*)? }
            Value      → String | Number | Boolean | Null | Array | JSON
            Array      → [ (Value (, Value)*)? ]
            String     → "[^"]*"
            Number     → [-]? [0-9]+ (.[0-9]+)?
            Boolean    → true | false
            Null       → null
            `}
          </code>
        </pre>
        <h2>Converting Grammar into Parse Functions</h2>{' '}
        <p>
          {' '}
          Each grammar rule is translated into a corresponding function.
          Starting with smaller, non-recursive grammar rules like{' '}
          <code>null</code> and <code>boolean</code> makes the process easier
          and more manageable. These simpler rules do not require recursion, so
          we can implement basic parsing functions for them without worrying
          about nesting or complex structures. Once these fundamental cases are
          handled, we can gradually work up to more complex, recursive grammars
          such as arrays and JSON objects.{' '}
        </p>{' '}
        <p>
          {' '}
          This approach allows us to build the parser incrementally, starting
          from the simplest components and ensuring they work correctly before
          tackling more challenging structures. By parsing these smaller grammar
          rules first, we create a solid foundation, which can then be extended
          to handle recursive definitions, such as parsing arrays within arrays
          or nested JSON objects.{' '}
        </p>
        <pre>
          <code>
            {`
            export function parseNull(str, idx) {
              if (str.slice(idx, idx + 4) === 'null') {
                return [null, idx + 4];
              }
              return null;
            }
            `}
          </code>
        </pre>
        <h2>Recursive Descent Parsing</h2>
        <p>
          Recursive descent parsing involves breaking down the JSON structure
          using a hierarchy of functions. It’s particularly useful for parsing
          grammars with recursive definitions, where certain elements can be
          nested within themselves. In the case of JSON, there are a few key
          grammars that require recursive descent parsing:
        </p>
        <ul>
          <li>
            <strong>JSON Object:</strong> The definition of a JSON object is
            recursive because it can contain other JSON objects as values.
            Specifically, the <code>JSON</code> rule refers back to itself
            within the <code>Value</code> rule:
            <pre>
              <code>
                Value → String | Number | Boolean | Null | Array | JSON
              </code>
            </pre>
            This allows nested JSON objects to be parsed, where one object can
            contain another.
          </li>

          <li>
            <strong>Array:</strong> Arrays can hold other values, including
            objects, which might again contain other arrays or objects. The{' '}
            <code>Array</code> rule has recursive elements that allow arrays to
            contain nested structures:
            <pre>
              <code>Array → [ (Value (, Value)*)? ]</code>
            </pre>
            This allows arrays to hold any valid JSON values, including other
            arrays and JSON objects.
          </li>
        </ul>
        <p>
          Recursive descent parsing is especially suitable for these structures
          because it allows us to keep track of the nesting levels. Each
          recursive call parses a new level of the structure, whether it’s an
          array within an array or a JSON object containing another JSON object.
        </p>
        <p>
          The following code snippet demonstrates how we handle parsing values
          in JSON. It shows how the recursive descent parsing approach is used
          to validate and parse various JSON values, such as null, booleans,
          strings, numbers, arrays, and even nested JSON objects. The function{' '}
          <code>parseValue</code> is central to this process, and it attempts to
          parse each of these valid JSON types in turn.
        </p>
        <pre>
          <code>
            {`
            export function parseValue(str, idx) {
              let val = parseNull(str, idx);
              if (val !== null) return val;
              val = parseBoolean(str, idx);
              if (val !== null) return val;
              val = parseString(str, idx);
              if (val !== null) return val;
              val = parseNumber(str, idx);
              if (val !== null) return val;
              val = parseArray(str, idx);
              if (val !== null) return val;
              val = parseJson(str, idx);
              if (val !== null) return val;
              console.error('No valid value at index ' + idx);
              return null;
            }
            `}
          </code>
        </pre>
        <h2>Json Validation by Parsing</h2>
        <p>
          To validate JSON, we attempt to parse the input string based on the
          defined grammar rules. The process starts by checking each part of the
          string, such as strings, numbers, booleans, arrays, or objects, and
          recursively parsing nested structures. If the parsing succeeds, we
          continue validating the remaining part of the JSON string. However, if
          we encounter an unexpected token or cannot match the expected
          structure at any point, the parsing fails, and we immediately deem the
          JSON as invalid. This approach ensures that the entire JSON structure
          adheres to the formal grammar, and any deviation from it—such as
          mismatched brackets, incorrect types, or missing values—results in an
          invalid JSON string.
        </p>
        <h2>Challenges Faced</h2>
        <ul>
          <li>
            <strong>Handling escaped quotes in strings:</strong> One of the key
            challenges when parsing JSON is correctly handling escaped
            characters, such as <code>\"</code>, within strings. Since JSON
            strings are enclosed in double quotes, we must carefully track when
            a quote is part of the string (escaped) or when it marks the end of
            the string. Failing to correctly parse escaped quotes could lead to
            incorrect string values or prematurely terminating the string.
          </li>
          <li>
            <strong>
              Managing edge cases like whitespace and incorrect formatting:
            </strong>{' '}
            Another challenge is handling whitespace and ensuring proper
            separators are present between values. JSON allows optional
            whitespace, but it's crucial to correctly validate that separators,
            like colons (:) between keys and values or commas (,) between
            elements in arrays and objects, are correctly placed. Missing or
            misplaced separators could break the structure of the JSON and lead
            to invalid data. The parser needs to handle these edge cases by
            skipping over valid whitespace and ensuring the correct presence of
            colons and commas where needed.
          </li>
          <li>
            <strong>String formatting limitation:</strong> Currently, our parser
            requires all strings to be enclosed in double quotes, as per the
            grammar specification. This means that single-quoted strings are not
            supported, and any input using single quotes will result in a
            failure.
          </li>
        </ul>
        <h2>Technologies Used</h2>
        <p>
          This project was built using JavaScript, and testing was done with
          Jest. The project includes a CI/CD workflow that runs tests and
          validates code formatting using Prettier before deploying.
        </p>
        <h2>Live Demo</h2>
        <p>
          Try out the live demo of the JSON validator{' '}
          <a href="/json-validator">here</a>.
        </p>
      </div>
    </div>
  );
}
