import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, Home, Person, Build, FolderOpen, Work, ContactMail } from '@mui/icons-material';

const navItems = [
  { label: 'Home', icon: <Home />, id: 'home' },
  { label: 'About', icon: <Person />, id: 'about' },
  { label: 'Skills', icon: <Build />, id: 'skills' },
  { label: 'Projects', icon: <FolderOpen />, id: 'projects' },
  { label: 'Experience', icon: <Work />, id: 'experience' },
  { label: 'Contact', icon: <ContactMail />, id: 'contact' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (mobileOpen) setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="default"
        elevation={0}
        sx={{
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(255,255,255,0.85)',
          borderBottom: '1px solid rgba(0,0,0,0.04)',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: 700, color: 'primary.main' }}
          >
            <span style={{ color: theme.palette.secondary.main }}>•</span> Afshan Alam
          </Typography>
          {isMobile ? (
            <IconButton edge="start" onClick={handleDrawerToggle} color="inherit">
              <MenuIcon />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={2}>
              {navItems.map((item) => (
                <Button key={item.id} onClick={() => scrollTo(item.id)} color="inherit">
                  {item.label}
                </Button>
              ))}
            </Stack>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{ sx: { width: 280, borderRadius: '0 0 0 24px' } }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item) => (
            <ListItem button key={item.id} onClick={() => scrollTo(item.id)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;