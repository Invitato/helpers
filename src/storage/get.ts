import canUseDOM from '../canUseDOM';

/**
 * Function to get value to localstorage
 * @param {string} KEY
 * @returns {any | undefined}
 */
function getItem(KEY: string): any | undefined {
  try {
    if (canUseDOM) {
      const result = localStorage.getItem(KEY);
      return result;
    }

    return undefined;
  } catch {
    return undefined;
  }
}

export default getItem;
