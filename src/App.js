import React from 'react';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
              <Sidebar/>
          </div>
          <div className="col-lg-8">
            <div className="app_main-content">
              Main
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
