/**
 * Function to check is can use the DOM or not
 * @returns {boolean}
 */
function canUseDOM() {
  if (typeof window !== 'undefined' && window.document && window.document.createElement) {
    return true;
  }

  return false;
}

export default canUseDOM;
