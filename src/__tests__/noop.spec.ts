import noop from '../noop';

describe('validating `src/noop`...', () => {
  it('function should be called', () => {
    expect(noop()).toBe(undefined);
  });
});
