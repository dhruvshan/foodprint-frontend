
import { useState } from "react";
import PropTypes from 'prop-types';
import { Box, Divider, List, ListItem, ListItemButton, ListItemText, AppBar, Toolbar, IconButton, Button, Drawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;
// const navItems = ['Home', 'About'];

export default function Navbar(props){
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Divider />
            <List>
                {/* {navItems.map((item) => ( */}
                <ListItem disablePadding>
                    <ListItemButton href="/" sx={{ textAlign: 'center' }}>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton href="/about" sx={{ textAlign: 'center' }}>
                        <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>
                {/* ))} */}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return(
        <Box sx={{ display: 'flex', alignItems:"center" }}>
            <AppBar component="nav" color="transparent">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {/* {navItems.map((item) => ( */}
                        <Button href="/" sx={{ color: '#fff' }}>
                            Home
                        </Button>
                        <Button href="/about" sx={{ color: '#fff' }}>
                            About
                        </Button>
                        {/* ))} */}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
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
            </Box>
)
}

Navbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };