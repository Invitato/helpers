declare global {
  interface Window {
    MSStream: any;
    opera: any;
  }
}

type OSResult = 'android' | 'ios' | 'unknown';

/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {OSResult}
 */
function getMobileOperatingSystem(): OSResult {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    return 'android';
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'ios';
  }

  return 'unknown';
}

export default getMobileOperatingSystem;
