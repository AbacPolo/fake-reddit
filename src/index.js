import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "./routes/error-page";
import { Dashboard } from "./features/dashboard/Dashboard";

const container = document.getElementById("root");
const root = createRoot(container);

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="error-page" element={<ErrorPage />} />
      <Route path="/" element={<Dashboard />} />
      <Route path=":type" element={<Dashboard />} />
      {/* <Route path=':type/:id' element={<PetDetailsPage />} /> */}
      {/* <Route path='search' element={<SearchPage />} /> */}
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
