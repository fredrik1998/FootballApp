import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { motion } from 'framer-motion';

function Loader() {
  const loaderVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', width: '100vw' }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={loaderVariants}
      >
        <CircularProgress style={{width:'300px', height: '300px'}} />
      </motion.div>
    </div>
  );
}

export default Loader;
