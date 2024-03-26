import "./style.scss";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { logo } from '../assets'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import logOut from "../firebase/logOut";


const drawerWidth = 240;
const navItems = ['home', 'about', 'contact'];
const settings = [{ menu: "Profile", call: "" }, { menu: "logout", call: "" }, { menu: "logout", call: logOut() }];

function Navbar(props) {
  const user = useSelector((state) => state.userDetails.userInfo);
console.log(user)
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isTrue, setState] = React.useState(true)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // console.log(navItems.map(item => item.label || item))

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} className="header">
      <Typography variant="h6" sx={{ my: 2 }} className='web-name'>
        Fashion
      </Typography>
      <Divider />
      {navItems.map((item, i) => (
        <List key={i}>
          <NavLink to={`/${item.label || item}`} key={item.label || item} className="menu">
            <Button
              sx={{ color: item.label === 'Sign up' ? '#fff' : '' }}
              className={`${item.className} nav-menu`}
            >
              {item.label || item}
            </Button>
          </NavLink>
        </List>
      ))}
      <Box className='nav-login'>
        {isTrue ? (
          <NavLink to='/signup'>
            <Button className="signup-button"
            >Sign up
            </Button>
          </NavLink>
        ) : undefined}
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <header className='header'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar component="nav" className='navbar'>
          <Toolbar>
            <div className='burger-section'>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                {/* <MenuIcon /> */}
                <div className="hamburger">
                  <div className="hamburger__container">
                    <div className="hamburger__inner" />
                    <div className="hamburger__hidden" />
                  </div>
                </div>

              </IconButton>
              {/* <IconButton
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <img src={logo} alt="logo" height='60px' />
              </IconButton> */}
            </div>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              className='web-name'
            >
              Fashion
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <NavLink to={`/${item.label || item}`} key={item.label || item}>
                  <Button

                    sx={{ color: item.label === 'Sign up' ? '#fff' : '' }}
                    className={`${item.className} nav-menu`}
                  >
                    {item.label || item}
                  </Button>
                </NavLink>
              ))}
            </Box>
            <Box className='nav-login'>
              {!user.status ? (
                <NavLink to='/signup'>
                  <Button className="signup-button"
                  >Sign up
                  </Button>
                </NavLink>
              ) : (
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
              )}
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting, index) => (
                  <MenuItem key={index} onClick={() => {
                    handleCloseUserMenu()
                    // setting.call()
                  }}>
                    <Typography textAlign="center">{setting.menu}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            className='nav-menu'
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
    </header>
  );
}



export default Navbar;