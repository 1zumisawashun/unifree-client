/**
 * @see https://sentry.io/answers/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript/
 */
export function formatFirstLetterUpperCase(str: string) {
  return str[0]!.toUpperCase() + str.slice(1);
}

export function formatLinkableText(str: string) {
  const regex = /((https?:\/\/)[^\s]+)/g;

  return str.replace(regex, (_, url) => {
    return '<a href="' + url + '" target="_blank">' + url + "</a>";
  });
}
