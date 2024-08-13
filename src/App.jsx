import { RouterProvider } from "react-router-dom";
import router from "./router";
// Create a client
function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
