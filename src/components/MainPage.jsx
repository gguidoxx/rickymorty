import { Cards } from "./cards";
import React, { useState, useEffect } from "react";
import Paginado from "./Paginado";
import useFetchCharacters from "../customHooks/useFetchCharacters";

function MainPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { characters, loading, error } = useFetchCharacters(currentPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  const handleFirstPage = () => {
    setCurrentPage(1);
  };
 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <section className="grid content-center justify-center 2xl:grid-cols-3 2xl:gap-5 2xl:m-5 2xl:mt-0 2xl:mb-0 md:grid-cols-1 md:gap-2 lg:grid-cols-2 lg:gap-2 ">
        {/* Renderiza los datos obtenidos */}

        {characters.map((e) => (
          <Cards
            id={e.id}
            name={e.name}
            status={e.status}
            species={e.species}
            gender={e.gender}
            origin={e.origin.name}
            location={e.location.name}
            image={e.image}
            key={e.id}
          />
        ))}
      </section>

      {/* Paginación */}
      <Paginado
        handlePrevPage={handlePrevPage}
        currentPage={currentPage}
        handleNextPage={handleNextPage}
        handleFirstPage={handleFirstPage}
      />
    </>
  );
}

export default MainPage;
