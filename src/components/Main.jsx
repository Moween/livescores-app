import React, { useState, useEffect } from 'react';
import { apiUrl } from '../config.json';
import { ToastContainer } from 'react-toastify';
import Container from '@material-ui/core/Container';

import Table from './Table';
import httpService from '../services/httpService';
import { useStyles } from '../utils/styles';


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