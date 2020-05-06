import React from 'react';
import Myuploads from './dashboard/Myuploads.js';
import Profile from './dashboard/Profile.js';
import Downloadhistory from './dashboard/Downloadhistory.js';
import Sharedmodels from './dashboard/Sharedmodels.js'



import './App.css';
import { Button } from 'reactstrap';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="container">

      <div class="row mt-4">
        <div className="col-sm-3">





          <div class="navbar navbar-expand-lg navbar-light bg-light">

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            
              <div class="">
                <ul>
               <li class=" p-2 selection" ><NavLink exact={true} activeClassName='is-active' to="/" >Profile </NavLink></li> 
               <li class=" p-2 selection"> <NavLink activeClassName='is-active' to="/myuploads"  >My Uploads</NavLink></li>
               <li class="p-2 selection" > <NavLink  activeClassName='is-active' to="/sharedmodels" >Shared Models</NavLink></li>
                <li class="p-2 selection" ><NavLink activeClassName='is-active'  to="/downloadhistory" >Download History</NavLink></li>
                </ul>

             
            </div>
          </div>
        </div>

        <div classsName="col-sm-9">


          <Switch>
            <Route path="/" component={Profile} exact />
            <Route path="/myuploads" component={Myuploads} />
            <Route path="/sharedmodels" component={Sharedmodels} />
            <Route path="/downloadhistory" component={Downloadhistory} />
          </Switch>
        </div>




      </div>


    </div>






  );
}

export default App;
