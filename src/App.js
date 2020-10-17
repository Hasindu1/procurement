import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Route} from "react-router-dom";

// Importing Pages

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
import DeliveryList from './pages/ProcurmentStaff/Delivery_Section/deliveryList'
import HandlePayment from './pages/ProcurmentStaff/Payment_Section/handlePayment';
import PayedList from './pages/ProcurmentStaff/Payment_Section/payedList';
import AccountDisplay from './pages/ProcurmentStaff/Account_Section/account'
import PolicyDisplay from './pages/ProcurmentStaff/Policy_Section/policies'
import AuthDashboard from './pages/AuthManager/AuthMangerDashBoard'
import AuthManagerSupplierList from './pages/AuthManager/Supplier_Section/supplierList'
import AuthManagerSiteList from './pages/AuthManager/Site_Section/siteList'
import AuthManagerItemList from './pages/AuthManager/Item_Section/itemList'
import AuthManagerDeliveryList from './pages/AuthManager/Delivery_Section/deliveryList'
import AuthManagerPaymentList from './pages/AuthManager/Payment_Section/payedList'
import Account from './pages/AuthManager/Account_Section/account'
import EnquiryList from './pages/ProcurmentStaff/Order_Section/enquiryList';


export default function App() {
  return (
    <Router>
    <div className="container">
      <br/>

  {/* Login Routes */}
  <Route exact path="/" component={login} />

  {/* Procurement Staff Routes */}
  <Route path="/Dashboard" component={Dashboard} />
  <Route path="/OrderList"  component={OrderList} />
  <Route path="/Order/:id" component={Order}/>
  <Route path="/SupplierList" component={SupplierList}/>
  <Route path="/newSupplier" component={newSupplier}/>
  <Route path="/SiteList" component={SiteList}/>
  <Route path="/newSite" component={newSite}/>
  <Route path="/modifySupplier:id" component={modifySupplier}/>
  <Route path="/modifySite:id" component={modifySite}/>
  <Route path="/ItemList" component={ItemList}/>
  <Route path="/newItem" component={newItem}/>
  <Route path="/modifyItem:id" component={modifyItem}/>
  <Route path="/delivery" component={DeliveryList}/>
  <Route path="/delivery:id" component={HandlePayment} />
  <Route path="/paymentList" component={PayedList}/>
  <Route path="/accountDisplay" component={AccountDisplay}/>
  <Route path="/policyDisplay" component={PolicyDisplay}/>
  <Route path="/enquiries" component={EnquiryList}/>

  {/*Auth Manager Routes */}
  <Route path="/AuthDashBoard" component={AuthDashboard}/>
  <Route path="/AuthManagerOrderList"  component={AuthManagerOrderList} />
  <Route path="/AuthManagerOrder/:id" component={AuthManagerOrder}/>
  <Route path="/policy" component={policy}/>
  <Route path="/AuthManagerSupplierList" component={AuthManagerSupplierList}/>
  <Route path="/AuthManagerSiteList" component={AuthManagerSiteList}/>
  <Route path="/AuthManagerItemList" component={AuthManagerItemList}/>
  <Route path="/AuthManagerDeliveryList" component={AuthManagerDeliveryList}/>
  <Route path="/AuthManagerPaymentList" component={AuthManagerPaymentList}/>
  <Route path="/Account" component={Account}/>
  </div>
  </Router>
  )
}
