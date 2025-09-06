import React, { useState, useEffect } from 'react';
import { CatVector, BalloonVector, HouseVector, PartyVector, FlowerStarVector, ButterflyVector } from '../components/Vectors';

const Scene1 = ({ onNext, gameData }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [catAnimation, setCatAnimation] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setShowDialog(true);
      setCatAnimation('bounce');
    }, 1000);
  }, []);

  const handleStartAdventure = () => {
    setCatAnimation('excited');
    setTimeout(() => {
      onNext();
    }, 1000);
  };

  return (
    <div className="scene active" style={{
      background: 'linear-gradient(135deg, #FFB6C1, #F0FFF0)',
      backgroundImage: `
        radial-gradient(circle at 20% 80%, #FFDAB9 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, #E6E6FA 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, #FFF2CC 0%, transparent 50%)
      `
    }}>
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '0',
        right: '0',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#4A5568',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px'
      }}>
        <HouseVector size={40} />
        <span>Rumah Ulang Tahun</span>
        <PartyVector size={40} />
      </div>

      <div style={{
        position: 'absolute',
        top: '50px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        <BalloonVector size={50} color="#FFB6C1" />
        <BalloonVector size={45} color="#E6E6FA" />
        <BalloonVector size={52} color="#B6E5D8" />
        <BalloonVector size={48} color="#FFDAB9" />
        <BalloonVector size={50} color="#FFF2CC" />
      </div>

      <div 
        style={{
          marginTop: '100px',
          animation: catAnimation === 'bounce' ? 'bounce 1s ease-in-out infinite alternate' : 
                    catAnimation === 'excited' ? 'bounce 0.3s ease-in-out infinite' : 'none'
        }}
      >
        <CatVector size={120} color="#FFDAB9" />
      </div>

      {showDialog && (
        <div className="dialog-box">
          <p>Halo {gameData.playerName}! 🌟</p>
          <p>Aku kucing kecil yang siap menemanimu dalam petualangan ulang tahun yang spesial!</p>
          <p><strong>Ikuti aku dalam petualangan kecil ini!</strong></p>
        </div>
      )}

      {showDialog && (
        <button 
          className="interactive-button"
          onClick={handleStartAdventure}
          style={{
            background: 'linear-gradient(135deg, #FFB6C1, #E6E6FA)',
            fontSize: '20px',
            padding: '20px 40px'
          }}
        >
          ✨ Mulai Petualangan! ✨
        </button>
      )}

      <div style={{
        position: 'absolute',
        bottom: '20px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        alignItems: 'center'
      }}>
        <FlowerStarVector size={45} />
        <ButterflyVector size={50} />
        <FlowerStarVector size={40} />
      </div>
    </div>
  );
};

export default Scene1;