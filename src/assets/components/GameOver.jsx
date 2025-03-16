import React from 'react';

function GameOver({ ganhou, palavra, iniciarJogo }) {
  return (
    <div className="game-over">
      <h2>{ganhou ? 'Parabéns! Você ganhou!' : 'Game Over!'}</h2>
      {!ganhou && <p>A palavra era: {palavra}</p>}
      <button className="btn-jogar-novamente" onClick={iniciarJogo}>
        Jogar Novamente
      </button>
    </div>
  );
}

export default GameOver;