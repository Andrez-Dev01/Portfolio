import './ErrorState.css';

export default function ErrorState({ message }) {
  return (
    <div className="error-state" role="alert">
      <p className="error-state__title">Unable to load portfolio data</p>
      <p className="error-state__message">{message}</p>
      <p className="error-state__hint">
        Ensure the Go backend is running: <code>cd backend && go run .</code>
      </p>
    </div>
  );
}
