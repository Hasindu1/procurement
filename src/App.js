import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Route} from "react-router-dom";


import NavBar from './components/navbar'

// components
import Login from './pages/login'
import Dashboard from './pages/dashboard'
import Order from './pages/order'
import OrderList from './pages/orderList'

export default function App() {
  return (
    <Router>
    <div className="container">
      
  <br/>
  <Route path="/" exact component={Dashboard} />
  <Route path="/Order" component={Order} />
  <Route path="/OrderList"  component={OrderList} />
 
  </div>
  </Router>
  )
}
