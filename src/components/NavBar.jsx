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
import { Link } from "react-router-dom";

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
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="red"
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
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link to="/Home" style={{ textDecoration: 'none', color: 'black' }}>
                                    Home
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
                                    About
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link to="/blog" style={{ textDecoration: 'none', color: 'black' }}>
                                    Blog
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>
                                    Contact
                                </Link>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Link to="/service" style={{ textDecoration: 'none', color: 'black' }}>
                                    Service
                                </Link>
                            </MenuItem>
                        </Menu>
                    </Box>

                    {/* Page Buttons for Larger Screens */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
                        <Button
                            component={Link}
                            to="/Home"
                            sx={{
                                m: 2,
                                fontSize: "16px",
                                color: 'black',
                                display: 'block',
                                textDecoration: 'none',
                                '&:hover': { color: 'red' },
                            }}
                        >
                            Home
                        </Button>
                        <Button
                            component={Link}
                            to="/about"
                            sx={{
                                m: 2,
                                fontSize: "16px",
                                color: 'black',
                                display: 'block',
                                textDecoration: 'none',
                                '&:hover': { color: 'red' },
                            }}
                        >
                            About
                        </Button>
                        <Button
                            component={Link}
                            to="/blog"
                            sx={{
                                m: 2,
                                fontSize: "16px",
                                color: 'black',
                                display: 'block',
                                textDecoration: 'none',
                                '&:hover': { color: 'red' },
                            }}
                        >
                            Blog
                        </Button>
                        <Button
                            component={Link}
                            to="/contact"
                            sx={{
                                m: 2,
                                fontSize: "16px",
                                color: 'black',
                                display: 'block',
                                textDecoration: 'none',
                                '&:hover': { color: 'red' },
                            }}
                        >
                            Contact
                        </Button>
                        <Button
                            component={Link}
                            to="/service"
                            sx={{
                                m: 2,
                                fontSize: "16px",
                                color: 'black',
                                display: 'block',
                                textDecoration: 'none',
                                '&:hover': { color: 'red' },
                            }}
                        >
                            Service
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
