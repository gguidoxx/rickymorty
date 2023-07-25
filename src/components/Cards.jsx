import React from "react";
import { Link } from "react-router-dom";

export const Cards = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  location,
  image,
}) => {
  return (
    <>
      <article
        key={id}
        className="relative flex bg-gray-800 rounded-lg max-h-60 hover:bg-gray-700 m-2"
      >
        <img src={image} className="rounded-l-lg" />
        <div className="ml-3">
          <Link
            className="font-bold text-orange-400 xl hover:text-orange-500"
            to={`/character/${id}`}
            target="blank"
          >
            {" "}
            {name}
          </Link>

          <div>
            <span>
              {status == "Alive" ? (
                <span className="bg-green-600 border-2 border-green-600 rounded-full "></span>
              ) : status == "unknown" ? (
                <span className="border-2 border-white rounded-full "></span>
              ) : (
                <span className="border-2 border-red-700 rounded-full "></span>
              )}
              {status} - {species} - {gender}
            </span>
          </div>
          <div>
            <h4 className="mt-2 text-gray-400 ">From: </h4>
            <p>{origin}</p>
            <h4 className="mt-2 text-gray-400">Last known location:</h4>
            <p>{location}</p>
          </div>
        </div>
      </article>
    </>
  );
};
