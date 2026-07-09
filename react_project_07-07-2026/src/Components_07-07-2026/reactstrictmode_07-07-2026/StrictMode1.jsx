// Strict mode
import { useEffect } from "react";
import React, { StrictMode } from "react";
function StrictMode1() {
  console.log("App Component Rendered");

  useEffect(() => {
    console.log("useEffect Executed");

    return () => {
      console.log("Cleanup Function");
    };
  }, []);

  return (
    <React.StrictMode>
      <h1>React Strict Mode Example</h1>
      <p>Open the browser console to see the output.</p>
    </React.StrictMode>
  );
}
export default StrictMode1;