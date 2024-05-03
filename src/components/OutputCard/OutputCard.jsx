import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import CardMedia from '@mui/material/CardMedia';
import { Link } from '@mui/material';


function BasicCard(props) {
  return (
    <Card sx={{ display: 'flex', justifyContent: "space-between" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', textAlign:"left", display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
          <Typography component="div" variant="h6">
            {props.info.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            <span style={{color:"black"}}>{props.info.footprint} kgCo2e</span>/{props.info.units}
          </Typography>
            {props.info.reference == null || props.info.reference == "Self Calculated" ? 
              <Typography>Self Calculated</Typography> :
              <Link className='referenceLink' rel="noopener noreferrer" underline='none'  href={props.info.reference} target="_blank">Reference</Link>
            }
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        className='outputPhoto'
        sx={{width: "150px", height: "150px"}}
        image={props.info.imageUrl}
        alt={props.info.name}
      />
    </Card>
  );
}

BasicCard.propTypes = {
    info: PropTypes.objectOf(
      PropTypes.shape({
        _id: PropTypes.string,
        name: PropTypes.string,
        query: PropTypes.string,
        footprint: PropTypes.string,
        imageUrl: PropTypes.string,
      })
    ),
};

export default BasicCard;