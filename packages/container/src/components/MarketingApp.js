import { mount } from "marketing/MarketingApp"; // This is a simple function that takes in a reference to an HTML element
//and then displays some content inside there. This helps in making the coupling between our container and marketing as generic and simple as possible.
import React, { useRef, useEffect } from "react";

// We are using useRef function to create a reference to an HTML. This is going to be the element we're going to try to render
// our marketing application into.

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
