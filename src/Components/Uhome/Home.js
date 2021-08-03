import React from 'react';
import {Route, Switch, Link, useParams} from 'react-router-dom';

const Home = () => {
    return (
        <div className="">
            <ul>
                <h1>
                    <li><Link to="/update">update</Link></li>
                    <li><Link to="/delete">delete</Link></li>
                    <li><Link to="/search">search</Link></li>
                </h1>
            </ul>

            <div className="route-area">
            <Switch>
                <Route path="/update" exact render={()=><h1>update</h1>}></Route>
                <Route path="/delete" exact render={()=><h1>delete</h1>}></Route>
                <Route path="/search" exact render={()=><h1>search</h1>}></Route>
            </Switch>
            </div>
        </div>
    );
};

export default Home;