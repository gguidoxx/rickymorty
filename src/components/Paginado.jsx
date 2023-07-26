import React from "react";

export default function Paginado({
  handlePrevPage,
  currentPage,
  handleNextPage,
  handleFirstPage,
}) {
  return (
    <div className="grid justify-center items-center grid-cols-3 grid-rows-2 gap-0">
      <button onClick={handleFirstPage} className="rounded-sm mr-2">
        IR A LA PRIMER PÁGINA
      </button>
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className=""
      >
        Anterior
      </button>
      <span> Página {currentPage}</span>
      <button onClick={handleNextPage} disabled={currentPage === 42}>
        Siguiente
      </button>
    </div>
  );
}
