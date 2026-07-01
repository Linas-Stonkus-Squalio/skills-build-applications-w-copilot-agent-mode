import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [health, setHealth] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/health')
      .then((response) => response.json())
      .then((data) => setHealth(data))
      .catch(() => setHealth({ status: 'unavailable' }));
  }, []);

  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-5">
              <h1 className="display-5 fw-bold mb-3">OctoFit Tracker</h1>
              <p className="lead text-muted mb-4">
                A modern multi-tier fitness tracking experience for teams, activities, and progress.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge bg-primary">React 19</span>
                <span className="badge bg-success">Vite</span>
                <span className="badge bg-info text-dark">Express + TypeScript</span>
                <span className="badge bg-warning text-dark">MongoDB + Mongoose</span>
              </div>
              <div className="mt-4 p-3 rounded bg-light">
                <strong>API status:</strong>{' '}
                {health ? JSON.stringify(health) : 'Checking...'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
