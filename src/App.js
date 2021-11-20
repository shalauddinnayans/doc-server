import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import AddProduct from "./Pages/Dashboard/AddProduct/AddProduct";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import TopSales from "./Pages/TopSales/TopSales";
import AuthProvider from "./contexts/AuthProvider";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Footer from "./Pages/Shared/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ManageProduct from "./Pages/Dashboard/ManageProduct/ManageProduct";
import Purchase from "./Pages/Dashboard/Purchase/Purchase";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Pay from "./Pages/Dashboard/Pay/Pay";
import ManageOrders from "./Pages/Dashboard/ManageOrders/ManageOrders";

function App() {
  return (
    
    <div className="App">
      <AuthProvider>
        <Router>
          {/* <Navigation /> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about"></Route>
            <Route path="/about"></Route>
            <Route path="/topsales">
              <TopSales></TopSales>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/pay">
              <Pay />
            </PrivateRoute>
            <PrivateRoute path="/addreview">
              <AddReview />
            </PrivateRoute>
            <PrivateRoute path="/addproduct">
              <AddProduct />
            </PrivateRoute>
            <PrivateRoute path="/manageorder">
              <ManageOrders />
            </PrivateRoute>
            <PrivateRoute path="/manageproduct">
              <ManageProduct />
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          {/* <Footer /> */}
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
