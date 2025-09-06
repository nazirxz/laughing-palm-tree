import React from 'react';

export const CatVector = ({ size = 80, color = '#FFB6C1' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{cursor: 'pointer'}}>
    {/* Cat ears */}
    <path d="M20 35 L30 20 L40 35 Z" fill={color} stroke="#4A5568" strokeWidth="2"/>
    <path d="M60 35 L70 20 L80 35 Z" fill={color} stroke="#4A5568" strokeWidth="2"/>
    
    {/* Cat head */}
    <circle cx="50" cy="50" r="25" fill={color} stroke="#4A5568" strokeWidth="2"/>
    
    {/* Cat eyes */}
    <circle cx="42" cy="45" r="4" fill="#4A5568"/>
    <circle cx="58" cy="45" r="4" fill="#4A5568"/>
    <circle cx="43" cy="44" r="1" fill="white"/>
    <circle cx="59" cy="44" r="1" fill="white"/>
    
    {/* Cat nose */}
    <path d="M47 52 L50 55 L53 52 Z" fill="#FF6B6B"/>
    
    {/* Cat mouth */}
    <path d="M50 55 Q45 60 40 58" fill="none" stroke="#4A5568" strokeWidth="2" strokeLinecap="round"/>
    <path d="M50 55 Q55 60 60 58" fill="none" stroke="#4A5568" strokeWidth="2" strokeLinecap="round"/>
    
    {/* Cat whiskers */}
    <line x1="25" y1="48" x2="35" y2="46" stroke="#4A5568" strokeWidth="1"/>
    <line x1="25" y1="52" x2="35" y2="54" stroke="#4A5568" strokeWidth="1"/>
    <line x1="75" y1="48" x2="65" y2="46" stroke="#4A5568" strokeWidth="1"/>
    <line x1="75" y1="52" x2="65" y2="54" stroke="#4A5568" strokeWidth="1"/>
  </svg>
);

export const HeartVector = ({ size = 40, color = '#FFB6C1' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{cursor: 'pointer'}}>
    <path d="M50 85 C50 85, 20 60, 20 40 C20 25, 35 20, 50 35 C65 20, 80 25, 80 40 C80 60, 50 85, 50 85 Z" 
          fill={color} stroke="#E6E6FA" strokeWidth="2"/>
    <circle cx="35" cy="35" r="3" fill="white" opacity="0.6"/>
  </svg>
);

export const StarVector = ({ size = 40, color = '#FFD700' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{cursor: 'pointer'}}>
    <path d="M50 10 L62 38 L90 38 L68 58 L78 85 L50 70 L22 85 L32 58 L10 38 L38 38 Z" 
          fill={color} stroke="#FFA500" strokeWidth="2"/>
    <circle cx="45" cy="30" r="2" fill="white" opacity="0.8"/>
  </svg>
);

export const FlowerVector = ({ size = 50, type = 1 }) => {
  const colors = ['#FFB6C1', '#E6E6FA', '#FFF2CC', '#FFDAB9', '#B6E5D8'];
  const color = colors[type % colors.length];
  
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{cursor: 'pointer'}}>
      {/* Flower petals */}
      <circle cx="50" cy="30" r="12" fill={color} opacity="0.8"/>
      <circle cx="70" cy="50" r="12" fill={color} opacity="0.8"/>
      <circle cx="50" cy="70" r="12" fill={color} opacity="0.8"/>
      <circle cx="30" cy="50" r="12" fill={color} opacity="0.8"/>
      <circle cx="65" cy="35" r="10" fill={color} opacity="0.6"/>
      <circle cx="65" cy="65" r="10" fill={color} opacity="0.6"/>
      <circle cx="35" cy="65" r="10" fill={color} opacity="0.6"/>
      <circle cx="35" cy="35" r="10" fill={color} opacity="0.6"/>
      
      {/* Flower center */}
      <circle cx="50" cy="50" r="8" fill="#FFD700" stroke="#FFA500" strokeWidth="1"/>
      <circle cx="48" cy="47" r="2" fill="white" opacity="0.6"/>
    </svg>
  );
};

export const GiftBoxVector = ({ size = 80, color = '#E6E6FA', opened = false }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" style={{cursor: 'pointer'}}>
    {opened ? (
      // Opened gift box
      <>
        <rect x="25" y="50" width="50" height="40" fill={color} stroke="#4A5568" strokeWidth="2"/>
        <rect x="20" y="45" width="60" height="10" fill="#FFD700" stroke="#4A5568" strokeWidth="2"/>
        {/* Opened lid */}
        <rect x="15" y="30" width="25" height="20" fill={color} stroke="#4A5568" strokeWidth="2" transform="rotate(-20 27.5 40)"/>
        <rect x="60" y="30" width="25" height="20" fill={color} stroke="#4A5568" strokeWidth="2" transform="rotate(20 72.5 40)"/>
        {/* Heart inside */}
        <path d="M50 75 C50 75, 35 65, 35 55 C35 50, 42 48, 50 55 C58 48, 65 50, 65 55 C65 65, 50 75, 50 75 Z" 
              fill="#FFB6C1"/>
      </>
    ) : (
      // Closed gift box
      <>
        <rect x="25" y="40" width="50" height="45" fill={color} stroke="#4A5568" strokeWidth="2"/>
        <rect x="20" y="35" width="60" height="10" fill="#FFD700" stroke="#4A5568" strokeWidth="2"/>
        {/* Ribbon vertical */}
        <rect x="47" y="20" width="6" height="65" fill="#FF6B6B"/>
        {/* Ribbon horizontal */}
        <rect x="15" y="37" width="70" height="6" fill="#FF6B6B"/>
        {/* Bow */}
        <path d="M40 25 Q50 15 60 25 Q50 35 40 25" fill="#FF6B6B" stroke="#E91E63" strokeWidth="1"/>
        <circle cx="50" cy="25" r="3" fill="#E91E63"/>
      </>
    )}
  </svg>
);

