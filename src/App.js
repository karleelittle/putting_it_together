import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard';


function App() {
  return (
    <div className="App">
            <PersonCard
        lastName={"Little"}
        firstName={"Karlee"}
        age={22}
        hair={"dark brown"}
      />
      <PersonCard
        lastName={"Stevens"}
        firstName={"Kristin"}
        age={22}
        hair={"black"}
      />
    </div>
  );
}

export default App;
