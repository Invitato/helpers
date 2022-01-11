/**
 * Function to return value from querystring
 * @param {Location} location
 * @param {string} name
 * @returns {string}
 */
function getQueryValue(location: Location, queryName: string): string {
  const testedName = queryName.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp(`[\\?&]${testedName}=([^&#]*)`);
  const results = regex.exec(location.search);

  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

export default getQueryValue;
