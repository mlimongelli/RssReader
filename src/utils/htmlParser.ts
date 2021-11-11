import {FeedItem} from 'react-native-rss-parser';

import {RssFeedItem} from '../hooks/constants/types/components';

export const extractTags = (feetItem: FeedItem) => {
  const html = feetItem.description.replace(/^<\!\[CDATA\[|\]\]>$/g, '');

  const tags = /<.+>/g.exec(html);
  const images: string[] = [];
  tags?.forEach(tag => {
    const attr =
      /(\w+)=["']?((?:.(?!["']?\s+(?:\S+)=|\s*\/?[>"']))+.)["']?/g.exec(tag);

    if (tag.startsWith('<img') && attr && attr[1] === 'src') {
      console.log(attr[2]);
      images.push(attr[2]);
    }
  });

  const result: RssFeedItem = {
    title: feetItem.title,
    images: images,
  };

  console.log(result);

  return result;
};
