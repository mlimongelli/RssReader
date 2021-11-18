import {FeedItem} from 'react-native-rss-parser';

import {RssFeedItem} from '../hooks/constants/types/components';

export const extractTags = (feetItem: FeedItem) => {
  const images: string[] = [];
  const html = feetItem.description.replace(/^<\!\[CDATA\[|\]\]>$/g, '');

  if (html) {
    const tags = /<.+>/g.exec(html);
    tags?.forEach(tag => {
      const attr =
        /(\w+)=["']?((?:.(?!["']?\s+(?:\S+)=|\s*\/?[>"']))+.)["']?/g.exec(tag);

      if (tag.startsWith('<img') && attr && attr[1] === 'src') {
        images.push(attr[2]);
      }
    });
  }

  feetItem.enclosures.forEach(i => {
    if (i.mimeType.startsWith('image')) images.push(i.url);
  });

  const result: RssFeedItem = {
    title: feetItem.title,
    images: images,
    published: new Date(feetItem.published),
  };

  return result;
};
