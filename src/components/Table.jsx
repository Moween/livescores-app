import React from 'react';
import TableData from './TableData';
import { useStyles } from '../utils/styles';

const Table = ({ soccerData }) => {
  const { table } = useStyles();
  return (
    <table className={table}>
      <thead>
        <tr>
          {/* <th>League</th>
          <th>HomeTeam</th>
          <th></th>
          <th>AwayTeam</th>
          <th>OverUnderOdd</th>
          <th>Tip</th>
          <th>Score</th> */}
        </tr>
      </thead>
      <tbody>
        {soccerData.map((data) => {
          return (
            <TableData
              key={data.fid}
              date={data.date}
              league={data.league}
              homeTeam={data.homeTeam}
              awayTeam={data.awayTeam}
              overUnderOdd={data.overUnderOdd}
              tip={data.tip}
              score={data.score}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
