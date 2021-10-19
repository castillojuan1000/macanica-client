import React, {Fragment} from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import DirectionsCarRoundedIcon from '@mui/icons-material/DirectionsCarRounded';
import { blue, deepOrange} from '@mui/material/colors';

export default function CarAccordion({cars}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="md" sx={{marginTop: 15, marginBottom: 5}}>
        {
          cars.map(car => (

            <Accordion expanded={expanded === `panel${car.ID}`} onChange={handleChange(`panel${car.ID}`)} key={car.ID}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: blue[600], marginRight: 1}}/>}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                
              >
                <DirectionsCarRoundedIcon sx={{ color: deepOrange[500], marginRight: 1}}/>
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  {car.Make} {car.Modelo}
                </Typography>
                <Typography lang="en" sx={{ width: '33%', flexShrink: 0 }}>
                  {car.Color}
                </Typography>
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                  {car.VinNumber}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                  Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))
        }
        
      </Container>
    </Fragment>
  );
}
