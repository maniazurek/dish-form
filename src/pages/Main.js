import { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Content from "../components/Content";
import Navigation from "../components/Navigation";

const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/dishes" element={<Content />} />
      </Routes>
      <Outlet />
      <Navigation />
    </>
  );
};

export default Main;
