import User from "./Login/Login";
import {Route, Switch, Link, useParams} from 'react-router-dom';
import Edit from "./Edit/Edit";
import Create from "./Login/Create";
import './Main.css';
import Home from "./Uhome/Home";


function Main() {
  return (
    <div>
        <div className="nav-bar">
            <ul>
                <h1>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/create">Create user</Link></li>
                </h1>
            </ul>
        </div>

        <div className="route-area">
            <Switch>
                <Route path="/home" exact render={()=>}></Route>
                <Route path="/login" exact render={()=> <User status='login'></User>}></Route>
                <Route path="/create" exact render={()=> <Create status='add'></Create>}></Route>
                <Route path="/edit/:id" children={<Create status='edit'/>}></Route>
                {/* <Route path="*">
                    <center>
                        <h2>
                            404 Page Not Found
                        </h2>
                    </center>
                </Route> */}
            </Switch> 
        </div>
    </div>
  );
}

function person(id){

}

export default Main;
