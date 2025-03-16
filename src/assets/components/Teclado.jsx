import React from 'react';

function Teclado({ verificaLetra, letrasAdivinhadas, letrasErradas, gameOver }) {
  const alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('');
  
  return (
    <div className="teclado">
      {alfabeto.map((letra) => (
        <button
          key={letra}
          onClick={() => verificaLetra(letra)}
          disabled={
            letrasAdivinhadas.includes(letra) || 
            letrasErradas.includes(letra) || 
            gameOver
          }
          className={`tecla ${
            letrasAdivinhadas.includes(letra) 
              ? 'acerto' 
              : letrasErradas.includes(letra) 
                ? 'erro' 
                : ''
          }`}
        >
          {letra.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default Teclado;