import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import {
  Box,
  Stack,
  Typography,
  Container,
  Grid,
  Table
} from '@mui/material';

import "./Rankings.css"

import { useState, useEffect, useMemo } from 'react';

const columns = [
  {
    accessorKey: 'name',
    header: 'Name',
    enableEditing: true,
  },
  {
    accessorKey: 'footprint',
    header: 'Footprint (kgCO2e)',
  },
  {
    accessorKey: 'units',
    header: 'Units',
  }
];

const Ranking = () => {
    const [data, setData] = useState([])
    const [message, setMessage] = useState("")

    const fetchData = useMemo(() => async()=> {
      const url = import.meta.env.VITE_API_SORT_URL+"desc"
      fetch(url,{
        method:"GET",
        headers:{
          "x-api-key": import.meta.env.VITE_API_KEY
        }
      })
      .then(response => response.json())
      .then(json => {
          if(json){
            console.log(json)
            setData(json)
          }else{
            setMessage("No data found!")
          }
        })
      .catch(error => setMessage(error));
    }, [])

    useEffect(()=>{
      fetchData();
    },[fetchData])


  const table = useMaterialReactTable({
    columns,
    data,
    initialState: {
      pagination: { pageSize: 20, pageIndex: 0 },
      showGlobalFilter: true,
    },
    //customize the MRT components
    muiPaginationProps: {
      rowsPerPageOptions: [10, 20, 50, 100],
      variant: "outlined"
    },
    paginationDisplayMode: 'pages',
  });

  return (
    <Box component="main">
      <Container maxWidth="md" style={{display:"flex", flexDirection:"column" }}>
        <Stack sx={{ m: '2rem 0' }} gap={2}>
          <Typography variant="h3">Footprint <span style={{color:"#00b300"}}>Rankings</span></Typography>
            <Grid item xs={12}>
              <Table style={{tableLayout:"fixed", overflowX:'auto'}}>
                {data? 
                <MaterialReactTable
                 table={table}
                 enableStickyHeader /> : <p>{message}</p> }
              </Table>
            </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Ranking;
