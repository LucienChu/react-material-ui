import { TextField } from "@material-ui/core";
import React from "react";

export default function ParentChildKeyEvent() {
  return (
    <div>
      <TextField
        onKeyDown={(event) => event.stopPropagation()}
        onChange={(event) => {
          console.log(event.target.value);
          event.stopPropagation();
          event.preventDefault();
        }}
      />
    </div>
  );
}
