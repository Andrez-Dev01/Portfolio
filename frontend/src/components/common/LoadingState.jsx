import './LoadingState.css';

export default function LoadingState() {
  return (
    <div className="loading-state" role="status" aria-live="polite">
      <div className="loading-state__spinner" aria-hidden="true" />
      <p>Initializing portfolio…</p>
    </div>
  );
}
