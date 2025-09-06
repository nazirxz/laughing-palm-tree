import React, { useState, useEffect } from 'react';
import { CatVector, StarVector, BridgeVector } from '../components/Vectors';

const Scene3 = ({ onNext, gameData, updateGameData }) => {
  const [starsCollected, setStarsCollected] = useState(0);
  const [showCatDialog, setShowCatDialog] = useState(false);
  const [bridgeGlowing, setBridgeGlowing] = useState(false);
  const [fallingStars, setFallingStars] = useState([]);

  useEffect(() => {
    generateFallingStars();
    const interval = setInterval(generateFallingStars, 2000);
    return () => clearInterval(interval);
  }, []);

  const generateFallingStars = () => {
    const newStars = [];
    for (let i = 0; i < 3; i++) {
      newStars.push({
        id: Date.now() + i,
        x: Math.random() * 80 + 10,
        collected: false
      });
    }
    setFallingStars(prev => [...prev, ...newStars]);
    
    setTimeout(() => {
      setFallingStars(prev => prev.filter(star => Date.now() - star.id < 6000));
    }, 6000);
  };

  const handleStarClick = (starId) => {
    setFallingStars(prev => prev.map(star => 
      star.id === starId ? { ...star, collected: true } : star
    ));
    
    const newCount = starsCollected + 1;
    setStarsCollected(newCount);
    
    if (newCount === 5) {
      setBridgeGlowing(true);
      setTimeout(() => {
        setShowCatDialog(true);
        updateGameData({ starsCollected: newCount });
      }, 1000);
    }
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="scene active" style={{
      background: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)',
      backgroundImage: `
        radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
        radial-gradient(circle at 60% 80%, rgba(255, 255, 255, 0.08) 0%, transparent 40%)
      `,
      color: 'white'
    }}>
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '0',
        right: '0',
        textAlign: 'center',
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#FFD700'
      }}>
        ✨ Jembatan Bintang Ajaib ✨
      </div>

      <div className="progress-bar" style={{ 
        position: 'absolute', 
        top: '60px', 
        left: '50%', 
        transform: 'translateX(-50%)',
        background: 'rgba(255,255,255,0.2)'
      }}>
        <div 
          className="progress-fill" 
          style={{ 
            width: `${(starsCollected / 5) * 100}%`,
            background: 'linear-gradient(90deg, #FFD700, #FFA500)'
          }}
        ></div>
      </div>

      <div style={{
        position: 'absolute',
        top: '90px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '18px',
        color: '#FFD700'
      }}>
        <StarVector size={25} /> Terkumpul: {starsCollected}/5
      </div>

      <div style={{
        position: 'absolute',
        bottom: '35%',
        left: '10%',
        right: '10%',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <BridgeVector size={500} glowing={bridgeGlowing} />
      </div>

      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '0',
        right: '0',
        height: '15%',
        background: 'linear-gradient(180deg, transparent, rgba(0, 100, 200, 0.3))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '32px'
      }}>
        🌊 ~ ~ ~ ~ ~ ~ ~ ~ ~ 🌊
      </div>

      {fallingStars.map((star) => (
        !star.collected && (
          <div
            key={star.id}
            onClick={() => handleStarClick(star.id)}
            style={{
              position: 'absolute',
              left: `${star.x}%`,
              top: '-50px',
              cursor: 'pointer',
              animation: 'fall 4s linear',
              zIndex: 10,
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.3)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <StarVector size={45} />
          </div>
        )
      ))}

      <div 
        style={{
          position: 'absolute',
          bottom: bridgeGlowing ? '50%' : '25%',
          left: bridgeGlowing ? '50%' : '20%',
          transform: 'translateX(-50%)',
          transition: 'all 1s ease',
          animation: showCatDialog ? 'bounce 0.3s ease-in-out infinite' : 'none'
        }}
      >
        <CatVector size={90} color="#FFDAB9" />
      </div>

      {showCatDialog && (
        <div className="dialog-box" style={{ 
          position: 'absolute', 
          bottom: '5%', 
          left: '50%', 
          transform: 'translateX(-50%)',
          background: 'rgba(255, 255, 255, 0.95)'
        }}>
          <p><strong>Terima kasih sudah bantu aku! 🌟</strong></p>
          <p>Jembatan sekarang bercahaya dan kita bisa lewat!</p>
          <p>Ayo teruskan petualangan kita! ✨</p>
        </div>
      )}

      {showCatDialog && (
        <button 
          className="interactive-button"
          onClick={handleNext}
          style={{
            position: 'absolute',
            bottom: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(135deg, #FFD700, #FFA500)'
          }}
        >
          🎁 Menuju Taman Hadiah! 🎁
        </button>
      )}

      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        fontSize: '14px',
        color: '#FFD700',
        background: 'rgba(0,0,0,0.6)',
        padding: '5px 10px',
        borderRadius: '10px'
      }}>
        Klik bintang jatuh untuk mengumpulkannya! ✨
      </div>

      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(calc(100vh + 50px)) rotate(360deg);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
};

export default Scene3;