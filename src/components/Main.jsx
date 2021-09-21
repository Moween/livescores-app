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
      width: '100%',
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
  return ( 
    <main>
      <ToastContainer />
      <Container maxWidth="lg" className={container}>
        {soccerData && <Table soccerData={soccerData} />}
      </Container>
    </main>
  );
}
 
export default Main;