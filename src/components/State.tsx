import React from 'react';

export interface Props {
  stateData: {
    state: string;
    hospitalizedCurrently: number;
  };
}

const State: React.FC<Props> = ({ stateData }) => {
  const { state, hospitalizedCurrently } = stateData;

  return (
    <div>
      <span>
        {state} - {hospitalizedCurrently}
      </span>
    </div>
  );
};

export default State;
