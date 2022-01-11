type Anything = string | number | unknown;

/**
 * Fallback function to copy text if navigator clipboard not ready
 * @param {Anything} text
 * @returns {boolean}
 */
function fallbackCopyTextToClipboard(text: Anything): boolean {
  const textArea = document.createElement('textarea');
  let result = false;
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.position = 'fixed';

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand('copy');
    result = successful ? true : false;
  } catch (err) {
    result = false;
  }

  document.body.removeChild(textArea);
  return result;
}

/**
 * Async function to copy text
 * @param {Anything} text
 * @returns {boolean}
 */
async function copyTextToClipboard(text: Anything): Promise<boolean> {
  let result = false;

  if (!navigator.clipboard) {
    result = fallbackCopyTextToClipboard(text);
    return result;
  }

  await navigator.clipboard.writeText(text).then(
    function () {
      result = true;
      console.log('[SUCCESS] text copied to clipboard ✅');
    },
    function (err) {
      console.log('[FAILED] text failed to clipboard ❌', err);
      result = false;
    },
  );

  return result;
}

export default copyTextToClipboard;
