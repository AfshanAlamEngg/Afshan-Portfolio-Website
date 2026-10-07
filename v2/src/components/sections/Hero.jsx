// import React from 'react';
import { Grid, Box, Typography, Button, Stack, Avatar, IconButton, Fade, Zoom } from '@mui/material';
import { Send, Download, GitHub, LinkedIn, Twitter, Mail } from '@mui/icons-material';
import { portfolioData } from '../../data/portfolioData';

function Hero() {
  const { name, title, total_experience, bio, avatar, social } = portfolioData;

  return (
    <Box id="home" sx={{ minHeight: '70vh', display: 'flex', alignItems: 'center', py: 4 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={7}>
          <Fade in timeout={600}>
            <Box>
              <Typography variant="h6" color="secondary.main" gutterBottom>
                👋 Hello, I'm
              </Typography>
              <Typography variant="h2" component="h1" sx={{ fontWeight: 800, mb: 1 }}>
                {name}
              </Typography>
              <Typography variant="h5" color="text.secondary" sx={{ mb: 2 }}>
                {title} · {total_experience}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 500, mb: 3 }}>
                {bio}
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap">
                <Button variant="contained" color="primary" startIcon={<Send />}>
                  Hire Me
                </Button>
                <Button variant="outlined" color="primary" startIcon={<Download />}>
                  Resume
                </Button>
              </Stack>
              <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
                <IconButton href={social.github} target="_blank" color="primary">
                  <GitHub />
                </IconButton>
                <IconButton href={social.linkedin} target="_blank" color="primary">
                  <LinkedIn />
                </IconButton>
                <IconButton href={social.twitter} target="_blank" color="primary">
                  <Twitter />
                </IconButton>
                <IconButton href={social.email} color="primary">
                  <Mail />
                </IconButton>
              </Stack>
            </Box>
          </Fade>
        </Grid>
        <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Zoom in timeout={600}>
            <Avatar
              src={avatar}
              alt={name}
              sx={{ width: 220, height: 220, boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
            />
          </Zoom>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Hero;