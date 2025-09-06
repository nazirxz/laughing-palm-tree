import React, { useState } from 'react';
import { CatVector, HeartVector, FlowerVector } from '../components/Vectors';

const Scene2 = ({ onNext, gameData, updateGameData }) => {
  const [heartsCollected, setHeartsCollected] = useState(0);
  const [showCatDialog, setShowCatDialog] = useState(false);
  const [foundHearts, setFoundHearts] = useState([]);

  const flowers = [
    { id: 1, x: '15%', y: '30%', type: 1, hasHeart: true },
    { id: 2, x: '25%', y: '60%', type: 2, hasHeart: false },
    { id: 3, x: '45%', y: '25%', type: 3, hasHeart: false },
    { id: 4, x: '60%', y: '70%', type: 4, hasHeart: true },
    { id: 5, x: '75%', y: '40%', type: 0, hasHeart: false },
    { id: 6, x: '30%', y: '80%', type: 1, hasHeart: false },
    { id: 7, x: '80%', y: '20%', type: 2, hasHeart: true },
    { id: 8, x: '50%', y: '50%', type: 3, hasHeart: false },
  ];

  const handleFlowerClick = (flower) => {
    if (flower.hasHeart && !foundHearts.includes(flower.id)) {
      setFoundHearts([...foundHearts, flower.id]);
      setHeartsCollected(heartsCollected + 1);
      
      if (heartsCollected + 1 === 3) {
        setTimeout(() => {
          setShowCatDialog(true);
          updateGameData({ heartsCollected: heartsCollected + 1 });
        }, 500);
      }
    }
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="scene active" style={{
      background: 'linear-gradient(135deg, #B6E5D8, #F0FFF0)',
      backgroundImage: `
        radial-gradient(circle at 30% 20%, #FFF2CC 0%, transparent 40%),
        radial-gradient(circle at 70% 80%, #FFDAB9 0%, transparent 40%),
        radial-gradient(circle at 90% 30%, #E6E6FA 0%, transparent 30%)
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
        gap: '15px'
      }}>
        <FlowerVector size={40} type={1} />
        <span>Hutan Bunga Ajaib</span>
        <FlowerVector size={40} type={2} />
      </div>

      <div className="progress-bar" style={{ position: 'absolute', top: '60px', left: '50%', transform: 'translateX(-50%)' }}>
        <div 
          className="progress-fill" 
          style={{ width: `${(heartsCollected / 3) * 100}%` }}
        ></div>
      </div>

      <div style={{
        position: 'absolute',
        top: '90px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '18px',
        color: '#4A5568'
      }}>
        <HeartVector size={20} /> Terkumpul: {heartsCollected}/3
      </div>

      {flowers.map((flower) => (
        <div
          key={flower.id}
          onClick={() => handleFlowerClick(flower)}
          style={{
            position: 'absolute',
            left: flower.x,
            top: flower.y,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            transform: foundHearts.includes(flower.id) && flower.hasHeart ? 'scale(1.2)' : 'scale(1)',
            filter: foundHearts.includes(flower.id) && flower.hasHeart ? 'brightness(1.3)' : 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = foundHearts.includes(flower.id) && flower.hasHeart ? 'scale(1.2)' : 'scale(1)'}
        >
          <FlowerVector size={60} type={flower.type} />
          {foundHearts.includes(flower.id) && flower.hasHeart && (
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '50%',
              transform: 'translateX(-50%)',
              animation: 'bounce 0.5s ease-in-out'
            }}>
              <HeartVector size={30} />
            </div>
          )}
        </div>
      ))}

      <div 
        style={{
          position: 'absolute',
          bottom: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: showCatDialog ? 'bounce 0.3s ease-in-out infinite' : 'none'
        }}
      >
        <CatVector size={100} color="#FFDAB9" />
      </div>

      {showCatDialog && (
        <div className="dialog-box" style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)' }}>
          <p><strong>Kamu hebat sekali! 🎉</strong></p>
          <p>Semua hati cinta sudah terkumpul!</p>
          <p>Yuk lanjut ke petualangan berikutnya! ✨</p>
        </div>
      )}

      {showCatDialog && (
        <button 
          className="interactive-button"
          onClick={handleNext}
          style={{
            position: 'absolute',
            bottom: '50px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(135deg, #FFB6C1, #B6E5D8)'
          }}
        >
          🌟 Lanjut ke Jembatan Bintang! 🌟
        </button>
      )}

      <div style={{
        position: 'absolute',
        bottom: '10px',
        left: '10px',
        fontSize: '14px',
        color: '#4A5568',
        background: 'rgba(255,255,255,0.8)',
        padding: '5px 10px',
        borderRadius: '10px'
      }}>
        Klik bunga untuk mencari hati tersembunyi! 💖
      </div>
    </div>
  );
};

export default Scene2;