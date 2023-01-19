/* eslint-disable react/prop-types */
import React from 'react';

function Table({ records }) {
  const teams = Object.keys(records);
  const rowData = {};

  for (let i = 0; i < teams.length; i += 1) {
    const row = [];
    const winner = Object.values(records[teams[i]]);

    for (let j = 0; j < winner.length; j += 1) {
      if (j === i) {
        row.push('--');
      }
      row.push(winner[j].W);
    }

    row.unshift(teams[i]);
    if (row.length < teams.length + 1) {
      row.push('--');
    }
    rowData[teams[i]] = row;
  }

  return (
    <div>
      <h1>Win-Loss Table</h1>
      <table>
        <thead>
          <tr>
            <th>Tm</th>
            {teams.map((team) => <th>{`${team}`}</th>)}
          </tr>
        </thead>
        <tbody>
          {teams.map((team) => (
            <tr key={team}>
              {rowData[team].map((numWins) => <td>{numWins}</td>)}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Tm</th>
            {teams.map((team) => <th>{`${team}`}</th>)}
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Table;
