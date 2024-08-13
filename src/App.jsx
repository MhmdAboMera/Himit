import { RouterProvider } from "react-router-dom";
import router from "./router";
import React from "react";
// Create a client
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
