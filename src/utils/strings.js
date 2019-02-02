// Check string inputs for URLs
export const checkForUrls = str => (/(?:https?|ftp):\/\/[\n\S]+/g.test(str));
