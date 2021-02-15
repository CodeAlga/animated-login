import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Remember changing the title of the app in</h1>
      <br />
      <ul>
        <li>package.json</li>
        <li>index.html</li>
        <li>manifest.json</li>
      </ul>
      <br />
      <h1>The packages included in this template are:</h1>
      <ul>
        <li>Reac Router - For route handling</li>
        <li>Axios - For API query management</li>
        <li>Node Sass - For scss preprocessor</li>
        <li>
          PropTypes - For prop validation types, recommended if not using
          TypeScript
        </li>
        <li>Cypress - For testing</li>
        <li>AirBnB esling config & Prettier- For code cleanness and form</li>
      </ul>
      <h2>Happy Coding!</h2>
    </div>
  );
}

export default App;
