import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({}) => {
  return (
    <Route
    // {...rest}
    // render={(props) =>
    //   auth.hasOwnProperty("id") ? (
    //     <Component {...props} />
    //   ) : (
    //     <Redirect to="/login" />
    //   )
    // }
    />
  );
};

export default PrivateRoute;
