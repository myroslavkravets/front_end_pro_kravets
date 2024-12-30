import React from "react";
import "./style.css";

function App() {
  return (
      <div className="container mt-5">
        <header className="text-center mb-4">
          <h1>SWAPI Interface</h1>
          <p>Welcome to the Star Wars API interface!</p>
        </header>

        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header">People</div>
              <div className="card-body">
                <p>Browse and search for Star Wars characters.</p>
                <button className="btn btn-primary btn-sm w-100">View People</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header">Planets</div>
              <div className="card-body">
                <p>Explore planets from the Star Wars universe.</p>
                <button className="btn btn-primary btn-sm w-100">View Planets</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-header">Starships</div>
              <div className="card-body">
                <p>Discover iconic Star Wars starships.</p>
                <button className="btn btn-primary btn-sm w-100">View Starships</button>
              </div>
            </div>
          </div>
        </div>

        <footer className="text-center mt-4">
          <small>Powered by SWAPI</small>
        </footer>
      </div>
  );
}

export default App;
