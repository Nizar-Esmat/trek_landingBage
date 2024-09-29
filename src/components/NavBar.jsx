import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import logo from "../assets/logo.jpg";
import { Link as Scroll } from 'react-scroll';  // Import react-scroll Link

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 2 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Logo on the Left */}
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex' } }}>
                        <img alt="Logo" src={logo} />
                    </Box>

                    {/* Menu Icon on the Left */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="black"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {/* Define each menu item individually */}
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Scroll
                                    to="home"
                                    smooth={true}
                                    duration={500}
                                    style={{ textDecoration: 'none', color: 'black' }}
                                >
                                    Home
                                </Scroll>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Scroll
                                    to="offers"
                                    smooth={true}
                                    duration={500}
                                    style={{ textDecoration: 'none', color: 'black' }}
                                >
                                    offers
                                </Scroll>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Scroll
                                    to="Service"
                                    smooth={true}
                                    duration={500}
                                    style={{ textDecoration: 'none', color: 'black' }}
                                >
                                    Service
                                </Scroll>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Scroll
                                    to="blog"
                                    smooth={true}
                                    duration={500}
                                    style={{ textDecoration: 'none', color: 'black' }}
                                >
                                    Blog
                                </Scroll>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Scroll
                                    to="services"
                                    smooth={true}
                                    duration={500}
                                    style={{ textDecoration: 'none', color: 'black' }}
                                >
                                    Services
                                </Scroll>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Scroll
                                    to="abouts"
                                    smooth={true}
                                    duration={500}
                                    style={{ textDecoration: 'none', color: 'black' }}
                                >
                                    About Us
                                </Scroll>
                            </MenuItem>
                        </Menu>
                    </Box>

                    {/* Page Buttons for Larger Screens */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
                        {/* Define each button individually */}
                        <Button
                            sx={{
                                m: 2,
                                fontSize: "16px",
                                color: 'black',
                                display: 'block',
                                '&:hover': {
                                    color: 'red',  // Change color to red on hover
                                },
                            }}
                        >
                            <Scroll
                                to="home"
                                smooth={true}
                                duration={500}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                Home
                            </Scroll>
                        </Button>
                        <Button
                            sx={{
                                m: 2,
                                fontSize: "16px",
                                color: 'black',
                                display: 'block',
                                '&:hover': {
                                    color: 'red',
                                },
                            }}
                        >
                            <Scroll
                                to="offers"
                                smooth={true}
                                duration={500}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                offers
                            </Scroll>
                        </Button>
                        <Button
                            sx={{
                                m: 2,
                                fontSize: "16px",
                                color: 'black',
                                display: 'block',
                                '&:hover': {
                                    color: 'red',
                                },
                            }}
                        >
                            <Scroll
                                to="Service"
                                smooth={true}
                                duration={500}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                Service
                            </Scroll>
                        </Button>
                        <Button
                            sx={{
                                m: 2,
                                fontSize: "16px",
                                color: 'black',
                                display: 'block',
                                '&:hover': {
                                    color: 'red',
                                },
                            }}
                        >
                            <Scroll
                                to="blog"
                                smooth={true}
                                duration={500}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                Blog
                            </Scroll>
                        </Button>
                        <Button
                            sx={{
                                m: 2,
                                fontSize: "16px",
                                color: 'black',
                                display: 'block',
                                '&:hover': {
                                    color: 'red',
                                },
                            }}
                        >
                            <Scroll
                                to="services"
                                smooth={true}
                                duration={500}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                Services
                            </Scroll>
                        </Button>
                        <Button
                            sx={{
                                m: 2,
                                fontSize: "16px",
                                color: 'black',
                                display: 'block',
                                '&:hover': {
                                    color: 'red',
                                },
                            }}
                        >
                            <Scroll
                                to="abouts"
                                smooth={true}
                                duration={500}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                About Us
                            </Scroll>
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
