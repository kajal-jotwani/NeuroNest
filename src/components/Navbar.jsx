import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// import PropTypes from 'prop-types';
import CustomButton from './CustomButton';

import logoImg from '../media/logo.png';

import {
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
  Link,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { Contacts, FeaturedPlayList, Home, ListAlt, MiscellaneousServices } from '@mui/icons-material';

const NavbarContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(3),
  },
}));

const NavbarLogo = styled('img')(({ theme }) => ({
  cursor: 'pointer',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const NavbarLinkBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: 25,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const NavbarLink = styled(Typography)(({ theme }) => ({
  color: '#4F5361',
  fontWeight: 'bold',
  cursor: 'pointer',
  '&:hover': {
    color: '#fff',
  },
}));

const MenuBox = styled(Box)(({ theme }) => ({
  cursor: 'pointer',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

const ListComponent = () => (
  <List
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'space-between',
      justifyContent: 'center',
      width: 200,
    }}
  >
    {['Home', 'Features', 'Services', 'Products', 'About'].map((text, index) => (
      <ListItem key={text} disablePadding>
        <ListItemButton>
          <ListItemIcon>
            {index === 0 && <Home />}
            {index === 1 && <FeaturedPlayList />}
            {index === 2 && <MiscellaneousServices />}
            {index === 3 && <ListAlt />}
            {index === 4 && <Contacts />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </ListItem>
    ))}
  </List>
);

export default function Navbar() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <NavbarContainer>
      <Box>
        <MenuBox onClick={() => setShowMenu(true)}>
          <MenuIcon />
        </MenuBox>
        <Drawer anchor="left" open={showMenu} onClose={() => setShowMenu(false)}>
          <ListComponent />
        </Drawer>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <NavbarLogo src={logoImg} style={{
            width: '50px',
            height: '50px',
            cursor: 'pointer',
            borderRadius: '50%'
          }} alt="logo" />
          <h3 style={{ color: '#4F5361', fontWeight: 'bold'
            , cursor: 'pointer', '&:hover': { color: '#fff', textDecoration: 'none' }, '&:active': { color: '#fff' , textDecoration: 'none' }, margin: '0 0 0 10px'
           }}
          >NeuroNest</h3>
        </div>
      </Box>

      <NavbarLinkBox>
        <NavbarLink>
          <Link href="/">Home</Link>
        </NavbarLink>
        <NavbarLink>
          <Link href="/games">Games</Link>
        </NavbarLink>
      </NavbarLinkBox>

      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
        {isAuthenticated ? (
          <>
            <Typography variant="body1" sx={{ color: '#4F5361', fontWeight: 'bold' }}>
              {user.name}
            </Typography>
            <NavbarLink onClick={() => logout({ returnTo: window.location.origin })} style={{
              color: '#4F5361',
              fontWeight: 'bold',
              cursor: 'pointer',
              '&:hover': { color: '#fff' },
            }}>Log Out</NavbarLink>
          </>
        ) : (
          <NavbarLink onClick={() => loginWithRedirect()}>Sign In</NavbarLink>
        )}

      </Box>
    </NavbarContainer>
  );
}
