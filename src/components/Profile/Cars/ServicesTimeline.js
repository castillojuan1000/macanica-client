import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItemService from './TimelineItemService';

export default function ServicesTimeline({services}) {
  return (
    <React.Fragment>
      <Timeline position="right" sx={{marginTop: 5}}>
        {
          services.map(service => (
            <TimelineItemService service={service} key={service.ID}/>
          ))
        }
      </Timeline>
    </React.Fragment>
  );
}