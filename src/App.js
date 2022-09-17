import React from "react";
// import { Route, Switch } from "react-router";
import Home from "./Component/Home/Home";
// import About from "./Component/Home/2-main-body/3-About/AboutSec";
import About from "./Component/pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import About from "./Component/Home/2-main-body/3-About/AboutStd/AboutStd";
import Header from "./Component/Home/1-Header/Header";
import Footer from "./Component/Home/3-Footer/Footer";
import Contact from "./Component/Home/Contact";
import Service from "./Component/Home/Services";
import Error from "./Component/pages/Error";
import { CreateConText } from "./ContextApi/createConText";
import TraidingCourses from "./Component/pages/TraidingCoursese";
import Login from "./Component/pages/Login";
import Register from "./Component/pages/Register";

const App = () => {
  return (
    <CreateConText>
      <div className='App'>
        <Header />
        <Router>
          <Switch>
            <Route exact path='/' component={Home}></Route>*{" "}
            <Route exact path='/login' component={Login}></Route>*{" "}
            <Route exact path='/register' component={Register}></Route>*{" "}
            <Route exact path='/home' component={Home}></Route>*{" "}
            <Route exact path='/about' component={About}></Route>*{" "}
            <Route path='/about' component={About}></Route>*{" "}
            <Route path='/traidingcourses' component={TraidingCourses}>
              {" "}
            </Route>
            * <Route path='/contact' component={Contact}></Route>
            <Route path='/service' component={Service}></Route>
            <Route component={Error}></Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </CreateConText>
  );
};

export default App;
