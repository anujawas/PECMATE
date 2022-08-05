import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import pecmarket from './pecmarket';
import itemlist from './pankaj_Item_list';
// import rohititem from './rohit_item_list';
import Home from './html/index';
import Assignment from './html/assignment';
import service from './html/service.js';
import contact from './html/contact.js';
import about from './html/about';
import Signinmain from './signup/signinmain';
import Signinfreelancer from './signup/signinfreelancer';
import checkout from './html/PecMarket/checkout';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pec_market" component={pecmarket} />
        <Route exact path="/pankaj_Item_list/:shopName" component={itemlist} />
        {/* <Route exact path="/rohit_item_list/:shopname" component={rohititem}/> */}
        <Route exact path="/assignment" component={Assignment}/>
        <Route exact path="/service" component={service}/>
        <Route exact path="/contact" component={contact}/>
        <Route exact path="/about" component={about}/>
        <Route exact path="/signup/Signinmain" component={Signinmain}/>
        <Route exact path="/signup/signinfreelancer" component={Signinfreelancer}/>
        <Route exact path="/checkout" component={checkout}/>
        
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
