import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Header from "./component/Header";
import { getUserToken } from "./State/userReducer/userThunk";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    console.log("token", token);

    if (!token) {
      return;
    }
    console.log("rere");

    dispatch(getUserToken(token));
  }, []);

  return (
    <div className="App">
      <Header />;
    </div>
  );
}

export default App;
