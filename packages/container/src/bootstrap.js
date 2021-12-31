import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

ReactDOM.render(<App />, document.querySelector("#root"));

// Our CONTAINER doesn't need a mount function.
// Whenever the container application is going to be shown inside the browser, we always, in all scenarios, want the container
// to show itself immediately. It's only out subprojects that need to export some kind of mount function to render themselver conditionally
// depending upon whether or not we are in development.
