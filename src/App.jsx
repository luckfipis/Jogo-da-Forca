// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import Forca from './assets/components/Forca';
import ThemeToggle from './assets/components/ThemeToggle';
import GameOver from './assets/components/GameOver';
import Teclado from './assets/components/Teclado';
import palavras from './palavras';

function App() {
  const [palavra, setPalavra] = useState('');
  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [ganhou, setGanhou] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  // Sons
  const somErro = new Audio('sons/erro.mp3');
  const somAcerto = new Audio('/sons/acerto.mp3');
  const somTecla = new Audio('/sons/tecla.mp3');

  // Inicializa o jogo
  useEffect(() => {
    iniciarJogo();
  }, []);

  // Aplica o tema escuro/claro
  useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  const iniciarJogo = () => {
    const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(palavraAleatoria.toLowerCase());
    setLetrasAdivinhadas([]);
    setLetrasErradas([]);
    setGameOver(false);
    setGanhou(false);
  };

  const verificaLetra = (letra) => {
    if (gameOver) return;
    
    somTecla.play();
    
    if (letrasAdivinhadas.includes(letra) || letrasErradas.includes(letra)) {
      return;
    }
    
    if (palavra.includes(letra)) {
      somAcerto.play();
      setLetrasAdivinhadas([...letrasAdivinhadas, letra]);
      
      // Verifica se ganhou
      const todasLetrasAdivinhadas = [...letrasAdivinhadas, letra].every(
        (char) => palavra.includes(char)
      ) && [...new Set(palavra.split(''))].every(
        (char) => [...letrasAdivinhadas, letra].includes(char)
      );
      
      if (todasLetrasAdivinhadas) {
        setGanhou(true);
        setGameOver(true);
      }
    } else {
      somErro.play();
      const novasLetrasErradas = [...letrasErradas, letra];
      setLetrasErradas(novasLetrasErradas);
      
      // Verifica se perdeu (6 erros = forca completa)
      if (novasLetrasErradas.length >= 6) {
        setGameOver(true);
      }
    }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const exibirPalavra = () => {
    return palavra.split('').map((letra) => 
      letrasAdivinhadas.includes(letra) ? letra : '_'
    ).join(' ');
  };

  return (
    <div className="app">
      <h1>Jogo da Forca</h1>
      <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <div className="game-container">
        <Forca erros={letrasErradas.length} />
        
        <div className="palavra-container">
          <h2>{exibirPalavra()}</h2>
        </div>
        
        <div className="letras-erradas">
          <h3>Letras erradas:</h3>
          <div>{letrasErradas.join(' ')}</div>
        </div>
        
        <Teclado
          verificaLetra={verificaLetra} 
          letrasAdivinhadas={letrasAdivinhadas}
          letrasErradas={letrasErradas}
          gameOver={gameOver}
        />
        
        {gameOver && (
          <GameOver 
            ganhou={ganhou} 
            palavra={palavra}
            iniciarJogo={iniciarJogo}
          />
        )}
      </div>
    </div>
  );
}

export default App;