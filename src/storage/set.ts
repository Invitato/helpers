import canUseDOM from '../canUseDOM';

/**
 * Function to set value to localstorage
 * @param {string} KEY
 * @param {string} value
 * @returns {boolean}
 */
function setItem(KEY: string, value: any): boolean {
  try {
    if (canUseDOM) {
      localStorage.setItem(KEY, value);
      return true;
    }

    return false;
  } catch {
    return false;
  }
}

export default setItem;
