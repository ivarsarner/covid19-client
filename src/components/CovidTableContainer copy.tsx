import React, { useEffect, useState } from 'react';
import axios from 'axios';
import State from './State';

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
      const { data } = await axios.get('https://covidtracking.com/api/v1/states/current.json');
      console.log(data[0]);
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
        <div>
          <span>State - Currently in hospital</span>
          {americanStates.map((item: any) => (
            <State
              key={item.state}
              stateData={{ state: item.state, hospitalizedCurrently: item.hospitalizedCurrently || 0 }}
            />
          ))}
        </div>
      ) : (
        <div>No data</div>
      )}
    </>
  );
};

export default CovidTableContainer;
