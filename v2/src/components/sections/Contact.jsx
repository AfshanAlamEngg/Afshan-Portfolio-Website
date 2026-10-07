// import React from 'react';
import {
  Grid,
  Paper,
  Typography,
  Stack,
  Box,
  IconButton,
  TextField,
  Button,
} from '@mui/material';
import { ContactMail, Mail, Phone, LocationOn, GitHub, LinkedIn, Twitter, Send } from '@mui/icons-material';
import SectionWrapper from '../common/SectionWrapper';
import { portfolioData } from '../../data/portfolioData';

function Contact() {
  const { email, phone, location, social } = portfolioData;

  return (
    <SectionWrapper id="contact" title="Get in Touch" icon={<ContactMail color="secondary" />}>
      <Paper elevation={0} sx={{ p: 4, backgroundColor: 'background.paper' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Let's connect
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              I'm always open to new opportunities, collaborations, or just a chat about tech.
            </Typography>
            <Stack spacing={2}>
              <Box display="flex" alignItems="center" gap={1}>
                <Mail color="secondary" /> {email}
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <Phone color="secondary" /> {phone}
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <LocationOn color="secondary" /> {location}
              </Box>
            </Stack>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <IconButton href={social.github} target="_blank" color="secondary">
                <GitHub />
              </IconButton>
              <IconButton href={social.linkedin} target="_blank" color="secondary">
                <LinkedIn />
              </IconButton>
              <IconButton href={social.twitter} target="_blank" color="secondary">
                <Twitter />
              </IconButton>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper variant="outlined" sx={{ p: 3 }}>
              <Typography variant="subtitle1" fontWeight={600}>
                Send a message
              </Typography>
              <Box component="form" sx={{ mt: 2 }}>
                <TextField fullWidth label="Name" variant="outlined" size="small" sx={{ mb: 2 }} />
                <TextField fullWidth label="Email" variant="outlined" size="small" sx={{ mb: 2 }} />
                <TextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={3}
                  size="small"
                  sx={{ mb: 2 }}
                />
                <Button variant="contained" color="primary" startIcon={<Send />}>
                  Send
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </SectionWrapper>
  );
}

export default Contact;