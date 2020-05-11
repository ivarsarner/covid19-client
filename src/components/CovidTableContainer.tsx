import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CovidTable from './CovidTable';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';

const initialState = {
  status: 'loading',
  error: '',
  americanStates: [],
};

const CovidTableContainer: React.FC = () => {
  const [covidData, setCovidData] = useState(initialState);
  const { status, error, americanStates } = covidData;

  const getCovidData = async () => {
    try {
      const url = process.env.REACT_APP_API_URL || '';
      const { data } = await axios.get(url);
      setCovidData({
        status: 'success',
        error: '',
        americanStates: data,
      });
    } catch (error) {
      setCovidData({
        status: 'error',
        error: error.message,
        americanStates: [],
      });
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      {status === 'loading' ? (
        <div>Loading...</div>
      ) : status === 'error' ? (
        <div>{error}</div>
      ) : status === 'success' ? (
        <>
          <CssBaseline />
          <main>
            <Container maxWidth="md">
              <Header />
              <CovidTable americanStates={americanStates} />
            </Container>
          </main>
        </>
      ) : (
        <div>No data found</div>
      )}
    </>
  );
};

export default CovidTableContainer;
