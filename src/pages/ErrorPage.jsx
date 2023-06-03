import { Link } from "react-router-dom";
import "../style/ErrorPage.css";
function ErrorPage() {
  return (
    <div className="error-container">
      <h1>Page not found, please check the link again</h1>
      <p>
        Back to <Link to="/">home</Link> page
      </p>
    </div>
  );
}
export default ErrorPage;
