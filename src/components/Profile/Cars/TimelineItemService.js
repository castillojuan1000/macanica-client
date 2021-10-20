import React, {Fragment} from 'react';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function TimelineItemService({service}){
  let dateCreated = new Date(service.CreatedAt)
  dateCreated = dateCreated.toDateString()


  
  return(
    <Fragment>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          {dateCreated}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          <div>
          {service.Comment} 
          </div>
          <div>
          Miles: {service.Miles}
          </div>
          </TimelineContent>
      </TimelineItem>
    </Fragment>
  )
}