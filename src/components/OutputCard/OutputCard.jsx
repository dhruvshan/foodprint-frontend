import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import './OutputCard.css'
import CardMedia from '@mui/material/CardMedia';
import { Link } from '@mui/material';


export default function BasicCard(props) {
  return (
    <Card sx={{ display: 'flex', justifyContent: "space-between" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', textAlign:"left" }}>
          <Typography component="div" variant="h5">
            {props.info.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Footprint: {props.info.footprint} kgCo2e/{props.info.units}
          </Typography>
          <Typography>
            <Link className='referenceLink' rel="noopener noreferrer"  href={props.info.reference} target="_blank">Reference</Link>
          </Typography>
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
        name: PropTypes.string,
        query: PropTypes.string,
        footprint: PropTypes.string,
        imageUrl: PropTypes.string,
      })
    ),
  };