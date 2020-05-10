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
      const { data: currentData } = await axios.get('https://covidtracking.com/api/v1/states/current.json');
      const { data: newDeathsData } = await axios.get('http://localhost:9000/');
      //console.log(data[0]);
      //console.log(response.data);
      setCovidData({
        status: 'success',
        error: '',
        americanStates: currentData.map((item: any, index: any) => ({
          state: item.state,
          hospitalizedCurrently: item.hospitalizedCurrently,
          deaths: newDeathsData[index].deaths,
        })),
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
