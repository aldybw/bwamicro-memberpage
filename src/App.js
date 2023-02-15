import "assets/css/style.css";
import GuestRoute from "components/Routes/GuestRoute";
import MemberRoute from "components/Routes/MemberRoute";
import { setAuthorizationHeader } from "configs/axios";
import users from "constants/api/users";
import { createBrowserHistory } from "history";
import Unauthenticated from "pages/401";
import NotFound from "pages/404";
import DetailsClass from "pages/DetailsClass";
import Joined from "pages/Joined";
import Login from "pages/Login";
import MyClass from "pages/MyClass";
import Register from "pages/Register";
import Settings from "pages/Settings";
import Transactions from "pages/Transactions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import { populateProfile } from "store/actions/users";

function App() {
  const dispatch = useDispatch();
  const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

  useEffect(() => {
    let session = null;
    if (localStorage.getItem("BWAMICRO:token")) {
      session = JSON.parse(localStorage.getItem("BWAMICRO:token"));
      setAuthorizationHeader(session.token);

      users
        .details()
        .then((details) => {
          dispatch(populateProfile(details.data));
        })
        .catch();
    }
  }, [dispatch]);

  return (
    <>
      <Router history={history}>
        <Switch>
          <GuestRoute path="/login" component={Login}></GuestRoute>
          <GuestRoute path="/register" component={Register}></GuestRoute>
          <GuestRoute path="/private" component={Unauthenticated}></GuestRoute>

          <MemberRoute exact path="/" component={MyClass}></MemberRoute>
          <MemberRoute
            exact
            path="/joined/:class"
            component={Joined}
          ></MemberRoute>

          <MemberRoute
            exact
            path="/courses/:class/:chapter/:lesson/:uid"
            component={DetailsClass}
          ></MemberRoute>
          <MemberRoute
            exact
            path="/courses/:class/"
            component={DetailsClass}
          ></MemberRoute>
          <MemberRoute path="/settings" component={Settings}></MemberRoute>
          <MemberRoute
            path="/transactions"
            component={Transactions}
          ></MemberRoute>

          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
