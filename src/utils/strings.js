// Check string inputs for URLs
export const checkForUrls = str => (/(?:(?:https?|ftp):\/\/|www[.])[\n\S]+/gi.test(str));
