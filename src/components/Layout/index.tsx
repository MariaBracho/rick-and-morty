import { Outlet } from "react-router-dom";
import { componentType } from "@/types/generalTypes";

// component
import NavBar from "./NavBar";
import Hero from "./Hero";
import Footer from "./Footer";

export default function Layout(): componentType {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <NavBar />
      <Hero />
      <div className="w-11/12">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
