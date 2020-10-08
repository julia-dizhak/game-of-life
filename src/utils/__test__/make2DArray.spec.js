import {
  make2DArray
} from '../make2DArray';

describe('make2DArray test case', () => {

  it('rows, cols equal to 2, fill equal to false', () => {
    const arr = [
      [false, false],
      [false, false]
    ];
    const fill = () => false;

    expect(make2DArray(2, 2, fill)).toEqual(arr);
  });

  it('rows, cols equal to 2, fill equal to true', () => {
    const arr = [
      [true, true],
      [true, true]
    ];
    const fill = () => true;

    expect(make2DArray(2, 2, fill)).toEqual(arr);
  });

});