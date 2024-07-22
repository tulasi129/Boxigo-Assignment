import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home/index.jsx";
import Profile from "./components/Profile/index.jsx";
import Quote from "./components/Quote/index.jsx";
import Logout from "./components/Logout/index.jsx";

function App() {
  // Create the router with routes defined using createRoutesFromElements
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Home />} />
        <Route path="/moves" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="logout" element={<Logout />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
