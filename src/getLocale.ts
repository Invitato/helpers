interface LocaleResult {
  id: string;
  en: string;
}

/**
 * Function to get locale text by Id or En
 * @param {string} id
 * @param {string} en
 * @returns {LocaleResult}
 */
export default function getLocale(id: string, en: string): LocaleResult {
  return {
    id,
    en,
  };
}
