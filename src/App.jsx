import { useState, } from 'react'

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './App.css'
import OutputCard from "./components/OutputCard/OutputCard"
import { Box, Container, Link, Stack, Typography } from '@mui/material';
import Navbar from './components/Navbar/Navbar';

function Copyright() {
  return (
    <Typography variant="body2" color="white">
      {"Copyright © "}
      <Link color="inherit" href="/" underline='none'>
        CarbonFoodprint
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function App() {
  const [data,setData] = useState(null)
  const [message, setMessage] = useState("");

  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  function GetData(){
      setMessage("Loading...")
      setData(null)
      fetch(import.meta.env.VITE_API_KEY+inputText)
      .then(response => response.json())
      .then(json => {
          if(json.length != 0){
            setMessage("")
            setData(json)
          }else{
            setMessage("Not items found in our database!")
          }
        })
      .catch(error => console.error(error));
  }

  const handleEnter = (e) =>{
    e.preventDefault();
  }


  return (
    <Box>
    <Navbar />
    <Box
      sx={{
        display: "flex",
        flexDirection:"column",
      }}
    >
      <h1>Carbon<span style={{color:"#00b300"}}>Foodprint</span></h1>
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
        <br />
        {message}
        {data? <Typography variant='subtitle1' sx={{color:"white"}}>{data.length} item(s) found!</Typography>:<></>}
        {data? data.map(function(mindata, i){
          return <OutputCard info={mindata} key={i}/>
        }):<></>}
      </Stack>
    </Box>
    <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
          }}
      >
        <Container maxWidth="sm">
          <Typography variant='body1'>Built by <Link sx={{color:"orange"}} href="https://dhruvshanbhag.vercel.app/" underline='none' target="_blank">DS</Link></Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  )
}

export default App
