import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Route} from "react-router-dom";




// Pages

import Dashboard from './pages/ProcurmentStaff/dashboard'
import Order from './pages/ProcurmentStaff/Order_Section/order'
import OrderList from './pages/ProcurmentStaff/Order_Section/orderList'
import AuthManagerOrderList from './pages/AuthManager/Order_Section/authManagerOrederList'
import AuthManagerOrder from './pages/AuthManager/Order_Section/authManagerOrder'
import login from './pages/Login/login'
import SupplierList from "./pages/ProcurmentStaff/Supplier_Section/supplierList"
import SiteList from "./pages/ProcurmentStaff/Site_Section/siteList"
import newSupplier from "./pages/ProcurmentStaff/Supplier_Section/newSupplier"
import newSite from "./pages/ProcurmentStaff/Site_Section/newSite"
import modifySupplier from "./pages/ProcurmentStaff/Supplier_Section/modifySupplier"
import modifySite from "./pages/ProcurmentStaff/Site_Section/modifySite"
import modifyItem from "./pages/ProcurmentStaff/Item_Section/modifyItem"
import ItemList from "./pages/ProcurmentStaff/Item_Section/itemList"
import newItem from "./pages/ProcurmentStaff/Item_Section/newItem"
import policy from "./pages/AuthManager/Policy_Section/policies"

export default function App() {
  return (
    <Router>
    <div className="container">
      <br/>

  <Route exact path="/" component={login} />
  <Route path="/Dashboard" component={Dashboard} />
  <Route path="/OrderList"  component={OrderList} />
  <Route path="/Order/:id" component={Order}/>
  <Route path="/AuthManagerOrderList"  component={AuthManagerOrderList} />
  <Route path="/AuthManagerOrder/:id" component={AuthManagerOrder}/>
  <Route path="/SupplierList" component={SupplierList}/>
  <Route path="/newSupplier" component={newSupplier}/>
  <Route path="/SiteList" component={SiteList}/>
  <Route path="/newSite" component={newSite}/>
  <Route path="/modifySupplier:id" component={modifySupplier}/>
  <Route path="/modifySite:id" component={modifySite}/>
  <Route path="/ItemList" component={ItemList}/>
  <Route path="/newItem" component={newItem}/>
  <Route path="/modifyItem:id" component={modifyItem}/>
  <Route path="/policy" component={policy}/>
  </div>
  </Router>
  )
}
