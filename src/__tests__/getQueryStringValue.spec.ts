import getQueryStringValue from '../getQueryStringValue';

describe('validating `src/getQueryStringValue`..', () => {
  it('should return `invitation` when given `?type=invitation`', () => {
    expect(getQueryStringValue({ search: '?type=invitation' }, 'type')).toBe('invitation');
  });

  it('should return `indra` when given `?to=indra&type=invitation`', () => {
    expect(getQueryStringValue({ search: '?to=indra&type=invitation' }, 'to')).toBe('indra');
  });

  it('should return empty string when given invalid qs or queryName', () => {
    expect(getQueryStringValue({ search: '?type=indra' }, 'to')).toBe('');
    expect(getQueryStringValue({ search: '?type=indra&to=' }, 'to')).toBe('');
  });
});
