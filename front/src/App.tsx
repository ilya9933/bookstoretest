import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import LayoutDefault from "./component/LayoutDefault";
import { BrowserRouter as Route, Switch } from "react-router-dom";
import PrivateRoute from "./route/PrivateRouter";
import { getUserToken } from "./State/userReducer/userThunk";

// import PublicRoute from "./route/PublicRouter";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      return;
    }

    dispatch(getUserToken(token));
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route component={LayoutDefault} path="/" exact />
        {/* <PrivateRoute component={Dashboard}  path="/dashboard" exact /> */}
      </Switch>
    </div>
  );
}

export default App;
