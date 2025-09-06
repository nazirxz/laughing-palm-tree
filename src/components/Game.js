import React, { useState } from 'react';
import Scene1 from '../scenes/Scene1';
import Scene2 from '../scenes/Scene2';
import Scene3 from '../scenes/Scene3';
import Scene4 from '../scenes/Scene4';
import Scene5 from '../scenes/Scene5';

const Game = () => {
  const [currentScene, setCurrentScene] = useState(1);
  const [gameData, setGameData] = useState({
    heartsCollected: 0,
    starsCollected: 0,
    giftsOpened: 0,
    playerName: 'Rinan Dihana'
  });

  const nextScene = () => {
    if (currentScene < 5) {
      setCurrentScene(currentScene + 1);
    }
  };

  const updateGameData = (data) => {
    setGameData({ ...gameData, ...data });
  };

  const renderScene = () => {
    switch (currentScene) {
      case 1:
        return <Scene1 onNext={nextScene} gameData={gameData} />;
      case 2:
        return <Scene2 onNext={nextScene} gameData={gameData} updateGameData={updateGameData} />;
      case 3:
        return <Scene3 onNext={nextScene} gameData={gameData} updateGameData={updateGameData} />;
      case 4:
        return <Scene4 onNext={nextScene} gameData={gameData} updateGameData={updateGameData} />;
      case 5:
        return <Scene5 gameData={gameData} />;
      default:
        return <Scene1 onNext={nextScene} gameData={gameData} />;
    }
  };

  return (
    <div className="game-container">
      {renderScene()}
    </div>
  );
};

export default Game;