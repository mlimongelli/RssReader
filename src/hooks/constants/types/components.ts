export interface RssFeedItem {
  title: string;
  content?: string;
  images?: string[];
  published: Date;
}

export type RssFeedItems = RssFeedItem[];
