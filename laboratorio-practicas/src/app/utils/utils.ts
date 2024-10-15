// /utils/utils.ts

export const normalizeTitle = (title: string): string => {
  return title
    .normalize("NFD") // Normalize the string to decompose accented characters
    .replace(/[\u0300-\u036f]/g, "") // Remove the accents
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9 ]/g, "") // Remove any non-alphanumeric characters except spaces
    .replace(/\s+/g, "-"); // Replace spaces with hyphens for URLs
};
