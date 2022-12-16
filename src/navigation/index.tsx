import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Charater from "@/screens/Charater";
import Layout from "@/components/Layout";
import CharaterFavorite from "@/screens/CharaterFavorite";
import Home from "@/screens/Home";

export default function Navigation(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Charater" element={<Charater />} />
          <Route path="/favorites" element={<CharaterFavorite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
