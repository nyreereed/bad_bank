import Nav from "components/nav";
import Home from "screens/home";
import SignUp from "screens/signup";
import Login from "screens/login";
import Deposit from "screens/deposit";
import Withdraw from "screens/withdraw";
import AllData from "screens/alldata";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="px-4 py-5">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/deposit">
          <Deposit />
        </Route>
        <Route path="/withdraw">
          <Withdraw />
        </Route>
        <Route path="/all-data">
          <AllData />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
