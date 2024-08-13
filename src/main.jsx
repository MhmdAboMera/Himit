import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./i18n"; // import the i18n configuration
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthContextProvider } from "./Context/index.jsx";
// import { ReactQueryDevtools } from "react-query/devtools";
// Create a client
const queryClient =  new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, 
    },
  },
})
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Fragment>
    <QueryClientProvider client={queryClient}>
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    <AuthContextProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </AuthContextProvider>
    </QueryClientProvider>
  </React.Fragment>
);
