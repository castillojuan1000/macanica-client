import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import ProfilePhoto from '../images/profile-photo.jpg'

export default function CustomerCard({customerData}) {
  const {FirstName, LastName, Phone} = customerData;
  const phoneNumberDashes = Phone.slice(0,3)+"-"+Phone.slice(3,6)+"-"+Phone.slice(6)

  const handleClick = () => {
    alert("Card cliked")
  }
  return (
    <Card sx={{ maxWidth: 345 }} onClick={handleClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={ProfilePhoto}
          alt="profile photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {FirstName} {LastName}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Phone: {phoneNumberDashes}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
