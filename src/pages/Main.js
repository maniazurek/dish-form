import { useState } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Content from "../components/Content";
import Navigation from "../components/Navigation";

const Main = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const openProfile = () => {
    setIsProfileOpen(true);
  };

  const closeProfile = () => {
    setIsProfileOpen(false);
  };

  return (
    <>
      <Routes>
        <Route
          path="/dishes"
          element={
            <Content
              isProfileOpen={isProfileOpen}
              closeProfile={closeProfile}
            />
          }
        />
      </Routes>
      <Outlet />
      <Navigation openProfile={openProfile} />
    </>
  );
};

export default Main;
