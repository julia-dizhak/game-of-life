import React from 'react';
import { Square } from './Square';

// build a grid via rows and cols
const Grid = ({gridState}) => {
  let rows = [];
  const r = gridState.length;
  const c = gridState[0].length;

  for (let i = 0; i < r; i++) {
    let cols = [];
    for (let j = 0; j < c; j++) {
      cols.push(
        <Square 
          key={`${r},${c}`}
          className={gridState[i][j] ? 'alive' : 'dead'}
        />
      )
    }
    rows.push(
      <div 
        key={r}
        className="row"
        >
          {cols}
      </div>
    )
  }

  return (
    <div className="grid"> 
      {rows}
    </div>
  )
}

export { Grid }