import React from "react";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AppRoutes />
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />
    </>
  );
}

export default App;
