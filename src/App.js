import { useState } from "react";
import Tours from "./components/Tours";
import data from "./components/data";

function App() {
  const [tours, setTours] = useState(data);

  const refreshHandler = () =>  setTours(data);
  

  if(tours.length === 0){
    return(
      <div className="refresh">
        <h2 className="head">
          No Tours Left
        </h2>
        <button className="btnWhite" onClick={refreshHandler}>
          Refresh
        </button>
      </div>
    )
  }
  const removeTour = (id) =>{
    const newTour = tours.filter(tours => tours.id !==id );
    setTours(newTour);
  }
  return (
    <div className="App">
      <Tours tours={tours}  removeTour={removeTour} />
    </div>
  );
}

export default App;
