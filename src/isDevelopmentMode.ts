/**
 * Function to check is Development Mode or Not
 * @return {boolean}
 */
function isDevelopment(): boolean {
  try {
    if (typeof window.location !== 'undefined') {
      if (window.location.href.includes('//localhost')) return true;
    }
  } catch (error) {
    console.log('ERR_WHEN_ACCESS_DOM');
  }

  return false;
}

export default isDevelopment;
