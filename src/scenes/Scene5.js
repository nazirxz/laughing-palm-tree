import React, { useState, useEffect } from 'react';
import { CatVector, CakeVector, PartyVector, HeartVector, StarVector, GiftBoxVector } from '../components/Vectors';

const Scene5 = ({ gameData }) => {
  const [showCatSpeech, setShowCatSpeech] = useState(false);
  const [showBirthdayMessage, setShowBirthdayMessage] = useState(false);
  const [showFinalButton, setShowFinalButton] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState([]);
  const [musicPlaying, setMusicPlaying] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowCatSpeech(true), 1000);
    setTimeout(() => {
      setShowBirthdayMessage(true);
      setMusicPlaying(true);
      generateConfetti();
    }, 4000);
    setTimeout(() => setShowFinalButton(true), 7000);
  }, []);

  const generateConfetti = () => {
    const colors = ['#FFB6C1', '#E6E6FA', '#B6E5D8', '#FFDAB9', '#FFF2CC'];
    const pieces = [];
    
    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 3,
        duration: 3 + Math.random() * 2
      });
    }
    setConfettiPieces(pieces);
  };

  const handleFinalHug = () => {
    alert('🐾❤️ Pelukan virtual dari kucing kecil dan semua teman-teman petualangan! Selamat ulang tahun yang terbaik, Rinan Dihana! Semoga tahun ini penuh dengan kebahagiaan, cinta, dan petualangan indah lainnya! 🎂✨🎉');
  };

  return (
    <div className="scene active" style={{
      background: 'linear-gradient(135deg, #FFB6C1, #E6E6FA, #B6E5D8)',
      backgroundImage: `
        radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.4) 0%, transparent 50%),
        radial-gradient(circle at 70% 70%, rgba(255, 255, 255, 0.3) 0%, transparent 50%)
      `,
      overflow: 'hidden'
    }}>
      {/* Confetti Animation */}
      {confettiPieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti"
          style={{
            left: `${piece.x}%`,
            background: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`
          }}
        />
      ))}

      {/* Stage Background */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '10%',
        right: '10%',
        height: '60%',
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
        borderRadius: '20px 20px 0 0',
        boxShadow: '0 -10px 30px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* Stage Decorations */}
        <div style={{
          position: 'absolute',
          top: '20px',
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center'
        }}>
          <div style={{animation: 'bounce 2s ease-in-out infinite'}}>
            <PartyVector size={50} />
          </div>
          <div style={{animation: 'bounce 2s ease-in-out infinite', animationDelay: '0.2s'}}>
            <PartyVector size={45} />
          </div>
          <div style={{animation: 'bounce 2s ease-in-out infinite', animationDelay: '0.4s'}}>
            <StarVector size={40} />
          </div>
          <div style={{animation: 'bounce 2s ease-in-out infinite', animationDelay: '0.6s'}}>
            <GiftBoxVector size={50} color="#FFB6C1" />
          </div>
          <div style={{animation: 'bounce 2s ease-in-out infinite', animationDelay: '0.8s'}}>
            <PartyVector size={48} />
          </div>
        </div>

        {/* Birthday Cake */}
        <div style={{
          animation: showBirthdayMessage ? 'bounce 1s ease-in-out infinite alternate' : 'none',
          marginBottom: '20px'
        }}>
          <CakeVector size={120} />
        </div>

        {/* Cat Character */}
        <div 
          style={{
            position: 'relative',
            marginBottom: '20px',
            animation: showCatSpeech ? 'bounce 0.5s ease-in-out infinite alternate' : 'none'
          }}
        >
          <CatVector size={100} color="#FFDAB9" />
        </div>
      </div>

      {/* Cat Speech Bubble */}
      {showCatSpeech && (
        <div 
          className="dialog-box"
          style={{
            position: 'absolute',
            top: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(255, 255, 255, 0.95)',
            animation: 'bounce 0.5s ease-in-out'
          }}
        >
          <p><strong>Terima kasih sudah menemaniku dalam petualangan ini! 🌟</strong></p>
          <p>Sekarang saatnya aku bilang...</p>
        </div>
      )}

      {/* Main Birthday Message */}
      {showBirthdayMessage && (
        <div style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          animation: 'bounce 1s ease-in-out infinite alternate'
        }}>
          <div className="birthday-text" style={{
            fontSize: '56px',
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4, #FFEAA7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '10px'
          }}>
            Happy Birthday!
          </div>
          <div style={{
            fontSize: '32px',
            fontWeight: 'bold',
            color: '#4A5568',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}>
            Rinan Dihana! 🎂🎉
          </div>
        </div>
      )}

      {/* Adventure Summary */}
      {showBirthdayMessage && (
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '15px 25px',
          borderRadius: '15px',
          textAlign: 'center',
          fontSize: '16px',
          color: '#4A5568',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
        }}>
          <p><strong>Petualangan Selesai! 🎊</strong></p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <HeartVector size={20} /> {gameData.heartsCollected}/3
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <StarVector size={20} /> {gameData.starsCollected}/5
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <GiftBoxVector size={20} opened={true} /> {gameData.giftsOpened}/5
            </div>
          </div>
        </div>
      )}

      {/* Final Hug Button */}
      {showFinalButton && (
        <button 
          className="interactive-button"
          onClick={handleFinalHug}
          style={{
            position: 'absolute',
            bottom: '80px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(135deg, #FF6B6B, #4ECDC4)',
            fontSize: '20px',
            padding: '20px 40px',
            animation: 'bounce 0.8s ease-in-out infinite alternate',
            boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
          }}
        >
          🐾❤️ Peluk Virtual dari Aku! 🐾❤️
        </button>
      )}

      {/* Music Indicator */}
      {musicPlaying && (
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          fontSize: '24px',
          animation: 'bounce 1s ease-in-out infinite alternate'
        }}>
          🎵🎶
        </div>
      )}

      {/* Corner Decorations */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        animation: 'bounce 1.5s ease-in-out infinite alternate'
      }}>
        <StarVector size={45} />
      </div>

      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        animation: 'bounce 2s ease-in-out infinite alternate'
      }}>
        <HeartVector size={50} />
      </div>

      <style jsx>{`
        @keyframes bounce {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-10px); }
        }
        
        .confetti {
          position: absolute;
          width: 10px;
          height: 10px;
          animation: fall 2s linear infinite;
        }
        
        @keyframes fall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Scene5;