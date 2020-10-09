import {
  defineNextGeneration,
} from '../defineNextGeneration';

describe('defineNextGeneration test case', () => {

  it('edge cases when all cells (or most of cells) equal to false', () => {
    const prevState = [
      [false, false],
      [false, false]
    ];
    const prevState1 = [
      [false, false],
      [false, true]
    ];
    const nextState = prevState.slice();

    expect(defineNextGeneration(prevState)).toEqual(nextState);
    expect(defineNextGeneration(prevState1)).toEqual(nextState);
  });

  it('edge cases when all cells ((or most of cells)) equal to true', () => {
    const prevState = [
      [true, true],
      [true, true]
    ];
    const prevState1 = [
      [true, true],
      [true, false]
    ];
    const nextState = prevState.slice();

    expect(defineNextGeneration(prevState)).toEqual(nextState);
    expect(defineNextGeneration(prevState1)).toEqual(nextState);
  });


  it('grid of 3', () => {
    const prevState = [
      [true, true, true],
      [false, false, false],
      [false, false, true]
    ];
    const nextState = [
      [false, true, false],
      [false, false, true],
      [false, false, false]
    ];

    const nextState2 = [
      [false, true, false],
      [false, false, true],
      [false, false, false]
    ];

    expect(defineNextGeneration(prevState)).toEqual(nextState2);
  });

  it('gird of 4 (examples from wiki)', () => {
    const prevState = [
      [false, false, false, false],
      [false, true, true, false],
      [false, true, true, false],
      [false, false, false, false]
    ];
    const prevState1 = [
      [false, false, false, false],
      [false, true, true, false],
      [false, true, false, false],
      [false, false, false, false]
    ];
    const nextState = prevState.slice(); // todo here slice is okay?

    expect(defineNextGeneration(prevState)).toEqual(nextState);
    expect(defineNextGeneration(prevState1)).toEqual(nextState);
  });
});