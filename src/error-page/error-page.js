import { useRouteError } from "react-router-dom";
import "./error-page.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h2>Oops!</h2>
      <h3>Sorry, an unexpected error has occurred.</h3>
      <div className="ErrorMessage_Container">
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
