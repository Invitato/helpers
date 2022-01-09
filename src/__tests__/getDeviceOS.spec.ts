import getDeviceOS from '../getDeviceOS';

describe('validating src/getDeviceOS', () => {
  let windowSpy: any;

  beforeEach(() => {
    windowSpy = jest.spyOn(window.navigator, 'userAgent', 'get');
  });

  afterEach(() => {
    windowSpy.mockRestore();
  });

  it('should return `android` if got UA android', () => {
    windowSpy.mockReturnValue(
      'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Mobile Safari/537.36',
    );
    expect(getDeviceOS()).toBe('android');
  });

  it('should return `ios` if got UA ios', () => {
    windowSpy.mockReturnValue(
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
    );
    expect(getDeviceOS()).toBe('ios');
  });
});
