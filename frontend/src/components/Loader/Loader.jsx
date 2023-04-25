import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import footballImage from '../../images/footballicon.png'
function Loader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', width: '100vh' }}>
      <img
        src={footballImage}
        alt="Football loader"
        style={{
          width: '300px',
          animation: 'spin 2s linear infinite',
          background: 'none'
        }}
      />
      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Loader;
