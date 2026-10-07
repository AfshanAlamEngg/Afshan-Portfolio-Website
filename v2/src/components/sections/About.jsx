// import React from 'react';
import { Grid, Paper, Typography, Stack, Chip, Box } from '@mui/material';
import { Person, LocationOn, Mail, Phone } from '@mui/icons-material';
import SectionWrapper from '../common/SectionWrapper';
import { portfolioData } from '../../data/portfolioData';

function About() {
  const { bio, bio2, location, email, phone } = portfolioData;

  return (
    <SectionWrapper id="about" title="About Me" icon={<Person color="secondary" />}>
      <Paper elevation={0} sx={{ p: 4, backgroundColor: 'background.paper' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography variant="body1" paragraph>
              {bio}
            </Typography>
            <Typography variant="body1" paragraph>
              {bio2}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mt: 2 }}>
              <Chip icon={<LocationOn />} label={location} variant="outlined" />
              <Chip icon={<Mail />} label={email} variant="outlined" />
              <Chip icon={<Phone />} label={phone} variant="outlined" />
            </Stack>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper variant="outlined" sx={{ p: 2, backgroundColor: '#f8fafc' }}>
              <Typography variant="subtitle2" color="text.secondary">
                Quick Facts
              </Typography>
              <Stack spacing={1} sx={{ mt: 1 }}>
                <Box>
                  <Typography variant="body2">
                    <strong>Experience:</strong> 1 year
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2">
                    <strong>Projects:</strong> 8+ shipped
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2">
                    <strong>Availability:</strong> Open to work
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body2">
                    <strong>Preferred stack:</strong> React · MUI · Vite
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </SectionWrapper>
  );
}

export default About;