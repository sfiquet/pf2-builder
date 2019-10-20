import React from 'react';
import MonsterBuilder from '../MonsterBuilder/MonsterBuilder';

function App() {
  return (
    <div className="d-flex flex-column h-100">
      <header className="container-fluid bg-info text-light text-center py-2 py-md-3">
        <h1 className="my-0">PF2 Builder</h1>
      </header>
      <main className="container my-2 my-md-3">
        <MonsterBuilder />
      </main>
      <footer className="container-fluid text-center mt-auto py-2 py-md-3 bg-info text-light">
       made by Sylvie Fiquet
      </footer>
    </div>
  );
}

export default App;
