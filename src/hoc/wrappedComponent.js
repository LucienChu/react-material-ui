import React, { useState } from "react";
import { withLoader } from "./withLoader";
function WrappedComponent(props) {
  const { setLoading } = props;
  const [counter, setCounter] = useState(0);
  return (
    <div>
      {console.log("component rendering")}
      <h1>Wrapped component</h1>

      <button onClick={() => setCounter(counter + 1)}>clicked {counter}</button>
      <button
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }}
      >
        just a button
      </button>
    </div>
  );
}

export const WC = withLoader(React.memo(WrappedComponent));
