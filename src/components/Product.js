import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import accounting from "accounting"


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    marginLeft: "25%",
    height: 250,
    width: '55%',
    objectFit: 'cover'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  typography: {
    fontSize: 12,
  },
}));

export default function Product({product : {name, price, image}}) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={image}
        title={name}
      />
      <CardContent>
        <CardHeader
            action={
          <Typography
            className={classes.action}
            variant='h3'
            style={{color: "#1294ce"}}
          >
            {accounting.formatMoney(price, "$")}
            </Typography>
            }
            title={name.split(' ')[0]}
            titleTypographyProps={{variant:'h5'}}
        />
            <Typography
            className={classes.action}
            style={{fontSize: 14}}>
            {name}
            </Typography>
      </CardContent>
    </Card>
  );
}
