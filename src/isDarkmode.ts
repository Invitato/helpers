/**
 * Function to get darkmode status by detecting prefer-color-scheme
 * @returns {boolean}
 */
function isDarkmode(): boolean {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return true;
  }

  return false;
}

export default isDarkmode;
