import React, { useState } from 'react';
import { CatVector, GiftBoxVector, BalloonVector } from '../components/Vectors';

const Scene4 = ({ onNext, gameData, updateGameData }) => {
  const [openedGifts, setOpenedGifts] = useState([]);
  const [showCatDialog, setShowCatDialog] = useState(false);
  const [currentMessage, setCurrentMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const gifts = [
    { 
      id: 1, 
      x: '20%', 
      y: '30%', 
      color: '#FFB6C1',
      message: "Kamu adalah sinar matahari dalam hidupku ☀️" 
    },
    { 
      id: 2, 
      x: '50%', 
      y: '25%', 
      color: '#E6E6FA',
      message: "Terima kasih sudah selalu ada untukku 💝" 
    },
    { 
      id: 3, 
      x: '75%', 
      y: '40%', 
      color: '#B6E5D8',
      message: "Setiap hari bersamamu adalah anugerah 🌈" 
    },
    { 
      id: 4, 
      x: '30%', 
      y: '60%', 
      color: '#FFDAB9',
      message: "Senyummu membuat dunia lebih indah 😊" 
    },
    { 
      id: 5, 
      x: '65%', 
      y: '70%', 
      color: '#FFF2CC',
      message: "Kamu adalah keajaiban yang kusyukuri setiap hari ✨" 
    }
  ];

  const balloonColors = ['#FFB6C1', '#E6E6FA', '#B6E5D8', '#FFDAB9', '#FFF2CC'];

  const handleGiftClick = (gift) => {
    if (!openedGifts.includes(gift.id)) {
      setOpenedGifts([...openedGifts, gift.id]);
      setCurrentMessage(gift.message);
      setShowMessage(true);
      
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
      
      if (openedGifts.length + 1 === gifts.length) {
        setTimeout(() => {
          setShowCatDialog(true);
          updateGameData({ giftsOpened: openedGifts.length + 1 });
        }, 3500);
      }
    }
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="scene active" style={{
      background: 'linear-gradient(135deg, #F0FFF0, #FFF2CC)',
      backgroundImage: `
        radial-gradient(circle at 25% 25%, #FFB6C1 0%, transparent 50%),
        radial-gradient(circle at 75% 25%, #E6E6FA 0%, transparent 50%),
        radial-gradient(circle at 50% 75%, #B6E5D8 0%, transparent 50%)
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
        color: '#4A5568'
      }}>
        🎁 Taman Hadiah Ajaib 🎁
      </div>

      <div style={{
        position: 'absolute',
        top: '50px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}>
        {balloonColors.map((color, index) => (
          <div 
            key={index}
            style={{
              animation: `bounce ${1.5 + index * 0.2}s ease-in-out infinite alternate`,
              animationDelay: `${index * 0.1}s`
            }}
          >
            <BalloonVector size={55} color={color} />
          </div>
        ))}
      </div>

      <div style={{
        position: 'absolute',
        top: '90px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '18px',
        color: '#4A5568'
      }}>
        Hadiah Terbuka: {openedGifts.length}/{gifts.length} <GiftBoxVector size={25} opened={true} />
      </div>

      {gifts.map((gift) => (
        <div
          key={gift.id}
          onClick={() => handleGiftClick(gift)}
          style={{
            position: 'absolute',
            left: gift.x,
            top: gift.y,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            transform: openedGifts.includes(gift.id) ? 'scale(1.1)' : 'scale(1)',
            filter: openedGifts.includes(gift.id) ? 'brightness(1.2)' : 'none'
          }}
          onMouseEnter={(e) => {
            if (!openedGifts.includes(gift.id)) {
              e.currentTarget.style.transform = 'scale(1.05) rotateY(5deg)';
            }
          }}
          onMouseLeave={(e) => {
            if (!openedGifts.includes(gift.id)) {
              e.currentTarget.style.transform = 'scale(1)';
            }
          }}
        >
          <GiftBoxVector 
            size={100} 
            color={gift.color} 
            opened={openedGifts.includes(gift.id)} 
          />
        </div>
      ))}

      {showMessage && (
        <div 
          className="dialog-box"
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(255, 255, 255, 0.95)',
            animation: 'bounce 0.5s ease-in-out',
            fontSize: '20px',
            fontWeight: 'bold',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            border: '3px solid #FFD700'
          }}
        >
          <p>{currentMessage}</p>
        </div>
      )}

      <div 
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
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
          transform: 'translateX(-50%)'
        }}>
          <p><strong>Wah! Semua hadiah sudah terbuka! 🎉</strong></p>
          <p>Sekarang saatnya menuju panggung ulang tahun!</p>
          <p>Ada kejutan spesial menunggumu! ✨</p>
        </div>
      )}

      {showCatDialog && (
        <button 
          className="interactive-button"
          onClick={handleNext}
          style={{
            position: 'absolute',
            bottom: '100px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(135deg, #FFB6C1, #E6E6FA)',
            fontSize: '18px'
          }}
        >
          🎂 Menuju Panggung Ulang Tahun! 🎂
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
        Klik setiap hadiah untuk melihat pesan spesial! 💝
      </div>
    </div>
  );
};

export default Scene4;