import React from 'react';
import TableData from './TableData';
import { useStyles } from '../utils/styles';

const Table = ({ soccerData }) => {
  const { table } = useStyles();
  return (
    <table className={table}>
      <thead>
        <tr>
          <th>League</th>
          <th>HomeTeam</th>
          <th></th>
          <th>AwayTeam</th>
          <th>OverUnderOdd</th>
          <th>Tip</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {soccerData.map(({ fid, date, league, homeTeam, awayTeam, overUnderOdd, tip, score}) => {
          return (
            <TableData
              key={fid}
              date={date}
              league={league}
              homeTeam={homeTeam}
              awayTeam={awayTeam}
              overUnderOdd={overUnderOdd}
              tip={tip}
              score={score}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
