import "./App.css";
import Events from './layout/Events';
import EventDetails from './layout/EventDetails';


function App() {



  return (
    <div className="App">
      <div className="Container">
      <main className="EventsMain" >
        <Events />
      </main>
      <div className="EventDetailsRight" >
        <EventDetails />
      </div>
      </div>
     
    </div>
  );
}

export default App;
