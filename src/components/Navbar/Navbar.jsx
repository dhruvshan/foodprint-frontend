
import { useState } from "react";
import PropTypes from 'prop-types';
import { Box, Divider, List, ListItem, ListItemButton, ListItemText, AppBar, Toolbar, IconButton, Button, Drawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;

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
                <ListItem disablePadding>
                    <ListItemButton href="/ranking" sx={{ textAlign: 'center' }}>
                        <ListItemText primary="Ranking" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return(
        <Box sx={{ display: 'flex'}}>
            <AppBar component="nav" color="transparent" position="sticky">
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
                        <Button href="/" sx={{ color: '#fff' }}>
                            Home
                        </Button>
                        <Button href="/about" sx={{ color: '#fff' }}>
                            About
                        </Button>
                        <Button href="/ranking" sx={{ color: '#fff' }}>
                            Ranking
                        </Button>
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
    window: PropTypes.func,
};