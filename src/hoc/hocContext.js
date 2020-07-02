import React from "react";

export const HocContext = React.createContext();

export default function HocContext({ children }) {
  return <HocContext.Provider>{children}</HocContext.Provider>;
}
