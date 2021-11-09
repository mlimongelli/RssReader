export const extractTags = (html: string) => {
  html = html.replace(/^<\!\[CDATA\[|\]\]>$/g, '');

  return html;
};
