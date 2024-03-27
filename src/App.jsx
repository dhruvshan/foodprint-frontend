import { useState, } from 'react'

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './App.css'
import OutputCard from "./components/OutputCard/OutputCard"
import { Box, Container, Link, Stack, Typography } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {"Copyright © "}
      <Link color="inherit" href="">
        CarbonFoodprint
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function App() {
  const [data,setData] = useState(null)
  const [notFound, setNotFound] = useState("");

  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  function GetData(){
      setData(null)
      fetch(import.meta.env.VITE_API_KEY+inputText)
      .then(response => response.json())
      .then(json => json.length != 0 ? setData(json):setNotFound("Not found in our database"))
      .catch(error => console.error(error));
  }

  const handleEnter = (e) =>{
    e.preventDefault();
  }


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection:"column",
        minHeight: "100vh",
      }}
    >
      <h1>CarbonFoodprint</h1>
      <Stack spacing={2}>
        <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Enter food here:"
            inputProps={{ 'aria-label': 'Enter food here' }}
            onChange={handleChange}
            value={inputText}
            onSubmit={handleEnter}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={GetData}>
            <SearchIcon/>
          </IconButton>
        </Paper>
        {data? data.map(function(mindata, i){
          return <OutputCard info={mindata} key={i}/>
        }): 
        <div>
          <Typography>{notFound}</Typography>
        </div>}
      </Stack>
      <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
          }}
      >
        <Container maxWidth="sm">
          <Typography variant='body1'>Built by DS</Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  )
}

export default App
