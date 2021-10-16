import React from 'react';
import Box from '@material-ui/core/Box';
import getTime from '../utils/getTime';
import { useStyles } from '../utils/styles';

const TableData = (props) => {
  const {
    date,
    league,
    homeTeam,
    awayTeam,
    overUnderOdd,
    tip,
    score
  } = props;

  const { team, time } = useStyles;
  return (
    <tr>
      <td>{league}</td>
      <td>
        <span className={team}>{homeTeam}</span>
      </td>
      <td>
        <Box sx={{
          display:'inline-block',
          width: 50,
          height: 20,
          bgcolor: '#42b72a',
          marginTop: 5,
          }}
        >
          <span className={time}>{getTime({date})}</span>
        </Box>
      </td>
      <td>
        <span className={team}>{awayTeam}</span>
      </td>
      <td>{overUnderOdd}</td>
      <td>{tip}</td>
      <td>{score}</td>
    </tr>
  );
}
 
export default TableData;