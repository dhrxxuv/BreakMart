import React, { useState } from 'react';
import LoginForm from './Loginform';
import SignupForm from './Signupform';

const FlippingContainer = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const containerStyle = {
    transform: isFlipped
      ? 'rotateY(180deg) scale(1)'
      : 'rotateY(0deg) scale(1)',
    transformStyle: 'preserve-3d',
    perspective: '1500px',
  };

  return (
    <div
      className="relative w-[400px] h-[450px] transition-all duration-700 ease-in-out z-10"
      style={containerStyle}
    >
      <LoginForm isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
      <SignupForm isFlipped={isFlipped} setIsFlipped={setIsFlipped} />
    </div>
  );
};

export default FlippingContainer;
