import { usePortfolio } from './hooks/usePortfolio';
import './App.css';

function App() {
  const { data, loading, error } = usePortfolio();

  return (
    <div className="app">
      <main className="app__main">
        <p className="app__status">
          {loading && 'Loading portfolio…'}
          {error && `API unavailable: ${error}. Start the Go backend on port 8080.`}
          {!loading && !error && data && `Connected — ${data.profile.name}`}
        </p>
      </main>
    </div>
  );
}

export default App;
