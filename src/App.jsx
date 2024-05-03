import { Box } from '@mui/material';
import {ThemeProvider, createTheme, responsiveFontSizes} from '@mui/material/styles';
import { Outlet } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

let theme = createTheme();
theme = responsiveFontSizes(theme);

// theme.typography.h3 = {
//   fontSize: '1.2rem',
//   '@media (min-width:600px)': {
//     fontSize: '1.5rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2.4rem',
//   },
// };

function App() {
  return (
    <>
     <ThemeProvider theme={theme}>
        <Navbar/>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems:"center",
            justifyContent:"center",
            minHeight: '80vh',
          }}
        >
          <Outlet />
        </Box>
        <Footer></Footer>
      </ThemeProvider>
    </>
  )
}

export default App
