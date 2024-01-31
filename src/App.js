import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { Home } from "./components/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import './App.css';

import { AuthProvider } from "./context/authContext.js";
function App() {
  return (
    
    
    <div className=" bg-slate-300 text-black h-screen flex text-white bg-custom">
     
      <AuthProvider>
      <div className="w-full max-w-xs m-auto animate__animated animate__fadeIn duration-2000 ">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
        </div>
      </AuthProvider>
    </div>
    
  );
}

export default App;