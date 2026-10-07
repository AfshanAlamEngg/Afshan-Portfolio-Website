// import React from 'react';
import { Box, Typography, Container } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: 6,
        backgroundColor: 'primary.main',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" align="center" sx={{ opacity: 0.8 }}>
          © Afshan Alam · {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;