import {useState} from 'react';
import * as rssParser from 'react-native-rss-parser';

import {extractTags} from '../utils/htmlParser';
import {RssFeedItem} from './constants/types/components';

export const useRssFeed = () => {
  const [rssFeedItems, setRssFeedItems] = useState<RssFeedItem[]>([]);

  const refresh = () => {
    setRssFeedItems([]);

    return fetch(
      'https://www.jw.org/it/news/jw-news/rss/NewsSubsectionRSSFeed/feed.xml',
    )
      .then(response => response.text())
      .then(responseData => rssParser.parse(responseData))
      .then(rss => {
        rss.items.forEach(e => {
          setRssFeedItems(value => [extractTags(e), ...value]);
        });
      });
  };

  return {refresh, rssFeedItems};
};
