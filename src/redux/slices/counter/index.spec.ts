import CounterSlice, { counterActions } from './index';

describe('Redux counter reducer', () => {
  const initial = {
    count: 0,
  };

  it('Should create reducer initial', () => {
    const reducer = CounterSlice.reducer(initial, {
      type: undefined,
    });

    expect(reducer).toEqual(initial);
  });

  it('Increase action should +1', () => {
    const reducer = CounterSlice.reducer(initial, counterActions.increase());
    expect(reducer).toEqual({ count: 1 });
  });

  it('Decrease action should -1', () => {
    const reducer = CounterSlice.reducer(initial, counterActions.decrease());
    expect(reducer).toEqual({ count: -1 });
  });
});
