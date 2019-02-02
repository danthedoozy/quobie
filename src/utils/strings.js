// Check string inputs for URLs
export const checkForUrls = str => (/(?:(?:https?|HTTPS?|ftp|FTP):\/\/|www.|WWW.)[\n\S]+/g.test(str));
