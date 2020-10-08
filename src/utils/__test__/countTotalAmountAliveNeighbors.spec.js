import {
  countTotalAmountAliveNeighbors
} from '../countTotalAmountAliveNeighbors';


describe('countTotalAmountAliveNeighbors test case', () => {
  it('gird of 2*2', () => {
    const state = [
      [false, false],
      [false, true]
    ];

    expect(countTotalAmountAliveNeighbors(state, 0, 0)).toEqual(1);
    expect(countTotalAmountAliveNeighbors(state, 1, 1)).toEqual(0);
  });

  it('grid of 3*3', () => {
    const state = [
      [true, true, true],
      [false, false, false],
      [false, false, true]
    ];

    expect(countTotalAmountAliveNeighbors(state, 0, 0)).toEqual(1);
    expect(countTotalAmountAliveNeighbors(state, 0, 1)).toEqual(2);
    expect(countTotalAmountAliveNeighbors(state, 0, 2)).toEqual(1);

    expect(countTotalAmountAliveNeighbors(state, 1, 0)).toEqual(2);
    expect(countTotalAmountAliveNeighbors(state, 1, 1)).toEqual(4);
    expect(countTotalAmountAliveNeighbors(state, 1, 2)).toEqual(3);
  });

});