import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Container, Link } from '@material-ui/core';
import { Star } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '8',
        topMargin: '10px',
        width: '100%',
    },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Container maxWidth="xl">
        <Typography component="div" style={{ backgroundColor: '#ffffff', height: 'auto', padding:'10px 0 0 10px' }} >
            <Typography variant='h4' gutterBottom>About this Page</Typography>
            <Typography variant='h5' gutterBottom>This page shows a simple demo of fetch data from api
             and display it using material table, where user be able to sort the data based on cloumn and
             also can search the name of country in the table. </Typography>
            <Typography variant='h5' gutterBottom>Made With,</Typography>
            <Typography variant='h5' gutterBottom><Star /> <Link href='https://material-ui.com'>@Material-ui</Link></Typography>
            <Typography variant='h5' gutterBottom><Star /> <Link href='https://material-table.com/#/'>Material Table</Link></Typography>
            <Typography variant='h5' gutterBottom><Star /> API -- <Link href='https://restcountries.eu/'>restcountries api</Link></Typography>
        </Typography>
      </Container>
    </div>
  );
}
