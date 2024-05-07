import { useState, } from 'react'

import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import OutputCard from "../../components/OutputCard/OutputCard"
import { Box, Container, Stack, Typography } from '@mui/material';


function Home() {
  const [data,setData] = useState(null)
  const [message, setMessage] = useState("");

  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  function GetData(){
      setMessage("Loading...")
      setData(null)
      if(inputText.length != 0){
        const url = import.meta.env.VITE_API_URL+inputText
        fetch(url, {
          method: "GET",
          headers:{
            "x-api-key": import.meta.env.VITE_API_KEY
          }
        })
        .then(response => response.json())
        .then(json => {
            if(json.length != 0){
              setMessage("")
              setData(json)
            }else{
              setMessage("Not items found in our database!")
            }
          })
        .catch(error => setMessage(error));
      }
      else{
        setMessage("Cannot pass empty inputs. Please enter an item!")
      }
  }

  const handleEnter = (e) =>{
    e.preventDefault();
  }


  return (
    <Box component="main">
      <Container maxWidth="md" style={{display:"flex", flexDirection:"column" }}>
        <Stack spacing={2}>
          <Typography variant='h3'>Carbon<span style={{color:"#00b300"}}>Foodprint</span></Typography>
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
          {data? data.map(mindata =>{
            return <OutputCard info={mindata} key={mindata._id}/>
          }):<></>}
        </Stack>
      </Container>
    </Box>
  )
}

export default Home
