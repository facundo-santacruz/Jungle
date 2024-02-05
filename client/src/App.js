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





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
          <Routes>
            <Route path="/" Component={Truck}></Route>
          </Routes>
        

      </BrowserRouter>
    </div>
  );
}

export default App;
