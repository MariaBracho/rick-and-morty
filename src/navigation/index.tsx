import { BrowserRouter, Routes, Route } from "react-router-dom";
import { componentType } from "@/types/generalTypes";

// screens
import Character from "@/screens/Character";
import Layout from "@/components/Layout";
import CharacterFavorite from "@/screens/CharacterFavorite";
import Home from "@/screens/Home";
import Characterdetail from "@/screens/Characterdetail";

export default function Navigation(): componentType {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Character />} />
          <Route path="/favorites" element={<CharacterFavorite />} />
          <Route path="/character/:id" element={<Characterdetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
