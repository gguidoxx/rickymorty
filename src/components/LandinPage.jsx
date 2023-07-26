import React from "react";
import { Link } from "react-router-dom";
import Image from "./landingimage.jpg";
export const LandinPage = () => {
  return (
    <>
      <img src={Image} className="absolute" />
      <div className="flex items-center justify-center h-screen">
        <Link
          to="/characters"
          className="absolute p-4 text-5xl text-gray-400 rounded-3xl bg-slate-900"
        >
          Ver Personajes
        </Link>
      </div>
    </>
  );
};
