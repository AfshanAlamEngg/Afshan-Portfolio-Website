// import React from 'react';  // ← ADD THIS IMPORT
import { Box, Typography, Divider } from '@mui/material';

function SectionWrapper({ id, title, icon, children }) {
  return (
    <Box id={id} sx={{ py: 6 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          mb: 4,
        }}
      >
        {icon} {title}
      </Typography>
      {children}
      <Divider sx={{ mt: 6 }} />
    </Box>
  );
}

export default SectionWrapper;