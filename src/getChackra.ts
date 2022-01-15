const getChackraTheme = (key: string): string => {
  return `var(--chakra-colors-theme-${key})`;
};

export default getChackraTheme;
