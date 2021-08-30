import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import BooksList from "./component/BooksList";
import Header from "./component/Header";
import LayoutDefault from "./component/LayoutDefault";
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
      <LayoutDefault>
        <BooksList />
      </LayoutDefault>
    </div>
  );
}

export default App;
