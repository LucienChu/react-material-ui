import React, { useState, useEffect } from "react";

export default function TestRender() {
  useEffect(() => {
    console.log("did mounted");
  }, []);

  const [counter, setCounter] = useState(0);
  return (
    <div>
      {console.log("rendering", counter)}
      <p>click to check render {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>click me</button>
    </div>
  );
}
