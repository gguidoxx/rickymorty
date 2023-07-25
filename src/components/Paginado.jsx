import React from "react";

export default function Paginado({
  handlePrevPage,
  currentPage,
  handleNextPage,
  handleFirstPage,
  handleLastPage,
}) {
  return (
    <div>
      <button onClick={handleFirstPage}>IR A LA PRIMER PÁGINA</button>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Anterior
      </button>
      <span> Página {currentPage}</span>
      <button onClick={handleNextPage}>Siguiente</button>
    </div>
  );
}
