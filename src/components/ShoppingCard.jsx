import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ShoppingCard(props) {
  return (
    <Card sx={{ maxWidth: 290 }}>
      <CardActionArea>
        <CardMedia
          sx={{
            objectFit: "contain"
          }}
          component="img"
          height="140"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='contained' color="primary">
          Detail Page
        </Button>
      </CardActions>
    </Card>
  );
}