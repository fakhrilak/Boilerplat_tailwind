import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
const App = () => {
  return (
    <div>
     <Router>
        <Navbar>
              {/* <Switch> */}
              {/* <Route exact path="/" component={Home}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/login" component={Login}/>
              <UserRoute exact path="/profile" component={Profile} to={"/login"}/>
              <UserRoute exact path="/write/:id" component={Write} to={"/login"}/>
              <UserRoute exact path="/music" component={Music} to={"/login"}/>
              <AdminRoute exact path="/form" component={Form}/>
              <Route exact path="/sub-category/:id" component={SubCategory}/>
              <Route exact path="/content/:id" component={Read}/> */}
              {/* </Switch> */}
        </Navbar>
      </Router>
    </div>
  )
}

export default App

