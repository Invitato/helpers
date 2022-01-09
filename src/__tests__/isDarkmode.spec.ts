import isDarkmode from '../isDarkmode';

describe('validaing src/isDarkmode', () => {
  let windowSpy: any;

  beforeEach(() => {
    windowSpy = jest.spyOn(window, 'window', 'get');
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });

  it('should return true if darkmode mode activated', () => {
    // mock matchMedia
    windowSpy.mockImplementation(() => ({
      matchMedia: (key: string) => ({
        matches: true,
      }),
    }));

    expect(isDarkmode()).toBeTruthy();
  });

  it('should return true if darkmode mode activated', () => {
    // mock matchMedia
    windowSpy.mockImplementation(() => ({
      matchMedia: (key: string) => ({
        matches: false,
      }),
    }));

    expect(isDarkmode()).toBeFalsy();
  });
});
