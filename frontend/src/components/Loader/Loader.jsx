import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function Loader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress color='secondary' size={300} />
    </div>
  );
}

export default Loader;
