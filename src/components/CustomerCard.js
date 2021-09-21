import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import ProfilePhoto from '../images/profile-photo.jpg'

export default function CustomerCard({customerData}) {
  const {FirstName, LastName, Phone} = customerData;
  const phoneNumberDashes = Phone.slice(0,3)+"-"+Phone.slice(3,6)+"-"+Phone.slice(6)

  const firstNameCap = FirstName.charAt(0).toUpperCase() + FirstName.slice(1).trim();
  const lastNameCap = LastName.charAt(0).toUpperCase() + LastName.slice(1).trim();

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
          <Typography gutterBottom variant="h6" component="div">
            <strong>{firstNameCap} {lastNameCap}</strong>
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            <strong>Phone:</strong> {phoneNumberDashes}
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
