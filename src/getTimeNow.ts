import dayjs from 'dayjs';
/**
 * Function to get current time with default format `MM/DD/YYYY HH:mm:ss`
 * For format, you can refer the `dayjs` docs
 *
 * @param {string} format
 * @returns {string}
 */
function getTimeNow(format = 'MM/DD/YYYY HH:mm:ss'): string {
  return `${dayjs(new Date()).format(format)}`;
}

export default getTimeNow;
