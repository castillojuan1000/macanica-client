import React, {Fragment} from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import SingleCarAccordion from './SingleCarAccordion';

export default function CarsAccordions({cars}) {
  const [expanded, setExpanded] = React.useState(false || JSON.parse(window.localStorage.getItem('localStorageExtended')));

  const handlePanel = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    const localStorageExtended = (isExpanded ? panel : false)
    window.localStorage.setItem('localStorageExtended', JSON.stringify(localStorageExtended));
  }; 

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="md" sx={{marginTop: 15, marginBottom: 5}}>
        {
          cars.map(car => (
            <SingleCarAccordion car={car} expanded={expanded} handlePanel={handlePanel} key={car.ID}/>
          ))
        }
        
      </Container>
    </Fragment>
  );
}
