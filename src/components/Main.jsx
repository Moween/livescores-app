import React, { useState, useEffect } from 'react';
import { apiUrl } from '../config.json';
import httpService from '../services/httpService';
import Table from './Table';
import { ToastContainer } from 'react-toastify';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
  container: {
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '80%',
      margin: '0 auto 0 auto'
    },
  }
}))

const Main = () => {
  const [soccerData,  setSoccerData] = useState([]);
  const { container } = useStyles();

  useEffect(() => {
    (async (url) => {
      const data = await httpService(url);
      setSoccerData(data);
      }
    )(apiUrl);
  }, []);
  console.log('State => ', soccerData);
  return ( 
    <main>
      <ToastContainer />
      <Container maxWidth="xl" className={container}>
        {soccerData && <Table soccerData={soccerData} />}
      </Container>
    </main>
  );
}
 
export default Main;