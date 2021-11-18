import {useState} from 'react';
import * as rssParser from 'react-native-rss-parser';

import {extractTags} from '../utils/htmlParser';
import {RssFeedItem} from './constants/types/components';

export const useRssFeed = () => {
  const [rssFeedItems, setRssFeedItems] = useState<RssFeedItem[]>([]);

  const refresh = async () => {
    setRssFeedItems([]);

    console.log('refreshing...');

    const response = await fetch(
      // 'https://www.jw.org/it/news/jw-news/rss/NewsSubsectionRSSFeed/feed.xml',
      'http://www.nasa.gov/rss/dyn/breaking_news.rss',
    );
    const responseData = await response.text();
    const rss = await rssParser.parse(responseData);
    const items = rss.items.map(i => extractTags(i));
    console.log(items);
    setRssFeedItems(items);

    console.log('done.');
  };

  return {refresh, rssFeedItems};
};
