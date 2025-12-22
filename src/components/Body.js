import Header from "./Header";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="h-screen">
      <Header />
      <Outlet />
    </div>
  );
};

export default Body;
