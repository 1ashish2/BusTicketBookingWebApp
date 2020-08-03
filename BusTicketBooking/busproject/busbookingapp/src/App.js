import React from 'react';
import Navigation from './components/navigation/Navigation'
import Plan from './components/planjourney/Plan'
import Seatlist from './components/seat/pracseatarrangement'
import Registration from './components/form/regisprac'
import Payment from './components/payment/Payment';
import Ticket from './components/ticket/Ticket';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <>
      <Navigation/>
      <BrowserRouter>
      
      <Switch>
      <Route  exact from="/" component={Plan} />
        <Route exact from="/register" component={Registration} />
        <Route  from="/seatlist" component={Seatlist} />
        <Route  from="/payment" component={Payment} />
        <Route  from="/ticket" component={Ticket} />
     
      </Switch>
     
      
      </BrowserRouter>
      
     
      
    </>
  );
}

export default App;
