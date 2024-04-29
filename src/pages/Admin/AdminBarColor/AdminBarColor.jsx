import React from 'react';

function AdminBarColor() {
  const gradientStyle = {
    backgroundImage: 'linear-gradient(to right, white, gray)',
    height: '200px'
  };

  return <div className="my_gradient_3" style={gradientStyle}></div>;
}

export default AdminBarColor;
