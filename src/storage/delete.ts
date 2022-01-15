import canUseDOM from '../canUseDOM';

/**
 * Function to remove item in localstorage
 * @param {string} KEY
 * @returns {boolean}
 */
function deleteItem(KEY: string): boolean {
  try {
    if (canUseDOM) {
      localStorage.removeItem(KEY);
      return true;
    }

    return false;
  } catch {
    return false;
  }
}

export default deleteItem;
