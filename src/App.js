import User from "./Components/Login/Login";
import Edit from "./Components/Edit/Edit";
import {BrowserRouter} from 'react-router-dom';
import Main from "./Components/Main";
import Home from "./Components/Uhome/Home";




function App() {
  return (
    <div>
        <BrowserRouter>
          <Main></Main>
          <Home></Home>
        </BrowserRouter>
        
     
     
    </div>
  );
}




export default App;
