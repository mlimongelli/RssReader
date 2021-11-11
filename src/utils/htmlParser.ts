export const extractTags = (html: string) => {
  html = html.replace(/^<\!\[CDATA\[|\]\]>$/g, '');

  const tags = /<.+>/g.exec(html);
  tags?.forEach(tag => {
    const attr =
      /(\w+)=["']?((?:.(?!["']?\s+(?:\S+)=|\s*\/?[>"']))+.)["']?/g.exec(tag);

    if (tag.startsWith('<img') && attr && attr[1] === 'src') {
      console.log(attr[2]);
    }
  });

  return html;
};
