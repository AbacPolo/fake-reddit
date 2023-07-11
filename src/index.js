import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import {
  HashRouter,
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from "react-router-dom";
import { Dashboard } from "./components/dashboard/Dashboard";
import { PostPage } from "./features/postPage/PostPage";
import ErrorPage from "./error-page/error-page";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

const appRouter = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/r/:subreddit/comments/:id/:title",
        element: <PostPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

root.render(
  // <React.StrictMode>
  <HashRouter>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </HashRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
