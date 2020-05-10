import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface AmericanStateObject {
  state: string;
  hospitalizedCurrently: number | null;
  deaths: number;
}

interface Props {
  americanStates: AmericanStateObject[];
}

/* const useStyles = makeStyles({
  table: {
    maxWidth: 'md',
  },
}); */

const CovidTable: React.FC<Props> = ({ americanStates }) => {
  //const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="Table of Covid-19 cases in America">
        <TableHead>
          <TableRow>
            <TableCell>State</TableCell>
            <TableCell align="right">Currently in hospital</TableCell>
            <TableCell align="right">Latest deaths in 3 days</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {americanStates.map(({ state, hospitalizedCurrently, deaths }) => (
            <TableRow key={state}>
              <TableCell>{state}</TableCell>
              <TableCell align="right">{hospitalizedCurrently || 0}</TableCell>
              <TableCell align="right">{deaths}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CovidTable;