export const BalloonVector = ({ size = 60, color = '#FFB6C1' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    {/* Balloon */}
    <ellipse cx="50" cy="35" rx="20" ry="28" fill={color} stroke="#4A5568" strokeWidth="2"/>
    {/* String */}
    <line x1="50" y1="63" x2="50" y2="90" stroke="#4A5568" strokeWidth="2"/>
    {/* Highlight */}
    <ellipse cx="45" cy="25" rx="5" ry="8" fill="white" opacity="0.4"/>
  </svg>
);

export const CakeVector = ({ size = 100 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    {/* Cake base */}
    <rect x="20" y="60" width="60" height="30" fill="#FFDAB9" stroke="#4A5568" strokeWidth="2"/>
    {/* Cake layer 2 */}
    <rect x="25" y="45" width="50" height="20" fill="#FFB6C1" stroke="#4A5568" strokeWidth="2"/>
    {/* Cake layer 3 */}
    <rect x="30" y="35" width="40" height="15" fill="#E6E6FA" stroke="#4A5568" strokeWidth="2"/>
    
    {/* Candles */}
    <rect x="40" y="25" width="3" height="15" fill="#FFD700"/>
    <rect x="50" y="25" width="3" height="15" fill="#FFD700"/>
    <rect x="60" y="25" width="3" height="15" fill="#FFD700"/>
    
    {/* Flames */}
    <ellipse cx="41.5" cy="23" rx="2" ry="4" fill="#FF6B6B"/>
    <ellipse cx="51.5" cy="23" rx="2" ry="4" fill="#FF6B6B"/>
    <ellipse cx="61.5" cy="23" rx="2" ry="4" fill="#FF6B6B"/>
    
    {/* Decorations */}
    <circle cx="35" cy="55" r="3" fill="#FFD700"/>
    <circle cx="65" cy="55" r="3" fill="#FFD700"/>
    <circle cx="50" cy="75" r="4" fill="#FF6B6B"/>
  </svg>
);

export const BridgeVector = ({ size = 300, glowing = false }) => (
  <svg width={size} height="80" viewBox="0 0 300 80">
    {/* Bridge deck */}
    <rect x="0" y="35" width="300" height="15" 
          fill={glowing ? '#FFD700' : '#8B4513'} 
          stroke={glowing ? '#FFA500' : '#654321'} 
          strokeWidth="2"/>
    
    {/* Bridge supports */}
    <rect x="50" y="50" width="8" height="25" fill={glowing ? '#FFD700' : '#8B4513'}/>
    <rect x="100" y="50" width="8" height="25" fill={glowing ? '#FFD700' : '#8B4513'}/>
    <rect x="150" y="50" width="8" height="25" fill={glowing ? '#FFD700' : '#8B4513'}/>
    <rect x="200" y="50" width="8" height="25" fill={glowing ? '#FFD700' : '#8B4513'}/>
    <rect x="250" y="50" width="8" height="25" fill={glowing ? '#FFD700' : '#8B4513'}/>
    
    {/* Railings */}
    <line x1="0" y1="30" x2="300" y2="30" stroke={glowing ? '#FFA500' : '#654321'} strokeWidth="3"/>
    <line x1="0" y1="55" x2="300" y2="55" stroke={glowing ? '#FFA500' : '#654321'} strokeWidth="3"/>
    
    {glowing && (
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    )}
  </svg>
);

export const HouseVector = ({ size = 60 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    {/* House base */}
    <rect x="25" y="50" width="50" height="40" fill="#FFDAB9" stroke="#4A5568" strokeWidth="2"/>
    
    {/* Roof */}
    <path d="M20 50 L50 25 L80 50 Z" fill="#FF6B6B" stroke="#4A5568" strokeWidth="2"/>
    
    {/* Door */}
    <rect x="45" y="70" width="10" height="20" fill="#8B4513" stroke="#4A5568" strokeWidth="1"/>
    <circle cx="52" cy="80" r="1" fill="#FFD700"/>
    
    {/* Windows */}
    <rect x="30" y="60" width="8" height="8" fill="#B6E5D8" stroke="#4A5568" strokeWidth="1"/>
    <rect x="62" y="60" width="8" height="8" fill="#B6E5D8" stroke="#4A5568" strokeWidth="1"/>
    
    {/* Window crosses */}
    <line x1="34" y1="60" x2="34" y2="68" stroke="#4A5568" strokeWidth="0.5"/>
    <line x1="30" y1="64" x2="38" y2="64" stroke="#4A5568" strokeWidth="0.5"/>
    <line x1="66" y1="60" x2="66" y2="68" stroke="#4A5568" strokeWidth="0.5"/>
    <line x1="62" y1="64" x2="70" y2="64" stroke="#4A5568" strokeWidth="0.5"/>
  </svg>
);

export const PartyVector = ({ size = 60 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    {/* Party hat */}
    <path d="M50 20 L35 60 L65 60 Z" fill="#FFB6C1" stroke="#4A5568" strokeWidth="2"/>
    
    {/* Hat decorations */}
    <circle cx="45" cy="45" r="3" fill="#FFD700"/>
    <circle cx="55" cy="50" r="3" fill="#B6E5D8"/>
    <circle cx="50" cy="35" r="2" fill="#E6E6FA"/>
    
    {/* Hat rim */}
    <ellipse cx="50" cy="60" rx="15" ry="3" fill="#FF6B6B" stroke="#4A5568" strokeWidth="1"/>
    
    {/* Pom pom */}
    <circle cx="50" cy="18" r="4" fill="#FFD700" stroke="#4A5568" strokeWidth="1"/>
    
    {/* Confetti around */}
    <rect x="25" y="25" width="3" height="3" fill="#FFB6C1" transform="rotate(45 26.5 26.5)"/>
    <rect x="72" y="30" width="3" height="3" fill="#E6E6FA" transform="rotate(30 73.5 31.5)"/>
    <rect x="30" y="70" width="3" height="3" fill="#B6E5D8" transform="rotate(60 31.5 71.5)"/>
    <rect x="70" y="65" width="3" height="3" fill="#FFDAB9" transform="rotate(15 71.5 66.5)"/>
  </svg>
);

export const FlowerStarVector = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <path d="M50 20 L55 40 L75 40 L60 55 L65 75 L50 65 L35 75 L40 55 L25 40 L45 40 Z" 
          fill="#FFD700" stroke="#FFA500" strokeWidth="1"/>
    <circle cx="50" cy="50" r="8" fill="#FFF2CC"/>
    <circle cx="47" cy="47" r="2" fill="white" opacity="0.8"/>
  </svg>
);

export const ButterflyVector = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    {/* Body */}
    <ellipse cx="50" cy="50" rx="2" ry="20" fill="#4A5568"/>
    
    {/* Wings */}
    <ellipse cx="40" cy="40" rx="8" ry="12" fill="#FFB6C1" opacity="0.8"/>
    <ellipse cx="60" cy="40" rx="8" ry="12" fill="#E6E6FA" opacity="0.8"/>
    <ellipse cx="40" cy="60" rx="6" ry="10" fill="#B6E5D8" opacity="0.8"/>
    <ellipse cx="60" cy="60" rx="6" ry="10" fill="#FFDAB9" opacity="0.8"/>
    
    {/* Wing patterns */}
    <circle cx="40" cy="40" r="3" fill="#FF6B6B" opacity="0.6"/>
    <circle cx="60" cy="40" r="3" fill="#FF6B6B" opacity="0.6"/>
    
    {/* Antennae */}
    <line x1="48" y1="30" x2="45" y2="25" stroke="#4A5568" strokeWidth="1"/>
    <line x1="52" y1="30" x2="55" y2="25" stroke="#4A5568" strokeWidth="1"/>
    <circle cx="45" cy="25" r="1" fill="#FFD700"/>
    <circle cx="55" cy="25" r="1" fill="#FFD700"/>
  </svg>
);

export const ConfettiPiece = ({ color = '#FFB6C1', delay = 0 }) => (
  <div style={{
    width: '8px',
    height: '8px',
    backgroundColor: color,
    position: 'absolute',
    borderRadius: '2px',
    animation: `fall 3s linear infinite`,
    animationDelay: `${delay}s`
  }} />
);

export const BrideVector = ({ size = 80, color = '#FFE4E1' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    {/* Head */}
    <circle cx="50" cy="25" r="10" fill="#FFDAB9" stroke="#4A5568" strokeWidth="2" />

    {/* Hair */}
    <path d="M40 20 Q50 5 60 20" fill="#FFB6C1" />

    {/* Body / Dress */}
    <path
      d="M35 35 Q50 90 65 35"
      fill={color}
      stroke="#4A5568"
      strokeWidth="2"
    />
    <path d="M40 45 Q50 70 60 45" fill="#FFF" opacity="0.8" />

    {/* Bouquet */}
    <circle cx="50" cy="55" r="5" fill="#FF6B6B" stroke="#E91E63" strokeWidth="1" />

    {/* Smile */}
    <path d="M46 27 Q50 31 54 27" stroke="#4A5568" strokeWidth="1" fill="none" />

    {/* Eyes */}
    <circle cx="46" cy="23" r="1.5" fill="#4A5568" />
    <circle cx="54" cy="23" r="1.5" fill="#4A5568" />
  </svg>
);
