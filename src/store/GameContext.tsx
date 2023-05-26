import React, { createContext, useState, ReactNode } from 'react';

interface GameContextProps {
  playerName: string;
  setPlayerName: (name: string) => void;
}

export const GameContext = createContext<GameContextProps>({
  playerName: '',
  setPlayerName: () => {},
});

interface GameProviderProps {
  children: ReactNode;
}

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [playerName, setPlayerName] = useState('Guest');

  const handleSetPlayerName = (name: string) => {
    setPlayerName(name);
    localStorage.setItem('playerName', name);
  };

  return (
    <GameContext.Provider
      value={{ playerName, setPlayerName: handleSetPlayerName }}
    >
      {children}
    </GameContext.Provider>
  );
};
