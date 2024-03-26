import Button from "react-bootstrap/Button";
import "./fallback.css";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <div className="fallbackContainer">
      <div className="box">
        <h1 className="fallbackHeading">Something went wrong:(</h1>
        <p className="fallbacktext">{error.message}</p>
        <Button variant="warning" onClick={resetErrorBoundary} size="lg">
          Try again
        </Button>
      </div>
    </div>
  );
};

export default ErrorFallback;
