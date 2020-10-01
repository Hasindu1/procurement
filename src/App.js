import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Route} from "react-router-dom";


import NavBar from './components/navbar'

// components
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Order from './pages/order'
import OrderList from './pages/orderList'
import AuthManagerOrderList from './pages/authManagerOrederList'
import AuthManagerOrder from './pages/authManagerOrder'

export default function App() {
  return (
    <Router>
    <div className="container">
      
  <br/>
  <Route exact path="/" exact component={Dashboard} />
  <Route path="/OrderList"  component={OrderList} />
  <Route path="/Order/:id" component={Order}/>
  <Route path="/AuthManagerOrderList"  component={AuthManagerOrderList} />
  <Route path="/AuthManagerOrder/:id" component={AuthManagerOrder}/>
  </div>
  </Router>
  )
}
