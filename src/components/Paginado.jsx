import React from "react";

export default function Paginado({
  handlePrevPage,
  currentPage,
  handleNextPage,
  handleFirstPage,
  handleLastPage,
}) {
  return (
    <div className="flex justify-center">
      <button onClick={handleFirstPage}>IR A LA PRIMER PÁGINA</button>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Anterior
      </button>
      <span> Página {currentPage}</span>
      <button onClick={handleNextPage}>Siguiente</button>
    </div>
  );
}
