import React from 'react';

function Forca({ erros }) {
  return (
    <div className="forca-container">
      <svg height="250" width="200" className="forca">
        {/* Base */}
        <line x1="60" y1="20" x2="140" y2="20" strokeWidth="4" />
        <line x1="140" y1="20" x2="140" y2="50" strokeWidth="4" />
        <line x1="60" y1="20" x2="60" y2="230" strokeWidth="4" />
        <line x1="20" y1="230" x2="100" y2="230" strokeWidth="4" />

        {/* Cabeça */}
        {erros > 0 && (
          <circle cx="140" cy="70" r="20" />
        )}
        
        {/* Corpo */}
        {erros > 1 && (
          <line x1="140" y1="90" x2="140" y2="150" strokeWidth="4" />
        )}
        
        {/* Braço esquerdo */}
        {erros > 2 && (
          <line x1="140" y1="120" x2="120" y2="100" strokeWidth="4" />
        )}
        
        {/* Braço direito */}
        {erros > 3 && (
          <line x1="140" y1="120" x2="160" y2="100" strokeWidth="4" />
        )}
        
        {/* Perna esquerda */}
        {erros > 4 && (
          <line x1="140" y1="150" x2="120" y2="180" strokeWidth="4" />
        )}
        
        {/* Perna direita */}
        {erros > 5 && (
          <line x1="140" y1="150" x2="160" y2="180" strokeWidth="4" />
        )}
      </svg>
    </div>
  );
}

export default Forca;