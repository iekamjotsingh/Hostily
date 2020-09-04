import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Pages/HomePage/Home";
import Products from "./Components/Pages/Products/Products";
import SignUp from "./Components/Pages/SignUp/SignUp";
import Footer from "./Components/Pages/Footer/Footer";
import Services from "./Components/Pages/Services/Services";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/Hostily" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/sign-up" component={SignUp} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
