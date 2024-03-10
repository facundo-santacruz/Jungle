import './App.css';
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import "./index.css";
import Truck from './Container/Truck';
import Trucks from './Container/Trucks';
import Drivers from './Container/Drivers';
import AddTruck from './Component/AddTruck';
import AddDriver from './Component/AddDriver';
import Quantity from './Component/Quantity';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
          <Routes>
            <Route path="/" Component={Truck}></Route>
            <Route path='/arrival' Component={Trucks} />
            <Route path='/departure' Component={Trucks} />
            <Route path='/gasoline' Component={Trucks} />
            <Route path='/:type/:truck' Component={Drivers} />
            <Route path='/addTruck' Component={AddTruck} />
            <Route path='/addDriver' Component={AddDriver} />
            <Route path='/:type/:truck/quantity' Component={Quantity} />

          </Routes>
        

      </BrowserRouter>
    </div>
  );
}

export default App;
