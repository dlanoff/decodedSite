import React from "react";
import MyComponent from "./MyComponent";

const Root = () => {
  return (
    <div>
      <nav>
        <img id="test" src="gif.gif" width="100%" height="auto" />

        {/* <h1>Daniel Decoded</h1> */}
      </nav>
      <div className="upperNav">
        {" "}
        <div className="icons">
          <a href="https://www.linkedin.com/in/daniellanoff/">
            <img src="linkedInIcon.png" height="50" width="auto" />
          </a>
        </div>
        <div className="icons">
          <a href="https://github.com/dlanoff">
            <img src="ghicon.png" height="50" width="auto" />
          </a>
        </div>
        <div className="icons">
          <a href="mailto:daniellanoff@gmail.com">
            <img src="mailIcon.png" height="50" width="auto" />
          </a>
        </div>
      </div>

      <main>
        <MyComponent />
      </main>
    </div>
  );
};

export default Root;
